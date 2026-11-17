/** Bounded, canonical arithmetic transport of unchanged base64-VLQ channel strings. */
const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/';
const HALF = 0x80000000, QUARTER = 0x40000000, FULL = 0x100000000;
const LIMIT = 20_000_000;
const fail = (): never => { throw new Error('Invalid arithmetic search channel.'); };
export class SearchChannelCapacityError extends Error { constructor() { super("Arithmetic search channel exceeds capacity."); } }
export interface ArithmeticChannel { lengths: number[]; bits: number; data: string }
function model() { return [new Uint16Array(65 * 64).fill(1), new Uint16Array(65 * 64).fill(1)] as const; }
function update(zero: Uint16Array, one: Uint16Array, context: number, bit: number) {
  if (bit) one[context]!++; else zero[context]!++;
  if (zero[context]! + one[context]! >= 256) {
    zero[context] = (zero[context]! + 1) >>> 1;
    one[context] = (one[context]! + 1) >>> 1;
  }
}
function channelSize(lengths: readonly number[]): number {
  if (lengths.length > 1_000_000) return fail();
  let total = 0;
  for (const length of lengths) {
    if (!Number.isSafeInteger(length) || length < 0 || length > LIMIT) return fail();
    total += length;
    if (total + lengths.length > LIMIT) return fail();
  }
  return total;
}
function base64(bytes: Uint8Array): string {
  let text = '';
  for (let i = 0; i < bytes.length; i += 8192) text += String.fromCharCode(...bytes.subarray(i, i + 8192));
  return btoa(text);
}
export function encodeSearchChannel(strings: readonly string[]): ArithmeticChannel {
  const lengths = strings.map(text => text.length);
  if (lengths.reduce((sum, length) => sum + length + 1, 0) > LIMIT) throw new SearchChannelCapacityError();
  const total = channelSize(lengths);
  const [zero, one] = model();
  let low = 0, high = FULL - 1, pending = 0, bits = 0;
  let output = new Uint8Array(Math.max(64, Math.min(LIMIT, total)));
  function write(bit: number) {
    const offset = bits >>> 3;
    if (offset >= LIMIT) return fail();
    if (offset >= output.length) {
      const grown = new Uint8Array(Math.min(LIMIT, output.length * 2)); grown.set(output); output = grown;
    }
    if (bit) output[offset]! |= 1 << (7 - (bits & 7));
    bits++;
  }
  function emit(bit: number) { write(bit); while (pending > 0) { write(1 - bit); pending--; } }
  for (const text of strings) {
    let previous = 64;
    for (const character of text) {
      const value = alphabet.indexOf(character);
      if (value < 0) return fail();
      let prefix = 1;
      for (let shift = 5; shift >= 0; shift--) {
        const context = previous * 64 + prefix, bit = (value >>> shift) & 1;
        const middle = low + Math.floor((high - low + 1) * zero[context]! / (zero[context]! + one[context]!)) - 1;
        if (bit) low = middle + 1; else high = middle;
        while (true) {
          if (high < HALF) emit(0);
          else if (low >= HALF) { emit(1); low -= HALF; high -= HALF; }
          else if (low >= QUARTER && high < 3 * QUARTER) { pending++; low -= QUARTER; high -= QUARTER; }
          else break;
          low *= 2; high = high * 2 + 1;
        }
        update(zero, one, context, bit); prefix = prefix * 2 + bit;
      }
      previous = value;
    }
  }
  pending++; emit(low < QUARTER ? 0 : 1);
  return { lengths, bits, data: base64(output.subarray(0, Math.ceil(bits / 8))) };
}
/** Charge the shared expansion bound before allocation; reject noncanonical termination/padding. */
export function decodeSearchChannel(value: unknown, budget: { remaining: number }): string[] {
  if (!value || typeof value !== 'object' || Array.isArray(value)) return fail();
  const record = value as Record<string, unknown>;
  if (Object.keys(record).length !== 3 || !Array.isArray(record.lengths)
    || typeof record.bits !== 'number' || !Number.isSafeInteger(record.bits) || record.bits < 2 || record.bits > LIMIT * 8
    || typeof record.data !== 'string' || record.data.length > Math.ceil(LIMIT / 3) * 4) return fail();
  const lengths = record.lengths as number[], total = channelSize(lengths);
  budget.remaining -= total + lengths.length;
  if (budget.remaining < 0) return fail();
  let binary: string;
  try { binary = atob(record.data); } catch { return fail(); }
  if (binary.length !== Math.ceil(record.bits / 8) || btoa(binary) !== record.data) return fail();
  const padding = binary.length * 8 - record.bits;
  if (padding && (binary.charCodeAt(binary.length - 1) & ((1 << padding) - 1))) return fail();
  const bitLength = record.bits;
  let offset = 0;
  function read(): number {
    if (offset >= bitLength) { if (offset++ >= bitLength + 31) return fail(); return 0; }
    const bit = (binary.charCodeAt(offset >>> 3) >>> (7 - (offset & 7))) & 1; offset++; return bit;
  }
  let low = 0, high = FULL - 1, code = 0;
  for (let i = 0; i < 32; i++) code = code * 2 + read();
  const [zero, one] = model(), output = new Uint8Array(total);
  let written = 0;
  for (const length of lengths) {
    let previous = 64;
    for (let i = 0; i < length; i++) {
      let prefix = 1, value = 0;
      for (let shift = 5; shift >= 0; shift--) {
        const context = previous * 64 + prefix;
        const middle = low + Math.floor((high - low + 1) * zero[context]! / (zero[context]! + one[context]!)) - 1;
        const bit = code > middle ? 1 : 0;
        if (bit) low = middle + 1; else high = middle;
        while (true) {
          if (high < HALF) { /* no offset */ }
          else if (low >= HALF) { low -= HALF; high -= HALF; code -= HALF; }
          else if (low >= QUARTER && high < 3 * QUARTER) { low -= QUARTER; high -= QUARTER; code -= QUARTER; }
          else break;
          low *= 2; high = high * 2 + 1; code = code * 2 + read();
        }
        update(zero, one, context, bit); prefix = prefix * 2 + bit; value = value * 2 + bit;
      }
      output[written++] = alphabet.charCodeAt(value); previous = value;
    }
  }
  const text = new TextDecoder().decode(output), strings: string[] = [];
  let start = 0;
  for (const length of lengths) { strings.push(text.slice(start, start + length)); start += length; }
  const canonical = encodeSearchChannel(strings);
  if (canonical.bits !== record.bits || canonical.data !== record.data) return fail();
  return strings;
}
