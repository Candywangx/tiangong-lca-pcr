import test, { type TestContext } from 'node:test';
import assert from 'node:assert/strict';
import { mkdirSync, mkdtempSync, readFileSync, readdirSync, realpathSync, rmSync, writeFileSync } from 'node:fs';
import { tmpdir } from 'node:os';
import path from 'node:path';
import { importCpc } from './cpc-scaffold.ts';
import { parseYaml, renderYaml } from '../../packages/pcr-core/src/yaml-lite.ts';
import { isUnknownRecord } from '../../packages/pcr-core/src/types.ts';

const csv = 'CPC Ver. 3.0 Code,CPC Ver. 3.0 Title\n0,Agriculture\n01,Crops\n011,Cereals\n0111,Wheat\n01111,Wheat seed\n';
const mappingPath = 'classifications/mappings/cpc-3.0-to-pcr.yaml';
const inventoryPath = 'classifications/systems/cpc/3.0/normalized/leaf-slugs.json';
const metadataPath = 'classifications/systems/cpc/3.0/raw/source-metadata.yaml';
function object(value: unknown) { assert.ok(isUnknownRecord(value)); return value; }
function fixture(t: TestContext, source: string | Buffer = csv) {
  const owned = realpathSync(mkdtempSync(path.join(tmpdir(), 'pcr-cpc-input-edges-'))); t.after(() => rmSync(owned, { recursive: true, force: true }));
  const root = path.join(owned, 'repository'), filename = path.join(owned, 'source.csv'); mkdirSync(root); writeFileSync(filename, source);
  return { owned, root, source: filename, options: { root, source: filename, 'classification-version': '3.0' } };
}
function files(root: string): Record<string, string> {
  const result: Record<string, string> = {};
  function visit(relative: string) {
    for (const entry of readdirSync(path.join(root, relative), { withFileTypes: true })) {
      const name = relative ? relative + '/' + entry.name : entry.name;
      if (entry.isDirectory()) visit(name); else { assert.equal(entry.isFile(), true); result[name] = readFileSync(path.join(root, name)).toString('base64'); }
    }
  }
  visit(''); return result;
}
function put(root: string, relative: string, bytes: string) { const filename = path.join(root, relative); mkdirSync(path.dirname(filename), { recursive: true }); writeFileSync(filename, bytes); }

for (const [name, source] of [
  ['header only', 'Code,Title\n'], ['missing title column', 'Code,Label\n0,Agriculture\n'],
  ['conflicting header versions', 'CPC Ver. 3.0 Code,CPC Ver. 2.1 Title\n0,Agriculture\n'],
  ['mismatched header version', 'CPC Ver. 2.1 Code,CPC Ver. 2.1 Title\n0,Agriculture\n'],
  ['missing code', 'Code,Title\n,Missing code\n'], ['missing title', 'Code,Title\n0\n'],
  ['nonnumeric code', 'Code,Title\nABC,Invalid code\n'], ['six-digit code', 'Code,Title\n000000,Too deep\n'],
  ['duplicate identity', 'Code,Title\n0,First\n0,Second\n'], ['unterminated field', 'Code,Title\n0,"Unterminated\n'],
  ['invalid UTF-8', Buffer.from([0xff, 0xfe, 0xfd])],
] as const) test(`CPC import rejects ${name} before creating repository artifacts`, t => {
  const f = fixture(t, source); assert.throws(() => importCpc(f.options), /CPC|CSV/u); assert.deepEqual(files(f.root), {});
});

test('CPC CSV preserves BOM, CRLF, quoted commas, escaped quotes and final records without a newline', t => {
  const f = fixture(t, '\ufeffCode,Title\r\n0,"Agriculture, products"\r\n01,Crops\r\n011,Cereals\r\n0111,Wheat\r\n01111,"Seed ""elite""\r\nline two"');
  const messages = importCpc(f.options); assert.ok(messages.some(message => message.includes('PCR records created: 0;')));
  const normalized = object(JSON.parse(readFileSync(path.join(f.root, 'classifications/systems/cpc/3.0/normalized/leaves.json'), 'utf8')) as unknown);
  assert.ok(Array.isArray(normalized.leaves)); const leaf = object(normalized.leaves[0]);
  assert.equal(leaf.code, '01111'); assert.equal(leaf.title, 'Seed "elite"\r\nline two');
  assert.equal(Object.keys(files(f.root)).some(name => name.startsWith('library/pcrs/') && name.endsWith('/manifest.yaml')), false);
});

for (const options of [
  { unknown: 'value' }, { _: ['unexpected'] }, { _: 'unexpected' }, { 'legacy-scaffolds': 'true' },
  { root: true }, { source: true }, { 'source-url': true }, { 'classification-version': true },
] as const) test(`CPC import rejects ambiguous options ${JSON.stringify(options)} without mutation`, t => {
  const f = fixture(t); assert.throws(() => importCpc({ ...f.options, ...options }), /option|argument|flag|requires a value/u); assert.deepEqual(files(f.root), {});
});

for (const value of ['../3.0', '3.x', '3'.repeat(33)]) test(`CPC coordinates cannot escape or exceed their declared syntax: ${value}`, t => {
  const f = fixture(t); assert.throws(() => importCpc({ ...f.options, 'classification-version': value }), /Invalid CPC classification version/u); assert.deepEqual(files(f.root), {});
});

for (const [name, bytes] of [['broken YAML', 'mappings: [unterminated'], ['scalar YAML', 'null'], ['foreign coordinate', 'schema_version: 1\nclassification_system: HS\nclassification_version: "3.0"\nstatus: scaffold\nmappings: []\n']] as const) test(`CPC import preserves an existing mapping with ${name} when refusing it`, t => {
  const f = fixture(t); put(f.root, mappingPath, bytes); const before = files(f.root);
  assert.throws(() => importCpc(f.options), /mapping|Mapping|CPC/u); assert.deepEqual(files(f.root), before);
});

for (const [key, value] of [['schema_version', 2], ['classification_system', 'HS'], ['classification_version', '2.1'], ['source_file', 1], ['source_url', null], ['sha256', 'invalid'], ['retrieved_at_utc', 1]] as const) test(`CPC re-import refuses malformed existing source metadata ${key} and retains all source bytes`, t => {
  const f = fixture(t); importCpc(f.options);
  const filename = path.join(f.root, metadataPath), metadata = object(parseYaml(readFileSync(filename, 'utf8'))); metadata[key] = value; writeFileSync(filename, renderYaml(metadata));
  const before = files(f.root); assert.throws(() => importCpc(f.options), /source metadata/u); assert.deepEqual(files(f.root), before);
});
for (const bytes of ['null', 'field: [unterminated']) test('scalar or malformed existing source metadata cannot be silently regenerated', t => {
  const f = fixture(t); importCpc(f.options); writeFileSync(path.join(f.root, metadataPath), bytes); const before = files(f.root);
  assert.throws(() => importCpc(f.options), /source metadata/u); assert.deepEqual(files(f.root), before);
});

function legacyFixture(t: TestContext) {
  const f = fixture(t); put(f.root, mappingPath, 'schema_version: 1\nclassification_system: CPC\nclassification_version: "3.0"\nstatus: scaffold\nmappings: []\n');
  const options = { ...f.options, 'legacy-scaffolds': true }; importCpc(options);
  const filename = path.join(f.root, inventoryPath), inventory = object(JSON.parse(readFileSync(filename, 'utf8')) as unknown);
  assert.ok(Array.isArray(inventory.leaves)); return { ...f, options, filename, inventory, leaves: inventory.leaves };
}
const inventoryChanges: readonly [string, (inventory: Record<string, unknown>, leaves: unknown[]) => void][] = [
  ['wrong schema', d => { d.schema_version = 2; }], ['wrong coordinate', d => { d.classification_system = 'HS'; }],
  ['wrong classification version', d => { d.classification_version = '2.1'; }],
  ['missing inventory array', d => { d.leaves = null; }], ['non-object entry', (d) => { d.leaves = [null]; }],
  ['non-string code', (_d, rows) => { object(rows[0]).code = 1; }], ['non-string title', (_d, rows) => { object(rows[0]).title = null; }],
  ['non-string PCR identity', (_d, rows) => { object(rows[0]).pcr_id = 1; }], ['non-string PCR directory', (_d, rows) => { object(rows[0]).pcr_dir = 1; }],
  ['invalid PCR namespace', (_d, rows) => { object(rows[0]).pcr_id = 'outside'; }],
  ['outside PCR directory', (_d, rows) => { object(rows[0]).pcr_dir = 'outside/record'; }],
  ['directory traversal', (_d, rows) => { object(rows[0]).pcr_dir = 'library/pcrs/../outside'; }],
  ['duplicate code', (_d, rows) => { rows.push({ ...object(rows[0]) }); }],
  ['duplicate PCR id', (_d, rows) => { rows.push({ ...object(rows[0]), code: '99998', pcr_dir: 'library/pcrs/other/extra' }); }],
  ['duplicate PCR directory', (_d, rows) => { rows.push({ ...object(rows[0]), code: '99998', pcr_id: 'pcr.other.extra' }); }],
];
for (const [name, mutate] of inventoryChanges) test(`legacy compatibility import refuses ${name} without repairing historical scaffold identity`, t => {
  const f = legacyFixture(t); mutate(f.inventory, f.leaves); writeFileSync(f.filename, JSON.stringify(f.inventory)); const before = files(f.root);
  assert.throws(() => importCpc(f.options), /legacy|Legacy/u); assert.deepEqual(files(f.root), before);
});
for (const bytes of ['{', 'null']) test('unparseable or scalar legacy identity inventory is retained on failure', t => {
  const f = legacyFixture(t); writeFileSync(f.filename, bytes); const before = files(f.root);
  assert.throws(() => importCpc(f.options), /legacy|Legacy/u); assert.deepEqual(files(f.root), before);
});

test('repeating an explicit legacy import preserves existing complete PCRs and their original evidence bytes', t => {
  const f = legacyFixture(t), before = files(f.root); const messages = importCpc(f.options);
  assert.ok(messages.some(message => message.includes('PCR records created: 0;'))); assert.deepEqual(files(f.root), before);
});

test('valid classification-only import can initialize an explicitly selected absent root but never replace a root file', t => {
  const f = fixture(t), absent = path.join(f.owned, 'new-project');
  const result = importCpc({ ...f.options, root: absent }); assert.ok(result.some(message => message.includes('PCR records created: 0;')));
  const file = path.join(f.owned, 'not-a-directory'); writeFileSync(file, 'retain root bytes');
  assert.throws(() => importCpc({ ...f.options, root: file }), /directory/u); assert.equal(readFileSync(file, 'utf8'), 'retain root bytes');
});


test('an existing exact legacy scaffold can receive its missing compatibility edge without rewriting PCR content', t => {
  const f = legacyFixture(t), mapping = object(parseYaml(readFileSync(path.join(f.root, mappingPath), 'utf8'))); mapping.mappings = [];
  writeFileSync(path.join(f.root, mappingPath), renderYaml(mapping)); const before = files(f.root);
  const messages = importCpc(f.options); assert.ok(messages.some(message => message.includes('PCR records created: 0; preserved: 1;')));
  const after = files(f.root); delete before[mappingPath]; delete after[mappingPath]; assert.deepEqual(after, before);
  const current = object(parseYaml(readFileSync(path.join(f.root, mappingPath), 'utf8'))); assert.ok(Array.isArray(current.mappings)); assert.equal(current.mappings.length, 1);
});
