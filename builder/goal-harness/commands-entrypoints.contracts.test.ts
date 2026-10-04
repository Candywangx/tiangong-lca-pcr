import assert from 'node:assert/strict';
import { execFileSync } from 'node:child_process';
import { chmodSync, existsSync, mkdirSync, mkdtempSync, readFileSync, readdirSync, realpathSync, rmSync, symlinkSync, writeFileSync } from 'node:fs';
import { stripTypeScriptTypes } from 'node:module';
import { tmpdir } from 'node:os';
import path from 'node:path';
import { pathToFileURL } from 'node:url';
import test, { type TestContext } from 'node:test';
import { renderYaml } from '../../packages/pcr-core/src/yaml-lite.ts';
import { runGoalCommand, doctorCommand, planCommand, startCommand, integrateCommand, landCommand, statusCommand, stopCommand, viewerPublishCommand } from './commands.ts';
import { GoalEventStore } from './event-store.ts';
import { loadGoalConfig } from './config.ts';
import { goalStateDir } from './paths.ts';
import { field, record, records, errorCode, type GoalTask } from './domain.ts';
import { commitRepositoryValidation, listCommittedRepositoryValidations, reserveRepositoryCandidate } from './repository-coordinator.ts';
import { createPublisherFixture } from './viewer-test-fixture.ts';
import { isApprovedRuntimePath } from './runtime-baseline.ts';
import { createSyntheticBaseline } from './synthetic-baseline.ts';

const linux = { skip: process.platform !== 'linux' ? 'Goal descriptor-backed command lifecycle requires Linux' : false };
const rootSource = path.resolve('.');
function git(root: string, args: string[], input?: string): string { return execFileSync('git', args, { cwd: root, encoding: 'utf8', input, stdio: [input === undefined ? 'ignore' : 'pipe', 'pipe', 'pipe'] }).trim(); }
function put(root: string, relative: string, content: string): string { const target = path.join(root, relative); mkdirSync(path.dirname(target), { recursive: true }); writeFileSync(target, content); return target; }
function rejected(code: string): (error: unknown) => boolean { return error => { assert.equal(errorCode(error), code); return true; }; }

function tools(t: TestContext, base: string, project: string) {
  const bin = path.join(base, 'tools'); mkdirSync(bin);
  const authored = readFileSync(new URL('./fixtures/commands-fake-tool.ts', import.meta.url), 'utf8');
  const codex = put(bin, 'codex.ts', authored); chmodSync(codex, 0o755);
  symlinkSync(codex, path.join(bin, 'corepack')); symlinkSync(codex, path.join(bin, 'paper-search'));
  // External integration paths still name JS/MJS; these are disposable outputs of the TS fixture.
  const generated = stripTypeScriptTypes(authored, { mode: 'strip' });
  const cli = path.join(base, 'external-cli'); const hybrid = path.join(base, 'external-hybrid');
  put(cli, 'package.json', '{"type":"module"}\n'); put(cli, 'bin/tiangong-lca.js', generated);
  put(hybrid, 'package.json', '{"type":"module"}\n'); put(hybrid, 'scripts/run-flow-hybrid-search.mjs', generated);
  const log = path.join(base, 'tool-events.jsonl');
  const previous = new Map(['PATH', 'PCR_ENTRYPOINT_LOG', 'PCR_ENTRYPOINT_PROJECT', 'PCR_ENTRYPOINT_MODE'].map(key => [key, process.env[key]]));
  process.env.PATH = `${bin}${path.delimiter}${process.env.PATH ?? ''}`;
  process.env.PCR_ENTRYPOINT_LOG = log; process.env.PCR_ENTRYPOINT_PROJECT = project; process.env.PCR_ENTRYPOINT_MODE = 'normal';
  t.after(() => {
    if (existsSync(log)) {
      for (const entry of readFileSync(log, 'utf8').trim().split('\n').filter(Boolean).map(line => record(JSON.parse(line) as unknown))) {
        if (entry.kind !== 'invocation' || !Array.isArray(entry.args) || !entry.args.includes('--listen')) continue;
        assert.ok(typeof entry.pid === 'number' && Number.isSafeInteger(entry.pid) && entry.pid > 0);
        // Only the daemon launched by this exclusive fake executable is recorded here.
        try { process.kill(entry.pid, 'SIGTERM'); } catch (error) { if (errorCode(error) !== 'ESRCH') throw error; }
      }
    }
    for (const [key, value] of previous) { if (value === undefined) delete process.env[key]; else process.env[key] = value; }
    rmSync(base, { recursive: true, force: true });
  });
  return { codex, cli, hybrid, paper: path.join(bin, 'paper-search'), log };
}

function fixture(t: TestContext, count = 1) {
  const base = mkdtempSync(path.join(realpathSync(tmpdir()), 'goal-command-boundary-'));
  const root = path.join(base, 'project'); mkdirSync(root);
  const tool = tools(t, base, root);
  git(root, ['init', '-q']); git(root, ['config', 'user.name', 'Owned Goal Fixture']); git(root, ['config', 'user.email', 'fixture@example.invalid']);
  put(root, '.gitignore', 'node_modules/\n.worktrees/\nlibrary/.pcr-builder-state/\n');
  // Even an empty selected category belongs to a repository with tracked library
  // metadata. Git does not track the empty directory itself; add -u correctly
  // refuses a declared tracked root with no known files on current Git versions.
  put(root, 'library/.gitkeep', 'Owned fixture library metadata; no methodology records are implied.\n');
  put(root, 'policy.txt', 'Fixture scope policy; do not widen author or landing authority.\n');
  put(root, 'package.json', JSON.stringify({ scripts: Object.fromEntries(['validate', 'pcr:sync-structured', 'aliases:build', 'aliases:check', 'catalog:build', 'catalog:check', 'viewer:build', 'goal:viewer-publish', 'goal:viewer-recover', 'tiangong-pcr'].map(name => [name, 'fixture command'])) }));
  symlinkSync(path.join(rootSource, 'node_modules'), path.join(root, 'node_modules'), 'dir');
  const target = path.join(root, 'library/pcrs/metal-products-machinery-and-equipment');
  mkdirSync(target, { recursive: true });
  const entries = Array.from({ length: count }, (_, i) => {
    const code = String(41111 + i); const relative = `library/pcrs/metal-products-machinery-and-equipment/basic-metals/product-${i}`;
    put(root, `${relative}/manifest.yaml`, renderYaml({ schema_version: 1, id: `pcr.fixture.basic-metals.product-${i}`, title: { 'en-US': `Product ${i}`, 'zh-CN': `产品 ${i}` }, status: 'scaffold', content_maturity: 'empty_scaffold', classification_refs: [{ system: 'CPC', version: '3.0', code }] }));
    return { code, label: `Product ${i}`, path_codes: ['4', '41', code], path_titles: ['Metal products, machinery and equipment', 'Basic metals', `Product ${i}`], coverage_status: 'unmapped', mapping: null, legacy_reference: null };
  });
  put(root, 'classifications/indexes/cpc-3.0-coverage.json', JSON.stringify({ schema_version: 1, classification_system: 'cpc', classification_version: '3.0', entries }));
  const document = { schema_version: 1, goal_id: 'entrypoint-fixture', project_root: root, target_category_path: target, classification_system: 'cpc', classification_version: '3.0', cpc_selector: { mode: 'target_category', value: 'all' }, policy_prompt_path: path.join(root, 'policy.txt'), artifact_store: path.join(base, 'viewer-store'), baseline: { tracked_roots: ['library', 'classifications'], untracked_allowlist: [] }, tools: { codex: tool.codex } };
  const configPath = put(root, 'goal.yaml', renderYaml(document));
  git(root, ['add', '.']); git(root, ['commit', '-qm', 'isolated command fixture']);
  const stateDir = goalStateDir(loadGoalConfig({ configPath }));
  return { base, root, target, tool, document, configPath, stateDir, head: git(root, ['rev-parse', 'HEAD']) };
}
function events(f: ReturnType<typeof fixture>): string { return existsSync(path.join(f.stateDir, 'events.jsonl')) ? readFileSync(path.join(f.stateDir, 'events.jsonl'), 'utf8') : ''; }
function toolEvents(f: ReturnType<typeof fixture>) { return existsSync(f.tool.log) ? readFileSync(f.tool.log, 'utf8').trim().split('\n').filter(Boolean).map(line => record(JSON.parse(line) as unknown)) : []; }
function check(result: unknown, name: string) { const item = records(field(result, 'checks')).find(item => item.name === name); assert.ok(item, `Missing diagnostic ${name}`); return item; }

test('an empty selected category retains tracked library scope without widening the synthetic baseline or changing the real index', t => {
  const f = fixture(t, 0);
  assert.deepEqual(readdirSync(f.target), []);
  assert.deepEqual(records(field(record(JSON.parse(readFileSync(path.join(f.root, 'classifications/indexes/cpc-3.0-coverage.json'), 'utf8')) as unknown), 'entries')), []);
  assert.equal(git(f.root, ['ls-files', '--', 'library']), 'library/.gitkeep');
  const policyBefore = git(f.root, ['show', 'HEAD:policy.txt']);
  put(f.root, 'library/.gitkeep', 'Dirty metadata inside the explicitly tracked library root.\n');
  put(f.root, 'policy.txt', 'Operator staged change outside the declared tracked roots.\n');
  git(f.root, ['add', '--', 'policy.txt']);
  const status = git(f.root, ['status', '--porcelain', '--untracked-files=all']);
  const before = { head: git(f.root, ['rev-parse', 'HEAD']), index: readFileSync(path.join(f.root, '.git/index')), cached: git(f.root, ['diff', '--cached', '--name-only']) };
  const baseline = createSyntheticBaseline({ projectRoot: f.root, goalId: f.document.goal_id, trackedRoots: f.document.baseline.tracked_roots, untrackedAllowlist: [], stateDir: f.stateDir, dryRun: true });
  assert.deepEqual(baseline.staged_paths, ['library/.gitkeep']);
  assert.equal(git(f.root, ['show', `${baseline.tree}:library/.gitkeep`]), 'Dirty metadata inside the explicitly tracked library root.');
  assert.equal(git(f.root, ['show', `${baseline.tree}:policy.txt`]), policyBefore);
  assert.deepEqual(readFileSync(path.join(f.root, '.git/index')), before.index);
  assert.equal(git(f.root, ['rev-parse', 'HEAD']), before.head); assert.equal(git(f.root, ['diff', '--cached', '--name-only']), before.cached);
  assert.equal(git(f.root, ['status', '--porcelain', '--untracked-files=all']), status);
  assert.deepEqual(readdirSync(f.target), []); assert.equal(baseline.commit, null);
});

async function cleanRuntime(f: ReturnType<typeof fixture>) {
  // Working-source tests must not relax the real startup cleanliness guard.
  // A clean qualification checkout can exercise its own committed runtime directly.
  const dirty = [...git(rootSource, ['diff', '--name-only', 'HEAD', '--']).split('\n'), ...git(rootSource, ['ls-files', '--others', '--exclude-standard']).split('\n')].filter(isApprovedRuntimePath);
  const runtime = dirty.length === 0 ? rootSource : path.join(f.base, 'clean-runtime');
  if (runtime !== rootSource) {
    execFileSync('git', ['clone', '--shared', '--no-hardlinks', rootSource, runtime], { stdio: 'ignore' });
    symlinkSync(path.join(rootSource, 'node_modules'), path.join(runtime, 'node_modules'), 'dir');
  }
  // The fixture goal must be able to verify the exact source commit's objects.
  // This changes only its disposable object lookup, never the source repository.
  const objectStore = path.join(git(runtime, ['rev-parse', '--path-format=absolute', '--git-common-dir']), 'objects');
  put(f.root, '.git/objects/info/alternates', objectStore + '\n');
  const value: unknown = await import(pathToFileURL(path.join(runtime, 'builder/goal-harness/commands.ts')).href);
  const start = field(value, 'startCommand'); assert.equal(typeof start, 'function');
  if (typeof start !== 'function') throw new Error('Clean runtime lacks startCommand');
  return { runtime, start: async (options: { configPath: string; resume?: boolean }) => { const output: unknown = await Reflect.apply(start, undefined, [options]); return record(output); } };
}

test('entrypoint router reports stable unknown and missing-config errors', async () => {
  for (const command of [undefined, 'unrecognized']) await assert.rejects(runGoalCommand(command, {}), rejected('GOAL_COMMAND_UNKNOWN'));
  for (const command of ['doctor', 'plan', 'status', 'stop', 'start', 'resume', 'integrate', 'land', 'viewer-publish', 'viewer-recover', 'uuid-audit']) {
    await assert.rejects(runGoalCommand(command, {}), rejected('GOAL_CONFIG_REQUIRED'));
  }
});

test('doctor checks real subprocesses and visible project binding without planning or publishing', linux, async t => {
  const f = fixture(t); const result = await doctorCommand({ configPath: f.configPath });
  assert.equal(result.ok, true); assert.equal(check(result, 'codex_project_binding').ok, true); assert.equal(check(result, 'viewer_artifact_store').ok, true);
  assert.equal(check(result, 'node_module:ajv').ok, true);
  assert.equal(existsSync(path.join(f.stateDir, 'initial-state.json')), false);
  assert.deepEqual(listCommittedRepositoryValidations({ projectRoot: f.root }), []);
  assert.equal(git(f.root, ['rev-parse', 'HEAD']), f.head);
  assert.ok(toolEvents(f).some(entry => entry.kind === 'request' && entry.method === 'project/list'));
  assert.match(result.next_action, /goal:plan/);
});

for (const mode of ['version-error', 'app-server-error', 'no-project'] as const) {
  test(`doctor ${mode} is a diagnostic failure rather than scheduling authority`, linux, async t => {
    const f = fixture(t); process.env.PCR_ENTRYPOINT_MODE = mode;
    const result = await doctorCommand({ configPath: f.configPath }); assert.equal(result.ok, false);
    assert.equal(check(result, mode === 'version-error' ? 'codex' : mode === 'no-project' ? 'codex_project_binding' : 'codex_app_server').ok, false);
    assert.equal(existsSync(path.join(f.stateDir, 'initial-state.json')), false); assert.match(result.next_action, /Resolve failed doctor checks/);
  });
}

test('doctor optional tools perform actual authenticated fixture reads and redact credentials', linux, async t => {
  const f = fixture(t);
  writeFileSync(f.configPath, renderYaml({ ...f.document, tools: { ...f.document.tools, tiangong_cli_root: f.tool.cli, flow_hybrid_search_root: f.tool.hybrid, paper_search: f.tool.paper } }));
  const result = await doctorCommand({ configPath: f.configPath }); assert.equal(result.ok, true);
  const authenticated = check(result, 'flow_hybrid_search_authenticated_preflight'); assert.equal(authenticated.ok, true);
  assert.equal(field(authenticated.detail, 'state_code_100_read'), true); assert.equal(field(authenticated.detail, 'credentials_redacted'), true);
  assert.equal(existsSync(path.join(f.stateDir, 'initial-state.json')), false);
  assert.ok(toolEvents(f).some(entry => Array.isArray(entry.args) && entry.args.includes('doctor-auth')));
});

test('doctor missing optional executable and dependency report failed checks without changing source', linux, async t => {
  const f = fixture(t); rmSync(path.join(f.root, 'node_modules'));
  writeFileSync(f.configPath, renderYaml({ ...f.document, tools: { ...f.document.tools, paper_search: path.join(f.base, 'absent-paper-tool') } }));
  const result = await doctorCommand({ configPath: f.configPath }); assert.equal(result.ok, false);
  assert.equal(check(result, 'node_module:ajv').ok, false); assert.equal(check(result, 'paper_search_path').ok, false); assert.equal(check(result, 'paper_search').ok, false);
  assert.equal(existsSync(path.join(f.stateDir, 'initial-state.json')), false);
});

test('start dry-run creates a durable bounded plan once but dispatches no author or runtime baseline', linux, async t => {
  const f = fixture(t); const result = await startCommand({ configPath: f.configPath, slots: 1, dryRun: true });
  assert.equal(records(result.dispatched).length, 0); assert.equal(field(result, 'runtime_baseline'), null); assert.equal(result.app_server, null);
  assert.equal(field(result, 'would_dispatch') instanceof Array, true);
  assert.ok(existsSync(path.join(f.stateDir, 'initial-state.json')));
  const before = events(f); const state = new GoalEventStore({ stateDir: f.stateDir }).rebuild(); assert.equal(state.tasks.length, 1); assert.equal(state.tasks[0]?.state, 'queued');
  const repeated = await startCommand({ configPath: f.configPath, dryRun: true }); assert.deepEqual(field(repeated, 'would_dispatch'), field(result, 'would_dispatch'));
  assert.equal(events(f), before); assert.equal(git(f.root, ['rev-parse', 'HEAD']), f.head);
  assert.equal(toolEvents(f).some(entry => entry.kind === 'request'), false);
  assert.equal(existsSync(path.join(f.stateDir, 'runtime-baseline.json')), false);
});

test('resume requires an existing plan and stopped dry-run previews do not append resume events', linux, async t => {
  const f = fixture(t);
  await assert.rejects(startCommand({ configPath: f.configPath, resume: true, dryRun: true }), rejected('GOAL_NOT_PLANNED'));
  planCommand({ configPath: f.configPath }); stopCommand({ configPath: f.configPath }); const before = events(f);
  await assert.rejects(startCommand({ configPath: f.configPath, dryRun: true }), rejected('GOAL_SCHEDULING_STOPPED'));
  const preview = await startCommand({ configPath: f.configPath, resume: true, dryRun: true });
  assert.deepEqual(field(preview, 'would_dispatch'), [new GoalEventStore({ stateDir: f.stateDir }).rebuild().tasks[0]?.id]);
  assert.equal(events(f), before); assert.equal(statusCommand({ configPath: f.configPath }).state.stopped, true);
});

test('start refuses a failed corepack provision before author dispatch and retains its plan', linux, async t => {
  const f = fixture(t); process.env.PCR_ENTRYPOINT_MODE = 'corepack-error';
  await assert.rejects(startCommand({ configPath: f.configPath, dryRun: true }), rejected('GOAL_COREPACK_SHIM_FAILED'));
  const state = new GoalEventStore({ stateDir: f.stateDir }).rebuild(); assert.equal(state.tasks[0]?.state, 'queued');
  assert.equal(toolEvents(f).some(entry => entry.kind === 'request'), false);
});

test('start installs a verified clean runtime and reuses its owned daemon for an empty bounded queue', linux, async t => {
  const f = fixture(t, 0); const runtime = await cleanRuntime(f);
  writeFileSync(f.configPath, renderYaml({ ...f.document, tools: { ...f.document.tools, tiangong_cli_root: f.tool.cli, flow_hybrid_search_root: f.tool.hybrid } }));
  const first = await runtime.start({ configPath: f.configPath });
  assert.deepEqual(first.dispatched, []); assert.equal(field(first.runtime_baseline, 'source_commit'), git(runtime.runtime, ['rev-parse', 'HEAD']));
  assert.equal(first.codex_project_id, 'fixture-project'); assert.equal(field(first.app_server, 'reused'), false);
  const pid = field(first.app_server, 'pid'); assert.ok(typeof pid === 'number' && pid > 0);
  const before = events(f); const second = await runtime.start({ configPath: f.configPath });
  assert.equal(field(second.app_server, 'pid'), pid); assert.equal(field(second.app_server, 'reused'), true); assert.deepEqual(second.dispatched, []);
  assert.equal(events(f), before); assert.equal(new GoalEventStore({ stateDir: f.stateDir }).rebuild().tasks.length, 0);
  stopCommand({ configPath: f.configPath }); const stoppedEvents = events(f);
  const resumed = await runtime.start({ configPath: f.configPath, resume: true });
  assert.deepEqual(resumed.dispatched, []); assert.equal(field(resumed.app_server, 'pid'), pid);
  assert.equal(new GoalEventStore({ stateDir: f.stateDir }).rebuild().stopped, false);
  assert.notEqual(events(f), stoppedEvents, 'Real resume records the scheduling transition; preview did not.');
  assert.deepEqual(field(field(resumed, 'harvest'), 'valid_results'), []);
  assert.equal(toolEvents(f).some(entry => entry.method === 'thread/start'), false);
  assert.equal(git(f.root, ['rev-parse', 'HEAD']), f.head);
});

test('start without a visible project fails before dispatch while retaining runtime and daemon identities', linux, async t => {
  const f = fixture(t, 0); const runtime = await cleanRuntime(f); process.env.PCR_ENTRYPOINT_MODE = 'no-project';
  await assert.rejects(runtime.start({ configPath: f.configPath }), rejected('GOAL_CODEX_PROJECT_UNAVAILABLE'));
  const state = new GoalEventStore({ stateDir: f.stateDir }).rebuild(); assert.equal(state.tasks.length, 0); assert.ok(state.runtime_baseline);
  assert.ok(existsSync(path.join(f.stateDir, 'app-server/daemon.json')));
  assert.equal(toolEvents(f).some(entry => entry.method === 'thread/start'), false);
});

for (const operation of [integrateCommand, landCommand]) {
  test(`${operation.name} refuses unplanned state before creating receipts`, linux, t => {
    const f = fixture(t); assert.throws(() => operation({ configPath: f.configPath }), rejected('GOAL_NOT_PLANNED'));
    assert.equal(existsSync(f.stateDir), false); assert.deepEqual(listCommittedRepositoryValidations({ projectRoot: f.root }), []);
  });
}

test('integration and landing refuse unready planned state without rewriting event history', linux, t => {
  const f = fixture(t); planCommand({ configPath: f.configPath }); const before = events(f);
  assert.throws(() => integrateCommand({ configPath: f.configPath, dryRun: true }), rejected('GOAL_INTEGRATION_NOT_READY'));
  assert.throws(() => landCommand({ configPath: f.configPath, dryRun: true }), rejected('GOAL_LAND_NOT_READY'));
  assert.equal(events(f), before); assert.deepEqual(listCommittedRepositoryValidations({ projectRoot: f.root }), []);
});

test('integration dry-run exposes the actual six-result command plan without committing a validation receipt', linux, t => {
  const f = fixture(t, 6); const planned = planCommand({ configPath: f.configPath });
  assert.ok(planned.state);
  const tasks: GoalTask[] = planned.state.tasks.map(task => ({ ...task, state: 'integration_pending', author_commit: f.head }));
  const store = new GoalEventStore({ stateDir: f.stateDir });
  for (const task of tasks) store.append({ event_id: `ready-${task.id}`, type: 'task_replaced', payload: { task } });
  store.append({ event_id: 'snapshot-created', type: 'snapshot_created', payload: { id: 'snapshot-six', goal_id: f.document.goal_id, state: 'integration_pending', task_ids: tasks.map(task => task.id) } });
  const before = events(f); const result = integrateCommand({ configPath: f.configPath, snapshotId: 'snapshot-six', dryRun: true });
  assert.equal(field(result, 'status'), 'dry_run'); assert.equal(records(field(result, 'tasks')).length, 6);
  const commands = records(field(result, 'commands')); assert.ok(commands.length > 6);
  assert.ok(commands.some(command => field(command, 'name') === 'validate'));
  assert.equal(events(f), before); assert.deepEqual(listCommittedRepositoryValidations({ projectRoot: f.root }), []);
  assert.equal(git(f.root, ['rev-parse', 'HEAD']), f.head);
});

test('landing and repeated integration require retained task/receipt consistency even for validated labels', linux, t => {
  const f = fixture(t); planCommand({ configPath: f.configPath }); const store = new GoalEventStore({ stateDir: f.stateDir }); const task = store.rebuild().tasks[0]; assert.ok(task);
  store.append({ event_id: 'label-only', type: 'snapshot_created', payload: { id: 'not-receipted', goal_id: f.document.goal_id, state: 'validated', task_ids: [task.id], integration_commit: f.head } });
  const before = events(f);
  assert.throws(() => integrateCommand({ configPath: f.configPath, snapshotId: 'not-receipted' }), rejected('GOAL_INTEGRATION_FINALIZATION_INCOMPLETE'));
  assert.throws(() => landCommand({ configPath: f.configPath, snapshotId: 'not-receipted', dryRun: true }), rejected('GOAL_LAND_REPOSITORY_IDENTITY_INVALID'));
  assert.equal(events(f), before); assert.deepEqual(listCommittedRepositoryValidations({ projectRoot: f.root }), []);
});

test('public landing uses real retained repository validation and pinned Viewer publication receipts', linux, async t => {
  const base = mkdtempSync(path.join(realpathSync(tmpdir()), 'goal-entrypoint-land-')); t.after(() => rmSync(base, { recursive: true, force: true }));
  const root = createPublisherFixture({ root: path.join(base, 'project'), source: rootSource }); const head = git(root, ['rev-parse', 'HEAD']);
  const policy = put(base, 'policy.txt', 'Owned fixture policy.\n'); const configPath = put(base, 'goal.yaml', renderYaml({ schema_version: 1, goal_id: 'entrypoint-land', project_root: root, target_category_path: path.join(root, 'library/pcrs/agriculture-forestry-and-fishery-products'), classification_system: 'cpc', classification_version: '3.0', cpc_selector: { mode: 'target_category', value: 'all' }, policy_prompt_path: policy, artifact_store: path.join(base, 'viewer-store'), baseline: { tracked_roots: ['library', 'classifications', 'docs'], untracked_allowlist: [] } }));
  const config = loadGoalConfig({ configPath }); const stateDir = goalStateDir(config); const store = new GoalEventStore({ stateDir });
  store.initialize({ goal_id: config.goal_id, baseline: { commit: head }, tasks: [], snapshots: [{ id: 'receipt-backed', goal_id: config.goal_id, task_ids: [], state: 'integrating', worktree_path: root }] });
  const candidate = reserveRepositoryCandidate({ projectRoot: root, goalId: config.goal_id, snapshotId: 'receipt-backed', fallbackHead: head });
  const integrationCommit = git(root, ['commit-tree', git(root, ['rev-parse', `${head}^{tree}`]), '-p', head], 'Owned unchanged-tree validation fixture\n');
  const validation = commitRepositoryValidation({ projectRoot: root, candidateToken: candidate.candidate_token, integrationCommit, goalStateDir: stateDir, snapshotProjection: { id: 'receipt-backed', goal_id: config.goal_id, task_ids: [], state: 'validated', integration_commit: integrationCommit, base_commit: head, worktree_path: root, changed_files: [], command_results: [{ name: 'validate', exit_code: 0 }] } });
  const before = readFileSync(path.join(stateDir, 'events.jsonl'), 'utf8');
  assert.throws(() => landCommand({ configPath, snapshotId: 'receipt-backed', dryRun: true }), rejected('GOAL_LAND_VIEWER_UNPUBLISHED'));
  assert.equal(readFileSync(path.join(stateDir, 'events.jsonl'), 'utf8'), before);
  const publication = viewerPublishCommand({ configPath, snapshotId: 'receipt-backed' }); assert.equal(field(publication, 'status'), 'published');
  const preview = landCommand({ configPath, snapshotId: 'receipt-backed', dryRun: true }); assert.equal(field(preview, 'status'), 'dry_run');
  assert.equal(store.rebuild().snapshots[0]?.state, 'validated');
  const landed = landCommand({ configPath, snapshotId: 'receipt-backed' }); assert.equal(field(landed, 'status'), 'landed'); assert.equal(store.rebuild().snapshots[0]?.state, 'landed');
  const sequence = store.rebuild().last_event_sequence;
  assert.equal(field(landCommand({ configPath, snapshotId: 'receipt-backed' }), 'status'), 'already_landed');
  assert.equal(field(integrateCommand({ configPath, snapshotId: 'receipt-backed' }), 'status'), 'already_landed');
  assert.equal(store.rebuild().last_event_sequence, sequence); assert.deepEqual(listCommittedRepositoryValidations({ projectRoot: root }), [validation]);
  assert.equal(git(root, ['rev-parse', 'HEAD']), head, 'Landing files does not change the caller checkout commit.');
});
