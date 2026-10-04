import assert from 'node:assert/strict';
import { chmodSync, cpSync, existsSync, linkSync, mkdirSync, readFileSync, renameSync, rmSync, symlinkSync, writeFileSync } from 'node:fs';
import os from 'node:os';
import path from 'node:path';
import { randomUUID } from 'node:crypto';
import test from 'node:test';
import { spawnSync } from 'node:child_process';
import { inspectCatalogArtifactTransaction, recoverCatalogArtifactTransaction, runCatalogArtifactTransaction } from './catalog-artifact-transaction.ts';
import type { UnknownRecord } from './guards.ts';
import { catalogArtifacts, crash, errorIs, filesystemFault, json, put, readRecord, record, transactionFixture, type FilesystemFault } from './fixtures/transaction-recovery.ts';

function artifacts(journal: UnknownRecord): UnknownRecord[] {
  assert.ok(Array.isArray(journal.artifacts));
  return journal.artifacts.map(value => record(value));
}
function material(f: ReturnType<typeof transactionFixture>): string { return path.join(f.root, 'library/indexes/material.yaml'); }
function assertOld(f: ReturnType<typeof transactionFixture>): void {
  assert.equal(readFileSync(material(f), 'utf8'), 'old material\n');
  assert.equal(readFileSync(path.join(f.root, 'library/catalog.yaml'), 'utf8'), 'unchanged catalog\n');
  assert.equal(existsSync(path.join(f.root, 'classifications/indexes/new.json')), false);
}
function orphanName(): string { return `.journal.json.123.${randomUUID()}.tmp`; }

for (const phase of ['preparing', 'prepared', 'installing', 'backed-up', 'first-installed', 'installed', 'committed']) {
  test(`catalog crash at ${phase} recovers the whole set and is repeatable`, t => {
    const f = transactionFixture(t); crash(f, 'catalog', phase);
    const inspection = inspectCatalogArtifactTransaction({ root: f.root });
    assert.equal(inspection.recoveryRequired, true);
    const result = recoverCatalogArtifactTransaction({ root: f.root });
    assert.equal(result.action, phase === 'committed' ? 'finished' : 'rolled_back');
    if (phase === 'committed') {
      assert.equal(readFileSync(material(f), 'utf8'), 'new material\n');
      assert.equal(readFileSync(path.join(f.root, 'classifications/indexes/new.json'), 'utf8'), 'new coverage\n');
    } else assertOld(f);
    assert.equal(existsSync(f.catalog.transactionDir), false);
    assert.equal(recoverCatalogArtifactTransaction({ root: f.root }).action, 'nothing_to_recover');
  });
}

const corruptJournal: { name: string; change: (journal: UnknownRecord) => unknown; code?: string }[] = [
  { name: 'null', change: () => null }, { name: 'array', change: () => [] },
  { name: 'extra identity field', change: j => ({ ...j, attacker: true }) },
  ...(['schema_version', 'transaction_kind', 'transaction_id', 'command', 'phase', 'created_at_utc', 'updated_at_utc', 'artifacts'] as const).map(key => ({ name: `missing ${key}`, change: (j: UnknownRecord) => { delete j[key]; return j; } })),
  ...Object.entries({ schema_version: 2, transaction_kind: 'pcr-directory', transaction_id: '../escape', command: '', phase: 'unknown', created_at_utc: '2026-01-01', updated_at_utc: 'invalid', artifacts: [] }).map(([key, value]) => ({ name: `invalid ${key}`, change: (j: UnknownRecord) => ({ ...j, [key]: value }) })),
  { name: 'artifact extra field', change: j => { const a = artifacts(j); assert.ok(a[0]); a[0].extra = true; return { ...j, artifacts: a }; } },
  { name: 'artifact null', change: j => ({ ...j, artifacts: [null] }) },
  { name: 'duplicate path', change: j => { const a = artifacts(j); assert.ok(a[0] && a[1]); a[1].path = a[0].path; return { ...j, artifacts: a }; } },
  { name: 'duplicate order', change: j => { const a = artifacts(j); assert.ok(a[0] && a[1]); a[1].install_order = a[0].install_order; return { ...j, artifacts: a }; } },
  { name: 'noncontiguous order', change: j => { const a = artifacts(j); assert.ok(a[0]); a[0].install_order = 8; return { ...j, artifacts: a }; } },
  { name: 'fractional order', change: j => { const a = artifacts(j); assert.ok(a[0]); a[0].install_order = 0.5; return { ...j, artifacts: a }; } },
  { name: 'negative order', change: j => { const a = artifacts(j); assert.ok(a[0]); a[0].install_order = -1; return { ...j, artifacts: a }; } },
  { name: 'wrong write decision', change: j => { const a = artifacts(j); assert.ok(a[0]); a[0].write_required = false; return { ...j, artifacts: a }; } },
  { name: 'nonboolean write decision', change: j => { const a = artifacts(j); assert.ok(a[0]); a[0].write_required = 'yes'; return { ...j, artifacts: a }; } },
  { name: 'catalog installed first', change: j => { const a = artifacts(j); for (const item of a) item.install_order = item.path === 'library/catalog.yaml' ? 0 : item.install_order === 0 ? 2 : 1; return { ...j, artifacts: a }; } },
];
for (const descriptor of ['old', 'new']) {
  for (const [key, value] of Object.entries({ sha256: 'NOT_SHA256', byte_length: -1, mode: 0o1000, unexpected: true })) {
    corruptJournal.push({ name: `${descriptor} descriptor ${key}`, change: j => { const a = artifacts(j); assert.ok(a[0]); a[0][descriptor] = { ...record(a[0][descriptor]), [key]: value }; return { ...j, artifacts: a }; } });
  }
}
for (const { name, change, code = 'CATALOG_TRANSACTION_JOURNAL_UNTRUSTED' } of corruptJournal) {
  test(`catalog refuses ${name} journal without deleting evidence`, t => {
    const f = transactionFixture(t); crash(f, 'catalog', 'prepared');
    json(f.catalog.journalPath, change(readRecord(f.catalog.journalPath)));
    const bytes = readFileSync(f.catalog.journalPath);
    assert.throws(() => inspectCatalogArtifactTransaction({ root: f.root }), errorIs(code));
    assert.throws(() => recoverCatalogArtifactTransaction({ root: f.root, force: true }), errorIs(code));
    assert.deepEqual(readFileSync(f.catalog.journalPath), bytes);
    assert.equal(existsSync(f.catalog.stageDir), true); assertOld(f);
  });
}

for (const invalidPath of ['', '/absolute', '../escape', 'library/indexes/../escape', 'library//indexes/a', 'library/indexes/a/', 'library\\indexes\\a', 'library/indexes/\0a', '.', '..', 'Library/indexes/a', 'library/.pcr-builder-state', 'library/.pcr-builder-state/catalog/a', 'library/pcrs/a']) {
  test(`catalog rejects non-owned artifact path ${JSON.stringify(invalidPath)} before publication`, t => {
    const f = transactionFixture(t);
    assert.throws(() => runCatalogArtifactTransaction({ root: f.root, artifacts: [{ path: invalidPath, content: 'escape' }] }), errorIs('CATALOG_TRANSACTION_PATH_INVALID'));
    assertOld(f); assert.equal(existsSync(f.catalog.journalPath), false);
  });
}

test('catalog atomically finalizes one trustworthy temporary and removes orphan temporaries', t => {
  const f = transactionFixture(t); crash(f, 'catalog', 'prepared');
  renameSync(f.catalog.journalPath, path.join(f.catalog.transactionDir, orphanName()));
  assert.equal(inspectCatalogArtifactTransaction({ root: f.root }).phase, 'prepared');
  assert.equal(existsSync(f.catalog.journalPath), false);
  assert.equal(recoverCatalogArtifactTransaction({ root: f.root }).action, 'rolled_back'); assertOld(f);
  crash(f, 'catalog', 'prepared'); put(path.join(f.catalog.transactionDir, orphanName()), 'incomplete orphan');
  assert.equal(recoverCatalogArtifactTransaction({ root: f.root }).action, 'rolled_back');
  assert.equal(existsSync(f.catalog.transactionDir), false);
});

for (const damage of ['missing journal', 'ambiguous temporaries', 'malformed JSON', 'invalid UTF8', 'untrusted temporary', 'unexpected entry', 'unexpected directory', 'unexpected file', 'special target', 'missing parent', 'staged old bytes', 'backup new bytes', 'missing old bytes', 'unchanged missing', 'committed old current'] as const) {
  test(`catalog recovery preserves evidence for ${damage}`, t => {
    const f = transactionFixture(t); crash(f, 'catalog', damage === 'committed old current' ? 'committed' : 'prepared');
    const staged = path.join(f.catalog.stageDir, 'library/indexes/material.yaml');
    let expected = 'CATALOG_TRANSACTION_JOURNAL_UNTRUSTED';
    switch (damage) {
      case 'missing journal': rmSync(f.catalog.journalPath); expected = 'CATALOG_TRANSACTION_TRUSTED_JOURNAL_REQUIRED'; break;
      case 'ambiguous temporaries': cpSync(f.catalog.journalPath, path.join(f.catalog.transactionDir, orphanName())); renameSync(f.catalog.journalPath, path.join(f.catalog.transactionDir, orphanName())); expected = 'CATALOG_TRANSACTION_TRUSTED_JOURNAL_REQUIRED'; break;
      case 'malformed JSON': put(f.catalog.journalPath, '{'); expected = 'CATALOG_TRANSACTION_MALFORMED_STATE'; break;
      case 'invalid UTF8': put(f.catalog.journalPath, Buffer.from([0xff])); expected = 'CATALOG_TRANSACTION_MALFORMED_STATE'; break;
      case 'untrusted temporary': rmSync(f.catalog.journalPath); json(path.join(f.catalog.transactionDir, orphanName()), {}); break;
      case 'unexpected entry': put(path.join(f.catalog.transactionDir, 'unknown'), 'do not delete'); expected = 'CATALOG_TRANSACTION_UNRECOGNIZED_STATE'; break;
      case 'unexpected directory': mkdirSync(path.join(f.catalog.stageDir, 'unexpected')); expected = 'CATALOG_TRANSACTION_UNRECOGNIZED_STATE'; break;
      case 'unexpected file': put(path.join(f.catalog.stageDir, 'unknown'), 'do not delete'); expected = 'CATALOG_TRANSACTION_UNRECOGNIZED_STATE'; break;
      case 'special target': rmSync(material(f)); mkdirSync(material(f)); expected = 'CATALOG_TRANSACTION_NOT_FILE'; break;
      case 'missing parent': rmSync(path.dirname(material(f)), { recursive: true }); expected = 'CATALOG_TRANSACTION_DIRECTORY_MISSING'; break;
      case 'staged old bytes': put(staged, 'old material\n'); expected = 'CATALOG_TRANSACTION_STATE_CONTRADICTION'; break;
      case 'backup new bytes': put(path.join(f.catalog.backupDir, 'library/indexes/material.yaml'), 'new material\n'); expected = 'CATALOG_TRANSACTION_STATE_CONTRADICTION'; break;
      case 'missing old bytes': rmSync(material(f)); expected = 'CATALOG_TRANSACTION_OLD_ARTIFACT_MISSING'; break;
      case 'unchanged missing': rmSync(path.join(f.root, 'library/catalog.yaml')); expected = 'CATALOG_TRANSACTION_STATE_CONTRADICTION'; break;
      case 'committed old current': put(material(f), 'old material\n'); expected = 'CATALOG_TRANSACTION_COMMITTED_SET_MISMATCH'; break;
    }
    assert.throws(() => recoverCatalogArtifactTransaction({ root: f.root, force: true }), errorIs(expected));
    assert.equal(existsSync(f.catalog.transactionDir), true);
  });
}

test('catalog unchanged entries require exact mode, byte length and digest', t => {
  const f = transactionFixture(t); crash(f, 'catalog', 'prepared');
  chmodSync(path.join(f.root, 'library/catalog.yaml'), 0o600);
  assert.throws(() => recoverCatalogArtifactTransaction({ root: f.root }), errorIs('CATALOG_TRANSACTION_DIGEST_MISMATCH'));
  assert.equal(existsSync(f.catalog.journalPath), true);
});

for (const damage of ['malformed', 'missing owner', 'foreign host', 'extra key', 'invalid pid', 'invalid timestamp', 'path token'] as const) {
  test(`catalog stale ${damage} lock needs explicit force`, t => {
    const f = transactionFixture(t); crash(f, 'catalog', 'lock');
    const owner = readRecord(f.catalog.lockOwnerPath);
    switch (damage) {
      case 'malformed': put(f.catalog.lockOwnerPath, '{'); break;
      case 'missing owner': rmSync(f.catalog.lockOwnerPath); break;
      case 'foreign host': json(f.catalog.lockOwnerPath, { ...owner, hostname: `${os.hostname()}-foreign` }); break;
      case 'extra key': json(f.catalog.lockOwnerPath, { ...owner, extra: true }); break;
      case 'invalid pid': json(f.catalog.lockOwnerPath, { ...owner, pid: 0.5 }); break;
      case 'invalid timestamp': json(f.catalog.lockOwnerPath, { ...owner, started_at_utc: 'today' }); break;
      case 'path token': json(f.catalog.lockOwnerPath, { ...owner, invocation_token: '../external' }); break;
    }
    assert.throws(() => recoverCatalogArtifactTransaction({ root: f.root }), errorIs('CATALOG_TRANSACTION_FORCE_REQUIRED'));
    assert.equal(existsSync(f.catalog.lockDir), true);
    assert.equal(recoverCatalogArtifactTransaction({ root: f.root, force: true }).forced, true);
    assert.equal(existsSync(f.catalog.transactionDir), false); assertOld(f);
  });
}

for (const damage of ['valid', 'extra entry', 'wrong token', 'symlink'] as const) {
  test(`catalog released-lock residue ${damage} is ownership checked`, t => {
    const f = transactionFixture(t); crash(f, 'catalog', 'lock');
    const owner = readRecord(f.catalog.lockOwnerPath); assert.equal(typeof owner.invocation_token, 'string');
    const residue = path.join(f.catalog.transactionDir, `.lock.released.${String(owner.invocation_token)}`);
    renameSync(f.catalog.lockDir, residue);
    if (damage === 'extra entry') put(path.join(residue, 'extra'), 'retained');
    if (damage === 'wrong token') json(path.join(residue, 'owner.json'), { ...owner, invocation_token: randomUUID() });
    if (damage === 'symlink') { renameSync(residue, `${residue}-outside`); symlinkSync(`${residue}-outside`, residue); }
    if (damage === 'valid') { assert.equal(recoverCatalogArtifactTransaction({ root: f.root }).action, 'cleared_stale_lock'); assert.equal(existsSync(f.catalog.transactionDir), false); }
    else { assert.throws(() => recoverCatalogArtifactTransaction({ root: f.root, force: true }), errorIs(damage === 'symlink' ? 'CATALOG_TRANSACTION_UNRECOGNIZED_STATE' : 'CATALOG_TRANSACTION_RELEASED_LOCK_UNTRUSTED')); assert.equal(existsSync(residue), true); }
  });
}

test('catalog recovery validates restored bytes again after a caller hook', t => {
  const f = transactionFixture(t); crash(f, 'catalog', 'installed');
  assert.throws(() => recoverCatalogArtifactTransaction({ root: f.root, hooks: { afterRestore: () => put(material(f), 'concurrent edit\n') } }), errorIs('CATALOG_TRANSACTION_RECOVERY_VERIFY_FAILED'));
  assert.equal(readFileSync(material(f), 'utf8'), 'concurrent edit\n'); assert.equal(existsSync(f.catalog.journalPath), true);
});

test('catalog committed cleanup failure returns a warning and remains recoverable', t => {
  const f = transactionFixture(t);
  const result = runCatalogArtifactTransaction({ root: f.root, artifacts: catalogArtifacts, hooks: { beforeCleanup: () => { throw new Error('cleanup interrupted'); } } });
  assert.equal(result.committed, true); assert.equal(result.recoveryRequired, true); assert.match(result.warnings.join(' '), /cleanup interrupted/);
  assert.equal(recoverCatalogArtifactTransaction({ root: f.root }).action, 'finished');
  assert.equal(readFileSync(material(f), 'utf8'), 'new material\n');
});

for (const callback of ['prepare', 'locked', 'phase', 'staged', 'install', 'backed-up', 'installed', 'validate', 'restore', 'cleanup', 'released'] as const) {
  test(`catalog refuses asynchronous ${callback} callback at its boundary`, t => {
    const f = transactionFixture(t);
    const asyncResult = () => Promise.resolve();
    if (callback === 'restore') {
      crash(f, 'catalog', 'prepared');
      assert.throws(() => recoverCatalogArtifactTransaction({ root: f.root, hooks: { afterRestore: asyncResult } }), errorIs('CATALOG_TRANSACTION_ASYNC_CALLBACK'));
      assert.equal(existsSync(f.catalog.journalPath), true); return;
    }
    const run = () => runCatalogArtifactTransaction({ root: f.root, artifacts: catalogArtifacts,
      ...(callback === 'prepare' ? { prepareArtifacts: asyncResult } : {}),
      ...(callback === 'validate' ? { validateInstalled: asyncResult } : {}), hooks: {
        ...(callback === 'locked' ? { afterLockAcquired: asyncResult } : {}),
        ...(callback === 'phase' ? { onPhase: asyncResult } : {}),
        ...(callback === 'staged' ? { afterArtifactStaged: asyncResult } : {}),
        ...(callback === 'install' ? { beforeArtifactInstall: asyncResult } : {}),
        ...(callback === 'backed-up' ? { afterArtifactBackedUp: asyncResult } : {}),
        ...(callback === 'installed' ? { afterArtifactInstalled: asyncResult } : {}),
        ...(callback === 'cleanup' ? { beforeCleanup: asyncResult } : {}),
        ...(callback === 'released' ? { onLockReleased: asyncResult } : {}),
      } });
    if (callback === 'cleanup' || callback === 'released') { const result = run(); assert.equal(result.committed, true); assert.equal(result.recoveryRequired, true); assert.match(result.warnings.join(' '), /synchronous/); }
    else { assert.throws(run, errorIs('CATALOG_TRANSACTION_ASYNC_CALLBACK')); assertOld(f); }
  });
}

test('catalog detects changed output baseline and preserves the concurrent writer', t => {
  const f = transactionFixture(t);
  assert.throws(() => runCatalogArtifactTransaction({ root: f.root, artifacts: catalogArtifacts, hooks: { afterArtifactStaged: ({ path: artifact }) => { if (artifact === 'library/indexes/material.yaml') put(material(f), 'concurrent writer\n'); } } }), errorIs('CATALOG_TRANSACTION_ROLLBACK_FAILED'));
  assert.equal(readFileSync(material(f), 'utf8'), 'concurrent writer\n'); assert.equal(existsSync(f.catalog.journalPath), true);
});

test('catalog rejects installed-byte mutation instead of claiming rollback success', t => {
  const f = transactionFixture(t);
  assert.throws(() => runCatalogArtifactTransaction({ root: f.root, artifacts: catalogArtifacts, validateInstalled: () => writeFileSync(material(f), 'unauthorized mutation\n') }), errorIs('CATALOG_TRANSACTION_ROLLBACK_FAILED'));
  assert.equal(readFileSync(material(f), 'utf8'), 'unauthorized mutation\n'); assert.equal(existsSync(f.catalog.backupDir), true);
});

test('catalog recovery catch preserves a successor acquired after release', t => {
  const f = transactionFixture(t); crash(f, 'catalog', 'prepared');
  assert.throws(() => recoverCatalogArtifactTransaction({ root: f.root, hooks: { onLockReleased: () => {
    mkdirSync(f.catalog.lockDir); json(f.catalog.lockOwnerPath, { schema_version: 1, transaction_kind: 'catalog-artifact-set', invocation_token: randomUUID(), pid: process.pid, hostname: os.hostname(), command: 'successor', started_at_utc: new Date().toISOString() });
    throw new Error('after release');
  } } }), /after release/);
  assert.equal(readRecord(f.catalog.lockOwnerPath).command, 'successor'); assertOld(f);
  assert.throws(() => recoverCatalogArtifactTransaction({ root: f.root, force: true }), errorIs('CATALOG_TRANSACTION_LIVE_LOCK'));
});

test('catalog inspection distinguishes empty state, held lock and existing recovery requirement', t => {
  const f = transactionFixture(t); mkdirSync(f.catalog.transactionDir, { recursive: true });
  assert.equal(inspectCatalogArtifactTransaction({ root: f.root }).status, 'state_present');
  assert.equal(recoverCatalogArtifactTransaction({ root: f.root }).action, 'cleared_stale_lock');
  crash(f, 'catalog', 'lock'); assert.equal(inspectCatalogArtifactTransaction({ root: f.root }).status, 'locked');
  assert.throws(() => runCatalogArtifactTransaction({ root: f.root, artifacts: catalogArtifacts }), errorIs('CATALOG_TRANSACTION_RECOVERY_REQUIRED'));
  json(f.catalog.lockOwnerPath, {});
  assert.throws(() => inspectCatalogArtifactTransaction({ root: f.root }), errorIs('CATALOG_TRANSACTION_LOCK_UNTRUSTED'));
});

const catalogIoFailures: { name: string; fault: FilesystemFault; code: string }[] = [
  { name: 'exclusive owner creation fails', fault: { operation: 'openSync', pathContains: '/lock/owner.json', action: 'throw' }, code: 'CATALOG_TRANSACTION_EXCLUSIVE_CREATE_FAILED' },
  { name: 'created owner descriptor is no longer a file', fault: { operation: 'fstatSync', pathContains: '/lock/owner.json', when: 'after', action: 'not-file' }, code: 'CATALOG_TRANSACTION_NOT_FILE' },
  { name: 'atomic journal write fails', fault: { operation: 'writeFileSync', pathContains: '.journal.json.', action: 'throw' }, code: 'CATALOG_TRANSACTION_ROLLBACK_FAILED' },
  { name: 'atomic journal rename fails', fault: { operation: 'renameSync', pathContains: '.journal.json.', action: 'throw' }, code: 'EIO' },
  { name: 'existing output cannot be opened', fault: { operation: 'openSync', pathContains: '/library/indexes/material.yaml', action: 'throw' }, code: 'CATALOG_TRANSACTION_FILE_READ_FAILED' },
  { name: 'state directory creation fails', fault: { operation: 'mkdirSync', pathContains: '/.pcr-builder-state', action: 'throw', code: 'EACCES' }, code: 'EACCES' },
  { name: 'staging descriptor becomes non-file', fault: { operation: 'fstatSync', pathContains: '/stage/library/indexes/material.yaml', when: 'after', action: 'not-file' }, code: 'CATALOG_TRANSACTION_ROLLBACK_FAILED' },
  { name: 'staged link is refused without clobber', fault: { operation: 'linkSync', pathContains: '/stage/library/indexes/material.yaml', action: 'throw', code: 'EEXIST' }, code: 'CATALOG_TRANSACTION_INSTALL_NO_CLOBBER' },
  { name: 'installed descriptor changes during open', fault: { operation: 'fstatSync', pathContains: '/library/indexes/material.yaml', at: 4, when: 'after', action: 'device' }, code: 'CATALOG_TRANSACTION_FILE_CHANGED' },
];
for (const { name, fault, code } of catalogIoFailures) {
  test(`catalog filesystem failure: ${name} leaves old publication intact`, t => {
    const f = transactionFixture(t); const observed = filesystemFault(f, 'catalog', 'run', fault);
    assert.equal(observed.fired, true); assert.equal(record(observed.error).code, code); assertOld(f);
  });
}

for (const [name, fault, code] of [
  ['no-clobber restoration fails', { operation: 'linkSync', pathContains: '/backup/library/indexes/material.yaml', action: 'throw', code: 'EEXIST' }, 'CATALOG_TRANSACTION_RESTORE_NO_CLOBBER'],
  ['restored file changes during open', { operation: 'fstatSync', pathContains: '/library/indexes/material.yaml', at: 2, when: 'after', action: 'device' }, 'CATALOG_TRANSACTION_FILE_CHANGED'],
] satisfies [string, FilesystemFault, string][]) {
  test(`catalog recovery filesystem failure: ${name} preserves journal`, t => {
    const f = transactionFixture(t); crash(f, 'catalog', 'backed-up');
    const observed = filesystemFault(f, 'catalog', 'recover', fault);
    assert.equal(observed.fired, true); assert.equal(record(observed.error).code, code); assert.equal(existsSync(f.catalog.journalPath), true);
  });
}

test('catalog read descriptor pins an opened file while the path is substituted', t => {
  const f = transactionFixture(t); const target = material(f);
  const observed = filesystemFault(f, 'catalog', 'run', { operation: 'openSync', pathContains: target, when: 'after', action: 'replace', target });
  assert.equal(observed.fired, true); assert.equal(record(observed.error).code, 'CATALOG_TRANSACTION_FILE_CHANGED');
  assert.equal(readFileSync(target, 'utf8'), 'concurrent writer\n'); assert.equal(readFileSync(`${target}.displaced`, 'utf8'), 'old material\n');
});

for (const action of ['symlink', 'replace'] as const) {
  test(`catalog rechecks a state directory substituted with ${action}`, t => {
    const f = transactionFixture(t);
    const observed = filesystemFault(f, 'catalog', 'run', { operation: 'mkdirSync', pathContains: f.catalog.stateRoot, when: 'after', action, target: f.catalog.stateRoot });
    assert.equal(observed.fired, true); assert.equal(record(observed.error).code, action === 'symlink' ? 'CATALOG_TRANSACTION_SYMLINK' : 'CATALOG_TRANSACTION_NOT_DIRECTORY'); assertOld(f);
  });
}

test('catalog cleanup I/O failure after commit never reverts new data', t => {
  const f = transactionFixture(t);
  const observed = filesystemFault(f, 'catalog', 'run', { operation: 'rmSync', pathContains: '/backup', action: 'throw' });
  const result = record(observed.result); assert.equal(observed.fired, true); assert.equal(result.committed, true); assert.equal(result.recoveryRequired, true);
  assert.equal(existsSync(f.catalog.journalPath), true); assert.equal(readFileSync(material(f), 'utf8'), 'new material\n');
  assert.equal(recoverCatalogArtifactTransaction({ root: f.root }).action, 'finished');
});

test('catalog rejects malformed prepare results before writing a journal', t => {
  const f = transactionFixture(t);
  for (const [value, code] of [
    [undefined, 'CATALOG_TRANSACTION_ARTIFACTS_REQUIRED'], [[], 'CATALOG_TRANSACTION_ARTIFACTS_REQUIRED'], [[null], 'CATALOG_TRANSACTION_CONTENT_INVALID'],
    [[{ path: 'library/catalog.yaml', content: 7 }], 'CATALOG_TRANSACTION_CONTENT_INVALID'],
    [[{ path: 'library/catalog.yaml', content: 'a', mode: -1 }], 'CATALOG_TRANSACTION_MODE_INVALID'],
    [[{ path: 'library/catalog.yaml', content: 'a' }, { path: 'library/catalog.yaml', content: 'b' }], 'CATALOG_TRANSACTION_PATH_DUPLICATE'],
  ] satisfies [unknown, string][]) {
    assert.throws(() => runCatalogArtifactTransaction({ root: f.root, prepareArtifacts: () => value }), errorIs(code)); assertOld(f);
  }
  assert.throws(() => runCatalogArtifactTransaction({ root: f.root, command: '  ', artifacts: catalogArtifacts }), errorIs('CATALOG_TRANSACTION_COMMAND_REQUIRED'));
  const binary = Buffer.from([0, 255, 128]); runCatalogArtifactTransaction({ root: f.root, artifacts: [{ path: 'library/indexes/binary', content: binary }] });
  assert.deepEqual(readFileSync(path.join(f.root, 'library/indexes/binary')), binary);
});

test('catalog refuses noncanonical journal JSON even when it parses to a valid journal', t => {
  const f = transactionFixture(t); crash(f, 'catalog', 'prepared'); put(f.catalog.journalPath, JSON.stringify(readRecord(f.catalog.journalPath)));
  assert.throws(() => recoverCatalogArtifactTransaction({ root: f.root }), errorIs('CATALOG_TRANSACTION_MALFORMED_STATE')); assertOld(f); assert.equal(existsSync(f.catalog.stageDir), true);
});

test('catalog prepared and installation gates reject staged-byte changes separately', t => {
  const f = transactionFixture(t);
  for (const boundary of ['prepared', 'install'] as const) {
    const staged = path.join(f.catalog.stageDir, 'library/indexes/material.yaml');
    assert.throws(() => runCatalogArtifactTransaction({ root: f.root, artifacts: catalogArtifacts, hooks: {
      onPhase: c => { if (boundary === 'prepared' && c.phase === 'prepared') put(staged, 'staged corruption\n'); },
      beforeArtifactInstall: c => { if (boundary === 'install' && c.path === 'library/indexes/material.yaml') put(staged, 'staged corruption\n'); },
    } }), errorIs('CATALOG_TRANSACTION_ROLLBACK_FAILED'));
    assertOld(f); assert.equal(existsSync(staged), true);
    rmSync(f.catalog.transactionDir, { recursive: true });
  }
});

test('catalog unchanged artifacts may not acquire unplanned staging state', t => {
  const f = transactionFixture(t);
  assert.throws(() => runCatalogArtifactTransaction({ root: f.root, artifacts: catalogArtifacts, hooks: { onPhase: c => { if (c.phase === 'prepared') put(path.join(f.catalog.stageDir, 'library/catalog.yaml'), 'unchanged catalog\n'); } } }), errorIs('CATALOG_TRANSACTION_ROLLBACK_FAILED'));
  assertOld(f); assert.equal(existsSync(f.catalog.journalPath), true);
});

test('catalog backup collision never overwrites the prior backup', t => {
  const f = transactionFixture(t); const backup = path.join(f.catalog.backupDir, 'library/indexes/material.yaml');
  assert.throws(() => runCatalogArtifactTransaction({ root: f.root, artifacts: catalogArtifacts, hooks: { beforeArtifactInstall: () => put(backup, 'unrecognized backup\n') } }), errorIs('CATALOG_TRANSACTION_ROLLBACK_FAILED'));
  assert.equal(readFileSync(backup, 'utf8'), 'unrecognized backup\n'); assertOld(f);
});

test('catalog rolled-back absent artifacts reject a new file with different inode ownership', t => {
  const f = transactionFixture(t); crash(f, 'catalog', 'installed'); const target = path.join(f.root, 'classifications/indexes/new.json');
  const stage = path.join(f.catalog.stageDir, 'classifications/indexes/new.json'); cpSync(target, stage); chmodSync(stage, 0o640);
  assert.throws(() => recoverCatalogArtifactTransaction({ root: f.root }), errorIs('CATALOG_TRANSACTION_STATE_CONTRADICTION'));
  assert.equal(existsSync(target), true); assert.equal(existsSync(stage), true); assert.equal(existsSync(f.catalog.journalPath), true);
});

test('catalog rollback accepts its own hardlinked stage if a crash occurred before unlink', t => {
  const f = transactionFixture(t); crash(f, 'catalog', 'installed');
  // A no-clobber link followed by a process exit can leave both names to the same inode.
  // Reproduce that real state without changing any recorded descriptors.
  const target = path.join(f.root, 'classifications/indexes/new.json'); const staged = path.join(f.catalog.stageDir, 'classifications/indexes/new.json');
  linkSync(target, staged);
  assert.equal(recoverCatalogArtifactTransaction({ root: f.root }).action, 'rolled_back'); assertOld(f);
});

test('catalog recovery rejects a special file in its owned inventory', t => {
  if (process.platform === 'win32') { t.skip('POSIX FIFO scenario'); return; }
  const f = transactionFixture(t); crash(f, 'catalog', 'prepared'); const pipe = path.join(f.catalog.stageDir, 'pipe'); assert.equal(spawnSync('mkfifo', [pipe]).status, 0);
  assert.throws(() => recoverCatalogArtifactTransaction({ root: f.root, force: true }), errorIs('CATALOG_TRANSACTION_UNRECOGNIZED_STATE')); assert.equal(existsSync(pipe), true); assertOld(f);
});

test('catalog inspection refuses ambiguous temporaries and absent trusted journals without writing', t => {
  const f = transactionFixture(t); crash(f, 'catalog', 'prepared');
  cpSync(f.catalog.journalPath, path.join(f.catalog.transactionDir, orphanName())); renameSync(f.catalog.journalPath, path.join(f.catalog.transactionDir, orphanName()));
  assert.throws(() => inspectCatalogArtifactTransaction({ root: f.root }), errorIs('CATALOG_TRANSACTION_TRUSTED_JOURNAL_REQUIRED')); assert.equal(existsSync(f.catalog.journalPath), false);
  rmSync(f.catalog.transactionDir, { recursive: true }); mkdirSync(f.catalog.stageDir, { recursive: true });
  assert.throws(() => inspectCatalogArtifactTransaction({ root: f.root }), errorIs('CATALOG_TRANSACTION_TRUSTED_JOURNAL_REQUIRED')); assertOld(f);
});

for (const targetKind of ['missing root', 'file root', 'symlink state', 'file state', 'file output parent', 'symlink output'] as const) {
  test(`catalog rejects ${targetKind} before publication`, t => {
    const f = transactionFixture(t); let root = f.root; let code = 'CATALOG_TRANSACTION_NOT_DIRECTORY';
    switch (targetKind) {
      case 'missing root': root = path.join(f.root, 'missing'); code = 'CATALOG_TRANSACTION_ROOT_INVALID'; break;
      case 'file root': root = material(f); break;
      case 'symlink state': mkdirSync(path.join(f.root, 'outside')); symlinkSync(path.join(f.root, 'outside'), f.catalog.stateRoot); code = 'CATALOG_TRANSACTION_SYMLINK'; break;
      case 'file state': put(f.catalog.stateRoot, 'not a directory'); break;
      case 'file output parent': rmSync(path.dirname(material(f)), { recursive: true }); put(path.dirname(material(f)), 'not a directory'); break;
      case 'symlink output': renameSync(material(f), `${material(f)}.saved`); symlinkSync(`${material(f)}.saved`, material(f)); code = 'CATALOG_TRANSACTION_SYMLINK'; break;
    }
    assert.throws(() => runCatalogArtifactTransaction({ root, artifacts: catalogArtifacts }), errorIs(code));
    assert.equal(existsSync(f.catalog.journalPath), false);
  });
}

for (const container of ['transaction', 'state-root'] as const) {
  test(`catalog ${container} cleanup error is reported without reverting a commit`, t => {
    const f = transactionFixture(t); const observed = filesystemFault(f, 'catalog', 'run', { operation: 'rmdirSync', pathContains: container === 'transaction' ? f.catalog.transactionDir : f.catalog.stateRoot, at: container === 'transaction' ? 1 : 2, action: 'throw', code: 'EACCES' });
    assert.equal(observed.fired, true); const result = record(observed.result); assert.equal(result.committed, true); assert.equal(result.recoveryRequired, true);
    assert.equal(readFileSync(material(f), 'utf8'), 'new material\n');
  });
}

test('catalog backup restore rechecks the newly linked target inode', t => {
  const f = transactionFixture(t); crash(f, 'catalog', 'backed-up');
  const observed = filesystemFault(f, 'catalog', 'recover', { operation: 'linkSync', pathContains: '/backup/library/indexes/material.yaml', when: 'after', action: 'replace', target: material(f), content: 'old material\n' });
  assert.equal(observed.fired, true); assert.equal(record(observed.error).code, 'CATALOG_TRANSACTION_ROLLBACK_VERIFY_FAILED');
  assert.equal(readFileSync(material(f), 'utf8'), 'old material\n'); assert.equal(existsSync(f.catalog.journalPath), true);
});

test('catalog no-clobber installation rejects a same-byte replacement inode', t => {
  const f = transactionFixture(t);
  const observed = filesystemFault(f, 'catalog', 'run', { operation: 'linkSync', pathContains: '/stage/library/indexes/material.yaml', when: 'after', action: 'replace', target: material(f), content: 'new material\n' });
  assert.equal(observed.fired, true); assert.equal(record(observed.error).code, 'CATALOG_TRANSACTION_ROLLBACK_FAILED'); assert.equal(record(observed.error).causeCode, 'CATALOG_TRANSACTION_INSTALL_MISMATCH');
  assert.equal(readFileSync(material(f), 'utf8'), 'new material\n'); assert.equal(existsSync(f.catalog.journalPath), true);
});

for (const artifact of ['library/indexes/material.yaml', 'classifications/indexes/new.json']) {
  test(`catalog refuses an unsafe rollback preservation link for ${artifact}`, t => {
    const f = transactionFixture(t); crash(f, 'catalog', 'installed');
    const stage = path.join(f.catalog.stageDir, artifact);
    const observed = filesystemFault(f, 'catalog', 'recover', { operation: 'linkSync', pathContains: path.join(f.root, artifact), when: 'after', action: 'replace', target: stage, content: artifact.startsWith('library/') ? 'new material\n' : 'new coverage\n' });
    assert.equal(observed.fired, true); assert.equal(record(observed.error).code, 'CATALOG_TRANSACTION_ROLLBACK_UNSAFE'); assert.equal(existsSync(f.catalog.journalPath), true);
  });
}

test('catalog moved backup must retain the original identity before new bytes install', t => {
  const f = transactionFixture(t); const backup = path.join(f.catalog.backupDir, 'library/indexes/material.yaml');
  const observed = filesystemFault(f, 'catalog', 'run', { operation: 'renameSync', pathContains: material(f), when: 'after', action: 'replace', target: backup, content: 'old material\n' });
  assert.equal(observed.fired, true); assert.equal(record(observed.error).code, 'CATALOG_TRANSACTION_ROLLBACK_FAILED'); assert.equal(record(observed.error).causeCode, 'CATALOG_TRANSACTION_TARGET_CHANGED');
  assert.equal(readFileSync(material(f), 'utf8'), 'old material\n'); assert.equal(existsSync(`${backup}.displaced`), true);
});

test('catalog checks staged bytes immediately after exclusive creation', t => {
  const f = transactionFixture(t); const stage = path.join(f.catalog.stageDir, 'library/indexes/material.yaml');
  const observed = filesystemFault(f, 'catalog', 'run', { operation: 'writeFileSync', pathContains: '/stage/library/indexes/material.yaml', when: 'after', action: 'write', target: stage, content: 'altered staged bytes\n' });
  assert.equal(observed.fired, true); assert.equal(record(observed.error).causeCode, 'CATALOG_TRANSACTION_STAGE_MISMATCH'); assert.equal(record(observed.error).code, 'CATALOG_TRANSACTION_ROLLBACK_FAILED'); assertOld(f);
});

test('catalog detects a replaced output parent before installation', t => {
  const f = transactionFixture(t); const parent = path.dirname(material(f));
  assert.throws(() => runCatalogArtifactTransaction({ root: f.root, artifacts: catalogArtifacts, hooks: { onPhase: c => { if (c.phase === 'prepared') { renameSync(parent, `${parent}.saved`); cpSync(`${parent}.saved`, parent, { recursive: true }); } } } }), errorIs('CATALOG_TRANSACTION_PARENT_CHANGED'));
  assertOld(f); assert.equal(existsSync(`${parent}.saved`), true);
});

test('catalog root identity is checked again after its plan is prepared', t => {
  const f = transactionFixture(t); const observed = filesystemFault(f, 'catalog', 'run', { operation: 'lstatSync', pathContains: f.root, exactPath: true, activateOnPhase: 'prepared', when: 'after', action: 'device' });
  assert.equal(observed.fired, true); assert.equal(record(observed.error).code, 'CATALOG_TRANSACTION_ROOT_CHANGED'); assertOld(f);
});

for (const mode of ['run', 'recover'] as const) {
  test(`catalog rejects a different filesystem device during ${mode}`, t => {
    const f = transactionFixture(t); if (mode === 'recover') crash(f, 'catalog', 'prepared');
    const observed = filesystemFault(f, 'catalog', mode, { operation: 'lstatSync', pathContains: mode === 'run' ? f.catalog.stageDir : f.catalog.transactionDir, exactPath: true, at: mode === 'run' ? 3 : 2, when: 'after', action: 'device' });
    assert.equal(observed.fired, true); assert.equal(record(observed.error).code, 'CATALOG_TRANSACTION_CROSS_DEVICE'); assertOld(f);
  });
}

test('catalog incomplete installed set cannot reach the commit marker', t => {
  const f = transactionFixture(t);
  assert.throws(() => runCatalogArtifactTransaction({ root: f.root, artifacts: catalogArtifacts, hooks: { afterArtifactInstalled: c => { if (c.path === 'library/indexes/material.yaml') put(material(f), 'old material\n'); } } }), errorIs('CATALOG_TRANSACTION_INSTALLED_SET_MISMATCH'));
  assertOld(f); assert.equal(existsSync(f.catalog.journalPath), false);
});

test('catalog old backup is still mandatory at the final commit gate', t => {
  const f = transactionFixture(t);
  assert.throws(() => runCatalogArtifactTransaction({ root: f.root, artifacts: catalogArtifacts, validateInstalled: () => rmSync(path.join(f.catalog.backupDir, 'library/indexes/material.yaml')) }), errorIs('CATALOG_TRANSACTION_ROLLBACK_FAILED'));
  assert.equal(readFileSync(material(f), 'utf8'), 'new material\n'); assert.equal(existsSync(f.catalog.journalPath), true);
});

test('catalog absent-baseline journal cannot authorize a backup', t => {
  const f = transactionFixture(t); crash(f, 'catalog', 'prepared'); const journal = readRecord(f.catalog.journalPath); const items = artifacts(journal); const item = items.find(a => a.path === 'library/indexes/material.yaml'); assert.ok(item); item.old = null; json(f.catalog.journalPath, { ...journal, artifacts: items });
  put(path.join(f.catalog.backupDir, 'library/indexes/material.yaml'), 'new material\n');
  // Make current and stage both recognized new bytes, leaving only the illegal backup.
  put(material(f), 'new material\n');
  assert.throws(() => recoverCatalogArtifactTransaction({ root: f.root }), errorIs('CATALOG_TRANSACTION_UNRECOGNIZED_STATE')); assert.equal(existsSync(f.catalog.journalPath), true);
});

test('catalog recovery catches a lock owner replaced between inspection and release', t => {
  const f = transactionFixture(t); crash(f, 'catalog', 'prepared'); const owner = readRecord(f.catalog.lockOwnerPath);
  const observed = filesystemFault(f, 'catalog', 'recover', { operation: 'readFileSync', pathContains: '/lock/owner.json', at: 2, action: 'write', target: f.catalog.lockOwnerPath, content: `${JSON.stringify({ ...owner, invocation_token: randomUUID() }, null, 2)}\n` });
  assert.equal(observed.fired, true); assert.equal(record(observed.error).code, 'CATALOG_TRANSACTION_LOCK_CHANGED'); assert.equal(existsSync(f.catalog.journalPath), true); assertOld(f);
});

test('catalog detects owner substitution during lock-release rename', t => {
  const f = transactionFixture(t); crash(f, 'catalog', 'prepared'); const owner = readRecord(f.catalog.lockOwnerPath);
  const movedOwner = path.join(f.catalog.transactionDir, `.lock.released.${String(owner.invocation_token)}`, 'owner.json');
  const observed = filesystemFault(f, 'catalog', 'recover', { operation: 'renameSync', pathContains: '/lock', when: 'after', action: 'write', target: movedOwner, content: `${JSON.stringify({ ...owner, invocation_token: randomUUID() }, null, 2)}\n` });
  assert.equal(observed.fired, true); assert.equal(record(observed.error).code, 'CATALOG_TRANSACTION_LOCK_OWNERSHIP_CHANGED'); assert.equal(existsSync(f.catalog.lockOwnerPath), true); assertOld(f);
});

test('catalog forced stale symlink-lock recovery unlinks only the link', t => {
  const f = transactionFixture(t); crash(f, 'catalog', 'lock'); const outside = path.join(f.root, 'outside-lock'); renameSync(f.catalog.lockDir, outside); const bytes = readFileSync(path.join(outside, 'owner.json')); symlinkSync(outside, f.catalog.lockDir);
  assert.equal(recoverCatalogArtifactTransaction({ root: f.root, force: true }).action, 'cleared_stale_lock'); assert.deepEqual(readFileSync(path.join(outside, 'owner.json')), bytes); assertOld(f);
});

test('catalog journal recovery cleans a validated released-owner residue', t => {
  const f = transactionFixture(t); crash(f, 'catalog', 'prepared'); const owner = readRecord(f.catalog.lockOwnerPath); renameSync(f.catalog.lockDir, path.join(f.catalog.transactionDir, `.lock.released.${String(owner.invocation_token)}`));
  assert.equal(recoverCatalogArtifactTransaction({ root: f.root }).action, 'rolled_back'); assert.equal(existsSync(f.catalog.transactionDir), false); assertOld(f);
});

test('catalog missing state directory during recovery inspection fails closed', t => {
  const f = transactionFixture(t); crash(f, 'catalog', 'prepared');
  const observed = filesystemFault(f, 'catalog', 'recover', { operation: 'lstatSync', pathContains: f.catalog.stateRoot, exactPath: true, action: 'throw', code: 'ENOENT' });
  assert.equal(observed.fired, true); assert.equal(record(observed.error).code, 'CATALOG_TRANSACTION_DIRECTORY_MISSING'); assert.equal(existsSync(f.catalog.journalPath), true);
});

test('catalog symlink state root during recovery never follows its journal', t => {
  const f = transactionFixture(t); crash(f, 'catalog', 'prepared'); const saved = path.join(f.root, 'saved-state'); renameSync(f.catalog.stateRoot, saved); symlinkSync(saved, f.catalog.stateRoot);
  assert.throws(() => recoverCatalogArtifactTransaction({ root: f.root, force: true }), errorIs('CATALOG_TRANSACTION_SYMLINK')); assert.equal(existsSync(path.join(saved, 'catalog/journal.json')), true); assertOld(f);
});

test('catalog lock-owner read failure at commit retains the owned lock for explicit recovery', t => {
  const f = transactionFixture(t); const observed = filesystemFault(f, 'catalog', 'run', { operation: 'readFileSync', pathContains: '/lock/owner.json', action: 'throw' });
  assert.equal(observed.fired, true); assert.equal(record(observed.result).committed, true); assert.equal(record(observed.result).recoveryRequired, true);
  // The best-effort catch may finish the release once the transient fault is gone.
  assert.equal(readFileSync(material(f), 'utf8'), 'new material\n');
});

for (const artifact of ['library/indexes/material.yaml', 'classifications/indexes/new.json']) {
  for (const preexistingLink of [false, true]) {
    test(`catalog rollback detects current inode replacement for ${artifact} with staged link ${preexistingLink}`, t => {
      const f = transactionFixture(t); crash(f, 'catalog', 'installed'); const target = path.join(f.root, artifact); const stage = path.join(f.catalog.stageDir, artifact);
      if (preexistingLink) linkSync(target, stage);
      const observed = filesystemFault(f, 'catalog', 'recover', { operation: preexistingLink ? 'readFileSync' : 'linkSync', pathContains: preexistingLink ? stage : target, when: 'after', action: 'replace', target, content: artifact.startsWith('library/') ? 'new material\n' : 'new coverage\n' });
      assert.equal(observed.fired, true); assert.equal(record(observed.error).code, 'CATALOG_TRANSACTION_TARGET_CHANGED');
      assert.equal(existsSync(f.catalog.journalPath), true); assert.equal(existsSync(stage), true);
    });
  }
}

test('catalog rollback resumes a material link preserved by an earlier interrupted recovery', t => {
  const f = transactionFixture(t); crash(f, 'catalog', 'installed'); linkSync(material(f), path.join(f.catalog.stageDir, 'library/indexes/material.yaml'));
  assert.equal(recoverCatalogArtifactTransaction({ root: f.root }).action, 'rolled_back'); assertOld(f);
});
