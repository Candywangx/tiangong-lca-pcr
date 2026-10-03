import {trialAssignmentEvent,assertTrialControls} from "./model-trial.ts";
import {existsSync} from "node:fs";
import assert from "node:assert/strict";
import { createHash } from "node:crypto";
import { spawnSync } from "node:child_process";
import { appendFileSync, mkdtempSync, readFileSync, rmSync, writeFileSync } from "node:fs";
import { tmpdir } from "node:os";
import path from "node:path";
import test, { type TestContext } from "node:test";
import { record, type UnknownRecord, type GoalTask, type GoalEvent } from "./domain.ts";
import { GoalEventStore } from "./event-store.ts";

function fixture(t: TestContext, chunkSize = 7, tasks: GoalTask[] = []) {
  const stateDir = mkdtempSync(path.join(tmpdir(), "goal-event-stream-"));
  t.after(() => rmSync(stateDir, { recursive: true, force: true }));
  const store = new GoalEventStore({ stateDir, chunkSize });
  store.initialize({ goal_id: "stream", tasks, snapshots: [] });
  return { store, stateDir, log: path.join(stateDir, "events.jsonl") };
}

function canonical(value: unknown): string | undefined {
  if (Array.isArray(value)) return `[${value.map(canonical).join(",")}]`;
  if (value !== null && typeof value === "object" && !Array.isArray(value)) return `{${Object.keys(value).sort().map(k => `${JSON.stringify(k)}:${canonical(record(value)[k])}`).join(",")}}`;
  return JSON.stringify(value);
}

function signed(sequence: number, previous: GoalEvent | null, payload: UnknownRecord = {}, eventId = `event-${sequence}`): GoalEvent {
  const unsigned = { sequence, previous_hash: previous?.hash ?? null, event_id: eventId,
    at: "2026-09-14T00:00:00.000Z", type: "goal_planned", payload };
  return { ...unsigned, hash: createHash("sha256").update(canonical(unsigned) ?? "").digest("hex") };
}

test("iterateEvents is incremental across UTF-8 and event boundaries, including an unterminated final line", t => {
  const { store, log } = fixture(t, 1);
  const first = signed(1, null, { text: "中文🌱é".repeat(40) });
  const second = signed(2, first, { text: "末尾" });
  writeFileSync(log, `\n${JSON.stringify(first)}\r\n\n${JSON.stringify(second)}`);
  const events = store.iterateEvents();
  assert.equal(typeof events.next, "function");
  assert.deepEqual([...events], [first, second]);
  assert.equal(store.rebuild().plan?.text, "末尾");
  assert.deepEqual(store.getEvent(first.event_id), first);
  const third = store.append({ event_id: "third", type: "scheduling_stopped" });
  assert.equal(third.sequence, 3);
  assert.equal(new GoalEventStore({ stateDir: store.stateDir }).rebuild().last_event_hash, third.hash);
});

const mutations: [string, (event: GoalEvent) => string][] = [
  ["invalid JSON", () => "{broken"],
  ["null JSON", () => "null"],
  ["broken previous hash", e => JSON.stringify({ ...e, previous_hash: "wrong" })],
  ["broken content hash", e => JSON.stringify({ ...e, payload: { changed: true } })],
  ["wrong sequence", e => JSON.stringify({ ...e, sequence: 20 })],
];
for (const [name, mutate] of mutations) {
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
  assert.equal(Reflect.get(reopened.loadVerifiedProjection(), "events"), undefined);
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

function trialFixture(t: TestContext) {
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
    let task = first(store.rebuild().tasks);
    if (invalid === "started") {
      store.append({ event_id: "start", type: "task_replaced", payload: { task: { ...task, state: "authoring", thread_id: "visible-thread" } } });
      task = first(store.rebuild().tasks);
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
  let previous: GoalEvent | null = null;
  for (let i = 1; i <= 1400; i += 1) {
    previous = signed(i, previous, { text: "x".repeat(64 * 1024) });
    appendFileSync(log, `${JSON.stringify(previous)}\n`);
  }
  const script = `import { GoalEventStore } from ${JSON.stringify(new URL("./event-store.ts", import.meta.url).href)};
    const store = new GoalEventStore({ stateDir: process.argv[1] });
    const state = store.rebuild();
    const first = store.getEvent('event-1');
    const replay = store.append({event_id: first.event_id, type: first.type, payload: first.payload});
    console.log(JSON.stringify({sequence: state.last_event_sequence, hash: state.last_event_hash, replay: replay.sequence}));`;
  const result = spawnSync(process.execPath, ["--max-old-space-size=64", "--input-type=module", "-e", script, stateDir], { encoding: "utf8", timeout: 120_000 });
  assert.equal(result.status, 0, result.stderr);
  assert.deepEqual(JSON.parse(result.stdout), { sequence: 1400, hash: previous?.hash, replay: 1 });
});

test("typed receipt index retains every attestation for uniqueness checks without materializing the log", t => {
  const { store, stateDir } = fixture(t);
  store.append({ event_id: "receipt-a", type: "uuid_receipt_finalized", payload: { receipt_id: "same", task_id: "one" } });
  store.append({ event_id: "other", type: "author_report_prepared", payload: { receipt_id: "same" } });
  store.append({ event_id: "receipt-b", type: "uuid_receipt_finalized", payload: { receipt_id: "same", task_id: "two" } });
  const reopened = new GoalEventStore({ stateDir });
  reopened.readEvents = () => assert.fail("whole-log array lookup");
  assert.deepEqual(reopened.getEventsByType("uuid_receipt_finalized", { receiptId: "same" }).map(e => e.event_id), ["receipt-a", "receipt-b"]);
  assert.deepEqual(reopened.getEventsByType("uuid_receipt_finalized", { receiptId: "missing" }), []);
});

function first<T>(items: readonly T[]): T { const item=items[0]; assert.ok(item !== undefined); return item; }


test("persisted enrichment reset pointers retain null and reject non-string metadata before capture", t => {
 const stateDir=mkdtempSync(path.join(tmpdir(),"goal-reset-metadata-"));t.after(()=>rmSync(stateDir,{recursive:true,force:true}));
 const store=new GoalEventStore({stateDir});
 for(const [key,value] of [["valid_at",{}],["integration_snapshot_id",false]] satisfies [string,unknown][]){
  assert.throws(()=>store.initialize({tasks:[{id:"historical",state:"retryable_failure",[key]:value}]}),TypeError);
  assert.equal(existsSync(store.initialPath),false,"Invalid external metadata must not become a persisted initial snapshot");
 }
 const captured=store.initialize({tasks:[{id:"historical",state:"retryable_failure",valid_at:null,integration_snapshot_id:null}]});
 assert.equal(captured.tasks[0]?.valid_at,null);assert.equal(captured.tasks[0]?.integration_snapshot_id,null);
});


// Captured by the original event-store.mjs writer at 9b80e624. Keep the exact
// legacy event bytes/hash as an oracle without retaining an executable JS import.
test("original writer null failure pointers remain readable without changing historic event receipts", t => {
 const dir=mkdtempSync(path.join(tmpdir(),"goal-original-null-failures-"));t.after(()=>rmSync(dir,{recursive:true,force:true}));
 const originalInitial="{\n  \"goal_id\": \"historic-nulls\",\n  \"tasks\": [\n    {\n      \"id\": \"task\",\n      \"state\": \"authoring\"\n    }\n  ],\n  \"stopped\": false,\n  \"snapshots\": [],\n  \"last_event_sequence\": 0,\n  \"last_event_hash\": null\n}\n";
 const originalLog="{\"sequence\":1,\"event_id\":\"old-valid-result\",\"at\":\"2026-09-14T00:00:00.000Z\",\"type\":\"task_replaced\",\"payload\":{\"task\":{\"id\":\"task\",\"state\":\"valid_result\",\"failure_code\":null,\"failure_message\":null,\"failure_details\":null,\"author_model\":null,\"author_reasoning_effort\":null}},\"previous_hash\":null,\"hash\":\"4d5ba2368ebf60498b6c9afd4a88637ef028c5a3f352cf18e36a71b2f08e91fe\"}\n";
 const originalHash="4d5ba2368ebf60498b6c9afd4a88637ef028c5a3f352cf18e36a71b2f08e91fe";
 const store=new GoalEventStore({stateDir:dir});writeFileSync(store.initialPath,originalInitial);writeFileSync(store.eventsPath,originalLog);
 const state=store.rebuild();const task=state.tasks[0];assert.ok(task);
 assert.equal(task.failure_code,null);assert.equal(task.failure_message,null);assert.equal(task.failure_details,null);
 assert.equal(task.author_model,null);assert.equal(task.author_reasoning_effort,null);
 assert.throws(()=>store.append({event_id:"invalid-trial-model",type:"task_replaced",payload:{task:{...task,model_trial:{model:null}}}}),TypeError,"Trial allocation still requires a non-null model");
 assert.equal(state.last_event_hash,originalHash);assert.equal(store.getEvent("old-valid-result")?.hash,originalHash);
 assert.equal(readFileSync(store.eventsPath,"utf8"),originalLog);assert.equal(readFileSync(store.initialPath,"utf8"),originalInitial);
 for(const key of ["failure_code","failure_message","failure_details","author_model","author_reasoning_effort"]){
  assert.throws(()=>store.append({event_id:`invalid-${key}`,type:"task_replaced",payload:{task:{...task,[key]:42}}}),TypeError);
  assert.equal(readFileSync(store.eventsPath,"utf8"),originalLog,"Malformed non-null metadata must not append a receipt");
 }
});


// Exact original writer capture from 4b6d2a5d; enrichment intentionally retires
// an old first-start intent before choosing a distinct new durable identity.
test("original cleared author intent stays null on replay without granting an author start",t=>{
 const dir=mkdtempSync(path.join(tmpdir(),"goal-cleared-start-intent-"));t.after(()=>rmSync(dir,{recursive:true,force:true}));
 const store=new GoalEventStore({stateDir:dir});
 const initial="{\n  \"tasks\": [\n    {\n      \"id\": \"enrichment\",\n      \"state\": \"queued\"\n    }\n  ],\n  \"stopped\": false,\n  \"snapshots\": [],\n  \"last_event_sequence\": 0,\n  \"last_event_hash\": null\n}\n",log="{\"sequence\":1,\"event_id\":\"clear-old-intent\",\"at\":\"2026-09-14T00:00:00.000Z\",\"type\":\"task_replaced\",\"payload\":{\"task\":{\"id\":\"enrichment\",\"state\":\"queued\",\"uuid_enrichment_generation\":1,\"author_start_intent\":null}},\"previous_hash\":null,\"hash\":\"a365c0e19e06f478a4735f29d6b217b506f48c8d3972da665dcd67acfbb9bbb2\"}\n";
 writeFileSync(store.initialPath,initial);writeFileSync(store.eventsPath,log);
 const state=store.rebuild();assert.equal(state.tasks[0]?.author_start_intent,null);assert.equal(state.tasks[0]?.uuid_enrichment_generation,1);
 assert.equal(state.last_event_hash,"a365c0e19e06f478a4735f29d6b217b506f48c8d3972da665dcd67acfbb9bbb2");assert.equal(readFileSync(store.eventsPath,"utf8"),log);
 assert.throws(()=>store.append({event_id:"invalid-intent",type:"task_replaced",payload:{task:{id:"enrichment",state:"queued",author_start_intent:"started"}}}),TypeError);
 assert.equal(readFileSync(store.eventsPath,"utf8"),log);
});


test("actual CLI trial controls retain doctor and fingerprint audit metadata without replacing live control verification", t=>{
 const stateDir=mkdtempSync(path.join(tmpdir(),"goal-cli-trial-audit-"));t.after(()=>rmSync(stateDir,{recursive:true,force:true}));
 const store=new GoalEventStore({stateDir});
 const tasks=Array.from({length:6},(_,i)=>({id:`task-${i}`,state:"queued",queue_action:"create_new",pcr_path:`library/pcrs/fixture/p${i}`}));
 const state=store.initialize({tasks});
 const controls={harness_sha256:"a".repeat(64),policy_sha256:"b".repeat(64),config_sha256:"c".repeat(64),cache_sha256:"d".repeat(64),plan_sha256:"e".repeat(64),cache_fingerprint_scope:"verified_common_uuids_projection; per-turn injected evidence separately fingerprinted",doctor:{ok:true,checked_at:"2026-09-14T00:00:00.000Z",passed:17}};
 const assignments=tasks.map((task,i)=>({task_id:task.id,pair_id:`pair-${Math.floor(i/2)}`,model:i%2?"gpt-5.6-sol":"gpt-5.6-terra",difficulty:"matched",rationale:"Same action and independently reviewed paired workload."}));
 const event=store.append(trialAssignmentEvent({state,trialId:"audit-trial",assignments,controls}));
 const bytes=readFileSync(store.eventsPath),replayed=new GoalEventStore({stateDir}).rebuild();
 assert.deepEqual(replayed.model_trials?.[0]?.controls,controls);assert.deepEqual(replayed.tasks[0]?.model_trial?.controls,controls);
 assert.equal(replayed.last_event_hash,event.hash);assert.deepEqual(readFileSync(store.eventsPath),bytes);
 const policy=path.join(stateDir,"policy.txt");writeFileSync(policy,"Current independently executed policy.\n");
 const task=replayed.tasks[0];assert.ok(task);
 assert.throws(()=>assertTrialControls(task,{policy_prompt_path:policy}),{code:"GOAL_MODEL_TRIAL_INVALID"},"A captured successful doctor record cannot approve drifted executing control bytes");
 assert.throws(()=>new GoalEventStore({stateDir:path.join(stateDir,"bad-control")}).initialize({tasks:[],model_trials:[{id:"bad",assignments:[],controls:{...controls,plan_sha256:42}}]}),TypeError,"Known non-null hash metadata remains string-checked");
});
