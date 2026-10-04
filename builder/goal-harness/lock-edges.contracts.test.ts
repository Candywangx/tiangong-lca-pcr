import assert from 'node:assert/strict';
import { createHash } from 'node:crypto';
import { existsSync, mkdirSync, mkdtempSync, readFileSync, readdirSync, readlinkSync, realpathSync, renameSync, rmSync, symlinkSync, unlinkSync, writeFileSync } from 'node:fs';
import { tmpdir } from 'node:os';
import path from 'node:path';
import test, { type TestContext } from 'node:test';
import { withGoalLock, withGoalLockAsync } from './lock.ts';
import { field, record, text } from './domain.ts';

function fixture(t: TestContext) {
  const root = realpathSync(mkdtempSync(path.join(tmpdir(), 'pcr-goal-lock-edge-'))); t.after(() => rmSync(root, { recursive: true, force: true }));
  return { root, lock: path.join(root, 'goal.lock') };
}
const dead = (token = 'owned-dead-lease') => ({ schema_version: 1, token, pid: 2147483647, operation: 'owned fixture operation', acquired_at: '2026-01-01T00:00:00.000Z' });
const bytes = (value: unknown) => Buffer.from(JSON.stringify(value) + '\n');
const digest = (value: Buffer) => createHash('sha256').update(value).digest('hex');
function lease(t: TestContext) { const f = fixture(t), original = bytes(dead()); writeFileSync(f.lock, original); return { ...f, original }; }
function paused(t: TestContext, phase = 'after_stale_owner_captured') {
  const f = lease(t); let reached = false;
  assert.throws(() => withGoalLock(f.root, 'owned pause', () => assert.fail('Interrupted acquisition cannot grant authority.'), { faultInjector(current) { if (current === phase) { reached = true; throw Object.assign(new Error('Owned retirement interruption'), { code: 'EDGE_INTERRUPTED' }); } } }), error => {
    const value = record(error); return value.code === 'EDGE_INTERRUPTED' || (value.code === 'GOAL_LOCKED' && field(value.details, 'cause') === 'EDGE_INTERRUPTED');
  }); assert.equal(reached, true, 'The documented retirement boundary was actually reached.');
  const names = readdirSync(path.join(f.root, 'lock-history')); assert.equal(names.length, 1);
  return { ...f, retired: path.join(f.root, 'lock-history', text(names[0])) };
}
function blocked(root: string, code = 'GOAL_LOCKED') { assert.throws(() => withGoalLock(root, 'must not enter', () => assert.fail('Untrusted state cannot authorize the callback.')), { code }); }

test('async lock keeps its exact owner throughout an awaited callback and releases after success', async t => {
  const f = fixture(t);
  assert.equal(await withGoalLockAsync(f.root, 'async owner', async () => {
    const first = readFileSync(f.lock); blocked(f.root); await Promise.resolve(); assert.deepEqual(readFileSync(f.lock), first); return 'completed';
  }), 'completed'); assert.equal(existsSync(f.lock), false); assert.deepEqual(readdirSync(f.root), []);
});
test('callback failure propagates unchanged while both sync and async owned leases are removed', async t => {
  const f = fixture(t), failure = new Error('Actual callback failure');
  assert.throws(() => withGoalLock(f.root, 'sync failure', () => { throw failure; }), error => error === failure); assert.equal(existsSync(f.lock), false);
  await assert.rejects(withGoalLockAsync(f.root, 'async failure', async () => { await Promise.resolve(); throw failure; }), error => error === failure); assert.equal(existsSync(f.lock), false); assert.deepEqual(readdirSync(f.root), []);
});
for (const replacement of ['regular', 'directory', 'symlink'] as const) test(`release cannot erase a ${replacement} successor substituted during the owner's callback`, t => {
  const f = fixture(t), successor = bytes({ ...dead('successor'), pid: process.pid, acquired_at: new Date().toISOString() });
  const outside = path.join(f.root, 'operator-owner'); writeFileSync(outside, successor);
  withGoalLock(f.root, 'original owner', () => {
    unlinkSync(f.lock);
    if (replacement === 'regular') writeFileSync(f.lock, successor);
    if (replacement === 'directory') { mkdirSync(f.lock); writeFileSync(path.join(f.lock, 'keep'), successor); }
    if (replacement === 'symlink') symlinkSync(outside, f.lock);
  });
  assert.deepEqual(readFileSync(outside), successor);
  if (replacement === 'directory') assert.deepEqual(readFileSync(path.join(f.lock, 'keep')), successor);
  else if (replacement === 'symlink') assert.equal(readlinkSync(f.lock), outside);
  else assert.deepEqual(readFileSync(f.lock), successor);
  blocked(f.root);
});
test('an owner whose lock was removed during the callback does not invent a new lease on release', t => {
  const f = fixture(t); withGoalLock(f.root, 'removed owner', () => unlinkSync(f.lock)); assert.deepEqual(readdirSync(f.root), []);
});

for (const phase of ['before_goal_lock_stage_write', 'before_goal_lock_stage_fsync', 'after_goal_lock_publish_link', 'after_goal_lock_published']) test(`a controlled EIO at the actual publication boundary ${phase} cannot grant authority or retain an owned live lease`, t => {
  const f = fixture(t); let entered = false;
  assert.throws(() => withGoalLock(f.root, 'I/O failure', () => { entered = true; }, { faultInjector(current) { if (current === phase) throw Object.assign(new Error('Controlled I/O failure'), { code: 'EIO' }); } }), error => {
    const value = record(error); return phase === 'after_goal_lock_published' ? value.code === 'EIO' : value.code === 'GOAL_LOCKED';
  });
  assert.equal(entered, false); assert.equal(existsSync(f.lock), false); assert.deepEqual(readdirSync(f.root), []);
});
test('a published lease remains valid when its already-linked staging pathname disappears', t => {
  const f = fixture(t); let reached = false;
  assert.equal(withGoalLock(f.root, 'linked stage disappearance', () => 'entered', { faultInjector(phase, context) {
    if (phase === 'after_goal_lock_publish_link') { reached = true; unlinkSync(text(context.stage_path)); }
  } }), 'entered'); assert.equal(reached, true); assert.deepEqual(readdirSync(f.root), []);
});
test('a replaced acquisition staging inode is retained and never authorizes the callback', t => {
  const f = fixture(t); let stage = '', original = '', entered = false;
  assert.throws(() => withGoalLock(f.root, 'stage substitution', () => { entered = true; }, { faultInjector(phase, context) {
    if (phase === 'before_goal_lock_publish_link') { stage = text(context.stage_path); original = path.join(f.root, 'captured-original-stage'); renameSync(stage, original); writeFileSync(stage, 'operator replacement bytes\n'); }
  } }), { code: 'GOAL_LOCKED' });
  assert.equal(entered, false); assert.equal(readFileSync(stage, 'utf8'), 'operator replacement bytes\n'); assert.ok(readFileSync(original).length > 0);
  assert.equal(readFileSync(f.lock, 'utf8'), 'operator replacement bytes\n'); blocked(f.root);
});

test('explicit recovery authorization is required before retiring either a dead lease or its interrupted transaction', t => {
  const f = lease(t); assert.throws(() => withGoalLock(f.root, 'no force', () => assert.fail(), { allowDeadLockRecovery: false }), { code: 'GOAL_STALE_LOCK_FORCE_REQUIRED' }); assert.deepEqual(readFileSync(f.lock), f.original);
  const p = paused(t); const originalOwner = readFileSync(path.join(p.retired, 'owner.json'));
  assert.throws(() => withGoalLock(p.root, 'incomplete no force', () => assert.fail(), { allowDeadLockRecovery: false }), { code: 'GOAL_STALE_LOCK_FORCE_REQUIRED' }); assert.deepEqual(readFileSync(p.lock), p.original); assert.deepEqual(readFileSync(path.join(p.retired, 'owner.json')), originalOwner);
});
for (const value of [{ ...dead(), pid: 0 }, { ...dead(), pid: -1 }, { ...dead(), pid: '2147483647' }, { ...dead(), extra_authority: true }, { ...dead(), token: '' }]) test(`untrusted owner ${JSON.stringify(value)} is held without stealing a lease or creating retirement authority`, t => {
  const f = fixture(t), original = bytes(value); writeFileSync(f.lock, original); blocked(f.root); assert.deepEqual(readFileSync(f.lock), original); assert.equal(existsSync(path.join(f.root, 'lock-history')), false);
});
for (const kind of ['invalid-json', 'directory', 'symlink'] as const) test(`a ${kind} authoritative lock is rejected without reading or clearing external owner data`, t => {
  const f = fixture(t), external = path.join(f.root, 'external-owner'), original = bytes({ ...dead(), pid: process.pid }); writeFileSync(external, original);
  if (kind === 'invalid-json') writeFileSync(f.lock, '{torn owner');
  if (kind === 'directory') { mkdirSync(f.lock); writeFileSync(path.join(f.lock, 'keep'), 'operator bytes'); }
  if (kind === 'symlink') symlinkSync(external, f.lock);
  blocked(f.root); assert.deepEqual(readFileSync(external), original);
  if (kind === 'invalid-json') assert.equal(readFileSync(f.lock, 'utf8'), '{torn owner');
  if (kind === 'directory') assert.equal(readFileSync(path.join(f.lock, 'keep'), 'utf8'), 'operator bytes');
  if (kind === 'symlink') assert.equal(readlinkSync(f.lock), external);
});
test('a nondirectory retirement-history path blocks acquisition without clearing its bytes', t => {
  const f = fixture(t); writeFileSync(path.join(f.root, 'lock-history'), 'operator history'); blocked(f.root); assert.equal(readFileSync(path.join(f.root, 'lock-history'), 'utf8'), 'operator history'); assert.equal(existsSync(f.lock), false);
});

test('a byte-identical stale owner rematerialized on another inode cannot be unlinked as the captured owner', t => {
  const f = lease(t);
  assert.throws(() => withGoalLock(f.root, 'inode race', () => assert.fail('Cannot grant a substituted inode.'), { faultInjector(phase) {
    if (phase === 'after_stale_owner_captured') { unlinkSync(f.lock); writeFileSync(f.lock, f.original); }
  } }), { code: 'GOAL_LOCKED' }); assert.deepEqual(readFileSync(f.lock), f.original);
  const retired = path.join(f.root, 'lock-history', text(readdirSync(path.join(f.root, 'lock-history'))[0])); assert.deepEqual(readFileSync(path.join(retired, 'owner.json')), f.original); assert.equal(existsSync(path.join(retired, 'complete.json')), false);
});
test('a captured dead lease removed at the final documented comparison boundary can complete without overwriting a successor', t => {
  const f = lease(t); let removed = false;
  assert.equal(withGoalLock(f.root, 'completed disappearance', () => 'entered', { faultInjector(phase) { if (phase === 'before_stale_lock_unlink') { removed = true; unlinkSync(f.lock); } } }), 'entered');
  assert.equal(removed, true); assert.equal(existsSync(f.lock), false); const retired = path.join(f.root, 'lock-history', text(readdirSync(path.join(f.root, 'lock-history'))[0]));
  assert.deepEqual(readFileSync(path.join(retired, 'owner.json')), f.original); assert.equal(record(JSON.parse(readFileSync(path.join(retired, 'complete.json'), 'utf8')) as unknown).stale_lease_sha256, digest(f.original));
});
test('a missing stale owner before capture is a stable blocked race rather than fabricated retirement evidence', t => {
  const f = lease(t);
  assert.throws(() => withGoalLock(f.root, 'capture disappearance', () => assert.fail(), { faultInjector(phase) { if (phase === 'after_retirement_directory_created') unlinkSync(f.lock); } }), { code: 'GOAL_LOCKED' });
  const retired = path.join(f.root, 'lock-history', text(readdirSync(path.join(f.root, 'lock-history'))[0])); assert.equal(existsSync(path.join(retired, 'owner.json')), false); assert.equal(existsSync(path.join(retired, 'complete.json')), false);
});
for (const marker of ['wrong-hash', 'missing-owner'] as const) test(`a completed retirement with ${marker} cannot authorize a new owner`, t => {
  const f = lease(t); withGoalLock(f.root, 'actual retirement', () => 'entered'); const retired = path.join(f.root, 'lock-history', text(readdirSync(path.join(f.root, 'lock-history'))[0]));
  if (marker === 'wrong-hash') writeFileSync(path.join(retired, 'complete.json'), bytes({ schema_version: 1, stale_lease_sha256: 'f'.repeat(64) })); else unlinkSync(path.join(retired, 'owner.json'));
  const complete = readFileSync(path.join(retired, 'complete.json')); blocked(f.root); assert.deepEqual(readFileSync(path.join(retired, 'complete.json')), complete); assert.equal(existsSync(f.lock), false);
});
test('an interrupted retirement cannot adopt a substituted immutable directory identity', t => {
  const f = paused(t); const renamed = path.join(f.root, 'lock-history', 'goal-lock-stale-2147483647-' + 'f'.repeat(64)); renameSync(f.retired, renamed);
  blocked(f.root); assert.deepEqual(readFileSync(f.lock), f.original); assert.deepEqual(readFileSync(path.join(renamed, 'owner.json')), f.original);
});
for (const artifact of ['owner-symlink', 'unexpected-entry', 'retirement-symlink'] as const) test(`interrupted ${artifact} substitution retains unowned data and blocks reclamation`, t => {
  const f = paused(t), outside = path.join(f.root, 'external'); mkdirSync(outside); writeFileSync(path.join(outside, 'keep'), f.original);
  if (artifact === 'owner-symlink') { unlinkSync(path.join(f.retired, 'owner.json')); symlinkSync(path.join(outside, 'keep'), path.join(f.retired, 'owner.json')); }
  if (artifact === 'unexpected-entry') writeFileSync(path.join(f.retired, 'operator.txt'), 'operator bytes');
  if (artifact === 'retirement-symlink') { const saved = path.join(f.root, 'saved-retirement'); renameSync(f.retired, saved); symlinkSync(saved, f.retired, 'dir'); }
  blocked(f.root); assert.deepEqual(readFileSync(path.join(outside, 'keep')), f.original); assert.deepEqual(readFileSync(f.lock), f.original);
});

for (const artifact of ['claim-json', 'claim-extra-fields', 'claim-release-hash'] as const) test(`retirement ${artifact} corruption cannot consume a generation or remove its original owner`, t => {
  const f = paused(t), claim = path.join(f.retired, 'claim-000000000001.json'), release = claim + '.released';
  if (artifact === 'claim-json') writeFileSync(claim, '{torn claim');
  if (artifact === 'claim-extra-fields') { const value = record(JSON.parse(readFileSync(claim, 'utf8')) as unknown); value.extra_authority = true; writeFileSync(claim, bytes(value)); }
  if (artifact === 'claim-release-hash') writeFileSync(release, bytes({ schema_version: 1, claim_sha256: 'f'.repeat(64) }));
  const claimBefore = readFileSync(claim), releaseBefore = readFileSync(release); blocked(f.root); assert.deepEqual(readFileSync(claim), claimBefore); assert.deepEqual(readFileSync(release), releaseBefore); assert.deepEqual(readFileSync(f.lock), f.original);
});
test('a live valid legacy recovery owner blocks retirement while valid JSON without ownership is quarantined', t => {
  const live = paused(t, 'after_retirement_directory_created'), holder = bytes({ schema_version: 1, pid: process.pid, token: 'live owned process', acquired_at: new Date().toISOString() }); writeFileSync(path.join(live.retired, 'recovery.lock'), holder);
  blocked(live.root); assert.deepEqual(readFileSync(path.join(live.retired, 'recovery.lock')), holder); assert.deepEqual(readFileSync(live.lock), live.original);
  const torn = paused(t, 'after_retirement_directory_created'), untrusted = bytes({ pid: process.pid }); writeFileSync(path.join(torn.retired, 'recovery.lock'), untrusted);
  assert.equal(withGoalLock(torn.root, 'quarantine untrusted legacy', () => 'entered'), 'entered'); assert.equal(existsSync(path.join(torn.retired, 'recovery.lock')), false); assert.deepEqual(readFileSync(path.join(torn.retired, `recovery-torn-${digest(untrusted)}.bin`)), untrusted);
});
test('a pre-existing conflicting legacy archive cannot overwrite the original recovery claim', t => {
  const f = paused(t, 'after_retirement_directory_created'), holder = bytes({ schema_version: 1, pid: 2147483647, token: 'dead recovery', acquired_at: '2026-01-01T00:00:00Z' }), claim = path.join(f.retired, 'recovery.lock'), archive = path.join(f.retired, `recovery-dead-${digest(holder)}.json`);
  writeFileSync(claim, holder); writeFileSync(archive, 'operator substitute'); blocked(f.root); assert.deepEqual(readFileSync(claim), holder); assert.equal(readFileSync(archive, 'utf8'), 'operator substitute'); assert.deepEqual(readFileSync(f.lock), f.original);
});

for (const kind of ['directory', 'oversize', 'wrong-pid'] as const) test(`legacy ${kind} archive never becomes retirement authority`, t => {
  const f = fixture(t), token = '11111111-1111-4111-8111-111111111111', file = path.join(f.root, 'lock-history', `goal-lock-stale-2147483647-${token}.json`); mkdirSync(path.dirname(file));
  if (kind === 'directory') mkdirSync(file); else writeFileSync(file, kind === 'oversize' ? Buffer.concat([bytes(dead(token)), Buffer.alloc(17 * 1024, 32)]) : bytes({ ...dead(token), pid: process.pid }));
  blocked(f.root); assert.equal(existsSync(file), true); assert.equal(existsSync(f.lock), false);
});
