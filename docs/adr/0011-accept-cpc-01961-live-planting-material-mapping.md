---
title: Accept CPC 3.0 01961 mapping to live planting material PCR
docType: decision
scope: repo
status: accepted
authoritative: true
owner: tiangong-lca-pcr
language: en
lastReviewedAt: 2026-07-30
---

# Accept CPC 3.0 01961 Mapping to Live Planting Material PCR

## Decision

Accept an `exact` CPC 3.0 mapping from code `01961`, "Live plants; bulbs, tubers and roots; cuttings and slips;
mushroom spawn", to:

`pcr.agriculture-forestry-and-fishery-products.products-of-agriculture-horticulture-and-market-gardening.live-plants-bulbs-tubers-and-roots-cuttings-and-slips-mushroom-spawn`

The accepted edge is recorded in `classifications/mappings/cpc-3.0-to-pcr.yaml`. This decision promotes the retained
leaf-derived empty scaffold in place as a canonical, classification-independent material PCR. CPC remains mapping
context and does not own the PCR identity.

## Semantic Scope Check

The PCR covers living plant and fungal propagation material placed on the market for planting, transplanting,
grafting, vegetative propagation, or inoculation: nursery plants and rooted young plants; bulbs, corms, rhizomes,
tubers, tuberous roots, crowns, and live roots for propagation; rooted and unrooted cuttings and slips; and mushroom
spawn supplied on a declared carrier or substrate.

It excludes edible roots and tubers sold as food, cut flowers and buds, seeds sold as seed, un-inoculated growing
media or mushroom substrate, harvested mushrooms, propagation services without a product flow, and crop cultivation
after the propagation material leaves the producer gate. These are different product, service, or downstream system
boundaries.

This boundary is scope-equivalent to the normalized CPC 3.0 leaf `01961`. The canonical directory and id use a
semantic product slug and contain no classification code.

## Methodology Need

Live planting material and mushroom-spawn production require category-specific rules that classification alone does
not provide:

- a producer-gate net saleable mass reference flow with mandatory species or strain, propagation-material type,
  product state, carrier or growing-medium, count-to-mass, moisture, grade, viability, and health qualifiers;
- separate propagation setup, nursery growth or spawn incubation, and grading or gate-preparation processes;
- route-conditional rules for protected and field nursery production and for carrier preparation, sterilization,
  aseptic inoculation, incubation, and contamination screening in mushroom-spawn production;
- foreground records for source material, growing media or carriers, water, nutrients, treatments, energy, containers,
  packaging, yields, rejects, wastewater, and direct emissions;
- source and batch traceability, phytosanitary and contamination records, mass balance, allocation, and data-quality
  requirements;
- an explicit prohibition on treating equal mass as functional equivalence across species, grades, propagule types,
  viability, establishment performance, or spawn formulations.

These rules establish a material methodology need independent of CPC coverage.

## Evidence and Identity Status

IPPC ISPM 36 supports production-place plans, source and lot traceability, plant examinations, sanitation, pest
management, corrective actions, and records for plants for planting. FAO and CIFOR-ICRAF guidance supports nursery
management and healthy, uniform planting-material quality. FAO's mushroom-cultivation manual supports the
carrier-preparation, sterilization, aseptic inoculation, incubation, contamination-screening, reject, sanitation, and
recordkeeping process structure.

Wageningen Economic Research Report 2024-023, the 2024 FloriPEFCR for cut flowers and potted plants, supports the
functional-unit question structure and foreground collection of water, energy, fertilizers, growing media, packaging,
waste, allocation, and primary data for horticultural production. It is used as dated method evidence, not as a claim
that its stated validity continued after 2025. Ingram, Hall, and Knight provide peer-reviewed corroboration for the
importance of route-specific nursery and greenhouse energy, substrates, containers, and fertilizers.

Tiangong lookup confirms Mass flow property `93a60a56-a3c8-11da-a746-0800200b9a66`, Units of mass unit group
`93a60a57-a4c8-11da-a746-0800200c9a66`, and route-relevant water, growing-medium, wheat-carrier, fertilizer,
pesticide, and steam flows. It also confirms the candidate process records `Planting material production`
`58a647aa-a4d5-44a7-83ed-e2a3d33b8936` and `Spawn (mushroom inoculum)`
`986b7230-f563-4f11-8073-f0fea52f338d`.

The exact CPC-matched generic Tiangong `Planting material` flow
`555f6f5c-16e9-4e74-a23f-2daadf825ace` currently has CTUe as its only published reference property. The PCR therefore
does not adopt that UUID as its mass reference product flow and records the required correction or replacement as a
blocking review item. This accepted classification edge does not claim active methodology status, publication
readiness, or resolved Tiangong reference-product identity.

## Consequences

- Deterministic alias regeneration omits the old terminal alias for this PCR id.
- CPC 3.0 coverage resolves `01961` to this material PCR while runtime readiness exposes its
  `candidate / authored_methodology` lifecycle state and unresolved reference-product identity.
- The physical PCR directory count is unchanged because the retained scaffold is promoted in place.
- The material catalog and accepted CPC mapping each gain one entry.
- The PCR retains an aligned Chinese rendering and a deterministic structured projection; separate methodology review
  and Tiangong reference-product correction are required before an `active` lifecycle transition or publication.
