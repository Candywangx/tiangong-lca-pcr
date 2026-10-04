import { spawnSync } from "node:child_process";
import { createHash } from "node:crypto";
import { closeSync, constants, fstatSync, openSync, readFileSync } from "node:fs";
import path from "node:path";

import { GoalHarnessError, classifyFinding } from "./errors.ts";
import { appendGoalCacheReceipt, listGoalCacheReceipts } from "./goal-cache.ts";
import { reviewTimeRemaining } from "./review-time.ts";

import type { SpawnSyncReturns } from "node:child_process";
import { field, record, records, text, errorCode, errorMessage, isRecord } from "./domain.ts";
import type { UnknownRecord, GoalFinding, GoalCheck, EvidenceEnvelope } from "./domain.ts";
import { evidenceReport, nested } from "./evidence-types.ts";
import type { SourceClaim } from "./evidence-types.ts";
export interface AuditWindow {phase?:string;deadline?:number;now?:()=>number;startAfter?:string|null|undefined}
interface RunnerRequest extends AuditWindow {uuid:string;tiangongCliRoot?:string|undefined;timeoutMs?:number}
interface SupportRequest extends AuditWindow {flowPropertyId:string;flowPropertyVersion:string;tiangongCliRoot?:string|undefined;timeoutMs?:number}
export interface UuidReadOptions extends AuditWindow {uuid:string;tiangongCliRoot?:string|undefined;runner?:(r:RunnerRequest)=>unknown;supportRunner?:(r:SupportRequest)=>unknown;supportCache?:Map<string,unknown>;retryAttempts?:number;retryDelayMs?:number;sleeper?:(ms:number)=>void}
export interface PublicUuidAudit extends UnknownRecord {uuid:string;response_sha256:string;classifications:{id:string;label:string}[];flow_type:string;unit_group_uuid:string;unit_group_name_en:string;reference_unit:string}
interface ReportUuidOptions extends Omit<UuidReadOptions,"uuid"> {report:unknown;collect?:boolean}
interface SourceProgress extends UnknownRecord {start_after?:string|null;completed?:UnknownRecord[]}
export interface SourceOptions extends AuditWindow {report:unknown;stateDir?:string|null;fetchImpl?:(locator:string,options:RequestInit)=>unknown;timeoutMs?:number;collect?:boolean;priorProgress?:SourceProgress|null}
interface Diagnostics extends UnknownRecord { started_at:string;ended_at:string|null;elapsed_ms:number|null;remaining_budget_ms_at_entry:number|null;remaining_budget_ms_at_exit:number|null;io_budget_ms:number;abort_source:string|null;http_status:number|null;media_type:string|null;bytes_read:number;response_complete:boolean;response_sha256:string|null;response_sha256_scope:string|null;identity_rejection_reason:string|null }
export interface CollectionOptions<I,R> { items:readonly I[];subject:(item:I)=>string;checkId:string;phase:string;deadline:number;now:()=>number;startAfter?:string|null|undefined;applicable?:(item:I)=>boolean;reuse?:(item:I)=>R[]|null;completion?:(item:I,values:R[])=>UnknownRecord|null;priority?:(item:I)=>number;run:(item:I)=>R[] }
export interface EvidenceProgress extends UnknownRecord {next_subject:string|null;start_after:string|null;completed:UnknownRecord[];new_completed:number}
export interface CollectedEvidence<R> extends EvidenceEnvelope<R> {progress:EvidenceProgress}
interface SourceResponse {ok:boolean;status:number;url?:string;headers:{get:(name:string)=>string|null};body:{getReader:()=>{read:()=>Promise<unknown>;cancel:()=>Promise<unknown>}}|null|undefined}
function sourceResponse(value:unknown):SourceResponse {
 const r=record(value);if(typeof r.ok !== "boolean" || typeof r.status !== "number") throw new TypeError("Invalid source response");
 const h=r.headers;const get=field(h,"get");if(typeof get !== "function") throw new TypeError("Invalid source headers");
 const headers={get:(name:string)=>{const v:unknown=Reflect.apply(get,h,[name]);return v == null?null:text(v);}};
 const body=r.body;if(body == null)return {ok:r.ok,status:r.status,headers,body,...(typeof r.url === "string"?{url:r.url}:{})};
 const acquire=field(body,"getReader");if(typeof acquire !== "function") throw new TypeError("Invalid source body");
 return {ok:r.ok,status:r.status,headers,...(typeof r.url === "string"?{url:r.url}:{}),body:{getReader:()=>{
 const reader:unknown=Reflect.apply(acquire,body,[]),read=field(reader,"read"),cancel=field(reader,"cancel");if(typeof read !== "function")throw new TypeError("Invalid source reader");
 return {read:async()=>{const result:unknown=Reflect.apply(read,reader,[]);return result;},cancel:async()=>{if(typeof cancel !== "function")return undefined;const result:unknown=Reflect.apply(cancel,reader,[]);return result;}};}}};
}
interface Finding extends GoalFinding {details:UnknownRecord}
const checkedItem=<I>(value:I|undefined):I=>{if(value===undefined)throw new TypeError("Missing evidence item");return value;};

const REUSABLE_COMMON_UUID_PATTERN = /^(?:alternating current|electricity(?:,.*)?|natural gas(?: .*)?|liquefied petroleum gas|lpg|diesel(?: fuel)?|steam(?:,.*)?|hot water|process water|drinking water|industrial oxygen|industrial nitrogen|carbon dioxide(?: \(fossil\))?|methane|nitrous oxide|sodium hydroxide|sodium hypochlorite|peracetic acid|(?:refrigerant|polyethylene film|pet tray|corrugated paperboard)(?:,.*)?)$/iu;

export function mergeVerifiedCommonUuids(existing:UnknownRecord[] = [], audited:UnknownRecord[] = []) {
  const merged = new Map(existing
    .filter((entry) => nested(entry,"hybrid_search_receipt_id"))
    .map((entry) => [String(entry.uuid).toLowerCase(), entry]));
  for (const entry of audited) {
    if (!nested(entry,"hybrid_search_receipt_id") || !REUSABLE_COMMON_UUID_PATTERN.test(String(entry.base_name_en ?? "").trim())) continue;
    merged.set(String(entry.uuid).toLowerCase(), entry);
  }
  return [...merged.values()].sort((left, right) => String(left.uuid).localeCompare(String(right.uuid)));
}

export function auditReportedUuids(options:ReportUuidOptions & {collect:true}):CollectedEvidence<PublicUuidAudit>;
export function auditReportedUuids(options:ReportUuidOptions & {collect?:false}):PublicUuidAudit[];
export function auditReportedUuids({
  report: reportInput,
  tiangongCliRoot,
  runner = runTiangongFlowGet,
  supportRunner = runTiangongReferenceSupport,
  retryAttempts = 3,
  retryDelayMs = 1_000,
  sleeper = sleepSync,
  collect = false, phase = "harvest", deadline = Infinity, now = Date.now, startAfter = null,
  supportCache = new Map(),
}: ReportUuidOptions):PublicUuidAudit[]|CollectedEvidence<PublicUuidAudit> {
  const report=evidenceReport(reportInput);
  if (collect) return collectEvidenceItems({ items: report.uuid_audits ?? [], subject: item => String(item.uuid).toLowerCase(),
    checkId: "uuid_public_read", phase, deadline, now, startAfter,
    run: claimed => auditReportedUuids({ report: { uuid_audits: [claimed] }, tiangongCliRoot, runner, supportRunner,
      retryAttempts, retryDelayMs, sleeper, supportCache, phase, deadline, now }) });
  const results = [];
  for (const claimed of report.uuid_audits ?? []) {
    const actual = readPublicUuidAudit({
      uuid: claimed.uuid,
      tiangongCliRoot,
      runner,
      supportRunner,
      supportCache,
      retryAttempts,
      retryDelayMs,
      sleeper, phase, deadline, now,
    });
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
      const message = `Direct state_code=100 audit disagrees with the author report for ${claimed.uuid}: ${mismatches.join(", ")}`;
      const expected = {
        uuid: actual.uuid,
        state_code: actual.state_code,
        base_name_en: actual.base_name_en,
        base_name_zh: actual.base_name_zh,
        flow_type: actual.flow_type,
        classification: actual.classifications,
        property: actual.property,
        unit_group: {
          uuid: actual.unit_group_uuid,
          name_en: actual.unit_group_name_en,
          name_zh: actual.unit_group_name_zh,
          reference_unit: actual.reference_unit,
        },
      };
      const claimedIdentity = {
        uuid: claimed.uuid,
        state_code: claimed.state_code,
        base_name_en: claimed.base_name_en,
        base_name_zh: claimed.base_name_zh,
        flow_type: claimed.flow_type,
        classification: claimed.classification,
        property: claimed.property,
        unit_group: claimed.unit_group,
      };
      throw new GoalHarnessError("GOAL_UUID_DIRECT_AUDIT_MISMATCH", message, {
        uuid: claimed.uuid,
        mismatches,
        claimed,
        actual,
        findings: [{
          code: "GOAL_UUID_DIRECT_AUDIT_MISMATCH",
          message,
          uuid: claimed.uuid,
          mismatches,
          expected,
          claimed: claimedIdentity,
          remediation: "Copy the state_code=100 direct-read identity into uuid_audits exactly; use a listed classification id or label and the verified property/unit-group identity.",
        }],
      });
    }
    reviewTimeRemaining(deadline, { now, phase, subjectId: claimed.uuid.toLowerCase() });
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

export function readPublicUuidAudit({
  uuid,
  tiangongCliRoot,
  runner = runTiangongFlowGet,
  supportRunner = runTiangongReferenceSupport,
  supportCache = new Map(),
  retryAttempts = 3,
  retryDelayMs = 1_000,
  sleeper = sleepSync,
  phase = "harvest", deadline = Infinity, now = Date.now,
}: UuidReadOptions):PublicUuidAudit {
    const retryOptions = { attempts: retryAttempts, delayMs: retryDelayMs, sleeper, deadline, now, phase, subjectId: uuid };
    const direct = retryUuidInfrastructure(() => runner({ uuid, tiangongCliRoot,
      timeoutMs: reviewTimeRemaining(deadline, { now, phase, subjectId: uuid }), deadline, now, phase }), retryOptions);
    if (nested(direct,"valid") === false || nested(direct,"ok") === false || !nested(direct,"flow","flowDataSet","flowInformation","dataSetInformation")) {
      throw new GoalHarnessError("GOAL_UUID_DIRECT_READ_FAILED", "Public UUID read did not return a flow record.",
        { phase, origin: "tool_transport", failure_kind: "unknown", retryable: false, subject_id: uuid });
    }
    const flow = nested(direct,"flow","flowDataSet");
    const info = nested(flow,"flowInformation","dataSetInformation");
    const names = localizedTexts(nested(info,"name","baseName"));
    const referenceProperty = referenceFlowProperty(flow);
    const flowPropertyReference = nested(referenceProperty,"referenceToFlowPropertyDataSet");
    const flowPropertyId = String(nested(flowPropertyReference,"@refObjectId") ?? "");
    const flowPropertyVersion = String(nested(flowPropertyReference,"@version") ?? "");
    const supportKey = `${flowPropertyId.toLowerCase()}@${flowPropertyVersion}`;
    let support = supportCache.get(supportKey);
    if (support === undefined) {
      support = retryUuidInfrastructure(() => supportRunner({
        flowPropertyId,
        flowPropertyVersion,
        tiangongCliRoot, timeoutMs: reviewTimeRemaining(deadline, { now, phase, subjectId: uuid }), deadline, now, phase,
      }), retryOptions);
      if (nested(support,"valid") === false || nested(support,"ok") === false || !nested(support,"flow_property") || !nested(support,"unit_group")) {
        throw new GoalHarnessError("GOAL_UUID_DIRECT_READ_FAILED", "Public reference support did not return property and unit-group records.",
          { phase, origin: "tool_transport", failure_kind: "unknown", retryable: false, subject_id: uuid });
      }
      supportCache.set(supportKey, support);
    }
    return {
      uuid: String(nested(info,"common:UUID") ?? "").toLowerCase(),
      state_code: nested(direct,"state_code"),
      base_name_en: names.en ?? names["en-US"] ?? "",
      base_name_zh: names.zh ?? names["zh-CN"] ?? "",
      flow_type: normalizeFlowType(nested(flow,"modellingAndValidation","LCIMethod","typeOfDataSet")),
      classifications: [
        ...classificationValues(nested(info,"classificationInformation","common:classification","common:class")),
        ...elementaryCategoryValues(nested(info,"classificationInformation","common:elementaryFlowCategorization","common:category")),
      ],
      property: localizedTexts(nested(referenceProperty,"referenceToFlowPropertyDataSet","common:shortDescription")).en ?? "",
      flow_property_uuid: String(nested(referenceProperty,"referenceToFlowPropertyDataSet","@refObjectId") ?? "").toLowerCase(),
      unit_group_uuid: String(nested(support,"unit_group","id") ?? "").toLowerCase(),
      unit_group_name_en: String(nested(support,"unit_group","name_en") ?? ""),
      unit_group_name_zh: String(nested(support,"unit_group","name_zh") ?? ""),
      reference_unit: String(nested(support,"unit_group","reference_unit") ?? ""),
      flow_property_state_code: String(nested(support,"flow_property","id") ?? "").toLowerCase() === String(nested(flowPropertyReference,"@refObjectId") ?? "").toLowerCase() ? (nested(support,"flow_property","state_code") ?? null) : null,
      flow_property_name_en: String(nested(support,"flow_property","name_en") ?? ""),
      unit_group_state_code: nested(support,"unit_group","state_code") ?? null,
      general_comment: localizedTexts(nested(info,"generalComment")).en ?? localizedTexts(nested(info,"generalComment")).zh ?? "",
      response_sha256: `sha256:${createHash("sha256").update(serialized({ direct, support })).digest("hex")}`,
    };
}

function retryUuidInfrastructure<T>(operation:()=>T, { attempts, delayMs, sleeper, deadline = Infinity, now = Date.now, phase = "harvest", subjectId }: {attempts:number;delayMs:number;sleeper:(ms:number)=>void;deadline?:number;now?:()=>number;phase?:string;subjectId:string}):T {
  const limit = Number.isInteger(attempts) && attempts > 0 ? attempts : 3;
  const delay = Number.isFinite(delayMs) && delayMs >= 0 ? delayMs : 1_000;
  for (let attempt = 1; attempt <= limit; attempt += 1) {
    try {
      reviewTimeRemaining(deadline, { now, phase, subjectId });
      const result = operation();
      reviewTimeRemaining(deadline, { now, phase, subjectId });
      return result;
    } catch (error) {
      reviewTimeRemaining(deadline, { now, phase, subjectId });
      if (classifyFinding(error).category !== "infrastructure" || nested(error,"details","retryable") === false) throw error;
      if (attempt === limit) {
        throw new GoalHarnessError(stringCode(error) ?? "GOAL_UUID_DIRECT_READ_FAILED", errorMessage(error), { ...recordOrEmpty(field(error,"details")), attempts: attempt });
      }
      sleeper(Math.min(delay * attempt, reviewTimeRemaining(deadline, { now, phase, subjectId })));
      reviewTimeRemaining(deadline, { now, phase, subjectId });
    }
  }
  throw new GoalHarnessError("GOAL_UUID_DIRECT_READ_FAILED", "TianGong public UUID audit exhausted its retry budget.", { attempts: limit });
}

function sleepSync(milliseconds:number) {
  if (!Number.isFinite(milliseconds) || milliseconds <= 0) return;
  Atomics.wait(new Int32Array(new SharedArrayBuffer(4)), 0, 0, milliseconds);
}

export function verifySourceLocators(options:SourceOptions & {collect:true}):Promise<CollectedEvidence<UnknownRecord>>;
export function verifySourceLocators(options:SourceOptions & {collect?:false}):Promise<UnknownRecord[]>;
export async function verifySourceLocators({ report: reportInput, stateDir = null, fetchImpl = globalThis.fetch, timeoutMs = 30_000,
  collect = false, phase = "harvest", deadline = Infinity, now = Date.now, startAfter = null, priorProgress = null }:SourceOptions):Promise<UnknownRecord[]|CollectedEvidence<UnknownRecord>> {
  const report=evidenceReport(reportInput);
  if (collect) return collectEvidenceItemsAsync<SourceClaim,UnknownRecord>({ items: report.sources ?? [], subject: item => item.source_id,
    checkId: "source_original", phase, deadline, now, startAfter: startAfter ?? priorProgress?.start_after,
    priority: source => priorProgress?.completed?.some(entry => entry.binding === sourceBinding(source, phase)) ? 0 : 1,
    reuse: source => {
      const saved = priorProgress?.completed?.find(entry => entry.binding === sourceBinding(source, phase));
      if (!saved || !stateDir) return null;
      const receipt = findCachedOriginalSource({ stateDir, source, locator: normalizeLocator(source.locator), deadline, now, phase, expectedHash: saved.content_sha256 });
      return receipt ? [{ ...record(receipt.value), checkpoint_reused: true, cache_receipt_id: receipt.receipt_id }] : null;
    },
    completion: (item, values) => ({ binding: sourceBinding(item, phase), content_sha256: checkedItem(values[0]).content_sha256 }),
    applicable: source => source.discovery_only !== true,
    run: source => verifySourceLocators({ report: { sources: [source] }, stateDir, fetchImpl, timeoutMs, phase, deadline, now }) });
  const audits = [];
  for (const source of report.sources ?? []) {
    if (source.discovery_only === true) continue;
    const locator = normalizeLocator(source.locator);
    if (/openalex\.org|api\.openalex\.org|scholar\.google|search\?/iu.test(locator)) {
      throw new GoalHarnessError("GOAL_SOURCE_DISCOVERY_ONLY", `Discovery/search locator cannot be final evidence: ${source.source_id}`, { source_id: source.source_id, locator: sourceLocatorOrigin(locator) });
    }
    const startedAt = now();
    const diagnostics:Diagnostics = {
      started_at: new Date(startedAt).toISOString(), ended_at: null, elapsed_ms: null,
      remaining_budget_ms_at_entry: sourceRemainingBudget(deadline, startedAt), remaining_budget_ms_at_exit: null,
      io_budget_ms: 0, abort_source: null, http_status: null, media_type: null, bytes_read: 0,
      response_complete: false, response_sha256: null, response_sha256_scope: null, identity_rejection_reason: null,
    };
    const responseHash = createHash('sha256');
    const finishDiagnostics = () => {
      const endedAt = now();
      diagnostics.ended_at = new Date(endedAt).toISOString();
      diagnostics.elapsed_ms = Math.max(0, endedAt - startedAt);
      diagnostics.remaining_budget_ms_at_exit = sourceRemainingBudget(deadline, endedAt);
      if (diagnostics.bytes_read > 0 || diagnostics.response_complete) {
        diagnostics.response_sha256 = `sha256:${responseHash.copy().digest('hex')}`;
        diagnostics.response_sha256_scope = diagnostics.response_complete ? 'complete' : 'partial';
      }
      return { ...diagnostics };
    };
    const windowError = () => new GoalHarnessError('GOAL_REVIEW_WINDOW_EXHAUSTED', 'The current review execution window is exhausted.', {
      phase, origin: 'harness_deadline', failure_kind: 'execution_window', retryable: false, subject_id: source.source_id,
    });
    const secondaryError = (error:unknown) => {
      const exhausted = nested(error,"code") === 'GOAL_REVIEW_WINDOW_EXHAUSTED';
      if (exhausted) diagnostics.abort_source = 'harness_review_window';
      const knownCodes = ['GOAL_SOURCE_PDF_EXTRACTOR_UNAVAILABLE', 'GOAL_CACHE_EVENT_LOG_CORRUPT', 'GOAL_CACHE_LOCK_TIMEOUT', 'GOAL_CACHE_RECEIPT_ID_INVALID'];
      const code = exhausted ? 'GOAL_REVIEW_WINDOW_EXHAUSTED' : knownCodes.includes(String(nested(error,"code"))) ? String(field(error,"code")) : 'GOAL_SOURCE_AUDIT_FINALIZATION_FAILED';
      return new GoalHarnessError(code, exhausted ? 'The current review execution window is exhausted.' : 'Source audit finalization could not be completed.', {
        phase, origin:exhausted?'harness_deadline':nested(error,"code") === 'GOAL_SOURCE_PDF_EXTRACTOR_UNAVAILABLE'?'harness_review':'source_cache',
        failure_kind:exhausted?'execution_window':nested(error,"code") === 'GOAL_SOURCE_PDF_EXTRACTOR_UNAVAILABLE'?'configuration':'unknown',retryable:false,
        subject_id:source.source_id,source_id:source.source_id,locator:sourceLocatorOrigin(locator),source_fetch_diagnostics:finishDiagnostics(),
      });
    };
    const controller = new AbortController();
    let timeout:ReturnType<typeof setTimeout>|undefined, timerError:GoalHarnessError|undefined, httpError:GoalHarnessError|undefined, response:SourceResponse|undefined, content:Buffer;
    try {
      const scheduledAt = now();
      const remainingAtSchedule = sourceRemainingBudget(deadline, scheduledAt);
      const ioBudget = Math.min(timeoutMs, reviewTimeRemaining(deadline, { now: () => scheduledAt, phase, subjectId: source.source_id }));
      // Bind the timer to the limit selected at scheduling, not the earlier entry
      // sample or a rounded/early callback. The review helper's 30-second I/O
      // clamp alone does not mean a longer review window has been exhausted.
      const reviewLimited = remainingAtSchedule !== null && remainingAtSchedule <= ioBudget;
      diagnostics.io_budget_ms = ioBudget;
      timeout = setTimeout(() => {
        const windowExpired = reviewLimited || sourceRemainingBudget(deadline, now()) === 0;
        diagnostics.abort_source = windowExpired ? 'harness_review_window' : 'harness_request_timeout';
        timerError = windowExpired ? windowError() : new GoalHarnessError('GOAL_SOURCE_REQUEST_TIMEOUT', 'The Harness source request timeout was reached.', {
          phase: 'source_fetch', origin: 'harness_request_timer', failure_kind: 'timeout', retryable: true, subject_id: source.source_id,
        });
        controller.abort(timerError);
      }, ioBudget);
      response = sourceResponse(await abortable(fetchImpl(locator, { method: "GET", redirect: "follow", signal: controller.signal, headers: { "user-agent": "tiangong-pcr-goal-harness/1.0" } }), controller.signal));
      diagnostics.http_status = sourceHttpStatus(response.status);
      diagnostics.media_type = sourceMediaType(response.headers.get('content-type'));
      reviewTimeRemaining(deadline, { now, phase, subjectId: source.source_id });
      if (!response.ok) {
        const status = response.status;
        const retryable = status === 429 || status >= 500;
        const retryAfter = response.headers.get('retry-after');
        const retrySeconds = retryAfter == null ? null : /^\d+$/u.test(retryAfter) ? Number(retryAfter) : Math.max(0, Math.ceil((Date.parse(retryAfter) - Date.now()) / 1000));
        httpError = new GoalHarnessError("GOAL_SOURCE_LOCATOR_UNREADABLE", `Source locator returned HTTP ${status}: ${source.source_id}`, {
          phase:'source_fetch', origin:'source_http', failure_kind:status === 429 ? 'rate_limit' : status >= 500 ? 'service_unavailable' : status === 401 || status === 403 ? 'authorization' : 'unknown',
          retryable, source_id:source.source_id, subject_id:source.source_id, locator:sourceLocatorOrigin(locator), status,
          retry_after_seconds:Number.isFinite(retrySeconds) ? retrySeconds : null,
        });
        throw httpError;
      }
      content = await readResponseBytes(response, 64 * 1024 * 1024, { signal: controller.signal, deadline, now, phase, subjectId: source.source_id,
        onChunk: chunk => { diagnostics.bytes_read += chunk.byteLength; responseHash.update(chunk); },
        onComplete: () => { diagnostics.response_complete = true; },
      });
      reviewTimeRemaining(deadline, { now, phase, subjectId: source.source_id });
    } catch (error) {
      if (sourceRemainingBudget(deadline, now()) === 0 || nested(timerError,"code") === 'GOAL_REVIEW_WINDOW_EXHAUSTED') {
        diagnostics.abort_source = 'harness_review_window';
        error = windowError();
      } else if (timerError) error = timerError;
      else if (nested(error,"name") === 'AbortError') diagnostics.abort_source = 'unproven_abort';
      const machineCode = sourceMachineCode(error);
      const reliable = sourceTransportKind(machineCode) !== null;
      const observedHttpFailure = httpError !== undefined && error === httpError;
      const observedRequestTimeout = error === timerError && diagnostics.abort_source === 'harness_request_timeout';
      const fallbackAllowed = observedHttpFailure
        ? [401, 403, 404, 408, 410, 429, 500, 502, 503, 504].includes(response?.status ?? 0)
        : observedRequestTimeout || reliable;
      let cached;
      try {
        cached = fallbackAllowed && source.original_text_verified === true && stateDir
          ? findCachedOriginalSource({ stateDir, source, locator, deadline, now, phase }) : null;
      } catch (cacheError) { throw secondaryError(cacheError); }
      if (cached) {
        audits.push({ ...cached.value, cache_hit:true, cache_receipt_id:cached.receipt_id, cache_reused_at:new Date().toISOString(),
          cache_fallback_fetch_diagnostics: finishDiagnostics() });
        continue;
      }
      const details = { subject_id:source.source_id, source_id:source.source_id, locator:sourceLocatorOrigin(locator),
        source_fetch_diagnostics: finishDiagnostics() };
      if (diagnostics.abort_source === 'harness_review_window' || observedRequestTimeout || observedHttpFailure) {
        throw new GoalHarnessError(stringCode(error) ?? "GOAL_UUID_DIRECT_READ_FAILED", errorMessage(error), { ...recordOrEmpty(field(error,"details")), ...details });
      }
      if (nested(error,"code") === 'GOAL_SOURCE_ORIGINAL_TEXT_TOO_LARGE') {
        throw new GoalHarnessError(stringCode(error) ?? "GOAL_SOURCE_ORIGINAL_TEXT_TOO_LARGE", 'Source original text exceeds the 67108864-byte cache limit.', details);
      }
      throw new GoalHarnessError("GOAL_SOURCE_LOCATOR_UNREADABLE", `Cannot read source locator for ${source.source_id}.`, {
        phase:'source_fetch', origin:'source_http', failure_kind:sourceTransportKind(machineCode) ?? 'unknown', retryable:reliable,
        ...details, machine_code:machineCode,
      });
    } finally { clearTimeout(timeout); }
    // Identity and durable writes deliberately sit outside the transport catch.
    if(!response) throw new TypeError("No source response");
    const contentType = response.headers.get('content-type') ?? null;
    let identity;
    try {
      identity = originalSourceIdentity(source, content, { deadline, now, phase });
    } catch (error) {
      const exhausted = nested(error,"code") === 'GOAL_REVIEW_WINDOW_EXHAUSTED';
      if (exhausted) diagnostics.abort_source = 'harness_review_window';
      const missingExtractor = nested(error,"code") === 'GOAL_SOURCE_PDF_EXTRACTOR_UNAVAILABLE';
      diagnostics.identity_rejection_reason = exhausted ? 'review_window_exhausted' : missingExtractor ? 'pdf_extractor_unavailable' : 'identity_check_failed';
      throw new GoalHarnessError(exhausted ? 'GOAL_REVIEW_WINDOW_EXHAUSTED' : missingExtractor ? String(field(error,"code")) : 'GOAL_SOURCE_ORIGINAL_IDENTITY_UNVERIFIED',
        exhausted ? 'The current review execution window is exhausted.' : missingExtractor ? 'PDF originals require pdftotext on PATH.' : `Original source identity needs review: ${source.source_id}`, {
          phase:'source_identity',origin:exhausted?'harness_deadline':'harness_review',failure_kind:exhausted?'execution_window':missingExtractor?'configuration':'unknown',retryable:false,
          subject_id:source.source_id,source_id:source.source_id,locator:sourceLocatorOrigin(locator),source_fetch_diagnostics:finishDiagnostics(),
        });
    }
    const { challenge, identifiable, kind } = identity;
    if (challenge || (source.original_text_verified === true && !identifiable)) {
      diagnostics.identity_rejection_reason = identity.rejection_reason ?? (challenge ? 'access_challenge' : 'original_identity_unrecognized');
      if (identity.observations) diagnostics.identity_observations = identity.observations;
      throw new GoalHarnessError('GOAL_SOURCE_ORIGINAL_IDENTITY_UNVERIFIED', `Original source identity needs review: ${source.source_id}`, {
        content_kind:kind,phase:'source_identity',origin:'harness_review',failure_kind:'unknown',retryable:false,subject_id:source.source_id,source_id:source.source_id,locator:sourceLocatorOrigin(locator),http_status:response.status,
        source_fetch_diagnostics:finishDiagnostics(),
      });
    }
    const contentSha256 = `sha256:${createHash('sha256').update(content).digest('hex')}`;
    const audit = { source_id:source.source_id, locator, resolved_url:response.url || locator, http_status:response.status,
      content_type:contentType, original_text_claimed_verified:source.original_text_verified === true,
      original_identity_verified:identifiable && !challenge, content_kind:kind, checked_at:new Date().toISOString(), content_sha256:contentSha256, content_byte_length:content.byteLength,
      source_fetch_diagnostics:finishDiagnostics() };
    try {
      if (stateDir) {
        const keyInput = {source_id:source.source_id,locator};
        const tool = {name:'http-original-text-fetch',version:'1'};
        appendGoalCacheReceipt({stateDir,namespace:'source_locator_checks',keyInput,tool,sourceFingerprint:contentSha256,value:audit});
        if (source.original_text_verified === true) appendGoalCacheReceipt({stateDir,namespace:'source_original_text_receipts',keyInput,tool,sourceFingerprint:contentSha256,value:audit,blob:content});
      }
      reviewTimeRemaining(deadline, { now, phase, subjectId: source.source_id });
    } catch (error) { throw secondaryError(error); }
    audits.push(audit);
  }
  return audits;
}

// Conservative document-content qualification. This is not a semantic relevance review.
function originalSourceIdentity(source:SourceClaim, content:Buffer, { deadline, now, phase }: {deadline:number;now:()=>number;phase:string}) {
  let text = content.toString("utf8");
  const isPdf = content.subarray(0, 5).toString() === "%PDF-";
  if (isPdf) {
    const extracted = spawnSync("pdftotext", ["-enc", "UTF-8", "-", "-"], {
      input: content, encoding: "utf8", maxBuffer: 64 * 1024 * 1024,
      timeout: reviewTimeRemaining(deadline, { now, phase, subjectId: source.source_id }), killSignal: "SIGKILL",
    });
    reviewTimeRemaining(deadline, { now, phase, subjectId: source.source_id });
    if (nested(extracted,"error","code") === "ENOENT") throw new GoalHarnessError("GOAL_SOURCE_PDF_EXTRACTOR_UNAVAILABLE", "PDF originals require pdftotext on PATH.", {
      phase: "source_identity", origin: "harness_review", failure_kind: "configuration", retryable: false, subject_id: source.source_id,
    });
    if (extracted.status !== 0 || extracted.error) return { challenge: false, identifiable: false, kind: "unrecognized", rejection_reason: "pdf_extraction_failed" };
    text = extracted.stdout;
  }
  const challenge = /<input[^>]*type=["']?password|<title>[^<]*(?:sign in|log in|login)|captcha|verify you are human|checking your browser/iu.test(text);
  if (challenge) return { challenge: true, identifiable: false, kind: "access_challenge", rejection_reason: "access_challenge" };
  if (!isPdf) {
    text = text.replace(/<!--[^]*?-->/gu, "").replace(/<(script|style|nav|header|footer|head)\b[^>]*>[^]*?<\/\1\s*>/giu, "");
    text = extractHtmlDocumentBody(text);
    // Structured abstracts can contain Introduction/Methods/Results headings,
    // but their prose is still metadata until the full document begins.
    const headings = [...text.matchAll(/<h([1-6])\b[^>]*>([^]*?)<\/h\1\s*>/giu)]
      .map(match => ({ start: match.index, level: Number(match[1]), label: normalizeComparableText((match[2] ?? "").replace(/<[^>]*>/gu, " ")) }));
    const containerRanges = htmlAbstractContainerRanges(text);
    const abstractRanges = [...containerRanges];
    for (let index = 0; index < headings.length; index += 1) {
      const heading = checkedItem(headings[index]);
      if (!/^(?:abstract|summary|executive summary)$/iu.test(heading.label)
          || containerRanges.some(([start, end]) => heading.start >= start && heading.start < end)) continue;
      const end = headings.slice(index + 1).find(next => next.level <= heading.level)?.start ?? text.length;
      abstractRanges.push([heading.start, end]);
    }
    const mergedRanges: [number, number][] = [];
    for (const range of abstractRanges.sort((a, b) => a[0] - b[0])) {
      const previous = mergedRanges.at(-1);
      if (previous && range[0] <= previous[1]) previous[1] = Math.max(previous[1], range[1]);
      else mergedRanges.push([range[0], range[1]]);
    }
    for (const [start, end] of mergedRanges.reverse()) text = `${text.slice(0, start)} ${text.slice(end)}`;
    text = text.replace(/<\/?(?:h[1-6]|p|div|section|br|li|tr|body)\b[^>]*>/giu, "\n").replace(/<[^>]*>/gu, "");
    text = text.replace(/&(#x[0-9a-f]+|#\d+|nbsp|amp|lt|gt|quot|apos);/giu, (_match:string, entity:string) => {
      if (!entity.startsWith("#")) return (entityMap(entity.toLowerCase()));
      const code = (entity[1] ?? "").toLowerCase() === "x" ? parseInt(entity.slice(2),16) : Number(entity.slice(1));
      return code > 0 && code <= 0x10ffff ? String.fromCodePoint(code) : " ";
    });
  }
  const title = normalizeComparableText(source.name ?? "");
  const normalized = normalizeComparableText(text);
  // At least two substantive document sections with prose, beyond abstract/TOC/download metadata.
  const sectionHeading = /^(?:\d+(?:\.\d+)*[.)]?\s+)?(?:introduction|scope|methods?|materials and methods|measurement methods|methodology|requirements|results(?: and discussion)?|discussion|system boundary|inventory|allocation|范围|方法|要求|结果|系统边界)\s*[:：]?$/iu;
  const sections: string[] = [];
  let section: string | null = null;
  for (const line of text.split(/\r?\n/u)) {
    if (sectionHeading.test(line.trim())) {
      if (section !== null) sections.push(section);
      section = "";
    } else if (section !== null) section += ` ${line}`;
  }
  if (section !== null) sections.push(section);
  const substantiveSections = sections.filter(body => normalizeComparableText(body).length >= 150);
  const titleMatches = Boolean(title && normalized.includes(title));
  const identifiable = Boolean(titleMatches && normalized.length >= 500 && substantiveSections.length >= 2);
  const metadata = /abstract|table of contents|purchase|buy now|download (?:full text|instructions)|摘要|目录|购买|下载/iu.test(text);
  return { challenge: false, identifiable, kind: identifiable ? "original" : metadata ? "metadata" : "unrecognized",
    rejection_reason: identifiable ? null : !titleMatches ? "title_mismatch" : normalized.length < 500 ? "insufficient_body_length" : "insufficient_substantive_sections",
    observations: { title_matches: titleMatches, normalized_body_length: normalized.length, substantive_section_count: substantiveSections.length },
  };
}

function htmlAbstractContainerRanges(html: string): [number, number][] {
  const stack: { tag: string; start: number; abstract: boolean }[] = [];
  const ranges: [number, number][] = [];
  const tags = /<(\/?)([a-z][a-z0-9:-]*)\b(?:[^"'<>]|"[^"]*"|'[^']*')*>/giu;
  for (const match of html.matchAll(tags)) {
    const tag = (match[2] ?? "").toLowerCase();
    if (!["article", "main", "section", "div"].includes(tag)) continue;
    if (match[1]) {
      const container = stack.pop();
      if (!container || container.tag !== tag) {
        // An unfinished marked abstract must not qualify through later prose.
        for (const entry of [...stack, ...(container ? [container] : [])])
          if (entry.abstract) ranges.push([entry.start, html.length]);
        stack.length = 0;
        continue;
      }
      if (container.abstract) ranges.push([container.start, match.index + match[0].length]);
    } else {
      const attributes = match[0].slice(match[0].indexOf(match[2] ?? "") + (match[2] ?? "").length, -1);
      // Consume each complete attribute, including quoted values, so template
      // text cannot masquerade as the element's class or id.
      const attributePattern = /([a-z_:][\w:.-]*)(?:\s*=\s*(?:"([^"]*)"|'([^']*)'|([^\s"'=<>`]+)))?/giu;
      const abstract = [...attributes.matchAll(attributePattern)].some(attribute =>
        ["class", "id"].includes((attribute[1] ?? "").toLowerCase())
          && (attribute[2] ?? attribute[3] ?? attribute[4] ?? "").split(/\s+/u)
            .some(value => /^(?:abstract|summary|executive[-_]summary)$/iu.test(value)));
      stack.push({ tag, start: match.index, abstract });
    }
  }
  for (const container of stack) if (container.abstract) ranges.push([container.start, html.length]);
  return ranges;
}

function extractHtmlDocumentBody(html: string) {
  const stack: string[] = [];
  let start: number | null = null;
  let scannedTo = 0;
  // Scan whole tags so tag-shaped text and ">" in quoted attributes are inert.
  // Article/main tags require explicit, correctly nested closes; malformed
  // wrappers cannot fall back to qualifying prose elsewhere on the page.
  const tags = /<(\/?)([a-z][a-z0-9:-]*)\b(?:[^"'<>]|"[^"]*"|'[^']*')*>/giu;
  const structuralMarkup = /<\/?(?:article|main)(?=[\s/>]|$)/iu;
  for (const match of html.matchAll(tags)) {
    // A malformed structural opener can be skipped by the whole-tag scanner.
    // Only gaps outside recognized tags are inspected, keeping quoted text inert.
    if (structuralMarkup.test(html.slice(scannedTo, match.index))) return "";
    scannedTo = match.index + match[0].length;
    const tag = (match[2] ?? "").toLowerCase();
    if (tag !== "article" && tag !== "main") continue;
    if (match[1]) {
      if (start === null) continue;
      if (stack.pop() !== tag) return "";
      if (stack.length === 0) return html.slice(start, match.index + match[0].length);
    } else {
      // Retain the selected wrapper so its own abstract/summary marker is
      // available to the subsequent metadata exclusion pass.
      if (start === null) start = match.index;
      stack.push(tag);
    }
  }
  if (structuralMarkup.test(html.slice(scannedTo))) return "";
  return start === null ? html : "";
}

function sourceBinding(source:SourceClaim, phase:string) {
  return createHash("sha256").update(JSON.stringify({ policy: 2, phase, source })).digest("hex");
}

function findCachedOriginalSource({ stateDir, source, locator, deadline, now, phase, expectedHash = null }: {stateDir:string;source:SourceClaim;locator:string;deadline:number;now:()=>number;phase:string;expectedHash?:unknown}) {
  const candidates = listGoalCacheReceipts({ stateDir, namespace: "source_original_text_receipts" })
    .filter((receipt) => nested(receipt,"tool","name") === "http-original-text-fetch" && nested(receipt,"tool","version") === "1")
    .filter((receipt) => nested(receipt,"key_input","source_id") === source.source_id && nested(receipt,"key_input","locator") === locator)
    .filter((receipt) => nested(receipt,"value","source_id") === source.source_id && nested(receipt,"value","locator") === locator)
    .filter((receipt) => receipt.blob_path && receipt.blob_sha256 === nested(receipt,"value","content_sha256"))
    .filter((receipt) => receipt.source_fingerprint === nested(receipt,"value","content_sha256"))
    .filter((receipt) => expectedHash === null || field(receipt.value,"content_sha256") === expectedHash);
  for (const receipt of candidates.reverse()) {
    reviewTimeRemaining(deadline, { now, phase, subjectId: source.source_id });
    let descriptor;
    try {
      descriptor = openSync(text(receipt.blob_path), constants.O_RDONLY | constants.O_NOFOLLOW | constants.O_NONBLOCK);
      const stat = fstatSync(descriptor);
      if (!stat.isFile() || stat.size > 64 * 1024 * 1024 || stat.size !== field(receipt.value,"content_byte_length")) continue;
      const content = readFileSync(descriptor);
      if (`sha256:${createHash("sha256").update(content).digest("hex")}` !== receipt.blob_sha256) continue;
      const { challenge, identifiable } = originalSourceIdentity(source, content, { deadline, now, phase });
      reviewTimeRemaining(deadline, { now, phase, subjectId: source.source_id });
      if (identifiable && !challenge) return { ...receipt, value: { ...record(receipt.value), original_identity_verified: true, content_kind: "original" } };
    } catch (error) {
      if (!["ENOENT", "ELOOP", "EACCES", "ENOTDIR"].includes(String(errorCode(error)))) throw error;
    } finally { if (descriptor !== undefined) closeSync(descriptor); }
  }
  reviewTimeRemaining(deadline, { now, phase, subjectId: source.source_id });
  return null;
}

function runTiangongFlowGet({ uuid, tiangongCliRoot, timeoutMs = 30_000 }:RunnerRequest):unknown {
  const cliPath = path.join(text(tiangongCliRoot), "bin", "tiangong-lca.js");
  const result = spawnSync(process.execPath, [`--env-file-if-exists=${path.join(text(tiangongCliRoot), ".env")}`, cliPath, "flow", "get", "--id", uuid, "--state-code", "100", "--json"], {
    cwd: tiangongCliRoot,
    encoding: "utf8",
    stdio: ["ignore", "pipe", "pipe"],
    maxBuffer: 64 * 1024 * 1024,
    timeout: Math.min(30_000, timeoutMs), killSignal: "SIGKILL",
  });
  if (result.status !== 0) {
    throw new GoalHarnessError("GOAL_UUID_DIRECT_READ_FAILED", `TianGong state_code=100 direct read failed for ${uuid}`, toolFailureDetails(result, { subject_id: uuid, uuid }));
  }
  try {
    return JSON.parse(result.stdout);
  } catch (error) {
    throw new GoalHarnessError("GOAL_UUID_DIRECT_READ_FAILED", `TianGong direct read returned invalid JSON for ${uuid}`, { phase: "tool_decode", origin: "tool_transport", failure_kind: "unknown", retryable: false, cause: errorMessage(error) });
  }
}

function runTiangongReferenceSupport({ flowPropertyId, flowPropertyVersion, tiangongCliRoot, timeoutMs = 30_000 }:SupportRequest):unknown {
  if (!flowPropertyId) {
    throw new GoalHarnessError("GOAL_UUID_DIRECT_READ_FAILED", "TianGong flow does not declare a reference flow-property UUID.", { phase: "uuid_support", origin: "harness_review", failure_kind: "author_claim", retryable: false });
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
    timeout: Math.min(30_000, timeoutMs), killSignal: "SIGKILL",
  });
  if (result.status !== 0) {
    throw new GoalHarnessError("GOAL_UUID_DIRECT_READ_FAILED", `TianGong public flow-property/unit-group audit failed for ${flowPropertyId}`, toolFailureDetails(result, { subject_id: flowPropertyId, flow_property_uuid: flowPropertyId }));
  }
  try {
    return JSON.parse(result.stdout);
  } catch (error) {
    throw new GoalHarnessError("GOAL_UUID_DIRECT_READ_FAILED", `TianGong flow-property/unit-group audit returned invalid JSON for ${flowPropertyId}`, { phase: "tool_decode", origin: "tool_transport", failure_kind: "unknown", retryable: false, cause: errorMessage(error) });
  }
}

const TIANGONG_REFERENCE_SUPPORT_SCRIPT = String.raw`
import { createSupabaseDataClient, requireSupabaseRestRuntime } from "./dist/src/lib/supabase-client.js";
import { createSupabaseDataRuntime } from "./dist/src/lib/supabase-session.js";
const [flowPropertyId, requestedVersion] = process.argv.slice(1);
async function main() {
const runtime = createSupabaseDataRuntime({ runtime: requireSupabaseRestRuntime(process.env), fetchImpl: fetch, timeoutMs: 10000, now: new Date() });
const { client } = createSupabaseDataClient(runtime, fetch, 10000);
async function readPublic(table, id, version) {
  let query = client.from(table).select("id,version,state_code,json").eq("id", id).eq("state_code", 100);
  query = version ? query.eq("version", version) : query.order("version", { ascending: false }).limit(1);
  const { data, error, status } = await query;
  if (error) throw Object.assign(new Error("Public query failed"), error, { status });
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
}
main().catch(error => {
  const rawCode = error?.code ?? error?.cause?.code;
  const status = Number.isInteger(error?.status) && error.status >= 100 && error.status <= 599 ? error.status : null;
  const allowed = new Set(["ECONNRESET", "ECONNREFUSED", "ETIMEDOUT", "ENETUNREACH", "EAI_AGAIN", "RATE_LIMITED", "UNAUTHENTICATED", "UNAUTHORIZED"]);
  const code = status === 401 || ["PGRST301", "PGRST302"].includes(rawCode) ? "UNAUTHENTICATED"
    : status === 403 ? "UNAUTHORIZED" : status === 429 ? "RATE_LIMITED"
    : status >= 500 ? "SERVICE_UNAVAILABLE" : allowed.has(rawCode) ? rawCode
    : ["AbortError", "TimeoutError"].includes(error?.name) ? "ETIMEDOUT" : "UPSTREAM_ERROR";
  process.stdout.write(JSON.stringify({ error: { code, status,
    retryable: ["ECONNRESET", "ECONNREFUSED", "ETIMEDOUT", "ENETUNREACH", "EAI_AGAIN", "RATE_LIMITED", "SERVICE_UNAVAILABLE"].includes(code),
    details: { subject_id: flowPropertyId, credentials_redacted: true } } }));
  process.exitCode = 1;
});
`;


function localizedTexts(value:unknown):Record<string,string> {
 const entries:unknown[]=Array.isArray(value)?value:value?[value]:[]; const result:Record<string,string>={};
 for(const entry of entries){const language=field(entry,"@xml:lang"), content=field(entry,"#text");if(language && typeof content === "string")result[String(language)]=content;}
 return result;
}

function classificationValues(value:unknown) {
  const entries = Array.isArray(value) ? value : value ? [value] : [];
  return entries.map((entry) => ({ id: String(nested(entry,"@classId") ?? ""), label: String(nested(entry,"#text") ?? "") })).filter((entry) => entry.id || entry.label);
}

function elementaryCategoryValues(value:unknown) {
  const entries = Array.isArray(value) ? value : value ? [value] : [];
  return entries.map((entry) => ({ id: String(nested(entry,"@catId") ?? ""), label: String(nested(entry,"#text") ?? "") })).filter((entry) => entry.id || entry.label);
}

function referenceFlowProperty(flow:unknown) {
  const value = nested(flow,"flowProperties","flowProperty");
  const entries = Array.isArray(value) ? value : value ? [value] : [];
  const referenceId = String(nested(flow,"flowInformation","quantitativeReference","referenceToReferenceFlowProperty") ?? "");
  return entries.find((entry) => String(nested(entry,"@dataSetInternalID") ?? "") === referenceId) ?? entries[0] ?? null;
}

function unitGroupClaimMatches(claim:unknown, actual:PublicUuidAudit) {
  const normalizedClaim = String(claim ?? "").toLowerCase();
  if (!normalizedClaim.trim()) return false;
  if (actual.unit_group_uuid && normalizedClaim.includes(actual.unit_group_uuid)) return true;
  const candidates = [actual.unit_group_name_en, actual.reference_unit]
    .flatMap((value) => String(value ?? "").toLowerCase().match(/[a-z][a-z0-9]*/gu) ?? [])
    .filter((token) => !["of", "unit", "units", "group"].includes(token));
  return candidates.some((token) => normalizedClaim.includes(token));
}

function classificationClaimMatches(claim:unknown, classifications:{id:string;label:string}[], flowType:string) {
  const text = String(claim ?? "").trim();
  if (classifications.length > 0) {
    const normalized = normalizeComparableText(text);
    return Boolean(text) && classifications.some((value) => {
      const id = value.id.trim(), label = normalizeComparableText(value.label);
      return Boolean((id && text.includes(id)) || (label && normalized.includes(label)));
    });
  }
  if (flowType !== "elementary") return false;
  return !text || /no (?:product )?classification|not applicable|elementary[- ]flow compartment/iu.test(text);
}

function normalizeComparableText(value:unknown) {
  return String(value).toLowerCase().replace(/[^\p{L}\p{N}]+/gu, " ").trim();
}

function propertyClaimMatches(claim:unknown, property:unknown) {
  const text = String(claim ?? "").trim().toLowerCase();
  const expected = String(property ?? "").trim().toLowerCase();
  if (!text || !expected) return false;
  return text === expected || text.startsWith(`${expected};`) || text.startsWith(`${expected},`) || text.startsWith(`${expected} (`) || text.includes(`property ${expected}`) || text.includes(`property: ${expected}`);
}

function normalizeFlowType(value:unknown) {
  return String(value ?? "").toLowerCase().replace(/\s+flow$/u, "").trim();
}

function normalizeLocator(value:unknown) {
  const locator = String(value ?? "").trim();
  if (/^10\.\d{4,9}\//u.test(locator)) return `https://doi.org/${locator}`;
  try {
    const url = new URL(locator);
    if (!["http:", "https:"].includes(url.protocol)) throw new Error("unsupported protocol");
    return url.href;
  } catch {
    throw new GoalHarnessError("GOAL_SOURCE_LOCATOR_INVALID", 'Source locator must be an HTTP(S) URL or DOI.', { phase: "tool_decode", origin: "tool_transport", failure_kind: "unknown", retryable: false });
  }
}

function sourceLocatorOrigin(locator:string) {
  try { return new URL(locator).origin; } catch { return null; }
}

function sourceRemainingBudget(deadline:number, timestamp:number) {
  return Number.isFinite(deadline) ? Math.max(0, Math.ceil(deadline - timestamp)) : null;
}

function sourceHttpStatus(status:number) {
  return Number.isInteger(status) && status >= 100 && status <= 599 ? status : null;
}

function sourceMediaType(contentType:unknown) {
  const mediaType = String(contentType ?? '').split(';', 1)[0]?.trim().toLowerCase() ?? "";
  return /^[a-z0-9!#$&^_.+-]+\/[a-z0-9!#$&^_.+-]+$/u.test(mediaType) ? mediaType : null;
}

function sourceMachineCode(error:unknown) {
  if (nested(error,"author_reported") === true || nested(error,"details","author_reported") === true || nested(error,"details","origin") === 'author_reported') return null;
  // An allowlist avoids treating arbitrary exception text or identifiers as transport evidence.
  return [nested(error,"cause","code"), nested(error,"code")].find(code => sourceTransportKind(code) !== null) ?? null;
}

function sourceTransportKind(code:unknown) {
  if (['ECONNRESET','ECONNREFUSED','ENETUNREACH','EAI_AGAIN'].includes(String(code))) return 'network';
  return code === 'ETIMEDOUT' ? 'timeout' : null;
}

async function readResponseBytes(response:SourceResponse, limit:number, { signal, deadline = Infinity, now = Date.now, phase = "harvest", subjectId,
  onChunk = () => {}, onComplete = () => {},
}: {signal?:AbortSignal;deadline?:number;now?:()=>number;phase?:string;subjectId?:string|undefined;onChunk?:(chunk:Buffer)=>void;onComplete?:()=>void} = {}) {
  const reader = response.body?.getReader();
  if (!reader) { if (response.body === null) onComplete(); return Buffer.alloc(0); }
  const chunks:Buffer[] = [];
  let length = 0;
  try {
    for (;;) {
      reviewTimeRemaining(deadline, { now, phase, subjectId });
      const item=record(await abortable(reader.read(), signal));const done=item.done;const value=item.value;
      if(typeof done !== "boolean") throw new TypeError("Invalid response stream item");
      if (done) { onComplete(); reviewTimeRemaining(deadline, { now, phase, subjectId }); break; }
      if(!(value instanceof Uint8Array)) throw new TypeError("Invalid response stream bytes");
      const chunk = Buffer.from(value);
      onChunk(chunk);
      reviewTimeRemaining(deadline, { now, phase, subjectId });
      if (length + chunk.length > limit) {
        throw new GoalHarnessError("GOAL_SOURCE_ORIGINAL_TEXT_TOO_LARGE", `Source original text exceeds the ${limit}-byte cache limit.`);
      }
      chunks.push(chunk);
      length += chunk.length;
    }
    return Buffer.concat(chunks);
  } finally {
    // Cancellation must happen on failed reads too; cleanup cannot extend the deadline.
    Promise.resolve(reader.cancel?.()).catch(() => {});
  }
}

function stableJson(value:unknown):string|undefined {
  if (Array.isArray(value)) return `[${value.map(stableJson).join(",")}]`;
  if (value && typeof value === "object") return `{${Object.keys(value).sort().map((key) => `${JSON.stringify(key)}:${stableJson(field(value,key))}`).join(",")}}`;
  return JSON.stringify(value);
}

export function toolFailureDetails(result: SpawnSyncReturns<string>, subject: UnknownRecord) {
  let machine: unknown = null;
  for (const text of [result.stderr, result.stdout]) {
    try { const parsed:unknown = JSON.parse(text); machine = field(parsed,"error") ?? parsed; if (machine && typeof machine === 'object') break; } catch {}
  }
  const code = nested(machine, "code") ?? nested(result, "error", "code");
  const details = nested(machine, "details");
  const upstreamCodes = [field(details, "cause_code"), field(details, "code")]
    .filter((value): value is string => typeof value === 'string' && /^[A-Z][A-Z0-9_]{1,30}$/u.test(value));
  const authenticationCodes = new Set(['SUPABASE_OAUTH_LOGIN_REQUIRED', 'AUTH_IDENTITY_SESSION_FAILED', 'UNAUTHENTICATED', 'PGRST301', 'PGRST302']);
  const authentication = authenticationCodes.has(String(code)) || upstreamCodes.some(value => authenticationCodes.has(value));
  const underlyingCode = upstreamCodes.find(value => authenticationCodes.has(value)) ?? upstreamCodes[0] ?? null;
  const httpStatus = [field(machine, "status"), field(details, "status")].find((value): value is number => typeof value === "number" && Number.isInteger(value) && value >= 100 && value <= 599) ?? null;
  const kinds: Record<string, string> = {ECONNRESET:'network',ECONNREFUSED:'network',ETIMEDOUT:'timeout',ENETUNREACH:'network',EAI_AGAIN:'network',ENOTFOUND:'network',FETCH_FAILED:'network',RATE_LIMITED:'rate_limit',SERVICE_UNAVAILABLE:'service_unavailable',UNAUTHORIZED:'authorization'};
  const failureKind = authentication || httpStatus === 401 ? 'authentication' : httpStatus === 403 ? 'authorization'
    : httpStatus === 429 ? 'rate_limit' : httpStatus !== null && httpStatus >= 500 ? 'service_unavailable'
    : httpStatus !== null ? 'unknown' : kinds[String(underlyingCode)] ?? kinds[String(code)] ?? 'unknown';
  const underlyingError = underlyingCode === 'FETCH_FAILED' || code === 'FETCH_FAILED' ? 'fetch_failed' : null;
  return { ...subject, phase:'tool_execution', origin:'tool_transport', failure_kind:failureKind,
    retryable:nested(machine, "retryable") === false || nested(machine, "details", "retryable") === false ? false : ['network','timeout','rate_limit','service_unavailable'].includes(failureKind),
    machine_code:code ?? null, upstream_code:underlyingCode, underlying_error:underlyingError,
    http_status:httpStatus, exit_code:result.status, signal:result.signal ?? null, credentials_redacted:true };
}


function abortable<T>(operation:PromiseLike<T>|T, signal?:AbortSignal):Promise<T> {
  if (!signal) return Promise.resolve(operation);
  if (signal.aborted) return Promise.reject(signal.reason ?? new DOMException("Aborted", "AbortError"));
  return new Promise<T>((resolve, reject) => {
    const abort = () => reject(signal.reason ?? new DOMException("Aborted", "AbortError"));
    signal.addEventListener("abort", abort, { once: true });
    Promise.resolve(operation).then(resolve, reject).finally(() => signal.removeEventListener("abort", abort));
  });
}

export function evidenceFailureFindings(error:unknown, { phase, subjectId }: {phase:string;subjectId:string|undefined}):Finding[] {
  const { findings, ...details } = recordOrEmpty(field(error,"details"));
  return (findings === undefined ? [{ code: nested(error,"code") ?? "GOAL_EVIDENCE_CHECK_FAILED", message: nested(error,"message") ?? String(error) }] : records(findings))
    .map(finding => ({ ...finding, code:text(finding.code), message:String(finding.message ?? ""), details: { ...details, ...recordOrEmpty(finding.details), phase, subject_id: subjectId } }));
}

function evidenceCollection<I,R>({ items, subject, checkId, phase, deadline, now, startAfter, applicable = () => true, reuse = () => null, completion = () => null, priority = () => 0 }:CollectionOptions<I,R>) {
  const after = items.findIndex(item => subject(item) === startAfter);
  const ordered = (after >= 0 ? [...items.slice(after + 1), ...items.slice(0, after + 1)] : [...items]).sort((a, b) => priority(a) - priority(b));
  const checks:GoalCheck[] = [], findings:Finding[] = [], results:R[] = [], completed:UnknownRecord[] = [];
  const itemForCheck = new Map<GoalCheck,I>();
  let newCompleted = 0;
  let lastAttempted = startAfter ?? null, nextSubject:string|null = null;
  return {
    ordered,
    begin(item:I) {
      const subjectId = subject(item);
      const check:GoalCheck = { phase, check_id: checkId, subject_id: subjectId, status: "passed", applicable: applicable(item) };
      checks.push(check);
      itemForCheck.set(check, item);
      if (!check.applicable) { check.status = "skipped"; check.reason = "not_applicable"; return null; }
      try { reviewTimeRemaining(deadline, { now, phase, subjectId }); }
      catch (error) { this.fail(check, error); nextSubject ??= subjectId; return null; }
      try {
        const reused = reuse(item);
        if (reused) { this.pass(check, reused, true); return null; }
      } catch (error) { this.fail(check, error); return null; }
      lastAttempted = subjectId;
      return check;
    },
    pass(check:GoalCheck, values:R[], reused = false) {
      if (!Array.isArray(values) || values.length === 0 || values.some(value => !successfulEvidenceValue(check.check_id, value))) {
        throw new GoalHarnessError("GOAL_EVIDENCE_RESULT_INVALID", "Evidence check did not return successful data.", { origin:"harness_review", failure_kind:"unknown", retryable:false });
      }
      results.push(...values);
      const saved = completion(checkedItem(itemForCheck.get(check)), values);
      if (saved) { completed.push(saved); if (!reused) newCompleted++; }
    },
    fail(check:GoalCheck, error:unknown) {
      const found = evidenceFailureFindings(error, { phase, subjectId: check.subject_id });
      const exhausted = found.some(f => f.details.failure_kind === "execution_window");
      check.status = exhausted ? "skipped" : "failed";
      if (exhausted) check.reason = "execution_window";
      check.findings = found;
      findings.push(...found);
    },
    finish() {
      if (!nextSubject && findings.some(f => f.details.failure_kind === "execution_window") && ordered.length) {
        const index = ordered.findIndex(item => subject(item) === lastAttempted);
        nextSubject = subject(checkedItem(ordered[(index + 1) % ordered.length]));
      }
      return { valid: checks.every(c => !c.applicable || c.status === "passed") && findings.length === 0,
        checks, findings, results, progress: { next_subject: nextSubject, start_after: lastAttempted, completed, new_completed: newCompleted } };
    },
  };
}

export function collectEvidenceItems<I,R>(options:CollectionOptions<I,R>):CollectedEvidence<R> {
  const collection = evidenceCollection(options);
  for (const item of collection.ordered) {
    const check = collection.begin(item);
    if (!check) continue;
    try { collection.pass(check, options.run(item)); }
    catch (error) { collection.fail(check,error); }
  }
  return collection.finish();
}

async function collectEvidenceItemsAsync<I,R>(options:Omit<CollectionOptions<I,R>,"run"> & {run:(item:I)=>Promise<R[]>}):Promise<CollectedEvidence<R>> {
  const collection = evidenceCollection({...options,run:()=>[]});
  for (const item of collection.ordered) {
    const check = collection.begin(item);
    if (!check) continue;
    try { collection.pass(check, await options.run(item)); }
    catch (error) { collection.fail(check,error); }
  }
  return collection.finish();
}


function successfulEvidenceValue(checkId:string, value:unknown) {
  if (!value || typeof value !== "object" || field(value,"valid") === false || field(value,"ok") === false) return false;
  if (checkId === "uuid_public_read") return typeof field(value,"uuid") === "string" && String(field(value,"uuid")).length > 0 && field(value,"state_code") === 100 && /^sha256:[a-f0-9]{64}$/u.test(String(field(value,"response_sha256") ?? ""));
  if (checkId === "receipt_integrity") return typeof field(value,"receipt_id") === "string" && field(value,"authenticated") === true && Array.isArray(field(value,"candidate_decisions")) && /^sha256:[a-f0-9]{64}$/u.test(String(field(value,"result_sha256") ?? ""));
  if (checkId === "source_original") return typeof field(value,"source_id") === "string" && /^sha256:[a-f0-9]{64}$/u.test(String(field(value,"content_sha256") ?? "")) && typeof field(value,"content_byte_length") === "number" && Number(field(value,"content_byte_length")) > 0;
  return false;
}

function recordOrEmpty(value:unknown):UnknownRecord {return isRecord(value)?value:{};}
function entityMap(entity:string):string {const entities:Record<string,string>={nbsp:" ",amp:"&",lt:"<",gt:">",quot:'"',apos:"'"};return entities[entity] ?? " ";}

function stringCode(error:unknown):string|undefined {const code=errorCode(error);return typeof code === "string"?code:undefined;}
function serialized(value:unknown):string {const result=stableJson(value);if(result===undefined)throw new TypeError("Expected serialized evidence");return result;}
