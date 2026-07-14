# Publish PCR Workflow

Use this workflow when preparing a PCR for published consumption by agents, CLI, or downstream systems.

## Preconditions

- Manifest status is `active` and content maturity is `reviewed_methodology`.
- The required manifest identity contract is complete, and manifest `id` matches English `canonical_pcr_id`.
- English and Chinese Markdown have been reviewed and `translation_status.zh-CN` is `reviewed`.
- Canonical English Markdown is non-empty and its frontmatter declares the manifest PCR id, `language: en-US`, and `sync_with: pcr.zh-CN.md`.
- Chinese Markdown is non-empty and its frontmatter declares the manifest PCR id, `language: zh-CN`, and `sync_with: pcr.en-US.md`.
- English and Chinese ordered rule ids match for system boundary, allocation, and validation, and each group contains at least one rule.
- The requested version is valid semantic versioning.
- `review_metadata` contains no non-empty unresolved or blocking fields.
- `structured.yaml` has been regenerated from canonical Markdown and matches the deterministic projection.
- UUID references do not include dataset versions.
- Data Sources only include external or non-default evidence.
- Validation passes.
- Important flows have range blocks; reviewed or published PCRs must not rely on missing important-flow ranges.

## Steps

1. Run `npm run pcr:sync-structured -- --pcr <library/pcrs/...>`.
2. Run `npm run validate`.
3. Inspect `manifest.yaml` lifecycle and review metadata.
4. If review or translation state must change before publication, run `npm run pcr:lifecycle -- --pcr <library/pcrs/...> --status active --content-maturity reviewed_methodology --translation zh-CN=reviewed`.
5. Choose the version explicitly.
6. Run `npm run pcr:publish -- --pcr <library/pcrs/...> --version <semver>`.
7. Re-run `npm run validate`.
8. Commit Markdown, manifest, and generated structured projection together.

## Publication Rule

`pcr:publish` runs the publication checks before replacing either generated structured output or the manifest. A failed
preflight leaves both files unchanged and prints every blocking condition plus the next validation action. A successful
publication sets `status: published`, `content_maturity: published_methodology`, the explicit version, and publication
timestamps together with a freshly generated `structured.yaml`.

Publication is an audited lifecycle fact. It does not make unresolved methodology questions acceptable inside PCR content.

Do not use `pcr:bump` on a published or deprecated PCR. Reopening an audited record for a new revision requires the
storage and transaction rules in `../contracts/published-revision-contract.md`. That contract is defined but not yet
implemented; until its commands, Schemas, and recovery behavior exist, published and deprecated version state is
immutable in place. Do not create `revision/`, `releases/`, or `release-history.yaml` manually.
