---
lastReviewedAt: 2026-09-15
lastReviewedCommit: 5db5d841963dee8c9d9c7b67e9c1babadbdd3566
lastReviewedNote: "Reviewed for PCR #12: complete source bundles, optional-language release/history compatibility, deterministic generated Fumadocs pages, structured views, exact downloads and static SEO/hosting boundaries. Full corpus build, source coverage and focused tests pass; production and workspace integration remain separate pending gates."
title: PCR Library Release Policy
docType: contract
scope: repo
status: active
authoritative: true
owner: tiangong-lca-pcr
language: en
whenToUse:
  - when publishing, revising, or recovering PCR library releases
whenToUpdate:
  - when publication, revision, immutable history, or recovery behavior changes
checkPaths:
  - builder/cli/index.mjs
  - builder/lib/builder-operations.mjs
  - builder/lib/published-revision-state.mjs
  - builder/lib/pcr-directory-transaction.mjs
  - docs/pcr-library-release-policy.md
related:
  - ../AGENTS.md
  - architecture.md
  - authoring-guide.md
---

# PCR Library Release Policy

Before first publication, PCR release state is authored in the top-level four-file current workspace. First
publication requires an explicit version and creates the managed release chain:

```bash
npm run pcr:publish -- --pcr <library/pcrs/...> --workspace current --version <semver>
```

After publication, the top-level files remain the current consumer-facing release. Each audited version also has an
immutable `releases/<semver>/` snapshot, and `release-history.yaml` is append-only. The current manifest carries
exact-byte hashes for both Markdown files and `structured.yaml`; lint and `pcr-core` fail closed when managed current
or archived release bytes do not match their recorded hashes.

Do not edit, sync, or bump a published/deprecated current workspace in place. Open a later version with an explicit,
greater target version, then operate only on the revision workspace:

```bash
npm run pcr:revise -- --pcr <library/pcrs/...> --version <target-semver>
npm run pcr:sync-structured -- --pcr <library/pcrs/...> --workspace revision
npm run pcr:lifecycle -- --pcr <library/pcrs/...> --workspace revision --status active --content-maturity reviewed_methodology --translation zh-CN=reviewed
npm run pcr:publish -- --pcr <library/pcrs/...> --workspace revision
```

The revision target is locked by `revision/revision.yaml`; revision publication therefore rejects `--version`.
A deprecated PCR cannot be reopened. Unpublished current records may still use `pcr:bump`; managed published,
deprecated, and revision workspaces may not.

Publication requires `active/reviewed_methodology`, reviewed Chinese translation, a valid SemVer, a deterministic
current projection, no unresolved or blocking review metadata, and passing material lint. Builder mutations run under
a per-PCR lock and replace the complete leaf through a recoverable directory transaction. Failed preflight leaves the
PCR unchanged. If an interrupted mutation reports recovery state, run:

```bash
npm run pcr:recover -- --pcr <library/pcrs/...>
npm run validate
```

Use `--force-stale-lock` only when ordinary recovery explicitly requires it and after verifying that no writer is
active. Never create or edit `revision/`, `releases/`, `release-history.yaml`, or builder transaction state manually.
Run `npm run validate` before and after publication or recovery.

## Optional languages and public document history

English and Chinese remain mandatory. Optional reading languages are explicit
members of `languages.available`; a missing declared artifact fails publication,
while an undeclared absent language never blocks the bilingual pair. Every included
translation must be reviewed. Revising English marks every dependent translation
out of sync and carries its file into the internal revision workspace.

A bilingual release retains schema v1 and its exact legacy artifact hashes. A
release containing additional languages uses schema v2 `markdown_sha256` keyed by
exactly the declared languages, plus structured and snapshot-manifest hashes.
Existing immutable snapshots are never rewritten to adopt the new format.

Public documentation reuses `inspectPublishedRevisionState` through the read-only
`readPcrDocumentHistory` bundle API. Every historical artifact is checked against
the validated release chain and returned with its original bytes. Internal revision
bodies are excluded. Website production is a separate deployment and does not
constitute a PCR publication or review action.
