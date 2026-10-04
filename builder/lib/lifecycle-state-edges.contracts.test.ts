import assert from 'node:assert/strict';
import { existsSync, mkdirSync, mkdtempSync, readFileSync, readdirSync, readlinkSync, realpathSync, rmSync, symlinkSync, writeFileSync } from 'node:fs';
import { tmpdir } from 'node:os';
import path from 'node:path';
import test, { type TestContext } from 'node:test';
import { parseYaml, renderYaml } from '../../packages/pcr-core/src/yaml-lite.ts';
import { isUnknownRecord, type UnknownRecord } from '../../packages/pcr-core/src/types.ts';
import { byteSha256 } from './artifact-hashes.ts';
import { bump, lifecycle, publish, revise, syncStructured } from './manifest-lifecycle.ts';
import { createAuthoringPcr } from './pcr-authoring-fixture.ts';
import { buildReleaseRecord, inspectPublishedRevisionState } from './published-revision-state.ts';

function object(value: unknown): UnknownRecord { assert.ok(isUnknownRecord(value)); return value; }
function yaml(file: string) { return object(parseYaml(readFileSync(file, 'utf8'))); }
function writeYaml(file: string, value: unknown) { writeFileSync(file, renderYaml(value)); }
function tree(root: string) {
  const result: Record<string, Buffer | string> = {};
  function visit(relative: string) {
    for (const entry of readdirSync(path.join(root, relative), { withFileTypes: true }).sort((a, b) => a.name.localeCompare(b.name))) {
      const key = relative ? relative + '/' + entry.name : entry.name;
      if (entry.isSymbolicLink()) result[key] = 'symlink:' + readlinkSync(path.join(root, key));
      else if (entry.isDirectory()) { result[key] = 'directory'; visit(key); }
      else result[key] = readFileSync(path.join(root, key));
    }
  }
  visit(''); return result;
}
function fixture(t: TestContext, { optional = false, published = false, revision = false } = {}) {
  const root = realpathSync(mkdtempSync(path.join(tmpdir(), 'pcr-lifecycle-state-edge-'))); t.after(() => rmSync(root, { recursive: true, force: true }));
  const f = createAuthoringPcr(root, optional ? { schemaVersion: 2, languages: ['en-US', 'zh-CN', 'de-DE'], titles: { 'en-US': 'Wheat seed production', 'zh-CN': '小麦种子生产', 'de-DE': 'Weizen-Saatgutproduktion' }, optionalTranslations: { 'de-DE': 'reviewed' } } : {});
  if (published || revision) { lifecycle({ root, pcr: f.libraryPath, status: 'active', 'content-maturity': 'reviewed_methodology', translation: 'zh-CN=reviewed' }); publish({ root, pcr: f.libraryPath, version: '1.0.0' }); }
  if (revision) revise({ root, pcr: f.libraryPath, version: '1.1.0' });
  return { ...f, root, manifest: path.join(f.pcrDir, 'manifest.yaml'), history: path.join(f.pcrDir, 'release-history.yaml'), release: path.join(f.pcrDir, 'releases/1.0.0'), revisionDir: path.join(f.pcrDir, 'revision') };
}
function refused(f: ReturnType<typeof fixture>, operation: () => unknown, expected: RegExp) {
  const before = tree(f.pcrDir); assert.throws(operation, expected); assert.deepEqual(tree(f.pcrDir), before, 'Failed operation must preserve every current/history/revision byte and path.');
}
function inspect(f: ReturnType<typeof fixture>) { return inspectPublishedRevisionState({ root: f.root, pcrDir: f.pcrDir }); }
function historyEntries(history: UnknownRecord) { assert.ok(Array.isArray(history.releases)); return history.releases.map(object); }
function updateHistoryReleaseHash(f: ReturnType<typeof fixture>, version: string) {
  const value = yaml(f.history), entries = historyEntries(value); const entry = entries.find(value => value.version === version); assert.ok(entry);
  entry.release_sha256 = byteSha256(readFileSync(path.join(f.pcrDir, 'releases', version, 'release.yaml'))); value.releases = entries; writeYaml(f.history, value);
}

for (const [level, expected] of [['major', '1.0.0'], ['minor', '0.10.0'], ['patch', '0.9.1']] as const) test(`unpublished ${level} bump drops a prerelease suffix while preserving all methodology and translation bytes`, t => {
  const f = fixture(t), manifest = yaml(f.manifest); manifest.version = '0.9.0-rc.2'; writeYaml(f.manifest, manifest);
  const before = tree(f.pcrDir); bump({ root: f.root, pcr: f.libraryPath, level });
  assert.equal(yaml(f.manifest).version, expected); const after = tree(f.pcrDir); delete before['manifest.yaml']; delete after['manifest.yaml']; assert.deepEqual(after, before);
  assert.deepEqual(yaml(f.manifest).translation_status, manifest.translation_status); assert.equal(yaml(f.manifest).status, manifest.status);
});
for (const translation of [' =reviewed', 'zh-CN=reviewed=extra']) test(`malformed translation ${JSON.stringify(translation)} is rejected before changing a reviewed candidate`, t => {
  const f = fixture(t); refused(f, () => lifecycle({ root: f.root, pcr: f.libraryPath, translation }), /--translation/u);
});

test('deprecating an optional-language published PCR changes only the canonical lifecycle overlay and preserves every immutable release byte', t => {
  const f = fixture(t, { optional: true, published: true }), archived = tree(f.release), history = readFileSync(f.history), before = yaml(f.manifest);
  lifecycle({ root: f.root, pcr: f.libraryPath, status: 'deprecated', 'content-maturity': 'deprecated_methodology' });
  const current = yaml(f.manifest); assert.deepEqual(current, { ...before, status: 'deprecated', content_maturity: 'deprecated_methodology', updated_at_utc: current.updated_at_utc });
  assert.deepEqual(tree(f.release), archived); assert.deepEqual(readFileSync(f.history), history); assert.deepEqual(inspect(f).problems, []);
  refused(f, () => lifecycle({ root: f.root, pcr: f.libraryPath, translation: 'de-DE=aligned' }), /Deprecated current state is immutable/u);
  refused(f, () => revise({ root: f.root, pcr: f.libraryPath, version: '1.1.0' }), /requires current status published/u);
});
for (const status of ['published', 'deprecated']) test(`a legacy ${status} flag without managed history cannot authorize revision or silent history adoption`, t => {
  const f = fixture(t), manifest = yaml(f.manifest); manifest.status = status; manifest.content_maturity = status === 'published' ? 'published_methodology' : 'deprecated_methodology'; manifest.published_at_utc = '2026-01-01T00:00:00Z'; writeYaml(f.manifest, manifest);
  assert.ok(inspect(f).problems.some(value => value.includes('explicit legacy adoption')));
  refused(f, () => revise({ root: f.root, pcr: f.libraryPath, version: '1.0.0' }), /legacy publication must be adopted explicitly/u);
  assert.equal(existsSync(f.history), false); assert.equal(existsSync(f.revisionDir), false);
});
for (const managed of ['release-history.yaml', 'releases', 'revision']) test(`a partial managed ${managed} cannot be normalized away by sync`, t => {
  const f = fixture(t); if (managed === 'release-history.yaml') writeYaml(f.history, { schema_version: 1, pcr_id: yaml(f.manifest).id, current_version: '1.0.0', releases: [] }); else mkdirSync(path.join(f.pcrDir, managed));
  assert.ok(inspect(f).problems.some(value => value.includes('requires both release-history.yaml and releases/')));
  refused(f, () => syncStructured({ root: f.root, pcr: f.libraryPath }), /managed release state requires both/u);
});

const revisionChanges: readonly [string, string, (value: UnknownRecord) => void, RegExp][] = [
  ['foreign PCR identity', 'revision.yaml', value => { value.pcr_id = 'pcr.foreign.crops.wheat'; }, /revision pcr_id must/u],
  ['foreign next identity', 'manifest.next.yaml', value => { value.id = 'pcr.foreign.crops.wheat'; }, /next manifest id must/u],
  ['nonexistent calendar date', 'revision.yaml', value => { value.opened_at_utc = '2026-02-31T00:00:00Z'; }, /opened_at_utc is not a real/u],
  ['premature publication timestamp', 'manifest.next.yaml', value => { value.published_at_utc = '2026-01-01T00:00:00Z'; }, /revision manifest must not contain published_at_utc/u],
  ['reused published fingerprints', 'manifest.next.yaml', value => { value.release_artifacts = { pcr_en_us_sha256: byteSha256('old'), pcr_zh_cn_sha256: byteSha256('old'), structured_sha256: byteSha256('old') }; }, /revision manifest must not contain release_artifacts/u],
];
for (const [name, file, change, finding] of revisionChanges) test(`an open revision with ${name} cannot mutate either workspace`, t => {
  const f = fixture(t, { revision: true }), target = path.join(f.revisionDir, file), value = yaml(target); change(value); writeYaml(target, value);
  assert.ok(inspect(f).problems.some(problem => finding.test(problem)), inspect(f).problems.join('\n'));
  refused(f, () => syncStructured({ root: f.root, pcr: f.libraryPath, workspace: 'revision' }), finding);
});
test('an open revision prevents even the normally allowed current deprecation overlay', t => {
  const f = fixture(t, { revision: true }); refused(f, () => lifecycle({ root: f.root, pcr: f.libraryPath, status: 'deprecated', 'content-maturity': 'deprecated_methodology' }), /Cannot change current lifecycle while a revision workspace is open/u);
});
test('the fixed revision target and separate aligned/reviewed Chinese gates preserve the last published release', t => {
  const f = fixture(t, { revision: true });
  refused(f, () => lifecycle({ root: f.root, pcr: f.libraryPath, workspace: 'revision', status: 'active', 'content-maturity': 'reviewed_methodology' }), /translation_status.zh-CN to be aligned or reviewed/u);
  lifecycle({ root: f.root, pcr: f.libraryPath, workspace: 'revision', status: 'active', 'content-maturity': 'reviewed_methodology', translation: 'zh-CN=aligned' });
  refused(f, () => publish({ root: f.root, pcr: f.libraryPath, workspace: 'revision', version: '2.0.0' }), /target version locked in revision.yaml/u);
  refused(f, () => publish({ root: f.root, pcr: f.libraryPath, workspace: 'revision' }), /translation_status.zh-CN/u);
  assert.equal(existsSync(path.join(f.pcrDir, 'releases/1.1.0')), false);
});

test('removing a released optional language cannot be concealed by recomputing current artifact hashes', t => {
  const f = fixture(t, { optional: true, published: true }), value = yaml(f.manifest), artifacts = object(value.release_artifacts), hashes = object(artifacts.markdown_sha256);
  value.languages = { canonical: 'en-US', available: ['en-US', 'zh-CN'] }; const statuses = object(value.translation_status); delete statuses['de-DE']; value.translation_status = statuses;
  const titles = object(value.title); delete titles['de-DE']; value.title = titles; delete hashes['de-DE']; artifacts.markdown_sha256 = hashes; value.release_artifacts = artifacts; writeYaml(f.manifest, value); rmSync(path.join(f.pcrDir, 'pcr.de-DE.md'));
  assert.ok(inspect(f).problems.some(value => value.includes('must declare released language de-DE'))); refused(f, () => revise({ root: f.root, pcr: f.libraryPath, version: '1.1.0' }), /must declare released language de-DE/u);
});
test('legacy artifact field names cannot be forged onto a v2 managed current release', t => {
  const f = fixture(t, { optional: true, published: true }), value = yaml(f.manifest);
  value.release_artifacts = { pcr_en_us_sha256: byteSha256(readFileSync(path.join(f.pcrDir, 'pcr.en-US.md'))), pcr_zh_cn_sha256: byteSha256(readFileSync(path.join(f.pcrDir, 'pcr.zh-CN.md'))), structured_sha256: byteSha256(readFileSync(path.join(f.pcrDir, 'structured.yaml'))) }; writeYaml(f.manifest, value);
  assert.ok(inspect(f).problems.some(value => value.includes('shape must match the latest release'))); refused(f, () => revise({ root: f.root, pcr: f.libraryPath, version: '1.1.0' }), /shape must match the latest release/u);
});
for (const [field, wrong] of [['pcr_id', 'pcr.other.crops.wheat'], ['version', '9.0.0']] as const) test(`rehashing release ${field} cannot detach it from the recorded source identity`, t => {
  const f = fixture(t, { published: true }), file = path.join(f.release, 'release.yaml'), value = yaml(file); value[field] = wrong; writeYaml(file, value); updateHistoryReleaseHash(f, '1.0.0');
  const finding = new RegExp(`${field} must be`); assert.ok(inspect(f).problems.some(value => finding.test(value)));
  refused(f, () => revise({ root: f.root, pcr: f.libraryPath, version: '1.1.0' }), finding);
});
for (const alteration of ['missing declared language', 'extra undeclared language']) test(`rehashing a v2 release cannot authorize ${alteration} in its fingerprint map`, t => {
  const f = fixture(t, { optional: true, published: true }), file = path.join(f.release, 'release.yaml'), value = yaml(file), artifacts = object(value.artifacts), hashes = object(artifacts.markdown_sha256);
  if (alteration === 'missing declared language') delete hashes['de-DE']; else hashes['fr-FR'] = byteSha256('undeclared French');
  artifacts.markdown_sha256 = hashes; value.artifacts = artifacts; writeYaml(file, value); updateHistoryReleaseHash(f, '1.0.0');
  assert.ok(inspect(f).problems.some(value => /markdown_sha256 keys must match .*languages.available exactly/u.test(value)), inspect(f).problems.join('\n'));
  refused(f, () => revise({ root: f.root, pcr: f.libraryPath, version: '1.1.0' }), /language|release state/u);
});

test('a self-consistently rehashed successor release still cannot precede its predecessor in time', t => {
  const f = fixture(t, { revision: true }); lifecycle({ root: f.root, pcr: f.libraryPath, workspace: 'revision', status: 'active', 'content-maturity': 'reviewed_methodology', translation: 'zh-CN=reviewed' }); publish({ root: f.root, pcr: f.libraryPath, workspace: 'revision' });
  const releaseDir = path.join(f.pcrDir, 'releases/1.1.0'), snapshotFile = path.join(releaseDir, 'manifest.snapshot.yaml'), snapshot = yaml(snapshotFile), oldTime = '2000-01-01T00:00:00Z'; snapshot.published_at_utc = oldTime; snapshot.updated_at_utc = oldTime; const manifestText = renderYaml(snapshot); writeFileSync(snapshotFile, manifestText); writeFileSync(f.manifest, manifestText);
  const release = buildReleaseRecord({ pcrId: String(snapshot.id), version: '1.1.0', publishedAtUtc: oldTime, predecessorVersion: '1.0.0', manifestText, englishText: readFileSync(path.join(releaseDir, 'pcr.en-US.md'), 'utf8'), chineseText: readFileSync(path.join(releaseDir, 'pcr.zh-CN.md'), 'utf8'), structuredText: readFileSync(path.join(releaseDir, 'structured.yaml'), 'utf8') }); writeFileSync(path.join(releaseDir, 'release.yaml'), release.releaseText);
  const history = yaml(f.history), entries = historyEntries(history); entries[1] = release.historyEntry; history.releases = entries; writeYaml(f.history, history);
  assert.ok(inspect(f).problems.some(value => value.includes('must not precede the prior release'))); refused(f, () => revise({ root: f.root, pcr: f.libraryPath, version: '1.2.0' }), /must not precede the prior release/u);
});

for (const substitution of ['release-file', 'history-directory', 'revision-symlink'] as const) test(`${substitution} managed state is refused without changing outside or published artifacts`, t => {
  const f = fixture(t, { published: true }); const outside = path.join(f.root, 'outside'); mkdirSync(outside); writeFileSync(path.join(outside, 'keep'), 'operator bytes');
  if (substitution === 'release-file') { rmSync(f.release, { recursive: true }); writeFileSync(f.release, 'not a directory'); }
  if (substitution === 'history-directory') { rmSync(f.history); mkdirSync(f.history); }
  if (substitution === 'revision-symlink') symlinkSync(outside, f.revisionDir, 'dir');
  assert.ok(inspect(f).problems.length > 0); refused(f, () => revise({ root: f.root, pcr: f.libraryPath, version: '1.1.0' }), /preflight failed/u);
  assert.equal(readFileSync(path.join(outside, 'keep'), 'utf8'), 'operator bytes');
});
for (const target of ['file', 'outside-link'] as const) test(`the mutation source must resolve to an owned canonical PCR leaf rather than ${target}`, t => {
  const f = fixture(t), outside = realpathSync(mkdtempSync(path.join(tmpdir(), 'pcr-lifecycle-outside-'))); t.after(() => rmSync(outside, { recursive: true, force: true })); writeFileSync(path.join(outside, 'keep'), 'outside bytes');
  const bad = path.join(f.root, 'library/pcrs/foreign'); if (target === 'file') writeFileSync(bad, 'regular file'); else symlinkSync(outside, bad, 'dir');
  const before = tree(f.pcrDir); assert.throws(() => syncStructured({ root: f.root, pcr: bad }), /not a directory|resolves outside/u); assert.deepEqual(tree(f.pcrDir), before); assert.equal(readFileSync(path.join(outside, 'keep'), 'utf8'), 'outside bytes');
});
test('canonical Markdown identity substitution cannot be approved solely through an active manifest', t => {
  const f = fixture(t); lifecycle({ root: f.root, pcr: f.libraryPath, status: 'active', 'content-maturity': 'reviewed_methodology', translation: 'zh-CN=reviewed' });
  const english = path.join(f.pcrDir, 'pcr.en-US.md'); writeFileSync(english, readFileSync(english, 'utf8').replace('pcr_id: pcr.agriculture.crops.wheat-seed', 'pcr_id: pcr.foreign.crops.wheat'));
  refused(f, () => publish({ root: f.root, pcr: f.libraryPath, version: '1.0.0' }), /pcr_id|identity/u); assert.equal(existsSync(f.history), false);
});
for (const [file, alteration] of [['pcr.en-US.md', 'missing'], ['pcr.en-US.md', 'scalar'], ['pcr.zh-CN.md', 'scalar']] as const) test(`${file} ${alteration} frontmatter cannot be implicitly repaired into an approved first publication`, t => {
  const f = fixture(t); lifecycle({ root: f.root, pcr: f.libraryPath, status: 'active', 'content-maturity': 'reviewed_methodology', translation: 'zh-CN=reviewed' });
  const target = path.join(f.pcrDir, file), text = readFileSync(target, 'utf8'); assert.match(text, /^---\n/u);
  writeFileSync(target, text.replace(/^---\n[\s\S]*?\n---\n/u, alteration === 'missing' ? '' : '---\nscalar frontmatter\n---\n'));
  refused(f, () => publish({ root: f.root, pcr: f.libraryPath, version: '1.0.0' }), /preflight failed/u); assert.equal(existsSync(f.history), false);
});
for (const file of ['structured.yaml', 'pcr.en-US.md']) test(`a missing current published ${file} is not silently reconstructed from its valid immutable snapshot`, t => {
  const f = fixture(t, { published: true }), archived = tree(f.release); rmSync(path.join(f.pcrDir, file));
  assert.ok(inspect(f).problems.some(value => value.includes(file) && value.includes('required file is missing')));
  refused(f, () => revise({ root: f.root, pcr: f.libraryPath, version: '1.1.0' }), /required file is missing/u); assert.deepEqual(tree(f.release), archived); assert.equal(existsSync(path.join(f.pcrDir, file)), false);
});
test('downgrading only the managed current lifecycle flags cannot make its published bytes mutable again', t => {
  const f = fixture(t, { published: true }), manifest = yaml(f.manifest); manifest.status = 'active'; manifest.content_maturity = 'reviewed_methodology'; writeYaml(f.manifest, manifest);
  assert.ok(inspect(f).problems.some(value => value.includes('managed current release must be published or deprecated')));
  refused(f, () => bump({ root: f.root, pcr: f.libraryPath, level: 'patch' }), /managed current release must be published or deprecated/u);
});
