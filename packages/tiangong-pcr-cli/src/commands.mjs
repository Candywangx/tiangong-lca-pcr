import { createRequire } from "node:module";
import { OfflineLibrary } from "../../pcr-core/src/offline-library.mjs";
import { withPcrSource } from "../../pcr-core/src/source-context.mjs";
import { existsSync, readFileSync, writeFileSync } from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { GUIDANCE_TOPICS, selectGuidance } from "../../pcr-core/src/consumption-guidance.ts";
import { inspectTidas, INSPECTION_SECTIONS } from "../../pcr-core/src/tidas-inspection.mjs";
import { prepareReview, checkReview } from "../../pcr-core/src/consumption-review.mjs";
import { calculate } from "../../pcr-core/src/consumption-calculation.mjs";
import { readJsonDocument, sha256 } from "../../pcr-core/src/consumption-data.ts";

import {
  CLASSIFICATION_COVERAGE_STATUSES,
  FEEDBACK_TYPES,
  PCR_CATALOG_SCOPES,
  buildGuidance,
  buildPcrTree,
  createFeedbackDraft,
  getClassificationCoverageSummary,
  listClassificationCoverage,
  listPcrs,
  readPcrMarkdown,
  resolveClassification,
  resolvePcrIdentity,
  validateDatasetAgainstGuidance,
  validateModelAgainstGuidance,
} from "../../pcr-core/src/index.mjs";
import {
  CONTENT_MATURITY_VALUES,
  PCR_STATUS_VALUES,
} from "../../pcr-core/src/generated/controlled-vocabulary.mjs";

const defaultRoot = path.resolve(fileURLToPath(new URL("../../..", import.meta.url)));
const VALID_FAIL_ON = new Set(["never", "error", "warning"]);
const VALID_LANGUAGES = new Set(["en-US", "zh-CN"]);
const VALID_PCR_STATUSES = new Set(PCR_STATUS_VALUES);
const VALID_CONTENT_MATURITIES = new Set(CONTENT_MATURITY_VALUES);
const VALID_CATALOG_SCOPES = new Set(PCR_CATALOG_SCOPES);
const VALID_COVERAGE_STATUSES = new Set(CLASSIFICATION_COVERAGE_STATUSES);
const GLOBAL_OPTIONS = new Set(["root", "library", "library-sha256", "format", "help"]);
const GLOBAL_HELP_OPTIONS = new Set(["root", "library", "library-sha256", "help"]);
const COMMAND_OPTIONS = {
  library: new Set(),
  "library:info": new Set(),
  "library:verify": new Set(),
  list: new Set(["status", "content-maturity", "path-prefix", "scope", "page", "page-size"]),
  tree: new Set(["depth", "scope"]),
  coverage: new Set(),
  "coverage:summary": new Set(["classification"]),
  "coverage:list": new Set(["classification", "status", "page", "page-size"]),
  resolve: new Set(["classification", "pcr"]),
  show: new Set(["pcr", "lang"]),
  guidance: new Set(["pcr", "topic", "pointer", "page", "page-size", "output"]),
  inspect: new Set(["input", "related", "section", "pointer", "page", "page-size", "output"]),
  calculate: new Set(["input", "output"]),
  review: new Set(),
  "review:prepare": new Set(["pcr", "input", "related", "output"]),
  "review:check": new Set(["pcr", "input", "related", "report", "output"]),
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
  { key: "library", command: "library", formats: ["json"], defaultFormat: "json" },
  { key: "library:info", command: "library", positional: ["info"], formats: ["json"], defaultFormat: "json" },
  { key: "library:verify", command: "library", positional: ["verify"], formats: ["json"], defaultFormat: "json" },
  { key: "list", command: "list", formats: ["json", "markdown", "table"], defaultFormat: "table" },
  { key: "tree", command: "tree", formats: ["json", "markdown"], defaultFormat: "markdown" },
  { key: "coverage", command: "coverage", formats: ["json", "table"], defaultFormat: "table" },
  {
    key: "coverage:summary",
    command: "coverage",
    positional: ["summary"],
    formats: ["json", "table"],
    defaultFormat: "table",
  },
  {
    key: "coverage:list",
    command: "coverage",
    positional: ["list"],
    formats: ["json", "table"],
    defaultFormat: "table",
  },
  { key: "resolve", command: "resolve", formats: ["json"], defaultFormat: "json" },
  { key: "show", command: "show", formats: ["markdown"], defaultFormat: "markdown" },
  { key: "guidance", command: "guidance", formats: ["json"], defaultFormat: "json" },
  { key: "inspect", command: "inspect", formats: ["json"], defaultFormat: "json" },
  { key: "calculate", command: "calculate", formats: ["json"], defaultFormat: "json" },
  { key: "review", command: "review", formats: ["json"], defaultFormat: "json" },
  { key: "review:prepare", command: "review", positional: ["prepare"], formats: ["json"], defaultFormat: "json" },
  { key: "review:check", command: "review", positional: ["check"], formats: ["json"], defaultFormat: "json" },
  { key: "validate-model", command: "validate-model", formats: ["json"], defaultFormat: "json" },
  { key: "validate-dataset", command: "validate-dataset", formats: ["json"], defaultFormat: "json" },
  {
    key: "feedback:draft",
    command: "feedback",
    positional: ["draft"],
    formats: ["json", "markdown"],
    defaultFormat: "markdown",
  },
];

export class CliError extends Error {
  constructor(code, message, details = undefined) {
    super(message);
    this.name = "CliError";
    this.code = code;
    this.details = details === undefined ? undefined : structuredClone(details);
  }
}

function installedLibrary() {
  for (const filename of [path.join(process.cwd(), "package.json"), import.meta.url]) {
    try { return path.join(path.dirname(createRequire(filename).resolve("@tiangong-lca/pcr-library/package.json")), "library.sqlite"); } catch {}
  }
  return null;
}

function toolVersion() {
  const developmentManifest = fileURLToPath(new URL("../package.json", import.meta.url));
  const filename = existsSync(developmentManifest) ? developmentManifest : path.join(defaultRoot, "package.json");
  return JSON.parse(readFileSync(filename, "utf8")).version;
}

export function runTiangongPcr(argv) {
  let library;
  try {
    if (argv.length === 1 && argv[0] === "--version") return ok(`${toolVersion()}\n`);
    const { command, positional, options } = parseArgs(argv);
    if (!command || command === "help" || options.help) return runCommand(argv);
    if (command === "library" && positional.length === 0) throw new CliError("PCR_CLI_MISSING_SUBCOMMAND", "Use library info or library verify with --library <file>.");
    if (options.root && options.library) throw new CliError("PCR_CLI_SOURCE_CONFLICT", "Choose either --root or --library.");
    if (["inspect", "calculate"].includes(command)) {
      if (options.library || options["library-sha256"]) throw new CliError("PCR_CLI_SOURCE_UNUSED", `${command} uses local input only; omit --library and --library-sha256.`);
      return runCommand(argv);
    }
    const filename = options.library ?? (options.root ? null : process.env.PCR_LIBRARY ?? (existsSync(path.join(defaultRoot, "library/catalog.yaml")) ? null : installedLibrary()));
    if (!filename) {
      if (options["library-sha256"] || command === "library") throw new CliError("PCR_LIBRARY_REQUIRED", "Select a local snapshot with --library <library.sqlite>.");
      if (!options.root && !existsSync(path.join(defaultRoot, "library/catalog.yaml"))) throw new CliError("PCR_LIBRARY_REQUIRED", "No offline library found. Install @tiangong-lca/pcr-library or pass --library <library.sqlite>.");
      return runCommand(argv);
    }
    // Validate the command before opening a potentially large data file.
    const definition = requireCommandDefinition(command, positional);
    validateCommandOptions(definition, options);
    validateCommandFormat(definition, options.format);
    library = new OfflineLibrary(String(filename), { expectedSha256: options["library-sha256"] ?? null, verify: command === "library" && positional[0] === "verify" });
    if (command === "library") return ok(`${JSON.stringify({ tool_version: toolVersion(), ...library.manifest, verified: positional[0] === "verify" || Boolean(options["library-sha256"]) }, null, 2)}\n`);
    return withPcrSource(library.root, library, () => runCommand(argv, { root: library.root, library: path.resolve(filename), "library-sha256": options["library-sha256"] }));
  } catch (error) {
    return fail(error, requestedFormatFromArgv(argv), requestedRootFromArgv(argv));
  } finally { library?.close(); }
}

function runCommand(argv, selected = null) {
  const requestedFormat = requestedFormatFromArgv(argv);
  const requestedRoot = requestedRootFromArgv(argv);
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

    if (selected) options.library = selected.library;
    const root = selected?.root ?? path.resolve(String(options.root ?? defaultRoot));
    const format = validateCommandFormat(definition, options.format);

    if (command === "list") {
      validateListOptions(options);
      const scope = effectiveCatalogScope(options);
      const page = paginateList(
        filterPcrs(listPcrs({ root, scope: scope.effective }), options),
        options,
        scope,
      );
      return ok(writeOutput(page, format, formatListTable));
    }
    if (command === "tree") {
      const depth = positiveIntegerOption(options.depth, "depth", 2);
      const scope = effectiveCatalogScope(options);
      const tree = buildPcrTree({ root, depth, scope: scope.effective });
      if (format === "json") {
        return ok(`${JSON.stringify(treeOutput(tree, depth, scope), null, 2)}\n`);
      }
      return ok(`${formatTreeMarkdown(tree, depth, scope)}\n`);
    }
    if (command === "coverage" && positional.length === 0) {
      throw new CliError(
        "PCR_CLI_MISSING_SUBCOMMAND",
        "Missing coverage subcommand. Use `coverage summary --classification <system>:<version>` or `coverage list --classification <system>:<version>`.",
        { command: "coverage", valid_subcommands: ["summary", "list"] },
      );
    }
    if (command === "coverage" && positional[0] === "summary") {
      const classification = parseClassificationSelector(options.classification, {
        includeCode: false,
      });
      const summary = coverageSummaryOutput(
        getClassificationCoverageSummary({ root, ...classification }),
        options,
      );
      return ok(writeOutput(summary, format, formatCoverageSummary));
    }
    if (command === "coverage" && positional[0] === "list") {
      const classification = parseClassificationSelector(options.classification, {
        includeCode: false,
      });
      validateCoverageListOptions(options);
      const result = listClassificationCoverage({
        root,
        ...classification,
        status: options.status === undefined ? null : String(options.status),
      });
      const page = paginateCoverage(result, classification, options);
      return ok(writeOutput(page, format, formatCoverageList));
    }
    if (command === "resolve") {
      validateResolveSelector(options);
      if (options.pcr !== undefined) {
        const resolution = resolvePcrIdentity({ root, pcrId: String(options.pcr) });
        return ok(`${JSON.stringify(resolvePcrIdentityOutput(resolution, options), null, 2)}\n`);
      }
      const classification = parseClassificationSelector(options.classification, {
        includeCode: true,
      });
      const resolution = resolveClassification({ root, ...classification });
      return ok(`${JSON.stringify(resolveOutput(resolution, options), null, 2)}\n`);
    }
    if (command === "show") {
      requireOption(options, "pcr");
      const language = String(options.lang ?? "en-US");
      if (!VALID_LANGUAGES.has(language)) {
        throw invalidChoiceError("lang", language, [...VALID_LANGUAGES]);
      }
      return ok(readPcrMarkdown({ root, pcrId: String(options.pcr), language }));
    }
    if (command === "guidance") {
      requireOption(options, "pcr");
      if (["topic", "pointer", "page", "page-size"].some((key) => options[key] !== undefined)) {
        validatePointerOptions(options, "topic");
        const report = selectGuidance({ root, pcrId: String(options.pcr), topic: options.topic, pointer: options.pointer, ...consumptionPage(options) });
        return consumptionOutput(withConsumptionContinuation(report, "guidance", options), options);
      }
      if (options.output) return consumptionOutput(buildGuidance({ root, pcrId: String(options.pcr) }), options);
      return ok(writeOutput(buildGuidance({ root, pcrId: String(options.pcr) }), format, JSON.stringify));
    }
    if (command === "inspect") {
      requireOption(options, "input");
      validatePointerOptions(options, "section");
      if (options.pointer === undefined && (!options.section || options.section === "summary") && (options.page || options["page-size"])) {
        throw new CliError("PCR_CLI_OPTION_CONFLICT", "Summary is not paginated. Choose --section references|exchanges|instances|documents for paging.");
      }
      const report = inspectTidas({ input: options.input, related: options.related, section: options.section, pointer: options.pointer, ...consumptionPage(options) });
      return consumptionOutput(withConsumptionContinuation(report, "inspect", options), options);
    }
    if (command === "calculate") {
      requireOption(options, "input");
      const source = readJsonDocument(options.input);
      return consumptionOutput({ ...calculate(source.value), request_source: { file: source.file, sha256: source.sha256 } }, options);
    }
    if (command === "review") {
      if (!positional.length) throw new CliError("PCR_CLI_MISSING_SUBCOMMAND", "Use review prepare to create an Agent draft or review check to verify its envelope. Run review --help.");
      requireOption(options, "input");
      requireOption(options, "pcr");
      const args = { root, pcrId: String(options.pcr), input: options.input, related: options.related };
      if (positional[0] === "prepare") return consumptionOutput(prepareReview(args), options);
      requireOption(options, "report");
      const source = readJsonDocument(options.report);
      const report = checkReview({ ...args, report: source.value });
      return consumptionOutput({ ...report, report_source: { file: source.file, sha256: source.sha256 } }, options, report.envelope_valid ? 0 : 2);
    }
    if (command === "validate-model") {
      requireOption(options, "pcr");
      requireOption(options, "input");
      const failOn = validateFailOn(options["fail-on"]);
      const modelText = readInputFile(options.input);
      const report = validateModelAgainstGuidance({ root, pcrId: String(options.pcr), model: modelText });
      return ok(writeOutput(
        report,
        format,
        JSON.stringify,
      ), validationExitCode(report, failOn));
    }
    if (command === "validate-dataset") {
      requireOption(options, "pcr");
      requireOption(options, "input");
      const failOn = validateFailOn(options["fail-on"]);
      const datasetText = readInputFile(options.input);
      const dataset = parseDatasetInput(datasetText);
      const report = validateDatasetAgainstGuidance({ root, pcrId: String(options.pcr), dataset });
      return ok(writeOutput(
        report,
        format,
        JSON.stringify,
      ), validationExitCode(report, failOn));
    }
    if (command === "feedback" && positional[0] === "draft") {
      requireOption(options, "type");
      const feedbackType = String(options.type);
      if (!FEEDBACK_TYPES.includes(feedbackType)) {
        throw invalidChoiceError("type", feedbackType, FEEDBACK_TYPES);
      }
      const draft = createFeedbackDraft({
        root,
        pcrId: options.pcr ? String(options.pcr) : "",
        type: feedbackType,
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

    throw new CliError(
      "PCR_CLI_UNKNOWN_COMMAND",
      `Unknown command: ${[command, ...positional].filter(Boolean).join(" ")}`,
    );
  } catch (error) {
    return fail(error, requestedFormat, requestedRoot, selected);
  }
}

function ok(stdout, exitCode = 0) {
  return { stdout, stderr: "", exitCode };
}

function consumptionPage(options) {
  return {
    page: positiveIntegerOption(options.page, "page", 1),
    pageSize: positiveIntegerOption(options["page-size"], "page-size", 10, 100),
  };
}

function validatePointerOptions(options, selector) {
  if (options.pointer !== undefined && [selector, "page", "page-size"].some((key) => options[key] !== undefined)) {
    throw new CliError("PCR_CLI_OPTION_CONFLICT", `Use --pointer alone, or --${selector} with optional pagination.`);
  }
}

function withConsumptionContinuation(report, command, options) {
  const parts = command === "guidance" ? commandPrefix(options) : ["tiangong-pcr"];
  parts.push(command);
  if (command === "guidance") parts.push(...sourceArguments(options));
  for (const key of command === "guidance" ? ["pcr", "topic"] : ["input", "related", "section"]) {
    if (options[key] !== undefined) parts.push(`--${key}`, shellToken(["input", "related"].includes(key) ? path.resolve(options[key]) : options[key]));
  }
  const pagination = report.pagination;
  return {
    ...report,
    next_command: pagination?.has_more ? `${parts.join(" ")} --page ${pagination.page + 1} --page-size ${pagination.page_size} --format json` : null,
    next_step: command === "guidance"
      ? "Read relevant topics; use --pointer with an item's source.pointer for complete text. Judge applicability and cite the returned source."
      : "Inspect paged exchanges/instances and references; use --pointer with source.pointer for full fields. Resolve evidence gaps before methodological conclusions.",
  };
}

function consumptionOutput(report, options, exitCode = 0) {
  const output = `${JSON.stringify(report, null, 2)}\n`;
  if (options.output) {
    const filename = path.resolve(String(options.output));
    try { writeFileSync(filename, output, { encoding: "utf8", flag: "wx" }); }
    catch (error) { throw new CliError("PCR_CLI_OUTPUT_WRITE", `Cannot create new output file ${filename}: ${error.message}. Choose an unused path in an existing directory.`); }
    return ok(`${JSON.stringify({ artifact: filename, sha256: sha256(output), bytes: Buffer.byteLength(output), kind: report.report_kind ?? report.check_kind ?? report.guidance_kind ?? report.inspection_kind ?? report.calculation_kind, ...(report.envelope_valid === undefined ? {} : { envelope_valid: report.envelope_valid, methodology_approval: false }), next_step: "Read the saved artifact. Source inputs were not modified." }, null, 2)}\n`, exitCode);
  }
  if (output.length > 32768) throw new CliError("PCR_CLI_OUTPUT_LARGE", "Result exceeds 32768 characters. Use --output <new-file> for the complete artifact or request a smaller page/pointer.");
  return ok(output, exitCode);
}

function fail(error, requestedFormat, requestedRoot, selected = null) {
  const normalized = normalizeError(error);
  if (
    normalized.code === "PCR_LEGACY_ID_REDIRECT"
    && normalized.details?.target
  ) {
    const originalNextCommand = normalized.details.next_command;
    const nextCommand = legacyRedirectCommand(
      normalized.details.target,
      { root: requestedRoot, library: selected?.library, "library-sha256": selected?.["library-sha256"] },
    );
    normalized.details.next_command = nextCommand;
    normalized.message = typeof originalNextCommand === "string"
      && normalized.message.includes(originalNextCommand)
      ? normalized.message.replace(originalNextCommand, nextCommand)
      : `${normalized.message} Next: ${nextCommand}`;
  }
  if (requestedFormat === "json") {
    return {
      stdout: "",
      stderr: `${JSON.stringify({ error: { ...normalized, exit_code: 1 } }, null, 2)}\n`,
      exitCode: 1,
    };
  }
  return {
    stdout: "",
    stderr: `[${normalized.code}] ${normalized.message}\n`,
    exitCode: 1,
  };
}

function requestedFormatFromArgv(argv) {
  for (let index = argv.length - 2; index >= 0; index -= 1) {
    if (argv[index] === "--format" && argv[index + 1] === "json") {
      return "json";
    }
  }
  const index = argv.lastIndexOf("--format");
  return index >= 0 && typeof argv[index + 1] === "string" ? argv[index + 1] : null;
}

function requestedRootFromArgv(argv) {
  const index = argv.lastIndexOf("--root");
  const value = index >= 0 ? argv[index + 1] : undefined;
  return typeof value === "string" && !value.startsWith("--") ? value : undefined;
}

function normalizeError(error) {
  const message = error instanceof Error ? error.message : String(error);
  const code = error instanceof CliError || /^PCR_/u.test(String(error?.code ?? ""))
    ? String(error.code)
    : "PCR_CLI_RUNTIME_ERROR";
  const details = coreOrCliErrorDetails(error);
  return details === undefined ? { code, message } : { code, message, details };
}

function coreOrCliErrorDetails(error) {
  if (error instanceof CliError) {
    return error.details;
  }
  if (error?.details !== undefined) {
    return structuredClone(error.details);
  }
  if (error?.readiness !== undefined) {
    return { readiness: structuredClone(error.readiness) };
  }
  if (typeof error?.toJSON === "function") {
    const serialized = error.toJSON();
    if (serialized && typeof serialized === "object") {
      const { code: _code, ...details } = serialized;
      return details;
    }
  }
  if (error?.details && typeof error.details === "object") {
    return structuredClone(error.details);
  }
  return undefined;
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

  if (command === "coverage") {
    const subcommand = positional[0] ?? "";
    if (!["summary", "list"].includes(subcommand)) {
      throw new CliError(
        "PCR_CLI_UNKNOWN_SUBCOMMAND",
        `Unknown coverage subcommand${subcommand ? `: ${subcommand}` : ""}. Use \`coverage summary --classification <system>:<version>\` or \`coverage list --classification <system>:<version>\`.`,
        { command: "coverage", subcommand: subcommand || null, valid_subcommands: ["summary", "list"] },
      );
    }
    throw new CliError(
      "PCR_CLI_UNEXPECTED_POSITIONAL",
      `Unexpected positional argument(s) for coverage ${subcommand}: ${positional.slice(1).join(" ")}`,
    );
  }

  const commandDefinitions = COMMAND_DEFINITIONS.filter((candidate) => candidate.command === command);
  if (commandDefinitions.length > 0) {
    const expected = commandDefinitions[0].positional ?? [];
    const isExpectedPrefix = expected.every((value, index) => positional[index] === value);
    if (isExpectedPrefix && positional.length > expected.length) {
      throw new CliError(
        "PCR_CLI_UNEXPECTED_POSITIONAL",
        `Unexpected positional argument(s) for ${[command, ...expected].join(" ")}: ${positional.slice(expected.length).join(" ")}`,
      );
    }
  }
  throw new CliError(
    "PCR_CLI_UNKNOWN_COMMAND",
    `Unknown command: ${[command, ...positional].filter(Boolean).join(" ")}`,
  );
}

function validateHelpInvocation({ command, positional, options }) {
  if (command === "help" && positional.length > 0) {
    throw new CliError(
      "PCR_CLI_UNEXPECTED_POSITIONAL",
      `Unexpected positional argument(s) for help: ${positional.join(" ")}`,
    );
  }
  validateOptionsAgainst(options, GLOBAL_HELP_OPTIONS);
  if (!command && options.help !== true && Object.keys(options).length > 0) {
    throw new CliError(
      "PCR_CLI_MISSING_COMMAND",
      "Missing command. Run tiangong-pcr --help to inspect available commands.",
    );
  }
}

function validateCommandOptions(definition, options) {
  const allowed = new Set([...GLOBAL_OPTIONS, ...(COMMAND_OPTIONS[definition.key] ?? [])]);
  validateOptionsAgainst(options, allowed);
}

function validateOptionsAgainst(options, allowed) {
  for (const [key, value] of Object.entries(options)) {
    if (!allowed.has(key)) {
      throw new CliError("PCR_CLI_UNKNOWN_OPTION", `Unknown option --${key}`, { option: key });
    }
    if (key === "help") {
      if (value !== true) {
        throw new CliError(
          "PCR_CLI_INVALID_OPTION",
          "Option --help does not accept a value.",
          { option: key, value },
        );
      }
      continue;
    }
    if (value === true) {
      throw new CliError(
        "PCR_CLI_MISSING_OPTION_VALUE",
        `Option --${key} requires a value.`,
        { option: key },
      );
    }
  }
}

function validateCommandFormat(definition, formatValue) {
  const format = String(formatValue ?? definition.defaultFormat);
  if (!definition.formats.includes(format)) {
    throw invalidChoiceError("format", format, definition.formats, {
      command: [definition.command, ...(definition.positional ?? [])].join(" "),
    });
  }
  return format;
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
        throw new CliError("PCR_CLI_INVALID_ARGUMENT", "Unexpected bare -- argument.");
      }
      if (Object.hasOwn(options, key)) {
        throw new CliError("PCR_CLI_DUPLICATE_OPTION", `Duplicate option --${key}`, { option: key });
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
    throw new CliError(
      "PCR_CLI_INVALID_DATASET_JSON",
      `Malformed dataset JSON: ${error.message}`,
    );
  }
}

function readInputFile(value) {
  const inputPath = path.resolve(String(value));
  try {
    return readFileSync(inputPath, "utf8");
  } catch (error) {
    throw new CliError(
      "PCR_CLI_INPUT_READ_FAILED",
      `Unable to read --input file ${inputPath}: ${error.message}`,
      { input: inputPath },
    );
  }
}

function parseClassificationSelector(value, { includeCode }) {
  const classification = String(value ?? "");
  const parts = classification.split(":");
  const expectedParts = includeCode ? 3 : 2;
  if (parts.length !== expectedParts || parts.some((part) => part.length === 0)) {
    const expected = includeCode
      ? "<system>:<version>:<code>, for example cpc:3.0:01111"
      : "<system>:<version>, for example cpc:3.0";
    throw new CliError(
      "PCR_CLI_INVALID_CLASSIFICATION",
      `Use --classification ${expected}`,
      { value: classification, expected_segments: expectedParts },
    );
  }
  const [system, version, code] = parts;
  if (
    !/^[A-Za-z0-9][A-Za-z0-9_-]*$/u.test(system)
    || !/^[A-Za-z0-9][A-Za-z0-9._-]*$/u.test(version)
    || (includeCode && !/^[A-Za-z0-9][A-Za-z0-9._-]*$/u.test(code))
  ) {
    throw new CliError(
      "PCR_CLI_INVALID_CLASSIFICATION",
      `Invalid --classification "${classification}". Use identifier tokens without spaces or path separators.`,
      { value: classification },
    );
  }
  if (includeCode) {
    return { system, version, code };
  }
  return { system, version };
}

function validateResolveSelector(options) {
  const supplied = ["classification", "pcr"].filter(
    (key) => options[key] !== undefined,
  );
  if (supplied.length !== 1) {
    throw new CliError(
      "PCR_CLI_EXACTLY_ONE_SELECTOR_REQUIRED",
      "Resolve requires exactly one selector: --classification <system>:<version>:<code> or --pcr <pcr-id>.",
      {
        required_exactly_one_of: ["classification", "pcr"],
        supplied,
      },
    );
  }
}

function validateListOptions(options) {
  if (options.status !== undefined && !VALID_PCR_STATUSES.has(String(options.status))) {
    throw invalidChoiceError("status", String(options.status), PCR_STATUS_VALUES);
  }
  if (
    options["content-maturity"] !== undefined
    && !VALID_CONTENT_MATURITIES.has(String(options["content-maturity"]))
  ) {
    throw invalidChoiceError(
      "content-maturity",
      String(options["content-maturity"]),
      CONTENT_MATURITY_VALUES,
    );
  }
  if (options["path-prefix"] !== undefined) {
    normalizePathPrefix(options["path-prefix"]);
  }
  validateCatalogScope(options.scope);
  positiveIntegerOption(options.page, "page", 1);
  positiveIntegerOption(options["page-size"], "page-size", 10, 100);
}

function validateCoverageListOptions(options) {
  if (options.status !== undefined && !VALID_COVERAGE_STATUSES.has(String(options.status))) {
    throw invalidChoiceError("status", String(options.status), CLASSIFICATION_COVERAGE_STATUSES, {
      command: "coverage list",
    });
  }
  positiveIntegerOption(options.page, "page", 1);
  positiveIntegerOption(options["page-size"], "page-size", 10, 100);
}

function validateCatalogScope(value) {
  if (value !== undefined && !VALID_CATALOG_SCOPES.has(String(value))) {
    throw invalidChoiceError("scope", String(value), PCR_CATALOG_SCOPES);
  }
}

function effectiveCatalogScope(options) {
  validateCatalogScope(options.scope);
  if (options.scope !== undefined) {
    return {
      requested: String(options.scope),
      effective: String(options.scope),
      source: "explicit",
    };
  }
  if (String(options.status ?? "") === "scaffold") {
    return { requested: null, effective: "legacy", source: "derived_from_status" };
  }
  if (String(options["content-maturity"] ?? "") === "empty_scaffold") {
    return { requested: null, effective: "legacy", source: "derived_from_content_maturity" };
  }
  return { requested: null, effective: "material", source: "default" };
}

function filterPcrs(pcrs, options) {
  let result = pcrs;
  if (options.status) {
    result = result.filter((entry) => entry.status === String(options.status));
  }
  if (options["content-maturity"]) {
    result = result.filter((entry) => entry.content_maturity === String(options["content-maturity"]));
  }
  if (options["path-prefix"]) {
    const prefix = normalizePathPrefix(options["path-prefix"]);
    result = result.filter((entry) => {
      const relativePath = String(entry.path).replace(/^library\/pcrs\/?/u, "");
      return relativePath === prefix || relativePath.startsWith(`${prefix}/`);
    });
  }
  return result;
}

function paginateList(pcrs, options, scope) {
  const pageSize = positiveIntegerOption(options["page-size"], "page-size", 10, 100);
  const page = positiveIntegerOption(options.page, "page", 1);
  const totalCount = pcrs.length;
  const totalPages = Math.max(1, Math.ceil(totalCount / pageSize));
  if (page > totalPages) {
    throw new CliError(
      "PCR_CLI_PAGE_OUT_OF_RANGE",
      `--page ${page} is out of range. Available pages: 1-${totalPages}.`,
      { page, total_pages: totalPages },
    );
  }
  const startIndex = (page - 1) * pageSize;
  const items = pcrs.slice(startIndex, startIndex + pageSize);
  const nextPage = page < totalPages ? page + 1 : null;
  const previousPage = page > 1 ? page - 1 : null;

  return {
    filters: {
      scope: scope.effective,
      status: options.status ? String(options.status) : null,
      content_maturity: options["content-maturity"]
        ? String(options["content-maturity"])
        : null,
      path_prefix: options["path-prefix"]
        ? normalizePathPrefix(options["path-prefix"])
        : null,
    },
    requested_scope: scope.requested,
    effective_scope: scope.effective,
    scope_source: scope.source,
    page,
    page_size: pageSize,
    total_count: totalCount,
    total_pages: totalPages,
    has_more: nextPage !== null,
    items,
    previous_command: previousPage ? buildListCommand({ ...options, page: previousPage }) : null,
    next_command: nextPage ? buildListCommand({ ...options, page: nextPage }) : null,
    next_steps: [
      "If you have a classification code, prefer npm --silent run tiangong-pcr -- resolve --classification <system>:<version>:<code>.",
      "If the correct PCR is unclear, inspect npm --silent run tiangong-pcr -- tree --depth 3 and then open candidate guidance.",
      "Check items[].readiness and run npm --silent run tiangong-pcr -- guidance --pcr <pcr-id> --format json only when usable_for_guidance is true.",
    ],
  };
}

function coverageSummaryOutput(summary, options) {
  const classification = `${String(summary.classification_system).toLowerCase()}:${summary.classification_version}`;
  return {
    ...summary,
    completeness: {
      status: "complete",
      bounded: true,
      entry_details_included: false,
    },
    next_command: buildCoverageListCommand({
      ...options,
      classification: options.classification ?? classification,
      page: 1,
    }),
    next_steps: [
      "Use coverage list with --status to inspect a bounded, paginated subset.",
      "Use resolve --classification <system>:<version>:<code> for deterministic resolution; candidate suggestions are never selected automatically.",
    ],
  };
}

function paginateCoverage(result, classification, options) {
  const pageSize = positiveIntegerOption(options["page-size"], "page-size", 10, 100);
  const page = positiveIntegerOption(options.page, "page", 1);
  const totalCount = result.entries.length;
  const totalPages = Math.max(1, Math.ceil(totalCount / pageSize));
  if (page > totalPages) {
    throw new CliError(
      "PCR_CLI_PAGE_OUT_OF_RANGE",
      `--page ${page} is out of range. Available pages: 1-${totalPages}.`,
      { page, total_pages: totalPages },
    );
  }
  const startIndex = (page - 1) * pageSize;
  const items = result.entries.slice(startIndex, startIndex + pageSize);
  const previousPage = page > 1 ? page - 1 : null;
  const nextPage = page < totalPages ? page + 1 : null;
  const commandOptions = {
    ...options,
    classification: options.classification ?? `${classification.system}:${classification.version}`,
  };
  return {
    classification: {
      system: result.classification_system,
      version: result.classification_version,
    },
    filters: {
      status: options.status === undefined ? null : String(options.status),
    },
    available_statuses: result.available_statuses,
    completeness: {
      status: nextPage === null && previousPage === null ? "complete" : "paginated",
      page,
      page_size: pageSize,
      returned_count: items.length,
      total_count: totalCount,
      total_pages: totalPages,
      has_more: nextPage !== null,
    },
    items,
    previous_command: previousPage
      ? buildCoverageListCommand({ ...commandOptions, page: previousPage })
      : null,
    next_command: nextPage
      ? buildCoverageListCommand({ ...commandOptions, page: nextPage })
      : null,
    next_steps: [
      "Continue with previous_command or next_command when present; pagination is explicit and deterministic.",
      "Run resolve --classification <system>:<version>:<code> for an exact code. This command does not fuzzy-match or auto-select candidate suggestions.",
    ],
  };
}

function buildCoverageListCommand(options) {
  const parts = [...commandPrefix(options), "coverage", "list"];
  parts.push("--classification", shellToken(String(options.classification)));
  if (options.status) {
    parts.push("--status", shellToken(String(options.status)));
  }
  if (options["page-size"]) {
    parts.push("--page-size", shellToken(String(options["page-size"])));
  }
  if (options.page) {
    parts.push("--page", shellToken(String(options.page)));
  }
  parts.push(...sourceArguments(options));
  if (options.format) {
    parts.push("--format", shellToken(String(options.format)));
  }
  return parts.join(" ");
}

function treeOutput(tree, depth, scope) {
  return {
    scope: "library/pcrs",
    requested_scope: scope.requested,
    effective_scope: scope.effective,
    scope_source: scope.source,
    depth,
    completeness: depth >= 3 ? "complete" : "partial",
    tree,
    next_steps: depth >= 3
      ? [
          "Inspect PCR leaf readiness and run npm --silent run tiangong-pcr -- guidance --pcr <pcr-id> --format json only when usable_for_guidance is true.",
        ]
      : [
          "Choose a visible path and run npm --silent run tiangong-pcr -- list --path-prefix <path> --format json.",
          "Use --depth 3 only when a complete hierarchy is required; the full tree is large.",
        ],
  };
}

function resolveOutput(resolution, options) {
  const usable = resolution.pcr?.readiness?.usable_for_guidance === true;
  const pcrId = resolution.mapping?.pcr_id;
  const guidanceCommand = usable && resolution.resolution_status === "mapped" && pcrId
    ? [
        `${commandPrefix(options).join(" ")} guidance`,
        `--pcr ${shellToken(String(pcrId))}`,
        sourceArguments(options).join(" "),
        "--format json",
      ].filter(Boolean).join(" ")
    : null;
  if (resolution.resolution_status === "unmapped") {
    const [system, version] = String(options.classification).split(":");
    const coverageCommand = buildCoverageListCommand({
      classification: `${system}:${version}`,
      status: resolution.coverage_status,
      root: options.root,
      library: options.library,
      "library-sha256": options["library-sha256"],
      format: "json",
      page: 1,
    });
    return {
      ...resolution,
      next_command: coverageCommand,
      next_steps: [
        "No accepted PCR mapping was selected. Candidate suggestions and manual-review targets remain evidence only.",
        "Use next_command to inspect the same coverage status, or draft missing_pcr feedback with supporting evidence.",
      ],
    };
  }
  if (resolution.resolution_status === "legacy_scaffold_compatibility") {
    return {
      ...resolution,
      next_command: null,
      next_steps: [
        "This is a legacy scaffold compatibility reference, not usable PCR methodology.",
        "Do not run guidance. Draft missing_pcr feedback if material methodology is required.",
      ],
    };
  }
  return {
    ...resolution,
    next_command: guidanceCommand,
    next_steps: usable
      ? ["Run next_command to obtain foreground data-production guidance."]
      : [
          "The mapping identifies a PCR, but its readiness blocks guidance; inspect pcr.readiness.blockers.",
          "Draft feedback when the mapping or missing methodology prevents the requested work.",
        ],
  };
}

function resolvePcrIdentityOutput(resolution, options) {
  if (resolution.resolution_status === "legacy_id_redirect") {
    const nextCommand = legacyRedirectCommand(resolution.redirect.target, options);
    return {
      ...resolution,
      redirect: {
        ...resolution.redirect,
        next_command: nextCommand,
      },
      next_command: nextCommand,
      next_steps: [
        "This PCR id is retired. The target is a locator, not automatically selected methodology.",
        "Run next_command explicitly to inspect the classification coverage or canonical PCR target.",
      ],
    };
  }

  const usable = resolution.pcr?.readiness?.usable_for_guidance === true;
  const nextCommand = usable
    ? [
        `${commandPrefix(options).join(" ")} guidance`,
        `--pcr ${shellToken(String(resolution.pcr.id))}`,
        sourceArguments(options).join(" "),
        "--format json",
      ].filter(Boolean).join(" ")
    : null;
  return {
    ...resolution,
    next_command: nextCommand,
    next_steps: usable
      ? ["The PCR id is canonical. Run next_command to obtain foreground data-production guidance."]
      : [
          "The PCR id is canonical, but readiness blocks guidance; inspect pcr.readiness.blockers.",
        ],
  };
}

function legacyRedirectCommand(target, options) {
  const selector = target.kind === "classification_coverage"
    ? [
        "--classification",
        shellToken(
          `${target.classification_system}:${target.classification_version}:${target.code}`,
        ),
      ]
    : ["--pcr", shellToken(String(target.pcr_id))];
  return [
    `${commandPrefix(options).join(" ")} resolve`,
    ...selector,
    sourceArguments(options).join(" "),
    "--format json",
  ].filter(Boolean).join(" ");
}

function validationExitCode(report, failOnValue) {
  const failOn = validateFailOn(failOnValue);
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
  const lines = [
    "PCR id | Status | Readiness | Title | Record kind",
    "--- | --- | --- | --- | ---",
  ];
  for (const pcr of page.items) {
    lines.push(`${pcr.id} | ${pcr.status} | ${pcr.readiness?.status ?? "unknown"} | ${pcr.title["en-US"] ?? ""} | ${pcr.record_kind}`);
  }
  const start = page.total_count === 0 ? 0 : (page.page - 1) * page.page_size + 1;
  const end = Math.min(page.page * page.page_size, page.total_count);
  lines.push("");
  lines.push(`Effective scope: ${page.effective_scope} (${page.scope_source}).`);
  lines.push(`Showing ${start}-${end} of ${page.total_count} PCR records. Page ${page.page} of ${page.total_pages}.`);
  if (page.previous_command) {
    lines.push(`Previous page: ${page.previous_command}`);
  }
  if (page.next_command) {
    lines.push(`Next page: ${page.next_command}`);
  }
  lines.push("Next step: inspect readiness and run `npm --silent run tiangong-pcr -- guidance --pcr <pcr-id> --format json` only when `usable_for_guidance` is true; use `npm --silent run tiangong-pcr -- resolve` when you have a classification code.");
  return lines.join("\n");
}

function formatCoverageSummary(result) {
  const lines = [
    `Classification coverage: ${result.classification_system} ${result.classification_version}`,
    "",
    "Status | Count",
    "--- | ---:",
  ];
  for (const status of CLASSIFICATION_COVERAGE_STATUSES) {
    lines.push(`${status} | ${result.summary[status]}`);
  }
  lines.push(`total | ${result.summary.total}`);
  lines.push("");
  lines.push("Summary is complete and bounded; individual entries are not included.");
  lines.push(`Next: ${result.next_command}`);
  return lines.join("\n");
}

function formatCoverageList(result) {
  const lines = [
    `Classification coverage: ${result.classification.system} ${result.classification.version}`,
    "",
    "Code | Coverage status | Label | Resolution evidence",
    "--- | --- | --- | ---",
  ];
  for (const entry of result.items) {
    const evidence = entry.mapping?.pcr_id ?? entry.legacy_reference?.pcr_id ?? "none";
    lines.push(`${entry.code} | ${entry.coverage_status} | ${entry.label} | ${evidence}`);
  }
  const completeness = result.completeness;
  lines.push("");
  lines.push(
    `Filter status: ${result.filters.status ?? "all"}. Showing ${completeness.returned_count} of ${completeness.total_count} entries on page ${completeness.page} of ${completeness.total_pages}.`,
  );
  if (result.previous_command) {
    lines.push(`Previous page: ${result.previous_command}`);
  }
  if (result.next_command) {
    lines.push(`Next page: ${result.next_command}`);
  }
  lines.push("Next: run `npm --silent run tiangong-pcr -- resolve --classification <system>:<version>:<code> --format json` for an exact code; no fuzzy or candidate auto-selection is performed.");
  return lines.join("\n");
}

function positiveIntegerOption(value, optionName, fallback, maximum = Infinity) {
  if (value === undefined) {
    return fallback;
  }
  const token = String(value);
  const parsed = Number(token);
  if (!/^[1-9][0-9]*$/u.test(token) || !Number.isSafeInteger(parsed) || parsed > maximum) {
    const expectation = Number.isFinite(maximum)
      ? `a positive safe integer no greater than ${maximum}`
      : "a positive safe integer";
    throw new CliError(
      "PCR_CLI_INVALID_INTEGER_OPTION",
      `Invalid --${optionName} "${value}". Expected ${expectation}.`,
      { option: optionName, value: String(value), maximum: Number.isFinite(maximum) ? maximum : null },
    );
  }
  return parsed;
}

function validateFailOn(value) {
  const failOn = String(value ?? "error");
  if (!VALID_FAIL_ON.has(failOn)) {
    throw invalidChoiceError("fail-on", failOn, [...VALID_FAIL_ON]);
  }
  return failOn;
}

function invalidChoiceError(option, value, choices, details = {}) {
  return new CliError(
    "PCR_CLI_INVALID_CHOICE",
    `Invalid --${option} "${value}". Expected one of: ${choices.join(", ")}.`,
    { option, value, choices: [...choices], ...details },
  );
}

function normalizePathPrefix(value) {
  const original = String(value);
  const prefix = original.replace(/^library\/pcrs\/?/u, "").replace(/^\/+|\/+$/gu, "");
  const segments = prefix.split("/");
  if (
    prefix.length === 0
    || original.includes("\\")
    || segments.some((segment) => segment.length === 0 || segment === "." || segment === "..")
  ) {
    throw new CliError(
      "PCR_CLI_INVALID_PATH_PREFIX",
      `Invalid --path-prefix "${original}". Use a slash-delimited path below library/pcrs without . or .. segments.`,
      { option: "path-prefix", value: original },
    );
  }
  return prefix;
}

function buildListCommand(options) {
  const parts = [...commandPrefix(options), "list"];
  if (options.scope) {
    parts.push("--scope", shellToken(String(options.scope)));
  }
  if (options.status) {
    parts.push("--status", shellToken(String(options.status)));
  }
  if (options["content-maturity"]) {
    parts.push("--content-maturity", shellToken(String(options["content-maturity"])));
  }
  if (options["path-prefix"]) {
    parts.push("--path-prefix", shellToken(String(options["path-prefix"])));
  }
  if (options["page-size"]) {
    parts.push("--page-size", shellToken(String(options["page-size"])));
  }
  if (options.page) {
    parts.push("--page", shellToken(String(options.page)));
  }
  parts.push(...sourceArguments(options));
  if (options.format) {
    parts.push("--format", shellToken(String(options.format)));
  }
  return parts.join(" ");
}

function commandPrefix(options) {
  return options.library ? ["tiangong-pcr"] : ["npm", "--silent", "run", "tiangong-pcr", "--"];
}
function sourceArguments(options) {
  const parts = options.library ? ["--library", shellToken(String(options.library))] : options.root ? ["--root", shellToken(String(options.root))] : [];
  if (options["library-sha256"]) parts.push("--library-sha256", shellToken(String(options["library-sha256"])));
  return parts;
}

function shellToken(value) {
  return /^[A-Za-z0-9_./:-]+$/u.test(value)
    ? value
    : `'${String(value).replaceAll("'", `'"'"'`)}'`;
}

function formatTreeMarkdown(tree, depth, scope) {
  const lines = [];
  lines.push(`Effective scope: ${scope.effective} (${scope.source}).`);
  lines.push("");
  renderTreeNode(tree, lines, 0);
  lines.push("");
  if (depth < 3) {
    lines.push(`This hierarchy is partial at depth ${depth}.`);
    lines.push("Next: run `npm --silent run tiangong-pcr -- list --path-prefix <visible-path>` to inspect paginated PCR records and readiness.");
  } else {
    lines.push("Next: inspect leaf readiness and run `npm --silent run tiangong-pcr -- guidance --pcr <pcr-id> --format json` only when `usable_for_guidance` is true.");
  }
  return lines.join("\n");
}

function renderTreeNode(node, lines, depth) {
  for (const [segment, value] of Object.entries(node).sort(([left], [right]) => left.localeCompare(right))) {
    lines.push(`${"  ".repeat(depth)}- ${segment}`);
    for (const pcr of value.pcrs ?? []) {
      const readiness = pcr.readiness ?? {};
      lines.push(
        `${"  ".repeat(depth + 1)}- ${pcr.id} (readiness: ${readiness.status ?? "unknown"}; usable_for_guidance: ${readiness.usable_for_guidance === true})`,
      );
    }
    renderTreeNode(value.children ?? {}, lines, depth + 1);
  }
}

function requireOption(options, key) {
  if (!options[key]) {
    throw new CliError(
      "PCR_CLI_MISSING_REQUIRED_OPTION",
      `Missing required option --${key}`,
      { option: key },
    );
  }
}

function helpText(command = "", positional = []) {
  const definition = commandDefinitionFor(command, positional);
  if (command === "library") return `Usage: tiangong-pcr library info|verify --library <library.sqlite> [--library-sha256 sha256:<hex>] [--format json]\n\nRead snapshot identity, or verify the entire database checksum and SQLite integrity. No writes or network requests. Keep the manifest and pin with your task.\n`;
  if (!definition) {
    return globalHelpText();
  }
  if (definition.key === "list") {
    return `Usage: tiangong-pcr list [options]

Browse PCR records explicitly. This is catalog browsing, not fuzzy search.

Options:
  --scope all|material|legacy       Record scope. Defaults to material. A scaffold/empty-scaffold filter derives legacy when scope is omitted.
  --status <status>                 Filter by manifest status, for example candidate or scaffold.
  --content-maturity <state>        Filter by content maturity.
  --path-prefix <path>              Filter below library/pcrs by a slash-delimited path prefix.
  --page <n>                        Page number. Defaults to 1.
  --page-size <n>                   Records per page, from 1 to 100. Defaults to 10 records per page.
  --format json|markdown|table      Output format. Defaults to table.
  --root <path>                     PCR repository root.
  --library <file>                  Local library.sqlite (or PCR_LIBRARY). Mutually exclusive with --root.
  --library-sha256 <sha256:hex>      Verify and pin the complete snapshot before reading.
  --help                            Show this command help.

JSON output:
  {
    "filters": { "scope": "material", "status": null, "content_maturity": null, "path_prefix": null },
    "effective_scope": "material",
    "scope_source": "default",
    "page": 1,
    "page_size": 10,
    "total_count": 3,
    "total_pages": 1,
    "has_more": false,
    "items": [{ "id": "<pcr-id>", "readiness": { "usable_for_guidance": true } }],
    "previous_command": null,
    "next_command": null,
    "next_steps": []
  }

Agent next step:
  Follow next_command when present. Use --scope all or --scope legacy only when those records are required.
  Inspect each record's readiness, and only when
  usable_for_guidance is true run:
  npm --silent run tiangong-pcr -- guidance --pcr <pcr-id> --format json
`;
  }
  if (definition.key === "tree") {
    return `Usage: tiangong-pcr tree [options]

Show the PCR directory hierarchy so an Agent can inspect available categories before selecting a PCR.

Options:
  --depth <n>                       Limit hierarchy depth. Defaults to 2.
  --scope all|material|legacy       Record scope. Defaults to material.
  --format json|markdown            Output format. Defaults to markdown.
  --root <path>                     PCR repository root.
  --library <file>                  Local library.sqlite (or PCR_LIBRARY). Mutually exclusive with --root.
  --library-sha256 <sha256:hex>      Verify and pin the complete snapshot before reading.
  --help                            Show this command help.

JSON output includes scope, requested depth, completeness, tree, and next_steps.

Agent next step:
  Use tree to narrow the category area, then run:
  npm --silent run tiangong-pcr -- list --path-prefix <path>
  Markdown PCR leaves include readiness and usable_for_guidance when --depth reaches them.
`;
  }
  if (definition.key === "coverage") {
    return `Usage: tiangong-pcr coverage <summary|list> [options]

Inspect deterministic PCR coverage for one explicit classification system and version.
This command family does not perform fuzzy search or automatically select candidate suggestions.

Subcommands:
  coverage summary --classification <system>:<version> [--format json|table]
      Return bounded aggregate counts without leaf entries.
  coverage list --classification <system>:<version> [--status <coverage-status>] [--page <n>] [--page-size <n>] [--format json|table]
      Return an explicitly filtered, paginated leaf list with completeness and continuation commands.

Selector:
  --classification <system>:<version>   Example: cpc:3.0. A leaf code belongs only on resolve.

Output:
  summary and list support json|table. JSON stdout is stable and remains clean on success.

Agent next step:
  Start with:
  npm --silent run tiangong-pcr -- coverage summary --classification cpc:3.0 --format json
  Then follow next_command or run coverage list with an explicit status filter.
`;
  }
  if (definition.key === "coverage:summary") {
    return `Usage: tiangong-pcr coverage summary --classification <system>:<version> [options]

Show bounded aggregate coverage for one explicit classification system and version.
This command does not list leaves and does not perform fuzzy search.

Options:
  --classification <value>          Example: cpc:3.0.
  --format json|table               Output format. Defaults to table.
  --root <path>                     PCR repository root.
  --library <file>                  Local library.sqlite (or PCR_LIBRARY). Mutually exclusive with --root.
  --library-sha256 <sha256:hex>      Verify and pin the complete snapshot before reading.
  --help                            Show this command help.

JSON output includes source, complete status counts, a bounded completeness marker, and next_command.

Agent next step:
  Run next_command or use coverage list --classification cpc:3.0 --status <status>
  to inspect a paginated subset.
`;
  }
  if (definition.key === "coverage:list") {
    return `Usage: tiangong-pcr coverage list --classification <system>:<version> [options]

List explicit classification leaves and their PCR coverage status. This is deterministic coverage browsing, not fuzzy search.

Options:
  --classification <value>          Example: cpc:3.0.
  --status <status>                 Filter by mapped, unmapped, candidate_suggestion, manual_review, or unknown.
  --page <n>                        Page number. Defaults to 1.
  --page-size <n>                   Entries per page, from 1 to 100. Defaults to 10.
  --format json|table               Output format. Defaults to table.
  --root <path>                     PCR repository root.
  --library <file>                  Local library.sqlite (or PCR_LIBRARY). Mutually exclusive with --root.
  --library-sha256 <sha256:hex>      Verify and pin the complete snapshot before reading.
  --help                            Show this command help.

JSON output keeps filters, completeness, items, previous_command, and next_command stable.
Candidate suggestions and manual-review targets are evidence only and are never selected as accepted PCR mappings.

Agent next step:
  Follow the pagination commands, then run resolve --classification <system>:<version>:<code> for an exact leaf.
`;
  }
  if (definition.key === "resolve") {
    return `Usage: tiangong-pcr resolve (--classification <system>:<version>:<code> | --pcr <pcr-id>) [options]

Resolve exactly one external classification code or PCR identity through deterministic contracts.
This command does not perform fuzzy search and never silently follows a retired PCR id.
Only coverage_status=mapped selects a material PCR. Known unmapped codes return success with mapping and pcr set to null.
Retired PCR ids return a redirect locator and copyable next command without automatically following the target.
Candidate suggestions and manual-review targets are never auto-selected.
Even a mapped result does not prove that the methodology is usable; inspect PCR readiness.

Options:
  --classification <value>          Example: cpc:3.0:01111.
  --pcr <pcr-id>                    Exact current or retired PCR id. Mutually exclusive with --classification.
  --format json                     Output format. JSON is recommended for Agents.
  --root <path>                     PCR repository root.
  --library <file>                  Local library.sqlite (or PCR_LIBRARY). Mutually exclusive with --root.
  --library-sha256 <sha256:hex>      Verify and pin the complete snapshot before reading.
  --help                            Show this command help.

Examples:
  npm --silent run tiangong-pcr -- resolve --classification cpc:3.0:01111 --format json
  npm --silent run tiangong-pcr -- resolve --pcr <pcr-id> --format json

Agent next step:
  Inspect resolution_status. For legacy_id_redirect, run next_command explicitly; the target was not auto-selected.
  Only when the selected canonical or mapped PCR has readiness.usable_for_guidance=true, run:
  npm --silent run tiangong-pcr -- guidance --pcr <mapping.pcr_id> --format json
`;
  }
  if (definition.key === "show") {
    return `Usage: tiangong-pcr show --pcr <pcr-id> [options]

Offline snapshots contain English only; use --lang en-US. Other languages require repository mode.

Print the human-readable PCR Markdown.

Options:
  --pcr <pcr-id>                    PCR id to display.
  --lang en-US|zh-CN                Markdown language. Defaults to en-US.
  --format markdown                 Output format. Defaults to markdown.
  --root <path>                     PCR repository root.
  --library <file>                  Local library.sqlite (or PCR_LIBRARY). Mutually exclusive with --root.
  --library-sha256 <sha256:hex>      Verify and pin the complete snapshot before reading.
  --help                            Show this command help.

Agent next step:
  Use show for human review. Use guidance for machine-readable foreground data-production rules.
`;
  }
  if (definition.key === "guidance") {
    return `Usage: tiangong-pcr guidance --pcr <pcr-id> [options]

Print Agent-facing structured PCR guidance from generated structured.yaml.
This command rejects scaffold, incomplete, deprecated, or otherwise unusable PCR methodology.

Options:
  --pcr <pcr-id>                    PCR id.
  --topic <topic>                   Bounded, cited selection (default overview when paging).
  --pointer <JSON Pointer>          Read a complete value from the verified structured projection.
  --page <n> --page-size <n>         Topic pagination; default 10, maximum 100 items.
  --output <new-file>               Save complete JSON without overwriting an existing file.
  --format json                     Output format. JSON is recommended for Agents.
  --root <path>                     PCR repository root.
  --library <file>                  Local library.sqlite (or PCR_LIBRARY). Mutually exclusive with --root.
  --library-sha256 <sha256:hex>      Verify and pin the complete snapshot before reading.
  --help                            Show this command help.

JSON output includes:
  pcr, readiness, system_boundary, reference_flow, measurement_rules, process_map,
  process_inventory, allocation_rules, validation_rules, data_sources, and validation_notes.
  Without selection flags, the legacy full guidance shape is preserved.
  Selected guidance includes source pointers, content hashes, readiness and pagination.

Topics:
  ${GUIDANCE_TOPICS.join(", ")}

Example:
  tiangong-pcr guidance --pcr <pcr-id> --topic boundary --format json
  tiangong-pcr guidance --pcr <pcr-id> --pointer /system_boundary/rules/0 --format json

Agent next step:
  Choose general LCA authoring, optional TIDAS authoring or existing-data review.
  Judge applicability and declared scope. Cite returned source references; expand truncated items with --pointer.
`;
  }
  if (definition.key === "inspect") {
    return `Usage: tiangong-pcr inspect --input <native-tidas.json> [options]

Read local TIDAS process/model/support datasets without changing them or fetching references.
This is fact inspection, not TIDAS schema validation or PCR compliance. No PCR library is needed.

Options:
  --input <file>                    One native TIDAS JSON dataset; wrapped rows are unsupported.
  --related <directory>             Explicit local package: at most 200 JSON files / 64 MiB total.
  --section <section>               ${INSPECTION_SECTIONS.join("|")}; default summary.
  --pointer <JSON Pointer>          Read a full original value; mutually exclusive with section/paging.
  --page <n> --page-size <n>         Paged sections: default 10, maximum 100 items.
  --output <new-file>               Save complete JSON; existing files are never overwritten.
  --format json --help              JSON output or this help.

Output:
  Original file/hash/pointer evidence, explicitly partial scope, local reference statuses and next_command.
  Previews may be truncated; --pointer retrieves the complete value, --output saves large results.
  References match kind, UUID and requested version; duplicate matches are ambiguous.
  Missing/unsupported identities remain unresolved. Unspecified versions are disclosed.
  Related JSON without a dataset root is ignored explicitly; malformed JSON and symlinks fail.

Examples:
  tiangong-pcr inspect --input wheat.process.json --related ./datasets --section exchanges --format json
  tiangong-pcr inspect --input wheat.model.json --related ./datasets --section references --format json

Next:
  Inspect scope and reference basis, resolve missing evidence, select PCR guidance and use review prepare.
  Unit interpretation needs local flow, flow-property and unit-group evidence. Use the TIDAS toolkit for schema validation.
`;
  }
  if (definition.key === "calculate") {
    return `Usage: tiangong-pcr calculate --input <calculation.json> [--output <new-file>] [--format json]

Perform reproducible arithmetic using explicit values, units, basis and evidence. No library is needed.
All requests require operation, basis and evidence. Numeric values may be finite numbers or decimal strings.

Normalization example:
  {"operation":"normalize","amount":50,"unit":"kg N","source_reference":1000,
   "target_reference":1,"reference_unit":"kg grain","basis":"same moisture and gate",
   "evidence":"production record A; explicit source and target reference amounts"}

Conversion fields:
  operation: convert; amount, from_unit, to_unit, factor, basis, evidence.
  factor is supplied in to_unit / from_unit; no unit equivalence or factor is inferred.

Balance fields:
  operation: balance; inputs and outputs: [{"amount":1,"label":"record A"}],
  accumulation (explicit, even if zero), unit, basis, evidence.
  All terms must use the same physical basis and unit. Residual = inputs - outputs - accumulation.

Output:
  Request hash, supplied request, formula, result and interpretation limits; floating-point arithmetic.
  No threshold, physical validity or anomaly verdict is inferred. Missing values are not zero.
Next: retain the calculation artifact and assess its applicability and tolerance in the Agent review.
`;
  }
  if (definition.command === "review") {
    return `Usage:
  tiangong-pcr review prepare --pcr <pcr-id> --input <native-tidas.json> [--related <directory>] --output <new-draft.json>
  tiangong-pcr review check --pcr <pcr-id> --input <native-tidas.json> [--related <directory>] --report <review.json>

prepare creates an unreviewed Agent artifact with exact input/PCR bindings, scope and uncovered topics.
The Agent investigates and edits that artifact. check verifies its envelope and evidence locations.
Neither command runs an LLM, validates TIDAS schemas or approves methodology.

Options:
  --pcr <pcr-id> --input <file>      Explicit PCR and native TIDAS input, unchanged throughout review.
  --related <directory>             Same explicitly supplied local package used during inspection.
  --report <file>                   Agent review JSON, required only by check.
  --output <new-file>               Save complete output without replacing an existing file.
  --root <path>                     Repository source, mutually exclusive with --library.
  --library <file>                  Local snapshot or PCR_LIBRARY / installed library.
  --library-sha256 <sha256:hex>      Verify and pin that snapshot.
  --format json --help              JSON output or this help.

Agent report:
  status: draft|reviewed; scope: description, applicability, limitations.
  coverage: [{topic, status: reviewed|not_applicable|not_reviewed, rationale}].
  findings: [{id, kind: confirmed_issue|suspected_anomaly|evidence_gap, severity: error|warning|info,
    observation, rationale, input_refs, pcr_refs, suggested_action, questions, alternative_explanations?}].
  Copy input_refs from inspect source objects and pcr_refs from selected guidance source objects.
  Cite the nearest existing parent for a missing field. pcr_refs may be empty for purely structural observations.
  Preserve free reasoning and unresolved questions; do not infer missing lifecycle stages from a partial process.

Exit codes:
  0 preparation completed or report envelope valid (drafts may be valid);
  1 usage/input/runtime error; 2 report shape, binding or evidence-location problem.
  envelope_valid and methodology_approval=false are separate from Agent findings and severity.

Next: use the Skill review reference, investigate applicable topics and share findings with their scope limits.
`;
  }
  if (definition.key === "validate-model") {
    return `Usage: tiangong-pcr validate-model --pcr <pcr-id> --input <file> [options]

Legacy diagnostic: check whether PCR reference qualifiers occur in the input text.
JSON is treated as text; this does not parse TIDAS fields or perform semantic review.

Options:
  --pcr <pcr-id>                    PCR id.
  --input <file>                    Model draft file.
  --format json                     Output format. JSON is recommended for Agents.
  --fail-on never|error|warning     Exit 2 at the selected finding threshold. Defaults to error.
  --root <path>                     PCR repository root.
  --library <file>                  Local library.sqlite (or PCR_LIBRARY). Mutually exclusive with --root.
  --library-sha256 <sha256:hex>      Verify and pin the complete snapshot before reading.
  --help                            Show this command help.

JSON output includes:
  validation_status, completeness, input, check_coverage, finding_summary, and findings.

Exit codes:
  0 command completed and the configured finding threshold was not reached;
  1 usage, input, or runtime error; 2 validation is inconclusive or the --fail-on threshold was reached.

Agent next step:
  Treat matches as text-presence evidence only. Use inspect and review prepare/check for Agent-led TIDAS review.
`;
  }
  if (definition.key === "validate-dataset") {
    return `Usage: tiangong-pcr validate-dataset --pcr <pcr-id> --input <file> [options]

Check a foreground data package JSON object against the implemented subset of selected PCR guidance.
Currently checks collection protocol ID presence, not values, units, evidence quality or TIDAS validity.
This optional legacy package format is not required for general LCA authoring or native TIDAS review.

Options:
  --pcr <pcr-id>                    PCR id.
  --input <file>                    Foreground data package JSON file. The JSON root must be an object.
  --format json                     Output format. JSON is recommended for Agents.
  --fail-on never|error|warning     Exit 2 at the selected finding threshold. Defaults to error.
  --root <path>                     PCR repository root.
  --library <file>                  Local library.sqlite (or PCR_LIBRARY). Mutually exclusive with --root.
  --library-sha256 <sha256:hex>      Verify and pin the complete snapshot before reading.
  --help                            Show this command help.

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
  --root <path>                     PCR repository root.
  --library <file>                  Local library.sqlite (or PCR_LIBRARY). Mutually exclusive with --root.
  --library-sha256 <sha256:hex>      Verify and pin the complete snapshot before reading.
  --help                            Show this command help.

Feedback types:
${FEEDBACK_TYPES.map((type) => `  ${type}`).join("\n")}

Agent next step:
  Open a GitHub issue with the generated body, or hand it to a maintainer for intake.
`;
  }

  return globalHelpText();
}

function globalHelpText() {
  return `Version: tiangong-pcr --version
Offline: --library <library.sqlite> (or PCR_LIBRARY); --library-sha256 sha256:<hex> pins the file.
  library info|verify --library <file> --format json
  Requires Node 24.19+ for SQLite. No automatic downloads.

tiangong-pcr

Usage:
  tiangong-pcr <command> [options]
  tiangong-pcr <command> --help

Commands:
  list [--scope all|material|legacy] [--status <status>] [--content-maturity <state>] [--path-prefix <path>] [--page <n>] [--page-size <n>] [--format json|markdown|table]
  tree [--scope all|material|legacy] [--depth <n>] [--format json|markdown]
  coverage summary --classification <system>:<version> [--format json|table]
  coverage list --classification <system>:<version> [--status <coverage-status>] [--page <n>] [--page-size <n>] [--format json|table]
  resolve (--classification <system>:<version>:<code> | --pcr <pcr-id>) [--format json]
  show --pcr <pcr-id> [--lang en-US|zh-CN]
  guidance --pcr <pcr-id> [--topic <topic> | --pointer <pointer>] [--output <new-file>] [--format json]
  inspect --input <native-tidas.json> [--related <directory>] [--section <section> | --pointer <pointer>]
  calculate --input <calculation.json> [--output <new-file>]
  review prepare --pcr <pcr-id> --input <native-tidas.json> [--related <directory>] --output <new-draft.json>
  review check --pcr <pcr-id> --input <native-tidas.json> [--related <directory>] --report <review.json>
  validate-model --pcr <pcr-id> --input <file> [--format json] [--fail-on never|error|warning]
  validate-dataset --pcr <pcr-id> --input <file> [--format json] [--fail-on never|error|warning]
  feedback draft --type <type> [--pcr <pcr-id>] [--summary <text>]

Agent workflow:
  1. Inspect coverage summary/list when classification completeness matters; no fuzzy matching is performed.
  2. If a classification code is available, run resolve --classification <system>:<version>:<code> --format json.
     If a PCR id is available, run resolve --pcr <pcr-id> --format json. Supply exactly one selector.
  3. If no code is available, use tree/list to browse explicit material PCR hierarchy. list defaults to 10 records per page.
  4. Check resolution_status and readiness. Run guidance only for mapped material PCRs when usable_for_guidance is true.
  5. Guide general LCA data authoring, optionally map a draft into TIDAS, or inspect existing TIDAS inputs.
  6. For review, investigate applicable guidance and evidence, fill review prepare's draft, then use review check.
     CLI checks do not approve methodology. Existing validate-* commands are limited legacy diagnostics.
  7. If PCR guidance is missing or ambiguous, run feedback draft with the observed gap.
`;
}
