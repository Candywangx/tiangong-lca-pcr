import assert from "node:assert/strict";
import test from "node:test";

import * as commands from "./commands.mjs";

test("resume harvests completed authors before a dispatch preflight fails closed", async () => {
  assert.equal(typeof commands.runAuthorCycle, "function");

  const calls = [];
  const infrastructureError = new Error("hybrid endpoint unavailable");
  infrastructureError.code = "GOAL_HYBRID_AUTHENTICATED_PREFLIGHT_FAILED";

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
