#!/usr/bin/env node
import { createHash } from "node:crypto";
import { readFileSync } from "node:fs";
import path from "node:path";
import { loadGoalConfig } from "../goal-harness/config.mjs";
import { GoalEventStore } from "../goal-harness/event-store.mjs";
import { withGoalLockAsync } from "../goal-harness/lock.mjs";
import { trialAssignmentEvent, trialControlFingerprints, summarizeTrial } from "../goal-harness/model-trial.mjs";
import { doctorCommand } from "../goal-harness/commands.mjs";

const args = process.argv.slice(2);
const command = args.shift();
const option = name => args[args.indexOf(name) + 1];
if (!command || args.includes("--help")) {
  console.log("Usage: node builder/cli/goal-model-trial.mjs register --config <yaml> --plan <json> [--dry-run]\n       node builder/cli/goal-model-trial.mjs report --config <yaml> --trial <id>\nRegistration runs authenticated doctor and never dispatches/interupts authors. JSON output; errors use stable codes. Resume with the existing Goal entry.");
} else {
  try {
    if (!args.includes("--config") || !["register", "report"].includes(command)) throw Object.assign(new Error("Explicit config and register/report command required."), { code: "GOAL_TRIAL_ARGUMENT_INVALID" });
    const configPath = path.resolve(option("--config"));
    const config = loadGoalConfig({ configPath });
    const stateDir = path.join(config.project_root, "library/.pcr-builder-state/goals", config.goal_id);
    let doctor = null;
    if (command === "register") {
      doctor = await doctorCommand({ configPath });
      if (!doctor.ok) throw Object.assign(new Error("Authenticated preflight failed; trial not registered. Run goal doctor for redacted diagnostics."), { code: "GOAL_TRIAL_PREFLIGHT_FAILED" });
    }
    const result = await withGoalLockAsync(stateDir, "model-trial", async () => {
      const store = new GoalEventStore({ stateDir }); const state = store.rebuild();
      if (command === "report") return summarizeTrial(state, option("--trial"));
      if (!args.includes("--plan")) throw Object.assign(new Error("--plan is required."), { code: "GOAL_TRIAL_ARGUMENT_INVALID" });
      const plan = JSON.parse(readFileSync(path.resolve(option("--plan")), "utf8"));
      const registered = state.model_trials?.find(t => t.id === plan.trial_id);
      const planSha = createHash("sha256").update(JSON.stringify(plan)).digest("hex");
      if (registered) {
        if (registered.controls.plan_sha256 !== planSha) throw Object.assign(new Error("Registered trial plan is immutable."), { code: "GOAL_MODEL_TRIAL_IMMUTABLE" });
        return { registered: true, idempotent: true, trial: registered };
      }
      const assignments = plan.assignments.map(a => ({ ...a, task_id: state.tasks.find(t => t.cpc_code === a.cpc_code)?.id }));
      const controls = { ...trialControlFingerprints(config), plan_sha256: planSha,
        cache_sha256: createHash("sha256").update(JSON.stringify(state.verified_common_uuids ?? [])).digest("hex"),
        cache_fingerprint_scope: "verified_common_uuids_projection; per-turn injected evidence separately fingerprinted",
        doctor: { ok: true, checked_at: new Date().toISOString(), passed: doctor.checks.filter(c => c.ok).length } };
      const event = trialAssignmentEvent({ state, trialId: plan.trial_id, assignments, controls });
      if (!args.includes("--dry-run")) store.append(event);
      return { registered: !args.includes("--dry-run"), dry_run: args.includes("--dry-run"), trial: event.payload.trial,
        active_authors_preserved: state.tasks.filter(t => ["authoring", "authoring_repair"].includes(t.state)).length,
        next_action: "Use the existing goal resume entry; trial assignments use natural capacity and unchanged six-result integration." };
    });
    console.log(JSON.stringify({ ok: true, result }, null, 2));
  } catch (error) {
    // Deliberately never serialize arbitrary exception details or child-process stdout/stderr.
    console.error(JSON.stringify({ ok: false, code: error.code ?? "GOAL_TRIAL_FAILED", next_action: "Inspect trial plan and run redacted goal doctor; no author was dispatched by this command." }));
    process.exitCode = 1;
  }
}
