import { createHash } from "node:crypto";

const ACTIVE_AUTHOR_STATES = new Set(["preflight", "authoring", "authoring_repair", "author_review"]);

export function activeAuthorCount(tasks) {
  return tasks.filter((task) => ACTIVE_AUTHOR_STATES.has(task.state) &&
    (!task.coordinator_hold || ["authoring", "authoring_repair"].includes(task.state))).length;
}

export function dispatchCandidates(tasks, { slots }) {
  const available = Math.max(0, slots - activeAuthorCount(tasks));
  return tasks
    .filter((task) => task.state === "queued" && !task.coordinator_hold)
    .sort(compareQueueOrder)
    .slice(0, available);
}

export function buildIntegrationSnapshot({ goalId, tasks, batchSize, snapshots, allowPartial = false }) {
  const assigned = new Set(snapshots.flatMap(snapshotResultKeys));
  const eligible = tasks
    .filter((task) => task.state === "valid_result" && !assigned.has(taskResultKey(task)))
    .sort((left, right) => String(left.valid_at).localeCompare(String(right.valid_at)) || compareQueueOrder(left, right));
  if (eligible.length < batchSize && !allowPartial) {
    return null;
  }
  if (eligible.length === 0) {
    return null;
  }
  const selected = eligible.slice(0, batchSize);
  const resultKeys = selected.map(taskResultKey);
  const digest = createHash("sha256")
    .update(JSON.stringify({ goalId, resultKeys }))
    .digest("hex")
    .slice(0, 16);
  return {
    id: `snapshot-${digest}`,
    goal_id: goalId,
    task_ids: selected.map((task) => task.id),
    author_commits: selected.map((task) => task.author_commit),
    result_keys: resultKeys,
  };
}

function snapshotResultKeys(snapshot) {
  if (Array.isArray(snapshot.result_keys) && snapshot.result_keys.length === snapshot.task_ids.length) {
    return snapshot.result_keys;
  }
  return snapshot.task_ids.map((taskId, index) =>
    `${taskId}:${snapshot.author_commits?.[index] ?? ""}:uuid-enrichment:0`,
  );
}

function taskResultKey(task) {
  return `${task.id}:${task.author_commit ?? ""}:uuid-enrichment:${task.uuid_enrichment_generation ?? 0}`;
}

function compareQueueOrder(left, right) {
  return (left.queue_order ?? Number.MAX_SAFE_INTEGER) - (right.queue_order ?? Number.MAX_SAFE_INTEGER) ||
    String(left.id).localeCompare(String(right.id));
}
