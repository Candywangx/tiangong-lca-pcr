import assert from "node:assert/strict";
import { execFileSync } from "node:child_process";
import { cpSync, existsSync, mkdirSync, mkdtempSync, readFileSync, realpathSync, rmSync, writeFileSync } from "node:fs";
import { tmpdir } from "node:os";
import path from "node:path";
import { deflateRawSync } from "node:zlib";
import test from "node:test";
import { buildOfflineLibrary } from "../../builder/scripts/build-offline-library.mjs";
import { buildOfflineTool } from "../../builder/scripts/build-offline-packages.mjs";
import { buildRelease, parseNpmPackOutput } from "../../builder/scripts/npm-release.mjs";
import { OfflineLibrary, sqliteDatabase, sha256, hashFile, metadataDigest } from "./src/offline-library.mjs";
import { withPcrSource } from "./src/source-context.mjs";
import { buildGuidance, listPcrs, resolveClassification, resolvePcrIdentity, validateDatasetAgainstGuidance, verifyDistributionCoverage, readPcrModuleDocumentBundle } from "./src/index.mjs";
import { runTiangongPcr } from "../tiangong-pcr-cli/src/commands.mjs";

const root = path.resolve(".");
const [major, minor] = process.versions.node.split(".").map(Number);
const supported = major > 24 || (major === 24 && minor >= 19);
const wheat = "pcr.agriculture-forestry-and-fishery-products.products-of-agriculture-horticulture-and-market-gardening.wheat-seed";

test("offline distribution preserves contracts and installs without network", { skip: !supported, timeout: 300000 }, async (t) => {
  const temp = realpathSync(mkdtempSync(path.join(tmpdir(), "pcr-offline-test-")));
  let library;
  t.after(() => { library?.close(); rmSync(temp, { recursive: true, force: true }); });
  const output = path.join(temp, "data");
  const manifest = buildOfflineLibrary({ root, output, version: "0.1.0" });
  const filename = path.join(output, "library.sqlite");
  const reads = [];
  library = new OfflineLibrary(filename, { verify: true, onArtifactRead: (key) => reads.push(key) });
  const run = (callback) => withPcrSource(library.root, library, callback);

  await t.test("catalog needs no body reads; selected guidance uses shared readiness and integrity", () => {
    const records = run(() => listPcrs({ root: library.root, scope: "material" }));
    assert.equal(records.length, manifest.snapshot.material_records);
    assert.equal(reads.length, 0);
    assert.deepEqual(manifest.snapshot.available_languages, ["en-US"]);
    assert.equal(library.db.prepare("SELECT COUNT(*) AS count FROM files WHERE key LIKE '%/pcr.%.md' AND key NOT LIKE '%/pcr.en-US.md'").get().count, 0);
    const unavailable = runTiangongPcr(["show", "--pcr", wheat, "--lang", "zh-CN", "--library", filename]);
    assert.equal(unavailable.exitCode, 1);
    assert.match(unavailable.stderr, /PCR_LIBRARY_LANGUAGE_UNAVAILABLE/u);
    reads.length = 0;
    const actual = run(() => buildGuidance({ root: library.root, pcrId: wheat }));
    assert.deepEqual(actual, buildGuidance({ root, pcrId: wheat }));
    assert.equal(actual.readiness.status, "review_required");
    assert.ok(reads.length === 3 && reads.every((name) => name.includes("/wheat-seed/")));
    const dataset = { collection_records: [] };
    assert.deepEqual(run(() => validateDatasetAgainstGuidance({ root: library.root, pcrId: wheat, dataset })), validateDatasetAgainstGuidance({ root, pcrId: wheat, dataset }));
    assert.deepEqual(run(() => readPcrModuleDocumentBundle({ root: library.root, group: "core", moduleId: "allocation" })), readPcrModuleDocumentBundle({ root, group: "core", moduleId: "allocation" }));
  });
  await t.test("accepted mappings, known-unmapped leaves and aliases retain semantics", () => {
    // Coverage documents use uppercase CPC; physical source paths are lowercase.
    run(() => verifyDistributionCoverage({ root: library.root, snapshot: library.coverageSnapshot("cpc", "3.0") }));
    for (const code of ["01111", "99000"]) assert.deepEqual(run(() => resolveClassification({ root: library.root, system: "cpc", version: "3.0", code })), resolveClassification({ root, system: "cpc", version: "3.0", code }));
    const alias = library.db.prepare("SELECT key FROM aliases ORDER BY key LIMIT 1").get().key;
    assert.deepEqual(run(() => resolvePcrIdentity({ root: library.root, pcrId: alias })), resolvePcrIdentity({ root, pcrId: alias }));
    const result = runTiangongPcr(["guidance", "--pcr", alias, "--library", filename, "--format", "json"]);
    assert.equal(JSON.parse(result.stderr).error.code, "PCR_LEGACY_ID_REDIRECT");
    assert.ok(JSON.parse(result.stderr).error.details.next_command.includes("--library"));
    const show = runTiangongPcr(["show", "--pcr", alias, "--lang", "zh-CN", "--library", filename]);
    assert.match(show.stderr, /PCR_LEGACY_ID_REDIRECT/u);
  });
  await t.test("CLI pagination retains explicit pins and reports incompatible or conflicting selections", () => {
    const result = runTiangongPcr(["list", "--library", filename, "--library-sha256", manifest.sha256, "--format", "json"]);
    assert.equal(result.exitCode, 0, result.stderr);
    assert.ok(JSON.parse(result.stdout).next_command.includes(`--library-sha256 ${manifest.sha256}`));
    assert.ok(JSON.parse(result.stdout).next_command.startsWith("tiangong-pcr "));
    assert.equal(JSON.parse(runTiangongPcr(["list", "--library", filename, "--root", root, "--format", "json"]).stderr).error.code, "PCR_CLI_SOURCE_CONFLICT");
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
    const bytes = Buffer.from(row.data); bytes[4] ^= 0xff;
    db.prepare("UPDATE files SET data = ? WHERE key = ?").run(bytes, row.key); db.close();
    const bad = new OfflineLibrary(copy);
    try {
      assert.ok(bad.listPcrs("material").length);
      assert.throws(() => withPcrSource(bad.root, bad, () => buildGuidance({ root: bad.root, pcrId: wheat })), /Invalid library artifact/u);
    } finally { bad.close(); }
    assert.throws(() => new OfflineLibrary(copy, { verify: true }), /SHA-256 mismatch/u);
  });
  await t.test("metadata corruption and unsupported formats fail closed", () => {
    const copy = path.join(temp, "bad-index.sqlite"); cpSync(filename, copy);
    const sidecar = `${copy}.json`; const changed = structuredClone(manifest);
    changed.format_version = 999; writeFileSync(sidecar, JSON.stringify(changed));
    assert.throws(() => new OfflineLibrary(copy), { code: "PCR_LIBRARY_FORMAT_UNSUPPORTED" });
    writeFileSync(sidecar, JSON.stringify(manifest));
    const DatabaseSync = sqliteDatabase(); const db = new DatabaseSync(copy);
    db.prepare("UPDATE records SET value = replace(value, 'candidate', 'published') WHERE key = ?").run(wheat); db.close();
    assert.throws(() => new OfflineLibrary(copy), /index checksum mismatch|byte length/u);
  });
  await t.test("rewritten artifact hashes cannot bypass projection freshness checks", () => {
    const copy = path.join(temp, "stale.sqlite"); cpSync(filename, copy);
    const DatabaseSync = sqliteDatabase(); const db = new DatabaseSync(copy);
    const key = library.db.prepare("SELECT key FROM files WHERE key LIKE '%/wheat-seed/pcr.en-US.md'").get().key;
    const bytes = Buffer.concat([library.readFile(key), Buffer.from("\nChanged source.\n")]);
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
    const npm = (args, cwd) => execFileSync(process.execPath, [npmCli, ...args, "--cache", path.join(temp, "empty-cache"), "--offline", "--ignore-scripts", "--no-audit", "--no-fund"], { cwd, encoding: "utf8", env: { ...process.env, npm_config_registry: "http://127.0.0.1:1" }, stdio: ["ignore", "pipe", "pipe"] });
    const packed = parseNpmPackOutput(npm(["pack", tool, "--pack-destination", temp, "--json"], temp), "@tiangong-lca/pcr");
    assert.ok(packed.bundled.includes("ajv"), "Tool tarball must contain its locked dependency graph.");
    npm(["pack", output, "--pack-destination", temp], temp);
    const installation = path.join(temp, "installation"); mkdirSync(installation);
    writeFileSync(path.join(installation, "package.json"), '{"private":true}\n');
    npm(["install", path.join(temp, `tiangong-lca-pcr-${toolBuild.version}.tgz`), path.join(temp, "tiangong-lca-pcr-library-0.1.0.tgz")], installation);
    const bin = path.join(installation, "node_modules/@tiangong-lca/pcr/packages/tiangong-pcr-cli/bin/tiangong-pcr.mjs");
    const env = { ...process.env }; delete env.PCR_LIBRARY;
    const result = execFileSync(process.execPath, [bin, "guidance", "--pcr", wheat, "--format", "json"], { cwd: installation, env, encoding: "utf8" });
    assert.equal(JSON.parse(result).readiness.status, "review_required");
    const consume = (...args) => JSON.parse(execFileSync(process.execPath, [bin, ...args, "--format", "json"], { cwd: installation, env, encoding: "utf8" }));
    const input = path.join(installation, "sowing.process.json");
    cpSync(path.join(root, "packages/pcr-core/fixtures/agentic-review/sowing.process.json"), input);
    const inspected = consume("inspect", "--input", input, "--section", "exchanges", "--page-size", "1");
    assert.equal(inspected.schema_validation, "not_performed");
    assert.equal(inspected.items.length, 1);
    assert.equal(inspected.pagination.has_more, true);
    const selected = consume("guidance", "--pcr", wheat, "--topic", "boundary", "--page-size", "1");
    assert.equal(selected.items.length, 1);
    const report = path.join(installation, "review.json");
    consume("review", "prepare", "--pcr", wheat, "--input", input, "--output", report);
    const checked = consume("review", "check", "--pcr", wheat, "--input", input, "--report", report);
    assert.equal(checked.envelope_valid, true);
    assert.equal(checked.report_status, "draft");
    assert.equal(checked.methodology_approval, false);
    const calculation = path.join(installation, "calculation.json");
    writeFileSync(calculation, JSON.stringify({ operation: "convert", amount: "2", factor: "1000", from_unit: "kg", to_unit: "g", basis: "same material", evidence: "definition of kilogram" }));
    assert.equal(consume("calculate", "--input", calculation).result.amount, 2000);
    const sibling = JSON.parse(execFileSync(process.execPath, [bin, "library", "info", "--format", "json"], { cwd: temp, env, encoding: "utf8" }));
    assert.equal(sibling.kind, "tiangong-pcr-library", "Scoped installation preserves the snapshot format identity.");
    assert.ok(existsSync(path.join(installation, "node_modules/@tiangong-lca/pcr/skills/tiangong-pcr/SKILL.md")));
    assert.equal(existsSync(path.join(installation, "node_modules/@tiangong-lca/pcr/library")), false);
    const dataPackage = JSON.parse(readFileSync(path.join(installation, "node_modules/@tiangong-lca/pcr-library/package.json")));
    assert.equal(dataPackage.scripts, undefined); assert.equal(dataPackage.dependencies, undefined);
    for (const [name, source] of [["@tiangong-lca/pcr", "tiangong-pcr-cli"], ["@tiangong-lca/pcr-library", "tiangong-pcr-library"]]) {
      const installed = path.join(installation, "node_modules", name);
      assert.equal(JSON.parse(readFileSync(path.join(installed, "package.json"))).name, name);
      assert.equal(JSON.parse(readFileSync(path.join(installed, "package.json"))).license, "MIT");
      assert.equal(readFileSync(path.join(installed, "LICENSE"), "utf8"), readFileSync(path.join(root, "LICENSE"), "utf8"));
      const readme = readFileSync(path.join(installed, "README.md"), "utf8");
      assert.equal(readme, readFileSync(path.join(root, "packages", source, "README.md"), "utf8"));
      assert.ok(readme.startsWith(`# ${name}\n`), "Each installed package needs its own consumer README.");
      assert.doesNotMatch(readFileSync(path.join(installed, "NOTICE.md"), "utf8"), /UNLICENSED|does not grant redistribution rights/u);
    }
    assert.equal(readFileSync(path.join(installation, "node_modules/@tiangong-lca/pcr/node_modules/ajv/LICENSE"), "utf8"), readFileSync(path.join(root, "node_modules/ajv/LICENSE"), "utf8"));
    rmSync(path.join(installation, "node_modules/@tiangong-lca/pcr-library"), { recursive: true });
    assert.throws(() => execFileSync(process.execPath, [bin, "list", "--format", "json"], { cwd: installation, env, encoding: "utf8", stdio: "pipe" }), (error) => {
      assert.equal(error.stdout, "");
      assert.match(error.stderr, /PCR_LIBRARY_REQUIRED/u);
      assert.match(error.stderr, /Install @tiangong-lca\/pcr-library/u);
      return true;
    });
  });
  await t.test("release tarballs preserve source provenance and install entirely offline", async () => {
    const toolVersion = JSON.parse(readFileSync(path.join(root, "packages/tiangong-pcr-cli/package.json"))).version;
    const libraryVersion = JSON.parse(readFileSync(path.join(root, "packages/tiangong-pcr-library/package.json"))).version;
    const toolOutput = path.join(temp, "release-tool"); const libraryOutput = path.join(temp, "release-library");
    const tool = await buildRelease(root, `pcr-v${toolVersion}`, toolOutput);
    const data = await buildRelease(root, `library-v${libraryVersion}`, libraryOutput);
    const installation = path.join(temp, "release-install"); mkdirSync(installation);
    writeFileSync(path.join(installation, "package.json"), '{"private":true}\n');
    execFileSync(process.execPath, [process.env.npm_execpath, "install", path.join(toolOutput, tool.filename), path.join(libraryOutput, data.filename), "--offline", "--ignore-scripts", "--no-audit", "--no-fund", "--cache", path.join(temp, "release-empty-cache")], { cwd: installation, env: { ...process.env, npm_config_registry: "http://127.0.0.1:1" }, stdio: "pipe" });
    for (const receipt of [tool, data]) {
      const pkg = JSON.parse(readFileSync(path.join(installation, "node_modules", receipt.name, "package.json")));
      assert.equal(pkg.version, receipt.version); assert.equal(pkg.gitHead, receipt.source_commit);
      assert.equal(pkg.repository.url, "git+https://github.com/tiangong-lca/pcr.git");
      assert.equal(pkg.private, undefined);
    }
    const bin = path.join(installation, "node_modules/@tiangong-lca/pcr/packages/tiangong-pcr-cli/bin/tiangong-pcr.mjs");
    const verified = JSON.parse(execFileSync(process.execPath, [bin, "library", "verify", "--library", path.join(libraryOutput, "library.sqlite"), "--format", "json"], { cwd: installation, encoding: "utf8" }));
    assert.equal(verified.verified, true);
    assert.ok(readFileSync(path.join(libraryOutput, "SHA256SUMS"), "utf8").includes("library.sqlite.json"));
  });
});
