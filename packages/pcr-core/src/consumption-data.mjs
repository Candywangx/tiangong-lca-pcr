import { createHash } from "node:crypto";
import { readFileSync, statSync } from "node:fs";
import path from "node:path";

export class ConsumptionError extends Error {
  constructor(code, message, details = {}) {
    super(message);
    this.name = "ConsumptionError";
    this.code = code;
    this.details = details;
  }
}

export const sha256 = (bytes) => `sha256:${createHash("sha256").update(bytes).digest("hex")}`;
export const object = (value) => value !== null && typeof value === "object" && !Array.isArray(value);
export const pointerToken = (value) => String(value).replaceAll("~", "~0").replaceAll("/", "~1");

export function atPointer(value, pointer) {
  if (typeof pointer !== "string" || (pointer !== "" && !pointer.startsWith("/")) || /~(?:[^01]|$)/u.test(pointer)) {
    throw new ConsumptionError("PCR_POINTER_INVALID", "Use an RFC 6901 JSON Pointer, such as /processDataSet/exchanges/exchange/0.");
  }
  if (pointer === "") return value;
  let current = value;
  for (const encoded of pointer.slice(1).split("/")) {
    const key = encoded.replaceAll("~1", "/").replaceAll("~0", "~");
    if (current === null || typeof current !== "object" || !Object.hasOwn(current, key)
      || (Array.isArray(current) && !/^(0|[1-9]\d*)$/u.test(key))) {
      throw new ConsumptionError("PCR_POINTER_NOT_FOUND", `No value exists at ${pointer}. Inspect the summary or a paged section first.`, { pointer });
    }
    current = current[key];
  }
  return current;
}

export function readJsonDocument(filename, maxBytes = 16 * 1024 * 1024) {
  const file = path.resolve(filename);
  let bytes;
  try {
    const stat = statSync(file);
    if (!stat.isFile() || stat.size > maxBytes) {
      throw new ConsumptionError("PCR_INPUT_SIZE", `Expected a JSON file no larger than ${maxBytes} bytes: ${file}`);
    }
    bytes = readFileSync(file);
    if (bytes.length > maxBytes) throw new ConsumptionError("PCR_INPUT_SIZE", `Input grew beyond ${maxBytes} bytes: ${file}`);
  } catch (error) {
    if (error instanceof ConsumptionError) throw error;
    throw new ConsumptionError("PCR_INPUT_READ", `Cannot read local JSON file ${file}: ${error.message}`, { file });
  }
  try {
    return { file, sha256: sha256(bytes), bytes: bytes.length, value: JSON.parse(bytes.toString("utf8").replace(/^\uFEFF/u, "")) };
  } catch (error) {
    throw new ConsumptionError("PCR_INPUT_JSON", `Malformed JSON in ${file}: ${error.message}`, { file });
  }
}

export function entriesAt(value, pointer) {
  if (value === undefined || value === null) return [];
  return Array.isArray(value)
    ? value.map((item, index) => ({ pointer: `${pointer}/${index}`, value: item }))
    : [{ pointer, value }];
}

export function paginate(items, page = 1, pageSize = 10) {
  if (!Number.isSafeInteger(page) || page < 1 || !Number.isSafeInteger(pageSize) || pageSize < 1 || pageSize > 100) {
    throw new ConsumptionError("PCR_PAGE_INVALID", "Use --page >= 1 and --page-size from 1 to 100.");
  }
  const pages = Math.max(1, Math.ceil(items.length / pageSize));
  if (page > pages) throw new ConsumptionError("PCR_PAGE_RANGE", `Page ${page} exceeds ${pages}; use --page ${pages}.`);
  return {
    items: items.slice((page - 1) * pageSize, page * pageSize),
    pagination: { page, page_size: pageSize, total: items.length, total_pages: pages, has_more: page < pages },
  };
}

export function preview(value, maxChars = 2400) {
  const json = JSON.stringify(value);
  return json.length <= maxChars ? { value, truncated: false }
    : { excerpt: json.slice(0, maxChars), truncated: true, total_characters: json.length };
}

export function strictNumber(value, name, { positive = false } = {}) {
  if ((typeof value !== "number" && typeof value !== "string")
    || (typeof value === "string" && !/^[+-]?(?:\d+(?:\.\d*)?|\.\d+)(?:[eE][+-]?\d+)?$/u.test(value))
    || !Number.isFinite(Number(value)) || (positive && Number(value) <= 0)) {
    throw new ConsumptionError("PCR_NUMBER_INVALID", `${name} must be a finite${positive ? " positive" : ""} decimal number. Missing values are not zero.`, { field: name });
  }
  return Number(value);
}
