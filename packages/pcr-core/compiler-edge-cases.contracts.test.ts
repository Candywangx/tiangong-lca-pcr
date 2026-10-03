import assert from 'node:assert/strict';
import { createHash } from 'node:crypto';
import test from 'node:test';
import { compileMarkdownSourceContext, contextForSpan, sectionForSpan } from './src/compiler/source-context.ts';
import { compileNormativeProjection, type NormativeProjectionContext } from './src/compiler/normative-projection.ts';
import { inspectNormativeIntegrity } from './src/compiler/normative-integrity.ts';
import { assertGuidanceContextConsistency, deriveGuidanceContext, GuidanceContextError, type GuidanceContextEnvelope } from './src/compiler/guidance-context.ts';
import { buildCompleteGuidance, buildGuidanceFromProjection, deriveSnapshotGuidanceContext } from './src/compiler/guidance-envelope.ts';
import { buildProjectionMetadata, inspectProjectionIntegrity, splitProjectionDocument } from './src/projection-integrity.ts';
import { renderYaml } from './src/yaml-lite.ts';
import { selectGuidanceFromSnapshot } from './src/consumption-guidance.ts';
import { getVerifiedPcrProjection, readPcrDistributionSnapshot } from './src/index.ts';
import { createReadSessionFixture } from './fixtures/read-session-fixture.ts';

const source = 'Only when 🦞 co-products share a system.\n\n# Method\n\nRetain the regional condition.\n\n## System boundary\n\n- Include the shared input.\n\n## Allocation\n\nUse only where supported:\n\n| id | rule |\n| --- | --- |\n| A-1 | Subdivide. |\n\n## Validation rules\n\n- Reject missing evidence.\n';

/** Pure compiler inputs, not a claim of a schema-verified public PCR record. */
function fixture(schema: 1 | 2 = 2, markdown = source) {
  const projected = compileNormativeProjection(markdown);
  const content = {
    schema_version: schema,
    system_boundary: { rules: projected.systemBoundaryRules },
    allocation_rules: projected.allocationRules,
    validation_rules: projected.validationRules,
    ...(schema === 2 ? { normative_context: projected.context } : {}),
  };
  const generatedContent = renderYaml(content);
  const metadata = buildProjectionMetadata({ sourceMarkdown: markdown, generatedContent, contractVersion: schema === 2 ? '2' : '1' });
  const structured = { ...content, projection_metadata: metadata };
  const structuredText = generatedContent + renderYaml({ projection_metadata: metadata });
  return { markdown, projected, structured, metadata, structuredText };
}
function snapshot(schema: 1 | 2 = 2) {
  const f = fixture(schema);
  return { pcr: { id: 'pcr.fixture.method.rule', version: null, readiness: { methodology_status: 'authored_methodology' } },
    structured: f.structured, artifacts: { 'pcr.en-US.md': { bytes: Buffer.from(f.markdown) } } };
}
function rehashed(context: NormativeProjectionContext, envelope: GuidanceContextEnvelope): GuidanceContextEnvelope {
  return { normative_context: context, normative_context_provenance: { ...envelope.normative_context_provenance,
    context_sha256: `sha256:${createHash('sha256').update(JSON.stringify(context)).digest('hex')}` } };
}

test('source selections preserve exact layout when leading prose exposes a later list or table', () => {
  for (const group of ['1. Keep the complete evidence.\n2. Disclose absence.', '| ID | Rule |\n| --- | --- |\n| R1 | Keep evidence. |']) {
    const markdown = `\n\nOnly when shared.\n\nApply the following:\n\n${group}\n\nSeparate scope.`;
    const index = compileMarkdownSourceContext(markdown);
    const context = contextForSpan(index, { startOffset: 0, endOffset: markdown.indexOf('Apply') - 2 });
    assert.equal(context.selected.text, '\n\nOnly when shared.');
    assert.equal(context.selected.span.start.line, 1); assert.equal(context.selected.span.end.line, 3);
    assert.equal(context.introductions.length, 2);
    assert.deepEqual(context.introductions.map(block => block.text), ['Only when shared.', 'Apply the following:']);
    assert.equal(context.unit.text, markdown.slice(2, markdown.indexOf('\n\nSeparate')));
    assert.equal(context.groups.length, 1); assert.equal(context.groups[0]?.source.text, group);
    assert.equal(context.attribution, 'structural');
    assert.equal(sectionForSpan(index, { startOffset: 2, endOffset: 6 }).text, markdown);
  }
});

test('trailing whitespace stays selected without absorbing the following consequence', () => {
  const markdown = '## Allocation\n\nUse:\n\n1. Subdivide.\n\nRetain the exception.';
  const index = compileMarkdownSourceContext(markdown); const start = markdown.indexOf('1.'); const end = markdown.indexOf('Retain');
  const context = contextForSpan(index, { startOffset: start, endOffset: end });
  assert.equal(context.selected.text, '1. Subdivide.\n\n');
  assert.equal(context.selectedBlock?.text, '1. Subdivide.');
  assert.ok(context.section.text.includes('Retain the exception.'));
  assert.equal(context.unit.text, 'Use:\n\n1. Subdivide.');
});

test('heading images and HTML-only list items remain source context rather than invented rules', () => {
  const markdown = '## Allocation ![scope condition](condition.png)\n\n- <!-- Evidence unavailable: return for review. -->\n\n- Subdivide.\n\n## Functional unit allocation\n\n- Unrelated identity requirement.';
  const result = compileNormativeProjection(markdown);
  assert.deepEqual(result.allocationRules.map(rule => rule.rule), ['Subdivide.']);
  assert.equal(result.context.units.length, 1);
  assert.ok(result.context.units[0]?.headings[0]?.text.includes('![scope condition]'));
  assert.ok(result.context.units[0]?.markdown.includes('Evidence unavailable: return for review.'));
  assert.ok(!result.context.units[0]?.markdown.includes('Unrelated identity requirement.'));
  assert.ok(result.context.diagnostics.some(diagnostic => diagnostic.code === 'UNSUPPORTED_NORMATIVE_BLOCK'));
});

test('ragged GFM rows retain rule text and anonymous identity without fabricating missing cells', () => {
  const markdown = '## Allocation\n\n| Rule | ID | Scope | Sources |\n| --- | --- | --- | --- |\n| Keep the exception. |\n| | R2 | scope | source |';
  const result = compileNormativeProjection(markdown);
  assert.deepEqual(result.allocationRules, [{ rule_id: 'allocation_rule_1', applies_to: 'foreground_burden_allocation', rule: 'Keep the exception.', source_ids: [] }]);
  assert.equal(result.context.bindings[0]?.identity_kind, 'snapshot_local');
  assert.equal(result.context.units[0]?.markdown, markdown);
  assert.ok(result.context.diagnostics.some(diagnostic => diagnostic.code === 'UNSUPPORTED_NORMATIVE_BLOCK'));
});

test('empty table headings and nested non-rule blocks preserve the full source unit', () => {
  const markdown = '## Validation rules\n\n| | Rule |\n| --- | --- |\n| metadata | Require evidence. |\n\n1. Check records.\n\n   ```text\n   This is an exception, not an executable instruction.\n   ```\n\n   ---';
  const result = compileNormativeProjection(markdown);
  assert.deepEqual(result.validationRules.map(rule => rule.rule), ['Require evidence.', 'Check records.']);
  assert.equal(result.context.units[0]?.markdown, markdown);
  assert.ok(result.context.diagnostics.some(diagnostic => diagnostic.message.includes('code')));
  assert.ok(result.context.diagnostics.some(diagnostic => diagnostic.message.includes('thematicBreak')));
});

test('empty sources and nonnormative headings cannot inherit a previous family', () => {
  for (const markdown of ['', '# Method', '# Method\n\n## Product category identity\n\n- Allocation is mentioned here.', '## Reference flow and system boundary\n\n- Identity description.']) {
    const result = compileNormativeProjection(markdown);
    assert.deepEqual(result.context.units, []); assert.deepEqual(result.context.bindings, []);
    assert.deepEqual(result.allocationRules, []); assert.deepEqual(result.systemBoundaryRules, []); assert.deepEqual(result.validationRules, []);
  }
});

test('actual deeply nested Markdown is rejected at the declared AST depth bound', { timeout: 120_000 }, () => {
  assert.throws(() => compileMarkdownSourceContext(`${'> '.repeat(258)}Condition.`), error => error instanceof RangeError && /AST limit/u.test(error.message));
});

test('actual wide Markdown is rejected at the declared AST node bound', { timeout: 120_000 }, () => {
  // Each authored emphasis supplies an emphasis node, text child and separating text.
  // Source is well below the distinct 8-million-code-unit limit.
  const markdown = '*x* '.repeat(83_334);
  assert.ok(markdown.length < 8_000_000);
  assert.throws(() => compileMarkdownSourceContext(markdown), error => error instanceof RangeError && /AST limit/u.test(error.message));
});

for (const input of [null, [], 1, 'not a projection', { schema_version: null }, { schema_version: 3 }]) {
  test(`guidance rejects unknown projection boundary ${JSON.stringify(input)}`, () => {
    assert.throws(() => deriveGuidanceContext(input, source), GuidanceContextError);
  });
}

for (const value of [undefined, null, 42, [], {}, '']) {
  test(`guidance rejects invalid fingerprint or legacy identity scalar ${JSON.stringify(value)}`, () => {
    const f = fixture(1);
    assert.throws(() => deriveGuidanceContext({ ...f.structured, projection_metadata: { ...f.metadata, generated_content_sha256: value } }, source), GuidanceContextError);
    assert.throws(() => deriveGuidanceContext({ ...f.structured, projection_metadata: { ...f.metadata, canonical_markdown: { sha256: value } } }, source), GuidanceContextError);
    const rule = f.structured.allocation_rules[0]; assert.ok(rule);
    assert.throws(() => deriveGuidanceContext({ ...f.structured, allocation_rules: [{ ...rule, rule_id: value }] }, source), GuidanceContextError);
  });
}

test('legacy row scalar and missing family arrays fail before provenance can be emitted', () => {
  const f = fixture(1);
  for (const value of [null, [], false, 17, 'unbound rule']) {
    assert.throws(() => deriveGuidanceContext({ ...f.structured, allocation_rules: [value] }, source), GuidanceContextError);
  }
  assert.throws(() => deriveGuidanceContext({ ...f.structured, system_boundary: null }, source), GuidanceContextError);
  assert.throws(() => deriveGuidanceContext({ ...f.structured, validation_rules: null }, source), GuidanceContextError);
});

test('legacy applicability and source IDs must match in every family without rewriting stored bytes', () => {
  const f = fixture(1); const before = JSON.stringify(f.structured);
  const envelope = deriveGuidanceContext(f.structured, source); assertGuidanceContextConsistency(f.structured, envelope);
  assert.equal(JSON.stringify(f.structured), before);
  const rule = f.structured.system_boundary.rules[0]; assert.ok(rule);
  assert.throws(() => deriveGuidanceContext({ ...f.structured, system_boundary: { rules: [{ ...rule, applies_to: 'all systems' }] } }, source), GuidanceContextError);
  assert.throws(() => deriveGuidanceContext({ ...f.structured, system_boundary: { rules: [{ ...rule, source_ids: ['invented'] }] } }, source), GuidanceContextError);
  assert.equal(JSON.stringify(f.structured), before);
});

test('all-family legacy IDs remain the stored citation identities, with honest provenance', () => {
  const f = fixture(1); const structured = { ...f.structured,
    system_boundary: { rules: f.structured.system_boundary.rules.map(rule => ({ ...rule, rule_id: 'stored_boundary_2' })) },
    allocation_rules: f.structured.allocation_rules.map(rule => ({ ...rule, rule_id: 'stored_allocation_9' })),
    validation_rules: f.structured.validation_rules.map(rule => ({ ...rule, rule_id: 'stored_validation_3' })),
  };
  const before = JSON.stringify(structured); const envelope = deriveGuidanceContext(structured, source);
  assertGuidanceContextConsistency(structured, envelope);
  assert.deepEqual(envelope.normative_context.bindings.map(binding => [binding.pointer, binding.rule_id, binding.identity_kind]), [
    ['/system_boundary/rules/0', 'stored_boundary_2', 'snapshot_local'], ['/allocation_rules/0', 'stored_allocation_9', 'snapshot_local'], ['/validation_rules/0', 'stored_validation_3', 'snapshot_local'],
  ]);
  assert.equal(envelope.normative_context_provenance.stored_projection_sha256, f.metadata.generated_content_sha256);
  assert.notEqual(envelope.normative_context_provenance.context_sha256, f.metadata.generated_content_sha256);
  assert.equal(JSON.stringify(structured), before);
});

for (const damage of ['missing pointer', 'dangling unit', 'wrong family', 'wrong ID', 'duplicate pointer', 'duplicate unit'] as const) {
  test(`rehashed guidance context still refuses ${damage}`, () => {
    const f = fixture(); const envelope = deriveGuidanceContext(f.structured, source);
    const first = envelope.normative_context.bindings[0]; const unit = envelope.normative_context.units[0]; assert.ok(first && unit);
    let context = envelope.normative_context;
    switch (damage) {
      case 'missing pointer': context = { ...context, bindings: [{ ...first, pointer: '/system_boundary/rules/99' }, ...context.bindings.slice(1)] }; break;
      case 'dangling unit': context = { ...context, bindings: [{ ...first, unit_id: 'nonexistent-unit' }, ...context.bindings.slice(1)] }; break;
      case 'wrong family': context = { ...context, units: [{ ...unit, family: 'allocation' }, ...context.units.slice(1)] }; break;
      case 'wrong ID': context = { ...context, bindings: [{ ...first, rule_id: 'invented-id' }, ...context.bindings.slice(1)] }; break;
      case 'duplicate pointer': context = { ...context, bindings: [first, first, ...context.bindings.slice(2)] }; break;
      case 'duplicate unit': context = { ...context, units: [unit, unit, ...context.units.slice(2)] }; break;
    }
    assert.throws(() => assertGuidanceContextConsistency(f.structured, rehashed(context, envelope)), GuidanceContextError);
  });
}

test('guidance consistency checks the actual stored arrays after its defensive-copy boundary', () => {
  const f = fixture(); const envelope = deriveGuidanceContext(f.structured, source);
  for (const replacement of [null, {}, 'missing']) assert.throws(() => assertGuidanceContextConsistency({ ...f.structured, allocation_rules: replacement }, envelope), GuidanceContextError);
  const first = f.structured.validation_rules[0]; assert.ok(first);
  assert.throws(() => assertGuidanceContextConsistency({ ...f.structured, validation_rules: [{ ...first, rule_id: 7 }] }, envelope), GuidanceContextError);
});

test('current source metadata and regenerated context hashes must agree independently', () => {
  const f = fixture(); const envelope = deriveGuidanceContext(f.structured, source);
  const mismatched = { ...f.structured, projection_metadata: { ...f.metadata, canonical_markdown: { ...f.metadata.canonical_markdown, sha256: `sha256:${'a'.repeat(64)}` } } };
  assert.throws(() => deriveGuidanceContext(mismatched, source), GuidanceContextError);
  assert.throws(() => assertGuidanceContextConsistency(mismatched, envelope), GuidanceContextError);
});

test('rehashing lost root and H1 conditions cannot make contract 2 current', () => {
  const f = fixture(); const unit = f.projected.context.units[0]; assert.ok(unit);
  const { projection_metadata, ...content } = f.structured; void projection_metadata;
  const changed = { ...content, normative_context: { ...f.projected.context,
    units: [{ ...unit, ancestor_context: [] }, ...f.projected.context.units.slice(1)] } };
  const generatedContent = renderYaml(changed); const metadata = buildProjectionMetadata({ sourceMarkdown: source, generatedContent, contractVersion: '2' });
  const result = inspectProjectionIntegrity({ sourceMarkdown: source, structuredProjection: changed, metadata,
    structuredText: generatedContent + renderYaml({ projection_metadata: metadata }) });
  assert.equal(result.source_hash_valid, true); assert.equal(result.content_hash_valid, true); assert.equal(result.status, 'invalid');
  assert.ok(result.issues.some(issue => issue.code === 'projection_normative_invalid'));
  const invalid = inspectNormativeIntegrity({ sourceMarkdown: source, structuredProjection: changed });
  assert.equal(invalid.valid, false); assert.equal(Object.hasOwn(invalid, 'verified_context'), false);
});

test('complete guidance and inner selections retain exact root and H1 conditions from captured bytes', () => {
  const captured = snapshot(); const full = buildCompleteGuidance(captured, 'fixture/structured.yaml');
  assert.equal(full.normative_context.units.length, 3);
  for (const unit of full.normative_context.units) {
    assert.equal(unit.ancestor_context[0]?.markdown, source.slice(0, source.indexOf('# Method')));
    assert.equal(unit.ancestor_context[1]?.markdown, source.slice(source.indexOf('# Method'), source.indexOf('## System boundary')));
    assert.equal(unit.markdown, source.slice(unit.span.start.offset, unit.span.end.offset));
    for (const ancestor of unit.ancestor_context) assert.equal(ancestor.markdown, source.slice(ancestor.span.start.offset, ancestor.span.end.offset));
  }
  const selected = selectGuidanceFromSnapshot({ pcr: captured.pcr, readiness: captured.pcr.readiness, structured: captured.structured, source_structured: 'fixture/structured.yaml', ...deriveSnapshotGuidanceContext(captured) }, { pointer: '/allocation_rules/0/rule' });
  assert.ok('value' in selected); assert.equal(selected.value, 'Subdivide.');
  assert.equal(selected.normative_context_selection.units.length, 1); assert.equal(selected.normative_context_selection.units[0]?.ancestor_context.length, 2);
  assert.equal(selected.normative_context_selection.bindings[0]?.rule_id, 'a_1');
});

test('guidance measurement alias preserves legacy values and current field precedence', () => {
  const captured = snapshot(1); const unitConvention = [{ id: 'legacy-unit', requirement: 'Keep the declared basis.' }];
  const measurement = [{ id: 'current-measurement', requirement: 'Require unit conversion evidence.' }];
  const legacy = buildCompleteGuidance({ ...captured, structured: { ...captured.structured, unit_conventions: unitConvention } }, 'structured.yaml');
  assert.deepEqual(legacy.measurement_rules, unitConvention);
  const current = buildCompleteGuidance({ ...captured, structured: { ...captured.structured, unit_conventions: unitConvention, measurement_rules: measurement, dataset_production: { collection_protocols: [], calculation_rules: [], data_quality_requirements: [] }, reference_flow_definition: {}, boundary_abstraction: {}, process_map: [], process_inventory: [], published_dataset_profile: {}, data_quality_rules: [], data_sources: [] } }, 'structured.yaml');
  assert.deepEqual(current.measurement_rules, measurement); assert.deepEqual(current.production_guidance, { collection_protocols: [], calculation_rules: [], data_quality_requirements: [] });
  assert.deepEqual(captured.structured, snapshot(1).structured);
});

test('projection metadata at byte zero lacks a preceding complete generated document', () => {
  const split = splitProjectionDocument('projection_metadata:\n  contract_version: "1"\n');
  assert.equal(split.valid, false);
  if (!split.valid) assert.match(split.error, /generated projection content must end with a newline/u);
});

test('pure guidance formatter matches the captured-source builder over an actual verified core projection', t => {
  const f = createReadSessionFixture(t);
  const projection = getVerifiedPcrProjection({ root: f.root, pcrId: f.id });
  const captured = readPcrDistributionSnapshot({ root: f.root, pcrId: f.id });
  const before = JSON.stringify(projection);
  const rendered = buildGuidanceFromProjection(projection);
  assert.deepEqual(rendered, buildCompleteGuidance(captured, projection.source_structured));
  assert.equal(JSON.stringify(projection), before, 'Formatting cannot rewrite the verified snapshot or historical metadata.');
  assert.equal(rendered.normative_context_provenance.stored_projection_sha256, projection.structured.projection_metadata.generated_content_sha256);
  assert.deepEqual(rendered.normative_context, projection.normative_context);
  assert.ok(rendered.normative_context.units.length > 0);
});

test('a valid canonical source cannot compensate for a missing or malformed generated-content fingerprint', () => {
  const f = fixture(); const { generated_content_sha256, ...withoutContentHash } = f.metadata; void generated_content_sha256;
  for (const metadata of [withoutContentHash, { ...f.metadata, generated_content_sha256: null }, { ...f.metadata, generated_content_sha256: {} }, { ...f.metadata, generated_content_sha256: 'sha256:NOT_HEX' }]) {
    const result = inspectProjectionIntegrity({ sourceMarkdown: source, structuredText: f.structuredText, structuredProjection: f.structured, metadata });
    assert.equal(result.source_hash_valid, true); assert.equal(result.content_hash_valid, null); assert.equal(result.status, 'invalid');
    assert.ok(result.issues.some(issue => issue.code === 'projection_fingerprint_invalid'));
  }
});

test('a correct content digest cannot compensate for a non-final or repeated metadata block', () => {
  const f = fixture();
  for (const structuredText of [f.structuredText + 'unbound: true\n', f.structuredText + renderYaml({ projection_metadata: f.metadata })]) {
    const result = inspectProjectionIntegrity({ sourceMarkdown: source, structuredText, structuredProjection: f.structured, metadata: f.metadata });
    assert.equal(result.source_hash_valid, true); assert.equal(result.content_hash_valid, null); assert.equal(result.status, 'invalid');
    assert.ok(result.issues.some(issue => issue.code === 'projection_fingerprint_invalid'));
  }
});
