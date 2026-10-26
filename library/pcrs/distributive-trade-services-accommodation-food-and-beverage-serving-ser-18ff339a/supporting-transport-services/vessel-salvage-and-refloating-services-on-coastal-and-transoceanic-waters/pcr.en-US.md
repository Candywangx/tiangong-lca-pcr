---
pcr_id: pcr.distributive-trade-services-accommodation-food-and-beverage-serving-ser-18ff339a.supporting-transport-services.vessel-salvage-and-refloating-services-on-coastal-and-transoceanic-waters
language: en-US
sync_with: pcr.zh-CN.md
status: candidate
---

# Vessel salvage and refloating on coastal and transoceanic waters

## 1. Scope and Applicability

Apply to an actual defined vessel/cargo salvage or refloating task on coastal or transoceanic waters: recovery of distressed/sunken vessels and cargo, raising a wreck, righting a capsized vessel, or refloating a stranded vessel. The task must have a specified physical objective and accepted completion interface. It is not a generic transport or towing event. [Source: `un-cpc3-67531`]

Exclude standalone towing, routine transport, inland-water salvage (67532), ordinary shipbreaking/scrapping, separately contracted repair/storage, and public lifeboat, marine search/rescue, fireboat and police services. Movement or tug support indispensable within the declared salvage task is an actual support process/input counted once; it does not make independent towing a reference service of this PCR.

Select actual survey/mobilization, pumping/dewatering, lifting, buoyancy assistance, diving/cutting, stabilization and handoff operations from documented task records; none is presumed mandatory. This PCR specifies inventory accounting, not a salvage operating procedure or lifting/diving design. Recovered customer ship and cargo are not newly manufactured outputs.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.distributive-trade-services-accommodation-food-and-beverage-serving-ser-18ff339a.supporting-transport-services.vessel-salvage-and-refloating-services-on-coastal-and-transoceanic-waters |
| classification_refs | CPC 3.0 67531; narrower |
| covered_products | Actual marine vessel/cargo salvage, wreck raising, righting and refloating with accepted physical outcome |
| excluded_products | Standalone towing; inland salvage; routine transport; public search/rescue/fire/police; ordinary scrapping and subsequent repair/storage |
| representative_product | One accepted task achieving its identified vessel/cargo recovery or refloating objective |
| production_route | Document casualty baseline/objective → actual mobilization and recovery operations → verify physical completion and transfer custody; attributable demobilization retained |
| market_state | Accepted professional marine recovery service for identified ship/cargo and casualty state |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Achieve the specified physical marine salvage/refloating objective |
| How much | One accepted task for the identified vessel/cargo extent and defined initial/final physical state |
| How well | Actual agreed recovery, stability/custody and pollution-control acceptance criteria, independently evidenced; payment alone is not completion |
| How long or cycle | Full actual task from declared mobilization through accepted recovery/handoff, including weather waits, failed attempts and attributable demobilization |
| reference_flow_link | `salvage_output` |

| Field | Value |
| --- | --- |
| Reference amount | 1 |
| Reference product flow | Marine vessel salvage task |
| Reference flow property | Number of items `01846770-4cfe-4a25-8ad9-919d8d378345` |
| Reference unit group | Units of items `5beb6eed-33a9-47b8-9ede-1dfe8f679159` |
| Reference unit | item |
| Required qualifiers | casualty/task identifier; ship and cargo extent/composition; damaged/sunken/capsized/stranded state; exact coastal/open-sea location and water depth; seabed/weather/tide/current conditions; objective and acceptance criteria; actual pump/lift/buoyancy/diving/cutting configuration; team and operating/waiting periods; mobilization/demobilization routes; failed attempts; physical completion/custody interface; initial pollution stock and incremental releases; recovered property and waste fate; contractor boundary; asset utilization and electricity origin |

item is the singular alias of verified Item(s). It counts a completed qualified salvage task, not a ship newly produced, tonne of steel, fee, tug-hour, tow-distance or avoided spill. Different casualty objectives, vessel/cargo extent and operating conditions are separate scenarios without a default conversion or average salvage factor. Failed tasks cannot be labelled successful to create a denominator.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| `accepted_salvage_task` | reference product | Number of items `01846770-4cfe-4a25-8ad9-919d8d378345` | item | Count one cp_task accepted physical recovery/refloating outcome with fixed objective and scope. Pumps, lifts, dives and supporting moves are stages, not independent complete salvage outputs. |
| `pollution_baseline` | benzene; oily_water; spent_sorbent | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Keep casualty initial pollutant stock, recovered/treated material and incremental salvage release separate. Pumped or recovered mass is not automatically newly emitted mass or avoided impact. |

## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Identified casualty vessel/cargo and documented initial location/state/pollution stock at task start |
| starting_condition_role | foreground_start |
| product_classification_scope | Physical coastal/transoceanic salvage/refloating subset; standalone towing excluded |
| recursive_input_rule | Subcontracted recovery/diving/tug support enters with supplier scope and actual activity; do not duplicate its fuel, gases, personnel or assets locally |
| upstream_dataset_requirement | Actual energy/gas/material supply, salvage equipment/vessel manufacture/retirement, supplier support and contaminated waste treatment |
| disclosure | Objective/state and completion; actual recovery route; weather/wait/failure extent; baseline versus incremental pollution; custody/waste; assets and support-service coverage |

| rule_id | Rule | source_ids |
| --- | --- | --- |
| `boundary_recovery` | Include actual necessary mobilization, surveys, recovery work, supportive movement, pollution-control work through accepted handoff and attributable demobilization. Separate standalone towing, public rescue and subsequent repair/scrapping. | un-cpc3-67531 |
| `boundary_environment` | Record actual pollution-control actions and monitored environmental conditions as part of the task. Recognition or payment for environmental protection is not a numerical avoided-impact coefficient; counterfactual benefit claims require a separate evidenced scenario. | imo-salvage-environment |
| `boundary_energy` | Track each actual workboat/support-engine fuel and operating/standby phase; shore electricity has a separate supply boundary. Do not treat shore power as zero lifecycle burden or duplicate generator electricity and its fuel. | epa-harbor-craft |
| `boundary_atomic` | Include actual equipment manufacture/retirement shares and screen every specific gas, fuel, breathing mixture, repair material, sediment/cargo waste, released substance and habitat disturbance separately. No standard salvage technique, volume, asset mass or lifetime is imposed. |  |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| salvage | Mobilize, perform actual salvage and hand off accepted task | required | Actual casualty objective/configuration and conditional rows | foreground_production | per reference flow |

### Process: Mobilize, perform actual salvage and hand off accepted task (`salvage`)

#### Inputs

##### Product flows

###### Marine gas oil (`marine_gasoil`)

Actual marine gas oil consumed by salvage workboat/crane/pump engines; record each engine, phase and fuel specification. Do not also duplicate fuel included in a purchased support-vessel service.

- Selected flow: Marine gas oil
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Attributable measured exchange amount per reference flow; cp_energy.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_energy`
- Sources:

###### Diesel fuel (`diesel`)

Conditional on actual separately fuelled shore/mobile generator or equipment; distinguish fuel batches and marine-gasoil accounting.

- Selected flow: Diesel fuel
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Attributable measured exchange amount per reference flow; cp_energy.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_energy`
- Sources:

###### Low-voltage alternating current electricity (`electricity`)

Actual grid supply to staging, pumps or tools where this voltage applies; record region and voltage. Onboard generator electricity is internal and must not duplicate its fuel emissions and supply.

- Selected flow: Low-voltage alternating current electricity
- Flow property / unit: Energy / kWh
- Amount rule: Attributable measured exchange amount per reference flow; cp_energy.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_energy`
- Sources:

###### Compressed oxygen (`oxygen`)

Conditional on actual cutting/diving support using this specific gas; record cylinder issue/return and role separately, without prescribing an operation or gas recipe.

- Selected flow: Compressed oxygen
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Attributable measured exchange amount per reference flow; cp_materials.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_materials`
- Sources:

###### Acetylene (`acetylene`)

Conditional on actual acetylene cutting; distinguish oxygen and any other cutting consumable with its own row and measured quantity.

- Selected flow: Acetylene
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Attributable measured exchange amount per reference flow; cp_materials.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_materials`
- Sources:

###### Compressed breathing air (`breathing_air`)

Conditional on actual diving support with this gas; retain certified composition and actual issue/return. Other breathing mixtures require their own precise identities, not automatic air equivalence.

- Selected flow: Compressed breathing air
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Attributable measured exchange amount per reference flow; cp_materials.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_materials`
- Sources:

###### Steel lifting sling (`steel_sling`)

Actual manufacturing/replacement share of the identified sling with configuration and documented reuse/life use; no new sling or default lifting capacity per task.

- Selected flow: Steel lifting sling
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Attributable measured exchange amount per reference flow; cp_materials.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_materials`
- Sources:

###### Hydraulic lubricating oil (`hydraulic_oil`)

Actual hydraulic make-up/replacement for salvage equipment; distinguish additions, recovered/drained oil and spilled oil.

- Selected flow: Hydraulic lubricating oil
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Attributable measured exchange amount per reference flow; cp_materials.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_materials`
- Sources:

###### Polypropylene oil-sorbent pad (`sorbent`)

Conditional on actual oil-control pad use; record dry pad mass, absorbed material and destination separately. Do not infer avoided pollution from pad purchase.

- Selected flow: Polypropylene oil-sorbent pad
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Attributable measured exchange amount per reference flow; cp_materials.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_materials`
- Sources:

###### Marine salvage workboat (`workboat`)

Actual vessel manufacture/retirement share from supported utilization, including configuration and component scope; not the distressed customer vessel.

- Selected flow: Marine salvage workboat
- Flow property / unit: Number of items `01846770-4cfe-4a25-8ad9-919d8d378345` / item
- Amount rule: Attributable measured exchange amount per reference flow; cp_assets.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_assets`
- Sources:

###### Floating salvage crane (`floating_crane`)

Conditional on actual floating crane; record equipment and supported lifetime use, without an invented lifted mass or standard task demand.

- Selected flow: Floating salvage crane
- Flow property / unit: Number of items `01846770-4cfe-4a25-8ad9-919d8d378345` / item
- Amount rule: Attributable measured exchange amount per reference flow; cp_assets.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_assets`
- Sources:

###### Salvage dewatering pump (`pump`)

Conditional on actual pumping; allocate manufacture/retirement separately from recorded fuel/electricity and measured fluid throughput.

- Selected flow: Salvage dewatering pump
- Flow property / unit: Number of items `01846770-4cfe-4a25-8ad9-919d8d378345` / item
- Amount rule: Attributable measured exchange amount per reference flow; cp_assets.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_assets`
- Sources:

###### Inflatable salvage lifting bag (`lifting_bag`)

Conditional on actual lifting bag; declare type, use and manufacturing share. Required gas is separately measured; no default bag volume or buoyancy calculation.

- Selected flow: Inflatable salvage lifting bag
- Flow property / unit: Number of items `01846770-4cfe-4a25-8ad9-919d8d378345` / item
- Amount rule: Attributable measured exchange amount per reference flow; cp_assets.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_assets`
- Sources:

###### Commercial salvage diving support service (`diving_service`)

Conditional on purchased specialist diving; record team configuration, actual service hours and supplier equipment/energy coverage. Do not duplicate supplier-included gases and assets.

- Selected flow: Commercial salvage diving support service
- Flow property / unit: Time / h
- Amount rule: Attributable measured exchange amount per reference flow; cp_services.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_services`
- Sources:

###### Salvage-support tug assistance service (`tug_support`)

Conditional on purchased tug support indispensable to the defined salvage task; record actual scope and hours once. This input does not establish classification or methodology for an independent towing service.

- Selected flow: Salvage-support tug assistance service
- Flow property / unit: Time / h
- Amount rule: Attributable measured exchange amount per reference flow; cp_services.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_services`
- Sources:

#### Outputs

##### Product flows

###### Marine vessel salvage task (`salvage_output`)

One task with accepted physical salvage objective and custody interface. Recovered customer hull/cargo is disclosed by extent and fate, not automatically counted as new product or scrap credit.

- Selected flow: Marine vessel salvage task
- Flow property / unit: Number of items `01846770-4cfe-4a25-8ad9-919d8d378345` / item
- Amount rule: 1 item
- Value mode: `fixed_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_task`
- Sources:

##### Waste flows

###### Oily salvage dewatering wastewater (`oily_water`)

Actual collected contaminated fluid transferred to treatment; record water/oil composition, initial casualty stock, incremental recovery release and destination. Pumped volume is not itself an environmental emission.

- Selected flow: Oily salvage dewatering wastewater
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Attributable measured exchange amount per reference flow; cp_waste.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_waste`
- Sources:

###### Oil-contaminated polypropylene sorbent pad (`spent_sorbent`)

Actual discarded pad plus retained contaminant, with composition and treatment; distinguish pad dry mass and recovered oil to reconcile balance.

- Selected flow: Oil-contaminated polypropylene sorbent pad
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Attributable measured exchange amount per reference flow; cp_waste.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_waste`
- Sources:

###### Unalloyed steel cutting scrap (`steel_scrap`)

Conditional on actual unalloyed-steel cuttings discarded from salvage work; other alloy/cargo streams need individual rows. Customer recovered hull/cargo remains property transfer, not automatically recycling output or negative burden.

- Selected flow: Unalloyed steel cutting scrap
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Attributable measured exchange amount per reference flow; cp_waste.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_waste`
- Sources:

###### Waste hydraulic oil (`waste_oil`)

Actual segregated drained maintenance oil; distinguish accident bunker oil, equipment spill and supplier-covered disposal.

- Selected flow: Waste hydraulic oil
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Attributable measured exchange amount per reference flow; cp_waste.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_waste`
- Sources:

##### Elementary flows

###### Carbon dioxide, fossil, to air (`fossil_co2`)

Actual salvage-operator fuel combustion, from measured carbon balance or cited applicable engine/fuel factors; do not charge pre-existing casualty emissions to this row.

- Selected flow: Carbon dioxide, fossil, to air
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Attributable measured exchange amount per reference flow; cp_emissions.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_emissions`
- Sources:

###### Nitrogen dioxide, to air (`nitrogen_dioxide`)

Conditional on measured/modelled NO2 from actual salvage engines; total NOx requires an evidenced species split before using this identity.

- Selected flow: Nitrogen dioxide, to air
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Attributable measured exchange amount per reference flow; cp_emissions.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_emissions`
- Sources:

###### Benzene, to seawater (`benzene`)

Conditional on measured incremental salvage-caused benzene release, with causal attribution, time and marine compartment. Initial accident leakage is recorded separately and does not become a default new salvage emission or avoided-emission credit.

- Selected flow: Benzene, to seawater
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Attributable measured exchange amount per reference flow; cp_pollution.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_pollution`
- Sources:

## 7. Allocation and Co-product Handling

| rule_id | Rule | source_ids |
| --- | --- | --- |
| `allocation_tasks` | Directly meter actual task engines, tools, gas issue and services first. Shared fleet/mobilization/standby requires actual task time/load/route attribution, retaining weather waits, failed attempts and necessary support. |  |
| `allocation_assets` | Allocate actual vessel/crane/pump/bag/sling manufacture and retirement using documented utilization over supported life use, with cumulative shares capped at one life. Reconcile supplier-covered and complete-asset/component burdens. |  |
| `allocation_casualty` | Keep original casualty damage and pre-existing pollution inventory distinct from additional salvage activity/releases. Count actual attributable treatment of recovered contaminated fluid once, without relabelling all collected contamination as a new release. |  |
| `allocation_property` | Recovered customer vessel/cargo is not automatically a co-product of service production. Record ownership/transfer, recovered mass, waste status and actual downstream route; do not grant default steel-recycling, avoided replacement or avoided-spill credits. |  |
| `allocation_completion` | Retain unsuccessful work within the stated accepted task. A wholly unsuccessful operation has no accepted-success denominator and must report its actual activity/outcome separately, rather than fabricate a completed recovery or erase its burdens. |  |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cp_task | salvage | salvage_output | casualty_task_record | casualty/task; vessel/cargo; initial state/location/pollution; water depth; weather/tide/current; objective; route; team; activity/wait/retry; completion/handoff | Reconcile task plan and actual shift/equipment/custody records with objective completion evidence; record success, partial recovery and failure without fee-based inference. | item | each task/shift and acceptance | full mobilization to handoff/demobilization scope | identified marine casualty only | per reference flow | actual logs; surveys; acceptance and custody |
| cp_energy | salvage | marine_gasoil; diesel; electricity | energy_record | fuel/meter; engine/tool; batch/specification; stock; phase hours/load; route; electricity region/voltage; supplier-covered scope | Measure actual task fuel and grid supply, reconcile stock and distinguish internal generator output. Include standby/retries and actual demobilization. | row unit | each shift/task and supply period | same scope as task | actual operator energy | per reference flow | meters; fuel ledgers; engine logs |
| cp_materials | salvage | oxygen; acetylene; breathing_air; steel_sling; hydraulic_oil; sorbent | material_record | specific gas/material; composition/certification; cylinder/stock issue-return; mass; reuse; task role; supplier coverage | Weigh actual issue/return and retain supplier composition. Distinguish pure gas, specified mixture and formulated product, with documented reuse allocation. | kg | each issue and shift | same task period | actual recovery route | per reference flow | cylinder/stock records; certificates; reuse |
| cp_assets | salvage | workboat; floating_crane; pump; lifting_bag | asset_record | asset/model; configuration; manufacturing scope; actual use; supported life use; prior shares; replacement/retirement; subcontract overlap | Use actual asset/utilization ledgers and evidenced lifetime denominators; reconcile complete vessel/equipment inventories and separately counted parts. | item | asset event and task period | asset life and task use | salvage equipment, not customer property | per reference flow | register; life evidence; use records |
| cp_services | salvage | diving_service; tug_support | supplier_service_record | provider; role; team/vessel configuration; actual hours; work scope; energy/gas/asset/waste inclusion; task interface | Match actual contractor activity to supplier primary inventory; hours alone are not an emission factor. Remove duplicate own-fleet rows within supplier scope. | h | each contracted shift/task | same task period | necessary support within salvage | per reference flow | work orders; supplier inventory and coverage |
| cp_waste | salvage | oily_water; spent_sorbent; steel_scrap; waste_oil | waste_record | specific stream; wet/dry mass; water/oil/material composition; casualty versus operator origin; treatment; destination; custody | Measure segregated recovered/cleaning/maintenance streams and reconcile transfer manifests and composition, without assuming recovered property is waste or a credit. | kg | each collection and transfer | same task period | attributable task management | per reference flow | weighing; lab/stock; manifests |
| cp_emissions | salvage | fossil_co2; nitrogen_dioxide | emission_record | species; engine/fuel; technology; phase/activity; test/model; factor source; control; compartment | Use measured salvage-source species or a cited applicable engine/fuel method and actual activity; NOx is not automatically NO2. Preserve upstream supply separately. | kg | test and shift/task activity | same task period | actual salvage sources | per reference flow | test/method; fuel/activity records |
| cp_pollution | salvage | benzene | pollution_baseline_record | substance; initial stock/concentration; monitoring time/location; recovered/treated amount; incremental release; causal evidence; compartment | Measure substance-specific stocks/transfers/releases against documented casualty baseline. Retain attribution uncertainty; do not infer releases or avoided releases from purchased treatment capacity. | kg | baseline, task monitoring and handoff | pre-task baseline plus actual task | identified casualty marine compartment | per reference flow | baseline surveys; laboratory data; transfer balance |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_task_inventory` | all inventory rows | Sum actual attributable mobilization, operation, waiting, retries, waste management and demobilization exchanges for the accepted specified task, using documented supplier/shared-task allocation. Do not divide by recovered scrap mass or monetary award. | cp_task; actual task protocols | per reference flow |  |
| `calc_asset_share` | workboat; floating_crane; pump; lifting_bag; steel_sling | Apply supported actual-use/lifetime-use shares to manufacturing/retirement inventory, reconcile cumulative shares and supplier overlap, then attribute to cp_task. Uncertain life remains explicit rather than a default weight/lifetime. | cp_assets; cp_materials; cp_task | asset share per reference flow |  |
| `calc_pollution_transfer` | benzene; oily_water; spent_sorbent | Reconcile initial pollutant stock plus actual task additions with recovered/treated transfers, remaining stock and measured incremental releases. Keep water, pad and substance masses distinct; unexplained balance is uncertainty, not automatic avoided pollution. | cp_pollution; cp_waste; cp_task | substance or managed-stream mass per reference flow |  |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| dq_objective | salvage_output | Require initial casualty state and accepted physical target, identified ship/cargo extent and actual completion. Neither reward nor support-tug hours establishes salvage success. | cp_task |
| dq_route | all inventory rows | Match actual sea conditions, depth, team, configuration and phase records; no typical salvage intensity or invented equipment mass. | cp_task; cp_assets |
| dq_pollution | benzene; oily_water; spent_sorbent | Separate pre-existing casualty stocks, task-management transfers and additional releases with laboratory/causal evidence. Uncertainty stays disclosed without a default zero or credit. | cp_pollution; cp_waste |
| dq_identity | all inventory rows | Verify exact atomic flow/property/unit and official localized names before adoption; unresolved UUIDs remain individual and do not justify pooled categories or publication-readiness claims. | Direct support and unresolved register |

## 9. Validation Rules

| rule_id | Rule | source_ids |
| --- | --- | --- |
| `validate_salvage` | Require one salvage_output of 1 item linked to actual accepted vessel/cargo recovery, raising/righting/refloating objective. Reject standalone towing, inland-water tasks and public rescue/fire/police as this reference. | un-cpc3-67531 |
| `validate_boundary` | Reconcile failed attempts, standby, support services and supplier included burdens; original customer property is not newly manufactured output. Separate subsequent repair/storage/scrapping. |  |
| `validate_emissions` | Audit each emitted substance and contaminated managed stream, baseline attribution, actual treatment and asset life shares. Do not count collected oil simultaneously as newly leaked oil and avoided leakage; disclose all identity/upstream/attribution gaps. |  |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | marine_salvage_service |
| downstream_use | secondary_dataset; background_dataset |
| allowed_use | Qualified actual physical marine salvage/refloating task in a declared casualty-management scenario |
| excluded_use | Standalone towing factor; inland salvage; public rescue; whole customer ship manufacture; automatic avoided-pollution or recovered-steel credit |
| required_metadata | All reference qualifiers; actual task phases/outcome; custody/property/waste fate; pollution baseline; contractor and asset scope; upstream identities |
| required_quality_disclosure | Casualty/objective specificity; partial/failure extent; water/pollutant attribution; support overlap; asset life denominator; missing UUIDs/upstream/habitat evidence |
| update_trigger | Changed casualty state, recovery objective/extent, sea conditions, actual technique/support configuration, pollution baseline, contractor scope or life evidence |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| un-cpc3-67531 | official_guidance | UNSD CPC Version3.0 subclass67531 explanatory note. https://unstats.un.org/unsd/classifications/Econ/Structure/Detail/EN/2100/67531 | Physical vessel/cargo salvage, raising/righting/refloating and public-service exclusions; this PCR applies only to its stated physical-recovery subset |
| imo-salvage-environment | official_guidance | IMO, International Convention on Salvage overview, environmental-damage and compensation context. https://www.imo.org/en/about/conventions/pages/international-convention-on-salvage.aspx | Marine environmental-protection context; not a numerical avoided-emission factor, reward formula or full-LCA method |
| epa-harbor-craft | official_guidance | US EPA, Harbor Craft Best Practices to Improve Air Quality, Use Shore Power and operational context. https://www.epa.gov/ports-initiative/harbor-craft-hc-best-practices-improve-air-quality | Actual work-vessel energy and separate regional shore-power supply; US port context, no open-sea emission factors or default savings adopted |
