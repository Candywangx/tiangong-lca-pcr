import { atPointer } from "./consumption-data.ts";
import { getVerifiedPcrProjection } from "./index.ts";
import { projectionBinding } from "./consumption-guidance.ts";
import { documentIdentity, extractReferences, loadTidasContext } from "./tidas-inspection.ts";
import { validateCoreContract } from "./contracts.ts";

import { isUnknownRecord, unknownField, errorMessage } from "./types.ts";

export interface ReviewOptions { root: string; pcrId: string; input: string; related?: string | null }
type PcrBinding = ReturnType<typeof projectionBinding>;
type InputIdentity = ReturnType<typeof documentIdentity>;
interface InputReference { file: string; sha256: string; pointer: string }
interface PcrReference extends PcrBinding { pointer: string }
export interface AgentReviewFinding {
  id: string; kind: "confirmed_issue" | "suspected_anomaly" | "evidence_gap";
  severity: "error" | "warning" | "info"; observation: string; rationale: string;
  input_refs: InputReference[]; pcr_refs: PcrReference[]; suggested_action: string; questions: string[];
  alternative_explanations?: string[];
}
export interface AgentReviewReport extends Record<string, unknown> {
  schema_version: 1; report_kind: "tiangong-pcr-agent-review"; status: "draft" | "reviewed";
  pcr: PcrBinding; inputs: InputIdentity[];
  scope: { description: string; applicability: string; limitations: string[] };
  coverage: { topic: string; status: "reviewed" | "not_applicable" | "not_reviewed"; rationale: string }[];
  findings: AgentReviewFinding[];
}
export interface ReviewIssue { code: string; location: string; message: string }

const TOPICS = ["scope_and_applicability", "reference_basis", "inventory_and_boundary", "allocation", "data_quality"];

export function prepareReview({ root, pcrId, input, related }: ReviewOptions): AgentReviewReport {
  const snapshot = getVerifiedPcrProjection({ root, pcrId });
  const context = loadTidasContext({ input, related: related ?? null });
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

export function checkReview({ root, pcrId, input, related, report: rawReport }: ReviewOptions & { report: unknown }) {
  const shape = validateCoreContract("agent-review.schema.json", rawReport);
  const issues: ReviewIssue[] = [];
  const add = (code: string, location: string, message: string): void => { issues.push({ code, location, message }); };
  let report: AgentReviewReport | null = null;
  if (!shape.valid) {
    for (const error of shape.issues ?? shape.errors) add("report_shape", error.instance_path ?? "", error.message);
  } else {
    if (!isUnknownRecord(rawReport)) throw new TypeError("Validated review report must be an object.");
    // Existing strict JSON Schema validation proves the complete envelope shape.
    // This cast occurs only after success; scientific reasoning remains unchecked.
    report = rawReport as AgentReviewReport;
    const snapshot = getVerifiedPcrProjection({ root, pcrId });
    const binding = projectionBinding(snapshot);
    const context = loadTidasContext({ input, related: related ?? null });
    const actual = context.documents.map(documentIdentity);
    const files = new Map(context.documents.map((doc) => [doc.file, doc]));
    const sameBinding = (candidate: unknown): boolean => Object.entries(binding).every(([key, value]) => unknownField(candidate, key) === value);
    if (!sameBinding(report.pcr)) add("pcr_changed", "/pcr", "PCR identity, content hashes or methodology status differ from the selected verified projection.");
    if (report.inputs.length !== actual.length || report.inputs.some((item, index) => Object.entries(actual[index] ?? {}).some(([key, value]) => unknownField(item, key) !== value))) {
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
          catch (error) { add("input_pointer", location, errorMessage(error)); }
        }
      }
      for (const [refIndex, reference] of finding.pcr_refs.entries()) {
        const location = `${prefix}/pcr_refs/${refIndex}`;
        if (!sameBinding(reference)) add("pcr_reference_changed", location, "PCR reference does not match the selected verified projection.");
        else {
          try { atPointer(snapshot.structured, reference.pointer); }
          catch (error) { add("pcr_pointer", location, errorMessage(error)); }
        }
      }
    }
  }
  return {
    schema_version: 1, check_kind: "tiangong-pcr-review-envelope-check",
    envelope_valid: issues.length === 0, methodology_approval: false,
    report_status: report?.status ?? null,
    checked: ["report_shape", ...(shape.valid ? ["input_and_pcr_bindings", "finding_reference_locations", "review_status_consistency"] : [])],
    not_checked: ["PCR applicability", "truth of observations or conclusions", "sufficiency of evidence", "coverage completeness", "TIDAS schema validity"],
    issues,
    next_step: issues.length ? "Correct the report or re-review changed evidence, then run review check again."
      : "Have the Agent/user assess the reasoning and remaining scope. Envelope validity does not approve the dataset.",
  };
}
