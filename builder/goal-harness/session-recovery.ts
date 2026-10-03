import { createHash } from "node:crypto";
import { constants, closeSync, fstatSync, lstatSync, openSync, readFileSync } from "node:fs";
import path from "node:path";
import { GoalHarnessError } from "./errors.ts";

export interface SessionTurnIdentity { threadId: string; turnId: string; worktreePath: string }
export interface RecoveredSessionTurn {
  id: string; status: "completed"; items: { type: "agentMessage"; id: unknown; text: string }[];
}
function object(value: unknown): value is Record<string, unknown> { return value !== null && typeof value === "object" && !Array.isArray(value); }
function field(value: unknown, key: string): unknown { return object(value) ? value[key] : undefined; }
function reject(): never {
  throw new GoalHarnessError("GOAL_SESSION_RECOVERY_INVALID", "Persisted Codex session could not prove the exact completed author turn.");
}

export function recoverSessionTurn(rows: readonly unknown[], { threadId, turnId, worktreePath }: SessionTurnIdentity): RecoveredSessionTurn | null {
  const metas = rows.filter(row => field(row, "type") === "session_meta");
  if (metas.length !== 1 || field(field(metas[0], "payload"), "id") !== threadId || field(field(metas[0], "payload"), "cwd") !== worktreePath) reject();
  const events = rows.filter(row => field(row, "type") === "event_msg" && field(field(row, "payload"), "turn_id") === turnId).map(row => field(row, "payload"));
  const terminals = events.filter(event => field(event, "type") === "task_complete");
  if (terminals.length === 0) return null;
  if (terminals.length !== 1 || events.at(-1) !== terminals[0]) reject();
  if (events.some(event => field(event, "thread_id") && field(event, "thread_id") !== threadId)) reject();
  const material = events.filter(event => field(event, "type") === "item_completed" && field(field(event, "item"), "type") !== "Reasoning");
  const final = field(material.at(-1), "item");
  const content = field(final, "content");
  if (field(final, "type") !== "AgentMessage" || field(final, "phase") !== "final_answer" || !Array.isArray(content)
    || content.some((part: unknown) => field(part, "type") !== "Text" || typeof field(part, "text") !== "string")) reject();
  const text = content.map((part: unknown) => String(field(part, "text"))).join("");
  if (text !== field(terminals[0], "last_agent_message")) reject();
  try { const report: unknown = JSON.parse(text); if (!object(report)) reject(); } catch { reject(); }
  return { id: turnId, status: "completed", items: [{ type: "agentMessage", id: field(final, "id"), text }] };
}

export function readRecoveredSessionTurn({ sessionPath, sessionsRoot, ...identity }: SessionTurnIdentity & { sessionPath: string; sessionsRoot: string }) {
  if (!path.isAbsolute(sessionPath) || !path.isAbsolute(sessionsRoot)) reject();
  const relative = path.relative(sessionsRoot, sessionPath);
  if (!relative || relative.startsWith("..") || path.isAbsolute(relative) || !sessionPath.endsWith(".jsonl")) reject();
  let current = path.parse(sessionPath).root;
  for (const part of sessionPath.slice(current.length).split(path.sep)) {
    current = path.join(current, part);
    if (lstatSync(current).isSymbolicLink()) reject();
  }
  const fd = openSync(sessionPath, constants.O_RDONLY | constants.O_NOFOLLOW | constants.O_NONBLOCK);
  try {
    const before = fstatSync(fd);
    if (!before.isFile() || before.size > 256 * 1024 * 1024) reject();
    const bytes = readFileSync(fd);
    const after = fstatSync(fd);
    if (before.size !== after.size || before.mtimeMs !== after.mtimeMs) reject();
    let rows: unknown[];
    try { const text = new TextDecoder("utf-8", { fatal: true }).decode(bytes); rows = text.trimEnd().split("\n").map(line => JSON.parse(line) as unknown); }
    catch { reject(); }
    const turn = recoverSessionTurn(rows, identity);
    return turn ? { turn, audit: { kind: "codex_session_terminal_recovery", thread_id: identity.threadId,
      turn_id: identity.turnId, response_sha256: createHash("sha256").update(bytes).digest("hex"), verified_at: new Date().toISOString() } } : null;
  } finally { closeSync(fd); }
}
