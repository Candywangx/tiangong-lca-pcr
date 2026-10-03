import { execFileSync } from "node:child_process";
import { chmodSync, cpSync, existsSync, lstatSync, mkdirSync, mkdtempSync, readFileSync, realpathSync, renameSync, rmSync, writeFileSync } from "node:fs";
import path from "node:path";
import { pathToFileURL } from "node:url";

export interface OfflineToolOptions {
  readonly root: string;
  readonly output: string;
  readonly version?: string | null;
}

export interface OfflineToolResult {
  readonly name: "@tiangong-lca/pcr";
  readonly version: string;
  readonly output: string;
  readonly bundled_dependencies: readonly string[];
}

type JsonObject = Record<string, unknown>;
type Dependencies = Record<string, string>;
interface LockedPackage { readonly relative: string; readonly version: string; }

function object(value: unknown, label: string): JsonObject {
  if (value === null || typeof value !== "object" || Array.isArray(value)) throw new Error(`Invalid ${label}: expected an object.`);
  return value as JsonObject;
}

function readJson(filename: string): unknown {
  return JSON.parse(readFileSync(filename, "utf8")) as unknown;
}

const PACKAGE_NAME = /^(?:@[a-zA-Z0-9._-]+\/)?[a-zA-Z0-9._-]+$/u;
const SEMVER = /^\d+\.\d+\.\d+(?:-[a-zA-Z0-9.-]+)?(?:\+[a-zA-Z0-9.-]+)?$/u;

function dependencies(value: unknown, label: string): Dependencies {
  const result: Dependencies = {};
  for (const [name, version] of Object.entries(object(value, label))) {
    if (!PACKAGE_NAME.test(name) || name.split("/").some(part => part === "." || part === "..") ||
      typeof version !== "string" || version.trim() === "") throw new Error(`Invalid ${label}: ${name}.`);
    Object.defineProperty(result, name, { value: version, enumerable: true });
  }
  return result;
}

function lockedPackages(value: unknown): { dependencies: Dependencies; packages: LockedPackage[] } {
  const entries = object(object(value, "lockfile").packages, "lockfile packages");
  const runtimeDependencies = dependencies(object(entries[""], "lockfile root").dependencies, "root dependencies");
  const packages: LockedPackage[] = [];
  for (const [relative, value] of Object.entries(entries)) {
    if (relative.includes("\\") || path.posix.isAbsolute(relative) || (relative !== "" &&
      relative.split("/").some(part => part === "" || part === "." || part === ".."))) throw new Error(`Invalid lockfile dependency path: ${relative}`);
    if (!relative.startsWith("node_modules/")) continue;
    // Lock paths may contain scoped names and nested dependency installations, never traversal.
    if (!/^node_modules\/(?:@[a-zA-Z0-9._-]+\/)?[a-zA-Z0-9._-]+(?:\/node_modules\/(?:@[a-zA-Z0-9._-]+\/)?[a-zA-Z0-9._-]+)*$/u.test(relative) ||
      relative.split("/").some(part => part === "." || part === "..")) throw new Error(`Invalid lockfile dependency path: ${relative}`);
    const entry = object(value, `lockfile package ${relative}`);
    if (entry.dev !== undefined && typeof entry.dev !== "boolean") throw new Error(`Invalid lockfile dev flag: ${relative}`);
    if (entry.dev === true) continue;
    if (typeof entry.version !== "string" || !SEMVER.test(entry.version)) throw new Error(`Invalid lockfile package version: ${relative}`);
    if (entry.dependencies !== undefined) dependencies(entry.dependencies, `dependencies of ${relative}`);
    if (entry.optionalDependencies !== undefined) dependencies(entry.optionalDependencies, `optional dependencies of ${relative}`);
    packages.push({ relative, version: entry.version });
  }
  for (const name of Object.keys(runtimeDependencies)) {
    if (!packages.some(entry => entry.relative === `node_modules/${name}`)) throw new Error(`Missing locked runtime dependency: ${name}`);
  }
  return { dependencies: runtimeDependencies, packages };
}

function runtimeBins(value: unknown): Record<string, string> {
  const bins: Record<string, string> = {};
  for (const [name, source] of Object.entries(object(value, "CLI bin mapping"))) {
    if (!/^[a-zA-Z0-9._-]+$/u.test(name) || typeof source !== "string" ||
      !source.startsWith("bin/") || source.includes("\\") || source.split("/").some(part => ["", ".", ".."].includes(part)) ||
      !/\.(?:ts|mts|cts|js|mjs|cjs)$/u.test(source)) throw new Error(`Invalid CLI bin mapping: ${name}`);
    const emitted = source.replace(/\.mts$/u, ".mjs").replace(/\.cts$/u, ".cjs").replace(/\.ts$/u, ".js");
    Object.defineProperty(bins, name, { value: `packages/tiangong-pcr-cli/${emitted}`, enumerable: true });
  }
  if (Object.keys(bins).length === 0) throw new Error("CLI bin mapping is empty.");
  return bins;
}

function pathExists(filename: string): boolean {
  try { lstatSync(filename); return true; }
  catch (error: unknown) {
    if (error instanceof Error && "code" in error && error.code === "ENOENT") return false;
    throw error;
  }
}

function repository(value: unknown): string | Record<string, string> | undefined {
  if (value === undefined || typeof value === "string") return value;
  const fields = object(value, "repository metadata");
  const result: Record<string, string> = {};
  for (const [name, field] of Object.entries(fields)) {
    if (!["type", "url", "directory"].includes(name) || typeof field !== "string") throw new Error("Invalid repository metadata.");
    result[name] = field;
  }
  return result;
}

/** Compile source with the installed compiler, then atomically stage a self-contained tool. */
export function buildOfflineTool(options: OfflineToolOptions): OfflineToolResult {
  const root = path.resolve(options.root);
  let output = path.resolve(options.output);
  if (pathExists(output)) throw new Error(`Output exists: ${output}`);
  const template = object(readJson(path.join(root, "packages/tiangong-pcr-cli/package.json")), "CLI package manifest");
  const version = options.version ?? template.version;
  if (typeof version !== "string" || !SEMVER.test(version)) throw new Error("Invalid tool version.");
  const bin = runtimeBins(template.bin);
  const repositoryMetadata = repository(template.repository);
  const graph = lockedPackages(readJson(path.join(root, "package-lock.json")));
  mkdirSync(path.dirname(output), { recursive: true });
  output = path.join(realpathSync(path.dirname(output)), path.basename(output));
  if (pathExists(output)) throw new Error(`Output exists: ${output}`);
  const stage = mkdtempSync(`${output}.stage-`);
  try {
    const compileStage = path.join(stage, ".compiled-runtime");
    execFileSync(process.execPath, [path.join(root, "node_modules/typescript/bin/tsc"), "-p", path.join(root, "tsconfig.runtime.json"), "--outDir", compileStage], {
      cwd: root, stdio: "pipe", encoding: "utf8",
    });
    for (const relative of ["packages/pcr-core/src", "packages/tiangong-pcr-cli/src", "packages/tiangong-pcr-cli/bin"]) {
      cpSync(path.join(compileStage, relative), path.join(stage, relative), { recursive: true });
    }
    rmSync(compileStage, { recursive: true, force: true });
    for (const relative of ["packages/pcr-core/schemas", "skills/tiangong-pcr"]) {
      cpSync(path.join(root, relative), path.join(stage, relative), { recursive: true });
    }
    for (const entry of graph.packages) {
      const source = path.join(root, entry.relative);
      const installed = object(readJson(path.join(source, "package.json")), `installed dependency ${entry.relative}`);
      if (installed.version !== entry.version) throw new Error(`Installed dependency differs from lockfile: ${entry.relative}; run npm ci.`);
      // Nested installations are copied from their own lock entries; copying a
      // parent's whole node_modules tree could smuggle in dev-only dependencies.
      cpSync(source, path.join(stage, entry.relative), {
        recursive: true, dereference: true,
        filter: filename => path.relative(source, filename).split(path.sep)[0] !== "node_modules",
      });
    }
    for (const relative of Object.values(bin)) {
      const filename = path.join(stage, relative);
      if (!existsSync(filename) || !lstatSync(filename).isFile()) throw new Error(`Compiled CLI bin is missing: ${relative}`);
      chmodSync(filename, lstatSync(filename).mode | 0o111);
    }
    writeFileSync(path.join(stage, "package.json"), `${JSON.stringify({
      name: "@tiangong-lca/pcr", version, type: "module", description: "Offline PCR consumer CLI and agent Skill",
      license: "MIT", engines: { node: ">=24.19.0" }, bin,
      files: ["packages", "skills", "README.md", "LICENSE", "NOTICE.md"],
      ...(repositoryMetadata === undefined ? {} : { repository: repositoryMetadata }),
      dependencies: graph.dependencies, bundleDependencies: Object.keys(graph.dependencies),
    }, null, 2)}\n`);
    cpSync(path.join(root, "packages/tiangong-pcr-cli/README.md"), path.join(stage, "README.md"));
    cpSync(path.join(root, "LICENSE"), path.join(stage, "LICENSE"));
    writeFileSync(path.join(stage, "NOTICE.md"), "# Tool distribution\n\nSource: https://github.com/tiangong-lca/pcr\n\nTianGong LCA code, schemas, documentation and Skill are distributed under the MIT License; see LICENSE. Bundled dependencies retain their own licenses and notices in node_modules.\n");
    if (pathExists(output)) throw new Error(`Output exists: ${output}`);
    renameSync(stage, output);
    return { name: "@tiangong-lca/pcr", version, output, bundled_dependencies: Object.keys(graph.dependencies) };
  } catch (error: unknown) {
    rmSync(stage, { recursive: true, force: true });
    throw error;
  }
}

if (process.argv[1] !== undefined && import.meta.url === pathToFileURL(path.resolve(process.argv[1])).href) {
  const args = process.argv.slice(2);
  const options: { root?: string; output?: string; version?: string } = {};
  for (let i = 0; i < args.length; i += 2) {
    const flag = args[i];
    const value = args[i + 1];
    if (value === undefined || value === "") throw new Error("Usage: build-offline-packages.ts --root <repo> --output <new-directory> [--version <tool-semver>]");
    if (flag === "--root") options.root = value;
    else if (flag === "--output") options.output = value;
    else if (flag === "--version") options.version = value;
    else throw new Error("Usage: build-offline-packages.ts --root <repo> --output <new-directory> [--version <tool-semver>]");
  }
  console.log(JSON.stringify(buildOfflineTool({ root: options.root ?? process.cwd(), output: options.output ?? "dist/tiangong-pcr", ...(options.version === undefined ? {} : { version: options.version }) }), null, 2));
}
