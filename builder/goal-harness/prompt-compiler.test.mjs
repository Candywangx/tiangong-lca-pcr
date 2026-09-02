import assert from "node:assert/strict";
import { mkdtempSync, rmSync, writeFileSync } from "node:fs";
import { tmpdir } from "node:os";
import path from "node:path";
import test from "node:test";

import { compileAuthorPrompt, readAuthorReportSchema } from "./prompt-compiler.mjs";

test("prompt compiler emits one-PCR context and the two-independent-source range override", () => {
  const root = mkdtempSync(path.join(tmpdir(), "tiangong-goal-prompt-"));
  try {
    const policyPath = path.join(root, "policy.txt");
    writeFileSync(policyPath, `GLOBAL POLICY ${"do not repeat ".repeat(1000)}`);
    const task = {
      cpc_code: "41111",
      product_name_en: "Pig iron",
      product_name_zh: "生铁",
      pcr_path: "library/pcrs/metal-products-machinery-and-equipment/basic-metals/pig-iron",
      queue_action: "promote_legacy",
      precheck_results: ["unmapped CPC leaf", "empty semantic scaffold"],
      official_source_seeds: [{ name: "UNSD CPC 3.0", locator: "https://example.invalid/cpc.pdf" }],
    };
    const result = compileAuthorPrompt({ task, policyPromptPath: policyPath, verifiedCommonUuids: [] });
    assert.match(result.prompt, /CPC: 41111/u);
    assert.match(result.prompt, /Pig iron/u);
    assert.match(result.prompt, /生铁/u);
    assert.match(result.prompt, /at least two mutually independent sources/iu);
    assert.match(result.prompt, /same paper.*not independent/iu);
    assert.match(result.prompt, /review_metadata\.unresolved\.inventory_flow_uuids/u);
    assert.match(result.prompt, /review_metadata\.unresolved\.range_evidence_needs/u);
    assert.equal(result.prompt.includes("GLOBAL POLICY"), false);
    assert.ok(result.prompt.length < 18_000);
    assert.match(result.policy_sha256, /^sha256:[a-f0-9]{64}$/u);
    assert.equal(readAuthorReportSchema().type, "object");
  } finally {
    rmSync(root, { recursive: true, force: true });
  }
});
