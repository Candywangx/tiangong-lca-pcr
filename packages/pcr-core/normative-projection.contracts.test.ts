import assert from 'node:assert/strict';
import { createHash } from 'node:crypto';
import { readFileSync } from 'node:fs';
import { test } from 'node:test';
import oracle from './fixtures/normative-context/independent-oracle.json' with { type: 'json' };
import { compileNormativeProjection, NormativeProjectionError } from './src/compiler/normative-projection.ts';
import { compileMarkdownSourceDocument } from './src/compiler/source-context.ts';

test('production compilation never accepts or reuses a caller-mutated AST', () => {
  const source = '# Method\n\n## Allocation\n\nOnly when outputs share inputs:\n\n1. Subdivide.\n';
  const expected = compileNormativeProjection(source);
  const separate = compileMarkdownSourceDocument(source);
  separate.tree.children.length = 0;
  assert.deepEqual(compileNormativeProjection(source), expected);
  const changed = source.replace('outputs share inputs', 'joint saleable outputs are present');
  assert.notDeepEqual(compileNormativeProjection(changed), expected);
});

const intro = 'Reject or return when any of the following applies:';
const items = '1. Missing reference basis.\n2. Undisclosed proxy.';

test('conditional and unconditional identical items preserve different complete source context', () => {
  const source = `# Method\n\n## Validation Rules\n\n${intro}\n\n${items}\n\nFollowing consequence.\n\n## Next\n\nOther.`;
  const baseline = compileNormativeProjection(source);
  assert.equal(baseline.validationRules.length, 3);
  assert.equal(baseline.context.units.length, 1);
  assert.deepEqual(baseline.context.units[0]?.headings.map(heading => heading.text), ['# Method', '## Validation Rules']);
  assert.equal(baseline.context.units[0]?.markdown, source.slice(source.indexOf('## Validation'), source.indexOf('## Next')));
  for (const replacement of ['', intro.replace('any', 'all'), intro.replace('Reject or return', 'Require review')]) {
    const changed = compileNormativeProjection(source.replace(intro, replacement));
    assert.deepEqual(changed.validationRules, baseline.validationRules);
    assert.notEqual(changed.context.source_sha256, baseline.context.source_sha256);
    assert.notEqual(changed.context.units[0]?.markdown, baseline.context.units[0]?.markdown);
  }
  assert.deepEqual(baseline.context.bindings.map(binding => binding.pointer), ['/validation_rules/0', '/validation_rules/1', '/validation_rules/2']);
  assert.ok(baseline.context.bindings.every(binding => binding.identity_kind === 'snapshot_local'));
});

test('ancestor preamble, nested heading condition and following notes survive complete H2 binding', () => {
  const source = '# Method\n\n## Allocation\n\nWhen multiple saleable outputs share the system, use this hierarchy:\n\n### If causal records exist\n\n1. Subdivide.\n2. Allocate.\n\n### If records are absent\n\nDisclose the missing basis.\n\n## Validation Rules\n\n1. Review.';
  const result = compileNormativeProjection(source);
  assert.equal(result.allocationRules.length, 4); // Ordinary paragraph remains a compatibility rule.
  const unit = result.context.units.find(candidate => candidate.family === 'allocation');
  assert.ok(unit);
  assert.ok(unit.markdown.includes('When multiple saleable outputs'));
  assert.ok(unit.markdown.includes('### If causal records exist'));
  assert.ok(unit.markdown.includes('### If records are absent'));
  assert.ok(!unit.markdown.includes('## Validation Rules'));
  assert.ok(result.context.bindings.filter(binding => binding.pointer.startsWith('/allocation_rules/')).every(binding => binding.unit_id === unit.unit_id));
  const changed = compileNormativeProjection(source.replace('multiple saleable outputs', 'one saleable output'));
  assert.notEqual(changed.context.units[0]?.markdown, unit.markdown);
});

test('exact H1 preamble stays bound across earlier H2 sections without duplicating unrelated sections or crossing sibling H1', () => {
  const source = '# Method\n\nOnly apply the following requirements to multi-output systems.\n\n## Overview\n\nRetain this overview.\n\n## Allocation\n\n| id | rule |\n| --- | --- |\n| A-1 | Subdivide. |\n\n## Validation Rules\n\n1. Review the basis.\n\n# Other method\n\n## Allocation\n\n1. Separate rule.';
  const result = compileNormativeProjection(source);
  const ancestorEnd = source.indexOf('## Overview');
  const allocation = result.context.units[0];
  const validation = result.context.units[1];
  const sibling = result.context.units[2];
  assert.ok(allocation && validation && sibling);
  for (const unit of [allocation, validation]) {
    const ancestor = unit.ancestor_context[0];
    assert.ok(ancestor);
    assert.equal(ancestor.markdown, source.slice(0, ancestorEnd));
    assert.equal(ancestor.span.start.offset, 0);
    assert.equal(ancestor.span.end.offset, ancestorEnd);
    assert.equal(ancestor.span.start.line, 1);
    assert.equal(ancestor.span.end.line, 5);
    assert.equal(ancestor.span.end.column, 1);
    assert.equal(unit.markdown, source.slice(unit.span.start.offset, unit.span.end.offset));
    assert.ok(!unit.markdown.includes('Retain this overview.'));
  }
  assert.equal(allocation.markdown, source.slice(source.indexOf('## Allocation'), source.indexOf('## Validation Rules')));
  assert.equal(validation.markdown, source.slice(source.indexOf('## Validation Rules'), source.indexOf('# Other method')));
  assert.equal(allocation.unit_id, `normative_${source.indexOf('## Allocation')}`);
  assert.equal(validation.unit_id, `normative_${source.indexOf('## Validation Rules')}`);
  assert.equal(sibling.markdown, source.slice(source.lastIndexOf('## Allocation')));
  assert.ok(!sibling.markdown.includes('multi-output'));
  assert.deepEqual(sibling.ancestor_context, []);
  assert.deepEqual(result.allocationRules.map(rule => rule.rule), ['Subdivide.', 'Separate rule.']);
  assert.deepEqual(result.validationRules.map(rule => rule.rule), ['Review the basis.']);
  assert.equal(result.allocationRules[0]?.rule_id, 'a_1');
  assert.deepEqual(result.context.bindings.map(binding => binding.pointer), ['/allocation_rules/0', '/validation_rules/0', '/allocation_rules/1']);
  assert.equal(result.context.bindings[0]?.identity_kind, 'explicit');
  for (const binding of result.context.bindings) {
    const unit = result.context.units.find(candidate => candidate.unit_id === binding.unit_id);
    assert.ok(unit);
    assert.ok(binding.source_span.start.offset >= unit.span.start.offset);
    assert.ok(binding.source_span.end.offset <= unit.span.end.offset);
  }
  assert.equal(result.context.diagnostics.filter(diagnostic => diagnostic.message.includes('Ancestor preamble')).length, 2);
  const changed = compileNormativeProjection(source.replace('multi-output systems', 'all systems'));
  assert.deepEqual(changed.allocationRules, result.allocationRules);
  assert.deepEqual(changed.validationRules, result.validationRules);
  assert.notEqual(changed.context.units[0]?.ancestor_context[0]?.markdown, allocation.ancestor_context[0]?.markdown);
});

test('exact root prose without H1 stays bound while each original H2 is extracted once', () => {
  const source = 'Only apply all following requirements when outputs share a system.\n\n## Overview\n\nOverview body.\n\n## Allocation\n\n1. Subdivide.\n\n## Validation Rules\n\n1. Review.';
  const result = compileNormativeProjection(source);
  assert.deepEqual(result.allocationRules.map(rule => rule.rule), ['Subdivide.']);
  assert.deepEqual(result.validationRules.map(rule => rule.rule), ['Review.']);
  for (const unit of result.context.units) {
    assert.equal(unit.markdown, source.slice(unit.span.start.offset, unit.span.end.offset));
    const ancestor = unit.ancestor_context[0];
    assert.ok(ancestor);
    assert.equal(ancestor.markdown, source.slice(0, source.indexOf('## Overview')));
    assert.equal(ancestor.span.start.offset, 0);
    assert.equal(ancestor.span.end.offset, source.indexOf('## Overview'));
    assert.ok(!unit.markdown.includes('Overview body.'));
  }
  assert.equal(result.context.diagnostics.filter(diagnostic => diagnostic.message.includes('Ancestor preamble')).length, 2);
});

test('document preamble before the first H1 stays bound across sibling H1s', () => {
  const source = 'Only apply the following requirements to multi-output systems.\n\n# First method\n\n## Allocation\n\n- Subdivide.\n\n# Second method\n\n## Validation Rules\n\n- Review.';
  const result = compileNormativeProjection(source);
  assert.deepEqual(result.allocationRules.map(rule => rule.rule), ['Subdivide.']);
  assert.deepEqual(result.validationRules.map(rule => rule.rule), ['Review.']);
  assert.equal(result.context.units.length, 2);
  for (const unit of result.context.units) {
    assert.equal(unit.markdown, source.slice(unit.span.start.offset, unit.span.end.offset));
    const ancestor = unit.ancestor_context[0];
    assert.ok(ancestor);
    assert.equal(ancestor.markdown, source.slice(0, source.indexOf('# First method')));
    assert.equal(ancestor.span.start.offset, 0);
    assert.equal(ancestor.span.end.offset, source.indexOf('# First method'));
    assert.equal(ancestor.span.start.line, 1);
    assert.equal(ancestor.span.end.line, 3);
    assert.equal(ancestor.span.end.column, 1);
  }
  assert.equal(result.context.units[0]?.unit_id, `normative_${source.indexOf('## Allocation')}`);
  assert.equal(result.context.units[1]?.unit_id, `normative_${source.indexOf('## Validation Rules')}`);
  assert.equal(result.context.diagnostics.filter(diagnostic => diagnostic.message.includes('Ancestor preamble')).length, 2);
  const changed = compileNormativeProjection(source.replace('multi-output systems', 'all systems'));
  assert.deepEqual(changed.allocationRules, result.allocationRules);
  assert.deepEqual(changed.validationRules, result.validationRules);
  assert.notEqual(changed.context.units[1]?.ancestor_context[0]?.markdown, result.context.units[1]?.ancestor_context[0]?.markdown);
});

test('combined root and H1 preambles preserve normalized exact positions in outer-to-inner order', () => {
  const source = 'Only apply when 🦞 outputs share a system.\n\n# Method\n\nKeep the declared reporting basis.\n\n## Overview\n\nSeparate overview content.\n\n## Allocation\n\n1. Subdivide.';
  const result = compileNormativeProjection(`\uFEFF${source.replaceAll('\n', '\r\n')}`);
  const unit = result.context.units[0];
  assert.ok(unit);
  assert.deepEqual(unit.ancestor_context.map(context => context.markdown), [
    source.slice(0, source.indexOf('# Method')),
    source.slice(source.indexOf('# Method'), source.indexOf('## Overview')),
  ]);
  assert.deepEqual(unit.ancestor_context.map(context => context.span.start.line), [1, 3]);
  assert.deepEqual(unit.ancestor_context.map(context => context.span.end.line), [3, 7]);
  for (const context of unit.ancestor_context) {
    assert.equal(context.markdown, source.slice(context.span.start.offset, context.span.end.offset));
    assert.equal(context.span.start.column, 1);
    assert.equal(context.span.end.column, 1);
    assert.ok(context.span.end.offset <= unit.span.start.offset);
    assert.ok(!context.markdown.includes('Separate overview content.'));
  }
  assert.equal(unit.markdown, source.slice(source.indexOf('## Allocation')));
  assert.deepEqual(result.allocationRules.map(rule => rule.rule), ['Subdivide.']);
  assert.deepEqual(compileNormativeProjection(source), result);
});

test('absence of ancestor preamble preserves bounded H2 context and does not inherit earlier H2 body prose', () => {
  for (const prefix of ['', '# Method\n\n']) {
    const source = `${prefix}## Overview\n\nThis prose belongs to the earlier H2.\n\n## Allocation\n\n1. Subdivide.\n\n## Validation Rules\n\n1. Review.`;
    const result = compileNormativeProjection(source);
    assert.equal(result.context.units[0]?.markdown, source.slice(source.indexOf('## Allocation'), source.indexOf('## Validation Rules')));
    assert.equal(result.context.units[1]?.markdown, source.slice(source.indexOf('## Validation Rules')));
    assert.ok(result.context.units.every(unit => !unit.markdown.includes('earlier H2')));
    assert.ok(result.context.units.every(unit => unit.ancestor_context.length === 0));
    assert.deepEqual(result.context.diagnostics, []);
  }
});

test('Chinese fullwidth-colon introduction retains full context without false ambiguity', () => {
  const source = '## 分配\n\n满足条件时执行：\n\n1. 细分。';
  const result = compileNormativeProjection(source);
  assert.equal(result.allocationRules[0]?.rule, '细分。');
  assert.equal(result.context.units[0]?.markdown, source);
  assert.deepEqual(result.context.diagnostics, []);
});

test('AST list grouping flattens continuation and nested exception only in legacy display', () => {
  const source = '## Allocation\n\nApply:\n\n1. Use `basis`.\n   Continue the record.\n\n   Except when unavailable:\n\n   - Disclose uncertainty.\n     Keep complete evidence.\n   - Seek records.\n2. Other rule.';
  const result = compileNormativeProjection(source);
  assert.equal(result.allocationRules.length, 2);
  assert.equal(result.allocationRules[0]?.rule, 'Use basis. Continue the record. Except when unavailable: Disclose uncertainty. Keep complete evidence. Seek records.');
  assert.equal(result.context.units[0]?.markdown, source);
  const binding = result.context.bindings[0];
  assert.ok(binding);
  assert.equal(source.slice(binding.source_span.start.offset, binding.source_span.end.offset), '1. Use `basis`.\n   Continue the record.\n\n   Except when unavailable:\n\n   - Disclose uncertainty.\n     Keep complete evidence.\n   - Seek records.');
});

test('actual GFM table columns preserve explicit IDs, sources, escaped pipes and raw rows', () => {
  const source = '# Method\n\n## System Boundary\n\nApply:\n\n| rule_id | applies_to | rule | source_ids |\n| --- | --- | --- | --- |\n| `RÉF & A` | `foreground` | Disclose A\\|B and `basis`. | `S1`, `S2` |\n| | | Keep complete sources. | S3; S4 |';
  const result = compileNormativeProjection(source);
  assert.deepEqual(result.systemBoundaryRules, [
    { rule_id: 'ref_and_a', applies_to: 'foreground', rule: 'Disclose A\\|B and basis.', source_ids: ['S1', 'S2'] },
    { rule_id: 'system_boundary_rule_2', applies_to: 'foreground_system_boundary', rule: 'Keep complete sources.', source_ids: ['S3', 'S4'] },
  ]);
  assert.deepEqual(result.context.bindings.map(binding => binding.identity_kind), ['explicit', 'snapshot_local']);
  assert.equal(result.context.units[0]?.markdown, source.slice(source.indexOf('## System')));
  const first = result.context.bindings[0];
  assert.ok(first);
  assert.equal(source.slice(first.source_span.start.offset, first.source_span.end.offset), '| `RÉF & A` | `foreground` | Disclose A\\|B and `basis`. | `S1`, `S2` |');
});

test('Chinese aliases and requirement-only columns retain reviewed mappings', () => {
  const result = compileNormativeProjection('## 截断规则\n\n| 规则编号 | 适用于 | 要求 | 来源 |\n| --- | --- | --- | --- |\n| B-1 | 前景 | 披露截断。 | `S1` |\n\n## 分配\n\n- 披露依据。\n\n## 校验规则\n\n| requirement_id | scope | requirement |\n| --- | --- | --- |\n| V-1 | dataset | Require basis. |');
  assert.equal(result.systemBoundaryRules[0]?.rule_id, 'b_1');
  assert.equal(result.systemBoundaryRules[0]?.applies_to, '前景');
  assert.equal(result.allocationRules[0]?.rule_id, 'allocation_rule_1');
  assert.equal(result.validationRules[0]?.rule_id, 'v_1');
});

test('metadata and description-only tables retain exact source without inferring facts', () => {
  const source = '## System Boundary\n\n| process | description |\n| --- | --- |\n| P1 | Metadata text. |\n\nNormal requirement.\n\n| rule | note |\n| --- | --- |\n| | Context only. |';
  const result = compileNormativeProjection(source);
  assert.equal(result.systemBoundaryRules.length, 1);
  assert.equal(result.systemBoundaryRules[0]?.rule, 'Normal requirement.');
  assert.equal(result.context.units[0]?.markdown, source);
  assert.deepEqual(result.context.diagnostics.map(diagnostic => diagnostic.code), ['NON_RULE_TABLE', 'AMBIGUOUS_PROSE_ATTACHMENT', 'UNSUPPORTED_NORMATIVE_BLOCK']);
});

test('duplicate normalized explicit IDs fail with both positions', () => {
  for (const source of [
    '## Allocation\n\n| rule_id | rule |\n| --- | --- |\n| A-B | First. |\n| a_b | Second. |',
  ]) {
    assert.throws(() => compileNormativeProjection(source), error => {
      assert.ok(error instanceof NormativeProjectionError);
      assert.equal(error.code, 'DUPLICATE_NORMATIVE_RULE_ID');
      assert.equal(error.family, 'allocation');
      assert.equal(error.source_spans.length, 2);
      assert.ok((error.source_spans[0]?.start.line ?? 0) < (error.source_spans[1]?.start.line ?? 0));
      assert.match(error.message, /author distinct non-empty explicit rule IDs/u);
      return true;
    });
  }
  assert.throws(() => compileNormativeProjection('## Allocation\n\n| id | rule |\n| --- | --- |\n| 规则 | First. |'), error => error instanceof NormativeProjectionError && error.code === 'INVALID_EXPLICIT_RULE_ID');
});

test('same authored ID may occur in separate families but repeated H2 IDs cannot', () => {
  const prefix = '## Allocation\n\n| id | rule |\n| --- | --- |\n| X | First. |\n\n';
  const result = compileNormativeProjection(`${prefix}## Validation Rules\n\n| id | rule |\n| --- | --- |\n| X | Second. |`);
  assert.equal(result.allocationRules[0]?.rule_id, 'x');
  assert.equal(result.validationRules[0]?.rule_id, 'x');
  assert.throws(() => compileNormativeProjection(`${prefix}${prefix}`), NormativeProjectionError);
});

test('fenced fake headings stay code, all actual matching H2 sections stay authored order', () => {
  const source = '# Method\n\n## Allocation\n\n1. First.\n\n```markdown\n## Validation Rules\n1. Fake rule.\n```\n\n## Other\n\n1. Unrelated.\n\n## Allocation fallback\n\n1. Second.\n\n# Separate method\n\n1. Outside H2.';
  const result = compileNormativeProjection(source);
  assert.deepEqual(result.allocationRules.map(rule => rule.rule), ['First.', 'Second.']);
  assert.deepEqual(result.allocationRules.map(rule => rule.rule_id), ['allocation_rule_1', 'allocation_rule_2']);
  assert.deepEqual(result.validationRules, []);
  assert.equal(result.context.units.length, 2);
  assert.ok(result.context.units[0]?.markdown.includes('## Validation Rules'));
  assert.equal(result.context.diagnostics[0]?.code, 'UNSUPPORTED_NORMATIVE_BLOCK');
  assert.ok(!result.context.units[1]?.markdown.includes('Outside H2.'));
  assert.notEqual(result.context.bindings[0]?.unit_id, result.context.bindings[1]?.unit_id);
});

test('setext H2 headings are normative sections and unsupported containers stay diagnosed', () => {
  const source = 'Method\n======\n\nAllocation\n----------\n\n> When needed:\n>\n> 1. Unestablished rule.\n\n1. Actual rule.';
  const result = compileNormativeProjection(source);
  assert.deepEqual(result.allocationRules.map(rule => rule.rule), ['Actual rule.']);
  assert.equal(result.context.units[0]?.markdown, source.slice(source.indexOf('Allocation')));
  assert.equal(result.context.diagnostics[0]?.code, 'UNSUPPORTED_NORMATIVE_BLOCK');
});

test('non-colon prose remains an ordinary rule and carries group attachment uncertainty', () => {
  const result = compileNormativeProjection('## Allocation\n\nUse this hierarchy when shared.\n\n1. Subdivide.\n2. Allocate.');
  assert.equal(result.allocationRules.length, 3);
  assert.deepEqual(result.context.diagnostics.map(diagnostic => diagnostic.code), ['AMBIGUOUS_PROSE_ATTACHMENT', 'AMBIGUOUS_PROSE_ATTACHMENT', 'AMBIGUOUS_PROSE_ATTACHMENT']);
});

test('BOM/CRLF normalization gives identical complete projection and source hash', () => {
  const source = '# 方法 🦞\n\n## 分配\n\n应用：\n\n1. 保留依据。\n';
  const result = compileNormativeProjection(source);
  assert.deepEqual(compileNormativeProjection(`\uFEFF${source.replaceAll('\n', '\r\n')}`), result);
  assert.equal(result.context.normalization, 'utf8-lf-v1');
  assert.equal(result.context.source_sha256, `sha256:${createHash('sha256').update(source).digest('hex')}`);
  const binding = result.context.bindings[0];
  assert.ok(binding);
  assert.equal(source.slice(binding.source_span.start.offset, binding.source_span.end.offset), '1. 保留依据。');
});

for (const fixture of oracle.fixtures) {
  test(`normative projection preserves independent real authored oracle: ${fixture.name}`, () => {
    const source = readFileSync(new URL(`../../${fixture.path}`, import.meta.url), 'utf8');
    assert.equal(`sha256:${createHash('sha256').update(source).digest('hex')}`, fixture.source_sha256);
    const result = compileNormativeProjection(source);
    assert.equal(result.context.source_sha256, fixture.source_sha256);
    for (const item of fixture.items) {
      const binding = result.context.bindings.find(candidate => candidate.pointer === item.existing_pointer);
      assert.ok(binding);
      assert.equal(binding.rule_id, item.existing_fallback_rule_id);
      assert.equal(binding.identity_kind, 'snapshot_local');
      assert.equal(binding.source_span.start.line, item.start_line);
      assert.equal(binding.source_span.end.line, item.end_line);
      assert.equal(source.slice(binding.source_span.start.offset, binding.source_span.end.offset), item.markdown);
      const unit = result.context.units.find(candidate => candidate.unit_id === binding.unit_id);
      assert.ok(unit);
      assert.ok(unit.markdown.includes(fixture.normative_unit.markdown));
      assert.deepEqual(unit.headings.map(heading => ({ level: heading.depth, start_line: heading.span.start.line, end_line: heading.span.end.line, markdown: heading.text })), fixture.ancestor_headings);
      assert.equal(unit.markdown, source.slice(unit.span.start.offset, unit.span.end.offset));
      if ('following_separate_unit' in fixture) {
        assert.ok(fixture.following_separate_unit);
        assert.ok(unit.markdown.includes(fixture.following_separate_unit.markdown));
      }
    }
  });
}

test('authored reordering changes snapshot-local meaning while explicit table IDs follow authored rows', () => {
  const first = compileNormativeProjection('## Allocation\n\n1. First.\n2. Second.');
  const changed = compileNormativeProjection('## Allocation\n\n2. Second.\n1. First.');
  assert.deepEqual(changed.allocationRules.map(rule => rule.rule), ['Second.', 'First.']);
  assert.deepEqual(changed.allocationRules.map(rule => rule.rule_id), first.allocationRules.map(rule => rule.rule_id));
  assert.ok(changed.context.bindings.every(binding => binding.identity_kind === 'snapshot_local'));
  assert.notEqual(changed.context.source_sha256, first.context.source_sha256);
  const table = compileNormativeProjection('## Allocation\n\n| id | rule |\n| --- | --- |\n| R2 | Second. |\n| R1 | First. |');
  assert.deepEqual(table.allocationRules.map(rule => rule.rule_id), ['r2', 'r1']);
  assert.deepEqual(table.context.bindings.map(binding => binding.pointer), ['/allocation_rules/0', '/allocation_rules/1']);
  assert.ok(table.context.bindings.every(binding => binding.identity_kind === 'explicit'));
});


test('anonymous collisions disambiguate snapshot identities and preserve authored IDs in both orders', () => {
  for (const fixture of [
    { source: '## Allocation\n\nOrdinary preamble.\n\n| rule_id | rule |\n| --- | --- |\n| allocation_rule_1 | Explicit rule. |', candidate: 'allocation_rule_1', anonymousIndex: 0, explicitIndex: 1 },
    { source: '## Allocation\n\n| rule_id | rule |\n| --- | --- |\n| allocation_rule_2 | Explicit rule. |\n\nOrdinary following paragraph.', candidate: 'allocation_rule_2', anonymousIndex: 1, explicitIndex: 0 },
  ]) {
    const result = compileNormativeProjection(fixture.source);
    assert.equal(result.allocationRules[fixture.anonymousIndex]?.rule_id, `${fixture.candidate}_snapshot`);
    assert.equal(result.allocationRules[fixture.explicitIndex]?.rule_id, fixture.candidate);
    assert.equal(result.context.bindings[fixture.anonymousIndex]?.identity_kind, 'snapshot_local');
    assert.equal(result.context.bindings[fixture.explicitIndex]?.identity_kind, 'explicit');
    const diagnostic = result.context.diagnostics.find(candidate => candidate.code === 'SNAPSHOT_RULE_ID_DISAMBIGUATED');
    assert.ok(diagnostic);
    assert.ok(diagnostic.message.includes(fixture.candidate));
    assert.ok(diagnostic.message.includes(`${fixture.candidate}_snapshot`));
    assert.match(diagnostic.message, /authored explicit ID.*remain unchanged/u);
    assert.deepEqual(diagnostic.source_span, result.context.bindings[fixture.anonymousIndex]?.source_span);
    assert.equal(diagnostic.unit_id, result.context.bindings[fixture.anonymousIndex]?.unit_id);
    assert.deepEqual(compileNormativeProjection(fixture.source), result);
  }
});

test('all explicit IDs including snapshot suffixes are reserved before fallback allocation', () => {
  const source = '## Allocation\n\nOrdinary preamble.\n\n| id | rule |\n| --- | --- |\n| allocation_rule_1 | Explicit primary. |\n| allocation_rule_1_snapshot | Explicit suffix. |\n| allocation_rule_1_snapshot_2 | Explicit numbered suffix. |';
  const result = compileNormativeProjection(source);
  assert.deepEqual(result.allocationRules.map(rule => rule.rule_id), ['allocation_rule_1_snapshot_3', 'allocation_rule_1', 'allocation_rule_1_snapshot', 'allocation_rule_1_snapshot_2']);
  assert.deepEqual(result.context.bindings.map(binding => binding.identity_kind), ['snapshot_local', 'explicit', 'explicit', 'explicit']);
  assert.ok(result.context.diagnostics.some(diagnostic => diagnostic.code === 'SNAPSHOT_RULE_ID_DISAMBIGUATED' && diagnostic.message.includes('allocation_rule_1_snapshot_3')));
});
