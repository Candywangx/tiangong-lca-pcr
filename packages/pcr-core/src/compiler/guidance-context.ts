import { createHash } from 'node:crypto';
import { isDeepStrictEqual } from 'node:util';
import { compileNormativeProjection, type NormativeProjectionContext } from './normative-projection.ts';
import { inspectNormativeIntegrity } from './normative-integrity.ts';

export interface GuidanceContextProvenance {
  readonly kind: 'stored_projection' | 'derived_legacy_source';
  readonly compiler_contract_version: '2';
  readonly stored_projection_schema_version: 1 | 2;
  readonly stored_projection_sha256: string;
  readonly source_sha256: string;
  readonly context_sha256: string;
}
export interface GuidanceContextEnvelope {
  readonly normative_context: NormativeProjectionContext;
  readonly normative_context_provenance: GuidanceContextProvenance;
}
export class GuidanceContextError extends Error {
  readonly code = 'PCR_NORMATIVE_CONTEXT_INVALID';
  constructor(message: string) { super(message); this.name = 'GuidanceContextError'; }
}
function object(value: unknown): value is Record<string, unknown> {
  return value !== null && typeof value === 'object' && !Array.isArray(value);
}
function field(value: unknown, key: string): unknown { return object(value) ? value[key] : undefined; }
function string(value: unknown, label: string): string {
  if (typeof value !== 'string' || !value) throw new GuidanceContextError(`Missing ${label}.`);
  return value;
}
function ruleAt(structured: unknown, pointer: string): Record<string, unknown> {
  let value = structured;
  for (const key of pointer.slice(1).split('/')) {
    if (Array.isArray(value) && /^(0|[1-9]\d*)$/u.test(key)) value = value[Number(key)];
    else value = field(value, key);
  }
  if (!object(value)) throw new GuidanceContextError(`Missing stored normative rule at ${pointer}.`);
  return value;
}
function arrays(structured: unknown): unknown[] {
  return [field(field(structured, 'system_boundary'), 'rules'), field(structured, 'allocation_rules'), field(structured, 'validation_rules')];
}

/** Called only after stored schema and fingerprint verification. Legacy enrichment
 * has its own identity: it never becomes part of the stored projection digest. */
export function deriveGuidanceContext(structured: unknown, sourceMarkdown: string): GuidanceContextEnvelope {
  const schema = field(structured, 'schema_version');
  if (schema !== 1 && schema !== 2) throw new GuidanceContextError('Unsupported stored projection schema.');
  const metadata = field(structured, 'projection_metadata');
  const storedHash = string(field(metadata, 'generated_content_sha256'), 'stored projection fingerprint');
  const sourceHash = string(field(field(metadata, 'canonical_markdown'), 'sha256'), 'canonical source fingerprint');
  const projected = compileNormativeProjection(sourceMarkdown);
  if (projected.context.source_sha256 !== sourceHash) throw new GuidanceContextError('Canonical source differs from verified projection fingerprint.');
  let context: NormativeProjectionContext;
  if (schema === 2) {
    const integrity = inspectNormativeIntegrity({ sourceMarkdown, structuredProjection: structured });
    if (!integrity.valid) throw new GuidanceContextError('Stored normative context does not match canonical source and rules.');
    // Recomputed context is identical to the verified stored context; retaining the
    // typed value avoids a cast from untrusted data.
    context = projected.context;
  } else {
    const expected = [projected.systemBoundaryRules, projected.allocationRules, projected.validationRules];
    const stored = arrays(structured);
    for (let family = 0; family < expected.length; family += 1) {
      const current = stored[family];
      const generated = expected[family];
      if (!Array.isArray(current) || !generated || current.length !== generated.length) {
        throw new GuidanceContextError('Legacy normative rule coverage differs from canonical source; use the complete English source for review.');
      }
      for (let index = 0; index < generated.length; index += 1) {
        const previous: unknown = current[index];
        const next = generated[index];
        if (!object(previous) || !next || previous.rule !== next.rule || previous.applies_to !== next.applies_to || !isDeepStrictEqual(previous.source_ids, next.source_ids)) {
          throw new GuidanceContextError('Legacy normative rule text differs from canonical source; use the complete English source for review.');
        }
      }
    }
    context = {
      ...projected.context,
      bindings: projected.context.bindings.map(binding => ({
        ...binding,
        rule_id: string(ruleAt(structured, binding.pointer).rule_id, `stored rule ID at ${binding.pointer}`),
        // Legacy serializers could silently suffix IDs. Such identities cannot be
        // advertised as stable authored IDs when the stored spelling differs.
        identity_kind: ruleAt(structured, binding.pointer).rule_id === binding.rule_id ? binding.identity_kind : 'snapshot_local',
      })),
    };
  }
  return {
    normative_context: context,
    normative_context_provenance: {
      kind: schema === 2 ? 'stored_projection' : 'derived_legacy_source',
      compiler_contract_version: '2', stored_projection_schema_version: schema,
      stored_projection_sha256: storedHash, source_sha256: sourceHash,
      context_sha256: `sha256:${createHash('sha256').update(JSON.stringify(context), 'utf8').digest('hex')}`,
    },
  };
}
