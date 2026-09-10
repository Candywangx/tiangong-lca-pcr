# Shared materials for PCR production

Use this loop before every external evidence question in create/update production. The tool uses Node and the
existing Git installation only. It neither searches the internet nor downloads, parses, verifies scientific
claims or adopts evidence automatically. Existing readers/search tools handle gaps.

## Shared directory

Default: `<git-common-dir>/pcr-materials/`; `git rev-parse --path-format=absolute --git-common-dir` is the same in all
linked worktrees. Originals, extracted UTF-8 text and immutable index records stay outside tracked PCR content.
Set an absolute `TIANGONG_PCR_MATERIALS_DIR` for manual tasks, or `tools.materials_root` in Goal YAML (relative values
resolve against `project_root`). `--root DIR` overrides the environment. Use one local filesystem with atomic hard
links; network filesystems/object storage and multi-machine synchronization are outside this minimal version.

```yaml
tools:
  materials_root: /absolute/shared/pcr-materials
```

Goal dispatch resolves and creates this directory, queries it by assigned product, saves `materials-query.json`
beside the existing author prompt in Goal state, and supplies bounded candidates and copyable commands to the
author. Both app-server thread/start and turn/start receive it in `runtimeWorkspaceRoots`; sandbox and approval
policy are unchanged. The author may register production material there, but may still commit only its PCR's four
files. Read-only tasks cannot register. Manual authors use the same CLI/config. Do not relocate a store in place:
records bind absolute blob paths; register from retained source files into a new store when moving it.

## Query, read, supplement, register

1. Specify the actual question, not just a publication title. Query before external search, and query a known DOI
   or stable URL before acquisition. Default 5 candidates, maximum 20; use `next_offset` for another bounded page.

   ```bash
   npm run pcr:materials -- query --product 'wheat seed' --process cultivation --need 'nitrogen measurement basis'
   npm run pcr:materials -- query --doi '10.xxxx/example' --limit 5
   ```

2. Read the selected fragment with intended-use conditions; every read rechecks the original, extraction and fragment
   hashes. A request JSON can include `product`, `process`, `need`, `route`, `state`, `basis`, `unit`,
   `required_version`, and `extractor: {name, version, options}`. Labels should describe the physical subject, with
   synonyms in source tags; literal equality is only a conservative mechanical check, not semantic proof.

   ```bash
   npm run pcr:materials -- read --id <record-id> --fragment <fragment-id> --request /tmp/material-use.json
   npm run pcr:materials -- read --id <record-id> --start-line 10 --end-line 30
   ```

   No fragment/range means metadata and available fragment locators only. A read returns at most 100 lines/8192
   bytes. Preserve page/table/paragraph/cell coordinates and necessary headers, footnotes and limitations.
   Available originals have `reuse_original: true`; compatible extracted text also has `reuse_extraction: true`.
   Reuse those files instead of repeating acquisition/extraction. `numeric_reuse: agent_confirmation_required`
   only means a verified fact/case fragment has matching explicit dimensions; `covered` remains false. The author
   must decide whether it actually supports the current rule, including the evidence need and temporal relevance.

3. Supplement only gaps with existing tools. `metadata_only` needs acquisition; `original_available` needs relevant
   extraction; `extracted_unverified` needs original comparison; `fragment_verified` describes only the requested
   fragment and recorded verification conditions. Missing/corrupt originals block dependent reuse. A changed
   extractor requirement invalidates extraction but leaves a matching original reusable. A required source-version
   mismatch requires the appropriate version. Conflicts, unreadable scans, missing full text or key conditions
   remain explicit gaps; do not pretend that a snippet or abstract covers them. There is no universal age/TTL rule.

4. Register new originals immediately; then register richer extraction/fragment records after actual work. New
   records do not replace earlier versions. `register` computes hashes and copies files into the shared store.
   Use `created` to distinguish exact repeat registration; do not infer whether an external search happened.

   ```bash
   npm run pcr:materials -- register --input /tmp/material-registration.json
   ```

   Minimal metadata registration (including PCR Data Sources seeds) contains only `source` and `tags`:

   ```json
   {
     "source": {"title": "Actual publication title", "url": "https://publisher.example/document", "version": "unknown"},
     "tags": ["product", "process", "specific evidence need"]
   }
   ```

   Supply an actual DOI and/or stable URL; same titles are never merged. DOI normalization takes precedence for
   source identity. URL fragments are removed, semantic query parameters retained. Publisher mirrors without a DOI
   are separate identities. Source identity is distinct from the immutable registration id returned by the tool;
   different editions, original hashes, tools/options or verification records coexist under one identity.

   To register original-only material add `original: {path, media_type, acquired_at}` and an explicit version
   (publication edition, or a dated snapshot when that is all that is known). Then use the returned original SHA-256
   in a later extraction registration:

   ```json
   {
     "source": {"title": "Actual title", "url": "https://publisher.example/document", "version": "actual edition"},
     "tags": ["product", "cultivation", "nitrogen measurement basis"],
     "original": {"path": "/absolute/original.pdf", "media_type": "application/pdf", "acquired_at": "ACTUAL ISO TIMESTAMP"},
     "extraction": {
       "path": "/absolute/extract.txt", "source_sha256": "HASH RETURNED BY ORIGINAL REGISTRATION",
       "tool": {"name": "pdftotext", "version": "ACTUAL VERSION", "options": "actual page range and layout flags"},
       "extracted_at": "ACTUAL ISO TIMESTAMP"
     },
     "fragments": [{
       "id": "measurement-basis", "start_line": 10, "end_line": 20,
       "locator": {"pdf_page": 12, "printed_page": "11.8", "table": "actual table/paragraph"},
       "needs": ["nitrogen measurement basis"], "kind": "original_fact", "values": [],
       "applicability": {
         "product": ["actual covered product"], "process": ["cultivation"], "route": ["actual route"],
         "state": ["actual product state"], "basis": ["actual basis"], "unit": ["actual unit"],
         "limitations": "Actual scope, footnotes and exclusions; identify missing conditions."
       },
       "verification": {"by": "actual verifier", "at": "ACTUAL ISO TIMESTAMP", "method": "actual original comparison"}
     }]
   }
   ```

   This is a shape example, not evidence; replace placeholders and never invent dates/coordinates. Omit
   `verification` for unverified extraction. At most 16 fragments/record; register more in separate immutable
   records. `values` entries contain strings `{raw, unit, basis}`. Keep `original_fact`, `case_observation`,
   `conversion`, `author_inference` distinct; conversion/inference also require `derivation` describing inputs,
   formula and assumptions. Unknown applicability dimensions use empty arrays and block direct numeric reuse.
   A verified fragment is bound to exact original/extraction hashes and tool settings, not the whole publication.

## Quality and failure handling

The author must still verify original support, independence and contrary evidence, product state, route, boundary,
units, normalization, geographic/temporal applicability, limitations and footnotes. A single factory observation
does not establish an industry range; another PCR's conclusion or review approval cannot substitute for evidence.
Do not turn multiple fragments or registrations of the same publication into independent sources. If coverage is
insufficient, retain the existing unresolved evidence need and foreground collection requirement. No review stage,
receipt or publication gate is added.

Only complete immutable records are searchable. Content is SHA-256 addressed; writers fsync staged bytes, install
without replacement through atomic hard links, and publish the record last. Exact concurrent duplicate records
converge; different versions cannot overwrite one another. Interrupted hidden `.tmp` files and orphan blobs are
not candidates and may be cleaned manually when no writers are active. No automatic garbage collection is included.
Corrupt/missing records/files are reported, never silently trusted. Restore known bytes from a trusted retained
copy or acquire only the missing version; if an immutable hash path is corrupt, investigate/quarantine that file
before registration, rather than overwriting it automatically. Invalid extraction needs re-extraction only when
the original remains valid. Input original files are limited to 128 MiB, UTF-8 extraction to 32 MiB, record to 32 KiB.

This is a small keyword index over metadata, not a semantic search platform. Bounded output does not prevent the
tool from scanning metadata or hashing selected complete files locally. Users must avoid storing secrets,
credential-bearing URLs or material they cannot share with the participating authors. Nothing in the store should
be added to Git. The CLI cannot prove publisher authenticity, extraction fidelity, permission to reuse, source
currency or semantic coverage. Simultaneous authors can still independently fetch a not-yet-registered source;
there is no download lease or external request interception.

The minimal mechanisms reference the installed Auto Research CLI's `dist/research/workspace/broker.js`
(request-specific caching), `evidence-ledger.js` (source identity) and `content-evidence.js` (bounded locator reads
and excerpt hashes). These were inspected as code; training/deployment documentation is not runtime evidence.
This implementation adds no dependency on Auto Research and does not import its broker, ledger or review runtime.
