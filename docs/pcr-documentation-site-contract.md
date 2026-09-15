---
lastReviewedAt: 2026-09-15
lastReviewedNote: "Reviewed for PCR #17: build-storage adapter addresses observed EdgeOne shared-memory ENOSPC while retaining canonical source, language, fidelity, SEO and resource gates. CI exercises relocated full-corpus builds; local and production results remain tracked in the Issue. No PCR authoring, lifecycle, release or consumption API behavior changes."
lastReviewedCommit: 9fe6486d985d1a093eb5e50fea307d221bd12e70
title: Generated PCR Documentation Site Contract
docType: contract
scope: repo
status: draft
authoritative: true
owner: tiangong-lca-pcr
language: en
whenToUse:
  - when implementing the generated public PCR documentation site
  - when changing document export, language inclusion, source coverage or SEO
whenToUpdate:
  - when source-to-page, download, language or publication boundaries change
checkPaths:
  - packages/pcr-docs/**
  - packages/pcr-core/src/languages.mjs
  - packages/pcr-core/src/index.mjs
  - edgeone.json
related:
  - architecture.md
  - pcr-library-release-policy.md
---

# Generated PCR Documentation Site

This contract implements the accepted Plan v2 in PCR #12. The site is a read-only,
reproducible view of a pinned repository snapshot. Website production deployment
does not promote candidate PCR methodology or certify a translation.

## Ownership and data flow

`packages/pcr-core/` owns consistent current PCR/module reads and verified artifacts.
Historical bundles reuse the Builder release-chain verifier through
`builder/lib/pcr-document-history.mjs`, returning complete parsed models and
byte-exact artifacts without exposing internal revision bodies.
`packages/pcr-docs/scripts/` owns source inventory, Markdown rendering, metadata,
search and download generation. Fumadocs owns the public document layout,
navigation controls, typography and interaction primitives. The site uses the
TianGong documentation design system and Next.js static export on EdgeOne.

Canonical Markdown is parsed as ordinary CommonMark with GFM support. Content is
pre-rendered as semantic HTML; it is never evaluated as user-authored JSX or ESM.
The Fumadocs content source contains small page metadata and artifact references,
not one client-side object holding the entire library.

The generator selects methodology records through the core catalog. It does not
glob arbitrary `pcr.*.md` files: fixtures, authoring journals and internal plans
are not publication sources. Classification coverage remains a separate read
model, and retired IDs remain terminal coverage locators.

## Required and optional languages

English `en-US` is canonical and Chinese `zh-CN` is required. Both source files
must be complete for a PCR selected for publication by the site. Optional BCP 47
languages require explicit declarations, safe canonical language codes, titles,
source files and translation states. An undeclared optional language never blocks the required
pair; a declared missing file is an error. An absent or stale optional translation is unavailable, never an English
fallback masquerading as translated content.

Manifest translation state is authoritative. Candidate translations awaiting
review retain a visible warning and an explicit indexing decision. File presence
does not prove alignment or review. Formal PCR publication keeps its required
Chinese review gate and validates every included optional translation.

Existing v1 bilingual release bytes and fixed hash fields remain verifiable.
V2 multilingual manifests and releases use `markdown_sha256`, keyed by exactly
the declared source languages, plus the structured hash; release records also
bind the manifest snapshot. Generic release-history entries continue to bind the
exact release metadata bytes. Old snapshots are never rewritten by migration.

## Losslessness and generated artifacts

The core document bundle contains the complete manifest, verified structured
projection, declared languages and original artifact buffers. Raw downloads copy
those buffers byte for byte. Exact-byte download hashes are distinct from the
existing normalized-text projection fingerprint.

An independently collected source inventory accounts for every rendered block,
rule identifier, table value, link and code block. Rendering may add navigation,
context and disclosure controls, but must preserve original content and order.
Every source block is mapped to a page/anchor or explicit source appendix.
Unsupported source constructs, missing required files and stale projections
cannot become empty successful output.

Generated metadata lives in `.generated/site.json`; page HTML and complete
structured data are separate artifacts read only at build time. Public downloads
and search shards live under `public/generated/`. These directories are derived
and excluded from manual authoring and Git. Generation stages a complete artifact
set and never overwrites canonical PCR sources.

## Routes and indexing

The complete default Chinese home is `/`. Localized homes and document routes use
the registry's URL aliases, initially `/zh/`, `/en/` and `/{locale}/docs/**`.
PCR document slugs retain semantic domain/subdomain/record identity under
`docs/pcr/`. Exceptionally long documents may have stable subpages with a complete
chapter inventory. All normative content remains in the HTML of those pages.

Each real document has its own canonical URL. Hreflang lists only verified,
existing counterparts at the same version. Current complete public candidates
may be indexed with their status visible. Scaffolds, unavailable translations,
internal revisions, search/filter permutations and raw downloads are not normal
indexing targets. Raw download responses carry attachment and noindex headers.
Distinct historical versions are not blindly canonicalized to different text.

## Validation and production

Automated build verification compares source inventory with exported HTML without
executing JavaScript, including original downloads, block order, tables, list
hierarchy, code and links. It checks document and home canonicals/hreflang, complete
404 HTML, source modification dates, sitemap and the static hosting configuration.
Browser acceptance separately checks keyboard access, themes, responsive layouts,
search and disclosures. Live production acceptance verifies actual HTTP status,
headers, HTTPS and redirects on EdgeOne; static configuration checks cannot prove
that the provider applied its rules.

Measure the real full corpus and largest records. Enforce provider limits on
individual files, total file count and build resources, and partition search and
source-map artifacts. Production uses the existing `pcr.tiangong.earth` project
and `main`; preview auto deployment remains disabled. Failed generation or builds
leave the previous verified deployment intact.

### Measured artifact and runtime budgets

The first real-corpus export showed that a full-library sidebar on every page
produced almost 5 GB. The final shell receives the full page route and serializes
only directory links and the open PCR's chapters. The measured compact export is
about 1.44 GB across 12,758 files with semantic chapters and server-rendered structured rule views.
Next.js retains both initial HTML and static navigation payloads; these are part
of its supported export and are not deleted after building.

The deployment gate is 1.5 GB total, fewer than 20,000 files, and less than 25 MB
per file, leaving room for a previous production deployment within the provider's
5 GB shared storage allowance. Recheck actual remaining storage before deployment.
The build has an 18-minute task budget within the 20-minute provider limit and
uses four workers with a 4 GB Node heap ceiling per build process. Measure total
resident memory against the 6 GB provider limit on CI/hosting; a heap ceiling is
not proof of total process memory.

### Build workspace storage

The provider's temporary build filesystem is separate from its deployed-asset
allowance. The first EdgeOne production build at source `9fe6486d` generated every
page but failed with `ENOSPC` while Next copied `.next` pages into `out` under
`/dev/shm/repo`. Final artifact size alone does not bound intermediate storage.

When a provider checkout uses that constrained shared-memory filesystem, the build
adapter must use a unique disk-backed scratch workspace, preserve the exact Git
source identity and pinned dependencies, and run the same generation, Next export
and verification stages there. Check storage capacity before work and before
artifact handoff. An unavailable or unsuitable scratch filesystem is a build
failure with diagnostics, not permission to trim source text or remove supported
Next navigation payloads. Publish output only after all existing fidelity, SEO,
size, memory and time checks pass, and preserve a previous output on failure.
Temporary cleanup is confined to directories created by the current build.

Relocation hands back only `out/` and writes small build metrics in the original
checkout. Its original `.generated/` is not the relocated generation metadata;
use the complete build command rather than standalone `verify` there. Set `TMPDIR`
to choose a disk-backed scratch parent. Interrupted `out.stage-*` and `out.prev-*`
directories are excluded from the source copy, but are not automatically removed
by later runs; inspect ownership before cleaning them when destination space is low.

Search is loaded only on reader intent, in a dedicated Worker. Per-language raw
indexes must stay under 20 MB and the gzip transfer for each language under 4 MB; the
current measured indexes are about 14.5 MB raw / 2.5 MB gzip per language. The
Worker and tokenization module are ordinary browser modules copied with the pinned
FlexSearch browser bundle, preserving its license header. Static exports must
not ship an uncompiled TypeScript Worker. No search backend is needed at this size.

Large documents split preferentially before semantic H2/H3 boundaries; bounded
continuations retain their chapter context. Chapter URLs use source heading
identities, with content-derived continuation suffixes. Tables remain whole, and
ragged GFM tables preserve source cells beyond the header width by adding empty
header cells. Source spelling, including a literal `undefined` cell, is retained.

On the initial corpus, five Chinese records remain pending translation review and
are readable with noindex. Two conflicting frontmatter states were aligned to the
existing authoritative manifest (cotton sewing thread and television cameras),
without changing body text or upgrading review status. Future state conflicts fail
generation. Optional bare `en` and `zh` use distinct URL aliases so they cannot
collide with the required `en-US`/`zh-CN` routes.

The generator accepts explicit `--source-root` / `--output-root` pairs for isolated
verification fixtures. A custom source requires a separate output root; source and
output paths are canonicalized, and output inside canonical data or Git directories
is rejected. End-to-end generator tests cover a three-language immutable release,
private open revisions, exact downloads, deterministic repeated output and failed
required-language generation preserving the previous verified artifact set.

Common structured rules and process/flow counts are rendered as semantic tables in
native disclosures in initial HTML. Their identifiers and text are verified against
the complete structured projection; the on-demand field tree remains available for
all remaining metadata. Canonical English rule text is labelled as such on Chinese
pages instead of being passed off as translated methodology.

Historical navigation uses each record's exact emitted chapter URLs, never a shared
PCR-ID-only page set. Current and historical sidebars use distinct cache identities,
and every historical record links the complete immutable version list. Home-page
language alternatives point to canonical homes; the default Chinese alternative
and x-default both use `/`, while `/zh/` redirects permanently to it.

Production resource checks fail when memory measurement is unavailable or empty.
POSIX builds inspect process-tree RSS; Windows uses its native CIM working-set
statistics. No unmeasured zero is accepted as evidence that a production build fits
within the memory budget. Browser chrome is complete in English and Chinese;
optional reading-language pages currently use English controls unless additional
UI translations are registered. Their actual document bodies are never substituted.

Per-file modification dates require complete Git ancestry. A shallow hosting clone
fetches origin history without advancing its pinned HEAD before collecting dates;
if ancestry cannot be obtained, generation fails. Local full clones and the
full-history CI checkout require no additional fetch.

All declared original language files remain downloadable, including optional files
that are unavailable as current translated HTML. Their manifest state and original
bytes are preserved, and raw responses remain noindex attachments. The Fumadocs
content registry follows all emitted languages, including languages found only in
historical versions; it is separate from the English/Chinese UI translation set.
An optional translation removed in a new release leaves the current workspace in
the declared file state while its immutable older release stays downloadable.

For an authorized Search Console URL-prefix property, production may set the public
`PCR_GOOGLE_SITE_VERIFICATION` build variable. When configured, the Metadata API
emits the corresponding verification tag and the output gate checks it. An unset
variable emits no ownership marker. Changing this binding and verifying ownership
is a separate authorized operation from deploying the documentation code.

A language retained only by historical releases keeps its immutable document URLs,
search entries and version navigation. Its empty current catalog and locale home
are noindex, and the home is omitted from sitemap and home hreflang. Home examples
are selected only from current records available in the requested language.
