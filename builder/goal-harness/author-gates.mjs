import { readFileSync } from "node:fs";
import { fileURLToPath } from "node:url";

import Ajv2020 from "ajv/dist/2020.js";

import { GoalHarnessError } from "./errors.mjs";

const authorReportSchema = JSON.parse(
  readFileSync(fileURLToPath(new URL("../schemas/goal-author-report.schema.json", import.meta.url)), "utf8"),
);
const ajv = new Ajv2020({ allErrors: true, strict: true });
ajv.addFormat("uuid", /^[0-9a-f]{8}-[0-9a-f]{4}-[1-8][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/iu);
const validateSchema = ajv.compile(authorReportSchema);

const SET_FLOW_PATTERNS = [
  /\broute-specific energy carriers\b/iu,
  /\benergy carriers\b/iu,
  /\butilities\b/iu,
  /\bfuels\b/iu,
  /\belectricity\s*,\s*steam or fuel\b/iu,
  /\bpackaging materials\b/iu,
  /\bcleaning chemicals\b/iu,
  /\bwastewater and residues\b/iu,
  /\bemissions to air\b/iu,
  /\bother materials\b/iu,
  /\bother wastes\b/iu,
  /按实际路线选择/u,
  /未来再确定/u,
  /电力[、，,]\s*蒸汽或燃料/u,
  /包装材料/u,
  /清洗化学品/u,
  /废水和残余物/u,
  /其他材料/u,
  /其他废物/u,
];

const COMMON_FLOW_PATTERNS = [
  /\belectricity\b/iu,
  /^\s*(?:(?:process|drinking|makeup|make-up|cooling|hot|scrubbing|granulation)\s+water|water)\s*$/iu,
  /\bnatural gas\b/iu,
  /\bLPG\b/iu,
  /\bdiesel\b/iu,
  /\bsteam\b/iu,
  /^\s*(?:(?:industrial|liquid|gaseous|compressed)\s+)?oxygen(?:\s+gas)?(?:\s+(?:for|input|supply|consumption|used)\b.*)?\s*$/iu,
  /^\s*(?:liquid|gaseous|industrial)?\s*nitrogen(?:\s+gas)?\s*$/iu,
  /\bcarbon dioxide\b/iu,
  /\bmethane\b/iu,
  /\bnitrous oxide\b/iu,
  /^\s*(?:工业|液态|气态|压缩)?氧气(?:气体)?(?:用于.*|投入|供应|消耗)?\s*$/u,
  /电力|(?:工艺|过程|饮用|补充|冷却|热|洗涤|粒化)水|天然气|液化石油气|柴油|蒸汽|氮气|二氧化碳|甲烷|氧化亚氮/u,
];

export function validateAuthorReport(report) {
  const valid = validateSchema(report);
  return {
    valid: Boolean(valid),
    errors: valid ? [] : structuredAjvErrors(validateSchema.errors),
  };
}

export function assertAuthorQuality({ report, authorizedFiles, changedFiles, inventoryRows, referenceRows = { en: [], zh: [] }, sourceIds = [], manifestUnresolved = null, verifiedUuidReads = [], phase = "harvest" }) {
  if (!Array.isArray(inventoryRows?.en) || !Array.isArray(inventoryRows?.zh)) {
    throw new GoalHarnessError("GOAL_QUALITY_DEPENDENCY_UNAVAILABLE", "Quality checks require both successfully parsed inventory projections.", {
      phase, origin: "harness_review", failure_kind: "dependency_unavailable", checks: [{ phase, check_id: "quality", subject_id: report?.pcr_path, status: "skipped", reason: "parsed_inventory_unavailable" }],
    });
  }
  const infrastructureRows = (report.inventory?.unresolved ?? []).filter((entry) => entry.reason_code === "tiangong_cli_unavailable");
  const findings = [];
  if (infrastructureRows.length > 0) findings.push({
    code: "GOAL_UUID_INFRASTRUCTURE_UNAVAILABLE", message: "An author's tool-unavailable assertion cannot establish valid unresolved coverage or independently prove a retryable outage.",
    phase, origin: "author_reported", failure_kind: "unconfirmed_failure", retryable: false, row_ids: infrastructureRows.map(entry => entry.row_id),
  });
  const checks = [];
  const schemaResult = validateAuthorReport(report);
  if (!schemaResult.valid) {
    findings.push(...schemaResult.errors.map((error) => ({ code: "AUTHOR_REPORT_SCHEMA_INVALID", message: error.message, detail: error })));
  }

  const authorized = [...new Set(authorizedFiles)].sort();
  const changed = [...new Set(changedFiles)].sort();
  const reported = [...new Set(report.files ?? [])].sort();
  if (!sameStrings(changed, authorized)) {
    findings.push({ code: "UNAUTHORIZED_COMMIT_PATH", message: "Commit tree changes must equal the exact four-file allowlist.", authorized, changed });
  }
  if (!sameStrings(reported, authorized) || report.pcr_path && !authorized.every((entry) => entry.startsWith(`${report.pcr_path}/`))) {
    findings.push({ code: "AUTHOR_REPORT_PATH_MISMATCH", message: "Reported files or PCR path do not match the authorization." });
  }

  const enRows = inventoryRows?.en ?? [];
  const zhRows = inventoryRows?.zh ?? [];
  const matched = enRows.filter((row) => Boolean(row.uuid)).length;
  const unresolvedRows = enRows.filter((row) => !row.uuid);
  const unresolvedIds = new Set((report.inventory?.unresolved ?? []).map((entry) => entry.row_id));
  const unresolvedById = new Map((report.inventory?.unresolved ?? []).map((entry) => [entry.row_id, entry]));
  const duplicateUnresolved = duplicateValues((report.inventory?.unresolved ?? []).map((entry) => entry.row_id));
  if (
    report.inventory?.total_rows !== report.inventory?.matched_rows + report.inventory?.unresolved_rows ||
    report.inventory?.total_rows !== enRows.length ||
    report.inventory?.matched_rows !== matched ||
    report.inventory?.unresolved_rows !== unresolvedRows.length ||
    report.inventory?.unresolved?.length !== unresolvedRows.length ||
    duplicateUnresolved.length > 0 ||
    unresolvedRows.some((row) => !unresolvedIds.has(row.row_id)) ||
    [...unresolvedIds].some((rowId) => !unresolvedRows.some((row) => row.row_id === rowId))
  ) {
    findings.push({ code: "INVENTORY_ACCOUNTING_MISMATCH", message: "Inventory must satisfy total = matched UUID + explicit unresolved, with no third state." });
  }
  if (manifestUnresolved !== null) {
    const manifestIds = [...new Set(manifestUnresolved)].sort();
    const reportIds = [...unresolvedIds].sort();
    if (!sameStrings(manifestIds, reportIds)) {
      findings.push({ code: "MANIFEST_UNRESOLVED_MISMATCH", message: "Manifest unresolved inventory row ids must exactly match the UUID-empty rows and author report.", manifest: manifestIds, report: reportIds });
    }
  }

  const alignmentMismatch = enRows.length !== zhRows.length || enRows.some((row, index) => {
    const translated = zhRows[index];
    return !translated || row.row_id !== translated.row_id || (row.uuid ?? "") !== (translated.uuid ?? "") || row.flow_type !== translated.flow_type;
  });
  if (alignmentMismatch || report.bilingual?.aligned !== true || report.bilingual?.en_inventory_rows !== enRows.length || report.bilingual?.zh_inventory_rows !== zhRows.length) {
    findings.push({ code: "BILINGUAL_ROW_ALIGNMENT_MISMATCH", message: "English and Chinese inventory row order, ids, UUIDs, and controlled flow types must align." });
  }
  if (referenceRows.en.length !== referenceRows.zh.length || referenceRows.en.some((row, index) => String(row.uuid ?? "").toLowerCase() !== String(referenceRows.zh[index]?.uuid ?? "").toLowerCase())) {
    findings.push({ code: "REFERENCE_PRODUCT_ALIGNMENT_MISMATCH", message: "English and Chinese reference-product UUIDs must align." });
  }

  const declarations = groupByUuid(report.uuid_audits ?? []);
  const identities = groupByUuid(verifiedUuidReads);
  for (const [uuid, entries] of declarations) {
    if (entries.length > 1) findings.push({ code: "UUID_ADOPTION_DUPLICATE", uuid, message: "An adopted UUID must have exactly one unambiguous declaration; duplicate declarations cannot overwrite each other." });
  }
  const actualRows = [...referenceRows.en, ...enRows];
  for (const [uuid, entries] of groupByUuid(actualRows)) {
    const adopted = declarations.get(uuid) ?? [];
    if (adopted.length === 0 || !adopted[0]?.hybrid_search_receipt_id) {
      findings.push({ code: "UUID_ADOPTION_MISSING", uuid, row_ids: entries.map(row => row.row_id), message: "Every actual reference-product and inventory UUID requires an adopted declaration linked to a receipt." });
    }
  }
  const checkIdentity = (row, translated) => {
    const uuid = String(row.uuid).toLowerCase();
    const adopted = declarations.get(uuid) ?? [];
    if (adopted.length !== 1 || !adopted[0].hybrid_search_receipt_id) return;
    const reads = identities.get(uuid) ?? [];
    if (reads.length !== 1 || reads[0]?.state_code !== 100 || typeof reads[0]?.base_name_en !== "string" || !reads[0].base_name_en || typeof reads[0]?.base_name_zh !== "string") {
      checks.push({ phase, check_id: "uuid_identity", subject_id: `${row.row_id}:${uuid}`, status: "skipped", reason: "independent_uuid_read_unavailable", depends_on: [{ check_id: "uuid_public_read", subject_id: uuid }] });
      return;
    }
    const audit = reads[0];
    const before = findings.length;
    if (audit.base_name_zh && translated?.name !== audit.base_name_zh) {
      findings.push({ code: "ZH_FLOW_NAME_NOT_OFFICIAL", row_id: row.row_id, expected: audit.base_name_zh, actual: translated?.name ?? null, message: "A UUID-bearing Chinese flow name must equal the independently read TianGong Chinese baseName." });
    } else if (!audit.base_name_zh && translated?.name !== audit.base_name_en) {
      findings.push({ code: "ZH_FLOW_NAME_CANONICAL_FALLBACK_REQUIRED", row_id: row.row_id, expected: audit.base_name_en, actual: translated?.name ?? null, message: "When TianGong has no Chinese baseName, retain its verified canonical English baseName." });
    } else if (!audit.base_name_zh && !/(?:Chinese\s+baseName.*unavailable|no\s+(?:official\s+)?Chinese\s+baseName|中文\s*(?:baseName|基础名称|名称).*(?:不可用|缺失|为空|未提供))/iu.test(adopted[0].semantic_review ?? "")) {
      findings.push({ code: "ZH_FLOW_NAME_UNAVAILABLE_EXPLANATION_MISSING", row_id: row.row_id, message: "The UUID audit must explain that the TianGong Chinese baseName is unavailable." });
    }
    checks.push({ phase, check_id: "uuid_identity", subject_id: `${row.row_id}:${uuid}`, status: findings.length === before ? "passed" : "failed" });
  };
  for (const [index, row] of referenceRows.en.entries()) {
    if (row.uuid) checkIdentity(row, referenceRows.zh[index]);
  }
  for (const [index, row] of enRows.entries()) {
    const translated = zhRows[index];
    if (SET_FLOW_PATTERNS.some((pattern) => pattern.test(row.name ?? "") || pattern.test(translated?.name ?? ""))) {
      findings.push({ code: "INVENTORY_FLOW_NOT_ATOMIC", row_id: row.row_id, message: `Selected flow is set-like rather than atomic: ${row.name}` });
    }
    if (row.uuid) {
      checkIdentity(row, translated);
    } else if (translated && !/\p{Script=Han}/u.test(translated.name ?? "")) {
      findings.push({ code: "ZH_FLOW_NAME_NOT_LOCALIZED", row_id: row.row_id, message: "An unresolved concrete flow needs a clear professional Chinese name." });
    }
    for (const [field, value] of [
      ["role", translated?.role],
      ["description", translated?.description],
      ["amount.expression", translated?.amount?.expression],
    ]) {
      if (typeof value === "string" && value.trim() && !/\p{Script=Han}/u.test(value)) {
        findings.push({ code: "ZH_INVENTORY_TEXT_NOT_LOCALIZED", row_id: row.row_id, field, message: `Chinese inventory ${field} must be professionally localized.` });
      }
    }
    if (!row.uuid && COMMON_FLOW_PATTERNS.some((pattern) => pattern.test(row.name ?? "") || pattern.test(translated?.name ?? ""))) {
      const unresolved = unresolvedById.get(row.row_id);
      if ((unresolved?.hybrid_search_receipt_ids?.length ?? 0) === 0) {
        findings.push({ code: "COMMON_FLOW_UUID_AUDIT_MISSING", row_id: row.row_id, message: "A common UUID-empty flow needs an auditable hybrid-search/direct-read query explanation." });
      }
    }
  }

  for (const sourceId of sourceIds) {
    const declarations = (report.sources ?? []).filter(source => source.source_id === sourceId);
    if (declarations.length !== 1) findings.push({ code: declarations.length ? "SOURCE_DECLARATION_DUPLICATE" : "SOURCE_DECLARATION_MISSING", source_id: sourceId, message: "Every actual PCR source reference needs one unambiguous author source declaration." });
    else if (declarations[0].discovery_only === true) findings.push({ code: "SOURCE_REFERENCE_DISCOVERY_ONLY", source_id: sourceId, message: "An actual PCR evidence reference cannot be declared discovery-only." });
  }
  for (const source of report.sources ?? []) {
    if (/codex/iu.test(source.source_id) && !/codex alimentarius/iu.test(source.name)) {
      findings.push({ code: "SOURCE_ID_CODEX_FORBIDDEN", source_id: source.source_id, message: "Source ids must not label discovery by Codex." });
    }
    if (source.discovery_only !== true && source.original_text_verified !== true) {
      findings.push({ code: "SOURCE_ORIGINAL_TEXT_UNVERIFIED", source_id: source.source_id, message: "Final evidence must be verified against original text." });
    }
  }
  const sourcesById = new Map((report.sources ?? []).map((source) => [source.source_id, source]));
  for (const range of report.ranges ?? []) {
    if (Number.isFinite(range.lower) && Number.isFinite(range.upper) && range.lower >= range.upper) {
      findings.push({ code: "RANGE_BOUNDS_INVALID", range_id: range.range_id, message: "Range lower must be strictly below upper." });
    }
    if (range.evidence_kind === "external_source") {
      const sourceIds = new Set(range.source_ids ?? []);
      const independenceKeys = new Set([...sourceIds].map((sourceId) => sourcesById.get(sourceId)?.independence_key).filter(Boolean));
      if (range.independent_source_count < 2 || sourceIds.size < 2 || independenceKeys.size < 2) {
        findings.push({ code: "RANGE_INDEPENDENT_SOURCES_INSUFFICIENT", range_id: range.range_id, message: "External inferred ranges need at least two independent original sources." });
      }
      if (range.original_text_verified !== true || [...sourceIds].some((sourceId) => sourcesById.get(sourceId)?.original_text_verified !== true)) {
        findings.push({ code: "RANGE_SOURCE_TEXT_UNVERIFIED", range_id: range.range_id, message: "Every range source must be verified against original text." });
      }
      if (!range.synthesis || range.synthesis.trim().length < 20) {
        findings.push({ code: "RANGE_SYNTHESIS_MISSING", range_id: range.range_id, message: "Explain boundary, functional-unit, product-state, geography, technology, and synthesis decisions." });
      }
    }
    if (range.evidence_kind === "reasoned_estimate" && ((range.source_ids?.length ?? 0) > 0 || range.provisional !== true)) {
      findings.push({ code: "REASONED_ESTIMATE_MISREPRESENTED", range_id: range.range_id, message: "Reasoned estimates must be provisional and must not carry invented source ids." });
    }
  }

  if (enRows.length > 120 && !report.complexity_justification) {
    findings.push({ code: "INVENTORY_COMPLEXITY_JUSTIFICATION_REQUIRED", message: "More than 120 rows requires an auditable complexity justification." });
  }
  if (enRows.length > 180 && report.methodology_necessity_approved !== true) {
    findings.push({ code: "INVENTORY_REDESIGN_REQUIRED", message: "More than 180 rows requires compression/restructuring unless methodology necessity is explicitly approved." });
  }
  if (enRows.length > 250) {
    findings.push({ code: "INVENTORY_ROW_LIMIT_EXCEEDED", message: "More than 250 rows is rejected without a separately audited exception." });
  }
  if (report.structured_sync?.first_run_ok !== true || report.structured_sync?.second_run_clean !== true || report.structured_sync?.schema_valid !== true) {
    findings.push({ code: "STRUCTURED_SYNC_NOT_DETERMINISTIC", message: "Structured projection must be schema-valid and a second sync must be clean." });
  }
  if (report.validate?.ok !== true && report.validate?.known_shared_artifact_only !== true) {
    findings.push({ code: "AUTHOR_VALIDATE_FAILED", message: "Author validation may fail only for a precisely reported central shared-artifact dependency." });
  }

  if (findings.length > 0 || checks.some(check => check.status !== "passed")) {
    throw new GoalHarnessError(infrastructureRows.length ? "GOAL_UUID_INFRASTRUCTURE_UNAVAILABLE" : "GOAL_AUTHOR_RESULT_INVALID", `Author result has ${findings.length} failed finding(s) and ${checks.filter(check => check.status === "skipped").length} unavailable identity check(s).`, {
      findings: findings.map(finding => ({ phase, origin: "harness_review", failure_kind: ["UNAUTHORIZED_COMMIT_PATH", "AUTHOR_REPORT_PATH_MISMATCH"].includes(finding.code) ? "authorization" : "author_claim", ...finding })), checks,
    });
  }
  return { valid: true, counts: { total: enRows.length, matched, unresolved: unresolvedRows.length }, findings: [], checks };
}

function groupByUuid(entries) {
  const grouped = new Map();
  for (const entry of entries ?? []) {
    const uuid = String(entry?.uuid ?? "").toLowerCase();
    if (uuid) grouped.set(uuid, [...(grouped.get(uuid) ?? []), entry]);
  }
  return grouped;
}

export function referenceProductRows(projection) {
  const product = projection?.referenceFlowDefinition?.product_flow;
  if (product) return [{ ...product, row_id: "reference_product", flow_type: "product" }];
  return (projection?.referenceFlows ?? []).map((row, index) => ({ ...row, row_id: `reference_product_${index}` }));
}

export function pcrSourceIds(projection) {
  const ids = new Set((projection?.dataSources ?? []).map(source => source.id).filter(Boolean));
  const visit = value => {
    if (!value || typeof value !== "object") return;
    for (const [key, entry] of Object.entries(value)) {
      if (key === "source_ids" && Array.isArray(entry)) {
        for (const id of entry) if (typeof id === "string" && id) ids.add(id);
      } else if (typeof entry === "object") visit(entry);
    }
  };
  visit(projection);
  return [...ids].filter(id => !id.startsWith("tg-")).sort();
}

export function flattenProcessInventory(projection) {
  const processes = projection?.processInventory ?? projection?.process_inventory ?? [];
  return processes.flatMap((process) => ["inputs", "outputs"].flatMap((direction) => {
    const groups = process[direction] ?? {};
    return ["product", "waste", "elementary"].flatMap((flowType) => (groups[flowType] ?? []).map((row) => ({
      ...row,
      uuid: row.uuid ?? row.flow_ref?.uuid ?? "",
      flow_type: row.flow_type ?? flowType,
      process_id: process.id,
      direction,
    })));
  }));
}

function structuredAjvErrors(errors = []) {
  return errors.map((error) => ({ path: error.instancePath || "/", keyword: error.keyword, message: error.message ?? "invalid" }));
}

function sameStrings(left, right) {
  return left.length === right.length && left.every((entry, index) => entry === right[index]);
}

function duplicateValues(values) {
  const seen = new Set();
  const duplicates = new Set();
  for (const value of values) {
    if (seen.has(value)) duplicates.add(value);
    seen.add(value);
  }
  return [...duplicates];
}
