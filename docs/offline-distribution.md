---
lastReviewedAt: 2026-09-30
lastReviewedCommit: bd29c8fe0d0ff43e6e785fcf3a732e015f4420ac
title: Offline PCR distribution contract
docType: contract
scope: repo
status: active
authoritative: true
owner: tiangong-lca-pcr
language: en
whenToUse:
  - when building or consuming offline PCR packages
whenToUpdate:
  - when package layout, snapshot format or compatibility changes
checkPaths:
  - builder/scripts/build-offline-*.mjs
  - packages/pcr-core/src/offline-library.mjs
  - packages/pcr-core/src/source-context.mjs
  - packages/tiangong-pcr-cli/**
  - skills/tiangong-pcr/**
  - docs/offline-distribution.md
related:
  - docs/plans/offline-distribution.md
  - docs/pcr-library-release-policy.md
---

# Offline PCR distribution

`tiangong-pcr` contains the CLI, shared semantic reader, schemas, bundled locked
runtime dependencies and the thin consumer Skill. `tiangong-pcr-library` contains
`library.sqlite`, its adjacent `library.sqlite.json` manifest and notices. The tool
has no dependency on the data package. Both have independent SemVer versions.
The source package directories are development inputs; publish only generated packages.

Node 24.19+ is required for offline SQLite reads. The implementation uses the built-in
SQLite module (release-candidate API in this runtime), without native npm addons.
Supported targets are macOS ARM64, Linux x64 and Windows x64. A Windows source
checkout used for building needs `core.longpaths=true` and `core.autocrlf=false`
before checkout, so long paths and exact-byte source fingerprints are preserved.
Installed content packages do not require Git. Prepare Node separately
on a connected machine if the destination has no runtime. No install hooks, runtime
network calls or implicit content downloads are used.

## Build and transport

From a validated source checkout with locked dependencies already installed:

```sh
npm run offline:tool -- --output dist/tiangong-pcr --version 0.1.0
npm run offline:library -- --output dist/tiangong-pcr-library --version 0.1.0
npm pack ./dist/tiangong-pcr --pack-destination dist --ignore-scripts
npm pack ./dist/tiangong-pcr-library --pack-destination dist --ignore-scripts
```

Run `npm pack` using the canonical build path printed by the builder (avoid a symlink
alias for its directory: npm may omit bundled dependencies when packing through one).
Build outputs must not already exist. The builder stages a complete snapshot before
renaming the directory; it never modifies an installed library. Run the content build
from a clean, qualified release commit. The manifest records that commit and a
separate exact-byte fingerprint of all consumed sources. Generated timestamps and
absolute source paths are excluded. Identical inputs and the same Node/SQLite/zlib
versions produce identical bytes; different toolchains may produce a different file
checksum while preserving the logical source fingerprint.

Transfer both tarballs and a suitable Node runtime to the offline machine. In a local
installation directory, run:

```sh
npm install --offline --ignore-scripts --no-audit --no-fund ./tiangong-pcr-0.1.0.tgz ./tiangong-pcr-library-0.1.0.tgz
./node_modules/.bin/tiangong-pcr library verify --library ./node_modules/tiangong-pcr-library/library.sqlite --format json
./node_modules/.bin/tiangong-pcr list --library ./node_modules/tiangong-pcr-library/library.sqlite --format json
```

On Windows use `node_modules/.bin/tiangong-pcr.cmd`. Alternatively unpack the tool
package and run its bin with Node; copy `library.sqlite` and `library.sqlite.json`
together to any local directory. npm is a transport option, not a runtime service.

The selection order is explicit `--library`, then `PCR_LIBRARY`, then an installed
`tiangong-pcr-library` package when running outside the source repository. Explicit
`--root` selects repository mode and suppresses defaults; it conflicts with
`--library`. Source checkout defaults retain repository behavior. Follow-up commands
include the selected absolute snapshot path and an explicit checksum pin if supplied.

## Snapshot and integrity contract

Format 1 is an immutable SQLite file with metadata, records, aliases, coverage and
files tables. Catalog rows preserve readiness from source verification. Bodies and
supporting source evidence are individually DEFLATE-compressed and hash-bound.
List/tree read catalog indexes without decompressing PCR bodies. Coverage is a
separate derived index. Reading one PCR decompresses only that record's declared
current artifacts; projection schema/fingerprint, release hashes, completeness and
readiness use the same core as repository mode. Accepted mapping resolution rechecks
the selected edge against its preserved canonical mapping. Alias semantics and
coverage source relationships are verified when building and bound into the snapshot.

Every open verifies metadata index digests against the adjacent manifest. Selected
artifacts are checked against their exact-byte digests. `library verify` additionally
streams the entire file SHA-256 and runs SQLite integrity_check. `--library-sha256`
requires a trusted `sha256:<64 lowercase hex digits>` pin and verifies the complete
file before any operation. This costs a full-file read; ordinary indexed reads do not.
Checksums establish integrity against trusted metadata, not publisher authenticity.
Obtain the manifest/pin through a trusted release channel. Protect installed files
from concurrent modification. The reader never writes to or migrates a snapshot.

Retain tool version, content version, format version, source fingerprint, file hash
and selected PCR id/version with each task. Updates install a new file alongside the
old one, verify it and explicitly change selection for new work. Unsupported formats,
invalid metadata, missing artifacts and checksum failures fail closed with PCR error
codes. A future domain split can reuse the same artifact contract; there is no shard
download protocol or implicit fallback in format 1.

Current canonical records with **English Markdown only**, structured YAML, compatibility identities and mapping
or alias evidence are included. Chinese and other language bodies are excluded. Original
manifest bytes preserve source language/translation declarations; these describe the
source record, not installed language availability. Snapshot metadata explicitly sets
`available_languages: ["en-US"]`. `show --lang zh-CN` fails with
`PCR_LIBRARY_LANGUAGE_UNAVAILABLE`. Build-time release validation checks the complete
source record; runtime rechecks hashes only for the included English/structured artifacts.
Open revisions, historical release bodies, raw source
PDFs, authoring traces and documentation-site outputs are excluded. Content versions
do not change per-PCR lifecycle: candidates still require review and partial
validation is still partial. Repository Markdown/YAML is the authoring authority.

## Skill and publication

Copy `skills/tiangong-pcr/` from the tool package into the host agent's configured
Skill directory. npm does not activate Skills. The Skill teaches explicit selection,
pinning, readiness checks, validation coverage and local feedback drafting.

No repository-wide license has been declared at implementation time. Generated
packages therefore use `UNLICENSED` and preserve notices; bundled dependencies retain
their own license files. Before public registry publication, owners must establish
redistribution terms for tool/content and confirm control of the intended npm names.
This implementation builds and tests artifacts; it does not publish to a registry.
