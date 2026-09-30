import { cpSync, existsSync, mkdirSync, mkdtempSync, readFileSync, realpathSync, renameSync, rmSync, writeFileSync } from "node:fs";
import path from "node:path";
import { pathToFileURL } from "node:url";

/** Stage a self-contained tool package using the already installed lockfile graph. */
export function buildOfflineTool({ root, output, version = null }) {
  root = path.resolve(root); output = path.resolve(output);
  if (existsSync(output)) throw new Error(`Output exists: ${output}`);
  const template = JSON.parse(readFileSync(path.join(root, "packages/tiangong-pcr-cli/package.json"), "utf8"));
  version ??= template.version;
  if (!/^\d+\.\d+\.\d+(?:-[a-zA-Z0-9.-]+)?$/u.test(version)) throw new Error("Invalid tool version.");
  const lock = JSON.parse(readFileSync(path.join(root, "package-lock.json"), "utf8"));
  mkdirSync(path.dirname(output), { recursive: true });
  output = path.join(realpathSync(path.dirname(output)), path.basename(output));
  const stage = mkdtempSync(`${output}.stage-`);
  try {
    for (const relative of ["packages/pcr-core/src", "packages/pcr-core/schemas", "packages/tiangong-pcr-cli/src", "packages/tiangong-pcr-cli/bin", "skills/tiangong-pcr"]) {
      cpSync(path.join(root, relative), path.join(stage, relative), { recursive: true });
    }
    for (const [relative, entry] of Object.entries(lock.packages)) {
      if (!relative.startsWith("node_modules/") || entry.dev) continue;
      const installed = JSON.parse(readFileSync(path.join(root, relative, "package.json"), "utf8"));
      if (installed.version !== entry.version) throw new Error(`Installed dependency differs from lockfile: ${relative}; run npm ci.`);
      cpSync(path.join(root, relative), path.join(stage, relative), { recursive: true, dereference: true });
    }
    const dependencies = lock.packages[""].dependencies;
    writeFileSync(path.join(stage, "package.json"), `${JSON.stringify({ name: "tiangong-pcr", version, type: "module", description: "Offline PCR consumer CLI and agent Skill", license: "UNLICENSED", engines: { node: ">=24.19.0" }, bin: { "tiangong-pcr": "packages/tiangong-pcr-cli/bin/tiangong-pcr.mjs" }, files: ["packages", "skills", "README.md", "NOTICE.md"], dependencies, bundleDependencies: Object.keys(dependencies) }, null, 2)}\n`);
    cpSync(path.join(root, "docs/offline-distribution.md"), path.join(stage, "README.md"));
    writeFileSync(path.join(stage, "NOTICE.md"), "# Tool distribution\n\nSource: https://github.com/tiangong-lca/pcr\n\nNo repository-wide distribution license has been declared. Bundled dependencies retain their own licenses and notices in node_modules. This artifact grants no additional rights.\n");
    renameSync(stage, output);
    return { name: "tiangong-pcr", version, output, bundled_dependencies: Object.keys(dependencies) };
  } catch (error) { rmSync(stage, { recursive: true, force: true }); throw error; }
}
if (process.argv[1] && import.meta.url === pathToFileURL(path.resolve(process.argv[1])).href) {
  const args = process.argv.slice(2); const options = {};
  for (let i = 0; i < args.length; i += 2) {
    if (!["--root", "--output", "--version"].includes(args[i]) || !args[i + 1]) throw new Error("Usage: build-offline-packages.mjs --root <repo> --output <new-directory> [--version <tool-semver>]");
    options[args[i].slice(2)] = args[i + 1];
  }
  console.log(JSON.stringify(buildOfflineTool({ root: options.root ?? process.cwd(), output: options.output ?? "dist/tiangong-pcr", version: options.version }), null, 2));
}
