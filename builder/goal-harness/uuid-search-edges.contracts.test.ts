import test, { type TestContext } from 'node:test';
import assert from 'node:assert/strict';
import { mkdirSync, mkdtempSync, readFileSync, realpathSync, rmSync, writeFileSync, readdirSync, existsSync } from 'node:fs';
import { tmpdir } from 'node:os';
import path from 'node:path';
import { runHybridSearchWithReceipt, recordHybridCandidateDirectRead, finalizeHybridSearchReceipt, isReusableCommonUuidAudit } from './uuid-search-receipts.ts';
import { isUnknownRecord } from '../../packages/pcr-core/src/types.ts';

const uuid = '11111111-1111-4111-8111-111111111111';
function object(value: unknown) { assert.ok(isUnknownRecord(value)); return value; }
function code(expected: string) { return (error: unknown) => { assert.equal(object(error).code, expected); return true; }; }
function fixture(t: TestContext) {
  const root = realpathSync(mkdtempSync(path.join(tmpdir(), 'pcr-uuid-search-edges-'))); t.after(() => rmSync(root, { recursive: true, force: true }));
  const stateDir = path.join(root, 'state'), cwd = path.join(root, 'worktree'), toolRoot = path.join(root, 'tools');
  for (const directory of [stateDir, cwd, toolRoot]) mkdirSync(directory);
  const state = { goal_id: 'edge-goal', tasks: [{ id: 'task-1', cpc_code: '41111', state: 'authoring', worktree_path: cwd, attempt: 1 }] };
  writeFileSync(path.join(stateDir, 'state.json'), JSON.stringify(state));
  writeFileSync(path.join(toolRoot, 'package.json'), '{}');
  const options = { stateDir, cwd, taskId: 'task-1', query: 'pig iron', toolConfig: { tiangong_cli_root: toolRoot, flow_hybrid_search_root: toolRoot }, randomId: () => 'receipt-1' };
  const directory = path.join(stateDir, 'uuid-search-receipts/task-1/attempt-1');
  const search = () => runHybridSearchWithReceipt({ ...options, runner: () => ({ status: 0, stdout: JSON.stringify({ data: [{ id: uuid }] }) }) });
  const decisionsPath = path.join(cwd, 'decisions.json');
  const decision = { uuid, decision: 'adopted', reason_code: null, reason: 'The public product definition matches.', general_comment_review: 'The complete public general comment was reviewed.' };
  const direct = (value: unknown = { uuid, state_code: 100, response_sha256: 'sha256:' + '1'.repeat(64) }) => recordHybridCandidateDirectRead({ stateDir, cwd, taskId: 'task-1', receiptId: 'receipt-1', uuid, tiangongCliRoot: toolRoot, reader: () => value });
  const finalize = () => finalizeHybridSearchReceipt({ stateDir, cwd, taskId: 'task-1', receiptId: 'receipt-1', decisionsPath });
  return { root, stateDir, cwd, toolRoot, state, options, directory, search, direct, decisionsPath, decision, finalize };
}

for (const [name, change, expected] of [
  ['blank query', { query: '  ' }, 'GOAL_HYBRID_SEARCH_QUERY_INVALID'],
  ['absent query', { query: undefined }, 'GOAL_HYBRID_SEARCH_QUERY_INVALID'],
  ['fractional limit', { limit: 1.5 }, 'GOAL_HYBRID_SEARCH_QUERY_INVALID'],
  ['zero limit', { limit: 0 }, 'GOAL_HYBRID_SEARCH_QUERY_INVALID'],
  ['oversized limit', { limit: 101 }, 'GOAL_HYBRID_SEARCH_QUERY_INVALID'],
  ['nonfinite limit', { limit: Number.NaN }, 'GOAL_HYBRID_SEARCH_QUERY_INVALID'],
  ['unknown flow type', { flowType: 'other' }, 'GOAL_HYBRID_SEARCH_QUERY_INVALID'],
  ['unsafe receipt identity', { randomId: () => '../other' }, 'GOAL_HYBRID_SEARCH_RECEIPT_INVALID'],
  ['absent task', { taskId: 'task-missing' }, 'GOAL_TASK_NOT_FOUND'],
] as const) test(`UUID search refuses ${name} before calling an authenticated tool`, t => {
  const f = fixture(t); let called = false;
  assert.throws(() => runHybridSearchWithReceipt({ ...f.options, ...change, runner: () => { called = true; return { status: 0, stdout: '[]' }; } }), code(expected));
  assert.equal(called, false); assert.equal(existsSync(f.directory), false);
});

test('UUID search cannot execute from another worktree or an unbound task', t => {
  const f = fixture(t);
  assert.throws(() => runHybridSearchWithReceipt({ ...f.options, cwd: f.root }), code('GOAL_HYBRID_SEARCH_WORKTREE_MISMATCH'));
  f.state.tasks[0]!.worktree_path = ''; writeFileSync(path.join(f.stateDir, 'state.json'), JSON.stringify(f.state));
  assert.throws(() => runHybridSearchWithReceipt(f.options), code('GOAL_HYBRID_SEARCH_WORKTREE_MISMATCH'));
});
for (const status of [null, 23, Number.NaN]) test(`failed UUID runner status ${String(status)} retains only redacted failure evidence`, t => {
  const f = fixture(t), secret = 'owned-fixture-secret-never-persist';
  assert.throws(() => runHybridSearchWithReceipt({ ...f.options, runner: () => ({ status, stdout: secret, stderr: secret }) }), code('GOAL_HYBRID_SEARCH_FAILED'));
  assert.deepEqual(readdirSync(f.directory), ['receipt-1.search.json']);
  const bytes = readFileSync(path.join(f.directory, 'receipt-1.search.json'), 'utf8'), receipt = object(JSON.parse(bytes) as unknown);
  assert.equal(receipt.status, 'failed'); assert.equal(receipt.exit_code, status === 23 ? 23 : null); assert.ok(!bytes.includes(secret));
  writeFileSync(f.decisionsPath, '[]'); assert.throws(f.finalize, code('GOAL_HYBRID_SEARCH_RECEIPT_INVALID'));
});
test('null runner results and invalid JSON cannot fabricate a successful receipt or leave request credentials', t => {
  const f = fixture(t);
  assert.throws(() => runHybridSearchWithReceipt({ ...f.options, runner: () => null }), code('GOAL_HYBRID_SEARCH_FAILED'));
  for (const [id, stdout] of [['invalid-json', '{'], ['absent-json', undefined]] as const) {
    assert.throws(() => runHybridSearchWithReceipt({ ...f.options, randomId: () => id, runner: () => ({ status: 0, stdout }) }), code('GOAL_HYBRID_SEARCH_RESULT_INVALID'));
    assert.equal(existsSync(path.join(f.directory, id + '.request.json')), false);
    assert.equal(existsSync(path.join(f.directory, id + '.search.json')), false);
  }
});
test('missing tool configuration fails explicitly rather than dispatching an alternate search', t => {
  const f = fixture(t); assert.throws(() => runHybridSearchWithReceipt({ ...f.options, toolConfig: {} }), code('GOAL_UUID_INFRASTRUCTURE_UNAVAILABLE'));
});

for (const actual of [{ uuid, state_code: 200 }, { uuid: '22222222-2222-4222-8222-222222222222', state_code: 100 }]) test(`direct read must return both the requested candidate and public state: ${JSON.stringify(actual)}`, t => {
  const f = fixture(t); f.search(); assert.throws(() => f.direct(actual), code('GOAL_UUID_DIRECT_READ_FAILED'));
  assert.equal(readdirSync(f.directory).some(name => name.endsWith('.direct.json')), false);
});
test('direct reads reject absent receipts and candidates outside the actual search result', t => {
  const f = fixture(t); assert.throws(() => f.direct(), code('GOAL_HYBRID_SEARCH_RECEIPT_MISSING'));
  f.search(); assert.throws(() => recordHybridCandidateDirectRead({ stateDir: f.stateDir, cwd: f.cwd, taskId: 'task-1', receiptId: 'receipt-1', uuid: null }), code('GOAL_HYBRID_SEARCH_RECEIPT_MISMATCH'));
});

const invalidDecisions: readonly [string, (decision: Record<string, unknown>) => unknown][] = [
  ['non-array document', () => ({})], ['null entry', () => [null]], ['missing UUID', d => { delete d.uuid; return [d]; }],
  ['unsupported decision', d => [{ ...d, decision: 'maybe' }]], ['blank reason', d => [{ ...d, reason: '  ' }]],
  ['missing comment review', d => { delete d.general_comment_review; return [d]; }],
  ['adoption with rejection code', d => [{ ...d, reason_code: 'semantic_mismatch' }]],
  ['rejection without reason code', d => [{ ...d, decision: 'rejected' }]],
  ['unknown rejection code', d => [{ ...d, decision: 'rejected', reason_code: 'other' }]],
  ['duplicate decision', d => [d, d]], ['missing candidate decision', () => []],
];
for (const [name, value] of invalidDecisions) test(`finalization rejects ${name} without creating a decisions receipt`, t => {
  const f = fixture(t); f.search(); f.direct(); writeFileSync(f.decisionsPath, JSON.stringify(value(f.decision)));
  assert.throws(f.finalize, error => { assert.ok(error instanceof Error); if (error instanceof TypeError) assert.match(error.message, /object|record|mapping/iu); else assert.equal(object(error).code, 'GOAL_HYBRID_SEARCH_DECISIONS_INVALID'); return true; });
  assert.equal(existsSync(path.join(f.directory, 'receipt-1.decisions.json')), false);
});
test('finalization requires an actual direct read and immutable legacy replay preserves its original bytes', t => {
  const f = fixture(t); f.search(); writeFileSync(f.decisionsPath, JSON.stringify([f.decision]));
  assert.throws(f.finalize, code('GOAL_UUID_DIRECT_READ_RECEIPT_MISSING'));
  f.direct({ uuid, state_code: 100 }); assert.throws(f.finalize, code('GOAL_UUID_DIRECT_READ_RECEIPT_INVALID'));
  const directPath = path.join(f.directory, `receipt-1.${uuid}.direct.json`); rmSync(directPath); f.direct();
  const result = f.finalize(), filename = path.join(f.directory, 'receipt-1.decisions.json'), bytes = readFileSync(filename);
  assert.deepEqual(f.finalize(), result); assert.deepEqual(readFileSync(filename), bytes);
  writeFileSync(f.decisionsPath, JSON.stringify([{ ...f.decision, reason: 'A later different decision.' }]));
  assert.throws(f.finalize, code('GOAL_HYBRID_SEARCH_DECISIONS_CONFLICT')); assert.deepEqual(readFileSync(filename), bytes);
});
for (const entry of [null, {}, { uuid }, { uuid: 'bad', hybrid_search_receipt_id: 'receipt' }, { uuid, hybrid_search_receipt_id: '../outside' }]) test(`invalid common UUID evidence is not reusable: ${JSON.stringify(entry)}`, t => {
  const f = fixture(t); assert.equal(isReusableCommonUuidAudit({ stateDir: f.stateDir, entry }), false);
});
