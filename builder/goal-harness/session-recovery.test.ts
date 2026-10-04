import assert from "node:assert/strict";
import test from "node:test";
import { record, array } from "./domain.ts";
import type { UnknownRecord } from "./domain.ts";
import { mkdtempSync, realpathSync, writeFileSync, symlinkSync, rmSync } from "node:fs";
import { tmpdir } from "node:os";
import path from "node:path";
import { recoverSessionTurn, readRecoveredSessionTurn } from "./session-recovery.ts";
import { CodexAppServerAdapter } from "./app-server.ts";

const options = { threadId: "thread-1", turnId: "turn-2", worktreePath: "/tmp/author" };
const event = (payload: UnknownRecord) => ({ type: "event_msg", payload });
function fixture(): {type:string;payload:UnknownRecord}[] {
  return [
    { type: "session_meta", payload: { id: "thread-1", cwd: "/tmp/author" } },
    event({ type: "task_started", turn_id: "turn-2" }),
    event({ type: "item_completed", thread_id: "thread-1", turn_id: "turn-2", item: {
      type: "AgentMessage", id: "message-1", phase: "final_answer", content: [{ type: "Text", text: '{"commit_sha":"abc"}' }],
    } }),
    event({ type: "task_complete", turn_id: "turn-2", last_agent_message: '{"commit_sha":"abc"}' }),
  ];
}
test("recovers only the exact completed turn with matching final message", () => {
  const turn = recoverSessionTurn(fixture(), options);
  assert.ok(turn);
  assert.equal(turn.id, "turn-2");
  assert.equal(turn.status, "completed");
  assert.equal(turn.items[0]?.text, '{"commit_sha":"abc"}');
});
test("session reads pin hashes and reject escaping paths, symlinks and malformed bytes", () => {
  const root = mkdtempSync(path.join(realpathSync(tmpdir()), "pcr-session-test-"));
  try {
    const file = path.join(root, "session.jsonl");
    writeFileSync(file, fixture().map(row=>JSON.stringify(row)).join("\n") + "\n");
    const args = { ...options, sessionsRoot: root, sessionPath: file };
    const recovered = readRecoveredSessionTurn(args); assert.ok(recovered);
    assert.match(recovered.audit.response_sha256, /^[a-f0-9]{64}$/);
    assert.throws(() => readRecoveredSessionTurn({ ...args, sessionsRoot: path.join(root, "other") }));
    symlinkSync(file, path.join(root, "link.jsonl"));
    assert.throws(() => readRecoveredSessionTurn({ ...args, sessionPath: path.join(root, "link.jsonl") }));
    writeFileSync(file, Buffer.from([0xff]));
    assert.throws(() => readRecoveredSessionTurn(args));
  } finally { rmSync(root, { recursive: true, force: true }); }
});
test("adapter recovers omitted completed turns only after the thread is idle", async () => {
  const root = mkdtempSync(path.join(realpathSync(tmpdir()), "pcr-session-adapter-"));
  try {
    const file = path.join(root, "session.jsonl");
    writeFileSync(file, fixture().map(row=>JSON.stringify(row)).join("\n") + "\n");
    const adapter = new CodexAppServerAdapter({ sessionsRoot: root });
    adapter.connect = async () => {};
    let status = "active";
    adapter.request = async () => ({ thread: { id: "thread-1", cwd: "/tmp/author", path: file, status: { type: status }, turns: [] } });
    const args = { threadId: "thread-1", expectedTurnId: "turn-2", worktreePath: "/tmp/author" };
    assert.equal(array(record((await adapter.readThread(args)).thread).turns).length, 0);
    status = "idle";
    const result = await adapter.readThread(args);
    assert.equal(record(array(record(result.thread).turns)[0]).id, "turn-2");
    assert.equal(record(result.session_recovery).turn_id, "turn-2");
  } finally { rmSync(root, { recursive: true, force: true }); }
});
test("incomplete or unrelated turns cannot produce a report", () => {
  assert.equal(recoverSessionTurn(fixture().slice(0, -1), options), null);
  assert.equal(recoverSessionTurn(fixture(), { ...options, turnId: "other" }), null);
});
test("session identity and worktree substitution fail closed", () => {
  for (const changed of [{ threadId: "other" }, { worktreePath: "/tmp/other" }]) {
    assert.throws(() => recoverSessionTurn(fixture(), { ...options, ...changed }));
  }
});
test("commentary, mismatched report, duplicate completion and later actions fail closed", () => {
  const commentary = fixture(); record(commentary[2]?.payload.item).phase = "commentary";
  const mismatch = fixture(); record(mismatch[3]?.payload).last_agent_message = "{}";
  const duplicate = fixture(); const completion=duplicate[3]; assert.ok(completion); duplicate.push(completion);
  const later = fixture(); later.push(event({ type: "item_completed", thread_id: "thread-1", turn_id: "turn-2", item: { type: "CommandExecution" } }));
  for (const rows of [commentary, mismatch, duplicate, later]) assert.throws(() => recoverSessionTurn(rows, options));
});
