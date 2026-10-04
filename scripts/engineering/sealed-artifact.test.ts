import assert from 'node:assert/strict';
import { appendFileSync, existsSync, mkdirSync, mkdtempSync, readFileSync, realpathSync, rmSync, writeFileSync } from 'node:fs';
import { tmpdir } from 'node:os';
import path from 'node:path';
import test from 'node:test';
import { createHash } from 'node:crypto';
import { qualifySealedArtifacts } from './sealed-artifact.ts';
import { OMITTED_ALLOCATION_CONDITION, sealedProductFixture } from './fixtures/sealed-product-fixture.ts';
import { field, record } from '../../builder/scripts/release-types.ts';

test('malformed existing seal fails before npm or installation and preserves a fresh failure report', async t => {
  const base = mkdtempSync(path.join(realpathSync(tmpdir()), 'sealed-early-rejection-')); t.after(() => rmSync(base, { recursive: true, force: true }));
  const root = path.join(base, 'sealed'); mkdirSync(root); writeFileSync(path.join(root, 'release.json'), '{}\n');
  const original = readFileSync(path.join(root, 'release.json'));
  const result = await qualifySealedArtifacts({ root, report: path.join(base, 'evidence'), expectedSource: 'a'.repeat(40), npmCli: path.join(base, 'must-not-execute') });
  assert.equal(result.passed, false); assert.equal(result.installation.directory, null); assert.equal(result.installation.removed, true); assert.equal(result.runtime.npm, null);
  assert.equal(result.checks[0]?.name, 'sealed_artifacts'); assert.equal(result.checks[0]?.passed, false);
  assert.deepEqual(readFileSync(path.join(root, 'release.json')), original);
  assert.deepEqual(JSON.parse(readFileSync(path.join(result.report, 'qualification.json'), 'utf8')), result);
});

test('existing evidence and bundle-contained report paths are never replaced or deleted', async t => {
  const base = mkdtempSync(path.join(realpathSync(tmpdir()), 'sealed-report-boundary-')); t.after(() => rmSync(base, { recursive: true, force: true }));
  const root = path.join(base, 'sealed'); mkdirSync(root); const report = path.join(base, 'evidence'); mkdirSync(report); writeFileSync(path.join(report, 'keep'), 'previous evidence');
  await assert.rejects(qualifySealedArtifacts({ root, report, expectedSource: 'a'.repeat(40) }), /already exists/u);
  await assert.rejects(qualifySealedArtifacts({ root, report: path.join(root, 'evidence'), expectedSource: 'a'.repeat(40) }), /outside/u);
  assert.equal(readFileSync(path.join(report, 'keep'), 'utf8'), 'previous evidence');
  assert.equal(existsSync(path.join(root, 'evidence')), false);
});

test('wrong source identity and altered tarball bytes are refused before installation', { timeout: 120_000 }, async t => {
  const f = await sealedProductFixture(t, false);
  const wrong = await qualifySealedArtifacts({ root: f.root, report: path.join(f.base, 'wrong-source'), expectedSource: 'a'.repeat(40), npmCli: path.join(f.base, 'must-not-run') });
  assert.equal(wrong.passed, false); assert.match(wrong.error ?? '', /expected source/u); assert.equal(wrong.installation.directory, null);
  const target = path.join(f.root, f.manifest.packages.tool.filename); const original = readFileSync(target); appendFileSync(target, 'changed bytes');
  const changed = await qualifySealedArtifacts({ root: f.root, report: path.join(f.base, 'tampered'), expectedSource: f.identity.sourceCommit, npmCli: path.join(f.base, 'must-not-run') });
  assert.equal(changed.passed, false); assert.match(changed.error ?? '', /checksum differs/u); assert.equal(changed.installation.directory, null); assert.equal(changed.runtime.npm, null);
  assert.deepEqual(readFileSync(target), Buffer.concat([original, Buffer.from('changed bytes')]));
  assert.ok(existsSync(path.join(changed.report, 'qualification.json')));
});

test('full expected product identity refuses another fingerprint with the same source commit', { timeout: 120_000 }, async t => {
  const f = await sealedProductFixture(t, false);
  const result = await qualifySealedArtifacts({ root: f.root, report: path.join(f.base, 'wrong-fingerprint'), expectedSource: f.identity.sourceCommit,
    expectedIdentity: { ...f.identity, sourceFingerprint: `sha256:${'a'.repeat(64)}` }, npmCli: path.join(f.base, 'must-not-run') });
  assert.equal(result.passed, false); assert.match(result.error ?? '', /identities differ/u); assert.equal(result.installation.directory, null);
});

test('an installable sealed transport with no emitted consumer bin cannot pass and always cleans installation', { timeout: 120_000 }, async t => {
  const f = await sealedProductFixture(t, false);
  const result = await qualifySealedArtifacts({ root: f.root, report: path.join(f.base, 'malformed-consumer'), expectedSource: f.identity.sourceCommit, npmCli: f.npmCli });
  assert.equal(result.passed, false); assert.equal(result.checks.find(check => check.name === 'sealed_artifacts')?.passed, true);
  assert.equal(result.checks.find(check => check.name === 'offline_install')?.passed, true);
  assert.equal(result.checks.find(check => check.name === 'installed_identity')?.passed, false);
  assert.ok(result.installation.directory); assert.equal(result.installation.removed, true); assert.equal(existsSync(result.installation.directory), false);
  assert.equal(readFileSync(path.join(result.report, 'qualification.json'), 'utf8'), `${JSON.stringify(result, null, 2)}\n`);
  assert.ok(existsSync(path.join(result.report, 'offline_install.stdout')));
  assert.equal(result.runtime.platform, process.platform); assert.equal(result.runtime.architecture, process.arch); assert.equal(result.runtime.node, process.versions.node);
});

test('real emitted tool and one-record SQLite seal install offline and preserve observed consumer evidence', { timeout: 300_000 }, async t => {
  const f = await sealedProductFixture(t, true);
  const result = await qualifySealedArtifacts({ root: f.root, report: path.join(f.base, 'qualified'), expectedSource: f.identity.sourceCommit, expectedIdentity: f.identity, expectedArchitecture: process.arch, npmCli: f.npmCli });
  assert.equal(result.passed, true, result.error ?? JSON.stringify(result.checks));
  assert.ok(result.selected?.id); assert.equal(result.selected.recordKind, 'methodology');
  assert.equal(result.checks.find(check => check.name === 'registry_no_network_sanity')?.detail.requests, 0);
  assert.equal(result.checks.find(check => check.name === 'offline_install')?.passed, true);
  assert.equal(result.checks.find(check => check.name === 'sqlite_integrity')?.passed, true);
  assert.equal(result.checks.find(check => check.name === 'independent_source_guidance')?.passed, true);
  assert.equal(result.checks.find(check => check.name === 'guidance_source_fidelity')?.passed, true);
  assert.equal(result.checks.find(check => check.name === 'batch_source_fidelity')?.passed, true);
  assert.equal(result.checks.find(check => check.name === 'invalid_source')?.passed, true);
  assert.equal(result.installation.removed, true); assert.ok(result.installation.directory); assert.equal(existsSync(result.installation.directory), false);
  assert.ok(existsSync(path.join(result.report, 'guidance.json'))); assert.ok(existsSync(path.join(result.report, 'batch.json')));
  assert.deepEqual(JSON.parse(readFileSync(path.join(result.report, 'guidance.json'), 'utf8')), JSON.parse(readFileSync(path.join(result.report, 'source-guidance.json'), 'utf8')));
  const recheck = await qualifySealedArtifacts({ root: f.root, report: path.join(f.base, 'qualified-again'), expectedSource: f.identity.sourceCommit, npmCli: f.npmCli });
  assert.equal(recheck.passed, true, recheck.error ?? 'Second sealed read failed');
  assert.equal(recheck.selected?.id, result.selected.id);
  assert.notEqual(recheck.installation.directory, result.installation.directory, 'Each run gets an independently empty installation/cache.');
  const wrongArchitecture = await qualifySealedArtifacts({root: f.root, report: path.join(f.base, 'wrong-architecture'), expectedSource: f.identity.sourceCommit, expectedArchitecture: 'not-this-runner', npmCli: f.npmCli});
  assert.equal(wrongArchitecture.passed, false); assert.match(wrongArchitecture.error ?? '', /architecture differs/u);
  assert.equal(wrongArchitecture.installation.directory, null);
});

for (const mutation of ['empty_context', 'omit_unit', 'alter_condition_rehash'] as const) {
  test(`a correctly sealed real compiled tool with ${mutation} fails independent source-fidelity qualification`, { timeout: 300_000 }, async t => {
    const f = await sealedProductFixture(t, true, mutation);
    const result = await qualifySealedArtifacts({ root: f.root, report: path.join(f.base, mutation), expectedSource: f.identity.sourceCommit, npmCli: f.npmCli });
    assert.equal(result.passed, false); assert.match(result.error ?? '', /independently verified SQLite source guidance/u);
    for (const check of ['sealed_artifacts', 'offline_install', 'installed_identity', 'installed_sqlite_digest', 'sqlite_integrity', 'resolve', 'independent_source_guidance', 'guidance']) assert.equal(result.checks.find(value => value.name === check)?.passed, true, check);
    assert.equal(result.checks.find(check => check.name === 'guidance_source_fidelity')?.passed, false);
    const guidance: unknown = JSON.parse(readFileSync(path.join(result.report, 'guidance.json'), 'utf8'));
    const context = record(field(guidance, 'normative_context'));
    const units = context.units; assert.ok(Array.isArray(units));
    assert.equal(field(guidance, 'normative_context_provenance', 'context_sha256'), 'sha256:' + createHash('sha256').update(JSON.stringify(context), 'utf8').digest('hex'), 'Mutation remains internally hash-consistent.');
    const expectedUnits = result.checks.find(check => check.name === 'independent_source_guidance')?.detail.units; assert.equal(typeof expectedUnits, 'number');
    if (mutation === 'empty_context') { assert.equal(units.length, 0); assert.deepEqual(context.bindings, []); }
    if (mutation === 'omit_unit') { assert.ok(units.length > 0); assert.equal(units.length + 1, expectedUnits); }
    if (mutation === 'alter_condition_rehash') { assert.equal(units.length, expectedUnits); assert.ok(units.some(unit => field(unit, 'family') === 'allocation')); assert.ok(units.every(unit => !String(field(unit, 'markdown')).includes(OMITTED_ALLOCATION_CONDITION))); }
    assert.equal(result.installation.removed, true); assert.ok(result.installation.directory); assert.equal(existsSync(result.installation.directory), false);
  });
}

test('batch-only omission fails independent fidelity even when ordinary installed guidance matches the source', { timeout: 300_000 }, async t => {
  const f = await sealedProductFixture(t, true, 'batch_only_omission');
  const result = await qualifySealedArtifacts({ root: f.root, report: path.join(f.base, 'batch-only'), expectedSource: f.identity.sourceCommit, npmCli: f.npmCli });
  assert.equal(result.passed, false); assert.match(result.error ?? '', /Batch differs from independently verified complete source guidance/u);
  assert.equal(result.checks.find(check => check.name === 'guidance_source_fidelity')?.passed, true);
  assert.equal(result.checks.find(check => check.name === 'batch_source_fidelity')?.passed, false);
  const ordinary: unknown = JSON.parse(readFileSync(path.join(result.report, 'guidance.json'), 'utf8'));
  const expected: unknown = JSON.parse(readFileSync(path.join(result.report, 'source-guidance.json'), 'utf8')); assert.deepEqual(ordinary, expected);
  const batch: unknown = JSON.parse(readFileSync(path.join(result.report, 'batch.json'), 'utf8'));
  const items = field(batch, 'items'), units = field(expected, 'normative_context', 'units'); assert.ok(Array.isArray(items) && Array.isArray(units)); assert.equal(items.length, 2);
  for (const item of items) { const selected = field(item, 'normative_context', 'units'); assert.ok(Array.isArray(selected)); assert.equal(selected.length + 1, units.length); }
  assert.equal(result.installation.removed, true);
});
