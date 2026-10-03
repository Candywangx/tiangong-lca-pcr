import { readFileSync } from "node:fs";
import { isUnknownRecord, type ContractOptions, type ContractValidationResult, type SchemaIssue } from '../../packages/pcr-core/src/types.ts';

import {
  ContractSchemaError,
  createSchemaRegistry,
} from "../../packages/pcr-core/src/schema-validation.ts";
import { isValidUtcTimestamp } from "./lifecycle-policy.ts";

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
  readSchema(
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
    schema: readSchema(readFileSync(new URL(`../schemas/${fileName}`, import.meta.url), "utf8")),
  })),
  {
    fileName: "structured-projection.schema.json",
    schema: readSchema(
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

export function assertBuilderContract<T>(contract: string, value: T, options: ContractOptions = {}): T {
  return registry.assert(resolveContractId(contract), value, options);
}

export function validateBuilderContract(contract: string, value: unknown, options: ContractOptions = {}): ContractValidationResult {
  return registry.validate(resolveContractId(contract), value, options);
}

export const validateManifest = (value: unknown) =>
  validateBuilderContract("pcr-manifest.schema.json", value);
export const assertManifest = <T>(value: T, options: ContractOptions = {}): T =>
  assertBuilderContract("pcr-manifest.schema.json", value, options);
export const validateMarkdownFrontmatter = (value: unknown) =>
  validateBuilderContract("pcr-markdown-frontmatter.schema.json", value);
export const assertMarkdownFrontmatter = <T>(value: T, options: ContractOptions = {}): T =>
  assertBuilderContract("pcr-markdown-frontmatter.schema.json", value, options);
export const validateCatalog = (value: unknown) => validateBuilderContract("catalog.schema.json", value);
export const assertCatalog = <T>(value: T, options: ContractOptions = {}): T =>
  assertBuilderContract("catalog.schema.json", value, options);
export function validateClassificationMapping(value: unknown): ContractValidationResult {
  const result = validateBuilderContract("classification-mapping.schema.json", value);
  if (!result.valid || !isUnknownRecord(value) || value.schema_version !== 2) {
    return result;
  }
  const verified = value as { mappings: { acceptance: { decided_at_utc: string } }[] };
  const errors: SchemaIssue[] = verified.mappings.flatMap((mapping, index) =>
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

export function assertClassificationMapping<T>(value: T, options: ContractOptions = {}): T {
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
export const validateStructured = (value: unknown) =>
  validateBuilderContract("structured-projection.schema.json", value);
export const assertStructured = <T>(value: T, options: ContractOptions = {}): T =>
  assertBuilderContract("structured-projection.schema.json", value, options);
export const validateRevision = (value: unknown) =>
  validateBuilderContract("pcr-revision.schema.json", value);
export const assertRevision = <T>(value: T, options: ContractOptions = {}): T =>
  assertBuilderContract("pcr-revision.schema.json", value, options);
export const validateRelease = (value: unknown) =>
  validateBuilderContract("pcr-release.schema.json", value);
export const assertRelease = <T>(value: T, options: ContractOptions = {}): T =>
  assertBuilderContract("pcr-release.schema.json", value, options);
export const validateReleaseHistory = (value: unknown) =>
  validateBuilderContract("pcr-release-history.schema.json", value);
export const assertReleaseHistory = <T>(value: T, options: ContractOptions = {}): T =>
  assertBuilderContract("pcr-release-history.schema.json", value, options);
export function validateCpcProductChain(value: unknown): ContractValidationResult {
  const result = validateBuilderContract("cpc-product-chain.schema.json", value);
  if (!result.valid) {
    return result;
  }
  const verified = value as { official_sources: { url: string }[] };
  const errors: SchemaIssue[] = verified.official_sources.flatMap((source, index) =>
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

export function assertCpcProductChain<T>(value: T, options: ContractOptions = {}): T {
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

function resolveContractId(contract: string): string {
  return contractIds.get(contract) ?? contract;
}

function isValidAbsoluteUri(value: string): boolean {
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

function hasValidRawBracketPlacement(value: string, parsed: URL): boolean {
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

function readSchema(text: string): Record<string, unknown> & { $id: string; title?: string } {
  const value: unknown = JSON.parse(text);
  if (!isUnknownRecord(value) || typeof value.$id !== 'string' || !value.$id) throw new Error('Registered Builder schema requires a stable $id.');
  if (value.title !== undefined && typeof value.title !== 'string') throw new Error('Registered Builder schema title must be a string.');
  return { ...value, $id: value.$id, ...(typeof value.title === 'string' ? { title: value.title } : {}) };
}
