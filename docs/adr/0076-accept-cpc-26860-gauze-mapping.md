---
title: Accept CPC 26860 gauze mapping
docType: decision
scope: repo
status: accepted
authoritative: true
owner: tiangong-lca-pcr
language: en
whenToUse:
  - when resolving CPC 3.0 code 26860
  - when auditing the exact mapping for gauze other than narrow fabrics
  - when reviewing the unresolved Tiangong reference-flow identity for this PCR
whenToUpdate:
  - when the CPC 26860 product boundary or canonical PCR identity changes
  - when an exact public Tiangong reference product flow is confirmed
checkPaths:
  - docs/adr/0076-accept-cpc-26860-gauze-mapping.md
  - classifications/mappings/cpc-3.0-to-pcr.yaml
  - classifications/aliases/pcr-id-aliases.yaml
  - classifications/indexes/cpc-3.0-coverage.json
  - library/catalog.yaml
  - library/indexes/pcr-index.yaml
lastReviewedAt: 2026-08-21
lastReviewedCommit: null
---

# Accept CPC 26860 Gauze Mapping

## Decision

Accept one exact edge from CPC 3.0 code `26860`, “Gauze (other than narrow fabrics),” to
`pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.yarn-and-thread-woven-and-tufted-textile-fabrics.gauze-other-than-narrow-fabrics`.

The repository user explicitly approved this exact mapping in the Stage-4 integration task by supplying
`MAPPING_APPROVED=yes`. The decision time is `2026-08-21T13:33:43Z`, and the mapping records the decision maker as
`repository-user-approved-stage-4-integration` without attributing the decision to an invented person.

For code `26860` only, this decision supersedes the remaining-food-domain gate recorded in ADR 0075. It accepts the
classification relationship after the material PCR received an independently reviewed, exact product boundary. It
does not assert that the unresolved Tiangong reference-flow identity is complete, does not make the candidate PCR
ready for publication, and does not publish or release the PCR.

## Exact Semantic Relationship

The normalized CPC leaf is an English level-4 leaf named “Gauze (other than narrow fabrics).” The canonical PCR
covers woven gauze fabric in the piece made with standing or ground warp threads and crossing or doup warp threads
forming loops through which the weft passes. It requires a finished width greater than 30 cm and excludes narrow
fabrics, nonwovens, knitted or crocheted net, lace, glass-fibre woven fabrics, coated or laminated fabrics classified
elsewhere, made-up medical gauze and bandage articles, garments, and other made-up products.

The reference amount is `1 kg` net dry saleable gauze fabric at the factory gate. Packaging is inventoried but all
packaging tare is excluded from the reference-product mass. Greige, prepared, bleached, and piece-dyed states are
route qualifiers within the same CPC leaf and must be declared rather than averaged. These qualifications prevent
the reference flow from narrowing the mapping to one fibre, finish, package, medical use, or manufacturing route,
and prevent it from expanding the mapping to adjacent textile categories. The classification-to-PCR relationship is
therefore `exact`, not `broader`, `narrower`, or `proxy`.

## Tiangong UUID Verification Summary

No Tiangong UUID is adopted for the reference product flow. Four principal candidates were directly read with
`state_code=100`; all are Product flows with the Mass flow property, but all were rejected:

- `59caf1b9-5a05-4eef-8ba2-bc94aa28f43f` is glass-fibre woven fabric including narrow fabrics, CPC `26890`.
- `cf485fa4-e3bb-47e7-92b4-b474faa8b5fd` is medical absorbent cotton described as balls or pads; its CPC `26860`
  assignment does not overcome the incompatible product identity.
- `f8292a12-0851-4ed8-9ff3-18d5f4d302ff` is broader cotton fabric classified under CPC `27190` and carries an
  incompatible water-treatment-chemical route qualifier.
- `6014f191-3872-4607-8c5a-c4a216c96724` is made-up medical wadding, gauze, and bandage articles under CPC `35279`.

The PCR therefore retains a concrete unresolved reference-flow name rather than adopting a near match. The missing
reference product UUID, flow-property UUID, unit-group UUID, and reference-unit support remain publication blockers.
All inventory-flow UUIDs also remain unresolved and require later direct-read alignment, including an audit of
official Chinese base names.

## Consequences

- CPC 3.0 code `26860` becomes a positive accepted mapping with exact relation and durable acceptance evidence.
- The legacy leaf-derived alias for this same canonical PCR id is removed by deterministic alias generation.
- Coverage changes from `unmapped` to `mapped` and projects this ADR-backed acceptance decision.
- The candidate material PCR enters the material catalog with `review_required` readiness; mapping acceptance does
  not imply publication readiness or resolve the recorded Tiangong identity blockers.
- Alias, catalog, material-index, and coverage counts are regenerated from current repository truth rather than
  edited manually.
