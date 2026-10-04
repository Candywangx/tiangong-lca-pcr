---
name: tiangong-pcr
description: Use when guiding LCA data creation with PCR methodology, optionally authoring a TIDAS process, reviewing an existing TIDAS process or lifecycle model for issues and anomalies, selecting a TianGong PCR, or drafting PCR methodology feedback.
---

# TianGong PCR

Use local PCR methodology to guide data work and evidence-based review. Choose the
route from the user's task. General LCA authoring has no mandatory data-package
format; native TIDAS inputs can be reviewed directly. The Agent interprets scope,
applicability and evidence. The CLI supplies source-addressable facts and arithmetic.

## Prepare the local tools

`@tiangong-lca/pcr` bundles this Skill; copy its complete directory to the host's
configured skills directory. npm installation does not activate it. Provision
Node 24.19+ and the tool before going offline; do not fetch tools with npx.
The separate `@tiangong-lca/pcr-library` supplies English-only methodology.

Set `PCR_LIBRARY` to the absolute `library.sqlite` path, or use `--library` on PCR
commands. Run `tiangong-pcr library verify --format json`, retaining the tool/content
versions and snapshot hash. Keep the same immutable snapshot throughout the task;
`--library-sha256 sha256:<hex>` adds strict byte pinning. `inspect` and `calculate`
use local inputs without a library selector. Repository maintainers may use
`npm --silent run tiangong-pcr -- ... --root <repo>`.

The CLI never calls a model or retrieves missing datasets. Fully offline semantic
work requires the host Agent/model to be available offline too.

## Select applicable methodology

Resolve a supplied classification with `resolve --classification cpc:3.0:01112
--format json`, or a supplied identity with `resolve --pcr <id> --format json`.
These selectors are exclusive. Without a code, browse material `tree` and paged
`list --path-prefix <domain/subdomain> --format json`. Follow returned page commands.
Select from product meaning, declared gate, technology and reference basis.

Check resolution and readiness. Known-unmapped means no accepted mapping, not a
usable PCR. Candidate suggestions are evidence rather than accepted mappings.
For an unmapped code, independently browse material methodology before declaring a
missing PCR. Explain any proposed applicability instead of inventing a mapping.
A retired id returns a terminal locator and next command; inspect that target only
if relevant. Content commands cannot use the retired id. Scaffolds, unavailable
projections and unusable methodology cannot supply guidance. Candidate methodology
remains review-required even when `usable_for_guidance` is true.

Start with `guidance --pcr <id> --topic overview --format json` and the reference-flow
and boundary topics. Load other topics when a question needs them. Preserve rule
text, applicability and source references. Guidance values are complete, with normative source units and ancestor context; read them together before deciding applicability. Use exact pointers with
`guidance --pcr <id> --pointer <source.pointer> --format json`; use `--output <new-file>`
for large results. Full `guidance` remains available for a saved complete view. Preserve stored projection hashes separately from derived legacy context provenance; fallback IDs and pointers are snapshot-local.

For several known PCRs, save `{ "schema_version": 1, "pcr_ids": ["<id>"] }`
and prefer `guidance batch --input <request.json> --output <new-result.json> --format json`
with the same library selector. The fresh output file holds the complete result;
stdout is its receipt. Read the needed complete units and ancestor context from
that file. At most 100 IDs share one verified session; order is preserved and a
failed item rejects the whole batch.

## Choose the task route

| Task | Read when needed | Produce |
| --- | --- | --- |
| Create or improve LCA data | [LCA authoring](references/lca-authoring.md) | Declared scope/reference basis, supported inventory, sources and explicit data gaps in a useful format |
| Create a TIDAS process | [TIDAS authoring](references/tidas-authoring.md) after LCA authoring | Native process draft plus field mapping, evidence and available TIDAS validation results |
| Review a TIDAS process/model | [TIDAS review](references/reviewing-tidas.md) | Findings with original field locations, PCR references, reasoning, uncertainty and review limits |

## Judgment that applies to every route

Establish what the input or proposed dataset represents before applying rules.
A single operation does not inherit every whole-lifecycle requirement. For models,
inspect process instances, connections and available referenced processes; repeated
instances may intentionally reuse one dataset. Missing local evidence does not
prove a process is absent from the physical system.

Separate supplied observations, calculated values, assumptions and unknowns. A
flow name does not establish its unit; a plausible value does not establish its
evidence. Preserve zero versus missing data, measured versus provisional values,
and distinctions such as dry/as-received mass or nutrient/product mass. Use
`calculate` only with explicit bases and justified conversion factors.

Investigate alternative explanations for an anomaly before calling it a confirmed
issue. Report confirmed issues, suspected anomalies and evidence gaps separately
from severity. Candidate PCR guidance and uncertain applicability limit the claim.
Record unreviewed topics and why they remain open. Findings and suggestions do not
authorize editing source datasets or publishing them.

`validate-model` checks text qualifier presence. `validate-dataset` checks optional
foreground-package protocol ID presence. A pass covers only performed checks;
neither is a TIDAS or semantic review. `review check` checks a report envelope and
references; even a valid report does not establish correct methodology.

Use [CLI usage](references/cli-usage.md) for command details and
[feedback](references/feedback-loop.md) when methodology is missing or ambiguous.
PCR-derived UUIDs remain version-free identity suggestions; an existing TIDAS
reference's explicit dataset version must be preserved and checked, not stripped.
Canonical methodology stays in `pcr.en-US.md` and its generated projection.
