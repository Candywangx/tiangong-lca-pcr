import { readFileSync } from "node:fs";

import { createSchemaRegistry } from "../../packages/pcr-core/src/schema-validation.mjs";

const BUILDER_SCHEMA_FILES = [
  "catalog.schema.json",
  "classification-mapping.schema.json",
  "pcr-manifest.schema.json",
  "pcr-markdown-frontmatter.schema.json",
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
export const validateClassificationMapping = (value) =>
  validateBuilderContract("classification-mapping.schema.json", value);
export const assertClassificationMapping = (value, options = {}) =>
  assertBuilderContract("classification-mapping.schema.json", value, options);
export const validateStructured = (value) =>
  validateBuilderContract("structured-projection.schema.json", value);
export const assertStructured = (value, options = {}) =>
  assertBuilderContract("structured-projection.schema.json", value, options);

function resolveContractId(contract) {
  return contractIds.get(contract) ?? contract;
}
