import fs from "node:fs";
import path from "node:path";
import type { DocPage } from "../lib/types.ts";
import type { GenerationReport } from "./generation-report.ts";
import { isUnknownRecord, unknownField } from "../../pcr-core/src/types.ts";
import { inventoryMarkdown, verifyRenderedBlocks } from "./markdown.ts";

export type SourceDocument = GenerationReport["documents"][number];
export type SourcePage = Pick<DocPage, "url" | "sourcePath" | "sourceNodeIds">;
export interface SourceVerificationContext {
  readonly app: string;
  readonly root: string;
  readonly manifest: { readonly pages: readonly SourcePage[] };
  readonly report: { readonly links: readonly GenerationReport["links"][number][] };
  readonly parsed: Map<string, Document>;
  readonly readPage: (url: string) => Document;
}
function requireThat(condition: unknown, message: string): asserts condition {
  if (!condition) throw new Error(message);
}

/** Independently verify one original source and release each page DOM after its checks. */
export function verifySourceDocument(source: SourceDocument, context: SourceVerificationContext): void {
  const {app, root, manifest, report, parsed, readPage} = context;
  const original = fs.readFileSync(path.join(root, source.sourcePath), "utf8");
  const inventory = inventoryMarkdown(original, source.sourcePath).nodes;
  const rawMapping: unknown = JSON.parse(
    fs.readFileSync(path.join(app, ".generated", source.inventoryPath), "utf8"),
  );
  const rawTargets=unknownField(rawMapping,"anchorTargets");
  requireThat(isUnknownRecord(rawTargets)&&Object.values(rawTargets).every(value=>typeof value === "string"),"Invalid source anchor mapping");
  const anchorTargets=rawTargets as Record<string,string>;
  const resolveLink = (value: string) => {
    if (value.startsWith("#"))
      return anchorTargets[decodeURIComponent(value.slice(1))]!;
    return (
      report.links.find(
        (link) => link.source === source.sourcePath && link.original === value,
      )?.target ?? value
    );
  };
  const pages = manifest.pages.filter(
    (p) => p.sourcePath === source.sourcePath,
  );
  const allIds = pages.flatMap((p) => p.sourceNodeIds);
  const actualOrder: string[] = [];
  const orderedSource = inventory
    .filter((node) => !node.isFootnote)
    .map((node) => node.id);
  requireThat(
    allIds.length === inventory.length &&
      new Set(allIds).size === inventory.length,
    "Source coverage mismatch " + source.sourcePath,
  );
  for (const page of pages) {
    const document = readPage(page.url);
    verifyRenderedBlocks(document, inventory, page.sourceNodeIds, {
      verifyLinks: true,
      resolveLink,
    });
    const renderedIds = [
      ...document.querySelectorAll("[data-source-node]"),
    ].map((node) => node.getAttribute("data-source-node"));
    requireThat(
      renderedIds.length === page.sourceNodeIds.length &&
        renderedIds.every((id) => id!==null&&page.sourceNodeIds.includes(id)),
      "Unexpected source marker " + page.url,
    );
    actualOrder.push(...renderedIds.filter((id):id is string=>id!==null&&orderedSource.includes(id)));
    requireThat(
      document.querySelector(
        '[data-source-document="' + source.sourcePath + '"]',
      ),
      "Missing document boundary " + page.url,
    );
    parsed.delete(page.url);
  }
  requireThat(
    actualOrder.join("\n") === orderedSource.join("\n"),
    "Source block order changed " + source.sourcePath,
  );
}
