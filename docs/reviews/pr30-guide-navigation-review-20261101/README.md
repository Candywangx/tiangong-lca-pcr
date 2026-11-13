---
title: PR 30 guide-navigation browser timing investigation
docType: report
scope: repo
status: draft
authoritative: false
owner: tiangong-lca-pcr
language: en
lastReviewedAt: 2026-11-01
lastReviewedCommit: 0f14138af192516c4c3974db7514405392c4f130
lastReviewedNote: "Controlled real WebKit late-script regression and unchanged fatal-error policy; the historical source 1ca browser failure stays failed. Diagnostic old-artifact replays do not qualify a new source."
---

# Guide return navigation: bounded evidence

The sealed product at source `1ca1c00418271410ec0cc2b86805194cd528f03a` failed its browser gate: **59 of 60 cases passed; one failed**, while all **nine native no-JavaScript downloads completed**. The failing WebKit desktop English-guide case retained an ordinary JavaScript-enabled `GET /_next/static/chunks/1zgb_v0-fi358.js` failure, `Load request cancelled`. Both request phases were `guide-counterpart-return`; the observed page still showed the Chinese counterpart with its preserved query. The script request was not accepted as prefetch or as an intentionally disabled-script preload.

[Full original browser report](original/browser-report.json), [failed case](original/failed-case.json), [original failed qualification](original/qualification.json) and [failure screenshot](original/webkit-desktop-en-guide.png) retain that result. [Capture index](original/capture-index.json) binds all **84 PNGs and one saved HTML capture** in three lossless engine archives, with every original member's name, size and SHA-256. The original harness snapshot matches the failed report's tool hash and its pinned Git source. No historical receipt is changed to passed.

## Investigation and its limit

The guide check already called `settleLanguage`, which includes a lifecycle `networkidle` wait. It then intentionally navigated back to the original-language guide so the same case could continue with search. Later resource work can begin after that lifecycle event has fired.

Eight diagnostic WebKit runs over authenticated, immutable sealed `1ca` bytes used the original guide flow and a prototype current-request wait: four runs per variant, with zero or 750 ms controlled response delay on the real captured chunk. [Complete probe records](diagnostics/eight-sealed-probes.json), [stdout](diagnostics/eight-sealed-probes.log), screenshots and source snapshots retain all eight. **None reproduced the historical script cancellation.** They are non-reproduction diagnostics, not a red/green demonstration or acceptance of an old or new source.

The deterministic regression uses a real WebKit browser and HTTP server. After the counterpart document reaches lifecycle idle, it starts a held JavaScript request and reveals the counterpart feature control. The original guide flow completes its feature assertions and begins its intentional return while the script is still held; document replacement produces an actual unclassified script cancellation. The repaired flow waits for the script to finish and execute before returning. This proves the premature-return timing class; the exact unique trigger of the earlier intermittent full-site failure remains unproved by the eight probes.

## Repair and preserved checks

Commit `0f14138af192516c4c3974db7514405392c4f130` arms the existing current-request observer before the guide feature navigation and awaits it before the intentional return. Its observer body is unchanged: two animation frames precede its existing 500 ms quiet check and 30-second request-poll bound. The poll bound does not claim to bound the preceding animation-frame evaluation itself. No delay, timeout or resource limit is increased.

The HTTP document, actual counterpart language, preserved query, visible copy control and original Markdown checks remain. Main-case search still exercises the original language. All 60 browser cases and nine native-download requirements remain. The ordinary fatal-error policy is extracted verbatim into a testable helper; every prefetch/native-download/disabled-script predicate remains unchanged. The wait neither reclassifies nor removes any failure.

The regression file belongs to the **browser suite / consumer qualification shard**, whose browser runtimes are installed by CI. It launches real WebKit without a silent skip. Fixture allocation uses cleanup around browser setup so a failed launch/context/page creation cannot leave its HTTP server running.

## Inspect the actual controls

- [Baseline test failures](controlled/baseline/tests.log) and [baseline real-request trace](controlled/baseline/site-guide-counterpart-webkit-late-success.json) show the held script being cancelled at the premature return. The baseline seam only exposes the original guide function and extracts its unchanged fatal-error loop for testing; the guide flow still has no new barrier. Its exact snapshot and test hashes are retained.
- [Fixed checks](controlled/fixed/tests.log) record **24 passed, zero failed, zero skipped**: 22 existing contract/policy checks and two actual WebKit regressions. [Positive trace](controlled/fixed/site-guide-counterpart-webkit-late-success.json) records completion/execution before the return; [HTTP 503 trace](controlled/fixed/site-guide-counterpart-webkit-http-error.json) records a genuine failed enabled-script response.
- [Fatal-guard replay](controlled/fatal-guard-replay.json) applies the actual unchanged production guard to those captured requests: the baseline cancellation still fails, the fixed positive passes, and the HTTP 503 still fails. It is a read-only guard check, not another browser or product qualification.
- [Suite membership](controlled/suite-membership.json), [strict browser TypeScript diagnostics](controlled/fixed/browser-typecheck.log) and [strict engineering diagnostics](controlled/fixed/engineering-typecheck.log) retain routing and successful typechecks. Empty diagnostic logs mean those commands completed without compiler messages.
- [Independent review](independent-review.json) binds source/test bytes and repeats real-browser red/green and existing policy checks in an independent external working directory. [Summary receipt](receipt.json) and [source snapshots](provenance/) distinguish original, baseline seam, prototype and final implementation.

## Raw capture access

From the repository root, this example verifies archive/member hashes and restores all original PNG/HTML captures into an external temporary directory. It leaves repository assets untouched:

```python
from pathlib import Path
import hashlib
import io
import json
import tarfile
import tempfile

package = Path("docs/reviews/pr30-guide-navigation-review-20261101")
scratch = Path(tempfile.mkdtemp(prefix="pr30-browser-captures-", dir="/tmp"))
for archive in json.loads((package / "original/capture-index.json").read_text())["captures"]:
    stored = (package / archive["path"]).read_bytes()
    assert len(stored) == archive["bytes"]
    assert "sha256:" + hashlib.sha256(stored).hexdigest() == archive["sha256"]
    expected = {entry["name"]: entry for entry in archive["members"]}
    with tarfile.open(fileobj=io.BytesIO(stored), mode="r:gz") as packed:
        assert {entry.name for entry in packed.getmembers()} == set(expected)
        for entry in packed.getmembers():
            assert entry.isfile() and Path(entry.name).name == entry.name
            data = packed.extractfile(entry).read()
            assert len(data) == expected[entry.name]["bytes"]
            assert "sha256:" + hashlib.sha256(data).hexdigest() == expected[entry.name]["sha256"]
            (scratch / entry.name).write_bytes(data)
print(scratch)
```

[Evidence-file hashes](evidence-files.json) cover this package except that index itself. The historical sealed source remains failed. Focused controls and old-artifact probes do not replace fresh full-source, full sealed/browser, provider or publication qualification; those results must bind the actual receiving source.

## Evidence path correction, 2026-11-01

The [regression source snapshot](provenance/regression-source.snapshot.txt) was renamed from `provenance/regression-test.ts.txt` because the historical name matched the repository test discovery predicate. Its bytes remain exact; the real executable regression remains `tests/browser/site-guide-counterpart.browser.test.ts`, in the browser suite and consumer shard. [Path mapping](provenance/path-map.json) preserves the former locator and original source identity. Historical execution logs and receipts retain their original names and observations.
