import { fork, type ChildProcess } from "node:child_process";
import { createPcrReadContext, withPcrReadContextSession } from "../../pcr-core/src/index.ts";
import { isUnknownRecord } from "../../pcr-core/src/types.ts";
import { buildNodeOptions } from "./build-storage.ts";
import { generatePcrEntry, type PcrEntryResult, type PcrWorkItem } from "./generate-pcr-entry.ts";

export interface GeneratePcrPoolContext {
  readonly root: string;
  readonly stage: string;
  readonly origin: string;
  readonly sourceDate: string;
  readonly modified: ReadonlyMap<string, string>;
  readonly tracked: ReadonlyMap<string, string>;
  readonly pcrs: readonly PcrWorkItem[];
  readonly onEntry: (index: number, result: PcrEntryResult) => void;
}
export interface GeneratePcrPoolOptions {
  readonly workers?: 1 | 2 | 3 | 4;
  readonly workerFile?: URL;
  readonly createChild?: typeof fork;
}
interface ChildState {
  readonly child: ChildProcess;
  readonly joined: Promise<number | null>;
  readonly assigned: Set<number>;
  ready: boolean;
  dispatched: boolean;
  closed: boolean;
}

export function parseGenerateWorkers(raw: string | undefined): 1 | 2 | 3 | 4 {
  if (raw === undefined || raw === "1") return 1;
  if (raw === "2") return 2;
  if (raw === "3") return 3;
  if (raw === "4") return 4;
  throw new Error("PCR_DOCS_GENERATE_WORKERS must be an integer between 1 and 4");
}

/** Retain ordinary serial generation unless the caller explicitly selects bounded child workers. */
export async function generatePcrEntries(context: GeneratePcrPoolContext, workers: 1 | 2 | 3 | 4): Promise<void> {
  if (workers === 1 || context.pcrs.length <= 1) {
    const readContext = createPcrReadContext({ root: context.root });
    withPcrReadContextSession({
      root: context.root,
      context: readContext,
      read: () => {
        for (const [index, pcr] of context.pcrs.entries()) {
          context.onEntry(index, generatePcrEntry(pcr, { ...context, readContext }));
        }
      },
    });
    return;
  }
  await runGeneratePcrPool(context, { workers });
  console.log(JSON.stringify({ event: "pcr-document-generation", pcrs: context.pcrs.length, workers }));
}

export async function runGeneratePcrPool(context: GeneratePcrPoolContext, options: GeneratePcrPoolOptions = {}): Promise<void> {
  const workerCount = options.workers ?? 2;
  if (!Number.isInteger(workerCount) || workerCount < 1 || workerCount > 4) throw new Error("Invalid PCR generation pool size");
  if (!context.pcrs.length) return;
  const workerFile =
    options.workerFile ??
    new URL(import.meta.url.endsWith(".js") ? "./generate-pcr-worker.js" : "./generate-pcr-worker.ts", import.meta.url);
  const createChild = options.createChild ?? fork;
  const children: ChildState[] = [];
  const batches: Array<Array<{ index: number; pcr: PcrWorkItem }>> = Array.from({ length: workerCount }, () => []);
  context.pcrs.forEach((pcr, index) => {
    batches[index % workerCount]!.push({ index, pcr: { id: pcr.id, path: pcr.path, readiness: pcr.readiness } });
  });
  const outcomes = new Map<number, { result?: PcrEntryResult; error?: Error }>();
  let frontier = 0;
  let ending = false,
    infrastructureFailure: Error | undefined;
  let wake: (() => void) | undefined;
  const modifiedEntries = [...context.modified.entries()];
  const trackedEntries = [...context.tracked.entries()];

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
    if (!state.child.connected) throw new Error("PCR generation child IPC disconnected");
    state.child.send(message, (error) => {
      if (error) rejectInfrastructure(error);
    });
  }
  function complete(index: number, outcome: { result?: PcrEntryResult; error?: Error }): void {
    if (index < frontier || outcomes.has(index)) throw new Error("Duplicate PCR generation result");
    outcomes.set(index, outcome);
    changed();
  }
  function advance(): Error | undefined {
    while (outcomes.has(frontier)) {
      const outcome = outcomes.get(frontier)!;
      outcomes.delete(frontier);
      if (outcome.error) return outcome.error;
      context.onEntry(frontier, outcome.result!);
      frontier++;
    }
    return undefined;
  }
  function receive(state: ChildState, message: unknown): void {
    try {
      if (!isUnknownRecord(message)) throw new Error("Malformed PCR generation message");
      if (message.type === "ready") {
        if (
          state.ready ||
          message.pid !== state.child.pid ||
          typeof message.heapLimitBytes !== "number" ||
          !Number.isFinite(message.heapLimitBytes) ||
          message.heapLimitBytes <= 0 ||
          message.heapLimitBytes > 5 * 1024 ** 3
        ) {
          throw new Error("Invalid PCR generation child identity or heap limit");
        }
        state.ready = true;
        changed();
        return;
      }
      const index = typeof message.index === "number" ? message.index : -1;
      if (
        ending ||
        !state.ready ||
        !state.assigned.has(index) ||
        message.pcrId !== context.pcrs[index]?.id ||
        !["result", "failure"].includes(String(message.type))
      ) {
        throw new Error("Unexpected PCR generation result");
      }
      state.assigned.delete(index);
      if (message.type === "failure") {
        if (!isUnknownRecord(message.error) || typeof message.error.name !== "string" || typeof message.error.message !== "string") {
          throw new Error("Malformed PCR generation failure");
        }
        const failure = new Error(message.error.message);
        failure.name = message.error.name;
        complete(index, { error: failure });
        return;
      }
      complete(index, { result: message.result as PcrEntryResult });
    } catch (error) {
      rejectInfrastructure(error instanceof Error ? error : new Error(String(error)));
    }
  }
  try {
    for (let number = 0; number < workerCount; number++) {
      const batch = batches[number]!;
      const child = createChild(workerFile, [], {
        serialization: "advanced",
        stdio: ["ignore", "inherit", "inherit", "ipc"],
        env: { ...process.env, NODE_OPTIONS: buildNodeOptions(process.env.NODE_OPTIONS) },
        execArgv: [...process.execArgv, "--max-old-space-size=2048"],
      });
      const state: ChildState = {
        child,
        assigned: new Set(batch.map((item) => item.index)),
        ready: false,
        dispatched: false,
        closed: false,
        joined: new Promise((resolve) =>
          child.once("close", (code) => {
            state.closed = true;
            if (!ending) rejectInfrastructure(new Error("PCR generation child closed before completion: " + code));
            resolve(code);
          }),
        ),
      };
      child.on("error", rejectInfrastructure);
      child.once("disconnect", () => {
        if (!ending) rejectInfrastructure(new Error("PCR generation child disconnected before completion"));
      });
      child.on("message", (message) => receive(state, message));
      children.push(state);
      send(state, {
        type: "initialize",
        context: {
          root: context.root,
          stage: context.stage,
          origin: context.origin,
          sourceDate: context.sourceDate,
          modified: modifiedEntries,
          tracked: trackedEntries,
        },
      });
    }
    while (frontier < context.pcrs.length || children.some((state) => !state.ready)) {
      let failure = advance();
      if (failure) throw failure;
      if (infrastructureFailure) throw infrastructureFailure;
      for (const [number, state] of children.entries()) {
        if (state.ready && !state.dispatched) {
          state.dispatched = true;
          send(state, { type: "batch", items: batches[number]! });
        }
      }
      failure = advance();
      if (failure) throw failure;
      if (infrastructureFailure) throw infrastructureFailure;
      if (frontier === context.pcrs.length && children.every((state) => state.ready)) break;
      await new Promise<void>((resolve) => {
        wake = resolve;
      });
    }
    if (outcomes.size || children.some((state) => state.assigned.size > 0)) {
      throw new Error("Incomplete PCR generation inventory");
    }
    ending = true;
    for (const state of children) send(state, { type: "stop" });
    const codes = await Promise.all(children.map((state) => state.joined));
    if (infrastructureFailure) throw infrastructureFailure;
    if (codes.some((code) => code !== 0)) throw new Error("PCR generation child failed during shutdown");
  } finally {
    ending = true;
    for (const state of children) if (!state.closed) state.child.kill("SIGTERM");
    await Promise.all(children.map((state) => state.joined));
  }
}
