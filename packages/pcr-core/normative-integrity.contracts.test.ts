import assert from 'node:assert/strict';
import test from 'node:test';
import { compileNormativeProjection } from './src/compiler/normative-projection.ts';
import { inspectNormativeIntegrity } from './src/compiler/normative-integrity.ts';

const source = [
  '# PCR 🧪', '', '## System boundary', '', 'When supported by evidence:', '',
  '- Include collection.', '  - Retain its calculation basis.', '', 'Keep the scope note.', '',
  '## Allocation', '', '| Rule ID | Applies to | Rule | Source IDs |',
  '| --- | --- | --- | --- |', '| explicit_1 | co-product | Allocate by measured mass. | evidence_1 |', '',
  '## Validation rules', '', 'Require a complete source record.', '',
].join('\n');
function fixture(markdown = source) {
  const projection = compileNormativeProjection(markdown);
  return { normative_context: projection.context, system_boundary: { rules: projection.systemBoundaryRules },
    allocation_rules: projection.allocationRules, validation_rules: projection.validationRules };
}
function check(structuredProjection: unknown, sourceMarkdown = source) {
  const result = inspectNormativeIntegrity({ sourceMarkdown, structuredProjection });
  if (!result.valid) assert.equal(Object.hasOwn(result, 'verified_context'), false, 'Invalid results must never expose a trusted context.');
  return result;
}
test('successful verification returns newly regenerated context without trusting or retaining stored objects', () => {
  const f = fixture();
  const result = check(f);
  assert.ok(result.valid);
  assert.deepEqual(result.verified_context, f.normative_context);
  assert.notStrictEqual(result.verified_context, f.normative_context);
  assert.notStrictEqual(result.verified_context.units, f.normative_context.units);
  const original = JSON.stringify(result.verified_context);
  const rule = f.system_boundary.rules[0]; assert.ok(rule); rule.rule = 'Invented applicability.';
  assert.equal(check(f).valid, false, 'A previous successful verification never caches acceptance.');
  assert.equal(JSON.stringify(result.verified_context), original);
});
test('complete normative fidelity accepts all families and BOM/CRLF normalization', () => {
  const f = fixture();
  assert.deepEqual(check(f), { valid: true, issues: [], verified_context: f.normative_context });
  assert.equal(check(f, '\uFEFF' + source.replace(/\n/g, '\r\n')).valid, true);
  assert.equal(f.normative_context.units.length, 3);
  assert.ok(f.normative_context.bindings.some(binding => binding.identity_kind === 'explicit'));
  assert.ok(f.normative_context.bindings.some(binding => binding.identity_kind === 'snapshot_local'));
  assert.equal(check(fixture('# Non-normative\n'), '# Non-normative\n').valid, true);
});

test('missing or malformed external contexts fail without unchecked data access', () => {
  for (const value of [null, [], 12, 'wrong', {}, { normative_context: [] }, { normative_context: {} }]) {
    assert.equal(check(value).valid, false);
  }
  const f = fixture();
  for (const field of ['normalization', 'source_sha256', 'identity_scope', 'units', 'bindings', 'diagnostics']) {
    assert.equal(check({ ...f, normative_context: { ...f.normative_context, [field]: null } }).valid, false, field);
  }
  assert.equal(check({ ...f, normative_context: { ...f.normative_context, normalization: 'utf8-lf-v9' } }).valid, false);
  assert.equal(check({ ...f, normative_context: { ...f.normative_context, source_sha256: `sha256:${'0'.repeat(64)}` } }).valid, false);
});

test('unit loss, altered exact text, source spans, headings and family cannot be hidden by hashes', () => {
  const f = fixture();
  const unit = f.normative_context.units[0];
  assert.ok(unit);
  const variants = [
    [], f.normative_context.units.slice(1), [...f.normative_context.units, unit],
    [{ ...unit, markdown: unit.markdown.replace('When supported by evidence:', '') }, ...f.normative_context.units.slice(1)],
    [{ ...unit, family: 'allocation' }, ...f.normative_context.units.slice(1)],
    [{ ...unit, headings: [] }, ...f.normative_context.units.slice(1)],
    [{ ...unit, span: { ...unit.span, start: { ...unit.span.start, offset: unit.span.start.offset + 1 } } }, ...f.normative_context.units.slice(1)],
    [{ ...unit, span: { ...unit.span, start: { ...unit.span.start, line: 999 } } }, ...f.normative_context.units.slice(1)],
    [{ ...unit, span: { ...unit.span, end: { ...unit.span.end, column: 999 } } }, ...f.normative_context.units.slice(1)],
  ];
  for (const units of variants) {
    const result = check({ ...f, normative_context: { ...f.normative_context, units } });
    assert.equal(result.valid, false);
    assert.ok(result.issues.some(issue => issue.code === 'normative_units_invalid'));
  }
});

test('bindings require every canonical pointer, identity, enclosing unit and source position', () => {
  const f = fixture();
  const binding = f.normative_context.bindings[0];
  assert.ok(binding);
  for (const replacement of [
    { ...binding, pointer: '/allocation_rules/0' }, { ...binding, pointer: '/system_boundary/rules/01' },
    { ...binding, pointer: '/system_boundary/rules/999' }, { ...binding, rule_id: 'substituted' },
    { ...binding, identity_kind: 'explicit' }, { ...binding, unit_id: 'missing' },
    { ...binding, source_span: { ...binding.source_span, end: { ...binding.source_span.end, offset: source.length + 1 } } },
  ]) {
    assert.equal(check({ ...f, normative_context: { ...f.normative_context,
      bindings: [replacement, ...f.normative_context.bindings.slice(1)] } }).valid, false);
  }
  for (const bindings of [[], f.normative_context.bindings.slice(1), [...f.normative_context.bindings, binding]]) {
    assert.equal(check({ ...f, normative_context: { ...f.normative_context, bindings } }).valid, false);
  }
});

test('bound normative arrays cannot be dropped, reordered or rewritten even with internally matching IDs', () => {
  const f = fixture();
  const rule = f.system_boundary.rules[0];
  assert.ok(rule);
  for (const rules of [[], [...f.system_boundary.rules].reverse(),
    [{ ...rule, rule: 'Invented unconditional applicability.' }, ...f.system_boundary.rules.slice(1)],
    [{ ...rule, applies_to: 'every_system' }, ...f.system_boundary.rules.slice(1)],
    [{ ...rule, source_ids: ['invented'] }, ...f.system_boundary.rules.slice(1)]]) {
    assert.equal(check({ ...f, system_boundary: { rules } }).valid, false);
  }
  assert.equal(check({ ...f, allocation_rules: [] }).valid, false);
  assert.equal(check({ ...f, validation_rules: [] }).valid, false);
  assert.equal(check({ ...f, normative_context: { ...f.normative_context, diagnostics: [{ code: 'invented' }] } }).valid, false);
  assert.equal(check({ ...f, normative_context: { ...f.normative_context, scientific_approval: true } }).valid, false);
});

test('regeneration failures remain unavailable and preserve explicit compiler error diagnostics', () => {
  const badSource = '## Allocation\n\n| Rule ID | Rule |\n| --- | --- |\n| same | A |\n| same | B |\n';
  const result = check(fixture(), badSource);
  assert.equal(result.valid, false);
  assert.ok(result.issues.some(issue => issue.code === 'normative_source_invalid' && issue.message.includes('DUPLICATE_NORMATIVE_RULE_ID')));
});
