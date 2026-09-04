import assert from "node:assert/strict";
import { spawn } from "node:child_process";
import { existsSync, mkdtempSync, readFileSync, readdirSync, rmSync, writeFileSync } from "node:fs";
import { tmpdir } from "node:os";
import path from "node:path";
import { pathToFileURL } from "node:url";
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
    const archivedOwner = path.join(stateDir, "lock-history", archived[0], "owner.json");
    assert.deepEqual(JSON.parse(readFileSync(archivedOwner, "utf8")), stale);

    writeFileSync(lockPath, `${JSON.stringify({ ...stale, token: "live-token", pid: process.pid })}\n`);
    assert.throws(
      () => withGoalLock(stateDir, "integrate", () => "must not run"),
      (error) => error.code === "GOAL_LOCKED",
    );
  } finally {
    rmSync(stateDir, { recursive: true, force: true });
  }
});

test("multiple concurrent stale-lock reclaimers retire one exact owner and only one enters", async () => {
  const stateDir = mkdtempSync(path.join(tmpdir(), "goal-stale-lock-race-"));
  const lockPath = path.join(stateDir, "goal.lock");
  const stale = { schema_version: 1, token: "stale-token", pid: 2147483647, operation: "integrate", acquired_at: "2026-09-04T00:00:00.000Z" };
  try {
    writeFileSync(lockPath, `${JSON.stringify(stale)}\n`);
    const moduleUrl = pathToFileURL(path.join(process.cwd(), "builder/goal-harness/lock.mjs")).href;
    const run = () => new Promise((resolve) => {
      const source = `import { withGoalLock } from ${JSON.stringify(moduleUrl)};
try {
  const value = withGoalLock(${JSON.stringify(stateDir)}, "race", () => { Atomics.wait(new Int32Array(new SharedArrayBuffer(4)), 0, 0, 500); return "entered"; });
  process.stdout.write(JSON.stringify({ ok: true, value }));
} catch (error) {
  process.stdout.write(JSON.stringify({ ok: false, code: error.code }));
  process.exitCode = 1;
}`;
      const child = spawn(process.execPath, ["--input-type=module", "-e", source], { stdio: ["ignore", "pipe", "pipe"] });
      let stdout = "";
      child.stdout.on("data", (chunk) => { stdout += chunk; });
      child.on("close", () => resolve(JSON.parse(stdout)));
    });
    const results = await Promise.all(Array.from({ length: 8 }, () => run()));
    assert.equal(results.filter((entry) => entry.ok).length, 1);
    assert.ok(results.filter((entry) => !entry.ok).every((entry) => entry.code === "GOAL_LOCKED"));
    const archives = readdirSync(path.join(stateDir, "lock-history"));
    assert.equal(archives.length, 1);
    assert.deepEqual(JSON.parse(readFileSync(path.join(stateDir, "lock-history", archives[0], "owner.json"), "utf8")), stale);
    assert.equal(existsSync(lockPath), false);
  } finally {
    rmSync(stateDir, { recursive: true, force: true });
  }
});

test("concurrent reclaimers recover a crash after the retirement directory was created", async () => {
  const stateDir = mkdtempSync(path.join(tmpdir(), "goal-stale-lock-claim-crash-"));
  const lockPath = path.join(stateDir, "goal.lock");
  const stale = { schema_version: 1, token: "stale-token", pid: 2147483647, operation: "integrate", acquired_at: "2026-09-04T00:00:00.000Z" };
  try {
    writeFileSync(lockPath, `${JSON.stringify(stale)}\n`);
    assert.throws(
      () => withGoalLock(stateDir, "crash", () => "must not run", {
        faultInjector(phase) {
          if (phase === "after_retirement_directory_created") throw Object.assign(new Error("simulated crash"), { code: "TEST_CRASH" });
        },
      }),
      (error) => error.code === "TEST_CRASH",
    );
    const [incompleteClaim] = readdirSync(path.join(stateDir, "lock-history"));
    assert.deepEqual(readdirSync(path.join(stateDir, "lock-history", incompleteClaim)), []);
    assert.deepEqual(JSON.parse(readFileSync(lockPath, "utf8")), stale);

    const moduleUrl = pathToFileURL(path.join(process.cwd(), "builder/goal-harness/lock.mjs")).href;
    const run = () => new Promise((resolve) => {
      const source = `import { withGoalLock } from ${JSON.stringify(moduleUrl)};
try {
  const value = withGoalLock(${JSON.stringify(stateDir)}, "race", () => { Atomics.wait(new Int32Array(new SharedArrayBuffer(4)), 0, 0, 500); return "entered"; });
  process.stdout.write(JSON.stringify({ ok: true, value }));
} catch (error) {
  process.stdout.write(JSON.stringify({ ok: false, code: error.code }));
  process.exitCode = 1;
}`;
      const child = spawn(process.execPath, ["--input-type=module", "-e", source], { stdio: ["ignore", "pipe", "pipe"] });
      let stdout = "";
      child.stdout.on("data", (chunk) => { stdout += chunk; });
      child.on("close", () => resolve(JSON.parse(stdout)));
    });
    const results = await Promise.all(Array.from({ length: 8 }, () => run()));
    assert.equal(results.filter((entry) => entry.ok).length, 1);
    assert.ok(results.filter((entry) => !entry.ok).every((entry) => entry.code === "GOAL_LOCKED"));
    assert.deepEqual(JSON.parse(readFileSync(path.join(stateDir, "lock-history", incompleteClaim, "owner.json"), "utf8")), stale);
    assert.equal(existsSync(lockPath), false);
  } finally {
    rmSync(stateDir, { recursive: true, force: true });
  }
});

test("retirement never removes a replacement live lease", () => {
  const stateDir = mkdtempSync(path.join(tmpdir(), "goal-stale-lock-replaced-"));
  const lockPath = path.join(stateDir, "goal.lock");
  const stale = { schema_version: 1, token: "stale-token", pid: 2147483647, operation: "integrate", acquired_at: "2026-09-04T00:00:00.000Z" };
  const live = { ...stale, token: "live-token", pid: process.pid, acquired_at: new Date().toISOString() };
  try {
    writeFileSync(lockPath, `${JSON.stringify(stale)}\n`);
    assert.throws(
      () => withGoalLock(stateDir, "race", () => "must not run", {
        faultInjector(phase) {
          if (phase === "after_retirement_directory_created") writeFileSync(lockPath, `${JSON.stringify(live)}\n`);
        },
      }),
      (error) => error.code === "GOAL_LOCKED",
    );
    assert.deepEqual(JSON.parse(readFileSync(lockPath, "utf8")), live);
    const [retired] = readdirSync(path.join(stateDir, "lock-history"));
    assert.deepEqual(readdirSync(path.join(stateDir, "lock-history", retired)), []);
  } finally {
    rmSync(stateDir, { recursive: true, force: true });
  }
});
