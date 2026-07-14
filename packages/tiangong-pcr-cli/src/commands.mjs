import { readFileSync } from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

import {
  buildGuidance,
  buildPcrTree,
  createFeedbackDraft,
  listPcrs,
  readPcrMarkdown,
  resolveClassification,
  validateDatasetAgainstGuidance,
  validateModelAgainstGuidance,
} from "../../pcr-core/src/index.mjs";

const defaultRoot = path.resolve(fileURLToPath(new URL("../../..", import.meta.url)));
const VALID_FORMATS = new Set(["json", "markdown", "table"]);
const VALID_FAIL_ON = new Set(["never", "error", "warning"]);
const GLOBAL_OPTIONS = new Set(["root", "format", "help"]);
const COMMAND_OPTIONS = {
  list: new Set(["status", "content-maturity", "page", "page-size", "limit"]),
  tree: new Set(["depth"]),
  resolve: new Set(["classification"]),
  show: new Set(["pcr", "lang"]),
  guidance: new Set(["pcr"]),
  "validate-model": new Set(["pcr", "input", "fail-on"]),
  "validate-dataset": new Set(["pcr", "input", "fail-on"]),
  "feedback:draft": new Set([
    "pcr",
    "type",
    "affected-section",
    "process-id",
    "flow-role",
    "summary",
    "evidence",
    "proposed-change",
  ]),
};
const COMMAND_DEFINITIONS = [
  { key: "list", command: "list" },
  { key: "tree", command: "tree" },
  { key: "resolve", command: "resolve" },
  { key: "show", command: "show" },
  { key: "guidance", command: "guidance" },
  { key: "validate-model", command: "validate-model" },
  { key: "validate-dataset", command: "validate-dataset" },
  { key: "feedback:draft", command: "feedback", positional: ["draft"] },
];

export function runTiangongPcr(argv) {
  try {
    const { command, positional, options } = parseArgs(argv);

    if (command === "help" || !command) {
      validateHelpInvocation({ command, positional, options });
      return ok(helpText(command, positional));
    }
    const definition = requireCommandDefinition(command, positional);
    validateCommandOptions(definition, options);
    if (options.help) {
      return ok(helpText(command, positional));
    }

    const root = path.resolve(String(options.root ?? defaultRoot));
    const format = String(options.format ?? "table");
    validateFormat(format);

    if (command === "list") {
      return ok(writeOutput(paginateList(filterPcrs(listPcrs({ root }), options), options), format, formatListTable));
    }
    if (command === "tree") {
      const depth = options.depth === undefined ? Infinity : positiveIntegerOption(options.depth, "depth");
      const tree = buildPcrTree({ root, depth });
      return ok(writeOutput(tree, format, formatTreeMarkdown));
    }
    if (command === "resolve") {
      const classification = String(options.classification ?? "");
      const [system, version, code] = classification.split(":");
      if (!system || !version || !code) {
        throw new Error("Use --classification <system>:<version>:<code>, for example cpc:3.0:01111");
      }
      return ok(writeOutput(resolveClassification({ root, system, version, code }), format, JSON.stringify));
    }
    if (command === "show") {
      requireOption(options, "pcr");
      return ok(readPcrMarkdown({ root, pcrId: String(options.pcr), language: String(options.lang ?? "en-US") }));
    }
    if (command === "guidance") {
      requireOption(options, "pcr");
      return ok(writeOutput(buildGuidance({ root, pcrId: String(options.pcr) }), format, JSON.stringify));
    }
    if (command === "validate-model") {
      requireOption(options, "pcr");
      requireOption(options, "input");
      const modelText = readFileSync(path.resolve(String(options.input)), "utf8");
      const report = validateModelAgainstGuidance({ root, pcrId: String(options.pcr), model: modelText });
      return ok(writeOutput(
        report,
        format,
        JSON.stringify,
      ), validationExitCode(report, options["fail-on"]));
    }
    if (command === "validate-dataset") {
      requireOption(options, "pcr");
      requireOption(options, "input");
      const datasetText = readFileSync(path.resolve(String(options.input)), "utf8");
      const dataset = parseDatasetInput(datasetText);
      const report = validateDatasetAgainstGuidance({ root, pcrId: String(options.pcr), dataset });
      return ok(writeOutput(
        report,
        format,
        JSON.stringify,
      ), validationExitCode(report, options["fail-on"]));
    }
    if (command === "feedback" && positional[0] === "draft") {
      requireOption(options, "type");
      const draft = createFeedbackDraft({
        root,
        pcrId: options.pcr ? String(options.pcr) : "",
        type: String(options.type),
        affectedSection: String(options["affected-section"] ?? ""),
        processId: String(options["process-id"] ?? ""),
        flowRole: String(options["flow-role"] ?? ""),
        summary: String(options.summary ?? ""),
        evidence: String(options.evidence ?? ""),
        proposedChange: String(options["proposed-change"] ?? ""),
      });
      if (format === "json") {
        return ok(`${JSON.stringify(draft, null, 2)}\n`);
      }
      return ok(`# ${draft.title}\n\n${draft.body}`);
    }

    throw new Error(`Unknown command: ${[command, ...positional].filter(Boolean).join(" ")}`);
  } catch (error) {
    return fail(error);
  }
}

function ok(stdout, exitCode = 0) {
  return { stdout, stderr: "", exitCode };
}

function fail(error) {
  return { stdout: "", stderr: `${error.message}\n`, exitCode: 1 };
}

function commandDefinitionFor(command, positional = []) {
  return COMMAND_DEFINITIONS.find((definition) => {
    if (definition.command !== command) {
      return false;
    }
    const expectedPositionals = definition.positional ?? [];
    return expectedPositionals.length === positional.length
      && expectedPositionals.every((value, index) => positional[index] === value);
  });
}

function requireCommandDefinition(command, positional) {
  const definition = commandDefinitionFor(command, positional);
  if (definition) {
    return definition;
  }

  const commandDefinitions = COMMAND_DEFINITIONS.filter((candidate) => candidate.command === command);
  if (commandDefinitions.length > 0) {
    const expected = commandDefinitions[0].positional ?? [];
    const isExpectedPrefix = expected.every((value, index) => positional[index] === value);
    if (isExpectedPrefix && positional.length > expected.length) {
      throw new Error(`Unexpected positional argument(s) for ${[command, ...expected].join(" ")}: ${positional.slice(expected.length).join(" ")}`);
    }
  }
  throw new Error(`Unknown command: ${[command, ...positional].filter(Boolean).join(" ")}`);
}

function validateHelpInvocation({ command, positional, options }) {
  if (command === "help" && positional.length > 0) {
    throw new Error(`Unexpected positional argument(s) for help: ${positional.join(" ")}`);
  }
  validateOptionsAgainst(options, GLOBAL_OPTIONS);
}

function validateCommandOptions(definition, options) {
  const allowed = new Set([...GLOBAL_OPTIONS, ...(COMMAND_OPTIONS[definition.key] ?? [])]);
  validateOptionsAgainst(options, allowed);
}

function validateOptionsAgainst(options, allowed) {
  for (const [key, value] of Object.entries(options)) {
    if (!allowed.has(key)) {
      throw new Error(`Unknown option --${key}`);
    }
    if (key === "help") {
      if (value !== true) {
        throw new Error("Option --help does not accept a value.");
      }
      continue;
    }
    if (value === true) {
      throw new Error(`Option --${key} requires a value.`);
    }
  }
}

function validateFormat(format) {
  if (!VALID_FORMATS.has(format)) {
    throw new Error(`Invalid --format "${format}". Expected one of: json, markdown, table.`);
  }
}

function parseArgs(argv) {
  const options = {};
  const positional = [];
  let command = "";

  for (let index = 0; index < argv.length; index += 1) {
    const token = argv[index];
    if (token.startsWith("--")) {
      const key = token.slice(2);
      if (!key) {
        throw new Error("Unexpected bare -- argument.");
      }
      if (Object.hasOwn(options, key)) {
        throw new Error(`Duplicate option --${key}`);
      }
      const next = argv[index + 1];
      if (next === undefined || next.startsWith("--")) {
        options[key] = true;
        continue;
      }
      options[key] = next;
      index += 1;
      continue;
    }
    if (!command) {
      command = token;
      continue;
    }
    positional.push(token);
  }

  return { command, positional, options };
}

function writeOutput(value, format, tableFormatter) {
  if (format === "json") {
    return `${JSON.stringify(value, null, 2)}\n`;
  }
  if (format === "markdown") {
    return `${tableFormatter(value)}\n`;
  }
  return `${tableFormatter(value)}\n`;
}

function parseDatasetInput(text) {
  try {
    return JSON.parse(text);
  } catch (error) {
    throw new Error(`Malformed dataset JSON: ${error.message}`);
  }
}

function filterPcrs(pcrs, options) {
  let result = pcrs;
  if (options.status) {
    result = result.filter((entry) => entry.status === String(options.status));
  }
  if (options["content-maturity"]) {
    result = result.filter((entry) => entry.content_maturity === String(options["content-maturity"]));
  }
  return result;
}

function paginateList(pcrs, options) {
  const pageSize = positiveIntegerOption(options["page-size"] ?? options.limit, "page-size", 10);
  const page = positiveIntegerOption(options.page, "page", 1);
  const totalCount = pcrs.length;
  const totalPages = Math.max(1, Math.ceil(totalCount / pageSize));
  if (page > totalPages) {
    throw new Error(`--page ${page} is out of range. Available pages: 1-${totalPages}.`);
  }
  const startIndex = (page - 1) * pageSize;
  const items = pcrs.slice(startIndex, startIndex + pageSize);
  const nextPage = page < totalPages ? page + 1 : null;
  const previousPage = page > 1 ? page - 1 : null;

  return {
    page,
    page_size: pageSize,
    total_count: totalCount,
    total_pages: totalPages,
    items,
    previous_command: previousPage ? buildListCommand({ ...options, page: previousPage }) : null,
    next_command: nextPage ? buildListCommand({ ...options, page: nextPage }) : null,
    next_steps: [
      "If you have a classification code, prefer resolve --classification <system>:<version>:<code>.",
      "If the correct PCR is unclear, inspect tree --depth 3 and then open candidate guidance.",
      "Check items[].readiness and run guidance only when usable_for_guidance is true.",
    ],
  };
}

function validationExitCode(report, failOnValue) {
  const failOn = String(failOnValue ?? "error");
  if (!VALID_FAIL_ON.has(failOn)) {
    throw new Error(`Invalid --fail-on "${failOn}". Expected one of: never, error, warning.`);
  }
  if (failOn === "never") {
    return 0;
  }
  if (report.validation_status === "inconclusive") {
    return 2;
  }
  const errorCount = report.finding_summary?.error ?? 0;
  const warningCount = report.finding_summary?.warning ?? 0;
  if (failOn === "error" && errorCount > 0) {
    return 2;
  }
  if (failOn === "warning" && errorCount + warningCount > 0) {
    return 2;
  }
  return 0;
}

function formatListTable(page) {
  const lines = ["PCR id | Status | Readiness | Title", "--- | --- | --- | ---"];
  for (const pcr of page.items) {
    lines.push(`${pcr.id} | ${pcr.status} | ${pcr.readiness?.status ?? "unknown"} | ${pcr.title["en-US"] ?? ""}`);
  }
  const start = page.total_count === 0 ? 0 : (page.page - 1) * page.page_size + 1;
  const end = Math.min(page.page * page.page_size, page.total_count);
  lines.push("");
  lines.push(`Showing ${start}-${end} of ${page.total_count} PCR records. Page ${page.page} of ${page.total_pages}.`);
  if (page.previous_command) {
    lines.push(`Previous page: ${page.previous_command}`);
  }
  if (page.next_command) {
    lines.push(`Next page: ${page.next_command}`);
  }
  lines.push("Next step: inspect readiness and call `guidance --pcr <pcr-id> --format json` only when `usable_for_guidance` is true; use `resolve` when you have a classification code.");
  return lines.join("\n");
}

function positiveIntegerOption(value, optionName, fallback) {
  if (value === undefined) {
    return fallback;
  }
  const parsed = Number(value);
  if (!Number.isInteger(parsed) || parsed <= 0) {
    throw new Error(`Invalid --${optionName} "${value}". Expected a positive integer.`);
  }
  return parsed;
}

function buildListCommand(options) {
  const parts = ["tiangong-pcr", "list"];
  if (options.status) {
    parts.push("--status", shellToken(String(options.status)));
  }
  if (options["content-maturity"]) {
    parts.push("--content-maturity", shellToken(String(options["content-maturity"])));
  }
  if (options["page-size"]) {
    parts.push("--page-size", shellToken(String(options["page-size"])));
  } else if (options.limit) {
    parts.push("--page-size", shellToken(String(options.limit)));
  }
  if (options.page) {
    parts.push("--page", shellToken(String(options.page)));
  }
  if (options.root) {
    parts.push("--root", shellToken(String(options.root)));
  }
  if (options.format) {
    parts.push("--format", shellToken(String(options.format)));
  }
  return parts.join(" ");
}

function shellToken(value) {
  return /^[A-Za-z0-9_./:-]+$/u.test(value)
    ? value
    : `'${String(value).replaceAll("'", `'"'"'`)}'`;
}

function formatTreeMarkdown(tree) {
  const lines = [];
  renderTreeNode(tree, lines, 0);
  return lines.join("\n");
}

function renderTreeNode(node, lines, depth) {
  for (const [segment, value] of Object.entries(node).sort(([left], [right]) => left.localeCompare(right))) {
    lines.push(`${"  ".repeat(depth)}- ${segment}`);
    for (const pcr of value.pcrs ?? []) {
      lines.push(`${"  ".repeat(depth + 1)}- ${pcr.id}`);
    }
    renderTreeNode(value.children ?? {}, lines, depth + 1);
  }
}

function requireOption(options, key) {
  if (!options[key]) {
    throw new Error(`Missing required option --${key}`);
  }
}

function helpText(command = "", positional = []) {
  const definition = commandDefinitionFor(command, positional);
  if (!definition) {
    return globalHelpText();
  }
  if (definition.key === "list") {
    return `Usage: tiangong-pcr list [options]

Browse PCR records explicitly. This is catalog browsing, not fuzzy search.

Options:
  --status <status>                 Filter by manifest status, for example candidate or scaffold.
  --content-maturity <state>        Filter by content maturity.
  --page <n>                        Page number. Defaults to 1.
  --page-size <n>                   Records per page. Defaults to 10 records per page.
  --format json|markdown|table      Output format. Defaults to table.
  --root <path>                     PCR repository root.

JSON output:
  {
    "page": 1,
    "page_size": 10,
    "total_count": 2877,
    "total_pages": 288,
    "items": [{ "id": "<pcr-id>", "readiness": { "usable_for_guidance": true } }],
    "previous_command": null,
    "next_command": "tiangong-pcr list --page 2",
    "next_steps": []
  }

Agent next step:
  Follow next_command for more pages. Inspect each record's readiness, and only when
  usable_for_guidance is true run: tiangong-pcr guidance --pcr <pcr-id> --format json
`;
  }
  if (definition.key === "tree") {
    return `Usage: tiangong-pcr tree [options]

Show the PCR directory hierarchy so an Agent can inspect available categories before selecting a PCR.

Options:
  --depth <n>                       Limit hierarchy depth.
  --format json|markdown            Output format. Defaults to table-style markdown.
  --root <path>                     PCR repository root.

Agent next step:
  Use tree to narrow the category area, then use list or guidance for concrete PCR records.
`;
  }
  if (definition.key === "resolve") {
    return `Usage: tiangong-pcr resolve --classification <system>:<version>:<code> [options]

Resolve an external classification code through deterministic classification mapping files.
This command does not perform fuzzy search.
Mapping success identifies a PCR record; it does not prove that the methodology is usable.

Options:
  --classification <value>          Example: cpc:3.0:01111.
  --format json                     Output format. JSON is recommended for Agents.
  --root <path>                     PCR repository root.

Example:
  tiangong-pcr resolve --classification cpc:3.0:01111 --format json

Agent next step:
  Inspect pcr.readiness. Use mapping.pcr_id with guidance only when usable_for_guidance is true.
`;
  }
  if (definition.key === "show") {
    return `Usage: tiangong-pcr show --pcr <pcr-id> [options]

Print the human-readable PCR Markdown.

Options:
  --pcr <pcr-id>                    PCR id to display.
  --lang en-US|zh-CN                Markdown language. Defaults to en-US.
  --root <path>                     PCR repository root.

Agent next step:
  Use show for human review. Use guidance for machine-readable model construction rules.
`;
  }
  if (definition.key === "guidance") {
    return `Usage: tiangong-pcr guidance --pcr <pcr-id> [options]

Print Agent-facing structured PCR guidance from generated structured.yaml.
This command rejects scaffold, incomplete, deprecated, or otherwise unusable PCR methodology.

Options:
  --pcr <pcr-id>                    PCR id.
  --format json                     Output format. JSON is recommended for Agents.
  --root <path>                     PCR repository root.

JSON output includes:
  pcr, readiness, system_boundary, reference_flow, measurement_rules, process_map,
  process_inventory, allocation_rules, validation_rules, data_sources, and validation_notes.

Agent next step:
  Build the process or lifecyclemodel from the guidance, then run validate-model.
`;
  }
  if (definition.key === "validate-model") {
    return `Usage: tiangong-pcr validate-model --pcr <pcr-id> --input <file> [options]

Check a process or lifecyclemodel draft against selected PCR guidance.

Options:
  --pcr <pcr-id>                    PCR id.
  --input <file>                    Model draft file.
  --format json                     Output format. JSON is recommended for Agents.
  --fail-on never|error|warning     Exit 2 at the selected finding threshold. Defaults to error.
  --root <path>                     PCR repository root.

JSON output includes:
  validation_status, completeness, input, check_coverage, finding_summary, and findings.

Exit codes:
  0 command completed and the configured finding threshold was not reached;
  1 usage, input, or runtime error; 2 validation is inconclusive or the --fail-on threshold was reached.

Agent next step:
  Address findings in the model. If the PCR guidance is missing or unclear, create feedback.
`;
  }
  if (definition.key === "validate-dataset") {
    return `Usage: tiangong-pcr validate-dataset --pcr <pcr-id> --input <file> [options]

Check a foreground data package JSON object against the implemented subset of selected PCR guidance.
The report states exactly which requirement families were checked or skipped.

Options:
  --pcr <pcr-id>                    PCR id.
  --input <file>                    Foreground data package JSON file. The JSON root must be an object.
  --format json                     Output format. JSON is recommended for Agents.
  --fail-on never|error|warning     Exit 2 at the selected finding threshold. Defaults to error.
  --root <path>                     PCR repository root.

JSON output includes:
  validation_status, completeness, input, check_coverage, finding_summary, and findings.
  A passed status applies only to checks_performed; inspect checks_skipped when completeness is partial.

Exit codes:
  0 command completed and the configured finding threshold was not reached;
  1 malformed JSON, usage, or runtime error; 2 validation is inconclusive or the --fail-on threshold was reached.

Agent next step:
  Address error findings and inspect skipped coverage. Draft feedback when required PCR rules cannot be evaluated.
`;
  }
  if (definition.key === "feedback:draft") {
    return `Usage: tiangong-pcr feedback draft --type <feedback-type> [options]

Create issue-ready Markdown for PCR maintainer feedback. Feedback is candidate evidence, not accepted PCR truth.

Options:
  --pcr <pcr-id>                    Affected PCR id when available.
  --type <feedback-type>            Feedback type.
  --affected-section <section>      Affected PCR section.
  --process-id <process_id>         Affected process_id.
  --flow-role <role>                Affected flow role.
  --summary <text>                  Short finding summary.
  --evidence <text>                 Evidence URLs, files, or notes.
  --proposed-change <text>          Suggested change.
  --format json|markdown            Output format. Defaults to markdown.

Feedback types:
  missing_pcr
  classification_mapping_gap
  unclear_reference_flow
  wrong_or_missing_uuid
  process_boundary_issue
  inventory_flow_gap
  range_evidence_update
  unit_or_flow_property_issue
  validation_rule_issue
  translation_mismatch
  source_update

Agent next step:
  Open a GitHub issue with the generated body, or hand it to a maintainer for intake.
`;
  }

  return globalHelpText();
}

function globalHelpText() {
  return `tiangong-pcr

Usage:
  tiangong-pcr <command> [options]
  tiangong-pcr <command> --help

Commands:
  list [--status <status>] [--content-maturity <state>] [--page <n>] [--page-size <n>] [--format json|markdown|table]
  tree [--depth <n>] [--format json|markdown]
  resolve --classification <system>:<version>:<code> [--format json]
  show --pcr <pcr-id> [--lang en-US|zh-CN]
  guidance --pcr <pcr-id> [--format json]
  validate-model --pcr <pcr-id> --input <file> [--format json] [--fail-on never|error|warning]
  validate-dataset --pcr <pcr-id> --input <file> [--format json] [--fail-on never|error|warning]
  feedback draft --pcr <pcr-id> --type <type> [--summary <text>]

Agent workflow:
  1. If a classification code is available, run resolve --classification <system>:<version>:<code> --format json.
  2. If no code is available, use tree/list to browse explicit PCR hierarchy. list defaults to 10 records per page.
  3. Check the returned readiness. Run guidance only when usable_for_guidance is true.
  4. Build a model or foreground data collection package, then run validate-model or validate-dataset.
  5. If PCR guidance is missing or ambiguous, run feedback draft with the observed gap.
`;
}
