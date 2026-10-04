import { createHash, type BinaryLike } from "node:crypto";
import { createRequire } from "node:module";
import { closeSync, openSync, readSync, readFileSync, statSync } from "node:fs";
import type { DatabaseSync, SQLOutputValue } from "node:sqlite";
import path from "node:path";
import { inflateRawSync } from "node:zlib";
import { parseYaml } from "./yaml-lite.ts";
import { expectedPcrArtifactHashes } from "./languages.ts";
import { PcrClassificationCoverageNotFoundError } from "./classification-coverage.ts";
import { isPcrIdAlias } from "./pcr-id-aliases.ts";
import { assertCoreContract } from "./contracts.ts";
import { isUnknownRecord, errorCode, errorMessage } from "./types.ts";
import type { CatalogEntry, CapturedPcrSnapshot, CoverageSnapshot, OfflineManifest, OfflineSnapshot, PcrCatalogScope, PcrIdAlias, PcrRecord, PcrSource, Readiness, UnknownRecord } from "./types.ts";

export const LIBRARY_FORMAT_VERSION = 1;
const UTF8_DECODER = new TextDecoder("utf-8", { fatal: true, ignoreBOM: true });
export const sha256 = (bytes: BinaryLike): string => `sha256:${createHash("sha256").update(bytes).digest("hex")}`;
export function libraryError(code: string, message: string): Error & { code: string } {
  return Object.assign(new Error(message), { code });
}

/** The provider can import this module without eagerly loading SQLite. */
export function sqliteDatabase(): typeof DatabaseSync {
  const [major = 0, minor = 0] = process.versions.node.split(".").map(Number);
  if (major < 24 || (major === 24 && minor < 19)) {
    throw libraryError("PCR_LIBRARY_RUNTIME_UNSUPPORTED", "Offline libraries require Node.js 24.19 or newer.");
  }
  const sqlite: unknown = createRequire(import.meta.url)("node:sqlite");
  if (!isSqliteModule(sqlite)) throw libraryError("PCR_LIBRARY_RUNTIME_UNSUPPORTED", "Node SQLite DatabaseSync is unavailable.");
  return sqlite.DatabaseSync;
}
function isSqliteModule(value: unknown): value is { DatabaseSync: typeof DatabaseSync } {
  if (!isUnknownRecord(value) || typeof value.DatabaseSync !== "function") return false;
  const prototype: unknown = value.DatabaseSync.prototype;
  return isUnknownRecord(prototype) && ["prepare", "exec", "close"].every(name => typeof prototype[name] === "function");
}
export function hashFile(filename: string): string {
  const hash = createHash("sha256");
  const fd = openSync(filename, "r");
  const buffer = Buffer.alloc(1024 * 1024);
  try {
    let count: number;
    while ((count = readSync(fd, buffer, 0, buffer.length, null))) hash.update(buffer.subarray(0, count));
    return `sha256:${hash.digest("hex")}`;
  } finally { closeSync(fd); }
}
export type SnapshotTable = "records" | "aliases" | "coverage" | "files";
export function metadataDigest(db: DatabaseSync, table: SnapshotTable): string {
  if (!["records", "aliases", "coverage", "files"].includes(table)) throw new Error("Unknown snapshot table.");
  const hash = createHash("sha256");
  const columns = table === "files" ? "key, size, sha256" : "key, value, sha256";
  for (const row of db.prepare(`SELECT ${columns} FROM ${table} ORDER BY key`).iterate()) {
    // Preserve native SQLite column order: it is part of the existing digest.
    hash.update(JSON.stringify(row)); hash.update("\n");
  }
  return `sha256:${hash.digest("hex")}`;
}
function object(value: unknown, label: string): UnknownRecord {
  if (!isUnknownRecord(value)) throw new Error(`Invalid ${label}.`);
  return value;
}
function string(value: unknown, label: string): string {
  if (typeof value !== "string") throw new Error(`Invalid ${label}.`);
  return value;
}
function number(value: unknown, label: string): number {
  if (typeof value !== "number" || !Number.isSafeInteger(value) || value < 0) throw new Error(`Invalid ${label}.`);
  return value;
}
function stringArray(value: unknown, label: string): string[] {
  if (!Array.isArray(value) || !value.every((entry: unknown) => typeof entry === "string")) throw new Error(`Invalid ${label}.`);
  return value as string[];
}
function stringRecord(value: unknown, label: string): Record<string, string> {
  const fields = object(value, label);
  for (const field of Object.values(fields)) string(field, label);
  return fields as Record<string, string>;
}
function titleRecord(value: unknown): Record<string, string | null> {
  const fields = object(value, "PCR titles");
  for (const field of Object.values(fields)) if (field !== null) string(field, "PCR title");
  return fields as Record<string, string | null>;
}
function json(text: string): unknown { return JSON.parse(text) as unknown; }
function pcrRecord(value: unknown): PcrRecord {
  const record = object(value, "PCR record");
  const languages = object(record.languages, "record languages");
  const canonical = languages.canonical;
  const available = languages.available;
  if (canonical !== undefined) string(canonical, "canonical language");
  if (available !== undefined) stringArray(available, "available languages");
  const version = record.version;
  const maturity = record.content_maturity;
  if (version !== null) string(version, "PCR version");
  if (maturity !== null) string(maturity, "PCR content maturity");
  const kind = record.record_kind;
  if (kind !== "methodology" && kind !== "legacy_scaffold_reference" && kind !== "invalid_lifecycle_state") throw new Error("Invalid PCR record kind.");
  if (!Array.isArray(record.classification_refs) || !record.classification_refs.every(isUnknownRecord)) throw new Error("Invalid PCR classification refs.");
  assertCoreContract("readiness.schema.json", record.readiness);
  return {
    ...record,
    id: string(record.id, "PCR id"), path: string(record.path, "PCR path"),
    title: titleRecord(record.title), status: string(record.status, "PCR status"),
    version: version === null ? null : string(version, "PCR version"),
    content_maturity: maturity === null ? null : string(maturity, "PCR content maturity"),
    languages: {
      ...languages,
      ...(canonical === undefined ? {} : { canonical: string(canonical, "canonical language") }),
      ...(available === undefined ? {} : { available: stringArray(available, "available languages") }),
    },
    translation_status: stringRecord(record.translation_status, "translation status"),
    classification_refs: record.classification_refs, record_kind: kind,
    // Successful existing schema and semantic validation is the narrowing proof.
    readiness: record.readiness as Readiness,
  };
}
function snapshot(value: unknown): OfflineSnapshot {
  const fields = object(value, "snapshot metadata");
  return {
    ...fields,
    available_languages: stringArray(fields.available_languages, "snapshot languages"),
    content_version: string(fields.content_version, "content version"),
    source_commit: string(fields.source_commit, "source commit"),
    source_sha256: string(fields.source_sha256, "source fingerprint"),
    records: number(fields.records, "record count"), material_records: number(fields.material_records, "material record count"),
    aliases: number(fields.aliases, "alias count"), original_bytes: number(fields.original_bytes, "original byte count"),
  };
}
function manifest(value: UnknownRecord): OfflineManifest {
  if (value.kind !== "tiangong-pcr-library" || value.format_version !== 1) throw new Error("Invalid library manifest.");
  const indexes = object(value.index_sha256, "index hashes");
  // Keep original key order in sidecar/snapshot objects for historical equality.
  const metadata = snapshot(value.snapshot);
  const hashes: Record<SnapshotTable, string> = {
    records: string(indexes.records, "records index hash"), aliases: string(indexes.aliases, "aliases index hash"),
    coverage: string(indexes.coverage, "coverage index hash"), files: string(indexes.files, "files index hash"),
  };
  return { ...value, kind: value.kind, format_version: 1, snapshot: metadata,
    bytes: number(value.bytes, "library byte length"), sha256: string(value.sha256, "library checksum"), index_sha256: hashes };
}
function rowValue(row: Record<string, SQLOutputValue> | undefined, name: string): unknown { return row?.[name]; }

export interface OfflineLibraryOptions { expectedSha256?: string | null; verify?: boolean; onArtifactRead?: ((key: string) => void) | null }
/** Read-only adapter; all original content remains compressed until selected. */
export class OfflineLibrary implements PcrSource {
  readonly filename: string;
  readonly root: string;
  readonly onArtifactRead: ((key: string) => void) | null;
  readonly languages = ["en-US"];
  readonly manifest: OfflineManifest;
  db: DatabaseSync | null = null;

  constructor(filename: string, { expectedSha256 = null, verify = false, onArtifactRead = null }: OfflineLibraryOptions = {}) {
    this.filename = path.resolve(filename);
    this.root = path.dirname(this.filename);
    this.onArtifactRead = onArtifactRead;
    try {
      const decoded = object(json(UTF8_DECODER.decode(readFileSync(`${this.filename}.json`))), "library manifest");
      if (decoded.format_version !== LIBRARY_FORMAT_VERSION) {
        throw libraryError("PCR_LIBRARY_FORMAT_UNSUPPORTED", `Unsupported library format ${String(decoded.format_version)}; supported: ${LIBRARY_FORMAT_VERSION}.`);
      }
      if (JSON.stringify(isUnknownRecord(decoded.snapshot) ? decoded.snapshot.available_languages : undefined) !== JSON.stringify(this.languages)) throw new Error("Unsupported library language policy; expected English only.");
      if (decoded.kind !== "tiangong-pcr-library" || !/^sha256:[a-f0-9]{64}$/u.test(String(decoded.sha256 ?? ""))) throw new Error("Invalid library manifest.");
      this.manifest = manifest(decoded);
      if (statSync(this.filename).size !== this.manifest.bytes) throw new Error("Library byte length differs from manifest.");
      if (expectedSha256 !== null && !/^sha256:[a-f0-9]{64}$/u.test(expectedSha256)) throw new Error("Expected SHA-256 must use sha256:<64 lowercase hex digits>.");
      if (verify || expectedSha256 !== null) {
        const digest = hashFile(this.filename);
        if (digest !== this.manifest.sha256 || (expectedSha256 !== null && digest !== expectedSha256)) throw new Error("Library SHA-256 mismatch.");
      }
      const DatabaseSync = sqliteDatabase();
      this.db = new DatabaseSync(this.filename, { readOnly: true, allowExtension: false, defensive: true });
      this.db.exec("PRAGMA query_only = ON; PRAGMA trusted_schema = OFF; BEGIN;");
      if (rowValue(this.db.prepare("PRAGMA user_version").get(), "user_version") !== LIBRARY_FORMAT_VERSION) throw libraryError("PCR_LIBRARY_FORMAT_UNSUPPORTED", "SQLite format version does not match the reader.");
      const metadata = json(string(rowValue(this.db.prepare("SELECT value FROM metadata WHERE key = 'snapshot'").get(), "value") ?? "null", "snapshot JSON"));
      if (JSON.stringify(metadata) !== JSON.stringify(this.manifest.snapshot)) throw new Error("Snapshot identity differs from manifest.");
      for (const table of ["records", "aliases", "coverage", "files"] as const) {
        if (metadataDigest(this.db, table) !== this.manifest.index_sha256[table]) throw new Error(`Library ${table} index checksum mismatch.`);
      }
      if (verify && rowValue(this.db.prepare("PRAGMA integrity_check").get(), "integrity_check") !== "ok") throw new Error("SQLite integrity check failed.");
    } catch (error: unknown) {
      this.close();
      if (errorCode(error).startsWith("PCR_LIBRARY_")) throw error;
      throw libraryError("PCR_LIBRARY_INVALID", `Cannot open offline library ${this.filename}: ${errorMessage(error)}`);
    }
  }
  close(): void { this.db?.close(); this.db = null; }
  private database(): DatabaseSync {
    if (this.db === null) throw libraryError("PCR_LIBRARY_INVALID", "Offline library is closed.");
    return this.db;
  }
  row(table: Exclude<SnapshotTable, "files">, key: string): unknown {
    const row = this.database().prepare(`SELECT value, sha256 FROM ${table} WHERE key = ?`).get(key);
    if (!row) return null;
    const value = string(row.value, "snapshot JSON row");
    if (sha256(value) !== row.sha256) throw libraryError("PCR_LIBRARY_INVALID", `Invalid ${table} row: ${key}`);
    return json(value);
  }
  listPcrs(scope: PcrCatalogScope): PcrRecord[] {
    const where = scope === "all" ? "" : scope === "material" ? " WHERE kind = 'methodology'" : " WHERE kind = 'legacy_scaffold_reference'";
    return this.database().prepare(`SELECT value FROM records${where} ORDER BY position`).all().map(row => pcrRecord(json(string(row.value, "PCR record JSON"))));
  }
  entry(id: unknown): CatalogEntry | null {
    const value = this.row("records", String(id));
    if (value === null) return null;
    const record = object(value, "PCR record");
    const relative = string(record.path, "PCR path");
    return { id: string(record.id, "PCR id"), path: relative, manifestPath: path.join(this.root, relative, "manifest.yaml") };
  }
  findAlias(id: unknown): PcrIdAlias | null {
    const value = this.row("aliases", String(id));
    if (value === null) return null;
    if (!isPcrIdAlias(value)) throw libraryError("PCR_LIBRARY_INVALID", `Invalid aliases row: ${String(id)}`);
    return value;
  }
  readFile(key: string): Buffer {
    const row = this.database().prepare("SELECT data, size, sha256 FROM files WHERE key = ?").get(key);
    if (!row) throw libraryError("PCR_LIBRARY_ARTIFACT_MISSING", `Missing library artifact: ${key}`);
    try {
      if (!(row.data instanceof Uint8Array)) throw new Error("invalid compressed blob");
      const size = number(row.size, "artifact size");
      const bytes = inflateRawSync(row.data, { maxOutputLength: Math.max(1, size) });
      if (bytes.length !== size || sha256(bytes) !== row.sha256) throw new Error("checksum mismatch");
      this.onArtifactRead?.(key);
      return bytes;
    } catch (error: unknown) { throw libraryError("PCR_LIBRARY_ARTIFACT_INVALID", `Invalid library artifact ${key}: ${errorMessage(error)}`); }
  }
  snapshotFiles(entry: CatalogEntry): CapturedPcrSnapshot {
    const manifestBytes = this.readFile(`${entry.path}/manifest.yaml`);
    let manifestText: string;
    try { manifestText = UTF8_DECODER.decode(manifestBytes); }
    catch { throw libraryError("PCR_LIBRARY_ARTIFACT_INVALID", `Invalid library artifact ${entry.path}/manifest.yaml: input is not valid UTF-8.`); }
    const manifest = object(parseYaml(manifestText), "PCR manifest");
    if (manifest.id !== entry.id) throw libraryError("PCR_LIBRARY_INVALID", "PCR manifest identity mismatch.");
    const artifacts: CapturedPcrSnapshot["artifacts"] = Object.fromEntries(["pcr.en-US.md", "structured.yaml"].map(name => [name, { bytes: this.readFile(`${entry.path}/${name}`) }]));
    for (const [name, expected] of Object.entries(manifest.release_artifacts ? expectedPcrArtifactHashes(manifest) : {})) {
      if (!Object.hasOwn(artifacts, name)) continue;
      if (manifest.release_artifacts && sha256(artifacts[name]?.bytes ?? Buffer.alloc(0)) !== expected) throw libraryError("PCR_LIBRARY_ARTIFACT_INVALID", `Release artifact hash mismatch: ${entry.path}/${name}`);
    }
    return { manifest, manifestBytes, artifacts };
  }
  coverageSnapshot(system: unknown, version: unknown): CoverageSnapshot {
    const key = `${String(system).toLowerCase()}:${String(version)}`;
    const value = this.row("coverage", key);
    if (value === null) throw new PcrClassificationCoverageNotFoundError({ system: String(system), version: String(version), relativePath: `classifications/indexes/${String(system)}-${String(version)}-coverage.json` });
    if (!isCoverageSnapshot(value)) throw libraryError("PCR_LIBRARY_INVALID", "Invalid coverage snapshot.");
    return value;
  }
}

function isCoverageSnapshot(value: unknown): value is CoverageSnapshot {
  if (!isUnknownRecord(value) || typeof value.relative_path !== "string" || typeof value.sha256 !== "string") return false;
  assertCoreContract("classification-coverage.schema.json", value.document);
  return true;
}
