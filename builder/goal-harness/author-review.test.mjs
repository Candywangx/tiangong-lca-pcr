import assert from "node:assert/strict";
import { execFileSync } from "node:child_process";
import { mkdirSync, mkdtempSync, rmSync, writeFileSync } from "node:fs";
import { tmpdir } from "node:os";
import path from "node:path";
import test from "node:test";

import { extractCompletedTurnReport, inspectAuthorCommit, runStructuredSyncDeterminism } from "./author-review.mjs";

function git(root, args) {
  return execFileSync("git", args, { cwd: root, encoding: "utf8", stdio: ["ignore", "pipe", "pipe"] }).trim();
}

function repoFixture() {
  const root = mkdtempSync(path.join(tmpdir(), "tiangong-author-review-"));
  git(root, ["init", "-q"]);
  git(root, ["config", "user.name", "Goal Test"]);
  git(root, ["config", "user.email", "goal@example.invalid"]);
  mkdirSync(path.join(root, "pcr"), { recursive: true });
  for (const file of ["manifest.yaml", "pcr.en-US.md", "pcr.zh-CN.md", "structured.yaml"]) writeFileSync(path.join(root, "pcr", file), `base ${file}\n`);
  writeFileSync(path.join(root, ".gitignore"), ".worktrees/\n");
  git(root, ["add", "."]);
  git(root, ["commit", "-qm", "base"]);
  return { root, baseline: git(root, ["rev-parse", "HEAD"]), allowed: ["manifest.yaml", "pcr.en-US.md", "pcr.zh-CN.md", "structured.yaml"].map((file) => `pcr/${file}`) };
}

test("turn report extraction requires the completed target turn and strict JSON agent message", () => {
  const report = { schema_version: 1, commit_sha: "a".repeat(40) };
  const response = { thread: { turns: [{ id: "turn-1", status: "completed", items: [{ type: "agentMessage", text: JSON.stringify(report) }] }] } };
  assert.deepEqual(extractCompletedTurnReport(response, "turn-1"), { status: "completed", report });
  assert.deepEqual(extractCompletedTurnReport({ thread: { turns: [{ id: "turn-1", status: "inProgress", items: [] }] } }, "turn-1"), { status: "inProgress", report: null });
  assert.throws(
    () => extractCompletedTurnReport({ thread: { turns: [{ id: "turn-1", status: "completed", items: [{ type: "agentMessage", text: "not json" }] }] } }, "turn-1"),
    (error) => error.code === "GOAL_AUTHOR_REPORT_PARSE_FAILED",
  );
});

test("author commit inspection derives the tree diff and rejects non-descendants", () => {
  const { root, baseline, allowed } = repoFixture();
  try {
    writeFileSync(path.join(root, allowed[0]), "changed\n");
    git(root, ["add", allowed[0]]);
    git(root, ["commit", "-qm", "author"]);
    const commit = git(root, ["rev-parse", "HEAD"]);
    const result = inspectAuthorCommit({ projectRoot: root, baselineCommit: baseline, authorCommit: commit });
    assert.deepEqual(result.changed_files, [allowed[0]]);
    assert.equal(result.is_descendant, true);
    assert.throws(
      () => inspectAuthorCommit({ projectRoot: root, baselineCommit: "f".repeat(40), authorCommit: commit }),
      (error) => error.code === "GOAL_AUTHOR_COMMIT_INVALID",
    );
  } finally {
    rmSync(root, { recursive: true, force: true });
  }
});

test("structured sync determinism uses an isolated review worktree and requires both runs clean", () => {
  const { root, baseline } = repoFixture();
  try {
    const clean = runStructuredSyncDeterminism({
      projectRoot: root,
      commit: baseline,
      pcrPath: "pcr",
      reviewRoot: path.join(root, ".worktrees/review-clean"),
      syncRunner: () => {},
    });
    assert.equal(clean.first_run_clean, true);
    assert.equal(clean.second_run_clean, true);

    assert.throws(
      () => runStructuredSyncDeterminism({
        projectRoot: root,
        commit: baseline,
        pcrPath: "pcr",
        reviewRoot: path.join(root, ".worktrees/review-dirty"),
        syncRunner: (worktree) => writeFileSync(path.join(worktree, "pcr/structured.yaml"), "changed by sync\n"),
      }),
      (error) => error.code === "GOAL_STRUCTURED_SYNC_STALE",
    );
  } finally {
    rmSync(root, { recursive: true, force: true });
  }
});
