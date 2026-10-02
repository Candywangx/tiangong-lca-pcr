import { atPointer } from "./consumption-data.mjs";
import { getVerifiedPcrProjection } from "./index.mjs";
import { projectionBinding } from "./consumption-guidance.mjs";
import { documentIdentity, extractReferences, loadTidasContext } from "./tidas-inspection.mjs";
import { validateCoreContract } from "./contracts.mjs";

const TOPICS = ["scope_and_applicability", "reference_basis", "inventory_and_boundary", "allocation", "data_quality"];

export function prepareReview({ root, pcrId, input, related }) {
  const snapshot = getVerifiedPcrProjection({ root, pcrId });
  const context = loadTidasContext({ input, related });
  const unresolved = extractReferences(context).filter((reference) => reference.status !== "resolved");
  return {
    schema_version: 1, report_kind: "tiangong-pcr-agent-review", status: "draft",
    pcr: projectionBinding(snapshot), inputs: context.documents.map(documentIdentity),
    scope: {
      description: `Review of supplied ${context.primary.kind}; the Agent must establish its declared scope and reference basis.`,
      applicability: "Not assessed. Explain product, technology, gate and PCR applicability before drawing conclusions.",
      limitations: [
        "No semantic review or TIDAS schema validation has been performed by this command.",
        `${unresolved.length} reference(s) could not be uniquely resolved in the supplied local inputs; inspect references before claiming omissions.`,
        `${context.ignoredFiles.length} JSON file(s) with no native TIDAS dataset root were ignored by input inspection.`,
        `PCR methodology status: ${snapshot.readiness.methodology_status}; library availability does not promote candidate methodology.`,
      ],
    },
    coverage: TOPICS.map((topic) => ({ topic, status: "not_reviewed", rationale: "Awaiting Agent investigation of applicability and evidence." })),
    findings: [],
  };
}

export function checkReview({ root, pcrId, input, related, report }) {
  const shape = validateCoreContract("agent-review.schema.json", report);
  const issues = [];
  const add = (code, location, message) => issues.push({ code, location, message });
  if (!shape.valid) {
    for (const error of shape.issues ?? shape.errors) add("report_shape", error.instance_path ?? error.instancePath ?? "", error.message);
  } else {
    const snapshot = getVerifiedPcrProjection({ root, pcrId });
    const binding = projectionBinding(snapshot);
    const context = loadTidasContext({ input, related });
    const actual = context.documents.map(documentIdentity);
    const files = new Map(context.documents.map((doc) => [doc.file, doc]));
    const sameBinding = (candidate) => Object.keys(binding).every((key) => candidate[key] === binding[key]);
    if (!sameBinding(report.pcr)) add("pcr_changed", "/pcr", "PCR identity, content hashes or methodology status differ from the selected verified projection.");
    if (report.inputs.length !== actual.length || report.inputs.some((item, index) => Object.keys(actual[index] ?? {}).some((key) => item[key] !== actual[index][key]))) {
      add("inputs_changed", "/inputs", "Input files, identities, order or exact-byte hashes differ. Regenerate the draft bindings and review the changed evidence.");
    }
    if (report.status === "reviewed" && !report.coverage.some((item) => item.status === "reviewed")) add("review_empty", "/coverage", "A reviewed report must name at least one actually reviewed topic; otherwise retain draft status.");
    const ids = new Set();
    for (const [index, finding] of report.findings.entries()) {
      const prefix = `/findings/${index}`;
      if (ids.has(finding.id)) add("duplicate_finding", `${prefix}/id`, "Finding IDs must be unique within this report.");
      ids.add(finding.id);
      for (const [refIndex, reference] of finding.input_refs.entries()) {
        const location = `${prefix}/input_refs/${refIndex}`;
        const doc = files.get(reference.file);
        if (!doc || reference.sha256 !== doc.sha256) add("input_reference_changed", location, "Reference must identify an explicitly supplied input and its current exact-byte hash.");
        else {
          try { atPointer(doc.value, reference.pointer); }
          catch (error) { add("input_pointer", location, error.message); }
        }
      }
      for (const [refIndex, reference] of finding.pcr_refs.entries()) {
        const location = `${prefix}/pcr_refs/${refIndex}`;
        if (!sameBinding(reference)) add("pcr_reference_changed", location, "PCR reference does not match the selected verified projection.");
        else {
          try { atPointer(snapshot.structured, reference.pointer); }
          catch (error) { add("pcr_pointer", location, error.message); }
        }
      }
    }
  }
  return {
    schema_version: 1, check_kind: "tiangong-pcr-review-envelope-check",
    envelope_valid: issues.length === 0, methodology_approval: false,
    report_status: shape.valid ? report.status : null,
    checked: ["report_shape", ...(shape.valid ? ["input_and_pcr_bindings", "finding_reference_locations", "review_status_consistency"] : [])],
    not_checked: ["PCR applicability", "truth of observations or conclusions", "sufficiency of evidence", "coverage completeness", "TIDAS schema validity"],
    issues,
    next_step: issues.length ? "Correct the report or re-review changed evidence, then run review check again."
      : "Have the Agent/user assess the reasoning and remaining scope. Envelope validity does not approve the dataset.",
  };
}
