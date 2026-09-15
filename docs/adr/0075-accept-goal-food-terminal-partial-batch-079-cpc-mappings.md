---
title: Accept Goal food terminal partial batch 079 CPC 3.0 mappings
docType: decision
scope: repo
status: accepted
authoritative: true
owner: tiangong-lca-pcr
language: en
whenToUse:
  - when auditing Goal food rolling production batch 079
  - when resolving CPC 25010, 25091, 25092, 28330, or 29340
  - when reviewing the terminal exact-flow gate for remaining food-domain scaffolds
whenToUpdate:
  - when an accepted semantic mapping or PCR identity changes
  - when a currently blocked food-domain CPC receives an exact public Tiangong product flow
checkPaths:
  - docs/adr/0075-accept-goal-food-terminal-partial-batch-079-cpc-mappings.md
  - classifications/mappings/cpc-3.0-to-pcr.yaml
  - classifications/aliases/pcr-id-aliases.yaml
  - classifications/indexes/cpc-3.0-coverage.json
  - library/catalog.yaml
  - library/indexes/pcr-index.yaml
lastReviewedAt: 2026-08-20
lastReviewedCommit: null
---

# Accept Goal Food Terminal Partial Batch 079 CPC 3.0 Mappings

## Decision

Accept five exact CPC-to-PCR edges authored in independent desktop-visible Worktrees and centrally inspected, source-reviewed, synchronized, and integrated as one serialized snapshot. The normal batch size is six, but this is a terminal partial batch: an exhaustive exact-CPC review of all remaining food-domain empty scaffolds found no sixth public state-code-100 Product/Mass flow whose identity covers the full CPC product boundary.

Each accepted target is a bilingual candidate material PCR with a deterministic structured projection, atomic-flows-v1 inventory cards, Chinese selected-flow labels, and no unsupported quantitative ranges.

## Accepted Edges

| CPC | Product | Canonical PCR id | Atomic cards | Product flow UUID |
| --- | --- | --- | ---: | --- |
| 25010 | Cured stemmed/stripped tobacco leaves | pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.tobacco-products.cured-stemmed-stripped-tobacco-leaves | 38 | 57a438c1-b4d5-427a-8240-3aacf6c56025 |
| 25091 | Manufactured tobacco | pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.tobacco-products.manufactured-tobacco | 55 | 0b1039e5-6251-4030-a2fd-707a1f32f365 |
| 25092 | Products containing tobacco | pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.tobacco-products.products-containing-tobacco | 50 | 653e40de-b5ea-4e0c-8542-98a32e6bae12 |
| 28330 | Artificial fur and articles thereof (except headgear) | pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.knitted-or-crocheted-fabrics-wearing-apparel.artificial-fur-and-articles-thereof-except-headgear | 46 | ac47239d-883f-4063-bcc1-fc64b2ffc8fc |
| 29340 | Footwear with uppers of textile materials, other than sports footwear | pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.leather-and-leather-products-footwear.footwear-with-uppers-of-textile-materials-other-than-sports-footwear | 32 | f6098cff-2e83-4867-ace9-6b24b50b0ccd |

## Evidence and Verification

- Retained UN CPC 3.0 source bytes define all five product boundaries.
- Tiangong flow-hybrid-search with an exact nested CPC filter, followed by public state-code-100 direct reads, confirmed each reference flow as Product flow, Mass, and kg with exact bilingual product names.
- Native search and OpenAlex were used for discovery; only official originals, DOI publisher pages, and directly checked full text support authored rules. Search snippets, metadata, and abstracts alone support no rule or amount range.
- Central checks confirmed bilingual process/card identity, one atomic exchange per card, Chinese selected-flow labels, exact Tiangong Chinese names for UUID-bearing flows, and deterministic projections.
- No literature point or single case was converted into a range. All five PCRs retain zero quantitative ranges because two independent, boundary-compatible original sources were unavailable.
- CPC 25010 retains a review disclosure because the exact Tiangong identity fields conflict with an upstream route label saying fresh/unprocessed.
- CPC 29340 retains a review disclosure because the exact Tiangong identity fields conflict with an upstream general comment mentioning sports footwear.

## Remaining Food-Domain Gate

The remaining 66 empty scaffolds were screened with the same exact-CPC Product/Mass gate. Same-code hits were absent, narrower than the CPC leaf, broader than the leaf, attached to the wrong physical product, or used the wrong reference property. They remain unmapped and require manual review or a new/corrected public Tiangong flow; no substitute UUID was fabricated.

Codes:

`21119, 21159, 21181, 21219, 21241, 21243, 21391, 21399, 21419, 21439, 21671, 21681, 21691, 21693, 21700, 21920, 22300, 23230, 23410, 23511, 23530, 23911, 23914, 23991, 23995, 23999, 24110, 24131, 24139, 24211, 24230, 24320, 24410, 24429, 25020, 26140, 26190, 26330, 26350, 26430, 26610, 26710, 26730, 26860, 27120, 27140, 27150, 27190, 27290, 27310, 27991, 27996, 27997, 27998, 27999, 28190, 28229, 28310, 28320, 29110, 29120, 29130, 29220, 29290, 29320, 29330`.

## Consequences

- CPC 3.0 has 417 accepted mappings and 2,460 unmapped leaves.
- The alias registry has 2,460 entries.
- The material catalog has 419 PCRs and 2,459 legacy scaffolds.
- The food domain has 66 retained empty scaffolds, each blocked by the exact public flow-identity gate rather than incomplete authoring.
