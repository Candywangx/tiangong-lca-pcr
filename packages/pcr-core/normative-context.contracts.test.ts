import assert from 'node:assert/strict';
import { createHash } from 'node:crypto';
import { readFileSync } from 'node:fs';
import { test } from 'node:test';
import oracle from './fixtures/normative-context/independent-oracle.json' with { type: 'json' };
import {
  compileMarkdownSourceContext,
  compileMarkdownSourceDocument,
  contextForSpan,
  sectionForSpan,
  type MarkdownSourceContextIndex,
  type NormativeSourceContext,
} from './src/compiler/source-context.ts';

test('owned source document uses one normalized AST and retains the index-only contract', () => {
  const source = '\uFEFF# Method\r\n\r\nApply:\r\n\r\n1. Keep the complete rule.\r\n';
  const document = compileMarkdownSourceDocument(source);
  const normalized = source.replace(/^\uFEFF/u, '').replace(/\r\n?/gu, '\n');
  assert.equal(document.index.source, normalized);
  assert.equal(document.tree.position?.start.offset, 0);
  assert.equal(document.tree.position?.end.offset, normalized.length);
  assert.deepEqual(selectedText(document.index, '1. Keep'), selectedText(compileMarkdownSourceContext(source), '1. Keep'));
  assert.deepEqual(Object.keys(compileMarkdownSourceContext(source)), ['source', 'normalization', 'contextForSpan', 'sectionForSpan']);
  const second = compileMarkdownSourceDocument(source);
  assert.notStrictEqual(document.tree, second.tree);
  assert.notStrictEqual(document.index, second.index);
  assert.throws(() => compileMarkdownSourceDocument('x'.repeat(8_000_001)), RangeError);
});

function selectedText(index: MarkdownSourceContextIndex, text: string): NormativeSourceContext {
  const offset = index.source.indexOf(text);
  assert.ok(offset >= 0, `Missing test source text: ${text}`);
  return contextForSpan(index, { startOffset: offset, endOffset: offset + text.length });
}

for (const fixture of oracle.fixtures) {
  test(`independent authored-source oracle: ${fixture.name}`, () => {
    const source = readFileSync(new URL(`../../${fixture.path}`, import.meta.url), 'utf8');
    assert.equal(`sha256:${createHash('sha256').update(source).digest('hex')}`, fixture.source_sha256);
    const index = compileMarkdownSourceContext(source);
    for (const item of fixture.items) {
      const context = contextForSpan(index, { startLine: item.start_line, endLine: item.end_line });
      assert.equal(context.attribution, 'structural');
      assert.deepEqual(context.diagnostics, []);
      assert.equal(context.unit.text, fixture.normative_unit.markdown);
      assert.equal(context.unit.span.start.line, fixture.normative_unit.start_line);
      assert.equal(context.unit.span.end.line, fixture.normative_unit.end_line);
      assert.equal(context.selected.text, item.markdown);
      assert.equal(context.selectedBlock?.text, item.markdown);
      assert.equal(context.introductions[0]?.text, fixture.introduction.markdown);
      assert.equal(context.introductions[0]?.span.start.line, fixture.introduction.start_line);
      assert.equal(context.groups[0]?.items.length, fixture.items.length);
      assert.deepEqual(context.groups[0]?.items.map(block => block.text), fixture.items.map(candidate => candidate.markdown));
      assert.deepEqual(context.headings.map(heading => ({ level: heading.depth, start_line: heading.span.start.line, end_line: heading.span.end.line, markdown: heading.text })), fixture.ancestor_headings);
      assert.equal(context.unit.text, index.source.slice(context.unit.span.start.offset, context.unit.span.end.offset));
    }
    if ('following_separate_unit' in fixture) {
      const following = fixture.following_separate_unit;
      assert.ok(following);
      const context = contextForSpan(index, { startLine: following.start_line, endLine: following.end_line });
      assert.equal(context.unit.text, following.markdown);
      assert.equal(context.attribution, 'structural');
      assert.deepEqual(context.introductions, []);
      assert.deepEqual(context.groups, []);
      assert.ok(context.section.text.includes(fixture.normative_unit.markdown));
      assert.ok(context.section.text.includes(following.markdown));
    }
  });
}

const item = '1. Declare the reference basis.';
const intro = 'Reject or return when any of the following applies:';
const conditioned = `# Method\n\n## Validation\n\n${intro}\n\n${item}\n2. Disclose proxies.\n\n## Next\n\nSeparate.`;

test('deleting, changing action, or changing any/all introduction changes source context', () => {
  const baseline = selectedText(compileMarkdownSourceContext(conditioned), item);
  for (const replacement of ['', intro.replace('any', 'all'), intro.replace('Reject or return', 'Require review')]) {
    const changed = selectedText(compileMarkdownSourceContext(conditioned.replace(intro, replacement)), item);
    assert.equal(changed.selected.text, baseline.selected.text);
    assert.notEqual(changed.unit.text, baseline.unit.text);
  }
  const unconditioned = selectedText(compileMarkdownSourceContext(`## Validation\n\n${item}\n2. Disclose proxies.`), item);
  assert.deepEqual(unconditioned.introductions, []);
  assert.equal(unconditioned.unit.kind, 'list');
});

test('both introductory paragraphs remain exact and ordered', () => {
  const source = `## Allocation\n\nAvoid allocation where feasible.\n\nWhen outputs share a system, apply this hierarchy:\n\n1. Subdivide.\n2. Use measured causality.`;
  const context = selectedText(compileMarkdownSourceContext(source), '1. Subdivide.');
  assert.deepEqual(context.introductions.map(block => block.text), ['Avoid allocation where feasible.', 'When outputs share a system, apply this hierarchy:']);
  assert.equal(context.unit.text, source.slice(source.indexOf('Avoid')));
  const changed = selectedText(compileMarkdownSourceContext(source.replace('Avoid allocation where feasible.\n\n', '')), '1. Subdivide.');
  assert.notEqual(changed.unit.text, context.unit.text);
});

test('Chinese fullwidth colon attaches introductory prose with the same structural certainty', () => {
  for (const colon of [':', '：']) {
    const source = `## 分配\n\n满足条件时执行${colon}\n\n1. 细分。\n2. 保留依据。`;
    const index = compileMarkdownSourceContext(source);
    const context = selectedText(index, '1. 细分。');
    assert.equal(context.attribution, 'structural');
    assert.deepEqual(context.diagnostics, []);
    assert.equal(context.unit.kind, 'list_group');
    assert.equal(context.unit.text, source.slice(source.indexOf('满足')));
    assert.equal(context.introductions[0]?.text, `满足条件时执行${colon}`);
  }
});

test('heading condition preserved without interpretation; sibling headings reset ancestry and introduction', () => {
  const source = `# Method\n\n## When multiple products are saleable\n\n### Required hierarchy\n\nApply:\n\n1. Subdivide.\n\n### Separate scope\n\n1. Review waste.\n\n## Other\n\n1. Disclose.`;
  const index = compileMarkdownSourceContext(source);
  const first = selectedText(index, '1. Subdivide.');
  assert.deepEqual(first.headings.map(heading => heading.text), ['# Method', '## When multiple products are saleable', '### Required hierarchy']);
  const sibling = selectedText(index, '1. Review waste.');
  assert.equal(sibling.headings.at(-1)?.text, '### Separate scope');
  assert.deepEqual(sibling.introductions, []);
  const other = selectedText(index, '1. Disclose.');
  assert.deepEqual(other.headings.map(heading => heading.text), ['# Method', '## Other']);
  assert.ok(!other.section.text.includes('Apply:'));
  const changed = selectedText(compileMarkdownSourceContext(source.replace('When multiple products are saleable', 'General allocation')), '1. Subdivide.');
  assert.equal(changed.unit.text, first.unit.text);
  assert.notDeepEqual(changed.headings, first.headings);
});

test('nested items expose complete outer group, parent chain, and attached exception subtree', () => {
  const source = `# Method\n\n## Rules\n\nWhen needed, apply:\n\n1. Measure the input.\n\n   Except when records are unavailable:\n\n   - Disclose the missing record.\n\n     Retain the complete reason.\n   - Request evidence.\n2. Record the output.`;
  const index = compileMarkdownSourceContext(source);
  const context = selectedText(index, '- Disclose the missing record.');
  assert.equal(context.attribution, 'structural');
  assert.equal(context.groups.length, 2);
  assert.equal(context.enclosingItems.length, 2);
  assert.ok(context.selectedBlock?.text.includes('Retain the complete reason.'));
  assert.ok(context.enclosingItems[0]?.text.includes('Except when records are unavailable:'));
  assert.equal(context.unit.text, source.slice(source.indexOf('When needed')));
  assert.equal(context.groups[1]?.ordered, false);
});

test('line selection retains nested indentation while associating the complete item', () => {
  const index = compileMarkdownSourceContext('# Method\n\nApply:\n\n1. Parent\n   - Child\n     Continued.');
  const context = contextForSpan(index, { startLine: 6, endLine: 6 });
  assert.equal(context.selected.text, '   - Child');
  assert.equal(context.selectedBlock?.text, '- Child\n     Continued.');
  assert.equal(context.enclosingItems.length, 2);
});

test('table row and cell selections preserve intro, full GFM table, escaped pipes and header', () => {
  const source = `## Rules\n\nWhen shared, apply:\n\n| ID | Rule |\n| --- | --- |\n| R1 | Disclose A\\|B and **basis**. |\n| R2 | Keep order. |\n\nFollowing separate scope.`;
  const index = compileMarkdownSourceContext(source);
  const context = selectedText(index, 'Disclose A\\|B');
  assert.equal(context.attribution, 'structural');
  assert.equal(context.unit.kind, 'table_group');
  assert.equal(context.unit.text, source.slice(source.indexOf('When'), source.indexOf('\n\nFollowing')));
  assert.equal(context.groups[0]?.headers[0]?.text, '| ID | Rule |');
  assert.equal(context.groups[0]?.items.length, 3);
  assert.equal(context.selectedBlock?.text, '| R1 | Disclose A\\|B and **basis**. |');
  const following = selectedText(index, 'Following separate scope.');
  assert.equal(following.unit.text, 'Following separate scope.');
  assert.deepEqual(following.introductions, []);
});

test('table delimiter and list-marker selections remain source-addressable', () => {
  const index = compileMarkdownSourceContext('## Rules\n\nApply:\n\n| ID | Rule |\n| --- | --- |\n| R1 | Text |');
  const delimiter = selectedText(index, '| --- | --- |');
  assert.equal(delimiter.unit.kind, 'table_group');
  assert.equal(delimiter.selectedBlock?.kind, 'table');
  const list = selectedText(compileMarkdownSourceContext('Apply:\n\n1. Text.'), '1.');
  assert.equal(list.selectedBlock?.kind, 'listItem');
});

test('fenced code containing fake headings/lists is one code block', () => {
  const source = '# Method\n\n## Rules\n\n```markdown\n## Fake\nReject:\n1. Fake rule.\n```\n\nReal text.';
  const index = compileMarkdownSourceContext(source);
  const context = selectedText(index, '1. Fake rule.');
  assert.equal(context.unit.kind, 'code');
  assert.equal(context.selectedBlock?.kind, 'code');
  assert.deepEqual(context.headings.map(heading => heading.text), ['# Method', '## Rules']);
  assert.deepEqual(context.groups, []);
  assert.deepEqual(context.introductions, []);
});

test('non-colon preceding prose retains full section with deterministic uncertainty', () => {
  const source = '# Method\n\n## Rules\n\nThe hierarchy applies when outputs are shared.\n\n1. Subdivide.\n2. Allocate.\n\nKeep the rationale.\n\n## Next\n\nSeparate.';
  const index = compileMarkdownSourceContext(source);
  const context = selectedText(index, '1. Subdivide.');
  assert.equal(context.attribution, 'uncertain');
  assert.equal(context.diagnostics[0]?.code, 'AMBIGUOUS_PROSE_ATTACHMENT');
  assert.equal(context.unit.kind, 'section');
  assert.equal(context.unit.text, source.slice(source.indexOf('## Rules'), source.indexOf('## Next')));
  assert.equal(context.introductions[0]?.text, 'The hierarchy applies when outputs are shared.');
  assert.deepEqual(selectedText(index, '1. Subdivide.'), context);
});

test('following rejection/consequence remains in enclosing section without inheriting list introduction', () => {
  const source = '## Validation\n\nCheck each:\n\n1. Missing source.\n2. Mixed basis.\n\nReject the package if a check fails.\n\n## Next\n\nOther.';
  const index = compileMarkdownSourceContext(source);
  const context = selectedText(index, '1. Missing source.');
  assert.equal(context.unit.text, 'Check each:\n\n1. Missing source.\n2. Mixed basis.');
  assert.ok(context.section.text.includes('Reject the package if a check fails.'));
  const following = selectedText(index, 'Reject the package if a check fails.');
  assert.equal(following.unit.text, 'Reject the package if a check fails.');
  assert.deepEqual(following.introductions, []);
  assert.deepEqual(following.groups, []);
});

test('unsupported quotation/container context retains section and reports uncertainty', () => {
  const source = '## Rules\n\nScope remains relevant.\n\n> When shared:\n>\n> 1. Subdivide.\n\n## Next';
  const context = selectedText(compileMarkdownSourceContext(source), '1. Subdivide.');
  assert.equal(context.attribution, 'uncertain');
  assert.equal(context.diagnostics[0]?.code, 'UNSUPPORTED_CONTAINER');
  assert.ok(context.unit.text.includes('Scope remains relevant.'));
  assert.ok(context.unit.text.includes('> When shared:'));
  assert.equal(context.groups[0]?.kind, 'list');
});

test('UTF-16 offsets, non-ASCII columns, BOM and CRLF/lone CR normalize consistently', () => {
  const source = '# 方法\n\nWhen 🦞 outputs share 系统:\n\n1. 保留 measured basis.';
  const lf = compileMarkdownSourceContext(source);
  const crlf = compileMarkdownSourceContext(`\uFEFF${source.replaceAll('\n', '\r\n')}`);
  const cr = compileMarkdownSourceContext(source.replaceAll('\n', '\r'));
  assert.equal(crlf.normalization, 'utf8-lf-v1');
  assert.equal(crlf.source, source);
  assert.equal(cr.source, source);
  const selected = selectedText(lf, 'outputs');
  assert.equal(selected.selected.span.start.offset, source.indexOf('outputs'));
  assert.equal(selected.selected.span.start.line, 3);
  assert.equal(selected.selected.span.start.column, 9);
  assert.deepEqual(selectedText(crlf, 'outputs'), selected);
  assert.deepEqual(selectedText(cr, 'outputs'), selected);
});

test('authored order is preserved, including changed list ordinals', () => {
  const source = 'Apply:\n\n1. First.\n2. Second.';
  const baseline = selectedText(compileMarkdownSourceContext(source), '1. First.');
  const changed = selectedText(compileMarkdownSourceContext('Apply:\n\n2. Second.\n1. First.'), '1. First.');
  assert.deepEqual(changed.groups[0]?.items.map(block => block.text), ['2. Second.', '1. First.']);
  assert.notEqual(changed.unit.text, baseline.unit.text);
});

test('cross-block/cross-section and whitespace selections cannot silently lose source', () => {
  const source = '## One\n\nFirst.\n\n## Two\n\nSecond.';
  const index = compileMarkdownSourceContext(source);
  const context = contextForSpan(index, { startLine: 3, endLine: 7 });
  assert.equal(context.unit.text, source);
  assert.equal(context.attribution, 'uncertain');
  assert.equal(context.diagnostics[0]?.code, 'SPAN_CROSSES_BLOCKS');
  const blank = contextForSpan(index, { startOffset: source.indexOf('\n\n') + 1, endOffset: source.indexOf('\n\n') + 2 });
  assert.equal(blank.attribution, 'uncertain');
  assert.equal(blank.selectedBlock, null);
});

test('invalid offsets/lines and resource overrun fail explicitly instead of slicing silently', () => {
  const index = compileMarkdownSourceContext('## Rules\n\nText.\n');
  for (const selection of [
    { startOffset: -1, endOffset: 2 }, { startOffset: 0, endOffset: 1000 },
    { startOffset: 2, endOffset: 2 }, { startOffset: 1.5, endOffset: 3 },
    { startLine: 0, endLine: 1 }, { startLine: 1, endLine: 99 },
    { startLine: 3, endLine: 2 }, { startLine: 1.5, endLine: 2 },
  ]) assert.throws(() => contextForSpan(index, selection), RangeError);
  assert.throws(() => contextForSpan(compileMarkdownSourceContext(''), { startOffset: 0, endOffset: 0 }), RangeError);
  assert.throws(() => compileMarkdownSourceContext('x'.repeat(8_000_001)), RangeError);
});

test('allocation condition and preceding sentence mutations remain visible with identical items', () => {
  const fixture = oracle.fixtures.find(candidate => candidate.name === 'homarus_multioutput_hierarchy');
  assert.ok(fixture);
  const beforeCondition = fixture.introduction.markdown.indexOf(' When ');
  assert.ok(beforeCondition > 0);
  const firstItem = fixture.items[0];
  assert.ok(firstItem);
  const source = `## Allocation\n\n${fixture.normative_unit.markdown}`;
  const baseline = selectedText(compileMarkdownSourceContext(source), firstItem.markdown);
  for (const replacement of [
    fixture.introduction.markdown.slice(0, beforeCondition),
    fixture.introduction.markdown.slice(beforeCondition + 1),
    fixture.introduction.markdown.replace('multiple saleable species', 'one saleable species'),
  ]) {
    const changed = selectedText(compileMarkdownSourceContext(source.replace(fixture.introduction.markdown, replacement)), firstItem.markdown);
    assert.equal(changed.selected.text, baseline.selected.text);
    assert.notEqual(changed.unit.text, baseline.unit.text);
    assert.notEqual(changed.introductions[0]?.text, baseline.introductions[0]?.text);
  }
});

test('setext headings, inline formatting, hard breaks and multiline list attachment preserve source', () => {
  const source = 'Method\n======\n\nRules\n-----\n\nWhen **shared**, use:\n\n1. First line  \n   continued with `basis` and [evidence](https://example.test).\n\n   Attached second paragraph.\n2. Other item.';
  const context = selectedText(compileMarkdownSourceContext(source), 'continued with `basis`');
  assert.deepEqual(context.headings.map(heading => heading.text), ['Method\n======', 'Rules\n-----']);
  assert.equal(context.selectedBlock?.text, '1. First line  \n   continued with `basis` and [evidence](https://example.test).\n\n   Attached second paragraph.');
  assert.equal(context.introductions[0]?.text, 'When **shared**, use:');
  assert.equal(context.unit.text, source.slice(source.indexOf('When')));
});


test('ancestor heading scope preserves H2 preamble across H3 while nearest section stays bounded', () => {
  const source = '# Method\n\nAll requirements use the declared gate.\n\n## Allocation\n\nWhen multiple outputs share the system, apply the following hierarchy.\n\n### Primary hierarchy\n\n1. Subdivide.\n2. Use measured causality.\n\n### Economic fallback\n\n1. Disclose prices.\n\n## Validation\n\n1. Validate the package.';
  const index = compileMarkdownSourceContext(source);
  const itemStart = source.indexOf('1. Subdivide.');
  const selection = { startOffset: itemStart, endOffset: itemStart + '1. Subdivide.'.length };
  const context = contextForSpan(index, selection);
  const nearest = sectionForSpan(index, selection);
  const h2 = sectionForSpan(index, selection, 2);
  const h1 = index.sectionForSpan(selection, 1);
  assert.deepEqual(nearest, context.section);
  assert.equal(nearest.text, source.slice(source.indexOf('### Primary'), source.indexOf('### Economic')));
  assert.equal(h2.text, source.slice(source.indexOf('## Allocation'), source.indexOf('## Validation')));
  assert.ok(h2.text.includes('When multiple outputs share the system'));
  assert.ok(h2.text.includes('### Economic fallback'));
  assert.equal(h2.span.start.line, 5);
  assert.equal(h2.span.end.line, 18);
  assert.equal(h2.text, index.source.slice(h2.span.start.offset, h2.span.end.offset));
  assert.equal(h1.text, source);
  assert.ok(h1.text.includes('All requirements use the declared gate.'));
  assert.equal(context.attribution, 'structural');
  assert.deepEqual(context.introductions, []);
  assert.equal(context.unit.text, '1. Subdivide.\n2. Use measured causality.');
  const sibling = selectedText(index, '1. Disclose prices.');
  assert.deepEqual(sectionForSpan(index, { startOffset: sibling.selected.span.start.offset, endOffset: sibling.selected.span.end.offset }, 2), h2);
});

test('ancestor section depth queries reject absent depth and crossing scope instead of inventing ancestry', () => {
  const source = '# Method\n\n## Rules\n\n### First\n\n1. First rule.\n\n## Next\n\n1. Next rule.\n\n# Other method\n\nOther.';
  const index = compileMarkdownSourceContext(source);
  const first = selectedText(index, '1. First rule.').selected.span;
  const selection = { startOffset: first.start.offset, endOffset: first.end.offset };
  for (const depth of [0, 4, 7, 1.5]) assert.throws(() => sectionForSpan(index, selection, depth), RangeError);
  assert.throws(() => sectionForSpan(index, { startLine: 7, endLine: 11 }, 2), RangeError);
  const h1 = sectionForSpan(index, selection, 1);
  assert.equal(h1.text, source.slice(0, source.indexOf('# Other method')));
  const noHeading = compileMarkdownSourceContext('Ordinary preamble.\n\n1. Rule.');
  assert.throws(() => sectionForSpan(noHeading, { startLine: 3, endLine: 3 }, 1), RangeError);
});
