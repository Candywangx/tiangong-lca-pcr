---
title: PR30 discovery correction and published chapter compatibility
docType: report
scope: repo
status: draft
authoritative: false
owner: tiangong-lca-pcr
language: en
lastReviewedAt: 2026-11-01
lastReviewedCommit: 714d6c023aa2e53ec1bba81f6ac6ed1f5a4b4984
lastReviewedNote: "Follow-up source review; final hosted result belongs to its Actions source/run/attempt, not this preparation record."
---

# PR30 discovery and published chapter follow-up

Existing fork PR #30 remains Draft. [Run 41273337865, attempt 1](https://github.com/Candywangx/tiangong-lca-pcr/actions/runs/41273337865) failed in `plan` on PR head `714d6c023aa2e53ec1bba81f6ac6ed1f5a4b4984`. [Original run metadata](discovery/failed-run.json) and [complete plan log](discovery/failed-plan.log) retain the actual tested merge source. The tested merge source was `2cc933f4f505b4bbc50ce8ca0da2d037005fb7e1`. Product jobs were skipped. Historical local `003098ef` success does not qualify this head or a future source.

## Discovery repair

The [original failure](discovery/discovery-before.log) is reproduced by the normal test entry point. The evidence snapshot is renamed to [regression-source.snapshot.txt](../pr30-guide-navigation-review-20261101/provenance/regression-source.snapshot.txt); its 8,375 bytes and SHA-256 `f228d37abfbea401d4000fd12f0e7199fa9d9f780fd6a893d89fa83eadc72091` are unchanged. [Old/new path mapping](../pr30-guide-navigation-review-20261101/provenance/path-map.json) and the current evidence index preserve its original locator/source. Historical logs and execution receipts are unchanged.

The evidence filename scan found no other collision. The real `tests/browser/site-guide-counterpart.browser.test.ts` remains byte-identical, in the browser suite and consumer shard. [Diagnostic membership](discovery/suites-after.json) and [diagnostic qualification plan](discovery/rename-diagnostic-plan.json) demonstrate discovery after the rename; they describe the then-dirty diagnostic source, not the final candidate's qualification. No discovery rule or directory exclusion was changed.

## Published URL boundary

[All 462 classifications and original observations](published-audit/README.md) establish **342 published URLs** (206 English, 136 Chinese) and **120 build-only URLs within all 13 retained unified web releases** (64 English, 56 Chinese). The latter statement does not cover unretained manual deployments. The production identity is v0.4.10 / `ee3178ac6d3b111bf1d62162265704b7c6efc607`; all 342 HTTP 200 bodies match its sealed web artifact. Historical releases add no other affected published URL.

All 5,056 unique per-route published source anchors across the retained versions are recorded in the source ledger and checked against final target HTML. Candidate HTML observations in the historical audit remain explicitly bound to `003098ef`.

## Compatibility behavior and sealed source

An exact 342-entry mapping feeds the EdgeOne root middleware. Only known old document GET/HEAD paths are internally rewritten to their current owning page; query strings stay exact and fragments remain browser-owned. The old body therefore remains readable without JavaScript, including explicit source fragments. A fragment-free no-JavaScript request opens the complete merged body without an automatic chapter scroll.

With JavaScript, the target page uses Next's supported native-history integration to normalize the address bar without another document request, retaining original query/fragment or selecting the actual published first anchor when no fragment was supplied. Browser qualification checks both languages, reload, actual catalog navigation, back/forward and native access; existing fatal-error policy and the original 60 cases/nine downloads remain intact.

No per-URL redirect HTML is added, and the existing two Next navigation rewrite rules remain unchanged. The provider's [100-rule redirect/rewrite limits](https://pages.edgeone.ai/document/edgeone-json) are not bypassed with extra static rules. [Official middleware semantics](https://pages.edgeone.ai/document/middleware) are checked with the real `edgeone@1.6.47` compiler and execution of its emitted handler: [provenance](provider-cli/provenance.json), [complete build log](provider-cli/clean-build.log), [observed requests](provider-cli/compiled-runtime-results.json). This is provider compilation/execution evidence, not deployment or live acceptance of the new candidate.

`generated/provider-runtime.json` binds source commit, the exact three-file runtime import closure, lengths/digests and the complete mapping. Complete export checks verify actual target/default anchors; the published anchor ledger separately checks every historical content anchor. Sealing binds the proof in the web archive and probes. The provider importer compares actual source bytes before handoff and again at the atomic swap boundary, failing on missing or substituted code. No raw TypeScript is added to public export, and the original archive/file/resource limits remain unchanged.

Representation decision: the runtime proof is an F3 versioned cross-consumer contract with exact fields and source identities; historical research stays an F1 evidence narrative with explicit scope. Consumers are the exporter, product verifier, importer and browser qualifier. Only a fresh source/build may replace the proof; publication and scientific approval remain separate.

## Final qualification

Complete evidence filenames and source changes must be frozen before the final `npm run test` and existing CI/qualification-plan entry points. Final hosted results will be recorded in Actions artifacts and PR #30's body with exact PR head, tested merge source, run and attempt. This preparation file intentionally contains no forecast success. No new PR, merge, tag, publication, deployment, branch deletion or forced history rewrite is authorized.

## Intermediate a201 outcome and corrective controls

Candidate `a2018877b559f6de4edcc20e94c0981e2c8bd3a7` completed its website build: 19,778 export files, 3.752 GB peak RSS. Its **full test run failed**: 3,407 tests, 3,401 pass, one failure and five skips. The dependency-free importer fixture omitted the newly imported standard-library-only provider validator from its copied source closure. The fixture now copies that real source file while retaining all assertions that installed package dependencies are unavailable. [Original failure and passing focused control](focused-followup/importer-closure-green.log) remain separate from the final all-tests run.

Its **browser run also failed** after 40 baseline cases and 12 completed chapter cases, with a WebKit Chinese history-navigation access-control error. [Full browser report](attempt-a201/browser-report.json), [all original captures](attempt-a201/browser-captures.tar.gz), [member hashes](attempt-a201/capture-index.json) and [complete gate logs/receipts](attempt-a201) retain this outcome.

The new chapter checker mistakenly awaited a request-observer factory instead of invoking its returned asynchronous waiter. The [controlled real WebKit baseline](focused-followup/chapter-wait-red.log) reproduces a held request being cancelled by premature history navigation; the [corrected regression](focused-followup/chapter-wait-green.log) verifies completion before proceeding. One observer is now armed before navigation and its existing waiter is called before moving on. Neither its time/quiet limits nor fatal-error policy is changed. The [six-case WebKit diagnostic](focused-followup/a201-fixed-checker-diagnostic.json) applies the corrected checker to the original a201 export; it is a diagnostic, not final-source qualification.

Additional controls cover equivalent percent-encoded Chinese paths, rejecting a `data-id` false anchor, and requiring actual bilingual old/target HTTP behavior during future authorized live release acceptance. Existing live time/size limits remain unchanged; no live publication was invoked here. The [reviewed provider compiler output](provider-cli/reviewed-runtime/results.json) executes all 342 published mappings plus method, encoding and pass-through controls: 351 cases. Its source-file hashes match the reviewed runtime; earlier compiler evidence remains under its original scope. [Evidence index](followup-evidence-index.json) binds all new raw records.

## Hosted compiled-engineering failure and source-location correction

Run `41282451858`, attempt 1, tested merge source `b1806cde558a42ce50da0ea52a206b4002ce23d0` for PR head `c7a81b38`. Its plan, strict types, complete library contracts and changed-record checks passed, but `contracts` failed in the compiled engineering test entry point. [Original job record](emitted-source-correction/contracts-job.json), [complete log](emitted-source-correction/contracts.log) and [uploaded-plan source binding](emitted-source-correction/source-binding.json) retain that result. The overall run's final state remains in Actions/PR status.

The new source-bound middleware check located its authored `.ts` files relative to the executing module. In emitted mode that location was `dist/test-engineering`, causing `Incomplete provider runtime closure`. The correction locates the nearest actual source checkout boundary from the module URL, handles worktree Git files and decoded paths, then performs the same complete byte/digest comparison. It stops at that checkout boundary and never skips validation or follows an unrelated outer checkout when files are absent. The emitted middleware remains JavaScript and the engineering runner still uses `--no-strip-types`; only source evidence is read from the authored checkout.

The [same compiled entry point before correction](emitted-source-correction/emitted-source-red.log) reproduces the failure; [after correction](emitted-source-correction/emitted-source-green.log), 165 tests passed, zero failed and one existing skip remained. [Native checks](emitted-source-correction/source-root-native.log) and [strict typecheck](emitted-source-correction/source-root-typecheck.log) retain their own scope. These controls do not convert the failed hosted run or the earlier local tests into final-source success. The next candidate must repeat complete native/compiled tests, the qualification plan and all hosted gates.
