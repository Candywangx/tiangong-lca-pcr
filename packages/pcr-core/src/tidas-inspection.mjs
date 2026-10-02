import { readdirSync, realpathSync, statSync } from "node:fs";
import path from "node:path";
import { ConsumptionError, atPointer, entriesAt, object, paginate, pointerToken, preview, readJsonDocument } from "./consumption-data.mjs";

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
];
export const INSPECTION_SECTIONS = ["summary", "exchanges", "instances", "references", "documents"];
const MAX_DOCUMENTS = 200;
const MAX_BYTES = 64 * 1024 * 1024;

function identify(document, required = true) {
  const matches = DATASETS.filter(([, root]) => object(document.value) && Object.hasOwn(document.value, root));
  if (matches.length !== 1 || !object(document.value[matches[0]?.[1]])) {
    if (!required && matches.length === 0) return null;
    throw new ConsumptionError("PCR_TIDAS_SHAPE", `Expected one native TIDAS dataset root in ${document.file}. Wrapped database rows must be exported as native dataset JSON first.`, { roots: DATASETS.map(([, root]) => root) });
  }
  const [kind, root, informationKey, referenceType] = matches[0];
  const body = document.value[root];
  const info = body[informationKey];
  const uuid = info?.dataSetInformation?.["common:UUID"] ?? null;
  const version = body.administrativeInformation?.publicationAndOwnership?.["common:dataSetVersion"] ?? null;
  if ((uuid !== null && typeof uuid !== "string") || (version !== null && typeof version !== "string")) {
    throw new ConsumptionError("PCR_TIDAS_IDENTITY", `Dataset UUID/version must be strings when supplied in ${document.file}. Inspect the native identity fields or run the TIDAS format validator.`, {
      uuid_pointer: `/${root}/${informationKey}/dataSetInformation/common:UUID`,
      version_pointer: `/${root}/administrativeInformation/publicationAndOwnership/common:dataSetVersion`,
    });
  }
  return {
    ...document, kind, root, informationKey, referenceType,
    uuid, version,
  };
}

export function documentIdentity(doc) {
  return { file: doc.file, sha256: doc.sha256, kind: doc.kind, uuid: doc.uuid, version: doc.version };
}

function relatedFiles(directory) {
  const base = path.resolve(directory);
  const files = [];
  try {
    if (!statSync(base).isDirectory()) throw new Error("not a directory");
    let visited = 0;
    function visit(current, depth) {
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
  } catch (error) {
    if (error instanceof ConsumptionError) throw error;
    throw new ConsumptionError("PCR_RELATED_READ", `Cannot inspect --related directory ${base}: ${error.message}`);
  }
  return files;
}

export function loadTidasContext({ input, related = null }) {
  const primary = identify(readJsonDocument(input));
  const documents = [primary];
  const ignoredFiles = [];
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

export function inputEvidence(doc, pointer) {
  return { file: doc.file, sha256: doc.sha256, pointer };
}

export function extractReferences(context) {
  const references = [];
  for (const doc of context.documents) {
    const stack = [{ value: doc.value, pointer: "" }];
    while (stack.length) {
      const { value, pointer } = stack.pop();
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
        const [key, child] = entries[index];
        if (child !== null && typeof child === "object") stack.push({ value: child, pointer: `${pointer}/${pointerToken(key)}` });
      }
    }
  }
  return references;
}

export function inspectTidas({ input, related, section = "summary", pointer, page = 1, pageSize = 10 }) {
  const context = loadTidasContext({ input, related });
  const { primary } = context;
  const references = extractReferences(context);
  const report = {
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
    const info = primary.value[primary.root][primary.informationKey] ?? {};
    const fields = ["dataSetInformation", "quantitativeReference", "time", "geography", "technology"]
      .filter((key) => Object.hasOwn(info, key))
      .map((key) => ({ name: key, source: inputEvidence(primary, `${infoPath}/${key}`), ...preview(info[key]) }));
    return { ...report, section, fields, ignored_files: context.ignoredFiles.slice(0, 10), ignored_files_truncated: context.ignoredFiles.length > 10 };
  }
  let items;
  if (section === "documents") items = context.documents.map(documentIdentity);
  else if (section === "references") items = references;
  else {
    const expectedKind = section === "exchanges" ? "process" : "lifecyclemodel";
    if (primary.kind !== expectedKind) throw new ConsumptionError("PCR_INSPECT_SECTION", `${section} requires a ${expectedKind} input. Use --section summary or --pointer for this ${primary.kind}.`);
    const pointer = section === "exchanges" ? "/processDataSet/exchanges/exchange"
      : "/lifeCycleModelDataSet/lifeCycleModelInformation/technology/processes/processInstance";
    let value;
    try { value = atPointer(primary.value, pointer); }
    catch (error) { if (error.code !== "PCR_POINTER_NOT_FOUND") throw error; }
    items = entriesAt(value, pointer).map((entry) => ({ source: inputEvidence(primary, entry.pointer), ...preview(entry.value) }));
  }
  return { ...report, section, ...paginate(items, page, pageSize) };
}
