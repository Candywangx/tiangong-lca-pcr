import fs from "node:fs";
import path from "node:path";
import type { DocPage, PcrRecord, SiteManifest } from "./types";

const generatedRoot = path.join(process.cwd(), ".generated");
let cached: SiteManifest | undefined;
export function getSiteManifest(): SiteManifest {
  return (cached ??= JSON.parse(
    fs.readFileSync(path.join(generatedRoot, "site.json"), "utf8"),
  ));
}
export function getDocPage(
  slugs: string[] | undefined,
  locale: string,
): DocPage | undefined {
  const key = (slugs ?? []).join("/");
  return getSiteManifest().pages.find(
    (page) => page.locale === locale && page.slugs.join("/") === key,
  );
}
export function getPcrRecord(
  id: string,
  version?: string,
): PcrRecord | undefined {
  return version
    ? getSiteManifest().historicalRecords?.find(
        (record) => record.id === id && record.version === version,
      )
    : getSiteManifest().records.find((record) => record.id === id);
}
function artifactPath(relative: string): string {
  const resolved = path.resolve(generatedRoot, relative);
  if (!resolved.startsWith(`${generatedRoot}${path.sep}`))
    throw new Error("Invalid generated artifact path.");
  return resolved;
}
export function readPageHtml(page: DocPage): string {
  return page.htmlPath
    ? fs.readFileSync(artifactPath(page.htmlPath), "utf8")
    : "";
}
export function readRecordData(record: PcrRecord): {
  manifest: Record<string, unknown>;
  structured: Record<string, unknown>;
} {
  return JSON.parse(fs.readFileSync(artifactPath(record.dataPath), "utf8"));
}
