---
name: tiangong-pcr
description: Use when selecting a TianGong PCR, reading PCR data-production guidance, validating a foreground data package against PCR rules, or drafting PCR feedback for maintainers.
---

# TianGong PCR

Use the checked-in PCR library through `tiangong-pcr`. Treat usable CLI guidance as the consumption view of PCR rules for data production; catalog presence or a classification mapping alone does not establish methodology readiness.

Use command-specific help when unsure about arguments or output shape:

```bash
npm --silent run tiangong-pcr -- --help
npm --silent run tiangong-pcr -- list --help
npm --silent run tiangong-pcr -- coverage list --help
npm --silent run tiangong-pcr -- guidance --help
```

## Workflow

1. If the user provides an external classification code, resolve it deterministically:

   ```bash
   npm --silent run tiangong-pcr -- resolve --classification cpc:3.0:01111 --format json
   ```

   Inspect `resolution_status` and `coverage_status` first. A known unmapped leaf is a successful result with
   `mapping: null` and `pcr: null`. A retained scaffold can appear as `legacy_scaffold_compatibility`; do not run
   guidance for it. Continue only for `resolution_status: mapped` when `pcr.readiness.usable_for_guidance` is true.

2. If classification completeness matters, inspect the coverage read model explicitly:

   ```bash
   npm --silent run tiangong-pcr -- coverage summary --classification cpc:3.0 --format json
   npm --silent run tiangong-pcr -- coverage list --classification cpc:3.0 --page 1 --page-size 10 --format json
   ```

   Coverage is separate from the methodology catalog. Follow `next_command` or `previous_command` for additional
   pages. Candidate suggestions and manual-review targets are evidence only; never select them automatically.

3. If no classification code is available, inspect the material catalog explicitly:

   ```bash
   npm --silent run tiangong-pcr -- tree --format markdown
   npm --silent run tiangong-pcr -- list --scope material --path-prefix <domain/subdomain> --format json
   npm --silent run tiangong-pcr -- list --scope material --page 2 --page-size 10
   ```

   `tree` and `list` default to material records. Use explicit `--scope material|legacy|all` only when another
   compatibility scope is required. `tree` defaults to the bounded depth-2 category view. Use
   `list --path-prefix` to drill down instead of loading every leaf. `list` defaults to 10 records per page; follow
   `next_command` or `previous_command` and preserve the reported filters. Choose a PCR from product meaning,
   declared gate, reference flow, process boundary, and `readiness`.

4. Read Agent-facing data-production guidance:

   ```bash
   npm --silent run tiangong-pcr -- guidance --pcr <pcr-id> --format json
   ```

5. Build the foreground data package from `reference_flow`, `boundary_abstraction`, `measurement_rules`, `process_map`, `process_inventory`, `production_guidance`, and `published_dataset_profile`.

6. Validate the foreground data package:

   ```bash
   npm --silent run tiangong-pcr -- validate-dataset --pcr <pcr-id> --input <dataset-file> --format json
   ```

   Validation defaults to an error exit gate, and inconclusive reports also exit non-zero. Read `validation_status`, `completeness`, and `check_coverage`; a pass covers only `checks_performed`, not rules listed in `checks_skipped`. Use `--fail-on never` only for an explicit report-only workflow.

7. Draft feedback when the PCR is missing, ambiguous, outdated, mistranslated, or has weak evidence:

   ```bash
   npm --silent run tiangong-pcr -- feedback draft --pcr <pcr-id> --type range_evidence_update --summary "<finding>"
   ```

## Boundaries

- `pcr.en-US.md` remains the canonical authored PCR source.
- `structured.yaml` is generated and consumed by `tiangong-pcr guidance`.
- Empty scaffolds are excluded from default material browsing. They remain available only through explicit
  legacy/all compatibility scope or legacy resolution and are rejected by guidance and validation.
- PCR guidance is foreground-data-package first; process and lifecyclemodel outputs are projections of that package.
- Tiangong UUIDs from PCR guidance must be copied without dataset versions.
- Feedback issues are candidate evidence for maintainers before review and merge.
- Use `missing_pcr` feedback only after checking material `tree`/`list`, classification coverage, and exact resolve.
