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
    const events = this.readEvents();
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
    durableAppend(this.eventsPath, `${JSON.stringify(event)}\n`);
    atomicWriteJson(this.statePath, this.rebuild());
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
    const initial = JSON.parse(readFileSync(this.initialPath, "utf8"));
    return this.readEvents().reduce(reduceEvent, initial);
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
  if (event.type === "scheduling_stopped") {
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
          viewer_sequence: event.payload.repository_sequence,
          viewer_published_at: event.payload.published_at,
        }
      : snapshot);
  } else if (event.type === "task_replaced") {
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
