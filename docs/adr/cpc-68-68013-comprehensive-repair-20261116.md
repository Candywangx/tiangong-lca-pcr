---
title: "CPC 3.0 68013: accepted narrower candidate mapping"
docType: decision
scope: repo
status: accepted
authoritative: true
owner: tiangong-lca-pcr
language: en
lastReviewedAt: "2026-11-16"
---

# CPC 3.0 68013: accepted narrower candidate mapping

## Decision

Retain the accepted mapping to `pcr.distributive-trade-services-accommodation-food-and-beverage-serving-ser-18ff339a.postal-and-courier-services.post-office-counter-services` with relation `narrower`. Acceptance metadata remains {"status":"accepted","decided_by":"codex-cpc68-main-agent","decided_at_utc":"2026-11-16T04:50:42.199Z","decision_ref":"docs/adr/cpc-68-68013-comprehensive-repair-20261116.md"}. This consolidated decision preserves the existing decision-maker and time; it does not assert a new scientific review.

## Applicability and rationale

Covered products: Manual post-office counter acceptance of one registered or certified letter or packet, with an individual acceptance record and sender receipt; each mail form and acceptance procedure is a separate dataset stratum

Excluded products: Standalone stamp sales; recipient pickup; financial, passport and retail services; self-service kiosks; door collection; sorting, storage after counter handoff, linehaul, delivery and delivery verification

Production route: Check eligibility and requested service; weigh where required; verify or apply individual identifier; record acceptance and payment status; issue receipt; hand over to the defined outgoing counter handoff point

This method covers the specified route and service gates within CPC 68013, rather than every product or configuration in that subclass. The accepted relation is narrower. CPC membership and separately covered upstream/downstream endpoints do not establish complete-chain applicability. The existing PCR identity and reference output are retained.

Reference: 1 Item(s); Counter acceptance service for one registered or certified mailpiece. All qualifiers, allocation denominators, service/physical exclusions and conditional activation requirements remain in the canonical bilingual PCR and its generated projection. Each active flow has one primary property/unit.

## Candidate limitations

Lifecycle remains candidate / authored_methodology; Chinese remains aligned. There are 30 conditional method cards, including 26 unbound flow identities and 4 rows retaining UUIDs. These counts do not mean every card is simultaneously active. Manifest row registries and completion conditions govern identity gaps. Official UUID responses, receipts, historical audit files and a separate review summary are not part of this change. Retaining a UUID does not make its verification independently reproducible from this change. Independent methodology review, translation certification and publication are not granted by this mapping decision.

## Canonical source

- [manifest.yaml](../../library/pcrs/distributive-trade-services-accommodation-food-and-beverage-serving-ser-18ff339a/postal-and-courier-services/post-office-counter-services/manifest.yaml): SHA-256 `f49f0ca6602dd9581ae06b0200738002f88c3e8b8613f11ea56839258473c7e5`
- [pcr.en-US.md](../../library/pcrs/distributive-trade-services-accommodation-food-and-beverage-serving-ser-18ff339a/postal-and-courier-services/post-office-counter-services/pcr.en-US.md): SHA-256 `821231059aab3c1a03ab14fef936a9b13bb97b373744e406b692dd0afca8c5ff`
- [pcr.zh-CN.md](../../library/pcrs/distributive-trade-services-accommodation-food-and-beverage-serving-ser-18ff339a/postal-and-courier-services/post-office-counter-services/pcr.zh-CN.md): SHA-256 `d265d8a154f33f93c0ee99fb00b38449d2c3838b1878f85074caf8cfe0ba35ce`
- [structured.yaml](../../library/pcrs/distributive-trade-services-accommodation-food-and-beverage-serving-ser-18ff339a/postal-and-courier-services/post-office-counter-services/structured.yaml): SHA-256 `d33a419ddd6101efc33648c566b3f895acc62f522dd0557280790a9a505e0e77`
