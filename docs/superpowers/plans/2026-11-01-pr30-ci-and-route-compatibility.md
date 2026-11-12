---
title: PR30 test discovery and published chapter compatibility plan
docType: report
scope: repo
status: draft
authoritative: false
owner: tiangong-lca-pcr
language: en
lastReviewedAt: 2026-11-01
lastReviewedCommit: 714d6c023aa2e53ec1bba81f6ac6ed1f5a4b4984
lastReviewedNote: "Owner-requested follow-up; the previous local source is not final hosted qualification."
---

# PR30 test discovery and published chapter compatibility implementation plan

> For agentic workers: use subagent-driven-development for bounded independent research and review; keep source integration serial. This is product engineering, not a PCR author Harness task.

**Goal:** Repair existing fork PR #30, preserve published chapter access within unchanged resource limits, and obtain complete hosted qualification for the final frozen source.

**Architecture:** Keep scientific content, v7 search, native downloads, candidate states and strict browser errors unchanged. Repair evidence naming at its source. Determine the published intersection before choosing chapter compatibility; use provider-supported behavior or preserve published routes, with explicit unresolved decisions if neither satisfies existing limits.

**Tech stack:** TypeScript, Next static export, EdgeOne sealed-artifact import, GitHub Actions and Playwright.

## Chunk 1: evidence and discovery

- [x] Read remote head: `714d6c023aa2e53ec1bba81f6ac6ed1f5a4b4984`; existing PR remains Draft.
- [x] Read failed run `41273337865`, attempt 1 and full plan job log; correct PR status from in-progress to failed.
- [x] Reproduce `npm run test` discovery rejection before editing.
- [x] Rename `docs/reviews/pr30-guide-navigation-review-20261101/provenance/regression-test.ts.txt` to `regression-source.snapshot.txt` with exact original bytes.
- [x] Update only current evidence index/navigation and add old/new source-path mapping. Preserve historical execution logs, receipts and their source identities.
- [x] Scan all evidence filenames against the real discovery predicate. Keep `tests/browser/site-guide-counterpart.browser.test.ts` in browser suite / consumer shard with unchanged content.

## Chunk 2: published URL compatibility

- [x] Compare all 462 removed continuation URLs against authenticated published web artifacts, deployment identities and live production `generated/version.json`. Record current-published, historical-published and build-only evidence without treating one 404 as proof of never publication.
- [x] Inspect actual EdgeOne limits and routing semantics before choosing implementation. The documented configuration supports at most 100 redirects and 100 rewrites, each source/destination at most 500 characters; no 462-file redirect expansion.
- [ ] Choose the smallest compatible solution based on actual intersection. Verify required languages, original query/fragment, old chapter location, subsequent navigation and provider contract. If capacity/compatibility cannot both hold, document concrete alternatives and the maintainer decision; never assume broken published links are acceptable.
- [ ] Write behavior regression first for any runtime change, retain failing control, implement narrowly and independently review. Do not change PCR author workflow, methodology or browser fatal-error policy.

## Chunk 3: final source qualification and delivery

- [ ] Finish all evidence filenames and source changes before committing the final candidate.
- [ ] Run `npm run test` with pinned Node 24.19.0/npm 12.2.0, umask 0022 and external temporary directory; four-CPU affinity may bound concurrency without filtering tests.
- [ ] Run existing `scripts/engineering/ci-plan.ts plan` and `scripts/engineering/qualification-plan.ts plan`; assert full lane and browser regression suite/shard membership from the generated final plan.
- [ ] Run required local `npm run validate`; reuse only results for the exact unchanged source.
- [ ] Fast-forward the existing PR branch without force; no new PR, merge, tag, publication, deployment or branch deletion.
- [ ] Wait for complete hosted CI. Capture exact PR head, tested merge source, run and attempt from Actions plan/artifacts; verify contracts, all shards, both searches, export, sealing, required platform consumers, browsers, coverage and aggregate result.
- [ ] Report actual raw/gzip by language, final file count, time/RSS and remaining budgets. Publish final outcome in Actions artifacts and existing PR body without adding a success-report commit that invalidates the final head. Keep historical failures and local `003098ef` results source-specific.

### Selected implementation after production audit

342 URLs are present in current production and retained historical artifacts; 120 are build-only within retained releases. Exact root middleware rewrites the published set; page-native history retains query/fragment and defaults to the published first anchor. The complete published anchor ledger has 5,056 entries. No-JavaScript requests retain full body and explicit anchors, with no claim of automatic scrolling without a fragment. Source-bound runtime proof, importer comparison before atomic swap, root type/coverage ownership and full browser compatibility checks are included. Official EdgeOne CLI 1.6.47 successfully compiles the middleware and its emitted handler preserves exact queries in execution; no live deployment is performed.
