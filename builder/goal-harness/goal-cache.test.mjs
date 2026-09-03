import assert from "node:assert/strict";
import { existsSync, mkdtempSync, readFileSync, readdirSync, rmSync, writeFileSync } from "node:fs";
import { tmpdir } from "node:os";
import path from "node:path";
import test from "node:test";
import { spawn } from "node:child_process";

import { appendGoalCacheReceipt, listGoalCacheReceipts, lookupGoalCacheReceipt, recoverGoalCacheEventLog } from "./goal-cache.mjs";

test("concurrent receipt writers preserve every receipt in one valid event chain", async () => {
  const stateDir = mkdtempSync(path.join(tmpdir(), "goal-cache-concurrent-"));
  const gatePath = path.join(stateDir, "start");
  const writerCount = 24;
  const moduleUrl = new URL("./goal-cache.mjs", import.meta.url).href;
  const writer = String.raw`
    import { existsSync, writeFileSync } from "node:fs";
    const [moduleUrl, stateDir, gatePath, id] = process.argv.slice(1);
    const { appendGoalCacheReceipt } = await import(moduleUrl);
    writeFileSync(stateDir + "/ready-" + id, "ready");
    const waitArray = new Int32Array(new SharedArrayBuffer(4));
    while (!existsSync(gatePath)) Atomics.wait(waitArray, 0, 0, 2);
    appendGoalCacheReceipt({
      stateDir,
      namespace: "uuid_query_receipts",
      keyInput: { query: "query-" + id },
      tool: { name: "hybrid", version: "test" },
      sourceFingerprint: "sha256:" + id.padStart(64, "0"),
      value: { candidate: id },
      receiptId: "writer-" + id,
      now: () => "2026-09-03T00:00:00.000Z",
    });
  `;
  try {
    const children = Array.from({ length: writerCount }, (_, index) => spawn(process.execPath, [
      "--input-type=module", "--eval", writer, moduleUrl, stateDir, gatePath, String(index),
    ], { stdio: ["ignore", "pipe", "pipe"] }));
    const deadline = Date.now() + 10_000;
    while (readdirSync(stateDir).filter((name) => name.startsWith("ready-")).length < writerCount) {
      assert.ok(Date.now() < deadline, "concurrent writers did not reach the start barrier");
      await new Promise((resolve) => setTimeout(resolve, 10));
    }
    writeFileSync(gatePath, "go");
    const results = await Promise.all(children.map((child) => new Promise((resolve) => {
      let stderr = "";
      child.stderr.on("data", (chunk) => { stderr += chunk; });
      child.on("exit", (code) => resolve({ code, stderr }));
    })));
    assert.deepEqual(results.filter(({ code }) => code !== 0), []);
    assert.equal(listGoalCacheReceipts({ stateDir, namespace: "uuid_query_receipts" }).length, writerCount);
    assert.equal(readFileSync(path.join(stateDir, "cache", "events.jsonl"), "utf8").trim().split("\n").length, writerCount);
  } finally {
    if (existsSync(gatePath)) rmSync(gatePath);
    rmSync(stateDir, { recursive: true, force: true });
  }
});

test("verified common UUID cache hits only for the exact input, tool, and source fingerprints", () => {
  const stateDir = mkdtempSync(path.join(tmpdir(), "goal-cache-uuid-"));
  try {
    appendGoalCacheReceipt({
      stateDir,
      namespace: "verified_common_uuids",
      keyInput: { query: "electricity", flow_type: "product" },
      tool: { name: "hybrid", version: "sha256:one" },
      sourceFingerprint: "sha256:response-one",
      value: { uuid: "11111111-1111-4111-8111-111111111111", exact: true },
      receiptId: "uuid-1",
      now: () => "2026-09-03T00:00:00.000Z",
    });
    assert.equal(lookupGoalCacheReceipt({
      stateDir,
      namespace: "verified_common_uuids",
      keyInput: { query: "electricity", flow_type: "product" },
      tool: { name: "hybrid", version: "sha256:one" },
      sourceFingerprint: "sha256:response-one",
    }).value.exact, true);
    assert.equal(lookupGoalCacheReceipt({
      stateDir,
      namespace: "verified_common_uuids",
      keyInput: { query: "electricity", flow_type: "product" },
      tool: { name: "hybrid", version: "sha256:two" },
      sourceFingerprint: "sha256:response-one",
    }), null);
  } finally {
    rmSync(stateDir, { recursive: true, force: true });
  }
});

test("source original-text cache rejects changed source fingerprints and corrupted receipts", () => {
  const stateDir = mkdtempSync(path.join(tmpdir(), "goal-cache-source-"));
  try {
    const stored = appendGoalCacheReceipt({
      stateDir,
      namespace: "source_original_text_receipts",
      keyInput: { locator: "https://example.invalid/standard.pdf" },
      tool: { name: "fetch", version: "1" },
      sourceFingerprint: "sha256:original",
      value: { content_type: "application/pdf" },
      blob: Buffer.from("original bytes"),
      receiptId: "source-1",
    });
    assert.equal(lookupGoalCacheReceipt({
      stateDir,
      namespace: "source_original_text_receipts",
      keyInput: { locator: "https://example.invalid/standard.pdf" },
      tool: { name: "fetch", version: "1" },
      sourceFingerprint: "sha256:changed",
    }), null);
    writeFileSync(stored.receipt_path, readFileSync(stored.receipt_path, "utf8").replace("application/pdf", "text/html"));
    assert.equal(lookupGoalCacheReceipt({
      stateDir,
      namespace: "source_original_text_receipts",
      keyInput: { locator: "https://example.invalid/standard.pdf" },
      tool: { name: "fetch", version: "1" },
      sourceFingerprint: "sha256:original",
    }), null);
  } finally {
    rmSync(stateDir, { recursive: true, force: true });
  }
});

test("cache recovery preserves corrupt bytes and rebuilds only verified receipt files", () => {
  const stateDir = mkdtempSync(path.join(tmpdir(), "goal-cache-recovery-"));
  try {
    const receipts = Array.from({ length: 3 }, (_, index) => appendGoalCacheReceipt({
      stateDir,
      namespace: "uuid_query_receipts",
      keyInput: { query: `recovery-${index}` },
      tool: { name: "hybrid", version: "test" },
      sourceFingerprint: `sha256:${String(index).padStart(64, "0")}`,
      value: { candidate: index },
      receiptId: `recovery-${index}`,
      now: () => `2026-09-03T00:00:0${index}.000Z`,
    }));
    const logPath = path.join(stateDir, "cache", "events.jsonl");
    const originalLog = readFileSync(logPath, "utf8");
    writeFileSync(logPath, `${originalLog}${originalLog.split("\n")[0]}\n`);
    writeFileSync(receipts[2].receipt_path, readFileSync(receipts[2].receipt_path, "utf8").replace('"candidate": 2', '"candidate": 99'));

    const result = recoverGoalCacheEventLog({ stateDir, now: () => "2026-09-03T01:00:00.000Z" });
    assert.equal(result.recovered, true);
    assert.equal(result.valid_receipts, 2);
    assert.equal(result.invalid_receipts.length, 1);
    assert.equal(readFileSync(result.backup_path, "utf8"), `${originalLog}${originalLog.split("\n")[0]}\n`);
    assert.equal(JSON.parse(readFileSync(result.manifest_path, "utf8")).corrupt_log_sha256, result.corrupt_log_sha256);
    assert.equal(listGoalCacheReceipts({ stateDir, namespace: "uuid_query_receipts" }).length, 2);

    appendGoalCacheReceipt({
      stateDir,
      namespace: "uuid_query_receipts",
      keyInput: { query: "after-recovery" },
      tool: { name: "hybrid", version: "test" },
      sourceFingerprint: `sha256:${"f".repeat(64)}`,
      value: { candidate: "after" },
      receiptId: "after-recovery",
    });
    assert.equal(listGoalCacheReceipts({ stateDir, namespace: "uuid_query_receipts" }).length, 3);
  } finally {
    rmSync(stateDir, { recursive: true, force: true });
  }
});
