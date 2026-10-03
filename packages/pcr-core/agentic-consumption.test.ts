import assert from 'node:assert/strict';
import { cpSync, mkdtempSync, rmSync, symlinkSync, writeFileSync } from 'node:fs';
import { tmpdir } from 'node:os';
import path from 'node:path';
import test, { type TestContext } from 'node:test';
import { atPointer, readJsonDocument, strictNumber, object as isRecordData } from './src/consumption-data.ts';
import { calculate } from './src/consumption-calculation.ts';
import { inspectTidas, type SelectedItem } from './src/tidas-inspection.ts';

import { selectGuidance } from './src/consumption-guidance.ts';
import { checkReview, prepareReview, type AgentReviewFinding } from './src/consumption-review.ts';
import { isUnknownRecord } from './src/types.ts';

const fixtureDir = path.resolve('packages/pcr-core/fixtures/agentic-review');
const input = path.join(fixtureDir, 'sowing.process.json');
const model = path.join(fixtureDir, 'wheat.model.json');
function temp(t: TestContext): string {
  const directory = mkdtempSync(path.join(tmpdir(), 'pcr-agentic-core-'));
  t.after(() => rmSync(directory, { recursive: true, force: true }));
  return directory;
}
function record(value: unknown): Record<string, unknown> { assert.ok(isRecordData(value)); return value; }
function selected(item: SelectedItem | undefined): unknown { assert.ok(item && !item.truncated); return item.value; }
function first<T>(items: readonly T[]): T { const item = items[0]; assert.ok(item !== undefined); return item; }

test('native process inspection preserves paths, absent values, scope and explicit validation limits', () => {
  const summary = inspectTidas({ input });
  assert.equal(summary.primary.kind, 'process');
  assert.equal(summary.schema_validation, 'not_performed');
  assert.equal(summary.counts.unresolved, 1);
  const technology = summary.fields.find(field => field.name === 'technology');
  const text = atPointer(selected(technology), '/technologyDescriptionAndIncludedProcesses/#text');
  assert.equal(typeof text, 'string');
  assert.match(String(text), /outside this process/u);
  assert.equal(Object.hasOwn(summary, 'findings'), false);
  const exchanges = inspectTidas({ input, section: 'exchanges', pageSize: 1, page: 2 });
  const exchange = first(exchanges.items);
  assert.equal(atPointer(selected(exchange), '/meanAmount'), null);
  assert.equal(exchange.source.pointer, '/processDataSet/exchanges/exchange/1');
  assert.deepEqual(inspectTidas({ input, pointer: exchange.source.pointer }).value, selected(exchange));
});

test('model inspection retains repeated instances and supplied connections without inventing missing stages', () => {
  const instances = inspectTidas({ input: model, related: fixtureDir, section: 'instances' });
  assert.equal(instances.items.length, 3);
  assert.equal(atPointer(selected(instances.items[0]), '/referenceToProcess/@refObjectId'), atPointer(selected(instances.items[1]), '/referenceToProcess/@refObjectId'));
  assert.equal(atPointer(selected(instances.items[0]), '/connections/outputExchange/downstreamProcess/@id'), '3');
  const references = inspectTidas({ input: model, related: fixtureDir, section: 'references' });
  assert.equal(references.items.filter(ref => ref.status === 'resolved').length, 2);
  assert.equal(references.items.find(ref => typeof ref.uuid === 'string' && ref.uuid.startsWith('44444444'))?.status, 'missing');
  assert.equal(references.items.find(ref => typeof ref.uuid === 'string' && ref.uuid.startsWith('11111111'))?.version_selection, 'exact');
});

test('local references refuse duplicate identities and wrong versions instead of silently choosing', t => {
  const related = temp(t);
  cpSync(input, path.join(related, 'sowing-a.json')); cpSync(input, path.join(related, 'sowing-b.json'));
  const references = () => inspectTidas({ input: model, related, section: 'references' }).items.filter(ref => typeof ref.uuid === 'string' && ref.uuid.startsWith('11111111'));
  assert.equal(first(references()).status, 'ambiguous');
  for (const name of ['sowing-a.json', 'sowing-b.json']) {
    const value = readJsonDocument(input).value;
    record(atPointer(value, '/processDataSet/administrativeInformation/publicationAndOwnership'))['common:dataSetVersion'] = '02.00.000';
    writeFileSync(path.join(related, name), JSON.stringify(value));
  }
  assert.equal(first(references()).status, 'version_mismatch');
});

test('absent reference versions are disclosed while malformed versions remain unresolved', t => {
  const directory = temp(t), filename = path.join(directory, 'model.json');
  const value = readJsonDocument(model).value;
  const ref = record(atPointer(value, '/lifeCycleModelDataSet/lifeCycleModelInformation/technology/processes/processInstance/0/referenceToProcess'));
  delete ref['@version']; writeFileSync(filename, JSON.stringify(value));
  const unversioned = first(inspectTidas({ input: filename, related: fixtureDir, section: 'references' }).items);
  assert.equal(unversioned.status, 'resolved'); assert.equal(unversioned.version_selection, 'unspecified');
  ref['@version'] = null; writeFileSync(filename, JSON.stringify(value));
  assert.equal(first(inspectTidas({ input: filename, related: fixtureDir, section: 'references' }).items).status, 'unresolved_identity');
});

test('oversized inputs and over-capacity directories fail instead of returning partial evidence', t => {
  assert.throws(() => readJsonDocument(input, 1), { code: 'PCR_INPUT_SIZE' });
  const directory = temp(t);
  for (let index = 0; index <= 200; index++) writeFileSync(path.join(directory, `${index}.json`), '{}');
  assert.throws(() => inspectTidas({ input, related: directory }), { code: 'PCR_RELATED_LIMIT' });
});

test('related traversal refuses interior symlinks', { skip: process.platform === 'win32' }, t => {
  const directory = temp(t); symlinkSync(input, path.join(directory, 'linked.json'));
  assert.throws(() => inspectTidas({ input, related: directory }), { code: 'PCR_RELATED_SYMLINK' });
});

test('singleton TIDAS items, unknown JSON, malformed inputs and explicit limits stay distinguishable', t => {
  const related = temp(t), value = readJsonDocument(input).value;
  record(atPointer(value, '/processDataSet/exchanges')).exchange = atPointer(value, '/processDataSet/exchanges/exchange/0');
  const singleton = path.join(related, 'singleton.json'); writeFileSync(singleton, JSON.stringify(value));
  writeFileSync(path.join(related, 'metadata.json'), '{"note":"not a dataset"}');
  const result = inspectTidas({ input: singleton, related, section: 'exchanges' });
  assert.equal(first(result.items).source.pointer, '/processDataSet/exchanges/exchange');
  assert.equal(result.counts.ignored_json_files, 1);
  assert.throws(() => inspectTidas({ input, section: 'instances' }), { code: 'PCR_INSPECT_SECTION' });
  assert.throws(() => inspectTidas({ input, section: 'exchanges', page: 999 }), { code: 'PCR_PAGE_RANGE' });
  assert.throws(() => inspectTidas({ input: path.join(related, 'metadata.json') }), { code: 'PCR_TIDAS_SHAPE' });
  writeFileSync(path.join(related, 'broken.json'), '{');
  assert.throws(() => inspectTidas({ input, related }), { code: 'PCR_INPUT_JSON' });
});

test('JSON pointers resolve escaped keys, preserve null and reject inherited or malformed paths', () => {
  const value: unknown = JSON.parse('{"a/b":{"~x":null},"arr":[0],"__proto__":{"safe":true}}');
  assert.equal(atPointer(value, '/a~1b/~0x'), null); assert.equal(atPointer(value, '/__proto__/safe'), true);
  for (const pointer of ['/toString', '/arr/length', '/arr/00', '/missing']) assert.throws(() => atPointer(value, pointer), { code: 'PCR_POINTER_NOT_FOUND' });
  assert.throws(() => atPointer(value, '/a~2b'), { code: 'PCR_POINTER_INVALID' });
});

test('normalization, conversion and balance calculate explicit bases without inventing quantities or verdicts', () => {
  const common = { basis: 'same moisture, geography and gate', evidence: 'synthetic known-quantity test vector' };
  const normalized = calculate({ ...common, operation: 'normalize', amount: '50', unit: 'kg N', source_reference: 1000, target_reference: 1, reference_unit: 'kg grain' });
  assert.ok('amount' in normalized.result); assert.equal(normalized.result.amount, 0.05);
  const converted = calculate({ ...common, operation: 'convert', amount: 2, factor: 1000, from_unit: 'kg', to_unit: 'g' });
  assert.ok('amount' in converted.result); assert.equal(converted.result.amount, 2000);
  const balanced = calculate({ ...common, operation: 'balance', inputs: [{ label: 'in', amount: 10 }], outputs: [{ label: 'out', amount: 8 }], accumulation: 1, unit: 'kg dry matter' });
  assert.ok('residual' in balanced.result); assert.equal(balanced.result.residual, 1);
  assert.equal(Object.hasOwn(balanced, 'passed'), false);
  assert.throws(() => calculate({ ...common, operation: 'normalize', amount: null }), { code: 'PCR_NUMBER_INVALID' });
  for (const value of [null, '', ' ', true, '1 kg', 'NaN', Infinity, '0x10']) assert.throws(() => strictNumber(value, 'amount'), { code: 'PCR_NUMBER_INVALID' });
  assert.equal(strictNumber('0', 'amount'), 0);
  assert.throws(() => calculate({ ...common, operation: 'convert', amount: 1e308, factor: 1000, from_unit: 'kg', to_unit: 'g' }), { code: 'PCR_CALCULATION_OVERFLOW' });
  assert.throws(() => calculate({ ...common, operation: 'invented' }), { code: 'PCR_CALCULATION_OPERATION' });
});

test('source bindings are exact-byte hashes even when JSON meaning stays the same', t => {
  const filename = path.join(temp(t), 'input.json'); writeFileSync(filename, '{"a":1}');
  const before = readJsonDocument(filename).sha256; writeFileSync(filename, '{ "a": 1 }');
  assert.notEqual(readJsonDocument(filename).sha256, before);
});


const root = path.resolve(".");
const pcrId = "pcr.agriculture-forestry-and-fishery-products.products-of-agriculture-horticulture-and-market-gardening.wheat-other";
const args = { root, pcrId, input };
function object(value: unknown): Record<string, unknown> { assert.ok(isUnknownRecord(value)); return value; }
function string(value: unknown): string { assert.equal(typeof value, "string"); return value as string; }
function pcrReference(value: unknown): AgentReviewFinding["pcr_refs"][number] {
  const fields = object(value);
  const version = fields.version;
  assert.ok(version === null || typeof version === "string");
  return { pcr_id: string(fields.pcr_id), version, projection_sha256: string(fields.projection_sha256),
    markdown_sha256: string(fields.markdown_sha256), methodology_status: string(fields.methodology_status), pointer: string(fields.pointer) };
}

test("selected PCR guidance binds original rules and applicability to reproducible projection citations", () => {
  const result = selectGuidance({ root, pcrId, topic: "boundary", pageSize: 1 });
  assert.ok("items" in result && result.pagination);
  const first = result.items[0]; assert.ok(first);
  assert.equal(result.pagination.has_more, true);
  assert.equal(first.rule_id, "boundary_crop_cycle");
  assert.equal(object(first.value).applies_to, "foreground_system_boundary");
  assert.match(result.pcr.projection_sha256, /^sha256:/u);
  assert.equal(result.readiness.status, "review_required");
  const full = selectGuidance({ root, pcrId, pointer: first.source.pointer });
  assert.ok("value" in full);
  assert.deepEqual(full.value, first.value);
  assert.deepEqual(full.source, first.source);
  assert.throws(() => selectGuidance({ root, pcrId, topic: "__proto__" }), { code: "PCR_GUIDANCE_TOPIC" });
});

test("review preparation stays unreviewed; shape validity never approves the methodology", () => {
  const report = prepareReview(args);
  assert.equal(report.status, "draft"); assert.equal(report.findings.length, 0);
  assert.ok(report.coverage.every(entry => entry.status === "not_reviewed"));
  const check = checkReview({ ...args, report });
  assert.deepEqual(check.issues, []); assert.equal(check.envelope_valid, true);
  assert.equal(check.methodology_approval, false);
  assert.ok(check.not_checked.includes("truth of observations or conclusions"));
});
function reviewedReport() {
  const report = prepareReview(args); report.status = "reviewed";
  report.coverage[0] = { topic: "scope_and_applicability", status: "reviewed", rationale: "The supplied process covers sowing only. The whole crop cycle cannot be assessed here." };
  const selected = selectGuidance({ root, pcrId, topic: "boundary" });
  assert.ok("items" in selected); const rule = selected.items[4]; assert.ok(rule);
  report.findings.push({ id: "missing-seed-quantity", kind: "evidence_gap", severity: "warning",
    observation: "The seed input has null meanAmount.", rationale: "No measured seed quantity is provided; null does not establish zero consumption.",
    input_refs: [inspectTidas({ input, pointer: "/processDataSet/exchanges/exchange/1/meanAmount" }).source],
    pcr_refs: [pcrReference(rule.source)], suggested_action: "Collect the seed use for the declared sowing area.",
    questions: ["What measured seed quantity belongs to this operation?"] });
  return report;
}

test("Agent findings bind existing input/PCR pointers and fail on stale or fabricated evidence", () => {
  const report = reviewedReport(); assert.equal(checkReview({ ...args, report }).envelope_valid, true);
  const finding = report.findings[0]; assert.ok(finding);
  const inputRef = finding.input_refs[0]; assert.ok(inputRef); inputRef.pointer = "/processDataSet/nonexistent";
  assert.ok(checkReview({ ...args, report }).issues.some(issue => issue.code === "input_pointer"));
  const pcrRef = finding.pcr_refs[0]; assert.ok(pcrRef); pcrRef.projection_sha256 = `sha256:${"0".repeat(64)}`;
  assert.ok(checkReview({ ...args, report }).issues.some(issue => issue.code === "pcr_reference_changed"));
  const identity = report.inputs[0]; assert.ok(identity);
  report.inputs[0] = { ...identity, sha256: `sha256:${"0".repeat(64)}` };
  assert.ok(checkReview({ ...args, report }).issues.some(issue => issue.code === "inputs_changed"));
});

test("report shape, duplicate findings, omitted context and unreviewed coverage are independently diagnosed", () => {
  assert.equal(checkReview({ ...args, report: {} }).envelope_valid, false);
  const report = reviewedReport(); const first = report.findings[0]; assert.ok(first);
  report.findings.push(structuredClone(first)); report.coverage.forEach(entry => { entry.status = "not_reviewed"; });
  const result = checkReview({ ...args, report, related: fixtureDir });
  assert.ok(result.issues.some(issue => issue.code === "duplicate_finding"));
  assert.ok(result.issues.some(issue => issue.code === "review_empty"));
  assert.ok(result.issues.some(issue => issue.code === "inputs_changed"));
});
