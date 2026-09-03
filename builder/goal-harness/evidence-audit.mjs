import { spawnSync } from "node:child_process";
import { createHash } from "node:crypto";
import path from "node:path";

import { GoalHarnessError } from "./errors.mjs";
import { appendGoalCacheReceipt } from "./goal-cache.mjs";

const REUSABLE_COMMON_UUID_PATTERN = /^(?:alternating current|electricity(?:,.*)?|natural gas(?: .*)?|liquefied petroleum gas|lpg|diesel(?: fuel)?|steam(?:,.*)?|hot water|process water|drinking water|industrial oxygen|industrial nitrogen|carbon dioxide(?: \(fossil\))?|methane|nitrous oxide|sodium hydroxide|sodium hypochlorite|peracetic acid|(?:refrigerant|polyethylene film|pet tray|corrugated paperboard)(?:,.*)?)$/iu;

export function mergeVerifiedCommonUuids(existing = [], audited = []) {
  const merged = new Map(existing.map((entry) => [String(entry.uuid).toLowerCase(), entry]));
  for (const entry of audited) {
    if (!REUSABLE_COMMON_UUID_PATTERN.test(String(entry.base_name_en ?? "").trim())) continue;
    merged.set(String(entry.uuid).toLowerCase(), entry);
  }
  return [...merged.values()].sort((left, right) => String(left.uuid).localeCompare(String(right.uuid)));
}

export function auditReportedUuids({ report, tiangongCliRoot, runner = runTiangongFlowGet, supportRunner = runTiangongReferenceSupport }) {
  const results = [];
  for (const claimed of report.uuid_audits ?? []) {
    const actual = readPublicUuidAudit({ uuid: claimed.uuid, tiangongCliRoot, runner, supportRunner });
    const mismatches = [];
    if (actual.uuid !== claimed.uuid.toLowerCase()) mismatches.push("uuid");
    if (actual.state_code !== 100 || claimed.state_code !== 100) mismatches.push("state_code");
    if (actual.base_name_en !== claimed.base_name_en) mismatches.push("base_name_en");
    if (actual.base_name_zh !== claimed.base_name_zh) mismatches.push("base_name_zh");
    if (actual.flow_type !== normalizeFlowType(claimed.flow_type)) mismatches.push("flow_type");
    if (!classificationClaimMatches(claimed.classification, actual.classifications, actual.flow_type)) mismatches.push("classification");
    if (!propertyClaimMatches(claimed.property, actual.property)) mismatches.push("property");
    if (actual.flow_property_state_code !== 100) mismatches.push("flow_property_state");
    if (actual.flow_property_name_en !== actual.property) mismatches.push("flow_property_name");
    if (actual.unit_group_state_code !== 100 || !actual.unit_group_uuid) mismatches.push("unit_group_state");
    if (!unitGroupClaimMatches(claimed.unit_group, actual)) mismatches.push("unit_group");
    if (!claimed.hybrid_search_receipt_id) mismatches.push("hybrid_search_receipt_id");
    if (mismatches.length > 0) {
      throw new GoalHarnessError("GOAL_UUID_DIRECT_AUDIT_MISMATCH", `Direct state_code=100 audit disagrees with the author report for ${claimed.uuid}: ${mismatches.join(", ")}`, { uuid: claimed.uuid, mismatches, claimed, actual });
    }
    results.push({
      ...actual,
      unit_group_claim: claimed.unit_group,
      semantic_review: claimed.semantic_review,
      hybrid_search_receipt_id: claimed.hybrid_search_receipt_id,
      checked_at: new Date().toISOString(),
    });
  }
  return results;
}

export function readPublicUuidAudit({ uuid, tiangongCliRoot, runner = runTiangongFlowGet, supportRunner = runTiangongReferenceSupport }) {
    const direct = runner({ uuid, tiangongCliRoot });
    const flow = direct?.flow?.flowDataSet;
    const info = flow?.flowInformation?.dataSetInformation;
    const names = localizedTexts(info?.name?.baseName);
    const referenceProperty = referenceFlowProperty(flow);
    const flowPropertyReference = referenceProperty?.referenceToFlowPropertyDataSet;
    const support = supportRunner({
      flowPropertyId: String(flowPropertyReference?.["@refObjectId"] ?? ""),
      flowPropertyVersion: String(flowPropertyReference?.["@version"] ?? ""),
      tiangongCliRoot,
    });
    return {
      uuid: String(info?.["common:UUID"] ?? "").toLowerCase(),
      state_code: direct?.state_code,
      base_name_en: names.en ?? names["en-US"] ?? "",
      base_name_zh: names.zh ?? names["zh-CN"] ?? "",
      flow_type: normalizeFlowType(flow?.modellingAndValidation?.LCIMethod?.typeOfDataSet),
      classifications: [
        ...classificationValues(info?.classificationInformation?.["common:classification"]?.["common:class"]),
        ...elementaryCategoryValues(info?.classificationInformation?.["common:elementaryFlowCategorization"]?.["common:category"]),
      ],
      property: localizedTexts(referenceProperty?.referenceToFlowPropertyDataSet?.["common:shortDescription"]).en ?? "",
      flow_property_uuid: String(referenceProperty?.referenceToFlowPropertyDataSet?.["@refObjectId"] ?? "").toLowerCase(),
      unit_group_uuid: String(support?.unit_group?.id ?? "").toLowerCase(),
      unit_group_name_en: String(support?.unit_group?.name_en ?? ""),
      unit_group_name_zh: String(support?.unit_group?.name_zh ?? ""),
      reference_unit: String(support?.unit_group?.reference_unit ?? ""),
      flow_property_state_code: String(support?.flow_property?.id ?? "").toLowerCase() === String(flowPropertyReference?.["@refObjectId"] ?? "").toLowerCase() ? (support?.flow_property?.state_code ?? null) : null,
      flow_property_name_en: String(support?.flow_property?.name_en ?? ""),
      unit_group_state_code: support?.unit_group?.state_code ?? null,
      general_comment: localizedTexts(info?.generalComment).en ?? localizedTexts(info?.generalComment).zh ?? "",
      response_sha256: `sha256:${createHash("sha256").update(stableJson({ direct, support })).digest("hex")}`,
    };
}

export async function verifySourceLocators({ report, stateDir = null, fetchImpl = globalThis.fetch, timeoutMs = 30_000 }) {
  const audits = [];
  for (const source of report.sources ?? []) {
    if (source.discovery_only === true) continue;
    const locator = normalizeLocator(source.locator);
    if (/openalex\.org|api\.openalex\.org|scholar\.google|search\?/iu.test(locator)) {
      throw new GoalHarnessError("GOAL_SOURCE_DISCOVERY_ONLY", `Discovery/search locator cannot be final evidence: ${source.source_id}`, { source_id: source.source_id, locator });
    }
    const controller = new AbortController();
    const timeout = setTimeout(() => controller.abort(), timeoutMs);
    try {
      const response = await fetchImpl(locator, { method: "GET", redirect: "follow", signal: controller.signal, headers: { "user-agent": "tiangong-pcr-goal-harness/1.0" } });
      if (!response.ok) {
        throw new GoalHarnessError("GOAL_SOURCE_LOCATOR_UNREADABLE", `Source locator returned HTTP ${response.status}: ${source.source_id}`, { source_id: source.source_id, locator, status: response.status });
      }
      const content = await readResponseBytes(response, 64 * 1024 * 1024);
      const contentSha256 = `sha256:${createHash("sha256").update(content).digest("hex")}`;
      const audit = {
        source_id: source.source_id,
        locator,
        resolved_url: response.url ?? locator,
        http_status: response.status,
        content_type: response.headers?.get?.("content-type") ?? null,
        original_text_claimed_verified: source.original_text_verified === true,
        checked_at: new Date().toISOString(),
        content_sha256: contentSha256,
        content_byte_length: content.byteLength,
      };
      audits.push(audit);
      if (stateDir) {
        const keyInput = { source_id: source.source_id, locator };
        const tool = { name: "http-original-text-fetch", version: "1" };
        appendGoalCacheReceipt({ stateDir, namespace: "source_locator_checks", keyInput, tool, sourceFingerprint: contentSha256, value: audit });
        if (source.original_text_verified === true) {
          appendGoalCacheReceipt({ stateDir, namespace: "source_original_text_receipts", keyInput, tool, sourceFingerprint: contentSha256, value: audit, blob: content });
        }
      }
    } catch (error) {
      if (error instanceof GoalHarnessError) throw error;
      throw new GoalHarnessError("GOAL_SOURCE_LOCATOR_UNREADABLE", `Cannot read source locator for ${source.source_id}: ${error.message}`, { source_id: source.source_id, locator });
    } finally {
      clearTimeout(timeout);
    }
  }
  return audits;
}

function runTiangongFlowGet({ uuid, tiangongCliRoot }) {
  const cliPath = path.join(tiangongCliRoot, "bin", "tiangong-lca.js");
  const result = spawnSync(process.execPath, [`--env-file-if-exists=${path.join(tiangongCliRoot, ".env")}`, cliPath, "flow", "get", "--id", uuid, "--state-code", "100", "--json"], {
    cwd: tiangongCliRoot,
    encoding: "utf8",
    stdio: ["ignore", "pipe", "pipe"],
    maxBuffer: 64 * 1024 * 1024,
  });
  if (result.status !== 0) {
    throw new GoalHarnessError("GOAL_UUID_DIRECT_READ_FAILED", `TianGong state_code=100 direct read failed for ${uuid}`, { uuid, exit_code: result.status, credentials_redacted: true });
  }
  try {
    return JSON.parse(result.stdout);
  } catch (error) {
    throw new GoalHarnessError("GOAL_UUID_DIRECT_READ_FAILED", `TianGong direct read returned invalid JSON for ${uuid}`, { cause: error.message });
  }
}

function runTiangongReferenceSupport({ flowPropertyId, flowPropertyVersion, tiangongCliRoot }) {
  if (!flowPropertyId) {
    throw new GoalHarnessError("GOAL_UUID_DIRECT_READ_FAILED", "TianGong flow does not declare a reference flow-property UUID.");
  }
  const result = spawnSync(process.execPath, [
    "--env-file-if-exists=.env",
    "--input-type=module",
    "-e",
    TIANGONG_REFERENCE_SUPPORT_SCRIPT,
    flowPropertyId,
    flowPropertyVersion,
  ], {
    cwd: tiangongCliRoot,
    encoding: "utf8",
    stdio: ["ignore", "pipe", "pipe"],
    maxBuffer: 16 * 1024 * 1024,
  });
  if (result.status !== 0) {
    throw new GoalHarnessError("GOAL_UUID_DIRECT_READ_FAILED", `TianGong public flow-property/unit-group audit failed for ${flowPropertyId}`, { flow_property_uuid: flowPropertyId, exit_code: result.status, credentials_redacted: true });
  }
  try {
    return JSON.parse(result.stdout);
  } catch (error) {
    throw new GoalHarnessError("GOAL_UUID_DIRECT_READ_FAILED", `TianGong flow-property/unit-group audit returned invalid JSON for ${flowPropertyId}`, { cause: error.message });
  }
}

const TIANGONG_REFERENCE_SUPPORT_SCRIPT = String.raw`
import { createSupabaseDataClient, requireSupabaseRestRuntime } from "./dist/src/lib/supabase-client.js";
import { createSupabaseDataRuntime } from "./dist/src/lib/supabase-session.js";
const [flowPropertyId, requestedVersion] = process.argv.slice(1);
const runtime = createSupabaseDataRuntime({ runtime: requireSupabaseRestRuntime(process.env), fetchImpl: fetch, timeoutMs: 10000, now: new Date() });
const { client } = createSupabaseDataClient(runtime, fetch, 10000);
async function readPublic(table, id, version) {
  let query = client.from(table).select("id,version,state_code,json").eq("id", id).eq("state_code", 100);
  query = version ? query.eq("version", version) : query.order("version", { ascending: false }).limit(1);
  const { data, error } = await query;
  if (error) throw error;
  if (!Array.isArray(data) || data.length !== 1) throw new Error("Expected exactly one public " + table + " row for " + id);
  return data[0];
}
function payload(row) { return typeof row.json === "string" ? JSON.parse(row.json) : row.json; }
function localized(value) {
  const entries = Array.isArray(value) ? value : value ? [value] : [];
  return Object.fromEntries(entries.map((entry) => [entry?.["@xml:lang"], entry?.["#text"]]).filter(([language, text]) => language && typeof text === "string"));
}
const flowPropertyRow = await readPublic("flowproperties", flowPropertyId, requestedVersion);
const flowProperty = payload(flowPropertyRow)?.flowPropertyDataSet;
const flowPropertyInfo = flowProperty?.flowPropertiesInformation?.dataSetInformation;
const flowPropertyNames = localized(flowPropertyInfo?.["common:name"]);
const unitGroupReference = flowProperty?.flowPropertiesInformation?.quantitativeReference?.referenceToReferenceUnitGroup;
const unitGroupId = String(unitGroupReference?.["@refObjectId"] ?? "");
const unitGroupVersion = String(unitGroupReference?.["@version"] ?? "");
if (!unitGroupId) throw new Error("Public flow property has no reference unit-group UUID");
const unitGroupRow = await readPublic("unitgroups", unitGroupId, unitGroupVersion);
const unitGroup = payload(unitGroupRow)?.unitGroupDataSet;
const unitGroupInfo = unitGroup?.unitGroupInformation?.dataSetInformation;
const unitGroupNames = localized(unitGroupInfo?.["common:name"]);
const referenceUnitId = String(unitGroup?.unitGroupInformation?.quantitativeReference?.referenceToReferenceUnit ?? "");
const units = Array.isArray(unitGroup?.units?.unit) ? unitGroup.units.unit : unitGroup?.units?.unit ? [unitGroup.units.unit] : [];
const referenceUnit = units.find((entry) => String(entry?.["@dataSetInternalID"] ?? "") === referenceUnitId);
process.stdout.write(JSON.stringify({
  flow_property: { id: flowPropertyRow.id, version: flowPropertyRow.version, state_code: flowPropertyRow.state_code, name_en: flowPropertyNames.en ?? flowPropertyNames["en-US"] ?? "" },
  unit_group: { id: unitGroupRow.id, version: unitGroupRow.version, state_code: unitGroupRow.state_code, name_en: unitGroupNames.en ?? unitGroupNames["en-US"] ?? "", name_zh: unitGroupNames.zh ?? unitGroupNames["zh-CN"] ?? "", reference_unit: String(referenceUnit?.name ?? "") },
}));
`;

function localizedTexts(value) {
  const entries = Array.isArray(value) ? value : value ? [value] : [];
  return Object.fromEntries(entries.map((entry) => [entry?.["@xml:lang"], entry?.["#text"]]).filter(([language, text]) => language && typeof text === "string"));
}

function classificationValues(value) {
  const entries = Array.isArray(value) ? value : value ? [value] : [];
  return entries.map((entry) => ({ id: String(entry?.["@classId"] ?? ""), label: String(entry?.["#text"] ?? "") })).filter((entry) => entry.id || entry.label);
}

function elementaryCategoryValues(value) {
  const entries = Array.isArray(value) ? value : value ? [value] : [];
  return entries.map((entry) => ({ id: String(entry?.["@catId"] ?? ""), label: String(entry?.["#text"] ?? "") })).filter((entry) => entry.id || entry.label);
}

function referenceFlowProperty(flow) {
  const value = flow?.flowProperties?.flowProperty;
  const entries = Array.isArray(value) ? value : value ? [value] : [];
  const referenceId = String(flow?.flowInformation?.quantitativeReference?.referenceToReferenceFlowProperty ?? "");
  return entries.find((entry) => String(entry?.["@dataSetInternalID"] ?? "") === referenceId) ?? entries[0] ?? null;
}

function unitGroupClaimMatches(claim, actual) {
  const normalizedClaim = String(claim ?? "").toLowerCase();
  if (!normalizedClaim.trim()) return false;
  if (actual.unit_group_uuid && normalizedClaim.includes(actual.unit_group_uuid)) return true;
  const candidates = [actual.unit_group_name_en, actual.reference_unit]
    .flatMap((value) => String(value ?? "").toLowerCase().match(/[a-z][a-z0-9]*/gu) ?? [])
    .filter((token) => !["of", "unit", "units", "group"].includes(token));
  return candidates.some((token) => normalizedClaim.includes(token));
}

function classificationClaimMatches(claim, classifications, flowType) {
  const text = String(claim ?? "").trim();
  if (classifications.length > 0) {
    const normalized = normalizeComparableText(text);
    return Boolean(text) && classifications.some((value) =>
      text.includes(value.id) || (value.label && normalized.includes(normalizeComparableText(value.label))),
    );
  }
  if (flowType !== "elementary") return false;
  return !text || /no (?:product )?classification|not applicable|elementary[- ]flow compartment/iu.test(text);
}

function normalizeComparableText(value) {
  return String(value).toLowerCase().replace(/[^\p{L}\p{N}]+/gu, " ").trim();
}

function propertyClaimMatches(claim, property) {
  const text = String(claim ?? "").trim().toLowerCase();
  const expected = String(property ?? "").trim().toLowerCase();
  if (!text || !expected) return false;
  return text === expected || text.startsWith(`${expected};`) || text.startsWith(`${expected},`) || text.startsWith(`${expected} (`) || text.includes(`property ${expected}`) || text.includes(`property: ${expected}`);
}

function normalizeFlowType(value) {
  return String(value ?? "").toLowerCase().replace(/\s+flow$/u, "").trim();
}

function normalizeLocator(value) {
  const locator = String(value ?? "").trim();
  if (/^10\.\d{4,9}\//u.test(locator)) return `https://doi.org/${locator}`;
  try {
    const url = new URL(locator);
    if (!["http:", "https:"].includes(url.protocol)) throw new Error("unsupported protocol");
    return url.href;
  } catch (error) {
    throw new GoalHarnessError("GOAL_SOURCE_LOCATOR_INVALID", `Source locator must be an HTTP(S) URL or DOI: ${locator}`, { cause: error.message });
  }
}

async function readResponseBytes(response, limit) {
  const reader = response.body?.getReader?.();
  if (!reader) return Buffer.alloc(0);
  const chunks = [];
  let length = 0;
  while (length < limit) {
    const { done, value } = await reader.read();
    if (done) break;
    const chunk = Buffer.from(value);
    if (length + chunk.length > limit) {
      await reader.cancel?.();
      throw new GoalHarnessError("GOAL_SOURCE_ORIGINAL_TEXT_TOO_LARGE", `Source original text exceeds the ${limit}-byte cache limit.`);
    }
    chunks.push(chunk);
    length += chunk.length;
  }
  await reader.cancel?.();
  return Buffer.concat(chunks);
}

function stableJson(value) {
  if (Array.isArray(value)) return `[${value.map(stableJson).join(",")}]`;
  if (value && typeof value === "object") return `{${Object.keys(value).sort().map((key) => `${JSON.stringify(key)}:${stableJson(value[key])}`).join(",")}}`;
  return JSON.stringify(value);
}
