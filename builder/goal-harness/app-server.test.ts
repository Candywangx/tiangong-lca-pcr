import assert from "node:assert/strict";
import { execFileSync } from "node:child_process";
import { EventEmitter } from "node:events";
import { mkdirSync, mkdtempSync, realpathSync, rmSync, writeFileSync } from "node:fs";
import { tmpdir } from "node:os";
import path from "node:path";
import { PassThrough } from "node:stream";
import test from "node:test";
import { record, array, text, jsonRecord, field } from "./domain.ts";
import type { UnknownRecord } from "./domain.ts";
interface MockRequest { id?: unknown; method: string; params: UnknownRecord }
function request(value: unknown): MockRequest {
  const message = record(value); return { ...message, method: text(message.method), params: record(message.params) };
}
function findRequest(requests: readonly MockRequest[], method: string): MockRequest { const value=requests.find(item=>item.method===method); assert.ok(value); return value; }


import { CodexAppServerAdapter, type AppServerProcess } from "./app-server.ts";

function mockSpawn({ failMethod = null, delayMethod = null, delayMs = 120 }: { failMethod?: string | null; delayMethod?: string | null; delayMs?: number } = {}) {
  const requests: MockRequest[] = [];
  const input=new PassThrough(),output=new PassThrough(),errors=new PassThrough();
  const child: AppServerProcess = Object.assign(new EventEmitter(), { stdin:input, stdout:output, stderr:errors,
    kill: () => child.emit("exit",0,null) });
  let buffered = "";
  input.on("data", (chunk: Buffer) => {
    buffered += chunk.toString("utf8");
    while (buffered.includes("\n")) {
      const index = buffered.indexOf("\n");
      const line = buffered.slice(0, index);
      buffered = buffered.slice(index + 1);
      if (!line) continue;
      const wire = request(jsonRecord(line));
      requests.push(wire);
      if (!Object.hasOwn(wire, "id")) continue;
      const schedule = wire.method === delayMethod ? (callback: () => void) => setTimeout(callback, delayMs) : queueMicrotask;
      schedule(() => {
        if (wire.method === failMethod) {
          output.write(`${JSON.stringify({ id: wire.id, error: { code: -32000, message: "unsupported" } })}\n`);
          return;
        }
        const result = wire.method === "initialize"
          ? { userAgent: "mock-codex/1" }
          : wire.method === "thread/list"
            ? { data: [], nextCursor: null }
            : wire.method === "thread/start"
              ? { thread: { id: "thread-visible-1" }, cwd: wire.params.cwd, approvalPolicy: "never", approvalsReviewer: "user", model: "mock", modelProvider: "mock", sandbox: { type: "dangerFullAccess" } }
              : wire.method === "turn/start"
                ? { turn: { id: "turn-1" } }
                : {};
        output.write(`${JSON.stringify({ id: wire.id, result })}\n`);
      });
    }
  });
  return { child, requests };
}

function mockWebSocket() {
  const requests: MockRequest[] = [];
  const emitter = new EventEmitter();
  const socket = {
    readyState: 0,
    closed: false,
    addEventListener(name: string, listener: (event: unknown) => void, options: { once?: boolean } = {}) {
      emitter[options.once ? "once" : "on"](name, listener);
    },
    send(line: string) {
      const wire = request(jsonRecord(line));
      requests.push(wire);
      if (!Object.hasOwn(wire, "id")) return;
      const result = wire.method === "initialize"
        ? { userAgent: "mock-codex/1" }
        : wire.method === "thread/list"
          ? { data: [], nextCursor: null }
          : {};
      queueMicrotask(() => emitter.emit("message", { data: JSON.stringify({ id: wire.id, result }) }));
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

test("app-server adapter creates one durable visible thread bound to the author worktree", async t => {
  const receiptStateDir=mkdtempSync(path.join(realpathSync(tmpdir()),"adapter-receipt-"));t.after(()=>rmSync(receiptStateDir,{recursive:true,force:true}));
  const mock = mockSpawn();
  const starts: { command: string; args: string[] }[] = [];
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
      additionalWorkspaceRoots: ["/tmp/shared-materials"],
      title: "PCR 41111 · Pig iron",
      prompt: "Author only PCR 41111",
      outputSchema: { type: "object" },
      sandbox: "danger-full-access",
      approvalPolicy: "never",
      model: "gpt-5.6-terra",
      reasoningEffort: "high",
      clientUserMessageId: "goal-task-41111-attempt-1",
      receiptStateDir,
    });
    assert.deepEqual(task, { thread_id: "thread-visible-1", turn_id: "turn-1" });
    assert.deepEqual(starts[0], { command: "codex", args: ["app-server", "--stdio"] });
    const started = findRequest(mock.requests, "thread/start");
    assert.equal(started.params.cwd, "/tmp/visible-author-worktree");
    assert.equal(started.params.ephemeral, false);
    assert.equal(started.params.model, "gpt-5.6-terra");
    assert.deepEqual(started.params.runtimeWorkspaceRoots, ["/tmp/visible-author-worktree", "/tmp/shared-materials"]);
    assert.equal(mock.requests.some((request) => request.method === "thread/name/set"), true);
    const turn = findRequest(mock.requests, "turn/start");
    assert.equal(turn.params.threadId, "thread-visible-1");
    assert.equal(turn.params.model, "gpt-5.6-terra");
    assert.equal(turn.params.effort, "high");
    assert.deepEqual(turn.params.runtimeWorkspaceRoots, ["/tmp/visible-author-worktree", "/tmp/shared-materials"]);
    assert.equal(record(array(turn.params.input)[0]).type, "text");
    assert.equal(record(turn.params.outputSchema).type, "object");
    assert.deepEqual(turn.params.sandboxPolicy, {
      type: "workspaceWrite",
      writableRoots: ["/tmp/visible-author-worktree", receiptStateDir, "/tmp/shared-materials"],
      networkAccess: true,
    });
  } finally {
    await adapter.close();
  }
});

test("author sandbox permits only linked-worktree Git metadata needed for commits", async () => {
  const root = mkdtempSync(path.join(realpathSync(tmpdir()), "tiangong-author-git-sandbox-"));
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
    const turn = findRequest(mock.requests, "turn/start");
    const roots = array(record(turn.params.sandboxPolicy).writableRoots);
    const commonGit = path.join(repository, ".git");
    assert.equal(roots.includes(worktreePath), true);
    assert.equal(roots.includes(path.join(root, "goal-state")), true);
    assert.equal(roots.includes(path.join(commonGit, "objects")), true);
    assert.equal(roots.includes(path.join(commonGit, "refs/heads/codex")), true);
    assert.equal(roots.includes(path.join(commonGit, "logs/refs/heads/codex")), true);
    assert.equal(roots.includes(commonGit), false);
    assert.equal(roots.includes(path.join(commonGit, "index")), false);
    assert.equal(roots.some((entry) => text(entry).startsWith(path.join(commonGit, "worktrees") + path.sep)), true);
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
      (error) => field(error, "code") === "GOAL_CODEX_VISIBLE_TASK_UNAVAILABLE" && /thread\/start/u.test(text(field(error, "message"))),
    );
    assert.equal(mock.requests.some((request) => request.method === "thread/start"), true);
    assert.equal(mock.requests.some((request) => /exec|agent/i.test(request.method)), false);
  } finally {
    await adapter.close();
  }
});

test("repair starts a new turn without resuming an interrupted turn in the original durable thread", async t => {
  const receiptStateDir=mkdtempSync(path.join(realpathSync(tmpdir()),"adapter-receipt-"));t.after(()=>rmSync(receiptStateDir,{recursive:true,force:true}));
  const mock = mockSpawn();
  const adapter = new CodexAppServerAdapter({ spawnFactory: () => mock.child, requestTimeoutMs: 1000 });
  try {
    const result = await adapter.startRepairTurn({
      threadId: "thread-visible-1",
      worktreePath: "/tmp/visible-author-worktree",
      additionalWorkspaceRoots: ["/tmp/shared-materials"],
      prompt: "repair structured findings",
      outputSchema: { type: "object" },
      model: "gpt-5.6-terra",
      reasoningEffort: "high",
      clientUserMessageId: "task-repair-1",
      receiptStateDir,
    });
    assert.equal(result.thread_id, "thread-visible-1");
    assert.equal(mock.requests.some((request) => request.method === "thread/resume"), false);
    const turn = findRequest(mock.requests, "turn/start");
    assert.equal(turn.params.threadId, "thread-visible-1");
    assert.equal(turn.params.model, "gpt-5.6-terra");
    assert.equal(turn.params.effort, "high");
    assert.deepEqual(turn.params.runtimeWorkspaceRoots, ["/tmp/visible-author-worktree", "/tmp/shared-materials"]);
    assert.equal(array(record(turn.params.sandboxPolicy).writableRoots).includes("/tmp/shared-materials"), true);
    assert.equal(turn.params.cwd, "/tmp/visible-author-worktree");
    assert.equal(turn.params.clientUserMessageId, "task-repair-1");
    assert.deepEqual(turn.params.sandboxPolicy, {
      type: "workspaceWrite",
      writableRoots: ["/tmp/visible-author-worktree", receiptStateDir, "/tmp/shared-materials"],
      networkAccess: true,
    });
  } finally {
    await adapter.close();
  }
});

test("repair reloads a durable thread once when a restarted daemon reports thread not found", async t => {
  const receiptStateDir=mkdtempSync(path.join(realpathSync(tmpdir()),"adapter-receipt-"));t.after(()=>rmSync(receiptStateDir,{recursive:true,force:true}));
  const mock = mockSpawn();
  let turnStartCount = 0;
  const calls: string[] = [];
  const adapter = new CodexAppServerAdapter({
    spawnFactory: () => mock.child,
    requestTimeoutMs: 1000,
  });
  const originalRequest = adapter.request.bind(adapter);
  adapter.request = async (method, params) => {
    calls.push(method);
    if (method === "turn/start") {
      turnStartCount += 1;
      if (turnStartCount === 1) throw new Error(`thread not found: ${params.threadId}`);
      return { turn: { id: "turn-after-daemon-reload" } };
    }
    if (method === "thread/resume") return { thread: { id: params.threadId } };
    return originalRequest(method, params);
  };
  try {
    const result = await adapter.startRepairTurn({
      threadId: "thread-visible-1",
      worktreePath: "/tmp/visible-author-worktree",
      prompt: "repair after daemon restart",
      outputSchema: { type: "object" },
      clientUserMessageId: "task-repair-daemon-reload",
      receiptStateDir,
    });
    assert.deepEqual(result, {
      thread_id: "thread-visible-1",
      turn_id: "turn-after-daemon-reload",
    });
    assert.equal(turnStartCount, 2);
    assert.deepEqual(calls.filter((method) => ["turn/start", "thread/resume"].includes(method)), [
      "turn/start",
      "thread/resume",
      "turn/start",
    ]);
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
  assert.equal(mock.requests[0]?.method, "initialize");
  await adapter.close();
  assert.equal(mock.socket.closed, true);
});

test('phase1a durable start receipt reconciles a lost turn response without starting twice',async t=>{
  const stateDir=mkdtempSync(path.join(realpathSync(tmpdir()),'start-intent-'));t.after(()=>rmSync(stateDir,{recursive:true,force:true}));
  const adapter=new CodexAppServerAdapter();adapter.connect=async()=>({});
  let starts=0;let threadStarts=0;
  adapter.request=async(method,_params)=>{
    if(method==='thread/start'){threadStarts++;return {thread:{id:'durable'}};}
    if(method==='turn/start'){starts++;throw new Error('response lost after server accepted');}
    if(method==='thread/read')return {thread:{id:'durable',cwd:'/worktree',turns:[{id:'accepted-turn',clientUserMessageId:'stable-message',items:[]}]}};
    return {};
  };
  const args={worktreePath:'/worktree',prompt:'do task',title:'PCR',clientUserMessageId:'stable-message',receiptStateDir:stateDir};
  await assert.rejects(adapter.createAuthorTask(args));
  const result=await adapter.createAuthorTask(args);
  assert.deepEqual(result,{thread_id:'durable',turn_id:'accepted-turn'});
  assert.deepEqual(await adapter.createAuthorTask(args),result);
  assert.equal(starts,1);assert.equal(threadStarts,1);
});

test('phase1a unprovable start stays held rather than retrying a thread or turn start',async t=>{
  const stateDir=mkdtempSync(path.join(realpathSync(tmpdir()),'start-unknown-'));t.after(()=>rmSync(stateDir,{recursive:true,force:true}));
  const adapter=new CodexAppServerAdapter();adapter.connect=async()=>({});let starts=0;
  adapter.request=async method=>{if(method==='thread/start'){starts++;throw new Error('unknown outcome');}return {};};
  const args={worktreePath:'/worktree',prompt:'do task',clientUserMessageId:'stable-message',receiptStateDir:stateDir};
  await assert.rejects(adapter.createAuthorTask(args));
  await assert.rejects(adapter.createAuthorTask(args),e=>field(e,'code')==='GOAL_AUTHOR_START_UNCERTAIN');
  assert.equal(starts,1);
});

for (const delayMethod of ["initialize", "thread/read"]) test(`review deadline bounds delayed ${delayMethod} without interrupting the author`, async t => {
  const mock = mockSpawn({ delayMethod });
  const adapter = new CodexAppServerAdapter({ spawnFactory: () => mock.child });
  t.after(() => adapter.close());
  const started = Date.now();
  await assert.rejects(adapter.readThread({ threadId: "durable-author", deadline: started + 25 }), error => {
    assert.equal(field(error, "code"), "GOAL_REVIEW_WINDOW_EXHAUSTED");
    assert.equal(field(field(error,"details"),"origin"), "harness_deadline");
    assert.equal(field(field(error,"details"),"failure_kind"), "execution_window");
    assert.equal(field(field(error,"details"),"retryable"), false);
    return true;
  });
  assert.ok(Date.now() - started < 100, "must use remaining review window rather than default RPC timeout");
  assert.equal(adapter.pending.size, 0);
  assert.equal(mock.requests.some(request => request.method === "turn/interrupt"), false);
  // A late response cannot leave or recreate a pending client request.
  await new Promise<void>(resolve => setTimeout(resolve, 130));
  assert.equal(adapter.pending.size, 0);
});

test("review deadline also bounds websocket connection establishment", async t => {
  const emitter = new EventEmitter();
  const requests: MockRequest[] = [];
  const socket = { readyState: 0, closed: false,
    addEventListener(name: string, listener: (event: unknown) => void, options: { once?: boolean } = {}) { emitter[options.once ? "once" : "on"](name, listener); },
    removeEventListener(name: string, listener: (event: unknown) => void) { emitter.removeListener(name, listener); },
    send(line: string) { const wire = request(jsonRecord(line)); requests.push(wire); if (wire.id) queueMicrotask(() => emitter.emit("message", { data: JSON.stringify({ id: wire.id, result: {} }) })); },
    close() { this.closed = true; this.readyState = 3; },
  };
  const opening = setTimeout(() => { socket.readyState = 1; emitter.emit("open"); }, 120);
  t.after(() => clearTimeout(opening));
  const adapter = new CodexAppServerAdapter({ endpoint: "ws://fake.invalid", webSocketFactory: () => socket });
  t.after(() => adapter.close());
  await assert.rejects(adapter.readThread({ threadId: "durable-author", deadline: Date.now() + 25 }), { code: "GOAL_REVIEW_WINDOW_EXHAUSTED" });
  assert.equal(adapter.pending.size, 0);
  assert.equal(socket.closed, true);
  assert.equal(adapter.socket, null);
  assert.deepEqual(requests, []);
});

test("request timeout override cancels its pending wait and leaves author turn untouched", async t => {
  const mock = mockSpawn({ delayMethod: "thread/read" });
  const adapter = new CodexAppServerAdapter({ spawnFactory: () => mock.child });
  t.after(() => adapter.close());
  await adapter.connect();
  const started = Date.now();
  await assert.rejects(adapter.request("thread/read", { threadId: "durable-author" }, { timeoutMs: 25 }), /Timed out waiting for thread\/read/);
  assert.ok(Date.now() - started < 100);
  assert.equal(adapter.pending.size, 0);
  assert.equal(mock.requests.some(request => request.method === "turn/interrupt"), false);
});

test("an already exhausted review deadline starts no app-server transport", async () => {
  let starts = 0;
  const adapter = new CodexAppServerAdapter({ spawnFactory: () => { starts += 1; throw new Error("must not spawn"); } });
  await assert.rejects(adapter.readThread({ threadId: "durable-author", deadline: Date.now() - 1 }), { code: "GOAL_REVIEW_WINDOW_EXHAUSTED" });
  assert.equal(starts, 0);
  assert.equal(adapter.pending.size, 0);
});
