import assert from "node:assert/strict";
import { createHash } from "node:crypto";
import { spawnSync } from "node:child_process";
import { appendFileSync, mkdtempSync, readFileSync, rmSync, writeFileSync } from "node:fs";
import { tmpdir } from "node:os";
import path from "node:path";
import test from "node:test";
import { GoalEventStore } from "./event-store.mjs";

function fixture(t, chunkSize = 7, tasks = []) {
  const stateDir = mkdtempSync(path.join(tmpdir(), "goal-event-stream-"));
  t.after(() => rmSync(stateDir, { recursive: true, force: true }));
  const store = new GoalEventStore({ stateDir, chunkSize });
  store.initialize({ goal_id: "stream", tasks, snapshots: [] });
  return { store, stateDir, log: path.join(stateDir, "events.jsonl") };
}

function canonical(value) {
  if (Array.isArray(value)) return `[${value.map(canonical).join(",")}]`;
  if (value && typeof value === "object") return `{${Object.keys(value).sort().map(k => `${JSON.stringify(k)}:${canonical(value[k])}`).join(",")}}`;
  return JSON.stringify(value);
}

function signed(sequence, previous, payload = {}, eventId = `event-${sequence}`) {
  const unsigned = { sequence, previous_hash: previous?.hash ?? null, event_id: eventId,
    at: "2026-09-14T00:00:00.000Z", type: "goal_planned", payload };
  return { ...unsigned, hash: createHash("sha256").update(canonical(unsigned)).digest("hex") };
}

test("iterateEvents is incremental across UTF-8 and event boundaries, including an unterminated final line", t => {
  const { store, log } = fixture(t, 1);
  const first = signed(1, null, { text: "中文🌱é".repeat(40) });
  const second = signed(2, first, { text: "末尾" });
  writeFileSync(log, `\n${JSON.stringify(first)}\r\n\n${JSON.stringify(second)}`);
  const events = store.iterateEvents();
  assert.equal(typeof events.next, "function");
  assert.deepEqual([...events], [first, second]);
  assert.equal(store.rebuild().plan.text, "末尾");
  assert.deepEqual(store.getEvent(first.event_id), first);
  const third = store.append({ event_id: "third", type: "scheduling_stopped" });
  assert.equal(third.sequence, 3);
  assert.equal(new GoalEventStore({ stateDir: store.stateDir }).rebuild().last_event_hash, third.hash);
});

for (const [name, mutate] of [
  ["invalid JSON", () => "{broken"],
  ["null JSON", () => "null"],
  ["broken previous hash", e => JSON.stringify({ ...e, previous_hash: "wrong" })],
  ["broken content hash", e => JSON.stringify({ ...e, payload: { changed: true } })],
  ["wrong sequence", e => JSON.stringify({ ...e, sequence: 20 })],
]) {
  test(`rebuild and ID lookup reject ${name} after a valid prefix`, t => {
    const { store, log } = fixture(t);
    const first = signed(1, null);
    writeFileSync(log, `${JSON.stringify(first)}\n${mutate(signed(2, first))}\n`);
    assert.throws(() => store.rebuild(), { code: "GOAL_EVENT_LOG_CORRUPT" });
    assert.throws(() => store.getEvent(first.event_id), { code: "GOAL_EVENT_LOG_CORRUPT" });
  });
}

test("event IDs remain idempotent after reopen and detect conflicts without rewriting bytes", t => {
  const { store, log, stateDir } = fixture(t);
  const input = { event_id: "same", type: "goal_planned", payload: { text: "证据🌱", n: 1 } };
  const first = store.append(input);
  store.append({ event_id: "later", type: "scheduling_stopped" });
  const saved = readFileSync(log);
  const reopened = new GoalEventStore({ stateDir, chunkSize: 5 });
  assert.deepEqual(reopened.append({ ...input, payload: { n: 1, text: "证据🌱" } }), first);
  assert.throws(() => reopened.append({ ...input, payload: {} }), { code: "GOAL_EVENT_ID_CONFLICT" });
  assert.deepEqual(readFileSync(log), saved);
  assert.equal(reopened.getEvent("absent"), undefined);
  assert.equal(reopened.loadVerifiedProjection().events, undefined);
});

test("historical duplicate IDs with equal content retain the first receipt; conflicting content fails closed", t => {
  const { store, log } = fixture(t);
  const first = signed(1, null, { n: 1 }, "same");
  const second = signed(2, first, { n: 1 }, "same");
  writeFileSync(log, `${JSON.stringify(first)}\n${JSON.stringify(second)}\n`);
  assert.equal(store.rebuild().last_event_sequence, 2);
  assert.deepEqual(store.getEvent("same"), first);
  appendFileSync(log, `${JSON.stringify(signed(3, second, { n: 2 }, "same"))}\n`);
  assert.throws(() => store.rebuild(), { code: "GOAL_EVENT_ID_CONFLICT" });
});

function trialFixture(t) {
  const tasks = Array.from({ length: 6 }, (_, i) => ({ id: `task-${i}`, state: "queued" }));
  const f = fixture(t, 7, tasks);
  const controls = Object.fromEntries(["harness_sha256", "policy_sha256", "config_sha256", "cache_sha256"].map(k => [k, "a".repeat(64)]));
  const trial = { id: "trial-1", stage: 1, assignments: tasks.map(task => ({ task_id: task.id, model: "gpt-5.6-terra" })), controls };
  f.store.append({ event_id: "register", type: "model_trial_registered", payload: { trial } });
  return { ...f, trial, controls };
}

test("rebuild preserves trial assignments and validated prelaunch control audit history", t => {
  const { store, stateDir, trial, controls } = trialFixture(t);
  const nextControls = Object.fromEntries(Object.keys(controls).map(k => [k, "b".repeat(64)]));
  const update = store.append({ event_id: "controls", type: "model_trial_controls_prelaunch", at: "2026-09-14T01:00:00.000Z",
    payload: { trial_id: trial.id, previous_controls: controls, controls: nextControls, reason: "Validated prelaunch runtime" } });
  const state = new GoalEventStore({ stateDir }).rebuild();
  assert.deepEqual(state.model_trials, [{ ...trial, controls: nextControls, control_history: [{ controls, at: update.at, reason: update.payload.reason }] }]);
  assert.equal(state.tasks.length, 6);
  for (const task of state.tasks) assert.deepEqual(task.model_trial, { ...trial.assignments.find(a => a.task_id === task.id), trial_id: trial.id, controls: nextControls });
  assert.deepEqual(store.readEvents(), [...store.iterateEvents()]);
});

for (const invalid of ["assignment", "controls", "started"]) {
  test(`rejected trial ${invalid} does not append or poison the verified projection`, t => {
    const { store, stateDir, log, trial, controls } = trialFixture(t);
    let task = store.rebuild().tasks[0];
    if (invalid === "started") {
      store.append({ event_id: "start", type: "task_replaced", payload: { task: { ...task, state: "authoring", thread_id: "visible-thread" } } });
      task = store.rebuild().tasks[0];
    }
    const input = invalid === "assignment"
      ? { event_id: "invalid", type: "task_replaced", payload: { task: { ...task, model_trial: { ...task.model_trial, model: "gpt-5.6-sol" } } } }
      : { event_id: "invalid", type: "model_trial_controls_prelaunch", payload: { trial_id: trial.id, previous_controls: controls,
          controls: invalid === "controls" ? {} : controls, reason: "Rejected revision" } };
    const beforeLog = readFileSync(log);
    const beforeState = readFileSync(store.statePath);
    assert.throws(() => store.append(input), { code: invalid === "assignment" ? "GOAL_MODEL_TRIAL_IMMUTABLE" : invalid === "controls" ? "GOAL_TRIAL_CONTROL_CONFLICT" : "GOAL_TRIAL_ALREADY_STARTED" });
    assert.deepEqual(readFileSync(log), beforeLog);
    assert.deepEqual(readFileSync(store.statePath), beforeState);
    assert.deepEqual(new GoalEventStore({ stateDir }).rebuild(), store.rebuild());
    assert.equal(store.getEvent("invalid"), undefined);
    assert.equal(store.append({ event_id: "after-rejection", type: "scheduling_stopped" }).sequence, invalid === "started" ? 3 : 2);
  });
}

test("large-log rebuild and duplicate lookup fit in a heap smaller than historical payloads", t => {
  const { stateDir, log } = fixture(t);
  let previous = null;
  for (let i = 1; i <= 1400; i += 1) {
    previous = signed(i, previous, { text: "x".repeat(64 * 1024) });
    appendFileSync(log, `${JSON.stringify(previous)}\n`);
  }
  const script = `import { GoalEventStore } from ${JSON.stringify(new URL("./event-store.mjs", import.meta.url).href)};
    const store = new GoalEventStore({ stateDir: process.argv[1] });
    const state = store.rebuild();
    const first = store.getEvent('event-1');
    const replay = store.append({event_id: first.event_id, type: first.type, payload: first.payload});
    console.log(JSON.stringify({sequence: state.last_event_sequence, hash: state.last_event_hash, replay: replay.sequence}));`;
  const result = spawnSync(process.execPath, ["--max-old-space-size=64", "--input-type=module", "-e", script, stateDir], { encoding: "utf8", timeout: 120_000 });
  assert.equal(result.status, 0, result.stderr);
  assert.deepEqual(JSON.parse(result.stdout), { sequence: 1400, hash: previous.hash, replay: 1 });
});
