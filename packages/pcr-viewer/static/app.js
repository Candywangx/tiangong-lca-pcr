import {
  artifactRootFromModuleUrl,
  createViewerSnapshotClient,
  describeReadiness,
  describeSnapshotCapture,
  escapeHtml,
  filterPcrs,
  renderMarkdown,
  snapshotRouteUrl,
  summarizeGuidance,
  VIEWER_SNAPSHOT_SCHEMA_VERSION,
} from "./viewer-core.js";

const TABS = ["markdown", "guidance", "sources"];

const state = {
  snapshot: null,
  catalog: [],
  detail: null,
  detailLoading: false,
  history: null,
  historyLoading: false,
  provenance: null,
  stableUrl: "",
  selectedId: "",
  query: "",
  status: "",
  maturity: "",
  language: "en-US",
  tab: "markdown",
};

const app = document.querySelector("#app");
const artifactRoot = artifactRootFromModuleUrl(import.meta.url);
const client = createViewerSnapshotClient({ baseUrl: artifactRoot });

async function boot() {
  try {
    const params = new URL(window.location.href).searchParams;
    const requestedManifest = params.get("manifest");
    if (requestedManifest) {
      const metadata = await client.loadSnapshotByManifest(requestedManifest, { withCatalog: false });
      if (metadata.manifest.schema_version !== VIEWER_SNAPSHOT_SCHEMA_VERSION) {
        const route = await client.loadSnapshotRoute(requestedManifest);
        window.location.replace(snapshotRouteUrl({ baseUrl: artifactRoot, route }));
        return;
      }
      state.snapshot = await client.loadSnapshotByManifest(requestedManifest);
    } else {
      const metadata = await client.loadInitialSnapshot({ withCatalog: false });
      if (metadata.manifest.schema_version !== VIEWER_SNAPSHOT_SCHEMA_VERSION) {
        const route = await client.loadSnapshotRoute(metadata.manifestRef);
        window.location.replace(snapshotRouteUrl({ baseUrl: artifactRoot, route }));
        return;
      }
      state.snapshot = await client.loadSnapshotByManifest(metadata.manifestRef);
    }
    state.catalog = state.snapshot.catalog;
    render();
    const route = await client.loadSnapshotRoute(
      state.snapshot.manifestRef,
      state.snapshot.active?.snapshot_url,
    );
    const requestedUi = params.get("ui");
    const requestedSnapshot = params.get("snapshot");
    state.stableUrl = snapshotRouteUrl({ baseUrl: artifactRoot, route });
    if (requestedManifest && (requestedUi !== route.ui_bundle_id || requestedSnapshot !== route.snapshot_id)) {
      window.location.replace(state.stableUrl);
      return;
    }
    state.provenance = await client.loadProvenance(state.snapshot.manifest.snapshot_id);
    render();
  } catch (error) {
    app.innerHTML = `<section class="empty-state"><h1>PCR viewer data is unavailable</h1><p>${escapeHtml(error.message)}</p><p>Build viewer data before serving this directory over HTTP.</p></section>`;
  }
}

function render() {
  const searchFocus = captureSearchFocus();
  const pcrs = state.catalog;
  const filtered = filterPcrs(pcrs, state);
  const selectedCatalog = pcrs.find((pcr) => pcr.id === state.selectedId);
  const selected = selectedCatalog && state.detail?.entry?.id === selectedCatalog.id
    ? { ...selectedCatalog, ...state.detail.entry }
    : null;

  app.innerHTML = `
    <aside class="sidebar">
      <header class="brand">
        <div>
          <p class="eyebrow">TianGong LCA</p>
          <h1>PCR Viewer</h1>
          ${renderSnapshotSummary()}
        </div>
        <span class="count">${filtered.length}/${pcrs.length}</span>
      </header>
      ${renderFilters(pcrs)}
      ${renderHistoryControl()}
      <nav class="pcr-list" aria-label="PCR records">
        ${filtered.map((pcr) => renderPcrListItem(pcr, pcr.id === state.selectedId)).join("") || "<p class=\"empty-copy\">No PCR records match the current filters.</p>"}
      </nav>
    </aside>
    <section class="viewer">
      ${state.detailLoading
        ? "<div class=\"loading-state\"><p>Loading selected PCR methodology...</p></div>"
        : selected
          ? renderSelectedPcr(selected)
          : "<div class=\"empty-state\"><h2>No PCR selected</h2><p>Select a catalog record to load its PCR detail.</p></div>"}
    </section>
  `;
  bindEvents();
  restoreSearchFocus(searchFocus);
}

function captureSearchFocus() {
  const queryInput = document.querySelector("#query");
  if (!queryInput || document.activeElement !== queryInput) {
    return null;
  }
  return {
    selectionStart: queryInput.selectionStart ?? state.query.length,
    selectionEnd: queryInput.selectionEnd ?? state.query.length,
    selectionDirection: queryInput.selectionDirection ?? "none",
  };
}

function restoreSearchFocus(searchFocus) {
  if (!searchFocus) {
    return;
  }
  const queryInput = document.querySelector("#query");
  if (!queryInput) {
    return;
  }
  try {
    queryInput.focus({ preventScroll: true });
  } catch {
    queryInput.focus();
  }
  const valueLength = queryInput.value.length;
  queryInput.setSelectionRange(
    Math.min(searchFocus.selectionStart, valueLength),
    Math.min(searchFocus.selectionEnd, valueLength),
    searchFocus.selectionDirection,
  );
}

function renderFilters(pcrs) {
  const statuses = unique(pcrs.map((pcr) => pcr.status).filter(Boolean));
  const maturities = unique(pcrs.map((pcr) => pcr.content_maturity).filter(Boolean));
  return `
    <div class="filters">
      <label>
        <span>Literal metadata filter</span>
        <input id="query" aria-describedby="literal-filter-note" value="${escapeHtml(state.query)}" placeholder="Filter PCR id, title, or classification text">
        <small class="filter-note" id="literal-filter-note">Substring filter only. Use <code>tiangong-pcr resolve</code> for deterministic classification resolution.</small>
      </label>
      <label>
        <span>Status</span>
        <select id="status">
          <option value="">All statuses</option>
          ${statuses.map((status) => `<option value="${escapeHtml(status)}"${status === state.status ? " selected" : ""}>${escapeHtml(status)}</option>`).join("")}
        </select>
      </label>
      <label>
        <span>Maturity</span>
        <select id="maturity">
          <option value="">All maturity states</option>
          ${maturities.map((maturity) => `<option value="${escapeHtml(maturity)}"${maturity === state.maturity ? " selected" : ""}>${escapeHtml(maturity)}</option>`).join("")}
        </select>
      </label>
    </div>
  `;
}

function renderPcrListItem(pcr, selected) {
  const readiness = describeReadiness(pcr.readiness);
  return `
    <button class="pcr-list-item${selected ? " selected" : ""}" data-pcr-id="${escapeHtml(pcr.id)}">
      <span class="pcr-title">${escapeHtml(pcr.title?.["en-US"] ?? pcr.id)}</span>
      <span class="pcr-meta">
        <span class="readiness-badge readiness-${readiness.tone}">${escapeHtml(readiness.status)}</span>
        <span>${escapeHtml(pcr.status)} · ${escapeHtml(pcr.content_maturity ?? "")}</span>
      </span>
    </button>
  `;
}

function renderSelectedPcr(pcr) {
  const readiness = describeReadiness(pcr.readiness);
  return `
    <header class="viewer-header">
      <div>
        <p class="eyebrow">${escapeHtml(pcr.status)} · ${escapeHtml(pcr.version ?? "unversioned")}</p>
        <h2>${escapeHtml(pcr.title?.[state.language] || pcr.title?.["en-US"] || pcr.id)}</h2>
        <p class="identifier">${escapeHtml(pcr.id)}</p>
      </div>
      <div class="header-actions">
        <select id="language" aria-label="PCR language">
          <option value="en-US"${state.language === "en-US" ? " selected" : ""}>en-US</option>
          <option value="zh-CN"${state.language === "zh-CN" ? " selected" : ""}>zh-CN</option>
        </select>
      </div>
    </header>
    <section class="metadata-strip">
      <div><span>Readiness</span><strong><span class="readiness-badge readiness-${readiness.tone}">${escapeHtml(readiness.status)}</span></strong></div>
      <div><span>Path</span><strong>${escapeHtml(pcr.path)}</strong></div>
      <div><span>Content maturity</span><strong>${escapeHtml(pcr.content_maturity ?? "")}</strong></div>
      <div><span>Classification refs</span><strong>${escapeHtml(formatClassificationRefs(pcr.classification_refs))}</strong></div>
    </section>
    <div class="tabs" role="tablist" aria-label="PCR content views">
      ${TABS.map((tab) => renderTabButton(tab)).join("")}
    </div>
    <article class="content-panel" id="pcr-content-panel" role="tabpanel" tabindex="0" aria-labelledby="tab-${state.tab}">
      ${renderTabContent(pcr)}
    </article>
  `;
}

function renderTabButton(tab) {
  const selected = state.tab === tab;
  return `
    <button
      class="tab${selected ? " active" : ""}"
      data-tab="${tab}"
      id="tab-${tab}"
      role="tab"
      type="button"
      aria-controls="pcr-content-panel"
      aria-selected="${selected ? "true" : "false"}"
      tabindex="${selected ? "0" : "-1"}"
    >${tabLabel(tab)}</button>
  `;
}

function renderTabContent(pcr) {
  if (state.tab === "guidance") {
    if (!pcr.guidance) {
      return renderMethodologyNotInlined(pcr);
    }
    return renderGuidance(pcr.guidance);
  }
  if (state.tab === "sources") {
    if (!pcr.guidance) {
      return renderMethodologyNotInlined(pcr);
    }
    return renderSources(pcr.guidance?.data_sources ?? []);
  }
  const markdown = pcr.markdown?.[state.language] ?? "";
  return markdown
    ? `<div class="markdown-body">${renderMarkdown(markdown)}</div>`
    : `<div class="empty-state"><h3>No ${escapeHtml(state.language)} Markdown</h3><p>This PCR does not have a readable Markdown file for the selected language.</p></div>`;
}

function renderMethodologyNotInlined(pcr) {
  return `<div class="empty-state"><h3>Methodology not inlined</h3><p>${escapeHtml(pcr.id)} is present for catalog or authoring compatibility, but this viewer build does not inline methodology for empty scaffolds.</p></div>`;
}

function renderGuidance(guidance = {}) {
  if (guidance.guidance_error) {
    return `<div class="empty-state"><h3>Guidance unavailable</h3><p>${escapeHtml(guidance.guidance_error)}</p></div>`;
  }
  const summary = summarizeGuidance(guidance);
  return `
    <div class="summary-grid">
      ${Object.entries(summary).map(([key, value]) => `<div><span>${escapeHtml(key.replaceAll("_", " "))}</span><strong>${escapeHtml(value)}</strong></div>`).join("")}
    </div>
    <details open>
      <summary>Structured guidance JSON</summary>
      <pre><code>${escapeHtml(JSON.stringify(guidance, null, 2))}</code></pre>
    </details>
  `;
}

function renderSources(sources) {
  if (sources.length === 0) {
    return "<div class=\"empty-state\"><h3>No sources listed</h3><p>This PCR guidance does not include data source records.</p></div>";
  }
  return `
    <div class="source-list">
      ${sources.map((source) => `
        <section class="source-item">
          <h3>${escapeHtml(source.id ?? "source")}</h3>
          <p><strong>${escapeHtml(source.type ?? "")}</strong></p>
          <p>${escapeHtml(source.used_for ?? "")}</p>
          <p class="source-ref">${escapeHtml(source.reference ?? "")}</p>
        </section>
      `).join("")}
    </div>
  `;
}

function bindEvents() {
  document.querySelector("#query")?.addEventListener("input", (event) => {
    state.query = event.target.value;
    render();
  });
  document.querySelector("#status")?.addEventListener("change", (event) => {
    state.status = event.target.value;
    render();
  });
  document.querySelector("#maturity")?.addEventListener("change", (event) => {
    state.maturity = event.target.value;
    render();
  });
  document.querySelector("#language")?.addEventListener("change", (event) => {
    state.language = event.target.value;
    render();
  });
  for (const button of document.querySelectorAll("[data-pcr-id]")) {
    button.addEventListener("click", async () => {
      await selectPcr(button.dataset.pcrId);
    });
  }
  document.querySelector("#load-history")?.addEventListener("click", loadHistory);
  document.querySelector("#snapshot-history")?.addEventListener("change", async (event) => {
    const entry = state.history?.find(({ manifest_ref: ref }) => ref === event.target.value);
    if (!entry || entry.manifest_ref === state.snapshot.manifestRef) return;
    const route = await client.loadSnapshotRoute(entry.manifest_ref);
    window.location.assign(snapshotRouteUrl({ baseUrl: artifactRoot, route }));
  });
  const tabs = [...document.querySelectorAll("[role=\"tab\"][data-tab]")];
  for (const tab of tabs) {
    tab.addEventListener("click", () => {
      activateTab(tab.dataset.tab);
    });
    tab.addEventListener("keydown", (event) => {
      const nextTab = nextKeyboardTab(tabs, tab, event.key);
      if (!nextTab) {
        return;
      }
      event.preventDefault();
      activateTab(nextTab.dataset.tab, { focus: true });
    });
  }
}

async function selectPcr(pcrId) {
  state.selectedId = pcrId;
  state.detail = null;
  state.detailLoading = true;
  render();
  try {
    state.detail = await client.loadPcrDetail(state.snapshot, pcrId);
  } catch (error) {
    state.detail = { entry: { id: pcrId, markdown: {}, guidance: { guidance_error: error.message } } };
  } finally {
    state.detailLoading = false;
    render();
  }
}

async function loadHistory() {
  if (state.historyLoading || state.history) return;
  state.historyLoading = true;
  render();
  try {
    state.history = await client.loadHistory();
  } finally {
    state.historyLoading = false;
    render();
  }
}

function activateTab(tab, { focus = false } = {}) {
  if (!TABS.includes(tab)) {
    return;
  }
  state.tab = tab;
  render();
  if (focus) {
    document.querySelector(`[data-tab="${tab}"]`)?.focus({ preventScroll: true });
  }
}

function nextKeyboardTab(tabs, currentTab, key) {
  const currentIndex = tabs.indexOf(currentTab);
  if (currentIndex === -1) {
    return null;
  }
  if (key === "ArrowRight" || key === "ArrowDown") {
    return tabs[(currentIndex + 1) % tabs.length];
  }
  if (key === "ArrowLeft" || key === "ArrowUp") {
    return tabs[(currentIndex - 1 + tabs.length) % tabs.length];
  }
  if (key === "Home") {
    return tabs[0];
  }
  if (key === "End") {
    return tabs[tabs.length - 1];
  }
  return null;
}

function unique(values) {
  return [...new Set(values)].sort((left, right) => left.localeCompare(right));
}

function formatClassificationRefs(refs = []) {
  return refs.map((ref) => `${ref.system ?? ""} ${ref.version ?? ""} ${ref.code ?? ""}`.trim()).join("; ");
}

function renderSnapshotSummary() {
  const manifest = state.snapshot?.manifest ?? {};
  return `
    <div class="catalog-summary">
      <p>${escapeHtml(`${manifest.catalog_scope ?? "unknown"} catalog · ${manifest.counts?.pcr ?? 0} PCR records`)}</p>
      <p>${escapeHtml(`Snapshot ${manifest.snapshot_id ?? "unknown"} · sequence ${manifest.sequence ?? "unknown"}`)}</p>
      <p>${escapeHtml(describeSnapshotCapture(manifest, state.provenance))}</p>
      ${state.stableUrl ? `<p><a class="stable-link" href="${escapeHtml(state.stableUrl)}">Permanent snapshot link</a></p>` : ""}
    </div>
  `;
}

function renderHistoryControl() {
  if (!state.history) {
    return `<div class="history-control"><button id="load-history" type="button"${state.historyLoading ? " disabled" : ""}>${state.historyLoading ? "Loading history..." : "View snapshot history"}</button></div>`;
  }
  return `
    <div class="history-control">
      <label for="snapshot-history"><span>Retained snapshot</span></label>
      <select id="snapshot-history">
        ${state.history.map((entry) => `<option value="${escapeHtml(entry.manifest_ref)}"${entry.manifest_ref === state.snapshot.manifestRef ? " selected" : ""}>Sequence ${entry.sequence}</option>`).join("")}
      </select>
    </div>
  `;
}

function tabLabel(tab) {
  return {
    markdown: "Markdown",
    guidance: "Guidance",
    sources: "Sources",
  }[tab];
}

await boot();
