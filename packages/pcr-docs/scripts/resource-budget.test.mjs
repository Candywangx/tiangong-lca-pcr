import test from "node:test";
import assert from "node:assert/strict";
import { measureProcessTree, assertBuildBudget } from "./resource-budget.mjs";
test("resource accounting includes descendants and works with native Windows statistics", () => {
  assert.equal(
    measureProcessTree({
      pid: 10,
      platform: "linux",
      run: () => "10 1 100\n11 10 200\n12 11 300\n13 1 999",
    }),
    600 * 1024,
  );
  assert.equal(
    measureProcessTree({
      pid: 10,
      platform: "win32",
      run: () =>
        JSON.stringify([
          { ProcessId: 10, ParentProcessId: 1, WorkingSetSize: "1024" },
          { ProcessId: 11, ParentProcessId: 10, WorkingSetSize: "2048" },
        ]),
    }),
    3072,
  );
});
test("missing measurements cannot become a zero-memory successful production build", () => {
  assert.throws(
    () =>
      measureProcessTree({ pid: 10, platform: "linux", run: () => "11 1 200" }),
    /incomplete/,
  );
  assert.throws(
    () =>
      measureProcessTree({
        run: () => {
          throw new Error("ps unavailable");
        },
      }),
    /unavailable/,
  );
  for (const metrics of [
    { peakResidentBytes: 0, memoryMeasurement: "unavailable" },
    { peakResidentBytes: 123, memoryMeasurement: "unavailable" },
    { peakResidentBytes: 6_000_000_001, memoryMeasurement: "process-tree-rss" },
  ])
    assert.throws(() => assertBuildBudget({ buildMs: 1, ...metrics }));
  assert.doesNotThrow(() =>
    assertBuildBudget({
      buildMs: 100,
      peakResidentBytes: 1000,
      memoryMeasurement: "process-tree-rss",
    }),
  );
});
