import {createHash} from "node:crypto";
import {item,object} from "./fixtures/assertions.ts";
import {jsonRecord} from "./domain.ts";
import assert from "node:assert/strict";
import { existsSync, mkdtempSync, readFileSync, readdirSync, rmSync, writeFileSync } from "node:fs";
import { tmpdir } from "node:os";
import path from "node:path";
import test from "node:test";
import { spawn } from "node:child_process";

import { appendGoalCacheReceipt, listGoalCacheReceipts, lookupGoalCacheReceipt, recoverGoalCacheEventLog } from "./goal-cache.ts";

test("concurrent receipt writers preserve every receipt in one valid event chain", async () => {
  const stateDir = mkdtempSync(path.join(tmpdir(), "goal-cache-concurrent-"));
  const gatePath = path.join(stateDir, "start");
  const writerCount = 24;
  const moduleUrl = new URL("./goal-cache.ts", import.meta.url).href;
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
    const results = await Promise.all(children.map((child) => new Promise<{code:number|null;stderr:string}>((resolve) => {
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
    assert.equal(object(item(lookupGoalCacheReceipt({
      stateDir,
      namespace: "verified_common_uuids",
      keyInput: { query: "electricity", flow_type: "product" },
      tool: { name: "hybrid", version: "sha256:one" },
      sourceFingerprint: "sha256:response-one",
    })).value).exact, true);
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
    writeFileSync(item(item(receipts)[2]).receipt_path, readFileSync(item(item(receipts)[2]).receipt_path, "utf8").replace('"candidate": 2', '"candidate": 99'));

    const result = recoverGoalCacheEventLog({ stateDir, now: () => "2026-09-03T01:00:00.000Z" });
    assert.equal(result.recovered, true);
    assert.equal(result.valid_receipts, 2);
    assert.equal(result.invalid_receipts.length, 1);
    assert.equal(readFileSync(item(result.backup_path), "utf8"), `${originalLog}${originalLog.split("\n")[0]}\n`);
    assert.equal(jsonRecord(readFileSync(item(result.manifest_path), "utf8")).corrupt_log_sha256, result.corrupt_log_sha256);
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

test("verified historical receipt reads preserve omitted optional fields and stored identity", () => {
  const stateDir=mkdtempSync(path.join(tmpdir(),"goal-cache-historical-shape-"));
  try {
    const stored=appendGoalCacheReceipt({stateDir,namespace:"uuid_query_receipts",keyInput:{query:"historical"},tool:{name:"hybrid",version:"1"},sourceFingerprint:"sha256:historical",value:{candidate:"one"},receiptId:"old-one"});
    const captured=jsonRecord(readFileSync(stored.receipt_path,"utf8"));
    delete captured.blob_path;delete captured.blob_sha256;
    const {receipt_sha256:_oldHash,...unsigned}=captured;
    const canonical=(value:unknown):string|undefined=>{
      if(Array.isArray(value))return `[${value.map(canonical).join(",")}]`;
      if(value && typeof value === "object")return `{${Object.keys(value).sort().map(key=>`${JSON.stringify(key)}:${canonical(Reflect.get(value,key))}`).join(",")}}`;
      return JSON.stringify(value);
    };
    const bytes=canonical(unsigned);assert.equal(typeof bytes,"string");
    if(typeof bytes !== "string")throw new TypeError("Historical receipt bytes required");
    captured.receipt_sha256=`sha256:${createHash("sha256").update(bytes).digest("hex")}`;
    writeFileSync(stored.receipt_path,`${JSON.stringify(captured,null,2)}\n`);
    // Rebuild the append-only cache index from these exact historical bytes.
    writeFileSync(path.join(stateDir,"cache/events.jsonl"),"corrupt\n");
    recoverGoalCacheEventLog({stateDir});
    const before=readFileSync(stored.receipt_path);
    const read=item(listGoalCacheReceipts({stateDir,namespace:"uuid_query_receipts"})[0]);
    assert.deepEqual(read,captured);
    assert.equal(Object.hasOwn(read,"blob_path"),false);
    assert.equal(Object.hasOwn(read,"blob_sha256"),false);
    assert.deepEqual(readFileSync(stored.receipt_path),before);
  } finally {rmSync(stateDir,{recursive:true,force:true});}
});
