import assert from "node:assert/strict";
import test from "node:test";
import { assessRequiredReview, assertRequiredReview, hasAcceptedReview, reviewTimeRemaining } from "./review-assessment.mjs";
import { GoalHarnessError, selectRecovery } from "./errors.mjs";
import * as assessmentApi from "./review-assessment.mjs";

const UUID = "11111111-1111-4111-8111-111111111111";
const HASH = `sha256:${"a".repeat(64)}`;
function fixture(phase = "preparation") {
  const files = ["manifest.yaml", "pcr.en-US.md", "pcr.zh-CN.md", "structured.yaml"].map(file => `pcr/${file}`);
  const task = { id: "task-1", pcr_path: "pcr", allowed_files: files, authoring_contract_version: 2 };
  const report = { commit_sha: "a".repeat(40), pcr_path: "pcr", files, uuid_audits: [], sources: [], hybrid_search_receipt_ids: [], inventory: { unresolved: [] } };
  const review = {
    valid: true,
    checks: ["worktree_safety", "builder", "parse_en", "parse_zh", "parse_manifest", "quality", "structured_sync"].map(check_id => ({ phase, check_id, subject_id: "pcr", status: "passed" })),
    findings: [], commit: { is_descendant: true, author_commit: report.commit_sha, changed_files: files },
    builder: { problems: [], measurement: { status: "pass" } }, quality: { valid: true, findings: [] }, sync: { first_run_clean: true, second_run_clean: true },
    subjects: { pcr_path: "pcr", commit_sha: report.commit_sha, uuid_ids: [], receipt_ids: [], source_ids: [] },
  };
  return { phase, task, report, review, uuidAudit: [], receiptAudit: [], sourceAudit: [] };
}

function uuidFixture() {
  const options = fixture();
  const read = { uuid: UUID, state_code: 100, base_name_en: "Iron", base_name_zh: "铁", flow_type: "product", classifications: [], property: "Mass", flow_property_state_code: 100, unit_group_state_code: 100, unit_group_uuid: UUID, response_sha256: HASH };
  options.report.uuid_audits = [{ uuid: UUID, hybrid_search_receipt_id: "receipt-1" }];
  options.review.subjects.uuid_ids = [UUID];
  options.uuidAudit = [read];
  options.receiptAudit = [{ receipt_id: "receipt-1", task_id: options.task.id, authenticated: true, result_sha256: HASH, candidate_uuids: [UUID], candidate_decisions: [{ uuid: UUID, decision: "adopted", direct_read: read }] }];
  return options;
}

test("a complete UUID-to-receipt-to-public-read chain passes, but omission or duplicate declaration cannot", () => {
  const options = uuidFixture();
  assert.equal(assessRequiredReview(options).valid, true);
  const missing = structuredClone(options);
  missing.report.uuid_audits = [];
  missing.receiptAudit = [];
  assert.equal(assessRequiredReview(missing).valid, false);
  const duplicate = structuredClone(options);
  duplicate.report.uuid_audits.push(duplicate.report.uuid_audits[0]);
  assert.equal(assessRequiredReview(duplicate).valid, false);
});

test("checks belonging to another phase or subject cannot satisfy the current review", () => {
  const options = uuidFixture();
  options.uuidAudit = { valid: true, results: options.uuidAudit, findings: [], checks: [{ phase: "harvest", check_id: "uuid_public_read", subject_id: UUID, status: "passed" }] };
  assert.equal(assessRequiredReview(options).valid, false);
});

test("a deterministic measurement failure does not manufacture a manual-review request", () => {
  const options = fixture();
  options.review.builder.measurement.status = "fail";
  options.review.findings = [{ code: "GOAL_AUTHOR_PCR_INVALID", message: "denominators conflict", failure_kind: "author_claim", origin: "harness_review" }];
  const result = assessRequiredReview(options);
  assert.equal(result.valid, false);
  assert.equal(result.findings.some(finding => finding.code === "GOAL_MEASUREMENT_REVIEW_REQUIRED"), false);
});

test("trial semantic review waits for automatic checks instead of masking an existing content failure", () => {
  const options = fixture("harvest");
  options.task.model_trial = { trial_id: "trial-1" };
  options.review.valid = false;
  options.review.builder.problems = ["inventory is incomplete"];
  options.review.checks.find(check => check.check_id === "builder").status = "failed";
  options.review.findings = [{ code: "GOAL_AUTHOR_PCR_INVALID", message: "inventory is incomplete", origin: "harness_review", failure_kind: "author_claim" }];
  const result = assessRequiredReview(options);
  assert.equal(result.valid, false);
  assert.equal(result.findings.some(finding => finding.code === "GOAL_TRIAL_SEMANTIC_REVIEW_REQUIRED"), false);
  assert.equal(result.checks.find(check => check.check_id === "semantic").reason, "automatic_checks_incomplete");
});

test("blocking findings nested inside a check cannot be hidden by a successful outer result", () => {
  const options = fixture();
  options.review.checks[1].findings = [{ code: "GOAL_AUTHOR_PCR_INVALID", message: "hidden failure" }];
  const result = assessRequiredReview(options);
  assert.equal(result.valid, false);
  assert.ok(result.findings.some(finding => finding.message === "hidden failure"));
});

test("actual PCR source references cannot disappear when an author supplies an empty sources array", () => {
  const options = fixture("harvest");
  options.review.subjects.source_ids = ["actual-method-source"];
  const result = assessRequiredReview(options);
  assert.equal(result.valid, false);
  assert.ok(result.required_checks.some(check => check.check_id === "source_original" && check.subject_id === "actual-method-source"));
  assert.ok(result.findings.some(finding => finding.code === "SOURCE_DECLARATION_MISSING"));
  assert.equal(result.findings.some(finding => finding.failure_kind === "unverified_result"), false);
});

test("a UUID outage explains its dependent adoption check, but not an unrelated missing UUID check", () => {
  const options = uuidFixture();
  const failure = { code: "GOAL_UUID_DIRECT_READ_FAILED", message: "timeout", details: { phase: options.phase, subject_id: UUID, origin: "tool_transport", failure_kind: "timeout", retryable: true } };
  options.uuidAudit = { valid: false, results: [], findings: [failure], checks: [{ phase: options.phase, check_id: "uuid_public_read", subject_id: UUID, status: "failed", findings: [failure] }] };
  options.receiptAudit = { valid: false, results: options.receiptAudit, findings: [], checks: [
    { phase: options.phase, check_id: "receipt_integrity", subject_id: "receipt-1", status: "passed" },
    { phase: options.phase, check_id: "receipt_adoption", subject_id: `receipt-1:${UUID}`, status: "skipped", depends_on: [{ phase: options.phase, check_id: "uuid_public_read", subject_id: UUID }] },
  ] };
  assert.equal(assessRequiredReview(options).findings.some(finding => finding.failure_kind === "unverified_result"), false);
  const otherUuid = "22222222-2222-4222-8222-222222222222";
  options.review.subjects.uuid_ids.push(otherUuid);
  options.report.uuid_audits.push({ uuid: otherUuid, hybrid_search_receipt_id: "receipt-1" });
  assert.ok(assessRequiredReview(options).findings.some(finding => finding.subject_id === otherUuid && finding.failure_kind === "unverified_result"));
});

test("fixed required scopes reject an empty or partially returned successful review", () => {
  const options = fixture();
  assert.equal(assessRequiredReview(options).valid, true);
  for (const checks of [[], options.review.checks.slice(1)]) {
    assert.equal(assessRequiredReview({ ...options, review: { ...options.review, checks } }).valid, false);
  }
  assert.throws(() => assertRequiredReview({ ...options, review: { valid: true } }), error => error.code === "GOAL_AUTHOR_REVIEW_INCOMPLETE");
});

test("failed and skipped required results cannot pass even when all other returned checks pass", () => {
  const options = fixture();
  for (const status of ["failed", "skipped"]) {
    const review = structuredClone(options.review);
    review.checks[1].status = status;
    assert.equal(assessRequiredReview({ ...options, review }).valid, false);
  }
  assert.equal(assessRequiredReview({ ...options, review: { ...options.review, valid: false } }).valid, false);
  assert.equal(assessRequiredReview({ ...options, uuidAudit: { valid: false, checks: [], findings: [], results: [] } }).valid, false);
  assert.equal(assessRequiredReview({ ...options, uuidAudit: undefined }).valid, false);
});

test("an envelope cannot replace required per-subject checks with a complete-looking result array", () => {
  const options = uuidFixture();
  const read = options.uuidAudit[0];
  options.uuidAudit = { valid: true, checks: [], findings: [], results: [read] };
  assert.equal(assessRequiredReview(options).checks.find(check => check.check_id === "uuid_public_read").status, "failed");
});

test("actual PCR UUIDs establish expected subjects even when the author omitted the declaration", () => {
  const options = fixture();
  options.review.subjects.uuid_ids = [UUID];
  const result = assessRequiredReview(options);
  assert.equal(result.valid, false);
  assert.ok(result.required_checks.some(check => check.check_id === "uuid_public_read" && check.subject_id === UUID));
  assert.equal(result.checks.find(check => check.check_id === "uuid_public_read").status, "skipped");
  assert.equal(result.checks.find(check => check.check_id === "uuid_public_read").reason, "uuid_declaration_unavailable");
  assert.equal(selectRecovery(result.findings).action, "repair");
});

test("preparation does not certify harvest source or semantic review", () => {
  const options = fixture();
  options.report.sources = [{ source_id: "source-1", locator: "https://example.invalid/source", discovery_only: false }];
  options.review.subjects.source_ids = ["source-1"];
  assert.equal(assessRequiredReview(options).valid, true);
  options.phase = "harvest";
  options.review.checks.forEach(check => { check.phase = "harvest"; });
  assert.equal(assessRequiredReview(options).valid, false);
  options.sourceAudit = [{ source_id: "source-1", locator: "https://example.invalid/source", original_identity_verified: true, content_sha256: HASH, content_byte_length: 10 }];
  assert.equal(assessRequiredReview(options).valid, true);
  options.task.model_trial = { trial_id: "trial" };
  assert.equal(assessRequiredReview(options).valid, false);
});

test("remaining-time helper bounds each synchronous operation and classifies exhaustion", () => {
  assert.equal(reviewTimeRemaining(100_000, { now: () => 0 }), 30_000);
  assert.equal(reviewTimeRemaining(100_000, { now: () => 99_750 }), 250);
  assert.throws(() => reviewTimeRemaining(100, { now: () => 100, phase: "preparation", subjectId: UUID }), error =>
    error.code === "GOAL_REVIEW_WINDOW_EXHAUSTED" && error.details.subject_id === UUID && error.details.failure_kind === "execution_window");
});

test("stored acceptance proof requires current bound local, UUID, receipt, source and applicable decision scopes", () => {
  const options = uuidFixture();
  options.phase = "harvest";
  options.review.checks.forEach(check => { check.phase = "harvest"; });
  options.uuidAudit[0].hybrid_search_receipt_id = "receipt-1";
  options.review.subjects.receipt_ids = ["receipt-1"];
  options.review.subjects.source_ids = ["source-1"];
  options.report.sources = [{ source_id: "source-1", locator: "https://example.invalid/original", discovery_only: false }];
  options.sourceAudit = [{ ...options.report.sources[0], original_identity_verified: true, content_sha256: HASH, content_byte_length: 12 }];
  const accepted = { ...options.task, state: "valid_result", author_commit: options.report.commit_sha,
    validation_result: { ...options.review, assessment: assessRequiredReview(options) },
    evidence_audit: { uuid_reads: options.uuidAudit, hybrid_search_receipts: options.receiptAudit, source_reads: options.sourceAudit } };
  assert.equal(hasAcceptedReview(accepted), true);
  for (const mutate of [
    task => { task.validation_result.assessment.checks = task.validation_result.assessment.checks.filter(check => check.check_id !== "quality"); },
    task => { task.validation_result.assessment.required_checks = task.validation_result.assessment.required_checks.filter(check => check.check_id !== "uuid_public_read"); },
    task => { task.validation_result.assessment.checks.find(check => check.check_id === "source_original").status = "skipped"; },
    task => { task.validation_result.assessment.checks.find(check => check.check_id === "receipt_adoption").applicable = false; },
    task => { task.evidence_audit.uuid_reads = []; },
    task => { task.evidence_audit.uuid_reads.push(task.evidence_audit.uuid_reads[0]); },
    task => { task.evidence_audit.hybrid_search_receipts = []; },
    task => { task.evidence_audit.source_reads = []; },
    task => { task.validation_result.subjects.commit_sha = "b".repeat(40); },
    task => { task.validation_result.builder.measurement.status = "manual_review"; },
    task => { task.uuid_enrichment_generation = 1; },
    task => { task.model_trial = { trial_id: "new-trial" }; },
  ]) {
    const corrupted = structuredClone(accepted);
    mutate(corrupted);
    assert.equal(hasAcceptedReview(corrupted), false, mutate.toString());
  }
});

test("a thrown review failure explains unavailable dependent checks without certifying an empty returned review", () => {
  const options = fixture("harvest");
  const error = new GoalHarnessError("GOAL_MEASUREMENT_REVIEW_REQUIRED", "Measurement requires an explicit decision.", {
    phase: "harvest", origin: "harness_review", failure_kind: "measurement", retryable: false,
  });
  options.review = assessmentApi.failedReview(error, { phase: "harvest", task: options.task });
  const assessment = assessRequiredReview(options);
  assert.equal(assessment.valid, false);
  assert.equal(selectRecovery(assessment.findings).action, "manual_review");
  assert.equal(assessment.findings.some(finding => finding.failure_kind === "unverified_result"), false);
  assert.ok(options.review.checks.every(check => check.status === "skipped" && check.reason === "review_unavailable"));
  assert.equal(options.review.subjects, null);
  assert.equal(selectRecovery(assessRequiredReview({ ...options, review: {} }).findings).action, "hold");
});
