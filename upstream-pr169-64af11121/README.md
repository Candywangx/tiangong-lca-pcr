# PR 169 original PCR identity restoration

Source commit: `64af1112180aff9e2159e74c8eb5700eb5408e45`.
Source tree: `037c975b1e5ec8bc30fea36dc266c422a56cbcbe`.
Pre-restoration source: `baf8f899929170c384bf43df9aca490a2e5983f2`.
Original identity inventory: `7d0a48078779e09b3ca6aadf1b0bd619505303a4`.

The owner requested retaining the original IDs and upgrading in place. The 65 replacement methods now occupy their original directories; the other 50 methods remain byte-identical. All 115 CPC coordinates and original PCR IDs resolve to their unique accepted material methodology. The current mappings preserve the 1,374 other upstream edges and all CPC classification source bytes.

`original-id-restoration.json` supplies all 115 original/previous identities and four-file before/after hashes, plus previous mapping acceptance records. All 65 transferred manifests and bilingual Markdown files match the reviewed source after exact identity/path substitution. Structured material fields match after identity substitution; the normal builder regenerates normative source offsets and fingerprints. The old replacement directories are removed. Existing candidate, scientific, translation and publication states are retained.

`focused-checks.tar.gz` contains 203 raw checks and receipts. `focused-manifest.json` gives each file's SHA-256 and the archive hash. It includes two deterministic projection syncs and one passing PCR check for each of the 65 restored methods (20,770 measurement checks, zero skips; 3,172 existing warnings), catalog/alias checks and 115 successful runtime resolutions. The archive also records the tested upstream merge and the intervening upstream changes; those changes do not alter PCR or classification files.

## Full local validation

`npm run validate` passed on the exact source commit above, with Node v24.19.0 / npm 12.2.0 on Linux ARM64: **3,640 passed, 0 failed, 5 skipped**. The run preserved a clean source worktree. [Raw complete log](validate-linux.log); its SHA-256 is recorded in `focused-manifest.json`. The five existing conditional skips are explicit in that log and distinct from the zero skipped PCR measurement checks.

Fresh upstream run [46004577323 / attempt 1](https://github.com/tiangong-lca/pcr/actions/runs/46004577323/attempts/1) is pending at this local-log snapshot. Its test merge `794df109d6de23bacb074eeea78140f0625fcf0e` combines head `64af1112180aff9e2159e74c8eb5700eb5408e45` with upstream `80c2c3a7802d02950025de038a5d74119cd2476d`, tree `83d3f6d5c4052970f3538b5dbb69af0495774333`. This differs from the local head tree; no equivalence is claimed. The upstream advance affects engineering/governance only, as recorded in the focused archive. Earlier successful hosted runs do not qualify this combination.
