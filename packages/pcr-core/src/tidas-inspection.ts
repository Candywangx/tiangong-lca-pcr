import { readdirSync, realpathSync, statSync } from "node:fs";
import path from "node:path";
import { ConsumptionError, atPointer, entriesAt, object, paginate, pointerToken, preview, readJsonDocument } from "./consumption-data.ts";
import type { JsonDocument, Preview, Pagination } from "./consumption-data.ts";
import { unknownField, errorMessage, errorCode, type UnknownRecord } from "./types.ts";

// Field paths, not a second TIDAS schema or consumer validation policy.
// Basis: public-spec candidate 0.2.3, revision f118660dbcbfbf736be74837cce0bf26cd177245.
const DATASETS = [
  ["process", "processDataSet", "processInformation", "process data set"],
  ["lifecyclemodel", "lifeCycleModelDataSet", "lifeCycleModelInformation", "life cycle model data set"],
  ["flow", "flowDataSet", "flowInformation", "flow data set"],
  ["flowproperty", "flowPropertyDataSet", "flowPropertiesInformation", "flow property data set"],
  ["unitgroup", "unitGroupDataSet", "unitGroupInformation", "unit group data set"],
  ["source", "sourceDataSet", "sourceInformation", "source data set"],
  ["contact", "contactDataSet", "contactInformation", "contact data set"],
  ["lciamethod", "LCIAMethodDataSet", "LCIAMethodInformation", "LCIA method data set"],
] as const;
export const INSPECTION_SECTIONS = ["summary", "exchanges", "instances", "references", "documents"];
const MAX_DOCUMENTS = 200;
const MAX_BYTES = 64 * 1024 * 1024;

export type TidasKind = typeof DATASETS[number][0];
export interface InspectedDocument extends JsonDocument {
  readonly value: UnknownRecord;
  readonly kind: TidasKind;
  readonly root: string;
  readonly informationKey: string;
  readonly referenceType: string;
  readonly uuid: string | null;
  readonly version: string | null;
}
export interface DocumentIdentity { readonly file: string; readonly sha256: string; readonly kind: TidasKind; readonly uuid: string | null; readonly version: string | null }
export interface InputEvidence { readonly file: string; readonly sha256: string; readonly pointer: string }
export interface TidasContext {
  readonly primary: InspectedDocument;
  readonly documents: InspectedDocument[];
  readonly ignoredFiles: { file: string; sha256: string; reason: string }[];
  readonly related: string | null;
}
export interface TidasReference {
  readonly source: InputEvidence;
  readonly uuid: unknown;
  readonly version: unknown;
  readonly type: unknown;
  readonly uri: unknown;
  readonly status: 'unresolved_identity' | 'ambiguous' | 'resolved' | 'version_mismatch' | 'missing';
  readonly version_selection: 'unspecified' | 'exact';
  readonly candidates: DocumentIdentity[];
}
function identify(document: JsonDocument, required?: true): InspectedDocument;
function identify(document: JsonDocument, required: false): InspectedDocument | null;
function identify(document: JsonDocument, required = true): InspectedDocument | null {
  const value = document.value;
  const matches = DATASETS.filter(([, root]) => object(value) && Object.hasOwn(value, root));
  const matched = matches[0];
  const body = matched ? unknownField(value, matched[1]) : undefined;
  if (matches.length !== 1 || !matched || !object(value) || !object(body)) {
    if (!required && matches.length === 0) return null;
    throw new ConsumptionError('PCR_TIDAS_SHAPE', `Expected one native TIDAS dataset root in ${document.file}. Wrapped database rows must be exported as native dataset JSON first.`, { roots: DATASETS.map(([, root]) => root) });
  }
  const [kind, root, informationKey, referenceType] = matched;
  const info = body[informationKey];
  const uuid = unknownField(unknownField(info, 'dataSetInformation'), 'common:UUID') ?? null;
  const version = unknownField(unknownField(body.administrativeInformation, 'publicationAndOwnership'), 'common:dataSetVersion') ?? null;
  if ((uuid !== null && typeof uuid !== 'string') || (version !== null && typeof version !== 'string')) {
    throw new ConsumptionError('PCR_TIDAS_IDENTITY', `Dataset UUID/version must be strings when supplied in ${document.file}. Inspect the native identity fields or run the TIDAS format validator.`, {
      uuid_pointer: `/${root}/${informationKey}/dataSetInformation/common:UUID`,
      version_pointer: `/${root}/administrativeInformation/publicationAndOwnership/common:dataSetVersion`,
    });
  }
  return { ...document, value, kind, root, informationKey, referenceType, uuid, version };
}

export function documentIdentity(doc: InspectedDocument): DocumentIdentity {
  return { file: doc.file, sha256: doc.sha256, kind: doc.kind, uuid: doc.uuid, version: doc.version };
}

function relatedFiles(directory: string): string[] {
  const base = path.resolve(directory);
  const files: string[] = [];
  try {
    if (!statSync(base).isDirectory()) throw new Error("not a directory");
    let visited = 0;
    function visit(current: string, depth: number): void {
      if (depth > 12) throw new ConsumptionError("PCR_RELATED_LIMIT", "Related directory nesting exceeds 12 levels. Select a smaller local package.");
      for (const entry of readdirSync(current, { withFileTypes: true }).sort((a, b) => a.name.localeCompare(b.name, "en"))) {
        if (++visited > 5000) throw new ConsumptionError("PCR_RELATED_LIMIT", "Related directory exceeds 5000 entries. Select a smaller local package.");
        const file = path.join(current, entry.name);
        if (entry.isSymbolicLink()) throw new ConsumptionError("PCR_RELATED_SYMLINK", `Related packages must contain ordinary files/directories, not symlinks: ${file}`);
        if (entry.isDirectory()) visit(file, depth + 1);
        else if (entry.isFile() && entry.name.endsWith(".json")) {
          files.push(file);
          if (files.length > MAX_DOCUMENTS) throw new ConsumptionError("PCR_RELATED_LIMIT", `More than ${MAX_DOCUMENTS} JSON files. Select a smaller related package.`);
        }
      }
    }
    visit(base, 0);
  } catch (error: unknown) {
    if (error instanceof ConsumptionError) throw error;
    throw new ConsumptionError("PCR_RELATED_READ", `Cannot inspect --related directory ${base}: ${errorMessage(error)}`);
  }
  return files;
}

export function loadTidasContext({ input, related = null }: { input: string; related?: string | null | undefined }): TidasContext {
  const primary = identify(readJsonDocument(input));
  const documents = [primary];
  const ignoredFiles: TidasContext["ignoredFiles"] = [];
  let totalBytes = primary.bytes;
  const primaryRealPath = realpathSync(primary.file);
  for (const file of related ? relatedFiles(related) : []) {
    if (realpathSync(file) === primaryRealPath) continue;
    const raw = readJsonDocument(file);
    totalBytes += raw.bytes;
    if (totalBytes > MAX_BYTES) throw new ConsumptionError("PCR_RELATED_LIMIT", `Related input exceeds ${MAX_BYTES} bytes. Select a smaller local package.`);
    const doc = identify(raw, false);
    if (doc) documents.push(doc);
    else ignoredFiles.push({ file: raw.file, sha256: raw.sha256, reason: "No recognized native TIDAS dataset root." });
  }
  return { primary, documents, ignoredFiles, related: related ? path.resolve(related) : null };
}

export function inputEvidence(doc: Pick<InspectedDocument, "file" | "sha256">, pointer: string): InputEvidence {
  return { file: doc.file, sha256: doc.sha256, pointer };
}

export function extractReferences(context: TidasContext): TidasReference[] {
  const references: TidasReference[] = [];
  for (const doc of context.documents) {
    const stack: { value: unknown; pointer: string }[] = [{ value: doc.value, pointer: "" }];
    while (stack.length) {
      const current = stack.pop();
      if (!current) break;
      const { value, pointer } = current;
      if (value === null || typeof value !== "object") continue;
      if (object(value) && (Object.hasOwn(value, "@refObjectId") || (Object.hasOwn(value, "@type") && Object.hasOwn(value, "@uri")))) {
        const uuid = value["@refObjectId"] ?? null;
        const version = value["@version"] ?? null;
        const type = value["@type"] ?? null;
        const kind = DATASETS.find((entry) => entry[3] === type)?.[0];
        const usableIdentity = typeof uuid === "string" && uuid.length > 0 && kind !== undefined
          && (!Object.hasOwn(value, "@version") || (typeof version === "string" && version.length > 0));
        const sameIdentity = usableIdentity ? context.documents.filter((candidate) => candidate.kind === kind && candidate.uuid === uuid) : [];
        const candidates = sameIdentity.filter((candidate) => version === null || candidate.version === version);
        const status = !usableIdentity ? "unresolved_identity" : candidates.length > 1 ? "ambiguous"
          : candidates.length === 1 ? "resolved" : sameIdentity.length ? "version_mismatch" : "missing";
        references.push({
          source: inputEvidence(doc, pointer), uuid, version, type, uri: value["@uri"] ?? null,
          status, version_selection: version === null ? "unspecified" : "exact",
          candidates: (candidates.length ? candidates : sameIdentity).map(documentIdentity),
        });
      }
      const entries = Object.entries(value);
      for (let index = entries.length - 1; index >= 0; index -= 1) {
        const entry = entries[index];
        if (!entry) continue;
        const [key, child]: [string, unknown] = entry;
        if (child !== null && typeof child === "object") stack.push({ value: child, pointer: `${pointer}/${pointerToken(key)}` });
      }
    }
  }
  return references;
}

export interface InspectionOptions { input: string; related?: string | null; section?: string; pointer?: string; page?: unknown; pageSize?: unknown }
export interface InspectionBase {
  schema_version: 1;
  inspection_kind: 'tiangong-pcr-tidas-inspection';
  primary: DocumentIdentity;
  related_directory: string | null;
  schema_validation: 'not_performed';
  scope: string;
  counts: { documents: number; ignored_json_files: number; references: number; resolved: number; unresolved: number };
  limitations: string[];
}
export interface PointerInspection extends InspectionBase { section: 'pointer'; source: InputEvidence; value: unknown }
export interface SummaryInspection extends InspectionBase {
  section: 'summary'; fields: ({ name: string; source: InputEvidence } & Preview<unknown>)[];
  ignored_files: TidasContext['ignoredFiles']; ignored_files_truncated: boolean;
}
export type PagedInspection<T, S extends string> = InspectionBase & { section: S; items: T[]; pagination: Pagination };
export type SelectedItem = { source: InputEvidence } & Preview<unknown>;
export type TidasInspection = PointerInspection | SummaryInspection | PagedInspection<DocumentIdentity, 'documents'>
  | PagedInspection<TidasReference, 'references'> | PagedInspection<SelectedItem, 'exchanges' | 'instances'>;
export function inspectTidas(options: InspectionOptions & { pointer: string }): PointerInspection;
export function inspectTidas(options: InspectionOptions & { section: 'documents'; pointer?: never }): PagedInspection<DocumentIdentity, 'documents'>;
export function inspectTidas(options: InspectionOptions & { section: 'references'; pointer?: never }): PagedInspection<TidasReference, 'references'>;
export function inspectTidas(options: InspectionOptions & { section: 'exchanges' | 'instances'; pointer?: never }): PagedInspection<SelectedItem, 'exchanges' | 'instances'>;
export function inspectTidas(options: InspectionOptions & { section?: 'summary'; pointer?: never }): SummaryInspection;
export function inspectTidas(options: InspectionOptions): TidasInspection;
export function inspectTidas({ input, related, section = "summary", pointer, page = 1, pageSize = 10 }: InspectionOptions): TidasInspection {
  const context = loadTidasContext({ input, related });
  const { primary } = context;
  const references = extractReferences(context);
  const report: InspectionBase = {
    schema_version: 1, inspection_kind: "tiangong-pcr-tidas-inspection",
    primary: documentIdentity(primary), related_directory: context.related,
    schema_validation: "not_performed",
    scope: "Only explicitly supplied local JSON datasets; no URI is fetched or followed.",
    counts: {
      documents: context.documents.length, ignored_json_files: context.ignoredFiles.length,
      references: references.length, resolved: references.filter((ref) => ref.status === "resolved").length,
      unresolved: references.filter((ref) => ref.status !== "resolved").length,
    },
    limitations: [
      "Inspection exposes fields and local references; it does not establish TIDAS validity or PCR compliance.",
      "Missing local evidence is not proof that a lifecycle operation or upstream dataset does not exist.",
      "Exchange units require flow, flow-property and unit-group evidence; names or amounts alone do not establish units.",
    ],
  };
  if (pointer !== undefined) {
    return { ...report, section: "pointer", source: inputEvidence(primary, pointer), value: atPointer(primary.value, pointer) };
  }
  if (!INSPECTION_SECTIONS.includes(section)) throw new ConsumptionError("PCR_INSPECT_SECTION", `Use --section ${INSPECTION_SECTIONS.join("|")}.`);
  if (section === "summary") {
    const infoPath = `/${primary.root}/${primary.informationKey}`;
    const info = unknownField(primary.value[primary.root], primary.informationKey) ?? {};
    const fields = ["dataSetInformation", "quantitativeReference", "time", "geography", "technology"]
      .filter((key) => object(info) && Object.hasOwn(info, key))
      .map((key) => ({ name: key, source: inputEvidence(primary, `${infoPath}/${key}`), ...preview(unknownField(info, key)) }));
    return { ...report, section, fields, ignored_files: context.ignoredFiles.slice(0, 10), ignored_files_truncated: context.ignoredFiles.length > 10 };
  }
  if (section === 'documents') return { ...report, section, ...paginate(context.documents.map(documentIdentity), page, pageSize) };
  if (section === 'references') return { ...report, section, ...paginate(references, page, pageSize) };
  if (section !== 'exchanges' && section !== 'instances') throw new ConsumptionError('PCR_INSPECT_SECTION', `Use --section ${INSPECTION_SECTIONS.join('|')}.`);
  {
    const expectedKind = section === "exchanges" ? "process" : "lifecyclemodel";
    if (primary.kind !== expectedKind) throw new ConsumptionError("PCR_INSPECT_SECTION", `${section} requires a ${expectedKind} input. Use --section summary or --pointer for this ${primary.kind}.`);
    const pointer = section === "exchanges" ? "/processDataSet/exchanges/exchange"
      : "/lifeCycleModelDataSet/lifeCycleModelInformation/technology/processes/processInstance";
    let value;
    try { value = atPointer(primary.value, pointer); }
    catch (error: unknown) { if (errorCode(error) !== "PCR_POINTER_NOT_FOUND") throw error; }
    const items = entriesAt(value, pointer).map((entry) => ({ source: inputEvidence(primary, entry.pointer), ...preview(entry.value) }));
    return { ...report, section, ...paginate(items, page, pageSize) };
  }
}
