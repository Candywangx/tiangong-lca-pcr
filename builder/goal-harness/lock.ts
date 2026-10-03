import type { Stats } from 'node:fs';
import { field, isRecord, errorCode, errorMessage, type UnknownRecord } from './domain.ts';
export type GoalLockFaultInjector = (phase: string, context: UnknownRecord) => unknown;
export interface GoalLockOptions { faultInjector?: GoalLockFaultInjector; allowDeadLockRecovery?: boolean }
interface GoalLockHolder { schema_version: 1; token: string; pid: number; operation: string; acquired_at: string }
interface RecoveryHolder { schema_version: 1; pid: number; token: string; acquired_at: string }
interface PathSnapshot { bytes: Buffer; stat: Stats }
interface LeaseSnapshot extends PathSnapshot { holder: GoalLockHolder }
interface LockSettings { faultInjector: GoalLockFaultInjector; allowDeadLockRecovery: boolean }
interface LeaseOperation { stateDir: string; lockPath: string; existing: LeaseSnapshot; faultInjector: GoalLockFaultInjector }
import { constants as fsConstants, closeSync, existsSync, fstatSync, fsyncSync, linkSync, lstatSync, mkdirSync, openSync, readFileSync, readdirSync, renameSync, rmSync, unlinkSync, writeSync } from "node:fs";
import path from "node:path";
import { createHash, randomUUID } from "node:crypto";

import { GoalHarnessError } from "./errors.ts";

export function withGoalLock<T>(stateDir: string, operation: string, callback: () => T, { faultInjector = () => {}, allowDeadLockRecovery = true }: GoalLockOptions = {}): T {
  const { lockPath, lease } = acquireGoalLock(stateDir, operation, { faultInjector, allowDeadLockRecovery });
  try {
    return callback();
  } finally {
    releaseGoalLock(lockPath, lease);
  }
}

export async function withGoalLockAsync<T>(stateDir: string, operation: string, callback: () => T | Promise<T>, { faultInjector = () => {}, allowDeadLockRecovery = true }: GoalLockOptions = {}): Promise<T> {
  const { lockPath, lease } = acquireGoalLock(stateDir, operation, { faultInjector, allowDeadLockRecovery });
  try {
    return await callback();
  } finally {
    releaseGoalLock(lockPath, lease);
  }
}

function acquireGoalLock(stateDir: string, operation: string, { faultInjector, allowDeadLockRecovery }: LockSettings): {lockPath: string; lease: Buffer} {
  mkdirSync(stateDir, { recursive: true });
  const lockPath = path.join(stateDir, "goal.lock");
  const token = randomUUID();
  const owner = { schema_version: 1, token, pid: process.pid, operation, acquired_at: new Date().toISOString() };
  const lease = Buffer.from(`${JSON.stringify(owner)}\n`, "utf8");
  for (let attempt = 0; attempt < 16; attempt += 1) {
    recoverIncompleteRetirements({ stateDir, faultInjector, allowDeadLockRecovery });
    let published;
    try {
      published = publishGoalLock({ stateDir, lockPath, lease, faultInjector });
    } catch (error) {
      if (error instanceof GoalHarnessError) throw error;
      throw lockedRace("Goal lock changed while it was being acquired.", lockPath, error);
    }
    if (!published) {
      const existing = readGoalLock(lockPath);
      if (processIsDefinitelyGone(existing.holder.pid)) {
        if (!allowDeadLockRecovery) {
          throw new GoalHarnessError("GOAL_STALE_LOCK_FORCE_REQUIRED", "A confirmed dead Goal lock requires explicit stale-lock recovery authorization.", { lock_path: lockPath, holder: existing.holder });
        }
        retireDeadLock({ stateDir, lockPath, existing, faultInjector });
        continue;
      }
      throw new GoalHarnessError("GOAL_LOCKED", `Goal is locked by another operation: ${operation}`, { lock_path: lockPath, holder: existing.holder });
    }
    try {
      faultInjector("after_goal_lock_published", { lock_path: lockPath });
      if (hasIncompleteRetirement(stateDir)) {
        releaseGoalLock(lockPath, lease);
        continue;
      }
      return { lockPath, lease };
    } catch (error) {
      releaseGoalLock(lockPath, lease);
      throw error;
    }
  }
  let holder: GoalLockHolder | null = null;
  try { holder = readGoalLock(lockPath).holder; } catch (error) { if (!isMissingRace(error)) throw error; }
  throw new GoalHarnessError("GOAL_LOCKED", `Goal is locked by another operation: ${operation}`, { lock_path: lockPath, holder });
}

function publishGoalLock({ stateDir, lockPath, lease, faultInjector }: {stateDir: string; lockPath: string; lease: Buffer; faultInjector: GoalLockFaultInjector}): boolean {
  const stagePath = path.join(stateDir, `.goal-lock-acquire-${randomUUID()}.tmp`);
  let descriptor: number | undefined;
  let linked = false;
  try {
    descriptor = openSync(stagePath, fsConstants.O_WRONLY | fsConstants.O_CREAT | fsConstants.O_EXCL | fsConstants.O_NOFOLLOW, 0o600);
    faultInjector("before_goal_lock_stage_write", { lock_path: lockPath, stage_path: stagePath });
    writeAll(descriptor, lease);
    faultInjector("after_goal_lock_stage_write", { lock_path: lockPath, stage_path: stagePath });
    faultInjector("before_goal_lock_stage_fsync", { lock_path: lockPath, stage_path: stagePath });
    fsyncSync(descriptor);
    faultInjector("after_goal_lock_stage_fsync", { lock_path: lockPath, stage_path: stagePath });
    fsyncDirectory(stateDir);
    faultInjector("before_goal_lock_publish_link", { lock_path: lockPath, stage_path: stagePath });
    try {
      linkSync(stagePath, lockPath);
      linked = true;
    } catch (error) {
      if (errorCode(error) === "EEXIST") return false;
      throw error;
    }
    faultInjector("after_goal_lock_publish_link", { lock_path: lockPath, stage_path: stagePath });
    fsyncDirectory(stateDir);
    return true;
  } catch (error) {
    if (linked) releaseGoalLock(lockPath, lease);
    throw error;
  } finally {
    if (descriptor !== undefined) {
      const owned = fstatSync(descriptor);
      closeSync(descriptor);
      descriptor = undefined;
      removeOwnedStage(stagePath, owned);
    }
  }
}

function writeAll(descriptor: number, bytes: Buffer, { faultInjector = null, beforePhase = null, afterPhase = null }: {faultInjector?: GoalLockFaultInjector | null; beforePhase?: string | null; afterPhase?: string | null} = {}): void {
  let offset = 0;
  while (offset < bytes.length) {
    const remaining = bytes.length - offset;
    const instruction = beforePhase && faultInjector ? faultInjector(beforePhase, { offset, remaining }) : null;
    const maxBytes = field(instruction, "max_bytes");
    const requested = typeof maxBytes === "number" && Number.isSafeInteger(maxBytes) && maxBytes > 0
      ? Math.min(remaining, maxBytes)
      : remaining;
    const written = writeSync(descriptor, bytes, offset, requested);
    if (!Number.isSafeInteger(written) || written <= 0 || written > requested) {
      throw new GoalHarnessError("GOAL_LOCKED", "Filesystem made no progress while writing a lock artifact.", { offset, requested, written });
    }
    offset += written;
    if (afterPhase && faultInjector) faultInjector(afterPhase, { offset, remaining: bytes.length - offset, written });
  }
}

function removeOwnedStage(stagePath: string, owned: Stats): void {
  const current = tryReadPathSnapshot(stagePath, "goal-lock staging file");
  if (current === null) return;
  if (current.stat.dev !== owned.dev || current.stat.ino !== owned.ino) {
    throw new GoalHarnessError("GOAL_LOCKED", "Goal-lock staging file was replaced before cleanup.", { stage_path: stagePath });
  }
  try { unlinkSync(stagePath); } catch (error) {
    if (errorCode(error) !== "ENOENT") throw lockedRace("Cannot remove goal-lock staging file.", stagePath, error);
  }
  fsyncDirectory(path.dirname(stagePath));
}

function processIsDefinitelyGone(pid: number): boolean {
  if (!Number.isSafeInteger(pid) || pid <= 0) return false;
  try {
    process.kill(pid, 0);
    return false;
  } catch (error) {
    return errorCode(error) === "ESRCH";
  }
}

function retireDeadLock({ stateDir, lockPath, existing, faultInjector }: LeaseOperation): void {
  const historyDir = path.join(stateDir, "lock-history");
  mkdirSync(historyDir, { recursive: true, mode: 0o700 });
  const digest = createHash("sha256").update(existing.bytes).digest("hex");
  const retiredDir = path.join(historyDir, `goal-lock-stale-${existing.holder.pid}-${digest}`);
  let createdDirectory = false;
  try {
    mkdirSync(retiredDir, { mode: 0o700 });
    createdDirectory = true;
  } catch (error) {
    if (errorCode(error) !== "EEXIST") throw error;
  }
  assertRetirementDirectory(retiredDir, lockPath);
  if (createdDirectory) {
    fsyncDirectory(historyDir);
    faultInjector("after_retirement_directory_created", { lock_path: lockPath, retired_dir: retiredDir });
  }
  completeStaleRetirement({ stateDir, lockPath, retiredDir, existing, faultInjector });
}

function completeStaleRetirement({ stateDir, lockPath, retiredDir, existing, faultInjector }: LeaseOperation & {retiredDir: string}): void {
  const completePath = path.join(retiredDir, "complete.json");
  if (existsSync(completePath)) {
    verifyRetirementComplete(completePath, existing.bytes);
    return;
  }
  const current = tryReadGoalLock(lockPath);
  if (current && !current.bytes.equals(existing.bytes)) {
    throw new GoalHarnessError("GOAL_LOCKED", "Goal lock was replaced before stale-lock retirement.", { lock_path: lockPath });
  }
  return withRetirementClaim(retiredDir, faultInjector, () => {
    // A preceding owner may have completed retirement while we acquired the claim.
    if (existsSync(completePath)) {
      verifyRetirementComplete(completePath, existing.bytes);
      return;
    }
    return completeOwnedStaleRetirement({ stateDir, lockPath, retiredDir, existing, faultInjector });
  });
}

function completeOwnedStaleRetirement({ stateDir, lockPath, retiredDir, existing, faultInjector }: LeaseOperation & {retiredDir: string}): void {
  cleanupLegacyRecoveryClaim(retiredDir, faultInjector);
  const retiredOwner = path.join(retiredDir, "owner.json");
  let capturedOwner = false;
  try {
    try {
      linkSync(lockPath, retiredOwner);
      capturedOwner = true;
      fsyncDirectory(retiredDir);
      faultInjector("after_stale_owner_captured", { lock_path: lockPath, retired_dir: retiredDir });
    } catch (error) {
      if (errorCode(error) === "ENOENT") {
        const captured = tryReadLeaseFile(retiredOwner, "retired stale owner");
        if (captured === null || !captured.bytes.equals(existing.bytes)) {
          throw lockedRace("Goal lock disappeared before its stale owner was captured.", lockPath, error);
        }
      } else if (errorCode(error) !== "EEXIST") {
        throw lockedRace("Cannot capture stale goal-lock owner.", retiredOwner, error);
      }
    }
    const moved = readLeaseFile(retiredOwner, "retired stale owner");
    if (!moved.bytes.equals(existing.bytes)) {
      if (capturedOwner) {
        try { unlinkSync(retiredOwner); } catch (error) { if (errorCode(error) !== "ENOENT") throw error; }
      }
      throw new GoalHarnessError("GOAL_LOCKED", "Goal lock owner changed while stale-lock retirement was in progress.", { lock_path: lockPath });
    }
    const expectedDigest = createHash("sha256").update(existing.bytes).digest("hex");
    if (!path.basename(retiredDir).endsWith(`-${existing.holder.pid}-${expectedDigest}`)) {
      throw new GoalHarnessError("GOAL_LOCKED", "Retired stale owner does not match its immutable retirement directory.", { lock_path: lockPath, retired_dir: retiredDir });
    }

    const current = tryReadGoalLock(lockPath);
    if (current === null) {
      publishRetirementComplete(retiredDir, existing.bytes, faultInjector);
      faultInjector("after_stale_retirement_completed", { lock_path: lockPath, retired_dir: retiredDir });
      return;
    }
    if (!current.bytes.equals(existing.bytes) || current.stat.dev !== moved.stat.dev || current.stat.ino !== moved.stat.ino) {
      throw new GoalHarnessError("GOAL_LOCKED", "Goal lock was replaced while stale-lock retirement was in progress.", { lock_path: lockPath });
    }
    faultInjector("before_stale_lock_unlink", { lock_path: lockPath, retired_dir: retiredDir });
    const confirmed = tryReadGoalLock(lockPath);
    if (confirmed === null) {
      publishRetirementComplete(retiredDir, existing.bytes, faultInjector);
      faultInjector("after_stale_retirement_completed", { lock_path: lockPath, retired_dir: retiredDir });
      return;
    }
    if (!confirmed.bytes.equals(existing.bytes) || confirmed.stat.dev !== moved.stat.dev || confirmed.stat.ino !== moved.stat.ino) {
      throw new GoalHarnessError("GOAL_LOCKED", "Goal lock was replaced before stale-lock removal.", { lock_path: lockPath });
    }
    try { unlinkSync(lockPath); } catch (error) {
      if (errorCode(error) !== "ENOENT") throw lockedRace("Cannot remove confirmed stale goal lock.", lockPath, error);
    }
    fsyncDirectory(stateDir);
    faultInjector("after_stale_lock_unlinked", { lock_path: lockPath, retired_dir: retiredDir });
    publishRetirementComplete(retiredDir, existing.bytes, faultInjector);
    faultInjector("after_stale_retirement_completed", { lock_path: lockPath, retired_dir: retiredDir });
  } catch (error) {
    if (errorCode(error) === "ENOENT") throw lockedRace("Goal lock changed while stale-lock retirement was in progress.", lockPath, error);
    throw error;
  }
}

// Claim slots and their release markers are immutable. A new generation is allowed
// only after the preceding owner died or durably released ownership; no unlink/CAS
// race is introduced recursively while serializing stale goal-lock removal.
function withRetirementClaim<T>(retiredDir: string, faultInjector: GoalLockFaultInjector, callback: () => T): T {
  const bytes = Buffer.from(`${JSON.stringify({ schema_version: 1, pid: process.pid, token: randomUUID(), acquired_at: new Date().toISOString() })}\n`);
  let generation = 1;
  while (Number.isSafeInteger(generation)) {
    const claimPath = path.join(retiredDir, `claim-${String(generation).padStart(12, "0")}.json`);
    const releasePath = `${claimPath}.released`;
    const existing = tryReadPathSnapshot(claimPath, "stale-retirement ownership claim");
    if (existing) {
      let holder: unknown;
      try { holder = JSON.parse(existing.bytes.toString("utf8")); } catch {
        throw new GoalHarnessError("GOAL_LOCKED", "Stale-retirement ownership claim is malformed.", { claim_path: claimPath });
      }
      if (!isTrustedRecoveryHolder(holder)) {
        throw new GoalHarnessError("GOAL_LOCKED", "Stale-retirement ownership claim is untrusted.", { claim_path: claimPath });
      }
      if (existsSync(releasePath)) {
        verifyExactFile(releasePath, retirementClaimReleaseBytes(existing.bytes), "stale-retirement ownership release");
      } else if (!processIsDefinitelyGone(holder.pid)) {
        throw new GoalHarnessError("GOAL_LOCKED", "A live process owns stale-lock retirement.", { claim_path: claimPath, holder });
      }
      generation += 1;
      continue;
    }
    if (!publishRetirementClaimArtifact(claimPath, bytes, faultInjector, true)) continue;
    try {
      return callback();
    } finally {
      const releaseBytes = retirementClaimReleaseBytes(bytes);
      if (!publishRetirementClaimArtifact(releasePath, releaseBytes, faultInjector)) {
        verifyExactFile(releasePath, releaseBytes, "stale-retirement ownership release");
      }
      faultInjector("after_retirement_claim_released", { claim_path: claimPath });
    }
  }
  throw new GoalHarnessError("GOAL_LOCKED", "Stale-retirement claim generations exhausted.");
}

function retirementClaimReleaseBytes(bytes: Buffer): Buffer {
  return Buffer.from(`${JSON.stringify({ schema_version: 1, claim_sha256: createHash("sha256").update(bytes).digest("hex") })}\n`);
}

function publishRetirementClaimArtifact(target: string, bytes: Buffer, faultInjector: GoalLockFaultInjector, claim = false): boolean {
  const stagePath = path.join(path.dirname(target), `.claim-${randomUUID()}.tmp`);
  let descriptor: number | undefined;
  try {
    descriptor = openSync(stagePath, fsConstants.O_WRONLY | fsConstants.O_CREAT | fsConstants.O_EXCL | fsConstants.O_NOFOLLOW, 0o600);
    writeAll(descriptor, bytes, claim ? { faultInjector, beforePhase: "before_retirement_claim_write_chunk", afterPhase: "after_retirement_claim_write_chunk" } : {});
    fsyncSync(descriptor);
    closeSync(descriptor);
    descriptor = undefined;
    try { linkSync(stagePath, target); } catch (error) {
      if (errorCode(error) === "EEXIST") return false;
      throw error;
    }
    fsyncDirectory(path.dirname(target));
    if (claim) faultInjector("after_retirement_claim_published", { claim_path: target });
    return true;
  } finally {
    if (descriptor !== undefined) closeSync(descriptor);
    try { unlinkSync(stagePath); } catch (error) { if (errorCode(error) !== "ENOENT") throw error; }
  }
}

function cleanupLegacyRecoveryClaim(retiredDir: string, faultInjector: GoalLockFaultInjector): void {
  const claimPath = path.join(retiredDir, "recovery.lock");
  if (!existsSync(claimPath)) return;
  faultInjector("before_legacy_recovery_claim_read", { claim_path: claimPath, retired_dir: retiredDir });
  const existing = tryReadPathSnapshot(claimPath, "legacy stale-lock recovery claim");
  if (existing === null) return;
  faultInjector("after_legacy_recovery_claim_read", { claim_path: claimPath, retired_dir: retiredDir });
  let holder: unknown = null;
  try { holder = JSON.parse(existing.bytes.toString("utf8")); } catch { /* quarantined as a torn legacy publication */ }
  const trusted = isTrustedRecoveryHolder(holder);
  if (isTrustedRecoveryHolder(holder) && !processIsDefinitelyGone(holder.pid)) {
    throw new GoalHarnessError("GOAL_LOCKED", "A live legacy stale-lock recovery claim still exists.", { claim_path: claimPath, holder });
  }
  const digest = createHash("sha256").update(existing.bytes).digest("hex");
  const archivePath = path.join(retiredDir, trusted ? `recovery-dead-${digest}.json` : `recovery-torn-${digest}.bin`);
  try {
    linkSync(claimPath, archivePath);
    fsyncDirectory(retiredDir);
  } catch (error) {
    if (errorCode(error) === "ENOENT") return;
    if (errorCode(error) !== "EEXIST") throw lockedRace("Cannot capture legacy recovery claim.", claimPath, error);
  }
  const archive = readPathSnapshot(archivePath, "captured legacy recovery claim");
  if (!archive.bytes.equals(existing.bytes)) {
    throw new GoalHarnessError("GOAL_LOCKED", "Captured legacy recovery claim was substituted.", { claim_path: claimPath, archive_path: archivePath });
  }
  faultInjector("after_legacy_recovery_claim_captured", { claim_path: claimPath, archive_path: archivePath, retired_dir: retiredDir });
  const current = tryReadPathSnapshot(claimPath, "legacy stale-lock recovery claim");
  if (current === null) return;
  if (!current.bytes.equals(existing.bytes) || current.stat.dev !== archive.stat.dev || current.stat.ino !== archive.stat.ino) {
    throw new GoalHarnessError("GOAL_LOCKED", "Legacy recovery claim changed after its dead lease was captured.", { claim_path: claimPath });
  }
  try { unlinkSync(claimPath); } catch (error) {
    if (errorCode(error) !== "ENOENT") throw lockedRace("Cannot retire legacy recovery claim.", claimPath, error);
  }
  fsyncDirectory(retiredDir);
}

function isTrustedRecoveryHolder(holder: unknown): holder is RecoveryHolder {
  if (!isRecord(holder)) return false;
  const keys = Object.keys(holder).sort();
  return JSON.stringify(keys) === JSON.stringify(["acquired_at", "pid", "schema_version", "token"].sort()) &&
    holder.schema_version === 1 && typeof holder.pid === "number" && Number.isSafeInteger(holder.pid) && holder.pid > 0 &&
    typeof holder.token === "string" && holder.token.length > 0 && typeof holder.acquired_at === "string" && Number.isFinite(Date.parse(holder.acquired_at));
}

function recoverIncompleteRetirements({ stateDir, faultInjector, allowDeadLockRecovery = true }: LockSettings & {stateDir: string}): void {
  const historyDir = path.join(stateDir, "lock-history");
  if (!existsSync(historyDir)) return;
  let names;
  try { names = readdirSync(historyDir); } catch (error) {
    if (errorCode(error) === "ENOENT") return;
    throw lockedRace("Cannot inspect stale-lock retirement history.", historyDir, error);
  }
  for (const name of names.filter((entry) => entry.startsWith("goal-lock-stale-")).sort()) {
    const retiredDir = path.join(historyDir, name);
    if (isLegacyRetiredLease(retiredDir, name)) continue;
    assertRetirementDirectory(retiredDir, path.join(stateDir, "goal.lock"));
    const ownerPath = path.join(retiredDir, "owner.json");
    const owner = tryReadLeaseFile(ownerPath, "retired stale owner");
    const completePath = path.join(retiredDir, "complete.json");
    if (existsSync(completePath)) {
      if (owner === null) throw new GoalHarnessError("GOAL_LOCKED", "Completed stale-lock retirement is missing its immutable owner.", { retired_dir: retiredDir });
      verifyRetirementComplete(completePath, owner.bytes);
      continue;
    }
    if (!allowDeadLockRecovery) {
      throw new GoalHarnessError("GOAL_STALE_LOCK_FORCE_REQUIRED", "An incomplete stale-lock retirement requires explicit recovery authorization.", { retired_dir: retiredDir });
    }

    const lockPath = path.join(stateDir, "goal.lock");
    let existing = owner;
    if (existing === null) {
      existing = tryReadGoalLock(lockPath);
      if (existing === null) {
        throw new GoalHarnessError("GOAL_LOCKED", "Incomplete stale-lock retirement has neither a captured owner nor a current lock.", { retired_dir: retiredDir, lock_path: lockPath });
      }
      const digest = createHash("sha256").update(existing.bytes).digest("hex");
      if (!name.endsWith(`-${existing.holder.pid}-${digest}`) || !processIsDefinitelyGone(existing.holder.pid)) {
        throw new GoalHarnessError("GOAL_LOCKED", "Incomplete stale-lock retirement does not match the current dead lease.", { retired_dir: retiredDir, lock_path: lockPath });
      }
    } else {
      const digest = createHash("sha256").update(existing.bytes).digest("hex");
      if (!name.endsWith(`-${existing.holder.pid}-${digest}`)) {
        throw new GoalHarnessError("GOAL_LOCKED", "Captured stale-lock owner does not match its retirement directory.", { retired_dir: retiredDir });
      }
    }
    completeStaleRetirement({ stateDir, lockPath, retiredDir, existing, faultInjector });
  }
}

function hasIncompleteRetirement(stateDir: string): boolean {
  const historyDir = path.join(stateDir, "lock-history");
  if (!existsSync(historyDir)) return false;
  let names;
  try { names = readdirSync(historyDir); } catch (error) {
    if (errorCode(error) === "ENOENT") return false;
    throw lockedRace("Cannot inspect stale-lock retirement barriers.", historyDir, error);
  }
  for (const name of names.filter((entry) => entry.startsWith("goal-lock-stale-"))) {
    const retiredDir = path.join(historyDir, name);
    if (isLegacyRetiredLease(retiredDir, name)) continue;
    const owner = tryReadLeaseFile(path.join(retiredDir, "owner.json"), "retired stale owner");
    const completePath = path.join(retiredDir, "complete.json");
    if (!existsSync(completePath)) return true;
    if (owner === null) throw new GoalHarnessError("GOAL_LOCKED", "Completed stale-lock retirement is missing its immutable owner.", { retired_dir: retiredDir });
    verifyRetirementComplete(completePath, owner.bytes);
  }
  return false;
}

function isLegacyRetiredLease(filePath: string, name: string): boolean {
  const match = /^goal-lock-stale-([1-9]\d*)-([a-f0-9]{8}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{12})\.json$/u.exec(name);
  if (!match) return false;
  const stat = lstatSync(filePath);
  if (!stat.isFile() || stat.isSymbolicLink() || stat.size > 16 * 1024) {
    throw new GoalHarnessError("GOAL_LOCKED", "Legacy archived lease has an untrusted filesystem type or size.", { path: filePath });
  }
  const { holder } = readLeaseFile(filePath, "legacy archived lease");
  if (String(holder.pid) !== match[1] || holder.token !== match[2]) {
    throw new GoalHarnessError("GOAL_LOCKED", "Legacy archived lease does not match its filename identity.", { path: filePath });
  }
  // These are already-retired immutable archives, not incomplete directory transactions.
  // Recognition neither removes an archive nor changes/steals any current lease.
  return true;
}

function publishRetirementComplete(retiredDir: string, staleBytes: Buffer, faultInjector: GoalLockFaultInjector): void {
  const completePath = path.join(retiredDir, "complete.json");
  const bytes = retirementCompleteBytes(staleBytes);
  if (existsSync(completePath)) {
    verifyExactFile(completePath, bytes, "stale-lock completion marker");
    return;
  }
  const stagePath = path.join(retiredDir, `.complete-${randomUUID()}.tmp`);
  let descriptor: number | undefined;
  try {
    descriptor = openSync(stagePath, fsConstants.O_WRONLY | fsConstants.O_CREAT | fsConstants.O_EXCL | fsConstants.O_NOFOLLOW, 0o600);
    writeAll(descriptor, bytes, {
      faultInjector,
      beforePhase: "before_retirement_complete_write_chunk",
      afterPhase: "after_retirement_complete_write_chunk",
    });
    fsyncSync(descriptor);
    closeSync(descriptor);
    descriptor = undefined;
    try { linkSync(stagePath, completePath); } catch (error) {
      if (errorCode(error) !== "EEXIST") throw error;
      verifyExactFile(completePath, bytes, "stale-lock completion marker");
    }
    fsyncDirectory(retiredDir);
  } catch (error) {
    if (error instanceof GoalHarnessError) throw error;
    throw lockedRace("Cannot publish stale-lock completion marker.", completePath, error);
  } finally {
    if (descriptor !== undefined) closeSync(descriptor);
    try { unlinkSync(stagePath); } catch (error) {
      if (errorCode(error) !== "ENOENT") throw lockedRace("Cannot remove stale-lock completion staging file.", stagePath, error);
    }
  }
}

function verifyRetirementComplete(completePath: string, staleBytes: Buffer): void {
  verifyExactFile(completePath, retirementCompleteBytes(staleBytes), "stale-lock completion marker");
}

function retirementCompleteBytes(staleBytes: Buffer): Buffer {
  return Buffer.from(`${JSON.stringify({ schema_version: 1, stale_lease_sha256: createHash("sha256").update(staleBytes).digest("hex") })}\n`, "utf8");
}

function verifyExactFile(filePath: string, expected: Buffer, label: string): void {
  const actual = readPathSnapshot(filePath, label);
  if (!actual.bytes.equals(expected)) {
    throw new GoalHarnessError("GOAL_LOCKED", `${label} was substituted.`, { path: filePath });
  }
}

function assertRetirementDirectory(retiredDir: string, lockPath: string): void {
  let stat;
  try { stat = lstatSync(retiredDir); } catch (error) {
    throw lockedRace("Cannot inspect stale-lock retirement directory.", retiredDir, error);
  }
  if (!stat.isDirectory() || stat.isSymbolicLink()) {
    throw new GoalHarnessError("GOAL_LOCKED", "Stale-lock retirement claim has an untrusted filesystem type.", { lock_path: lockPath, retired_dir: retiredDir });
  }
  let entries;
  try { entries = readdirSync(retiredDir); } catch (error) {
    throw lockedRace("Cannot inspect stale-lock retirement contents.", retiredDir, error);
  }
  const trusted = /^(?:owner\.json|complete\.json|recovery\.lock|recovery-dead-[a-f0-9]{64}\.json|recovery-torn-[a-f0-9]{64}\.bin|claim-\d{12,16}\.json(?:\.released)?|\.claim-[a-f0-9-]+\.tmp|\.complete-[a-f0-9-]+\.tmp)$/u;
  if (entries.some((entry) => !trusted.test(entry))) {
    throw new GoalHarnessError("GOAL_LOCKED", "Stale-lock retirement claim has an untrusted shape.", { lock_path: lockPath, retired_dir: retiredDir });
  }
}

function readLeaseFile(filePath: string, label: string): LeaseSnapshot {
  const snapshot = readPathSnapshot(filePath, label);
  let holder: unknown;
  try { holder = JSON.parse(snapshot.bytes.toString("utf8")); } catch (error) {
    throw new GoalHarnessError("GOAL_LOCKED", `${label} contains invalid owner data.`, { path: filePath, cause: errorMessage(error) });
  }
  validateGoalLockHolder(holder, filePath, label);
  return { ...snapshot, holder };
}

function tryReadLeaseFile(filePath: string, label: string): LeaseSnapshot | null {
  try { return readLeaseFile(filePath, label); } catch (error) {
    if (isMissingRace(error)) return null;
    throw error;
  }
}

function readPathSnapshot(filePath: string, label: string): PathSnapshot {
  let descriptor: number | undefined;
  try {
    descriptor = openSync(filePath, fsConstants.O_RDONLY | fsConstants.O_NOFOLLOW);
    const stat = fstatSync(descriptor);
    if (!stat.isFile()) throw new GoalHarnessError("GOAL_LOCKED", `${label} has an untrusted filesystem type.`, { path: filePath });
    return { bytes: readFileSync(descriptor), stat };
  } catch (error) {
    if (error instanceof GoalHarnessError) throw error;
    throw lockedRace(`Cannot read ${label}.`, filePath, error);
  } finally {
    if (descriptor !== undefined) closeSync(descriptor);
  }
}

function tryReadPathSnapshot(filePath: string, label: string): PathSnapshot | null {
  try { return readPathSnapshot(filePath, label); } catch (error) {
    if (isMissingRace(error)) return null;
    throw error;
  }
}

function lockedRace(message: string, target: string, error: unknown): GoalHarnessError {
  return new GoalHarnessError("GOAL_LOCKED", message, { path: target, cause: errorCode(error) ?? errorMessage(error) });
}

function isMissingRace(error: unknown): boolean {
  return error instanceof GoalHarnessError && error.code === "GOAL_LOCKED" && error.details?.cause === "ENOENT";
}

function readGoalLock(filePath: string): LeaseSnapshot {
  return readLeaseFile(filePath, "goal lock");
}

function tryReadGoalLock(filePath: string): LeaseSnapshot | null {
  try { return readGoalLock(filePath); } catch (error) {
    if (isMissingRace(error)) return null;
    throw error;
  }
}

function validateGoalLockHolder(holder: unknown, filePath: string, label: string): asserts holder is GoalLockHolder {
  if (!isRecord(holder)) throw new GoalHarnessError("GOAL_LOCKED", `${label} owner data is not trusted.`, {lock_path: filePath});
  const keys = Object.keys(holder).sort();
  if (JSON.stringify(keys) !== JSON.stringify(["acquired_at", "operation", "pid", "schema_version", "token"].sort()) ||
      holder.schema_version !== 1 || typeof holder.pid !== "number" || !Number.isSafeInteger(holder.pid) || holder.pid < 1 ||
      typeof holder.token !== "string" || holder.token.length === 0 ||
      typeof holder.operation !== "string" || holder.operation.length === 0 ||
      typeof holder.acquired_at !== "string" || !Number.isFinite(Date.parse(holder.acquired_at))) {
    throw new GoalHarnessError("GOAL_LOCKED", `${label} owner data is not trusted.`, { lock_path: filePath });
  }
}

function releaseGoalLock(lockPath: string, lease: Buffer): void {
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

function fsyncDirectory(directory: string): void {
  const descriptor = openSync(directory, "r");
  try { fsyncSync(descriptor); } finally { closeSync(descriptor); }
}
