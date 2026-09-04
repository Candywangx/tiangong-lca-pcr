import { closeSync, existsSync, mkdirSync, openSync, readFileSync, renameSync, unlinkSync, writeFileSync } from "node:fs";
import path from "node:path";
import { randomUUID } from "node:crypto";

import { GoalHarnessError } from "./errors.mjs";

export function withGoalLock(stateDir, operation, callback) {
  const { lockPath, token } = acquireGoalLock(stateDir, operation);
  try {
    return callback();
  } finally {
    const holder = safeRead(lockPath);
    if (holder?.token === token) unlinkSync(lockPath);
  }
}

export async function withGoalLockAsync(stateDir, operation, callback) {
  const { lockPath, token } = acquireGoalLock(stateDir, operation);
  try {
    return await callback();
  } finally {
    const holder = safeRead(lockPath);
    if (holder?.token === token) unlinkSync(lockPath);
  }
}

function acquireGoalLock(stateDir, operation) {
  mkdirSync(stateDir, { recursive: true });
  const lockPath = path.join(stateDir, "goal.lock");
  const token = randomUUID();
  for (let attempt = 0; attempt < 2; attempt += 1) {
    let descriptor;
    try {
      descriptor = openSync(lockPath, "wx", 0o600);
      writeFileSync(descriptor, `${JSON.stringify({ schema_version: 1, token, pid: process.pid, operation, acquired_at: new Date().toISOString() })}\n`);
      return { lockPath, token };
    } catch (error) {
      if (!existsSync(lockPath)) continue;
      const holder = safeRead(lockPath);
      if (attempt === 0 && holder && processIsDefinitelyGone(holder.pid)) {
        archiveDeadLock({ stateDir, lockPath, holder });
        continue;
      }
      throw new GoalHarnessError("GOAL_LOCKED", `Goal is locked by another operation: ${operation}`, { lock_path: lockPath, holder });
    } finally {
      if (descriptor !== undefined) closeSync(descriptor);
    }
  }
  const holder = existsSync(lockPath) ? safeRead(lockPath) : null;
  throw new GoalHarnessError("GOAL_LOCKED", `Goal is locked by another operation: ${operation}`, { lock_path: lockPath, holder });
}

function processIsDefinitelyGone(pid) {
  if (!Number.isSafeInteger(pid) || pid <= 0) return false;
  try {
    process.kill(pid, 0);
    return false;
  } catch (error) {
    return error?.code === "ESRCH";
  }
}

function archiveDeadLock({ stateDir, lockPath, holder }) {
  const historyDir = path.join(stateDir, "lock-history");
  mkdirSync(historyDir, { recursive: true, mode: 0o700 });
  const safeToken = String(holder.token).replace(/[^a-z0-9._-]+/giu, "-").slice(0, 80);
  const archivePath = path.join(historyDir, `goal-lock-stale-${holder.pid}-${safeToken}.json`);
  renameSync(lockPath, archivePath);
  const moved = safeRead(archivePath);
  if (moved?.token !== holder.token) {
    if (!existsSync(lockPath)) renameSync(archivePath, lockPath);
    throw new GoalHarnessError("GOAL_LOCKED", "Goal lock changed while stale-lock recovery was in progress.", { lock_path: lockPath, holder: moved });
  }
}

function safeRead(filePath) {
  try {
    return JSON.parse(readFileSync(filePath, "utf8"));
  } catch {
    return null;
  }
}
