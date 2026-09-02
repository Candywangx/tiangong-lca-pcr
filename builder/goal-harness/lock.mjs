import { closeSync, existsSync, mkdirSync, openSync, readFileSync, unlinkSync, writeFileSync } from "node:fs";
import path from "node:path";
import { randomUUID } from "node:crypto";

import { GoalHarnessError } from "./errors.mjs";

export function withGoalLock(stateDir, operation, callback) {
  mkdirSync(stateDir, { recursive: true });
  const lockPath = path.join(stateDir, "goal.lock");
  const token = randomUUID();
  let descriptor;
  try {
    descriptor = openSync(lockPath, "wx", 0o600);
    writeFileSync(descriptor, `${JSON.stringify({ schema_version: 1, token, pid: process.pid, operation, acquired_at: new Date().toISOString() })}\n`);
  } catch (error) {
    const holder = existsSync(lockPath) ? safeRead(lockPath) : null;
    throw new GoalHarnessError("GOAL_LOCKED", `Goal is locked by another operation: ${operation}`, { lock_path: lockPath, holder });
  } finally {
    if (descriptor !== undefined) closeSync(descriptor);
  }
  try {
    return callback();
  } finally {
    const holder = safeRead(lockPath);
    if (holder?.token === token) unlinkSync(lockPath);
  }
}

export async function withGoalLockAsync(stateDir, operation, callback) {
  mkdirSync(stateDir, { recursive: true });
  const lockPath = path.join(stateDir, "goal.lock");
  const token = randomUUID();
  let descriptor;
  try {
    descriptor = openSync(lockPath, "wx", 0o600);
    writeFileSync(descriptor, `${JSON.stringify({ schema_version: 1, token, pid: process.pid, operation, acquired_at: new Date().toISOString() })}\n`);
  } catch (error) {
    const holder = existsSync(lockPath) ? safeRead(lockPath) : null;
    throw new GoalHarnessError("GOAL_LOCKED", `Goal is locked by another operation: ${operation}`, { lock_path: lockPath, holder });
  } finally {
    if (descriptor !== undefined) closeSync(descriptor);
  }
  try {
    return await callback();
  } finally {
    const holder = safeRead(lockPath);
    if (holder?.token === token) unlinkSync(lockPath);
  }
}

function safeRead(filePath) {
  try {
    return JSON.parse(readFileSync(filePath, "utf8"));
  } catch {
    return null;
  }
}
