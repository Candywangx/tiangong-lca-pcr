import test, { type TestContext } from 'node:test';
import assert from 'node:assert/strict';
import { spawnSync } from 'node:child_process';
import { createHash } from 'node:crypto';
import { mkdirSync, mkdtempSync, readdirSync, readFileSync, realpathSync, rmSync, writeFileSync } from 'node:fs';
import { tmpdir } from 'node:os';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { renderYaml } from '../../packages/pcr-core/src/yaml-lite.ts';
import { GoalEventStore } from '../goal-harness/event-store.ts';
import { trialAssignmentEvent } from '../goal-harness/model-trial.ts';
import { record, records, type GoalTask } from '../goal-harness/domain.ts';

const root = fileURLToPath(new URL('../../', import.meta.url));
const trialCli = fileURLToPath(new URL('./goal-model-trial.ts', import.meta.url));
const uuidCli = fileURLToPath(new URL('./goal-uuid-search.ts', import.meta.url));
const scaffoldCli = fileURLToPath(new URL('../scripts/scaffold-leaf-pcrs.ts', import.meta.url));
const sentinel = 'fixture-private-marker-do-not-serialize';
function run(script: string, args: string[], cwd: string) {
  const result = spawnSync(process.execPath, [script, ...args], { cwd, encoding: 'utf8', timeout: 30_000, maxBuffer: 2 * 1024 * 1024 });
  assert.equal(result.error, undefined);
  assert.equal(result.signal, null);
  return result;
}
function fileTree(directory: string): Record<string, string> {
  const entries: Record<string, string> = {};
  for (const entry of readdirSync(directory, { recursive: true, withFileTypes: true })) {
    const absolute = path.join(entry.parentPath, entry.name);
    const relative = path.relative(directory, absolute).split(path.sep).join('/');
    entries[relative] = entry.isDirectory() ? 'directory' : createHash('sha256').update(readFileSync(absolute)).digest('hex');
  }
  return entries;
}
function fixture(t: TestContext) {
  const base = mkdtempSync(path.join(realpathSync(tmpdir()), 'pcr-maintenance-cli-'));
  t.after(() => rmSync(base, { recursive: true, force: true }));
  const project = path.join(base, 'project');
  const target = path.join(project, 'library/pcrs/fixture');
  mkdirSync(target, { recursive: true });
  const policy = path.join(project, 'policy.txt'); writeFileSync(policy, 'Bounded synthetic fixture only.\n');
  writeFileSync(path.join(project, 'package.json'), '{"scripts":{}}\n');
  const config = path.join(project, 'goal.yaml');
  writeFileSync(config, renderYaml({ schema_version: 1, goal_id: 'maintenance-fixture', project_root: project,
    target_category_path: target, classification_system: 'cpc', classification_version: '3.0', cpc_selector: { mode: 'target_category', value: 'all' },
    policy_prompt_path: policy, artifact_store: path.join(base, 'viewer-store'), tools: { codex: path.join(base, sentinel + '-absent-executable') } }));
  const stateDir = path.join(project, 'library/.pcr-builder-state/goals/maintenance-fixture');
  return { base, project, target, config, stateDir };
}

test('model-trial help is a successful no-write entrypoint without configuration or authentication', t => {
  const f = fixture(t); const before = fileTree(f.base);
  for (const args of [[], ['--help'], ['-h'], ['register', '--help'], ['report', '-h']]) {
    const result = run(trialCli, args, f.project);
    assert.equal(result.status, 0, result.stderr);
    assert.equal(result.stderr, '');
    assert.match(result.stdout, /register --config/);
    assert.match(result.stdout, /report --config/);
    assert.deepEqual(fileTree(f.base), before);
  }
});

test('model-trial invalid arguments/config fail with redacted stable JSON and no source/state writes', t => {
  const f = fixture(t); const before = fileTree(f.base);
  const absent = path.join(f.base, sentinel + '.yaml');
  for (const [args, code] of [
    [['unknown'], 'GOAL_TRIAL_ARGUMENT_INVALID'],
    [['report'], 'GOAL_TRIAL_ARGUMENT_INVALID'],
    [['report', '--config'], 'GOAL_TRIAL_ARGUMENT_INVALID'],
    [['report', '--config', '--trial', 'trial-fixture'], 'GOAL_TRIAL_ARGUMENT_INVALID'],
    [['report', '--config', absent, '--trial', 'trial-fixture'], 'GOAL_CONFIG_UNREADABLE'],
  ] as const) {
    const result = run(trialCli, [...args], f.project);
    assert.equal(result.status, 1);
    assert.equal(result.stdout, '');
    const error = record(JSON.parse(result.stderr) as unknown);
    assert.equal(error.ok, false); assert.equal(error.code, code);
    assert.deepEqual(Object.keys(error).sort(), ['code', 'next_action', 'ok']);
    assert.equal(result.stderr.includes(sentinel), false);
    assert.deepEqual(fileTree(f.base), before);
  }
});

test('model-trial registration refuses a failed local preflight without exposing child diagnostics or dispatching work', t => {
  const f = fixture(t); const before = fileTree(f.project);
  const plan = path.join(f.base, 'plan.json'); writeFileSync(plan, JSON.stringify({ trial_id:'trial-fixture', assignments:[], note:sentinel }));
  const result = run(trialCli, ['register','--config',f.config,'--plan',plan,'--dry-run'], f.project);
  assert.equal(result.status,1); assert.equal(result.stdout,'');
  const error = record(JSON.parse(result.stderr) as unknown);
  assert.equal(error.code,'GOAL_TRIAL_PREFLIGHT_FAILED');
  assert.equal(result.stderr.includes(sentinel),false);
  assert.deepEqual(Object.keys(error).sort(),['code','next_action','ok']);
  assert.deepEqual(fileTree(f.project),before);
});

test('model-trial report reads the real persisted event projection without registering or dispatching work', { skip: process.platform === 'win32' ? 'Goal lock directory fsync requires the qualified POSIX authoring runtime' : false }, t => {
  const f = fixture(t);
  const tasks: GoalTask[] = Array.from({ length: 6 }, (_, index) => ({ id: `task-${index}`, cpc_code: String(41111 + index),
    pcr_path: `library/pcrs/fixture/product-${index}`, state: 'queued', queue_action: 'promote_legacy', queue_order: index }));
  const assignments = tasks.map((task, index) => ({ task_id: task.id, pair_id: `pair-${Math.floor(index / 2)}`,
    model: index % 2 ? 'gpt-5.6-sol' : 'gpt-5.6-terra', difficulty: 'medium', rationale: 'Same declared action with independent PCR records.' }));
  const store = new GoalEventStore({ stateDir: f.stateDir }); store.initialize({ goal_id: 'maintenance-fixture', tasks });
  store.append(trialAssignmentEvent({ state: store.rebuild(), trialId: 'trial-fixture', assignments,
    controls: { harness_sha256: 'a'.repeat(64), policy_sha256: 'b'.repeat(64), config_sha256: 'c'.repeat(64), cache_sha256: 'd'.repeat(64) } }));
  const before = fileTree(f.base);
  const result = run(trialCli, ['report', '--config', f.config, '--trial', 'trial-fixture'], f.project);
  assert.equal(result.status, 0, result.stderr); assert.equal(result.stderr, '');
  const output = record(JSON.parse(result.stdout) as unknown); assert.equal(output.ok, true);
  const report = record(output.result); assert.equal(report.trial_id, 'trial-fixture');
  assert.equal(report.sample_count, 6); assert.equal(report.landed, 0); assert.equal(report.checkpoint, 'in_progress');
  const samples = records(report.samples); assert.equal(samples.length, 6);
  assert.deepEqual(samples.map(sample => sample.state), tasks.map(task => task.state));
  assert.ok(samples.every(sample => sample.tokens === 'unavailable' && sample.verified_cost === 'unavailable' && sample.semantic_review === 'pending'));
  assert.equal(store.rebuild().last_event_sequence, 1);
  assert.deepEqual(fileTree(f.base), before, 'Report leaves no lease, new event, receipt or modified state bytes');
  const missingTrial = run(trialCli,['report','--config',f.config],f.project);
  assert.equal(missingTrial.status,1); assert.equal(record(JSON.parse(missingTrial.stderr) as unknown).code,'GOAL_TRIAL_ARGUMENT_INVALID');
  assert.deepEqual(fileTree(f.base),before);
});

test('UUID-search help and parser failures require no Goal state or tool execution', t => {
  const f = fixture(t); const before = fileTree(f.base);
  for (const args of [[], ['--help'], ['-h'], ['query', '--help']]) {
    const result = run(uuidCli, args, f.project); assert.equal(result.status, 0); assert.equal(result.stderr, '');
    assert.match(result.stdout, /query --config/); assert.match(result.stdout, /direct-read --config/); assert.match(result.stdout, /finalize --config/);
    assert.deepEqual(fileTree(f.base), before);
  }
  for (const [args, code] of [
    [['unknown'], 'GOAL_UUID_SEARCH_COMMAND_UNKNOWN'],
    [['query', '--unknown'], 'GOAL_OPTION_UNKNOWN'],
    [['query', '--config'], 'GOAL_OPTION_VALUE_REQUIRED'],
    [['query', '--config', '--task', 'task'], 'GOAL_OPTION_VALUE_REQUIRED'],
    [['query', '--config', f.config], 'GOAL_OPTION_VALUE_REQUIRED'],
    [['query', '--config', f.config, '--task', 'task'], 'GOAL_OPTION_VALUE_REQUIRED'],
    [['direct-read', '--config', f.config, '--task', 'task'], 'GOAL_OPTION_VALUE_REQUIRED'],
    [['finalize', '--config', f.config, '--task', 'task', '--receipt', 'receipt'], 'GOAL_OPTION_VALUE_REQUIRED'],
  ] as const) {
    const result = run(uuidCli, [...args], f.project); assert.equal(result.status, 2); assert.equal(result.stdout, '');
    const envelope = record(JSON.parse(result.stderr) as unknown); assert.equal(envelope.ok, false); assert.equal(record(envelope.error).code, code);
    assert.deepEqual(fileTree(f.base), before);
  }
});

test('UUID-search rejects invalid bounded queries and missing direct-read receipts before creating artifacts', t => {
  const f = fixture(t);
  new GoalEventStore({ stateDir: f.stateDir }).initialize({ goal_id: 'maintenance-fixture', tasks: [{ id: 'task', state: 'authoring', worktree_path: f.project }] });
  const before = fileTree(f.base);
  const common = ['--config', f.config, '--task', 'task'];
  for (const tail of [['--query', ' '], ['--query', 'wheat', '--limit', '0'], ['--query', 'wheat', '--limit', '101'], ['--query', 'wheat', '--limit', '1.5'], ['--query', 'wheat', '--limit', 'not-a-number'], ['--query', 'wheat', '--flow-type', 'invalid']]) {
    const result = run(uuidCli, ['query', ...common, ...tail], f.project);
    assert.equal(result.status, 2); assert.equal(result.stdout, '');
    assert.equal(record(record(JSON.parse(result.stderr) as unknown).error).code, 'GOAL_HYBRID_SEARCH_QUERY_INVALID');
    assert.deepEqual(fileTree(f.base), before);
  }
  const missing = run(uuidCli, ['direct-read', ...common, '--receipt', 'absent', '--uuid', '00000000-0000-4000-8000-000000000001'], f.project);
  assert.equal(missing.status, 2); assert.equal(missing.stdout, '');
  assert.match(missing.stderr, /GOAL_HYBRID_SEARCH_RECEIPT_MISSING/);
  assert.deepEqual(fileTree(f.base), before);
  const finalize = run(uuidCli,['finalize',...common,'--receipt','absent','--decisions',path.join(f.base,'absent-decisions.json')],f.project);
  assert.equal(finalize.status,2); assert.equal(finalize.stdout,'');
  assert.equal(record(record(JSON.parse(finalize.stderr) as unknown).error).code,'GOAL_HYBRID_SEARCH_RECEIPT_MISSING');
  assert.deepEqual(fileTree(f.base),before);
  const human = run(uuidCli, ['query', '--format', 'human', '--config', f.config, '--task', 'missing', '--query', 'wheat'], f.project);
  assert.equal(human.status, 2); assert.equal(human.stdout, ''); assert.match(human.stderr, /^\[GOAL_TASK_NOT_FOUND\]/);
  assert.deepEqual(fileTree(f.base), before);
});

test('scaffold compatibility wrapper warns and protects accepted-only mappings before mutation', t => {
  const f = fixture(t); const before = fileTree(f.base);
  const help = run(scaffoldCli, ['--help'], f.project);
  assert.equal(help.status, 0); assert.match(help.stderr, /Compatibility warning/); assert.match(help.stdout, /Creates no PCR records/);
  assert.deepEqual(fileTree(f.base), before);
  const noOptIn = run(scaffoldCli, ['--root', f.project, '--source', path.join(root, 'builder/fixtures/cpc-structure.sample.csv')], f.project);
  assert.equal(noOptIn.status, 1); assert.match(noOptIn.stderr, /requires --legacy-scaffolds/);
  assert.deepEqual(fileTree(f.base), before);
  const mapping = path.join(f.project, 'classifications/mappings/cpc-3.0-to-pcr.yaml'); mkdirSync(path.dirname(mapping), { recursive: true });
  writeFileSync(mapping, 'schema_version: 2\nclassification_system: CPC\nclassification_version: "3.0"\nstatus: current\nmappings: []\n');
  const protectedBefore = fileTree(f.base);
  const protectedResult = run(scaffoldCli, ['--root', f.project, '--source', path.join(root, 'builder/fixtures/cpc-structure.sample.csv'), '--legacy-scaffolds'], f.project);
  assert.equal(protectedResult.status, 1); assert.match(protectedResult.stderr, /Compatibility warning/); assert.match(protectedResult.stderr, /accepted-only/);
  assert.deepEqual(fileTree(f.base), protectedBefore, 'Current mapping, classification artifacts and PCR source remain byte-exact');
});
