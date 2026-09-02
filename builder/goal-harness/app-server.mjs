import { spawn } from "node:child_process";
import { StringDecoder } from "node:string_decoder";

import { GoalHarnessError } from "./errors.mjs";

export class CodexAppServerAdapter {
  constructor({
    command = "codex",
    args = ["app-server", "--stdio"],
    spawnFactory = (program, programArgs, options) => spawn(program, programArgs, options),
    requestTimeoutMs = 30_000,
    environment = process.env,
  } = {}) {
    this.command = command;
    this.args = args;
    this.spawnFactory = spawnFactory;
    this.requestTimeoutMs = requestTimeoutMs;
    this.environment = environment;
    this.child = null;
    this.connected = false;
    this.nextId = 1;
    this.pending = new Map();
    this.stderr = "";
  }

  async doctor() {
    try {
      const initialize = await this.connect();
      const list = await this.request("thread/list", { limit: 1, cursor: null, archived: false });
      return { ok: true, initialize, thread_list: list };
    } catch (error) {
      throw visibleTaskError("app-server doctor", error, this.stderr);
    }
  }

  async createAuthorTask({
    worktreePath,
    title,
    prompt,
    outputSchema,
    sandbox = "danger-full-access",
    approvalPolicy = "never",
    model = null,
    clientUserMessageId = null,
    projectId = null,
  }) {
    try {
      await this.connect();
      const started = await this.request("thread/start", compact({
        cwd: worktreePath,
        runtimeWorkspaceRoots: [worktreePath],
        ephemeral: false,
        approvalPolicy,
        sandbox,
        model,
        projectId,
      }));
      const threadId = started?.thread?.id;
      if (!threadId) {
        throw new Error("thread/start returned no thread.id");
      }
      await this.request("thread/name/set", { threadId, name: title });
      const turn = await this.request("turn/start", compact({
        threadId,
        cwd: worktreePath,
        runtimeWorkspaceRoots: [worktreePath],
        input: [{ type: "text", text: prompt }],
        outputSchema,
        clientUserMessageId,
      }));
      const turnId = turn?.turn?.id;
      if (!turnId) {
        throw new Error("turn/start returned no turn.id");
      }
      return { thread_id: threadId, turn_id: turnId };
    } catch (error) {
      throw visibleTaskError("thread/start", error, this.stderr);
    }
  }

  async resumeThread({ threadId }) {
    try {
      await this.connect();
      return await this.request("thread/resume", { threadId, persistExtendedHistory: true });
    } catch (error) {
      throw visibleTaskError("thread/resume", error, this.stderr);
    }
  }

  async findProjectByRoot(projectRoot) {
    try {
      await this.connect();
      let cursor = null;
      do {
        const response = await this.request("project/list", { cursor, limit: 100 });
        const match = (response?.data ?? []).find((project) =>
          (project.roots ?? []).some((root) => root.path === projectRoot),
        );
        if (match) return match;
        cursor = response?.nextCursor ?? null;
      } while (cursor);
      return null;
    } catch (error) {
      throw visibleTaskError("project/list", error, this.stderr);
    }
  }

  async readThread({ threadId, includeTurns = true }) {
    try {
      await this.connect();
      return await this.request("thread/read", { threadId, includeTurns });
    } catch (error) {
      throw visibleTaskError("thread/read", error, this.stderr);
    }
  }

  async connect() {
    if (this.connected) {
      return this.initializeResult;
    }
    if (!this.child) {
      this.startProcess();
    }
    const result = await this.request("initialize", {
      clientInfo: { name: "tiangong-pcr-goal-harness", title: "TianGong PCR Goal Harness", version: "1.0.0" },
      capabilities: { experimentalApi: true },
    });
    this.notify("initialized", {});
    this.initializeResult = result;
    this.connected = true;
    return result;
  }

  request(method, params) {
    if (!this.child) {
      this.startProcess();
    }
    const id = this.nextId;
    this.nextId += 1;
    return new Promise((resolve, reject) => {
      const timeout = setTimeout(() => {
        this.pending.delete(id);
        reject(new Error(`Timed out waiting for ${method}`));
      }, this.requestTimeoutMs);
      this.pending.set(id, { resolve, reject, timeout, method });
      this.write({ id, method, params });
    });
  }

  notify(method, params) {
    this.write({ method, params });
  }

  async close() {
    if (!this.child) return;
    for (const pending of this.pending.values()) {
      clearTimeout(pending.timeout);
      pending.reject(new Error("Codex app-server closed"));
    }
    this.pending.clear();
    this.child.kill("SIGTERM");
    this.child = null;
    this.connected = false;
  }

  startProcess() {
    try {
      this.child = this.spawnFactory(this.command, this.args, {
        stdio: ["pipe", "pipe", "pipe"],
        env: this.environment,
      });
    } catch (error) {
      throw visibleTaskError("process start", error, this.stderr);
    }
    const stdoutDecoder = new StringDecoder("utf8");
    let stdoutBuffer = "";
    this.child.stdout.on("data", (chunk) => {
      stdoutBuffer += stdoutDecoder.write(chunk);
      while (stdoutBuffer.includes("\n")) {
        const lineEnd = stdoutBuffer.indexOf("\n");
        const line = stdoutBuffer.slice(0, lineEnd).trim();
        stdoutBuffer = stdoutBuffer.slice(lineEnd + 1);
        if (line) this.handleLine(line);
      }
    });
    this.child.stderr.on("data", (chunk) => {
      this.stderr = `${this.stderr}${chunk.toString("utf8")}`.slice(-16_384);
    });
    this.child.on("error", (error) => this.rejectPending(error));
    this.child.on("exit", (code, signal) => {
      this.rejectPending(new Error(`Codex app-server exited with code ${code ?? "null"}, signal ${signal ?? "null"}`));
      this.connected = false;
    });
  }

  handleLine(line) {
    let message;
    try {
      message = JSON.parse(line);
    } catch (error) {
      this.rejectPending(new Error(`Codex app-server emitted invalid JSON: ${error.message}`));
      return;
    }
    if (!Object.hasOwn(message, "id")) return;
    const pending = this.pending.get(message.id);
    if (!pending) return;
    clearTimeout(pending.timeout);
    this.pending.delete(message.id);
    if (message.error) {
      pending.reject(new Error(`${pending.method}: ${message.error.message ?? JSON.stringify(message.error)}`));
    } else {
      pending.resolve(message.result);
    }
  }

  rejectPending(error) {
    for (const pending of this.pending.values()) {
      clearTimeout(pending.timeout);
      pending.reject(error);
    }
    this.pending.clear();
  }

  write(message) {
    if (!this.child?.stdin?.writable) {
      throw new Error("Codex app-server stdin is unavailable");
    }
    this.child.stdin.write(`${JSON.stringify(message)}\n`);
  }
}

function visibleTaskError(operation, error, stderr) {
  if (error instanceof GoalHarnessError) return error;
  return new GoalHarnessError(
    "GOAL_CODEX_VISIBLE_TASK_UNAVAILABLE",
    `Codex visible task interface failed at ${operation}: ${error.message}`,
    { operation, stderr_tail: stderr || null, required_interface: "codex app-server thread/start with durable threads" },
  );
}

function compact(value) {
  return Object.fromEntries(Object.entries(value).filter(([, entry]) => entry !== null && entry !== undefined));
}
