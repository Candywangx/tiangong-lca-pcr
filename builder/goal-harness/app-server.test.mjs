import assert from "node:assert/strict";
import { EventEmitter } from "node:events";
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
  } finally {
    await adapter.close();
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
