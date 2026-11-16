---
title: "CPC 3.0 68039: accepted narrower candidate mapping"
docType: decision
scope: repo
status: accepted
authoritative: true
owner: tiangong-lca-pcr
language: en
lastReviewedAt: "2026-11-16"
---

# CPC 3.0 68039: accepted narrower candidate mapping

## Decision

Retain the accepted mapping to `pcr.distributive-trade-services-accommodation-food-and-beverage-serving-ser-18ff339a.postal-and-courier-services.local-delivery-services-for-items-other-than-food` with relation `narrower`. Acceptance metadata remains {"status":"accepted","decided_by":"codex-cpc68-main-agent","decided_at_utc":"2026-11-16T04:50:42.199Z","decision_ref":"docs/adr/cpc-68-68039-comprehensive-repair-20261116.md"}. This consolidated decision preserves the existing decision-maker and time; it does not assert a new scientific review.

## Applicability and rationale

Covered products: Local delivery of ambient non-food retail parcels by battery electric van

Excluded products: Exclude food delivery (68031), household and office moving (65115 and 65119), bicycle courier/messenger (68021), universal-service post and national/international courier networks. Also exclude dangerous goods, temperature-controlled cargo, bulk furniture relocation, fuelled or hybrid vehicles and subcontracted transport execution. A hired vehicle under operator operational control remains self-operated; a subcontractor that executes a physical transport segment makes this configuration inapplicable. Do not drop its activity or count both an outsourced service and self-operated inventory. This PCR is narrower than CPC 68039 and does not cover the residual leaf as a whole.

Production route: operator-controlled battery electric van; local retailer staging and delivery; R1234yf cabin HVAC only when present; no cargo refrigeration

This method covers the specified route and service gates within CPC 68039, rather than every product or configuration in that subclass. The accepted relation is narrower. CPC membership and separately covered upstream/downstream endpoints do not establish complete-chain applicability. The existing PCR identity and reference output are retained.

Reference: 1 Item(s); Accepted local delivery of one ambient non-food retail parcel. All qualifiers, allocation denominators, service/physical exclusions and conditional activation requirements remain in the canonical bilingual PCR and its generated projection. Each active flow has one primary property/unit.

## Candidate limitations

Lifecycle remains candidate / authored_methodology; Chinese remains aligned. There are 68 conditional method cards, including 61 unbound flow identities and 7 rows retaining UUIDs. These counts do not mean every card is simultaneously active. Manifest row registries and completion conditions govern identity gaps. Official UUID responses, receipts, historical audit files and a separate review summary are not part of this change. Retaining a UUID does not make its verification independently reproducible from this change. Independent methodology review, translation certification and publication are not granted by this mapping decision.

## Canonical source

- [manifest.yaml](../../library/pcrs/distributive-trade-services-accommodation-food-and-beverage-serving-ser-18ff339a/postal-and-courier-services/local-delivery-services-for-items-other-than-food/manifest.yaml): SHA-256 `c4cec739fec709c8c7dc275c0c9cde46494172a98b020202d32a94ba2de6609e`
- [pcr.en-US.md](../../library/pcrs/distributive-trade-services-accommodation-food-and-beverage-serving-ser-18ff339a/postal-and-courier-services/local-delivery-services-for-items-other-than-food/pcr.en-US.md): SHA-256 `40f06563c620c7598ff8003adb488d79da4fb1f5d75dc1c40f33d6d19b5d8504`
- [pcr.zh-CN.md](../../library/pcrs/distributive-trade-services-accommodation-food-and-beverage-serving-ser-18ff339a/postal-and-courier-services/local-delivery-services-for-items-other-than-food/pcr.zh-CN.md): SHA-256 `a3537348e00e695939cf5dabf4e955c49e71cb72884574465aa78a462ac21bea`
- [structured.yaml](../../library/pcrs/distributive-trade-services-accommodation-food-and-beverage-serving-ser-18ff339a/postal-and-courier-services/local-delivery-services-for-items-other-than-food/structured.yaml): SHA-256 `5ecd3c5043e97e6dff341ce25508df320d4c04b456f65cb4d1430759e4f40abb`
