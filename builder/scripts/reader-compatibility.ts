/** Reviewed PCR reader protocol. Pure transport validation: no runtime dependencies. */
export interface ReaderCapabilities {
  schema: 1;
  kind: "pcr-reader-capabilities";
  libraryFormats: readonly number[];
  projectionContracts: readonly string[];
  commandProtocol: number;
}
export interface ProductCompatibility {
  schema: 1;
  libraryFormat: number;
  projectionContracts: readonly string[];
  minimumReaderVersion: string;
  commandProtocol: number;
}
export const READER_CAPABILITIES_FILENAME = "reader-capabilities.json";
// Changing these declarations requires qualification against the actual reader.
export const READER_CAPABILITIES: Readonly<ReaderCapabilities> = Object.freeze({
  schema: 1, kind: "pcr-reader-capabilities", libraryFormats: Object.freeze([1]),
  projectionContracts: Object.freeze(["1", "2"]), commandProtocol: 1,
});
export const PRODUCT_COMPATIBILITY: Readonly<ProductCompatibility> = Object.freeze({
  schema: 1, libraryFormat: 1, projectionContracts: Object.freeze(["1", "2"]),
  minimumReaderVersion: "0.4.1", commandProtocol: 1,
});
function fields(value: unknown, names: readonly string[], label: string): Record<string, unknown> {
  if (value === null || typeof value !== "object" || Array.isArray(value)) throw new Error(`Invalid ${label}: expected an object.`);
  const data = value as Record<string, unknown>;
  if (Object.keys(data).length !== names.length || names.some(name => !Object.hasOwn(data, name)) || Object.keys(data).some(name => !names.includes(name))) throw new Error(`Invalid ${label}: missing or unknown keys.`);
  if (data.schema !== 1) throw new Error(`Unsupported ${label} schema.`);
  return data;
}
function positive(value: unknown, label: string): number {
  if (typeof value !== "number" || !Number.isSafeInteger(value) || value < 1) throw new Error(`Invalid ${label}.`);
  return value;
}
function unique<T>(value: unknown, parse: (item: unknown) => T, label: string): T[] {
  if (!Array.isArray(value) || value.length === 0) throw new Error(`Invalid ${label}: expected a nonempty array.`);
  const result = Array.from(value, parse);
  if (new Set(result).size !== result.length) throw new Error(`Invalid ${label}: duplicate values.`);
  return result;
}
function contract(value: unknown): string {
  if (typeof value !== "string" || !/^[1-9][0-9]*$/u.test(value)) throw new Error("Invalid projection contract.");
  return value;
}
function version(value: unknown): string {
  if (typeof value !== "string" || !/^(0|[1-9][0-9]*)\.(0|[1-9][0-9]*)\.(0|[1-9][0-9]*)$/u.test(value)) throw new Error("Invalid stable reader version.");
  return value;
}
export function validateReaderCapabilities(value: unknown): ReaderCapabilities {
  const data = fields(value, ["schema", "kind", "libraryFormats", "projectionContracts", "commandProtocol"], "reader capabilities");
  if (data.kind !== "pcr-reader-capabilities") throw new Error("Invalid reader capabilities kind.");
  return { schema: 1, kind: data.kind, libraryFormats: unique(data.libraryFormats, item => positive(item, "library format"), "library formats"),
    projectionContracts: unique(data.projectionContracts, contract, "projection contracts"), commandProtocol: positive(data.commandProtocol, "command protocol") };
}
export function validateProductCompatibility(value: unknown): ProductCompatibility {
  const data = fields(value, ["schema", "libraryFormat", "projectionContracts", "minimumReaderVersion", "commandProtocol"], "product compatibility");
  return { schema: 1, libraryFormat: positive(data.libraryFormat, "library format"),
    projectionContracts: unique(data.projectionContracts, contract, "projection contracts"),
    minimumReaderVersion: version(data.minimumReaderVersion), commandProtocol: positive(data.commandProtocol, "command protocol") };
}
/** Capability inclusion and minimum reader version are independent of content SemVer. */
export function assertReaderCompatibility(compatibility: ProductCompatibility, capabilities: ReaderCapabilities, readerVersion: string): void {
  const required = validateProductCompatibility(compatibility), reader = validateReaderCapabilities(capabilities);
  const actual = version(readerVersion).split(".").map(BigInt), minimum = required.minimumReaderVersion.split(".").map(BigInt);
  for (let index = 0; index < 3; index++) {
    const left = actual[index]!, right = minimum[index]!;
    if (left < right) throw new Error("Reader version is below minimumReaderVersion.");
    if (left > right) break;
  }
  if (!reader.libraryFormats.includes(required.libraryFormat) || required.projectionContracts.some(item => !reader.projectionContracts.includes(item)) || reader.commandProtocol !== required.commandProtocol) throw new Error("Reader capabilities do not satisfy product compatibility.");
}
/** Build declarations must describe the implementation qualified in this source. */
export function assertImplementedReaderCapabilities(value: unknown): ReaderCapabilities {
  const capabilities = validateReaderCapabilities(value);
  if (capabilities.commandProtocol !== READER_CAPABILITIES.commandProtocol || capabilities.libraryFormats.length !== READER_CAPABILITIES.libraryFormats.length || capabilities.libraryFormats.some(item => !READER_CAPABILITIES.libraryFormats.includes(item)) || capabilities.projectionContracts.length !== READER_CAPABILITIES.projectionContracts.length || capabilities.projectionContracts.some(item => !READER_CAPABILITIES.projectionContracts.includes(item))) throw new Error("Reader capabilities differ from the implemented PCR reader.");
  return capabilities;
}
