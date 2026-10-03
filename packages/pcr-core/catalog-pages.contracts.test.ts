import assert from 'node:assert/strict';
import { cpSync, mkdirSync, mkdtempSync, readFileSync, realpathSync, rmSync, writeFileSync } from 'node:fs';
import { tmpdir } from 'node:os';
import path from 'node:path';
import test, { type TestContext } from 'node:test';
import { createHash } from 'node:crypto';
import { buildPcrTree, createPcrReadContext, listPcrs, readPcrCatalogPage } from './src/index.ts';
import { parseYaml, renderYaml } from './src/yaml-lite.ts';
import { isUnknownRecord } from './src/types.ts';
const base = 'library/pcrs/agriculture-forestry-and-fishery-products/products-of-agriculture-horticulture-and-market-gardening';
function fixture(t: TestContext): string {
  const root = realpathSync(mkdtempSync(path.join(tmpdir(), 'pcr-catalog-page-'))); t.after(() => rmSync(root, { recursive: true, force: true }));
  for (const name of ['wheat-other', 'wheat-seed']) cpSync(path.join(process.cwd(), base, name), path.join(root, base, name), { recursive: true });
  const registry = renderYaml({ schema_version: 1, registry_kind: 'legacy-pcr-id-aliases', status: 'current', aliases: [] });
  const registryPath = 'classifications/aliases/pcr-id-aliases.yaml'; mkdirSync(path.dirname(path.join(root, registryPath)), { recursive: true }); writeFileSync(path.join(root, registryPath), registry);
  mkdirSync(path.join(root, 'library/indexes'), { recursive: true }); writeFileSync(path.join(root, 'library/indexes/pcr-index.yaml'), 'pcrs: []\n');
  writeFileSync(path.join(root, 'library/catalog.yaml'), renderYaml({ schema_version: 1, pcr_index: 'library/indexes/pcr-index.yaml', classification_mappings: [], classification_coverage_indexes: [], pcr_id_aliases: { path: registryPath, hash_mode: 'exact_bytes', sha256: `sha256:${createHash('sha256').update(registry).digest('hex')}`, entry_count: 0 } }));
  return root;
}
test('catalog page verifies only selected bodies and preserves full-list semantics', t => {
  const root = fixture(t); const reads: string[] = [];
  const context = createPcrReadContext({ root, onPcrArtifactRead: event => { reads.push(event.relative_path); } });
  writeFileSync(path.join(root, base, 'wheat-seed/structured.yaml'), 'broken projection\n');
  const first = readPcrCatalogPage({ root, scope: 'material', offset: 0, limit: 1, context });
  assert.equal(first.totalCount, 2); assert.equal(first.items.length, 1);
  assert.ok(first.items[0]?.id.endsWith('.wheat-other'));
  assert.ok(reads.length > 0 && reads.every(name => name.includes('/wheat-other/')));
  assert.deepEqual(first.items, listPcrs({ root, scope: 'material' }).slice(0, 1));
  reads.length = 0;
  const second = readPcrCatalogPage({ root, scope: 'material', offset: 1, limit: 1, context });
  assert.equal(second.items[0]?.readiness.usable_for_guidance, false);
  assert.ok(reads.every(name => name.includes('/wheat-seed/')));
});
test('metadata filters preserve order/counts and invalid page bounds fail explicitly', t => {
  const root = fixture(t);
  const result = readPcrCatalogPage({ root, scope: 'material', status: 'candidate', contentMaturity: 'authored_methodology', pathPrefix: `${base.replace('library/pcrs/', '')}/wheat-seed` });
  assert.equal(result.totalCount, 1); assert.ok(result.items[0]?.id.endsWith('.wheat-seed'));
  assert.deepEqual(readPcrCatalogPage({ root, offset: 20, limit: 1 }), { totalCount: 2, items: [] });
  for (const limit of [0, 101, 1.5]) assert.throws(() => readPcrCatalogPage({ root, limit }), RangeError);
});
test('metadata mutation during selected body reads invalidates the page and its count', t => {
  const root = fixture(t); let changed = false;
  const context = createPcrReadContext({ root, onPcrArtifactRead: () => {
    if (changed) return; changed = true;
    const filename = path.join(root, base, 'wheat-seed/manifest.yaml');
    const manifest = parseYaml(readFileSync(filename, 'utf8')); assert.ok(isUnknownRecord(manifest)); manifest.version = '0.9.9'; writeFileSync(filename, renderYaml(manifest));
  } });
  assert.throws(() => readPcrCatalogPage({ root, offset: 0, limit: 1, context }), { code: 'PCR_CURRENT_SNAPSHOT_INCONSISTENT' });
});
test('bounded tree branches do not verify unused leaf bodies; full depth still does', t => {
  const root = fixture(t); const reads: string[] = [];
  const context = createPcrReadContext({ root, onPcrArtifactRead: event => { reads.push(event.relative_path); } });
  const branches = buildPcrTree({ root, scope: 'material', depth: 2, context });
  assert.equal(reads.length, 0); assert.ok(Object.keys(branches).length);
  const leaves = buildPcrTree({ root, scope: 'material', depth: 3, context });
  assert.ok(reads.some(name => name.includes('/wheat-other/')) && reads.some(name => name.includes('/wheat-seed/')));
  assert.deepEqual(leaves, buildPcrTree({ root, scope: 'material', depth: 3 }));
});

test('body-free pages and trees reject contexts from another repository root', t => {
  const boundRoot = fixture(t), requestedRoot = fixture(t);
  const context = createPcrReadContext({ root: boundRoot });
  const reads = [
    () => readPcrCatalogPage({ root: requestedRoot, offset: 20, limit: 1, context }),
    () => buildPcrTree({ root: requestedRoot, depth: 2, context }),
    () => buildPcrTree({ root: requestedRoot, depth: 0, context }),
  ];
  for (const read of reads) assert.throws(read, { code: 'PCR_READ_CONTEXT_STALE' });
});

test('body-free pages and trees cannot return metadata under stale context bindings', t => {
  const root = fixture(t); const context = createPcrReadContext({ root });
  const filename = path.join(root, 'library/catalog.yaml');
  writeFileSync(filename, readFileSync(filename, 'utf8') + '\n# changed bound bytes\n');
  for (const read of [
    () => readPcrCatalogPage({ root, offset: 20, limit: 1, context }),
    () => buildPcrTree({ root, depth: 2, context }),
  ]) assert.throws(read, { code: 'PCR_READ_CONTEXT_STALE' });
});

test('a fresh explicit context never inherits an older process catalog cache', t => {
  const root = fixture(t); const directory = path.join(root, base, 'wheat-seed');
  rmSync(directory, { recursive: true });
  assert.equal(readPcrCatalogPage({ root, refresh: true }).totalCount, 1);
  cpSync(path.join(process.cwd(), base, 'wheat-seed'), directory, { recursive: true });
  const context = createPcrReadContext({ root });
  assert.equal(readPcrCatalogPage({ root, context }).totalCount, 2);
  assert.ok(JSON.stringify(buildPcrTree({ root, depth: 3, context })).includes('wheat-seed'));
});
