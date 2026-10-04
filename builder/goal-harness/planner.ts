import { existsSync, readFileSync, readdirSync } from "node:fs";
import path from "node:path";

import { parseYaml } from "../../packages/pcr-core/src/yaml-lite.ts";
import { GoalHarnessError } from "./errors.ts";

import { record, records, field, text, strings, json } from "./domain.ts";
import type { GoalConfig, GoalTask, UnknownRecord } from "./domain.ts";
export type GoalPlannerConfig = Pick<GoalConfig, "goal_id" | "project_root" | "target_category_path" | "target_category_relative" | "classification_system" | "classification_version" | "cpc_selector" | "skip_cpc_list">;
interface PlannerEntry extends UnknownRecord { code: string; label: string; coverage_status: string; path_codes?: unknown; path_titles?: string[]; mapping?: UnknownRecord | null }
interface ManifestRecord { manifest: UnknownRecord; absolutePath: string; relativeDir: string }
export interface PlannedGoalTask extends GoalTask { cpc_code: string; pcr_path: string; queue_action: string }
function nullableText(value: unknown): string | null { return value === undefined || value === null ? null : text(value); }
function entry(value: unknown): PlannerEntry {
  const item=record(value,"coverage entry"); const mapping=item.mapping;
  return {...item,code:text(item.code),label:text(item.label),coverage_status:text(item.coverage_status),
    ...(item.path_titles===undefined?{}:{path_titles:strings(item.path_titles)}),
    ...(mapping===undefined?{}:{mapping:mapping===null?null:record(mapping)})};
}
export function planGoal(config: GoalPlannerConfig) {
  const coveragePath = path.join(
    config.project_root,
    "classifications",
    "indexes",
    `${config.classification_system}-${config.classification_version}-coverage.json`,
  );
  if (!existsSync(coveragePath)) {
    throw new GoalHarnessError("GOAL_COVERAGE_INDEX_MISSING", `Missing classification coverage index: ${coveragePath}`);
  }
  const coverage = record(json(readFileSync(coveragePath, "utf8")), "coverage index");
  const actualSystem = String(coverage.classification_system ?? field(coverage.classification,"system") ?? "").toLowerCase();
  const actualVersion = String(coverage.classification_version ?? field(coverage.classification,"version") ?? "");
  if (actualSystem !== config.classification_system.toLowerCase() || actualVersion !== String(config.classification_version)) {
    throw new GoalHarnessError("GOAL_COVERAGE_COORDINATE_MISMATCH", `Coverage index coordinate does not match ${config.classification_system}:${config.classification_version}`);
  }

  const targetDomain = config.target_category_relative.split("/")[2];
  const allEntries = records(coverage.entries ?? [],"coverage entries").map(entry);
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
  const sourceSeeds = readClassificationSourceSeeds(config);

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
    official_source_seeds: sourceSeeds,
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

function readClassificationSourceSeeds(config: GoalPlannerConfig) {
  const metadataPath = path.join(
    config.project_root,
    "classifications",
    "systems",
    config.classification_system,
    String(config.classification_version),
    "raw",
    "source-metadata.yaml",
  );
  if (!existsSync(metadataPath)) return [];
  const metadata = record(parseYaml(readFileSync(metadataPath, "utf8")), "classification source metadata");
  return metadata.source_url
    ? [{ name: `${String(metadata.classification_system).toUpperCase()} ${metadata.classification_version} official classification source`, locator: metadata.source_url, supports: "product classification identity" }]
    : [];
}

export function classifyEntry({ entry, manifestRecord, config }: { entry: PlannerEntry; manifestRecord?: ManifestRecord | undefined; config: Pick<GoalConfig, "classification_system" | "classification_version" | "target_category_relative"> }): PlannedGoalTask {
  const base = {
    id: `${config.classification_system}:${config.classification_version}:${entry.code}`,
    cpc_code: entry.code,
    product_name_en: entry.label,
    product_name_zh: nullableText(field(manifestRecord?.manifest.title,"zh-CN")),
    path_codes: entry.path_codes,
    path_titles: entry.path_titles,
    pcr_id: nullableText(manifestRecord?.manifest.id ?? entry.mapping?.pcr_id),
    pcr_path: manifestRecord?.relativeDir ?? proposedPcrPath(config, entry),
    coverage_status: entry.coverage_status,
    mapping: entry.mapping,
  };
  if (entry.coverage_status === "mapped" && field(entry.mapping?.acceptance,"status") === "accepted") {
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

function readTargetManifests(targetRoot: string, config: GoalPlannerConfig): Map<string, ManifestRecord> {
  const found = new Map<string, ManifestRecord>();
  for (const absolutePath of walkFiles(targetRoot, "manifest.yaml")) {
    const manifest = record(parseYaml(readFileSync(absolutePath, "utf8")), "PCR manifest");
    const reference = records(manifest.classification_refs ?? [],"classification refs").find((entry) =>
      String(entry.system).toLowerCase() === config.classification_system.toLowerCase() &&
      String(entry.version) === String(config.classification_version),
    );
    if (!reference?.code) continue;
    if (found.has(String(reference.code))) {
      throw new GoalHarnessError("GOAL_DUPLICATE_CLASSIFICATION_IDENTITY", `Multiple target PCR manifests claim ${config.classification_system}:${config.classification_version}:${reference.code}`);
    }
    found.set(String(reference.code), {
      manifest,
      absolutePath,
      relativeDir: toRepoPath(path.relative(config.project_root, path.dirname(absolutePath))),
    });
  }
  return found;
}

function walkFiles(root: string, fileName: string): string[] {
  const found: string[] = [];
  const stack = [root];
  while (stack.length > 0) {
    const current = stack.pop();
    if (current===undefined) break;
    for (const entry of readdirSync(current, { withFileTypes: true })) {
      const absolute = path.join(current, entry.name);
      if (entry.isDirectory()) stack.push(absolute);
      else if (entry.isFile() && entry.name === fileName) found.push(absolute);
    }
  }
  return found.sort();
}

function proposedPcrPath(config: Pick<GoalConfig,"target_category_relative">, entry: PlannerEntry): string {
  const subdomain = semanticSlug(entry.path_titles?.[1] ?? "uncategorized");
  const leaf = semanticSlug(entry.label) || `product-${entry.code}`;
  return `${config.target_category_relative}/${subdomain}/${leaf}`;
}

function semanticSlug(value: unknown): string {
  return String(value)
    .normalize("NFKD")
    .replace(/[\u0300-\u036f]/gu, "")
    .toLowerCase()
    .replace(/&/gu, " and ")
    .replace(/[^a-z0-9]+/gu, "-")
    .replace(/^-+|-+$/gu, "")
    .replace(/-{2,}/gu, "-");
}

function compareTasks(left: PlannedGoalTask, right: PlannedGoalTask): number {
  const priority: Record<string,number> = { promote_legacy: 0, create_new: 1, map_existing: 2, manual_review: 3, blocked: 4 };
  return (priority[left.queue_action] ?? 99) - (priority[right.queue_action] ?? 99) ||
    subdomainOf(left.pcr_path).localeCompare(subdomainOf(right.pcr_path)) ||
    left.cpc_code.localeCompare(right.cpc_code) ||
    String(left.pcr_path).localeCompare(String(right.pcr_path));
}

function subdomainOf(pcrPath: string): string {
  return String(pcrPath).split("/")[3] ?? "";
}

function summarize(tasks: readonly PlannedGoalTask[]): Record<string,number> {
  const summary: Record<string,number> = { total: tasks.length, create_new: 0, promote_legacy: 0, map_existing: 0, manual_review: 0, blocked: 0, completed: 0, queued: 0 };
  for (const task of tasks) {
    summary[task.queue_action] = (summary[task.queue_action] ?? 0) + 1;
    if (task.state === "completed") summary.completed = (summary.completed ?? 0) + 1;
    if (task.state === "queued") summary.queued = (summary.queued ?? 0) + 1;
  }
  return summary;
}

function toRepoPath(value: string): string {
  return value.split(path.sep).join("/");
}
