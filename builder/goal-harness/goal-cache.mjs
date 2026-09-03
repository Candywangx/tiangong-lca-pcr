import { appendFileSync, closeSync, existsSync, fsyncSync, mkdirSync, openSync, readFileSync, writeFileSync } from "node:fs";
import { createHash, randomUUID } from "node:crypto";
import path from "node:path";

import { GoalHarnessError } from "./errors.mjs";

const CACHE_SCHEMA_VERSION = 1;
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
}) {
  assertNamespace(namespace);
  const cacheDir = path.join(stateDir, "cache", namespace);
  mkdirSync(cacheDir, { recursive: true, mode: 0o700 });
  const key = cacheKey({ namespace, keyInput, tool, sourceFingerprint });
  const blobPath = blob === null ? null : path.join(cacheDir, `${receiptId}.blob`);
  if (blobPath) writeFileSync(blobPath, blob, { flag: "wx", mode: 0o600 });
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
  writeFileSync(receiptPath, `${JSON.stringify(receipt, null, 2)}\n`, { flag: "wx", mode: 0o600 });

  const logPath = path.join(stateDir, "cache", "events.jsonl");
  const events = readEventsSafely(logPath);
  if (events === null) throw new GoalHarnessError("GOAL_CACHE_EVENT_LOG_CORRUPT", "Goal cache event log hash chain is corrupt; cache reuse is disabled.");
  const eventUnsigned = {
    sequence: events.length + 1,
    event_id: `cache-${namespace}-${receiptId}`,
    at: receipt.created_at,
    namespace,
    cache_key: key,
    receipt_path: receiptPath,
    receipt_sha256: receipt.receipt_sha256,
    previous_hash: events.at(-1)?.hash ?? null,
  };
  const event = { ...eventUnsigned, hash: sha256(stableJson(eventUnsigned)) };
  appendDurable(logPath, `${JSON.stringify(event)}\n`);
  return { ...receipt, receipt_path: receiptPath };
}

export function lookupGoalCacheReceipt({ stateDir, namespace, keyInput, tool, sourceFingerprint }) {
  assertNamespace(namespace);
  const key = cacheKey({ namespace, keyInput, tool, sourceFingerprint });
  const events = readEventsSafely(path.join(stateDir, "cache", "events.jsonl"));
  if (!events) return null;
  const event = [...events].reverse().find((entry) => entry.namespace === namespace && entry.cache_key === key);
  if (!event || !existsSync(event.receipt_path)) return null;
  try {
    const receipt = JSON.parse(readFileSync(event.receipt_path, "utf8"));
    const { receipt_sha256: storedHash, ...unsigned } = receipt;
    if (storedHash !== sha256(stableJson(unsigned)) || storedHash !== event.receipt_sha256) return null;
    if (receipt.schema_version !== CACHE_SCHEMA_VERSION || receipt.cache_key !== key || receipt.namespace !== namespace) return null;
    if (receipt.blob_path) {
      if (!existsSync(receipt.blob_path) || sha256(readFileSync(receipt.blob_path)) !== receipt.blob_sha256) return null;
    }
    return receipt;
  } catch {
    return null;
  }
}

export function listGoalCacheReceipts({ stateDir, namespace }) {
  assertNamespace(namespace);
  const events = readEventsSafely(path.join(stateDir, "cache", "events.jsonl"));
  if (!events) return [];
  return events.filter((event) => event.namespace === namespace).flatMap((event) => {
    try {
      const receipt = JSON.parse(readFileSync(event.receipt_path, "utf8"));
      const { receipt_sha256: storedHash, ...unsigned } = receipt;
      if (storedHash !== event.receipt_sha256 || storedHash !== sha256(stableJson(unsigned))) return [];
      if (receipt.schema_version !== CACHE_SCHEMA_VERSION || receipt.namespace !== namespace) return [];
      if (receipt.blob_path && (!existsSync(receipt.blob_path) || sha256(readFileSync(receipt.blob_path)) !== receipt.blob_sha256)) return [];
      return [receipt];
    } catch {
      return [];
    }
  });
}

function readEventsSafely(logPath) {
  if (!existsSync(logPath)) return [];
  try {
    const events = readFileSync(logPath, "utf8").split("\n").filter(Boolean).map(JSON.parse);
    for (const [index, event] of events.entries()) {
      const { hash, ...unsigned } = event;
      if (event.sequence !== index + 1 || event.previous_hash !== (events[index - 1]?.hash ?? null) || hash !== sha256(stableJson(unsigned))) return null;
    }
    return events;
  } catch {
    return null;
  }
}

function appendDurable(filePath, text) {
  mkdirSync(path.dirname(filePath), { recursive: true, mode: 0o700 });
  appendFileSync(filePath, text, { mode: 0o600 });
  const descriptor = openSync(filePath, "r");
  try { fsyncSync(descriptor); } finally { closeSync(descriptor); }
}

function cacheKey(input) { return sha256(stableJson(input)); }
function assertNamespace(namespace) {
  if (!NAMESPACES.has(namespace)) throw new Error(`Unsupported Goal cache namespace: ${namespace}`);
}
function sha256(value) { return `sha256:${createHash("sha256").update(value).digest("hex")}`; }
function stableJson(value) {
  if (Array.isArray(value)) return `[${value.map(stableJson).join(",")}]`;
  if (value && typeof value === "object") return `{${Object.keys(value).sort().map((key) => `${JSON.stringify(key)}:${stableJson(value[key])}`).join(",")}}`;
  return JSON.stringify(value);
}
