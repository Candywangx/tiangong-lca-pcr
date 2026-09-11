#!/usr/bin/env node
import { pathToFileURL } from "node:url";
import { loadGoalConfig } from "../goal-harness/config.mjs";
import { goalStateDir } from "../goal-harness/commands.mjs";
import { prepareAuthorReport } from "../goal-harness/report-preparation.mjs";
const HELP = `Prepare an independently checkable author report from a draft and finalized receipts.

Usage: npm run goal:prepare-report -- --config <goal.yaml> --task <task-id> --draft <absolute-json-file> [--format human|json]

Run in the assigned worktree after committing the four PCR files. Draft schema: builder/schemas/goal-author-draft.schema.json.
The program fills rejected candidate reasons and receipt membership, preserves the draft, audits evidence and runs actual PCR/sync checks. Identity or decision conflicts fail.
JSON success is a submission envelope with a prepared-report reference; failures leave stdout empty and return stable error/details on stderr.
Next: return the successful JSON envelope verbatim as your final answer; independent coordinator acceptance still runs.
`;
export function main(argv = process.argv.slice(2), io = process) {
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
    const config = loadGoalConfig({ configPath: options["--config"] });
    const prepared = prepareAuthorReport({
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
      next_action:
        "Fix the draft or PCR in this turn, resync/recommit when needed, and repeat preparation. Do not alter finalized receipts.",
    };
    io.stderr.write(
      format === "human"
        ? `[${result.error.code}] ${error.message}\n`
        : `${JSON.stringify(result, null, 2)}\n`,
    );
    return 2;
  }
}
if (import.meta.url === pathToFileURL(process.argv[1] ?? "").href)
  process.exitCode = main();
