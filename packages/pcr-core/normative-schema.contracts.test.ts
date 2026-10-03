import test from 'node:test';
import assert from 'node:assert/strict';
import { Ajv2020, type ValidateFunction } from 'ajv/dist/2020.js';
import structuredSchema from './schemas/structured-projection.schema.json' with { type: 'json' };
import guidanceSchema from './schemas/guidance-output.schema.json' with { type: 'json' };
import readinessSchema from './schemas/readiness.schema.json' with { type: 'json' };
import vocabularySchema from './schemas/controlled-vocabulary.schema.json' with { type: 'json' };
import legacyStructured from './fixtures/normative-schema/legacy-structured.json' with { type: 'json' };
import { compileNormativeProjection } from './src/compiler/normative-projection.ts';

// The complete legacy envelope is a shape fixture extracted from wheat-seed's
// stored v1 projection. Its flattened text is not a semantic correctness oracle.
const projection = compileNormativeProjection(`# Method\n\n## System boundary\n\n1. Include foreground activities.\n\n## Allocation\n\nWhen outputs share the system, apply:\n\n1. Subdivide.\n2. Preserve the complete rationale.\n\n## Validation rules\n\n> Retain the unresolved requirement.\n\n1. Verify the declared basis.`);
const ajv = new Ajv2020({
  allErrors: true, strict: true, validateSchema: true,
  coerceTypes: false, removeAdditional: false, useDefaults: false,
  schemas: [structuredSchema, guidanceSchema, readinessSchema, vocabularySchema],
});
const validateStructured = ajv.compile<unknown>(structuredSchema);
const validateGuidance = ajv.compile<unknown>(guidanceSchema);
const validateContext = ajv.compile<unknown>({
  $ref: `${structuredSchema.$id}#/$defs/normativeContext`,
});

function result(validate: ValidateFunction<unknown>, value: unknown, expected: boolean): void {
  const before = structuredClone(value);
  assert.equal(validate(value), expected, JSON.stringify(validate.errors));
  assert.deepEqual(value, before, 'Schema validation must not modify its input');
}
function object(value: unknown): Record<string, unknown> {
  assert.ok(value !== null && typeof value === 'object' && !Array.isArray(value));
  return value as Record<string, unknown>;
}
function changed(value: unknown, path: readonly (string | number)[], replacement: unknown): unknown {
  const copy: unknown = structuredClone(value);
  let target: unknown = copy;
  for (const key of path.slice(0, -1)) {
    if (typeof key === 'number') {
      assert.ok(Array.isArray(target));
      const items: unknown[] = target;
      target = items[key];
    } else target = object(target)[key];
  }
  const key = path.at(-1);
  assert.notEqual(key, undefined);
  if (typeof key === 'number') {
    assert.ok(Array.isArray(target));
    const items: unknown[] = target;
    items[key] = replacement;
  } else {
    assert.ok(typeof key === 'string');
    object(target)[key] = replacement;
  }
  return copy;
}
function without(value: unknown, key: string): unknown {
  const copy = object(structuredClone(value));
  delete copy[key];
  return copy;
}
function structuredV2() {
  return {
    ...structuredClone(legacyStructured), schema_version: 2,
    system_boundary: { rules: projection.systemBoundaryRules },
    allocation_rules: projection.allocationRules, validation_rules: projection.validationRules,
    projection_metadata: { ...legacyStructured.projection_metadata, contract_version: '2' },
    normative_context: projection.context,
  };
}
function guidanceV1() {
  return {
    schema_version: 1, guidance_kind: 'tiangong-pcr-agent-guidance',
    pcr: { id: legacyStructured.product_category_identity.canonical_pcr_id },
    readiness: {
      status: 'ready', lifecycle_status: 'active', methodology_status: 'reviewed_methodology',
      structured_projection_available: true, usable_for_guidance: true, usable_for_validation: true,
      projection_fingerprint: {
        required: true, status: 'current', schema_valid: true, contract_version: '1',
        source_sha256: legacyStructured.projection_metadata.canonical_markdown.sha256,
        generated_content_sha256: legacyStructured.projection_metadata.generated_content_sha256,
        source_hash_valid: true, content_hash_valid: true, issues: [],
      }, blockers: [], warnings: [],
    },
    source_structured: 'fixtures/normative-schema/legacy-structured.json',
    system_boundary: legacyStructured.system_boundary,
    reference_flow: legacyStructured.reference_flow_definition,
    boundary_abstraction: legacyStructured.boundary_abstraction,
    measurement_rules: legacyStructured.measurement_rules,
    process_map: legacyStructured.process_map, process_inventory: legacyStructured.process_inventory,
    production_guidance: legacyStructured.dataset_production,
    published_dataset_profile: legacyStructured.published_dataset_profile,
    allocation_rules: legacyStructured.allocation_rules, data_quality_rules: [],
    validation_rules: legacyStructured.validation_rules, data_sources: legacyStructured.data_sources,
    validation_notes: ['Shape validation does not establish scientific applicability.'],
  };
}
function guidanceV2() {
  return { ...guidanceV1(), schema_version: 2,
    system_boundary: { rules: projection.systemBoundaryRules }, allocation_rules: projection.allocationRules,
    validation_rules: projection.validationRules, normative_context: projection.context,
  };
}

test('complete structured v1 remains readable and v2 requires paired metadata and source context', () => {
  result(validateStructured, legacyStructured, true);
  result(validateStructured, structuredV2(), true);
  result(validateStructured, without(structuredV2(), 'normative_context'), false);
  result(validateStructured, { ...legacyStructured, normative_context: projection.context }, false);
  result(validateStructured, changed(legacyStructured, ['projection_metadata', 'contract_version'], '2'), false);
  result(validateStructured, changed(structuredV2(), ['projection_metadata', 'contract_version'], '1'), false);
  for (const version of [0, 3, '2', null]) result(validateStructured, changed(structuredV2(), ['schema_version'], version), false);
  result(validateStructured, without(structuredV2(), 'schema_version'), false);
});

test('guidance v1 retains its old shape and v2 reuses the common context definition', () => {
  result(validateGuidance, guidanceV1(), true);
  result(validateGuidance, guidanceV2(), true);
  result(validateGuidance, without(guidanceV2(), 'normative_context'), false);
  result(validateGuidance, { ...guidanceV1(), normative_context: projection.context }, false);
  for (const version of [0, 3, '2', null]) result(validateGuidance, changed(guidanceV2(), ['schema_version'], version), false);
  result(validateGuidance, without(guidanceV2(), 'schema_version'), false);
  result(validateGuidance, changed(guidanceV2(), ['normative_context', 'units', 0, 'span', 'start', 'line'], 0), false);
});

test('source context accepts exact compiler shape and empty draft arrays', () => {
  result(validateContext, projection.context, true);
  assert.ok(projection.context.diagnostics.length > 0);
  result(validateContext, { ...projection.context, units: [], bindings: [], diagnostics: [] }, true);
  result(validateStructured, { ...structuredV2(), normative_context: { ...projection.context, units: [], bindings: [], diagnostics: [] } }, true);
  for (const key of ['normalization', 'source_sha256', 'identity_scope', 'units', 'bindings', 'diagnostics']) {
    result(validateContext, without(projection.context, key), false);
  }
});

test('source coordinates require integers and reject string coercion, negatives and zero line/column', () => {
  for (const [field, invalid] of [
    ['offset', -1], ['offset', 1.5], ['offset', '0'],
    ['line', 0], ['line', 1.5], ['line', '1'],
    ['column', 0], ['column', 1.5], ['column', '1'],
  ] as const) {
    for (const side of ['start', 'end']) {
      result(validateContext, changed(projection.context, ['units', 0, 'span', side, field], invalid), false);
    }
  }
  result(validateContext, changed(projection.context, ['bindings', 0, 'source_span', 'start', 'offset'], -1), false);
  result(validateContext, changed(projection.context, ['diagnostics', 0, 'source_span', 'end', 'line'], 0), false);
  result(validateContext, changed(projection.context, ['units', 0, 'headings', 0, 'depth'], 7), false);
});

test('binding pointers address only the three normative arrays with canonical numeric indices', () => {
  for (const pointer of ['/system_boundary/rules/0', '/allocation_rules/1', '/validation_rules/12']) {
    result(validateContext, changed(projection.context, ['bindings', 0, 'pointer'], pointer), true);
  }
  for (const pointer of [
    '/allocation_rules', '/allocation_rules/-1', '/allocation_rules/01', '/allocation_rules/1.5',
    '/allocation_rules/0/rule', '/process_inventory/0', '/system_boundary/0', '/validation_rules/x',
  ]) result(validateContext, changed(projection.context, ['bindings', 0, 'pointer'], pointer), false);
  result(validateContext, changed(projection.context, ['bindings', 0, 'identity_kind'], 'globally_stable'), false);
  result(validateContext, changed(projection.context, ['bindings', 0, 'rule_id'], 'Invalid ID'), false);
});

test('every new context object is closed and required fields cannot disappear', () => {
  const paths = [
    [], ['units', 0], ['units', 0, 'span'], ['units', 0, 'span', 'start'],
    ['units', 0, 'headings', 0], ['bindings', 0], ['diagnostics', 0],
  ] satisfies readonly (readonly (string | number)[])[];
  for (const path of paths) result(validateContext, changed(projection.context, [...path, 'unexpected'], 'extra'), false);
  result(validateStructured, { ...structuredV2(), unexpected: 'extra' }, false);
  result(validateGuidance, { ...guidanceV2(), unexpected: 'extra' }, false);
  for (const key of ['family', 'unit_id', 'markdown', 'span', 'headings']) {
    const unit = projection.context.units[0];
    assert.ok(unit);
    result(validateContext, changed(projection.context, ['units', 0], without(unit, key)), false);
  }
});

test('context tokens and diagnostic codes stay bounded without judging methodology', () => {
  for (const [path, value] of [
    [['normalization'], 'utf8-crlf'], [['source_sha256'], 'sha256:xyz'],
    [['source_sha256'], 'a'.repeat(64)], [['identity_scope'], 'global'],
    [['units', 0, 'family'], 'measurement'], [['units', 0, 'markdown'], ''],
    [['diagnostics', 0, 'code'], 'SCIENTIFICALLY_APPROVED'],
    [['diagnostics', 0, 'message'], ''],
  ] satisfies readonly [readonly (string | number)[], unknown][]) {
    result(validateContext, changed(projection.context, path, value), false);
  }
  for (const code of ['UNSUPPORTED_NORMATIVE_BLOCK', 'NON_RULE_TABLE', 'AMBIGUOUS_PROSE_ATTACHMENT', 'SNAPSHOT_RULE_ID_DISAMBIGUATED']) {
    result(validateContext, changed(projection.context, ['diagnostics', 0, 'code'], code), true);
  }
});

test('shape contracts leave reference and source fidelity to runtime integrity validation', () => {
  // These mutations remain shape-valid. The schema must not imply it proves
  // unique references, pointer resolution, source hashes or source-span fidelity.
  result(validateContext, changed(projection.context, ['bindings', 0, 'unit_id'], 'missing_unit'), true);
  result(validateContext, changed(projection.context, ['bindings', 0, 'pointer'], '/allocation_rules/999'), true);
  result(validateContext, changed(projection.context, ['source_sha256'], `sha256:${'0'.repeat(64)}`), true);
  result(validateContext, changed(projection.context, ['units', 0, 'span', 'end', 'offset'], 0), true);
});
