---
pcr_id: pcr.existing-exposed-cast-iron-local-water-main-full-circle-repair-clamp-installation-services
language: en-US
status: candidate
sync_with: pcr.zh-CN.md
---

# Existing exposed cast-iron local water-main full-circle repair-clamp installation services

## 1. Scope and Applicability

This PCR covers one bounded repair intervention on one qualified localised hole or pinhole in an already exposed, secured existing cast-iron local potable-water main. A compatible factory-made single-section stainless full-circle gasketed clamp is installed after utility-authorised isolation and depressurisation. Incremental cleaning, compatible lubrication, positioning, staged tightening and retightening, required pressure/leak verification and hygienic closure form the service through signed repair acceptance. The existing main is retained.

The representative route uses an actually approved SS1-type single-section assembly with its actual standard SBR gasket unless another actual compatible compound is specified. The Romac sources illustrate that route; they do not prescribe a brand, universal torque, pressure, repairable defect size or every-SKU potable certification. Actual current approved regional instructions, utility requirements and site conditions govern. The Ontario 2020 procedure is a dated official technical example; its webpage update date does not establish universal or current project law. Do not apply an exception for maintained-flow repair sleeves automatically to this depressurised route.

Exclude new pipelines and laterals, sewers/gas/steam, long-distance mains, pipe replacement, live-pressure installation, tapping or outlet connections, coupling separated pipe ends, sheared/unsupported structural breaks, whole trench excavation and reinstatement, water distribution operation and subsequent maintenance. Required closure tests must be completed or supplied through an explicitly bounded provider whose actual resources/results are included before the final gate; an unowned future test cannot produce accepted output.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.existing-exposed-cast-iron-local-water-main-full-circle-repair-clamp-installation-services |
| classification_refs | CPC 3.0 54251; narrower candidate subset; acceptance remains separate |
| covered_products | Accepted single-defect local potable cast-iron main clamp installation repairs in the declared exposed, secured, depressurised route |
| excluded_products | New main; pipe-section replacement; live-pressure/tapped clamp; pipe coupling; structural separated-end repair; trenching/reinstatement; operation |
| representative_product | Actual suitable single-section stainless full-circle clamp with compatible SBR gasket, approved OD/range/defect overlap and potable documentation |
| production_route | Qualified retained host preparation handoff followed by clamp integration, actual required mechanical/hygiene verification and signed bounded repair handback |
| market_state | Completed accepted repair service at the declared release gate; retained host is neither sold anew nor credited as avoided replacement |


## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Accepted single-defect full-circle clamp repair installation on an existing exposed cast-iron local potable-water main |
| How much | 1 Item(s), one accepted uniquely identified final single-defect repair intervention |
| How well | Unique repair and defect IDs; local potable-water main function; retained cast-iron OD, condition and supported defect extent; actual single-section clamp SKU/range/length/gasket and potable certification; authorised isolation/depressurisation; contamination classification and adopted authority/instruction editions; actual torque/retorque, pressure/leak and hygiene criteria/results/providers; gate and handback owners; reporting/job/asset periods. |
| How long or cycle | One work-order repair cycle including failed attempts, retightening/retest and required hygienic closure before acceptance; index jobs/reporting periods and complete asset lives; no universal extension of main life |
| reference_flow_link | `accepted_repair` |

| Field | Value |
| --- | --- |
| Reference amount | 1 |
| Reference product flow | Accepted single-defect full-circle clamp repair installation on an existing exposed cast-iron local potable-water main |
| Reference flow property | Count `01846770-4cfe-4a25-8ad9-919d8d378345` |
| Reference unit group | `5beb6eed-33a9-47b8-9ede-1dfe8f679159` |
| Reference unit | Item(s) |
| Required qualifiers | Unique repair and defect IDs; local potable-water main function; retained cast-iron OD, condition and supported defect extent; actual single-section clamp SKU/range/length/gasket and potable certification; authorised isolation/depressurisation; contamination classification and adopted authority/instruction editions; actual torque/retorque, pressure/leak and hygiene criteria/results/providers; gate and handback owners; reporting/job/asset periods. |


## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| `measure_repair_count` | `accepted_repair`; reference flow | Count `01846770-4cfe-4a25-8ad9-919d8d378345` | Item(s) | Count unique signed final repair IDs N; N must be positive. Bolts, clamp sections, attempts and main length are not accepted interventions; retain failed/repeated burdens over N. |
| `measure_transfer` | `qualified_host`; `host_to_install`; `retained_host` | Count `01846770-4cfe-4a25-8ad9-919d8d378345` | Item(s) | Pair one qualified retained-host handoff per unique defect ID and transfer ID; repeated preparation is a loop, not extra host manufacture or final accepted count. |
| `measure_physical` | Material, water, fuel, residual and freight rows | Actual verified exchange property | Actual verified exchange unit | Use calibrated net contents after tare, gross before outward returns; actual density/state/temperature for volume-to-mass and actual load/distance for freight. Do not infer mass from count, nominal pipe diameter, shell gauge or design envelope. |


## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Existing exposed secured cast-iron local potable-water main with identified local defect; utility-authorised isolation/depressurisation, access and contamination preconditions declared |
| starting_condition_role | Retained host state only; no new upstream main production burden; incremental preparation and job-caused remedies remain included |
| product_classification_scope | Bounded repair subset of local pipeline construction services; excavation belongs separate trenching responsibility |
| recursive_input_rule | Do not recursively replace this repair service with a whole-main production dataset. Same-category purchased repair support requires a non-overlapping bounded gate and actual provider evidence. |
| upstream_dataset_requirement | Actual complete clamp assembly and separately supplied consumables/services/resources at real supplier gate; complete-life assets and actual transport included once; included packaging/components/services excluded from duplicate rows |
| disclosure | Name utility, access/trench-dewatering owner, preparation and installation providers, closure/test provider, reinstatement owner and authorised utility handback owner; identify job/event/reporting periods and excluded interfaces. |

### Boundary Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `scope_eligibility` | foreground_system_boundary | This PCR covers one bounded repair intervention on one qualified localised hole or pinhole in an already exposed, secured existing cast-iron local potable-water main. A compatible factory-made single-section stainless full-circle gasketed clamp is installed after utility-authorised isolation and depressurisation. Incremental cleaning, compatible lubrication, positioning, staged tightening and retightening, required pressure/leak verification and hygienic closure form the service through signed repair acceptance. The existing main is retained. The representative route uses an actually approved SS1-type single-section assembly with its actual standard SBR gasket unless another actual compatible compound is specified. The Romac sources illustrate that route; they do not prescribe a brand, universal torque, pressure, repairable defect size or every-SKU potable certification. Actual current approved regional instructions, utility requirements and site conditions govern. The Ontario 2020 procedure is a dated official technical example; its webpage update date does not establish universal or current project law. Do not apply an exception for maintained-flow repair sleeves automatically to this depressurised route. Exclude new pipelines and laterals, sewers/gas/steam, long-distance mains, pipe replacement, live-pressure installation, tapping or outlet connections, coupling separated pipe ends, sheared/unsupported structural breaks, whole trench excavation and reinstatement, water distribution operation and subsequent maintenance. Required closure tests must be completed or supplied through an explicitly bounded provider whose actual resources/results are included before the final gate; an unowned future test cannot produce accepted output. |  |
| `boundary_host` | `prepare_host` | Accept exposed secured retained cast iron only after actual OD/defect/condition and clamp compatibility review; clean dirt/corrosion from the intended seal area without inventing new pipe input. Job-caused damage/remedy belongs its actual owner and blocks handoff until resolved. | `romac-install-2024`; `romac-submittal-2024` |
| `boundary_interfaces` | Both nodes and external interfaces | Whole excavation/reinstatement remain with declared corridor/trench owner. Incremental protection and hygiene needed during repair, including continued dewatering where required, must have actual resource owner; purchased bounded support included only once. No invented excavation node. | `un-cpc3-2025`; `ontario-watermain-2020` |
| `boundary_components` | `install_accept` | Retained qualified host and supplied complete clamp/gasket assembly have different roles. Count shell, bolts, gasket, factory lubricant/coating and packaging already within the assembly dataset once; record only actual separate replacement or additional supplies. No clamp as coupling or tapped outlet. | `romac-install-2024`; `romac-submittal-2024` |
| `boundary_mechanical` | `install_accept` | Verify actual size/range, flat clean gasket tails, defect centring, suitable lubricant, prescribed staged uniform torque and retorque using actual current SKU instructions; actual pressure/leak criterion and pre-concealment test passed before repair release. | `romac-install-2024` |
| `boundary_hygiene` | `install_accept` | Utility declares adopted authority/edition, contamination classification, permitted disinfection/flushing/sampling/neutralisation and release criteria/providers. Include all actual mandatory tests/results/resources before signed bounded acceptance; actual further utility return-to-service responsibility explicit. A permitted sampling waiver requires documented applicability, not assumed clean water or pressurised-sleeve exemption. | `ontario-watermain-2020` |
| `boundary_baseline` | Retained main; operational water; repair cycle | Old-main manufacture and pre-start operational leakage are outside this incremental repair boundary; no avoided replacement or avoided water-loss credit. Incremental drain/flush/test water and job releases after start are accounted. |  |
| `boundary_periods` | Assets, stocks, jobs and service providers | Index preparation, installation, cleaning, retest and acceptance events by job/node/period. Include attributable complete-life tool/pump/protection resource manufacture, maintenance, replacements and EOL, excluding separately inventoried operation and bundled resources. |  |

## 6. Process Inventory Structure

Discrete work-order interventions are the production mode. `prepare_host` owns cleaning/qualification and residuals through a recorded qualified-host transfer; `install_accept` owns clamp integration on that retained host, retightening, repeated testing and required hygienic closure through acceptance. Transfer IDs pair both sides without multiplying repairs or upstream host burden. Cleaning, torque, testing, sampling and authorisation are embedded responsibilities unless an actual independently bounded purchased service is evidenced. A failed preparation returns within `prepare_host`; a failed clamp/test returns within `install_accept` or to preparation with an explicit linked transfer. Replaced failed clamps leave only as actual returned product or waste; no accepted intervention arises from them.

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| `prepare_host` | Prepare and qualify retained exposed host | required | Every intervention at declared start | Independent cleaning/qualification responsibility; retained host to clean compatible seal-seat handoff | Unique qualified defect handoffs; final burden normalized over accepted repair count N |
| `install_accept` | Install clamp and complete repair acceptance | required | Qualified host and actual compatible factory clamp | Assembly/integration, torque, mechanical and hygienic closure; signed repair handback | Accepted unique intervention count N |


### Process: Prepare and qualify retained exposed host (`prepare_host`)

#### Inputs

##### Product flows

###### Retained exposed secured cast-iron local potable-main defect at repair start (`retained_host`)

State/interface flow for the already existing host, not a purchase or new-main manufacture. Actual localised defect, OD, condition, security, isolation/depressurisation and access/contamination responsibility must qualify the start.

- Selected flow: Retained exposed secured cast-iron local potable-main defect at repair start
- Flow property / unit: Count / Item(s)
- Amount rule: Unique actual defect-host entries linked to repair and work-order IDs, divided by accepted count N; no host-production upstream burden.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_p_host`
- Sources: `romac-install-2024`

Range evidence need: Actual defect/host register and eligibility records establish the unique event count; there is no default pipeline length, clamp count or defect density.

###### Preparation cleaner formulation (`prep_supplies_cleaner`)

Record only this independently identified preparation cleaner formulation at its actual state and supply or receiving gate. Only an independently supplied or independently dispatched actual identified product/stream activates this card, outside other complete-product/provider coverage. Preserve actual SKU/formulation or dispatched composite, ownership, receiver/provider and every original/rework event. Evidence for nonoccurrence is required; missing identity, quantity or condition remains a completion gap. No amount or occurrence is inferred from the other child flows. Complete supplied products and contaminated carriers include their contained parts/material once.

- Selected flow: Preparation cleaner formulation
- Flow property / unit: Mass / kg
- Amount rule: Independently weigh the actual SKU/stream net mass after tare for this child; retain its own issue, return, stock and fate records; normalize the attributable numerator once by the original accepted-output denominator.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_p_materials`

Range evidence need: Establish independent, matching-identity quantity evidence and uncertainty for this actual exchange. A family total or former family interval is not a child quantity, allocation share or automatically valid child QA range.

###### Consumed preparation cleaning brush (`prep_supplies_brush`)

Record only this independently identified consumed preparation cleaning brush at its actual state and supply or receiving gate. Only an independently supplied or independently dispatched actual identified product/stream activates this card, outside other complete-product/provider coverage. Preserve actual SKU/formulation or dispatched composite, ownership, receiver/provider and every original/rework event. Evidence for nonoccurrence is required; missing identity, quantity or condition remains a completion gap. No amount or occurrence is inferred from the other child flows. Complete supplied products and contaminated carriers include their contained parts/material once.

- Selected flow: Consumed preparation cleaning brush
- Flow property / unit: Mass / kg
- Amount rule: Independently weigh the actual SKU/stream net mass after tare for this child; retain its own issue, return, stock and fate records; normalize the attributable numerator once by the original accepted-output denominator.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_p_materials`

Range evidence need: Establish independent, matching-identity quantity evidence and uncertainty for this actual exchange. A family total or former family interval is not a child quantity, allocation share or automatically valid child QA range.

###### Preparation cleaning cloth (`prep_supplies_cloth`)

Record only this independently identified preparation cleaning cloth at its actual state and supply or receiving gate. Only an independently supplied or independently dispatched actual identified product/stream activates this card, outside other complete-product/provider coverage. Preserve actual SKU/formulation or dispatched composite, ownership, receiver/provider and every original/rework event. Evidence for nonoccurrence is required; missing identity, quantity or condition remains a completion gap. No amount or occurrence is inferred from the other child flows. Complete supplied products and contaminated carriers include their contained parts/material once.

- Selected flow: Preparation cleaning cloth
- Flow property / unit: Mass / kg
- Amount rule: Independently weigh the actual SKU/stream net mass after tare for this child; retain its own issue, return, stock and fate records; normalize the attributable numerator once by the original accepted-output denominator.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_p_materials`

Range evidence need: Establish independent, matching-identity quantity evidence and uncertainty for this actual exchange. A family total or former family interval is not a child quantity, allocation share or automatically valid child QA range.

###### Preparation containment liner (`prep_supplies_liner`)

Record only this independently identified preparation containment liner at its actual state and supply or receiving gate. Only an independently supplied or independently dispatched actual identified product/stream activates this card, outside other complete-product/provider coverage. Preserve actual SKU/formulation or dispatched composite, ownership, receiver/provider and every original/rework event. Evidence for nonoccurrence is required; missing identity, quantity or condition remains a completion gap. No amount or occurrence is inferred from the other child flows. Complete supplied products and contaminated carriers include their contained parts/material once.

- Selected flow: Preparation containment liner
- Flow property / unit: Mass / kg
- Amount rule: Independently weigh the actual SKU/stream net mass after tare for this child; retain its own issue, return, stock and fate records; normalize the attributable numerator once by the original accepted-output denominator.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_p_materials`

Range evidence need: Establish independent, matching-identity quantity evidence and uncertainty for this actual exchange. A family total or former family interval is not a child quantity, allocation share or automatically valid child QA range.

###### Preparation spill absorbent (`prep_supplies_absorbent`)

Record only this independently identified preparation spill absorbent at its actual state and supply or receiving gate. Only an independently supplied or independently dispatched actual identified product/stream activates this card, outside other complete-product/provider coverage. Preserve actual SKU/formulation or dispatched composite, ownership, receiver/provider and every original/rework event. Evidence for nonoccurrence is required; missing identity, quantity or condition remains a completion gap. No amount or occurrence is inferred from the other child flows. Complete supplied products and contaminated carriers include their contained parts/material once.

- Selected flow: Preparation spill absorbent
- Flow property / unit: Mass / kg
- Amount rule: Independently weigh the actual SKU/stream net mass after tare for this child; retain its own issue, return, stock and fate records; normalize the attributable numerator once by the original accepted-output denominator.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_p_materials`

Range evidence need: Establish independent, matching-identity quantity evidence and uncertainty for this actual exchange. A family total or former family interval is not a child quantity, allocation share or automatically valid child QA range.

###### Actual supplied preparation and hygienic-access water (`prep_water`)

Supplied water used for host cleaning and included hygienic protection crosses at the actual supply gate. Utility-owned drainage after start is separately measured from added water; do not charge pre-start operational leakage.

- Selected flow: Actual supplied preparation and hygienic-access water
- Flow property / unit: Mass / kg
- Amount rule: Measured supplied water mass per N; actual metered volume times evidenced density at measured state/temperature only when mass is unavailable.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_p_water`
- Sources: `ontario-watermain-2020`

Range evidence need: Actual meter/scale, water quality, density/temperature for conversion and provider boundaries are required; no fixed flush volume.

###### Actual purchased electricity for preparation equipment (`prep_power`)

Record actual preparation/cleaning/pumping equipment electricity at the real supplier/connection gate when separately supplied; provider-included electricity is not charged again.

- Selected flow: Actual purchased electricity for preparation equipment
- Flow property / unit: Energy / kWh
- Amount rule: Meter difference after actual multiplier and node allocation divided by N.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_p_utilities`

Range evidence need: Actual electricity source, meter periods, equipment/consumer scope and verified concrete exchange support required; no assumed duration or kWh per repair.

###### Whole preparation cleaning-tool asset equivalent (`prep_assets_cleaning_tool`)

Record only this independently identified whole preparation cleaning-tool asset equivalent at its actual state and supply or receiving gate. An actual complete independently provided object/event with a matching Item(s) reference activates this card; bundled constituent parts and hours are not additional counted objects. Preserve actual SKU/formulation or dispatched composite, ownership, receiver/provider and every original/rework event. Evidence for nonoccurrence is required; missing identity, quantity or condition remains a completion gap. No amount or occurrence is inferred from the other child flows. Complete supplied products and contaminated carriers include their contained parts/material once.

- Selected flow: Whole preparation cleaning-tool asset equivalent
- Flow property / unit: Number of items / Item(s)
- Amount rule: Apply the original whole-life attribution method and this node asset protocol: asset-equivalent Item(s) = (target_node_service / complete_life_service) / N. The compatible complete_life_service includes observed_life_service plus evidenced prospective_remaining_service, all consumers and periods. Scale the matching complete-life upstream burden with this fraction once; no one-whole-asset purchase per repair.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_p_assets`

Range evidence need: Establish independent, matching-identity quantity evidence and uncertainty for this actual exchange. A family total or former family interval is not a child quantity, allocation share or automatically valid child QA range.

###### Whole preparation pump asset equivalent (`prep_assets_pump`)

Record only this independently identified whole preparation pump asset equivalent at its actual state and supply or receiving gate. An actual complete independently provided object/event with a matching Item(s) reference activates this card; bundled constituent parts and hours are not additional counted objects. Preserve actual SKU/formulation or dispatched composite, ownership, receiver/provider and every original/rework event. Evidence for nonoccurrence is required; missing identity, quantity or condition remains a completion gap. No amount or occurrence is inferred from the other child flows. Complete supplied products and contaminated carriers include their contained parts/material once.

- Selected flow: Whole preparation pump asset equivalent
- Flow property / unit: Number of items / Item(s)
- Amount rule: Apply the original whole-life attribution method and this node asset protocol: asset-equivalent Item(s) = (target_node_service / complete_life_service) / N. The compatible complete_life_service includes observed_life_service plus evidenced prospective_remaining_service, all consumers and periods. Scale the matching complete-life upstream burden with this fraction once; no one-whole-asset purchase per repair.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_p_assets`

Range evidence need: Establish independent, matching-identity quantity evidence and uncertainty for this actual exchange. A family total or former family interval is not a child quantity, allocation share or automatically valid child QA range.

###### Actual non-bundled preparation supply freight (`prep_freight`)

Identify each actual mode/provider, cargo and leg for preparation supplies; exclude delivery already included upstream. Empty vehicle trips use actual fuel/service allocation and never fictitious cargo.

- Selected flow: Actual non-bundled preparation supply freight
- Flow property / unit: mass*distance / kg*km
- Amount rule: Sum actual cargo mass kg times loaded-leg km times attributable share, divided by N.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_p_freight`

Range evidence need: Actual net cargo, load sharing, travelled distance, provider boundary and empty return resources required; no straight-line or nominal-load default.

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Qualified clean retained host ready for actual repair-clamp installation (`qualified_host`)

One identifiable retained defect site has a clean compatible seal seat and accepted clamp/OD/defect fit; transfer to install_accept records provider, time and transfer ID. No new pipe or completed repair is output here.

- Selected flow: Qualified clean retained host ready for actual repair-clamp installation
- Flow property / unit: Count / Item(s)
- Amount rule: Unique qualified transfer IDs per N with paired installation entries; repeat cleaning is a linked internal loop.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_p_host`
- Sources: `romac-install-2024`

Range evidence need: Actual signed qualification/transfer register required; one host state does not imply one accepted final repair or new-main mass.

##### Waste flows

###### Collected removed corrosion-and-dirt waste (`prep_solid_waste_corrosion_dirt`)

Record only this independently identified collected removed corrosion-and-dirt waste at its actual state and supply or receiving gate. Actual collected corrosion/dirt mixture independently dispatched, not assumed host demolition. Preserve actual SKU/formulation or dispatched composite, ownership, receiver/provider and every original/rework event. Evidence for nonoccurrence is required; missing identity, quantity or condition remains a completion gap. No amount or occurrence is inferred from the other child flows. Complete supplied products and contaminated carriers include their contained parts/material once.

- Selected flow: Collected removed corrosion-and-dirt waste
- Flow property / unit: Mass / kg
- Amount rule: Independently weigh the actual SKU/stream net mass after tare for this child; retain its own issue, return, stock and fate records; normalize the attributable numerator once by the original accepted-output denominator.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_p_residuals`

Range evidence need: Establish independent, matching-identity quantity evidence and uncertainty for this actual exchange. A family total or former family interval is not a child quantity, allocation share or automatically valid child QA range.

###### Contaminated preparation cloth waste (`prep_solid_waste_cloth`)

Record only this independently identified contaminated preparation cloth waste at its actual state and supply or receiving gate. Actual whole cloth dispatch includes retained contaminants once. Preserve actual SKU/formulation or dispatched composite, ownership, receiver/provider and every original/rework event. Evidence for nonoccurrence is required; missing identity, quantity or condition remains a completion gap. No amount or occurrence is inferred from the other child flows. Complete supplied products and contaminated carriers include their contained parts/material once.

- Selected flow: Contaminated preparation cloth waste
- Flow property / unit: Mass / kg
- Amount rule: Independently weigh the actual SKU/stream net mass after tare for this child; retain its own issue, return, stock and fate records; normalize the attributable numerator once by the original accepted-output denominator.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_p_residuals`

Range evidence need: Establish independent, matching-identity quantity evidence and uncertainty for this actual exchange. A family total or former family interval is not a child quantity, allocation share or automatically valid child QA range.

###### Actual collected preparation wastewater sent to treatment (`prep_wastewater`)

Collected cleaning/drainage fluids delivered to an actual sewer/treatment receiver are waste transfers, including their actual contamination and water content; no direct-release row for the same captured fluid.

- Selected flow: Actual collected preparation wastewater sent to treatment
- Flow property / unit: Mass / kg
- Amount rule: Actual transferred whole-fluid net mass per N; actual metered volume requires recorded density/temperature/state.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_p_residuals`
- Sources: `ontario-watermain-2020`

Range evidence need: Actual receiver, fluid quantity, sampling and route evidence required; contaminant sum is not whole-fluid quantity.

##### Elementary flows

### Process: Install clamp and complete repair acceptance (`install_accept`)

#### Inputs

##### Product flows

###### Qualified clean retained host ready for actual repair-clamp installation (`host_to_install`)

Receive the prepare_host state with matching defect/repair/transfer ID and actual compatible clean seal seat. It carries preparation burdens once; retained host manufacture remains outside this repair.

- Selected flow: Qualified clean retained host ready for actual repair-clamp installation
- Flow property / unit: Count / Item(s)
- Amount rule: Matched qualified host transfers per N; loops to prepare_host explicitly linked and not new accepted interventions.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_i_host`
- Sources: `romac-install-2024`

Range evidence need: Actual paired handoff record and seal-seat/OD/defect compatibility evidence required; no clamp or pipeline length multiplier.

###### Actual complete single-section stainless full-circle repair-clamp assembly with compatible gasket (`complete_clamp`)

Actual factory clamp assembly with shell/bolts/armour/gasket and included coatings/packaging crosses supplier gate once. Record SKU, certified size/range, overlap/defect suitability and actual potable documentation; SBR is the cited standard compound, not assumed EPDM.

- Selected flow: Actual complete single-section stainless full-circle repair-clamp assembly with compatible gasket
- Flow property / unit: Count / Item(s)
- Amount rule: Gross actual complete supplied assembly count per N before outward returns; separate actual replacement parts only if outside the bundled assembly.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_i_materials`
- Sources: `romac-submittal-2024`; `romac-ss1`

Range evidence need: Actual SKU count, approved BOM/supplier gate and package scope required; site/PDF shell-gauge discrepancy prevents default composition/mass; NSF61/372 upon request is not proof for every SKU.

###### Actual separately supplied approved gasket lubricant (`gasket_lubricant`)

Use actual gasket/pipe/potable-compatible lubricant required for the rough iron seal seat; record actual formulation/approval and exclude factory-included lubricant already covered by assembly upstream.

- Selected flow: Actual separately supplied approved gasket lubricant
- Flow property / unit: Mass / kg
- Amount rule: Gross supplied net lubricant mass per N before real outward returns; include actual repeated application and failure resources.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_i_materials`
- Sources: `romac-install-2024`

Range evidence need: Actual product/SDS, potable and gasket compatibility, net pack mass/stock and application records required; no standard lubricant or dose.

###### Separately supplied potable-work disinfectant formulation (`hygiene_chemicals_disinfectant`)

Record only this independently identified separately supplied potable-work disinfectant formulation at its actual state and supply or receiving gate. Only an independently supplied or independently dispatched actual identified product/stream activates this card, outside other complete-product/provider coverage. Preserve actual SKU/formulation or dispatched composite, ownership, receiver/provider and every original/rework event. Evidence for nonoccurrence is required; missing identity, quantity or condition remains a completion gap. No amount or occurrence is inferred from the other child flows. Complete supplied products and contaminated carriers include their contained parts/material once.

- Selected flow: Separately supplied potable-work disinfectant formulation
- Flow property / unit: Mass / kg
- Amount rule: Independently weigh the actual SKU/stream net mass after tare for this child; retain its own issue, return, stock and fate records; normalize the attributable numerator once by the original accepted-output denominator.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_i_materials`
- Sources: `ontario-watermain-2020`

Range evidence need: Establish independent, matching-identity quantity evidence and uncertainty for this actual exchange. A family total or former family interval is not a child quantity, allocation share or automatically valid child QA range.

###### Separately supplied potable-work cleaner formulation (`hygiene_chemicals_cleaner`)

Record only this independently identified separately supplied potable-work cleaner formulation at its actual state and supply or receiving gate. Only an independently supplied or independently dispatched actual identified product/stream activates this card, outside other complete-product/provider coverage. Preserve actual SKU/formulation or dispatched composite, ownership, receiver/provider and every original/rework event. Evidence for nonoccurrence is required; missing identity, quantity or condition remains a completion gap. No amount or occurrence is inferred from the other child flows. Complete supplied products and contaminated carriers include their contained parts/material once.

- Selected flow: Separately supplied potable-work cleaner formulation
- Flow property / unit: Mass / kg
- Amount rule: Independently weigh the actual SKU/stream net mass after tare for this child; retain its own issue, return, stock and fate records; normalize the attributable numerator once by the original accepted-output denominator.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_i_materials`
- Sources: `ontario-watermain-2020`

Range evidence need: Establish independent, matching-identity quantity evidence and uncertainty for this actual exchange. A family total or former family interval is not a child quantity, allocation share or automatically valid child QA range.

###### Separately supplied dechlorinating formulation (`hygiene_chemicals_dechlorinator`)

Record only this independently identified separately supplied dechlorinating formulation at its actual state and supply or receiving gate. Only an independently supplied or independently dispatched actual identified product/stream activates this card, outside other complete-product/provider coverage. Preserve actual SKU/formulation or dispatched composite, ownership, receiver/provider and every original/rework event. Evidence for nonoccurrence is required; missing identity, quantity or condition remains a completion gap. No amount or occurrence is inferred from the other child flows. Complete supplied products and contaminated carriers include their contained parts/material once.

- Selected flow: Separately supplied dechlorinating formulation
- Flow property / unit: Mass / kg
- Amount rule: Independently weigh the actual SKU/stream net mass after tare for this child; retain its own issue, return, stock and fate records; normalize the attributable numerator once by the original accepted-output denominator.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_i_materials`
- Sources: `ontario-watermain-2020`

Range evidence need: Establish independent, matching-identity quantity evidence and uncertainty for this actual exchange. A family total or former family interval is not a child quantity, allocation share or automatically valid child QA range.

###### Actual supplied pressure-test flushing and hygienic closure water (`test_flush_water`)

Include actual separately supplied water for pressure/leak testing, flushing, disinfection and sampling displacement through the declared gate. Separately record post-start drained main water as host-content contribution, not a second purchased-water input.

- Selected flow: Actual supplied pressure-test flushing and hygienic closure water
- Flow property / unit: Mass / kg
- Amount rule: Measured supplied net water mass per N; volume-to-mass only with actual density/temperature/state; retain repeat-test and repeat-flush quantities.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_i_water`
- Sources: `ontario-watermain-2020`; `romac-install-2024`

Range evidence need: Actual meters, source/quality, test/flush records, drains, custody and provider bundle scope required; no nominal pipe volume or automatic flushing exemption.

###### Actual purchased electricity for clamp installation and testing (`install_power`)

Include actual non-bundled powered fastening, pumping, test and hygiene equipment electricity; manual torque creates no fictional electrical use.

- Selected flow: Actual purchased electricity for clamp installation and testing
- Flow property / unit: Energy / kWh
- Amount rule: Meter difference times actual multiplier and target node share divided by N.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_i_utilities`

Range evidence need: Actual connection/provider, meters, operating periods and verified exchange support required; no duration-to-energy conversion without actual power evidence.

###### Whole torque-wrench asset equivalent (`install_assets_torque_wrench`)

Record only this independently identified whole torque-wrench asset equivalent at its actual state and supply or receiving gate. An actual complete independently provided object/event with a matching Item(s) reference activates this card; bundled constituent parts and hours are not additional counted objects. Preserve actual SKU/formulation or dispatched composite, ownership, receiver/provider and every original/rework event. Evidence for nonoccurrence is required; missing identity, quantity or condition remains a completion gap. No amount or occurrence is inferred from the other child flows. Complete supplied products and contaminated carriers include their contained parts/material once.

- Selected flow: Whole torque-wrench asset equivalent
- Flow property / unit: Number of items / Item(s)
- Amount rule: Apply the original whole-life attribution method and this node asset protocol: asset-equivalent Item(s) = (target_node_service / complete_life_service) / N. The compatible complete_life_service includes observed_life_service plus evidenced prospective_remaining_service, all consumers and periods. Scale the matching complete-life upstream burden with this fraction once; no one-whole-asset purchase per repair.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_i_assets`

Range evidence need: Establish independent, matching-identity quantity evidence and uncertainty for this actual exchange. A family total or former family interval is not a child quantity, allocation share or automatically valid child QA range.

###### Whole pressure-test pump asset equivalent (`install_assets_test_pump`)

Record only this independently identified whole pressure-test pump asset equivalent at its actual state and supply or receiving gate. An actual complete independently provided object/event with a matching Item(s) reference activates this card; bundled constituent parts and hours are not additional counted objects. Preserve actual SKU/formulation or dispatched composite, ownership, receiver/provider and every original/rework event. Evidence for nonoccurrence is required; missing identity, quantity or condition remains a completion gap. No amount or occurrence is inferred from the other child flows. Complete supplied products and contaminated carriers include their contained parts/material once.

- Selected flow: Whole pressure-test pump asset equivalent
- Flow property / unit: Number of items / Item(s)
- Amount rule: Apply the original whole-life attribution method and this node asset protocol: asset-equivalent Item(s) = (target_node_service / complete_life_service) / N. The compatible complete_life_service includes observed_life_service plus evidenced prospective_remaining_service, all consumers and periods. Scale the matching complete-life upstream burden with this fraction once; no one-whole-asset purchase per repair.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_i_assets`

Range evidence need: Establish independent, matching-identity quantity evidence and uncertainty for this actual exchange. A family total or former family interval is not a child quantity, allocation share or automatically valid child QA range.

###### Actual non-bundled clamp and closure supply freight (`install_freight`)

Actual loaded legs for clamp/consumables/sample transfers have real cargo/mode/distance. Provider/included transport is not recharged; staff/service or empty travel uses its actual service/fuel boundary.

- Selected flow: Actual non-bundled clamp and closure supply freight
- Flow property / unit: mass*distance / kg*km
- Amount rule: Sum actual cargo kg times leg km times target share divided by N; reference kg*km and verified t*km factor only where applicable.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_i_freight`

Range evidence need: Actual weighed cargo/package boundary, loading, travelled distance and shared-leg allocation required; no count-to-mass or nominal load.

###### Complete bounded provider pressure/leak-test event (`closure_provider_pressure_test`)

Record only this independently identified complete bounded provider pressure/leak-test event at its actual state and supply or receiving gate. An actual complete independently provided object/event with a matching Item(s) reference activates this card; bundled constituent parts and hours are not additional counted objects. Preserve actual SKU/formulation or dispatched composite, ownership, receiver/provider and every original/rework event. Evidence for nonoccurrence is required; missing identity, quantity or condition remains a completion gap. No amount or occurrence is inferred from the other child flows. Complete supplied products and contaminated carriers include their contained parts/material once.

- Selected flow: Complete bounded provider pressure/leak-test event
- Flow property / unit: Number of items / Item(s)
- Amount rule: Independently count the identified actual complete SKU/event at its documented gate; preserve receipt/stock/return or complete-life/all-consumer attribution as applicable, then normalize once by the original accepted-output denominator.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_i_closure`
- Sources: `ontario-watermain-2020`; `romac-install-2024`

Range evidence need: Establish independent, matching-identity quantity evidence and uncertainty for this actual exchange. A family total or former family interval is not a child quantity, allocation share or automatically valid child QA range.

###### Complete bounded provider hygienic treatment event (`closure_provider_hygiene`)

Record only this independently identified complete bounded provider hygienic treatment event at its actual state and supply or receiving gate. An actual complete independently provided object/event with a matching Item(s) reference activates this card; bundled constituent parts and hours are not additional counted objects. Preserve actual SKU/formulation or dispatched composite, ownership, receiver/provider and every original/rework event. Evidence for nonoccurrence is required; missing identity, quantity or condition remains a completion gap. No amount or occurrence is inferred from the other child flows. Complete supplied products and contaminated carriers include their contained parts/material once.

- Selected flow: Complete bounded provider hygienic treatment event
- Flow property / unit: Number of items / Item(s)
- Amount rule: Independently count the identified actual complete SKU/event at its documented gate; preserve receipt/stock/return or complete-life/all-consumer attribution as applicable, then normalize once by the original accepted-output denominator.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_i_closure`
- Sources: `ontario-watermain-2020`; `romac-install-2024`

Range evidence need: Establish independent, matching-identity quantity evidence and uncertainty for this actual exchange. A family total or former family interval is not a child quantity, allocation share or automatically valid child QA range.

###### Complete bounded provider sampling event (`closure_provider_sampling`)

Record only this independently identified complete bounded provider sampling event at its actual state and supply or receiving gate. An actual complete independently provided object/event with a matching Item(s) reference activates this card; bundled constituent parts and hours are not additional counted objects. Preserve actual SKU/formulation or dispatched composite, ownership, receiver/provider and every original/rework event. Evidence for nonoccurrence is required; missing identity, quantity or condition remains a completion gap. No amount or occurrence is inferred from the other child flows. Complete supplied products and contaminated carriers include their contained parts/material once.

- Selected flow: Complete bounded provider sampling event
- Flow property / unit: Number of items / Item(s)
- Amount rule: Independently count the identified actual complete SKU/event at its documented gate; preserve receipt/stock/return or complete-life/all-consumer attribution as applicable, then normalize once by the original accepted-output denominator.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_i_closure`
- Sources: `ontario-watermain-2020`; `romac-install-2024`

Range evidence need: Establish independent, matching-identity quantity evidence and uncertainty for this actual exchange. A family total or former family interval is not a child quantity, allocation share or automatically valid child QA range.

###### Complete bounded provider laboratory result (`closure_provider_laboratory`)

Record only this independently identified complete bounded provider laboratory result at its actual state and supply or receiving gate. An actual complete independently provided object/event with a matching Item(s) reference activates this card; bundled constituent parts and hours are not additional counted objects. Preserve actual SKU/formulation or dispatched composite, ownership, receiver/provider and every original/rework event. Evidence for nonoccurrence is required; missing identity, quantity or condition remains a completion gap. No amount or occurrence is inferred from the other child flows. Complete supplied products and contaminated carriers include their contained parts/material once.

- Selected flow: Complete bounded provider laboratory result
- Flow property / unit: Number of items / Item(s)
- Amount rule: Independently count the identified actual complete SKU/event at its documented gate; preserve receipt/stock/return or complete-life/all-consumer attribution as applicable, then normalize once by the original accepted-output denominator.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_i_closure`
- Sources: `ontario-watermain-2020`; `romac-install-2024`

Range evidence need: Establish independent, matching-identity quantity evidence and uncertainty for this actual exchange. A family total or former family interval is not a child quantity, allocation share or automatically valid child QA range.

###### Complete bounded provider neutralisation event (`closure_provider_neutralisation`)

Record only this independently identified complete bounded provider neutralisation event at its actual state and supply or receiving gate. An actual complete independently provided object/event with a matching Item(s) reference activates this card; bundled constituent parts and hours are not additional counted objects. Preserve actual SKU/formulation or dispatched composite, ownership, receiver/provider and every original/rework event. Evidence for nonoccurrence is required; missing identity, quantity or condition remains a completion gap. No amount or occurrence is inferred from the other child flows. Complete supplied products and contaminated carriers include their contained parts/material once.

- Selected flow: Complete bounded provider neutralisation event
- Flow property / unit: Number of items / Item(s)
- Amount rule: Independently count the identified actual complete SKU/event at its documented gate; preserve receipt/stock/return or complete-life/all-consumer attribution as applicable, then normalize once by the original accepted-output denominator.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_i_closure`
- Sources: `ontario-watermain-2020`; `romac-install-2024`

Range evidence need: Establish independent, matching-identity quantity evidence and uncertainty for this actual exchange. A family total or former family interval is not a child quantity, allocation share or automatically valid child QA range.

###### Installation spill absorbent (`install_consumables_absorbent`)

Record only this independently identified installation spill absorbent at its actual state and supply or receiving gate. Only an independently supplied or independently dispatched actual identified product/stream activates this card, outside other complete-product/provider coverage. Preserve actual SKU/formulation or dispatched composite, ownership, receiver/provider and every original/rework event. Evidence for nonoccurrence is required; missing identity, quantity or condition remains a completion gap. No amount or occurrence is inferred from the other child flows. Complete supplied products and contaminated carriers include their contained parts/material once.

- Selected flow: Installation spill absorbent
- Flow property / unit: Mass / kg
- Amount rule: Independently weigh the actual SKU/stream net mass after tare for this child; retain its own issue, return, stock and fate records; normalize the attributable numerator once by the original accepted-output denominator.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_i_materials`

Range evidence need: Establish independent, matching-identity quantity evidence and uncertainty for this actual exchange. A family total or former family interval is not a child quantity, allocation share or automatically valid child QA range.

###### Installation containment liner (`install_consumables_liner`)

Record only this independently identified installation containment liner at its actual state and supply or receiving gate. Only an independently supplied or independently dispatched actual identified product/stream activates this card, outside other complete-product/provider coverage. Preserve actual SKU/formulation or dispatched composite, ownership, receiver/provider and every original/rework event. Evidence for nonoccurrence is required; missing identity, quantity or condition remains a completion gap. No amount or occurrence is inferred from the other child flows. Complete supplied products and contaminated carriers include their contained parts/material once.

- Selected flow: Installation containment liner
- Flow property / unit: Mass / kg
- Amount rule: Independently weigh the actual SKU/stream net mass after tare for this child; retain its own issue, return, stock and fate records; normalize the attributable numerator once by the original accepted-output denominator.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_i_materials`

Range evidence need: Establish independent, matching-identity quantity evidence and uncertainty for this actual exchange. A family total or former family interval is not a child quantity, allocation share or automatically valid child QA range.

###### Installation cleaning cloth (`install_consumables_cloth`)

Record only this independently identified installation cleaning cloth at its actual state and supply or receiving gate. Only an independently supplied or independently dispatched actual identified product/stream activates this card, outside other complete-product/provider coverage. Preserve actual SKU/formulation or dispatched composite, ownership, receiver/provider and every original/rework event. Evidence for nonoccurrence is required; missing identity, quantity or condition remains a completion gap. No amount or occurrence is inferred from the other child flows. Complete supplied products and contaminated carriers include their contained parts/material once.

- Selected flow: Installation cleaning cloth
- Flow property / unit: Mass / kg
- Amount rule: Independently weigh the actual SKU/stream net mass after tare for this child; retain its own issue, return, stock and fate records; normalize the attributable numerator once by the original accepted-output denominator.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_i_materials`

Range evidence need: Establish independent, matching-identity quantity evidence and uncertainty for this actual exchange. A family total or former family interval is not a child quantity, allocation share or automatically valid child QA range.

###### Separately supplied sampling bottle (`install_consumables_sample_bottle`)

Record only this independently identified separately supplied sampling bottle at its actual state and supply or receiving gate. Only an independently supplied or independently dispatched actual identified product/stream activates this card, outside other complete-product/provider coverage. Preserve actual SKU/formulation or dispatched composite, ownership, receiver/provider and every original/rework event. Evidence for nonoccurrence is required; missing identity, quantity or condition remains a completion gap. No amount or occurrence is inferred from the other child flows. Complete supplied products and contaminated carriers include their contained parts/material once.

- Selected flow: Separately supplied sampling bottle
- Flow property / unit: Mass / kg
- Amount rule: Independently weigh the actual SKU/stream net mass after tare for this child; retain its own issue, return, stock and fate records; normalize the attributable numerator once by the original accepted-output denominator.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_i_materials`

Range evidence need: Establish independent, matching-identity quantity evidence and uncertainty for this actual exchange. A family total or former family interval is not a child quantity, allocation share or automatically valid child QA range.

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Accepted single-defect full-circle clamp repair installation on an existing exposed cast-iron local potable-water main (`accepted_repair`)

Only a unique final intervention with approved fit, flat clean gasket, actual staged torque/retorque, passed mechanical/hygienic criteria, closed defects and signed bounded repair release counts. Explicit authorised reinstatement/utility return-to-service owners remain in handback metadata. N unique accepted final repair IDs divided by N equals 1 Item(s); N positive. Rejected clamp/test, repeated attempts, bolts and clamp sections add no accepted output.

- Selected flow: Accepted single-defect full-circle clamp repair installation on an existing exposed cast-iron local potable-water main
- Flow property / unit: Count / Item(s)
- Amount rule: 1 Item(s)
- Value mode: `fixed_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_i_host`
- Sources: `romac-install-2024`; `ontario-watermain-2020`

Range evidence need: Actual signed acceptance register and actual required closure results/providers establish N and the exact reference; no numerical performance/life range is imposed.

###### Actual outward accepted unused complete-clamp assembly returns (`clamp_returns`)

Only complete unused assemblies actually transferred outward and accepted by their recipient as products count. Disaggregate actual SKU and quantity; match original gross complete_clamp inputs and burden custody. Retained stock and discarded/rejected used clamps are not unused complete-clamp product returns.

- Selected flow: Actual outward accepted unused complete-clamp assembly returns
- Flow property / unit: Count / Item(s)
- Amount rule: Actual accepted outward complete-assembly count per SKU divided by N; no netting from the gross clamp input followed by another output charge. If downstream actually needs mass, use only actual matching measured SKU net mass kg/Item(s) and a separately documented conversion.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_i_clamp_returns`

Range evidence need: Actual return ticket, recipient acceptance, SKU, intact state and counted assemblies required; no default clamp mass/BOM/shell gauge or count-to-mass conversion.

##### Waste flows

###### Complete failed or replaced clamp waste (`install_solid_waste_failed_clamp`)

Record only this independently identified complete failed or replaced clamp waste at its actual state and supply or receiving gate. Actual complete failed clamp dispatched includes gasket/shell/bolts once; separately removed part not in complete clamp needs distinct real record. Preserve actual SKU/formulation or dispatched composite, ownership, receiver/provider and every original/rework event. Evidence for nonoccurrence is required; missing identity, quantity or condition remains a completion gap. No amount or occurrence is inferred from the other child flows. Complete supplied products and contaminated carriers include their contained parts/material once.

- Selected flow: Complete failed or replaced clamp waste
- Flow property / unit: Mass / kg
- Amount rule: Independently weigh the actual SKU/stream net mass after tare for this child; retain its own issue, return, stock and fate records; normalize the attributable numerator once by the original accepted-output denominator.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_i_residuals`

Range evidence need: Establish independent, matching-identity quantity evidence and uncertainty for this actual exchange. A family total or former family interval is not a child quantity, allocation share or automatically valid child QA range.

###### Contaminated installation cloth waste (`install_solid_waste_cloth`)

Record only this independently identified contaminated installation cloth waste at its actual state and supply or receiving gate. Actual independently dispatched whole contaminated cloth; contained liquid not duplicate outlet. Preserve actual SKU/formulation or dispatched composite, ownership, receiver/provider and every original/rework event. Evidence for nonoccurrence is required; missing identity, quantity or condition remains a completion gap. No amount or occurrence is inferred from the other child flows. Complete supplied products and contaminated carriers include their contained parts/material once.

- Selected flow: Contaminated installation cloth waste
- Flow property / unit: Mass / kg
- Amount rule: Independently weigh the actual SKU/stream net mass after tare for this child; retain its own issue, return, stock and fate records; normalize the attributable numerator once by the original accepted-output denominator.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_i_residuals`

Range evidence need: Establish independent, matching-identity quantity evidence and uncertainty for this actual exchange. A family total or former family interval is not a child quantity, allocation share or automatically valid child QA range.

###### Actual collected testing flushing and disinfection wastewater to treatment (`install_wastewater`)

Actual collected whole fluid transferred to identified sewer/treatment receiver remains waste, with actual contaminants/residual disinfectant/neutralisation state; direct releases of the same fluid are excluded.

- Selected flow: Actual collected testing flushing and disinfection wastewater to treatment
- Flow property / unit: Mass / kg
- Amount rule: Actual transferred whole-fluid mass per N; metered volume converted only with actual density/temperature/state; constituent mass is a separate composition record.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_i_residuals`
- Sources: `ontario-watermain-2020`

Range evidence need: Actual transfer volume/mass, receiver, water/chemical balance, neutralisation and sampling required; no assumption all dose is wastewater chlorine.

##### Elementary flows

## 7. Allocation and Co-product Handling

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `allocation_repair` | All repair-cycle resources | Attribute directly to unique repair ID where possible; setup, failed clamps, cleaning, retorque and repeated tests remain over accepted N. Do not create co-products, accepted counts or displacement credit from rejected work or recovered waste. |  |
| `allocation_shared` | Shared crews, equipment and bounded providers | Identify all consuming jobs/nodes/periods and physical service driver; use measured driver shares that sum to the declared total. Reconcile shared-run setup, travel/empty return, hygiene and cleanup once. Purchased-provider bundles exclude duplicate direct resources. |  |
| `allocation_asset_life` | `prep_assets_cleaning_tool`; `prep_assets_pump`; `install_assets_torque_wrench`; `install_assets_test_pump` | Allocate complete-life burdens by evidenced target service divided by total compatible life service across all jobs/nodes/periods. Observed completed life or justified prospective in-service remaining service/replacement/termination/EOL scenario with uncertainty and updates is required; missing denominator or life coverage blocks finalisation. No default lifetime or future observed retirement requirement. |  |
| `allocation_stock` | Supplies, returns and retained stock | Gross input exchanges precede actual outward returns. Closing retained stock is a balance with carried-forward upstream burden, never an outward exchange. Opening stock brings its evidenced carried-in burden; purchase receipt/internal issue are alternative boundaries, not duplicates. Keep separate SKU-count and material-mass ledgers. Reconcile receipt or issue against final retained installation/destinations, real outward returns, captured waste, actual releases and closing stock. Final retained destinations exclude separately logged losses/outlets; dosed/used activity is intermediate, not another additive outlet. Reconcile upstream burden on that same custody basis. |  |

## 8. Foreground Data Collection, Calculation, and Quality Rules

Record actual foreground exchanges and provider resources at the declared boundaries. Protocols are node-specific; every field name below is literal and remains unchanged in translation. Units shown cover collected operands, not universal physical factors. Actual provider/service unit and concrete exchange support must be checked before downstream exchange production. Preserve unknown actual identities and failed balances as incomplete evidence, not zero.

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_p_host` | `prepare_host` | retained/qualified host and accepted repair state | inspection_and_acceptance_record | repair_id; defect_id; work_order_id; event_id; node_id; period_id; provider_id; bundle_scope; accepted_count_N; transfer_id; pipe_OD_mm; host_condition; defect_extent_mm; pipe_material; local_main_function; isolation_record; depressurisation_record; hygiene_authority_edition; contamination_class; clamp_SKU; gasket_compound; potable_document; torque_instruction_edition; torque_values_units; retorque_times; pressure_test_criterion_units; pressure_test_result; hygiene_criteria; sample_result; closure_owner; reinstatement_owner; utility_release_owner; acceptance_status; acceptance_signature; gate_time | Verify actual utility-authorised starting condition, qualified handoffs and final release against approved current product and adopted-authority instructions; pair transfer IDs and deduplicate unique final accepted repair IDs. Retain failed/repeated event links. | Item(s) | Every defect, transfer, attempt and final gate | Declared work-order start through accepted gate including loops; reporting/asset periods linked | Actual repair site and declared provider/supply gates; external interfaces named | per reference flow | Signed inspection, actual SKU/approval/torque/pressure/hygiene results and explicit owners; no paper-only future closure |
| `cp_p_materials` | `prepare_host` | supplies returns stock and upstream burden custody | lot_custody_record | repair_id; defect_id; work_order_id; event_id; node_id; period_id; provider_id; bundle_scope; accepted_count_N; lot_id; product_identity; formulation; concentration_value; concentration_basis; SKU; quantity_count; gross_mass_kg; tare_kg; net_mass_kg; volume_L; density_kg_per_L; temperature_C; physical_state; opening_stock_count; closing_stock_count; receipts_count; final_retained_count; outward_returns_count; discarded_count; opening_stock_kg; opening_burden_reference; receipts_kg; issues_kg; dosed_activity_kg; final_retained_destination_kg; outward_returns_kg; waste_kg; whole_release_kg; closing_stock_kg; closing_burden_reference; receiver; return_acceptance; upstream_gate; concrete_exchange_id; physical_event_id; actual_identity_id; actual_state; receiver_or_provider_gate; native_quantity; native_unit; unique_property; measurement_method_id; uncertainty | Weigh actual net contents after tare before real outward returns; retain actual count per clamp SKU. Reconcile receipt or issue boundary, opening burden and closing carried burden; match real return tickets. Actual chemical formulation/concentration/compatibility needed before concrete exchanges. Record each actual child/refined exchange independently by identity, physical event, state, gate and period. Retain all original obligations even where a corresponding exchange identity is not yet known. Do not allocate a family total or copy its numerical Range to children, count a carrier and its contained material twice, or turn missing occurrence/quantity/native reference into zero. Each concrete exchange has one property and one unit; other CP readings are auxiliary and require evidenced conversion. Missing required refinement blocks dataset completion. | kg; Item(s); L | Every lot, issue, return, use and period stock closure | Declared work-order start through accepted gate including loops; reporting/asset periods linked | Actual repair site and declared provider/supply gates; external interfaces named | per reference flow | Calibrated weights, SKU/BOM and actual pack mass; custody and stock/burden bridge; no webpage-gauge-derived mass |
| `cp_p_water` | `prepare_host` | supplied water and post-start host-content drainage | water_meter_record | repair_id; defect_id; work_order_id; event_id; node_id; period_id; provider_id; bundle_scope; accepted_count_N; source_id; water_quality; meter_id; meter_start; meter_end; meter_multiplier; meter_unit; supplied_volume_m3; supplied_mass_kg; density_kg_per_m3; temperature_C; physical_state; post_start_drained_mass_kg; rain_contribution_kg; retained_host_moisture_kg; waste_fluid_mass_kg; direct_fluid_release_kg; returned_water_kg; retained_water_kg; measurement_uncertainty | Read source/use meters or scales for each preparation/test/flush/disinfection event; keep supplied water separate from actual post-start drained host contents and evidenced weather/moisture. Reconcile fluid receivers and provider bundles. | kg; m3 | Every water use/drain/test/retest event | Declared work-order start through accepted gate including loops; reporting/asset periods linked | Actual repair site and declared provider/supply gates; external interfaces named | per reference flow | Calibrated meters, actual density for mass conversion, quality/source and outlet records; pre-start leakage excluded |
| `cp_p_utilities` | `prepare_host` | electricity fuel and direct combustion | meter_and_fuel_record | repair_id; defect_id; work_order_id; event_id; node_id; period_id; provider_id; bundle_scope; accepted_count_N; energy_source; equipment_id; meter_start_kWh; meter_end_kWh; meter_multiplier; node_share; fuel_identity; gross_fuel_kg; fuel_volume_L; density_kg_per_L; temperature_C; physical_state; opening_fuel_kg; closing_fuel_kg; unburned_return_kg; captured_unburned_waste_kg; whole_uncontained_fuel_kg; incident_total_spill_kg; burned_fuel_kg; fuel_boundary_choice; substance; emission_factor_kg_per_kg_fuel; factor_source; factor_scope; abatement; measured_emission_kg; receiver_medium; concrete_exchange_id; physical_event_id; actual_identity_id; actual_state; receiver_or_provider_gate; native_quantity; native_unit; unique_property; measurement_method_id; uncertainty | Meter actual energy by node/event and reconcile fuel stock, gross/consumed boundary and mutually exclusive unburned outlets. Incident total spill audits its partitions only. Direct combustion uses actual compatible factor or species measurement; included provider/energy emissions are excluded. Record each actual child/refined exchange independently by identity, physical event, state, gate and period. Retain all original obligations even where a corresponding exchange identity is not yet known. Do not allocate a family total or copy its numerical Range to children, count a carrier and its contained material twice, or turn missing occurrence/quantity/native reference into zero. Each concrete exchange has one property and one unit; other CP readings are auxiliary and require evidenced conversion. Missing required refinement blocks dataset completion. Upstream fuel product input retains all attributable supplied fuel, including nonreturned unburned waste and uncontained release. A net-used supply convention may subtract only evidenced retained stock and real usable outward returns under the stock bridge, never captured unburned waste or environmental loss. A gross-input convention retains exclusive actual outlets and the linked upstream-burden custody bridge. Burned activity is derived independently from compatible tank/event stock, receipts and all disjoint unburned fates; a burned-only supply input is permitted only if evidenced nonreturned unburned waste and release are both absent after stock and return reconciliation. Unknown outlet or unexplained loss remains a gap, not presumed combustion. | kWh; kg; L | Every meter/fuel interval and emission basis | Declared work-order start through accepted gate including loops; reporting/asset periods linked | Actual repair site and declared provider/supply gates; external interfaces named | per reference flow | Calibration, fuel density/state, stock/outlet logs, actual factor applicability and species/receiver evidence |
| `cp_p_assets` | `prepare_host` | complete-life assets and shared-node attribution | asset_life_service_record | repair_id; defect_id; work_order_id; event_id; node_id; period_id; provider_id; bundle_scope; accepted_count_N; asset_id; manufacture_burden_reference; maintenance_events; replacement_events; termination_scenario; EOL_burden_reference; operation_exclusions; service_driver_unit; target_node_service; all_consumers; consumer_periods; observed_life_service; prospective_remaining_service; complete_life_service; scenario_source; forecast_observed_labels; uncertainty; sensitivity; update_date; concrete_exchange_id; physical_event_id; actual_identity_id; actual_state; receiver_or_provider_gate; native_quantity; native_unit; unique_property; measurement_method_id | For each reusable asset enumerate all node/job/period consumers and manufacture/maintenance/replacements/EOL coverage. Scale by measured compatible target service share; observed completed lives or justified prospective in-service remaining-life scenarios, labelled forecast/observed, are permitted. Record each actual child/refined exchange independently by identity, physical event, state, gate and period. Retain all original obligations even where a corresponding exchange identity is not yet known. Do not allocate a family total or copy its numerical Range to children, count a carrier and its contained material twice, or turn missing occurrence/quantity/native reference into zero. Each concrete exchange has one property and one unit; other CP readings are auxiliary and require evidenced conversion. Missing required refinement blocks dataset completion. | Item(s); actual compatible service-driver unit | Every asset service event, period and scenario update | Complete asset lifecycle coverage: manufacture/acquisition, all contributing service/reporting periods, maintenance/replacement and termination/end-of-life; retain observed history and any evidenced prospective remainder as distinct evidence, including this job and all failed/repeated attempts. | Declared job/node/site plus every consuming node, job, provider and reporting period represented in the same asset complete-life denominator, including consumers outside this site. | per reference flow | Complete-life boundary/denominator evidence and share reconciliation; missing coverage or denominator blocks finalisation |
| `cp_p_freight` | `prepare_host` | actual non-bundled freight and shared trip responsibility | transport_leg_record | repair_id; defect_id; work_order_id; event_id; node_id; period_id; provider_id; bundle_scope; accepted_count_N; consignment_id; leg_id; mode; vehicle_provider; cargo_mass_kg; cargo_tare_kg; loaded_distance_km; target_share; all_consumers; empty_leg_km; empty_leg_fuel_kg; actual_service_scope; included_delivery; measured_uncertainty | Use actual cargo net mass and travelled loaded-leg distance for each mode/leg; allocate shared loads with declared physical driver and total-consumer reconciliation. Empty/staff service legs use actual fuel/bounded provider service once. | kg; km; kg*km | Every loaded and empty leg | Declared work-order start through accepted gate including loops; reporting/asset periods linked | Actual repair site and declared provider/supply gates; external interfaces named | per reference flow | Dispatch/weighing/distance/provider records; no fake cargo, nominal capacity or duplicate bundled delivery |
| `cp_p_residuals` | `prepare_host` | solid waste collected fluid and direct releases | outlet_and_receiver_record | repair_id; defect_id; work_order_id; event_id; node_id; period_id; provider_id; bundle_scope; accepted_count_N; outlet_id; material_or_substance; receiver; receiver_medium; capture_state; waste_route; gross_mass_kg; tare_kg; net_mass_kg; dry_solids_kg; associated_water_kg; whole_fluid_mass_kg; volume_m3; density_kg_per_m3; temperature_C; physical_state; concentration_value; concentration_basis; concentration_kg_per_m3; measured_species_kg; detection_limit; reaction_retention_kg; neutralisation_record; incident_id; incident_total_kg; exclusive_partition_id; concrete_exchange_id; physical_event_id; actual_identity_id; actual_state; receiver_or_provider_gate; native_quantity; native_unit; unique_property; measurement_method_id; uncertainty | Identify each captured waste transfer or uncontained direct outlet and receiver; weigh whole fluids/solids and analyse actual species on stated basis. Record actual treatment/neutralisation and detection limits; unclosed balances require investigation, not fictional emissions. Record each actual child/refined exchange independently by identity, physical event, state, gate and period. Retain all original obligations even where a corresponding exchange identity is not yet known. Do not allocate a family total or copy its numerical Range to children, count a carrier and its contained material twice, or turn missing occurrence/quantity/native reference into zero. Each concrete exchange has one property and one unit; other CP readings are auxiliary and require evidenced conversion. Missing required refinement blocks dataset completion. | kg; m3; kg/m3 | Every waste transfer, release, sample and incident | Declared work-order start through accepted gate including loops; reporting/asset periods linked | Actual repair site and declared provider/supply gates; external interfaces named | per reference flow | Waste tickets, sample chain of custody, species/medium and exclusive whole-fluid partitions; same mass never both waste and emission |
| `cp_i_host` | `install_accept` | retained/qualified host and accepted repair state | inspection_and_acceptance_record | repair_id; defect_id; work_order_id; event_id; node_id; period_id; provider_id; bundle_scope; accepted_count_N; transfer_id; pipe_OD_mm; host_condition; defect_extent_mm; pipe_material; local_main_function; isolation_record; depressurisation_record; hygiene_authority_edition; contamination_class; clamp_SKU; gasket_compound; potable_document; torque_instruction_edition; torque_values_units; retorque_times; pressure_test_criterion_units; pressure_test_result; hygiene_criteria; sample_result; closure_owner; reinstatement_owner; utility_release_owner; acceptance_status; acceptance_signature; gate_time | Verify actual utility-authorised starting condition, qualified handoffs and final release against approved current product and adopted-authority instructions; pair transfer IDs and deduplicate unique final accepted repair IDs. Retain failed/repeated event links. | Item(s) | Every defect, transfer, attempt and final gate | Declared work-order start through accepted gate including loops; reporting/asset periods linked | Actual repair site and declared provider/supply gates; external interfaces named | per reference flow | Signed inspection, actual SKU/approval/torque/pressure/hygiene results and explicit owners; no paper-only future closure |
| `cp_i_materials` | `install_accept` | supplies returns stock and upstream burden custody | lot_custody_record | repair_id; defect_id; work_order_id; event_id; node_id; period_id; provider_id; bundle_scope; accepted_count_N; lot_id; product_identity; formulation; concentration_value; concentration_basis; SKU; quantity_count; gross_mass_kg; tare_kg; net_mass_kg; volume_L; density_kg_per_L; temperature_C; physical_state; opening_stock_count; closing_stock_count; receipts_count; final_retained_count; outward_returns_count; discarded_count; opening_stock_kg; opening_burden_reference; receipts_kg; issues_kg; dosed_activity_kg; final_retained_destination_kg; outward_returns_kg; waste_kg; whole_release_kg; closing_stock_kg; closing_burden_reference; receiver; return_acceptance; upstream_gate; concrete_exchange_id; physical_event_id; actual_identity_id; actual_state; receiver_or_provider_gate; native_quantity; native_unit; unique_property; measurement_method_id; uncertainty | Weigh actual net contents after tare before real outward returns; retain actual count per clamp SKU. Reconcile receipt or issue boundary, opening burden and closing carried burden; match real return tickets. Actual chemical formulation/concentration/compatibility needed before concrete exchanges. Record each actual child/refined exchange independently by identity, physical event, state, gate and period. Retain all original obligations even where a corresponding exchange identity is not yet known. Do not allocate a family total or copy its numerical Range to children, count a carrier and its contained material twice, or turn missing occurrence/quantity/native reference into zero. Each concrete exchange has one property and one unit; other CP readings are auxiliary and require evidenced conversion. Missing required refinement blocks dataset completion. | kg; Item(s); L | Every lot, issue, return, use and period stock closure | Declared work-order start through accepted gate including loops; reporting/asset periods linked | Actual repair site and declared provider/supply gates; external interfaces named | per reference flow | Calibrated weights, SKU/BOM and actual pack mass; custody and stock/burden bridge; no webpage-gauge-derived mass |
| `cp_i_water` | `install_accept` | supplied water and post-start host-content drainage | water_meter_record | repair_id; defect_id; work_order_id; event_id; node_id; period_id; provider_id; bundle_scope; accepted_count_N; source_id; water_quality; meter_id; meter_start; meter_end; meter_multiplier; meter_unit; supplied_volume_m3; supplied_mass_kg; density_kg_per_m3; temperature_C; physical_state; post_start_drained_mass_kg; rain_contribution_kg; retained_host_moisture_kg; waste_fluid_mass_kg; direct_fluid_release_kg; returned_water_kg; retained_water_kg; measurement_uncertainty | Read source/use meters or scales for each preparation/test/flush/disinfection event; keep supplied water separate from actual post-start drained host contents and evidenced weather/moisture. Reconcile fluid receivers and provider bundles. | kg; m3 | Every water use/drain/test/retest event | Declared work-order start through accepted gate including loops; reporting/asset periods linked | Actual repair site and declared provider/supply gates; external interfaces named | per reference flow | Calibrated meters, actual density for mass conversion, quality/source and outlet records; pre-start leakage excluded |
| `cp_i_utilities` | `install_accept` | electricity fuel and direct combustion | meter_and_fuel_record | repair_id; defect_id; work_order_id; event_id; node_id; period_id; provider_id; bundle_scope; accepted_count_N; energy_source; equipment_id; meter_start_kWh; meter_end_kWh; meter_multiplier; node_share; fuel_identity; gross_fuel_kg; fuel_volume_L; density_kg_per_L; temperature_C; physical_state; opening_fuel_kg; closing_fuel_kg; unburned_return_kg; captured_unburned_waste_kg; whole_uncontained_fuel_kg; incident_total_spill_kg; burned_fuel_kg; fuel_boundary_choice; substance; emission_factor_kg_per_kg_fuel; factor_source; factor_scope; abatement; measured_emission_kg; receiver_medium; concrete_exchange_id; physical_event_id; actual_identity_id; actual_state; receiver_or_provider_gate; native_quantity; native_unit; unique_property; measurement_method_id; uncertainty | Meter actual energy by node/event and reconcile fuel stock, gross/consumed boundary and mutually exclusive unburned outlets. Incident total spill audits its partitions only. Direct combustion uses actual compatible factor or species measurement; included provider/energy emissions are excluded. Record each actual child/refined exchange independently by identity, physical event, state, gate and period. Retain all original obligations even where a corresponding exchange identity is not yet known. Do not allocate a family total or copy its numerical Range to children, count a carrier and its contained material twice, or turn missing occurrence/quantity/native reference into zero. Each concrete exchange has one property and one unit; other CP readings are auxiliary and require evidenced conversion. Missing required refinement blocks dataset completion. Upstream fuel product input retains all attributable supplied fuel, including nonreturned unburned waste and uncontained release. A net-used supply convention may subtract only evidenced retained stock and real usable outward returns under the stock bridge, never captured unburned waste or environmental loss. A gross-input convention retains exclusive actual outlets and the linked upstream-burden custody bridge. Burned activity is derived independently from compatible tank/event stock, receipts and all disjoint unburned fates; a burned-only supply input is permitted only if evidenced nonreturned unburned waste and release are both absent after stock and return reconciliation. Unknown outlet or unexplained loss remains a gap, not presumed combustion. | kWh; kg; L | Every meter/fuel interval and emission basis | Declared work-order start through accepted gate including loops; reporting/asset periods linked | Actual repair site and declared provider/supply gates; external interfaces named | per reference flow | Calibration, fuel density/state, stock/outlet logs, actual factor applicability and species/receiver evidence |
| `cp_i_assets` | `install_accept` | complete-life assets and shared-node attribution | asset_life_service_record | repair_id; defect_id; work_order_id; event_id; node_id; period_id; provider_id; bundle_scope; accepted_count_N; asset_id; manufacture_burden_reference; maintenance_events; replacement_events; termination_scenario; EOL_burden_reference; operation_exclusions; service_driver_unit; target_node_service; all_consumers; consumer_periods; observed_life_service; prospective_remaining_service; complete_life_service; scenario_source; forecast_observed_labels; uncertainty; sensitivity; update_date; concrete_exchange_id; physical_event_id; actual_identity_id; actual_state; receiver_or_provider_gate; native_quantity; native_unit; unique_property; measurement_method_id | For each reusable asset enumerate all node/job/period consumers and manufacture/maintenance/replacements/EOL coverage. Scale by measured compatible target service share; observed completed lives or justified prospective in-service remaining-life scenarios, labelled forecast/observed, are permitted. Record each actual child/refined exchange independently by identity, physical event, state, gate and period. Retain all original obligations even where a corresponding exchange identity is not yet known. Do not allocate a family total or copy its numerical Range to children, count a carrier and its contained material twice, or turn missing occurrence/quantity/native reference into zero. Each concrete exchange has one property and one unit; other CP readings are auxiliary and require evidenced conversion. Missing required refinement blocks dataset completion. | Item(s); actual compatible service-driver unit | Every asset service event, period and scenario update | Complete asset lifecycle coverage: manufacture/acquisition, all contributing service/reporting periods, maintenance/replacement and termination/end-of-life; retain observed history and any evidenced prospective remainder as distinct evidence, including this job and all failed/repeated attempts. | Declared job/node/site plus every consuming node, job, provider and reporting period represented in the same asset complete-life denominator, including consumers outside this site. | per reference flow | Complete-life boundary/denominator evidence and share reconciliation; missing coverage or denominator blocks finalisation |
| `cp_i_freight` | `install_accept` | actual non-bundled freight and shared trip responsibility | transport_leg_record | repair_id; defect_id; work_order_id; event_id; node_id; period_id; provider_id; bundle_scope; accepted_count_N; consignment_id; leg_id; mode; vehicle_provider; cargo_mass_kg; cargo_tare_kg; loaded_distance_km; target_share; all_consumers; empty_leg_km; empty_leg_fuel_kg; actual_service_scope; included_delivery; measured_uncertainty | Use actual cargo net mass and travelled loaded-leg distance for each mode/leg; allocate shared loads with declared physical driver and total-consumer reconciliation. Empty/staff service legs use actual fuel/bounded provider service once. | kg; km; kg*km | Every loaded and empty leg | Declared work-order start through accepted gate including loops; reporting/asset periods linked | Actual repair site and declared provider/supply gates; external interfaces named | per reference flow | Dispatch/weighing/distance/provider records; no fake cargo, nominal capacity or duplicate bundled delivery |
| `cp_i_residuals` | `install_accept` | solid waste collected fluid and direct releases | outlet_and_receiver_record | repair_id; defect_id; work_order_id; event_id; node_id; period_id; provider_id; bundle_scope; accepted_count_N; outlet_id; material_or_substance; receiver; receiver_medium; capture_state; waste_route; gross_mass_kg; tare_kg; net_mass_kg; dry_solids_kg; associated_water_kg; whole_fluid_mass_kg; volume_m3; density_kg_per_m3; temperature_C; physical_state; concentration_value; concentration_basis; concentration_kg_per_m3; measured_species_kg; detection_limit; reaction_retention_kg; neutralisation_record; incident_id; incident_total_kg; exclusive_partition_id; concrete_exchange_id; physical_event_id; actual_identity_id; actual_state; receiver_or_provider_gate; native_quantity; native_unit; unique_property; measurement_method_id; uncertainty | Identify each captured waste transfer or uncontained direct outlet and receiver; weigh whole fluids/solids and analyse actual species on stated basis. Record actual treatment/neutralisation and detection limits; unclosed balances require investigation, not fictional emissions. Record each actual child/refined exchange independently by identity, physical event, state, gate and period. Retain all original obligations even where a corresponding exchange identity is not yet known. Do not allocate a family total or copy its numerical Range to children, count a carrier and its contained material twice, or turn missing occurrence/quantity/native reference into zero. Each concrete exchange has one property and one unit; other CP readings are auxiliary and require evidenced conversion. Missing required refinement blocks dataset completion. | kg; m3; kg/m3 | Every waste transfer, release, sample and incident | Declared work-order start through accepted gate including loops; reporting/asset periods linked | Actual repair site and declared provider/supply gates; external interfaces named | per reference flow | Waste tickets, sample chain of custody, species/medium and exclusive whole-fluid partitions; same mass never both waste and emission |
| `cp_i_closure` | `install_accept` | bounded provider hygiene testing protection and repair closure | bounded_service_record | repair_id; defect_id; work_order_id; event_id; node_id; period_id; provider_id; bundle_scope; accepted_count_N; service_id; actual_reference_unit; service_quantity; service_event_id; provider_flow_property; provider_reference_unit; event_gate; adopted_authority_edition; classification_record; activity_scope; direct_resource_exclusions; included_water_kg; included_chemicals_kg; included_energy_units; included_assets; included_travel; pressure_result; flushing_result; disinfectant_result; sampling_requirement; sample_chain_of_custody; laboratory_result; neutralisation_result; release_criterion; criterion_pass; provider_signature; gate_time; utility_return_to_service_owner; concrete_exchange_id; physical_event_id; actual_identity_id; actual_state; receiver_or_provider_gate; native_quantity; native_unit; unique_property; measurement_method_id; uncertainty | Verify actual counted bounded provider-service event with matching Count/Item(s) reference/property/unit and primary activity/results for mandatory mechanical/hygienic closure, including any utility-owned protection/dewatering and sampling/lab resource coverage. Confirm completed required criteria before accepted_repair; record later authorised utility/reinstatement interfaces. Record each actual child/refined exchange independently by identity, physical event, state, gate and period. Retain all original obligations even where a corresponding exchange identity is not yet known. Do not allocate a family total or copy its numerical Range to children, count a carrier and its contained material twice, or turn missing occurrence/quantity/native reference into zero. Each concrete exchange has one property and one unit; other CP readings are auxiliary and require evidenced conversion. Missing required refinement blocks dataset completion. | Item(s); actual bundled resource units | Every bounded service, sample, result and release | Declared work-order start through accepted gate including loops; reporting/asset periods linked | Actual repair site and declared provider/supply gates; external interfaces named | per reference flow | Actual contract/gate/reference, primary resource evidence and criterion pass; excluded direct resources reconcile; no unowned future test |
| `cp_i_clamp_returns` | `install_accept` | outward accepted complete-assembly product returns | counted_product_return_record | repair_id; work_order_id; event_id; period_id; provider_id; accepted_count_N; lot_id; clamp_SKU; gross_received_count; returned_count; return_ticket; recipient; recipient_acceptance; intact_product_state; transfer_time; matched_SKU_net_mass_kg_per_item; mass_conversion_need | Count actual intact outward assemblies by SKU and match recipient acceptance/custody ticket and original gross receipt; do not convert to mass unless downstream requires it and actual matching SKU net mass is measured. | Item(s); kg/Item(s) only for actual evidenced downstream conversion | Every outward complete-assembly return | Declared repair work-order cycle and stock period | Actual repair site/supplier/return recipient | per reference flow | Counted return ticket, SKU/intact state and recipient acceptance; no stock output, default mass or gauge-derived BOM |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_normalize` | All inventory rows | For each row q_ref = attributed actual quantity / N, with original physical row unit retained. N is unique accepted final repair count and must be positive; internal transfer quantities retain their distinct event register. | Node-specific protocols and cp_i_host; actual attributed row quantity and accepted_count_N | Row physical units per 1 Item(s) accepted repair |  |
| `calc_mass` | `prep_supplies_cleaner`; `prep_supplies_brush`; `prep_supplies_cloth`; `prep_supplies_liner`; `prep_supplies_absorbent`; `prep_water`; actual exchanges required by `refine_prep_fuel`; actual exchanges required by `refine_prep_returns`; `prep_solid_waste_corrosion_dirt`; `prep_solid_waste_cloth`; `prep_wastewater`; `gasket_lubricant`; `hygiene_chemicals_disinfectant`; `hygiene_chemicals_cleaner`; `hygiene_chemicals_dechlorinator`; `test_flush_water`; actual exchanges required by `refine_install_fuel`; `install_consumables_absorbent`; `install_consumables_liner`; `install_consumables_cloth`; `install_consumables_sample_bottle`; actual exchanges required by `refine_install_returns`; `install_solid_waste_failed_clamp`; `install_solid_waste_cloth`; `install_wastewater` | Net contents kg = gross kg - tare kg. Where measured volume is used, mass kg = volume m3 * actual density kg/m3, or volume L * actual density kg/L; record actual temperature and state. Product count to mass requires actual SKU mass kg/Item(s). Gross receipt/issue precedes outward returns. | Applicable node cp_materials, cp_water, cp_utilities or cp_residuals; actual raw weight, volume, density, temperature, state and SKU net mass | Actual physical net mass kg, separately normalized over N |  |
| `calc_power` | `prep_power`; `install_power` | Attributed electricity kWh = (meter_end_kWh - meter_start_kWh) * meter_multiplier * node_share; divide by N. Actual shares reconcile to whole metered consumer scope. | cp_p_utilities; cp_i_utilities; actual meters/multiplier/node_share/N | kWh per accepted repair |  |
| `calc_freight` | `prep_freight`; `install_freight` | Freight kg*km = sum(cargo_mass_kg * loaded_distance_km * target_share); divide by N. Cargo tare removed. Verified 1 t*km = 1000 kg*km only when actual exchange uses that supported unit. Empty legs use actual separate service/fuel resources without cargo invention. | cp_p_freight; cp_i_freight; cargo mass, leg distance, target shares and accepted_count_N | kg*km per accepted repair |  |
| `calc_assets` | `prep_assets_cleaning_tool`; `prep_assets_pump`; `install_assets_torque_wrench`; `install_assets_test_pump` | Asset-equivalent Item(s) = target_node_service / complete_life_service, then divide by N. Complete_life_service = observed_life_service + evidenced prospective_remaining_service for in-service scenarios; use same compatible driver units and coverage, all consumers and periods. Scale actual complete-life upstream burden with this fraction once. | cp_p_assets; cp_i_assets; compatible target and complete-life service; forecast/observed labels; full-life burden coverage; accepted_count_N | Asset-equivalent Item(s) and attributed complete-life burden per repair |  |
| `calc_fuel` | actual exchanges required by `refine_prep_fuel`; actual exchanges required by `refine_install_fuel`; actual exchanges required by `refine_prep_combustion`; actual exchanges required by `refine_install_combustion` | Burned kg = opening fuel + gross fuel - closing fuel - unburned return - captured unburned waste - whole uncontained fuel, at the same bounded tank/event scope. Incident total spill is audit only after its exclusive partitions. Upstream fuel product input retains all attributable supplied fuel, including nonreturned unburned waste and uncontained release. A net-used supply convention may subtract only evidenced retained stock and real usable outward returns under the stock bridge, never captured unburned waste or environmental loss. A gross-input convention retains exclusive actual outlets and the linked upstream-burden custody bridge. Burned activity is derived independently from compatible tank/event stock, receipts and all disjoint unburned fates; a burned-only supply input is permitted only if evidenced nonreturned unburned waste and release are both absent after stock and return reconciliation. Unknown outlet or unexplained loss remains a gap, not presumed combustion. | cp_p_utilities; cp_i_utilities; stock/gross/exclusive outlets and boundary choice | Independent actual burned activity kg; upstream supply product retains nonreturned unburned loss burden under declared stock/return convention |  |
| `calc_combustion` | actual exchanges required by `refine_prep_combustion`; actual exchanges required by `refine_install_combustion` | Emission kg = burned_fuel_kg * applicable emission_factor_kg_per_kg_fuel, or actual measured_emission_kg, separately for verified substance/receiver; divide by N. Factor source and fuel/equipment/abatement/basis must match. | cp_p_utilities; cp_i_utilities; actual burned fuel, species/factor/source or measured emission | Species kg per accepted repair to actual air receiver |  |
| `calc_releases` | actual exchanges required by `refine_prep_releases`; actual exchanges required by `refine_install_releases` | Species kg = actual concentration_kg_per_m3 * discharged volume_m3, or measured_species_kg; divide by N. Record concentration basis/unit conversion evidence. Whole-fluid mass kg = actual volume_m3 * actual density_kg_per_m3 when not weighed; species sum is not whole-fluid mass. Dose, retained/reaction/captured/neutralised quantities remain separate evidence, never assumed emitted. | cp_p_residuals; cp_i_residuals; concentration/basis, discharged volume, density/temperature/state, species and medium | Actual species kg per repair and separate whole-fluid physical balance |  |
| `calc_stock_bridge` | `prep_supplies_cleaner`; `prep_supplies_brush`; `prep_supplies_cloth`; `prep_supplies_liner`; `prep_supplies_absorbent`; actual exchanges required by `refine_prep_returns`; `complete_clamp`; `gasket_lubricant`; `hygiene_chemicals_disinfectant`; `hygiene_chemicals_cleaner`; `hygiene_chemicals_dechlorinator`; `install_consumables_absorbent`; `install_consumables_liner`; `install_consumables_cloth`; `install_consumables_sample_bottle`; actual exchanges required by `refine_install_returns`; `clamp_returns` | Maintain separate Count/Item(s) SKU ledgers and Mass/kg material/formulation ledgers at one chosen receipt OR issue boundary. Opening stock + actual receipts/issues = final retained installation/destinations + real outward returns + captured waste + actual whole release + closing stock. Final retained destinations exclude separately logged losses/outlets; dosed/used activity is intermediate and never another additive final outlet. Match opening carried-in upstream burden and receipt burden to actual use, returns/dispositions and closing carried-forward burden using actual compatible lot data. Never count receipt and internal issue together. | cp_p_materials; cp_i_materials; cp_i_clamp_returns; opening_stock_count; receipts_count; final_retained_count; outward_returns_count; discarded_count; closing_stock_count; opening_stock_kg; receipts_kg; issues_kg; final_retained_destination_kg; outward_returns_kg; waste_kg; whole_release_kg; closing_stock_kg; lot_id; opening_burden_reference; closing_burden_reference | Physical stock and upstream-burden bridge without fake closing-stock output |  |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `quality_route` | Host, assembly and reference output | Actual main/OD/defect/clamp/gasket/potable approval and gate qualification required; site and PDF gauge conflict is resolved by actual SKU documentation, not an inferred BOM. | cp_p_host; cp_i_host; cp_i_materials; actual manufacturer/utility approval |
| `quality_closure` | Accepted repair and bounded closure provider | Actual adopted authority and product editions, responsibility and mechanical/hygienic criteria/results required; documented non-applicability for any omitted test; future unowned test blocks final count. | cp_i_host; cp_i_closure; approved procedure/results/owners |
| `quality_completeness` | Every inventory row | Collect all attempts, returns, stocks, actual waste/release outlets and provider resources from start to gate. Distinguish unknown from zero with detection limits and balance discrepancy investigation. | All node-specific protocols; custody, calibrated meter and receiver evidence |
| `quality_assets` | Shared assets/jobs/periods | Complete-life service and burden coverage, all consumers, prospective scenario sources/uncertainty and update policy required; unsupported denominator or replacement/termination/EOL gap blocks finalisation. | cp_p_assets; cp_i_assets; full-life and all-consumer records |
| `quality_identity` | Concrete downstream exchanges | Resolve actual supplier/provider/material/waste/substance and support identities before final TIDAS exchange; candidate semantic umbrella does not permit a near-match or invented UUID. | Actual foreground identities and independent detail/support verification |
| `quality_periods` | Work orders, loops, stocks and shared providers | Declare start/end, node/event/period links and service ownership; reconcile shared setup/cleaning/travel and changing stock burdens without repeat attribution. | Every CP work_order_id/event_id/period_id/provider_id; consumer totals and stock bridge |
| `refine_prep_supplies` | `prep_supplies_cleaner`; `prep_supplies_brush`; `prep_supplies_cloth`; `prep_supplies_liner`; `prep_supplies_absorbent` | Preserve this actual collection and closure scope as a mandatory dataset-production requirement: Record actual cleaner, brushes consumed, cloths and protective disposables separately at their supplier gate and real net contents; retain actual product/chemical identity, approval and packaging boundary. Include actual unbundled cleanup/containment liners, absorbents and protective disposables used in preparation; do not infer these from waste output alone. Reusable containment equipment belongs to `prep_assets_cleaning_tool`; `prep_assets_pump`. Range evidence need: Actual lot mass, receipt/issue records, tare and scope are required; no kg per repair default or assumed solvent. Independently establish every actual identity, state, real provider/receiver and exactly one exchange property/unit before constructing its flow card. Each actual exchange requires its own recorded quantity and applicable method, uncertainty and custody/fate coverage. Auxiliary CP units do not authorize extra exchange views. Actual occurrence unknown is not zero; never invent a material/species/provider list or split a parent total. Quantitative screening evidence must fit each actual exchange; a former family interval cannot be copied or divided into child ranges. Further actual identities not fully specified by the conditional children require mandatory refinement and prevent dataset completion; this requirement is not itself a flow exchange. Other actual protective disposable products/SKU/formulations require independent identity/unit; reusable containment apparatus belongs to full-life assets, no inference of supplies from waste alone. | `cp_p_materials`; actual independent records and identity/unit evidence |
| `refine_prep_fuel` | actual independently refined exchanges | Preserve this actual collection and closure scope as a mandatory dataset-production requirement: Specify actual fuel and equipment. Upstream fuel product input retains all attributable supplied fuel, including nonreturned unburned waste and uncontained release. A net-used supply convention may subtract only evidenced retained stock and real usable outward returns under the stock bridge, never captured unburned waste or environmental loss. A gross-input convention retains exclusive actual outlets and the linked upstream-burden custody bridge. Burned activity is derived independently from compatible tank/event stock, receipts and all disjoint unburned fates; a burned-only supply input is permitted only if evidenced nonreturned unburned waste and release are both absent after stock and return reconciliation. Unknown outlet or unexplained loss remains a gap, not presumed combustion. Range evidence need: Actual fuel records and outlet reconciliation required; no default fuel type, density, consumption or carbon factor. Independently establish every actual identity, state, real provider/receiver and exactly one exchange property/unit before constructing its flow card. Each actual exchange requires its own recorded quantity and applicable method, uncertainty and custody/fate coverage. Auxiliary CP units do not authorize extra exchange views. Actual occurrence unknown is not zero; never invent a material/species/provider list or split a parent total. Quantitative screening evidence must fit each actual exchange; a former family interval cannot be copied or divided into child ranges. Further actual identities not fully specified by the conditional children require mandatory refinement and prevent dataset completion; this requirement is not itself a flow exchange. Each actual upstream fuel product retains nonreturned unburned waste/release supply burden; original source stock/return/gross convention, actual burn activity independently measured, no waste or whole uncontained liquid counted as combustion. | `cp_p_utilities`; actual independent records and identity/unit evidence |
| `refine_prep_assets` | `prep_assets_cleaning_tool`; `prep_assets_pump` | Preserve this actual collection and closure scope as a mandatory dataset-production requirement: Represent the preparation share of actual reusable cleaning tools, pumps and access/protection assets with manufacture, maintenance, replacements and EOL covered across all consumers. Direct operation and provider-included tools are excluded from duplicate life burdens. Range evidence need: Actual asset IDs, life coverage, compatible service driver and all consumer/period totals required; justified prospective in-service remaining life and uncertainty allowed, no invented lifetime. Independently establish every actual identity, state, real provider/receiver and exactly one exchange property/unit before constructing its flow card. Each actual exchange requires its own recorded quantity and applicable method, uncertainty and custody/fate coverage. Auxiliary CP units do not authorize extra exchange views. Actual occurrence unknown is not zero; never invent a material/species/provider list or split a parent total. Quantitative screening evidence must fit each actual exchange; a former family interval cannot be copied or divided into child ranges. Further actual identities not fully specified by the conditional children require mandatory refinement and prevent dataset completion; this requirement is not itself a flow exchange. Actual access/protection apparatus and multiple cleaning-tool functions/models require their own exact whole-asset or compatible native-service references and complete-life all-consumer drivers; exclude operation/provider-bundled duplication. | `cp_p_assets`; actual independent records and identity/unit evidence |
| `refine_prep_returns` | actual independently refined exchanges | Preserve this actual collection and closure scope as a mandatory dataset-production requirement: Only real outward supplier/custody returns at their actual product state qualify. Keep lot and upstream burden linked to original gross inputs; retained stock is not an output. Range evidence need: Actual return ticket, recipient, lot/tare and accepted quantity required; no assumed return percentage. Independently establish every actual identity, state, real provider/receiver and exactly one exchange property/unit before constructing its flow card. Each actual exchange requires its own recorded quantity and applicable method, uncertainty and custody/fate coverage. Auxiliary CP units do not authorize extra exchange views. Actual occurrence unknown is not zero; never invent a material/species/provider list or split a parent total. Quantitative screening evidence must fit each actual exchange; a former family interval cannot be copied or divided into child ranges. Further actual identities not fully specified by the conditional children require mandatory refinement and prevent dataset completion; this requirement is not itself a flow exchange. Actual outward usable SKU/state/receiver/lot matched to gross supply; closing stock excluded, retain burden custody. | `cp_p_materials`; actual independent records and identity/unit evidence |
| `refine_prep_solid_waste` | `prep_solid_waste_corrosion_dirt`; `prep_solid_waste_cloth` | Preserve this actual collection and closure scope as a mandatory dataset-production requirement: Separate removed corrosion/dirt, contaminated cloths, packaging and any actual fuel-containing waste by composition, hazard and receiving waste route. Retained pipe is not demolition waste. Range evidence need: Actual waste manifest, composition/moisture and receiver/treatment evidence required; no default iron scrap or recycling credit. Independently establish every actual identity, state, real provider/receiver and exactly one exchange property/unit before constructing its flow card. Each actual exchange requires its own recorded quantity and applicable method, uncertainty and custody/fate coverage. Auxiliary CP units do not authorize extra exchange views. Actual occurrence unknown is not zero; never invent a material/species/provider list or split a parent total. Quantitative screening evidence must fit each actual exchange; a former family interval cannot be copied or divided into child ranges. Further actual identities not fully specified by the conditional children require mandatory refinement and prevent dataset completion; this requirement is not itself a flow exchange. Actual packaging, fuel-containing waste, liners, absorbents and other hazard/receiver streams require own identities; retained main is not demolition waste. | `cp_p_residuals`; actual independent records and identity/unit evidence |
| `refine_prep_releases` | actual independently refined exchanges | Preserve this actual collection and closure scope as a mandatory dataset-production requirement: Separate actual whole uncontained fluid from reported species; each elementary exchange requires actual substance identity and air/water/soil receiver. Captured waste, chemical dose and unexplained residual are not emissions. Whole-fluid mass is retained solely as a physical balance operand; any direct elementary water exchange requires its own actual water identity, receiver, property and verified quantity rather than a generic mixture flow. Range evidence need: Actual outlet medium, substance, concentration basis, volume, detection limits and mutually exclusive captured/released balance required; no assumption of zero or dose-to-emission equivalence. Independently establish every actual identity, state, real provider/receiver and exactly one exchange property/unit before constructing its flow card. Each actual exchange requires its own recorded quantity and applicable method, uncertainty and custody/fate coverage. Auxiliary CP units do not authorize extra exchange views. Actual occurrence unknown is not zero; never invent a material/species/provider list or split a parent total. Quantitative screening evidence must fit each actual exchange; a former family interval cannot be copied or divided into child ranges. Further actual identities not fully specified by the conditional children require mandatory refinement and prevent dataset completion; this requirement is not itself a flow exchange. Actual substance, disjoint particle-size fraction and air/water/soil receiving compartment; matched measurement or species/activity factor, whole-fluid composition/fate audit, capture and uncertainty; unknown is not zero. | `cp_p_residuals`; actual independent records and identity/unit evidence |
| `refine_prep_combustion` | actual independently refined exchanges | Preserve this actual collection and closure scope as a mandatory dataset-production requirement: Include actual direct-combustion species emitted to air where fuel is directly modelled; purchased energy or provider datasets with included combustion are not duplicated. Broad pollutant labels remain actual species/size requirements. Range evidence need: Actual fuel/equipment/abatement/species factor or measurements and factor scope required; no default CO2/NOx identity or factor. Independently establish every actual identity, state, real provider/receiver and exactly one exchange property/unit before constructing its flow card. Each actual exchange requires its own recorded quantity and applicable method, uncertainty and custody/fate coverage. Auxiliary CP units do not authorize extra exchange views. Actual occurrence unknown is not zero; never invent a material/species/provider list or split a parent total. Quantitative screening evidence must fit each actual exchange; a former family interval cannot be copied or divided into child ranges. Further actual identities not fully specified by the conditional children require mandatory refinement and prevent dataset completion; this requirement is not itself a flow exchange. Actual substance, disjoint particle-size fraction and air/water/soil receiving compartment; matched measurement or species/activity factor, whole-fluid composition/fate audit, capture and uncertainty; unknown is not zero. | `cp_p_utilities`; actual independent records and identity/unit evidence |
| `refine_hygiene_chemicals` | `hygiene_chemicals_disinfectant`; `hygiene_chemicals_cleaner`; `hygiene_chemicals_dechlorinator` | Preserve this actual collection and closure scope as a mandatory dataset-production requirement: Split actual disinfectant, cleaner and dechlorinating product exchanges by formulation/concentration and provider; use adopted authority and actual pipe/gasket/potable compatibility. Product solution mass differs from active chemical mass and released residual. Range evidence need: Actual authority-approved chemical/formulation, lot/stock, concentration and required treatment records required; Ontario example concentrations are not universal repair doses. Independently establish every actual identity, state, real provider/receiver and exactly one exchange property/unit before constructing its flow card. Each actual exchange requires its own recorded quantity and applicable method, uncertainty and custody/fate coverage. Auxiliary CP units do not authorize extra exchange views. Actual occurrence unknown is not zero; never invent a material/species/provider list or split a parent total. Quantitative screening evidence must fit each actual exchange; a former family interval cannot be copied or divided into child ranges. Further actual identities not fully specified by the conditional children require mandatory refinement and prevent dataset completion; this requirement is not itself a flow exchange. Any other actual chemistry/provider/concentration has its own record; product solution, active dose and actual residual release are nonadditive distinct measurement views, no guessed chemical identity. | `cp_i_materials`; actual independent records and identity/unit evidence |
| `refine_install_fuel` | actual independently refined exchanges | Preserve this actual collection and closure scope as a mandatory dataset-production requirement: Specify fuel/equipment/owner and Upstream fuel product input retains all attributable supplied fuel, including nonreturned unburned waste and uncontained release. A net-used supply convention may subtract only evidenced retained stock and real usable outward returns under the stock bridge, never captured unburned waste or environmental loss. A gross-input convention retains exclusive actual outlets and the linked upstream-burden custody bridge. Burned activity is derived independently from compatible tank/event stock, receipts and all disjoint unburned fates; a burned-only supply input is permitted only if evidenced nonreturned unburned waste and release are both absent after stock and return reconciliation. Unknown outlet or unexplained loss remains a gap, not presumed combustion. Unburned return, captured waste and whole uncontained fluid do not become burned fuel. Range evidence need: Actual fuel purchase/issue/stock/burned allocation, return/waste/release and provider scope required; no default fuel/density or empty-vehicle cargo. Independently establish every actual identity, state, real provider/receiver and exactly one exchange property/unit before constructing its flow card. Each actual exchange requires its own recorded quantity and applicable method, uncertainty and custody/fate coverage. Auxiliary CP units do not authorize extra exchange views. Actual occurrence unknown is not zero; never invent a material/species/provider list or split a parent total. Quantitative screening evidence must fit each actual exchange; a former family interval cannot be copied or divided into child ranges. Further actual identities not fully specified by the conditional children require mandatory refinement and prevent dataset completion; this requirement is not itself a flow exchange. Each actual carrier/grade gets one property/unit upstream product; retain supplied nonreturned losses independent of measured burn, stock/usable outward return/captured waste/whole uncontained-fluid fates. | `cp_i_utilities`; actual independent records and identity/unit evidence |
| `refine_install_assets` | `install_assets_torque_wrench`; `install_assets_test_pump` | Preserve this actual collection and closure scope as a mandatory dataset-production requirement: Actual reusable torque wrench, test pump, sampling/backflow/protection apparatus share includes compatible full-life manufacture/maintenance/replacements/EOL. Exclude directly modelled fuel/electricity and provider-bundled assets from double burden. Range evidence need: Actual calibration/asset IDs, service driver, all consumers and life coverage plus prospective scenario/uncertainty for in-service assets required; no default lifetime. Independently establish every actual identity, state, real provider/receiver and exactly one exchange property/unit before constructing its flow card. Each actual exchange requires its own recorded quantity and applicable method, uncertainty and custody/fate coverage. Auxiliary CP units do not authorize extra exchange views. Actual occurrence unknown is not zero; never invent a material/species/provider list or split a parent total. Quantitative screening evidence must fit each actual exchange; a former family interval cannot be copied or divided into child ranges. Further actual identities not fully specified by the conditional children require mandatory refinement and prevent dataset completion; this requirement is not itself a flow exchange. Actual sampling/backflow/protection apparatus functions/models need exact separate records; preserve complete-life/all-consumer manufacture/maintenance/replacements/EOL, exclude direct operation and provider package duplicates. | `cp_i_assets`; actual independent records and identity/unit evidence |
| `refine_closure_provider` | `closure_provider_pressure_test`; `closure_provider_hygiene`; `closure_provider_sampling`; `closure_provider_laboratory`; `closure_provider_neutralisation` | Preserve this actual collection and closure scope as a mandatory dataset-production requirement: Each concrete Count exchange is one actually counted bounded provider-service event with its own service ID, declared completed activity/gate and provider reference flow/property/unit compatible with Count/Item(s). Activities may include utility protection/dewatering, pressure/leak testing, hygiene, sampling/laboratory or neutralisation. Declare actual included resources/results and exclude them from duplicate direct cards. A provider whose actual reference flow/property uses another physical unit requires its own matching concrete exchange/property/unit; it cannot silently fit this Count card. Range evidence need: Actual counted event IDs, provider gate/reference property and unit, contract, primary resources and passed criteria required. Arbitrary provider units or paper-only future tests cannot substitute for a counted completed event. Independently establish every actual identity, state, real provider/receiver and exactly one exchange property/unit before constructing its flow card. Each actual exchange requires its own recorded quantity and applicable method, uncertainty and custody/fate coverage. Auxiliary CP units do not authorize extra exchange views. Actual occurrence unknown is not zero; never invent a material/species/provider list or split a parent total. Quantitative screening evidence must fit each actual exchange; a former family interval cannot be copied or divided into child ranges. Further actual identities not fully specified by the conditional children require mandatory refinement and prevent dataset completion; this requirement is not itself a flow exchange. Actual utility protection and dewatering are distinct functions requiring separate exact reference; any service not actually Count-referenced must use its own matching physical property/unit. Include provider resources/results once. | `cp_i_closure`; actual independent records and identity/unit evidence |
| `refine_install_consumables` | `install_consumables_absorbent`; `install_consumables_liner`; `install_consumables_cloth`; `install_consumables_sample_bottle` | Preserve this actual collection and closure scope as a mandatory dataset-production requirement: Conditionally include actual unbundled absorbents, spill containment liners, cleaning cloths, protective disposables, sample bottles/reagents and other consumed installation/test/cleanup supplies. Split by actual material/formulation/provider; exclude only supplies demonstrably included in another input or bounded provider package. Reusable apparatus belongs to assets. Range evidence need: Actual material/SKU, supplier/package scope, net mass/tare and custody/stock records required; no presumption provider included these supplies or universal dose. Independently establish every actual identity, state, real provider/receiver and exactly one exchange property/unit before constructing its flow card. Each actual exchange requires its own recorded quantity and applicable method, uncertainty and custody/fate coverage. Auxiliary CP units do not authorize extra exchange views. Actual occurrence unknown is not zero; never invent a material/species/provider list or split a parent total. Quantitative screening evidence must fit each actual exchange; a former family interval cannot be copied or divided into child ranges. Further actual identities not fully specified by the conditional children require mandatory refinement and prevent dataset completion; this requirement is not itself a flow exchange. Actual protective disposable products/reagents/other cleanup supplies require SKU/formulation/property/unit; exclude only demonstrably included provider supplies, reusable apparatus in assets. | `cp_i_materials`; actual independent records and identity/unit evidence |
| `refine_install_returns` | actual independently refined exchanges | Preserve this actual collection and closure scope as a mandatory dataset-production requirement: Only actual outward custody transfers of unused lubricant, disinfection/neutralisation formulations, other mass-based consumables or unburned fuel at their actual product state qualify. Excludes complete-clamp returns, which have a separate Count card. Retain lot and original gross-input burden bridge; closing retained stock is not output. Range evidence need: Actual mass-based return ticket, recipient acceptance/state, net weight/tare and lot/burden evidence required; no return fraction or clamp count-to-mass default. Independently establish every actual identity, state, real provider/receiver and exactly one exchange property/unit before constructing its flow card. Each actual exchange requires its own recorded quantity and applicable method, uncertainty and custody/fate coverage. Auxiliary CP units do not authorize extra exchange views. Actual occurrence unknown is not zero; never invent a material/species/provider list or split a parent total. Quantitative screening evidence must fit each actual exchange; a former family interval cannot be copied or divided into child ranges. Further actual identities not fully specified by the conditional children require mandatory refinement and prevent dataset completion; this requirement is not itself a flow exchange. Actual usable outward product/lot/state/receiver/native unit with gross-input burden bridge; retained stock excluded, complete clamp returns separate. | `cp_i_materials`; actual independent records and identity/unit evidence |
| `refine_install_solid_waste` | `install_solid_waste_failed_clamp`; `install_solid_waste_cloth` | Preserve this actual collection and closure scope as a mandatory dataset-production requirement: Actual failed/replaced clamps, separate spent parts, packaging, contaminated disposables, sample wastes and captured fuel-containing waste are split by composition/hazard/receiver. Do not count retained pipe as new demolition waste or duplicate provider-treated waste. Range evidence need: Actual manifests, weights, composition/moisture, treatment destination and reject disposition required; no default scrap yield or avoided steel credit. Independently establish every actual identity, state, real provider/receiver and exactly one exchange property/unit before constructing its flow card. Each actual exchange requires its own recorded quantity and applicable method, uncertainty and custody/fate coverage. Auxiliary CP units do not authorize extra exchange views. Actual occurrence unknown is not zero; never invent a material/species/provider list or split a parent total. Quantitative screening evidence must fit each actual exchange; a former family interval cannot be copied or divided into child ranges. Further actual identities not fully specified by the conditional children require mandatory refinement and prevent dataset completion; this requirement is not itself a flow exchange. Actual separate spent parts, packaging, liners/absorbents, other disposables, sample waste and captured fuel-containing waste require actual composition/hazard/receiver records; no old-main demolition or provider-treated duplicate. | `cp_i_residuals`; actual independent records and identity/unit evidence |
| `refine_install_releases` | actual independently refined exchanges | Preserve this actual collection and closure scope as a mandatory dataset-production requirement: Record whole uncontained fluid in physical balance, then actual elementary species to actual air/water/soil receiver. Discharged residual disinfectant differs from dosed solution/active chlorine; reaction, retention, capture and neutralisation require actual evidence. Whole-fluid mass is retained solely as a physical balance operand; any direct elementary water exchange requires its own actual water identity, receiver, property and verified quantity rather than a generic mixture flow. Range evidence need: Actual outlet/receiver/species, concentration basis, detection limits, volume/state, reaction/neutralisation and collection records required; no unexplained-residual emission or automatic zero. Independently establish every actual identity, state, real provider/receiver and exactly one exchange property/unit before constructing its flow card. Each actual exchange requires its own recorded quantity and applicable method, uncertainty and custody/fate coverage. Auxiliary CP units do not authorize extra exchange views. Actual occurrence unknown is not zero; never invent a material/species/provider list or split a parent total. Quantitative screening evidence must fit each actual exchange; a former family interval cannot be copied or divided into child ranges. Further actual identities not fully specified by the conditional children require mandatory refinement and prevent dataset completion; this requirement is not itself a flow exchange. Actual substance, disjoint particle-size fraction and air/water/soil receiving compartment; matched measurement or species/activity factor, whole-fluid composition/fate audit, capture and uncertainty; unknown is not zero. | `cp_i_residuals`; actual independent records and identity/unit evidence |
| `refine_install_combustion` | actual independently refined exchanges | Preserve this actual collection and closure scope as a mandatory dataset-production requirement: Direct fuel combustion emissions require actual fuel/equipment/substance/abatement and receiver; provider/purchased-energy included emissions are excluded from direct duplication. Range evidence need: Actual fuel/equipment/factor or measured species evidence and physical burned/outlet balance required; no broad pollutant near-match UUID or default factor. Independently establish every actual identity, state, real provider/receiver and exactly one exchange property/unit before constructing its flow card. Each actual exchange requires its own recorded quantity and applicable method, uncertainty and custody/fate coverage. Auxiliary CP units do not authorize extra exchange views. Actual occurrence unknown is not zero; never invent a material/species/provider list or split a parent total. Quantitative screening evidence must fit each actual exchange; a former family interval cannot be copied or divided into child ranges. Further actual identities not fully specified by the conditional children require mandatory refinement and prevent dataset completion; this requirement is not itself a flow exchange. Actual substance, disjoint particle-size fraction and air/water/soil receiving compartment; matched measurement or species/activity factor, whole-fluid composition/fate audit, capture and uncertainty; unknown is not zero. | `cp_i_utilities`; actual independent records and identity/unit evidence |
| `atomic_exchange_identity_unit` | all inventory rows | Each concrete flow card identifies exactly one actual independently supplied product/SKU/formulation, complete assembly, complete single-function or genuine complete bounded provider service, actual waste composite/state/receiver, or substance/size/receiving medium, with exactly one property and unit. Different actual identities require independent quantities and records, not a summed family exchange. A complete product/carrier includes its contents once. Same unchanged SKU/state usable supply/return pairs and matched physical internal send/receive pairs use the same selected property/unit; kg and count or MJ and kWh auxiliaries are nonadditive measurements, never duplicate exchanges. Missing identity/occurrence/quantity/native reference is a gap, not zero. Any pooled denominator must retain the original accepted configuration strata, state/gate and causal attribution; do not divide unlike circuits, routes, products or jobs as if they were equivalent. | actual identity, unit, custody and independent quantity evidence |
| `asset_final_normalization_once` | all inventory rows | An asset-equivalent formula already ending in division by N, D or A is the final quantity per reference flow. Its complete-life fraction and accepted-output normalization constitute the same normalization operation as the general normalization rule; never divide it by that denominator again. Apply the complete-life upstream burden exactly once. Actual complete provider event counts remain event quantities, not owned-asset fractions. | actual identity, unit, custody and independent quantity evidence |

## 9. Validation Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `validate_qualification` | `prepare_host`; `host_to_install` | Reject unqualified host, unsupported defect/OD/clamp fit, missing authorised isolation/depressurisation or unresolved job-caused damage; retain clean seat and transfer evidence. | `romac-install-2024`; `romac-submittal-2024` |
| `validate_assembly` | `install_accept` | Require distinct retained host and actual complete clamp component roles, flat clean gasket, centring, actual instruction-compliant torque/retorque and passed pre-concealment mechanical criterion; no coupling/tapping/separated ends. | `romac-install-2024` |
| `validate_hygiene` | `accepted_repair`; `closure_provider_pressure_test`; `closure_provider_hygiene`; `closure_provider_sampling`; `closure_provider_laboratory`; `closure_provider_neutralisation` | Require actual adopted-authority contamination classification, hygiene/flushing/sampling/neutralisation criteria/results and actual responsible providers; complete all actual required closure before final output. Record applicable waiver evidence and authorised reinstatement/utility handback interfaces. | `ontario-watermain-2020` |
| `validate_count_reject` | Reference count, work-order runs and loops | N counts only unique signed accepted final repairs; rejected attempts/clamps/tests and repeated preparation/retorque/retest retain burdens and explicit node-linked rework/return/waste paths. No failed attempt adds final count. |  |
| `validate_resources` | Shared assets/providers, stocks and all periods | Reconcile all consumers/periods, complete-life assets and prospective scenario evidence, direct versus bundled operation, freight/empty service, stock quantities/upstream-burden bridge and no repeated allocation. Missing life coverage or denominator blocks finalisation. |  |
| `validate_outlets` | Materials, water, fuel, waste and elementary releases | Gross before real returns; stock is not outward flow. Fuel outlets exclusive and whole uncontained fluid measured separately from species; total spill audit only. Chemical dose is not release and unclosed residual is not automatic emission; actual waste receiver/substance/medium and balance evidence required. |  |
| `validate_candidate` | Foreground package and downstream exchange production | Require all applicable protocols/qualifiers, actual units/conversion operands/uncertainty and verified concrete final exchanges before production. A candidate/check pass does not prove SKU potable approval, quantity truth, authority compliance or UUID verification. |  |
| `atomization_prep_supplies_complete` | `prep_supplies_cleaner`; `prep_supplies_brush`; `prep_supplies_cloth`; `prep_supplies_liner`; `prep_supplies_absorbent` | Require independent actual quantity, identity/state/gate and one property/unit for each applicable exchange in this scope; preserve full original protocol, normalization, stock, returns, waste/releases and shared-resource ownership. Reject completion on an unknown required child, unsupported native reference or missing quantity; evidenced nonoccurrence is separate from missing data. No family-total allocation, copied family Range or duplicate carrier/constituent/bundled-part exchange. Completion requires satisfying `refine_prep_supplies` with actual records; unresolved required expansion blocks the dataset. |  |
| `atomization_prep_fuel_complete` | actual independently refined exchanges | Require independent actual quantity, identity/state/gate and one property/unit for each applicable exchange in this scope; preserve full original protocol, normalization, stock, returns, waste/releases and shared-resource ownership. Reject completion on an unknown required child, unsupported native reference or missing quantity; evidenced nonoccurrence is separate from missing data. No family-total allocation, copied family Range or duplicate carrier/constituent/bundled-part exchange. Completion requires satisfying `refine_prep_fuel` with actual records; unresolved required expansion blocks the dataset. |  |
| `atomization_prep_assets_complete` | `prep_assets_cleaning_tool`; `prep_assets_pump` | Require independent actual quantity, identity/state/gate and one property/unit for each applicable exchange in this scope; preserve full original protocol, normalization, stock, returns, waste/releases and shared-resource ownership. Reject completion on an unknown required child, unsupported native reference or missing quantity; evidenced nonoccurrence is separate from missing data. No family-total allocation, copied family Range or duplicate carrier/constituent/bundled-part exchange. Completion requires satisfying `refine_prep_assets` with actual records; unresolved required expansion blocks the dataset. |  |
| `atomization_prep_returns_complete` | actual independently refined exchanges | Require independent actual quantity, identity/state/gate and one property/unit for each applicable exchange in this scope; preserve full original protocol, normalization, stock, returns, waste/releases and shared-resource ownership. Reject completion on an unknown required child, unsupported native reference or missing quantity; evidenced nonoccurrence is separate from missing data. No family-total allocation, copied family Range or duplicate carrier/constituent/bundled-part exchange. Completion requires satisfying `refine_prep_returns` with actual records; unresolved required expansion blocks the dataset. |  |
| `atomization_prep_solid_waste_complete` | `prep_solid_waste_corrosion_dirt`; `prep_solid_waste_cloth` | Require independent actual quantity, identity/state/gate and one property/unit for each applicable exchange in this scope; preserve full original protocol, normalization, stock, returns, waste/releases and shared-resource ownership. Reject completion on an unknown required child, unsupported native reference or missing quantity; evidenced nonoccurrence is separate from missing data. No family-total allocation, copied family Range or duplicate carrier/constituent/bundled-part exchange. Completion requires satisfying `refine_prep_solid_waste` with actual records; unresolved required expansion blocks the dataset. |  |
| `atomization_prep_releases_complete` | actual independently refined exchanges | Require independent actual quantity, identity/state/gate and one property/unit for each applicable exchange in this scope; preserve full original protocol, normalization, stock, returns, waste/releases and shared-resource ownership. Reject completion on an unknown required child, unsupported native reference or missing quantity; evidenced nonoccurrence is separate from missing data. No family-total allocation, copied family Range or duplicate carrier/constituent/bundled-part exchange. Completion requires satisfying `refine_prep_releases` with actual records; unresolved required expansion blocks the dataset. | `ontario-watermain-2020` |
| `atomization_prep_combustion_complete` | actual independently refined exchanges | Require independent actual quantity, identity/state/gate and one property/unit for each applicable exchange in this scope; preserve full original protocol, normalization, stock, returns, waste/releases and shared-resource ownership. Reject completion on an unknown required child, unsupported native reference or missing quantity; evidenced nonoccurrence is separate from missing data. No family-total allocation, copied family Range or duplicate carrier/constituent/bundled-part exchange. Completion requires satisfying `refine_prep_combustion` with actual records; unresolved required expansion blocks the dataset. |  |
| `atomization_hygiene_chemicals_complete` | `hygiene_chemicals_disinfectant`; `hygiene_chemicals_cleaner`; `hygiene_chemicals_dechlorinator` | Require independent actual quantity, identity/state/gate and one property/unit for each applicable exchange in this scope; preserve full original protocol, normalization, stock, returns, waste/releases and shared-resource ownership. Reject completion on an unknown required child, unsupported native reference or missing quantity; evidenced nonoccurrence is separate from missing data. No family-total allocation, copied family Range or duplicate carrier/constituent/bundled-part exchange. Completion requires satisfying `refine_hygiene_chemicals` with actual records; unresolved required expansion blocks the dataset. | `ontario-watermain-2020` |
| `atomization_install_fuel_complete` | actual independently refined exchanges | Require independent actual quantity, identity/state/gate and one property/unit for each applicable exchange in this scope; preserve full original protocol, normalization, stock, returns, waste/releases and shared-resource ownership. Reject completion on an unknown required child, unsupported native reference or missing quantity; evidenced nonoccurrence is separate from missing data. No family-total allocation, copied family Range or duplicate carrier/constituent/bundled-part exchange. Completion requires satisfying `refine_install_fuel` with actual records; unresolved required expansion blocks the dataset. |  |
| `atomization_install_assets_complete` | `install_assets_torque_wrench`; `install_assets_test_pump` | Require independent actual quantity, identity/state/gate and one property/unit for each applicable exchange in this scope; preserve full original protocol, normalization, stock, returns, waste/releases and shared-resource ownership. Reject completion on an unknown required child, unsupported native reference or missing quantity; evidenced nonoccurrence is separate from missing data. No family-total allocation, copied family Range or duplicate carrier/constituent/bundled-part exchange. Completion requires satisfying `refine_install_assets` with actual records; unresolved required expansion blocks the dataset. |  |
| `atomization_closure_provider_complete` | `closure_provider_pressure_test`; `closure_provider_hygiene`; `closure_provider_sampling`; `closure_provider_laboratory`; `closure_provider_neutralisation` | Require independent actual quantity, identity/state/gate and one property/unit for each applicable exchange in this scope; preserve full original protocol, normalization, stock, returns, waste/releases and shared-resource ownership. Reject completion on an unknown required child, unsupported native reference or missing quantity; evidenced nonoccurrence is separate from missing data. No family-total allocation, copied family Range or duplicate carrier/constituent/bundled-part exchange. Completion requires satisfying `refine_closure_provider` with actual records; unresolved required expansion blocks the dataset. | `ontario-watermain-2020`; `romac-install-2024` |
| `atomization_install_consumables_complete` | `install_consumables_absorbent`; `install_consumables_liner`; `install_consumables_cloth`; `install_consumables_sample_bottle` | Require independent actual quantity, identity/state/gate and one property/unit for each applicable exchange in this scope; preserve full original protocol, normalization, stock, returns, waste/releases and shared-resource ownership. Reject completion on an unknown required child, unsupported native reference or missing quantity; evidenced nonoccurrence is separate from missing data. No family-total allocation, copied family Range or duplicate carrier/constituent/bundled-part exchange. Completion requires satisfying `refine_install_consumables` with actual records; unresolved required expansion blocks the dataset. |  |
| `atomization_install_returns_complete` | actual independently refined exchanges | Require independent actual quantity, identity/state/gate and one property/unit for each applicable exchange in this scope; preserve full original protocol, normalization, stock, returns, waste/releases and shared-resource ownership. Reject completion on an unknown required child, unsupported native reference or missing quantity; evidenced nonoccurrence is separate from missing data. No family-total allocation, copied family Range or duplicate carrier/constituent/bundled-part exchange. Completion requires satisfying `refine_install_returns` with actual records; unresolved required expansion blocks the dataset. |  |
| `atomization_install_solid_waste_complete` | `install_solid_waste_failed_clamp`; `install_solid_waste_cloth` | Require independent actual quantity, identity/state/gate and one property/unit for each applicable exchange in this scope; preserve full original protocol, normalization, stock, returns, waste/releases and shared-resource ownership. Reject completion on an unknown required child, unsupported native reference or missing quantity; evidenced nonoccurrence is separate from missing data. No family-total allocation, copied family Range or duplicate carrier/constituent/bundled-part exchange. Completion requires satisfying `refine_install_solid_waste` with actual records; unresolved required expansion blocks the dataset. |  |
| `atomization_install_releases_complete` | actual independently refined exchanges | Require independent actual quantity, identity/state/gate and one property/unit for each applicable exchange in this scope; preserve full original protocol, normalization, stock, returns, waste/releases and shared-resource ownership. Reject completion on an unknown required child, unsupported native reference or missing quantity; evidenced nonoccurrence is separate from missing data. No family-total allocation, copied family Range or duplicate carrier/constituent/bundled-part exchange. Completion requires satisfying `refine_install_releases` with actual records; unresolved required expansion blocks the dataset. | `ontario-watermain-2020` |
| `atomization_install_combustion_complete` | actual independently refined exchanges | Require independent actual quantity, identity/state/gate and one property/unit for each applicable exchange in this scope; preserve full original protocol, normalization, stock, returns, waste/releases and shared-resource ownership. Reject completion on an unknown required child, unsupported native reference or missing quantity; evidenced nonoccurrence is separate from missing data. No family-total allocation, copied family Range or duplicate carrier/constituent/bundled-part exchange. Completion requires satisfying `refine_install_combustion` with actual records; unresolved required expansion blocks the dataset. |  |
| `validate_atomic_exchange_unit_and_normalization` | all inventory rows | Each concrete flow card identifies exactly one actual independently supplied product/SKU/formulation, complete assembly, complete single-function or genuine complete bounded provider service, actual waste composite/state/receiver, or substance/size/receiving medium, with exactly one property and unit. Different actual identities require independent quantities and records, not a summed family exchange. A complete product/carrier includes its contents once. Same unchanged SKU/state usable supply/return pairs and matched physical internal send/receive pairs use the same selected property/unit; kg and count or MJ and kWh auxiliaries are nonadditive measurements, never duplicate exchanges. Missing identity/occurrence/quantity/native reference is a gap, not zero. An asset-equivalent formula already ending in division by N, D or A is the final quantity per reference flow. Its complete-life fraction and accepted-output normalization constitute the same normalization operation as the general normalization rule; never divide it by that denominator again. Apply the complete-life upstream burden exactly once. Actual complete provider event counts remain event quantities, not owned-asset fractions. |  |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | foreground_dataset |
| downstream_use | secondary_dataset; background_dataset; downstream process/lifecyclemodel projection of the foreground repair package |
| allowed_use | Declared single-defect exposed cast-iron local potable-main clamp repair subset with matching route/quality/gate qualifiers |
| excluded_use | Whole pipeline construction/operation; live-pressure or tapping/coupling route; pipe replacement; unsupported life or watertightness equivalence; unaccepted work |
| required_metadata | Unique repair and defect IDs; local potable-water main function; retained cast-iron OD, condition and supported defect extent; actual single-section clamp SKU/range/length/gasket and potable certification; authorised isolation/depressurisation; contamination classification and adopted authority/instruction editions; actual torque/retorque, pressure/leak and hygiene criteria/results/providers; gate and handback owners; reporting/job/asset periods. |
| required_quality_disclosure | Providers/interfaces, actual closure criteria/results, uncertainty, missing identities, measured versus calculated records, reject loops, stock/burden bridges, asset-life scenarios, temporal/geographical/technology coverage and excluded services |
| update_trigger | Changed approved clamp/gasket/potable documents, host/defect/pressure, adopted hygiene authority, provider/boundary, evidence, asset scenario, supply mix or release criterion |


## 11. Data Sources

| source_id | type | reference | used_for |
| --- | --- | --- | --- |
| un-cpc3-2025 | official_guidance | UN CPC3 explanatory notes 30 June 2025, printed p286; https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Exp_Notes_30Jun2025.pdf | Local main repair subset and trenching exclusion |
| romac-ss1 | handbook | Romac SS1 official product page; https://www.romac.com/ss1 | Full-circle cast-iron-compatible single-section route; actual size/pressure/certification applicability; no universal BOM |
| romac-install-2024 | handbook | Romac document10-9-0036, 20 November 2024, pp1-2; https://www.romac.net/Installation-Instructions/SS123-install.pdf | Cleaning/lubricant, centring/gasket seating, staged torque/retorque, leak test before backfill and no coupling |
| romac-submittal-2024 | handbook | Romac document10-8-0014, 3 December 2024, p1; https://www.romac.net/Submittals/CLAMPS/ss1-2-3-sub.pdf | Factory assembly, SBR standard gasket and upon-request NSF61/372; actual BOM/edition confirmation |
| ontario-watermain-2020 | official_guidance | Ontario 2020 Watermain disinfection procedure, August2020, preface and sections2-3; https://www.ontario.ca/page/water-main-disinfection-procedure | Dated technical example of utility contamination classification, hygiene/flushing/sampling/dechlorination, repair records and authorised return-to-service responsibilities; actual adopted authority governs |

These sources support the stated classification, product route, technical instructions and hygiene/gate responsibilities. The generic normalization, physical-accounting, freight, fuel, stock/burden and complete-life allocation equations are this PCR's declared methods supported by the node-specific foreground collection protocols; they are not equations published by UN, Romac or Ontario.
