import { GoalHarnessError, selectRecovery } from "./errors.mjs";
import { trialSemanticApproved } from "./model-trial.mjs";

const LOCAL_CHECKS = ["worktree_safety", "builder", "parse_en", "parse_zh", "parse_manifest", "quality", "structured_sync"];
const HASH = /^sha256:[a-f0-9]{64}$/u;
const UUID = /^[0-9a-f]{8}-[0-9a-f]{4}-[1-8][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/iu;

export function reviewTimeRemaining(deadline = Infinity, { now = Date.now, phase = "harvest", subjectId } = {}) {
  const remaining = Math.min(30_000, Math.ceil(deadline - now()));
  if (!(remaining > 0)) throw new GoalHarnessError("GOAL_REVIEW_WINDOW_EXHAUSTED", "The current review execution window is exhausted.", {
    phase, origin: "harness_deadline", failure_kind: "execution_window", retryable: false, subject_id: subjectId,
  });
  return remaining;
}

/** Only a caught reviewer exception may explain why its dependent checks could not run. */
export function failedReview(error, { phase, task }) {
  return { valid: false, phase, subjects: null, findings: selectRecovery(error).findings,
    checks: LOCAL_CHECKS.map(check_id => ({ phase, check_id, subject_id: task.pcr_path,
      status: "skipped", applicable: true, reason: "review_unavailable" })) };
}

/** Required subjects come from the actual parsed PCR and report references, never from returned result arrays. */
export function assessRequiredReview({ phase, task, report, review, uuidAudit, receiptAudit, sourceAudit, enrichment, semantic }) {
  if (!["preparation", "harvest"].includes(phase)) throw new GoalHarnessError("GOAL_REVIEW_PHASE_INVALID", "Review phase must be preparation or harvest.", { origin: "harness_review", failure_kind: "configuration" });
  const required = [], checks = [], findings = [];
  let valid = true;
  const subject = task?.pcr_path;
  const addFinding = finding => findings.push(finding);
  const incomplete = (checkId, subjectId, reason) => ({ code: "GOAL_REVIEW_CHECK_INCOMPLETE", message: `Required ${checkId} check is incomplete: ${reason}.`, phase, origin: "harness_review", failure_kind: "unverified_result", subject_id: subjectId });
  const requireCheck = (checkId, subjectId, passed, supplied = [], { applicable = true, reason, dependencyFailure = false, strictChecks = false } = {}) => {
    required.push({ phase, check_id: checkId, subject_id: subjectId, applicable, ...(reason ? { reason } : {}) });
    if (!applicable) {
      checks.push({ phase, check_id: checkId, subject_id: subjectId, applicable: false, status: "skipped", reason });
      return;
    }
    const matches = supplied.filter(check => check?.phase === phase && check?.check_id === checkId && check?.subject_id === subjectId);
    const explicit = supplied.length === 0 && !strictChecks ? null : matches.length === 1 ? matches[0] : { status: "missing" };
    const succeeded = passed && (explicit === null || explicit.status === "passed");
    const status = succeeded ? "passed" : explicit?.status === "skipped" ? "skipped" : "failed";
    checks.push({ ...(explicit ?? {}), phase, check_id: checkId, subject_id: subjectId, applicable: true, status, ...(!succeeded && reason ? { reason } : {}) });
    if (!succeeded) {
      valid = false;
      if (!dependencyFailure && !explicit?.findings?.length) addFinding(incomplete(checkId, subjectId, reason ?? (explicit?.status ?? "missing or invalid result")));
    }
  };
  const harvestEvidence = (value, name) => {
    if (Array.isArray(value)) return { results: value, checks: [], findings: [], valid: true, legacy: true };
    if (!value || !Array.isArray(value.results) || !Array.isArray(value.checks) || !Array.isArray(value.findings) || typeof value.valid !== "boolean") {
      valid = false;
      addFinding(incomplete(name, subject, "missing or unrecognized result envelope"));
      return { results: [], checks: [], findings: [], valid: false, missing: true };
    }
    findings.push(...value.findings, ...value.checks.flatMap(check => check.findings ?? []));
    if (!value.valid || value.findings.length > 0 || value.checks.some(check => check.status === "failed" || (check.status === "skipped" && check.applicable !== false))) valid = false;
    if (!value.valid && value.findings.length === 0 && value.checks.length === 0) addFinding(incomplete(name, subject, "returned valid:false without completed checks"));
    return value;
  };
  const uuid = harvestEvidence(uuidAudit, "uuid_audit"), receipts = harvestEvidence(receiptAudit, "receipt_audit");
  const sources = phase === "harvest" ? harvestEvidence(sourceAudit, "source_audit") : null;
  const evidenceScopes = [uuid, receipts, sources].filter(Boolean);
  const explainedFailure = (audit, checkId, subjectId, seen = new Set()) => {
    const key = `${checkId}:${subjectId}`;
    if (seen.has(key)) return false;
    const nextSeen = new Set([...seen, key]);
    const matches = audit.checks.filter(check => check.phase === phase && check.check_id === checkId && check.subject_id === subjectId);
    if (matches.length > 1 || matches[0]?.status === "passed") return false;
    if (matches[0]?.findings?.length || audit.findings.some(finding => (finding.details?.subject_id ?? finding.subject_id) === subjectId)) return true;
    return (matches[0]?.depends_on ?? []).some(dependency => (dependency.phase ?? phase) === phase && evidenceScopes.some(scope => explainedFailure(scope, dependency.check_id, dependency.subject_id, nextSeen)));
  };
  findings.push(...(review?.findings ?? []), ...(review?.checks ?? []).flatMap(check => check.findings ?? []));
  if (review?.valid !== true || (review?.findings?.length ?? 0) > 0) valid = false;
  const localChecks = Array.isArray(review?.checks) ? review.checks : [];
  const localPassed = checkId => localChecks.filter(check => check.phase === phase && check.check_id === checkId && check.subject_id === subject && check.status === "passed").length === 1;
  const safeCommit = review?.commit?.is_descendant === true && review.commit.author_commit === report?.commit_sha && sameStrings(review.commit.changed_files, task?.allowed_files);
  const localValues = {
    worktree_safety: safeCommit,
    builder: Array.isArray(review?.builder?.problems) && review.builder.problems.length === 0,
    parse_en: localPassed("parse_en"), parse_zh: localPassed("parse_zh"), parse_manifest: localPassed("parse_manifest"),
    quality: review?.quality?.valid === true && (review.quality.findings?.length ?? 0) === 0,
    structured_sync: review?.sync?.first_run_clean === true && review.sync.second_run_clean === true,
  };
  for (const checkId of LOCAL_CHECKS) {
    const check = localChecks.find(entry => entry.phase === phase && entry.check_id === checkId && entry.subject_id === subject);
    requireCheck(checkId, subject, localPassed(checkId) && localValues[checkId], localChecks, {
      dependencyFailure: (check?.status === "skipped" || check?.status === "failed") && ((check.findings?.length ?? 0) > 0 || findings.length > 0),
      reason: check?.reason,
    });
  }
  const subjectsValid = review?.subjects?.pcr_path === subject && review.subjects.commit_sha === report?.commit_sha && ["uuid_ids", "receipt_ids", "source_ids"].every(key => Array.isArray(review.subjects[key]));
  requireCheck("actual_pcr_subjects", subject, subjectsValid, [], { dependencyFailure: !subjectsValid && findings.length > 0 });
  const measurementRequired = task?.authoring_contract_version === 2;
  const measurementPassed = review?.builder?.measurement?.status === "pass";
  if (measurementRequired && !measurementPassed && (review?.builder?.measurementReviewRequired === true || review?.builder?.measurement?.status === "manual_review")) {
    addFinding({ code: "GOAL_MEASUREMENT_REVIEW_REQUIRED", message: "Required measurement consistency has not passed.", phase, origin: "harness_review", failure_kind: "measurement", subject_id: subject, measurement: review.builder.measurement });
  }
  requireCheck("measurement", subject, measurementPassed, [], { applicable: measurementRequired, reason: measurementRequired ? undefined : "historical_authoring_contract", dependencyFailure: findings.length > 0 });

  const declarations = Array.isArray(report?.uuid_audits) ? report.uuid_audits : [];
  const unavailableDeclarations = new Set();
  for (const uuidId of unique([...(subjectsValid ? review.subjects.uuid_ids : []), ...declarations.map(entry => entry.uuid)])) {
    const declared = declarations.filter(entry => entry.uuid?.toLowerCase() === uuidId);
    if (declared.length !== 1 || !declared[0]?.hybrid_search_receipt_id) {
      unavailableDeclarations.add(uuidId);
      valid = false;
      addFinding({ code: declared.length > 1 ? "UUID_ADOPTION_DUPLICATE" : "UUID_ADOPTION_MISSING", message: "Actual PCR UUIDs require exactly one adopted declaration linked to a receipt.", phase, origin: "harness_review", failure_kind: "author_claim", subject_id: uuidId });
    }
  }
  const uuidIds = unique([...(subjectsValid ? review.subjects.uuid_ids : []), ...declarations.map(entry => entry.uuid)]);
  for (const uuidId of uuidIds) {
    const matches = uuid.results.filter(entry => entry?.uuid?.toLowerCase() === uuidId);
    const result = matches.length === 1 ? matches[0] : null;
    const unavailable = unavailableDeclarations.has(uuidId);
    const uuidChecks = unavailable ? [{ phase, check_id: "uuid_public_read", subject_id: uuidId, status: "skipped", reason: "uuid_declaration_unavailable", depends_on: [{ phase, check_id: "quality", subject_id: subject }] }] : uuid.checks;
    requireCheck("uuid_public_read", uuidId, !unavailable && validUuidRead(result), uuidChecks, { dependencyFailure: unavailable || explainedFailure(uuid, "uuid_public_read", uuidId), strictChecks: !uuid.legacy, reason: unavailable ? "uuid_declaration_unavailable" : undefined });
  }
  const receiptIds = unique([
    ...(subjectsValid ? review.subjects.receipt_ids : []), ...(report?.hybrid_search_receipt_ids ?? []),
    ...declarations.map(entry => entry.hybrid_search_receipt_id), ...(report?.rejected_uuid_candidates ?? []).map(entry => entry.receipt_id),
    ...(report?.inventory?.unresolved ?? []).flatMap(entry => entry.hybrid_search_receipt_ids ?? []),
  ], false);
  for (const receiptId of receiptIds) {
    const matches = receipts.results.filter(entry => entry?.receipt_id === receiptId);
    requireCheck("receipt_integrity", receiptId, matches.length === 1 && validReceipt(matches[0], task), receipts.checks, { dependencyFailure: explainedFailure(receipts, "receipt_integrity", receiptId), strictChecks: !receipts.legacy });
  }
  for (const declaration of declarations) {
    const uuidId = String(declaration.uuid ?? "").toLowerCase(), receiptId = declaration.hybrid_search_receipt_id;
    const receipt = receipts.results.find(entry => entry.receipt_id === receiptId);
    const decisions = receipt?.candidate_decisions?.filter(entry => entry.uuid === uuidId) ?? [];
    const publicReads = uuid.results.filter(entry => entry.uuid?.toLowerCase() === uuidId);
    const passed = decisions.length === 1 && decisions[0].decision === "adopted" && publicReads.length === 1 && sameIdentity(decisions[0].direct_read, publicReads[0]);
    requireCheck("receipt_adoption", `${receiptId}:${uuidId}`, passed, receipts.checks, { dependencyFailure: explainedFailure(receipts, "receipt_adoption", `${receiptId}:${uuidId}`), strictChecks: !receipts.legacy });
  }
  if (phase === "harvest") {
    const actualSourceIds = new Set(subjectsValid ? review.subjects.source_ids : []);
    const sourceIds = unique([...actualSourceIds, ...(report?.sources ?? []).map(source => source.source_id)], false);
    for (const sourceId of sourceIds) {
      const declared = (report?.sources ?? []).filter(source => source.source_id === sourceId);
      const source = declared.length === 1 ? declared[0] : null;
      const requiredByPcr = actualSourceIds.has(sourceId);
      const missingDeclaration = !source || (requiredByPcr && source.discovery_only === true);
      if (missingDeclaration) {
        valid = false;
        addFinding({ code: declared.length > 1 ? "SOURCE_DECLARATION_DUPLICATE" : source ? "SOURCE_REFERENCE_DISCOVERY_ONLY" : "SOURCE_DECLARATION_MISSING", message: "Actual PCR evidence requires a unique original-source declaration.", phase, origin: "harness_review", failure_kind: "author_claim", subject_id: sourceId });
      }
      const matches = sources.results.filter(entry => entry.source_id === sourceId);
      const result = matches.length === 1 ? matches[0] : null;
      const passed = source && !missingDeclaration && result?.original_identity_verified === true && HASH.test(result.content_sha256) && result.content_byte_length > 0 && normalizedLocator(result.locator) === normalizedLocator(source.locator);
      const sourceChecks = missingDeclaration ? [{ phase, check_id: "source_original", subject_id: sourceId, status: "skipped", reason: "source_declaration_unavailable" }] : sources.checks;
      requireCheck("source_original", sourceId, passed, sourceChecks, { applicable: requiredByPcr || source?.discovery_only !== true, reason: missingDeclaration ? "source_declaration_unavailable" : source?.discovery_only === true ? "discovery_only" : undefined, dependencyFailure: missingDeclaration || explainedFailure(sources, "source_original", sourceId), strictChecks: !sources.legacy });
    }
    const enrichmentRequired = (task?.uuid_enrichment_generation ?? 0) > 0;
    requireCheck("enrichment", task?.id, enrichment?.valid === true && enrichment.task_id === task.id && enrichment.commit_sha === report.commit_sha && Array.isArray(enrichment.findings) && enrichment.findings.length === 0, [], { applicable: enrichmentRequired, reason: enrichmentRequired ? undefined : "no_enrichment_generation" });
    findings.push(...(enrichment?.findings ?? []));
    const semanticRequired = Boolean(task?.model_trial);
    const automaticPassed = valid && findings.length === 0;
    const semanticTask = semantic === undefined ? task : { ...task, trial_semantic_review: semantic };
    const semanticPassed = trialSemanticApproved(semanticTask, report?.commit_sha);
    if (semanticRequired && automaticPassed && !semanticPassed) addFinding({ code: "GOAL_TRIAL_SEMANTIC_REVIEW_REQUIRED", message: "The current commit requires the existing trial semantic review.", phase, origin: "harness_review", failure_kind: "boundary", subject_id: task.id });
    const semanticChecks = semanticRequired && !automaticPassed ? [{ phase, check_id: "semantic", subject_id: task.id, status: "skipped", reason: "automatic_checks_incomplete" }] : [];
    requireCheck("semantic", task?.id, automaticPassed && semanticPassed, semanticChecks, { applicable: semanticRequired, reason: semanticRequired ? automaticPassed ? undefined : "automatic_checks_incomplete" : "no_model_trial", dependencyFailure: semanticRequired && (!automaticPassed || !semanticPassed) });
  }
  return { valid: valid && findings.length === 0, phase, required_checks: required, checks, findings: [...new Map(findings.map(finding => [JSON.stringify(finding), finding])).values()] };
}

export function assertRequiredReview(options) {
  const assessment = assessRequiredReview(options);
  if (!assessment.valid) throw new GoalHarnessError("GOAL_AUTHOR_REVIEW_INCOMPLETE", "Every applicable required check must explicitly pass before this result can be accepted.", assessment);
  return assessment;
}

/** Recheck a Harness-owned acceptance proof without reading or rewriting historical artifacts. */
export function hasAcceptedReview(task) {
  const review = task?.validation_result, saved = review?.assessment, evidence = task?.evidence_audit;
  if (task?.coordinator_hold || typeof task?.author_commit !== "string" || !task.author_commit
    || review?.valid !== true || saved?.valid !== true || saved.phase !== "harvest"
    || !Array.isArray(saved.required_checks) || !Array.isArray(saved.checks) || !Array.isArray(saved.findings) || saved.findings.length
    || !["uuid_reads", "hybrid_search_receipts", "source_reads"].every(key => Array.isArray(evidence?.[key]))
    || !["uuid_ids", "receipt_ids", "source_ids"].every(key => Array.isArray(review?.subjects?.[key]) && review.subjects[key].every(id => typeof id === "string" && id.length > 0))) return false;
  try {
    // The accepted event retains actual PCR subjects and successful evidence.
    // Reconstruct references only; semantic author claims are already covered
    // by the bound local quality proof and are never inferred here.
    const requiredSources = saved.required_checks.filter(check => check.check_id === "source_original");
    const sources = unique([...review.subjects.source_ids, ...evidence.source_reads.map(source => source.source_id), ...requiredSources.map(check => check.subject_id)], false)
      .map(sourceId => {
        const read = evidence.source_reads.find(source => source.source_id === sourceId);
        return { source_id: sourceId, locator: read?.locator,
          discovery_only: !read && !review.subjects.source_ids.includes(sourceId) && requiredSources.some(check => check.subject_id === sourceId && check.applicable === false) };
      });
    const report = { commit_sha: task.author_commit,
      uuid_audits: evidence.uuid_reads.map(read => ({ uuid: read.uuid, hybrid_search_receipt_id: read.hybrid_search_receipt_id })),
      hybrid_search_receipt_ids: review.subjects.receipt_ids, sources };
    const recomputed = assessRequiredReview({ phase: "harvest", task, report, review,
      uuidAudit: evidence.uuid_reads, receiptAudit: evidence.hybrid_search_receipts, sourceAudit: evidence.source_reads,
      enrichment: { valid: true, task_id: task.id, commit_sha: task.author_commit, findings: [] } });
    if (!recomputed.valid || saved.required_checks.length !== recomputed.required_checks.length || saved.checks.length !== recomputed.checks.length) return false;
    return recomputed.required_checks.every(required => {
      const sameScope = check => check.phase === required.phase && check.check_id === required.check_id && check.subject_id === required.subject_id;
      const requiredMatches = saved.required_checks.filter(sameScope), results = saved.checks.filter(sameScope);
      if (requiredMatches.length !== 1 || results.length !== 1) return false;
      const applicable = required.applicable !== false;
      return (requiredMatches[0].applicable !== false) === applicable && (results[0].applicable !== false) === applicable
        && results[0].status === (applicable ? "passed" : "skipped") && (results[0].findings?.length ?? 0) === 0;
    });
  } catch {
    return false;
  }
}

function validUuidRead(read) {
  return Boolean(read && UUID.test(read.uuid) && read.state_code === 100 && typeof read.base_name_en === "string" && read.base_name_en && typeof read.base_name_zh === "string" && ["product", "waste", "elementary"].includes(read.flow_type) && read.property && read.flow_property_state_code === 100 && read.unit_group_state_code === 100 && UUID.test(read.unit_group_uuid) && HASH.test(read.response_sha256));
}
function validReceipt(receipt, task) {
  return Boolean(receipt?.authenticated === true && HASH.test(receipt.result_sha256) && Array.isArray(receipt.candidate_uuids) && Array.isArray(receipt.candidate_decisions) && sameStrings(receipt.candidate_uuids, receipt.candidate_decisions.map(entry => entry.uuid)) && receipt.candidate_decisions.every(entry => ["adopted", "rejected"].includes(entry.decision) && entry.direct_read?.uuid === entry.uuid) && (task.authoring_contract_version !== 2 || receipt.task_id === task.id));
}
function sameIdentity(left, right) {
  return Boolean(left && right && ["uuid", "state_code", "base_name_en", "base_name_zh", "flow_type", "classifications", "property", "flow_property_uuid", "unit_group_uuid", "flow_property_state_code", "unit_group_state_code", "reference_unit", "general_comment"].every(key => JSON.stringify(left[key]) === JSON.stringify(right[key])));
}
function unique(values, lowercase = true) { return [...new Set(values.filter(value => typeof value === "string" && value).map(value => lowercase ? value.toLowerCase() : value))].sort(); }
function sameStrings(left, right) { return Array.isArray(left) && Array.isArray(right) && left.length === right.length && [...left].sort().every((value, index) => value === [...right].sort()[index]); }
function normalizedLocator(value) { const locator = String(value ?? ""); return /^10\.\d{4,9}\//u.test(locator) ? `https://doi.org/${locator}` : locator.replace(/^doi:\s*/iu, "https://doi.org/"); }
