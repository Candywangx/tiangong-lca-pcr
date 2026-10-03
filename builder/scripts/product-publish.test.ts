import assert from "node:assert/strict";
import { createHash, type BinaryLike } from "node:crypto";
import test from "node:test";
import {mkdtempSync, readFileSync, realpathSync, rmSync, writeFileSync} from "node:fs";
import {tmpdir} from "node:os";
import path from "node:path";
import { checkRegistryMetadata, coordinateProductPublication, publishProduct, PublisherError, validateBuildProof } from "./product-publish.ts";
import { createProductionPublisherIO, type PublisherFetch } from "./product-publish-io.ts";

import type { ProductIdentity } from "./product-identity.ts";
import type { ProductManifest, ProductPackageReceipt, JsonObject } from "./release-types.ts";
import { field, isRecord } from "./release-types.ts";
import type { BuildProof, PublicationContext, PublisherIO, ReleaseRecord, LiveIdentity, AttemptReceipt, DeploymentRef } from "./publisher-types.ts";
function present<T>(value: T | undefined | null): T { assert.ok(value !== undefined && value !== null); return value; }
function object(value: unknown): JsonObject { assert.ok(isRecord(value)); return value; }
interface FixtureState {
  release: ReleaseRecord | null; stable: ReleaseRecord | null; assets: Map<string, Buffer>;
  published: Map<string, JsonObject>; hidden: Set<string>; latest: Map<string, JsonObject>;
  ref: DeploymentRef | null; mutations: string[]; local: AttemptReceipt[]; waits: number[]; webValid: boolean;
  liveOverride: LiveIdentity | null; tagMoved: boolean; artifactAvailable: boolean; restored: number; releaseRestored: number;
  failPublish: string | null; rejectPublish: string | null; failPromotion: string | null; unknown: string | null;
}
type Fixture = ReturnType<typeof fixture>;

const hash = (bytes: BinaryLike) => createHash("sha256").update(bytes).digest("hex");
const identity: ProductIdentity = { schema: 1, version: "0.3.0", tag: "v0.3.0", sourceCommit: "a".repeat(40), sourceFingerprint: `sha256:${"b".repeat(64)}` };
function fail(code: string): never { throw Object.assign(new Error("unsafe transport text SECRET"), { code }); };
const metadata = (receipt: ProductPackageReceipt) => ({ name: receipt.name, version: receipt.version, gitHead: receipt.sourceCommit,
  dist: { integrity: receipt.integrity, tarball: `https://registry.npmjs.org/${receipt.name}/-/${receipt.filename}` } });

test("untrusted build-proof fields cannot propagate into immutable public evidence", () => {
  const proof = { schema: 1, identity, manifestSha256: "a".repeat(64), artifactId: "99", runId: "10" };
  assert.equal(validateBuildProof(proof, identity), proof);
  assert.throws(() => validateBuildProof({ ...proof, hiddenAuthority: "SECRET" }, identity),
    (error: unknown) => field(error, "code") === "PCR_PRODUCT_PROOF_CONFLICT" && !String(field(error, "message")).includes("SECRET"));
});

function fixture() {
  const content = Buffer.from("artifact"), sha256 = hash(content), integrity = `sha512-${createHash("sha512").update(content).digest("base64")}`;
  const artifact = (filename: string) => ({ filename, bytes: content.length, sha256 });
  const packageReceipt = (name: string): ProductPackageReceipt => {
    const filename = `${name}-${identity.version}.tgz`.replace(/^@/u, "").replaceAll("/", "-");
    return { ...artifact(filename), name, version: identity.version, tag: identity.tag, sourceCommit: identity.sourceCommit, integrity };
  };
  const packages = { tool: packageReceipt("@tiangong-lca/pcr"), library: packageReceipt("@tiangong-lca/pcr-library") };
  const counts = { pcrs: 832, pages: 2000, languages: 2, sourceBytes: 123_456 };
  const probe = (path: string) => ({ path, bytes: 8, sha256: `sha256:${sha256}` });
  const manifest: ProductManifest = { schema: 1, kind: "pcr-product-release", identity, toolchain: { node: "24.19.0", npm: "12.2.0" }, packages,
    web: { ...artifact("pcr-web-0.3.0.tar.gz"), treeSha256: `sha256:${sha256}`, files: 8, uncompressedBytes: 1000, origin: "https://pcr.tiangong.earth",
      probes: { identity, counts, routes: [probe("/zh/docs/pcr/"), probe("/en/docs/pcr/")], rawDownload: probe("/generated/raw/classifications/indexes/cpc-3.0-coverage.json") } },
    artifacts: [artifact(packages.tool.filename), artifact(packages.library.filename), artifact("library.sqlite"), artifact("library.sqlite.json"), artifact("pcr-web-0.3.0.tar.gz")] };
  const encode = (value: unknown) => Buffer.from(`${JSON.stringify(value, null, 2)}\n`);
  const manifests = new Map([["current", manifest], ["original", structuredClone(manifest)]]);
  const files = (directory: string): Map<string, Buffer> => new Map([["release.json", encode(manifests.get(directory))], ["SHA256SUMS", Buffer.from("sealed checksums\n")], ...present(manifests.get(directory)).artifacts.map(item => [item.filename, content] as const)]);
  const buildProof: BuildProof = { schema: 1, identity, manifestSha256: hash(present(files("current").get("release.json"))), artifactId: "99", runId: "10" };
  const context: PublicationContext = { identity, toolchain: manifest.toolchain, runId: "10", attempt: "1", projectId: "makers-5hadzwjpsblu", retryWeb: false, eventName: "workflow_dispatch" };
  const state: FixtureState = { release: null, stable: null, assets: new Map(), published: new Map(), hidden: new Set(), latest: new Map(),
    ref: { sha: "d".repeat(40), version: "0.2.0" }, mutations: [], local: [], waits: [], webValid: true, liveOverride: null, tagMoved: false, artifactAvailable: true, restored: 0, releaseRestored: 0,
    failPublish: null, rejectPublish: null, failPromotion: null, unknown: null };
  const receiptValues = () => [...state.assets.entries()].filter(([name]) => name.startsWith("receipt-")).map(([, bytes]) => object(JSON.parse(bytes.toString("utf8")) as unknown));
  const assertIntent = (target: string, operation: string) => assert.ok(receiptValues().some(item => item.target === target && item.operation === operation && item.state === "intent"), `missing intent for ${target}/${operation}`);
  const findKind = (name: string) => present((["tool", "library"] as const).find(kind => packages[kind].name === name));
  const io: PublisherIO = {
    saveAttemptReceipt: async (_directory, value) => { state.local.push(value); },
    getTag: async () => ({ type: "commit", sha: state.tagMoved ? "e".repeat(40) : identity.sourceCommit }),
    registry: async (name, selector) => {
      const kind = findKind(name);
      if (state.unknown === `${kind}/${selector}`) return { state: "unknown" };
      if (selector === "latest") {
        const value = state.latest.get(kind);
        return value ? { state: "present", metadata: value } : { state: "present", metadata: { name, version: kind === "tool" ? "0.2.0" : "0.1.3" } };
      }
      const value = state.published.get(kind);
      return value && !state.hidden.has(kind) ? { state: "present", metadata: value } : { state: "missing" };
    },
    getDeploymentRef: async () => state.ref ? { ...state.ref } : null,
    getLiveIdentity: async () => state.liveOverride ?? (state.webValid && state.ref?.sha === identity.sourceCommit ? { state: "product", identity }
      : { state: "legacy", sourceCommit: "d".repeat(40) }),
    isAncestor: async () => true,
    getLatestRelease: async () => state.stable,
    getRelease: async () => state.release,
    createRelease: async payload => { state.mutations.push("github-create"); state.release = { ...payload, id: 7 }; return state.release; },
    listAssets: async () => [...state.assets.entries()].map(([name, bytes], index) => ({ id: index + 1, name, size: bytes.length, digest: `sha256:${hash(bytes)}` })),
    readAsset: async asset => present(state.assets.get(asset.name)),
    putAsset: async (_release, name, descriptor) => {
      const bytes = descriptor.bytes;
      assert.ok(Buffer.isBuffer(bytes)); assert.equal(bytes.length, descriptor.size); assert.equal(hash(bytes), descriptor.sha256);
      const prior = state.assets.get(name);
      if (prior) { if (!prior.equals(bytes)) fail("PCR_PRODUCT_ASSET_CONFLICT"); return { reused: true }; }
      state.assets.set(name, bytes); state.mutations.push(`asset:${name}`); return { reused: false };
    },
    assertActionsArtifact: async () => { if (!state.artifactAvailable) fail("PCR_PRODUCT_ORIGINAL_ARTIFACT_REQUIRED"); },
    manifestHash: async directory => hash(present(files(directory).get("release.json"))),
    verifyBundle: async directory => structuredClone(present(manifests.get(directory))),
    restoreActionsArtifact: async proof => { await io.assertActionsArtifact(proof); assert.equal(proof.manifestSha256, buildProof.manifestSha256); state.restored++; return "original"; },
    restoreReleaseAssets: async (_release, _manifest, proof) => { assert.equal(proof.manifestSha256, buildProof.manifestSha256); state.releaseRestored++; return "original"; },
    fileDescriptor: async (directory, name) => { const bytes = present(files(directory).get(name)); return { bytes, size: bytes.length, sha256: hash(bytes) }; },
    pause: async milliseconds => { state.waits.push(milliseconds); },
    publishNpm: async (receipt, _directory, tag) => {
      const kind = findKind(receipt.name);
      assert.ok(receiptValues().some(item => item.target === `npm-${kind}` && ["publish", "operator-retry-publish"].includes(String(item.operation)) && item.state === "intent"));
      assert.equal(tag, "candidate-v0.3.0"); state.mutations.push(`publish:${kind}`);
      if (state.rejectPublish === kind) { state.rejectPublish = null; fail("PCR_PRODUCT_NPM_COMMAND_UNCERTAIN"); }
      state.published.set(kind, metadata(receipt));
      if (state.failPublish === kind) { state.failPublish = null; state.hidden.add(kind); fail("PCR_PRODUCT_NPM_COMMAND_UNCERTAIN"); }
    },
    verifyTarball: async receipt => ({ bytes: receipt.bytes, sha256: receipt.sha256, integrity: receipt.integrity }),
    verifyOfflinePair: async () => ({ verified: true, toolVersion: identity.version, libraryVersion: identity.version, sourceCommit: identity.sourceCommit }),
    advanceDeploymentRef: async (sha, expected) => {
      assertIntent("deployment-ref", "advance"); assert.equal(state.ref?.sha ?? null, expected);
      state.mutations.push("advance-ref"); state.ref = { sha, version: identity.version };
    },
    triggerHook: async () => { assertIntent("web", "operator-retry-hook"); state.mutations.push("hook"); return { accepted: true }; },
    verifyWeb: async current => {
      if (!state.webValid) fail("PCR_WEB_IDENTITY_MISMATCH");
      return { verified: true, origin: current.web.origin, identity: current.identity, counts: current.web.probes.counts, checks: [] };
    },
    promoteLatest: async receipt => {
      const kind = findKind(receipt.name); assertIntent(`npm-latest-${kind}`, "promote"); state.mutations.push(`latest:${kind}`);
      if (state.failPromotion === kind) { state.failPromotion = null; fail("PCR_PRODUCT_NPM_COMMAND_UNCERTAIN"); }
      state.latest.set(kind, metadata(receipt));
    },
    completeRelease: async (_release, patch) => { assertIntent("github-release", "complete"); state.mutations.push("github-complete"); Object.assign(present(state.release), patch); state.stable = state.release; },
    cleanup: async () => {},
  };
  const publish = (overrides: Partial<Parameters<typeof coordinateProductPublication>[0]> = {}) => coordinateProductPublication({ bundleDir: "current", manifest: manifests.get("current"), buildProof, context, io, ...overrides });
  return { identity, manifest, buildProof, context, manifests, state, io, publish, receipts: receiptValues };
}

test("coordinator seals all assets, publishes candidate pair, verifies offline/web, then advances both latest and stable release", async () => {
  const f = fixture(), result = await f.publish(); assert.equal(result.status, "complete");
  const calls = f.state.mutations;
  assert.ok(calls.indexOf("asset:release.json") < calls.indexOf("publish:tool"));
  assert.ok(calls.indexOf("asset:pcr-web-0.3.0.tar.gz") < calls.indexOf("publish:tool"));
  assert.ok(calls.indexOf("publish:library") < calls.indexOf("advance-ref"));
  assert.ok(calls.indexOf("advance-ref") < calls.indexOf("latest:tool"));
  assert.ok(calls.indexOf("latest:library") < calls.indexOf("github-complete"));
  assert.equal(calls.includes("hook"), false);
  assert.ok(f.receipts().some(item => item.target === "web" && item.state === "verified"));
  assert.equal(JSON.stringify(f.receipts()).includes("SECRET"), false);
  assert.ok(f.state.local.some(item => item.operation === "create" && item.state === "intent"));
});

test("accepted npm upload temporarily returning 404 stays pending and is never blindly published again", async () => {
  const f = fixture(); f.state.failPublish = "tool";
  assert.equal((await f.publish()).status, "pending");
  assert.equal(f.state.waits.slice(0, 13).reduce((total, milliseconds) => total + milliseconds, 0), 300_000);
  assert.equal((await f.publish()).status, "pending");
  assert.equal(f.state.mutations.filter(call => call === "publish:tool").length, 1);
  assert.equal(f.state.mutations.includes("advance-ref"), false);
  f.state.hidden.delete("tool"); assert.equal((await f.publish()).status, "complete");
  assert.equal(f.state.mutations.filter(call => call === "publish:tool").length, 1);
});

test("an unaccepted upload intent defaults to pending until a new explicit target dispatch recovers once", async () => {
  for (const kind of ["tool", "library"]) {
    const f = fixture(); f.state.rejectPublish = kind;
    assert.equal((await f.publish()).status, "pending");
    assert.equal(f.state.published.has(kind), false);
    const count = () => f.state.mutations.filter(call => call === `publish:${kind}`).length;
    assert.equal((await f.publish()).status, "pending"); assert.equal(count(), 1);
    const sameRun = { ...f.context, attempt: "2", retryNpm: kind };
    assert.equal((await f.publish({ context: sameRun })).status, "pending"); assert.equal(count(), 1);
    const newRun = { ...sameRun, runId: "11", attempt: "1" };
    assert.equal((await f.publish({ context: newRun })).status, "complete"); assert.equal(count(), 2);
    const accepted = present(f.receipts().find(item => item.target === `npm-${kind}` && item.operation === "operator-retry-publish" && item.state === "accepted"));
    assert.equal(accepted.runId, "11"); assert.deepEqual(accepted.details, { operatorConfirmedRejected: true, reusedExisting: false });
  }
});

test("a rejected explicit retry cannot repeat across attempts in that run, but a new confirmed run can recover", async () => {
  const f = fixture(); f.state.rejectPublish = "tool"; await f.publish();
  f.state.rejectPublish = "tool";
  const recovery = { ...f.context, runId: "11", retryNpm: "tool" };
  assert.equal((await f.publish({ context: recovery })).status, "pending");
  assert.equal((await f.publish({ context: { ...recovery, attempt: "2" } })).status, "pending");
  assert.equal((await f.publish()).status, "pending", "operator-retry intent also blocks default automatic publication");
  assert.equal(f.state.mutations.filter(call => call === "publish:tool").length, 2);
  assert.equal((await f.publish({ context: { ...recovery, runId: "12" } })).status, "complete");
  assert.equal(f.state.mutations.filter(call => call === "publish:tool").length, 3);
});

test("explicit npm recovery cannot select the other pending target", async () => {
  for (const [pending, selected] of [["tool", "library"], ["library", "tool"]] as const) {
    const f = fixture(); f.state.rejectPublish = pending; await f.publish();
    const result = await f.publish({ context: { ...f.context, runId: "11", retryNpm: selected } });
    assert.equal(result.status, "pending"); assert.equal(field(result, "target"), `npm-${pending}`);
    assert.equal(f.state.mutations.filter(call => call === `publish:${pending}`).length, 1);
    assert.equal(f.receipts().some(item => item.operation === "operator-retry-publish"), false);
  }
});

test("an already visible version is verified and reused even with explicit rejected-upload recovery", async () => {
  const f = fixture(); f.state.rejectPublish = "tool"; await f.publish();
  f.state.published.set("tool", metadata(f.manifest.packages.tool));
  assert.equal((await f.publish({ context: { ...f.context, runId: "11", retryNpm: "tool" } })).status, "complete");
  assert.equal(f.state.mutations.filter(call => call === "publish:tool").length, 1);
  assert.equal(f.receipts().some(item => item.operation === "operator-retry-publish"), false);
});

test("registry visibility changing while the retry intent is stored prevents a duplicate upload", async () => {
  const f = fixture(); f.state.rejectPublish = "tool"; await f.publish();
  const putAsset = f.io.putAsset;
  f.io.putAsset = async (...args) => {
    const result = await putAsset(...args);
    if (args[1].startsWith("receipt-")) {
      const receipt = object(JSON.parse(present(args[2].bytes).toString("utf8")) as unknown);
      if (receipt.target === "npm-tool" && receipt.operation === "operator-retry-publish" && receipt.state === "intent") f.state.published.set("tool", metadata(f.manifest.packages.tool));
    }
    return result;
  };
  assert.equal((await f.publish({ context: { ...f.context, runId: "11", retryNpm: "tool" } })).status, "complete");
  assert.equal(f.state.mutations.filter(call => call === "publish:tool").length, 1);
  const accepted = present(f.receipts().find(item => item.operation === "operator-retry-publish" && item.state === "accepted"));
  assert.deepEqual(accepted.details, { operatorConfirmedRejected: true, reusedExisting: true });
});

test("conflicting metadata, unknown registry state and invalid tarball bytes never permit explicit reupload", async () => {
  for (const [alter, expected] of [
    [(f: Fixture) => f.state.published.set("tool", { ...metadata(f.manifest.packages.tool), gitHead: "f".repeat(40) }), "PCR_PRODUCT_REGISTRY_CONFLICT"],
    [(f: Fixture) => { f.state.unknown = "tool/0.3.0"; }, "PCR_PRODUCT_REGISTRY_UNCERTAIN"],
    [(f: Fixture) => { f.state.published.set("tool", metadata(f.manifest.packages.tool)); f.io.verifyTarball = async () => ({ bytes: 8, sha256: "wrong", integrity: "wrong" }); }, "PCR_PRODUCT_TARBALL_CONFLICT"],
  ] as const) {
    const f = fixture(); f.state.rejectPublish = "tool"; await f.publish(); alter(f);
    const result = await f.publish({ context: { ...f.context, runId: "11", retryNpm: "tool" } });
    assert.equal(field(result, "code"), expected); assert.equal(f.state.mutations.filter(call => call === "publish:tool").length, 1);
    assert.equal(f.state.mutations.includes("advance-ref"), false);
  }
});

test("explicit rejected-upload declarations cannot replace a previously byte-verified package after a 404", async () => {
  const f = fixture(); await f.publish(); f.state.published.delete("tool");
  const result = await f.publish({ context: { ...f.context, runId: "11", retryNpm: "tool" } });
  assert.equal(field(result, "code"), "PCR_PRODUCT_NPM_RETRY_CONFLICT"); assert.equal(f.state.mutations.filter(call => call === "publish:tool").length, 1);
});

test("npm recovery choices fail closed and are exclusive to explicit workflow dispatch", async () => {
  for (const choice of ["both", "Tool", "", null, true]) {
    const f = fixture(); await assert.rejects(f.publish({ context: { ...f.context, retryNpm: choice } }), { code: "PCR_PRODUCT_NPM_RETRY_INVALID" });
    assert.deepEqual(f.state.mutations, []);
  }
  const f = fixture(); await assert.rejects(f.publish({ context: { ...f.context, retryNpm: "tool", eventName: "push" } }), { code: "PCR_PRODUCT_NPM_RETRY_INVALID" });
  assert.deepEqual(f.state.mutations, []);
  await assert.rejects(publishProduct({ root: "/unused", bundleDir: "/unused", env: { PCR_RETRY_NPM: "both", GITHUB_EVENT_NAME: "workflow_dispatch" } }), { code: "PCR_PRODUCT_NPM_RETRY_INVALID" });
});

test("explicit npm recovery preserves immutable tag, live downgrade and sealed-asset guards", async () => {
  for (const [alter, expected] of [
    [(f: Fixture) => { f.state.tagMoved = true; }, "PCR_PRODUCT_TAG_MOVED"],
    [(f: Fixture) => { f.state.liveOverride = { state: "product", identity: { ...identity, version: "0.4.0", tag: "v0.4.0", sourceCommit: "f".repeat(40) } }; }, "PCR_PRODUCT_DOWNGRADE"],
    [(f: Fixture) => { f.state.assets.set("library.sqlite", Buffer.from("conflicting sealed bytes")); }, "PCR_PRODUCT_ASSET_CONFLICT"],
  ] as const) {
    const f = fixture(); f.state.rejectPublish = "tool"; await f.publish(); alter(f);
    try {
      const result = await f.publish({ context: { ...f.context, runId: "11", retryNpm: "tool" } });
      assert.equal(field(result, "code"), expected);
    } catch (error) { assert.equal(field(error, "code"), expected); }
    assert.equal(f.state.mutations.filter(call => call === "publish:tool").length, 1);
  }
  const race = fixture(); race.state.rejectPublish = "tool"; await race.publish();
  race.io.pause = async milliseconds => { race.state.waits.push(milliseconds); present(race.state.ref).version = "0.4.0"; };
  const result = await race.publish({ context: { ...race.context, runId: "11", retryNpm: "tool" } });
  assert.equal(field(result, "code"), "PCR_PRODUCT_DOWNGRADE"); assert.equal(race.state.mutations.filter(call => call === "publish:tool").length, 1);
});

test("default none recovery leaves normal stable tag-push publication unchanged", async () => {
  const f = fixture(); assert.equal((await f.publish({ context: { ...f.context, eventName: "push", retryNpm: "none" } })).status, "complete");
  assert.equal(f.state.mutations.filter(call => call.startsWith("publish:")).length, 2);
  assert.equal(f.receipts().some(item => item.operation === "operator-retry-publish"), false);
});

test("partial pair visibility recovers forward using the already published tool and library", async () => {
  const f = fixture(); f.state.failPublish = "library";
  const first = await f.publish(); assert.equal(first.status, "pending"); assert.equal(field(first, "target"), "npm-library");
  f.state.hidden.clear(); assert.equal((await f.publish()).status, "complete");
  assert.equal(f.state.mutations.filter(call => call.startsWith("publish:")).length, 2);
});

test("failed public acceptance leaves latest untouched, same-SHA retries do not duplicate auto deployments", async () => {
  const f = fixture(); f.state.webValid = false;
  assert.equal((await f.publish()).status, "pending"); assert.equal((await f.publish()).status, "pending");
  assert.equal(f.state.mutations.filter(call => call === "advance-ref").length, 1);
  assert.equal(f.state.mutations.includes("hook"), false); assert.equal(f.state.mutations.some(call => call.startsWith("latest:")), false);
  assert.equal(f.state.mutations.includes("github-complete"), false);
  f.state.webValid = true; assert.equal((await f.publish()).status, "complete");
});

test("the first auto deployment naturally converges old-to-new in one run without a duplicate hook", async () => {
  const f = fixture(), verify = f.io.verifyWeb;
  f.state.webValid = false;
  const budgets: number[] = [];
  f.io.verifyWeb = async (manifest, options = {}) => { if (options.timeoutMs !== undefined) budgets.push(options.timeoutMs); return verify(manifest); };
  f.io.pause = async milliseconds => { f.state.waits.push(milliseconds); if (f.state.waits.length === 2) f.state.webValid = true; };
  assert.equal((await f.publish()).status, "complete");
  assert.deepEqual(f.state.waits, [5000, 10_000]);
  assert.equal(f.state.mutations.filter(call => call === "advance-ref").length, 1);
  assert.equal(f.state.mutations.includes("hook"), false);
  assert.ok(budgets.length >= 3 && budgets.every(value => Number.isSafeInteger(value) && value > 0 && value <= 120_000));
});

test("a same-SHA existing deployment can finish while waiting without another ref or hook write", async () => {
  const f = fixture(); f.state.ref = { sha: identity.sourceCommit, version: identity.version }; f.state.webValid = false;
  f.io.pause = async milliseconds => { f.state.waits.push(milliseconds); f.state.webValid = true; };
  assert.equal((await f.publish()).status, "complete");
  assert.deepEqual(f.state.waits, [5000]); assert.equal(f.state.mutations.includes("advance-ref"), false); assert.equal(f.state.mutations.includes("hook"), false);
});

test("an explicitly confirmed same-SHA retry probes first, hooks once and waits for convergence", async () => {
  const f = fixture(), verify = f.io.verifyWeb;
  f.state.ref = { sha: identity.sourceCommit, version: identity.version }; f.state.webValid = false;
  let probes = 0;
  f.io.verifyWeb = async (...args) => { probes++; return verify(...args); };
  f.io.pause = async milliseconds => { f.state.waits.push(milliseconds); f.state.webValid = true; };
  assert.equal((await f.publish({ context: { ...f.context, retryWeb: true } })).status, "complete");
  assert.ok(probes >= 3); assert.equal(f.state.mutations.filter(call => call === "hook").length, 1); assert.equal(f.state.mutations.includes("advance-ref"), false);
});

test("tag/ref moves and a newer or conflicting live source stop the convergence wait immediately", async () => {
  for (const [change, expected] of [
    [(f: Fixture) => { f.state.tagMoved = true; }, "PCR_PRODUCT_TAG_MOVED"],
    [(f: Fixture) => { f.state.ref = { sha: "f".repeat(40), version: "0.4.0" }; }, "PCR_PRODUCT_DEPLOYMENT_REF_CHANGED"],
    [(f: Fixture) => { f.state.liveOverride = { state: "product", identity: { ...identity, version: "0.4.0", tag: "v0.4.0", sourceCommit: "f".repeat(40) } }; }, "PCR_PRODUCT_DOWNGRADE"],
    [(f: Fixture) => { f.state.liveOverride = { state: "product", identity: { ...identity, sourceFingerprint: `sha256:${"c".repeat(64)}` } }; }, "PCR_PRODUCT_LIVE_CONFLICT"],
  ] as const) {
    const f = fixture(); f.state.webValid = false;
    f.io.pause = async milliseconds => { f.state.waits.push(milliseconds); change(f); };
    const result = await f.publish(); assert.equal(result.status, "pending"); assert.equal(field(result, "code"), expected);
    assert.deepEqual(f.state.waits, [5000]); assert.equal(f.state.mutations.some(call => call.startsWith("latest:") || call === "github-complete" || call === "hook"), false);
  }
});

test("a nonconverging or unreadable website exhausts only a bounded read-only wait and remains pending", async () => {
  for (const unknown of [false, true]) {
    const f = fixture(); f.state.webValid = false;
    f.io.pause = async milliseconds => { f.state.waits.push(milliseconds); if (unknown) f.state.liveOverride = { state: "unknown" }; };
    const result = await f.publish(); assert.equal(result.status, "pending");
    assert.equal(field(result, "code"), unknown ? "PCR_PRODUCT_LIVE_UNCERTAIN" : "PCR_WEB_IDENTITY_MISMATCH");
    assert.equal(f.state.waits.reduce((total, value) => total + value, 0), 600_000);
    assert.ok(f.state.waits.every(value => value <= 20_000));
    assert.equal(f.state.mutations.filter(call => call === "advance-ref").length, 1);
    assert.equal(f.state.mutations.some(call => call.startsWith("latest:") || call === "github-complete" || call === "hook"), false);
  }
});

test("the overall publisher budget can end a convergence wait without restarting deployment", async () => {
  const f = fixture(); f.state.webValid = false;
  f.io.assertBudget = async () => { if (f.state.waits.length > 0) fail("PCR_PRODUCT_BUDGET_EXHAUSTED"); };
  const result = await f.publish(); assert.equal(result.status, "pending"); assert.equal(field(result, "code"), "PCR_PRODUCT_BUDGET_EXHAUSTED");
  assert.deepEqual(f.state.waits, [5000]); assert.equal(f.state.mutations.includes("hook"), false);
});

test("a separate explicitly confirmed retry run can hook once; its rerun cannot blindly retrigger", async () => {
  const f = fixture(); f.state.ref = { sha: identity.sourceCommit, version: identity.version }; f.state.webValid = false;
  const context = { ...f.context, retryWeb: true };
  assert.equal((await f.publish({ context })).status, "pending");
  assert.equal((await f.publish({ context: { ...context, attempt: "2" } })).status, "pending");
  assert.equal(f.state.mutations.filter(call => call === "hook").length, 1);
  assert.equal((await f.publish({ context: { ...context, runId: "11", attempt: "1" } })).status, "pending");
  assert.equal(f.state.mutations.filter(call => call === "hook").length, 2);
});

test("a partially promoted latest pair resumes without publishing package versions again", async () => {
  const f = fixture(); f.state.failPromotion = "library";
  assert.equal((await f.publish()).status, "pending"); assert.equal(present(f.state.latest.get("tool")).version, "0.3.0");
  assert.equal(f.state.latest.has("library"), false);
  assert.equal((await f.publish()).status, "complete");
  assert.equal(f.state.mutations.filter(call => call.startsWith("publish:")).length, 2);
  assert.equal(f.state.mutations.filter(call => call === "latest:tool").length, 1);
});

test("a partially updated GitHub completion can finish latest without rewriting npm packages", async () => {
  const f = fixture(), complete = f.io.completeRelease; let first = true;
  f.io.completeRelease = async (release, patch) => { if (first) { first = false; Object.assign(present(f.state.release), patch); return; } return complete(release, patch); };
  assert.equal((await f.publish()).status, "pending"); assert.equal(present(f.state.release).prerelease, false);
  assert.equal((await f.publish()).status, "complete");
  assert.equal(f.state.mutations.filter(call => call.startsWith("publish:")).length, 2);
});

test("newer npm channels, newer deployment pointers and moved lightweight tags block before mutations", async () => {
  for (const alter of [(f: Fixture) => f.state.latest.set("tool", { name: "@tiangong-lca/pcr", version: "0.4.0" }),
    (f: Fixture) => { present(f.state.ref).version = "0.4.0"; }, (f: Fixture) => { f.state.tagMoved = true; }]) {
    const f = fixture(); alter(f); await assert.rejects(f.publish(), error => error instanceof PublisherError && ["PCR_PRODUCT_DOWNGRADE", "PCR_PRODUCT_TAG_MOVED"].includes(String(field(error, "code"))));
    assert.deepEqual(f.state.mutations, []);
  }
});

test("a manually advanced live website cannot be downgraded even while npm/ref/GitHub pointers remain old", async () => {
  const f = fixture(); f.state.liveOverride = { state: "product", identity: { ...identity, version: "0.4.0", tag: "v0.4.0", sourceCommit: "f".repeat(40) } };
  await assert.rejects(f.publish(), { code: "PCR_PRODUCT_DOWNGRADE" }); assert.deepEqual(f.state.mutations, []);
  for (const live of [{ state: "product", identity: { ...identity, sourceFingerprint: `sha256:${"c".repeat(64)}` } },
    { state: "product", identity: { ...identity, sourceCommit: "e".repeat(40) } }, { state: "unknown" }] as const) {
    const candidate = fixture(); candidate.state.liveOverride = live;
    await assert.rejects(candidate.publish(), (error: unknown) => ["PCR_PRODUCT_LIVE_CONFLICT", "PCR_PRODUCT_LIVE_UNCERTAIN"].includes(String(field(error, "code")))); assert.deepEqual(candidate.state.mutations, []);
  }
});

test("legacy migration requires a confirmed ancestor; losing current live identity prevents stable channel writes", async () => {
  const unproven = fixture(); unproven.state.ref = null; unproven.io.isAncestor = async () => false;
  await assert.rejects(unproven.publish(), { code: "PCR_PRODUCT_LIVE_CONFLICT" }); assert.deepEqual(unproven.state.mutations, []);
  const race = fixture(), verify = race.io.verifyWeb;
  race.io.verifyWeb = async manifest => { const result = await verify(manifest); race.state.liveOverride = { state: "legacy", sourceCommit: "d".repeat(40) }; return result; };
  const result = await race.publish(); assert.equal(field(result, "code"), "PCR_PRODUCT_LIVE_CHANGED");
  assert.equal(race.state.mutations.some(call => call.startsWith("latest:") || call === "github-complete"), false);
});

test("unknown registry state never means unpublished; existing metadata conflicts stop npm/web writes", async () => {
  const uncertain = fixture(); uncertain.state.unknown = "tool/latest";
  await assert.rejects(uncertain.publish(), { code: "PCR_PRODUCT_REGISTRY_UNCERTAIN" }); assert.deepEqual(uncertain.state.mutations, []);
  const conflict = fixture(); conflict.state.published.set("tool", { ...metadata(conflict.manifest.packages.tool), gitHead: "f".repeat(40) });
  const result = await conflict.publish(); assert.equal(field(result, "code"), "PCR_PRODUCT_REGISTRY_CONFLICT");
  assert.equal(conflict.state.mutations.some(call => call.startsWith("publish:") || call === "advance-ref"), false);
});

test("registry metadata and actual tarball mismatches are independent fail-closed checks", async () => {
  const f = fixture(); assert.throws(() => checkRegistryMetadata({ ...metadata(f.manifest.packages.tool), dist: { integrity: "wrong" } }, f.manifest.packages.tool), { code: "PCR_PRODUCT_REGISTRY_CONFLICT" });
  f.io.verifyTarball = async () => ({ bytes: 8, sha256: "wrong", integrity: "wrong" });
  const result = await f.publish(); assert.equal(field(result, "code"), "PCR_PRODUCT_TARBALL_CONFLICT"); assert.equal(f.state.mutations.includes("advance-ref"), false);
});

test("retry prefers the original GitHub release assets even after the Actions artifact expires", async () => {
  const f = fixture(); f.state.webValid = false; await f.publish();
  f.manifests.set("current", { ...structuredClone(f.manifest), web: { ...structuredClone(f.manifest.web), files: 9 } });
  f.state.webValid = true; f.state.artifactAvailable = false;
  assert.equal((await f.publish()).status, "complete"); assert.equal(f.state.releaseRestored, 1); assert.equal(f.state.restored, 0);
  assert.equal(f.state.mutations.filter(call => call === "asset:release.json").length, 1);
});

test("a matching manifest with damaged local artifacts is repaired from sealed release assets", async () => {
  const f = fixture(); f.state.webValid = false; await f.publish();
  f.io.verifyBundle = async directory => { if (directory === "current") fail("PCR_PRODUCT_LOCAL_ARTIFACT_INVALID"); return structuredClone(present(f.manifests.get("original"))); };
  f.state.webValid = true; assert.equal((await f.publish()).status, "complete"); assert.equal(f.state.releaseRestored, 1);
});

test("missing sealed assets use only the hash-bound original Actions artifact, never a replacement build", async () => {
  const f = fixture(); f.state.webValid = false; await f.publish();
  f.state.assets.delete(f.manifest.web.filename);
  f.manifests.set("current", { ...structuredClone(f.manifest), web: { ...structuredClone(f.manifest.web), files: 9 } });
  f.state.webValid = true; assert.equal((await f.publish()).status, "complete"); assert.equal(f.state.restored, 1); assert.equal(f.state.releaseRestored, 0);
});

test("expired original artifacts and conflicting immutable asset bytes are not replaced", async () => {
  const missing = fixture(); missing.state.artifactAvailable = false;
  await assert.rejects(missing.publish(), { code: "PCR_PRODUCT_ORIGINAL_ARTIFACT_REQUIRED" }); assert.equal(missing.state.mutations.includes("github-create"), false);
  const conflict = fixture(); conflict.state.webValid = false; await conflict.publish();
  conflict.state.assets.set("library.sqlite", Buffer.from("different")); const before = conflict.state.mutations.filter(call => call.startsWith("publish:")).length;
  assert.equal(field(await conflict.publish(), "code"), "PCR_PRODUCT_ASSET_CONFLICT");
  assert.equal(conflict.state.mutations.filter(call => call.startsWith("publish:")).length, before);
});

test("production entrypoint rejects non-Actions or incomplete configuration before any IO", async () => {
  await assert.rejects(publishProduct({ root: "/unused", bundleDir: "/unused", env: {} }), { code: "PCR_PRODUCT_CONTEXT_INVALID" });
});

test("production registry transport distinguishes only HTTP 404 from unknown reads, without auth headers", async () => {
  for (const [status, expected] of [[404, "missing"], [401, "unknown"], [500, "unknown"]] as const) {
    const io = createProductionPublisherIO({ env: { GH_TOKEN: "SECRET" }, root: "/unused", toolchain: {}, fetcher: async (url: string, options: Parameters<PublisherFetch>[1]) => {
      assert.ok(url.startsWith("https://registry.npmjs.org/")); assert.equal(field(options.headers, "Authorization"), undefined); return new Response("ignored SECRET", { status });
    } });
    assert.equal((await io.registry("@tiangong-lca/pcr", "0.3.0")).state, expected);
  }
});

test("production live probe treats only a real marker 404 plus valid unversioned source metadata as legacy", async () => {
  const create = (fetcher: PublisherFetch) => createProductionPublisherIO({ env: { GH_TOKEN: "SECRET" }, root: "/unused", toolchain: {}, fetcher });
  const fresh = { "content-type": "application/json", "cache-control": "public, max-age=0, must-revalidate" };
  const legacy = create(async (url: string, options: Parameters<PublisherFetch>[1]) => { assert.equal(options.redirect, "error"); assert.equal(options.credentials, "omit");
    return url.endsWith("product-release.json") ? new Response(null, { status: 404 }) : Response.json({ sourceCommit: "d".repeat(40) }, { headers: fresh }); });
  assert.deepEqual(await legacy.getLiveIdentity(), { state: "legacy", sourceCommit: "d".repeat(40) });
  for (const fetcher of [async () => new Response("SECRET", { status: 503 }), async () => new Response("<html>Login</html>", { headers: { "content-type": "text/html" } }),
    async (url: string) => url.endsWith("product-release.json") ? new Response(null, { status: 404 }) : Response.json({ sourceCommit: "d".repeat(40), releaseVersion: "0.4.0" }, { headers: fresh })]) {
    await assert.rejects(create(fetcher).getLiveIdentity(), (error: unknown) => field(error, "code") === "PCR_PRODUCT_LIVE_UNCERTAIN" && !String(field(error, "message")).includes("SECRET"));
  }
});

test("existing release assets require exact size/digest and never use clobber or DELETE", async () => {
  const body = Buffer.from("asset"), requests: { url: string; method: string | undefined }[] = [];
  const io = createProductionPublisherIO({ env: { GH_TOKEN: "SECRET" }, root: "/unused", toolchain: {}, fetcher: async (url: string, options: Parameters<PublisherFetch>[1]) => {
    requests.push({ url, method: options.method }); return Response.json([{ name: "asset.tgz", size: body.length, digest: `sha256:${"c".repeat(64)}`, id: 1 }]);
  } });
  await assert.rejects(io.putAsset({ id: 7 }, "asset.tgz", { bytes: body, size: body.length, sha256: hash(body) }), { code: "PCR_PRODUCT_ASSET_CONFLICT" });
  assert.ok(requests.every(request => request.method === "GET"));
});

test("transport bounds use sealed/provider byte counts rather than an arbitrary three-GB budget", async () => {
  const proof = fixture().buildProof;
  const io = createProductionPublisherIO({ env: { GH_TOKEN: "SECRET" }, root: "/unused", toolchain: {}, fetcher: async (url: string) => url.includes("actions/artifacts")
    ? Response.json({ id: 99, expired: false, size_in_bytes: 3_500_000_000, workflow_run: { id: 10, head_sha: identity.sourceCommit } })
    : Response.json([{ id: 1, name: "large.tgz", size: 3_500_000_000, digest: `sha256:${"a".repeat(64)}` }]) });
  assert.equal((await io.assertActionsArtifact(proof)).size_in_bytes, 3_500_000_000);
  assert.equal((await io.putAsset({ id: 7 }, "large.tgz", { file: "/unused", size: 3_500_000_000, sha256: "a".repeat(64) })).reused, true);
});

test("npm and hook transport failures do not expose raw text or invent a deployment ID", async () => {
  const io = createProductionPublisherIO({ env: { GH_TOKEN: "SECRET", PCR_EDGEONE_DEPLOY_HOOK_URL: "https://pages.example.test/hook?token=SECRET" }, root: "/unused", toolchain: {},
    run: (_cmd, args) => { assert.ok(args.includes("candidate-v0.3.0")); return { status: 1, stdout: "SECRET", stderr: "SECRET" }; },
    fetcher: async (_url, options) => { assert.equal(options.method, "POST"); assert.equal(options.redirect, "error"); assert.equal(field(options.headers, "Authorization"), undefined); return Response.json({ deploymentId: "unproven" }, { status: 202 }); } });
  await assert.rejects(io.publishNpm(fixture().manifest.packages.tool, "/unused", "candidate-v0.3.0"), (error: unknown) => field(error, "code") === "PCR_PRODUCT_NPM_COMMAND_UNCERTAIN" && !String(field(error, "message")).includes("SECRET"));
  assert.deepEqual(await io.triggerHook(), { accepted: true });
});


test("appending an accepted attempt journal preserves extension audit metadata", async t => {
  const directory = mkdtempSync(path.join(realpathSync(tmpdir()), "pcr-attempt-audit-"));
  t.after(() => rmSync(directory, {recursive: true, force: true}));
  const receipt: AttemptReceipt = {schema: 1, identity, manifestSha256: "c".repeat(64), runId: "20", attempt: "1", sequence: 2, target: "github", operation: "prepare", state: "intent", details: {}};
  const previous = {...receipt, sequence: 1, state: "checked"};
  const saved = {schema: 1, identity, runId: "20", attempt: "1", events: [previous], operator_note: {reason: "Retained audit extension", reviewed: false}, trace: null};
  const filename = path.join(directory, "attempt-20-1.json");
  writeFileSync(filename, JSON.stringify(saved));
  const io = createProductionPublisherIO({root: "/unused", env: {}, toolchain: {}});
  assert.ok(io.saveAttemptReceipt);
  const save = io.saveAttemptReceipt.bind(io);
  await save(directory, receipt);
  const expected = {...saved, events: [previous, receipt]};
  assert.equal(readFileSync(filename, "utf8"), JSON.stringify(expected, null, 2) + "\n");
  const invalid = {...saved, identity: {...identity, sourceCommit: "d".repeat(40)}};
  const before = JSON.stringify(invalid); writeFileSync(filename, before);
  await assert.rejects(save(directory, receipt), {code: "PCR_PRODUCT_LOCAL_JOURNAL_INVALID"});
  assert.equal(readFileSync(filename, "utf8"), before);
});
