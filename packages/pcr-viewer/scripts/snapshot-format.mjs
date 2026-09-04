import { createHash } from "node:crypto";
import { readFileSync } from "node:fs";
import { fileURLToPath } from "node:url";

import Ajv2020 from "ajv/dist/2020.js";

const schemaDirectory = new URL("../schemas/", import.meta.url);
const schemaFiles = {
  "viewer-object": "viewer-object.schema.json",
  "viewer-snapshot-manifest": "viewer-snapshot-manifest.schema.json",
  "viewer-history": "viewer-history.schema.json",
  "viewer-active": "viewer-active.schema.json",
};
const coreSchemaFiles = [
  new URL("../../pcr-core/schemas/readiness.schema.json", import.meta.url),
  new URL("../../pcr-core/schemas/guidance-output.schema.json", import.meta.url),
];

export class ViewerSnapshotSchemaError extends Error {
  constructor(contract, errors) {
    const rendered = errors
      .map((error) => `${error.instancePath || "/"}: ${error.message ?? "is invalid"}`)
      .join("; ");
    super(`${contract} schema validation failed: ${rendered}`);
    this.name = "ViewerSnapshotSchemaError";
    this.code = "VIEWER_SNAPSHOT_SCHEMA_INVALID";
    this.contract = contract;
    this.errors = structuredClone(errors);
  }
}

/** Return compact, recursively-key-sorted UTF-8 JSON with exactly one final LF. */
export function canonicalJson(value) {
  return `${canonicalValue(value, new Set())}\n`;
}

export function canonicalBytes(value) {
  return Buffer.from(canonicalJson(value), "utf8");
}

export function sha256Ref(value) {
  const bytes = Buffer.isBuffer(value) || value instanceof Uint8Array ? value : Buffer.from(String(value), "utf8");
  return `sha256:${createHash("sha256").update(bytes).digest("hex")}`;
}

/** Exact bytes of every strict viewer snapshot contract, in a fixed file order. */
export function viewerSchemaContractSha256() {
  return sha256Ref(
    Buffer.concat(
      Object.values(schemaFiles)
        .sort()
        .map((file) => readFileSync(fileURLToPath(new URL(file, schemaDirectory))))
        .concat(coreSchemaFiles.map((url) => readFileSync(fileURLToPath(url)))),
    ),
  );
}

export function assertSha256Ref(value, label = "sha256 reference") {
  if (typeof value !== "string" || !/^sha256:[a-f0-9]{64}$/u.test(value)) {
    throw new Error(`Invalid ${label}: expected sha256:<64 lowercase hex characters>.`);
  }
  return value;
}

export function refDigest(ref) {
  return assertSha256Ref(ref).slice("sha256:".length);
}

export function createViewerSnapshotSchemaRegistry() {
  const ajv = new Ajv2020({
    allErrors: true,
    coerceTypes: false,
    removeAdditional: false,
    strict: true,
    useDefaults: false,
    validateSchema: true,
  });
  for (const file of Object.values(schemaFiles)) {
    const schema = JSON.parse(readFileSync(fileURLToPath(new URL(file, schemaDirectory)), "utf8"));
    ajv.addSchema(schema);
  }
  for (const url of coreSchemaFiles) {
    ajv.addSchema(JSON.parse(readFileSync(fileURLToPath(url), "utf8")));
  }
  return Object.freeze({
    assert(contract, value) {
      const validate = ajv.getSchema(contract);
      if (!validate) throw new Error(`Unknown viewer snapshot contract: ${contract}`);
      if (!validate(value)) {
        throw new ViewerSnapshotSchemaError(contract, normalizeErrors(validate.errors ?? []));
      }
      return value;
    },
    validate(contract, value) {
      const validate = ajv.getSchema(contract);
      if (!validate) throw new Error(`Unknown viewer snapshot contract: ${contract}`);
      const valid = Boolean(validate(value));
      return Object.freeze({ valid, errors: valid ? [] : normalizeErrors(validate.errors ?? []) });
    },
  });
}

function canonicalValue(value, seen) {
  if (value === null) return "null";
  if (typeof value === "string") return JSON.stringify(value);
  if (typeof value === "boolean") return value ? "true" : "false";
  if (typeof value === "number") {
    if (!Number.isFinite(value)) throw new TypeError("Canonical JSON requires a finite JSON number.");
    return Object.is(value, -0) ? "0" : JSON.stringify(value);
  }
  if (Array.isArray(value)) {
    if (seen.has(value)) throw new TypeError("Canonical JSON does not permit cyclic values.");
    seen.add(value);
    const result = `[${value.map((item, index) => {
      if (!Object.hasOwn(value, index)) throw new TypeError("Unsupported JSON value: sparse arrays are not allowed.");
      return canonicalValue(item, seen);
    }).join(",")}]`;
    seen.delete(value);
    return result;
  }
  if (value && typeof value === "object") {
    const prototype = Object.getPrototypeOf(value);
    if (prototype !== Object.prototype && prototype !== null) {
      throw new TypeError("Unsupported JSON value: expected a plain object.");
    }
    if (seen.has(value)) throw new TypeError("Canonical JSON does not permit cyclic values.");
    seen.add(value);
    const result = `{${Object.keys(value).sort().map((key) => `${JSON.stringify(key)}:${canonicalValue(value[key], seen)}`).join(",")}}`;
    seen.delete(value);
    return result;
  }
  throw new TypeError(`Unsupported JSON value: ${typeof value}.`);
}

function normalizeErrors(errors) {
  return errors
    .map((error) => ({
      instancePath: error.instancePath,
      keyword: error.keyword,
      message: error.message,
      schemaPath: error.schemaPath,
    }))
    .sort((left, right) => `${left.instancePath}/${left.keyword}`.localeCompare(`${right.instancePath}/${right.keyword}`));
}
