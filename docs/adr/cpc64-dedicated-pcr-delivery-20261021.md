---
title: CPC 64 dedicated one-code one-PCR delivery decision
docType: decision
scope: repo
status: accepted
authoritative: true
owner: tiangong-lca-pcr
language: en
whenToUse:
  - when authoring or integrating the user-requested CPC 64 dedicated PCR records
whenToUpdate:
  - when the explicit CPC 64 one-to-one delivery requirement or its acceptance evidence changes
checkPaths:
  - docs/adr/cpc64-dedicated-pcr-delivery-20261021.md
  - docs/adr/cpc-64*.md
  - classifications/mappings/cpc-3.0-to-pcr.yaml
  - library/pcrs/transport-services/passenger-transport/**
---

# CPC 64 dedicated record delivery

## Direct user instruction

The user explicitly requested on 21 October 2026:

> 把 CPC 64 改成 28 份一一对应的专属 PCR，每个分类单独限定范围和参考流。开 goal 模式，全部完成后停止，只在本地修改，不提交 PR。

This accepted instruction governs the cardinality of this local authoring task. It overrides the default preference to reuse one canonical PCR across multiple classification leaves for this division only. It does not change the general repository classification policy or assert new policy for other divisions.

## Delivery contract

All 28 official CPC 3.0 division 64 leaves must each resolve to one different material PCR ID and one semantic directory. Each resulting manifest has exactly one CPC classification reference, matching its own individual code decision. A shared methodology module or calculation pattern may be reused; a shared canonical PCR record must not substitute for a requested dedicated record. Classification codes remain outside semantic PCR directory names.

Each record independently limits actual product function, official inclusions/exclusions, commercial and geographical conditions, mode/route interfaces, reference product, extent, quality and time. A title/code substitution is insufficient. Full actual subclass scope must be assessed: do not retain a convenient technical subset and claim full exact coverage. Missing identities, native quantities or route evidence are explicit candidate/production-readiness gates rather than unsupported semantic exclusions. Shared formula similarity does not establish identical products.

The prior shared-record delivery at local commit `a91a0cb29e725a4ff318f2552235cf43b318296c` is historical evidence. Its 15-record completion report is not proof of completion of this new 28-record task. Existing dedicated records may remain when review confirms that their current complete scope and reference already satisfy the new instruction. Shared unpublished records are removed only after every required successor has passed independent review; their Git history and per-code decision history remain available. No published release or immutable history is edited, and no legacy classification scaffold is rehydrated.

## Individual semantic acceptance remains required

This document accepts only the user-defined delivery requirement. It is not a generic acceptance anchor for classification edges. Every code retains its own `docs/adr/cpc-<code>.md` proposal, source comparison, actual product/reference decision and independent root acceptance before its mapping is replaced. Existing accepted decisions remain current while a clearly marked pending dedicated revision is authored. Integration updates the current per-code target and mapping only after review.

Exact mappings require actual full semantic scope. Any genuinely unresolved classification conflict must be exposed and resolved rather than hidden behind one-to-one cardinality, a passing checker, or an invented reference identity. Every bound UUID needs compatible direct evidence; unresolved candidate reference products follow the current row-addressable registration contract. Flow-property/unit UUIDs alone do not constitute a bound reference product.

## Local work and review limits

Work is local only: no push, PR, publication or remote dataset write. Use three authors per full batch, one consolidated independent root main review per target, and changed-field/dependency verification after repairs. Do not repeat stable full reviews or query cycles. Root performs final one-to-one/source/identity/projection checks and all selected target gates before the existing full repository validation chain. Record actual outcomes and documented platform/baseline limitations without claiming green Linux qualification from a macOS run.
