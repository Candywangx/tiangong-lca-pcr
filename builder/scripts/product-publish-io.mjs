// Production-only transports. The coordinator tests replace these with mock IO.
import { createHash } from "node:crypto";
import { createReadStream, createWriteStream, lstatSync, mkdirSync, mkdtempSync, readFileSync, renameSync, rmSync, writeFileSync } from "node:fs";
import { spawn, spawnSync } from "node:child_process";
import { tmpdir } from "node:os";
import { Transform } from "node:stream";
import { pipeline } from "node:stream/promises";
import path from "node:path";
import { performance } from "node:perf_hooks";
import { assertProductIdentity } from "./product-identity.mjs";
import { verifyProductArtifacts } from "./product-release.mjs";
import { verifyLiveWebsite } from "./product-web.mjs";

const repository = "tiangong-lca/pcr", api = "https://api.github.com", registry = "https://registry.npmjs.org";
const safeName = value => typeof value === "string" && /^[A-Za-z0-9][A-Za-z0-9._-]*$/u.test(value);
const digest = bytes => createHash("sha256").update(bytes).digest("hex");
function fail(code, message, retryable = false) { throw Object.assign(new Error(message), { code, retryable }); }
function regular(file) {
  const stat = lstatSync(file);
  if (!stat.isFile() || stat.isSymbolicLink()) fail("PCR_PRODUCT_LOCAL_ARTIFACT_INVALID", "Publication artifacts must be regular files.");
  return stat;
}
export async function publicationFileDescriptor(directory, filename) {
  if (!safeName(filename)) fail("PCR_PRODUCT_LOCAL_ARTIFACT_INVALID", "Unsafe artifact basename.");
  const file = path.join(directory, filename), size = regular(file).size, hash = createHash("sha256");
  for await (const chunk of createReadStream(file)) hash.update(chunk);
  if (regular(file).size !== size) fail("PCR_PRODUCT_LOCAL_ARTIFACT_INVALID", "Publication artifact changed.");
  return { file, size, sha256: hash.digest("hex") };
}
async function boundedBody(response, limit) {
  const length = response.headers.get("content-length");
  if (length !== null && (!/^\d+$/u.test(length) || Number(length) > limit)) fail("PCR_PRODUCT_REMOTE_SIZE", "Remote metadata exceeds its bound.");
  if (!response.body) return Buffer.alloc(0);
  const chunks = []; let bytes = 0;
  for await (const chunk of response.body) { bytes += chunk.byteLength; if (bytes > limit) fail("PCR_PRODUCT_REMOTE_SIZE", "Remote metadata exceeds its bound."); chunks.push(Buffer.from(chunk)); }
  return Buffer.concat(chunks, bytes);
}
const parse = bytes => {
  try { return JSON.parse(new TextDecoder("utf-8", { fatal: true }).decode(bytes)); }
  catch { fail("PCR_PRODUCT_REMOTE_INVALID", "Remote publication metadata is invalid JSON."); }
};

export function createProductionPublisherIO({ env, root, toolchain, fetcher = fetch, run = spawnSync, platform = process.platform }) {
  const token = env.GH_TOKEN || env.GITHUB_TOKEN, temporary = [], assetCache = new Map();
  const budgetMs = env.PCR_PRODUCT_PUBLISH_BUDGET_MS === undefined ? 45 * 60_000 : Number(env.PCR_PRODUCT_PUBLISH_BUDGET_MS);
  if (!Number.isSafeInteger(budgetMs) || budgetMs < 1000 || budgetMs > 2 * 60 * 60_000) fail("PCR_PRODUCT_CONFIG_INVALID", "Invalid bounded publisher execution budget.");
  const deadline = performance.now() + budgetMs;
  const timeout = limit => {
    const remaining = Math.ceil(deadline - performance.now());
    if (remaining <= 0) fail("PCR_PRODUCT_BUDGET_EXHAUSTED", "Publication exhausted its execution budget.", true);
    return Math.min(limit, remaining);
  };
  const headers = { Authorization: `Bearer ${token}`, Accept: "application/vnd.github+json", "X-GitHub-Api-Version": "2022-11-28" };
  const request = async (endpoint, { method = "GET", body = undefined } = {}) => {
    if (!endpoint.startsWith(`/repos/${repository}/`) || endpoint.includes("#")) fail("PCR_PRODUCT_ENDPOINT_INVALID", "Unexpected GitHub publication endpoint.");
    let response;
    try { response = await fetcher(`${api}${endpoint}`, { method, headers: { ...headers, ...(body === undefined ? {} : { "Content-Type": "application/json" }) },
      ...(body === undefined ? {} : { body: JSON.stringify(body) }), redirect: "error", signal: AbortSignal.timeout(timeout(30_000)) }); }
    catch { fail("PCR_PRODUCT_GITHUB_UNCERTAIN", "GitHub publication request outcome is uncertain.", true); }
    const bytes = await boundedBody(response, 4 * 1024 * 1024);
    return { status: response.status, body: bytes.length ? parse(bytes) : null };
  };
  const expect = (result, statuses, code = "PCR_PRODUCT_GITHUB_UNCERTAIN") => {
    if (!statuses.includes(result.status)) fail(code, "The publication service did not confirm the expected result.", true);
    return result.body;
  };
  const downloadUrl = (url, allowedHosts) => {
    let parsed;
    try { parsed = new URL(url); } catch { fail("PCR_PRODUCT_DOWNLOAD_INVALID", "Invalid release download location."); }
    if (parsed.protocol !== "https:" || parsed.username || parsed.password || parsed.hash || !allowedHosts.some(host => parsed.hostname === host || parsed.hostname.endsWith(`.${host}`))) fail("PCR_PRODUCT_DOWNLOAD_INVALID", "Untrusted release download location.");
    return parsed;
  };
  const publicFetch = async (url, allowedHosts) => {
    let next = downloadUrl(url, allowedHosts);
    for (let redirect = 0; redirect < 6; redirect++) {
      let response;
      try { response = await fetcher(next.href, { method: "GET", credentials: "omit", redirect: "manual", signal: AbortSignal.timeout(timeout(600_000)) }); }
      catch { fail("PCR_PRODUCT_DOWNLOAD_UNCERTAIN", "Release download failed.", true); }
      if ([301, 302, 303, 307, 308].includes(response.status)) {
        next = downloadUrl(new URL(response.headers.get("location"), next).href, allowedHosts);
        await response.body?.cancel?.().catch(() => {}); continue;
      }
      if (response.status !== 200) fail("PCR_PRODUCT_DOWNLOAD_UNCERTAIN", "Release download did not return HTTP 200.", true);
      return response;
    }
    fail("PCR_PRODUCT_DOWNLOAD_INVALID", "Release download has too many redirects.");
  };
  const npm = (args, cwd, maxBuffer = 4 * 1024 * 1024) => {
    const result = run("npm", args, { cwd, env, encoding: "utf8", stdio: ["ignore", "pipe", "pipe"], timeout: timeout(600_000), maxBuffer });
    if (result.error || result.status !== 0) fail("PCR_PRODUCT_NPM_COMMAND_UNCERTAIN", "npm operation failed or its outcome is uncertain.", true);
    return result.stdout.trim();
  };
  const localNode = (args, cwd) => {
    const result = run(process.execPath, args, { cwd, env, encoding: "utf8", stdio: ["ignore", "pipe", "pipe"], timeout: timeout(120_000), maxBuffer: 2 * 1024 * 1024 });
    if (result.error || result.status !== 0) fail("PCR_PRODUCT_OFFLINE_PAIR_INVALID", "Installed offline product smoke verification failed.");
    return result.stdout.trim();
  };
  const io = {
    async assertBudget() { timeout(1); },
    async saveAttemptReceipt(directory, receipt) {
      const filename = path.join(directory, `attempt-${receipt.runId}-${receipt.attempt}.json`);
      let document = { schema: 1, identity: receipt.identity, runId: receipt.runId, attempt: receipt.attempt, events: [] };
      if (lstatSync(filename, { throwIfNoEntry: false })) {
        if (regular(filename).size > 4 * 1024 * 1024) fail("PCR_PRODUCT_LOCAL_JOURNAL_INVALID", "Attempt journal exceeds its bound.");
        document = parse(readFileSync(filename));
        if (document.schema !== 1 || JSON.stringify(document.identity) !== JSON.stringify(receipt.identity)
          || document.runId !== receipt.runId || document.attempt !== receipt.attempt || !Array.isArray(document.events)) fail("PCR_PRODUCT_LOCAL_JOURNAL_INVALID", "Attempt journal belongs to another publication.");
      }
      document.events.push(receipt);
      const bytes = Buffer.from(`${JSON.stringify(document, null, 2)}\n`);
      if (bytes.length > 4 * 1024 * 1024) fail("PCR_PRODUCT_LOCAL_JOURNAL_INVALID", "Attempt journal exceeds its bound.");
      const stage = `${filename}.stage-${process.pid}`;
      let created = false;
      try { writeFileSync(stage, bytes, { flag: "wx", mode: 0o600 }); created = true; renameSync(stage, filename); }
      finally { if (created) rmSync(stage, { force: true }); }
    },
    async assertRuntime() {
      if (platform !== "linux" || process.version !== `v${toolchain.node}` || toolchain.node !== "24.19.0" || npm(["--version"], root) !== toolchain.npm) fail("PCR_PRODUCT_RUNTIME_INVALID", "Publication requires its exact Linux Node/npm toolchain.");
    },
    async getTag(tag) { const result = await request(`/repos/${repository}/git/ref/tags/${tag}`); return expect(result, [200]).object; },
    async getRelease(tag) { const result = await request(`/repos/${repository}/releases/tags/${tag}`); return result.status === 404 ? null : expect(result, [200]); },
    async getLatestRelease() { const result = await request(`/repos/${repository}/releases/latest`); return result.status === 404 ? null : expect(result, [200]); },
    async createRelease(body) { return expect(await request(`/repos/${repository}/releases`, { method: "POST", body }), [201]); },
    async completeRelease(release, body) { return expect(await request(`/repos/${repository}/releases/${release.id}`, { method: "PATCH", body }), [200]); },
    async listAssets(release) {
      const assets = [];
      for (let page = 1; page <= 10; page++) {
        const values = expect(await request(`/repos/${repository}/releases/${release.id}/assets?per_page=100&page=${page}`), [200]);
        if (!Array.isArray(values)) fail("PCR_PRODUCT_REMOTE_INVALID", "Invalid release asset listing.");
        assets.push(...values);
        if (values.length < 100) {
          if (new Set(assets.map(asset => asset.name)).size !== assets.length) fail("PCR_PRODUCT_ASSET_CONFLICT", "Duplicate release asset names.");
          assetCache.set(release.id, assets); return assets;
        }
      }
      fail("PCR_PRODUCT_GITHUB_UNCERTAIN", "Release asset listing is incomplete.", true);
    },
    async readAsset(asset, limit) {
      if (!safeName(asset.name) || !Number.isSafeInteger(asset.size) || asset.size > limit) fail("PCR_PRODUCT_ASSET_CONFLICT", "Release evidence asset exceeds its bound.");
      const response = await publicFetch(asset.browser_download_url, ["github.com", "githubusercontent.com"]), bytes = await boundedBody(response, limit);
      if (bytes.length !== asset.size || (asset.digest && asset.digest !== `sha256:${digest(bytes)}`)) fail("PCR_PRODUCT_ASSET_CONFLICT", "Release evidence bytes differ from their asset metadata.");
      return bytes;
    },
    async putAsset(release, name, descriptor) {
      if (!safeName(name) || !Number.isSafeInteger(descriptor.size) || descriptor.size < 1 || !/^[a-f0-9]{64}$/u.test(descriptor.sha256 ?? "")) fail("PCR_PRODUCT_ASSET_CONFLICT", "Invalid immutable release asset.");
      let assets = assetCache.get(release.id) ?? await io.listAssets(release), existing = assets.find(asset => asset.name === name);
      if (existing) {
        if (existing.size !== descriptor.size) fail("PCR_PRODUCT_ASSET_CONFLICT", "Existing release asset differs; it cannot be overwritten.");
        if (existing.digest) {
          if (existing.digest !== `sha256:${descriptor.sha256}`) fail("PCR_PRODUCT_ASSET_CONFLICT", "Existing release asset checksum differs; it cannot be overwritten.");
        } else {
          const response = await publicFetch(existing.browser_download_url, ["github.com", "githubusercontent.com"]), hash = createHash("sha256"); let bytes = 0;
          for await (const chunk of response.body) { bytes += chunk.byteLength; if (bytes > descriptor.size) fail("PCR_PRODUCT_ASSET_CONFLICT", "Existing release asset grew beyond its proof."); hash.update(chunk); }
          if (bytes !== descriptor.size || hash.digest("hex") !== descriptor.sha256) fail("PCR_PRODUCT_ASSET_CONFLICT", "Existing release asset checksum differs; it cannot be overwritten.");
        }
        return { assetId: existing.id, reused: true };
      }
      if (descriptor.file) {
        const proof = await publicationFileDescriptor(path.dirname(descriptor.file), path.basename(descriptor.file));
        if (proof.size !== descriptor.size || proof.sha256 !== descriptor.sha256) fail("PCR_PRODUCT_LOCAL_ARTIFACT_INVALID", "Asset bytes changed before upload.");
      } else if (!Buffer.isBuffer(descriptor.bytes) || descriptor.bytes.length !== descriptor.size || digest(descriptor.bytes) !== descriptor.sha256) fail("PCR_PRODUCT_ASSET_CONFLICT", "Asset bytes do not match their proof.");
      const body = descriptor.file ? createReadStream(descriptor.file) : descriptor.bytes;
      let response;
      try { response = await fetcher(`https://uploads.github.com/repos/${repository}/releases/${release.id}/assets?name=${encodeURIComponent(name)}`, {
        method: "POST", headers: { ...headers, "Content-Type": "application/octet-stream", "Content-Length": String(descriptor.size) }, body,
        ...(descriptor.file ? { duplex: "half" } : {}), redirect: "error", signal: AbortSignal.timeout(timeout(600_000)) }); }
      catch { body.destroy?.(); fail("PCR_PRODUCT_ASSET_UPLOAD_UNCERTAIN", "Release asset upload outcome is uncertain.", true); }
      if (response.status !== 201) { body.destroy?.(); fail("PCR_PRODUCT_ASSET_UPLOAD_UNCERTAIN", "Release asset upload was not confirmed.", true); }
      const uploaded = parse(await boundedBody(response, 1024 * 1024));
      if (uploaded.name !== name || uploaded.size !== descriptor.size || (uploaded.digest && uploaded.digest !== `sha256:${descriptor.sha256}`)) fail("PCR_PRODUCT_ASSET_CONFLICT", "Uploaded release asset proof differs.");
      assets.push(uploaded); assetCache.set(release.id, assets);
      // Servers without a digest need an actual download verification too.
      if (!uploaded.digest) return io.putAsset(release, name, descriptor);
      return { assetId: uploaded.id, reused: false };
    },
    async manifestHash(directory) { const file = path.join(directory, "release.json"); if (regular(file).size > 4 * 1024 * 1024) fail("PCR_PRODUCT_LOCAL_ARTIFACT_INVALID", "Manifest exceeds its bound."); return digest(readFileSync(file)); },
    fileDescriptor: publicationFileDescriptor,
    verifyBundle: (directory, identity) => verifyProductArtifacts(directory, { expectedIdentity: identity }),
    async assertActionsArtifact(proof) {
      const result = expect(await request(`/repos/${repository}/actions/artifacts/${proof.artifactId}`), [200], "PCR_PRODUCT_ORIGINAL_ARTIFACT_REQUIRED");
      if (String(result.id) !== proof.artifactId || result.expired || !Number.isSafeInteger(result.size_in_bytes) || result.size_in_bytes < 1
        || (result.digest !== undefined && !/^sha256:[a-f0-9]{64}$/u.test(result.digest))
        || result.workflow_run?.head_sha !== proof.identity.sourceCommit || String(result.workflow_run?.id) !== proof.runId) fail("PCR_PRODUCT_ORIGINAL_ARTIFACT_REQUIRED", "Original Actions artifact is absent, expired or bound to another source/run.");
      return result;
    },
    async restoreReleaseAssets(release, manifest, proof) {
      const assets = await io.listAssets(release), work = mkdtempSync(path.join(tmpdir(), "pcr-product-sealed-")); temporary.push(work);
      const manifestAsset = assets.find(asset => asset.name === "release.json");
      if (!manifestAsset) fail("PCR_PRODUCT_ORIGINAL_ARTIFACT_REQUIRED", "The sealed release manifest is absent.");
      const sums = [...manifest.artifacts, { filename: "release.json", bytes: manifestAsset.size, sha256: proof.manifestSha256 }]
        .sort((a, b) => a.filename < b.filename ? -1 : 1).map(item => `${item.sha256}  ${item.filename}\n`).join("");
      const expected = [...manifest.artifacts, { filename: "release.json", bytes: manifestAsset.size, sha256: proof.manifestSha256 },
        { filename: "SHA256SUMS", bytes: Buffer.byteLength(sums), sha256: digest(sums) }];
      for (const item of expected) {
        const asset = assets.find(value => value.name === item.filename);
        if (!asset || asset.size !== item.bytes || (asset.digest && asset.digest !== `sha256:${item.sha256}`)) fail("PCR_PRODUCT_ASSET_CONFLICT", "An original sealed release asset differs from its proof.");
        const response = await publicFetch(asset.browser_download_url, ["github.com", "githubusercontent.com"]), hash = createHash("sha256"); let bytes = 0;
        const bounded = new Transform({ transform(chunk, _encoding, callback) { bytes += chunk.length; hash.update(chunk); callback(bytes > item.bytes ? Object.assign(new Error("bounded"), { code: "PCR_PRODUCT_REMOTE_SIZE" }) : null, chunk); } });
        await pipeline(response.body, bounded, createWriteStream(path.join(work, item.filename), { flags: "wx" }));
        if (bytes !== item.bytes || hash.digest("hex") !== item.sha256) fail("PCR_PRODUCT_ASSET_CONFLICT", "Downloaded original release asset differs from its proof.");
      }
      await io.verifyBundle(work, manifest.identity); return work;
    },
    async restoreActionsArtifact(proof, identity) {
      const artifact = await io.assertActionsArtifact(proof);
      const result = await fetcher(`${api}/repos/${repository}/actions/artifacts/${proof.artifactId}/zip`, { method: "GET", headers, redirect: "manual", signal: AbortSignal.timeout(timeout(30_000)) });
      if (result.status !== 302 || !result.headers.get("location")) fail("PCR_PRODUCT_ORIGINAL_ARTIFACT_REQUIRED", "Original Actions archive could not be obtained.");
      const response = await publicFetch(result.headers.get("location"), ["githubusercontent.com", "blob.core.windows.net", "github.com"]);
      const work = mkdtempSync(path.join(tmpdir(), "pcr-product-original-")); temporary.push(work);
      const zip = path.join(work, "original.zip"), zipHash = createHash("sha256"); let size = 0;
      // upload-artifact v4+ stores the immutable ZIP; its recorded size/digest are
      // that upload, not a policy budget: github.com/actions/upload-artifact#where-does-the-upload-go
      const bounded = new Transform({ transform(chunk, _encoding, callback) { size += chunk.length; zipHash.update(chunk);
        callback(size > artifact.size_in_bytes ? Object.assign(new Error("bounded"), { code: "PCR_PRODUCT_REMOTE_SIZE" }) : null, chunk); } });
      await pipeline(response.body, bounded, createWriteStream(zip, { flags: "wx" }));
      const zippedDigest = `sha256:${zipHash.digest("hex")}`;
      if (size !== artifact.size_in_bytes || (artifact.digest && artifact.digest !== zippedDigest)) fail("PCR_PRODUCT_ORIGINAL_ARTIFACT_REQUIRED", "Downloaded Actions ZIP differs from its immutable metadata.");
      const listing = run("unzip", ["-Z", "-1", zip], { encoding: "utf8", stdio: ["ignore", "pipe", "pipe"], timeout: timeout(30_000), maxBuffer: 64 * 1024 });
      if (listing.error || listing.status !== 0) fail("PCR_PRODUCT_ORIGINAL_ARTIFACT_REQUIRED", "Original Actions archive inventory is unavailable.");
      const entries = listing.stdout.trim().split("\n");
      if (entries.some(name => !safeName(name)) || new Set(entries).size !== entries.length || !entries.includes("release.json")) fail("PCR_PRODUCT_ORIGINAL_ARTIFACT_REQUIRED", "Actions archive needs unique safe artifact basenames.");
      const output = path.join(work, "bundle"); mkdirSync(output);
      const extract = async (name, expectedBytes) => {
        if (!safeName(name) || !entries.includes(name)) fail("PCR_PRODUCT_ORIGINAL_ARTIFACT_REQUIRED", "Required original artifact is absent.");
        const child = spawn("unzip", ["-p", zip, name], { stdio: ["ignore", "pipe", "pipe"] }); child.stderr.resume();
        const kill = setTimeout(() => child.kill("SIGKILL"), timeout(600_000));
        let bytes = 0;
        const bound = new Transform({ transform(chunk, _encoding, callback) { bytes += chunk.length; callback(bytes > expectedBytes ? Object.assign(new Error("bounded"), { code: "PCR_PRODUCT_REMOTE_SIZE" }) : null, chunk); } });
        const finished = new Promise((resolve, reject) => { child.once("error", () => reject(Object.assign(new Error("extract"), { code: "PCR_PRODUCT_ORIGINAL_ARTIFACT_REQUIRED" }))); child.once("close", status => status === 0 ? resolve() : reject(Object.assign(new Error("extract"), { code: "PCR_PRODUCT_ORIGINAL_ARTIFACT_REQUIRED" }))); });
        try { await Promise.all([pipeline(child.stdout, bound, createWriteStream(path.join(output, name), { flags: "wx" })), finished]); }
        catch { child.kill("SIGKILL"); fail("PCR_PRODUCT_ORIGINAL_ARTIFACT_REQUIRED", "Original archive extraction failed its bound."); }
        finally { clearTimeout(kill); }
      };
      await extract("release.json", 4 * 1024 * 1024);
      if (await io.manifestHash(output) !== proof.manifestSha256) fail("PCR_PRODUCT_ORIGINAL_ARTIFACT_REQUIRED", "Original Actions manifest differs from its sealed proof.");
      const manifest = JSON.parse(readFileSync(path.join(output, "release.json"), "utf8"));
      // Safe names and size limits are checked independently before unzip sees a name.
      if (!Array.isArray(manifest.artifacts) || manifest.artifacts.some(item => !safeName(item.filename) || !Number.isSafeInteger(item.bytes) || item.bytes < 1)) fail("PCR_PRODUCT_ORIGINAL_ARTIFACT_REQUIRED", "Original artifact file set is invalid.");
      await extract("SHA256SUMS", 64 * 1024);
      for (const item of manifest.artifacts) await extract(item.filename, item.bytes);
      await io.verifyBundle(output, identity); return output;
    },
    async registry(name, selector) {
      if (!["@tiangong-lca/pcr", "@tiangong-lca/pcr-library"].includes(name) || !/^(?:latest|\d+\.\d+\.\d+)$/u.test(selector)) fail("PCR_PRODUCT_ENDPOINT_INVALID", "Unexpected npm publication selector.");
      let response;
      try { response = await fetcher(`${registry}/${encodeURIComponent(name)}/${selector}`, { method: "GET", redirect: "error", signal: AbortSignal.timeout(timeout(30_000)) }); }
      catch { fail("PCR_PRODUCT_REGISTRY_UNCERTAIN", "npm registry lookup failed.", true); }
      if (response.status === 404) return { state: "missing" };
      if (response.status !== 200) return { state: "unknown" };
      return { state: "present", metadata: parse(await boundedBody(response, 2 * 1024 * 1024)) };
    },
    async verifyTarball(receipt) {
      const result = await io.registry(receipt.name, receipt.version);
      if (result.state !== "present") fail("PCR_PRODUCT_REGISTRY_UNCERTAIN", "Published tarball metadata is unavailable.", true);
      const response = await publicFetch(result.metadata.dist?.tarball, ["registry.npmjs.org"]), sha = createHash("sha256"), integrity = createHash("sha512"); let bytes = 0;
      for await (const chunk of response.body) { bytes += chunk.byteLength; if (bytes > receipt.bytes) fail("PCR_PRODUCT_TARBALL_CONFLICT", "Published tarball exceeds its sealed size."); sha.update(chunk); integrity.update(chunk); }
      return { bytes, sha256: sha.digest("hex"), integrity: `sha512-${integrity.digest("base64")}` };
    },
    async publishNpm(receipt, directory, tag) { npm(["publish", path.join(directory, receipt.filename), "--access", "public", "--provenance", "--ignore-scripts", "--tag", tag, "--registry", registry], root); },
    async promoteLatest(receipt) { npm(["dist-tag", "add", `${receipt.name}@${receipt.version}`, "latest", "--registry", registry], root); },
    async verifyOfflinePair(directory, manifest) {
      const work = mkdtempSync(path.join(tmpdir(), "pcr-product-install-")); temporary.push(work);
      const receipts = Object.values(manifest.packages);
      npm(["install", "--offline", "--ignore-scripts", "--no-audit", "--no-fund", ...receipts.map(item => path.join(directory, item.filename))], work);
      const bin = path.join(work, "node_modules/@tiangong-lca/pcr/packages/tiangong-pcr-cli/bin/tiangong-pcr.js"), library = path.join(work, "node_modules/@tiangong-lca/pcr-library/library.sqlite");
      const toolVersion = localNode([bin, "--version"], work), sidecar = JSON.parse(readFileSync(`${library}.json`, "utf8"));
      const checked = parse(Buffer.from(localNode([bin, "library", "verify", "--library", library, "--library-sha256", sidecar.sha256, "--format", "json"], work)));
      const listed = parse(Buffer.from(localNode([bin, "list", "--scope", "material", "--page-size", "1", "--library", library, "--format", "json"], work)));
      if (listed.total_count !== manifest.web.probes.counts.pcrs || checked.verified !== true) fail("PCR_PRODUCT_OFFLINE_PAIR_INVALID", "Installed material inventory or snapshot verification differs.");
      return { verified: true, toolVersion, libraryVersion: checked.snapshot.content_version, sourceCommit: checked.snapshot.source_commit };
    },
    async getDeploymentRef() {
      const result = await request(`/repos/${repository}/git/ref/heads/release/production`);
      if (result.status === 404) return null;
      const reference = expect(result, [200]);
      if (reference.object?.type !== "commit" || !/^[a-f0-9]{40}$/u.test(reference.object.sha ?? "")) fail("PCR_PRODUCT_DEPLOYMENT_REF_CONFLICT", "Deployment pointer is not a commit.");
      const config = await request(`/repos/${repository}/contents/product-release.json?ref=${reference.object.sha}`);
      let version = null;
      if (config.status !== 404) {
        const file = expect(config, [200]);
        if (file.type !== "file" || file.encoding !== "base64" || file.size > 1024 * 1024) fail("PCR_PRODUCT_DEPLOYMENT_REF_CONFLICT", "Deployment version source is invalid.");
        version = parse(Buffer.from(file.content, "base64")).version;
        if (!/^\d+\.\d+\.\d+$/u.test(version ?? "")) fail("PCR_PRODUCT_DEPLOYMENT_REF_CONFLICT", "Deployment version source is invalid.");
      }
      return { sha: reference.object.sha, version };
    },
    async getLiveIdentity() {
      const read = async pathname => {
        let response;
        try { response = await fetcher(`https://pcr.tiangong.earth${pathname}`, { method: "GET", credentials: "omit", redirect: "error",
          headers: { Accept: "application/json", "Cache-Control": "no-cache" }, signal: AbortSignal.timeout(timeout(30_000)) }); }
        catch { fail("PCR_PRODUCT_LIVE_UNCERTAIN", "Cannot read the actual public website identity.", true); }
        if (response.status === 404 && pathname === "/generated/product-release.json") { await response.body?.cancel?.().catch(() => {}); return null; }
        if (response.status !== 200 || String(response.headers.get("content-type") ?? "").split(";", 1)[0].trim().toLowerCase() !== "application/json") fail("PCR_PRODUCT_LIVE_UNCERTAIN", "Public identity was not readable JSON.", true);
        const cache = String(response.headers.get("cache-control") ?? "").toLowerCase();
        if (/immutable|(?:^|,)\s*(?:s-maxage|max-age)\s*=\s*"?[1-9]/u.test(cache)
          || !(/(?:^|,)\s*no-(?:store|cache)(?:\s*,|\s*$)/u.test(cache) || (/max-age\s*=\s*"?0"?(?:\s*,|\s*$)/u.test(cache) && /(?:^|,)\s*must-revalidate(?:\s*,|\s*$)/u.test(cache)))) fail("PCR_PRODUCT_LIVE_UNCERTAIN", "Public release identity must be freshly revalidated.", true);
        return parse(await boundedBody(response, 64 * 1024));
      };
      const product = await read("/generated/product-release.json");
      if (product !== null) {
        try { assertProductIdentity(product); } catch { fail("PCR_PRODUCT_LIVE_UNCERTAIN", "Public product identity is invalid.", true); }
        return { state: "product", identity: product };
      }
      const legacy = await read("/generated/version.json");
      if (!/^[a-f0-9]{40}$/u.test(legacy?.sourceCommit ?? "") || ["releaseVersion", "releaseTag", "sourceFingerprint"].some(key => Object.hasOwn(legacy, key))) fail("PCR_PRODUCT_LIVE_UNCERTAIN", "A missing product marker is not a confirmed legacy deployment.", true);
      return { state: "legacy", sourceCommit: legacy.sourceCommit };
    },
    async isAncestor(base, head) { const result = expect(await request(`/repos/${repository}/compare/${base}...${head}`), [200]); return ["ahead", "identical"].includes(result.status); },
    async advanceDeploymentRef(sha, expectedSha) {
      const current = await io.getDeploymentRef();
      if ((current?.sha ?? null) !== expectedSha) fail("PCR_PRODUCT_DEPLOYMENT_REF_CHANGED", "Deployment pointer changed before fast-forward.");
      const result = expectedSha === null
        ? await request(`/repos/${repository}/git/refs`, { method: "POST", body: { ref: "refs/heads/release/production", sha } })
        : await request(`/repos/${repository}/git/refs/heads/release/production`, { method: "PATCH", body: { sha, force: false } });
      if (!([200, 201].includes(result.status)) || result.body?.object?.sha !== sha) fail("PCR_PRODUCT_DEPLOYMENT_REF_CHANGED", "Deployment pointer fast-forward was not confirmed.", true);
    },
    async triggerHook() {
      let response;
      try { response = await fetcher(env.PCR_EDGEONE_DEPLOY_HOOK_URL, { method: "POST", redirect: "error", signal: AbortSignal.timeout(timeout(30_000)) }); }
      catch { fail("PCR_PRODUCT_WEB_TRIGGER_UNCERTAIN", "Explicit deployment retry acceptance is uncertain.", true); }
      await response.body?.cancel?.().catch(() => {});
      if (response.status < 200 || response.status >= 300) fail("PCR_PRODUCT_WEB_TRIGGER_UNCERTAIN", "Explicit deployment retry was not accepted.", true);
      return { accepted: true }; // The provider documents no deployment-ID response schema.
    },
    verifyWeb: (manifest, { timeoutMs = 120_000 } = {}) => verifyLiveWebsite({ origin: manifest.web.origin, identity: manifest.identity,
      counts: manifest.web.probes.counts, probes: manifest.web.probes, fetcher, timeoutMs: timeout(Math.min(120_000, timeoutMs)) }),
    pause: milliseconds => new Promise((resolve, reject) => { let bounded; try { bounded = timeout(milliseconds); } catch (error) { reject(error); return; }
      setTimeout(() => bounded < milliseconds ? reject(Object.assign(new Error("budget"), { code: "PCR_PRODUCT_BUDGET_EXHAUSTED" })) : resolve(), bounded); }),
    async cleanup() { for (const work of temporary) rmSync(work, { recursive: true, force: true }); },
  };
  return io;
}
