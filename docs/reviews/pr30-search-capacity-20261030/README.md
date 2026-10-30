---
title: PR 30 full-corpus search transport capacity measurements
docType: report
scope: repo
status: draft
authoritative: false
owner: tiangong-lca-pcr
language: en
lastReviewedAt: 2026-10-30
lastReviewedCommit: 5a93da72650fb16f988c5c0306f61784aa31732d
lastReviewedNote: "Complete captured-wire evidence for PR 30 source 1e67, with actual over-budget v6 diagnostics, lossless v7 restoration and finite engine-query comparisons. Final combined-source product qualification is separate."
---

# Full-corpus capacity evidence

The baseline is the complete material corpus at PR 30 commit `1e67d0e3cb3023b6f310491b984390b51e891a71`: 1,541 material PCRs, including all 69 reviewed PCRs. Both languages were freshly generated with the original v6 encoder. Diagnostic instrumentation measures all languages before failing, retains the unpromoted stage and does not relax any gate. The original complete source, methodology states, search records and logical indexes are retained.

The independent engineering commit is `5a93da72650fb16f988c5c0306f61784aa31732d`. Its v7 transport groups numeric channels across each original physical pack and predicts each posting list's first ID from the previous nonempty list in the same score slot. Every original logical wire is restored byte for byte before import. Pack membership, record fields, dictionaries, engine export order, source-text buckets and query behavior remain intact.

| Language | v6 raw bytes | v6 gzip bytes | v7 raw bytes | v7 gzip bytes | Logical / physical | Records |
| --- | ---: | ---: | ---: | ---: | --- | ---: |
| English | 12,642,449 | 4,196,233 | 11,154,197 | 3,879,449 | 54 / 4 | 1,946 |
| Chinese | 12,118,790 | 4,309,833 | 10,672,545 | 3,984,074 | 47 / 3 | 1,843 |

Each total includes its complete manifest and counts every physical file once, with gzip level 9. Both v6 language totals exceed the unchanged 4,000,000-byte limit. V7 saves 316,784 English bytes and 325,759 Chinese bytes. Chinese has **15,926 bytes of remaining gzip capacity** in this captured source; this is not a claim of capacity for future corpus growth. Each language remains below the unchanged 20,000,000-byte raw limit. Both variants own the same nine physical JSON assets in total: seven packs plus two manifests.

This diagnostic's English v6 total differs from the historical 4,196,228-byte local receipt because physical packs and manifests bind a different source commit. Historical receipts remain historical; they are not relabelled as this run or the final combined candidate.

## Inspectable evidence

- [Comparison](comparison.json) binds the original source, language, full manifest costs and every baseline/candidate physical byte/hash receipt. It records all 101 restored logical identities and aggregate native-export and complete-record digests.
- [Asset index](asset-index.json) addresses every complete physical payload and manifest. Packs are retained as lossless gzip snapshots with both original JSON and stored gzip sizes/hashes. These are complete captured assets, rather than a summary replacing the raw payloads.
- [Engine query audit](engine-query-audit.json) and [complete stdout](diagnostics/engine-query-audit.log) authenticate the candidate, reproduce v5 and v6 over the exact same wires and compare ordered native engine results in every logical shard: 540 English and 470 Chinese query comparisons. Fixed queries and up to three original record titles per shard form this finite sample. All engine exports and complete result records are independently restored exactly; query samples do not claim exhaustive natural-language search validation. Worker tests separately exercise global ranking, per-shard cutoff, URL deduplication, lazy initialization, retries and v1–6 compatibility.
- [Baseline failure log](diagnostics/baseline-generation.log) and [search diagnostics](diagnostics/baseline-search-budget-diagnostics.json) retain both actual failures. No promoted `.generated` result was created by that failing diagnostic.
- [Source provenance](provenance/receipt.json) and [complete source inventory](provenance/canonical-source-inventory.json) verify 12,462 tracked library, classification and guide files (391,619,565 bytes) against baseline Git blobs. [Launch generator](provenance/generate-at-launch.ts.txt) and [launch codec](provenance/search-pack-at-launch.ts.txt) preserve the exact diagnostic implementation. The process loaded this v6 implementation before engineering edits and commits; the working checkout was not a frozen clean product candidate. The receipt states that limitation explicitly.
- [Focused regression stdout](checks/search-focused-v7.log) records 123 passing tests with no failures or skips, including emitted Worker imports through an asserted real FlexSearch v7-channel path. [Baseline red](checks/search-v7-baseline-red.log), [candidate green](checks/search-v7-green.log) and [source-bound regression receipt](checks/search-v7-red-green.json) preserve the unsupported-v7 baseline failure and candidate result. Malformed-channel tests assert rejection before logical hash comparison, so a later hash mismatch cannot mask absent framing guards. Both strict TypeScript checks succeeded with empty diagnostics.

`comparison.json` aggregates SHA-256-prefixed per-member digest strings. The older `engine-query-audit.json` tool retains its hex-only per-member digest convention, so those aggregate digest strings differ. Both tools check exact restored bytes; the separate digest conventions are not content differences. The audit's v4 size is a historical logical-wire comparison without a v4 manifest; the v5/v6/v7 totals include their full manifests. The table above uses only fully accounted v6/v7 transport totals.

## Reproduce the captured-wire comparison

From this directory, restore the exact JSON payloads in a separate scratch copy:

```python
from pathlib import Path
import gzip
for archive in Path("assets").rglob("*.json.gz"):
    archive.with_suffix("").write_bytes(gzip.decompress(archive.read_bytes()))
```

From the repository root, use the unchanged captured baseline and a new output directory:

```sh
node packages/pcr-docs/scripts/search-capacity-audit.ts docs/reviews/pr30-search-capacity-20261030/assets/baseline /tmp/pr30-captured-search-comparison
node packages/pcr-docs/scripts/search-v5-corpus-audit.ts /tmp/pr30-captured-search-comparison
```

The first command verifies actual physical identities and all restored logical hashes before comparing transports; the second imports the exact exports and repeats the finite ordered query comparisons. [Evidence file hashes](evidence-files.json) cover this package except that index itself.

## Qualification boundary

These measurements establish capacity and exact restoration for captured source `1e67`. They do not establish a complete static export, final file count, SEO/headers, browser acceptance, provider publication, fresh hosted success or scientific approval. The latest upstream/fork combination, mattress clarification and engineering repair require their own fresh frozen-source `npm run validate`, `npm run docs:build` and hosted results. PR 30 remains Draft until the actual required results support a change.
