---
pcr_id: pcr.ores-and-minerals-electricity-gas-and-water.coal-and-peat.lignite
language: en-US
status: candidate
content_maturity: authored_methodology
translation_status: canonical
sync_with: pcr.zh-CN.md
---

# Lignite

## 1. Scope and Applicability

This PCR defines foreground production of naturally occurring lignite through extraction and mine-gate release. It covers unbriquetted product, including ordinary sizing and physical separation actually performed before the gate. Exclude sub-bituminous coal, hard coal, peat, manufactured brown-coal briquettes, coke, tar, chemical conversion and customer combustion. The mass reference supports supply inventories; it does not assert equal delivered heat across grades. CPC distinguishes lignite from adjacent brown-coal products (`unsd-cpc-2025`). Mining environmental aspects require site-specific assessment (`ifc-mining-2007`).

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.ores-and-minerals-electricity-gas-and-water.coal-and-peat.lignite |
| classification_refs | CPC 3.0: 11032 — Lignite |
| covered_products | Unbriquetted lignite, as-received mine-gate state |
| excluded_products | Sub-bituminous coal; hard coal; peat; brown-coal briquettes; coke; tar; combustion services |
| representative_product | Bulk raw lignite with declared moisture and calorific value |
| production_route | Open-pit or underground extraction, site environmental management and gate handling; declare actual route |
| market_state | Net bulk product at mine gate, unbriquetted; identify particle size and any beneficiation |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Supply of unbriquetted lignite at the mine gate |
| How much | 1 kg net product, as received |
| How well | Measured total moisture, net calorific value on the same moisture basis, ash and sulfur; particle size and rank declared |
| How long or cycle | One declared production reporting period; storage duration included up to gate release |
| reference_flow_link | `lignite_gate` |

| Field | Value |
| --- | --- |
| Reference amount | 1 |
| Reference product flow | lignite `db766ffc-c44d-4ecf-b906-98d90565dc01` |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | Mine and country; reporting period; mining route; rank; moisture and sampling method; calorific-value method and basis; ash; sulfur; particle size; conditioning; gate location; storage period; waste and water destinations; land restoration plan |

Required qualifiers must be declared in dataset metadata, process notes or equivalent product fields. Missing qualifiers make the reference incomplete.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| `reference_mass` | reference product | Mass | kg | Use net gate mass from cp_output; all inventory rows use per 1 kg reference flow. Preserve as-received moisture. |
| `energy_units` | mine_electricity; gate_electricity | Net calorific value | MJ | Convert metered kWh to MJ using 1 kWh = 3.6 MJ; electricity is an energy input, not product heat content. |
| `water_units` | mine_supplied_water; mine_groundwater; mine_discharge_water | Mass or volume as specified in each row | kg; m3 | Keep mass and volume distinct. Convert only with recorded density and temperature; dewatering is not identical to consumptive use. |
| `quality_basis` | lignite_gate | Mass and calorific value | kg; MJ/kg | Record as-received moisture fraction w and gate calorific value; dry mass is wet mass multiplied by (1-w). Do not silently replace the wet-mass reference or use a dry-basis calorific value with wet mass. |

## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Natural lignite seam in the ground before extraction; site development linked to the deposit |
| starting_condition_role | Natural resource starting condition, not a burden-free purchased product |
| product_classification_scope | Unbriquetted lignite; adjacent rank and manufactured-fuel categories excluded |
| recursive_input_rule | Purchased or transferred lignite is a separately quantified product input with a supplying dataset. Never count its prior resource extraction again or loop the model into itself. |
| upstream_dataset_requirement | Link fuel, electricity, supplied water, explosives, lubricants and treatment to compatible upstream datasets with geography, period and technology disclosed. |
| disclosure | Declare foreground gate, supplier boundaries, mine life, development and reclamation attribution, water balance and exclusions. |

| rule_id | applies_to | Rule | source_ids |
| --- | --- | --- | --- |
| boundary_mine | foreground | Include development attributable to extraction, overburden removal, extraction, internal haulage, dewatering, environmental controls, performed conditioning, storage, loading and attributable closure/restoration. Record capital equipment and treatment activities separately where material; justify any omission. | `ifc-mining-2007` |
| boundary_gate | downstream | End at mine-gate release; exclude off-site customer delivery and use-phase combustion. For captive mines, separate mine production from the power plant or conversion facility. |  |
| boundary_completeness | inventory | The cards define a minimum atomic inventory, not an exhaustive site bill. Add separately identified coal rejects, water-treatment chemicals, sludge, each measured water pollutant, further fuels, equipment and land-origin/destination exchanges when present. Identify all actual routes from records and document exclusions; do not substitute umbrella rows. |  |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| mine_operations | Mining and site environmental management | required | All mines; individual rows conditional on actual exchanges | foreground production and restoration | per 1 kg reference flow |
| blasting | ANFO blasting | conditional | Porous granular ammonium-oil explosive is actually used | foreground extraction support | per 1 kg reference flow |
| gate_release | Gate handling and product release | required | All product release; handling equipment as actually used | foreground finishing | per 1 kg reference flow |

### Process: Mining and site environmental management (`mine_operations`)

#### Inputs

##### Product flows

###### Excavation and environmental-control electricity (`mine_electricity`)

This purchased electricity exchange requires independently confirmed actual supplier, consumption or production interface, geography, voltage, generation attributes and energy property/unit; its UUID remains unresolved until a compatible direct-read identity is confirmed. A waste-incineration generation flow must not represent arbitrary site power.

Meter excavation, dewatering, ventilation and reclamation electricity separately from gate handling; include only electricity crossing this boundary.

- Selected flow: Electricity
- Flow property / unit: Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- Amount rule: Collect the attributable exchange using cp_mine_energy; report per 1 kg reference flow.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_mine_energy`

###### Mobile equipment diesel (`mine_diesel`)

Include where diesel-powered equipment is operated. Record fuel consumed, not purchases alone; separate upstream supply from on-site combustion.

- Selected flow: Diesel fuel `9d258d75-6792-4f1c-9856-81602ed8f816`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Collect the attributable exchange using cp_materials; report per 1 kg reference flow.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_materials`

###### Equipment lubricating oil (`mine_oil`)

Include lubricating oil actually replenished; do not combine it with diesel, hydraulic fluid or grease.

- Selected flow: lubricating oil `aec6f1a5-7b09-4704-870d-434d3ada0edd`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Collect the attributable exchange using cp_materials; report per 1 kg reference flow.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_materials`

###### Purchased process water (`mine_supplied_water`)

Include externally supplied process water when used. Exclude internal recirculation and distinguish direct groundwater abstraction.

- Selected flow: Process Water `94a04f7e-2d5c-41f0-b182-d54a3b373a02`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Collect the attributable exchange using cp_materials; report per 1 kg reference flow.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_materials`

##### Elementary flows

###### Lignite in ground, mass (`lignite_resource`)

Measure removed coal seam mass and reconcile coal lost in handling; this is a resource input, not purchased lignite.

- Selected flow: Lignite in ground, mass
- Flow property / unit: Mass / kg
- Amount rule: Collect the attributable exchange using cp_resource; report per 1 kg reference flow.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_resource`

###### Groundwater abstraction (`mine_groundwater`)

Include groundwater pumped for dewatering or use. Record aquifer, pumping period and source; exclude purchased water and internal reuse.

- Selected flow: ground water `4f462198-40cd-4184-8733-86648a20dc3f`
- Flow property / unit: Volume `93a60a56-a3c8-22da-a746-0800200c9a66` / m3
- Amount rule: Collect the attributable exchange using cp_water; report per 1 kg reference flow.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_water`

###### Mineral-extraction site occupation (`mine_occupation`)

Integrate occupied disturbed area over time; include pit, spoil storage and supporting areas attributable to production.

- Selected flow: mineral extraction site `b0744c5e-9859-470f-99dc-b117be5a32c5`
- Flow property / unit: Area*Time `93a60a56-a3c8-21da-a746-0800200c9a66` / m2*a
- Amount rule: Collect the attributable exchange using cp_land; report per 1 kg reference flow.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_land`

###### Transformation to mineral-extraction site (`mine_transform_to`)

Include newly converted area when mine development occurs. Record original land type as a separate matching transformation exchange in the dataset.

- Selected flow: to mineral extraction site `68f57e2a-2909-423c-ad8e-6a695f59a48f`
- Flow property / unit: Area `93a60a56-a3c8-19da-a746-0800200c9a66` / m2
- Amount rule: Collect the attributable exchange using cp_land; report per 1 kg reference flow.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_land`

###### Transformation from mineral-extraction site (`mine_transform_from`)

Include area released from mining use when restoration occurs. Record the receiving land type separately; do not assume instantaneous recovery.

- Selected flow: from mineral extraction site `b129498b-6ff1-4025-95f4-a7f821b341c1`
- Flow property / unit: Area `93a60a56-a3c8-19da-a746-0800200c9a66` / m2
- Amount rule: Collect the attributable exchange using cp_land; report per 1 kg reference flow.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_land`

#### Outputs

##### Waste flows

###### Excavated overburden soil (`mine_overburden`)

Include excavated overburden soil sent to spoil placement or backfill when present; exclude coal, beneficiation tailings and saleable mineral coproducts. Internal movements are tracked once in the integrated mine model.

- Selected flow: Excavated overburden soil
- Flow property / unit: Mass / kg
- Amount rule: Collect the attributable exchange using cp_waste; report per 1 kg reference flow.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste`

###### Used lubricating oil (`mine_used_oil`)

Include separately collected spent lubricating oil and link its actual recovery or disposal treatment; do not assume avoided virgin-oil credit.

- Selected flow: Used lubricating oil `55d93375-7f04-4166-b2a2-88ce929051a5`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Collect the attributable exchange using cp_waste; report per 1 kg reference flow.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste`

##### Elementary flows

###### Liquid water discharged to fresh water (`mine_discharge_water`)

Include actual liquid discharge to a freshwater receiving body after any on-site treatment; add each measured dissolved pollutant or suspended solid as a separate elementary row in the dataset. External effluent treatment is a waste transfer, not this release.

- Selected flow: Liquid water discharged to fresh water
- Flow property / unit: Volume / m3
- Amount rule: Collect the attributable exchange using cp_water; report per 1 kg reference flow.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_water`

###### Direct fossil carbon dioxide (`mine_co2`)

Record on-site fuel combustion and documented coal oxidation, including blasting-related release if present. Exclude future customer combustion and upstream supply emissions.

- Selected flow: carbon dioxide (fossil) `08a91e70-3ddc-11dd-923d-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Collect the attributable exchange using cp_air; report per 1 kg reference flow.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_air`

###### Direct fossil methane (`mine_methane`)

Record measured or transparently modelled mine methane reaching air, net of collected gas sent to use or destruction; absence requires geological or monitoring evidence.

- Selected flow: methane (fossil) `08a91e70-3ddc-11dd-9610-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Collect the attributable exchange using cp_air; report per 1 kg reference flow.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_air`

###### Nitrogen oxides to air, as NO2 (`mine_nox`)

Include combustion and blasting NOx when present; declare the analytical reporting basis. Nitrous oxide is a different substance and cannot substitute.

- Selected flow: Nitrogen oxides to air, as NO2
- Flow property / unit: Mass / kg
- Amount rule: Collect the attributable exchange using cp_air; report per 1 kg reference flow.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_air`

###### Sulfur dioxide to air (`mine_so2`)

Include measured or fuel-sulfur-based sulfur dioxide when present; retain sulfur analysis and control-efficiency evidence.

- Selected flow: Sulfur dioxide to air
- Flow property / unit: Mass / kg
- Amount rule: Collect the attributable exchange using cp_air; report per 1 kg reference flow.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_air`

###### Airborne particulate matter, unspecified size (`mine_dust`)

Include uncaptured dust and combustion particles; retain size coverage and collection efficiency. If size fractions are known, replace this generic size row with disjoint measured fractions rather than double counting.

- Selected flow: Particulate matter, particle size unspecified `0ce3dedb-caca-407b-a856-a90470eb8ec0`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Collect the attributable exchange using cp_air; report per 1 kg reference flow.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_air`

### Process: ANFO blasting (`blasting`)

#### Inputs

##### Product flows

###### Porous granular ammonium-oil explosive (`blasting_anfo`)

Include only when this specific ammonium-nitrate fuel-oil formulation is used. Record charge mass and supplier formulation; other explosives require distinct dataset rows. On-site blast emissions are included once in mine_operations.

- Selected flow: Porous granular ammonium oil explosive `c136e796-f073-46c0-b3c5-5d54ed985fcf`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Collect the attributable exchange using cp_blasting; report per 1 kg reference flow.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_blasting`

### Process: Gate handling and product release (`gate_release`)

#### Inputs

##### Product flows

###### Crushing, conveying and gate-loading electricity (`gate_electricity`)

This purchased electricity exchange requires independently confirmed actual supplier, consumption or production interface, geography, voltage, generation attributes and energy property/unit; its UUID remains unresolved until a compatible direct-read identity is confirmed. A waste-incineration generation flow must not represent arbitrary site power.

Measure electricity attributable to any performed sizing, conveying, stockpiling and loading; separate from excavation and environmental controls.

- Selected flow: Electricity
- Flow property / unit: Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- Amount rule: Collect the attributable exchange using cp_gate_energy; report per 1 kg reference flow.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_gate_energy`

#### Outputs

##### Product flows

###### Mine-gate lignite (`lignite_gate`)

The accepted product reference is 1 kg of net unbriquetted lignite at the gate, as received; exclude transport equipment and free drainage water.

- Selected flow: lignite `db766ffc-c44d-4ecf-b906-98d90565dc01`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: 1 kg
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_output`

## 7. Allocation and Co-product Handling

| rule_id | applies_to | Rule | source_ids |
| --- | --- | --- | --- |
| allocation_subdivide | shared_mine_operations | First isolate separately metered and directly attributable activities. Allocate shared mine operations by documented causal drivers such as material movement, pumping duty and equipment time; preserve raw totals and allocated fractions in cp_allocation. |  |
| allocation_outputs | coproducts_and_waste | Overburden, waste oil and discharged water are not coproducts merely because they leave the mine. For genuinely saleable co-extracted products, disclose the physical relationship; if no defensible subdivision or causal allocation exists, refer that dataset allocation to review. No automatic revenue share or substitution credit is prescribed. |  |
| allocation_restoration | mine_life | Attribute development and restoration from the declared mine-life plan to the corresponding recoverable output, including closure obligations. Disclose lifetime-output assumptions and sensitivities; do not burden only the final operating year or treat future reclamation as zero. |  |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cp_output | gate_release | product | weighing | net dispatched mass; opening and closing stock; moisture; calorific value; ash; sulfur; particle size; sample date | Calibrated belt scale or weighbridge with tare and representative matched moisture/quality sampling; reconcile transfers and stock | kg | Each dispatch and representative quality sample | One complete declared annual period; lifetime activities separately disclosed | Declared mine and linked supporting areas | per 1 kg reference flow | Calibration, source records, reconciliation and uncertainty; retain allocation evidence |
| cp_mine_energy | mine_operations | electricity | meter | meter readings; equipment; voltage; supplier; on-site generation; operating hours | Use submeters and reconcile supplier invoices; separate gate meter and on-site generation fuels | MJ | Continuous meter, monthly reconciliation | One complete declared annual period; lifetime activities separately disclosed | Declared mine and linked supporting areas | per 1 kg reference flow | Calibration, source records, reconciliation and uncertainty; retain allocation evidence |
| cp_gate_energy | gate_release | electricity | meter | gate meter readings; equipment operating hours; conditioning state | Meter gate handling, allocating shared demand with operating records | MJ | Continuous meter, monthly reconciliation | One complete declared annual period; lifetime activities separately disclosed | Declared mine and linked supporting areas | per 1 kg reference flow | Calibration, source records, reconciliation and uncertainty; retain allocation evidence |
| cp_materials | mine_operations | fuel_and_consumables | stock | opening stock; receipts; closing stock; returns; equipment use; fuel density; water density | Use fuel and lubricant issue records and supplied-water meters; convert volume to mass only using documented density | kg | Each issue; monthly stock reconciliation | One complete declared annual period; lifetime activities separately disclosed | Declared mine and linked supporting areas | per 1 kg reference flow | Calibration, source records, reconciliation and uncertainty; retain allocation evidence |
| cp_resource | mine_operations | coal_resource | survey | seam removed; bulk density; extracted coal; coal losses; moisture basis | Reconcile geological survey and density measurements with mined mass, stock change and rejects on compatible moisture bases | kg | Survey campaign and monthly output | One complete declared annual period; lifetime activities separately disclosed | Declared mine and linked supporting areas | per 1 kg reference flow | Calibration, source records, reconciliation and uncertainty; retain allocation evidence |
| cp_water | mine_operations | water_balance | meter | aquifer; pumping meter; use; reuse; discharge meter; receiving body; rainfall; storage change; samples | Meter abstraction and liquid releases separately; reconcile water balance and discharge quality; retain pollutant-specific analyses | m3 | Continuous metering and risk-based sampling | One complete declared annual period; lifetime activities separately disclosed | Declared mine and linked supporting areas | per 1 kg reference flow | Calibration, source records, reconciliation and uncertainty; retain allocation evidence |
| cp_waste | mine_operations | waste | transfer | waste identity; mass; density; origin; destination; internal placement; treatment route | Weigh waste oil transfers and use surveyed overburden volume with measured density; reconcile internal backfill and external disposal | kg | Each transfer and survey campaign | One complete declared annual period; lifetime activities separately disclosed | Declared mine and linked supporting areas | per 1 kg reference flow | Calibration, source records, reconciliation and uncertainty; retain allocation evidence |
| cp_air | mine_operations | direct_emissions | monitoring | source; substance; compartment; mass flow; hours; fuel; sulfur; methane concentration; ventilation flow; dust size; capture; factor origin | Use matched monitoring and operating records. For unmeasured releases document a site-applicable emission model and independently verified factor source; keep estimates distinct from measurements and avoid supplier-emission duplication | kg | Monitoring campaign and continuous activity logs | One complete declared annual period; lifetime activities separately disclosed | Declared mine and linked supporting areas | per 1 kg reference flow | Calibration, source records, reconciliation and uncertainty; retain allocation evidence |
| cp_land | mine_operations | land | survey | land type before and after; polygon; disturbed area; occupation start and end; restoration stage; mine-life output | Use GIS and dated surveys; integrate occupied area over years, recording transformation areas separately and attributing mine-life burdens to mine-life output | m2*a; m2 | Annual survey and every land-change event | One complete declared annual period; lifetime activities separately disclosed | Declared mine and linked supporting areas | per 1 kg reference flow | Calibration, source records, reconciliation and uncertainty; retain allocation evidence |
| cp_blasting | blasting | explosive | charge_log | formulation; charge mass; blast event; mined area; output attribution | Use charge logs reconciled with supplier receipts; retain formulation and activity allocation | kg | Every blast | One complete declared annual period; lifetime activities separately disclosed | Declared mine and linked supporting areas | per 1 kg reference flow | Calibration, source records, reconciliation and uncertainty; retain allocation evidence |
| cp_allocation | mine_operations | shared_burdens | allocation_record | raw shared total; products; causal driver; fractions; mine-life output; closure plan | Retain separate process records and justified allocation, including lifetime development and restoration assumptions | fraction | Reporting period and mine-plan revision | One complete declared annual period; lifetime activities separately disclosed | Declared mine and linked supporting areas | per 1 kg reference flow | Calibration, source records, reconciliation and uncertainty; retain allocation evidence |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| period_normalization | all inventory rows | Divide each attributable exchange total by the matching net lignite output in kg, retaining raw totals and attribution; the reference product row equals 1 kg. Do not divide mine-life burdens by annual output. | cp_output; cp_allocation | Exchange amount per 1 kg reference flow |  |
| electricity_conversion | mine_electricity; gate_electricity | Multiply metered kWh by 3.6 to obtain MJ before normalization | cp_mine_energy; cp_gate_energy | MJ per 1 kg reference flow |  |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| quality_product | lignite_gate | Traceable rank, moisture and quality sampling on the same output basis | cp_output |
| quality_balance | all inventory rows | Reconcile coal, water, fuel and waste balances; disclose losses, missing data, uncertainty and internal transfers. No generic industry range replaces site data. | cp_resource; cp_water; cp_materials; cp_waste |
| quality_coverage | site and mine life | Declare monitoring gaps, factor provenance, mine-life assumptions, reclamation coverage and all material omitted activities. Expand the atomic inventory for actual site exchanges. | cp_air; cp_land; cp_allocation |

## 9. Validation Rules

| rule_id | applies_to | Rule | source_ids |
| --- | --- | --- | --- |
| validate_reference | lignite_gate | Require 1 kg net as-received mine-gate lignite with all qualifiers and consistent moisture and calorific-value bases. |  |
| validate_amounts | inventory | Every present exchange must have one identity, unit, collection/model provenance and per-reference basis. Verify totals, meter splits and allocation fractions. Zero or not_applicable requires documented absence; missing data is not zero. |  |
| validate_environment | mine_operations | Check water balance, overburden destination, direct-emission compartments and land-time attribution. Add measured pollutant species separately; do not count waste transfers as direct environmental releases. | `ifc-mining-2007` |
| validate_models | dataset | Require compatible upstream geography, technology and temporal data; check captive power boundaries, mine-life restoration and absence of double counting. Escalate unresolved dataset allocation or unsupported emission factors for review. |  |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | secondary_dataset; background_dataset |
| downstream_use | Lignite supply input to process or lifecyclemodel projections of a foreground package |
| allowed_use | Mine-gate mass-based lignite supply with compatible product state and disclosed quality |
| excluded_use | Heat equivalence without measured calorific conversion; manufactured briquettes; combustion or delivered-fuel inventory without added stages |
| required_metadata | Mine; geography; period; route; grade; moisture; quality basis; gate; upstream links; allocation; mine life; exclusions; version |
| required_quality_disclosure | Measurement/model split; balance results; uncertainty; factor sources; missing identity or amount evidence; lifetime and restoration assumptions |
| update_trigger | Changed seam quality, equipment, energy supply, water management, gate state, allocation, mine plan or restoration obligations |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `unsd-cpc-2025` | official_guidance | United Nations Statistics Division, CPC Version 3.0 Structure, 30 June 2025; https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Structure_30Jun2025.csv; retrieved original 2026-09-10; verified 2026-10-01 | Product identity and adjacent category exclusions |
| `ifc-mining-2007` | official_guidance | World Bank Group / IFC, Environmental, Health, and Safety Guidelines for Mining, 10 December 2007; https://www.ifc.org/content/dam/ifc/doc/2000/2007-mining-ehs-guidelines-en.pdf; original acquired and verified 2026-10-01; pp. 2–5, 12–13 and 24 | Qualitative water, waste, dust, methane, energy and mine-closure management coverage; no numeric inventory range |
