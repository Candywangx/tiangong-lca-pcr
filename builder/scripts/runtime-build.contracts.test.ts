import assert from "node:assert/strict";
import { execFileSync } from "node:child_process";
import { chmodSync, cpSync, existsSync, mkdirSync, mkdtempSync, readFileSync, readdirSync, realpathSync, rmSync, statSync, symlinkSync, writeFileSync } from "node:fs";
import { tmpdir } from "node:os";
import path from "node:path";
import test from "node:test";
import type { TestContext } from "node:test";
import { fileURLToPath } from "node:url";
import { buildOfflineTool } from "./build-offline-packages.ts";

function repositoryRoot(): string {
  let directory = path.dirname(fileURLToPath(import.meta.url));
  while (!existsSync(path.join(directory, "node_modules/typescript/bin/tsc"))) {
    const parent = path.dirname(directory);
    if (parent === directory) throw new Error("Installed repository compiler is required.");
    directory = parent;
  }
  return directory;
}

function write(root: string, relative: string, value: string | object): void {
  const filename = path.join(root, relative);
  mkdirSync(path.dirname(filename), { recursive: true });
  writeFileSync(filename, typeof value === "string" ? value : `${JSON.stringify(value, null, 2)}\n`);
}

test("the sealed provider importer still loads without installed package dependencies", t => {
  const root = repositoryRoot();
  const temp = mkdtempSync(path.join(realpathSync(tmpdir()), "pcr-provider-import-"));
  t.after(() => rmSync(temp, { recursive: true, force: true }));
  for (const relative of [
    "builder/scripts/product-web-materialize.mjs", "builder/scripts/product-release.mjs",
    "builder/scripts/product-identity.mjs", "builder/scripts/product-web.mjs", "builder/scripts/npm-release.mjs",
    "builder/lib/lifecycle-policy.ts", "builder/lib/lifecycle-vocab.ts",
    "packages/pcr-core/src/languages.ts", "packages/pcr-core/src/types.ts", "packages/pcr-core/src/vocabulary.ts", "packages/pcr-core/schemas/controlled-vocabulary.schema.json",
    "packages/pcr-docs/scripts/build-storage.mjs",
  ]) {
    mkdirSync(path.dirname(path.join(temp, relative)), { recursive: true });
    cpSync(path.join(root, relative), path.join(temp, relative));
  }
  const manifest: unknown = JSON.parse(readFileSync(path.join(root, "package.json"), "utf8"));
  assert.ok(manifest !== null && typeof manifest === "object" && "dependencies" in manifest);
  const dependencies = manifest.dependencies;
  assert.ok(dependencies !== null && typeof dependencies === "object" && !Array.isArray(dependencies));
  write(temp, "package.json", { private: true, type: "module" });
  write(temp, "probe.ts", `
    import assert from "node:assert/strict";
    const dependencies: string[] = ${JSON.stringify(Object.keys(dependencies))};
    for (const name of dependencies) assert.throws(() => import.meta.resolve(name), { code: "ERR_MODULE_NOT_FOUND" });
    await import("./builder/scripts/product-web-materialize.mjs");
    console.log("dependency-free importer ready");
  `);
  const output = execFileSync(process.execPath, [path.join(temp, "probe.ts")], {
    cwd: temp, encoding: "utf8", stdio: ["ignore", "pipe", "pipe"], timeout: 10_000,
  });
  assert.equal(output.trim(), "dependency-free importer ready");
});

function fixture(t: TestContext, binExtension = "ts"): { root: string; temp: string; output: string } {
  const temp = mkdtempSync(path.join(realpathSync(tmpdir()), "pcr-runtime-build-"));
  t.after(() => rmSync(temp, { recursive: true, force: true }));
  // Spaces and shell metacharacters exercise argv-safe compiler execution.
  const root = path.join(temp, "source with spaces & literal");
  mkdirSync(root);
  write(root, "package.json", { private: true, type: "module" });
  write(root, "packages/tiangong-pcr-cli/package.json", {
    name: "@tiangong-lca/pcr", version: "1.2.3", private: true, type: "module",
    bin: { "tiangong-pcr": `bin/tiangong-pcr.${binExtension}` },
    repository: { type: "git", url: "git+https://github.com/tiangong-lca/pcr.git" },
  });
  write(root, "package-lock.json", { lockfileVersion: 3, packages: {
    "": { dependencies: { "fixture-runtime": "1.0.0" }, devDependencies: { "fixture-dev": "1.0.0" } },
    "node_modules/fixture-runtime": { version: "1.0.0", dependencies: { "@fixture/nested": "2.0.0" } },
    "node_modules/fixture-runtime/node_modules/@fixture/nested": { version: "2.0.0" },
    "node_modules/fixture-runtime/node_modules/fixture-nested-dev": { version: "1.0.0", dev: true },
    "node_modules/fixture-dev": { version: "1.0.0", dev: true },
  } });
  write(root, "node_modules/fixture-runtime/package.json", {
    name: "fixture-runtime", version: "1.0.0", type: "module", main: "index.js", dependencies: { "@fixture/nested": "2.0.0" },
  });
  write(root, "node_modules/fixture-runtime/index.js", "import nested from '@fixture/nested'; export default `runtime:${nested}`;\n");
  write(root, "node_modules/fixture-runtime/index.d.ts", "declare const value: string; export default value;\n");
  write(root, "node_modules/fixture-runtime/LICENSE", "Runtime dependency license\n");
  write(root, "node_modules/fixture-runtime/node_modules/@fixture/nested/package.json", {
    name: "@fixture/nested", version: "2.0.0", type: "module", main: "index.js",
  });
  write(root, "node_modules/fixture-runtime/node_modules/@fixture/nested/index.js", "export default 'nested';\n");
  write(root, "node_modules/fixture-dev/package.json", { name: "fixture-dev", version: "1.0.0" });
  write(root, "node_modules/fixture-runtime/node_modules/fixture-nested-dev/package.json", { name: "fixture-nested-dev", version: "1.0.0" });
  const installedRoot = repositoryRoot();
  symlinkSync(path.join(installedRoot, "node_modules/typescript"), path.join(root, "node_modules/typescript"), "junction");
  symlinkSync(path.join(installedRoot, "node_modules/@types"), path.join(root, "node_modules/@types"), "junction");
  write(root, "tsconfig.runtime.json", {
    compilerOptions: {
      target: "ES2023", module: "NodeNext", moduleResolution: "NodeNext", types: ["node"],
      strict: true, noUncheckedIndexedAccess: true, exactOptionalPropertyTypes: true,
      verbatimModuleSyntax: true, erasableSyntaxOnly: true, rewriteRelativeImportExtensions: true,
      ...(binExtension === "mjs" ? { allowJs: true, checkJs: false } : {}),
      noEmit: false, noEmitOnError: true, rootDir: ".",
      sourceMap: true, sourceRoot: "pcr://source/", inlineSources: true,
    },
    include: ["packages/pcr-core/src/**/*", "packages/tiangong-pcr-cli/src/**/*", "packages/tiangong-pcr-cli/bin/**/*"],
  });
  write(root, "packages/pcr-core/src/value.ts", "export const value: string = 'typed';\n");
  write(root, "packages/pcr-core/src/reader.ts", [
    "import { readFileSync } from 'node:fs';",
    "import { value } from './value.ts';",
    "export function readSchema(): string { return `${value}:${readFileSync(new URL('../schemas/fixture.json', import.meta.url), 'utf8').trim()}`; }",
    "",
  ].join("\n"));
  write(root, "packages/tiangong-pcr-cli/src/commands.ts", [
    "import { readSchema } from '../../pcr-core/src/reader.ts';",
    "import runtime from 'fixture-runtime';",
    "export function run() { return `${readSchema()}:${runtime}`; }",
    "",
  ].join("\n"));
  write(root, `packages/tiangong-pcr-cli/bin/tiangong-pcr.${binExtension}`, binExtension === "cts"
    ? "#!/usr/bin/env node\nvoid import('../src/commands.ts').then(({ run }) => console.log(run()));\n"
    : "#!/usr/bin/env node\nimport { run } from '../src/commands.ts';\nconsole.log(run());\n");
  chmodSync(path.join(root, `packages/tiangong-pcr-cli/bin/tiangong-pcr.${binExtension}`), 0o644);
  write(root, "packages/pcr-core/schemas/fixture.json", "{\"asset\":true}\n");
  write(root, "skills/tiangong-pcr/SKILL.md", "# Skill fixture\n");
  write(root, "packages/tiangong-pcr-cli/README.md", "# Consumer fixture\n");
  write(root, "LICENSE", "MIT fixture\n");
  return { temp, root, output: path.join(temp, "tool with spaces & literal") };
}

function files(root: string, relative = ""): string[] {
  return readdirSync(path.join(root, relative), { withFileTypes: true }).flatMap(entry => {
    const next = relative ? `${relative}/${entry.name}` : entry.name;
    return entry.isDirectory() ? files(root, next) : [next];
  }).sort();
}

function assertRolledBack(temp: string, output: string): void {
  assert.equal(existsSync(output), false);
  assert.deepEqual(readdirSync(temp).filter(name => name.startsWith(`${path.basename(output)}.stage-`)), []);
}

test("real compilation stages relocatable emitted runtime, assets, bin and locked runtime graph", t => {
  const { root, output, temp } = fixture(t);
  const receipt = buildOfflineTool({ root, output });
  assert.deepEqual(receipt, { name: "@tiangong-lca/pcr", version: "1.2.3", output, bundled_dependencies: ["fixture-runtime"] });
  const packageJson: unknown = JSON.parse(readFileSync(path.join(output, "package.json"), "utf8"));
  assert.deepEqual(packageJson, {
    name: "@tiangong-lca/pcr", version: "1.2.3", type: "module", description: "Offline PCR consumer CLI and agent Skill",
    license: "MIT", engines: { node: ">=24.19.0" }, bin: { "tiangong-pcr": "packages/tiangong-pcr-cli/bin/tiangong-pcr.js" },
    files: ["packages", "skills", "README.md", "LICENSE", "NOTICE.md"],
    repository: { type: "git", url: "git+https://github.com/tiangong-lca/pcr.git" },
    dependencies: { "fixture-runtime": "1.0.0" }, bundleDependencies: ["fixture-runtime"],
  });
  const runtimeFiles = files(path.join(output, "packages"));
  assert.ok(runtimeFiles.every(file => !/\.(?:ts|mts|cts)$/u.test(file)));
  assert.equal(existsSync(path.join(output, ".compiled-runtime")), false);
  for (const relative of ["node_modules/typescript", "node_modules/@types", "node_modules/fixture-dev", "node_modules/fixture-runtime/node_modules/fixture-nested-dev"]) assert.equal(existsSync(path.join(output, relative)), false);
  assert.equal(readFileSync(path.join(output, "packages/pcr-core/schemas/fixture.json"), "utf8"), readFileSync(path.join(root, "packages/pcr-core/schemas/fixture.json"), "utf8"));
  assert.equal(readFileSync(path.join(output, "README.md"), "utf8"), "# Consumer fixture\n");
  assert.equal(readFileSync(path.join(output, "LICENSE"), "utf8"), "MIT fixture\n");
  assert.equal(readFileSync(path.join(output, "skills/tiangong-pcr/SKILL.md"), "utf8"), "# Skill fixture\n");
  assert.match(readFileSync(path.join(output, "NOTICE.md"), "utf8"), /Bundled dependencies retain their own licenses/u);
  const bin = path.join(output, "packages/tiangong-pcr-cli/bin/tiangong-pcr.js");
  assert.equal(statSync(bin).mode & 0o111, 0o111);
  assert.match(readFileSync(path.join(output, "packages/tiangong-pcr-cli/src/commands.js"), "utf8"), /reader\.js/u);
  assert.equal(execFileSync(process.execPath, ["--no-strip-types", bin], { cwd: temp, encoding: "utf8" }).trim(), 'typed:{"asset":true}:runtime:nested');
  const second = path.join(temp, "second compilation");
  buildOfflineTool({ root, output: second });
  for (const relative of runtimeFiles.filter(file => file.endsWith(".map"))) {
    const bytes = readFileSync(path.join(output, "packages", relative), "utf8");
    assert.equal(bytes, readFileSync(path.join(second, "packages", relative), "utf8"));
    assert.ok(!bytes.includes(temp) && !bytes.includes(root));
    assert.match(bytes, /pcr:\/\/source\//u);
    assert.match(bytes, /sourcesContent/u);
  }
});

test("compiled tarball installs offline and runs from node_modules without TypeScript stripping", t => {
  const { root, output, temp } = fixture(t);
  buildOfflineTool({ root, output, version: "2.0.0" });
  const candidates = [
    process.env.npm_execpath,
    path.join(path.dirname(process.execPath), "npm"),
    path.resolve(path.dirname(process.execPath), "../lib/node_modules/npm/bin/npm-cli.js"),
    path.resolve(path.dirname(process.execPath), "node_modules/npm/bin/npm-cli.js"),
  ];
  const npmCli = candidates.find(candidate => candidate !== undefined && existsSync(candidate));
  assert.ok(npmCli, "Installed npm CLI is required for offline tarball qualification.");
  const installation = path.join(temp, "installed elsewhere");
  mkdirSync(installation);
  write(installation, "package.json", { private: true });
  const npm = (args: string[]) => execFileSync(process.execPath, [realpathSync(npmCli), ...args, "--cache", path.join(temp, "empty-cache"), "--offline", "--ignore-scripts", "--no-audit", "--no-fund"], {
    cwd: installation, encoding: "utf8", stdio: ["ignore", "pipe", "pipe"], env: { ...process.env, npm_config_registry: "http://127.0.0.1:1" },
  });
  npm(["pack", output, "--pack-destination", temp]);
  npm(["install", path.join(temp, "tiangong-lca-pcr-2.0.0.tgz")]);
  const installed = path.join(installation, "node_modules/@tiangong-lca/pcr");
  assert.ok(files(path.join(installed, "packages")).every(file => !/\.(?:ts|mts|cts)$/u.test(file)));
  const bin = path.join(installed, "packages/tiangong-pcr-cli/bin/tiangong-pcr.js");
  assert.equal(execFileSync(process.execPath, ["--no-strip-types", bin], { cwd: installation, encoding: "utf8" }).trim(), 'typed:{"asset":true}:runtime:nested');
  assert.equal(existsSync(path.join(installation, "node_modules/typescript")), false);
});

for (const [sourceExtension, emittedExtension] of [["mjs", "mjs"], ["mts", "mjs"], ["cts", "cjs"]] as const) {
  test(`${sourceExtension} source bin maps to the actual executable ${emittedExtension} runtime`, t => {
    const { root, output, temp } = fixture(t, sourceExtension);
    buildOfflineTool({ root, output });
    assert.equal(execFileSync(process.execPath, ["--no-strip-types", path.join(output, `packages/tiangong-pcr-cli/bin/tiangong-pcr.${emittedExtension}`)], { cwd: temp, encoding: "utf8" }).trim(), 'typed:{"asset":true}:runtime:nested');
  });
}

test("compiler and installed-version failures remove every owned staging artifact", t => {
  const { root, output, temp } = fixture(t);
  write(root, "packages/pcr-core/src/value.ts", "export const value: string = 42;\n");
  assert.throws(() => buildOfflineTool({ root, output }));
  assertRolledBack(temp, output);
  write(root, "packages/pcr-core/src/value.ts", "export const value: string = 'typed';\n");
  write(root, "node_modules/fixture-runtime/package.json", { name: "fixture-runtime", version: "9.0.0" });
  assert.throws(() => buildOfflineTool({ root, output }), /Installed dependency differs from lockfile/u);
  assertRolledBack(temp, output);
});

test("malformed JSON boundaries fail before publication and preexisting output stays intact", t => {
  const { root, output, temp } = fixture(t);
  const cases: readonly { packages: Record<string, unknown>; pattern: RegExp }[] = [
    { packages: { "": { dependencies: [] } }, pattern: /root dependencies/u },
    { packages: { "": { dependencies: { "fixture-runtime": 1 } } }, pattern: /root dependencies/u },
    { packages: { "": { dependencies: {} }, "node_modules/../escape": { version: "1.0.0" } }, pattern: /dependency path/u },
    { packages: { "": { dependencies: {} }, "node_modules/a": { version: { bad: true } } }, pattern: /package version/u },
    { packages: { "": { dependencies: {} }, "node_modules/a": { version: "1.0.0", dependencies: { b: false } } }, pattern: /dependencies of/u },
    { packages: { "": { dependencies: {} }, "node_modules/a": { version: "1.0.0", dev: "true" } }, pattern: /dev flag/u },
    { packages: { "": { dependencies: { missing: "1.0.0" } } }, pattern: /Missing locked runtime dependency/u },
  ];
  for (const invalid of cases) {
    write(root, "package-lock.json", { packages: invalid.packages });
    assert.throws(() => buildOfflineTool({ root, output }), invalid.pattern);
    assertRolledBack(temp, output);
  }
  mkdirSync(output);
  write(output, "keep.txt", "existing output\n");
  assert.throws(() => buildOfflineTool({ root, output }), /Output exists/u);
  assert.equal(readFileSync(path.join(output, "keep.txt"), "utf8"), "existing output\n");
});

test("invalid manifests cannot redirect emitted bins outside the tool package", t => {
  const { root, output, temp } = fixture(t);
  for (const bin of [{ "tiangong-pcr": "bin/../../escape.ts" }, { "tiangong-pcr": false }, {}]) {
    write(root, "packages/tiangong-pcr-cli/package.json", { version: "1.2.3", bin });
    assert.throws(() => buildOfflineTool({ root, output }), /CLI bin mapping/u);
    assertRolledBack(temp, output);
  }
  write(root, "packages/tiangong-pcr-cli/package.json", { version: { bad: true }, bin: { "tiangong-pcr": "bin/tiangong-pcr.ts" } });
  assert.throws(() => buildOfflineTool({ root, output }), /Invalid tool version/u);
  assertRolledBack(temp, output);
});
