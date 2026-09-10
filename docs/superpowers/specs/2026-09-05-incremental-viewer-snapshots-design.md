---
title: Incremental PCR Viewer Snapshot Design
docType: design
scope: repo
status: accepted
authoritative: false
owner: tiangong-lca-pcr
language: en
createdAt: 2026-09-05
---

# Incremental PCR Viewer Snapshot Design

## Decision

Publish PCR Viewer data immediately after a Harness integration snapshot reaches the existing `validated` state.
Every validated snapshot becomes a required immutable historical view; a failed publication remains pending and is
retried until retained. The browser defaults to the latest complete snapshot and may switch to any retained snapshot.

Viewer data remains disposable derived data. Canonical methodology truth stays in `library/pcrs/**`; mappings,
aliases, catalog, and coverage keep their existing authoritative or derived roles. A Viewer snapshot records exactly
which validated integration commit it projects and must not imply that the commit has already landed in the user's
main worktree.

## Problem

The current Viewer build creates one monolithic JSON file. For every material PCR it reads both localized Markdown
files and builds guidance. Those operations independently resolve legacy aliases, and alias resolution currently
revalidates the complete alias registry and scans PCR identity inventory for each lookup. With hundreds of material
PCRs, one integration snapshot therefore repeats the same repository-wide audit more than one thousand times.

The browser also downloads the complete monolith at startup even when the reader opens only one PCR. A full rebuild
has a simple consistency model, but it makes successful Harness integration wait for work unrelated to the PCRs in
that snapshot.

## Goals

- Make a successfully validated Harness snapshot visible without rereading every PCR body.
- Generate a PCR payload only when its exact inputs or the payload contract changed.
- Validate and compile aliases once when alias inputs changed, then perform in-memory lookups.
- Load the catalog first and PCR detail payloads on demand in the browser.
- Preserve every successfully validated Harness integration snapshot from the activation of this mechanism onward,
  even when Viewer publication must be retried.
- Keep each historical snapshot internally consistent and reproducible from recorded source fingerprints.
- Make interruption, retry, concurrent publication, and rollback fail closed.
- Retain a deterministic full rebuild/check path for bootstrap, audit, recovery, and contract migrations.

## Non-goals

- The Viewer does not become a PCR editor or methodology database.
- A Viewer publication does not land a Harness integration commit.
- Candidate or manual-review classification evidence does not become an accepted mapping through the Viewer.
- The design does not require committing `packages/pcr-viewer/dist/**` to the source branch.
- The incremental path does not weaken PCR, mapping, alias, catalog, coverage, projection, or repository validation.

## Repository-wide Integration Order

Viewer history is global to the repository, while current Harness state and integration-base selection are scoped to
one Goal. A global Viewer sequence cannot make divergent Goal commits into a coherent latest library. The Harness
therefore gains a repository-level integration coordinator and source ref.

Before integration, the coordinator reserves an unordered candidate token and observes the current accepted
integration head. The integration worktree must use that head as its base. The token prevents duplicate work for the
same Goal snapshot but does not reserve a history position. If another Goal advances the head before validation
commits, the stale candidate is not successful: it must be rematerialized on the new head and all affected integration
gates must run again. Only when validation compare-and-swap confirms that the observed head is still current does the
coordinator prepare the next repository sequence. It first writes and durably flushes a `validation_prepared` journal
record containing the expected old head, integration commit, source ref, Goal/snapshot identity, and sequence. One Git
`update-ref` transaction then advances the repository integration head and creates the pinned source ref with exact
old-value guards. Finally, the coordinator advances its journal to `validation_committed` and durably flushes it. That
global journal phase is the authoritative validation commit marker; the owning Goal's `snapshot_validated` event is an
idempotent projection, not a second source of truth.

If a crash occurs after ref updates but before `validation_committed`, recovery compares both refs with the prepared
record: exact expected refs advance the journal, unchanged refs retry the guarded transaction, and any other
combination fails closed. Recovery scans committed coordinator records and repairs missing Goal projections. The
publication sequence is this validation-commit sequence. Failed or stale candidates consume no sequence, so
repository order and Git ancestry cannot be inverted.

The coordinator creates an immutable, non-automatically-cleaned source ref for every validated snapshot:

```text
refs/tiangong-viewer-sources/<goal-id>/<harness-snapshot-id>
```

This makes the active Viewer lineage monotonic across Goals and prevents a later snapshot from interpreting content
from another Goal as a removal merely because it began on an older branch. The repository integration sequence, not
timestamps from independent Goal event stores, defines history order.

## Repository-wide Landing Order

Landing uses the same repository sequence and is serial across Goals. Sequence `N` may land only after every earlier
sequence has landed. An explicit snapshot selection must fail closed rather than skip a pending predecessor. Viewer
publication failure does not block landing, but it also does not relax landing order.

Landing compare-and-swap expectations, the accepted landing head, and landed path fingerprints are owned by the
repository coordinator rather than an individual Goal. This ensures that a later integration whose catalog, mapping,
or coverage includes earlier PCRs cannot land its shared derivatives before those earlier PCR files are present in the
main worktree. Landing advances the repository landing head and projects success back into the owning Goal event
store. Different Goals invoking `goal:land` in reverse order must receive a stable ordering error and make no changes.

## Publication Boundary

The existing Harness integration sequence continues to build aliases, catalog, and coverage and to run repository and
consumer gates in the isolated integration worktree. The monolithic `viewer:build` gate is replaced by a bounded
Viewer candidate check during integration. After all gates pass and the integration commit exists, the committed
repository coordinator record carries `viewer_publication: pending`. Its Goal projection records the validated state,
repository sequence, pinned source ref, and pending publication together. There is no crash window in which
authoritative validation is durable but the requirement to publish it is absent. The repository-level publisher
reconciles committed coordinator records, Goal projections, and publication history at startup and deterministically
repairs missing projections or pending records.

Publication reads only from the pinned `integration_commit` Git tree, materialized in a temporary detached read
worktree when filesystem APIs are required, and writes to the configured Viewer artifact store. It verifies the source
ref, commit, and tree before and after reading and never treats ignored files as inputs. It never reads PCR content
from either a mutable integration worktree or the user's dirty main worktree. The publish operation is idempotent on
this identity:

```text
goal_id + harness_snapshot_id + repository_sequence + integration_commit
+ viewer_schema_version + generator_contract_sha256
```

Successful publication records `viewer_snapshot_published` with the manifest hash and publication sequence. If
publication fails, the Harness integration remains validated, the current Viewer remains unchanged, and the separate
Viewer publication state becomes retryable. `goal:resume` and an explicit Viewer publish command may retry without
rerunning author tasks.

All publications use one repository-wide publication journal. A short critical section reserves ordering; immutable
objects may then be generated without holding the lock. A second short critical section verifies the reservation and
commits history and active pointers with compare-and-swap. `active.json` must not advance across an unpublished
reserved sequence. This preserves a gap-free history of validated Harness snapshots.

## Durable Artifact Store And Deployment Cache

Permanent history has one owner: a configured `artifact_store`. The first implementation is a filesystem store that
must support durable flush, create-if-absent files, atomic same-filesystem rename, exclusive locks, and compare-and-swap
of small entrypoints. Harness publication fails closed when no conforming store is configured or its capability probe
fails. The store and repository-level publication journal must be included in the operator's backup policy; neither
may live only inside an individual Goal state directory.

`packages/pcr-viewer/dist/**` is a replaceable deployment cache. It may mirror or serve an artifact store, but it does
not satisfy retention and may be deleted at any time. A remote/static-hosting adapter is a later boundary and may
claim equivalent atomic publication only when it supplies conditional writes and an atomic release pointer.

Pinned Git source refs provide an independent reconstruction input, not a replacement for artifact-store durability.
The publisher verifies that every retained history record has both a manifest in the artifact store and its pinned
source ref. Ref removal requires an explicit retention-policy change and is forbidden by this design.

## Artifact Model

The generated artifact store uses immutable, content-addressed objects and small mutable entrypoints:

```text
<artifact-store>/
  data/
    active.json
    history-head.json
    history/<page-sha256>.json
    provenance/<viewer-snapshot-id>.json
    snapshots/<viewer-snapshot-id>/manifest.json
    objects/catalog-entry/<sha256>.json
    objects/catalog-index/<sha256>.json
    objects/pcr/<sha256>.json
    objects/alias-entry/<sha256>.json
    objects/alias-index/<sha256>.json
    objects/coverage-entry/<sha256>.json
    objects/coverage-index/<sha256>.json
  ui/<ui-bundle-sha256>/
    index.html
    app.js
    viewer-core.js
    styles.css
```

`active.json` contains only the current Viewer snapshot id, manifest URL, manifest SHA-256, publication sequence, and
cache/version metadata. `history-head.json` points to bounded immutable history pages, so startup metadata does not
grow with retention. Each snapshot manifest contains:

- Viewer and object schema versions;
- Goal id, Harness snapshot id, publication sequence, integration commit, base commit, and timestamps;
- capture state, explicitly `validated` and not necessarily `landed`;
- previous Viewer snapshot id and manifest hash;
- catalog scope and summary counts;
- source and generator fingerprints;
- catalog, alias, and coverage Merkle/root index hashes;
- PCR id to immutable payload hash mappings;
- a permanent compatible UI bundle hash;
- validation result summaries.

Every immutable object includes its kind and schema version. Its filename digest is computed over a canonical JSON
encoding: UTF-8, recursively sorted object keys, JSON-defined finite numbers only, no insignificant whitespace, and
exactly one trailing newline. Content-addressed objects must not contain generation timestamps. Existing objects with
the expected digest are reused byte-for-byte and are never overwritten.

The artifact store retains every manifest, UI bundle, and object reachable from any history page. A deleted deployment
cache can be recreated from the store. If the store itself must be reconstructed, the publisher uses repository-level
history records and pinned integration refs; it never substitutes the current checkout for missing historical source.

## PCR Payloads And Fingerprints

One PCR detail object contains the data currently embedded in the monolith for that PCR:

- catalog metadata and deterministic `search_text`;
- available `en-US` and `zh-CN` Markdown;
- structured guidance and sources;
- readiness and classification references;
- exact input and generator fingerprints.

The PCR input fingerprint covers the exact bytes and relative paths of every managed file whose presence or content
can affect current-snapshot resolution, including the leaf's four canonical files and applicable release-history,
release, or revision markers. It also covers the Viewer payload schema version and
`generator_contract_sha256`. The generator digest covers every code file, Schema, controlled-vocabulary artifact, and
configuration value that can change catalog metadata, `search_text`, Markdown selection, guidance, or serialized
bytes. A published or revision workspace must never be mixed accidentally. A generator-contract change invalidates
reuse even when PCR files are unchanged.

The material index produced by catalog publication defines snapshot membership. Comparing it with the previous
snapshot detects additions, removals, path/id changes, and metadata changes. For each retained PCR:

- unchanged input and generator fingerprints reuse the previous object hash;
- new or changed fingerprints generate and validate one new payload;
- removed or no-longer-material PCR ids are omitted from the new manifest but remain reachable from history;
- a renamed identity is represented as removal plus addition, with redirect behavior coming only from the validated
  alias registry.

The publisher must not infer removals only from the Harness task list. Shared catalog and lifecycle changes can alter
membership, so the newly built material index is always compared with the previous manifest.

## Shared Read Context

`pcr-core` gains a repository read context for one validated source root. Context construction validates the catalog,
material index, alias binding, alias registry semantics, and declared classification sources once and builds immutable
in-memory maps. Markdown, guidance, and alias APIs may accept this context instead of reconstructing repository-wide
state for every PCR.

The context is bound to exact source fingerprints. It must be discarded rather than reused when a bound file changes.
This is an explicit per-build object, not an unbounded process-global cache, so tests and long-running processes cannot
silently observe stale repository state.

If the alias registry and every bound dependency have the same fingerprints as the prior Viewer snapshot, the prior
alias root and shards are reused without revalidation. If any bound input changes, the registry is fully validated
once, compiled to an in-memory map keyed by `source_pcr_id`, and emitted as changed entry and index objects. Individual
content reads then use the in-memory map; they never parse or scan the whole alias registry.

Alias output is split into immutable objects per `source_pcr_id`. Stable prefix shards map source ids to entry hashes,
and a small root index maps prefixes to shard hashes. When alias truth changes, integration retains its existing full
global semantic gate, but Viewer publication consumes that exact attestation and emits only changed alias entries and
the affected index path. It does not rerun a PCR-inventory scan for every alias or PCR read.

Catalog metadata is likewise one immutable entry per PCR with stable prefix indexes. Coverage is one immutable entry
per classification coordinate and code, with stable code-prefix indexes. A changed mapping therefore replaces only
affected catalog/alias/coverage entries, affected prefix shards, and root indexes. A mapping, alias, catalog, or
coverage change does not force unrelated PCR Markdown and guidance payloads to be regenerated.

## Transaction And Recovery

Publishing is a journaled transaction with these phases:

1. Acquire the repository-wide lock, verify its owner token, bind the already allocated validation sequence, record
   the source identity and prior entrypoint digests, then release the lock.
2. Read and verify the previous active manifest and source fingerprints.
3. Build required new content objects and UI bundle in a no-follow staging directory on the artifact-store filesystem.
4. Validate their schemas, exact-byte digests, references, and counts without fixing a predecessor snapshot.
5. Install only the new immutable content objects and UI bundle with create-only semantics. A later sequence must not
   install its snapshot manifest while an earlier sequence is not yet durably published.
6. Reacquire the lock and verify the reservation, source ref, prior entrypoint digests, and that every earlier sequence
   is durably published. The current active sequence must be exactly `N-1`. Build the snapshot manifest now from that
   active predecessor, validate its lineage and references, and install it with create-only semantics.
7. Build and install the new immutable bounded history page. Record its manifest hash, expected old history-head
   digest, and expected new history-head digest in journal phase `history_prepared`, then durably flush the journal.
   Atomically replace `history-head.json` using compare-and-swap, advance the journal to `history_committed`, and
   durably flush it.
8. Atomically replace `active.json` last using compare-and-swap. A valid active pointer is the user-visible publication
   commit marker.
9. Set journal phase `active_committed`, durably flush it, append the idempotent success projection to the owning
   Harness event store, then release the lock.

An interruption before `history_prepared` leaves no discoverable partial snapshot. During `history_prepared`, recovery
compares `history-head.json` with both recorded digests: the old digest retries the compare-and-swap, the expected new
digest advances the journal, and any other value fails closed. After `history_committed` but before the active
compare-and-swap, recovery verifies history and completes the active switch. If the active compare-and-swap completed
but the journal did not reach `active_committed`, recovery verifies the active sequence, manifest URL, and exact
manifest hash, then advances the journal rather than republishing or allocating a second sequence. After
`active_committed`, a missing Goal projection is appended idempotently. Any other journal/history/active combination
fails closed. Repeating a completed step verifies and reuses the same bytes.

Only unreferenced staging files and failed temporary artifacts may be removed automatically. Because every validated
snapshot must be retained, garbage collection must never delete an object reachable from any retained manifest.

## Browser Loading And History

At startup the browser loads `active.json`, its exact manifest, and the referenced lightweight catalog object. It does
not load every PCR body. Selecting a PCR fetches its content-addressed detail object and caches it for the session.

The UI exposes the active snapshot identity and capture status. It labels a `validated` integration snapshot as
captured after validation and does not claim that it is present on the main branch. A separate mutable provenance
overlay, updated by landing through compare-and-swap, may report current landing status and `landed_at`; absence of the
overlay means unknown, not unlanded. The history control follows paginated immutable history pages and switches to the
selected immutable manifest. A copied historical URL includes both the Viewer snapshot id and compatible UI bundle
hash so it remains stable after the active pointer or current UI advances.

Mutable entrypoints and provenance overlays use revalidation/no-cache behavior. Immutable manifests, history pages,
objects, and UI bundles may use long-lived immutable caching because their URLs and digests change with their bytes.
Every retained manifest points to a permanently retained compatible UI bundle. A schema migration creates a new
projection revision and bundle; it never rewrites an old manifest or makes an older snapshot unviewable.

## Full Rebuild And Audit

Incremental publication is the normal Harness path. A full command remains available for four cases:

- initial bootstrap or reconstruction of a missing artifact store;
- Viewer/object schema or generator contract migration;
- explicit consistency audit in CI or maintenance;
- recovery when prior Viewer metadata is unavailable or invalid.

The full builder creates the same object and manifest contracts as the incremental publisher. A check mode rebuilds a
candidate from canonical source, compares semantic PCR/catalog/alias/coverage references with the selected snapshot,
and reports drift without switching `active.json`.

The strong guarantee to retain every validated snapshot begins when the repository-level coordinator and durable
artifact store are activated. The first deployment creates a bootstrap snapshot for the selected accepted integration
head. Older Harness snapshots are best-effort backfill because their global order, ancestry, or source commits may be
unavailable. Available older branches retain their actual lineage instead of being presented as one ancestry chain;
missing sources are shown as unavailable provenance records and never fabricated from the current checkout.

## Failure And Concurrency Semantics

- Viewer failure never mutates PCR, mapping, alias, catalog, or coverage truth.
- Viewer failure never changes an integration snapshot from `validated` to a failed integration state.
- The prior active Viewer remains usable until a complete successor is atomically activated.
- Publication retries are idempotent for the same source identity.
- Different goals may prepare objects concurrently, but reservation and commit are serialized by the repository-wide
  Viewer lock and sequence journal.
- A stale lock may be overridden only through an explicit force option after confirming no writer is active.
- Compare-and-swap protects `active.json` and `history-head.json` from lost updates or a substituted publication base.
- A later snapshot cannot become active while an earlier reserved validated integration snapshot is unpublished.
- Landing cannot skip an earlier repository sequence, even when the snapshots belong to different Goals.
- Historical manifests and referenced objects are immutable, even after the source snapshot later lands or a PCR is
  revised, deprecated, renamed, or removed.

## Compatibility And Rollout

The new data contract intentionally supersedes the monolithic schema. Static assets and data must migrate together.
Rollout proceeds in bounded stages:

1. Add shared read-context and instrumentation while keeping the monolithic builder behavior.
2. Add object schemas, fingerprinting, immutable store, full bootstrap, and audit/check commands.
3. Change the browser to catalog-first lazy detail loading, versioned UI bundles, and historical snapshot selection.
4. Add incremental delta generation and transaction recovery.
5. Connect validated Harness snapshots to durable Viewer publication and retry state.
6. Bootstrap/backfill available history, compare the active snapshot semantically with a full build, then retire the
   monolithic file path.

During migration, a build must never combine old static assets with the new split-data contract. The old monolithic
artifact may be read only by the old UI until the atomic deployment switch.

## Verification

Tests must cover:

- one shared context performs alias validation once across multiple PCR reads;
- unchanged PCR inputs reuse the exact prior object hash;
- add, update, lifecycle removal, rename, and alias redirect deltas;
- mapping/alias/coverage changes do not regenerate unrelated PCR payloads;
- generator/schema version changes force the required rebuild boundary;
- payload, manifest, lineage, count, and exact-byte digest validation;
- interruption at every transaction phase followed by idempotent recovery;
- simultaneous publishers, stale locks, and compare-and-swap conflicts;
- divergent Goals being forced onto the repository integration head before validation;
- coordinator ref updates interrupted before the authoritative `validation_committed` phase and missing Goal
  validation projections repaired from committed coordinator records;
- different Goals invoking landing out of repository order and receiving a fail-closed result;
- a crash after active publication but before Goal-state projection;
- history committed without active, and active committed without the matching journal phase;
- history-head compare-and-swap completed before the `history_committed` journal phase;
- Viewer failure preserving the prior active snapshot and validated Harness state;
- ordered retry with no missing validated snapshot in history;
- catalog-first browser boot, lazy PCR fetch, historical selection, and immutable URLs;
- rendering every retained historical schema through its permanently referenced UI bundle;
- semantic equivalence between a full build and an incrementally assembled snapshot;
- full repository validation and Viewer smoke checks in the integration worktree.

Timing is observed but not used as a flaky correctness assertion. Tests instead assert bounded work: one-PCR snapshots
must not read unrelated PCR Markdown or structured content or rebuild unrelated guidance; one integration snapshot may
perform required repository-wide metadata, alias, and correctness gates once, but content reads must consume their
attestation rather than repeat them per PCR. Changed aliases, catalog entries, and coverage entries must update only
their affected stable shards.

## Risks Accepted

This design adds repository-level integration coordination, durable-store operations, transaction, schema, cache, and
recovery complexity compared with one replaceable JSON file. It also allows history metadata and changed objects to
grow without bound because every validated snapshot is retained. Stable entry/prefix shards and content addressing
limit growth to changed records, indexes, manifests, history pages, and new UI bundles; they do not make retention
free.

These costs are accepted in exchange for bounded integration latency, lazy browser loading, exact historical views,
and atomic rollback. The full rebuild/check path remains the independent defense against incremental drift.
