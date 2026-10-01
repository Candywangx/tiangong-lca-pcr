import { getVerifiedPcrProjection } from "./index.mjs";
import { ConsumptionError, atPointer, entriesAt, paginate, preview } from "./consumption-data.mjs";

const TOPICS = {
  overview: ["product_category_identity", "functional_unit", "boundary_abstraction"],
  "reference-flow": ["functional_unit", "reference_flow_definition"],
  boundary: ["system_boundary/rules", "boundary_abstraction"],
  measurement: ["measurement_rules"],
  inventory: ["process_map", "process_inventory"],
  collection: ["dataset_production/collection_protocols"],
  calculation: ["dataset_production/calculation_rules"],
  allocation: ["allocation_rules"],
  quality: ["data_quality_rules", "dataset_production/data_quality_requirements", "published_dataset_profile"],
  validation: ["validation_rules"],
  sources: ["data_sources"],
};
export const GUIDANCE_TOPICS = Object.keys(TOPICS);

export function projectionBinding(snapshot) {
  return {
    pcr_id: snapshot.pcr.id,
    version: snapshot.pcr.version,
    projection_sha256: snapshot.structured.projection_metadata.generated_content_sha256,
    markdown_sha256: snapshot.structured.projection_metadata.canonical_markdown.sha256,
    methodology_status: snapshot.readiness.methodology_status,
  };
}

export function pcrEvidence(snapshot, pointer) {
  return { ...projectionBinding(snapshot), pointer };
}

export function selectGuidance({ root, pcrId, topic = "overview", pointer, page = 1, pageSize = 10 }) {
  const snapshot = getVerifiedPcrProjection({ root, pcrId });
  const base = {
    schema_version: 1, guidance_kind: "tiangong-pcr-guidance-selection",
    pcr: projectionBinding(snapshot), readiness: snapshot.readiness,
    source_structured: snapshot.source_structured,
    source_markdown: snapshot.source_structured.replace(/structured\.yaml$/u, "pcr.en-US.md"),
    topics: GUIDANCE_TOPICS,
    citation_note: "Pointers address this verified structured projection. Preserve its hashes; applicability remains an Agent judgment. Explicit rule IDs may persist across revisions; array pointers are snapshot-bound.",
  };
  if (pointer !== undefined) {
    return { ...base, source: pcrEvidence(snapshot, pointer), value: atPointer(snapshot.structured, pointer) };
  }
  if (!Object.hasOwn(TOPICS, topic)) throw new ConsumptionError("PCR_GUIDANCE_TOPIC", `Use --topic ${GUIDANCE_TOPICS.join("|")}.`);
  const entries = [];
  for (const name of TOPICS[topic]) {
    const pointer = `/${name}`;
    let value;
    try { value = atPointer(snapshot.structured, pointer); }
    catch (error) { if (error.code !== "PCR_POINTER_NOT_FOUND") throw error; }
    for (const entry of entriesAt(value, pointer)) {
      entries.push({
        source: pcrEvidence(snapshot, entry.pointer),
        rule_id: entry.value?.rule_id ?? entry.value?.protocol_id ?? entry.value?.row_id ?? entry.value?.id ?? null,
        ...preview(entry.value),
      });
    }
  }
  return { ...base, topic, ...paginate(entries, page, pageSize) };
}
