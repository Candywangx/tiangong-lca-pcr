import assert from "node:assert/strict";
import { execFileSync } from "node:child_process";
import { mkdirSync, mkdtempSync, readFileSync, rmSync, writeFileSync } from "node:fs";
import { tmpdir } from "node:os";
import path from "node:path";
import test from "node:test";

import { createSyntheticBaseline } from "./synthetic-baseline.mjs";
import { captureExpectedFiles, landFilesCas } from "./landing.mjs";
import { ensureGoalWorktree } from "./worktrees.mjs";

function git(root, args) {
  return execFileSync("git", args, { cwd: root, encoding: "utf8" }).trim();
}

function fixtureRepo() {
  const root = mkdtempSync(path.join(tmpdir(), "tiangong-goal-git-"));
  git(root, ["init", "-q"]);
  git(root, ["config", "user.name", "Goal Test"]);
  git(root, ["config", "user.email", "goal@example.invalid"]);
  mkdirSync(path.join(root, "library/pcrs/category/item"), { recursive: true });
  writeFileSync(path.join(root, ".gitignore"), ".env\nstate/\n.worktrees/\n");
  writeFileSync(path.join(root, "tracked.txt"), "base\n");
  writeFileSync(path.join(root, "library/pcrs/category/item/manifest.yaml"), "content_maturity: empty_scaffold\n");
  git(root, ["add", "."]);
  git(root, ["commit", "-qm", "base"]);
  return root;
}

test("synthetic baseline captures explicit dirty files without changing the real index, HEAD, or working tree", () => {
  const root = fixtureRepo();
  try {
    writeFileSync(path.join(root, "tracked.txt"), "dirty allowed\n");
    writeFileSync(path.join(root, "allowed-adr.md"), "allowed untracked\n");
    writeFileSync(path.join(root, ".env"), "secret=value\n");
    writeFileSync(path.join(root, "not-allowed.txt"), "must stay out\n");
    const before = {
      head: git(root, ["rev-parse", "HEAD"]),
      index: git(root, ["write-tree"]),
      status: git(root, ["status", "--short", "--untracked-files=all"]),
    };
    const result = createSyntheticBaseline({
      projectRoot: root,
      goalId: "fixture-goal",
      trackedRoots: ["tracked.txt", "library"],
      untrackedAllowlist: ["allowed-adr.md"],
      stateDir: path.join(root, "state/fixture-goal"),
    });
    assert.equal(git(root, ["show", `${result.commit}:tracked.txt`]), "dirty allowed");
    assert.equal(git(root, ["show", `${result.commit}:allowed-adr.md`]), "allowed untracked");
    assert.throws(() => git(root, ["show", `${result.commit}:.env`]));
    assert.throws(() => git(root, ["show", `${result.commit}:not-allowed.txt`]));
    assert.equal(git(root, ["rev-parse", "HEAD"]), before.head);
    assert.equal(git(root, ["write-tree"]), before.index);
    assert.equal(git(root, ["status", "--short", "--untracked-files=all"]), before.status);
    assert.equal(result.ref, "refs/tiangong-goals/fixture-goal/baseline");
    assert.equal(result.files["tracked.txt"].kind, "file");
  } finally {
    rmSync(root, { recursive: true, force: true });
  }
});

test("synthetic baseline rejects sensitive and escaping allowlist paths", () => {
  const root = fixtureRepo();
  try {
    writeFileSync(path.join(root, ".env"), "secret=value\n");
    assert.throws(
      () => createSyntheticBaseline({
        projectRoot: root,
        goalId: "bad",
        trackedRoots: ["tracked.txt"],
        untrackedAllowlist: [".env"],
        stateDir: path.join(root, "state/bad"),
      }),
      (error) => error.code === "GOAL_BASELINE_SENSITIVE_PATH",
    );
    assert.throws(
      () => createSyntheticBaseline({
        projectRoot: root,
        goalId: "bad-escape",
        trackedRoots: ["tracked.txt"],
        untrackedAllowlist: ["../outside"],
        stateDir: path.join(root, "state/bad-escape"),
      }),
      (error) => error.code === "GOAL_PATH_INVALID",
    );
  } finally {
    rmSync(root, { recursive: true, force: true });
  }
});

test("worktree creation is idempotent and isolated from the dirty primary tree", () => {
  const root = fixtureRepo();
  try {
    writeFileSync(path.join(root, "tracked.txt"), "dirty\n");
    const baseline = createSyntheticBaseline({
      projectRoot: root,
      goalId: "worktree-fixture",
      trackedRoots: ["tracked.txt", "library"],
      untrackedAllowlist: [],
      stateDir: path.join(root, "state/worktree-fixture"),
    });
    const worktreePath = path.join(root, ".worktrees/author-one");
    const first = ensureGoalWorktree({ projectRoot: root, worktreePath, commit: baseline.commit, branch: "goal/author-one" });
    const second = ensureGoalWorktree({ projectRoot: root, worktreePath, commit: baseline.commit, branch: "goal/author-one" });
    assert.equal(first.created, true);
    assert.equal(second.created, false);
    assert.equal(git(worktreePath, ["rev-parse", "HEAD"]), baseline.commit);
    assert.equal(readFileSync(path.join(worktreePath, "tracked.txt"), "utf8"), "dirty\n");
  } finally {
    rmSync(root, { recursive: true, force: true });
  }
});

test("CAS landing is idempotent and fails closed on a dirty-main conflict", () => {
  const root = fixtureRepo();
  const source = mkdtempSync(path.join(tmpdir(), "tiangong-goal-source-"));
  try {
    const relative = "library/pcrs/category/item/manifest.yaml";
    mkdirSync(path.dirname(path.join(source, relative)), { recursive: true });
    writeFileSync(path.join(source, relative), "content_maturity: authored_methodology\n");
    const expected = captureExpectedFiles(root, [relative]);
    const stateDir = path.join(root, "state/landing");
    const landed = landFilesCas({ projectRoot: root, sourceRoot: source, paths: [relative], expected, stateDir, snapshotId: "snapshot-1" });
    assert.equal(landed.status, "landed");
    assert.equal(readFileSync(path.join(root, relative), "utf8"), "content_maturity: authored_methodology\n");
    assert.equal(landFilesCas({ projectRoot: root, sourceRoot: source, paths: [relative], expected, stateDir, snapshotId: "snapshot-1" }).status, "already_landed");

    writeFileSync(path.join(source, relative), "version: second\n");
    const secondExpected = captureExpectedFiles(root, [relative]);
    writeFileSync(path.join(root, relative), "user edit\n");
    assert.throws(
      () => landFilesCas({ projectRoot: root, sourceRoot: source, paths: [relative], expected: secondExpected, stateDir, snapshotId: "snapshot-2" }),
      (error) => error.code === "GOAL_LAND_CAS_CONFLICT" && error.details.conflicts[0].path === relative,
    );
    assert.equal(readFileSync(path.join(root, relative), "utf8"), "user edit\n");
  } finally {
    rmSync(root, { recursive: true, force: true });
    rmSync(source, { recursive: true, force: true });
  }
});
