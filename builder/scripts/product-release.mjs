import { appendFileSync, closeSync, constants, cpSync, createReadStream, createWriteStream, existsSync, fstatSync, lstatSync, mkdirSync, mkdtempSync, openSync, readFileSync, readdirSync, realpathSync, renameSync, rmSync, writeFileSync } from "node:fs";
import { createHash } from "node:crypto";
import { execFileSync, spawnSync } from "node:child_process";
import { Readable } from "node:stream";
import { pipeline } from "node:stream/promises";
import { createGzip, createGunzip } from "node:zlib";
import path from "node:path";
import { pathToFileURL } from "node:url";
import { compareSemver } from "../lib/lifecycle-policy.ts";
import { assertIdentity, buildPackageArtifact, githubRequest, packages } from "./npm-release.mjs";
import { PRODUCT_VERSION_FILE, assertProductIdentity, assertProductSemver, productGit, productSha256, readProductIdentity, readProductVersion } from "./product-identity.mjs";
import { createWebProbes, writePrebuiltConfig } from "./product-web.mjs";

const repository = "tiangong-lca/pcr";
const json = file => JSON.parse(readFileSync(file, "utf8"));
const writeJson = (file, value) => writeFileSync(file, `${JSON.stringify(value, null, 2)}\n`);
const identicalIdentity = (left, right) => {
  assertProductIdentity(left); assertProductIdentity(right);
  if (Object.keys(right).some(key => left[key] !== right[key])) throw new Error("Product identities differ.");
};
const filenameSafe = filename => typeof filename === "string" && filename === filename.trim() && /^[a-zA-Z0-9][a-zA-Z0-9._-]*$/u.test(filename);
function canonicalNewPath(value) {
  let ancestor = path.resolve(value); const suffix = [];
  while (!lstatSync(ancestor, { throwIfNoEntry: false })) { suffix.unshift(path.basename(ancestor)); ancestor = path.dirname(ancestor); }
  return path.join(realpathSync(ancestor), ...suffix);
}
const sameJson = (left, right) => {
  const stable = value => value && typeof value === "object" && !Array.isArray(value)
    ? Object.fromEntries(Object.keys(value).sort().map(key => [key, stable(value[key])]))
    : Array.isArray(value) ? value.map(stable) : value;
  return JSON.stringify(stable(left)) === JSON.stringify(stable(right));
};
function assertPrebuiltHosting(hosting) {
  if (!hosting || typeof hosting !== "object" || Array.isArray(hosting)
    || Object.entries(hosting).some(([key, value]) => !["headers", "redirects", "rewrites"].includes(key) || !Array.isArray(value)))
    throw new Error("Web archive needs routing-only prebuilt hosting configuration.");
}

export function productReleaseSpec(tag) {
  if (typeof tag !== "string" || !tag.startsWith("v")) throw new Error("Expected a product v<SemVer> tag.");
  const version = assertProductSemver(tag.slice(1));
  if (version.includes("-")) throw new Error("Unified product publication currently supports stable production tags only.");
  return { version, tag, dist_tag: "latest" };
}

export function detectProductRelease(root, base, head) {
  if (![base, head].every(sha => /^[a-f0-9]{40}$/u.test(sha ?? "") && !/^0+$/u.test(sha))) throw new Error("Expected existing full base/head SHAs.");
  productGit(root, "merge-base", "--is-ancestor", base, head);
  const exists = ref => spawnSync("git", ["cat-file", "-e", `${ref}:${PRODUCT_VERSION_FILE}`], { cwd: root }).status === 0;
  if (!exists(head)) {
    if (exists(base)) throw new Error("The product version source cannot be removed.");
    return null;
  }
  const current = readProductVersion(root, { ref: head });
  // Adding the new authority is explicit bootstrap, never an implicit first publication.
  if (!exists(base)) return null;
  const previous = readProductVersion(root, { ref: base });
  if (current.version === previous.version) return null;
  if (compareSemver(current.version, previous.version) <= 0) throw new Error("Product version must increase.");
  return productReleaseSpec(`v${current.version}`);
}

export function productReleaseContext(root, tag, env) {
  assertIdentity(env);
  const spec = productReleaseSpec(tag);
  if (!["push", "workflow_dispatch"].includes(env.GITHUB_EVENT_NAME) || env.GITHUB_REF !== `refs/tags/${tag}`) throw new Error("Run publication at the exact product tag ref.");
  const head = productGit(root, "rev-parse", `refs/tags/${tag}^{commit}`);
  if (env.GITHUB_SHA !== head || env.GITHUB_WORKFLOW_SHA !== head || productGit(root, "rev-parse", "HEAD") !== head) throw new Error("Product event, workflow, checkout and tag SHAs must match.");
  productGit(root, "merge-base", "--is-ancestor", head, "refs/remotes/origin/main");
  const config = readProductVersion(root);
  if (config.version !== spec.version) throw new Error("Product tag does not match its sole version source.");
  return { ...spec, identity: readProductIdentity(root), toolchain: { node: config.node, npm: config.npm }, web: config.web };
}

export async function tagAndDispatchProduct(spec, head, request) {
  if (!/^[a-f0-9]{40}$/u.test(head ?? "")) throw new Error("Expected a full product source commit.");
  productReleaseSpec(spec.tag);
  const existing = await request(`/repos/${repository}/git/ref/tags/${spec.tag}`, "GET");
  if (existing.status === 404) {
    const created = await request(`/repos/${repository}/git/refs`, "POST", { ref: `refs/tags/${spec.tag}`, sha: head });
    if (created.status !== 201) throw new Error(`Cannot create product tag: HTTP ${created.status}`);
  } else if (existing.status !== 200 || existing.body?.object?.type !== "commit" || existing.body?.object?.sha !== head) throw new Error("Product tag conflict or uncertain tag lookup.");
  const dispatched = await request(`/repos/${repository}/actions/workflows/publish.yml/dispatches`, "POST", { ref: spec.tag, inputs: { tag_name: spec.tag } });
  if (dispatched.status !== 204) throw new Error(`Product publication dispatch failed: HTTP ${dispatched.status}; retry without moving the tag.`);
}

/** Explicit first-tag/retry entry. Introduction of the sole version source is never automatic. */
export async function bootstrapProductTag(root, tag, env, request = githubRequest) {
  assertIdentity(env);
  const spec = productReleaseSpec(tag), head = productGit(root, "rev-parse", "HEAD");
  if (env.GITHUB_EVENT_NAME !== "workflow_dispatch" || env.GITHUB_REF !== "refs/heads/main"
    || env.GITHUB_SHA !== head || env.GITHUB_WORKFLOW_SHA !== head) throw new Error("Explicit product tagging requires the exact canonical main dispatch checkout.");
  productGit(root, "merge-base", "--is-ancestor", head, "refs/remotes/origin/main");
  const identity = readProductIdentity(root);
  if (identity.version !== spec.version || identity.tag !== tag) throw new Error("Explicit product tag differs from its version source.");
  await tagAndDispatchProduct(spec, head, request);
  return { ...spec, identity };
}

function safeArchivePath(value, directory = false) {
  if (directory) value = value.replace(/\/$/u, "");
  if (!value || value.includes("\\") || /[\u0000-\u001f\u007f:]/u.test(value) || value.startsWith("/")
    || value.split("/").some(part => !part || part === "." || part === "..")) throw new Error("Unsafe archive path.");
  return value;
}
export const productTreeSha256 = files => productSha256("tiangong-pcr-product-web-tree-v1\n" + files.toSorted((a, b) => a.path < b.path ? -1 : a.path > b.path ? 1 : 0)
  .map(file => `${JSON.stringify([file.path, file.bytes, file.sha256])}\n`).join(""));

function regularTree(root) {
  if (!lstatSync(root).isDirectory() || lstatSync(root).isSymbolicLink()) throw new Error("Web export must be a regular directory.");
  root = realpathSync(root);
  const files = [];
  const walk = directory => {
    for (const name of readdirSync(directory).sort()) {
      const file = path.join(directory, name), stat = lstatSync(file);
      if (stat.isSymbolicLink()) throw new Error("Web archive refuses symlinks.");
      if (stat.isDirectory()) walk(file);
      else if (stat.isFile()) files.push({ path: safeArchivePath(path.relative(root, file).split(path.sep).join("/")), bytes: stat.size });
      else throw new Error("Web archive requires regular files.");
    }
  };
  walk(root);
  return { root, files };
}

function octal(header, offset, length, value) {
  if (!Number.isSafeInteger(value) || value < 0) throw new Error("Invalid archive field.");
  const text = value.toString(8);
  if (text.length > length - 1) throw new Error("Archive field exceeds USTAR capacity.");
  header.write(text.padStart(length - 1, "0") + "\0", offset, length, "ascii");
}
function tarHeader(name, size, type = "0") {
  const header = Buffer.alloc(512);
  if (Buffer.byteLength(name) > 100) throw new Error("USTAR entry requires a PAX path.");
  header.write(name, 0, 100, "utf8"); octal(header, 100, 8, 0o644); octal(header, 108, 8, 0); octal(header, 116, 8, 0);
  octal(header, 124, 12, size); octal(header, 136, 12, 0); header.fill(32, 148, 156);
  header.write(type, 156, 1, "ascii"); header.write("ustar\0", 257, 6, "ascii"); header.write("00", 263, 2, "ascii");
  const sum = header.reduce((total, value) => total + value, 0);
  header.write(sum.toString(8).padStart(6, "0") + "\0 ", 148, 8, "ascii");
  return header;
}
function paxPath(value) {
  const suffix = ` path=${value}\n`;
  let length = Buffer.byteLength(suffix) + 1;
  for (;;) {
    const actual = String(length).length + Buffer.byteLength(suffix);
    if (actual === length) return Buffer.from(`${length}${suffix}`);
    length = actual;
  }
}
const padding = bytes => Buffer.alloc((512 - bytes % 512) % 512);
const statIdentity = stat => `${stat.dev}:${stat.ino}:${stat.size}:${stat.mtimeMs}:${stat.ctimeMs}`;

/** Portable deterministic tar/gzip. Bodies are streamed, including paths beyond USTAR's 255-byte limit. */
export async function writeProductWebArchive(root, filename) {
  const tree = regularTree(root);
  const target = canonicalNewPath(filename);
  if (target === tree.root || target.startsWith(tree.root + path.sep)) throw new Error("Web archive destination must be outside its source tree.");
  async function* chunks() {
    let index = 0;
    for (const file of tree.files) {
      if (Buffer.byteLength(file.path) > 100) {
        const pax = paxPath(file.path);
        yield tarHeader(`PaxHeaders/${index}`, pax.length, "x"); yield pax; yield padding(pax.length);
      }
      yield tarHeader(Buffer.byteLength(file.path) > 100 ? `file-${index}` : file.path, file.bytes);
      const absolute = path.join(tree.root, file.path);
      const before = lstatSync(absolute);
      if (!before.isFile() || before.isSymbolicLink() || before.size !== file.bytes) throw new Error("Web export changed before archive read.");
      const fd = openSync(absolute, constants.O_RDONLY | (constants.O_NOFOLLOW ?? 0));
      const hash = createHash("sha256"); let bytes = 0;
      try {
        if (statIdentity(before) !== statIdentity(fstatSync(fd))) throw new Error("Web export changed during archive open.");
        for await (const chunk of createReadStream(absolute, { fd, autoClose: false })) { bytes += chunk.length; hash.update(chunk); yield chunk; }
        if (bytes !== file.bytes || statIdentity(before) !== statIdentity(fstatSync(fd)) || statIdentity(before) !== statIdentity(lstatSync(absolute))) throw new Error("Web export changed during archive read.");
      } finally { closeSync(fd); }
      file.sha256 = hash.digest("hex"); yield padding(file.bytes); index++;
    }
    yield Buffer.alloc(1024);
  }
  await pipeline(Readable.from(chunks()), createGzip({ level: 9 }), createWriteStream(filename, { flags: "wx" }));
  const after = regularTree(root);
  if (JSON.stringify(after.files) !== JSON.stringify(tree.files.map(({ path, bytes }) => ({ path, bytes })))) throw new Error("Web export tree changed during archive construction.");
  return { files: tree.files.length, uncompressedBytes: tree.files.reduce((bytes, file) => bytes + file.bytes, 0), treeSha256: productTreeSha256(tree.files) };
}

class TarReader {
  constructor(stream, signal) { this.iterator = stream[Symbol.asyncIterator](); this.buffer = Buffer.alloc(0); this.signal = signal; }
  async consume(bytes, callback) {
    while (bytes > 0) {
      this.signal?.throwIfAborted();
      if (!this.buffer.length) { const next = await this.iterator.next(); if (next.done) throw new Error("Truncated product archive."); this.buffer = next.value; }
      this.signal?.throwIfAborted();
      const count = Math.min(bytes, this.buffer.length);
      await callback(this.buffer.subarray(0, count)); this.buffer = this.buffer.subarray(count); bytes -= count;
    }
  }
  async read(bytes) { const pieces = []; await this.consume(bytes, chunk => pieces.push(chunk)); return Buffer.concat(pieces, bytes); }
  async finish() {
    this.signal?.throwIfAborted();
    if (this.buffer.some(byte => byte !== 0)) throw new Error("Unexpected archive data after end marker.");
    for (;;) { this.signal?.throwIfAborted(); const next = await this.iterator.next(); this.signal?.throwIfAborted(); if (next.done) break; if (next.value.some(byte => byte !== 0)) throw new Error("Unexpected archive data after end marker."); }
  }
}
const tarString = (header, start, length) => {
  const bytes = header.subarray(start, start + length), end = bytes.indexOf(0);
  return new TextDecoder("utf-8", { fatal: true }).decode(end < 0 ? bytes : bytes.subarray(0, end));
};
function tarNumber(header, start, length) {
  const value = tarString(header, start, length).trim();
  if (!/^[0-7]+$/u.test(value)) throw new Error("Invalid archive numeric field.");
  const number = Number.parseInt(value, 8); if (!Number.isSafeInteger(number)) throw new Error("Unsafe archive size."); return number;
}
function parsePax(bytes, strictPaths) {
  let offset = 0, name = null;
  while (offset < bytes.length) {
    const space = bytes.indexOf(32, offset), digits = bytes.subarray(offset, space).toString("ascii");
    if (space < offset || !/^[1-9][0-9]*$/u.test(digits)) throw new Error("Invalid PAX record length.");
    const length = Number(digits), end = offset + length;
    if (!Number.isSafeInteger(length) || end > bytes.length || end <= space + 1 || bytes[end - 1] !== 10) throw new Error("Invalid PAX record.");
    const value = new TextDecoder("utf-8", { fatal: true }).decode(bytes.subarray(space + 1, end - 1));
    if (value.startsWith("path=")) { if (name !== null) throw new Error("Duplicate PAX path."); name = value.slice(5); }
    else if (strictPaths || !/^(?:mtime|atime|ctime|uid|gid|uname|gname)=/u.test(value)) throw new Error("Unsupported PAX mutation.");
    offset = end;
  }
  if (strictPaths && name === null) throw new Error("Web PAX metadata must name its next regular file.");
  return name;
}

/** Callbacks receive {path,bytes} and file chunks; no entries are extracted by this reader. */
export async function readProductArchive(filename, { allowDirectories = false, collect = [], signal, onFileStart = () => {}, onFileChunk = () => {}, onFileEnd = () => {} } = {}) {
  signal?.throwIfAborted();
  const source = createReadStream(filename, { signal }), stream = source.pipe(createGunzip());
  // pipe() does not forward upstream read errors to its destination.
  source.on("error", error => stream.destroy(error));
  const reader = new TarReader(stream, signal), files = [], seen = new Set(), contents = new Map();
  let pax = null;
  try {
    for (;;) {
      const header = await reader.read(512);
      if (header.every(byte => byte === 0)) { if (pax !== null || !(await reader.read(512)).every(byte => byte === 0)) throw new Error("Invalid archive end marker."); await reader.finish(); break; }
      const checksum = tarNumber(header, 148, 8);
      if (header.reduce((sum, byte, index) => sum + (index >= 148 && index < 156 ? 32 : byte), 0) !== checksum) throw new Error("Archive header checksum mismatch.");
      const type = String.fromCharCode(header[156] || 48), size = tarNumber(header, 124, 12);
      if (type === "x") {
        if (pax !== null || size > 1024 * 1024) throw new Error("Unbounded or stacked PAX metadata.");
        pax = parsePax(await reader.read(size), !allowDirectories); await reader.consume(padding(size).length, () => {}); continue;
      }
      if (type !== "0" && !(allowDirectories && type === "5")) throw new Error("Product archive contains a nonregular entry.");
      const prefix = tarString(header, 345, 155), base = tarString(header, 0, 100);
      const name = safeArchivePath(pax ?? (prefix ? `${prefix}/${base}` : base), type === "5"); pax = null;
      if (seen.has(name)) throw new Error("Duplicate product archive path."); seen.add(name);
      if (type === "5") { if (size !== 0) throw new Error("Directory archive entry has a body."); continue; }
      const entry = { path: name, bytes: size };
      const retained = collect.includes(name);
      if (retained && size > 1024 * 1024) throw new Error("Product archive identity metadata exceeds its bound.");
      const pieces = [], hash = createHash("sha256");
      await onFileStart(entry);
      await reader.consume(size, async chunk => { hash.update(chunk); if (retained) pieces.push(chunk); await onFileChunk(entry, chunk); });
      await reader.consume(padding(size).length, () => {});
      entry.sha256 = hash.digest("hex"); files.push(entry);
      if (retained) contents.set(name, Buffer.concat(pieces, size));
      await onFileEnd(entry);
    }
  } finally { source.destroy(); stream.destroy(); }
  return { files, contents, treeSha256: productTreeSha256(files) };
}

function npmVersion(root) {
  if (!process.env.npm_execpath) throw new Error("Invoke product builds through npm run release:build for the pinned npm CLI.");
  return execFileSync(process.execPath, [process.env.npm_execpath, "--version"], { cwd: root, encoding: "utf8" }).trim();
}
async function fileProof(file, filename = path.basename(file)) {
  if (!lstatSync(file).isFile() || lstatSync(file).isSymbolicLink()) throw new Error("Product artifacts must be regular files.");
  const hash = createHash("sha256"); let bytes = 0;
  for await (const chunk of createReadStream(file)) { hash.update(chunk); bytes += chunk.length; }
  return { filename, bytes, sha256: hash.digest("hex") };
}

export async function buildProductRelease(root, tag, output, { webDir, builders = {}, pack = null, getNpmVersion = npmVersion } = {}) {
  root = realpathSync(root);
  const spec = productReleaseSpec(tag), config = readProductVersion(root), identity = readProductIdentity(root);
  if (identity.tag !== tag) throw new Error("Product build tag/version mismatch.");
  const toolchain = { node: process.versions.node, npm: getNpmVersion(root) };
  if (toolchain.node !== config.node || toolchain.npm !== config.npm) throw new Error("Product release toolchain differs from its pins.");
  if (!webDir) throw new Error("A fully verified web export is required.");
  identicalIdentity(json(path.join(webDir, "generated/product-release.json")), identity);
  const webVersion = json(path.join(webDir, "generated/version.json"));
  if (webVersion.sourceCommit !== identity.sourceCommit || webVersion.releaseVersion !== identity.version || webVersion.releaseTag !== identity.tag || webVersion.sourceFingerprint !== identity.sourceFingerprint) throw new Error("Web version document differs from the product identity.");
  // Provider materialization consumes the sealed build, never a new source build.
  writePrebuiltConfig({ root, webDir });
  const probes = createWebProbes({ webDir });
  identicalIdentity(probes.identity, identity);
  assertPrebuiltHosting(json(path.join(webDir, "edgeone.json")));
  if (lstatSync(path.resolve(output), { throwIfNoEntry: false })) throw new Error("Product release output already exists; never replace sealed artifacts.");
  output = canonicalNewPath(output);
  const relative = path.relative(root, output).split(path.sep).join("/");
  if (!relative || /^(?:\.git|library|classifications|packages|builder)(?:\/|$)/u.test(relative)) throw new Error("Product artifacts cannot be staged inside protected source directories.");
  const canonicalWeb = realpathSync(webDir);
  if (output === canonicalWeb || output.startsWith(canonicalWeb + path.sep)) throw new Error("Product output must be outside its web input.");
  mkdirSync(path.dirname(output), { recursive: true });
  output = path.join(realpathSync(path.dirname(output)), path.basename(output));
  const stage = mkdtempSync(`${output}.stage-`);
  try {
    const receipts = {};
    for (const [kind, source] of Object.entries(packages)) {
      const work = path.join(stage, `${kind}-build`);
      const receipt = await buildPackageArtifact(root, { kind, ...source, ...spec }, work, { identity, builders, pack, npmVersion: toolchain.npm });
      cpSync(path.join(work, receipt.filename), path.join(stage, receipt.filename));
      if (kind === "library") for (const name of ["library.sqlite", "library.sqlite.json"]) cpSync(path.join(work, name), path.join(stage, name));
      receipts[kind] = { name: receipt.name, version: receipt.version, tag: receipt.tag, sourceCommit: receipt.source_commit,
        filename: receipt.filename, bytes: receipt.bytes, sha256: receipt.sha256, integrity: receipt.integrity };
      rmSync(work, { recursive: true });
    }
    const webFilename = `pcr-web-${spec.version}.tar.gz`;
    const tree = await writeProductWebArchive(webDir, path.join(stage, webFilename));
    const web = { ...(await fileProof(path.join(stage, webFilename))), ...tree, origin: config.web.origin, probes };
    const names = [receipts.tool.filename, receipts.library.filename, "library.sqlite", "library.sqlite.json", webFilename].sort();
    const artifacts = await Promise.all(names.map(name => fileProof(path.join(stage, name))));
    const manifest = { schema: 1, kind: "pcr-product-release", identity, toolchain, packages: receipts, web, artifacts };
    writeJson(path.join(stage, "release.json"), manifest);
    const proofs = [...artifacts, await fileProof(path.join(stage, "release.json"))].sort((a, b) => a.filename < b.filename ? -1 : 1);
    writeFileSync(path.join(stage, "SHA256SUMS"), proofs.map(proof => `${proof.sha256}  ${proof.filename}\n`).join(""));
    await verifyProductArtifacts(stage, { expectedIdentity: identity });
    await verifyProductWebTree(webDir, manifest);
    identicalIdentity(readProductIdentity(root), identity);
    renameSync(stage, output);
    return manifest;
  } catch (error) { rmSync(stage, { recursive: true, force: true }); throw error; }
}

export function validateProductManifest(manifest, { identity = null, toolchain = null } = {}) {
  if (manifest.schema !== 1 || manifest.kind !== "pcr-product-release") throw new Error("Unknown product manifest.");
  assertProductIdentity(manifest.identity);
  productReleaseSpec(manifest.identity.tag);
  if (identity) identicalIdentity(manifest.identity, identity);
  if (!["node", "npm"].every(key => /^[0-9]+\.[0-9]+\.[0-9]+$/u.test(manifest.toolchain?.[key] ?? ""))) throw new Error("Invalid product toolchain pins.");
  if (toolchain && ["node", "npm"].some(key => manifest.toolchain[key] !== toolchain[key])) throw new Error("Product manifest toolchain differs from its source pins.");
  const required = [manifest.packages?.tool?.filename, manifest.packages?.library?.filename, "library.sqlite", "library.sqlite.json", manifest.web?.filename].sort();
  if (!required.every(filenameSafe) || new Set(required).size !== 5 || !Array.isArray(manifest.artifacts)
    || JSON.stringify(manifest.artifacts.map(artifact => artifact.filename).sort()) !== JSON.stringify(required)) throw new Error("Invalid product artifact file set.");
  const validProof = proof => filenameSafe(proof?.filename) && Number.isSafeInteger(proof.bytes) && proof.bytes > 0 && /^[a-f0-9]{64}$/u.test(proof.sha256 ?? "");
  if (!manifest.artifacts.every(validProof) || !validProof(manifest.web) || !/^sha256:[a-f0-9]{64}$/u.test(manifest.web.treeSha256 ?? "")
    || !Number.isSafeInteger(manifest.web.files) || manifest.web.files < 1
    || !Number.isSafeInteger(manifest.web.uncompressedBytes) || manifest.web.uncompressedBytes < 1
    || manifest.web.origin !== "https://pcr.tiangong.earth") throw new Error("Invalid product artifact proof.");
  identicalIdentity(manifest.web.probes?.identity, manifest.identity);
  const counts = manifest.web.probes.counts;
  if (!counts || ["pcrs", "pages", "languages", "sourceBytes"].some(key => !Object.hasOwn(counts, key))
    || Object.values(counts).some(value => !Number.isSafeInteger(value) || value < 0)) throw new Error("Invalid sealed web counts.");
  const validProbe = (probe, expected) => probe?.path === expected && /^sha256:[a-f0-9]{64}$/u.test(probe.sha256 ?? "")
    && Number.isSafeInteger(probe.bytes) && probe.bytes > 0 && probe.bytes < 25_000_000;
  if (!Array.isArray(manifest.web.probes.routes) || manifest.web.probes.routes.length !== 2
    || !manifest.web.probes.routes.every((probe, index) => validProbe(probe, ["/zh/docs/pcr/", "/en/docs/pcr/"][index]))
    || !validProbe(manifest.web.probes.rawDownload, "/generated/raw/classifications/indexes/cpc-3.0-coverage.json")) throw new Error("Invalid sealed web probes.");
  for (const [kind, source] of Object.entries(packages)) {
    const receipt = manifest.packages[kind], proof = manifest.artifacts.find(item => item.filename === receipt.filename);
    const expectedName = `${source.name}-${manifest.identity.version}.tgz`.replace(/^@/u, "").replaceAll("/", "-");
    if (!validProof(receipt) || receipt.name !== source.name || receipt.version !== manifest.identity.version || receipt.tag !== manifest.identity.tag
      || receipt.sourceCommit !== manifest.identity.sourceCommit || receipt.filename !== expectedName || proof.bytes !== receipt.bytes || proof.sha256 !== receipt.sha256
      || !/^sha512-[A-Za-z0-9+/]{86}==$/u.test(receipt.integrity ?? "")) throw new Error("Package artifact identity differs from product manifest.");
  }
  const webProof = manifest.artifacts.find(item => item.filename === manifest.web.filename);
  if (manifest.web.filename !== `pcr-web-${manifest.identity.version}.tar.gz` || webProof.bytes !== manifest.web.bytes || webProof.sha256 !== manifest.web.sha256) throw new Error("Web artifact proof differs.");
  return manifest;
}

function checkWebMetadata(contents, identity, probes) {
  identicalIdentity(JSON.parse(contents.get("generated/product-release.json")?.toString("utf8") ?? "null"), identity);
  const version = JSON.parse(contents.get("generated/version.json")?.toString("utf8") ?? "null");
  if (version?.sourceCommit !== identity.sourceCommit || version.releaseVersion !== identity.version || version.releaseTag !== identity.tag || version.sourceFingerprint !== identity.sourceFingerprint) throw new Error("Archived web version differs.");
  if (!sameJson(version.counts, probes.counts)) throw new Error("Archived web counts differ from probes.");
  const hosting = JSON.parse(contents.get("edgeone.json")?.toString("utf8") ?? "null");
  assertPrebuiltHosting(hosting);
}

export async function verifyProductWebTree(webDir, manifest) {
  validateProductManifest(manifest);
  const tree = regularTree(webDir), contents = new Map();
  for (const file of tree.files) {
    const proof = await fileProof(path.join(tree.root, file.path)); file.sha256 = proof.sha256;
    if (["generated/product-release.json", "generated/version.json", "edgeone.json"].includes(file.path)) {
      if (file.bytes > 1024 * 1024) throw new Error("Product identity metadata exceeds its bound.");
      contents.set(file.path, readFileSync(path.join(tree.root, file.path)));
    }
  }
  if (tree.files.length !== manifest.web.files || tree.files.reduce((bytes, file) => bytes + file.bytes, 0) !== manifest.web.uncompressedBytes
    || productTreeSha256(tree.files) !== manifest.web.treeSha256) throw new Error("Web materialized tree differs from its sealed manifest.");
  checkWebMetadata(contents, manifest.identity, manifest.web.probes);
  if (!sameJson(createWebProbes({ webDir }), manifest.web.probes)) throw new Error("Materialized web probes differ from the sealed release.");
  return { files: tree.files.length, uncompressedBytes: manifest.web.uncompressedBytes, treeSha256: manifest.web.treeSha256 };
}

export async function verifyProductArtifacts(directory, { expectedIdentity = null } = {}) {
  const manifest = validateProductManifest(json(path.join(directory, "release.json")), { identity: expectedIdentity });
  const proofs = [];
  for (const artifact of manifest.artifacts) {
    const actual = await fileProof(path.join(directory, artifact.filename));
    if (actual.bytes !== artifact.bytes || actual.sha256 !== artifact.sha256) throw new Error(`Product artifact checksum differs: ${artifact.filename}`);
    proofs.push(actual);
  }
  proofs.push(await fileProof(path.join(directory, "release.json")));
  const checksums = proofs.sort((a, b) => a.filename < b.filename ? -1 : 1).map(proof => `${proof.sha256}  ${proof.filename}\n`).join("");
  if (readFileSync(path.join(directory, "SHA256SUMS"), "utf8") !== checksums) throw new Error("Product checksum manifest differs.");
  for (const [kind, source] of Object.entries(packages)) {
    const receipt = manifest.packages[kind];
    if (receipt.name !== source.name || receipt.version !== manifest.identity.version || receipt.tag !== manifest.identity.tag || receipt.sourceCommit !== manifest.identity.sourceCommit) throw new Error("Package artifact identity differs from product manifest.");
    const proof = proofs.find(item => item.filename === receipt.filename);
    if (proof.bytes !== receipt.bytes || proof.sha256 !== receipt.sha256) throw new Error("Package proof differs from artifact manifest.");
    const digest = createHash("sha512"); for await (const chunk of createReadStream(path.join(directory, receipt.filename))) digest.update(chunk);
    if (`sha512-${digest.digest("base64")}` !== receipt.integrity) throw new Error("Package npm integrity differs.");
    const archive = await readProductArchive(path.join(directory, receipt.filename), { allowDirectories: true, collect: ["package/product-release.json", "package/package.json", "package/library.sqlite.json"] });
    for (const entry of archive.files) if (!entry.path.startsWith("package/")) throw new Error("Npm archive contains a non-package file.");
    identicalIdentity(JSON.parse(archive.contents.get("package/product-release.json")?.toString("utf8") ?? "null"), manifest.identity);
    const packaged = JSON.parse(archive.contents.get("package/package.json")?.toString("utf8") ?? "null");
    if (packaged?.name !== source.name || packaged.version !== manifest.identity.version || packaged.gitHead !== manifest.identity.sourceCommit) throw new Error("Packed npm metadata differs from product identity.");
    if (kind === "library") for (const name of ["library.sqlite", "library.sqlite.json"]) {
      const archived = archive.files.find(file => file.path === `package/${name}`), separate = proofs.find(proof => proof.filename === name);
      if (!archived || archived.bytes !== separate.bytes || archived.sha256 !== separate.sha256) throw new Error("Portable SQLite assets differ from the npm archive.");
    }
  }
  const webProof = proofs.find(proof => proof.filename === manifest.web.filename);
  if (webProof.bytes !== manifest.web.bytes || webProof.sha256 !== manifest.web.sha256 || manifest.web.origin !== "https://pcr.tiangong.earth") throw new Error("Web artifact proof differs.");
  const web = await readProductArchive(path.join(directory, manifest.web.filename), { collect: ["generated/product-release.json", "generated/version.json", "edgeone.json"] });
  if (web.treeSha256 !== manifest.web.treeSha256 || web.files.length !== manifest.web.files || web.files.reduce((bytes, file) => bytes + file.bytes, 0) !== manifest.web.uncompressedBytes) throw new Error("Web archive tree differs from product manifest.");
  checkWebMetadata(web.contents, manifest.identity, manifest.web.probes);
  for (const probe of [...manifest.web.probes.routes, manifest.web.probes.rawDownload]) {
    const relative = probe.path.endsWith("/") ? `${probe.path.slice(1)}index.html` : probe.path.slice(1);
    const file = web.files.find(entry => entry.path === relative);
    if (!file || file.bytes !== probe.bytes || `sha256:${file.sha256}` !== probe.sha256) throw new Error("Archived web probe differs from the release manifest.");
  }
  const library = json(path.join(directory, "library.sqlite.json"));
  if (library.snapshot?.source_commit !== manifest.identity.sourceCommit || library.snapshot?.content_version !== manifest.identity.version) throw new Error("SQLite snapshot source/version differs.");
  if ((await fileProof(path.join(directory, "library.sqlite"))).sha256 !== library.sha256?.replace(/^sha256:/u, "")) throw new Error("SQLite file differs from its sidecar.");
  return manifest;
}

function emit(value) {
  console.log(JSON.stringify(value));
  if (process.env.GITHUB_OUTPUT) for (const [key, item] of Object.entries(value)) appendFileSync(process.env.GITHUB_OUTPUT, `${key}=${typeof item === "object" ? JSON.stringify(item) : item}\n`);
}
async function main() {
  const [command, ...args] = process.argv.slice(2), root = process.cwd();
  if (command === "detect" && !args.length) { const release = detectProductRelease(root, process.env.BASE_REF, process.env.HEAD_REF); emit({ any_changed: release !== null, release }); }
  else if (command === "context" && args.length === 1) emit(productReleaseContext(root, args[0], process.env));
  else if (command === "build" && args.length === 3) emit(await buildProductRelease(root, args[0], args[1], { webDir: args[2] }));
  else if (command === "verify" && args.length === 1) emit(await verifyProductArtifacts(args[0]));
  else if (command === "tag" && args.length === 1) emit(await bootstrapProductTag(root, args[0], process.env));
  else if (command === "tag" && !args.length) {
    assertIdentity(process.env);
    const head = process.env.HEAD_REF;
    if (process.env.GITHUB_EVENT_NAME !== "push" || process.env.GITHUB_REF !== "refs/heads/main" || process.env.GITHUB_SHA !== head || process.env.GITHUB_WORKFLOW_SHA !== head || productGit(root, "rev-parse", "HEAD") !== head) throw new Error("Product tag automation requires the exact main push checkout.");
    productGit(root, "merge-base", "--is-ancestor", head, "refs/remotes/origin/main");
    const release = detectProductRelease(root, process.env.BASE_REF, head);
    if (release) await tagAndDispatchProduct(release, head, githubRequest);
  }
  else throw new Error("Usage: product-release.mjs detect | tag [explicit-v-tag] | context <tag> | build <tag> <new-output-directory> <verified-web-directory> | verify <artifact-directory>");
}
if (process.argv[1] && import.meta.url === pathToFileURL(path.resolve(process.argv[1])).href) main().catch(error => { console.error(error.message); process.exitCode = 1; });
