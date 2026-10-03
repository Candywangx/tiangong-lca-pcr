import { field, isRecord, type GoalTask, type AuthorContractVersions, type AuthorTurnContract } from "./domain.ts";
import { GoalHarnessError } from "./errors.ts";

type AuthorTask=Partial<GoalTask>;
const VERSION_FIELDS = ["authoring_contract_version", "author_draft_schema_version", "author_report_schema_version"] as const;
const NEW_CONTRACT = Object.freeze({ authoring_contract_version: 2, author_draft_schema_version: 2, author_report_schema_version: 1 });

/** Missing fields describe historical contracts; resolving never upgrades them. */
function resolveVersions(task: unknown): AuthorContractVersions {
  const contract = Object.fromEntries(VERSION_FIELDS.map(fieldName => [fieldName, field(task, fieldName) === undefined ? 1 : field(task, fieldName)]));
  const { authoring_contract_version: authoring, author_draft_schema_version: draft, author_report_schema_version: report } = contract;
  if ((authoring !== 1 && authoring !== 2) || (draft !== 1 && draft !== 2) || report !== 1 || (authoring === 1 && draft !== 1)) {
    throw new GoalHarnessError("GOAL_AUTHOR_CONTRACT_INVALID", "Unsupported authoring, draft and report version combination.", {
      origin: "harness_review", failure_kind: "configuration", retryable: false, contract,
    });
  }
  if ((authoring !== 1 && authoring !== 2) || (draft !== 1 && draft !== 2) || report !== 1) bindingFailure('Unsupported author contract versions.');
  return { authoring_contract_version: authoring, author_draft_schema_version: draft, author_report_schema_version: report };
}

export function resolveAuthorContract(task: unknown = {}): AuthorContractVersions {
  const contract = resolveVersions(task);
  const snapshots = validateTurnSnapshots(field(task, "author_turn_contracts"));
  if (snapshots.some(snapshot => VERSION_FIELDS.some(field => snapshot[field] !== contract[field]))) {
    bindingFailure("The task differs from its fixed author turn contract history.");
  }
  return contract;
}

function validateTurnSnapshots(snapshots: unknown = []): AuthorTurnContract[] {
  if (!Array.isArray(snapshots)) bindingFailure("Turn contract snapshots must be an array.");
  const keys = new Set<string>();
  const checked: AuthorTurnContract[] = [];
  for (const value of snapshots) {
    if (!isRecord(value)) bindingFailure("A saved turn contract is incomplete.");
    const snapshot = value;
    if (!snapshot || typeof snapshot.turn_id !== "string" || !snapshot.turn_id || VERSION_FIELDS.some(field => snapshot[field] === undefined)) {
      bindingFailure("A saved turn contract is incomplete.");
    }
    const versions = resolveVersions(snapshot);
    const key = JSON.stringify([snapshot.thread_id ?? null, snapshot.turn_id]);
    if (keys.has(key)) bindingFailure("Duplicate saved turn contract identity.");
    keys.add(key);
    const thread = snapshot.thread_id ?? null;
    if (typeof thread !== "string" && thread !== null) bindingFailure("Invalid saved thread identity.");
    checked.push({ ...versions, thread_id: thread, turn_id: snapshot.turn_id });
  }
  return checked;
}

/** A first dispatch is the only automatic version promotion boundary. */
export function pinFirstAuthorContract<T extends AuthorTask>(task: T): T {
  resolveAuthorContract(task);
  if (VERSION_FIELDS.some(field => task[field] !== undefined)) return task;
  const fresh = task.state === "queued" && (task.attempt ?? 0) === 0
    && !task.thread_id && !task.turn_id && !task.worktree_path && !task.author_commit && !task.last_author_commit
    && !((task.repair_count ?? 0) > 0) && !((task.repair_history?.length ?? 0) > 0)
    && !((task.previous_thread_ids?.length ?? 0) > 0) && !((task.previous_worktree_paths?.length ?? 0) > 0)
    && !(Number(field(task.author_turn_contracts,"length") ?? 0) > 0) && !task.author_start_intent && !task.report_path
    && !((task.repair_resume_count ?? 0) > 0) && !((task.infrastructure_resume_count ?? 0) > 0) && !((task.execution_continue_count ?? 0) > 0);
  return fresh ? { ...task, ...NEW_CONTRACT } : task;
}

/** Append only a newly started turn. Existing snapshots remain immutable. */
export function recordAuthorTurnContract<T extends AuthorTask>(task: T, turnId: string): T & {author_turn_contracts?:AuthorTurnContract[]} {
  if (typeof turnId !== "string" || !turnId.trim()) bindingFailure("A durable turn id is required.");
  const contract = resolveAuthorContract(task);
  const snapshots = validateTurnSnapshots(task.author_turn_contracts);
  const threadId = task.thread_id ?? null;
  const existing = snapshots.find(snapshot => snapshot.turn_id === turnId && (snapshot.thread_id ?? null) === threadId);
  if (existing) {
    if (VERSION_FIELDS.some(field => existing[field] !== contract[field])) bindingFailure("The started turn's author contract cannot change.");
    return task;
  }
  return { ...task, author_turn_contracts: [...snapshots, { thread_id: threadId, turn_id: turnId, ...contract }] };
}

function bindingFailure(message: string): never {
  throw new GoalHarnessError("GOAL_AUTHOR_CONTRACT_BINDING_MISMATCH", message, {
    origin: "harness_review", failure_kind: "task_binding", retryable: false,
  });
}

/** Compare effective artifact versions without upgrading tasks or rewriting old manifests. */
export function assertAuthorArtifactVersions({ task, draftVersion, reportVersion, manifestBinding }: {task: unknown; draftVersion?: unknown; reportVersion?: unknown; manifestBinding?: unknown}): AuthorContractVersions {
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
