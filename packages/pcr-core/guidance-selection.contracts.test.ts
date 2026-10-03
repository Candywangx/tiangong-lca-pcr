import assert from 'node:assert/strict';
import test from 'node:test';
import { createHash } from 'node:crypto';
import { compileNormativeProjection } from './src/compiler/normative-projection.ts';
import { deriveGuidanceContext } from './src/compiler/guidance-context.ts';
import { projectionBinding, selectGuidanceFromSnapshot } from './src/consumption-guidance.ts';

function snapshot() {
  const source = `Only multi-output facilities.\n\n# Method\n\nAdditional regional condition.\n\n## Allocation\n\nFor saleable outputs:\n\n1. ${'Preserve all requirements. '.repeat(150)}\n2. Apply a causal basis.\n`;
  const projection = compileNormativeProjection(source);
  const structured = { schema_version: 1, system_boundary: { rules: projection.systemBoundaryRules }, allocation_rules: projection.allocationRules, validation_rules: projection.validationRules,
    projection_metadata: { generated_content_sha256: `sha256:${'a'.repeat(64)}`, canonical_markdown: { sha256: projection.context.source_sha256 } } };
  return { pcr: { id: 'example', version: '0.1.0' }, readiness: { methodology_status: 'authored_methodology' }, source_structured: 'library/pcrs/example/structured.yaml', structured,
    ...deriveGuidanceContext(structured, source) };
}
test('selected guidance retains complete long rule and both ancestor preambles', () => {
  const value = snapshot();
  const result = selectGuidanceFromSnapshot(value, { topic: 'allocation', pageSize: 1 });
  assert.ok('items' in result);
  assert.equal(result.schema_version, 2);
  assert.equal(result.items.length, 1);
  assert.equal(result.items[0]?.truncated, false);
  assert.deepEqual(result.items[0]?.value, value.structured.allocation_rules[0]);
  assert.ok(JSON.stringify(result.items[0]?.value).length > 2400);
  const context = result.normative_context_selection;
  assert.equal(context.units.length, 1);
  assert.equal(context.bindings.length, 1);
  assert.equal(context.units[0]?.ancestor_context.length, 2);
  assert.match(context.units[0]?.ancestor_context[0]?.markdown ?? '', /Only multi-output facilities/);
  assert.match(context.units[0]?.ancestor_context[1]?.markdown ?? '', /Additional regional condition/);
  assert.match(context.units[0]?.markdown ?? '', /For saleable outputs/);
  assert.equal(context.parent_context_sha256, value.normative_context_provenance.context_sha256);
  assert.equal(result.pagination.has_more, true);
});
test('pointer selection carries complete source even when selecting an inner rule field', () => {
  const value = snapshot();
  const result = selectGuidanceFromSnapshot(value, { pointer: '/allocation_rules/1/rule' });
  assert.ok('value' in result);
  assert.equal(result.value, value.structured.allocation_rules[1]?.rule);
  assert.equal(result.normative_context_selection.bindings[0]?.pointer, '/allocation_rules/1');
  assert.match(result.normative_context_selection.units[0]?.markdown ?? '', /For saleable outputs/);
  const all = selectGuidanceFromSnapshot(value, { pointer: '' });
  assert.equal(all.normative_context_selection.bindings.length, 2);
  assert.equal(all.normative_context_selection.units.length, 1);
});
test('selection rejects absent context and preserves pointer/topic/page errors', () => {
  const value = snapshot();
  assert.throws(() => selectGuidanceFromSnapshot({ ...value, normative_context: {} }), { code: 'PCR_INTERNAL_CONTRACT_INVALID' });
  assert.throws(() => selectGuidanceFromSnapshot(value, { topic: 'unknown' }), { code: 'PCR_GUIDANCE_TOPIC' });
  assert.throws(() => selectGuidanceFromSnapshot(value, { pointer: '/absent' }), { code: 'PCR_POINTER_NOT_FOUND' });
  assert.throws(() => selectGuidanceFromSnapshot(value, { topic: 'allocation', page: 9 }), { code: 'PCR_PAGE_RANGE' });
});


test('selection refuses dropped or rehashed incomplete context and conflicting provenance', () => {
  const missing = snapshot(); missing.normative_context = { ...missing.normative_context, units: [], bindings: [] };
  assert.throws(() => selectGuidanceFromSnapshot(missing, { topic: 'allocation' }), { code: 'PCR_NORMATIVE_CONTEXT_INVALID' });
  missing.normative_context_provenance = { ...missing.normative_context_provenance, context_sha256: `sha256:${createHash('sha256').update(JSON.stringify(missing.normative_context)).digest('hex')}` };
  assert.throws(() => selectGuidanceFromSnapshot(missing, { topic: 'allocation' }), /coverage/u);
  const conflicting = snapshot(); conflicting.normative_context_provenance = { ...conflicting.normative_context_provenance, kind: 'stored_projection' };
  assert.throws(() => selectGuidanceFromSnapshot(conflicting), /provenance/u);
  const hash = snapshot(); hash.normative_context_provenance = { ...hash.normative_context_provenance, stored_projection_sha256: `sha256:${'b'.repeat(64)}` };
  assert.throws(() => selectGuidanceFromSnapshot(hash), /provenance/u);
});
test('citation binding rejects invalid identity and hash scalar types', () => {
  const value = snapshot();
  assert.throws(() => projectionBinding({ ...value, pcr: { id: 12, version: {} } }), { code: 'PCR_INTERNAL_CONTRACT_INVALID' });
  assert.throws(() => projectionBinding({ ...value, readiness: { methodology_status: [] } }), { code: 'PCR_INTERNAL_CONTRACT_INVALID' });
  assert.throws(() => projectionBinding({ ...value, structured: { projection_metadata: { generated_content_sha256: 42, canonical_markdown: { sha256: false } } } }), { code: 'PCR_INTERNAL_CONTRACT_INVALID' });
});
test('source-only uncertain units remain visible when no flattened rule can represent them', () => {
  const source = '# Method\n\n## Allocation\n\n> Preserve this unresolved condition verbatim.\n';
  const projection = compileNormativeProjection(source);
  assert.equal(projection.allocationRules.length, 0);
  const structured = { schema_version: 1, system_boundary: { rules: [] }, allocation_rules: [], validation_rules: [], projection_metadata: { generated_content_sha256: `sha256:${'a'.repeat(64)}`, canonical_markdown: { sha256: projection.context.source_sha256 } } };
  const value = { ...snapshot(), structured, ...deriveGuidanceContext(structured, source) };
  const selected = selectGuidanceFromSnapshot(value, { topic: 'allocation' });
  assert.ok('items' in selected); assert.equal(selected.items.length, 0);
  assert.equal(selected.normative_context_selection.units.length, 1);
  assert.match(selected.normative_context_selection.units[0]?.markdown ?? '', /unresolved condition/u);
  assert.ok(selected.normative_context_selection.diagnostics.length > 0);
});


test('unversioned candidate citation retains explicit null rather than inventing a version', () => {
  const value = snapshot();
  assert.equal(projectionBinding({ ...value, pcr: { ...value.pcr, version: null } }).version, null);
});
