import { existsSync, lstatSync, readFileSync, realpathSync } from "node:fs";
import path from "node:path";

import { Ajv2020 } from "ajv/dist/2020.js";
import schema from "../schemas/goal-harness-config.schema.json" with { type: "json" };
import { field, isRecord, record, errorMessage, type GoalConfig, type UnknownRecord } from "./domain.ts";

import { parseYaml } from "../../packages/pcr-core/src/yaml-lite.ts";
import { GoalHarnessError } from "./errors.ts";

const ajv = new Ajv2020({ allErrors: true, strict: true });
const validate = ajv.compile<GoalConfig>(schema);

const DEFAULTS = Object.freeze({
  author_slots: 6,
  integration_batch_size: 6,
  skip_cpc_list: [],
  author_timeout_seconds: 7200,
  retry_policy: { max_attempts: 3, max_repairs: 2, backoff_seconds: 30 },
  tools: { codex: "codex" },
  baseline: {
    tracked_roots: ["AGENTS.md", "README.md", ".docpact", ".github", "builder", "classifications", "docs", "library", "packages", "skills", "package.json", "package-lock.json"],
    untracked_allowlist: [],
  },
  codex: { sandbox: "danger-full-access", approval_policy: "never" },
  integration: { final_partial_batch: true },
});

export function loadGoalConfig({ configPath }: {configPath: string}): Readonly<GoalConfig> {
  let document: unknown;
  try {
    document = parseYaml(readFileSync(configPath, "utf8"));
  } catch (error) {
    throw new GoalHarnessError("GOAL_CONFIG_UNREADABLE", `Cannot read Goal configuration: ${configPath}`, { cause: errorMessage(error) });
  }
  const config = mergeDefaults(document);
  if (!validate(config)) {
    const boundedScopeMessage = field(field(config, "cpc_selector"), "mode") !== "target_category"
      ? "cpc_selector.mode must be target_category; "
      : "";
    const message = `${boundedScopeMessage}${ajv.errorsText(validate.errors, { separator: "; " })}`;
    throw new GoalHarnessError("GOAL_CONFIG_INVALID", `Invalid Goal configuration: ${message}`, { errors: validate.errors });
  }

  const projectRoot = resolveDirectory(config.project_root, "GOAL_PROJECT_ROOT_INVALID");
  const targetPath = path.resolve(config.target_category_path);
  const targetRoot = path.join(projectRoot, "library", "pcrs");
  assertWithin(targetRoot, targetPath, "GOAL_TARGET_OUTSIDE_PCR_LIBRARY");
  if (!existsSync(targetPath) || !lstatSync(targetPath).isDirectory()) {
    throw new GoalHarnessError("GOAL_TARGET_UNREADABLE", `Target category is not a readable directory: ${targetPath}`);
  }
  assertReadableFile(config.policy_prompt_path, "GOAL_POLICY_UNREADABLE");

  return Object.freeze({
    ...config,
    project_root: projectRoot,
    target_category_path: realpathSync(targetPath),
    target_category_relative: toRepoPath(path.relative(projectRoot, realpathSync(targetPath))),
    policy_prompt_path: realpathSync(config.policy_prompt_path),
    artifact_store: path.resolve(config.artifact_store),
  });
}

function mergeDefaults(value: unknown): UnknownRecord {
  const source = isRecord(value) ? value : {};
  return {
    ...DEFAULTS,
    ...source,
    retry_policy: { ...DEFAULTS.retry_policy, ...(nested(source.retry_policy)) },
    tools: { ...DEFAULTS.tools, ...(nested(source.tools)) },
    baseline: { ...DEFAULTS.baseline, ...(nested(source.baseline)) },
    codex: { ...DEFAULTS.codex, ...(nested(source.codex)) },
    integration: { ...DEFAULTS.integration, ...(nested(source.integration)) },
  };
}

function resolveDirectory(value: string, code: string): string {
  const resolved = path.resolve(value);
  if (!existsSync(resolved) || !lstatSync(resolved).isDirectory()) {
    throw new GoalHarnessError(code, `Expected directory: ${resolved}`);
  }
  return realpathSync(resolved);
}

function assertReadableFile(value: string, code: string): void {
  const resolved = path.resolve(value);
  if (!existsSync(resolved) || !lstatSync(resolved).isFile()) {
    throw new GoalHarnessError(code, `Expected readable regular file: ${resolved}`);
  }
  readFileSync(resolved);
}

function assertWithin(root: string, candidate: string, code: string): void {
  const relative = path.relative(root, candidate);
  if (!relative || relative.startsWith("..") || path.isAbsolute(relative)) {
    throw new GoalHarnessError(code, `Path must be below ${root}: ${candidate}`);
  }
}

function toRepoPath(value: string): string {
  return value.split(path.sep).join("/");
}

function nested(value: unknown): UnknownRecord { return value === undefined || value === null ? {} : record(value, "Goal configuration section"); }
