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
import Ajv2020 from "ajv/dist/2020.js";
import { GoalEventStore } from "./event-store.mjs";
import { GoalHarnessError, selectRecovery } from "./errors.mjs";
import { withGoalLock } from "./lock.mjs";
import {
  readArtifact,
  artifactSha256,
  stableArtifactJson,
  writeArtifactExclusive,
  withArtifactDirectory,
} from "./artifact-io.mjs";
import {
  loadReportReceiptEvidence,
  auditHybridSearchReceipts,
} from "./uuid-search-receipts.mjs";
import { auditReportedUuids } from "./evidence-audit.mjs";
import { reviewAuthorWorktree, inspectAuthorCommit, completeAuthorReviewIdentity } from "./author-review.mjs";
import { assessRequiredReview, reviewTimeRemaining, failedReview } from "./review-assessment.mjs";
import { validateAuthorReport } from "./author-gates.mjs";
import { resolveAuthorContentBaseCommit } from "./author-baseline.mjs";

const ajv = new Ajv2020({ allErrors: true, strict: true });
ajv.addFormat(
  "uuid",
  /^[0-9a-f]{8}-[0-9a-f]{4}-[1-8][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i,
);
const draftValidator = ajv.compile(
  JSON.parse(
    readFileSync(
      new URL("../schemas/goal-author-draft.schema.json", import.meta.url),
    ),
  ),
);

export function assembleAuthorReport({ draft, receiptAudits }) {
  const report = structuredClone(draft);
  delete report.receipt_ids;
  const receipts = new Map(receiptAudits.map((r) => [r.receipt_id, r]));
  for (const claim of report.uuid_audits ?? []) {
    const decision = receipts
      .get(claim.hybrid_search_receipt_id)
      ?.candidate_decisions.find((d) => d.uuid === claim.uuid.toLowerCase());
    if (decision?.decision !== "adopted")
      conflict("Adopted UUID disagrees with its finalized receipt.", claim);
  }
  const generated = receiptAudits
    .flatMap((r) =>
      r.scope === "goal_cache_reuse"
        ? []
        : r.candidate_decisions
            .filter((d) => d.decision === "rejected")
            .map((d) => ({
              uuid: d.uuid,
              receipt_id: r.receipt_id,
              reason_code: d.reason_code,
              reason: d.reason,
            })),
    )
    .sort(
      (a, b) =>
        a.receipt_id.localeCompare(b.receipt_id) ||
        a.uuid.localeCompare(b.uuid),
    );
  if (report.rejected_uuid_candidates !== undefined) {
    const claimed = [...report.rejected_uuid_candidates].sort(
      (a, b) =>
        a.receipt_id.localeCompare(b.receipt_id) ||
        a.uuid.localeCompare(b.uuid),
    );
    if (stableArtifactJson(claimed) !== stableArtifactJson(generated))
      conflict("Explicit rejected candidates differ from finalized evidence.", {
        claimed,
        expected: generated,
      });
  }
  const membership = [...receipts.keys()].sort();
  if (
    report.hybrid_search_receipt_ids !== undefined &&
    stableArtifactJson([...report.hybrid_search_receipt_ids].sort()) !==
      stableArtifactJson(membership)
  )
    conflict(
      "Explicit receipt membership differs from the referenced evidence.",
      { claimed: report.hybrid_search_receipt_ids, expected: membership },
    );
  report.rejected_uuid_candidates = generated;
  report.hybrid_search_receipt_ids = [...receipts.keys()].sort();
  return report;
}

export function prepareAuthorReport(options) {
  try { return prepareBoundAuthorReport(options); }
  catch (error) {
    if (error.details?.preparation_failure_id) throw error;
    const { stateDir, config, taskId, draftPath, cwd = process.cwd() } = options;
    const state = new GoalEventStore({ stateDir }).rebuild(), task = state.tasks.find(t => t.id === taskId);
    // An invalid caller/task/path has no authority to publish task observations.
    if (config.goal_id !== state.goal_id || !path.isAbsolute(draftPath)) throw error;
    assertPreparingTask(task, cwd);
    const draftBytes = readArtifact(draftPath);
    let draft;
    try { draft = JSON.parse(draftBytes); } catch { draft = null; }
    const normalized = error instanceof SyntaxError
      ? new GoalHarnessError("GOAL_REPORT_DRAFT_INVALID", "Draft is not valid JSON.", { origin: "harness_review", phase: "preparation", failure_kind: "author_claim" })
      : error;
    const reference = publishPreparationFailure({ stateDir, task, cwd, binding: taskBinding(state.goal_id, task),
      content: { files: readContentFingerprints(task) }, contentVerified: false,
      commitSha: draft?.commit_sha ?? null, draftBytes, receiptAudits: [], error: normalized, uuidReads: [] });
    throw new GoalHarnessError(normalized.code ?? "GOAL_REPORT_PREPARATION_FAILED", normalized.message, {
      ...normalized.details, preparation_failure_id: reference,
    });
  }
}

function prepareBoundAuthorReport({
  config,
  stateDir,
  taskId,
  draftPath,
  cwd = process.cwd(),
  reviewFn = reviewAuthorWorktree,
  auditUuidsFn = auditReportedUuids,
  deadline = Date.now() + 60_000,
}) {
  const store = new GoalEventStore({ stateDir }),
    state = store.rebuild(),
    task = state.tasks.find((t) => t.id === taskId);
  if (config.goal_id !== state.goal_id)
    fail("GOAL_REPORT_BINDING_MISMATCH", "Config and author state belong to different goals.");
  assertPreparingTask(task, cwd);
  if (!path.isAbsolute(draftPath))
    fail("GOAL_REPORT_DRAFT_INVALID", "Draft path must be absolute.");
  const draftBytes = readArtifact(draftPath),
    draft = JSON.parse(draftBytes);
  if (!draftValidator(draft))
    fail(
      "GOAL_REPORT_DRAFT_INVALID",
      "Author draft failed Schema validation.",
      { findings: draftValidator.errors.map(detail => ({ code: "GOAL_REPORT_DRAFT_INVALID", message: detail.message, detail,
        details: { phase: "preparation", origin: "harness_review", failure_kind: "author_claim" } })) },
    );
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
        (r) => r.hybrid_search_receipt_ids ?? [],
      ),
    ]),
  ].sort();
  const preliminary = { ...draft, hybrid_search_receipt_ids: ids };
  let receiptAudits = [], report, review, uuidReads = [], assessment;
  const phase = "preparation";
  const prior = resolvePreparationFailure({ stateDir, task, forCommit: draft.commit_sha, deadline });
  const progress = prior?.failure?.details?.progress ?? {};
  const capture = operation => {
    try { return operation(); }
    catch (error) { return { valid: false, results: [], checks: [], findings: selectRecovery(error).findings }; }
  };
  try {
    const localReceipts = capture(() => loadReportReceiptEvidence({ report: preliminary, stateDir, task,
      collect: true, phase, deadline, startAfter: progress.receipts?.start_after }));
    receiptAudits = Array.isArray(localReceipts) ? localReceipts : localReceipts.results;
    const assemblyFindings = [];
    if (localReceipts.valid !== false) {
      try {
        report = assembleAuthorReport({ draft, receiptAudits });
        const schema = validateAuthorReport(report);
        if (!schema.valid) throw new GoalHarnessError("GOAL_REPORT_DRAFT_INVALID", "Assembled report failed Schema validation.", {
          phase, origin: "harness_review", failure_kind: "author_claim", findings: schema.errors.map(detail => ({code:"GOAL_REPORT_DRAFT_INVALID",message:detail.message,detail})),
        });
      } catch (error) { assemblyFindings.push(...selectRecovery(error).findings); report = null; }
    }
    const baselineCommit = resolveAuthorContentBaseCommit({ projectRoot: config.project_root, task, fallbackCommit: state.baseline.commit });
    // Local independent checks run before external I/O can consume the window.
    try { review = reviewFn({ projectRoot: config.project_root, baselineCommit,
      worktreePath: task.worktree_path, task: { ...task, goal_id: state.goal_id },
      report: report ?? draft, reportAvailable: Boolean(report), verifiedUuidReads: [], stateDir, phase, deadline }); }
    catch (error) { review = failedReview(error, {phase,task}); }
    const unavailableCauses = [...assemblyFindings, ...(localReceipts.findings ?? [])];
    if (!report) review.findings = [...(review.findings ?? []), ...unavailableCauses];
    const uuidAudit = report ? capture(() => auditUuidsFn({ report, tiangongCliRoot: config.tools?.tiangong_cli_root,
      collect: true, phase, deadline, startAfter: progress.uuids?.start_after }))
      : { valid: false, results: [], findings: unavailableCauses, checks: [...new Set([
        ...(review.subjects?.uuid_ids ?? []), ...(draft.uuid_audits ?? []).map(a => a.uuid.toLowerCase()),
      ])].map(subject_id => ({phase,check_id:"uuid_public_read",subject_id,status:"skipped",applicable:true,
        reason:"report_unavailable",findings:unavailableCauses,depends_on:[{check_id:"report_assembly",subject_id:task.pcr_path}]})) };
    uuidReads = Array.isArray(uuidAudit) ? uuidAudit : uuidAudit.results ?? [];
    const receiptAudit = report ? capture(() => auditHybridSearchReceipts({ report, stateDir, task,
      verifiedUuidReads: uuidReads, collect: true, phase, deadline, startAfter: progress.receipts?.start_after })) : { ...localReceipts, valid: false,
        findings: [...(localReceipts.findings ?? []), ...unavailableCauses],
        checks: [...(localReceipts.checks ?? []), ...(draft.uuid_audits ?? []).map(claim => ({
          phase, check_id: "receipt_adoption", subject_id: `${claim.hybrid_search_receipt_id}:${claim.uuid.toLowerCase()}`,
          applicable: true, status: "skipped", reason: "report_unavailable", findings: unavailableCauses,
          depends_on: [{check_id:"report_assembly",subject_id:task.pcr_path}],
        }))] };
    if (review.quality_context && report) review = completeAuthorReviewIdentity({ review, task, report, verifiedUuidReads: uuidReads, phase, deadline });
    assessment = assessRequiredReview({ phase, task, report: report ?? draft, review, uuidAudit, receiptAudit });
    assessment.findings.push(...assemblyFindings);
    assessment.valid = assessment.valid && assemblyFindings.length === 0 && Boolean(report);
    assessment.progress = { uuids: uuidAudit.progress ?? null, receipts: receiptAudit.progress ?? null };
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
    throw new GoalHarnessError(error.code ?? "GOAL_REPORT_PREPARATION_FAILED", error.message, {
      ...error.details, preparation_failure_id: reference,
    });
  }
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
    checks: { measurement: review.builder.measurement, sync: {
      first_run_clean: review.sync.first_run_clean, second_run_clean: review.sync.second_run_clean,
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
      stableArtifactJson(taskBinding(fresh.goal_id, latest)) !==
      stableArtifactJson(binding)
    )
      fail(
        "GOAL_REPORT_BINDING_MISMATCH",
        "Task changed during report preparation.",
      );
    if (
      artifactSha256(readArtifact(draftPath)) !== input.draft_sha256 ||
      stableArtifactJson(inspectContent(latest, report.commit_sha, deadline).files) !==
        stableArtifactJson(content.files)
    )
      fail(
        "GOAL_REPORT_BINDING_MISMATCH",
        "Author inputs changed during report preparation.",
      );
    const nowReceipts = loadReportReceiptEvidence({
      report,
      stateDir,
      task: latest, deadline, phase: "preparation",
    });
    if (
      stableArtifactJson(
        nowReceipts.map((r) => ({
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
    const prior = current.readEvents().find((e) => e.event_id === eventId);
    if (prior) {
      resolvePreparedReport({ stateDir, task: latest, submission, deadline });
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

export function resolvePreparedReport({ stateDir, task, submission, deadline = Infinity }) {
  reviewTimeRemaining(deadline, {phase:"harvest",subjectId:task?.id});
  if (
    task?.authoring_contract_version !== 2 ||
    !submission ||
    Object.keys(submission).sort().join(",") !==
      "commit_sha,prepared_report_id,report_sha256" ||
    !/^[a-f0-9]{64}$/.test(submission.prepared_report_id)
  )
    fail(
      "GOAL_REPORT_REFERENCE_INVALID",
      "Expected the exact prepared-report reference for this task.",
    );
  const store = new GoalEventStore({ stateDir }),
    state = store.rebuild();
  const authoritative = state.tasks.find((t) => t.id === task.id);
  if (
    !authoritative ||
    stableArtifactJson(taskBinding(state.goal_id, authoritative)) !==
      stableArtifactJson(taskBinding(state.goal_id, task))
  )
    fail(
      "GOAL_REPORT_BINDING_MISMATCH",
      "The supplied task snapshot is no longer current.",
    );
  const event = store
    .readEvents()
    .find(
      (e) =>
        e.event_id ===
          `author-report-prepared-${submission.prepared_report_id}` &&
        e.type === "author_report_prepared",
    );
  if (
    !event ||
    stableArtifactJson(event.payload.binding) !==
      stableArtifactJson(taskBinding(state.goal_id, task))
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
  const manifest = JSON.parse(manifestBytes),
    report = JSON.parse(reportBytes);
  if (
    artifactSha256(draftBytes) !== manifest.draft_sha256 ||
    report.commit_sha !== submission.commit_sha
  )
    fail("GOAL_REPORT_BINDING_MISMATCH", "Draft or commit binding changed.");
  assertReportTask(report, task);
  if (
    stableArtifactJson(inspectContent(task, report.commit_sha, deadline).files) !==
    stableArtifactJson(manifest.files)
  )
    fail(
      "GOAL_REPORT_BINDING_MISMATCH",
      "PCR content changed after preparation.",
    );
  const receipts = loadReportReceiptEvidence({ report, stateDir, task, deadline });
  if (
    stableArtifactJson(
      receipts.map((r) => ({
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
  contentVerified = true, commitSha = JSON.parse(draftBytes).commit_sha }) {
  const failure = { code: error.code ?? "GOAL_REPORT_PREPARATION_FAILED", message: error.message,
    details: error.details ?? {}, uuid_reads: Array.isArray(uuidReads) ? uuidReads : [] };
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
    if (stableArtifactJson(taskBinding(state.goal_id, latest)) !== stableArtifactJson(binding)
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

export function resolvePreparationFailure({ stateDir, task, forCommit = null, deadline = Infinity }) {
  if (!stateDir) return null;
  const store = new GoalEventStore({ stateDir }), state = store.rebuild();
  const latest = state.tasks.find(t => t.id === task.id);
  const binding = taskBinding(state.goal_id, task);
  if (!latest || stableArtifactJson(taskBinding(state.goal_id, latest)) !== stableArtifactJson(binding))
    fail("GOAL_REPORT_BINDING_MISMATCH", "Preparation failure requires the current task snapshot.");
  let event = null;
  for (const candidate of store.iterateEvents()) {
    if (stableArtifactJson(candidate.payload?.binding) !== stableArtifactJson(binding)) continue;
    if (candidate.type === "author_report_preparation_failed") event = candidate;
    if (candidate.type === "author_report_prepared") event = null;
  }
  if (!event) return null;
  const directory = failureDirectory(stateDir, task, event.payload.preparation_failure_id);
  const manifestBytes = readArtifact(path.join(directory, "manifest.json"), { root: stateDir });
  if (artifactSha256(manifestBytes) !== event.payload.manifest_sha256)
    fail("GOAL_REPORT_BINDING_MISMATCH", "Preparation failure manifest changed.");
  const manifest = JSON.parse(manifestBytes);
  if (forCommit && manifest.commit_sha !== forCommit) return null;
  const failurePath = path.join(directory, "failure.json"), failureBytes = readArtifact(failurePath, { root: stateDir });
  const draftBytes = readArtifact(path.join(directory, "draft.json"), { root: stateDir });
  if (artifactSha256(failureBytes) !== manifest.failure_sha256 || artifactSha256(draftBytes) !== manifest.draft_sha256
    || stableArtifactJson(manifest.binding) !== stableArtifactJson(binding)
    || stableArtifactJson(manifest.content_verified === false ? readContentFingerprints(task) : inspectContent(task, manifest.commit_sha, deadline).files) !== stableArtifactJson(manifest.files))
    fail("GOAL_REPORT_BINDING_MISMATCH", "Preparation failure input or artifact binding changed.");
  const draft = manifest.content_verified === false ? null : JSON.parse(draftBytes);
  if (draft) assertReportTask(draft, task);
  // Only successfully verified receipts are asserted here. A failed receipt is
  // recorded as a finding; it cannot masquerade as independently verified data.
  if (manifest.receipt_bindings.length) {
    const sealed = new Set(manifest.receipt_bindings.map(r => r.receipt_id));
    const receipts = loadReportReceiptEvidence({ report: {
      hybrid_search_receipt_ids: [...sealed],
      uuid_audits: (draft?.uuid_audits ?? []).filter(r => sealed.has(r.hybrid_search_receipt_id)),
      rejected_uuid_candidates: (draft?.rejected_uuid_candidates ?? []).filter(r => sealed.has(r.receipt_id)),
    }, stateDir, task, deadline });
    if (stableArtifactJson(receipts.map(r => ({ receipt_id: r.receipt_id, integrity: r.integrity }))) !== stableArtifactJson(manifest.receipt_bindings))
      fail("GOAL_REPORT_BINDING_MISMATCH", "Preparation failure receipt binding changed.");
  }
  return { failure: JSON.parse(failureBytes), manifest, failure_path: failurePath };
}

function readContentFingerprints(task) {
  return Object.fromEntries(task.allowed_files.map(file => {
    const absolute = path.resolve(task.worktree_path, file);
    if (!absolute.startsWith(`${path.resolve(task.worktree_path)}${path.sep}`)) fail("GOAL_ARTIFACT_UNSAFE", "PCR file escapes its worktree.");
    const fingerprint = withArtifactDirectory(path.dirname(absolute), directory => {
      try { lstatSync(path.join(directory, path.basename(absolute))); }
      catch (error) { if (error.code === "ENOENT") return null; throw error; }
      return artifactSha256(readArtifact(absolute, { root: task.worktree_path }));
    });
    return [file, fingerprint];
  }));
}

function failureDirectory(stateDir, task, id) {
  if (!/^[a-f0-9]{64}$/.test(id)) fail("GOAL_REPORT_BINDING_MISMATCH", "Invalid preparation failure identity.");
  return reportDirectory(stateDir, task, `failed-${id}`);
}
function inspectContent(task, commit, deadline = Infinity) {
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
    baselineCommit: baseline,
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
  const files = {};
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
function taskBinding(goalId, task) {
  return {
    goal_id: goalId,
    task_id: task.id,
    attempt: task.attempt,
    turn_id: task.turn_id,
    pcr_path: task.pcr_path,
    worktree_path: task.worktree_path,
    allowed_files: task.allowed_files,
    authoring_contract_version: task.authoring_contract_version,
  };
}
function assertPreparingTask(task, cwd) {
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
  if (path.resolve(cwd) !== path.resolve(task.worktree_path))
    fail(
      "GOAL_REPORT_TASK_INELIGIBLE",
      "Run preparation in the bound author worktree.",
    );
}
function assertReportTask(report, task) {
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
function reportDirectory(stateDir, task, id) {
  return path.join(
    stateDir,
    "authors",
    `prepared-${artifactSha256(task.id).slice(7, 31)}`,
    id,
  );
}
function publishPreparedDirectory(directory, files) {
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
function preparedGit(cwd, args, {deadline = Infinity, encoding = "utf8", maxBuffer = 1024 * 1024} = {}) {
  try {
    return execFileSync("git", args, {cwd,encoding,maxBuffer,stdio:["ignore","pipe","pipe"],
      timeout:reviewTimeRemaining(deadline,{phase:"preparation",subjectId:cwd})});
  } catch(error) {
    if(error.code === "ETIMEDOUT") throw new GoalHarnessError("GOAL_REVIEW_WINDOW_EXHAUSTED", "A preparation command exceeded its execution window.", {
      phase:"preparation",origin:"harness_deadline",failure_kind:"execution_window",retryable:false,subject_id:cwd,
    });
    throw error;
  }
}
const git = (cwd,args,deadline=Infinity) => preparedGit(cwd,args,{deadline}).trim();
function conflict(message, details) {
  fail("GOAL_REPORT_DECISION_CONFLICT", message, { ...details, phase:"preparation", origin:"harness_review", failure_kind:"author_claim", subject_id:details?.uuid });
}
function fail(code, message, details = {}) {
  throw new GoalHarnessError(code, message, details);
}
