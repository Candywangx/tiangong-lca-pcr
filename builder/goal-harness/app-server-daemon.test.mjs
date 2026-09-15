import assert from "node:assert/strict";
import { existsSync, mkdtempSync, readFileSync, rmSync } from "node:fs";
import { tmpdir } from "node:os";
import path from "node:path";
import test from "node:test";

import { ensureGoalAppServerDaemon } from "./app-server-daemon.mjs";

test("Goal app-server daemon is persistent, loopback-only, recorded, and idempotent", async () => {
  const stateDir = mkdtempSync(path.join(tmpdir(), "tiangong-goal-daemon-"));
  const starts = [];
  try {
    const options = {
      stateDir,
      command: "codex",
      environment: { PATH: process.env.PATH },
      portAllocator: async () => 45123,
      processAlive: () => true,
      readinessProbe: async () => true,
      spawnFactory: (command, args, spawnOptions) => {
        starts.push({ command, args, spawnOptions });
        return { pid: 4242, unref() {} };
      },
    };
    const first = await ensureGoalAppServerDaemon(options);
    const second = await ensureGoalAppServerDaemon(options);
    assert.equal(first.endpoint, "ws://127.0.0.1:45123");
    assert.equal(first.pid, 4242);
    assert.equal(first.reused, false);
    assert.equal(second.reused, true);
    assert.equal(starts.length, 1);
    assert.deepEqual(starts[0].args, ["app-server", "--listen", "ws://127.0.0.1:45123"]);
    assert.equal(starts[0].spawnOptions.detached, true);
    assert.equal(existsSync(path.join(stateDir, "app-server/daemon.json")), true);
    const persisted = JSON.parse(readFileSync(path.join(stateDir, "app-server/daemon.json"), "utf8"));
    assert.equal(persisted.pid, 4242);
    assert.equal(persisted.endpoint, first.endpoint);
  } finally {
    rmSync(stateDir, { recursive: true, force: true });
  }
});

test("Goal app-server daemon fails closed when its listener never becomes ready", async () => {
  const stateDir = mkdtempSync(path.join(tmpdir(), "tiangong-goal-daemon-fail-"));
  try {
    await assert.rejects(
      () => ensureGoalAppServerDaemon({
        stateDir,
        command: "codex",
        portAllocator: async () => 45124,
        processAlive: () => true,
        readinessProbe: async () => false,
        spawnFactory: () => ({ pid: 4343, unref() {} }),
        readinessAttempts: 2,
        readinessDelayMs: 0,
      }),
      (error) => error.code === "GOAL_CODEX_VISIBLE_TASK_UNAVAILABLE" && error.details.endpoint === "ws://127.0.0.1:45124",
    );
  } finally {
    rmSync(stateDir, { recursive: true, force: true });
  }
});
