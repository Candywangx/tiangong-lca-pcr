import { spawnSync } from "node:child_process";
import { createHash } from "node:crypto";
import path from "node:path";

import { GoalHarnessError } from "./errors.mjs";

export function auditReportedUuids({ report, tiangongCliRoot, runner = runTiangongFlowGet }) {
  const results = [];
  for (const claimed of report.uuid_audits ?? []) {
    const direct = runner({ uuid: claimed.uuid, tiangongCliRoot });
    const flow = direct?.flow?.flowDataSet;
    const info = flow?.flowInformation?.dataSetInformation;
    const names = localizedTexts(info?.name?.baseName);
    const actual = {
      uuid: String(info?.["common:UUID"] ?? "").toLowerCase(),
      state_code: direct?.state_code,
      base_name_en: names.en ?? names["en-US"] ?? "",
      base_name_zh: names.zh ?? names["zh-CN"] ?? "",
      flow_type: normalizeFlowType(flow?.modellingAndValidation?.LCIMethod?.typeOfDataSet),
      classifications: classificationValues(info?.classificationInformation?.["common:classification"]?.["common:class"]),
      property: localizedTexts(flow?.flowProperties?.flowProperty?.referenceToFlowPropertyDataSet?.["common:shortDescription"]).en ?? "",
    };
    const mismatches = [];
    if (actual.uuid !== claimed.uuid.toLowerCase()) mismatches.push("uuid");
    if (actual.state_code !== 100 || claimed.state_code !== 100) mismatches.push("state_code");
    if (actual.base_name_en !== claimed.base_name_en) mismatches.push("base_name_en");
    if (actual.base_name_zh !== claimed.base_name_zh) mismatches.push("base_name_zh");
    if (actual.flow_type !== normalizeFlowType(claimed.flow_type)) mismatches.push("flow_type");
    if (claimed.classification && !actual.classifications.some((value) => claimed.classification.includes(value.id) || claimed.classification.includes(value.label))) mismatches.push("classification");
    if (claimed.property && actual.property && claimed.property !== actual.property) mismatches.push("property");
    if (claimed.hybrid_search !== true) mismatches.push("hybrid_search");
    if (mismatches.length > 0) {
      throw new GoalHarnessError("GOAL_UUID_DIRECT_AUDIT_MISMATCH", `Direct state_code=100 audit disagrees with the author report for ${claimed.uuid}: ${mismatches.join(", ")}`, { uuid: claimed.uuid, mismatches, claimed, actual });
    }
    results.push({
      ...actual,
      unit_group_claim: claimed.unit_group,
      semantic_review: claimed.semantic_review,
      hybrid_search: true,
      checked_at: new Date().toISOString(),
      response_sha256: `sha256:${createHash("sha256").update(stableJson(direct)).digest("hex")}`,
    });
  }
  return results;
}

export async function verifySourceLocators({ report, fetchImpl = globalThis.fetch, timeoutMs = 30_000 }) {
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
      const sample = await readResponseSample(response, 65_536);
      audits.push({
        source_id: source.source_id,
        locator,
        resolved_url: response.url ?? locator,
        http_status: response.status,
        content_type: response.headers?.get?.("content-type") ?? null,
        original_text_claimed_verified: source.original_text_verified === true,
        checked_at: new Date().toISOString(),
        sample_sha256: `sha256:${createHash("sha256").update(sample).digest("hex")}`,
      });
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
  const result = spawnSync(process.execPath, [cliPath, "flow", "get", "--id", uuid, "--state-code", "100", "--json"], {
    cwd: tiangongCliRoot,
    encoding: "utf8",
    stdio: ["ignore", "pipe", "pipe"],
    maxBuffer: 64 * 1024 * 1024,
  });
  if (result.status !== 0) {
    throw new GoalHarnessError("GOAL_UUID_DIRECT_READ_FAILED", `TianGong state_code=100 direct read failed for ${uuid}`, { uuid, exit_code: result.status, stderr_tail: String(result.stderr ?? "").slice(-4000) });
  }
  try {
    return JSON.parse(result.stdout);
  } catch (error) {
    throw new GoalHarnessError("GOAL_UUID_DIRECT_READ_FAILED", `TianGong direct read returned invalid JSON for ${uuid}`, { cause: error.message });
  }
}

function localizedTexts(value) {
  const entries = Array.isArray(value) ? value : value ? [value] : [];
  return Object.fromEntries(entries.map((entry) => [entry?.["@xml:lang"], entry?.["#text"]]).filter(([language, text]) => language && typeof text === "string"));
}

function classificationValues(value) {
  const entries = Array.isArray(value) ? value : value ? [value] : [];
  return entries.map((entry) => ({ id: String(entry?.["@classId"] ?? ""), label: String(entry?.["#text"] ?? "") })).filter((entry) => entry.id || entry.label);
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

async function readResponseSample(response, limit) {
  const reader = response.body?.getReader?.();
  if (!reader) return Buffer.alloc(0);
  const chunks = [];
  let length = 0;
  while (length < limit) {
    const { done, value } = await reader.read();
    if (done) break;
    const chunk = Buffer.from(value);
    chunks.push(chunk.subarray(0, limit - length));
    length += Math.min(chunk.length, limit - length);
    if (length >= limit) break;
  }
  await reader.cancel?.();
  return Buffer.concat(chunks);
}

function stableJson(value) {
  if (Array.isArray(value)) return `[${value.map(stableJson).join(",")}]`;
  if (value && typeof value === "object") return `{${Object.keys(value).sort().map((key) => `${JSON.stringify(key)}:${stableJson(value[key])}`).join(",")}}`;
  return JSON.stringify(value);
}
