import { unified } from 'unified';
import remarkParse from 'remark-parse';
import remarkGfm from 'remark-gfm';
import type { Nodes, Root } from 'mdast';

/** All locations refer to BOM-free, LF-normalized source. Offsets are zero-based
 * UTF-16 code units, start inclusive/end exclusive; lines/columns are one-based.
 * No scientific applicability, action, predicate or stable identity is inferred. */
export interface SourcePoint {
  readonly offset: number;
  readonly line: number;
  readonly column: number;
}
export interface SourceSpan {
  readonly start: SourcePoint;
  readonly end: SourcePoint;
}
export interface SourceBlock {
  readonly kind: string;
  readonly span: SourceSpan;
  readonly text: string;
}
export interface SourceHeading extends SourceBlock {
  readonly depth: number;
}
export type SourceSelection =
  | { readonly startLine: number; readonly endLine: number }
  | { readonly startOffset: number; readonly endOffset: number };
export interface StructuralGroup {
  readonly kind: 'list' | 'table';
  readonly source: SourceBlock;
  readonly ordered: boolean | null;
  /** Authored order, complete item subtrees or complete table rows. */
  readonly items: readonly SourceBlock[];
  readonly headers: readonly SourceBlock[];
}
export interface ContextDiagnostic {
  readonly code: 'AMBIGUOUS_PROSE_ATTACHMENT' | 'UNSUPPORTED_CONTAINER' | 'SPAN_CROSSES_BLOCKS' | 'NO_SOURCE_BLOCK';
  readonly message: string;
  readonly span: SourceSpan;
}
export interface NormativeSourceContext {
  readonly unit: SourceBlock;
  /** Complete enclosing section retains surrounding prose whose semantic relationship
   * cannot be established by Markdown. Structural attribution is not a claim of
   * scientific completeness or applicability of the isolated unit. */
  readonly section: SourceBlock;
  /** Exact caller-selected source, including indentation. */
  readonly selected: SourceBlock;
  /** Complete selected list item / table row / block, never a cell fragment. */
  readonly selectedBlock: SourceBlock | null;
  readonly headings: readonly SourceHeading[];
  readonly introductions: readonly SourceBlock[];
  /** Outer-to-inner complete item subtrees, including the selected item. */
  readonly enclosingItems: readonly SourceBlock[];
  readonly groups: readonly StructuralGroup[];
  readonly attribution: 'structural' | 'uncertain';
  readonly diagnostics: readonly ContextDiagnostic[];
}
export interface MarkdownSourceContextIndex {
  readonly source: string;
  readonly normalization: 'utf8-lf-v1';
  readonly contextForSpan: (selection: SourceSelection) => NormativeSourceContext;
  /** Exact enclosing heading scope at the requested depth, or the nearest section
   * when omitted. This retains ancestor preambles without serializing every
   * ancestor section into every rule context. Depth is structural, not semantic.
   * Missing depths or selections crossing that requested scope fail explicitly. */
  readonly sectionForSpan: (selection: SourceSelection, depth?: number) => SourceBlock;
}

interface Entry {
  readonly node: Nodes;
  readonly start: number;
  readonly end: number;
  readonly parent: Entry | null;
  readonly children: Entry[];
}
const MAX_SOURCE_CODE_UNITS = 8_000_000;
const MAX_NODES = 250_000;
const MAX_DEPTH = 256;

/** Pure parse/index operation. Resource bounds fail explicitly, never truncate. */
export function compileMarkdownSourceContext(input: string): MarkdownSourceContextIndex {
  return compileMarkdownSourceDocument(input).index;
}

/** One newly parsed, operation-owned source and AST. Production compilers call
 * this factory from canonical text; no caller-supplied tree can bypass parsing or
 * source/AST resource bounds. The document is neither cached nor shared across
 * operations. Existing index-only callers retain their original public shape. */
export function compileMarkdownSourceDocument(input: string): {
  readonly tree: Root;
  readonly index: MarkdownSourceContextIndex;
} {
  const source = input.replace(/^\uFEFF/, '').replace(/\r\n?/g, '\n');
  if (source.length > MAX_SOURCE_CODE_UNITS) throw new RangeError('Markdown exceeds source-context source limit');
  const tree = unified().use(remarkParse).use(remarkGfm).parse(source);
  const lineStarts = [0];
  for (let offset = 0; offset < source.length; offset += 1) {
    if (source[offset] === '\n') lineStarts.push(offset + 1);
  }
  let count = 0;
  function indexNode(node: Nodes, parent: Entry | null, depth: number): Entry {
    count += 1;
    if (count > MAX_NODES || depth > MAX_DEPTH) throw new RangeError('Markdown exceeds source-context AST limit');
    const start = node.position?.start.offset;
    const end = node.position?.end.offset;
    if (start === undefined || end === undefined) throw new Error('Markdown parser omitted a source position');
    const entry: Entry = { node, start, end, parent, children: [] };
    if ('children' in node) {
      for (const child of node.children) entry.children.push(indexNode(child, entry, depth + 1));
    }
    return entry;
  }
  const root = indexNode(tree, null, 0);
  function point(offset: number): SourcePoint {
    let low = 0;
    let high = lineStarts.length;
    while (low + 1 < high) {
      const middle = Math.floor((low + high) / 2);
      const value = lineStarts[middle];
      if (value !== undefined && value <= offset) low = middle;
      else high = middle;
    }
    return { offset, line: low + 1, column: offset - (lineStarts[low] ?? 0) + 1 };
  }
  function block(start: number, end: number, kind: string): SourceBlock {
    return { kind, span: { start: point(start), end: point(end) }, text: source.slice(start, end) };
  }
  function entryBlock(entry: Entry): SourceBlock {
    return block(entry.start, entry.end, entry.node.type);
  }
  function headingContext(start: number): SourceHeading[] {
    const headings: SourceHeading[] = [];
    for (const entry of root.children) {
      if (entry.start > start) break;
      if (entry.node.type === 'heading') {
        while (headings.length > 0 && (headings.at(-1)?.depth ?? 0) >= entry.node.depth) headings.pop();
        headings.push({ ...entryBlock(entry), depth: entry.node.depth });
      }
    }
    return headings;
  }
  function section(start: number, end: number, depth?: number): SourceBlock {
    if (depth !== undefined && (!Number.isInteger(depth) || depth < 1 || depth > 6)) {
      throw new RangeError('Source section depth must be an integer from 1 to 6');
    }
    const headings = headingContext(start);
    const current = depth === undefined ? headings.at(-1) : headings.find(heading => heading.depth === depth);
    if (depth !== undefined && !current) {
      throw new RangeError('Requested heading depth does not enclose the source selection');
    }
    let sectionStart = current?.span.start.offset ?? 0;
    let sectionEnd = source.length;
    for (const entry of root.children) {
      if (entry.start > start && entry.node.type === 'heading' && (!current || entry.node.depth <= current.depth)) {
        sectionEnd = entry.start;
        break;
      }
    }
    // A selection spanning sections cannot be assigned to either one safely.
    if (end > sectionEnd) {
      if (depth !== undefined) throw new RangeError('Source selection crosses the requested heading scope');
      sectionStart = 0;
      sectionEnd = source.length;
    }
    return block(sectionStart, sectionEnd, 'section');
  }
  function offsets(selection: SourceSelection): { start: number; end: number } {
    let start: number;
    let end: number;
    if ('startLine' in selection) {
      const { startLine, endLine } = selection;
      if (!Number.isInteger(startLine) || !Number.isInteger(endLine) || startLine < 1 || endLine < startLine || endLine > lineStarts.length) {
        throw new RangeError('Source line selection is outside normalized Markdown');
      }
      start = lineStarts[startLine - 1] ?? 0;
      const next = lineStarts[endLine];
      end = next === undefined ? source.length : next - 1;
    } else {
      start = selection.startOffset;
      end = selection.endOffset;
    }
    if (!Number.isInteger(start) || !Number.isInteger(end) || start < 0 || end <= start || end > source.length) {
      throw new RangeError('Source offset selection must be a non-empty normalized Markdown span');
    }
    return { start, end };
  }
  function introBefore(entry: Entry): Entry[] {
    const siblings = entry.parent?.children ?? [];
    let position = siblings.indexOf(entry) - 1;
    const introductions: Entry[] = [];
    while (position >= 0) {
      const previous = siblings[position];
      if (!previous || previous.node.type !== 'paragraph') break;
      introductions.unshift(previous);
      position -= 1;
    }
    return introductions;
  }
  function group(entry: Entry): StructuralGroup {
    if (entry.node.type !== 'list' && entry.node.type !== 'table') throw new Error('Expected a Markdown group');
    const isTable = entry.node.type === 'table';
    return {
      kind: isTable ? 'table' : 'list',
      source: entryBlock(entry),
      ordered: entry.node.type === 'list' ? Boolean(entry.node.ordered) : null,
      items: entry.children.map(entryBlock),
      headers: isTable ? entry.children.slice(0, 1).map(entryBlock) : [],
    };
  }
  function query(selection: SourceSelection): NormativeSourceContext {
    const { start, end } = offsets(selection);
    const selected = block(start, end, 'selection');
    // Ignore surrounding layout only for node association, never for output.
    let matchStart = start;
    let matchEnd = end;
    while (matchStart < matchEnd && /\s/u.test(source[matchStart] ?? '')) matchStart += 1;
    while (matchEnd > matchStart && /\s/u.test(source[matchEnd - 1] ?? '')) matchEnd -= 1;
    const path: Entry[] = [];
    let cursor: Entry = root;
    while (matchStart < matchEnd) {
      const child = cursor.children.find(entry => entry.start <= matchStart && entry.end >= matchEnd);
      if (!child) break;
      path.push(child);
      cursor = child;
    }
    const top = path[0];
    const headings = headingContext(matchStart);
    const enclosingItems = path.filter(entry => entry.node.type === 'listItem').map(entryBlock);
    const containers = path.filter(entry => entry.node.type === 'list' || entry.node.type === 'table');
    let primary = containers[0] ?? top;
    let introductions = primary ? introBefore(primary) : [];
    // Selecting introductory prose exposes its following group, too.
    if (primary?.node.type === 'paragraph') {
      const siblings = primary.parent?.children ?? [];
      let nextPosition = siblings.indexOf(primary) + 1;
      while (siblings[nextPosition]?.node.type === 'paragraph') nextPosition += 1;
      const next = siblings[nextPosition];
      if (next && (next.node.type === 'list' || next.node.type === 'table')) {
        primary = next;
        introductions = introBefore(primary);
        containers.push(primary);
      } else introductions = [];
    }
    const completeSelected = [...path].reverse().find(entry => entry.node.type === 'listItem' || entry.node.type === 'tableRow') ?? top;
    const groups = containers.map(group);
    let unit = primary ? entryBlock(primary) : section(start, end);
    const diagnostics: ContextDiagnostic[] = [];
    function uncertain(code: ContextDiagnostic['code'], message: string): void {
      unit = section(start, end);
      diagnostics.push({ code, message, span: selected.span });
    }
    if (!top) {
      const overlapsBlock = root.children.some(entry => entry.start < matchEnd && entry.end > matchStart);
      uncertain(overlapsBlock ? 'SPAN_CROSSES_BLOCKS' : 'NO_SOURCE_BLOCK', 'Selection cannot be assigned to one source block; complete relevant section retained.');
    } else if (top.node.type === 'heading' || (top.node.type !== 'paragraph' && top.node.type !== 'list' && top.node.type !== 'table' && top.node.type !== 'code' && top.node.type !== 'thematicBreak')) {
      uncertain('UNSUPPORTED_CONTAINER', 'Container scope is not established by this compiler; complete relevant section retained.');
    } else if (primary && (primary.node.type === 'list' || primary.node.type === 'table')) {
      const lastIntro = introductions.at(-1);
      if (lastIntro) {
        unit = block(introductions[0]?.start ?? primary.start, primary.end, primary.node.type === 'list' ? 'list_group' : 'table_group');
        if (!/[:：]$/u.test(source.slice(lastIntro.start, lastIntro.end).trimEnd())) {
          uncertain('AMBIGUOUS_PROSE_ATTACHMENT', 'Preceding prose may govern this group but Markdown does not establish its scope; complete relevant section retained.');
        }
      }
    }
    return {
      unit, section: section(start, end), selected, selectedBlock: completeSelected ? entryBlock(completeSelected) : null,
      headings, introductions: introductions.map(entryBlock), enclosingItems, groups,
      attribution: diagnostics.length === 0 ? 'structural' : 'uncertain', diagnostics,
    };
  }
  function sectionQuery(selection: SourceSelection, depth?: number): SourceBlock {
    const { start, end } = offsets(selection);
    return section(start, end, depth);
  }
  return { tree, index: { source, normalization: 'utf8-lf-v1', contextForSpan: query, sectionForSpan: sectionQuery } };
}

export function contextForSpan(index: MarkdownSourceContextIndex, selection: SourceSelection): NormativeSourceContext {
  return index.contextForSpan(selection);
}

/** Read a complete enclosing section without copying ancestor text into the index. */
export function sectionForSpan(index: MarkdownSourceContextIndex, selection: SourceSelection, depth?: number): SourceBlock {
  return index.sectionForSpan(selection, depth);
}
