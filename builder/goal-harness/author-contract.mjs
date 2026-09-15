import { GoalHarnessError } from "./errors.mjs";

const VERSION_FIELDS = ["authoring_contract_version", "author_draft_schema_version", "author_report_schema_version"];
const NEW_CONTRACT = Object.freeze({ authoring_contract_version: 2, author_draft_schema_version: 2, author_report_schema_version: 1 });

/** Missing fields describe historical contracts; resolving never upgrades them. */
function resolveVersions(task) {
  const contract = Object.fromEntries(VERSION_FIELDS.map(field => [field, task[field] === undefined ? 1 : task[field]]));
  const { authoring_contract_version: authoring, author_draft_schema_version: draft, author_report_schema_version: report } = contract;
  if (![1, 2].includes(authoring) || ![1, 2].includes(draft) || report !== 1 || (authoring === 1 && draft !== 1)) {
    throw new GoalHarnessError("GOAL_AUTHOR_CONTRACT_INVALID", "Unsupported authoring, draft and report version combination.", {
      origin: "harness_review", failure_kind: "configuration", retryable: false, contract,
    });
  }
  return contract;
}

export function resolveAuthorContract(task = {}) {
  const contract = resolveVersions(task);
  const snapshots = validateTurnSnapshots(task.author_turn_contracts);
  if (snapshots.some(snapshot => VERSION_FIELDS.some(field => snapshot[field] !== contract[field]))) {
    bindingFailure("The task differs from its fixed author turn contract history.");
  }
  return contract;
}

function validateTurnSnapshots(snapshots = []) {
  if (!Array.isArray(snapshots)) bindingFailure("Turn contract snapshots must be an array.");
  const keys = new Set();
  for (const snapshot of snapshots) {
    if (!snapshot || typeof snapshot.turn_id !== "string" || !snapshot.turn_id || VERSION_FIELDS.some(field => snapshot[field] === undefined)) {
      bindingFailure("A saved turn contract is incomplete.");
    }
    resolveVersions(snapshot);
    const key = JSON.stringify([snapshot.thread_id ?? null, snapshot.turn_id]);
    if (keys.has(key)) bindingFailure("Duplicate saved turn contract identity.");
    keys.add(key);
  }
  return snapshots;
}

/** A first dispatch is the only automatic version promotion boundary. */
export function pinFirstAuthorContract(task) {
  resolveAuthorContract(task);
  if (VERSION_FIELDS.some(field => task[field] !== undefined)) return task;
  const fresh = task.state === "queued" && (task.attempt ?? 0) === 0
    && !task.thread_id && !task.turn_id && !task.worktree_path && !task.author_commit && !task.last_author_commit
    && !(task.repair_count > 0) && !(task.repair_history?.length > 0)
    && !(task.previous_thread_ids?.length > 0) && !(task.previous_worktree_paths?.length > 0)
    && !(task.author_turn_contracts?.length > 0) && !task.author_start_intent && !task.report_path
    && !(task.repair_resume_count > 0) && !(task.infrastructure_resume_count > 0) && !(task.execution_continue_count > 0);
  return fresh ? { ...task, ...NEW_CONTRACT } : task;
}

/** Append only a newly started turn. Existing snapshots remain immutable. */
export function recordAuthorTurnContract(task, turnId) {
  if (typeof turnId !== "string" || !turnId.trim()) bindingFailure("A durable turn id is required.");
  const contract = resolveAuthorContract(task);
  const snapshots = task.author_turn_contracts ?? [];
  const threadId = task.thread_id ?? null;
  const existing = snapshots.find(snapshot => snapshot.turn_id === turnId && (snapshot.thread_id ?? null) === threadId);
  if (existing) {
    if (VERSION_FIELDS.some(field => existing[field] !== contract[field])) bindingFailure("The started turn's author contract cannot change.");
    return task;
  }
  return { ...task, author_turn_contracts: [...snapshots, { thread_id: threadId, turn_id: turnId, ...contract }] };
}

function bindingFailure(message) {
  throw new GoalHarnessError("GOAL_AUTHOR_CONTRACT_BINDING_MISMATCH", message, {
    origin: "harness_review", failure_kind: "task_binding", retryable: false,
  });
}

/** Compare effective artifact versions without upgrading tasks or rewriting old manifests. */
export function assertAuthorArtifactVersions({ task, draftVersion, reportVersion, manifestBinding }) {
  const contract = resolveAuthorContract(task);
  if (draftVersion !== undefined && draftVersion !== contract.author_draft_schema_version)
    bindingFailure("Draft version differs from the fixed author contract.");
  if (reportVersion !== undefined && reportVersion !== contract.author_report_schema_version)
    bindingFailure("Report version differs from the fixed author contract.");
  if (manifestBinding !== undefined) {
    if (!manifestBinding || typeof manifestBinding !== "object") bindingFailure("Prepared manifest contract is unavailable.");
    const sealed = resolveAuthorContract(manifestBinding);
    if (VERSION_FIELDS.some(field => sealed[field] !== contract[field]))
      bindingFailure("Prepared manifest differs from the fixed author contract.");
  }
  return contract;
}
