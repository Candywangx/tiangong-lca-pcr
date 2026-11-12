---
title: CPC 54 PR 35 reading-route registration review
docType: review
scope: repo
status: draft
authoritative: false
owner: tiangong-lca-pcr
language: en
whenToUse:
  - when reviewing the CPC 54 additions to retained reading routes
whenToUpdate:
  - when these source documents or their reading owners change
checkPaths:
  - docs/reviews/cpc54-pr35-reading-routes/**
  - packages/pcr-docs/compatibility/packed-chapters.json
  - packages/pcr-docs/compatibility/packed-chapter-anchors.json
  - packages/pcr-docs/scripts/chapter-compatibility.test.ts
lastReviewedAt: 2026-11-12
lastReviewedCommit: 05b1b5804d3b6b2ab83d2bd2cce41b5a2d06a256
lastReviewedNote: "Source-bound audit of all 63 CPC 54 candidates in both languages; additive registration of 23 logical chapter routes in 21 language documents, preserving source content and existing route objects. This does not establish publication or scientific/translation approval."
---

# CPC 54 reading-route registration

PR #35 failed website generation at the English office-refurbishment PCR because
adjacent reading-page packing removed a logical chapter URL without a retained
route and anchor owner. The same audit was applied to all 126 language sources
from the 63 submitted PCRs, rather than stopping at that first failing document.

`registration.json` binds the audit to source commit
`05b1b5804d3b6b2ab83d2bd2cce41b5a2d06a256`, records exact source hashes, all logical
parts and reading owners, and the actual source-block and ordinary-HTML anchor
checks. It found 23 missing routes in 21 language documents belonging to 12 PCRs.
The other 105 language documents need no added route. All 126 documents were
checked, including those with no missing route.

The repair appends those 21 document records to both retained-route registries.
The existing 133 document records, their order and route objects, the root
`baselineCommit`, and the separate published-route/anchor ledgers are preserved.
The new documents are bound to their own source commit; they are not asserted to
have existed at the older root baseline or to have been previously published.
The complete compatibility set contains 527 routes: 342 published, 162 previously
retained, and 23 newly registered.

The audit verifies ordered HTML nodes and source blocks, rendered block content,
all ordinary-HTML anchors, and one same-document/same-language owner for every
retained logical part. PCR Markdown, manifests, structured projections, mapping
decisions, lifecycle and translation status are unchanged. No page-size, resource,
file-count or completeness gate is relaxed.

The regression test in `chapter-compatibility.test.ts` re-renders all 126 actual
sources and verifies every logical chapter against the current reading owners
and runtime routes. Run it with the pinned Node runtime:

```bash
node --test packages/pcr-docs/scripts/chapter-compatibility.test.ts
```

## Additional module integration repair

After all 1,727 PCR documents passed generation, the next stage rejected an
advisory module's full ID as if it were a legacy Markdown module slug. The 63 PCRs
reference 12 schema-0 YAML authoring descriptors in addition to eight legacy
Markdown modules. `module-readback.json` records the unchanged 12 descriptor
identities and source hashes and their complete rendered-source checks.

Core now resolves the two explicit advisory namespaces against their controlled
YAML paths and rejects mismatched IDs, kinds, candidate states and unsafe reads.
The exporter retains the exact YAML download and inventories the complete source
as one escaped code block with offsets into the actual source text. Export
verification repeats that inventory against the original YAML. The site labels
these English candidate authoring aids explicitly, excludes them from search,
and does not invent translated sources or elevate them to reviewed methodology.
Legacy Markdown module routing and material reusable-module semantics are unchanged.

Module reader, raw-source rendering and actual generator fixtures cover both
advisory namespaces, exact downloads, complete source verification and negative
identity/path/state cases. No canonical PCR or descriptor source was rewritten.

This receipt is a single-agent source/rendering review. Its in-memory HTML checks
are not a complete Next static export or a sealed-product qualification. Fresh
`npm run docs:build` and repository validation remain separate checks; their
actual results belong in the PR, without promoting methodology or translation
approval or hiding the previously disclosed baseline test failure.

## Complete search capacity repair

After the route and module fixes, complete generation measured the existing
search assets at 4,150,475 bytes gzip in English and 4,228,173 in Chinese, including
each manifest, above the unchanged 4,000,000-byte per-language limit.
`search-transport.json` compares those exact captured assets with a lossless v9
transport and retains logical-wire, native-export and complete-record hashes.
No query text, document, field, token, posting or ranking rule is removed.

V9 arithmetic-codes only the original v8 numeric channel strings. The reader
checks ownership and shared expansion bounds before restoring those strings,
checks canonical bitstreams, and applies the complete existing v8 validation.
Generation still compares eligible v7/v8 candidates and verifies every restored
logical byte. The emitted Worker and corpus auditor support the new version;
old transports remain covered by regression tests. The website contract records
the exact codec and unchanged size/resource limits. Captured-asset checks do not
replace the fresh complete website build or repository validation.

## Local validation of the repair

`validation.json` records the actual working-tree source hashes and outcomes.
The complete `npm run docs:build` passed all four stages: 1,727 PCRs, 3,476 source
documents, 6,929 source downloads and 18,075 physical export files. Actual generated
search totals were 3,884,260 gzip bytes (English) and 3,983,119 (Chinese), including
each manifest. The captured corpus audit separately compared 720 English and
620 Chinese queries with matching ordered results.

The complete documentation test suite plus affected module-reader checks and
product tests passed: 34 test files, 597 tests, no failures or skips. The product
tests were rerun after correcting the local npm launcher; that temporary launcher
is not a repository change. Runtime, migration, all 11 strict TypeScript projects
and full library lint passed (0 lint errors, 53,766 retained warnings).

Full repository validation is **not** claimed. The first test run was interrupted
because its default concurrency caused resource contention. A second run selected
all 192 test files with concurrency 2, encountered Linux-only report-traversal and
missing local `pdftotext` failures, and was stopped after those limitations were
confirmed. Its final interrupted summary was 3,114 tests: 2,886 passed, 124 failed,
30 cancelled and 74 skipped; interruption diagnostics are not additional source
bugs. Not every unrelated failure was independently triaged. Previously disclosed
baseline event-log behavior remains unresolved. Hosted source-bound qualification,
full-corpus qualification and browser qualification remain distinct gates.

These checks ran on the listed modified working tree above parent `d7947e1d7`,
not on a claimed clean release or on the later commit that adds this receipt.
The 252 canonical CPC 54 files, original module sources, published ledgers and
all mapping objects are unchanged by this repair. No merge or deployment is
performed by this validation.

## Content-repair integration (2026-11-12)

`current-content.json` binds all 126 language documents to content commit
`dc7afa1bb3e5acce6acac2d5a219f2c018d64268` and the website renderer from
`519694b43369034002ae3643df5e79a2119416ae`. The nine repaired PCRs change 18
language sources. A fresh rendered-source review verifies ordered nodes and
source blocks, actual HTML anchors and retained-route ownership for all 126
documents. The same 23 retained routes remain valid; only the wallpaper PCR's
two registry source hashes require refresh. No retained route or anchor is removed.

The chapter compatibility regression now reads this current-content receipt.
`registration.json`, `search-transport.json` and `validation.json` retain their
historical source bindings; their website-build and search-size results must not
be presented as a fresh build of the repaired content. Current integration check
results are recorded separately in `integration-validation.json`. Candidate and
aligned states, original UUID evidence and unresolved identities are preserved.
