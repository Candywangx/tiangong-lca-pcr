import { readFileSync } from "node:fs";
import { isAlias, isMap, isNode, isScalar, isSeq, LineCounter, parseDocument } from "yaml";

export type YamlValue = null | boolean | number | string | YamlValue[] | YamlObject;
export interface YamlObject { [key: string]: YamlValue }

/** A complete document is required; callers never receive a partial parse. */
export class YamlBoundaryError extends Error {
  readonly code: string;
  readonly line: number;
  readonly column: number;
  readonly sourcePath: string | undefined;

  constructor(code: string, message: string, line = 1, column = 1, sourcePath?: string) {
    super(`${code}: ${message} (${sourcePath ? `${sourcePath}:` : ""}${line}:${column})`);
    this.name = "YamlBoundaryError";
    this.code = code;
    this.line = line;
    this.column = column;
    this.sourcePath = sourcePath;
  }
}

export function readYamlFile(filePath: string): YamlValue {
  const bytes = readFileSync(filePath);
  let text: string;
  try {
    text = new TextDecoder("utf-8", { fatal: true }).decode(bytes);
  } catch {
    throw new YamlBoundaryError("YAML_INVALID_UTF8", "Input is not valid UTF-8", 1, 1, filePath);
  }
  return parseYamlDocument(text, filePath);
}

/**
 * Parse one YAML 1.2 core document into JSON-compatible values. Acyclic aliases
 * produce independent copies; at most 100 expanded alias visits and 100 nested
 * collections are allowed. Cycles, unresolved aliases and limit breaches fail
 * with source positions rather than returning partially converted data.
 */
export function parseYaml(text: string): YamlValue {
  return parseYamlDocument(text);
}

const supportedTags = new Set([
  "tag:yaml.org,2002:null", "tag:yaml.org,2002:bool", "tag:yaml.org,2002:int",
  "tag:yaml.org,2002:float", "tag:yaml.org,2002:str", "tag:yaml.org,2002:seq",
  "tag:yaml.org,2002:map",
]);

// Valid acyclic YAML aliases are copied into JSON values. Count expanded alias
// visits (including aliases within copied targets), not just source occurrences,
// so nested alias amplification cannot bypass this per-document bound.
const maximumExpandedAliases = 100;
const maximumNestingDepth = 100;

function parseYamlDocument(text: string, sourcePath?: string): YamlValue {
  const lineCounter = new LineCounter();
  const document = parseDocument(text, {
    version: "1.2", schema: "core", strict: true, uniqueKeys: true,
    stringKeys: true, lineCounter, prettyErrors: false, resolveKnownTags: false,
    merge: false,
  });
  function fail(code: string, message: string, offset: number): never {
    const position = lineCounter.linePos(offset);
    throw new YamlBoundaryError(code, message, position.line, position.col, sourcePath);
  }
  // parseDocument reports trailing documents as MULTIPLE_DOCS. Warnings are also
  // fatal: an unresolved tag or directive must not silently become plain text.
  const diagnostic = document.errors[0] ?? document.warnings[0];
  if (diagnostic) fail(`YAML_${diagnostic.code}`, diagnostic.message, diagnostic.pos[0]);
  if (document.directives?.yaml.version !== "1.2") {
    fail("YAML_UNSUPPORTED_VERSION", "Only YAML 1.2 is supported", 0);
  }
  const activeNodes = new Set<object>();
  let expandedAliases = 0;
  function convert(node: unknown): YamlValue {
    if (node === null) return null;
    const offset = isNode(node) ? node.range?.[0] ?? 0 : 0;
    if (isAlias(node)) {
      const target = node.resolve(document);
      if (!target) fail("YAML_ALIAS_UNRESOLVED", `Unresolved alias ${node.source}`, offset);
      if (activeNodes.has(target)) fail("YAML_ALIAS_CYCLE", `Cyclic alias ${node.source}`, offset);
      expandedAliases += 1;
      if (expandedAliases > maximumExpandedAliases) {
        fail("YAML_ALIAS_LIMIT", `Expanded alias count exceeds ${maximumExpandedAliases}`, offset);
      }
      // Re-convert each target rather than sharing mutable objects/arrays.
      return convert(target);
    }
    if (isNode(node) && node.tag && !supportedTags.has(node.tag)) {
      fail("YAML_TAG_UNSUPPORTED", `Unsupported tag ${node.tag}`, offset);
    }
    if (isScalar(node)) {
      const value: unknown = node.value;
      if (value === null || typeof value === "string" || typeof value === "boolean") return value;
      if (typeof value === "number" && Number.isFinite(value)) return value;
      fail("YAML_NON_JSON_VALUE", "Scalar must be a finite JSON-compatible value", offset);
    }
    if (isSeq(node) || isMap(node)) {
      if (activeNodes.size >= maximumNestingDepth) {
        fail("YAML_NESTING_LIMIT", `Collection nesting exceeds ${maximumNestingDepth}`, offset);
      }
      activeNodes.add(node);
      try {
        if (isSeq(node)) return node.items.map(convert);
        const result: YamlObject = {};
        for (const pair of node.items) {
          if (!isScalar(pair.key) || typeof pair.key.value !== "string") {
            fail("YAML_COMPLEX_KEY", "Mapping keys must be strings", offset);
          }
          const key = pair.key.value;
          if (Object.hasOwn(result, key)) fail("YAML_DUPLICATE_KEY", `Duplicate key ${key}`, pair.key.range?.[0] ?? offset);
          Object.defineProperty(result, key, {
            value: convert(pair.value), enumerable: true, configurable: true, writable: true,
          });
        }
        return result;
      } finally {
        activeNodes.delete(node);
      }
    }
    fail("YAML_NON_JSON_VALUE", "Unsupported YAML node", offset);
  }
  // Preserve the historical empty-document API; explicit YAML null remains null.
  const contents = document.contents;
  return contents === null || (isScalar(contents) && contents.value === null && contents.source === "" && !contents.tag)
    ? {} : convert(contents);
}

/**
 * Preserve legacy deterministic formatting for ordinary JSON values. Undefined
 * deliberately retains the historical null encoding, including object fields.
 * Other non-JSON values, accessor properties, sparse arrays, cycles and collection
 * nesting beyond the parser's 100-level bound fail.
 */
export function renderYaml(value: unknown): string {
  return `${renderNode(normalizeRenderable(value, new Set()), 0).join("\n")}\n`;
}

function normalizeRenderable(value: unknown, ancestors: Set<object>): YamlValue {
  if (value === null || value === undefined) return null;
  if (typeof value === "string" || typeof value === "boolean") return value;
  if (typeof value === "number" && Number.isFinite(value)) return value;
  if (typeof value !== "object") throw new YamlBoundaryError("YAML_RENDER_NON_JSON_VALUE", "Value is not JSON-compatible");
  if (ancestors.has(value)) throw new YamlBoundaryError("YAML_RENDER_CYCLE", "Cyclic values are not supported");
  if (ancestors.size >= maximumNestingDepth) throw new YamlBoundaryError("YAML_RENDER_NESTING_LIMIT", `Collection nesting exceeds ${maximumNestingDepth}`);
  const prototype: unknown = Object.getPrototypeOf(value);
  if (!Array.isArray(value) && prototype !== Object.prototype && prototype !== null) {
    throw new YamlBoundaryError("YAML_RENDER_NON_JSON_VALUE", "Only plain objects and arrays are supported");
  }
  if (Object.getOwnPropertySymbols(value).length > 0) {
    throw new YamlBoundaryError("YAML_RENDER_NON_JSON_VALUE", "Symbol properties are not supported");
  }
  ancestors.add(value);
  try {
    if (Array.isArray(value)) {
      const result: YamlValue[] = [];
      if (Object.getOwnPropertyNames(value).length !== value.length + 1) throw new YamlBoundaryError("YAML_RENDER_NON_JSON_VALUE", "Sparse arrays or extra array properties are not supported");
      for (let index = 0; index < value.length; index += 1) {
        const descriptor = Object.getOwnPropertyDescriptor(value, String(index));
        if (!descriptor || !Object.hasOwn(descriptor, "value")) throw new YamlBoundaryError("YAML_RENDER_NON_JSON_VALUE", "Array accessors are not supported");
        const item: unknown = descriptor.value;
        result.push(normalizeRenderable(item, ancestors));
      }
      return result;
    }
    const result: YamlObject = {};
    for (const key of Object.getOwnPropertyNames(value)) {
      const descriptor = Object.getOwnPropertyDescriptor(value, key);
      if (!descriptor?.enumerable || !Object.hasOwn(descriptor, "value")) {
        throw new YamlBoundaryError("YAML_RENDER_NON_JSON_VALUE", "Non-enumerable properties and accessors are not supported");
      }
      const item: unknown = descriptor.value;
      Object.defineProperty(result, key, { value: normalizeRenderable(item, ancestors), enumerable: true });
    }
    return result;
  } finally {
    ancestors.delete(value);
  }
}

function renderNode(value: YamlValue, indent: number): string[] {
  if (Array.isArray(value)) return value.length ? renderArray(value, indent) : [`${" ".repeat(indent)}[]`];
  if (value !== null && typeof value === "object") {
    return Object.keys(value).length ? renderObject(value, indent) : [`${" ".repeat(indent)}{}`];
  }
  return [`${" ".repeat(indent)}${renderScalar(value)}`];
}

function renderKey(key: string): string {
  // Existing machine keys remain byte-identical; unusual keys need quotes so
  // punctuation, comments and whitespace cannot change the document structure.
  return /^[A-Za-z0-9_][A-Za-z0-9_.-]*$/u.test(key) ? key : JSON.stringify(key);
}

function renderObject(object: YamlObject, indent: number): string[] {
  const lines: string[] = [];
  for (const [key, value] of Object.entries(object)) {
    const prefix = `${" ".repeat(indent)}${renderKey(key)}:`;
    if (Array.isArray(value)) {
      if (value.length === 0) lines.push(`${prefix} []`);
      else lines.push(prefix, ...renderArray(value, indent + 2));
    } else if (value !== null && typeof value === "object") {
      if (Object.keys(value).length === 0) lines.push(`${prefix} {}`);
      else lines.push(prefix, ...renderObject(value, indent + 2));
    } else lines.push(`${prefix} ${renderScalar(value)}`);
  }
  return lines;
}

function renderArray(values: YamlValue[], indent: number): string[] {
  const lines: string[] = [];
  for (const value of values) {
    const prefix = `${" ".repeat(indent)}-`;
    if (Array.isArray(value)) {
      if (value.length === 0) lines.push(`${prefix} []`);
      else lines.push(prefix, ...renderArray(value, indent + 2));
    } else if (value !== null && typeof value === "object") {
      const [first, ...rest] = Object.entries(value);
      if (!first) { lines.push(`${prefix} {}`); continue; }
      const [firstKey, firstValue] = first;
      if (firstValue !== null && typeof firstValue === "object") {
        lines.push(`${prefix} ${renderKey(firstKey)}:`, ...renderNode(firstValue, indent + 4));
      } else lines.push(`${prefix} ${renderKey(firstKey)}: ${renderScalar(firstValue)}`);
      if (rest.length > 0) lines.push(...renderObject(Object.fromEntries(rest), indent + 2));
    } else lines.push(`${prefix} ${renderScalar(value)}`);
  }
  return lines;
}

function renderScalar(value: null | boolean | number | string): string {
  if (value === null) return "null";
  if (typeof value === "boolean") return value ? "true" : "false";
  if (typeof value === "number") return String(value);
  return JSON.stringify(value);
}
