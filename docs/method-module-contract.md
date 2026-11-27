---
title: Material Method Module Source and Package Contract
docType: contract
scope: repo
status: active
authoritative: true
owner: tiangong-lca-pcr
language: en
whenToUse:
  - when authoring or consuming a material reusable method module
  - when checking method sources, reviews, projections or portable packages
whenToUpdate:
  - when localized module source, package, review or verification semantics change
checkPaths:
  - library/modules/**
  - packages/pcr-core/src/method-module.ts
  - builder/lib/method-module.contracts.test.ts
  - builder/scripts/method-module.ts
  - package.json
---

# Material method modules

A material reusable module has one semantic identity under
`library/modules/<group>/<slug>/`, with `manifest.yaml`, canonical
`module.en-US.md`, aligned `module.zh-CN.md`, authored `source-bindings.json`,
`review.json`, and generated `structured.yaml`. Legacy single-file core stubs
remain placeholders. This contract adds no category PCR, classification mapping,
catalog registration, product release, hosted publication or PCR lifecycle transition.
Existing PCR publication commands do not operate on these modules.

The initial supported module is `method.pef-2021-ef31`, version `0.1.0`.
Its manifest is a `method_module`, declares the two required languages and the
`product-environmental-footprint` applicability, and retains `status: candidate`,
`consumer_policy_included: false` and `scientific_approval: false`. Candidate
interpretation, completed independent document reviews, scientific validity,
study verification and public-release permission are separate facts. This version
has no module publication/history mutation command. A changed reviewed source
needs fresh review and an explicitly selected module version; no in-place
package replacement is supported.

## Authoring and projection

Each complete requirement section has a stable `PEF-NN` identifier, heading,
`Applicability`, `Check-kind` and `Sources` lines, followed by substantive prose.
The applicability tokens distinguish all PEF studies, the no-Commission-PEFCR
branch and the Commission-PEFCR branch. Check kind is `machine`, `mixed` or
`professional`; it describes evidence assessment, not severity or authorization.
Citations bind an exact source ID and locator. Chinese preserves the ordered IDs,
applicability, check kinds and source citations; actual semantic alignment requires
review. Mechanical parity does not certify a translation.

Projection v1 retains both complete document preambles and each complete English
and Chinese requirement section together. Conditions, exceptions, required actions,
evidence and judgment boundaries are never flattened into isolated rule strings.
The exact-byte hashes of all five authored files and the parsed manifest, sources
and actual review records travel with the projection. The review basis is the
SHA-256 of deterministic JSON mapping the four non-review authored filenames to
their exact-byte SHA-256 values, in `MODULE_FILES` order. Review evidence is excluded
from that basis to avoid a circular hash; its own exact bytes remain separately bound.

`source-bindings.json` records the six acquired official source identities, document
date/rights interpretations, 25 official method identities and source-member hashes,
16 primary roles and nine parent-bound subcategories, source reference quantities,
units, geography, and 16 exact decimal-string normalization factors/weight fractions.
A filename alias is distinct from canonical XML UUID. Source config unit strings
are preserved alongside the verified reference-quantity unit label; the ecotoxicity
source typo does not establish another physical unit. Exact factor-source correspondence
does not establish the suitability of nonregional defaults for a study geography.
The source bindings do not include full factor tables or restricted source originals.

## Commands

```bash
npm run module:sync -- --module library/modules/environmental-footprint/pef-2021-ef31
npm run module:check
npm run module:check -- --module library/modules/environmental-footprint/pef-2021-ef31 \
  --source-packet /absolute/source-packet-manifest.json \
  --ef-directory /absolute/extracted-official-members
npm run module:export -- --module library/modules/environmental-footprint/pef-2021-ef31 \
  --output /absolute/new-module-package.json
```

Sync atomically replaces the single generated derivative and never edits source
content. Check regenerates in memory and compares exact projection bytes. Lint runs
check for every localized module. No-source check reports originals/factor sources
as `not-checked`; the optional local packet check verifies actual original byte
hashes/sizes and source URLs. Factor-source check verifies the 25 original XML
hashes, UUIDs, versions, quantity references, units, geography and factor counts,
plus all 16 original config scalar values and labels. These checks validate
represented source facts, not scientific interpretation or completeness of a study.
Text decoding rejects malformed UTF-8 and retains a BOM, so adding it changes the
exact source hash, review basis and portable bytes. The reader checks regular-file
type before open and on the opened descriptor, comparing device/inode identity.
POSIX opens include `O_NOFOLLOW | O_NONBLOCK`, so a replacement FIFO cannot block
before descriptor inspection. Windows does not expose those flags; its ordinary
file read retains the pre-open and descriptor checks. The regression uses actual
POSIX FIFOs (both pre-existing and substituted immediately before open) in bounded
child processes; Windows exercises a nonregular directory rather than claiming
POSIX FIFO coverage. All fixture paths and children are released after the test.
These choices follow the pinned [Node 24.19 TextDecoder contract](https://github.com/nodejs/node/blob/v24.19.0/doc/api/util.md#new-textdecoderencoding-options)
and [filesystem flag/platform contract](https://github.com/nodejs/node/blob/v24.19.0/doc/api/fs.md#file-open-constants).
Root symlink aliases such as macOS `/tmp` are canonicalized at the explicitly
selected evidence root; file/descendant symlinks are rejected.

Export requires all three independent review dimensions unless the explicit
`--allow-unreviewed` diagnostic flag is used. Diagnostic output is candidate evidence
and fails verified consumer adoption. Export uses a new output file outside the
canonical module directory with an existing parent directory, rejects physical
output-parent aliases back into the canonical module, fails if the file already exists, and prints the exact artifact,
source-bindings and review-basis SHA-256 values. No private workspace dependency,
credentials or original PDFs/ZIPs enter the artifact.

All commands support `--help`, print machine results as JSON and fail with
`METHOD_MODULE_ERROR` on stderr. Sources, projection and external packages are not
silently repaired by check/export.

## Portable package and consumer boundary

The JSON envelope has `schema_version: 1`, `kind: method_module_package`,
`payload_sha256` (SHA-256 of deterministic `json(payload)`) and `payload`. The payload
is the complete projection plus `authored_files`, containing the original UTF-8
bytes of the five authored files. Deterministic JSON uses two spaces and one final
newline; generated YAML uses pinned repository YAML 2.9.1 with line wrapping disabled.
Consumers hash the complete delivered artifact independently as well as verifying
the internal payload hash.

`packages/pcr-core/src/method-module.ts` owns the shared deterministic read/projection
and package verification boundary; Builder owns maintenance command mutations.
`verifyModulePackage(bytes, expectations)` reconstructs the projection from embedded
source, rejects a substituted/stale/incomplete projection, verifies review binding,
and compares independently supplied `id`, `version`, `artifact_sha256`,
`review_basis_sha256`, `source_bindings_sha256` and `applicability`. It requires
current source, translation and semantic review records. Review records identify
`dimension`, `reviewer_kind` (`ai-independent` or `human-independent`),
`reviewer_identity`, `reviewed_at`, `basis_sha256`, `outcome: no-material-findings`
and a durable `evidence_ref`. Outstanding findings must be resolved before that
outcome can be recorded. A reviewer may supply more than one distinct dimension
only when that actual scope was reviewed.

Embedded review records and a newly computed artifact hash are not a trust anchor.
The consuming repository must obtain and pin those expectations from its reviewed
adoption of the exact eligible PCR Main commit and durable review evidence. A caller
that trusts an untrusted package to provide its own expected hashes has not verified
provenance. The local verifier cannot authenticate GitHub authority, reviewer
independence, professional competence or scientific truth. Synthetic test reviews
are explicitly fixtures and never enter the authored module.

PCR owns normative meaning, applicability, required evidence and source identities.
Consumers own numerical adoption, executable severity/phase/waiver/action policy,
product-specific source selection and actual assessment. Recommendation/corrigendum,
interim guidance, EF package/per-method, module package, product-study source and
consumer implementation/profile versions remain separate. A successful package
check cannot qualify a study, certify an EPD, establish human verification or
approve a cement PEFCR. A complete industry-study positive case needs its own real
inventory, all-category results, suitability and independent assessment evidence.
