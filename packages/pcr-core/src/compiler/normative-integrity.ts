import { isDeepStrictEqual } from 'node:util';
import { compileNormativeProjection } from './normative-projection.ts';

export interface NormativeIntegrityIssue {
  readonly code: string;
  readonly message: string;
}
export interface NormativeIntegrityState {
  readonly valid: boolean;
  readonly issues: readonly NormativeIntegrityIssue[];
}

function record(value: unknown): Record<string, unknown> | null {
  return value !== null && typeof value === 'object' && !Array.isArray(value)
    ? value as Record<string, unknown> : null;
}
function array(value: unknown): readonly unknown[] | null {
  return Array.isArray(value) ? value : null;
}

/** Verify structural source fidelity, independently of mutable transport hashes.
 * Complete units, headings, exact normalized positions and text, rule identities,
 * pointers, attribution diagnostics and ordered family membership must equal the
 * deterministic compilation of the canonical source. This establishes neither
 * scientific correctness nor methodological approval. External data stays unknown
 * until checked against that regenerated contract; no unchecked deserialization is
 * used to assign it the compiler's types. */
export function inspectNormativeIntegrity({ sourceMarkdown, structuredProjection }: {
  readonly sourceMarkdown: string;
  readonly structuredProjection: unknown;
}): NormativeIntegrityState {
  const issues: NormativeIntegrityIssue[] = [];
  function fail(code: string, message: string): void { issues.push({ code, message }); }
  function result(): NormativeIntegrityState { return { valid: issues.length === 0, issues }; }
  const structured = record(structuredProjection);
  const context = record(structured?.normative_context);
  if (!structured || !context) {
    fail('normative_context_missing', 'Contract 2 requires a complete normative_context and structured normative arrays.');
    return result();
  }
  let regenerated: ReturnType<typeof compileNormativeProjection>;
  try {
    regenerated = compileNormativeProjection(sourceMarkdown);
  } catch (error: unknown) {
    fail('normative_source_invalid', error instanceof Error ? error.message : 'Canonical normative source compilation failed.');
    return result();
  }
  const expected = regenerated.context;
  if (context.normalization !== expected.normalization) {
    fail('normative_normalization_invalid', 'Normative source normalization must be utf8-lf-v1.');
  }
  if (context.source_sha256 !== expected.source_sha256) {
    fail('normative_source_mismatch', 'Normative source SHA-256 does not match normalized canonical Markdown.');
  }
  if (context.identity_scope !== expected.identity_scope) {
    fail('normative_identity_scope_invalid', 'Normative fallback identities belong to the projection_snapshot.');
  }
  function compareArray(actual: unknown, wanted: readonly unknown[], code: string, description: string): void {
    const entries = array(actual);
    // Check lengths first: untrusted extra units/bindings can never become a
    // successful result through a subset check or rewritten fingerprints.
    if (!entries || entries.length !== wanted.length || !isDeepStrictEqual(entries, wanted)) {
      fail(code, description);
    }
  }
  compareArray(context.units, expected.units, 'normative_units_invalid',
    'Normative units must preserve every complete source section, family, ID, exact text, normalized span and heading scope.');
  compareArray(context.bindings, expected.bindings, 'normative_bindings_invalid',
    'Every normative rule requires its exact ordered binding, canonical JSON Pointer, rule ID, identity kind, unit ID and source span.');
  compareArray(context.diagnostics, expected.diagnostics, 'normative_diagnostics_invalid',
    'Normative structural uncertainty and unsupported source diagnostics must match canonical source compilation.');
  const boundary = record(structured.system_boundary);
  compareArray(boundary?.rules, regenerated.systemBoundaryRules, 'normative_rules_invalid',
    'System-boundary rules must completely match their canonical source and bindings.');
  compareArray(structured.allocation_rules, regenerated.allocationRules, 'normative_rules_invalid',
    'Allocation rules must completely match their canonical source and bindings.');
  compareArray(structured.validation_rules, regenerated.validationRules, 'normative_rules_invalid',
    'Validation rules must completely match their canonical source and bindings.');
  // Reject undeclared context fields as well; they could otherwise imply a
  // context or applicability claim that the compiler never established.
  if (issues.length === 0 && !isDeepStrictEqual(context, expected)) {
    fail('normative_context_invalid', 'Normative context contains fields absent from the canonical compiler contract.');
  }
  return result();
}
