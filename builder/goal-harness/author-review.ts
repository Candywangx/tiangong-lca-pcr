import { execFileSync, spawnSync, type SpawnSyncOptionsWithStringEncoding } from "node:child_process";
import { existsSync, lstatSync, mkdirSync, readFileSync, realpathSync } from "node:fs";
import { createHash, randomUUID } from "node:crypto";
import path from "node:path";

import { inspectPcrDirectory } from "../lib/lint-rules.ts";
import { parsePcrMarkdownToStructured } from "../lib/markdown-projection.ts";
import { parseYaml } from "../../packages/pcr-core/src/yaml-lite.ts";
import { assertAuthorQuality, flattenProcessInventory, pcrSourceIds, referenceProductRows } from "./author-gates.ts";
import { reviewTimeRemaining } from "./review-time.ts";
import { GoalHarnessError } from "./errors.ts";

import { field, record, records, array, strings, text, isRecord, errorCode, errorMessage, json } from "./domain.ts";
import type { UnknownRecord } from "./domain.ts";
import type { AuthorQualityOptions } from "./author-gates.ts";
import type { PcrInspectionOptions } from "../lib/lint-rules.ts";
export interface AuthorReviewTask extends UnknownRecord {id?:string;goal_id?:string;cpc_code?:string;pcr_path?:unknown;allowed_files?:unknown;authoring_contract_version?:number}
interface ReviewCheck extends UnknownRecord {phase:string;check_id:string;subject_id:string;status:string;findings:UnknownRecord[]}
interface ReviewWindow {deadline?: number;phase?:string}
interface CommitInspection {author_commit:string;baseline_commit:string;is_descendant:boolean;changed_files:string[]}
type QualityContext=Pick<AuthorQualityOptions,"inventoryRows"|"referenceRows"|"sourceIds"|"manifestUnresolved">;
export interface AuthorReviewBase extends UnknownRecord {phase:string;checks:ReviewCheck[];checkpoint_binding:string;checkpoints:Record<string,UnknownRecord>;commit:CommitInspection;quality_context:QualityContext|null;subjects:UnknownRecord|null;report_available:boolean}
export interface AuthorReviewResult extends AuthorReviewBase {valid:boolean;findings:UnknownRecord[]}
interface SyncOptions {projectRoot:string;commit:string;pcrPath:string;reviewRoot:string;syncRunner?:(worktree:string,pcrPath:string,run:number,window:ReviewWindow)=>unknown;deadline?:number;phase?:string}
export interface AuthorReviewOptions {projectRoot:string;baselineCommit:string;worktreePath:string;task:AuthorReviewTask;report:unknown;stateDir?:string;runSync?:boolean;priorReview?:AuthorReviewResult|null;reportAvailable?:boolean;verifiedUuidReads?:readonly UnknownRecord[];deadline?:number;phase?:string;inspectFn?:(options:PcrInspectionOptions)=>unknown;parseMarkdownFn?:(text:string)=>unknown;parseManifestFn?:(text:string)=>unknown;qualityFn?:(options:AuthorQualityOptions)=>unknown;syncFn?:(options:SyncOptions)=>unknown}
export function extractCompletedTurnReport(response: unknown, turnId: string) {
  const turns=field(field(response,"thread"),"turns");
  const turn = turns===undefined ? undefined : records(turns).find(entry=>entry.id===turnId);
  if (!turn) {
    throw new GoalHarnessError("GOAL_AUTHOR_TURN_MISSING", `Codex thread does not contain turn ${turnId}`);
  }
  if (turn.status !== "completed") {
    if (turn.status === "interrupted") {
      const lastMaterial = [...records(turn.items ?? [])].reverse().find((item) => item.type !== "reasoning");
      if (lastMaterial?.type === "agentMessage" && typeof lastMaterial.text === "string" && lastMaterial.text.trim()) {
        return {
          status: "completed",
          report: parseStrictReport(lastMaterial.text, turnId),
          recovered_from: "interrupted_after_final_report",
        };
      }
    }
    return turn.error
      ? { status: turn.status, report: null, error: turn.error }
      : { status: turn.status, report: null };
  }
  const message = [...records(turn.items ?? [])].reverse().find((item) => item.type === "agentMessage" && typeof item.text === "string" && item.text.trim());
  if (!message) {
    throw new GoalHarnessError("GOAL_AUTHOR_REPORT_PARSE_FAILED", `Completed turn ${turnId} has no final agent JSON message`);
  }
  return { status: "completed", report: parseStrictReport(text(message.text), turnId) };
}

function parseStrictReport(value: string, turnId: string): unknown {
  try {
    return json(value);
  } catch (error) {
    throw new GoalHarnessError("GOAL_AUTHOR_REPORT_PARSE_FAILED", `Completed turn ${turnId} final message is not strict JSON`, { cause: errorMessage(error) });
  }
}

export function inspectAuthorCommit({ projectRoot, baselineCommit, authorCommit, deadline = Infinity, phase = "harvest" }: {projectRoot:string;baselineCommit:string;authorCommit:string;deadline?:number;phase?:string}): CommitInspection {
  if (!/^[a-f0-9]{40,64}$/u.test(String(authorCommit))) {
    throw new GoalHarnessError("GOAL_AUTHOR_COMMIT_INVALID", `Invalid author commit SHA: ${authorCommit}`);
  }
  try {
    runGit(projectRoot, ["merge-base", "--is-ancestor", baselineCommit, authorCommit], { deadline, phase });
  } catch (error) {
    if (field(field(error,"details"),"failure_kind") === "execution_window") throw error;
    throw new GoalHarnessError("GOAL_AUTHOR_COMMIT_INVALID", `Author commit ${authorCommit} is not descended from baseline ${baselineCommit}`);
  }
  let changedFiles;
  try {
    changedFiles = runGit(projectRoot, ["diff", "--name-only", "-z", baselineCommit, authorCommit, "--"], { deadline, phase }).split("\0").filter(Boolean).sort();
  } catch (error) {
    if (field(field(error,"details"),"failure_kind") === "execution_window") throw error;
    throw new GoalHarnessError("GOAL_AUTHOR_COMMIT_INVALID", `Cannot inspect author commit ${authorCommit}: ${errorMessage(error)}`);
  }
  return { author_commit: authorCommit, baseline_commit: baselineCommit, is_descendant: true, changed_files: changedFiles };
}

export function runStructuredSyncDeterminism({ projectRoot, commit, pcrPath, reviewRoot, syncRunner = defaultSyncRunner, deadline = Infinity, phase = "harvest" }: SyncOptions) {
  reviewTimeRemaining(deadline, { phase, subjectId: pcrPath });
  if (existsSync(reviewRoot)) throw new GoalHarnessError("GOAL_REVIEW_WORKTREE_CONFLICT", `Review worktree path already exists: ${reviewRoot}`);
  mkdirSync(path.dirname(reviewRoot), { recursive: true });
  runGit(projectRoot, ["worktree", "add", "--detach", reviewRoot, commit], { deadline, phase });
  let preserveWorktree = false, failure;
  try {
    for (const run of [1, 2]) {
      reviewTimeRemaining(deadline, { phase, subjectId: pcrPath });
      syncRunner(reviewRoot, pcrPath, run, { deadline, phase });
      const changed = gitStatus(reviewRoot, { deadline, phase });
      if (changed.length > 0) {
        preserveWorktree = true;
        throw new GoalHarnessError(run === 1 ? "GOAL_STRUCTURED_SYNC_STALE" : "GOAL_STRUCTURED_SYNC_NONDETERMINISTIC", `Canonical sync ${run} changes committed repository bytes.`, { review_worktree: reviewRoot, diff: changed });
      }
    }
    return { first_run_clean: true, second_run_clean: true, review_worktree: reviewRoot };
  } catch (error) {
    failure = error;
    if (field(field(error,"details"),"failure_kind") === "execution_window") preserveWorktree = true;
    throw error;
  } finally {
    if (!preserveWorktree) {
      try { runGit(projectRoot, ["worktree", "remove", reviewRoot], { deadline, phase }); }
      catch (error) { if (!failure) throw error; }
    }
  }
}

export function reviewAuthorWorktree({
  projectRoot, baselineCommit, worktreePath, task, report: rawReport, runSync = true,
  priorReview = null, reportAvailable = true, verifiedUuidReads = [], deadline = Date.now() + 60_000, phase = "harvest",
  inspectFn = inspectPcrDirectory, parseMarkdownFn = parsePcrMarkdownToStructured,
  parseManifestFn = parseYaml, qualityFn = assertAuthorQuality, syncFn = runStructuredSyncDeterminism,
}: AuthorReviewOptions): AuthorReviewResult {
  const report=record(rawReport,"author report");
  const context = { deadline, phase };
  const head = runGit(worktreePath, ["rev-parse", "HEAD"], context).trim();
  if (head !== report.commit_sha) throw new GoalHarnessError("GOAL_AUTHOR_COMMIT_INVALID", `Author report commit ${report.commit_sha} does not equal worktree HEAD ${head}`);
  if (typeof report.commit_sha!=="string") throw new GoalHarnessError("GOAL_AUTHOR_COMMIT_INVALID","Author report commit must be a string");
  const authorCommit=report.commit_sha;
  const status = gitStatus(worktreePath, context);
  if (status.length > 0) throw new GoalHarnessError("GOAL_AUTHOR_WORKTREE_DIRTY", "Author worktree contains uncommitted or untracked changes after the reported commit.", { status });
  const commitInspection = inspectAuthorCommit({ projectRoot, baselineCommit, authorCommit: report.commit_sha, ...context });
  const {pcrDir,pcrPath,allowedFiles} = assertReviewBoundary({ worktreePath, task, report, changedFiles: commitInspection.changed_files });
  const checks: ReviewCheck[] = [{ phase, check_id: "worktree_safety", subject_id: pcrPath, status: "passed", findings: [] }];
  const checkpointBinding = createHash("sha256").update(JSON.stringify({ policy: 1, phase, projectRoot, baselineCommit, worktreePath,
    task: { id: task.id, goal_id: task.goal_id, thread_id: task.thread_id, turn_id: task.turn_id, pcr_path: pcrPath,
      allowed_files: allowedFiles, authoring_contract_version: task.authoring_contract_version }, report })).digest("hex");
  const prior = priorReview?.checkpoint_binding === checkpointBinding ? priorReview : null;
  const checkpoints: Record<string,UnknownRecord> = {};
  const run = (id: string, action: ()=>unknown, options: {fallbackCode?:string;failureKind?:string} = {}): UnknownRecord | null => {
    // Safety is always checked above; quality depends on this window's UUID reads.
    const reusable = ["builder", "parse_en", "parse_zh", "parse_manifest", "structured_sync"].includes(id);
    if (reusable && prior?.checkpoints?.[id] != null && prior.checks?.filter(c => c.phase === phase && c.check_id === id
      && c.subject_id === pcrPath && c.status === "passed" && !c.findings?.length).length === 1) {
      checks.push({ phase, check_id: id, subject_id: pcrPath, status: "passed", findings: [], checkpoint_reused: true });
      return checkpoints[id] = prior.checkpoints[id];
    }
    const value = collectCheck({ checks, id, subject: pcrPath, phase, deadline, action, ...options });
    if (reusable && value != null && checks.at(-1)?.status === "passed") { checkpoints[id] = value; }
    return value;
  };
  const inspection = run("builder", () => {
    const result=record(inspectFn({ root: worktreePath, pcrDir, checkManifestLifecycle: true, checkBilingualRuleAlignment: true, measurementPolicy: task.authoring_contract_version === 2 ? "enforce" : "report" }),"Builder inspection");
    if (!Array.isArray(result?.problems)) throw new GoalHarnessError("GOAL_REVIEW_RESULT_INVALID", "Builder returned an unrecognized inspection.");
    if (result.problems.length > 0) {
      const findings: UnknownRecord[] = result.problems.map((problem:unknown) => ({ code: "GOAL_AUTHOR_PCR_INVALID", message: String(problem), phase, origin: "harness_review", failure_kind: "author_claim", subject_id: pcrPath }));
      if (result.measurementReviewRequired === true) findings.push({ code: "GOAL_MEASUREMENT_REVIEW_REQUIRED", message: "Measurement consistency requires review.", phase, origin: "harness_review", failure_kind: "measurement", subject_id: pcrPath, measurement: result.measurement });
      throw new GoalHarnessError("GOAL_AUTHOR_PCR_INVALID", "Builder inspection found authored PCR problems.", { result, findings });
    }
    return result;
  });
  const parse = (id: string, file: string, parser: (text:string)=>unknown) => run(id, () => {
    const result = parser(readFileSync(path.join(pcrDir, file), "utf8"));
    if (!result || typeof result !== "object" || Array.isArray(result)) throw new SyntaxError("Parser did not return a projection object.");
    return result;
  }, { fallbackCode: "GOAL_AUTHOR_PCR_PARSE_FAILED", failureKind: "author_claim" });
  const english = parse("parse_en", "pcr.en-US.md", parseMarkdownFn);
  const chinese = parse("parse_zh", "pcr.zh-CN.md", parseMarkdownFn);
  const manifest = parse("parse_manifest", "manifest.yaml", parseManifestFn);
  const parsed = english !== null && chinese !== null && manifest !== null;
  const qualityContext = parsed ? {
    inventoryRows: { en: flattenProcessInventory(english), zh: flattenProcessInventory(chinese) },
    referenceRows: { en: referenceProductRows(english), zh: referenceProductRows(chinese) },
    sourceIds: [...new Set([...pcrSourceIds(english), ...pcrSourceIds(chinese)])].sort(),
    manifestUnresolved: extractManifestUnresolved(manifest),
  } : null;
  const quality = reportAvailable && qualityContext!==null
    ? run("quality", () => qualityFn({ report, authorizedFiles: allowedFiles, changedFiles: commitInspection.changed_files, ...qualityContext, verifiedUuidReads, phase }))
    : skipCheck(checks, "quality", pcrPath, phase, reportAvailable ? "parsed_pcr_unavailable" : "report_unavailable");
  const sync = runSync
    ? run("structured_sync", () => {
        const result = record(syncFn({ projectRoot, commit: authorCommit, pcrPath: pcrPath,
          reviewRoot: path.join(projectRoot, ".worktrees", "goals", task.goal_id ?? "goal", "reviews", `${task.cpc_code}-${authorCommit.slice(0, 12)}-${randomUUID()}`), ...context }),"sync review result");
        if (result?.first_run_clean !== true || result?.second_run_clean !== true) throw new GoalHarnessError("GOAL_REVIEW_RESULT_INVALID", "Both independent sync runs must explicitly pass.", { result });
        return result;
      })
    : skipCheck(checks, "structured_sync", pcrPath, phase, "sync_not_requested");
  const subjects = qualityContext!==null ? {
    pcr_path: pcrPath, commit_sha: authorCommit,
    uuid_ids: [...new Set([...(qualityContext.referenceRows?.en ?? []), ...(qualityContext.referenceRows?.zh ?? []), ...(qualityContext.inventoryRows?.en ?? []), ...(qualityContext.inventoryRows?.zh ?? [])].map(row => typeof row.uuid==="string"?row.uuid.toLowerCase():undefined).filter(Boolean))].sort(),
    receipt_ids: [...new Set([...array(report.hybrid_search_receipt_ids ?? []), ...records(report.uuid_audits ?? []).map(entry => entry.hybrid_search_receipt_id), ...records(report.rejected_uuid_candidates ?? []).map(entry => entry.receipt_id), ...records(field(report.inventory,"unresolved") ?? []).flatMap(entry => array(entry.hybrid_search_receipt_ids ?? []))].filter(Boolean))].sort(),
    source_ids: qualityContext.sourceIds,
  } : null;
  return reviewResult({ phase, checks, checkpoint_binding: checkpointBinding, checkpoints, pcr_id: manifest?.id ?? null, commit: commitInspection, builder: inspection, quality, sync, subjects, quality_context: qualityContext, report_available: reportAvailable, warnings: inspection?.warnings ?? [] });
}

/** Finish only identity-dependent quality work after bounded independent reads. */
export function completeAuthorReviewIdentity({ review, task, report: rawReport, verifiedUuidReads, phase = review?.phase ?? "harvest", deadline = Infinity, qualityFn = assertAuthorQuality }: {review:AuthorReviewResult;task:AuthorReviewTask;report:unknown;verifiedUuidReads:readonly UnknownRecord[];phase?:string;deadline?:number;qualityFn?:(options:AuthorQualityOptions)=>unknown}) {
  const report=record(rawReport);
  if (!review?.quality_context || review.report_available === false) return review;
  if (review.commit?.author_commit !== report.commit_sha || review.subjects?.pcr_path !== task.pcr_path) throw new GoalHarnessError("GOAL_REVIEW_BINDING_MISMATCH", "Deferred identity checks do not match the inspected commit and PCR.", { phase, origin: "harness_review", failure_kind: "task_binding" });
  const qualityContext=review.quality_context;
  const oldQuality = review.checks.find(check => check.check_id === "quality");
  const checks = review.checks.filter(check => check.check_id !== "quality");
  const quality = collectCheck({ checks, id: "quality", subject: text(task.pcr_path), phase, deadline,
    action: () => qualityFn({ report, authorizedFiles: strings(task.allowed_files), changedFiles: review.commit.changed_files, ...qualityContext, verifiedUuidReads, phase }),
  });
  const newQuality = checks.find(check => check.check_id === "quality");
  if (newQuality?.status === "skipped" && oldQuality?.findings?.length) newQuality.findings = dedupeFindings([...oldQuality.findings, ...newQuality.findings]);
  return reviewResult({ ...review, checks, quality });
}

function collectCheck({ checks, id, subject, phase, deadline, action, fallbackCode = "GOAL_AUTHOR_REVIEW_FAILED", failureKind }: {checks:ReviewCheck[];id:string;subject:string;phase:string;deadline:number;action:()=>unknown;fallbackCode?:string;failureKind?:string}): UnknownRecord | null {
  try {
    reviewTimeRemaining(deadline, { phase, subjectId: subject });
    const rawResult=action();
    const result=record(rawResult,"review check result");
    reviewTimeRemaining(deadline, { phase, subjectId: subject });
    if (result?.valid === false) throw new GoalHarnessError("GOAL_AUTHOR_RESULT_INVALID", `${id} returned a failed result.`, { result, findings: result.findings, checks: result.checks });
    if (id === "quality" && result?.valid !== true) throw new GoalHarnessError("GOAL_REVIEW_RESULT_INVALID", "Quality checks did not return an explicit valid result.");
    checks.push({ phase, check_id: id, subject_id: subject, status: "passed", findings: [] });
    return result;
  } catch (error) {
    const details = field(error,"details")==null?{}:record(field(error,"details"));
    const dependencyChecks = Array.isArray(details.checks) ? records(details.checks) : [];
    const supplied = Array.isArray(details.findings) ? records(details.findings) : null;
    const onlyUnavailable = dependencyChecks.some(check => check.status === "skipped") && supplied?.length === 0;
    const findings = supplied ?? [{ code: errorCode(error) ?? fallbackCode, message: errorMessage(error), phase, origin: "harness_review", ...(failureKind ? { failure_kind: failureKind } : {}), subject_id: subject, ...details }];
    const skipped = onlyUnavailable || details.failure_kind === "execution_window";
    checks.push({ phase, check_id: id, subject_id: subject, status: skipped ? "skipped" : "failed", findings,
      ...(skipped ? { reason: onlyUnavailable ? "independent_uuid_read_unavailable" : "execution_window", depends_on: dependencyChecks.flatMap(check => Array.isArray(check.depends_on)?check.depends_on:[]) } : {}) });
    return isRecord(details.result)?details.result:(id === "quality" ? { valid: false, findings, checks: dependencyChecks } : null);
  }
}

function skipCheck(checks: ReviewCheck[], id: string, subject: string, phase: string, reason: string): null {
  checks.push({ phase, check_id: id, subject_id: subject, status: "skipped", reason, findings: [] });
  return null;
}
function reviewResult(value: AuthorReviewBase): AuthorReviewResult {
  const required = ["worktree_safety", "builder", "parse_en", "parse_zh", "parse_manifest", "quality", "structured_sync"];
  return { ...value, valid: required.every(id => value.checks.filter(check => check.check_id === id && check.status === "passed").length === 1), findings: dedupeFindings(value.checks.flatMap(check => check.findings ?? [])) };
}
function dedupeFindings(findings: readonly UnknownRecord[]): UnknownRecord[] { return [...new Map(findings.map(finding => [JSON.stringify(finding), finding])).values()]; }

function assertReviewBoundary({ worktreePath, task, report, changedFiles }: {worktreePath:string;task:AuthorReviewTask;report:UnknownRecord;changedFiles:string[]}) {
  const target = task?.pcr_path;
  const expected = ["manifest.yaml", "pcr.en-US.md", "pcr.zh-CN.md", "structured.yaml"].map(file => `${target}/${file}`).sort();
  const same = (values: unknown) => Array.isArray(values) && values.length === expected.length && [...values].sort().every((value, index) => value === expected[index]);
  if (typeof target !== "string" || path.posix.isAbsolute(target) || target.split("/").some(segment => !segment || segment === "." || segment === "..") || target.includes("\\") || report.pcr_path !== target || report.cpc_code !== task.cpc_code || !same(task.allowed_files) || !same(report.files) || !same(changedFiles)) {
    throw new GoalHarnessError("GOAL_AUTHOR_PATH_UNAUTHORIZED", "The committed and reported paths must equal this task's four-file authorization.", { origin: "harness_review", failure_kind: "authorization" });
  }
  const pcrDir = path.resolve(worktreePath, ...target.split("/"));
  if (realpathSync(pcrDir) !== pcrDir || expected.some(file => !lstatSync(path.join(worktreePath, file)).isFile() || lstatSync(path.join(worktreePath, file)).isSymbolicLink())) throw new GoalHarnessError("GOAL_AUTHOR_PATH_UNAUTHORIZED", "Author PCR paths must be regular files without symlink substitution.", { origin: "harness_review", failure_kind: "authorization" });
  return {pcrDir,pcrPath:target,allowedFiles:strings(task.allowed_files)};
}
function defaultSyncRunner(worktree: string, pcrPath: string, _run: number, { deadline = Infinity, phase = "harvest" }: ReviewWindow = {}) {
  const timeout = reviewTimeRemaining(deadline, { phase, subjectId: pcrPath });
  const options: SpawnSyncOptionsWithStringEncoding & {detached: boolean} = { cwd: worktree, encoding: "utf8", stdio: ["ignore", "pipe", "pipe"], timeout, detached: process.platform !== "win32" };
  const result = spawnSync("npm", ["run", "pcr:sync-structured", "--", "--pcr", pcrPath], options);
  if (field(result.error,"code") === "ETIMEDOUT") {
    // npm can have a still-running Node child after its own timeout signal.
    if (process.platform !== "win32" && result.pid) {
      try { process.kill(-result.pid, "SIGKILL"); } catch (error) { if (errorCode(error) !== "ESRCH") throw error; }
    }
    throw windowError(phase, pcrPath);
  }
  if (result.status !== 0) throw new GoalHarnessError("GOAL_STRUCTURED_SYNC_FAILED", `Structured sync failed with exit ${result.status}`, { exit_code: result.status, signal: result.signal, phase, origin: "harness_review", failure_kind: "unknown" });
}
function extractManifestUnresolved(manifest: unknown): unknown[] {
  const entries=field(field(field(manifest,"review_metadata"),"unresolved"),"inventory_flow_uuids") ?? [];
  return array(entries).map(entry => typeof entry === "string" ? entry : field(entry,"row_id")).filter(Boolean);
}
function runGit(root: string, args: string[], { deadline = Infinity, phase = "harvest" }: ReviewWindow = {}): string {
  const timeout = reviewTimeRemaining(deadline, { phase, subjectId: root });
  try { return execFileSync("git", args, { cwd: root, encoding: "utf8", stdio: ["ignore", "pipe", "pipe"], timeout }); }
  catch (error) { if (errorCode(error) === "ETIMEDOUT") throw windowError(phase, root); throw error; }
}
function windowError(phase: string, subjectId: string) { return new GoalHarnessError("GOAL_REVIEW_WINDOW_EXHAUSTED", "A synchronous review command exceeded the remaining execution window.", { phase, origin: "harness_deadline", failure_kind: "execution_window", retryable: false, subject_id: subjectId }); }
function gitStatus(root: string, context: ReviewWindow): string[] { return runGit(root, ["status", "--porcelain=v1", "-z", "--untracked-files=all"], context).split("\0").filter(Boolean); }

/** Decode a retained independent review without rewriting its checkpoints. */
export function readAuthorReviewResult(value: unknown): AuthorReviewResult {
  if (!isAuthorReviewResult(value)) throw new TypeError("Independent author review shape is invalid.");
  return value;
}
function isStringArray(value: unknown): value is string[] {
  return Array.isArray(value) && value.every((entry): entry is string=>typeof entry==="string");
}
function isFlowRow(value: unknown): boolean {
  return isRecord(value) && (value.name==null || typeof value.name==="string") && (value.amount==null || isRecord(value.amount));
}
function isRows(value: unknown): boolean {
  return isRecord(value) && Array.isArray(value.en) && value.en.every(isFlowRow) && Array.isArray(value.zh) && value.zh.every(isFlowRow);
}
function isQualityContext(value: unknown): boolean {
  if(value===null)return true;
  return isRecord(value) && (value.inventoryRows===null || isRows(value.inventoryRows)) &&
    (value.referenceRows===undefined || isRows(value.referenceRows)) &&
    (value.sourceIds===undefined || isStringArray(value.sourceIds)) &&
    (value.manifestUnresolved==null || Array.isArray(value.manifestUnresolved));
}
function isReviewCheck(value: unknown): boolean {
  return isRecord(value) && [value.phase,value.check_id,value.subject_id,value.status].every(entry=>typeof entry==="string") &&
    Array.isArray(value.findings) && value.findings.every(isRecord);
}
function isAuthorReviewResult(value: unknown): value is AuthorReviewResult {
  if(!isRecord(value) || !isRecord(value.commit))return false;
  const commit=value.commit;
  return typeof value.phase==="string" && Array.isArray(value.checks) && value.checks.every(isReviewCheck) &&
    typeof value.checkpoint_binding==="string" && isRecord(value.checkpoints) && Object.values(value.checkpoints).every(isRecord) &&
    typeof commit.author_commit==="string" && typeof commit.baseline_commit==="string" && typeof commit.is_descendant==="boolean" && isStringArray(commit.changed_files) &&
    isQualityContext(value.quality_context) && (value.subjects===null || isRecord(value.subjects)) && typeof value.report_available==="boolean" &&
    typeof value.valid==="boolean" && Array.isArray(value.findings) && value.findings.every(isRecord);
}
