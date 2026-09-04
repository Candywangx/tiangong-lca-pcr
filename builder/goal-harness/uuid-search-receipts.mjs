import { spawnSync } from "node:child_process";
import { createHash, randomUUID } from "node:crypto";
import {
  existsSync,
  mkdirSync,
  readdirSync,
  readFileSync,
  realpathSync,
  rmSync,
  writeFileSync,
} from "node:fs";
import path from "node:path";

import { GoalHarnessError } from "./errors.mjs";
import { readPublicUuidAudit } from "./evidence-audit.mjs";
import { appendGoalCacheReceipt, listGoalCacheReceipts } from "./goal-cache.mjs";

const UUID_PATTERN = /^[0-9a-f]{8}-[0-9a-f]{4}-[1-8][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/iu;
const REJECTION_CODES = new Set([
  "semantic_mismatch",
  "classification_mismatch",
  "product_state_mismatch",
  "flow_type_mismatch",
  "property_or_unit_mismatch",
  "state_not_public",
  "not_exact_candidate",
  "manual_review_required",
]);

export function runHybridSearchWithReceipt({
  stateDir,
  taskId,
  query,
  flowType = null,
  limit = 20,
  cwd = process.cwd(),
  toolConfig,
  runner = defaultHybridSearchRunner,
  now = () => new Date().toISOString(),
  randomId = randomUUID,
}) {
  const task = requireBoundTask({ stateDir, taskId, cwd });
  const normalizedQuery = String(query ?? "").trim();
  if (!normalizedQuery) throw new GoalHarnessError("GOAL_HYBRID_SEARCH_QUERY_INVALID", "Hybrid-search query must not be empty.");
  if (!Number.isInteger(limit) || limit < 1 || limit > 100) {
    throw new GoalHarnessError("GOAL_HYBRID_SEARCH_QUERY_INVALID", "Hybrid-search limit must be an integer from 1 through 100.");
  }
  const normalizedFlowType = normalizeFlowType(flowType);
  const receiptId = String(randomId());
  if (!/^[a-z0-9][a-z0-9._-]{0,127}$/iu.test(receiptId)) {
    throw new GoalHarnessError("GOAL_HYBRID_SEARCH_RECEIPT_INVALID", "Generated receipt id is unsafe.");
  }
  const receiptDir = receiptDirectory(stateDir, task);
  mkdirSync(receiptDir, { recursive: true, mode: 0o700 });
  const request = {
    query: normalizedQuery,
    ...(normalizedFlowType ? { filter: { flowType: `${capitalize(normalizedFlowType)} flow` } } : {}),
    match_count: limit,
    page_size: limit,
  };
  const tool = hybridToolIdentity(toolConfig);
  const cacheKeyInput = { request, endpoint_id: "tiangong-flow-hybrid-search" };
  const cached = [...listGoalCacheReceipts({ stateDir, namespace: "uuid_query_receipts" })].reverse().find((entry) =>
    stableJson(entry.key_input) === stableJson(cacheKeyInput) && stableJson(entry.tool) === stableJson(tool),
  );
  const requestPath = path.join(receiptDir, `${receiptId}.request.json`);
  const resultPath = path.join(receiptDir, `${receiptId}.result.json`);
  const receiptPath = path.join(receiptDir, `${receiptId}.search.json`);
  writeExclusive(requestPath, `${JSON.stringify(request, null, 2)}\n`);
  let result;
  try {
    result = cached
      ? { status: 0, stdout: readFileSync(cached.blob_path, "utf8"), stderr: "" }
      : runner({ requestPath, toolConfig });
  } finally { rmSync(requestPath, { force: true }); }
  if (!result || result.status !== 0) {
    const failed = {
      schema_version: 1,
      receipt_id: receiptId,
      goal_id: readState(stateDir).goal_id,
      task_id: task.id,
      cpc_code: task.cpc_code,
      attempt: task.attempt ?? 0,
      query: { text: normalizedQuery, flow_type: normalizedFlowType, limit },
      status: "failed",
      authenticated: true,
      exit_code: Number.isInteger(result?.status) ? result.status : null,
      created_at: now(),
    };
    writeExclusive(receiptPath, `${JSON.stringify(failed, null, 2)}\n`);
    throw new GoalHarnessError(
      "GOAL_HYBRID_SEARCH_FAILED",
      "Authenticated hybrid search failed; credentials and raw stderr were not recorded.",
      { receipt_id: receiptId, exit_code: failed.exit_code },
    );
  }
  const stdout = String(result.stdout ?? "");
  let parsed;
  try {
    parsed = JSON.parse(stdout);
  } catch {
    throw new GoalHarnessError("GOAL_HYBRID_SEARCH_RESULT_INVALID", "Authenticated hybrid search did not return JSON.", { receipt_id: receiptId });
  }
  writeExclusive(resultPath, stdout);
  const receipt = {
    schema_version: 1,
    receipt_id: receiptId,
    goal_id: readState(stateDir).goal_id,
    task_id: task.id,
    cpc_code: task.cpc_code,
    attempt: task.attempt ?? 0,
    query: { text: normalizedQuery, flow_type: normalizedFlowType, limit },
    status: "succeeded",
    authenticated: true,
    tool,
    endpoint_id: "tiangong-flow-hybrid-search",
    query_sha256: sha256(stableJson(request)),
    candidates: collectCandidates(parsed),
    candidate_uuids: collectCandidateUuids(parsed),
    result_sha256: sha256(stdout),
    result_byte_length: Buffer.byteLength(stdout),
    result_path: resultPath,
    cache: cached ? { hit: true, receipt_id: cached.receipt_id } : { hit: false },
    created_at: now(),
  };
  writeExclusive(receiptPath, `${JSON.stringify(receipt, null, 2)}\n`);
  if (!cached) appendGoalCacheReceipt({
    stateDir,
    namespace: "uuid_query_receipts",
    keyInput: cacheKeyInput,
    tool: receipt.tool,
    sourceFingerprint: receipt.result_sha256,
    value: { receipt_id: receiptId, endpoint_id: receipt.endpoint_id, candidates: receipt.candidates },
    blob: Buffer.from(stdout),
    receiptId: `query-${receiptId}`,
    now,
  });
  return { receipt, result: parsed };
}

export function recordHybridCandidateDirectRead({
  stateDir,
  taskId,
  receiptId,
  uuid,
  cwd = process.cwd(),
  tiangongCliRoot,
  reader = readPublicUuidAudit,
  now = () => new Date().toISOString(),
}) {
  const task = requireBoundTask({ stateDir, taskId, cwd });
  const paths = receiptPaths(stateDir, task, receiptId);
  const normalizedUuid = String(uuid ?? "").toLowerCase();
  if (!existsSync(paths.search)) throw receiptMissing(`Receipt ${receiptId} does not exist.`);
  const receipt = JSON.parse(readFileSync(paths.search, "utf8"));
  if (!(receipt.candidate_uuids ?? []).includes(normalizedUuid)) {
    throw new GoalHarnessError("GOAL_HYBRID_SEARCH_RECEIPT_MISMATCH", `UUID ${uuid} is not a candidate in receipt ${receiptId}.`);
  }
  const directPath = directReadPath(paths.directory, receiptId, normalizedUuid);
  if (existsSync(directPath)) return JSON.parse(readFileSync(directPath, "utf8"));
  const actual = reader({ uuid: normalizedUuid, tiangongCliRoot });
  if (actual.state_code !== 100 || actual.uuid !== normalizedUuid) {
    throw new GoalHarnessError("GOAL_UUID_DIRECT_READ_FAILED", `Public state_code=100 read did not return candidate ${normalizedUuid}.`);
  }
  const document = {
    schema_version: 1,
    receipt_id: receiptId,
    task_id: task.id,
    tool: tiangongToolIdentity(tiangongCliRoot),
    endpoint_id: "tiangong-public-flow-state-100",
    checked_at: now(),
    ...actual,
  };
  writeExclusive(directPath, `${JSON.stringify(document, null, 2)}\n`);
  return document;
}

export function finalizeHybridSearchReceipt({ stateDir, taskId, receiptId, decisionsPath, cwd = process.cwd(), now = () => new Date().toISOString() }) {
  const task = requireBoundTask({ stateDir, taskId, cwd });
  const paths = receiptPaths(stateDir, task, receiptId);
  if (!existsSync(paths.search)) throw new GoalHarnessError("GOAL_HYBRID_SEARCH_RECEIPT_MISSING", `Hybrid-search receipt does not exist: ${receiptId}`);
  if (existsSync(paths.decisions)) {
    const existing = JSON.parse(readFileSync(paths.decisions, "utf8"));
    const requested = JSON.parse(readFileSync(decisionsPath, "utf8"));
    validateCandidateDecisions(receiptCandidateUuids(paths.search), requested);
    if (stableJson(existing.candidate_decisions.map(({ direct_read: _directRead, ...decision }) => decision)) !== stableJson(requested.map(normalizeDecision))) {
      throw new GoalHarnessError("GOAL_HYBRID_SEARCH_DECISIONS_CONFLICT", `Receipt ${receiptId} was already finalized with different decisions.`);
    }
    return existing;
  }
  const receipt = JSON.parse(readFileSync(paths.search, "utf8"));
  if (receipt.status !== "succeeded" || receipt.authenticated !== true) {
    throw new GoalHarnessError("GOAL_HYBRID_SEARCH_RECEIPT_INVALID", `Cannot finalize unsuccessful receipt ${receiptId}.`);
  }
  const decisions = JSON.parse(readFileSync(decisionsPath, "utf8"));
  if (!Array.isArray(decisions)) throw new GoalHarnessError("GOAL_HYBRID_SEARCH_DECISIONS_INVALID", "Receipt decisions must be a JSON array.");
  validateCandidateDecisions(receipt.candidate_uuids, decisions);
  const normalized = decisions.map(normalizeDecision);
  const candidateDecisions = normalized.map((decision) => {
    const directPath = directReadPath(paths.directory, receiptId, decision.uuid);
    if (!existsSync(directPath)) {
      throw new GoalHarnessError("GOAL_UUID_DIRECT_READ_RECEIPT_MISSING", `Candidate ${decision.uuid} has no state_code=100 direct-read receipt.`);
    }
    const directRead = JSON.parse(readFileSync(directPath, "utf8"));
    if (directRead.uuid !== decision.uuid || directRead.state_code !== 100 || !directRead.response_sha256) {
      throw new GoalHarnessError("GOAL_UUID_DIRECT_READ_RECEIPT_INVALID", `Candidate ${decision.uuid} direct-read receipt is invalid.`);
    }
    return { ...decision, direct_read: directRead };
  });
  const document = {
    schema_version: 1,
    receipt_id: receipt.receipt_id,
    goal_id: receipt.goal_id,
    task_id: receipt.task_id,
    candidate_decisions: candidateDecisions,
    finalized_at: now(),
  };
  writeExclusive(paths.decisions, `${JSON.stringify(document, null, 2)}\n`);
  return document;
}

export function auditHybridSearchReceipts({ report, stateDir, task, verifiedUuidReads = [] }) {
  const ids = report.hybrid_search_receipt_ids ?? [];
  const referenced = new Set(ids);
  for (const audit of report.uuid_audits ?? []) {
    if (!audit.hybrid_search_receipt_id) {
      throw receiptMissing(`UUID ${audit.uuid} is supported only by an untrusted hybrid_search assertion.`);
    }
    referenced.add(audit.hybrid_search_receipt_id);
  }
  for (const candidate of report.rejected_uuid_candidates ?? []) {
    if (!candidate.receipt_id) throw receiptMissing(`Rejected UUID ${candidate.uuid} has no hybrid-search receipt.`);
    referenced.add(candidate.receipt_id);
  }
  for (const unresolved of report.inventory?.unresolved ?? []) {
    const receiptIds = unresolved.hybrid_search_receipt_ids ?? [];
    if (["no_exact_candidate", "manual_review_required"].includes(unresolved.reason_code) && receiptIds.length === 0) {
      throw receiptMissing(`Unresolved row ${unresolved.row_id} (${unresolved.reason_code}) has no hybrid-search receipt.`);
    }
    for (const receiptId of receiptIds) referenced.add(receiptId);
  }
  if (referenced.size > 0 && ids.length === 0) throw receiptMissing("Author report does not list its hybrid-search receipt ids.");
  for (const id of referenced) {
    if (!ids.includes(id)) throw receiptMissing(`Referenced receipt ${id} is absent from hybrid_search_receipt_ids.`);
  }
  const taskBoundReceiptIds = new Set([
    ...(report.inventory?.unresolved ?? []).flatMap((entry) => entry.hybrid_search_receipt_ids ?? []),
  ]);
  const adoptedByReceipt = new Map();
  for (const claimed of report.uuid_audits ?? []) {
    const entries = adoptedByReceipt.get(claimed.hybrid_search_receipt_id) ?? [];
    entries.push(claimed);
    adoptedByReceipt.set(claimed.hybrid_search_receipt_id, entries);
  }
  const audits = ids.map((receiptId) => {
    try {
      return auditOneReceipt({ stateDir, task, receiptId });
    } catch (error) {
      const adopted = adoptedByReceipt.get(receiptId) ?? [];
      if (error.code !== "GOAL_HYBRID_SEARCH_RECEIPT_MISSING") throw error;
      const paths = findCompleteReceiptPaths({ stateDir, receiptId });
      try {
        const audited = auditOneReceipt({ stateDir, task, receiptId, paths });
        return { ...audited, scope: "task_retry_reuse", source_task_id: audited.task_id };
      } catch (retryError) {
        if (retryError.code !== "GOAL_HYBRID_SEARCH_RECEIPT_MISMATCH") throw retryError;
        if (taskBoundReceiptIds.has(receiptId) || adopted.length === 0) throw error;
      }
      const reusable = adopted.every((entry) => isReusableCommonUuidAudit({
        stateDir,
        entry: { uuid: entry.uuid, hybrid_search_receipt_id: receiptId },
      }));
      if (!reusable) throw error;
      const audited = auditOneReceipt({ stateDir, task, receiptId, paths, allowGoalCacheReuse: true });
      return { ...audited, scope: "goal_cache_reuse", source_task_id: audited.task_id };
    }
  });
  const byId = new Map(audits.map((entry) => [entry.receipt_id, entry]));
  for (const claimed of report.uuid_audits ?? []) {
    const receipt = byId.get(claimed.hybrid_search_receipt_id);
    const decision = receipt?.candidate_decisions.find((entry) => entry.uuid === claimed.uuid.toLowerCase());
    if (decision?.decision !== "adopted") throw receiptMissing(`UUID ${claimed.uuid} is not adopted by receipt ${claimed.hybrid_search_receipt_id}.`);
    const verified = verifiedUuidReads.find((entry) => entry.uuid === claimed.uuid.toLowerCase());
    if (!verified || !directReadMatches(decision.direct_read, verified)) {
      throw new GoalHarnessError("GOAL_HYBRID_SEARCH_RECEIPT_MISMATCH", `Receipt direct read for ${claimed.uuid} disagrees with the Harness public read.`);
    }
  }
  for (const claimed of report.rejected_uuid_candidates ?? []) {
    const receipt = byId.get(claimed.receipt_id);
    const decision = receipt?.candidate_decisions.find((entry) => entry.uuid === claimed.uuid.toLowerCase());
    if (decision?.decision !== "rejected" || decision.reason_code !== claimed.reason_code || decision.reason !== claimed.reason) {
      throw new GoalHarnessError("GOAL_HYBRID_SEARCH_RECEIPT_MISMATCH", `Rejected candidate ${claimed.uuid} disagrees with receipt ${claimed.receipt_id}.`);
    }
  }
  return audits;
}

export function isReusableCommonUuidAudit({ stateDir, entry }) {
  try {
    const receiptId = String(entry?.hybrid_search_receipt_id ?? "");
    const uuid = String(entry?.uuid ?? "").toLowerCase();
    if (!UUID_PATTERN.test(uuid) || !receiptId) return false;
    const attestations = listGoalCacheReceipts({ stateDir, namespace: "verified_common_uuids" }).filter((receipt) =>
      String(receipt.value?.uuid ?? "").toLowerCase() === uuid
      && receipt.value?.hybrid_search_receipt_id === receiptId
      && receipt.source_fingerprint === receipt.value?.response_sha256,
    );
    if (attestations.length === 0) return false;
    const paths = findCompleteReceiptPaths({ stateDir, receiptId });
    const audited = auditOneReceipt({ stateDir, task: null, receiptId, paths, allowGoalCacheReuse: true });
    const adopted = audited.candidate_decisions.find((decision) => decision.uuid === uuid && decision.decision === "adopted");
    return Boolean(adopted && attestations.some((receipt) => directReadMatches(adopted.direct_read, receipt.value)));
  } catch {
    return false;
  }
}

function auditOneReceipt({ stateDir, task, receiptId, paths = null, allowGoalCacheReuse = false }) {
  const resolvedPaths = paths ?? receiptPaths(stateDir, task, receiptId);
  if (!existsSync(resolvedPaths.search) || !existsSync(resolvedPaths.result) || !existsSync(resolvedPaths.decisions)) {
    throw receiptMissing(`Receipt ${receiptId} is incomplete.`);
  }
  const receipt = JSON.parse(readFileSync(resolvedPaths.search, "utf8"));
  const raw = readFileSync(resolvedPaths.result, "utf8");
  const decisions = JSON.parse(readFileSync(resolvedPaths.decisions, "utf8"));
  const currentGoalId = readState(stateDir).goal_id;
  const bindingMatches = allowGoalCacheReuse
    ? receipt.goal_id === currentGoalId
    : receipt.task_id === task.id && receipt.cpc_code === task.cpc_code;
  if (!bindingMatches || receipt.status !== "succeeded" || receipt.authenticated !== true) {
    throw new GoalHarnessError("GOAL_HYBRID_SEARCH_RECEIPT_MISMATCH", `Receipt ${receiptId} is not bound to this task.`);
  }
  if (receipt.result_sha256 !== sha256(raw) || receipt.result_byte_length !== Buffer.byteLength(raw)) {
    throw new GoalHarnessError("GOAL_HYBRID_SEARCH_RECEIPT_HASH_MISMATCH", `Receipt ${receiptId} result bytes changed after capture.`);
  }
  let parsed;
  try { parsed = JSON.parse(raw); } catch { throw new GoalHarnessError("GOAL_HYBRID_SEARCH_RECEIPT_HASH_MISMATCH", `Receipt ${receiptId} result is not JSON.`); }
  const candidates = collectCandidateUuids(parsed);
  if (!sameStrings(candidates, receipt.candidate_uuids ?? [])) {
    throw new GoalHarnessError("GOAL_HYBRID_SEARCH_RECEIPT_MISMATCH", `Receipt ${receiptId} candidate UUID projection is stale.`);
  }
  validateCandidateDecisions(candidates, decisions.candidate_decisions ?? []);
  for (const decision of decisions.candidate_decisions ?? []) {
    const directPath = directReadPath(resolvedPaths.directory, receiptId, decision.uuid);
    if (!existsSync(directPath)) throw receiptMissing(`Receipt ${receiptId} direct read for ${decision.uuid} is missing.`);
    const direct = JSON.parse(readFileSync(directPath, "utf8"));
    if (stableJson(direct) !== stableJson(decision.direct_read)) {
      throw new GoalHarnessError("GOAL_HYBRID_SEARCH_RECEIPT_MISMATCH", `Receipt ${receiptId} direct read for ${decision.uuid} changed.`);
    }
  }
  return {
    receipt_id: receiptId,
    task_id: receipt.task_id,
    query: receipt.query,
    candidate_uuids: candidates,
    result_sha256: receipt.result_sha256,
    candidate_decisions: decisions.candidate_decisions,
    authenticated: true,
    finalized_at: decisions.finalized_at,
  };
}

function findCompleteReceiptPaths({ stateDir, receiptId }) {
  if (!/^[a-z0-9][a-z0-9._-]{0,127}$/iu.test(receiptId)) throw receiptMissing("Receipt id is unsafe.");
  const root = path.join(stateDir, "uuid-search-receipts");
  if (!existsSync(root)) throw receiptMissing(`Receipt ${receiptId} is incomplete.`);
  const matches = [];
  for (const taskEntry of readdirSync(root, { withFileTypes: true })) {
    if (!taskEntry.isDirectory() || taskEntry.isSymbolicLink()) continue;
    const taskDir = path.join(root, taskEntry.name);
    for (const attemptEntry of readdirSync(taskDir, { withFileTypes: true })) {
      if (!attemptEntry.isDirectory() || attemptEntry.isSymbolicLink()) continue;
      const directory = path.join(taskDir, attemptEntry.name);
      const candidate = {
        directory,
        search: path.join(directory, `${receiptId}.search.json`),
        result: path.join(directory, `${receiptId}.result.json`),
        decisions: path.join(directory, `${receiptId}.decisions.json`),
      };
      if (existsSync(candidate.search) && existsSync(candidate.result) && existsSync(candidate.decisions)) matches.push(candidate);
    }
  }
  if (matches.length !== 1) throw receiptMissing(`Receipt ${receiptId} is not uniquely complete in the Goal cache.`);
  return matches[0];
}

function defaultHybridSearchRunner({ requestPath, toolConfig }) {
  const cliRoot = requiredToolPath(toolConfig?.tiangong_cli_root, "tiangong_cli_root");
  const hybridRoot = requiredToolPath(toolConfig?.flow_hybrid_search_root, "flow_hybrid_search_root");
  return spawnSync(process.execPath, [
    `--env-file-if-exists=${toolConfig?.credentials_env_file ? path.resolve(toolConfig.credentials_env_file) : path.join(cliRoot, ".env")}`,
    path.join(hybridRoot, "scripts", "run-flow-hybrid-search.mjs"),
    "--cli-dir", cliRoot,
    "--input", requestPath,
    "--json",
  ], {
    cwd: hybridRoot,
    encoding: "utf8",
    stdio: ["ignore", "pipe", "pipe"],
    timeout: 120_000,
    maxBuffer: 64 * 1024 * 1024,
  });
}

function requireBoundTask({ stateDir, taskId, cwd }) {
  const state = readState(stateDir);
  const task = (state.tasks ?? []).find((entry) => entry.id === taskId);
  if (!task) throw new GoalHarnessError("GOAL_TASK_NOT_FOUND", `Goal task does not exist: ${taskId}`);
  if (!task.worktree_path || realpathSync(cwd) !== realpathSync(task.worktree_path)) {
    throw new GoalHarnessError("GOAL_HYBRID_SEARCH_WORKTREE_MISMATCH", "UUID search must run from the visible task's bound worktree.", { task_id: task.id });
  }
  return task;
}

function readState(stateDir) {
  return JSON.parse(readFileSync(path.join(stateDir, "state.json"), "utf8"));
}

function receiptDirectory(stateDir, task) {
  return path.join(stateDir, "uuid-search-receipts", safeSegment(task.id), `attempt-${task.attempt ?? 0}`);
}

function receiptPaths(stateDir, task, receiptId) {
  if (!/^[a-z0-9][a-z0-9._-]{0,127}$/iu.test(String(receiptId))) throw receiptMissing("Receipt id is unsafe.");
  const dir = receiptDirectory(stateDir, task);
  return {
    directory: dir,
    search: path.join(dir, `${receiptId}.search.json`),
    result: path.join(dir, `${receiptId}.result.json`),
    decisions: path.join(dir, `${receiptId}.decisions.json`),
  };
}

function validateCandidateDecisions(candidateUuids, decisions) {
  const normalized = decisions.map(normalizeDecision);
  const ids = normalized.map((entry) => entry.uuid);
  if (!sameStrings([...ids].sort(), [...candidateUuids].sort()) || new Set(ids).size !== ids.length) {
    throw new GoalHarnessError("GOAL_HYBRID_SEARCH_DECISIONS_INVALID", "Candidate decisions must cover every receipt UUID exactly once.");
  }
}

function normalizeDecision(entry) {
  const uuid = String(entry?.uuid ?? "").toLowerCase();
  const decision = entry?.decision;
  const reasonCode = entry?.reason_code ?? null;
  const reason = String(entry?.reason ?? "").trim();
  const generalCommentReview = String(entry?.general_comment_review ?? "").trim();
  if (!UUID_PATTERN.test(uuid) || !["adopted", "rejected"].includes(decision) || !reason || !generalCommentReview) {
    throw new GoalHarnessError("GOAL_HYBRID_SEARCH_DECISIONS_INVALID", "Each candidate decision needs a valid UUID, decision, and explanation.");
  }
  if (decision === "adopted" && reasonCode !== null) {
    throw new GoalHarnessError("GOAL_HYBRID_SEARCH_DECISIONS_INVALID", "An adopted candidate must use reason_code null.");
  }
  if (decision === "rejected" && !REJECTION_CODES.has(reasonCode)) {
    throw new GoalHarnessError("GOAL_HYBRID_SEARCH_DECISIONS_INVALID", `Unsupported candidate rejection reason: ${reasonCode ?? "<missing>"}`);
  }
  return { uuid, decision, reason_code: reasonCode, reason, general_comment_review: generalCommentReview };
}

function collectCandidates(value) {
  const rows = Array.isArray(value?.data) ? value.data : Array.isArray(value) ? value : [];
  return rows.flatMap((row, index) => {
    const uuid = [row?.id, row?.uuid, row?.flow_id].find((entry) => typeof entry === "string" && UUID_PATTERN.test(entry));
    if (!uuid) return [];
    return [{
      uuid: uuid.toLowerCase(),
      rank: index + 1,
      match: Object.fromEntries(["score", "similarity", "distance", "base_name", "name"].filter((key) => row?.[key] !== undefined).map((key) => [key, row[key]])),
    }];
  });
}

function collectCandidateUuids(value) {
  const result = [];
  const seen = new Set();
  const rows = Array.isArray(value?.data) ? value.data : Array.isArray(value) ? value : [];
  for (const row of rows) {
    const candidate = [row?.id, row?.uuid, row?.flow_id].find((entry) => typeof entry === "string" && UUID_PATTERN.test(entry));
    if (!candidate) continue;
    const uuid = candidate.toLowerCase();
    if (!seen.has(uuid)) { seen.add(uuid); result.push(uuid); }
  }
  return result;
}

function writeExclusive(filePath, content) {
  writeFileSync(filePath, content, { flag: "wx", mode: 0o600 });
}

function receiptCandidateUuids(searchPath) {
  return JSON.parse(readFileSync(searchPath, "utf8")).candidate_uuids ?? [];
}

function normalizeFlowType(value) {
  if (value === null || value === undefined || value === "") return null;
  const normalized = String(value).toLowerCase().replace(/\s+flow$/u, "").trim();
  if (!["product", "waste", "elementary"].includes(normalized)) {
    throw new GoalHarnessError("GOAL_HYBRID_SEARCH_QUERY_INVALID", `Unsupported flow type: ${value}`);
  }
  return normalized;
}

function capitalize(value) { return `${value[0].toUpperCase()}${value.slice(1)}`; }
function safeSegment(value) { return String(value).replace(/[^a-z0-9._-]+/giu, "-").slice(0, 128); }
function sha256(value) { return `sha256:${createHash("sha256").update(value).digest("hex")}`; }
function sameStrings(left, right) { return left.length === right.length && left.every((entry, index) => entry === right[index]); }
function requiredToolPath(value, name) {
  if (!value) throw new GoalHarnessError("GOAL_UUID_INFRASTRUCTURE_UNAVAILABLE", `tools.${name} is required for authenticated UUID search.`);
  return path.resolve(value);
}
function hybridToolIdentity(toolConfig) {
  const root = requiredToolPath(toolConfig?.flow_hybrid_search_root, "flow_hybrid_search_root");
  const wrapper = path.join(root, "scripts", "run-flow-hybrid-search.mjs");
  try {
    return { name: "flow-hybrid-search", version: sha256(readFileSync(wrapper)) };
  } catch {
    return { name: "flow-hybrid-search", version: "unavailable-in-test-runner" };
  }
}
function tiangongToolIdentity(rootValue) {
  const root = requiredToolPath(rootValue, "tiangong_cli_root");
  try {
    const pkg = JSON.parse(readFileSync(path.join(root, "package.json"), "utf8"));
    return { name: pkg.name ?? "tiangong-cli", version: pkg.version ?? "unknown" };
  } catch {
    return { name: "tiangong-cli", version: "unknown" };
  }
}
function directReadPath(directory, receiptId, uuid) { return path.join(directory, `${receiptId}.${uuid}.direct.json`); }
function directReadMatches(left, right) {
  return [
    "uuid",
    "state_code",
    "base_name_en",
    "base_name_zh",
    "flow_type",
    "classifications",
    "property",
    "flow_property_uuid",
    "flow_property_state_code",
    "flow_property_name_en",
    "unit_group_uuid",
    "unit_group_name_en",
    "unit_group_name_zh",
    "unit_group_state_code",
    "reference_unit",
    "general_comment",
  ]
    .every((key) => stableJson(left?.[key]) === stableJson(right?.[key]));
}
function stableJson(value) {
  if (Array.isArray(value)) return `[${value.map(stableJson).join(",")}]`;
  if (value && typeof value === "object") return `{${Object.keys(value).sort().map((key) => `${JSON.stringify(key)}:${stableJson(value[key])}`).join(",")}}`;
  return JSON.stringify(value);
}
function receiptMissing(message) { return new GoalHarnessError("GOAL_HYBRID_SEARCH_RECEIPT_MISSING", message); }
