import { createHash, randomUUID } from "node:crypto";
import { spawn, type SpawnOptions } from "node:child_process";
import { closeSync, existsSync, fsyncSync, mkdirSync, openSync, readFileSync, realpathSync, renameSync, writeFileSync } from "node:fs";
import path from "node:path";
import { homedir } from "node:os";
import { StringDecoder } from "node:string_decoder";
import type { EventEmitter } from "node:events";
import type { Readable, Writable } from "node:stream";
import { isRecord, field, record, records, text, errorMessage, json } from "./domain.ts";
import type { UnknownRecord } from "./domain.ts";

export interface AppServerProcess extends EventEmitter {
  stdin: Writable | null; stdout: Readable | null; stderr: Readable | null;
  kill(signal?: NodeJS.Signals | number): boolean;
}
export interface AppServerSocket {
  readyState: number;
  send(data: string): void; close(): void;
  addEventListener(type: string, listener: (event: unknown) => void, options?: { once?: boolean }): void;
  removeEventListener?(type: string, listener: (event: unknown) => void): void;
}
export interface VisibleAuthorTask { thread_id: string; turn_id: string }
export interface AuthorStartInput {
  worktreePath: string; additionalWorkspaceRoots?: string[]; title?: string; prompt: string;
  outputSchema?: unknown; sandbox?: string; approvalPolicy?: string;
  model?: string | null; reasoningEffort?: string | null; clientUserMessageId?: string | null;
  projectId?: string | null; receiptStateDir?: string | null; threadId?: string;
  saveStartIntent?: (patch: UnknownRecord) => void;
}
export interface AppServerOptions {
  command?: string; args?: string[]; endpoint?: string | null;
  spawnFactory?: (command: string, args: string[], options: SpawnOptions) => AppServerProcess;
  webSocketFactory?: (url: string) => AppServerSocket;
  requestTimeoutMs?: number; environment?: NodeJS.ProcessEnv; sessionsRoot?: string;
}
interface PendingRequest { resolve(value: unknown): void; reject(reason: unknown): void; timeout: ReturnType<typeof setTimeout>; method: string }
interface WaitOptions { timeoutMs?: number; deadline?: number }


import { GoalHarnessError } from "./errors.ts";
import { readRecoveredSessionTurn } from "./session-recovery.ts";

export class CodexAppServerAdapter {
  command: string; args: string[]; endpoint: string | null;
  spawnFactory: NonNullable<AppServerOptions["spawnFactory"]>;
  webSocketFactory: NonNullable<AppServerOptions["webSocketFactory"]>;
  requestTimeoutMs: number; environment: NodeJS.ProcessEnv; sessionsRoot: string;
  child: AppServerProcess | null; socket: AppServerSocket | null; connected: boolean;
  nextId: number; pending: Map<number, PendingRequest>; stderr: string; initializeResult: unknown;
  constructor({
    command = "codex",
    args = ["app-server", "--stdio"],
    endpoint = null,
    spawnFactory = (program, programArgs, options) => spawn(program, programArgs, options),
    webSocketFactory = (url) => new WebSocket(url),
    requestTimeoutMs = 30_000,
    environment = process.env,
    sessionsRoot = path.join(environment.CODEX_HOME || path.join(homedir(), ".codex"), "sessions"),
  }: AppServerOptions = {}) {
    this.command = command;
    this.args = args;
    this.endpoint = endpoint;
    this.spawnFactory = spawnFactory;
    this.webSocketFactory = webSocketFactory;
    this.requestTimeoutMs = requestTimeoutMs;
    this.environment = environment;
    this.sessionsRoot = sessionsRoot;
    this.child = null;
    this.socket = null;
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

  async createAuthorTask(input: AuthorStartInput): Promise<VisibleAuthorTask> {
    return this.withStartIntent(input, 'author', async save => this.createAuthorTaskWire({...input, saveStartIntent:save}));
  }

  async withStartIntent(input: AuthorStartInput, kind: string, start: (save: (patch: UnknownRecord) => void) => Promise<VisibleAuthorTask>): Promise<VisibleAuthorTask> {
    if (!input.receiptStateDir || !input.clientUserMessageId) return start(() => {});
    const binding = {kind,client_user_message_id:input.clientUserMessageId,worktree_path:input.worktreePath,thread_id:input.threadId ?? null,
      model:input.model ?? null,reasoning_effort:input.reasoningEffort ?? null,
      prompt_sha256:createHash('sha256').update(input.prompt ?? '').digest('hex')};
    const intentDir = path.join(input.receiptStateDir,'author-start-intents');
    mkdirSync(intentDir,{recursive:true});
    const intentPath = path.join(intentDir,`${createHash('sha256').update(input.clientUserMessageId).digest('hex')}.json`);
    let intent: UnknownRecord;
    const save = (patch: UnknownRecord): void => {
      intent = {...intent,...patch};
      const temp = `${intentPath}.${randomUUID()}.tmp`;
      writeFileSync(temp,JSON.stringify(intent),{flag:'wx',mode:0o600});
      syncPath(temp);renameSync(temp,intentPath);syncPath(intentDir);
    };
    if (existsSync(intentPath)) {
      intent=record(json(readFileSync(intentPath,'utf8')), 'author start intent');
      if (JSON.stringify(intent.binding) !== JSON.stringify(binding)) throw startUncertain('Saved author start binding changed.');
      if (intent.visible) return visibleTask(intent.visible);
      if (!intent.thread_id) throw startUncertain('Thread start outcome cannot be proved; preserve its intent for reconciliation.');
      await this.connect();
      const response = record(await this.request('thread/read',{threadId:intent.thread_id,includeTurns:true}));
      const thread = record(response.thread, 'Codex thread');
      if (thread.id !== intent.thread_id || thread.cwd !== input.worktreePath) throw startUncertain('Thread identity cannot be reconciled.');
      const matching=records(thread.turns ?? [], 'Codex turns').filter(turn=>turn.clientUserMessageId === input.clientUserMessageId
        || records(turn.items ?? [], 'Codex items').some(item=>item.type === 'userMessage' && (item.id === input.clientUserMessageId || item.clientUserMessageId === input.clientUserMessageId)));
      if (matching.length !== 1 || !matching[0]?.id) throw startUncertain('No unique turn is bound to the persisted clientUserMessageId.');
      const visible={thread_id:text(intent.thread_id, 'thread ID'),turn_id:text(matching[0]?.id, 'turn ID')};save({visible,status:'started'});return visible;
    }
    intent={schema_version:1,binding,status:'start_requested',thread_id:input.threadId ?? null,created_at:new Date().toISOString()};
    // Exclusive creation makes an unproved concurrent or crashed start fail closed.
    writeFileSync(intentPath,JSON.stringify(intent),{flag:'wx',mode:0o600});syncPath(intentPath);syncPath(intentDir);
    const visible=await start(save);save({visible,status:'started'});return visible;
  }

  async createAuthorTaskWire({
    worktreePath,
    additionalWorkspaceRoots = [],
    title,
    prompt,
    outputSchema,
    sandbox = "danger-full-access",
    approvalPolicy = "never",
    model = null,
    reasoningEffort = null,
    clientUserMessageId = null,
    projectId = null,
    receiptStateDir = null,
    saveStartIntent = () => {},
  }: AuthorStartInput): Promise<VisibleAuthorTask> {
    try {
      await this.connect();
      const started = await this.request("thread/start", compact({
        cwd: worktreePath,
        runtimeWorkspaceRoots: [...new Set([worktreePath, ...additionalWorkspaceRoots])],
        ephemeral: false,
        approvalPolicy,
        sandbox,
        model,
        projectId,
      }));
      const threadId = field(field(started, "thread"), "id");
      if (typeof threadId !== "string" || !threadId) {
        throw new Error("thread/start returned no thread.id");
      }
      saveStartIntent({thread_id:threadId,status:"thread_started"});
      await this.request("thread/name/set", { threadId, name: title });
      saveStartIntent({status:"turn_start_requested"});
      const turn = await this.request("turn/start", compact({
        threadId,
        cwd: worktreePath,
        runtimeWorkspaceRoots: [...new Set([worktreePath, ...additionalWorkspaceRoots])],
        input: [{ type: "text", text: prompt }],
        outputSchema,
        model,
        effort: reasoningEffort,
        clientUserMessageId,
        sandboxPolicy: authorSandboxPolicy(worktreePath, receiptStateDir, additionalWorkspaceRoots),
      }));
      const turnId = field(field(turn, "turn"), "id");
      if (typeof turnId !== "string" || !turnId) {
        throw new Error("turn/start returned no turn.id");
      }
      return { thread_id: threadId, turn_id: turnId };
    } catch (error) {
      throw visibleTaskError("thread/start", error, this.stderr);
    }
  }

  async resumeThread({ threadId }: { threadId: string }) {
    try {
      await this.connect();
      return await this.request("thread/resume", { threadId, persistExtendedHistory: true });
    } catch (error) {
      throw visibleTaskError("thread/resume", error, this.stderr);
    }
  }

  async startRepairTurn(input: AuthorStartInput & { threadId: string }): Promise<VisibleAuthorTask> {
    return this.withStartIntent(input,'repair',async save=>this.startRepairTurnWire({...input,saveStartIntent:save}));
  }

  async startRepairTurnWire({
    threadId,
    worktreePath,
    additionalWorkspaceRoots = [],
    prompt,
    outputSchema,
    model = null,
    reasoningEffort = null,
    clientUserMessageId = null,
    receiptStateDir = null,
    saveStartIntent = () => {},
  }: AuthorStartInput & { threadId: string }): Promise<VisibleAuthorTask> {
    try {
      await this.connect();
      const params = compact({
        threadId,
        cwd: worktreePath,
        runtimeWorkspaceRoots: [...new Set([worktreePath, ...additionalWorkspaceRoots])],
        input: [{ type: "text", text: prompt }],
        outputSchema,
        model,
        effort: reasoningEffort,
        clientUserMessageId,
        sandboxPolicy: authorSandboxPolicy(worktreePath, receiptStateDir, additionalWorkspaceRoots),
      });
      let turn;
      saveStartIntent({status:"turn_start_requested"});
      try {
        turn = await this.request("turn/start", params);
      } catch (error) {
        if (!/thread not found/iu.test(errorMessage(error))) throw error;
        await this.request("thread/resume", { threadId, persistExtendedHistory: true });
        turn = await this.request("turn/start", params);
      }
      const turnId = field(field(turn, "turn"), "id");
      if (typeof turnId !== "string" || !turnId) throw new Error("turn/start returned no turn.id");
      return { thread_id: threadId, turn_id: turnId };
    } catch (error) {
      throw visibleTaskError("repair turn/start", error, this.stderr);
    }
  }

  async findProjectByRoot(projectRoot: string): Promise<UnknownRecord | null> {
    try {
      await this.connect();
      let cursor: unknown = null;
      do {
        const response = record(await this.request("project/list", { cursor, limit: 100 }));
        const match = records(response.data ?? [], "Codex projects").find((project) =>
          records(project.roots ?? [], "project roots").some((root) => root.path === projectRoot),
        );
        if (match) return match;
        cursor = response.nextCursor ?? null;
      } while (cursor);
      return null;
    } catch (error) {
      throw visibleTaskError("project/list", error, this.stderr);
    }
  }

  async readThread({ threadId, includeTurns = true, expectedTurnId = null, worktreePath = null, deadline = Infinity }: { threadId: string; includeTurns?: boolean; expectedTurnId?: string | null; worktreePath?: string | null; deadline?: number }): Promise<UnknownRecord> {
    try {
      await this.connect({ deadline });
      const response = record(await this.request("thread/read", { threadId, includeTurns }, { deadline }));
      const thread = isRecord(response.thread) ? response.thread : null;
      if (includeTurns && expectedTurnId && worktreePath && field(thread?.status, "type") === "idle"
        && !records(thread?.turns ?? [], "Codex turns").some(turn => turn.id === expectedTurnId)) {
        if (!thread || thread.id !== threadId || thread.cwd !== worktreePath) {
          throw new GoalHarnessError("GOAL_SESSION_RECOVERY_INVALID", "Codex thread identity or worktree changed.");
        }
        const recovered = readRecoveredSessionTurn({ sessionPath: text(thread.path, "session path"),
          sessionsRoot: this.sessionsRoot, threadId, turnId: expectedTurnId, worktreePath });
        if (recovered) return { ...response, session_recovery: recovered.audit,
          thread: { ...thread, turns: [...records(thread.turns ?? [], "Codex turns"), recovered.turn] } };
      }
      return response;
    } catch (error) {
      throw visibleTaskError("thread/read", error, this.stderr);
    }
  }

  async interruptTurn({ threadId, turnId }: { threadId: string; turnId: string }) {
    try {
      await this.connect();
      return await this.request("turn/interrupt", { threadId, turnId });
    } catch (error) {
      throw visibleTaskError("turn/interrupt", error, this.stderr);
    }
  }

  async connect({ deadline = Infinity }: { deadline?: number } = {}): Promise<unknown> {
    waitBudget(this.requestTimeoutMs, deadline, "connect");
    if (this.connected) {
      return this.initializeResult;
    }
    if (!this.child && !this.socket) await this.startTransport({ deadline });
    const result = await this.request("initialize", {
      clientInfo: { name: "tiangong-pcr-goal-harness", title: "TianGong PCR Goal Harness", version: "1.0.0" },
      capabilities: { experimentalApi: true },
    }, { deadline });
    this.notify("initialized", {});
    this.initializeResult = result;
    this.connected = true;
    return result;
  }

  request(method: string, params: UnknownRecord, { timeoutMs = this.requestTimeoutMs, deadline = Infinity }: WaitOptions = {}): Promise<unknown> {
    const budget = waitBudget(timeoutMs, deadline, method, params.threadId);
    if (!this.child && !this.socket) throw new Error("Codex app-server transport is not connected");
    const id = this.nextId;
    this.nextId += 1;
    return new Promise<unknown>((resolve, reject) => {
      const timeout = setTimeout(() => {
        this.pending.delete(id);
        // Cancel only this client wait. The durable author turn keeps running;
        // a late response is ignored because its request id is no longer pending.
        reject(budget.deadlineLimited ? reviewWindowError(method, params.threadId) : new Error(`Timed out waiting for ${method}`));
      }, budget.timeoutMs);
      this.pending.set(id, { resolve, reject, timeout, method });
      try { this.write({ id, method, params }); }
      catch (error) { clearTimeout(timeout); this.pending.delete(id); reject(error); }
    });
  }

  notify(method: string, params: UnknownRecord): void {
    this.write({ method, params });
  }

  async close() {
    if (!this.child && !this.socket) return;
    for (const pending of this.pending.values()) {
      clearTimeout(pending.timeout);
      pending.reject(new Error("Codex app-server closed"));
    }
    this.pending.clear();
    if (this.socket) this.socket.close();
    if (this.child) this.child.kill("SIGTERM");
    this.child = null;
    this.socket = null;
    this.connected = false;
  }

  async startTransport({ deadline = Infinity }: { deadline?: number } = {}): Promise<void> {
    if (this.endpoint) {
      await this.startWebSocket({ deadline });
    } else {
      this.startProcess();
    }
  }

  async startWebSocket({ deadline = Infinity }: { deadline?: number } = {}): Promise<void> {
    const budget = waitBudget(this.requestTimeoutMs, deadline, "connect");
    let socket: AppServerSocket;
    if (!this.endpoint) throw new Error("Codex WebSocket endpoint is unavailable");
    try {
      socket = this.webSocketFactory(this.endpoint);
    } catch (error) {
      throw visibleTaskError("websocket start", error, this.stderr);
    }
    this.socket = socket;
    await new Promise<void>((resolve, reject) => {
      const cleanup = () => {
        clearTimeout(timeout);
        socket.removeEventListener?.("open", onOpen);
        socket.removeEventListener?.("error", onError);
      };
      const onOpen = () => { cleanup(); resolve(); };
      const onError = (event: unknown) => {
        cleanup();
        reject(new Error(`WebSocket connection failed: ${field(event, "message") ?? "unknown error"}`));
      };
      const timeout = setTimeout(() => {
        cleanup();
        if (this.socket === socket) this.socket = null;
        this.connected = false;
        reject(budget.deadlineLimited ? reviewWindowError("connect") : new Error(`Timed out connecting to ${this.endpoint}`));
        socket.close();
      }, budget.timeoutMs);
      socket.addEventListener("open", onOpen, { once: true });
      socket.addEventListener("error", onError, { once: true });
    });
    socket.addEventListener("message", (event) => this.handleLine(String(field(event, "data"))));
    socket.addEventListener("error", (event) => this.rejectPending(new Error(`Codex app-server WebSocket error: ${field(event, "message") ?? "unknown error"}`)));
    socket.addEventListener("close", (event) => {
      this.rejectPending(new Error(`Codex app-server WebSocket closed with code ${field(event, "code") ?? "unknown"}`));
      this.connected = false;
    });
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
    const stdout = this.child?.stdout, stderr = this.child?.stderr;
    if (!stdout || !stderr || !this.child) throw new Error("Codex app-server streams are unavailable");
    stdout.on("data", (chunk: unknown) => {
      const bytes = streamBytes(chunk);
      if (!bytes) { this.rejectPending(new Error("Codex app-server stdout emitted an unsupported chunk")); return; }
      stdoutBuffer += stdoutDecoder.write(bytes);
      while (stdoutBuffer.includes("\n")) {
        const lineEnd = stdoutBuffer.indexOf("\n");
        const line = stdoutBuffer.slice(0, lineEnd).trim();
        stdoutBuffer = stdoutBuffer.slice(lineEnd + 1);
        if (line) this.handleLine(line);
      }
    });
    stderr.on("data", (chunk: unknown) => {
      const bytes = streamBytes(chunk);
      if (!bytes) { this.rejectPending(new Error("Codex app-server stderr emitted an unsupported chunk")); return; }
      this.stderr = `${this.stderr}${bytes.toString("utf8")}`.slice(-16_384);
    });
    this.child.on("error", (error) => this.rejectPending(error));
    this.child.on("exit", (code, signal) => {
      this.rejectPending(new Error(`Codex app-server exited with code ${code ?? "null"}, signal ${signal ?? "null"}`));
      this.connected = false;
    });
  }

  handleLine(line: string): void {
    let message: UnknownRecord;
    try {
      message = record(json(line), "Codex response");
    } catch (error) {
      this.rejectPending(new Error(`Codex app-server emitted invalid JSON: ${errorMessage(error)}`));
      return;
    }
    if (!Object.hasOwn(message, "id") || typeof message.id !== "number") return;
    const pending = this.pending.get(message.id);
    if (!pending) return;
    clearTimeout(pending.timeout);
    this.pending.delete(message.id);
    if (message.error) {
      pending.reject(new Error(`${pending.method}: ${field(message.error, "message") ?? JSON.stringify(message.error)}`));
    } else {
      pending.resolve(message.result);
    }
  }

  rejectPending(error: unknown): void {
    for (const pending of this.pending.values()) {
      clearTimeout(pending.timeout);
      pending.reject(error);
    }
    this.pending.clear();
  }

  write(message: UnknownRecord): void {
    if (this.socket?.readyState === 1) {
      this.socket.send(JSON.stringify(message));
      return;
    }
    if (!this.child?.stdin?.writable) {
      throw new Error("Codex app-server stdin is unavailable");
    }
    this.child.stdin.write(`${JSON.stringify(message)}\n`);
  }
}

function authorSandboxPolicy(worktreePath: string, receiptStateDir: string | null, additionalWorkspaceRoots: string[] = []) {
  return {
    type: "workspaceWrite",
    writableRoots: [...new Set([
      worktreePath,
      receiptStateDir,
      ...additionalWorkspaceRoots,
      ...linkedWorktreeGitWritableRoots(worktreePath),
    ].filter(Boolean))],
    networkAccess: true,
  };
}

function linkedWorktreeGitWritableRoots(worktreePath: string): string[] {
  try {
    const dotGit = readFileSync(path.join(worktreePath, ".git"), "utf8").trim();
    const match = /^gitdir:\s*(.+)$/u.exec(dotGit);
    if (!match) return [];
    const worktreeGitDir = realpathSync(path.resolve(worktreePath, match[1] ?? ""));
    const commonRelative = readFileSync(path.join(worktreeGitDir, "commondir"), "utf8").trim();
    const commonGitDir = realpathSync(path.resolve(worktreeGitDir, commonRelative));
    const worktreesRoot = path.join(commonGitDir, "worktrees");
    const relativeMetadata = path.relative(worktreesRoot, worktreeGitDir);
    if (!relativeMetadata || relativeMetadata.startsWith("..") || path.isAbsolute(relativeMetadata)) return [];
    const head = readFileSync(path.join(worktreeGitDir, "HEAD"), "utf8").trim();
    if (!/^ref:\s+refs\/heads\/codex\/[A-Za-z0-9._/-]+$/u.test(head)) return [];
    return [
      worktreeGitDir,
      path.join(commonGitDir, "objects"),
      path.join(commonGitDir, "refs", "heads", "codex"),
      path.join(commonGitDir, "logs", "refs", "heads", "codex"),
    ];
  } catch {
    return [];
  }
}

function visibleTaskError(operation: string, error: unknown, stderr: string): GoalHarnessError {
  if (error instanceof GoalHarnessError) return error;
  return new GoalHarnessError(
    "GOAL_CODEX_VISIBLE_TASK_UNAVAILABLE",
    `Codex visible task interface failed at ${operation}: ${errorMessage(error)}`,
    { operation, stderr_tail: stderr || null, required_interface: "codex app-server localhost WebSocket or stdio + thread/start with durable threads" },
  );
}

function compact(value: UnknownRecord): UnknownRecord {
  return Object.fromEntries(Object.entries(value).filter(([, entry]) => entry !== null && entry !== undefined));
}

function syncPath(file: string): void {const fd=openSync(file,'r');try {fsyncSync(fd);} finally {closeSync(fd);}}
function startUncertain(message: string): GoalHarnessError {return new GoalHarnessError('GOAL_AUTHOR_START_UNCERTAIN',message,{phase:'author_start',origin:'app_server',failure_kind:'unknown',retryable:false});}

function reviewWindowError(operation: string, subjectId: unknown = undefined): GoalHarnessError {
  return new GoalHarnessError("GOAL_REVIEW_WINDOW_EXHAUSTED", "The current review execution window is exhausted.", {
    phase: "harvest", origin: "harness_deadline", failure_kind: "execution_window", retryable: false,
    operation, ...(subjectId ? { subject_id: subjectId } : {}),
  });
}

function waitBudget(timeoutMs: number, deadline: number, operation: string, subjectId: unknown = undefined) {
  const remaining = deadline - Date.now();
  if (!(remaining > 0)) throw reviewWindowError(operation, subjectId);
  return { timeoutMs: Math.min(timeoutMs, remaining), deadlineLimited: remaining <= timeoutMs };
}

function visibleTask(value: unknown): VisibleAuthorTask {
  const data = record(value, "visible author task");
  return { thread_id: text(data.thread_id, "thread ID"), turn_id: text(data.turn_id, "turn ID") };
}
function streamBytes(value: unknown): Buffer | null {
  if (Buffer.isBuffer(value)) return value;
  if (typeof value === "string" || value instanceof Uint8Array) return Buffer.from(value);
  return null;
}
