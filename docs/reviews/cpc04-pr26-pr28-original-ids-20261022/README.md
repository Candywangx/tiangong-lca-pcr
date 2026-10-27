---
title: Original PCR identities for CPC 04 PR 26 and PR 28
docType: report
scope: repo
status: draft
authoritative: false
owner: tiangong-lca-pcr
language: en
whenToUse:
  - when reviewing the original identity correction in PR 28
  - when resolving the PCRs delivered by PR 26 and PR 28
whenToUpdate:
  - when this correction's scope or verification changes
checkPaths:
  - docs/reviews/cpc04-pr26-pr28-original-ids-20261022/**
  - classifications/mappings/cpc-3.0-to-pcr.yaml
lastReviewedAt: 2026-10-27
lastReviewedCommit: null
lastReviewedNote: "Withdraw every new PR 28 method; retain only repairs to the 14 methods already merged in PR 26. Prior scope and qualification receipts below are historical."
---

# Original PCR identities for PR #26 and PR #28

## Current delivery: PR #26 repairs only, 2026-10-27

The user withdrew all new PCR additions. PR #26 is already merged and is not reverted or rewritten.
The open PR #28 now carries only repairs and original-identity restoration for these 14 existing methods:

`04242`, `04261`, `04262`, `04291`, `04292`, `04361`, `04362`, `04391`, `04421`, `04442`,
`04491`, `04511`, `04521`, `04912`.

All four canonical files of these 14 records are preserved byte-for-byte from
`3818d2b7adce07adf0385bcab3e9af66b770526c`, including the bilingual content, atomic-flow repairs,
structured projections, candidate lifecycle and aligned Chinese translation declarations. The individual
ADRs retain their accepted mapping decisions and now bind the current English source hashes.

The 13 new methods (`04111`, `04112`, `04191`, `04192`, `04211`, `04212`, `04221`, `04222`,
`04231`, `04232`, `04241`, `04311`, `04321`) are restored, in all four files, to their exact empty scaffolds
from target main `1a5002b95674c40ba699dacf20951075835ccf77`. Their positive mappings and newly added ADRs
are removed. Previously deferred `04331` remains its unchanged target-base scaffold, and its new deferral ADR
is also withdrawn. No scaffold is available as material guidance. Drafts remain recoverable in
`3818d2b7a` (and `709912cfe` for 04331); withdrawing delivery is not irreversible deletion of the research.

Aliases, catalog, material and coverage indexes must be regenerated from this reduced source. No unrelated
PCR, mapping acceptance, builder, checker, website/search implementation, test, dependency or capacity gate
is changed. The historical 28-record `scope.json` is retained as an identity-restoration receipt, not as the
current delivery inventory; `current-scope.json` records the reduced source and fresh bounded checks.

Old 20,009/19,997 file counts and the previous 4,020,685-byte Chinese search failure do not qualify this
reduced source. Target checks do not establish full website/file-count success, new literature verification,
UUID confirmation, scientific approval or publication readiness. Fresh qualification is reported separately.

## Historical delivery amendment, 2026-10-23 (superseded)

After the atomic-flow repair at `709912cfe9c4b1f8e08a8e7dc8046ced6dc259e9`, hosted CI exported 20,009 files
and failed the unchanged 20,000-file gate. At the user's request, defer one newly introduced method: **04331**,
wild Homarus lobsters. Restore its original four-file empty scaffold exactly from PR base
`b4cf43be4b6f9ed52f34dd6ab89f71961ac82946`, remove its positive mapping and regenerate aliases/catalog/coverage.
The full repaired draft remains in commit `709912cfe`; it has not been irrecoverably deleted.

The effective delivery is now **27 material methods** in this review scope: 14 already merged in PR #26 and
**13 additions** in PR #28. CPC 04 becomes **41 mapped / 21 unmapped**, and the material catalog contains 1,489 PCRs.
All four files of the remaining 27 methods remain byte-for-byte unchanged by this deferral. No builder, checker,
website implementation, provider gate or other repository is modified. A fresh complete build must qualify the
reduced head; do not infer its final export count from the previous 20,009-file result.

The following identity-restoration receipt and `scope.json` describe the historical 28-method scope at
`b4c4abd8ba7a7f8aa9d6c0f80682665031288c2b`; they are not current file hashes or a claim that 04331 is still material.

## Historical identity-restoration receipt

The user's final direction on 2026-10-22 is to correct every PCR covered by the merged PR #26 and open PR #28.
These are 28 distinct PCRs: 14 from each PR. This is not the full 58-method CPC 04 repair batch. Other CPC 04
methodology repairs, deferred methods and local unaccepted research drafts are excluded.

The prior PR head is `252c725adb26c70e320f634c4a9679254930bb57`. Preserve its current English/Chinese methodology,
all flow identities, quantities, evidence limitations, lifecycle and translation state. Restore 19 replacement ids
into the original semantic directories recorded in the retained CPC 3.0 leaf-slug inventory. The other nine
covered PCRs already use their original ids and retain all four files unchanged.

Only the 19 existing positive mappings' `pcr_id` changes. Their labels, narrower relations and complete original
acceptance metadata are preserved. There are no new accepted mappings: CPC 04 remains 42 mapped / 20 unmapped.
No non-covered PCR is changed. PR #28 still adds 14 methods relative to its base; its additional identity correction
also covers the 14 methods already delivered by PR #26.

Delete the 19 replacement canonical directories and create no aliases for the removed replacement ids. Rebuild
aliases, catalog/material/coverage indexes through the official commands. Update the individual affected ADRs with
the identity correction. Restoring a broader historical id does not broaden the authored scope or make a narrower
mapping exact. Historical PR #26 and prior-head receipts retain their original source hashes as history.

`scope.json` records all 28 effective ids, file hashes, the 19 removed identities, target checks, and exact-byte
preservation hashes for all 34 non-covered CPC 04 records. Canonical Markdown changes only by PCR id/path
substitution; parsed manifests change only by id. Structured projections are generated by the existing builder,
with a repeated deterministic sync for all 19 migrations. Target measurement results remain unchanged.

## Verification and publication limits

All 28 covered target checks pass, with zero skipped measurement checks. Unchanged measurement results and byte
comparisons verify the identity migration; they do not establish fresh literature review, resolved UUIDs, scientific
approval, translation approval or publication readiness.

The old PR head's complete website build and full-suite results are historical and do not qualify this corrected
head. Fresh command results are reported in the PR description; the unchanged hosted product/file/resource gates
must qualify the corrected source. No provider gate, dependency, runtime, checker, workflow or search code is changed
by this correction. No merge, release or deployment is performed.
