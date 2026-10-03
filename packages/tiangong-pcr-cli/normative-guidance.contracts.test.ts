import assert from 'node:assert/strict';
import { mkdtempSync, readFileSync, realpathSync, rmSync } from 'node:fs';
import { tmpdir } from 'node:os';
import path from 'node:path';
import test from 'node:test';
import oracle from '../pcr-core/fixtures/normative-context/independent-oracle.json' with { type: 'json' };
import { readYamlFile } from '../pcr-core/src/yaml-lite.ts';
import { normalizeFingerprintText, sha256Fingerprint } from '../pcr-core/src/projection-integrity.ts';
const commandModule: unknown = await import(new URL('./src/commands.mjs', import.meta.url).href);
function object(value: unknown): Record<string, unknown> {
  assert.ok(value !== null && typeof value === 'object' && !Array.isArray(value));
  return value as Record<string, unknown>;
}
function run(args: string[]): Record<string, unknown> {
  const module = object(commandModule); assert.equal(typeof module.runTiangongPcr, 'function');
  if (typeof module.runTiangongPcr !== 'function') throw new Error('CLI unavailable');
  const value: unknown = module.runTiangongPcr(args); return object(value);
}
for (const fixture of oracle.fixtures) {
  test(`actual CLI retains independently sourced meaning: ${fixture.name}`, t => {
    const root = path.resolve('.');
    const folder = realpathSync(mkdtempSync(path.join(tmpdir(), 'pcr-normative-cli-')));
    t.after(() => rmSync(folder, { recursive: true, force: true }));
    const source = normalizeFingerprintText(readFileSync(path.join(root, fixture.path), 'utf8'));
    assert.equal(sha256Fingerprint(source), fixture.source_sha256);
    const manifest = object(readYamlFile(path.join(root, path.dirname(fixture.path), 'manifest.yaml')));
    assert.equal(typeof manifest.id, 'string');
    if (typeof manifest.id !== 'string') throw new Error('Fixture identity missing');
    const item = fixture.items[0]; assert.ok(item);
    const output = path.join(folder, 'guidance.json');
    const result = run(['guidance', '--root', root, '--pcr', manifest.id, '--pointer', item.existing_pointer, '--format', 'json', '--output', output]);
    assert.equal(result.exitCode, 0, String(result.stderr));
    const json: unknown = JSON.parse(readFileSync(output, 'utf8'));
    const report = object(json); assert.equal(report.schema_version, 2);
    const context = object(report.normative_context_selection);
    assert.equal(context.source_sha256, fixture.source_sha256);
    assert.ok(Array.isArray(context.units));
    const units: unknown[] = context.units;
    const unit = units.map(object).find(value => typeof value.markdown === 'string' && value.markdown.includes(fixture.normative_unit.markdown));
    assert.ok(unit, 'The complete independently selected introduction and list must be consumer-visible');
    const span = object(unit.span), start = object(span.start), end = object(span.end);
    assert.equal(typeof start.offset, 'number'); assert.equal(typeof end.offset, 'number');
    if (typeof start.offset !== 'number' || typeof end.offset !== 'number') throw new Error('Invalid source span');
    assert.equal(source.slice(start.offset, end.offset), unit.markdown);
    assert.ok(Array.isArray(unit.headings));
    const headings: unknown[] = unit.headings;
    for (const expected of fixture.ancestor_headings) assert.ok(headings.some(heading => object(heading).text === expected.markdown));
    assert.equal(object(report.source).pointer, item.existing_pointer);
    assert.equal(object(report.value).rule_id, item.existing_fallback_rule_id);
    assert.equal(object(report.normative_context_provenance).kind, 'stored_projection');
  });
}
