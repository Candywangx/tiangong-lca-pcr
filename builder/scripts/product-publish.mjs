import { createHash } from "node:crypto";
import { lstatSync, readFileSync, realpathSync } from "node:fs";
import path from "node:path";
import { performance } from "node:perf_hooks";
import { pathToFileURL } from "node:url";
import { compareSemver } from "../lib/lifecycle-policy.mjs";
import { assertCleanProductSource, assertProductIdentity } from "./product-identity.mjs";
import { productReleaseContext, validateProductManifest, verifyProductArtifacts } from "./product-release.mjs";
import { createProductionPublisherIO } from "./product-publish-io.mjs";

const hex = bytes => createHash("sha256").update(bytes).digest("hex");
const stable = value => value && typeof value === "object" && !Array.isArray(value)
  ? Object.fromEntries(Object.keys(value).sort().map(key => [key, stable(value[key])])) : Array.isArray(value) ? value.map(stable) : value;
const same = (a, b) => JSON.stringify(stable(a)) === JSON.stringify(stable(b));
const numeric = value => typeof value === "string" && /^[1-9]\d{0,17}$/u.test(value);
const markerPrefix = "<!--pcr-product-build-proof:";

export class PublisherError extends Error {
  constructor(code, message, { target = null, retryable = false } = {}) {
    super(message); this.name = "PublisherError"; this.code = code; this.target = target; this.retryable = retryable;
  }
}
const fail = (code, message, options) => { throw new PublisherError(code, message, options); };
const safeCode = error => /^(?:PCR_PRODUCT|PCR_WEB)_[A-Z_]{1,70}$/u.test(error?.code ?? "") ? error.code : "PCR_PRODUCT_OPERATION_UNCERTAIN";
function npmRetryChoice(value, eventName) {
  const choice = value === undefined ? "none" : value;
  if (!["none", "tool", "library"].includes(choice)) fail("PCR_PRODUCT_NPM_RETRY_INVALID", "Choose exactly none, tool or library for explicit npm recovery.");
  if (choice !== "none" && eventName !== "workflow_dispatch") fail("PCR_PRODUCT_NPM_RETRY_INVALID", "Explicit npm recovery requires a new operator workflow dispatch.");
  return choice;
}

export function validateBuildProof(proof, identity) {
  if (!proof || typeof proof !== "object" || Array.isArray(proof)
    || Object.keys(proof).sort().join(",") !== "artifactId,identity,manifestSha256,runId,schema"
    || proof.schema !== 1 || !same(proof.identity, identity) || !/^[a-f0-9]{64}$/u.test(proof.manifestSha256 ?? "")
    || !numeric(proof.artifactId) || !numeric(proof.runId)) fail("PCR_PRODUCT_PROOF_CONFLICT", "Build proof does not bind the product identity and original Actions artifact.");
  return proof;
}
export function checkRegistryMetadata(metadata, receipt) {
  if (!metadata || metadata.name !== receipt.name || metadata.version !== receipt.version || metadata.gitHead !== receipt.sourceCommit
    || metadata.dist?.integrity !== receipt.integrity) fail("PCR_PRODUCT_REGISTRY_CONFLICT", "Existing npm metadata differs from the sealed release.");
}

function bootstrapBody(proof) {
  return `Preparing ${proof.identity.tag}; this release is incomplete. Package distribution does not approve PCR methodology.\n${markerPrefix}${Buffer.from(JSON.stringify(proof)).toString("base64")}-->`;
}
function embeddedProof(body) {
  const match = typeof body === "string" ? body.match(/<!--pcr-product-build-proof:([A-Za-z0-9+/=]+)-->/u) : null;
  if (!match) return null;
  try { return JSON.parse(Buffer.from(match[1], "base64").toString("utf8")); }
  catch { fail("PCR_PRODUCT_PROOF_CONFLICT", "The preparing release build proof is malformed."); }
}

/** Mockable coordinator. Only publishProduct() supplies production context and transports. */
export async function coordinateProductPublication({ bundleDir, manifest, buildProof, context, io }) {
  assertProductIdentity(context.identity); validateProductManifest(manifest, { identity: context.identity, toolchain: context.toolchain });
  const identity = context.identity;
  const retryNpm = npmRetryChoice(context.retryNpm, context.eventName);
  validateBuildProof(buildProof, identity);
  if (!numeric(context.runId) || !numeric(context.attempt)) fail("PCR_PRODUCT_CONTEXT_INVALID", "Publication needs a concrete Actions run and attempt.");
  let release = null, assets = [], receipts = [], sequence = 0, selectedProof = buildProof, activeBundle = bundleDir;

  const guard = async ({ requireRef = false, requireLive = false, beforeSeal = false } = {}) => {
    const tag = await io.getTag(identity.tag);
    if (tag?.type !== "commit" || tag.sha !== identity.sourceCommit) fail("PCR_PRODUCT_TAG_MOVED", "The immutable lightweight product tag no longer matches the qualified source.");
    for (const receipt of Object.values(manifest.packages)) {
      const current = await io.registry(receipt.name, "latest");
      if (current.state === "missing") continue;
      if (current.state !== "present") fail("PCR_PRODUCT_REGISTRY_UNCERTAIN", "Cannot establish the current npm channel.", { retryable: true });
      let order;
      try { order = compareSemver(identity.version, current.metadata.version); } catch { fail("PCR_PRODUCT_REGISTRY_UNCERTAIN", "The npm channel has an invalid version."); }
      if (order < 0) fail("PCR_PRODUCT_DOWNGRADE", "Refusing an older product release after a newer npm channel.");
      if (order === 0 && !beforeSeal) checkRegistryMetadata(current.metadata, receipt);
    }
    const current = await io.getDeploymentRef();
    if (requireRef && current?.sha !== identity.sourceCommit) fail("PCR_PRODUCT_DEPLOYMENT_REF_CHANGED", "The deployment pointer changed before channel promotion.", { retryable: true });
    if (current && current.sha !== identity.sourceCommit) {
      if (current.version !== null && compareSemver(identity.version, current.version) <= 0) fail("PCR_PRODUCT_DOWNGRADE", "Refusing an older or conflicting product deployment pointer.");
      if (!(await io.isAncestor(current.sha, identity.sourceCommit))) fail("PCR_PRODUCT_DEPLOYMENT_REF_CONFLICT", "The deployment pointer cannot advance by fast-forward.");
    }
    const live = await io.getLiveIdentity();
    if (live?.state === "product") {
      try { assertProductIdentity(live.identity); } catch { fail("PCR_PRODUCT_LIVE_UNCERTAIN", "The public product identity is invalid.", { retryable: true }); }
      const order = compareSemver(identity.version, live.identity.version);
      if (order < 0) fail("PCR_PRODUCT_DOWNGRADE", "Refusing to overwrite a newer product served by the public website.");
      if (order === 0 && !same(live.identity, identity)) fail("PCR_PRODUCT_LIVE_CONFLICT", "The public website serves the same version from another source or fingerprint.");
      if (order > 0 && !(await io.isAncestor(live.identity.sourceCommit, identity.sourceCommit))) fail("PCR_PRODUCT_LIVE_CONFLICT", "The previous public website is not an ancestor of this qualified source.");
      if (requireLive && order !== 0) fail("PCR_PRODUCT_LIVE_CHANGED", "The public website changed before stable promotion.", { retryable: true });
    } else if (live?.state === "legacy" && /^[a-f0-9]{40}$/u.test(live.sourceCommit ?? "")) {
      if (requireLive) fail("PCR_PRODUCT_LIVE_CHANGED", "The public website changed to legacy content before stable promotion.", { retryable: true });
      if (!(await io.isAncestor(live.sourceCommit, identity.sourceCommit))) fail("PCR_PRODUCT_LIVE_CONFLICT", "Legacy public content is not an ancestor of the qualified source.");
    } else fail("PCR_PRODUCT_LIVE_UNCERTAIN", "Cannot establish the actual public website identity.", { retryable: true });
    const latest = await io.getLatestRelease();
    if (latest?.tag_name?.startsWith("v")) {
      let order;
      try { order = compareSemver(identity.version, latest.tag_name.slice(1)); } catch { fail("PCR_PRODUCT_RELEASE_UNCERTAIN", "The latest product release tag is invalid."); }
      if (order < 0) fail("PCR_PRODUCT_DOWNGRADE", "Refusing to replace a newer stable GitHub product release.");
    }
    return current;
  };
  const record = async (target, operation, state, details = {}) => {
    const receipt = { schema: 1, identity, manifestSha256: selectedProof.manifestSha256, runId: context.runId,
      attempt: context.attempt, sequence: ++sequence, target, operation, state, details };
    const filename = `receipt-${context.runId}-${context.attempt}-${String(sequence).padStart(4, "0")}.json`;
    const bytes = Buffer.from(`${JSON.stringify(receipt, null, 2)}\n`);
    await io.saveAttemptReceipt?.(bundleDir, receipt);
    await io.putAsset(release, filename, { bytes, size: bytes.length, sha256: hex(bytes) });
    receipts.push(receipt); return receipt;
  };
  const mutate = async (target, operation, work, { requireRef = false, requireLive = false, accepted = {} } = {}) => {
    await guard({ requireRef, requireLive }); await record(target, operation, "intent");
    try { const result = await work(); await record(target, operation, "accepted", typeof accepted === "function" ? accepted(result) : accepted); return result; }
    catch (error) { await record(target, operation, "uncertain", { code: safeCode(error) }); throw error; }
  };
  const pending = async (target, code) => {
    await record(target, "acceptance", "pending", { code });
    return { status: "pending", identity, target, code, releaseId: release.id };
  };
  const visibility = async receipt => {
    const delays = [2000, 4000, 8000, 16000, ...Array(9).fill(30_000)]; // at most five minutes, excluding bounded HTTP time
    for (let sample = 0; sample <= delays.length; sample++) {
      await io.assertBudget?.();
      const result = await io.registry(receipt.name, receipt.version);
      if (result.state === "present") { checkRegistryMetadata(result.metadata, receipt); return result.metadata; }
      if (result.state !== "missing") fail("PCR_PRODUCT_REGISTRY_UNCERTAIN", "Cannot establish package visibility.", { retryable: true });
      if (sample < delays.length) await io.pause(delays[sample]);
    }
    return null;
  };
  const verifyPackage = async receipt => {
    const proof = await io.verifyTarball(receipt);
    if (proof.bytes !== receipt.bytes || proof.sha256 !== receipt.sha256 || proof.integrity !== receipt.integrity) fail("PCR_PRODUCT_TARBALL_CONFLICT", "The registry tarball differs from the sealed package.");
  };
  const verifyWeb = async (options = {}) => {
    const proof = await io.verifyWeb(manifest, options);
    if (proof?.verified !== true || proof.origin !== manifest.web.origin || !same(proof.identity, identity) || !same(proof.counts, manifest.web.probes.counts)) fail("PCR_PRODUCT_WEB_UNVERIFIED", "The public site has not verified this sealed release.", { retryable: true });
    return proof;
  };
  const recordWebProof = async proof => {
    await record("web", "acceptance", "verified", { projectId: context.projectId ?? null, ref: "release/production", sourceCommit: identity.sourceCommit,
      origin: manifest.web.origin, checks: (proof.checks ?? []).map(check => ({ path: check.path, status: check.status, ...(check.bytes === undefined ? {} : { bytes: check.bytes, sha256: check.sha256 }) })) });
  };
  const webConvergenceCodes = new Set(["PCR_PRODUCT_WEB_UNVERIFIED", "PCR_PRODUCT_LIVE_UNCERTAIN", "PCR_PRODUCT_LIVE_CHANGED",
    "PCR_PRODUCT_GITHUB_UNCERTAIN", "PCR_PRODUCT_REGISTRY_UNCERTAIN", "PCR_WEB_TIMEOUT", "PCR_WEB_FETCH_FAILED", "PCR_WEB_STATUS",
    "PCR_WEB_REDIRECT", "PCR_WEB_CONTENT_TYPE", "PCR_WEB_BODY_INVALID", "PCR_WEB_IDENTITY_MISMATCH", "PCR_WEB_COUNTS_MISMATCH",
    "PCR_WEB_HASH_MISMATCH", "PCR_WEB_HEADERS", "PCR_WEB_RESPONSE_TOO_LARGE"]);
  const sampleWeb = async timeoutMs => {
    await guard({ requireRef: true });
    const proof = await verifyWeb({ timeoutMs });
    // A healthy site response is not enough if its tag/ref moved during the probe.
    await guard({ requireRef: true, requireLive: true });
    return proof;
  };
  const waitForWeb = async () => {
    const deadline = performance.now() + 600_000;
    const delays = [5000, 10_000, ...Array(29).fill(20_000), 5000];
    let lastError;
    for (let sample = 0; sample <= delays.length; sample++) {
      await io.assertBudget?.();
      const remaining = Math.ceil(deadline - performance.now());
      if (remaining <= 0) break;
      try {
        await guard({ requireRef: true });
        const probeBudget = Math.min(120_000, Math.ceil(deadline - performance.now()));
        if (probeBudget <= 0) break;
        const proof = await verifyWeb({ timeoutMs: probeBudget });
        await guard({ requireRef: true, requireLive: true });
        if (performance.now() >= deadline) break;
        await recordWebProof(proof); return;
      } catch (error) {
        // Ref/tag conflicts and a newer/same-version different live source are
        // terminal for this attempt; temporary read failures remain unverified.
        if (!webConvergenceCodes.has(safeCode(error))) throw error;
        lastError = error;
      }
      if (sample === delays.length) break;
      const delay = Math.min(delays[sample], Math.ceil(deadline - performance.now()));
      if (delay <= 0) break;
      await io.pause(delay);
    }
    if (lastError) throw lastError;
    fail("PCR_PRODUCT_WEB_CONVERGENCE_PENDING", "The public website has not converged within its bounded acceptance window.", { retryable: true });
  };

  try {
    await guard({ beforeSeal: true });
    release = await io.getRelease(identity.tag);
    if (!release) {
      await io.verifyBundle(activeBundle, identity); await io.assertActionsArtifact(buildProof);
      // The release does not yet exist: bootstrap intent and proof are atomically
      // included in its creation body; all subsequent business mutations have assets.
      await io.saveAttemptReceipt?.(bundleDir, { schema: 1, identity, manifestSha256: buildProof.manifestSha256, runId: context.runId,
        attempt: context.attempt, sequence: 0, target: "github-release", operation: "create", state: "intent", details: { artifactId: buildProof.artifactId } });
      release = await io.createRelease({ tag_name: identity.tag, target_commitish: identity.sourceCommit, name: `${identity.tag} (preparing)`,
        body: bootstrapBody(buildProof), draft: false, prerelease: true, make_latest: "false" });
      if (!release?.id || release.tag_name !== identity.tag) fail("PCR_PRODUCT_RELEASE_UNCERTAIN", "Preparing release creation could not be verified.", { retryable: true });
    }
    if (release.tag_name !== identity.tag || release.draft) fail("PCR_PRODUCT_RELEASE_CONFLICT", "The product release has a conflicting tag or draft state.");
    assets = await io.listAssets(release);
    const find = name => assets.find(asset => asset.name === name);
    const proofAsset = find("build-proof.json"), manifestAsset = find("release.json");
    selectedProof = proofAsset ? JSON.parse((await io.readAsset(proofAsset, 64 * 1024)).toString("utf8")) : embeddedProof(release.body);
    if (!selectedProof) fail("PCR_PRODUCT_PROOF_CONFLICT", "The existing release has no recoverable original build proof.");
    validateBuildProof(selectedProof, identity);
    let sealed = null;
    if (manifestAsset) {
      const bytes = await io.readAsset(manifestAsset, 4 * 1024 * 1024);
      if (hex(bytes) !== selectedProof.manifestSha256) fail("PCR_PRODUCT_SEAL_CONFLICT", "The immutable release manifest does not match its build proof.");
      sealed = validateProductManifest(JSON.parse(bytes.toString("utf8")), { identity, toolchain: context.toolchain });
    }
    const currentHash = await io.manifestHash(activeBundle);
    const restoreOriginal = async () => {
      const completeAssets = sealed && ["release.json", "SHA256SUMS", ...sealed.artifacts.map(item => item.filename)].every(name => find(name));
      return completeAssets ? io.restoreReleaseAssets(release, sealed, selectedProof) : io.restoreActionsArtifact(selectedProof, identity);
    };
    if (currentHash !== selectedProof.manifestSha256) activeBundle = await restoreOriginal();
    // Before the first immutable manifest seal, retain a verified original Actions source.
    if (!manifestAsset) await io.assertActionsArtifact(selectedProof);
    if (await io.manifestHash(activeBundle) !== selectedProof.manifestSha256) fail("PCR_PRODUCT_ORIGINAL_ARTIFACT_REQUIRED", "Restore the original sealed Actions artifact; replacement builds cannot overwrite this release.");
    try { manifest = await io.verifyBundle(activeBundle, identity); }
    catch {
      activeBundle = await restoreOriginal();
      if (await io.manifestHash(activeBundle) !== selectedProof.manifestSha256) fail("PCR_PRODUCT_ORIGINAL_ARTIFACT_REQUIRED", "Restored original manifest does not match its proof.");
      manifest = await io.verifyBundle(activeBundle, identity);
    }
    validateProductManifest(manifest, { identity, toolchain: context.toolchain });
    if (sealed && !same(manifest, sealed)) fail("PCR_PRODUCT_SEAL_CONFLICT", "Restored artifacts differ from the immutable manifest.");
    for (const asset of assets.filter(asset => /^receipt-\d+-\d+-\d+\.json$/u.test(asset.name))) {
      const item = JSON.parse((await io.readAsset(asset, 64 * 1024)).toString("utf8"));
      if (item.schema !== 1 || !same(item.identity, identity) || item.manifestSha256 !== selectedProof.manifestSha256
        || !numeric(item.runId) || !numeric(item.attempt) || !Number.isSafeInteger(item.sequence) || item.sequence < 1
        || asset.name !== `receipt-${item.runId}-${item.attempt}-${String(item.sequence).padStart(4, "0")}.json`) fail("PCR_PRODUCT_RECEIPT_CONFLICT", "A publication receipt has a conflicting binding.");
      receipts.push(item);
      if (item.runId === context.runId && item.attempt === context.attempt) sequence = Math.max(sequence, item.sequence);
    }
    const proofBytes = Buffer.from(`${JSON.stringify(selectedProof, null, 2)}\n`);
    await io.putAsset(release, "build-proof.json", { bytes: proofBytes, size: proofBytes.length, sha256: hex(proofBytes) });
    await record("github-release", "prepare", "verified", { artifactId: selectedProof.artifactId, sourceCommit: identity.sourceCommit });
    const sealFiles = ["release.json", "SHA256SUMS", ...manifest.artifacts.map(item => item.filename)];
    for (const filename of sealFiles) {
      const descriptor = await io.fileDescriptor(activeBundle, filename);
      await mutate("github-assets", `seal-${filename}`, () => io.putAsset(release, filename, descriptor));
      await record("github-assets", `seal-${filename}`, "verified", { filename, bytes: descriptor.size, sha256: descriptor.sha256 });
    }

    for (const [kind, receipt] of Object.entries(manifest.packages)) {
      const target = `npm-${kind}`, state = await io.registry(receipt.name, receipt.version);
      if (state.state === "present") checkRegistryMetadata(state.metadata, receipt);
      else if (state.state !== "missing") fail("PCR_PRODUCT_REGISTRY_UNCERTAIN", "Package lookup is uncertain.", { target, retryable: true });
      else {
        const uploadOperations = ["publish", "operator-retry-publish"], uploadStates = ["intent", "accepted", "uncertain"];
        const priorPublish = receipts.some(item => item.target === target && uploadOperations.includes(item.operation) && uploadStates.includes(item.state));
        if (priorPublish) {
          if (!(await visibility(receipt))) {
            const uploadInThisRun = receipts.some(item => item.target === target && uploadOperations.includes(item.operation)
              && item.runId === context.runId && uploadStates.includes(item.state));
            if (retryNpm !== kind || uploadInThisRun) return pending(target, "PCR_PRODUCT_NPM_VISIBILITY_PENDING");
            // A previously verified immutable package cannot be described as an
            // upload that was rejected. A transient 404 must not invite replacement.
            if (receipts.some(item => item.target === target && item.operation === "package" && item.state === "verified")) {
              fail("PCR_PRODUCT_NPM_RETRY_CONFLICT", "The selected package was already verified in the registry; it cannot be republished as rejected.", { target });
            }
            try {
              await mutate(target, "operator-retry-publish", async () => {
                // Visibility may change while guards/intent storage execute.
                const current = await io.registry(receipt.name, receipt.version);
                if (current.state === "present") { checkRegistryMetadata(current.metadata, receipt); await verifyPackage(receipt); return { reused: true }; }
                if (current.state !== "missing") fail("PCR_PRODUCT_REGISTRY_UNCERTAIN", "Explicit npm recovery cannot treat an unknown registry result as absent.", { target, retryable: true });
                await io.publishNpm(receipt, activeBundle, `candidate-v${identity.version}`); return { reused: false };
              }, { accepted: result => ({ operatorConfirmedRejected: true, reusedExisting: result.reused }) });
            } catch (error) {
              if (!(await visibility(receipt))) return pending(target, safeCode(error));
            }
            if (!(await visibility(receipt))) return pending(target, "PCR_PRODUCT_NPM_VISIBILITY_PENDING");
          }
        } else {
          try { await mutate(target, "publish", () => io.publishNpm(receipt, activeBundle, `candidate-v${identity.version}`)); }
          catch (error) {
            if (!(await visibility(receipt))) return pending(target, safeCode(error));
          }
          if (!(await visibility(receipt))) return pending(target, "PCR_PRODUCT_NPM_VISIBILITY_PENDING");
        }
      }
      await verifyPackage(receipt); await record(target, "package", "verified", { name: receipt.name, version: receipt.version, sha256: receipt.sha256, integrity: receipt.integrity });
    }
    const offline = await io.verifyOfflinePair(activeBundle, manifest);
    if (offline.verified !== true || offline.toolVersion !== identity.version || offline.libraryVersion !== identity.version || offline.sourceCommit !== identity.sourceCommit) fail("PCR_PRODUCT_OFFLINE_PAIR_INVALID", "Installed tool/library do not verify the same product release.");
    await record("offline-pair", "installation", "verified", { toolVersion: offline.toolVersion, libraryVersion: offline.libraryVersion, sourceCommit: offline.sourceCommit });

    const deployment = await guard();
    if (deployment?.sha !== identity.sourceCommit) {
      await record("web", "trigger", "intent", { trigger: "git-auto-deploy", ref: "release/production", sourceCommit: identity.sourceCommit, projectId: context.projectId ?? null });
      await mutate("deployment-ref", "advance", () => io.advanceDeploymentRef(identity.sourceCommit, deployment?.sha ?? null));
      await record("web", "trigger", "accepted", { trigger: "git-ref-updated-auto-deploy", ref: "release/production", sourceCommit: identity.sourceCommit, projectId: context.projectId ?? null });
      try { await waitForWeb(); } catch (error) { return pending("web", safeCode(error)); }
    } else {
      const triggerInThisRun = receipts.some(item => item.target === "web" && ["trigger", "operator-retry-hook"].includes(item.operation)
        && item.runId === context.runId && ["intent", "accepted", "uncertain"].includes(item.state));
      let verified = false;
      if (context.retryWeb === true && !triggerInThisRun) {
        try { await recordWebProof(await sampleWeb(120_000)); verified = true; }
        catch (error) {
          if (!webConvergenceCodes.has(safeCode(error))) throw error;
          await mutate("web", "operator-retry-hook", () => io.triggerHook(), { requireRef: true,
            accepted: { trigger: "hook-accepted", operatorConfirmedTerminal: true, ref: "release/production", sourceCommit: identity.sourceCommit, projectId: context.projectId ?? null } });
        }
      }
      if (!verified) try { await waitForWeb(); } catch (error) { return pending("web", safeCode(error)); }
    }
    for (const [kind, receipt] of Object.entries(manifest.packages)) {
      await guard({ requireRef: true, requireLive: true });
      const current = await io.registry(receipt.name, "latest");
      if (current.state !== "present" || current.metadata.version !== receipt.version) {
        await mutate(`npm-latest-${kind}`, "promote", () => io.promoteLatest(receipt), { requireRef: true, requireLive: true });
      } else checkRegistryMetadata(current.metadata, receipt);
      let verified = false;
      for (let sample = 0; sample < 5; sample++) {
        const state = await io.registry(receipt.name, "latest");
        if (state.state === "present" && state.metadata.version === receipt.version) { checkRegistryMetadata(state.metadata, receipt); verified = true; break; }
        if (state.state === "present" && compareSemver(state.metadata.version, receipt.version) > 0) fail("PCR_PRODUCT_DOWNGRADE", "A newer channel appeared during product promotion.");
        if (state.state !== "present" && state.state !== "missing") fail("PCR_PRODUCT_REGISTRY_UNCERTAIN", "Channel verification is uncertain.", { retryable: true });
        if (sample < 4) await io.pause(2000);
      }
      if (!verified) return pending(`npm-latest-${kind}`, "PCR_PRODUCT_CHANNEL_PENDING");
      await record(`npm-latest-${kind}`, "channel", "verified", { name: receipt.name, version: receipt.version });
    }
    await guard({ requireRef: true, requireLive: true }); await recordWebProof(await verifyWeb());
    const final = await io.getRelease(identity.tag), stableRelease = await io.getLatestRelease();
    if (final?.prerelease !== false || stableRelease?.id !== final?.id) await mutate("github-release", "complete", () => io.completeRelease(release, { name: identity.tag, prerelease: false,
      make_latest: "true", body: `Complete sealed PCR product ${identity.tag}. See release.json, build-proof.json and immutable per-attempt receipts. Distribution does not approve candidate methodology.\n${markerPrefix}${Buffer.from(JSON.stringify(selectedProof)).toString("base64")}-->` }), { requireRef: true, requireLive: true });
    const completed = await io.getRelease(identity.tag), latest = await io.getLatestRelease();
    if (completed?.draft || completed?.prerelease !== false || latest?.id !== completed?.id) return pending("github-release", "PCR_PRODUCT_RELEASE_COMPLETION_PENDING");
    await record("github-release", "completion", "verified", { releaseId: completed.id, tag: identity.tag });
    return { status: "complete", identity, releaseId: completed.id, projectId: context.projectId ?? null,
      deploymentRef: "release/production", webOrigin: manifest.web.origin, artifactId: selectedProof.artifactId };
  } catch (error) {
    if (release?.id && receipts.length) {
      const target = error.target ?? "coordinator";
      try { await record(target, "failure", "uncertain", { code: safeCode(error) }); } catch { /* existing intents remain authoritative */ }
      return { status: "pending", identity, target, code: safeCode(error), releaseId: release.id };
    }
    if (error instanceof PublisherError) throw error;
    fail(safeCode(error), "Product publication stopped before a verified publication state.");
  } finally { await io.cleanup?.(); }
}

/** Production preflight; no remote mutation is available without exact Actions context. */
export async function publishProduct({ root = process.cwd(), bundleDir, env = process.env }) {
  const retryNpm = npmRetryChoice(env.PCR_RETRY_NPM, env.GITHUB_EVENT_NAME);
  if (process.platform !== "linux" || process.version !== "v24.19.0" || env.GITHUB_ACTIONS !== "true"
    || env.RUNNER_ENVIRONMENT !== "github-hosted" || env.GITHUB_SERVER_URL !== "https://github.com" || env.GITHUB_API_URL !== "https://api.github.com"
    || !numeric(env.GITHUB_RUN_ID) || !numeric(env.GITHUB_RUN_ATTEMPT) || !numeric(env.PCR_PRODUCT_BUILD_ARTIFACT_ID)
    || !(env.GH_TOKEN || env.GITHUB_TOKEN) || env.PCR_NPM_DIST_TAG_OIDC_ENABLED !== "true") fail("PCR_PRODUCT_CONTEXT_INVALID", "Production publication requires qualified Linux Actions, OIDC dist-tag permission and an original build artifact.");
  if (env.PCR_EDGEONE_PROJECT_ID && !/^(?:makers|pages)-[a-z0-9]{6,64}$/u.test(env.PCR_EDGEONE_PROJECT_ID)) fail("PCR_PRODUCT_CONFIG_INVALID", "Expected a known nonsensitive EdgeOne project identifier.");
  let hook;
  try { hook = new URL(env.PCR_EDGEONE_DEPLOY_HOOK_URL); if (hook.protocol !== "https:" || hook.username || hook.password || hook.hash) throw new Error(); }
  catch { fail("PCR_PRODUCT_CONFIG_INVALID", "A configured HTTPS deployment-ref hook is required for explicit recovery."); }
  assertCleanProductSource(root);
  const tag = env.RELEASE_TAG ?? env.GITHUB_REF_NAME;
  const source = productReleaseContext(root, tag, env);
  if (compareSemver(source.toolchain.npm, "11.21.0") < 0) fail("PCR_PRODUCT_RUNTIME_INVALID", "The pinned npm must support trusted OIDC dist-tag operations.");
  const directory = path.resolve(bundleDir);
  if (!lstatSync(directory).isDirectory() || lstatSync(directory).isSymbolicLink()) fail("PCR_PRODUCT_BUNDLE_INVALID", "Expected a regular sealed artifact directory.");
  const file = path.join(directory, "release.json");
  if (!lstatSync(file).isFile() || lstatSync(file).isSymbolicLink() || lstatSync(file).size > 4 * 1024 * 1024) fail("PCR_PRODUCT_BUNDLE_INVALID", "The product manifest is not a bounded regular file.");
  const bytes = readFileSync(file), manifest = validateProductManifest(JSON.parse(bytes.toString("utf8")), { identity: source.identity });
  const io = createProductionPublisherIO({ env, root: realpathSync(root), toolchain: source.toolchain });
  await io.assertRuntime();
  return coordinateProductPublication({ bundleDir: realpathSync(directory), manifest,
    buildProof: { schema: 1, identity: source.identity, manifestSha256: hex(bytes), artifactId: env.PCR_PRODUCT_BUILD_ARTIFACT_ID, runId: env.GITHUB_RUN_ID },
    context: { ...source, runId: env.GITHUB_RUN_ID, attempt: env.GITHUB_RUN_ATTEMPT, projectId: env.PCR_EDGEONE_PROJECT_ID ?? null,
      retryWeb: env.PCR_RETRY_WEB === "true", retryNpm, eventName: env.GITHUB_EVENT_NAME }, io });
}

async function main() {
  const args = process.argv.slice(2);
  if (args.length !== 1) fail("PCR_PRODUCT_USAGE", "Usage: node builder/scripts/product-publish.mjs <verified-bundle-directory>");
  const result = await publishProduct({ bundleDir: args[0] }); console.log(JSON.stringify(result));
  if (result.status !== "complete") process.exitCode = 2;
}
if (process.argv[1] && import.meta.url === pathToFileURL(path.resolve(process.argv[1])).href) main().catch(error => {
  console.error(JSON.stringify({ status: "blocked", code: safeCode(error) })); process.exitCode = 1;
});
