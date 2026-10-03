import fs from "node:fs";
import path from "node:path";
import { createHash, randomBytes } from "node:crypto";
import { performance } from "node:perf_hooks";
import { pathToFileURL } from "node:url";
import { readProductIdentity, readProductVersion } from "./product-identity.mjs";
import { readProductArchive, validateProductManifest, verifyProductWebTree } from "./product-release.mjs";
import {
  HEADROOM_BYTES, MAX_OUTPUT_FILES, PREBUILT_ASSETS_ENV, filesystemFacts,
  publishOutput, relocationRequested, selectScratchWorkspace,
} from "../../packages/pcr-docs/scripts/build-storage.mjs";

const repository = "tiangong-lca/pcr";
const releaseStorageHosts = new Set([
  "release-assets.githubusercontent.com", "objects.githubusercontent.com", "github-releases.githubusercontent.com",
]);
const MAX_MANIFEST_BYTES = 1024 * 1024;
const MAX_FILE_BYTES = 25_000_000;
const TRANSFER_TIMEOUT_MS = 15 * 60 * 1000;

function assertDownloadUrl(value, releasePath) {
  const url = new URL(value);
  if (url.protocol !== "https:" || url.username || url.password || url.port || url.hash
    || !(releaseStorageHosts.has(url.hostname) ||
      (url.hostname === "github.com" && url.pathname.startsWith(releasePath)))) {
    throw new Error("Product downloads require the fixed GitHub release or official release storage over HTTPS.");
  }
  return url;
}

async function cancelBody(response) {
  try { await response.body?.cancel?.(); } catch { /* Best-effort network cleanup only. */ }
}

function writeAll(descriptor, chunk) {
  for (let offset = 0; offset < chunk.length;) {
    const written = fs.writeSync(descriptor, chunk, offset, chunk.length - offset);
    if (written <= 0) throw new Error("Product artifact write made no progress.");
    offset += written;
  }
}

/** No credentials or automatic redirects. Count actual streamed bytes rather than trusting headers. */
export async function downloadProductFile(url, {
  releasePath, destination = null, fetchImpl = globalThis.fetch, maxBytes,
  expectedBytes = null, expectedSha256 = null, signal, assertDeadline = () => signal?.throwIfAborted(),
}) {
  if (!Number.isSafeInteger(maxBytes) || maxBytes < 1 ||
    (expectedBytes !== null && (!Number.isSafeInteger(expectedBytes) || expectedBytes < 1 || expectedBytes > maxBytes)) ||
    (expectedSha256 !== null && !/^[a-f0-9]{64}$/u.test(expectedSha256))) {
    throw new Error("Invalid product download proof or byte bound.");
  }
  if (!/^\/tiangong-lca\/pcr\/releases\/download\/v[0-9]+\.[0-9]+\.[0-9]+(?:-[0-9A-Za-z.-]+)?\/$/u.test(releasePath))
    throw new Error("Product downloads must name the canonical repository and product tag.");
  let current = assertDownloadUrl(url, releasePath);
  if (current.hostname !== "github.com") throw new Error("Product downloads must start at the canonical GitHub release.");
  let response;
  for (let redirects = 0; ; redirects += 1) {
    assertDeadline();
    response = await fetchImpl(current.href, {
      redirect: "manual", credentials: "omit", signal,
      headers: { accept: "application/octet-stream", "accept-encoding": "identity" },
    });
    if (![301, 302, 303, 307, 308].includes(response.status)) break;
    const location = response.headers.get("location");
    await cancelBody(response);
    if (!location || redirects >= 5) throw new Error("Product download redirect is missing or exceeds its bound.");
    current = assertDownloadUrl(new URL(location, current).href, releasePath);
  }
  if (response.status !== 200 || !response.body) {
    await cancelBody(response);
    throw new Error(`Product release download failed: HTTP ${response.status}.`);
  }
  const length = response.headers.get("content-length");
  if (length !== null && (!/^[0-9]+$/u.test(length) || !Number.isSafeInteger(Number(length)) ||
    Number(length) > maxBytes || (expectedBytes !== null && Number(length) !== expectedBytes))) {
    await cancelBody(response);
    throw new Error("Product download content length exceeds or differs from its declared proof.");
  }
  const pieces = [], hash = createHash("sha256");
  let bytes = 0, descriptor = null;
  try {
    if (destination) descriptor = fs.openSync(destination, "wx", 0o600);
    for await (const value of response.body) {
      assertDeadline();
      const chunk = Buffer.from(value);
      bytes += chunk.length;
      if (!Number.isSafeInteger(bytes) || bytes > maxBytes) throw new Error("Product download exceeds its declared byte bound.");
      hash.update(chunk);
      if (descriptor !== null) writeAll(descriptor, chunk);
      else pieces.push(chunk);
    }
  } catch (error) {
    await cancelBody(response);
    throw error;
  } finally {
    if (descriptor !== null) fs.closeSync(descriptor);
  }
  const sha256 = hash.digest("hex");
  if (expectedBytes !== null && bytes !== expectedBytes) throw new Error("Product download size differs from its declared proof.");
  if (expectedSha256 !== null && sha256 !== expectedSha256) throw new Error("Product download checksum differs from its declared proof.");
  return { bytes, sha256, ...(destination ? {} : { body: Buffer.concat(pieces, bytes) }) };
}

function sameIdentity(left, right) {
  if (Object.keys(left).some(key => left[key] !== right[key]) || Object.keys(left).length !== Object.keys(right).length)
    throw new Error("Product source identity changed during web materialization.");
}

/** Import the canonical publisher's sealed artifact; this never invokes a build or a provider API. */
export async function materializeProductWeb({
  root = process.cwd(), env = process.env, fetchImpl = globalThis.fetch,
  readIdentity = readProductIdentity, readVersion = readProductVersion,
  validateManifest = validateProductManifest, readArchive = readProductArchive,
  verifyTree = verifyProductWebTree, selectScratch = selectScratchWorkspace,
  publish = publishOutput, facts = filesystemFacts, log = console.log,
  timeoutMs = TRANSFER_TIMEOUT_MS, now = () => performance.now(),
} = {}) {
  if (!Number.isSafeInteger(timeoutMs) || timeoutMs < 1) throw new Error("Product materialization requires a finite transfer deadline.");
  root = fs.realpathSync(root);
  const identity = readIdentity(root), config = readVersion(root);
  const releasePath = `/${repository}/releases/download/${encodeURIComponent(identity.tag)}/`;
  const base = `https://github.com${releasePath}`;
  const controller = new AbortController();
  const expiresAt = now() + timeoutMs;
  const assertDeadline = () => {
    // Native filesystem copies can block the event loop; do not rely only on a queued timer.
    if (now() >= expiresAt) throw new Error("Product web materialization timed out.");
    controller.signal.throwIfAborted();
  };
  const deadline = setTimeout(() => controller.abort(new Error("Product web materialization timed out.")), timeoutMs);
  let owned = null, descriptor = null;
  try {
    const response = await downloadProductFile(`${base}release.json`, {
      releasePath, fetchImpl, maxBytes: MAX_MANIFEST_BYTES, signal: controller.signal, assertDeadline,
    });
    const manifest = validateManifest(JSON.parse(new TextDecoder("utf-8", { fatal: true }).decode(response.body)), {
      identity, toolchain: { node: config.node, npm: config.npm },
    });
    if (manifest.web.files >= MAX_OUTPUT_FILES) throw new Error("Product web exceeds the provider file-count limit.");
    const requiredBytes = Math.ceil((manifest.web.bytes + manifest.web.uncompressedBytes) * 1.25) + HEADROOM_BYTES;
    if (!Number.isSafeInteger(requiredBytes)) throw new Error("Product scratch capacity is not a safe byte count.");
    const relocation = relocationRequested({ repoRoot: root, env, facts });
    owned = selectScratch({ repoRoot: root, constraint: relocation.facts, requiredBytes, env, facts, log });
    // The selector creates this exact task-owned directory on a proven disk-backed filesystem.
    const scratchApp = path.join(owned.scratchRoot, "repo/packages/pcr-docs");
    const out = path.join(scratchApp, "out");
    fs.mkdirSync(out, { recursive: true });
    const archive = path.join(owned.scratchRoot, manifest.web.filename);
    await downloadProductFile(`${base}${encodeURIComponent(manifest.web.filename)}`, {
      releasePath, destination: archive, fetchImpl, maxBytes: manifest.web.bytes,
      expectedBytes: manifest.web.bytes, expectedSha256: manifest.web.sha256, signal: controller.signal, assertDeadline,
    });
    let files = 0, bytes = 0, current = null;
    const tree = await readArchive(archive, {
      signal: controller.signal,
      onFileStart(entry) {
        assertDeadline();
        if (descriptor !== null || !Number.isSafeInteger(entry.bytes) || entry.bytes < 0 || entry.bytes >= MAX_FILE_BYTES)
          throw new Error("Product web archive contains an invalid or oversized file.");
        files += 1; bytes += entry.bytes;
        if (files > manifest.web.files || files >= MAX_OUTPUT_FILES || !Number.isSafeInteger(bytes) || bytes > manifest.web.uncompressedBytes)
          throw new Error("Product web archive exceeds its sealed inventory.");
        const target = path.resolve(out, entry.path);
        if (!target.startsWith(out + path.sep)) throw new Error("Product archive path leaves its owned export.");
        fs.mkdirSync(path.dirname(target), { recursive: true });
        descriptor = fs.openSync(target, fs.constants.O_WRONLY | fs.constants.O_CREAT | fs.constants.O_EXCL |
          (fs.constants.O_NOFOLLOW ?? 0), 0o644);
        current = { path: entry.path, bytes: 0, expected: entry.bytes };
      },
      onFileChunk(entry, chunk) {
        assertDeadline();
        if (!current || current.path !== entry.path || current.bytes + chunk.length > current.expected)
          throw new Error("Product archive file body differs from its declared entry.");
        writeAll(descriptor, chunk);
        current.bytes += chunk.length;
      },
      onFileEnd(entry) {
        if (!current || current.path !== entry.path || current.bytes !== current.expected)
          throw new Error("Product archive file is incomplete.");
        fs.closeSync(descriptor); descriptor = null; current = null;
      },
    });
    if (files !== manifest.web.files || bytes !== manifest.web.uncompressedBytes || tree.treeSha256 !== manifest.web.treeSha256)
      throw new Error("Product web archive differs from its sealed tree.");
    await verifyTree(out, manifest);
    sameIdentity(identity, readIdentity(root));
    assertDeadline();
    const published = publish({
      app: path.join(root, "packages/pcr-docs"), scratchApp,
      token: randomBytes(12).toString("hex"),
      providerRoot: relocation.reason === "memory-backed-checkout" || env[PREBUILT_ASSETS_ENV] === "1" ? root : null,
      beforeSwap() { assertDeadline(); sameIdentity(identity, readIdentity(root)); assertDeadline(); },
    });
    const result = { identity, web: { filename: manifest.web.filename, bytes: manifest.web.bytes,
      files, uncompressedBytes: bytes, treeSha256: tree.treeSha256 }, published };
    // A reporting failure must not turn a completed atomic handoff into a reported failure.
    try { log(JSON.stringify({ event: "product-web-materialized", ...result })); } catch { /* Diagnostics only. */ }
    return result;
  } finally {
    clearTimeout(deadline);
    if (descriptor !== null) fs.closeSync(descriptor);
    if (owned && owned.scratchRoot.startsWith(owned.scratchBase + path.sep) && path.basename(owned.scratchRoot).startsWith("pcr-build-"))
      fs.rmSync(owned.scratchRoot, { recursive: true, force: true, maxRetries: 3 });
  }
}

if (process.argv[1] && import.meta.url === pathToFileURL(path.resolve(process.argv[1])).href) {
  if (process.argv.length !== 2) { console.error("Usage: node builder/scripts/product-web-materialize.mjs"); process.exitCode = 1; }
  else materializeProductWeb().catch(error => { console.error(error.message); process.exitCode = 1; });
}
