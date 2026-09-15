---
title: Accept Goal food rolling batch 078 CPC 3.0 mappings
docType: decision
scope: repo
status: accepted
authoritative: true
owner: tiangong-lca-pcr
language: en
whenToUse:
  - when auditing Goal food rolling production batch 078
  - when resolving CPC 23997, 26530, 28269, 29490, 29520, or 29600
whenToUpdate:
  - when an accepted semantic mapping or PCR identity changes
checkPaths:
  - docs/adr/0074-accept-goal-food-rolling-batch-078-cpc-mappings.md
  - classifications/mappings/cpc-3.0-to-pcr.yaml
  - classifications/aliases/pcr-id-aliases.yaml
  - classifications/indexes/cpc-3.0-coverage.json
  - library/catalog.yaml
  - library/indexes/pcr-index.yaml
lastReviewedAt: 2026-08-20
lastReviewedCommit: null
---

# Accept Goal Food Rolling Batch 078 CPC 3.0 Mappings

## Decision

Accept six exact CPC-to-PCR edges authored in independent desktop-visible Worktrees and centrally inspected, source-reviewed, synchronized, and integrated as one serialized snapshot. Each target is a bilingual candidate material PCR with a deterministic projection, an atomic-flows-v1 inventory, and an audited Tiangong Chinese flow-name contract.

## Accepted Edges

| CPC | Product | Canonical PCR id | Atomic cards | Product flow UUID |
| --- | --- | --- | ---: | --- |
| 23997 | Other prepared dishes and meals | pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.grain-mill-products-starches-and-starch-products-other-food-products.other-prepared-dishes-and-meals | 40 | 92b0b2f5-905b-45e9-8182-b0ad6ed26cfc |
| 26530 | Woven fabrics of combed wool or of combed fine animal hair, containing 85% or more by weight of wool or fine animal hair | pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.yarn-and-thread-woven-and-tufted-textile-fabrics.woven-fabrics-of-combed-wool-or-of-combed-fine-animal-hair-containing-85-or-more-by-wei-5aba7fa4 | 49 | 0b5c66df-5a09-41f4-8e09-39c43dd16a76 |
| 28269 | Other headgear except headgear of rubber or of plastics, safety headgear and asbestos headgear; head-bands, linings, covers, hat foundations, hat frames, peaks and chinstraps, for headgear | pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.knitted-or-crocheted-fabrics-wearing-apparel.other-headgear-except-headgear-of-rubber-or-of-plastics-safety-headgear-and-asbestos-he-6479f76c | 31 | 0300f33f-f723-4c63-901f-6f0d58ebfbb7 |
| 29490 | Other sports footwear, except skating boots | pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.leather-and-leather-products-footwear.other-sports-footwear-except-skating-boots | 59 | a372c679-9693-4957-aad9-98b6d6b5e435 |
| 29520 | Wooden footwear, miscellaneous special footwear and other footwear n.e.c. | pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.leather-and-leather-products-footwear.wooden-footwear-miscellaneous-special-footwear-and-other-footwear-n-e-c | 73 | e377f482-0635-4972-8954-9279707bfd7e |
| 29600 | Parts of footwear; removable insoles, heel cushions and similar articles; gaiters, leggings and similar articles, and parts thereof | pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.leather-and-leather-products-footwear.parts-of-footwear-removable-insoles-heel-cushions-and-similar-articles-gaiters-leggings-69d61555 | 34 | 13caecd4-f313-436a-8ab4-2abfbab600bb |

## Evidence and Verification

- Retained UN CPC 3.0 source bytes define all six product boundaries.
- Tiangong flow-hybrid-search plus public state-code-100 direct reads confirmed every reference flow as a CPC-exact Product/Mass flow with an auditable kg reference unit.
- Native search and OpenAlex supported discovery; only official originals and directly checked full text support authored rules. Search snippets, metadata, and abstracts alone support no rule or amount range.
- Central parser checks confirmed bilingual process and atomic-card identity, exact Tiangong Chinese names for UUID-bearing flows, and deterministic structured projections.
- No single case or literature point was converted into a range. None of the six PCRs retains a quantitative range because two independent, boundary-compatible original sources were unavailable.

## Consequences

- CPC 3.0 has 412 accepted mappings and 2,465 unmapped leaves.
- The alias registry has 2,465 entries.
- The material catalog has 414 PCRs and 2,464 legacy scaffolds.
