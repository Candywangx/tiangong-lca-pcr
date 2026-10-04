import { createHash } from "node:crypto";
import { cpSync, existsSync, lstatSync, mkdirSync, mkdtempSync, readFileSync, readdirSync, realpathSync, renameSync, rmSync, statSync, writeFileSync } from "node:fs";
import path from "node:path";
import { pathToFileURL } from "node:url";
import { deflateRawSync } from "node:zlib";
import { execFileSync } from "node:child_process";
import { createPcrReadContext, withPcrReadContextSession, readPcrDistributionCatalog, readPcrDistributionSnapshot, readClassificationCoverageSnapshot, verifyDistributionCoverage } from "../../packages/pcr-core/src/index.ts";
import { pcrIdAliasValidationDependencies, readPcrIdAliases } from "../../packages/pcr-core/src/pcr-id-aliases.ts";
import { parseYaml } from "../../packages/pcr-core/src/yaml-lite.ts";
import { LIBRARY_FORMAT_VERSION, sqliteDatabase, sha256, hashFile, metadataDigest } from "../../packages/pcr-core/src/offline-library.ts";

import type { DatabaseSync } from "node:sqlite";
import { isUnknownRecord } from "../../packages/pcr-core/src/types.ts";
import type { OfflineManifest, OfflineSnapshot } from "../../packages/pcr-core/src/types.ts";
import type { SnapshotTable } from "../../packages/pcr-core/src/offline-library.ts";

export interface OfflineLibraryBuildOptions { root: string; output: string; version: string; sourceCommit?: string | null }
function strings(value: unknown, label: string): string[] {
  if (!Array.isArray(value) || !value.every((entry: unknown) => typeof entry === "string")) throw new Error(`Invalid ${label}.`);
  return value as string[];
}
function string(value: unknown, label: string): string {
  if (typeof value !== "string") throw new Error(`Invalid ${label}.`);
  return value;
}
function object(value: unknown, label: string): Record<string, unknown> {
  if (!isUnknownRecord(value)) throw new Error(`Invalid ${label}.`);
  return value;
}

export function buildOfflineLibrary({ root, output, version, sourceCommit = null }: OfflineLibraryBuildOptions): OfflineManifest {
  root = realpathSync(root); output = path.resolve(output);
  if (!/^\d+\.\d+\.\d+(?:-[a-zA-Z0-9.-]+)?$/u.test(version ?? "")) throw new Error("Supply an explicit content SemVer with --version.");
  if (existsSync(output)) throw new Error(`Output already exists; snapshots are immutable: ${output}`);
  sourceCommit ??= execFileSync("git", ["-C", root, "rev-parse", "HEAD"], { encoding: "utf8" }).trim();
  if (!/^[a-f0-9]{40}$/u.test(sourceCommit)) throw new Error("Source commit must be a full Git SHA.");
  mkdirSync(path.dirname(output), { recursive: true });
  output = path.join(realpathSync(path.dirname(output)), path.basename(output));
  const stage = mkdtempSync(`${output}.stage-`);
  const filename = path.join(stage, "library.sqlite");
  let db: DatabaseSync | null = null;
  try {
    const DatabaseSync = sqliteDatabase(); db = new DatabaseSync(filename);
    const database = db;
    db.exec(`PRAGMA page_size = 4096; PRAGMA journal_mode = DELETE; PRAGMA user_version = ${LIBRARY_FORMAT_VERSION};
      CREATE TABLE metadata(key TEXT PRIMARY KEY, value TEXT NOT NULL) STRICT;
      CREATE TABLE records(key TEXT PRIMARY KEY, kind TEXT NOT NULL, position INTEGER NOT NULL, value TEXT NOT NULL, sha256 TEXT NOT NULL) STRICT;
      CREATE INDEX records_kind_position ON records(kind, position);
      CREATE TABLE aliases(key TEXT PRIMARY KEY, value TEXT NOT NULL, sha256 TEXT NOT NULL) STRICT;
      CREATE TABLE coverage(key TEXT PRIMARY KEY, value TEXT NOT NULL, sha256 TEXT NOT NULL) STRICT;
      CREATE TABLE files(key TEXT PRIMARY KEY, size INTEGER NOT NULL, sha256 TEXT NOT NULL, data BLOB NOT NULL) STRICT;
      BEGIN;`);
    const inputs = new Map<string, string>(); let originalBytes = 0;
    const putFile = (key: string, supplied: Buffer | null = null): void => {
      if (inputs.has(key)) return;
      const target = path.resolve(root, key);
      if (path.relative(root, target).startsWith("..") || path.isAbsolute(key) || key.includes("\\")) throw new Error(`Invalid source path: ${key}`);
      let current = root;
      for (const segment of key.split("/")) { current = path.join(current, segment); if (lstatSync(current).isSymbolicLink()) throw new Error(`Symlink source: ${key}`); }
      if (!lstatSync(target).isFile()) throw new Error(`Source is not a regular file: ${key}`);
      const bytes = supplied ?? readFileSync(target); const digest = sha256(bytes);
      inputs.set(key, digest); originalBytes += bytes.length;
      database.prepare("INSERT INTO files VALUES (?, ?, ?, ?)").run(key, bytes.length, digest, deflateRawSync(bytes, { level: 9 }));
    };
    const putJson = (table: Exclude<SnapshotTable, "records" | "files">, key: string, value: unknown): void => {
      const text = JSON.stringify(value);
      if (typeof text !== "string") throw new Error(`Invalid snapshot JSON: ${table}/${key}`);
      database.prepare(`INSERT INTO ${table} VALUES (?, ?, ?)`).run(key, text, sha256(text));
    };
    const catalog = object(parseYaml(readFileSync(path.join(root, "library/catalog.yaml"), "utf8")), "catalog");
    const context = createPcrReadContext({ root });
    const aliases = readPcrIdAliases({ root });
    const entries = readPcrDistributionCatalog({ root });
    let materialCount = 0;
    withPcrReadContextSession({ root, context, read: () => {
      for (const [position, entry] of entries.entries()) {
        const snapshot = readPcrDistributionSnapshot({ root, pcrId: entry.id, context });
        const { pcr } = snapshot;
        if (pcr.record_kind === "invalid_lifecycle_state") throw new Error(`Invalid PCR lifecycle: ${entry.id}`);
        if (pcr.record_kind === "methodology") {
          materialCount++;
          if (snapshot.fingerprint.status !== "current" || !snapshot.fingerprint.schema_valid || snapshot.completenessIssues.length) throw new Error(`Invalid material projection: ${entry.id}`);
        }
        const value = JSON.stringify(pcr);
        database.prepare("INSERT INTO records VALUES (?, ?, ?, ?, ?)").run(pcr.id, pcr.record_kind, position, value, sha256(value));
        putFile(`${entry.path}/manifest.yaml`, snapshot.manifestBytes);
        for (const [name, artifact] of Object.entries(snapshot.artifacts)) {
          if (!["pcr.en-US.md", "structured.yaml"].includes(name)) continue;
          if (!artifact.bytes) throw new Error(`Missing current artifact: ${entry.path}/${name}`);
          putFile(`${entry.path}/${name}`, artifact.bytes);
        }
      }
      for (const alias of aliases) putJson("aliases", alias.source_pcr_id, alias);
      for (const relative of strings(catalog.classification_coverage_indexes ?? [], "coverage index paths")) {
        const match = /^classifications\/indexes\/([a-z0-9-]+)-([0-9.]+)-coverage\.json$/u.exec(relative);
        if (!match) throw new Error(`Unsupported coverage path: ${relative}`);
        const system = match[1] ?? ""; const classificationVersion = match[2] ?? "";
        const snapshot = readClassificationCoverageSnapshot({ root, system, version: classificationVersion });
        verifyDistributionCoverage({ root, snapshot, context });
        putJson("coverage", `${system}:${classificationVersion}`, snapshot);
        putFile(relative);
        for (const source of Object.values(snapshot.document.source)) if (source?.path) putFile(source.path);
      }
      const moduleRoot = path.join(root, "library/modules");
      if (existsSync(moduleRoot)) {
        for (const relative of readdirSync(moduleRoot, { recursive: true, encoding: "utf8" }).sort()) {
          if (/\.(md|yaml)$/u.test(relative) && !/module\.(?!en-US\.)[^/]+\.md$/u.test(relative)) putFile(`library/modules/${relative.split(path.sep).join("/")}`);
        }
      }
      const dependencies = ["library/catalog.yaml", string(catalog.pcr_index, "material index path"), ...pcrIdAliasValidationDependencies({ root }), ...(strings(catalog.classification_mappings ?? [], "mapping paths"))];
      for (const relative of dependencies) putFile(relative);
      for (const relative of strings(catalog.classification_mappings ?? [], "mapping paths")) {
        const mapping = object(parseYaml(readFileSync(path.join(root, relative), "utf8")), "mapping");
        const mappings = mapping.mappings ?? [];
        if (!Array.isArray(mappings)) throw new Error(`Invalid mappings in ${relative}.`);
        for (const rawItem of mappings) {
          const item = object(rawItem, "mapping item");
          const acceptance = isUnknownRecord(item.acceptance) ? item.acceptance : null;
          if (acceptance?.decision_ref) putFile(string(acceptance.decision_ref, "mapping decision reference").split("#")[0] ?? "");
        }
      }
    } });
    // Bind the final snapshot to exact source bytes, including evidence. A writer
    // changing any consumed input makes the build fail before publication.
    const sourceHash = createHash("sha256");
    for (const [key, digest] of [...inputs].sort(([a], [b]) => a < b ? -1 : a > b ? 1 : 0)) {
      if (sha256(readFileSync(path.join(root, key))) !== digest) throw new Error(`Source changed during build: ${key}`);
      sourceHash.update(`${key}\0${digest}\n`);
    }
    const snapshot: OfflineSnapshot = { available_languages: ["en-US"], content_version: version, source_commit: sourceCommit, source_sha256: `sha256:${sourceHash.digest("hex")}`, records: entries.length, material_records: materialCount, aliases: aliases.length, original_bytes: originalBytes };
    db.prepare("INSERT INTO metadata VALUES ('snapshot', ?)").run(JSON.stringify(snapshot));
    db.exec("COMMIT; VACUUM;");
    const index_sha256: OfflineManifest["index_sha256"] = {
      records: metadataDigest(database, "records"), aliases: metadataDigest(database, "aliases"),
      coverage: metadataDigest(database, "coverage"), files: metadataDigest(database, "files"),
    };
    db.close(); db = null;
    const manifest: OfflineManifest = { kind: "tiangong-pcr-library", format_version: LIBRARY_FORMAT_VERSION, snapshot, bytes: statSync(filename).size, sha256: hashFile(filename), index_sha256 };
    writeFileSync(`${filename}.json`, `${JSON.stringify(manifest, null, 2)}\n`);
    writeFileSync(path.join(stage, "package.json"), `${JSON.stringify({ name: "@tiangong-lca/pcr-library", version, description: "Offline current PCR content snapshot", license: "MIT", files: ["library.sqlite", "library.sqlite.json", "README.md", "LICENSE", "NOTICE.md"] }, null, 2)}\n`);
    cpSync(path.join(root, "packages/tiangong-pcr-library/README.md"), path.join(stage, "README.md"));
    cpSync(path.join(root, "LICENSE"), path.join(stage, "LICENSE"));
    writeFileSync(path.join(stage, "NOTICE.md"), "# PCR content snapshot\n\nSource: https://github.com/tiangong-lca/pcr\n\nTianGong-authored content is distributed under the MIT License; see LICENSE. Source citations and third-party notices remain applicable. Referenced external standards and publications retain their own terms. Packaging does not promote methodology lifecycle status.\n");
    renameSync(stage, output);
    return manifest;
  } catch (error) { db?.close(); rmSync(stage, { recursive: true, force: true }); throw error; }
}

if (process.argv[1] && import.meta.url === pathToFileURL(path.resolve(process.argv[1])).href) {
  const options: { root?: string; output?: string; version?: string } = {};
  const args = process.argv.slice(2);
  for (let i = 0; i < args.length; i += 2) {
    const flag = args[i]; const value = args[i + 1];
    if (typeof value !== "string" || value === "") throw new Error("Usage: build-offline-library.ts --root <repo> --output <new-directory> --version <content-semver>");
    if (flag === "--root") options.root = value;
    else if (flag === "--output") options.output = value;
    else if (flag === "--version") options.version = value;
    else throw new Error("Usage: build-offline-library.ts --root <repo> --output <new-directory> --version <content-semver>");
  }
  console.log(JSON.stringify(buildOfflineLibrary({ root: options.root ?? process.cwd(), output: options.output ?? "dist/tiangong-pcr-library", version: options.version ?? "" }), null, 2));
}
