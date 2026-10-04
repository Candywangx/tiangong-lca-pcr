import test, { type TestContext } from 'node:test';
import assert from 'node:assert/strict';
import { mkdirSync, readFileSync, renameSync, rmSync, symlinkSync, writeFileSync } from 'node:fs';
import path from 'node:path';
import { createHash } from 'node:crypto';
import { createReadSessionFixture, sealTinyLibrary, writeSessionFixtureFile } from './fixtures/read-session-fixture.ts';
import { parseYaml, renderYaml } from './src/yaml-lite.ts';
import { readClassificationCoverage, hasClassificationCoverage, findClassificationCoverageEntry, listClassificationCoverage, classificationCoveragePath, type CoverageDocument } from './src/classification-coverage.ts';
import { findPcrIdAlias, readPcrIdAliases, pcrIdAliasValidationDependencies, pcrIdAliasSourcePcrPathStates, type PcrIdAlias } from './src/pcr-id-aliases.ts';
import { buildGuidance, buildPcrTree, createFeedbackDraft, getPcrById, getPcrReadiness, listPcrs, readPcrCatalogPage, readPcrDistributionSnapshot, readPcrMarkdown, resolveClassification, resolvePcrIdentity, validateModelAgainstGuidance } from './src/index.ts';
import { OfflineLibrary } from './src/offline-library.ts';
import { withPcrSource } from './src/source-context.ts';

const coveragePath = 'classifications/indexes/cpc-3.0-coverage.json';
const leavesPath = 'classifications/systems/cpc/3.0/normalized/leaves.json';
const mappingPath = 'classifications/mappings/cpc-3.0-to-pcr.yaml';
const registryPath = 'classifications/aliases/pcr-id-aliases.yaml';
const decision = 'docs/adr/fixture-alias.md';
const legacyPath = 'library/pcrs/fixture/legacy/old';
const legacyId = 'pcr.fixture.legacy.old';
const sha = (bytes: string | Uint8Array) => 'sha256:' + createHash('sha256').update(bytes).digest('hex');
function object(value: unknown): Record<string, unknown> { assert.ok(value !== null && typeof value === 'object' && !Array.isArray(value)); return value as Record<string, unknown>; }
function coded(expected: string): (error: unknown) => boolean { return error => { assert.equal(object(error).code, expected); return true; }; }
function readCoverage(root: string) { return readClassificationCoverage({ root, system: 'cpc', version: '3.0' }); }
function updateManifest(root: string, relative: string, mutate: (value: Record<string, unknown>) => void) {
  const filename = path.join(root, relative, 'manifest.yaml'); const value = object(parseYaml(readFileSync(filename, 'utf8'))); mutate(value); writeFileSync(filename, renderYaml(value));
}
function coverageFixture(t: TestContext) {
  const fixture = createReadSessionFixture(t);
  const leaves = { classification_system: 'CPC', classification_version: '3.0', leaves: [
    { code: '01111', title: 'Wheat seed', path_codes: ['0', '01111'], path_titles: ['Agriculture', 'Wheat seed'] },
    { code: '01112', title: 'Wheat other', path_codes: ['0', '01112'], path_titles: ['Agriculture', 'Wheat other'] },
  ] };
  const acceptance = { status: 'accepted' as const, decided_by: 'fixture-maintainer', decided_at_utc: '2026-10-04T00:00:00Z', decision_ref: decision };
  const mapping = { pcr_id: fixture.id, mapping_type: 'exact' as const, confidence: 'high', acceptance };
  writeSessionFixtureFile(fixture.root, leavesPath, JSON.stringify(leaves));
  writeSessionFixtureFile(fixture.root, mappingPath, renderYaml({ schema_version: 2, classification_system: 'CPC', classification_version: '3.0', status: 'current', mappings: [{ code: '01111', label: 'Wheat seed', ...mapping }] }));
  writeSessionFixtureFile(fixture.root, decision, '# Fixture alias decision\n\nApproved for this owned test fixture only.\n');
  const coverage: CoverageDocument = { schema_version: 1, index_kind: 'classification-pcr-coverage', classification_system: 'CPC', classification_version: '3.0',
    source: { contract_version: '2', generator: 'builder/scripts/build-catalog.mjs', generator_version: '2',
      normalized_leaves: { path: leavesPath, hash_mode: 'exact_bytes', sha256: sha(readFileSync(path.join(fixture.root, leavesPath))) },
      mapping: { path: mappingPath, hash_mode: 'exact_bytes', sha256: sha(readFileSync(path.join(fixture.root, mappingPath))) } },
    summary: { total: 2, mapped: 1, unmapped: 0, candidate_suggestion: 1, manual_review: 0, unknown: 0 },
    entries: leaves.leaves.map((leaf, index) => ({ code: leaf.code, label: leaf.title, path_codes: leaf.path_codes, path_titles: leaf.path_titles,
      coverage_status: index ? 'candidate_suggestion' : 'mapped', mapping: index ? null : mapping, legacy_reference: null })) };
  const save = () => writeSessionFixtureFile(fixture.root, coveragePath, JSON.stringify(coverage)); save();
  const source = (relative: string, bytes: string) => { writeSessionFixtureFile(fixture.root, relative, bytes);
    const descriptor = relative === leavesPath ? coverage.source.normalized_leaves : coverage.source.mapping;
    descriptor.sha256 = sha(bytes); save(); };
  return { ...fixture, coverage, save, source };
}

test('coverage discovery and lookup keep unknown codes and candidate evidence distinct from accepted mapping', t => {
  const f = coverageFixture(t);
  assert.equal(hasClassificationCoverage({ root: f.root, system: 'CPC', version: '3.0' }), true);
  assert.equal(hasClassificationCoverage({ root: f.root, system: 'cpc', version: 'missing' }), false);
  assert.equal(listClassificationCoverage({ root: f.root, system: 'cpc', version: '3.0', status: 'candidate_suggestion' }).entries.length, 1);
  const entry = findClassificationCoverageEntry({ root: f.root, system: 'CPC', version: '3.0', code: '01112' });
  assert.equal(entry.mapping, null); entry.path_titles[0] = 'caller mutation';
  assert.equal(findClassificationCoverageEntry({ root: f.root, system: 'cpc', version: '3.0', code: '01112' }).path_titles[0], 'Agriculture');
  const candidate = resolveClassification({ root: f.root, system: 'cpc', version: '3.0', code: '01112' });
  assert.equal(candidate.pcr, null); assert.equal(candidate.mapping, null);
  assert.throws(() => findClassificationCoverageEntry({ root: f.root, system: 'cpc', version: '3.0', code: '99999' }), coded('PCR_CLASSIFICATION_CODE_UNKNOWN'));
  assert.throws(() => listClassificationCoverage({ root: f.root, system: 'cpc', version: '3.0', status: 'approved' }), coded('PCR_INVALID_CLASSIFICATION_COVERAGE_STATUS'));
  for (const coordinate of [{ system: '../outside', version: '3.0' }, { system: 'cpc', version: '../outside' }]) assert.throws(() => classificationCoveragePath({ root: f.root, ...coordinate }), /Unsupported classification/);
});

for (const [name, relative, mutate, expected] of [
  ['malformed leaf JSON', leavesPath, () => '{', 'not valid JSON'],
  ['malformed mapping YAML', mappingPath, () => 'mappings: [unterminated', 'not valid YAML'],
  ['leaf coordinate drift', leavesPath, (value: Record<string, unknown>) => { value.classification_version = '4.0'; }, 'normalized_leaves coordinate'],
  ['mapping coordinate drift', mappingPath, (value: Record<string, unknown>) => { value.classification_system = 'hs'; }, 'mapping coordinate'],
  ['legacy source mapping', mappingPath, (value: Record<string, unknown>) => { value.schema_version = 1; }, 'accepted-only'],
  ['missing normalized inventory', leavesPath, (value: Record<string, unknown>) => { value.leaves = null; }, 'leaves must be an array'],
  ['missing mapping inventory', mappingPath, (value: Record<string, unknown>) => { value.mappings = null; }, 'mappings must be an array'],
  ['normalized leaf without identity', leavesPath, (value: Record<string, unknown>) => { value.leaves = [{}]; }, 'leaf without a code'],
  ['unprojectable normalized leaf', leavesPath, (value: Record<string, unknown>) => { value.leaves = [{ code: '01111', title: 'Wheat', path_codes: ['0'] }]; }, 'cannot be projected deterministically'],
  ['duplicate normalized identity', leavesPath, (value: Record<string, unknown>) => { const leaves = value.leaves; assert.ok(Array.isArray(leaves)); leaves.push(leaves[0]); }, 'duplicate code'],
  ['mapping edge without identity', mappingPath, (value: Record<string, unknown>) => { value.mappings = [{}]; }, 'edge without a code'],
  ['mapping outside normalized inventory', mappingPath, (value: Record<string, unknown>) => { const mappings = value.mappings; assert.ok(Array.isArray(mappings)); object(mappings[0]).code = '99999'; }, 'absent from normalized leaves'],
  ['duplicate mapping identity', mappingPath, (value: Record<string, unknown>) => { const mappings = value.mappings; assert.ok(Array.isArray(mappings)); mappings.push(mappings[0]); }, 'duplicate code'],
] as const) {
  test(`coverage rejects ${name} even after rebinding exact source hashes`, t => {
    const f = coverageFixture(t);
    const value = object(relative === leavesPath ? JSON.parse(readFileSync(path.join(f.root, relative), 'utf8')) as unknown : parseYaml(readFileSync(path.join(f.root, relative), 'utf8')));
    const replacement = mutate(value); f.source(relative, typeof replacement === 'string' ? replacement : relative === leavesPath ? JSON.stringify(value) : renderYaml(value));
    assert.throws(() => readCoverage(f.root), error => { const failure = object(error); assert.equal(failure.code, 'PCR_INVALID_CLASSIFICATION_COVERAGE'); assert.match(String(failure.message), new RegExp(expected)); return true; });
    assert.throws(() => resolveClassification({ root: f.root, system: 'cpc', version: '3.0', code: '01111' }), coded('PCR_INVALID_CLASSIFICATION_COVERAGE'));
  });
}

test('coverage rejects duplicate entries, mismatched hierarchy lengths and inconsistent totals before resolving PCRs', t => {
  const f = coverageFixture(t);
  f.coverage.entries[1]!.code = f.coverage.entries[0]!.code; f.coverage.entries[1]!.path_titles = ['only one']; f.coverage.summary.total = 99; f.save();
  assert.throws(() => readCoverage(f.root), error => { assert.match(String(object(error).message), /duplicate entry code/); assert.match(String(object(error).message), /mismatched path_codes/); assert.match(String(object(error).message), /summary.total/); return true; });
});
test('coverage index itself must be readable JSON in a regular canonical file', t => {
  const f = coverageFixture(t); const filename = path.join(f.root, coveragePath);
  writeFileSync(filename, '{'); assert.throws(() => readCoverage(f.root), /invalid JSON/);
  rmSync(filename); mkdirSync(filename); assert.throws(() => readCoverage(f.root), /not a regular file/);
});
test('coverage index symbolic-link substitution is rejected before its canonical source can authorize mapping', { skip: process.platform === 'win32' ? 'Creating file symbolic links requires host privileges on Windows' : false }, t => {
  const f = coverageFixture(t); const filename = path.join(f.root, coveragePath), outside = path.join(f.root, 'copied-index.json');
  writeFileSync(outside, readFileSync(filename)); rmSync(filename); symlinkSync(outside, filename);
  assert.throws(() => readCoverage(f.root), coded('PCR_INVALID_CLASSIFICATION_COVERAGE'));
});

function aliasFixture(t: TestContext, coverageTarget = false) {
  const f = coverageFixture(t);
  const alias: PcrIdAlias = { source_pcr_id: legacyId, source_pcr_path: legacyPath, target: coverageTarget ? { kind: 'classification_coverage', classification_system: 'cpc', classification_version: '3.0', code: '01112' } : { kind: 'canonical_pcr', pcr_id: f.id }, reason: coverageTarget ? 'empty_scaffold_migration' : 'canonical_pcr_replacement', decision_ref: decision + '#fixture' };
  const registry = renderYaml({ schema_version: 1, registry_kind: 'legacy-pcr-id-aliases', status: 'current', aliases: [alias] });
  writeSessionFixtureFile(f.root, registryPath, registry);
  const catalog = object(parseYaml(readFileSync(path.join(f.root, 'library/catalog.yaml'), 'utf8')));
  catalog.pcr_id_aliases = { path: registryPath, hash_mode: 'exact_bytes', sha256: sha(registry), entry_count: 1 };
  const saveCatalog = () => writeSessionFixtureFile(f.root, 'library/catalog.yaml', renderYaml(catalog)); saveCatalog();
  return { ...f, alias, catalog, saveCatalog };
}
for (const [name, change, expected] of [
  ['extra binding authority', (binding: Record<string, unknown>) => { binding.trusted = true; }, 'unsupported fields'],
  ['alternate registry locator', (binding: Record<string, unknown>) => { binding.path = 'classifications/aliases/alternative.yaml'; }, 'path must be'],
  ['semantic hash mode', (binding: Record<string, unknown>) => { binding.hash_mode = 'semantic'; }, 'hash_mode must be exact_bytes'],
  ['uppercase digest', (binding: Record<string, unknown>) => { binding.sha256 = 'sha256:' + 'A'.repeat(64); }, 'lowercase'],
  ['fractional alias count', (binding: Record<string, unknown>) => { binding.entry_count = 0.5; }, 'safe integer'],
  ['rebinding wrong count', (binding: Record<string, unknown>) => { binding.entry_count = 2; }, 'entry_count mismatch'],
] as const) test(`terminal alias rejects ${name} without redirecting a consumer`, t => {
  const f = aliasFixture(t); change(object(f.catalog.pcr_id_aliases)); f.saveCatalog();
  assert.throws(() => readPcrIdAliases({ root: f.root }), new RegExp(expected));
  assert.throws(() => resolvePcrIdentity({ root: f.root, pcrId: legacyId }), coded('PCR_INVALID_PCR_ID_ALIASES'));
});

test('canonical redirects expose a next command while preserving source path state and validation evidence', t => {
  const f = aliasFixture(t);
  assert.deepEqual(pcrIdAliasSourcePcrPathStates({ root: f.root }), [{ path: legacyPath, state: 'absent' }]);
  assert.deepEqual(pcrIdAliasValidationDependencies({ root: f.root }), [registryPath, decision, f.relative + '/manifest.yaml'].sort());
  const result = resolvePcrIdentity({ root: f.root, pcrId: legacyId });
  assert.equal(result.pcr, null); assert.equal(result.resolution_status, 'legacy_id_redirect');
  assert.ok(result.redirect!.next_command.includes('resolve --pcr '+f.id));
  assert.throws(() => findPcrIdAlias({ root: f.root, pcrId: '../invalid' }), coded('PCR_INVALID_PCR_ID_ALIASES'));
  mkdirSync(path.join(f.root, legacyPath), { recursive: true });
  assert.deepEqual(pcrIdAliasSourcePcrPathStates({ root: f.root }), [{ path: legacyPath, state: 'directory' }]);
  assert.throws(() => readPcrIdAliases({ root: f.root }), /exactly one canonical manifest/);
});
test('alias source state differentiates a file and a non-directory ancestor from a removed legacy PCR', t => {
  const f = aliasFixture(t); writeSessionFixtureFile(f.root, legacyPath, 'replacement regular file');
  assert.deepEqual(pcrIdAliasSourcePcrPathStates({ root: f.root }), [{ path: legacyPath, state: 'regular_file' }]);
  assert.throws(() => readPcrIdAliases({ root: f.root }), coded('PCR_INVALID_PCR_ID_ALIASES'));
  rmSync(path.dirname(path.join(f.root, legacyPath)), { recursive: true }); writeFileSync(path.dirname(path.join(f.root, legacyPath)), 'ancestor replaced');
  assert.deepEqual(pcrIdAliasSourcePcrPathStates({ root: f.root }), [{ path: legacyPath, state: 'parent_not_directory' }]);
  assert.throws(() => readPcrIdAliases({ root: f.root }), coded('PCR_INVALID_PCR_ID_ALIASES'));
});
test('classification aliases include leaf evidence and reject malformed normalized target coordinates', t => {
  const f = aliasFixture(t, true);
  assert.ok(pcrIdAliasValidationDependencies({ root: f.root }).includes(leavesPath));
  assert.equal(readPcrIdAliases({ root: f.root }).length, 1);
  f.source(leavesPath, JSON.stringify({ classification_system: 'hs', classification_version: '3.0', leaves: [] }));
  assert.throws(() => readPcrIdAliases({ root: f.root }), /invalid classification coordinate/);
});
test('a retained legacy alias manifest with unknown lifecycle cannot become an accepted redirect', t => {
  const f = aliasFixture(t); writeSessionFixtureFile(f.root, legacyPath + '/manifest.yaml', renderYaml({ id: legacyId, status: 'unknown', content_maturity: 'empty_scaffold' }));
  assert.throws(() => readPcrIdAliases({ root: f.root }), /invalid lifecycle identity/);
  updateManifest(f.root, f.relative, value => { value.status = 'scaffold'; value.content_maturity = 'empty_scaffold'; });
  assert.throws(() => readPcrIdAliases({ root: f.root }), /not a material PCR/);
});


test('malformed or scalar catalogs cannot establish alias-binding authority', t => {
  const f=aliasFixture(t);
  for(const bytes of ['catalog: [unterminated','null']) {
    writeFileSync(path.join(f.root,'library/catalog.yaml'),bytes);
    assert.throws(()=>readPcrIdAliases({root:f.root}),coded('PCR_INVALID_PCR_ID_ALIASES'));
  }
});
test('alias source symbolic links are distinguishable from absent legacy records and rejected', {skip:process.platform==='win32'?'Creating directory symbolic links requires host privileges on Windows':false}, t=>{
  const f=aliasFixture(t);const source=path.join(f.root,legacyPath);mkdirSync(path.dirname(source),{recursive:true});
  symlinkSync(path.join(f.root,f.relative),source,'dir');
  assert.deepEqual(pcrIdAliasSourcePcrPathStates({root:f.root}),[{path:legacyPath,state:'symbolic_link'}]);
  assert.throws(()=>readPcrIdAliases({root:f.root}),coded('PCR_INVALID_PCR_ID_ALIASES'));
});

for (const [name, alter, issue] of [
  ['missing structured artifact', (f: ReturnType<typeof createReadSessionFixture>) => rmSync(path.join(f.root, f.relative, 'structured.yaml')), 'structured_projection_missing'],
  ['malformed structured YAML', (f: ReturnType<typeof createReadSessionFixture>) => writeFileSync(path.join(f.root, f.relative, 'structured.yaml'), 'unterminated: ['), 'structured_projection_parse_error'],
  ['nonregular canonical source', (f: ReturnType<typeof createReadSessionFixture>) => { const filename = path.join(f.root, f.relative, 'pcr.en-US.md'); rmSync(filename); mkdirSync(filename); }, 'projection_source_unreadable'],
] as const) test(`a material PCR with ${name} remains unavailable to guidance`, t => {
  const f = createReadSessionFixture(t); alter(f);
  const readiness = getPcrReadiness({ root: f.root, pcrId: f.id, refresh: true });
  assert.equal(readiness.status, 'unavailable'); assert.ok(readiness.blockers.some(blocker => blocker.code === issue));
  assert.throws(() => buildGuidance({ root: f.root, pcrId: f.id }), coded('PCR_NOT_USABLE_FOR_GUIDANCE'));
});
test('cached PCR identities cannot survive replacement or removal of their canonical leaf', t => {
  const f = createReadSessionFixture(t); getPcrById({ root: f.root, pcrId: f.id });
  updateManifest(f.root, f.relative, value => { value.id = 'pcr.fixture.replaced'; });
  assert.throws(() => getPcrById({ root: f.root, pcrId: f.id }), coded('PCR_CURRENT_SNAPSHOT_INCONSISTENT'));
  renameSync(path.join(f.root, f.relative), path.join(f.root, 'retained-leaf'));
  assert.throws(() => getPcrById({ root: f.root, pcrId: f.id }), coded('PCR_CURRENT_SNAPSHOT_INCONSISTENT'));
});
test('unsupported language metadata and undeclared Markdown cannot silently become an empty document', t => {
  const f = createReadSessionFixture(t);
  assert.throws(() => readPcrMarkdown({ root: f.root, pcrId: f.id, language: 'de-DE' }), /PCR Markdown not found/);
  updateManifest(f.root, f.relative, value => { value.languages = { canonical: 42, available: ['en-US', 7] }; });
  assert.throws(() => getPcrById({ root: f.root, pcrId: f.id, refresh: true }), coded('PCR_CURRENT_SNAPSHOT_INCONSISTENT'));
});
test('SQLite-backed catalog pages and complete trees preserve the verified repository record identity', t => {
  const f = createReadSessionFixture(t, { includeSecond: true });
  const snapshots = [f.id, f.secondId].map(pcrId => readPcrDistributionSnapshot({ root: f.root, pcrId }));
  const sealed = sealTinyLibrary(f.root, 'boundary.sqlite', snapshots, '0.1.0');
  const library = new OfflineLibrary(sealed.filename);
  try { withPcrSource(library.root, library, () => {
    assert.equal(listPcrs({ root: library.root, scope: 'material' }).length, 2);
    const page = readPcrCatalogPage({ root: library.root, scope: 'material', pathPrefix: 'session', offset: 0, limit: 1 });
    assert.equal(page.totalCount, 1); assert.equal(page.items[0]?.id, f.secondId);
    const full = buildPcrTree({ root: library.root, scope: 'material' });
    assert.equal(full.session?.children.crops?.children['wheat-seed-two']?.pcrs[0]?.id, f.secondId);
    assert.deepEqual(buildPcrTree({ root: library.root, depth: 0 }), {});
    assert.equal(buildPcrTree({ root: library.root, depth: 1 }).session?.pcrs.length, 0);
    assert.throws(() => readPcrMarkdown({ root: library.root, pcrId: f.id, language: 'zh-CN' }), coded('PCR_LIBRARY_LANGUAGE_UNAVAILABLE'));
  }); } finally { library.close(); }
});
test('invalid compatibility-validator input and unsupported feedback types never claim validation or create content', t => {
  const f = createReadSessionFixture(t);
  const result = validateModelAgainstGuidance({ root: f.root, pcrId: f.id, model: 42 });
  assert.equal(result.validation_status, 'failed'); assert.equal(result.input.accepted,false); assert.ok(result.findings.some(finding => finding.code === 'invalid_model_input'));
  assert.throws(() => createFeedbackDraft({ root: f.root, pcrId: f.id, type: 'unapproved-kind' }), /Unsupported feedback type/);
});
