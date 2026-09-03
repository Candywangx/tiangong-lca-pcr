import { createHash } from "node:crypto";

const ACTIVE_AUTHOR_STATES = new Set(["preflight", "authoring", "authoring_repair", "author_review"]);

export function activeAuthorCount(tasks) {
  return tasks.filter((task) => ACTIVE_AUTHOR_STATES.has(task.state)).length;
}

export function dispatchCandidates(tasks, { slots }) {
  const available = Math.max(0, slots - activeAuthorCount(tasks));
  return tasks
    .filter((task) => task.state === "queued")
    .sort(compareQueueOrder)
    .slice(0, available);
}

export function buildIntegrationSnapshot({ goalId, tasks, batchSize, snapshots, allowPartial = false }) {
  const assigned = new Set(snapshots.flatMap((snapshot) => snapshot.task_ids.map((taskId, index) =>
    `${taskId}:${snapshot.author_commits?.[index] ?? ""}`,
  )));
  const eligible = tasks
    .filter((task) => task.state === "valid_result" && !assigned.has(`${task.id}:${task.author_commit ?? ""}`))
    .sort((left, right) => String(left.valid_at).localeCompare(String(right.valid_at)) || compareQueueOrder(left, right));
  if (eligible.length < batchSize && !allowPartial) {
    return null;
  }
  if (eligible.length === 0) {
    return null;
  }
  const selected = eligible.slice(0, batchSize);
  const digest = createHash("sha256")
    .update(JSON.stringify({ goalId, results: selected.map(({ id, author_commit: commit }) => ({ id, commit })) }))
    .digest("hex")
    .slice(0, 16);
  return {
    id: `snapshot-${digest}`,
    goal_id: goalId,
    task_ids: selected.map((task) => task.id),
    author_commits: selected.map((task) => task.author_commit),
  };
}

function compareQueueOrder(left, right) {
  return (left.queue_order ?? Number.MAX_SAFE_INTEGER) - (right.queue_order ?? Number.MAX_SAFE_INTEGER) ||
    String(left.id).localeCompare(String(right.id));
}
