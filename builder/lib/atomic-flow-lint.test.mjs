import assert from "node:assert/strict";
import { cpSync, mkdtempSync, readFileSync, rmSync, writeFileSync } from "node:fs";
import { tmpdir } from "node:os";
import path from "node:path";
import test from "node:test";

import { inspectPcrDirectory } from "./lint-rules.mjs";

const repoRoot = path.resolve(".");
const sourcePcr = path.join(
  repoRoot,
  "library/pcrs/food-products-beverages-and-tobacco-textiles-apparel-and-leather-products",
  "meat-fish-fruits-vegetables-oils-and-fats",
  "octopus-frozen-smoked-dried-salted-or-in-brine",
);

function inspectWithFirstSelectedFlow(t, selectedFlow, { enforce = true } = {}) {
  const root = mkdtempSync(path.join(tmpdir(), "tiangong-pcr-atomic-flow-"));
  t.after(() => rmSync(root, { recursive: true, force: true }));

  const pcrDir = path.join(root, "library/pcrs/food/seafood/example");
  cpSync(sourcePcr, pcrDir, { recursive: true });

  const markdownPath = path.join(pcrDir, "pcr.en-US.md");
  const markdown = readFileSync(markdownPath, "utf8").replace(
    /^- Selected flow: .*$/mu,
    `- Selected flow: ${selectedFlow}`,
  );
  writeFileSync(markdownPath, markdown);

  const manifestPath = path.join(pcrDir, "manifest.yaml");
  let manifest = readFileSync(manifestPath, "utf8").replace(
    /  inventory_contract:\n    atomic_flows: v1\n/u,
    "",
  );
  if (enforce) {
    manifest = manifest.replace(
      "review_metadata:\n",
      "review_metadata:\n  inventory_contract:\n    atomic_flows: v1\n",
    );
  }
  writeFileSync(manifestPath, manifest);

  return inspectPcrDirectory({ root, pcrDir });
}

test("legacy material PCR reports collection flows as migration warnings without blocking lint", (t) => {
  const selectedFlow = "Route-specific energy carriers";
  const result = inspectWithFirstSelectedFlow(t, selectedFlow, { enforce: false });

  assert.ok(
    result.problems.every(
      (problem) =>
        !problem.includes(
          `Selected flow "${selectedFlow}" is a collection label, not one atomic inventory flow`,
        ),
    ),
    result.problems.join("\n"),
  );
  assert.ok(
    result.warnings.some((warning) =>
      warning.includes("legacy atomic-flow migration") && warning.includes("collection-label inventory rows"),
    ),
    result.warnings.join("\n"),
  );
});

test("atomic-flow PCR rejects a Chinese inventory row that does not match canonical English", (t) => {
  const root = mkdtempSync(path.join(tmpdir(), "tiangong-pcr-atomic-bilingual-"));
  t.after(() => rmSync(root, { recursive: true, force: true }));

  const pcrDir = path.join(root, "library/pcrs/food/seafood/example");
  cpSync(sourcePcr, pcrDir, { recursive: true });
  const chinesePath = path.join(pcrDir, "pcr.zh-CN.md");
  writeFileSync(
    chinesePath,
    readFileSync(chinesePath, "utf8").replace(
      "（`received_octopus`）",
      "（`received_octopus_zh_only`）",
    ),
  );

  const result = inspectPcrDirectory({ root, pcrDir });
  assert.ok(
    result.problems.some((problem) =>
      problem.includes("inventory ordered row identities do not match canonical English"),
    ),
    result.problems.join("\n"),
  );
});

test("atomic-flow PCR rejects an untranslated English selected-flow display in Chinese", (t) => {
  const root = mkdtempSync(path.join(tmpdir(), "tiangong-pcr-flow-localization-"));
  t.after(() => rmSync(root, { recursive: true, force: true }));

  const pcrDir = path.join(root, "library/pcrs/food/seafood/example");
  cpSync(sourcePcr, pcrDir, { recursive: true });
  const englishPath = path.join(pcrDir, "pcr.en-US.md");
  const chinesePath = path.join(pcrDir, "pcr.zh-CN.md");
  const manifestPath = path.join(pcrDir, "manifest.yaml");
  writeFileSync(
    manifestPath,
    readFileSync(manifestPath, "utf8").replace(
      "  inventory_contract:\n    atomic_flows: v1\n",
      "  inventory_contract:\n    atomic_flows: v1\n    localized_flow_names: tiangong_zh_v1\n",
    ),
  );
  const untranslatedName = "Electricity, medium voltage";
  writeFileSync(
    englishPath,
    readFileSync(englishPath, "utf8").replace(
      /^- Selected flow: .*$/mu,
      `- Selected flow: ${untranslatedName}`,
    ),
  );
  writeFileSync(
    chinesePath,
    readFileSync(chinesePath, "utf8").replace(
      /^- 选定流：.*$/mu,
      `- 选定流：${untranslatedName}`,
    ),
  );

  const result = inspectPcrDirectory({ root, pcrDir });
  assert.ok(
    result.problems.some((problem) =>
      problem.includes(`Selected flow "${untranslatedName}" is not localized for Chinese readers`),
    ),
    result.problems.join("\n"),
  );
});

test("PCR without the localization contract reports one migration warning instead of blocking", (t) => {
  const root = mkdtempSync(path.join(tmpdir(), "tiangong-pcr-flow-localization-legacy-"));
  t.after(() => rmSync(root, { recursive: true, force: true }));

  const pcrDir = path.join(root, "library/pcrs/food/seafood/example");
  cpSync(sourcePcr, pcrDir, { recursive: true });
  const englishPath = path.join(pcrDir, "pcr.en-US.md");
  const chinesePath = path.join(pcrDir, "pcr.zh-CN.md");
  const manifestPath = path.join(pcrDir, "manifest.yaml");
  writeFileSync(
    manifestPath,
    readFileSync(manifestPath, "utf8").replace(
      "    localized_flow_names: tiangong_zh_v1\n",
      "",
    ),
  );
  const untranslatedName = "Electricity, medium voltage";
  writeFileSync(
    englishPath,
    readFileSync(englishPath, "utf8").replace(
      /^- Selected flow: .*$/mu,
      `- Selected flow: ${untranslatedName}`,
    ),
  );
  writeFileSync(
    chinesePath,
    readFileSync(chinesePath, "utf8").replace(
      /^- 选定流：.*$/mu,
      `- 选定流：${untranslatedName}`,
    ),
  );

  const result = inspectPcrDirectory({ root, pcrDir });
  assert.ok(
    result.problems.every((problem) => !problem.includes("is not localized for Chinese readers")),
    result.problems.join("\n"),
  );
  assert.equal(
    result.warnings.filter((warning) => warning.includes("Chinese-flow localization migration")).length,
    1,
    result.warnings.join("\n"),
  );
});

for (const selectedFlow of [
  "Route-specific energy carriers",
  "Electricity, steam, natural gas, or diesel",
  "Packaging materials by material and component",
  "Spent brine, wastewater, and route rejects",
  "Actual Tiangong utility product flows matching supply",
  "Material-specific packaging product flow",
  "Packaging waste, material-specific",
  "Substance- and compartment-specific elementary flow",
  "Refrigerant substance, chemical-specific emission to air",
  "Select the specific waste flow for each destination",
  "Exact Tiangong product flow pending review",
  "Purchased electricity and fuels by actual carrier and supplier geography",
  "路线特定能源载体",
  "电力、蒸汽、天然气或柴油",
  "按材料选择的包装产品流",
  "物质和隔室特定基本流",
  "为每个去向选择具体废物流",
]) {
  test(`material PCR lint rejects collection Selected flow: ${selectedFlow}`, (t) => {
    const result = inspectWithFirstSelectedFlow(t, selectedFlow);

    assert.ok(
      result.problems.some((problem) =>
        problem.includes(
          `Selected flow "${selectedFlow}" is a collection label, not one atomic inventory flow`,
        ),
      ),
      result.problems.join("\n"),
    );
  });
}

for (const selectedFlow of [
  "Electricity, medium voltage",
  "Steam, 1 MPa",
  "Natural gas",
  "Natural gas for on-site cooking heat",
  "Diesel fuel",
  "heat, steam",
  "Heat from steam, industrial boiler",
  "Sodium chloride",
  "Fish-processing wastewater",
]) {
  test(`material PCR lint accepts atomic Selected flow: ${selectedFlow}`, (t) => {
    const result = inspectWithFirstSelectedFlow(t, selectedFlow);

    assert.ok(
      result.problems.every(
        (problem) =>
          !problem.includes(
            `Selected flow "${selectedFlow}" is a collection label, not one atomic inventory flow`,
          ),
      ),
      result.problems.join("\n"),
    );
  });
}
