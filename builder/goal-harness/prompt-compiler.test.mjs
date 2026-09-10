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
    assert.match(result.prompt, /boundary_review.*null/u);
    assert.match(result.prompt, /semantic_boundary_unresolved/u);
    assert.match(result.prompt, /overlapping_pcr_identity/u);
    assert.match(result.prompt, /unadjudicated manual review/u);
    assert.match(result.prompt, /current HEAD/u);
    assert.match(result.prompt, /files.*exact four authorized paths/u);
    assert.match(result.prompt, /inventory.*total_rows.*matched_rows.*unresolved_rows.*0/u);
    assert.match(result.prompt, /uuid_audits.*ranges.*empty arrays/u);
    assert.match(result.prompt, /reference_product_uuid_confirmed.*false/u);
    assert.match(result.prompt, /bilingual\.aligned.*structured_sync.*false/u);
    assert.match(result.prompt, /validate\.ok.*false.*exit_code.*-1.*not run/u);
    assert.match(result.prompt, /Searches.*evidence.*claims/u);
    assert.match(result.prompt, /Missing UUIDs.*range evidence.*infrastructure outages.*not boundary-review reasons/u);
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
    assert.match(result.prompt, /base_name_zh.*empty string.*canonical English baseName/isu);
    assert.match(result.prompt, /top-level JSON array/u);
    assert.match(result.prompt, /--limit 5/u);
    assert.equal(result.prompt.includes("11111111-1111-4111-8111-111111111111"), false);
    assert.equal(result.prompt.includes("GLOBAL POLICY"), false);
    assert.ok(result.prompt.length < 18_000);
    assert.match(result.policy_sha256, /^sha256:[a-f0-9]{64}$/u);
    assert.equal(readAuthorReportSchema().type, "object");
  } finally {
    rmSync(root, { recursive: true, force: true });
  }
});

test("Codex wire schema requires nullable boundary_review and returns isolated copies", () => {
  const first = readAuthorReportSchema();
  assert.ok(first.required.includes("boundary_review"));
  assert.deepEqual(first.properties.boundary_review.type, ["object", "null"]);
  first.required.splice(first.required.indexOf("boundary_review"), 1);
  first.properties.boundary_review.properties.summary.minLength = 999;
  const second = readAuthorReportSchema();
  assert.ok(second.required.includes("boundary_review"));
  assert.equal(second.properties.boundary_review.properties.summary.minLength, 20);
});

function escapeRegExp(value) {
  return value.replace(/[.*+?^${}()|[\]\\]/gu, "\\$&");
}
