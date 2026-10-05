---
name: tiangong-pcr
description: Use when guiding LCA data creation with PCR methodology, optionally authoring a TIDAS process, reviewing an existing TIDAS process or lifecycle model for issues and anomalies, selecting a TianGong PCR, or drafting PCR methodology feedback.
---

# TianGong PCR

Use local PCR methodology to guide data work and evidence-based review. Choose the
route from the user's task. General LCA authoring has no mandatory data-package
format; native TIDAS inputs can be reviewed directly. The Agent interprets scope,
applicability and evidence. The CLI supplies source-addressable facts and arithmetic.

## Prepare and pin the PCR task

Use released `@tiangong-lca/cli` 0.1.25 or later providing `pcr snapshot ensure`;
0.1.25 is the qualified minimum for this preparation workflow. Use the qualified
Node 24.19.0 runtime; Tiangong CLI supports `>=24.19.0 <25`. Select the installed
`@tiangong-lca/pcr` reader independently. Content's
declared compatibility, including the current 0.4.1 minimum reader, determines
whether that reader can consume it; matching product versions are not required.
Confirm the required versions are published before installing them; source or
release-preparation metadata does not establish registry availability.
Provision these tools before going offline. This Skill ships with the PCR reader;
install its complete directory following the host's Skill setup. npm installation
alone does not activate it, and it is not an automatic runtime hook. No account
login is required for public PCR snapshots or local consumption.

At the preparation boundary of a new PCR-guided task, use its dedicated absolute
task directory. Reuse the supplied task directory when continuing work; never
silently create a new directory merely to refresh an existing task. If there is
no task directory yet, create one dedicated to this task and retain its path with
the work artifacts. Do not use a shared project root as every task's identity.

```sh
tiangong-lca pcr snapshot ensure --task-dir <absolute-task-dir> --tool-root <absolute-installed-PCR-package> --json
tiangong-lca pcr snapshot status --task-dir <absolute-task-dir> --json
tiangong-lca pcr exec --task-dir <absolute-task-dir> -- guidance --pcr <id> --topic overview --format json
```

For a new connected task, ensure checks the latest compatible stable published
snapshot, verifies it and records immutable data/tool pins. Continue only when
`task_usable` is true. A prior task lock is reused without checking latest;
repeated ensure may finish verification of the same partial preparation but
cannot upgrade that task. Preserve the lock files with the task. Tool and
content versions may differ when their explicit compatibility contract permits it.

Honor an explicit version, selected local snapshot or offline request rather than
using default online discovery. Use ensure's `--version`, or `--library` with an
independently trusted `--library-sha256`; add `--offline` for verified cached
selection without network. Read its help for supported legacy/local profiles.
Offline selection is not proof of publisher latest. Missing compatibility,
corrupted cache/tool bytes or failed native verification must be resolved before
consumption; do not bypass the task lock by switching to an unpinned command.

In the task-managed route, invoke the PCR arguments in the sections below through
`tiangong-lca pcr exec --task-dir <absolute-task-dir> -- ...`. Follow-up/page
commands returned by the standalone reader may include `--library` or
`--library-sha256`; retain their query/page arguments but remove source selectors
and route them through pcr exec, which injects the verified task pin. Do not
forward `PCR_LIBRARY` or `--root` into this route. Native command help works after
`--`. Inputs and output paths are relative to the task directory; use absolute
paths when the work artifacts live elsewhere.

An explicitly requested standalone or repository-maintainer workflow remains
available: use `tiangong-pcr` with explicit snapshot/hash selectors, or the
repository command with `--root`. Preserve the user's source choice and its
identity; do not call it an automatically updated published-snapshot task.
`inspect` and `calculate` use local inputs; the task wrapper still verifies its
retained context. Neither CLI calls an LLM or approves methodology. Fully offline
semantic work also requires the host Agent/model to be available offline.

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
through the same task wrapper (or the same explicit standalone library selector). The fresh output file holds the complete result;
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
