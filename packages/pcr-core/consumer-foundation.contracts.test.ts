import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import path from 'node:path';
import test from 'node:test';
import { createSchemaRegistry, formatContractIssues } from './src/schema-validation.ts';
import { validateCoreContract } from './src/contracts.ts';
import { hasDeclaredUnresolvedReferenceProductFlow, materialProjectionCompletenessIssues } from './src/projection-completeness.ts';
import { withPcrSource, withRepositoryPcrSource, pcrSource } from './src/source-context.ts';
import { CONTROLLED_VOCABULARY } from './src/vocabulary.ts';
import { isUnknownRecord, unknownField, type PcrSource } from './src/types.ts';

test('schema registry preserves input identity and exact sorted escaped diagnostics without coercion', () => {
  const registry = createSchemaRegistry([{ $id: 'https://example.invalid/schema', type: 'object', required: ['a/b~c'],
    properties: { 'a/b~c': { type: 'number' } }, additionalProperties: false }]);
  const correct = { 'a/b~c': 1 };
  assert.strictEqual(registry.assert('https://example.invalid/schema', correct), correct);
  const missing = registry.validate('https://example.invalid/schema', {});
  assert.equal(missing.valid, false);
  assert.equal(missing.errors[0]?.instance_path, '/a~1b~0c');
  assert.deepEqual(formatContractIssues(missing.errors), ["/a~1b~0c: must have required property 'a/b~c'"]);
  const malformed = { 'a/b~c': '1' };
  assert.equal(registry.validate('https://example.invalid/schema', malformed).valid, false);
  assert.deepEqual(malformed, { 'a/b~c': '1' });
  assert.throws(() => registry.validate('missing', {}), /not registered/u);
  assert.throws(() => createSchemaRegistry([{}]), /stable \$id/u);
  assert.equal(validateCoreContract('readiness.schema.json', null).valid, false, 'Shape failure never executes typed semantic policy on unknown data.');
});

test('unresolved reference permission requires candidate metadata and the declared output identity', () => {
  const projection = { reference_flow_definition: { product_flow_ref: { name: 'Reference product', uuid: '' } },
    process_inventory: [{ outputs: { product: [{ row_id: 'reference_product_output', name: 'Reference product' }] } }] };
  const manifest = { status: 'candidate', content_maturity: 'authored_methodology',
    review_metadata: { unresolved: [{ code: 'reference_product_flow_uuid' }] } };
  assert.equal(hasDeclaredUnresolvedReferenceProductFlow(projection, manifest), true);
  assert.equal(hasDeclaredUnresolvedReferenceProductFlow(projection, { ...manifest, status: 'published' }), false);
  assert.equal(hasDeclaredUnresolvedReferenceProductFlow(projection, { ...manifest, review_metadata: {} }), false);
  assert.equal(hasDeclaredUnresolvedReferenceProductFlow(null, manifest), false);
  const withIdentity = { ...manifest, review_metadata: { reference_flow_identity: { status: 'unresolved', unresolved_support_fields: ['reference_product_flow_uuid'] } } };
  assert.equal(hasDeclaredUnresolvedReferenceProductFlow(projection, withIdentity), true);
  assert.throws(() => hasDeclaredUnresolvedReferenceProductFlow(projection, { ...manifest,
    review_metadata: { reference_flow_identity: { status: 'unresolved', unresolved_support_fields: 'invalid' } } }), TypeError);
  const code = 'material_projection.reference_flow_definition.product_flow_ref.uuid';
  assert.ok(materialProjectionCompletenessIssues(projection).some(issue => issue.code === code));
  assert.ok(!materialProjectionCompletenessIssues(projection, { allowUnresolvedProductFlowUuid: true }).some(issue => issue.code === code));
  assert.ok(materialProjectionCompletenessIssues(null).some(issue => issue.code === 'material_projection.product_category_identity.canonical_pcr_id'));
});

function adapter(root: string): PcrSource {
  return { root, languages: ['en-US'], listPcrs: () => [], entry: () => null, findAlias: () => null,
    readFile: () => Buffer.alloc(0), snapshotFiles: () => { throw new Error('unused test method'); },
    coverageSnapshot: () => { throw new Error('unused test method'); } };
}
test('storage scoping keeps nested roots distinct and restores the original adapter after failure', () => {
  const root = path.resolve('.'), other = path.resolve('other-root');
  const outer = adapter(root), inner = adapter(other);
  assert.equal(pcrSource(root), null);
  const returned = withPcrSource(root, outer, () => {
    assert.strictEqual(pcrSource(root), outer); assert.equal(pcrSource(other), null);
    assert.throws(() => withPcrSource(other, inner, () => {
      assert.strictEqual(pcrSource(other), inner); assert.equal(pcrSource(root), null); throw new Error('injected');
    }), /injected/u);
    assert.strictEqual(pcrSource(root), outer); return 42;
  });
  assert.equal(returned, 42); assert.equal(pcrSource(root), null);
});

test('explicit repository selection shadows a same-root library and restores every nested binding', () => {
  const root = path.resolve('.'), library = adapter(root);
  withPcrSource(root, library, () => {
    assert.strictEqual(pcrSource(root), library);
    withRepositoryPcrSource(root, () => {
      assert.equal(pcrSource(root), null);
      withPcrSource(root, library, () => assert.strictEqual(pcrSource(root), library));
      assert.equal(pcrSource(root), null);
      assert.throws(() => withPcrSource(root, library, () => {
        assert.strictEqual(pcrSource(root), library); throw new Error('nested library failure');
      }), /nested library failure/u);
      assert.equal(pcrSource(root), null);
    });
    assert.strictEqual(pcrSource(root), library);
    assert.throws(() => withRepositoryPcrSource(root, () => {
      assert.equal(pcrSource(root), null); throw new Error('repository failure');
    }), /repository failure/u);
    assert.strictEqual(pcrSource(root), library);
  });
  assert.equal(pcrSource(root), null);
});

test('typed vocabulary arrays exactly match both generated schema and generated data and remain frozen', async () => {
  const schema: unknown = JSON.parse(readFileSync(new URL('./schemas/controlled-vocabulary.schema.json', import.meta.url), 'utf8'));
  const definitions = unknownField(schema, '$defs'); assert.ok(isUnknownRecord(definitions));
  const generated: unknown = await import(new URL('./src/generated/controlled-vocabulary.mjs', import.meta.url).href);
  assert.deepEqual(CONTROLLED_VOCABULARY, unknownField(generated, 'CONTROLLED_VOCABULARY'));
  assert.deepEqual(Object.keys(CONTROLLED_VOCABULARY), Object.keys(definitions));
  assert.ok(Object.isFrozen(CONTROLLED_VOCABULARY));
  for (const [key, values] of Object.entries(CONTROLLED_VOCABULARY)) {
    assert.deepEqual(values, unknownField(definitions[key], 'enum'));
    assert.ok(Object.isFrozen(values));
  }
});
