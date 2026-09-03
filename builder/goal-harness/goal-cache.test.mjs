import assert from "node:assert/strict";
import { mkdtempSync, readFileSync, rmSync, writeFileSync } from "node:fs";
import { tmpdir } from "node:os";
import path from "node:path";
import test from "node:test";

import { appendGoalCacheReceipt, lookupGoalCacheReceipt } from "./goal-cache.mjs";

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
