import v8 from "node:v8";
import { createPcrReadContext, withPcrReadContextSession } from "../../pcr-core/src/index.ts";
import { isUnknownRecord } from "../../pcr-core/src/types.ts";
import { generatePcrEntry, type PcrEntryContext, type PcrWorkItem } from "./generate-pcr-entry.ts";

if (!process.send) throw new Error("PCR generation worker requires IPC");
let context: PcrEntryContext | undefined;
let stopping = false;
function send(message: object): void {
  if (!process.connected) throw new Error("PCR generation parent disconnected");
  process.send!(message);
}
process.once("disconnect", () => {
  if (!stopping) process.exit(1);
});
process.on("message", (message: unknown) => {
  if (!isUnknownRecord(message)) throw new Error("Malformed PCR generation task");
  if (message.type === "initialize") {
    if (context) throw new Error("Duplicate PCR generation initialization");
    const raw = message.context;
    if (
      !isUnknownRecord(raw) ||
      typeof raw.root !== "string" ||
      typeof raw.stage !== "string" ||
      typeof raw.origin !== "string" ||
      typeof raw.sourceDate !== "string" ||
      !Array.isArray(raw.modified) ||
      !Array.isArray(raw.tracked)
    ) {
      throw new Error("Invalid PCR generation initialization");
    }
    context = {
      root: raw.root,
      stage: raw.stage,
      origin: raw.origin,
      sourceDate: raw.sourceDate,
      modified: new Map(raw.modified as Array<[string, string]>),
      tracked: new Map(raw.tracked as Array<[string, string]>),
      readContext: createPcrReadContext({ root: raw.root }),
    };
    send({ type: "ready", pid: process.pid, heapLimitBytes: v8.getHeapStatistics().heap_size_limit });
    return;
  }
  if (message.type === "stop") {
    stopping = true;
    process.disconnect();
    return;
  }
  if (!context || message.type !== "batch" || !Array.isArray(message.items)) {
    throw new Error("Invalid PCR generation task");
  }
  const items = message.items as Array<{ index: number; pcr: PcrWorkItem }>;
  withPcrReadContextSession({
    root: context.root,
    context: context.readContext,
    read: () => {
      for (const item of items) {
        if (
          !isUnknownRecord(item) ||
          typeof item.index !== "number" ||
          !Number.isInteger(item.index) ||
          item.index < 0 ||
          !isUnknownRecord(item.pcr) ||
          typeof item.pcr.id !== "string" ||
          typeof item.pcr.path !== "string"
        ) {
          throw new Error("Invalid PCR generation batch item");
        }
        try {
          const result = generatePcrEntry(item.pcr as unknown as PcrWorkItem, context!);
          send({ type: "result", index: item.index, pcrId: item.pcr.id, result });
        } catch (error) {
          send({
            type: "failure",
            index: item.index,
            pcrId: item.pcr.id,
            error: {
              name: error instanceof Error ? error.name : "Error",
              message: error instanceof Error ? error.message : String(error),
            },
          });
          return;
        }
      }
    },
  });
});
