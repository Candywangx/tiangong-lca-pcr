import { readFileSync } from 'node:fs';
import { isUnknownRecord, unknownField } from './types.ts';

// The generated schema and generated JS derive from the same authored YAML.
// Read the typed data boundary directly; no hand-copied tokens or declaration
// file can pretend that an unchecked generated module has a verified type.
const schema: unknown = JSON.parse(readFileSync(new URL('../schemas/controlled-vocabulary.schema.json', import.meta.url), 'utf8'));
const definitions = unknownField(schema, '$defs');
if (!isUnknownRecord(definitions)) throw new Error('Invalid generated controlled vocabulary definitions.');
function values(key: string): readonly string[] {
  const entries: unknown = unknownField(unknownField(definitions, key), 'enum');
  if (!Array.isArray(entries) || entries.length === 0 || !entries.every((entry: unknown) => typeof entry === 'string' && entry.length > 0)) {
    throw new Error(`Invalid generated controlled vocabulary definition: ${key}.`);
  }
  const strings = entries as string[];
  if (new Set(strings).size !== strings.length) throw new Error(`Duplicate generated controlled vocabulary token: ${key}.`);
  return Object.freeze([...strings]);
}
export const AMOUNT_RANGE_ROLE_VALUES = values('amount_range_role');
export const AMOUNT_SPECIFICITY_VALUES = values('amount_specificity');
export const AMOUNT_VALUE_MODE_VALUES = values('amount_value_mode');
export const BASIS_KIND_VALUES = values('basis_kind');
export const CLASSIFICATION_COVERAGE_STATUS_VALUES = values('classification_coverage_status');
export const CLASSIFICATION_MAPPING_RELATION_VALUES = values('classification_mapping_relation');
export const CONTENT_MATURITY_VALUES = values('content_maturity');
export const EVIDENCE_KIND_VALUES = values('evidence_kind');
export const FEEDBACK_CONFIDENCE_VALUES = values('feedback_confidence');
export const FEEDBACK_TYPE_VALUES = values('feedback_type');
export const FLOW_DIRECTION_VALUES = values('flow_direction');
export const FLOW_TYPE_VALUES = values('flow_type');
export const PCR_STATUS_VALUES = values('pcr_status');
export const PROCESS_INCLUSION_VALUES = values('process_inclusion');
export const SOURCE_TYPE_VALUES = values('source_type');
export const TARGET_ENTITY_VALUES = values('target_entity');
export const TRANSLATION_STATUS_VALUES = values('translation_status');
export const CONTROLLED_VOCABULARY = Object.freeze({
  amount_range_role: AMOUNT_RANGE_ROLE_VALUES, amount_specificity: AMOUNT_SPECIFICITY_VALUES,
  amount_value_mode: AMOUNT_VALUE_MODE_VALUES, basis_kind: BASIS_KIND_VALUES,
  classification_coverage_status: CLASSIFICATION_COVERAGE_STATUS_VALUES,
  classification_mapping_relation: CLASSIFICATION_MAPPING_RELATION_VALUES, content_maturity: CONTENT_MATURITY_VALUES,
  evidence_kind: EVIDENCE_KIND_VALUES, feedback_confidence: FEEDBACK_CONFIDENCE_VALUES, feedback_type: FEEDBACK_TYPE_VALUES,
  flow_direction: FLOW_DIRECTION_VALUES, flow_type: FLOW_TYPE_VALUES, pcr_status: PCR_STATUS_VALUES,
  process_inclusion: PROCESS_INCLUSION_VALUES, source_type: SOURCE_TYPE_VALUES, target_entity: TARGET_ENTITY_VALUES,
  translation_status: TRANSLATION_STATUS_VALUES,
});
