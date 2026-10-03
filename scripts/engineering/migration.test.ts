import assert from 'node:assert/strict';
import { execFileSync, spawnSync } from 'node:child_process';
import { createHash } from 'node:crypto';
import { mkdtempSync, mkdirSync, readFileSync, rmSync, symlinkSync, writeFileSync } from 'node:fs';
import os from 'node:os';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { test } from 'node:test';
import { checkMigration } from './migration.ts';

type FixtureManifest = { schemaVersion: number; baselineCommit: string; legacy: string[]; generated: { path: string; kind: string; generator: string; source: string; optional: boolean }[]; retainedPython: { path: string; approval: string; reason: string }[] };
function fixture(t: { after: (callback: () => void) => void }, initial: Record<string, string> = { 'old.mjs': 'export const old = true;\n' }): { root: string; manifest: FixtureManifest; write: (file: string, content: string) => void; save: () => void; git: (args: string[]) => string } {
  const root = mkdtempSync(path.join(os.tmpdir(), 'pcr-migration-'));
  t.after(() => rmSync(root, { recursive: true, force: true }));
  const git = (args: string[]): string => execFileSync('git', ['-C', root, ...args], { encoding: 'utf8', stdio: ['ignore', 'pipe', 'pipe'] });
  const write = (file: string, content: string): void => { mkdirSync(path.dirname(path.join(root, file)), { recursive: true }); writeFileSync(path.join(root, file), content); };
  git(['init', '-q']);
  git(['config', 'user.name', 'Migration Test']);
  git(['config', 'user.email', 'migration@example.invalid']);
  for (const [file, content] of Object.entries(initial)) write(file, content);
  git(['add', '.']);
  git(['commit', '-qm', 'baseline']);
  const manifest: FixtureManifest = { schemaVersion: 1, baselineCommit: git(['rev-parse', 'HEAD']).trim(), legacy: Object.keys(initial).filter(file => /\.(?:js|mjs|cjs)$/u.test(file)).sort(), generated: [], retainedPython: [] };
  const save = (): void => write('config/typescript-migration.json', `${JSON.stringify(manifest, null, 2)}\n`);
  save();
  return { root, manifest, write, save, git };
}

test('whole repository inventory catches nonignored untracked JS and leaves the worktree unchanged', async t => {
  const f = fixture(t);
  f.write('new-domain/nested/introduced.cjs', 'module.exports = 1;\n');
  f.write('.gitignore', 'ignored/\n');
  f.write('ignored/build.js', 'ignored();');
  const before = f.git(['status', '--porcelain=v1', '--untracked-files=all']);
  const inventoryBefore = readFileSync(path.join(f.root, 'config/typescript-migration.json'), 'utf8');
  const result = await checkMigration(f.root);
  assert.equal(result.ok, false);
  assert.deepEqual(result.findings.map(finding => [finding.code, finding.path]), [['UNINVENTORIED_JAVASCRIPT', 'new-domain/nested/introduced.cjs']]);
  assert.equal(f.git(['status', '--porcelain=v1', '--untracked-files=all']), before);
  assert.equal(readFileSync(path.join(f.root, 'config/typescript-migration.json'), 'utf8'), inventoryBefore);
});

test('deleted or moved inventory paths fail until the old entry is deliberately removed', async t => {
  const f = fixture(t);
  rmSync(path.join(f.root, 'old.mjs'));
  f.write('renamed.ts', 'export const value: number = 1;\n');
  const result = await checkMigration(f.root);
  assert.equal(result.ok, false);
  assert.ok(result.findings.some(finding => finding.code === 'SOURCE_UNREADABLE' && finding.path === 'old.mjs'));
  f.manifest.legacy = [];
  f.save();
  assert.equal((await checkMigration(f.root)).ok, true);
});

test('adding new JavaScript to the manifest cannot expand the recorded legacy baseline', async t => {
  const f = fixture(t);
  f.write('accepted-after-baseline.mjs', 'export const legacy = 1;\n');
  f.git(['add', 'accepted-after-baseline.mjs']);
  f.manifest.legacy.push('accepted-after-baseline.mjs');
  f.save();
  const result = await checkMigration(f.root);
  assert.ok(result.findings.some(finding => finding.code === 'BASELINE_GROWTH'));
});

test('malformed shape, duplicate inventory, and unsafe paths fail closed', async t => {
  for (const mutation of [
    (f: ReturnType<typeof fixture>): void => { f.manifest.legacy.push('old.mjs'); f.save(); },
    (f: ReturnType<typeof fixture>): void => { f.manifest.legacy.push('../outside.mjs'); f.save(); },
    (f: ReturnType<typeof fixture>): void => { f.write('config/typescript-migration.json', '{"schemaVersion":1,"legacy":[]}'); },
    (f: ReturnType<typeof fixture>): void => { f.write('config/typescript-migration.json', JSON.stringify({ ...f.manifest, silentlyAccepted: true })); },
  ]) {
    const f = fixture(t);
    mutation(f);
    const result = await checkMigration(f.root);
    assert.equal(result.ok, false);
    assert.equal(result.findings[0]?.code, 'INVENTORY_INVALID');
  }
});

test('an authored file cannot become generated through an arbitrary manifest exemption', async t => {
  const f = fixture(t);
  f.manifest.legacy = [];
  f.manifest.generated.push({ path: 'old.mjs', kind: 'copy', generator: 'some-generator.mjs', source: 'some-input.ts', optional: false });
  f.save();
  const result = await checkMigration(f.root);
  assert.equal(result.findings[0]?.code, 'INVENTORY_INVALID');
  assert.match(result.findings[0]?.message ?? '', /Unapproved generated/u);
});

test('a nonignored generated search worker requires exact source and generator evidence', async t => {
  const source = 'packages/pcr-docs/lib/search-worker.mjs';
  const generator = 'packages/pcr-docs/scripts/generate.mjs';
  const output = 'packages/pcr-docs/public/generated/search-worker.mjs';
  const f = fixture(t, { [source]: 'export const search = true;\n', [generator]: '// generator fixture\n' });
  f.manifest.generated.push({ path: output, kind: 'copy', generator, source, optional: true });
  f.save();
  assert.equal((await checkMigration(f.root)).ok, true);
  f.write(output, 'export const search = false;\n');
  assert.ok((await checkMigration(f.root)).findings.some(finding => finding.code === 'GENERATED_EVIDENCE'));
  f.write(output, 'export const search = true;\n');
  const result = await checkMigration(f.root);
  assert.equal(result.ok, true);
  assert.equal(result.counts.generated, 1);
  f.write('.gitignore', 'packages/pcr-docs/public/generated/\n');
  f.write(output, 'older ignored build output');
  assert.equal((await checkMigration(f.root)).ok, true);
});

test('retained Python needs explicit approval and matching vendor hash; additional Python fails', async t => {
  const checker = 'scripts/vendor/workspace-seo/check.py';
  const content = 'print("SEO")\n';
  const f = fixture(t, { 'old.mjs': 'export {};\n', [checker]: content });
  f.manifest.retainedPython.push({ path: checker, approval: 'https://github.com/tiangong-lca/pcr/issues/70', reason: 'Keep the shared SEO checker.' });
  f.write('scripts/vendor/workspace-seo/manifest.json', JSON.stringify({ schema: 1, generated: true, source_repository: 'tiangong-lca/workspace', source_commit: 'a'.repeat(40), source_path: 'scripts/seo/check.py', sha256: createHash('sha256').update(content).digest('hex') }));
  f.save();
  assert.equal((await checkMigration(f.root)).ok, true);
  f.write(checker, 'print("changed")\n');
  f.write('new.py', 'print("new")\n');
  const result = await checkMigration(f.root);
  assert.deepEqual(result.findings.map(finding => finding.code).sort(), ['PYTHON_EVIDENCE', 'UNAPPROVED_PYTHON']);
});

test('TypeScript AST rejects actual explicit any and suppressions without flagging literal or comment prose', async t => {
  const f = fixture(t);
  f.write('typed.ts', [
    'export const prose = "any @ts-ignore @ts-nocheck";',
    'export const template = `@ts-ignore any ${1}`;',
    'export const regexp = /any \\/\\/ @ts-ignore/;',
    '// A description can contain the word any.',
    'export const data = { any: "property name" };',
    'export type Fine = { value: unknown };',
  ].join('\n'));
  assert.equal((await checkMigration(f.root)).ok, true);
  f.write('typed.ts', [
    '// @ts-nocheck',
    '// @ts-ignore',
    'export const data: any = 1;',
    'export type Alias = Array<any>;',
    '// @ts-expect-error',
    'export const more = 2;',
  ].join('\n'));
  const result = await checkMigration(f.root);
  assert.equal(result.findings.filter(finding => finding.code === 'TYPESCRIPT_ANY').length, 2);
  assert.equal(result.findings.filter(finding => finding.code === 'TYPESCRIPT_SUPPRESSION').length, 3);
});

test('new declaration/CTS/MTS/TSX files cannot bypass the TypeScript gate', async t => {
  const f = fixture(t);
  for (const file of ['escape.d.ts', 'escape.cts', 'escape.mts', 'escape.tsx']) f.write(file, 'export type Escape = any;\n');
  const result = await checkMigration(f.root);
  assert.equal(result.findings.filter(finding => finding.code === 'TYPESCRIPT_ANY').length, 4);
});

test('syntax errors and source symlinks fail closed', async t => {
  const f = fixture(t);
  f.write('invalid.ts', 'export type Invalid = ;\n');
  assert.ok((await checkMigration(f.root)).findings.some(finding => finding.code === 'TYPESCRIPT_SYNTAX'));
  rmSync(path.join(f.root, 'invalid.ts'));
  symlinkSync(path.join(f.root, 'old.mjs'), path.join(f.root, 'linked.ts'));
  assert.ok((await checkMigration(f.root)).findings.some(finding => finding.code === 'SOURCE_UNREADABLE'));
});

test('CLI emits deterministic JSON and uses failure/usage exit codes', t => {
  const f = fixture(t);
  const extension = import.meta.url.endsWith('.ts') ? '.ts' : '.js';
  const cli = fileURLToPath(new URL(`./migration${extension}`, import.meta.url));
  const args = [cli, '--root', f.root, '--format', 'json'];
  const first = spawnSync(process.execPath, args, { encoding: 'utf8' });
  const second = spawnSync(process.execPath, args, { encoding: 'utf8' });
  assert.equal(first.status, 0);
  assert.equal(first.stdout, second.stdout);
  assert.equal(first.stderr, '');
  const data: unknown = JSON.parse(first.stdout);
  assert.ok(data !== null && typeof data === 'object' && 'ok' in data && data.ok === true);
  f.write('untracked.js', 'export {};');
  assert.equal(spawnSync(process.execPath, args, { encoding: 'utf8' }).status, 1);
  assert.equal(spawnSync(process.execPath, [cli, '--format', 'unsupported'], { encoding: 'utf8' }).status, 2);
});

test('the controlled vocabulary exemption delegates to its read-only generator check and propagates stale artifacts', async t => {
  const artifact = 'packages/pcr-core/src/generated/controlled-vocabulary.mjs';
  const generator = 'builder/scripts/generate-controlled-vocabulary.mjs';
  const f = fixture(t, {
    'old.mjs': 'export {};\n',
    [generator]: [
      'import { readFileSync } from "node:fs";',
      'if (!process.argv.includes("--check")) throw new Error("Mutation forbidden in this fixture");',
      'const output = new URL("../../packages/pcr-core/src/generated/controlled-vocabulary.mjs", import.meta.url);',
      'if (readFileSync(output, "utf8") !== "export const values = [];\\n") throw new Error("stale controlled vocabulary");',
    ].join('\n'),
    [artifact]: 'export const values = [];\n',
  });
  f.manifest.legacy = f.manifest.legacy.filter(file => file !== artifact);
  f.manifest.generated.push({ path: artifact, kind: 'controlled-vocabulary', generator, source: 'builder/vocab', optional: false });
  f.save();
  assert.equal((await checkMigration(f.root)).ok, true);
  f.write(artifact, 'export const values = ["unapproved"];\n');
  assert.ok((await checkMigration(f.root)).findings.some(finding => finding.code === 'GENERATED_EVIDENCE'));
  f.manifest.generated = [];
  f.manifest.legacy.push(artifact);
  f.save();
  assert.equal((await checkMigration(f.root)).findings[0]?.code, 'INVENTORY_INVALID');
});

test('an actual directory alias identifies the complete repository without permitting a nested root', async t => {
  const f = fixture(t);
  const alias = `${f.root}-alias`;
  symlinkSync(f.root, alias, process.platform === 'win32' ? 'junction' : 'dir');
  t.after(() => rmSync(alias, { recursive: true, force: true }));
  f.write('typed/nested/source.ts', 'export const value: unknown = 1;\n');
  const direct = await checkMigration(f.root);
  assert.equal(direct.ok, true, JSON.stringify(direct.findings));
  assert.deepEqual(await checkMigration(alias), direct);
  // A complete copied manifest inside a subdirectory must not limit discovery to that subtree.
  f.write('nested/config/typescript-migration.json', JSON.stringify(f.manifest));
  const nested = await checkMigration(path.join(f.root, 'nested'));
  assert.equal(nested.ok, false);
  assert.equal(nested.findings[0]?.message, '--root must be the Git repository root.');
});

test('native Windows drive and directory casing aliases retain repository identity', { skip: process.platform !== 'win32' ? 'Requires actual Windows filesystem and Git path handling.' : false }, async t => {
  const f = fixture(t);
  f.write('typed/CasePreserved.ts', 'export type Result = unknown;\n');
  const normal = await checkMigration(f.root);
  assert.equal(normal.ok, true, JSON.stringify(normal.findings));
  const driveAlias = f.root.replace(/^[A-Z]:/iu, drive => drive.toLowerCase());
  assert.deepEqual(await checkMigration(driveAlias), normal);
  assert.deepEqual(await checkMigration(f.root.toUpperCase()), normal);
});

test('accepting a repository directory alias still rejects symlink components in source paths', async t => {
  const f = fixture(t);
  const alias = `${f.root}-alias`;
  symlinkSync(f.root, alias, process.platform === 'win32' ? 'junction' : 'dir');
  t.after(() => rmSync(alias, { recursive: true, force: true }));
  const manifest = readFileSync(path.join(f.root, 'config/typescript-migration.json'), 'utf8');
  rmSync(path.join(f.root, 'config'), { recursive: true });
  f.write('manifest-source/typescript-migration.json', manifest);
  symlinkSync(path.join(f.root, 'manifest-source'), path.join(f.root, 'config'), process.platform === 'win32' ? 'junction' : 'dir');
  const result = await checkMigration(alias);
  assert.equal(result.ok, false);
  assert.match(result.findings[0]?.message ?? '', /regular file with no symlink components/u);
});
