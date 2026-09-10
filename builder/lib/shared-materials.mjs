import { createHash, randomBytes } from "node:crypto";
import { execFileSync } from "node:child_process";
import { constants, closeSync, existsSync, fstatSync, fsyncSync, linkSync, lstatSync, mkdirSync, openSync, readFileSync, readdirSync, realpathSync, unlinkSync, writeFileSync } from "node:fs";
import path from "node:path";

const SHA = /^[a-f0-9]{64}$/;
const MAX_RECORD = 32768, MAX_EXCERPT = 8192;
const dimensions = ["product", "process", "route", "state", "basis", "unit"];
const hash = bytes => createHash("sha256").update(bytes).digest("hex");
const stable = value => JSON.stringify(value, (_, v) => v && typeof v === "object" && !Array.isArray(v) ? Object.fromEntries(Object.entries(v).sort(([a], [b]) => a.localeCompare(b))) : v);
function requireThat(condition, message) { if (!condition) throw new Error(message); }
function string(value, name, max = 1000) { requireThat(typeof value === "string" && value.trim() && value.length <= max, `Invalid ${name}`); return value.trim(); }
function date(value, name) { string(value, name, 40); requireThat(/^\d{4}-\d\d-\d\dT.*(?:Z|[+-]\d\d:\d\d)$/.test(value) && Number.isFinite(Date.parse(value)), `Invalid ${name}`); return value; }
function strings(value, name, max = 30) { requireThat(Array.isArray(value) && value.length <= max, `Invalid ${name}`); return [...new Set(value.map(v => string(v, name, 240)))].sort(); }
function readFile(file, max = 128 * 1024 * 1024) {
  const fd = openSync(file, constants.O_RDONLY | constants.O_NOFOLLOW);
  try { const stat = fstatSync(fd); requireThat(stat.isFile() && stat.size <= max, `File exceeds bound or is not regular: ${file}`); return readFileSync(fd); }
  finally { closeSync(fd); }
}

// Git common-dir, unlike a checkout path, is identical in every linked worktree.
export function resolveMaterialsRoot({ cwd = process.cwd(), root, env = process.env } = {}) {
  const configured = root || env.TIANGONG_PCR_MATERIALS_DIR;
  if (configured) {
    if (!root) requireThat(path.isAbsolute(configured), "TIANGONG_PCR_MATERIALS_DIR must be absolute for worktree sharing");
    return path.resolve(cwd, configured);
  }
  const common = execFileSync("git", ["rev-parse", "--path-format=absolute", "--git-common-dir"], { cwd, encoding: "utf8", stdio: ["ignore", "pipe", "pipe"] }).trim();
  return path.join(realpathSync(common), "pcr-materials");
}

export function ensureMaterialsRoot(root) {
  root = path.resolve(root);
  mkdirSync(root, { recursive: true, mode: 0o700 });
  requireThat(lstatSync(root).isDirectory() && !lstatSync(root).isSymbolicLink(), "Materials root must be a regular directory");
  for (const name of ["records", "blobs"]) {
    const dir = path.join(root, name);
    mkdirSync(dir, { mode: 0o700, recursive: true });
    requireThat(lstatSync(dir).isDirectory() && !lstatSync(dir).isSymbolicLink(), `Invalid materials directory: ${dir}`);
  }
  return realpathSync(root);
}

// Complete bytes are fsynced before no-clobber installation. Index records are installed last.
// Interrupted temp/orphan blobs are invisible; concurrent writers cannot replace a record.
function install(file, bytes) {
  const temp = path.join(path.dirname(file), `.${process.pid}-${randomBytes(12).toString("hex")}.tmp`);
  const fd = openSync(temp, "wx", 0o600);
  try { writeFileSync(fd, bytes); fsyncSync(fd); } finally { closeSync(fd); }
  let created = true;
  try {
    try { linkSync(temp, file); }
    catch (error) {
      if (error.code !== "EEXIST") throw error;
      requireThat(readFile(file).equals(Buffer.from(bytes)), `Existing immutable content is corrupt: ${file}`);
      created = false;
    }
    const dir = openSync(path.dirname(file), "r");
    try { fsyncSync(dir); } finally { closeSync(dir); }
    return created;
  } finally { unlinkSync(temp); }
}

function normalizeDoi(value) {
  const doi = value?.trim().replace(/^(?:https?:\/\/(?:dx\.)?doi\.org\/|doi:\s*)/i, "").toLowerCase();
  if (doi) requireThat(/^10\.\d{4,9}\/\S+$/.test(doi), "Invalid DOI");
  return doi;
}
function sourceIdentity(source) {
  const title = string(source?.title, "source.title", 600);
  const doi = normalizeDoi(source.doi);
  let url;
  if (source.url) {
    const parsed = new URL(source.url);
    requireThat(["http:", "https:"].includes(parsed.protocol) && !parsed.username && !parsed.password, "Use a public stable URL without credentials");
    parsed.hash = ""; url = parsed.href;
  }
  requireThat(doi || url, "A DOI or stable URL is required; title is not identity");
  return { id: hash(doi ? `doi:${doi}` : url), title, ...(doi ? { doi } : {}), ...(url ? { url } : {}), version: string(source.version, "source.version (use unknown for metadata-only)", 240) };
}

function tool(value) {
  return { name: string(value?.name, "tool.name", 100), version: string(value?.version, "tool.version", 100), options: string(value?.options, "tool.options (include relevant extraction settings)", 1000) };
}
function excerptAt(text, start, end) {
  requireThat(Number.isInteger(start) && Number.isInteger(end) && start >= 1 && end >= start && end - start < 100, "Line range exceeds bound (1–100 lines)");
  const lines = text.split(/\r?\n/);
  requireThat(end <= lines.length, "Line range outside extraction");
  const excerpt = lines.slice(start - 1, end).join("\n");
  requireThat(excerpt.trim() && Buffer.byteLength(excerpt) <= MAX_EXCERPT, "Excerpt exceeds bound (8192 bytes) or is empty");
  return excerpt;
}

export function registerMaterial({ root, input }) {
  root = ensureMaterialsRoot(root);
  requireThat(Buffer.byteLength(stable(input)) <= MAX_RECORD, "Registration exceeds bound");
  const record = { schema_version: 1, source: sourceIdentity(input.source), tags: strings(input.tags ?? [], "tags"), fragments: [] };
  const blobs = [];
  function blob(file, max) {
    const bytes = readFile(path.resolve(file), max), sha256 = hash(bytes);
    const location = path.join(root, "blobs", sha256);
    blobs.push({ location, bytes });
    return { path: location, sha256, bytes: bytes.length };
  }
  if (input.original) {
    requireThat(record.source.version !== "unknown", "Original requires an explicit version, e.g. publication edition or observed snapshot date");
    record.original = { ...blob(input.original.path), media_type: string(input.original.media_type, "original.media_type", 100), acquired_at: date(input.original.acquired_at, "original.acquired_at") };
  }
  let text;
  if (input.extraction) {
    requireThat(record.original && input.extraction.source_sha256 === record.original.sha256, "extraction.source_sha256 must match the original");
    record.extraction = { ...blob(input.extraction.path, 32 * 1024 * 1024), source_sha256: record.original.sha256, tool: tool(input.extraction.tool), extracted_at: date(input.extraction.extracted_at, "extracted_at") };
    text = new TextDecoder("utf-8", { fatal: true }).decode(blobs.at(-1).bytes);
  }
  requireThat(Array.isArray(input.fragments ?? []) && (input.fragments ?? []).length <= 16, "At most 16 fragments per registration");
  for (const fragment of input.fragments ?? []) {
    requireThat(record.extraction, "Fragments require original-bound extraction");
    const excerpt = excerptAt(text, fragment.start_line, fragment.end_line);
    requireThat(fragment.locator && typeof fragment.locator === "object" && !Array.isArray(fragment.locator) && Object.keys(fragment.locator).length > 0, "A source page/table/paragraph/cell locator is required");
    requireThat(["original_fact", "case_observation", "conversion", "author_inference"].includes(fragment.kind), "Invalid fragment.kind");
    const applicability = { limitations: string(fragment.applicability?.limitations, "applicability.limitations", 2000) };
    for (const key of dimensions) applicability[key] = strings(fragment.applicability?.[key] ?? [], `applicability.${key}`);
    const entry = {
      id: string(fragment.id, "fragment.id", 100), start_line: fragment.start_line, end_line: fragment.end_line,
      locator: fragment.locator, needs: strings(fragment.needs ?? [], "fragment.needs"), applicability,
      kind: fragment.kind, excerpt_sha256: hash(excerpt), values: fragment.values ?? [],
    };
    requireThat(!record.fragments.some(f => f.id === entry.id), "Duplicate fragment.id");
    requireThat(Array.isArray(entry.values) && entry.values.length <= 20, "Invalid values");
    entry.values = entry.values.map(v => ({ raw: string(v.raw, "values.raw", 200), unit: string(v.unit, "values.unit", 200), basis: string(v.basis, "values.basis", 500) }));
    if (["conversion", "author_inference"].includes(entry.kind)) entry.derivation = string(fragment.derivation, "derivation (inputs, formula and assumptions)", 2000);
    if (fragment.verification) {
      entry.verification = { by: string(fragment.verification.by, "verification.by", 200), at: date(fragment.verification.at, "verification.at"), method: string(fragment.verification.method, "verification.method", 1000) };
    }
    record.fragments.push(entry);
  }
  const bytes = Buffer.from(stable(record));
  requireThat(bytes.length <= MAX_RECORD, "Record exceeds bound");
  const id = hash(bytes);
  for (const item of blobs) install(item.location, item.bytes);
  const created = install(path.join(root, "records", `${id}.json`), bytes);
  return { root, id, created, record };
}

function loadRecord(root, id) {
  requireThat(SHA.test(id), "Invalid record id");
  const bytes = readFile(path.join(root, "records", `${id}.json`), MAX_RECORD);
  requireThat(hash(bytes) === id, "Record hash mismatch");
  const record = JSON.parse(bytes);
  requireThat(record.schema_version === 1 && record.source?.id && Array.isArray(record.fragments), "Invalid record schema");
  for (const item of [record.original, record.extraction].filter(Boolean)) {
    requireThat(SHA.test(item.sha256) && item.path === path.join(root, "blobs", item.sha256), "Invalid content path");
  }
  return record;
}

export function readMaterial({ root, id, fragment, request = {}, startLine, endLine }) {
  root = path.resolve(root);
  const record = loadRecord(root, id), gaps = [];
  function check(item, label) {
    if (!item) return null;
    try { const bytes = readFile(item.path); if (hash(bytes) === item.sha256) return bytes; gaps.push(`${label}_hash_mismatch`); }
    catch (error) { gaps.push(`${label}_${error.code === "ENOENT" ? "missing" : "unreadable"}`); }
    return null;
  }
  const original = check(record.original, "original");
  let extraction = check(record.extraction, "extraction");
  let reuseOriginal = Boolean(original);
  if (request.required_version && request.required_version !== record.source.version) { reuseOriginal = false; gaps.push("source_version_mismatch"); }
  if (record.extraction && (record.extraction.source_sha256 !== record.original?.sha256 || (request.extractor && stable(tool(request.extractor)) !== stable(record.extraction.tool)))) {
    extraction = null; gaps.push("extraction_version_mismatch");
  }
  if (!reuseOriginal) extraction = null;
  if (!reuseOriginal) gaps.push("acquire_original");
  else if (!extraction) gaps.push("extract_relevant_content");
  const result = {
    id, source: record.source, state: extraction ? "extracted_unverified" : original ? "original_available" : "metadata_only",
    reuse_original: reuseOriginal, reuse_extraction: Boolean(extraction), numeric_reuse: "blocked", covered: false,
    paths: { original: record.original?.path ?? null, extraction: record.extraction?.path ?? null },
    times: { acquired_at: record.original?.acquired_at ?? null, extracted_at: record.extraction?.extracted_at ?? null },
    binding: { original_sha256: record.original?.sha256 ?? null, extraction_sha256: record.extraction?.sha256 ?? null, extractor: record.extraction?.tool ?? null },
    fragments: record.fragments.map(f => ({ id: f.id, needs: f.needs, locator: f.locator, verification_recorded: Boolean(f.verification) })), gaps,
  };
  if (fragment) requireThat(record.fragments.some(f => f.id === fragment), "Unknown fragment id");
  if (!extraction) return result;
  const text = new TextDecoder("utf-8", { fatal: true }).decode(extraction);
  if (!fragment) {
    gaps.push("select_and_verify_fragment");
    if (startLine !== undefined || endLine !== undefined) result.excerpt = excerptAt(text, startLine, endLine);
    return result;
  }
  const selected = record.fragments.find(f => f.id === fragment);
  const excerpt = excerptAt(text, selected.start_line, selected.end_line);
  requireThat(hash(excerpt) === selected.excerpt_sha256, "Fragment hash mismatch");
  Object.assign(result, { excerpt, locator: selected.locator, applicability: selected.applicability, kind: selected.kind, values: selected.values, verification: selected.verification ?? null, derivation: selected.derivation ?? null });
  result.binding.excerpt_sha256 = selected.excerpt_sha256;
  if (selected.verification) result.state = "fragment_verified";
  else gaps.push("verify_fragment_against_original");
  for (const key of dimensions) {
    if (!request[key] || !selected.applicability[key].length) gaps.push(`applicability_unknown:${key}`);
    else if (!selected.applicability[key].some(v => v.toLowerCase() === String(request[key]).toLowerCase())) gaps.push(`applicability_mismatch:${key}`);
  }
  if (selected.verification && !gaps.length && ["original_fact", "case_observation"].includes(selected.kind)) result.numeric_reuse = "agent_confirmation_required";
  gaps.push("agent_check_scope_time_conflicts_and_independent_sources");
  return result;
}

export function queryMaterials({ root, request = {}, limit = 5, offset = 0 }) {
  root = path.resolve(root);
  requireThat(Number.isInteger(limit) && limit >= 1 && limit <= 20 && Number.isInteger(offset) && offset >= 0, "Query bound: limit 1–20, offset >= 0");
  const doi = normalizeDoi(request.doi);
  const url = request.url ? new URL(request.url) : null;
  if (url) url.hash = "";
  const terms = [request.product, request.process, request.need, doi, url?.href].filter(Boolean).flatMap(v => String(v).toLowerCase().split(/[^\p{L}\p{N}./:-]+/u)).filter(v => v.length > 1);
  requireThat(terms.length && terms.join(" ").length <= 2000, "Query needs a bounded product, process, need, DOI or URL");
  const matches = [], issues = [];
  const dir = path.join(root, "records");
  for (const file of existsSync(dir) ? readdirSync(dir).sort() : []) {
    if (!/^[a-f0-9]{64}\.json$/.test(file)) continue;
    const id = file.slice(0, -5);
    try {
      const record = loadRecord(root, id);
      const haystack = stable([record.source, record.tags, record.fragments.map(f => [f.needs, f.applicability])]).toLowerCase();
      const score = terms.filter(term => haystack.includes(term)).length;
      if (score) matches.push({ id, record, score });
    } catch { if (issues.length < 20) issues.push({ id, code: "record_invalid" }); }
  }
  matches.sort((a, b) => b.score - a.score || b.record.fragments.length - a.record.fragments.length || a.id.localeCompare(b.id));
  const candidates = matches.slice(offset, offset + limit).map(({ id, record }) => {
    try {
      const checked = readMaterial({ root, id, request });
      const source = { id: record.source.id, title: record.source.title.slice(0, 200), version: record.source.version.slice(0, 120), doi: record.source.doi?.slice(0, 256), url: record.source.url?.slice(0, 600) };
      const fragments = checked.fragments.slice(0, 4).map(f => ({ id: f.id, needs: f.needs.slice(0, 2).map(n => n.slice(0, 100)), locator_hint: JSON.stringify(f.locator).slice(0, 160), verification_recorded: f.verification_recorded }));
      return { id, source, state: checked.state, reuse_original: checked.reuse_original, reuse_extraction: checked.reuse_extraction, gaps: checked.gaps, fragments, fragment_count: checked.fragments.length, read: { id, fragment: checked.fragments[0]?.id ?? null } };
    } catch { return { id, state: "unreadable", gaps: ["inspect_or_replace_invalid_content"] }; }
  });
  return { root, candidates, total_candidates: matches.length, local_candidate_hits: candidates.length, adopted_evidence_count: null, offset, next_offset: offset + limit < matches.length ? offset + limit : null, issues, instruction: "Candidates only. Read relevant fragments, judge semantic applicability and time validity; supplement uncovered, conflicting or independent-source needs. Never treat a prior PCR conclusion as original evidence." };
}
