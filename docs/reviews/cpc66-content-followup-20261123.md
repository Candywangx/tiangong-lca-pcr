# CPC 66 content follow-up, 2026-11-23

This records the user-authorized repair of three findings against delivery commit
`e9c87d2bcc357e3862098489e5c97b78180e7fe1` on
`codex/cpc66-candy-delivery`, based on Candywangx main. The review covers CPC
66011, 66012, 66021, 66022, 66023, 66024, 66031 and 66032. It does not amend the
original accepted classification decisions or constitute scientific approval.

## Findings and dispositions

| Finding | Assessment | Repair and affected rules |
| --- | --- | --- |
| R1: the bus stock equation omitted formation and internal receipts | Accounting defect when applied to generated waste or captured material; it was incorrectly stated for all stocks | 66011 `exclusive_stock` now includes evidenced `generated` and `internal_receipts`, mutually exclusive fates, paired internal dispatches and cancellation at the combined boundary. Same-gate recirculation is not a receipt/use, and generated waste is not purchased again. `cp_life` collects opening/closing stock, generated collected lubricant and internal-transfer records. |
| R2: blanket prohibition of whole-asset attribution | Overly restrictive wording, rather than rejection of the existing all-user lifetime allocation method | All eight asset calculation rules allow a share of 1 only when the target hire/cohort accounts for the entire compatible all-user demand of the same asset/event over its relevant life. All real-user shares must sum to 1. Unsupported default whole-stock/asset attribution remains prohibited. Related allocation, measurement and bus validation wording is qualified consistently. |
| R3: aircraft altitude/UUID criteria differed between cards and rules | Execution inconsistency; not evidence that an existing UUID is intrinsically wrong | Both 66031 and 66032 now use the same criterion in `fossil_co2_air`, `cp_co2_release`, `cp_expand_substance_releases`, `substance_release`, `atomic_register`, `source_altitude_physics` and `excluded_use`. Source, phase and known altitude are retained, but alone do not require another UUID. Native flow definition and actual receiver evidence determine compatibility. A known incompatible receiver requires a compatible verified UUID and separate quantity. `air-unspecified` requires a genuinely unspecified receiver and supported compatibility. Unresolved compatibility blocks completion at the actual row ID. Unknown altitude is retained and blocks completion when needed to establish compatibility. |

English and Chinese were updated together. All eight structured projections were
regenerated through the normal current-workspace transaction, twice per record.
Reference definitions, native amounts, inventory identities and UUIDs, source
lists, rule IDs, manifests and lifecycle states were preserved. No new physical
identity verification or emission-factor evidence is claimed.

## Boundary examples checked during review

- Generated waste: opening 0 + receipts 0 + generated 10 kg = closing 0 +
  outward 10 kg. Generation closes the waste-stock balance without a fictional
  external receipt.
- Internal transfer: node A receives 10 kg, transfers 4 kg to B and retains 6 kg;
  B receives that 4 kg and dispatches 4 kg externally. Pairing cancels the
  internal 4 kg at the combined boundary: external receipt 10 kg = closing
  6 kg + external dispatch 4 kg.
- Asset attribution: target demand 100 / all-user demand 100 permits share 1;
  target demand 25 / all-user demand 100 gives 0.25, leaving 0.75 for the other
  real users. An unsupported or zero denominator is not permitted.
- Aircraft receiver decisions: known altitude alone does not establish native
  compartment incompatibility; documented compatibility is still required.
  A known incompatible receiver requires a separate compatible identity;
  unresolved compatibility remains an explicit blocker. These are policy
  consistency examples, not determinations of any new flow UUID.

## Validation

Two syncs per record produced identical structured bytes. All eight explicit
current-workspace `pcr:check --format json` calls passed:

| CPC | Measurement checks performed | Skipped | Findings | Retained range warnings |
| --- | ---: | ---: | ---: | ---: |
| 66011 | 33 | 0 | 0 | 6 |
| 66012 | 38 | 0 | 0 | 7 |
| 66021 | 48 | 0 | 0 | 9 |
| 66022 | 48 | 0 | 0 | 9 |
| 66023 | 38 | 0 | 0 | 7 |
| 66024 | 48 | 0 | 0 | 9 |
| 66031 | 33 | 0 | 0 | 6 |
| 66032 | 33 | 0 | 0 | 6 |

Total: 319 performed, zero skipped, zero findings. The 59 range warnings remain
disclosed; no ranges were invented to silence them. Bilingual checks confirmed
matching ordered rule IDs, all 59 inventory row identities, native properties,
units and controlled fields. All eight projection fingerprints are current.
These mechanical checks do not independently establish scientific correctness.

Fresh actual `guidance batch` readback succeeded for all eight records: eight
records loaded, eight final verifications, zero cache hits. The complete saved
result was 942,633 bytes, SHA-256
`438d45049335c39058178e144915feb1856617edec2c3c02ff1d5ce143ef3e89`.

Full repository validation is **not passing or complete**. The first invocation
failed the runtime gate because the default Node was 24.20.0 rather than the
pinned 24.19.0. The retry used the official Node 24.19.0 darwin-arm64 distribution
after matching its archive against the official SHA-256 checksum. Runtime,
migration, all TypeScript checks, module/vocabulary/alias/catalog/chain checks
and whole-library lint passed; lint reported zero errors and 56,425 report-only
warnings. The whole-library bilingual normative-ID test also passed.

The test run was deliberately terminated after confirmed failures while
whole-corpus offline/CLI/browser work remained active. Its final interrupted
summary was 3,558 tests: 3,354 passed, 121 failed, eight cancelled and 75 skipped;
the aggregate command exited 143. These counts are not a completed full-suite
qualification. Observed failures include:

- Linux descriptor-backed audit storage unavailable on macOS
  (`GOAL_ARTIFACT_UNSAFE` and related report-read failures). A selected receipt
  fixture independently reproduced `Secure traversal unavailable`.
- Missing PDF extractor: a selected diagnostics fixture independently reproduced
  `pdf_extractor_unavailable` instead of its expected `pdf_extraction_failed`.
- Offline artifact qualification requiring actual npm 12, while the downloaded
  Node distribution supplied npm 11.17.0. The runtime gate did not check actual
  npm; its declared 12.2.0 output is not evidence that npm 12 ran.
- Missing Chromium/Firefox Playwright executables and browser/resource timeouts.

No broader software, browser or complete offline-product qualification is
claimed. The interrupted whole-corpus offline and CLI checks remain unfinished;
the fresh eight-record checks and readback above do not replace them.

## Remaining limits

The eight records remain `candidate / authored_methodology` with Chinese
`aligned`. Reference-service UUID gaps, actual foreground occurrence/quantity,
all-user lifetime/provider evidence and independent range evidence remain
subject to their existing manifest and collection requirements. This follow-up
does not claim final foreground data, fresh remote physical-flow verification,
reviewed translation, publication or full product qualification.
