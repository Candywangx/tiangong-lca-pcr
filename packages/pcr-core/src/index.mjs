import { existsSync, readFileSync, readdirSync, statSync } from "node:fs";
import path from "node:path";

import { readYamlFile } from "./yaml-lite.mjs";

export const FEEDBACK_TYPES = [
  "missing_pcr",
  "classification_mapping_gap",
  "unclear_reference_flow",
  "wrong_or_missing_uuid",
  "process_boundary_issue",
  "inventory_flow_gap",
  "range_evidence_update",
  "unit_or_flow_property_issue",
  "validation_rule_issue",
  "translation_mismatch",
  "source_update",
];

const pcrCatalogCache = new Map();
const GUIDANCE_MATURITIES = new Set([
  "authored_methodology",
  "reviewed_methodology",
  "published_methodology",
]);
const REVIEWED_MATURITIES = new Set(["reviewed_methodology", "published_methodology"]);
const USABLE_LIFECYCLE_STATES = new Map([
  ["candidate", new Set(["authored_methodology"])],
  ["active", new Set(["reviewed_methodology"])],
  ["published", new Set(["published_methodology"])],
]);
const GUIDANCE_LIFECYCLE_STATUSES = new Set(["candidate", "active", "published"]);

export class PcrUsabilityError extends Error {
  constructor({ pcrId, operation, readiness }) {
    const blockers = readiness.blockers.map((blocker) => blocker.code).join(", ");
    super(
      `PCR ${pcrId} is not usable for ${operation}: content_maturity=${readiness.methodology_status}; blockers=${blockers || "unknown"}`,
    );
    this.name = "PcrUsabilityError";
    this.code = `PCR_NOT_USABLE_FOR_${operation.toUpperCase()}`;
    this.readiness = structuredClone(readiness);
  }
}

export function listPcrs({ root, refresh = false }) {
  return getPcrCatalog({ root, refresh }).map(clonePcrEntry);
}

function getPcrCatalog({ root, refresh = false }) {
  const normalizedRoot = path.resolve(root);
  if (refresh || !pcrCatalogCache.has(normalizedRoot)) {
    pcrCatalogCache.set(normalizedRoot, readPcrCatalog(normalizedRoot));
  }
  return pcrCatalogCache.get(normalizedRoot);
}

function readPcrCatalog(root) {
  const pcrRoot = path.join(root, "library/pcrs");
  if (!existsSync(pcrRoot) || !statSync(pcrRoot).isDirectory()) {
    throw new Error(`PCR catalog root not found: ${toPosix(path.relative(root, pcrRoot))}`);
  }
  return findManifestFiles(pcrRoot)
    .map((manifestPath) => {
      const manifest = readYamlFile(manifestPath);
      const pcrDir = path.dirname(manifestPath);
      const pcr = {
        id: manifest.id,
        path: toPosix(path.relative(root, pcrDir)),
        title: manifest.title ?? {},
        status: manifest.status ?? "unknown",
        version: manifest.version ?? null,
        content_maturity: manifest.content_maturity ?? null,
        languages: manifest.languages ?? {},
        translation_status: manifest.translation_status ?? {},
        classification_refs: manifest.classification_refs ?? [],
      };
      pcr.readiness = assessPcrReadiness({
        pcr,
        structuredAvailable: existsSync(path.join(pcrDir, "structured.yaml")),
      });
      return pcr;
    })
    .filter((entry) => entry.id)
    .sort((left, right) => left.id.localeCompare(right.id));
}

export function buildPcrTree({ root, depth = Infinity }) {
  const tree = {};
  for (const pcr of listPcrs({ root })) {
    const segments = pcr.path.replace(/^library\/pcrs\//u, "").split("/");
    let node = tree;
    for (const [index, segment] of segments.entries()) {
      if (index >= depth) {
        break;
      }
      node[segment] ??= { children: {}, pcrs: [] };
      if (index === segments.length - 1) {
        node[segment].pcrs.push(pcr);
      }
      node = node[segment].children;
    }
  }
  return tree;
}

export function resolveClassification({ root, system, version, code }) {
  const normalizedSystem = String(system).toLowerCase();
  const mappingPath = path.join(
    root,
    "classifications/mappings",
    `${normalizedSystem}-${version}-to-pcr.yaml`,
  );
  if (!existsSync(mappingPath)) {
    throw new Error(`Classification mapping not found: ${toPosix(path.relative(root, mappingPath))}`);
  }
  const mappingFile = readYamlFile(mappingPath);
  const mapping = (mappingFile.mappings ?? []).find((entry) => String(entry.code) === String(code));
  if (!mapping) {
    throw new Error(`No PCR mapping found for ${system}:${version}:${code}`);
  }
  const pcr = getPcrById({ root, pcrId: mapping.pcr_id });
  return {
    classification_system: mappingFile.classification_system,
    classification_version: mappingFile.classification_version,
    mapping,
    pcr,
  };
}

export function getPcrById({ root, pcrId, refresh = false }) {
  const pcr = getPcrCatalog({ root, refresh }).find((entry) => entry.id === pcrId);
  if (!pcr) {
    throw new Error(`PCR not found: ${pcrId}`);
  }
  return clonePcrEntry(pcr);
}

export function getPcrReadiness({ root, pcrId, refresh = false }) {
  return structuredClone(getPcrById({ root, pcrId, refresh }).readiness);
}

export function readPcrMarkdown({ root, pcrId, language = "en-US" }) {
  const pcr = getPcrById({ root, pcrId });
  const markdownPath = path.join(root, pcr.path, `pcr.${language}.md`);
  if (!existsSync(markdownPath)) {
    throw new Error(`PCR Markdown not found: ${toPosix(path.relative(root, markdownPath))}`);
  }
  return readFileSync(markdownPath, "utf8");
}

export function buildGuidance({ root, pcrId }) {
  return buildGuidanceForOperation({ root, pcrId, operation: "guidance" });
}

function buildGuidanceForOperation({ root, pcrId, operation }) {
  const pcr = getPcrById({ root, pcrId });
  assertPcrUsable({ pcr, operation });
  const structuredPath = path.join(root, pcr.path, "structured.yaml");
  if (!existsSync(structuredPath)) {
    throw new Error(`structured.yaml not found for ${pcrId}`);
  }
  const structured = readYamlFile(structuredPath);
  return {
    schema_version: 1,
    guidance_kind: "tiangong-pcr-agent-guidance",
    pcr,
    readiness: structuredClone(pcr.readiness),
    source_structured: toPosix(path.relative(root, structuredPath)),
    system_boundary: structured.system_boundary ?? {},
    reference_flow: structured.reference_flow_definition ?? {},
    boundary_abstraction: structured.boundary_abstraction ?? {},
    measurement_rules: structured.measurement_rules ?? structured.unit_conventions ?? [],
    process_map: structured.process_map ?? [],
    process_inventory: structured.process_inventory ?? [],
    production_guidance: {
      collection_protocols: structured.dataset_production?.collection_protocols ?? [],
      calculation_rules: structured.dataset_production?.calculation_rules ?? [],
      data_quality_requirements: structured.dataset_production?.data_quality_requirements ?? [],
    },
    published_dataset_profile: structured.published_dataset_profile ?? {},
    allocation_rules: structured.allocation_rules ?? [],
    data_quality_rules: structured.data_quality_rules ?? [],
    validation_rules: structured.validation_rules ?? [],
    data_sources: structured.data_sources ?? [],
    validation_notes: [
      "Use this guidance as the source of Tiangong foreground data collection package requirements.",
      "Preserve Tiangong UUIDs exactly and keep PCR-derived UUID references version-free.",
      "Run tiangong-pcr validate-dataset after constructing a foreground data package and draft feedback if PCR guidance is missing or ambiguous.",
    ],
  };
}

export function createFeedbackDraft({
  root,
  pcrId,
  type,
  affectedSection = "",
  processId = "",
  flowRole = "",
  summary = "",
  evidence = "",
  proposedChange = "",
  agent = "tiangong-pcr",
}) {
  if (!FEEDBACK_TYPES.includes(type)) {
    throw new Error(`Unsupported feedback type: ${type}`);
  }
  const pcr = pcrId ? getPcrById({ root, pcrId }) : null;
  const title = `PCR feedback: ${type}${pcrId ? ` for ${pcrId}` : ""}`;
  const body = `## Summary

${summary || "Describe the PCR issue or improvement."}

## Feedback metadata

| Field | Value |
| --- | --- |
| PCR id | ${pcrId || ""} |
| PCR version | ${pcr?.version ?? ""} |
| Feedback type | ${type} |
| Affected section | ${affectedSection} |
| Affected process_id | ${processId} |
| Affected flow role | ${flowRole} |
| Generated by | ${agent} |

## Current PCR text or rule excerpt


## Proposed change

${proposedChange}

## Evidence sources

${evidence}

## Impact on foreground data package construction


## Maintainer intake checklist

- [ ] Classify the feedback as PCR content, classification mapping, UUID identity, translation, source evidence, or CLI/validator behavior.
- [ ] Verify cited evidence and Tiangong UUID references before changing PCR content.
- [ ] Update canonical \`pcr.en-US.md\` first when methodology changes.
- [ ] Align \`pcr.zh-CN.md\` when user-facing text changes.
- [ ] Run \`npm run pcr:sync-structured -- --pcr <library/pcrs/...>\` when canonical Markdown changes.
- [ ] Bump or publish the PCR manifest if lifecycle state changes.
`;

  return { title, body };
}

export function validateModelAgainstGuidance({ root, pcrId, model }) {
  const guidance = buildGuidanceForOperation({ root, pcrId, operation: "validation" });
  const findings = [];
  const accepted = typeof model === "string" || isRecord(model);
  const text = typeof model === "string" ? model : accepted ? JSON.stringify(model) : "";
  const checksPerformed = [];
  const checksSkipped = [];

  if (!accepted) {
    findings.push({
      severity: "error",
      code: "invalid_model_input",
      message: "Model input must be text or a JSON object.",
    });
  }

  const requiredQualifiers = asArray(guidance.reference_flow.required_qualifiers);
  if (accepted && requiredQualifiers.length > 0) {
    checksPerformed.push(performedCheck(
      "required_qualifier_presence",
      "reference_flow.required_qualifiers",
      requiredQualifiers.length,
    ));
    for (const qualifier of requiredQualifiers) {
      if (!text.toLowerCase().includes(String(qualifier).toLowerCase())) {
        findings.push({
          severity: "warning",
          code: "missing_required_qualifier",
          message: `Model text does not mention required qualifier: ${qualifier}`,
        });
      }
    }
  }

  if (accepted) {
    addSkippedCheck(
      checksSkipped,
      "system_boundary_rules",
      "system_boundary.rules",
      asArray(guidance.system_boundary?.rules).length,
    );
    addSkippedCheck(
      checksSkipped,
      "boundary_abstraction",
      "boundary_abstraction",
      topLevelRequirementCount(guidance.boundary_abstraction),
    );
    addSkippedCheck(
      checksSkipped,
      "reference_flow_definition",
      "reference_flow",
      topLevelRequirementCount(guidance.reference_flow, ["required_qualifiers"]),
    );
    addSkippedCheck(checksSkipped, "measurement_rules", "measurement_rules", asArray(guidance.measurement_rules).length);
    addSkippedCheck(checksSkipped, "process_map", "process_map", asArray(guidance.process_map).length);
    addSkippedCheck(checksSkipped, "process_inventory", "process_inventory", countInventoryRows(guidance.process_inventory));
    addSkippedCheck(
      checksSkipped,
      "collection_protocols",
      "production_guidance.collection_protocols",
      asArray(guidance.production_guidance.collection_protocols).length,
    );
    addSkippedCheck(
      checksSkipped,
      "calculation_rules",
      "production_guidance.calculation_rules",
      asArray(guidance.production_guidance.calculation_rules).length,
    );
    addSkippedCheck(
      checksSkipped,
      "data_quality_requirements",
      "production_guidance.data_quality_requirements",
      asArray(guidance.production_guidance.data_quality_requirements).length,
    );
    addSkippedCheck(checksSkipped, "data_quality_rules", "data_quality_rules", asArray(guidance.data_quality_rules).length);
    addSkippedCheck(checksSkipped, "allocation_rules", "allocation_rules", asArray(guidance.allocation_rules).length);
    addSkippedCheck(checksSkipped, "validation_rules", "validation_rules", asArray(guidance.validation_rules).length);
    addSkippedCheck(
      checksSkipped,
      "published_dataset_profile",
      "published_dataset_profile",
      topLevelRequirementCount(guidance.published_dataset_profile),
    );
  }

  return buildValidationReport({
    validationKind: "tiangong-pcr-model-validation",
    guidance,
    input: {
      input_kind: "process_or_lifecyclemodel",
      representation: typeof model === "string" ? "text" : Array.isArray(model) ? "array" : typeof model,
      accepted,
    },
    findings,
    checksPerformed,
    checksSkipped,
  });
}

export function validateDatasetAgainstGuidance({ root, pcrId, dataset }) {
  const guidance = buildGuidanceForOperation({ root, pcrId, operation: "validation" });
  const findings = [];
  const accepted = isRecord(dataset);
  const checksPerformed = [];
  const checksSkipped = [];
  const records = accepted ? collectionRecordArrays(dataset) : [];
  const requiredProtocolIds = asArray(guidance.production_guidance.collection_protocols)
    .map((protocol) => protocol.protocol_id)
    .filter(Boolean);
  const presentProtocolIds = accepted ? collectCollectionRecordProtocolIds(dataset) : new Set();

  if (!accepted) {
    findings.push({
      severity: "error",
      code: "invalid_dataset_input",
      message: "Foreground data package input must be a JSON object.",
    });
  }

  if (accepted && requiredProtocolIds.length > 0) {
    checksPerformed.push(performedCheck(
      "collection_protocol_presence",
      "production_guidance.collection_protocols",
      requiredProtocolIds.length,
    ));
    for (const protocolId of requiredProtocolIds) {
      if (!presentProtocolIds.has(String(protocolId))) {
        findings.push({
          severity: "error",
          code: "missing_collection_protocol_record",
          message: `Foreground data package is missing collection record for protocol_id ${protocolId}`,
        });
      }
    }
  }

  if (accepted) {
    addSkippedCheck(
      checksSkipped,
      "system_boundary_rules",
      "system_boundary.rules",
      asArray(guidance.system_boundary?.rules).length,
    );
    addSkippedCheck(
      checksSkipped,
      "boundary_abstraction",
      "boundary_abstraction",
      topLevelRequirementCount(guidance.boundary_abstraction),
    );
    addSkippedCheck(
      checksSkipped,
      "reference_flow_rules",
      "reference_flow",
      topLevelRequirementCount(guidance.reference_flow, ["required_qualifiers"]) +
        asArray(guidance.reference_flow?.required_qualifiers).length,
    );
    addSkippedCheck(checksSkipped, "measurement_rules", "measurement_rules", asArray(guidance.measurement_rules).length);
    addSkippedCheck(checksSkipped, "process_map", "process_map", asArray(guidance.process_map).length);
    addSkippedCheck(checksSkipped, "process_inventory", "process_inventory", countInventoryRows(guidance.process_inventory));
    addSkippedCheck(
      checksSkipped,
      "calculation_rules",
      "production_guidance.calculation_rules",
      asArray(guidance.production_guidance.calculation_rules).length,
    );
    addSkippedCheck(
      checksSkipped,
      "data_quality_requirements",
      "production_guidance.data_quality_requirements",
      asArray(guidance.production_guidance.data_quality_requirements).length,
    );
    addSkippedCheck(checksSkipped, "data_quality_rules", "data_quality_rules", asArray(guidance.data_quality_rules).length);
    addSkippedCheck(checksSkipped, "allocation_rules", "allocation_rules", asArray(guidance.allocation_rules).length);
    addSkippedCheck(checksSkipped, "validation_rules", "validation_rules", asArray(guidance.validation_rules).length);
    addSkippedCheck(
      checksSkipped,
      "published_dataset_profile",
      "published_dataset_profile",
      topLevelRequirementCount(guidance.published_dataset_profile),
    );
  }

  return buildValidationReport({
    validationKind: "tiangong-pcr-dataset-validation",
    guidance,
    input: {
      input_kind: "foreground_data_package",
      representation: Array.isArray(dataset) ? "array" : dataset === null ? "null" : typeof dataset,
      accepted,
      collection_record_count: records.length,
      distinct_protocol_id_count: presentProtocolIds.size,
    },
    findings,
    checksPerformed,
    checksSkipped,
  });
}

function collectCollectionRecordProtocolIds(dataset) {
  if (typeof dataset === "string") {
    return new Set();
  }
  const ids = new Set();
  for (const record of collectionRecordArrays(dataset)) {
    const protocolId = record?.protocol_id ?? record?.collection_protocol_id;
    if (protocolId) {
      ids.add(String(protocolId));
    }
  }
  return ids;
}

function collectionRecordArrays(value) {
  if (!value || typeof value !== "object") {
    return [];
  }
  const records = [];
  for (const key of ["collection_records", "foreground_records", "measurement_records"]) {
    if (Array.isArray(value[key])) {
      records.push(...value[key]);
    }
  }
  if (value.data && typeof value.data === "object") {
    records.push(...collectionRecordArrays(value.data));
  }
  return records;
}

function assessPcrReadiness({ pcr, structuredAvailable }) {
  const blockers = [];
  const warnings = [];
  const methodologyStatus = pcr.content_maturity ?? "unknown";
  const lifecycleStatus = pcr.status ?? "unknown";
  const chineseTranslationStatus = pcr.translation_status?.["zh-CN"] ?? "unknown";

  if (!GUIDANCE_MATURITIES.has(methodologyStatus)) {
    blockers.push({
      code: "methodology_not_authored",
      message: `content_maturity ${methodologyStatus} is not usable methodology.`,
    });
  }
  if (lifecycleStatus === "scaffold") {
    blockers.push({
      code: "scaffold_lifecycle",
      message: "PCR lifecycle status is scaffold.",
    });
  } else if (!GUIDANCE_LIFECYCLE_STATUSES.has(lifecycleStatus)) {
    blockers.push({
      code: "lifecycle_not_usable",
      message: `PCR lifecycle status ${lifecycleStatus} is not available for guidance.`,
    });
  }
  if (lifecycleStatus === "deprecated" || methodologyStatus === "deprecated_methodology") {
    blockers.push({
      code: "deprecated_methodology",
      message: "Deprecated PCR methodology must not guide new work.",
    });
  }
  if (!structuredAvailable) {
    blockers.push({
      code: "structured_projection_missing",
      message: "structured.yaml is required for Agent guidance and validation.",
    });
  }
  if (
    GUIDANCE_MATURITIES.has(methodologyStatus) &&
    !USABLE_LIFECYCLE_STATES.get(lifecycleStatus)?.has(methodologyStatus)
  ) {
    blockers.push({
      code: "incompatible_lifecycle_state",
      message: `status ${lifecycleStatus} is incompatible with content_maturity ${methodologyStatus}.`,
    });
  }
  if (
    lifecycleStatus === "active" &&
    !["aligned", "reviewed"].includes(chineseTranslationStatus)
  ) {
    blockers.push({
      code: "translation_not_aligned",
      message: `active PCR requires aligned or reviewed zh-CN translation; found ${chineseTranslationStatus}.`,
    });
  }
  if (lifecycleStatus === "published" && chineseTranslationStatus !== "reviewed") {
    blockers.push({
      code: "translation_not_reviewed",
      message: `published PCR requires reviewed zh-CN translation; found ${chineseTranslationStatus}.`,
    });
  }

  if (methodologyStatus === "authored_methodology") {
    warnings.push({
      code: "methodology_not_reviewed",
      message: "Authored methodology is candidate guidance and still requires methodology review.",
    });
  }
  if (
    lifecycleStatus === "candidate" &&
    !["aligned", "reviewed"].includes(chineseTranslationStatus)
  ) {
    warnings.push({
      code: "translation_not_aligned",
      message: `Candidate zh-CN translation is ${chineseTranslationStatus}; use canonical en-US guidance for methodology decisions.`,
    });
  }

  const usable = blockers.length === 0;
  return {
    status: usable
      ? (REVIEWED_MATURITIES.has(methodologyStatus) && lifecycleStatus !== "candidate" ? "ready" : "review_required")
      : "unavailable",
    lifecycle_status: lifecycleStatus,
    methodology_status: methodologyStatus,
    structured_projection_available: structuredAvailable,
    usable_for_guidance: usable,
    usable_for_validation: usable,
    blockers,
    warnings,
  };
}

function assertPcrUsable({ pcr, operation }) {
  const usabilityKey = operation === "validation" ? "usable_for_validation" : "usable_for_guidance";
  if (!pcr.readiness?.[usabilityKey]) {
    throw new PcrUsabilityError({ pcrId: pcr.id, operation, readiness: pcr.readiness });
  }
}

function buildValidationReport({
  validationKind,
  guidance,
  input,
  findings,
  checksPerformed,
  checksSkipped,
}) {
  const checkedRequirementCount = checksPerformed.reduce((total, check) => total + check.requirement_count, 0);
  const skippedRequirementCount = checksSkipped.reduce((total, check) => total + check.requirement_count, 0);
  const completeness = checksPerformed.length === 0
    ? "none"
    : checksSkipped.length > 0
      ? "partial"
      : "complete";
  const findingSummary = countFindingsBySeverity(findings);
  const validationStatus = findingSummary.error > 0
    ? "failed"
    : checksPerformed.length === 0
      ? "inconclusive"
      : "passed";

  return {
    schema_version: 1,
    validation_kind: validationKind,
    pcr: guidance.pcr,
    readiness: structuredClone(guidance.readiness),
    validation_status: validationStatus,
    completeness,
    input,
    check_coverage: {
      total_requirement_count: checkedRequirementCount + skippedRequirementCount,
      checked_requirement_count: checkedRequirementCount,
      skipped_requirement_count: skippedRequirementCount,
      checks_performed: checksPerformed,
      checks_skipped: checksSkipped,
    },
    finding_count: findings.length,
    finding_summary: findingSummary,
    findings,
  };
}

function performedCheck(checkId, requirementFamily, requirementCount) {
  return {
    check_id: checkId,
    requirement_family: requirementFamily,
    requirement_count: requirementCount,
    evaluated_requirement_count: requirementCount,
  };
}

function addSkippedCheck(checks, checkId, requirementFamily, requirementCount) {
  if (requirementCount <= 0) {
    return;
  }
  checks.push({
    check_id: checkId,
    requirement_family: requirementFamily,
    requirement_count: requirementCount,
    reason: "Validator does not yet implement this requirement family.",
  });
}

function countFindingsBySeverity(findings) {
  const summary = { error: 0, warning: 0, info: 0 };
  for (const finding of findings) {
    if (Object.hasOwn(summary, finding.severity)) {
      summary[finding.severity] += 1;
    }
  }
  return summary;
}

function countInventoryRows(processInventory) {
  let count = 0;
  for (const process of asArray(processInventory)) {
    for (const direction of ["inputs", "outputs"]) {
      const groups = process?.[direction];
      if (!isRecord(groups)) {
        continue;
      }
      for (const rows of Object.values(groups)) {
        count += asArray(rows).length;
      }
    }
  }
  return count;
}

function topLevelRequirementCount(value, excludedKeys = []) {
  if (!isRecord(value)) {
    return 0;
  }
  const excluded = new Set(excludedKeys);
  return Object.entries(value).filter(
    ([key, requirement]) => !excluded.has(key) && hasRequirementValue(requirement),
  ).length;
}

function hasRequirementValue(value) {
  if (Array.isArray(value)) {
    return value.some(hasRequirementValue);
  }
  if (isRecord(value)) {
    return Object.values(value).some(hasRequirementValue);
  }
  return value !== undefined && value !== null && String(value).trim() !== "";
}

function asArray(value) {
  return Array.isArray(value) ? value : [];
}

function isRecord(value) {
  return Boolean(value) && typeof value === "object" && !Array.isArray(value);
}

function findManifestFiles(directory) {
  if (!existsSync(directory)) {
    return [];
  }
  const results = [];
  for (const entry of readdirSync(directory)) {
    const fullPath = path.join(directory, entry);
    const stat = statSync(fullPath);
    if (stat.isDirectory()) {
      results.push(...findManifestFiles(fullPath));
      continue;
    }
    if (entry === "manifest.yaml") {
      results.push(fullPath);
    }
  }
  return results;
}

function toPosix(value) {
  return value.split(path.sep).join("/");
}

function clonePcrEntry(entry) {
  return structuredClone(entry);
}
