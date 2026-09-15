import { GoalHarnessError } from "./errors.mjs";
import { stableArtifactJson } from "./artifact-io.mjs";

export function assembleAuthorReport({ draft, receiptAudits }) {
  const report = structuredClone(draft);
  delete report.receipt_ids;
  const sparse = draft.schema_version === 2;
  if (sparse) {
    report.schema_version = 1;
    const claimed = new Set(), receiptIds = new Set();
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
function projectReceiptIdentity(receipt, decision, uuid) {
  const read = decision.direct_read;
  const uuidPattern = /^[0-9a-f]{8}-[0-9a-f]{4}-[1-8][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/iu;
  const hashPattern = /^sha256:[a-f0-9]{64}$/u;
  if (receipt.authenticated !== true || !hashPattern.test(receipt.result_sha256)
    || !Array.isArray(receipt.candidate_uuids) || !receipt.candidate_uuids.includes(uuid.toLowerCase())
    || !read || read.uuid !== uuid.toLowerCase() || read.state_code !== 100
    || typeof read.base_name_en !== "string" || !read.base_name_en || typeof read.base_name_zh !== "string"
    || !["product", "waste", "elementary"].includes(read.flow_type) || !Array.isArray(read.classifications)
    || typeof read.property !== "string" || !read.property || read.flow_property_name_en !== read.property
    || read.flow_property_state_code !== 100 || !uuidPattern.test(read.flow_property_uuid)
    || read.unit_group_state_code !== 100 || !uuidPattern.test(read.unit_group_uuid) || !hashPattern.test(read.response_sha256)) {
    invalidIdentity("Adopted receipt does not contain complete verified public identity facts.", uuid);
  }
  const ids = read.classifications.map(entry => entry.id).filter(value => typeof value === "string" && value);
  const labels = read.classifications.map(entry => entry.label).filter(value => typeof value === "string" && value);
  const classification = (ids.length ? ids : labels).sort()[0] ?? "";
  if (!classification && read.flow_type !== "elementary") invalidIdentity("Product and waste identities require an observed classification.", uuid);
  return { state_code: read.state_code, base_name_en: read.base_name_en, base_name_zh: read.base_name_zh,
    flow_type: read.flow_type, classification, property: read.property, unit_group: read.unit_group_uuid };
}

function matchesExplicitIdentity(field, claimed, generated, read) {
  if (claimed === generated) return true;
  if (field === "classification") return read.classifications.some(entry => claimed === entry.id || claimed === entry.label);
  if (field === "unit_group") return [read.unit_group_name_en, read.unit_group_name_zh, read.reference_unit].some(value => value && claimed === value);
  return false;
}

function invalidIdentity(message, subjectId) {
  throw new GoalHarnessError("GOAL_REPORT_RECEIPT_IDENTITY_INVALID", message, {
    phase: "preparation", origin: "receipt_verifier", failure_kind: "receipt_integrity", retryable: false, subject_id: subjectId,
  });
}

function conflict(message, details) {
  throw new GoalHarnessError("GOAL_REPORT_DECISION_CONFLICT", message, {
    ...details, phase: "preparation", origin: "harness_review", failure_kind: "author_claim", subject_id: details?.uuid,
  });
}
