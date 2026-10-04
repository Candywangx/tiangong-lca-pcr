import test, { type TestContext } from 'node:test';
import assert from 'node:assert/strict';
import { mkdirSync, mkdtempSync, readFileSync, realpathSync, rmSync, symlinkSync, writeFileSync } from 'node:fs';
import { tmpdir } from 'node:os';
import fs from 'node:fs';
import { syncBuiltinESMExports } from 'node:module';
import path from 'node:path';
import { createAuthoringPcr } from './pcr-authoring-fixture.ts';
import { init } from './builder-operations.ts';
import { collectLintDiagnostics, inspectPcrDirectory, type PcrInspectionOptions } from './lint-rules.ts';
import { lintWithReport } from './lint-report.ts';
import { parseYaml, renderYaml } from '../../packages/pcr-core/src/yaml-lite.ts';

function object(value: unknown): Record<string, unknown> { assert.ok(value !== null && typeof value === 'object' && !Array.isArray(value)); return value as Record<string, unknown>; }
function owned(t: TestContext) { const root = mkdtempSync(path.join(realpathSync(tmpdir()), 'pcr-lint-rule-edge-')); t.after(() => rmSync(root, { recursive: true, force: true })); return root; }
function fixture(t: TestContext, optional = false) {
  const root = owned(t); init({ root });
  const f = createAuthoringPcr(root, optional ? { schemaVersion: 2, languages: ['en-US', 'zh-CN', 'de-DE'], titles: { 'en-US': 'Wheat', 'zh-CN': '小麦', 'de-DE': 'Weizen' }, optionalTranslations: { 'de-DE': 'reviewed' } } : {});
  const english = path.join(f.pcrDir, 'pcr.en-US.md'), chinese = path.join(f.pcrDir, 'pcr.zh-CN.md'), manifest = path.join(f.pcrDir, 'manifest.yaml');
  const inspect = (options: PcrInspectionOptions = {}) => inspectPcrDirectory({ root, pcrDir: f.pcrDir, ...options });
  const edit = (filename: string, mutate: (text: string) => string) => writeFileSync(filename, mutate(readFileSync(filename, 'utf8')));
  const previewManifest = (mutate: (value: Record<string, unknown>) => void) => { const value = object(parseYaml(readFileSync(manifest, 'utf8'))); mutate(value); return renderYaml(value); };
  return { ...f, english, chinese, manifest, inspect, edit, previewManifest };
}
function includes(messages: readonly string[], expected: RegExp): void { assert.ok(messages.some(message => expected.test(message)), messages.join('\n')); }
const envelope = (language: string, body = '') => `---\npcr_id: pcr.agriculture.crops.wheat-seed\nlanguage: ${language}\nstatus: candidate\nsync_with: ${language === 'en-US' ? 'pcr.zh-CN.md' : 'pcr.en-US.md'}\n---\n${body}`;

test('valid owned authoring inputs produce an exact current projection without modifying methodology files', t => {
  const f = fixture(t), before = readFileSync(f.english); const result = f.inspect();
  assert.equal(result.managedInputsSafe, true); assert.ok(result.projection); assert.ok(result.measurement);
  assert.equal(result.expectedStructuredText, readFileSync(path.join(f.pcrDir, 'structured.yaml'), 'utf8'));
  assert.ok(readFileSync(f.english).equals(before));
});
for (const [name, text, expected] of [
  ['empty canonical body', '', /non-empty canonical English Markdown/],
  ['missing canonical frontmatter', '# Body only', /must start with YAML frontmatter/],
  ['unclosed canonical frontmatter', '---\npcr_id: example\n', /unclosed YAML frontmatter/],
  ['invalid canonical frontmatter YAML', '---\ninvalid: [\n---\n# Body', /invalid YAML frontmatter/],
  ['frontmatter-only canonical document', envelope('en-US'), /English Markdown content after frontmatter/],
  ['wrong canonical identity', envelope('en-US', '# Body').replace('pcr.agriculture.crops.wheat-seed', 'pcr.other.products.wheat'), /frontmatter pcr_id must be/],
  ['wrong canonical language', envelope('en-US', '# Body').replace('language: en-US', 'language: de-DE'), /frontmatter language must be/],
  ['wrong canonical sync target', envelope('en-US', '# Body').replace('sync_with: pcr.zh-CN.md', 'sync_with: arbitrary.md'), /frontmatter sync_with must be/],
] as const) test(`active inspection rejects ${name}`, t => {
  const f = fixture(t); writeFileSync(f.english, text);
  const manifestText = f.previewManifest(value => { value.status = 'active'; value.content_maturity = 'reviewed_methodology'; });
  includes(f.inspect({ manifestText, checkManifestLifecycle: false }).problems, expected);
});
for (const [name, text, expected] of [
  ['empty Chinese document', '', /non-empty Chinese Markdown/],
  ['missing Chinese frontmatter', '# 中文正文', /must start with YAML frontmatter/],
  ['unclosed Chinese frontmatter', '---\nlanguage: zh-CN\n', /unclosed YAML frontmatter/],
  ['invalid Chinese frontmatter YAML', '---\ninvalid: [\n---\n# 中文正文', /invalid YAML frontmatter/],
  ['frontmatter-only Chinese document', envelope('zh-CN'), /Chinese Markdown content after frontmatter/],
  ['wrong Chinese identity', envelope('zh-CN', '# 正文').replace('pcr.agriculture.crops.wheat-seed', 'pcr.other.products.wheat'), /frontmatter pcr_id must be/],
  ['wrong Chinese language', envelope('zh-CN', '# 正文').replace('language: zh-CN', 'language: de-DE'), /frontmatter language must be/],
] as const) test(`material inspection rejects ${name}`, t => {
  const f = fixture(t); writeFileSync(f.chinese, text); includes(f.inspect().problems, expected);
});
for (const [name, text, expected] of [
  ['empty declared translation', '', /declared language Markdown file must not be empty/],
  ['unclosed declared frontmatter', '---\nlanguage: de-DE\n', /unclosed YAML frontmatter/],
  ['invalid declared frontmatter YAML', '---\ninvalid: [\n---\n# Body', /invalid YAML frontmatter/],
  ['declared frontmatter without body', envelope('de-DE'), /declared language Markdown requires content/],
  ['wrong declared identity', envelope('de-DE', '# Body').replace('pcr.agriculture.crops.wheat-seed', 'pcr.other.products.wheat'), /frontmatter pcr_id must be/],
  ['wrong declared language', envelope('de-DE', '# Body').replace('language: de-DE', 'language: fr-FR'), /frontmatter language must be/],
  ['dependent translation syncing a sibling', envelope('de-DE', '# Body').replace('pcr.en-US.md', 'pcr.zh-CN.md'), /canonical source is the English revision/],
] as const) test(`optional-language inspection rejects ${name}`, t => {
  const f = fixture(t, true); writeFileSync(path.join(f.pcrDir, 'pcr.de-DE.md'), text); includes(f.inspect().problems, expected);
});
test('manifest override previews still require declared optional artifacts and diagnose undeclared sibling files', t => {
  const f = fixture(t, true); rmSync(path.join(f.pcrDir, 'pcr.de-DE.md'));
  writeFileSync(path.join(f.pcrDir, 'pcr.fr-FR.md'), envelope('fr-FR', '# Source'));
  const result = f.inspect({ manifestText: readFileSync(f.manifest, 'utf8') });
  includes(result.problems, /declared language Markdown file is missing/); includes(result.problems, /not declared in manifest.languages.available/);
});
test('inaccessible required paths and invalid UTF-8 stop inspection before projection authority is returned', t => {
  const f = fixture(t); writeFileSync(f.english, Buffer.from([0xff, 0xfe]));
  const invalid = f.inspect(); assert.equal(invalid.managedInputsSafe, false); assert.equal(invalid.projection, null); includes(invalid.problems, /valid UTF-8/);
  rmSync(f.english); mkdirSync(f.english); const nonregular = f.inspect(); assert.equal(nonregular.managedInputsSafe, false); assert.equal(nonregular.measurement, null);
  includes(nonregular.problems, /canonical regular file/);
  rmSync(f.english, { recursive: true }); rmSync(f.manifest); const missing = f.inspect(); assert.equal(missing.projection, null); includes(missing.problems, /Missing PCR file/);
});
test('malformed YAML cannot yield a complete successful whole-library report', t => {
  const f = fixture(t); writeFileSync(f.manifest, 'malformed: [');
  assert.throws(() => f.inspect());
  const output = lintWithReport({ root: f.root, report: '.reports/diagnostic.json' }); assert.equal(output.exitCode, 1);
  const report = object(JSON.parse(readFileSync(path.join(f.root, '.reports/diagnostic.json'), 'utf8')) as unknown);
  assert.equal(report.complete, false); assert.equal(report.status, 'fail');
});

function quantitative(f: ReturnType<typeof fixture>): void {
  f.edit(f.english, text => text.replace('- Selected flow: Method applicability record', '- Selected flow: Water')
    .replace('- Flow property / unit: Narrative disclosure record', '- Flow property / unit: Mass / kg')
    .replace('- Amount rule: descriptive record', '- Amount rule: measured water quantity')
    .replace('- Value mode: Not applicable (`not_applicable`)', '- Value mode: Foreground record (`foreground_record`)')
    .replace('- Specificity: Not applicable (`not_applicable`)', '- Specificity: Site-specific (`site_specific`)'));
}
for (const [name, change, expected] of [
  ['unknown amount mode', (text: string) => text.replace('`foreground_record`', '`not_a_mode`'), /invalid amount.value_mode/],
  ['unknown specificity', (text: string) => text.replace('`site_specific`', '`not_a_specificity`'), /invalid amount.specificity/],
  ['unknown normalization basis kind', (text: string) => text.replace('`reference_flow`', '`not_a_basis`'), /invalid amount.basis.kind/],
  ['unknown evidence kind', (text: string) => text.replace('`identity_reference`', '`not_evidence`'), /invalid amount.evidence.kind/],
  ['source-backed evidence without sources', (text: string) => text.replace('Identity reference (`identity_reference`)', 'External source (`external_source`)'), /requires source_ids for evidence_kind external_source/],
  ['unknown source identifier', (text: string) => text.replace('- Sources:', '- Sources: `missing-source`'), /references unknown source_id missing-source/],
  ['collected evidence without a protocol', (text: string) => text.replace('Identity reference (`identity_reference`)', 'Collected record (`collected_record`)'), /requires collection_protocol_id/],
  ['collected evidence with unknown protocol', (text: string) => text.replace('Identity reference (`identity_reference`)', 'Collected record (`collected_record`)\n- Collection protocol: `unknown_protocol`'), /unknown collection_protocol_id unknown_protocol/],
] as const) test(`inventory lint diagnoses ${name} from actual Markdown cards`, t => {
  const f = fixture(t); quantitative(f); f.edit(f.english, change); includes(f.inspect().problems, expected);
});
const range = `\n- Range: Source-backed water range\n  - Range role: Default estimate (\`default_estimate\`)\n  - Lower: 0\n  - Upper: 1\n  - Unit: kg\n  - Basis: per kg reference product\n  - Basis kind: Reference flow (\`reference_flow\`)\n  - Evidence kind: Reasoned estimate (\`reasoned_estimate\`)\n  - Sources:\n`;
for (const [name, change, expected] of [
  ['invalid range role', (text: string) => text.replace('`default_estimate`', '`unknown_role`'), /invalid amount range role/],
  ['missing range unit', (text: string) => text.replace('  - Unit: kg', '  - Unit:'), /is missing unit/],
  ['missing range basis', (text: string) => text.replace('  - Basis: per kg reference product', '  - Basis:'), /is missing basis/],
  ['invalid range basis kind', (text: string) => text.replace('`reference_flow`', '`unknown_basis`'), /invalid basis_kind/],
  ['invalid range evidence kind', (text: string) => text.replace('`reasoned_estimate`', '`unknown_evidence`'), /invalid evidence_kind/],
  ['range evidence with no cited source', (text: string) => text.replace('Reasoned estimate (`reasoned_estimate`)', 'External source (`external_source`)'), /requires source_ids/],
  ['range evidence with missing source id', (text: string) => text.replace('  - Sources:', '  - Sources: `missing-source`'), /references unknown source_id missing-source/],
] as const) test(`range lint diagnoses ${name} without replacing missing evidence with a value`, t => {
  const f = fixture(t); quantitative(f); f.edit(f.english, text => text.replace('- Sources:\n', '- Sources:\n' + change(range))); includes(f.inspect().problems, expected);
});
test('important-flow range policy changes warnings to errors only for a reviewed lifecycle preview', t=>{
  const f=fixture(t);quantitative(f);
  const candidate=f.inspect();includes(candidate.warnings,/important flow.*has no amount range/);
  assert.ok(candidate.problems.every(problem=>!problem.includes('has no amount range')));
  const preview=f.previewManifest(value=>{value.status='active';value.content_maturity='reviewed_methodology';});
  includes(f.inspect({manifestText:preview,checkManifestLifecycle:false}).problems,/important flow.*has no amount range/);
});
test('unsupported process-map inclusion cannot be silently treated as optional',t=>{
  const f=fixture(t);f.edit(f.english,text=>text.replace('| applicability | Applicability record | required |','| applicability | Applicability record | undecided |'));
  includes(f.inspect().problems,/invalid inclusion/);
});
test('process-map requirements and inventory identities remain independently checked', t => {
  const f = fixture(t);
  f.edit(f.english, text => text.replace('| applicability | Applicability record | required |', '| applicability | Applicability record | conditional |'));
  includes(f.inspect().problems, /conditional process applicability is missing inclusion_condition/);
  f.edit(f.english, text => text.replace('| conditional |', '| required |').replace('Applicability Record (`applicability`)', 'Applicability Record (`other_process`)'));
  const result = f.inspect(); includes(result.problems, /required process applicability has no detailed inventory/); includes(result.problems, /detailed process other_process is not declared/);
});
test('collection protocols require each independently necessary activity and quality field', t => {
  const f = fixture(t);
  f.edit(f.english, text => text + `\n## 8. Foreground Data Collection, Calculation, and Quality Rules\n\n### Data Collection Protocols\n\n| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |\n| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |\n| incomplete_protocol | | | | | | | | | | | |\n`);
  const result = f.inspect();
  assert.ok(result.projection?.collectionProtocols.some(protocol => protocol.protocol_id === 'incomplete_protocol'));
  for (const field of ['process_id', 'flow_role', 'record_type', 'raw_fields', 'collection_method', 'unit', 'frequency', 'temporal_coverage', 'site_scope', 'aggregation_rule', 'quality_evidence']) includes(result.problems, new RegExp(`collection protocol incomplete_protocol is missing ${field}`));
});
test('unsafe declared optional artifacts cannot leave a safe projection under ordinary or override inspection', {skip:process.platform==='win32'?'Creating file symbolic links requires host privileges':false},t=>{
  for(const override of [false,true]){
    const f=fixture(t,true),optional=path.join(f.pcrDir,'pcr.de-DE.md'),outside=path.join(f.root,'outside.md');writeFileSync(outside,'OUTSIDE_CONTENT_MUST_NOT_BECOME_PROJECTION');
    rmSync(optional);symlinkSync(outside,optional);
    const result=f.inspect(override?{manifestText:readFileSync(f.manifest,'utf8')}:{});
    assert.equal(result.managedInputsSafe,false);assert.equal(result.projection,null);assert.equal(result.measurement,null);assert.equal(result.expectedStructuredText,null);
    assert.ok(result.problems.every(problem=>!problem.includes('OUTSIDE_CONTENT_MUST_NOT_BECOME_PROJECTION')));
  }
});
test('dangling and nonregular declared optional artifacts fail the same safety boundary as required files',t=>{
  for(const replacement of ['directory','dangling'] as const){
    if(replacement==='dangling'&&process.platform==='win32')continue;
    const f=fixture(t,true),optional=path.join(f.pcrDir,'pcr.de-DE.md');rmSync(optional);
    if(replacement==='directory')mkdirSync(optional);else symlinkSync(path.join(f.root,'absent-target.md'),optional);
    for(const options of [{},{manifestText:readFileSync(f.manifest,'utf8')}]){const result=f.inspect(options);assert.equal(result.managedInputsSafe,false);assert.equal(result.projection,null);assert.equal(result.expectedStructuredText,null);}
  }
});
test('all declared optional file types pass preflight before any optional or required methodology body is opened',{skip:process.platform==='win32'?'Creating file symbolic links requires host privileges':false},t=>{
  for(const override of [false,true]){
    const f=fixture(t,true),outside=path.join(f.root,'outside.md');writeFileSync(outside,'OUTSIDE_NOT_READ');
    const manifestText=f.previewManifest(value=>{object(value.languages).available=['en-US','zh-CN','de-DE','fr-FR'];object(value.title)['fr-FR']='Blé';object(value.translation_status)['fr-FR']='reviewed';});writeFileSync(f.manifest,manifestText);
    symlinkSync(outside,path.join(f.pcrDir,'pcr.fr-FR.md'));
    const original=fs.openSync,opened:string[]=[];
    fs.openSync=(...args:Parameters<typeof fs.openSync>)=>{opened.push(String(args[0]));return original(...args);};syncBuiltinESMExports();
    try{const result=f.inspect(override?{manifestText}:{});assert.equal(result.managedInputsSafe,false);assert.equal(result.projection,null);}
    finally{fs.openSync=original;syncBuiltinESMExports();}
    assert.ok(opened.every(file=>file===f.manifest),opened.join('\n'));
    if(override)assert.deepEqual(opened,[]);
  }
});
test('unreadable optional UTF-8 is a managed-input failure rather than an empty translation with usable projection',t=>{
  const f=fixture(t,true);writeFileSync(path.join(f.pcrDir,'pcr.de-DE.md'),Buffer.from([0xff,0xfe]));
  for(const options of [{},{manifestText:readFileSync(f.manifest,'utf8')}]){const result=f.inspect(options);assert.equal(result.managedInputsSafe,false);assert.equal(result.projection,null);assert.equal(result.measurement,null);}
});
test('repository lint diagnoses invalid directory types and shallow canonical manifests while preserving source bytes', t => {
  const root = owned(t); const empty = collectLintDiagnostics({ root }); includes(empty.problems, /Missing required directory/);
  init({ root }); rmSync(path.join(root, 'classifications/mappings'), { recursive: true }); writeFileSync(path.join(root, 'classifications/mappings'), 'not a directory');
  writeFileSync(path.join(root, 'library/pcrs/manifest.yaml'), 'id: pcr.fixture.invalid\n');
  const result = collectLintDiagnostics({ root }); includes(result.problems, /mapping root must be a canonical directory/); includes(result.problems, /exactly three directories/);
  assert.equal(readFileSync(path.join(root, 'classifications/mappings'), 'utf8'), 'not a directory');
});
test('a substituted PCR root cannot borrow an outside tree to satisfy required directories', { skip: process.platform === 'win32' ? 'Creating directory symbolic links requires host privileges' : false }, t => {
  const root = owned(t), outside = owned(t); init({ root }); rmSync(path.join(root, 'library/pcrs'), { recursive: true }); symlinkSync(outside, path.join(root, 'library/pcrs'), 'dir');
  const result = collectLintDiagnostics({ root }); includes(result.problems, /PCR root must be a canonical directory/); includes(result.problems, /required path must be a canonical directory/);
});
