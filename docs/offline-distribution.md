---
lastReviewedAt: 2026-10-03
lastReviewedCommit: 826246ae813e4e9582bb145b9c7ff04e3354a161
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
  - builder/scripts/product-*.mjs
  - product-release.json
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

`@tiangong-lca/pcr` contains the CLI, shared semantic reader, schemas, bundled locked
runtime dependencies and the thin consumer Skill. `@tiangong-lca/pcr-library` contains
`library.sqlite`, its adjacent `library.sqlite.json` manifest and notices. Each
package includes its own consumer README and the repository MIT `LICENSE`. The tool
has no dependency on the data package. From product release 0.3.0 onward, both use the same product SemVer as the website. The packages remain separate installation units.
The source package directories are development inputs; publish only generated packages.

Starting with 0.1.2, npm distribution uses the `@tiangong-lca` organization scope.
The command remains `tiangong-pcr`; installation paths are
`node_modules/@tiangong-lca/pcr` and `node_modules/@tiangong-lca/pcr-library`.
The snapshot kind `tiangong-pcr-library` and format version remain unchanged.
Existing unscoped packages and their tags remain historical releases. Install the
scoped pair for automatic discovery; an existing snapshot can still be selected
explicitly with `--library`. Renaming both package identities does not automatically
publish them: first publication and new package-specific trusted publishers are
set up explicitly before normal version-increase automation resumes.

Node 24.19+ is required for offline SQLite reads. The implementation uses the built-in
SQLite module (release-candidate API in this runtime), without native npm addons.
Supported targets are macOS ARM64, Linux x64 and Windows x64. A Windows source
checkout used for building needs `core.longpaths=true` and `core.autocrlf=false`
before checkout, so long paths and exact-byte source fingerprints are preserved.
Installed content packages do not require Git. Prepare Node separately
on a connected machine if the destination has no runtime. No install hooks, runtime
network calls or implicit content downloads are used.

## Build and transport

For production transport, take the two tarballs from one completed product
GitHub Release and verify its `SHA256SUMS`, or create and verify a complete bundle
with the [product build commands](#build-and-operator-commands). Those packages
include the common product identity.

The lower-level commands below are for local development and packaging tests.
They do not inject `product-release.json` or qualify a unified release, and their
output must not be published as the complete product. Run them from a validated
source checkout with locked dependencies already installed:

```sh
npm run offline:tool -- --output dist/tiangong-pcr --version 0.3.0
npm run offline:library -- --output dist/tiangong-pcr-library --version 0.3.0
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

Transfer both verified product tarballs and a suitable Node runtime to the offline machine. In a local
installation directory, run:

```sh
npm install --offline --ignore-scripts --no-audit --no-fund ./tiangong-lca-pcr-0.3.0.tgz ./tiangong-lca-pcr-library-0.3.0.tgz
./node_modules/.bin/tiangong-pcr library verify --library ./node_modules/@tiangong-lca/pcr-library/library.sqlite --format json
./node_modules/.bin/tiangong-pcr list --library ./node_modules/@tiangong-lca/pcr-library/library.sqlite --format json
```

On Windows use `node_modules/.bin/tiangong-pcr.cmd`. Alternatively unpack the tool
package and run its bin with Node; copy `library.sqlite` and `library.sqlite.json`
together to any local directory. npm is a transport option, not a runtime service.

The selection order is explicit `--library`, then `PCR_LIBRARY`, then an installed
`@tiangong-lca/pcr-library` package when running outside the source repository. Explicit
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
pinning, readiness, general LCA authoring, optional TIDAS authoring and Agent-led
process/model review. The tool bundles inspection, cited guidance, arithmetic and
review-envelope support; no model runtime or TIDAS schema implementation is embedded.
Inspection and arithmetic do not require a PCR library. Review preparation/checking
uses the selected library and native local inputs. Optional TIDAS SDK/toolkit assets
must be provisioned separately before offline use; fully offline semantic review
also requires an offline-capable host Agent/model. The snapshot format is unchanged.

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

The current product release is one version, one immutable `v<version>` tag and
one coordinated release of the tool, content package and existing production
website. `product-release.json` is authoritative; the tool, library and private
documentation package manifests are checked mirrors. The private repository-root
package version is unrelated. Unified production releases use stable SemVer only.

A release PR changes the product version and all three mirrors together. After
review and merge to `main`, `tag-release-from-merge.yml` creates an immutable tag
and dispatches `publish.yml`. Introducing the product version source does not
implicitly publish the first unified version; its first tag is an explicit main
workflow dispatch. Historical `pcr-v*` and `library-v*` tags keep their original
commits and package-only workflows. Do not create new package-specific tags from
the unified source or move any existing tag.

`publish.yml` keeps the existing npm trusted-publisher identity and `npm-release`
environment. It binds canonical owner/repository IDs, tag/event/workflow/checkout
SHAs and `main` ancestry. Its reusable qualification workflow runs complete Linux
validation, documentation/source/SEO checks and offline distribution on Linux,
Windows and macOS. The documentation job builds the website once and seals the
two npm packages and web archive from the same source. The publish job downloads
the exact Actions artifact ID produced by that qualification and rechecks source
identity after environment admission. Product publication is globally serialized.

### Product identity and immutable artifacts

Each npm package in a sealed product bundle contains `product-release.json`. The website exposes
the same object at `/generated/product-release.json`, and `/generated/version.json`
also reports `releaseVersion`, `releaseTag`, `sourceCommit` and `sourceFingerprint`.
The common fingerprint hashes all regular Git-tracked raw files under `library/`
and `classifications/`, including Chinese and historical content. It is distinct
from the existing English-only SQLite payload fingerprint, which remains intact.
The source commit additionally binds tool code, configuration and workflows.

The immutable product `release.json` records this identity, exact Node/npm
versions, both npm tarball names/integrities/hashes, portable SQLite assets, and
the web archive/tree hashes, byte/file counts and live verification probes. The
web identity excludes its own output-tree hash to avoid recursive hashing.
`SHA256SUMS` covers the transport assets. The archive is streamed and deterministic
under the pinned toolchain; regular files and safe paths are required. Consumers
retain individual PCR versions, readiness and scientific-review boundaries.

The GitHub Release is initially visible as **preparing/prerelease**, allowing the
existing Git-connected provider to read its sealed assets. It is not a completed
product release. Existing same-name assets are verified rather than overwritten.
A separate build proof binds the original qualified Actions artifact, allowing
partial asset delivery to recover the original bytes. Attempt receipts record
intent, acceptance, verification and pending/uncertain outcomes; they do not
replace the immutable product manifest.

### Existing EdgeOne project

The existing international project is `tiangong-lca-pcr`
(`makers-5hadzwjpsblu`) at `https://pcr.tiangong.earth`. It remains Git-connected;
CLI/SDK direct uploads are not used for this project. Its production environment
must follow `release/production`, a deployment pointer that only advances to a
qualified product tag's exact `main` commit. No code is authored on that pointer;
`main` remains the sole development trunk and workspace integration input.

The EdgeOne build command runs the dependency-free
`builder/scripts/product-web-materialize.mjs`. It reads the checkout's product
identity, downloads only that canonical GitHub Release's manifest and web archive,
checks hashes and identity, safely extracts to owned disk scratch and atomically
hands the verified export to the provider. Routing headers/redirects are retained.
It does not rebuild the frontend. Existing disk/file limits, failure rollback and
provider asset handoff remain enforced.

Production auto-deployment is enabled by the provider. Advancing the deployment
pointer supplies the normal trigger; do not also send a Webhook for that same
change. A same-source retry first checks the public site. A previous accepted but
unverified deployment is uncertain, not proof of failure. Only after checking that
the previous provider deployment is terminal may an operator explicitly dispatch
`publish.yml` with `retry_web=true`; this uses the project Webhook bound to
`release/production`. Keep the Webhook URL only in the protected
`PCR_EDGEONE_DEPLOY_HOOK_URL` environment secret. It is a bearer trigger credential,
not public release metadata. No undocumented deployment API or guessed deployment
ID is used.

### Activation and completion

Before the first unified release:

1. Review and merge the source change and complete workspace integration.
2. Permit `v*` tags in the existing `npm-release` GitHub environment while retaining
   historical tag policies. Verify both npm trusted publishers still name owner
   `tiangong-lca`, repository `pcr`, workflow `publish.yml`, environment `npm-release`.
3. Enable the trusted publisher's **Allow npm dist-tag** for both packages. npm
   12.2.0 is pinned with Node 24.19.0; it supports OIDC channel management, so no
   long-lived npm token is needed. The repository variable
   `PCR_NPM_DIST_TAG_OIDC_ENABLED=true` records operator setup, but real operations
   still have to succeed and be verified.
4. Associate the existing EdgeOne production environment with `release/production`
   and configure its scoped retry Webhook. Verify the existing custom domain,
   public ownership markers, provider capacity and previous stable deployment.
5. Confirm no historical `publish.yml` run is queued or in progress, disable
   independent legacy automation with `PCR_NPM_RELEASE_ENABLED=false`, then set
   `PCR_PRODUCT_RELEASE_ENABLED=true` and explicitly dispatch the first product
   tag. This avoids old tag workflows promoting a separate package release while
   the unified workflow is running. Do not infer activation from source merge or
   a local browser login.

The workflow stages npm publication under a candidate channel, verifies registry
identity and actual tarball bytes, and tests installation of the exact pair. It
then advances/validates the website and promotes the verified pair to `latest`.
Only after both npm channels and live source identity/probes agree does the
GitHub Release become complete/stable. npm upload acceptance alone is not proof
that a package is available to install. Stale retries cannot downgrade npm
channels or the deployment pointer.

These external operations are not one atomic transaction. Preserve per-target
receipts and continue missing verified steps. An earlier accepted npm upload that
still returns 404 is pending; do not blindly republish it. Conflicting bytes or
source identities fail closed. Retry uses the original sealed bundle, not a newly
rebuilt replacement. If original required bytes are no longer recoverable, retain
that failure and prepare a new reviewed version. Do not delete the prior stable
provider deployment as part of retry. Product release never approves a candidate
methodology or replaces a PCR's own immutable scientific release lineage.

An npm intent can also survive a crash before the upload was sent, or a rejected
upload. Ordinary retries still cannot infer non-acceptance from HTTP 404. After
confirming that the previous upload was rejected or never accepted and fixing
its cause, an operator may explicitly dispatch with `retry_npm=tool` or
`retry_npm=library`. This permits at most one retry for that package in the new
Actions run, using the original sealed tarball and all source/channel guards.
It first checks registry visibility; matching existing bytes are reused and
uncertain responses remain blocked. An accepted upload awaiting processing is
not eligible. Keep prior receipts; never delete them to force a publish.

### Build and operator commands

Use the pinned Node/npm versions from `product-release.json`. On a clean reviewed
checkout, prepare artifacts without any remote publication:

```sh
npm ci --ignore-scripts --no-audit --no-fund
npm --prefix packages/pcr-docs ci
npm run docs:build
npm run product:build -- v0.3.0 dist/product-release packages/pcr-docs/out
npm run product:verify -- dist/product-release
```

Release CI supplies the production site's public Google/Baidu ownership markers
when building; local review builds must use those same public values for a
production-equivalent artifact. The tag passed above must match the sole product
version. Output directories must be new. Builder qualification, source hashes and
actual provider limits remain mandatory; there is no replacement aggregate-byte
budget.

After activation, create/resume the first product tag from the exact current main
version through the guarded workflow:

```sh
gh workflow run tag-release-from-merge.yml --repo tiangong-lca/pcr --ref main -f tag_name=v0.3.0
```

Retry an existing unified release without moving its tag:

```sh
gh workflow run publish.yml --repo tiangong-lca/pcr --ref v0.3.0 -f tag_name=v0.3.0
```

A `retry_web=true` dispatch is an explicit provider-terminal confirmation, not an
automatic reaction to a timeout. Both recovery inputs require a new explicit
workflow dispatch when a new operation is intended: GitHub's “Re-run jobs” keeps
the same run ID and cannot authorize another hook or npm upload. If an incomplete
preparing release loses its original Actions artifact before all sealed files
exist, preserve that public release and its evidence and prepare a new version;
do not recreate different bytes under its existing tag.

Historical package releases retain their original tag/workflow and recorded
artifact versions. A necessary historical repair uses an explicit maintenance
window: suspend unified publication, confirm no product publisher is running,
then enable the legacy switch only for that repair and restore the switches
after verification. Do not run the two publication modes concurrently. Legacy
package bootstrap is unrelated to first unified-product activation.

Upstream contracts: [npm trusted publishing and dist-tags](https://docs.npmjs.com/trusted-publishers/#managing-dist-tags-with-trusted-publishing),
[EdgeOne Git deployment hooks](https://pages.edgeone.ai/document/create-deploys),
[EdgeOne project environments](https://pages.edgeone.ai/document/project-management).
