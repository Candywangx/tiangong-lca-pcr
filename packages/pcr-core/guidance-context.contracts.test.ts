import assert from 'node:assert/strict';
import test from 'node:test';
import { compileNormativeProjection } from './src/compiler/normative-projection.ts';
import { deriveGuidanceContext, GuidanceContextError } from './src/compiler/guidance-context.ts';

const source = '# Method\n\n## Allocation\n\nOnly when several outputs are saleable:\n\n1. Subdivide.\n2. Apply a causal basis.\n';
function fixture(schema: 1 | 2) {
  const projected = compileNormativeProjection(source);
  return {
    schema_version: schema,
    system_boundary: { rules: projected.systemBoundaryRules },
    allocation_rules: projected.allocationRules, validation_rules: projected.validationRules,
    projection_metadata: { generated_content_sha256: `sha256:${'a'.repeat(64)}`, canonical_markdown: { sha256: projected.context.source_sha256 } },
    ...(schema === 2 ? { normative_context: projected.context } : {}),
  };
}
test('legacy enrichment preserves stored bytes and exposes independent context provenance', () => {
  const stored = fixture(1);
  const before = JSON.stringify(stored);
  const envelope = deriveGuidanceContext(stored, source);
  assert.equal(JSON.stringify(stored), before);
  assert.equal(envelope.normative_context_provenance.kind, 'derived_legacy_source');
  assert.equal(envelope.normative_context_provenance.stored_projection_schema_version, 1);
  assert.equal(envelope.normative_context_provenance.stored_projection_sha256, stored.projection_metadata.generated_content_sha256);
  assert.notEqual(envelope.normative_context_provenance.context_sha256, stored.projection_metadata.generated_content_sha256);
  assert.match(envelope.normative_context.units[0]?.markdown ?? '', /Only when several outputs are saleable/);
});
test('legacy renamed identities remain attached to stored pointers without claiming stable authored identity', () => {
  const stored = fixture(1);
  const rule = stored.allocation_rules[0]; assert.ok(rule); rule.rule_id = 'historic_suffixed_2';
  const envelope = deriveGuidanceContext(stored, source);
  const binding = envelope.normative_context.bindings[0]; assert.ok(binding);
  assert.equal(binding.rule_id, 'historic_suffixed_2');
  assert.equal(binding.pointer, '/allocation_rules/0');
  assert.equal(binding.identity_kind, 'snapshot_local');
});
test('legacy missing/reordered/altered rule text fails instead of attaching misleading context', () => {
  const missing = fixture(1); missing.allocation_rules.pop();
  assert.throws(() => deriveGuidanceContext(missing, source), GuidanceContextError);
  const reversed = fixture(1); reversed.allocation_rules.reverse();
  assert.throws(() => deriveGuidanceContext(reversed, source), GuidanceContextError);
  const changed = fixture(1); const rule = changed.allocation_rules[0]; assert.ok(rule); rule.rule = 'Allocate without condition.';
  assert.throws(() => deriveGuidanceContext(changed, source), GuidanceContextError);
  assert.throws(() => deriveGuidanceContext(fixture(1), source + '\nChanged source.'), GuidanceContextError);
});
test('v2 guidance requires valid stored context and reports the stored contract distinctly', () => {
  const stored = fixture(2);
  const envelope = deriveGuidanceContext(stored, source);
  assert.equal(envelope.normative_context_provenance.kind, 'stored_projection');
  assert.equal(envelope.normative_context_provenance.stored_projection_schema_version, 2);
  assert.deepEqual(envelope.normative_context, stored.normative_context);
  assert.ok(stored.normative_context); stored.normative_context = { ...stored.normative_context, bindings: [] };
  assert.throws(() => deriveGuidanceContext(stored, source), GuidanceContextError);
});
