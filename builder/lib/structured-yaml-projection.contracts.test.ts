import assert from 'node:assert/strict';
import test from 'node:test';
import { parsePcrMarkdownToStructured } from './markdown-projection.ts';
import { structuredProjectionYaml } from './structured-yaml-projection.ts';
import { parseYaml, type YamlObject } from '../../packages/pcr-core/src/yaml-lite.ts';
import { inspectProjectionIntegrity } from '../../packages/pcr-core/src/projection-integrity.ts';
const source = '# Method\n\nFor multiple saleable products only.\n\n## Allocation\n\nApply in this order:\n\n1. Subdivide.\n2. Use causal relationships.\n';
function projectionObject(text: string): YamlObject {
  const value = parseYaml(text); assert.ok(value !== null && typeof value === 'object' && !Array.isArray(value)); return value;
}
test('v2 serialization fingerprints complete context and preserves YAML roundtrip', () => {
  const projection = parsePcrMarkdownToStructured(source);
  const text = structuredProjectionYaml(projection, { sourceMarkdown: source });
  const parsed = projectionObject(text);
  assert.equal(parsed.schema_version, 2);
  assert.deepEqual(parsed.normative_context, projection.normativeContext);
  assert.ok(text.indexOf('normative_context:') < text.indexOf('projection_metadata:'));
  const integrity = inspectProjectionIntegrity({ sourceMarkdown: source, structuredText: text, metadata: parsed.projection_metadata, structuredProjection: parsed });
  assert.equal(integrity.status, 'current', JSON.stringify(integrity.issues));
  assert.equal(integrity.contract_version, '2');
  assert.equal(structuredProjectionYaml(projection, { sourceMarkdown: source }), text);
});
test('missing canonical source is rejected and mismatched source cannot produce a v2 artifact', () => {
  const projection = parsePcrMarkdownToStructured(source);
  assert.throws(() => structuredProjectionYaml(projection), /requires canonical sourceMarkdown/u);
  const different = source.replace('multiple saleable', 'single saleable');
  assert.throws(() => structuredProjectionYaml(projection, { sourceMarkdown: different }), /does not belong to canonical sourceMarkdown/u);
});
