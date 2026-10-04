import assert from 'node:assert/strict';
import { cpSync, existsSync, mkdirSync, readFileSync, renameSync, rmSync, symlinkSync } from 'node:fs';
import path from 'node:path';
import { randomUUID } from 'node:crypto';
import test from 'node:test';
import { spawnSync } from 'node:child_process';
import { currentPcrDigest, digestDirectoryTree, recoverPcrDirectoryTransaction, runPcrDirectoryTransaction } from './pcr-directory-transaction.ts';
import type { UnknownRecord } from './guards.ts';
import { crash, errorIs, filesystemFault, json, put, readRecord, record, transactionFixture, type FilesystemFault } from './fixtures/transaction-recovery.ts';

function method(root: string): string { return path.join(root, 'pcr.en-US.md'); }
function assertOld(f: ReturnType<typeof transactionFixture>): void { assert.equal(readFileSync(method(f.pcr), 'utf8'), 'old methodology\n'); }
function temporary(f: ReturnType<typeof transactionFixture>): string { return path.join(f.directory.transactionDir, `.journal.json.123.${randomUUID()}.tmp`); }

for (const phase of ['prepared', 'current_moved', 'new_installed', 'committed']) {
  test(`PCR child exit at ${phase} leaves a recoverable complete leaf`, t => {
    const f = transactionFixture(t); const old = digestDirectoryTree(f.pcr); crash(f, 'directory', phase);
    const journal = readRecord(f.directory.journalPath);
    const result = recoverPcrDirectoryTransaction({ root: f.root, pcr: f.pcr });
    assert.equal(result.action, phase === 'committed' ? 'finished' : 'rolled_back');
    assert.equal(digestDirectoryTree(f.pcr), phase === 'committed' ? journal.new_tree_sha256 : old);
    assert.equal(existsSync(f.directory.transactionDir), false);
    assert.equal(recoverPcrDirectoryTransaction({ root: f.root, pcr: f.pcr }).action, 'nothing_to_recover');
  });
}

const mutations: { name: string; change: (journal: UnknownRecord) => unknown }[] = [
  { name: 'null', change: () => null }, { name: 'array', change: () => [] },
  ...['schema_version', 'transaction_id', 'pcr_path', 'command', 'phase', 'old_tree_sha256', 'new_tree_sha256', 'created_at_utc', 'updated_at_utc'].map(key => ({ name: `missing ${key}`, change: (j: UnknownRecord) => { delete j[key]; return j; } })),
  ...Object.entries({ schema_version: 2, transaction_id: '', pcr_path: 'library/pcrs/agriculture/crops/other', command: '', phase: 'installing', old_tree_sha256: 'bad', new_tree_sha256: 42, created_at_utc: null, updated_at_utc: null }).map(([key, value]) => ({ name: `invalid ${key}`, change: (j: UnknownRecord) => ({ ...j, [key]: value }) })),
];
for (const { name, change } of mutations) {
  test(`PCR refuses ${name} journal and retains the old and staged leaf`, t => {
    const f = transactionFixture(t); crash(f, 'directory', 'prepared');
    json(f.directory.journalPath, change(readRecord(f.directory.journalPath)));
    const bytes = readFileSync(f.directory.journalPath); const old = digestDirectoryTree(f.pcr); const staged = digestDirectoryTree(f.directory.stageDir);
    assert.throws(() => recoverPcrDirectoryTransaction({ root: f.root, pcr: f.pcr, force: true }), errorIs('PCR_TRANSACTION_JOURNAL_UNTRUSTED'));
    assert.deepEqual(readFileSync(f.directory.journalPath), bytes); assert.equal(digestDirectoryTree(f.pcr), old); assert.equal(digestDirectoryTree(f.directory.stageDir), staged);
  });
}

test('PCR journal unknown audit extensions and historical timestamp strings remain readable', t => {
  const f = transactionFixture(t); crash(f, 'directory', 'prepared');
  json(f.directory.journalPath, { ...readRecord(f.directory.journalPath), created_at_utc: 'historic recorded timestamp', updated_at_utc: 'historic update', audit: { source: 'legacy' } });
  assert.equal(recoverPcrDirectoryTransaction({ root: f.root, pcr: f.pcr }).action, 'rolled_back'); assertOld(f);
});

for (const damage of ['malformed journal', 'symlink journal', 'directory journal', 'unknown current', 'unknown stage', 'unknown backup', 'missing old', 'missing new', 'malformed temporary', 'untrusted temporary', 'two temporaries', 'special entry'] as const) {
  test(`PCR recovery refuses ${damage} without guessing a tree`, t => {
    const f = transactionFixture(t); crash(f, 'directory', damage === 'missing new' ? 'committed' : 'current_moved');
    let expected = 'PCR_TRANSACTION_DIGEST_MISMATCH';
    switch (damage) {
      case 'malformed journal': put(f.directory.journalPath, '{'); expected = 'PCR_TRANSACTION_JOURNAL_UNTRUSTED'; break;
      case 'symlink journal': renameSync(f.directory.journalPath, `${f.directory.journalPath}.saved`); symlinkSync(`${f.directory.journalPath}.saved`, f.directory.journalPath); expected = 'PCR_TRANSACTION_UNRECOGNIZED_STATE'; break;
      case 'directory journal': rmSync(f.directory.journalPath); mkdirSync(f.directory.journalPath); expected = 'PCR_TRANSACTION_JOURNAL_UNTRUSTED'; break;
      case 'unknown current': put(method(f.pcr), 'concurrent unknown\n'); break;
      case 'unknown stage': put(method(f.directory.stageDir), 'unknown staged\n'); break;
      case 'unknown backup': put(method(f.directory.backupDir), 'unknown backup\n'); break;
      case 'missing old': rmSync(f.directory.backupDir, { recursive: true }); expected = 'PCR_TRANSACTION_OLD_TREE_MISSING'; break;
      case 'missing new': rmSync(f.pcr, { recursive: true }); expected = 'PCR_TRANSACTION_NEW_TREE_MISSING'; break;
      case 'malformed temporary': { const target = temporary(f); renameSync(f.directory.journalPath, target); put(target, '{'); expected = 'PCR_TRANSACTION_TRUSTED_JOURNAL_REQUIRED'; break; }
      case 'untrusted temporary': { const target = temporary(f); renameSync(f.directory.journalPath, target); json(target, {}); expected = 'PCR_TRANSACTION_TRUSTED_JOURNAL_REQUIRED'; break; }
      case 'two temporaries': cpSync(f.directory.journalPath, temporary(f)); renameSync(f.directory.journalPath, temporary(f)); expected = 'PCR_TRANSACTION_TRUSTED_JOURNAL_REQUIRED'; break;
      case 'special entry': put(path.join(f.directory.transactionDir, 'unknown'), 'preserve'); expected = 'PCR_TRANSACTION_UNRECOGNIZED_STATE'; break;
    }
    assert.throws(() => recoverPcrDirectoryTransaction({ root: f.root, pcr: f.pcr, force: true }), errorIs(expected));
    assert.equal(existsSync(f.directory.transactionDir), true);
  });
}

for (const source of ['stage', 'backup'] as const) {
  test(`PCR committed recovery finds the recorded new leaf in ${source}`, t => {
    const f = transactionFixture(t); crash(f, 'directory', 'committed');
    const target = source === 'stage' ? f.directory.stageDir : f.directory.backupDir;
    rmSync(target, { recursive: true, force: true }); renameSync(f.pcr, target);
    assert.equal(recoverPcrDirectoryTransaction({ root: f.root, pcr: f.pcr }).action, 'finished');
    assert.equal(readFileSync(method(f.pcr), 'utf8'), 'new methodology\n'); assert.equal(existsSync(f.directory.transactionDir), false);
  });
}
test('PCR rollback can restore the recorded old tree from stage without a backup', t => {
  const f = transactionFixture(t); crash(f, 'directory', 'prepared');
  rmSync(f.directory.stageDir, { recursive: true }); renameSync(f.pcr, f.directory.stageDir);
  assert.equal(recoverPcrDirectoryTransaction({ root: f.root, pcr: f.pcr }).action, 'rolled_back'); assertOld(f);
});

test('PCR recovery treats identical old and new digests as a valid no-op transaction', t => {
  const f = transactionFixture(t);
  const result = runPcrDirectoryTransaction({ root: f.root, pcr: f.pcr });
  assert.equal(result.oldTreeSha256, result.newTreeSha256); assertOld(f);
  crash(f, 'directory', 'prepared');
  const journal = readRecord(f.directory.journalPath); rmSync(f.directory.stageDir, { recursive: true }); cpSync(f.pcr, f.directory.stageDir, { recursive: true });
  json(f.directory.journalPath, { ...journal, new_tree_sha256: journal.old_tree_sha256 });
  assert.equal(recoverPcrDirectoryTransaction({ root: f.root, pcr: f.pcr }).action, 'rolled_back');
});

test('PCR recovery refuses mutation by its own validator and keeps the journal', t => {
  const f = transactionFixture(t); crash(f, 'directory', 'new_installed');
  assert.throws(() => recoverPcrDirectoryTransaction({ root: f.root, pcr: f.pcr, validateRecovered: () => put(method(f.pcr), 'validator mutation\n') }), errorIs('PCR_TRANSACTION_RECOVERY_VALIDATION_MUTATION'));
  assert.equal(readFileSync(method(f.pcr), 'utf8'), 'validator mutation\n'); assert.equal(existsSync(f.directory.journalPath), true);
});

test('PCR pre-journal stage without an owner cannot be discarded by force', t => {
  const f = transactionFixture(t); crash(f, 'directory', 'stage'); rmSync(f.directory.lockDir, { recursive: true });
  assert.throws(() => recoverPcrDirectoryTransaction({ root: f.root, pcr: f.pcr }), errorIs('PCR_TRANSACTION_FORCE_REQUIRED'));
  assert.throws(() => recoverPcrDirectoryTransaction({ root: f.root, pcr: f.pcr, force: true }), errorIs('PCR_TRANSACTION_TRUSTED_OWNER_REQUIRED'));
  assert.equal(existsSync(f.directory.stageDir), true); assertOld(f);
});

test('PCR stage reappearance after commit is preserved and recovery verifies before cleanup', t => {
  const f = transactionFixture(t);
  const result = runPcrDirectoryTransaction({ root: f.root, pcr: f.pcr, prepareStage: c => put(method(c.stageDir), 'new methodology\n'), onPhase: c => { if (c.phase === 'committed') cpSync(f.pcr, f.directory.stageDir, { recursive: true }); } });
  assert.equal(result.committed, true); assert.equal(result.recoveryRequired, true); assert.match(result.warnings.join(' '), /stage path reappeared/);
  assert.equal(existsSync(f.directory.stageDir), true);
  assert.equal(recoverPcrDirectoryTransaction({ root: f.root, pcr: f.pcr }).action, 'finished');
});

test('PCR failed post-validation preserves unknown installed bytes and both recorded generations', t => {
  const f = transactionFixture(t);
  assert.throws(() => runPcrDirectoryTransaction({ root: f.root, pcr: f.pcr, prepareStage: c => put(method(c.stageDir), 'new methodology\n'), postValidate: () => put(method(f.pcr), 'unknown installed\n') }), errorIs('PCR_TRANSACTION_ROLLBACK_FAILED'));
  assert.equal(readFileSync(method(f.pcr), 'utf8'), 'unknown installed\n'); assert.equal(existsSync(f.directory.journalPath), true); assert.equal(readFileSync(method(f.directory.backupDir), 'utf8'), 'old methodology\n');
});

for (const boundary of ['preflight', 'prepareStage', 'validateStage', 'postValidate', 'onCopyEntry', 'onPhase', 'onLockReleased', 'validateRecovered'] as const) {
  test(`PCR rejects asynchronous ${boundary} without an unreported commit`, t => {
    const f = transactionFixture(t); const asyncResult = () => Promise.resolve();
    if (boundary === 'validateRecovered') { crash(f, 'directory', 'prepared'); assert.throws(() => recoverPcrDirectoryTransaction({ root: f.root, pcr: f.pcr, validateRecovered: asyncResult }), errorIs('PCR_TRANSACTION_ASYNC_CALLBACK')); assert.equal(existsSync(f.directory.journalPath), true); return; }
    const run = () => runPcrDirectoryTransaction({ root: f.root, pcr: f.pcr, [boundary]: asyncResult });
    if (boundary === 'onLockReleased') { const result = run(); assert.equal(result.committed, true); assert.equal(result.recoveryRequired, true); assert.match(result.warnings.join(' '), /synchronous/); }
    else { assert.throws(run, errorIs('PCR_TRANSACTION_ASYNC_CALLBACK')); assertOld(f); assert.equal(existsSync(f.directory.journalPath), false); }
  });
}

test('PCR current digest binds exact source bytes and the canonical leaf identity', t => {
  const f = transactionFixture(t); const before = currentPcrDigest({ root: f.root, pcr: f.pcr });
  assert.equal(before.pcrPath, 'library/pcrs/agriculture/crops/wheat'); assert.equal(before.realpath, f.pcr); assert.equal(before.sha256, digestDirectoryTree(f.pcr));
  put(method(f.pcr), 'changed source\n'); assert.notEqual(currentPcrDigest({ root: f.root, pcr: f.pcr }).sha256, before.sha256);
});

for (const [name, fault, code] of [
  ['owner write failure', { operation: 'writeFileSync', pathContains: '/lock/.owner.json.', action: 'throw' }, 'EIO'],
  ['lock creation I/O failure', { operation: 'mkdirSync', pathContains: '/lock', action: 'throw' }, 'EIO'],
  ['tree descriptor becomes a non-file', { operation: 'fstatSync', pathContains: '/pcr.en-US.md', when: 'after', action: 'not-file' }, 'PCR_TRANSACTION_NOT_FILE'],
  ['copy changes bytes', { operation: 'writeFileSync', pathContains: '/stage/pcr.en-US.md', when: 'after', action: 'write' }, 'PCR_TRANSACTION_STAGE_COPY_MISMATCH'],
] satisfies [string, FilesystemFault, string][]) {
  test(`PCR filesystem failure: ${name} preserves the original`, t => {
    const f = transactionFixture(t);
    const withTarget = fault.action === 'write' ? { ...fault, target: method(f.directory.stageDir), content: 'incomplete copy\n' } : fault;
    const result = filesystemFault(f, 'directory', 'run', withTarget);
    assert.equal(result.fired, true); assert.equal(record(result.error).code, code); assertOld(f); assert.equal(existsSync(f.directory.journalPath), false);
  });
}

for (const error of ['ENOENT', 'EACCES'] as const) {
  test(`PCR lock release ${error} retains ownership evidence rather than deleting another owner`, t => {
    const f = transactionFixture(t); crash(f, 'directory', 'prepared');
    const result = filesystemFault(f, 'directory', 'recover', { operation: 'renameSync', pathContains: '/lock', action: 'throw', code: error });
    assert.equal(result.fired, true); assert.equal(record(result.error).code, error === 'ENOENT' ? 'PCR_TRANSACTION_LOCK_CHANGED' : 'EACCES');
    assert.equal(existsSync(f.directory.lockOwnerPath), true); assert.equal(existsSync(f.directory.journalPath), true); assertOld(f);
  });
}

for (const container of ['transaction', 'state-root'] as const) {
  test(`PCR cleanup ${container} I/O error is a committed warning with unchanged new bytes`, t => {
    const f = transactionFixture(t);
    const result = filesystemFault(f, 'directory', 'run', { operation: 'rmdirSync', pathContains: container === 'transaction' ? f.directory.transactionDir : f.directory.stateRoot, at: container === 'transaction' ? 1 : 2, action: 'throw', code: 'EACCES' });
    assert.equal(result.fired, true); const transaction = record(result.result); assert.equal(transaction.committed, true); assert.equal(transaction.recoveryRequired, true);
    assert.equal(readFileSync(method(f.pcr), 'utf8'), 'new methodology\n');
    assert.equal(recoverPcrDirectoryTransaction({ root: f.root, pcr: f.pcr }).action, 'nothing_to_recover');
  });
}

test('PCR moved-original edit during the rename is restored before installing new content', t => {
  const f = transactionFixture(t);
  const result = filesystemFault(f, 'directory', 'run', { operation: 'renameSync', pathContains: f.pcr, when: 'after', action: 'write', target: method(f.directory.backupDir), content: 'concurrent original edit\n' });
  assert.equal(result.fired, true); assert.equal(record(result.error).code, 'PCR_TRANSACTION_SOURCE_CHANGED');
  assert.equal(readFileSync(method(f.pcr), 'utf8'), 'concurrent original edit\n'); assert.equal(existsSync(f.directory.journalPath), false);
});

test('PCR recovery verifies restored bytes after a filesystem rename', t => {
  const f = transactionFixture(t); crash(f, 'directory', 'current_moved');
  const result = filesystemFault(f, 'directory', 'recover', { operation: 'renameSync', pathContains: '/backup', when: 'after', action: 'write', target: method(f.pcr), content: 'concurrent restored edit\n' });
  assert.equal(result.fired, true); assert.equal(record(result.error).code, 'PCR_TRANSACTION_ROLLBACK_VERIFY_FAILED');
  assert.equal(readFileSync(method(f.pcr), 'utf8'), 'concurrent restored edit\n'); assert.equal(existsSync(f.directory.journalPath), true);
});

test('PCR committed forward recovery verifies bytes after moving the new generation', t => {
  const f = transactionFixture(t); crash(f, 'directory', 'committed'); renameSync(f.pcr, f.directory.stageDir);
  const result = filesystemFault(f, 'directory', 'recover', { operation: 'renameSync', pathContains: '/stage', when: 'after', action: 'write', target: method(f.pcr), content: 'concurrent forward edit\n' });
  assert.equal(result.fired, true); assert.equal(record(result.error).code, 'PCR_TRANSACTION_FORWARD_VERIFY_FAILED');
  assert.equal(existsSync(f.directory.journalPath), true);
});

test('PCR recovery does not claim success when current is absent even for lock-only state', t => {
  const f = transactionFixture(t); mkdirSync(f.directory.transactionDir, { recursive: true }); rmSync(f.pcr, { recursive: true });
  assert.throws(() => recoverPcrDirectoryTransaction({ root: f.root, pcr: f.pcr }), errorIs('PCR_TRANSACTION_RECOVERED_TREE_MISSING'));
  assert.equal(existsSync(f.pcr), false);
});

test('PCR rejects non-directory tree roots and empty transaction commands', t => {
  const f = transactionFixture(t);
  assert.throws(() => digestDirectoryTree(method(f.pcr)), errorIs('PCR_TRANSACTION_NOT_DIRECTORY'));
  assert.throws(() => runPcrDirectoryTransaction({ root: f.root, pcr: f.pcr, command: '  ' }), errorIs('PCR_TRANSACTION_COMMAND_REQUIRED'));
  assert.equal(existsSync(f.directory.transactionDir), false); assertOld(f);
});

test('PCR rejects normal writes while a journal or an unrecognized entry remains', t => {
  const f = transactionFixture(t); crash(f, 'directory', 'prepared'); rmSync(f.directory.lockDir, { recursive: true });
  assert.throws(() => runPcrDirectoryTransaction({ root: f.root, pcr: f.pcr }), errorIs('PCR_TRANSACTION_RECOVERY_REQUIRED'));
  recoverPcrDirectoryTransaction({ root: f.root, pcr: f.pcr }); mkdirSync(f.directory.transactionDir, { recursive: true }); put(path.join(f.directory.transactionDir, 'unknown'), 'preserve');
  assert.throws(() => runPcrDirectoryTransaction({ root: f.root, pcr: f.pcr }), errorIs('PCR_TRANSACTION_RECOVERY_REQUIRED')); assertOld(f);
});

test('PCR refuses a FIFO in a leaf without opening or deleting it', t => {
  if (process.platform === 'win32') { t.skip('POSIX FIFO scenario'); return; }
  const f = transactionFixture(t); const fifo = path.join(f.pcr, 'pipe');
  assert.equal(spawnSync('mkfifo', [fifo]).status, 0);
  assert.throws(() => runPcrDirectoryTransaction({ root: f.root, pcr: f.pcr }), errorIs('PCR_TRANSACTION_SPECIAL_FILE'));
  assert.equal(existsSync(fifo), true); assertOld(f);
});

test('PCR refuses a pre-existing staging tree before starting its copy', t => {
  const f = transactionFixture(t);
  assert.throws(() => runPcrDirectoryTransaction({ root: f.root, pcr: f.pcr, preflight: c => mkdirSync(c.stageDir) }), errorIs('PCR_TRANSACTION_STAGE_EXISTS'));
  assertOld(f);
});

test('PCR failed phase hook cannot turn a damaged persisted journal into rollback authority', t => {
  const f = transactionFixture(t);
  assert.throws(() => runPcrDirectoryTransaction({ root: f.root, pcr: f.pcr, onPhase: c => { if (c.phase === 'prepared') { json(c.journalPath, {}); throw new Error('phase failure'); } } }), errorIs('PCR_TRANSACTION_ROLLBACK_FAILED'));
  assert.deepEqual(readRecord(f.directory.journalPath), {}); assertOld(f); assert.equal(existsSync(f.directory.stageDir), true);
});

test('PCR released owner residue cannot conceal additional files', t => {
  const f = transactionFixture(t); crash(f, 'directory', 'stage'); const owner = readRecord(f.directory.lockOwnerPath);
  const residue = path.join(f.directory.transactionDir, `.lock.released.${String(owner.invocation_token)}`); renameSync(f.directory.lockDir, residue); put(path.join(residue, 'unexpected'), 'preserve');
  assert.throws(() => recoverPcrDirectoryTransaction({ root: f.root, pcr: f.pcr, force: true }), errorIs('PCR_TRANSACTION_RELEASED_LOCK_UNTRUSTED'));
  assert.equal(existsSync(path.join(residue, 'unexpected')), true); assertOld(f);
});

test('PCR detects owner substitution during a release rename and restores the lock evidence', t => {
  const f = transactionFixture(t); crash(f, 'directory', 'prepared'); const owner = readRecord(f.directory.lockOwnerPath);
  const movedOwner = path.join(f.directory.transactionDir, `.lock.released.${String(owner.invocation_token)}`, 'owner.json');
  const result = filesystemFault(f, 'directory', 'recover', { operation: 'renameSync', pathContains: '/lock', when: 'after', action: 'write', target: movedOwner, content: JSON.stringify({ ...owner, invocation_token: randomUUID() }) });
  assert.equal(result.fired, true); assert.equal(record(result.error).code, 'PCR_TRANSACTION_LOCK_OWNERSHIP_CHANGED');
  assert.equal(existsSync(f.directory.lockOwnerPath), true); assert.equal(existsSync(f.directory.journalPath), true); assertOld(f);
});

test('PCR late current reappearance does not overwrite a competing leaf', t => {
  const f = transactionFixture(t);
  assert.throws(() => runPcrDirectoryTransaction({ root: f.root, pcr: f.pcr, prepareStage: c => put(method(c.stageDir), 'new methodology\n'), onPhase: c => { if (c.phase === 'current_moved') { put(method(c.backupDir), 'edited old\n'); put(method(c.pcrDir), 'competing current\n'); } } }), errorIs('PCR_TRANSACTION_ROLLBACK_FAILED'));
  assert.equal(readFileSync(method(f.pcr), 'utf8'), 'competing current\n'); assert.equal(readFileSync(method(f.directory.backupDir), 'utf8'), 'edited old\n'); assert.equal(existsSync(f.directory.journalPath), true);
});

test('PCR stage reappearance while preserving a moved-original edit cannot be erased', t => {
  const f = transactionFixture(t);
  assert.throws(() => runPcrDirectoryTransaction({ root: f.root, pcr: f.pcr, prepareStage: c => put(method(c.stageDir), 'new methodology\n'), postValidate: c => { put(method(c.backupDir), 'edited original\n'); put(method(c.stageDir), 'competing stage\n'); } }), errorIs('PCR_TRANSACTION_ROLLBACK_FAILED'));
  assert.equal(readFileSync(method(f.directory.stageDir), 'utf8'), 'competing stage\n'); assert.equal(existsSync(f.directory.journalPath), true);
});

for (const bytes of ['{', '{}\n']) {
  test(`PCR pre-journal recovery treats temporary ${JSON.stringify(bytes)} as untrusted owned staging`, t => {
    const f = transactionFixture(t); crash(f, 'directory', 'stage'); put(temporary(f), bytes);
    assert.equal(recoverPcrDirectoryTransaction({ root: f.root, pcr: f.pcr, force: true }).action, 'discarded_pre_journal_stage'); assertOld(f); assert.equal(existsSync(f.directory.transactionDir), false);
  });
}
