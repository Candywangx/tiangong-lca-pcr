# PR 167: existing methods restored to their original IDs

Source: `2bb21031b802c726f21b88ef9e1c5485f7629a9e`. Tree: `a833890e13084b1185192603850908895fb4c1fa`. Frozen content baseline: `80c2c3a7802d02950025de038a5d74119cd2476d`. Latest integrated upstream: `00535d9b610625048119a6e0d46389c53863da86` (#197), with no library/classification byte changes.

All 149 existing drafts / 150 CPC codes were reviewed. **139 methods retain their original PCR IDs and directories with accepted scoped CPC mappings. Ten drafts / eleven codes remain held.** The original 59-PCR PR167 intake remains unchanged. No classification leaf is created: all seven classification source files are byte-identical to the baseline. [Complete item table and held reasons](https://github.com/tiangong-lca/pcr/blob/2bb21031b802c726f21b88ef9e1c5485f7629a9e/docs/reviews/pcr149-original-ids-20261127/README.md).

## Exact-source local qualification

- `npm run validate`: exit 0, 3490 tests; **3485 passed, 0 failed, 5 explicit conditional skips**. Clean Linux ARM64 source; Node v24.19.0 / npm 12.2.0. [Complete raw log](validate-linux.log). Full lint diagnostics: [compressed JSON](pcr-lint.json.gz).
- `npm run docs:build`: exit 0; 1555 material methods, 6229 raw downloads, 19892 output files. Original search, per-file and file-count budgets retained. [Raw log](docs-build.log), [verification](verification.json), [metrics](build-metrics.json).
- Three-engine browser qualification: 60 page cases, 54 published-link compatibility cases, all 620 rewrite responses verified, 9 native download cases; export unchanged. [Raw log](browser.log), [machine report](browser-report.json). Local screenshot paths in that report identify retained diagnostics; full hosted browser artifacts are linked separately when qualification completes.
- 139 selected PCR checks perform 42,900 measurement checks, zero skipped, with 4,581 warning diagnostics retained. All 289 classification/original-ID/held-code CLI reads pass. The [downloadable focused evidence](focused-checks.tar.gz) contains 1048 raw files; [manifest](focused-manifest.json) records each hash. Per-item reviewed file and strict-check hashes are in the source review JSONs. Historical per-item measurement checks use the identical canonical PCR inputs. After merging upstream runtime changes, all 289 consumer reads and the full repository validation were repeated on this final source; the manifest distinguishes those evidence sources.
- The 149 original draft sources (596 files) are public in upstream `80c2c3a7802d02950025de038a5d74119cd2476d`; item receipts include original source links and exact hashes. The archived baseline checks do not establish classification acceptance.

[Qualification receipt and log hashes](qualification.json). [Classification-source preservation](classification-preservation.json). `history/` retains the failed full validation and fix disposition; interrupted attempts are not pass evidence.

## Hosted qualification

Fresh upstream PR167 qualification is pending. Earlier fork, PR169 and old PR167 runs are historical provenance only and do not qualify this combined source. This evidence branch does not change the PR source commit.

Methods remain candidate/authored_methodology. Mapping acceptance is separate from scientific approval, translation review, publication and deployment.
