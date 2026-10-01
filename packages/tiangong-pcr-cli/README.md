# @tiangong-lca/pcr

Read TianGong LCA product category rules (PCRs), inspect methodology guidance,
and validate foreground data drafts from a local content library. This package
contains the CLI, schemas, bundled runtime dependencies, and a consumer Agent
Skill. Install the content separately with
[`@tiangong-lca/pcr-library`](https://www.npmjs.com/package/@tiangong-lca/pcr-library).

## Install and run

Requires **Node.js 24.19 or later**. Supported platforms are Linux x64, Windows
x64, and macOS ARM64.

In a project directory:

```sh
npm install @tiangong-lca/pcr @tiangong-lca/pcr-library
./node_modules/.bin/tiangong-pcr library verify --format json
./node_modules/.bin/tiangong-pcr list --format json
```

On Windows, use `node_modules/.bin/tiangong-pcr.cmd`. When running outside a PCR
source checkout, the CLI discovers the installed content package. Use an
explicit path when selecting a different snapshot:

```sh
./node_modules/.bin/tiangong-pcr list --library ./node_modules/@tiangong-lca/pcr-library/library.sqlite --format json
```

The selection order is `--library`, then `PCR_LIBRARY`, then the installed
content package. `--root` explicitly selects a source checkout and cannot be
combined with `--library`.

## Common commands

```sh
./node_modules/.bin/tiangong-pcr tree --format markdown
./node_modules/.bin/tiangong-pcr list --scope material --page 1 --page-size 10 --format json
./node_modules/.bin/tiangong-pcr coverage summary --classification cpc:3.0 --format json
./node_modules/.bin/tiangong-pcr resolve --classification cpc:3.0:01111 --format json
./node_modules/.bin/tiangong-pcr guidance --pcr <pcr-id> --format json
./node_modules/.bin/tiangong-pcr --help
```

Use a PCR identifier returned by `list` for `<pcr-id>`. Each command has its own
`--help`. Default browsing shows material PCRs; `--scope legacy` exposes
compatibility records. Guidance reports readiness and validation coverage:
candidate content still requires review, and installing a package does not
approve a methodology. The content package provides English documents only.

## Fully offline installation

On a connected machine, download both packages:

```sh
npm pack @tiangong-lca/pcr@0.1.2
npm pack @tiangong-lca/pcr-library@0.1.2
```

Transfer the two tarballs and a suitable Node.js runtime to the offline machine.
In the destination directory:

```sh
npm install --offline --ignore-scripts --no-audit --no-fund ./tiangong-lca-pcr-0.1.2.tgz ./tiangong-lca-pcr-library-0.1.2.tgz
./node_modules/.bin/tiangong-pcr library verify --format json
```

Runtime dependencies are bundled. No install scripts, runtime downloads, or
network connection are required. Tool and content versions are independent;
record both versions and the snapshot hash for reproducible work. Use
`--library-sha256 sha256:<digest>` to require a specific trusted snapshot hash.

## Agent Skill

The package includes `skills/tiangong-pcr/SKILL.md` and its reference files. Copy
the complete `node_modules/@tiangong-lca/pcr/skills/tiangong-pcr/` directory into your
agent host's configured Skill directory, and make the installed CLI available
to that host. npm installation does not automatically activate the Skill.

## Documentation and license

- [PCR documentation](https://pcr.tiangong.earth)
- [Source and issues](https://github.com/tiangong-lca/pcr)
- [Offline format and release contract](https://github.com/tiangong-lca/pcr/blob/main/docs/offline-distribution.md)

Licensed under the **MIT License**; see the included `LICENSE`. Bundled
dependencies retain their own license files and notices in `node_modules`.
