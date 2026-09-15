import assert from "node:assert/strict";
import test from "node:test";
import { mkdtempSync, writeFileSync, symlinkSync, rmSync } from "node:fs";
import { tmpdir } from "node:os";
import path from "node:path";
import { readTrialTurnUsage } from "./trial-usage.mjs";

const identity = { threadId: "thread", turnId: "target", worktreePath: "/tmp/author" };
const event = (payload) => ({ timestamp: "2026-09-11T00:00:00Z", type: "event_msg", payload });
const usage = (n) => ({ input_tokens: n * 10, cached_input_tokens: n * 5, output_tokens: n, total_tokens: n * 11 });
const token = (total, last = total) => event({ type: "token_count", info: { total_token_usage: usage(total), last_token_usage: usage(last) } });
const start = (id) => event({ type: "task_started", turn_id: id });
const end = (id) => event({ type: "task_complete", turn_id: id, last_agent_message: "PRIVATE MESSAGE" });
const context = { type: "turn_context", payload: { turn_id: "target", cwd: "/tmp/author", model: "gpt-5.6-terra", effort: "high" } };
const meta = { type: "session_meta", payload: { id: "thread", cwd: "/tmp/author" } };
function check(rows, callback) {
  const root = mkdtempSync(path.join(tmpdir(), "trial-usage-"));
  try {
    const file = path.join(root, "session.jsonl");
    writeFileSync(file, rows.map(JSON.stringify).join("\n") + "\n");
    callback({ ...identity, sessionPath: file, sessionsRoot: root });
  } finally { rmSync(root, { recursive: true, force: true }); }
}
test("measures completed turn, deduplicates cumulative snapshots and exposes metadata only", () => {
  check([meta, start("target"), context, token(2), token(2), token(5, 3), end("target")], (args) => {
    const result = readTrialTurnUsage(args);
    assert.equal(result.status, "available");
    assert.equal(result.tokens.input_tokens, 50);
    assert.equal(result.tokens.cached_input_tokens, 25);
    assert.equal(result.tokens.output_tokens, 5);
    assert.equal(result.duplicate_snapshots, 1);
    assert.equal(result.observed_model, "gpt-5.6-terra");
    assert.equal(result.observed_reasoning_effort, "high");
    assert.match(result.source_sha256, /^[a-f0-9]{64}$/);
    assert.ok(!JSON.stringify(result).includes("PRIVATE MESSAGE"));
  });
});
test("handles reset and continued counters across turns and reset inside a turn", () => {
  for (const [events, expected] of [[ [token(2), token(5, 3)], 50 ], [[token(12, 2), token(15, 3)], 50], [[token(2), token(3), token(5, 2)], 70]]) {
    check([meta, start("old"), token(10), end("old"), start("target"), context, ...events, end("target")], (args) => {
      assert.equal(readTrialTurnUsage(args).tokens.input_tokens, expected);
    });
  }
});
test("identity mismatch, missing tokens, incomplete and ambiguous turns are unavailable", () => {
  const valid = [meta, start("target"), context, token(2), end("target")];
  check(valid, (args) => {
    for (const changed of [{ threadId: "wrong" }, { turnId: "wrong" }, { worktreePath: "/wrong" }]) assert.equal(readTrialTurnUsage({ ...args, ...changed }).status, "unavailable");
  });
  for (const rows of [valid.slice(0, -1), [meta, start("target"), context, end("target")], [...valid, end("target")], [meta, start("target"), context, token(2), token(9, 3), end("target")], [meta, start("target"), context, token(2), start("other"), end("target")]]) {
    check(rows, (args) => { const r = readTrialTurnUsage(args); assert.equal(r.status, "unavailable"); assert.equal(r.tokens, null); assert.ok(r.reason); });
  }
});
test("missing, malformed, escaped and symlinked files are unavailable", () => {
  check([meta], (args) => {
    assert.equal(readTrialTurnUsage({ ...args, sessionPath: path.join(args.sessionsRoot, "absent.jsonl") }).status, "unavailable");
    assert.equal(readTrialTurnUsage({ ...args, sessionsRoot: path.join(args.sessionsRoot, "other") }).status, "unavailable");
    const link = path.join(args.sessionsRoot, "link.jsonl"); symlinkSync(args.sessionPath, link);
    assert.equal(readTrialTurnUsage({ ...args, sessionPath: link }).status, "unavailable");
    for (const bytes of ["{broken", Buffer.from([255])]) { writeFileSync(args.sessionPath, bytes); assert.equal(readTrialTurnUsage(args).status, "unavailable"); }
  });
});
test("rejects unproven baselines, model changes, invalid counters and conflicting context", () => {
  const malformed = token(2); malformed.payload.info.total_token_usage.cached_input_tokens = 999;
  const changes = [
    [token(5, 2)],
    [token(5), token(4, 1)],
    [malformed],
    [token(2), { ...context, payload: { ...context.payload, model: "gpt-5.6-sol" } }],
    [{ ...context, payload: { ...context.payload, cwd: "/wrong" } }, token(2)],
    [event({ type: "token_count", turn_id: "wrong", info: token(2).payload.info })],
  ];
  for (const events of changes) check([meta, start("target"), context, ...events, end("target")], (args) => {
    assert.equal(readTrialTurnUsage(args).status, "unavailable");
  });
});
