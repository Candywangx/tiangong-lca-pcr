---
title: CPC 3.0 63210 assigned single-room residential place-day mapping decision
docType: decision
scope: repo
status: draft
authoritative: false
owner: tiangong-lca-pcr
language: en
classification_system: CPC
classification_version: "3.0"
classification_code: "63210"
pcr_id: "pcr.assigned-single-room-residential-place-days"
mapping_type: "proxy"
decided_by: null
decided_at_utc: null
whenToUse:
  - when reviewing CPC 3.0 code 63210 mapping acceptance
whenToUpdate:
  - when the CPC source label or PCR semantic boundary changes
checkPaths:
  - docs/adr/cpc-63210.md
  - classifications/mappings/cpc-3.0-to-pcr.yaml
---

# CPC 3.0 63210 mapping decision

## Source leaf and target

Official CPC3 printed355–356 labels63210 room or unit accommodation for students in student residences attached to schools/universities. Summer visitors and conference participants are explicitly directed to6311. The proposed canonical target is `pcr.assigned-single-room-residential-place-days`, with relation `proxy`.

## Semantic boundary

The physical product is one actually delivered assigned exclusive single-private-room residential place-day following established recipient handover, maintained operable and accessible in the declared actual service profile. Eligible temporary absence counts only while exclusive retention and real readiness/access continue; charges, planned offers, initial unreceived/no-show assignments, closed or repurposed rooms do not prove delivery. Real room moves have one recipient-time output while both actual resource segments remain accounted.

The purpose-neutral method may serve physically equivalent student, worker or other residents, while63210 includes other room/unit configurations. This is partial cross-purpose overlap, hence proxy rather than exact or a simple subset relation. Whole self-contained dwelling, shared-room berth, visitor room/bed-night, mobile sleeper and recreation-camp package are excluded. Uncovered true onsite food/transport production requires reviewed route/module/node expansion before application; any actual package duty must be completed through a physically matched provider or exclusive missing underlying stages exactly once.

The current443-material catalog and all six existing CPC63 scopes were screened. Existing visitor methods measure actual occupied visitor space-night or camp package; capital-building methods deliver construction. None supplies maintained assigned single-room residential availability through eligible resident absence. The need is physical supply/fulfillment and all-user period attribution, not student status or tenure. Detailed current university operations, current worker source limits and evidence remain in `builder/research-sessions/cpc-63-round3/author-63210/`. No generic lives, rates, clock conventions, meal counts or UUIDs are imported from examples.

## Review findings

Draft only: complete English/Chinese/structured content, module obligation review, identity lookup and selected-target checks are pending. Concrete flow identities and source-specific physical fulfillment remain mandatory. The same canonical method is proposed for63220, whose separate ADR is owned by its author.

## Decision

No accepted positive edge is created by this draft. Independent root semantic review, exact reviewer/time and mapping/catalog validation/readback are required. Candidate methodology is not publication-ready.
