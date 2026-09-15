import assert from "node:assert/strict";
import { spawnSync } from "node:child_process";
import { cpSync, existsSync, lstatSync, mkdirSync, mkdtempSync, readFileSync, readdirSync, readlinkSync, renameSync, rmSync, symlinkSync, writeFileSync } from "node:fs";
import { tmpdir } from "node:os";
import path from "node:path";
import { fileURLToPath } from "node:url";
import test from "node:test";

import { parsePcrMarkdownToStructured, structuredProjectionYaml } from "../lib/markdown-projection.mjs";

const repoRoot = fileURLToPath(new URL("../../", import.meta.url));
const cli = path.join(repoRoot, "builder/cli/index.mjs");
const sourceFixture = path.join(repoRoot, "builder/fixtures/measurement-44125");
const relativePcr = "library/pcrs/metal-products-machinery-and-equipment/special-purpose-machinery/straw-or-fodder-balers-including-pickup-balers";
const canonicalFiles = ["manifest.yaml", "pcr.en-US.md", "pcr.zh-CN.md", "structured.yaml"];
const run = (args, cwd = repoRoot) => spawnSync(process.execPath, [cli, "check", ...args], {
  cwd, encoding: "utf8", maxBuffer: 4 * 1024 * 1024, timeout: 15_000,
});

function positiveMarkdown(language) {
  const zh = language === "zh-CN";
  const definition = zh
    ? "M = 同一配置的一台完整打捆机的验收净质量，单位 kg；采用 cp_reference_mass 采集。"
    : "M = accepted net mass of one complete baler of the same configuration in kg; collect using cp_reference_mass.";
  const method = zh
    ? "使用经校准的秤称量已验收的完整打捆机，排除运输包装；核对同一配置和验收记录。"
    : "Weigh the accepted complete baler on a calibrated scale, excluding transport packaging; reconcile the same configuration and acceptance record.";
  let markdown = readFileSync(path.join(sourceFixture, "pcr." + language + ".md"), "utf8")
    .replace(/\| (Reference amount|参考数量) \| 1 \|/u, "| $1 | M |")
    .replace(/^- (Normalization basis|归一化基准)[:：].*$/gmu, zh ? "- 归一化基准：每台验收成品打捆机" : "- Normalization basis: per one accepted finished baler")
    .replace(/^(- (?:Amount rule|数量规则)[:：])(?: One accepted finished baler with declared net mass and configuration\.|一台具有所声明净质量和配置的验收成品打捆机。)$/gmu, "$1 M kg");
  markdown = markdown.split("\n").map((line) => {
    if (!line.startsWith("|")) return line;
    const cells = line.split("|");
    const id = cells[1]?.trim().replaceAll("`", "");
    if (id === "reference_mass") cells[5] = " " + definition + " ";
    if (id?.startsWith("cp_")) cells[11] = zh ? " 数量 / 验收打捆机数 " : " quantity / accepted balers ";
    return cells.join("|");
  }).join("\n");
  const protocol = "| cp_reference_mass | final_assembly_acceptance | accepted reference product | acceptance weighing record | " +
    (zh ? "配置；验收净质量 M" : "configuration; accepted net mass M") + " | " + method +
    " | kg | each accepted machine | declared period | reporting facility | accepted net mass per machine | calibrated scale and acceptance record |";
  const calculationHeading = zh ? "### 计算规则" : "### Calculation Rules";
  assert.ok(markdown.includes("\n\n" + calculationHeading));
  return markdown.replace("\n\n" + calculationHeading, "\n" + protocol + "\n\n" + calculationHeading);
}

function syncProjection(directory) {
  const markdown = readFileSync(path.join(directory, "pcr.en-US.md"), "utf8");
  writeFileSync(path.join(directory, "structured.yaml"), structuredProjectionYaml(parsePcrMarkdownToStructured(markdown), { sourceMarkdown: markdown }));
}

function materialFixture(t, { workspace = "current" } = {}) {
  const root = mkdtempSync(path.join(tmpdir(), "pcr-check-cli-"));
  t.after(() => rmSync(root, { recursive: true, force: true }));
  const pcrDir = path.join(root, relativePcr);
  mkdirSync(pcrDir, { recursive: true });
  for (const name of canonicalFiles) cpSync(path.join(sourceFixture, name), path.join(pcrDir, name));
  const directory = workspace === "revision" ? path.join(pcrDir, "revision") : pcrDir;
  if (workspace === "revision") {
    mkdirSync(directory);
    for (const name of canonicalFiles) cpSync(path.join(pcrDir, name), path.join(directory, name));
    renameSync(path.join(directory, "manifest.yaml"), path.join(directory, "manifest.next.yaml"));
  }
  for (const language of ["en-US", "zh-CN"]) writeFileSync(path.join(directory, "pcr." + language + ".md"), positiveMarkdown(language));
  syncProjection(directory);
  return { root, pcrDir, directory, workspace };
}

// Include directories and symlink targets as well as exact bytes, so the command
// cannot silently create builder state/catalog files or mutate another workspace.
function snapshot(root) {
  return Object.fromEntries(readdirSync(root, { recursive: true }).sort().map((relative) => {
    const absolute = path.join(root, relative);
    const stat = lstatSync(absolute);
    return [relative, stat.isSymbolicLink() ? { symlink: readlinkSync(absolute) }
      : stat.isDirectory() ? { directory: true } : { bytes: readFileSync(absolute).toString("base64") }];
  }));
}

function inspectReadOnly(fixture, extraArgs = []) {
  const before = snapshot(fixture.root);
  const result = run(["--root", fixture.root, "--pcr", relativePcr, "--workspace", fixture.workspace, "--format", "json", ...extraArgs], fixture.root);
  assert.ifError(result.error);
  assert.deepEqual(snapshot(fixture.root), before, "target check must preserve every file and directory");
  return result;
}

function failure(result, code) {
  assert.equal(result.status, 1, result.stdout);
  assert.equal(result.stdout, "");
  const parsed = JSON.parse(result.stderr);
  assert.equal(parsed.ok, false);
  assert.equal(parsed.error.code, code, result.stderr);
  return parsed.error.details;
}

function replaceBoth(fixture, transform) {
  for (const language of ["en-US", "zh-CN"]) {
    const target = path.join(fixture.directory, "pcr." + language + ".md");
    writeFileSync(target, transform(readFileSync(target, "utf8"), language));
  }
  syncProjection(fixture.directory);
}

test("single PCR check has command-specific help", () => {
  const result = run(["--help"]);
  assert.equal(result.status, 0);
  assert.match(result.stdout, /--workspace/u);
  assert.match(result.stdout, /measurement|计量/iu);
});

test("JSON target-check failures keep stdout empty and return structured errors", () => {
  const result = run(["--pcr", "library/pcrs/missing/category/item", "--format", "json"]);
  assert.notEqual(result.status, 0);
  assert.equal(result.stdout, "");
  const parsed = JSON.parse(result.stderr);
  assert.equal(parsed.ok, false);
  assert.ok(parsed.error.code);
});

test("target-check rejects unsupported workspace and format", () => {
  for (const args of [["--workspace", "releases"], ["--format", "yaml"]]) {
    assert.notEqual(run(["--pcr", "library/pcrs/missing/category/item", ...args]).status, 0);
  }
});

test("current material four-file check passes without catalog or shared indexes and is read-only", (t) => {
  const fixture = materialFixture(t);
  assert.equal(existsSync(path.join(fixture.root, "library/catalog.yaml")), false);
  assert.equal(existsSync(path.join(fixture.root, "classifications")), false);
  const result = inspectReadOnly(fixture);
  assert.equal(result.status, 0, result.stderr);
  assert.equal(result.stderr, "");
  const parsed = JSON.parse(result.stdout);
  assert.equal(parsed.ok, true);
  assert.equal(parsed.workspace, "current");
  assert.equal(parsed.pcr_path, relativePcr);
  assert.deepEqual(parsed.problems, []);
  assert.equal(parsed.measurement.status, "pass");
  assert.equal(parsed.measurement.check_version, 1);
  assert.equal(parsed.measurement.coverage.complete, true);
  assert.ok(parsed.measurement.coverage.counts.inventory_rows > 40);
});

test("revision check uses its actual four-file snapshot without reading current content as the target", (t) => {
  const fixture = materialFixture(t, { workspace: "revision" });
  // Current retains the exact known-conflicting 44125 source; only revision was
  // adapted to M kg. This test exercises workspace selection, not publication.
  const current = failure(inspectReadOnly({ ...fixture, workspace: "current" }), "PCR_CHECK_FAILED");
  assert.equal(current.measurement.status, "error");
  const result = inspectReadOnly(fixture);
  assert.equal(result.status, 0, result.stderr);
  const parsed = JSON.parse(result.stdout);
  assert.equal(parsed.workspace, "revision");
  assert.equal(parsed.measurement.status, "pass");
  assert.deepEqual(parsed.problems, []);
});

test("stale generated projection fails even when measurement semantics pass", (t) => {
  const fixture = materialFixture(t);
  const markdownPath = path.join(fixture.directory, "pcr.en-US.md");
  writeFileSync(markdownPath, readFileSync(markdownPath, "utf8") + "\nAn additional dataset disclosure is required.\n");
  const details = failure(inspectReadOnly(fixture), "PCR_CHECK_FAILED");
  assert.equal(details.measurement.status, "pass");
  assert.ok(details.problems.some((problem) => problem.includes("stale structured projection")));
});

test("explicit measurement inconsistency fails with fresh structured projection", (t) => {
  const fixture = materialFixture(t);
  replaceBoth(fixture, (markdown) => markdown.replace(/\| (Reference amount|参考数量) \| M \|/u, "| $1 | 1 |"));
  const details = failure(inspectReadOnly(fixture), "PCR_CHECK_FAILED");
  assert.equal(details.measurement.status, "error");
  assert.ok(details.measurement.findings.some((finding) => finding.code === "MEASUREMENT_CONVERSION_MISSING"));
  assert.ok(details.problems.every((problem) => !problem.includes("stale structured projection")));
});

test("unsupported measurement basis fails as manual review with fresh projection", (t) => {
  const fixture = materialFixture(t);
  replaceBoth(fixture, (markdown) => markdown.replace(/^- (Normalization basis|归一化基准)[:：].*$/mu, "- Normalization basis: apply the context-dependent reporting convention"));
  const details = failure(inspectReadOnly(fixture), "PCR_MEASUREMENT_REVIEW_REQUIRED");
  assert.equal(details.measurement.status, "manual_review");
  assert.equal(details.measurement.coverage.complete, false);
  assert.ok(details.measurement.findings.some((finding) => finding.code === "MEASUREMENT_BASIS_UNSUPPORTED"));
  assert.ok(details.problems.every((problem) => !problem.includes("stale structured projection")));
});

test("unsafe symlinked canonical Markdown fails before inspecting managed input", (t) => {
  const fixture = materialFixture(t);
  const markdown = path.join(fixture.directory, "pcr.en-US.md");
  const outside = path.join(fixture.root, "outside-content.md");
  renameSync(markdown, outside);
  symlinkSync(outside, markdown);
  const details = failure(inspectReadOnly(fixture), "PCR_CHECK_FAILED");
  assert.equal(details.measurement, null);
  assert.ok(details.problems.some((problem) => /symbolic link|symlink/iu.test(problem)));
});

test("malformed managed UTF-8 fails without modifying the target or creating shared state", (t) => {
  const fixture = materialFixture(t);
  writeFileSync(path.join(fixture.directory, "pcr.zh-CN.md"), Buffer.from([0xc3, 0x28]));
  const details = failure(inspectReadOnly(fixture), "PCR_CHECK_FAILED");
  assert.equal(details.measurement, null);
  assert.ok(details.problems.some((problem) => /UTF-8/u.test(problem)));
});

test("stale projection takes precedence over pending measurement review", t => {
  const fixture = materialFixture(t);
  replaceBoth(fixture, markdown => markdown.replace(/^- (Normalization basis|归一化基准)[:：].*$/mu, "- Normalization basis: apply the context-dependent reporting convention"));
  const english = path.join(fixture.directory, "pcr.en-US.md");
  writeFileSync(english, readFileSync(english, "utf8") + "\nAdditional author disclosure.\n");
  const details = failure(inspectReadOnly(fixture), "PCR_CHECK_FAILED");
  assert.equal(details.measurement.status, "manual_review");
  assert.ok(details.problems.some(problem => problem.includes("stale structured projection")));
});
