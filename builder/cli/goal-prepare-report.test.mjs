import assert from "node:assert/strict";
import { spawnSync } from "node:child_process";
import test from "node:test";
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
