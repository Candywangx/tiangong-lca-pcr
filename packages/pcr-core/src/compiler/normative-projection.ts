import { createHash } from 'node:crypto';
import { unified } from 'unified';
import remarkParse from 'remark-parse';
import remarkGfm from 'remark-gfm';
import type { Nodes, Table, TableCell } from 'mdast';
import {
  compileMarkdownSourceContext, contextForSpan, sectionForSpan,
  type SourceHeading, type SourceSpan,
} from './source-context.ts';

export type NormativeFamily = 'system_boundary' | 'allocation' | 'validation';
export interface NormativeRule {
  rule_id: string;
  applies_to: string;
  rule: string;
  source_ids: string[];
}
export interface NormativeAncestorContext {
  readonly span: SourceSpan;
  readonly markdown: string;
}
export interface NormativeUnit {
  readonly unit_id: string;
  readonly family: NormativeFamily;
  readonly span: SourceSpan;
  readonly markdown: string;
  readonly headings: readonly SourceHeading[];
  /** Exact document/H1 preambles in outer-to-inner structural order. Their
   * semantic applicability is not inferred; H2 source remains separately bounded. */
  readonly ancestor_context: readonly NormativeAncestorContext[];
}
export interface NormativeBinding {
  readonly pointer: string;
  readonly rule_id: string;
  readonly identity_kind: 'explicit' | 'snapshot_local';
  readonly unit_id: string;
  readonly source_span: SourceSpan;
}
export interface NormativeDiagnostic {
  readonly code: 'UNSUPPORTED_NORMATIVE_BLOCK' | 'NON_RULE_TABLE' | 'AMBIGUOUS_PROSE_ATTACHMENT' | 'SNAPSHOT_RULE_ID_DISAMBIGUATED';
  readonly message: string;
  readonly unit_id: string;
  readonly source_span: SourceSpan;
}
export interface NormativeProjectionContext {
  readonly normalization: 'utf8-lf-v1';
  readonly source_sha256: string;
  readonly identity_scope: 'projection_snapshot';
  readonly units: readonly NormativeUnit[];
  readonly bindings: readonly NormativeBinding[];
  readonly diagnostics: readonly NormativeDiagnostic[];
}
export interface NormativeProjection {
  readonly systemBoundaryRules: NormativeRule[];
  readonly allocationRules: NormativeRule[];
  readonly validationRules: NormativeRule[];
  readonly context: NormativeProjectionContext;
}

/** Errors retain both offending authored positions; identifiers are unique only
 * within their legacy family, and fallback identities belong to this snapshot. */
export class NormativeProjectionError extends Error {
  readonly code: 'DUPLICATE_NORMATIVE_RULE_ID' | 'INVALID_EXPLICIT_RULE_ID';
  readonly family: NormativeFamily;
  readonly rule_id: string;
  readonly source_spans: readonly SourceSpan[];
  constructor(code: NormativeProjectionError['code'], family: NormativeFamily, ruleId: string, spans: readonly SourceSpan[]) {
    const locations = spans.map(span => `${span.start.line}:${span.start.column}`).join(' and ');
    super(`${code}: ${family} rule ${JSON.stringify(ruleId)} at ${locations}; author distinct non-empty explicit rule IDs.`);
    this.name = 'NormativeProjectionError';
    this.code = code;
    this.family = family;
    this.rule_id = ruleId;
    this.source_spans = spans;
  }
}

function stripInlineCode(value: string): string {
  return value.replace(/`([^`]+)`/gu, '$1').trim();
}
function display(value: string): string {
  return stripInlineCode(value).replace(/\s+/gu, ' ').trim();
}
function normalizeId(value: string): string {
  return value.normalize('NFKD').replace(/[\u0300-\u036f]/gu, '').toLowerCase()
    .replace(/&/gu, ' and ').replace(/[^a-z0-9]+/gu, '_').replace(/^_+|_+$/gu, '');
}
function normalizeHeader(value: string): string {
  const raw = stripInlineCode(value).toLowerCase();
  const localized: Readonly<Record<string, string>> = {
    '规则编号': 'rule_id', '适用对象': 'applies_to', '适用于': 'applies_to',
    '规则': 'rule', '要求': 'rule', '来源': 'source_ids',
  };
  return localized[raw] ?? raw.replace(/[^a-z0-9]+/gu, '_').replace(/^_+|_+$/gu, '');
}
function sourceIds(value: string): string[] {
  const codes = value.match(/`([^`]+)`/gu) ?? [];
  return codes.length > 0 ? codes.map(code => code.slice(1, -1).trim()).filter(Boolean)
    : stripInlineCode(value).split(/[,;]/u).map(entry => entry.trim()).filter(Boolean);
}
function headingText(node: Nodes): string {
  if ('value' in node) return node.value;
  if ('children' in node) return node.children.map(headingText).join('');
  return '';
}
function sectionFamily(title: string): NormativeFamily | null {
  const name = title.toLowerCase();
  // Preserve legacy section-classification precedence where titles overlap.
  if (['product category identity', '产品类别识别', 'reference flow', 'functional unit', '参考流', '功能单位'].some(alias => name.includes(alias))) return null;
  if (['system boundary', '系统边界', 'cut-off rules', 'cutoff rules', '截断规则'].some(alias => name.includes(alias))) return 'system_boundary';
  if (['allocation', '分配'].some(alias => name.includes(alias))) return 'allocation';
  if (['validation rules', '验证规则', '校验规则'].some(alias => name.includes(alias))) return 'validation';
  return null;
}
const familyOptions = {
  system_boundary: { appliesTo: 'foreground_system_boundary', pointer: '/system_boundary/rules' },
  allocation: { appliesTo: 'foreground_burden_allocation', pointer: '/allocation_rules' },
  validation: { appliesTo: 'foreground_dataset_conformance', pointer: '/validation_rules' },
} satisfies Record<NormativeFamily, { appliesTo: string; pointer: string }>;

/** Project only the three reviewed legacy families. Source association is structural:
 * whole actual H2 sections remain exact, including preambles and following notes.
 * Exact ancestor preambles remain separately bound without copying unrelated
 * sections; extraction and identity remain scoped to the original H2.
 * The flattened display strings make no assertion of scientific applicability. */
export function compileNormativeProjection(markdown: string): NormativeProjection {
  const index = compileMarkdownSourceContext(markdown);
  const source = index.source;
  // Bounds are enforced by the shared index before this second, typed AST parse.
  const tree = unified().use(remarkParse).use(remarkGfm).parse(source);
  const arrays: Record<NormativeFamily, NormativeRule[]> = { system_boundary: [], allocation: [], validation: [] };
  const authoredIds: Record<NormativeFamily, Map<string, SourceSpan>> = {
    system_boundary: new Map(), allocation: new Map(), validation: new Map(),
  };
  const pending: { unit: NormativeUnit; node: Nodes; rule: string; explicitId: string; appliesTo: string; sources: string[]; sourceSpan: SourceSpan }[] = [];
  const units: NormativeUnit[] = [];
  const bindings: NormativeBinding[] = [];
  const diagnostics: NormativeDiagnostic[] = [];
  const diagnosticKeys = new Set<string>();
  let active: NormativeUnit | null = null;
  let ancestorHeading: Nodes | null = null;
  let hasAncestorPreamble = false;
  let ancestorHasH2 = false;
  let hasDocumentPreamble = false;
  let documentHasScopeHeading = false;
  let documentPreamble: NormativeAncestorContext | null = null;
  let ancestorPreamble: NormativeAncestorContext | null = null;

  function selection(node: Nodes): { startOffset: number; endOffset: number } {
    const startOffset = node.position?.start.offset;
    const endOffset = node.position?.end.offset;
    if (startOffset === undefined || endOffset === undefined) throw new Error('Markdown parser omitted a normative source position');
    return { startOffset, endOffset };
  }
  function raw(node: Nodes): string {
    const span = selection(node);
    return source.slice(span.startOffset, span.endOffset);
  }
  function span(node: Nodes): SourceSpan {
    return contextForSpan(index, selection(node)).selected.span;
  }
  function preamble(startOffset: number, endOffset: number): NormativeAncestorContext {
    const selected = contextForSpan(index, { startOffset, endOffset }).selected;
    return { span: selected.span, markdown: selected.text };
  }
  function diagnose(unit: NormativeUnit, node: Nodes, code: NormativeDiagnostic['code'], message: string): void {
    const sourceSpan = span(node);
    const key = `${code}:${sourceSpan.start.offset}:${sourceSpan.end.offset}`;
    if (diagnosticKeys.has(key)) return;
    diagnosticKeys.add(key);
    diagnostics.push({ code, message, unit_id: unit.unit_id, source_span: sourceSpan });
  }
  function add(unit: NormativeUnit, node: Nodes, rule: string, explicit = '', appliesTo = '', sources: string[] = []): void {
    if (!rule) return;
    const family = unit.family;
    const sourceSpan = span(node);
    const explicitId = normalizeId(explicit);
    if (explicit.trim() && !explicitId) throw new NormativeProjectionError('INVALID_EXPLICIT_RULE_ID', family, explicit, [sourceSpan]);
    if (explicitId) {
      const previous = authoredIds[family].get(explicitId);
      if (previous) throw new NormativeProjectionError('DUPLICATE_NORMATIVE_RULE_ID', family, explicitId, [previous, sourceSpan]);
      authoredIds[family].set(explicitId, sourceSpan);
    }
    pending.push({ unit, node, rule, explicitId, appliesTo, sources, sourceSpan });
    const local = contextForSpan(index, selection(node));
    for (const diagnostic of local.diagnostics) {
      if (diagnostic.code === 'AMBIGUOUS_PROSE_ATTACHMENT') diagnose(unit, node, diagnostic.code, diagnostic.message);
    }
  }
  function flattenItem(unit: NormativeUnit, node: Nodes): string[] {
    if (node.type === 'paragraph') return [raw(node)];
    if (node.type === 'list' || node.type === 'listItem') return node.children.flatMap(child => flattenItem(unit, child));
    diagnose(unit, node, 'UNSUPPORTED_NORMATIVE_BLOCK', `Unsupported ${node.type} inside a rule item is retained in its complete H2 source; its content is not inferred as a flat rule.`);
    return [];
  }
  function cellText(cell: TableCell): string {
    const first = cell.children[0];
    const last = cell.children.at(-1);
    if (!first || !last) return '';
    return source.slice(selection(first).startOffset, selection(last).endOffset);
  }
  function projectTable(unit: NormativeUnit, node: Table): void {
    const header = node.children[0];
    const headers = new Map(header?.children.map((cell, position) => [normalizeHeader(cellText(cell)), position]) ?? []);
    if (!headers.has('rule') && !headers.has('requirement')) {
      diagnose(unit, node, 'NON_RULE_TABLE', 'Table has no rule or requirement column; complete H2 source retained without inferring normative rows.');
      return;
    }
    for (const row of node.children.slice(1)) {
      function cell(names: readonly string[]): string {
        for (const name of names) {
          const position = headers.get(name);
          if (position !== undefined) {
            const value = row.children[position];
            return value ? cellText(value).trim() : '';
          }
        }
        return '';
      }
      const rule = stripInlineCode(cell(['rule', 'requirement']));
      if (!rule) {
        diagnose(unit, row, 'UNSUPPORTED_NORMATIVE_BLOCK', 'Empty normative rule cell is retained in complete H2 source without creating a flat rule.');
        continue;
      }
      add(unit, row, rule, cell(['rule_id', 'requirement_id', 'id']), stripInlineCode(cell(['applies_to', 'scope'])), sourceIds(cell(['source_ids', 'sources'])));
    }
  }
  for (let position = 0; position < tree.children.length; position += 1) {
    const node = tree.children[position];
    if (!node) continue;
    if (node.type === 'heading' && node.depth <= 2) {
      if (!documentHasScopeHeading && hasDocumentPreamble) {
        documentPreamble = preamble(0, selection(node).startOffset);
      }
      documentHasScopeHeading = true;
      active = null;
      if (node.depth === 1) {
        ancestorHeading = node;
        hasAncestorPreamble = false;
        ancestorHasH2 = false;
        ancestorPreamble = null;
        continue;
      }
      if (!ancestorHasH2 && ancestorHeading && hasAncestorPreamble) {
        ancestorPreamble = preamble(selection(ancestorHeading).startOffset, selection(node).startOffset);
      }
      ancestorHasH2 = true;
      const family = sectionFamily(headingText(node));
      if (!family) continue;
      const selected = selection(node);
      const h2Section = sectionForSpan(index, selected, 2);
      const ancestorContext = [documentPreamble, ancestorPreamble].filter((entry): entry is NormativeAncestorContext => entry !== null);
      active = { unit_id: `normative_${h2Section.span.start.offset}`, family, span: h2Section.span,
        markdown: h2Section.text, headings: contextForSpan(index, selected).headings,
        ancestor_context: ancestorContext };
      units.push(active);
      if (ancestorContext.length > 0) {
        diagnose(active, node, 'AMBIGUOUS_PROSE_ATTACHMENT',
          'Ancestor preamble may govern this family; exact structural ancestor source retained separately without inferring applicability. Rule extraction remains scoped to this H2.');
      }
      continue;
    }
    // Keep the first ancestor preamble in scope across all sibling H2 sections.
    // Later H2 body blocks cannot become a preamble for the next family.
    // Document preambles also survive sibling H1 boundaries; initial source
    // blocks are retained conservatively rather than classified as irrelevant.
    if (!documentHasScopeHeading && node.type !== 'heading') hasDocumentPreamble = true;
    if (!ancestorHasH2 && node.type !== 'heading') hasAncestorPreamble = true;
    if (!active) continue;
    if (node.type === 'heading') continue;
    if (node.type === 'paragraph') {
      const next = tree.children[position + 1];
      const introduces = /[:：]$/u.test(raw(node).trim()) && (next?.type === 'list' || next?.type === 'table');
      if (!introduces) add(active, node, display(raw(node)));
    } else if (node.type === 'list') {
      for (const item of node.children) add(active, item, display(flattenItem(active, item).join(' ')));
    } else if (node.type === 'table') projectTable(active, node);
    else diagnose(active, node, 'UNSUPPORTED_NORMATIVE_BLOCK', `Unsupported ${node.type} is retained in complete H2 source; no flat normative rule is inferred.`);
  }
  // Reserve every authored identity before allocating snapshot-local IDs. This
  // preserves explicit IDs regardless of whether their table precedes the prose.
  const assignedIds: Record<NormativeFamily, Set<string>> = {
    system_boundary: new Set(authoredIds.system_boundary.keys()),
    allocation: new Set(authoredIds.allocation.keys()),
    validation: new Set(authoredIds.validation.keys()),
  };
  for (const entry of pending) {
    const { unit, node, rule, explicitId, appliesTo, sources, sourceSpan } = entry;
    const family = unit.family;
    const output = arrays[family];
    const candidate = `${family}_rule_${output.length + 1}`;
    let ruleId = explicitId || candidate;
    if (!explicitId && assignedIds[family].has(ruleId)) {
      ruleId = `${candidate}_snapshot`;
      let suffix = 2;
      while (assignedIds[family].has(ruleId)) {
        ruleId = `${candidate}_snapshot_${suffix}`;
        suffix += 1;
      }
      diagnose(unit, node, 'SNAPSHOT_RULE_ID_DISAMBIGUATED',
        `Snapshot-local candidate ${JSON.stringify(candidate)} was disambiguated to ${JSON.stringify(ruleId)}; authored explicit ID ${JSON.stringify(candidate)} and all other authored explicit IDs remain unchanged.`);
    }
    assignedIds[family].add(ruleId);
    bindings.push({ pointer: `${familyOptions[family].pointer}/${output.length}`, rule_id: ruleId,
      identity_kind: explicitId ? 'explicit' : 'snapshot_local', unit_id: unit.unit_id, source_span: sourceSpan });
    output.push({ rule_id: ruleId, applies_to: appliesTo || familyOptions[family].appliesTo, rule, source_ids: sources });
  }
  return { systemBoundaryRules: arrays.system_boundary, allocationRules: arrays.allocation,
    validationRules: arrays.validation, context: { normalization: index.normalization,
      source_sha256: `sha256:${createHash('sha256').update(source, 'utf8').digest('hex')}`,
      identity_scope: 'projection_snapshot', units, bindings, diagnostics } };
}
