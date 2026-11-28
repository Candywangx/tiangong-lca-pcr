---
title: "CPC 3.0 68012: accepted narrower candidate mapping"
docType: decision
scope: repo
status: accepted
authoritative: true
owner: tiangong-lca-pcr
language: en
lastReviewedAt: "2026-11-16"
---

# CPC 3.0 68012: accepted narrower candidate mapping

## Decision

Retain the accepted mapping to `pcr.distributive-trade-services-accommodation-food-and-beverage-serving-ser-18ff339a.postal-and-courier-services.postal-services-related-to-parcels` with relation `narrower`. Acceptance metadata remains {"status":"accepted","decided_by":"codex-cpc68-main-agent","decided_at_utc":"2026-11-16T04:50:42.199Z","decision_ref":"docs/adr/cpc-68-68012-comprehensive-repair-20261116.md"}. This consolidated decision preserves the existing decision-maker and time; it does not assert a new scientific review.

## Applicability and rationale

Covered products: Domestic ambient postal parcels/packages rendered under a universal service obligation, road acceptance-to-receipt chain

Excluded products: Non-USO courier; letters; standalone counter transactions; international/customs; air, sea, rail or cold chain; goods manufacturing

Production route: Acceptance; sorting and temporary holding; road linehaul; local delivery; documented receipt, with attributable unsuccessful/repeated/return activity

This method covers the specified route and service gates within CPC 68012, rather than every product or configuration in that subclass. The accepted relation is narrower. CPC membership and separately covered upstream/downstream endpoints do not establish complete-chain applicability. The existing PCR identity and reference output are retained.

Reference: 1 Item(s); Postal parcel delivery service under universal service obligation. All qualifiers, allocation denominators, service/physical exclusions and conditional activation requirements remain in the canonical bilingual PCR and its generated projection. Each active flow has one primary property/unit.

## Candidate limitations

Lifecycle remains candidate / authored_methodology; Chinese remains aligned. There are 106 conditional method cards, including 99 unbound flow identities and 7 rows retaining UUIDs. These counts do not mean every card is simultaneously active. Manifest row registries and completion conditions govern identity gaps. Official UUID responses, receipts, historical audit files and a separate review summary are not part of this change. Retaining a UUID does not make its verification independently reproducible from this change. Independent methodology review, translation certification and publication are not granted by this mapping decision.

## Canonical source

- [manifest.yaml](../../library/pcrs/distributive-trade-services-accommodation-food-and-beverage-serving-ser-18ff339a/postal-and-courier-services/postal-services-related-to-parcels/manifest.yaml): SHA-256 `aeeeaf8f5566bbf034af3e81766880844255841ee6424aceaee56661f15ce079`
- [pcr.en-US.md](../../library/pcrs/distributive-trade-services-accommodation-food-and-beverage-serving-ser-18ff339a/postal-and-courier-services/postal-services-related-to-parcels/pcr.en-US.md): SHA-256 `47dea45ea62784beb4c0769c77e7f7bccb19c6d2710ebed51f51feec389fd4a3`
- [pcr.zh-CN.md](../../library/pcrs/distributive-trade-services-accommodation-food-and-beverage-serving-ser-18ff339a/postal-and-courier-services/postal-services-related-to-parcels/pcr.zh-CN.md): SHA-256 `a015df562c3089d7e1ad861f5ff4ed46d47bd308357683935d32a2812dbf397b`
- [structured.yaml](../../library/pcrs/distributive-trade-services-accommodation-food-and-beverage-serving-ser-18ff339a/postal-and-courier-services/postal-services-related-to-parcels/structured.yaml): SHA-256 `39893d4c523dd81cddff48a7684785331da2aa7116cdd017205b30260b70e0c0`
