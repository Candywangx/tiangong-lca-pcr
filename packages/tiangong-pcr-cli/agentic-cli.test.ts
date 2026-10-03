import assert from "node:assert/strict";
import { mkdtempSync, readFileSync, rmSync, writeFileSync } from "node:fs";
import { tmpdir } from "node:os";
import path from "node:path";
import test, { type TestContext } from "node:test";
import { runTiangongPcr, type CliResult } from "./src/commands.ts";

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

const pcr = "pcr.agriculture-forestry-and-fishery-products.products-of-agriculture-horticulture-and-market-gardening.wheat-other";
const input = path.join(root, "packages/pcr-core/fixtures/agentic-review/sowing.process.json");
const cli = (...args: string[]): CliResult => runTiangongPcr(["--root", root, ...args, "--format", "json"]);
const data = (result: CliResult): Record<string, unknown> => { assert.equal(result.exitCode, 0, result.stderr || result.stdout); return json(result.stdout); };
function temp(t: TestContext): string {
  const dir = mkdtempSync(path.join(tmpdir(), "pcr-review-cli-"));
  t.after(() => rmSync(dir, { recursive: true, force: true }));
  return dir;
}

test("new command help describes inputs, limits and continuation without opening a library", () => {
  for (const command of [["inspect"], ["calculate"], ["review"], ["review", "prepare"], ["review", "check"], ["guidance"]]) {
    const result = runTiangongPcr([...command, "--help", "--library", "/nonexistent.sqlite"]);
    assert.equal(result.exitCode, 0);
    match(result.stdout, /Usage:/u);
    match(result.stdout, /[Nn]ext/u);
  }
  match(runTiangongPcr(["validate-model", "--help"]).stdout, /text.*presence|text; this/u);
  match(runTiangongPcr(["validate-dataset", "--help"]).stdout, /protocol ID presence/u);
});

test("inspection works independently of library provisioning and carries source pagination", () => {
  const result = data(runTiangongPcr(["inspect", "--input", input, "--section", "exchanges", "--page-size", "1", "--format", "json"]));
  assert.equal(array(result.items).length, 1);
  assert.equal(record(result.pagination).has_more, true);
  match(result.next_command, /--page 2/u);
  match(result.next_command, /--section exchanges/u);
  assert.equal(result.schema_validation, "not_performed");
  assert.equal(runTiangongPcr(["inspect", "--input", input, "--library", "/ignored.sqlite"]).exitCode, 1);
});

test("usage and input errors preserve clean JSON stdout/stderr channels", () => {
  for (const args of [
    ["inspect", "--input", input, "--section", "wrong"],
    ["inspect", "--input", input, "--pointer", "/processDataSet", "--page", "2"],
    ["inspect", "--input", input, "--page", "2"],
    ["inspect", "--input", "/nonexistent.json"],
    ["inspect", "--input", input, "--page-size", "101", "--section", "references"],
    ["calculate", "--bogus", "x"],
    ["review"],
  ]) {
    const result = cli(...args);
    assert.equal(result.exitCode, 1, JSON.stringify(args));
    assert.equal(result.stdout, "");
    match(errorEnvelope(result.stderr).code, /^PCR_/u);
  }
});

test("guidance selection retains source selection in follow-up commands and legacy full output", () => {
  const selected = data(cli("guidance", "--pcr", pcr, "--topic", "boundary", "--page-size", "1"));
  match(selected.next_command, /--topic boundary/u);
  match(selected.next_command, /--root/u);
  assert.equal(record(array(selected.items)[0]).rule_id, "boundary_crop_cycle");
  const full = data(cli("guidance", "--pcr", pcr));
  assert.equal(full.guidance_kind, "tiangong-pcr-agent-guidance");
  assert.ok(array(record(full.production_guidance).collection_protocols).length);
});

test("review artifacts use exclusive file creation and distinguish draft envelope validity from approval", (t) => {
  const output = path.join(temp(t), "review.json");
  const prepared = data(cli("review", "prepare", "--pcr", pcr, "--input", input, "--output", output));
  assert.equal(prepared.artifact, output);
  const bytes = readFileSync(output, "utf8");
  assert.equal(json(bytes).status, "draft");
  assert.equal(cli("review", "prepare", "--pcr", pcr, "--input", input, "--output", output).exitCode, 1);
  assert.equal(readFileSync(output, "utf8"), bytes);
  const checked = data(cli("review", "check", "--pcr", pcr, "--input", input, "--report", output));
  assert.equal(checked.envelope_valid, true);
  assert.equal(checked.report_status, "draft");
  assert.equal(checked.methodology_approval, false);
  writeFileSync(output, "{}");
  const failed = cli("review", "check", "--pcr", pcr, "--input", input, "--report", output);
  assert.equal(failed.exitCode, 2);
  assert.equal(failed.stderr, "");
  assert.equal(json(failed.stdout).envelope_valid, false);
});

test("large full-pointer reads require file output and never silently truncate", (t) => {
  const directory = temp(t);
  const large = path.join(directory, "large.json");
  const value = json(readFileSync(input, "utf8"));
  record(record(value.processDataSet).processInformation).technology = { note: "A".repeat(40000) };
  writeFileSync(large, JSON.stringify(value));
  const args = ["inspect", "--input", large, "--pointer", "/processDataSet/processInformation/technology"];
  const failure = cli(...args);
  assert.equal(failure.exitCode, 1);
  assert.equal(errorEnvelope(failure.stderr).code, "PCR_CLI_OUTPUT_LARGE");
  const saved = path.join(directory, "complete.json");
  data(cli(...args, "--output", saved));
  assert.equal(string(record(json(readFileSync(saved, "utf8")).value).note).length, 40000);
});

test("calculation requests retain exact input evidence and refuse unknown values", (t) => {
  const input = path.join(temp(t), "calculation.json");
  writeFileSync(input, JSON.stringify({ operation: "convert", amount: "2", factor: "1000", from_unit: "kg", to_unit: "g", basis: "same material", evidence: "definition of kilogram" }));
  const result = data(cli("calculate", "--input", input));
  assert.equal(record(result.result).amount, 2000);
  match(record(result.request_source).sha256, /^sha256:/u);
  writeFileSync(input, '{"operation":"convert","amount":null}');
  assert.equal(cli("calculate", "--input", input).exitCode, 1);
});
