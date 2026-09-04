# PCR Goal Harness Design

**Status:** accepted for implementation by the task brief
**Date:** 2026-09-02
**Scope:** local Node.js ESM command-line orchestration for durable PCR batch production

## Outcomes

The harness turns a Goal policy prompt into a recoverable, machine-gated workflow. It does not keep scheduling truth in a chat context, does not run hidden authors, and does not permit authors to edit shared artifacts.

The first deployment targets the CPC 3.0 scope represented by
`library/pcrs/metal-products-machinery-and-equipment`. The selector `all` means all CPC leaves whose accepted or
coverage target lies under that category; it never means every CPC leaf in the repository.

## Boundary

The harness owns orchestration only. Existing Builder commands remain authoritative for PCR projection, schemas,
aliases, catalog, coverage, viewer data, and repository validation. Methodological judgment remains in the Goal policy
and in one-PCR author tasks. The harness converts machine-decidable rules into fail-closed gates.

Runtime state lives under `library/.pcr-builder-state/goals/<goal-id>/`, which is already ignored. Checked-in code and
schemas live under `builder/goal-harness/`, `builder/schemas/`, and `builder/cli/`.

## Components

### Configuration

A JSON-Schema-validated YAML configuration records Goal identity, project root, category path, classification
coordinate, bounded CPC selector, skip list, slot and batch limits, policy prompt path, tool paths, timeout/retry policy,
baseline allowlists, and Codex app-server settings. Defaults are six author slots and batches of six.

### Durable state

Each Goal has:

- an append-only hash-chained `events.jsonl` with sequence numbers and UTC timestamps;
- an atomically replaced `state.json` projection;
- a tokenized per-Goal lock;
- per-operation journals, reports, validation logs, and baseline fingerprints.

Task states are `discovered`, `classified`, `queued`, `preflight`, `authoring`, `author_review`, `valid_result`,
`integration_pending`, `integrating`, `integrated`, `validated`, and `completed`, with exceptional states
`manual_review`, `blocked`, `retryable_failure`, `failed`, and `cancelled`. Queue actions are `create_new`,
`promote_legacy`, `map_existing`, `manual_review`, and `blocked`. Transition guards and event identifiers make resume
idempotent.

### Dirty-baseline isolation

The harness builds a synthetic baseline without changing the user's HEAD, branch, working tree, or real index:

1. Populate a temporary `GIT_INDEX_FILE` from HEAD.
2. Stage only configured tracked roots and exact allowlisted untracked files.
3. Reject credentials, `.env`, dependency trees, temporary data, and runtime state.
4. Create a tree and commit with `git write-tree` and `git commit-tree`.
5. Store the commit under a private `refs/tiangong-goals/<goal-id>/baseline` ref.
6. Record exact-byte SHA-256 expectations for every landable path.

Every author and integration worktree starts from this commit. Landing uses a journaled, staged multi-file
compare-and-swap. A destination whose bytes differ from the recorded expectation is a conflict; the harness reports
the exact path and does not overwrite it.

### Planning

Planning reads the selected classification coverage, current accepted mapping, aliases, catalog, and manifest identity
only. It does not read unrelated PCR prose. Existing material coverage becomes `map_existing`; an unmapped semantic
empty scaffold is a `promote_legacy` candidate; a justified missing semantic identity becomes `create_new`; ambiguous
overlap becomes `manual_review`; unavailable required identity/tool evidence becomes `blocked`.

The planner prioritizes promotable scaffolds, reusable or high-demand products, and locality within a subcategory.
Mapping and manual-review work does not consume an author slot.

### Visible author adapter

The adapter launches a local `codex app-server --stdio`, performs the required initialize handshake, and creates one
durable, non-ephemeral thread per PCR with `thread/start`. The thread is named through `thread/name/set`, has its cwd
bound to the dedicated Git worktree, and receives a single-PCR prompt through `turn/start`. Thread and turn IDs are
persisted before polling. Resume/list/read operations use the same durable app-server protocol.

If the app-server cannot create or resume a durable visible task, dispatch fails closed. The harness keeps its queue,
baseline, worktree, and prepared prompt and does not fall back to `codex exec`, subagents, or a shared directory.

### Prompt compilation and author report

The long policy file is a Goal-level input and is fingerprinted. The compiler emits a bounded author prompt containing
only the assigned CPC, bilingual product name, exact PCR path, queue action, classification preflight, verified common
UUID audit records, official source seeds, four-file allowlist, methodology/range overrides, and report contract.

The app-server turn uses the checked-in author-report JSON Schema. The report records sources and original-text
verification, UUID reads and rejections, inventory totals, unresolved rows, range provenance, bilingual alignment,
structured sync, validation, and author commit SHA. Reports are stored in Goal state, never in PCR content.

### Author gates

The harness validates the commit tree against the synthetic baseline, not just the author's claims. Exactly the four
authorized leaf files may change. `structured.yaml` must equal output from the existing sync command, and a second
sync in a disposable review worktree must be clean.

The remaining gates cover schema-valid material PCRs, bilingual row/order/UUID/source alignment, exact inventory
accounting, UUID audit completeness, official Chinese names, atomic flows, forbidden set-like flow phrases, source
verification, range evidence, and anti-expansion thresholds. External inferred ranges require two independent,
original-text-verified, boundary/function-unit/product-state-compatible sources, with geographic and technical
differences explained and a non-mechanical synthesis. Insufficient evidence produces an unresolved range need rather
than blocking the PCR.

### Scheduler

`start` and `resume` run idempotent ticks. At most the configured number of author tasks are active. A completed or
blocked task immediately frees a slot. The earliest six valid, not-yet-snapshotted results form one deterministic
integration snapshot. Integration is serial; author dispatch for later snapshots may continue.

`stop` only records a scheduling stop request. It never deletes author worktrees, threads, commits, or reports.

### Integration and landing

An integration worktree applies the snapshot's author commits in recorded order. Only the integrator may update
mapping, aliases, indexes, catalog, coverage, viewer derivatives, and an accepted-mapping ADR. Positive edges require
material targets, reviewed relation semantics, accepted status, decision maker, UTC decision time, and a durable ADR
reference. Manual-review evidence is never published as an accepted edge.

The integrator reuses existing build/check/transaction commands, runs the full repository validation, and performs
material list, classification resolve, PCR guidance, structured fingerprint, coverage freshness, and viewer smoke
checks. Only a validated snapshot may land. Author worktrees remain until the result is recorded, integrated,
validated, consumed successfully, and present in the main project.

## CLI contract

The package exposes `goal:doctor`, `goal:plan`, `goal:start`, `goal:status`, `goal:resume`, `goal:integrate`,
`goal:land`, and `goal:stop`. Every command supports stable error codes, human-readable output, JSON output, a next
action, and dry-run where mutation is meaningful. Repeating a successful command is a no-op with the prior result.

## Safety invariants

- The user's real index and dirty working tree are never used as an author workspace.
- No untracked content enters a baseline without an exact allowlist entry.
- No author may modify shared files or more than one PCR leaf.
- No mapping edge is written before a valid, material PCR and accepted semantic decision exist.
- No author commit is integrated twice and no snapshot lands twice.
- No CAS conflict is overwritten.
- No temporary author or integration worktree is deleted automatically by `stop` or before successful landing.
- No credential content or lookup log is copied into PCR Markdown or structured projection.
