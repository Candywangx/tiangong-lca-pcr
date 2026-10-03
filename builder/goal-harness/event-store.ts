import { record, field, text, json, goalEvent, goalState, goalTask, goalTasks, goalSnapshot, modelTrial, trialControls, errorMessage,
  type UnknownRecord, type GoalState, type GoalEvent, type GoalEventInput } from './domain.ts';
export interface GoalEventLocator { offset: number; length: number; hash: string; contentHash: string }
export interface GoalVerifiedProjection {
  signature: string; eventIndex: Map<unknown, GoalEventLocator>; queryIndex: Map<string, GoalEventLocator[]>; state: GoalState;
}
import { createHash, randomUUID } from "node:crypto";
import {
  appendFileSync,
  closeSync,
  existsSync,
  fsyncSync,
  mkdirSync,
  openSync,
  readFileSync,
  readSync,
  renameSync,
  statSync,
  writeFileSync,
} from "node:fs";
import path from "node:path";

import { GoalHarnessError } from "./errors.ts";

export class GoalEventStore {
  readonly stateDir: string; readonly eventsPath: string; readonly initialPath: string; readonly statePath: string;
  readonly clock: () => string; readonly chunkSize: number; private projectionCache: GoalVerifiedProjection | null;
  constructor({ stateDir, clock = () => new Date().toISOString(), chunkSize = 64 * 1024 }: {stateDir: string; clock?: () => string; chunkSize?: number}) {
    if (!Number.isSafeInteger(chunkSize) || chunkSize < 1) throw new RangeError("chunkSize must be a positive integer");
    this.stateDir = stateDir;
    this.eventsPath = path.join(stateDir, "events.jsonl");
    this.initialPath = path.join(stateDir, "initial-state.json");
    this.statePath = path.join(stateDir, "state.json");
    this.clock = clock;
    this.chunkSize = chunkSize;
    this.projectionCache = null;
  }

  initialize(initialState: unknown): GoalState {
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

  append(input: GoalEventInput): GoalEvent {
    if (typeof input.type !== 'string' || (input.event_id !== undefined && typeof input.event_id !== 'string')
      || (input.at !== undefined && typeof input.at !== 'string')) {
      throw new GoalHarnessError('GOAL_EVENT_LOG_CORRUPT', 'Event identity fields must be strings.');
    }
    if (input.payload !== undefined) record(input.payload, 'Goal event payload');
    if (!existsSync(this.initialPath)) {
      throw new GoalHarnessError("GOAL_STATE_UNINITIALIZED", `Goal state is not initialized: ${this.stateDir}`);
    }
    const projection = this.loadVerifiedProjection();
    const duplicate = this.getEvent(input.event_id);
    if (duplicate) {
      const expected = stableJson({ type: input.type, payload: input.payload ?? {} });
      const actual = stableJson({ type: duplicate.type, payload: duplicate.payload ?? {} });
      if (expected !== actual) {
        throw new GoalHarnessError("GOAL_EVENT_ID_CONFLICT", `Event id ${input.event_id} was reused with different content`);
      }
      return duplicate;
    }
    const unsigned = {
      sequence: projection.state.last_event_sequence + 1,
      event_id: input.event_id ?? randomUUID(),
      at: input.at ?? this.clock(),
      type: input.type,
      payload: input.payload ?? {},
      previous_hash: projection.state.last_event_hash,
    };
    const event = { ...unsigned, hash: sha256(stableJson(unsigned)) };
    const offset = statSync(this.eventsPath).size;
    const separator = offset > 0 && readRange(this.eventsPath, offset - 1, 1)[0] !== 10 ? "\n" : "";
    const line = JSON.stringify(event);
    // Reject invalid transitions before publishing an irreversible log entry.
    const state = reduceEvent(projection.state, event);
    durableAppend(this.eventsPath, `${separator}${line}\n`);
    atomicWriteJson(this.statePath, state);
    this.projectionCache = {
      signature: eventLogSignature(this.eventsPath),
      eventIndex: projection.eventIndex,
      queryIndex: projection.queryIndex,
      state,
    };
    projection.eventIndex.set(event.event_id, eventLocator(event, offset + separator.length, Buffer.byteLength(line)));
    indexQuery(projection.queryIndex, event, eventLocator(event, offset + separator.length, Buffer.byteLength(line)));
    return event;
  }

  // Compatibility API for bounded callers that require array operations.
  readEvents(): GoalEvent[] {
    return Array.from(this.iterateEvents());
  }

  // Single-pass iterator: callers must consume it fully to verify the entire chain.
  // Retain only byte locators and content digests, never historical payload objects.
  *iterateEvents({ eventIndex = new Map<unknown, GoalEventLocator>(), queryIndex = null }: {eventIndex?: Map<unknown, GoalEventLocator>; queryIndex?: Map<string, GoalEventLocator[]> | null} = {}): Generator<GoalEvent> {
    if (!existsSync(this.eventsPath)) {
      return;
    }
    let sequence = 0;
    let previousHash: string | null = null;
    for (const { bytes, offset } of readLines(this.eventsPath, this.chunkSize)) {
      if (bytes.length === 0) continue;
      sequence += 1;
      let event: GoalEvent;
      try {
        event = goalEvent(json(bytes.toString("utf8")));
        if (!event || typeof event !== "object" || Array.isArray(event)) throw new Error("Expected an event object");
      } catch (error) {
        throw new GoalHarnessError("GOAL_EVENT_LOG_CORRUPT", `Invalid event JSON at event ${sequence}`, { cause: errorMessage(error) });
      }
      const { hash, ...unsigned } = event;
      if (unsigned.sequence !== sequence || unsigned.previous_hash !== previousHash || hash !== sha256(stableJson(unsigned))) {
        throw new GoalHarnessError("GOAL_EVENT_LOG_CORRUPT", `Broken event hash chain at event ${sequence}`);
      }
      const locator = eventLocator(event, offset, bytes.length);
      const previous = eventIndex.get(event.event_id);
      if (previous && previous.contentHash !== locator.contentHash) {
        throw new GoalHarnessError("GOAL_EVENT_ID_CONFLICT", `Event id ${event.event_id} was reused with different content`);
      }
      if (!previous) eventIndex.set(event.event_id, locator);
      if (queryIndex) indexQuery(queryIndex, event, locator);
      previousHash = hash;
      yield event;
    }
  }

  getEvent(eventId: unknown): GoalEvent | undefined {
    const projection = this.loadVerifiedProjection();
    const locator = projection.eventIndex.get(eventId);
    if (!locator) return undefined;
    return this.readIndexedEvent(locator, projection);
  }

  getEventsByType(type: string, { receiptId }: {receiptId?: unknown} = {}): GoalEvent[] {
    const projection = this.loadVerifiedProjection();
    return (projection.queryIndex.get(queryKey(type, receiptId)) ?? []).map(locator => this.readIndexedEvent(locator, projection));
  }

  readIndexedEvent(locator: GoalEventLocator, projection: GoalVerifiedProjection): GoalEvent {
    const event = goalEvent(json(readRange(this.eventsPath, locator.offset, locator.length).toString("utf8")));
    const { hash, ...unsigned } = event;
    if (hash !== locator.hash || sha256(stableJson(unsigned)) !== hash || eventLogSignature(this.eventsPath) !== projection.signature) {
      throw new GoalHarnessError("GOAL_EVENT_LOG_CORRUPT", "Event log changed during indexed read");
    }
    return event;
  }

  rebuild(): GoalState {
    return this.loadVerifiedProjection().state;
  }

  loadVerifiedProjection(): GoalVerifiedProjection {
    const signature = eventLogSignature(this.eventsPath);
    if (this.projectionCache?.signature === signature) return this.projectionCache;
    let state = goalState(json(readFileSync(this.initialPath, "utf8")));
    const eventIndex = new Map<unknown, GoalEventLocator>();
    const queryIndex = new Map<string, GoalEventLocator[]>();
    for (const event of this.iterateEvents({ eventIndex, queryIndex })) state = reduceEvent(state, event);
    if (eventLogSignature(this.eventsPath) !== signature) {
      throw new GoalHarnessError("GOAL_EVENT_LOG_CORRUPT", "Event log changed during reconstruction");
    }
    const projection = { signature, eventIndex, queryIndex, state };
    this.projectionCache = projection;
    return projection;
  }
}

function queryKey(type: string, receiptId?: unknown): string { return JSON.stringify([type, receiptId ?? null]); }
function indexQuery(index: Map<string, GoalEventLocator[]>, event: GoalEvent, locator: GoalEventLocator): void {
  for (const key of new Set([queryKey(event.type), ...(event.payload?.receipt_id ? [queryKey(event.type, event.payload.receipt_id)] : [])])) {
    const entries = index.get(key) ?? [];
    entries.push(locator);
    index.set(key, entries);
  }
}

function eventLocator(event: GoalEvent, offset: number, length: number): GoalEventLocator {
  return { offset, length, hash: event.hash, contentHash: sha256(stableJson({ type: event.type, payload: event.payload ?? {} })) };
}

function* readLines(filePath: string, chunkSize: number): Generator<{bytes: Buffer; offset: number}> {
  const fd = openSync(filePath, "r");
  let offset = 0;
  let lineOffset = 0;
  let parts: Buffer[] = [];
  let length = 0;
  try {
    for (;;) {
      const chunk = Buffer.allocUnsafe(chunkSize);
      const count = readSync(fd, chunk, 0, chunk.length, null);
      if (count === 0) break;
      let start = 0;
      for (let i = 0; i < count; i += 1) {
        if (chunk[i] !== 10) continue;
        const part = chunk.subarray(start, i);
        const bytes = parts.length ? Buffer.concat([...parts, part], length + part.length) : part;
        yield { bytes, offset: lineOffset };
        parts = [];
        length = 0;
        start = i + 1;
        lineOffset = offset + start;
      }
      if (start < count) {
        parts.push(chunk.subarray(start, count));
        length += count - start;
      }
      offset += count;
    }
    if (length) yield { bytes: Buffer.concat(parts, length), offset: lineOffset };
  } finally {
    closeSync(fd);
  }
}

function readRange(filePath: string, offset: number, length: number): Buffer {
  const fd = openSync(filePath, "r");
  try {
    const bytes = Buffer.allocUnsafe(length);
    let read = 0;
    while (read < length) {
      const count = readSync(fd, bytes, read, length - read, offset + read);
      if (!count) throw new GoalHarnessError("GOAL_EVENT_LOG_CORRUPT", "Event log truncated during indexed read");
      read += count;
    }
    return bytes;
  } finally {
    closeSync(fd);
  }
}

function normalizeInitial(value: unknown): GoalState {
  const initial = record(value, "Initial Goal state");
  return goalState({
    ...initial,
    stopped: initial.stopped ?? false,
    snapshots: initial.snapshots ?? [],
    last_event_sequence: 0,
    last_event_hash: null,
  });
}

function reduceEvent(state: GoalState, event: GoalEvent): GoalState {
  const next: GoalState = {
    ...state,
    last_event_sequence: event.sequence,
    last_event_hash: event.hash,
    updated_at: event.at,
  };
  if (event.type === "model_trial_registered") {
    const trial = modelTrial(event.payload.trial);
    next.model_trials = [...(next.model_trials ?? []), trial];
    const assignments = new Map(trial.assignments.map(a => [a.task_id, a]));
    next.tasks = next.tasks.map(task => {
      const assignment = assignments.get(task.id);
      return assignment ? { ...task, model_trial: { ...assignment, trial_id: trial.id, controls: trial.controls } } : task;
    });
  } else if (event.type === "model_trial_controls_prelaunch") {
    const trial = next.model_trials?.find(t => t.id === event.payload.trial_id);
    const samples = next.tasks.filter(t => t.model_trial?.trial_id === event.payload.trial_id);
    if (!trial || samples.length !== 6 || samples.some(t => t.state !== "queued" || t.thread_id || t.worktree_path || t.attempt || t.trial_turns?.length)) {
      throw new GoalHarnessError("GOAL_TRIAL_ALREADY_STARTED", "Trial controls cannot change after a sample has started.");
    }
    if (stableJson(trial.controls) !== stableJson(event.payload.previous_controls) || !event.payload.reason
      || ["harness_sha256", "policy_sha256", "config_sha256", "cache_sha256"].some(k => !/^[a-f0-9]{64}$/.test(String(field(event.payload.controls, k) ?? "")))) {
      throw new GoalHarnessError("GOAL_TRIAL_CONTROL_CONFLICT", "Trial prelaunch control revision requires exact previous fingerprints and a reason.");
    }
    next.model_trials = (next.model_trials ?? []).map(t => t.id !== trial.id ? t : { ...t, controls: trialControls(event.payload.controls),
      control_history: [...(t.control_history ?? []), { controls: t.controls, at: event.at, reason: text(event.payload.reason) }] });
    next.tasks = next.tasks.map(t => t.model_trial?.trial_id !== trial.id ? t : { ...t, model_trial: { ...t.model_trial, controls: trialControls(event.payload.controls) } });
  } else if (event.type === "scheduling_stopped") {
    next.stopped = true;
  } else if (event.type === "scheduling_resumed") {
    next.stopped = false;
  } else if (event.type === "goal_planned") {
    next.plan = event.payload;
  } else if (event.type === "snapshot_created") {
    next.snapshots = [...(next.snapshots ?? []), goalSnapshot(event.payload)];
  } else if (event.type === "snapshot_replaced") {
    next.snapshots = (next.snapshots ?? []).map((snapshot) => snapshot.id === field(event.payload.snapshot, "id") ? goalSnapshot(event.payload.snapshot) : snapshot);
  } else if (event.type === "repository_validation_projected") {
    next.snapshots = (next.snapshots ?? []).map((snapshot) => snapshot.id === event.payload.snapshot_id
      ? { ...snapshot, ...record(event.payload.projection) }
      : snapshot);
    const projectedTasks = new Map(goalTasks(event.payload.tasks ?? []).map((task) => [task.id, task]));
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
    next.snapshots = (next.snapshots ?? []).map((snapshot) => snapshot.id === field(event.payload.snapshot, "id") ? goalSnapshot(event.payload.snapshot) : snapshot);
    const replacements = new Map(goalTasks(event.payload.tasks).map((task) => [task.id, task]));
    next.tasks = (next.tasks ?? []).map((task) => replacements.get(task.id) ?? task);
  } else if (event.type === "snapshot_reconciled") {
    next.snapshots = [...(next.snapshots ?? []).map(s => s.id === field(event.payload.previous_snapshot, "id") ? goalSnapshot(event.payload.previous_snapshot) : s), goalSnapshot(event.payload.snapshot)];
    const replacements = new Map(goalTasks(event.payload.tasks).map(task => [task.id, task]));
    next.tasks = (next.tasks ?? []).map(task => replacements.get(task.id) ?? task);
  } else if (event.type === "task_replaced") {
    const previous = next.tasks.find(task => task.id === field(event.payload.task, "id"));
    if (previous?.model_trial && stableJson(previous.model_trial) !== stableJson(field(event.payload.task, "model_trial"))) {
      throw new GoalHarnessError("GOAL_MODEL_TRIAL_IMMUTABLE", "Trial assignment is immutable; record model switches on turns, not assignments.");
    }
    next.tasks = (next.tasks ?? []).map((task) => task.id === field(event.payload.task, "id") ? goalTask(event.payload.task) : task);
  } else if (event.type === "verified_common_uuids_updated") {
    next.verified_common_uuids = recordArray(event.payload.verified_common_uuids);
  } else if (event.type === "runtime_baseline_updated") {
    next.runtime_baseline = record(event.payload.runtime_baseline);
  } else if (event.type === "landing_completed") {
    next.landed_path_fingerprints = {
      ...(next.landed_path_fingerprints ?? {}),
      ...stringMap(event.payload.path_fingerprints ?? {}),
    };
  }
  return next;
}

function durableAppend(filePath: string, content: string): void {
  appendFileSync(filePath, content);
  const descriptor = openSync(filePath, "r");
  try {
    fsyncSync(descriptor);
  } finally {
    closeSync(descriptor);
  }
}

function atomicWriteJson(filePath: string, value: unknown): void {
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

function stableJson(value: unknown): string | undefined {
  if (Array.isArray(value)) {
    return `[${value.map((entry) => entry === undefined ? "null" : stableJson(entry)).join(",")}]`;
  }
  if (value !== null && typeof value === "object" && !Array.isArray(value)) {
    return `{${Object.keys(value).filter((key) => field(value, key) !== undefined).sort().map((key) => `${JSON.stringify(key)}:${stableJson(field(value, key))}`).join(",")}}`;
  }
  return JSON.stringify(value);
}

function sha256(value: string | undefined): string {
  if (typeof value !== 'string') throw new TypeError('Canonical event SHA-256 requires serialized JSON.');
  return createHash("sha256").update(value).digest("hex");
}

function eventLogSignature(filePath: string): string {
  const stats = statSync(filePath, { bigint: true });
  return `${stats.dev}:${stats.ino}:${stats.size}:${stats.mtimeNs}:${stats.ctimeNs}`;
}

function recordArray(value: unknown): UnknownRecord[] { if (!Array.isArray(value)) throw new TypeError('Expected record array'); return value.map(entry=>record(entry)); }
function stringMap(value: unknown): Record<string,string> { const data=record(value); const entries: [string,string][]=[]; for(const [key,item] of Object.entries(data)) entries.push([key,text(item)]); return Object.fromEntries(entries); }
