import { Ajv2020 } from "ajv/dist/2020.js";
import { GoalHarnessError } from "./errors.ts";
import { resolvePreparedReport, resolvePreparationFailure } from "./report-preparation.ts";
import { readAuthorSubmissionSchema } from "./schema-readers.ts";
export { readAuthorSubmissionSchema } from "./schema-readers.ts";
import { field, record, isRecord, text } from "./domain.ts";
const ajv = new Ajv2020({ allErrors: true, strict: true });
ajv.addFormat(
  "uuid",
  /^[a-f0-9]{8}-[a-f0-9]{4}-[1-8][a-f0-9]{3}-[89ab][a-f0-9]{3}-[a-f0-9]{12}$/i,
);
const validate = ajv.compile(readAuthorSubmissionSchema());
export function resolveAuthorSubmission({ stateDir, task, wire: input, deadline = Infinity }: {stateDir?:string;task:unknown;wire:unknown;deadline?:number}) {
  if (
    !validate(input) || !isRecord(input) ||
    [field(input,"prepared_report"), field(input,"boundary_review_report"), field(input,"failure")].filter(
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
  const wire=record(input);
  if (wire.failure) {
    const observed = resolvePreparationFailure({ stateDir, task, deadline });
    if (observed) throw new GoalHarnessError(observed.failure.code, observed.failure.message, {
      ...observed.failure.details, independently_observed: true,
      preparation_failure_id: observed.manifest.preparation_failure_id,
      preparation_failure: observed,
      author_failure: wire.failure,
    });
    const failure=record(wire.failure);
    throw new GoalHarnessError(text(failure.code), text(failure.message), {
      author_reported: true,
    });
  }
  if (wire.boundary_review_report) {
    if (field(wire.boundary_review_report,"boundary_review") == null)
      throw new GoalHarnessError(
        "GOAL_REPORT_REFERENCE_INVALID",
        "A boundary referral must contain an explicit boundary review request.",
      );
    return { report: wire.boundary_review_report };
  }
  return resolvePreparedReport({
    stateDir:text(stateDir,"prepared report state directory"),
    task,
    submission: wire.prepared_report, deadline,
  });
}
