import { readFileSync } from "node:fs";

import {
  ContractSchemaError,
  createSchemaRegistry,
} from "../../packages/pcr-core/src/schema-validation.mjs";
import { isValidUtcTimestamp } from "./lifecycle-policy.mjs";

const BUILDER_SCHEMA_FILES = [
  "catalog.schema.json",
  "classification-mapping.schema.json",
  "cpc-product-chain.schema.json",
  "pcr-manifest.schema.json",
  "pcr-markdown-frontmatter.schema.json",
  "pcr-release-history.schema.json",
  "pcr-release.schema.json",
  "pcr-revision.schema.json",
];

const schemaDependencies = [
  JSON.parse(
    readFileSync(
      new URL(
        "../../packages/pcr-core/schemas/controlled-vocabulary.schema.json",
        import.meta.url,
      ),
      "utf8",
    ),
  ),
];

const schemaEntries = [
  ...BUILDER_SCHEMA_FILES.map((fileName) => ({
    fileName,
    schema: JSON.parse(readFileSync(new URL(`../schemas/${fileName}`, import.meta.url), "utf8")),
  })),
  {
    fileName: "structured-projection.schema.json",
    schema: JSON.parse(
      readFileSync(
        new URL("../../packages/pcr-core/schemas/structured-projection.schema.json", import.meta.url),
        "utf8",
      ),
    ),
  },
];

const contractIds = new Map(schemaEntries.map(({ fileName, schema }) => [fileName, schema.$id]));
const registry = createSchemaRegistry(
  [...schemaDependencies, ...schemaEntries.map(({ schema }) => schema)],
  Object.fromEntries(schemaEntries.map(({ schema }) => [schema.$id, schema.title ?? schema.$id])),
);

export function assertBuilderContract(contract, value, options = {}) {
  return registry.assert(resolveContractId(contract), value, options);
}

export function validateBuilderContract(contract, value, options = {}) {
  return registry.validate(resolveContractId(contract), value, options);
}

export const validateManifest = (value) =>
  validateBuilderContract("pcr-manifest.schema.json", value);
export const assertManifest = (value, options = {}) =>
  assertBuilderContract("pcr-manifest.schema.json", value, options);
export const validateMarkdownFrontmatter = (value) =>
  validateBuilderContract("pcr-markdown-frontmatter.schema.json", value);
export const assertMarkdownFrontmatter = (value, options = {}) =>
  assertBuilderContract("pcr-markdown-frontmatter.schema.json", value, options);
export const validateCatalog = (value) => validateBuilderContract("catalog.schema.json", value);
export const assertCatalog = (value, options = {}) =>
  assertBuilderContract("catalog.schema.json", value, options);
export function validateClassificationMapping(value) {
  const result = validateBuilderContract("classification-mapping.schema.json", value);
  if (!result.valid || value.schema_version !== 2) {
    return result;
  }
  const errors = value.mappings.flatMap((mapping, index) =>
    isValidUtcTimestamp(mapping.acceptance.decided_at_utc)
      ? []
      : [{
          code: "semantic.utc_timestamp",
          instance_path: `/mappings/${index}/acceptance/decided_at_utc`,
          schema_path: "#/$defs/utcTimestamp",
          keyword: "format",
          message: "must be a real canonical UTC timestamp",
          params: {},
        }]);
  return errors.length === 0
    ? result
    : {
        ...result,
        valid: false,
        code: "PCR_SCHEMA_INVALID",
        errors,
        issues: errors,
      };
}

export function assertClassificationMapping(value, options = {}) {
  const result = validateClassificationMapping(value);
  if (result.valid) {
    return value;
  }
  const contract = resolveContractId("classification-mapping.schema.json");
  throw new ContractSchemaError({
    code: options.code,
    contract,
    entityKind: options.entityKind ?? "Classification to PCR mapping",
    source: options.source,
    issues: result.errors,
  });
}
export const validateStructured = (value) =>
  validateBuilderContract("structured-projection.schema.json", value);
export const assertStructured = (value, options = {}) =>
  assertBuilderContract("structured-projection.schema.json", value, options);
export const validateRevision = (value) =>
  validateBuilderContract("pcr-revision.schema.json", value);
export const assertRevision = (value, options = {}) =>
  assertBuilderContract("pcr-revision.schema.json", value, options);
export const validateRelease = (value) =>
  validateBuilderContract("pcr-release.schema.json", value);
export const assertRelease = (value, options = {}) =>
  assertBuilderContract("pcr-release.schema.json", value, options);
export const validateReleaseHistory = (value) =>
  validateBuilderContract("pcr-release-history.schema.json", value);
export const assertReleaseHistory = (value, options = {}) =>
  assertBuilderContract("pcr-release-history.schema.json", value, options);
export function validateCpcProductChain(value) {
  const result = validateBuilderContract("cpc-product-chain.schema.json", value);
  if (!result.valid) {
    return result;
  }
  const errors = value.official_sources.flatMap((source, index) =>
    isValidAbsoluteUri(source.url)
      ? []
      : [{
          code: "semantic.absolute_uri",
          instance_path: `/official_sources/${index}/url`,
          schema_path: "#/$defs/officialSource/properties/url",
          keyword: "format",
          message: "must be a valid absolute URI",
          params: { format: "uri" },
        }]);
  return errors.length === 0
    ? result
    : {
        ...result,
        valid: false,
        code: "PCR_SCHEMA_INVALID",
        errors,
        issues: errors,
      };
}

export function assertCpcProductChain(value, options = {}) {
  const result = validateCpcProductChain(value);
  if (result.valid) {
    return value;
  }
  const contract = resolveContractId("cpc-product-chain.schema.json");
  throw new ContractSchemaError({
    code: options.code,
    contract,
    entityKind: options.entityKind ?? "CPC product-chain pilot",
    source: options.source,
    issues: result.errors,
  });
}

function resolveContractId(contract) {
  return contractIds.get(contract) ?? contract;
}

function isValidAbsoluteUri(value) {
  if (
    !/^[A-Za-z][A-Za-z0-9+.-]*:/u.test(value) ||
    !/^(?:[A-Za-z0-9._~:/?#\[\]@!$&'()*+,;=-]|%[0-9A-Fa-f]{2})+$/u.test(value) ||
    /\s/u.test(value) ||
    /%(?![0-9A-Fa-f]{2})/u.test(value) ||
    value.indexOf("#") !== value.lastIndexOf("#")
  ) {
    return false;
  }
  try {
    const parsed = new URL(value);
    return hasValidRawBracketPlacement(value, parsed);
  } catch {
    return false;
  }
}

function hasValidRawBracketPlacement(value, parsed) {
  const hasOpeningBracket = value.includes("[");
  const hasClosingBracket = value.includes("]");
  if (!hasOpeningBracket && !hasClosingBracket) {
    return true;
  }
  if (!hasOpeningBracket || !hasClosingBracket) {
    return false;
  }

  const schemeEnd = value.indexOf(":");
  if (value.slice(schemeEnd + 1, schemeEnd + 3) !== "//") {
    return false;
  }
  const authorityStart = schemeEnd + 3;
  const authorityTail = value.slice(authorityStart);
  const authorityTerminator = authorityTail.search(/[/?#]/u);
  const authorityEnd = authorityTerminator === -1
    ? value.length
    : authorityStart + authorityTerminator;
  const authority = value.slice(authorityStart, authorityEnd);
  const hostStart = authority.lastIndexOf("@") + 1;
  const hostAndPort = authority.slice(hostStart);
  const closingBracket = hostAndPort.indexOf("]");
  const afterHost = hostAndPort.slice(closingBracket + 1);

  return (
    parsed.hostname.startsWith("[") &&
    parsed.hostname.endsWith("]") &&
    !/[\[\]]/u.test(authority.slice(0, hostStart)) &&
    hostAndPort.startsWith("[") &&
    closingBracket > 1 &&
    !hostAndPort.slice(1, closingBracket).includes("[") &&
    !/[\[\]]/u.test(afterHost) &&
    (afterHost === "" || /^:[0-9]+$/u.test(afterHost)) &&
    !/[\[\]]/u.test(value.slice(authorityEnd))
  );
}
