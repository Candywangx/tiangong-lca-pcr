---
title: Accept CPC 26350 cotton sewing thread mapping
docType: decision
scope: repo
status: accepted
authoritative: true
owner: tiangong-lca-pcr
language: en
whenToUse:
  - when resolving CPC 3.0 code 26350
  - when auditing the cotton sewing thread PCR and its unresolved Tiangong product flow
whenToUpdate:
  - when the CPC 26350 product boundary or canonical PCR identity changes
  - when an exact public Tiangong cotton sewing thread flow is confirmed
checkPaths:
  - docs/adr/0078-accept-cpc-26350-cotton-sewing-thread-mapping.md
  - classifications/mappings/cpc-3.0-to-pcr.yaml
  - classifications/aliases/pcr-id-aliases.yaml
  - classifications/indexes/cpc-3.0-coverage.json
  - library/catalog.yaml
  - library/indexes/pcr-index.yaml
lastReviewedAt: 2026-08-23
lastReviewedCommit: null
---

# Accept CPC 26350 Cotton Sewing Thread Mapping

## Decision

Accept one exact edge from CPC 3.0 code `26350`, “Cotton sewing thread,” to `pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.yarn-and-thread-woven-and-tufted-textile-fabrics.cotton-sewing-thread` under the repository user's approved Goal mapping-integration workflow.

The target is a bilingual `candidate` / `authored_methodology` PCR with 45 atomic inventory cards and a current deterministic projection. Its product boundary is exactly cotton sewing thread and excludes general cotton yarn, non-cotton sewing thread, retail notions, and downstream sewing operations.

## Tiangong Identity Review

UUID `acc1dfc6-9056-49b3-906f-d9989872309e` was directly verified as the public state-100 Product flow “Dyed Cotton Yarns / 染色棉纱线类” with CPC 26350 and Mass. It is nevertheless rejected for the reference product because its yarn identity is broader than cotton sewing thread. The PCR now uses the concrete reference-product name “Cotton sewing thread / 棉缝纫线,” leaves the product UUID blank, and registers output row `final_cotton_sewing_thread` under `review_metadata.unresolved_flow_identities`.

## Consequences

- CPC 26350 becomes an accepted exact mapping to the material PCR.
- Deterministic alias generation removes the colliding retired leaf-derived alias instead of hand-editing the alias registry.
- The unresolved exact Tiangong product flow remains candidate-stage follow-up and does not prevent classification mapping or candidate guidance.
