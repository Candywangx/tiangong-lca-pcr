---
title: Accept Goal food rolling batch 077 CPC 3.0 mappings
docType: decision
scope: repo
status: accepted
authoritative: true
owner: tiangong-lca-pcr
language: en
whenToUse:
  - when auditing Goal food rolling production batch 077
  - when resolving CPC 21673, 23170, 23929, 24212, 24220, or 26170
whenToUpdate:
  - when an accepted semantic mapping or PCR identity changes
checkPaths:
  - docs/adr/0073-accept-goal-food-rolling-batch-077-cpc-mappings.md
  - classifications/mappings/cpc-3.0-to-pcr.yaml
  - classifications/aliases/pcr-id-aliases.yaml
  - classifications/indexes/cpc-3.0-coverage.json
  - library/catalog.yaml
  - library/indexes/pcr-index.yaml
lastReviewedAt: 2026-08-20
lastReviewedCommit: null
---

# Accept Goal Food Rolling Batch 077 CPC 3.0 Mappings

## Decision

Accept six exact CPC-to-PCR edges authored in independent desktop-visible Worktrees and centrally inspected, source-reviewed, synchronized, and integrated as one serialized snapshot. Each target is a bilingual candidate material PCR with a deterministic projection, an atomic-flows-v1 inventory, and an audited Tiangong Chinese flow-name contract.

## Accepted Edges

| CPC | Product | Canonical PCR id | Atomic cards | Product flow UUID |
| --- | --- | --- | ---: | --- |
| 21673 | Oil of olive residues | pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.meat-fish-fruits-vegetables-oils-and-fats.oil-of-olive-residues | 46 | a398f8c0-8c39-4924-ae53-bb901e1eac90 |
| 23170 | Other vegetable flours and meals | pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.grain-mill-products-starches-and-starch-products-other-food-products.other-vegetable-flours-and-meals | 47 | ec00d815-ccbe-4e9d-845a-efc929f58f56 |
| 23929 | Other spices and aromatics, processed | pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.grain-mill-products-starches-and-starch-products-other-food-products.other-spices-and-aromatics-processed | 98 | 4425d417-e7f4-4569-9985-3468985b4a1f |
| 24212 | Wine of fresh grapes, except sparkling wine; grape must | pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.beverages.wine-of-fresh-grapes-except-sparkling-wine-grape-must | 63 | 267f0e7f-b77b-4baf-8e0a-a4e4f180e3ec |
| 24220 | Vermouth and other wine of fresh grapes flavoured with plats or aromatic substances | pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.beverages.vermouth-and-other-wine-of-fresh-grapes-flavoured-with-plats-or-aromatic-substances | 48 | ec365540-43a3-42e4-975d-d2386455767a |
| 26170 | Jute and other textile bast fibres, processed but not spun; tow and waste | pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.yarn-and-thread-woven-and-tufted-textile-fabrics.jute-and-other-textile-bast-fibres-except-flax-true-hemp-and-ramie-processed-but-not-sp-997c4cad | 33 | f3c8c841-9fe8-4c84-9f01-5dac913d827b |

## Evidence and Verification

- Retained UN CPC 3.0 source bytes define all six product boundaries.
- Tiangong flow-hybrid-search plus public state-code-100 direct reads confirmed every reference flow as a CPC-exact Product/Mass flow with an auditable kg reference unit.
- Native search and OpenAlex supported discovery; only official originals and directly checked full text support authored rules. Search snippets, metadata, and abstracts alone support no rule or amount range.
- Central parser checks confirmed bilingual process and atomic-card identity, exact Tiangong Chinese names for UUID-bearing flows, and deterministic structured projections.
- No single case or literature point was converted into a range. Unsupported ranges were omitted; the only retained reasoned estimates are explicitly provisional, broad, and source-independent.

## Consequences

- CPC 3.0 has 406 accepted mappings and 2,471 unmapped leaves.
- The alias registry has 2,471 entries.
- The material catalog has 408 PCRs and 2,470 legacy scaffolds.
