import assert from "node:assert/strict";
import { execFileSync, spawn } from "node:child_process";
import { mkdtempSync, mkdirSync, readFileSync, readdirSync, rmSync, writeFileSync } from "node:fs";
import { tmpdir } from "node:os";
import path from "node:path";
import { fileURLToPath } from "node:url";
import test from "node:test";
import { registerMaterial, queryMaterials, readMaterial, resolveMaterialsRoot } from "./shared-materials.mjs";

const cli = fileURLToPath(new URL("../cli/materials.mjs", import.meta.url));
const use = { product: "wheat", process: "cultivation", route: "field", state: "grain", basis: "kg N", unit: "kg N2O-N", need: "nitrogen factor", purpose: "numeric" };
function fixture(t) {
  const dir = mkdtempSync(path.join(tmpdir(), "pcr-materials-test-"));
  t.after(() => rmSync(dir, { recursive: true, force: true }));
  const root = path.join(dir, "shared");
  const original = path.join(dir, "original.txt"), extracted = path.join(dir, "extract.txt");
  writeFileSync(original, "Public test original\n1 kg N per reference basis\nFootnote: field only\n");
  writeFileSync(extracted, readFileSync(original));
  const input = {
    source: { title: "Test source (synthetic)", doi: "https://doi.org/10.1234/EXAMPLE", version: "2025 edition" },
    tags: ["wheat", "barley", "cultivation", "nitrogen factor"],
    original: { path: original, acquired_at: "2026-09-09T01:00:00Z", media_type: "text/plain" },
  };
  const first = registerMaterial({ root, input });
  input.extraction = { path: extracted, source_sha256: first.record.original.sha256, tool: { name: "fixture", version: "1", options: "all lines" }, extracted_at: "2026-09-09T01:01:00Z" };
  input.fragments = [{ id: "factor", start_line: 2, end_line: 3, locator: { paragraph: "2 and footnote" }, needs: [use.need], applicability: { product: ["wheat", "barley"], process: ["cultivation"], route: ["field"], state: ["grain"], basis: ["kg N"], unit: ["kg N2O-N"], limitations: "Synthetic test only; not scientific evidence." }, kind: "original_fact", values: [{ raw: "1", unit: "kg N", basis: "reference basis" }], verification: { by: "test fixture", at: "2026-09-09T01:02:00Z", method: "synthetic original comparison" } }];
  return { dir, root, input, first };
}

test("another task discovers and reads only a verified, version-bound fragment; hits never mean adoption", t => {
  const { root, input } = fixture(t);
  const saved = registerMaterial({ root, input });
  const found = queryMaterials({ root, request: { ...use, product: "barley" }, limit: 2 });
  assert.ok(found.candidates.some(c => c.id === saved.id));
  assert.equal(found.adopted_evidence_count, null);
  const read = readMaterial({ root, id: saved.id, fragment: "factor", request: { ...use, product: "barley" } });
  assert.equal(read.state, "fragment_verified");
  assert.equal(read.reuse_original, true);
  assert.equal(read.reuse_extraction, true);
  assert.equal(read.numeric_reuse, "agent_confirmation_required");
  assert.equal(read.excerpt, "1 kg N per reference basis\nFootnote: field only");
  assert.deepEqual(read.locator, { paragraph: "2 and footnote" });
  assert.match(read.binding.original_sha256, /^[a-f0-9]{64}$/);
  assert.equal(read.covered, false);
});

test("metadata-only and original-only remain gaps; one verified fragment never verifies the whole source", t => {
  const { root, input, first } = fixture(t);
  const meta = registerMaterial({ root, input: { source: input.source, tags: input.tags } });
  assert.equal(readMaterial({ root, id: meta.id }).state, "metadata_only");
  assert.ok(readMaterial({ root, id: meta.id }).gaps.includes("acquire_original"));
  assert.equal(readMaterial({ root, id: first.id }).state, "original_available");
  assert.ok(readMaterial({ root, id: first.id }).gaps.includes("extract_relevant_content"));
  const saved = registerMaterial({ root, input });
  assert.equal(readMaterial({ root, id: saved.id }).state, "extracted_unverified");
  assert.throws(() => readMaterial({ root, id: saved.id, startLine: 1, endLine: 5000 }), /bound/i);
});

test("product, process, route, state, unit and basis mismatches block numeric reuse", t => {
  const { root, input } = fixture(t);
  const { id } = registerMaterial({ root, input });
  for (const field of ["product", "process", "route", "state", "basis", "unit"]) {
    const read = readMaterial({ root, id, fragment: "factor", request: { ...use, [field]: "different" } });
    assert.equal(read.numeric_reuse, "blocked", field);
    assert.ok(read.gaps.includes(`applicability_mismatch:${field}`));
    assert.equal(read.reuse_original, true);
  }
  const unknown = readMaterial({ root, id, fragment: "factor", request: { product: "wheat" } });
  assert.equal(unknown.numeric_reuse, "blocked");
});

test("same DOI preserves different versions, hashes and extractor versions; repeat registration is idempotent", t => {
  const { root, input } = fixture(t);
  const a = registerMaterial({ root, input });
  const again = registerMaterial({ root, input: { ...input, source: { ...input.source, doi: "doi:10.1234/example" } } });
  assert.equal(a.id, again.id);
  assert.equal(again.created, false);
  const b = registerMaterial({ root, input: { ...input, source: { ...input.source, version: "2026 edition" } } });
  assert.notEqual(a.id, b.id);
  assert.equal(a.record.source.id, b.record.source.id);
  assert.equal(a.record.original.path, b.record.original.path);
  assert.ok(queryMaterials({ root, request: { doi: "https://doi.org/10.1234/EXAMPLE" } }).candidates.some(c => c.id === a.id));
  const changed = structuredClone(input);
  changed.extraction.tool.version = "2";
  assert.notEqual(registerMaterial({ root, input: changed }).id, a.id);
  assert.throws(() => registerMaterial({ root, input: { source: { title: "Test source" } } }), /DOI|URL/);
});

test("missing files, changed originals, invalid extraction and required version never silently reuse", t => {
  const { root, input } = fixture(t);
  const saved = registerMaterial({ root, input });
  const stale = readMaterial({ root, id: saved.id, fragment: "factor", request: { ...use, extractor: { name: "fixture", version: "2", options: "all lines" } } });
  assert.equal(stale.reuse_original, true);
  assert.equal(stale.reuse_extraction, false);
  assert.equal(stale.excerpt, undefined);
  assert.ok(stale.gaps.includes("extraction_version_mismatch"));
  const version = readMaterial({ root, id: saved.id, request: { required_version: "new edition" } });
  assert.equal(version.reuse_original, false);
  assert.ok(version.gaps.includes("source_version_mismatch"));
  writeFileSync(saved.record.original.path, "tampered");
  const changed = readMaterial({ root, id: saved.id, fragment: "factor", request: use });
  assert.equal(changed.reuse_extraction, false);
  assert.equal(changed.excerpt, undefined);
  assert.ok(changed.gaps.includes("original_hash_mismatch"));
  rmSync(saved.record.original.path);
  assert.ok(readMaterial({ root, id: saved.id }).gaps.includes("original_missing"));
});

test("invalid bindings and verification without locator or limitations are rejected before indexing", t => {
  const { root, input } = fixture(t);
  const bad = structuredClone(input);
  bad.extraction.source_sha256 = "0".repeat(64);
  assert.throws(() => registerMaterial({ root, input: bad }), /source_sha256/);
  delete input.fragments[0].locator;
  assert.throws(() => registerMaterial({ root, input }), /locator/);
  assert.equal(queryMaterials({ root, request: use }).candidates.length, 1);
});

test("changed bytes create a separate version; damaged extraction never damages reusable original", t => {
  const { root, input } = fixture(t);
  const a = registerMaterial({ root, input });
  writeFileSync(input.original.path, "New publisher bytes under the same edition\n");
  const b = registerMaterial({ root, input: { source: input.source, tags: input.tags, original: input.original } });
  assert.notEqual(a.id, b.id);
  assert.equal(a.record.source.id, b.record.source.id);
  assert.notEqual(a.record.original.sha256, b.record.original.sha256);
  assert.equal(readMaterial({ root, id: a.id, fragment: "factor", request: use }).state, "fragment_verified");
  // The fixture text equals its original; use a distinct extraction to exercise dependency direction.
  const extractionPath = input.extraction.path;
  writeFileSync(extractionPath, "New extraction\n");
  const c = registerMaterial({ root, input: { source: input.source, tags: input.tags, original: input.original, extraction: { ...input.extraction, source_sha256: b.record.original.sha256 } } });
  rmSync(c.record.extraction.path);
  const missing = readMaterial({ root, id: c.id });
  assert.equal(missing.reuse_original, true);
  assert.equal(missing.reuse_extraction, false);
  assert.ok(missing.gaps.includes("extraction_missing"));
  assert.ok(missing.gaps.includes("extract_relevant_content"));
});

test("query and reads are bounded, empty applicability cannot yield numeric reuse, relative environment roots fail", t => {
  const { root, input } = fixture(t);
  input.fragments[0].applicability.unit = [];
  const a = registerMaterial({ root, input });
  const result = readMaterial({ root, id: a.id, fragment: "factor", request: use });
  assert.equal(result.numeric_reuse, "blocked");
  assert.ok(result.gaps.includes("applicability_unknown:unit"));
  assert.throws(() => queryMaterials({ root, request: use, limit: 21 }), /bound/);
  assert.throws(() => resolveMaterialsRoot({ env: { TIANGONG_PCR_MATERIALS_DIR: "relative-cache" } }), /absolute/);
  assert.equal(queryMaterials({ root, request: use, limit: 1 }).next_offset, 1);
});

test("two real Git worktrees resolve the same store, with CLI override available", t => {
  const { dir } = fixture(t);
  const repo = path.join(dir, "repo"); mkdirSync(repo);
  const git = args => execFileSync("git", args, { cwd: repo, stdio: "pipe", encoding: "utf8" }).trim();
  git(["init", "-q"]); git(["-c", "user.name=Test", "-c", "user.email=test@example.invalid", "commit", "--allow-empty", "-qm", "init"]);
  const a = path.join(dir, "a"), b = path.join(dir, "b");
  git(["worktree", "add", "--detach", a]); git(["worktree", "add", "--detach", b]);
  const run = (cwd, args) => JSON.parse(execFileSync(process.execPath, [cli, ...args], { cwd, encoding: "utf8", env: { ...process.env, TIANGONG_PCR_MATERIALS_DIR: "" } }));
  const input = path.join(dir, "meta.json");
  writeFileSync(input, JSON.stringify({ source: { title: "Shared wheat source", url: "https://example.org/source#section", version: "1" }, tags: ["wheat"] }));
  const registered = run(a, ["register", "--input", input]);
  const found = run(b, ["query", "--product", "wheat"]);
  assert.equal(found.root, registered.root);
  assert.equal(found.candidates[0].id, registered.id);
  assert.equal(found.root, resolveMaterialsRoot({ cwd: repo, env: {} }));
  assert.equal(resolveMaterialsRoot({ cwd: repo, root: "../override", env: {} }), path.join(dir, "override"));
});

test("concurrent CLI writers preserve duplicates and distinct versions; incomplete files are never candidates", async t => {
  const { root, dir, input } = fixture(t);
  const run = (file) => new Promise((resolve, reject) => {
    const child = spawn(process.execPath, [cli, "register", "--root", root, "--input", file]);
    let out = "", err = "";
    child.stdout.on("data", data => out += data); child.stderr.on("data", data => err += data);
    child.on("error", reject); child.on("exit", code => code === 0 ? resolve(JSON.parse(out)) : reject(new Error(err)));
  });
  const files = ["1", "1", "2", "3"].map((version, index) => {
    const file = path.join(dir, `request-${index}.json`);
    writeFileSync(file, JSON.stringify({ ...input, source: { ...input.source, version } })); return file;
  });
  const results = await Promise.all(files.map(run));
  assert.equal(results[0].id, results[1].id);
  assert.equal(new Set(results.map(x => x.id)).size, 3);
  writeFileSync(path.join(root, "records", ".interrupted.tmp"), "{");
  const found = queryMaterials({ root, request: use });
  assert.equal(found.total_candidates, 4);
  assert.equal(found.issues.length, 0);
  const file = readdirSync(path.join(root, "records")).find(f => f.endsWith(".json"));
  writeFileSync(path.join(root, "records", file), "{}");
  assert.equal(queryMaterials({ root, request: use }).issues[0].code, "record_invalid");
});
