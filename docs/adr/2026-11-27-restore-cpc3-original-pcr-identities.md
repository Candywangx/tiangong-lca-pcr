---
title: Retain the original 115 CPC section 3 PCR identities and upgrade in place
docType: decision
scope: repo
status: accepted
authoritative: true
owner: tiangong-lca-pcr
language: en
lastReviewedAt: 2026-11-27
---

# Restore original PCR identities

The repository owner explicitly requested: “我需要保留原 ID、原地升级” (retain the original IDs and upgrade in place). This decision implements that request for the frozen 115-record scope from `7d0a48078779e09b3ca6aadf1b0bd619505303a4`.

At source commit `baf8f899929170c384bf43df9aca490a2e5983f2`, 50 methods already use their original IDs. The other 65 methods use replacement semantic IDs while their original directories still contain byte-identical empty scaffolds. Neither side of these 65 pairs has a published release, release history or revision workspace. Preserve the reviewed methods by installing them in their original directories, restoring the original manifest and bilingual identity fields, and regenerating structured projections through the builder. Remove the redundant replacement directories. Do not broaden the narrower product, process, state or gate boundaries to the full classification label.

The existing CPC 3.0 accepted edges retain their codes, labels, narrower relations and confidence. Their 65 target identities are restored to the original records; this decision supplies the identity-transfer acceptance. The previous acceptance objects and all four source-file hashes remain in the [115-item migration ledger](../reviews/cpc3-115-resume-20261120/original-id-restoration-20261127.json). Earlier scientific, classification and translation evidence remains historical and is not rewritten to claim that the authors used these IDs. The retained methodology and normalized-content checks connect that evidence to the restored records. The other 50 methods and mappings are unchanged.

Regenerate the legacy-ID registry so the 65 restored material IDs are no longer coverage locators. Do not create another set of PCRs or introduce aliases as substitute methods. The temporary replacement IDs are removed from current lookup; their source files remain readable at the pinned source commit and are located through the migration ledger. None occurs in the source-owned published chapter compatibility inventories. This does not authorize deleting an existing published URL or changing the classification source inventory.

The 31422 and 31423 limited interpretations retain their existing classification evidence and [maintainer adoption](https://github.com/Candywangx/tiangong-lca-pcr/pull/38#issuecomment-7100729143). All 115 remain candidate/authored methodology. Scientific expert approval, translation status, actual study qualification and publication continue to depend on their separate records. Identity restoration establishes none of those additional approvals.

Decision authority: repository owner's explicit instruction in the active Codex conversation, recorded and implemented by codex-primary-controller. The accepted mapping records contain the UTC implementation time. Delivery requires regenerated aliases/catalog/coverage, checks of each restored PCR, unchanged method-content verification and fresh validation of the resulting source.
