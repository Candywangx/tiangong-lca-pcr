import { execFileSync } from "node:child_process";
import {
  readFileSync,
  existsSync,
  mkdirSync,
  renameSync,
  rmSync,
  openSync,
  fsyncSync,
  closeSync,
  lstatSync,
} from "node:fs";
import path from "node:path";
import { randomUUID } from "node:crypto";
import { Ajv2020 } from "ajv/dist/2020.js";
import { GoalEventStore } from "./event-store.ts";
import { GoalHarnessError, selectRecovery } from "./errors.ts";
import { withGoalLock } from "./lock.ts";
import {
  readArtifact,
  artifactSha256,
  stableArtifactJson,
  writeArtifactExclusive,
  withArtifactDirectory,
} from "./artifact-io.ts";
import {
  loadReportReceiptEvidence,
  auditHybridSearchReceipts,
} from "./uuid-search-receipts.ts";
import { auditReportedUuids } from "./evidence-audit.ts";
import { reviewAuthorWorktree, inspectAuthorCommit, completeAuthorReviewIdentity, readAuthorReviewResult } from "./author-review.ts";
import { assessRequiredReview, reviewTimeRemaining, failedReview } from "./review-assessment.ts";
import { validateAuthorReport } from "./author-gates.ts";
import { assembleAuthorReport } from "./report-assembler.ts";
export { assembleAuthorReport } from "./report-assembler.ts";
import { resolveAuthorContract, assertAuthorArtifactVersions } from "./author-contract.ts";
import { resolveAuthorContentBaseCommit } from "./author-baseline.ts";

import { record, records, strings, text, field, isRecord, errorCode, errorMessage, json, jsonRecord, array, goalTask } from "./domain.ts";
import type { GoalTask, GoalConfig, GoalTools, GoalEvent, UnknownRecord } from "./domain.ts";
import type { AssembledAuthorReport, ReportReceiptAudit, UuidAdoptionClaim } from "./report-assembler.ts";
import type { AuthorReviewOptions } from "./author-review.ts";
export interface PreparedReportSubmission {prepared_report_id:string;report_sha256:string;commit_sha:string}
export interface PreparationReport extends AssembledAuthorReport {commit_sha:string;files:string[];uuid_audits:UuidAdoptionClaim[];inventory:UnknownRecord & {unresolved:UnknownRecord[]};receipt_ids?:string[]}
interface BoundReportTask extends GoalTask {worktree_path:string;pcr_path:string;allowed_files:string[]}
export interface PrepareAuthorReportOptions {stateDir:string;config:Pick<GoalConfig,"project_root"|"goal_id"> & {tools?:GoalTools};taskId:string;draftPath:string;cwd?:string;eventStore?:GoalEventStore|null;reviewFn?:(options:AuthorReviewOptions)=>unknown;auditUuidsFn?:(options:{report:unknown;tiangongCliRoot?:string|undefined;collect:true;phase:string;deadline:number;startAfter?:string|null|undefined})=>unknown;deadline?:number}
export interface ResolvedPreparedReport {report:PreparationReport;report_bytes:Buffer;report_path:string;manifest:UnknownRecord}
export interface ResolvedPreparationFailure {failure:UnknownRecord & {code:string;message:string;details:UnknownRecord};manifest:UnknownRecord;failure_path:string}
function reportInput(input:unknown):PreparationReport {
 const value=record(input,"preparation report");
 const uuidAudits=records(value.uuid_audits ?? []).map(claim=>({...claim,uuid:text(claim.uuid),hybrid_search_receipt_id:text(claim.hybrid_search_receipt_id)}));
 const inventory=record(value.inventory,"report inventory");
 return {...value,commit_sha:text(value.commit_sha),files:strings(value.files),uuid_audits:uuidAudits,inventory:{...inventory,unresolved:records(inventory.unresolved ?? [])},
  ...(value.receipt_ids===undefined?{}:{receipt_ids:strings(value.receipt_ids)}),
  ...(value.hybrid_search_receipt_ids===undefined?{}:{hybrid_search_receipt_ids:strings(value.hybrid_search_receipt_ids)}),
  ...(value.rejected_uuid_candidates===undefined?{}:{rejected_uuid_candidates:records(value.rejected_uuid_candidates).map(item=>({...item,uuid:text(item.uuid),receipt_id:text(item.receipt_id)}))})};
}
function boundTask(input:unknown):BoundReportTask {const task=goalTask(input);return {...task,worktree_path:text(task.worktree_path),pcr_path:text(task.pcr_path),allowed_files:strings(task.allowed_files)};}
function evidenceResults(value:unknown):UnknownRecord[] {return records(Array.isArray(value)?value:(field(value,"results") ?? []));}
function receiptResults(value:unknown):ReportReceiptAudit[] {return evidenceResults(value).map(receipt=>({...receipt,receipt_id:text(receipt.receipt_id),candidate_decisions:records(receipt.candidate_decisions).map(decision=>({...decision,uuid:text(decision.uuid),decision:text(decision.decision),...(decision.direct_read==null?{}:{direct_read:record(decision.direct_read)})})),...(receipt.scope===undefined?{}:{scope:text(receipt.scope)})}));}
function progressAfter(value:unknown):string|null|undefined {if(value==null)return value;return text(value);}
const ajv = new Ajv2020({ allErrors: true, strict: true });
ajv.addFormat(
  "uuid",
  /^[0-9a-f]{8}-[0-9a-f]{4}-[1-8][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i,
);
const draftValidator = ajv.compile(
  jsonRecord(
    readFileSync(
      new URL("../schemas/goal-author-draft.schema.json", import.meta.url),
    ).toString("utf8"),
  ),
);

export function prepareAuthorReport(options:PrepareAuthorReportOptions):PreparedReportSubmission {
  const eventStore = reportEventStore(options.stateDir, options.eventStore);
  try { return prepareBoundAuthorReport({ ...options, eventStore }); }
  catch (error) {
    if (field(field(error,"details"),"preparation_failure_id")) throw error;
    const { stateDir, config, taskId, draftPath, cwd = process.cwd() } = options;
    const state = eventStore.rebuild(), task = state.tasks.find(t => t.id === taskId);
    // An invalid caller/task/path has no authority to publish task observations.
    if (config.goal_id !== state.goal_id || !path.isAbsolute(draftPath)) throw error;
    assertPreparingTask(task, cwd);
    const draftBytes = readArtifact(draftPath);
    let draft:unknown;
    try { draft = json(draftBytes.toString("utf8")); } catch { draft = null; }
    const normalized = error instanceof SyntaxError
      ? new GoalHarnessError("GOAL_REPORT_DRAFT_INVALID", "Draft is not valid JSON.", { origin: "harness_review", phase: "preparation", failure_kind: "author_claim" })
      : error;
    const reference = publishPreparationFailure({ stateDir, task, cwd, binding: taskBinding(state.goal_id, task),
      content: { files: readContentFingerprints(task) }, contentVerified: false,
      commitSha: field(draft,"commit_sha") ?? null, draftBytes, receiptAudits: [], error: normalized, uuidReads: [] });
    throw new GoalHarnessError(typeof errorCode(normalized)==="string"?String(errorCode(normalized)):"GOAL_REPORT_PREPARATION_FAILED", errorMessage(normalized), {
      ...(isRecord(field(normalized,"details"))?record(field(normalized,"details")):{}), preparation_failure_id: reference,
    });
  }
}

function prepareBoundAuthorReport({
  eventStore,
  config,
  stateDir,
  taskId,
  draftPath,
  cwd = process.cwd(),
  reviewFn = reviewAuthorWorktree,
  auditUuidsFn = auditReportedUuids,
  deadline = Date.now() + 60_000,
}: PrepareAuthorReportOptions & {eventStore:GoalEventStore}):PreparedReportSubmission {
  const state = eventStore.rebuild(),
    task = state.tasks.find((t) => t.id === taskId);
  if (config.goal_id !== state.goal_id)
    fail("GOAL_REPORT_BINDING_MISMATCH", "Config and author state belong to different goals.");
  assertPreparingTask(task, cwd);
  if (!path.isAbsolute(draftPath))
    fail("GOAL_REPORT_DRAFT_INVALID", "Draft path must be absolute.");
  const draftBytes=readArtifact(draftPath), draftValue=json(draftBytes.toString("utf8"));
  if (!draftValidator(draftValue))
    fail(
      "GOAL_REPORT_DRAFT_INVALID",
      "Author draft failed Schema validation.",
      { findings: (draftValidator.errors ?? []).map(detail => ({ code: "GOAL_REPORT_DRAFT_INVALID", message: detail.message, detail,
        details: { phase: "preparation", origin: "harness_review", failure_kind: "author_claim" } })) },
    );
  const draft=reportInput(draftValue);
  assertAuthorArtifactVersions({task,draftVersion:draft.schema_version});
  if (draft.boundary_review != null)
    fail(
      "GOAL_REPORT_DRAFT_INVALID",
      "Boundary referrals use the explicit referral output, not a completion report.",
    );
  assertReportTask(draft, task);
  const binding = taskBinding(state.goal_id, task),
    content = inspectContent(task, draft.commit_sha, deadline);
  const ids = [
    ...new Set([
      ...(draft.receipt_ids ?? []),
      ...(draft.hybrid_search_receipt_ids ?? []),
      ...(draft.uuid_audits ?? []).map((a) => a.hybrid_search_receipt_id),
      ...(draft.rejected_uuid_candidates ?? []).map((a) => a.receipt_id),
      ...(draft.inventory?.unresolved ?? []).flatMap(
        (r) => array(r.hybrid_search_receipt_ids ?? []),
      ),
    ]),
  ].sort();
  const preliminary = { ...draft, hybrid_search_receipt_ids: ids };
  let receiptAudits:ReportReceiptAudit[]=[],report:PreparationReport|null=null,review:UnknownRecord={},uuidReads:UnknownRecord[]=[],assessment:UnknownRecord={};
  const phase = "preparation";
  const prior = resolvePreparationFailure({ stateDir, task, forCommit: draft.commit_sha, deadline, eventStore });
  const progress = field(prior?.failure.details,"progress") ?? {};
  const capture = (operation:()=>unknown):unknown => {
    try { return operation(); }
    catch (error) { return { valid: false, results: [], checks: [], findings: selectRecovery(error).findings }; }
  };
  try {
    const localReceipts = capture(() => loadReportReceiptEvidence({ report: preliminary, stateDir, task, eventStore,
      collect: true, phase, deadline, startAfter: progressAfter(field(field(progress,"receipts"),"start_after")) }));
    receiptAudits = receiptResults(localReceipts);
    const assemblyFindings:UnknownRecord[] = [];
    if (field(localReceipts,"valid") !== false) {
      try {
        report = reportInput(assembleAuthorReport({ draft, receiptAudits }));
        assertAuthorArtifactVersions({task,reportVersion:report.schema_version});
        const schema = validateAuthorReport(report);
        if (!schema.valid) throw new GoalHarnessError("GOAL_REPORT_DRAFT_INVALID", "Assembled report failed Schema validation.", {
          phase, origin: "harness_review", failure_kind: "author_claim", findings: schema.errors.map(detail => ({code:"GOAL_REPORT_DRAFT_INVALID",message:detail.message,detail})),
        });
      } catch (error) { assemblyFindings.push(...selectRecovery(error).findings); report = null; }
    }
    const baselineCommit = resolveAuthorContentBaseCommit({ projectRoot: config.project_root, task, fallbackCommit: text(field(state.baseline,"commit")) });
    // Local independent checks run before external I/O can consume the window.
    try { review = record(reviewFn({ projectRoot: config.project_root, baselineCommit,
      worktreePath: task.worktree_path, task: { ...task, goal_id: config.goal_id },
      report: report ?? draft, reportAvailable: Boolean(report), verifiedUuidReads: [], stateDir, phase, deadline }),"independent author review"); }
    catch (error) { review = failedReview(error, {phase,task}); }
    const unavailableCauses = [...assemblyFindings, ...records(field(localReceipts,"findings") ?? [])];
    if (!report) review.findings = [...records(review.findings ?? []), ...unavailableCauses];
    const uuidAudit = report ? capture(() => auditUuidsFn({ report, tiangongCliRoot: config.tools?.tiangong_cli_root,
      collect: true, phase, deadline, startAfter: progressAfter(field(field(progress,"uuids"),"start_after")) }))
      : { valid: false, results: [], findings: unavailableCauses, checks: [...new Set([
        ...array(field(review.subjects,"uuid_ids") ?? []), ...(draft.uuid_audits ?? []).map(a => a.uuid.toLowerCase()),
      ])].map(subject_id => ({phase,check_id:"uuid_public_read",subject_id,status:"skipped",applicable:true,
        reason:"report_unavailable",findings:unavailableCauses,depends_on:[{check_id:"report_assembly",subject_id:task.pcr_path}]})) };
    uuidReads=evidenceResults(uuidAudit);
    const receiptAudit = report ? capture(() => auditHybridSearchReceipts({ report, stateDir, task, eventStore,
      verifiedUuidReads: uuidReads, collect: true, phase, deadline, startAfter: progressAfter(field(field(progress,"receipts"),"start_after")) })) : { ...(isRecord(localReceipts)?localReceipts:{}), valid: false,
        findings: [...records(field(localReceipts,"findings") ?? []), ...unavailableCauses],
        checks: [...records(field(localReceipts,"checks") ?? []), ...(draft.uuid_audits ?? []).map(claim => ({
          phase, check_id: "receipt_adoption", subject_id: `${claim.hybrid_search_receipt_id}:${claim.uuid.toLowerCase()}`,
          applicable: true, status: "skipped", reason: "report_unavailable", findings: unavailableCauses,
          depends_on: [{check_id:"report_assembly",subject_id:task.pcr_path}],
        }))] };
    if (review.quality_context && report) review = completeAuthorReviewIdentity({ review:readAuthorReviewResult(review), task, report, verifiedUuidReads: uuidReads, phase, deadline });
    assessment = record(assessRequiredReview({ phase, task, report: report ?? draft, review, uuidAudit, receiptAudit }));
    records(assessment.findings).push(...assemblyFindings);
    assessment.valid = assessment.valid === true && assemblyFindings.length === 0 && Boolean(report);
    assessment.progress = { uuids: field(uuidAudit,"progress") ?? null, receipts: field(receiptAudit,"progress") ?? null };
    assessment.uuid_reads = uuidReads;
    assessment.review = review;
    if (!assessment.valid) {
      const decision = selectRecovery(assessment.findings);
      const primary = decision.findings.find(f => f.category === decision.category) ?? decision.findings[0];
      throw new GoalHarnessError(primary?.code ?? "GOAL_REPORT_PREFLIGHT_FAILED", "Report preparation has failed or incomplete required checks.", {
        ...primary?.details, ...assessment,
      });
    }
  } catch (error) {
    const reference = publishPreparationFailure({ stateDir, task, cwd, binding, content, draftBytes,
      receiptAudits, error, uuidReads });
    throw new GoalHarnessError(typeof errorCode(error)==="string"?String(errorCode(error)):"GOAL_REPORT_PREPARATION_FAILED", errorMessage(error), {
      ...(isRecord(field(error,"details"))?record(field(error,"details")):{}), preparation_failure_id: reference,
    });
  }
  if(!report)fail("GOAL_REPORT_PREFLIGHT_FAILED","Required report assembly is unavailable.");
  const acceptedReport=report;
  const reportBytes = Buffer.from(`${JSON.stringify(report, null, 2)}\n`);
  const receiptBindings = receiptAudits.map((r) => ({
    receipt_id: r.receipt_id,
    integrity: r.integrity,
  }));
  const input = {
    schema_version: 1,
    binding,
    commit_sha: report.commit_sha,
    files: content.files,
    draft_sha256: artifactSha256(draftBytes),
    report_sha256: artifactSha256(reportBytes),
    receipt_bindings: receiptBindings,
    check_contract: 1,
  };
  const id = artifactSha256(stableArtifactJson(input)).slice(7);
  const manifest = {
    ...input,
    prepared_report_id: id,
    checks: { measurement: field(review.builder,"measurement"), sync: {
      first_run_clean: field(review.sync,"first_run_clean"), second_run_clean: field(review.sync,"second_run_clean"),
    } },
    assessment: { phase: assessment.phase, required_checks: assessment.required_checks, checks: assessment.checks, findings: [] },
  };
  const manifestBytes = Buffer.from(`${JSON.stringify(manifest, null, 2)}\n`);
  const submission = {
    prepared_report_id: id,
    report_sha256: input.report_sha256,
    commit_sha: report.commit_sha,
  };
  return withGoalLock(stateDir, "prepare-author-report", () => {
    const current = new GoalEventStore({ stateDir }),
      fresh = current.rebuild(),
      latest = fresh.tasks.find((t) => t.id === task.id);
    assertPreparingTask(latest, cwd);
    if (
      bindingJson(taskBinding(fresh.goal_id, latest)) !==
      bindingJson(binding)
    )
      fail(
        "GOAL_REPORT_BINDING_MISMATCH",
        "Task changed during report preparation.",
      );
    if (
      artifactSha256(readArtifact(draftPath)) !== input.draft_sha256 ||
      stableArtifactJson(inspectContent(latest, acceptedReport.commit_sha, deadline).files) !==
        stableArtifactJson(content.files)
    )
      fail(
        "GOAL_REPORT_BINDING_MISMATCH",
        "Author inputs changed during report preparation.",
      );
    const nowReceipts = loadReportReceiptEvidence({
      report:acceptedReport,
      stateDir,
      task: latest, deadline, phase: "preparation", eventStore: current,
    });
    if (
      stableArtifactJson(
        receiptResults(nowReceipts).map((r) => ({
          receipt_id: r.receipt_id,
          integrity: r.integrity,
        })),
      ) !== stableArtifactJson(receiptBindings)
    )
      fail(
        "GOAL_REPORT_BINDING_MISMATCH",
        "Receipt set changed during preparation.",
      );
    const directory = reportDirectory(stateDir, task, id),
      eventId = `author-report-prepared-${id}`;
    const prior = current.getEvent(eventId);
    if (prior) {
      resolvePreparedReport({ stateDir, task: latest, submission, deadline, eventStore: current });
      return submission;
    }
    // Publish a complete directory before recording it as ready. Orphaned complete
    // directories after a crash are accepted only if all current bytes still match.
    publishPreparedDirectory(directory, {
      "draft.json": draftBytes,
      "report.json": reportBytes,
      "manifest.json": manifestBytes,
    });
    current.append({
      event_id: eventId,
      type: "author_report_prepared",
      payload: {
        ...submission,
        binding,
        manifest_sha256: artifactSha256(manifestBytes),
      },
    });
    return submission;
  });
}

export function resolvePreparedReport({ stateDir, task:inputTask, submission:inputSubmission, deadline = Infinity, eventStore = null }: {stateDir:string;task:unknown;submission:unknown;deadline?:number;eventStore?:GoalEventStore|null}):ResolvedPreparedReport {
  const task=boundTask(inputTask);
  const submission=isRecord(inputSubmission)?inputSubmission:null;
  reviewTimeRemaining(deadline, {phase:"harvest",subjectId:task?.id});
  if (
    task?.authoring_contract_version !== 2 ||
    !submission ||
    Object.keys(submission).sort().join(",") !==
      "commit_sha,prepared_report_id,report_sha256" ||
    !(typeof submission.prepared_report_id==="string" && /^[a-f0-9]{64}$/.test(submission.prepared_report_id))
  )
    fail(
      "GOAL_REPORT_REFERENCE_INVALID",
      "Expected the exact prepared-report reference for this task.",
    );
  const store = reportEventStore(stateDir, eventStore),
    state = store.rebuild();
  const authoritative = state.tasks.find((t) => t.id === task.id);
  if (
    !authoritative ||
    bindingJson(taskBinding(state.goal_id, authoritative)) !==
      bindingJson(taskBinding(state.goal_id, task))
  )
    fail(
      "GOAL_REPORT_BINDING_MISMATCH",
      "The supplied task snapshot is no longer current.",
    );
  const event = store.getEvent(`author-report-prepared-${submission.prepared_report_id}`);
  if (
    !event || event.type !== "author_report_prepared" ||
    bindingJson(event.payload.binding) !==
      bindingJson(taskBinding(state.goal_id, task))
  )
    fail(
      "GOAL_REPORT_BINDING_MISMATCH",
      "Report reference belongs to a different task, attempt, turn or workspace.",
    );
  for (const key of ["prepared_report_id", "report_sha256", "commit_sha"])
    if (event.payload[key] !== submission[key])
      fail(
        "GOAL_REPORT_BINDING_MISMATCH",
        "Submission differs from the original preparation record.",
      );
  const directory = reportDirectory(
    stateDir,
    task,
    submission.prepared_report_id,
  );
  const manifestBytes = readArtifact(path.join(directory, "manifest.json"), {
      root: stateDir,
    }),
    reportBytes = readArtifact(path.join(directory, "report.json"), {
      root: stateDir,
    }),
    draftBytes = readArtifact(path.join(directory, "draft.json"), {
      root: stateDir,
    });
  if (
    artifactSha256(manifestBytes) !== event.payload.manifest_sha256 ||
    artifactSha256(reportBytes) !== submission.report_sha256
  )
    fail("GOAL_REPORT_BINDING_MISMATCH", "Prepared artifact bytes changed.");
  const manifest=jsonRecord(manifestBytes.toString("utf8")),report=reportInput(json(reportBytes.toString("utf8")));
  if (
    artifactSha256(draftBytes) !== manifest.draft_sha256 ||
    report.commit_sha !== submission.commit_sha
  )
    fail("GOAL_REPORT_BINDING_MISMATCH", "Draft or commit binding changed.");
  assertAuthorArtifactVersions({task,draftVersion:field(json(draftBytes.toString("utf8")),"schema_version"),reportVersion:report.schema_version,manifestBinding:manifest.binding});
  assertReportTask(report, task);
  if (
    stableArtifactJson(inspectContent(task, report.commit_sha, deadline).files) !==
    stableArtifactJson(manifest.files)
  )
    fail(
      "GOAL_REPORT_BINDING_MISMATCH",
      "PCR content changed after preparation.",
    );
  const receipts = loadReportReceiptEvidence({ report, stateDir, task, deadline, eventStore: store });
  if (
    stableArtifactJson(
      receiptResults(receipts).map((r) => ({
        receipt_id: r.receipt_id,
        integrity: r.integrity,
      })),
    ) !== stableArtifactJson(manifest.receipt_bindings)
  )
    fail(
      "GOAL_REPORT_BINDING_MISMATCH",
      "Finalized evidence changed after preparation.",
    );
  return {
    report,
    report_bytes: reportBytes,
    report_path: path.join(directory, "report.json"),
    manifest,
  };
}

// Failed preparation is independent Harness evidence, never a prepared report.
// It deliberately uses the existing artifact/event seals rather than trusting a
// new author-controlled submission field or mutating the task's retry counters.
function publishPreparationFailure({ stateDir, task, cwd, binding, content, draftBytes, receiptAudits, error, uuidReads,
  contentVerified = true, commitSha = field(json(draftBytes.toString("utf8")),"commit_sha") }: {stateDir:string;task:BoundReportTask;cwd:string;binding:UnknownRecord;content:{files:Record<string,string|null>};draftBytes:Buffer;receiptAudits:ReportReceiptAudit[];error:unknown;uuidReads:UnknownRecord[];contentVerified?:boolean;commitSha?:unknown}) {
  const failure = { code: typeof errorCode(error)==="string"?String(errorCode(error)):"GOAL_REPORT_PREPARATION_FAILED", message: errorMessage(error),
    details: field(error,"details") ?? {}, uuid_reads: Array.isArray(uuidReads) ? uuidReads : [] };
  const failureBytes = Buffer.from(`${JSON.stringify(failure, null, 2)}\n`);
  const input = { schema_version: 1, binding, files: content.files, content_verified: contentVerified,
    commit_sha: commitSha, draft_sha256: artifactSha256(draftBytes),
    failure_sha256: artifactSha256(failureBytes),
    receipt_bindings: receiptAudits.map(r => ({ receipt_id: r.receipt_id, integrity: r.integrity })) };
  const id = artifactSha256(stableArtifactJson(input)).slice(7);
  const manifestBytes = Buffer.from(`${JSON.stringify({ ...input, preparation_failure_id: id }, null, 2)}\n`);
  return withGoalLock(stateDir, "record-preparation-failure", () => {
    const store = new GoalEventStore({ stateDir }), state = store.rebuild();
    const latest = state.tasks.find(t => t.id === task.id);
    assertPreparingTask(latest, cwd);
    if (bindingJson(taskBinding(state.goal_id, latest)) !== bindingJson(binding)
      || stableArtifactJson(readContentFingerprints(latest)) !== stableArtifactJson(content.files))
      fail("GOAL_REPORT_BINDING_MISMATCH", "Inputs changed during failed preparation.");
    publishPreparedDirectory(failureDirectory(stateDir, task, id), {
      "draft.json": draftBytes, "failure.json": failureBytes, "manifest.json": manifestBytes,
    });
    store.append({ event_id: `author-report-preparation-failed-${id}`, type: "author_report_preparation_failed",
      payload: { preparation_failure_id: id, binding, manifest_sha256: artifactSha256(manifestBytes) } });
    return id;
  });
}

export function resolvePreparationFailure({ stateDir, task:inputTask, forCommit = null, deadline = Infinity, eventStore = null }: {stateDir?:string|undefined;task:unknown;forCommit?:string|null;deadline?:number;eventStore?:GoalEventStore|null}):ResolvedPreparationFailure|null {
  if (!stateDir) return null;
  const task=boundTask(inputTask);
  const store = reportEventStore(stateDir, eventStore), state = store.rebuild();
  const latest = state.tasks.find(t => t.id === task.id);
  const binding = taskBinding(state.goal_id, task);
  if (!latest || bindingJson(taskBinding(state.goal_id, latest)) !== bindingJson(binding))
    fail("GOAL_REPORT_BINDING_MISMATCH", "Preparation failure requires the current task snapshot.");
  let event:GoalEvent|null = null;
  const candidates = [
    ...store.getEventsByType("author_report_preparation_failed"),
    ...store.getEventsByType("author_report_prepared"),
  ].sort((left, right) => left.sequence - right.sequence);
  for (const candidate of candidates) {
    if (bindingJson(candidate.payload?.binding) !== bindingJson(binding)) continue;
    if (candidate.type === "author_report_preparation_failed") event = candidate;
    if (candidate.type === "author_report_prepared") event = null;
  }
  if (!event) return null;
  const directory = failureDirectory(stateDir, task, event.payload.preparation_failure_id);
  const manifestBytes = readArtifact(path.join(directory, "manifest.json"), { root: stateDir });
  if (artifactSha256(manifestBytes) !== event.payload.manifest_sha256)
    fail("GOAL_REPORT_BINDING_MISMATCH", "Preparation failure manifest changed.");
  const manifest=jsonRecord(manifestBytes.toString("utf8"));
  if (forCommit && manifest.commit_sha !== forCommit) return null;
  const failurePath = path.join(directory, "failure.json"), failureBytes = readArtifact(failurePath, { root: stateDir });
  const draftBytes = readArtifact(path.join(directory, "draft.json"), { root: stateDir });
  if (artifactSha256(failureBytes) !== manifest.failure_sha256 || artifactSha256(draftBytes) !== manifest.draft_sha256
    || bindingJson(manifest.binding) !== bindingJson(binding)
    || stableArtifactJson(manifest.content_verified === false ? readContentFingerprints(task) : inspectContent(task, text(manifest.commit_sha), deadline).files) !== stableArtifactJson(manifest.files))
    fail("GOAL_REPORT_BINDING_MISMATCH", "Preparation failure input or artifact binding changed.");
  const draft = manifest.content_verified === false ? null : reportInput(json(draftBytes.toString("utf8")));
  if (draft) { assertAuthorArtifactVersions({task,draftVersion:draft.schema_version,manifestBinding:manifest.binding}); assertReportTask(draft, task); }
  // Only successfully verified receipts are asserted here. A failed receipt is
  // recorded as a finding; it cannot masquerade as independently verified data.
  if (records(manifest.receipt_bindings).length) {
    const sealed = new Set(records(manifest.receipt_bindings).map(r => r.receipt_id));
    const receipts = loadReportReceiptEvidence({ report: {
      hybrid_search_receipt_ids: [...sealed],
      uuid_audits: (draft?.uuid_audits ?? []).filter(r => sealed.has(r.hybrid_search_receipt_id)),
      rejected_uuid_candidates: (draft?.rejected_uuid_candidates ?? []).filter(r => sealed.has(r.receipt_id)),
    }, stateDir, task, deadline, eventStore: store });
    if (stableArtifactJson(receiptResults(receipts).map(r => ({ receipt_id: r.receipt_id, integrity: r.integrity }))) !== stableArtifactJson(manifest.receipt_bindings))
      fail("GOAL_REPORT_BINDING_MISMATCH", "Preparation failure receipt binding changed.");
  }
  const failure=jsonRecord(failureBytes.toString("utf8"));
  return {failure:{...failure,code:text(failure.code),message:text(failure.message),details:record(failure.details)},manifest,failure_path:failurePath};
}

function reportEventStore(stateDir:string,eventStore:GoalEventStore|null|undefined):GoalEventStore {
  if (eventStore && path.resolve(eventStore.stateDir) !== path.resolve(stateDir))
    fail("GOAL_REPORT_BINDING_MISMATCH", "Report query index belongs to another Goal directory.");
  return eventStore ?? new GoalEventStore({ stateDir });
}

function readContentFingerprints(task:BoundReportTask):Record<string,string|null> {
  return Object.fromEntries(task.allowed_files.map(file => {
    const absolute = path.resolve(task.worktree_path, file);
    if (!absolute.startsWith(`${path.resolve(task.worktree_path)}${path.sep}`)) fail("GOAL_ARTIFACT_UNSAFE", "PCR file escapes its worktree.");
    const fingerprint = withArtifactDirectory(path.dirname(absolute), directory => {
      try { lstatSync(path.join(directory, path.basename(absolute))); }
      catch (error) { if (errorCode(error) === "ENOENT") return null; throw error; }
      return artifactSha256(readArtifact(absolute, { root: task.worktree_path }));
    });
    return [file, fingerprint];
  }));
}

function failureDirectory(stateDir:string,task:GoalTask,id:unknown):string {
  if (typeof id!=="string" || !/^[a-f0-9]{64}$/.test(id)) fail("GOAL_REPORT_BINDING_MISMATCH", "Invalid preparation failure identity.");
  return reportDirectory(stateDir, task, `failed-${id}`);
}
function inspectContent(task:BoundReportTask,commit:string,deadline = Infinity) {
  const root = task.worktree_path;
  if (
    git(root, ["rev-parse", "HEAD"], deadline) !== commit ||
    git(root, ["status", "--porcelain=v1", "--untracked-files=all"], deadline)
  )
    fail(
      "GOAL_REPORT_COMMIT_INVALID",
      "Report preparation requires a clean committed author worktree.",
    );
  const baseline = task.author_content_base_commit ?? task.author_base_commit;
  const inspected = inspectAuthorCommit({
    projectRoot: root,
    baselineCommit: text(baseline),
    authorCommit: commit, deadline, phase: "preparation",
  });
  if (
    stableArtifactJson([...inspected.changed_files].sort()) !==
    stableArtifactJson([...task.allowed_files].sort())
  )
    fail(
      "GOAL_REPORT_COMMIT_INVALID",
      "Commit changes must match the four authorized files.",
    );
  const files:Record<string,string> = {};
  for (const file of task.allowed_files) {
    const bytes = readArtifact(path.resolve(root, file), { root });
    const committed = preparedGit(root, ["show", `${commit}:${file}`], {deadline,encoding:"buffer",maxBuffer:4*1024*1024});
    if (!bytes.equals(committed))
      fail(
        "GOAL_REPORT_COMMIT_INVALID",
        "Working bytes differ from the committed PCR.",
      );
    files[file] = artifactSha256(bytes);
  }
  return { files };
}
function bindingJson(binding:unknown):string|null {
  return binding == null ? null : stableArtifactJson({...record(binding),...resolveAuthorContract(binding)});
}
function taskBinding(goalId:unknown,task:GoalTask):UnknownRecord {
  resolveAuthorContract(task);
  return {
    goal_id: goalId,
    task_id: task.id,
    attempt: task.attempt,
    turn_id: task.turn_id,
    pcr_path: task.pcr_path,
    worktree_path: task.worktree_path,
    allowed_files: task.allowed_files,
    authoring_contract_version: task.authoring_contract_version,
    ...(task.author_draft_schema_version !== undefined ? {author_draft_schema_version:task.author_draft_schema_version} : {}),
    ...(task.author_report_schema_version !== undefined ? {author_report_schema_version:task.author_report_schema_version} : {}),
  };
}
function assertPreparingTask(task:GoalTask|undefined,cwd:string):asserts task is BoundReportTask {
  if (
    !task ||
    task.authoring_contract_version !== 2 ||
    !task.turn_id ||
    task.coordinator_hold ||
    !["authoring", "authoring_repair"].includes(task.state)
  )
    fail(
      "GOAL_REPORT_TASK_INELIGIBLE",
      "Preparation is available only to active tasks pinned to authoring contract 2.",
    );
  if(typeof task.worktree_path!=="string" || typeof task.pcr_path!=="string" || !Array.isArray(task.allowed_files) || !task.allowed_files.every(file=>typeof file==="string")) fail("GOAL_REPORT_TASK_INELIGIBLE","Task workspace and authorization must be bound.");
  if (path.resolve(cwd) !== path.resolve(task.worktree_path))
    fail(
      "GOAL_REPORT_TASK_INELIGIBLE",
      "Run preparation in the bound author worktree.",
    );
}
function assertReportTask(report:PreparationReport,task:BoundReportTask) {
  const expected = [
    "manifest.yaml",
    "pcr.en-US.md",
    "pcr.zh-CN.md",
    "structured.yaml",
  ]
    .map((f) => `${task.pcr_path}/${f}`)
    .sort();
  if (
    report.cpc_code !== task.cpc_code ||
    report.pcr_path !== task.pcr_path ||
    report.queue_action !== task.queue_action ||
    stableArtifactJson([...report.files].sort()) !==
      stableArtifactJson(expected) ||
    stableArtifactJson([...task.allowed_files].sort()) !==
      stableArtifactJson(expected)
  )
    fail(
      "GOAL_REPORT_BINDING_MISMATCH",
      "Draft identity differs from the assigned PCR and exact file allowlist.",
    );
}
function reportDirectory(stateDir:string,task:GoalTask,id:string):string {
  return path.join(
    stateDir,
    "authors",
    `prepared-${artifactSha256(task.id).slice(7, 31)}`,
    id,
  );
}
function publishPreparedDirectory(directory:string,files:Record<string,Buffer>) {
  withArtifactDirectory(
    path.dirname(directory),
    (parent) => {
      const target = path.join(parent, path.basename(directory));
      if (existsSync(target)) {
        for (const [file, bytes] of Object.entries(files))
          if (!readArtifact(path.join(directory, file)).equals(bytes))
            fail(
              "GOAL_REPORT_BINDING_MISMATCH",
              "An existing prepared directory has different bytes.",
            );
        return;
      }
      const name = `.stage-${randomUUID()}`,
        stage = path.join(parent, name);
      mkdirSync(stage, { mode: 0o700 });
      try {
        for (const [file, bytes] of Object.entries(files))
          writeArtifactExclusive(
            path.join(path.dirname(directory), name, file),
            bytes,
          );
        renameSync(stage, target);
        const fd = openSync(parent, "r");
        try {
          fsyncSync(fd);
        } finally {
          closeSync(fd);
        }
      } finally {
        rmSync(stage, { recursive: true, force: true });
      }
    },
    { create: true },
  );
}
function preparedGit(cwd:string,args:string[],options:{deadline?:number;encoding:"buffer";maxBuffer?:number}):Buffer;
function preparedGit(cwd:string,args:string[],options?:{deadline?:number;encoding?:"utf8";maxBuffer?:number}):string;
function preparedGit(cwd:string,args:string[],{deadline = Infinity, encoding = "utf8", maxBuffer = 1024 * 1024}:{deadline?:number;encoding?:"utf8"|"buffer";maxBuffer?:number} = {}):Buffer|string {
  try {
    return execFileSync("git", args, {cwd,encoding,maxBuffer,stdio:["ignore","pipe","pipe"],
      timeout:reviewTimeRemaining(deadline,{phase:"preparation",subjectId:cwd})});
  } catch(error) {
    if(errorCode(error) === "ETIMEDOUT") throw new GoalHarnessError("GOAL_REVIEW_WINDOW_EXHAUSTED", "A preparation command exceeded its execution window.", {
      phase:"preparation",origin:"harness_deadline",failure_kind:"execution_window",retryable:false,subject_id:cwd,
    });
    throw error;
  }
}
const git = (cwd:string,args:string[],deadline=Infinity) => preparedGit(cwd,args,{deadline}).trim();
function fail(code:string,message:string,details:UnknownRecord = {}):never {
  throw new GoalHarnessError(code, message, details);
}
