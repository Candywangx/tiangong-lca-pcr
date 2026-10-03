import { existsSync } from "node:fs";
import path from "node:path";
import { GoalEventStore } from "./event-store.ts";
import { GoalHarnessError } from "./errors.ts";
import { withGoalLock } from "./lock.ts";
import {
  readArtifact,
  artifactSha256,
  stableArtifactJson,
  writeArtifactExclusive,
} from "./artifact-io.ts";

import { field, jsonRecord, record, text, records } from "./domain.ts";
import type { UnknownRecord, GoalTask } from "./domain.ts";

export type ReceiptTask=Pick<GoalTask,"id"|"cpc_code"|"attempt"|"turn_id"|"authoring_contract_version">;
export interface ReceiptPaths {directory:string;search:string;result:string;decisions:string;allowGoalCacheReuse?:boolean}
export interface ReceiptDecision extends UnknownRecord {uuid:string;decision:string;direct_read?:UnknownRecord;reason_code?:unknown;reason?:unknown}
export interface ReceiptDocument extends UnknownRecord {receipt_id:string;candidate_decisions:ReceiptDecision[]}
export function receiptDocument(value:unknown):ReceiptDocument {
 const d=record(value); return {...d,receipt_id:text(d.receipt_id),candidate_decisions:records(d.candidate_decisions).map(v=>({...v,uuid:text(v.uuid),decision:text(v.decision),...(v.direct_read === undefined ? {} : {direct_read:record(v.direct_read)})}))};
}
interface Attestation extends UnknownRecord { directory:string;files:Record<string,string>;decisions_text:string }
function attestation(value:unknown):Attestation {
 const a=record(value);const files=record(a.files); const checked:Record<string,string>={};
 for(const [name,digest] of Object.entries(files)) checked[name]=text(digest);
 return {...a,directory:text(a.directory),files:checked,decisions_text:text(a.decisions_text)};
}
export function receiptRequiresSeal(task:unknown) {
  return field(task,"authoring_contract_version") === 2;
}
const keyFor = (task:Pick<GoalTask,"id">, receiptId:string) =>
  `uuid-finalized-${artifactSha256(`${task.id}\0${receiptId}`).slice(7)}`;

export function sealReceipt({
  stateDir,
  task,
  receiptId,
  paths,
  document,
  requested,
  faultInjector = () => {},
}: {stateDir:string;task:ReceiptTask;receiptId:string;paths:ReceiptPaths;document:ReceiptDocument;requested:unknown;faultInjector?:(phase:string)=>void}) {
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
    const search = jsonRecord(searchBytes.toString("utf8"));
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
    const result:unknown = JSON.parse(raw.toString("utf8")),
      rows = Array.isArray(field(result,"data"))
        ? records(field(result,"data"))
        : Array.isArray(result)
        ? result
        : [];
    const ids = [
      ...new Set(
        rows.flatMap((row) => {
          const id = [field(row,"id"), field(row,"uuid"), field(row,"flow_id")].find(
            (v):v is string =>
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
    const directBytes:Record<string,Buffer> = {};
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
      const direct = jsonRecord(textBytes(directBytes[name]));
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
    const prior = store.getEvent(eventId);
    if (prior) {
      const original = receiptDocument(JSON.parse(text(prior.payload.decisions_text)));
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
        attestation: attestation(prior.payload),
        omitDecisions: !existsSync(paths.decisions),
      });
      if (!existsSync(paths.decisions))
        writeArtifactExclusive(paths.decisions, text(prior.payload.decisions_text));
      verifyFiles({ stateDir, attestation: attestation(prior.payload) });
      return original;
    }
    if (existsSync(paths.decisions))
      fail(
        "MISSING",
        "Existing decisions have no original finalization attestation; recapture evidence under a new receipt.",
      );
    const decisionsText = `${JSON.stringify(document, null, 2)}\n`;
    const files = Object.fromEntries(
      Object.entries({
        [path.basename(paths.search)]: searchBytes,
        [path.basename(paths.result)]: raw,
        ...directBytes,
      }).map(([name, bytes]) => [name, artifactSha256(bytes)]),
    );
    files[path.basename(paths.decisions)] = artifactSha256(decisionsText);
    const payload = {
      schema_version: 1,
      goal_id: document.goal_id,
      task_id: task.id,
      attempt: task.attempt,
      turn_id: task.turn_id,
      receipt_id: receiptId,
      directory: path.relative(stateDir, paths.directory),
      files,
      decisions_text: decisionsText,
    };
    verifyFiles({ stateDir, attestation: payload, omitDecisions: true });
    store.append({
      event_id: eventId,
      type: "uuid_receipt_finalized",
      payload,
    });
    faultInjector("after_attestation");
    writeArtifactExclusive(paths.decisions, decisionsText);
    return document;
  });
}

export function verifyReceiptSeal({ stateDir, task, receiptId, paths, eventStore = new GoalEventStore({ stateDir }) }: {stateDir:string;task:ReceiptTask|null;receiptId:string;paths:ReceiptPaths;eventStore?:GoalEventStore}) {
  if (path.resolve(eventStore.stateDir) !== path.resolve(stateDir)) fail("MISMATCH", "Receipt query index belongs to another Goal directory.");
  const matches = eventStore.getEventsByType("uuid_receipt_finalized", { receiptId });
  if (matches.length !== 1)
    fail(
      "MISSING",
      "No unique original finalization attestation exists for this receipt.",
    );
  const match=matches[0];if(!match) fail("MISSING", "No original attestation.");
  const a = attestation(match.payload);
  if (a.task_id !== task?.id && !paths.allowGoalCacheReuse)
    fail("MISMATCH", "Attestation belongs to another task.");
  if (path.resolve(stateDir, a.directory) !== path.resolve(paths.directory))
    fail("MISMATCH", "Attestation directory differs from the receipt locator.");
  const snapshots = verifyFiles({ stateDir, attestation: a });
  const search = jsonRecord(textBytes(snapshots[path.basename(paths.search)]));
  const decisions = jsonRecord(textBytes(snapshots[path.basename(paths.decisions)]));
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
    event_id: match.event_id,
    event_hash: match.hash,
    files: a.files,
    directory: a.directory,
  };
}
function verifyFiles({ stateDir, attestation, omitDecisions = false }: {stateDir:string;attestation:Attestation;omitDecisions?:boolean}) {
  const snapshots:Record<string,Buffer> = {};
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
function fail(suffix:string, message:string):never {
  throw new GoalHarnessError(`GOAL_RECEIPT_INTEGRITY_${suffix}`, message);
}

function textBytes(value:Buffer|undefined):string {if(!value) fail("MISMATCH","Missing captured receipt bytes.");return value.toString("utf8");}
