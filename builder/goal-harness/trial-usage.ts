import { createHash } from "node:crypto";
import { constants, closeSync, fstatSync, lstatSync, openSync, readFileSync } from "node:fs";
import path from "node:path";

import { field, record, text, errorMessage } from "./domain.ts";
import type { UnknownRecord } from "./domain.ts";
export interface TrialUsageResult {status:string;reason:string|null;thread_id:unknown;turn_id:unknown;tokens:Record<string,number>|null;observed_model:string|null;observed_reasoning_effort:string|null;source_sha256:string|null;measured_at:string;started_at:unknown;completed_at:unknown;duplicate_snapshots:number;counter_epochs:number}
const REQUIRED = ["input_tokens", "cached_input_tokens", "output_tokens", "total_tokens"];
const OPTIONAL = ["cache_write_input_tokens", "reasoning_output_tokens"];
function reject(reason:string):never { throw new Error(reason); }
function counter(input:unknown):Record<string,number> {
  const value=record(input);
  if (REQUIRED.some((key) => !Number.isSafeInteger(value[key]) || Number(value[key]) < 0)) reject("invalid_token_counters");
  const result:Record<string,number> = Object.fromEntries(REQUIRED.map((key) => [key, Number(value[key])]));
  for (const key of OPTIONAL) {
    if (value[key] === undefined) continue;
    if (!Number.isSafeInteger(value[key]) || Number(value[key]) < 0) reject("invalid_token_counters");
    result[key] = Number(value[key]);
  }
  if ((result.cached_input_tokens ?? 0) > (result.input_tokens ?? 0) || result.total_tokens !== (result.input_tokens ?? 0) + (result.output_tokens ?? 0)
    || (result.reasoning_output_tokens ?? 0) > (result.output_tokens ?? 0)) reject("invalid_token_counters");
  return result;
}
const equal = (a:Record<string,number>|null, b:Record<string,number>|null) => a && b && Object.keys(a).length === Object.keys(b).length && Object.keys(a).every((key) => a[key] === b[key]);

// Returns telemetry only. Session messages and filesystem error text never escape this boundary.
export function readTrialTurnUsage({ sessionPath, sessionsRoot, threadId, turnId, worktreePath }: {sessionPath:unknown;sessionsRoot:unknown;threadId:unknown;turnId:unknown;worktreePath:unknown}):TrialUsageResult {
  const result:TrialUsageResult = { status: "unavailable", reason: null, thread_id: threadId, turn_id: turnId,
    tokens: null, observed_model: null, observed_reasoning_effort: null, source_sha256: null,
    measured_at: new Date().toISOString(), started_at: null, completed_at: null,
    duplicate_snapshots: 0, counter_epochs: 0 };
  let fd;
  try {
    if (![sessionPath, sessionsRoot, worktreePath].every((value) => typeof value === "string" && path.isAbsolute(value))
      || typeof threadId !== "string" || !threadId || typeof turnId !== "string" || !turnId) reject("invalid_identity_or_path");
    const relative = path.relative(text(sessionsRoot), text(sessionPath));
    if (!relative || relative.startsWith("..") || path.isAbsolute(relative) || !text(sessionPath).endsWith(".jsonl")) reject("unsafe_session_path");
    let current = path.parse(text(sessionPath)).root;
    for (const part of text(sessionPath).slice(current.length).split(path.sep)) {
      current = path.join(current, part);
      if (lstatSync(current).isSymbolicLink()) reject("unsafe_session_path");
    }
    fd = openSync(text(sessionPath), constants.O_RDONLY | constants.O_NOFOLLOW | constants.O_NONBLOCK);
    const before = fstatSync(fd);
    if (!before.isFile() || before.size > 256 * 1024 * 1024) reject("invalid_session_file");
    const bytes = readFileSync(fd);
    const after = fstatSync(fd);
    if (before.size !== after.size || before.mtimeMs !== after.mtimeMs || before.ctimeMs !== after.ctimeMs) reject("session_changed_during_read");
    result.source_sha256 = createHash("sha256").update(bytes).digest("hex");
    let rows:UnknownRecord[];
    try { rows = new TextDecoder("utf-8", { fatal: true }).decode(bytes).trimEnd().split("\n").map(line=>record(JSON.parse(line))); }
    catch { reject("corrupt_session"); }
    if (rows.some((row) => !row || typeof row !== "object" || !row.payload || typeof row.payload !== "object")) reject("corrupt_session");
    const metas = rows.filter((row) => row.type === "session_meta");
    if (metas.length !== 1 || field(metas[0]?.payload,"id") !== threadId || field(metas[0]?.payload,"cwd") !== worktreePath) reject("session_identity_mismatch");
    let active:unknown = null, previous:Record<string,number>|null = null, started = 0, completed = 0, samples = 0, sum:Record<string,number>|null = null;
    for (const row of rows) {
      const p = record(row.payload);
      if (row.type === "turn_context" && p.turn_id === turnId) {
        if (active !== turnId || (p.cwd && p.cwd !== worktreePath)) reject("ambiguous_turn_context");
        if (typeof p.model !== "string" || !p.model || typeof p.effort !== "string" || !p.effort) reject("missing_model_context");
        if (result.observed_model && (result.observed_model !== p.model || result.observed_reasoning_effort !== p.effort)) reject("model_changed_within_turn");
        result.observed_model = p.model;
        result.observed_reasoning_effort = p.effort;
      }
      if (row.type !== "event_msg") continue;
      if (p.turn_id === turnId && p.thread_id && p.thread_id !== threadId) reject("session_identity_mismatch");
      if (p.type === "task_started") {
        if (active === turnId || (p.turn_id === turnId && active)) reject("ambiguous_turn_boundaries");
        active = p.turn_id;
        if (active === turnId) { started += 1; result.started_at = p.started_at ?? row.timestamp ?? null; }
      } else if (["task_complete", "turn_aborted"].includes(String(p.type))) {
        if (p.turn_id === turnId) {
          if (p.type !== "task_complete" || active !== turnId) reject("ambiguous_turn_boundaries");
          completed += 1;
          result.completed_at = p.completed_at ?? row.timestamp ?? null;
        }
        if (active === p.turn_id) active = null;
      } else if (p.type === "token_count" && p.info) {
        const total = counter(field(p.info,"total_token_usage"));
        const last = counter(field(p.info,"last_token_usage"));
        if (active === turnId) {
          if (p.turn_id && p.turn_id !== turnId) reject("ambiguous_token_identity");
          if (equal(total, previous)) { result.duplicate_snapshots += 1; continue; }
          let delta;
          if (equal(total, last)) { delta = total; result.counter_epochs += 1; }
          else {
            if (!previous || Object.keys(total).length !== Object.keys(previous).length) reject("unknown_counter_baseline");
            delta = Object.fromEntries(Object.keys(total).map((key) => [key, (total[key] ?? 0) - (previous?.[key] ?? 0)]));
            if (!equal(delta, last) || Object.values(delta).some((value) => value < 0)) reject("ambiguous_counter_delta");
            if (samples === 0) result.counter_epochs += 1;
          }
          if (sum && Object.keys(sum).length !== Object.keys(delta).length) reject("counter_fields_changed");
          sum ??= Object.fromEntries(Object.keys(delta).map((key) => [key, 0]));
          for (const key of Object.keys(delta)) {
            sum[key] = (sum[key] ?? 0) + (delta[key] ?? 0);
            if (!Number.isSafeInteger(sum[key])) reject("token_counter_overflow");
          }
          samples += 1;
        }
        previous = total;
      }
    }
    if (started !== 1 || completed !== 1) reject("turn_not_uniquely_completed");
    if (!samples) reject("missing_token_usage");
    if (!result.observed_model) reject("missing_model_context");
    return { ...result, status: "available", tokens: sum };
  } catch (error) {
    const reasons = new Set(["invalid_token_counters", "invalid_identity_or_path", "unsafe_session_path", "invalid_session_file",
      "session_changed_during_read", "corrupt_session", "session_identity_mismatch", "ambiguous_turn_context", "missing_model_context",
      "model_changed_within_turn", "ambiguous_turn_boundaries", "ambiguous_token_identity", "unknown_counter_baseline",
      "ambiguous_counter_delta", "counter_fields_changed", "token_counter_overflow", "turn_not_uniquely_completed", "missing_token_usage"]);
    return { ...result, reason: reasons.has(errorMessage(error)) ? errorMessage(error) : "session_unavailable" };
  } finally { if (fd !== undefined) closeSync(fd); }
}
