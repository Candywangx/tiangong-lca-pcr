---
title: Accept Goal food rolling batch 081 CPC 3.0 mappings
docType: decision
scope: repo
status: accepted
authoritative: true
owner: tiangong-lca-pcr
language: en
whenToUse:
  - when auditing Goal food rolling production batch 081
  - when resolving CPC 24139, 24211, 24230, 24320, 24410, or 24429
whenToUpdate:
  - when an accepted semantic mapping or PCR identity changes
  - when an unresolved Tiangong reference-product flow is confirmed
checkPaths:
  - docs/adr/0079-accept-goal-food-rolling-batch-081-cpc-mappings.md
  - classifications/mappings/cpc-3.0-to-pcr.yaml
  - classifications/aliases/pcr-id-aliases.yaml
  - classifications/indexes/cpc-3.0-coverage.json
  - library/catalog.yaml
  - library/indexes/pcr-index.yaml
lastReviewedAt: 2026-08-23
lastReviewedCommit: null
---

# Accept Goal Food Rolling Batch 081 CPC 3.0 Mappings

## Decision

Accept six exact CPC-to-PCR edges authored in independent desktop-visible Worktrees, centrally audited, and integrated as one serialized snapshot. Each target is a bilingual `candidate` / `authored_methodology` PCR with a current structured projection and atomic, localized inventory. The repository user explicitly permits an exact reference-product UUID to remain blank for later alignment when Tiangong has no semantically exact public flow.

## Accepted Edges

| CPC | Product | Canonical PCR id | Atomic cards | Product flow UUID |
| --- | --- | --- | ---: | --- |
| 24139 | Other spirituous beverages and undenatured ethyl alcohol below 80% vol | `pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.beverages.other-spirituous-beverages-and-undenatured-ethyl-alcohol-of-an-alcoholic-strength-by-vo-94969250` | 95 | unresolved |
| 24211 | Sparkling wine of fresh grapes | `pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.beverages.sparkling-wine-of-fresh-grapes` | 78 | unresolved |
| 24230 | Cider, perry, mead and other fermented beverages | `pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.beverages.cider-perry-mead-and-other-fermented-beverages-except-wine-of-fresh-grapes-and-beer-mad-fd13b130` | 95 | unresolved |
| 24320 | Malt, whether or not roasted | `pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.beverages.malt-whether-or-not-roasted` | 61 | unresolved |
| 24410 | Bottled waters, not sweetened or flavoured | `pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.beverages.bottled-waters-not-sweetened-or-flavoured` | 60 | unresolved |
| 24429 | Other non-animal milk | `pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.beverages.other-non-animal-milk` | 118 | unresolved |

## Verification

- The retained UN CPC 3.0 source defines each complete product boundary. Scope and exclusions were checked against the corresponding leaf rather than a narrower product example.
- Tiangong hybrid search and state-code-100 reads rejected broader or narrower product-flow candidates. Mass `93a60a56-a3c8-11da-a746-0800200b9a66`, Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66`, and kg are retained as the verified reference basis.
- Ordinary search and OpenAlex were used for discovery; final rules cite checked official originals and accessible original research, not search snippets or abstracts.
- Central inspection found equal bilingual card counts and ordering, localized Chinese flow names, no collection-label flows, no unsupported ranges, current structured fingerprints, and zero target errors.

## Consequences

- The six CPC leaves become accepted positive mappings to canonical material PCRs.
- Alias, catalog, material index, CPC coverage, and viewer data are regenerated from repository truth.
- Product-flow UUID alignment remains explicit follow-up work and does not authorize substituting a semantically incompatible Tiangong flow.
