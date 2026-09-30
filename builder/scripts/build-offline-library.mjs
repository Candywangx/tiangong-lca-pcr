import { createHash } from "node:crypto";
import { existsSync, lstatSync, mkdirSync, mkdtempSync, readFileSync, readdirSync, realpathSync, renameSync, rmSync, statSync, writeFileSync } from "node:fs";
import path from "node:path";
import { pathToFileURL } from "node:url";
import { deflateRawSync } from "node:zlib";
import { execFileSync } from "node:child_process";
import { createPcrReadContext, withPcrReadContextSession, readPcrDistributionCatalog, readPcrDistributionSnapshot, readClassificationCoverageSnapshot, verifyDistributionCoverage } from "../../packages/pcr-core/src/index.mjs";
import { pcrIdAliasValidationDependencies, readPcrIdAliases } from "../../packages/pcr-core/src/pcr-id-aliases.mjs";
import { parseYaml } from "../../packages/pcr-core/src/yaml-lite.mjs";
import { LIBRARY_FORMAT_VERSION, sqliteDatabase, sha256, hashFile, metadataDigest } from "../../packages/pcr-core/src/offline-library.mjs";

export function buildOfflineLibrary({ root, output, version, sourceCommit = null }) {
  root = realpathSync(root); output = path.resolve(output);
  if (!/^\d+\.\d+\.\d+(?:-[a-zA-Z0-9.-]+)?$/u.test(version ?? "")) throw new Error("Supply an explicit content SemVer with --version.");
  if (existsSync(output)) throw new Error(`Output already exists; snapshots are immutable: ${output}`);
  sourceCommit ??= execFileSync("git", ["-C", root, "rev-parse", "HEAD"], { encoding: "utf8" }).trim();
  if (!/^[a-f0-9]{40}$/u.test(sourceCommit)) throw new Error("Source commit must be a full Git SHA.");
  mkdirSync(path.dirname(output), { recursive: true });
  output = path.join(realpathSync(path.dirname(output)), path.basename(output));
  const stage = mkdtempSync(`${output}.stage-`);
  const filename = path.join(stage, "library.sqlite");
  let db;
  try {
    const DatabaseSync = sqliteDatabase(); db = new DatabaseSync(filename);
    db.exec(`PRAGMA page_size = 4096; PRAGMA journal_mode = DELETE; PRAGMA user_version = ${LIBRARY_FORMAT_VERSION};
      CREATE TABLE metadata(key TEXT PRIMARY KEY, value TEXT NOT NULL) STRICT;
      CREATE TABLE records(key TEXT PRIMARY KEY, kind TEXT NOT NULL, position INTEGER NOT NULL, value TEXT NOT NULL, sha256 TEXT NOT NULL) STRICT;
      CREATE INDEX records_kind_position ON records(kind, position);
      CREATE TABLE aliases(key TEXT PRIMARY KEY, value TEXT NOT NULL, sha256 TEXT NOT NULL) STRICT;
      CREATE TABLE coverage(key TEXT PRIMARY KEY, value TEXT NOT NULL, sha256 TEXT NOT NULL) STRICT;
      CREATE TABLE files(key TEXT PRIMARY KEY, size INTEGER NOT NULL, sha256 TEXT NOT NULL, data BLOB NOT NULL) STRICT;
      BEGIN;`);
    const inputs = new Map(); let originalBytes = 0;
    const putFile = (key, supplied = null) => {
      if (inputs.has(key)) return;
      const target = path.resolve(root, key);
      if (path.relative(root, target).startsWith("..") || path.isAbsolute(key) || key.includes("\\")) throw new Error(`Invalid source path: ${key}`);
      let current = root;
      for (const segment of key.split("/")) { current = path.join(current, segment); if (lstatSync(current).isSymbolicLink()) throw new Error(`Symlink source: ${key}`); }
      if (!lstatSync(target).isFile()) throw new Error(`Source is not a regular file: ${key}`);
      const bytes = supplied ?? readFileSync(target); const digest = sha256(bytes);
      inputs.set(key, digest); originalBytes += bytes.length;
      db.prepare("INSERT INTO files VALUES (?, ?, ?, ?)").run(key, bytes.length, digest, deflateRawSync(bytes, { level: 9 }));
    };
    const putJson = (table, key, value) => {
      const text = JSON.stringify(value);
      db.prepare(`INSERT INTO ${table} VALUES (?, ?, ?)`).run(key, text, sha256(text));
    };
    const catalog = parseYaml(readFileSync(path.join(root, "library/catalog.yaml"), "utf8"));
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
        db.prepare("INSERT INTO records VALUES (?, ?, ?, ?, ?)").run(pcr.id, pcr.record_kind, position, value, sha256(value));
        putFile(`${entry.path}/manifest.yaml`, snapshot.manifestBytes);
        for (const [name, artifact] of Object.entries(snapshot.artifacts)) {
          if (!["pcr.en-US.md", "structured.yaml"].includes(name)) continue;
          if (!artifact.bytes) throw new Error(`Missing current artifact: ${entry.path}/${name}`);
          putFile(`${entry.path}/${name}`, artifact.bytes);
        }
      }
      for (const alias of aliases) putJson("aliases", alias.source_pcr_id, alias);
      for (const relative of catalog.classification_coverage_indexes ?? []) {
        const match = /^classifications\/indexes\/([a-z0-9-]+)-([0-9.]+)-coverage\.json$/u.exec(relative);
        if (!match) throw new Error(`Unsupported coverage path: ${relative}`);
        const [, system, classificationVersion] = match;
        const snapshot = readClassificationCoverageSnapshot({ root, system, version: classificationVersion });
        verifyDistributionCoverage({ root, snapshot, context });
        putJson("coverage", `${system}:${classificationVersion}`, snapshot);
        putFile(relative);
        for (const source of Object.values(snapshot.document.source)) if (source?.path) putFile(source.path);
      }
      const moduleRoot = path.join(root, "library/modules");
      if (existsSync(moduleRoot)) {
        for (const relative of readdirSync(moduleRoot, { recursive: true }).sort()) {
          if (/\.(md|yaml)$/u.test(relative) && !/module\.(?!en-US\.)[^/]+\.md$/u.test(relative)) putFile(`library/modules/${relative.split(path.sep).join("/")}`);
        }
      }
      const dependencies = ["library/catalog.yaml", catalog.pcr_index, ...pcrIdAliasValidationDependencies({ root }), ...(catalog.classification_mappings ?? [])];
      for (const relative of dependencies) putFile(relative);
      for (const relative of catalog.classification_mappings ?? []) {
        const mapping = parseYaml(readFileSync(path.join(root, relative), "utf8"));
        for (const item of mapping.mappings ?? []) if (item.acceptance?.decision_ref) putFile(item.acceptance.decision_ref.split("#")[0]);
      }
    } });
    // Bind the final snapshot to exact source bytes, including evidence. A writer
    // changing any consumed input makes the build fail before publication.
    const sourceHash = createHash("sha256");
    for (const [key, digest] of [...inputs].sort(([a], [b]) => a < b ? -1 : a > b ? 1 : 0)) {
      if (sha256(readFileSync(path.join(root, key))) !== digest) throw new Error(`Source changed during build: ${key}`);
      sourceHash.update(`${key}\0${digest}\n`);
    }
    const snapshot = { available_languages: ["en-US"], content_version: version, source_commit: sourceCommit, source_sha256: `sha256:${sourceHash.digest("hex")}`, records: entries.length, material_records: materialCount, aliases: aliases.length, original_bytes: originalBytes };
    db.prepare("INSERT INTO metadata VALUES ('snapshot', ?)").run(JSON.stringify(snapshot));
    db.exec("COMMIT; VACUUM;");
    const index_sha256 = Object.fromEntries(["records", "aliases", "coverage", "files"].map((table) => [table, metadataDigest(db, table)]));
    db.close(); db = null;
    const manifest = { kind: "tiangong-pcr-library", format_version: LIBRARY_FORMAT_VERSION, snapshot, bytes: statSync(filename).size, sha256: hashFile(filename), index_sha256 };
    writeFileSync(`${filename}.json`, `${JSON.stringify(manifest, null, 2)}\n`);
    writeFileSync(path.join(stage, "package.json"), `${JSON.stringify({ name: "tiangong-pcr-library", version, description: "Offline current PCR content snapshot", license: "UNLICENSED", files: ["library.sqlite", "library.sqlite.json", "NOTICE.md"] }, null, 2)}\n`);
    writeFileSync(path.join(stage, "NOTICE.md"), "# PCR content snapshot\n\nSource: https://github.com/tiangong-lca/pcr\n\nNo repository-wide distribution license has been declared. All source notices and references remain applicable. This artifact does not grant redistribution rights or promote methodology lifecycle status.\n");
    renameSync(stage, output);
    return manifest;
  } catch (error) { db?.close(); rmSync(stage, { recursive: true, force: true }); throw error; }
}

if (process.argv[1] && import.meta.url === pathToFileURL(path.resolve(process.argv[1])).href) {
  const options = {};
  const args = process.argv.slice(2);
  for (let i = 0; i < args.length; i += 2) {
    if (!["--root", "--output", "--version"].includes(args[i]) || !args[i + 1]) throw new Error("Usage: build-offline-library.mjs --root <repo> --output <new-directory> --version <content-semver>");
    options[args[i].slice(2)] = args[i + 1];
  }
  console.log(JSON.stringify(buildOfflineLibrary({ root: options.root ?? process.cwd(), output: options.output ?? "dist/tiangong-pcr-library", version: options.version }), null, 2));
}
