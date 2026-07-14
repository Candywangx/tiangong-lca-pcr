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
- `builder/vocab/` contains controlled vocabularies intended for lint and CLI consumption.

## Builder CLI

```bash
npm run init
npm run lint
npm run pcr:sync-structured -- --pcr <library/pcrs/...>
npm run pcr:lifecycle -- --pcr <library/pcrs/...> --status active --content-maturity reviewed_methodology --translation zh-CN=reviewed
npm run pcr:bump -- --pcr <library/pcrs/...> --level patch
npm run pcr:publish -- --pcr <library/pcrs/...> --version <semver>
npm run validate
```

- `init` creates required scaffold directories and guide files.
- `lint` executes the JSON Schema contracts for the catalog, classification mappings, PCR manifests, bilingual Markdown frontmatter, and material structured projections. It also checks required repository paths, bilingual PCR directory completeness, lifecycle compatibility, process inventory structure, range coverage for important flows, and deterministic `structured.yaml` freshness for every material PCR. Candidate PCRs may pass with range warnings; reviewed or published PCRs fail when important flows lack ranges.
- `pcr:sync-structured` atomically regenerates `structured.yaml` from canonical PCR Markdown, including boundary, allocation, validation, process-inventory rules, and deterministic projection metadata.
- `pcr:lifecycle` validates manifest lifecycle transitions and runs a material preflight before a PCR becomes active.
- `pcr:bump` updates a valid manifest semver and rejects malformed, published, or deprecated records. Published and deprecated records must first enter the audited reopen/revision workflow planned for P1; they are never version-bumped in place.
- `pcr:publish` first validates the future manifest and freshly generated projection without writing. Publication requires the complete manifest identity contract, active reviewed methodology, reviewed non-empty Chinese Markdown with aligned normative rule ids, valid semver, and no unresolved review blocker; a failed preflight leaves files unchanged.
- `validate` runs lint plus tests.

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
