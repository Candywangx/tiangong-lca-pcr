---
title: PCR Dependency Maintenance
docType: guide
scope: repo
status: active
authoritative: false
owner: tiangong-lca-pcr
language: en
whenToUse:
  - when reviewing dependency proposals or updater health
  - when changing monitoring scope or traffic
whenToUpdate:
  - when dependency graph ownership, batching or validation changes
checkPaths:
  - .github/dependabot.yml
  - docs/dependency-maintenance.md
lastReviewedAt: 2026-10-16
lastReviewedCommit: 176c63d6b115f3116a2ceda7172833ef0f83f7df
lastReviewedNote: "PCR #117: bounded npm/Actions discovery reuses complete qualification and preserves readers, snapshots, toolchain and product/publication authority."
---

# Dependency maintenance

`.github/dependabot.yml` monitors the root npm lock, the independent
`packages/pcr-docs` npm lock and GitHub Actions. The root updater also names
`packages/pcr-core` because its manifest independently declares the same exact
Ajv version while runtime/offline packaging uses the root's locked graph. It has
no lock or workspace declaration to discover through the root. Keep one updater
per existing locked graph; do not create a core lock or monitor dependency-free
release-version manifests as additional package graphs.

The single-name Ajv group coordinates the root/core declarations. Its proposals
remain Ajv-only, including majors, so a schema-engine migration stays separately
visible. Related builder runtime, qualification tools, site runtime and site tools
have patch/minor groups; other majors remain individual proposals. Actions share
one bounded group. Monday scans are staggered at 07:00, 07:20 and 07:40 in
Asia/Shanghai, with a seven-day version cooldown and open version-PR limits of
one for root/core, one for the site and one for Actions. This bounds the two
independent npm graphs to two package proposals while each requires full CI. Security triage and
security settings are separate from these version-update traffic budgets.

## Qualification and runtime pins

Reuse the existing `validate.yml` pipeline and stable aggregate gate. Dependencies
and monitoring configuration are shared/runtime inputs and select complete
qualification: all fresh source-bound shards, independent full-corpus proof,
authenticated coverage, native/offline readers, real documentation build,
browser acceptance and sealed artifacts. A successful data-only lane or old
receipt does not qualify a dependency proposal. No extra job, local development
step, user confirmation or weaker source-selection rule is introduced.

Keep Node 24.19.0, npm 12.2.0, all manifests/locks, exact reader and snapshot
identities, bundled assets and release pins. Current upstream Dependabot source
explicitly supports npm 12 and its updater image pins npm 12.2.0; the GitHub
ecosystem table still lists npm 7–11. Those source facts support configuring
discovery, not a claim that the hosted service has qualified PCR's exact runtime
or regenerated both locks. Inspect the first hosted scans and actual frozen
candidate installs. A runtime-catalog incompatibility needs its own owning
record and qualified correction; do not silently change `.nvmrc` or product pins
just to satisfy the updater.

Full local `npm run validate` requires Linux for the Goal Harness's
descriptor-anchored `/proc/self/fd` operations. macOS may exercise the supported
runtime/type/lint, engineering and portable offline checks; it cannot substitute
those results for full Linux corpus/Harness or hosted browser/native proof.
Follow [the engineering contract](typescript-engineering.md#validation-commands).
Preserve existing semantic Docpact rules for manifests, locks, source and assets.

## Acceptance and publication

Automatic merge stays off. Before associating a bot proposal, verify native
merge state and any independent live merge service's policy, including queued
work. Source protection alone is not deployment evidence. Leave proposals
unadopted while that boundary is unverified. Accepted groups use one owning
Issue and the workspace controller's preview/intake, review, merge, finish and
exact source-integration procedure.

Routine delivery targets `main`. The derived `release/production` pointer is a
deployment surface, not another updater target or development trunk. No updater
job, green PR or source integration grants PCR methodology approval, immutable
publication, npm publishing, product tagging or deployment authority.

During the existing weekly queue review, inspect the hosted update job and exact
candidate CI; a missing PR is not proof of scan success. Record failed scans,
lock/toolchain failures and accepted work in the owning Issue. No new reminder
or unrelated feature-development gate is required.

Capability evidence: [multi-directory grouping](https://docs.github.com/en/code-security/tutorials/secure-your-dependencies/optimizing-pr-creation-version-updates#example-2-grouped-updates-with-excluded-dependencies),
[npm 12 support](https://github.com/dependabot/dependabot-core/blob/780c17e16ac2cd5b8e04a9e27fc2da4de6043290/npm_and_yarn/lib/dependabot/npm_and_yarn/npm_package_manager.rb#L27),
[updater toolchain](https://github.com/dependabot/dependabot-core/blob/780c17e16ac2cd5b8e04a9e27fc2da4de6043290/npm_and_yarn/Dockerfile#L19)
and [published ecosystem table](https://docs.github.com/en/code-security/reference/supply-chain-security/supported-ecosystems-and-repositories).
