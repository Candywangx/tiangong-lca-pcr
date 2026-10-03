import assert from "node:assert/strict";
import { execFileSync } from "node:child_process";
import { cpSync, existsSync, mkdirSync, mkdtempSync, readFileSync, realpathSync, rmSync, writeFileSync } from "node:fs";
import { tmpdir } from "node:os";
import path from "node:path";
import { deflateRawSync } from "node:zlib";
import test from "node:test";
import { buildOfflineLibrary } from "../../builder/scripts/build-offline-library.ts";
import { buildOfflineTool } from "../../builder/scripts/build-offline-packages.ts";
import type { DatabaseSync } from "node:sqlite";
const releaseModule: unknown = await import(new URL("../../builder/scripts/npm-release.mjs", import.meta.url).href);
interface PackageReceipt { name: string; filename: string; version: string; source_commit: string }
function callable(value: unknown): value is (...args: unknown[]) => unknown { return typeof value === "function"; }
function releaseFunction(name: string): (...args: unknown[]) => unknown {
  const fn = record(releaseModule)[name]; assert.ok(callable(fn)); return fn;
}
async function buildRelease(root: string, tag: string, output: string): Promise<PackageReceipt> {
  const result = record(await releaseFunction("buildRelease")(root, tag, output));
  return { name: string(result.name), filename: string(result.filename), version: string(result.version), source_commit: string(result.source_commit) };
}
function parseNpmPackOutput(text: string, name: string): { bundled: string[] } {
  const result = record(releaseFunction("parseNpmPackOutput")(text, name));
  const bundled = array(result.bundled).map(string); return { bundled };
}
function database(library: OfflineLibrary): DatabaseSync { assert.ok(library.db); return library.db; }
function sqlRow(value: unknown): Record<string, unknown> { return record(value); }
function installedBin(installation: string): string {
  const root = path.join(installation, "node_modules/@tiangong-lca/pcr");
  const manifest = json(readFileSync(path.join(root, "package.json"), "utf8"));
  return path.join(root, string(record(manifest.bin)["tiangong-pcr"]));
}
import { OfflineLibrary, sqliteDatabase, sha256, hashFile, metadataDigest } from "./src/offline-library.ts";
import { withPcrSource } from "./src/source-context.ts";
import { getPcrById, readPcrDistributionSnapshot, buildGuidance, listPcrs, resolveClassification, resolvePcrIdentity, validateDatasetAgainstGuidance, verifyDistributionCoverage, readPcrModuleDocumentBundle } from "./src/index.ts";
import { runTiangongPcr } from "../tiangong-pcr-cli/src/commands.ts";

const root = path.resolve(".");


function record(value: unknown): Record<string, unknown> {
  assert.ok(value !== null && typeof value === "object" && !Array.isArray(value), "expected an object");
  return value as Record<string, unknown>;
}
function array(value: unknown): unknown[] { assert.ok(Array.isArray(value)); return value; }
function match(value: unknown, pattern: RegExp): void { assert.match(string(value), pattern); }
function string(value: unknown): string { assert.equal(typeof value, "string"); return value as string; }
function errorEnvelope(text: string | Buffer): Record<string, unknown> { return record(json(text).error); }
function json(text: string | Buffer): Record<string, unknown> { const value: unknown = JSON.parse(String(text)); return record(value); }
function childError(value: unknown): { status: unknown; stdout: unknown; stderr: unknown } {
  const error = record(value);
  assert.ok(Object.hasOwn(error, "stdout") && Object.hasOwn(error, "stderr"));
  return { status: error.status, stdout: error.stdout, stderr: error.stderr };
}
const [major = 0, minor = 0] = process.versions.node.split(".").map(Number);
const supported = major > 24 || (major === 24 && minor >= 19);
const wheat = "pcr.agriculture-forestry-and-fishery-products.products-of-agriculture-horticulture-and-market-gardening.wheat-seed";

test("offline distribution preserves contracts and installs without network", { skip: !supported, timeout: 300000 }, async (t) => {
  const temp = realpathSync(mkdtempSync(path.join(tmpdir(), "pcr-offline-test-")));
  let library: OfflineLibrary | undefined;
  t.after(() => { library?.close(); rmSync(temp, { recursive: true, force: true }); });
  const output = path.join(temp, "data");
  const manifest = buildOfflineLibrary({ root, output, version: "0.1.0" });
  const filename = path.join(output, "library.sqlite");
  const reads: string[] = [];
  library = new OfflineLibrary(filename, { verify: true, onArtifactRead: (key) => reads.push(key) });
  const currentLibrary = library;
  const run = <T>(callback: () => T): T => withPcrSource(currentLibrary.root, currentLibrary, callback);

  await t.test("catalog needs no body reads; selected guidance uses shared readiness and integrity", () => {
    const records = run(() => listPcrs({ root: currentLibrary.root, scope: "material" }));
    assert.equal(records.length, manifest.snapshot.material_records);
    assert.equal(reads.length, 0);
    assert.deepEqual(manifest.snapshot.available_languages, ["en-US"]);
    assert.equal(sqlRow(database(currentLibrary).prepare("SELECT COUNT(*) AS count FROM files WHERE key LIKE '%/pcr.%.md' AND key NOT LIKE '%/pcr.en-US.md'").get()).count, 0);
    const unavailable = runTiangongPcr(["show", "--pcr", wheat, "--lang", "zh-CN", "--library", filename]);
    assert.equal(unavailable.exitCode, 1);
    match(unavailable.stderr, /PCR_LIBRARY_LANGUAGE_UNAVAILABLE/u);
    reads.length = 0;
    const actual = run(() => buildGuidance({ root: currentLibrary.root, pcrId: wheat }));
    assert.deepEqual(actual, buildGuidance({ root, pcrId: wheat }));
    assert.equal(actual.readiness.status, "review_required");
    assert.ok(reads.length === 3 && reads.every((name) => name.includes("/wheat-seed/")));
    const dataset = { collection_records: [] };
    assert.deepEqual(run(() => validateDatasetAgainstGuidance({ root: currentLibrary.root, pcrId: wheat, dataset })), validateDatasetAgainstGuidance({ root, pcrId: wheat, dataset }));
    assert.deepEqual(run(() => readPcrModuleDocumentBundle({ root: currentLibrary.root, group: "core", moduleId: "allocation" })), readPcrModuleDocumentBundle({ root, group: "core", moduleId: "allocation" }));
  });
  await t.test("accepted mappings, known-unmapped leaves and aliases retain semantics", () => {
    // Coverage documents use uppercase CPC; physical source paths are lowercase.
    run(() => verifyDistributionCoverage({ root: currentLibrary.root, snapshot: library.coverageSnapshot("cpc", "3.0") }));
    for (const code of ["01111", "99000"]) assert.deepEqual(run(() => resolveClassification({ root: currentLibrary.root, system: "cpc", version: "3.0", code })), resolveClassification({ root, system: "cpc", version: "3.0", code }));
    const alias = string(sqlRow(database(currentLibrary).prepare("SELECT key FROM aliases ORDER BY key LIMIT 1").get()).key);
    assert.deepEqual(run(() => resolvePcrIdentity({ root: currentLibrary.root, pcrId: alias })), resolvePcrIdentity({ root, pcrId: alias }));
    const result = runTiangongPcr(["guidance", "--pcr", alias, "--library", filename, "--format", "json"]);
    assert.equal(errorEnvelope(result.stderr).code, "PCR_LEGACY_ID_REDIRECT");
    assert.ok(string(record(errorEnvelope(result.stderr).details).next_command).includes("--library"));
    const show = runTiangongPcr(["show", "--pcr", alias, "--lang", "zh-CN", "--library", filename]);
    match(show.stderr, /PCR_LEGACY_ID_REDIRECT/u);
  });
  await t.test("CLI pagination retains explicit pins and reports incompatible or conflicting selections", () => {
    const result = runTiangongPcr(["list", "--library", filename, "--library-sha256", manifest.sha256, "--format", "json"]);
    assert.equal(result.exitCode, 0, result.stderr);
    assert.ok(string(json(result.stdout).next_command).includes(`--library-sha256 ${manifest.sha256}`));
    assert.ok(string(json(result.stdout).next_command).startsWith("tiangong-pcr "));
    assert.equal(errorEnvelope(runTiangongPcr(["list", "--library", filename, "--root", root, "--format", "json"]).stderr).code, "PCR_CLI_SOURCE_CONFLICT");
    assert.throws(() => new OfflineLibrary(filename, { expectedSha256: `sha256:${"0".repeat(64)}` }), /SHA-256 mismatch/u);
  });
  await t.test("same sources and toolchain reproduce identical database bytes", () => {
    const second = buildOfflineLibrary({ root, output: path.join(temp, "second"), version: "0.1.0" });
    assert.deepEqual(second, manifest);
    assert.throws(() => buildOfflineLibrary({ root, output, version: "0.1.0" }), /already exists/u);
  });
  await t.test("corrupt body fails only when selected; full verify detects corruption", () => {
    const copy = path.join(temp, "corrupt.sqlite");
    cpSync(filename, copy); cpSync(`${filename}.json`, `${copy}.json`);
    const DatabaseSync = sqliteDatabase(); const db = new DatabaseSync(copy);
    const row = db.prepare("SELECT key, data FROM files WHERE key LIKE '%/wheat-seed/structured.yaml'").get();
    const blob = sqlRow(row).data; assert.ok(blob instanceof Uint8Array);
    const bytes = Buffer.from(blob); bytes[4] = (bytes[4] ?? 0) ^ 0xff;
    db.prepare("UPDATE files SET data = ? WHERE key = ?").run(bytes, string(sqlRow(row).key)); db.close();
    const bad = new OfflineLibrary(copy);
    try {
      assert.ok(bad.listPcrs("material").length);
      assert.throws(() => withPcrSource(bad.root, bad, () => buildGuidance({ root: bad.root, pcrId: wheat })), /Invalid library artifact/u);
    } finally { bad.close(); }
    assert.throws(() => new OfflineLibrary(copy, { verify: true }), /SHA-256 mismatch/u);
  });
  await t.test("metadata corruption and unsupported formats fail closed", () => {
    const copy = path.join(temp, "bad-index.sqlite"); cpSync(filename, copy);
    const sidecar = `${copy}.json`; const changed = { ...structuredClone(manifest), format_version: 999 }; writeFileSync(sidecar, JSON.stringify(changed));
    assert.throws(() => new OfflineLibrary(copy), { code: "PCR_LIBRARY_FORMAT_UNSUPPORTED" });
    writeFileSync(sidecar, JSON.stringify(manifest));
    const DatabaseSync = sqliteDatabase(); const db = new DatabaseSync(copy);
    db.prepare("UPDATE records SET value = replace(value, 'candidate', 'published') WHERE key = ?").run(wheat); db.close();
    assert.throws(() => new OfflineLibrary(copy), /index checksum mismatch|byte length/u);
  });
  await t.test("rewritten artifact hashes cannot bypass projection freshness checks", () => {
    const copy = path.join(temp, "stale.sqlite"); cpSync(filename, copy);
    const DatabaseSync = sqliteDatabase(); const db = new DatabaseSync(copy);
    const key = string(sqlRow(database(currentLibrary).prepare("SELECT key FROM files WHERE key LIKE '%/wheat-seed/pcr.en-US.md'").get()).key);
    const bytes = Buffer.concat([currentLibrary.readFile(key), Buffer.from("\nChanged source.\n")]);
    db.prepare("UPDATE files SET data = ?, size = ?, sha256 = ? WHERE key = ?").run(deflateRawSync(bytes), bytes.length, sha256(bytes), key);
    const changed = structuredClone(manifest); changed.index_sha256.files = metadataDigest(db, "files"); db.close();
    changed.sha256 = hashFile(copy); changed.bytes = readFileSync(copy).length;
    writeFileSync(`${copy}.json`, JSON.stringify(changed));
    const stale = new OfflineLibrary(copy, { verify: true });
    try { assert.throws(() => withPcrSource(stale.root, stale, () => buildGuidance({ root: stale.root, pcrId: wheat })), { code: "PCR_NOT_USABLE_FOR_GUIDANCE" }); }
    finally { stale.close(); }
  });
  await t.test("two tarballs install with an empty npm cache and offline-only resolution", () => {
    const tool = path.join(temp, "tool"); const toolBuild = buildOfflineTool({ root, output: tool });
    const npmCli = process.env.npm_execpath;
    assert.ok(npmCli && existsSync(npmCli), "Run through npm run offline:test (npm_execpath required).");
    const npm = (args: string[], cwd: string): string => execFileSync(process.execPath, [npmCli, ...args, "--cache", path.join(temp, "empty-cache"), "--offline", "--ignore-scripts", "--no-audit", "--no-fund"], { cwd, encoding: "utf8", env: { ...process.env, npm_config_registry: "http://127.0.0.1:1" }, stdio: ["ignore", "pipe", "pipe"] });
    const packed = parseNpmPackOutput(npm(["pack", tool, "--pack-destination", temp, "--json"], temp), "@tiangong-lca/pcr");
    assert.ok(packed.bundled.includes("ajv"), "Tool tarball must contain its locked dependency graph.");
    npm(["pack", output, "--pack-destination", temp], temp);
    const installation = path.join(temp, "installation"); mkdirSync(installation);
    writeFileSync(path.join(installation, "package.json"), '{"private":true}\n');
    npm(["install", path.join(temp, `tiangong-lca-pcr-${toolBuild.version}.tgz`), path.join(temp, "tiangong-lca-pcr-library-0.1.0.tgz")], installation);
    const bin = installedBin(installation);
    const env: NodeJS.ProcessEnv = { ...process.env }; delete env.PCR_LIBRARY;
    const result = execFileSync(process.execPath, ["--no-strip-types", bin, "guidance", "--pcr", wheat, "--format", "json"], { cwd: installation, env, encoding: "utf8" });
    assert.equal(record(json(result).readiness).status, "review_required");
    const consume = (...args: string[]) => json(execFileSync(process.execPath, ["--no-strip-types", bin, ...args, "--format", "json"], { cwd: installation, env, encoding: "utf8" }));
    const input = path.join(installation, "sowing.process.json");
    cpSync(path.join(root, "packages/pcr-core/fixtures/agentic-review/sowing.process.json"), input);
    const inspected = consume("inspect", "--input", input, "--section", "exchanges", "--page-size", "1");
    assert.equal(inspected.schema_validation, "not_performed");
    assert.equal(array(inspected.items).length, 1);
    assert.equal(record(inspected.pagination).has_more, true);
    const selected = consume("guidance", "--pcr", wheat, "--topic", "boundary", "--page-size", "1");
    assert.equal(array(selected.items).length, 1);
    const report = path.join(installation, "review.json");
    consume("review", "prepare", "--pcr", wheat, "--input", input, "--output", report);
    const checked = consume("review", "check", "--pcr", wheat, "--input", input, "--report", report);
    assert.equal(checked.envelope_valid, true);
    assert.equal(checked.report_status, "draft");
    assert.equal(checked.methodology_approval, false);
    const calculation = path.join(installation, "calculation.json");
    writeFileSync(calculation, JSON.stringify({ operation: "convert", amount: "2", factor: "1000", from_unit: "kg", to_unit: "g", basis: "same material", evidence: "definition of kilogram" }));
    assert.equal(record(consume("calculate", "--input", calculation).result).amount, 2000);
    const sibling = json(execFileSync(process.execPath, ["--no-strip-types", bin, "library", "info", "--format", "json"], { cwd: temp, env, encoding: "utf8" }));
    assert.equal(sibling.kind, "tiangong-pcr-library", "Scoped installation preserves the snapshot format identity.");
    assert.ok(existsSync(path.join(installation, "node_modules/@tiangong-lca/pcr/skills/tiangong-pcr/SKILL.md")));
    assert.equal(existsSync(path.join(installation, "node_modules/@tiangong-lca/pcr/library")), false);
    const dataPackage = json(readFileSync(path.join(installation, "node_modules/@tiangong-lca/pcr-library/package.json")));
    assert.equal(dataPackage.scripts, undefined); assert.equal(dataPackage.dependencies, undefined);
    for (const [name, source] of [["@tiangong-lca/pcr", "tiangong-pcr-cli"], ["@tiangong-lca/pcr-library", "tiangong-pcr-library"]] as const) {
      const installed = path.join(installation, "node_modules", name);
      assert.equal(json(readFileSync(path.join(installed, "package.json"))).name, name);
      assert.equal(json(readFileSync(path.join(installed, "package.json"))).license, "MIT");
      assert.equal(readFileSync(path.join(installed, "LICENSE"), "utf8"), readFileSync(path.join(root, "LICENSE"), "utf8"));
      const readme = readFileSync(path.join(installed, "README.md"), "utf8");
      assert.equal(readme, readFileSync(path.join(root, "packages", source, "README.md"), "utf8"));
      assert.ok(readme.startsWith(`# ${name}\n`), "Each installed package needs its own consumer README.");
      assert.doesNotMatch(readFileSync(path.join(installed, "NOTICE.md"), "utf8"), /UNLICENSED|does not grant redistribution rights/u);
    }
    assert.equal(readFileSync(path.join(installation, "node_modules/@tiangong-lca/pcr/node_modules/ajv/LICENSE"), "utf8"), readFileSync(path.join(root, "node_modules/ajv/LICENSE"), "utf8"));
    rmSync(path.join(installation, "node_modules/@tiangong-lca/pcr-library"), { recursive: true });
    assert.throws(() => execFileSync(process.execPath, ["--no-strip-types", bin, "list", "--format", "json"], { cwd: installation, env, encoding: "utf8", stdio: "pipe" }), (error) => {
      assert.equal(childError(error).stdout, "");
      match(childError(error).stderr, /PCR_LIBRARY_REQUIRED/u);
      match(childError(error).stderr, /Install @tiangong-lca\/pcr-library/u);
      return true;
    });
  });
  await t.test("release tarballs preserve source provenance and install entirely offline", async () => {
    const toolVersion = json(readFileSync(path.join(root, "packages/tiangong-pcr-cli/package.json"))).version;
    const libraryVersion = json(readFileSync(path.join(root, "packages/tiangong-pcr-library/package.json"))).version;
    const toolOutput = path.join(temp, "release-tool"); const libraryOutput = path.join(temp, "release-library");
    const tool = await buildRelease(root, `pcr-v${toolVersion}`, toolOutput);
    const data = await buildRelease(root, `library-v${libraryVersion}`, libraryOutput);
    const installation = path.join(temp, "release-install"); mkdirSync(installation);
    writeFileSync(path.join(installation, "package.json"), '{"private":true}\n');
    execFileSync(process.execPath, [string(process.env.npm_execpath), "install", path.join(toolOutput, tool.filename), path.join(libraryOutput, data.filename), "--offline", "--ignore-scripts", "--no-audit", "--no-fund", "--cache", path.join(temp, "release-empty-cache")], { cwd: installation, env: { ...process.env, npm_config_registry: "http://127.0.0.1:1" }, stdio: "pipe" });
    for (const receipt of [tool, data]) {
      const pkg = json(readFileSync(path.join(installation, "node_modules", receipt.name, "package.json")));
      assert.equal(pkg.version, receipt.version); assert.equal(pkg.gitHead, receipt.source_commit);
      assert.equal(record(pkg.repository).url, "git+https://github.com/tiangong-lca/pcr.git");
      assert.equal(pkg.private, undefined);
    }
    const bin = installedBin(installation);
    const verified = json(execFileSync(process.execPath, ["--no-strip-types", bin, "library", "verify", "--library", path.join(libraryOutput, "library.sqlite"), "--format", "json"], { cwd: installation, encoding: "utf8" }));
    assert.equal(verified.verified, true);
    assert.ok(readFileSync(path.join(libraryOutput, "SHA256SUMS"), "utf8").includes("library.sqlite.json"));
  });
});

// Small real SQLite fixtures exercise storage boundaries independently of the
// full-corpus packaging qualification above.
function tinyLibrary(t: import("node:test").TestContext): { filename: string; bytes: Buffer; manifest: import("./src/types.ts").OfflineManifest } {
  const directory = realpathSync(mkdtempSync(path.join(tmpdir(), "pcr-offline-boundary-")));
  t.after(() => rmSync(directory, { recursive: true, force: true }));
  const filename = path.join(directory, "library.sqlite");
  const DatabaseSync = sqliteDatabase(); const db = new DatabaseSync(filename);
  const bytes = Buffer.from("Complete original fixture bytes.\n", "utf8");
  const snapshot = { available_languages: ["en-US"], content_version: "0.1.0", source_commit: "0".repeat(40),
    source_sha256: `sha256:${"0".repeat(64)}`, records: 0, material_records: 0, aliases: 0, original_bytes: bytes.length };
  try {
    db.exec(`PRAGMA user_version = 1;
      CREATE TABLE metadata(key TEXT PRIMARY KEY, value TEXT NOT NULL) STRICT;
      CREATE TABLE records(key TEXT PRIMARY KEY, kind TEXT NOT NULL, position INTEGER NOT NULL, value TEXT NOT NULL, sha256 TEXT NOT NULL) STRICT;
      CREATE TABLE aliases(key TEXT PRIMARY KEY, value TEXT NOT NULL, sha256 TEXT NOT NULL) STRICT;
      CREATE TABLE coverage(key TEXT PRIMARY KEY, value TEXT NOT NULL, sha256 TEXT NOT NULL) STRICT;
      CREATE TABLE files(key TEXT PRIMARY KEY, size INTEGER NOT NULL, sha256 TEXT NOT NULL, data BLOB NOT NULL) STRICT;`);
    db.prepare("INSERT INTO metadata VALUES ('snapshot', ?)").run(JSON.stringify(snapshot));
    db.prepare("INSERT INTO files VALUES (?, ?, ?, ?)").run("tiny/pcr.en-US.md", bytes.length, sha256(bytes), deflateRawSync(bytes));
    const index_sha256 = { records: metadataDigest(db, "records"), aliases: metadataDigest(db, "aliases"),
      coverage: metadataDigest(db, "coverage"), files: metadataDigest(db, "files") };
    db.close();
    const manifest: import("./src/types.ts").OfflineManifest = { kind: "tiangong-pcr-library", format_version: 1,
      snapshot, bytes: readFileSync(filename).length, sha256: hashFile(filename), index_sha256 };
    writeFileSync(`${filename}.json`, JSON.stringify(manifest));
    return { filename, bytes, manifest };
  } finally { if (db.isOpen) db.close(); }
}

test("offline reader retains lazy selection, exact bytes, immutable handles and checksum pins", t => {
  const fixture = tinyLibrary(t); const reads: string[] = [];
  const library = new OfflineLibrary(fixture.filename, { expectedSha256: fixture.manifest.sha256, onArtifactRead: key => reads.push(key) });
  try {
    assert.deepEqual(library.listPcrs("all"), []); assert.deepEqual(reads, []);
    assert.deepEqual(library.readFile("tiny/pcr.en-US.md"), fixture.bytes);
    assert.deepEqual(reads, ["tiny/pcr.en-US.md"]);
    assert.throws(() => database(library).exec("DELETE FROM files"), /readonly|read-only/u);
    assert.throws(() => library.readFile("missing"), { code: "PCR_LIBRARY_ARTIFACT_MISSING" });
    assert.throws(() => new OfflineLibrary(fixture.filename, { expectedSha256: `sha256:${"f".repeat(64)}` }), /SHA-256 mismatch/u);
  } finally { library.close(); }
  assert.equal(library.db, null);
});

test("offline reader rejects blob corruption when selected and detects it with a complete checksum", t => {
  const fixture = tinyLibrary(t); const DatabaseSync = sqliteDatabase(); const writer = new DatabaseSync(fixture.filename);
  writer.prepare("UPDATE files SET data = ? WHERE key = ?").run(Buffer.from([0xff]), "tiny/pcr.en-US.md"); writer.close();
  const library = new OfflineLibrary(fixture.filename);
  try {
    assert.deepEqual(library.listPcrs("all"), []);
    assert.throws(() => library.readFile("tiny/pcr.en-US.md"), { code: "PCR_LIBRARY_ARTIFACT_INVALID" });
  } finally { library.close(); }
  assert.throws(() => new OfflineLibrary(fixture.filename, { verify: true }), /SHA-256 mismatch/u);
});

test("offline reader refuses malformed sidecars before returning a usable adapter", t => {
  const fixture = tinyLibrary(t);
  writeFileSync(`${fixture.filename}.json`, JSON.stringify({ ...fixture.manifest, format_version: 999 }));
  assert.throws(() => new OfflineLibrary(fixture.filename), { code: "PCR_LIBRARY_FORMAT_UNSUPPORTED" });
  writeFileSync(`${fixture.filename}.json`, JSON.stringify({ ...fixture.manifest, snapshot: { ...fixture.manifest.snapshot, available_languages: ["zh-CN"] } }));
  assert.throws(() => new OfflineLibrary(fixture.filename), /English only/u);
  writeFileSync(`${fixture.filename}.json`, "{");
  assert.throws(() => new OfflineLibrary(fixture.filename), { code: "PCR_LIBRARY_INVALID" });
});

test("offline reader rejects malformed UTF-8 in sidecar and hash-valid manifest bytes", t => {
  const fixture = tinyLibrary(t);
  const sidecar = Buffer.concat([Buffer.from(`${JSON.stringify(fixture.manifest).slice(0, -1)},"note":"`), Buffer.from([0xc3, 0x28]), Buffer.from('"}')]);
  writeFileSync(`${fixture.filename}.json`, sidecar);
  assert.throws(() => new OfflineLibrary(fixture.filename), { code: "PCR_LIBRARY_INVALID" });
  const DatabaseSync = sqliteDatabase(); const writer = new DatabaseSync(fixture.filename);
  const bytes = Buffer.concat([Buffer.from('id: pcr.tiny\ntitle: "'), Buffer.from([0xc3, 0x28]), Buffer.from('"\n')]);
  writer.prepare("INSERT INTO files VALUES (?, ?, ?, ?)").run("tiny/manifest.yaml", bytes.length, sha256(bytes), deflateRawSync(bytes));
  const manifest = structuredClone(fixture.manifest); manifest.index_sha256.files = metadataDigest(writer, "files"); writer.close();
  manifest.bytes = readFileSync(fixture.filename).length; manifest.sha256 = hashFile(fixture.filename);
  writeFileSync(`${fixture.filename}.json`, JSON.stringify(manifest));
  const library = new OfflineLibrary(fixture.filename, { expectedSha256: manifest.sha256 });
  try {
    assert.throws(() => library.snapshotFiles({ id: "pcr.tiny", path: "tiny", manifestPath: path.join(library.root, "tiny/manifest.yaml") }),
      (error: unknown) => { assert.ok(error instanceof Error); assert.equal(record(error).code, "PCR_LIBRARY_ARTIFACT_INVALID"); assert.match(error.message, /tiny\/manifest\.yaml.*not valid UTF-8/u); return true; });
  } finally { library.close(); }
});

test("offline reader preserves valid legacy null language titles without reading bodies", t => {
  const fixture = tinyLibrary(t);
  const id = "pcr.community-social-and-personal-services.education-services.primary-education-services";
  // Packaging retains this compatibility record; public reads keep its terminal redirect.
  const original = readPcrDistributionSnapshot({ root, pcrId: id }).pcr;
  assert.throws(() => getPcrById({ root, pcrId: id }), { code: "PCR_LEGACY_ID_REDIRECT" });
  assert.equal(original.title["zh-CN"], null);
  const DatabaseSync = sqliteDatabase(); const writer = new DatabaseSync(fixture.filename);
  const value = JSON.stringify(original);
  writer.prepare("INSERT INTO records VALUES (?, ?, ?, ?, ?)").run(id, original.record_kind, 0, value, sha256(value));
  const manifest = structuredClone(fixture.manifest); manifest.snapshot.records = 1;
  writer.prepare("UPDATE metadata SET value = ? WHERE key = 'snapshot'").run(JSON.stringify(manifest.snapshot));
  manifest.index_sha256.records = metadataDigest(writer, "records"); writer.close();
  manifest.bytes = readFileSync(fixture.filename).length; manifest.sha256 = hashFile(fixture.filename);
  writeFileSync(`${fixture.filename}.json`, JSON.stringify(manifest));
  const reads: string[] = []; const library = new OfflineLibrary(fixture.filename, { onArtifactRead: key => reads.push(key) });
  try { assert.deepEqual(library.listPcrs("legacy"), [original]); assert.deepEqual(reads, []); }
  finally { library.close(); }
});
