---
title: CPC 3.0 63290 mapping decision
docType: decision
scope: repo
status: draft
authoritative: false
owner: tiangong-lca-pcr
language: en
classification_system: CPC
classification_version: "3.0"
classification_code: "63290"
pcr_id: "pcr.private-rail-sleeping-compartment-journeys"
mapping_type: "narrower"
decided_by: null
decided_at_utc: null
whenToUse:
  - when reviewing CPC 3.0 code 63290 mapping acceptance
whenToUpdate:
  - when the source leaf or PCR semantic boundary changes
checkPaths:
  - docs/adr/cpc-63290.md
  - classifications/mappings/cpc-3.0-to-pcr.yaml
---

# CPC 3.0 63290 mapping decision

## Source leaf and target

- Official leaf: Other room or unit accommodation services n.e.c. Official UNSD CPC3.0 explanatory notes, 30 June2025, printed356: semi-permanent rooming/boardinghouse and residential-club accommodation plus sleeping-car services. [Official notes](https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Exp_Notes_30Jun2025.pdf).
- Target: `pcr.private-rail-sleeping-compartment-journeys`.
- Proposed relation: `narrower`; only actual exclusive sleeping-compartment accommodation, not the whole leaf.

## Semantic boundary

Actually fulfilled exclusive sleeping-compartment service for an actual declared rail journey/service episode; native route/segment/time/configuration/guest/package and acceptance records define the service. Independently supplied shared berths, seats, stationary residence, passenger transport alone and dining-car service alone are excluded. Included food and other actual package duties remain inside with complete provider or reviewed production-stage coverage.

The independent methodology need is moving accommodation: actual segment train/coach membership and split/join, shared traction/auxiliary energy and full rolling-stock/rail/station/depot lifecycle, all consumers and necessary empty/repositioning/failed/readiness periods. A rail ticket or supplement price is not physical allocation. Complete physical provider coverage OR completed exclusive missing stages may be used once; neither full-train passenger transport duplication nor unsupported zero vehicle/traction duty is acceptable.

Current443material catalog and six actual accommodation scopes were screened. Existing stationary room/bed/villa/apartment/pitch/camp methods do not own this moving-vehicle interface. Fixed semi-permanent boardinghouse/residential-club products must reuse an actually matching purpose-neutral assigned residential room-day method if applicable, rather than acquire another PCR solely for this leaf. This proposed narrower edge makes no claim that such other leaf products or shared sleeping berths are covered.

## Review findings

- Root approved semantic product boundary for authoring; final mapping acceptance pending.
- Author completion: actual English/Chinese one-node37-card14-protocol methodology and official generated projection; all20 selected obligations manually reviewed, actual per-operand native fields and output handoffs, terminal-only water, gross-drawn stock and exclusive refrigerant account. Target check:189 performed,0skipped,0findings,22 honest generic-range advisories. Repeat sync identical. Final semantic mapping acceptance remains root responsibility.
- Identity:37 concrete flow identities unresolved; one actual initial reference lookup failed OAuth,36 initial plans not executed and no absence claim. Count property/unitgroup personally full-read from same-day actual support cache, independent of product identity. No numerical ranges/factors/lifetimes guessed; actual foreground data, complete source/provider stages and verified final exchanges remain mandatory.
- Scope evidence: current first-party Caledonian accommodation/room-supplement/train-formation/food-service pages and published2025 traction/depot EIR; current Nightjet sleeping and private-compartment pages. Their published prices, capacities, service times and qualitative examples are not universal inventories or allocation factors.

- An author lifecycle command unexpectedly auto-added a generic-policy mapping before this ADR acceptance; root preserved actual artifacts, removed that edge, restored exact439-edge prior mapping bytes and regenerated shared artifacts. This draft is not the autoaccept evidence.

## Decision

Draft only. No positive mapping may be added until the actual final methodology, bilingual and projection agreement, source and physical responsibility interfaces, unresolved identity constraints and selected-target validation have been reviewed. Root owns final acceptance, reviewer/time and mapping/catalog integration.
