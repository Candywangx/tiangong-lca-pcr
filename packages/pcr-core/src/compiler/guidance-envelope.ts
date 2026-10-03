import { deriveGuidanceContext, GuidanceContextError } from './guidance-context.ts';

function object(value: unknown): value is Record<string, unknown> {
  return value !== null && typeof value === 'object' && !Array.isArray(value);
}
function checkedSnapshot(value: unknown) {
  if (!object(value) || !object(value.pcr) || !object(value.pcr.readiness) || !object(value.structured)
    || !object(value.artifacts) || !object(value.artifacts['pcr.en-US.md'])
    || !Buffer.isBuffer(value.artifacts['pcr.en-US.md'].bytes)) {
    throw new GuidanceContextError('Verified current snapshot lacks its canonical source bytes.');
  }
  let sourceMarkdown: string;
  try { sourceMarkdown = new TextDecoder('utf-8', { fatal: true }).decode(value.artifacts['pcr.en-US.md'].bytes); }
  catch { throw new GuidanceContextError('Canonical source is not valid UTF-8.'); }
  return { pcr: value.pcr, readiness: value.pcr.readiness, structured: value.structured, sourceMarkdown };
}
/** Uses only bytes captured in the core's consistent snapshot, never a second
 * filesystem read that could bind context to a later source revision. */
export function deriveSnapshotGuidanceContext(value: unknown) {
  const snapshot = checkedSnapshot(value);
  return deriveGuidanceContext(snapshot.structured, snapshot.sourceMarkdown);
}
export function buildCompleteGuidance(value: unknown, sourceStructured: string) {
  const { pcr, readiness, structured, sourceMarkdown } = checkedSnapshot(value);
  const production = object(structured.dataset_production) ? structured.dataset_production : {};
  return {
    schema_version: 2,
    guidance_kind: 'tiangong-pcr-agent-guidance',
    pcr, readiness: structuredClone(readiness), source_structured: sourceStructured,
    system_boundary: structured.system_boundary ?? {},
    reference_flow: structured.reference_flow_definition ?? {},
    boundary_abstraction: structured.boundary_abstraction ?? {},
    measurement_rules: structured.measurement_rules ?? structured.unit_conventions ?? [],
    process_map: structured.process_map ?? [], process_inventory: structured.process_inventory ?? [],
    production_guidance: {
      collection_protocols: production.collection_protocols ?? [],
      calculation_rules: production.calculation_rules ?? [],
      data_quality_requirements: production.data_quality_requirements ?? [],
    },
    published_dataset_profile: structured.published_dataset_profile ?? {},
    allocation_rules: structured.allocation_rules ?? [], data_quality_rules: structured.data_quality_rules ?? [],
    validation_rules: structured.validation_rules ?? [], data_sources: structured.data_sources ?? [],
    ...deriveGuidanceContext(structured, sourceMarkdown),
    validation_notes: [
      'Use this guidance for LCA data authoring, optional TIDAS process authoring, or Agent-led review of existing process/model data. Select requirements for the declared scope.',
      'Preserve PCR-derived UUID identities exactly. They are version-free suggestions; preserve and verify explicit versions on supplied TIDAS dataset references.',
      'validate-model checks qualifier text presence; validate-dataset checks collection protocol ID presence. Neither performs TIDAS schema validation or semantic review. Use inspect and review prepare/check to support Agent-led review; a foreground package is optional.',
      'Read complete normative units together with their ancestor_context. Source association preserves conditions and exceptions without deciding scientific applicability. Stored projection hashes and derived legacy context provenance identify different artifacts.',
    ],
  };
}
