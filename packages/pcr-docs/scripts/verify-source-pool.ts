import { fork, type ChildProcess } from "node:child_process";
import { isUnknownRecord } from "../../pcr-core/src/types.ts";
import { buildNodeOptions } from "./build-storage.ts";
import { verifySourceDocument, type SourceDocument, type SourceVerificationContext } from "./verify-source-document.ts";

export interface SourceVerificationRun extends SourceVerificationContext {
  readonly documents: readonly SourceDocument[];
  readonly origin: string;
  readonly out: string;
}
export type SourceVerifyWorkerCount = 1 | 2 | 3 | 4;
export interface SourceWorkerOptions {
  readonly workers?: SourceVerifyWorkerCount;
  readonly workerFile?: URL;
  readonly createChild?: typeof fork;
}
interface ChildState {
  readonly child: ChildProcess;
  readonly joined: Promise<number | null>;
  ready: boolean;
  closed: boolean;
  index: number | undefined;
}

export function parseSourceVerifyWorkers(raw: string | undefined): SourceVerifyWorkerCount {
  if (raw === undefined || raw === "1") return 1;
  if (raw === "2") return 2;
  if (raw === "3") return 3;
  if (raw === "4") return 4;
  throw new Error("PCR_SOURCE_VERIFY_WORKERS must be 1, 2, 3, or 4");
}

/** Retain ordinary serial verification unless the caller explicitly selects child workers. */
export async function verifySourceDocuments(context: SourceVerificationRun, workers: SourceVerifyWorkerCount): Promise<void> {
  if (workers === 1) {
    for (const source of context.documents) verifySourceDocument(source, context);
    return;
  }
  if (context.documents.length) {
    await runSourceVerificationPool(context, { workers });
    console.log(JSON.stringify({event: "source-document-verification", documents: context.documents.length, workers}));
  }
}

/** Options expose the child boundary to owner tests without adding a runtime file override. */
export async function runSourceVerificationPool(context: SourceVerificationRun, options: SourceWorkerOptions = {}): Promise<void> {
  const workerCount = options.workers ?? 2;
  if (workerCount !== 1 && workerCount !== 2 && workerCount !== 3 && workerCount !== 4) throw new Error("Invalid source verification pool size");
  if (!context.documents.length) return;
  const workerFile = options.workerFile ?? new URL(import.meta.url.endsWith(".js") ? "./verify-source-worker.js" : "./verify-source-worker.ts", import.meta.url);
  const createChild = options.createChild ?? fork;
  const pages = context.manifest.pages.map(page => ({url: page.url, sourcePath: page.sourcePath, sourceNodeIds: page.sourceNodeIds}));
  const links = context.report.links.map(link => ({source: link.source, original: link.original, target: link.target}));
  const children: ChildState[] = [];
  const outcomes = new Map<number, Error | undefined>();
  let next = 0, frontier = 0, firstFailure = Infinity;
  let ending = false, infrastructureFailure: Error | undefined;
  let wake: (() => void) | undefined;
  function changed(): void {
    const notify = wake;
    wake = undefined;
    notify?.();
  }
  function rejectInfrastructure(error: Error): void {
    infrastructureFailure ??= error;
    changed();
  }
  function send(state: ChildState, message: object): void {
    if (!state.child.connected) throw new Error("Source verification child IPC disconnected");
    state.child.send(message, error => { if (error) rejectInfrastructure(error); });
  }
  function complete(index: number, error?: Error): void {
    if (index < frontier || outcomes.has(index)) throw new Error("Duplicate source verification result");
    outcomes.set(index, error);
    if (error) firstFailure = Math.min(firstFailure, index);
    changed();
  }
  function advance(): Error | undefined {
    while (outcomes.has(frontier)) {
      const failure = outcomes.get(frontier);
      outcomes.delete(frontier);
      if (failure) return failure;
      frontier++;
    }
    return undefined;
  }
  function dispatch(state: ChildState): void {
    while (state.ready && state.index === undefined && next < context.documents.length && next <= firstFailure && !infrastructureFailure) {
      const index = next++;
      const source = context.documents[index]!;
      if (context.manifest.pages.some(page => page.sourcePath === source.sourcePath && context.parsed.has(page.url))) {
        try { verifySourceDocument(source, context); complete(index); }
        catch (error) { complete(index, error instanceof Error ? error : new Error(String(error))); }
      } else {
        state.index = index;
        send(state, {type: "document", index, source: {sourcePath: source.sourcePath, sourceSha256: source.sourceSha256,
          inventoryPath: source.inventoryPath, pages: source.pages, nodes: source.nodes}});
      }
    }
  }
  function receive(state: ChildState, message: unknown): void {
    try {
      if (!isUnknownRecord(message)) throw new Error("Malformed source verification message");
      if (message.type === "ready") {
        if (state.ready || message.pid !== state.child.pid || typeof message.heapLimitBytes !== "number" ||
            !Number.isFinite(message.heapLimitBytes) || message.heapLimitBytes <= 0 || message.heapLimitBytes > 5 * 1024 ** 3) {
          throw new Error("Invalid source child identity or heap limit");
        }
        state.ready = true;
        changed();
        return;
      }
      const index = state.index;
      if (ending || !state.ready || index === undefined || message.index !== index ||
          message.sourcePath !== context.documents[index]!.sourcePath || !["result", "failure"].includes(String(message.type))) {
        throw new Error("Unexpected source verification result");
      }
      let failure: Error | undefined;
      if (message.type === "failure") {
        if (!isUnknownRecord(message.error) || typeof message.error.name !== "string" || typeof message.error.message !== "string") {
          throw new Error("Malformed source verification failure");
        }
        failure = new Error(message.error.message);
        failure.name = message.error.name;
      }
      state.index = undefined;
      complete(index, failure);
    } catch (error) { rejectInfrastructure(error instanceof Error ? error : new Error(String(error))); }
  }
  try {
    const childHeapMb = workerCount > 2 ? 2048 : 4096;
    for (let number = 0; number < workerCount; number++) {
      const child = createChild(workerFile, [], {serialization: "advanced", stdio: ["ignore", "inherit", "inherit", "ipc"],
        env: {...process.env, NODE_OPTIONS: buildNodeOptions(process.env.NODE_OPTIONS)},
        execArgv: [...process.execArgv, `--max-old-space-size=${childHeapMb}`]});
      const state: ChildState = {child, ready: false, closed: false, index: undefined,
        joined: new Promise(resolve => child.once("close", code => {
          state.closed = true;
          if (!ending) rejectInfrastructure(new Error("Source verification child closed before completion: " + code));
          resolve(code);
        }))};
      child.on("error", rejectInfrastructure);
      child.once("disconnect", () => {
        if (!ending) rejectInfrastructure(new Error("Source verification child disconnected before completion"));
      });
      child.on("message", message => receive(state, message));
      children.push(state);
      send(state, {type: "initialize", context: {app: context.app, root: context.root, out: context.out,
        origin: context.origin, pages, links}});
    }
    while (frontier < context.documents.length || children.some(state => !state.ready)) {
      let failure = advance();
      if (failure) throw failure;
      if (infrastructureFailure) throw infrastructureFailure;
      for (const state of children) dispatch(state);
      failure = advance();
      if (failure) throw failure;
      if (infrastructureFailure) throw infrastructureFailure;
      if (frontier === context.documents.length && children.every(state => state.ready)) break;
      await new Promise<void>(resolve => { wake = resolve; });
    }
    if (next !== context.documents.length || outcomes.size || children.some(state => state.index !== undefined)) {
      throw new Error("Incomplete source verification inventory");
    }
    ending = true;
    for (const state of children) send(state, {type: "stop"});
    const codes = await Promise.all(children.map(state => state.joined));
    if (infrastructureFailure) throw infrastructureFailure;
    if (codes.some(code => code !== 0)) throw new Error("Source verification child failed during shutdown");
  } finally {
    ending = true;
    for (const state of children) if (!state.closed) state.child.kill("SIGTERM");
    await Promise.all(children.map(state => state.joined));
  }
}
