import test from 'node:test';
import assert from 'node:assert/strict';
import { mkdtempSync, mkdirSync, writeFileSync, readFileSync, rmSync, realpathSync, symlinkSync } from 'node:fs';
import { tmpdir } from 'node:os';
import path from 'node:path';
import { spawnSync } from 'node:child_process';
import { checkModule, exportModule, findModules, json, moduleDirectory, projectModule, projectionYaml, readModule, readRegular, sha256, verifyModulePackage, verifyOriginals, verifyFactorSources, type Expectations } from '../../packages/pcr-core/src/method-module.ts';

const TARGET = 'library/modules/environmental-footprint/pef-2021-ef31';
const source: Record<string, string> = { ...readModule(path.resolve(TARGET)), 'review.json': json({ schema_version: 1, records: [], limitations: ['Synthetic unreviewed test input; actual source reviews are not fixture authority.'] }) };
function withModule(run: (root: string, dir: string, files: Record<string, string>) => void): void {
  const root = mkdtempSync(path.join(realpathSync(tmpdir()), 'pcr-method-test-')), dir = path.join(root, TARGET), files = { ...source };
  mkdirSync(dir, { recursive: true });
  try { for (const [name, bytes] of Object.entries(files)) writeFileSync(path.join(dir, name), bytes); writeFileSync(path.join(dir, 'structured.yaml'), projectionYaml(projectModule(files))); run(root, dir, files); }
  finally { rmSync(root, { recursive: true, force: true }); }
}
function reviewed(files: Record<string, string>): Record<string, string> {
  const basis = projectModule(files).review_basis_sha256;
  return { ...files, 'review.json': json({ schema_version: 1, records: ['source', 'translation', 'semantic'].map(dimension => ({ dimension, reviewer_kind: 'ai-independent', reviewer_identity: 'synthetic-test-reviewer (not actual review)', evidence_ref: 'urn:test:synthetic-review-not-qualification', basis_sha256: basis, outcome: 'no-material-findings', reviewed_at: '2026-11-04T00:00:00Z' })), limitations: ['Synthetic fixture; no real review or study qualification.'] }) };
}
function pin(bytes: string, files: Record<string, string>): Expectations {
  const p = projectModule(files);
  return { id: p.module_id, version: p.module_version, artifact_sha256: sha256(bytes), review_basis_sha256: p.review_basis_sha256, source_bindings_sha256: p.source_sha256['source-bindings.json']!, applicability: 'product-environmental-footprint' };
}
function modifyBindings(files: Record<string, string>, mutate: (b: Record<string, unknown>) => void): Record<string, string> {
  const b = JSON.parse(files['source-bindings.json']!) as Record<string, unknown>; mutate(b); return { ...files, 'source-bindings.json': json(b) };
}

test('candidate module preserves complete bilingual units, conditional branches and honest assessment boundary', () => {
  const p = projectModule(source); assert.equal(p.requirements.length, 20); assert.equal(p.review['records'] instanceof Array, true);
  assert.match(p.canonical_context, /candidate interpretation/); assert.match(p.translation_context, /候选/);
  assert.match(p.requirements[4]!.canonical_markdown, /exhausted/); assert.match(p.requirements[7]!.canonical_markdown, /Do not import/);
  assert.equal(p.requirements[6]!.applicability, 'without-commission-pefcr'); assert.equal(p.requirements[7]!.applicability, 'with-commission-pefcr');
  assert.equal(projectionYaml(p), projectionYaml(projectModule(source)));
});
test('localized module reader rejects traversal, symbolic files and stale projection', () => withModule((root, dir) => {
  assert.equal(moduleDirectory(root, TARGET), dir); assert.deepEqual(findModules(root), [TARGET]);
  assert.throws(() => moduleDirectory(root, 'library/modules/../../x'), /localized/);
  writeFileSync(path.join(dir, 'structured.yaml'), 'wrong'); assert.throws(() => checkModule(dir), /stale/);
  symlinkSync(path.join(dir, 'module.en-US.md'), path.join(dir, 'linked.md')); assert.throws(() => readRegular(path.join(dir, 'linked.md')), /symbolic/);
  assert.throws(() => readRegular(dir), /regular/);
  writeFileSync(path.join(dir, 'invalid-utf8.md'), Buffer.from([0xff])); assert.throws(() => readRegular(path.join(dir, 'invalid-utf8.md')), /encoded data/);
  symlinkSync(dir, path.join(root, 'library/modules/environmental-footprint/linked')); assert.throws(() => findModules(root), /symbolic module/);
}));
test('missing applicability, source locator, duplicate ID or translation context fails closed', () => {
  for (const [name, from, to, expected] of [
    ['module.en-US.md', 'Applicability: all-pef', '', /incomplete/],
    ['module.zh-CN.md', 'Applicability: all-pef', 'Applicability: with-commission-pefcr', /translation/],
    ['module.zh-CN.md', '## PEF-02', '## PEF-01', /duplicate/],
    ['module.en-US.md', 'eu-2021-2279-corrected:Annex I §§2,3.1', 'missing-source:§1', /translation/],
  ] as const) assert.throws(() => projectModule({ ...source, [name]: source[name]!.replace(from, to) }), expected);
  assert.throws(() => projectModule({ ...source, 'module.en-US.md': source['module.en-US.md']!.slice(source['module.en-US.md']!.indexOf('## PEF-01')) }), /context/);
  assert.throws(() => projectModule({ ...source, 'manifest.yaml': 'schema_version: 1\nschema_version: 2' }), /unique/);
  assert.throws(() => projectModule({ ...source, 'module.en-US.md': source['module.en-US.md']!.split('## PEF-20')[0]! }), /requirement set/);
});
test('wrong 16/9 role, broken parent and substituted N/W unit cannot pass conformance', () => {
  assert.throws(() => projectModule(modifyBindings(source, b => { (b['methods'] as unknown[]).pop(); })), /16 primary/);
  assert.throws(() => projectModule(modifyBindings(source, b => { const a = b['methods'] as Record<string, unknown>[]; a.find(m => m['role'] === 'subcategory')!['parent_id'] = 'no-parent'; })), /parent/);
  assert.throws(() => projectModule(modifyBindings(source, b => { (b['normalisation_weighting'] as Record<string, unknown>[])[0]!['unit_label'] = 'kg'; })), /identity\/unit/);
  assert.throws(() => projectModule(modifyBindings(source, b => { (b['normalisation_weighting'] as Record<string, unknown>[])[0]!['weight_fraction'] = '21.06'; })), /sum/);
  assert.throws(() => projectModule(modifyBindings(source, b => { (b['geographical_selection'] as Record<string, unknown>)['cache_equivalence_is_suitability'] = true; })), /suitability/);
});
test('self-declared candidate export is unavailable to verified adoption; complete synthetic review is separately pinned', () => withModule((_root, dir, files) => {
  const candidate = exportModule(dir); assert.throws(() => verifyModulePackage(candidate, pin(candidate, files)), /review incomplete/);
  const fixture = reviewed(files); for (const [name, bytes] of Object.entries(fixture)) writeFileSync(path.join(dir, name), bytes);
  writeFileSync(path.join(dir, 'structured.yaml'), projectionYaml(projectModule(fixture)));
  const bytes = exportModule(dir), expected = pin(bytes, fixture); assert.equal(verifyModulePackage(bytes, expected).module_id, expected.id);
  for (const [key, value] of [['id', 'method.other'], ['version', '99.0.0'], ['review_basis_sha256', '0'.repeat(64)], ['source_bindings_sha256', '0'.repeat(64)], ['applicability', 'wrong-product']] as const) {
    assert.throws(() => verifyModulePackage(bytes, { ...expected, [key]: value } as Expectations), /binding/);
  }
  assert.throws(() => verifyModulePackage(`${bytes} `, expected), /artifact hash/);
  const pkg = JSON.parse(bytes) as { payload: Record<string, unknown>; payload_sha256: string }; pkg.payload['canonical_context'] = 'removed'; pkg.payload_sha256 = sha256(json(pkg.payload));
  const substituted = json(pkg); assert.throws(() => verifyModulePackage(substituted, { ...expected, artifact_sha256: sha256(substituted) }), /incomplete projection/);
}));
test('review becomes stale after any authored source edit; reviewer types are explicit', () => {
  const files = reviewed(source); assert.throws(() => projectModule({ ...files, 'module.en-US.md': `${files['module.en-US.md']}\n` }), /stale/);
  assert.throws(() => projectModule({ ...files, 'review.json': files['review.json']!.replaceAll('ai-independent', 'approved') }), /reviewer kind/);
});
test('original verification checks actual bytes and binds source IDs; absent originals never look verified', () => withModule((root, _dir, files) => {
  const p = projectModule(files); writeFileSync(path.join(root, 'packet.json'), json({ sources: [] }));
  assert.throws(() => verifyOriginals(p, path.join(root, 'packet.json')), /original binding/);
  assert.throws(() => verifyFactorSources(p, root), /ENOENT/);
}));
test('CLI exports only explicitly diagnostic candidates, refuses overwrite and propagates bad options', () => withModule((root, dir) => {
  const cli = path.resolve('builder/scripts/method-module.ts'), output = path.join(root, 'candidate.json');
  const call = (...args: string[]) => spawnSync(process.execPath, [cli, ...args], { cwd: root, encoding: 'utf8' });
  assert.equal(call('--help').status, 0); assert.equal(call('check').status, 0);
  assert.equal(call('sync', '--module', TARGET).status, 0); assert.equal(checkModule(dir).requirements.length, 20);
  assert.equal(call('export', '--module', TARGET, '--output', output).status, 1);
  symlinkSync(dir, path.join(root, 'module-output-alias'));
  assert.equal(call('export', '--module', TARGET, '--output', path.join(root, 'module-output-alias/package.json'), '--allow-unreviewed').status, 1);
  assert.equal(call('export', '--module', TARGET, '--output', output, '--allow-unreviewed').status, 0); assert.match(readFileSync(output, 'utf8'), /method_module_package/);
  assert.equal(call('export', '--module', TARGET, '--output', output, '--allow-unreviewed').status, 1);
  for (const args of [[], ['unknown'], ['check', '--unknown'], ['check', '--module'], ['sync', '--source-packet', 'p'], ['check', '--output', 'x'], ['check', '--allow-unreviewed'], ['export']]) assert.equal(call(...args).status, 1);
}));
test('selected original verifier checks all represented coordinates and exact N/W scalars against fresh synthetic source bytes', () => withModule((root, _dir, files) => {
  const p = projectModule(files), methods = p.source_bindings['methods'] as Record<string, unknown>[];
  for (const m of methods) {
    const xml = `<LCIAMethodDataSet><common:UUID>${String(m['id'])}</common:UUID><common:dataSetVersion>${String(m['version'])}</common:dataSetVersion><referenceQuantity refObjectId="${String(m['reference_quantity_id'])}"><common:shortDescription>${String(m['unit_label'])}</common:shortDescription></referenceQuantity>${(m['intervention_locations'] as string[]).map(v => `<interventionLocation>${v}</interventionLocation>`).join('')}${(m['impact_locations'] as string[]).map(v => `<impactLocation>${v}</impactLocation>`).join('')}<factor></factor></LCIAMethodDataSet>`;
    m['factor_count'] = 1; m['source_sha256'] = sha256(xml); const filename = path.join(root, String(m['source_member'])); mkdirSync(path.dirname(filename), { recursive: true }); writeFileSync(filename, xml);
  }
  const records = p.source_bindings['normalisation_weighting'] as Record<string, unknown>[];
  const config = `<methodLCIA>${records.map(r => `<configurationLCIAMethod uuid="${String(r['method_id'])}" unitVal="${String(r['source_unit_label'])}" globalVal="${String(r['normalisation_factor'])}" weightedVal="${String(r['weight_fraction'])}" shortDesc="${String(r['source_short_description'])}" />`).join('')}</methodLCIA>`;
  const nw = p.source_bindings['normalisation_weighting_source'] as Record<string, unknown>; nw['sha256'] = sha256(config);
  const filename = path.join(root, String(nw['member'])); mkdirSync(path.dirname(filename), { recursive: true }); writeFileSync(filename, config);
  assert.deepEqual(verifyFactorSources(p, root), { methods: 25, normalisation_weighting: 16 });
  records[0]!['normalisation_factor'] = '1'; assert.throws(() => verifyFactorSources(p, root), /value mismatch/);
  methods[0]!['version'] = '99.00.000'; assert.throws(() => verifyFactorSources(p, root), /metadata mismatch/);
}));
test('fresh original packet verification distinguishes exact bytes from changed originals', () => withModule((root, _dir, files) => {
  const p = projectModule(files), sources = p.source_bindings['sources'] as Record<string, unknown>[];
  const packet = sources.map((s, i) => { const bytes = `Synthetic source ${i}, not an authentic publication`; const filename = `source-${i}.txt`; s['sha256'] = sha256(bytes); s['bytes'] = Buffer.byteLength(bytes); writeFileSync(path.join(root, filename), bytes); return { sha256: s['sha256'], official_url: s['url'], local_file: filename }; });
  const packetPath = path.join(root, 'packet.json'); writeFileSync(packetPath, json({ sources: packet }));
  assert.equal(verifyOriginals(p, packetPath), 6); writeFileSync(path.join(root, 'source-0.txt'), 'substituted'); assert.throws(() => verifyOriginals(p, packetPath), /bytes mismatch/);
}));
test('BOM changes exact source hash, review basis and portable bytes instead of being silently stripped', () => withModule((_root, dir, files) => {
  const original = projectModule(files), english = path.join(dir, 'module.en-US.md');
  writeFileSync(english, Buffer.concat([Buffer.from([0xef, 0xbb, 0xbf]), readFileSync(english)]));
  const captured = readModule(dir), changed = projectModule(captured);
  assert.equal(captured['module.en-US.md']!.charCodeAt(0), 0xfeff);
  assert.equal(changed.source_sha256['module.en-US.md'], sha256(readFileSync(english)));
  assert.notEqual(changed.source_sha256['module.en-US.md'], original.source_sha256['module.en-US.md']);
  assert.notEqual(changed.review_basis_sha256, original.review_basis_sha256);
  assert.throws(() => exportModule(dir), /stale/);
  writeFileSync(path.join(dir, 'structured.yaml'), projectionYaml(changed));
  const pkg = JSON.parse(exportModule(dir)) as { payload: { authored_files: Record<string, string> } };
  assert.deepEqual(Buffer.from(pkg.payload.authored_files['module.en-US.md']!, 'utf8'), readFileSync(english));
}));
test('nonregular canonical files and replacement between precheck/open reject in bounded child processes', () => withModule((root) => {
  const fixture = path.resolve('builder/lib/fixtures/method-module-nonregular.ts');
  for (const mode of ['preexisting', 'replaced']) {
    const filename = path.join(root, `fifo-${mode}`);
    const result = spawnSync(process.execPath, [fixture, filename, mode], { encoding: 'utf8', timeout: 3000 });
    assert.equal(result.error, undefined, `reader must not hang: ${String(result.error)}`);
    assert.equal(result.status, 0, result.stderr);
    const report = JSON.parse(result.stdout) as { rejected: boolean; case: string; replaced: boolean };
    assert.equal(report.rejected, true); assert.equal(report.replaced, mode === 'replaced');
    assert.equal(report.case, process.platform === 'win32' ? 'nonregular-directory' : 'actual-posix-fifo');
  }
}));
