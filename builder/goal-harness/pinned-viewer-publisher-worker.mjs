import { readFileSync } from "node:fs";
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

function publisherContract(module, manifest = null) {
  return {
    api_version: PINNED_PUBLISHER_API_VERSION,
    generator_version: module.VIEWER_INCREMENTAL_GENERATOR_VERSION,
    manifest_schema_version: manifest?.schema_version ?? null,
    schema_contract_sha256: manifest?.schema_contract_sha256 ?? null,
  };
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
    const result = publisher.recoverViewerSnapshot(request.options);
    return { status: "recovered", result, publisher_contract: publisherContract(publisher) };
  }

  throw Object.assign(new Error(`Unknown pinned Viewer worker operation: ${request.operation}`), {
    code: "PINNED_VIEWER_OPERATION_INVALID",
  });
}

try {
  process.stdout.write(JSON.stringify({ ok: true, ...(await main()) }));
} catch (error) {
  process.stdout.write(JSON.stringify({ ok: false, error: serializeError(error) }));
}
