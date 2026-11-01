---
title: PR 30 complete-source chapter packing and canonical route evidence
docType: report
scope: repo
status: draft
authoritative: false
owner: tiangong-lca-pcr
language: en
lastReviewedAt: 2026-11-01
lastReviewedCommit: 1ca1c00418271410ec0cc2b86805194cd528f03a
lastReviewedNote: "Exact source/HAST comparison and actual generated before/after route ownership for bounded final-chapter packing. Original methodology bytes, native downloads and readiness states are retained. Product qualification receipts remain source-specific."
---

# Complete-source chapter packing evidence

The preceding complete export at `34206f7618a71999e40951d8dc22d2381da3f688` contained 25,434 physical files. Its 3,810 verified full-navigation aliases would leave 21,625 files, exceeding the unchanged strict limit of fewer than 20,000. Alias preparation failed before removing those original payloads. [Original measurement](provenance/baseline-file-count-blocker.json) remains available.

Engineering commit `6db7ac9a4ec47c4deae907ad8f7f2c46d4261ea6` appends an underfilled final chapter to its predecessor before deriving part identities. It retains the existing 180,000-byte soft target, 65% trailing-fragment threshold and three-times-target coalescing ceiling. No source unit is split or shortened. The preceding start context and complete node order remain intact. Indivisible oversized units retain their existing treatment. The renderer, its tests and the contract are the only product changes in that commit.

The actual combined generation at `1ca1c00418271410ec0cc2b86805194cd528f03a` has the following measured results:

| Item | Before | After |
| --- | ---: | ---: |
| Required PCR source documents | 3,082 | 3,082 |
| All source groups, including 8 legacy modules and 2 guides | 3,092 | 3,092 |
| Source reading parts | 3,680 | 3,218 |
| All generated documentation pages | 3,806 | 3,344 |
| Native original downloads | 6,173 | 6,173 |
| Actual final export files | Failed limit | **19,777** |

The [complete export-size result](product-observation/export-size.json) counts 19,777 files / 2,495,197,998 bytes; the largest individual file is 3,930,212 bytes. The [fresh `docs:build` receipt](product-observation/docs-build-receipt.json) binds clean frozen source `1ca1c004` and records a successful complete build. Its [complete stdout](product-observation/docs-build-complete.log) and [verification result](product-observation/verification.json) are retained. Further independent corpus, sealed-product, SEO, offline and browser acceptance have their separate source-bound receipts; this package does not replace them or establish publication authority.

Both complete language search transports, including their manifests, satisfy the unchanged 20 MB raw / 4 MB gzip limits. [Actual search measurements](product-observation/search-measurements.json) record English **3,702,560 gzip bytes / 1,676 records** and Chinese **3,802,336 gzip bytes / 1,652 records**. Layout changes the page-level search records: English reading parts decrease by 270 and Chinese by 192. One removed Chinese part was already unindexed, so Chinese indexed records decrease by 191. [Indexability comparison](route-audit/indexability-equality.json) verifies unchanged indexing state for every affected original part. No translation or methodology status is promoted.

## Source and structure comparison

The [full-source audit](hast-audit/summary.json), [all 3,092 source groups](hast-audit/source-groups.json) and [complete stdout](hast-audit/complete.log) compare the exact baseline renderer with the committed repair. They cover every required-language source for all 1,541 material PCRs, the eight legacy core module sources and both guides.

For every group, the original Markdown SHA-256 and source inventory remain exact. Flattening the rendered HAST parts produces the same complete structure, values and node order before and after packing. Every original source block remains present exactly once in its original rendered order, including tables, lists, code whitespace, headings and footnotes. Both original and candidate DOM fragments are checked against their source inventories. The title's source marker is supplied as the actual owning page does; first-page H1 ownership remains unique. The 2,630 unaffected groups retain their complete part metadata. The 462 affected groups save exactly 462 parts.

[Audit provenance](provenance/receipt.json), [baseline renderer](provenance/renderer-before.ts.txt), [repaired renderer](provenance/renderer-after.ts.txt) and [exact audit program](provenance/hast-audit-at-launch.ts.txt) preserve implementation and input hashes. Source comparison is distinct from product memory/time qualification. The temporary HAST audit inferred raw Unicode continuation paths; those inferred route details are excluded. The canonical routing below comes directly from actual generated inventories, including their percent encoding.

## Canonical routing and native originals

Use the [per-document routing index](route-audit/index.md) to inspect any affected source. Each readable JSON lists old/new page URLs once, part ownership and moved anchors. Part numbers start at zero: part 0 is the main reading page. A moved anchor's target is `newPages[newPart] + "#" + fragment`; its original lookup aliases remain listed. Paths inside these records are relative to the `route-audit/` directory.

The [actual routing summary](route-audit/summary.json), [complete stdout](route-audit/complete.log), [program](provenance/actual-route-audit.ts.txt) and [receipt](provenance/actual-route-receipt.json) establish:

- **462 continuation URLs are removed.** All surviving reading URLs remain identical; no new reading URL is introduced. The 462 removed URLs do not receive compatibility redirects from this change. Original source anchors remain available on their new owning page, and generated links use those owners.
- All 147,796 anchor aliases in the affected documents remain present; 12,460 have a different owning page. The readable index groups aliases sharing the same encoded fragment and old/new owner. The lossless raw records retain every alias and complete source-node ownership.
- All 6,173 native-download rows retain the same source path, original filename, physical URL, size and SHA-256. PCR record metadata, including identities and states, remains exact apart from the required page lists. No inline download transport is enabled.

The complete raw routing records are retained as per-document gzip files, each bound by both original JSON and stored gzip sizes/hashes. Their readable counterparts make locations inspectable without inflating every raw record. [Original generation report](provenance/baseline-report.json) and [lossless candidate report](provenance/candidate-generation-report.json.gz) retain the full measured download and search inventories. These are source-specific evidence; readiness/scientific approval and deployment remain separate.

## Focused verification

[The final regression receipt](checks/tail-red-green.json) binds the same tests to the original renderer's expected failure and the repaired renderer's passing result. The [baseline failure](checks/tail-final-baseline-red.log), [12 passing renderer/generator checks](checks/tail-focused.log) and [strict TypeScript diagnostics](checks/tail-typecheck.log) are complete. Cases cover first-page H1 ownership, remaining chapter context, cross-part source links, a footnote reference on one page and its definition/back-reference on the other, indivisible oversized tables, UTF-8 byte accounting and the exact existing ceiling. The retained initial [superseded focused failure](checks/tail-green.log) used the wrong expected footnote ID spelling; the final test uses the renderer's actual `pcr-note-fn-*` identity.

To inspect all raw routing records from the repository root, the following checks both stored and restored hashes and writes only to a new directory under `/tmp`:

```python
from pathlib import Path
import gzip
import hashlib
import json
import tempfile

package = Path("docs/reviews/pr30-chapter-capacity-20261030")
routes = package / "route-audit"
scratch = Path(tempfile.mkdtemp(prefix="pr30-chapter-review-", dir="/tmp"))
for record in json.loads((routes / "summary.json").read_text())["records"]:
    stored = (routes / record["path"]).read_bytes()
    assert len(stored) == record["storedBytes"]
    assert "sha256:" + hashlib.sha256(stored).hexdigest() == record["storedSha256"]
    original = gzip.decompress(stored)
    assert len(original) == record["originalBytes"]
    assert "sha256:" + hashlib.sha256(original).hexdigest() == record["originalSha256"]
    data = json.loads(original)
    before = [node for part in data["oldParts"] for node in part["sourceNodeIds"]]
    after = [node for part in data["candidateParts"] for node in part["sourceNodeIds"]]
    assert before == after and len(after) == len(set(after))
    (scratch / (Path(record["path"]).stem)).write_bytes(original)
print(scratch)
```

[Evidence-file hashes](evidence-files.json) cover this package except that index itself. Its product measurements qualify source `1ca1c004`; later evidence-only commits do not relabel those measurements as a different tested source.
