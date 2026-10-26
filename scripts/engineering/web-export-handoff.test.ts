import assert from 'node:assert/strict';
import { execFileSync, spawnSync } from 'node:child_process';
import { copyFileSync, existsSync, lstatSync, mkdirSync, mkdtempSync, readFileSync, readdirSync, realpathSync, rmSync, symlinkSync, writeFileSync } from 'node:fs';
import { tmpdir } from 'node:os';
import path from 'node:path';
import test from 'node:test';
import { fileURLToPath } from 'node:url';
import { PRODUCT_MIRRORS, readProductIdentity } from '../../builder/scripts/product-identity.ts';
import { createCiPlan } from './ci-plan.ts';
import { writeQualificationPlan } from './qualification-plan.ts';
import { qualificationBinding } from './coverage-qualification.ts';
import { inventory } from './coverage-inventory.ts';
import { config, hash } from './coverage-types.ts';
import { captureWebExport, verifyWebExport } from './web-export-handoff.ts';
import { prepareStaticRouteAliases, STATIC_ROUTE_ALIASES_FILE } from '../../packages/pcr-docs/scripts/static-route-aliases.ts';

function put(file: string, content: string | Uint8Array): void { mkdirSync(path.dirname(file), { recursive: true }); writeFileSync(file, content); }
function putJson(file: string, value: unknown): void { put(file, JSON.stringify(value)); }
function obj(value: unknown): Record<string, unknown> { assert.ok(value && typeof value === 'object' && !Array.isArray(value)); return value as Record<string, unknown>; }
function load(file: string): Record<string, unknown> { return obj(JSON.parse(readFileSync(file, 'utf8')) as unknown); }
function fixture(t: test.TestContext, mode: 'full' | 'data' = 'full') {
  const base = realpathSync(mkdtempSync(path.join(tmpdir(), 'pcr-web-handoff-'))), root = path.join(base, 'source with spaces');
  mkdirSync(root); t.after(() => rmSync(base, { recursive: true, force: true }));
  const git = (...args: string[]) => execFileSync('git', args, { cwd: root, encoding: 'utf8', stdio: ['ignore', 'pipe', 'pipe'] }).trim();
  putJson(path.join(root, 'package.json'), { type: 'module' });
  putJson(path.join(root, 'product-release.json'), { schema: 1, version: '0.4.1', node: process.versions.node, npm: '12.2.0', web: { origin: 'https://pcr.tiangong.earth', site: 'global' } });
  for (const [file, name] of PRODUCT_MIRRORS) putJson(path.join(root, file), { name, version: '0.4.1', private: true });
  const settings = { schemaVersion: 1, roots: ['packages'], pendingPrefixes: [], exclusions: [], thresholds: { lines: 90, functions: 90, branches: 85 }, critical: [] };
  putJson(path.join(root, 'config/coverage.json'), settings);
  put(path.join(root, 'packages/runtime.ts'), 'export const value = 1;\n');
  const canonical = path.join(root, 'library/pcrs/domain/group/record/manifest.yaml'); put(canonical, 'id: original\n');
  put(path.join(root, 'classifications/mapping.yaml'), 'mappings: []\n');
  git('init', '-q'); git('add', '.'); git('-c', 'user.name=Handoff Fixture', '-c', 'user.email=fixture@example.invalid', 'commit', '-qm', 'base');
  const prior = git('rev-parse', 'HEAD');
  put(mode === 'data' ? canonical : path.join(root, 'packages/runtime.ts'), mode === 'data' ? 'id: changed\n' : 'export const value = 2;\n');
  git('add', '.'); git('-c', 'user.name=Handoff Fixture', '-c', 'user.email=fixture@example.invalid', 'commit', '-qm', 'source');
  const head = git('rev-parse', 'HEAD'), plans = path.join(base, 'plans'); mkdirSync(plans);
  const env = { CI_EVENT_NAME: 'pull_request', CI_WORKFLOW_INPUTS: '{}', CI_BASE_SHA: prior, CI_HEAD_SHA: head, GITHUB_RUN_ID: '12345', GITHUB_RUN_ATTEMPT: '2' };
  const plan = createCiPlan(root, { event: env.CI_EVENT_NAME, reusable: false, base: prior, head }); assert.equal(plan.mode, mode);
  putJson(path.join(plans, 'ci.json'), plan);
  const qualification = mode === 'full' ? writeQualificationPlan(root, path.join(plans, 'qualification.json')) : null;
  const out = path.join(base, 'export'), destination = path.join(base, 'handoff'), metrics = path.join(base, 'metrics.json'), coverage = path.join(base, 'coverage');
  const identity = readProductIdentity(root);
  put(path.join(out, 'index.html'), '<html>Complete fixture</html>');
  put(path.join(out, '.well-known/hidden.txt'), 'Hidden original bytes\n');
  mkdirSync(path.join(out, 'empty-directory'));
  putJson(path.join(out, 'generated/product-release.json'), identity);
  putJson(path.join(out, 'generated/version.json'), { sourceCommit: identity.sourceCommit, releaseVersion: identity.version, releaseTag: identity.tag, sourceFingerprint: identity.sourceFingerprint });
  put(path.join(out, '__next._full.txt'), '0: exact navigation fixture\n');
  put(path.join(out, 'index.txt'), '0: exact navigation fixture\n');
  prepareStaticRouteAliases(out, identity.sourceCommit);
  const refreshMetrics = () => {
    const count = (folder: string): { files: number; bytes: number } => readdirSync(folder, { withFileTypes: true }).reduce((sum, entry) => {
      const file = path.join(folder, entry.name), child = entry.isDirectory() ? count(file) : { files: 1, bytes: lstatSync(file).size };
      return { files: sum.files + child.files, bytes: sum.bytes + child.bytes };
    }, { files: 0, bytes: 0 });
    putJson(metrics, { status: 'passed', buildMs: 40, peakResidentBytes: 100, memoryMeasurement: 'process-tree-rss',
      stages: ['scripts/generate.ts', 'node_modules/next/dist/bin/next build', 'scripts/static-route-aliases.ts', 'scripts/verify.ts'].map(command => ({ command, durationMs: 10, peakResidentBytes: 100, memoryMeasurement: 'process-tree-rss', status: 'passed', exitCode: 0 })),
      relocation: { sourceCommit: identity.sourceCommit, export: { ...count(out), staged: true } } });
  };
  refreshMetrics();
  if (qualification) putJson(path.join(coverage, 'run.json'), { schemaVersion: 1, commit: head, configSha256: hash(readFileSync(path.join(root, 'config/coverage.json'))), node: process.version,
    sources: inventory(root, config(settings)), command: ['npm', '--prefix', 'packages/pcr-docs', 'run', 'build'], qualification: qualificationBinding(qualification, 'documentation'), status: 0, unchanged: true });
  const capture = () => captureWebExport(root, plans, out, destination, metrics, coverage, env);
  const verify = (override: NodeJS.ProcessEnv = env) => verifyWebExport(root, plans, destination, override);
  return { base, root, out, destination, metrics, coverage, plans, env, git, refreshMetrics, capture, verify };
}

test('full handoff authenticates hidden/file bytes after Actions drops empty directories, leaving source untouched', async t => {
  const f = fixture(t), original = readFileSync(path.join(f.out, 'index.html'));
  const captured = await f.capture(), verified = await f.verify();
  assert.deepEqual(verified, captured); assert.equal(captured.publishable, false);
  assert.equal(captured.context.qualification?.selection, 'documentation'); assert.equal(captured.coverage?.unchanged, true);
  assert.ok(captured.tree.files.some(file => file.path === '.well-known/hidden.txt'));
  assert.ok(!captured.tree.directories.includes('empty-directory'));
  assert.ok(existsSync(path.join(f.out, 'empty-directory')), 'the original empty directory must remain untouched');
  assert.equal(existsSync(path.join(f.destination, 'out/empty-directory')), false, 'empty directories are not artifact payload');
  assert.deepEqual(readFileSync(path.join(f.out, 'index.html')), original);
  const sourceStat = lstatSync(path.join(f.out, 'index.html')), capturedStat = lstatSync(path.join(f.destination, 'out/index.html'));
  if (sourceStat.dev === capturedStat.dev) assert.equal(sourceStat.ino, capturedStat.ino, 'same-device capture should avoid duplicating the complete export');
  const downloaded = path.join(f.base, 'downloaded');
  // Model upload-artifact's file-only search results, including hidden files.
  // Give the producer a harmless empty directory that Actions will omit.
  mkdirSync(path.join(f.destination, 'out/empty-directory'));
  const transferFiles = (source: string, target: string): void => {
    for (const entry of readdirSync(source, { withFileTypes: true })) {
      const from = path.join(source, entry.name), to = path.join(target, entry.name);
      if (entry.isDirectory()) transferFiles(from, to);
      else { mkdirSync(path.dirname(to), { recursive: true }); copyFileSync(from, to); }
    }
  };
  transferFiles(f.destination, downloaded);
  assert.equal(existsSync(path.join(downloaded, 'out/empty-directory')), false);
  assert.deepEqual(readFileSync(path.join(downloaded, 'out/.well-known/hidden.txt')), readFileSync(path.join(f.out, '.well-known/hidden.txt')));
  assert.deepEqual(await verifyWebExport(f.root, f.plans, downloaded, f.env), captured);
  assert.ok(existsSync(path.join(f.out, 'empty-directory')));
  await assert.rejects(f.capture(), /new and outside/u);
});

test('data handoff remains required without fabricating a full-coverage receipt', async t => {
  const f = fixture(t, 'data'), captured = await f.capture();
  assert.equal(captured.context.qualification, null); assert.equal(captured.coverage, null); await f.verify();
  const file = path.join(f.destination, 'checkpoint.json'), invalid = load(file); invalid.coverage = { status: 0 };
  putJson(file, invalid); await assert.rejects(f.verify(), /must not claim full coverage/u);
});

test('old three-stage receipts and missing or foreign alias metadata cannot become current handoffs', async t => {
  for (const mutation of ['old-stages', 'missing', 'foreign'] as const) {
    const f = fixture(t, 'data');
    if (mutation === 'old-stages') {
      const metrics = load(f.metrics); metrics.stages = (metrics.stages as Record<string, unknown>[]).filter(stage => stage.command !== 'scripts/static-route-aliases.ts'); putJson(f.metrics, metrics);
    } else if (mutation === 'missing') rmSync(path.join(f.out, STATIC_ROUTE_ALIASES_FILE));
    else { const file = path.join(f.out, STATIC_ROUTE_ALIASES_FILE), manifest = load(file); manifest.sourceCommit = 'b'.repeat(40); put(file, JSON.stringify(manifest) + '\n'); }
    await assert.rejects(f.capture()); assert.equal(existsSync(f.destination), false);
  }
});

test('every measured stage, RSS, completion and exact export/source count is mandatory', async t => {
  const mutations: ((value: Record<string, unknown>) => void)[] = [
    value => { value.status = 'failed'; }, value => { value.failure = 'handoff failed'; }, value => { value.memoryMeasurement = 'unavailable'; },
    value => { value.peakResidentBytes = 6_000_000_001; }, value => { value.buildMs = 29; }, value => { value.stages = []; },
    value => { obj((value.stages as unknown[])[1]).command = 'skipped'; }, value => { obj((value.stages as unknown[])[2]).exitCode = 1; },
    value => { obj(value.relocation).sourceCommit = 'a'.repeat(40); }, value => { obj(obj(value.relocation).export).files = 1; },
    value => { obj(obj(value.relocation).export).bytes = 1; }, value => { obj(obj(value.relocation).export).staged = false; },
  ];
  for (const mutate of mutations) {
    const f = fixture(t, 'data'), value = load(f.metrics); mutate(value); putJson(f.metrics, value);
    await assert.rejects(f.capture()); assert.equal(existsSync(f.destination), false); assert.ok(existsSync(f.out));
    assert.ok(!readdirSync(f.base).some(name => name.startsWith('.handoff.stage-')));
  }
});

test('full coverage accepts only the complete successful unchanged current documentation measurement', async t => {
  const mutations: ((value: Record<string, unknown>) => void)[] = [
    value => { value.status = null; }, value => { value.unchanged = false; }, value => { value.node = 'v24.0.0'; },
    value => { value.commit = 'a'.repeat(40); }, value => { value.command = ['npm', 'run', 'docs:verify']; },
    value => { value.configSha256 = '0'.repeat(64); }, value => { value.sources = []; },
    value => { obj(value.qualification).qualificationId = 'foreign'; }, value => { obj(value.qualification).planHash = 'foreign'; },
    value => { value.qualificationError = 'hidden failure'; }, value => { (value.sources as unknown[]).push({ path: 'malformed-sibling' }); },
  ];
  for (const mutate of mutations) {
    const f = fixture(t), filename = path.join(f.coverage, 'run.json'), value = load(filename); mutate(value); putJson(filename, value);
    await assert.rejects(f.capture()); assert.equal(existsSync(f.destination), false);
  }
});

test('consumer rejects missing, extra, renamed and substituted files and unsafe or duplicate checkpoint entries', async t => {
  const f = fixture(t, 'data'); await f.capture(); const file = path.join(f.destination, 'out/index.html'), original = readFileSync(file);
  writeFileSync(file, 'Changed exported bytes'); await assert.rejects(f.verify(), /file tree/u); writeFileSync(file, original);
  const extra = path.join(f.destination, 'out/.extra'); writeFileSync(extra, 'extra'); await assert.rejects(f.verify(), /file tree/u); rmSync(extra);
  rmSync(file); await assert.rejects(f.verify(), /file tree/u); writeFileSync(file, original);
  const checkpoint = path.join(f.destination, 'checkpoint.json'), originalCheckpoint = readFileSync(checkpoint);
  for (const mutate of [
    (value: Record<string, unknown>) => { const files = obj(value.tree).files as unknown[]; files.push(files[0]); },
    (value: Record<string, unknown>) => { obj((obj(value.tree).files as unknown[])[0]).path = '../escape'; },
    (value: Record<string, unknown>) => { value.publishable = true; },
  ]) { const value = obj(JSON.parse(originalCheckpoint.toString()) as unknown); mutate(value); putJson(checkpoint, value); await assert.rejects(f.verify()); }
  writeFileSync(checkpoint, originalCheckpoint); await f.verify();
});

test('source, plan, runtime and invocation substitutions cannot reuse a same-source handoff', async t => {
  const f = fixture(t); await f.capture();
  await assert.rejects(f.verify({ ...f.env, GITHUB_RUN_ID: '999' }), /current run/u);
  await assert.rejects(f.verify({ ...f.env, GITHUB_RUN_ATTEMPT: '3' }), /current run/u);
  await assert.rejects(f.verify({ ...f.env, CI_HEAD_SHA: 'a'.repeat(40) }));
  const checkpoint = path.join(f.destination, 'checkpoint.json'), original = readFileSync(checkpoint), changed = load(checkpoint);
  obj(changed.context).node = 'v24.0.0'; putJson(checkpoint, changed); await assert.rejects(f.verify(), /runtime/u); writeFileSync(checkpoint, original);
  const qualification = path.join(f.plans, 'qualification.json'), plan = load(qualification); plan.qualificationId = '11111111-1111-1111-1111-111111111111'; putJson(qualification, plan);
  await assert.rejects(f.verify(), /plan/u);
  put(path.join(f.root, 'library/pcrs/domain/group/record/manifest.yaml'), 'changed source\n'); await assert.rejects(f.verify());
});

test('source aliases, symlinks, special files and protected destinations fail without deleting unowned artifacts', async t => {
  const f = fixture(t, 'data'), sentinel = path.join(f.base, 'sentinel'); writeFileSync(sentinel, 'retain');
  symlinkSync(sentinel, path.join(f.out, 'alias')); await assert.rejects(f.capture(), /links/u); rmSync(path.join(f.out, 'alias'));
  if (process.platform !== 'win32') {
    const fifo = path.join(f.out, 'special'); execFileSync('mkfifo', [fifo]); await assert.rejects(f.capture(), /regular files/u); rmSync(fifo);
  }
  await assert.rejects(captureWebExport(f.root, f.plans, f.out, path.join(f.out, 'nested'), f.metrics, f.coverage, f.env), /outside/u);
  await assert.rejects(captureWebExport(f.root, f.plans, f.out, path.join(f.root, 'inside'), f.metrics, f.coverage, f.env), /outside/u);
  symlinkSync(f.base, path.join(f.base, 'parent-alias'));
  await assert.rejects(captureWebExport(f.root, f.plans, f.out, path.join(f.base, 'parent-alias/new'), f.metrics, f.coverage, f.env), /canonical/u);
  assert.equal(readFileSync(sentinel, 'utf8'), 'retain'); assert.ok(existsSync(f.out));
});

test('source mutation during streamed capture is rejected and owned scratch is removed', async t => {
  const f = fixture(t, 'data'), source = path.join(f.out, 'large.bin'); writeFileSync(source, Buffer.alloc(16_000_000, 65)); f.refreshMetrics();
  const pending = f.capture();
  setImmediate(() => writeFileSync(source, Buffer.alloc(16_000_000, 66)));
  await assert.rejects(pending, /changed|mutated|differ/u); assert.equal(existsSync(f.destination), false);
  assert.ok(!readdirSync(f.base).some(name => name.startsWith('.handoff.stage-')));
  assert.ok(existsSync(source));
});

test('CLI validates argument shape and verifies a captured artifact with explicit environment', async t => {
  const f = fixture(t, 'data');
  const script = fileURLToPath(new URL('./web-export-handoff' + path.extname(fileURLToPath(import.meta.url)), import.meta.url));
  const invoke = (args: string[]) => spawnSync(process.execPath, [script, ...args], { cwd: f.root, env: { ...process.env, ...f.env }, encoding: 'utf8' });
  const captured = invoke(['capture', f.plans, f.out, f.destination, f.metrics, f.coverage]); assert.equal(captured.status, 0, captured.stderr);
  const verified = invoke(['verify', f.plans, f.destination]); assert.equal(verified.status, 0, verified.stderr); assert.match(verified.stdout, /"publishable":false/u);
  const invalid = invoke(['capture']); assert.equal(invalid.status, 1); assert.match(invalid.stderr, /Usage:/u);
});
