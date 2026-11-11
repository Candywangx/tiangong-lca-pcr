# Independent author review — CPC 54330

Completed 2026-10-12. Canonical target: `library/pcrs/constructions-and-construction-services/construction-services/mechanical-soil-excavation-services`. No old PCR content was read/copied. Official templates, current route context and selected module obligations were used. All English sections and 13 semantic cards existed before candidate lookup; main reviewer owns the reference's entire search allowance.

## Scope decision and source review

The contracted output is accepted excavation service measured by 1 m3 original-position void, with explicit soil-custodian handover. Loose soil is an accompanying physical handover and cannot replace the service. Clearance, fill compaction, blasting, remediation, foundations and post-handover soil hauling/treatment remain outside this narrowed package; required temporary works have separately disclosed owners.

Independently browsed authoritative sources: FHWA FP-24 sections 109, 158 and 204; FHWA CFLHD Earthwork Representation (cover April 2025, pages 2–7); EPA AP-42 13.2.3; EPA Nonroad Engines and Air Pollution EPA420-F-94-003 (1994). The UNSD historical explanatory-note page was opened but did not expose useful note text through the browser extraction; it was not misrepresented as CPC3.0 quantitative evidence or added to PCR Data Sources. CPC3.0 classification identity is from the retained repository source.

FHWA supports original-position measurement/acceptance and dust-water responsibilities; its broader roadwork pay-item package is not silently adopted. CFLHD supports site/geotechnical rather than universal shrink/swell treatment. EPA identifies dust drivers and exhaust categories, not universal factors or an invented NO/NO2 split. No non-default quantitative consumption factor was obtained: 12 non-reference ranges remain broad author `reasoned_estimate` screening aids with no fake source id. Reference 1..1 range is the declared normalization identity calculated from the same accepted-volume record, not an observed batch size.

## Preselected module obligation closure

The initial author manifest used incorrect singular group keys; sync discarded those module selections. The author corrected only this target to `activities` and `system_conditions`, then regenerated and verified four selected references persist in manifest/projection and repeated sync is byte-identical. No shared generator was changed.

| Module | Obligation | Authored response and manual conclusion |
| --- | --- | --- |
| resource-removal | source/capture context | §5 starting condition and boundary_material specify characterized native uncontaminated soil at surveyed cleared accessible site; satisfied. |
| resource-removal | removed output state/handover | §6 reusable/waste loose-soil cards and cp_soil define custodian, destination, moisture/state and transfer id; satisfied. |
| resource-removal | residuals versus intended outputs | §6/§9 distinguish accepted service, reuse soil, waste soil, retained stock and dust; satisfied. |
| resource-removal | independent adjacent boundary | boundary_service excludes subsequent fill, treatment and foundation responsibilities; satisfied. |
| batch/continuous | production mode | §6 explicitly discrete job lot indexed by site, geometry and shift; satisfied. |
| batch/continuous | runs, cleaning, changeover | §6 prose and all eight cp records retain lot/shift/events including cleaning and maintenance; satisfied. |
| batch/continuous | attribution/yield | allocation_subdivide and normalize_lot use actual event attribution and accepted volume; no assumed yield; satisfied. |
| batch/continuous | shared-run duplication | allocation_mobilization, boundary_shared and validate_shared require all consumers/periods and unique event owner; satisfied. |
| rework/reject | rejected state | §6 failed geometry/levels and unauthorized overbreak explicitly distinguished; satisfied. |
| rework/reject | routing | Correction stays in excavate; failed reuse soil changes to waste using same transfer id; satisfied. |
| rework/reject | graph and exits | Single real excavate node owns correction loop and both soil destination exits; satisfied. |
| rework/reject | accepted output exclusion | allocation_rework and validate_mode_rework retain fuel/hours but exclude duplicate acceptance and unauthorized overbreak; satisfied. |
| shared infrastructure | shared assets/services | boundary_shared and plant_use/mobilization/water cards name machinery, water and journeys; satisfied. |
| shared infrastructure | consumers and periods | cp_plant/cp_energy/cp_mobilization and boundary_shared require this node and every other consuming job/node and service period; satisfied. |
| shared infrastructure | PCR attribution decision | allocation_subdivide prioritizes subdivision; residual physical machine-hour/load/water drivers documented; mobilization uses service-period hours; satisfied. |
| shared infrastructure | duplication | all event shares reconcile; supplier fuel/transport/maintenance coverage checked against separate cards; satisfied. |

The advisory checklist inferred one applicable, two unresolved and 22 not-applicable modules from projection heuristics. This does not supersede the pre-generation four-module route plan. Manual review confirms the four obligations above. Advisory multi-output uncertainty is addressed by allocation_soil: excavation retains burdens and gives no automatic credit; independently marketed soil requires separate case review. Advisory multi-period uncertainty is addressed by service-period event allocation and upstream plant coverage; this PCR does not invent asset lifetimes or silently amortize manufacture twice.

## Binding audit

Every non-reference card had one initial search. Exactly five used one supported refinement: supplied dust water, reusable soil, waste soil, PM2.5 and coarse PM2.5–10 dust. Rationale and raw requests/results are retained in 54330-prefixed artifacts. No further search was used. Conditional maintenance and engine-species umbrellas remain unbound; an oil or CO match cannot bind the entire umbrella.

Four fixed identities independently confirmed by official `flow get`: generic petroleum diesel mass identity `9d258d75-6792-4f1c-9856-81602ed8f816`; fossil CO2 to unspecified air `08a91e70-3ddc-11dd-923d-0050c2490048`; PM2.5 to unspecified air `08a91e70-3ddc-11dd-9293-0050c2490048`; PM2.5–10 to unspecified air `08a91e70-3ddc-11dd-9501-0050c2490048`. All are state100, correct product/elementary flow type, role/direction, property Mass and kg support. Other returned subcompartments, long-term flows, wrong species/size or site-specific routes were not selected.

Mass, Volume and mass-distance property/group rows and kg, m3, t*km units were read from the independently live-exported support snapshots. Energy-group kWh factor3.6 is verified but does not establish an electricity flow's reference property. Time/hour support was not present in inspected state100 cache; preserved as explicit unresolved support. Generic road Freight Truck detail was read but not bound because the PCR has no selected actual mobilization mode/provider. Water refinement returned multiple plausible construction-water identities; no ranking-based selection was made.

Actual reference `accepted_excavation_service` remains unresolved under candidate/authored_methodology. Main reference review used one initial plus one refinement and rejected the closest Belgium hydraulic-excavator worked-volume/CPC54320 row because it did not establish the accepted original-position geometry plus custodian handover. Bounded searches do not prove platform absence. No soil/material UUID was renamed as a service.

Totals: one real node; 13 cards/ranges; eight node-specific protocols; four fixed and nine unresolved semantic cards. Two unresolved support issues are separately registered. No Flow Sets, parameterized bindings or dummy UUIDs. Trace artifacts, private runtime details and versions are absent from PCR Markdown/projection.

## Final checks and handoff limits

- Bilingual stable card metadata, UUID/support references, directions/types, protocol/node linkage, modes, ranges and ordered rule ids independently compared; no mismatch.
- Target pcr:check passes, measurement check_version2, 69 performed, zero skipped, complete coverage; 26 bilingual inventory rows; no problems/warnings.
- Repeated sync is identical for all four canonical files; SHA evidence in 54330-determinism.json.
- Every selected obligation was manually assessed above. Checker pass does not establish UUID completion, source-backed range validation, active readiness or publication readiness.
- Draft CPC decision at docs/adr/cpc-54330.md remains draft/narrower, with acceptance left to the main reviewer. No mapping/catalog/aliases, active/publication, commit/push, repository-wide validate or tests were run by this author.
