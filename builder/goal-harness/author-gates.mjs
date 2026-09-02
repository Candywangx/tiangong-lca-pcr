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
  /\boxygen\b/iu,
  /^\s*(?:liquid|gaseous|industrial)?\s*nitrogen(?:\s+gas)?\s*$/iu,
  /\bcarbon dioxide\b/iu,
  /\bmethane\b/iu,
  /\bnitrous oxide\b/iu,
  /电力|(?:工艺|过程|饮用|补充|冷却|热|洗涤|粒化)水|天然气|液化石油气|柴油|蒸汽|氧气|氮气|二氧化碳|甲烷|氧化亚氮/u,
];

const DIRECT_QUERY_EVIDENCE_PATTERN = /hybrid|state[_ -]?code\s*[=:]?\s*100|direct(?:ly)? (?:read|quer)|直接(?:读取|查询)|候选.*(?:拒绝|核验)|candidate.*(?:read|reject|audit)|queried|searched/iu;

export function validateAuthorReport(report) {
  const valid = validateSchema(report);
  return {
    valid: Boolean(valid),
    errors: valid ? [] : structuredAjvErrors(validateSchema.errors),
  };
}

export function assertAuthorQuality({ report, authorizedFiles, changedFiles, inventoryRows, manifestUnresolved = null }) {
  const findings = [];
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

  const audits = new Map((report.uuid_audits ?? []).map((audit) => [audit.uuid.toLowerCase(), audit]));
  for (const [index, row] of enRows.entries()) {
    const translated = zhRows[index];
    if (SET_FLOW_PATTERNS.some((pattern) => pattern.test(row.name ?? "") || pattern.test(translated?.name ?? ""))) {
      findings.push({ code: "INVENTORY_FLOW_NOT_ATOMIC", row_id: row.row_id, message: `Selected flow is set-like rather than atomic: ${row.name}` });
    }
    if (row.uuid) {
      const audit = audits.get(row.uuid.toLowerCase());
      if (!audit || audit.hybrid_search !== true || audit.state_code !== 100) {
        findings.push({ code: "UUID_NOT_DIRECTLY_VERIFIED", row_id: row.row_id, uuid: row.uuid, message: "Every final UUID needs hybrid discovery and public state_code=100 direct read audit." });
      } else if (translated?.name !== audit.base_name_zh) {
        findings.push({ code: "ZH_FLOW_NAME_NOT_OFFICIAL", row_id: row.row_id, expected: audit.base_name_zh, actual: translated?.name ?? null, message: "A UUID-bearing Chinese flow name must equal the directly read TianGong Chinese baseName." });
      }
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
      const toolUnavailable = ["tiangong_lookup_rate_limited", "tiangong_cli_unavailable"].includes(unresolved?.reason_code);
      if (!toolUnavailable && !DIRECT_QUERY_EVIDENCE_PATTERN.test(unresolved?.explanation ?? "")) {
        findings.push({ code: "COMMON_FLOW_UUID_AUDIT_MISSING", row_id: row.row_id, message: "A common UUID-empty flow needs an auditable hybrid-search/direct-read query explanation." });
      }
    }
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

  if (findings.length > 0) {
    throw new GoalHarnessError("GOAL_AUTHOR_RESULT_INVALID", `Author result failed ${findings.length} machine gate(s)`, { findings });
  }
  return { valid: true, counts: { total: enRows.length, matched, unresolved: unresolvedRows.length }, findings: [] };
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
