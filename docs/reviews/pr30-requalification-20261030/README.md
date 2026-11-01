---
title: PR30 combined source requalification
docType: report
scope: repo
status: draft
authoritative: false
owner: tiangong-lca-pcr
language: en
lastReviewedAt: 2026-11-01
lastReviewedCommit: 003098ef221a633fc21c1c7275a6fcdca6fdf9c6
lastReviewedNote: "Independent lossless search engineering, bounded scope clarification and evidence navigation; complete local qualification is source-bound; hosted acceptance remains separate."
---

# PR30 combined source requalification

PR stays Draft. This package tracks PR30 content combined with fork main `bf14ac0dc2e59810a64b6cb9fb2a06751fd775ab` and upstream main `ee3178ac6d3b111bf1d62162265704b7c6efc607` (product 0.4.10 preparation). This is a review candidate, not publication or approval. Complete local validation and bilingual sealed-product qualification passed on frozen source `003098ef221a633fc21c1c7275a6fcdca6fdf9c6`. Later evidence-only descendants retain that identity explicitly. Hosted qualification remains separate; historical successes do not qualify a new CI source.

## Changes and inspection

- Mattress CPC 38150 scope explicitly marks its existing excluded-product paragraph with `Excluded:` and `明确排除：`. No product/route exclusion is added or removed. The generated projection was synced twice with identical bytes; [target check](mattress-check.json) retains warnings and complete measurement results.
- [Original 35 UUID access](../cpc3-35-factual-review-20261028/native-identity-access/README.md): 227 flow records in 15 bounded chunks.
- [Additional 34 UUID access](../cpc3-additional34-20261029/native-identity-access/README.md): all 246 read flow records in 16 chunks, including the rejected packaging UUID. Both original complete evidence JSON files are unchanged. Each index supplies whole-file and per-value hashes, original UTF-8 byte ranges, JSON Pointers and exact chunk locations. This adds inspectability, not a new identity audit.

## Historical hosted result

[Run139 metadata and every job/step](hosted-run139.json) confirms `failure`, not pending: `web-build` and aggregate `validate` failed; documentation sealer, source coverage and sealed consumers were skipped. All eight source test shards passed. [Complete web-build job log](hosted-web-build-full.log), fetched directly through the job-log API, reports English search gzip **4,196,237 / 4,000,000 bytes** at the actual hosted merge source. The aggregate `--log-failed` view omitted this output; it is not used to infer the cause. Chinese generation, final file count and complete product acceptance were not reached. [GitHub annotations](hosted-web-build-annotations.json) separately record exit code 1.

The hosted event names PR head `1e67d0e3cb3023b6f310491b984390b51e891a71`; its uploaded documentation coverage receipt names merge source `b39e06c6c566d20a240730de951a6d83baa04727`. Historical local validate success and documentation failure belong to `678fc0484335507f1cd742ba29533a4c1c175746`, as retained in the earlier package. Fresh qualification must bind its own source/run/attempt.

## Complete current local result

[Source-bound status](qualified-003098/status.json) and [all raw gate logs and artifacts](qualified-003098/README.md) qualify `003098ef221a633fc21c1c7275a6fcdca6fdf9c6` / tree `456e2e521cbbefc97d759d206cb0e6fbc43e9e04`:

- Full repository validation: 3,398 tests, 3,393 pass, zero failures, five skips. Four-CPU affinity bounds concurrency without filtering tests.
- English search: 3,702,559 gzip bytes; Chinese: 3,802,336. Both retain the original 4,000,000 gzip / 20,000,000 raw byte limits. All 101 logical shards round-trip exactly; 1,010 finite ordered query comparisons match.
- Complete website: 1,541 PCRs, 3,092 source documents, 6,173 physical original downloads, 19,777 export files. The sealed product has 19,778 files including routing configuration, below the strict 20,000 limit.
- Product packaging, manifest/checksum verification, complete SEO, Linux x64 offline consumption, and all 60 browser cases across Chromium/Firefox/WebKit passed. Nine no-JavaScript native downloads passed. No product tag, publication or deployment was performed.

## Engineering and independently inspectable evidence

[Lossless search transport](../pr30-search-capacity-20261030/README.md) retains the complete historical PR corpus, native payloads, manifests and finite query comparisons. [Chapter packing](../pr30-chapter-capacity-20261030/README.md) keeps complete original source/HAST structure while coalescing underfilled final chapters within the existing limits. **462 old continuation URLs are retired without compatibility redirects, and page-level search granularity changes.** The [per-document route index](../pr30-chapter-capacity-20261030/route-audit/index.md) exposes each removed URL and moved anchor. All surviving reading URLs and all 6,173 native download rows remain exact.

[Browser qualification repair and full evidence](../pr30-guide-navigation-review-20261101/README.md) records the original failed enabled-script request, eight non-reproducing probes, a controlled delayed-script regression and the unchanged fatal-error policy. The qualifier now waits for the already-observed current document requests before its test-only return navigation. This establishes the controlled timing repair; it does not claim unique attribution of the historical failure. [Independent code review](independent-browser-qualification-review.json) and [independent evidence review](independent-browser-proofpacket-review.json) retain their checked scope.

## Earlier attempts remain failed

[The 34206 attempt](superseded-34206/README.md) retains the initial environment-dependent validation failures and excessive export file count. [The 1ca attempt](attempt-1ca/README.md) retains its passing full tests/website/SEO/offline checks and its failed sealed WebKit guide case. A concurrent build that lost resource measurement is also retained as failed. None is relabelled as successful by the new receipts, and no test or resource threshold was weakened.

[Qualification status](qualification-status.json) distinguishes the current local source, earlier failures and hosted qualification. The latest hosted state must be read on PR #30; no local artifact grants hosted acceptance or scientific/translation approval.

[Independent final evidence review](independent-final-qualification-review.json) verifies all 148 published/original artifact digests, eight source-bound gates and the overview claims without re-running tests or inferring hosted approval.

## Subsequent hosted failure and compatibility follow-up

The later evidence-only delivery head `714d6c023` failed hosted run 41273337865 in test discovery. Its local 003098 receipts remain valid only for their recorded source. [The follow-up package](../pr30-followup-20261101/README.md) preserves that failure, repairs the snapshot name and addresses the actual published subset of the previously retired chapter URLs. Read PR #30 and its final Actions artifacts for current qualification.
