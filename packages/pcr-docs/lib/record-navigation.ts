import type {SiteManifest,PcrRecord} from "./types.ts";
import type {Node} from "fumadocs-core/page-tree";
/** The record's own emitted URL set is authoritative for current versus immutable-version navigation. */
export function recordPages(manifest: SiteManifest, record: PcrRecord, language: string) {
  const pages = new Map(manifest.pages.map((page) => [page.url, page]));
  return (record.pages[language] ?? []).map((url) => {
    const page = pages.get(url);
    if (
      !page ||
      page.pcrId !== record.id ||
      page.language !== language ||
      !page.part
    )
      throw new Error("Invalid record chapter mapping: " + url);
    return page;
  });
}

export function recordNavigationNode(manifest: SiteManifest, record: PcrRecord, language: string, label:{title:string;url:string}):Node {
  const parts = recordPages(manifest, record, language);
  if (!parts.length)
    throw new Error("Record has no page in the requested reading language.");
  const index = { type: "page" as const, name: label.title, url: label.url };
  if (parts.length === 1) return index;
  return {
    type: "folder",
    name: label.title,
    collapsible: true,
    defaultOpen: true,
    index,
    children: parts.map((part) => ({
      type: "page",
      name: part.part?.label ?? part.title,
      url: part.url,
    })),
  };
}
