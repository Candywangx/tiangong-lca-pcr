// Version 3 intentionally replaces the singular classification_coverage field with
// coordinate-keyed classification_coverage_summaries. Older generated data must be
// rebuilt together with the static assets instead of being guessed into the new shape.
export const VIEWER_DATA_SCHEMA_VERSION = 3;

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
