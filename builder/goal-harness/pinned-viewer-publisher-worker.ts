import { execFileSync } from "node:child_process";
import { readFileSync } from "node:fs";
import path from "node:path";
import { pathToFileURL } from "node:url";

import { record, field, text, jsonRecord, errorCode } from "./domain.ts";
import type { UnknownRecord } from "./domain.ts";
interface PinnedPublisher {VIEWER_INCREMENTAL_GENERATOR_VERSION:string;publishViewerSnapshot:(input:UnknownRecord)=>unknown;recoverViewerSnapshot:(input:UnknownRecord)=>unknown}
interface PinnedStore {currentJournal:unknown;readManifest:(reference:unknown)=>UnknownRecord;readActive:()=>UnknownRecord;readHistory:()=>unknown;abandonPreparedJournal:(input:UnknownRecord)=>unknown}
function method(target: unknown, name: string, args: unknown[]): unknown {
 const fn=field(target,name); if(typeof fn!=="function") throw incompatible(`Pinned Viewer store is missing ${name}.`);
 const result: unknown=Reflect.apply(fn,target,args); return result;
}
function pinnedStore(value: unknown): PinnedStore {
 const source=record(value,"pinned Viewer store");
 return {get currentJournal(){return source.currentJournal;},readManifest:reference=>record(method(source,"readManifest",[reference])),readActive:()=>record(method(source,"readActive",[])),readHistory:()=>method(source,"readHistory",[]),abandonPreparedJournal:input=>method(source,"abandonPreparedJournal",[input])};
}
function incompatible(message:string) {return Object.assign(new Error(message),{code:"PINNED_VIEWER_API_INCOMPATIBLE"});}
const PINNED_PUBLISHER_API_VERSION = 1;
const PREPARED_INTERRUPT = "HARNESS_PINNED_VIEWER_PREPARED";

function serializeError(error: unknown) {
 return {name:typeof field(error,"name")==="string"?field(error,"name"):"Error",code:typeof field(error,"code")==="string"?field(error,"code"):"PINNED_VIEWER_PUBLISHER_FAILED",message:typeof field(error,"message")==="string"?field(error,"message"):String(error),details:field(error,"details")??null};
}
function requirePinnedPublisher(module: unknown): PinnedPublisher {
 const publish=field(module,"publishViewerSnapshot"), recover=field(module,"recoverViewerSnapshot"), version=field(module,"VIEWER_INCREMENTAL_GENERATOR_VERSION");
 if(typeof publish!=="function"||typeof recover!=="function"||typeof version!=="string"||!version)throw incompatible("Pinned Viewer generator does not expose the Harness publication API.");
 return {VIEWER_INCREMENTAL_GENERATOR_VERSION:version,publishViewerSnapshot(input){const result:unknown=Reflect.apply(publish,module,[input]);return result;},recoverViewerSnapshot(input){const result:unknown=Reflect.apply(recover,module,[input]);return result;}};
}
function requirePinnedStore(module: unknown): (options:UnknownRecord)=>PinnedStore {
 const constructor=field(module,"ViewerSnapshotStore");if(typeof constructor!=="function")throw incompatible("Pinned Viewer snapshot store does not expose the Harness artifact API.");
 return options=>{const value:unknown=Reflect.construct(constructor,[options]);return pinnedStore(value);};
}
function publisherContract(module: PinnedPublisher, manifest: unknown = null) {
  return {
    api_version: PINNED_PUBLISHER_API_VERSION,
    generator_version: module.VIEWER_INCREMENTAL_GENERATOR_VERSION,
    manifest_schema_version: field(manifest,"schema_version") ?? null,
    schema_contract_sha256: field(manifest,"schema_contract_sha256") ?? null,
  };
}

function assertExpectedPublisherContract(actual: ReturnType<typeof publisherContract>, expectedInput: unknown) {
  const expected=expectedInput==null?null:record(expectedInput,"expected publisher contract");
  if (
    !expected ||
    actual.api_version !== expected.api_version ||
    actual.generator_version !== expected.generator_version ||
    actual.manifest_schema_version !== expected.manifest_schema_version ||
    actual.schema_contract_sha256 !== expected.schema_contract_sha256
  ) {
    throw Object.assign(new Error("Pinned Viewer recovery contract differs from the exact outer-journal capture."), {
      code: "PINNED_VIEWER_RECOVERY_CONTRACT_MISMATCH",
    });
  }
}

function projectResult(result: unknown) {
  const rebuilt=field(result,"rebuiltPcrIds"), removed=field(result,"removedPcrIds");
  return {
    manifestRef: field(result,"manifestRef") ?? null,
    sequence: field(result,"sequence") ?? null,
    reused: field(result,"reused") ?? null,
    rebuiltPcrIds: Array.isArray(rebuilt) ? [...rebuilt] : [],
    removedPcrIds: Array.isArray(removed) ? [...removed] : [],
  };
}

async function main() {
  const request=jsonRecord(readFileSync(0,"utf8"));
  const options=record(request.options,"pinned publisher options");
  const moduleUrl = pathToFileURL(text(request.module_path));
  moduleUrl.searchParams.set("harness-pinned", String(request.import_nonce));
  const publisherModule: unknown=await import(moduleUrl.href);
  const publisher=requirePinnedPublisher(publisherModule);
  const storeModuleUrl = pathToFileURL(text(request.store_module_path));
  storeModuleUrl.searchParams.set("harness-pinned", String(request.import_nonce));
  const storeModule: unknown=await import(storeModuleUrl.href);
  const ViewerSnapshotStore=requirePinnedStore(storeModule);
  const createStore = () => ViewerSnapshotStore({
    root: options.artifactStore,
    generatorVersion: publisher.VIEWER_INCREMENTAL_GENERATOR_VERSION,
    sourceVerifier: createGitSourceVerifier(text(options.root)),
  });

  if (request.operation === "publish_prepare") {
    const prepared: {value: {journal:UnknownRecord;manifest:UnknownRecord;publisher_contract:ReturnType<typeof publisherContract>} | null} = {value:null};
    try {
      const result = publisher.publishViewerSnapshot({
        ...options,
        onPublicationPhase(phase: unknown, sourceStore: unknown) {
          if (phase !== "prepared") return;
          const store=pinnedStore(sourceStore);
          const journal = structuredClone(record(store.currentJournal));
          const manifest = structuredClone(store.readManifest(journal.manifest_ref));
          prepared.value = {
            journal,
            manifest,
            publisher_contract: publisherContract(publisher, manifest),
          };
          throw Object.assign(new Error("Pinned Viewer publication paused for Harness journal capture."), {
            code: PREPARED_INTERRUPT,
          });
        },
      });
      return { status: "completed", result: projectResult(result), publisher_contract: publisherContract(publisher) };
    } catch (error) {
      if (errorCode(error) === PREPARED_INTERRUPT && prepared.value) return { status: "prepared", ...prepared.value };
      throw error;
    }
  }

  if (request.operation === "publish_complete") {
    const result = publisher.publishViewerSnapshot(options);
    const resultStore=field(result,"store");
    const manifest=resultStore==null?undefined:pinnedStore(resultStore).readManifest(field(result,"manifestRef"));
    return {
      status: "completed",
      result: projectResult(result),
      publisher_contract: publisherContract(publisher, manifest),
    };
  }

  if (request.operation === "recover") {
    const preparedStore = createStore();
    const preparedJournal = jsonRecord(readFileSync(path.join(text(options.artifactStore), "journal.json"), "utf8"));
    const preparedManifest = preparedStore.readManifest(preparedJournal.manifest_ref);
    assertExpectedPublisherContract(publisherContract(publisher, preparedManifest), options.expectedPublisherContract);
    const result = publisher.recoverViewerSnapshot(options);
    const store = createStore();
    const active = store.readActive();
    const manifest = store.readManifest(active.manifest_ref);
    const contract = publisherContract(publisher, manifest);
    assertExpectedPublisherContract(contract, options.expectedPublisherContract);
    return { status: "recovered", result, active, manifest, publisher_contract: contract };
  }

  if (request.operation === "inspect_manifest") {
    const manifest = createStore().readManifest(options.manifestRef);
    return { status: "inspected", manifest, publisher_contract: publisherContract(publisher, manifest) };
  }

  if (request.operation === "inspect_store") {
    const store = createStore();
    const active = store.readActive();
    const history = store.readHistory();
    const manifest = store.readManifest(options.manifestRef ?? active.manifest_ref);
    return { status: "inspected", active, history, manifest, publisher_contract: publisherContract(publisher, manifest) };
  }

  if (request.operation === "abandon_prepared") {
    const result = createStore().abandonPreparedJournal({
      expected: options.expected,
      forceStaleLock: options.forceStaleLock,
      failurePhase: options.failurePhase,
    });
    return { status: "abandoned", result, publisher_contract: publisherContract(publisher) };
  }

  throw Object.assign(new Error(`Unknown pinned Viewer worker operation: ${request.operation}`), {
    code: "PINNED_VIEWER_OPERATION_INVALID",
  });
}

function createGitSourceVerifier(root: string) {
  return ({ phase, capture: input }: {phase:unknown;capture:unknown}) => {
    try {
      const capture=record(input,"Viewer source capture");
      const refCommit = git(root, ["rev-parse", "--verify", `${capture.source_ref}^{commit}`]);
      const commitTree = git(root, ["rev-parse", "--verify", `${capture.integration_commit}^{tree}`]);
      git(root, ["cat-file", "-e", `${capture.base_commit}^{commit}`]);
      if (refCommit !== capture.integration_commit || commitTree !== capture.tree_hash) return false;
      if (phase === "retained") return true;
      return git(root, ["rev-parse", "--verify", "HEAD^{commit}"]) === capture.integration_commit &&
        git(root, ["status", "--porcelain=v1", "--untracked-files=all"]) === "";
    } catch {
      return false;
    }
  };
}

function git(root: string, args: string[]): string {
  return execFileSync("git", ["-C", root, ...args], { encoding: "utf8", stdio: ["ignore", "pipe", "pipe"] }).trim();
}

try {
  process.stdout.write(JSON.stringify({ ok: true, ...(await main()) }));
} catch (error) {
  process.stdout.write(JSON.stringify({ ok: false, error: serializeError(error) }));
}
