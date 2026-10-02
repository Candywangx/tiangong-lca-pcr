---
pcr_id: pcr.ores-and-minerals-electricity-gas-and-water.crude-petroleum-and-natural-gas.natural-gas-liquefied-or-in-the-gaseous-state
language: en-US
status: candidate
sync_with: pcr.zh-CN.md
---

# Natural gas, liquefied or in the gaseous state

## 1. Scope and Applicability

This PCR covers extracted natural gas after declared separation and conditioning, supplied in one specified gaseous or liquefied state at a metered gate. Distinguish an integrated field/LNG route from a standalone processing or liquefaction site receiving burden-bearing raw gas. Include actual compression, acid-gas removal, dehydration, mercury removal, liquefaction and boil-off recovery only where operated. A separately declared regasification terminal includes vaporization and cold/heat exchanges through its gaseous delivery gate. Transmission or shipping is included only if inside the disclosed gate boundary. Offshore field production needs its own evidence; onshore guidance cannot establish offshore operations. `ifc-onshore-2007`, `ifc-lng-2017`

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.ores-and-minerals-electricity-gas-and-water.crude-petroleum-and-natural-gas.natural-gas-liquefied-or-in-the-gaseous-state |
| classification_refs | CPC 3.0:12020 |
| covered_products | Fossil natural gas at a fixed gas or LNG gate and state |
| excluded_products | Manufactured coal gas; petroleum gas mixtures as separate products; standalone hydrogen; customer combustion; undisclosed transmission |
| representative_product | Natural gas at the declared gate |
| production_route | Field recovery and separation; Gas conditioning and compression; Liquefaction and tank-vapor control; Regasification and delivery; Product metering and dispatch |
| market_state | Metered processed gas or LNG at one declared supply gate |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Supply composition-qualified natural gas as feedstock or fuel, without claiming useful-heat equivalence |
| How much | 1 kg |
| How well | field/site and year; starting state; gas or LNG phase; composition and water; pressure; temperature; density measurement; net calorific value and basis; gas recovery and own use; gate; transport scope; refrigerant composition; allocation; offshore scope; measured sulfur/mercury where relevant; gas-volume reference conditions and compressibility; terminal heating route; water intake and return |
| How long or cycle | One gate supply within a declared production period |
| reference_flow_link | `final_product` |

| Field | Value |
| --- | --- |
| Reference amount | 1 |
| Reference product flow | Natural gas at the declared gate |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | field/site and year; starting state; gas or LNG phase; composition and water; pressure; temperature; density measurement; net calorific value and basis; gas recovery and own use; gate; transport scope; refrigerant composition; allocation; offshore scope; measured sulfur/mercury where relevant; gas-volume reference conditions and compressibility; terminal heating route; water intake and return |

Declare all qualifiers in dataset metadata or reference-flow comments. The representative identity is usable only for its confirmed product state, geography and property; resolve a distinct flow for incompatible variants. It does not impose a default product composition.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| reference_basis | final_product | Mass | kg | D is the positive accepted net gate-output total in kg. Exclude packaging and cancelled internal transfers. cp_output records D; every card uses per 1 kg reference flow. |
| conversion | utility and material rows | Declared row property | kg; m3; MJ | Retain raw readings. Electricity: 1 kWh = 3.6 MJ. Mass/volume conversion requires measured density, temperature and applicable pressure; retain water content and active chemical fraction. |
| category_balance | production | Mass | kg | Reconcile resource/purchased feed, gas product, condensate, separated CO2, water, own-use combustion, flare, vents, stock change and measured shrinkage. Convert gas-volume meters to mass using matching measured composition, temperature, absolute pressure and compressibility; use measured LNG mass or density at loading conditions. Do not equate gas and LNG volumes. Recycled boil-off and fuel gas are internal observations, not additional product credits. |

## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Reservoir gas for integrated production, or purchased raw/processed natural gas for a standalone site |
| starting_condition_role | Resource or supplied feed; declare which |
| product_classification_scope | Fossil natural gas at a fixed gas or LNG gate and state |
| recursive_input_rule | Purchased same-category material carries a distinct supplier dataset; internal recycling is a balance observation, not a new external input or credit. |
| upstream_dataset_requirement | Link feed, electricity, fuels, chemicals, infrastructure and waste-management burdens; disclose any missing coverage. |
| disclosure | field/site and year; starting state; gas or LNG phase; composition and water; pressure; temperature; density measurement; net calorific value and basis; gas recovery and own use; gate; transport scope; refrigerant composition; allocation; offshore scope; measured sulfur/mercury where relevant; gas-volume reference conditions and compressibility; terminal heating route; water intake and return |

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| boundary_operations | site | This PCR covers extracted natural gas after declared separation and conditioning, supplied in one specified gaseous or liquefied state at a metered gate. Distinguish an integrated field/LNG route from a standalone processing or liquefaction site receiving burden-bearing raw gas. Include actual compression, acid-gas removal, dehydration, mercury removal, liquefaction and boil-off recovery only where operated. A separately declared regasification terminal includes vaporization and cold/heat exchanges through its gaseous delivery gate. Transmission or shipping is included only if inside the disclosed gate boundary. Offshore field production needs its own evidence; onshore guidance cannot establish offshore operations. | `ifc-onshore-2007`, `ifc-lng-2017` |
| boundary_partition | all exchanges | Include actual conditioning, storage, handling and pollution controls through the declared gate. Account for attributable construction and closure with a disclosed lifetime-output basis or justified exclusion and sensitivity. Separate purchased fuel supply from foreground combustion and purchased treatment from site releases. |  |
| boundary_completeness | inventory | Cards define individual likely exchanges and route conditions, not an exhaustive site audit. Add each actual absent chemical, waste, resource, land transformation and pollutant as its own row. Absence, measured zero and unknown must be distinguished. |  |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| recovery | Field recovery and separation | conditional | Integrated primary field production | Foreground production | per 1 kg reference flow |
| conditioning | Gas conditioning and compression | conditional | Actual on-site conditioning/compression; standalone regasification excludes upstream processing | Foreground production | per 1 kg reference flow |
| liquefaction | Liquefaction and tank-vapor control | conditional | LNG route | Foreground production | per 1 kg reference flow |
| terminal | Regasification and delivery | conditional | Declared regasification terminal | Foreground production | per 1 kg reference flow |
| dispatch | Product metering and dispatch | required | All declared sites | Foreground production | per 1 kg reference flow |

### Process: Field recovery and separation (`recovery`)

#### Inputs

##### Product flows

###### Field diesel (`field_diesel`)

Only diesel-driven drilling, pumps or site equipment; attributable development includes lifetime output basis.

- Selected flow: Diesel fuel `9d258d75-6792-4f1c-9856-81602ed8f816`
- Flow property / unit: Mass / kg
- Amount rule: Collect the attributable reporting-period quantity under cp_field_diesel; divide by D after stock, transfer and allocation reconciliation.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_field_diesel`
- Sources: `ifc-onshore-2007`, `ifc-lng-2017`

##### Elementary flows

###### Natural gas withdrawn from reservoir (`gas_resource`)

Integrated recovery only; measure extracted dry/wet gas before removal losses and retain composition.

- Selected flow: Natural gas withdrawn from reservoir
- Flow property / unit: Mass / kg
- Amount rule: Collect the attributable reporting-period quantity under cp_gas_resource; divide by D after stock, transfer and allocation reconciliation.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_gas_resource`
- Sources: `ifc-onshore-2007`, `ifc-lng-2017`

#### Outputs

##### Waste flows

###### Saline produced water transferred for treatment (`produced_water`)

Only treatment transfers; reinjection and final receiving-water discharges require separate site balances and species.

- Selected flow: Saline produced water transferred for treatment
- Flow property / unit: Mass / kg
- Amount rule: Collect the attributable reporting-period quantity under cp_produced_water; divide by D after stock, transfer and allocation reconciliation.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_produced_water`
- Sources: `ifc-onshore-2007`, `ifc-lng-2017`

### Process: Gas conditioning and compression (`conditioning`)

#### Inputs

##### Product flows

###### Supplied raw natural gas (`raw_gas_feed`)

Standalone processing only; supplier dataset includes extraction and specified transport. Cancel integrated internal feed.

- Selected flow: Supplied raw natural gas
- Flow property / unit: Mass / kg
- Amount rule: Collect the attributable reporting-period quantity under cp_raw_gas_feed; divide by D after stock, transfer and allocation reconciliation.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_raw_gas_feed`
- Sources: `ifc-onshore-2007`, `ifc-lng-2017`

###### Processing electricity (`site_power`)

This purchased electricity exchange requires independently confirmed actual supplier, consumption or production interface, geography, voltage, generation attributes and energy property/unit; its UUID remains unresolved until a compatible direct-read identity is confirmed. A waste-incineration generation flow must not represent arbitrary site power.

Purchased utility for processing/compression; allocate shared meters once.

- Selected flow: Electricity
- Flow property / unit: Net calorific value / MJ
- Amount rule: Collect the attributable reporting-period quantity under cp_site_power; divide by D after stock, transfer and allocation reconciliation.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_site_power`
- Sources: `ifc-onshore-2007`, `ifc-lng-2017`

###### Monoethanolamine solvent make-up (`mea_makeup`)

Only an actual MEA acid-gas removal unit; other solvents require their own cards and purity records.

- Selected flow: Monoethanolamine solvent make-up
- Flow property / unit: Mass / kg
- Amount rule: Collect the attributable reporting-period quantity under cp_mea_makeup; divide by D after stock, transfer and allocation reconciliation.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_mea_makeup`
- Sources: `ifc-onshore-2007`, `ifc-lng-2017`

###### Triethylene-glycol make-up (`teg_makeup`)

Only TEG dehydration; circulating solvent is not repeated fresh supply.

- Selected flow: Triethylene-glycol make-up
- Flow property / unit: Mass / kg
- Amount rule: Collect the attributable reporting-period quantity under cp_teg_makeup; divide by D after stock, transfer and allocation reconciliation.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_teg_makeup`
- Sources: `ifc-onshore-2007`, `ifc-lng-2017`

###### Imported process steam (`imported_steam`)

Only purchased steam for actual solvent regeneration; record delivered enthalpy and condensate-return condition. On-site generation needs its fuel and combustion inventory.

- Selected flow: Imported process steam
- Flow property / unit: Energy / MJ
- Amount rule: Collect the attributable reporting-period quantity under cp_imported_steam; divide by D after stock, transfer and allocation reconciliation.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_imported_steam`
- Sources: `ifc-onshore-2007`, `ifc-lng-2017`

#### Outputs

##### Product flows

###### Stabilized natural-gas condensate (`condensate`)

Only an exported saleable co-product; measure its own mass and allocation.

- Selected flow: Stabilized natural-gas condensate
- Flow property / unit: Mass / kg
- Amount rule: Collect the attributable reporting-period quantity under cp_condensate; divide by D after stock, transfer and allocation reconciliation.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_condensate`
- Sources: `ifc-onshore-2007`, `ifc-lng-2017`

##### Waste flows

###### Spent mercury-removal sorbent (`spent_mercury_sorbent`)

Only an actual mercury-removal system; record mercury content and management fate.

- Selected flow: Spent mercury-removal sorbent
- Flow property / unit: Mass / kg
- Amount rule: Collect the attributable reporting-period quantity under cp_spent_mercury_sorbent; divide by D after stock, transfer and allocation reconciliation.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_spent_mercury_sorbent`
- Sources: `ifc-onshore-2007`, `ifc-lng-2017`

##### Elementary flows

###### Fossil methane to outdoor air (`methane_air`)

Include direct leaks and vented methane after recovery; flare conversion is separately measured, not assumed complete.

- Selected flow: methane (fossil) `08a91e70-3ddc-11dd-9610-0050c2490048`
- Flow property / unit: Mass / kg
- Amount rule: Collect the attributable reporting-period quantity under cp_methane_air; divide by D after stock, transfer and allocation reconciliation.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_methane_air`
- Sources: `ifc-onshore-2007`, `ifc-lng-2017`

###### Fossil carbon dioxide to outdoor air (`co2_air`)

Separate removed reservoir CO2 from on-site combustion and flare CO2 in collection records; exclude captured/exported CO2.

- Selected flow: carbon dioxide (fossil) `08a91e70-3ddc-11dd-923d-0050c2490048`
- Flow property / unit: Mass / kg
- Amount rule: Collect the attributable reporting-period quantity under cp_co2_air; divide by D after stock, transfer and allocation reconciliation.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_co2_air`
- Sources: `ifc-onshore-2007`, `ifc-lng-2017`

### Process: Liquefaction and tank-vapor control (`liquefaction`)

#### Inputs

##### Product flows

###### Liquefaction electricity (`lng_power`)

This purchased electricity exchange requires independently confirmed actual supplier, consumption or production interface, geography, voltage, generation attributes and energy property/unit; its UUID remains unresolved until a compatible direct-read identity is confirmed. A waste-incineration generation flow must not represent arbitrary site power.

Only electrically driven refrigeration; exclude processing-power duplication and internal recovered power.

- Selected flow: Electricity
- Flow property / unit: Net calorific value / MJ
- Amount rule: Collect the attributable reporting-period quantity under cp_lng_power; divide by D after stock, transfer and allocation reconciliation.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_lng_power`
- Sources: `ifc-onshore-2007`, `ifc-lng-2017`

###### Refrigerant propane make-up (`propane_makeup`)

Only actual propane-loop make-up; each other mixed-refrigerant component requires a distinct card.

- Selected flow: Refrigerant propane make-up
- Flow property / unit: Mass / kg
- Amount rule: Collect the attributable reporting-period quantity under cp_propane_makeup; divide by D after stock, transfer and allocation reconciliation.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_propane_makeup`
- Sources: `ifc-onshore-2007`, `ifc-lng-2017`

###### Supplied cooling make-up water (`cooling_water`)

Only purchased fresh make-up; circulating water is an internal balance. Direct withdrawal requires its own resource card and basin.

- Selected flow: Process Water `94a04f7e-2d5c-41f0-b182-d54a3b373a02`
- Flow property / unit: Mass / kg
- Amount rule: Collect the attributable reporting-period quantity under cp_cooling_water; divide by D after stock, transfer and allocation reconciliation.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_cooling_water`
- Sources: `ifc-onshore-2007`, `ifc-lng-2017`

#### Outputs

##### Elementary flows

###### Propane to outdoor air (`propane_air`)

Only direct unrecovered propane leakage; do not represent the entire mixture by methane.

- Selected flow: Propane to outdoor air
- Flow property / unit: Mass / kg
- Amount rule: Collect the attributable reporting-period quantity under cp_propane_air; divide by D after stock, transfer and allocation reconciliation.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_propane_air`
- Sources: `ifc-onshore-2007`, `ifc-lng-2017`

### Process: Regasification and delivery (`terminal`)

#### Inputs

##### Product flows

###### Regasification electricity (`regas_power`)

This purchased electricity exchange requires independently confirmed actual supplier, consumption or production interface, geography, voltage, generation attributes and energy property/unit; its UUID remains unresolved until a compatible direct-read identity is confirmed. A waste-incineration generation flow must not represent arbitrary site power.

Declared terminal pumps and vaporizer auxiliaries only.

- Selected flow: Electricity
- Flow property / unit: Net calorific value / MJ
- Amount rule: Collect the attributable reporting-period quantity under cp_regas_power; divide by D after stock, transfer and allocation reconciliation.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_regas_power`
- Sources: `ifc-onshore-2007`, `ifc-lng-2017`

###### Imported regasification heat (`imported_heat`)

Only purchased heat; direct-fired vaporizer fuel and combustion require separate actual rows instead.

- Selected flow: Imported regasification heat
- Flow property / unit: Energy / MJ
- Amount rule: Collect the attributable reporting-period quantity under cp_imported_heat; divide by D after stock, transfer and allocation reconciliation.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_imported_heat`
- Sources: `ifc-onshore-2007`, `ifc-lng-2017`

###### Supplied LNG for regasification (`terminal_lng_feed`)

Only a standalone receiving terminal; supplier inventory covers upstream production, liquefaction and disclosed shipping. Cancel this internal transfer for an integrated chain.

- Selected flow: Supplied LNG for regasification
- Flow property / unit: Mass / kg
- Amount rule: Collect the attributable reporting-period quantity under cp_terminal_lng_feed; divide by D after stock, transfer and allocation reconciliation.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_terminal_lng_feed`
- Sources: `ifc-onshore-2007`, `ifc-lng-2017`

##### Elementary flows

###### Seawater withdrawal for open-rack vaporization (`vaporizer_seawater`)

Only an actual seawater-heated vaporizer; measure intake and returned water, temperatures and any biocide separately.

- Selected flow: Seawater withdrawal for open-rack vaporization
- Flow property / unit: Volume / m3
- Amount rule: Collect the attributable reporting-period quantity under cp_vaporizer_seawater; divide by D after stock, transfer and allocation reconciliation.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_vaporizer_seawater`
- Sources: `ifc-onshore-2007`, `ifc-lng-2017`

#### Outputs

##### Elementary flows

###### Seawater returned to the same marine receiving water (`returned_seawater`)

Only returned cooling water; intake minus measured return is not automatically all water consumption. Record changed temperature and each discharged pollutant as separate exchanges.

- Selected flow: Seawater returned to the same marine receiving water
- Flow property / unit: Volume / m3
- Amount rule: Collect the attributable reporting-period quantity under cp_returned_seawater; divide by D after stock, transfer and allocation reconciliation.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_returned_seawater`
- Sources: `ifc-onshore-2007`, `ifc-lng-2017`

### Process: Product metering and dispatch (`dispatch`)

#### Outputs

##### Product flows

###### Natural gas at the declared gate (`final_product`)

Fix one phase and actual product composition; net mass excludes separated liquids and internally burned or flared gas.

- Selected flow: Natural gas at the declared gate
- Flow property / unit: Mass / kg
- Amount rule: 1 kg
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_output`
- Sources: `ifc-onshore-2007`, `ifc-lng-2017`

## 7. Allocation and Co-product Handling

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| allocation_hierarchy | joint production | Prefer process subdivision or defensible system expansion; otherwise use demonstrated physical causality. Use economic allocation only with consistent period, price, currency and sensitivity when physical causality is unavailable. Retain the unallocated inventory. | `ef-allocation-2021` |
| allocation_product | reference and co-products | Separate extraction, processing, liquefaction and terminal meters before assigning joint oil/gas/NGL burdens. Condensate is a distinct actual co-product with measured mass and composition. Own-use gas and recovered boil-off reduce net available supply but receive no avoided-fuel credit. |  |
| allocation_waste | waste and recycling | Classify each output by physical state and actual fate. A sale does not automatically make a residue a co-product; internal recycling receives no avoided-product credit. Apply treatment burdens once. |  |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cp_gas_resource | recovery | `gas_resource` | measurement_record | period; site; amount; original unit; uncertainty; stock changes; route condition; allocation; D; product qualifiers | Measure the net matched-period gas mass by calibrated mass meter or composition-qualified gas volume with measured temperature, absolute pressure and compressibility. LNG uses loading mass or measured density at loading temperature. Reconcile stocks, separated liquids and internal transfers; retain conversion equations and uncertainty. cp_output independently records positive accepted gate mass D. | kg | Each meter interval or shipment; monthly reconciliation | Complete year or justified representative production campaign | Metered processed gas or LNG at one declared supply gate | per 1 kg reference flow | Calibration; original records; assay; balance residuals; uncertainty |
| cp_field_diesel | recovery | `field_diesel` | measurement_record | period; site; amount; original unit; uncertainty; stock changes; route condition; allocation; D; product qualifiers | Calibrated weighing, metering or traceable transfer records; reconcile period, opening/closing stock, actual grade and boundary. | kg | Each meter interval or shipment; monthly reconciliation | Complete year or justified representative production campaign | Metered processed gas or LNG at one declared supply gate | per 1 kg reference flow | Calibration; original records; assay; balance residuals; uncertainty |
| cp_produced_water | recovery | `produced_water` | measurement_record | period; site; amount; original unit; uncertainty; stock changes; route condition; allocation; D; product qualifiers | Calibrated weighing, metering or traceable transfer records; reconcile period, opening/closing stock, actual grade and boundary. | kg | Each meter interval or shipment; monthly reconciliation | Complete year or justified representative production campaign | Metered processed gas or LNG at one declared supply gate | per 1 kg reference flow | Calibration; original records; assay; balance residuals; uncertainty |
| cp_raw_gas_feed | conditioning | `raw_gas_feed` | measurement_record | period; site; amount; original unit; uncertainty; stock changes; route condition; allocation; D; product qualifiers | Measure the net matched-period gas mass by calibrated mass meter or composition-qualified gas volume with measured temperature, absolute pressure and compressibility. LNG uses loading mass or measured density at loading temperature. Reconcile stocks, separated liquids and internal transfers; retain conversion equations and uncertainty. cp_output independently records positive accepted gate mass D. | kg | Each meter interval or shipment; monthly reconciliation | Complete year or justified representative production campaign | Metered processed gas or LNG at one declared supply gate | per 1 kg reference flow | Calibration; original records; assay; balance residuals; uncertainty |
| cp_site_power | conditioning | `site_power` | measurement_record | period; site; amount; original unit; uncertainty; stock changes; route condition; allocation; D; product qualifiers | Calibrated weighing, metering or traceable transfer records; reconcile period, opening/closing stock, actual grade and boundary. | MJ | Each meter interval or shipment; monthly reconciliation | Complete year or justified representative production campaign | Metered processed gas or LNG at one declared supply gate | per 1 kg reference flow | Calibration; original records; assay; balance residuals; uncertainty |
| cp_mea_makeup | conditioning | `mea_makeup` | measurement_record | period; site; amount; original unit; uncertainty; stock changes; route condition; allocation; D; product qualifiers | Calibrated weighing, metering or traceable transfer records; reconcile period, opening/closing stock, actual grade and boundary. | kg | Each meter interval or shipment; monthly reconciliation | Complete year or justified representative production campaign | Metered processed gas or LNG at one declared supply gate | per 1 kg reference flow | Calibration; original records; assay; balance residuals; uncertainty |
| cp_teg_makeup | conditioning | `teg_makeup` | measurement_record | period; site; amount; original unit; uncertainty; stock changes; route condition; allocation; D; product qualifiers | Calibrated weighing, metering or traceable transfer records; reconcile period, opening/closing stock, actual grade and boundary. | kg | Each meter interval or shipment; monthly reconciliation | Complete year or justified representative production campaign | Metered processed gas or LNG at one declared supply gate | per 1 kg reference flow | Calibration; original records; assay; balance residuals; uncertainty |
| cp_condensate | conditioning | `condensate` | measurement_record | period; site; amount; original unit; uncertainty; stock changes; route condition; allocation; D; product qualifiers | Calibrated weighing, metering or traceable transfer records; reconcile period, opening/closing stock, actual grade and boundary. | kg | Each meter interval or shipment; monthly reconciliation | Complete year or justified representative production campaign | Metered processed gas or LNG at one declared supply gate | per 1 kg reference flow | Calibration; original records; assay; balance residuals; uncertainty |
| cp_spent_mercury_sorbent | conditioning | `spent_mercury_sorbent` | measurement_record | period; site; amount; original unit; uncertainty; stock changes; route condition; allocation; D; product qualifiers | Calibrated weighing, metering or traceable transfer records; reconcile period, opening/closing stock, actual grade and boundary. | kg | Each meter interval or shipment; monthly reconciliation | Complete year or justified representative production campaign | Metered processed gas or LNG at one declared supply gate | per 1 kg reference flow | Calibration; original records; assay; balance residuals; uncertainty |
| cp_methane_air | conditioning | `methane_air` | measurement_record | period; site; amount; original unit; uncertainty; stock changes; route condition; allocation; D; product qualifiers | Integrate calibrated gas flow and measured species concentration over operating duration, with temperature/pressure and compartment. If modelling is necessary, retain source-specific measured activity, carbon/species balance, factor provenance and uncertainty. No generic factor assumed. | kg | Each meter interval or shipment; monthly reconciliation | Complete year or justified representative production campaign | Metered processed gas or LNG at one declared supply gate | per 1 kg reference flow | Calibration; original records; assay; balance residuals; uncertainty |
| cp_co2_air | conditioning | `co2_air` | measurement_record | period; site; amount; original unit; uncertainty; stock changes; route condition; allocation; D; product qualifiers | Integrate calibrated gas flow and measured species concentration over operating duration, with temperature/pressure and compartment. If modelling is necessary, retain source-specific measured activity, carbon/species balance, factor provenance and uncertainty. No generic factor assumed. | kg | Each meter interval or shipment; monthly reconciliation | Complete year or justified representative production campaign | Metered processed gas or LNG at one declared supply gate | per 1 kg reference flow | Calibration; original records; assay; balance residuals; uncertainty |
| cp_lng_power | liquefaction | `lng_power` | measurement_record | period; site; amount; original unit; uncertainty; stock changes; route condition; allocation; D; product qualifiers | Calibrated weighing, metering or traceable transfer records; reconcile period, opening/closing stock, actual grade and boundary. | MJ | Each meter interval or shipment; monthly reconciliation | Complete year or justified representative production campaign | Metered processed gas or LNG at one declared supply gate | per 1 kg reference flow | Calibration; original records; assay; balance residuals; uncertainty |
| cp_propane_makeup | liquefaction | `propane_makeup` | measurement_record | period; site; amount; original unit; uncertainty; stock changes; route condition; allocation; D; product qualifiers | Calibrated weighing, metering or traceable transfer records; reconcile period, opening/closing stock, actual grade and boundary. | kg | Each meter interval or shipment; monthly reconciliation | Complete year or justified representative production campaign | Metered processed gas or LNG at one declared supply gate | per 1 kg reference flow | Calibration; original records; assay; balance residuals; uncertainty |
| cp_propane_air | liquefaction | `propane_air` | measurement_record | period; site; amount; original unit; uncertainty; stock changes; route condition; allocation; D; product qualifiers | Integrate calibrated gas flow and measured species concentration over operating duration, with temperature/pressure and compartment. If modelling is necessary, retain source-specific measured activity, carbon/species balance, factor provenance and uncertainty. No generic factor assumed. | kg | Each meter interval or shipment; monthly reconciliation | Complete year or justified representative production campaign | Metered processed gas or LNG at one declared supply gate | per 1 kg reference flow | Calibration; original records; assay; balance residuals; uncertainty |
| cp_regas_power | terminal | `regas_power` | measurement_record | period; site; amount; original unit; uncertainty; stock changes; route condition; allocation; D; product qualifiers | Calibrated weighing, metering or traceable transfer records; reconcile period, opening/closing stock, actual grade and boundary. | MJ | Each meter interval or shipment; monthly reconciliation | Complete year or justified representative production campaign | Metered processed gas or LNG at one declared supply gate | per 1 kg reference flow | Calibration; original records; assay; balance residuals; uncertainty |
| cp_imported_heat | terminal | `imported_heat` | measurement_record | period; site; amount; original unit; uncertainty; stock changes; route condition; allocation; D; product qualifiers | Calibrated weighing, metering or traceable transfer records; reconcile period, opening/closing stock, actual grade and boundary. | MJ | Each meter interval or shipment; monthly reconciliation | Complete year or justified representative production campaign | Metered processed gas or LNG at one declared supply gate | per 1 kg reference flow | Calibration; original records; assay; balance residuals; uncertainty |
| cp_output | dispatch | `final_product` | measurement_record | period; site; amount; original unit; uncertainty; stock changes; route condition; allocation; D; product qualifiers | Measure the net matched-period gas mass by calibrated mass meter or composition-qualified gas volume with measured temperature, absolute pressure and compressibility. LNG uses loading mass or measured density at loading temperature. Reconcile stocks, separated liquids and internal transfers; retain conversion equations and uncertainty. cp_output independently records positive accepted gate mass D. | kg | Each meter interval or shipment; monthly reconciliation | Complete year or justified representative production campaign | Metered processed gas or LNG at one declared supply gate | per 1 kg reference flow | Calibration; original records; assay; balance residuals; uncertainty |
| cp_terminal_lng_feed | terminal | `terminal_lng_feed` | measurement_record | period; site; amount; original unit; uncertainty; stock changes; route condition; allocation; D; product qualifiers | Measure the net matched-period gas mass by calibrated mass meter or composition-qualified gas volume with measured temperature, absolute pressure and compressibility. LNG uses loading mass or measured density at loading temperature. Reconcile stocks, separated liquids and internal transfers; retain conversion equations and uncertainty. cp_output independently records positive accepted gate mass D. | kg | Each meter interval or shipment; monthly reconciliation | Complete year or justified representative production campaign | Metered processed gas or LNG at one declared supply gate | per 1 kg reference flow | Calibration; original records; assay; balance residuals; uncertainty |
| cp_cooling_water | liquefaction | `cooling_water` | measurement_record | period; site; amount; original unit; uncertainty; stock changes; route condition; allocation; D; product qualifiers | Calibrated weighing, metering or traceable transfer records; reconcile period, opening/closing stock, actual grade and boundary. | kg | Each meter interval or shipment; monthly reconciliation | Complete year or justified representative production campaign | Metered processed gas or LNG at one declared supply gate | per 1 kg reference flow | Calibration; original records; assay; balance residuals; uncertainty |
| cp_imported_steam | conditioning | `imported_steam` | measurement_record | period; site; amount; original unit; uncertainty; stock changes; route condition; allocation; D; product qualifiers | Calibrated weighing, metering or traceable transfer records; reconcile period, opening/closing stock, actual grade and boundary. | MJ | Each meter interval or shipment; monthly reconciliation | Complete year or justified representative production campaign | Metered processed gas or LNG at one declared supply gate | per 1 kg reference flow | Calibration; original records; assay; balance residuals; uncertainty |
| cp_vaporizer_seawater | terminal | `vaporizer_seawater` | measurement_record | period; site; amount; original unit; uncertainty; stock changes; route condition; allocation; D; product qualifiers | Calibrated weighing, metering or traceable transfer records; reconcile period, opening/closing stock, actual grade and boundary. | m3 | Each meter interval or shipment; monthly reconciliation | Complete year or justified representative production campaign | Metered processed gas or LNG at one declared supply gate | per 1 kg reference flow | Calibration; original records; assay; balance residuals; uncertainty |
| cp_returned_seawater | terminal | `returned_seawater` | measurement_record | period; site; amount; original unit; uncertainty; stock changes; route condition; allocation; D; product qualifiers | Calibrated weighing, metering or traceable transfer records; reconcile period, opening/closing stock, actual grade and boundary. | m3 | Each meter interval or shipment; monthly reconciliation | Complete year or justified representative production campaign | Metered processed gas or LNG at one declared supply gate | per 1 kg reference flow | Calibration; original records; assay; balance residuals; uncertainty |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| normalization | all cards | Exchange = attributable period quantity / D. Reconcile inventories and cancel internal transfers before aggregation. | cp_output; row-specific cp records | per 1 kg reference flow |  |
| physical_balance | production | Reconcile resource/purchased feed, gas product, condensate, separated CO2, water, own-use combustion, flare, vents, stock change and measured shrinkage. Convert gas-volume meters to mass using matching measured composition, temperature, absolute pressure and compressibility; use measured LNG mass or density at loading conditions. Do not equate gas and LNG volumes. Recycled boil-off and fuel gas are internal observations, not additional product credits. | Matched mass, volume, composition and stock measurements | Balance residual and uncertainty |  |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| representativeness | dataset | Use matching production and exchange periods, actual technology, geography and supplier state. Record startup, shutdown, seasonal variation and substitutions. | collection records |
| identity_and_ranges | all cards | Unresolved identities and missing independent range evidence remain explicit. Do not replace measurement by a guessed industry range or by missing-as-zero. | manifest review metadata |

## 9. Validation Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| validate_reference | final_product | Verify 1 kg, positive D, product state, property/unit and every required qualifier. Each dataset fixes one product and route. |  |
| validate_balance | site | Reconcile resource/purchased feed, gas product, condensate, separated CO2, water, own-use combustion, flare, vents, stock change and measured shrinkage. Convert gas-volume meters to mass using matching measured composition, temperature, absolute pressure and compressibility; use measured LNG mass or density at loading conditions. Do not equate gas and LNG volumes. Recycled boil-off and fuel gas are internal observations, not additional product credits. |  |
| validate_coverage | handoff | Verify each applicable exchange, its provider or environmental compartment and final waste fate; identify skipped checks, unresolved identities, missing measurements and upstream gaps. Errors or unassessed mandatory coverage cannot be labelled complete. |  |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | foreground_dataset |
| downstream_use | secondary_dataset; background_dataset |
| allowed_use | Supply composition-qualified natural gas as feedstock or fuel, without claiming useful-heat equivalence |
| excluded_use | Manufactured coal gas; petroleum gas mixtures as separate products; standalone hydrogen; customer combustion; undisclosed transmission |
| required_metadata | field/site and year; starting state; gas or LNG phase; composition and water; pressure; temperature; density measurement; net calorific value and basis; gas recovery and own use; gate; transport scope; refrigerant composition; allocation; offshore scope; measured sulfur/mercury where relevant; gas-volume reference conditions and compressibility; terminal heating route; water intake and return |
| required_quality_disclosure | Identity and measurement gaps; boundary coverage; uncertainty; allocation; temporal and geographical representativeness |
| update_trigger | Changed product, route, yield, supply, waste fate, site or representative period |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| ifc-onshore-2007 | official_guidance | IFC, Environmental Health and Safety Guidelines for Onshore Oil and Gas Development, 30 April 2007, air and produced-water sections and Annex A, p.27. https://www.ifc.org/content/dam/ifc/doc/2000/2007-onshore-oil-gas-development-ehs-guidelines-en.pdf | Formation-fluid separation, gas impurity removal, direct air sources and produced-water management; onshore scope only. |
| ifc-lng-2017 | official_guidance | IFC, Environmental Health and Safety Guidelines for Liquefied Natural Gas Facilities, 11 April 2017, Annex A pp.21–22 and air-emissions section. https://www.ifc.org/content/dam/ifc/doc/mgrt/20170406-final-lng-ehs-guideline-april-2017.pdf | Pretreatment, liquefaction, refrigerant systems and boil-off handling; no default consumption range. |
| cpc3-notes-2025 | official_guidance | UNSD, CPC Version 3.0 Explanatory Notes, 30 June 2025. https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Exp_Notes_30Jun2025.pdf | Classification scope only; no process quantities. |
| ef-allocation-2021 | official_guidance | Commission Recommendation (EU) 2021/2279, Annex I section 4.5, consolidated 30 December 2021. https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX:02021H2279-20211230 | Multifunctionality hierarchy; not a claim of complete PEF conformity. |
