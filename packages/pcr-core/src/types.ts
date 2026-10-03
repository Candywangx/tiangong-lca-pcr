import type { ProjectionIntegrityState, ProjectionIntegrityStatus } from './projection-integrity.ts';
import type { NormativeProjectionContext, NormativeRule } from './compiler/normative-projection.ts';
import type { GuidanceContextEnvelope } from './compiler/guidance-context.ts';
import type { PcrIdAlias } from './pcr-id-aliases.ts';
import type { CoverageSnapshot } from './classification-coverage.ts';
export type { PcrIdAlias } from './pcr-id-aliases.ts';
export type { CoverageSnapshot } from './classification-coverage.ts';

/** Open object fields remain unknown where the public schema promises only an
 * object. These DTOs describe validated outputs, never unchecked JSON/TIDAS data. */
export type UnknownRecord = Record<string, unknown>;
export interface ContractIssue { code: string; message: string }
export interface SchemaIssue extends ContractIssue {
  instance_path: string;
  schema_path: string;
  keyword: string;
  params: UnknownRecord;
}
export interface ContractOptions { code?: string; entityKind?: string; source?: string | null }
export interface ContractValidationResult {
  valid: boolean;
  code: string | null;
  entity_kind: string;
  schema_id: string;
  errors: SchemaIssue[];
  issues: SchemaIssue[];
}
export interface SchemaRegistry {
  assert<T>(contract: string, value: T, options?: ContractOptions): T;
  validate(contract: string, value: unknown, options?: ContractOptions): ContractValidationResult;
}
export interface ReadinessFingerprint extends Omit<ProjectionIntegrityState, 'status'> {
  status: ProjectionIntegrityStatus | 'source_missing';
  schema_valid: boolean | null;
}
export interface Readiness {
  status: 'ready' | 'review_required' | 'unavailable';
  lifecycle_status: string;
  methodology_status: string;
  structured_projection_available: boolean;
  projection_fingerprint: ReadinessFingerprint;
  usable_for_guidance: boolean;
  usable_for_validation: boolean;
  blockers: ContractIssue[];
  warnings: ContractIssue[];
}
export interface PcrLanguages { canonical?: string; available?: string[] }
/** Manifest metadata is an external authoring document; callers validate/narrow
 * each required field rather than silently assigning it the consumer DTO. */
export type PcrManifest = UnknownRecord;
export type PcrCatalogScope = 'material' | 'legacy' | 'all';
export type PcrRecordKind = 'methodology' | 'legacy_scaffold_reference' | 'invalid_lifecycle_state';
export interface PcrRecord {
  id: string;
  path: string;
  title: Record<string, string | null>;
  status: string;
  version: string | null;
  content_maturity: string | null;
  languages: PcrLanguages;
  translation_status: Record<string, string>;
  classification_refs: UnknownRecord[];
  record_kind: PcrRecordKind;
  readiness: Readiness;
}
export interface CatalogEntry { id: string; path: string; manifestPath: string }
export interface CapturedArtifact { bytes: Buffer | null; error?: unknown }
export interface CapturedPcrSnapshot {
  manifest: PcrManifest;
  manifestBytes: Buffer;
  artifacts: Record<string, CapturedArtifact>;
}
export interface ProjectionMetadata {
  contract_version: '1' | '2';
  generator: string;
  canonical_markdown: { path: string; normalization: string; hash_algorithm: string; sha256: string };
  generated_content_sha256: string;
}
export interface ProjectionFields {
  generated_from: string;
  source_markdown: string;
  product_category_identity: UnknownRecord;
  functional_unit: UnknownRecord;
  system_boundary: { rules: NormativeRule[] };
  boundary_abstraction: UnknownRecord;
  reference_flow_definition: UnknownRecord;
  measurement_rules: UnknownRecord[];
  process_map: UnknownRecord[];
  process_inventory: UnknownRecord[];
  dataset_production: { collection_protocols: UnknownRecord[]; calculation_rules: UnknownRecord[]; data_quality_requirements: UnknownRecord[] };
  published_dataset_profile: UnknownRecord;
  allocation_rules: NormativeRule[];
  validation_rules: NormativeRule[];
  data_sources: UnknownRecord[];
  data_quality_rules?: UnknownRecord[];
  unit_conventions?: UnknownRecord[];
  projection_metadata: ProjectionMetadata;
}
export type StructuredProjection = ProjectionFields & (
  | { schema_version: 1; normative_context?: never }
  | { schema_version: 2; normative_context: NormativeProjectionContext }
);
export interface CurrentPcrSnapshot extends CapturedPcrSnapshot {
  pcr: PcrRecord;
  fingerprint: ReadinessFingerprint;
  structured: StructuredProjection | null;
  structuredPath: string;
  structuredAvailable: boolean;
  completenessIssues: ContractIssue[];
}
export interface VerifiedPcrProjection extends GuidanceContextEnvelope {
  pcr: PcrRecord;
  readiness: Readiness;
  source_structured: string;
  structured: StructuredProjection;
}
export interface CompleteGuidance extends GuidanceContextEnvelope {
  schema_version: 2;
  guidance_kind: 'tiangong-pcr-agent-guidance';
  pcr: PcrRecord;
  readiness: Readiness;
  source_structured: string;
  system_boundary: { rules: NormativeRule[] };
  reference_flow: UnknownRecord;
  boundary_abstraction: UnknownRecord;
  measurement_rules: UnknownRecord[];
  process_map: UnknownRecord[];
  process_inventory: UnknownRecord[];
  production_guidance: { collection_protocols: UnknownRecord[]; calculation_rules: UnknownRecord[]; data_quality_requirements: UnknownRecord[] };
  published_dataset_profile: UnknownRecord;
  allocation_rules: NormativeRule[];
  data_quality_rules: UnknownRecord[];
  validation_rules: NormativeRule[];
  data_sources: UnknownRecord[];
  validation_notes: string[];
}
export type FindingSeverity = 'error' | 'warning' | 'info';
export interface ValidationFinding extends ContractIssue { severity: FindingSeverity }
export interface PerformedCheck { check_id: string; requirement_family: string; requirement_count: number; evaluated_requirement_count: number }
export interface SkippedCheck { check_id: string; requirement_family: string; requirement_count: number; reason: string }
export interface ValidationReport {
  schema_version: 1;
  validation_kind: 'tiangong-pcr-model-validation' | 'tiangong-pcr-dataset-validation';
  pcr: UnknownRecord | PcrRecord;
  readiness: Readiness;
  validation_status: 'passed' | 'failed' | 'inconclusive';
  completeness: 'none' | 'partial' | 'complete';
  input: { input_kind: string; representation: string; accepted: boolean; collection_record_count?: number; distinct_protocol_id_count?: number };
  check_coverage: { total_requirement_count: number; checked_requirement_count: number; skipped_requirement_count: number; checks_performed: PerformedCheck[]; checks_skipped: SkippedCheck[] };
  finding_count: number;
  finding_summary: Record<FindingSeverity, number>;
  findings: ValidationFinding[];
}
export interface OfflineSnapshot {
  available_languages: string[];
  content_version: string;
  source_commit: string;
  source_sha256: string;
  records: number;
  material_records: number;
  aliases: number;
  original_bytes: number;
}
export interface OfflineManifest {
  kind: 'tiangong-pcr-library';
  format_version: 1;
  snapshot: OfflineSnapshot;
  bytes: number;
  sha256: string;
  index_sha256: Record<'records' | 'aliases' | 'coverage' | 'files', string>;
}
/** Storage-only interface; repository consistency and library integrity remain
 * enforced by their owning implementations and the current snapshot reader. */
export interface PcrSource {
  readonly root: string;
  readonly languages: readonly string[];
  listPcrs(scope: PcrCatalogScope): PcrRecord[];
  entry(id: unknown): CatalogEntry | null;
  findAlias(id: unknown): PcrIdAlias | null;
  readFile(key: string): Buffer;
  snapshotFiles(entry: CatalogEntry): CapturedPcrSnapshot;
  coverageSnapshot(system: unknown, version: unknown): CoverageSnapshot;
}
export function isUnknownRecord(value: unknown): value is UnknownRecord {
  return value !== null && typeof value === 'object' && !Array.isArray(value);
}
export function unknownField(value: unknown, key: string): unknown {
  return value !== null && typeof value === 'object' ? (value as UnknownRecord)[key] : undefined;
}
export function errorMessage(error: unknown): string { return error instanceof Error ? error.message : String(error); }
export function errorCode(error: unknown): string {
  const code = unknownField(error, 'code'); return typeof code === 'string' ? code : 'UNKNOWN';
}
