---
pcr_id: pcr.constructions-and-construction-services.construction-services.water-well-drilling-services
language: en-US
status: candidate
sync_with: pcr.zh-CN.md
---

# Air-rotary bedrock water-well construction and development services

## 1. Scope and Applicability

This PCR covers first construction of a non-flowing consolidated-bedrock private water well using air-rotary drilling, with overburden casing/sealing and wellhead completion, actual development, temporary yield testing and construction-stage disinfection/flush/sampling. The deliverable is the accepted pump-free civil well. Actual jurisdiction, qualified driller and authorized site-specific design/test instructions govern construction acceptance.

Exclude unconsolidated screened wells, flowing artesian wells, exploration/geothermal/oil/gas wells, intentional hydrofracturing, later rehabilitation, permanent pumps/distribution/treatment and routine water supply. FRTR is used only for air-rotary mechanism and associated material/residual questions, not as a drinking-water-well design specification. Actual incidental formation effects remain disclosed.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.constructions-and-construction-services.construction-services.water-well-drilling-services |
| classification_refs | cpc:3.0:54341 |
| covered_products | Qualified pump-free first air-rotary bedrock civil well construction/development service at actual site and acceptance gate. |
| excluded_products | Unconsolidated screened/flowing/geothermal/exploration/oil/gas wells; hydrofracturing; rehabilitation; permanently pumped water system and operating water abstraction. |
| representative_product | One actual non-flowing private bedrock well with accepted casing/seal/wellhead, development and construction-stage tests/records. |
| production_route | Actual site/design → air-rotary formation removal and captured residuals → independent casing/seal/wellhead integration → development/temporary tests/initial disinfection/flush/sampling → signed pump-free civil gate; actual failures loop or close lawfully. |
| market_state | First-construction civil service, site-bound and accepted; no sold groundwater or guaranteed drinking-water approval. |


## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Construction and development of one qualified non-flowing consolidated-bedrock private water well by air rotary, at pump-free civil handover. |
| How much | 1 Item(s) accepted actual civil well; actual depth and diameter remain qualifiers, not equivalent well counts. |
| How well | Actual authorized design/site and construction-stage yield/development/disinfection/flush/sample acceptance, with sealed overburden casing and protected wellhead; civil acceptance is not drinking-water-service approval. |
| How long or cycle | One first-construction job from mobilization through final civil gate and attributable failed-hole closure/repair/retest. Link asset production/commissioning, job use/maintenance/replacement and retirement across actual reporting periods and other jobs; exclude later operating-water life. |
| reference_flow_link | `accepted_civil_well` |

| Field | Value |
| --- | --- |
| Reference amount | 1 |
| Reference product flow | Accepted air-rotary bedrock civil water-well construction and development service |
| Reference flow property | Number of items `01846770-4cfe-4a25-8ad9-919d8d378345` |
| Reference unit group | Units of items `5beb6eed-33a9-47b8-9ede-1dfe8f679159` |
| Reference unit | Item(s) |
| Required qualifiers | site and jurisdiction; non-flowing consolidated-bedrock geology/hydrogeology; actual bit/hammer route; well/bore identifiers; drilled depth/diameters and overburden profile; casing grade/length/diameter/joints; approved grout and placement; cap/seals/wellhead arrangement; actual development method/endpoint; temporary pump and test method/flow/duration/drawdown/recovery; construction disinfection/dilution/contact/flush/sample protocol and results; failed-hole disposition; signed pump-free civil gate; later permanent-pump and water-service approval owner |


## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| count_reference | accepted_civil_well | Number of items `01846770-4cfe-4a25-8ad9-919d8d378345` | Item(s) | Count one actual accepted civil well at exact qualified gate. Depth, diameter, yield and capacity cannot convert incompatible jobs to equivalent counts. |
| mass_basis | all mass inventory rows | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Retain actual wet/dry/solution/substance basis; measured volume to mass requires actual temperature/state and documented density; product solution mass is not active substance mass. |
| physical_units | support_electricity; `support_assets_rig`; `support_assets_compressor`; `support_assets_temporary_pump`; support_transport; `support_services_drilling`; `support_services_completion` | Actual compatible property unresolved until verified | kWh; h; tkm; actual provider unit | Preserve actual physical energy/time/transport/provider measurements and independently verify support chain before final exchanges; no Count conversion for tool hours, samples, air volume or energy. |


## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Actual authorized non-flowing bedrock site, native formation/aquifer and declared access/enabling-work interfaces before first well construction. |
| starting_condition_role | Environmental formation/resource stock and explicit approved site/design interfaces; not a prebuilt well or invented zero-burden new enabling works. |
| product_classification_scope | Pump-free air-rotary civil well service narrower than CPC water-well drilling including possible pump/piping work. |
| recursive_input_rule | A same-category externally supplied well-construction scope is a bounded upstream service with actual gate/owner/quantity and coverage; do not recreate its covered foreground inventory or assume recursion ends at an unverified service label. |
| upstream_dataset_requirement | Actual supply-state casing/grout/components, energy/fuel and bounded service/asset datasets with provider coverage and missing phases stated. |
| disclosure | Actual geometry/geology/design/jurisdiction, interfaces, source-water/cuttings custody, tests/gate, failures, providers and asset periods/phases/attribution; later pump/system/water-service duties. |

### Boundary Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `scope_eligibility` | foreground_system_boundary | This PCR covers first construction of a non-flowing consolidated-bedrock private water well using air-rotary drilling, with overburden casing/sealing and wellhead completion, actual development, temporary yield testing and construction-stage disinfection/flush/sampling. The deliverable is the accepted pump-free civil well. Actual jurisdiction, qualified driller and authorized site-specific design/test instructions govern construction acceptance. Exclude unconsolidated screened wells, flowing artesian wells, exploration/geothermal/oil/gas wells, intentional hydrofracturing, later rehabilitation, permanent pumps/distribution/treatment and routine water supply. FRTR is used only for air-rotary mechanism and associated material/residual questions, not as a drinking-water-well design specification. Actual incidental formation effects remain disclosed. |  |
| well_route | all processes | Reject flowing artesian, unconsolidated screened, geothermal/exploration/oil/gas, intentional hydrofracturing, later rehabilitation and routine water abstraction. Project outside this route requires another methodology. |  |
| start_interface | bore_removal | Declare actual access/site/hydrogeology/jurisdiction/utility clearance and authorized well design/driller. Include new job-specific enabling works or an explicit measured upstream bounded service with responsible provider; no unowned new work. In-situ formation/aquifer is environmental starting stock without invented upstream production. |  |
| removal_handoff | bore_removal | The removal source is the actual overburden and consolidated formation. Responsibility ends at documented drilled bore/formation state and captured cuttings/water handoff; residual handling remains accountable. It is independent of completion because geological removal/source capture has its own logs and custody, while the next node integrates supplied casing/seal/wellhead components. | frtr-air-rotary |
| completion_gate | well_completion | Independent casing/sealing/wellhead integration receives casing/couplings, compatible grout and cap/seals; joining/placement produces the actual approved sanitary civil completion for development. Document placement/cure evidence required by actual design, not universal guidance dosages. Embedded grout mixing is included without inventing an extra product handoff. | massdep-private-well-guidelines |
| test_handover | develop_accept | The independent develop_accept responsibility receives the completed but undeveloped and initially undisinfected civil well from well_completion. It removes fines/develops and initially disinfects this pre-treatment state, with actual temporary tests/flush/sampling, to hand over the qualified accepted pump-free civil well; captured sediment, managed liquid and real characterized releases remain distinct residual destinations. Develop and flush actual drilling fines before temporary pumping/yield test. Retain actual water-level, flow/time, acceptance and initial driller disinfection/flush/sample records and all repeat work. Name later permanent-pump installer/system disinfection and water-service approval owner; no permanent pump, distribution or treatment plant is delivered by this reference. | massdep-private-well-guidelines |
| shared_cycle | bore_removal | The lead bore_removal operator owns shared whole-job purchases, providers, logistics and asset register once, including support consumed in well_completion and develop_accept. Allocate by actual node_id/event causal task use; there is no independent support-process output. Link rig/compressor/drill/test pump/tools to all three consuming responsibilities, other jobs and reporting periods. Account asset production, commissioning/mobilization, use/idle, maintenance/replacement and removal/retirement using bounded verified provider coverage or complete-life attribution. Excluded provider phases must be supplemented. |  |
| reject_paths | all processes | Failed/contaminated/inadequate bore routes to actual remedy or lawful closure at bore_removal/well_completion; defective seals/components loop to well_completion; inadequate development/yield or disinfection/sample loops to develop_accept and responsible upstream node. Retain all job-attributable burdens and waste, exclude unresolved rejects from accepted count, close disposition before gate. |  |
| real_exchanges | all processes | Expand conditional umbrellas into each actual material/provider/waste/substance exchange with compatible physical units and verified identity. Do not sum unlike streams or create duplicate receipts/document mirror nodes. Use actual outside custody and environment destinations to determine product/waste/elementary type. |  |


## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| bore_removal | Formation drilling and resource-removal responsibility | required | Always; actual overburden/consolidated-bedrock removal and all attributable attempts | Independent source/removal responsibility: drilled bore and captured cuttings/water handoff to completion/receivers; separate from component integration; lead operator owns whole-job shared purchases/assets/logistics once, attributes actual events among all three responsibilities without a support pseudo-process | Actual drilled intervals/geometry and residual quantities attributable per reference flow |
| well_completion | Casing sealing and wellhead integration | required | Always; actual design may interleave casing/seal work with drilling | Independent assembly/integration of supplied casing/couplings/grout/cap/seals to accepted well-completion gate before development; defects return here | Actual installed casing/seal/wellhead quantities per reference flow |
| develop_accept | Development temporary testing disinfection and civil acceptance | required | Always; actual development/test/disinfection/sample protocols; failures repeat or close | Independent treatment responsibility: completed-but-undeveloped/undisinfected civil well → actual fines removal/development/initial disinfection and tests → qualified accepted pump-free civil well handoff; distinct captured residuals and actual releases; later duty owners | 1 Item(s) accepted civil well per reference flow |


### Process: Formation drilling and resource-removal responsibility (`bore_removal`)

#### Inputs

##### Product flows

###### Externally supplied water injected during air drilling (`drill_injected_water`)

Water supplied across the job boundary for dust/cuttings control or drilling is a purchased product. Record actual source and quality; groundwater entrained by drilling is a separate resource withdrawal. Do not assume a mud-rotary fluid inventory.

- Selected flow: Externally supplied water injected during air drilling
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Record separately metered injected-water mass by source; actual volume requires temperature and documented density before kg conversion.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_drill_water`
- Sources: `frtr-air-rotary`

Range evidence need: Actual injection setting, duration, metered receipts/use and water quality are needed; no universal water-to-depth or fuel ratio is supported.

###### Actual separately supplied DTH hammer lubricant formulation (`drill_additives_hammer_lubricant`)

Record only this independently identified actual separately supplied dth hammer lubricant formulation at its actual state and supply or receiving gate. Only actual DTH lubrication including operator-owned compressor-carried lubricant outside already included provider material. Preserve actual SKU/formulation or dispatched composite, ownership, receiver/provider and every original/rework event. Evidence for nonoccurrence is required; missing identity, quantity or condition remains a completion gap. No amount or occurrence is inferred from the other child flows. Complete supplied products and contaminated carriers include their contained parts/material once.

- Selected flow: Actual separately supplied DTH hammer lubricant formulation
- Flow property / unit: Mass / kg
- Amount rule: Independently weigh the actual SKU/stream net mass after tare for this child; retain its own issue, return, stock and fate records; normalize the attributable numerator once by the original accepted-output denominator.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_drill_chem`
- Sources: `frtr-air-rotary`

Range evidence need: Establish independent, matching-identity quantity evidence and uncertainty for this actual exchange. A family total or former family interval is not a child quantity, allocation share or automatically valid child QA range.

###### Actual separately supplied approved drilling-foam formulation (`drill_additives_foam`)

Record only this independently identified actual separately supplied approved drilling-foam formulation at its actual state and supply or receiving gate. Only actual approved foam product used and independently supplied; no foam inferred from drilling route. Preserve actual SKU/formulation or dispatched composite, ownership, receiver/provider and every original/rework event. Evidence for nonoccurrence is required; missing identity, quantity or condition remains a completion gap. No amount or occurrence is inferred from the other child flows. Complete supplied products and contaminated carriers include their contained parts/material once.

- Selected flow: Actual separately supplied approved drilling-foam formulation
- Flow property / unit: Mass / kg
- Amount rule: Independently weigh the actual SKU/stream net mass after tare for this child; retain its own issue, return, stock and fate records; normalize the attributable numerator once by the original accepted-output denominator.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_drill_chem`
- Sources: `frtr-air-rotary`

Range evidence need: Establish independent, matching-identity quantity evidence and uncertainty for this actual exchange. A family total or former family interval is not a child quantity, allocation share or automatically valid child QA range.

###### Actual separately supplied construction and temporary test electricity (`support_electricity`)

Record actual provider/voltage/grid or generation boundary and event-metered tool, compressor/test-pump electricity as used. Keep later permanent-pump/house energy outside. Charging electricity counted once; onsite generator fuel is not also a purchased grid input.

- Selected flow: Actual separately supplied construction and temporary test electricity
- Flow property / unit: Energy / kWh
- Amount rule: Use meter differences for actual in-scope tasks and disclose shared-meter attribution; preserve actual kWh with unresolved Energy support rather than replace it by a count.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_energy`

Range evidence need: Actual metering, supply mix/time and attributable tool/test use are required; no universal kWh per well or rated-power-hours assumption.

###### Complete bounded drilling-rig provision service (`support_assets_rig`)

Record only this independently identified complete bounded drilling-rig provision service at its actual state and supply or receiving gate. Only an actual single complete provider function with a real h reference and matching lifecycle/resource scope activates this card; no price/event conversion. Preserve actual SKU/formulation or dispatched composite, ownership, receiver/provider and every original/rework event. Evidence for nonoccurrence is required; missing identity, quantity or condition remains a completion gap. No amount or occurrence is inferred from the other child flows. Complete supplied products and contaminated carriers include their contained parts/material once.

- Selected flow: Complete bounded drilling-rig provision service
- Flow property / unit: Duration / h
- Amount rule: Independently establish actual attributable complete service h for this exact provider/resource and physical function, including applicable idle and correction events across bore_removal, well_completion, develop_accept and all other consumer jobs/periods under one lead ledger owner. Final h quantity = actual attributable h / actual accepted civil-well count of the same declared route/gate. For compatible owned per-h resource view, complete-life phase burden per h derives from actual full-life service h across all consumers; do not multiply the h quantity by a second Count asset-equivalent fraction. Supplement uncovered capital/maintenance/removal once; do not add full provider service and all its owned inputs.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_assets`

Range evidence need: Establish independent, matching-identity quantity evidence and uncertainty for this actual exchange. A family total or former family interval is not a child quantity, allocation share or automatically valid child QA range.

###### Complete bounded drilling-compressor provision service (`support_assets_compressor`)

Record only this independently identified complete bounded drilling-compressor provision service at its actual state and supply or receiving gate. Only an actual single complete provider function with a real h reference and matching lifecycle/resource scope activates this card; no price/event conversion. Preserve actual SKU/formulation or dispatched composite, ownership, receiver/provider and every original/rework event. Evidence for nonoccurrence is required; missing identity, quantity or condition remains a completion gap. No amount or occurrence is inferred from the other child flows. Complete supplied products and contaminated carriers include their contained parts/material once.

- Selected flow: Complete bounded drilling-compressor provision service
- Flow property / unit: Duration / h
- Amount rule: Independently establish actual attributable complete service h for this exact provider/resource and physical function, including applicable idle and correction events across bore_removal, well_completion, develop_accept and all other consumer jobs/periods under one lead ledger owner. Final h quantity = actual attributable h / actual accepted civil-well count of the same declared route/gate. For compatible owned per-h resource view, complete-life phase burden per h derives from actual full-life service h across all consumers; do not multiply the h quantity by a second Count asset-equivalent fraction. Supplement uncovered capital/maintenance/removal once; do not add full provider service and all its owned inputs.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_assets`

Range evidence need: Establish independent, matching-identity quantity evidence and uncertainty for this actual exchange. A family total or former family interval is not a child quantity, allocation share or automatically valid child QA range.

###### Complete bounded temporary well-pump provision service (`support_assets_temporary_pump`)

Record only this independently identified complete bounded temporary well-pump provision service at its actual state and supply or receiving gate. Only an actual single complete provider function with a real h reference and matching lifecycle/resource scope activates this card; no price/event conversion. Preserve actual SKU/formulation or dispatched composite, ownership, receiver/provider and every original/rework event. Evidence for nonoccurrence is required; missing identity, quantity or condition remains a completion gap. No amount or occurrence is inferred from the other child flows. Complete supplied products and contaminated carriers include their contained parts/material once.

- Selected flow: Complete bounded temporary well-pump provision service
- Flow property / unit: Duration / h
- Amount rule: Independently establish actual attributable complete service h for this exact provider/resource and physical function, including applicable idle and correction events across bore_removal, well_completion, develop_accept and all other consumer jobs/periods under one lead ledger owner. Final h quantity = actual attributable h / actual accepted civil-well count of the same declared route/gate. For compatible owned per-h resource view, complete-life phase burden per h derives from actual full-life service h across all consumers; do not multiply the h quantity by a second Count asset-equivalent fraction. Supplement uncovered capital/maintenance/removal once; do not add full provider service and all its owned inputs.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_assets`

Range evidence need: Establish independent, matching-identity quantity evidence and uncertainty for this actual exchange. A family total or former family interval is not a child quantity, allocation share or automatically valid child QA range.

###### Actual separate freight mobilization demobilization and waste haulage services (`support_transport`)

Instantiate actual provider/mode/route/load service only where not included in material, asset or waste treatment supply. Track rig mobilization/demobilization and attributable empty return legs; own vehicle operations are recorded by real fuel/asset inventory and not duplicated by a freight dataset.

- Selected flow: Actual separate freight mobilization demobilization and waste haulage services
- Flow property / unit: mass*distance / t*km
- Amount rule: Use weighed load mass in tonnes and actual leg distance, with provider empty-leg/shared-load treatment declared; preserve trips/vehicle-km where they are the actual service basis until a compatible dataset is verified.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_transport`

Range evidence need: Actual route, payload, leg direction, empty/shared loads and provider units/coverage are required; no default transport distance or arbitrary count conversion.

###### Complete independently bounded specialist drilling service (`support_services_drilling`)

Record only this independently identified complete independently bounded specialist drilling service at its actual state and supply or receiving gate. Only an actual single complete provider function with a real h reference and matching lifecycle/resource scope activates this card; no price/event conversion. Preserve actual SKU/formulation or dispatched composite, ownership, receiver/provider and every original/rework event. Evidence for nonoccurrence is required; missing identity, quantity or condition remains a completion gap. No amount or occurrence is inferred from the other child flows. Complete supplied products and contaminated carriers include their contained parts/material once.

- Selected flow: Complete independently bounded specialist drilling service
- Flow property / unit: Duration / h
- Amount rule: Independently establish actual attributable complete service h for this exact provider/resource and physical function, including applicable idle and correction events across bore_removal, well_completion, develop_accept and all other consumer jobs/periods under one lead ledger owner. Final h quantity = actual attributable h / actual accepted civil-well count of the same declared route/gate. For compatible owned per-h resource view, complete-life phase burden per h derives from actual full-life service h across all consumers; do not multiply the h quantity by a second Count asset-equivalent fraction. Supplement uncovered capital/maintenance/removal once; do not add full provider service and all its owned inputs.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_services`

Range evidence need: Establish independent, matching-identity quantity evidence and uncertainty for this actual exchange. A family total or former family interval is not a child quantity, allocation share or automatically valid child QA range.

###### Complete independently bounded specialist well-completion service (`support_services_completion`)

Record only this independently identified complete independently bounded specialist well-completion service at its actual state and supply or receiving gate. Only an actual single complete provider function with a real h reference and matching lifecycle/resource scope activates this card; no price/event conversion. Preserve actual SKU/formulation or dispatched composite, ownership, receiver/provider and every original/rework event. Evidence for nonoccurrence is required; missing identity, quantity or condition remains a completion gap. No amount or occurrence is inferred from the other child flows. Complete supplied products and contaminated carriers include their contained parts/material once.

- Selected flow: Complete independently bounded specialist well-completion service
- Flow property / unit: Duration / h
- Amount rule: Independently establish actual attributable complete service h for this exact provider/resource and physical function, including applicable idle and correction events across bore_removal, well_completion, develop_accept and all other consumer jobs/periods under one lead ledger owner. Final h quantity = actual attributable h / actual accepted civil-well count of the same declared route/gate. For compatible owned per-h resource view, complete-life phase burden per h derives from actual full-life service h across all consumers; do not multiply the h quantity by a second Count asset-equivalent fraction. Supplement uncovered capital/maintenance/removal once; do not add full provider service and all its owned inputs.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_services`

Range evidence need: Establish independent, matching-identity quantity evidence and uncertainty for this actual exchange. A family total or former family interval is not a child quantity, allocation share or automatically valid child QA range.

###### Actual separately supplied drill wear bit (`support_materials_wear_bit`)

Record only this independently identified actual separately supplied drill wear bit at its actual state and supply or receiving gate. Only an independently supplied or independently dispatched actual identified product/stream activates this card, outside other complete-product/provider coverage. Preserve actual SKU/formulation or dispatched composite, ownership, receiver/provider and every original/rework event. Evidence for nonoccurrence is required; missing identity, quantity or condition remains a completion gap. No amount or occurrence is inferred from the other child flows. Complete supplied products and contaminated carriers include their contained parts/material once.

- Selected flow: Actual separately supplied drill wear bit
- Flow property / unit: Mass / kg
- Amount rule: Independently weigh the actual SKU/stream net mass after tare for this child; retain its own issue, return, stock and fate records; normalize the attributable numerator once by the original accepted-output denominator.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_support_materials`
- Sources: `frtr-air-rotary`

Range evidence need: Establish independent, matching-identity quantity evidence and uncertainty for this actual exchange. A family total or former family interval is not a child quantity, allocation share or automatically valid child QA range.

###### Actual separately supplied equipment-maintenance oil formulation (`support_materials_maintenance_oil`)

Record only this independently identified actual separately supplied equipment-maintenance oil formulation at its actual state and supply or receiving gate. Only actual separate maintenance-oil product, not DTH hammer lubricant in `drill_additives_hammer_lubricant`; `drill_additives_foam` and not included support-asset replacement/maintenance. Preserve actual SKU/formulation or dispatched composite, ownership, receiver/provider and every original/rework event. Evidence for nonoccurrence is required; missing identity, quantity or condition remains a completion gap. No amount or occurrence is inferred from the other child flows. Complete supplied products and contaminated carriers include their contained parts/material once.

- Selected flow: Actual separately supplied equipment-maintenance oil formulation
- Flow property / unit: Mass / kg
- Amount rule: Independently weigh the actual SKU/stream net mass after tare for this child; retain its own issue, return, stock and fate records; normalize the attributable numerator once by the original accepted-output denominator.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_support_materials`
- Sources: `frtr-air-rotary`

Range evidence need: Establish independent, matching-identity quantity evidence and uncertainty for this actual exchange. A family total or former family interval is not a child quantity, allocation share or automatically valid child QA range.

###### Actual separately supplied equipment-maintenance cleaner formulation (`support_materials_cleaner`)

Record only this independently identified actual separately supplied equipment-maintenance cleaner formulation at its actual state and supply or receiving gate. Only an independently supplied or independently dispatched actual identified product/stream activates this card, outside other complete-product/provider coverage. Preserve actual SKU/formulation or dispatched composite, ownership, receiver/provider and every original/rework event. Evidence for nonoccurrence is required; missing identity, quantity or condition remains a completion gap. No amount or occurrence is inferred from the other child flows. Complete supplied products and contaminated carriers include their contained parts/material once.

- Selected flow: Actual separately supplied equipment-maintenance cleaner formulation
- Flow property / unit: Mass / kg
- Amount rule: Independently weigh the actual SKU/stream net mass after tare for this child; retain its own issue, return, stock and fate records; normalize the attributable numerator once by the original accepted-output denominator.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_support_materials`
- Sources: `frtr-air-rotary`

Range evidence need: Establish independent, matching-identity quantity evidence and uncertainty for this actual exchange. A family total or former family interval is not a child quantity, allocation share or automatically valid child QA range.

###### Actual separately supplied construction-stage laboratory analysis service (`laboratory_analysis`)

Conditional: only actual independently supplied laboratory analyses attributed to construction-stage acceptance/retests are recorded. One Item(s) is one declared actual analysis package/sample service with stated parameters/method; incompatible analysis packages are separate exchanges. Provider-included containers/preservatives/transport remain covered once; no invented laboratory activity when it is outside this stage contract.

- Selected flow: Actual separately supplied construction-stage laboratory analysis service
- Flow property / unit: Number of items `01846770-4cfe-4a25-8ad9-919d8d378345` / Item(s)
- Amount rule: Record actual delivered analysis-package counts by provider/method/sample and responsible test event, including failed/retests; preserve exact included scope and do not convert analyses to hours.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_laboratory`

Range evidence need: Actual laboratory scope/method/package, sample IDs/count and provider coverage are needed; no fixed number or equivalence of tests per well.

###### Actual externally supplied compressed air at its delivery state (`supplied_compressed_air`)

Conditional only where compressed air actually crosses the job boundary as supplied product; declare provider, composition/quality and pressure/temperature/delivery state. Own compressor ambient intake and fuel/assets belong the owned provision route and must not also produce the same externally supplied air burden.

- Selected flow: Actual externally supplied compressed air at its delivery state
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Record delivered mass or convert actual metered state-qualified volume with documented state/composition-specific density; preserve original volume/pressure/temperature and provider scope.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_supplied_air`

Range evidence need: Actual external supply existence, delivery metering/state/density and upstream compression coverage are required; do not assume a purchased air input merely because air rotary is used.

##### Waste flows

##### Elementary flows

###### Groundwater removed from actual aquifer during drilling (`drill_groundwater`)

Groundwater entering and removed from the bore is an environmental resource input, separated from injected purchased water using measured volumes and a disclosed water balance. Identify aquifer/location and withdrawal basis; uncertain separation is a data gap. Aquifer formation has no invented cultivation inventory.

- Selected flow: Groundwater removed from actual aquifer during drilling
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Measured or balanced source-specific withdrawal mass for the drilling events; retain measurement/estimation uncertainty and unrecovered fraction.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_drill_resource`
- Sources: `frtr-air-rotary`

Range evidence need: Actual inflow/withdrawal records and mixed-water source balance are required; do not use final test yield or bore volume as withdrawal.

###### Ambient air intake for the drilling compressor (`ambient_air_intake`)

This records actual environmental intake only where required by the adopted inventory method. Compressor provision, fuel and electricity remain in the lead bore_removal operator. Purchased compressed air, if actually supplied, is separately instantiated under supplied_compressed_air and must not also be treated as ambient intake.

- Selected flow: Ambient air intake for the drilling compressor
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use actual compressor inlet flow and operating-time records with state-specific density, accounting for leakage and measurement basis; report unquantified intake as a gap if required.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_air`
- Sources: `frtr-air-rotary`

Range evidence need: Actual intake state, calibrated flow/time coverage and method inclusion decision are needed; compressor nameplate rating is not continuous measured intake.

#### Outputs

##### Product flows

###### Usable unused hammer lubricant returned outward (`support_returns_hammer_lubricant`)

Record only this independently identified usable unused hammer lubricant returned outward at its actual state and supply or receiving gate. Only an independently supplied or independently dispatched actual identified product/stream activates this card, outside other complete-product/provider coverage. Preserve actual SKU/formulation or dispatched composite, ownership, receiver/provider and every original/rework event. Evidence for nonoccurrence is required; missing identity, quantity or condition remains a completion gap. No amount or occurrence is inferred from the other child flows. Complete supplied products and contaminated carriers include their contained parts/material once.

- Selected flow: Usable unused hammer lubricant returned outward
- Flow property / unit: Mass / kg
- Amount rule: Independently weigh the actual SKU/stream net mass after tare for this child; retain its own issue, return, stock and fate records; normalize the attributable numerator once by the original accepted-output denominator.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_support_balance`

Range evidence need: Establish independent, matching-identity quantity evidence and uncertainty for this actual exchange. A family total or former family interval is not a child quantity, allocation share or automatically valid child QA range.

###### Usable unused drilling-foam product returned outward (`support_returns_foam`)

Record only this independently identified usable unused drilling-foam product returned outward at its actual state and supply or receiving gate. Only an independently supplied or independently dispatched actual identified product/stream activates this card, outside other complete-product/provider coverage. Preserve actual SKU/formulation or dispatched composite, ownership, receiver/provider and every original/rework event. Evidence for nonoccurrence is required; missing identity, quantity or condition remains a completion gap. No amount or occurrence is inferred from the other child flows. Complete supplied products and contaminated carriers include their contained parts/material once.

- Selected flow: Usable unused drilling-foam product returned outward
- Flow property / unit: Mass / kg
- Amount rule: Independently weigh the actual SKU/stream net mass after tare for this child; retain its own issue, return, stock and fate records; normalize the attributable numerator once by the original accepted-output denominator.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_support_balance`

Range evidence need: Establish independent, matching-identity quantity evidence and uncertainty for this actual exchange. A family total or former family interval is not a child quantity, allocation share or automatically valid child QA range.

###### Usable unused drilling bit returned outward (`support_returns_wear_bit`)

Record only this independently identified usable unused drilling bit returned outward at its actual state and supply or receiving gate. Only an independently supplied or independently dispatched actual identified product/stream activates this card, outside other complete-product/provider coverage. Preserve actual SKU/formulation or dispatched composite, ownership, receiver/provider and every original/rework event. Evidence for nonoccurrence is required; missing identity, quantity or condition remains a completion gap. No amount or occurrence is inferred from the other child flows. Complete supplied products and contaminated carriers include their contained parts/material once.

- Selected flow: Usable unused drilling bit returned outward
- Flow property / unit: Mass / kg
- Amount rule: Independently weigh the actual SKU/stream net mass after tare for this child; retain its own issue, return, stock and fate records; normalize the attributable numerator once by the original accepted-output denominator.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_support_balance`

Range evidence need: Establish independent, matching-identity quantity evidence and uncertainty for this actual exchange. A family total or former family interval is not a child quantity, allocation share or automatically valid child QA range.

##### Waste flows

###### Captured drilling cuttings and entrained solids sent to a named receiver (`wet_cuttings`)

The removal node takes responsibility for excavated overburden/bedrock and hands captured cuttings to actual containment and disposal/recovery custody. Record wet mass and solids/water basis, contamination status and each receiver; wet mixture is not a named chemical emission or saleable groundwater product.

- Selected flow: Captured drilling cuttings and entrained solids sent to a named receiver
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use weighed outward loads by actual waste identity; reconcile retained containment, released fines and entrained liquid so liquid is not counted twice.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_cuttings`
- Sources: `frtr-air-rotary`

Range evidence need: Actual weighed loads, moisture/solids characterization, stock and receiver records are needed; no standard cuttings mass per metre or default density is supported.

###### Drilling water or slurry transferred to managed treatment/disposal (`drill_managed_liquid`)

Instantiate each real liquid/slurry waste stream by composition, custody and receiving facility. Exclude liquid already included in wet_cuttings; an onsite discharge to the environment belongs in actual exchanges required by `refine_drill_releases`.

- Selected flow: Drilling water or slurry transferred to managed treatment/disposal
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Measure separate transferred liquid masses or volume with verified density; link container/loading IDs to receiving records.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_drill_liquid`

Range evidence need: Actual source-water split, solids basis, transfer metering and destination are needed; no universal liquid waste fraction is available.

###### Separately collected used drilling-support oil waste (`support_waste_used_oil`)

Record only this independently identified separately collected used drilling-support oil waste at its actual state and supply or receiving gate. Only actual independent whole waste-oil dispatch, not oil already inside contaminated carrier or provider EOL packet. Preserve actual SKU/formulation or dispatched composite, ownership, receiver/provider and every original/rework event. Evidence for nonoccurrence is required; missing identity, quantity or condition remains a completion gap. No amount or occurrence is inferred from the other child flows. Complete supplied products and contaminated carriers include their contained parts/material once.

- Selected flow: Separately collected used drilling-support oil waste
- Flow property / unit: Mass / kg
- Amount rule: Independently weigh the actual SKU/stream net mass after tare for this child; retain its own issue, return, stock and fate records; normalize the attributable numerator once by the original accepted-output denominator.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_support_balance`

Range evidence need: Establish independent, matching-identity quantity evidence and uncertainty for this actual exchange. A family total or former family interval is not a child quantity, allocation share or automatically valid child QA range.

###### Separately dispatched worn drilling-bit waste (`support_waste_worn_bit`)

Record only this independently identified separately dispatched worn drilling-bit waste at its actual state and supply or receiving gate. Actual directly owned wear-part waste outside already included capital retirement; whole bit not constituent metal duplicate. Preserve actual SKU/formulation or dispatched composite, ownership, receiver/provider and every original/rework event. Evidence for nonoccurrence is required; missing identity, quantity or condition remains a completion gap. No amount or occurrence is inferred from the other child flows. Complete supplied products and contaminated carriers include their contained parts/material once.

- Selected flow: Separately dispatched worn drilling-bit waste
- Flow property / unit: Mass / kg
- Amount rule: Independently weigh the actual SKU/stream net mass after tare for this child; retain its own issue, return, stock and fate records; normalize the attributable numerator once by the original accepted-output denominator.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_support_balance`

Range evidence need: Establish independent, matching-identity quantity evidence and uncertainty for this actual exchange. A family total or former family interval is not a child quantity, allocation share or automatically valid child QA range.

##### Elementary flows

### Process: Casing sealing and wellhead integration (`well_completion`)

#### Inputs

##### Product flows

###### Actual steel well-casing product with inseparable supplied coupling (`well_casing_steel`)

Record only this independently identified actual steel well-casing product with inseparable supplied coupling at its actual state and supply or receiving gate. Only an independently supplied or independently dispatched actual identified product/stream activates this card, outside other complete-product/provider coverage. Preserve actual SKU/formulation or dispatched composite, ownership, receiver/provider and every original/rework event. Evidence for nonoccurrence is required; missing identity, quantity or condition remains a completion gap. No amount or occurrence is inferred from the other child flows. Complete supplied products and contaminated carriers include their contained parts/material once.

- Selected flow: Actual steel well-casing product with inseparable supplied coupling
- Flow property / unit: Mass / kg
- Amount rule: Independently weigh the actual SKU/stream net mass after tare for this child; retain its own issue, return, stock and fate records; normalize the attributable numerator once by the original accepted-output denominator.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_completion_materials`
- Sources: `massdep-private-well-guidelines`

Range evidence need: Establish independent, matching-identity quantity evidence and uncertainty for this actual exchange. A family total or former family interval is not a child quantity, allocation share or automatically valid child QA range.

###### Actual thermoplastic well-casing product with inseparable supplied coupling (`well_casing_thermoplastic`)

Record only this independently identified actual thermoplastic well-casing product with inseparable supplied coupling at its actual state and supply or receiving gate. Only an independently supplied or independently dispatched actual identified product/stream activates this card, outside other complete-product/provider coverage. Preserve actual SKU/formulation or dispatched composite, ownership, receiver/provider and every original/rework event. Evidence for nonoccurrence is required; missing identity, quantity or condition remains a completion gap. No amount or occurrence is inferred from the other child flows. Complete supplied products and contaminated carriers include their contained parts/material once.

- Selected flow: Actual thermoplastic well-casing product with inseparable supplied coupling
- Flow property / unit: Mass / kg
- Amount rule: Independently weigh the actual SKU/stream net mass after tare for this child; retain its own issue, return, stock and fate records; normalize the attributable numerator once by the original accepted-output denominator.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_completion_materials`
- Sources: `massdep-private-well-guidelines`

Range evidence need: Establish independent, matching-identity quantity evidence and uncertainty for this actual exchange. A family total or former family interval is not a child quantity, allocation share or automatically valid child QA range.

###### Actually supplied dry preblended approved sealing grout (`sealing_grout_dry_premix`)

Record only this independently identified actually supplied dry preblended approved sealing grout at its actual state and supply or receiving gate. Only actual complete dry premix product received. Its included cement/bentonite constituents are not separate purchases; record separately added actual mixing water. Preserve actual SKU/formulation or dispatched composite, ownership, receiver/provider and every original/rework event. Evidence for nonoccurrence is required; missing identity, quantity or condition remains a completion gap. No amount or occurrence is inferred from the other child flows. Complete supplied products and contaminated carriers include their contained parts/material once.

- Selected flow: Actually supplied dry preblended approved sealing grout
- Flow property / unit: Mass / kg
- Amount rule: For each actual physical batch, activate this independently received product only in grout_supply_mode=dry_premix. Independently establish this product net supplied kg and actual issue/opening/closing/usable-return/placement/residue records at the real supply state; normalize the attributable product quantity once by actual accepted civil-well count. Three supply-mode groups are mutually exclusive per batch: dry_premix, prepared_grout, or separate_ingredients. Cement and bentonite may both occur only as independently supplied actual approved ingredients in the latter mode, with no guessed recipe fractions. No ingredient already in dry premix or prepared grout is purchased twice; onsite grout_yield_kg is reconciliation only, not a second purchased input.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_grout`
- Sources: `massdep-private-well-guidelines`

Range evidence need: Establish independent, matching-identity quantity evidence and uncertainty for this actual exchange. A family total or former family interval is not a child quantity, allocation share or automatically valid child QA range.

###### Actually supplied or independently handed-over prepared sealing grout (`sealing_grout_prepared`)

Record only this independently identified actually supplied or independently handed-over prepared sealing grout at its actual state and supply or receiving gate. Only real prepared-grout supply or genuinely independent preparation handoff with its actual upstream inventory counted once. Embedded mixing is not a second prepared-grout input; contained water already included. Preserve actual SKU/formulation or dispatched composite, ownership, receiver/provider and every original/rework event. Evidence for nonoccurrence is required; missing identity, quantity or condition remains a completion gap. No amount or occurrence is inferred from the other child flows. Complete supplied products and contaminated carriers include their contained parts/material once.

- Selected flow: Actually supplied or independently handed-over prepared sealing grout
- Flow property / unit: Mass / kg
- Amount rule: For each actual physical batch, activate this independently received product only in grout_supply_mode=prepared_grout. Independently establish this product net supplied kg and actual issue/opening/closing/usable-return/placement/residue records at the real supply state; normalize the attributable product quantity once by actual accepted civil-well count. Three supply-mode groups are mutually exclusive per batch: dry_premix, prepared_grout, or separate_ingredients. Cement and bentonite may both occur only as independently supplied actual approved ingredients in the latter mode, with no guessed recipe fractions. No ingredient already in dry premix or prepared grout is purchased twice; onsite grout_yield_kg is reconciliation only, not a second purchased input.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_grout`
- Sources: `massdep-private-well-guidelines`

Range evidence need: Establish independent, matching-identity quantity evidence and uncertainty for this actual exchange. A family total or former family interval is not a child quantity, allocation share or automatically valid child QA range.

###### Separately supplied cement for embedded sealing-grout mixing (`sealing_grout_cement`)

Record only this independently identified separately supplied cement for embedded sealing-grout mixing at its actual state and supply or receiving gate. Only actual independently supplied cement in separate-ingredients mode, supported by approved actual recipe; not cement already included in dry premix or supplied prepared grout. Preserve actual SKU/formulation or dispatched composite, ownership, receiver/provider and every original/rework event. Evidence for nonoccurrence is required; missing identity, quantity or condition remains a completion gap. No amount or occurrence is inferred from the other child flows. Complete supplied products and contaminated carriers include their contained parts/material once.

- Selected flow: Separately supplied cement for embedded sealing-grout mixing
- Flow property / unit: Mass / kg
- Amount rule: For each actual physical batch, activate this independently received product only in grout_supply_mode=separate_ingredients. Independently establish this product net supplied kg and actual issue/opening/closing/usable-return/placement/residue records at the real supply state; normalize the attributable product quantity once by actual accepted civil-well count. Three supply-mode groups are mutually exclusive per batch: dry_premix, prepared_grout, or separate_ingredients. Cement and bentonite may both occur only as independently supplied actual approved ingredients in the latter mode, with no guessed recipe fractions. No ingredient already in dry premix or prepared grout is purchased twice; onsite grout_yield_kg is reconciliation only, not a second purchased input.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_grout`
- Sources: `massdep-private-well-guidelines`

Range evidence need: Establish independent, matching-identity quantity evidence and uncertainty for this actual exchange. A family total or former family interval is not a child quantity, allocation share or automatically valid child QA range.

###### Separately supplied bentonite for embedded sealing-grout mixing (`sealing_grout_bentonite`)

Record only this independently identified separately supplied bentonite for embedded sealing-grout mixing at its actual state and supply or receiving gate. Only actual independently supplied bentonite in separate-ingredients mode; no assumed cement/bentonite proportions or presence. Preserve actual SKU/formulation or dispatched composite, ownership, receiver/provider and every original/rework event. Evidence for nonoccurrence is required; missing identity, quantity or condition remains a completion gap. No amount or occurrence is inferred from the other child flows. Complete supplied products and contaminated carriers include their contained parts/material once.

- Selected flow: Separately supplied bentonite for embedded sealing-grout mixing
- Flow property / unit: Mass / kg
- Amount rule: For each actual physical batch, activate this independently received product only in grout_supply_mode=separate_ingredients. Independently establish this product net supplied kg and actual issue/opening/closing/usable-return/placement/residue records at the real supply state; normalize the attributable product quantity once by actual accepted civil-well count. Three supply-mode groups are mutually exclusive per batch: dry_premix, prepared_grout, or separate_ingredients. Cement and bentonite may both occur only as independently supplied actual approved ingredients in the latter mode, with no guessed recipe fractions. No ingredient already in dry premix or prepared grout is purchased twice; onsite grout_yield_kg is reconciliation only, not a second purchased input.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_grout`
- Sources: `massdep-private-well-guidelines`

Range evidence need: Establish independent, matching-identity quantity evidence and uncertainty for this actual exchange. A family total or former family interval is not a child quantity, allocation share or automatically valid child QA range.

###### Separately supplied compatible well-casing coupling (`completion_components_coupling`)

Record only this independently identified separately supplied compatible well-casing coupling at its actual state and supply or receiving gate. Only an independently supplied or independently dispatched actual identified product/stream activates this card, outside other complete-product/provider coverage. Preserve actual SKU/formulation or dispatched composite, ownership, receiver/provider and every original/rework event. Evidence for nonoccurrence is required; missing identity, quantity or condition remains a completion gap. No amount or occurrence is inferred from the other child flows. Complete supplied products and contaminated carriers include their contained parts/material once.

- Selected flow: Separately supplied compatible well-casing coupling
- Flow property / unit: Mass / kg
- Amount rule: Independently weigh the actual SKU/stream net mass after tare for this child; retain its own issue, return, stock and fate records; normalize the attributable numerator once by the original accepted-output denominator.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_completion_materials`
- Sources: `massdep-private-well-guidelines`

Range evidence need: Establish independent, matching-identity quantity evidence and uncertainty for this actual exchange. A family total or former family interval is not a child quantity, allocation share or automatically valid child QA range.

###### Separately supplied approved sanitary well cap (`completion_components_sanitary_cap`)

Record only this independently identified separately supplied approved sanitary well cap at its actual state and supply or receiving gate. Only an independently supplied or independently dispatched actual identified product/stream activates this card, outside other complete-product/provider coverage. Preserve actual SKU/formulation or dispatched composite, ownership, receiver/provider and every original/rework event. Evidence for nonoccurrence is required; missing identity, quantity or condition remains a completion gap. No amount or occurrence is inferred from the other child flows. Complete supplied products and contaminated carriers include their contained parts/material once.

- Selected flow: Separately supplied approved sanitary well cap
- Flow property / unit: Mass / kg
- Amount rule: Independently weigh the actual SKU/stream net mass after tare for this child; retain its own issue, return, stock and fate records; normalize the attributable numerator once by the original accepted-output denominator.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_completion_materials`
- Sources: `massdep-private-well-guidelines`

Range evidence need: Establish independent, matching-identity quantity evidence and uncertainty for this actual exchange. A family total or former family interval is not a child quantity, allocation share or automatically valid child QA range.

###### Separately supplied approved well-completion seal (`completion_components_seal`)

Record only this independently identified separately supplied approved well-completion seal at its actual state and supply or receiving gate. Only an independently supplied or independently dispatched actual identified product/stream activates this card, outside other complete-product/provider coverage. Preserve actual SKU/formulation or dispatched composite, ownership, receiver/provider and every original/rework event. Evidence for nonoccurrence is required; missing identity, quantity or condition remains a completion gap. No amount or occurrence is inferred from the other child flows. Complete supplied products and contaminated carriers include their contained parts/material once.

- Selected flow: Separately supplied approved well-completion seal
- Flow property / unit: Mass / kg
- Amount rule: Independently weigh the actual SKU/stream net mass after tare for this child; retain its own issue, return, stock and fate records; normalize the attributable numerator once by the original accepted-output denominator.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_completion_materials`
- Sources: `massdep-private-well-guidelines`

Range evidence need: Establish independent, matching-identity quantity evidence and uncertainty for this actual exchange. A family total or former family interval is not a child quantity, allocation share or automatically valid child QA range.

###### Separately supplied grout-preparation and completion-cleanup water (`grout_water`)

Record actual separately supplied water for embedded grout preparation and conditional completion cleanup by purpose/event/source. Water contained in supplied prepared grout is covered by `sealing_grout_prepared`; actual onsite groundwater abstraction instead needs its own environmental source exchange. Cleanup water is conditional on actual use, with no universal quantity.

- Selected flow: Separately supplied grout-preparation and completion-cleanup water
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Meter or weigh actual batch-preparation and conditional cleanup-water inputs separately by purpose/source; retain actual volume, temperature and documented density for kg conversion and reconcile grout residues/cleanup liquid.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_grout`

Range evidence need: Actual supplied-grout state, embedded recipe where mixing occurs, cleanup existence, purpose-specific water metering and volume-density evidence are required; no universal water ratio or cleanup volume.

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Usable unchanged steel casing returned outward (`completion_returns_steel_casing`)

Record only this independently identified usable unchanged steel casing returned outward at its actual state and supply or receiving gate. Only an independently supplied or independently dispatched actual identified product/stream activates this card, outside other complete-product/provider coverage. Preserve actual SKU/formulation or dispatched composite, ownership, receiver/provider and every original/rework event. Evidence for nonoccurrence is required; missing identity, quantity or condition remains a completion gap. No amount or occurrence is inferred from the other child flows. Complete supplied products and contaminated carriers include their contained parts/material once.

- Selected flow: Usable unchanged steel casing returned outward
- Flow property / unit: Mass / kg
- Amount rule: Independently weigh the actual SKU/stream net mass after tare for this child; retain its own issue, return, stock and fate records; normalize the attributable numerator once by the original accepted-output denominator.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_completion_balance`

Range evidence need: Establish independent, matching-identity quantity evidence and uncertainty for this actual exchange. A family total or former family interval is not a child quantity, allocation share or automatically valid child QA range.

###### Usable unchanged thermoplastic casing returned outward (`completion_returns_thermoplastic_casing`)

Record only this independently identified usable unchanged thermoplastic casing returned outward at its actual state and supply or receiving gate. Only an independently supplied or independently dispatched actual identified product/stream activates this card, outside other complete-product/provider coverage. Preserve actual SKU/formulation or dispatched composite, ownership, receiver/provider and every original/rework event. Evidence for nonoccurrence is required; missing identity, quantity or condition remains a completion gap. No amount or occurrence is inferred from the other child flows. Complete supplied products and contaminated carriers include their contained parts/material once.

- Selected flow: Usable unchanged thermoplastic casing returned outward
- Flow property / unit: Mass / kg
- Amount rule: Independently weigh the actual SKU/stream net mass after tare for this child; retain its own issue, return, stock and fate records; normalize the attributable numerator once by the original accepted-output denominator.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_completion_balance`

Range evidence need: Establish independent, matching-identity quantity evidence and uncertainty for this actual exchange. A family total or former family interval is not a child quantity, allocation share or automatically valid child QA range.

###### Usable unchanged dry sealing-grout premix returned outward (`completion_returns_dry_premix`)

Record only this independently identified usable unchanged dry sealing-grout premix returned outward at its actual state and supply or receiving gate. Only an independently supplied or independently dispatched actual identified product/stream activates this card, outside other complete-product/provider coverage. Preserve actual SKU/formulation or dispatched composite, ownership, receiver/provider and every original/rework event. Evidence for nonoccurrence is required; missing identity, quantity or condition remains a completion gap. No amount or occurrence is inferred from the other child flows. Complete supplied products and contaminated carriers include their contained parts/material once.

- Selected flow: Usable unchanged dry sealing-grout premix returned outward
- Flow property / unit: Mass / kg
- Amount rule: Independently weigh the actual SKU/stream net mass after tare for this child; retain its own issue, return, stock and fate records; normalize the attributable numerator once by the original accepted-output denominator.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_completion_balance`

Range evidence need: Establish independent, matching-identity quantity evidence and uncertainty for this actual exchange. A family total or former family interval is not a child quantity, allocation share or automatically valid child QA range.

###### Usable received prepared sealing grout returned outward (`completion_returns_prepared_grout`)

Record only this independently identified usable received prepared sealing grout returned outward at its actual state and supply or receiving gate. Only actual usable original independently received prepared-grout product accepted outward; not a generic return of onsite ingredient-made yield. Preserve actual SKU/formulation or dispatched composite, ownership, receiver/provider and every original/rework event. Evidence for nonoccurrence is required; missing identity, quantity or condition remains a completion gap. No amount or occurrence is inferred from the other child flows. Complete supplied products and contaminated carriers include their contained parts/material once.

- Selected flow: Usable received prepared sealing grout returned outward
- Flow property / unit: Mass / kg
- Amount rule: Independently weigh the actual SKU/stream net mass after tare for this child; retain its own issue, return, stock and fate records; normalize the attributable numerator once by the original accepted-output denominator.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_completion_balance`

Range evidence need: Establish independent, matching-identity quantity evidence and uncertainty for this actual exchange. A family total or former family interval is not a child quantity, allocation share or automatically valid child QA range.

###### Usable unchanged separately supplied cement returned outward (`completion_returns_cement`)

Record only this independently identified usable unchanged separately supplied cement returned outward at its actual state and supply or receiving gate. Only an independently supplied or independently dispatched actual identified product/stream activates this card, outside other complete-product/provider coverage. Preserve actual SKU/formulation or dispatched composite, ownership, receiver/provider and every original/rework event. Evidence for nonoccurrence is required; missing identity, quantity or condition remains a completion gap. No amount or occurrence is inferred from the other child flows. Complete supplied products and contaminated carriers include their contained parts/material once.

- Selected flow: Usable unchanged separately supplied cement returned outward
- Flow property / unit: Mass / kg
- Amount rule: Independently weigh the actual SKU/stream net mass after tare for this child; retain its own issue, return, stock and fate records; normalize the attributable numerator once by the original accepted-output denominator.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_completion_balance`

Range evidence need: Establish independent, matching-identity quantity evidence and uncertainty for this actual exchange. A family total or former family interval is not a child quantity, allocation share or automatically valid child QA range.

###### Usable unchanged separately supplied bentonite returned outward (`completion_returns_bentonite`)

Record only this independently identified usable unchanged separately supplied bentonite returned outward at its actual state and supply or receiving gate. Only an independently supplied or independently dispatched actual identified product/stream activates this card, outside other complete-product/provider coverage. Preserve actual SKU/formulation or dispatched composite, ownership, receiver/provider and every original/rework event. Evidence for nonoccurrence is required; missing identity, quantity or condition remains a completion gap. No amount or occurrence is inferred from the other child flows. Complete supplied products and contaminated carriers include their contained parts/material once.

- Selected flow: Usable unchanged separately supplied bentonite returned outward
- Flow property / unit: Mass / kg
- Amount rule: Independently weigh the actual SKU/stream net mass after tare for this child; retain its own issue, return, stock and fate records; normalize the attributable numerator once by the original accepted-output denominator.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_completion_balance`

Range evidence need: Establish independent, matching-identity quantity evidence and uncertainty for this actual exchange. A family total or former family interval is not a child quantity, allocation share or automatically valid child QA range.

##### Waste flows

###### Separately dispatched steel casing scrap waste (`completion_waste_steel_casing`)

Record only this independently identified separately dispatched steel casing scrap waste at its actual state and supply or receiving gate. Only an independently supplied or independently dispatched actual identified product/stream activates this card, outside other complete-product/provider coverage. Preserve actual SKU/formulation or dispatched composite, ownership, receiver/provider and every original/rework event. Evidence for nonoccurrence is required; missing identity, quantity or condition remains a completion gap. No amount or occurrence is inferred from the other child flows. Complete supplied products and contaminated carriers include their contained parts/material once.

- Selected flow: Separately dispatched steel casing scrap waste
- Flow property / unit: Mass / kg
- Amount rule: Independently weigh the actual SKU/stream net mass after tare for this child; retain its own issue, return, stock and fate records; normalize the attributable numerator once by the original accepted-output denominator.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_completion_balance`

Range evidence need: Establish independent, matching-identity quantity evidence and uncertainty for this actual exchange. A family total or former family interval is not a child quantity, allocation share or automatically valid child QA range.

###### Separately dispatched thermoplastic casing waste (`completion_waste_thermoplastic_casing`)

Record only this independently identified separately dispatched thermoplastic casing waste at its actual state and supply or receiving gate. Only an independently supplied or independently dispatched actual identified product/stream activates this card, outside other complete-product/provider coverage. Preserve actual SKU/formulation or dispatched composite, ownership, receiver/provider and every original/rework event. Evidence for nonoccurrence is required; missing identity, quantity or condition remains a completion gap. No amount or occurrence is inferred from the other child flows. Complete supplied products and contaminated carriers include their contained parts/material once.

- Selected flow: Separately dispatched thermoplastic casing waste
- Flow property / unit: Mass / kg
- Amount rule: Independently weigh the actual SKU/stream net mass after tare for this child; retain its own issue, return, stock and fate records; normalize the attributable numerator once by the original accepted-output denominator.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_completion_balance`

Range evidence need: Establish independent, matching-identity quantity evidence and uncertainty for this actual exchange. A family total or former family interval is not a child quantity, allocation share or automatically valid child QA range.

###### Separately dispatched hardened sealing-grout residue (`completion_waste_hardened_grout`)

Record only this independently identified separately dispatched hardened sealing-grout residue at its actual state and supply or receiving gate. Only an independently supplied or independently dispatched actual identified product/stream activates this card, outside other complete-product/provider coverage. Preserve actual SKU/formulation or dispatched composite, ownership, receiver/provider and every original/rework event. Evidence for nonoccurrence is required; missing identity, quantity or condition remains a completion gap. No amount or occurrence is inferred from the other child flows. Complete supplied products and contaminated carriers include their contained parts/material once.

- Selected flow: Separately dispatched hardened sealing-grout residue
- Flow property / unit: Mass / kg
- Amount rule: Independently weigh the actual SKU/stream net mass after tare for this child; retain its own issue, return, stock and fate records; normalize the attributable numerator once by the original accepted-output denominator.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_completion_balance`

Range evidence need: Establish independent, matching-identity quantity evidence and uncertainty for this actual exchange. A family total or former family interval is not a child quantity, allocation share or automatically valid child QA range.

###### Separately dispatched liquid sealing-grout residue (`completion_waste_liquid_grout`)

Record only this independently identified separately dispatched liquid sealing-grout residue at its actual state and supply or receiving gate. Only an independently supplied or independently dispatched actual identified product/stream activates this card, outside other complete-product/provider coverage. Preserve actual SKU/formulation or dispatched composite, ownership, receiver/provider and every original/rework event. Evidence for nonoccurrence is required; missing identity, quantity or condition remains a completion gap. No amount or occurrence is inferred from the other child flows. Complete supplied products and contaminated carriers include their contained parts/material once.

- Selected flow: Separately dispatched liquid sealing-grout residue
- Flow property / unit: Mass / kg
- Amount rule: Independently weigh the actual SKU/stream net mass after tare for this child; retain its own issue, return, stock and fate records; normalize the attributable numerator once by the original accepted-output denominator.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_completion_balance`

Range evidence need: Establish independent, matching-identity quantity evidence and uncertainty for this actual exchange. A family total or former family interval is not a child quantity, allocation share or automatically valid child QA range.

###### Separately collected completion-cleanup wastewater mixture (`completion_waste_cleanup_wastewater`)

Record only this independently identified separately collected completion-cleanup wastewater mixture at its actual state and supply or receiving gate. Actual independent whole wastewater transfer not the same mixture already weighed as liquid grout residue, no direct release of contained wastewater. Preserve actual SKU/formulation or dispatched composite, ownership, receiver/provider and every original/rework event. Evidence for nonoccurrence is required; missing identity, quantity or condition remains a completion gap. No amount or occurrence is inferred from the other child flows. Complete supplied products and contaminated carriers include their contained parts/material once.

- Selected flow: Separately collected completion-cleanup wastewater mixture
- Flow property / unit: Mass / kg
- Amount rule: Independently weigh the actual SKU/stream net mass after tare for this child; retain its own issue, return, stock and fate records; normalize the attributable numerator once by the original accepted-output denominator.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_completion_balance`

Range evidence need: Establish independent, matching-identity quantity evidence and uncertainty for this actual exchange. A family total or former family interval is not a child quantity, allocation share or automatically valid child QA range.

##### Elementary flows

### Process: Development temporary testing disinfection and civil acceptance (`develop_accept`)

#### Inputs

##### Product flows

###### Externally supplied development flushing disinfection make-up and sampling water (`development_water`)

Record purchased/injected water separately by actual purpose/source. Bedrock air drilling fines must be addressed by actual flushing and development before the yield test; route source supports inclusion, while actual authorized instructions set the method and endpoint. Do not substitute supplied drinking-water production for abstracted well water.

- Selected flow: Externally supplied development flushing disinfection make-up and sampling water
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Meter attributed external water by event/purpose; separate embedded disinfectant water from formulated product water and avoid counting the same batch twice.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_dev_water`
- Sources: `massdep-private-well-guidelines`

Range evidence need: Actual development/flush/dilution protocol, flow/time and metering are required; no universal flush volume, hours or sediment threshold is imposed.

###### Actual construction-stage well disinfectant solution or chemical at supply state (`disinfection_product`)

Specify actual approved formulation and concentration at receipt, actual dilution water and used batches. This stage addresses the driller initial well disinfection; later permanent-pump/system disinfection has a named owner and remains outside this civil scope.

- Selected flow: Actual construction-stage well disinfectant solution or chemical at supply state
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Record gross formulation issues by batch and actual concentration; calculate active chemical only with documented formulation and without adding a second upstream formulation burden.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_disinfect`
- Sources: `massdep-private-well-guidelines`

Range evidence need: Actual authorized concentration, contact duration, water quality and flush endpoint are required; no universal chlorine dose or successful first-pass result.

###### Separately supplied construction-stage sample container (`sampling_consumables_container`)

Record only this independently identified separately supplied construction-stage sample container at its actual state and supply or receiving gate. Only an independently supplied or independently dispatched actual identified product/stream activates this card, outside other complete-product/provider coverage. Preserve actual SKU/formulation or dispatched composite, ownership, receiver/provider and every original/rework event. Evidence for nonoccurrence is required; missing identity, quantity or condition remains a completion gap. No amount or occurrence is inferred from the other child flows. Complete supplied products and contaminated carriers include their contained parts/material once.

- Selected flow: Separately supplied construction-stage sample container
- Flow property / unit: Mass / kg
- Amount rule: Independently weigh the actual SKU/stream net mass after tare for this child; retain its own issue, return, stock and fate records; normalize the attributable numerator once by the original accepted-output denominator.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_test_materials`

Range evidence need: Establish independent, matching-identity quantity evidence and uncertainty for this actual exchange. A family total or former family interval is not a child quantity, allocation share or automatically valid child QA range.

###### Separately supplied construction-stage sample preservative formulation (`sampling_consumables_preservative`)

Record only this independently identified separately supplied construction-stage sample preservative formulation at its actual state and supply or receiving gate. Only actual independently supplied preservative; precharged complete container includes its contents once and laboratory-included products not repurchased. Preserve actual SKU/formulation or dispatched composite, ownership, receiver/provider and every original/rework event. Evidence for nonoccurrence is required; missing identity, quantity or condition remains a completion gap. No amount or occurrence is inferred from the other child flows. Complete supplied products and contaminated carriers include their contained parts/material once.

- Selected flow: Separately supplied construction-stage sample preservative formulation
- Flow property / unit: Mass / kg
- Amount rule: Independently weigh the actual SKU/stream net mass after tare for this child; retain its own issue, return, stock and fate records; normalize the attributable numerator once by the original accepted-output denominator.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_test_materials`

Range evidence need: Establish independent, matching-identity quantity evidence and uncertainty for this actual exchange. A family total or former family interval is not a child quantity, allocation share or automatically valid child QA range.

##### Waste flows

##### Elementary flows

###### Groundwater withdrawn for development temporary yield test flushing and sampling (`test_groundwater`)

Record actual aquifer withdrawal for development, temporary pumping/yield tests, disinfection flushing and sampling separately from external water. Temporary pump provision/energy belongs the lead bore_removal operator. Withdrawal is construction activity, not lifetime drinking-water production or a groundwater co-product.

- Selected flow: Groundwater withdrawn for development temporary yield test flushing and sampling
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use event-specific measured flow and time/water-level logs with source attribution and verified density if kg is calculated; reconcile recirculation rather than count each pass as new withdrawal.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_dev_resource`
- Sources: `massdep-private-well-guidelines`

Range evidence need: Actual test flow/rate/duration, development volumes and recirculation/source balance are needed; do not multiply a nominal yield by an invented test duration.

#### Outputs

##### Product flows

###### Accepted air-rotary bedrock civil water-well construction and development service (`accepted_civil_well`)

The sole reference output is one actual completed accepted pump-free civil well at the declared site/geometry and construction-stage development/test/disinfection gate. Include job-attributable failed attempts, lawful closure/remedy and all repair/retest loops. A failed bore or an unclosed inadequate sample/test is not accepted output.

- Selected flow: Accepted air-rotary bedrock civil water-well construction and development service
- Flow property / unit: Number of items `01846770-4cfe-4a25-8ad9-919d8d378345` / Item(s)
- Amount rule: 1 Item(s)
- Value mode: `fixed_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_accept`
- Sources: `massdep-private-well-guidelines`

Range evidence need: The reference count is exactly one by definition, not a yield prior. Actual accepted well identity and signed gate evidence are required; there is no universal yield, potability or productive depth.

##### Waste flows

###### Actual collected development or yield-test liquid mixture (`development_managed_liquid_development_test`)

Record only this independently identified actual collected development or yield-test liquid mixture at its actual state and supply or receiving gate. Only independently collected actual whole water/slurry stream to authorized receiver, not same fluid inside cuttings/sediment or disinfection-flush dispatch. Preserve actual SKU/formulation or dispatched composite, ownership, receiver/provider and every original/rework event. Evidence for nonoccurrence is required; missing identity, quantity or condition remains a completion gap. No amount or occurrence is inferred from the other child flows. Complete supplied products and contaminated carriers include their contained parts/material once.

- Selected flow: Actual collected development or yield-test liquid mixture
- Flow property / unit: Mass / kg
- Amount rule: Independently weigh the actual SKU/stream net mass after tare for this child; retain its own issue, return, stock and fate records; normalize the attributable numerator once by the original accepted-output denominator.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_dev_disposition`
- Sources: `massdep-private-well-guidelines`

Range evidence need: Establish independent, matching-identity quantity evidence and uncertainty for this actual exchange. A family total or former family interval is not a child quantity, allocation share or automatically valid child QA range.

###### Actual collected disinfectant-flush liquid mixture (`development_managed_liquid_disinfection_flush`)

Record only this independently identified actual collected disinfectant-flush liquid mixture at its actual state and supply or receiving gate. Only actual independently collected whole disinfectant flush mixture to receiver; water/pollutant constituent diagnostics not extra exits. Preserve actual SKU/formulation or dispatched composite, ownership, receiver/provider and every original/rework event. Evidence for nonoccurrence is required; missing identity, quantity or condition remains a completion gap. No amount or occurrence is inferred from the other child flows. Complete supplied products and contaminated carriers include their contained parts/material once.

- Selected flow: Actual collected disinfectant-flush liquid mixture
- Flow property / unit: Mass / kg
- Amount rule: Independently weigh the actual SKU/stream net mass after tare for this child; retain its own issue, return, stock and fate records; normalize the attributable numerator once by the original accepted-output denominator.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_dev_disposition`
- Sources: `massdep-private-well-guidelines`

Range evidence need: Establish independent, matching-identity quantity evidence and uncertainty for this actual exchange. A family total or former family interval is not a child quantity, allocation share or automatically valid child QA range.

###### Separately collected well-development sediment waste (`development_waste_sediment`)

Record only this independently identified separately collected well-development sediment waste at its actual state and supply or receiving gate. Actual independently captured/dispatched fines with moisture/state, excludes sediment still inside a weighed liquid mixture. Preserve actual SKU/formulation or dispatched composite, ownership, receiver/provider and every original/rework event. Evidence for nonoccurrence is required; missing identity, quantity or condition remains a completion gap. No amount or occurrence is inferred from the other child flows. Complete supplied products and contaminated carriers include their contained parts/material once.

- Selected flow: Separately collected well-development sediment waste
- Flow property / unit: Mass / kg
- Amount rule: Independently weigh the actual SKU/stream net mass after tare for this child; retain its own issue, return, stock and fate records; normalize the attributable numerator once by the original accepted-output denominator.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_dev_disposition`

Range evidence need: Establish independent, matching-identity quantity evidence and uncertainty for this actual exchange. A family total or former family interval is not a child quantity, allocation share or automatically valid child QA range.

###### Whole spent construction-stage sampling-container waste (`development_waste_sampling_container`)

Record only this independently identified whole spent construction-stage sampling-container waste at its actual state and supply or receiving gate. Actual separately dispatched whole sampling container including retained sample/preservative once, outside laboratory-covered disposal. Preserve actual SKU/formulation or dispatched composite, ownership, receiver/provider and every original/rework event. Evidence for nonoccurrence is required; missing identity, quantity or condition remains a completion gap. No amount or occurrence is inferred from the other child flows. Complete supplied products and contaminated carriers include their contained parts/material once.

- Selected flow: Whole spent construction-stage sampling-container waste
- Flow property / unit: Mass / kg
- Amount rule: Independently weigh the actual SKU/stream net mass after tare for this child; retain its own issue, return, stock and fate records; normalize the attributable numerator once by the original accepted-output denominator.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_dev_disposition`

Range evidence need: Establish independent, matching-identity quantity evidence and uncertainty for this actual exchange. A family total or former family interval is not a child quantity, allocation share or automatically valid child QA range.

##### Elementary flows

## 7. Allocation and Co-product Handling

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| single_service | all processes | One accepted pump-free civil well is the intended service. No sold groundwater/cuttings co-product or avoided-product credit is assumed. Actual recovered product exit, if any, requires demonstrated product status/destination and disclosed attribution, while waste treatment remains accountable. |  |
| failed_attempts | all processes | Link each bore attempt/remedy/test/sample event to job and producing node; allocate job-attributable failures, lawful closure, repairs and retests to the accepted job. Independently contracted unrelated exploratory work needs an explicit different owner/gate; no hidden failure burden or extra accepted well. |  |
| asset_share | `support_assets_rig`; `support_assets_compressor`; `support_assets_temporary_pump` | For each actual asset use complete-life production/commissioning/maintenance/replacement/removal burdens and actual service-use share for this job. Record life-service denominator across other jobs/reporting periods and attributable use/idle allocation with evidence. Provider-covered phases and owned use inputs count once; missing denominator/termination evidence is a gap, never zero. |  |
| period_link | bore_removal | Index every asset phase/event/input by asset/job/date/reporting period, including cross-period replacements and retirement. Reconcile allocated shares over the same complete life; no repeated annual/full asset charge and no future permanent-pump operation attributed to construction. |  |
| material_custody | all material rows | Use gross attributed receipts/opening stock and issues with placed/used quantities, real outward usable returns, waste/releases and closing stock by actual identity. With gross upstream accounting, outward returns are not first netted and counted again. Retained stock is carried-forward burden with explicit transfer basis, never outward product. |  |
| service_overlap | `support_services_drilling`; `support_services_completion` | Lead bore_removal ownership records the purchase once and uses actual node_id/event task shares for bore_removal, well_completion and develop_accept. Read actual provider scope for fuel, water, materials, assets, transport and disposal; either provider bounded inventory covers a role or its actual foreground inputs do. Supplement missing production/removal without duplicating covered phases. No generic service and its full owned inventory together. |  |


## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cp_drill_water | bore_removal | external injected water | primary records | job_id; bore_id; event_id; water_source; receipt_kg; opening_kg; closing_kg; outward_return_kg; meter_start; meter_end; volume_m3; temperature_C; density_kg_m3 | Reconcile source-specific receipts/stock and injection meter logs; use documented state-specific density for measured volume, allocate only this job and retain actual purposes. | kg; m3; degC | each event | Whole job including failures and retests; linked actual asset periods where applicable | Actual site/job plus named providers and receivers | per reference flow | Calibrated/traceable primary records, actual identity/provider and uncertainty; resolve coverage gaps before finalization. |
| cp_drill_chem | bore_removal | drilling formulations | primary records | job_id; bore_id; event_id; bit_hammer; formulation_id; supplier; active_fraction; gross_issued_kg; returned_kg; closing_stock_kg; provider_coverage; concrete_exchange_id; physical_event_id; actual_identity_id; actual_state; receiver_or_provider_gate; native_quantity; native_unit; unique_property; measurement_method_id; uncertainty | Read actual drill/hammer requirements and product lot/SDS; weigh issues by formulation and log actual use and outward returns; include failed-hole events and compressor carryover evidence. Record each actual child/refined exchange independently by identity, physical event, state, gate and period. Retain all original obligations even where a corresponding exchange identity is not yet known. Do not allocate a family total or copy its numerical Range to children, count a carrier and its contained material twice, or turn missing occurrence/quantity/native reference into zero. Each concrete exchange has one property and one unit; other CP readings are auxiliary and require evidenced conversion. Missing required refinement blocks dataset completion. | kg | each event | Whole job including failures and retests; linked actual asset periods where applicable | Actual site/job plus named providers and receivers | per reference flow | Calibrated/traceable primary records, actual identity/provider and uncertainty; resolve coverage gaps before finalization. |
| cp_drill_resource | bore_removal | groundwater resource withdrawal | primary records | job_id; bore_id; event_id; aquifer; location; total_removed_m3; injected_m3; recirculated_m3; retained_m3; groundwater_m3; temperature_C; density_kg_m3; balance_uncertainty | Measure/estimate groundwater component with explicit mixed-source balance and actual meter/flow-time evidence; retain method limitations and separate new aquifer withdrawal from recirculation. | kg; m3; degC | each event | Whole job including failures and retests; linked actual asset periods where applicable | Actual site/job plus named providers and receivers | per reference flow | Calibrated/traceable primary records, actual identity/provider and uncertainty; resolve coverage gaps before finalization. |
| cp_air | bore_removal | compressor ambient intake | primary records | asset_id; event_id; inlet_flow_m3_h; inlet_pressure_kPa; inlet_temperature_C; humidity; operating_h; density_kg_m3; supply_type; inclusion_method | Use actual calibrated inlet flow/state/time or documented validated engineering balance; declare whether inventory method requires ambient intake. Record separately purchased air under actual service identity, never ambient plus purchased for same air. | kg; m3/h; kPa; degC; h | each event | Whole job including failures and retests; linked actual asset periods where applicable | Actual site/job plus named providers and receivers | per reference flow | Calibrated/traceable primary records, actual identity/provider and uncertainty; resolve coverage gaps before finalization. |
| cp_cuttings | bore_removal | formation/cuttings removal | primary records | job_id; bore_id; formation_log; interval_depth_m; bore_diameter_mm; load_id; wet_mass_kg; dry_solids_kg; entrained_water_kg; contamination; stock_kg; receiver; custody_id | Log geology/depth/diameter and container/load weights; sample moisture/contamination as required; reconcile solids/water, stock and receiver tickets without treating geometric volume as measured mass. | kg; m; mm | each event | Whole job including failures and retests; linked actual asset periods where applicable | Actual site/job plus named providers and receivers | per reference flow | Calibrated/traceable primary records, actual identity/provider and uncertainty; resolve coverage gaps before finalization. |
| cp_drill_liquid | bore_removal | managed drilling liquids | primary records | event_id; container_id; waste_identity; volume_m3; density_kg_m3; suspended_solids; receiver; custody_id; included_cuttings_water_kg | Meter/weigh each separately transferred stream; characterize actual composition and reconcile liquid embedded in cuttings to avoid double transfer. | kg; m3 | each event | Whole job including failures and retests; linked actual asset periods where applicable | Actual site/job plus named providers and receivers | per reference flow | Calibrated/traceable primary records, actual identity/provider and uncertainty; resolve coverage gaps before finalization. |
| cp_drill_releases | bore_removal | drilling releases | primary records | event_id; substance; species_basis; particle_size; medium; release_flow_m3; concentration_mg_L; release_mass_kg; capture_fraction; method_id; uncertainty; concrete_exchange_id; physical_event_id; actual_identity_id; actual_state; receiver_or_provider_gate; native_quantity; native_unit; unique_property; measurement_method_id | Monitor actual release or apply documented applicable measurement/factor method with actual activity, substance/medium and uncertainty. Record incidental formation effects separately; distinguish discharge water from pollutant mass. Record each actual child/refined exchange independently by identity, physical event, state, gate and period. Retain all original obligations even where a corresponding exchange identity is not yet known. Do not allocate a family total or copy its numerical Range to children, count a carrier and its contained material twice, or turn missing occurrence/quantity/native reference into zero. Each concrete exchange has one property and one unit; other CP readings are auxiliary and require evidenced conversion. Missing required refinement blocks dataset completion. | kg; m3; mg/L | each event | Whole job including failures and retests; linked actual asset periods where applicable | Actual site/job plus named providers and receivers | per reference flow | Calibrated/traceable primary records, actual identity/provider and uncertainty; resolve coverage gaps before finalization. |
| cp_completion_materials | well_completion | casing/components | primary records | job_id; bore_id; material_id; model; grade; dimensions_mm; installed_length_m; issued_count; item_mass_kg; gross_receipt_kg; opening_stock_kg; placed_kg; return_kg; waste_kg; closing_stock_kg; bill_of_supply; concrete_exchange_id; physical_event_id; actual_identity_id; actual_state; receiver_or_provider_gate; native_quantity; native_unit; unique_property; measurement_method_id; uncertainty | Reconcile approved actual casing/wellhead drawings and supplier lots; weigh components or use matching model mass and count; distinguish factory-included from separate components and log placement/defect corrections. Record each actual child/refined exchange independently by identity, physical event, state, gate and period. Retain all original obligations even where a corresponding exchange identity is not yet known. Do not allocate a family total or copy its numerical Range to children, count a carrier and its contained material twice, or turn missing occurrence/quantity/native reference into zero. Each concrete exchange has one property and one unit; other CP readings are auxiliary and require evidenced conversion. Missing required refinement blocks dataset completion. | kg; m; mm; Item(s) | each event | Whole job including failures and retests; linked actual asset periods where applicable | Actual site/job plus named providers and receivers | per reference flow | Calibrated/traceable primary records, actual identity/provider and uncertainty; resolve coverage gaps before finalization. |
| cp_grout | well_completion | grout and embedded water | primary records | job_id; bore_id; batch_id; event_id; water_purpose; water_source; supplied_state; approved_recipe; ingredient_id; ingredient_kg; water_kg; cleanup_water_kg; water_volume_m3; temperature_C; density_kg_m3; grout_yield_kg; placed_kg; residue_kg; return_kg; closing_stock_kg; annulus_geometry; placement_record; cure_record; concrete_exchange_id; physical_event_id; actual_identity_id; actual_state; receiver_or_provider_gate; native_quantity; native_unit; unique_property; measurement_method_id; uncertainty; grout_supply_mode; independent_preparation_handoff_id; dry_premix_net_kg; prepared_grout_net_kg; cement_net_kg; bentonite_net_kg; other_ingredient_id; other_ingredient_net_quantity; other_ingredient_native_unit; separately_added_water_kg; prepared_product_included_water_kg; recipe_approval_record; product_receipt_id; supply_mode_evidence | Verify actual geology-compatible authorized grout specification and supply/preparation gate. Recipe/ingredient/batch fields apply only to actual embedded mixing; otherwise record prepared-grout supply once. Separately meter actual conditional completion-cleanup water by purpose/event/source, retaining actual volume/temperature/density for mass conversion and cleanup-liquid disposition. Retain actual placement/cure evidence and mass balance. Record each actual child/refined exchange independently by identity, physical event, state, gate and period. Retain all original obligations even where a corresponding exchange identity is not yet known. Do not allocate a family total or copy its numerical Range to children, count a carrier and its contained material twice, or turn missing occurrence/quantity/native reference into zero. Each concrete exchange has one property and one unit; other CP readings are auxiliary and require evidenced conversion. Missing required refinement blocks dataset completion. Per actual batch, record exactly one grout_supply_mode: dry_premix, prepared_grout, or separate_ingredients. Dry premix is one complete supplied product plus actual added water, without recharging its included cement/bentonite. Prepared grout requires a real supply or independent preparation handoff and includes its constituent water/materials. Separate ingredients are individually received actual approved recipe products; cement and bentonite can both occur if the actual recipe requires them, never inferred shares. Embedded mixing produces a reconciled grout_yield_kg state, not a second purchased grout flow. Actual cleanup water remains separately metered by purpose and fate. | kg; m3; degC; actual geometry and cure units stated in approved record | each event | Whole job including failures and retests; linked actual asset periods where applicable | Actual site/job plus named providers and receivers | per reference flow | Calibrated/traceable primary records, actual identity/provider and uncertainty; resolve coverage gaps before finalization. |
| cp_completion_balance | well_completion | material returns/waste | primary records | job_id; batch_id; material_identity; gross_in_kg; installed_kg; usable_return_kg; outward_custody_id; waste_kg; receiver; retained_stock_kg; carried_burden_basis; defect_id; disposition; concrete_exchange_id; physical_event_id; actual_identity_id; actual_state; receiver_or_provider_gate; native_quantity; native_unit; unique_property; measurement_method_id; uncertainty | Weigh and reconcile actual installation losses, rejected components and grout residues by identity; real outward return needs receipt, closing stock carries burden and unresolved defects cannot pass handover. Record each actual child/refined exchange independently by identity, physical event, state, gate and period. Retain all original obligations even where a corresponding exchange identity is not yet known. Do not allocate a family total or copy its numerical Range to children, count a carrier and its contained material twice, or turn missing occurrence/quantity/native reference into zero. Each concrete exchange has one property and one unit; other CP readings are auxiliary and require evidenced conversion. Missing required refinement blocks dataset completion. | kg | each event | Whole job including failures and retests; linked actual asset periods where applicable | Actual site/job plus named providers and receivers | per reference flow | Calibrated/traceable primary records, actual identity/provider and uncertainty; resolve coverage gaps before finalization. |
| cp_dev_water | develop_accept | external development water | primary records | job_id; bore_id; event_id; purpose; source; supplied_water_kg; volume_m3; density_kg_m3; formulation_water_included; endpoint; protocol_ref | Meter source/purpose-specific external injection/flush/dilution water and keep actual authorized development endpoint; reconcile water included in formulations and loop/retest events. | kg; m3 | each event | Whole job including failures and retests; linked actual asset periods where applicable | Actual site/job plus named providers and receivers | per reference flow | Calibrated/traceable primary records, actual identity/provider and uncertainty; resolve coverage gaps before finalization. |
| cp_disinfect | develop_accept | initial driller disinfection | primary records | job_id; bore_id; event_id; formulation; gross_issued_kg; active_fraction; dilution_water_kg; prescribed_concentration_unit; actual_concentration; prescribed_contact_unit; actual_contact; water_quality; flush_endpoint; protocol_ref; repeat_reason | Read actual authorized site disinfection protocol/product label and batch logs; retain concentration/duration with original units, dilution, conditions and flush endpoint. Link sample results/repeat reasons and later pump/system duty owner. | kg; concentration and contact units declared by actual protocol | each event | Whole job including failures and retests; linked actual asset periods where applicable | Actual site/job plus named providers and receivers | per reference flow | Calibrated/traceable primary records, actual identity/provider and uncertainty; resolve coverage gaps before finalization. |
| cp_dev_resource | develop_accept | construction groundwater withdrawal | primary records | job_id; bore_id; event_id; aquifer; purpose; pump_id; rate_m3_h; duration_h; meter_start_m3; meter_end_m3; static_level_m; drawdown_m; recovery_m; recirculated_m3; external_water_m3; density_kg_m3; protocol_ref | Collect actual development/yield-test/flush/sample water meter and time/level records; separate aquifer withdrawal from external addition and recirculation; no nominal test rate/time substitution. | kg; m3; m3/h; h; m | each event | Whole job including failures and retests; linked actual asset periods where applicable | Actual site/job plus named providers and receivers | per reference flow | Calibrated/traceable primary records, actual identity/provider and uncertainty; resolve coverage gaps before finalization. |
| cp_test_materials | develop_accept | sample/test materials | primary records | job_id; sample_id; event_id; method_ref; material_id; gross_issued_kg; item_count; item_mass_kg; returned_kg; closing_stock_kg; laboratory_coverage; concrete_exchange_id; physical_event_id; actual_identity_id; actual_state; receiver_or_provider_gate; native_quantity; native_unit; unique_property; measurement_method_id; uncertainty | Use actual sample plan and laboratory/provider scope; weigh/sample-count matching consumables and include actual repeated tests, without duplicate provider-included bottles/preservative. Record each actual child/refined exchange independently by identity, physical event, state, gate and period. Retain all original obligations even where a corresponding exchange identity is not yet known. Do not allocate a family total or copy its numerical Range to children, count a carrier and its contained material twice, or turn missing occurrence/quantity/native reference into zero. Each concrete exchange has one property and one unit; other CP readings are auxiliary and require evidenced conversion. Missing required refinement blocks dataset completion. | kg; Item(s) | each event | Whole job including failures and retests; linked actual asset periods where applicable | Actual site/job plus named providers and receivers | per reference flow | Calibrated/traceable primary records, actual identity/provider and uncertainty; resolve coverage gaps before finalization. |
| cp_accept | develop_accept | accepted civil service | primary records | job_id; well_id; site; jurisdiction; geology; non_flowing_evidence; approved_design; driller_qualification; bore_attempt_ids; casing_seal_wellhead_acceptance; development_endpoint; test_protocol; test_flow_unit; test_duration_unit; drawdown_recovery_units; actual_test_results; disinfection_flush_records; sample_method_results; defect_dispositions; closure_records; accepted_count; signed_gate; later_pump_disinfection_owner; water_service_approval_owner | Independently reconcile construction/as-built and actual approved test/sample criteria with signed pump-free civil handover. Count one only after all attributable inadequate holes/defects/retests have closed; later permanent pump/system and drinking-water approval duties must be explicitly transferred. | Item(s); actual geometry/test/quality units retained | each acceptance plus every failed/repair/test event | Whole job including failures and retests; linked actual asset periods where applicable | Actual site/job plus named providers and receivers | per reference flow | Signed stage-specific gate, qualified authority/design criteria and traceable actual results; civil acceptance alone does not establish potability or full water-system approval. |
| cp_dev_disposition | develop_accept | water/sediment/test residuals and releases | primary records | job_id; event_id; stream_id; substance; species_basis; medium; volume_m3; wet_mass_kg; solids_kg; entrained_water_kg; concentration_mg_L; active_chlorine_basis; sample_mass_kg; recirculation_m3; stock_kg; receiver; custody_id; release_authorization; uncertainty; concrete_exchange_id; physical_event_id; actual_identity_id; actual_state; receiver_or_provider_gate; native_quantity; native_unit; unique_property; measurement_method_id | Reconcile aquifer/external inputs with managed liquid, sediment water, recirculation, samples, stock and lawful actual releases. Weigh captured wastes; determine individual pollutant mass from representative concentration/flow with units/species basis. Do not use solution mass as active disinfectant mass. Record each actual child/refined exchange independently by identity, physical event, state, gate and period. Retain all original obligations even where a corresponding exchange identity is not yet known. Do not allocate a family total or copy its numerical Range to children, count a carrier and its contained material twice, or turn missing occurrence/quantity/native reference into zero. Each concrete exchange has one property and one unit; other CP readings are auxiliary and require evidenced conversion. Missing required refinement blocks dataset completion. | kg; m3; mg/L | each event | Whole job including failures and retests; linked actual asset periods where applicable | Actual site/job plus named providers and receivers | per reference flow | Calibrated/traceable primary records, actual identity/provider and uncertainty; resolve coverage gaps before finalization. |
| cp_energy | bore_removal | fuel and electricity | primary records | job_id; asset_id; node_id; event_id; fuel_identity; receipt_kg; opening_stock_kg; closing_stock_kg; returned_kg; consumed_kg; volume_L; density_kg_L; temperature_C; meter_start_kWh; meter_end_kWh; provider_scope; reporting_period; concrete_exchange_id; physical_event_id; actual_identity_id; actual_state; receiver_or_provider_gate; native_quantity; native_unit; unique_property; measurement_method_id; uncertainty | Meter/stock-balance each actual fuel and electricity supply by asset/task; retain actual volume-density conversion, charging/generator/provider coverage. Attribute shared use from primary task records, including failed/retest events; separate transport consumption. Record each actual child/refined exchange independently by identity, physical event, state, gate and period. Retain all original obligations even where a corresponding exchange identity is not yet known. Do not allocate a family total or copy its numerical Range to children, count a carrier and its contained material twice, or turn missing occurrence/quantity/native reference into zero. Each concrete exchange has one property and one unit; other CP readings are auxiliary and require evidenced conversion. Missing required refinement blocks dataset completion. | kg; L; kWh; degC | each event | Whole job including failures and retests; linked actual asset periods where applicable | Actual site/job plus named providers and receivers | per reference flow | Calibrated/traceable primary records, actual identity/provider and uncertainty; resolve coverage gaps before finalization. |
| cp_assets | bore_removal | complete-life shared asset provision | primary records | asset_id; provider; coverage_phases; consuming_node; job_id; reporting_period; task_h; idle_h; lifetime_service_h; production_record; commissioning_date; maintenance_events; replacement_events; retirement_date; removal_route; allocation_method; uncertainty; concrete_exchange_id; physical_event_id; actual_identity_id; actual_state; receiver_or_provider_gate; native_quantity; native_unit; unique_property; measurement_method_id | Create complete-life asset/event register across actual jobs/periods and all consuming nodes. Verify provider coverage; allocate uncovered capital/maintenance/removal with measured task use and supported full-life denominator, explaining idle treatment. Preserve replacement/termination evidence and reconcile all shares; otherwise report incomplete asset coverage. Record each actual child/refined exchange independently by identity, physical event, state, gate and period. Retain all original obligations even where a corresponding exchange identity is not yet known. Do not allocate a family total or copy its numerical Range to children, count a carrier and its contained material twice, or turn missing occurrence/quantity/native reference into zero. Each concrete exchange has one property and one unit; other CP readings are auxiliary and require evidenced conversion. Missing required refinement blocks dataset completion. | h; actual phase quantities/units retained | each task and replacement/removal event; reconcile every period | Complete asset lifecycle coverage: manufacture/acquisition, all contributing service/reporting periods, maintenance/replacement and termination/end-of-life; retain observed history and any evidenced prospective remainder as distinct evidence, including this job and all failed/repeated attempts. | Declared job/node/site plus every consuming node, job, provider and reporting period represented in the same asset complete-life denominator, including consumers outside this site. | per reference flow | Provider scope plus production/maintenance/removal records and actual life-service evidence; no default lifespan or zero capital burden. |
| cp_transport | bore_removal | actual logistics | primary records | job_id; consignment_id; asset_material_id; provider; mode; leg_id; origin; destination; distance_km; payload_t; empty_leg; shared_load_fraction; trip_count; vehicle_km; supplied_service_unit; supplier_coverage | Reconcile actual delivery/mobilization/demobilization/waste legs from manifests and route records, measured loads and service unit. Include accountable empty/shared legs; avoid own vehicle fuel/asset and purchased full transport double counting. | tkm; t; km; vehicle-km; trips as actually measured | each event | Whole job including failures and retests; linked actual asset periods where applicable | Actual site/job plus named providers and receivers | per reference flow | Calibrated/traceable primary records, actual identity/provider and uncertainty; resolve coverage gaps before finalization. |
| cp_services | bore_removal | independent time-based provider services | primary records | job_id; node_id; event_id; provider; time_based_service_identity; delivered_h; delivery_gate; source_boundary; materials_coverage; energy_coverage; asset_phases_coverage; transport_coverage; waste_coverage; record_id; concrete_exchange_id; physical_event_id; actual_identity_id; actual_state; receiver_or_provider_gate; native_quantity; native_unit; unique_property; measurement_method_id; uncertainty | Read actual time-based contract/delivery scope, measured hours and independent responsibility gate; map actual covered/excluded work to all three responsibilities. Do not convert laboratory samples or compressed-air quantities to hours; supplement missing inventory phases once. Record each actual child/refined exchange independently by identity, physical event, state, gate and period. Retain all original obligations even where a corresponding exchange identity is not yet known. Do not allocate a family total or copy its numerical Range to children, count a carrier and its contained material twice, or turn missing occurrence/quantity/native reference into zero. Each concrete exchange has one property and one unit; other CP readings are auxiliary and require evidenced conversion. Missing required refinement blocks dataset completion. | h | each event | Whole job including failures and retests; linked actual asset periods where applicable | Actual site/job plus named providers and receivers | per reference flow | Calibrated/traceable primary records, actual identity/provider and uncertainty; resolve coverage gaps before finalization. |
| cp_support_materials | bore_removal | wear/maintenance supplies | primary records | job_id; asset_id; node_id; event_id; material_formulation_id; gross_issued_kg; return_kg; stock_kg; replacement_event; life_share; provider_coverage; concrete_exchange_id; physical_event_id; actual_identity_id; actual_state; receiver_or_provider_gate; native_quantity; native_unit; unique_property; measurement_method_id; uncertainty | Weigh actual separately consumed maintenance/wear supplies or use matching model mass and record replacements; identify capital-covered parts and hammer lubricant to prevent duplication. Record each actual child/refined exchange independently by identity, physical event, state, gate and period. Retain all original obligations even where a corresponding exchange identity is not yet known. Do not allocate a family total or copy its numerical Range to children, count a carrier and its contained material twice, or turn missing occurrence/quantity/native reference into zero. Each concrete exchange has one property and one unit; other CP readings are auxiliary and require evidenced conversion. Missing required refinement blocks dataset completion. | kg | each event | Whole job including failures and retests; linked actual asset periods where applicable | Actual site/job plus named providers and receivers | per reference flow | Calibrated/traceable primary records, actual identity/provider and uncertainty; resolve coverage gaps before finalization. |
| cp_support_balance | bore_removal | packaging/support residual custody | primary records | job_id; product_or_waste_identity; material_kg; packaging_included; gross_receipts_kg; opening_stock_kg; issues_kg; outward_returns_kg; receiver; custody_id; waste_kg; closing_stock_kg; carried_burden_basis; concrete_exchange_id; physical_event_id; actual_identity_id; actual_state; receiver_or_provider_gate; native_quantity; native_unit; unique_property; measurement_method_id; uncertainty | Reconcile gross support-material/packaging receipts and actual outward usable return/waste by identity; retain closing stock with burden basis. Match supplier-covered packaging/removal and complete-life asset retirement to avoid duplicate inputs/exits. Record each actual child/refined exchange independently by identity, physical event, state, gate and period. Retain all original obligations even where a corresponding exchange identity is not yet known. Do not allocate a family total or copy its numerical Range to children, count a carrier and its contained material twice, or turn missing occurrence/quantity/native reference into zero. Each concrete exchange has one property and one unit; other CP readings are auxiliary and require evidenced conversion. Missing required refinement blocks dataset completion. | kg | each event | Whole job including failures and retests; linked actual asset periods where applicable | Actual site/job plus named providers and receivers | per reference flow | Calibrated/traceable primary records, actual identity/provider and uncertainty; resolve coverage gaps before finalization. |
| cp_support_emissions | bore_removal | engine and support emissions | primary records | job_id; asset_id; node_id; event_id; fuel_activity; engine_model; operating_state; pollutant; species_basis; particle_size; medium; measurement; factor_ref; factor_unit; control_state; release_mass_kg; provider_coverage; uncertainty; concrete_exchange_id; physical_event_id; actual_identity_id; actual_state; receiver_or_provider_gate; native_quantity; native_unit; unique_property; measurement_method_id | Use actual monitored emission or documented applicable engine/fuel/control factor with actual activity; retain factor version/unit/speciation and upstream/provider boundary. Report relevant unmeasured releases as gaps; exclude separately counted drilling/disinfection releases. Record each actual child/refined exchange independently by identity, physical event, state, gate and period. Retain all original obligations even where a corresponding exchange identity is not yet known. Do not allocate a family total or copy its numerical Range to children, count a carrier and its contained material twice, or turn missing occurrence/quantity/native reference into zero. Each concrete exchange has one property and one unit; other CP readings are auxiliary and require evidenced conversion. Missing required refinement blocks dataset completion. | kg; actual factor/activity units | each event | Whole job including failures and retests; linked actual asset periods where applicable | Actual site/job plus named providers and receivers | per reference flow | Calibrated/traceable primary records, actual identity/provider and uncertainty; resolve coverage gaps before finalization. |
| cp_laboratory | bore_removal | conditional independent laboratory analysis | primary records | job_id; node_id; event_id; sample_id; provider; method; parameters; analysis_package; delivered_count; included_containers; included_preservatives; transport_coverage; retest_reason; record_id | Count actual delivered compatible analysis packages with sample/event IDs and provider method/coverage; keep different packages distinct and link construction-stage acceptance/retests. No analyses outside this stage contract are silently imported. | Item(s) | each actual event | Whole job including failures/retests | Actual site/job and named provider/receiver | per reference flow | Actual package/method/count records and traceable provider scope prevent duplicate sample materials and transport. |
| cp_supplied_air | bore_removal | conditional externally supplied compressed air | primary records | job_id; node_id; event_id; provider; supply_record; composition; quality; delivered_mass_kg; volume_m3; pressure_kPa; temperature_C; density_kg_m3; compression_coverage; owned_air_excluded | Confirm external product supply actually exists; meter delivery mass or actual state-qualified volume and use documented state/composition-specific density. Map provider compression boundary and exclude duplicate own compressor air/energy/assets for the same supplied quantity. | kg; m3; kPa; degC | each actual event | Whole job including failures/retests | Actual site/job and named provider/receiver | per reference flow | Actual meter/state/density and supply coverage; no universal air mass/pressure or default externally supplied air. |
| cp_completion_releases | well_completion | conditional completion releases | primary records | job_id; bore_id; event_id; grout_or_joining_material; cleanup_activity; substance; species_basis; medium; release_flow_m3; concentration_mg_L; release_mass_kg; method_id; waste_coverage; uncertainty; concrete_exchange_id; physical_event_id; actual_identity_id; actual_state; receiver_or_provider_gate; native_quantity; native_unit; unique_property; measurement_method_id | Monitor actual grouting/joining/cleanup release or use an applicable documented method; preserve substance/medium and solution versus active mass. Contained residue/liquid goes to `completion_waste_steel_casing`; `completion_waste_thermoplastic_casing`; `completion_waste_hardened_grout`; `completion_waste_liquid_grout`; `completion_waste_cleanup_wastewater`; report relevant unmeasured release as a gap, never zero. Record each actual child/refined exchange independently by identity, physical event, state, gate and period. Retain all original obligations even where a corresponding exchange identity is not yet known. Do not allocate a family total or copy its numerical Range to children, count a carrier and its contained material twice, or turn missing occurrence/quantity/native reference into zero. Each concrete exchange has one property and one unit; other CP readings are auxiliary and require evidenced conversion. Missing required refinement blocks dataset completion. | kg; m3; mg/L | each actual event | Whole job including failures/retests | Actual site/job and named provider/receiver | per reference flow | Actual activity/material, release evidence/method, environmental medium and uncertainty; no invented universal grout emissions. |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| job_normalization | all inventory rows | Collect all job-attributable events, failures and provider/asset shares, then divide each homogeneous exchange quantity by actual accepted civil well count for the same declared route/gate. No completed well means no normalized accepted service dataset. | actual event/quantity records; accepted_count; job_id | quantity per reference flow |  |
| physical_balance | all material and water rows | Reconcile actual gross opening plus receipt quantities with placement/use, documented outward return, waste/release and retained closing stocks by identity; document conversion/measurement uncertainty and every physical destination. This balance does not invent a product output for stock or credit for waste. | actual gross/custody/meter/stock records | reconciled actual exchange quantities and data gaps |  |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| route_gate | accepted_civil_well | Site/geology/non-flowing/air-rotary route and pump-free gate must match actual permit/design; construction yield/sample acceptance is stage-specific, not water-service approval. | cp_accept; approved actual records |
| identities | all inventory rows | Each conditional umbrella expands to actual concrete exchanges; verify identity, property and unit independently before final TIDAS process publication. Preserve unresolved Energy/Duration/Transport support until verified. | actual supplier/receiver/substance records and verified platform chain |
| balances | all material and water rows | Reconcile gross receipts/opening stock, placement/use, actual outward returns, waste/releases and closing stock by identity. Water source and wet-solids bases must close with quantified uncertainty; no net-plus-return duplication. | weigh/meter/custody balances |
| period_assets | `support_assets_rig`; `support_assets_compressor`; `support_assets_temporary_pump` | Cover complete asset production/use/maintenance/replacement/removal, other jobs and reporting periods with traceable denominator and provider phase boundary; unresolved retirement/replacement blocks finalization. | cp_assets life register and provider scope |
| uncertainty | all rows | Report actual dates, calibration and detection limits, coverage, sampling representativeness and calculated-factor applicability. Missing/estimated quantity or release remains explicit, never a zero placeholder. | protocol records and uncertainty ledger |
| tests | develop_accept | Retain actual yield-test method, duration/rate/levels and design acceptance source, construction disinfection concentration/contact/flush endpoints with specified units/tolerances, certified actual lab/authority criteria and all failed/retest closure. | cp_accept; cp_disinfect; actual authorized protocol |
| coverage | all processes | Include transport, wear, packaging, chemicals, energy, shared assets, failed holes and waste receivers. Identify actual new enabling work owner/gate and every supplier-included role. | scope/coverage matrix plus event/custody records |
| `refine_drill_additives` | `drill_additives_hammer_lubricant`; `drill_additives_foam` | Preserve this actual collection and closure scope as a mandatory dataset-production requirement: Conditional semantic requirement: instantiate each actual hammer lubricant, foam or other approved drilling additive as a distinct formulation and use. Include DTH lubrication where used, including compressor-carried lubricant; do not invent a foam input. Supplier-covered material is not added again. Range evidence need: Actual bit/hammer, lubricant/additive specification, active fraction and issues are required; no universal chemical dose or zero oil release is justified. Independently establish every actual identity, state, real provider/receiver and exactly one exchange property/unit before constructing its flow card. Each actual exchange requires its own recorded quantity and applicable method, uncertainty and custody/fate coverage. Auxiliary CP units do not authorize extra exchange views. Actual occurrence unknown is not zero; never invent a material/species/provider list or split a parent total. Quantitative screening evidence must fit each actual exchange; a former family interval cannot be copied or divided into child ranges. Further actual identities not fully specified by the conditional children require mandatory refinement and prevent dataset completion; this requirement is not itself a flow exchange. Other actual approved drilling additives require exact formulation/use/native unit/quantity, not same lubricant again in maintenance supplies. | `cp_drill_chem`; actual independent records and identity/unit evidence |
| `refine_support_fuels` | actual independently refined exchanges | Preserve this actual collection and closure scope as a mandatory dataset-production requirement: Instantiate each fuel at actual supply/provider gate; tag metered rig/compressor/drilling/completion/test and transport uses by asset/event. Supplier-covered fuel must not be added again. Fuel oil is not an elementary air emission. Range evidence need: Actual fuel type, tank/meter records, task use and calibrated density are needed; no generic fuel per metre, compressor load or vehicle consumption factor. Independently establish every actual identity, state, real provider/receiver and exactly one exchange property/unit before constructing its flow card. Each actual exchange requires its own recorded quantity and applicable method, uncertainty and custody/fate coverage. Auxiliary CP units do not authorize extra exchange views. Actual occurrence unknown is not zero; never invent a material/species/provider list or split a parent total. Quantitative screening evidence must fit each actual exchange; a former family interval cannot be copied or divided into child ranges. Further actual identities not fully specified by the conditional children require mandatory refinement and prevent dataset completion; this requirement is not itself a flow exchange. Actual fuel by supply gate/asset/event across rig/compressor/drilling/completion/test/transport, one native unit and independent quantity/burn/stock/usable-return/waste/release; nonreturned unburned losses retain upstream supply burden, provider fuel not double. | `cp_energy`; actual independent records and identity/unit evidence |
| `refine_support_assets` | `support_assets_rig`; `support_assets_compressor`; `support_assets_temporary_pump` | Preserve this actual collection and closure scope as a mandatory dataset-production requirement: Instantiate distinct actual reusable asset/provider services, preserving physical service units and source boundary. Enumerate bore_removal, well_completion and develop_accept consumers and other jobs/periods. A bounded provider dataset must actually cover capital production/maintenance/removal; otherwise supplement missing phases using full-life evidence without duplicating covered use. Range evidence need: Actual asset production/commissioning, use/idle, replacement and retirement phases plus life-service denominator or complete provider coverage are required; no universal life, hour share or zero capital burden. Independently establish every actual identity, state, real provider/receiver and exactly one exchange property/unit before constructing its flow card. Each actual exchange requires its own recorded quantity and applicable method, uncertainty and custody/fate coverage. Auxiliary CP units do not authorize extra exchange views. Actual occurrence unknown is not zero; never invent a material/species/provider list or split a parent total. Quantitative screening evidence must fit each actual exchange; a former family interval cannot be copied or divided into child ranges. Further actual identities not fully specified by the conditional children require mandatory refinement and prevent dataset completion; this requirement is not itself a flow exchange. Actual reusable drill-tool and test-asset functions/models, other native references and uncovered lifecycle phases require exact complete-life service identity/unit. Retain bore_removal/well_completion/develop_accept and all other jobs/periods, provider capital/maintenance/removal, measured job/all-life share and no annual full-asset repetition; no permanent pump operation. | `cp_assets`; actual independent records and identity/unit evidence |
| `refine_support_services` | `support_services_drilling`; `support_services_completion` | Preserve this actual collection and closure scope as a mandatory dataset-production requirement: Conditional requirement for actual independently time-measured drilling/completion or other in-scope specialist services only. Instantiate each actual provider and responsibility gate; replace owned node activity only for its documented coverage and supplement uncovered burdens once. Laboratory analyses and externally supplied compressed air have separate truthful cards; paperwork alone creates no service exchange. Range evidence need: Actual time-based provider contract, delivered hours, independent gate and covered/excluded inventory phases are required; no universal service hours or hidden capital omissions. Independently establish every actual identity, state, real provider/receiver and exactly one exchange property/unit before constructing its flow card. Each actual exchange requires its own recorded quantity and applicable method, uncertainty and custody/fate coverage. Auxiliary CP units do not authorize extra exchange views. Actual occurrence unknown is not zero; never invent a material/species/provider list or split a parent total. Quantitative screening evidence must fit each actual exchange; a former family interval cannot be copied or divided into child ranges. Further actual identities not fully specified by the conditional children require mandatory refinement and prevent dataset completion; this requirement is not itself a flow exchange. Other actual specialist functions/native references require exact provider and responsibility gate. Only documented coverage replaces owned node activity; no full service plus all same owned resources. Laboratory Count and supplied compressed-air product retain their separate real cards. Paperwork no physical service. | `cp_services`; actual independent records and identity/unit evidence |
| `refine_support_materials` | `support_materials_wear_bit`; `support_materials_maintenance_oil`; `support_materials_cleaner` | Preserve this actual collection and closure scope as a mandatory dataset-production requirement: Instantiate actual wear bits, replacement drill parts, separately consumed oils/cleaners and protective supplies by material/formulation. Permanent asset replacements already in `support_assets_rig`; `support_assets_compressor`; `support_assets_temporary_pump` are not added again. In-scope hammer lubricant belongs `drill_additives_hammer_lubricant`; maintenance consumables belong here only once. Range evidence need: Actual wear/replacement schedule, quantities, mass and provider coverage are needed; no universal drill-bit life or lubricant consumption. Independently establish every actual identity, state, real provider/receiver and exactly one exchange property/unit before constructing its flow card. Each actual exchange requires its own recorded quantity and applicable method, uncertainty and custody/fate coverage. Auxiliary CP units do not authorize extra exchange views. Actual occurrence unknown is not zero; never invent a material/species/provider list or split a parent total. Quantitative screening evidence must fit each actual exchange; a former family interval cannot be copied or divided into child ranges. Further actual identities not fully specified by the conditional children require mandatory refinement and prevent dataset completion; this requirement is not itself a flow exchange. Actual other replacement drill-part functions/protective supplies/SKUs/native references require concrete independent records; permanent replacements already in asset service not new purchase. | `cp_support_materials`; actual independent records and identity/unit evidence |
| `refine_support_returns` | `support_returns_hammer_lubricant`; `support_returns_foam`; `support_returns_wear_bit` | Preserve this actual collection and closure scope as a mandatory dataset-production requirement: Split actual returned unused fuel/material and returnable packaging by identified product and receiver. Packaging included in supplied goods has its upstream burden there; outward return is a custody record without a second upstream packaging purchase or assumed avoided-production credit. Range evidence need: Actual outward custody, item/material mass and receipt evidence are required; no default packaging/return factor. Independently establish every actual identity, state, real provider/receiver and exactly one exchange property/unit before constructing its flow card. Each actual exchange requires its own recorded quantity and applicable method, uncertainty and custody/fate coverage. Auxiliary CP units do not authorize extra exchange views. Actual occurrence unknown is not zero; never invent a material/species/provider list or split a parent total. Quantitative screening evidence must fit each actual exchange; a former family interval cannot be copied or divided into child ranges. Further actual identities not fully specified by the conditional children require mandatory refinement and prevent dataset completion; this requirement is not itself a flow exchange. Actual fuel/other material/returnable-packaging products require exact original identity/state/native unit/receiver and burden bridge; upstream included packaging no second purchase/credit and closing stock not exit. | `cp_support_balance`; actual independent records and identity/unit evidence |
| `refine_support_waste` | `support_waste_used_oil`; `support_waste_worn_bit` | Preserve this actual collection and closure scope as a mandatory dataset-production requirement: Instantiate every real packaging, used oil, worn component and other support waste by identity/hazard status/receiver. Avoid duplicate supplier-covered removal and capital retirement in `support_assets_rig`; `support_assets_compressor`; `support_assets_temporary_pump`; independent project waste remains included. Range evidence need: Actual packaging weights, wear/oil waste and receiver classification are needed; no generic waste fraction or recovery credit. Independently establish every actual identity, state, real provider/receiver and exactly one exchange property/unit before constructing its flow card. Each actual exchange requires its own recorded quantity and applicable method, uncertainty and custody/fate coverage. Auxiliary CP units do not authorize extra exchange views. Actual occurrence unknown is not zero; never invent a material/species/provider list or split a parent total. Quantitative screening evidence must fit each actual exchange; a former family interval cannot be copied or divided into child ranges. Further actual identities not fully specified by the conditional children require mandatory refinement and prevent dataset completion; this requirement is not itself a flow exchange. Actual packaging, other worn parts/contaminated supplies/combined mixtures and hazard/receiver differences require independent actual records; supplier-covered removal/capital retirement not double. | `cp_support_balance`; actual independent records and identity/unit evidence |
| `refine_drill_releases` | actual independently refined exchanges | Preserve this actual collection and closure scope as a mandatory dataset-production requirement: Conditional requirement: instantiate each measured or defensibly calculated substance/species and receiving medium, including relevant airborne fines or compressor hydrocarbons and actual water discharges. Record particle size/substance basis and incidental formation effects in quality disclosure. Do not turn all wet cuttings or water into a single pollutant. Range evidence need: Actual substance, medium, flow/concentration or validated factor applicability and capture efficiency are needed; an unmeasured release is not zero. Independently establish every actual identity, state, real provider/receiver and exactly one exchange property/unit before constructing its flow card. Each actual exchange requires its own recorded quantity and applicable method, uncertainty and custody/fate coverage. Auxiliary CP units do not authorize extra exchange views. Actual occurrence unknown is not zero; never invent a material/species/provider list or split a parent total. Quantitative screening evidence must fit each actual exchange; a former family interval cannot be copied or divided into child ranges. Further actual identities not fully specified by the conditional children require mandatory refinement and prevent dataset completion; this requirement is not itself a flow exchange. Actual substance, disjoint particle-size fraction and air/water/soil receiving compartment; matched measurement or species/activity factor, whole-fluid composition/fate audit, capture and uncertainty; unknown is not zero. | `cp_drill_releases`; actual independent records and identity/unit evidence |
| `refine_support_emissions` | actual independently refined exchanges | Preserve this actual collection and closure scope as a mandatory dataset-production requirement: Instantiate each actual pollutant/species/particle-size and air/water/soil medium based on calibrated measurement or an applicable documented emissions method. Link fuel/asset/task and boundary: do not duplicate upstream fuel combustion or provider-covered transport emissions. Range evidence need: Actual engine specification, load/operation, factor scope/speciation or measured concentration/flow are required; no generic CO2/NOx/PM factor is imported without evidence. Independently establish every actual identity, state, real provider/receiver and exactly one exchange property/unit before constructing its flow card. Each actual exchange requires its own recorded quantity and applicable method, uncertainty and custody/fate coverage. Auxiliary CP units do not authorize extra exchange views. Actual occurrence unknown is not zero; never invent a material/species/provider list or split a parent total. Quantitative screening evidence must fit each actual exchange; a former family interval cannot be copied or divided into child ranges. Further actual identities not fully specified by the conditional children require mandatory refinement and prevent dataset completion; this requirement is not itself a flow exchange. Actual substance, disjoint particle-size fraction and air/water/soil receiving compartment; matched measurement or species/activity factor, whole-fluid composition/fate audit, capture and uncertainty; unknown is not zero. | `cp_support_emissions`; actual independent records and identity/unit evidence |
| `refine_well_casing` | `well_casing_steel`; `well_casing_thermoplastic` | Preserve this actual collection and closure scope as a mandatory dataset-production requirement: Specify actual steel or thermoplastic grade, dimensions, potable-well suitability and supplier gate. Casing protects the overburden section and integrates with the declared seal/wellhead arrangement; identify supplied couplings in the bill of supply and keep separately purchased couplings in `completion_components_coupling`; `completion_components_sanitary_cap`; `completion_components_seal`. Range evidence need: Actual approved casing schedule, lengths and traceable mass data are needed; no universal depth/diameter/length-to-mass factor is prescribed. Independently establish every actual identity, state, real provider/receiver and exactly one exchange property/unit before constructing its flow card. Each actual exchange requires its own recorded quantity and applicable method, uncertainty and custody/fate coverage. Auxiliary CP units do not authorize extra exchange views. Actual occurrence unknown is not zero; never invent a material/species/provider list or split a parent total. Quantitative screening evidence must fit each actual exchange; a former family interval cannot be copied or divided into child ranges. Further actual identities not fully specified by the conditional children require mandatory refinement and prevent dataset completion; this requirement is not itself a flow exchange. Actual grades/diameters/potable suitability/SKUs require exact independent records; separately purchased couplings not embedded a second time, other material not guessed. | `cp_completion_materials`; actual independent records and identity/unit evidence |
| `refine_sealing_grout` | `sealing_grout_dry_premix`; `sealing_grout_prepared`; `sealing_grout_cement`; `sealing_grout_bentonite` | Preserve this actual collection and closure scope as a mandatory dataset-production requirement: Specify approved actual grout compatible with geology/hydrology, supplied dry/prepared state and annular seal duty. If genuinely independent preparation delivers grout, record its actual preparation gate and upstream inventory once. Embedded mixing remains within well_completion: instantiate cement/bentonite/other ingredients individually plus water, rather than counting both ingredients and prepared grout. Range evidence need: Actual authorized mix specification, state, water ratio, batch yields and annular geometry/placement are needed; no generic mix, cure time, dosage or loss factor is imposed. Independently establish every actual identity, state, real provider/receiver and exactly one exchange property/unit before constructing its flow card. Each actual exchange requires its own recorded quantity and applicable method, uncertainty and custody/fate coverage. Auxiliary CP units do not authorize extra exchange views. Actual occurrence unknown is not zero; never invent a material/species/provider list or split a parent total. Quantitative screening evidence must fit each actual exchange; a former family interval cannot be copied or divided into child ranges. Further actual identities not fully specified by the conditional children require mandatory refinement and prevent dataset completion; this requirement is not itself a flow exchange. Actual other approved ingredients/additives/material/state/native-unit identities require independent real recipe/receipt evidence; each batch chooses one supply mode, mixed mode across distinct real batches must retain batch IDs and no duplicate physical quantity. Whole onsite grout yield is a reconciliation state, not a second purchased input. | `cp_grout`; actual independent records and identity/unit evidence |
| `refine_completion_components` | `completion_components_coupling`; `completion_components_sanitary_cap`; `completion_components_seal` | Preserve this actual collection and closure scope as a mandatory dataset-production requirement: Instantiate each independently supplied compatible coupling, sanitary cap, seal and other approved completion component by its true material and supply identity. Joining/grouting/wellhead labour is this node responsibility; do not add a second generic installation service over the same owned work. Range evidence need: Actual bill of supply, compatible design and model-specific masses are needed; heterogeneous components cannot be summed as one exchange. Independently establish every actual identity, state, real provider/receiver and exactly one exchange property/unit before constructing its flow card. Each actual exchange requires its own recorded quantity and applicable method, uncertainty and custody/fate coverage. Auxiliary CP units do not authorize extra exchange views. Actual occurrence unknown is not zero; never invent a material/species/provider list or split a parent total. Quantitative screening evidence must fit each actual exchange; a former family interval cannot be copied or divided into child ranges. Further actual identities not fully specified by the conditional children require mandatory refinement and prevent dataset completion; this requirement is not itself a flow exchange. Other actual approved completion parts need exact identity/native unit, factory/inseparable coupling not double. Owned joining/grouting/wellhead labour not another generic installation service. | `cp_completion_materials`; actual independent records and identity/unit evidence |
| `refine_completion_returns` | `completion_returns_steel_casing`; `completion_returns_thermoplastic_casing`; `completion_returns_dry_premix`; `completion_returns_prepared_grout`; `completion_returns_cement`; `completion_returns_bentonite` | Preserve this actual collection and closure scope as a mandatory dataset-production requirement: Only real outward return of usable identified casing/components/grout product qualifies. Match shipment and receiving custody; retained closing stock stays a balance carried to later jobs, not an output exchange. Range evidence need: Actual outward custody, quantity and supplier credit/receiving evidence are required; no default return percentage. Independently establish every actual identity, state, real provider/receiver and exactly one exchange property/unit before constructing its flow card. Each actual exchange requires its own recorded quantity and applicable method, uncertainty and custody/fate coverage. Auxiliary CP units do not authorize extra exchange views. Actual occurrence unknown is not zero; never invent a material/species/provider list or split a parent total. Quantitative screening evidence must fit each actual exchange; a former family interval cannot be copied or divided into child ranges. Further actual identities not fully specified by the conditional children require mandatory refinement and prevent dataset completion; this requirement is not itself a flow exchange. Actual component/other product and onsite-prepared recovered-grout output states require own exact identity/acceptance/native unit/burden records; actual shipment/receiving custody and closing carried stock distinct. | `cp_completion_balance`; actual independent records and identity/unit evidence |
| `refine_completion_waste` | `completion_waste_steel_casing`; `completion_waste_thermoplastic_casing`; `completion_waste_hardened_grout`; `completion_waste_liquid_grout`; `completion_waste_cleanup_wastewater` | Preserve this actual collection and closure scope as a mandatory dataset-production requirement: Instantiate separate actual scrap, rejected components and hardened/liquid grout residues by composition and receiver. Defective seal/wellhead work returns to well_completion, with extra materials and waste retained; unlawful or unresolved disposal blocks finalization. Range evidence need: Actual component rejects, batch residue, weights and destination evidence are needed; no universal installation loss or scrap credit. Independently establish every actual identity, state, real provider/receiver and exactly one exchange property/unit before constructing its flow card. Each actual exchange requires its own recorded quantity and applicable method, uncertainty and custody/fate coverage. Auxiliary CP units do not authorize extra exchange views. Actual occurrence unknown is not zero; never invent a material/species/provider list or split a parent total. Quantitative screening evidence must fit each actual exchange; a former family interval cannot be copied or divided into child ranges. Further actual identities not fully specified by the conditional children require mandatory refinement and prevent dataset completion; this requirement is not itself a flow exchange. Actual rejected components/other physical mixtures/hazard/receiver states need exact independent dispatch records; defective seal/wellhead work returns for correction with added resources, unlawful/unresolved disposal blocks completion. | `cp_completion_balance`; actual independent records and identity/unit evidence |
| `refine_completion_releases` | actual independently refined exchanges | Preserve this actual collection and closure scope as a mandatory dataset-production requirement: Conditional: instantiate actual characterized substance/species and receiving air/water/soil medium from grout placement, actual joining and cleanup. Contained grout residue/cleanup wastewater is managed waste under `completion_waste_steel_casing`; `completion_waste_thermoplastic_casing`; `completion_waste_hardened_grout`; `completion_waste_liquid_grout`; `completion_waste_cleanup_wastewater`; lawful environmental discharge is elementary. Neither chemical reaction nor emissions are invented from grout presence. Range evidence need: Actual joining/grout/cleanup materials, release existence, concentration/flow or valid factor, medium and uncertainty are required; no universal grout emission or zero-release assumption. Independently establish every actual identity, state, real provider/receiver and exactly one exchange property/unit before constructing its flow card. Each actual exchange requires its own recorded quantity and applicable method, uncertainty and custody/fate coverage. Auxiliary CP units do not authorize extra exchange views. Actual occurrence unknown is not zero; never invent a material/species/provider list or split a parent total. Quantitative screening evidence must fit each actual exchange; a former family interval cannot be copied or divided into child ranges. Further actual identities not fully specified by the conditional children require mandatory refinement and prevent dataset completion; this requirement is not itself a flow exchange. Actual substance, disjoint particle-size fraction and air/water/soil receiving compartment; matched measurement or species/activity factor, whole-fluid composition/fate audit, capture and uncertainty; unknown is not zero. | `cp_completion_releases`; actual independent records and identity/unit evidence |
| `refine_sampling_consumables` | `sampling_consumables_container`; `sampling_consumables_preservative` | Preserve this actual collection and closure scope as a mandatory dataset-production requirement: Instantiate each real sample container, preservative or single-use test consumable not covered by the external laboratory service. Record sample event and accepted method, transport packing and receiver; do not assume laboratory packaging is also purchased by driller. Range evidence need: Actual sampling plan, sample counts, composition/mass and provider scope are required; no fixed bottles or tests per well. Independently establish every actual identity, state, real provider/receiver and exactly one exchange property/unit before constructing its flow card. Each actual exchange requires its own recorded quantity and applicable method, uncertainty and custody/fate coverage. Auxiliary CP units do not authorize extra exchange views. Actual occurrence unknown is not zero; never invent a material/species/provider list or split a parent total. Quantitative screening evidence must fit each actual exchange; a former family interval cannot be copied or divided into child ranges. Further actual identities not fully specified by the conditional children require mandatory refinement and prevent dataset completion; this requirement is not itself a flow exchange. Actual single-use test materials and transport packaging/SKUs/native units require independent accepted-method/event/receiver records; no assumed duplicate laboratory packing. | `cp_test_materials`; actual independent records and identity/unit evidence |
| `refine_development_managed_liquid` | `development_managed_liquid_development_test`; `development_managed_liquid_disinfection_flush` | Preserve this actual collection and closure scope as a mandatory dataset-production requirement: Instantiate actual removed water/slurry/disinfection flush waste by quality and receiver. Determine lawful custody after actual tests; do not label contaminated/chlorinated water a saleable product or treat all withdrawal as discharge. Range evidence need: Actual water-quality/chlorine/solids characterization, masses and disposal receipts are needed; no universal dechlorination or waste fraction. Independently establish every actual identity, state, real provider/receiver and exactly one exchange property/unit before constructing its flow card. Each actual exchange requires its own recorded quantity and applicable method, uncertainty and custody/fate coverage. Auxiliary CP units do not authorize extra exchange views. Actual occurrence unknown is not zero; never invent a material/species/provider list or split a parent total. Quantitative screening evidence must fit each actual exchange; a former family interval cannot be copied or divided into child ranges. Further actual identities not fully specified by the conditional children require mandatory refinement and prevent dataset completion; this requirement is not itself a flow exchange. Actual combined physical batches or other quality/receiver/hazard differences require exact whole-mixture identity and independent quantity once, no allocation of a total. Contaminated/chlorinated water not saleable by default; withdrawal not automatic discharge. | `cp_dev_disposition`; actual independent records and identity/unit evidence |
| `refine_development_waste` | `development_waste_sediment`; `development_waste_sampling_container` | Preserve this actual collection and closure scope as a mandatory dataset-production requirement: Record captured development fines separately from liquid already accounted for and split real single-use test waste by material/contamination status and receiver. Retest waste remains attributable to the accepted job. Range evidence need: Actual captured sediment, consumable weights/contamination and destination are needed; no default sediment or test-waste rate. Independently establish every actual identity, state, real provider/receiver and exactly one exchange property/unit before constructing its flow card. Each actual exchange requires its own recorded quantity and applicable method, uncertainty and custody/fate coverage. Auxiliary CP units do not authorize extra exchange views. Actual occurrence unknown is not zero; never invent a material/species/provider list or split a parent total. Quantitative screening evidence must fit each actual exchange; a former family interval cannot be copied or divided into child ranges. Further actual identities not fully specified by the conditional children require mandatory refinement and prevent dataset completion; this requirement is not itself a flow exchange. Other single-use test articles/material/contamination/receiver streams need exact separate records; same collected liquid/constituent not double, retest waste still accepted-job attributable. | `cp_dev_disposition`; actual independent records and identity/unit evidence |
| `refine_development_releases` | actual independently refined exchanges | Preserve this actual collection and closure scope as a mandatory dataset-production requirement: Instantiate actual substance/species and receiving medium from lawful release records, including identified residual disinfectant where released and actual water returned to environment. Water resource balance and pollutant mass are different quantities; do not equate solution mass to chlorine mass. Range evidence need: Actual release permit/method, medium, concentration/time and uncertainty are needed; neither flush completion nor lack of measurement proves zero release. Independently establish every actual identity, state, real provider/receiver and exactly one exchange property/unit before constructing its flow card. Each actual exchange requires its own recorded quantity and applicable method, uncertainty and custody/fate coverage. Auxiliary CP units do not authorize extra exchange views. Actual occurrence unknown is not zero; never invent a material/species/provider list or split a parent total. Quantitative screening evidence must fit each actual exchange; a former family interval cannot be copied or divided into child ranges. Further actual identities not fully specified by the conditional children require mandatory refinement and prevent dataset completion; this requirement is not itself a flow exchange. Actual substance, disjoint particle-size fraction and air/water/soil receiving compartment; matched measurement or species/activity factor, whole-fluid composition/fate audit, capture and uncertainty; unknown is not zero. | `cp_dev_disposition`; actual independent records and identity/unit evidence |
| `atomic_exchange_identity_unit` | all inventory rows | Each concrete flow card identifies exactly one actual independently supplied product/SKU/formulation, complete assembly, complete single-function or genuine complete bounded provider service, actual waste composite/state/receiver, or substance/size/receiving medium, with exactly one property and unit. Different actual identities require independent quantities and records, not a summed family exchange. A complete product/carrier includes its contents once. Same unchanged SKU/state usable supply/return pairs and matched physical internal send/receive pairs use the same selected property/unit; kg and count or MJ and kWh auxiliaries are nonadditive measurements, never duplicate exchanges. Missing identity/occurrence/quantity/native reference is a gap, not zero. Any pooled denominator retains original configuration strata, accepted state/gate and actual causal attribution; no unlike jobs/branches/routes treated as equivalent. | actual identity, unit, custody and independent quantity evidence |
| `asset_final_normalization_once` | all inventory rows | An asset-equivalent formula already ending in division by N, D or A is the final quantity per reference flow. Its complete-life fraction and accepted-output normalization constitute the same normalization operation as the general normalization rule; never divide it by that denominator again. Apply the complete-life upstream burden exactly once. Actual complete provider event counts remain event quantities, not owned-asset fractions. | actual identity, unit, custody and independent quantity evidence |
| `grout_supply_mode_exclusive` | `sealing_grout_dry_premix`; `sealing_grout_prepared`; `sealing_grout_cement`; `sealing_grout_bentonite`; `grout_water` | For each batch choose exactly one supply-mode group: dry_premix, prepared_grout, or separate_ingredients. Cement and bentonite are separate actual product inputs only in separate_ingredients mode and can both apply when evidenced by the actual approved recipe; no assumed formulation or apportioned parent mass. A dry premix includes its ingredients once; a prepared product includes its ingredients and water once. Embedded onsite mixing is well_completion work and its measured grout yield is reconciliation only. A prepared input is permitted only for real supply or genuinely independent preparation handoff with actual upstream coverage. grout_water records only separately supplied added/cleanup water, never water already included in a prepared product. Missing mode, recipe/receipt/handoff or actual other ingredient identity/quantity blocks completion. | cp_grout; actual batch/recipe/supply/handoff evidence |


## 9. Validation Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| scope_fit | accepted_civil_well | Fail dataset route-fit for excluded geology/flowing/technology/system scope; do not drop necessary work to fit boundary. |  |
| gate_count | accepted_civil_well | Only one completed actual civil well per reference; reconcile accepted_count with signed gate and exact stage criteria, actual test/sample results and later duty owners. A rejected/unfinished hole cannot be a reference output. | massdep-private-well-guidelines |
| water_source_balance | all water and residual rows | Verify purchased/injected water versus groundwater withdrawal, recirculation/stock and cuttings-water/managed-liquid/releases; no double-counted mixtures, groundwater sale or invented aquifer production. |  |
| identity_units | all inventory rows | Unresolved actual identities and Energy/Duration/Transport support prevent final concrete exchanges. Verify actual property/group/unit chain and explicit physical conversion; no near-match drilling/monitoring/pumped-water UUID or Count conversion for h/kWh/tkm. |  |
| asset_periods | `support_assets_rig`; `support_assets_compressor`; `support_assets_temporary_pump` | Require all consuming nodes and other jobs/periods, phase coverage, life-service attribution and replacement/termination evidence; verify shares count production/use/removal once and missing coverage is declared. |  |
| reject_closure | all processes | Match each failed bore/defective completion/inadequate development/yield/sample to responsible loop or lawful closure and residual receiver; retain all attributable burden and exclude unresolved rejects from accepted count. |  |
| custody | all material rows | Match actual gross receipt/issue/outward return/waste/stock balance and provider boundaries; retained stock is not outward product and no return is netted then counted again. |  |
| range_quality | all inventory rows | Satisfy each card’s stated actual Range-evidence requirement and retain actual specification/measurement uncertainty; no source example becomes universal dose/geometry/yield/duration/life/emission default. |  |
| `atomization_drill_additives_complete` | `drill_additives_hammer_lubricant`; `drill_additives_foam` | Require independent actual quantity, identity/state/gate and one property/unit for each applicable exchange in this scope; preserve full original protocol, normalization, stock, returns, waste/releases and shared-resource ownership. Reject completion on an unknown required child, unsupported native reference or missing quantity; evidenced nonoccurrence is separate from missing data. No family-total allocation, copied family Range or duplicate carrier/constituent/bundled-part exchange. Completion requires satisfying `refine_drill_additives` with actual records; unresolved required expansion blocks the dataset. | `frtr-air-rotary` |
| `atomization_support_fuels_complete` | actual independently refined exchanges | Require independent actual quantity, identity/state/gate and one property/unit for each applicable exchange in this scope; preserve full original protocol, normalization, stock, returns, waste/releases and shared-resource ownership. Reject completion on an unknown required child, unsupported native reference or missing quantity; evidenced nonoccurrence is separate from missing data. No family-total allocation, copied family Range or duplicate carrier/constituent/bundled-part exchange. Completion requires satisfying `refine_support_fuels` with actual records; unresolved required expansion blocks the dataset. |  |
| `atomization_support_assets_complete` | `support_assets_rig`; `support_assets_compressor`; `support_assets_temporary_pump` | Require independent actual quantity, identity/state/gate and one property/unit for each applicable exchange in this scope; preserve full original protocol, normalization, stock, returns, waste/releases and shared-resource ownership. Reject completion on an unknown required child, unsupported native reference or missing quantity; evidenced nonoccurrence is separate from missing data. No family-total allocation, copied family Range or duplicate carrier/constituent/bundled-part exchange. Completion requires satisfying `refine_support_assets` with actual records; unresolved required expansion blocks the dataset. |  |
| `atomization_support_services_complete` | `support_services_drilling`; `support_services_completion` | Require independent actual quantity, identity/state/gate and one property/unit for each applicable exchange in this scope; preserve full original protocol, normalization, stock, returns, waste/releases and shared-resource ownership. Reject completion on an unknown required child, unsupported native reference or missing quantity; evidenced nonoccurrence is separate from missing data. No family-total allocation, copied family Range or duplicate carrier/constituent/bundled-part exchange. Completion requires satisfying `refine_support_services` with actual records; unresolved required expansion blocks the dataset. |  |
| `atomization_support_materials_complete` | `support_materials_wear_bit`; `support_materials_maintenance_oil`; `support_materials_cleaner` | Require independent actual quantity, identity/state/gate and one property/unit for each applicable exchange in this scope; preserve full original protocol, normalization, stock, returns, waste/releases and shared-resource ownership. Reject completion on an unknown required child, unsupported native reference or missing quantity; evidenced nonoccurrence is separate from missing data. No family-total allocation, copied family Range or duplicate carrier/constituent/bundled-part exchange. Completion requires satisfying `refine_support_materials` with actual records; unresolved required expansion blocks the dataset. | `frtr-air-rotary` |
| `atomization_support_returns_complete` | `support_returns_hammer_lubricant`; `support_returns_foam`; `support_returns_wear_bit` | Require independent actual quantity, identity/state/gate and one property/unit for each applicable exchange in this scope; preserve full original protocol, normalization, stock, returns, waste/releases and shared-resource ownership. Reject completion on an unknown required child, unsupported native reference or missing quantity; evidenced nonoccurrence is separate from missing data. No family-total allocation, copied family Range or duplicate carrier/constituent/bundled-part exchange. Completion requires satisfying `refine_support_returns` with actual records; unresolved required expansion blocks the dataset. |  |
| `atomization_support_waste_complete` | `support_waste_used_oil`; `support_waste_worn_bit` | Require independent actual quantity, identity/state/gate and one property/unit for each applicable exchange in this scope; preserve full original protocol, normalization, stock, returns, waste/releases and shared-resource ownership. Reject completion on an unknown required child, unsupported native reference or missing quantity; evidenced nonoccurrence is separate from missing data. No family-total allocation, copied family Range or duplicate carrier/constituent/bundled-part exchange. Completion requires satisfying `refine_support_waste` with actual records; unresolved required expansion blocks the dataset. |  |
| `atomization_drill_releases_complete` | actual independently refined exchanges | Require independent actual quantity, identity/state/gate and one property/unit for each applicable exchange in this scope; preserve full original protocol, normalization, stock, returns, waste/releases and shared-resource ownership. Reject completion on an unknown required child, unsupported native reference or missing quantity; evidenced nonoccurrence is separate from missing data. No family-total allocation, copied family Range or duplicate carrier/constituent/bundled-part exchange. Completion requires satisfying `refine_drill_releases` with actual records; unresolved required expansion blocks the dataset. | `frtr-air-rotary` |
| `atomization_support_emissions_complete` | actual independently refined exchanges | Require independent actual quantity, identity/state/gate and one property/unit for each applicable exchange in this scope; preserve full original protocol, normalization, stock, returns, waste/releases and shared-resource ownership. Reject completion on an unknown required child, unsupported native reference or missing quantity; evidenced nonoccurrence is separate from missing data. No family-total allocation, copied family Range or duplicate carrier/constituent/bundled-part exchange. Completion requires satisfying `refine_support_emissions` with actual records; unresolved required expansion blocks the dataset. |  |
| `atomization_well_casing_complete` | `well_casing_steel`; `well_casing_thermoplastic` | Require independent actual quantity, identity/state/gate and one property/unit for each applicable exchange in this scope; preserve full original protocol, normalization, stock, returns, waste/releases and shared-resource ownership. Reject completion on an unknown required child, unsupported native reference or missing quantity; evidenced nonoccurrence is separate from missing data. No family-total allocation, copied family Range or duplicate carrier/constituent/bundled-part exchange. Completion requires satisfying `refine_well_casing` with actual records; unresolved required expansion blocks the dataset. | `massdep-private-well-guidelines` |
| `atomization_sealing_grout_complete` | `sealing_grout_dry_premix`; `sealing_grout_prepared`; `sealing_grout_cement`; `sealing_grout_bentonite` | Require independent actual quantity, identity/state/gate and one property/unit for each applicable exchange in this scope; preserve full original protocol, normalization, stock, returns, waste/releases and shared-resource ownership. Reject completion on an unknown required child, unsupported native reference or missing quantity; evidenced nonoccurrence is separate from missing data. No family-total allocation, copied family Range or duplicate carrier/constituent/bundled-part exchange. Completion requires satisfying `refine_sealing_grout` with actual records; unresolved required expansion blocks the dataset. | `massdep-private-well-guidelines` |
| `atomization_completion_components_complete` | `completion_components_coupling`; `completion_components_sanitary_cap`; `completion_components_seal` | Require independent actual quantity, identity/state/gate and one property/unit for each applicable exchange in this scope; preserve full original protocol, normalization, stock, returns, waste/releases and shared-resource ownership. Reject completion on an unknown required child, unsupported native reference or missing quantity; evidenced nonoccurrence is separate from missing data. No family-total allocation, copied family Range or duplicate carrier/constituent/bundled-part exchange. Completion requires satisfying `refine_completion_components` with actual records; unresolved required expansion blocks the dataset. | `massdep-private-well-guidelines` |
| `atomization_completion_returns_complete` | `completion_returns_steel_casing`; `completion_returns_thermoplastic_casing`; `completion_returns_dry_premix`; `completion_returns_prepared_grout`; `completion_returns_cement`; `completion_returns_bentonite` | Require independent actual quantity, identity/state/gate and one property/unit for each applicable exchange in this scope; preserve full original protocol, normalization, stock, returns, waste/releases and shared-resource ownership. Reject completion on an unknown required child, unsupported native reference or missing quantity; evidenced nonoccurrence is separate from missing data. No family-total allocation, copied family Range or duplicate carrier/constituent/bundled-part exchange. Completion requires satisfying `refine_completion_returns` with actual records; unresolved required expansion blocks the dataset. |  |
| `atomization_completion_waste_complete` | `completion_waste_steel_casing`; `completion_waste_thermoplastic_casing`; `completion_waste_hardened_grout`; `completion_waste_liquid_grout`; `completion_waste_cleanup_wastewater` | Require independent actual quantity, identity/state/gate and one property/unit for each applicable exchange in this scope; preserve full original protocol, normalization, stock, returns, waste/releases and shared-resource ownership. Reject completion on an unknown required child, unsupported native reference or missing quantity; evidenced nonoccurrence is separate from missing data. No family-total allocation, copied family Range or duplicate carrier/constituent/bundled-part exchange. Completion requires satisfying `refine_completion_waste` with actual records; unresolved required expansion blocks the dataset. |  |
| `atomization_completion_releases_complete` | actual independently refined exchanges | Require independent actual quantity, identity/state/gate and one property/unit for each applicable exchange in this scope; preserve full original protocol, normalization, stock, returns, waste/releases and shared-resource ownership. Reject completion on an unknown required child, unsupported native reference or missing quantity; evidenced nonoccurrence is separate from missing data. No family-total allocation, copied family Range or duplicate carrier/constituent/bundled-part exchange. Completion requires satisfying `refine_completion_releases` with actual records; unresolved required expansion blocks the dataset. |  |
| `atomization_sampling_consumables_complete` | `sampling_consumables_container`; `sampling_consumables_preservative` | Require independent actual quantity, identity/state/gate and one property/unit for each applicable exchange in this scope; preserve full original protocol, normalization, stock, returns, waste/releases and shared-resource ownership. Reject completion on an unknown required child, unsupported native reference or missing quantity; evidenced nonoccurrence is separate from missing data. No family-total allocation, copied family Range or duplicate carrier/constituent/bundled-part exchange. Completion requires satisfying `refine_sampling_consumables` with actual records; unresolved required expansion blocks the dataset. |  |
| `atomization_development_managed_liquid_complete` | `development_managed_liquid_development_test`; `development_managed_liquid_disinfection_flush` | Require independent actual quantity, identity/state/gate and one property/unit for each applicable exchange in this scope; preserve full original protocol, normalization, stock, returns, waste/releases and shared-resource ownership. Reject completion on an unknown required child, unsupported native reference or missing quantity; evidenced nonoccurrence is separate from missing data. No family-total allocation, copied family Range or duplicate carrier/constituent/bundled-part exchange. Completion requires satisfying `refine_development_managed_liquid` with actual records; unresolved required expansion blocks the dataset. | `massdep-private-well-guidelines` |
| `atomization_development_waste_complete` | `development_waste_sediment`; `development_waste_sampling_container` | Require independent actual quantity, identity/state/gate and one property/unit for each applicable exchange in this scope; preserve full original protocol, normalization, stock, returns, waste/releases and shared-resource ownership. Reject completion on an unknown required child, unsupported native reference or missing quantity; evidenced nonoccurrence is separate from missing data. No family-total allocation, copied family Range or duplicate carrier/constituent/bundled-part exchange. Completion requires satisfying `refine_development_waste` with actual records; unresolved required expansion blocks the dataset. |  |
| `atomization_development_releases_complete` | actual independently refined exchanges | Require independent actual quantity, identity/state/gate and one property/unit for each applicable exchange in this scope; preserve full original protocol, normalization, stock, returns, waste/releases and shared-resource ownership. Reject completion on an unknown required child, unsupported native reference or missing quantity; evidenced nonoccurrence is separate from missing data. No family-total allocation, copied family Range or duplicate carrier/constituent/bundled-part exchange. Completion requires satisfying `refine_development_releases` with actual records; unresolved required expansion blocks the dataset. | `massdep-private-well-guidelines` |
| `validate_atomic_exchange_unit_and_normalization` | all inventory rows | Each concrete flow card identifies exactly one actual independently supplied product/SKU/formulation, complete assembly, complete single-function or genuine complete bounded provider service, actual waste composite/state/receiver, or substance/size/receiving medium, with exactly one property and unit. Different actual identities require independent quantities and records, not a summed family exchange. A complete product/carrier includes its contents once. Same unchanged SKU/state usable supply/return pairs and matched physical internal send/receive pairs use the same selected property/unit; kg and count or MJ and kWh auxiliaries are nonadditive measurements, never duplicate exchanges. Missing identity/occurrence/quantity/native reference is a gap, not zero. An asset-equivalent formula already ending in division by N, D or A is the final quantity per reference flow. Its complete-life fraction and accepted-output normalization constitute the same normalization operation as the general normalization rule; never divide it by that denominator again. Apply the complete-life upstream burden exactly once. Actual complete provider event counts remain event quantities, not owned-asset fractions. |  |
| `validate_grout_supply_modes` | `sealing_grout_dry_premix`; `sealing_grout_prepared`; `sealing_grout_cement`; `sealing_grout_bentonite`; `grout_water` | For each batch choose exactly one supply-mode group: dry_premix, prepared_grout, or separate_ingredients. Cement and bentonite are separate actual product inputs only in separate_ingredients mode and can both apply when evidenced by the actual approved recipe; no assumed formulation or apportioned parent mass. A dry premix includes its ingredients once; a prepared product includes its ingredients and water once. Embedded onsite mixing is well_completion work and its measured grout yield is reconciliation only. A prepared input is permitted only for real supply or genuinely independent preparation handoff with actual upstream coverage. grout_water records only separately supplied added/cleanup water, never water already included in a prepared product. Missing mode, recipe/receipt/handoff or actual other ingredient identity/quantity blocks completion. |  |


## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | Foreground data package for accepted pump-free civil well construction/development service. |
| downstream_use | secondary_dataset; background_dataset; process; lifecyclemodel |
| allowed_use | Actual route-fit civil well construction comparison/integration with stated site/geometry/test/asset boundaries and separate downstream pump/system owner. |
| excluded_use | Operating drinking-water supply, guaranteed potability, whole pumped system, unrelated drilling routes or equivalent-volume water production. |
| required_metadata | All reference qualifiers; actual start/end/gates/providers; event/custody balances; failed-hole/retest linkage; asset phases/periods/denominator; sources/identity/support status. |
| required_quality_disclosure | Actual completeness/uncertainty, water/substance bases, source applicability and unresolved identity/Range/support gaps; actual jurisdiction design/test acceptance; pump-free scope. |
| update_trigger | Route/geology/flowing status, actual design/components/grout/bit/additives, source/provider boundaries, test/gate protocols or asset-cycle/attribution change. |


## 11. Data Sources

| source_id | type | reference | used_for |
| --- | --- | --- | --- |
| un-cpc3-2025 | official_guidance | https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Exp_Notes_30Jun2025.pdf — CPC Version 3.0, 30 June 2025, printed p.289 | CPC water-well drilling category includes pump/piping; pump-free semantic scope is narrower. |
| frtr-air-rotary | official_guidance | https://www.frtr.gov/site/3_2_1.html — FRTR Field Sampling and Analysis Technologies Reference Guide, 3.2.1 Direct Air Rotary | Air-rotary physical mechanism, formation/cuttings/water, actual bit/hammer/lubrication/additive and release questions only; no private-water-well specification or numeric default. |
| massdep-private-well-guidelines | official_guidance | https://www.mass.gov/info-details/private-well-guidelines ; https://www.mass.gov/doc/private-well-guidelines/download — MassDEP Private Well Guidelines, updated May 2024; bounded sections printed pp.42,52,68 | Bedrock fines flushing/development before tests; actual geology-compatible annular seal; initial driller versus later pump/system disinfection and sample/retest responsibilities. Numeric guidance examples are not universal defaults; actual authorized project criteria control gate. |
