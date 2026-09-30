---
lastReviewedAt: 2026-09-30
lastReviewedCommit: b6f01e7f0ebea621d5cb11b63f2176b28e959ab2
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
  - when package layout, snapshot format, compatibility or npm release automation changes
checkPaths:
  - .github/workflows/publish.yml
  - .github/workflows/tag-release-from-merge.yml
  - builder/scripts/npm-release*.mjs
  - packages/tiangong-pcr-library/package.json
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
`library.sqlite`, its adjacent `library.sqlite.json` manifest and notices. Each
package includes its own consumer README and the repository MIT `LICENSE`. The tool
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

TianGong LCA code and authored methodology content use the MIT License. Both
source manifests and generated packages declare `license: MIT`; builders copy
`LICENSE` from the repository root into each package. The tool README is sourced
from `packages/tiangong-pcr-cli/README.md`, and the content README from
`packages/tiangong-pcr-library/README.md`. These are consumer instructions; this
contract remains the maintainer reference. Bundled dependencies retain their own
license files and notices. Source citations and third-party terms remain applicable;
MIT does not relicense referenced external standards or publications.
The workflows below publish generated artifacts only after release setup is enabled.
Implementing these workflows does not itself publish either package.


## npm release automation

The release pattern follows the workspace CLI and SDK repositories: merge an explicit
version change into `main`, pass qualification, create a package tag, and publish
through npm trusted publishing. PCR retains npm and its existing lockfile instead
of importing another repository's pnpm setup.

| Package | Authoritative version source | Tag |
| --- | --- | --- |
| `tiangong-pcr` | `packages/tiangong-pcr-cli/package.json` | `pcr-v<version>` |
| `tiangong-pcr-library` | `packages/tiangong-pcr-library/package.json` | `library-v<version>` |

Both source manifests remain private. The library manifest is release metadata,
not an installable library. Edit only the intended package version; content-only
commits do not release automatically. Stable versions use npm `latest`, prereleases
use `next`. Downgrades and SemVer build metadata are rejected. Introduction of a
version source or migration from the legacy CLI package name does not trigger an
initial release. The root private package version is unrelated.

`tag-release-from-merge.yml` detects increases and calls the complete `validate.yml`
gate, including documentation and Linux x64, Windows x64 and macOS ARM64 offline
installation tests. It then creates immutable lightweight tags using its job-scoped
`GITHUB_TOKEN` and explicitly dispatches `publish.yml` at each tag. This avoids a
long-lived GitHub automation token: GitHub does not run push workflows for tags
created with `GITHUB_TOKEN`, but does allow explicit workflow dispatch.

`publish.yml` accepts a tag push or dispatch at that exact tag ref. It verifies the
canonical repository and immutable owner/repository IDs, main ancestry, package
version, checkout SHA, event SHA and workflow SHA. It reruns qualification and checks
the source binding again after the `npm-release` environment gate. A tag moved or
pointing outside main is rejected. Release concurrency is serialized per package. A delayed unpublished version cannot
move its npm channel backwards; interrupted queued runs can be dispatched again.

The publisher uses Node 24.19.0 and its bundled npm (11.17.0), locked build dependencies,
and no release-build cache. This meets npm OIDC's minimum npm 11.5.1 / Node 22.14
contract. `release:build` requires a clean committed checkout, stages the selected
package, adds the matching public repository and `gitHead`, and packs exactly once.
Only that tarball is published. Each GitHub Release includes the tarball,
`release.json` (source commit, toolchain, SHA-256 and npm SHA-512 integrity), and
`SHA256SUMS`. Library releases also include the portable SQLite file and its sidecar.
Failed runs retain generated transport artifacts for 30 days in Actions.

An already published version is skipped only when its name, version, tarball integrity
and source commit all match. Different bytes or an uncertain registry response fail;
only HTTP 404 means missing. After publication, the workflow verifies registry
integrity before uploading GitHub assets. It does not overwrite npm versions or
move existing tags. Retrying a matching tag can repair missing GitHub assets.

### One-time owner setup

1. Confirm control of both npm names. Generated tool/content packages declare
   MIT and include the full license plus applicable third-party notices.
2. Create the GitHub environment `npm-release`. Apply the repository's desired
   reviewer protection and allow `pcr-v*` and `library-v*` tag deployments. GitHub
   tag rules must permit the release job to create these tags, while preventing
   updates/deletions. No personal GitHub release token is required.
3. In **each npm package's** trusted publisher settings use GitHub owner
   `tiangong-lca`, repository `pcr`, workflow filename `publish.yml`, environment
   `npm-release`, and allow direct `npm publish`. Normal releases require no npm
   token. npm does not validate these settings until a publish is attempted.
4. Set the GitHub repository variable `PCR_NPM_RELEASE_ENABLED=true` only after
   setup. With it absent or false, tag creation and publication remain disabled;
   regular PR validation continues. No variables or secrets are created by these files.

On 2026-09-30 both npm names returned HTTP 404. If an npm name has no package settings
yet, use the explicit bootstrap path for its first publication: place a temporary,
short-lived granular npm publish token in the `npm-release` environment secret
`PCR_NPM_BOOTSTRAP_TOKEN`, create the intended tag on the qualified main commit,
and dispatch at that tag with `bootstrap=true`. Bootstrap refuses a name that
already exists and fails on registry errors. Both names may be bootstrapped
independently. Afterwards configure both trusted publishers and revoke/delete the
temporary token. Normal runs never fall back to this secret. Never paste the token
into source, an Issue, or chat. Creating the configuration does not authorize the
first publication; the owner selects and triggers it separately.

### Release and recovery commands

Build reviewable artifacts locally from a clean commit without publishing:

```sh
npm ci --ignore-scripts --no-audit --no-fund
npm run release:build -- pcr-v0.1.0 dist/release-tool
npm run release:build -- library-v0.1.0 dist/release-library
```

Use the versions actually recorded at that commit. Output directories must be new.
For routine release, merge a PR increasing the selected source version; once enabled,
main automation handles tagging and publication. For first release, an owner creates
the matching lightweight tag at the qualified main commit after setup.

Retry an existing tag (always select the tag as the workflow ref):

```sh
gh workflow run publish.yml --repo tiangong-lca/pcr --ref pcr-v0.1.0 -f tag_name=pcr-v0.1.0
# First publication only, before npm package settings exist:
gh workflow run publish.yml --repo tiangong-lca/pcr --ref library-v0.1.0 -f tag_name=library-v0.1.0 -F bootstrap=true
```

Retry the tag workflow if it created the tag but dispatch failed; it accepts an
existing tag only at the same commit. After npm succeeds, retry publication normally
(without bootstrap); identical npm bytes are reused and missing GitHub assets repaired.
A conflicting tag/version requires a new reviewed version, never a force update.
Package release does not change PCR lifecycle status or complete workspace integration.

Verified upstream contracts: [npm trusted publishing](https://docs.npmjs.com/trusted-publishers/),
[npm provenance](https://docs.npmjs.com/generating-provenance-statements/),
[GitHub workflow triggering](https://docs.github.com/en/actions/how-tos/write-workflows/choose-when-workflows-run/trigger-a-workflow).
