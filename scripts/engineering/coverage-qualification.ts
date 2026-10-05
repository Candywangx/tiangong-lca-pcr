import path from "node:path";
import { SHARD_NAMES } from "./qualification-plan.ts";
import type { QualificationDocument, ShardName } from "./qualification-plan.ts";

export type CoverageSelection = Exclude<ShardName, "corpus"> | "documentation";
export interface CoverageQualificationOptions {
  readonly planFile: string;
  readonly selection: CoverageSelection;
}
export interface CoverageQualificationBinding {
  readonly qualificationId: string;
  readonly planHash: string;
  readonly selection: CoverageSelection;
}

export function coverageSelection(value: string): CoverageSelection {
  if (value === "documentation") return value;
  const selection = SHARD_NAMES.find(shard => shard !== "corpus" && shard === value);
  if (selection === undefined || selection === "corpus") throw new Error(`Invalid instrumented qualification selection: ${value}`);
  return selection;
}
export function qualificationBinding(document: QualificationDocument, selection: CoverageSelection): CoverageQualificationBinding {
  return { qualificationId: document.qualificationId, planHash: document.planHash, selection: coverageSelection(selection) };
}

/** A CI measurement is tied to one actual command and complete declared selection. */
export function validateCoverageCommand(root: string, command: readonly string[], options: CoverageQualificationOptions): void {
  const selection = coverageSelection(options.selection);
  if (!options.planFile) throw new Error("Coverage qualification requires a plan file.");
  if (selection === "documentation") {
    if (JSON.stringify(command) !== JSON.stringify(["npm", "--prefix", "packages/pcr-docs", "run", "build"])) throw new Error("Coverage qualification command must execute the complete documentation build.");
    return;
  }
  if (command.length !== 6 || command[0] !== "node" || command[1] !== "scripts/engineering/qualification-plan.ts" || command[2] !== "run" ||
    !command[3] || path.resolve(root, command[3]) !== path.resolve(root, options.planFile) || command[4] !== selection || !command[5]) {
    throw new Error(`Coverage qualification command does not execute the declared shard: ${selection}`);
  }
}

/** Fresh receipt/measurement matching rejects old same-source invocations and unknown fields. */
export function assertCoverageQualificationBinding(actual: unknown, expected: CoverageQualificationBinding): void {
  if (actual === null || typeof actual !== "object" || Array.isArray(actual) ||
    JSON.stringify(Object.keys(actual).sort()) !== JSON.stringify(["qualificationId", "planHash", "selection"].sort()) ||
    !("qualificationId" in actual) || actual.qualificationId !== expected.qualificationId ||
    !("planHash" in actual) || actual.planHash !== expected.planHash ||
    !("selection" in actual) || actual.selection !== expected.selection) {
    throw new Error("Coverage qualification binding is missing, stale, or belongs to a different invocation/selection.");
  }
}
export interface CoverageCollectArguments {
  readonly command: readonly string[];
  readonly qualification?: CoverageQualificationOptions;
}
/** Context comes only from these explicit options, never inherited process environment. */
export function parseCoverageCollectArguments(args: readonly string[]): CoverageCollectArguments {
  if (args[0] === "--" && args.length > 1) return { command: args.slice(1) };
  if (args.length > 5 && args[0] === "--qualification-plan" && args[1] && args[2] === "--selection" && args[3] && args[4] === "--") {
    return { command: args.slice(5), qualification: { planFile: args[1], selection: coverageSelection(args[3]) } };
  }
  throw new Error("Coverage collect requires -- <command...> or --qualification-plan <plan> --selection <name> -- <command...>.");
}
