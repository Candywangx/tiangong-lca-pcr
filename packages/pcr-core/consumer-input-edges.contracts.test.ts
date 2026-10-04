import test, { type TestContext } from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync, writeFileSync, mkdirSync, rmSync } from 'node:fs';
import path from 'node:path';
import { createReadSessionFixture, writeSessionFixtureFile } from './fixtures/read-session-fixture.ts';
import { buildGuidance, getPcrById, readPcrModuleDocumentBundle, validateDatasetAgainstGuidance, validateModelAgainstGuidance, verifyDistributionCoverage } from './src/index.ts';
import { parseYaml, renderYaml } from './src/yaml-lite.ts';
import { isUnknownRecord } from './src/types.ts';
import { sha256 } from './src/offline-library.ts';
import { readClassificationCoverageSnapshot } from './src/classification-coverage.ts';

function object(value: unknown) { assert.ok(isUnknownRecord(value)); return value; }
for (const [field, invalid, label] of [
  ['id', 12, 'numeric identity'], ['status', 12, 'numeric lifecycle'], ['version', [], 'array version'],
  ['content_maturity', {}, 'object maturity'], ['title', [], 'array title map'], ['title', { 'en-US': 12 }, 'numeric title'],
  ['translation_status', [], 'array translation map'], ['translation_status', { 'zh-CN': 12 }, 'numeric translation state'],
  ['languages', [], 'array language declaration'], ['languages', { available: [null] }, 'null declared language'],
  ['languages', { canonical: 12 }, 'numeric canonical language'], ['classification_refs', [null], 'null classification reference'],
  ['classification_refs', {}, 'object classification inventory'],
] as const) test(`consumer refuses a ${label} without repairing the authored manifest`, t => {
  const f = createReadSessionFixture(t), filename = path.join(f.root, f.relative, 'manifest.yaml');
  const value = object(parseYaml(readFileSync(filename, 'utf8'))); value[field] = invalid;
  const bytes = renderYaml(value); writeFileSync(filename, bytes);
  assert.throws(() => getPcrById({ root: f.root, pcrId: f.id }), error => {
    assert.ok(error instanceof Error);
    if (error instanceof TypeError) assert.match(error.message, new RegExp(field === 'languages' ? 'language' : field === 'content_maturity' ? 'maturity' : (field.split('_')[0] ?? field), 'iu'));
    else assert.equal(object(error).code, 'PCR_CURRENT_SNAPSHOT_INCONSISTENT');
    return true;
  });
  assert.equal(readFileSync(filename, 'utf8'), bytes);
});

test('read APIs require an explicit root or a bound context before any filesystem lookup', () => {
  assert.throws(() => buildGuidance({ pcrId: 'pcr.invalid' }), /repository root or bound read context/u);
});

for (const [name, source, expected] of [
  ['missing frontmatter', '# Unbound module\n', /requires frontmatter/u],
  ['scalar metadata', '---\nplain scalar\n---\nBody\n', /must be a mapping/u],
  ['sequence metadata', '---\n- one\n- two\n---\nBody\n', /must be a mapping/u],
  ['foreign identity', '---\nid: module.core.other\nmodule_type: core\n---\nBody\n', /identity mismatch/u],
  ['foreign module group', '---\nid: module.core.fixture\nmodule_type: quality\n---\nBody\n', /identity mismatch/u],
  ['empty body', '---\nid: module.core.fixture\nmodule_type: core\n---\n  \n', /body is empty/u],
] as const) test(`complete module reads reject ${name}`, t => {
  const f = createReadSessionFixture(t); writeSessionFixtureFile(f.root, 'library/modules/core/fixture.md', source);
  assert.throws(() => readPcrModuleDocumentBundle({ root: f.root, group: 'core', moduleId: 'fixture' }), expected);
});

test('module reads preserve complete CRLF source and default language without rewriting it', t => {
  const f = createReadSessionFixture(t), relative = 'library/modules/core/fixture.md';
  const source = '---\r\nid: module.core.fixture\r\nmodule_type: core\r\n---\r\nA condition applies only to co-products.\r\n';
  writeSessionFixtureFile(f.root, relative, source);
  const result = readPcrModuleDocumentBundle({ root: f.root, group: 'core', moduleId: 'fixture' });
  assert.equal(result.language, 'en-US'); assert.equal(result.artifact.text, source);
  assert.deepEqual(result.artifact.bytes, Buffer.from(source));
  result.artifact.bytes.fill(0); assert.equal(readFileSync(path.join(f.root, relative), 'utf8'), source);
});

test('module input identity, UTF-8 and directory shape are independent read boundaries', t => {
  const f = createReadSessionFixture(t), relative = 'library/modules/core/fixture.md';
  for (const value of ['../outside', 'core/escape', 'Capital', '']) {
    assert.throws(() => readPcrModuleDocumentBundle({ root: f.root, group: value, moduleId: 'fixture' }), /Invalid PCR module identity/u);
    assert.throws(() => readPcrModuleDocumentBundle({ root: f.root, group: 'core', moduleId: value }), /Invalid PCR module identity/u);
  }
  writeSessionFixtureFile(f.root, relative, Buffer.from([0xff, 0xfe, 0xfd]));
  assert.throws(() => readPcrModuleDocumentBundle({ root: f.root, group: 'core', moduleId: 'fixture' }), /encoded data|encoding/u);
  rmSync(path.join(f.root, relative)); mkdirSync(path.join(f.root, relative));
  assert.throws(() => readPcrModuleDocumentBundle({ root: f.root, group: 'core', moduleId: 'fixture' }), /regular file/u);
});

for (const value of [null, [], true, 42]) test(`model validation refuses ${JSON.stringify(value)} instead of treating it as empty model text`, t => {
  const f = createReadSessionFixture(t), result = validateModelAgainstGuidance({ root: f.root, pcrId: f.id, model: value });
  assert.equal(result.validation_status, 'failed'); assert.equal(result.input.accepted, false);
  assert.ok(result.findings.some(finding => finding.code === 'invalid_model_input'));
  assert.equal(result.check_coverage.checked_requirement_count, 0);
});
for (const value of [null, [], 'not a foreground object', true, 42]) test(`dataset validation refuses ${JSON.stringify(value)} without claiming protocol coverage`, t => {
  const f = createReadSessionFixture(t), result = validateDatasetAgainstGuidance({ root: f.root, pcrId: f.id, dataset: value });
  assert.equal(result.validation_status, 'failed'); assert.equal(result.input.accepted, false);
  assert.equal(result.input.collection_record_count, 0); assert.equal(result.input.distinct_protocol_id_count, 0);
  assert.ok(result.findings.some(finding => finding.code === 'invalid_dataset_input'));
});

test('nested collection inventories count actual records and distinct protocol aliases, including repeated IDs', t => {
  const f = createReadSessionFixture(t), result = validateDatasetAgainstGuidance({ root: f.root, pcrId: f.id,
    dataset: { collection_records: [{ protocol_id: 'one' }, { collection_protocol_id: 'one' }], foreground_records: [{ protocol_id: 'two' }],
      measurement_records: [null], data: { collection_records: [{ collection_protocol_id: 'three' }], data: [] } } });
  assert.equal(result.input.accepted, true); assert.equal(result.input.collection_record_count, 5); assert.equal(result.input.distinct_protocol_id_count, 3);
  assert.notEqual(result.completeness, 'complete');
});

function verifiedMappingFixture(t: TestContext) {
  const f = createReadSessionFixture(t);
  const leafPath = 'classifications/systems/cpc/3.0/normalized/leaves.json', mappingPath = 'classifications/mappings/cpc-3.0-to-pcr.yaml';
  const acceptance = { status: 'accepted', decided_by: 'fixture-owner', decided_at_utc: '2026-10-04T00:00:00Z', decision_ref: 'docs/adr/fixture.md' };
  const mapping = { pcr_id: f.id, mapping_type: 'exact', confidence: 'high', acceptance };
  const document = { schema_version: 2, status: 'current', classification_system: 'CPC', classification_version: '3.0', mappings: [{ code: '01111', label: 'Wheat seed', ...mapping }] };
  const leaves = JSON.stringify({ classification_system: 'CPC', classification_version: '3.0', leaves: [{ code: '01111', title: 'Wheat seed', path_codes: ['0', '01111'], path_titles: ['Agriculture', 'Wheat seed'] }] });
  const bytes = renderYaml(document); writeSessionFixtureFile(f.root, leafPath, leaves); writeSessionFixtureFile(f.root, mappingPath, bytes);
  writeSessionFixtureFile(f.root, acceptance.decision_ref, '# Owned fixture decision\n');
  writeSessionFixtureFile(f.root, 'classifications/indexes/cpc-3.0-coverage.json', JSON.stringify({ schema_version: 1, index_kind: 'classification-pcr-coverage', classification_system: 'CPC', classification_version: '3.0',
    source: { contract_version: '2', generator: 'builder/scripts/build-catalog.mjs', generator_version: '2', normalized_leaves: { path: leafPath, hash_mode: 'exact_bytes', sha256: sha256(leaves) }, mapping: { path: mappingPath, hash_mode: 'exact_bytes', sha256: sha256(bytes) } },
    summary: { total: 1, mapped: 1, unmapped: 0, candidate_suggestion: 0, manual_review: 0, unknown: 0 },
    entries: [{ code: '01111', label: 'Wheat seed', path_codes: ['0', '01111'], path_titles: ['Agriculture', 'Wheat seed'], coverage_status: 'mapped', mapping, legacy_reference: null }] }));
  const snapshot = readClassificationCoverageSnapshot({ root: f.root, system: 'cpc', version: '3.0' });
  verifyDistributionCoverage({ root: f.root, snapshot });
  return { ...f, document: document as Record<string, unknown>, mappingPath: path.join(f.root, mappingPath), snapshot };
}
function edge(document: Record<string, unknown>) { assert.ok(Array.isArray(document.mappings)); return object(document.mappings[0]); }
const mappingChanges: readonly [string, (document: Record<string, unknown>) => void][] = [
  ['legacy schema', d => { d.schema_version = 1; }], ['draft document', d => { d.status = 'draft'; }],
  ['foreign system', d => { d.classification_system = 'HS'; }], ['foreign version', d => { d.classification_version = '4.0'; }],
  ['missing edge array', d => { d.mappings = null; }], ['non-object edge', d => { d.mappings = [null]; }],
  ['removed edge', d => { d.mappings = []; }], ['duplicate edge', d => { assert.ok(Array.isArray(d.mappings)); d.mappings.push(d.mappings[0]); }],
  ['manual-review relation', d => { edge(d).mapping_type = 'manual_review'; }], ['non-string relation', d => { edge(d).mapping_type = 1; }],
  ['numeric PCR identity', d => { edge(d).pcr_id = 1; }], ['foreign PCR identity', d => { edge(d).pcr_id = 'pcr.some.other.identity'; }],
  ['changed confidence', d => { edge(d).confidence = 'low'; }], ['absent acceptance', d => { delete edge(d).acceptance; }],
  ['pending decision', d => { object(edge(d).acceptance).status = 'pending'; }],
  ['blank decision owner', d => { object(edge(d).acceptance).decided_by = ' '; }],
  ['numeric decision owner', d => { object(edge(d).acceptance).decided_by = 1; }],
  ['different decision owner', d => { object(edge(d).acceptance).decided_by = 'other-owner'; }],
  ['non-string decision timestamp', d => { object(edge(d).acceptance).decided_at_utc = 1; }],
  ['invalid calendar date', d => { object(edge(d).acceptance).decided_at_utc = '2026-02-30T00:00:00Z'; }],
  ['non-UTC decision timestamp', d => { object(edge(d).acceptance).decided_at_utc = '2026-10-04T08:00:00+08:00'; }],
  ['different valid timestamp', d => { object(edge(d).acceptance).decided_at_utc = '2026-10-03T00:00:00Z'; }],
  ['external decision locator', d => { object(edge(d).acceptance).decision_ref = 'https://example.invalid/approval'; }],
  ['numeric decision locator', d => { object(edge(d).acceptance).decision_ref = 1; }],
  ['different valid decision locator', d => { object(edge(d).acceptance).decision_ref = 'docs/adr/other.md'; }],
];
for (const [name, mutate] of mappingChanges) test(`a previously verified coverage snapshot cannot authorize ${name} after its canonical mapping changes`, t => {
  const f = verifiedMappingFixture(t), snapshotBefore = JSON.stringify(f.snapshot); mutate(f.document);
  const changed = renderYaml(f.document); writeFileSync(f.mappingPath, changed);
  assert.throws(() => verifyDistributionCoverage({ root: f.root, snapshot: f.snapshot }), /mapping|selected edge|acceptance|PCR id/u);
  assert.equal(JSON.stringify(f.snapshot), snapshotBefore); assert.equal(readFileSync(f.mappingPath, 'utf8'), changed);
});
for (const [name, bytes] of [['unreadable YAML', 'mappings: [unterminated'], ['scalar YAML', 'null']] as const) test(`a previously verified coverage snapshot rejects a canonical source replaced by ${name}`, t => {
  const f = verifiedMappingFixture(t); writeFileSync(f.mappingPath, bytes);
  assert.throws(() => verifyDistributionCoverage({ root: f.root, snapshot: f.snapshot }), /mapping/u);
});
