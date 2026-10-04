import assert from "node:assert/strict";
import test from "node:test";

import * as commands from "./commands.ts";

test("resume harvests completed authors before a dispatch preflight fails closed", async () => {
  assert.equal(typeof commands.runAuthorCycle, "function");

  const calls: string[] = [];
  const infrastructureError = Object.assign(new Error("hybrid endpoint unavailable"), { code: "GOAL_HYBRID_AUTHENTICATED_PREFLIGHT_FAILED" });

  await assert.rejects(
    commands.runAuthorCycle({
      resume: true,
      dryRun: false,
      async harvestAuthors() {
        calls.push("harvest");
        return { valid_results: [{ id: "cpc:3.0:41111" }], failures: [], snapshot: null };
      },
      async dispatchAuthors() {
        calls.push("dispatch-preflight");
        throw infrastructureError;
      },
    }),
    (error) => error === infrastructureError,
  );

  assert.deepEqual(calls, ["harvest", "dispatch-preflight"]);
});
