# Translate PCR Workflow

Use this workflow when aligning `pcr.zh-CN.md` with canonical `pcr.en-US.md`.

Translate human-facing headings, table labels, process names, explanatory notes, and ordinary prose. Preserve machine-facing identifiers and controlled values, including `process_id`, `row_id`, `direction`, `flow_type`, `value_mode`, `specificity`, `basis_kind`, `evidence_kind`, `source_ids`, Tiangong UUIDs, and source ids.

Use `builder/templates/pcr.zh-CN.md.hbs` as the zh scaffold shape. Do not start a Chinese PCR from the English template and translate only the title.

## Steps

1. Inspect `manifest.yaml` before editing. For a managed published PCR, open the target with `pcr:revise --version <target-semver>` and use `workspace=revision`. Stop if the current record is deprecated. Otherwise use `workspace=current`.
2. Treat the selected workspace's English Markdown as the canonical rule. Never translate by editing a published top-level current release in place.
3. Preserve section order, table structure, source ids, UUIDs, rule ids, process ids, and controlled vocabulary values.
4. Translate explanatory prose and category-specific labels.
5. Localize flow display names without changing flow identity. When a Tiangong direct read provides a `zh`
   `baseName`, use that exact official Chinese display name in `pcr.zh-CN.md` and keep the same UUID as English.
   When the selected flow has no UUID, translate its concrete human-facing flow name into precise Chinese. If a
   UUID-bearing Tiangong flow has no official Chinese name, retain the canonical name, state that the localized name
   is unavailable, and do not invent an official-sounding translation. Never translate UUIDs, source ids, rule ids,
   or controlled enum values.
6. Keep `Required qualifiers` / `必需限定信息` semantically equivalent across languages.
7. Update translation lifecycle state with `npm run pcr:lifecycle -- --pcr <library/pcrs/...> --workspace <current|revision> --translation zh-CN=aligned` when the Chinese file is aligned.
8. Run `npm run pcr:sync-structured -- --pcr <library/pcrs/...> --workspace <current|revision>` only if the selected canonical English source changed.
9. Run `npm run validate`.

## Translation Quality Bar

- Chinese and English describe the same reference flow, process list, inventory rows, ranges, and sources.
- Chinese reference-product and selected-flow display names use Tiangong's official Chinese `baseName` whenever it
  exists; otherwise a concrete non-UUID flow name is translated for Chinese readers without changing its identity.
- After this audit passes for every inventory row, declare
  `review_metadata.inventory_contract.localized_flow_names: tiangong_zh_v1`; do not declare it to silence an
  unresolved translation gap.
- No Chinese-only or English-only methodology rules are introduced unless the PCR explicitly declares a locale-specific scope.
