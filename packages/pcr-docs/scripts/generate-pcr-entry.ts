import fs from "node:fs";
import path from "node:path";
import { createHash } from "node:crypto";
import { parseHTML } from "linkedom";
import { isUnknownRecord, unknownField, errorMessage } from "../../pcr-core/src/types.ts";
import { readPcrDocumentBundle, type createPcrReadContext } from "../../pcr-core/src/index.ts";
import { parseYaml } from "../../pcr-core/src/yaml-lite.ts";
import { readPcrDocumentHistory } from "../../../builder/lib/pcr-document-history.ts";
import { assertManifest, assertMarkdownFrontmatter } from "../../../builder/lib/schema-contracts.ts";
import type { BuilderManifest } from "../../../builder/lib/types.ts";
import type { DocPage, Download, PcrRecord as SitePcrRecord } from "../lib/types.ts";
import type { GenerationReport } from "./generation-report.ts";
import { routeFor, publicLanguage } from "./language-policy.ts";
import { renderMarkdown, finalizePart, verifyRenderedBlocks, sha256 } from "./markdown.ts";
import { documentSummary } from "./summaries.ts";

export type ClassificationRef = { system: string; version: string; code: string; title?: string; mapping_type?: string };
export interface SiteAuthoringManifest extends BuilderManifest {
  classification_refs?: ClassificationRef[];
  modules?: Record<string, string[]>;
}
export type GeneratedRecord = Omit<SitePcrRecord, "slug"> & { slug: [string, string, string] };
export interface PcrWorkItem {
  readonly id: string;
  readonly path: string;
  readonly readiness: SitePcrRecord["readiness"];
}
export interface PcrEntryContext {
  readonly root: string;
  readonly stage: string;
  readonly origin: string;
  readonly sourceDate: string;
  readonly modified: ReadonlyMap<string, string>;
  readonly tracked: ReadonlyMap<string, string>;
  readonly readContext: ReturnType<typeof createPcrReadContext>;
}
export interface PcrEntryResult {
  readonly record: GeneratedRecord;
  readonly historicalRecords: GeneratedRecord[];
  readonly pages: DocPage[];
  readonly documents: GenerationReport["documents"];
  readonly searches: Array<{ page: DocPage; text: string }>;
  readonly anchors: Array<[string, Array<[string, string]>]>;
  readonly routes: Array<[string, string]>;
  readonly extraLanguages: string[];
  readonly sourceBindings: Array<{ relative: string; sha256: string; bytes: number }>;
  readonly downloads: Array<Download & { sourcePath: string }>;
  readonly summaryCounts: { pages: number; title_only: number; context_dropped: number; clipped: number };
}

function checkedManifest(raw: unknown): SiteAuthoringManifest {
  assertManifest(raw);
  if (!isUnknownRecord(raw)) throw new Error("Manifest must be an object");
  return raw as SiteAuthoringManifest;
}
function slugFor(pcrPath: string): [string, string, string] {
  const segments = pcrPath.slice("library/pcrs/".length).split("/");
  if (segments.length !== 3 || segments.some((part) => !part))
    throw new Error("Invalid canonical PCR source path: " + pcrPath);
  return segments as [string, string, string];
}
function short(value: string | Uint8Array): string {
  return createHash("sha256").update(value).digest("hex").slice(0, 24);
}
function esc(value: unknown): string {
  return String(value ?? "").replace(
    /[&<>"']/gu,
    (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[c as "&" | "<" | ">" | '"' | "'"],
  );
}
function urlFor(code: string, slugs: readonly string[]): string {
  return "/" + routeFor(code) + "/docs/" + slugs.map(encodeURIComponent).join("/") + "/";
}
function blobHash(bytes: Uint8Array): string {
  return createHash("sha1")
    .update(Buffer.from("blob " + bytes.length + "\0"))
    .update(bytes)
    .digest("hex");
}
function validateFrontmatter(bundle: ReturnType<typeof readPcrDocumentBundle>, language: string, fm: unknown): void {
  assertMarkdownFrontmatter(fm);
  if (!isUnknownRecord(fm)) throw new Error("Markdown frontmatter must be an object");
  if (fm.pcr_id !== bundle.manifest.id || fm.language !== language)
    throw new Error("Markdown identity mismatch: " + bundle.pcr.path + " " + language);
  if (language !== "en-US" && fm.sync_with !== "pcr.en-US.md")
    throw new Error("Translation sync source mismatch: " + bundle.pcr.path + " " + language);
  const state = unknownField(unknownField(bundle.manifest, "translation_status"), language);
  if (language !== "en-US" && !state)
    throw new Error("Missing declared translation state: " + bundle.pcr.path + " " + language);
  if (language !== "en-US" && fm.translation_status && fm.translation_status !== state)
    throw new Error("Conflicting translation states: " + bundle.manifest.id + " " + language + " " + state + " / " + fm.translation_status);
}

/** Render one canonical PCR (current + historical releases) into disjoint staged files and return deterministic metadata deltas. */
export function generatePcrEntry(pcr: PcrWorkItem, context: PcrEntryContext): PcrEntryResult {
  const { root, stage, origin, sourceDate, modified, tracked, readContext } = context;
  const write = (relative: string, content: string | Uint8Array) => {
    const target = path.join(stage, relative);
    fs.mkdirSync(path.dirname(target), { recursive: true });
    fs.writeFileSync(target, content);
  };
  const json = (relative: string, value: unknown) => write(relative, JSON.stringify(value));

  const sourceFiles = new Map<string, { sha256: string; bytes: number }>();
  const sourceBindings: PcrEntryResult["sourceBindings"] = [];
  const downloadsBySource = new Map<string, Download>();
  const downloadUrls = new Set<string>();
  const downloadsLog: Array<Download & { sourcePath: string }> = [];
  const pages: DocPage[] = [];
  const documents: GenerationReport["documents"] = [];
  const searches: Array<{ page: DocPage; text: string }> = [];
  const anchors: Array<[string, Array<[string, string]>]> = [];
  const routes: Array<[string, string]> = [];
  const extraLanguages: string[] = [];
  const summaryCounts = { pages: 0, title_only: 0, context_dropped: 0, clipped: 0 };

  function bindSource(relative: string, bytes: Uint8Array): void {
    if (!tracked.has(relative) || tracked.get(relative) !== blobHash(bytes))
      throw new Error("Source differs from pinned Git commit: " + relative);
    const digest = sha256(bytes);
    const prior = sourceFiles.get(relative);
    if (prior && prior.sha256 !== digest) throw new Error("Source changed: " + relative);
    if (!prior) {
      sourceFiles.set(relative, { sha256: digest, bytes: bytes.length });
      sourceBindings.push({ relative, sha256: digest, bytes: bytes.length });
    }
  }
  function download(relative: string, bytes: Uint8Array): Download {
    bindSource(relative, bytes);
    const cached = downloadsBySource.get(relative);
    if (cached) return cached;
    const url = "/generated/raw/" + relative;
    write("public/raw/" + relative, bytes);
    const item: Download = {
      name: path.posix.basename(relative),
      url,
      sha256: sha256(bytes),
      bytes: bytes.length,
    };
    if (!downloadUrls.has(url)) {
      downloadsLog.push({ ...item, sourcePath: relative });
      downloadUrls.add(url);
    }
    downloadsBySource.set(relative, item);
    return item;
  }
  function recordSummary(summary: { titleOnly: boolean; contextDropped: boolean; clipped: boolean; text: string }): string {
    summaryCounts.pages += 1;
    if (summary.titleOnly) summaryCounts.title_only += 1;
    if (summary.contextDropped) summaryCounts.context_dropped += 1;
    if (summary.clipped) summaryCounts.clipped += 1;
    return summary.text;
  }
  function renderPcrDocument({
    artifact,
    language,
    slugs,
    extra,
    alternates = {},
  }: {
    artifact: { text: string; path: string; sha256: string };
    language: string;
    slugs: string[];
    extra: Partial<DocPage> & { kind: DocPage["kind"] };
    alternates?: Record<string, string>;
  }) {
    const rendered = renderMarkdown(artifact.text, artifact.path);
    const urls = rendered.parts.map((part, i) => urlFor(language, i ? [...slugs, "chapters", part.slug] : slugs));
    const docAnchors = new Map(
      rendered.parts.flatMap((part, i) => part.anchors.map((id) => [id, urls[i] + "#" + encodeURIComponent(id)])),
    );
    for (const [alias, id] of Object.entries(rendered.anchorAliases)) docAnchors.set(alias, docAnchors.get(id)!);
    anchors.push([artifact.path, [...docAnchors.entries()]]);
    const mapped: { url: string; sourceNodeIds: string[] }[] = [];
    rendered.parts.forEach((part, i) => {
      const nodeIds = new Set(part.sourceNodeIds);
      const pageSlugs = i ? [...slugs, "chapters", part.slug] : slugs;
      const url = urlFor(language, pageSlugs);
      const page: DocPage = {
        key: short(url),
        language,
        locale: routeFor(language),
        slugs: pageSlugs,
        url,
        title: part.title,
        description: recordSummary(
          documentSummary({
            title: part.title,
            nodes: rendered.inventory.filter((node) => nodeIds.has(node.id)),
            fallbackNodes: i === 0 ? rendered.inventory : [],
            language,
          }),
        ),
        toc: part.toc,
        indexable: true,
        canonical: origin + url,
        alternates: extra.indexable === false ? {} : i === 0 ? alternates : { [language]: origin + urls[i] },
        sourceNodeIds: part.sourceNodeIds,
        lastModified: modified.get(artifact.path) ?? sourceDate,
        ...extra,
        htmlPath: "pages/" + short(urls[i]!) + ".html",
        sourcePath: artifact.path,
        sourceSha256: artifact.sha256,
        sourceHeadingId: part.sourceHeadingId,
        sourceHeadingAnchor: i === 0 ? rendered.sourceHeadingAnchor : undefined,
        part: { index: i, total: rendered.parts.length, label: part.label },
      };
      const html = finalizePart(part, {
        hrefForAnchor: (id) => {
          const target = docAnchors.get(id);
          if (!target) throw new Error(artifact.path + ": missing fragment #" + id);
          return target;
        },
      });
      const document = parseHTML(
        "<html><body>" +
          (part.sourceHeadingId ? '<h1 data-source-node="' + part.sourceHeadingId + '">' + esc(rendered.title) + "</h1>" : "") +
          html +
          "</body></html>",
      ).document;
      try {
        verifyRenderedBlocks(document, rendered.inventory, part.sourceNodeIds);
      } catch (error) {
        throw new Error(artifact.path + ": " + errorMessage(error));
      }
      write(page.htmlPath!, html);
      const ids = new Set(part.sourceNodeIds);
      searches.push({
        page,
        text: rendered.inventory
          .filter((n) => ids.has(n.id))
          .map((n) => n.text)
          .join("\n"),
      });
      pages.push(page);
      mapped.push({ url: page.url, sourceNodeIds: page.sourceNodeIds });
    });
    const inventoryPath = "inventory/" + short(artifact.path) + ".json";
    json(inventoryPath, {
      sourcePath: artifact.path,
      sourceSha256: artifact.sha256,
      frontmatter: rendered.frontmatter,
      anchorTargets: Object.fromEntries(docAnchors),
      nodes: rendered.inventory,
      pages: mapped,
    });
    documents.push({
      sourcePath: artifact.path,
      sourceSha256: artifact.sha256,
      inventoryPath,
      pages: mapped.length,
      nodes: rendered.inventory.length,
    });
    return { urls, frontmatter: rendered.frontmatter };
  }

  const bundle = readPcrDocumentBundle({ root, pcrId: pcr.id, context: readContext }),
    m = checkedManifest(bundle.manifest),
    slug = slugFor(pcr.path);
  assertManifest(m);
  const downloads = Object.values(bundle.artifacts).map((a) => download(a.path, a.bytes)),
    urls = Object.fromEntries(
      bundle.languages
        .filter((code) => publicLanguage(m, code))
        .map((code) => [code, urlFor(code, ["pcr", ...slug])]),
    );
  const dataPath = "data/" + short(pcr.id) + ".json";
  json(dataPath, { manifest: m, structured: bundle.structured });
  const record: GeneratedRecord = {
    id: pcr.id,
    slug,
    title: m.title,
    status: m.status,
    maturity: m.content_maturity,
    version: m.version ?? null,
    updatedAt: m.updated_at_utc ?? null,
    sourcePath: pcr.path,
    translationStatus: m.translation_status ?? {},
    readiness: pcr.readiness,
    urls,
    pages: {},
    downloads,
    dataPath,
    dataUrl: "/generated/" + dataPath,
    classificationRefs: m.classification_refs ?? [],
    modules: m.modules ?? {},
  };
  for (const language of bundle.languages) {
    const artifact = bundle.artifacts["pcr." + language + ".md"]!;
    validateFrontmatter(bundle, language, parseYaml(/^---\r?\n([\s\S]*?)\r?\n---/u.exec(artifact.text)?.[1] ?? ""));
    if (!publicLanguage(m, language)) continue;
    const indexable = language === "en-US" || ["aligned", "reviewed"].includes(m.translation_status[language]!);
    const alternates = Object.fromEntries(
      bundle.languages
        .filter((code) => code === "en-US" || ["aligned", "reviewed"].includes(m.translation_status[code]!))
        .map((code) => [code, origin + urls[code]]),
    );
    const rendered = renderPcrDocument({
      artifact,
      language,
      slugs: ["pcr", ...slug],
      extra: { kind: "pcr", pcrId: pcr.id, domain: slug[0], subdomain: slug[1], indexable },
      alternates: indexable ? alternates : {},
    });
    validateFrontmatter(bundle, language, rendered.frontmatter);
    record.pages[language] = rendered.urls;
  }
  const history = readPcrDocumentHistory({ root, pcrDir: path.join(root, pcr.path) });
  for (const artifact of Object.values(history.artifacts)) {
    const item = download(path.relative(root, artifact.path).split(path.sep).join("/"), artifact.bytes);
    if (!record.downloads.some((existing) => existing.url === item.url)) record.downloads.push(item);
  }
  record.versions = history.releases.map((release) => ({
    version: release.version,
    urls: Object.fromEntries(release.languages.map((code) => [code, urlFor(code, ["pcr", ...slug, "versions", release.version])])),
  }));
  const historicalRecords: GeneratedRecord[] = [];
  for (const release of history.releases) {
    const releaseManifest = checkedManifest(release.manifest);
    for (const code of release.languages) if (!extraLanguages.includes(code)) extraLanguages.push(code);
    const historicalSlug = ["pcr", ...slug, "versions", release.version];
    const historicalUrls = Object.fromEntries(release.languages.map((code) => [code, urlFor(code, historicalSlug)]));
    const historicalDownloads = Object.values(release.artifacts).map((artifact) =>
      download(path.relative(root, artifact.path).split(path.sep).join("/"), artifact.bytes),
    );
    const historicalDataPath = "data/" + short(pcr.id + "@" + release.version) + ".json";
    json(historicalDataPath, { manifest: release.manifest, structured: release.structured });
    const historical: GeneratedRecord = {
      ...record,
      title: releaseManifest.title,
      status: releaseManifest.status,
      maturity: releaseManifest.content_maturity,
      version: release.version,
      updatedAt: releaseManifest.updated_at_utc ?? null,
      sourcePath: pcr.path + "/releases/" + release.version,
      translationStatus: releaseManifest.translation_status,
      urls: historicalUrls,
      pages: {},
      downloads: historicalDownloads,
      dataPath: historicalDataPath,
      dataUrl: "/generated/" + historicalDataPath,
      classificationRefs: releaseManifest.classification_refs ?? [],
      modules: releaseManifest.modules ?? {},
    };
    for (const code of release.languages) {
      const raw = release.artifacts["pcr." + code + ".md"]!;
      const artifact = { ...raw, path: path.relative(root, raw.path).split(path.sep).join("/") };
      routes.push([artifact.path, historicalUrls[code]!]);
      const rendered = renderPcrDocument({
        artifact,
        language: code,
        slugs: historicalSlug,
        extra: {
          kind: "pcr",
          pcrId: pcr.id,
          recordVersion: release.version,
          currentUrl: urls[code] ?? urls["en-US"],
          currentLanguage: urls[code] ? code : "en-US",
          domain: slug[0],
          subdomain: slug[1],
          indexable: true,
        },
        alternates: Object.fromEntries(release.languages.map((language) => [language, origin + historicalUrls[language]])),
      });
      historical.pages[code] = rendered.urls;
    }
    historicalRecords.push(historical);
  }
  return {
    record,
    historicalRecords,
    pages,
    documents,
    searches,
    anchors,
    routes,
    extraLanguages,
    sourceBindings,
    downloads: downloadsLog,
    summaryCounts,
  };
}
