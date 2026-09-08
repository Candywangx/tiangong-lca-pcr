import { createHash } from "node:crypto";
import { constants, closeSync, fstatSync, lstatSync, openSync, readFileSync } from "node:fs";
import path from "node:path";
import { GoalHarnessError } from "./errors.mjs";

function reject() {
  throw new GoalHarnessError("GOAL_SESSION_RECOVERY_INVALID", "Persisted Codex session could not prove the exact completed author turn.");
}

export function recoverSessionTurn(rows, { threadId, turnId, worktreePath }) {
  const metas = rows.filter((r) => r.type === "session_meta");
  if (metas.length !== 1 || metas[0].payload?.id !== threadId || metas[0].payload?.cwd !== worktreePath) reject();
  const events = rows.filter((r) => r.type === "event_msg" && r.payload?.turn_id === turnId).map((r) => r.payload);
  const terminals = events.filter((e) => e.type === "task_complete");
  if (terminals.length === 0) return null;
  if (terminals.length !== 1 || events.at(-1) !== terminals[0]) reject();
  if (events.some((e) => e.thread_id && e.thread_id !== threadId)) reject();
  const material = events.filter((e) => e.type === "item_completed" && e.item?.type !== "Reasoning");
  const final = material.at(-1)?.item;
  if (final?.type !== "AgentMessage" || final.phase !== "final_answer" || !Array.isArray(final.content)
    || final.content.some((c) => c.type !== "Text" || typeof c.text !== "string")) reject();
  const text = final.content.map((c) => c.text).join("");
  if (text !== terminals[0].last_agent_message) reject();
  try { const report = JSON.parse(text); if (!report || Array.isArray(report) || typeof report !== "object") reject(); } catch { reject(); }
  return { id: turnId, status: "completed", items: [{ type: "agentMessage", id: final.id, text }] };
}

export function readRecoveredSessionTurn({ sessionPath, sessionsRoot, ...identity }) {
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
    let rows;
    try {
      const text = new TextDecoder("utf-8", { fatal: true }).decode(bytes);
      rows = text.trimEnd().split("\n").map((line) => JSON.parse(line));
    } catch { reject(); }
    const turn = recoverSessionTurn(rows, identity);
    return turn ? { turn, audit: { kind: "codex_session_terminal_recovery", thread_id: identity.threadId,
      turn_id: identity.turnId, response_sha256: createHash("sha256").update(bytes).digest("hex"),
      verified_at: new Date().toISOString() } } : null;
  } finally { closeSync(fd); }
}
