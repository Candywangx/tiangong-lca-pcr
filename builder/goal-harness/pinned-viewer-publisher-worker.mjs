import { execFileSync } from "node:child_process";
import { readFileSync } from "node:fs";
import path from "node:path";
import { pathToFileURL } from "node:url";

const PINNED_PUBLISHER_API_VERSION = 1;
const PREPARED_INTERRUPT = "HARNESS_PINNED_VIEWER_PREPARED";

function serializeError(error) {
  return {
    name: typeof error?.name === "string" ? error.name : "Error",
    code: typeof error?.code === "string" ? error.code : "PINNED_VIEWER_PUBLISHER_FAILED",
    message: typeof error?.message === "string" ? error.message : String(error),
    details: error?.details ?? null,
  };
}

function requirePinnedPublisher(module) {
  if (
    typeof module?.publishViewerSnapshot !== "function" ||
    typeof module?.recoverViewerSnapshot !== "function" ||
    typeof module?.VIEWER_INCREMENTAL_GENERATOR_VERSION !== "string" ||
    !module.VIEWER_INCREMENTAL_GENERATOR_VERSION
  ) {
    throw Object.assign(new Error("Pinned Viewer generator does not expose the Harness publication API."), {
      code: "PINNED_VIEWER_API_INCOMPATIBLE",
    });
  }
  return module;
}

function requirePinnedStore(module) {
  if (typeof module?.ViewerSnapshotStore !== "function") {
    throw Object.assign(new Error("Pinned Viewer snapshot store does not expose the Harness artifact API."), {
      code: "PINNED_VIEWER_API_INCOMPATIBLE",
    });
  }
  return module.ViewerSnapshotStore;
}

function publisherContract(module, manifest = null) {
  return {
    api_version: PINNED_PUBLISHER_API_VERSION,
    generator_version: module.VIEWER_INCREMENTAL_GENERATOR_VERSION,
    manifest_schema_version: manifest?.schema_version ?? null,
    schema_contract_sha256: manifest?.schema_contract_sha256 ?? null,
  };
}

function assertExpectedPublisherContract(actual, expected) {
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

function projectResult(result) {
  return {
    manifestRef: result?.manifestRef ?? null,
    sequence: result?.sequence ?? null,
    reused: result?.reused ?? null,
    rebuiltPcrIds: Array.isArray(result?.rebuiltPcrIds) ? [...result.rebuiltPcrIds] : [],
    removedPcrIds: Array.isArray(result?.removedPcrIds) ? [...result.removedPcrIds] : [],
  };
}

async function main() {
  const request = JSON.parse(readFileSync(0, "utf8"));
  const moduleUrl = pathToFileURL(request.module_path);
  moduleUrl.searchParams.set("harness-pinned", String(request.import_nonce));
  const publisher = requirePinnedPublisher(await import(moduleUrl.href));
  const storeModuleUrl = pathToFileURL(request.store_module_path);
  storeModuleUrl.searchParams.set("harness-pinned", String(request.import_nonce));
  const ViewerSnapshotStore = requirePinnedStore(await import(storeModuleUrl.href));
  const createStore = () => new ViewerSnapshotStore({
    root: request.options.artifactStore,
    generatorVersion: publisher.VIEWER_INCREMENTAL_GENERATOR_VERSION,
    sourceVerifier: createGitSourceVerifier(request.options.root),
  });

  if (request.operation === "publish_prepare") {
    let prepared = null;
    try {
      const result = publisher.publishViewerSnapshot({
        ...request.options,
        onPublicationPhase(phase, store) {
          if (phase !== "prepared") return;
          const journal = structuredClone(store.currentJournal);
          const manifest = structuredClone(store.readManifest(journal.manifest_ref));
          prepared = {
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
      if (error?.code === PREPARED_INTERRUPT && prepared) return { status: "prepared", ...prepared };
      throw error;
    }
  }

  if (request.operation === "publish_complete") {
    const result = publisher.publishViewerSnapshot(request.options);
    const manifest = result?.store?.readManifest(result.manifestRef);
    return {
      status: "completed",
      result: projectResult(result),
      publisher_contract: publisherContract(publisher, manifest),
    };
  }

  if (request.operation === "recover") {
    const preparedStore = createStore();
    const preparedJournal = JSON.parse(readFileSync(path.join(request.options.artifactStore, "journal.json"), "utf8"));
    const preparedManifest = preparedStore.readManifest(preparedJournal.manifest_ref);
    assertExpectedPublisherContract(publisherContract(publisher, preparedManifest), request.options.expectedPublisherContract);
    const result = publisher.recoverViewerSnapshot(request.options);
    const store = createStore();
    const active = store.readActive();
    const manifest = store.readManifest(active.manifest_ref);
    const contract = publisherContract(publisher, manifest);
    assertExpectedPublisherContract(contract, request.options.expectedPublisherContract);
    return { status: "recovered", result, active, manifest, publisher_contract: contract };
  }

  if (request.operation === "inspect_manifest") {
    const manifest = createStore().readManifest(request.options.manifestRef);
    return { status: "inspected", manifest, publisher_contract: publisherContract(publisher, manifest) };
  }

  if (request.operation === "inspect_store") {
    const store = createStore();
    const active = store.readActive();
    const history = store.readHistory();
    const manifest = store.readManifest(request.options.manifestRef ?? active.manifest_ref);
    return { status: "inspected", active, history, manifest, publisher_contract: publisherContract(publisher, manifest) };
  }

  if (request.operation === "abandon_prepared") {
    const result = createStore().abandonPreparedJournal({
      expected: request.options.expected,
      forceStaleLock: request.options.forceStaleLock,
      failurePhase: request.options.failurePhase,
    });
    return { status: "abandoned", result, publisher_contract: publisherContract(publisher) };
  }

  throw Object.assign(new Error(`Unknown pinned Viewer worker operation: ${request.operation}`), {
    code: "PINNED_VIEWER_OPERATION_INVALID",
  });
}

function createGitSourceVerifier(root) {
  return ({ phase, capture }) => {
    try {
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

function git(root, args) {
  return execFileSync("git", ["-C", root, ...args], { encoding: "utf8", stdio: ["ignore", "pipe", "pipe"] }).trim();
}

try {
  process.stdout.write(JSON.stringify({ ok: true, ...(await main()) }));
} catch (error) {
  process.stdout.write(JSON.stringify({ ok: false, error: serializeError(error) }));
}
