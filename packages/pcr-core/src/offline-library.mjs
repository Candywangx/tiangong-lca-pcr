import { createHash } from "node:crypto";
import { createRequire } from "node:module";
import { closeSync, openSync, readSync, readFileSync, statSync } from "node:fs";
import path from "node:path";
import { inflateRawSync } from "node:zlib";
import { parseYaml } from "./yaml-lite.mjs";
import { expectedPcrArtifactHashes } from "./languages.mjs";
import { PcrClassificationCoverageNotFoundError } from "./classification-coverage.mjs";

export const LIBRARY_FORMAT_VERSION = 1;
export const sha256 = (bytes) => `sha256:${createHash("sha256").update(bytes).digest("hex")}`;
export function libraryError(code, message) {
  return Object.assign(new Error(message), { code });
}
export function sqliteDatabase() {
  const [major, minor] = process.versions.node.split(".").map(Number);
  if (major < 24 || (major === 24 && minor < 19)) {
    throw libraryError("PCR_LIBRARY_RUNTIME_UNSUPPORTED", "Offline libraries require Node.js 24.19 or newer.");
  }
  return createRequire(import.meta.url)("node:sqlite").DatabaseSync;
}
export function hashFile(filename) {
  const hash = createHash("sha256");
  const fd = openSync(filename, "r");
  const buffer = Buffer.alloc(1024 * 1024);
  try {
    let count;
    while ((count = readSync(fd, buffer, 0, buffer.length, null))) hash.update(buffer.subarray(0, count));
    return `sha256:${hash.digest("hex")}`;
  } finally { closeSync(fd); }
}
export function metadataDigest(db, table) {
  if (!["records", "aliases", "coverage", "files"].includes(table)) throw new Error("Unknown snapshot table.");
  const hash = createHash("sha256");
  const columns = table === "files" ? "key, size, sha256" : "key, value, sha256";
  for (const row of db.prepare(`SELECT ${columns} FROM ${table} ORDER BY key`).iterate()) {
    hash.update(JSON.stringify(row)); hash.update("\n");
  }
  return `sha256:${hash.digest("hex")}`;
}

/** Read-only adapter; all original content remains compressed until selected. */
export class OfflineLibrary {
  constructor(filename, { expectedSha256 = null, verify = false, onArtifactRead = null } = {}) {
    this.filename = path.resolve(filename);
    this.root = path.dirname(this.filename);
    this.onArtifactRead = onArtifactRead;
    this.languages = ["en-US"];
    try {
      this.manifest = JSON.parse(readFileSync(`${this.filename}.json`, "utf8"));
      if (this.manifest.format_version !== LIBRARY_FORMAT_VERSION) {
        throw libraryError("PCR_LIBRARY_FORMAT_UNSUPPORTED", `Unsupported library format ${this.manifest.format_version}; supported: ${LIBRARY_FORMAT_VERSION}.`);
      }
      if (JSON.stringify(this.manifest.snapshot?.available_languages) !== JSON.stringify(this.languages)) throw new Error("Unsupported library language policy; expected English only.");
      if (this.manifest.kind !== "tiangong-pcr-library" || !/^sha256:[a-f0-9]{64}$/u.test(this.manifest.sha256 ?? "")) throw new Error("Invalid library manifest.");
      if (statSync(this.filename).size !== this.manifest.bytes) throw new Error("Library byte length differs from manifest.");
      if (expectedSha256 !== null && !/^sha256:[a-f0-9]{64}$/u.test(expectedSha256)) throw new Error("Expected SHA-256 must use sha256:<64 lowercase hex digits>.");
      if (verify || expectedSha256 !== null) {
        const digest = hashFile(this.filename);
        if (digest !== this.manifest.sha256 || (expectedSha256 !== null && digest !== expectedSha256)) throw new Error("Library SHA-256 mismatch.");
      }
      const DatabaseSync = sqliteDatabase();
      this.db = new DatabaseSync(this.filename, { readOnly: true, allowExtension: false, defensive: true });
      this.db.exec("PRAGMA query_only = ON; PRAGMA trusted_schema = OFF; BEGIN;");
      if (this.db.prepare("PRAGMA user_version").get().user_version !== LIBRARY_FORMAT_VERSION) throw libraryError("PCR_LIBRARY_FORMAT_UNSUPPORTED", "SQLite format version does not match the reader.");
      const metadata = JSON.parse(this.db.prepare("SELECT value FROM metadata WHERE key = 'snapshot'").get()?.value ?? "null");
      if (JSON.stringify(metadata) !== JSON.stringify(this.manifest.snapshot)) throw new Error("Snapshot identity differs from manifest.");
      for (const table of ["records", "aliases", "coverage", "files"]) {
        if (metadataDigest(this.db, table) !== this.manifest.index_sha256?.[table]) throw new Error(`Library ${table} index checksum mismatch.`);
      }
      if (verify && this.db.prepare("PRAGMA integrity_check").get().integrity_check !== "ok") throw new Error("SQLite integrity check failed.");
    } catch (error) {
      this.close();
      if (error.code?.startsWith("PCR_LIBRARY_")) throw error;
      throw libraryError("PCR_LIBRARY_INVALID", `Cannot open offline library ${this.filename}: ${error.message}`);
    }
  }
  close() { this.db?.close(); this.db = null; }
  row(table, key) {
    const row = this.db.prepare(`SELECT value, sha256 FROM ${table} WHERE key = ?`).get(key);
    if (!row) return null;
    if (sha256(row.value) !== row.sha256) throw libraryError("PCR_LIBRARY_INVALID", `Invalid ${table} row: ${key}`);
    return JSON.parse(row.value);
  }
  listPcrs(scope) {
    const where = scope === "all" ? "" : scope === "material" ? " WHERE kind = 'methodology'" : " WHERE kind = 'legacy_scaffold_reference'";
    return this.db.prepare(`SELECT value FROM records${where} ORDER BY position`).all().map((row) => JSON.parse(row.value));
  }
  entry(id) {
    const record = this.row("records", String(id));
    return record ? { id: record.id, path: record.path, manifestPath: path.join(this.root, record.path, "manifest.yaml") } : null;
  }
  findAlias(id) { return this.row("aliases", String(id)); }
  readFile(key) {
    const row = this.db.prepare("SELECT data, size, sha256 FROM files WHERE key = ?").get(key);
    if (!row) throw libraryError("PCR_LIBRARY_ARTIFACT_MISSING", `Missing library artifact: ${key}`);
    try {
      const bytes = inflateRawSync(row.data, { maxOutputLength: Math.max(1, row.size) });
      if (bytes.length !== row.size || sha256(bytes) !== row.sha256) throw new Error("checksum mismatch");
      this.onArtifactRead?.(key);
      return bytes;
    } catch (error) { throw libraryError("PCR_LIBRARY_ARTIFACT_INVALID", `Invalid library artifact ${key}: ${error.message}`); }
  }
  snapshotFiles(entry) {
    const manifestBytes = this.readFile(`${entry.path}/manifest.yaml`);
    const manifest = parseYaml(manifestBytes.toString("utf8"));
    if (manifest.id !== entry.id) throw libraryError("PCR_LIBRARY_INVALID", "PCR manifest identity mismatch.");
    const artifacts = Object.fromEntries(["pcr.en-US.md", "structured.yaml"].map((name) => [name, { bytes: this.readFile(`${entry.path}/${name}`) }]));
    for (const [name, expected] of Object.entries(manifest.release_artifacts ? expectedPcrArtifactHashes(manifest) : {})) {
      if (!Object.hasOwn(artifacts, name)) continue;
      if (manifest.release_artifacts && sha256(artifacts[name]?.bytes ?? Buffer.alloc(0)) !== expected) throw libraryError("PCR_LIBRARY_ARTIFACT_INVALID", `Release artifact hash mismatch: ${entry.path}/${name}`);
    }
    return { manifest, manifestBytes, artifacts };
  }
  coverageSnapshot(system, version) {
    const key = `${String(system).toLowerCase()}:${version}`;
    const snapshot = this.row("coverage", key);
    if (!snapshot) throw new PcrClassificationCoverageNotFoundError({ system, version, relativePath: `classifications/indexes/${system}-${version}-coverage.json` });
    return snapshot;
  }
}
