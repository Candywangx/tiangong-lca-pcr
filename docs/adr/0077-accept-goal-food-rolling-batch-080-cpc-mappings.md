---
title: Accept Goal food rolling batch 080 CPC 3.0 mappings
docType: decision
scope: repo
status: accepted
authoritative: true
owner: tiangong-lca-pcr
language: en
whenToUse:
  - when auditing Goal food rolling production batch 080
  - when resolving CPC 21691, 24110, 27150, 28190, 29320, or 29330
  - when reviewing candidate PCRs with an unresolved reference-product flow UUID
whenToUpdate:
  - when an accepted semantic mapping or PCR identity changes
  - when an unresolved Tiangong reference-product flow is confirmed
checkPaths:
  - docs/adr/0077-accept-goal-food-rolling-batch-080-cpc-mappings.md
  - classifications/mappings/cpc-3.0-to-pcr.yaml
  - classifications/aliases/pcr-id-aliases.yaml
  - classifications/indexes/cpc-3.0-coverage.json
  - library/catalog.yaml
  - library/indexes/pcr-index.yaml
lastReviewedAt: 2026-08-23
lastReviewedCommit: null
---

# Accept Goal Food Rolling Batch 080 CPC 3.0 Mappings

## Decision

Accept six exact CPC-to-PCR edges authored in independent desktop-visible Worktrees and centrally recovered, synchronized, and inspected as one serialized integration snapshot. The repository user approved batch accepted-mapping integration and separately directed that a semantically exact reference-product UUID may remain blank for a later alignment stage instead of blocking PCR authoring.

Each target is a bilingual `candidate` / `authored_methodology` PCR with a deterministic structured projection, an `atomic_flows: v1` inventory, localized Chinese selected-flow names, and no unsupported quantitative ranges. Mapping acceptance records the exact CPC-to-methodology relationship; it does not publish the PCR or assert that every Tiangong flow identity is resolved.

## Accepted Edges

| CPC | Product | Canonical PCR id | Atomic cards | Product flow UUID |
| --- | --- | --- | ---: | --- |
| 21691 | Other vegetable oils, crude or refined, n.e.c. | `pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.meat-fish-fruits-vegetables-oils-and-fats.other-vegetable-oils-crude-or-refined-n-e-c` | 73 | unresolved |
| 24110 | Undenatured ethyl alcohol of an alcoholic strength by volume of 80% vol or higher | `pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.beverages.undenatured-ethyl-alcohol-of-an-alcoholic-strength-by-volume-of-80-vol-or-higher` | 61 | `276f1cf5-0aa1-4d57-ad95-9dada6e043a0` |
| 27150 | Sacks and bags, of a kind used for the packing of goods | `pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.textile-articles-other-than-apparel.sacks-and-bags-of-a-kind-used-for-the-packing-of-goods` | 42 | unresolved |
| 28190 | Other knitted or crocheted fabrics | `pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.knitted-or-crocheted-fabrics-wearing-apparel.other-knitted-or-crocheted-fabrics` | 50 | unresolved |
| 29320 | Footwear with outer soles and uppers of rubber or plastics, other than waterproof footwear or sports footwear | `pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.leather-and-leather-products-footwear.footwear-with-outer-soles-and-uppers-of-rubber-or-plastics-other-than-waterproof-footwe-77c37fd8` | 39 | unresolved |
| 29330 | Footwear with uppers of leather, other than sports footwear, footwear incorporating a protective metal toe-cap and miscellaneous special footwear | `pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.leather-and-leather-products-footwear.footwear-with-uppers-of-leather-other-than-sports-footwear-footwear-incorporating-a-pro-ef9e7096` | 48 | `985ca5fa-699a-411e-b304-0398fc7b4865` |

## Evidence and Verification

- The retained UN CPC 3.0 source defines all six leaf boundaries, and each PCR's scope, exclusions, representative product, and reference-product name cover the complete corresponding leaf rather than a narrower manufacturing case.
- Tiangong hybrid search and state-code-100 direct reads confirmed the two adopted product-flow UUIDs. Near matches for the other four categories were rejected; their concrete reference-product output rows remain UUID-free and are listed under `review_metadata.unresolved_flow_identities`.
- Ordinary web search and OpenAlex supported source discovery. Final methodology rules use directly checked official originals, standards, DOI publisher records, and accessible full text; search snippets and abstracts were not used as final evidence.
- Central inspection confirmed ordered bilingual inventory identity, one atomic exchange per flow card, localized Chinese flow displays, current structured fingerprints, and zero hard target findings.
- No single literature case or repeated point value was converted into a range. These PCRs retain zero authored ranges and record unresolved range-evidence needs where applicable.

## Unresolved Reference-Product Contract

A blank product-flow UUID is accepted only for a `candidate` / `authored_methodology` PCR with a concrete reference-product output and an explicit manifest declaration tied to the reference product by row id, semantic product name, a reference-product statement, or the retained structured unresolved-reference fields used by earlier authored records. A generic statement that unrelated inventory identities remain unresolved does not qualify. This exception does not apply to active, published, or release artifacts; those remain subject to strict reference-flow identity completeness.

## Consequences

- The six CPC leaves become positive accepted mappings to their canonical material PCRs.
- Deterministic alias generation removes the six retired leaf-derived aliases, and coverage projects the six leaves as mapped.
- Catalog, material index, coverage index, and viewer data are regenerated from repository truth rather than edited manually.
- The four unresolved Tiangong reference-product identities remain explicit follow-up work and are not replaced with broader, narrower, or semantically incompatible UUIDs.
