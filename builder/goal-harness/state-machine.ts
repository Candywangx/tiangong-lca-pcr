import { type GoalTask } from "./domain.ts";
import { GoalHarnessError } from "./errors.ts";

const TRANSITIONS: Readonly<Record<string, readonly string[]>> = Object.freeze({
  discovered: ["classified", "manual_review", "blocked", "cancelled"],
  classified: ["queued", "manual_review", "blocked", "completed", "cancelled"],
  queued: ["preflight", "manual_review", "blocked", "cancelled"],
  preflight: ["authoring", "map_existing", "manual_review", "blocked", "retryable_failure", "failed", "cancelled"],
  authoring: ["author_review", "repair_requested", "map_existing", "manual_review", "blocked", "retryable_failure", "failed", "cancelled"],
  author_review: ["valid_result", "manual_review", "repair_requested", "retryable_failure", "failed", "cancelled"],
  repair_requested: ["authoring", "authoring_repair", "retryable_failure", "failed", "cancelled"],
  authoring_repair: ["author_review", "repair_requested", "retryable_failure", "failed", "cancelled"],
  valid_result: ["integration_pending", "retryable_failure", "cancelled"],
  integration_pending: ["integrating", "retryable_failure", "cancelled"],
  integrating: ["integrated", "retryable_failure", "failed"],
  integrated: ["validated", "retryable_failure", "failed"],
  validated: ["completed", "retryable_failure", "failed"],
  retryable_failure: ["queued", "preflight", "authoring", "author_review", "repair_requested", "integration_pending", "failed", "cancelled"],
  manual_review: ["classified", "queued", "completed", "cancelled"],
  blocked: ["classified", "queued", "cancelled"],
  map_existing: ["integration_pending", "completed", "manual_review", "cancelled"],
  failed: [],
  cancelled: [],
  completed: ["retryable_failure"],
});

export function canTransition(from: unknown, to: unknown): boolean {
  return typeof from === "string" && typeof to === "string" ? TRANSITIONS[from]?.includes(to) ?? false : false;
}

export interface TaskTransition { transition_id: string; to: string; at?: string }
export function applyTaskTransition<T extends GoalTask>(task: T, transition: TaskTransition): T {
  const seen = task.transition_ids ?? [];
  if (seen.includes(transition.transition_id)) {
    return task;
  }
  if (!transition.transition_id || !canTransition(task.state, transition.to)) {
    throw new GoalHarnessError(
      "GOAL_STATE_TRANSITION_INVALID",
      `Illegal task transition ${task.state} -> ${transition.to ?? "<missing>"}`,
      { task_id: task.id, transition },
    );
  }
  return {
    ...task,
    state: transition.to,
    updated_at: transition.at ?? new Date().toISOString(),
    transition_ids: [...seen, transition.transition_id],
  };
}

export const TASK_STATES = Object.freeze(Object.keys(TRANSITIONS));
