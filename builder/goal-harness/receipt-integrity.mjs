import { existsSync } from "node:fs";
import path from "node:path";
import { GoalEventStore } from "./event-store.mjs";
import { GoalHarnessError } from "./errors.mjs";
import { withGoalLock } from "./lock.mjs";
import {
  readArtifact,
  artifactSha256,
  stableArtifactJson,
  writeArtifactExclusive,
} from "./artifact-io.mjs";

export function receiptRequiresSeal(task) {
  return task?.authoring_contract_version === 2;
}
const keyFor = (task, receiptId) =>
  `uuid-finalized-${artifactSha256(`${task.id}\0${receiptId}`).slice(7)}`;

export function sealReceipt({
  stateDir,
  task,
  receiptId,
  paths,
  document,
  requested,
  faultInjector = () => {},
}) {
  return withGoalLock(stateDir, "finalize-uuid-evidence", () => {
    const store = new GoalEventStore({ stateDir });
    const current = store.rebuild().tasks.find((t) => t.id === task.id);
    if (
      !current ||
      current.attempt !== task.attempt ||
      current.turn_id !== task.turn_id ||
      current.authoring_contract_version !== 2
    )
      fail("MISMATCH", "Task binding changed before finalization.");
    const searchBytes = readArtifact(paths.search, {
      root: stateDir,
      maxBytes: 64 * 1024 * 1024,
    });
    const search = JSON.parse(searchBytes);
    const raw = readArtifact(paths.result, {
      root: stateDir,
      maxBytes: 64 * 1024 * 1024,
    });
    if (
      search.receipt_id !== receiptId ||
      search.goal_id !== store.rebuild().goal_id ||
      search.task_id !== task.id ||
      search.cpc_code !== task.cpc_code ||
      search.attempt !== task.attempt
    )
      fail(
        "MISMATCH",
        "Search identity, task, goal, CPC or attempt differs from the finalization request.",
      );
    if (
      search.result_sha256 !== artifactSha256(raw) ||
      search.result_byte_length !== raw.length
    )
      fail("MISMATCH", "Raw result differs from captured hash or byte length.");
    const result = JSON.parse(raw),
      rows = Array.isArray(result?.data)
        ? result.data
        : Array.isArray(result)
        ? result
        : [];
    const ids = [
      ...new Set(
        rows.flatMap((row) => {
          const id = [row?.id, row?.uuid, row?.flow_id].find(
            (v) =>
              typeof v === "string" &&
              /^[a-f0-9]{8}-[a-f0-9]{4}-[1-8][a-f0-9]{3}-[89ab][a-f0-9]{3}-[a-f0-9]{12}$/i.test(
                v,
              ),
          );
          return id ? [id.toLowerCase()] : [];
        }),
      ),
    ];
    if (stableArtifactJson(ids) !== stableArtifactJson(search.candidate_uuids))
      fail("MISMATCH", "Candidate projection differs from captured results.");
    const directBytes = {};
    if (
      document.receipt_id !== receiptId ||
      document.goal_id !== search.goal_id ||
      document.task_id !== search.task_id ||
      stableArtifactJson(
        [...document.candidate_decisions.map((d) => d.uuid)].sort(),
      ) !== stableArtifactJson([...ids].sort())
    )
      fail(
        "MISMATCH",
        "Finalization document identity or candidates differ from the validated search snapshot.",
      );
    for (const d of document.candidate_decisions) {
      const name = `${receiptId}.${d.uuid}.direct.json`;
      directBytes[name] = readArtifact(path.join(paths.directory, name), {
        root: stateDir,
      });
      const direct = JSON.parse(directBytes[name]);
      if (
        direct.receipt_id !== receiptId ||
        direct.task_id !== task.id ||
        stableArtifactJson(direct) !== stableArtifactJson(d.direct_read)
      )
        fail(
          "MISMATCH",
          "Direct-read binding differs from the finalized decision.",
        );
    }
    const eventId = keyFor(task, receiptId);
    const prior = store.readEvents().find((e) => e.event_id === eventId);
    if (prior) {
      const original = JSON.parse(prior.payload.decisions_text);
      const priorDecisions = original.candidate_decisions.map(
        ({ direct_read: _, ...d }) => d,
      );
      if (stableArtifactJson(priorDecisions) !== stableArtifactJson(requested))
        throw new GoalHarnessError(
          "GOAL_HYBRID_SEARCH_DECISIONS_CONFLICT",
          "Receipt is finalized with different decisions.",
        );
      verifyFiles({
        stateDir,
        attestation: prior.payload,
        omitDecisions: !existsSync(paths.decisions),
      });
      if (!existsSync(paths.decisions))
        writeArtifactExclusive(paths.decisions, prior.payload.decisions_text);
      verifyFiles({ stateDir, attestation: prior.payload });
      return original;
    }
    if (existsSync(paths.decisions))
      fail(
        "MISSING",
        "Existing decisions have no original finalization attestation; recapture evidence under a new receipt.",
      );
    const text = `${JSON.stringify(document, null, 2)}\n`;
    const files = Object.fromEntries(
      Object.entries({
        [path.basename(paths.search)]: searchBytes,
        [path.basename(paths.result)]: raw,
        ...directBytes,
      }).map(([name, bytes]) => [name, artifactSha256(bytes)]),
    );
    files[path.basename(paths.decisions)] = artifactSha256(text);
    const payload = {
      schema_version: 1,
      goal_id: document.goal_id,
      task_id: task.id,
      attempt: task.attempt,
      turn_id: task.turn_id,
      receipt_id: receiptId,
      directory: path.relative(stateDir, paths.directory),
      files,
      decisions_text: text,
    };
    verifyFiles({ stateDir, attestation: payload, omitDecisions: true });
    store.append({
      event_id: eventId,
      type: "uuid_receipt_finalized",
      payload,
    });
    faultInjector("after_attestation");
    writeArtifactExclusive(paths.decisions, text);
    return document;
  });
}

export function verifyReceiptSeal({ stateDir, task, receiptId, paths }) {
  const events = new GoalEventStore({ stateDir }).readEvents();
  const matches = events.filter(
    (e) =>
      e.type === "uuid_receipt_finalized" && e.payload.receipt_id === receiptId,
  );
  if (matches.length !== 1)
    fail(
      "MISSING",
      "No unique original finalization attestation exists for this receipt.",
    );
  const a = matches[0].payload;
  if (a.task_id !== task?.id && !paths.allowGoalCacheReuse)
    fail("MISMATCH", "Attestation belongs to another task.");
  if (path.resolve(stateDir, a.directory) !== path.resolve(paths.directory))
    fail("MISMATCH", "Attestation directory differs from the receipt locator.");
  const snapshots = verifyFiles({ stateDir, attestation: a });
  const search = JSON.parse(snapshots[path.basename(paths.search)]);
  const decisions = JSON.parse(snapshots[path.basename(paths.decisions)]);
  if (
    search.receipt_id !== receiptId ||
    decisions.receipt_id !== receiptId ||
    search.goal_id !== a.goal_id ||
    decisions.goal_id !== a.goal_id ||
    search.task_id !== a.task_id ||
    decisions.task_id !== a.task_id ||
    search.attempt !== a.attempt
  )
    fail(
      "MISMATCH",
      "Finalized artifact identities differ from their attestation.",
    );
  return {
    snapshots,
    event_id: matches[0].event_id,
    event_hash: matches[0].hash,
    files: a.files,
    directory: a.directory,
  };
}
function verifyFiles({ stateDir, attestation, omitDecisions = false }) {
  const snapshots = {};
  for (const [name, digest] of Object.entries(attestation.files)) {
    if (path.basename(name) !== name)
      fail("MISMATCH", "Unsafe attested file name.");
    if (omitDecisions && name.endsWith(".decisions.json")) continue;
    const bytes = readArtifact(
      path.resolve(stateDir, attestation.directory, name),
      { root: stateDir, maxBytes: 64 * 1024 * 1024 },
    );
    if (artifactSha256(bytes) !== digest)
      fail("MISMATCH", `Finalized receipt artifact changed: ${name}`);
    snapshots[name] = bytes;
  }
  return snapshots;
}
function fail(suffix, message) {
  throw new GoalHarnessError(`GOAL_RECEIPT_INTEGRITY_${suffix}`, message);
}
