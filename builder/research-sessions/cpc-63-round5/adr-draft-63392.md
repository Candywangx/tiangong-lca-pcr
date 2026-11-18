---
title: CPC 63392 mapping to bounded operator-loaded prepared meal-set supply
docType: decision
scope: repo
status: draft
authoritative: false
owner: tiangong-lca-pcr
language: en
whenToUse:
  - reviewing CPC 63392 methodology mapping
whenToUpdate:
  - when the mapping decision or supporting physical boundary changes
checkPaths:
  - docs/adr/cpc-63392.md
  - classifications/mappings/cpc-3.0-to-pcr.yaml
  - library/pcrs/distributive-trade-services-accommodation-food-and-beverage-serving-ser-18ff339a/accommodation-food-and-beverage-services/operator-loaded-prepared-meal-set-supply/**
lastReviewedAt: 2026-10-20
lastReviewedCommit: null
lastReviewedNote: "Draft semantic mapping decision; independent integration review pending."
---

# CPC 63392: operator-loaded prepared meal-set supply

Decision status: draft. Proposed relation: `proxy`. Proposed target: `pcr.operator-loaded-prepared-meal-set-supply`.

Official CPC3 explanatory notes printed357 defines contractual food preparation and supply for airline and other transport companies. This label alone does not define one physical route. The proposed PCR selects actual offsite preparation, protected meal-set packing/holding, transport and loaded operator receipt, including actual supplier-owned return/wash/receiver and complete asset duties. It does not claim all transport-company food routes, passenger onboard finishing or a final eaten/served meal, and cannot use one flight, trolley or passenger as an assumed meal denominator.

The existing stationary onsite meal method excludes commissary transport; the existing offsite-prepared onsite-finished plated meal method requires onsite finishing and complete recipient service and explicitly excludes dropoff-only supply. Neither reference fits actual operator-loaded prepared supply. The new identity rests on this different physical product gate, not contract duration or airline/customer branding. Physically equivalent operators may reuse the method after gate review.

Current primary gategroup cook, equipment, transport, dishroom and flight-finalizer job pages establish qualitative real preparation, specification/pack/loading/transport/wash and quality/quantity change-fulfillment duties; Emirates Flight Catering establishes current commissary, equipment and high-loader responsibilities. Exact equivalent set, contract gate and operator receipt acceptance remain mandatory foreground evidence, not publicly verified signed contract facts. No universal menu, portion, recipe, temperature, waste or flight factor follows from these sources.

Sources and actual read extent are retained in `builder/research-sessions/cpc-63-round5/author-63392/source-review.json` and `source-addendum.json`. Individual URLs are also cited in the PCR. Root approved the bounded semantic proposal; this draft does not accept a mapping. Independent eight-principle content review, selected-target validation and root mapping readback remain required.
