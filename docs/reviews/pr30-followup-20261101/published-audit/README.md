# PR30 published continuation URL audit

Observed 2026-11-01. Read-only remote research; no deployment, remote mutation, source edit, commit or PR change.

## Result

| Language | Existing published URLs | Build-only within retained releases | Total |
| --- | ---: | ---: | ---: |
| en-US | 206 | 64 | 270 |
| zh-CN | 136 | 56 | 192 |
| Total | 342 | 120 | 462 |

The 342 URLs respond HTTP 200 in production. Every response body matches its exact HTML member in the v0.4.10 sealed web archive. The 120 other URLs respond HTTP 404 and are absent from every retained web release artifact; the classification does not rely on 404 alone. No historical artifact adds an affected URL beyond the current 342.

## Identity and evidence chain

- Production: https://pcr.tiangong.earth/generated/version.json, product `v0.4.10`, source `ee3178ac6d3b111bf1d62162265704b7c6efc607`.
- Upstream `release/production` API points to the same source.
- Source fingerprint: `sha256:af2d5b0e5c3248b4e01223a444e9c7a00268d062274141358a082a5d5ea94d68`.
- Production route manifest SHA-256 `d453b2e668c27b72918b2c3921633abcd9abe6eb1ae2803bd8f76c19200ca8ac` matches the sealed manifest probe.
- v0.4.10 web archive SHA-256 `ac8a0960358f2374b80d750d4a18793bd58c20d8904e0f282a3a6d218b32a5ab` (444430738 bytes).
- Release receipt `v0.4.10/receipt-40998754800-1-0041.json` binds verified live web acceptance, manifest hash, run/attempt and product identity.

## Historical boundary

All 13 retained unified web artifacts v0.3.0 through v0.4.10 were obtained from the tiangong-lca/pcr Releases API. Full compressed archive hashes and byte counts match their release.json seals. Nine versions have verified live web acceptance receipts; four retain pending or no verified acceptance in available receipts. All 120 negative URLs are absent even from all 13 web artifacts. This does not prove absence from unretained or unversioned manual provider deployments or pre-unified deployments. Current 342 HTTP 200 bodies match sealed v0.4.10 bytes; 120 HTTP 404 responses are corroboration only.

| Product | Source commit | Affected URL members | Verified live web acceptance receipt |
| --- | --- | ---: | --- |
| v0.3.0 | `fbbaf93a661c844a0f8d37e14e32f323e36e3ea9` | 167 | not retained as verified |
| v0.3.1 | `4226d2ab97d53682c967dd29a2a04d97debfc15e` | 167 | yes |
| v0.4.0 | `d0198577159e82bcc12df14bfe59f8ed060e089a` | 167 | not retained as verified |
| v0.4.1 | `dc0638e2814c7108a6e4dea6d701c02824b3658d` | 167 | yes |
| v0.4.2 | `008da151ed2ddf3c880f75f92ee5847301393e44` | 211 | yes |
| v0.4.3 | `5d9320445f4c792821a988b5c24e0de5b5245559` | 211 | yes |
| v0.4.4 | `5a6be4c11604010d9550b79f9716ef865963b55c` | 211 | yes |
| v0.4.5 | `7fca96b27dc931a52a106f234416034deb0842ef` | 215 | not retained as verified |
| v0.4.6 | `3de84c1d092e7916530963783998f78e43607bf4` | 215 | yes |
| v0.4.7 | `176c63d6b115f3116a2ceda7172833ef0f83f7df` | 233 | yes |
| v0.4.8 | `6883ac60fba9106de1532c153241fb0076423a07` | 342 | not retained as verified |
| v0.4.9 | `42ec3ae0b97a8cbf3a482cf1411d1765ccd5734a` | 342 | yes |
| v0.4.10 | `ee3178ac6d3b111bf1d62162265704b7c6efc607` | 342 | yes |

## Compatibility target and fragment proof

`published-compatibility-targets.json` maps every public old URL to its sole candidate target, first actual published content anchor, all published content anchors, all target anchors and both HTML hashes. Actual candidate source is `003098ef221a633fc21c1c7275a6fcdca6fdf9c6`; this is historical evidence for the existing PR30 candidate, not fresh qualification of any future source. Candidate target HTML is independently compared with its sealed product and retained under `candidate-targets/`.

All 342 pages have a nonempty default anchor. No published content anchor or stable shell heading is missing from its assigned target. `historical-anchor-crosscheck.json` repeats the actual HTML anchor comparison for each affected page in all 13 release artifacts: every version has zero missing content anchors. Thus the content differences between the production release and the PR30 baseline do not create an anchor gap for these URLs.

The mapping follows the existing full source-node route audit; every one of 462 removed URLs moves wholly to exactly one retained candidate route. URL-encoded Chinese path segments must be matched consistently. Preserve query strings and fragments, including encoded fragments; avoid interpreting an incoming path or target as an external URL. With a server rewrite, relative-link behavior and JavaScript-free reading require browser checks. A client redirect must preserve an existing fragment and use the default anchor only when none was supplied.

## Files

- `url-classification.json`: all 462 URLs, language, source path/hash, artifact membership, verified published versions, live result, unique candidate target.
- `summary.json`: bounded counts, exact release identities and hashes, historical boundary.
- `live-results.json` and `live/`: raw HTTP headers/status and gzip response bodies for all 462 URLs.
- `v*/archive-inventory.json`: complete archive member paths and sizes, compressed archive SHA-256, bytes and selected member hashes. `v*/selected/` retains actual affected HTML and release identity/hosting metadata.
- `v*/release.json`, `SHA256SUMS`, receipt files: original downloaded release metadata and live acceptance evidence.
- `published-compatibility-targets.json`, `published-anchor-crosscheck.json`, `historical-anchor-crosscheck.json`: fragment/target checks.
- `candidate-release.json`, `candidate-target-inventory.json`, `candidate-targets/`: sealed candidate target evidence.
- `upstream-releases.json`, `upstream-tags.json`, `production-pointer.json`, `production-version.*`, `production-route-aliases.*`: raw discovery and production observations.
- `evidence-sha256.json`: hash/size manifest for every retained evidence file except the manifest itself.

Full archives were streamed and hashed without unpacking the complete trees or retaining multi-gigabyte duplicate archives. Their complete path/size inventories and selected original members remain available; archive seals can be reproduced from the recorded release asset URLs.

## Public package scope

This review package publishes all 462 live response bodies/headers, full per-URL classifications, release manifests/receipts, compressed complete archive inventories and the complete original evidence hash index. Raw historical selected members and historical candidate HTML remain retained in the local audit; they are not duplicated here. All historical sealed web artifacts remain downloadable from the recorded official GitHub release asset URLs. `evidence-sha256.json` describes the complete original audit; `published-files.json` separately binds this public subset and its lossless compressed inventory files. The 003098 candidate observations are historical only. Final source qualification must independently recheck all 5,056 published anchors using the source ledger and must obtain its own Actions result.
