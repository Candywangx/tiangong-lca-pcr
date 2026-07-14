# PCR Manifest Contract

`manifest.yaml` owns PCR identity and lifecycle state that should not be duplicated in Markdown prose.

The executable JSON Schema is `builder/schemas/pcr-manifest.schema.json`. Repository lint validates every
PCR manifest against that Schema before applying lifecycle and cross-file semantic checks. Markdown
frontmatter has a separate executable contract at `builder/schemas/pcr-markdown-frontmatter.schema.json`;
it is not another representation of the manifest.

## Required Identity Fields

- `schema_version`
- `id`
- `title.en-US`
- `title.zh-CN`
- `status`
- `pcr_kind`
- `content_maturity`
- `target_entities`
- `languages.canonical`
- `languages.available`

Before a PCR becomes `active` or `published`, every required identity field must be non-empty, `target_entities` and
`languages.available` must be non-empty arrays, `languages.canonical` must be `en-US`, and available languages must
include both `en-US` and `zh-CN`. The manifest `id` must exactly match `canonical_pcr_id` in the English Product
Category Identity table.

## Classification References

Classification references may appear in `classification_refs`, but classification systems do not own PCR identity.

Use classification refs for mapping context only:

```yaml
classification_refs:
  - system: CPC
    version: "3.0"
    code: "01111"
    title: "Wheat, seed"
    mapping_type: exact
```

## Lifecycle Fields

Use top-level lifecycle fields for version state:

- `version`
- `status`
- `updated_at_utc`
- `published_at_utc`
- `release_artifacts`
- `content_maturity`
- `translation_status`

Review or publication state belongs here or in GitHub issue/PR records, not in PCR Markdown sections.

Controlled lifecycle values are defined in `builder/vocab/`:

- `status`: `scaffold`, `candidate`, `active`, `published`, `deprecated`
- `content_maturity`: `empty_scaffold`, `draft_methodology`, `authored_methodology`, `reviewed_methodology`, `published_methodology`, `deprecated_methodology`
- `translation_status.<language>`: `not_available`, `scaffold`, `scaffold_pending_translation`, `draft_translation`, `aligned`, `reviewed`, `out_of_sync`

Status and maturity are validated as one state:

| status | allowed content maturity |
| --- | --- |
| `scaffold` | `empty_scaffold` |
| `candidate` | `draft_methodology`, `authored_methodology` |
| `active` | `reviewed_methodology` |
| `published` | `published_methodology` |
| `deprecated` | `deprecated_methodology` |

Moving to `active` requires an aligned or reviewed Chinese translation and a material PCR preflight. Publication is a
separate transition from `active`: it requires reviewed methodology, `translation_status.zh-CN: reviewed`, valid
semver, current structured output, and no non-empty unresolved or blocking field in `review_metadata`.

Use the lifecycle CLI to update review and translation state:

```bash
npm run pcr:lifecycle -- --pcr <library/pcrs/...> --status active --content-maturity reviewed_methodology --translation zh-CN=reviewed
```

`pcr:lifecycle` updates `updated_at_utc` but does not regenerate `structured.yaml` and cannot assign published state.
Use `pcr:publish` only when assigning a published version and `published_at_utc`; failed publication preflight leaves
the managed PCR directory unchanged. After publication, `release_artifacts` records the exact-byte SHA-256 of both
current Markdown files and `structured.yaml`. Published and deprecated manifests require that digest set.

`pcr:bump` cannot mutate a `published` / `published_methodology` or deprecated record. A new version of an audited
published record must be opened with an explicit target version and edited through the audited revision contract:

```bash
npm run pcr:revise -- --pcr <library/pcrs/...> --version <target-semver>
npm run pcr:sync-structured -- --pcr <library/pcrs/...> --workspace revision
npm run pcr:lifecycle -- --pcr <library/pcrs/...> --workspace revision --status active --content-maturity reviewed_methodology --translation zh-CN=reviewed
npm run pcr:publish -- --pcr <library/pcrs/...> --workspace revision
```

The revision manifest is `revision/manifest.next.yaml`; its version is fixed by `revision/revision.yaml` and it may
move only between `candidate` and `active` until publication. `--workspace current` remains the default for lifecycle
and sync commands, so revision work must opt in explicitly. A published current manifest permits only the exact
one-way lifecycle update to `deprecated` plus `deprecated_methodology`; deprecated current state is immutable and
cannot be reopened.

First publication creates the initial immutable `releases/<semver>/` snapshot and `release-history.yaml`. Later
revision publication appends the next release and promotes the revision in one recoverable directory transaction.
See `published-revision-contract.md` for the release metadata, history, transaction, and recovery invariants.

JSON Schema checks field shape and controlled values. Lifecycle compatibility, manifest-to-Markdown identity,
translation alignment, material preflight, review blockers, and publication transition rules remain semantic
checks in the builder. Passing the manifest Schema alone does not make a PCR publishable.
