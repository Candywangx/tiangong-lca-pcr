export class GoalHarnessError extends Error {
  constructor(code, message, details = {}) {
    super(message);
    this.name = "GoalHarnessError";
    this.code = code;
    this.details = details;
  }
}

export function asGoalHarnessError(error, fallbackCode = "GOAL_INTERNAL_ERROR") {
  if (error instanceof GoalHarnessError) {
    return error;
  }
  return new GoalHarnessError(fallbackCode, error?.message ?? String(error), {
    cause: error?.name ?? typeof error,
  });
}

// Only machine provenance and explicit contracts classify a failure. Author prose
// (including an author's infrastructure claim) is never transport evidence.
const CONTENT_CODES = new Set([
  'AUTHOR_REPORT_PATH_MISMATCH', 'AUTHOR_REPORT_SCHEMA_INVALID', 'AUTHOR_VALIDATE_FAILED', 'BILINGUAL_ROW_ALIGNMENT_MISMATCH', 'COMMON_FLOW_UUID_AUDIT_MISSING', 'INVENTORY_ACCOUNTING_MISMATCH', 'INVENTORY_COMPLEXITY_JUSTIFICATION_REQUIRED', 'INVENTORY_FLOW_NOT_ATOMIC', 'INVENTORY_REDESIGN_REQUIRED', 'INVENTORY_ROW_LIMIT_EXCEEDED', 'MANIFEST_UNRESOLVED_MISMATCH', 'RANGE_BOUNDS_INVALID', 'RANGE_INDEPENDENT_SOURCES_INSUFFICIENT', 'RANGE_SOURCE_TEXT_UNVERIFIED', 'RANGE_SYNTHESIS_MISSING', 'REASONED_ESTIMATE_MISREPRESENTED', 'SOURCE_ID_CODEX_FORBIDDEN', 'SOURCE_ORIGINAL_TEXT_UNVERIFIED', 'STRUCTURED_SYNC_NOT_DETERMINISTIC', 'UNAUTHORIZED_COMMIT_PATH', 'UUID_ADOPTION_DUPLICATE', 'UUID_ADOPTION_MISSING', 'ZH_FLOW_NAME_CANONICAL_FALLBACK_REQUIRED', 'ZH_FLOW_NAME_NOT_LOCALIZED', 'ZH_FLOW_NAME_NOT_OFFICIAL', 'ZH_FLOW_NAME_UNAVAILABLE_EXPLANATION_MISSING', 'ZH_INVENTORY_TEXT_NOT_LOCALIZED',
  'GOAL_AUTHOR_RESULT_INVALID', 'GOAL_AUTHOR_REPORT_PARSE_FAILED', 'GOAL_AUTHOR_PCR_INVALID',
  'GOAL_AUTHOR_WORKTREE_DIRTY', 'GOAL_AUTHOR_COMMIT_INVALID', 'GOAL_AUTHOR_REPAIR_REQUIRED',
  'GOAL_STRUCTURED_SYNC_STALE', 'GOAL_UUID_DIRECT_AUDIT_MISMATCH',
  'GOAL_SOURCE_DISCOVERY_ONLY', 'GOAL_SOURCE_LOCATOR_INVALID',
  'GOAL_HYBRID_SEARCH_QUERY_INVALID', 'GOAL_HYBRID_SEARCH_DECISIONS_INVALID',
  'GOAL_HYBRID_SEARCH_RECEIPT_MISSING', 'GOAL_UUID_DIRECT_READ_RECEIPT_MISSING',
]);
const INTEGRITY_CODES = new Set([
  "GOAL_RECEIPT_INTEGRITY_MISMATCH", "GOAL_REPORT_BINDING_MISMATCH",
  'GOAL_HYBRID_SEARCH_RECEIPT_HASH_MISMATCH', 'GOAL_HYBRID_SEARCH_WORKTREE_MISMATCH',
  'GOAL_UUID_DIRECT_READ_RECEIPT_INVALID', 'GOAL_HYBRID_SEARCH_RECEIPT_INVALID',
  'GOAL_REPORT_REFERENCE_INVALID', 'GOAL_SESSION_RECOVERY_INVALID',
  'GOAL_EVENT_ID_CONFLICT', 'GOAL_CACHE_EVENT_LOG_CORRUPT', 'GOAL_STRUCTURED_SYNC_NONDETERMINISTIC',
]);
const TRUSTED_TRANSPORT = new Set(['tool_transport', 'source_http', 'app_server', 'harness_probe']);
const INFRA_KINDS = new Set(['network', 'timeout', 'rate_limit', 'service_unavailable', 'usage_limit']);

export function classifyFinding(finding) {
  const details = { ...(finding?.details ?? {}) };
  for (const key of ['phase', 'origin', 'failure_kind', 'retryable', 'subject_id']) {
    if (details[key] === undefined && finding?.[key] !== undefined) details[key] = finding[key];
  }
  const code = finding?.code ?? 'GOAL_UNKNOWN_FAILURE';
  let category = 'unknown';
  if (INTEGRITY_CODES.has(code) || ['hash_mismatch', 'task_binding', 'receipt_integrity'].includes(details.failure_kind)) category = 'integrity';
  else if (['configuration', 'authentication', 'authorization'].includes(details.failure_kind)) category = 'configuration';
  else if (code === 'GOAL_MEASUREMENT_REVIEW_REQUIRED' || details.failure_kind === 'measurement') category = 'measurement';
  else if (code === 'GOAL_BOUNDARY_REVIEW_REQUIRED' || details.failure_kind === 'boundary') category = 'boundary';
  else if (details.origin !== 'author_reported' && !(finding?.author_reported === true || details.author_reported === true)) {
    if (details.failure_kind === 'execution_window' || code === 'GOAL_AUTHOR_TIMEOUT') category = 'execution_window';
    else if (TRUSTED_TRANSPORT.has(details.origin) && INFRA_KINDS.has(details.failure_kind)) category = 'infrastructure';
    else if (code === 'GOAL_CODEX_USAGE_LIMIT_EXCEEDED') category = 'infrastructure';
    else if (CONTENT_CODES.has(code) || (details.origin === 'harness_review' && details.failure_kind === 'author_claim')) category = 'content';
  }
  return { ...finding, code, message: finding?.message ?? '', details, category };
}

export function selectRecovery(input, { completeReport = false } = {}) {
  const parentDetails = Array.isArray(input) ? {} : (input?.details ?? {});
  const raw = Array.isArray(input) ? input : (parentDetails.findings ?? [input]);
  const { findings: ignored, ...inherited } = parentDetails;
  const findings = raw.map(f => classifyFinding({ ...f, details: { ...inherited, ...(f?.details ?? {}) } }));
  const categories = new Set(findings.map(f => f.category));
  let category = ['integrity', 'configuration', 'unknown', 'measurement', 'boundary', 'content', 'execution_window', 'infrastructure'].find(c => categories.has(c)) ?? 'unknown';
  let action = ({integrity:'hold',configuration:'hold',unknown:'hold',measurement:'manual_review',boundary:'manual_review',execution_window:'defer',infrastructure:completeReport?'recheck':'resume',content:'repair'})[category];
  if (category === 'infrastructure' && findings.some(f => f.category === 'infrastructure' && f.details.retryable === false)) action = 'hold';
  return { action, category, findings, retryable: ['recheck', 'resume', 'defer', 'repair'].includes(action) };
}
