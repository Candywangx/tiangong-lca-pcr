import assert from 'node:assert/strict';
import { cpSync, mkdtempSync, rmSync, symlinkSync, writeFileSync } from 'node:fs';
import { tmpdir } from 'node:os';
import path from 'node:path';
import test, { type TestContext } from 'node:test';
import { atPointer, readJsonDocument, strictNumber, object } from './src/consumption-data.ts';
import { calculate } from './src/consumption-calculation.ts';
import { inspectTidas, type SelectedItem } from './src/tidas-inspection.ts';

const fixtureDir = path.resolve('packages/pcr-core/fixtures/agentic-review');
const input = path.join(fixtureDir, 'sowing.process.json');
const model = path.join(fixtureDir, 'wheat.model.json');
function temp(t: TestContext): string {
  const directory = mkdtempSync(path.join(tmpdir(), 'pcr-agentic-core-'));
  t.after(() => rmSync(directory, { recursive: true, force: true }));
  return directory;
}
function record(value: unknown): Record<string, unknown> { assert.ok(object(value)); return value; }
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

test('invalid native identity types and malformed UTF-8 fail without claiming schema validation', t => {
  const filename = path.join(temp(t), 'input.json');
  const value = readJsonDocument(input).value;
  record(atPointer(value, '/processDataSet/processInformation/dataSetInformation'))['common:UUID'] = 12;
  writeFileSync(filename, JSON.stringify(value));
  assert.throws(() => inspectTidas({ input: filename }), { code: 'PCR_TIDAS_IDENTITY' });
  writeFileSync(filename, Buffer.from([0x22, 0xc0, 0xaf, 0x22]));
  assert.throws(() => inspectTidas({ input: filename }), { code: 'PCR_INPUT_JSON' });
});
