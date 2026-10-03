import path from "node:path";

import { GoalHarnessError } from "./errors.ts";

const SENSITIVE_SEGMENTS = new Set(["node_modules", "tmp", ".pcr-builder-state"]);

export function assertRepoPath(value: unknown, { allowSensitive = false }: {allowSensitive?: boolean} = {}): string {
  if (typeof value !== "string" || value === "" || path.isAbsolute(value)) {
    throw new GoalHarnessError("GOAL_PATH_INVALID", `Expected a non-empty repository-relative path: ${value}`);
  }
  const normalized = value.split(path.sep).join("/");
  const segments = normalized.split("/");
  if (segments.includes("..") || segments.includes("") || normalized === ".") {
    throw new GoalHarnessError("GOAL_PATH_INVALID", `Unsafe repository path: ${value}`);
  }
  if (!allowSensitive && isSensitiveRepoPath(normalized)) {
    throw new GoalHarnessError("GOAL_BASELINE_SENSITIVE_PATH", `Sensitive path is forbidden: ${normalized}`);
  }
  return normalized;
}

export function isSensitiveRepoPath(repoPath: string): boolean {
  const segments = repoPath.split("/");
  return segments.some((segment) => SENSITIVE_SEGMENTS.has(segment)) ||
    segments.some((segment) => segment === ".env" || segment.startsWith(".env."));
}

export function resolveRepoPath(root: string, repoPath: unknown, options?: {allowSensitive?: boolean}): string {
  const normalized = assertRepoPath(repoPath, options);
  const resolved = path.resolve(root, ...normalized.split("/"));
  const relative = path.relative(path.resolve(root), resolved);
  if (relative.startsWith("..") || path.isAbsolute(relative)) {
    throw new GoalHarnessError("GOAL_PATH_INVALID", `Path escapes repository: ${repoPath}`);
  }
  return resolved;
}
