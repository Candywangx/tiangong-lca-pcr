# CPC mapping audit and display-reference repair

Source `baf8f899929170c384bf43df9aca490a2e5983f2` preserves the existing CPC classification source and canonical mappings. All 115 frozen codes resolve through the real core classification resolver to their accepted PCRs.

`audit.json` records the pre-repair snapshot, including the two empty manifest classification references. `33390-resolve.json` demonstrates that the canonical mapping resolved even while that manifest display reference was empty. The source commit repairs only the two manifest references and adds the per-code audit. The frozen classification codes, acceptance decisions, methodology text and structured projections are unchanged.

Full local validation passed: 3,640 pass, 0 fail, 5 skips. Focused PCR checks passed 88 and 158 measurements with no skips.

[Upstream run 45936603850](https://github.com/tiangong-lca/pcr/actions/runs/45936603850) remains in progress at this saved observation. These API snapshots are not a final hosted qualification claim.
