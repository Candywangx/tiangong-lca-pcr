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

import { GoalEventStore } from "./event-store.ts";
import { GoalHarnessError } from "./errors.ts";
import { readArtifact } from "./artifact-io.ts";
import { receiptRequiresSeal, sealReceipt, verifyReceiptSeal } from "./receipt-integrity.ts";
import { readPublicUuidAudit, collectEvidenceItems, evidenceFailureFindings } from "./evidence-audit.ts";
import { reviewTimeRemaining } from "./review-time.ts";
import { appendGoalCacheReceipt, listGoalCacheReceipts } from "./goal-cache.ts";

import type { BinaryLike } from "node:crypto";
import { field, record, records, text, strings, jsonRecord, goalTasks, errorCode } from "./domain.ts";
import type { UnknownRecord, GoalTask, GoalCheck, GoalFinding } from "./domain.ts";
import { evidenceReport } from "./evidence-types.ts";
import type { EvidenceReport, UuidClaim } from "./evidence-types.ts";
import { receiptDocument } from "./receipt-integrity.ts";
import type { ReceiptPaths, ReceiptDecision, ReceiptDocument, ReceiptTask } from "./receipt-integrity.ts";
import type { CollectedEvidence } from "./evidence-audit.ts";
export interface ReportReceiptAudit extends ReceiptDocument { receipt_id:string;candidate_decisions:ReceiptDecision[];scope?:string }
interface WindowOptions {phase?:string;deadline?:number;now?:()=>number;startAfter?:string|null|undefined}
export interface ReceiptEvidenceOptions extends WindowOptions {report:unknown;stateDir:string;task:ReceiptTask;eventStore?:GoalEventStore|null;collect?:boolean;onReceipt?:((receipt:ReportReceiptAudit)=>void)|null}
interface AuditOptions extends ReceiptEvidenceOptions {verifiedUuidReads?:UnknownRecord[];verifyAdoption?:boolean}
interface ToolConfig extends UnknownRecord {tiangong_cli_root?:string;flow_hybrid_search_root?:string;credentials_env_file?:string}
interface RunnerResult {status:number|null;stdout?:unknown;stderr?:unknown}
interface SearchOptions {stateDir:string;taskId:string;query:unknown;flowType?:unknown;limit?:number;cwd?:string;toolConfig?:ToolConfig;runner?:(request:{requestPath:string;toolConfig?:ToolConfig|undefined})=>RunnerResult|null;now?:()=>string;randomId?:()=>unknown}
interface DirectOptions {stateDir:string;taskId:string;receiptId:string;uuid:unknown;cwd?:string;tiangongCliRoot?:string|undefined;reader?:(request:{uuid:string;tiangongCliRoot?:string|undefined})=>unknown;now?:()=>string}
interface FinalizeOptions {stateDir:string;taskId:string;receiptId:string;decisionsPath:string;cwd?:string;now?:()=>string;faultInjector?:(phase:string)=>void}
interface NormalizedDecision extends ReceiptDecision {reason_code:string|null;reason:string;general_comment_review:string}
interface SearchReceipt extends UnknownRecord {candidate_uuids:string[];receipt_id:string}
function searchReceipt(value:unknown):SearchReceipt {const r=record(value);return {...r,receipt_id:text(r.receipt_id),candidate_uuids:strings(r.candidate_uuids ?? [])};}
const requiredItem=<T>(value:T|undefined):T=>{if(value===undefined)throw new TypeError("Missing receipt item");return value;};

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
}: SearchOptions) {
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
  let result:RunnerResult|null;
  try {
    result = cached
      ? { status: 0, stdout: readFileSync(text(cached.blob_path), "utf8"), stderr: "" }
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
      exit_code: result && Number.isInteger(result.status) ? result.status : null,
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
  let parsed:unknown;
  try {
    parsed = JSON.parse(stdout);
  } catch {
    throw new GoalHarnessError("GOAL_HYBRID_SEARCH_RESULT_INVALID", "Authenticated hybrid search did not return JSON.", { receipt_id: receiptId });
  }
  assertHybridResult(parsed, receiptId);
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
}: DirectOptions) {
  const task = requireBoundTask({ stateDir, taskId, cwd });
  const paths = receiptPaths(stateDir, requireTask(task), receiptId);
  const normalizedUuid = String(uuid ?? "").toLowerCase();
  if (!existsSync(paths.search)) throw receiptMissing(`Receipt ${receiptId} does not exist.`);
  const receipt = searchReceipt(JSON.parse(readReceiptArtifact(paths.search,task,stateDir).toString("utf8")));
  if (!(receipt.candidate_uuids ?? []).includes(normalizedUuid)) {
    throw new GoalHarnessError("GOAL_HYBRID_SEARCH_RECEIPT_MISMATCH", `UUID ${uuid} is not a candidate in receipt ${receiptId}.`);
  }
  const directPath = directReadPath(paths.directory, receiptId, normalizedUuid);
  if (existsSync(directPath)) return jsonRecord(readReceiptArtifact(directPath,task,stateDir).toString("utf8"));
  const actual = record(reader({ uuid: normalizedUuid, tiangongCliRoot }));
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

export function finalizeHybridSearchReceipt({ stateDir, taskId, receiptId, decisionsPath, cwd = process.cwd(), now = () => new Date().toISOString(), faultInjector = () => {} }:FinalizeOptions) {
  const task = requireBoundTask({ stateDir, taskId, cwd });
  const paths = receiptPaths(stateDir, requireTask(task), receiptId);
  if (!existsSync(paths.search)) throw new GoalHarnessError("GOAL_HYBRID_SEARCH_RECEIPT_MISSING", `Hybrid-search receipt does not exist: ${receiptId}`);
  if (existsSync(paths.decisions) && !receiptRequiresSeal(task)) {
    const existing = receiptDocument(JSON.parse(readFileSync(paths.decisions, "utf8")));
    const requested:unknown = JSON.parse(readReceiptArtifact(decisionsPath,task).toString("utf8"));
    validateCandidateDecisions(receiptCandidateUuids(paths.search), requested);
    if (stableJson(existing.candidate_decisions.map(({ direct_read: _directRead, ...decision }) => decision)) !== stableJson(decisionInputs(requested).map(normalizeDecision))) {
      throw new GoalHarnessError("GOAL_HYBRID_SEARCH_DECISIONS_CONFLICT", `Receipt ${receiptId} was already finalized with different decisions.`);
    }
    return existing;
  }
  const receipt = searchReceipt(JSON.parse(readReceiptArtifact(paths.search,task,stateDir).toString("utf8")));
  if (receipt.status !== "succeeded" || receipt.authenticated !== true) {
    throw new GoalHarnessError("GOAL_HYBRID_SEARCH_RECEIPT_INVALID", `Cannot finalize unsuccessful receipt ${receiptId}.`);
  }
  const decisions:unknown = JSON.parse(readReceiptArtifact(decisionsPath,task).toString("utf8"));
  if (!Array.isArray(decisions)) throw new GoalHarnessError("GOAL_HYBRID_SEARCH_DECISIONS_INVALID", "Receipt decisions must be a JSON array.");
  validateCandidateDecisions(receipt.candidate_uuids, decisions);
  const normalized = decisionInputs(decisions).map(normalizeDecision);
  const candidateDecisions = normalized.map((decision) => {
    const directPath = directReadPath(paths.directory, receiptId, decision.uuid);
    if (!existsSync(directPath)) {
      throw new GoalHarnessError("GOAL_UUID_DIRECT_READ_RECEIPT_MISSING", `Candidate ${decision.uuid} has no state_code=100 direct-read receipt.`);
    }
    const directRead = jsonRecord(readReceiptArtifact(directPath,task,stateDir).toString("utf8"));
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
  if (receiptRequiresSeal(task)) return sealReceipt({stateDir,task,receiptId,paths,document,requested:normalized,faultInjector});
  writeExclusive(paths.decisions, `${JSON.stringify(document, null, 2)}\n`);
  return document;
}

export function loadReportReceiptEvidence(options:ReceiptEvidenceOptions & {collect:true}):CollectedEvidence<ReportReceiptAudit>;
export function loadReportReceiptEvidence(options:ReceiptEvidenceOptions & {collect?:false}):ReportReceiptAudit[];
export function loadReportReceiptEvidence({ report:reportInput, stateDir, task, eventStore = null,
  collect = false, phase = "harvest", deadline = Infinity, now = Date.now, startAfter = null, onReceipt = null }:ReceiptEvidenceOptions):ReportReceiptAudit[]|CollectedEvidence<ReportReceiptAudit> {
  const report=evidenceReport(reportInput);
  if (eventStore && path.resolve(eventStore.stateDir) !== path.resolve(stateDir))
    throw new GoalHarnessError("GOAL_RECEIPT_INTEGRITY_MISMATCH", "Receipt query index belongs to another Goal directory.");
  eventStore ??= existsSync(path.join(stateDir, "initial-state.json")) ? new GoalEventStore({ stateDir }) : null;
  if (collect) {
    const ids = [...new Set([...(report.hybrid_search_receipt_ids ?? []),
      ...(report.uuid_audits ?? []).map(a => a.hybrid_search_receipt_id),
      ...(report.rejected_uuid_candidates ?? []).map(a => a.receipt_id),
      ...(report.inventory?.unresolved ?? []).flatMap(a => a.hybrid_search_receipt_ids ?? [])].filter((id):id is string=>typeof id === "string" && Boolean(id)))];
    const missing = [
      ...(report.uuid_audits ?? []).filter(a => !a.hybrid_search_receipt_id).map(a => ({ missing: `UUID ${a.uuid} has no receipt.`, id: `missing:${a.uuid}` })),
      ...(report.rejected_uuid_candidates ?? []).filter(a => !a.receipt_id).map(a => ({ missing: `Rejected UUID ${a.uuid} has no receipt.`, id: `missing:${a.uuid}` })),
      ...(report.inventory?.unresolved ?? []).filter(a => ["no_exact_candidate", "manual_review_required"].includes(String(a.reason_code)) && !(a.hybrid_search_receipt_ids?.length)).map(a => ({ missing: `Unresolved row ${a.row_id} has no receipt.`, id: `missing:${a.row_id}` })),
    ];
    return collectEvidenceItems({ items: [...ids.map(id => ({ id, missing:undefined })), ...missing], subject: item => item.id,
      checkId: "receipt_integrity", phase, deadline, now, startAfter,
      run: item => {
        if (item.missing) throw receiptMissing(item.missing);
        const findings:GoalFinding[] = [];
        if (!(report.hybrid_search_receipt_ids ?? []).includes(item.id)) {
          findings.push(...evidenceFailureFindings(receiptMissing(`Referenced receipt ${item.id} is absent from hybrid_search_receipt_ids.`), { phase, subjectId: item.id }));
        }
        let audit:ReportReceiptAudit|undefined;
        try { audit = auditReportReceipt({ report, stateDir, task, receiptId: item.id, eventStore }); }
        catch (error) { findings.push(...evidenceFailureFindings(error, { phase, subjectId: item.id })); }
        if (findings.length) throw new GoalHarnessError(requiredItem(findings[0]).code, `Receipt ${item.id} has ${findings.length} independent finding(s).`, { findings });
        reviewTimeRemaining(deadline, { now, phase, subjectId: item.id });
        if(!audit) throw new TypeError("Missing receipt audit");
        onReceipt?.(audit);
        return [audit];
      } });
  }
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
    if (["no_exact_candidate", "manual_review_required"].includes(String(unresolved.reason_code)) && receiptIds.length === 0) {
      throw receiptMissing(`Unresolved row ${unresolved.row_id} (${unresolved.reason_code}) has no hybrid-search receipt.`);
    }
    for (const receiptId of receiptIds) referenced.add(receiptId);
  }
  if (referenced.size > 0 && ids.length === 0) throw receiptMissing("Author report does not list its hybrid-search receipt ids.");
  const missingMemberships = [...referenced].filter((id) => !ids.includes(id));
  if (missingMemberships.length > 0) {
    const findings = missingMemberships.map((receiptId) => ({
      code: "GOAL_HYBRID_SEARCH_RECEIPT_MISSING",
      message: `Referenced receipt ${receiptId} is absent from hybrid_search_receipt_ids.`,
      receipt_id: receiptId,
      remediation: `Add ${receiptId} to hybrid_search_receipt_ids without altering the immutable receipt.`,
    }));
    throw new GoalHarnessError(
      "GOAL_HYBRID_SEARCH_RECEIPT_MISSING",
      `${missingMemberships.length} referenced receipt id(s) are absent from hybrid_search_receipt_ids: ${missingMemberships.join(", ")}.`,
      { findings },
    );
  }
  return ids.map(receiptId => {
    reviewTimeRemaining(deadline, {now,phase,subjectId:receiptId});
    const result = auditReportReceipt({ report, stateDir, task, receiptId, eventStore });
    reviewTimeRemaining(deadline, {now,phase,subjectId:receiptId});
    return result;
  });
}

function auditReportReceipt({ report, stateDir, task, receiptId, eventStore }: {report:EvidenceReport;stateDir:string;task:ReceiptTask;receiptId:string;eventStore:GoalEventStore|null}):ReportReceiptAudit {
  const taskBoundReceiptIds = new Set((report.inventory?.unresolved ?? []).flatMap(entry => entry.hybrid_search_receipt_ids ?? []));
    try {
      return auditOneReceipt({ stateDir, task, receiptId, eventStore });
    } catch (error) {
      const adopted = (report.uuid_audits ?? []).filter(entry => entry.hybrid_search_receipt_id === receiptId);
      if (errorCode(error) !== "GOAL_HYBRID_SEARCH_RECEIPT_MISSING") throw error;
      const paths = findCompleteReceiptPaths({ stateDir, receiptId });
      try {
        const audited = auditOneReceipt({ stateDir, task, receiptId, paths, eventStore });
        return { ...audited, scope: "task_retry_reuse", source_task_id: audited.task_id };
      } catch (retryError) {
        if (errorCode(retryError) !== "GOAL_HYBRID_SEARCH_RECEIPT_MISMATCH") throw retryError;
        if (taskBoundReceiptIds.has(receiptId) || adopted.length === 0) throw error;
      }
      const reusable = adopted.every((entry) => isReusableCommonUuidAudit({
        stateDir, eventStore,
        entry: { uuid: entry.uuid, hybrid_search_receipt_id: receiptId },
      }));
      if (!reusable) throw error;
      const audited = auditOneReceipt({ stateDir, task, receiptId, paths, allowGoalCacheReuse: true, eventStore });
      return { ...audited, scope: "goal_cache_reuse", source_task_id: audited.task_id };
    }
}

export function auditHybridSearchReceipts(options:AuditOptions & {collect:true}):CollectedEvidence<ReportReceiptAudit>;
export function auditHybridSearchReceipts(options:AuditOptions & {collect?:false}):ReportReceiptAudit[];
export function auditHybridSearchReceipts({ report:reportInput, stateDir, task, eventStore = null, verifiedUuidReads = [],
  collect = false, verifyAdoption = true, phase = "harvest", deadline = Infinity, now = Date.now, startAfter = null }:AuditOptions):ReportReceiptAudit[]|CollectedEvidence<ReportReceiptAudit> {
  const report=evidenceReport(reportInput);
  if (collect) return collectHybridReceiptAudit({ report, stateDir, task, eventStore, verifiedUuidReads, verifyAdoption, phase, deadline, now, startAfter });
  const audits = loadReportReceiptEvidence({report,stateDir,task,eventStore});
  const byId = new Map(audits.map((entry) => [entry.receipt_id, entry]));
  for (const claimed of report.uuid_audits ?? []) {
    const receipt = byId.get(claimed.hybrid_search_receipt_id ?? "");
    const decision = receipt?.candidate_decisions.find((entry) => entry.uuid === claimed.uuid.toLowerCase());
    if (decision?.decision !== "adopted") throw receiptMissing(`UUID ${claimed.uuid} is not adopted by receipt ${claimed.hybrid_search_receipt_id}.`);
    const verified = verifiedUuidReads.find((entry) => entry.uuid === claimed.uuid.toLowerCase());
    if (!verified || !directReadMatches(decision.direct_read, verified)) {
      throw new GoalHarnessError("GOAL_HYBRID_SEARCH_RECEIPT_MISMATCH", `Receipt direct read for ${claimed.uuid} disagrees with the Harness public read.`);
    }
  }
  const rejectionFindings = [];
  for (const claimed of report.rejected_uuid_candidates ?? []) {
    const receipt = byId.get(claimed.receipt_id ?? "");
    const decision = receipt?.candidate_decisions.find((entry) => entry.uuid === claimed.uuid.toLowerCase());
    if (decision?.decision !== "rejected" || decision.reason_code !== claimed.reason_code || decision.reason !== claimed.reason) {
      const message = `Rejected candidate ${claimed.uuid} disagrees with receipt ${claimed.receipt_id}.`;
      rejectionFindings.push({
        code: "GOAL_HYBRID_SEARCH_RECEIPT_MISMATCH",
        message,
        details: { phase: "receipt_audit", origin: "harness_review", failure_kind: "author_claim", subject_id: claimed.uuid },
        receipt_id: claimed.receipt_id,
        uuid: claimed.uuid,
        expected: decision
          ? { decision: decision.decision, reason_code: decision.reason_code, reason: decision.reason }
          : null,
        claimed: { decision: "rejected", reason_code: claimed.reason_code, reason: claimed.reason },
        remediation: "Copy the finalized receipt reason_code and reason verbatim into rejected_uuid_candidates.",
      });
    }
  }
  if (rejectionFindings.length > 0) {
    throw new GoalHarnessError(
      "GOAL_HYBRID_SEARCH_RECEIPT_MISMATCH",
      `${rejectionFindings.length} rejected candidate report entr${rejectionFindings.length === 1 ? "y" : "ies"} disagree with finalized receipts.`,
      { findings: rejectionFindings },
    );
  }
  return audits;
}

export function isReusableCommonUuidAudit({ stateDir, entry, eventStore = null }: {stateDir:string;entry:unknown;eventStore?:GoalEventStore|null}) {
  try {
    const receiptId = String(field(entry,"hybrid_search_receipt_id") ?? "");
    const uuid = String(field(entry,"uuid") ?? "").toLowerCase();
    if (!UUID_PATTERN.test(uuid) || !receiptId) return false;
    const attestations = listGoalCacheReceipts({ stateDir, namespace: "verified_common_uuids" }).filter((receipt) =>
      String(field(receipt.value,"uuid") ?? "").toLowerCase() === uuid
      && field(receipt.value,"hybrid_search_receipt_id") === receiptId
      && receipt.source_fingerprint === field(receipt.value,"response_sha256"),
    );
    if (attestations.length === 0) return false;
    const paths = findCompleteReceiptPaths({ stateDir, receiptId });
    const audited = auditOneReceipt({ stateDir, task: null, receiptId, paths, allowGoalCacheReuse: true, eventStore });
    const adopted = audited.candidate_decisions.find((decision) => decision.uuid === uuid && decision.decision === "adopted");
    return Boolean(adopted && attestations.some((receipt) => directReadMatches(adopted.direct_read, receipt.value)));
  } catch {
    return false;
  }
}

function auditOneReceipt({ stateDir, task, receiptId, paths = null, allowGoalCacheReuse = false, eventStore = null }: {stateDir:string;task:ReceiptTask|null;receiptId:string;paths?:ReceiptPaths|null;allowGoalCacheReuse?:boolean;eventStore?:GoalEventStore|null}):ReportReceiptAudit {
  const resolvedPaths = paths ?? receiptPaths(stateDir, requireTask(task), receiptId);
  if (!existsSync(resolvedPaths.search) || !existsSync(resolvedPaths.result) || !existsSync(resolvedPaths.decisions)) {
    throw receiptMissing(`Receipt ${receiptId} is incomplete.`);
  }
  const verified = receiptRequiresSeal(task) ? verifyReceiptSeal({stateDir,task,receiptId,paths:{...resolvedPaths,allowGoalCacheReuse}, ...(eventStore ? {eventStore} : {})}) : null;
  const {snapshots, ...integrity} = verified ?? {};
  const auditedBytes = (file:string) => snapshots ? requiredItem(snapshots[path.basename(file)]) : readReceiptArtifact(file,task,stateDir);
  const receipt = searchReceipt(JSON.parse(auditedBytes(resolvedPaths.search).toString("utf8")));
  const raw = auditedBytes(resolvedPaths.result).toString("utf8");
  const decisions = receiptDocument(JSON.parse(auditedBytes(resolvedPaths.decisions).toString("utf8")));
  const currentGoalId = (eventStore ? eventStore.rebuild() : readState(stateDir)).goal_id;
  const bindingMatches = allowGoalCacheReuse
    ? receipt.goal_id === currentGoalId
    : receipt.task_id === field(task,"id") && receipt.cpc_code === field(task,"cpc_code");
  if (!bindingMatches || receipt.status !== "succeeded" || receipt.authenticated !== true) {
    throw new GoalHarnessError("GOAL_HYBRID_SEARCH_RECEIPT_MISMATCH", `Receipt ${receiptId} is not bound to this task.`, { phase:"receipt_audit", origin:"receipt_verifier", failure_kind:"task_binding", subject_id:receiptId });
  }
  if (receipt.result_sha256 !== sha256(raw) || receipt.result_byte_length !== Buffer.byteLength(raw)) {
    throw new GoalHarnessError("GOAL_HYBRID_SEARCH_RECEIPT_HASH_MISMATCH", `Receipt ${receiptId} result bytes changed after capture.`);
  }
  let parsed:unknown;
  try { parsed = JSON.parse(raw); } catch { throw new GoalHarnessError("GOAL_HYBRID_SEARCH_RECEIPT_HASH_MISMATCH", `Receipt ${receiptId} result is not JSON.`); }
  assertHybridResult(parsed, receiptId);
  const candidates = collectCandidateUuids(parsed);
  if (!sameStrings(candidates, receipt.candidate_uuids ?? [])) {
    throw new GoalHarnessError("GOAL_HYBRID_SEARCH_RECEIPT_MISMATCH", `Receipt ${receiptId} candidate UUID projection is stale.`, { phase:"receipt_audit", origin:"receipt_verifier", failure_kind:"receipt_integrity", subject_id:receiptId });
  }
  validateCandidateDecisions(candidates, decisions.candidate_decisions ?? []);
  for (const decision of decisions.candidate_decisions ?? []) {
    const directPath = directReadPath(resolvedPaths.directory, receiptId, decision.uuid);
    if (!existsSync(directPath)) throw receiptMissing(`Receipt ${receiptId} direct read for ${decision.uuid} is missing.`);
    const direct = jsonRecord(auditedBytes(directPath).toString("utf8"));
    if (stableJson(direct) !== stableJson(decision.direct_read)) {
      throw new GoalHarnessError("GOAL_HYBRID_SEARCH_RECEIPT_MISMATCH", `Receipt ${receiptId} direct read for ${decision.uuid} changed.`, { phase:"receipt_audit", origin:"receipt_verifier", failure_kind:"receipt_integrity", subject_id:decision.uuid });
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
    ...(verified ? {integrity} : {}),
  };
}

function findCompleteReceiptPaths({ stateDir, receiptId }: {stateDir:string;receiptId:string}):ReceiptPaths {
  if (!/^[a-z0-9][a-z0-9._-]{0,127}$/iu.test(receiptId)) throw receiptMissing("Receipt id is unsafe.");
  const root = path.join(stateDir, "uuid-search-receipts");
  if (!existsSync(root)) throw receiptMissing(`Receipt ${receiptId} is incomplete.`);
  const matches:ReceiptPaths[] = [];
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
  return requiredItem(matches[0]);
}

function defaultHybridSearchRunner({ requestPath, toolConfig }: {requestPath:string;toolConfig?:ToolConfig|undefined}):RunnerResult {
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
    timeout: 30_000, killSignal: "SIGKILL",
    maxBuffer: 64 * 1024 * 1024,
  });
}

function requireBoundTask({ stateDir, taskId, cwd }: {stateDir:string;taskId:string;cwd:string}):GoalTask {
  const state = readState(stateDir);
  const task = (state.tasks ?? []).find((entry) => entry.id === taskId);
  if (!task) throw new GoalHarnessError("GOAL_TASK_NOT_FOUND", `Goal task does not exist: ${taskId}`);
  if (!task.worktree_path || realpathSync(cwd) !== realpathSync(task.worktree_path)) {
    throw new GoalHarnessError("GOAL_HYBRID_SEARCH_WORKTREE_MISMATCH", "UUID search must run from the visible task's bound worktree.", { task_id: task.id });
  }
  return task;
}

function readState(stateDir:string):UnknownRecord & {tasks:GoalTask[];goal_id?:string} {
  if (existsSync(path.join(stateDir,"initial-state.json"))) return new GoalEventStore({stateDir}).rebuild();
  const legacy=jsonRecord(readFileSync(path.join(stateDir, "state.json"), "utf8"));
  if(legacy.goal_id !== undefined && typeof legacy.goal_id !== "string") throw new TypeError("Invalid legacy Goal identity");
  return {...legacy,tasks:goalTasks(legacy.tasks ?? [])};
}

function receiptDirectory(stateDir:string, task:ReceiptTask) {
  return path.join(stateDir, "uuid-search-receipts", safeSegment(task.id), `attempt-${task.attempt ?? 0}`);
}

function receiptPaths(stateDir:string, task:ReceiptTask, receiptId:string):ReceiptPaths {
  if (!/^[a-z0-9][a-z0-9._-]{0,127}$/iu.test(String(receiptId))) throw receiptMissing("Receipt id is unsafe.");
  const dir = receiptDirectory(stateDir, task);
  return {
    directory: dir,
    search: path.join(dir, `${receiptId}.search.json`),
    result: path.join(dir, `${receiptId}.result.json`),
    decisions: path.join(dir, `${receiptId}.decisions.json`),
  };
}

function validateCandidateDecisions(candidateUuids:string[], decisions:unknown) {
  const normalized = decisionInputs(decisions).map(normalizeDecision);
  const ids = normalized.map((entry) => entry.uuid);
  if (!sameStrings([...ids].sort(), [...candidateUuids].sort()) || new Set(ids).size !== ids.length) {
    throw new GoalHarnessError("GOAL_HYBRID_SEARCH_DECISIONS_INVALID", "Candidate decisions must cover every receipt UUID exactly once.");
  }
}

function normalizeDecision(entryInput:unknown):NormalizedDecision {
  const entry=record(entryInput);
  const uuid = String(field(entry,"uuid") ?? "").toLowerCase();
  const decision = entry.decision;
  const reasonCode = entry.reason_code ?? null;
  const reason = String(entry.reason ?? "").trim();
  const generalCommentReview = String(entry.general_comment_review ?? "").trim();
  if (!UUID_PATTERN.test(uuid) || (decision !== "adopted" && decision !== "rejected") || !reason || !generalCommentReview) {
    throw new GoalHarnessError("GOAL_HYBRID_SEARCH_DECISIONS_INVALID", "Each candidate decision needs a valid UUID, decision, and explanation.");
  }
  if (decision === "adopted" && reasonCode !== null) {
    throw new GoalHarnessError("GOAL_HYBRID_SEARCH_DECISIONS_INVALID", "An adopted candidate must use reason_code null.");
  }
  if (decision === "rejected" && (typeof reasonCode !== "string" || !REJECTION_CODES.has(reasonCode))) {
    throw new GoalHarnessError("GOAL_HYBRID_SEARCH_DECISIONS_INVALID", `Unsupported candidate rejection reason: ${reasonCode ?? "<missing>"}`);
  }
  if (reasonCode !== null && typeof reasonCode !== "string") throw new TypeError("Invalid candidate reason");
  return { uuid, decision, reason_code: reasonCode, reason, general_comment_review: generalCommentReview };
}

function collectCandidates(value:unknown) {
  const rows = Array.isArray(field(value,"data")) ? records(field(value,"data")) : Array.isArray(value) ? value : [];
  return rows.flatMap((row, index) => {
    const uuid = [field(row,"id"),field(row,"uuid"),field(row,"flow_id")].find((entry):entry is string => typeof entry === "string" && UUID_PATTERN.test(entry));
    if (!uuid) return [];
    return [{
      uuid: uuid.toLowerCase(),
      rank: index + 1,
      match: Object.fromEntries(["score", "similarity", "distance", "base_name", "name"].filter((key) => field(row,key) !== undefined).map((key) => [key, field(row,key)])),
    }];
  });
}

function collectCandidateUuids(value:unknown) {
  const result:string[] = [];
  const seen = new Set<string>();
  const rows = Array.isArray(field(value,"data")) ? records(field(value,"data")) : Array.isArray(value) ? value : [];
  for (const row of rows) {
    const candidate = [field(row,"id"),field(row,"uuid"),field(row,"flow_id")].find((entry):entry is string => typeof entry === "string" && UUID_PATTERN.test(entry));
    if (!candidate) continue;
    const uuid = candidate.toLowerCase();
    if (!seen.has(uuid)) { seen.add(uuid); result.push(uuid); }
  }
  return result;
}

function writeExclusive(filePath:string, content:string) {
  writeFileSync(filePath, content, { flag: "wx", mode: 0o600 });
}

function receiptCandidateUuids(searchPath:string) {
  return searchReceipt(JSON.parse(readFileSync(searchPath, "utf8"))).candidate_uuids;
}

function normalizeFlowType(value:unknown) {
  if (value === null || value === undefined || value === "") return null;
  const normalized = String(value).toLowerCase().replace(/\s+flow$/u, "").trim();
  if (!["product", "waste", "elementary"].includes(normalized)) {
    throw new GoalHarnessError("GOAL_HYBRID_SEARCH_QUERY_INVALID", `Unsupported flow type: ${value}`);
  }
  return normalized;
}

function capitalize(value:string) { return `${(value[0] ?? "").toUpperCase()}${value.slice(1)}`; }
function safeSegment(value:unknown) { return String(value).replace(/[^a-z0-9._-]+/giu, "-").slice(0, 128); }
function sha256(value:BinaryLike|undefined) { if(value===undefined)throw new TypeError("Expected receipt bytes");return `sha256:${createHash("sha256").update(value).digest("hex")}`; }
function sameStrings(left:readonly string[], right:readonly string[]) { return left.length === right.length && left.every((entry, index) => entry === right[index]); }
function requiredToolPath(value:unknown, name:string) {
  if (!value) throw new GoalHarnessError("GOAL_UUID_INFRASTRUCTURE_UNAVAILABLE", `tools.${name} is required for authenticated UUID search.`);
  return path.resolve(text(value));
}
function hybridToolIdentity(toolConfig:ToolConfig|undefined) {
  const root = requiredToolPath(toolConfig?.flow_hybrid_search_root, "flow_hybrid_search_root");
  const wrapper = path.join(root, "scripts", "run-flow-hybrid-search.mjs");
  try {
    return { name: "flow-hybrid-search", version: sha256(readFileSync(wrapper)) };
  } catch {
    return { name: "flow-hybrid-search", version: "unavailable-in-test-runner" };
  }
}
function tiangongToolIdentity(rootValue:unknown) {
  const root = requiredToolPath(rootValue, "tiangong_cli_root");
  try {
    const pkg = jsonRecord(readFileSync(path.join(root, "package.json"), "utf8"));
    return { name: pkg.name ?? "tiangong-cli", version: pkg.version ?? "unknown" };
  } catch {
    return { name: "tiangong-cli", version: "unknown" };
  }
}
function directReadPath(directory:string, receiptId:string, uuid:string) { return path.join(directory, `${receiptId}.${uuid}.direct.json`); }
function directReadMatches(left:unknown, right:unknown) {
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
    .every((key) => stableJson(field(left,key)) === stableJson(field(right,key)));
}
function stableJson(value:unknown):string|undefined {
  if (Array.isArray(value)) return `[${value.map(stableJson).join(",")}]`;
  if (value && typeof value === "object") return `{${Object.keys(value).sort().map((key) => `${JSON.stringify(key)}:${stableJson(field(value,key))}`).join(",")}}`;
  return JSON.stringify(value);
}
function receiptMissing(message:string) { return new GoalHarnessError("GOAL_HYBRID_SEARCH_RECEIPT_MISSING", message); }

function readReceiptArtifact(file:string,task:unknown,root:string|null=null) { return receiptRequiresSeal(task) ? readArtifact(file,{root,maxBytes:64*1024*1024}) : readFileSync(file); }


function collectHybridReceiptAudit({ report, stateDir, task, eventStore, verifiedUuidReads, verifyAdoption, phase, deadline, now, startAfter }: {report:EvidenceReport;stateDir:string;task:ReceiptTask;eventStore:GoalEventStore|null;verifiedUuidReads:UnknownRecord[];verifyAdoption:boolean;phase:string;deadline:number;now:()=>number;startAfter:string|null}):CollectedEvidence<ReportReceiptAudit> {
  const extraChecks:GoalCheck[] = [], findings:GoalFinding[] = [], receiptOverrides = new Map<string,GoalCheck>(), seenAdoptions = new Set<UuidClaim>();
  const claims = report.uuid_audits ?? [];
  const adoptionId = (claimed:UuidClaim) => `${claimed.hybrid_search_receipt_id}:${String(claimed.uuid).toLowerCase()}`;
  const receiptIds = [...new Set([...(report.hybrid_search_receipt_ids ?? []), ...claims.map(a => a.hybrid_search_receipt_id),
    ...(report.rejected_uuid_candidates ?? []).map(a => a.receipt_id), ...(report.inventory?.unresolved ?? []).flatMap(a => a.hybrid_search_receipt_ids ?? [])].filter((id):id is string=>typeof id === "string" && Boolean(id)))];
  const resumedClaim = claims.find(claimed => adoptionId(claimed) === startAfter);
  const resumedIndex = resumedClaim ? receiptIds.indexOf(resumedClaim.hybrid_search_receipt_id ?? "") : -1;
  const receiptStartAfter = resumedIndex >= 0 ? receiptIds[(resumedIndex + receiptIds.length - 1) % receiptIds.length] : startAfter;
  let lastAdoption = startAfter, nextAdoption:string|null = null;
  const recordFailure = (check:GoalCheck, error:unknown) => {
    const found = evidenceFailureFindings(error, { phase, subjectId: check.subject_id });
    const exhausted = found.some(f => f.details.failure_kind === "execution_window");
    check.status = exhausted ? "skipped" : "failed";
    if (exhausted) check.reason = "execution_window";
    check.findings = [...(check.findings ?? []), ...found]; findings.push(...found);
  };
  const local = loadReportReceiptEvidence({ report, stateDir, task, eventStore, collect: true, phase, deadline, now, startAfter: receiptStartAfter ?? null,
    onReceipt(receipt) {
      const localCheck:GoalCheck = { phase, check_id: "receipt_integrity", subject_id: receipt.receipt_id, applicable: true, status: "passed" };
      for (const claimed of (report.rejected_uuid_candidates ?? []).filter(a => a.receipt_id === receipt.receipt_id)) {
        try {
          reviewTimeRemaining(deadline, { now, phase, subjectId: receipt.receipt_id });
          const decision = receipt.candidate_decisions.find(entry => entry.uuid === claimed.uuid.toLowerCase());
          if (decision?.decision !== "rejected" || decision.reason_code !== claimed.reason_code || decision.reason !== claimed.reason) {
            throw new GoalHarnessError("GOAL_HYBRID_SEARCH_RECEIPT_MISMATCH", `Rejected candidate ${claimed.uuid} disagrees with receipt ${claimed.receipt_id}.`,
              { origin: "harness_review", failure_kind: "author_claim", retryable: false, receipt_id: claimed.receipt_id, uuid: claimed.uuid,
                expected: decision ? { decision: decision.decision, reason_code: decision.reason_code, reason: decision.reason } : null,
                claimed: { decision: "rejected", reason_code: claimed.reason_code, reason: claimed.reason } });
          }
        } catch (error) { recordFailure(localCheck, error); }
      }
      if (localCheck.status !== "passed") receiptOverrides.set(receipt.receipt_id, localCheck);
      const receiptClaims = claims.filter(a => a.hybrid_search_receipt_id === receipt.receipt_id);
      const after = receiptClaims.findIndex(a => adoptionId(a) === startAfter);
      const ordered = after >= 0 ? [...receiptClaims.slice(after + 1), ...receiptClaims.slice(0, after + 1)] : receiptClaims;
      for (const claimed of ordered) {
        const subjectId = adoptionId(claimed);
        const check:GoalCheck = { phase, check_id: "receipt_adoption", subject_id: subjectId, applicable: true, status: "passed" };
        seenAdoptions.add(claimed); extraChecks.push(check);
        try {
          reviewTimeRemaining(deadline, { now, phase, subjectId });
          lastAdoption = subjectId;
          const decision = receipt.candidate_decisions.find(entry => entry.uuid === claimed.uuid.toLowerCase());
          if (decision?.decision !== "adopted") throw receiptMissing(`UUID ${claimed.uuid} is not adopted by receipt ${claimed.hybrid_search_receipt_id}.`);
          if (!verifyAdoption) { check.status = "skipped"; check.applicable = false; check.reason = "online_check_not_requested"; continue; }
          const verified = verifiedUuidReads.find(entry => entry.uuid === claimed.uuid.toLowerCase());
          if (!verified) {
            check.status = "skipped"; check.reason = "dependency_unavailable";
            check.depends_on = [{ phase, check_id: "uuid_public_read", subject_id: claimed.uuid.toLowerCase() }];
            continue;
          }
          if (verified.valid === false || !directReadMatches(decision.direct_read, verified)) {
            throw new GoalHarnessError("GOAL_HYBRID_SEARCH_RECEIPT_MISMATCH", `Receipt direct read for ${claimed.uuid} disagrees with the Harness public read.`,
              { origin: "receipt_verifier", failure_kind: "identity_change", retryable: false });
          }
        } catch (error) {
          recordFailure(check, error);
          if (check.reason === "execution_window") nextAdoption ??= subjectId;
        }
      }
    } });
  const checks = local.checks.map(check => receiptOverrides.get(check.subject_id ?? "") ?? check);
  for (const claimed of claims.filter(claim => !seenAdoptions.has(claim))) {
    const dependency = checks.find(check => check.subject_id === claimed.hybrid_search_receipt_id);
    extraChecks.push({ phase, check_id: "receipt_adoption", subject_id: adoptionId(claimed), applicable: true, status: "skipped",
      reason: dependency?.reason === "execution_window" ? "execution_window" : "dependency_unavailable",
      depends_on: [{ phase, check_id: "receipt_integrity", subject_id: claimed.hybrid_search_receipt_id ?? "" }] });
  }
  checks.push(...extraChecks); findings.push(...local.findings);
  return { valid: findings.length === 0 && checks.every(check => !check.applicable || check.status === "passed"), checks, findings,
    results: local.results.filter(receipt => !receiptOverrides.has(receipt.receipt_id)),
    progress: nextAdoption ? { ...local.progress, next_subject: nextAdoption, start_after: lastAdoption } : local.progress };
}


function assertHybridResult(result:unknown, receiptId:string) {
  if (field(result,"valid") === false || field(result,"ok") === false || !(Array.isArray(result) || Array.isArray(field(result,"data")))) {
    throw new GoalHarnessError("GOAL_HYBRID_SEARCH_RESULT_INVALID", "Hybrid search did not return a successful candidate array.",
      { origin: "tool_transport", failure_kind: "unknown", retryable: false, receipt_id: receiptId });
  }
}

function decisionInputs(value:unknown):unknown[] {if(!Array.isArray(value))throw new GoalHarnessError("GOAL_HYBRID_SEARCH_DECISIONS_INVALID","Receipt decisions must be a JSON array.");return value;}
function requireTask(task:ReceiptTask|null):ReceiptTask {if(!task)throw receiptMissing("Receipt task binding is missing.");return task;}
