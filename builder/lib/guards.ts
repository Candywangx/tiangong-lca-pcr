/** Pure unknown-data helpers; no Goal state or execution policy dependency. */
export type UnknownRecord = Record<string, unknown>;
export function field(value: unknown, key: string): unknown {
  if (value === null || (typeof value !== 'object' && typeof value !== 'function')) return undefined;
  const result: unknown = Reflect.get(value, key); return result;
}
export function errorCode(error: unknown): unknown { return field(error, 'code'); }
export function errorMessage(error: unknown): string { return error instanceof Error ? error.message : String(error); }
