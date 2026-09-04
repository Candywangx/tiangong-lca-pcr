import assert from "node:assert/strict";
import { mkdirSync, mkdtempSync, rmSync, writeFileSync } from "node:fs";
import { tmpdir } from "node:os";
import path from "node:path";
import test from "node:test";

import { planGoal } from "./planner.mjs";

function fixture() {
  const root = mkdtempSync(path.join(tmpdir(), "tiangong-goal-plan-"));
  const target = path.join(root, "library/pcrs/metal-products-machinery-and-equipment");
  mkdirSync(path.join(root, "classifications/indexes"), { recursive: true });
  mkdirSync(path.join(target, "basic-metals/pig-iron"), { recursive: true });
  mkdirSync(path.join(target, "basic-metals/steel"), { recursive: true });
  writeFileSync(path.join(target, "basic-metals/pig-iron/manifest.yaml"), `schema_version: 1
id: pcr.metal-products-machinery-and-equipment.basic-metals.pig-iron
title:
  en-US: Pig iron
  zh-CN: 生铁
status: scaffold
content_maturity: empty_scaffold
classification_refs:
  - system: CPC
    version: "3.0"
    code: "41111"
    title: Pig iron
    mapping_type: exact
`);
  writeFileSync(path.join(target, "basic-metals/steel/manifest.yaml"), `schema_version: 1
id: pcr.metal-products-machinery-and-equipment.basic-metals.steel
title:
  en-US: Steel
  zh-CN: 钢
status: candidate
content_maturity: authored_methodology
classification_refs:
  - system: CPC
    version: "3.0"
    code: "41120"
    title: Steel
    mapping_type: exact
`);
  const entry = (code, label, coverage_status = "unmapped", mapping = null, section = "4", title = "Metal products, machinery and equipment") => ({
    code, label, path_codes: [section, code.slice(0, 2), code], path_titles: [title, "Basic metals", label], coverage_status, mapping, legacy_reference: null,
  });
  writeFileSync(path.join(root, "classifications/indexes/cpc-3.0-coverage.json"), `${JSON.stringify({
    schema_version: 1,
    classification: { system: "cpc", version: "3.0" },
    entries: [
      entry("41111", "Pig iron"),
      entry("41120", "Steel"),
      entry("41200", "Copper product"),
      entry("41999", "Mapped metal", "mapped", { pcr_id: "pcr.metal.mapped", mapping_type: "exact", acceptance: { status: "accepted" } }),
      entry("01111", "Wheat", "unmapped", null, "0", "Agriculture, forestry and fishery products"),
    ],
  }, null, 2)}\n`);
  return { root, target };
}

test("planner scopes all CPC leaves to the target category and classifies queue actions", () => {
  const { root, target } = fixture();
  try {
    const plan = planGoal({
      goal_id: "fixture",
      project_root: root,
      target_category_path: target,
      target_category_relative: "library/pcrs/metal-products-machinery-and-equipment",
      classification_system: "cpc",
      classification_version: "3.0",
      cpc_selector: { mode: "target_category", value: "all" },
      skip_cpc_list: [],
    });
    assert.equal(plan.scope.total_classification_leaves, 4);
    assert.deepEqual(plan.tasks.map((task) => task.cpc_code).sort(), ["41111", "41120", "41200", "41999"]);
    assert.equal(plan.tasks.find((task) => task.cpc_code === "41111").queue_action, "promote_legacy");
    assert.equal(plan.tasks.find((task) => task.cpc_code === "41111").state, "queued");
    assert.equal(plan.tasks.find((task) => task.cpc_code === "41120").queue_action, "map_existing");
    assert.equal(plan.tasks.find((task) => task.cpc_code === "41200").queue_action, "create_new");
    assert.equal(plan.tasks.find((task) => task.cpc_code === "41999").state, "completed");
    assert.deepEqual(plan.tasks.filter((task) => task.state === "queued").map((task) => task.cpc_code), ["41111", "41200"]);
  } finally {
    rmSync(root, { recursive: true, force: true });
  }
});

test("planner honors explicit selector and skip list without broadening scope", () => {
  const { root, target } = fixture();
  try {
    const plan = planGoal({
      goal_id: "fixture",
      project_root: root,
      target_category_path: target,
      target_category_relative: "library/pcrs/metal-products-machinery-and-equipment",
      classification_system: "cpc",
      classification_version: "3.0",
      cpc_selector: { mode: "target_category", value: ["41111", "41200", "01111"] },
      skip_cpc_list: ["41200"],
    });
    assert.deepEqual(plan.tasks.map((task) => task.cpc_code), ["41111"]);
    assert.deepEqual(plan.scope.skipped, ["41200"]);
    assert.deepEqual(plan.scope.outside_target_ignored, ["01111"]);
  } finally {
    rmSync(root, { recursive: true, force: true });
  }
});
