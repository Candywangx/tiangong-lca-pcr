import { existsSync, readFileSync, readdirSync } from "node:fs";
import path from "node:path";

import { parseYaml } from "../../packages/pcr-core/src/yaml-lite.mjs";
import { GoalHarnessError } from "./errors.mjs";

export function planGoal(config) {
  const coveragePath = path.join(
    config.project_root,
    "classifications",
    "indexes",
    `${config.classification_system}-${config.classification_version}-coverage.json`,
  );
  if (!existsSync(coveragePath)) {
    throw new GoalHarnessError("GOAL_COVERAGE_INDEX_MISSING", `Missing classification coverage index: ${coveragePath}`);
  }
  const coverage = JSON.parse(readFileSync(coveragePath, "utf8"));
  const actualSystem = String(coverage.classification_system ?? coverage.classification?.system ?? "").toLowerCase();
  const actualVersion = String(coverage.classification_version ?? coverage.classification?.version ?? "");
  if (actualSystem !== config.classification_system.toLowerCase() || actualVersion !== String(config.classification_version)) {
    throw new GoalHarnessError("GOAL_COVERAGE_COORDINATE_MISMATCH", `Coverage index coordinate does not match ${config.classification_system}:${config.classification_version}`);
  }

  const targetDomain = config.target_category_relative.split("/")[2];
  const allEntries = coverage.entries ?? [];
  const targetEntries = allEntries.filter((entry) => semanticSlug(entry.path_titles?.[0] ?? "") === targetDomain);
  const selector = config.cpc_selector.value;
  const selectedCodes = selector === "all" ? null : new Set(selector);
  const skip = new Set(config.skip_cpc_list ?? []);
  const outsideTargetIgnored = selectedCodes
    ? [...selectedCodes].filter((code) => !targetEntries.some((entry) => entry.code === code)).sort()
    : [];
  const skipped = targetEntries
    .filter((entry) => (!selectedCodes || selectedCodes.has(entry.code)) && skip.has(entry.code))
    .map((entry) => entry.code)
    .sort();
  const manifestsByCode = readTargetManifests(config.target_category_path, config);

  const tasks = targetEntries
    .filter((entry) => (!selectedCodes || selectedCodes.has(entry.code)) && !skip.has(entry.code))
    .map((entry) => classifyEntry({ entry, manifestRecord: manifestsByCode.get(entry.code), config }))
    .sort(compareTasks)
    .map((task, index) => ({ ...task, queue_order: index + 1 }));

  return {
    schema_version: 1,
    goal_id: config.goal_id,
    classification: { system: config.classification_system, version: config.classification_version },
    target_category_relative: config.target_category_relative,
    scope: {
      selector: config.cpc_selector,
      total_classification_leaves: targetEntries.length,
      selected_leaves: tasks.length,
      skipped,
      outside_target_ignored: outsideTargetIgnored,
    },
    summary: summarize(tasks),
    tasks,
  };
}

export function classifyEntry({ entry, manifestRecord, config }) {
  const base = {
    id: `${config.classification_system}:${config.classification_version}:${entry.code}`,
    cpc_code: entry.code,
    product_name_en: entry.label,
    product_name_zh: manifestRecord?.manifest?.title?.["zh-CN"] ?? null,
    path_codes: entry.path_codes,
    path_titles: entry.path_titles,
    pcr_id: manifestRecord?.manifest?.id ?? entry.mapping?.pcr_id ?? null,
    pcr_path: manifestRecord?.relativeDir ?? proposedPcrPath(config, entry),
    coverage_status: entry.coverage_status,
    mapping: entry.mapping,
  };
  if (entry.coverage_status === "mapped" && entry.mapping?.acceptance?.status === "accepted") {
    return { ...base, queue_action: "map_existing", state: "completed", reason: "accepted_mapping_already_exists" };
  }
  if (entry.coverage_status !== "unmapped") {
    return { ...base, queue_action: "manual_review", state: "manual_review", reason: `coverage_status_${entry.coverage_status}` };
  }
  if (!manifestRecord) {
    return { ...base, queue_action: "create_new", state: "queued", reason: "no_canonical_pcr_identity" };
  }
  if (manifestRecord.manifest.content_maturity === "empty_scaffold") {
    return { ...base, queue_action: "promote_legacy", state: "queued", reason: "semantic_empty_scaffold" };
  }
  if (manifestRecord.manifest.content_maturity === "authored_methodology") {
    return { ...base, queue_action: "map_existing", state: "integration_pending", reason: "material_pcr_without_accepted_edge" };
  }
  return { ...base, queue_action: "manual_review", state: "manual_review", reason: "unsupported_manifest_maturity" };
}

function readTargetManifests(targetRoot, config) {
  const records = new Map();
  for (const absolutePath of walkFiles(targetRoot, "manifest.yaml")) {
    const manifest = parseYaml(readFileSync(absolutePath, "utf8"));
    const reference = (manifest.classification_refs ?? []).find((entry) =>
      String(entry.system).toLowerCase() === config.classification_system.toLowerCase() &&
      String(entry.version) === String(config.classification_version),
    );
    if (!reference?.code) continue;
    if (records.has(String(reference.code))) {
      throw new GoalHarnessError("GOAL_DUPLICATE_CLASSIFICATION_IDENTITY", `Multiple target PCR manifests claim ${config.classification_system}:${config.classification_version}:${reference.code}`);
    }
    records.set(String(reference.code), {
      manifest,
      absolutePath,
      relativeDir: toRepoPath(path.relative(config.project_root, path.dirname(absolutePath))),
    });
  }
  return records;
}

function walkFiles(root, fileName) {
  const found = [];
  const stack = [root];
  while (stack.length > 0) {
    const current = stack.pop();
    for (const entry of readdirSync(current, { withFileTypes: true })) {
      const absolute = path.join(current, entry.name);
      if (entry.isDirectory()) stack.push(absolute);
      else if (entry.isFile() && entry.name === fileName) found.push(absolute);
    }
  }
  return found.sort();
}

function proposedPcrPath(config, entry) {
  const subdomain = semanticSlug(entry.path_titles?.[1] ?? "uncategorized");
  const leaf = semanticSlug(entry.label) || `product-${entry.code}`;
  return `${config.target_category_relative}/${subdomain}/${leaf}`;
}

function semanticSlug(value) {
  return String(value)
    .normalize("NFKD")
    .replace(/[\u0300-\u036f]/gu, "")
    .toLowerCase()
    .replace(/&/gu, " and ")
    .replace(/[^a-z0-9]+/gu, "-")
    .replace(/^-+|-+$/gu, "")
    .replace(/-{2,}/gu, "-");
}

function compareTasks(left, right) {
  const priority = { promote_legacy: 0, create_new: 1, map_existing: 2, manual_review: 3, blocked: 4 };
  return (priority[left.queue_action] ?? 99) - (priority[right.queue_action] ?? 99) ||
    String(left.pcr_path).localeCompare(String(right.pcr_path)) ||
    left.cpc_code.localeCompare(right.cpc_code);
}

function summarize(tasks) {
  const summary = { total: tasks.length, create_new: 0, promote_legacy: 0, map_existing: 0, manual_review: 0, blocked: 0, completed: 0, queued: 0 };
  for (const task of tasks) {
    summary[task.queue_action] = (summary[task.queue_action] ?? 0) + 1;
    if (task.state === "completed") summary.completed += 1;
    if (task.state === "queued") summary.queued += 1;
  }
  return summary;
}

function toRepoPath(value) {
  return value.split(path.sep).join("/");
}
