import assert from "node:assert/strict";
import { execFileSync } from "node:child_process";
import { EventEmitter } from "node:events";
import { mkdirSync, mkdtempSync, rmSync, writeFileSync } from "node:fs";
import { tmpdir } from "node:os";
import path from "node:path";
import { PassThrough } from "node:stream";
import test from "node:test";

import { CodexAppServerAdapter } from "./app-server.mjs";

function mockSpawn({ failMethod = null } = {}) {
  const requests = [];
  const child = new EventEmitter();
  child.stdin = new PassThrough();
  child.stdout = new PassThrough();
  child.stderr = new PassThrough();
  child.kill = () => child.emit("exit", 0, null);
  let buffered = "";
  child.stdin.on("data", (chunk) => {
    buffered += chunk.toString("utf8");
    while (buffered.includes("\n")) {
      const index = buffered.indexOf("\n");
      const line = buffered.slice(0, index);
      buffered = buffered.slice(index + 1);
      if (!line) continue;
      const request = JSON.parse(line);
      requests.push(request);
      if (!Object.hasOwn(request, "id")) continue;
      queueMicrotask(() => {
        if (request.method === failMethod) {
          child.stdout.write(`${JSON.stringify({ id: request.id, error: { code: -32000, message: "unsupported" } })}\n`);
          return;
        }
        const result = request.method === "initialize"
          ? { userAgent: "mock-codex/1" }
          : request.method === "thread/list"
            ? { data: [], nextCursor: null }
            : request.method === "thread/start"
              ? { thread: { id: "thread-visible-1" }, cwd: request.params.cwd, approvalPolicy: "never", approvalsReviewer: "user", model: "mock", modelProvider: "mock", sandbox: { type: "dangerFullAccess" } }
              : request.method === "turn/start"
                ? { turn: { id: "turn-1" } }
                : {};
        child.stdout.write(`${JSON.stringify({ id: request.id, result })}\n`);
      });
    }
  });
  return { child, requests };
}

function mockWebSocket() {
  const requests = [];
  const emitter = new EventEmitter();
  const socket = {
    readyState: 0,
    closed: false,
    addEventListener(name, listener, options = {}) {
      emitter[options.once ? "once" : "on"](name, listener);
    },
    send(line) {
      const request = JSON.parse(line);
      requests.push(request);
      if (!Object.hasOwn(request, "id")) return;
      const result = request.method === "initialize"
        ? { userAgent: "mock-codex/1" }
        : request.method === "thread/list"
          ? { data: [], nextCursor: null }
          : {};
      queueMicrotask(() => emitter.emit("message", { data: JSON.stringify({ id: request.id, result }) }));
    },
    close() {
      socket.closed = true;
      socket.readyState = 3;
      emitter.emit("close", { code: 1000, reason: "client close" });
    },
  };
  queueMicrotask(() => {
    socket.readyState = 1;
    emitter.emit("open", {});
  });
  return { socket, requests };
}

test("app-server adapter creates one durable visible thread bound to the author worktree", async () => {
  const mock = mockSpawn();
  const starts = [];
  const adapter = new CodexAppServerAdapter({
    spawnFactory: (command, args) => {
      starts.push({ command, args });
      return mock.child;
    },
    requestTimeoutMs: 1000,
  });
  try {
    const doctor = await adapter.doctor();
    assert.equal(doctor.ok, true);
    const task = await adapter.createAuthorTask({
      worktreePath: "/tmp/visible-author-worktree",
      title: "PCR 41111 · Pig iron",
      prompt: "Author only PCR 41111",
      outputSchema: { type: "object" },
      sandbox: "danger-full-access",
      approvalPolicy: "never",
      clientUserMessageId: "goal-task-41111-attempt-1",
      receiptStateDir: "/tmp/goal-state",
    });
    assert.deepEqual(task, { thread_id: "thread-visible-1", turn_id: "turn-1" });
    assert.deepEqual(starts[0], { command: "codex", args: ["app-server", "--stdio"] });
    const started = mock.requests.find((request) => request.method === "thread/start");
    assert.equal(started.params.cwd, "/tmp/visible-author-worktree");
    assert.equal(started.params.ephemeral, false);
    assert.deepEqual(started.params.runtimeWorkspaceRoots, ["/tmp/visible-author-worktree"]);
    assert.equal(mock.requests.some((request) => request.method === "thread/name/set"), true);
    const turn = mock.requests.find((request) => request.method === "turn/start");
    assert.equal(turn.params.threadId, "thread-visible-1");
    assert.equal(turn.params.input[0].type, "text");
    assert.equal(turn.params.outputSchema.type, "object");
    assert.deepEqual(turn.params.sandboxPolicy, {
      type: "workspaceWrite",
      writableRoots: ["/tmp/visible-author-worktree", "/tmp/goal-state"],
      networkAccess: true,
    });
  } finally {
    await adapter.close();
  }
});

test("author sandbox permits only linked-worktree Git metadata needed for commits", async () => {
  const root = mkdtempSync(path.join(tmpdir(), "tiangong-author-git-sandbox-"));
  const worktreePath = path.join(root, "author");
  const repository = path.join(root, "repo");
  mkdirSync(repository);
  execFileSync("git", ["init", "-q"], { cwd: repository });
  execFileSync("git", ["config", "user.name", "Goal Test"], { cwd: repository });
  execFileSync("git", ["config", "user.email", "goal@example.invalid"], { cwd: repository });
  writeFileSync(path.join(repository, "fixture.txt"), "fixture\n");
  execFileSync("git", ["add", "fixture.txt"], { cwd: repository });
  execFileSync("git", ["commit", "-qm", "base"], { cwd: repository });
  execFileSync("git", ["worktree", "add", "-q", "-b", "codex/test-author", worktreePath, "HEAD"], { cwd: repository });
  const mock = mockSpawn();
  const adapter = new CodexAppServerAdapter({ spawnFactory: () => mock.child, requestTimeoutMs: 1000 });
  try {
    await adapter.createAuthorTask({
      worktreePath,
      title: "PCR fixture",
      prompt: "commit fixture",
      outputSchema: { type: "object" },
      receiptStateDir: path.join(root, "goal-state"),
    });
    const turn = mock.requests.find((request) => request.method === "turn/start");
    const roots = turn.params.sandboxPolicy.writableRoots;
    const commonGit = path.join(repository, ".git");
    assert.equal(roots.includes(worktreePath), true);
    assert.equal(roots.includes(path.join(root, "goal-state")), true);
    assert.equal(roots.includes(path.join(commonGit, "objects")), true);
    assert.equal(roots.includes(path.join(commonGit, "refs/heads/codex")), true);
    assert.equal(roots.includes(path.join(commonGit, "logs/refs/heads/codex")), true);
    assert.equal(roots.includes(commonGit), false);
    assert.equal(roots.includes(path.join(commonGit, "index")), false);
    assert.equal(roots.some((entry) => entry.startsWith(path.join(commonGit, "worktrees") + path.sep)), true);
  } finally {
    await adapter.close();
    rmSync(root, { recursive: true, force: true });
  }
});

test("app-server failure is a stable fail-closed error with no hidden fallback", async () => {
  const mock = mockSpawn({ failMethod: "thread/start" });
  const adapter = new CodexAppServerAdapter({ spawnFactory: () => mock.child, requestTimeoutMs: 1000 });
  try {
    await assert.rejects(
      () => adapter.createAuthorTask({
        worktreePath: "/tmp/visible-author-worktree",
        title: "PCR failure",
        prompt: "must remain visible",
        outputSchema: { type: "object" },
      }),
      (error) => error.code === "GOAL_CODEX_VISIBLE_TASK_UNAVAILABLE" && /thread\/start/u.test(error.message),
    );
    assert.equal(mock.requests.some((request) => request.method === "thread/start"), true);
    assert.equal(mock.requests.some((request) => /exec|agent/i.test(request.method)), false);
  } finally {
    await adapter.close();
  }
});

test("repair starts a new turn without resuming an interrupted turn in the original durable thread", async () => {
  const mock = mockSpawn();
  const adapter = new CodexAppServerAdapter({ spawnFactory: () => mock.child, requestTimeoutMs: 1000 });
  try {
    const result = await adapter.startRepairTurn({
      threadId: "thread-visible-1",
      worktreePath: "/tmp/visible-author-worktree",
      prompt: "repair structured findings",
      outputSchema: { type: "object" },
      clientUserMessageId: "task-repair-1",
      receiptStateDir: "/tmp/goal-state",
    });
    assert.equal(result.thread_id, "thread-visible-1");
    assert.equal(mock.requests.some((request) => request.method === "thread/resume"), false);
    const turn = mock.requests.find((request) => request.method === "turn/start");
    assert.equal(turn.params.threadId, "thread-visible-1");
    assert.equal(turn.params.cwd, "/tmp/visible-author-worktree");
    assert.equal(turn.params.clientUserMessageId, "task-repair-1");
    assert.deepEqual(turn.params.sandboxPolicy, {
      type: "workspaceWrite",
      writableRoots: ["/tmp/visible-author-worktree", "/tmp/goal-state"],
      networkAccess: true,
    });
  } finally {
    await adapter.close();
  }
});

test("websocket adapter closes only its client connection so a persistent Goal daemon can survive", async () => {
  const mock = mockWebSocket();
  const adapter = new CodexAppServerAdapter({
    endpoint: "ws://127.0.0.1:45123",
    webSocketFactory: () => mock.socket,
    spawnFactory: () => assert.fail("websocket transport must not spawn a stdio app-server"),
    requestTimeoutMs: 1000,
  });
  const doctor = await adapter.doctor();
  assert.equal(doctor.ok, true);
  assert.equal(mock.requests[0].method, "initialize");
  await adapter.close();
  assert.equal(mock.socket.closed, true);
});
