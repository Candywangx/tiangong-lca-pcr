import assert from 'node:assert/strict';
import test from 'node:test';
import {
  buildProjectionMetadata, inspectProjectionIntegrity, normalizeFingerprintText,
  projectionNotRequiredState, sha256Fingerprint, splitProjectionDocument,
} from './src/projection-integrity.ts';
import { compileNormativeProjection } from './src/compiler/normative-projection.ts';

const source = '# Example\n\n## System boundary\n\nApply only when measured:\n\n- Include the measured transport.\n';
function fixture(contractVersion: '1' | '2' = '1') {
  const projection = compileNormativeProjection(source);
  const structuredProjection = { normative_context: projection.context,
    system_boundary: { rules: projection.systemBoundaryRules },
    allocation_rules: projection.allocationRules, validation_rules: projection.validationRules };
  const generatedContent = 'schema_version: 1\n' + Object.entries(structuredProjection)
    .map(([key, value]) => `${key}: ${JSON.stringify(value)}\n`).join('');
  const metadata = buildProjectionMetadata({ sourceMarkdown: source, generatedContent, contractVersion });
  const structuredText = `${generatedContent}projection_metadata:\n  contract_version: "${metadata.contract_version}"\n`;
  return { sourceMarkdown: source, structuredText, metadata, structuredProjection };
}

test('v1 normalization/hash behavior and default contract remain unchanged', () => {
  assert.equal(normalizeFingerprintText('\uFEFFa\r\nb\rc\n'), 'a\nb\nc\n');
  assert.equal(normalizeFingerprintText(null), '');
  assert.equal(normalizeFingerprintText(12), '12');
  assert.equal(sha256Fingerprint('\uFEFFa\r\n'), sha256Fingerprint('a\n'));
  assert.notEqual(sha256Fingerprint('a\n'), sha256Fingerprint('a'));
  assert.equal(buildProjectionMetadata({ sourceMarkdown: source, generatedContent: 'x\n' }).contract_version, '1');
  const f = fixture();
  assert.equal(inspectProjectionIntegrity(f).status, 'current');
  // Legacy v1 does not retroactively require new context or regenerate flat rules.
  assert.equal(inspectProjectionIntegrity({ ...f, structuredProjection: undefined }).status, 'current');
  assert.deepEqual(projectionNotRequiredState(), { required: false, status: 'not_required', contract_version: null,
    source_sha256: null, generated_content_sha256: null, source_hash_valid: null, content_hash_valid: null, issues: [] });
});

test('v1 retains missing, unsupported, source/content mismatch and invalid status precedence', () => {
  const f = fixture();
  assert.equal(inspectProjectionIntegrity({ ...f, metadata: null }).status, 'missing');
  assert.equal(inspectProjectionIntegrity({ ...f, metadata: [] }).status, 'missing');
  assert.equal(inspectProjectionIntegrity({ ...f, metadata: { ...f.metadata, contract_version: '9' } }).status, 'unsupported_contract');
  assert.equal(inspectProjectionIntegrity({ ...f, sourceMarkdown: source + '\n' }).status, 'source_mismatch');
  assert.equal(inspectProjectionIntegrity({ ...f, structuredText: f.structuredText.replace('schema_version: 1', 'schema_version: 9') }).status, 'content_mismatch');
  assert.equal(inspectProjectionIntegrity({ ...f, metadata: { ...f.metadata, canonical_markdown: [] } }).status, 'invalid');
  for (const canonical_markdown of [null, {}, 'invalid']) {
    assert.notEqual(inspectProjectionIntegrity({ ...f, metadata: { ...f.metadata, canonical_markdown } }).status, 'current');
  }
});

test('document splitting rejects missing, repeated and non-final metadata blocks', () => {
  assert.equal(splitProjectionDocument('schema_version: 1\n').valid, false);
  assert.equal(splitProjectionDocument('projection_metadata:\n  x: 1\nprojection_metadata:\n').valid, false);
  assert.equal(splitProjectionDocument('x: 1\nprojection_metadata:\n  x: 1\nextra: true\n').valid, false);
  assert.deepEqual(splitProjectionDocument('x: 1\nprojection_metadata:\n  x: 1\n'), { valid: true, generatedContent: 'x: 1\n', error: null });
});

test('v2 requires complete regenerated context and accepts normalized canonical source', () => {
  const f = fixture('2');
  const current = inspectProjectionIntegrity(f);
  assert.equal(current.status, 'current');
  assert.equal(current.source_hash_valid, true);
  assert.equal(current.content_hash_valid, true);
  assert.deepEqual(current.issues, []);
  assert.equal(inspectProjectionIntegrity({ ...f, sourceMarkdown: '\uFEFF' + source.replace(/\n/g, '\r\n') }).status, 'current');
  assert.equal(inspectProjectionIntegrity({ ...f, structuredProjection: undefined }).status, 'invalid');
  assert.equal(inspectProjectionIntegrity({ ...f, structuredProjection: { ...f.structuredProjection, normative_context: null } }).status, 'invalid');
});

test('v2 refuses rehashed dropped/altered context and flat rules', () => {
  const f = fixture('2');
  for (const changed of [
    { ...f.structuredProjection, normative_context: { ...f.structuredProjection.normative_context, units: [] } },
    { ...f.structuredProjection, normative_context: { ...f.structuredProjection.normative_context, bindings: [] } },
    { ...f.structuredProjection, system_boundary: { rules: [] } },
  ]) {
    const generatedContent = Object.entries(changed).map(([key, value]) => `${key}: ${JSON.stringify(value)}\n`).join('');
    const metadata = buildProjectionMetadata({ sourceMarkdown: source, generatedContent, contractVersion: '2' });
    const result = inspectProjectionIntegrity({ sourceMarkdown: source, metadata, structuredProjection: changed,
      structuredText: `${generatedContent}projection_metadata:\n  contract_version: "2"\n` });
    assert.equal(result.source_hash_valid, true);
    assert.equal(result.content_hash_valid, true);
    assert.equal(result.status, 'invalid');
    assert.ok(result.issues.some(issue => issue.code === 'projection_normative_invalid'));
  }
});
