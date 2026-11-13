# Complete local qualification — 003098ef

All eight [source-bound gates](status.json) passed on the same clean frozen source. Full validation records 3393 passing tests, zero failures and 5 skips. Local validation used four-CPU affinity to bound concurrent test processes without filtering any test; Node 24.19.0, npm 12.2.0, umask 0022 and an external temporary directory remain pinned in the gate starts.

The website verifies all 1,541 PCRs, 3,092 source documents and 6,173 physical original downloads. It has 19,777 verified export files; the sealed product has 19,778 including its routing configuration, below the strict 20,000 limit. The current [complete search assets](website/search) include every manifest and lossless gzip snapshots of every pack. Per-language totals are in [status.json](status.json). No size/resource limit was raised.

[Complete SEO report](product/seo.json), [sealed product manifest](product/release.json), [offline consumer evidence](offline-consumer/qualification.json), [sealed-browser receipt](sealed-web/qualification.json) and [all 60 browser cases and nine no-JavaScript native downloads](sealed-web/browser/report.json) retain their original checked scope. All raw screenshots and diagnostic outputs are copied alongside those reports. The complete binary product bundle remains locally retained; its [checksums](product/SHA256SUMS) bind it without putting a 475 MB web archive in Git.

[Every evidence file](evidence-index.json) carries its original and published digest. Public text only replaces local home/repository prefixes; original local logs remain complete. Source bytes, screenshots, product identities and all numerical results are retained.

This is local artifact qualification, not publication, current hosted CI approval, upstream merge or scientific/translation approval. The [previous 1ca attempt](../attempt-1ca/README.md) remains failed at its ordinary enabled-script cancellation; no error exception was added to turn it green.
