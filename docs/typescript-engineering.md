---
title: TypeScript Migration and Test Engineering
docType: contract
scope: repo
status: active
authoritative: true
owner: tiangong-lca-pcr
language: en
whenToUse:
  - when writing or migrating implementation, tests, build scripts or release scripts
  - when selecting the local or CI validation entrypoint
whenToUpdate:
  - when TypeScript migration boundaries, runtime pins or test qualification change
checkPaths:
  - .nvmrc
  - tsconfig*.json
  - package.json
  - package-lock.json
  - config/typescript-migration.json
  - scripts/engineering/**
  - .github/workflows/**
lastReviewedAt: 2026-10-04
lastReviewedCommit: f14879bdd9b484726260b1bcb79723cb316ce5b9
lastReviewedNote: "Reviewed complete typed site/Viewer/release source, generated browser assets, preserved historical publisher and journal compatibility, real export browser qualification and zero authored JavaScript inventory. Final coverage and formal publication remain #79/#69."
related:
  - repository-coding-guidelines.md
  - offline-distribution.md
  - pcr-documentation-site-contract.md
---

# TypeScript migration and test engineering

The approved [refactor](https://github.com/tiangong-lca/pcr/issues/69) finishes only
after semantic correctness, complete TypeScript source migration, real artifact
qualification, production publication and exact workspace integration are verified.
[Foundation #70](https://github.com/tiangong-lca/pcr/issues/70) supplies the first
engineering boundary; it does not claim that existing JavaScript has been migrated
or that final coverage targets are already met. [Semantic repair #63](https://github.com/tiangong-lca/pcr/issues/63)
has priority over performance work. Its known missing conditions/actions are not
accepted golden output merely because the old generator reproduces them.

## Source and runtime

New first-party implementation and tests use TypeScript or TSX. Runtime outputs
may contain generated JavaScript and type declarations. Canonical methodology
remains Markdown; schemas/configuration remain JSON/YAML. The existing
`scripts/vendor/workspace-seo/check.py` is an explicitly approved Python exception,
still bound to its upstream manifest. Do not rewrite that vendor snapshot locally.

`.nvmrc` selects exact Node 24.19.0 for `nvm install && nvm use`. The product
manifest must agree; product version and npm 12.2.0 remain owned by
`product-release.json`. `runtime:check` validates the exact development runtime and
supported platform; `runtime:release` additionally requires npm's actual invoking
version to match the release pin. Local package-manager defaults do not establish
release qualification. Windows can provision the same exact runtime without the
POSIX nvm shell; CI uses `setup-node` with `.nvmrc`.

Native/local targets follow the workspace contract: Linux x64/arm64, Windows x64
and macOS ARM64. macOS Intel is unsupported. CI asserts the actual architecture,
rather than inferring it from a runner label. This does not restrict public web
browsers by CPU.

The root strict TypeScript project covers `scripts/engineering/**`. Separate strict projects cover the remaining runtime boundaries. `tsconfig.core.json` checks the migrated YAML boundary, vocabulary registry, offline-tool builder and their typed contract tests. The site has its own Next TypeScript project; `typecheck:all` checks every project.
`typecheck:node` checks portable Node/Viewer projects using only root dependencies;
web tools and Worker checks additionally use the locked site dependency graph.
Do not use `allowJs`, broad explicit `any`, `@ts-ignore` or `@ts-nocheck` to declare
an implementation migrated. Unknown external data must be validated and narrowed.

Engineering scripts run directly under Node's erasable-TypeScript support; `tsc`
remains a separate mandatory check. `build:engineering` emits the scripts and
declarations; `build:tests` emits both source and tests for compiled-output checks.
Relative imports retain `.ts` in source and are rewritten by the compiler. Public-package qualification must test the actual compiled tarballs, including bins,
schemas, workers, relocation and asset paths. Consumers do not need a compiler.

## Migration inventory

`config/typescript-migration.json` records exact legacy source, generated output
and retained Python paths against a reviewed Git baseline. `migration:check` is
read-only and inspects tracked plus untracked nonignored source. New unaccounted
legacy code, missing/stale entries, invalid generated provenance, duplicate paths
and TypeScript escape expansion fail. Do not regenerate the manifest during a
check to accept new legacy code automatically. Remove an entry only with the
corresponding reviewed migration or retirement.

The pinned baseline commit must be available in the checkout; qualification
fetches full history. The checker uses TypeScript 7.0.2's pinned parser API solely
as development tooling. Its unstable API is not a public PCR dependency. Compiler
upgrades must rerun parser-boundary and negative fixtures before changing the pin.

Ignored build/review artifacts are not authored source. The source gate requires
zero remaining authored JS/MJS/CJS entries. Generated assets and the Python SEO
exception remain explicitly classified. An existing generated search Worker is
checked against fresh pinned-compiler output without modifying the artifact.

## Validation commands

Full validation currently requires Linux: existing Goal Harness artifact operations use descriptor-anchored `/proc/self/fd` traversal and intentionally fail closed on other hosts. Preserve this boundary during foundation work; the Harness phase must qualify and document its platform capabilities. Portable engineering, documentation and installed-package suites are separately available on the supported consumer platforms. Do not silently skip Linux-required tests and report a complete local run.

From a clean Linux source checkout install both currently separate dependency graphs:

```sh
nvm install
nvm use
npm ci
npm --prefix packages/pcr-docs ci
npm run browser:install
npm run validate
```

Root `validate` checks runtime, migration inventory, all scoped TypeScript projects,
whole-library lint and the complete test selection. Root `npm test` includes the
site transformation tests previously invoked separately. `test:list` reports
deterministic suite membership; every discovered test belongs to exactly one base
suite, and unclassified tests fail discovery. Aggregate selections do not duplicate
test files. New test placement/names must satisfy the suite contract.

| Command | Scope |
| --- | --- |
| `test:unit`, `test:contracts` | Pure operations and externally visible contracts |
| `test:integration`, `test:recovery` | Storage/process boundaries, transactions and failure recovery |
| `test:docs` | Site transformation, completeness and build-storage cases |
| `test:offline` | Real SQLite and installed tool/library distribution |
| `test:product` | Product sealing, publication and importer contracts |
| `test:engineering` | Runtime, migration and test-discovery boundaries |
| `test:browser` | Compiled Viewer interaction in Chromium, Firefox and WebKit |
| `test:coverage` | Emitted engineering tests and source-mapped engineering coverage |
| `docs:build` | Full static export/source/provider validation |
| `docs:browser -- --root <export> --report <new-dir>` | Actual full export in three browsers at desktop/mobile widths |

The test runner gives subprocesses one owned canonical temporary root and cleans
it after completion or failure. This avoids macOS `/var` aliases confusing
no-follow and source-identity tests; it never relaxes production path checks or
canonicalizes user-supplied artifact paths on their behalf. Preserve useful test
logs separately from disposable fixtures.

Cooperative POSIX signal forwarding has a real subprocess test. Windows
`process.kill(SIGTERM)` terminates its target without invoking that handler, so
that specific case is explicitly reported as unsupported there. Ordinary child
failure/status propagation and temporary-root cleanup still run on Windows.
Forced termination on any platform can prevent cleanup; preserve the owned path
for explicit recovery instead of claiming that a finally block always ran.

Coverage in this foundation is an **engineering baseline**, not whole-product
coverage. c8 maps emitted code back to TypeScript and includes unexecuted source;
tests and generated output are excluded from the denominator. Reports are retained
under `.reports/coverage/engineering`. As modules migrate, expand coverage to all
first-party surfaces and enforce the approved final targets: lines/functions 90%,
branches 85%, critical compiler/integrity/transaction branches 95%. Every declared
critical semantic and failure scenario is mandatory regardless of percentage.

Current offline tests already pack and install real artifacts. Full refactor
completion additionally requires cross-platform consumption of the exact unified
sealed release bundle, browser/visual acceptance of its actual extracted web
archive, fault/recovery cases and bounded agent-task evaluation. These follow-up
gates must not be represented as implemented by the foundation alone.

## Delivery and scientific boundaries

Each source phase targets PCR `main`, receives independent review and required CI,
then integrates its exact eligible commit into root. First-party language changes
do not change canonical PCR readiness, translation review or immutable release
history. Existing receipt, lock and recovery state compatibility is explicit in
each affected phase. The final unified product release builds once and publishes
the same verified artifacts through the existing npm/EdgeOne workflow; no product
version is bumped merely to establish this foundation.

## Compiled runtime transition

The first runtime migration replaces the core YAML parser, vocabulary registry
and offline-tool builder with TypeScript. The foundation initially used an explicit legacy transport bridge; the consumer
cutover removes it. `tsconfig.runtime.json` now emits only strict TypeScript into
an owned package stage. The core, semantic and consumer projects check their
implementation and tests independently. Final refactor completion still requires
zero authored legacy entries across the remaining repository surfaces.

Relative TS imports are rewritten to emitted JavaScript; the
public tool has executable bins, original schemas/Skill/licenses, runtime-only
locked dependencies and deterministic inline source maps rooted at `pcr://source/`.
No caller needs TypeScript in `node_modules`, and installed tests explicitly disable
Node's type stripping. Compiler/staging failure removes only owned staging files.
The Git-connected provider importer retains its dependency-free module graph;
a clean dependency-absent import probe verifies that boundary.

## YAML boundary

`packages/pcr-core/src/yaml-lite.ts` retains the API names but uses pinned `yaml`
2.9.1 to read one complete YAML 1.2 document into JSON-compatible data, with one explicit PCR compatibility rule: untagged leading-zero scalar spellings remain identifier strings; explicit numeric tags opt into numeric conversion. Folded
plain continuations, quoted escapes/newlines, block scalars and collections are
preserved. Duplicate keys, unresolved/unsupported tags, multiple documents,
complex keys and nonfinite values fail with positioned diagnostics; no partial
mapping is returned. UTF-8 file decoding is strict. Empty documents retain the
legacy empty-object result; explicit null remains null.

Acyclic aliases become independent JSON value copies. Cycles, more than 100
expanded alias visits and collection nesting beyond 100 are rejected at a source
position. These are parser expansion guards, not aggregate build-size budgets.
Existing anchored manifests require no source rewrite. Prototype-related keys
are data properties and cannot change an object's prototype.

The renderer preserves existing deterministic formatting for ordinary data,
including legacy undefined-to-null encoding. Nested empty collections and unusual
keys roundtrip correctly. Functions, exotic objects, accessors, symbols, sparse
arrays, cycles and nonfinite output values fail instead of silently losing data.
The vocabulary registry retains its richer filename/key-path duplicate report
and aggregates parser failures; valid registry data remains deeply frozen.

## Normative migration boundary

The typed Markdown parser, serializer, projection integrity, source-context compiler and guidance selection replace their inventoried legacy modules. `tsconfig.semantic.json` checks these implementations and their independent contracts. The consumer phase replaces the remaining core APIs and removes the fixed-URL legacy selection adapter. `tsconfig.consumer.json` checks the complete consumer, CLI, offline-library builder and their TypeScript tests. New generated source context is governed by [the semantic contract](semantic-projection-contract.md).

## Consumer runtime cutover

The consumer core, SQLite reader, CLI and offline-library builder use strict TypeScript. The runtime compiler now includes only TypeScript sources and no longer enables the legacy `allowJs` transport bridge. Generated npm bins are `.js`; consumers run them without a compiler or Node type stripping. Site, Viewer and release sources have also migrated; the inventory now contains zero authored JavaScript entries.

Read sessions own their source scope and handles. Repository sessions bind selected current-artifact bytes and recheck before returning; SQLite sessions retain one readonly transaction. Bounded caches belong to one synchronous callback and cannot escape as reusable validation receipts. Session tests cover source isolation, mutated inputs, eviction, closure, and ordered all-or-error batches.


## Browser source and interaction qualification

Browser entrypoints use TypeScript under separate DOM and Web Worker projects;
Node release/importer tooling remains in its own runtime type environment.
`tsconfig.viewer-browser.json` and `tsconfig.docs-worker.json` emit reviewed browser
assets with the pinned repository compiler. HTML/worker URLs retain their existing
JavaScript filenames. Browsers receive emitted JavaScript, never TypeScript source.

The `browser` suite is an explicit part of `all`/`root`, using the existing Node
test runner and pinned Playwright library rather than a second test-runner contract.
Install its exact matching engines with `npm run browser:install`; Linux CI uses
Playwright's `install --with-deps` so missing system libraries fail qualification.
Tests exercise the actual compiled Viewer assets in Chromium, Firefox and WebKit:
lazy detail fetch, literal filtering, language selection, escaped Markdown,
keyboard tabs, retained snapshot links, mobile overflow and stale selection races.
Fixture servers bind only loopback ephemeral ports and are closed together with
browser processes; compiled temporary assets are removed. Diagnostic screenshots
and request/error logs remain in `.reports/browser` and are uploaded by CI.
These deterministic transport fixtures do not replace final browser acceptance of
the exact extracted production web artifact.


## Builder and Goal runtime cutover

Builder and Goal implementations, command entrypoints, fixtures and tests now use
strict TypeScript. `tsconfig.builder.json` covers the complete Builder graph and
the retained synthetic recovery replay. Package commands invoke `.ts` source;
Node type stripping does not replace the mandatory compiler gate. The generated
controlled vocabulary is `.ts`, checked against the same authored YAML and JSON
schema. Stable serialized generator identities remain unchanged even where the
physical command filename changed.

Persisted Goal records keep their original hashes, optional fields and legal null
absence markers. In particular, cleared failure/model metadata and failed review
nodes must remain readable without turning a content or measurement failure into
a generic error. A null review node never certifies a passed check. Historical
unavailable telemetry remains unavailable; it is not converted to zero. Trial
control fingerprints follow the executing TypeScript/emitted format, so changed
runtime bytes require normal protocol-drift review before further dispatch.

Whole Harness qualification remains Linux because evidence sealing requires
its descriptor-anchored filesystem operations. Portable Git planning, report
assembly, CLI and recovery subsets also run on supported developer hosts; ADR
allocation uses Node filesystem enumeration instead of GNU-specific `find`.
The synthetic recovery replay compares a fixed archived pre-recovery runtime to
the current runtime without production tasks or network evidence, writing a new
owned report rather than replacing the retained historical receipt.

## Site and release runtime cutover

The documentation generator, verifier, resource/storage checks, Viewer publisher,
unified release publisher and dependency-free provider importer are TypeScript.
The provider executes erasable TypeScript on pinned Node 24 and imports the sealed
archive; it never installs a compiler or rebuilds the frontend. Browser entrypoints
are compiled before export. PostCSS uses declarative JSON configuration.

Pinned Goal Viewer publication resolves one coherent module pair from its captured
source. New captures declare `.ts` in `scripts/publisher-source.json`; that
validated marker selects exactly one pair and never falls back on a missing pair.
Historical captures without a marker prefer `.mjs` over a coexisting typed port,
preserving their original producer bytes; TS-only/emitted captures remain readable.
It never mixes formats.
Historical source remains executable without rewriting its captured commit. Runtime
overlays include the pinned compiler configuration and dependency lock. Publisher
attempt receipts preserve existing additional audit fields while rejecting identity
conflicts.

Chinese search handles Han text even when a browser segmenter marks it non-wordlike;
other punctuation/non-word segments keep their previous exclusion. Ordered tokens
for the complete existing Node-built index remain unchanged. Browser acceptance
must use a freshly built export with exact source provenance; a worker-only diagnostic
overlay is not release evidence.

`docs:browser` reads an existing export and never rebuilds it. Its new evidence
directory must be outside the export. The receipt records exact file-tree hashes,
source identity, browser versions, all selected routes and screenshots, and checks
that export bytes remain unchanged. All available planned route cases are recorded
even after a failure; missing engines or required input fail rather than skip.
The documentation CI runs it against its complete export before product sealing.

Successive Goal runtime overlays compare both the original Goal baseline and the
actual receiving runtime tree. They retain the original receipt behavior while
restoring unchanged source-format markers and deleting legacy modules introduced
by an intervening runtime; canonical PCR content remains outside the allowlist.
