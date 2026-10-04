import test from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync, writeFileSync, existsSync } from 'node:fs';
import path from 'node:path';
import { runTiangongPcr, type CliResult } from './src/commands.ts';
import { createReadSessionFixture, sealTinyLibrary, writeSessionFixtureFile } from '../pcr-core/fixtures/read-session-fixture.ts';
import { buildGuidance, readPcrDistributionSnapshot } from '../pcr-core/src/index.ts';
import { renderYaml } from '../pcr-core/src/yaml-lite.ts';
import { sha256 } from '../pcr-core/src/offline-library.ts';
import { isUnknownRecord } from '../pcr-core/src/types.ts';

function object(value: unknown) { assert.ok(isUnknownRecord(value)); return value; }
function json(text: string) { return object(JSON.parse(text) as unknown); }
function success(result: CliResult) { assert.equal(result.exitCode, 0, result.stderr); assert.equal(result.stderr, ''); return result.stdout; }
function error(result: CliResult, code: string) { assert.equal(result.exitCode, 1); assert.equal(result.stdout, ''); assert.equal(object(json(result.stderr).error).code, code); }

for (const [name, args, code] of [
  ['format without a command', [], 'PCR_CLI_UNKNOWN_OPTION'],
  ['help positionals', ['help', 'list'], 'PCR_CLI_UNEXPECTED_POSITIONAL'],
  ['valued help', ['--help', 'yes'], 'PCR_CLI_INVALID_OPTION'],
  ['bare separator', ['--'], 'PCR_CLI_INVALID_ARGUMENT'],
  ['missing library subcommand', ['library'], 'PCR_CLI_MISSING_SUBCOMMAND'],
  ['unknown coverage subcommand', ['coverage', 'other'], 'PCR_CLI_UNKNOWN_SUBCOMMAND'],
  ['extra coverage positional', ['coverage', 'list', 'extra'], 'PCR_CLI_UNEXPECTED_POSITIONAL'],
  ['extra list positional', ['list', 'extra'], 'PCR_CLI_UNEXPECTED_POSITIONAL'],
  ['unexpected help option', ['help', '--limit', '1'], 'PCR_CLI_UNKNOWN_OPTION'],
  ['missing option value', ['list', '--status'], 'PCR_CLI_MISSING_OPTION_VALUE'],
  ['duplicate option', ['list', '--status', 'candidate', '--status', 'active'], 'PCR_CLI_DUPLICATE_OPTION'],
  ['unknown command', ['unrecognized'], 'PCR_CLI_UNKNOWN_COMMAND'],
] as const) test(`CLI refuses ${name} without a successful output`, () => {
  error(runTiangongPcr([...args, '--format', 'json']), code);
});

test('source selection without a command fails before opening that source', () => {
  const result = runTiangongPcr(['--root', '/missing-owned-fixture']);
  assert.equal(result.exitCode, 1); assert.equal(result.stdout, ''); assert.match(result.stderr, /PCR_CLI_MISSING_COMMAND/u);
});

test('version and command-specific help are available without opening a configured missing snapshot', () => {
  const previous = process.env.PCR_LIBRARY; process.env.PCR_LIBRARY = '/missing-for-owned-help.sqlite';
  try {
    const version = json(readFileSync('packages/tiangong-pcr-cli/package.json', 'utf8')).version;
    assert.equal(success(runTiangongPcr(['--version'])), String(version) + '\n');
    for (const command of [['library'], ['tree'], ['show'], ['coverage', 'list']]) {
      const output = success(runTiangongPcr([...command, '--help'])); assert.match(output, /Usage:/u);
    }
  } finally { if (previous === undefined) delete process.env.PCR_LIBRARY; else process.env.PCR_LIBRARY = previous; }
});

test('snapshot info, explicit checksum and verification retain real immutable identity', t => {
  const f = createReadSessionFixture(t);
  const library = sealTinyLibrary(f.root, 'selected.sqlite', readPcrDistributionSnapshot({ root: f.root, pcrId: f.id }), '0.1.0');
  for (const [subcommand, pin, verified] of [['info', false, false], ['info', true, true], ['verify', false, true]] as const) {
    const args = ['library', subcommand, '--library', library.filename, '--format', 'json'];
    if (pin) args.push('--library-sha256', library.manifest.sha256);
    const report = json(success(runTiangongPcr(args)));
    assert.equal(report.verified, verified); assert.equal(report.sha256, library.manifest.sha256);
    assert.deepEqual(report.snapshot, library.manifest.snapshot);
  }
  error(runTiangongPcr(['library', 'info', '--root', f.root, '--format', 'json']), 'PCR_LIBRARY_REQUIRED');
  error(runTiangongPcr(['list', '--root', f.root, '--library-sha256', library.manifest.sha256, '--format', 'json']), 'PCR_LIBRARY_REQUIRED');
});

test('full ordinary guidance can be saved without truncation and never overwrites existing output', t => {
  const f = createReadSessionFixture(t), output = path.join(f.root, 'complete guidance.json');
  const args = ['guidance', '--root', f.root, '--pcr', f.id, '--output', output, '--format', 'json'];
  const receipt = json(success(runTiangongPcr(args))), bytes = readFileSync(output);
  assert.equal(receipt.bytes, bytes.length); assert.equal(receipt.sha256, sha256(bytes));
  assert.deepEqual(JSON.parse(bytes.toString()) as unknown, JSON.parse(JSON.stringify(buildGuidance({ root: f.root, pcrId: f.id }))) as unknown);
  error(runTiangongPcr(args), 'PCR_CLI_OUTPUT_WRITE'); assert.deepEqual(readFileSync(output), bytes);
});

test('table and Markdown catalog pagination retain filters and truthful empty results', t => {
  const f = createReadSessionFixture(t, { includeSecond: true });
  for (const format of ['table', 'markdown']) {
    const text = success(runTiangongPcr(['list', '--root', f.root, '--page-size', '1', '--page', '2', '--content-maturity', 'authored_methodology', '--format', format]));
    assert.match(text, /Showing 2-2 of 2/u); assert.match(text, /Previous page:/u); assert.doesNotMatch(text, /Next page:/u);
  }
  const empty = success(runTiangongPcr(['list', '--root', f.root, '--content-maturity', 'empty_scaffold', '--format', 'table']));
  assert.match(empty, /Showing 0-0 of 0/u); assert.match(empty, /derived_from_content_maturity/u);
  const tree = success(runTiangongPcr(['tree', '--root', f.root, '--depth', '3', '--format', 'markdown']));
  assert.ok(tree.includes(f.id)); assert.ok(tree.includes(f.secondId)); assert.match(tree, /readiness: review_required/u);
});

test('feedback without a PCR remains an explicit draft with a blank identity and no content writes', t => {
  const f = createReadSessionFixture(t), before = readFileSync(path.join(f.root, f.relative, 'manifest.yaml'));
  const draft = json(success(runTiangongPcr(['feedback', 'draft', '--root', f.root, '--type', 'missing_pcr', '--format', 'json'])));
  assert.equal(draft.title, 'PCR feedback: missing_pcr'); assert.match(String(draft.body), /Describe the PCR issue or improvement/u);
  assert.match(String(draft.body), /\| PCR id \|  \|/u);
  const text = success(runTiangongPcr(['feedback', 'draft', '--root', f.root, '--pcr', f.id, '--type', 'missing_pcr', '--summary', 'Scope needs review', '--format', 'markdown']));
  assert.ok(text.startsWith('# PCR feedback:')); assert.ok(text.includes(f.id)); assert.match(text, /Scope needs review/u);
  assert.deepEqual(readFileSync(path.join(f.root, f.relative, 'manifest.yaml')), before);
});

test('validation thresholds preserve diagnostic output while signaling findings', t => {
  const f = createReadSessionFixture(t), input = path.join(f.root, 'input.txt'); writeFileSync(input, '');
  for (const command of ['validate-model', 'validate-dataset']) {
    writeFileSync(input, command === 'validate-model' ? 'unsupported model evidence' : JSON.stringify(null));
    for (const [failOn, expected] of [['never', 0], ['error', 2], ['warning', 2]] as const) {
      const result = runTiangongPcr([command, '--root', f.root, '--pcr', f.id, '--input', input, '--fail-on', failOn, '--format', 'json']);
      assert.equal(result.exitCode, command === 'validate-model' ? (failOn === 'warning' ? 2 : 0) : expected, result.stderr); assert.equal(result.stderr, '');
      const report = json(result.stdout); assert.equal(report.validation_status, command === 'validate-model' ? 'passed' : 'failed');
      if (command === 'validate-model') { assert.equal(report.completeness, 'partial'); assert.equal(object(report.finding_summary).error, 0); assert.ok(Number(object(report.finding_summary).warning) > 0); }
      else assert.ok(Number(object(report.finding_summary).error) > 0);
    }
  }
  writeFileSync(input, '{'); error(runTiangongPcr(['validate-dataset', '--root', f.root, '--pcr', f.id, '--input', input, '--format', 'json']), 'PCR_CLI_INVALID_DATASET_JSON');
});

test('coverage pages expose previous and next continuations without inventing accepted mappings', t => {
  const f = createReadSessionFixture(t);
  const leafPath = 'classifications/systems/cpc/3.0/normalized/leaves.json', mappingPath = 'classifications/mappings/cpc-3.0-to-pcr.yaml';
  const leaves = [1, 2, 3].map(n => ({ code: '9000' + n, title: 'Unmapped ' + n, path_codes: ['9', '9000' + n], path_titles: ['Unmapped', 'Unmapped ' + n] }));
  const normalized = JSON.stringify({ classification_system: 'CPC', classification_version: '3.0', leaves });
  const mapping = renderYaml({ schema_version: 2, classification_system: 'CPC', classification_version: '3.0', status: 'current', mappings: [] });
  writeSessionFixtureFile(f.root, leafPath, normalized); writeSessionFixtureFile(f.root, mappingPath, mapping);
  writeSessionFixtureFile(f.root, 'classifications/indexes/cpc-3.0-coverage.json', JSON.stringify({ schema_version: 1, index_kind: 'classification-pcr-coverage', classification_system: 'CPC', classification_version: '3.0',
    source: { contract_version: '2', generator: 'builder/scripts/build-catalog.mjs', generator_version: '2', normalized_leaves: { path: leafPath, hash_mode: 'exact_bytes', sha256: sha256(normalized) }, mapping: { path: mappingPath, hash_mode: 'exact_bytes', sha256: sha256(mapping) } },
    summary: { total: 3, mapped: 0, unmapped: 3, candidate_suggestion: 0, manual_review: 0, unknown: 0 },
    entries: leaves.map(leaf => ({ code: leaf.code, label: leaf.title, path_codes: leaf.path_codes, path_titles: leaf.path_titles, coverage_status: 'unmapped', mapping: null, legacy_reference: null })) }));
  const run = (args: string[]) => runTiangongPcr(['coverage', 'list', '--root', f.root, '--classification', 'cpc:3.0', ...args, '--format', 'json']);
  const page = json(success(run(['--page-size', '1', '--page', '2']))); assert.match(String(page.previous_command), /--page 1/u); assert.match(String(page.next_command), /--page 3/u);
  assert.equal(object(page.completeness).status, 'paginated');
  const empty = json(success(run(['--status', 'mapped']))); assert.equal(object(empty.completeness).returned_count, 0); assert.equal(object(empty.completeness).status, 'complete');
  error(run(['--page', '4', '--page-size', '1']), 'PCR_CLI_PAGE_OUT_OF_RANGE');
  assert.equal(existsSync(path.join(f.root, '.reports')), false);
});
