import {
  appendFileSync, closeSync, existsSync, fsyncSync, mkdirSync, openSync, readFileSync,
  lstatSync, readdirSync, renameSync, statSync, unlinkSync, writeFileSync,
} from "node:fs";
import { createHash, randomUUID } from "node:crypto";
import path from "node:path";

import { GoalHarnessError } from "./errors.ts";

import type { BinaryLike } from "node:crypto";
import { record, text, number, jsonRecord, errorCode, field, isRecord } from "./domain.ts";
import type { UnknownRecord } from "./domain.ts";

export interface GoalCacheReceipt extends UnknownRecord {
  schema_version: number; namespace: string; receipt_id: string; cache_key: string;
  key_input: unknown; tool: unknown; source_fingerprint: unknown; value: unknown;
  blob_path?: string | null; blob_sha256?: string | null; created_at: string; receipt_sha256: string;
  receipt_path?: string;
}
interface CacheEvent extends UnknownRecord {
 sequence: number; event_id: string; at: string; namespace: string; cache_key: string;
 receipt_path: string; receipt_sha256: string; previous_hash: string|null; hash: string;
}
interface CacheIdentity { stateDir: string; namespace: string; keyInput: unknown; tool: unknown; sourceFingerprint: unknown }
export interface AppendGoalCacheReceiptOptions extends CacheIdentity { value: unknown; blob?: Buffer|string|null; receiptId?: string; now?:()=>string }
function cacheEvent(value: unknown): CacheEvent {
 const e=record(value); const previous=e.previous_hash;
 if (previous !== null && typeof previous !== "string") throw new TypeError("Invalid cache event previous hash");
 return {...e,sequence:number(e.sequence),event_id:text(e.event_id),at:text(e.at),namespace:text(e.namespace),cache_key:text(e.cache_key),receipt_path:text(e.receipt_path),receipt_sha256:text(e.receipt_sha256),previous_hash:previous,hash:text(e.hash)};
}
const CACHE_SCHEMA_VERSION = 1;
const CACHE_LOCK_TIMEOUT_MS = 30_000;
const CACHE_LOCK_POLL_MS = 10;
const CACHE_STALE_LOCK_MS = 120_000;
const NAMESPACES = new Set([
  "verified_common_uuids",
  "uuid_query_receipts",
  "source_original_text_receipts",
  "source_locator_checks",
]);

export function appendGoalCacheReceipt({
  stateDir,
  namespace,
  keyInput,
  tool,
  sourceFingerprint,
  value,
  blob = null,
  receiptId = randomUUID(),
  now = () => new Date().toISOString(),
}: AppendGoalCacheReceiptOptions) {
  assertNamespace(namespace);
  assertReceiptId(receiptId);
  return withCacheWriteLock(stateDir, "append-receipt", () => {
    const cacheDir = path.join(stateDir, "cache", namespace);
    mkdirSync(cacheDir, { recursive: true, mode: 0o700 });
    const key = cacheKey({ namespace, keyInput, tool, sourceFingerprint });
    const blobPath = blob === null ? null : path.join(cacheDir, `${receiptId}.blob`);
    if (blobPath && blob !== null) writeExclusiveDurable(blobPath, blob);
    const unsigned = {
      schema_version: CACHE_SCHEMA_VERSION,
      namespace,
      receipt_id: receiptId,
      cache_key: key,
      key_input: keyInput,
      tool,
      source_fingerprint: sourceFingerprint,
      value,
      blob_path: blobPath,
      blob_sha256: blobPath ? sha256(readFileSync(blobPath)) : null,
      created_at: now(),
    };
    const receipt = { ...unsigned, receipt_sha256: sha256(stableJson(unsigned)) };
    const receiptPath = path.join(cacheDir, `${receiptId}.json`);
    writeExclusiveDurable(receiptPath, `${JSON.stringify(receipt, null, 2)}\n`);

    const logPath = path.join(stateDir, "cache", "events.jsonl");
    let events = readEventsSafely(logPath);
    if (events === null) {
      recoverGoalCacheEventLogUnderLock({ stateDir, now });
      events = readEventsSafely(logPath);
    }
    if (events === null) throw new GoalHarnessError("GOAL_CACHE_EVENT_LOG_CORRUPT", "Goal cache event log could not be safely recovered; cache reuse is disabled.");
    if (!events.some((event) => event.receipt_path === receiptPath && event.receipt_sha256 === receipt.receipt_sha256)) {
      appendCacheEvent({ logPath, events, namespace, receipt, receiptPath });
    }
    return { ...receipt, receipt_path: receiptPath };
  });
}

export function recoverGoalCacheEventLog({ stateDir, now = () => new Date().toISOString() }: {stateDir:string;now?:()=>string}) {
  return withCacheWriteLock(stateDir, "recover-event-log", () => recoverGoalCacheEventLogUnderLock({ stateDir, now }));
}

export function lookupGoalCacheReceipt({ stateDir, namespace, keyInput, tool, sourceFingerprint }: CacheIdentity) {
  assertNamespace(namespace);
  const key = cacheKey({ namespace, keyInput, tool, sourceFingerprint });
  const events = readEventsSafely(path.join(stateDir, "cache", "events.jsonl"));
  if (!events) return null;
  const event = [...events].reverse().find((entry) => entry.namespace === namespace && entry.cache_key === key);
  if (!event) return null;
  const checked = readVerifiedReceipt({ stateDir, namespace, receiptPath: event.receipt_path, expectedHash: event.receipt_sha256 });
  return checked?.receipt.cache_key === key ? checked.receipt : null;
}

export function listGoalCacheReceipts({ stateDir, namespace }: {stateDir:string;namespace:string}) {
  assertNamespace(namespace);
  const events = readEventsSafely(path.join(stateDir, "cache", "events.jsonl"));
  if (!events) return [];
  return events.filter((event) => event.namespace === namespace).flatMap((event) => {
    const checked = readVerifiedReceipt({ stateDir, namespace, receiptPath: event.receipt_path, expectedHash: event.receipt_sha256 });
    return checked ? [checked.receipt] : [];
  });
}

function recoverGoalCacheEventLogUnderLock({ stateDir, now }: {stateDir:string;now:()=>string}) {
  const cacheRoot = path.join(stateDir, "cache");
  const logPath = path.join(cacheRoot, "events.jsonl");
  const events = readEventsSafely(logPath);
  if (events !== null) return { recovered: false, valid_receipts: events.length, invalid_receipts: [] };

  mkdirSync(path.join(cacheRoot, "recovery"), { recursive: true, mode: 0o700 });
  const corruptBytes = readFileSync(logPath);
  const corruptHash = sha256(corruptBytes);
  const stamp = now().replaceAll(":", "-");
  const suffix = `${stamp}.${corruptHash.slice(-12)}.${randomUUID()}`;
  const backupPath = path.join(cacheRoot, "recovery", `events.corrupt.${suffix}.jsonl`);
  writeExclusiveDurable(backupPath, corruptBytes);

  const valid: {receipt:GoalCacheReceipt;namespace:string;receiptPath:string}[] = [];
  const invalid: UnknownRecord[] = [];
  for (const namespace of [...NAMESPACES].sort()) {
    const namespaceDir = path.join(cacheRoot, namespace);
    if (!existsSync(namespaceDir)) continue;
    for (const name of readdirSync(namespaceDir).filter((entry) => entry.endsWith(".json")).sort()) {
      const receiptPath = path.join(namespaceDir, name);
      const checked = readVerifiedReceipt({ stateDir, namespace, receiptPath });
      if (checked) valid.push({ ...checked, namespace, receiptPath });
      else invalid.push({ namespace, receipt_path: receiptPath, reason: "receipt_or_blob_integrity_failed" });
    }
  }
  valid.sort((left, right) => (
    left.receipt.created_at.localeCompare(right.receipt.created_at)
    || left.namespace.localeCompare(right.namespace)
    || left.receipt.receipt_id.localeCompare(right.receipt.receipt_id)
  ));
  const rebuilt: CacheEvent[] = [];
  for (const item of valid) {
    const eventUnsigned = {
      sequence: rebuilt.length + 1,
      event_id: `cache-${item.namespace}-${item.receipt.receipt_id}`,
      at: item.receipt.created_at,
      namespace: item.namespace,
      cache_key: item.receipt.cache_key,
      receipt_path: item.receiptPath,
      receipt_sha256: item.receipt.receipt_sha256,
      previous_hash: rebuilt.at(-1)?.hash ?? null,
    };
    rebuilt.push({ ...eventUnsigned, hash: sha256(stableJson(eventUnsigned)) });
  }
  writeAtomic(logPath, rebuilt.map((event) => JSON.stringify(event)).join("\n") + (rebuilt.length ? "\n" : ""));
  const rebuiltBytes = readFileSync(logPath);
  const manifest = {
    schema_version: 1,
    recovered_at: now(),
    corrupt_log_path: backupPath,
    corrupt_log_sha256: corruptHash,
    rebuilt_log_path: logPath,
    rebuilt_log_sha256: sha256(rebuiltBytes),
    valid_receipts: valid.length,
    invalid_receipts: invalid,
  };
  const manifestPath = path.join(cacheRoot, "recovery", `recovery.${suffix}.json`);
  writeExclusiveDurable(manifestPath, `${JSON.stringify(manifest, null, 2)}\n`);
  return {
    recovered: true,
    valid_receipts: valid.length,
    invalid_receipts: invalid,
    backup_path: backupPath,
    manifest_path: manifestPath,
    corrupt_log_sha256: corruptHash,
    rebuilt_log_sha256: manifest.rebuilt_log_sha256,
  };
}

function appendCacheEvent({ logPath, events, namespace, receipt, receiptPath }: {logPath:string;events:CacheEvent[];namespace:string;receipt:GoalCacheReceipt;receiptPath:string}) {
  const eventUnsigned = {
    sequence: events.length + 1,
    event_id: `cache-${namespace}-${receipt.receipt_id}`,
    at: receipt.created_at,
    namespace,
    cache_key: receipt.cache_key,
    receipt_path: receiptPath,
    receipt_sha256: receipt.receipt_sha256,
    previous_hash: events.at(-1)?.hash ?? null,
  };
  const event = { ...eventUnsigned, hash: sha256(stableJson(eventUnsigned)) };
  appendDurable(logPath, `${JSON.stringify(event)}\n`);
}

function readVerifiedReceipt({ stateDir, namespace, receiptPath, expectedHash = null }: {stateDir:string;namespace:string;receiptPath:string;expectedHash?:string|null}): {receipt:GoalCacheReceipt}|null {
  try {
    const namespaceDir = path.resolve(stateDir, "cache", namespace);
    const resolvedReceiptPath = path.resolve(receiptPath);
    if (path.dirname(resolvedReceiptPath) !== namespaceDir || !resolvedReceiptPath.endsWith(".json")) return null;
    const receiptStat = lstatSync(resolvedReceiptPath);
    if (!receiptStat.isFile() || receiptStat.isSymbolicLink()) return null;
    const receipt = jsonRecord(readFileSync(resolvedReceiptPath, "utf8"));
    const { receipt_sha256: storedHash, ...unsigned } = receipt;
    if (storedHash !== sha256(stableJson(unsigned)) || (expectedHash && storedHash !== expectedHash)) return null;
    if (receipt.schema_version !== CACHE_SCHEMA_VERSION || receipt.namespace !== namespace) return null;
    if (typeof receipt.cache_key !== "string" || typeof receipt.created_at !== "string") return null;
    if (typeof receipt.receipt_id !== "string" || resolvedReceiptPath !== path.join(namespaceDir, `${receipt.receipt_id}.json`)) return null;
    if (receipt.blob_path) {
      if (typeof receipt.blob_path !== "string") return null;
      const expectedBlobPath = path.join(namespaceDir, `${receipt.receipt_id}.blob`);
      if (path.resolve(receipt.blob_path) !== expectedBlobPath || !existsSync(expectedBlobPath)) return null;
      const blobStat = lstatSync(expectedBlobPath);
      if (!blobStat.isFile() || blobStat.isSymbolicLink()) return null;
      if (sha256(readFileSync(expectedBlobPath)) !== receipt.blob_sha256) return null;
    }
    if (!isGoalCacheReceipt(receipt)) return null;
    // Keep the verified historical JSON object exactly as stored. Validation is
    // a read boundary, not a receipt projection or an implicit schema upgrade.
    return { receipt };
  } catch {
    return null;
  }
}

function withCacheWriteLock<T>(stateDir:string, operation:string, callback:()=>T):T {
  const cacheRoot = path.join(stateDir, "cache");
  mkdirSync(cacheRoot, { recursive: true, mode: 0o700 });
  const lockPath = path.join(cacheRoot, "write.lock");
  const token = randomUUID();
  const deadline = Date.now() + CACHE_LOCK_TIMEOUT_MS;
  const waiter = new Int32Array(new SharedArrayBuffer(4));
  let acquired = false;
  while (!acquired) {
    let descriptor;
    try {
      descriptor = openSync(lockPath, "wx", 0o600);
      writeFileSync(descriptor, `${JSON.stringify({ schema_version: 1, token, pid: process.pid, operation, acquired_at: new Date().toISOString() })}\n`);
      fsyncSync(descriptor);
      acquired = true;
    } catch (error) {
      if (errorCode(error) !== "EEXIST") throw error;
      quarantineStaleCacheLock(lockPath, cacheRoot);
      if (Date.now() >= deadline) {
        throw new GoalHarnessError("GOAL_CACHE_LOCK_TIMEOUT", "Timed out waiting for another cache writer; retry without changing Goal state.", {
          lock_path: lockPath,
          holder: safeLockHolder(lockPath),
        });
      }
      Atomics.wait(waiter, 0, 0, CACHE_LOCK_POLL_MS);
    } finally {
      if (descriptor !== undefined) closeSync(descriptor);
    }
  }
  try {
    return callback();
  } finally {
    const holder = safeLockHolder(lockPath);
    if (field(holder,"token") === token) unlinkSync(lockPath);
  }
}

function quarantineStaleCacheLock(lockPath:string, cacheRoot:string) {
  if (!existsSync(lockPath)) return;
  const holder = safeLockHolder(lockPath);
  let stale = false;
  if (holder && typeof holder.pid === "number" && Number.isInteger(holder.pid)) stale = !processExists(holder.pid);
  else {
    try { stale = Date.now() - statSync(lockPath).mtimeMs > CACHE_STALE_LOCK_MS; } catch { return; }
  }
  if (!stale) return;
  const recoveryDir = path.join(cacheRoot, "recovery");
  mkdirSync(recoveryDir, { recursive: true, mode: 0o700 });
  try {
    renameSync(lockPath, path.join(recoveryDir, `stale-write-lock.${Date.now()}.${randomUUID()}.json`));
  } catch (error) {
    if (errorCode(error) !== "ENOENT") throw error;
  }
}

function safeLockHolder(lockPath:string) {
  try {
    const holder = jsonRecord(readFileSync(lockPath, "utf8"));
    return { schema_version: holder.schema_version, token: holder.token, pid: holder.pid, operation: holder.operation, acquired_at: holder.acquired_at };
  } catch { return null; }
}

function processExists(pid:number) {
  try { process.kill(pid, 0); return true; } catch (error) { return errorCode(error) === "EPERM"; }
}

function readEventsSafely(logPath:string):CacheEvent[]|null {
  if (!existsSync(logPath)) return [];
  try {
    const events = readFileSync(logPath, "utf8").split("\n").filter(Boolean).map(line => cacheEvent(JSON.parse(line)));
    for (const [index, event] of events.entries()) {
      const { hash, ...unsigned } = event;
      if (event.sequence !== index + 1 || event.previous_hash !== (events[index - 1]?.hash ?? null) || hash !== sha256(stableJson(unsigned))) return null;
    }
    return events;
  } catch {
    return null;
  }
}

function appendDurable(filePath:string, text:string) {
  mkdirSync(path.dirname(filePath), { recursive: true, mode: 0o700 });
  appendFileSync(filePath, text, { mode: 0o600 });
  const descriptor = openSync(filePath, "r");
  try { fsyncSync(descriptor); } finally { closeSync(descriptor); }
}

function writeExclusiveDurable(filePath:string, bytes:Buffer|string) {
  mkdirSync(path.dirname(filePath), { recursive: true, mode: 0o700 });
  const descriptor = openSync(filePath, "wx", 0o600);
  try {
    writeFileSync(descriptor, bytes);
    fsyncSync(descriptor);
  } finally {
    closeSync(descriptor);
  }
}

function writeAtomic(filePath:string, text:string) {
  mkdirSync(path.dirname(filePath), { recursive: true, mode: 0o700 });
  const temporary = `${filePath}.tmp.${process.pid}.${randomUUID()}`;
  writeFileSync(temporary, text, { flag: "wx", mode: 0o600 });
  const descriptor = openSync(temporary, "r");
  try { fsyncSync(descriptor); } finally { closeSync(descriptor); }
  renameSync(temporary, filePath);
  const directory = openSync(path.dirname(filePath), "r");
  try { fsyncSync(directory); } finally { closeSync(directory); }
}

function cacheKey(input:unknown) { return sha256(stableJson(input)); }
function assertNamespace(namespace:string) {
  if (!NAMESPACES.has(namespace)) throw new Error(`Unsupported Goal cache namespace: ${namespace}`);
}
function assertReceiptId(receiptId:unknown) {
  if (typeof receiptId !== "string" || !/^[A-Za-z0-9][A-Za-z0-9._-]{0,199}$/.test(receiptId)) {
    throw new GoalHarnessError("GOAL_CACHE_RECEIPT_ID_INVALID", "Goal cache receipt id must be a safe filename token.");
  }
}
function sha256(value:BinaryLike|undefined) { if (value === undefined) throw new TypeError("Cache hash requires serialized bytes"); return `sha256:${createHash("sha256").update(value).digest("hex")}`; }
function stableJson(value:unknown):string|undefined {
  if (Array.isArray(value)) return `[${value.map(stableJson).join(",")}]`;
  if (value && typeof value === "object") return `{${Object.keys(value).sort().map((key) => `${JSON.stringify(key)}:${stableJson(field(value,key))}`).join(",")}}`;
  return JSON.stringify(value);
}

function isGoalCacheReceipt(value:unknown):value is GoalCacheReceipt {
 return isRecord(value) && value.schema_version === CACHE_SCHEMA_VERSION
  && ["namespace","receipt_id","cache_key","created_at","receipt_sha256"].every(key=>typeof value[key] === "string")
  && ["blob_path","blob_sha256"].every(key=>value[key] === undefined || value[key] === null || typeof value[key] === "string");
}
