# Create PCR Workflow

Use this workflow when the current best PCR for a target product category has no existing canonical PCR record and must be written as a new PCR directory.

Ordinary classification import does not create a PCR placeholder. `import-cpc` creates zero PCR records by default;
the fail-fast `scaffold-cpc` alias and `--legacy-scaffolds` exist only for migration compatibility. If a retained
legacy scaffold already exists, this workflow may promote it in place, but neither import mode may replace existing
PCR content or an accepted mapping edge.

## Inputs

- target PCR directory under `library/pcrs/**`
- target product category and classification mapping context
- Tiangong CLI or database access for UUID lookup
- external sources for method rules, factors, process decomposition, and boundary rules
- optional user notes, seed examples, or source files

The AI produces the current best PCR from available evidence. This workflow writes that result into a new canonical PCR record. UUIDs, quantitative ranges, allocation formulas, and mandatory boundary rules use Tiangong lookup, cited public evidence, or declared foreground collection protocols before they are treated as final PCR content.

## Steps

1. Read `builder/AGENTS.md`, `builder/docs/tools/tiangong-lca-cli.md`, `builder/docs/tools/data-sources-and-tools.md`, `builder/docs/contracts/pcr-markdown-contract.md`, `builder/docs/contracts/evidence-and-source-contract.md`, and `builder/vocab/*.yaml`.
2. Inspect the classification coordinate, coverage state, accepted mapping entries, and any retained legacy scaffold.
   A newly imported unmapped leaf normally has no `manifest.yaml`.
3. Confirm that no existing canonical PCR record covers the same semantic product category.
4. Choose a semantic PCR slug that does not contain the classification code. Explicitly initialize the four-file PCR
   directory, or promote the matching retained legacy scaffold in place after checking its identity.
   Before external evidence preparation, follow `builder/docs/tools/shared-materials.md`: run `pcr:materials query`
   for the product, process and each specific evidence need, then `read` relevant fragments with the intended-use
   conditions. Goal Harness dispatch already runs a bounded product query; refine it before external searches.
   Reuse valid originals/extractions, assess fragment applicability, and supplement uncovered or conflicting needs
   with the existing tools. Register acquired originals immediately and extracted/verified fragments when ready.
   This loop also applies when a new evidence question arises during steps 6–20; a cache hit never establishes
   coverage or waives original verification, independent-source or counterevidence requirements.
5. Immediately before authoring `pcr.en-US.md` content, read `builder/templates/pcr.en-US.md.hbs`.
6. Write scope, exclusions, product category identity, typical market state, candidate processes, and likely flows from the current PCR synthesis.
7. Define product category identity with canonical PCR id, classification refs, covered products, excluded products, representative product, production route, and market state.
8. Define functional unit and reference flow objects using `Field | Value` tables.
9. Use Tiangong CLI or database search to select UUID-bearing flow, flow property, and unit group references. Capture
   both English and Chinese `baseName` values from the direct-read record when available. Unresolved UUIDs stay blank
   and are tracked in `manifest.yaml` review metadata.
10. Define measurement and unit rules where they affect consistency, conversion, or validation.
11. Populate `Boundary Abstraction` with the resulting declared starting condition, role, classification scope, recursive input rule, upstream dataset requirement, and disclosure.
12. Define common data production processes before writing detailed inventory rows.
13. For each process, write inventory rows by direction and flow type: product, waste, elementary. Each row must be
    one atomic exchange resolvable to one Tiangong flow. Split electricity, steam or heat, each fuel, each
    refrigerant, water, chemicals, ingredients, packaging materials, waste streams, and elementary emissions into
    separate rows; never use a plural category, combined carrier list, or future selection instruction as the
    `Selected flow`.
14. Record amounts, exact values, formulas, foreground collection requirements, evidence-backed ranges, and clearly labelled provisional reasoned ranges with controlled `value_mode`, `specificity`, `basis_kind`, `evidence_kind`, and `range` metadata.
15. Link collected foreground rows and calculated foreground rows to `collection_protocol_id`.
16. Define data collection protocols with raw fields, collection method, unit, frequency, coverage, scope, aggregation rule, and quality evidence.
17. Define calculation rules from collected fields to normalized PCR values.
18. Define data quality requirements for identity, measurement, temporal coverage, completeness, and disclosure.
19. Define the published dataset profile with dataset role, downstream use, allowed use, excluded use, metadata, quality disclosure, and update trigger.
20. Add external data sources and reference their source ids from inventory or rule rows.
    Register reusable source material and individually checked fragments with `pcr:materials register`; the shared
    store is production-side and must not be committed. Prior PCR Data Sources can seed metadata-only discovery,
    never a claim that the source was acquired or verified. Keep raw files, extraction records and search logs out
    of canonical PCR files and `structured.yaml`.
21. Keep authoring traces, unresolved review notes, and lifecycle state in `manifest.yaml`, issue records, or PR records.
22. Write `pcr.en-US.md` first.
23. Immediately before authoring `pcr.zh-CN.md`, read `builder/docs/workflows/translate-pcr.md` and
    `builder/templates/pcr.zh-CN.md.hbs`.
24. Write `pcr.zh-CN.md` as an aligned rendering of the same rule. Use Tiangong's official Chinese flow name for
    every UUID-bearing reference-product or selected-flow display when the direct-read record supplies one; translate
    concrete non-UUID flow names for Chinese readers, while preserving row ids, UUIDs, and controlled values.
25. Audit every `Selected flow` before sync: it names one exchange, not a collection or selector; its property and
    unit apply to that one exchange; route conditions and unresolved UUID status are explicit; the Chinese display is
    localized and matches the official Tiangong Chinese `baseName` whenever that localized field exists.
26. Set `review_metadata.inventory_contract.atomic_flows: v1` and
    `review_metadata.inventory_contract.localized_flow_names: tiangong_zh_v1` in `manifest.yaml`; these make
    collection-flow and untranslated Chinese-display findings blocking for the new PCR.
27. Run `npm run pcr:sync-structured -- --pcr <library/pcrs/...>`.
28. Run `npm run validate`.
29. Update `manifest.yaml` lifecycle fields with `npm run pcr:lifecycle -- --pcr <library/pcrs/...> ...` when content maturity or translation state changes.
30. Only if this task adds or accepts a classification mapping edge, and only after semantic scope and methodology
    review, read `builder/templates/classification-mapping.yaml.hbs` immediately before adding or accepting the edge,
    then run `npm run catalog:build`. Never use an empty PCR merely to make classification coverage appear mapped.

## Required PCR Facts

- PCR identity: canonical PCR id, classification refs, included products, excluded products, representative product, route, and market state.
- Functional unit and reference flow: the function(s) or service(s) provided (`what`), the extent of the function or service (`how much`), the way and quality level at which the function is provided (`how well`), and the duration for which it is provided (`how long`); plus the reference flow—the amount of product needed to realize the functional unit—with its reference amount, Tiangong product-flow UUID, flow-property UUID, unit-group UUID, and reference unit.
- Boundary abstraction: declared starting condition, role, same-category recursive input rule, classification scope, required disclosure, and upstream dataset requirement.
- Foreground production basis: process map, inventory rows, collection protocols, calculation rules, data quality requirements, and source ids.
- Published dataset profile: role, downstream use as `secondary_dataset` and/or `background_dataset`, allowed use, excluded use, required metadata, required quality disclosure, and update trigger.
