import fs from "node:fs";
import path from "node:path";
import v8 from "node:v8";
import { parseHTML } from "linkedom";
import { isUnknownRecord } from "../../pcr-core/src/types.ts";
import type { GenerationReport } from "./generation-report.ts";
import { verifySourceDocument, type SourceDocument, type SourcePage, type SourceVerificationContext } from "./verify-source-document.ts";

interface WorkerInput {
  app: string;
  root: string;
  out: string;
  origin: string;
  pages: SourcePage[];
  links: GenerationReport["links"];
}
function parseInput(value: unknown): WorkerInput {
  if (!isUnknownRecord(value) || typeof value.app !== "string" || typeof value.root !== "string" ||
      typeof value.out !== "string" || typeof value.origin !== "string" || !Array.isArray(value.pages) || !Array.isArray(value.links) ||
      !value.pages.every(page => isUnknownRecord(page) && typeof page.url === "string" &&
        (page.sourcePath === undefined || typeof page.sourcePath === "string") && Array.isArray(page.sourceNodeIds) && page.sourceNodeIds.every(id => typeof id === "string")) ||
      !value.links.every(link => isUnknownRecord(link) && typeof link.source === "string" && typeof link.original === "string" && typeof link.target === "string")) {
    throw new Error("Invalid source verification initialization");
  }
  return value as unknown as WorkerInput;
}
function parseSource(value: unknown): SourceDocument {
  if (!isUnknownRecord(value) || typeof value.sourcePath !== "string" || typeof value.sourceSha256 !== "string" ||
      typeof value.inventoryPath !== "string" || typeof value.pages !== "number" || typeof value.nodes !== "number" ||
      !Number.isFinite(value.pages) || !Number.isFinite(value.nodes)) throw new Error("Invalid source verification document");
  return value as unknown as SourceDocument;
}
if (!process.send) throw new Error("Source verification worker requires IPC");
let context: SourceVerificationContext | undefined;
let stopping = false;
function send(message: object): void {
  if (!process.connected) throw new Error("Source verification parent disconnected");
  process.send!(message);
}
process.once("disconnect", () => { if (!stopping) process.exit(1); });
process.on("message", (message: unknown) => {
  if (!isUnknownRecord(message)) throw new Error("Malformed source verification task");
  if (message.type === "initialize") {
    if (context) throw new Error("Duplicate source verification initialization");
    const input = parseInput(message.context);
    const parsed = new Map<string, Document>();
    const readPage = (url: string): Document => {
      const previous = parsed.get(url);
      if (previous) return previous;
      const file = path.join(input.out, decodeURIComponent(new URL(url, input.origin).pathname), "index.html");
      if (!fs.existsSync(file)) throw new Error("Missing exported page " + url);
      const document = parseHTML(fs.readFileSync(file, "utf8")).document;
      parsed.set(url, document);
      return document;
    };
    context = {app: input.app, root: input.root, manifest: {pages: input.pages}, report: {links: input.links}, parsed, readPage};
    send({type: "ready", pid: process.pid, heapLimitBytes: v8.getHeapStatistics().heap_size_limit});
    return;
  }
  if (message.type === "stop") {
    stopping = true;
    process.disconnect();
    return;
  }
  if (!context || message.type !== "document" || typeof message.index !== "number" || !Number.isInteger(message.index) || message.index < 0) {
    throw new Error("Invalid source verification task");
  }
  const source = parseSource(message.source);
  try {
    verifySourceDocument(source, context);
    send({type: "result", index: message.index, sourcePath: source.sourcePath});
  } catch (error) {
    send({type: "failure", index: message.index, sourcePath: source.sourcePath,
      error: {name: error instanceof Error ? error.name : "Error", message: error instanceof Error ? error.message : String(error)}});
  }
});
