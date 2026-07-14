# PCR Manifest Contract

`manifest.yaml` owns PCR identity and lifecycle state that should not be duplicated in Markdown prose.

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
the manifest and structured projection unchanged.

`pcr:bump` cannot mutate a `published` / `published_methodology` or deprecated record. A new version of an audited
record must first be opened through the reopen/revision workflow. That audited workflow is planned for P1; until it is
implemented, do not change the version of a published or deprecated PCR in place.
