#!/usr/bin/env node
import { pathToFileURL } from "node:url";
import { loadGoalConfig } from "../goal-harness/config.mjs";
import { goalStateDir } from "../goal-harness/commands.mjs";
import { prepareAuthorReport } from "../goal-harness/report-preparation.mjs";
import { selectRecovery } from "../goal-harness/errors.mjs";
const HELP = `Prepare an independently checkable author report from a draft and finalized receipts.

Usage: npm run goal:prepare-report -- --config <goal.yaml> --task <task-id> --draft <absolute-json-file> [--format human|json]

Run in the assigned worktree after committing the four PCR files. Draft schema: builder/schemas/goal-author-draft.schema.json.
The program fills rejected candidate reasons and receipt membership, preserves the draft, audits evidence and runs actual PCR/sync checks. Identity or decision conflicts fail.
JSON success is a submission envelope with a prepared-report reference; failures leave stdout empty and return stable error/details on stderr.
Next: return the successful JSON envelope verbatim as your final answer; independent coordinator acceptance still runs.
`;
export function main(argv = process.argv.slice(2), io = process, dependencies = {}) {
  if (argv.length === 0 || argv.includes("--help")) {
    io.stdout.write(HELP);
    return 0;
  }
  const format = argv.includes("--format")
    ? argv[argv.indexOf("--format") + 1]
    : "json";
  try {
    const options = {},
      allowed = new Set(["--config", "--task", "--draft", "--format"]);
    for (let i = 0; i < argv.length; i += 2) {
      const k = argv[i],
        v = argv[i + 1];
      if (
        !allowed.has(k) ||
        options[k] !== undefined ||
        !v ||
        v.startsWith("--")
      )
        throw Object.assign(new Error(`Invalid or duplicate option: ${k}`), {
          code: "GOAL_REPORT_ARGUMENT_INVALID",
        });
      options[k] = v;
    }
    if (
      !["json", "human"].includes(format) ||
      !options["--config"] ||
      !options["--task"] ||
      !options["--draft"]
    )
      throw Object.assign(
        new Error(
          "--config, --task and --draft are required; --format must be human or json.",
        ),
        { code: "GOAL_REPORT_ARGUMENT_INVALID" },
      );
    const config = (dependencies.loadGoalConfig ?? loadGoalConfig)({ configPath: options["--config"] });
    const prepared = (dependencies.prepareAuthorReport ?? prepareAuthorReport)({
      config,
      stateDir: goalStateDir(config),
      taskId: options["--task"],
      draftPath: options["--draft"],
    });
    const wire = {
      schema_version: 2,
      prepared_report: prepared,
      boundary_review_report: null,
      failure: null,
    };
    io.stdout.write(
      format === "json"
        ? `${JSON.stringify(wire, null, 2)}\n`
        : `Prepared report ${prepared.prepared_report_id}\n${JSON.stringify(
            wire,
          )}\n`,
    );
    return 0;
  } catch (error) {
    const result = {
      ok: false,
      error: {
        code: error.code ?? "GOAL_REPORT_PREPARATION_FAILED",
        message: error.message,
        details: error.details ?? null,
      },
      next_action: preparationNextAction(error),
    };
    io.stderr.write(
      format === "human"
        ? `[${result.error.code}] ${error.message}\nNext: ${result.next_action}\n`
        : `${JSON.stringify(result, null, 2)}\n`,
    );
    return 2;
  }
}

function preparationNextAction(error) {
  if (error.code === "GOAL_REPORT_ARGUMENT_INVALID") return "Fix the command options using goal:prepare-report --help, then repeat preparation.";
  const recovery = selectRecovery(error, { completeReport: false });
  switch (recovery.action) {
    case "repair":
      return "Fix the reported draft or PCR findings, resync/recommit when needed, and repeat preparation to finish all remaining checks. Preserve finalized receipts.";
    case "resume":
      return "Preserve the draft, receipts, and PCR worktree; repeat preparation after the service recovers. If this turn has ended, use the existing goal:resume path. This is not a content repair.";
    case "defer":
      return "Continue preparation in the next execution window using the preserved draft, receipts, and PCR worktree; this continuation consumes neither content-repair nor infrastructure-retry budget.";
    case "manual_review":
      return `Preserve the draft, receipts, and PCR worktree and request ${recovery.category} review before repeating preparation.`;
    default:
      return "Pause preparation and have the coordinator inspect the reported failure before retrying. Preserve the draft, finalized receipts, and PCR worktree.";
  }
}
if (import.meta.url === pathToFileURL(process.argv[1] ?? "").href)
  process.exitCode = main();
