# PCR Goal Harness Implementation Plan

**Goal:** Build, test, and run a recoverable local CLI harness for visible, one-PCR-per-worktree Codex authors.

**Architecture:** Node.js ESM modules provide schema-validated configuration, hash-chained state, Git-plumbing baseline
and CAS operations, an app-server JSONL client, author gates, scheduling, integration, and CLI presentation. Existing
Builder commands remain the source of truth for projections and generated shared artifacts.

## 1. Contract tests and schemas

- Add Goal config and author-report JSON Schemas.
- Add tests for valid/invalid configuration, defaults, and author report accounting.
- Implement strict Ajv loaders and stable error codes.

## 2. State machine and event store

- Add transition-table tests, including invalid transitions and idempotent replay.
- Add append-only event/hash and atomic projection recovery tests.
- Implement locking, events, projection, and stop intent.

## 3. Planner and scheduling

- Add temporary-fixture tests for CPC scoping, queue classifications, priority, rolling slots, blocked replacement, and
  exactly-once six-result snapshots.
- Implement bounded planning and pure scheduler decisions.

## 4. Synthetic baseline and worktrees

- Add temporary Git fixture tests proving real index/working tree preservation, allowlisted dirty inclusion, sensitive
  exclusion, author worktree reuse, and no duplicate creation.
- Implement Git plumbing, path validation, baseline fingerprints, and dedicated author/integration worktrees.

## 5. Codex app-server adapter

- Add protocol fixture tests for initialize, durable thread creation/naming/turn start, persisted IDs, resume, errors,
  and fail-closed behavior without `codex exec` fallback.
- Implement the JSONL client and adapter.

## 6. Prompt compiler and author gates

- Add snapshot/report tests and fixture PCRs for unauthorized diffs, total accounting, atomic/set-flow rejection,
  bilingual mismatch, range one-source/lower-equals-upper failures, UUID audit, source evidence, row thresholds, and
  deterministic structured sync.
- Implement bounded prompts, report validation, commit-tree inspection, PCR parsing, UUID/source/range/translation
  gates, and isolated sync review.

## 7. Integration and CAS landing

- Add temporary Git fixture tests for deterministic snapshots, serial integration, mapping acceptance requirements,
  exactly-once integration, journal recovery, safe landing, and conflict fail-closed behavior.
- Implement snapshot worktrees, Builder command orchestration, smoke checks, staged CAS, and recovery.

## 8. CLI and documentation

- Add CLI tests for help, human/JSON output, stable errors, next actions, dry-run, resume, and stop semantics.
- Wire package scripts and document configuration, commands, state layout, recovery, and app-server requirements.

## 9. Verification and staged rollout

- Run focused unit tests, the complete test suite, and `npm run validate` in the development worktree.
- Run `goal:doctor` against the real project and policy prompt.
- Run real `goal:plan --dry-run` and audit its CPC scope, baseline manifest, allowlists, and permissions.
- Dispatch one visible author, confirm task visibility/recovery, validate only-four-file output and machine report, then
  integrate and land it safely.
- Only after the one-slot path passes, resume with six rolling visible authors and serial six-result snapshots.
