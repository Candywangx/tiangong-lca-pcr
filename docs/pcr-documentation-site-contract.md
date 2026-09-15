---
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

`packages/pcr-core/` owns consistent canonical reads and verified artifacts.
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
source files and translation states. Their absence never blocks the required
pair. An absent or stale optional translation is unavailable, never an English
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

Build verification compares source inventory with exported HTML and original
downloads, including a JavaScript-disabled reading check. It validates routes,
canonical/hreflang, real 404s, source modification times, sitemap, headers,
keyboard access, light/dark rendering and representative viewport sizes.

Measure the real full corpus and largest records. Enforce provider limits on
individual files, total file count and build resources, and partition search and
source-map artifacts. Production uses the existing `pcr.tiangong.earth` project
and `main`; preview auto deployment remains disabled. Failed generation or builds
leave the previous verified deployment intact.
