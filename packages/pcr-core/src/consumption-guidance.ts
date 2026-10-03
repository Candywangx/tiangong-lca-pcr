import { ConsumptionError, atPointer, entriesAt, object, paginate } from './consumption-data.ts';
import { Ajv2020 } from 'ajv/dist/2020.js';
import structuredSchema from '../schemas/structured-projection.schema.json' with { type: 'json' };
import vocabularySchema from '../schemas/controlled-vocabulary.schema.json' with { type: 'json' };
import type { NormativeProjectionContext } from './compiler/normative-projection.ts';
import { assertGuidanceContextConsistency, type GuidanceContextProvenance } from './compiler/guidance-context.ts';
import type { GuidanceContextEnvelope } from './compiler/guidance-context.ts';

// Transitional boundary to the explicitly inventoried legacy core. Its result is
// unknown and checked below; the core port replaces this adapter, not its checks.
const legacyCore: unknown = await import(new URL('./index.mjs', import.meta.url).href);
function snapshotReader(options: GuidanceOptions): unknown {
  if (!object(legacyCore) || typeof legacyCore.getVerifiedPcrProjection !== 'function') {
    throw new ConsumptionError('PCR_INTERNAL_CONTRACT_INVALID', 'Verified projection reader is unavailable.');
  }
  const value: unknown = legacyCore.getVerifiedPcrProjection(options);
  return value;
}
const TOPICS: Readonly<Record<string, readonly string[]>> = {
  overview: ['product_category_identity', 'functional_unit', 'boundary_abstraction'],
  'reference-flow': ['functional_unit', 'reference_flow_definition'],
  boundary: ['system_boundary/rules', 'boundary_abstraction'], measurement: ['measurement_rules'],
  inventory: ['process_map', 'process_inventory'], collection: ['dataset_production/collection_protocols'],
  calculation: ['dataset_production/calculation_rules'], allocation: ['allocation_rules'],
  quality: ['data_quality_rules', 'dataset_production/data_quality_requirements', 'published_dataset_profile'],
  validation: ['validation_rules'], sources: ['data_sources'],
};
export const GUIDANCE_TOPICS = Object.keys(TOPICS);
export interface GuidanceOptions {
  root?: string; pcrId: string; topic?: string; pointer?: string; page?: number; pageSize?: number;
}
interface VerifiedSnapshot extends GuidanceContextEnvelope {
  pcr: Record<string, unknown>; readiness: Record<string, unknown>;
  source_structured: string; structured: Record<string, unknown>;
}
const contextValidator = new Ajv2020({ strict: true, schemas: [structuredSchema, vocabularySchema] }).compile<NormativeProjectionContext>({ $ref: `${structuredSchema.$id}#/$defs/normativeContext` });
function provenance(value: unknown): value is GuidanceContextProvenance {
  return object(value) && (value.kind === 'stored_projection' || value.kind === 'derived_legacy_source')
    && value.compiler_contract_version === '2' && (value.stored_projection_schema_version === 1 || value.stored_projection_schema_version === 2)
    && ['stored_projection_sha256', 'source_sha256', 'context_sha256'].every(key => typeof value[key] === 'string' && /^sha256:[0-9a-f]{64}$/u.test(value[key]));
}
function verified(value: unknown): VerifiedSnapshot {
  if (!object(value) || !object(value.pcr) || !object(value.readiness) || !object(value.structured)
    || typeof value.source_structured !== 'string' || !contextValidator(value.normative_context)
    || !provenance(value.normative_context_provenance)) {
    throw new ConsumptionError('PCR_INTERNAL_CONTRACT_INVALID', 'Verified projection lacks complete normative source context.');
  }
  const snapshot = { pcr: value.pcr, readiness: value.readiness, structured: value.structured,
    source_structured: value.source_structured, normative_context: value.normative_context,
    normative_context_provenance: value.normative_context_provenance };
  assertGuidanceContextConsistency(snapshot.structured, snapshot);
  return snapshot;
}
export function projectionBinding(value: unknown) {
  if (!object(value) || !object(value.pcr) || !object(value.readiness) || !object(value.structured)) {
    throw new ConsumptionError('PCR_INTERNAL_CONTRACT_INVALID', 'Invalid verified projection binding.');
  }
  const metadata = value.structured.projection_metadata;
  if (!object(metadata) || !object(metadata.canonical_markdown)
    || typeof value.pcr.id !== 'string' || !value.pcr.id || (value.pcr.version !== null && (typeof value.pcr.version !== 'string' || !value.pcr.version))
    || typeof value.readiness.methodology_status !== 'string' || !value.readiness.methodology_status
    || typeof metadata.generated_content_sha256 !== 'string' || !/^sha256:[0-9a-f]{64}$/u.test(metadata.generated_content_sha256)
    || typeof metadata.canonical_markdown.sha256 !== 'string' || !/^sha256:[0-9a-f]{64}$/u.test(metadata.canonical_markdown.sha256)) {
    throw new ConsumptionError('PCR_INTERNAL_CONTRACT_INVALID', 'Projection identity and fingerprint fields are invalid.');
  }
  return { pcr_id: value.pcr.id, version: value.pcr.version,
    projection_sha256: metadata.generated_content_sha256, markdown_sha256: metadata.canonical_markdown.sha256,
    methodology_status: value.readiness.methodology_status };
}
export function pcrEvidence(snapshot: unknown, pointer: string) { return { ...projectionBinding(snapshot), pointer }; }
function contextSelection(snapshot: VerifiedSnapshot, pointers: readonly string[], requested: readonly string[] = pointers) {
  const context = snapshot.normative_context;
  const bindings = context.bindings.filter(binding => pointers.some(pointer =>
    pointer === '' || pointer === binding.pointer || pointer.startsWith(`${binding.pointer}/`) || binding.pointer.startsWith(`${pointer}/`)));
  const ids = new Set(bindings.map(binding => binding.unit_id));
  const boundUnits = new Set(context.bindings.map(binding => binding.unit_id));
  for (const unit of context.units) {
    const familyPointer = unit.family === 'system_boundary' ? '/system_boundary/rules' : unit.family === 'allocation' ? '/allocation_rules' : '/validation_rules';
    if (!boundUnits.has(unit.unit_id) && requested.some(pointer => pointer === '' || familyPointer.startsWith(pointer) || pointer.startsWith(familyPointer))) ids.add(unit.unit_id);
  }
  return {
    normalization: context.normalization, source_sha256: context.source_sha256,
    parent_context_sha256: snapshot.normative_context_provenance.context_sha256,
    complete_for_selected_values: true,
    units: context.units.filter(unit => ids.has(unit.unit_id)), bindings,
    diagnostics: context.diagnostics.filter(diagnostic => ids.has(diagnostic.unit_id)),
  };
}
/** Pure selection over a core-verified envelope. Values are complete; pagination
 * limits item count rather than cutting an individual requirement into characters. */
export function selectGuidanceFromSnapshot(value: unknown, { topic = 'overview', pointer, page = 1, pageSize = 10 }: Omit<GuidanceOptions, 'root' | 'pcrId'> = {}) {
  const snapshot = verified(value);
  const base = {
    schema_version: 2, guidance_kind: 'tiangong-pcr-guidance-selection',
    pcr: projectionBinding(snapshot), readiness: snapshot.readiness, source_structured: snapshot.source_structured,
    source_markdown: snapshot.source_structured.replace(/structured\.yaml$/u, 'pcr.en-US.md'), topics: GUIDANCE_TOPICS,
    normative_context_provenance: snapshot.normative_context_provenance,
    citation_note: 'Pointers and stored hashes address the verified stored projection. Complete selected values include their source units and ancestor context. Legacy enrichment has separate context provenance. Applicability remains an Agent judgment; fallback identities and pointers are snapshot-bound.',
  };
  if (pointer !== undefined) return { ...base, source: pcrEvidence(snapshot, pointer), value: atPointer(snapshot.structured, pointer), normative_context_selection: contextSelection(snapshot, [pointer]) };
  const names = Object.hasOwn(TOPICS, topic) ? TOPICS[topic] : undefined;
  if (!names) throw new ConsumptionError('PCR_GUIDANCE_TOPIC', `Use --topic ${GUIDANCE_TOPICS.join('|')}.`);
  const entries = [];
  for (const name of names) {
    const sourcePointer = `/${name}`;
    let selected: unknown;
    try { selected = atPointer(snapshot.structured, sourcePointer); }
    catch (error: unknown) { if (!(error instanceof ConsumptionError) || error.code !== 'PCR_POINTER_NOT_FOUND') throw error; }
    for (const entry of entriesAt(selected, sourcePointer)) {
      entries.push({ source: pcrEvidence(snapshot, entry.pointer),
        rule_id: object(entry.value) ? entry.value.rule_id ?? entry.value.protocol_id ?? entry.value.row_id ?? entry.value.id ?? null : null,
        value: entry.value, truncated: false });
    }
  }
  const selected = paginate(entries, page, pageSize);
  return { ...base, topic, ...selected, normative_context_selection: contextSelection(snapshot, selected.items.map(item => item.source.pointer), names.map(name => `/${name}`)) };
}
export function selectGuidance(options: GuidanceOptions) { return selectGuidanceFromSnapshot(snapshotReader(options), options); }
