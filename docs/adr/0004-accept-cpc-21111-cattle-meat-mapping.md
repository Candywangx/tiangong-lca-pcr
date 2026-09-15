---
title: Accept CPC 21111 Cattle Meat Mapping
docType: decision
scope: repo
status: accepted
authoritative: true
owner: tiangong-lca-pcr
language: en
whenToUse:
  - when resolving CPC 3.0 code 21111
  - when auditing the cattle-meat PCR identity
  - when generating the legacy PCR id alias registry
whenToUpdate:
  - when the CPC 21111 semantic scope or target PCR identity changes
checkPaths:
  - docs/adr/0004-accept-cpc-21111-cattle-meat-mapping.md
  - classifications/mappings/cpc-3.0-to-pcr.yaml
  - classifications/aliases/pcr-id-aliases.yaml
  - classifications/indexes/cpc-3.0-coverage.json
  - library/pcrs/food-products-beverages-and-tobacco-textiles-apparel-and-leather-products/meat-fish-fruits-vegetables-oils-and-fats/meat-of-cattle-fresh-or-chilled/**
lastReviewedAt: 2026-07-24
lastReviewedCommit: null
---

# Accept CPC 21111 Cattle Meat Mapping

## Decision

Accept CPC 3.0 code `21111`, “Meat of cattle, fresh or chilled,” as an `exact` positive mapping to:

`pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.meat-fish-fruits-vegetables-oils-and-fats.meat-of-cattle-fresh-or-chilled`

The user instruction for this goal authorized direct creation without a later confirmation gate. The accepted target
is a complete candidate material PCR with an independently defined semantic boundary, bilingual methodology,
generated structured projection, and resolved reference-flow identities. The classification leaf did not create the
methodology by itself; it supplies one exact external index after the product boundary and method need were authored.

## Scope Match

Both sides cover meat obtained from cattle and supplied fresh or chilled. The PCR explicitly excludes adjacent CPC
categories and product states, including live cattle, buffalo meat, edible offal as reference product, frozen cattle
meat, and prepared or preserved cattle meat. Its reference product and required qualifiers keep product form, grade,
bone status, packaging, and temperature explicit without expanding beyond code `21111`.

## Consequences

- CPC `21111` resolves deterministically to the material cattle-meat PCR.
- The same leaf-derived id is removed from the generated legacy alias registry, avoiding an alias/material collision.
- CPC 3.0 coverage becomes 4 mapped, 2,873 unmapped, and 0 unknown across 2,877 leaves.
- The alias registry becomes 2,873 entries; 2,872 legacy scaffold directories remain after the earlier `99000`
  removal and this in-place material promotion.
- PCR readiness remains separate from mapping acceptance: the candidate record requires methodology review before
  active or published use.
