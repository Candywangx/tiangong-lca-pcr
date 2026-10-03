import assert from "node:assert/strict";
import { cpSync, mkdtempSync, readFileSync, rmSync, symlinkSync, writeFileSync } from "node:fs";
import { tmpdir } from "node:os";
import path from "node:path";
import test from "node:test";
import { atPointer, readJsonDocument, strictNumber } from "./src/consumption-data.ts";
import { calculate } from "./src/consumption-calculation.mjs";
import { selectGuidance } from "./src/consumption-guidance.ts";
import { checkReview, prepareReview } from "./src/consumption-review.mjs";
import { inspectTidas } from "./src/tidas-inspection.mjs";

const root = path.resolve(".");
const pcrId = "pcr.agriculture-forestry-and-fishery-products.products-of-agriculture-horticulture-and-market-gardening.wheat-other";
const fixtureDir = path.join(root, "packages/pcr-core/fixtures/agentic-review");
const input = path.join(fixtureDir, "sowing.process.json");
const model = path.join(fixtureDir, "wheat.model.json");
const args = { root, pcrId, input };

function temp(t) {
  const directory = mkdtempSync(path.join(tmpdir(), "pcr-review-test-"));
  t.after(() => rmSync(directory, { recursive: true, force: true }));
  return directory;
}

test("native process inspection preserves paths, absent values, scope and explicit validation limits", () => {
  const summary = inspectTidas({ input });
  assert.equal(summary.primary.kind, "process");
  assert.equal(summary.schema_validation, "not_performed");
  assert.equal(summary.counts.unresolved, 1);
  assert.match(summary.fields.find((field) => field.name === "technology").value.technologyDescriptionAndIncludedProcesses["#text"], /outside this process/u);
  assert.equal(Object.hasOwn(summary, "findings"), false);
  const exchanges = inspectTidas({ input, section: "exchanges", pageSize: 1, page: 2 });
  assert.equal(exchanges.items[0].value.meanAmount, null);
  const pointer = exchanges.items[0].source.pointer;
  assert.equal(pointer, "/processDataSet/exchanges/exchange/1");
  assert.deepEqual(inspectTidas({ input, pointer }).value, exchanges.items[0].value);
});

test("model inspection retains repeated instances and supplied connections without inventing missing stages", () => {
  const instances = inspectTidas({ input: model, related: fixtureDir, section: "instances" });
  assert.equal(instances.items.length, 3);
  assert.equal(instances.items[0].value.referenceToProcess["@refObjectId"], instances.items[1].value.referenceToProcess["@refObjectId"]);
  assert.equal(instances.items[0].value.connections.outputExchange.downstreamProcess["@id"], "3");
  const references = inspectTidas({ input: model, related: fixtureDir, section: "references" });
  assert.equal(references.items.filter((ref) => ref.status === "resolved").length, 2);
  assert.equal(references.items.find((ref) => ref.uuid.startsWith("44444444")).status, "missing");
  assert.equal(references.items.find((ref) => ref.uuid.startsWith("11111111")).version_selection, "exact");
});

test("local references refuse duplicate identities and wrong versions instead of silently choosing", (t) => {
  const related = temp(t);
  cpSync(input, path.join(related, "sowing-a.json"));
  cpSync(input, path.join(related, "sowing-b.json"));
  const references = () => inspectTidas({ input: model, related, section: "references" }).items.filter((ref) => ref.uuid.startsWith("11111111"));
  assert.equal(references()[0].status, "ambiguous");
  for (const file of ["sowing-a.json", "sowing-b.json"]) {
    const value = JSON.parse(readFileSync(input, "utf8"));
    value.processDataSet.administrativeInformation.publicationAndOwnership["common:dataSetVersion"] = "02.00.000";
    writeFileSync(path.join(related, file), JSON.stringify(value));
  }
  assert.equal(references()[0].status, "version_mismatch");
});

test("absent reference versions are disclosed while malformed versions remain unresolved", (t) => {
  const directory = temp(t);
  const file = path.join(directory, "model.json");
  const value = JSON.parse(readFileSync(model, "utf8"));
  const ref = value.lifeCycleModelDataSet.lifeCycleModelInformation.technology.processes.processInstance[0].referenceToProcess;
  delete ref["@version"];
  writeFileSync(file, JSON.stringify(value));
  const unversioned = inspectTidas({ input: file, related: fixtureDir, section: "references" }).items[0];
  assert.equal(unversioned.status, "resolved");
  assert.equal(unversioned.version_selection, "unspecified");
  ref["@version"] = null;
  writeFileSync(file, JSON.stringify(value));
  assert.equal(inspectTidas({ input: file, related: fixtureDir, section: "references" }).items[0].status, "unresolved_identity");
});

test("oversized inputs and over-capacity directories fail instead of returning partial evidence", (t) => {
  assert.throws(() => readJsonDocument(input, 1), { code: "PCR_INPUT_SIZE" });
  const directory = temp(t);
  for (let index = 0; index <= 200; index++) writeFileSync(path.join(directory, `${index}.json`), "{}");
  assert.throws(() => inspectTidas({ input, related: directory }), { code: "PCR_RELATED_LIMIT" });
});

test("related traversal refuses interior symlinks", { skip: process.platform === "win32" }, (t) => {
  const directory = temp(t);
  symlinkSync(input, path.join(directory, "linked.json"));
  assert.throws(() => inspectTidas({ input, related: directory }), { code: "PCR_RELATED_SYMLINK" });
});

test("singleton TIDAS items, unknown JSON, malformed inputs and explicit limits stay distinguishable", (t) => {
  const related = temp(t);
  const value = JSON.parse(readFileSync(input, "utf8"));
  value.processDataSet.exchanges.exchange = value.processDataSet.exchanges.exchange[0];
  const singleton = path.join(related, "singleton.json");
  writeFileSync(singleton, JSON.stringify(value));
  writeFileSync(path.join(related, "metadata.json"), '{"note":"not a dataset"}');
  const result = inspectTidas({ input: singleton, related, section: "exchanges" });
  assert.equal(result.items[0].source.pointer, "/processDataSet/exchanges/exchange");
  assert.equal(result.counts.ignored_json_files, 1);
  assert.throws(() => inspectTidas({ input, section: "instances" }), { code: "PCR_INSPECT_SECTION" });
  assert.throws(() => inspectTidas({ input, section: "exchanges", page: 999 }), { code: "PCR_PAGE_RANGE" });
  assert.throws(() => inspectTidas({ input: path.join(related, "metadata.json") }), { code: "PCR_TIDAS_SHAPE" });
  writeFileSync(path.join(related, "broken.json"), "{");
  assert.throws(() => inspectTidas({ input, related }), { code: "PCR_INPUT_JSON" });
});

test("JSON pointers resolve escaped keys, preserve null and reject inherited or malformed paths", () => {
  const value = JSON.parse('{"a/b":{"~x":null},"arr":[0],"__proto__":{"safe":true}}');
  assert.equal(atPointer(value, "/a~1b/~0x"), null);
  assert.equal(atPointer(value, "/__proto__/safe"), true);
  for (const pointer of ["/toString", "/arr/length", "/arr/00", "/missing"]) assert.throws(() => atPointer(value, pointer), { code: "PCR_POINTER_NOT_FOUND" });
  assert.throws(() => atPointer(value, "/a~2b"), { code: "PCR_POINTER_INVALID" });
});

test("selected PCR guidance binds original rules and applicability to reproducible projection citations", () => {
  const result = selectGuidance({ root, pcrId, topic: "boundary", pageSize: 1 });
  assert.equal(result.pagination.has_more, true);
  assert.equal(result.items[0].rule_id, "boundary_crop_cycle");
  assert.equal(result.items[0].value.applies_to, "foreground_system_boundary");
  assert.match(result.pcr.projection_sha256, /^sha256:/u);
  assert.equal(result.readiness.status, "review_required");
  const full = selectGuidance({ root, pcrId, pointer: result.items[0].source.pointer });
  assert.deepEqual(full.value, result.items[0].value);
  assert.deepEqual(full.source, result.items[0].source);
  assert.throws(() => selectGuidance({ root, pcrId, topic: "__proto__" }), { code: "PCR_GUIDANCE_TOPIC" });
});

test("review preparation stays unreviewed; shape validity never approves the methodology", () => {
  const report = prepareReview(args);
  assert.equal(report.status, "draft");
  assert.equal(report.findings.length, 0);
  assert.ok(report.coverage.every((entry) => entry.status === "not_reviewed"));
  const check = checkReview({ ...args, report });
  assert.deepEqual(check.issues, []);
  assert.equal(check.envelope_valid, true);
  assert.equal(check.methodology_approval, false);
  assert.ok(check.not_checked.includes("truth of observations or conclusions"));
});

function reviewedReport() {
  const report = prepareReview(args);
  report.status = "reviewed";
  report.coverage[0] = { topic: "scope_and_applicability", status: "reviewed", rationale: "The supplied process covers sowing only. The whole crop cycle cannot be assessed here." };
  report.findings.push({
    id: "missing-seed-quantity", kind: "evidence_gap", severity: "warning",
    observation: "The seed input has null meanAmount.", rationale: "No measured seed quantity is provided; null does not establish zero consumption.",
    input_refs: [inspectTidas({ input, pointer: "/processDataSet/exchanges/exchange/1/meanAmount" }).source],
    pcr_refs: [selectGuidance({ root, pcrId, topic: "boundary" }).items[4].source],
    suggested_action: "Collect the seed use for the declared sowing area.", questions: ["What measured seed quantity belongs to this operation?"],
  });
  return report;
}

test("Agent findings bind existing input/PCR pointers and fail on stale or fabricated evidence", () => {
  const report = reviewedReport();
  assert.equal(checkReview({ ...args, report }).envelope_valid, true);
  report.findings[0].input_refs[0].pointer = "/processDataSet/nonexistent";
  assert.ok(checkReview({ ...args, report }).issues.some((issue) => issue.code === "input_pointer"));
  report.findings[0].pcr_refs[0].projection_sha256 = `sha256:${"0".repeat(64)}`;
  assert.ok(checkReview({ ...args, report }).issues.some((issue) => issue.code === "pcr_reference_changed"));
  report.inputs[0].sha256 = `sha256:${"0".repeat(64)}`;
  assert.ok(checkReview({ ...args, report }).issues.some((issue) => issue.code === "inputs_changed"));
});

test("report shape, duplicate findings, omitted context and unreviewed coverage are independently diagnosed", () => {
  assert.equal(checkReview({ ...args, report: {} }).envelope_valid, false);
  const report = reviewedReport();
  report.findings.push(structuredClone(report.findings[0]));
  report.coverage.forEach((entry) => { entry.status = "not_reviewed"; });
  const result = checkReview({ ...args, report, related: fixtureDir });
  assert.ok(result.issues.some((issue) => issue.code === "duplicate_finding"));
  assert.ok(result.issues.some((issue) => issue.code === "review_empty"));
  assert.ok(result.issues.some((issue) => issue.code === "inputs_changed"));
});

test("normalization, conversion and balance calculate explicit bases without inventing quantities or verdicts", () => {
  const common = { basis: "same moisture, geography and gate", evidence: "synthetic known-quantity test vector" };
  const normalized = calculate({ ...common, operation: "normalize", amount: "50", unit: "kg N", source_reference: 1000, target_reference: 1, reference_unit: "kg grain" });
  assert.equal(normalized.result.amount, 0.05);
  assert.equal(calculate({ ...common, operation: "convert", amount: 2, factor: 1000, from_unit: "kg", to_unit: "g" }).result.amount, 2000);
  const balanced = calculate({ ...common, operation: "balance", inputs: [{ label: "in", amount: 10 }], outputs: [{ label: "out", amount: 8 }], accumulation: 1, unit: "kg dry matter" });
  assert.equal(balanced.result.residual, 1);
  assert.equal(Object.hasOwn(balanced, "passed"), false);
  assert.throws(() => calculate({ ...common, operation: "normalize", amount: null }), { code: "PCR_NUMBER_INVALID" });
  for (const value of [null, "", " ", true, "1 kg", "NaN", Infinity, "0x10"]) assert.throws(() => strictNumber(value, "amount"), { code: "PCR_NUMBER_INVALID" });
  assert.equal(strictNumber("0", "amount"), 0);
  assert.throws(() => calculate({ ...common, operation: "convert", amount: 1e308, factor: 1000, from_unit: "kg", to_unit: "g" }), { code: "PCR_CALCULATION_OVERFLOW" });
});

test("source bindings are exact-byte hashes even when JSON meaning stays the same", (t) => {
  const file = path.join(temp(t), "input.json");
  writeFileSync(file, '{"a":1}');
  const before = readJsonDocument(file).sha256;
  writeFileSync(file, '{ "a": 1 }');
  assert.notEqual(readJsonDocument(file).sha256, before);
});
