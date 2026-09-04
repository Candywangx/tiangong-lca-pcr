// Version 3 intentionally replaces the singular classification_coverage field with
// coordinate-keyed classification_coverage_summaries. Older generated data must be
// rebuilt together with the static assets instead of being guessed into the new shape.
export const VIEWER_DATA_SCHEMA_VERSION = 3;
export const VIEWER_SNAPSHOT_SCHEMA_VERSION = 1;
const SHA256_REF = /^sha256:[a-f0-9]{64}$/u;

export function artifactRootFromModuleUrl(moduleUrl) {
  const url = new URL(moduleUrl);
  const marker = "/ui/";
  const markerIndex = url.pathname.lastIndexOf(marker);
  if (markerIndex !== -1) {
    const suffix = url.pathname.slice(markerIndex + marker.length).split("/");
    if (suffix.length >= 2 && /^[a-f0-9]{64}$/u.test(suffix[0])) {
      url.pathname = `${url.pathname.slice(0, markerIndex + 1)}`;
      url.search = "";
      url.hash = "";
      return url.href;
    }
  }
  return new URL("./", url).href;
}

export function createViewerSnapshotClient({ baseUrl, fetchJson = defaultFetchJson } = {}) {
  const root = new URL(ensureTrailingSlash(baseUrl ?? globalThis.location?.href ?? "http://localhost/"));
  const objectCache = new Map();
  const manifestCache = new Map();

  const readObject = async (ref) => {
    assertSha256Ref(ref, "Viewer object reference");
    if (!objectCache.has(ref)) {
      objectCache.set(ref, Promise.resolve(fetchJson(
        new URL(`objects/${ref.slice(7)}.json`, root).href,
        { cache: "force-cache" },
      )).then((value) => assertViewerObject(value, ref)));
    }
    return objectCache.get(ref);
  };

  const readManifest = async (ref) => {
    assertSha256Ref(ref, "Viewer manifest reference");
    if (!manifestCache.has(ref)) {
      manifestCache.set(ref, Promise.resolve(fetchJson(
        new URL(`manifests/${ref.slice(7)}.json`, root).href,
        { cache: "force-cache" },
      )).then(assertViewerManifest));
    }
    return manifestCache.get(ref);
  };

  const loadCatalog = async (manifest) => {
    assertCurrentViewerManifest(manifest);
    const catalogRoot = await readObject(manifest.refs.catalog_root);
    if (catalogRoot.object_kind !== "catalog_root") {
      throw new Error("Invalid Viewer snapshot: catalog_root does not reference a catalog root object.");
    }
    const entries = [];
    for (const [prefix, shardRef] of Object.entries(catalogRoot.entry.shards).sort()) {
      const shard = await readObject(shardRef);
      if (shard.object_kind !== "catalog_shard" || shard.entry.prefix !== prefix) {
        throw new Error(`Invalid Viewer snapshot: catalog shard ${prefix} is inconsistent.`);
      }
      for (const item of shard.entry.entries) {
        const catalogEntry = await readObject(item.object_ref);
        if (catalogEntry.object_kind !== "catalog_entry" || catalogEntry.entry.id !== item.id) {
          throw new Error(`Invalid Viewer snapshot: catalog entry ${item.id} is inconsistent.`);
        }
        entries.push(catalogEntry.entry);
      }
    }
    return entries.sort((left, right) => left.id.localeCompare(right.id));
  };

  const loadSnapshotByManifest = async (manifestRef, { withCatalog = true } = {}) => {
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
          snapshot.manifest.capture?.ui_bundle_ref !== active.ui_bundle_ref)
      ) throw new Error("Invalid Viewer snapshot: active pointer does not match its manifest.");
      return { ...snapshot, active };
    },
    loadSnapshotByManifest,
    async loadSnapshotRoute(manifestRef, snapshotUrl = `routes/${String(manifestRef).slice(7)}.json`) {
      assertSha256Ref(manifestRef, "Viewer route manifest reference");
      if (snapshotUrl !== `routes/${manifestRef.slice(7)}.json`) {
        throw new Error("Invalid Viewer snapshot route URL.");
      }
      return assertSnapshotRoute(await fetchJson(
        new URL(snapshotUrl, root).href,
        { cache: "force-cache" },
      ), manifestRef);
    },
    async loadPcrDetail(snapshot, pcrId) {
      const ref = snapshot?.manifest?.refs?.pcr_entries?.[pcrId];
      if (!ref) throw new Error(`PCR is not present in this Viewer snapshot: ${pcrId}.`);
      const detail = await readObject(ref);
      if (detail.object_kind !== "pcr_detail" || detail.entry.id !== pcrId) {
        throw new Error(`Invalid Viewer snapshot: PCR detail ${pcrId} is inconsistent.`);
      }
      return detail;
    },
    async loadUiBundle(manifest) {
      const bundle = await readObject(manifest?.capture?.ui_bundle_ref);
      if (bundle.object_kind !== "ui_bundle") {
        throw new Error("Invalid Viewer snapshot: compatible UI reference is not a UI bundle.");
      }
      return bundle;
    },
    async loadHistory() {
      const head = await fetchJson(new URL("history-head.json", root).href, { cache: "no-cache" });
      if (head?.kind !== "viewer-history-head" || !Number.isSafeInteger(head.latest_sequence)) {
        throw new Error("Invalid Viewer history head.");
      }
      const entries = [];
      const seen = new Set();
      let pageRef = head.page_ref;
      while (pageRef) {
        if (seen.has(pageRef)) throw new Error("Invalid Viewer history: page cycle detected.");
        seen.add(pageRef);
        const page = await readObject(pageRef);
        if (page.object_kind !== "history_page" || !Array.isArray(page.entry.entries)) {
          throw new Error("Invalid Viewer history page.");
        }
        for (const entry of page.entry.entries.toReversed()) {
          if (!Number.isSafeInteger(entry?.sequence) || !SHA256_REF.test(String(entry?.manifest_ref))) {
            throw new Error("Invalid Viewer history entry.");
          }
          entries.push(entry);
        }
        pageRef = page.entry.previous_page_ref;
      }
      if (
        entries[0]?.sequence !== head.latest_sequence ||
        entries.some((entry, index) => entry.sequence !== head.latest_sequence - index)
      ) {
        throw new Error("Invalid Viewer history sequence.");
      }
      return entries;
    },
    async loadProvenance(snapshotId) {
      try {
        return await fetchJson(
          new URL(`provenance/${encodeURIComponent(snapshotId)}.json`, root).href,
          { cache: "no-cache", optional: true },
        );
      } catch (error) {
        if (error?.status === 404) return null;
        throw error;
      }
    },
  });
}

export function stableSnapshotUrl({ baseUrl, manifestRef, manifest, uiBundle }) {
  assertSha256Ref(manifestRef, "Viewer manifest reference");
  if (uiBundle?.object_kind !== "ui_bundle" || !SHA256_REF.test(uiBundle.entry?.id ?? "")) {
    throw new Error("Invalid Viewer compatible UI bundle.");
  }
  const assetUrl = String(uiBundle.entry.asset_url ?? "");
  if (!/^ui\/[a-f0-9]{64}\/$/u.test(assetUrl)) {
    throw new Error("Invalid Viewer compatible UI asset URL.");
  }
  const url = new URL(`${assetUrl}index.html`, new URL(ensureTrailingSlash(baseUrl)));
  url.searchParams.set("snapshot", manifest.snapshot_id);
  url.searchParams.set("manifest", manifestRef);
  url.searchParams.set("ui", uiBundle.entry.id);
  return url.href;
}

export function snapshotRouteUrl({ baseUrl, route }) {
  const checked = assertSnapshotRoute(route, route?.manifest_ref);
  const url = new URL(`${checked.ui_bundle_url}index.html`, new URL(ensureTrailingSlash(baseUrl)));
  url.searchParams.set("snapshot", checked.snapshot_id);
  url.searchParams.set("manifest", checked.manifest_ref);
  url.searchParams.set("ui", checked.ui_bundle_id);
  return url.href;
}

export function describeSnapshotCapture(manifest = {}, provenance = null) {
  const capture = manifest.capture?.validation_state === "validated"
    ? "Captured after validation"
    : "Capture state unknown";
  if (provenance?.landing_state === "landed" && typeof provenance.landed_at === "string") {
    return `${capture} · landed ${provenance.landed_at}`;
  }
  return `${capture} · landing unknown`;
}

function assertViewerActive(active) {
  if (
    active?.kind !== "viewer-active" ||
    active.schema_version !== 1 ||
    typeof active.snapshot_id !== "string" ||
    !Number.isSafeInteger(active.sequence)
  ) {
    throw new Error("Invalid Viewer active pointer.");
  }
  assertSha256Ref(active.manifest_ref, "Viewer active manifest reference");
  assertSha256Ref(active.ui_bundle_ref, "Viewer active UI bundle reference");
  if (active.snapshot_url !== `routes/${active.manifest_ref.slice(7)}.json`) {
    throw new Error("Invalid Viewer active snapshot route URL.");
  }
  return active;
}

function assertViewerManifest(manifest) {
  if (
    manifest?.kind !== "viewer-snapshot-manifest" ||
    !Number.isSafeInteger(manifest.schema_version) ||
    manifest.schema_version < 0 ||
    typeof manifest.snapshot_id !== "string"
  ) {
    throw new Error("Invalid Viewer snapshot routing metadata.");
  }
  return manifest;
}

function assertCurrentViewerManifest(manifest) {
  if (
    manifest.schema_version !== VIEWER_SNAPSHOT_SCHEMA_VERSION ||
    !Number.isSafeInteger(manifest.sequence) ||
    !manifest.refs ||
    !manifest.capture
  ) {
    throw new Error("Invalid current Viewer snapshot manifest.");
  }
  return manifest;
}

function assertViewerObject(value, ref) {
  if (value?.schema_version !== 1 || typeof value.object_kind !== "string" || !value.entry) {
    throw new Error(`Invalid Viewer object at ${ref}.`);
  }
  return value;
}

function assertSnapshotRoute(route, manifestRef) {
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
    !Number.isSafeInteger(route.manifest_schema_version) || route.manifest_schema_version < 0 ||
    !SHA256_REF.test(route.ui_bundle_ref) ||
    !SHA256_REF.test(route.ui_bundle_id) ||
    route.ui_bundle_url !== `ui/${route.ui_bundle_id.slice(7)}/`
  ) {
    throw new Error("Invalid Viewer snapshot routing envelope.");
  }
  return route;
}

function assertSha256Ref(ref, label) {
  if (!SHA256_REF.test(String(ref))) throw new Error(`${label} is invalid.`);
}

function ensureTrailingSlash(value) {
  const url = new URL(value);
  if (!url.pathname.endsWith("/")) url.pathname = `${url.pathname}/`;
  return url.href;
}

async function defaultFetchJson(url, options) {
  const response = await fetch(url, { cache: options?.cache });
  if (!response.ok) {
    const error = new Error(`Unable to load Viewer artifact: HTTP ${response.status}.`);
    error.status = response.status;
    throw error;
  }
  return response.json();
}

export function assertViewerDataContract(data) {
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
  if (!["all", "material", "legacy"].includes(data.catalog_scope)) {
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
  const seenCoordinates = new Set();
  const seenIndexPaths = new Set();
  for (const coverage of data.classification_coverage_summaries) {
    assertCoverageSummaryContract(coverage, { seenCoordinates, seenIndexPaths });
  }
  return data;
}

function assertCoverageSummaryContract(coverage, { seenCoordinates, seenIndexPaths }) {
  const coordinate = coverage?.coordinate;
  const system = coordinate?.system;
  const version = coordinate?.version;
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
  if (
    !coverage.summary ||
    !Number.isInteger(coverage.summary.total) ||
    coverage.summary.total < 0 ||
    statusKeys.some(
      (key) => !Number.isInteger(coverage.summary[key]) || coverage.summary[key] < 0,
    ) ||
    statusKeys.reduce((total, key) => total + coverage.summary[key], 0) !==
      coverage.summary.total
  ) {
    throw new Error(
      `Invalid PCR viewer data: coverage summary ${coordinateKey} has inconsistent counts.`,
    );
  }
}

export function formatCoverageSummary(coverage = {}) {
  const system = coverage.classification_system ?? coverage.coordinate?.system ?? "unknown";
  const version = coverage.classification_version ?? coverage.coordinate?.version ?? "unknown";
  const mapped = coverage.summary?.mapped ?? 0;
  const total = coverage.summary?.total ?? 0;
  return `${system} ${version} · ${mapped}/${total} classification leaves mapped`;
}

export function filterPcrs(pcrs, { query = "", status = "", maturity = "" } = {}) {
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

export function summarizeGuidance(guidance = {}) {
  return {
    reference_unit: guidance.reference_flow?.reference_unit ?? "",
    required_qualifier_count: guidance.reference_flow?.required_qualifiers?.length ?? 0,
    process_count: guidance.process_map?.length ?? 0,
    inventory_process_count: guidance.process_inventory?.length ?? 0,
    collection_protocol_count: guidance.production_guidance?.collection_protocols?.length ?? 0,
    calculation_rule_count: guidance.production_guidance?.calculation_rules?.length ?? 0,
    data_quality_requirement_count: guidance.production_guidance?.data_quality_requirements?.length ?? 0,
    data_source_count: guidance.data_sources?.length ?? 0,
  };
}

export function describeReadiness(readiness = {}) {
  const status = String(readiness?.status ?? "unknown");
  const tone = {
    ready: "ready",
    review_required: "review",
    unavailable: "unavailable",
  }[status] ?? "unknown";
  return { status, tone };
}

export function renderMarkdown(markdown = "") {
  const lines = markdown.split(/\r?\n/u);
  const html = [];
  let paragraph = [];
  let listItems = [];
  let codeLines = [];
  let tableRows = [];
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
      const level = Math.min(heading[1].length, 6);
      html.push(`<h${level}>${renderInlineMarkdown(stripClosingHeadingMarkers(heading[2]))}</h${level}>`);
      continue;
    }
    const list = /^\s*[-*+]\s+(.+)$/u.exec(line);
    if (list) {
      flushParagraph();
      listItems.push(list[1]);
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

export function escapeHtml(value) {
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

function stripClosingHeadingMarkers(value) {
  return String(value).replace(/\s+#+\s*$/u, "").trim();
}

function renderTable(rows) {
  const parsed = rows
    .filter((row) => !/^\|\s*:?-{3,}:?\s*(\|\s*:?-{3,}:?\s*)+\|?$/u.test(row))
    .map((row) => row.split("|").slice(1, -1).map((cell) => cell.trim()));
  if (parsed.length === 0) {
    return "";
  }
  const [header, ...body] = parsed;
  return `<table><thead><tr>${header.map((cell) => `<th>${renderInlineMarkdown(cell)}</th>`).join("")}</tr></thead><tbody>${body
    .map((row) => `<tr>${row.map((cell) => `<td>${renderInlineMarkdown(cell)}</td>`).join("")}</tr>`)
    .join("")}</tbody></table>`;
}

function normalize(value = "") {
  return String(value).toLowerCase().trim();
}
