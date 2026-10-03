import { GoalHarnessError } from "./errors.ts";
import { stableArtifactJson } from "./artifact-io.ts";

import { record, records, strings, text, field } from "./domain.ts";
import type { UnknownRecord } from "./domain.ts";
export interface UuidAdoptionClaim extends UnknownRecord { uuid: string; hybrid_search_receipt_id: string }
export interface ReceiptDecision extends UnknownRecord { uuid: string; decision: string; direct_read?: UnknownRecord; reason_code?: unknown; reason?: unknown }
export interface ReportReceiptAudit extends UnknownRecord { receipt_id: string; candidate_decisions: ReceiptDecision[]; scope?: string }
interface RejectedUuidCandidate extends UnknownRecord { uuid: string; receipt_id: string }
export interface AssembledAuthorReport extends UnknownRecord {
  uuid_audits?: UuidAdoptionClaim[];
  rejected_uuid_candidates?: RejectedUuidCandidate[];
  hybrid_search_receipt_ids?: string[];
}
function authorDraft(value: unknown): AssembledAuthorReport {
  const draft=record(value,"author draft");
  const audits=draft.uuid_audits===undefined?undefined:records(draft.uuid_audits).map(claim=>({...claim,uuid:text(claim.uuid),hybrid_search_receipt_id:text(claim.hybrid_search_receipt_id)}));
  const rejected=draft.rejected_uuid_candidates===undefined?undefined:records(draft.rejected_uuid_candidates).map(claim=>({...claim,uuid:text(claim.uuid),receipt_id:text(claim.receipt_id)}));
  const membership=draft.hybrid_search_receipt_ids===undefined?undefined:strings(draft.hybrid_search_receipt_ids);
  return {...draft,...(audits===undefined?{}:{uuid_audits:audits}),...(rejected===undefined?{}:{rejected_uuid_candidates:rejected}),...(membership===undefined?{}:{hybrid_search_receipt_ids:membership})};
}
export function assembleAuthorReport({ draft: input, receiptAudits }: {draft: unknown; receiptAudits: readonly ReportReceiptAudit[]}): AssembledAuthorReport {
  const draft=authorDraft(input);
  const report = structuredClone(draft);
  delete report.receipt_ids;
  const sparse = draft.schema_version === 2;
  if (sparse) {
    report.schema_version = 1;
    const claimed = new Set<string>(), receiptIds = new Set<string>();
    for (const claim of report.uuid_audits ?? []) {
      const uuid = claim.uuid.toLowerCase();
      if (claimed.has(uuid)) conflict("UUID adoption declarations must be unique.", claim);
      claimed.add(uuid);
    }
    for (const receipt of receiptAudits) {
      if (receiptIds.has(receipt.receipt_id)) invalidIdentity("Duplicate verified receipt identity.", receipt.receipt_id);
      receiptIds.add(receipt.receipt_id);
    }
  }
  const receipts = new Map(receiptAudits.map((r) => [r.receipt_id, r]));
  for (const claim of report.uuid_audits ?? []) {
    const decision = receipts
      .get(claim.hybrid_search_receipt_id)
      ?.candidate_decisions.find((d) => d.uuid === claim.uuid.toLowerCase());
    if (decision?.decision !== "adopted")
      conflict("Adopted UUID disagrees with its finalized receipt.", claim);
    if (sparse) {
      const receipt = receipts.get(claim.hybrid_search_receipt_id);
      if (!receipt) conflict("Adopted UUID lacks its finalized receipt.", claim);
      const decisions = receipt.candidate_decisions.filter(d => d.uuid === claim.uuid.toLowerCase());
      if (decisions.length !== 1) invalidIdentity("Receipt adoption is not unique.", claim.uuid);
      const identity = projectReceiptIdentity(receipt, decision, claim.uuid);
      for (const [field, value] of Object.entries(identity)) {
        if (Object.hasOwn(claim, field) && !matchesExplicitIdentity(field, claim[field], value, decision.direct_read)) {
          conflict(`Explicit ${field} differs from the adopted verified identity.`, { uuid: claim.uuid, field, claimed: claim[field], expected: value });
        }
        if (!Object.hasOwn(claim, field)) claim[field] = value;
      }
    }
  }
  const generated = receiptAudits
    .flatMap((r) =>
      r.scope === "goal_cache_reuse"
        ? []
        : r.candidate_decisions
            .filter((d) => d.decision === "rejected")
            .map((d) => ({
              uuid: d.uuid,
              receipt_id: r.receipt_id,
              reason_code: d.reason_code,
              reason: d.reason,
            })),
    )
    .sort(
      (a, b) =>
        a.receipt_id.localeCompare(b.receipt_id) ||
        a.uuid.localeCompare(b.uuid),
    );
  if (report.rejected_uuid_candidates !== undefined) {
    const claimed = [...report.rejected_uuid_candidates].sort(
      (a, b) =>
        a.receipt_id.localeCompare(b.receipt_id) ||
        a.uuid.localeCompare(b.uuid),
    );
    if (stableArtifactJson(claimed) !== stableArtifactJson(generated))
      conflict("Explicit rejected candidates differ from finalized evidence.", {
        claimed,
        expected: generated,
      });
  }
  const membership = [...receipts.keys()].sort();
  if (
    report.hybrid_search_receipt_ids !== undefined &&
    stableArtifactJson([...report.hybrid_search_receipt_ids].sort()) !==
      stableArtifactJson(membership)
  )
    conflict(
      "Explicit receipt membership differs from the referenced evidence.",
      { claimed: report.hybrid_search_receipt_ids, expected: membership },
    );
  report.rejected_uuid_candidates = generated;
  report.hybrid_search_receipt_ids = [...receipts.keys()].sort();
  return report;
}

// This input is the output of loadReportReceiptEvidence, which authenticates
// artifact bindings and exact bytes. Projection adds no new evidence and never
// replaces the independent public read and adoption checks in preparation.
function projectReceiptIdentity(receipt: ReportReceiptAudit, decision: ReceiptDecision, uuid: string): UnknownRecord {
  const read = decision.direct_read;
  const uuidPattern = /^[0-9a-f]{8}-[0-9a-f]{4}-[1-8][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/iu;
  const hashPattern = /^sha256:[a-f0-9]{64}$/u;
  if (receipt.authenticated !== true || !hashPattern.test(typeof receipt.result_sha256 === "string" ? receipt.result_sha256 : "")
    || !Array.isArray(receipt.candidate_uuids) || !receipt.candidate_uuids.includes(uuid.toLowerCase())
    || !read || read.uuid !== uuid.toLowerCase() || read.state_code !== 100
    || typeof read.base_name_en !== "string" || !read.base_name_en || typeof read.base_name_zh !== "string"
    || !["product", "waste", "elementary"].includes(typeof read.flow_type === "string" ? read.flow_type : "") || !Array.isArray(read.classifications)
    || typeof read.property !== "string" || !read.property || read.flow_property_name_en !== read.property
    || read.flow_property_state_code !== 100 || !uuidPattern.test(typeof read.flow_property_uuid === "string" ? read.flow_property_uuid : "")
    || read.unit_group_state_code !== 100 || !uuidPattern.test(typeof read.unit_group_uuid === "string" ? read.unit_group_uuid : "") || !hashPattern.test(typeof read.response_sha256 === "string" ? read.response_sha256 : "")) {
    invalidIdentity("Adopted receipt does not contain complete verified public identity facts.", uuid);
  }
  const ids = read.classifications.map((entry: unknown) => field(entry,"id")).filter((value): value is string => typeof value === "string" && Boolean(value));
  const labels = read.classifications.map((entry: unknown) => field(entry,"label")).filter((value): value is string => typeof value === "string" && Boolean(value));
  const classification = (ids.length ? ids : labels).sort()[0] ?? "";
  if (!classification && read.flow_type !== "elementary") invalidIdentity("Product and waste identities require an observed classification.", uuid);
  return { state_code: read.state_code, base_name_en: read.base_name_en, base_name_zh: read.base_name_zh,
    flow_type: read.flow_type, classification, property: read.property, unit_group: read.unit_group_uuid };
}

function matchesExplicitIdentity(key: string, claimed: unknown, generated: unknown, read: UnknownRecord | undefined): boolean {
  if (claimed === generated) return true;
  if (key === "classification") return Array.isArray(read?.classifications) && read.classifications.some((entry: unknown) => claimed === field(entry,"id") || claimed === field(entry,"label"));
  if (key === "unit_group") return [read?.unit_group_name_en, read?.unit_group_name_zh, read?.reference_unit].some(value => Boolean(value) && claimed === value);
  return false;
}

function invalidIdentity(message: string, subjectId: unknown): never {
  throw new GoalHarnessError("GOAL_REPORT_RECEIPT_IDENTITY_INVALID", message, {
    phase: "preparation", origin: "receipt_verifier", failure_kind: "receipt_integrity", retryable: false, subject_id: subjectId,
  });
}

function conflict(message: string, details: UnknownRecord): never {
  throw new GoalHarnessError("GOAL_REPORT_DECISION_CONFLICT", message, {
    ...details, phase: "preparation", origin: "harness_review", failure_kind: "author_claim", subject_id: details?.uuid,
  });
}
