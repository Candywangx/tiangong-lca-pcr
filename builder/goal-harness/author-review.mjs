import { execFileSync, spawnSync } from "node:child_process";
import { existsSync, lstatSync, mkdirSync, readFileSync, realpathSync } from "node:fs";
import { createHash, randomUUID } from "node:crypto";
import path from "node:path";

import { inspectPcrDirectory } from "../lib/lint-rules.mjs";
import { parsePcrMarkdownToStructured } from "../lib/markdown-projection.mjs";
import { parseYaml } from "../../packages/pcr-core/src/yaml-lite.mjs";
import { assertAuthorQuality, flattenProcessInventory, pcrSourceIds, referenceProductRows } from "./author-gates.mjs";
import { reviewTimeRemaining } from "./review-assessment.mjs";
import { GoalHarnessError } from "./errors.mjs";

export function extractCompletedTurnReport(response, turnId) {
  const turn = response?.thread?.turns?.find((entry) => entry.id === turnId);
  if (!turn) {
    throw new GoalHarnessError("GOAL_AUTHOR_TURN_MISSING", `Codex thread does not contain turn ${turnId}`);
  }
  if (turn.status !== "completed") {
    if (turn.status === "interrupted") {
      const lastMaterial = [...(turn.items ?? [])].reverse().find((item) => item.type !== "reasoning");
      if (lastMaterial?.type === "agentMessage" && lastMaterial.text?.trim()) {
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
  const message = [...(turn.items ?? [])].reverse().find((item) => item.type === "agentMessage" && item.text?.trim());
  if (!message) {
    throw new GoalHarnessError("GOAL_AUTHOR_REPORT_PARSE_FAILED", `Completed turn ${turnId} has no final agent JSON message`);
  }
  return { status: "completed", report: parseStrictReport(message.text, turnId) };
}

function parseStrictReport(text, turnId) {
  try {
    return JSON.parse(text);
  } catch (error) {
    throw new GoalHarnessError("GOAL_AUTHOR_REPORT_PARSE_FAILED", `Completed turn ${turnId} final message is not strict JSON`, { cause: error.message });
  }
}

export function inspectAuthorCommit({ projectRoot, baselineCommit, authorCommit, deadline = Infinity, phase = "harvest" }) {
  if (!/^[a-f0-9]{40,64}$/u.test(String(authorCommit))) {
    throw new GoalHarnessError("GOAL_AUTHOR_COMMIT_INVALID", `Invalid author commit SHA: ${authorCommit}`);
  }
  try {
    runGit(projectRoot, ["merge-base", "--is-ancestor", baselineCommit, authorCommit], { deadline, phase });
  } catch (error) {
    if (error.details?.failure_kind === "execution_window") throw error;
    throw new GoalHarnessError("GOAL_AUTHOR_COMMIT_INVALID", `Author commit ${authorCommit} is not descended from baseline ${baselineCommit}`);
  }
  let changedFiles;
  try {
    changedFiles = runGit(projectRoot, ["diff", "--name-only", "-z", baselineCommit, authorCommit, "--"], { deadline, phase }).split("\0").filter(Boolean).sort();
  } catch (error) {
    if (error.details?.failure_kind === "execution_window") throw error;
    throw new GoalHarnessError("GOAL_AUTHOR_COMMIT_INVALID", `Cannot inspect author commit ${authorCommit}: ${error.message}`);
  }
  return { author_commit: authorCommit, baseline_commit: baselineCommit, is_descendant: true, changed_files: changedFiles };
}

export function runStructuredSyncDeterminism({ projectRoot, commit, pcrPath, reviewRoot, syncRunner = defaultSyncRunner, deadline = Infinity, phase = "harvest" }) {
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
    if (error.details?.failure_kind === "execution_window") preserveWorktree = true;
    throw error;
  } finally {
    if (!preserveWorktree) {
      try { runGit(projectRoot, ["worktree", "remove", reviewRoot], { deadline, phase }); }
      catch (error) { if (!failure) throw error; }
    }
  }
}

export function reviewAuthorWorktree({
  projectRoot, baselineCommit, worktreePath, task, report, stateDir, runSync = true,
  priorReview = null, reportAvailable = true, verifiedUuidReads = [], deadline = Date.now() + 60_000, phase = "harvest",
  inspectFn = inspectPcrDirectory, parseMarkdownFn = parsePcrMarkdownToStructured,
  parseManifestFn = parseYaml, qualityFn = assertAuthorQuality, syncFn = runStructuredSyncDeterminism,
}) {
  const context = { deadline, phase };
  const head = runGit(worktreePath, ["rev-parse", "HEAD"], context).trim();
  if (head !== report.commit_sha) throw new GoalHarnessError("GOAL_AUTHOR_COMMIT_INVALID", `Author report commit ${report.commit_sha} does not equal worktree HEAD ${head}`);
  const status = gitStatus(worktreePath, context);
  if (status.length > 0) throw new GoalHarnessError("GOAL_AUTHOR_WORKTREE_DIRTY", "Author worktree contains uncommitted or untracked changes after the reported commit.", { status });
  const commitInspection = inspectAuthorCommit({ projectRoot, baselineCommit, authorCommit: report.commit_sha, ...context });
  const pcrDir = assertReviewBoundary({ worktreePath, task, report, changedFiles: commitInspection.changed_files });
  const checks = [{ phase, check_id: "worktree_safety", subject_id: task.pcr_path, status: "passed", findings: [] }];
  const checkpointBinding = createHash("sha256").update(JSON.stringify({ policy: 1, phase, projectRoot, baselineCommit, worktreePath,
    task: { id: task.id, goal_id: task.goal_id, thread_id: task.thread_id, turn_id: task.turn_id, pcr_path: task.pcr_path,
      allowed_files: task.allowed_files, authoring_contract_version: task.authoring_contract_version }, report })).digest("hex");
  const prior = priorReview?.checkpoint_binding === checkpointBinding ? priorReview : null;
  const checkpoints = {};
  const run = (id, action, options) => {
    // Safety is always checked above; quality depends on this window's UUID reads.
    const reusable = ["builder", "parse_en", "parse_zh", "parse_manifest", "structured_sync"].includes(id);
    if (reusable && prior?.checkpoints?.[id] != null && prior.checks?.filter(c => c.phase === phase && c.check_id === id
      && c.subject_id === task.pcr_path && c.status === "passed" && !c.findings?.length).length === 1) {
      checks.push({ phase, check_id: id, subject_id: task.pcr_path, status: "passed", findings: [], checkpoint_reused: true });
      return checkpoints[id] = prior.checkpoints[id];
    }
    const value = collectCheck({ checks, id, subject: task.pcr_path, phase, deadline, action, ...options });
    if (reusable && value != null && checks.at(-1)?.status === "passed") { checkpoints[id] = value; }
    return value;
  };
  const inspection = run("builder", () => {
    const result = inspectFn({ root: worktreePath, pcrDir, checkManifestLifecycle: true, checkBilingualRuleAlignment: true, measurementPolicy: task.authoring_contract_version === 2 ? "enforce" : "report" });
    if (!Array.isArray(result?.problems)) throw new GoalHarnessError("GOAL_REVIEW_RESULT_INVALID", "Builder returned an unrecognized inspection.");
    if (result.problems.length > 0) {
      const findings = result.problems.map(problem => ({ code: "GOAL_AUTHOR_PCR_INVALID", message: String(problem), phase, origin: "harness_review", failure_kind: "author_claim", subject_id: task.pcr_path }));
      if (result.measurementReviewRequired === true) findings.push({ code: "GOAL_MEASUREMENT_REVIEW_REQUIRED", message: "Measurement consistency requires review.", phase, origin: "harness_review", failure_kind: "measurement", subject_id: task.pcr_path, measurement: result.measurement });
      throw new GoalHarnessError("GOAL_AUTHOR_PCR_INVALID", "Builder inspection found authored PCR problems.", { result, findings });
    }
    return result;
  });
  const parse = (id, file, parser) => run(id, () => {
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
  const quality = reportAvailable && parsed
    ? run("quality", () => qualityFn({ report, authorizedFiles: task.allowed_files, changedFiles: commitInspection.changed_files, ...qualityContext, verifiedUuidReads, phase }))
    : skipCheck(checks, "quality", task.pcr_path, phase, reportAvailable ? "parsed_pcr_unavailable" : "report_unavailable");
  const sync = runSync
    ? run("structured_sync", () => {
        const result = syncFn({ projectRoot, commit: report.commit_sha, pcrPath: task.pcr_path,
          reviewRoot: path.join(projectRoot, ".worktrees", "goals", task.goal_id ?? "goal", "reviews", `${task.cpc_code}-${report.commit_sha.slice(0, 12)}-${randomUUID()}`), ...context });
        if (result?.first_run_clean !== true || result?.second_run_clean !== true) throw new GoalHarnessError("GOAL_REVIEW_RESULT_INVALID", "Both independent sync runs must explicitly pass.", { result });
        return result;
      })
    : skipCheck(checks, "structured_sync", task.pcr_path, phase, "sync_not_requested");
  const subjects = parsed ? {
    pcr_path: task.pcr_path, commit_sha: report.commit_sha,
    uuid_ids: [...new Set([...qualityContext.referenceRows.en, ...qualityContext.referenceRows.zh, ...qualityContext.inventoryRows.en, ...qualityContext.inventoryRows.zh].map(row => row.uuid?.toLowerCase()).filter(Boolean))].sort(),
    receipt_ids: [...new Set([...(report.hybrid_search_receipt_ids ?? []), ...(report.uuid_audits ?? []).map(entry => entry.hybrid_search_receipt_id), ...(report.rejected_uuid_candidates ?? []).map(entry => entry.receipt_id), ...(report.inventory?.unresolved ?? []).flatMap(entry => entry.hybrid_search_receipt_ids ?? [])].filter(Boolean))].sort(),
    source_ids: qualityContext.sourceIds,
  } : null;
  return reviewResult({ phase, checks, checkpoint_binding: checkpointBinding, checkpoints, pcr_id: manifest?.id ?? null, commit: commitInspection, builder: inspection, quality, sync, subjects, quality_context: qualityContext, report_available: reportAvailable, warnings: inspection?.warnings ?? [] });
}

/** Finish only identity-dependent quality work after bounded independent reads. */
export function completeAuthorReviewIdentity({ review, task, report, verifiedUuidReads, phase = review?.phase ?? "harvest", deadline = Infinity, qualityFn = assertAuthorQuality }) {
  if (!review?.quality_context || review.report_available === false) return review;
  if (review.commit?.author_commit !== report.commit_sha || review.subjects?.pcr_path !== task.pcr_path) throw new GoalHarnessError("GOAL_REVIEW_BINDING_MISMATCH", "Deferred identity checks do not match the inspected commit and PCR.", { phase, origin: "harness_review", failure_kind: "task_binding" });
  const oldQuality = review.checks.find(check => check.check_id === "quality");
  const checks = review.checks.filter(check => check.check_id !== "quality");
  const quality = collectCheck({ checks, id: "quality", subject: task.pcr_path, phase, deadline,
    action: () => qualityFn({ report, authorizedFiles: task.allowed_files, changedFiles: review.commit.changed_files, ...review.quality_context, verifiedUuidReads, phase }),
  });
  const newQuality = checks.find(check => check.check_id === "quality");
  if (newQuality.status === "skipped" && oldQuality?.findings?.length) newQuality.findings = dedupeFindings([...oldQuality.findings, ...newQuality.findings]);
  return reviewResult({ ...review, checks, quality });
}

function collectCheck({ checks, id, subject, phase, deadline, action, fallbackCode = "GOAL_AUTHOR_REVIEW_FAILED", failureKind }) {
  try {
    reviewTimeRemaining(deadline, { phase, subjectId: subject });
    const result = action();
    reviewTimeRemaining(deadline, { phase, subjectId: subject });
    if (result?.valid === false) throw new GoalHarnessError("GOAL_AUTHOR_RESULT_INVALID", `${id} returned a failed result.`, { result, findings: result.findings, checks: result.checks });
    if (id === "quality" && result?.valid !== true) throw new GoalHarnessError("GOAL_REVIEW_RESULT_INVALID", "Quality checks did not return an explicit valid result.");
    checks.push({ phase, check_id: id, subject_id: subject, status: "passed", findings: [] });
    return result;
  } catch (error) {
    const details = error.details ?? {};
    const dependencyChecks = Array.isArray(details.checks) ? details.checks : [];
    const supplied = Array.isArray(details.findings) ? details.findings : null;
    const onlyUnavailable = dependencyChecks.some(check => check.status === "skipped") && supplied?.length === 0;
    const findings = supplied ?? [{ code: error.code ?? fallbackCode, message: error.message, phase, origin: "harness_review", ...(failureKind ? { failure_kind: failureKind } : {}), subject_id: subject, ...details }];
    const skipped = onlyUnavailable || details.failure_kind === "execution_window";
    checks.push({ phase, check_id: id, subject_id: subject, status: skipped ? "skipped" : "failed", findings,
      ...(skipped ? { reason: onlyUnavailable ? "independent_uuid_read_unavailable" : "execution_window", depends_on: dependencyChecks.flatMap(check => check.depends_on ?? []) } : {}) });
    return details.result ?? (id === "quality" ? { valid: false, findings, checks: dependencyChecks } : null);
  }
}

function skipCheck(checks, id, subject, phase, reason) {
  checks.push({ phase, check_id: id, subject_id: subject, status: "skipped", reason, findings: [] });
  return null;
}
function reviewResult(value) {
  const required = ["worktree_safety", "builder", "parse_en", "parse_zh", "parse_manifest", "quality", "structured_sync"];
  return { ...value, valid: required.every(id => value.checks.filter(check => check.check_id === id && check.status === "passed").length === 1), findings: dedupeFindings(value.checks.flatMap(check => check.findings ?? [])) };
}
function dedupeFindings(findings) { return [...new Map(findings.map(finding => [JSON.stringify(finding), finding])).values()]; }

function assertReviewBoundary({ worktreePath, task, report, changedFiles }) {
  const target = task?.pcr_path;
  const expected = ["manifest.yaml", "pcr.en-US.md", "pcr.zh-CN.md", "structured.yaml"].map(file => `${target}/${file}`).sort();
  const same = values => Array.isArray(values) && values.length === expected.length && [...values].sort().every((value, index) => value === expected[index]);
  if (typeof target !== "string" || path.posix.isAbsolute(target) || target.split("/").some(segment => !segment || segment === "." || segment === "..") || target.includes("\\") || report.pcr_path !== target || report.cpc_code !== task.cpc_code || !same(task.allowed_files) || !same(report.files) || !same(changedFiles)) {
    throw new GoalHarnessError("GOAL_AUTHOR_PATH_UNAUTHORIZED", "The committed and reported paths must equal this task's four-file authorization.", { origin: "harness_review", failure_kind: "authorization" });
  }
  const pcrDir = path.resolve(worktreePath, ...target.split("/"));
  if (realpathSync(pcrDir) !== pcrDir || expected.some(file => !lstatSync(path.join(worktreePath, file)).isFile() || lstatSync(path.join(worktreePath, file)).isSymbolicLink())) throw new GoalHarnessError("GOAL_AUTHOR_PATH_UNAUTHORIZED", "Author PCR paths must be regular files without symlink substitution.", { origin: "harness_review", failure_kind: "authorization" });
  return pcrDir;
}
function defaultSyncRunner(worktree, pcrPath, _run, { deadline = Infinity, phase = "harvest" } = {}) {
  const timeout = reviewTimeRemaining(deadline, { phase, subjectId: pcrPath });
  const result = spawnSync("npm", ["run", "pcr:sync-structured", "--", "--pcr", pcrPath], { cwd: worktree, encoding: "utf8", stdio: ["ignore", "pipe", "pipe"], timeout, detached: process.platform !== "win32" });
  if (result.error?.code === "ETIMEDOUT") {
    // npm can have a still-running Node child after its own timeout signal.
    if (process.platform !== "win32" && result.pid) {
      try { process.kill(-result.pid, "SIGKILL"); } catch (error) { if (error.code !== "ESRCH") throw error; }
    }
    throw windowError(phase, pcrPath);
  }
  if (result.status !== 0) throw new GoalHarnessError("GOAL_STRUCTURED_SYNC_FAILED", `Structured sync failed with exit ${result.status}`, { exit_code: result.status, signal: result.signal, phase, origin: "harness_review", failure_kind: "unknown" });
}
function extractManifestUnresolved(manifest) {
  const entries = manifest?.review_metadata?.unresolved?.inventory_flow_uuids ?? [];
  return entries.map(entry => typeof entry === "string" ? entry : entry?.row_id).filter(Boolean);
}
function runGit(root, args, { deadline = Infinity, phase = "harvest" } = {}) {
  const timeout = reviewTimeRemaining(deadline, { phase, subjectId: root });
  try { return execFileSync("git", args, { cwd: root, encoding: "utf8", stdio: ["ignore", "pipe", "pipe"], timeout }); }
  catch (error) { if (error.code === "ETIMEDOUT") throw windowError(phase, root); throw error; }
}
function windowError(phase, subjectId) { return new GoalHarnessError("GOAL_REVIEW_WINDOW_EXHAUSTED", "A synchronous review command exceeded the remaining execution window.", { phase, origin: "harness_deadline", failure_kind: "execution_window", retryable: false, subject_id: subjectId }); }
function gitStatus(root, context) { return runGit(root, ["status", "--porcelain=v1", "-z", "--untracked-files=all"], context).split("\0").filter(Boolean); }
