---
pcr_id: pcr.construction-services.gasket-jointed-external-building-sanitary-drain-installation-services
language: en-US
status: candidate
sync_with: pcr.zh-CN.md
---

# Gasket-jointed external building sanitary drain installation services

## 1. Scope and Applicability

Applies to installation of a six-inch rigid PVC DR35 gasket-jointed gravity sanitary building lateral on private untrafficked bare ground, from an existing outside-building outlet to a prepared authorized existing receiver. The installer owns new bedding, laying, gasket assembly, haunching, actual water testing/correction, complete imported backfill, layer compaction and agreed bare-ground grade through final signed acceptance. The selected route uses manual bar/block insertion and actual manual or grid/battery-electric support equipment. Project design, soil/load conditions, compatible products and competent acceptance criteria must be declared; public manufacturer guidance and local sample notes do not constitute a site design.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.construction-services.gasket-jointed-external-building-sanitary-drain-installation-services |
| classification_refs | CPC 3.0 54622; narrower |
| covered_products | Completed external sanitary building lateral installation with full backfill/compaction and final acceptance |
| excluded_products | Indoor pipes/vents; local sewer mains/new chambers; excavation and separately owned temporaryworks/soil hauling; roads/pavement and landscaping beyond bare grade; storm/combined/pressure systems; solvent joining; other pipe specifications; later operation/treatment/maintenance |
| representative_product | Six-inch ASTM D3034 DR35 gasketed rigid PVC sanitary lateral with compatible fittings, seals and approved imported fill |
| production_route | Manual gasket insertion; new bedding/haunch; water-only test and approval before concealment; full imported fill/layer compaction/bare-ground grade; final handover |
| market_state | Accepted completed buried lateral service, before operational wastewater conveyance |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Accepted fully buried gasketed external sanitary building drain connection |
| How much | 1 m |
| How well | Compatible approved components; exposed-joint water test and concealment approval; full backfill, layer compaction, agreed bare-ground grade and signed final as-built acceptance |
| How long or cycle | One actual installation through final acceptance; job dates linked to asset manufacture/use/maintenance/replacement/retirement periods |
| reference_flow_link | `accepted_external_drain_connection` |

| Field | Value |
| --- | --- |
| Reference amount | 1 |
| Reference product flow | Accepted fully buried gasketed external sanitary building drain connection |
| Reference flow property | Length `838aaa23-0117-11db-92e3-0800200c9a66` |
| Reference unit group | Units of length `838aaa22-0117-11db-92e3-0800200c9a66` |
| Reference unit | m |
| Required qualifiers | external outlet/receiver datums and authorization; job/site/dates; six-inch DR35 SKU and seal/fitting BOM; trench owner and geometry; soil/load/design; fill grade/phase/moisture/compaction criteria; test/approval chronology; final path IDs and D; bare-grade and signed acceptance; actual equipment/energy/provider boundary |

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| reference_path | reference product | Length `838aaa23-0117-11db-92e3-0800200c9a66` | m | D is the sum of uniquely identified final accepted conveyance-path centreline segments, in m, from the declared outside-building outlet datum to the prepared existing receiver datum. Include the centreline traversed through each fitting once; add no socket overlap. Exclude standalone cleanout access-riser length, removed/failed/uninstalled pieces and duplicate or overlapping test sections. Access-riser materials remain in inventory. Reconcile final as-built survey/segment IDs and endpoints; gross delivered, body, cut and laying lengths are separate records. Replacements retire the original ID and receive final IDs; only the final path enters D. |
| mass_conversion | gasketed_dr35_pipe; `gasketed_fittings_and_interfaces_elbow`; `gasketed_fittings_and_interfaces_branch`; `gasketed_fittings_and_interfaces_terminal`; `gasketed_fittings_and_interfaces_cleanout`; replacement_gaskets; actual exchanges required by `refine_imported_approved_fill`; approved_gasket_lubricant; actual exchanges required by `refine_cleaning_and_protection_consumables`; actual exchanges required by `refine_incoming_packaging`; supplied_water; `usable_stock_returns_pipe`; `usable_stock_returns_gasket`; `usable_stock_returns_lubricant`; `dry_nonusable_residuals_pipe_offcut`; `rejected_joint_components_joint_cutout`; `rejected_joint_components_separate_seal`; `contaminated_consumable_residuals_container`; `contaminated_consumable_residuals_wipe`; `contaminated_consumable_residuals_loose_formulation`; used_water_to_recipient; actual exchanges required by `refine_airborne_particulate`; water_to_air; actual exchanges required by `refine_other_evidenced_species_release` | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Use calibrated net weighing or validated exact SKU/stream/state conversion. Preserve raw amount, tare, density/moisture convention and factor source; different material pools stay separate. This rule does not convert electricity, service events or asset shares to mass. |
| energy_boundary | installation_electricity | Energy | kWh | Actual external metered kWh only, with actual shared-use/recharge allocation under cp_energy. Energy property support is unresolved; NCV is not a substitute. |
| count_scope | `owned_equipment_attribution_pump`; `owned_equipment_attribution_compactor`; hired_support_service | Number of items `01846770-4cfe-4a25-8ad9-919d8d378345` | Item(s) | Fractional asset count means evidenced embodied share, not weighed mass or hourly use. Hired count activates only for a real complete contract event; actual hourly contracts retain hours and unverified Duration support. |

## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Safe stable pre-excavated trench on private untrafficked bare ground; compatible provided outside-building outlet and prepared authorized existing receiver; temporaryworks separately owned; no live tapping/bypass |
| starting_condition_role | Documented upstream construction/endpoints handoff, not an invented readiness exchange |
| product_classification_scope | CPC 3.0 54622; outside-building drain-laying subset, excluding 54621 indoor piping and 54251 local mains |
| recursive_input_rule | Do not consume the same completed drain service recursively. Record supplied components/resources and separately owned upstream site responsibilities; an alternative completed-service starting point requires reviewed boundary change. |
| upstream_dataset_requirement | Matching delivered component/fill/lubricant/water/electricity and owned/provider lifecycle datasets; disclose delivery/packaging/maintenance. Preserve separately required trench/temporaryworks responsibility for downstream aggregation without duplicate soil haul. |
| disclosure | Actual site/design/owners/endpoints; handoff and final gate; resource/period boundaries; measured D; all quantity, identity, support and range gaps |

### Boundary Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `scope_eligibility` | foreground_system_boundary | Applies to installation of a six-inch rigid PVC DR35 gasket-jointed gravity sanitary building lateral on private untrafficked bare ground, from an existing outside-building outlet to a prepared authorized existing receiver. The installer owns new bedding, laying, gasket assembly, haunching, actual water testing/correction, complete imported backfill, layer compaction and agreed bare-ground grade through final signed acceptance. The selected route uses manual bar/block insertion and actual manual or grid/battery-electric support equipment. Project design, soil/load conditions, compatible products and competent acceptance criteria must be declared; public manufacturer guidance and local sample notes do not constitute a site design. |  |
| boundary_owner | external_drain_install | Start only after documented safe stable pre-excavated trench and compatible existing external endpoints are handed over. Excavation, separately owned shoring/dewatering and removed-soil custody/haulage stay with their declared suppliers; disclose their required upstream responsibility and prevent hidden omission in downstream aggregation. No excavated soil enters selected fill. | `cpc3-current` |
| installation_gate | external_drain_install | Sequence readiness → new bedding/pipe/fitting/gasket/haunch with joints visible → compatible water-only test, corrections/retests and competent concealment approval → full new imported cover, layer compaction and agreed bare-ground grade → signed final as-built acceptance. Keep every phase in one node; cover-ready is not final output. | `charlotte-plastics-manual`; `seattle-side-sewer-notes-2024` |
| gasket_joining | gasketed_dr35_pipe; `gasketed_fittings_and_interfaces_elbow`; `gasketed_fittings_and_interfaces_branch`; `gasketed_fittings_and_interfaces_terminal`; `gasketed_fittings_and_interfaces_cleanout` | Clean bell/seal/spigot, confirm seated seal, use approved lubricant and straight manual bar/block insertion to the correct mark. Abnormal resistance requires disassembly/check rather than powered forcing. Field cuts are square, bevelled and re-marked to matching component instructions. No solvent or curing step is implied. | `charlotte-plastics-manual` |
| resources_and_scope | all inventory rows | Include actual permanent components, every approved imported-fill phase, consumables, packaging source pool, external water/electricity, attributed owned resources and true hired service. Use manual or grid/battery-electric resources only in this route; combustion or live bypass requires reviewed scope change. Mains/new chambers, indoor piping, pavement/road crossing, landscaping beyond bare grade and later operation/treatment are excluded. Landed supply datasets must disclose delivery and packaging boundaries. | `charlotte-dr35`; `charlotte-underground` |
| asset_periods | `owned_equipment_attribution_pump`; `owned_equipment_attribution_compactor`; hired_support_service | Identify actual insertion tools/cutter/compactor/pump/meter/charger and ownership, manufacture/acquisition, all consuming jobs and reporting periods, maintenance/replacement and retirement. Link actual job inputs/events and accepted handover to this common period index; electricity and hired-provider burdens have single owners. Unknown utilization is retained as a gap. |  |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| external_drain_install | Complete external drain installation and final acceptance | required | Selected external gasket lateral scope | One accountable owner, phase journal only | accepted_external_drain_connection |

### Process: Complete external drain installation (`external_drain_install`)

Conditional roles expand to zero, one or multiple actual SKU/species/state/recipient exchanges, each separately measured and verified. A heterogeneous sum is a diagnostic ledger, never one exchange identity. Phase readiness, geometry and inspection are observations. All quantities refer to the same final accepted job and D.

#### Inputs

##### Product flows

###### Six-inch DR35 gasketed PVC pipe (`gasketed_dr35_pipe`)

Record net pipe mass at receipt and issue, with usable returns and retained pieces traced to the same SKU. Weigh or use validated net mass per supplied length; distinguish body, cut, laying and insertion lengths from service D. Supplied integral seals belong to this component. Calculation rule: normalize_exchange. Range evidence need: A comparable quantity interval needs exact gasketed SKU net weight, socket/seal inclusion, cut plan, fitting mix, rejects and returns. The 14 ft and 20 ft gasketed shipping points, 249.6 and 247.0 lb/100 ft, are approximate shipping data, not net installed factors or Range endpoints.

- Selected flow: Six-inch DR35 gasketed PVC pipe
- Flow property / unit: Mass / kg
- Amount rule: Actual attributable exchange numerator divided by measured D
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `process_output`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_materials`
- Sources: `charlotte-dr35`; `charlotte-plastics-manual`

###### Complete compatible gasketed drain elbow (`gasketed_fittings_and_interfaces_elbow`)

Record only this independently identified complete compatible gasketed drain elbow at its actual state and supply or receiving gate. Only an independently supplied or independently dispatched actual identified product/stream activates this card, outside other complete-product/provider coverage. Preserve actual SKU/formulation or dispatched composite, ownership, receiver/provider and every original/rework event. Evidence for nonoccurrence is required; missing identity, quantity or condition remains a completion gap. No amount or occurrence is inferred from the other child flows. Complete supplied products and contaminated carriers include their contained parts/material once.

- Selected flow: Complete compatible gasketed drain elbow
- Flow property / unit: Mass / kg
- Amount rule: Independently weigh the actual SKU/stream net mass after tare for this child; retain its own issue, return, stock and fate records; normalize the attributable numerator once by the original accepted-output denominator.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `process_output`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_materials`
- Sources: `charlotte-dr35`; `charlotte-plastics-manual`; `seattle-side-sewer-notes-2024`

Range evidence need: Establish independent, matching-identity quantity evidence and uncertainty for this actual exchange. A family total or former family interval is not a child quantity, allocation share or automatically valid child QA range.

###### Complete compatible gasketed drain branch fitting (`gasketed_fittings_and_interfaces_branch`)

Record only this independently identified complete compatible gasketed drain branch fitting at its actual state and supply or receiving gate. Only an independently supplied or independently dispatched actual identified product/stream activates this card, outside other complete-product/provider coverage. Preserve actual SKU/formulation or dispatched composite, ownership, receiver/provider and every original/rework event. Evidence for nonoccurrence is required; missing identity, quantity or condition remains a completion gap. No amount or occurrence is inferred from the other child flows. Complete supplied products and contaminated carriers include their contained parts/material once.

- Selected flow: Complete compatible gasketed drain branch fitting
- Flow property / unit: Mass / kg
- Amount rule: Independently weigh the actual SKU/stream net mass after tare for this child; retain its own issue, return, stock and fate records; normalize the attributable numerator once by the original accepted-output denominator.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `process_output`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_materials`
- Sources: `charlotte-dr35`; `charlotte-plastics-manual`; `seattle-side-sewer-notes-2024`

Range evidence need: Establish independent, matching-identity quantity evidence and uncertainty for this actual exchange. A family total or former family interval is not a child quantity, allocation share or automatically valid child QA range.

###### Complete compatible drain terminal adapter (`gasketed_fittings_and_interfaces_terminal`)

Record only this independently identified complete compatible drain terminal adapter at its actual state and supply or receiving gate. Only an independently supplied or independently dispatched actual identified product/stream activates this card, outside other complete-product/provider coverage. Preserve actual SKU/formulation or dispatched composite, ownership, receiver/provider and every original/rework event. Evidence for nonoccurrence is required; missing identity, quantity or condition remains a completion gap. No amount or occurrence is inferred from the other child flows. Complete supplied products and contaminated carriers include their contained parts/material once.

- Selected flow: Complete compatible drain terminal adapter
- Flow property / unit: Mass / kg
- Amount rule: Independently weigh the actual SKU/stream net mass after tare for this child; retain its own issue, return, stock and fate records; normalize the attributable numerator once by the original accepted-output denominator.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `process_output`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_materials`
- Sources: `charlotte-dr35`; `charlotte-plastics-manual`; `seattle-side-sewer-notes-2024`

Range evidence need: Establish independent, matching-identity quantity evidence and uncertainty for this actual exchange. A family total or former family interval is not a child quantity, allocation share or automatically valid child QA range.

###### Complete compatible drain cleanout assembly (`gasketed_fittings_and_interfaces_cleanout`)

Record only this independently identified complete compatible drain cleanout assembly at its actual state and supply or receiving gate. Only an independently supplied or independently dispatched actual identified product/stream activates this card, outside other complete-product/provider coverage. Preserve actual SKU/formulation or dispatched composite, ownership, receiver/provider and every original/rework event. Evidence for nonoccurrence is required; missing identity, quantity or condition remains a completion gap. No amount or occurrence is inferred from the other child flows. Complete supplied products and contaminated carriers include their contained parts/material once.

- Selected flow: Complete compatible drain cleanout assembly
- Flow property / unit: Mass / kg
- Amount rule: Independently weigh the actual SKU/stream net mass after tare for this child; retain its own issue, return, stock and fate records; normalize the attributable numerator once by the original accepted-output denominator.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `process_output`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_materials`
- Sources: `charlotte-dr35`; `charlotte-plastics-manual`; `seattle-side-sewer-notes-2024`

Range evidence need: Establish independent, matching-identity quantity evidence and uncertainty for this actual exchange. A family total or former family interval is not a child quantity, allocation share or automatically valid child QA range.

###### Separately issued replacement or additional seals (`replacement_gaskets`)

Activate only for seals issued separately from supplied components. Weigh or multiply actual issue/return count by verified same-SKU seal mass; link the original joint, elastomer specification and removed-seal recipient. Calculation rule: normalize_exchange. Range evidence need: Need actual compatible dimensions/material, net mass, extra issue count, replacement cause and destination. ASTM F477 conformity does not identify an elastomer or its mass.

- Selected flow: Separately issued replacement or additional seals
- Flow property / unit: Mass / kg
- Amount rule: Actual attributable exchange numerator divided by measured D
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `process_output`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_materials`
- Sources: `charlotte-dr35`; `charlotte-plastics-manual`

###### Actual approved gasket lubricant formulation (`approved_gasket_lubricant`)

Measure container beginning/end mass, tare, usable return and residue against actual six-inch joint application events. Identify the formulation; keep installed film, captured residues and evidenced releases distinct. Mechanical gasket joining adds no primer, solvent cement or cure duty. Calculation rule: normalize_exchange. Range evidence need: Need approved product/SDS, composition, application mass, density for volume conversion, spills/residues and actual fate/control; no universal kg/joint or kg/m dose is established.

- Selected flow: Actual approved gasket lubricant formulation
- Flow property / unit: Mass / kg
- Amount rule: Actual attributable exchange numerator divided by measured D
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `process_output`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_materials`
- Sources: `charlotte-plastics-manual`

###### Externally supplied water for actual installation activities (`supplied_water`)

Meter external withdrawal or multiply measured source volume by traceable temperature-specific density. Record water-only testing, cleaning and approved moisture conditioning separately, with batch reuse and retained states. Internal reuse is not withdrawal; moisture already in aggregate or formulation is not extra supplied water. Calculation rule: normalize_exchange. Range evidence need: Need source/quality, actual withdrawal, internal capacity/head geometry, compatible head/hold/venting criteria, retests/leaks/cleaning/reuse and fill moisture adjustments. No fixed water/path-m or fill/discharge ratio.

- Selected flow: Externally supplied water for actual installation activities
- Flow property / unit: Mass / kg
- Amount rule: Actual attributable exchange numerator divided by measured D
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `process_output`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_water`
- Sources: `charlotte-plastics-manual`; `charlotte-dr35`

###### External installation electricity (`installation_electricity`)

Use actual supply-meter interval kWh allocated by complete job/activity records. Attribute battery recharge and charger losses within the stated supply boundary once; battery operation does not add the same energy again. Manual work has no assumed electricity; combustion equipment requires route review. Calculation rule: normalize_exchange. Range evidence need: Need actual tool/pump/compactor power source, meter intervals, shared-load and recharge allocation/efficiency boundary. Rating times unrecorded duration supplies no interval. Exact Energy support remains unverified.

- Selected flow: External installation electricity
- Flow property / unit: Energy / kWh
- Amount rule: Actual attributable exchange numerator divided by measured D
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `process_output`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_energy`
- Sources:

###### Whole owned installation-pump asset equivalent (`owned_equipment_attribution_pump`)

Record only this independently identified whole owned installation-pump asset equivalent at its actual state and supply or receiving gate. An actual complete independently provided object/event with a matching Item(s) reference activates this card; bundled constituent parts and hours are not additional counted objects. Preserve actual SKU/formulation or dispatched composite, ownership, receiver/provider and every original/rework event. Evidence for nonoccurrence is required; missing identity, quantity or condition remains a completion gap. No amount or occurrence is inferred from the other child flows. Complete supplied products and contaminated carriers include their contained parts/material once. Quantity linkage: `owned_asset_normalize`; retain the explicit original formula below.

- Selected flow: Whole owned installation-pump asset equivalent
- Flow property / unit: Number of items / Item(s)
- Amount rule: Whole-asset-equivalent quantity = asset_count * job_activity / lifetime_activity / D Item(s), using exact asset model/serial and same documented all-consumer full-life activity basis. Manufacture allocated once; maintenance/replacements/retirement retain actual benefiting periods and explicit upstream ownership. No mass or hours converted into asset count.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `process_output`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_services`

Range evidence need: Establish independent, matching-identity quantity evidence and uncertainty for this actual exchange. A family total or former family interval is not a child quantity, allocation share or automatically valid child QA range.

###### Whole owned layer-compactor asset equivalent (`owned_equipment_attribution_compactor`)

Record only this independently identified whole owned layer-compactor asset equivalent at its actual state and supply or receiving gate. An actual complete independently provided object/event with a matching Item(s) reference activates this card; bundled constituent parts and hours are not additional counted objects. Preserve actual SKU/formulation or dispatched composite, ownership, receiver/provider and every original/rework event. Evidence for nonoccurrence is required; missing identity, quantity or condition remains a completion gap. No amount or occurrence is inferred from the other child flows. Complete supplied products and contaminated carriers include their contained parts/material once. Quantity linkage: `owned_asset_normalize`; retain the explicit original formula below.

- Selected flow: Whole owned layer-compactor asset equivalent
- Flow property / unit: Number of items / Item(s)
- Amount rule: Whole-asset-equivalent quantity = asset_count * job_activity / lifetime_activity / D Item(s), using exact asset model/serial and same documented all-consumer full-life activity basis. Manufacture allocated once; maintenance/replacements/retirement retain actual benefiting periods and explicit upstream ownership. No mass or hours converted into asset count.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `process_output`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_services`

Range evidence need: Establish independent, matching-identity quantity evidence and uncertainty for this actual exchange. A family total or former family interval is not a child quantity, allocation share or automatically valid child QA range.

###### Actual complete contracted support event (`hired_support_service`)

Count only a real provider-defined complete accepted service event, then apply its evidenced job share. Preserve the exact provider scope and equipment inclusion; rented assets are not owned assets. A true hourly contract retains actual hours and requires reviewed Duration support; it cannot be relabelled an event. Excavation and temporaryworks readiness are outside this numerator. Calculation rule: hired_service_normalize. Range evidence need: Need true contract unit, accepted event definition or hours, provider manufacture/maintenance/fuel/electricity boundary and consumer shares. No generic events/m; hourly Duration support remains unresolved.

- Selected flow: Actual complete contracted support event
- Flow property / unit: Number of items / Item(s)
- Amount rule: Actual attributable exchange numerator divided by measured D
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `process_output`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_services`
- Sources:

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Accepted fully buried gasketed external sanitary building drain connection (`accepted_external_drain_connection`)

Use cp_acceptance and reference_path. Only signed final buried-lateral acceptance after exposed-joint water test, concealment approval, full backfill/layer compaction and agreed bare-ground grade permits this output. Cover-ready or failed work is held. Calculation rule: normalize_exchange. Range evidence need: Need final surveyed endpoint/path IDs and actual lengths with every acceptance gate; 1 m is a normalization convention, not an empirical yield or material-intensity interval.

- Selected flow: Accepted fully buried gasketed external sanitary building drain connection
- Flow property / unit: Length / m
- Amount rule: 1 m
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `process_output`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_acceptance`
- Sources: `charlotte-dr35`; `charlotte-plastics-manual`; `charlotte-underground`; `seattle-side-sewer-notes-2024`

###### Usable unchanged six-inch DR35 pipe returned outward (`usable_stock_returns_pipe`)

Record only this independently identified usable unchanged six-inch dr35 pipe returned outward at its actual state and supply or receiving gate. Actual outward received unused original pipe SKU/state, matching supplied kg reference; retained stock excluded. Preserve actual SKU/formulation or dispatched composite, ownership, receiver/provider and every original/rework event. Evidence for nonoccurrence is required; missing identity, quantity or condition remains a completion gap. No amount or occurrence is inferred from the other child flows. Complete supplied products and contaminated carriers include their contained parts/material once.

- Selected flow: Usable unchanged six-inch DR35 pipe returned outward
- Flow property / unit: Mass / kg
- Amount rule: Independently weigh the actual SKU/stream net mass after tare for this child; retain its own issue, return, stock and fate records; normalize the attributable numerator once by the original accepted-output denominator.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `process_output`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_materials`

Range evidence need: Establish independent, matching-identity quantity evidence and uncertainty for this actual exchange. A family total or former family interval is not a child quantity, allocation share or automatically valid child QA range.

###### Usable unchanged separately supplied gasket returned outward (`usable_stock_returns_gasket`)

Record only this independently identified usable unchanged separately supplied gasket returned outward at its actual state and supply or receiving gate. Actual outward accepted separately supplied seal matching original SKU/kg; no return of integral seal as second product. Preserve actual SKU/formulation or dispatched composite, ownership, receiver/provider and every original/rework event. Evidence for nonoccurrence is required; missing identity, quantity or condition remains a completion gap. No amount or occurrence is inferred from the other child flows. Complete supplied products and contaminated carriers include their contained parts/material once.

- Selected flow: Usable unchanged separately supplied gasket returned outward
- Flow property / unit: Mass / kg
- Amount rule: Independently weigh the actual SKU/stream net mass after tare for this child; retain its own issue, return, stock and fate records; normalize the attributable numerator once by the original accepted-output denominator.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `process_output`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_materials`

Range evidence need: Establish independent, matching-identity quantity evidence and uncertainty for this actual exchange. A family total or former family interval is not a child quantity, allocation share or automatically valid child QA range.

###### Usable unchanged lubricant formulation returned outward (`usable_stock_returns_lubricant`)

Record only this independently identified usable unchanged lubricant formulation returned outward at its actual state and supply or receiving gate. Actual outward received original usable formulation/state in kg, matched to supply and gross/net stock bridge. Preserve actual SKU/formulation or dispatched composite, ownership, receiver/provider and every original/rework event. Evidence for nonoccurrence is required; missing identity, quantity or condition remains a completion gap. No amount or occurrence is inferred from the other child flows. Complete supplied products and contaminated carriers include their contained parts/material once.

- Selected flow: Usable unchanged lubricant formulation returned outward
- Flow property / unit: Mass / kg
- Amount rule: Independently weigh the actual SKU/stream net mass after tare for this child; retain its own issue, return, stock and fate records; normalize the attributable numerator once by the original accepted-output denominator.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `process_output`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_materials`

Range evidence need: Establish independent, matching-identity quantity evidence and uncertainty for this actual exchange. A family total or former family interval is not a child quantity, allocation share or automatically valid child QA range.

##### Waste flows

###### Discarded six-inch DR35 PVC pipe offcut (`dry_nonusable_residuals_pipe_offcut`)

Record only this independently identified discarded six-inch dr35 pvc pipe offcut at its actual state and supply or receiving gate. Actual separate collected PVC pipe offcut stream at state/receiver, includes composite pipe once; no retained/usable piece in waste. Preserve actual SKU/formulation or dispatched composite, ownership, receiver/provider and every original/rework event. Evidence for nonoccurrence is required; missing identity, quantity or condition remains a completion gap. No amount or occurrence is inferred from the other child flows. Complete supplied products and contaminated carriers include their contained parts/material once.

- Selected flow: Discarded six-inch DR35 PVC pipe offcut
- Flow property / unit: Mass / kg
- Amount rule: Independently weigh the actual SKU/stream net mass after tare for this child; retain its own issue, return, stock and fate records; normalize the attributable numerator once by the original accepted-output denominator.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `process_output`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_residuals`

Range evidence need: Establish independent, matching-identity quantity evidence and uncertainty for this actual exchange. A family total or former family interval is not a child quantity, allocation share or automatically valid child QA range.

###### Complete removed unusable gasket-joint cutout (`rejected_joint_components_joint_cutout`)

Record only this independently identified complete removed unusable gasket-joint cutout at its actual state and supply or receiving gate. Actual independently discarded complete joint cutout including retained seals/components once. Preserve actual SKU/formulation or dispatched composite, ownership, receiver/provider and every original/rework event. Evidence for nonoccurrence is required; missing identity, quantity or condition remains a completion gap. No amount or occurrence is inferred from the other child flows. Complete supplied products and contaminated carriers include their contained parts/material once.

- Selected flow: Complete removed unusable gasket-joint cutout
- Flow property / unit: Mass / kg
- Amount rule: Independently weigh the actual SKU/stream net mass after tare for this child; retain its own issue, return, stock and fate records; normalize the attributable numerator once by the original accepted-output denominator.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `process_output`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_residuals`
- Sources: `charlotte-plastics-manual`

Range evidence need: Establish independent, matching-identity quantity evidence and uncertainty for this actual exchange. A family total or former family interval is not a child quantity, allocation share or automatically valid child QA range.

###### Separately removed unusable joint seal (`rejected_joint_components_separate_seal`)

Record only this independently identified separately removed unusable joint seal at its actual state and supply or receiving gate. Only actual independently removed and dispatched seal not contained in complete cutout; reseating without external exit is no waste. Preserve actual SKU/formulation or dispatched composite, ownership, receiver/provider and every original/rework event. Evidence for nonoccurrence is required; missing identity, quantity or condition remains a completion gap. No amount or occurrence is inferred from the other child flows. Complete supplied products and contaminated carriers include their contained parts/material once.

- Selected flow: Separately removed unusable joint seal
- Flow property / unit: Mass / kg
- Amount rule: Independently weigh the actual SKU/stream net mass after tare for this child; retain its own issue, return, stock and fate records; normalize the attributable numerator once by the original accepted-output denominator.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `process_output`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_residuals`
- Sources: `charlotte-plastics-manual`

Range evidence need: Establish independent, matching-identity quantity evidence and uncertainty for this actual exchange. A family total or former family interval is not a child quantity, allocation share or automatically valid child QA range.

###### Contaminated drain-installation consumable container waste (`contaminated_consumable_residuals_container`)

Record only this independently identified contaminated drain-installation consumable container waste at its actual state and supply or receiving gate. Only an independently supplied or independently dispatched actual identified product/stream activates this card, outside other complete-product/provider coverage. Preserve actual SKU/formulation or dispatched composite, ownership, receiver/provider and every original/rework event. Evidence for nonoccurrence is required; missing identity, quantity or condition remains a completion gap. No amount or occurrence is inferred from the other child flows. Complete supplied products and contaminated carriers include their contained parts/material once.

- Selected flow: Contaminated drain-installation consumable container waste
- Flow property / unit: Mass / kg
- Amount rule: Independently weigh the actual SKU/stream net mass after tare for this child; retain its own issue, return, stock and fate records; normalize the attributable numerator once by the original accepted-output denominator.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `process_output`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_residuals`

Range evidence need: Establish independent, matching-identity quantity evidence and uncertainty for this actual exchange. A family total or former family interval is not a child quantity, allocation share or automatically valid child QA range.

###### Contaminated drain-installation wipe waste (`contaminated_consumable_residuals_wipe`)

Record only this independently identified contaminated drain-installation wipe waste at its actual state and supply or receiving gate. Only an independently supplied or independently dispatched actual identified product/stream activates this card, outside other complete-product/provider coverage. Preserve actual SKU/formulation or dispatched composite, ownership, receiver/provider and every original/rework event. Evidence for nonoccurrence is required; missing identity, quantity or condition remains a completion gap. No amount or occurrence is inferred from the other child flows. Complete supplied products and contaminated carriers include their contained parts/material once.

- Selected flow: Contaminated drain-installation wipe waste
- Flow property / unit: Mass / kg
- Amount rule: Independently weigh the actual SKU/stream net mass after tare for this child; retain its own issue, return, stock and fate records; normalize the attributable numerator once by the original accepted-output denominator.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `process_output`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_residuals`

Range evidence need: Establish independent, matching-identity quantity evidence and uncertainty for this actual exchange. A family total or former family interval is not a child quantity, allocation share or automatically valid child QA range.

###### Separately collected drain-installation formulation residue (`contaminated_consumable_residuals_loose_formulation`)

Record only this independently identified separately collected drain-installation formulation residue at its actual state and supply or receiving gate. Actual loose collected residue separately dispatched, not inside contaminated carrier. Preserve actual SKU/formulation or dispatched composite, ownership, receiver/provider and every original/rework event. Evidence for nonoccurrence is required; missing identity, quantity or condition remains a completion gap. No amount or occurrence is inferred from the other child flows. Complete supplied products and contaminated carriers include their contained parts/material once.

- Selected flow: Separately collected drain-installation formulation residue
- Flow property / unit: Mass / kg
- Amount rule: Independently weigh the actual SKU/stream net mass after tare for this child; retain its own issue, return, stock and fate records; normalize the attributable numerator once by the original accepted-output denominator.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `process_output`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_residuals`

Range evidence need: Establish independent, matching-identity quantity evidence and uncertainty for this actual exchange. A family total or former family interval is not a child quantity, allocation share or automatically valid child QA range.

###### Collected used water transferred to an authorized recipient (`used_water_to_recipient`)

Meter transferred volume with actual density or weigh the stream; retain source/reuse/batch/retained IDs, quality and recipient receipt. This is technosphere waste, exclusive of direct environmental release for the same stream. Test filling and internal reuse are not discharge. Calculation rule: normalize_exchange. Range evidence need: Need actual collection/discharge, permission, quality, density and retained/reuse reconciliation. Fresh supply does not automatically equal wastewater.

- Selected flow: Collected used water transferred to an authorized recipient
- Flow property / unit: Mass / kg
- Amount rule: Actual attributable exchange numerator divided by measured D
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `process_output`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_water`
- Sources: `charlotte-plastics-manual`

##### Elementary flows

###### Evidenced water vapour to the actual air subcompartment (`water_to_air`)

Measure actual evaporation or use a validated exposure-specific water balance/factor with retained and recipient pathways measured. Reconcile source water in aggregate and lubricant. Uncollected balance remainder is a gap; do not force an unspecified-air identity. Calculation rule: release_normalize. Range evidence need: Need actual exposed area/time/conditions for testing, cleaning or moisture conditioning, validated evaporation and source-pool partition; no default evaporation fraction.

- Selected flow: Evidenced water vapour to the actual air subcompartment
- Flow property / unit: Mass / kg
- Amount rule: Actual attributable exchange numerator divided by measured D
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `process_output`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_water`
- Sources:

## 7. Allocation and Co-product Handling

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| single_output | external_drain_install | One intended accepted lateral service; stock returns and residual exits are not intended co-products. Keep actual correction, replacement, extra water test and deficient fill/compaction correction resources in this accepted job, once. Failed and held work is not accepted output. |  |
| return_convention | `usable_stock_returns_pipe`; `usable_stock_returns_gasket`; `usable_stock_returns_lubricant` | Declare gross custody flows plus real returns, or reconcile net resource consumption to those flows. Do not both net issues and deduct the same return again. No default recovery/avoided-product credit follows a waste dispatch or stock return. |  |
| owned_asset_shares | `owned_equipment_attribution_pump`; `owned_equipment_attribution_compactor` | Attribute exact asset manufacture by actual same-basis job/lifetime activity and enumerate every consumer/period. Shares reconcile to 1 over the stated history/remaining-use basis. Maintenance/replacement goes to evidenced benefiting periods or causal job; a matched lifecycle dataset must own it, or correctly typed separate roles require review. Closed assets use closed history; in-service remaining use needs supported estimates and uncertainty. Unknown maintenance/termination blocks finalized attribution. |  |
| resource_nonoverlap | `owned_equipment_attribution_pump`; `owned_equipment_attribution_compactor`; hired_support_service; installation_electricity; actual exchanges required by `refine_incoming_packaging` | Provider service owns rented asset burdens; operator-owned assets are separate. Reconcile manufacture, each maintenance/replacement/retirement event and period share once; do not annualize lifetime-attributed burdens again or assign whole original and replacement assets simultaneously. Meter electricity/charging once. Preserve embedded packaging custody without duplicating its upstream manufacture. |  |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cp_materials | external_drain_install | material/SKU/phase and packaging | actual measured/traceable event records | shipment; SKU/lot/specification; component/phase ID; receipt/issue/return/stock; mass/tare; net factor source; fill moisture/density; packaging owner; concrete_exchange_id; physical_event_id; actual_identity_id; actual_state; receiver_or_provider_gate; native_quantity; native_unit; unique_property; measurement_method_id; uncertainty | Weigh or use validated same-SKU net factors. Reconcile actual pipe/fitting/seal/lubricant/consumable quantities. Keep fill bedding/haunch/initial/upper phases and stock distinct; packaging physical pool and upstream burden owner are separate. Quantity aggregation: actual attributable external quantity / D; internal movement is ledger only Record each actual child/refined exchange independently by identity, physical event, state, gate and period. Retain all original obligations even where a corresponding exchange identity is not yet known. Do not allocate a family total or copy its numerical Range to children, count a carrier and its contained material twice, or turn missing occurrence/quantity/native reference into zero. Each concrete exchange has one property and one unit; other CP readings are auxiliary and require evidenced conversion. Missing required refinement blocks dataset completion. | kg | Each custody/placement event | receipt to final stock/residual closure | one job, every selected shipment and placement phase | per reference flow | calibration; tickets; SKU net evidence; phase placement and supplier boundary |
| cp_water | external_drain_install | external/retained/reused/dispatched water | actual measured/traceable event records | source/quality; volume or meter intervals; density/temperature; batch/reuse IDs; test head/hold/venting; retained inventory; recipient; aggregate/formulation water | Meter external supply and each outgoing/retained batch separately. Weigh or convert with actual density; preserve internal reuse and constituent water in fill/lubricant. Record actual water-only tests, retests, cleaning and approved moisture conditioning; no balance remainder is assigned a fate. Quantity aggregation: each actual external input/output mass / D; internal reuse excluded | kg | Each withdrawal/test/transfer event | first water activity through final retained/recipient closure | one job and all test/placement water batches | per reference flow | meter calibration; batch journal; quality/density evidence; receiver receipt |
| cp_energy | external_drain_install | external tool/pump/compactor/charging energy | actual measured/traceable event records | asset/phase; source/provider; interval start/end kWh; battery charge/activity share; charger boundary; all shared users | Read calibrated supply meters. Allocate shared loads and battery recharge using matching complete activity/charge records; include charger loss only inside stated supply boundary. Do not count battery operation and recharge twice or infer energy for manual work. Combustion equipment requires route review. Quantity aggregation: actual attributable external kWh / D | kWh | Each supply interval and recharge | installation through corrections and final compaction | one job and complete shared-meter interval | per reference flow | meter calibration; charging/share reconciliation; manual/no-electric-use evidence |
| cp_services | external_drain_install | owned asset share and true hired event | actual measured/traceable event records | ownership; model/serial/count; all consumers/jobs/periods; actual and lifetime same-basis activity; manufacture/maintenance/replacement/termination; provider unit/event or hours; upstream readiness IDs; concrete_exchange_id; physical_event_id; actual_identity_id; actual_state; receiver_or_provider_gate; native_quantity; native_unit; unique_property; measurement_method_id; uncertainty | Index manufacture/acquisition, all service periods, actual maintenance/replacement and retirement. Record matched lifecycle dataset inclusions; otherwise review correctly typed maintenance roles. Count only complete accepted provider events; hours keep their true quantity/support gap. Link separately owned excavation/temporaryworks readiness without importing their burdens. Quantity aggregation: asset count × actual job activity/lifetime activity / D; actual accepted event count × job share / D Record each actual child/refined exchange independently by identity, physical event, state, gate and period. Retain all original obligations even where a corresponding exchange identity is not yet known. Do not allocate a family total or copy its numerical Range to children, count a carrier and its contained material twice, or turn missing occurrence/quantity/native reference into zero. Each concrete exchange has one property and one unit; other CP readings are auxiliary and require evidenced conversion. Missing required refinement blocks dataset completion. | Item(s) | Each asset/service/lifecycle event | whole documented asset service history plus job dates | this job and every consuming job/period in asset denominator | per reference flow | asset/period registers; contract/acceptance; lifecycle dataset boundary; remaining-use uncertainty |
| cp_residuals | external_drain_install | material waste and evidenced species release | actual measured/traceable event records | stream/material/species/size/state; gross/tare/composition; source/phase/old/new ID; receiver/medium/subcompartment; measured release or factor/activity/control; concrete_exchange_id; physical_event_id; actual_identity_id; actual_state; receiver_or_provider_gate; native_quantity; native_unit; unique_property; measurement_method_id; uncertainty | Weigh actual exit streams separately by identity and recipient. Trace removed joints and replacement events. Quantify emissions only by specific measurements or a validated matched species/material/control factor with actual activity; distinguish captured waste, retained constituents and direct release. Quantity aggregation: each actual waste/species quantity / D; no automatic residual-to-air assignment Record each actual child/refined exchange independently by identity, physical event, state, gate and period. Retain all original obligations even where a corresponding exchange identity is not yet known. Do not allocate a family total or copy its numerical Range to children, count a carrier and its contained material twice, or turn missing occurrence/quantity/native reference into zero. Each concrete exchange has one property and one unit; other CP readings are auxiliary and require evidenced conversion. Missing required refinement blocks dataset completion. | kg | Each exit/reject/release event | receipt through final correction/dispatch | one job, actual installer-owned releases only | per reference flow | tare/calibration; dispatch tickets; composition; factor applicability and uncertainty |
| cp_acceptance | external_drain_install | final accepted buried conveyance path | actual measured/traceable event records | provided endpoint datums/authorization; trench readiness owner; final path/segment IDs and lengths; fitting/access distinction; visible-joint water test/retest; concealment approval; fill/layer/compaction/grade evidence; signature/date | Survey and reconcile final unique conveyance centreline as reference_path. Record ready trench/endpoints, gasket laying/haunch, exposed-joint compatible water test and correction, competent concealment approval, then full cover/layer compaction and agreed bare-ground grade, then final signed buried-lateral acceptance. Failed or merely cover-ready work contributes no D. Quantity aggregation: final accepted path D / D = 1 m reference flow | m | Each inspection/correction and final survey/handover | ready-trench handoff through signed final acceptance | one actual external outlet-to-receiver path set | per reference flow | as-built survey; test/approval chronology; full backfill/compaction records; final signature |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| normalize_exchange | all inventory rows | Divide the actual attributable external quantity by D, retaining its own numerator unit and conversion evidence. For the final accepted path, D / D gives 1 m reference flow. Do not repeat internal transfers or embedded supply inputs. | actual external quantity; D; linked collection protocol | quantity per reference flow |  |
| owned_asset_normalize | `owned_equipment_attribution_pump`; `owned_equipment_attribution_compactor` | q_asset_per_m = asset_count × job_activity / lifetime_activity / D. Use the same documented activity basis for all consumers; manufacture once, maintenance/replacement by evidenced benefiting periods or causal job with explicit dataset ownership. | asset_count; job_activity; lifetime_activity; D; cp_services | attributed Item(s) per reference flow |  |
| hired_service_normalize | hired_support_service | q_service_per_m = true_contract_quantity × job_share / D. Here Item(s) applies only to an actual complete defined accepted event. A true hour contract requires reviewed Duration support; preserve hours and the gap. | true_contract_quantity; job_share; D; cp_services | true service quantity per reference flow |  |
| fill_diagnostic | actual exchanges required by `refine_imported_approved_fill` | Keep surveyed phase volumes separate. Prefer weighed fill attributed to each phase; otherwise mass = actual phase volume × validated site/state bulk density with declared moisture convention. Deduct actual pipe displacement where applicable; reconcile all placed phases, returns, stocks and losses once. | phase geometry; ticket mass; density; moisture; cp_materials; cp_acceptance | phase mass diagnostic before normalize_exchange |  |
| release_normalize | actual exchanges required by `refine_airborne_particulate`; water_to_air; actual exchanges required by `refine_other_evidenced_species_release` | Use actual measured species mass / D, or actual matched activity × validated species-specific release factor / D. Identify real medium/subcompartment and controls; unknown partition or unmatched factor remains a gap. | species mass or activity/factor; D; cp_residuals; cp_water | species kg per reference flow |  |
| source_pool_balance | material and constituent ledgers | Opening stock + receipts = closing stock + usable returns + installed retention + captured/recipient waste + evidenced environmental release, with compatible units and uncertainty. Reconcile separate physical material/constituent pools, including packaging custody, aggregate moisture and formulation water; no automatic fate from an imbalance. | stocks; receipts; retention; returns; waste; release; cp_materials; cp_water; cp_residuals | diagnostic physical pool balance |  |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| dq_traceability | all inventory rows | Retain event dates, node ownership, actual SKU/state/recipient, instrument calibration, raw numerator/unit and matched conversion provenance. Unknown occurrence is unknown, not zero. Maintain physical and constituent pools separately with uncertainty. | cp_materials; cp_water; cp_energy; cp_services; cp_residuals; cp_acceptance |
| dq_public_evidence | all inventory rows | Manufacturer shipping points are not net consumption or intervals. Engineering bedding/compaction recommendations and Seattle sample notes require actual site/design adaptation; no default density, water ratio, reject fraction, lubricant dose, lifetime or emission split is established. | charlotte-dr35; charlotte-plastics-manual; seattle-side-sewer-notes-2024 |
| range_gasketed_dr35_pipe | gasketed_dr35_pipe | A comparable quantity interval needs exact gasketed SKU net weight, socket/seal inclusion, cut plan, fitting mix, rejects and returns. The 14 ft and 20 ft gasketed shipping points, 249.6 and 247.0 lb/100 ft, are approximate shipping data, not net installed factors or Range endpoints. | cp_materials |
| range_gasketed_fittings_and_interfaces | `gasketed_fittings_and_interfaces_elbow`; `gasketed_fittings_and_interfaces_branch`; `gasketed_fittings_and_interfaces_terminal`; `gasketed_fittings_and_interfaces_cleanout` | Need endpoint compatibility/approval, as-built fitting and access BOM, SKU weights/seal boundary and actual replacements before any fitting kg/path-m interval. | cp_materials |
| range_replacement_gaskets | replacement_gaskets | Need actual compatible dimensions/material, net mass, extra issue count, replacement cause and destination. ASTM F477 conformity does not identify an elastomer or its mass. | cp_materials |
| range_imported_approved_fill | actual exchanges required by `refine_imported_approved_fill` | Need project soil/load/cover design, phase geometry, material grade, weighed quantity, moisture/density basis, losses and placement acceptance. General 4 in bedding, 6 in on rock, 6 in layers and 85–95% compaction guidance is conditional, not an inventory interval or evidence of site compliance. | cp_materials |
| range_approved_gasket_lubricant | approved_gasket_lubricant | Need approved product/SDS, composition, application mass, density for volume conversion, spills/residues and actual fate/control; no universal kg/joint or kg/m dose is established. | cp_materials |
| range_cleaning_and_protection_consumables | actual exchanges required by `refine_cleaning_and_protection_consumables` | Need actual objects/frequency, product dose or article mass/composition, stock and captured residues; no generic cleaning kg/m interval. | cp_materials |
| range_incoming_packaging | actual exchanges required by `refine_incoming_packaging` | Need actual packaging material/weight and supplier boundary by shipment; even absence on bulk fill needs evidence. Packaging waste cannot stand in for a missing incoming source pool. | cp_materials |
| range_supplied_water | supplied_water | Need source/quality, actual withdrawal, internal capacity/head geometry, compatible head/hold/venting criteria, retests/leaks/cleaning/reuse and fill moisture adjustments. No fixed water/path-m or fill/discharge ratio. | cp_water |
| range_installation_electricity | installation_electricity | Need actual tool/pump/compactor power source, meter intervals, shared-load and recharge allocation/efficiency boundary. Rating times unrecorded duration supplies no interval. Exact Energy support remains unverified. | cp_energy |
| range_owned_equipment_attribution | `owned_equipment_attribution_pump`; `owned_equipment_attribution_compactor` | Need asset-specific embodied evidence, all consumer/period activity, maintenance/replacement/termination and supported remaining-use uncertainty; no whole tool/job, standard lifetime or generic share interval. | cp_services |
| range_hired_support_service | hired_support_service | Need true contract unit, accepted event definition or hours, provider manufacture/maintenance/fuel/electricity boundary and consumer shares. No generic events/m; hourly Duration support remains unresolved. | cp_services |
| range_accepted_external_drain_connection | accepted_external_drain_connection | Need final surveyed endpoint/path IDs and actual lengths with every acceptance gate; 1 m is a normalization convention, not an empirical yield or material-intensity interval. | cp_acceptance |
| range_usable_stock_returns | `usable_stock_returns_pipe`; `usable_stock_returns_gasket`; `usable_stock_returns_lubricant` | Need actual acceptance/quantity/state and prior issue convention for each returned SKU, including unused fill and lubricant balances; no default return fraction. | cp_materials |
| range_dry_nonusable_residuals | `dry_nonusable_residuals_pipe_offcut` | Need actual cut plan, pack losses, rejected/excess fill destination, collection and mass records; no universal waste percentage or mixed-material exchange. | cp_residuals |
| range_rejected_joint_components | `rejected_joint_components_joint_cutout`; `rejected_joint_components_separate_seal` | Need observed cause, composition/mass, replacement linkage and destination. Recognized gasket displacement risk does not establish a defect rate. | cp_residuals |
| range_contaminated_consumable_residuals | `contaminated_consumable_residuals_container`; `contaminated_consumable_residuals_wipe`; `contaminated_consumable_residuals_loose_formulation` | Need actual SDS/formulation, container/wipe retention, residue quality and recipient requirements; neither a generic VOC nor hazardous fraction is supported. | cp_residuals |
| range_used_water_to_recipient | used_water_to_recipient | Need actual collection/discharge, permission, quality, density and retained/reuse reconciliation. Fresh supply does not automatically equal wastewater. | cp_water |
| range_airborne_particulate | actual exchanges required by `refine_airborne_particulate` | Need composition/size fraction, actual task activity, wetting/enclosure/capture and matched measurement/factor; no total-dust-to-PVC/PM split or universal interval. | cp_residuals |
| range_water_to_air | water_to_air | Need actual exposed area/time/conditions for testing, cleaning or moisture conditioning, validated evaporation and source-pool partition; no default evaporation fraction. | cp_water |
| range_other_evidenced_species_release | actual exchanges required by `refine_other_evidenced_species_release` | Need actual approved lubricant/cleaner SDS, applied mass, species, medium, control and partition/factor evidence. Gasket joining alone implies neither chemical identity nor release quantity. | cp_residuals |
| `refine_gasketed_fittings_and_interfaces` | `gasketed_fittings_and_interfaces_elbow`; `gasketed_fittings_and_interfaces_branch`; `gasketed_fittings_and_interfaces_terminal`; `gasketed_fittings_and_interfaces_cleanout` | Preserve this actual collection and closure scope as a mandatory dataset-production requirement: Reconcile the actual elbow/branch/terminal/cleanout BOM to item counts and measured or same-SKU net mass. Include supplied seals once. Existing authorized endpoints are provided; no new main, chamber or live tapping belongs here. Only the traversed fitting path enters D; access-riser material still enters inventory. Calculation rule: normalize_exchange. Range evidence need: Need endpoint compatibility/approval, as-built fitting and access BOM, SKU weights/seal boundary and actual replacements before any fitting kg/path-m interval. Independently establish every actual identity, state, real provider/receiver and exactly one exchange property/unit before constructing its flow card. Each actual exchange requires its own recorded quantity and applicable method, uncertainty and custody/fate coverage. Auxiliary CP units do not authorize extra exchange views. Actual occurrence unknown is not zero; never invent a material/species/provider list or split a parent total. Quantitative screening evidence must fit each actual exchange; a former family interval cannot be copied or divided into child ranges. Further actual identities not fully specified by the conditional children require mandatory refinement and prevent dataset completion; this requirement is not itself a flow exchange. Actual access-riser material and other adapters/functions require exact SKU/geometry/native unit; complete supplied fittings include seals once. Existing main/chamber/live tapping outside scope, only traversed fitting path enters service D. | `cp_materials`; actual independent records and identity/unit evidence |
| `refine_imported_approved_fill` | actual independently refined exchanges | Preserve this actual collection and closure scope as a mandatory dataset-production requirement: Use weighed tickets and stock/return/placement records. Distinguish bedding, haunch, initial cover and upper backfill even if the same material serves several phases. If converting surveyed volume, validate actual state-specific density and moisture; account pipe displacement, trench geometry and compaction. Excavated soil remains with the excavation supplier. Calculation rule: normalize_exchange. Range evidence need: Need project soil/load/cover design, phase geometry, material grade, weighed quantity, moisture/density basis, losses and placement acceptance. General 4 in bedding, 6 in on rock, 6 in layers and 85–95% compaction guidance is conditional, not an inventory interval or evidence of site compliance. Independently establish every actual identity, state, real provider/receiver and exactly one exchange property/unit before constructing its flow card. Each actual exchange requires its own recorded quantity and applicable method, uncertainty and custody/fate coverage. Auxiliary CP units do not authorize extra exchange views. Actual occurrence unknown is not zero; never invent a material/species/provider list or split a parent total. Quantitative screening evidence must fit each actual exchange; a former family interval cannot be copied or divided into child ranges. Further actual identities not fully specified by the conditional children require mandatory refinement and prevent dataset completion; this requirement is not itself a flow exchange. Actual independently supplied approved material/grade/moisture/state and unique Mass/kg quantity; same physical material used several phases recorded once with phase activity. Independent density/moisture/geometry/pipe displacement needed for volume bridge, excavated soil excavation-supplier owned. | `cp_materials`; actual independent records and identity/unit evidence |
| `refine_cleaning_and_protection_consumables` | actual independently refined exchanges | Preserve this actual collection and closure scope as a mandatory dataset-production requirement: Record consumed SKU quantities from issues/returns and container deltas or validated article count-to-mass factors, linked to the cleaned object and event. Include only actual activities; reusable protection is equipment and solvent cleaner is not presumed. Calculation rule: normalize_exchange. Range evidence need: Need actual objects/frequency, product dose or article mass/composition, stock and captured residues; no generic cleaning kg/m interval. Independently establish every actual identity, state, real provider/receiver and exactly one exchange property/unit before constructing its flow card. Each actual exchange requires its own recorded quantity and applicable method, uncertainty and custody/fate coverage. Auxiliary CP units do not authorize extra exchange views. Actual occurrence unknown is not zero; never invent a material/species/provider list or split a parent total. Quantitative screening evidence must fit each actual exchange; a former family interval cannot be copied or divided into child ranges. Further actual identities not fully specified by the conditional children require mandatory refinement and prevent dataset completion; this requirement is not itself a flow exchange. Actual expendable SKU/function/material/state and independent issue/return/count-mass/container-delta method; reusable protection equipment separate, no presumed solvent cleaner. | `cp_materials`; actual independent records and identity/unit evidence |
| `refine_incoming_packaging` | actual independently refined exchanges | Preserve this actual collection and closure scope as a mandatory dataset-production requirement: Measure shipment-linked package mass or same-batch counts/tares and reconcile stock, reuse, returns and waste. Instantiate a burden input only where landed supply excludes that packaging burden; otherwise retain physical custody in the ledger without repeating manufacture. Calculation rule: normalize_exchange. Range evidence need: Need actual packaging material/weight and supplier boundary by shipment; even absence on bulk fill needs evidence. Packaging waste cannot stand in for a missing incoming source pool. Independently establish every actual identity, state, real provider/receiver and exactly one exchange property/unit before constructing its flow card. Each actual exchange requires its own recorded quantity and applicable method, uncertainty and custody/fate coverage. Auxiliary CP units do not authorize extra exchange views. Actual occurrence unknown is not zero; never invent a material/species/provider list or split a parent total. Quantitative screening evidence must fit each actual exchange; a former family interval cannot be copied or divided into child ranges. Further actual identities not fully specified by the conditional children require mandatory refinement and prevent dataset completion; this requirement is not itself a flow exchange. Actual shipment-linked packaging material/count/tare; burden input only where supplier gate excludes manufacture, otherwise physical ledger; stock/reuse/return/waste closure. | `cp_materials`; actual independent records and identity/unit evidence |
| `refine_owned_equipment_attribution` | `owned_equipment_attribution_pump`; `owned_equipment_attribution_compactor` | Preserve this actual collection and closure scope as a mandatory dataset-production requirement: Record exact model/serial/count and actual job activity against documented same-basis lifetime activity across every consuming job/period. Allocate manufacture once; maintain actual manufacture, maintenance, replacement and retirement boundaries. A matching lifecycle dataset must explicitly include maintenance; otherwise correctly typed maintenance roles need review. Do not convert maintenance mass or hours into an asset count. Calculation rule: owned_asset_normalize. Range evidence need: Need asset-specific embodied evidence, all consumer/period activity, maintenance/replacement/termination and supported remaining-use uncertainty; no whole tool/job, standard lifetime or generic share interval. Independently establish every actual identity, state, real provider/receiver and exactly one exchange property/unit before constructing its flow card. Each actual exchange requires its own recorded quantity and applicable method, uncertainty and custody/fate coverage. Auxiliary CP units do not authorize extra exchange views. Actual occurrence unknown is not zero; never invent a material/species/provider list or split a parent total. Quantitative screening evidence must fit each actual exchange; a former family interval cannot be copied or divided into child ranges. Further actual identities not fully specified by the conditional children require mandatory refinement and prevent dataset completion; this requirement is not itself a flow exchange. Other owned reusable tool/resource functions require exact function/model/serial/life-reference. Each uses owned_asset_normalize = asset_count*job_activity/lifetime_activity/D, all consumers and actual maintenance/retirement ownership; rented assets not owned. | `cp_services`; actual independent records and identity/unit evidence |
| `refine_usable_stock_returns` | `usable_stock_returns_pipe`; `usable_stock_returns_gasket`; `usable_stock_returns_lubricant` | Preserve this actual collection and closure scope as a mandatory dataset-production requirement: Weigh returned stock or use a validated same-SKU conversion; link original issue, unchanged usable state and receiving receipt. Keep pipe, seal, fill, lubricant and packaging returns separate. Choose a consistent gross issue/return or net-issue convention so the same return is not deducted twice. Calculation rule: normalize_exchange. Range evidence need: Need actual acceptance/quantity/state and prior issue convention for each returned SKU, including unused fill and lubricant balances; no default return fraction. Independently establish every actual identity, state, real provider/receiver and exactly one exchange property/unit before constructing its flow card. Each actual exchange requires its own recorded quantity and applicable method, uncertainty and custody/fate coverage. Auxiliary CP units do not authorize extra exchange views. Actual occurrence unknown is not zero; never invent a material/species/provider list or split a parent total. Quantitative screening evidence must fit each actual exchange; a former family interval cannot be copied or divided into child ranges. Further actual identities not fully specified by the conditional children require mandatory refinement and prevent dataset completion; this requirement is not itself a flow exchange. Actual fill material, packaging and other product return identities/receivers require matching input native reference; gross/net convention once, no retained stock or credit. | `cp_materials`; actual independent records and identity/unit evidence |
| `refine_dry_nonusable_residuals` | `dry_nonusable_residuals_pipe_offcut` | Preserve this actual collection and closure scope as a mandatory dataset-production requirement: Weigh each collected dry stream with tare, composition, source-pool and recipient ticket. Pipe offcuts, packaging and actual fill losses remain separate identities. Retained fill and reusable packaging are not waste. Calculation rule: normalize_exchange. Range evidence need: Need actual cut plan, pack losses, rejected/excess fill destination, collection and mass records; no universal waste percentage or mixed-material exchange. Independently establish every actual identity, state, real provider/receiver and exactly one exchange property/unit before constructing its flow card. Each actual exchange requires its own recorded quantity and applicable method, uncertainty and custody/fate coverage. Auxiliary CP units do not authorize extra exchange views. Actual occurrence unknown is not zero; never invent a material/species/provider list or split a parent total. Quantitative screening evidence must fit each actual exchange; a former family interval cannot be copied or divided into child ranges. Further actual identities not fully specified by the conditional children require mandatory refinement and prevent dataset completion; this requirement is not itself a flow exchange. Actual fill loss material, packaging and other dry residual streams require independent identity/state/source/receiver; no unlike-material sum. | `cp_residuals`; actual independent records and identity/unit evidence |
| `refine_rejected_joint_components` | `rejected_joint_components_joint_cutout`; `rejected_joint_components_separate_seal` | Preserve this actual collection and closure scope as a mandatory dataset-production requirement: Weigh actual damaged, displaced-seal or leaking joint cutouts, or apply matched SKU factors; link original, removed and replacement IDs, failed test and recipient. Reseating without an external material exit is a correction event, not waste. Retired pieces cannot enter D. Calculation rule: normalize_exchange. Range evidence need: Need observed cause, composition/mass, replacement linkage and destination. Recognized gasket displacement risk does not establish a defect rate. Independently establish every actual identity, state, real provider/receiver and exactly one exchange property/unit before constructing its flow card. Each actual exchange requires its own recorded quantity and applicable method, uncertainty and custody/fate coverage. Auxiliary CP units do not authorize extra exchange views. Actual occurrence unknown is not zero; never invent a material/species/provider list or split a parent total. Quantitative screening evidence must fit each actual exchange; a former family interval cannot be copied or divided into child ranges. Further actual identities not fully specified by the conditional children require mandatory refinement and prevent dataset completion; this requirement is not itself a flow exchange. Different actual damaged components/material/receiver states require exact records; link original/removal/replacement/test IDs, retired pieces not service D. | `cp_residuals`; actual independent records and identity/unit evidence |
| `refine_contaminated_consumable_residuals` | `contaminated_consumable_residuals_container`; `contaminated_consumable_residuals_wipe`; `contaminated_consumable_residuals_loose_formulation` | Preserve this actual collection and closure scope as a mandatory dataset-production requirement: Measure container/wipe tare and collected formulation residue, keeping composition, classification and receiver. Reconcile applied, retained, captured and released constituent pools. Actual acceptance conditions determine waste classification; do not assume hazardous status or emission. Calculation rule: normalize_exchange. Range evidence need: Need actual SDS/formulation, container/wipe retention, residue quality and recipient requirements; neither a generic VOC nor hazardous fraction is supported. Independently establish every actual identity, state, real provider/receiver and exactly one exchange property/unit before constructing its flow card. Each actual exchange requires its own recorded quantity and applicable method, uncertainty and custody/fate coverage. Auxiliary CP units do not authorize extra exchange views. Actual occurrence unknown is not zero; never invent a material/species/provider list or split a parent total. Quantitative screening evidence must fit each actual exchange; a former family interval cannot be copied or divided into child ranges. Further actual identities not fully specified by the conditional children require mandatory refinement and prevent dataset completion; this requirement is not itself a flow exchange. Actual composition/state/classification/receiver differences require separate records, no presumed hazard/emission; applied/retained/captured/released pools disjoint. | `cp_residuals`; actual independent records and identity/unit evidence |
| `refine_airborne_particulate` | actual independently refined exchanges | Preserve this actual collection and closure scope as a mandatory dataset-production requirement: Quantify exact material/size-specific release by monitoring or a validated factor matched to actual cutting, fill handling or compaction activity and controls. Specify receiving air subcompartment. Captured dust is waste; excavation-provider releases and unexplained mass differences are excluded. Calculation rule: release_normalize. Range evidence need: Need composition/size fraction, actual task activity, wetting/enclosure/capture and matched measurement/factor; no total-dust-to-PVC/PM split or universal interval. Independently establish every actual identity, state, real provider/receiver and exactly one exchange property/unit before constructing its flow card. Each actual exchange requires its own recorded quantity and applicable method, uncertainty and custody/fate coverage. Auxiliary CP units do not authorize extra exchange views. Actual occurrence unknown is not zero; never invent a material/species/provider list or split a parent total. Quantitative screening evidence must fit each actual exchange; a former family interval cannot be copied or divided into child ranges. Further actual identities not fully specified by the conditional children require mandatory refinement and prevent dataset completion; this requirement is not itself a flow exchange. Actual substance, disjoint particle-size fraction and air/water/soil receiving compartment; matched measurement or species/activity factor, whole-fluid composition/fate audit, capture and uncertainty; unknown is not zero. | `cp_residuals`; actual independent records and identity/unit evidence |
| `refine_other_evidenced_species_release` | actual independently refined exchanges | Preserve this actual collection and closure scope as a mandatory dataset-production requirement: Instantiate only an identified chemical species and actual medium/subcompartment. Measure its mass or use verified composition, applied activity and matched release/fate factor; reconcile installed film, captured residue and recipient transfer. Air, water and soil are separate exchanges; recipient wastewater is not elementary release. Calculation rule: release_normalize. Range evidence need: Need actual approved lubricant/cleaner SDS, applied mass, species, medium, control and partition/factor evidence. Gasket joining alone implies neither chemical identity nor release quantity. Independently establish every actual identity, state, real provider/receiver and exactly one exchange property/unit before constructing its flow card. Each actual exchange requires its own recorded quantity and applicable method, uncertainty and custody/fate coverage. Auxiliary CP units do not authorize extra exchange views. Actual occurrence unknown is not zero; never invent a material/species/provider list or split a parent total. Quantitative screening evidence must fit each actual exchange; a former family interval cannot be copied or divided into child ranges. Further actual identities not fully specified by the conditional children require mandatory refinement and prevent dataset completion; this requirement is not itself a flow exchange. Actual substance, disjoint particle-size fraction and air/water/soil receiving compartment; matched measurement or species/activity factor, whole-fluid composition/fate audit, capture and uncertainty; unknown is not zero. | `cp_residuals`; actual independent records and identity/unit evidence |
| `atomic_exchange_identity_unit` | all inventory rows | Each concrete flow card identifies exactly one actual independently supplied product/SKU/formulation, complete assembly, complete single-function or genuine complete bounded provider service, actual waste composite/state/receiver, or substance/size/receiving medium, with exactly one property and unit. Different actual identities require independent quantities and records, not a summed family exchange. A complete product/carrier includes its contents once. Same unchanged SKU/state usable supply/return pairs and matched physical internal send/receive pairs use the same selected property/unit; kg and count or MJ and kWh auxiliaries are nonadditive measurements, never duplicate exchanges. Missing identity/occurrence/quantity/native reference is a gap, not zero. Any pooled denominator must retain the original accepted configuration strata, state/gate and causal attribution; do not divide unlike circuits, routes, products or jobs as if they were equivalent. | actual identity, unit, custody and independent quantity evidence |
| `asset_final_normalization_once` | all inventory rows | An asset-equivalent formula already ending in division by N, D or A is the final quantity per reference flow. Its complete-life fraction and accepted-output normalization constitute the same normalization operation as the general normalization rule; never divide it by that denominator again. Apply the complete-life upstream burden exactly once. Actual complete provider event counts remain event quantities, not owned-asset fractions. | actual identity, unit, custody and independent quantity evidence |

## 9. Validation Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| validate_scope_gate | reference product | Require declared external endpoints, approved six-inch gasketed DR35 specification and trench/temporaryworks owners. Check exposed-joint water test and concealment approval precede full cover; full cover, compaction, bare-ground grade and final signature precede accepted output. Do not apply air/gas testing or solvent-route cure conditions. |  |
| validate_reference | accepted_external_drain_connection | Verify D > 0 under reference_path and cp_acceptance. Include fitting path once, no socket overlap or cleanout access riser; reject gross-cut substitution, duplicate tests and retired failed pieces. All card numerators use the same accepted-job D. |  |
| validate_rework | `rejected_joint_components_joint_cutout`; `rejected_joint_components_separate_seal`; external_drain_install | Link damaged/misaligned/leaking/displaced-seal joint or failed fill/grade event to its original resource issue, correction/reseat/replacement, test/reapproval and final path/phase ID. Classify real usable return, nonusable waste and captured residue with recipients; internal correction without exit is an event. Keep correction burdens and exclude failed work from D. |  |
| validate_quantities | all inventory rows | Require actual SKU/state/recipient instances with compatible units, linked node-owned protocol, raw numerator and conversion evidence. Check fill phases and integral/replacement seals once; water batches/constituents and retained/recipient/environmental states exclusive. Do not turn imbalance into dust, evaporation or chemical release. |  |
| validate_assets | `owned_equipment_attribution_pump`; `owned_equipment_attribution_compactor`; hired_support_service | Review all consumers/periods, lifecycle events and maintenance dataset boundary, exact attribution and uncertainty. Prevent rented/owned, manufacture/replacement and recharge/use overlap. Unsupported hourly service and unknown remaining life/termination remain explicit blockers to finalized attribution. |  |
| validate_identity_evidence | all inventory rows | Final downstream exchanges require verified concrete identities and property/unit compatibility. Candidate names are not binding. Resolve exact Energy support for electricity and Duration support for a real hourly service before using those exchanges. Keep each role-specific range need visible; approximate shipping points and sample design notes are not observed quantity intervals or project approval. |  |
| `atomization_gasketed_fittings_and_interfaces_complete` | `gasketed_fittings_and_interfaces_elbow`; `gasketed_fittings_and_interfaces_branch`; `gasketed_fittings_and_interfaces_terminal`; `gasketed_fittings_and_interfaces_cleanout` | Require independent actual quantity, identity/state/gate and one property/unit for each applicable exchange in this scope; preserve full original protocol, normalization, stock, returns, waste/releases and shared-resource ownership. Reject completion on an unknown required child, unsupported native reference or missing quantity; evidenced nonoccurrence is separate from missing data. No family-total allocation, copied family Range or duplicate carrier/constituent/bundled-part exchange. Completion requires satisfying `refine_gasketed_fittings_and_interfaces` with actual records; unresolved required expansion blocks the dataset. | `charlotte-dr35`; `charlotte-plastics-manual`; `seattle-side-sewer-notes-2024` |
| `atomization_imported_approved_fill_complete` | actual independently refined exchanges | Require independent actual quantity, identity/state/gate and one property/unit for each applicable exchange in this scope; preserve full original protocol, normalization, stock, returns, waste/releases and shared-resource ownership. Reject completion on an unknown required child, unsupported native reference or missing quantity; evidenced nonoccurrence is separate from missing data. No family-total allocation, copied family Range or duplicate carrier/constituent/bundled-part exchange. Completion requires satisfying `refine_imported_approved_fill` with actual records; unresolved required expansion blocks the dataset. | `charlotte-plastics-manual`; `charlotte-underground`; `seattle-side-sewer-notes-2024` |
| `atomization_cleaning_and_protection_consumables_complete` | actual independently refined exchanges | Require independent actual quantity, identity/state/gate and one property/unit for each applicable exchange in this scope; preserve full original protocol, normalization, stock, returns, waste/releases and shared-resource ownership. Reject completion on an unknown required child, unsupported native reference or missing quantity; evidenced nonoccurrence is separate from missing data. No family-total allocation, copied family Range or duplicate carrier/constituent/bundled-part exchange. Completion requires satisfying `refine_cleaning_and_protection_consumables` with actual records; unresolved required expansion blocks the dataset. | `charlotte-plastics-manual` |
| `atomization_incoming_packaging_complete` | actual independently refined exchanges | Require independent actual quantity, identity/state/gate and one property/unit for each applicable exchange in this scope; preserve full original protocol, normalization, stock, returns, waste/releases and shared-resource ownership. Reject completion on an unknown required child, unsupported native reference or missing quantity; evidenced nonoccurrence is separate from missing data. No family-total allocation, copied family Range or duplicate carrier/constituent/bundled-part exchange. Completion requires satisfying `refine_incoming_packaging` with actual records; unresolved required expansion blocks the dataset. |  |
| `atomization_owned_equipment_attribution_complete` | `owned_equipment_attribution_pump`; `owned_equipment_attribution_compactor` | Require independent actual quantity, identity/state/gate and one property/unit for each applicable exchange in this scope; preserve full original protocol, normalization, stock, returns, waste/releases and shared-resource ownership. Reject completion on an unknown required child, unsupported native reference or missing quantity; evidenced nonoccurrence is separate from missing data. No family-total allocation, copied family Range or duplicate carrier/constituent/bundled-part exchange. Completion requires satisfying `refine_owned_equipment_attribution` with actual records; unresolved required expansion blocks the dataset. |  |
| `atomization_usable_stock_returns_complete` | `usable_stock_returns_pipe`; `usable_stock_returns_gasket`; `usable_stock_returns_lubricant` | Require independent actual quantity, identity/state/gate and one property/unit for each applicable exchange in this scope; preserve full original protocol, normalization, stock, returns, waste/releases and shared-resource ownership. Reject completion on an unknown required child, unsupported native reference or missing quantity; evidenced nonoccurrence is separate from missing data. No family-total allocation, copied family Range or duplicate carrier/constituent/bundled-part exchange. Completion requires satisfying `refine_usable_stock_returns` with actual records; unresolved required expansion blocks the dataset. |  |
| `atomization_dry_nonusable_residuals_complete` | `dry_nonusable_residuals_pipe_offcut` | Require independent actual quantity, identity/state/gate and one property/unit for each applicable exchange in this scope; preserve full original protocol, normalization, stock, returns, waste/releases and shared-resource ownership. Reject completion on an unknown required child, unsupported native reference or missing quantity; evidenced nonoccurrence is separate from missing data. No family-total allocation, copied family Range or duplicate carrier/constituent/bundled-part exchange. Completion requires satisfying `refine_dry_nonusable_residuals` with actual records; unresolved required expansion blocks the dataset. |  |
| `atomization_rejected_joint_components_complete` | `rejected_joint_components_joint_cutout`; `rejected_joint_components_separate_seal` | Require independent actual quantity, identity/state/gate and one property/unit for each applicable exchange in this scope; preserve full original protocol, normalization, stock, returns, waste/releases and shared-resource ownership. Reject completion on an unknown required child, unsupported native reference or missing quantity; evidenced nonoccurrence is separate from missing data. No family-total allocation, copied family Range or duplicate carrier/constituent/bundled-part exchange. Completion requires satisfying `refine_rejected_joint_components` with actual records; unresolved required expansion blocks the dataset. | `charlotte-plastics-manual` |
| `atomization_contaminated_consumable_residuals_complete` | `contaminated_consumable_residuals_container`; `contaminated_consumable_residuals_wipe`; `contaminated_consumable_residuals_loose_formulation` | Require independent actual quantity, identity/state/gate and one property/unit for each applicable exchange in this scope; preserve full original protocol, normalization, stock, returns, waste/releases and shared-resource ownership. Reject completion on an unknown required child, unsupported native reference or missing quantity; evidenced nonoccurrence is separate from missing data. No family-total allocation, copied family Range or duplicate carrier/constituent/bundled-part exchange. Completion requires satisfying `refine_contaminated_consumable_residuals` with actual records; unresolved required expansion blocks the dataset. |  |
| `atomization_airborne_particulate_complete` | actual independently refined exchanges | Require independent actual quantity, identity/state/gate and one property/unit for each applicable exchange in this scope; preserve full original protocol, normalization, stock, returns, waste/releases and shared-resource ownership. Reject completion on an unknown required child, unsupported native reference or missing quantity; evidenced nonoccurrence is separate from missing data. No family-total allocation, copied family Range or duplicate carrier/constituent/bundled-part exchange. Completion requires satisfying `refine_airborne_particulate` with actual records; unresolved required expansion blocks the dataset. |  |
| `atomization_other_evidenced_species_release_complete` | actual independently refined exchanges | Require independent actual quantity, identity/state/gate and one property/unit for each applicable exchange in this scope; preserve full original protocol, normalization, stock, returns, waste/releases and shared-resource ownership. Reject completion on an unknown required child, unsupported native reference or missing quantity; evidenced nonoccurrence is separate from missing data. No family-total allocation, copied family Range or duplicate carrier/constituent/bundled-part exchange. Completion requires satisfying `refine_other_evidenced_species_release` with actual records; unresolved required expansion blocks the dataset. |  |
| `validate_atomic_exchange_unit_and_normalization` | all inventory rows | Each concrete flow card identifies exactly one actual independently supplied product/SKU/formulation, complete assembly, complete single-function or genuine complete bounded provider service, actual waste composite/state/receiver, or substance/size/receiving medium, with exactly one property and unit. Different actual identities require independent quantities and records, not a summed family exchange. A complete product/carrier includes its contents once. Same unchanged SKU/state usable supply/return pairs and matched physical internal send/receive pairs use the same selected property/unit; kg and count or MJ and kWh auxiliaries are nonadditive measurements, never duplicate exchanges. Missing identity/occurrence/quantity/native reference is a gap, not zero. An asset-equivalent formula already ending in division by N, D or A is the final quantity per reference flow. Its complete-life fraction and accepted-output normalization constitute the same normalization operation as the general normalization rule; never divide it by that denominator again. Apply the complete-life upstream burden exactly once. Actual complete provider event counts remain event quantities, not owned-asset fractions. |  |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | foreground_data_package |
| downstream_use | secondary_dataset; background_dataset |
| allowed_use | Matching external six-inch DR35 gasket sanitary-lateral installation with declared starting handoff and complete final gate; downstream process/lifecyclemodel construction preserving this service boundary |
| excluded_use | Indoor pipework, local mains/full civil asset, excavation/road/pavement scope, other pipe/joining routes, incomplete cover-ready work, operational wastewater transport/treatment or design certification |
| required_metadata | Job/site/geography/dates; endpoint datums/authorization; trench/temporaryworks owners; exact pipe/fitting/seal BOM; fill phase/design/soil/load; test and concealment approvals; complete compaction/grade/final signature; D/unique path IDs; supplier/packaging/delivery/asset period boundaries |
| required_quality_disclosure | Actual measurement coverage and uncertainty; omitted/unresolved occurrences, identity/support and role-specific range gaps; factor applicability; water/source-pool closure; resource attribution and maintenance/remaining-use uncertainty; no candidate identity asserted as a final binding |
| update_trigger | Changed pipe/joint/fill or equipment route; actual design/site/gate change; new measurements or supplier/identity evidence; changed maintenance/lifetime boundary or guidance |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| cpc3-current | official_guidance | https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Exp_Notes_30Jun2025.pdf | Current classification inclusion/exclusion: PDF p294 54622 external drains and 54621 indoor exclusion; p286 54251 local mains |
| charlotte-dr35 | handbook | https://www.charlottepipe.com/uploads/documents/technical/FO-SUB-PVC-DR-35.pdf | p1 (4-7-26): DR35 gasket specification, supplied seals, water-only test and approximate shipping points |
| charlotte-plastics-manual | handbook | https://www.charlottepipe.com/uploads/documents/technical/TM-PL.pdf | PDF pp70–73, June 5 2026: gasket assembly, conditional underground support/backfill and visible-joint test/approval; not adjacent CPVC-specific rules |
| charlotte-underground | handbook | https://www.charlottepipe.com/uploads/documents/technical/VE_PVCUnderground2015.pdf | pp1–2: actual bedding/haunch/backfill support and compaction responsibility; no Schedule40 example quantity adopted |
| seattle-side-sewer-notes-2024 | official_guidance | https://www.seattle.gov/documents/Departments/SPU/Engineering/DSG/2024/3GSideSewers.pdf | February 2024 Appendix3G sample: D3034 SDR35 gasketed side-sewer option, approval before cover, as-built record; engineer adaptation required |
