---
title: CPC 54 PR 35 retained review evidence
docType: reference
scope: repo
status: draft
authoritative: false
owner: tiangong-lca-pcr
language: en
whenToUse:
  - when reviewing CPC 54 historical acceptance evidence and current candidate states
whenToUpdate:
  - when correcting this evidence index or documenting a new content review
checkPaths:
  - docs/reviews/cpc54-pr35-evidence/**
  - docs/adr/cpc-54*.md
  - builder/research-sessions/cpc-54*/**
---

# CPC 54 PR 35 retained review evidence

This package makes the retained evidence used for the CPC 54 review available in
the PR checkout. It does not approve methodology, translation, publication, or a
study. No platform lookup or external source download was performed to assemble it.

## Current content and historical records

[Pre-repair readback](current-review.json) binds all 63 PCRs to their 252 canonical
file hashes at commit `05b1b5804d3b6b2ab83d2bd2cce41b5a2d06a256`. All are
`candidate` / `authored_methodology`, with Chinese translation `aligned`.
The previous read-only review ran all 63 target checks on these identical bytes:
14,559 checks performed, none skipped, no problems, and 2,533 candidate warnings.
These are retained results, not a new full-library validation or scientific review.

The [index](index.json) inventories restored historical review files at the exact
repository-relative paths cited by the ADRs. Original source hashes are preserved. At owner request, advisory-module
selection/checklist/review material has been removed from the retained excerpts.
The index identifies each transformation and its current packaged hash; those
excerpts are no longer byte-identical to their original historical sources. Historical `reviewed` fields, inventory counts, UUID judgments and test
totals describe their original authoring rounds; they must not override the
current readback or manifests. Historical mistakes and recovery records are
preserved as evidence, not reapplied.

## Native identity evidence

Five files under `native/` retain the complete native `/flow` payloads from the
saved direct responses for diesel, fossil carbon dioxide, water vapour, PM2.5
and PM2.5–PM10. The index records original response hashes, extraction paths,
capture times and state codes. Extraction removes the account/routing envelope;
it does not change the native dataset content or assert a fresh remote read.

`support/flowproperties.jsonl` and `support/unitgroups.jsonl` are exact bytes of
the retained support snapshot: 107 properties and 17 unit groups. Their hashes
match the retained export report. [Export summary](support/export-summary.json)
retains the relevant report fields, with the omission of account/project/machine
details explicitly documented. It is not an authentication receipt. The original
report hash is also recorded in the index.

The 26 bound inventory occurrences use the five native flows above. Their types,
Mass/kg chain, receiving-air compartments and Chinese names were compared with
the pre-repair cards. The remaining 2,848 inventory identities and all 63 reference
product identities are unbound; actual resolution and applicable foreground
evidence remain required. A missing UUID does not establish platform absence.

## Integrity and limits

Index paths are relative to the repository root. Verify each `sha256` against the
exact file bytes. For entries marked `none; exact historical bytes` or
`none; exact JSONL bytes`, the packaged hash must also equal `source_sha256`.
For extracted native datasets, compare the declared JSON pointer in the original
response only when that original local envelope is available; it is not claimed
to be bundled. The pre-repair canonical hashes identify that earlier source version; use the maintenance readback below for the repaired files.

Local hashes detect changes relative to this retained package. They are not
provider signatures and do not prove current platform state. Nested references
inside historical traces may refer to earlier source versions or unbundled full
execution logs; this is not a complete replay archive. External literature and
empirical scientific evidence have not been newly retrieved or certified.

The previously disclosed full-library event-log integrity test failure also
reproduced on clean target main. Full-library completion and hosted qualification
must not be inferred from this evidence repair or the target-check results.

## Content repairs — 2026-11-11

[Maintenance readback](content-repair-20261111.json) records the nine PCRs repaired
from source commit `d7947e1d74bdd3df1d5c0a7c6311fffbda0ca288`, their current four-file
hashes, actual targeted validation, formula scenarios and remaining limitations.
It supersedes the pre-repair hashes and card counts only for those records; the
historical evidence index and native snapshots are unchanged. The repaired corpus
has 2,871 inventory cards per language, including the same 26 bound occurrences;
2,845 inventory identities and all 63 reference product identities remain unbound.
The three removed painting collection cards survive as mandatory non-exchange
refinement requirements, so their physical coverage has not been discarded.
All records retain candidate/authored_methodology and Chinese aligned status.
Target checks and this repair do not establish scientific approval or a fresh
platform verification.

## Current dependency removal

The 12 candidate advisory definitions and all active references to them in the
63 CPC 54 manifests have been removed at owner request. PCR bilingual methods,
flow cards, calculations and structured methodology remain authoritative.
Historical canonical hashes above describe their named source versions, not
the current dependency-free manifests. See `module-removal-20261112.json` for
the current manifest hashes and actual validation coverage.
