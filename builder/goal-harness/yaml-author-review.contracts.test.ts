import assert from "node:assert/strict";
import { execFileSync } from "node:child_process";
import { mkdirSync, mkdtempSync, realpathSync, rmSync, writeFileSync } from "node:fs";
import { tmpdir } from "node:os";
import path from "node:path";
import test, { type TestContext } from "node:test";

import { reviewAuthorWorktree } from "./author-review.ts";

function isRecord(value: unknown): value is Record<string, unknown> {
  return value !== null && typeof value === "object" && !Array.isArray(value);
}

function record(value: unknown): Record<string, unknown> {
  assert.ok(isRecord(value), "expected an object at the review boundary");
  return value;
}

function array(value: unknown): unknown[] {
  assert.ok(Array.isArray(value), "expected an array at the review boundary");
  return value;
}

const rowIds = ["input_resin", "input_catalyst", "input_pigment", "input_solvent", "output_residue", "output_product"];
const firstExplanation = "Exact public identity remains unresolved after bounded lookup; retain this specific atomic exchange for manual identity review.";

function manifestText(ids: readonly string[] = rowIds): string {
  return [
    "id: yaml-author-review-fixture",
    "review_metadata:",
    "  unresolved:",
    "    inventory_flow_uuids:",
    ...ids.flatMap((rowId, index) => [
      `      - row_id: ${rowId}`,
      ...(index === 0 ? [
        "        explanation: Exact public identity remains unresolved after bounded lookup;",
        "          retain this specific atomic exchange for manual identity review.",
      ] : ["        explanation: Specific atomic identity requires manual review."]),
      "        reason_code: manual_review_required",
    ]),
    "",
  ].join("\n");
}

function git(root: string, args: string[]): string {
  return execFileSync("git", args, { cwd: root, encoding: "utf8", stdio: ["ignore", "pipe", "pipe"] }).trim();
}

function reviewFixture(t: TestContext, manifest: string): Record<string, unknown> {
  // macOS /var is a symlink; the production boundary correctly requires a
  // canonical real path, so canonicalize only this owned temporary fixture.
  const root = realpathSync(mkdtempSync(path.join(tmpdir(), "pcr-yaml-author-review-")));
  t.after(() => rmSync(root, { recursive: true, force: true }));
  git(root, ["init", "-q"]);
  git(root, ["config", "user.name", "YAML Author Review Test"]);
  git(root, ["config", "user.email", "yaml-author-review@example.invalid"]);
  const files = ["manifest.yaml", "pcr.en-US.md", "pcr.zh-CN.md", "structured.yaml"].map(file => `pcr/${file}`);
  mkdirSync(path.join(root, "pcr"));
  for (const file of files) writeFileSync(path.join(root, file), `baseline ${file}\n`);
  git(root, ["add", "pcr"]);
  git(root, ["commit", "-qm", "four-file baseline"]);
  const baseline = git(root, ["rev-parse", "HEAD"]);
  for (const file of files) writeFileSync(path.join(root, file), file.endsWith("manifest.yaml") ? manifest : `authored fixture ${file}\n`);
  git(root, ["add", "pcr"]);
  git(root, ["commit", "-qm", "four-file author result"]);
  const report = {
    schema_version: 1, cpc_code: "41111", product_name_en: "Fixture product", product_name_zh: "测试产品",
    pcr_path: "pcr", queue_action: "create_new", files, sources: [], hybrid_search_receipt_ids: [],
    uuid_audits: [], rejected_uuid_candidates: [],
    inventory: {
      total_rows: 6, matched_rows: 0, unresolved_rows: 6,
      unresolved: rowIds.map((row_id, index) => ({ row_id, reason_code: "manual_review_required",
        explanation: index === 0 ? firstExplanation : "Specific atomic identity requires manual review.", hybrid_search_receipt_ids: [] })),
    },
    reference_product_uuid_confirmed: false, ranges: [],
    bilingual: { aligned: true, en_inventory_rows: 6, zh_inventory_rows: 6 },
    structured_sync: { first_run_ok: true, second_run_clean: true, schema_valid: true },
    // This test isolates YAML accounting, not methodology approval. Make the
    // synthetic report explicitly invalid and prove the real gate evaluates it.
    validate: { ok: false, exit_code: 1, known_shared_artifact_only: false, summary: "Synthetic fixture is not methodology evidence." },
    complexity_justification: null, cartesian_expansion_review: null, methodology_necessity_approved: null,
    commit_sha: git(root, ["rev-parse", "HEAD"]), unresolved_issues: ["Synthetic fixture only."],
  };
  const options = {
    projectRoot: root, baselineCommit: baseline, worktreePath: root,
    task: { id: "yaml-review-task", goal_id: "yaml-review-goal", pcr_path: "pcr", cpc_code: "41111", allowed_files: files, authoring_contract_version: 2 },
    report,
    inspectFn: () => ({ problems: [], warnings: [], measurement: { status: "pass" } }),
    parseMarkdownFn: () => ({ processInventory: [{ id: "fixture_process", inputs: { product: rowIds.map((row_id, index) => ({ row_id, name: `测试化合物 ${index + 1}`, uuid: "", amount: { ranges: [] } })) } }], referenceFlows: [] }),
    syncFn: () => ({ first_run_clean: true, second_run_clean: true }),
  };
  const result = reviewAuthorWorktree(options);
  return record(result);
}

function check(result: Record<string, unknown>, id: string): Record<string, unknown> {
  const checks = array(result.checks).map(record).filter(entry => entry.check_id === id);
  assert.equal(checks.length, 1);
  return record(checks[0]);
}

function findingCodes(result: Record<string, unknown>): unknown[] {
  return array(result.findings).map(value => record(value).code);
}

test("actual author review retains six unresolved rows after a plain YAML continuation", t => {
  const result = reviewFixture(t, manifestText());
  assert.equal(check(result, "worktree_safety").status, "passed");
  assert.equal(check(result, "parse_manifest").status, "passed");
  const manifest = record(record(result.checkpoints).parse_manifest);
  const entries = array(record(record(manifest.review_metadata).unresolved).inventory_flow_uuids).map(record);
  assert.deepEqual(entries.map(entry => entry.row_id), rowIds);
  assert.equal(entries[0]?.explanation, firstExplanation);
  assert.deepEqual(record(result.quality_context).manifestUnresolved, rowIds);
  assert.equal(check(result, "quality").status, "failed");
  assert.ok(findingCodes(result).includes("AUTHOR_VALIDATE_FAILED"), "the real quality gate must run");
  assert.equal(findingCodes(result).includes("AUTHOR_REPORT_SCHEMA_INVALID"), false);
  assert.equal(findingCodes(result).includes("INVENTORY_ACCOUNTING_MISMATCH"), false);
  assert.equal(findingCodes(result).includes("MANIFEST_UNRESOLVED_MISMATCH"), false);
  assert.equal(result.valid, false, "synthetic accounting evidence cannot approve methodology");
});

test("actual author review still rejects one genuinely missing manifest row", t => {
  const result = reviewFixture(t, manifestText(rowIds.slice(0, -1)));
  assert.equal(check(result, "parse_manifest").status, "passed");
  assert.equal(check(result, "quality").status, "failed");
  const mismatch = array(result.findings).map(record).find(finding => finding.code === "MANIFEST_UNRESOLVED_MISMATCH");
  assert.ok(mismatch);
  assert.deepEqual(mismatch.manifest, rowIds.slice(0, -1).sort());
  assert.deepEqual(mismatch.report, [...rowIds].sort());
  assert.equal(result.valid, false);
});

test("duplicate YAML keys fail manifest parsing and skip dependent author quality", t => {
  const result = reviewFixture(t, `${manifestText()}id: duplicate-fixture\n`);
  assert.equal(check(result, "parse_manifest").status, "failed");
  assert.equal(record(result.checkpoints).parse_manifest, undefined);
  assert.equal(check(result, "quality").status, "skipped");
  assert.equal(check(result, "quality").reason, "parsed_pcr_unavailable");
  assert.equal(check(result, "structured_sync").status, "passed");
  assert.equal(result.subjects, null);
  assert.equal(result.quality_context, null);
  assert.equal(findingCodes(result).includes("AUTHOR_VALIDATE_FAILED"), false);
  assert.equal(findingCodes(result).includes("MANIFEST_UNRESOLVED_MISMATCH"), false);
  assert.equal(result.valid, false);
});
