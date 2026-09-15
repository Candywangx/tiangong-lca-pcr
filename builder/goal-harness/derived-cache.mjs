import { createHash } from "node:crypto";
import { cpSync, existsSync, lstatSync, mkdirSync, mkdtempSync, readFileSync, readdirSync, renameSync, rmSync, writeFileSync } from "node:fs";
import path from "node:path";

import { GoalHarnessError } from "./errors.mjs";

const VIEWER_INPUTS = [
  "library/pcrs",
  "library/catalog.yaml",
  "library/indexes",
  "classifications/mappings",
  "classifications/aliases",
  "classifications/indexes",
  "packages/pcr-core/src",
  "packages/pcr-core/schemas",
  "packages/pcr-viewer/scripts",
  "packages/pcr-viewer/static",
];

export function runCachedViewerBuild({ root, stateDir, runner }) {
  const inputSha256 = hashManagedTree(root, VIEWER_INPUTS);
  const cacheRoot = path.join(stateDir, "derived-cache", "viewer");
  const cacheEntry = path.join(cacheRoot, inputSha256.slice("sha256:".length));
  const cachePath = path.join(cacheEntry, "dist");
  const manifestPath = path.join(cacheEntry, "manifest.json");
  const outDir = path.join(root, "packages", "pcr-viewer", "dist");
  if (validCache({ cachePath, manifestPath, inputSha256 })) {
    replaceGeneratedOutput({ outDir, source: cachePath });
    return { name: "viewer_build", exit_code: 0, cache_hit: true, input_sha256: inputSha256, output_sha256: hashTree(cachePath), cache_path: cachePath };
  }

  const commandResult = runner();
  if (!existsSync(path.join(outDir, ".tiangong-pcr-viewer-build"))) {
    throw new GoalHarnessError("GOAL_VIEWER_CACHE_OUTPUT_INVALID", "viewer:build did not produce its ownership marker.");
  }
  const outputSha256 = hashTree(outDir);
  mkdirSync(cacheRoot, { recursive: true });
  if (existsSync(cacheEntry)) renameSync(cacheEntry, `${cacheEntry}.corrupt-${Date.now()}`);
  const temp = mkdtempSync(path.join(cacheRoot, ".viewer-cache-"));
  try {
    cpSync(outDir, path.join(temp, "dist"), { recursive: true });
    writeFileSync(path.join(temp, "manifest.json"), `${JSON.stringify({ schema_version: 1, input_sha256: inputSha256, output_sha256: outputSha256 }, null, 2)}\n`);
    renameSync(temp, cacheEntry);
  } catch (error) {
    rmSync(temp, { recursive: true, force: true });
    throw error;
  }
  return { ...commandResult, cache_hit: false, input_sha256: inputSha256, output_sha256: outputSha256, cache_path: cachePath };
}

function validCache({ cachePath, manifestPath, inputSha256 }) {
  try {
    if (!existsSync(path.join(cachePath, ".tiangong-pcr-viewer-build"))) return false;
    const manifest = JSON.parse(readFileSync(manifestPath, "utf8"));
    return manifest.schema_version === 1 && manifest.input_sha256 === inputSha256 && manifest.output_sha256 === hashTree(cachePath);
  } catch {
    return false;
  }
}

function replaceGeneratedOutput({ outDir, source }) {
  if (existsSync(outDir) && !existsSync(path.join(outDir, ".tiangong-pcr-viewer-build"))) {
    throw new GoalHarnessError("GOAL_VIEWER_CACHE_OUTPUT_UNOWNED", `Refusing to replace unowned viewer output: ${outDir}`);
  }
  const parent = path.dirname(outDir);
  mkdirSync(parent, { recursive: true });
  const temp = mkdtempSync(path.join(parent, ".viewer-cache-restore-"));
  cpSync(source, temp, { recursive: true });
  if (existsSync(outDir)) rmSync(outDir, { recursive: true, force: true });
  renameSync(temp, outDir);
}

function hashManagedTree(root, relativeInputs) {
  const files = relativeInputs.flatMap((relative) => collectFiles(path.join(root, relative), root)).sort();
  const hash = createHash("sha256");
  for (const relative of files) {
    hash.update(relative).update("\0").update(readFileSync(path.join(root, relative))).update("\0");
  }
  return `sha256:${hash.digest("hex")}`;
}

function hashTree(root) { return hashManagedTree(root, ["."]); }

function collectFiles(target, root) {
  if (!existsSync(target)) return [];
  const stat = lstatSync(target);
  if (stat.isSymbolicLink()) throw new GoalHarnessError("GOAL_DERIVED_CACHE_SYMLINK", `Derived-cache input/output contains a symbolic link: ${target}`);
  if (stat.isFile()) return [path.relative(root, target).split(path.sep).join("/")];
  if (!stat.isDirectory()) throw new GoalHarnessError("GOAL_DERIVED_CACHE_SPECIAL_FILE", `Derived-cache input/output is not a regular file or directory: ${target}`);
  return readdirSync(target, { withFileTypes: true }).flatMap((entry) => collectFiles(path.join(target, entry.name), root));
}
