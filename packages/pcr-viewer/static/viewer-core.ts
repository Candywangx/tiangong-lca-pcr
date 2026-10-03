export type ViewerRecord = Record<string, unknown>;
export interface ViewerManifest extends ViewerRecord {schema_version: number; snapshot_id: string}
export interface CurrentViewerManifest extends ViewerManifest {sequence: number; refs: {catalog_root: string; pcr_entries: Record<string, string>}; capture: ViewerRecord & {ui_bundle_ref: string}}
export interface ViewerObject extends ViewerRecord {schema_version: 1; object_kind: string; entry: ViewerRecord}
export interface CatalogEntry extends ViewerRecord {id: string}
export interface HistoryEntry extends ViewerRecord {sequence: number; manifest_ref: string}
export interface SnapshotRoute extends ViewerRecord {snapshot_id: string; manifest_ref: string; ui_bundle_ref: string; ui_bundle_id: string; ui_bundle_url: string}
export interface ViewerActive extends ViewerRecord {snapshot_id: string; sequence: number; manifest_ref: string; ui_bundle_ref: string; snapshot_url: string}
export interface ViewerSnapshot {manifestRef: string; manifest: ViewerManifest; catalog: CatalogEntry[] | null; active?: ViewerActive}
export interface FetchOptions {cache?: RequestCache; optional?: boolean}
export type FetchJson = (url: string, options: FetchOptions) => unknown | Promise<unknown>;
export function isRecord(value: unknown): value is ViewerRecord {return value !== null && typeof value === "object" && !Array.isArray(value);}
export function field(value: unknown, key: string): unknown {return isRecord(value) ? value[key] : undefined;}
export function record(value: unknown): ViewerRecord {if (!isRecord(value)) throw new TypeError("Expected a Viewer data object."); return value;}
export function records(value: unknown): ViewerRecord[] {if (!Array.isArray(value) || !value.every(isRecord)) throw new TypeError("Expected Viewer object entries."); return value;}
export function text(value: unknown): string {if (typeof value !== "string") throw new TypeError("Expected Viewer text."); return value;}
export function errorMessage(value: unknown): string {return value instanceof Error ? value.message : String(value);}
function catalogEntryValue(value: unknown): CatalogEntry {const item=record(value); if (typeof item.id !== "string") throw new TypeError("Expected Viewer catalog identity."); return item as CatalogEntry;}
function historyEntry(value: unknown): HistoryEntry {const item=record(value); if (typeof item.sequence !== "number" || !Number.isSafeInteger(item.sequence) || typeof item.manifest_ref !== "string" || !SHA256_REF.test(item.manifest_ref)) throw new Error("Invalid Viewer history entry."); return item as HistoryEntry;}

// Version 3 intentionally replaces the singular classification_coverage field with
// coordinate-keyed classification_coverage_summaries. Older generated data must be
// rebuilt together with the static assets instead of being guessed into the new shape.
export const VIEWER_DATA_SCHEMA_VERSION = 3;
export const VIEWER_SNAPSHOT_SCHEMA_VERSION = 1;
const SHA256_REF = /^sha256:[a-f0-9]{64}$/u;
const CATALOG_FETCH_CONCURRENCY = 8;

export function artifactRootFromModuleUrl(moduleUrl: string) {
  const url = new URL(moduleUrl);
  const marker = "/ui/";
  const markerIndex = url.pathname.lastIndexOf(marker);
  if (markerIndex !== -1) {
    const suffix = url.pathname.slice(markerIndex + marker.length).split("/");
    if (suffix.length >= 2 && /^[a-f0-9]{64}$/u.test(suffix[0] ?? "")) {
      url.pathname = `${url.pathname.slice(0, markerIndex + 1)}`;
      url.search = "";
      url.hash = "";
      return url.href;
    }
  }
  return new URL("./", url).href;
}

export function createViewerSnapshotClient({ baseUrl, fetchJson = defaultFetchJson }: {baseUrl?: string; fetchJson?: FetchJson} = {}) {
  const root = new URL(ensureTrailingSlash(baseUrl ?? globalThis.location?.href ?? "http://localhost/"));
  const objectCache = new Map<string, Promise<ViewerObject>>();
  const manifestCache = new Map<string, Promise<ViewerManifest>>();

  const readObject = async (ref: unknown): Promise<ViewerObject> => {
    assertSha256Ref(ref, "Viewer object reference");
    if (!objectCache.has(ref)) {
      objectCache.set(ref, Promise.resolve(fetchJson(
        new URL(`objects/${ref.slice(7)}.json`, root).href,
        { cache: "force-cache" },
      )).then((value) => assertViewerObject(value, ref)));
    }
    const cached = objectCache.get(ref); if (!cached) throw new Error("Viewer object cache insertion failed."); return cached;
  };

  const readManifest = async (ref: unknown): Promise<ViewerManifest> => {
    assertSha256Ref(ref, "Viewer manifest reference");
    if (!manifestCache.has(ref)) {
      manifestCache.set(ref, Promise.resolve(fetchJson(
        new URL(`manifests/${ref.slice(7)}.json`, root).href,
        { cache: "force-cache" },
      )).then(assertViewerManifest));
    }
    const cached = manifestCache.get(ref); if (!cached) throw new Error("Viewer manifest cache insertion failed."); return cached;
  };

  const loadCatalog = async (input: ViewerManifest) => {
    const manifest = assertCurrentViewerManifest(input);
    const catalogRoot = await readObject(manifest.refs.catalog_root);
    if (catalogRoot.object_kind !== "catalog_root") {
      throw new Error("Invalid Viewer snapshot: catalog_root does not reference a catalog root object.");
    }
    const shardRefs = Object.entries(record(catalogRoot.entry.shards)).sort();
    const shards = await mapWithConcurrency(shardRefs, CATALOG_FETCH_CONCURRENCY, async ([prefix, shardRef]) => {
      const shard = await readObject(shardRef);
      if (shard.object_kind !== "catalog_shard" || shard.entry.prefix !== prefix) {
        throw new Error(`Invalid Viewer snapshot: catalog shard ${prefix} is inconsistent.`);
      }
      return records(shard.entry.entries);
    });
    const indexedEntries = shards.flat();
    const entries = await mapWithConcurrency(indexedEntries, CATALOG_FETCH_CONCURRENCY, async (item) => {
      const catalogEntry = await readObject(item.object_ref);
      if (catalogEntry.object_kind !== "catalog_entry" || catalogEntry.entry.id !== item.id) {
        throw new Error(`Invalid Viewer snapshot: catalog entry ${item.id} is inconsistent.`);
      }
      return catalogEntryValue(catalogEntry.entry);
    });
    return entries.sort((left, right) => left.id.localeCompare(right.id));
  };

  const loadSnapshotByManifest = async (manifestRef: string, { withCatalog = true }: {withCatalog?: boolean} = {}): Promise<ViewerSnapshot> => {
    const manifest = await readManifest(manifestRef);
    return {
      manifestRef,
      manifest,
      catalog: withCatalog ? await loadCatalog(manifest) : null,
    };
  };

  return Object.freeze({
    async loadInitialSnapshot({ withCatalog = true } = {}) {
      const active = assertViewerActive(await fetchJson(
        new URL("active.json", root).href,
        { cache: "no-cache" },
      ));
      const snapshot = await loadSnapshotByManifest(active.manifest_ref, { withCatalog });
      if (snapshot.manifest.snapshot_id !== active.snapshot_id) {
        throw new Error("Invalid Viewer snapshot: active pointer does not match its manifest.");
      }
      if (
        snapshot.manifest.schema_version === VIEWER_SNAPSHOT_SCHEMA_VERSION &&
        (snapshot.manifest.sequence !== active.sequence ||
          field(snapshot.manifest.capture, "ui_bundle_ref") !== active.ui_bundle_ref)
      ) throw new Error("Invalid Viewer snapshot: active pointer does not match its manifest.");
      return { ...snapshot, active };
    },
    loadSnapshotByManifest,
    async loadSnapshotRoute(manifestRef: string, snapshotUrl = `routes/${String(manifestRef).slice(7)}.json`) {
      assertSha256Ref(manifestRef, "Viewer route manifest reference");
      if (snapshotUrl !== `routes/${manifestRef.slice(7)}.json`) {
        throw new Error("Invalid Viewer snapshot route URL.");
      }
      return assertSnapshotRoute(await fetchJson(
        new URL(snapshotUrl, root).href,
        { cache: "force-cache" },
      ), manifestRef);
    },
    async loadPcrDetail(snapshot: ViewerSnapshot | null, pcrId: string) {
      const ref = field(field(snapshot?.manifest.refs, "pcr_entries"), pcrId);
      if (!ref) throw new Error(`PCR is not present in this Viewer snapshot: ${pcrId}.`);
      const detail = await readObject(ref);
      if (detail.object_kind !== "pcr_detail" || detail.entry.id !== pcrId) {
        throw new Error(`Invalid Viewer snapshot: PCR detail ${pcrId} is inconsistent.`);
      }
      return detail;
    },
    async loadUiBundle(manifest: ViewerManifest) {
      const bundle = await readObject(field(manifest.capture, "ui_bundle_ref"));
      if (bundle.object_kind !== "ui_bundle") {
        throw new Error("Invalid Viewer snapshot: compatible UI reference is not a UI bundle.");
      }
      return bundle;
    },
    async loadHistory() {
      const head = record(await fetchJson(new URL("history-head.json", root).href, { cache: "no-cache" }));
      if (head?.kind !== "viewer-history-head" || (typeof head.latest_sequence !== "number" || !Number.isSafeInteger(head.latest_sequence))) {
        throw new Error("Invalid Viewer history head.");
      }
      const latestSequence = head.latest_sequence;
      const entries: HistoryEntry[] = [];
      const seen = new Set<unknown>();
      let pageRef = head.page_ref;
      while (pageRef) {
        if (seen.has(pageRef)) throw new Error("Invalid Viewer history: page cycle detected.");
        seen.add(pageRef);
        const page = await readObject(pageRef);
        if (page.object_kind !== "history_page" || !Array.isArray(page.entry.entries)) {
          throw new Error("Invalid Viewer history page.");
        }
        for (const rawEntry of page.entry.entries.toReversed()) {
          const entry = historyEntry(rawEntry);
          if (!Number.isSafeInteger(entry?.sequence) || !SHA256_REF.test(String(entry?.manifest_ref))) {
            throw new Error("Invalid Viewer history entry.");
          }
          entries.push(entry);
        }
        pageRef = page.entry.previous_page_ref;
      }
      if (
        entries[0]?.sequence !== head.latest_sequence ||
        entries.some((entry, index) => entry.sequence !== latestSequence - index)
      ) {
        throw new Error("Invalid Viewer history sequence.");
      }
      return entries;
    },
    async loadProvenance(snapshotId: string) {
      try {
        return await fetchJson(
          new URL(`provenance/${encodeURIComponent(snapshotId)}.json`, root).href,
          { cache: "no-cache", optional: true },
        );
      } catch (error) {
        if (field(error, "status") === 404) return null;
        throw error;
      }
    },
  });
}

export interface SelectionOptions<Snapshot, Detail> {
  loadDetail: (snapshot: Snapshot, pcrId: string) => Detail | Promise<Detail>;
  onBegin: (pcrId: string) => unknown;
  onSuccess: (pcrId: string, detail: Detail) => unknown;
  onError: (pcrId: string, error: unknown) => unknown;
  onSettled: (pcrId: string) => unknown;
}
export function createPcrSelectionLoader<Snapshot, Detail>({loadDetail, onBegin, onSuccess, onError, onSettled}: Partial<SelectionOptions<Snapshot, Detail>> = {}) {
  if (typeof loadDetail !== "function" || typeof onBegin !== "function" || typeof onSuccess !== "function" || typeof onError !== "function" || typeof onSettled !== "function") throw new TypeError("Selection callbacks must be functions.");
  let latestToken = 0;
  return async (snapshot: Snapshot, pcrId: string) => {
    const token = ++latestToken;
    onBegin(pcrId);
    try {
      const detail = await loadDetail(snapshot, pcrId);
      if (token === latestToken) onSuccess(pcrId, detail);
    } catch (error) {
      if (token === latestToken) onError(pcrId, error);
    } finally {
      if (token === latestToken) onSettled(pcrId);
    }
  };
}

async function mapWithConcurrency<Item, Result>(items: readonly Item[], limit: number, mapper: (item: Item, index: number) => Result | Promise<Result>): Promise<Result[]> {
  if (items.length === 0) return [];
  const results = new Array<Result>(items.length);
  let nextIndex = 0;
  const worker = async () => {
    while (nextIndex < items.length) {
      const index = nextIndex;
      nextIndex += 1;
      results[index] = await mapper(items[index]!, index);
    }
  };
  await Promise.all(Array.from({ length: Math.min(limit, items.length) }, () => worker()));
  return results;
}

export function stableSnapshotUrl({ baseUrl, manifestRef, manifest, uiBundle }: {baseUrl: string; manifestRef: string; manifest: ViewerManifest; uiBundle: ViewerObject}) {
  assertSha256Ref(manifestRef, "Viewer manifest reference");
  if (uiBundle?.object_kind !== "ui_bundle" || !SHA256_REF.test(String(uiBundle.entry?.id ?? ""))) {
    throw new Error("Invalid Viewer compatible UI bundle.");
  }
  const assetUrl = String(uiBundle.entry.asset_url ?? "");
  if (!/^ui\/[a-f0-9]{64}\/$/u.test(assetUrl)) {
    throw new Error("Invalid Viewer compatible UI asset URL.");
  }
  const url = new URL(`${assetUrl}index.html`, new URL(ensureTrailingSlash(baseUrl)));
  url.searchParams.set("snapshot", manifest.snapshot_id);
  url.searchParams.set("manifest", manifestRef);
  url.searchParams.set("ui", text(uiBundle.entry.id));
  return url.href;
}

export function snapshotRouteUrl({ baseUrl, route }: {baseUrl: string; route: unknown}) {
  const checked = assertSnapshotRoute(route, field(route, "manifest_ref"));
  const url = new URL(`${checked.ui_bundle_url}index.html`, new URL(ensureTrailingSlash(baseUrl)));
  url.searchParams.set("snapshot", checked.snapshot_id);
  url.searchParams.set("manifest", checked.manifest_ref);
  url.searchParams.set("ui", checked.ui_bundle_id);
  return url.href;
}

export function describeSnapshotCapture(manifest: unknown = {}, provenance: unknown = null) {
  const capture = field(field(manifest, "capture"), "validation_state") === "validated"
    ? "Captured after validation"
    : "Capture state unknown";
  if (field(provenance, "landing_state") === "landed" && typeof field(provenance, "landed_at") === "string") {
    return `${capture} · landed ${field(provenance, "landed_at")}`;
  }
  return `${capture} · landing unknown`;
}

function assertViewerActive(input: unknown): ViewerActive {
  const active = record(input);
  if (
    active?.kind !== "viewer-active" ||
    active.schema_version !== 1 ||
    typeof active.snapshot_id !== "string" ||
    (typeof active.sequence !== "number" || !Number.isSafeInteger(active.sequence))
  ) {
    throw new Error("Invalid Viewer active pointer.");
  }
  assertSha256Ref(active.manifest_ref, "Viewer active manifest reference");
  assertSha256Ref(active.ui_bundle_ref, "Viewer active UI bundle reference");
  if (active.snapshot_url !== `routes/${active.manifest_ref.slice(7)}.json`) {
    throw new Error("Invalid Viewer active snapshot route URL.");
  }
  return active as ViewerActive;
}

function assertViewerManifest(input: unknown): ViewerManifest {
  const manifest = record(input);
  if (
    manifest?.kind !== "viewer-snapshot-manifest" ||
    typeof manifest.schema_version !== "number" || !Number.isSafeInteger(manifest.schema_version) ||
    manifest.schema_version < 0 ||
    typeof manifest.snapshot_id !== "string"
  ) {
    throw new Error("Invalid Viewer snapshot routing metadata.");
  }
  return manifest as ViewerManifest;
}

function assertCurrentViewerManifest(manifest: ViewerManifest): CurrentViewerManifest {
  const refs = record(manifest.refs), capture = record(manifest.capture);
  if (manifest.schema_version !== VIEWER_SNAPSHOT_SCHEMA_VERSION || typeof manifest.sequence !== "number" || !Number.isSafeInteger(manifest.sequence)) throw new Error("Invalid current Viewer snapshot manifest.");
  assertSha256Ref(refs.catalog_root, "Viewer catalog root");
  const pcrEntries = record(refs.pcr_entries);
  for (const ref of Object.values(pcrEntries)) assertSha256Ref(ref, "Viewer PCR entry");
  assertSha256Ref(capture.ui_bundle_ref, "Viewer compatible UI bundle");
  return manifest as CurrentViewerManifest;
}
function assertViewerObject(input: unknown, ref: string): ViewerObject {
  const value = record(input);
  if (value.schema_version !== 1 || typeof value.object_kind !== "string" || !isRecord(value.entry)) throw new Error(`Invalid Viewer object at ${ref}.`);
  return value as ViewerObject;
}

function assertSnapshotRoute(input: unknown, manifestRef: unknown): SnapshotRoute {
  assertSha256Ref(manifestRef, "Viewer route manifest reference");
  const route = record(input);
  const keys = Object.keys(route ?? {}).sort();
  const expected = [
    "routing_schema_version", "kind", "snapshot_id", "manifest_ref",
    "manifest_schema_version", "ui_bundle_ref", "ui_bundle_id", "ui_bundle_url",
  ].sort();
  if (
    JSON.stringify(keys) !== JSON.stringify(expected) ||
    route.routing_schema_version !== 1 ||
    route.kind !== "viewer-snapshot-route" ||
    route.manifest_ref !== manifestRef ||
    typeof route.snapshot_id !== "string" || !route.snapshot_id ||
    typeof route.manifest_schema_version !== "number" || !Number.isSafeInteger(route.manifest_schema_version) || route.manifest_schema_version < 0 ||
    (typeof route.ui_bundle_ref !== "string" || !SHA256_REF.test(route.ui_bundle_ref)) ||
    (typeof route.ui_bundle_id !== "string" || !SHA256_REF.test(route.ui_bundle_id)) ||
    route.ui_bundle_url !== `ui/${route.ui_bundle_id.slice(7)}/`
  ) {
    throw new Error("Invalid Viewer snapshot routing envelope.");
  }
  return route as SnapshotRoute;
}

function assertSha256Ref(ref: unknown, label: string): asserts ref is string {
  if (typeof ref !== "string" || !SHA256_REF.test(ref)) throw new Error(`${label} is invalid.`);
}

function ensureTrailingSlash(value: string) {
  const url = new URL(value);
  if (!url.pathname.endsWith("/")) url.pathname = `${url.pathname}/`;
  return url.href;
}

async function defaultFetchJson(url: string, options: FetchOptions): Promise<unknown> {
  const response = await fetch(url, options.cache ? { cache: options.cache } : {});
  if (!response.ok) {
    const error = Object.assign(new Error(`Unable to load Viewer artifact: HTTP ${response.status}.`), {status: response.status});
    throw error;
  }
  return response.json();
}

export function assertViewerDataContract(input: unknown) {
  const data = record(input);
  if (data?.schema_version !== VIEWER_DATA_SCHEMA_VERSION) {
    throw new Error(
      `Unsupported PCR viewer data schema version: ${String(data?.schema_version ?? "missing")}. Expected ${VIEWER_DATA_SCHEMA_VERSION}. Rebuild viewer data and static assets together.`,
    );
  }
  if (data.viewer_kind !== "tiangong-pcr-static-viewer-data") {
    throw new Error(`Unsupported PCR viewer data kind: ${String(data.viewer_kind ?? "missing")}.`);
  }
  if (!Array.isArray(data.pcrs)) {
    throw new Error("Invalid PCR viewer data: pcrs must be an array.");
  }
  if (data.pcr_count !== data.pcrs.length) {
    throw new Error("Invalid PCR viewer data: pcr_count must match the pcrs array length.");
  }
  if ((typeof data.catalog_scope !== "string" || !["all", "material", "legacy"].includes(data.catalog_scope))) {
    throw new Error(`Invalid PCR viewer catalog scope: ${String(data.catalog_scope ?? "missing")}.`);
  }
  if (
    !Array.isArray(data.classification_coverage_summaries) ||
    data.classification_coverage_summaries.length === 0
  ) {
    throw new Error(
      "Invalid PCR viewer data: classification_coverage_summaries must be a non-empty array.",
    );
  }
  const seenCoordinates = new Set<string>();
  const seenIndexPaths = new Set<string>();
  for (const coverage of data.classification_coverage_summaries) {
    assertCoverageSummaryContract(coverage, { seenCoordinates, seenIndexPaths });
  }
  return data;
}

function assertCoverageSummaryContract(input: unknown, { seenCoordinates, seenIndexPaths }: {seenCoordinates: Set<string>; seenIndexPaths: Set<string>}) {
  const coverage = record(input), coordinate = coverage.coordinate;
  const system = field(coordinate, "system"), version = field(coordinate, "version");
  if (
    typeof system !== "string" ||
    !/^[a-z0-9][a-z0-9_-]*$/u.test(system) ||
    typeof version !== "string" ||
    !/^[A-Za-z0-9][A-Za-z0-9._-]*$/u.test(version)
  ) {
    throw new Error("Invalid PCR viewer data: coverage summary has an invalid coordinate.");
  }

  const coordinateKey = `${system}:${version}`;
  if (seenCoordinates.has(coordinateKey)) {
    throw new Error(`Invalid PCR viewer data: duplicate coverage coordinate ${coordinateKey}.`);
  }
  seenCoordinates.add(coordinateKey);

  if (
    coverage.schema_version !== 1 ||
    coverage.index_kind !== "classification-pcr-coverage" ||
    String(coverage.classification_system ?? "").toLowerCase() !== system ||
    String(coverage.classification_version ?? "") !== version
  ) {
    throw new Error(
      `Invalid PCR viewer data: coverage summary metadata does not match ${coordinateKey}.`,
    );
  }
  const expectedIndexPath = `classifications/indexes/${system}-${version}-coverage.json`;
  if (coverage.index_path !== expectedIndexPath || seenIndexPaths.has(coverage.index_path)) {
    throw new Error(
      `Invalid PCR viewer data: coverage summary ${coordinateKey} has an invalid or duplicate index_path.`,
    );
  }
  seenIndexPaths.add(coverage.index_path);

  if (coverage.entries_inlined !== false || Object.hasOwn(coverage, "entries")) {
    throw new Error(
      `Invalid PCR viewer data: coverage summary ${coordinateKey} must not inline entries.`,
    );
  }
  const statusKeys = [
    "mapped",
    "unmapped",
    "candidate_suggestion",
    "manual_review",
    "unknown",
  ];
  const summary = record(coverage.summary);
  if (
    typeof summary.total !== "number" ||
    !Number.isInteger(summary.total) ||
    summary.total < 0 ||
    statusKeys.some(
      (key) => typeof summary[key] !== "number" || !Number.isInteger(summary[key]) || summary[key] < 0,
    ) ||
    statusKeys.reduce((total, key) => total + Number(summary[key]), 0) !==
      summary.total
  ) {
    throw new Error(
      `Invalid PCR viewer data: coverage summary ${coordinateKey} has inconsistent counts.`,
    );
  }
}

export function formatCoverageSummary(coverage: unknown = {}) {
  const system = field(coverage, "classification_system") ?? field(field(coverage, "coordinate"), "system") ?? "unknown";
  const version = field(coverage, "classification_version") ?? field(field(coverage, "coordinate"), "version") ?? "unknown";
  const mapped = field(field(coverage, "summary"), "mapped") ?? 0;
  const total = field(field(coverage, "summary"), "total") ?? 0;
  return `${system} ${version} · ${mapped}/${total} classification leaves mapped`;
}

export function filterPcrs<Pcr extends ViewerRecord>(pcrs: readonly Pcr[], { query = "", status = "", maturity = "" }: {query?: string; status?: string; maturity?: string} = {}) {
  const normalizedQuery = normalize(query);
  return pcrs.filter((pcr) => {
    if (status && pcr.status !== status) {
      return false;
    }
    if (maturity && pcr.content_maturity !== maturity) {
      return false;
    }
    if (!normalizedQuery) {
      return true;
    }
    return normalize(pcr.search_text).includes(normalizedQuery);
  });
}

export function summarizeGuidance(guidance: unknown = {}) {
  const size = (value: unknown) => Array.isArray(value) ? value.length : 0;
  const reference = field(guidance, "reference_flow"), production = field(guidance, "production_guidance");
  return {
    reference_unit: field(reference, "reference_unit") ?? "",
    required_qualifier_count: size(field(reference, "required_qualifiers")),
    process_count: size(field(guidance, "process_map")),
    inventory_process_count: size(field(guidance, "process_inventory")),
    collection_protocol_count: size(field(production, "collection_protocols")),
    calculation_rule_count: size(field(production, "calculation_rules")),
    data_quality_requirement_count: size(field(production, "data_quality_requirements")),
    data_source_count: size(field(guidance, "data_sources")),
  };
}
export function describeReadiness(readiness: unknown = {}) {
  const status = String(field(readiness, "status") ?? "unknown");
  const tones: Record<string, string> = {ready: "ready", review_required: "review", unavailable: "unavailable"};
  return {status, tone: tones[status] ?? "unknown"};
}

export function renderMarkdown(markdown = "") {
  const lines = markdown.split(/\r?\n/u);
  const html: string[] = [];
  let paragraph: string[] = [];
  let listItems: string[] = [];
  let codeLines: string[] = [];
  let tableRows: string[] = [];
  let inCode = false;

  const flushParagraph = () => {
    if (paragraph.length > 0) {
      html.push(`<p>${paragraph.map(renderInlineMarkdown).join(" ")}</p>`);
      paragraph = [];
    }
  };
  const flushList = () => {
    if (listItems.length > 0) {
      html.push(`<ul>${listItems.map((item) => `<li>${renderInlineMarkdown(item)}</li>`).join("")}</ul>`);
      listItems = [];
    }
  };
  const flushCode = () => {
    if (codeLines.length > 0) {
      html.push(`<pre><code>${escapeHtml(codeLines.join("\n"))}</code></pre>`);
      codeLines = [];
    }
  };
  const flushTable = () => {
    if (tableRows.length > 0) {
      html.push(renderTable(tableRows));
      tableRows = [];
    }
  };
  const flushBlocks = () => {
    flushParagraph();
    flushList();
    flushTable();
  };

  for (const line of lines) {
    if (line.trim().startsWith("```")) {
      if (inCode) {
        inCode = false;
        flushCode();
      } else {
        flushBlocks();
        inCode = true;
      }
      continue;
    }
    if (inCode) {
      codeLines.push(line);
      continue;
    }
    if (!line.trim()) {
      flushBlocks();
      continue;
    }
    if (/^\|.*\|$/u.test(line.trim())) {
      flushParagraph();
      flushList();
      tableRows.push(line);
      continue;
    }
    flushTable();
    const heading = /^(#{1,})\s+(.+)$/u.exec(line);
    if (heading) {
      flushParagraph();
      flushList();
      const level = Math.min((heading[1] ?? "").length, 6);
      html.push(`<h${level}>${renderInlineMarkdown(stripClosingHeadingMarkers(heading[2]))}</h${level}>`);
      continue;
    }
    const list = /^\s*[-*+]\s+(.+)$/u.exec(line);
    if (list) {
      flushParagraph();
      listItems.push(list[1] ?? "");
      continue;
    }
    paragraph.push(line.trim());
  }

  if (inCode) {
    flushCode();
  }
  flushBlocks();
  return html.join("\n");
}

export function escapeHtml(value: unknown) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;");
}

function renderInlineMarkdown(value = "") {
  const parts = String(value).split(/(`[^`]+`)/u);
  return parts
    .map((part) => {
      if (/^`[^`]+`$/u.test(part)) {
        return `<code>${escapeHtml(part.slice(1, -1))}</code>`;
      }
      return escapeHtml(part);
    })
    .join("");
}

function stripClosingHeadingMarkers(value: unknown) {
  return String(value).replace(/\s+#+\s*$/u, "").trim();
}

function renderTable(rows: string[]) {
  const parsed = rows
    .filter((row) => !/^\|\s*:?-{3,}:?\s*(\|\s*:?-{3,}:?\s*)+\|?$/u.test(row))
    .map((row) => row.split("|").slice(1, -1).map((cell) => cell.trim()));
  if (parsed.length === 0) {
    return "";
  }
  const [header = [], ...body] = parsed;
  return `<table><thead><tr>${header.map((cell) => `<th>${renderInlineMarkdown(cell)}</th>`).join("")}</tr></thead><tbody>${body
    .map((row) => `<tr>${row.map((cell) => `<td>${renderInlineMarkdown(cell)}</td>`).join("")}</tr>`)
    .join("")}</tbody></table>`;
}

function normalize(value: unknown = "") {
  return String(value).toLowerCase().trim();
}
