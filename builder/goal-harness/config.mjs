import { existsSync, lstatSync, readFileSync, realpathSync } from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

import Ajv2020 from "ajv/dist/2020.js";

import { parseYaml } from "../../packages/pcr-core/src/yaml-lite.mjs";
import { GoalHarnessError } from "./errors.mjs";

const schemaPath = fileURLToPath(new URL("../schemas/goal-harness-config.schema.json", import.meta.url));
const schema = JSON.parse(readFileSync(schemaPath, "utf8"));
const ajv = new Ajv2020({ allErrors: true, strict: true });
const validate = ajv.compile(schema);

const DEFAULTS = Object.freeze({
  author_slots: 6,
  integration_batch_size: 6,
  skip_cpc_list: [],
  author_timeout_seconds: 7200,
  retry_policy: { max_attempts: 3, backoff_seconds: 30 },
  tools: { codex: "codex" },
  baseline: {
    tracked_roots: ["AGENTS.md", "README.md", ".docpact", ".github", "builder", "classifications", "docs", "library", "packages", "skills", "package.json", "package-lock.json"],
    untracked_allowlist: [],
  },
  codex: { sandbox: "danger-full-access", approval_policy: "never" },
  integration: { final_partial_batch: true },
});

export function loadGoalConfig({ configPath }) {
  let document;
  try {
    document = parseYaml(readFileSync(configPath, "utf8"));
  } catch (error) {
    throw new GoalHarnessError("GOAL_CONFIG_UNREADABLE", `Cannot read Goal configuration: ${configPath}`, { cause: error.message });
  }
  const config = mergeDefaults(document);
  if (!validate(config)) {
    const boundedScopeMessage = config?.cpc_selector?.mode !== "target_category"
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
  });
}

function mergeDefaults(value) {
  return {
    ...DEFAULTS,
    ...value,
    retry_policy: { ...DEFAULTS.retry_policy, ...(value?.retry_policy ?? {}) },
    tools: { ...DEFAULTS.tools, ...(value?.tools ?? {}) },
    baseline: { ...DEFAULTS.baseline, ...(value?.baseline ?? {}) },
    codex: { ...DEFAULTS.codex, ...(value?.codex ?? {}) },
    integration: { ...DEFAULTS.integration, ...(value?.integration ?? {}) },
  };
}

function resolveDirectory(value, code) {
  const resolved = path.resolve(value);
  if (!existsSync(resolved) || !lstatSync(resolved).isDirectory()) {
    throw new GoalHarnessError(code, `Expected directory: ${resolved}`);
  }
  return realpathSync(resolved);
}

function assertReadableFile(value, code) {
  const resolved = path.resolve(value);
  if (!existsSync(resolved) || !lstatSync(resolved).isFile()) {
    throw new GoalHarnessError(code, `Expected readable regular file: ${resolved}`);
  }
  readFileSync(resolved);
}

function assertWithin(root, candidate, code) {
  const relative = path.relative(root, candidate);
  if (!relative || relative.startsWith("..") || path.isAbsolute(relative)) {
    throw new GoalHarnessError(code, `Path must be below ${root}: ${candidate}`);
  }
}

function toRepoPath(value) {
  return value.split(path.sep).join("/");
}
