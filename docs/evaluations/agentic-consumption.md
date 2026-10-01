---
title: Agentic consumption smoke evaluation
docType: reference
scope: repo
status: active
authoritative: false
owner: tiangong-lca-pcr
language: en
whenToUse:
  - when assessing evidence behind the first agentic consumer release
whenToUpdate:
  - when a new bounded consumer evaluation materially changes these findings
checkPaths:
  - skills/tiangong-pcr/**
  - packages/pcr-core/fixtures/agentic-review/**
lastReviewedAt: 2026-10-01
lastReviewedCommit: ccd92de1bcab92abac1dc01d2102fb75b7622434
related:
  - docs/agentic-consumption.md
---

# Consumer evaluation, 2026-10-01

PCR #56 tested the packed 0.2.0 tool candidate with the existing published 0.1.2
English content package. The pair installed using npm offline mode, ignored install
scripts and a new cache. Three independent `gpt-6.1-sol` Agents with medium reasoning
received only a local environment note and one simple request. The note located the
installed CLI/Skill, prohibited source-workspace reads/network/installations, and
identified the output directory. It did not supply a PCR ID, expected finding or
review schema. No TIDAS SDK/toolkit was provisioned, intentionally exercising the
honest incomplete-draft path.

| Prompt | Observed result |
| --- | --- |
| 使用 tiangong-pcr 创建 1 kg 小麦的 LCA 数据。 | Produced a general JSON/CSV collection draft with 20 rows. Only the requested reference amount was non-null; quantities, allocation and evidence gaps remained explicit. No mandatory foreground-package or TIDAS conversion. Farm-gate assumptions were disclosed without copying the tempered-grain UUID into a different product state. |
| 使用 tiangong-pcr 创建 1 kg 小麦的 TIDAS process。 | Produced a native incomplete process draft, field mapping and collection template. It disclosed the provisional tempered-grain gate, copied only supported PCR identity suggestions, and did not invent supporting dataset versions or measured exchanges. Inspection/report-envelope checks were explicitly distinguished from unavailable TIDAS schema validation. |
| 使用 tiangong-pcr 检查 datasets 里面的 TIDAS process/model，指出问题或异常。 | Produced three cited review reports. Identified 100 kg N per hectare / 5000 kg grain per hectare as 20 kg N per 1000 kg grain; the supplied value of 100 was five times the stipulated result. Preserved null seed use and missing support files as evidence gaps. Recognized an explicitly declared harvest instance despite its unavailable process file. Treated a disconnected repeated instance as a question, not proof of double counting. |

A follow-up asked the review Agent to correct the confirmed normalization issue
in a new copy and review again. Both amount fields changed from 100 to 20, the
normalization finding disappeared, and missing unit-chain/inventory/time/geography
evidence remained open. Original inputs and first reports were retained. All four
review envelopes passed binding/pointer checks with methodology_approval=false.

## Reproducibility and limits

The source fixtures are in `packages/pcr-core/fixtures/agentic-review/`. They use
native TIDAS field shapes and explicitly stipulated synthetic evidence; they do
not claim measured production data or complete schema validity.

| Input | SHA-256 |
| --- | --- |
| `normalization.process.json` | `60703d65f8a409b5b5a9b215f3f65ac1173356d5422702d8ecb1a24945182e5c` |
| `sowing.process.json` | `15a047bf8ca72247375d98fc3788cddfdd78674ac0734156a8d020b75e5e2834` |
| `wheat.model.json` | `faae772b7c6d5041c26905a30329545853336227e1f88203cdf6e0d3b068ea36` |

The tested intermediate tool tarball SHA-256 was
`6f989d83ad58d5ca14a7901245e57226c6a77863b41ef4a46e30944835296aa0`;
the library SQLite SHA-256 was
`7c0200e51fd7c54ae338504a6d2642d4d11c0242ffe57fc592c3cae672808a09`.
The intermediate package preceded the additional malformed-reference-version
guard and final release metadata; final-source tests and envelope replay qualify
those changes separately. It is not the final publication artifact hash.

All trials retained candidate/review-required PCR status and reported incomplete
semantic coverage. The reviewer loaded relevant overview, boundary, reference and
calculation evidence; it did not claim exhaustive review of every rule family.
The normalization conclusion is conditional on the stated synthetic basis; missing
machine-readable flow/unit evidence remains a separate finding.

This is a small capability smoke test, not an accuracy benchmark, independent LCA
certification, or a successful full TIDAS validation. Local tools used offline
inputs and installation resolution; no OS-level network-denial experiment was
performed. The Agent inference service was outside that offline boundary.

Invocation logs and complete outputs were retained in the task-owned local trial
directory and summarized in the Issue/PR. User-local paths and raw Agent work files
are not part of the npm package. Automated regression tests additionally exercise
source changes, invalid pointers, conflicting references, pagination, file-output
refusal, capacity limits, malformed values and arithmetic vectors.
