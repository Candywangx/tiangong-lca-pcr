import assert from "node:assert/strict";
import { execFileSync, spawnSync } from "node:child_process";
import { existsSync, mkdirSync, mkdtempSync, readFileSync, rmSync, writeFileSync } from "node:fs";
import { tmpdir } from "node:os";
import path from "node:path";
import test from "node:test";

const cliPath = path.resolve("builder/cli/goal.mjs");

function git(root, args) {
  return execFileSync("git", args, { cwd: root, encoding: "utf8", stdio: ["ignore", "pipe", "pipe"] }).trim();
}

function fixture() {
  const root = mkdtempSync(path.join(tmpdir(), "tiangong-goal-cli-"));
  git(root, ["init", "-q"]);
  git(root, ["config", "user.name", "Goal Test"]);
  git(root, ["config", "user.email", "goal@example.invalid"]);
  mkdirSync(path.join(root, "library/pcrs/metal-products-machinery-and-equipment/basic-metals/pig-iron"), { recursive: true });
  mkdirSync(path.join(root, "classifications/indexes"), { recursive: true });
  writeFileSync(path.join(root, ".gitignore"), "library/.pcr-builder-state/\n.worktrees/\n.env\n");
  writeFileSync(path.join(root, "policy.txt"), "Goal policy\n");
  writeFileSync(path.join(root, "library/pcrs/metal-products-machinery-and-equipment/basic-metals/pig-iron/manifest.yaml"), `schema_version: 1
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
`);
  writeFileSync(path.join(root, "classifications/indexes/cpc-3.0-coverage.json"), `${JSON.stringify({
    schema_version: 1,
    classification_system: "cpc",
    classification_version: "3.0",
    entries: [{ code: "41111", label: "Pig iron", path_codes: ["4", "41", "41111"], path_titles: ["Metal products, machinery and equipment", "Basic metals", "Pig iron"], coverage_status: "unmapped", mapping: null, legacy_reference: null }],
  }, null, 2)}\n`);
  const configPath = path.join(root, "goal.yaml");
  writeFileSync(configPath, `schema_version: 1
goal_id: cli-fixture
project_root: ${root}
target_category_path: ${root}/library/pcrs/metal-products-machinery-and-equipment
classification_system: cpc
classification_version: "3.0"
cpc_selector:
  mode: target_category
  value: all
policy_prompt_path: ${root}/policy.txt
artifact_store: ${root}/viewer-artifacts
baseline:
  tracked_roots:
    - library
    - classifications
  untracked_allowlist: []
`);
  git(root, ["add", "."]);
  git(root, ["commit", "-qm", "fixture"]);
  return { root, configPath };
}

function run(args, cwd) {
  return execFileSync(process.execPath, [cliPath, ...args], { cwd, encoding: "utf8", stdio: ["ignore", "pipe", "pipe"] });
}

test("plan dry-run reports bounded scope and baseline preview without persistent mutation", () => {
  const { root, configPath } = fixture();
  try {
    const result = JSON.parse(run(["plan", "--config", configPath, "--dry-run", "--format", "json"], root));
    assert.equal(result.ok, true);
    assert.equal(result.command, "plan");
    assert.equal(result.dry_run, true);
    assert.equal(result.result.plan.scope.total_classification_leaves, 1);
    assert.equal(result.result.plan.summary.promote_legacy, 1);
    assert.equal(result.result.baseline.commit, null);
    assert.equal(existsSync(path.join(root, "library/.pcr-builder-state/goals/cli-fixture")), false);
    assert.throws(() => git(root, ["show-ref", "--verify", "refs/tiangong-goals/cli-fixture/baseline"]));
  } finally {
    rmSync(root, { recursive: true, force: true });
  }
});

test("plan persists state once, resume-safe status reads it, and stop preserves worktrees", () => {
  const { root, configPath } = fixture();
  try {
    const first = JSON.parse(run(["plan", "--config", configPath, "--format", "json"], root));
    const second = JSON.parse(run(["plan", "--config", configPath, "--format", "json"], root));
    assert.equal(first.result.baseline.commit, second.result.baseline.commit);
    const worktreeMarker = path.join(root, ".worktrees/goals/cli-fixture/keep.txt");
    mkdirSync(path.dirname(worktreeMarker), { recursive: true });
    writeFileSync(worktreeMarker, "keep\n");
    const stopped = JSON.parse(run(["stop", "--config", configPath, "--format", "json"], root));
    assert.equal(stopped.result.state.stopped, true);
    assert.equal(readFileSync(worktreeMarker, "utf8"), "keep\n");
    const status = JSON.parse(run(["status", "--config", configPath, "--format", "json"], root));
    assert.equal(status.result.state.goal_id, "cli-fixture");
    assert.equal(status.result.state.tasks.length, 1);
    const uuidAudit = JSON.parse(run(["uuid-audit", "--config", configPath, "--format", "json"], root));
    assert.equal(uuidAudit.result.applied, false);
    assert.deepEqual(uuidAudit.result.affected, []);
  } finally {
    rmSync(root, { recursive: true, force: true });
  }
});

test("CLI provides help and stable JSON failures with clean stdout", () => {
  const help = run(["--help"], path.resolve("."));
  assert.match(help, /goal\.mjs doctor|goal:doctor/u);
  assert.match(help, /uuid-audit/u);
  assert.match(run(["viewer-publish", "--help"], path.resolve(".")), /viewer-publish --config/u);
  assert.match(run(["viewer-recover", "--help"], path.resolve(".")), /viewer-recover --config.*force-stale-lock/u);
  const failure = spawnSync(process.execPath, [cliPath, "unknown", "--format", "json"], { encoding: "utf8" });
  assert.notEqual(failure.status, 0);
  assert.equal(failure.stdout, "");
  const error = JSON.parse(failure.stderr);
  assert.equal(error.ok, false);
  assert.equal(error.error.code, "GOAL_COMMAND_UNKNOWN");
  assert.equal(typeof error.next_action, "string");
});

test("Viewer publication and recovery commands use the configured durable store", () => {
  const { root, configPath } = fixture();
  try {
    const published = JSON.parse(run(["viewer-publish", "--config", configPath, "--format", "json"], root));
    assert.equal(published.result.status, "up_to_date");
    const recovered = JSON.parse(run(["viewer-recover", "--config", configPath, "--force-stale-lock", "--format", "json"], root));
    assert.equal(recovered.result.status, "clean");
    const packageDocument = JSON.parse(readFileSync(path.resolve("package.json"), "utf8"));
    assert.equal(packageDocument.scripts["goal:viewer-publish"], "node builder/cli/goal.mjs viewer-publish");
    assert.equal(packageDocument.scripts["goal:viewer-recover"], "node builder/cli/goal.mjs viewer-recover");
  } finally {
    rmSync(root, { recursive: true, force: true });
  }
});

test("resume human output is a bounded summary and does not serialize the full Goal state", async () => {
  const module = await import("./goal.mjs");
  assert.equal(typeof module.renderHuman, "function");
  const output = module.renderHuman({
    command: "resume",
    dry_run: false,
    next_action: "Run goal:status",
    result: {
      dispatched: [{ cpc_code: "46910", state: "authoring" }],
      harvest: {
        valid_results: [{ cpc_code: "46532" }],
        failures: [],
        snapshot: null,
      },
      state: { deliberately_large_projection: "x".repeat(100_000) },
    },
  });

  assert.match(output, /Goal resume/u);
  assert.match(output, /1 valid/u);
  assert.match(output, /1 dispatched/u);
  assert.match(output, /46532/u);
  assert.match(output, /46910/u);
  assert.doesNotMatch(output, /deliberately_large_projection/u);
  assert.ok(Buffer.byteLength(output) < 2_000, `expected bounded output, received ${Buffer.byteLength(output)} bytes`);
});

test("integrate and land human output summarize durable results without serializing audit payloads", async () => {
  const { renderHuman } = await import("./goal.mjs");
  const largeAudit = { deliberately_large_audit: "x".repeat(100_000) };
  const integrated = renderHuman({
    command: "integrate",
    dry_run: false,
    next_action: "Run goal:land",
    result: {
      snapshot: {
        id: "snapshot-example",
        state: "validated",
        integration_commit: "a".repeat(40),
        command_results: [{ name: "validate", exit_code: 0 }],
        validation_result: largeAudit,
      },
    },
  });
  const landed = renderHuman({
    command: "land",
    dry_run: false,
    next_action: "Run goal:resume",
    result: {
      status: "landed",
      snapshot: { id: "snapshot-example", integration_commit: "a".repeat(40), validation_result: largeAudit },
      path_fingerprints: Object.fromEntries(Array.from({ length: 500 }, (_, index) => [`file-${index}`, largeAudit])),
    },
  });

  assert.match(integrated, /snapshot-example/u);
  assert.match(integrated, /validated/u);
  assert.match(landed, /snapshot-example/u);
  assert.match(landed, /landed/u);
  assert.doesNotMatch(`${integrated}${landed}`, /deliberately_large_audit/u);
  assert.ok(Buffer.byteLength(integrated) < 2_000);
  assert.ok(Buffer.byteLength(landed) < 2_000);
});
