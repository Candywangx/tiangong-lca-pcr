import assert from "node:assert/strict";
import { mkdirSync, mkdtempSync, readFileSync, rmSync, writeFileSync } from "node:fs";
import { tmpdir } from "node:os";
import path from "node:path";
import test from "node:test";

import { loadGoalConfig } from "./config.mjs";
import { GoalEventStore } from "./event-store.mjs";
import {
  activeAuthorCount,
  buildIntegrationSnapshot,
  dispatchCandidates,
} from "./scheduler.mjs";
import { applyTaskTransition, canTransition } from "./state-machine.mjs";

function makeRoot() {
  return mkdtempSync(path.join(tmpdir(), "tiangong-goal-core-"));
}

function writeConfig(root, extra = "") {
  const target = path.join(root, "library/pcrs/metal-products-machinery-and-equipment");
  const policy = path.join(root, "policy.txt");
  mkdirSync(target, { recursive: true });
  writeFileSync(policy, "policy\n");
  const configPath = path.join(root, "goal.yaml");
  writeFileSync(
    configPath,
    `schema_version: 1
goal_id: metal-products-cpc-3
project_root: ${root}
target_category_path: ${target}
classification_system: cpc
classification_version: "3.0"
cpc_selector:
  mode: target_category
  value: all
policy_prompt_path: ${policy}
artifact_store: ${root}/viewer-artifacts
${extra}`,
  );
  return configPath;
}

test("goal configuration validates and applies bounded defaults", () => {
  const root = makeRoot();
  try {
    const config = loadGoalConfig({ configPath: writeConfig(root) });
    assert.equal(config.author_slots, 6);
    assert.equal(config.integration_batch_size, 6);
    assert.deepEqual(config.skip_cpc_list, []);
    assert.equal(config.cpc_selector.value, "all");
    assert.equal(config.cpc_selector.mode, "target_category");
    assert.equal(config.target_category_relative, "library/pcrs/metal-products-machinery-and-equipment");
  } finally {
    rmSync(root, { recursive: true, force: true });
  }
});

test("goal configuration rejects all-repository CPC scope and missing policy", () => {
  const root = makeRoot();
  try {
    assert.throws(
      () => loadGoalConfig({ configPath: writeConfig(root, "author_slots: 7\n") }),
      (error) => error.code === "GOAL_CONFIG_INVALID" && /author_slots/u.test(error.message),
    );
    const configPath = writeConfig(root);
    writeFileSync(configPath, readFileSync(configPath, "utf8").replace("mode: target_category", "mode: repository"));
    assert.throws(
      () => loadGoalConfig({ configPath }),
      (error) => error.code === "GOAL_CONFIG_INVALID" && /target_category/u.test(error.message),
    );
    writeConfig(root);
    writeFileSync(configPath, readFileSync(configPath, "utf8").replace(/policy_prompt_path:.*/u, "policy_prompt_path: /missing/policy.txt"));
    assert.throws(
      () => loadGoalConfig({ configPath }),
      (error) => error.code === "GOAL_POLICY_UNREADABLE",
    );
  } finally {
    rmSync(root, { recursive: true, force: true });
  }
});

test("goal configuration requires an explicit durable Viewer artifact store", () => {
  const root = makeRoot();
  try {
    const configPath = writeConfig(root);
    writeFileSync(configPath, readFileSync(configPath, "utf8").replace(/^artifact_store:.*\n/mu, ""));
    assert.throws(
      () => loadGoalConfig({ configPath }),
      (error) => error.code === "GOAL_CONFIG_INVALID" && /artifact_store/u.test(error.message),
    );
  } finally {
    rmSync(root, { recursive: true, force: true });
  }
});

test("state machine accepts the author path, rejects skips, and treats replay as idempotent", () => {
  assert.equal(canTransition("queued", "preflight"), true);
  assert.equal(canTransition("queued", "valid_result"), false);
  const task = { id: "cpc:41111", state: "queued", transition_ids: [] };
  const first = applyTaskTransition(task, {
    transition_id: "transition-1",
    to: "preflight",
    at: "2026-09-02T00:00:00.000Z",
  });
  assert.equal(first.state, "preflight");
  assert.equal(first.updated_at, "2026-09-02T00:00:00.000Z");
  assert.deepEqual(applyTaskTransition(first, {
    transition_id: "transition-1",
    to: "preflight",
    at: "2099-01-01T00:00:00.000Z",
  }), first);
  assert.throws(
    () => applyTaskTransition(first, { transition_id: "transition-2", to: "completed" }),
    (error) => error.code === "GOAL_STATE_TRANSITION_INVALID",
  );
});

test("event store appends a hash chain and rebuilds the same projection", () => {
  const root = makeRoot();
  try {
    const store = new GoalEventStore({ stateDir: path.join(root, "goal-state") });
    store.initialize({ goal_id: "fixture-goal", tasks: [] });
    const first = store.append({ event_id: "event-1", type: "goal_planned", payload: { count: 2 } });
    const replay = store.append({ event_id: "event-1", type: "goal_planned", payload: { count: 2 } });
    assert.equal(replay.sequence, first.sequence);
    const second = store.append({ event_id: "event-2", type: "scheduling_stopped", payload: {} });
    assert.equal(second.sequence, 2);
    assert.equal(second.previous_hash, first.hash);
    const recovered = store.rebuild();
    assert.equal(recovered.goal_id, "fixture-goal");
    assert.equal(recovered.stopped, true);
    assert.equal(recovered.last_event_hash, second.hash);
    assert.equal(readFileSync(path.join(root, "goal-state/events.jsonl"), "utf8").trim().split("\n").length, 2);
  } finally {
    rmSync(root, { recursive: true, force: true });
  }
});

test("event store reuses its verified projection across appends and invalidates it when the log changes externally", () => {
  const root = makeRoot();
  try {
    class CountingStore extends GoalEventStore {
      eventLogReads = 0;
      readEvents() {
        this.eventLogReads += 1;
        return super.readEvents();
      }
    }
    const stateDir = path.join(root, "goal-state");
    const store = new CountingStore({ stateDir });
    store.initialize({ goal_id: "fixture-goal", tasks: [] });
    store.eventLogReads = 0;

    store.append({ event_id: "event-1", type: "goal_planned", payload: { count: 1 } });
    store.append({ event_id: "event-2", type: "scheduling_stopped", payload: {} });
    assert.equal(store.eventLogReads, 0, "same-process appends should not reread the complete verified event log");
    assert.equal(store.rebuild().last_event_sequence, 2);
    assert.equal(store.eventLogReads, 0, "an unchanged log should reuse the verified projection");

    writeFileSync(path.join(stateDir, "events.jsonl"), "not-json\n", { flag: "a" });
    assert.throws(
      () => store.append({ event_id: "event-3", type: "scheduling_resumed", payload: {} }),
      (error) => error.code === "GOAL_EVENT_LOG_CORRUPT",
    );
  } finally {
    rmSync(root, { recursive: true, force: true });
  }
});

test("scheduler rolls slots, replaces blocked tasks, and snapshots earliest six exactly once", () => {
  const tasks = [
    { id: "a", state: "authoring", queue_order: 1 },
    { id: "b", state: "blocked", queue_order: 2 },
    { id: "c", state: "queued", queue_order: 3 },
    { id: "d", state: "queued", queue_order: 4 },
    { id: "e", state: "manual_review", queue_order: 5 },
  ];
  assert.equal(activeAuthorCount(tasks), 1);
  assert.deepEqual(dispatchCandidates(tasks, { slots: 2 }).map((task) => task.id), ["c"]);

  const valid = Array.from({ length: 7 }, (_, index) => ({
    id: `pcr-${index + 1}`,
    state: "valid_result",
    valid_at: `2026-09-02T00:00:0${index}.000Z`,
    author_commit: `${index + 1}`.repeat(40),
  }));
  const snapshot = buildIntegrationSnapshot({ goalId: "fixture", tasks: valid, batchSize: 6, snapshots: [] });
  assert.deepEqual(snapshot.task_ids, ["pcr-1", "pcr-2", "pcr-3", "pcr-4", "pcr-5", "pcr-6"]);
  assert.match(snapshot.id, /^snapshot-[a-f0-9]{16}$/u);
  assert.equal(buildIntegrationSnapshot({
    goalId: "fixture",
    tasks: valid,
    batchSize: 6,
    snapshots: [snapshot],
  }), null);

  const enriched = [{ ...valid[0], author_commit: "f".repeat(40), valid_at: "2026-01-02T00:00:00Z" }];
  const enrichmentSnapshot = buildIntegrationSnapshot({ goalId: "fixture", tasks: enriched, batchSize: 1, snapshots: [snapshot] });
  assert.deepEqual(enrichmentSnapshot.task_ids, [valid[0].id]);
  assert.deepEqual(enrichmentSnapshot.author_commits, ["f".repeat(40)]);

  const receiptOnlyCorrection = [{
    ...valid[0],
    uuid_enrichment_generation: 1,
    valid_at: "2026-01-03T00:00:00Z",
  }];
  const correctionSnapshot = buildIntegrationSnapshot({
    goalId: "fixture",
    tasks: receiptOnlyCorrection,
    batchSize: 1,
    snapshots: [snapshot],
  });
  assert.deepEqual(correctionSnapshot.task_ids, [valid[0].id]);
  assert.match(correctionSnapshot.result_keys[0], /:uuid-enrichment:1$/u);
});
