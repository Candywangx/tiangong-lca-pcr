import test, { type TestContext } from 'node:test';
import assert from 'node:assert/strict';
import { cpSync, existsSync, mkdirSync, mkdtempSync, readFileSync, readdirSync, readlinkSync, realpathSync, rmSync, symlinkSync, writeFileSync } from 'node:fs';
import { execFileSync, spawnSync } from 'node:child_process';
import { tmpdir } from 'node:os';
import path from 'node:path';
import { createHash } from 'node:crypto';
import { createReadSessionFixture, writeSessionFixtureFile } from '../pcr-core/fixtures/read-session-fixture.ts';
import { parseYaml, renderYaml } from '../pcr-core/src/yaml-lite.ts';
import { buildClassificationCoverageSummaries, buildViewer, buildViewerData, checkViewerCandidates, computeViewerGeneratorContractSha256, publishViewerSnapshot } from './scripts/build-viewer-data.ts';

const sourceRoot = path.resolve('.');
const coveragePath = 'classifications/indexes/cpc-3.0-coverage.json';
const indexPath = 'library/indexes/pcr-index.yaml';
const hash = (bytes: string | Uint8Array) => 'sha256:' + createHash('sha256').update(bytes).digest('hex');
function object(value: unknown): Record<string, unknown> { assert.ok(value !== null && typeof value === 'object' && !Array.isArray(value)); return value as Record<string, unknown>; }
function code(expected: string): (error: unknown) => boolean { return error => { assert.equal(object(error).code, expected); return true; }; }
function ownedDirectory(t: TestContext, prefix: string) { const root = mkdtempSync(path.join(realpathSync(tmpdir()), prefix)); t.after(() => rmSync(root, { recursive: true, force: true })); return root; }
function git(root: string, ...args: string[]) { return execFileSync('git', args, { cwd: root, encoding: 'utf8', stdio: 'pipe' }).trim(); }
function fixture(t: TestContext) {
  const f = createReadSessionFixture(t), output = ownedDirectory(t, 'viewer-build-edges-output-');
  const manifest = object(parseYaml(readFileSync(path.join(f.root, f.relative, 'manifest.yaml'), 'utf8')));
  const material = { schema_version: 1, index_kind: 'tiangong-pcr-material-catalog', status: 'current', summary: { total: 1 }, pcrs: [
    { id: f.id, path: f.relative, title: manifest.title, status: manifest.status, content_maturity: manifest.content_maturity },
  ] };
  writeSessionFixtureFile(f.root, indexPath, renderYaml(material));
  const leaves = 'classifications/systems/cpc/3.0/normalized/leaves.json', mapping = 'classifications/mappings/cpc-3.0-to-pcr.yaml';
  writeSessionFixtureFile(f.root, leaves, JSON.stringify({ classification_system: 'CPC', classification_version: '3.0', leaves: [] }));
  writeSessionFixtureFile(f.root, mapping, renderYaml({ schema_version: 2, classification_system: 'CPC', classification_version: '3.0', status: 'current', mappings: [] }));
  const coverage = { schema_version: 1, index_kind: 'classification-pcr-coverage', classification_system: 'CPC', classification_version: '3.0',
    source: { contract_version: '2', generator: 'builder/scripts/build-catalog.mjs', generator_version: '2', normalized_leaves: { path: leaves, hash_mode: 'exact_bytes', sha256: hash(readFileSync(path.join(f.root, leaves))) }, mapping: { path: mapping, hash_mode: 'exact_bytes', sha256: hash(readFileSync(path.join(f.root, mapping))) } },
    summary: { total: 0, mapped: 0, unmapped: 0, candidate_suggestion: 0, manual_review: 0, unknown: 0 }, entries: [] };
  writeSessionFixtureFile(f.root, coveragePath, JSON.stringify(coverage));
  const catalog = object(parseYaml(readFileSync(path.join(f.root, 'library/catalog.yaml'), 'utf8'))); catalog.classification_coverage_indexes = [coveragePath];
  const saveCatalog = () => writeSessionFixtureFile(f.root, 'library/catalog.yaml', renderYaml(catalog)); saveCatalog();
  const saveMaterial = () => writeSessionFixtureFile(f.root, indexPath, renderYaml(material));
  git(f.root, 'init', '-q'); git(f.root, 'add', '.'); git(f.root, '-c', 'user.name=Owned Viewer edge fixture', '-c', 'user.email=fixture@example.invalid', 'commit', '-qm', 'Pinned Viewer fixture');
  const commit = git(f.root, 'rev-parse', 'HEAD'), tree = git(f.root, 'rev-parse', 'HEAD^{tree}');
  git(f.root, 'update-ref', 'refs/viewer-tests/pinned', commit);
  const options = { root: f.root, artifactStore: path.join(output, 'store'), snapshotId: 'viewer-edge-snapshot', goalId: 'viewer-edge-goal', harnessSnapshotId: 'viewer-edge-harness', sequence: 1,
    sourceRef: 'refs/viewer-tests/pinned', integrationCommit: commit, baseCommit: commit, treeHash: tree,
    capturedAt: '2026-10-04T00:00:00Z', validatedAt: '2026-10-04T00:01:00Z', validationSummary: { status: 'passed', checks: 1 },
    generatorContractSha256: 'sha256:' + 'a'.repeat(64), bootstrap: true };
  return { ...f, output, material, catalog, coverage, saveCatalog, saveMaterial, options };
}

for (const [name, value, expected] of [
  ['empty declaration list', [], /non-empty array/], ['nonarray declarations', {}, /non-empty array/],
  ['nontext declaration', [7], /trimmed path string/], ['blank declaration', [' '], /trimmed path string/],
  ['untrimmed declaration', [' ' + coveragePath], /trimmed path string/], ['absolute declaration', ['/' + coveragePath], /Invalid PCR catalog coverage declaration/],
  ['traversal declaration', ['classifications/indexes/../cpc-3.0-coverage.json'], /Invalid PCR catalog coverage declaration/],
  ['duplicate declaration', [coveragePath, coveragePath], /duplicate index/],
] as const) test(`Viewer coverage summary rejects ${name}`, t => {
  const f = fixture(t); f.catalog.classification_coverage_indexes = value; f.saveCatalog();
  assert.throws(() => buildClassificationCoverageSummaries({ root: f.root }), expected);
});
test('Viewer coverage summary rejects invalid YAML/JSON and scalar metadata at its actual file boundaries', t => {
  const f = fixture(t);
  for (const value of ['[unterminated', 'null']) { writeFileSync(path.join(f.root, 'library/catalog.yaml'), value); assert.throws(() => buildClassificationCoverageSummaries({ root: f.root }), /Invalid PCR catalog/); }
  f.saveCatalog();
  for (const value of ['{', '[]']) { writeFileSync(path.join(f.root, coveragePath), value); assert.throws(() => buildClassificationCoverageSummaries({ root: f.root }), /Invalid classification coverage index/); }
});
test('Viewer coverage summary does not accept malformed, duplicate or relocated coordinates', t => {
  const f = fixture(t);
  writeFileSync(path.join(f.root, coveragePath), JSON.stringify({ classification_system: '../cpc', classification_version: '3.0' }));
  assert.throws(() => buildClassificationCoverageSummaries({ root: f.root }), /Invalid classification coordinate/);
  writeFileSync(path.join(f.root, coveragePath), JSON.stringify(f.coverage));
  const duplicate = 'classifications/indexes/cpc-duplicate-coverage.json'; writeSessionFixtureFile(f.root, duplicate, JSON.stringify(f.coverage));
  f.catalog.classification_coverage_indexes = [coveragePath, duplicate]; f.saveCatalog();
  assert.throws(() => buildClassificationCoverageSummaries({ root: f.root }), /duplicate classification coordinate/);
  f.catalog.classification_coverage_indexes = [duplicate]; f.saveCatalog();
  assert.throws(() => buildClassificationCoverageSummaries({ root: f.root }), /index coordinate.*requires/);
});
test('Viewer metadata reads reject a directory or nondirectory ancestor without opening a coverage stream', t => {
  const f = fixture(t), filename = path.join(f.root, coveragePath);
  rmSync(filename); mkdirSync(filename); assert.throws(() => buildClassificationCoverageSummaries({ root: f.root }), /must be a regular file/);
  rmSync(path.dirname(filename), { recursive: true }); writeFileSync(path.dirname(filename), 'ancestor file');
  assert.throws(() => buildClassificationCoverageSummaries({ root: f.root }), /must be a directory/);
});

for (const [name, modify, expected] of [
  ['wrong material index kind', (f: ReturnType<typeof fixture>) => { f.material.index_kind = 'unreviewed'; }, 'VIEWER_MATERIAL_INDEX_INVALID'],
  ['wrong material summary total', (f: ReturnType<typeof fixture>) => { f.material.summary.total = 7; }, 'VIEWER_MATERIAL_INDEX_INVALID'],
  ['duplicate material identity', (f: ReturnType<typeof fixture>) => { f.material.pcrs.push(f.material.pcrs[0]!); f.material.summary.total = 2; }, 'VIEWER_MATERIAL_INDEX_INVALID'],
  ['missing material path', (f: ReturnType<typeof fixture>) => { object(f.material.pcrs[0]).path = 7; }, 'VIEWER_SOURCE_INVALID'],
  ['stale material title', (f: ReturnType<typeof fixture>) => { f.material.pcrs[0]!.title = { 'en-US': 'Substituted title' }; }, 'VIEWER_MATERIAL_INDEX_STALE'],
] as const) test(`Viewer publication rejects ${name} before exposing an active snapshot`, t => {
  const f = fixture(t); modify(f); f.saveMaterial();
  assert.throws(() => publishViewerSnapshot(f.options), code(expected));
  assert.equal(existsSync(path.join(f.options.artifactStore, 'active.json')), false);
});
test('Viewer publication rejects unknown changed-PCR hints and same-sequence capture substitutions', t => {
  const f = fixture(t);
  assert.throws(() => publishViewerSnapshot({ ...f.options, changedPcrIds: ['pcr.unknown.products.missing'] }), code('VIEWER_CHANGED_PCR_UNKNOWN'));
  const first = publishViewerSnapshot(f.options); const active = readFileSync(path.join(f.options.artifactStore, 'active.json'));
  assert.throws(() => publishViewerSnapshot({ ...f.options, snapshotId: 'different-identity' }), /already|identity|sequence/i);
  assert.ok(readFileSync(path.join(f.options.artifactStore, 'active.json')).equals(active));
  assert.equal(first.store.readManifest(first.manifestRef).capture.integration_commit, f.options.integrationCommit);
});
test('real Git source verification refuses mismatched commit trees without leaving output staging', t => {
  const f = fixture(t), outDir = path.join(f.output, 'display');
  assert.throws(() => buildViewer({ root: f.root, outDir, acceptedIntegrationHead: { ...acceptedHead(f.options), treeHash: 'f'.repeat(40) } }), /source|pin|verif/i);
  assert.equal(existsSync(outDir), false);
  assert.deepEqual(readdirSync(f.output), [], 'Failed output build removes its owned staging tree');
});
test('accepted source metadata cannot redirect the protected build root or artifact staging store', t => {
  const f=fixture(t),outDir=path.join(f.output,'display'),unexpected=path.join(f.output,'metadata-controlled-store');
  const built=buildViewer({root:f.root,outDir,acceptedIntegrationHead:{...acceptedHead(f.options),root:path.join(f.output,'nonexistent-other-source'),artifactStore:unexpected}});
  assert.equal(built.pcr_count,1);
  assert.equal(existsSync(unexpected),false);
  assert.ok(existsSync(outDir));
});
test('metadata extras cannot bypass real source verification or mutate existing output and external paths on failure',t=>{
  const f=fixture(t),outDir=path.join(f.output,'display'),external=path.join(f.output,'external');mkdirSync(external);writeFileSync(path.join(external,'retained.txt'),'EXTERNAL');
  buildViewer({root:f.root,outDir,acceptedIntegrationHead:acceptedHead(f.options)});
  const before=treeInventory(f.output);let hookCalls=0;
  assert.throws(()=>buildViewer({root:f.root,outDir,acceptedIntegrationHead:{...acceptedHead(f.options),treeHash:'f'.repeat(40),
    root:external,artifactStore:path.join(external,'injected-store'),generatorContractSha256:'sha256:'+'b'.repeat(64),bootstrap:false,
    sourceVerifier:()=>true,onPublicationPhase:()=>{hookCalls++;writeFileSync(path.join(external,'injected-hook.txt'),'UNAUTHORIZED');}}}),/source|pin|verif/i);
  assert.equal(hookCalls,0);
  assert.deepEqual(treeInventory(f.output),before);
});
function treeInventory(root:string):Record<string,string> {
  const result:Record<string,string>={};
  for(const entry of readdirSync(root,{recursive:true,withFileTypes:true})){const absolute=path.join(entry.parentPath,entry.name);const relative=path.relative(root,absolute);
    result[relative]=entry.isSymbolicLink()?'link:'+readlinkSync(absolute):entry.isDirectory()?'directory':hash(readFileSync(absolute));}
  return result;
}
function acceptedHead(options: ReturnType<typeof fixture>['options']): Record<string,unknown> {
  return Object.fromEntries(['snapshotId','goalId','harnessSnapshotId','sequence','sourceRef','integrationCommit','baseCommit','treeHash','capturedAt','validatedAt','validationSummary'].map(key=>[key,options[key as keyof typeof options]]));
}
test('unknown classification reference fields remain literal metadata and unavailable translations remain explicit', t => {
  const f = fixture(t), filename = path.join(f.root, f.relative, 'manifest.yaml');
  const manifest = object(parseYaml(readFileSync(filename, 'utf8'))); manifest.classification_refs = [{}]; writeFileSync(filename, renderYaml(manifest));
  rmSync(path.join(f.root, f.relative, 'pcr.zh-CN.md'));
  const data = buildViewerData({ root: f.root });
  const records = data.pcrs; assert.equal(records.length, 1);
  assert.equal(object(records[0]).id, f.id); assert.equal(object(object(records[0]).markdown)['zh-CN'], '');
  assert.ok(String(object(records[0]).search_text).includes(f.id));
});
test('bounded Viewer candidate checks require a selected identity before any source or compiler read', () => {
  assert.throws(() => checkViewerCandidates({ root: '/absent', pcrIds: [] }), code('VIEWER_CANDIDATE_REQUIRED'));
});

function contractFixture(t: TestContext, commit = true) {
  const root = ownedDirectory(t, 'viewer-generator-edge-');
  for (const relative of ['package.json', 'package-lock.json', 'tsconfig.json', 'tsconfig.viewer-browser.json', 'builder/vocab', 'builder/schemas/pcr-material-index.schema.json', 'packages/pcr-core/src', 'packages/pcr-core/schemas', 'packages/pcr-viewer/scripts', 'packages/pcr-viewer/schemas', 'packages/pcr-viewer/static']) {
    const target = path.join(root, relative); mkdirSync(path.dirname(target), { recursive: true }); cpSync(path.join(sourceRoot, relative), target, { recursive: true });
  }
  if (commit) { git(root, 'init', '-q'); git(root, 'add', '.'); git(root, '-c', 'user.name=Owned generator edge fixture', '-c', 'user.email=fixture@example.invalid', 'commit', '-qm', 'Pinned generator dependencies'); }
  return root;
}
test('Viewer generator fingerprint requires actual committed inputs and rejects a directory replacing a required file', t => {
  const missingGit = contractFixture(t, false); assert.throws(() => computeViewerGeneratorContractSha256({ contractRoot: missingGit }), code('VIEWER_GENERATOR_CONTRACT_UNTRACKED'));
  const root = contractFixture(t); rmSync(path.join(root, 'package.json')); mkdirSync(path.join(root, 'package.json'));
  assert.throws(() => computeViewerGeneratorContractSha256({ contractRoot: root }), code('VIEWER_GENERATOR_CONTRACT_UNSAFE'));
  rmSync(path.join(root, 'builder/vocab'), { recursive: true }); writeFileSync(path.join(root, 'builder/vocab'), 'not a directory');
  assert.throws(() => computeViewerGeneratorContractSha256({ contractRoot: root }), code('VIEWER_GENERATOR_CONTRACT_UNSAFE'));
});
test('Viewer generator fingerprint cannot follow substituted required files or recursively discovered source links', { skip: process.platform === 'win32' ? 'Creating symbolic links requires host privileges' : false }, t => {
  const root = contractFixture(t), packageFile = path.join(root, 'package.json'); rmSync(packageFile); symlinkSync(path.join(sourceRoot, 'package.json'), packageFile);
  assert.throws(() => computeViewerGeneratorContractSha256({ contractRoot: root }), code('VIEWER_GENERATOR_CONTRACT_UNSAFE'));
  rmSync(packageFile); cpSync(path.join(sourceRoot, 'package.json'), packageFile);
  symlinkSync(path.join(sourceRoot, 'packages/pcr-core/src/index.ts'), path.join(root, 'packages/pcr-core/src/link.ts'));
  assert.throws(() => computeViewerGeneratorContractSha256({ contractRoot: root }), /symbolic link/);
});
test('Viewer CLI preserves stable failure output and performs no publication for unsupported options or absent values', t => {
  const root = ownedDirectory(t, 'viewer-cli-edge-'), script = path.join(sourceRoot, 'packages/pcr-viewer/scripts/build-viewer-data.ts');
  for (const args of [['build', '--artifact-store', path.join(root, 'store')], ['candidate', '--root'], ['update', '--artifact-store', path.join(root, 'store'), '--format', 'json'], ['build', '--unknown', '--format', 'json'], ['build', '--format', 'human'], ['candidate', '--pcr', '--format', 'json']]) {
    const result = spawnSync(process.execPath, [script, ...args], { cwd: root, encoding: 'utf8', timeout: 30_000 });
    assert.equal(result.error, undefined); assert.equal(result.status, 1); assert.equal(result.stdout, '');
    assert.ok(result.stderr.length > 0); assert.deepEqual(readdirSync(root), []);
    if (args.includes('--format')) { const error = object(JSON.parse(result.stderr) as unknown); assert.equal(error.ok, false); assert.equal(typeof object(error.error).code, 'string'); }
  }
});
