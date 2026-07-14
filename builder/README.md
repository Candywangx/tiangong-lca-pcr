# PCR Library Builder

This directory contains CLI tools, schemas, templates, fixtures, controlled vocabularies, and authoring documentation for maintaining the PCR library.

The builder treats classification systems as inputs and mappings. It does not make PCR records subordinate to any one classification system.

Public PCR consumption tools live under `packages/` and `skills/`. Do not add Agent-facing model-construction commands to `builder/cli/`; keep this directory focused on creating, updating, validating, and publishing PCR records.

## Directory Shape

Machine-facing and execution-facing assets stay directly under `builder/`. Human and agent documentation lives under `builder/docs/`.

```text
builder/AGENTS.md
builder/cli/
builder/lib/
builder/scripts/
builder/schemas/
builder/templates/
builder/fixtures/
builder/vocab/
builder/docs/
  index.md
  workflows/
  contracts/
  methods/
  tools/
  prompts/
```

- `builder/AGENTS.md` is the local agent routing and hard-rule entrypoint.
- `builder/lib/` contains builder implementation modules behind the CLI, including scaffold, lint, lifecycle, Markdown table parsing, and structured projection logic.
- `builder/docs/index.md` is the human-readable builder documentation map.
- `builder/docs/workflows/` contains task runbooks for creating, updating, translating, reviewing, and publishing PCRs.
- `builder/docs/contracts/` defines durable authoring contracts for Markdown, manifest, structured projection, evidence, and UUID references.
- `builder/docs/methods/` contains reusable modelling method notes that support the contracts.
- `builder/docs/tools/` explains authoring-time tools, Tiangong CLI lookup, and usable evidence sources.
- `builder/docs/prompts/` contains thin entry prompts for Codex, Claude Code, and PCR reviewers.
- `builder/vocab/` is the only hand-authored source for controlled tokens. `npm run vocab:generate` projects it into the shared runtime module and JSON Schema used by lint, core, and the public CLI.

## Builder CLI

```bash
npm run init
npm run lint
npm run vocab:generate
npm run pcr:sync-structured -- --pcr <library/pcrs/...> [--workspace current|revision]
npm run pcr:lifecycle -- --pcr <library/pcrs/...> [--workspace current|revision] --status active --content-maturity reviewed_methodology --translation zh-CN=reviewed
npm run pcr:bump -- --pcr <library/pcrs/...> --level patch
npm run pcr:publish -- --pcr <library/pcrs/...> --workspace current --version <semver>
npm run pcr:revise -- --pcr <library/pcrs/...> --version <target-semver>
npm run pcr:publish -- --pcr <library/pcrs/...> --workspace revision
npm run pcr:recover -- --pcr <library/pcrs/...> [--force-stale-lock]
npm run validate
```

- `init` creates required scaffold directories and guide files.
- `lint` executes the JSON Schema contracts for the catalog, classification mappings, PCR manifests, bilingual Markdown frontmatter, and material structured projections. It also checks required repository paths, bilingual PCR directory completeness, lifecycle compatibility, process inventory structure, range coverage for important flows, and deterministic `structured.yaml` freshness for every material PCR. Candidate PCRs may pass with range warnings; reviewed or published PCRs fail when important flows lack ranges.
- `pcr:sync-structured` regenerates `structured.yaml` from canonical PCR Markdown, including boundary, allocation, validation, process-inventory rules, and deterministic projection metadata. `--workspace` defaults to `current`; published and deprecated current files are immutable, so an open revision must be synced with `--workspace revision`.
- `pcr:lifecycle` validates manifest lifecycle transitions and runs a material preflight before a PCR becomes active. Use `--workspace revision` for revision review state. A published current record permits only the one-way transition to `deprecated/deprecated_methodology`; a deprecated record cannot be reopened.
- `pcr:bump` updates a valid semver only for an unpublished current workspace. It rejects malformed, published, deprecated, or open-revision state because a revision target version is fixed when `pcr:revise` opens it.
- `pcr:revise` opens one explicit `revision/` workspace from a managed published release, records a greater target semver in `revision.yaml`, preserves the consumer-facing top-level release, and marks the Chinese revision out of sync. It rejects deprecated and already-open records.
- `pcr:publish` first validates the proposed published manifest and freshly generated projection without writing. First publication uses `--workspace current --version <semver>`; later publication uses `--workspace revision` and the version locked by `pcr:revise`. Publication requires the complete identity contract, active reviewed methodology, reviewed non-empty Chinese Markdown with aligned normative rule ids, valid semver, and no unresolved review blocker.
- Every successful publication writes an immutable `releases/<semver>/` snapshot and appends `release-history.yaml`. Release metadata and the current manifest carry exact-byte SHA-256 evidence; lint validates the release chain, snapshot contents, projection integrity, and current-to-latest consistency.
- `pcr:sync-structured`, `pcr:bump`, `pcr:lifecycle`, `pcr:revise`, and `pcr:publish` replace the complete PCR leaf through a recoverable directory transaction whose state is stored under `library/.pcr-builder-state/`. `pcr:recover` rolls back interrupted pre-commit phases or finishes committed cleanup. `--force-stale-lock` is an explicit stale-state override and must not be used while a writer is active.
- `vocab:generate` validates every vocabulary source and deterministically regenerates the checked-in runtime constants and shared JSON Schema.
- `lint` rejects stale generated vocabulary artifacts before inspecting repository content; `validate` then runs lint plus tests.

For the full workspace, release, transaction, and recovery invariants, use
`builder/docs/contracts/published-revision-contract.md`.

## Executable Contract Boundary

The builder and `packages/pcr-core` share strict JSON Schema 2020-12 validation for stable machine-facing
contracts. Validation runs without type coercion, default insertion, or removal of additional properties.
Schema failures are returned in a stable machine-readable shape with the contract id, entity kind, source,
and sorted field-level errors.

Authoring Markdown remains the canonical, flexible methodology source. Strict material projection validation
starts only after Markdown is compiled to `structured.yaml`. Empty scaffolds remain discoverable authoring
targets and are not required to satisfy the material projection Schema or fingerprint contract.

For a material PCR, lint requires all four conditions together:

1. `structured.yaml` satisfies `packages/pcr-core/schemas/structured-projection.schema.json`.
2. Its `projection_metadata` hashes match canonical Markdown and the generated content.
3. Its full deterministic rendering matches a fresh builder projection.
4. Its stable shape contains the material methodology required for consumption, including identity,
   functional unit, reference flow, measurement, boundary, inventory, allocation, validation, and dataset
   profile content.

The consumption core repeats the Schema, fingerprint, and material completeness checks when it computes
readiness. Guidance and validation output are also asserted against their public JSON Schema contracts before
they are returned.

Generated PCR scaffolds use the current authoring skeleton:

- language-specific Markdown templates: `builder/templates/pcr.en-US.md.hbs` and `builder/templates/pcr.zh-CN.md.hbs`
- process inventory organized by process, then inputs/outputs, then product/waste/elementary flows
- UUID-only Tiangong references in PCR Markdown
- external data sources for literature, standards, official guidance, and non-default range evidence

Create workflows may use common sense to initialize candidate processes and likely flow lists, but final UUIDs and quantitative constraints must be backed by Tiangong lookup or cited sources. Update workflows are input-driven and should start from the specific user request, source file, reviewer comment, dataset, or database alignment change that motivates the edit.

The direct CLI entry point is:

```bash
node builder/cli/index.mjs <command>
```
