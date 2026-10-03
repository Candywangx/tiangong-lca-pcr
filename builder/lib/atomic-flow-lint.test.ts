import assert from "node:assert/strict";
import { cpSync, mkdtempSync, readFileSync, realpathSync, rmSync, writeFileSync } from "node:fs";
import { tmpdir } from "node:os";
import path from "node:path";
import test, { type TestContext } from "node:test";

import { parseYaml, renderYaml } from "../../packages/pcr-core/src/yaml-lite.ts";
import type { YamlObject, YamlValue } from "../../packages/pcr-core/src/yaml-lite.ts";

import { inspectPcrDirectory } from "./lint-rules.ts";
interface Inspection {problems: string[]; warnings: string[]}
function yamlObject(value: YamlValue | undefined): YamlObject {
  assert.ok(value !== null && value !== undefined && typeof value === "object" && !Array.isArray(value));
  return value;
}
function editManifest(filename: string, edit: (manifest: YamlObject) => void): void {
  const manifest = yamlObject(parseYaml(readFileSync(filename, "utf8")));
  edit(manifest);
  const rendered = renderYaml(manifest);
  assert.deepEqual(parseYaml(rendered), manifest, "fixture edits must produce complete valid YAML");
  writeFileSync(filename, rendered);
}

const repoRoot = path.resolve(".");
const sourcePcr = path.join(
  repoRoot,
  "library/pcrs/food-products-beverages-and-tobacco-textiles-apparel-and-leather-products",
  "meat-fish-fruits-vegetables-oils-and-fats",
  "octopus-frozen-smoked-dried-salted-or-in-brine",
);

function inspectWithFirstSelectedFlow(t: TestContext, selectedFlow: string, { enforce = true }: { enforce?: boolean } = {}): Inspection {
  const root = realpathSync(mkdtempSync(path.join(tmpdir(), "tiangong-pcr-atomic-flow-")));
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
  editManifest(manifestPath, (manifest) => {
    const review = yamlObject(manifest.review_metadata);
    if (enforce) {
      const contract = yamlObject(review.inventory_contract);
      contract.atomic_flows = "v1";
    } else {
      // Remove the complete contract, including localization fields. Deleting a
      // text prefix left an orphaned child and stopped the intended lint gate.
      delete review.inventory_contract;
    }
  });

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
  const root = realpathSync(mkdtempSync(path.join(tmpdir(), "tiangong-pcr-atomic-bilingual-")));
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
  const root = realpathSync(mkdtempSync(path.join(tmpdir(), "tiangong-pcr-flow-localization-")));
  t.after(() => rmSync(root, { recursive: true, force: true }));

  const pcrDir = path.join(root, "library/pcrs/food/seafood/example");
  cpSync(sourcePcr, pcrDir, { recursive: true });
  const englishPath = path.join(pcrDir, "pcr.en-US.md");
  const chinesePath = path.join(pcrDir, "pcr.zh-CN.md");
  const manifestPath = path.join(pcrDir, "manifest.yaml");
  editManifest(manifestPath, (manifest) => {
    const review = yamlObject(manifest.review_metadata);
    const contract = yamlObject(review.inventory_contract);
    contract.atomic_flows = "v1";
    contract.localized_flow_names = "tiangong_zh_v1";
  });
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
  const root = realpathSync(mkdtempSync(path.join(tmpdir(), "tiangong-pcr-flow-localization-legacy-")));
  t.after(() => rmSync(root, { recursive: true, force: true }));

  const pcrDir = path.join(root, "library/pcrs/food/seafood/example");
  cpSync(sourcePcr, pcrDir, { recursive: true });
  const englishPath = path.join(pcrDir, "pcr.en-US.md");
  const chinesePath = path.join(pcrDir, "pcr.zh-CN.md");
  const manifestPath = path.join(pcrDir, "manifest.yaml");
  editManifest(manifestPath, (manifest) => {
    const review = yamlObject(manifest.review_metadata);
    const contract = yamlObject(review.inventory_contract);
    delete contract.localized_flow_names;
  });
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
