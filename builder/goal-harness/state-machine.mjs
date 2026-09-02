import { GoalHarnessError } from "./errors.mjs";

const TRANSITIONS = Object.freeze({
  discovered: ["classified", "manual_review", "blocked", "cancelled"],
  classified: ["queued", "manual_review", "blocked", "completed", "cancelled"],
  queued: ["preflight", "manual_review", "blocked", "cancelled"],
  preflight: ["authoring", "map_existing", "manual_review", "blocked", "retryable_failure", "failed", "cancelled"],
  authoring: ["author_review", "map_existing", "manual_review", "blocked", "retryable_failure", "failed", "cancelled"],
  author_review: ["valid_result", "retryable_failure", "failed", "cancelled"],
  valid_result: ["integration_pending", "cancelled"],
  integration_pending: ["integrating", "cancelled"],
  integrating: ["integrated", "retryable_failure", "failed"],
  integrated: ["validated", "retryable_failure", "failed"],
  validated: ["completed", "retryable_failure", "failed"],
  retryable_failure: ["queued", "preflight", "authoring", "author_review", "integration_pending", "failed", "cancelled"],
  manual_review: ["classified", "queued", "completed", "cancelled"],
  blocked: ["classified", "queued", "cancelled"],
  map_existing: ["integration_pending", "completed", "manual_review", "cancelled"],
  failed: [],
  cancelled: [],
  completed: [],
});

export function canTransition(from, to) {
  return TRANSITIONS[from]?.includes(to) ?? false;
}

export function applyTaskTransition(task, transition) {
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
