import assert from 'node:assert/strict';
import test from 'node:test';
import { compileNormativeProjection } from './src/compiler/normative-projection.ts';
import { buildCompleteGuidance, deriveSnapshotGuidanceContext } from './src/compiler/guidance-envelope.ts';
const source = '# Method\n\n## Validation rules\n\nReject if any condition applies:\n\n- Required evidence is missing.\n';
function snapshot() {
  const projection = compileNormativeProjection(source);
  return { pcr: { id: 'example', readiness: { status: 'review_required' } },
    structured: { schema_version: 1, system_boundary: { rules: projection.systemBoundaryRules }, allocation_rules: projection.allocationRules, validation_rules: projection.validationRules,
      projection_metadata: { generated_content_sha256: `sha256:${'a'.repeat(64)}`, canonical_markdown: { sha256: projection.context.source_sha256 } } },
    artifacts: { 'pcr.en-US.md': { bytes: Buffer.from(source) } } };
}
test('complete guidance consumes source bytes from the captured snapshot and reports legacy provenance', () => {
  const value = snapshot();
  const before = structuredClone(value.structured);
  const result = buildCompleteGuidance(value, 'library/pcrs/example/structured.yaml');
  assert.equal(result.schema_version, 2);
  assert.equal(result.pcr.id, 'example');
  assert.equal(result.normative_context_provenance.kind, 'derived_legacy_source');
  assert.match(result.normative_context.units[0]?.markdown ?? '', /Reject if any condition applies/);
  assert.deepEqual(value.structured, before);
  assert.deepEqual(deriveSnapshotGuidanceContext(value).normative_context, result.normative_context);
});
test('missing or malformed captured source cannot produce a complete guidance claim', () => {
  const value = snapshot();
  assert.throws(() => buildCompleteGuidance({ ...value, artifacts: {} }, 'structured.yaml'), { code: 'PCR_NORMATIVE_CONTEXT_INVALID' });
  value.artifacts['pcr.en-US.md'].bytes = Buffer.from([0xc3, 0x28]);
  assert.throws(() => deriveSnapshotGuidanceContext(value), /not valid UTF-8/u);
  value.artifacts['pcr.en-US.md'].bytes = Buffer.from(source + '\nChanged source.');
  assert.throws(() => deriveSnapshotGuidanceContext(value), /differs from verified projection fingerprint/u);
});
