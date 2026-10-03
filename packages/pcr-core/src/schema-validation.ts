import { Ajv2020, type AnySchemaObject, type ErrorObject } from "ajv/dist/2020.js";
import { isUnknownRecord, unknownField, type ContractOptions, type SchemaIssue, type SchemaRegistry, type ContractValidationResult } from './types.ts';

export class ContractSchemaError extends Error {
  readonly code: string;
  readonly contract: string;
  readonly entity_kind: string;
  readonly schema_id: string;
  readonly source: string | null;
  readonly issues: SchemaIssue[];
  readonly errors: SchemaIssue[];
  constructor({ code = "PCR_SCHEMA_INVALID", contract, entityKind, source = null, issues }: {
    code?: string | undefined; contract: string; entityKind: string; source?: string | null | undefined; issues: readonly SchemaIssue[];
  }) {
    const location = source ? ` at ${source}` : "";
    const details = issues.map((issue) => `${issue.instance_path}: ${issue.message}`).join("; ");
    super(`${entityKind} schema validation failed${location}: ${details}`);
    this.name = "ContractSchemaError";
    this.code = code;
    this.contract = contract;
    this.entity_kind = entityKind;
    this.schema_id = contract;
    this.source = source;
    this.issues = structuredClone([...issues]);
    this.errors = structuredClone([...issues]);
  }

  toJSON() {
    return {
      code: this.code,
      entity_kind: this.entity_kind,
      schema_id: this.schema_id,
      source: this.source,
      errors: structuredClone(this.errors),
    };
  }
}

export function createSchemaRegistry(schemas: readonly unknown[], entityKinds: Readonly<Record<string, string>> = {}): SchemaRegistry {
  const ajv = new Ajv2020({
    allErrors: true,
    coerceTypes: false,
    removeAdditional: false,
    strict: true,
    useDefaults: false,
    validateSchema: true,
  });

  for (const schema of schemas) {
    if (!isUnknownRecord(schema) || typeof schema.$id !== "string" || !schema.$id) {
      throw new Error("Every registered JSON Schema requires a stable $id.");
    }
    ajv.addSchema(schema as AnySchemaObject);
  }

  return {
    assert<T>(contract: string, value: T, options: ContractOptions = {}): T {
      const entityKind = options.entityKind ?? entityKinds[contract] ?? contract;
      const result = validateRegisteredSchema(ajv, contract, value, entityKind);
      if (!result.valid) {
        throw new ContractSchemaError({
          code: options.code,
          contract,
          entityKind,
          source: options.source,
          issues: result.errors,
        });
      }
      return value;
    },
    validate(contract: string, value: unknown, options: ContractOptions = {}): ContractValidationResult {
      return validateRegisteredSchema(
        ajv,
        contract,
        value,
        options.entityKind ?? entityKinds[contract] ?? contract,
      );
    },
  };
}

export function formatContractIssues(issues: readonly SchemaIssue[]): string[] {
  return issues.map((issue) => `${issue.instance_path}: ${issue.message}`);
}

export function normalizeSchemaErrors(errors: readonly ErrorObject[]): SchemaIssue[] {
  return errors
    .map((error) => {
      const instancePath = issuePath(error);
      return {
        code: `schema.${error.keyword}`,
        instance_path: instancePath,
        schema_path: error.schemaPath,
        keyword: error.keyword,
        message: error.message ?? "is invalid",
        params: stableParams(error.params),
      };
    })
    .sort(compareSchemaErrors);
}

function validateRegisteredSchema(ajv: Ajv2020, contract: string, value: unknown, entityKind: string): ContractValidationResult {
  const validate = ajv.getSchema(contract);
  if (!validate) {
    throw new Error(`JSON Schema contract is not registered: ${contract}`);
  }
  const valid = validate(value) === true;
  const errors = valid ? [] : normalizeSchemaErrors(validate.errors ?? []);
  return {
    valid,
    code: valid ? null : "PCR_SCHEMA_INVALID",
    entity_kind: entityKind,
    schema_id: contract,
    errors,
    // Backward-compatible alias for the earlier internal registry API.
    issues: errors,
  };
}

function compareSchemaErrors(left: SchemaIssue, right: SchemaIssue): number {
  return (
    left.instance_path.localeCompare(right.instance_path) ||
    left.keyword.localeCompare(right.keyword) ||
    left.schema_path.localeCompare(right.schema_path) ||
    left.message.localeCompare(right.message) ||
    JSON.stringify(left.params).localeCompare(JSON.stringify(right.params))
  );
}

function issuePath(error: ErrorObject): string {
  const missingProperty = unknownField(error.params, "missingProperty");
  if (error.keyword === "required" && missingProperty) {
    const escaped = String(missingProperty)
      .replaceAll("~", "~0")
      .replaceAll("/", "~1");
    return `${error.instancePath}/${escaped}` || "/";
  }
  return error.instancePath || "/";
}

function stableClone(value: unknown): unknown {
  if (Array.isArray(value)) {
    return value.map(stableClone);
  }
  if (!value || typeof value !== "object") {
    return value;
  }
  return Object.fromEntries(
    Object.keys(value)
      .sort()
      .map((key) => [key, stableClone(unknownField(value, key))]),
  );
}

function stableParams(value: unknown): Record<string, unknown> {
  const cloned = stableClone(value ?? {});
  return isUnknownRecord(cloned) ? cloned : {};
}
