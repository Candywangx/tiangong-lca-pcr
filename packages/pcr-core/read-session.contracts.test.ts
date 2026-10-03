import assert from 'node:assert/strict';
import { readFileSync, rmSync, writeFileSync } from 'node:fs';
import path from 'node:path';
import test, { type TestContext } from 'node:test';
import { buildGuidance, getVerifiedPcrProjection } from './src/index.ts';
import { withPcrReadSession, type PcrReadSession } from './src/read-session.ts';
import { OfflineLibrary } from './src/offline-library.ts';
import { parseYaml, renderYaml } from './src/yaml-lite.ts';
import { isUnknownRecord } from './src/types.ts';
import { validateGuidance } from './src/contracts.ts';
import { createAuthoringPcr } from '../../builder/lib/pcr-authoring-fixture.ts';
import { parsePcrMarkdownToStructured } from '../../builder/lib/markdown-projection.ts';
import { structuredProjectionYaml } from '../../builder/lib/structured-yaml-projection.ts';

import { SESSION_PCR_ID as id, SESSION_PCR_PATH as relative, createReadSessionFixture,
  createReadSessionLibraries, installSessionFixtureCatalog as catalog, sessionTemporaryRoot as temporary,
  writeSessionFixtureFile as put } from './fixtures/read-session-fixture.ts';
function repository(t: TestContext): string { return createReadSessionFixture(t).root; }
function retained(value: PcrReadSession | undefined): PcrReadSession { assert.ok(value); return value; }
function closed(session: PcrReadSession): void {
  for (const read of [() => session.guidance(id), () => session.projection(id), () => session.guidanceMany([]), () => session.projectionMany([])]) {
    assert.throws(read, { code: 'PCR_READ_SESSION_CLOSED' });
  }
  assert.ok(Object.isFrozen(session.stats()));
}

test('repository sessions match complete single APIs, preserve batch order/duplicates and allow empty SDK batches', t => {
  const root = repository(t), guidance = buildGuidance({ root, pcrId: id }), projection = getVerifiedPcrProjection({ root, pcrId: id });
  let held: PcrReadSession | undefined;
  const result = withPcrReadSession({ kind: 'repository', root }, session => {
    held = session;
    const actual = session.guidance(id), contract = validateGuidance(actual);
    assert.equal(contract.valid, true, JSON.stringify(contract.errors));
    assert.deepEqual(Object.keys(actual).sort(), Object.keys(guidance).sort());
    assert.deepEqual(actual, guidance); assert.deepEqual(session.projection(id), projection);
    assert.deepEqual(session.guidanceMany([id, id]), [guidance, guidance]);
    assert.deepEqual(session.projectionMany([id, id]), [projection, projection]);
    assert.deepEqual(session.guidanceMany([]), []); assert.deepEqual(session.projectionMany([]), []);
    assert.equal(session.stats().records_loaded, 1); assert.equal(session.stats().cache_hits, 5);
    assert.equal(session.stats().alias_validations, 1); return session.source;
  });
  assert.deepEqual(result, { kind: 'repository', root });
  assert.equal(retained(held).stats().final_verifications, 1); closed(retained(held));
});

test('distinct batch records remain in requested order with independent duplicate outputs', t => {
  const { root, secondId } = createReadSessionFixture(t, { includeSecond: true });
  withPcrReadSession({ kind: 'repository', root }, session => {
    const requested = [secondId, id, secondId];
    const projections = session.projectionMany(requested), guidance = session.guidanceMany(requested);
    assert.deepEqual(projections.map(value => value.pcr.id), requested);
    assert.deepEqual(guidance.map(value => value.pcr.id), requested);
    assert.notStrictEqual(projections[0], projections[2]); assert.notStrictEqual(guidance[0], guidance[2]);
    assert.equal(session.stats().records_loaded, 2); assert.equal(session.stats().cache_hits, 4);
  });
});

test('public source selection never forwards caller-authored alias validation receipts', t => {
  const root = repository(t);
  const source = { kind: 'repository' as const, root,
    validatedAliasReuse: { fingerprint: 'caller-authored', aliases: [{ source_pcr_id: id }] } };
  withPcrReadSession(source, session => {
    assert.equal(session.stats().alias_validations, 1);
    assert.equal(session.projection(id).pcr.id, id);
  });
});

test('cached projections/guidance and stats cannot be mutated to influence subsequent reads', t => {
  const root = repository(t);
  withPcrReadSession({ kind: 'repository', root }, session => {
    const initial = session.projection(id), expected = structuredClone(initial);
    initial.pcr.id = 'caller-mutated';
    const unit = initial.normative_context.units[0]; assert.ok(unit);
    assert.equal(Reflect.set(unit, 'markdown', 'caller-mutated source context'), true);
    initial.structured.allocation_rules[0]?.source_ids.push('caller-mutated');
    const guidance = session.guidance(id); guidance.validation_notes.length = 0; guidance.pcr.title['en-US'] = 'caller-mutated';
    assert.deepEqual(session.projection(id), expected);
    assert.equal(Reflect.set(session.stats(), 'cache_hits', 999), false);
    assert.notEqual(session.stats().cache_hits, 999);
    assert.ok(session.guidance(id).validation_notes.length > 0);
  });
});

test('batch limits and invalid/unusable selections fail without returning a partial array', t => {
  const root = repository(t);
  withPcrReadSession({ kind: 'repository', root }, session => {
    for (const read of [() => session.guidanceMany(Array.from({ length: 101 }, () => id)),
      () => session.projectionMany(['']), () => session.guidanceMany([' '])]) assert.throws(read, { code: 'PCR_READ_BATCH_INVALID' });
    assert.equal(session.stats().records_loaded, 0);
    let partial: unknown;
    assert.throws(() => { partial = session.projectionMany([id, 'pcr.absent']); }, /PCR not found/u);
    assert.equal(partial, undefined);
  });
  const manifestPath = path.join(root, relative, 'manifest.yaml');
  const manifest = parseYaml(readFileSync(manifestPath, 'utf8')); assert.ok(isUnknownRecord(manifest));
  manifest.status = 'deprecated'; manifest.content_maturity = 'deprecated_methodology'; writeFileSync(manifestPath, renderYaml(manifest));
  assert.throws(() => withPcrReadSession({ kind: 'repository', root }, session => session.guidanceMany([id])), { code: 'PCR_NOT_USABLE_FOR_GUIDANCE' });
});

test('selected body changes are rejected before callback output can escape, even on a cache hit', t => {
  const root = repository(t); let output: unknown; let held: PcrReadSession | undefined;
  assert.throws(() => { output = withPcrReadSession({ kind: 'repository', root }, session => {
    held = session; const initial = session.guidance(id);
    const sourcePath = path.join(root, relative, 'pcr.en-US.md'); writeFileSync(sourcePath, readFileSync(sourcePath, 'utf8') + '\nChanged source.\n');
    assert.deepEqual(session.guidance(id), initial); return initial;
  }); }, { code: 'PCR_READ_SESSION_STALE' });
  assert.equal(output, undefined); closed(retained(held));
});

test('catalog changes cannot return a successful empty or populated repository session', t => {
  for (const load of [false, true]) {
    const root = repository(t); let output: unknown;
    assert.throws(() => { output = withPcrReadSession({ kind: 'repository', root }, session => {
      if (load) session.projection(id);
      const target = path.join(root, 'library/catalog.yaml'); writeFileSync(target, readFileSync(target, 'utf8') + '\n# changed catalog bytes\n');
      return 'must not escape';
    }); }, { code: 'PCR_READ_CONTEXT_STALE' });
    assert.equal(output, undefined);
  }
});

test('Promise and function-thenable callbacks are rejected; methods close on success and failure', async t => {
  const root = repository(t); let held: PcrReadSession | undefined;
  assert.throws(() => withPcrReadSession({ kind: 'repository', root }, session => {
    held = session; return Promise.resolve().then(() => session.guidance(id));
  }), { code: 'PCR_READ_SESSION_ASYNC' });
  await Promise.resolve(); closed(retained(held));
  const thenable = Object.assign(() => 'value', { then() {} });
  assert.throws(() => withPcrReadSession({ kind: 'repository', root }, () => thenable), { code: 'PCR_READ_SESSION_ASYNC' });
  assert.throws(() => withPcrReadSession({ kind: 'repository', root }, session => {
    held = session; throw new Error('callback failed');
  }), /callback failed/u);
  closed(retained(held));
});

test('actual SQLite sessions pin/verify source identity and close their owned handle after success/error', t => {
  const { a } = createReadSessionLibraries(t); const opened: OfflineLibrary[] = [], original = OfflineLibrary.prototype.close;
  t.mock.method(OfflineLibrary.prototype, 'close', function (this: OfflineLibrary) { opened.push(this); original.call(this); });
  let held: PcrReadSession | undefined;
  const result = withPcrReadSession({ kind: 'library', filename: a.filename }, session => {
    held = session; assert.equal(session.source.kind, 'library');
    assert.ok(session.source.kind === 'library'); assert.equal(session.source.verified, true);
    assert.equal(session.source.content_version, '0.1.0'); assert.equal(session.source.sha256, a.manifest.sha256);
    assert.equal(session.stats().alias_validations, 0); return session.guidanceMany([id, id]);
  });
  assert.equal(result.length, 2); assert.deepEqual(result[0], result[1]); closed(retained(held));
  assert.equal(retained(held).stats().final_verifications, 0); assert.equal(opened.length, 1); assert.equal(opened[0]?.db, null);
  assert.throws(() => withPcrReadSession({ kind: 'library', filename: a.filename }, () => { throw new Error('callback failed'); }), /callback failed/u);
  assert.equal(opened.length, 2); assert.equal(opened[1]?.db, null);
  assert.throws(() => withPcrReadSession({ kind: 'library', filename: a.filename, expectedSha256: `sha256:${'0'.repeat(64)}` }, () => 'never'), /SHA-256 mismatch/u);
  assert.equal(opened[2]?.db, null);
  withPcrReadSession({ kind: 'library', filename: a.filename, verify: false }, session => {
    assert.ok(session.source.kind === 'library'); assert.equal(session.source.verified, false);
  });
  withPcrReadSession({ kind: 'library', filename: a.filename, verify: false, expectedSha256: a.manifest.sha256 }, session => {
    assert.ok(session.source.kind === 'library'); assert.equal(session.source.verified, true);
  });
});

test('invalid library verification scalars fail before opening a source or running its callback', () => {
  let callbacks = 0;
  const read = () => { callbacks += 1; return 'must not run'; };
  const filename = '/must-not-open-invalid-verification-options.sqlite';
  // These JS/JSON boundary probes deliberately avoid assigning malformed input
  // the typed SDK selector shape. Defined null is also invalid rather than a
  // hash-present claim after the library constructor defaults it away.
  for (const verify of [null, 0, 1, 'yes', 'false', {}, []]) {
    assert.throws(() => Reflect.apply(withPcrReadSession, undefined, [{ kind: 'library', filename, verify }, read]), { code: 'PCR_READ_SOURCE_INVALID' });
  }
  for (const expectedSha256 of [null, false, 0, {}, [], '', 'sha256:xyz', `sha256:${'A'.repeat(64)}`]) {
    assert.throws(() => Reflect.apply(withPcrReadSession, undefined, [{ kind: 'library', filename, verify: false, expectedSha256 }, read]), { code: 'PCR_READ_SOURCE_INVALID' });
  }
  assert.equal(callbacks, 0);
});

test('same-root nested library A/B and repository sessions retain explicit source scopes and restore on errors', t => {
  const { root, a, b } = createReadSessionLibraries(t), expected = getVerifiedPcrProjection({ root, pcrId: id }).normative_context.source_sha256;
  withPcrReadSession({ kind: 'library', filename: a.filename }, outer => {
    assert.equal(outer.projection(id).normative_context.source_sha256, expected);
    withPcrReadSession({ kind: 'library', filename: b.filename }, inner => {
      const different = inner.projection(id).normative_context.source_sha256; assert.notEqual(different, expected);
      assert.equal(outer.projection(id).normative_context.source_sha256, expected);
      withPcrReadSession({ kind: 'repository', root }, repository => {
        assert.equal(repository.projection(id).normative_context.source_sha256, expected);
        assert.equal(inner.projection(id).normative_context.source_sha256, different);
      });
      assert.equal(inner.projection(id).normative_context.source_sha256, different);
      assert.throws(() => withPcrReadSession({ kind: 'repository', root }, () => { throw new Error('nested repository failure'); }), /nested repository failure/u);
      assert.equal(inner.projection(id).normative_context.source_sha256, different);
    });
    assert.equal(outer.projection(id).normative_context.source_sha256, expected);
  });
});

test('LRU eviction retains exact record bindings and rejects a changed evicted manifest on reload', async t => {
  const root = temporary(t);
  const result = createAuthoringPcr(root);
  const templatePath = result.libraryPath, templateId = 'pcr.agriculture.crops.wheat-seed';
  const templateManifest = readFileSync(path.join(root, templatePath, 'manifest.yaml'), 'utf8');
  const english = readFileSync(path.join(root, templatePath, 'pcr.en-US.md'), 'utf8');
  const chinese = readFileSync(path.join(root, templatePath, 'pcr.zh-CN.md'), 'utf8');
  const entries: { id: string; path: string }[] = [];
  for (let index = 0; index < 101; index++) {
    const entry = { id: `pcr.session.records.record-${index}`, path: `library/pcrs/session/records/record-${index}` };
    const source = english.replaceAll(templateId, entry.id);
    put(root, `${entry.path}/manifest.yaml`, templateManifest.replaceAll(templateId, entry.id));
    put(root, `${entry.path}/pcr.en-US.md`, source); put(root, `${entry.path}/pcr.zh-CN.md`, chinese.replaceAll(templateId, entry.id));
    put(root, `${entry.path}/structured.yaml`, structuredProjectionYaml(parsePcrMarkdownToStructured(source), { sourceMarkdown: source }));
    entries.push(entry);
  }
  rmSync(path.join(root, templatePath), { recursive: true, force: true }); catalog(root, entries);
  const first = entries[0]; assert.ok(first); let held: PcrReadSession | undefined;
  assert.throws(() => withPcrReadSession({ kind: 'repository', root }, session => {
    held = session;
    for (const entry of entries) assert.equal(session.projection(entry.id).pcr.id, entry.id);
    assert.equal(session.stats().records_loaded, 101); assert.equal(session.stats().cache_hits, 0);
    const target = path.join(root, first.path, 'manifest.yaml'), manifest = parseYaml(readFileSync(target, 'utf8')); assert.ok(isUnknownRecord(manifest));
    manifest.version = '0.1.1'; writeFileSync(target, renderYaml(manifest));
    return session.projection(first.id);
  }), { code: 'PCR_READ_SESSION_STALE' });
  assert.equal(retained(held).stats().records_loaded, 101); closed(retained(held));
});
