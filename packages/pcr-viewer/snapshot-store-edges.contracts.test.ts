import assert from 'node:assert/strict';
import { copyFileSync, existsSync, mkdirSync, mkdtempSync, readFileSync, readdirSync, realpathSync, rmSync, symlinkSync, writeFileSync } from 'node:fs';
import { tmpdir } from 'node:os';
import path from 'node:path';
import test, { type TestContext } from 'node:test';
import { buildGuidance } from '../pcr-core/src/index.ts';
import type { UnknownRecord } from '../pcr-core/src/types.ts';
import { canonicalBytes, refDigest, sha256Ref } from './scripts/snapshot-format.ts';
import { ViewerSnapshotStore } from './scripts/snapshot-store.ts';
import { object, field, text } from './scripts/snapshot-readers.ts';
import type { BackendSnapshotManifest, SnapshotStoreOptions } from './scripts/snapshot-types.ts';

const id = 'pcr.agriculture-forestry-and-fishery-products.products-of-agriculture-horticulture-and-market-gardening.wheat-seed';
const guidance = buildGuidance({ root: process.cwd(), pcrId: id });
function input(sequence = 1, overrides: UnknownRecord = {}) {
  return {
    snapshotId: `edge-${sequence}`, goalId: 'goal-edge', harnessSnapshotId: 'harness-edge',
    capturedAt: '2026-10-04T00:00:00Z', validatedAt: '2026-10-04T00:01:00Z',
    validationSummary: { status: 'passed', checks: 3 }, catalogScope: 'material', sequence,
    generatorContractSha256: sha256Ref('edge-generator'),
    source: { catalog: sha256Ref('edge-catalog'), aliases: sha256Ref('edge-aliases'),
      coverage: [{ coordinate: { system: 'cpc', version: '3.0' }, ref: sha256Ref('edge-coverage') }],
      releaseRevisionMarkers: {}, source_ref: 'refs/heads/edge', integration_commit: 'a'.repeat(40), base_commit: 'b'.repeat(40), tree_hash: 'c'.repeat(40) },
    pcrEntries: [{ ...structuredClone(guidance.pcr), markdown: { 'en-US': '# Source-bound wheat', 'zh-CN': null }, guidance: structuredClone(guidance) }],
    aliasEntries: [{ id: 'pcr.legacy.edge', locator: id, source_pcr_path: 'library/pcrs/legacy/edge', target: { kind: 'canonical_pcr', pcr_id: id }, reason: 'empty_scaffold_migration', decision_ref: 'docs/adr/edge.md' }],
    coverageEntries: [{ coordinate: { system: 'cpc', version: '3.0' }, code: '01111', pcr_id: id, label: 'Wheat', path_codes: ['01111'], path_titles: ['Wheat'], coverage_status: 'mapped',
      mapping: { pcr_id: id, mapping_type: 'exact', confidence: 'reviewed', acceptance: { status: 'accepted', decided_by: 'edge-test', decided_at_utc: '2026-10-04T00:00:00Z', decision_ref: 'docs/adr/edge.md' } }, legacy_reference: null }],
    ...overrides,
  };
}
function fixture(t: TestContext, options: Omit<SnapshotStoreOptions, 'root' | 'generatorVersion'> = {}) {
  const root = realpathSync(mkdtempSync(path.join(tmpdir(), 'pcr-viewer-store-edge-'))); t.after(() => rmSync(root, { recursive: true, force: true }));
  const store = new ViewerSnapshotStore({ root, generatorVersion: 'edge-v1', sourceVerifier: () => true, ...options });
  return { root, store };
}
function bytes(root: string, leaf: string) { return readFileSync(path.join(root, leaf)); }
function pointers(root: string) { return { active: bytes(root, 'active.json'), history: bytes(root, 'history-head.json') }; }
function retained(root: string, previous: ReturnType<typeof pointers>) { assert.deepEqual(pointers(root), previous); }
function jsonFile(root: string, leaf: string) { return object(JSON.parse(bytes(root, leaf).toString('utf8')) as unknown); }
function writeJson(root: string, leaf: string, value: unknown) { writeFileSync(path.join(root, leaf), canonicalBytes(value)); }
function journal(root: string) { return jsonFile(root, 'journal.json'); }
function prepared(t: TestContext, phase = 'prepared') {
  const f = fixture(t); const first = f.store.publish(input()); const previous = pointers(f.root);
  assert.throws(() => f.store.publish(input(2, { failurePhase: phase })), { code: 'VIEWER_PUBLICATION_INTERRUPTED' });
  return { ...f, first, previous, journal: journal(f.root) };
}
function abandonmentExpected(value: UnknownRecord) {
  const capture = object(value.capture);
  return { snapshot_id: field(value.reservation, 'snapshot_id'), sequence: value.sequence,
    goal_id: 'goal-edge', harness_snapshot_id: 'harness-edge', captured_at: '2026-10-04T00:00:00Z', validated_at: '2026-10-04T00:01:00Z',
    source_ref: capture.source_ref, integration_commit: capture.integration_commit, base_commit: capture.base_commit, tree_hash: capture.tree_hash };
}
function rehashManifest(store: ViewerSnapshotStore, manifest: BackendSnapshotManifest) {
  const value = canonicalBytes(manifest), ref = sha256Ref(value);
  writeFileSync(store.path('manifests', `${refDigest(ref)}.json`), value);
  const ui = store.readObject(manifest.capture.ui_bundle_ref);
  writeJson(store.root, `routes/${refDigest(ref)}.json`, { routing_schema_version: 1, kind: 'viewer-snapshot-route', snapshot_id: manifest.snapshot_id, manifest_ref: ref,
    manifest_schema_version: manifest.schema_version, ui_bundle_ref: manifest.capture.ui_bundle_ref, ui_bundle_id: field(ui.entry, 'id'), ui_bundle_url: field(ui.entry, 'asset_url') });
  return ref;
}

test('explicit store/generator requirements and every failed capability probe refuse publication resources', t => {
  assert.throws(() => new ViewerSnapshotStore(), { code: 'VIEWER_STORE_REQUIRED' });
  assert.throws(() => new ViewerSnapshotStore({ root: 'unused', generatorVersion: '' }), { code: 'VIEWER_GENERATOR_VERSION_REQUIRED' });
  for (const capability of ['fsync', 'atomicRename', 'createIfAbsent'] as const) {
    const f = fixture(t, { capabilities: { [capability]: false } });
    assert.throws(() => f.store.probe(), { code: 'VIEWER_STORE_CAPABILITY_UNAVAILABLE' }); assert.deepEqual(readdirSync(f.root), []);
    const probe = fixture(t, { capabilityProbe: () => ({ fsync: true, atomicRename: true, createIfAbsent: true, [capability]: false }) });
    assert.throws(() => probe.store.probe(), { code: 'VIEWER_STORE_CAPABILITY_UNAVAILABLE' }); assert.equal(existsSync(path.join(probe.root, 'active.json')), false);
  }
});

const invalidInputs: readonly [string, (value: ReturnType<typeof input>) => unknown][] = [
  ['null snapshot', () => null], ['array snapshot', () => []], ['missing source', value => ({ ...value, source: null })],
  ['array source', value => ({ ...value, source: [] })],
  ['blank snapshot identity', value => ({ ...value, snapshotId: ' ' })],
  ['non-UTC capture', value => ({ ...value, capturedAt: '2026-10-04T00:00:00+00:00' })],
  ['invalid validation timestamp', value => ({ ...value, validatedAt: 'invalidZ' })],
  ['zero sequence', value => ({ ...value, sequence: 0 })], ['fractional sequence', value => ({ ...value, sequence: 1.5 })],
  ['failed validation', value => ({ ...value, validationSummary: { status: 'failed', checks: 3 } })],
  ['fractional check count', value => ({ ...value, validationSummary: { status: 'passed', checks: 0.5 } })],
  ['undeclared validation fields', value => ({ ...value, validationSummary: { status: 'passed', checks: 3, cached: true } })],
  ['missing validation summary', value => ({ ...value, validationSummary: null })],
  ['unknown catalog scope', value => ({ ...value, catalogScope: 'unknown' })],
  ['PCR entry list required', value => ({ ...value, pcrEntries: null })],
  ['duplicate PCR identity', value => ({ ...value, pcrEntries: [...value.pcrEntries, ...value.pcrEntries] })],
  ['missing PCR identity', value => ({ ...value, pcrEntries: [{ title: 'No identity' }] })],
  ['alias entry list required', value => ({ ...value, aliasEntries: {} })],
  ['duplicate alias identity', value => ({ ...value, aliasEntries: [...value.aliasEntries, ...value.aliasEntries] })],
  ['coverage entry list required', value => ({ ...value, coverageEntries: {} })],
  ['missing coverage code', value => ({ ...value, coverageEntries: [{ ...value.coverageEntries[0], code: '' }] })],
  ['duplicate coverage key', value => ({ ...value, coverageEntries: [...value.coverageEntries, ...value.coverageEntries] })],
  ['invalid coverage coordinate', value => ({ ...value, coverageEntries: [{ ...value.coverageEntries[0], coordinate: { system: 'CPC', version: '3.0' } }] })],
  ['source coverage list required', value => ({ ...value, source: { ...value.source, coverage: {} } })],
  ['release marker map required', value => ({ ...value, source: { ...value.source, releaseRevisionMarkers: [] } })],
  ['unbound release marker', value => ({ ...value, source: { ...value.source, releaseRevisionMarkers: { 'pcr.missing': sha256Ref('marker') } } })],
  ['invalid integration pin', value => ({ ...value, source: { ...value.source, integration_commit: 'A'.repeat(40) } })],
  ['missing coverage source', value => ({ ...value, source: { ...value.source, coverage: [] } })],
  ['missing current coverage target', value => ({ ...value, pcrEntries: [] })],
  ['pinned source list required', value => ({ ...value, pinnedSources: {} })],
  ['pinned source path required', value => ({ ...value, pinnedSources: [{}] })],
  ['pinned source cannot traverse', value => ({ ...value, pinnedSources: [{ path: '../outside', ref: sha256Ref('outside') }] })],
  ['pinned source missing', value => ({ ...value, pinnedSources: [{ path: 'pins/missing', ref: sha256Ref('missing') }] })],
];
for (const [name, change] of invalidInputs) test(`invalid ${name} cannot advance either retained pointer or leave a publication journal`, t => {
  const f = fixture(t); f.store.publish(input()); const before = pointers(f.root);
  if (['null snapshot', 'array snapshot', 'missing source', 'array source'].includes(name)) assert.throws(() => f.store.publish(change(input(2))), { code: 'VIEWER_SNAPSHOT_INVALID' });
  else assert.throws(() => f.store.publish(change(input(2))));
  retained(f.root, before);
  assert.equal(existsSync(f.store.path('journal.json')), false); assert.equal(existsSync(f.store.path('locks', 'publisher.lock')), false);
});

test('an exact regular pinned source and explicit valid verifier result permit publication; substituted bytes fail closed', t => {
  const f = fixture(t, { sourceVerifier: () => ({ valid: true }) }); mkdirSync(f.store.path('pins')); writeFileSync(f.store.path('pins', 'source'), 'original\n');
  const pin = { path: 'pins/source', ref: sha256Ref('original\n') }; f.store.publish(input(1, { pinnedSources: [pin] }));
  const before = pointers(f.root); writeFileSync(f.store.path('pins', 'source'), 'substituted\n');
  assert.throws(() => f.store.publish(input(2, { pinnedSources: [pin] })), { code: 'VIEWER_PINNED_SOURCE_SUBSTITUTED' }); retained(f.root, before);
});

test('abandonment retains an exact archived prepared journal and never changes prior active/history', t => {
  const f = prepared(t); const original = bytes(f.root, 'journal.json');
  const result = f.store.abandonPreparedJournal({ expected: abandonmentExpected(f.journal) }); assert.equal(result.abandoned, true);
  if (!result.abandoned) assert.fail('Expected actual abandonment.');
  assert.deepEqual(bytes(f.root, `staging/abandoned-journals/${refDigest(result.archive_ref)}.json`), original);
  retained(f.root, f.previous); assert.equal(existsSync(f.store.path('journal.json')), false);
  assert.deepEqual(f.store.abandonPreparedJournal(), { abandoned: false });
  const next = f.store.publish(input(2)); assert.equal(f.store.readActive().manifest_ref, next.manifestRef);
});
for (const phase of ['abandon_archived', 'abandon_removed']) test(`abandonment interruption at ${phase} retains durable proof and resumes safely`, t => {
  const f = prepared(t); const original = bytes(f.root, 'journal.json'), expected = abandonmentExpected(f.journal);
  assert.throws(() => f.store.abandonPreparedJournal({ expected, failurePhase: phase }), { code: 'VIEWER_PUBLICATION_INTERRUPTED' });
  retained(f.root, f.previous); assert.deepEqual(bytes(f.root, `staging/abandoned-journals/${refDigest(sha256Ref(original))}.json`), original);
  assert.equal(existsSync(f.store.path('journal.json')), phase === 'abandon_archived');
  assert.equal(f.store.abandonPreparedJournal({ expected }).abandoned, phase === 'abandon_archived'); retained(f.root, f.previous);
});
test('abandonment refuses mismatched reservations, noncanonical journals and already visible phases without overwriting evidence', t => {
  const f = prepared(t); const original = bytes(f.root, 'journal.json');
  for (const expected of [undefined, { ...abandonmentExpected(f.journal), tree_hash: 'd'.repeat(40) }]) {
    assert.throws(() => f.store.abandonPreparedJournal({ ...(expected ? { expected } : {}) }), { code: 'VIEWER_JOURNAL_IDENTITY_CONFLICT' }); assert.deepEqual(bytes(f.root, 'journal.json'), original); retained(f.root, f.previous);
  }
  writeFileSync(f.store.path('journal.json'), JSON.stringify(f.journal, null, 2));
  assert.throws(() => f.store.abandonPreparedJournal({ expected: abandonmentExpected(f.journal) }), { code: 'VIEWER_JOURNAL_CORRUPT' }); retained(f.root, f.previous);
  writeJson(f.root, 'journal.json', { ...f.journal, phase: 'history_prepared' });
  assert.throws(() => f.store.abandonPreparedJournal({ expected: abandonmentExpected(f.journal) }), { code: 'VIEWER_JOURNAL_VISIBLE' }); retained(f.root, f.previous);
});

const journalChanges: readonly [string, (value: UnknownRecord) => UnknownRecord][] = [
  ['unknown phase', value => ({ ...value, phase: 'not-a-phase' })],
  ['missing capture', value => ({ ...value, capture: null })],
  ['wrong reservation', value => ({ ...value, reservation: { ...object(value.reservation), snapshot_id: 'other' } })],
  ['wrong source', value => ({ ...value, source: { ...object(value.source), catalog: sha256Ref('substitute') } })],
  ['wrong sequence', value => ({ ...value, sequence: 3 })],
  ['wrong active UI', value => ({ ...value, active: { ...object(value.active), ui_bundle_ref: sha256Ref('wrong-ui') } })],
  ['missing pointer CAS', value => ({ ...value, cas: { ...object(value.cas), active: {} } })],
  ['wrong pointer digest', value => ({ ...value, cas: { ...object(value.cas), active: { ...object(field(value.cas, 'active')), new_ref: sha256Ref('wrong-active') } } })],
];
for (const [name, change] of journalChanges) test(`recovery rejects a durable journal with ${name}, retaining both pointers and exact rejected bytes`, t => {
  const f = prepared(t); writeJson(f.root, 'journal.json', change(f.journal)); const rejected = bytes(f.root, 'journal.json');
  assert.throws(() => f.store.recover()); retained(f.root, f.previous); assert.deepEqual(bytes(f.root, 'journal.json'), rejected);
});

for (const state of ['missing', 'old', 'new', 'substitute'] as const) test(`captured active-pointer backup recovery handles ${state} destination without clobbering substitutes`, t => {
  // This models the exact on-disk crash window after a real committed history
  // journal: the old active pointer has been captured before its conditional link.
  const f = prepared(t, 'history_committed'), backup = f.store.path('staging', 'edge-pointer-backup.json');
  const old = bytes(f.root, 'active.json'); copyFileSync(f.store.path('active.json'), backup);
  const changed = { ...f.journal, pointer_capture: { leaf: 'active.json', backup_path: path.basename(backup), expected_old_ref: sha256Ref(old) } }; writeJson(f.root, 'journal.json', changed);
  if (state === 'missing') rmSync(f.store.path('active.json'));
  if (state === 'new') writeJson(f.root, 'active.json', f.journal.active);
  if (state === 'substitute') writeFileSync(f.store.path('active.json'), 'operator substitute\n');
  if (state === 'substitute') {
    const before = bytes(f.root, 'active.json'); assert.throws(() => f.store.recover(), { code: 'VIEWER_POINTER_CAS_CONFLICT' });
    assert.deepEqual(bytes(f.root, 'active.json'), before); assert.deepEqual(readFileSync(backup), old); assert.deepEqual(journal(f.root), changed);
  } else { assert.equal(f.store.recover().recovered, true); assert.equal(f.store.readActive().sequence, 2); assert.equal(existsSync(backup), false); assert.equal(existsSync(f.store.path('journal.json')), false); }
});
for (const capture of [
  { leaf: '../active.json', backup_path: 'safe.json', expected_old_ref: sha256Ref('old') },
  { leaf: 'active.json', backup_path: '../outside.json', expected_old_ref: sha256Ref('old') },
]) test(`captured-pointer journal rejects unsafe ${capture.leaf}/${capture.backup_path} without filesystem traversal`, t => {
  const f = prepared(t); writeJson(f.root, 'journal.json', { ...f.journal, pointer_capture: capture });
  assert.throws(() => f.store.recover(), { code: 'VIEWER_JOURNAL_CORRUPT' }); retained(f.root, f.previous);
});
test('captured-pointer recovery refuses a substituted backup and retains the repair evidence', t => {
  const f = prepared(t); writeFileSync(f.store.path('staging', 'backup.json'), 'substituted backup');
  writeJson(f.root, 'journal.json', { ...f.journal, pointer_capture: { leaf: 'active.json', backup_path: 'backup.json', expected_old_ref: sha256Ref(f.previous.active) } });
  assert.throws(() => f.store.recover(), { code: 'VIEWER_JOURNAL_CORRUPT' }); retained(f.root, f.previous); assert.equal(bytes(f.root, 'staging/backup.json').toString('utf8'), 'substituted backup');
});

const manifestChanges: readonly [string, (value: BackendSnapshotManifest) => void][] = [
  ['PCR count', value => { value.counts.pcr += 1; }], ['alias count', value => { value.counts.alias += 1; }], ['coverage count', value => { value.counts.coverage += 1; }],
  ['catalog root kind', value => { value.refs.catalog_root = value.refs.alias_root; }],
  ['keyed alias identity', value => { value.refs.alias_entries['pcr.other'] = text(value.refs.alias_entries['pcr.legacy.edge']); delete value.refs.alias_entries['pcr.legacy.edge']; }],
  ['coverage coordinate source', value => { value.source.coverage = []; }],
  ['coverage keyed identity', value => { const ref = text(value.refs.coverage_entries['cpc:3.0:01111']); value.refs.coverage_entries = { 'cpc:3.0:99999': ref }; }],
  ['coverage PCR absent', value => { value.refs.pcr_entries = {}; }],
  ['catalog shard kind', value => { const prefix = Object.keys(value.refs.catalog_shards)[0]; assert.ok(prefix); value.refs.catalog_shards[prefix] = value.refs.catalog_root; }],
  ['coverage shard kind', value => { value.refs.coverage_shards['cpc:3.0/01'] = value.refs.coverage_root; }],
  ['initial predecessor identity', value => { value.previous_snapshot_id = 'unretained'; }],
];
for (const [name, change] of manifestChanges) test(`rehashed manifest ${name} tampering fails semantic validation while the original active snapshot remains readable`, t => {
  const f = fixture(t), result = f.store.publish(input()), before = pointers(f.root), manifest = f.store.readManifest(result.manifestRef);
  change(manifest); const ref = rehashManifest(f.store, manifest);
  assert.throws(() => f.store.readManifest(ref), { code: 'VIEWER_MANIFEST_CORRUPT' }); retained(f.root, before); assert.equal(f.store.readActive().manifest_ref, result.manifestRef);
});
for (const change of ['sequence', 'snapshot'] as const) test(`rehashed second manifest refuses wrong predecessor ${change}`, t => {
  const f = fixture(t); f.store.publish(input()); const second = f.store.publish(input(2)), manifest = f.store.readManifest(second.manifestRef), before = pointers(f.root);
  if (change === 'sequence') manifest.sequence = 3; else manifest.previous_snapshot_id = 'wrong-first-snapshot';
  assert.throws(() => f.store.readManifest(rehashManifest(f.store, manifest)), { code: 'VIEWER_MANIFEST_CORRUPT' }); retained(f.root, before);
});
test('duplicated catalog index membership still fails after all changed objects and the manifest are correctly rehashed', t => {
  const f = fixture(t), result = f.store.publish(input()), manifest = f.store.readManifest(result.manifestRef), before = pointers(f.root);
  const prefix = Object.keys(manifest.refs.catalog_shards)[0]; assert.ok(prefix); const shardRef = manifest.refs.catalog_shards[prefix]; assert.ok(shardRef);
  const shard = f.store.readObject(shardRef), shardEntry = object(shard.entry), items = shardEntry.entries; assert.ok(Array.isArray(items));
  const duplicateRef = f.store.writeObject({ ...shard, entry: { ...shardEntry, entries: [...items, ...items] } }); manifest.refs.catalog_shards[prefix] = duplicateRef;
  const root = f.store.readObject(manifest.refs.catalog_root); manifest.refs.catalog_root = f.store.writeObject({ ...root, entry: { ...object(root.entry), shards: manifest.refs.catalog_shards } });
  assert.throws(() => f.store.readManifest(rehashManifest(f.store, manifest)), { code: 'VIEWER_MANIFEST_CORRUPT' }); retained(f.root, before);
});
for (const change of ['snapshot_id', 'ui_bundle_id', 'ui_bundle_url', 'manifest_schema_version'] as const) test(`route ${change} substitution cannot be accepted through a valid retained manifest`, t => {
  const f = fixture(t), result = f.store.publish(input()), routePath = `routes/${refDigest(result.manifestRef)}.json`, original = bytes(f.root, routePath), route = jsonFile(f.root, routePath);
  route[change] = change === 'manifest_schema_version' ? 2 : 'substituted'; writeJson(f.root, routePath, route);
  assert.throws(() => f.store.readManifest(result.manifestRef)); writeFileSync(f.store.path(routePath), original); assert.equal(f.store.readActive().manifest_ref, result.manifestRef);
});
test('malformed route and digest-addressed malformed JSON fail before any publication state can be used', t => {
  const f = fixture(t), result = f.store.publish(input()), routePath = `routes/${refDigest(result.manifestRef)}.json`, original = bytes(f.root, routePath);
  writeJson(f.root, routePath, null); assert.throws(() => f.store.readRoute(result.manifestRef), { code: 'VIEWER_ROUTE_CORRUPT' }); writeFileSync(f.store.path(routePath), original);
  const corrupt = Buffer.from('not JSON\n'), ref = sha256Ref(corrupt); writeFileSync(f.store.path('objects', `${refDigest(ref)}.json`), corrupt);
  assert.throws(() => f.store.readObject(ref), { code: 'VIEWER_STORE_JSON_INVALID' }); assert.throws(() => f.store.readObject(sha256Ref('missing')), { code: 'VIEWER_IMMUTABLE_MISSING' });
  assert.equal(f.store.readActive().manifest_ref, result.manifestRef);
});

for (const change of ['latest_sequence', 'sequence_gap', 'manifest_sequence'] as const) test(`retained history refuses ${change} substitution even with correctly hashed history objects`, t => {
  const f = fixture(t), first = f.store.publish(input()), head = jsonFile(f.root, 'history-head.json'), original = bytes(f.root, 'history-head.json');
  if (change === 'latest_sequence') head.latest_sequence = 9;
  else {
    const page = f.store.readObject(head.page_ref), entries = change === 'sequence_gap' ? [{ sequence: 2, manifest_ref: first.manifestRef }] : [{ sequence: 1, manifest_ref: first.manifestRef }, { sequence: 2, manifest_ref: first.manifestRef }];
    head.page_ref = f.store.writeObject({ ...page, entry: { entries, previous_page_ref: null } }); head.latest_sequence = entries.length;
  }
  writeJson(f.root, 'history-head.json', head); assert.throws(() => f.store.readHistory(), { code: 'VIEWER_HISTORY_CORRUPT' }); assert.deepEqual(bytes(f.root, 'history-head.json'), canonicalBytes(head));
  writeFileSync(f.store.path('history-head.json'), original); assert.equal(f.store.readActive().manifest_ref, first.manifestRef);
});
for (const leaf of ['active.json', 'history-head.json'] as const) test(`publishing refuses a partial store with missing ${leaf}, preserving the surviving pointer`, t => {
  const f = fixture(t); f.store.publish(input()); const other = leaf === 'active.json' ? 'history-head.json' : 'active.json', before = bytes(f.root, other);
  rmSync(f.store.path(leaf)); assert.throws(() => f.store.publish(input(2)), { code: 'VIEWER_STORE_PARTIAL_STATE' }); assert.deepEqual(bytes(f.root, other), before); assert.equal(existsSync(f.store.path(leaf)), false);
});
test('filesystem directory and symlink substitutions never turn into artifact writes or source pin reads', t => {
  const f = fixture(t); f.store.probe(); const elsewhere = path.join(f.root, 'operator'); mkdirSync(elsewhere); writeFileSync(path.join(elsewhere, 'keep'), 'operator bytes');
  mkdirSync(f.store.path('active.json')); assert.throws(() => f.store.probe(), { code: 'VIEWER_STORE_UNSAFE_PATH' }); rmSync(f.store.path('active.json'), { recursive: true });
  symlinkSync(elsewhere, f.store.path('pins'), 'dir'); assert.throws(() => f.store.publish(input(1, { pinnedSources: [{ path: 'pins/keep', ref: sha256Ref('operator bytes') }] })), { code: 'VIEWER_STORE_UNSAFE_PATH' });
  assert.equal(readFileSync(path.join(elsewhere, 'keep'), 'utf8'), 'operator bytes'); assert.equal(existsSync(f.store.path('active.json')), false);
});
test('source-verifier failure during recovery retains the crash journal and both prior pointers', t => {
  const f = prepared(t), original = bytes(f.root, 'journal.json');
  const refusing = new ViewerSnapshotStore({ root: f.root, generatorVersion: 'edge-v1', sourceVerifier: () => ({ valid: false }) });
  assert.throws(() => refusing.recover(), { code: 'VIEWER_SOURCE_VERIFICATION_FAILED' }); retained(f.root, f.previous); assert.deepEqual(bytes(f.root, 'journal.json'), original);
  assert.equal(f.store.recover().recovered, true); assert.equal(f.store.readActive().sequence, 2);
});

for (const change of ['snapshot_hash', 'snapshot_id', 'sequence', 'ui_bundle_ref'] as const) test(`active pointer ${change} substitution is refused without modifying its bytes`, t => {
  const f = fixture(t); f.store.publish(input()); const original = bytes(f.root, 'active.json'), active = jsonFile(f.root, 'active.json');
  active[change] = change === 'sequence' ? 2 : change === 'snapshot_id' ? 'wrong-snapshot' : sha256Ref('wrong-active-reference');
  writeJson(f.root, 'active.json', active); const rejected = bytes(f.root, 'active.json');
  assert.throws(() => f.store.readActive(), { code: 'VIEWER_ACTIVE_CORRUPT' }); assert.deepEqual(bytes(f.root, 'active.json'), rejected);
  writeFileSync(f.store.path('active.json'), original); assert.equal(f.store.readActive().sequence, 1);
});
test('an older otherwise valid active pointer cannot bypass the latest retained history entry', t => {
  const f = fixture(t); f.store.publish(input()); const old = bytes(f.root, 'active.json'); const second = f.store.publish(input(2)), current = bytes(f.root, 'active.json');
  writeFileSync(f.store.path('active.json'), old); assert.throws(() => f.store.readActive(), { code: 'VIEWER_ACTIVE_HISTORY_MISMATCH' }); assert.deepEqual(bytes(f.root, 'active.json'), old);
  writeFileSync(f.store.path('active.json'), current); assert.equal(f.store.readActive().manifest_ref, second.manifestRef);
});
for (const change of ['wrong_page_kind', 'oversized_page'] as const) test(`retained history rejects a correctly hashed ${change} before accepting any entry`, t => {
  const f = fixture(t), first = f.store.publish(input()), head = jsonFile(f.root, 'history-head.json'), original = bytes(f.root, 'history-head.json');
  if (change === 'wrong_page_kind') head.page_ref = f.store.readManifest(first.manifestRef).capture.ui_bundle_ref;
  else { const page = f.store.readObject(head.page_ref); head.page_ref = f.store.writeObject({ ...page, entry: { entries: [1, 2, 3].map(sequence => ({ sequence, manifest_ref: first.manifestRef })), previous_page_ref: null } }); }
  writeJson(f.root, 'history-head.json', head); assert.throws(() => f.store.readHistory(), { code: 'VIEWER_HISTORY_CORRUPT' });
  writeFileSync(f.store.path('history-head.json'), original); assert.equal(f.store.readActive().manifest_ref, first.manifestRef);
});
for (const predecessor of [id, 'pcr.unretained']) test(`rehashing a retained rename cannot authorize predecessor ${predecessor}`, t => {
  const f = fixture(t); f.store.publish(input()); const second = f.store.publish(input(2)), manifest = f.store.readManifest(second.manifestRef), head = jsonFile(f.root, 'history-head.json'), original = bytes(f.root, 'history-head.json');
  manifest.lineage.renames = { [id]: predecessor }; const badManifest = rehashManifest(f.store, manifest), page = f.store.readObject(head.page_ref);
  head.page_ref = f.store.writeObject({ ...page, entry: { ...object(page.entry), entries: [{ sequence: 2, manifest_ref: badManifest }] } }); writeJson(f.root, 'history-head.json', head);
  assert.throws(() => f.store.readHistory(), { code: 'VIEWER_HISTORY_CORRUPT' }); assert.deepEqual(bytes(f.root, 'history-head.json'), canonicalBytes(head));
  writeFileSync(f.store.path('history-head.json'), original); assert.equal(f.store.readActive().manifest_ref, second.manifestRef);
});
test('a retained manifest cannot substitute a valid non-UI object for its UI bundle', t => {
  const f = fixture(t), first = f.store.publish(input()), manifest = f.store.readManifest(first.manifestRef), before = pointers(f.root);
  manifest.capture.ui_bundle_ref = manifest.refs.catalog_root; const value = canonicalBytes(manifest), ref = sha256Ref(value); writeFileSync(f.store.path('manifests', `${refDigest(ref)}.json`), value);
  assert.throws(() => f.store.readManifest(ref), { code: 'VIEWER_UI_BUNDLE_MISSING' }); retained(f.root, before);
});
