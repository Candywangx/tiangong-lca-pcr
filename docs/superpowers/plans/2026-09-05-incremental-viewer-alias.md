# Incremental Viewer And Alias Implementation Plan

> **For agentic workers:** REQUIRED: Use superpowers:subagent-driven-development (if subagents available) or superpowers:executing-plans to implement this plan. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Replace repeated full Viewer PCR/alias reads with snapshot-aware, content-addressed incremental publication that retains every validated Harness snapshot.

**Architecture:** Add an explicit `pcr-core` read context that validates aliases once, then build immutable per-PCR and per-alias objects behind atomic snapshot manifests. A repository coordinator gives Harness validations and landings one cross-Goal order; Viewer publication consumes the pinned validation commit and updates history/active pointers recoverably.

**Tech Stack:** Node.js ESM, built-in `node:test`, filesystem atomic rename/fsync, Git refs/worktrees, static browser JavaScript, existing YAML/Ajv contracts.

---

## Chunk 1: Bounded PCR reads

### Task 1: Shared repository read context

**Files:**

- Create: `packages/pcr-core/src/read-context.mjs`
- Modify: `packages/pcr-core/src/pcr-id-aliases.mjs`
- Modify: `packages/pcr-core/src/index.mjs`
- Test: `packages/pcr-core/index.test.mjs`

- [ ] **Step 1: Write failing tests for one alias validation across multiple content reads**

Add tests that construct a material fixture, create one explicit read context, read both languages, build guidance, and assert an injected alias-loader counter equals one. Add stale-context tests that independently mutate the catalog, material index, alias binding/registry, and every declared classification source and expect `PCR_READ_CONTEXT_STALE`. Prime the existing process-global catalog cache from another root and prove it cannot cross-contaminate or hide staleness from the explicit context. Attempt mutation through every exposed array/map reference and prove the context remains immutable.

- [ ] **Step 2: Run the focused tests and confirm RED**

Run: `node --test --test-name-pattern='read context' packages/pcr-core/index.test.mjs`

Expected: FAIL because `createPcrReadContext` and context-aware APIs do not exist.

- [ ] **Step 3: Implement the minimal explicit context**

Implement `createPcrReadContext({ root, aliasLoader })` with canonical root, exact fingerprints for the catalog, material index, alias binding/registry, and all catalog-declared classification sources, a validated alias array, and an immutable `Map`. Extend `findPcrIdAlias`, `readPcrMarkdown`, `buildGuidance`, and internal current-snapshot lookup to accept the context. Reject a context from another root or whose bound inputs changed. Explicit-context reads must bypass or independently verify the existing process-global catalog cache. Do not add another process-global cache.

- [ ] **Step 4: Run focused and core tests**

Run: `node --test --test-name-pattern='read context|alias|guidance' packages/pcr-core/index.test.mjs`

Expected: PASS.

- [ ] **Step 5: Commit**

```bash
git add packages/pcr-core/src/read-context.mjs packages/pcr-core/src/pcr-id-aliases.mjs packages/pcr-core/src/index.mjs packages/pcr-core/index.test.mjs
git commit -m "perf(core): reuse validated PCR read context"
```

## Chunk 2: Immutable incremental Viewer data

### Task 2: Canonical object and snapshot formats

**Files:**

- Create: `packages/pcr-viewer/scripts/snapshot-format.mjs`
- Create: `packages/pcr-viewer/scripts/snapshot-store.mjs`
- Create: `packages/pcr-viewer/schemas/viewer-object.schema.json`
- Create: `packages/pcr-viewer/schemas/viewer-snapshot-manifest.schema.json`
- Create: `packages/pcr-viewer/schemas/viewer-history.schema.json`
- Create: `packages/pcr-viewer/schemas/viewer-active.schema.json`
- Test: `packages/pcr-viewer/viewer-snapshot.test.mjs`

- [ ] **Step 1: Write failing format/store tests**

Cover deterministic canonical JSON, exact-byte SHA-256 names, Schema validation, create-only byte-conflict rejection, per-PCR and per-alias entry objects, stable prefix indexes, bootstrap manifest creation, unchanged object reuse, lifecycle-driven PCR removal and rename from only the new manifest, and immutable history preservation. Validate manifest predecessor lineage, every referenced object hash, and catalog/PCR/alias/coverage counts. Add invalidation tests for Viewer/object Schema changes, `generator_contract_sha256`, release/revision-marker presence or bytes, catalog entry changes, mapping/coverage entry changes, and unchanged unrelated PCR payload hashes.

Add fail-closed store tests for missing fsync/atomic-rename/create-if-absent capabilities; symlink, FIFO, and special-file substitution in artifact-store parents, staging paths, entrypoints, journals, manifests, and objects; corrupt/missing retained manifests; and missing or substituted pinned source refs.

- [ ] **Step 2: Run the snapshot tests and confirm RED**

Run: `node --test packages/pcr-viewer/viewer-snapshot.test.mjs`

Expected: FAIL because the modules do not exist.

- [ ] **Step 3: Implement canonical serialization and filesystem store**

Implement recursively sorted compact JSON with one trailing newline, `sha256:<hex>` digests, strict Ajv-backed object/manifest/index contracts, create-only immutable object writes, bounded immutable history pages, `history-head.json`, `active.json`, and a journal with `prepared`, `history_prepared`, `history_committed`, and `active_committed` recovery phases. Validate that the explicitly configured artifact store supports same-filesystem atomic rename and fsync; no implicit Harness store is permitted.

- [ ] **Step 4: Implement stable entry shards**

Represent PCR details and alias records independently. Use deterministic two-character SHA-256 prefix shards for catalog and alias indexes, and classification-coordinate/code-prefix shards for coverage. Reuse exact prior hashes when inputs are unchanged.

- [ ] **Step 5: Run snapshot tests**

Run: `node --test packages/pcr-viewer/viewer-snapshot.test.mjs`

Expected: PASS.

- [ ] **Step 6: Commit**

```bash
git add packages/pcr-viewer/scripts/snapshot-format.mjs packages/pcr-viewer/scripts/snapshot-store.mjs packages/pcr-viewer/schemas packages/pcr-viewer/viewer-snapshot.test.mjs
git commit -m "feat(viewer): add immutable snapshot store"
```

### Task 3: Incremental Viewer builder and CLI

**Files:**

- Modify: `packages/pcr-viewer/scripts/build-viewer-data.mjs`
- Modify: `packages/pcr-viewer/viewer-build.test.mjs`
- Modify: `package.json`

- [ ] **Step 1: Write failing incremental build tests**

Add fixture tests for opt-in snapshot bootstrap, `viewer:update --pcr <id>`, unchanged reuse, add/update/remove/rename deltas, alias change affecting one entry shard, catalog and coverage shard changes, generator/Schema invalidation, release/revision-marker invalidation, full `viewer:check`, and counters proving one-PCR update does not read unrelated Markdown or structured files and shared metadata/alias gates run at most once.

- [ ] **Step 2: Run focused tests and confirm RED**

Run: `node --test --test-name-pattern='snapshot|incremental|unrelated|alias shard' packages/pcr-viewer/viewer-build.test.mjs`

Expected: FAIL on missing incremental behavior.

- [ ] **Step 3: Refactor the builder around one read context**

Keep the existing monolithic `viewer:build` and old UI active in this intermediate commit. Add exported `publishViewerSnapshot` plus exact root scripts `viewer:update`, `viewer:check`, and `viewer:recover`; all three use `build-viewer-data.mjs` subcommands and require `--artifact-store <path>`. `viewer:update` also requires source identity, sequence, Goal/snapshot ids, and accepts changed PCR hints. Membership always comes from the newly generated material index; changed hints may reduce work but may not hide removals. Consume validated alias/catalog/coverage inputs once and write only changed objects.

- [ ] **Step 4: Add check and recovery commands**

Implement `npm run viewer:check -- --artifact-store <path>` for semantic full-vs-incremental comparison and `npm run viewer:recover -- --artifact-store <path>` for journal recovery. Keep JSON failures stable and stdout clean when JSON output is requested. Do not change the default static deployment contract until Task 4 switches data, UI, and server together.

- [ ] **Step 5: Run Viewer build tests**

Run: `node --test packages/pcr-viewer/viewer-build.test.mjs packages/pcr-viewer/viewer-snapshot.test.mjs`

Expected: PASS.

- [ ] **Step 6: Commit**

```bash
git add package.json packages/pcr-viewer/scripts/build-viewer-data.mjs packages/pcr-viewer/viewer-build.test.mjs
git commit -m "feat(viewer): publish incremental PCR snapshots"
```

## Chunk 3: Lazy browser and retained history

### Task 4: Catalog-first browser loading

**Files:**

- Modify: `packages/pcr-viewer/static/viewer-core.js`
- Modify: `packages/pcr-viewer/static/app.js`
- Modify: `packages/pcr-viewer/static/index.html`
- Modify: `packages/pcr-viewer/static/styles.css`
- Modify: `packages/pcr-viewer/scripts/serve-viewer.mjs`
- Modify: `packages/pcr-viewer/scripts/build-viewer-data.mjs`
- Modify: `package.json`
- Test: `packages/pcr-viewer/viewer-build.test.mjs`

- [ ] **Step 1: Write failing browser-contract tests**

Test active/manifest/catalog contracts, detail URL lookup, history-page traversal, snapshot query parameters, capture-vs-landing labels, stable URLs containing both snapshot and UI-bundle identities, and navigation to the permanently retained compatible bundle for an older Schema. Test `serve-viewer --help`, artifact mirroring, `no-cache` headers for mutable pointers/overlays, and immutable cache headers for hashed manifests, history pages, objects, and UI bundles. Test first activation from the selected accepted integration head.

- [ ] **Step 2: Confirm RED**

Run: `node --test --test-name-pattern='split viewer|history|lazy' packages/pcr-viewer/viewer-build.test.mjs`

- [ ] **Step 3: Implement lazy loading and history selection**

Boot from `active.json`, then fetch manifest and catalog. Fetch one detail object only when selected and cache it by hash. Add a history selector and stable snapshot/UI-bundle URL; redirect older schemas to their retained compatible bundle instead of rejecting them. Keep mutable pointers uncached and immutable objects cacheable. In this same commit, atomically switch the default `viewer:build`/serve layout from the monolith to the split contract so no repository commit pairs new data with the old UI.

- [ ] **Step 4: Run Viewer tests and smoke server**

Run: `node --test packages/pcr-viewer/viewer-build.test.mjs packages/pcr-viewer/viewer-snapshot.test.mjs`

Run: `npm run viewer:build && node packages/pcr-viewer/scripts/serve-viewer.mjs --help`

Expected: tests and build exit 0; help exits 0.

Run: `npm run viewer:check -- --artifact-store packages/pcr-viewer/dist`

Expected: exit 0 against the split snapshot store bootstrapped by `viewer:build` in this task.

- [ ] **Step 5: Commit**

```bash
git add package.json packages/pcr-viewer/static packages/pcr-viewer/scripts/build-viewer-data.mjs packages/pcr-viewer/scripts/serve-viewer.mjs packages/pcr-viewer/viewer-build.test.mjs
git commit -m "feat(viewer): load PCR details and history lazily"
```

## Chunk 4: Harness ordering and publication

### Task 5: Repository validation coordinator

**Files:**

- Create: `builder/goal-harness/repository-coordinator.mjs`
- Create: `builder/goal-harness/repository-coordinator.test.mjs`
- Modify: `builder/goal-harness/integration.mjs`
- Modify: `builder/goal-harness/integration.test.mjs`
- Modify: `builder/goal-harness/event-store.mjs`
- Test: `builder/goal-harness/core.test.mjs`

- [ ] **Step 1: Write failing coordinator tests**

Cover unordered candidate tokens, stale-head rejection, sequence allocation only at validation commit, guarded atomic source/head refs, crash recovery between refs and journal, committed-record projection into Goal state, and divergent Goals rebasing/revalidating before success.

- [ ] **Step 2: Confirm RED**

Run: `node --test builder/goal-harness/repository-coordinator.test.mjs builder/goal-harness/integration.test.mjs`

- [ ] **Step 3: Implement coordinator and integration hook**

Store repository state under `library/.pcr-builder-state/repository-coordinator/`. Use the existing tokenized lock style, durable phase journal, guarded `git update-ref --stdin`, and stable errors. Replace per-Goal integration-base selection with the accepted repository integration head. Project `viewer_publication: pending` into the existing snapshot object idempotently.

The durable `validation_committed` coordinator record must itself contain `viewer_publication: pending` before any Goal projection is attempted. Test a crash after coordinator commit but before Goal append; recovery must discover the obligation from coordinator state and repair the projection.

- [ ] **Step 4: Run coordinator/integration tests**

Run: `node --test builder/goal-harness/repository-coordinator.test.mjs builder/goal-harness/integration.test.mjs builder/goal-harness/core.test.mjs`

Expected: PASS.

- [ ] **Step 5: Commit**

```bash
git add builder/goal-harness/repository-coordinator.mjs builder/goal-harness/repository-coordinator.test.mjs builder/goal-harness/integration.mjs builder/goal-harness/integration.test.mjs builder/goal-harness/event-store.mjs
git commit -m "feat(goal): serialize repository integration snapshots"
```

### Task 6: Ordered landing and Viewer publication

**Files:**

- Create: `builder/goal-harness/viewer-publication.mjs`
- Create: `builder/goal-harness/viewer-publication.test.mjs`
- Modify: `builder/goal-harness/landing.mjs`
- Modify: `builder/goal-harness/integration.mjs`
- Modify: `builder/goal-harness/commands.mjs`
- Modify: `builder/goal-harness/config.mjs`
- Modify: `builder/cli/goal.mjs`
- Modify: `builder/schemas/goal-harness-config.schema.json`
- Modify: `package.json`
- Test: `builder/goal-harness/integration.test.mjs`
- Test: `builder/goal-harness/git-safety.test.mjs`

- [ ] **Step 1: Write failing landing/publication tests**

Test reverse-order cross-Goal landing failure, repository landing-head CAS, and publication from a pinned detached commit whose ref/tree is verified before and after reading. Cover every publication phase interruption, ordered gaps, simultaneous publishers, CAS substitution, create-only byte conflicts, active switched before journal, active switched before Goal projection, and history switched before its journal phase. Cover live, dead, stale, and untrusted locks: stale override requires an explicit force option and never steals a live lock. Test Viewer retry and landing provenance overlay updates.

Test first activation from the accepted integration head and complete reconstruction of a deleted artifact store by replaying coordinator history against each pinned source ref. Reconstruction must not read the current checkout. For every coordinator-committed snapshot after activation, a missing/substituted pinned ref is a fail-closed reconstruction error and history remains incomplete rather than fabricated. Only best-effort pre-activation backfill records may become explicit unavailable/divergent provenance and can never be promoted active.

- [ ] **Step 2: Confirm RED**

Run: `node --test builder/goal-harness/viewer-publication.test.mjs builder/goal-harness/integration.test.mjs builder/goal-harness/git-safety.test.mjs`

- [ ] **Step 3: Implement ordered landing**

Require the next repository sequence, derive expected landing fingerprints from coordinator state, and prohibit `--snapshot` from skipping a predecessor. Keep Viewer failure independent from canonical landing success.

- [ ] **Step 4: Implement publication and retry**

After validation commit, publish from the pinned source ref into the explicitly configured durable filesystem artifact store. Configuration is required; missing configuration or capability-probe failure fails closed before validation publication. Put the publication journal in repository-level state, not a Goal directory, and document its backup ownership. Reconcile committed coordinator records on `goal:resume`.

Wire exact Harness CLI subcommands `viewer-publish` and `viewer-recover` through `commands.mjs` and `builder/cli/goal.mjs`, with root scripts `goal:viewer-publish` and `goal:viewer-recover`. `viewer-publish` accepts the normal required `--config <path>` plus optional `--snapshot <id>`; `viewer-recover` accepts `--config <path>` and the explicit `--force-stale-lock` override. Verify `node builder/cli/goal.mjs viewer-publish --help`, `node builder/cli/goal.mjs viewer-recover --help`, `npm run goal:viewer-publish -- --config <fixture>`, and `npm run goal:viewer-recover -- --config <fixture> --force-stale-lock` in CLI tests. On success project manifest hash, sequence, and timestamps into Goal state; on failure leave validated state intact and active unchanged.

Replace the integration command's monolithic `viewer:build` with a bounded candidate check. Add an integration test proving one-PCR validation reads no unrelated PCR bodies while aliases/catalog/coverage and full repository correctness gates still run once.

- [ ] **Step 5: Run Harness tests**

Run: `node --test builder/goal-harness/*.test.mjs builder/cli/goal.test.mjs`

Expected: PASS.

- [ ] **Step 6: Commit**

```bash
git add package.json builder/goal-harness builder/cli/goal.mjs builder/schemas/goal-harness-config.schema.json
git commit -m "feat(goal): publish validated viewer snapshots"
```

## Chunk 5: Documentation and final verification

### Task 7: Document commands, ownership, and migration

**Files:**

- Modify: `AGENTS.md`
- Modify: `README.md`
- Modify: `docs/architecture.md`
- Modify: `builder/README.md`
- Modify: `builder/docs/tools/goal-harness.md`
- Add: `docs/superpowers/specs/2026-09-05-incremental-viewer-snapshots-design.md`
- Add: `docs/superpowers/plans/2026-09-05-incremental-viewer-alias.md`

- [ ] **Step 1: Update contracts and operator instructions**

Document artifact-store ownership, source refs, sequence/landing rules, history retention, Viewer commands, bootstrap/backfill limits, recovery, and the distinction between validated and landed.

- [ ] **Step 2: Run documentation and diff checks**

Run: `git diff --check`

Run when available: `docpact lint --worktree`

- [ ] **Step 3: Run complete verification**

Run: `npm run validate`

Run: `npm run viewer:build`

Run: `npm run viewer:check -- --artifact-store packages/pcr-viewer/dist`

Expected: all commands exit 0.

- [ ] **Step 4: Benchmark bounded work**

Run an unchanged update and a one-PCR update with instrumentation. Record elapsed time and assert the one-PCR update reads no unrelated Markdown/structured bodies and validates aliases no more than once.

- [ ] **Step 5: Commit documentation**

```bash
git add AGENTS.md README.md docs/architecture.md builder/README.md builder/docs/tools/goal-harness.md docs/superpowers
git commit -m "docs(viewer): document incremental snapshot publication"
```

- [ ] **Step 6: Review branch scope and push**

Compare with `origin/main`, ensure no PCR content or secrets are included, inspect every commit, then push:

```bash
git diff --check origin/main...HEAD
git diff --name-status origin/main...HEAD
git log --oneline origin/main..HEAD
git push -u origin codex/viewer-alias
```
