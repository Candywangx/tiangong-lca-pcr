import assert from "node:assert/strict";
import { spawnSync } from "node:child_process";
import test from "node:test";
import { main } from "./goal-prepare-report.mjs";
import { GoalHarnessError } from "../goal-harness/errors.mjs";
const run = (args) =>
  spawnSync(
    process.execPath,
    ["builder/cli/goal-prepare-report.mjs", ...args],
    { encoding: "utf8" },
  );
test("report preparation help explains draft preservation, checks and submission reference", () => {
  const r = run(["--help"]);
  assert.equal(r.status, 0);
  assert.match(r.stdout, /--draft/);
  assert.match(r.stdout, /preserves the draft/);
  assert.match(r.stdout, /independent coordinator/);
});
test("invalid prepare-report requests produce structured errors and no stdout", () => {
  for (const args of [
    ["--task", "x"],
    ["--draft", "x", "--draft", "y"],
    ["--format", "yaml"],
    ["--unknown", "x"],
  ]) {
    const r = run(args);
    assert.notEqual(r.status, 0);
    assert.equal(r.stdout, "");
    assert.equal(
      JSON.parse(r.stderr).error.code,
      "GOAL_REPORT_ARGUMENT_INVALID",
    );
  }
});

const infrastructure = { code: "GOAL_UUID_DIRECT_READ_FAILED", details: { origin: "tool_transport", failure_kind: "network", retryable: true } };
const content = { code: "GOAL_AUTHOR_PCR_INVALID", details: { origin: "harness_review", failure_kind: "author_claim", retryable: false } };
for (const [label, failure, expected] of [
  ["infrastructure", infrastructure, /service recovers/u],
  ["execution window", { code: "GOAL_REVIEW_WINDOW_EXHAUSTED", details: { origin: "harness_deadline", failure_kind: "execution_window", retryable: false } }, /next execution window/u],
  ["content", content, /Fix the reported draft or PCR findings/u],
  ["mixed content and infrastructure", { code: "GOAL_REVIEW_FAILED", details: { findings: [infrastructure, content] } }, /Fix the reported draft or PCR findings/u],
  ["measurement", { code: "GOAL_MEASUREMENT_REVIEW_REQUIRED" }, /measurement review/u],
  ["integrity", { code: "GOAL_RECEIPT_INTEGRITY_MISMATCH" }, /Pause preparation/u],
  ["unknown", { code: "UNKNOWN", message: "timeout infrastructure repair" }, /Pause preparation/u],
]) {
  test(`prepare-report CLI gives ${label} next steps without running recovery`, () => {
    let stdout = "", stderr = "", calls = 0;
    const error = new GoalHarnessError(failure.code, failure.message ?? "Synthetic preparation failure.", failure.details);
    const code = main(["--config", "synthetic.yaml", "--task", "synthetic-task", "--draft", "/synthetic/draft.json"], {
      stdout: { write(value) { stdout += value; } }, stderr: { write(value) { stderr += value; } },
    }, {
      loadGoalConfig: () => ({ project_root: "/synthetic", goal_id: "synthetic" }),
      prepareAuthorReport: () => { calls++; throw error; },
    });
    assert.equal(code, 2);
    assert.equal(stdout, "");
    assert.equal(calls, 1);
    const result = JSON.parse(stderr);
    assert.equal(result.error.code, failure.code);
    assert.deepEqual(result.error.details, error.details);
    assert.match(result.next_action, expected);
  });
}

test("human preparation failures show the same execution-window guidance", () => {
  let stderr = "";
  const code = main(["--config", "synthetic.yaml", "--task", "synthetic-task", "--draft", "/synthetic/draft.json", "--format", "human"], {
    stdout: { write() { assert.fail("Failure must keep stdout empty."); } }, stderr: { write(value) { stderr += value; } },
  }, {
    loadGoalConfig: () => ({ project_root: "/synthetic", goal_id: "synthetic" }),
    prepareAuthorReport: () => { throw new GoalHarnessError("GOAL_REVIEW_WINDOW_EXHAUSTED", "Synthetic deadline.", { failure_kind: "execution_window" }); },
  });
  assert.equal(code, 2);
  assert.match(stderr, /Next:.*next execution window/u);
});
