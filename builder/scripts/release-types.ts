/** Release transport boundaries stay dependency-free for the provider importer. */
export type JsonObject = Record<string, unknown>;
export function isRecord(value: unknown): value is JsonObject {
  return value !== null && typeof value === 'object' && !Array.isArray(value);
}
export function record(value: unknown, label = 'release object'): JsonObject {
  if (!isRecord(value)) throw new Error(`Invalid ${label}: expected an object.`);
  return value;
}
export function field(value: unknown, ...keys: string[]): unknown {
  for (const key of keys) value = isRecord(value) ? value[key] : undefined;
  return value;
}
export function text(value: unknown, label = 'release string'): string {
  if (typeof value !== 'string') throw new Error(`Invalid ${label}: expected a string.`);
  return value;
}
export interface HttpResult { status: number; body?: unknown }
export type GitHubRequest = (endpoint: string, method: string, body?: unknown) => Promise<HttpResult>;
export interface RegistryResponse { status: number; ok?: boolean; json?: () => Promise<unknown> }
export type RegistryFetch = (url: string, init?: RequestInit) => Promise<RegistryResponse>;
export async function responseJson(response: RegistryResponse): Promise<unknown> {
  if (!response.json) throw new Error('Registry response has no JSON body reader.');
  return response.json();
}
export type PackageKind = 'tool' | 'library';
export interface PackageDescriptor { name: string; prefix: string; manifest: string }
export interface PackageSpec extends PackageDescriptor {
  kind: PackageKind; version: string; tag: string; dist_tag: 'latest' | 'next';
}
export interface PublicationReceipt { name: string; version: string; tag: string; integrity: string; source_commit: string }
export type RegistryReceipt = Pick<PublicationReceipt, "name" | "version" | "tag"> & Partial<Pick<PublicationReceipt, "integrity" | "source_commit">>;
export interface PackageReceipt extends PackageSpec, PublicationReceipt {
  node: string; npm: string; filename: string; bytes: number; sha256: string;
}
export function publicationReceipt(value: unknown): PublicationReceipt {
  const data = record(value, 'publication receipt');
  return { name: text(data.name), version: text(data.version), tag: text(data.tag), integrity: text(data.integrity), source_commit: text(data.source_commit) };
}
