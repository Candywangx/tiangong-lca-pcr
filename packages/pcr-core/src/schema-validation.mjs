import Ajv2020 from "ajv/dist/2020.js";

export class ContractSchemaError extends Error {
  constructor({ code = "PCR_SCHEMA_INVALID", contract, entityKind, source = null, issues }) {
    const location = source ? ` at ${source}` : "";
    const details = issues.map((issue) => `${issue.instance_path}: ${issue.message}`).join("; ");
    super(`${entityKind} schema validation failed${location}: ${details}`);
    this.name = "ContractSchemaError";
    this.code = code;
    this.contract = contract;
    this.entity_kind = entityKind;
    this.schema_id = contract;
    this.source = source;
    this.issues = structuredClone(issues);
    this.errors = structuredClone(issues);
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

export function createSchemaRegistry(schemas, entityKinds = {}) {
  const ajv = new Ajv2020({
    allErrors: true,
    coerceTypes: false,
    removeAdditional: false,
    strict: true,
    useDefaults: false,
    validateSchema: true,
  });

  for (const schema of schemas) {
    if (!schema?.$id) {
      throw new Error("Every registered JSON Schema requires a stable $id.");
    }
    ajv.addSchema(schema);
  }

  return {
    assert(contract, value, options = {}) {
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
    validate(contract, value, options = {}) {
      return validateRegisteredSchema(
        ajv,
        contract,
        value,
        options.entityKind ?? entityKinds[contract] ?? contract,
      );
    },
  };
}

export function formatContractIssues(issues) {
  return issues.map((issue) => `${issue.instance_path}: ${issue.message}`);
}

export function normalizeSchemaErrors(errors) {
  return errors
    .map((error) => {
      const instancePath = issuePath(error);
      return {
        code: `schema.${error.keyword}`,
        instance_path: instancePath,
        schema_path: error.schemaPath,
        keyword: error.keyword,
        message: error.message ?? "is invalid",
        params: stableClone(error.params ?? {}),
      };
    })
    .sort(compareSchemaErrors);
}

function validateRegisteredSchema(ajv, contract, value, entityKind) {
  const validate = ajv.getSchema(contract);
  if (!validate) {
    throw new Error(`JSON Schema contract is not registered: ${contract}`);
  }
  const valid = validate(value);
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

function compareSchemaErrors(left, right) {
  return (
    left.instance_path.localeCompare(right.instance_path) ||
    left.keyword.localeCompare(right.keyword) ||
    left.schema_path.localeCompare(right.schema_path) ||
    left.message.localeCompare(right.message) ||
    JSON.stringify(left.params).localeCompare(JSON.stringify(right.params))
  );
}

function issuePath(error) {
  if (error.keyword === "required" && error.params?.missingProperty) {
    const escaped = String(error.params.missingProperty)
      .replaceAll("~", "~0")
      .replaceAll("/", "~1");
    return `${error.instancePath}/${escaped}` || "/";
  }
  return error.instancePath || "/";
}

function stableClone(value) {
  if (Array.isArray(value)) {
    return value.map(stableClone);
  }
  if (!value || typeof value !== "object") {
    return value;
  }
  return Object.fromEntries(
    Object.keys(value)
      .sort()
      .map((key) => [key, stableClone(value[key])]),
  );
}
