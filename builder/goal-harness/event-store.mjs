import { createHash, randomUUID } from "node:crypto";
import {
  appendFileSync,
  closeSync,
  existsSync,
  fsyncSync,
  mkdirSync,
  openSync,
  readFileSync,
  renameSync,
  statSync,
  writeFileSync,
} from "node:fs";
import path from "node:path";

import { GoalHarnessError } from "./errors.mjs";

export class GoalEventStore {
  constructor({ stateDir, clock = () => new Date().toISOString() }) {
    this.stateDir = stateDir;
    this.eventsPath = path.join(stateDir, "events.jsonl");
    this.initialPath = path.join(stateDir, "initial-state.json");
    this.statePath = path.join(stateDir, "state.json");
    this.clock = clock;
    this.projectionCache = null;
  }

  initialize(initialState) {
    mkdirSync(this.stateDir, { recursive: true });
    if (!existsSync(this.initialPath)) {
      atomicWriteJson(this.initialPath, normalizeInitial(initialState));
    }
    if (!existsSync(this.eventsPath)) {
      writeFileSync(this.eventsPath, "", { flag: "wx" });
    }
    const rebuilt = this.rebuild();
    atomicWriteJson(this.statePath, rebuilt);
    return rebuilt;
  }

  append(input) {
    if (!existsSync(this.initialPath)) {
      throw new GoalHarnessError("GOAL_STATE_UNINITIALIZED", `Goal state is not initialized: ${this.stateDir}`);
    }
    const projection = this.loadVerifiedProjection();
    const events = projection.events;
    const duplicate = events.find((event) => event.event_id === input.event_id);
    if (duplicate) {
      const expected = stableJson({ type: input.type, payload: input.payload ?? {} });
      const actual = stableJson({ type: duplicate.type, payload: duplicate.payload ?? {} });
      if (expected !== actual) {
        throw new GoalHarnessError("GOAL_EVENT_ID_CONFLICT", `Event id ${input.event_id} was reused with different content`);
      }
      return duplicate;
    }
    const previous = events.at(-1);
    const unsigned = {
      sequence: events.length + 1,
      event_id: input.event_id ?? randomUUID(),
      at: input.at ?? this.clock(),
      type: input.type,
      payload: input.payload ?? {},
      previous_hash: previous?.hash ?? null,
    };
    const event = { ...unsigned, hash: sha256(stableJson(unsigned)) };
    const state = reduceEvent(projection.state, event);
    durableAppend(this.eventsPath, `${JSON.stringify(event)}\n`);
    atomicWriteJson(this.statePath, state);
    this.projectionCache = {
      signature: eventLogSignature(this.eventsPath),
      events: [...events, event],
      state,
    };
    return event;
  }

  readEvents() {
    if (!existsSync(this.eventsPath)) {
      return [];
    }
    const lines = readFileSync(this.eventsPath, "utf8").split("\n").filter(Boolean);
    const events = [];
    for (const [index, line] of lines.entries()) {
      let event;
      try {
        event = JSON.parse(line);
      } catch (error) {
        throw new GoalHarnessError("GOAL_EVENT_LOG_CORRUPT", `Invalid event JSON at line ${index + 1}`, { cause: error.message });
      }
      const { hash, ...unsigned } = event;
      const expectedPrevious = index === 0 ? null : events[index - 1].hash;
      if (unsigned.sequence !== index + 1 || unsigned.previous_hash !== expectedPrevious || hash !== sha256(stableJson(unsigned))) {
        throw new GoalHarnessError("GOAL_EVENT_LOG_CORRUPT", `Broken event hash chain at line ${index + 1}`);
      }
      events.push(event);
    }
    return events;
  }

  rebuild() {
    return this.loadVerifiedProjection().state;
  }

  loadVerifiedProjection() {
    const signature = eventLogSignature(this.eventsPath);
    if (this.projectionCache?.signature === signature) return this.projectionCache;
    const initial = JSON.parse(readFileSync(this.initialPath, "utf8"));
    const events = this.readEvents();
    const projection = { signature, events, state: events.reduce(reduceEvent, initial) };
    this.projectionCache = projection;
    return projection;
  }
}

function normalizeInitial(initial) {
  return {
    ...initial,
    stopped: initial.stopped ?? false,
    snapshots: initial.snapshots ?? [],
    last_event_sequence: 0,
    last_event_hash: null,
  };
}

function reduceEvent(state, event) {
  const next = {
    ...state,
    last_event_sequence: event.sequence,
    last_event_hash: event.hash,
    updated_at: event.at,
  };
  if (event.type === "model_trial_registered") {
    const trial = event.payload.trial;
    next.model_trials = [...(next.model_trials ?? []), trial];
    const assignments = new Map(trial.assignments.map(a => [a.task_id, a]));
    next.tasks = next.tasks.map(task => assignments.has(task.id)
      ? { ...task, model_trial: { ...assignments.get(task.id), trial_id: trial.id, controls: trial.controls } }
      : task);
  } else if (event.type === "model_trial_controls_prelaunch") {
    const trial = next.model_trials?.find(t => t.id === event.payload.trial_id);
    const samples = next.tasks.filter(t => t.model_trial?.trial_id === event.payload.trial_id);
    if (!trial || samples.length !== 6 || samples.some(t => t.state !== "queued" || t.thread_id || t.worktree_path || t.attempt || t.trial_turns?.length)) {
      throw new GoalHarnessError("GOAL_TRIAL_ALREADY_STARTED", "Trial controls cannot change after a sample has started.");
    }
    if (stableJson(trial.controls) !== stableJson(event.payload.previous_controls) || !event.payload.reason
      || ["harness_sha256", "policy_sha256", "config_sha256", "cache_sha256"].some(k => !/^[a-f0-9]{64}$/.test(event.payload.controls?.[k] ?? ""))) {
      throw new GoalHarnessError("GOAL_TRIAL_CONTROL_CONFLICT", "Trial prelaunch control revision requires exact previous fingerprints and a reason.");
    }
    next.model_trials = next.model_trials.map(t => t.id !== trial.id ? t : { ...t, controls: event.payload.controls,
      control_history: [...(t.control_history ?? []), { controls: t.controls, at: event.at, reason: event.payload.reason }] });
    next.tasks = next.tasks.map(t => t.model_trial?.trial_id !== trial.id ? t : { ...t, model_trial: { ...t.model_trial, controls: event.payload.controls } });
  } else if (event.type === "scheduling_stopped") {
    next.stopped = true;
  } else if (event.type === "scheduling_resumed") {
    next.stopped = false;
  } else if (event.type === "goal_planned") {
    next.plan = event.payload;
  } else if (event.type === "snapshot_created") {
    next.snapshots = [...(next.snapshots ?? []), event.payload];
  } else if (event.type === "snapshot_replaced") {
    next.snapshots = (next.snapshots ?? []).map((snapshot) => snapshot.id === event.payload.snapshot.id ? event.payload.snapshot : snapshot);
  } else if (event.type === "repository_validation_projected") {
    next.snapshots = (next.snapshots ?? []).map((snapshot) => snapshot.id === event.payload.snapshot_id
      ? { ...snapshot, ...event.payload.projection }
      : snapshot);
    const projectedTasks = new Map((event.payload.tasks ?? []).map((task) => [task.id, task]));
    next.tasks = (next.tasks ?? []).map((task) => projectedTasks.get(task.id) ?? task);
  } else if (event.type === "viewer_snapshot_published") {
    next.snapshots = (next.snapshots ?? []).map((snapshot) => snapshot.id === event.payload.snapshot_id
      ? {
          ...snapshot,
          viewer_publication: "published",
          viewer_manifest_ref: event.payload.manifest_ref,
          viewer_snapshot_id: event.payload.viewer_snapshot_id,
          viewer_sequence: event.payload.viewer_sequence,
          viewer_published_at: event.payload.published_at,
        }
      : snapshot);
  } else if (event.type === "viewer_snapshot_unavailable") {
    next.snapshots = (next.snapshots ?? []).map((snapshot) => snapshot.id === event.payload.harness_snapshot_id
      ? {
          ...snapshot,
          viewer_publication: "pre_activation_unavailable",
          viewer_unavailable_reason: event.payload.reason,
          viewer_source_status: event.payload.source_status,
        }
      : snapshot);
  } else if (event.type === "integration_finalized") {
    next.snapshots = (next.snapshots ?? []).map((snapshot) => snapshot.id === event.payload.snapshot.id ? event.payload.snapshot : snapshot);
    const replacements = new Map(event.payload.tasks.map((task) => [task.id, task]));
    next.tasks = (next.tasks ?? []).map((task) => replacements.get(task.id) ?? task);
  } else if (event.type === "snapshot_reconciled") {
    next.snapshots = [...(next.snapshots ?? []).map(s => s.id === event.payload.previous_snapshot.id ? event.payload.previous_snapshot : s), event.payload.snapshot];
    const replacements = new Map(event.payload.tasks.map(task => [task.id, task]));
    next.tasks = (next.tasks ?? []).map(task => replacements.get(task.id) ?? task);
  } else if (event.type === "task_replaced") {
    const previous = next.tasks.find(task => task.id === event.payload.task.id);
    if (previous?.model_trial && stableJson(previous.model_trial) !== stableJson(event.payload.task.model_trial)) {
      throw new GoalHarnessError("GOAL_MODEL_TRIAL_IMMUTABLE", "Trial assignment is immutable; record model switches on turns, not assignments.");
    }
    next.tasks = (next.tasks ?? []).map((task) => task.id === event.payload.task.id ? event.payload.task : task);
  } else if (event.type === "verified_common_uuids_updated") {
    next.verified_common_uuids = event.payload.verified_common_uuids;
  } else if (event.type === "runtime_baseline_updated") {
    next.runtime_baseline = event.payload.runtime_baseline;
  } else if (event.type === "landing_completed") {
    next.landed_path_fingerprints = {
      ...(next.landed_path_fingerprints ?? {}),
      ...(event.payload.path_fingerprints ?? {}),
    };
  }
  return next;
}

function durableAppend(filePath, content) {
  appendFileSync(filePath, content);
  const descriptor = openSync(filePath, "r");
  try {
    fsyncSync(descriptor);
  } finally {
    closeSync(descriptor);
  }
}

function atomicWriteJson(filePath, value) {
  const temporary = `${filePath}.${process.pid}.${randomUUID()}.tmp`;
  writeFileSync(temporary, `${JSON.stringify(value, null, 2)}\n`, { flag: "wx" });
  const descriptor = openSync(temporary, "r");
  try {
    fsyncSync(descriptor);
  } finally {
    closeSync(descriptor);
  }
  renameSync(temporary, filePath);
  const directoryDescriptor = openSync(path.dirname(filePath), "r");
  try {
    fsyncSync(directoryDescriptor);
  } finally {
    closeSync(directoryDescriptor);
  }
}

function stableJson(value) {
  if (Array.isArray(value)) {
    return `[${value.map((entry) => entry === undefined ? "null" : stableJson(entry)).join(",")}]`;
  }
  if (value && typeof value === "object") {
    return `{${Object.keys(value).filter((key) => value[key] !== undefined).sort().map((key) => `${JSON.stringify(key)}:${stableJson(value[key])}`).join(",")}}`;
  }
  return JSON.stringify(value);
}

function sha256(value) {
  return createHash("sha256").update(value).digest("hex");
}

function eventLogSignature(filePath) {
  const stats = statSync(filePath, { bigint: true });
  return `${stats.dev}:${stats.ino}:${stats.size}:${stats.mtimeNs}:${stats.ctimeNs}`;
}
