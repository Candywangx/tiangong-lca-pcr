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
} from "node:fs";
import path from "node:path";
import { randomUUID } from "node:crypto";
import Ajv2020 from "ajv/dist/2020.js";
import { GoalEventStore } from "./event-store.mjs";
import { GoalHarnessError } from "./errors.mjs";
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
import { reviewAuthorWorktree, inspectAuthorCommit } from "./author-review.mjs";
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

export function prepareAuthorReport({
  config,
  stateDir,
  taskId,
  draftPath,
  cwd = process.cwd(),
  reviewFn = reviewAuthorWorktree,
  auditUuidsFn = auditReportedUuids,
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
      { findings: draftValidator.errors },
    );
  if (draft.boundary_review != null)
    fail(
      "GOAL_REPORT_DRAFT_INVALID",
      "Boundary referrals use the explicit referral output, not a completion report.",
    );
  assertReportTask(draft, task);
  const binding = taskBinding(state.goal_id, task),
    content = inspectContent(task, draft.commit_sha);
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
  const receiptAudits = loadReportReceiptEvidence({
    report: preliminary,
    stateDir,
    task,
  });
  const report = assembleAuthorReport({ draft, receiptAudits });
  const schema = validateAuthorReport(report);
  if (!schema.valid)
    fail(
      "GOAL_REPORT_DRAFT_INVALID",
      "Assembled report failed Schema validation.",
      { findings: schema.errors },
    );
  const uuidReads = auditUuidsFn({
    report,
    tiangongCliRoot: config.tools?.tiangong_cli_root,
  });
  auditHybridSearchReceipts({
    report,
    stateDir,
    task,
    verifiedUuidReads: uuidReads,
  });
  const baselineCommit = resolveAuthorContentBaseCommit({
    projectRoot: config.project_root,
    task,
    fallbackCommit: state.baseline.commit,
  });
  const review = reviewFn({
    projectRoot: config.project_root,
    baselineCommit,
    worktreePath: task.worktree_path,
    task: { ...task, goal_id: state.goal_id },
    report,
    stateDir,
  });
  if (
    review?.valid !== true ||
    review.builder?.measurement?.status !== "pass" ||
    review.sync?.first_run_clean !== true ||
    review.sync?.second_run_clean !== true
  )
    fail(
      "GOAL_REPORT_PREFLIGHT_FAILED",
      "Actual PCR inspection and both sync checks must pass.",
      { review },
    );
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
    checks: { measurement: review.builder.measurement, sync: review.sync },
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
      stableArtifactJson(inspectContent(latest, report.commit_sha).files) !==
        stableArtifactJson(content.files)
    )
      fail(
        "GOAL_REPORT_BINDING_MISMATCH",
        "Author inputs changed during report preparation.",
      );
    const nowReceipts = loadReportReceiptEvidence({
      report,
      stateDir,
      task: latest,
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
      resolvePreparedReport({ stateDir, task: latest, submission });
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

export function resolvePreparedReport({ stateDir, task, submission }) {
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
    stableArtifactJson(inspectContent(task, report.commit_sha).files) !==
    stableArtifactJson(manifest.files)
  )
    fail(
      "GOAL_REPORT_BINDING_MISMATCH",
      "PCR content changed after preparation.",
    );
  const receipts = loadReportReceiptEvidence({ report, stateDir, task });
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
function inspectContent(task, commit) {
  const root = task.worktree_path;
  if (
    git(root, ["rev-parse", "HEAD"]) !== commit ||
    git(root, ["status", "--porcelain=v1", "--untracked-files=all"])
  )
    fail(
      "GOAL_REPORT_COMMIT_INVALID",
      "Report preparation requires a clean committed author worktree.",
    );
  const baseline = task.author_content_base_commit ?? task.author_base_commit;
  const inspected = inspectAuthorCommit({
    projectRoot: root,
    baselineCommit: baseline,
    authorCommit: commit,
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
    const committed = execFileSync("git", ["show", `${commit}:${file}`], {
      cwd: root,
      maxBuffer: 4 * 1024 * 1024,
      stdio: ["ignore", "pipe", "pipe"],
    });
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
const git = (cwd, args) =>
  execFileSync("git", args, {
    cwd,
    encoding: "utf8",
    maxBuffer: 1024 * 1024,
    stdio: ["ignore", "pipe", "pipe"],
  }).trim();
function conflict(message, details) {
  fail("GOAL_REPORT_DECISION_CONFLICT", message, details);
}
function fail(code, message, details = {}) {
  throw new GoalHarnessError(code, message, details);
}
