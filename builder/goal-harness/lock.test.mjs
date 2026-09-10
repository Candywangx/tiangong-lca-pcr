import assert from "node:assert/strict";
import { existsSync, mkdtempSync, readFileSync, readdirSync, rmSync, writeFileSync } from "node:fs";
import { tmpdir } from "node:os";
import path from "node:path";
import test from "node:test";

import { withGoalLock } from "./lock.mjs";

test("a dead process lock is archived and recovered without weakening live lock exclusion", () => {
  const stateDir = mkdtempSync(path.join(tmpdir(), "goal-stale-lock-"));
  const lockPath = path.join(stateDir, "goal.lock");
  const stale = { schema_version: 1, token: "stale-token", pid: 2147483647, operation: "integrate", acquired_at: "2026-09-04T00:00:00.000Z" };
  try {
    writeFileSync(lockPath, `${JSON.stringify(stale)}\n`);
    assert.equal(withGoalLock(stateDir, "integrate", () => "recovered"), "recovered");
    assert.equal(existsSync(lockPath), false);
    const archived = readdirSync(path.join(stateDir, "lock-history"));
    assert.equal(archived.length, 1);
    assert.deepEqual(JSON.parse(readFileSync(path.join(stateDir, "lock-history", archived[0]), "utf8")), stale);

    writeFileSync(lockPath, `${JSON.stringify({ ...stale, token: "live-token", pid: process.pid })}\n`);
    assert.throws(
      () => withGoalLock(stateDir, "integrate", () => "must not run"),
      (error) => error.code === "GOAL_LOCKED",
    );
  } finally {
    rmSync(stateDir, { recursive: true, force: true });
  }
});
