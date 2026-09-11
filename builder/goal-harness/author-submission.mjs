import { readFileSync } from "node:fs";
import Ajv2020 from "ajv/dist/2020.js";
import { GoalHarnessError } from "./errors.mjs";
import { resolvePreparedReport } from "./report-preparation.mjs";
export function readAuthorSubmissionSchema() {
  return JSON.parse(
    readFileSync(
      new URL("../schemas/goal-author-submission.schema.json", import.meta.url),
    ),
  );
}
const ajv = new Ajv2020({ allErrors: true, strict: true });
ajv.addFormat(
  "uuid",
  /^[a-f0-9]{8}-[a-f0-9]{4}-[1-8][a-f0-9]{3}-[89ab][a-f0-9]{3}-[a-f0-9]{12}$/i,
);
const validate = ajv.compile(readAuthorSubmissionSchema());
export function resolveAuthorSubmission({ stateDir, task, wire }) {
  if (
    !validate(wire) ||
    [wire?.prepared_report, wire?.boundary_review_report, wire?.failure].filter(
      (v) => v != null,
    ).length !== 1
  )
    throw new GoalHarnessError(
      "GOAL_REPORT_REFERENCE_INVALID",
      "Contract 2 requires exactly one prepared reference, explicit boundary referral or failure.",
      {
        findings: (
          validate.errors ?? [
            { message: "Exactly one submission outcome is required." },
          ]
        ).map((detail) => ({
          code: "GOAL_REPORT_REFERENCE_INVALID",
          message: detail.message,
          detail,
        })),
      },
    );
  if (wire.failure)
    throw new GoalHarnessError(wire.failure.code, wire.failure.message, {
      author_reported: true,
    });
  if (wire.boundary_review_report) {
    if (wire.boundary_review_report.boundary_review == null)
      throw new GoalHarnessError(
        "GOAL_REPORT_REFERENCE_INVALID",
        "A boundary referral must contain an explicit boundary review request.",
      );
    return { report: wire.boundary_review_report };
  }
  return resolvePreparedReport({
    stateDir,
    task,
    submission: wire.prepared_report,
  });
}
