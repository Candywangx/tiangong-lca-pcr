import { constants as fsConstants, closeSync, existsSync, fsyncSync, linkSync, lstatSync, mkdirSync, openSync, readFileSync, readdirSync, renameSync, rmSync, unlinkSync, writeSync } from "node:fs";
import path from "node:path";
import { createHash, randomUUID } from "node:crypto";

import { GoalHarnessError } from "./errors.mjs";

export function withGoalLock(stateDir, operation, callback, { faultInjector = () => {} } = {}) {
  const { lockPath, lease } = acquireGoalLock(stateDir, operation, { faultInjector });
  try {
    return callback();
  } finally {
    releaseGoalLock(lockPath, lease);
  }
}

export async function withGoalLockAsync(stateDir, operation, callback, { faultInjector = () => {} } = {}) {
  const { lockPath, lease } = acquireGoalLock(stateDir, operation, { faultInjector });
  try {
    return await callback();
  } finally {
    releaseGoalLock(lockPath, lease);
  }
}

function acquireGoalLock(stateDir, operation, { faultInjector }) {
  mkdirSync(stateDir, { recursive: true });
  const lockPath = path.join(stateDir, "goal.lock");
  const token = randomUUID();
  const owner = { schema_version: 1, token, pid: process.pid, operation, acquired_at: new Date().toISOString() };
  const lease = Buffer.from(`${JSON.stringify(owner)}\n`, "utf8");
  for (let attempt = 0; attempt < 2; attempt += 1) {
    let descriptor;
    try {
      descriptor = openSync(lockPath, fsConstants.O_WRONLY | fsConstants.O_CREAT | fsConstants.O_EXCL | fsConstants.O_NOFOLLOW, 0o600);
      writeSync(descriptor, lease);
      fsyncSync(descriptor);
      fsyncDirectory(stateDir);
      return { lockPath, lease };
    } catch (error) {
      if (error?.code !== "EEXIST" && !existsSync(lockPath)) throw error;
      const existing = readGoalLock(lockPath);
      if (attempt === 0 && processIsDefinitelyGone(existing.holder.pid)) {
        retireDeadLock({ stateDir, lockPath, existing, faultInjector });
        continue;
      }
      throw new GoalHarnessError("GOAL_LOCKED", `Goal is locked by another operation: ${operation}`, { lock_path: lockPath, holder: existing.holder });
    } finally {
      if (descriptor !== undefined) closeSync(descriptor);
    }
  }
  const holder = existsSync(lockPath) ? readGoalLock(lockPath).holder : null;
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

function retireDeadLock({ stateDir, lockPath, existing, faultInjector }) {
  const historyDir = path.join(stateDir, "lock-history");
  mkdirSync(historyDir, { recursive: true, mode: 0o700 });
  const digest = createHash("sha256").update(existing.bytes).digest("hex");
  const retiredDir = path.join(historyDir, `goal-lock-stale-${existing.holder.pid}-${digest}`);
  let createdDirectory = false;
  try {
    mkdirSync(retiredDir, { mode: 0o700 });
    createdDirectory = true;
  } catch (error) {
    if (error?.code !== "EEXIST") throw error;
  }
  const retiredStat = lstatSync(retiredDir);
  if (!retiredStat.isDirectory() || retiredStat.isSymbolicLink()) {
    throw new GoalHarnessError("GOAL_LOCKED", "Stale-lock retirement claim has an untrusted filesystem type.", { lock_path: lockPath });
  }
  const entries = readdirSync(retiredDir);
  if (entries.some((entry) => entry !== "owner.json" && entry !== "recovery.lock" && !/^recovery-dead-[a-f0-9]{64}\.json$/u.test(entry))) {
    throw new GoalHarnessError("GOAL_LOCKED", "Stale-lock retirement claim has an untrusted shape.", { lock_path: lockPath });
  }
  if (createdDirectory) {
    fsyncDirectory(historyDir);
    faultInjector("after_retirement_directory_created", { lock_path: lockPath, retired_dir: retiredDir });
  }
  const recoveryLease = acquireRetirementRecoveryClaim(retiredDir);
  const retiredOwner = path.join(retiredDir, "owner.json");
  let capturedOwner = false;
  try {
    try {
      linkSync(lockPath, retiredOwner);
      capturedOwner = true;
      fsyncDirectory(retiredDir);
      faultInjector("after_stale_owner_captured", { lock_path: lockPath, retired_dir: retiredDir });
    } catch (error) {
      if (error?.code !== "EEXIST") throw error;
    }
    const moved = readFileSync(retiredOwner);
    if (!moved.equals(existing.bytes)) {
      if (capturedOwner) unlinkSync(retiredOwner);
      throw new GoalHarnessError("GOAL_LOCKED", "Goal lock owner changed while stale-lock retirement was in progress.", { lock_path: lockPath });
    }
    const current = readGoalLock(lockPath);
    const currentStat = lstatSync(lockPath);
    const capturedStat = lstatSync(retiredOwner);
    if (!current.bytes.equals(existing.bytes) || currentStat.dev !== capturedStat.dev || currentStat.ino !== capturedStat.ino) {
      unlinkSync(retiredOwner);
      throw new GoalHarnessError("GOAL_LOCKED", "Goal lock was replaced while stale-lock retirement was in progress.", { lock_path: lockPath });
    }
    unlinkSync(lockPath);
    fsyncDirectory(retiredDir);
    fsyncDirectory(historyDir);
    fsyncDirectory(stateDir);
  } catch (error) {
    if (error?.code === "ENOENT") {
      throw new GoalHarnessError("GOAL_LOCKED", "Goal lock changed while stale-lock retirement was in progress.", { lock_path: lockPath });
    }
    throw error;
  } finally {
    releaseRetirementRecoveryClaim(retiredDir, recoveryLease);
  }
}

function acquireRetirementRecoveryClaim(retiredDir) {
  const claimPath = path.join(retiredDir, "recovery.lock");
  const lease = Buffer.from(`${JSON.stringify({ schema_version: 1, pid: process.pid, token: randomUUID(), acquired_at: new Date().toISOString() })}\n`, "utf8");
  for (let attempt = 0; attempt < 2; attempt += 1) {
    let descriptor;
    try {
      descriptor = openSync(claimPath, fsConstants.O_WRONLY | fsConstants.O_CREAT | fsConstants.O_EXCL | fsConstants.O_NOFOLLOW, 0o600);
      writeSync(descriptor, lease);
      fsyncSync(descriptor);
      fsyncDirectory(retiredDir);
      return lease;
    } catch (error) {
      if (error?.code !== "EEXIST") throw error;
      const existing = readRetirementRecoveryClaim(claimPath);
      if (!processIsDefinitelyGone(existing.holder.pid)) {
        throw new GoalHarnessError("GOAL_LOCKED", "Another operation is completing stale-lock retirement.", { claim_path: claimPath });
      }
      const archive = path.join(retiredDir, `recovery-dead-${createHash("sha256").update(existing.bytes).digest("hex")}.json`);
      try {
        linkSync(claimPath, archive);
      } catch (linkError) {
        if (linkError?.code === "EEXIST") {
          throw new GoalHarnessError("GOAL_LOCKED", "Another operation is recovering the stale retirement claim.", { claim_path: claimPath });
        }
        throw linkError;
      }
      const current = readFileSync(claimPath);
      if (!current.equals(existing.bytes)) {
        unlinkSync(archive);
        throw new GoalHarnessError("GOAL_LOCKED", "Stale retirement claim changed during recovery.", { claim_path: claimPath });
      }
      unlinkSync(claimPath);
      fsyncDirectory(retiredDir);
    } finally {
      if (descriptor !== undefined) closeSync(descriptor);
    }
  }
  throw new GoalHarnessError("GOAL_LOCKED", "Could not acquire stale-lock retirement recovery claim.", { claim_path: claimPath });
}

function readRetirementRecoveryClaim(claimPath) {
  const stat = lstatSync(claimPath);
  if (!stat.isFile() || stat.isSymbolicLink()) {
    throw new GoalHarnessError("GOAL_LOCKED", "Stale-lock retirement claim has an untrusted filesystem type.", { claim_path: claimPath });
  }
  const bytes = readFileSync(claimPath);
  let holder;
  try { holder = JSON.parse(bytes.toString("utf8")); } catch {
    throw new GoalHarnessError("GOAL_LOCKED", "Stale-lock retirement claim is incomplete or invalid.", { claim_path: claimPath });
  }
  if (holder?.schema_version !== 1 || !Number.isSafeInteger(holder.pid) || holder.pid < 1 || typeof holder.token !== "string") {
    throw new GoalHarnessError("GOAL_LOCKED", "Stale-lock retirement claim is not trusted.", { claim_path: claimPath });
  }
  return { holder, bytes };
}

function releaseRetirementRecoveryClaim(retiredDir, lease) {
  const claimPath = path.join(retiredDir, "recovery.lock");
  if (!existsSync(claimPath)) return;
  try {
    const current = readFileSync(claimPath);
    if (!current.equals(lease)) return;
    unlinkSync(claimPath);
    fsyncDirectory(retiredDir);
  } catch { /* fail closed; a later confirmed-dead reclaimer can recover the claim */ }
}

function readGoalLock(filePath) {
  let stat;
  try {
    stat = lstatSync(filePath);
  } catch (error) {
    throw new GoalHarnessError("GOAL_LOCKED", "Goal lock changed while its owner was being inspected.", { lock_path: filePath, cause: error.message });
  }
  if (!stat.isFile() || stat.isSymbolicLink()) {
    throw new GoalHarnessError("GOAL_LOCKED", "Goal lock has an untrusted filesystem type.", { lock_path: filePath });
  }
  const bytes = readFileSync(filePath);
  let holder;
  try {
    holder = JSON.parse(bytes.toString("utf8"));
  } catch (error) {
    throw new GoalHarnessError("GOAL_LOCKED", "Goal lock contains invalid owner data.", { lock_path: filePath, cause: error.message });
  }
  const keys = Object.keys(holder ?? {}).sort();
  if (JSON.stringify(keys) !== JSON.stringify(["acquired_at", "operation", "pid", "schema_version", "token"].sort()) ||
      holder.schema_version !== 1 || !Number.isSafeInteger(holder.pid) || holder.pid < 1 ||
      typeof holder.token !== "string" || holder.token.length === 0 ||
      typeof holder.operation !== "string" || holder.operation.length === 0 ||
      !Number.isFinite(Date.parse(holder.acquired_at ?? ""))) {
    throw new GoalHarnessError("GOAL_LOCKED", "Goal lock owner data is not trusted.", { lock_path: filePath });
  }
  return { holder, bytes };
}

function releaseGoalLock(lockPath, lease) {
  if (!existsSync(lockPath)) return;
  const stateDir = path.dirname(lockPath);
  const digest = createHash("sha256").update(lease).digest("hex");
  const releasedDir = path.join(stateDir, `.goal-lock-release-${digest}`);
  try { mkdirSync(releasedDir, { mode: 0o700 }); } catch { return; }
  const releasedOwner = path.join(releasedDir, "owner.json");
  try {
    renameSync(lockPath, releasedOwner);
    const moved = readFileSync(releasedOwner);
    if (!moved.equals(lease)) {
      if (!existsSync(lockPath)) renameSync(releasedOwner, lockPath);
      return;
    }
    fsyncDirectory(stateDir);
    rmSync(releasedDir, { recursive: true });
    fsyncDirectory(stateDir);
  } catch {
    if (existsSync(releasedOwner) && !existsSync(lockPath)) {
      try { renameSync(releasedOwner, lockPath); } catch { /* retain fail-closed owner */ }
    }
  }
}

function fsyncDirectory(directory) {
  const descriptor = openSync(directory, "r");
  try { fsyncSync(descriptor); } finally { closeSync(descriptor); }
}
