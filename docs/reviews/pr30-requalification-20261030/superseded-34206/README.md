# Retained first combined attempt — 34206f76

Both commands ran completely on frozen source `34206f7618a71999e40951d8dc22d2381da3f688` with unchanged tree and clean checkout.

- [Full validate](validate.log): 3,392 tests; 3,378 pass, 9 fail, 5 skipped. [Receipt](validate.json). The nine failures were traced to this local supervisor’s umask and repository-nested temporary directory. [Diagnosis and controlled rechecks](environment-diagnosis.json) retain both failure controls and all 20 passing focused rechecks under corrected isolation. No repository tests or production code were changed to hide those failures.
- [Full documentation build](docs-build.log): both searches pass (EN 3,879,454; ZH 3,984,064 gzip bytes); Next static export passes. Alias preparation then rejects 21,625 projected physical files against the strict fewer-than-20,000 limit. [Exact count breakdown](file-count-blocker.json), [build metrics](build-failure-metrics.json), [source receipt](docs-build.json).

Static fidelity verification, SEO and sealed product acceptance did not run after alias-stage failure. Source freeze and successful intermediate stages do not qualify the whole product. A later renderer fix and corrected validation environment require entirely fresh runs. Original private logs and the complete failed export are retained; published logs only replace local home/repository prefixes and carry distinct hashes.
