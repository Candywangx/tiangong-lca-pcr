import { assessRequiredReview } from "../review-assessment.mjs";

// Complete trusted review callback for transport-only tests. Content tests use
// the real reviewer; no author-controlled field can supply this callback.
export function passingReview({ task, report, phase = "harvest" }) {
  return {
    valid: true, pcr_id: "fixture-pcr", findings: [],
    commit: { is_descendant: true, author_commit: report.commit_sha, changed_files: task.allowed_files },
    builder: { problems: [], warnings: [], measurement: { status: "pass", coverage: { complete: true } } },
    quality: { valid: true, findings: [] },
    sync: { first_run_clean: true, second_run_clean: true },
    checks: ["worktree_safety", "builder", "parse_en", "parse_zh", "parse_manifest", "quality", "structured_sync"]
      .map(check_id => ({ phase, check_id, subject_id: task.pcr_path, status: "passed", applicable: true, findings: [] })),
    subjects: { pcr_path: task.pcr_path, commit_sha: report.commit_sha,
      uuid_ids: (report.uuid_audits ?? []).map(entry => entry.uuid),
      receipt_ids: report.hybrid_search_receipt_ids ?? [], source_ids: (report.sources ?? []).map(entry => entry.source_id) },
  };
}

// Explicit accepted proof for scheduler/transport fixtures. This helper never
// runs in production and does not repair historical task state.
export function acceptedReviewTask(task, { report, uuidReads = [], receiptReads = [], sourceReads = [] } = {}) {
  const pcrPath = task.pcr_path ?? `library/pcrs/fixture/${task.id}`;
  const bound = { ...task, pcr_path: pcrPath, allowed_files: task.allowed_files ?? ["manifest.yaml", "pcr.en-US.md", "pcr.zh-CN.md", "structured.yaml"].map(file => `${pcrPath}/${file}`) };
  const authorReport = report ?? { commit_sha: bound.author_commit, uuid_audits: [], hybrid_search_receipt_ids: [], sources: [] };
  const review = passingReview({ task: bound, report: authorReport });
  const assessment = assessRequiredReview({ phase: "harvest", task: bound, report: authorReport, review,
    uuidAudit: uuidReads, receiptAudit: receiptReads, sourceAudit: sourceReads,
    enrichment: { valid: true, task_id: bound.id, commit_sha: bound.author_commit, findings: [] } });
  if (!assessment.valid) throw new Error("Accepted review fixture must satisfy every required check.");
  return { ...bound, validation_result: { ...review, assessment }, evidence_audit: {
    uuid_reads: uuidReads, hybrid_search_receipts: receiptReads, source_reads: sourceReads,
  } };
}
