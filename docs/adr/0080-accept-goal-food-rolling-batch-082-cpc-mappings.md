---
title: Accept Goal food rolling batch 082 CPC 3.0 mappings
docType: decision
scope: repo
status: accepted
authoritative: true
owner: tiangong-lca-pcr
language: en
whenToUse:
  - when auditing Goal food rolling production batch 082
  - when resolving CPC 21241, 21243, 21391, 21399, 21419, or 21439
whenToUpdate:
  - when an accepted semantic mapping or PCR identity changes
  - when an unresolved Tiangong reference-product flow is confirmed
checkPaths:
  - docs/adr/0080-accept-goal-food-rolling-batch-082-cpc-mappings.md
  - classifications/mappings/cpc-3.0-to-pcr.yaml
  - classifications/aliases/pcr-id-aliases.yaml
  - classifications/indexes/cpc-3.0-coverage.json
  - library/catalog.yaml
  - library/indexes/pcr-index.yaml
lastReviewedAt: 2026-08-24
lastReviewedCommit: null
---

# Accept Goal Food Rolling Batch 082 CPC 3.0 Mappings

## Decision

Accept six exact CPC-to-PCR edges authored in independent desktop-visible Worktrees, independently inspected by the dispatcher, and integrated as one serialized snapshot. Each target is a bilingual `candidate` / `authored_methodology` PCR with a current structured projection, atomic inventory, and localized Chinese flow displays. An exact reference-product UUID may remain blank with explicit unresolved evidence when Tiangong has no semantically exact public flow.

## Accepted Edges

| CPC | Product | Canonical PCR id | Atomic cards | Product flow UUID |
| --- | --- | --- | ---: | --- |
| 21241 | Prepared dishes and meals based on fish, molluscs and crustaceans | `pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.meat-fish-fruits-vegetables-oils-and-fats.prepared-dishes-and-meals-based-on-fish-molluscs-and-crustaceans` | 87 | unresolved |
| 21243 | Caviar and caviar substitutes | `pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.meat-fish-fruits-vegetables-oils-and-fats.caviar-and-caviar-substitutes` | 84 | unresolved |
| 21391 | Prepared dishes and meals based on vegetables, pulses and potatoes | `pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.meat-fish-fruits-vegetables-oils-and-fats.prepared-dishes-and-meals-based-on-vegetables-pulses-and-potatoes` | 73 | unresolved |
| 21399 | Other vegetables and pulses, preserved other than by vinegar, acetic acid or sugar, n.e.c. | `pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.meat-fish-fruits-vegetables-oils-and-fats.other-vegetables-and-pulses-preserved-other-than-by-vinegar-acetic-acid-or-sugar-n-e-c` | 95 | unresolved |
| 21419 | Other dried fruit, n.e.c. | `pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.meat-fish-fruits-vegetables-oils-and-fats.other-dried-fruit-n-e-c` | 91 | unresolved |
| 21439 | Other fruit juices, n.e.c. | `pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.meat-fish-fruits-vegetables-oils-and-fats.other-fruit-juices-n-e-c` | 73 | unresolved |

## Verification

- The retained UN CPC 3.0 source defines each complete product boundary. Each target was checked against its full leaf rather than a narrow example.
- Ordinary web search and centrally executed OpenAlex discovery were followed by official-page, DOI, publisher, repository, or full-text verification. Search snippets and abstracts were not used as final evidence.
- Tiangong candidates were accepted only after public state-code-100 direct reads. No semantically broader or narrower product flow was substituted. Mass `93a60a56-a3c8-11da-a746-0800200b9a66`, Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66`, and kg remain the verified reference basis.
- Dispatcher inspection found equal bilingual card counts and row ordering, localized Chinese card and selected-flow names, no collection-label inventory flows, no unsupported empirical ranges, current structured fingerprints, and zero target errors.

## Consequences

- The six CPC leaves become accepted positive mappings to canonical material PCRs.
- Alias, catalog, material index, CPC coverage, and viewer data are regenerated from repository truth.
- Unresolved product-flow UUIDs and empirical range evidence remain explicit follow-up work and do not authorize proxy UUIDs or fabricated ranges.
