import { createHash } from "node:crypto";
import { constants, closeSync, fstatSync, lstatSync, openSync, readFileSync } from "node:fs";
import path from "node:path";

const REQUIRED = ["input_tokens", "cached_input_tokens", "output_tokens", "total_tokens"];
const OPTIONAL = ["cache_write_input_tokens", "reasoning_output_tokens"];
function reject(reason) { throw new Error(reason); }
function counter(value) {
  if (!value || REQUIRED.some((key) => !Number.isSafeInteger(value[key]) || value[key] < 0)) reject("invalid_token_counters");
  const result = Object.fromEntries(REQUIRED.map((key) => [key, value[key]]));
  for (const key of OPTIONAL) {
    if (value[key] === undefined) continue;
    if (!Number.isSafeInteger(value[key]) || value[key] < 0) reject("invalid_token_counters");
    result[key] = value[key];
  }
  if (result.cached_input_tokens > result.input_tokens || result.total_tokens !== result.input_tokens + result.output_tokens
    || (result.reasoning_output_tokens ?? 0) > result.output_tokens) reject("invalid_token_counters");
  return result;
}
const equal = (a, b) => a && b && Object.keys(a).length === Object.keys(b).length && Object.keys(a).every((key) => a[key] === b[key]);

// Returns telemetry only. Session messages and filesystem error text never escape this boundary.
export function readTrialTurnUsage({ sessionPath, sessionsRoot, threadId, turnId, worktreePath }) {
  const result = { status: "unavailable", reason: null, thread_id: threadId, turn_id: turnId,
    tokens: null, observed_model: null, observed_reasoning_effort: null, source_sha256: null,
    measured_at: new Date().toISOString(), started_at: null, completed_at: null,
    duplicate_snapshots: 0, counter_epochs: 0 };
  let fd;
  try {
    if (![sessionPath, sessionsRoot, worktreePath].every((value) => typeof value === "string" && path.isAbsolute(value))
      || typeof threadId !== "string" || !threadId || typeof turnId !== "string" || !turnId) reject("invalid_identity_or_path");
    const relative = path.relative(sessionsRoot, sessionPath);
    if (!relative || relative.startsWith("..") || path.isAbsolute(relative) || !sessionPath.endsWith(".jsonl")) reject("unsafe_session_path");
    let current = path.parse(sessionPath).root;
    for (const part of sessionPath.slice(current.length).split(path.sep)) {
      current = path.join(current, part);
      if (lstatSync(current).isSymbolicLink()) reject("unsafe_session_path");
    }
    fd = openSync(sessionPath, constants.O_RDONLY | constants.O_NOFOLLOW | constants.O_NONBLOCK);
    const before = fstatSync(fd);
    if (!before.isFile() || before.size > 256 * 1024 * 1024) reject("invalid_session_file");
    const bytes = readFileSync(fd);
    const after = fstatSync(fd);
    if (before.size !== after.size || before.mtimeMs !== after.mtimeMs || before.ctimeMs !== after.ctimeMs) reject("session_changed_during_read");
    result.source_sha256 = createHash("sha256").update(bytes).digest("hex");
    let rows;
    try { rows = new TextDecoder("utf-8", { fatal: true }).decode(bytes).trimEnd().split("\n").map(JSON.parse); }
    catch { reject("corrupt_session"); }
    if (rows.some((row) => !row || typeof row !== "object" || !row.payload || typeof row.payload !== "object")) reject("corrupt_session");
    const metas = rows.filter((row) => row.type === "session_meta");
    if (metas.length !== 1 || metas[0].payload.id !== threadId || metas[0].payload.cwd !== worktreePath) reject("session_identity_mismatch");
    let active = null, previous = null, started = 0, completed = 0, samples = 0, sum = null;
    for (const row of rows) {
      const p = row.payload;
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
      } else if (["task_complete", "turn_aborted"].includes(p.type)) {
        if (p.turn_id === turnId) {
          if (p.type !== "task_complete" || active !== turnId) reject("ambiguous_turn_boundaries");
          completed += 1;
          result.completed_at = p.completed_at ?? row.timestamp ?? null;
        }
        if (active === p.turn_id) active = null;
      } else if (p.type === "token_count" && p.info) {
        const total = counter(p.info.total_token_usage);
        const last = counter(p.info.last_token_usage);
        if (active === turnId) {
          if (p.turn_id && p.turn_id !== turnId) reject("ambiguous_token_identity");
          if (equal(total, previous)) { result.duplicate_snapshots += 1; continue; }
          let delta;
          if (equal(total, last)) { delta = total; result.counter_epochs += 1; }
          else {
            if (!previous || Object.keys(total).length !== Object.keys(previous).length) reject("unknown_counter_baseline");
            delta = Object.fromEntries(Object.keys(total).map((key) => [key, total[key] - previous[key]]));
            if (!equal(delta, last) || Object.values(delta).some((value) => value < 0)) reject("ambiguous_counter_delta");
            if (samples === 0) result.counter_epochs += 1;
          }
          if (sum && Object.keys(sum).length !== Object.keys(delta).length) reject("counter_fields_changed");
          sum ??= Object.fromEntries(Object.keys(delta).map((key) => [key, 0]));
          for (const key of Object.keys(delta)) {
            sum[key] += delta[key];
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
    return { ...result, reason: reasons.has(error.message) ? error.message : "session_unavailable" };
  } finally { if (fd !== undefined) closeSync(fd); }
}
