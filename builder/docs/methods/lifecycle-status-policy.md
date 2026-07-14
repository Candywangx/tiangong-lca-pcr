# Lifecycle Status Policy

PCR lifecycle state belongs in `manifest.yaml`, not in PCR Markdown sections or `structured.yaml` projections.

Use three separate lifecycle axes:

- `status`: library availability and publication state.
- `content_maturity`: methodology authoring and review maturity.
- `translation_status.<language>`: alignment state for each non-canonical language.

Controlled values are defined in:

- `builder/vocab/pcr-status.yaml`
- `builder/vocab/content-maturity.yaml`
- `builder/vocab/translation-status.yaml`

## PCR Status

- `scaffold`: generated or empty PCR scaffold; not yet authored as methodology.
- `candidate`: authored PCR content exists and is ready for methodology review.
- `active`: reviewed PCR methodology is active for normal guidance use.
- `published`: PCR has been explicitly published with a version and publication timestamp.
- `deprecated`: PCR should no longer be selected for new data package work.

## Content Maturity

- `empty_scaffold`: generated placeholder structure only.
- `draft_methodology`: methodology is being drafted and may be incomplete.
- `authored_methodology`: methodology has been authored from available evidence but is not yet reviewed.
- `reviewed_methodology`: methodology has completed review for normal active use.
- `published_methodology`: methodology has been included in a published PCR version.
- `deprecated_methodology`: methodology is retained for history but should not guide new work.

## Translation Status

- `not_available`: translation is intentionally not available for the language.
- `scaffold`: translation file exists as an empty scaffold.
- `scaffold_pending_translation`: generated scaffold translation still needs authoring.
- `draft_translation`: translation is being drafted and may not be aligned with canonical content.
- `aligned`: translation is aligned with canonical PCR content.
- `reviewed`: translation alignment has been reviewed.
- `out_of_sync`: translation exists but is known to lag behind canonical PCR content.

Use `pcr:lifecycle` for review and translation state changes:

```bash
npm run pcr:lifecycle -- --pcr <library/pcrs/...> --status active --content-maturity reviewed_methodology --translation zh-CN=reviewed
```

Use `pcr:publish` only when assigning a published version, `published_at_utc`, release artifact digests, and the
immutable release-history entry.

Published and deprecated current records cannot be synced or version-bumped in place. Open a later version of a
managed published PCR with an explicit target version:

```bash
npm run pcr:revise -- --pcr <library/pcrs/...> --version <target-semver>
```

The audited revision contract in `../contracts/published-revision-contract.md` intentionally adds no `revising`
lifecycle value. The top-level manifest remains `published`, while `revision/manifest.next.yaml` moves from
`candidate/authored_methodology` to `active/reviewed_methodology` through
`pcr:lifecycle --workspace revision`. Publication promotes it with `pcr:publish --workspace revision`; its target
version is locked by `revision.yaml`.

A published current record permits only the one-way transition to `deprecated/deprecated_methodology`. Deprecated
state cannot return to candidate or active and cannot be opened with `pcr:revise`.
