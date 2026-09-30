---
title: Offline PCR distribution implementation plan
docType: plan
scope: repo
status: active
owner: tiangong-lca-pcr
language: en
related:
  - docs/offline-distribution.md
  - https://github.com/tiangong-lca/pcr/issues/47
---

# Offline PCR distribution

Issue: https://github.com/tiangong-lca/pcr/issues/47. Source baseline: bd29c8fe.

User refinement: ship English Markdown and structured YAML only; exclude all other
language bodies while preserving source manifest identity and translation metadata.

Deliver independent `tiangong-pcr` tooling and `tiangong-pcr-library` data packages.
Canonical Markdown/YAML stays in Git. Neither package downloads content at install
or runtime. Actual registry publication is outside this implementation task.

## Sequence

1. Define format 1, independent tool/content versions, provenance, explicit selection,
   integrity and offline installation in the distribution contract.
2. Introduce a scoped storage boundary. Repository behavior stays the default;
   selected snapshot content reuses projection, release-hash and readiness checks.
3. Build deterministic SQLite indexes and individually compressed original artifacts.
   Verify source aliases/mappings and preserve their evidence. Bind stored bytes to hashes.
4. Add explicit snapshot selection and whole-file verification/pinning. Package runtime
   dependencies and Skill separately from data, without install hooks or native addons.
5. Test parity, corrupt/incompatible inputs, candidates, lazy reads and reproducibility.
   Exercise the full corpus and install both tarballs outside the checkout offline.
6. Run full validation and Docpact; commit, review and follow controller integration.

## Scale and limits

Today's archive size is not a capacity limit. Model 3,000 / 10,000 / 30,000 material
records and report actual build size. Browsing must not decompress bodies. Current
content, compatibility identities and mapping evidence are included; open revisions
and historical content bodies are excluded. Whole-file verification is explicit
because it necessarily reads the entire snapshot.

Use built-in node:sqlite on Node 24.19+ (version-matching API documentation checked;
currently release-candidate API). Qualify macOS ARM64, Linux x64 and Windows x64.
Byte reproducibility requires identical inputs and toolchain; source hashes do not.
SHA-256 detects corruption against trusted metadata, not publisher authenticity.
Updates select a newly verified file; old snapshots are never mutated or migrated.

The local Claude design review was attempted but failed with an invalid thinking-block
signature. No independent approval is claimed. Validation and targeted review are required.

## Measured implementation evidence

On the 2026-09-30 source snapshot (789 material records), the English-only library
contains 116.45 MB of original source/evidence bytes in a 39.28 MB SQLite file;
its npm tarball is 24.09 MB. The tool tarball is approximately 0.34 MB including
five bundled dependency packages. These are measurements, not capacity limits.

The 789 material records alone occupy 106.19 MB original / 19.81 MB compressed
payload bytes. Linear scenarios at this distribution are:

| Material records | Original payload MB | Compressed payload MB |
| --- | ---: | ---: |
| 3,000 | 404 | 75 |
| 10,000 | 1,346 | 251 |
| 30,000 | 4,038 | 753 |

Indexes, evidence, SQLite page overhead and future size-distribution changes are
additional. Runtime browsing verifies metadata indexes without decompressing body
content; selected guidance reads three current artifacts. Large deployments can
transport the same SQLite contract directly without npm.

The isolated installation test identified npm omitting bundled dependencies when
packing a macOS temporary directory through the `/var` symlink. Tests now use
canonical paths and assert that the tarball contains AJV before installing from an
empty cache with offline resolution. Full snapshot reproducibility, selected-body
corruption, index corruption, unsupported formats, checksum pins, stale projections,
English-only availability, candidate readiness and offline installation pass.
