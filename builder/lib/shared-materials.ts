import { isUnknownRecord, unknownField, errorCode, type UnknownRecord } from "../../packages/pcr-core/src/types.ts";
export interface MaterialTool {name:string;version:string;options:string}
export interface MaterialSource {id:string;title:string;version:string;doi?:string;url?:string}
export interface MaterialBlob {path:string;sha256:string;bytes:number}
export interface MaterialOriginal extends MaterialBlob {media_type:string;acquired_at:string}
export interface MaterialExtraction extends MaterialBlob {source_sha256:string;tool:MaterialTool;extracted_at:string}
export interface MaterialVerification {by:string;at:string;method:string}
export interface MaterialValue {raw:string;unit:string;basis:string}
type Dimension="product"|"process"|"route"|"state"|"basis"|"unit";
export type MaterialApplicability=Record<Dimension,string[]> & {limitations:string};
export interface MaterialFragment {id:string;start_line:number;end_line:number;locator:UnknownRecord;needs:string[];applicability:MaterialApplicability;kind:string;excerpt_sha256:string;values:MaterialValue[];derivation?:string;verification?:MaterialVerification}
export interface MaterialRecord {schema_version:1;source:MaterialSource;tags:string[];fragments:MaterialFragment[];original?:MaterialOriginal;extraction?:MaterialExtraction}
export interface MaterialReadResult {id:string;source:UnknownRecord;state:string;reuse_original:boolean;reuse_extraction:boolean;numeric_reuse:string;covered:boolean;paths:{original:unknown;extraction:unknown};times:{acquired_at:unknown;extracted_at:unknown};binding:{original_sha256:unknown;extraction_sha256:unknown;extractor:unknown;excerpt_sha256?:unknown};fragments:{id:unknown;needs:unknown;locator:unknown;verification_recorded:boolean}[];gaps:string[];excerpt?:string;locator?:unknown;applicability?:unknown;kind?:unknown;values?:unknown;verification?:unknown;derivation?:unknown}
function object(value:unknown):UnknownRecord {return isUnknownRecord(value)?value:{};}
import { createHash, randomBytes } from "node:crypto";
import { execFileSync } from "node:child_process";
import { constants, closeSync, existsSync, fstatSync, fsyncSync, linkSync, lstatSync, mkdirSync, openSync, readFileSync, readdirSync, realpathSync, unlinkSync, writeFileSync } from "node:fs";
import path from "node:path";

const SHA = /^[a-f0-9]{64}$/;
const MAX_RECORD = 32768, MAX_EXCERPT = 8192;
const dimensions: readonly Dimension[] = ["product", "process", "route", "state", "basis", "unit"];
const hash = (bytes: string | Uint8Array) => createHash("sha256").update(bytes).digest("hex");
const stable = (value: unknown): string => JSON.stringify(value, (_, v: unknown) => v && typeof v === "object" && !Array.isArray(v) ? Object.fromEntries(Object.entries(v).sort(([a], [b]) => a.localeCompare(b))) : v);
function requireThat(condition: unknown, message: string): asserts condition { if (!condition) throw new Error(message); }
function string(value: unknown, name: string, max = 1000) { requireThat(typeof value === "string" && value.trim() && value.length <= max, `Invalid ${name}`); return value.trim(); }
function date(value: unknown, name: string) { string(value, name, 40); requireThat(typeof value === "string", `Invalid ${name}`); requireThat(/^\d{4}-\d\d-\d\dT.*(?:Z|[+-]\d\d:\d\d)$/.test(value) && Number.isFinite(Date.parse(value)), `Invalid ${name}`); return value; }
function strings(value: unknown, name: string, max = 30) { requireThat(Array.isArray(value) && value.length <= max, `Invalid ${name}`); return [...new Set(value.map(v => string(v, name, 240)))].sort(); }
function readFile(file: string, max = 128 * 1024 * 1024) {
  const fd = openSync(file, constants.O_RDONLY | constants.O_NOFOLLOW);
  try { const stat = fstatSync(fd); requireThat(stat.isFile() && stat.size <= max, `File exceeds bound or is not regular: ${file}`); return readFileSync(fd); }
  finally { closeSync(fd); }
}

// Git common-dir, unlike a checkout path, is identical in every linked worktree.
export function resolveMaterialsRoot({ cwd = process.cwd(), root, env = process.env }: {cwd?:string;root?:string|undefined;env?:NodeJS.ProcessEnv} = {}) {
  const configured = root || env.TIANGONG_PCR_MATERIALS_DIR;
  if (configured) {
    if (!root) requireThat(path.isAbsolute(configured), "TIANGONG_PCR_MATERIALS_DIR must be absolute for worktree sharing");
    return path.resolve(cwd, configured);
  }
  const common = execFileSync("git", ["rev-parse", "--path-format=absolute", "--git-common-dir"], { cwd, encoding: "utf8", stdio: ["ignore", "pipe", "pipe"] }).trim();
  return path.join(realpathSync(common), "pcr-materials");
}

export function ensureMaterialsRoot(root: string) {
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
function install(file: string, bytes: string | Uint8Array) {
  const temp = path.join(path.dirname(file), `.${process.pid}-${randomBytes(12).toString("hex")}.tmp`);
  const fd = openSync(temp, "wx", 0o600);
  try { writeFileSync(fd, bytes); fsyncSync(fd); } finally { closeSync(fd); }
  let created = true;
  try {
    try { linkSync(temp, file); }
    catch (error) {
      if (errorCode(error) !== "EEXIST") throw error;
      requireThat(readFile(file).equals(Buffer.from(bytes)), `Existing immutable content is corrupt: ${file}`);
      created = false;
    }
    const dir = openSync(path.dirname(file), "r");
    try { fsyncSync(dir); } finally { closeSync(dir); }
    return created;
  } finally { unlinkSync(temp); }
}

function normalizeDoi(value: unknown) {
  requireThat(value === undefined || value === null || typeof value === "string", "Invalid DOI");
  const doi = value === undefined || value === null ? undefined : value.trim().replace(/^(?:https?:\/\/(?:dx\.)?doi\.org\/|doi:\s*)/i, "").toLowerCase();
  if (doi) requireThat(/^10\.\d{4,9}\/\S+$/.test(doi), "Invalid DOI");
  return doi;
}
function sourceIdentity(rawSource: unknown) {
  const source=object(rawSource);
  const title = string(source.title, "source.title", 600);
  const doi = normalizeDoi(source.doi);
  let url;
  if (source.url) {
    const parsed = new URL(string(source.url,"source.url"));
    requireThat(["http:", "https:"].includes(parsed.protocol) && !parsed.username && !parsed.password, "Use a public stable URL without credentials");
    parsed.hash = ""; url = parsed.href;
  }
  requireThat(doi || url, "A DOI or stable URL is required; title is not identity");
  return { id: hash(doi ? `doi:${doi}` : url!), title, ...(doi ? { doi } : {}), ...(url ? { url } : {}), version: string(source.version, "source.version (use unknown for metadata-only)", 240) };
}

function tool(raw: unknown) {
  const value=object(raw);
  return { name: string(value.name, "tool.name", 100), version: string(value?.version, "tool.version", 100), options: string(value?.options, "tool.options (include relevant extraction settings)", 1000) };
}
function excerptAt(text: string, start: unknown, end: unknown) {
  requireThat(typeof start === "number" && typeof end === "number" && Number.isInteger(start) && Number.isInteger(end) && start >= 1 && end >= start && end - start < 100, "Line range exceeds bound (1–100 lines)");
  const lines = text.split(/\r?\n/);
  requireThat(end <= lines.length, "Line range outside extraction");
  const excerpt = lines.slice(start - 1, end).join("\n");
  requireThat(excerpt.trim() && Buffer.byteLength(excerpt) <= MAX_EXCERPT, "Excerpt exceeds bound (8192 bytes) or is empty");
  return excerpt;
}

export function registerMaterial({ root, input: rawInput }: {root:string;input:unknown}) {
  const input=object(rawInput);
  root = ensureMaterialsRoot(root);
  requireThat(Buffer.byteLength(stable(rawInput)) <= MAX_RECORD, "Registration exceeds bound");
  const record: MaterialRecord = { schema_version: 1, source: sourceIdentity(input.source), tags: strings(input.tags ?? [], "tags"), fragments: [] };
  const blobs: {location:string;bytes:Buffer}[] = [];
  function blob(file: unknown, max?:number) {
    const bytes = readFile(path.resolve(string(file,"path")), max), sha256 = hash(bytes);
    const location = path.join(root, "blobs", sha256);
    blobs.push({ location, bytes });
    return { path: location, sha256, bytes: bytes.length };
  }
  if (input.original) {
    requireThat(record.source.version !== "unknown", "Original requires an explicit version, e.g. publication edition or observed snapshot date");
    record.original = { ...blob(unknownField(input.original,"path")), media_type: string(unknownField(input.original,"media_type"), "original.media_type", 100), acquired_at: date(unknownField(input.original,"acquired_at"), "original.acquired_at") };
  }
  let text: string | undefined;
  if (input.extraction) {
    requireThat(record.original && unknownField(input.extraction,"source_sha256") === record.original.sha256, "extraction.source_sha256 must match the original");
    record.extraction = { ...blob(unknownField(input.extraction,"path"), 32 * 1024 * 1024), source_sha256: record.original.sha256, tool: tool(unknownField(input.extraction,"tool")), extracted_at: date(unknownField(input.extraction,"extracted_at"), "extracted_at") };
    text = new TextDecoder("utf-8", { fatal: true }).decode(blobs.at(-1)!.bytes);
  }
  const rawFragments=input.fragments ?? [];
  requireThat(Array.isArray(rawFragments) && rawFragments.length <= 16, "At most 16 fragments per registration");
  for (const rawFragment of rawFragments) {
    const fragment=object(rawFragment);
    requireThat(record.extraction && text !== undefined, "Fragments require original-bound extraction");
    const excerpt = excerptAt(text, fragment.start_line, fragment.end_line);
    requireThat(isUnknownRecord(fragment.locator) && Object.keys(fragment.locator).length > 0, "A source page/table/paragraph/cell locator is required");
    requireThat(["original_fact", "case_observation", "conversion", "author_inference"].includes(String(fragment.kind)), "Invalid fragment.kind");
    const applicability: MaterialApplicability = { limitations: string(unknownField(fragment.applicability,"limitations"), "applicability.limitations", 2000), product:[],process:[],route:[],state:[],basis:[],unit:[] };
    for (const key of dimensions) applicability[key] = strings(unknownField(fragment.applicability,key) ?? [], `applicability.${key}`);
    requireThat(typeof fragment.start_line === "number" && typeof fragment.end_line === "number", "Line range exceeds bound (1–100 lines)");
    requireThat(typeof fragment.kind === "string", "Invalid fragment.kind");
    const values=fragment.values ?? [];
    const entry: MaterialFragment = {
      id: string(fragment.id, "fragment.id", 100), start_line: fragment.start_line, end_line: fragment.end_line,
      locator: fragment.locator, needs: strings(fragment.needs ?? [], "fragment.needs"), applicability,
      kind: fragment.kind, excerpt_sha256: hash(excerpt), values: [],
    };
    requireThat(!record.fragments.some(f => f.id === entry.id), "Duplicate fragment.id");
    requireThat(Array.isArray(values) && values.length <= 20, "Invalid values");
    entry.values = values.map(raw => {const v=object(raw);return ({ raw: string(v.raw, "values.raw", 200), unit: string(v.unit, "values.unit", 200), basis: string(v.basis, "values.basis", 500) });});
    if (["conversion", "author_inference"].includes(entry.kind)) entry.derivation = string(fragment.derivation, "derivation (inputs, formula and assumptions)", 2000);
    if (fragment.verification) {
      entry.verification = { by: string(unknownField(fragment.verification,"by"), "verification.by", 200), at: date(unknownField(fragment.verification,"at"), "verification.at"), method: string(unknownField(fragment.verification,"method"), "verification.method", 1000) };
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

type LoadedMaterialRecord = UnknownRecord & {source:UnknownRecord;fragments:unknown[]};
function loadRecord(root: string, id: string): LoadedMaterialRecord {
  requireThat(SHA.test(id), "Invalid record id");
  const bytes = readFile(path.join(root, "records", `${id}.json`), MAX_RECORD);
  requireThat(hash(bytes) === id, "Record hash mismatch");
  const raw: unknown = JSON.parse(bytes.toString("utf8"));
  requireThat(isUnknownRecord(raw),"Invalid record schema");
  const record=raw;
  requireThat(record.schema_version === 1 && unknownField(record.source,"id") && Array.isArray(record.fragments), "Invalid record schema");
  for (const itemRaw of [record.original, record.extraction].filter(Boolean)) {
    const item=object(itemRaw);
    requireThat(typeof item.sha256 === "string" && SHA.test(item.sha256) && item.path === path.join(root, "blobs", item.sha256), "Invalid content path");
  }
  return record as LoadedMaterialRecord;
}

export function readMaterial({ root, id, fragment, request: rawRequest = {}, startLine, endLine }: {root:string;id:unknown;fragment?:unknown;request?:unknown;startLine?:unknown;endLine?:unknown}) {
  root = path.resolve(root);
  requireThat(typeof id === "string", "Invalid record id");
  const record = loadRecord(root, id), gaps: string[] = [];
  function check(rawItem: unknown, label: string) {
    if (!rawItem) return null;
    const item=object(rawItem);
    requireThat(typeof item.path === "string", "Invalid content path");
    try { const bytes = readFile(item.path); if (hash(bytes) === item.sha256) return bytes; gaps.push(`${label}_hash_mismatch`); }
    catch (error) { gaps.push(`${label}_${errorCode(error) === "ENOENT" ? "missing" : "unreadable"}`); }
    return null;
  }
  const original = check(record.original, "original");
  let extraction = check(record.extraction, "extraction");
  const request=materialRequest(rawRequest);
  let reuseOriginal = Boolean(original);
  if (request.required_version && request.required_version !== record.source.version) { reuseOriginal = false; gaps.push("source_version_mismatch"); }
  if (record.extraction && (unknownField(record.extraction,"source_sha256") !== unknownField(record.original,"sha256") || (request.extractor && stable(tool(request.extractor)) !== stable(unknownField(record.extraction,"tool"))))) {
    extraction = null; gaps.push("extraction_version_mismatch");
  }
  if (!reuseOriginal) extraction = null;
  if (!reuseOriginal) gaps.push("acquire_original");
  else if (!extraction) gaps.push("extract_relevant_content");
  const result: MaterialReadResult = {
    id, source: record.source, state: extraction ? "extracted_unverified" : original ? "original_available" : "metadata_only",
    reuse_original: reuseOriginal, reuse_extraction: Boolean(extraction), numeric_reuse: "blocked", covered: false,
    paths: { original: unknownField(record.original,"path") ?? null, extraction: unknownField(record.extraction,"path") ?? null },
    times: { acquired_at: unknownField(record.original,"acquired_at") ?? null, extracted_at: unknownField(record.extraction,"extracted_at") ?? null },
    binding: { original_sha256: unknownField(record.original,"sha256") ?? null, extraction_sha256: unknownField(record.extraction,"sha256") ?? null, extractor: unknownField(record.extraction,"tool") ?? null },
    fragments: record.fragments.map(raw => { const f=fragmentObject(raw);return ({ id: f.id, needs: f.needs, locator: f.locator, verification_recorded: Boolean(f.verification) });}), gaps,
  };
  if (fragment) requireThat(record.fragments.some(raw => fragmentObject(raw).id === fragment), "Unknown fragment id");
  if (!extraction) return result;
  const text = new TextDecoder("utf-8", { fatal: true }).decode(extraction);
  if (!fragment) {
    gaps.push("select_and_verify_fragment");
    if (startLine !== undefined || endLine !== undefined) result.excerpt = excerptAt(text, startLine, endLine);
    return result;
  }
  const rawSelected = record.fragments.find(raw => fragmentObject(raw).id === fragment);
  const selected=fragmentObject(rawSelected);
  requireThat(selected, "Unknown fragment id");
  const excerpt = excerptAt(text, selected.start_line, selected.end_line);
  requireThat(hash(excerpt) === selected.excerpt_sha256, "Fragment hash mismatch");
  Object.assign(result, { excerpt, locator: selected.locator, applicability: selected.applicability, kind: selected.kind, values: selected.values, verification: selected.verification ?? null, derivation: selected.derivation ?? null });
  result.binding.excerpt_sha256 = selected.excerpt_sha256;
  if (selected.verification) result.state = "fragment_verified";
  else gaps.push("verify_fragment_against_original");
  for (const key of dimensions) {
    if (!request[key] || !arrayLength(unknownField(selected.applicability,key))) gaps.push(`applicability_unknown:${key}`);
    else if (!someTextMatches(unknownField(selected.applicability,key),String(request[key]))) gaps.push(`applicability_mismatch:${key}`);
  }
  if (selected.verification && !gaps.length && typeof selected.kind === "string" && ["original_fact", "case_observation"].includes(selected.kind)) result.numeric_reuse = "agent_confirmation_required";
  gaps.push("agent_check_scope_time_conflicts_and_independent_sources");
  return result;
}

export function queryMaterials({ root, request: rawRequest = {}, limit = 5, offset = 0 }: {root:string;request?:unknown;limit?:number;offset?:number}) {
  root = path.resolve(root);
  requireThat(Number.isInteger(limit) && limit >= 1 && limit <= 20 && Number.isInteger(offset) && offset >= 0, "Query bound: limit 1–20, offset >= 0");
  const request=materialRequest(rawRequest);
  const doi = normalizeDoi(request.doi);
  const url = request.url ? new URL(string(request.url,"url")) : null;
  if (url) url.hash = "";
  const terms = [request.product, request.process, request.need, doi, url?.href].filter(Boolean).flatMap(v => String(v).toLowerCase().split(/[^\p{L}\p{N}./:-]+/u)).filter(v => v.length > 1);
  requireThat(terms.length && terms.join(" ").length <= 2000, "Query needs a bounded product, process, need, DOI or URL");
  const matches: {id:string;record:LoadedMaterialRecord;score:number}[] = [], issues: {id:string;code:string}[] = [];
  const dir = path.join(root, "records");
  for (const file of existsSync(dir) ? readdirSync(dir).sort() : []) {
    if (!/^[a-f0-9]{64}\.json$/.test(file)) continue;
    const id = file.slice(0, -5);
    try {
      const record = loadRecord(root, id);
      const haystack = stable([record.source, record.tags, record.fragments.map(raw => {const f=fragmentObject(raw);return [f.needs,f.applicability];})]).toLowerCase();
      const score = terms.filter(term => haystack.includes(term)).length;
      if (score) matches.push({ id, record, score });
    } catch { if (issues.length < 20) issues.push({ id, code: "record_invalid" }); }
  }
  matches.sort((a, b) => b.score - a.score || b.record.fragments.length - a.record.fragments.length || a.id.localeCompare(b.id));
  const candidates = matches.slice(offset, offset + limit).map(({ id, record }) => {
    try {
      const checked = readMaterial({ root, id, request });
      const source = { id: record.source.id, title: sliceText(record.source.title,200), version: sliceText(record.source.version,120), doi: sliceOptionalText(record.source.doi,256), url: sliceOptionalText(record.source.url,600) };
      const fragments = checked.fragments.slice(0, 4).map(f => ({ id: f.id, needs: needsPreview(f.needs), locator_hint: sliceText(JSON.stringify(f.locator),160), verification_recorded: f.verification_recorded }));
      return { id, source, state: checked.state, reuse_original: checked.reuse_original, reuse_extraction: checked.reuse_extraction, gaps: checked.gaps, fragments, fragment_count: checked.fragments.length, read: { id, fragment: checked.fragments[0]?.id ?? null } };
    } catch { return { id, state: "unreadable", gaps: ["inspect_or_replace_invalid_content"] }; }
  });
  return { root, candidates, total_candidates: matches.length, local_candidate_hits: candidates.length, adopted_evidence_count: null, offset, next_offset: offset + limit < matches.length ? offset + limit : null, issues, instruction: "Candidates only. Read relevant fragments, judge semantic applicability and time validity; supplement uncovered, conflicting or independent-source needs. Never treat a prior PCR conclusion as original evidence." };
}

// Stored records retain the legacy inspection surface: only the original envelope
// and immutable paths are validated at load. Every value used as text/array is
// narrowed at its operation, so malformed records keep their prior gap/candidate
// behavior instead of being silently promoted to the authored record DTO.
function fragmentObject(value:unknown):UnknownRecord {if(value===null||value===undefined)throw new TypeError("Cannot read properties of a missing fragment");return object(value);}
function sliceText(value:unknown,length:number):string {if(typeof value!=="string")throw new TypeError("Material value is not text");return value.slice(0,length);}
function sliceOptionalText(value:unknown,length:number):string|undefined {return value===null||value===undefined?undefined:sliceText(value,length);}
function needsPreview(value:unknown):string[] {if(!Array.isArray(value))throw new TypeError("Material needs is not an array");return value.slice(0,2).map((need:unknown)=>sliceText(need,100));}
function arrayLength(value:unknown):number|undefined {return Array.isArray(value)||typeof value==="string"?value.length:undefined;}
function someTextMatches(value:unknown,requested:string):boolean {if(!Array.isArray(value))throw new TypeError("Material applicability is not an array");return value.some((item:unknown)=>{if(typeof item!=="string")throw new TypeError("Material applicability value is not text");return item.toLowerCase()===requested.toLowerCase();});}

function materialRequest(value:unknown):UnknownRecord {
 if(value===null||value===undefined)throw new TypeError("Cannot read properties of a missing material request");
 if(Array.isArray(value))return Object.fromEntries(Object.entries(value));
 return object(value);
}
