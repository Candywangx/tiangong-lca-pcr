import assert from "node:assert/strict";
import { existsSync, readFileSync, writeFileSync } from "node:fs";
import path from "node:path";
import test from "node:test";
import { runTiangongPcr, type CliResult } from "./src/commands.ts";
import { buildGuidance, getVerifiedPcrProjection, readPcrDistributionSnapshot } from "../pcr-core/src/index.ts";
import { selectGuidanceFromSnapshot } from "../pcr-core/src/consumption-guidance.ts";
import { readJsonDocument } from "../pcr-core/src/consumption-data.ts";
import { createReadSessionFixture, sealTinyLibrary, sessionTemporaryRoot } from "../pcr-core/fixtures/read-session-fixture.ts";
import { isUnknownRecord } from "../pcr-core/src/types.ts";

function object(value: unknown): Record<string, unknown> { assert.ok(isUnknownRecord(value)); return value; }
function array(value: unknown): unknown[] { assert.ok(Array.isArray(value)); return value; }
function string(value: unknown): string { assert.equal(typeof value, "string"); return value as string; }
function json(text: string): Record<string, unknown> { const value: unknown = JSON.parse(text); return object(value); }
function successful(result: CliResult): Record<string, unknown> { assert.equal(result.exitCode, 0, result.stderr); assert.equal(result.stderr, ""); return json(result.stdout); }
function failure(result: CliResult, code?: string): Record<string, unknown> {
  assert.equal(result.exitCode, 1); assert.equal(result.stdout, ""); const error = object(json(result.stderr).error);
  if (code !== undefined) assert.equal(error.code, code); return error;
}
function request(root: string, ids: readonly string[], name = "request.json"): string {
  const file = path.join(root, name); writeFileSync(file, JSON.stringify({ schema_version: 1, pcr_ids: ids })); return file;
}
function run(input: string, args: readonly string[] = []): CliResult { return runTiangongPcr(["guidance", "batch", "--input", input, ...args, "--format", "json"]); }
function itemId(item: unknown): string { const pcr = object(object(item).pcr); return string(pcr.id ?? pcr.pcr_id); }
function saved(result: CliResult): Record<string, unknown> { const receipt = successful(result); return json(readFileSync(string(receipt.artifact), "utf8")); }

test("guidance batch help exposes explicit request, source, complete selection and output contract", () => {
  const help = runTiangongPcr(["guidance", "batch", "--help", "--library", "/missing.sqlite"]);
  assert.equal(help.exitCode, 0); assert.equal(help.stderr, "");
  for (const pattern of [/Usage:.*guidance batch/u, /schema_version/u, /1-100/u, /duplicates/u, /No partial/u, /--output/u, /--topic/u, /--pointer/u, /Agent next step/u]) assert.match(help.stdout, pattern);
  assert.match(runTiangongPcr(["--help"]).stdout, /guidance batch --input/u);
});

test("batch schema and JSON failures precede opening a missing library", t => {
  const root = sessionTemporaryRoot(t); const input = path.join(root, "request.json");
  for (const value of [{}, { schema_version: "1", pcr_ids: ["pcr.one"] }, { schema_version: 1, pcr_ids: [] },
    { schema_version: 1, pcr_ids: [null] }, { schema_version: 1, pcr_ids: ["   "] },
    { schema_version: 1, pcr_ids: Array.from({ length: 101 }, () => "pcr.one") },
    { schema_version: 1, pcr_ids: ["pcr.one"], ignored: true }]) {
    writeFileSync(input, JSON.stringify(value));
    const error = failure(run(input, ["--library", "/missing.sqlite"]), "PCR_SCHEMA_INVALID");
    assert.doesNotMatch(string(error.message), /Cannot open offline library/u);
  }
  writeFileSync(input, "{"); failure(run(input, ["--library", "/missing.sqlite"]), "PCR_INPUT_JSON");
  failure(run(path.join(root, "missing.json"), ["--library", "/missing.sqlite"]), "PCR_INPUT_READ");
  writeFileSync(input, '{"schema_version":1,"pcr_ids":["pcr.one"]}');
  failure(run(input, ["--library", "/missing.sqlite", "--pcr", "pcr.one"]), "PCR_CLI_UNKNOWN_OPTION");
  const wrongFormat = runTiangongPcr(["guidance", "batch", "--input", input, "--format", "markdown"]);
  assert.equal(wrongFormat.exitCode, 1); assert.equal(wrongFormat.stdout, "");
  assert.match(wrongFormat.stderr, /^\[PCR_CLI_INVALID_CHOICE\].*Expected one of: json/u);
});

test("repository batch preserves full guidance, order, duplicates, exact input evidence and final statistics", t => {
  const fixture = createReadSessionFixture(t, { includeSecond: true }); const ids = [fixture.secondId, fixture.id, fixture.secondId];
  const input = request(fixture.root, ids); const output = path.join(fixture.root, "batch.json");
  const report = saved(run(input, ["--root", fixture.root, "--output", output]));
  assert.equal(report.schema_version, 2); assert.equal(report.guidance_kind, "tiangong-pcr-guidance-batch");
  assert.deepEqual(report.requested_ids, ids); assert.equal(report.count, 3);
  const items = array(report.items); assert.deepEqual(items.map(itemId), ids);
  for (const [index, id] of ids.entries()) assert.deepEqual(items[index], json(JSON.stringify(buildGuidance({ root: fixture.root, pcrId: id }))));
  const evidence = readJsonDocument(input); assert.deepEqual(report.input, { file: evidence.file, sha256: evidence.sha256, bytes: evidence.bytes });
  assert.deepEqual(report.statistics, { records_loaded: 2, cache_hits: 1, final_verifications: 2, alias_validations: 1 });
  assert.deepEqual(report.source, { kind: "repository", root: fixture.root });
});

test("SQLite selected batches bind one verified source and carry ordinary pinned per-PCR continuations", t => {
  const fixture = createReadSessionFixture(t, { includeSecond: true }); const ids = [fixture.secondId, fixture.id, fixture.secondId];
  const library = sealTinyLibrary(fixture.root, "batch.sqlite", [fixture.id, fixture.secondId].map(pcrId => readPcrDistributionSnapshot({ root: fixture.root, pcrId })), "0.1.0");
  const input = request(fixture.root, ids); const output = path.join(fixture.root, "selected.json");
  const report = saved(run(input, ["--library", library.filename, "--library-sha256", library.manifest.sha256, "--topic", "boundary", "--page-size", "1", "--output", output]));
  assert.deepEqual(array(report.items).map(itemId), ids); const source = object(report.source);
  assert.equal(source.kind, "library"); assert.equal(source.filename, library.filename); assert.equal(source.sha256, library.manifest.sha256); assert.equal(source.verified, true);
  assert.deepEqual(report.statistics, { records_loaded: 2, cache_hits: 1, final_verifications: 0, alias_validations: 0 });
  for (const item of array(report.items)) {
    const next = string(object(item).next_command); assert.match(next, /^tiangong-pcr guidance /u);
    assert.ok(next.includes(`--pcr ${itemId(item)}`)); assert.ok(next.includes(`--library ${library.filename}`));
    assert.ok(next.includes(`--library-sha256 ${library.manifest.sha256}`)); assert.match(next, /--page 2/u);
    assert.doesNotMatch(next, / batch |--input|--output/u);
  }
  const next = string(object(array(report.items)[0]).next_command);
  const following = successful(runTiangongPcr(next.split(" ").slice(1)));
  assert.equal(itemId(following), ids[0]); assert.equal(object(following.pagination).page, 2);
});

test("batch pointer reads preserve complete values and existing single guidance remains unchanged", t => {
  const fixture = createReadSessionFixture(t); const input = request(fixture.root, [fixture.id]);
  const pointer = "/reference_flow_definition/reference_amount";
  const report = successful(run(input, ["--root", fixture.root, "--pointer", pointer]));
  const actual = object(array(report.items)[0]);
  const selected = selectGuidanceFromSnapshot(getVerifiedPcrProjection({ root: fixture.root, pcrId: fixture.id }), { pointer });
  assert.ok("value" in selected); assert.deepEqual(actual.value, selected.value); assert.deepEqual(actual.source, selected.source);
  assert.equal(actual.next_command, null);
  const single = successful(runTiangongPcr(["guidance", "--root", fixture.root, "--pcr", fixture.id, "--format", "json"]));
  assert.deepEqual(single, json(JSON.stringify(buildGuidance({ root: fixture.root, pcrId: fixture.id }))));
});

test("any batch failure leaves output absent or byte-identical and existing files are never overwritten", t => {
  const fixture = createReadSessionFixture(t); const output = path.join(fixture.root, "output.json");
  const bad = request(fixture.root, [fixture.id, "pcr.missing"]);
  failure(run(bad, ["--root", fixture.root, "--output", output])); assert.equal(existsSync(output), false);
  writeFileSync(output, "retain existing bytes\n");
  failure(run(bad, ["--root", fixture.root, "--output", output])); assert.equal(readFileSync(output, "utf8"), "retain existing bytes\n");
  const good = request(fixture.root, [fixture.id], "good.json");
  failure(run(good, ["--root", fixture.root, "--output", output]), "PCR_CLI_OUTPUT_WRITE");
  assert.equal(readFileSync(output, "utf8"), "retain existing bytes\n");
});

test("large batches reject stdout overflow and exclusively save the complete requested result", t => {
  const fixture = createReadSessionFixture(t); const ids = Array.from({ length: 100 }, () => fixture.id); const input = request(fixture.root, ids);
  failure(run(input, ["--root", fixture.root]), "PCR_CLI_OUTPUT_LARGE");
  const output = path.join(fixture.root, "complete.json"); const report = saved(run(input, ["--root", fixture.root, "--output", output]));
  assert.equal(report.count, 100); assert.deepEqual(report.requested_ids, ids); assert.equal(array(report.items).length, 100);
  assert.equal(object(report.statistics).records_loaded, 1); assert.equal(object(report.statistics).cache_hits, 99);
});

test("batch retains PCR_LIBRARY discovery, explicit root precedence and checksum rejection", t => {
  const fixture = createReadSessionFixture(t); const library = sealTinyLibrary(fixture.root, "batch.sqlite", readPcrDistributionSnapshot({ root: fixture.root, pcrId: fixture.id }), "0.1.0");
  const input = request(fixture.root, [fixture.id]); const previous = process.env.PCR_LIBRARY;
  try {
    process.env.PCR_LIBRARY = library.filename;
    const fromEnvironment = successful(run(input, ["--pointer", "/reference_flow_definition/reference_amount"]));
    assert.equal(object(fromEnvironment.source).kind, "library"); assert.equal(object(fromEnvironment.source).filename, library.filename);
    process.env.PCR_LIBRARY = "/missing.sqlite";
    assert.equal(object(successful(run(input, ["--root", fixture.root, "--pointer", "/reference_flow_definition/reference_amount"])).source).kind, "repository");
    failure(run(input, ["--library", library.filename, "--library-sha256", `sha256:${"0".repeat(64)}`]), "PCR_LIBRARY_INVALID");
  } finally { if (previous === undefined) delete process.env.PCR_LIBRARY; else process.env.PCR_LIBRARY = previous; }
});

test("metadata-page list retains filters, pagination, continuations and huge-page CLI errors", t => {
  const fixture = createReadSessionFixture(t, { includeSecond: true });
  const list = (args: string[]) => runTiangongPcr(["list", "--root", fixture.root, ...args, "--format", "json"]);
  const first = successful(list(["--page-size", "1"])); assert.equal(first.total_count, 2); assert.equal(array(first.items).length, 1);
  assert.equal(first.page, 1); assert.equal(first.has_more, true); assert.match(string(first.next_command), /--page 2/u);
  const second = successful(list(["--page-size", "1", "--page", "2"])); assert.equal(second.total_count, 2); assert.equal(array(second.items).length, 1); assert.equal(second.has_more, false);
  assert.match(string(second.previous_command), /--page 1/u);
  const filtered = successful(list(["--path-prefix", "session/crops", "--status", "candidate"]));
  assert.equal(filtered.total_count, 1); assert.equal(object(array(filtered.items)[0]).id, fixture.secondId);
  assert.deepEqual(filtered.filters, { scope: "material", status: "candidate", content_maturity: null, path_prefix: "session/crops" });
  failure(list(["--page", "9007199254740991", "--page-size", "100"]), "PCR_CLI_PAGE_OUT_OF_RANGE");
});
