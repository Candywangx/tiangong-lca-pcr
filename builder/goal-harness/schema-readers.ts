import { readFileSync } from "node:fs";
import { jsonRecord, strings } from "./domain.ts";
import type { UnknownRecord } from "./domain.ts";

/** Fresh JSON schema objects are read from the same runtime-bound assets. */
export function readAuthorSubmissionSchema(): UnknownRecord {
  return jsonRecord(readFileSync(new URL("../schemas/goal-author-submission.schema.json", import.meta.url), "utf8"));
}

export function readAuthorReportSchema(): UnknownRecord & {required: string[]} {
  const schema=jsonRecord(readFileSync(new URL("../schemas/goal-author-report.schema.json", import.meta.url), "utf8"));
  // Runtime v1 remains additive; every Codex wire property must be required.
  return {...schema, required:[...new Set([...strings(schema.required), "boundary_review"])]};
}
