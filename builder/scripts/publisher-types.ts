import type { ProductIdentity } from './product-identity.ts';
import type { ProductManifest, ProductPackageReceipt, JsonObject } from './release-types.ts';

export interface BuildProof { schema: 1; identity: ProductIdentity; manifestSha256: string; artifactId: string; runId: string }
export interface PublicationContext {
  identity: ProductIdentity; toolchain: { node: string; npm: string }; runId: string; attempt: string;
  projectId?: string | null; retryWeb?: boolean; retryNpm?: unknown; eventName?: string;
}
export interface ReleaseHandle { id: number }
export interface ReleaseRecord extends ReleaseHandle { tag_name: string; draft: boolean; prerelease: boolean; body?: string | null; name?: string }
export interface ReleaseAsset { id: number; name: string; size: number; digest?: string | null; browser_download_url?: string }
export interface ActionArtifact { id: number; expired: boolean; size_in_bytes: number; digest?: string; workflow_run: { id: number; head_sha: string } }
export type AssetDescriptor = { size: number; sha256: string } & ({ bytes: Buffer; file?: never } | { file: string; bytes?: never });
export type RegistryState = { state: 'missing' | 'unknown' } | { state: 'present'; metadata: JsonObject };
export type LiveIdentity = { state: 'product'; identity: unknown } | { state: 'legacy'; sourceCommit: string } | { state: 'unknown' };
export interface DeploymentRef { sha: string; version: string | null }
export interface AttemptReceipt {
  schema: 1; identity: ProductIdentity; manifestSha256: string; runId: string; attempt: string;
  sequence: number; target: string; operation: string; state: string; details: JsonObject;
}
export interface WebAcceptance {
  verified: boolean; origin: string; identity: unknown; counts: unknown;
  checks?: { path: string; status: number; bytes?: number; sha256?: string }[];
}
export interface PublisherIO {
  assertBudget?(): Promise<void>;
  saveAttemptReceipt?(directory: string, receipt: AttemptReceipt): Promise<void>;
  getTag(tag: string): Promise<{ type: string; sha: string } | null>;
  registry(name: string, selector: string): Promise<RegistryState>;
  getDeploymentRef(): Promise<DeploymentRef | null>;
  getLiveIdentity(): Promise<LiveIdentity | null>;
  isAncestor(base: string, head: string): Promise<boolean>;
  getLatestRelease(): Promise<ReleaseRecord | null>;
  getRelease(tag: string): Promise<ReleaseRecord | null>;
  createRelease(body: { tag_name: string; target_commitish: string; name: string; body: string; draft: false; prerelease: true; make_latest: 'false' }): Promise<ReleaseRecord>;
  completeRelease(release: ReleaseHandle, body: { name: string; prerelease: false; make_latest: 'true'; body: string }): Promise<unknown>;
  listAssets(release: ReleaseHandle): Promise<ReleaseAsset[]>;
  readAsset(asset: ReleaseAsset, limit: number): Promise<Buffer>;
  putAsset(release: ReleaseHandle, name: string, descriptor: AssetDescriptor): Promise<{ reused: boolean; assetId?: number }>;
  assertActionsArtifact(proof: BuildProof): Promise<unknown>;
  manifestHash(directory: string): Promise<string>;
  verifyBundle(directory: string, identity: ProductIdentity): Promise<ProductManifest>;
  restoreReleaseAssets(release: ReleaseHandle, manifest: ProductManifest, proof: BuildProof): Promise<string>;
  restoreActionsArtifact(proof: BuildProof, identity: ProductIdentity): Promise<string>;
  fileDescriptor(directory: string, name: string): Promise<AssetDescriptor>;
  pause(milliseconds: number): Promise<void>;
  publishNpm(receipt: ProductPackageReceipt, directory: string, tag: string): Promise<void>;
  promoteLatest(receipt: ProductPackageReceipt): Promise<void>;
  verifyTarball(receipt: ProductPackageReceipt): Promise<{ bytes: number; sha256: string; integrity: string }>;
  verifyOfflinePair(directory: string, manifest: ProductManifest): Promise<{ verified: boolean; toolVersion: string; libraryVersion: string; sourceCommit: string }>;
  advanceDeploymentRef(sha: string, expectedSha: string | null): Promise<void>;
  triggerHook(): Promise<{ accepted: boolean }>;
  verifyWeb(manifest: ProductManifest, options?: { timeoutMs?: number }): Promise<WebAcceptance>;
  cleanup?(): Promise<void>;
}
export interface ProductionPublisherIO extends PublisherIO {
  assertRuntime(): Promise<void>;
  assertActionsArtifact(proof: BuildProof): Promise<ActionArtifact>;
}
