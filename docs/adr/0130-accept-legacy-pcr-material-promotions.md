---
title: Accept fourteen retained legacy PCR material promotions for CPC 3.0
docType: decision
scope: repo
status: accepted
authoritative: true
owner: tiangong-lca-pcr
language: en
whenToUse:
  - when resolving the fourteen CPC 3.0 codes accepted by this decision
  - when regenerating aliases, coverage, or the material catalog after this migration
whenToUpdate:
  - when an accepted semantic mapping or target PCR identity in this batch changes
checkPaths:
  - docs/adr/0130-accept-legacy-pcr-material-promotions.md
  - classifications/mappings/cpc-3.0-to-pcr.yaml
  - classifications/aliases/pcr-id-aliases.yaml
  - classifications/indexes/cpc-3.0-coverage.json
  - library/catalog.yaml
  - library/pcrs/agriculture-forestry-and-fishery-products/**
lastReviewedAt: 2026-09-10
lastReviewedCommit: null
---

# Accept Fourteen Retained Legacy PCR Material Promotions for CPC 3.0

## Decision

Accept the fourteen exact CPC 3.0-to-PCR mappings below. Repository-owner approval covers this controlled migration from retained legacy scaffold identities to canonical, material PCR records. The source methodology was imported from the earlier PCR library, localized to the current controlled vocabulary where needed, and resynchronized into deterministic structured projections.

## Accepted Edges

| CPC 3.0 | Product | Relation | Canonical PCR id |
| --- | --- | --- | --- |
| 02132 | Asses | exact | pcr.agriculture-forestry-and-fishery-products.live-animals-and-animal-products-excluding-meat.asses |
| 02196 | Bees | exact | pcr.agriculture-forestry-and-fishery-products.live-animals-and-animal-products-excluding-meat.bees |
| 03211 | Balata, gutta-percha, guayule, chicle and similar natural gums | exact | pcr.agriculture-forestry-and-fishery-products.forestry-and-logging-products.balata-gutta-percha-guayule-chicle-and-similar-natural-gums-in-primary-forms-or-in-plat-e156088a |
| 03251 | Cotton linters | exact | pcr.agriculture-forestry-and-fishery-products.forestry-and-logging-products.cotton-linters |
| 04252 | Farmed tunas, skipjack or stripe-bellied bonito, live, fresh or chilled | exact | pcr.agriculture-forestry-and-fishery-products.fish-crustaceans-molluscs-and-other-aquatic-invertebrates-products.farmed-tunas-skipjack-or-stripe-bellied-bonito-live-fresh-or-chilled |
| 04312 | Farmed crabs, live, fresh or chilled | exact | pcr.agriculture-forestry-and-fishery-products.fish-crustaceans-molluscs-and-other-aquatic-invertebrates-products.farmed-crabs-live-fresh-or-chilled |
| 04322 | Farmed rock lobster and other sea crawfish, live, fresh or chilled | exact | pcr.agriculture-forestry-and-fishery-products.fish-crustaceans-molluscs-and-other-aquatic-invertebrates-products.farmed-rock-lobster-and-other-sea-crawfish-live-fresh-or-chilled |
| 04332 | Farmed lobsters (Homarus spp.), live, fresh or chilled | exact | pcr.agriculture-forestry-and-fishery-products.fish-crustaceans-molluscs-and-other-aquatic-invertebrates-products.farmed-lobsters-homarus-spp-live-fresh-or-chilled |
| 04342 | Farmed Norway lobsters, live, fresh or chilled | exact | pcr.agriculture-forestry-and-fishery-products.fish-crustaceans-molluscs-and-other-aquatic-invertebrates-products.farmed-norway-lobsters-live-fresh-or-chilled |
| 04392 | Other farmed crustaceans, live, fresh or chilled | exact | pcr.agriculture-forestry-and-fishery-products.fish-crustaceans-molluscs-and-other-aquatic-invertebrates-products.other-farmed-crustaceans-live-fresh-or-chilled |
| 04432 | Farmed mussels, live, fresh or chilled | exact | pcr.agriculture-forestry-and-fishery-products.fish-crustaceans-molluscs-and-other-aquatic-invertebrates-products.farmed-mussels-live-fresh-or-chilled |
| 04530 | Jellyfish, live, fresh or chilled | exact | pcr.agriculture-forestry-and-fishery-products.fish-crustaceans-molluscs-and-other-aquatic-invertebrates-products.jellyfish-live-fresh-or-chilled |
| 04590 | Other aquatic invertebrates, live, fresh or chilled, n.e.c. | exact | pcr.agriculture-forestry-and-fishery-products.fish-crustaceans-molluscs-and-other-aquatic-invertebrates-products.other-aquatic-invertebrates-live-fresh-or-chilled-n-e-c |
| 04920 | Natural sponges of aquatic animal origin | exact | pcr.agriculture-forestry-and-fishery-products.fish-crustaceans-molluscs-and-other-aquatic-invertebrates-products.natural-sponges-of-aquatic-animal-origin |

## Semantic Scope Check

For every accepted edge, the normalized CPC 3.0 leaf title is identical to the corresponding PCR manifest classification reference. Each target directory has a semantic product slug rather than a classification code and contains a bilingual, material candidate methodology with a current structured projection. The direct one-to-one product-boundary correspondence supports exact mapping.

## Consequences

- Deterministic alias regeneration omits these fourteen former terminal aliases.
- CPC 3.0 coverage resolves each listed code to its material PCR.
- Candidate or authored methodology status remains distinct from publication and does not claim reviewed or published lifecycle state.
- Catalog, material index, and coverage outputs must be regenerated through the catalog transaction.
