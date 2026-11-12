---
title: CPC 61 original PCR identity restoration
docType: report
scope: repo
status: draft
authoritative: false
owner: tiangong-lca-pcr
language: en
whenToUse:
  - when reviewing the 60 original-identity PCR upgrades in PR 31
whenToUpdate:
  - when this delivery scope or verification changes
checkPaths:
  - docs/cpc61-original-identity-restoration.md
  - docs/evidence/cpc61-original-identities-20261112.json
  - classifications/mappings/cpc-3.0-to-pcr.yaml
  - classifications/aliases/pcr-id-aliases.yaml
lastReviewedAt: 2026-11-12
lastReviewedCommit: null
lastReviewedNote: "User-directed CPC 61-only delivery, upgrading original scaffold identities."
---

# CPC 61 original PCR identity restoration

At the user's direction on 2026-11-12, PR #31 delivers only 60 CPC 61 methods, each upgrading its original scaffold
id and semantic directory from the retained CPC 3.0 leaf-slug inventory. It contains no CPC 63 or CPC 64 PCR changes.
Those locally authored methods were preserved separately before narrowing this delivery.

The current target baseline is `85283aa758b1f0342ede1fdaee6dc312e71cd8dc` from `Candywangx/main`. All 60 destination
records are unpublished `scaffold / empty_scaffold` records on that baseline. The final changes upgrade their
existing four-file directories, without introducing replacement PCR ids or new PCR directories.

The authored English/Chinese methodology, specific scope, reference flow, selected UUIDs, evidence limitations,
module-reference removals and review states are retained from the locally reviewed original-identity upgrades.
All methods remain `candidate / authored_methodology`; scientific review remains pending. Restoring a broad
historical id does not broaden a method's applicability or convert a narrower/proxy mapping to exact.

The 60 CPC 61 mapping edges preserve their previous relations and acceptance evidence, now pointing to the original
ids. All 1,576 existing upstream edges remain unchanged. The individual ADRs identify the current original-id target;
earlier ids, paths, hashes and review claims are explicitly retained as historical evidence, not fresh verification.
Aliases, catalog and coverage are rebuilt by the official commands. The two additional Chinese category labels
support browsing the original CPC 61 directory hierarchy.

The [60-record crosswalk](evidence/cpc61-original-identities-20261112.json) records each current id/path, replaced id/path,
four-file SHA-256 hashes and target-check results. Structured projections are regenerated twice through the current
builder and checked for byte-for-byte determinism. These checks establish identity/projection consistency; they do
not constitute new literature verification, external UUID confirmation, scientific approval or publication readiness.
Full repository and hosted CI results must be assessed against the new final commit, rather than the former
104-method delivery or its build-capacity measurements.
