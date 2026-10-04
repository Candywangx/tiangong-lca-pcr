import type { UnknownRecord } from "../../pcr-core/src/types.ts";
import type { ViewerSnapshotStore } from "./snapshot-store.ts";

export type SnapshotRef = string;
export type RefMap = Record<string, SnapshotRef>;
export interface SnapshotCoordinate { system: string; version: string }
export interface SnapshotCoverageSource { coordinate: SnapshotCoordinate; ref: SnapshotRef }
export interface SnapshotSource {
  catalog: SnapshotRef; aliases: SnapshotRef; coverage: SnapshotCoverageSource[];
  release_revision_markers: RefMap;
}
export interface SnapshotCapture {
  source_ref: string; integration_commit: string; base_commit: string; tree_hash: string;
  validation_state: "validated"; ui_bundle_ref: SnapshotRef;
}
export interface SnapshotValidationSummary { status: "passed"; checks: number }
export type SnapshotCatalogScope = "material" | "all" | "legacy";
export interface BackendSnapshotManifest {
  schema_version: 1; kind: "viewer-snapshot-manifest"; snapshot_id: string;
  goal_id: string; harness_snapshot_id: string; captured_at: string; validated_at: string;
  validation_summary: SnapshotValidationSummary; catalog_scope: SnapshotCatalogScope;
  previous_snapshot_id: string | null; previous_manifest_ref: SnapshotRef | null;
  sequence: number; generator_version: string; generator_contract_sha256: SnapshotRef;
  schema_contract_sha256: SnapshotRef; source: SnapshotSource; capture: SnapshotCapture;
  predecessor: SnapshotRef | null; lineage: { renames: Record<string, string> };
  counts: { pcr: number; alias: number; coverage: number; catalog_shards: number; alias_shards: number; coverage_shards: number };
  refs: {
    pcr_entries: RefMap; alias_entries: RefMap; coverage_entries: RefMap;
    catalog_shards: RefMap; alias_shards: RefMap; coverage_shards: RefMap;
    catalog_root: SnapshotRef; alias_root: SnapshotRef; coverage_root: SnapshotRef;
  };
}
export type SnapshotObjectKind = "ui_bundle" | "pcr_detail" | "catalog_entry" | "alias_entry" | "catalog_shard" | "catalog_root" | "alias_shard" | "alias_root" | "coverage_entry" | "coverage_shard" | "coverage_root" | "history_page";
export interface SnapshotObjectIdentity {
  generator_contract_sha256: SnapshotRef; schema_contract_sha256: SnapshotRef;
  source_fingerprint: SnapshotRef; release_revision_marker: SnapshotRef | null;
}
export interface BackendViewerObject {
  schema_version: 1; object_kind: SnapshotObjectKind; identity: SnapshotObjectIdentity;
  entry: unknown;
}
export interface SnapshotHistoryEntry { sequence: number; manifest_ref: SnapshotRef }
export interface SnapshotHistoryHead { schema_version: 1; kind: "viewer-history-head"; page_ref: SnapshotRef; latest_sequence: number }
export interface SnapshotHistory { head: SnapshotHistoryHead | null; entries: SnapshotHistoryEntry[] }
export interface SnapshotHistoryPage { entries: SnapshotHistoryEntry[]; previous_page_ref: SnapshotRef | null }
export interface BackendViewerActive {
  schema_version: 1; kind: "viewer-active"; snapshot_id: string; snapshot_url: string;
  snapshot_hash: SnapshotRef; manifest_ref: SnapshotRef; sequence: number;
  cache_version: 1; ui_bundle_ref: SnapshotRef; validation_state: "validated";
}
export interface BackendSnapshotRoute {
  routing_schema_version: 1; kind: "viewer-snapshot-route"; snapshot_id: string;
  manifest_ref: SnapshotRef; manifest_schema_version: number; ui_bundle_ref: SnapshotRef;
  ui_bundle_id: SnapshotRef; ui_bundle_url: string;
}
export interface SnapshotPointerCas { old_ref: SnapshotRef | null; new_ref: SnapshotRef }
export interface SnapshotPublicationJournal extends UnknownRecord {
  schema_version: 1; kind: "viewer-publication-journal"; phase: string;
  manifest_ref: SnapshotRef; sequence: number; history_head: SnapshotHistoryHead;
  active: BackendViewerActive; source: SnapshotSource; capture: SnapshotCapture;
  source_fingerprint: SnapshotRef; reservation: { snapshot_id: string; sequence: number };
  cas: { history_head: SnapshotPointerCas; active: SnapshotPointerCas };
  pointer_capture?: UnknownRecord | null;
}
export interface SnapshotSourceVerification {
  phase: "before" | "after" | "retained"; source: SnapshotSource; capture: SnapshotCapture;
}
/** A verifier may return true or its existing explicit { valid: true } result. */
export type SnapshotSourceVerifier = (input: SnapshotSourceVerification) => unknown;
export interface SnapshotStoreOptions {
  root?: unknown; generatorVersion?: unknown;
  capabilities?: { fsync?: boolean; atomicRename?: boolean; createIfAbsent?: boolean };
  capabilityProbe?: ((input: { root: string }) => unknown) | null;
  sourceVerifier?: SnapshotSourceVerifier | null; staleLockMs?: number;
}
export interface SnapshotPublishInput extends UnknownRecord {
  snapshotId?: unknown; goalId?: unknown; harnessSnapshotId?: unknown;
  capturedAt?: unknown; validatedAt?: unknown; validationSummary?: unknown;
  catalogScope?: unknown; sequence?: unknown; generatorContractSha256?: unknown;
  source?: unknown; uiBundleUrl?: unknown; pcrEntries?: unknown; aliasEntries?: unknown;
  coverageEntries?: unknown; pinnedSources?: unknown; failurePhase?: unknown;
  forceStaleLock?: unknown;
  onPhase?: ((phase: string, store: ViewerSnapshotStore) => unknown) | null;
}
export interface SnapshotPublishResult { manifestRef: SnapshotRef; sequence: number; reused: number }
export type SnapshotRecoverResult = { recovered: false } | { recovered: true; manifestRef: SnapshotRef; sequence: number };
export type SnapshotAbandonResult = { abandoned: false } | { abandoned: true; archive_ref: SnapshotRef; manifest_ref: SnapshotRef };
export interface SnapshotPinnedSource { path: string; ref: SnapshotRef }
export interface SnapshotCapabilities { readonly root: string; readonly same_filesystem: true; readonly fsync: true; readonly atomic_rename: true; readonly create_if_absent: true }

export interface ViewerDeploymentOptions {
  stageDir?: unknown; outDir?: unknown; failurePhase?: unknown; forceStaleLock?: boolean;
  staleLockMs?: number; onPhase?: ((phase: string) => unknown) | null;
  beforePointerCommit?: (() => unknown) | null;
}
export interface ViewerDeploymentRecoverOptions { outDir?: unknown; forceStaleLock?: boolean; staleLockMs?: number }
export interface ViewerDeploymentResult { committed: true; recovered: false; generation: string }
export type ViewerDeploymentRecovery = { recovered: false } | { recovered: true; phase: string; generation: string };
