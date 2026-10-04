import { readFileSync } from "node:fs";
import { isUnknownRecord, type ContractOptions, type ContractValidationResult, type SchemaIssue, type Readiness, type ValidationReport } from './types.ts';

import { createSchemaRegistry } from "./schema-validation.ts";
import {
  readinessSemanticIssues,
  validationReportSemanticIssues,
} from "./output-semantics.ts";

const CORE_SCHEMA_DEPENDENCY_FILES = ["controlled-vocabulary.schema.json"];
const CORE_SCHEMA_FILES = [
  "agent-review.schema.json",
  "classification-coverage.schema.json",
  "dataset-validation-input.schema.json",
  "feedback-draft-output.schema.json",
  "feedback.schema.json",
  "guidance-output.schema.json",
  "guidance-batch-request.schema.json",
  "model-validation-input.schema.json",
  "pcr-id-aliases.schema.json",
  "readiness.schema.json",
  "structured-projection.schema.json",
  "validation-output.schema.json",
];

const schemaEntries = CORE_SCHEMA_FILES.map((fileName) => ({
  fileName,
  schema: readSchema(fileName),
}));
const schemaDependencies = CORE_SCHEMA_DEPENDENCY_FILES.map((fileName) =>
  readSchema(fileName),
);
const contractIds = new Map(schemaEntries.map(({ fileName, schema }) => [fileName, schema.$id]));
const entityKindsByFile: Record<string, string> = {
  "agent-review.schema.json": "agent_review",
  "classification-coverage.schema.json": "classification_coverage",
  "dataset-validation-input.schema.json": "dataset_validation_input",
  "feedback-draft-output.schema.json": "feedback_draft_output",
  "feedback.schema.json": "feedback_intake",
  "guidance-output.schema.json": "guidance_output",
  "guidance-batch-request.schema.json": "guidance_batch_request",
  "model-validation-input.schema.json": "model_validation_input",
  "pcr-id-aliases.schema.json": "pcr_id_aliases",
  "readiness.schema.json": "readiness",
  "structured-projection.schema.json": "structured_projection",
  "validation-output.schema.json": "validation_report",
};
const registry = createSchemaRegistry(
  [...schemaDependencies, ...schemaEntries.map(({ schema }) => schema)],
  Object.fromEntries(
    schemaEntries.map(({ fileName, schema }) => [schema.$id, (entityKindsByFile[fileName] ?? fileName)]),
  ),
);

// These adapters run only after the corresponding exact schema succeeds.
const semanticValidators = new Map<string, (value: unknown) => SchemaIssue[]>([
  [resolveContractId("readiness.schema.json"), value => readinessSemanticIssues(value as Readiness)],
  [resolveContractId("validation-output.schema.json"), value => validationReportSemanticIssues(value as ValidationReport)],
]);

export class CoreContractSemanticError extends Error {
  readonly code: string;
  readonly contract: string;
  readonly entity_kind: string;
  readonly schema_id: string;
  readonly source: string | null;
  readonly issues: SchemaIssue[];
  readonly errors: SchemaIssue[];
  constructor({
    code = "PCR_SEMANTIC_CONTRACT_INVALID",
    contract,
    entityKind,
    source = null,
    issues,
  }: { code?: string | undefined; contract: string; entityKind: string; source?: string | null | undefined; issues: readonly SchemaIssue[] }) {
    const location = source ? ` at ${source}` : "";
    const details = issues.map((issue) => `${issue.instance_path}: ${issue.message}`).join("; ");
    super(`${entityKind} semantic contract failed${location}: ${details}`);
    this.name = "CoreContractSemanticError";
    this.code = code;
    this.contract = contract;
    this.entity_kind = entityKind;
    this.schema_id = contract;
    this.source = source;
    this.issues = structuredClone([...issues]);
    this.errors = structuredClone([...issues]);
  }

  toJSON() {
    return {
      code: this.code,
      entity_kind: this.entity_kind,
      schema_id: this.schema_id,
      source: this.source,
      errors: structuredClone(this.errors),
    };
  }
}

export const CORE_SCHEMA_IDS = Object.freeze({
  classificationCoverage: resolveContractId("classification-coverage.schema.json"),
  structured: resolveContractId("structured-projection.schema.json"),
  readiness: resolveContractId("readiness.schema.json"),
  guidance: resolveContractId("guidance-output.schema.json"),
  validationReport: resolveContractId("validation-output.schema.json"),
  feedbackDraft: resolveContractId("feedback-draft-output.schema.json"),
  feedbackIntake: resolveContractId("feedback.schema.json"),
  modelInput: resolveContractId("model-validation-input.schema.json"),
  datasetInput: resolveContractId("dataset-validation-input.schema.json"),
  pcrIdAliases: resolveContractId("pcr-id-aliases.schema.json"),
});

export function assertCoreContract<T>(contract: string, value: T, options: ContractOptions = {}): T {
  const contractId = resolveContractId(contract);
  registry.assert(contractId, value, options);
  const issues = semanticValidators.get(contractId)?.(value) ?? [];
  if (issues.length > 0) {
    throw new CoreContractSemanticError({
      code: options.code,
      contract: contractId,
      entityKind: options.entityKind ?? entityKindsByContract.get(contractId) ?? contractId,
      source: options.source,
      issues,
    });
  }
  return value;
}

export function validateCoreContract(contract: string, value: unknown, options: ContractOptions = {}): ContractValidationResult {
  const contractId = resolveContractId(contract);
  const result = registry.validate(contractId, value, options);
  if (!result.valid) {
    return result;
  }
  const errors = semanticValidators.get(contractId)?.(value) ?? [];
  if (errors.length === 0) {
    return result;
  }
  return {
    ...result,
    valid: false,
    code: "PCR_SEMANTIC_CONTRACT_INVALID",
    errors,
    issues: errors,
  };
}

export function coreContractId(fileName: string): string {
  return resolveContractId(fileName);
}

export const validateStructured = (value: unknown) =>
  validateCoreContract("structured-projection.schema.json", value);
export const assertStructured = <T>(value: T, options: ContractOptions = {}): T =>
  assertCoreContract("structured-projection.schema.json", value, options);
export const validateReadiness = (value: unknown) => validateCoreContract("readiness.schema.json", value);
export const assertReadiness = <T>(value: T, options: ContractOptions = {}): T =>
  assertCoreContract("readiness.schema.json", value, options);
export const validateGuidance = (value: unknown) => validateCoreContract("guidance-output.schema.json", value);
export const assertGuidance = <T>(value: T, options: ContractOptions = {}): T =>
  assertCoreContract("guidance-output.schema.json", value, options);
export const validateValidationReport = (value: unknown) =>
  validateCoreContract("validation-output.schema.json", value);
export const assertValidationReport = <T>(value: T, options: ContractOptions = {}): T =>
  assertCoreContract("validation-output.schema.json", value, options);
export const validateFeedbackDraft = (value: unknown) =>
  validateCoreContract("feedback-draft-output.schema.json", value);
export const assertFeedbackDraft = <T>(value: T, options: ContractOptions = {}): T =>
  assertCoreContract("feedback-draft-output.schema.json", value, options);
export const validateFeedbackIntake = (value: unknown) =>
  validateCoreContract("feedback.schema.json", value);
export const assertFeedbackIntake = <T>(value: T, options: ContractOptions = {}): T =>
  assertCoreContract("feedback.schema.json", value, options);
export const validateModelInput = (value: unknown) =>
  validateCoreContract("model-validation-input.schema.json", value);
export const assertModelInput = <T>(value: T, options: ContractOptions = {}): T =>
  assertCoreContract("model-validation-input.schema.json", value, options);
export const validateDatasetInput = (value: unknown) =>
  validateCoreContract("dataset-validation-input.schema.json", value);
export const assertDatasetInput = <T>(value: T, options: ContractOptions = {}): T =>
  assertCoreContract("dataset-validation-input.schema.json", value, options);
export const validateClassificationCoverage = (value: unknown) =>
  validateCoreContract("classification-coverage.schema.json", value);
export const assertClassificationCoverage = <T>(value: T, options: ContractOptions = {}): T =>
  assertCoreContract("classification-coverage.schema.json", value, options);
export const validatePcrIdAliases = (value: unknown) =>
  validateCoreContract("pcr-id-aliases.schema.json", value);
export const assertPcrIdAliases = <T>(value: T, options: ContractOptions = {}): T =>
  assertCoreContract("pcr-id-aliases.schema.json", value, options);

export const validateStructuredProjection = validateStructured;
export const assertStructuredProjection = assertStructured;
export const validateGuidanceOutput = validateGuidance;
export const assertGuidanceOutput = assertGuidance;
export const validateModelValidationInput = validateModelInput;
export const assertModelValidationInput = assertModelInput;
export const validateDatasetValidationInput = validateDatasetInput;
export const assertDatasetValidationInput = assertDatasetInput;

function resolveContractId(contract: string): string {
  return contractIds.get(contract) ?? contract;
}

const entityKindsByContract = new Map(
  schemaEntries.map(({ fileName, schema }) => [schema.$id, (entityKindsByFile[fileName] ?? fileName)]),
);

function readSchema(fileName: string): Record<string, unknown> & { $id: string } {
  const value: unknown = JSON.parse(readFileSync(new URL(`../schemas/${fileName}`, import.meta.url), "utf8"));
  if (!isUnknownRecord(value) || typeof value.$id !== 'string' || !value.$id) throw new Error(`Invalid core schema identity: ${fileName}`);
  return { ...value, $id: value.$id };
}
