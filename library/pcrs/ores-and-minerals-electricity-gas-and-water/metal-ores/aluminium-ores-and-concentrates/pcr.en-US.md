---
pcr_id: pcr.ores-and-minerals-electricity-gas-and-water.metal-ores.aluminium-ores-and-concentrates
language: en-US
status: candidate
sync_with: pcr.zh-CN.md
---

# Aluminium ores and concentrates

## 1. Scope and Applicability

This PCR covers aluminium-bearing ores and physically beneficiated concentrates at a declared mine or processing gate, with bauxite as the representative material. Include actual development, topsoil/overburden removal, extraction, handling, crushing, sizing and optional washing/dewatering through that gate. Distinguish integrated mining from standalone processing receiving burden-bearing ore. Not all bauxite is washed. Other aluminium minerals require their actual mineralogy, extraction and beneficiation evidence and distinct flow identities; they cannot inherit bauxite washing quantities. Exclude Bayer digestion/alumina refining, aluminium smelting, calcined refractory products, finished abrasives and downstream customer processing. `iai-bauxite-mining-2026`, `ifc-mining-2007`

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.ores-and-minerals-electricity-gas-and-water.metal-ores.aluminium-ores-and-concentrates |
| classification_refs | CPC 3.0:14230 |
| covered_products | Aluminium-bearing raw ores and physically upgraded ore/concentrate; one mineral, grade and moisture state per dataset |
| excluded_products | Alumina chemicals/refining; aluminium metal; calcined refractory bauxite; finished abrasives; customer conversion |
| representative_product | Washed bauxite representative product |
| production_route | Mine development and rehabilitation; Ore extraction and haulage; Crushing and sizing; Washing and dewatering; Stockpiling, loading and site controls |
| market_state | One actual ore grade and measured as-received moisture at the mine/processing loading gate |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Supply 1 kg of specified aluminium ore or physical concentrate; no equivalence to 1 kg aluminium or alumina |
| How much | 1 kg |
| How well | site/year; mineralogy; mining method; integrated/standalone start; raw/crushed/washed state; particle size; as-received moisture; dry-basis total and available alumina and reactive silica where relevant; gate; yield and rejects; water basin; waste fate; allocation; development and closure basis; representative UUID applies only to washed bauxite, with a distinct identity required for unwashed or other aluminium minerals |
| How long or cycle | One gate supply within a declared production period |
| reference_flow_link | `final_product` |

| Field | Value |
| --- | --- |
| Reference amount | 1 |
| Reference product flow | Washed Bauxite `bd0c6203-d2b3-4e7f-8602-027aa93e87df` |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | site/year; mineralogy; mining method; integrated/standalone start; raw/crushed/washed state; particle size; as-received moisture; dry-basis total and available alumina and reactive silica where relevant; gate; yield and rejects; water basin; waste fate; allocation; development and closure basis; representative UUID applies only to washed bauxite, with a distinct identity required for unwashed or other aluminium minerals |

Declare all qualifiers in dataset metadata or reference-flow comments. The representative identity is usable only for its confirmed product state, geography and property; resolve a distinct flow for incompatible variants. It does not impose a default product composition.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| reference_basis | final_product | Mass | kg | D is the positive accepted net gate-output total in kg. Exclude packaging and cancelled internal transfers. cp_output records D; every card uses per 1 kg reference flow. |
| conversion | utility and material rows | Declared row property | kg; m3; MJ | Retain raw readings. Electricity: 1 kWh = 3.6 MJ. Mass/volume conversion requires measured density, temperature and applicable pressure; retain water content and active chemical fraction. |
| category_balance | production | Mass | kg | D is positive accepted net as-received product mass in kg at the selected gate, excluding packaging and rejects. Record each stream moisture w and dry-solids mass m_dry = m_wet × (1 − w); assay grades on their stated basis. Contained-alumina mass is dry-solids mass times the matching dry-basis Al2O3 fraction, not the reference denominator. Reconcile dry ore, product, waste rock, wash fines, losses, stock changes and transferred water. Separate circulated wash water, new intake and measured return; no universal recovery, grade or density. |

## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Ore in the geological deposit for integrated mining, or purchased ore for standalone physical processing |
| starting_condition_role | Resource or supplied feed; declare which |
| product_classification_scope | Aluminium-bearing raw ores and physically upgraded ore/concentrate; one mineral, grade and moisture state per dataset |
| recursive_input_rule | Purchased same-category material carries a distinct supplier dataset; internal recycling is a balance observation, not a new external input or credit. |
| upstream_dataset_requirement | Link feed, electricity, fuels, chemicals, infrastructure and waste-management burdens; disclose any missing coverage. |
| disclosure | site/year; mineralogy; mining method; integrated/standalone start; raw/crushed/washed state; particle size; as-received moisture; dry-basis total and available alumina and reactive silica where relevant; gate; yield and rejects; water basin; waste fate; allocation; development and closure basis; representative UUID applies only to washed bauxite, with a distinct identity required for unwashed or other aluminium minerals |

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| boundary_operations | site | This PCR covers aluminium-bearing ores and physically beneficiated concentrates at a declared mine or processing gate, with bauxite as the representative material. Include actual development, topsoil/overburden removal, extraction, handling, crushing, sizing and optional washing/dewatering through that gate. Distinguish integrated mining from standalone processing receiving burden-bearing ore. Not all bauxite is washed. Other aluminium minerals require their actual mineralogy, extraction and beneficiation evidence and distinct flow identities; they cannot inherit bauxite washing quantities. Exclude Bayer digestion/alumina refining, aluminium smelting, calcined refractory products, finished abrasives and downstream customer processing. | `iai-bauxite-mining-2026`, `ifc-mining-2007` |
| boundary_partition | all exchanges | Include actual conditioning, storage, handling and pollution controls through the declared gate. Account for attributable construction and closure with a disclosed lifetime-output basis or justified exclusion and sensitivity. Separate purchased fuel supply from foreground combustion and purchased treatment from site releases. |  |
| boundary_completeness | inventory | Cards define individual likely exchanges and route conditions, not an exhaustive site audit. Add each actual absent chemical, waste, resource, land transformation and pollutant as its own row. Absence, measured zero and unknown must be distinguished. |  |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| development | Mine development and rehabilitation | conditional | Integrated mine and attributable closure | Foreground production | per 1 kg reference flow |
| extraction | Ore extraction and haulage | conditional | Integrated mining | Foreground production | per 1 kg reference flow |
| preparation | Crushing and sizing | conditional | Actual physical preparation or supplied ore | Foreground production | per 1 kg reference flow |
| washing | Washing and dewatering | conditional | Actual wet-beneficiation route only | Foreground production | per 1 kg reference flow |
| dispatch | Stockpiling, loading and site controls | required | All declared sites | Foreground production | per 1 kg reference flow |

### Process: Mine development and rehabilitation (`development`)

#### Inputs

##### Product flows

###### Mine-development diesel (`development_diesel`)

Actual stripping/rehabilitation equipment, allocated once by disclosed lifetime output.

- Selected flow: Diesel fuel `9d258d75-6792-4f1c-9856-81602ed8f816`
- Flow property / unit: Mass / kg
- Amount rule: Collect the attributable reporting-period quantity under cp_development_diesel; divide by D after stock, transfer and allocation reconciliation.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_development_diesel`
- Sources: `iai-bauxite-mining-2026`, `ifc-mining-2007`

#### Outputs

##### Waste flows

###### Overburden sent to mine management (`overburden`)

Actual removed overburden; topsoil storage and reuse remain a separate land/stock record.

- Selected flow: Overburden sent to mine management
- Flow property / unit: Mass / kg
- Amount rule: Collect the attributable reporting-period quantity under cp_overburden; divide by D after stock, transfer and allocation reconciliation.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_overburden`
- Sources: `iai-bauxite-mining-2026`, `ifc-mining-2007`

### Process: Ore extraction and haulage (`extraction`)

#### Inputs

##### Product flows

###### Extraction and haulage diesel (`mining_diesel`)

Actual equipment, haul distances and load cycles; exclude supplier fuel combustion.

- Selected flow: Diesel fuel `9d258d75-6792-4f1c-9856-81602ed8f816`
- Flow property / unit: Mass / kg
- Amount rule: Collect the attributable reporting-period quantity under cp_mining_diesel; divide by D after stock, transfer and allocation reconciliation.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_mining_diesel`
- Sources: `iai-bauxite-mining-2026`, `ifc-mining-2007`

###### Ammonium-nitrate/fuel-oil explosive (`anfo_explosive`)

Only actual ANFO blasting; record formulation and charge. Nonblasted extraction excludes this row; each other explosive needs its own card.

- Selected flow: Ammonium-nitrate/fuel-oil explosive
- Flow property / unit: Mass / kg
- Amount rule: Collect the attributable reporting-period quantity under cp_anfo_explosive; divide by D after stock, transfer and allocation reconciliation.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_anfo_explosive`
- Sources: `iai-bauxite-mining-2026`, `ifc-mining-2007`

##### Elementary flows

###### Bauxite ore extracted from the deposit (`bauxite_resource`)

Only primary bauxite extraction; measure ore mass, mineralogy and moisture, separately from overburden. Other aluminium minerals need their own resource identity.

- Selected flow: Bauxite ore extracted from the deposit
- Flow property / unit: Mass / kg
- Amount rule: Collect the attributable reporting-period quantity under cp_bauxite_resource; divide by D after stock, transfer and allocation reconciliation.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_bauxite_resource`
- Sources: `iai-bauxite-mining-2026`, `ifc-mining-2007`

#### Outputs

##### Waste flows

###### Mine waste rock (`waste_rock`)

Actual barren/rejected rock sent to defined management; measure dry solids and leaching potential.

- Selected flow: Mine waste rock
- Flow property / unit: Mass / kg
- Amount rule: Collect the attributable reporting-period quantity under cp_waste_rock; divide by D after stock, transfer and allocation reconciliation.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_waste_rock`
- Sources: `iai-bauxite-mining-2026`, `ifc-mining-2007`

### Process: Crushing and sizing (`preparation`)

#### Inputs

##### Product flows

###### Supplied bauxite ore (`purchased_ore`)

Only standalone bauxite processing; supplier carries extraction and agreed transport, without also counting direct mine resource.

- Selected flow: Supplied bauxite ore
- Flow property / unit: Mass / kg
- Amount rule: Collect the attributable reporting-period quantity under cp_purchased_ore; divide by D after stock, transfer and allocation reconciliation.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_purchased_ore`
- Sources: `iai-bauxite-mining-2026`, `ifc-mining-2007`

###### Crushing and sizing electricity (`crusher_power`)

This purchased electricity exchange requires independently confirmed actual supplier, consumption or production interface, geography, voltage, generation attributes and energy property/unit; its UUID remains unresolved until a compatible direct-read identity is confirmed. A waste-incineration generation flow must not represent arbitrary site power.

Actual crushers/screens/conveyors, excluding washing and dispatch meter duplication.

- Selected flow: Electricity
- Flow property / unit: Net calorific value / MJ
- Amount rule: Collect the attributable reporting-period quantity under cp_crusher_power; divide by D after stock, transfer and allocation reconciliation.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_crusher_power`
- Sources: `iai-bauxite-mining-2026`, `ifc-mining-2007`

#### Outputs

##### Waste flows

###### Rejected ore from sizing (`sizing_reject`)

Only rejected fraction leaving productive route; assay moisture and aluminium/silica content.

- Selected flow: Rejected ore from sizing
- Flow property / unit: Mass / kg
- Amount rule: Collect the attributable reporting-period quantity under cp_sizing_reject; divide by D after stock, transfer and allocation reconciliation.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_sizing_reject`
- Sources: `iai-bauxite-mining-2026`, `ifc-mining-2007`

### Process: Washing and dewatering (`washing`)

#### Inputs

##### Product flows

###### Supplied wash make-up water (`supplied_wash_water`)

Only purchased new make-up; internal circulating wash water is a balance observation.

- Selected flow: Process Water `94a04f7e-2d5c-41f0-b182-d54a3b373a02`
- Flow property / unit: Mass / kg
- Amount rule: Collect the attributable reporting-period quantity under cp_supplied_wash_water; divide by D after stock, transfer and allocation reconciliation.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_supplied_wash_water`
- Sources: `iai-bauxite-mining-2026`, `ifc-mining-2007`

###### Wash and dewatering electricity (`wash_power`)

This purchased electricity exchange requires independently confirmed actual supplier, consumption or production interface, geography, voltage, generation attributes and energy property/unit; its UUID remains unresolved until a compatible direct-read identity is confirmed. A waste-incineration generation flow must not represent arbitrary site power.

Actual scrubbers, pumps, screens and dewatering units only.

- Selected flow: Electricity
- Flow property / unit: Net calorific value / MJ
- Amount rule: Collect the attributable reporting-period quantity under cp_wash_power; divide by D after stock, transfer and allocation reconciliation.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_wash_power`
- Sources: `iai-bauxite-mining-2026`, `ifc-mining-2007`

##### Elementary flows

###### River-water withdrawal (`river_water`)

Only direct abstraction; measure basin and intake separately from purchased water.

- Selected flow: river water `805a7346-1664-4483-afe3-4b224be5e361`
- Flow property / unit: Volume / m3
- Amount rule: Collect the attributable reporting-period quantity under cp_river_water; divide by D after stock, transfer and allocation reconciliation.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_river_water`
- Sources: `iai-bauxite-mining-2026`, `ifc-mining-2007`

#### Outputs

##### Waste flows

###### Clay-rich bauxite wash fines (`clay_fines`)

Only actual wet tailings sent to management; measure water, dry solids and residual aluminium and prevent duplicate internal recycling.

- Selected flow: Clay-rich bauxite wash fines
- Flow property / unit: Mass / kg
- Amount rule: Collect the attributable reporting-period quantity under cp_clay_fines; divide by D after stock, transfer and allocation reconciliation.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_clay_fines`
- Sources: `iai-bauxite-mining-2026`, `ifc-mining-2007`

###### Wash-water purge transferred for treatment (`wash_effluent`)

Only actual treatment transfer; direct discharge needs separate species/compartment and return-volume observations.

- Selected flow: Wash-water purge transferred for treatment
- Flow property / unit: Mass / kg
- Amount rule: Collect the attributable reporting-period quantity under cp_wash_effluent; divide by D after stock, transfer and allocation reconciliation.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_wash_effluent`
- Sources: `iai-bauxite-mining-2026`, `ifc-mining-2007`

### Process: Stockpiling, loading and site controls (`dispatch`)

#### Inputs

##### Product flows

###### Loading diesel (`loading_diesel`)

Actual stockpile/loading equipment only, separate from mining haulage.

- Selected flow: Diesel fuel `9d258d75-6792-4f1c-9856-81602ed8f816`
- Flow property / unit: Mass / kg
- Amount rule: Collect the attributable reporting-period quantity under cp_loading_diesel; divide by D after stock, transfer and allocation reconciliation.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_loading_diesel`
- Sources: `iai-bauxite-mining-2026`, `ifc-mining-2007`

###### Site-control electricity (`site_power`)

This purchased electricity exchange requires independently confirmed actual supplier, consumption or production interface, geography, voltage, generation attributes and energy property/unit; its UUID remains unresolved until a compatible direct-read identity is confirmed. A waste-incineration generation flow must not represent arbitrary site power.

Actual drainage, dust-control and tailings auxiliaries; shared meters allocated once.

- Selected flow: Electricity
- Flow property / unit: Net calorific value / MJ
- Amount rule: Collect the attributable reporting-period quantity under cp_site_power; divide by D after stock, transfer and allocation reconciliation.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_site_power`
- Sources: `iai-bauxite-mining-2026`, `ifc-mining-2007`

#### Outputs

##### Product flows

###### Washed bauxite representative product (`final_product`)

The confirmed representative UUID applies only to washed bauxite at its compatible state; raw/unwashed ore and other aluminium minerals require distinct actual product identities at the same declared mass reference.

- Selected flow: Washed Bauxite `bd0c6203-d2b3-4e7f-8602-027aa93e87df`
- Flow property / unit: Mass / kg
- Amount rule: 1 kg
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_output`
- Sources: `iai-bauxite-mining-2026`, `ifc-mining-2007`

##### Elementary flows

###### Fossil carbon dioxide to outdoor air (`co2_air`)

Only foreground diesel and other actual fossil combustion; record fuel/carbon balance and factor provenance, no generic mine intensity.

- Selected flow: carbon dioxide (fossil) `08a91e70-3ddc-11dd-923d-0050c2490048`
- Flow property / unit: Mass / kg
- Amount rule: Collect the attributable reporting-period quantity under cp_co2_air; divide by D after stock, transfer and allocation reconciliation.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_co2_air`
- Sources: `iai-bauxite-mining-2026`, `ifc-mining-2007`

###### Mineral PM10 to outdoor air (`pm10_air`)

Only measured/reconciled extraction, crushing, handling or haul-road fugitive dust; other particle fractions have separate identities and quantities.

- Selected flow: Mineral PM10 to outdoor air
- Flow property / unit: Mass / kg
- Amount rule: Collect the attributable reporting-period quantity under cp_pm10_air; divide by D after stock, transfer and allocation reconciliation.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_pm10_air`
- Sources: `iai-bauxite-mining-2026`, `ifc-mining-2007`

## 7. Allocation and Co-product Handling

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| allocation_hierarchy | joint production | Prefer process subdivision or defensible system expansion; otherwise use demonstrated physical causality. Use economic allocation only with consistent period, price, currency and sensitivity when physical causality is unavailable. Retain the unallocated inventory. | `ef-allocation-2021` |
| allocation_product | reference and co-products | Subdivide extraction, crushing, washing and grade-sorting activities where measured. Assign development/closure using disclosed attributable lifetime saleable output; do not charge the full development once to each annual dataset. Retain unallocated inventory for genuine co-products; sorting grades are not automatically distinct co-products. Clay fines or waste rock are not burden-free products merely because sold or reused. |  |
| allocation_waste | waste and recycling | Classify each output by physical state and actual fate. A sale does not automatically make a residue a co-product; internal recycling receives no avoided-product credit. Apply treatment burdens once. |  |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cp_development_diesel | development | `development_diesel` | measurement_record | period; site; amount; original unit; uncertainty; stock changes; route condition; allocation; D; product qualifiers | Calibrated weighing, metering or traceable transfer records; reconcile period, opening/closing stock, actual grade and boundary. | kg | Each meter interval or shipment; monthly reconciliation | Complete year or justified representative production campaign | One actual ore grade and measured as-received moisture at the mine/processing loading gate | per 1 kg reference flow | Calibration; original records; assay; balance residuals; uncertainty |
| cp_overburden | development | `overburden` | measurement_record | period; site; amount; original unit; uncertainty; stock changes; route condition; allocation; D; product qualifiers | Collect matched survey/weighbridge or slurry-flow records, representative moisture and solids assays, mineral composition and management fate. Reconcile internal returns; record allocated lifetime basis for development rather than a full repeated annual charge. | kg | Each meter interval or shipment; monthly reconciliation | Complete year or justified representative production campaign | One actual ore grade and measured as-received moisture at the mine/processing loading gate | per 1 kg reference flow | Calibration; original records; assay; balance residuals; uncertainty |
| cp_bauxite_resource | extraction | `bauxite_resource` | measurement_record | period; site; amount; original unit; uncertainty; stock changes; route condition; allocation; D; product qualifiers | Calibrated weighing, metering or traceable transfer records; reconcile period, opening/closing stock, actual grade and boundary. | kg | Each meter interval or shipment; monthly reconciliation | Complete year or justified representative production campaign | One actual ore grade and measured as-received moisture at the mine/processing loading gate | per 1 kg reference flow | Calibration; original records; assay; balance residuals; uncertainty |
| cp_mining_diesel | extraction | `mining_diesel` | measurement_record | period; site; amount; original unit; uncertainty; stock changes; route condition; allocation; D; product qualifiers | Calibrated weighing, metering or traceable transfer records; reconcile period, opening/closing stock, actual grade and boundary. | kg | Each meter interval or shipment; monthly reconciliation | Complete year or justified representative production campaign | One actual ore grade and measured as-received moisture at the mine/processing loading gate | per 1 kg reference flow | Calibration; original records; assay; balance residuals; uncertainty |
| cp_anfo_explosive | extraction | `anfo_explosive` | measurement_record | period; site; amount; original unit; uncertainty; stock changes; route condition; allocation; D; product qualifiers | Calibrated weighing, metering or traceable transfer records; reconcile period, opening/closing stock, actual grade and boundary. | kg | Each meter interval or shipment; monthly reconciliation | Complete year or justified representative production campaign | One actual ore grade and measured as-received moisture at the mine/processing loading gate | per 1 kg reference flow | Calibration; original records; assay; balance residuals; uncertainty |
| cp_waste_rock | extraction | `waste_rock` | measurement_record | period; site; amount; original unit; uncertainty; stock changes; route condition; allocation; D; product qualifiers | Collect matched survey/weighbridge or slurry-flow records, representative moisture and solids assays, mineral composition and management fate. Reconcile internal returns; record allocated lifetime basis for development rather than a full repeated annual charge. | kg | Each meter interval or shipment; monthly reconciliation | Complete year or justified representative production campaign | One actual ore grade and measured as-received moisture at the mine/processing loading gate | per 1 kg reference flow | Calibration; original records; assay; balance residuals; uncertainty |
| cp_purchased_ore | preparation | `purchased_ore` | measurement_record | period; site; amount; original unit; uncertainty; stock changes; route condition; allocation; D; product qualifiers | Calibrated weighing, metering or traceable transfer records; reconcile period, opening/closing stock, actual grade and boundary. | kg | Each meter interval or shipment; monthly reconciliation | Complete year or justified representative production campaign | One actual ore grade and measured as-received moisture at the mine/processing loading gate | per 1 kg reference flow | Calibration; original records; assay; balance residuals; uncertainty |
| cp_crusher_power | preparation | `crusher_power` | measurement_record | period; site; amount; original unit; uncertainty; stock changes; route condition; allocation; D; product qualifiers | Calibrated weighing, metering or traceable transfer records; reconcile period, opening/closing stock, actual grade and boundary. | MJ | Each meter interval or shipment; monthly reconciliation | Complete year or justified representative production campaign | One actual ore grade and measured as-received moisture at the mine/processing loading gate | per 1 kg reference flow | Calibration; original records; assay; balance residuals; uncertainty |
| cp_sizing_reject | preparation | `sizing_reject` | measurement_record | period; site; amount; original unit; uncertainty; stock changes; route condition; allocation; D; product qualifiers | Collect matched survey/weighbridge or slurry-flow records, representative moisture and solids assays, mineral composition and management fate. Reconcile internal returns; record allocated lifetime basis for development rather than a full repeated annual charge. | kg | Each meter interval or shipment; monthly reconciliation | Complete year or justified representative production campaign | One actual ore grade and measured as-received moisture at the mine/processing loading gate | per 1 kg reference flow | Calibration; original records; assay; balance residuals; uncertainty |
| cp_supplied_wash_water | washing | `supplied_wash_water` | measurement_record | period; site; amount; original unit; uncertainty; stock changes; route condition; allocation; D; product qualifiers | Calibrated weighing, metering or traceable transfer records; reconcile period, opening/closing stock, actual grade and boundary. | kg | Each meter interval or shipment; monthly reconciliation | Complete year or justified representative production campaign | One actual ore grade and measured as-received moisture at the mine/processing loading gate | per 1 kg reference flow | Calibration; original records; assay; balance residuals; uncertainty |
| cp_river_water | washing | `river_water` | measurement_record | period; site; amount; original unit; uncertainty; stock changes; route condition; allocation; D; product qualifiers | Calibrated weighing, metering or traceable transfer records; reconcile period, opening/closing stock, actual grade and boundary. | m3 | Each meter interval or shipment; monthly reconciliation | Complete year or justified representative production campaign | One actual ore grade and measured as-received moisture at the mine/processing loading gate | per 1 kg reference flow | Calibration; original records; assay; balance residuals; uncertainty |
| cp_wash_power | washing | `wash_power` | measurement_record | period; site; amount; original unit; uncertainty; stock changes; route condition; allocation; D; product qualifiers | Calibrated weighing, metering or traceable transfer records; reconcile period, opening/closing stock, actual grade and boundary. | MJ | Each meter interval or shipment; monthly reconciliation | Complete year or justified representative production campaign | One actual ore grade and measured as-received moisture at the mine/processing loading gate | per 1 kg reference flow | Calibration; original records; assay; balance residuals; uncertainty |
| cp_clay_fines | washing | `clay_fines` | measurement_record | period; site; amount; original unit; uncertainty; stock changes; route condition; allocation; D; product qualifiers | Collect matched survey/weighbridge or slurry-flow records, representative moisture and solids assays, mineral composition and management fate. Reconcile internal returns; record allocated lifetime basis for development rather than a full repeated annual charge. | kg | Each meter interval or shipment; monthly reconciliation | Complete year or justified representative production campaign | One actual ore grade and measured as-received moisture at the mine/processing loading gate | per 1 kg reference flow | Calibration; original records; assay; balance residuals; uncertainty |
| cp_wash_effluent | washing | `wash_effluent` | measurement_record | period; site; amount; original unit; uncertainty; stock changes; route condition; allocation; D; product qualifiers | Calibrated weighing, metering or traceable transfer records; reconcile period, opening/closing stock, actual grade and boundary. | kg | Each meter interval or shipment; monthly reconciliation | Complete year or justified representative production campaign | One actual ore grade and measured as-received moisture at the mine/processing loading gate | per 1 kg reference flow | Calibration; original records; assay; balance residuals; uncertainty |
| cp_loading_diesel | dispatch | `loading_diesel` | measurement_record | period; site; amount; original unit; uncertainty; stock changes; route condition; allocation; D; product qualifiers | Calibrated weighing, metering or traceable transfer records; reconcile period, opening/closing stock, actual grade and boundary. | kg | Each meter interval or shipment; monthly reconciliation | Complete year or justified representative production campaign | One actual ore grade and measured as-received moisture at the mine/processing loading gate | per 1 kg reference flow | Calibration; original records; assay; balance residuals; uncertainty |
| cp_site_power | dispatch | `site_power` | measurement_record | period; site; amount; original unit; uncertainty; stock changes; route condition; allocation; D; product qualifiers | Calibrated weighing, metering or traceable transfer records; reconcile period, opening/closing stock, actual grade and boundary. | MJ | Each meter interval or shipment; monthly reconciliation | Complete year or justified representative production campaign | One actual ore grade and measured as-received moisture at the mine/processing loading gate | per 1 kg reference flow | Calibration; original records; assay; balance residuals; uncertainty |
| cp_co2_air | dispatch | `co2_air` | measurement_record | period; site; amount; original unit; uncertainty; stock changes; route condition; allocation; D; product qualifiers | Calibrated weighing, metering or traceable transfer records; reconcile period, opening/closing stock, actual grade and boundary. | kg | Each meter interval or shipment; monthly reconciliation | Complete year or justified representative production campaign | One actual ore grade and measured as-received moisture at the mine/processing loading gate | per 1 kg reference flow | Calibration; original records; assay; balance residuals; uncertainty |
| cp_pm10_air | dispatch | `pm10_air` | measurement_record | period; site; amount; original unit; uncertainty; stock changes; route condition; allocation; D; product qualifiers | Calibrated weighing, metering or traceable transfer records; reconcile period, opening/closing stock, actual grade and boundary. | kg | Each meter interval or shipment; monthly reconciliation | Complete year or justified representative production campaign | One actual ore grade and measured as-received moisture at the mine/processing loading gate | per 1 kg reference flow | Calibration; original records; assay; balance residuals; uncertainty |
| cp_output | dispatch | `final_product` | measurement_record | period; site; amount; original unit; uncertainty; stock changes; route condition; allocation; D; product qualifiers | Use calibrated net loading weights and inventory/transfer reconciliation to independently record positive accepted as-received kg D. Sample each representative lot for moisture, mineralogy, total/available alumina and reactive silica where relevant. Match the chosen raw/washed state and retain dry-basis assays separately from the wet-mass reference. | kg | Each meter interval or shipment; monthly reconciliation | Complete year or justified representative production campaign | One actual ore grade and measured as-received moisture at the mine/processing loading gate | per 1 kg reference flow | Calibration; original records; assay; balance residuals; uncertainty |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| normalization | all cards | Exchange = attributable period quantity / D. Reconcile inventories and cancel internal transfers before aggregation. | cp_output; row-specific cp records | per 1 kg reference flow |  |
| physical_balance | production | D is positive accepted net as-received product mass in kg at the selected gate, excluding packaging and rejects. Record each stream moisture w and dry-solids mass m_dry = m_wet × (1 − w); assay grades on their stated basis. Contained-alumina mass is dry-solids mass times the matching dry-basis Al2O3 fraction, not the reference denominator. Reconcile dry ore, product, waste rock, wash fines, losses, stock changes and transferred water. Separate circulated wash water, new intake and measured return; no universal recovery, grade or density. | Matched mass, volume, composition and stock measurements | Balance residual and uncertainty |  |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| representativeness | dataset | Use matching production and exchange periods, actual technology, geography and supplier state. Record startup, shutdown, seasonal variation and substitutions. | collection records |
| identity_and_ranges | all cards | Unresolved identities and missing independent range evidence remain explicit. Do not replace measurement by a guessed industry range or by missing-as-zero. | manifest review metadata |

## 9. Validation Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| validate_reference | final_product | Verify 1 kg, positive D, product state, property/unit and every required qualifier. Each dataset fixes one product and route. |  |
| validate_balance | site | D is positive accepted net as-received product mass in kg at the selected gate, excluding packaging and rejects. Record each stream moisture w and dry-solids mass m_dry = m_wet × (1 − w); assay grades on their stated basis. Contained-alumina mass is dry-solids mass times the matching dry-basis Al2O3 fraction, not the reference denominator. Reconcile dry ore, product, waste rock, wash fines, losses, stock changes and transferred water. Separate circulated wash water, new intake and measured return; no universal recovery, grade or density. |  |
| validate_coverage | handoff | Verify each applicable exchange, its provider or environmental compartment and final waste fate; identify skipped checks, unresolved identities, missing measurements and upstream gaps. Errors or unassessed mandatory coverage cannot be labelled complete. |  |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | foreground_dataset |
| downstream_use | secondary_dataset; background_dataset |
| allowed_use | Supply 1 kg of specified aluminium ore or physical concentrate; no equivalence to 1 kg aluminium or alumina |
| excluded_use | Alumina chemicals/refining; aluminium metal; calcined refractory bauxite; finished abrasives; customer conversion |
| required_metadata | site/year; mineralogy; mining method; integrated/standalone start; raw/crushed/washed state; particle size; as-received moisture; dry-basis total and available alumina and reactive silica where relevant; gate; yield and rejects; water basin; waste fate; allocation; development and closure basis; representative UUID applies only to washed bauxite, with a distinct identity required for unwashed or other aluminium minerals |
| required_quality_disclosure | Identity and measurement gaps; boundary coverage; uncertainty; allocation; temporal and geographical representativeness |
| update_trigger | Changed product, route, yield, supply, waste fate, site or representative period |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| iai-bauxite-mining-2026 | extension_guidance | International Aluminium Institute, The Aluminium Story, Mining: Process, web snapshot 1 October 2026, Mining: The process. https://alustory.international-aluminium.org/mining-refining/process-mining/ | Surface extraction, topsoil/overburden separation, optional crushing/washing and refinery handover; no universal grade or consumption. |
| ifc-mining-2007 | official_guidance | IFC, Environmental Health and Safety Guidelines for Mining, 10 December 2007, sections 1.1 and Annex A. https://www.ifc.org/content/dam/ifc/doc/2000/2007-mining-ehs-guidelines-en.pdf | Mining water, wastes, emissions, development and closure; no product-specific default factors. |
| cpc3-notes-2025 | official_guidance | UNSD, CPC Version 3.0 Explanatory Notes, 30 June 2025. https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Exp_Notes_30Jun2025.pdf | Classification scope only; no process quantities. |
| ef-allocation-2021 | official_guidance | Commission Recommendation (EU) 2021/2279, Annex I section 4.5, consolidated 30 December 2021. https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX:02021H2279-20211230 | Multifunctionality hierarchy; not a claim of complete PEF conformity. |
