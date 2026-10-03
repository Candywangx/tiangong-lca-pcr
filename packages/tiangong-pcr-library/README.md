# @tiangong-lca/pcr-library

An immutable, indexed snapshot of TianGong LCA product category rules (PCRs) and
data-production methodology for fully offline use. This is a **content package**:
use [`@tiangong-lca/pcr`](https://www.npmjs.com/package/@tiangong-lca/pcr) to browse, resolve,
read guidance, and verify the snapshot.

## Contents

| File | Purpose |
| --- | --- |
| `library.sqlite` | Indexed catalog, PCR and module content, classification coverage, mappings, and compatibility aliases |
| `library.sqlite.json` | Snapshot version, source commit, source fingerprint, format version, and integrity hashes |
| `README.md`, `LICENSE`, `NOTICE.md` | Usage instructions, MIT license, and source notices |

The snapshot contains English Markdown and structured YAML. Original manifests
retain source language metadata, but installed document availability is
`en-US` only. Selected document bodies are read on demand; catalog browsing
uses indexes. The package has no JavaScript API, executable install scripts,
runtime dependencies, or automatic downloads.

## Install and verify

The CLI requires **Node.js 24.19 or later**, on Linux x64, Windows x64, or macOS
ARM64. In a project directory:

```sh
npm install @tiangong-lca/pcr@0.3.0 @tiangong-lca/pcr-library@0.3.0
./node_modules/.bin/tiangong-pcr library info --library ./node_modules/@tiangong-lca/pcr-library/library.sqlite --format json
./node_modules/.bin/tiangong-pcr library verify --library ./node_modules/@tiangong-lca/pcr-library/library.sqlite --format json
./node_modules/.bin/tiangong-pcr list --library ./node_modules/@tiangong-lca/pcr-library/library.sqlite --format json
```

On Windows, use `node_modules/.bin/tiangong-pcr.cmd`. Explicit `--library`
selection makes the chosen snapshot unambiguous. `PCR_LIBRARY` can also select
it; outside a PCR source checkout the CLI otherwise discovers the installed
content package.

## Move to an offline machine

Download the required versions on a connected machine:

```sh
npm pack @tiangong-lca/pcr@0.3.0
npm pack @tiangong-lca/pcr-library@0.3.0
```

Transfer both tarballs and a suitable Node.js runtime. Then install without
registry access:

```sh
npm install --offline --ignore-scripts --no-audit --no-fund ./tiangong-lca-pcr-0.3.0.tgz ./tiangong-lca-pcr-library-0.3.0.tgz
./node_modules/.bin/tiangong-pcr library verify --format json
```

You can also extract `library.sqlite` and `library.sqlite.json` and copy them
together to any directory. Keep the pair intact and select the database with
`--library /path/to/library.sqlite`. No source repository checkout is needed.

## Pinning and updates

Unified releases pair the same content and CLI product version; the bundled
`product-release.json` binds the source commit and complete source fingerprint.
Historical snapshots retain their existing format-version compatibility. Keep old snapshots when reproducibility
matters, install a new version alongside them, verify it, and explicitly select
it for new work. Do not edit the database or its sidecar in place.

Record the content version, tool version, source commit, and snapshot SHA-256
from `library info` / `library verify`. Use
`--library-sha256 sha256:<digest>` with a hash obtained from trusted release
metadata to pin exact database bytes. Integrity checks do not establish trust
in an unknown publisher.

PCR lifecycle and readiness are preserved. Candidate methodology remains
review-required, legacy identifiers may redirect to coverage information, and
an unmapped classification does not imply an available PCR.

## Documentation and license

- [PCR documentation](https://pcr.tiangong.earth)
- [Source and issues](https://github.com/tiangong-lca/pcr)
- [Offline format and release contract](https://github.com/tiangong-lca/pcr/blob/main/docs/offline-distribution.md)

TianGong-authored content is licensed under the **MIT License**; see the included
`LICENSE`. Source citations and third-party notices remain applicable. This
license does not relicense external standards or publications referenced by the
methodology.
