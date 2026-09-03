import assert from "node:assert/strict";
import { mkdtempSync, rmSync, writeFileSync } from "node:fs";
import { tmpdir } from "node:os";
import path from "node:path";
import test from "node:test";
import { fileURLToPath } from "node:url";

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
    const result = compileAuthorPrompt({
      task: { ...task, id: "task-41111", attempt: 1 },
      policyPromptPath: policyPath,
      verifiedCommonUuids: [{
        uuid: "11111111-1111-4111-8111-111111111111",
        base_name_en: "Alternating current",
        hybrid_search: true,
      }],
      tools: {
        project_root: "/repo",
        config_path: "/goal.yaml",
        tiangong_cli_root: "/tools/tiangong-cli",
        flow_hybrid_search_root: "/tools/flow-hybrid-search",
      },
    });
    assert.match(result.prompt, /CPC: 41111/u);
    assert.match(result.prompt, /Pig iron/u);
    assert.match(result.prompt, /生铁/u);
    assert.match(result.prompt, /at least two mutually independent sources/iu);
    assert.match(result.prompt, /same paper.*not independent/iu);
    assert.match(result.prompt, /review_metadata\.unresolved\.inventory_flow_uuids/u);
    assert.match(result.prompt, /review_metadata\.unresolved\.range_evidence_needs/u);
    assert.match(result.prompt, /\/tools\/tiangong-cli/u);
    assert.match(result.prompt, /\/tools\/flow-hybrid-search/u);
    assert.match(result.prompt, /goal-uuid-search\.mjs query/u);
    const runtimeReceiptCli = fileURLToPath(new URL("../cli/goal-uuid-search.mjs", import.meta.url));
    assert.match(result.prompt, new RegExp(escapeRegExp(runtimeReceiptCli), "u"));
    assert.equal(result.prompt.includes("/repo/builder/cli/goal-uuid-search.mjs"), false);
    assert.match(result.prompt, /--env-file-if-exists/u);
    assert.match(result.prompt, /receipt/iu);
    assert.match(result.prompt, /top-level JSON array/u);
    assert.equal(result.prompt.includes("11111111-1111-4111-8111-111111111111"), false);
    assert.equal(result.prompt.includes("GLOBAL POLICY"), false);
    assert.ok(result.prompt.length < 18_000);
    assert.match(result.policy_sha256, /^sha256:[a-f0-9]{64}$/u);
    assert.equal(readAuthorReportSchema().type, "object");
  } finally {
    rmSync(root, { recursive: true, force: true });
  }
});

function escapeRegExp(value) {
  return value.replace(/[.*+?^${}()|[\]\\]/gu, "\\$&");
}
