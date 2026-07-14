import { readFileSync } from "node:fs";

import { createSchemaRegistry } from "./schema-validation.mjs";
import {
  readinessSemanticIssues,
  validationReportSemanticIssues,
} from "./output-semantics.mjs";

const CORE_SCHEMA_DEPENDENCY_FILES = ["controlled-vocabulary.schema.json"];
const CORE_SCHEMA_FILES = [
  "dataset-validation-input.schema.json",
  "feedback-draft-output.schema.json",
  "feedback.schema.json",
  "guidance-output.schema.json",
  "model-validation-input.schema.json",
  "readiness.schema.json",
  "structured-projection.schema.json",
  "validation-output.schema.json",
];

const schemaEntries = CORE_SCHEMA_FILES.map((fileName) => ({
  fileName,
  schema: JSON.parse(readFileSync(new URL(`../schemas/${fileName}`, import.meta.url), "utf8")),
}));
const schemaDependencies = CORE_SCHEMA_DEPENDENCY_FILES.map((fileName) =>
  JSON.parse(readFileSync(new URL(`../schemas/${fileName}`, import.meta.url), "utf8")),
);
const contractIds = new Map(schemaEntries.map(({ fileName, schema }) => [fileName, schema.$id]));
const entityKindsByFile = {
  "dataset-validation-input.schema.json": "dataset_validation_input",
  "feedback-draft-output.schema.json": "feedback_draft_output",
  "feedback.schema.json": "feedback_intake",
  "guidance-output.schema.json": "guidance_output",
  "model-validation-input.schema.json": "model_validation_input",
  "readiness.schema.json": "readiness",
  "structured-projection.schema.json": "structured_projection",
  "validation-output.schema.json": "validation_report",
};
const registry = createSchemaRegistry(
  [...schemaDependencies, ...schemaEntries.map(({ schema }) => schema)],
  Object.fromEntries(
    schemaEntries.map(({ fileName, schema }) => [schema.$id, entityKindsByFile[fileName]]),
  ),
);

const semanticValidators = new Map([
  [contractIds.get("readiness.schema.json"), readinessSemanticIssues],
  [contractIds.get("validation-output.schema.json"), validationReportSemanticIssues],
]);

export class CoreContractSemanticError extends Error {
  constructor({
    code = "PCR_SEMANTIC_CONTRACT_INVALID",
    contract,
    entityKind,
    source = null,
    issues,
  }) {
    const location = source ? ` at ${source}` : "";
    const details = issues.map((issue) => `${issue.instance_path}: ${issue.message}`).join("; ");
    super(`${entityKind} semantic contract failed${location}: ${details}`);
    this.name = "CoreContractSemanticError";
    this.code = code;
    this.contract = contract;
    this.entity_kind = entityKind;
    this.schema_id = contract;
    this.source = source;
    this.issues = structuredClone(issues);
    this.errors = structuredClone(issues);
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
  structured: contractIds.get("structured-projection.schema.json"),
  readiness: contractIds.get("readiness.schema.json"),
  guidance: contractIds.get("guidance-output.schema.json"),
  validationReport: contractIds.get("validation-output.schema.json"),
  feedbackDraft: contractIds.get("feedback-draft-output.schema.json"),
  feedbackIntake: contractIds.get("feedback.schema.json"),
  modelInput: contractIds.get("model-validation-input.schema.json"),
  datasetInput: contractIds.get("dataset-validation-input.schema.json"),
});

export function assertCoreContract(contract, value, options = {}) {
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

export function validateCoreContract(contract, value, options = {}) {
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

export function coreContractId(fileName) {
  return resolveContractId(fileName);
}

export const validateStructured = (value) =>
  validateCoreContract("structured-projection.schema.json", value);
export const assertStructured = (value, options = {}) =>
  assertCoreContract("structured-projection.schema.json", value, options);
export const validateReadiness = (value) => validateCoreContract("readiness.schema.json", value);
export const assertReadiness = (value, options = {}) =>
  assertCoreContract("readiness.schema.json", value, options);
export const validateGuidance = (value) => validateCoreContract("guidance-output.schema.json", value);
export const assertGuidance = (value, options = {}) =>
  assertCoreContract("guidance-output.schema.json", value, options);
export const validateValidationReport = (value) =>
  validateCoreContract("validation-output.schema.json", value);
export const assertValidationReport = (value, options = {}) =>
  assertCoreContract("validation-output.schema.json", value, options);
export const validateFeedbackDraft = (value) =>
  validateCoreContract("feedback-draft-output.schema.json", value);
export const assertFeedbackDraft = (value, options = {}) =>
  assertCoreContract("feedback-draft-output.schema.json", value, options);
export const validateFeedbackIntake = (value) =>
  validateCoreContract("feedback.schema.json", value);
export const assertFeedbackIntake = (value, options = {}) =>
  assertCoreContract("feedback.schema.json", value, options);
export const validateModelInput = (value) =>
  validateCoreContract("model-validation-input.schema.json", value);
export const assertModelInput = (value, options = {}) =>
  assertCoreContract("model-validation-input.schema.json", value, options);
export const validateDatasetInput = (value) =>
  validateCoreContract("dataset-validation-input.schema.json", value);
export const assertDatasetInput = (value, options = {}) =>
  assertCoreContract("dataset-validation-input.schema.json", value, options);

export const validateStructuredProjection = validateStructured;
export const assertStructuredProjection = assertStructured;
export const validateGuidanceOutput = validateGuidance;
export const assertGuidanceOutput = assertGuidance;
export const validateModelValidationInput = validateModelInput;
export const assertModelValidationInput = assertModelInput;
export const validateDatasetValidationInput = validateDatasetInput;
export const assertDatasetValidationInput = assertDatasetInput;

function resolveContractId(contract) {
  return contractIds.get(contract) ?? contract;
}

const entityKindsByContract = new Map(
  schemaEntries.map(({ fileName, schema }) => [schema.$id, entityKindsByFile[fileName]]),
);
