import assert from "node:assert/strict";
import { mkdtempSync, rmSync } from "node:fs";
import { tmpdir } from "node:os";
import path from "node:path";
import test from "node:test";

import { GoalEventStore } from "./event-store.mjs";
import { assertAcceptedMappingDecision, integrateGoalSnapshot, mergeAcceptedMappings } from "./integration.mjs";

test("accepted mapping gate requires material identity, reviewed relation, and durable acceptance metadata", () => {
  const entry = {
    code: "41111",
    label: "Pig iron",
    pcr_id: "pcr.metal.pig-iron",
    mapping_type: "exact",
    confidence: "reviewed",
    acceptance: {
      status: "accepted",
      decided_by: "tiangong-lca-pcr-maintainers",
      decided_at_utc: "2026-09-02T00:00:00Z",
      decision_ref: "docs/adr/0080-accept-metal-goal.md",
    },
  };
  assert.equal(assertAcceptedMappingDecision(entry, { materialPcrIds: new Set([entry.pcr_id]) }), true);
  assert.throws(
    () => assertAcceptedMappingDecision({ ...entry, mapping_type: "manual_review" }, { materialPcrIds: new Set([entry.pcr_id]) }),
    (error) => error.code === "GOAL_MAPPING_DECISION_INVALID",
  );
  assert.throws(
    () => assertAcceptedMappingDecision(entry, { materialPcrIds: new Set() }),
    (error) => error.code === "GOAL_MAPPING_TARGET_NOT_MATERIAL",
  );
});

test("mapping merge is sorted, idempotent, and refuses a competing positive edge", () => {
  const document = { schema_version: 2, classification_system: "CPC", classification_version: "3.0", status: "current", mappings: [] };
  const entry = {
    code: "41111", label: "Pig iron", pcr_id: "pcr.metal.pig-iron", mapping_type: "exact", confidence: "reviewed",
    acceptance: { status: "accepted", decided_by: "maintainer", decided_at_utc: "2026-09-02T00:00:00Z", decision_ref: "docs/adr/0080.md" },
  };
  const first = mergeAcceptedMappings(document, [entry], { materialPcrIds: new Set([entry.pcr_id]) });
  const second = mergeAcceptedMappings(first, [entry], { materialPcrIds: new Set([entry.pcr_id]) });
  assert.deepEqual(second, first);
  assert.throws(
    () => mergeAcceptedMappings(first, [{ ...entry, pcr_id: "pcr.metal.other" }], { materialPcrIds: new Set(["pcr.metal.other"]) }),
    (error) => error.code === "GOAL_MAPPING_EDGE_CONFLICT",
  );
});

test("integration dry-run exposes the serial Builder and consumer checks without mutation", () => {
  const root = mkdtempSync(path.join(tmpdir(), "tiangong-integration-plan-"));
  const stateDir = path.join(root, "state");
  try {
    const tasks = Array.from({ length: 6 }, (_, index) => ({
      id: `task-${index}`, cpc_code: `4111${index}`, pcr_id: `pcr.metal.${index}`, pcr_path: `library/pcrs/metal/${index}`,
      author_commit: `${index}`.repeat(40), state: "integration_pending",
    }));
    const snapshot = { id: "snapshot-fixture", goal_id: "fixture", task_ids: tasks.map((task) => task.id), author_commits: tasks.map((task) => task.author_commit), state: "integration_pending" };
    new GoalEventStore({ stateDir }).initialize({ goal_id: "fixture", baseline: { commit: "a".repeat(40) }, tasks, snapshots: [snapshot] });
    const config = {
      goal_id: "fixture", project_root: root, target_category_relative: "library/pcrs/metal", classification_system: "cpc", classification_version: "3.0",
      integration_batch_size: 6, integration: { decided_by: "maintainer" },
    };
    const result = integrateGoalSnapshot({ config, stateDir, dryRun: true });
    assert.equal(result.status, "dry_run");
    assert.deepEqual(result.commands.map((command) => command.name), ["aliases_build", "aliases_check", "catalog_build", "catalog_check", "viewer_build", "validate", "smoke_list", "smoke_resolve", "smoke_guidance"]);
    assert.equal(new GoalEventStore({ stateDir }).rebuild().snapshots[0].state, "integration_pending");
  } finally {
    rmSync(root, { recursive: true, force: true });
  }
});
