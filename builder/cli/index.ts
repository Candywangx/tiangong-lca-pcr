#!/usr/bin/env node
import {errorMessage,errorCode,unknownField,type UnknownRecord} from "../../packages/pcr-core/src/types.ts";
import { checkPcr, PCR_CHECK_HELP } from "../lib/pcr-check.ts";
import { init } from "../lib/builder-operations.ts";
import { importCpc } from "../lib/cpc-scaffold.ts";
import { lint } from "../lib/lint-rules.ts";
import { lintWithReport } from "../lib/lint-report.ts";
import {
  bump,
  lifecycle,
  publish,
  recover,
  revise,
  syncStructured,
} from "../lib/manifest-lifecycle.ts";

interface CliOptions extends UnknownRecord {_ : string[];root?:string}
const COMMAND_OPTIONS: Readonly<Record<string,{readonly values:readonly string[];readonly booleans:readonly string[]}>> = Object.freeze({
  check: Object.freeze({
    values: ["root", "pcr", "workspace", "format"],
    booleans: ["help"],
  }),
  init: Object.freeze({
    values: ["root", "sample-pcr", "pcr-id", "title-en", "title-zh-CN"],
    booleans: ["help"],
  }),
  lint: Object.freeze({ values: ["root", "report"], booleans: ["help"] }),
  "import-cpc": Object.freeze({
    values: ["root", "source", "classification-version", "source-url"],
    booleans: ["help", "legacy-scaffolds"],
  }),
  "scaffold-cpc": Object.freeze({
    values: ["root", "source", "classification-version", "source-url"],
    booleans: ["help", "legacy-scaffolds"],
  }),
  "sync-structured": Object.freeze({
    values: ["root", "pcr", "workspace"],
    booleans: ["help"],
  }),
  lifecycle: Object.freeze({
    values: ["root", "pcr", "workspace", "status", "content-maturity", "translation"],
    booleans: ["help"],
  }),
  bump: Object.freeze({
    values: ["root", "pcr", "workspace", "level"],
    booleans: ["help"],
  }),
  revise: Object.freeze({
    values: ["root", "pcr", "version"],
    booleans: ["help"],
  }),
  publish: Object.freeze({
    values: ["root", "pcr", "workspace", "version"],
    booleans: ["help"],
  }),
  recover: Object.freeze({
    values: ["root", "pcr"],
    booleans: ["help", "force-stale-lock"],
  }),
});

function parseArgs(argv: string[]) {
  const [command, ...rest] = argv;
  const options: CliOptions = { _: [] };

  if (command === undefined || command === "help" || command === "--help") {
    if (rest.length > 0) {
      throw new Error(`Unexpected argument for ${command ?? "help"}: ${rest[0]}`);
    }
    return { command, options };
  }

  const specification = COMMAND_OPTIONS[command];
  if (!specification) {
    throw new Error(`Unknown command: ${command}`);
  }
  const valueOptions = new Set(specification.values);
  const booleanOptions = new Set(specification.booleans);
  const allowedOptions = new Set([...valueOptions, ...booleanOptions]);
  const seenOptions = new Set();

  for (let index = 0; index < rest.length; index += 1) {
    const token = rest[index]!;
    if (!token.startsWith("--") || token === "--") {
      throw new Error(`Unexpected positional argument for ${command}: ${token}`);
    }

    const separatorIndex = token.indexOf("=");
    const key = token.slice(2, separatorIndex < 0 ? undefined : separatorIndex);
    const inlineValue = separatorIndex < 0 ? undefined : token.slice(separatorIndex + 1);
    if (!key || !allowedOptions.has(key)) {
      const allowed = [...allowedOptions].sort().map((entry) => `--${entry}`).join(", ");
      throw new Error(
        `Unknown option for ${command}: --${key || "(empty)"}. Allowed options: ${allowed}`,
      );
    }
    if (seenOptions.has(key)) {
      throw new Error(`Duplicate option for ${command}: --${key}`);
    }
    seenOptions.add(key);

    if (booleanOptions.has(key)) {
      const next = rest[index + 1];
      if (inlineValue !== undefined || (next !== undefined && !next.startsWith("--"))) {
        throw new Error(`--${key} is a boolean flag and does not accept a value`);
      }
      options[key] = true;
      continue;
    }

    if (inlineValue !== undefined) {
      if (inlineValue.length === 0) {
        throw new Error(`--${key} requires a non-empty value`);
      }
      options[key] = inlineValue;
      continue;
    }

    const next = rest[index + 1];
    if (next === undefined || next.startsWith("--")) {
      throw new Error(`--${key} requires a value`);
    }
    options[key] = next;
    index += 1;
  }

  return { command, options };
}

function printHelp() {
  return `PCR Library Builder CLI

Usage:
  node builder/cli/index.ts init [--root <path>] [--sample-pcr <domain/path/slug>]
  node builder/cli/index.ts check --pcr <PCR directory> [--workspace current|revision] [--format human|json]
  node builder/cli/index.ts lint [--root <path>] [--report .reports/pcr-lint.json]
  node builder/cli/index.ts import-cpc --source <csv> [--classification-version 3.0] [--legacy-scaffolds]
  node builder/cli/index.ts scaffold-cpc --legacy-scaffolds --source <csv>  # compatibility alias
  node builder/cli/index.ts sync-structured --pcr <library/pcrs/...> [--workspace current|revision] [--root <path>]
  node builder/cli/index.ts lifecycle --pcr <library/pcrs/...> [--workspace current|revision] [--status <status>] [--content-maturity <state>] [--translation <lang=status>] [--root <path>]
  node builder/cli/index.ts bump --pcr <library/pcrs/...> [--level patch|minor|major] [--root <path>]
  node builder/cli/index.ts revise --pcr <library/pcrs/...> --version <semver> [--root <path>]
  node builder/cli/index.ts publish --pcr <library/pcrs/...> --workspace current --version <semver> [--root <path>]
  node builder/cli/index.ts publish --pcr <library/pcrs/...> --workspace revision [--root <path>]
  node builder/cli/index.ts recover --pcr <library/pcrs/...> [--force-stale-lock] [--root <path>]

Workspace rules:
  current   The canonical top-level authoring/current-release files (default).
  revision  The explicit revision/ workspace of an already published PCR.

Publication rules:
  First release: publish --workspace current --version <semver>
  Later release: publish --workspace revision (the version is locked by revise)

CPC import rules:
  import-cpc creates zero PCR records by default and preserves existing mapping bytes.
  scaffold-cpc is a fail-fast compatibility alias that requires explicit --legacy-scaffolds.
`;
}

function printCpcImportHelp() {
  return `Import a CPC classification source without coupling leaves to PCR identity.

Usage:
  node builder/cli/index.ts import-cpc --source <csv> [options]

Options:
  --root <path>                  Target PCR repository.
  --classification-version <v>  CPC version written to normalized artifacts (default: 3.0).
  --source-url <url>             Official source URL recorded in source metadata.
  --legacy-scaffolds             Explicit compatibility mode: append missing legacy mapping/identity entries and
                                 create missing empty PCR directories. Do not use for new classification imports.

Default output:
  Writes raw source metadata plus normalized hierarchy, leaves, and paths. Creates an empty mapping file only when
  one is absent. Existing mappings are validated and preserved byte-for-byte. Creates no PCR records.

Compatibility alias:
  scaffold-cpc requires --legacy-scaffolds. Without it, the command fails and points to import-cpc so existing
  automation cannot silently change meaning.

Next:
  Review accepted mappings, then run npm run catalog:build in the target repository.
`;
}

function runCommand(command: string | undefined, options: CliOptions) {
  if (!command || command === "help" || command === "--help") {
    return { messages: [printHelp()], exitCode: 0 };
  }
  if (command === "check") {
    if (options.help === true) return { messages: [PCR_CHECK_HELP], exitCode: 0 };
    if (options.format && (typeof options.format !== "string" || !["human", "json"].includes(options.format))) {
      throw Object.assign(new Error("--format must be human or json."), { code: "PCR_CHECK_FORMAT_INVALID" });
    }
    const result = checkPcr(options);
    return {
      messages: [options.format === "json" ? JSON.stringify(result, null, 2)
        : `PASS ${result.pcr_path} (${result.workspace}): measurement checks complete.\n${result.warnings.join("\n")}`],
      exitCode: 0,
    };
  }
  if (options.help === true && command !== "import-cpc" && command !== "scaffold-cpc") {
    return { messages: [printHelp()], exitCode: 0 };
  }
  if (command === "init") {
    return { messages: init(options), exitCode: 0 };
  }
  if (command === "lint") {
    if (Object.hasOwn(options, "report")) {
      if (typeof options.report!=="string" || !options.report.trim()) throw new Error("--report requires a non-empty value");
      return lintWithReport({...options,report:options.report});
    }
    return { messages: lint(options), exitCode: 0 };
  }
  if (command === "import-cpc" || command === "scaffold-cpc") {
    if (options.help === true) {
      return { messages: [printCpcImportHelp()], exitCode: 0 };
    }
    if (command === "scaffold-cpc" && options["legacy-scaffolds"] !== true) {
      throw new Error(
        "scaffold-cpc is a compatibility alias and requires --legacy-scaffolds; use import-cpc for classification-only imports",
      );
    }
    return { messages: importCpc(options), exitCode: 0 };
  }
  if (command === "sync-structured") {
    return { messages: syncStructured(options), exitCode: 0 };
  }
  if (command === "bump") {
    return { messages: bump(options), exitCode: 0 };
  }
  if (command === "lifecycle") {
    return { messages: lifecycle(options), exitCode: 0 };
  }
  if (command === "publish") {
    return { messages: publish(options), exitCode: 0 };
  }
  if (command === "revise") {
    return { messages: revise(options), exitCode: 0 };
  }
  if (command === "recover") {
    return { messages: recover(options), exitCode: 0 };
  }
  throw new Error(`Unknown command: ${command}`);
}

function main(argv: string[]) {
  try {
    const { command, options } = parseArgs(argv);
    const { messages, exitCode } = runCommand(command, options);
    if (messages.length > 0) {
      process.stdout.write(`${messages.join("\n")}\n`);
    }
    process.exitCode = exitCode;
  } catch (error) {
    if (argv[0] === "check" && (argv.includes("--format=json") || argv.some((arg, i) => arg === "--format" && argv[i + 1] === "json"))) {
      process.stderr.write(`${JSON.stringify({ ok: false, error: {
        code: errorCode(error) ?? "PCR_CHECK_ARGUMENT_INVALID", message: errorMessage(error), details: unknownField(error,"details") ?? null,
      } })}\n`);
    } else process.stderr.write(`${errorMessage(error)}\n`);
    process.exitCode = 1;
  }
}

main(process.argv.slice(2));
