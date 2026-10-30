---
title: PR30 combined source requalification
docType: report
scope: repo
status: draft
authoritative: false
owner: tiangong-lca-pcr
language: en
lastReviewedAt: 2026-10-30
lastReviewedCommit: null
lastReviewedNote: "Independent lossless search engineering, bounded scope clarification and evidence navigation; complete qualification remains explicit."
---

# PR30 combined source requalification

PR stays Draft. This package tracks PR30 content combined with fork main `bf14ac0dc2e59810a64b6cb9fb2a06751fd775ab` and upstream main `ee3178ac6d3b111bf1d62162265704b7c6efc607` (product 0.4.10 preparation). This is a review candidate, not publication or approval. Fresh complete validation and bilingual static-product qualification are in progress; historical successes do not qualify this combination.

## Changes and inspection

- Mattress CPC 38150 scope explicitly marks its existing excluded-product paragraph with `Excluded:` and `明确排除：`. No product/route exclusion is added or removed. The generated projection was synced twice with identical bytes; [target check](mattress-check.json) retains warnings and complete measurement results.
- [Original 35 UUID access](../cpc3-35-factual-review-20261028/native-identity-access/README.md): 227 flow records in 15 bounded chunks.
- [Additional 34 UUID access](../cpc3-additional34-20261029/native-identity-access/README.md): all 246 read flow records in 16 chunks, including the rejected packaging UUID. Both original complete evidence JSON files are unchanged. Each index supplies whole-file and per-value hashes, original UTF-8 byte ranges, JSON Pointers and exact chunk locations. This adds inspectability, not a new identity audit.

## Historical hosted result

[Run139 metadata and every job/step](hosted-run139.json) confirms `failure`, not pending: `web-build` and aggregate `validate` failed; documentation sealer, source coverage and sealed consumers were skipped. All eight source test shards passed. [GitHub annotations](hosted-web-build-annotations.json) report exit code 1 but do not expose a diagnostic proving the detailed failure cause. The retrieved failed-job log also omits the build command output; the earlier local English-capacity failure is not presented as independent proof of the hosted cause.

The hosted event names PR head `1e67d0e3cb3023b6f310491b984390b51e891a71`; its uploaded documentation coverage receipt names merge source `b39e06c6c566d20a240730de951a6d83baa04727`. Historical local validate success and documentation failure belong to `678fc0484335507f1cd742ba29533a4c1c175746`, as retained in the earlier package. Fresh qualification must bind its own source/run/attempt.
