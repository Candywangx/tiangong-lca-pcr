import { createHash, type BinaryLike } from 'node:crypto';
import { readFileSync, statSync } from 'node:fs';
import path from 'node:path';

export class ConsumptionError extends Error {
  readonly code: string;
  readonly details: Readonly<Record<string, unknown>>;
  constructor(code: string, message: string, details: Readonly<Record<string, unknown>> = {}) {
    super(message);
    this.name = 'ConsumptionError';
    this.code = code;
    this.details = details;
  }
}

export const sha256 = (bytes: BinaryLike): string => `sha256:${createHash('sha256').update(bytes).digest('hex')}`;
export const object = (value: unknown): value is Record<string, unknown> =>
  value !== null && typeof value === 'object' && !Array.isArray(value);
export const pointerToken = (value: unknown): string => String(value).replaceAll('~', '~0').replaceAll('/', '~1');

export function atPointer(value: unknown, pointer: unknown): unknown {
  if (typeof pointer !== 'string' || (pointer !== '' && !pointer.startsWith('/')) || /~(?:[^01]|$)/u.test(pointer)) {
    throw new ConsumptionError('PCR_POINTER_INVALID', 'Use an RFC 6901 JSON Pointer, such as /processDataSet/exchanges/exchange/0.');
  }
  if (pointer === '') return value;
  let current: unknown = value;
  for (const encoded of pointer.slice(1).split('/')) {
    const key = encoded.replaceAll('~1', '/').replaceAll('~0', '~');
    if (current === null || typeof current !== 'object' || !Object.hasOwn(current, key)
      || (Array.isArray(current) && !/^(0|[1-9]\d*)$/u.test(key))) {
      throw new ConsumptionError('PCR_POINTER_NOT_FOUND', `No value exists at ${pointer}. Inspect the summary or a paged section first.`, { pointer });
    }
    // Index by the exact decoded token: numeric coercion could round a large
    // token to a different property. The own-property check excludes prototypes.
    current = (current as Record<string, unknown>)[key];
  }
  return current;
}

export interface JsonDocument {
  readonly file: string;
  readonly sha256: string;
  readonly bytes: number;
  readonly value: unknown;
}
function message(error: unknown): string { return error instanceof Error ? error.message : String(error); }

export function readJsonDocument(filename: string, maxBytes = 16 * 1024 * 1024): JsonDocument {
  const file = path.resolve(filename);
  let bytes: Buffer;
  try {
    const stat = statSync(file);
    if (!stat.isFile() || stat.size > maxBytes) {
      throw new ConsumptionError('PCR_INPUT_SIZE', `Expected a JSON file no larger than ${maxBytes} bytes: ${file}`);
    }
    bytes = readFileSync(file);
    if (bytes.length > maxBytes) throw new ConsumptionError('PCR_INPUT_SIZE', `Input grew beyond ${maxBytes} bytes: ${file}`);
  } catch (error: unknown) {
    if (error instanceof ConsumptionError) throw error;
    throw new ConsumptionError('PCR_INPUT_READ', `Cannot read local JSON file ${file}: ${message(error)}`, { file });
  }
  try {
    // Fatal decoding prevents malformed bytes from silently becoming U+FFFD.
    // Keep BOM in decoding and remove exactly one, preserving the legacy rule.
    const text = new TextDecoder('utf-8', { fatal: true, ignoreBOM: true }).decode(bytes).replace(/^\uFEFF/u, '');
    const value: unknown = JSON.parse(text);
    return { file, sha256: sha256(bytes), bytes: bytes.length, value };
  } catch (error: unknown) {
    throw new ConsumptionError('PCR_INPUT_JSON', `Malformed JSON in ${file}: ${message(error)}`, { file });
  }
}

export interface PointerEntry { readonly pointer: string; readonly value: unknown }
export function entriesAt(value: unknown, pointer: string): PointerEntry[] {
  if (value === undefined || value === null) return [];
  const items: readonly unknown[] | null = Array.isArray(value) ? value : null;
  return items ? items.map((item, index) => ({ pointer: `${pointer}/${index}`, value: item })) : [{ pointer, value }];
}

export interface Pagination {
  readonly page: number;
  readonly page_size: number;
  readonly total: number;
  readonly total_pages: number;
  readonly has_more: boolean;
}
export function paginate<T>(items: readonly T[], page: unknown = 1, pageSize: unknown = 10): { items: T[]; pagination: Pagination } {
  if (typeof page !== 'number' || typeof pageSize !== 'number' || !Number.isSafeInteger(page) || page < 1
    || !Number.isSafeInteger(pageSize) || pageSize < 1 || pageSize > 100) {
    throw new ConsumptionError('PCR_PAGE_INVALID', 'Use --page >= 1 and --page-size from 1 to 100.');
  }
  const pages = Math.max(1, Math.ceil(items.length / pageSize));
  if (page > pages) throw new ConsumptionError('PCR_PAGE_RANGE', `Page ${page} exceeds ${pages}; use --page ${pages}.`);
  return { items: items.slice((page - 1) * pageSize, page * pageSize),
    pagination: { page, page_size: pageSize, total: items.length, total_pages: pages, has_more: page < pages } };
}

export type Preview<T> = { readonly value: T; readonly truncated: false }
  | { readonly excerpt: string; readonly truncated: true; readonly total_characters: number };
/** Legacy bounded inspection utility. Semantic selected guidance must retain its
 * complete value and source context instead of passing through this helper. */
export function preview<T>(value: T, maxChars = 2400): Preview<T> {
  const json = JSON.stringify(value);
  if (json === undefined) throw new TypeError('Value has no JSON representation.');
  return json.length <= maxChars ? { value, truncated: false }
    : { excerpt: json.slice(0, maxChars), truncated: true, total_characters: json.length };
}

export function strictNumber(value: unknown, name: string, { positive = false }: { positive?: boolean } = {}): number {
  if ((typeof value !== 'number' && typeof value !== 'string')
    || (typeof value === 'string' && !/^[+-]?(?:\d+(?:\.\d*)?|\.\d+)(?:[eE][+-]?\d+)?$/u.test(value))
    || !Number.isFinite(Number(value)) || (positive && Number(value) <= 0)) {
    throw new ConsumptionError('PCR_NUMBER_INVALID', `${name} must be a finite${positive ? ' positive' : ''} decimal number. Missing values are not zero.`, { field: name });
  }
  return Number(value);
}
