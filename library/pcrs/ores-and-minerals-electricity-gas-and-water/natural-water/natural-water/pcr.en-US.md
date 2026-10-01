---
pcr_id: pcr.ores-and-minerals-electricity-gas-and-water.natural-water.natural-water
language: en-US
status: candidate
sync_with: pcr.zh-CN.md
---

# Natural water

## 1. Scope and Applicability

This PCR covers potable or non-potable bulk water suitable for a declared further use, including untreated freshwater abstraction, conventional treatment, membrane or thermal desalination and reclamation of used water. Fix the actual source, treatment train and quality. The supply gate may be the plant meter or a declared network handover; include network pumping, flushing and leakage only for that boundary. Raw seawater as a marketed product, steam/hot water, bottled beverages, carbonated mineral water, distilled-water chemical products and water unsuitable for further use are excluded. Wastewater-treatment service and usable reclaimed-water supply require separate burden and product declarations. For ion exchange, adsorption or additional reclamation steps, add the actual resin, regenerant, activated carbon, residual and pollutant exchanges individually; the candidate cards do not replace a plant audit. `epa-water-2004`, `doe-desalination`, `doe-alternative-water`

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.ores-and-minerals-electricity-gas-and-water.natural-water.natural-water |
| classification_refs | CPC 3.0:18000 |
| covered_products | Bulk liquid water meeting one declared further-use specification |
| excluded_products | Marketed seawater; hot-water heat supply; distilled-water chemicals; bottled/carbonated beverages; unusable wastewater |
| representative_product | Bulk water suitable for the declared further use |
| production_route | Water intake and pumping; Clarification, filtration and disinfection; Membrane desalination; Thermal desalination; Used-water reclamation; Supply metering and declared distribution |
| market_state | One metered plant or distribution gate at measured water temperature |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Supply fit-for-declared-use bulk water, without claiming universal potable/non-potable equivalence |
| How much | 1 m3 |
| How well | site, basin and year; source and salinity; untreated/treated/reclaimed state; intended further use and quality evidence; treatment train; meter temperature; plant/network gate; losses and stock change; residual fate; allocation; energy supply |
| How long or cycle | One gate supply within a declared production period |
| reference_flow_link | `final_product` |

| Field | Value |
| --- | --- |
| Reference amount | 1 |
| Reference product flow | Bulk water suitable for the declared further use |
| Reference flow property | Volume `93a60a56-a3c8-22da-a746-0800200c9a66` |
| Reference unit group | Units of volume `93a60a57-a3c8-12da-a746-0800200c9a66` |
| Reference unit | m3 |
| Required qualifiers | site, basin and year; source and salinity; untreated/treated/reclaimed state; intended further use and quality evidence; treatment train; meter temperature; plant/network gate; losses and stock change; residual fate; allocation; energy supply |

Declare all qualifiers in dataset metadata or reference-flow comments. The representative identity is usable only for its confirmed product state, geography and property; resolve a distinct flow for incompatible variants. It does not impose a default product composition.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| reference_basis | final_product | Volume | m3 | D is the positive accepted net gate-output total in m3. Exclude packaging and cancelled internal transfers. cp_output records D; every card uses per 1 m3 reference flow. |
| conversion | utility and material rows | Declared row property | kg; m3; MJ | Retain raw readings. Electricity: 1 kWh = 3.6 MJ. Mass/volume conversion requires measured density, temperature and applicable pressure; retain water content and active chemical fraction. |
| category_balance | production | Volume | m3 | Close source-water, product, concentrate, sludge water, backwash, reuse, evaporation, flushing, network losses and stock balances. D is accepted net m3 at the declared gate; record meter temperature. Convert chemical solution and wet sludge masses with measured concentration and moisture. Abstraction is not equal to consumption: disclose receiving basin and returned quantity/quality. Do not convert m3 to kg using an undocumented universal density. |

## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Identified natural freshwater or seawater resource, supplied raw water, or traceable used-water feed for reclamation |
| starting_condition_role | Resource or supplied feed; declare which |
| product_classification_scope | Bulk liquid water meeting one declared further-use specification |
| recursive_input_rule | Purchased same-category material carries a distinct supplier dataset; internal recycling is a balance observation, not a new external input or credit. |
| upstream_dataset_requirement | Link feed, electricity, fuels, chemicals, infrastructure and waste-management burdens; disclose any missing coverage. |
| disclosure | site, basin and year; source and salinity; untreated/treated/reclaimed state; intended further use and quality evidence; treatment train; meter temperature; plant/network gate; losses and stock change; residual fate; allocation; energy supply |

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| boundary_operations | site | This PCR covers potable or non-potable bulk water suitable for a declared further use, including untreated freshwater abstraction, conventional treatment, membrane or thermal desalination and reclamation of used water. Fix the actual source, treatment train and quality. The supply gate may be the plant meter or a declared network handover; include network pumping, flushing and leakage only for that boundary. Raw seawater as a marketed product, steam/hot water, bottled beverages, carbonated mineral water, distilled-water chemical products and water unsuitable for further use are excluded. Wastewater-treatment service and usable reclaimed-water supply require separate burden and product declarations. For ion exchange, adsorption or additional reclamation steps, add the actual resin, regenerant, activated carbon, residual and pollutant exchanges individually; the candidate cards do not replace a plant audit. | `epa-water-2004`, `doe-desalination`, `doe-alternative-water` |
| boundary_partition | all exchanges | Include actual conditioning, storage, handling and pollution controls through the declared gate. Account for attributable construction and closure with a disclosed lifetime-output basis or justified exclusion and sensitivity. Separate purchased fuel supply from foreground combustion and purchased treatment from site releases. |  |
| boundary_completeness | inventory | Cards define individual likely exchanges and route conditions, not an exhaustive site audit. Add each actual absent chemical, waste, resource, land transformation and pollutant as its own row. Absence, measured zero and unknown must be distinguished. |  |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| intake | Water intake and pumping | conditional | Resource or purchased-feed intake | Foreground production | per 1 m3 reference flow |
| conventional | Clarification, filtration and disinfection | conditional | Conventional treatment or reclaimed-water polishing | Foreground production | per 1 m3 reference flow |
| membrane | Membrane desalination | conditional | Actual membrane route | Foreground production | per 1 m3 reference flow |
| thermal | Thermal desalination | conditional | Actual thermal route | Foreground production | per 1 m3 reference flow |
| reuse | Used-water reclamation | conditional | Reclaimed-water route | Foreground production | per 1 m3 reference flow |
| supply | Supply metering and declared distribution | required | All declared sites | Foreground production | per 1 m3 reference flow |

### Process: Water intake and pumping (`intake`)

#### Inputs

##### Product flows

###### Supplied raw water (`purchased_raw_water`)

Only purchased water; provider carries abstraction burden, so do not also count a resource withdrawal.

- Selected flow: Supplied raw water
- Flow property / unit: Volume / m3
- Amount rule: Collect the attributable reporting-period quantity under cp_purchased_raw_water; divide by D after stock, transfer and allocation reconciliation.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 m3 reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_purchased_raw_water`
- Sources: `epa-water-2004`, `doe-desalination`, `doe-alternative-water`

###### Intake electricity (`intake_power`)

This purchased electricity exchange requires independently confirmed actual supplier, consumption or production interface, geography, voltage, generation attributes and energy property/unit; its UUID remains unresolved until a compatible direct-read identity is confirmed. A waste-incineration generation flow must not represent arbitrary site power.

Actual intake pumping and screens.

- Selected flow: Electricity
- Flow property / unit: Net calorific value / MJ
- Amount rule: Collect the attributable reporting-period quantity under cp_intake_power; divide by D after stock, transfer and allocation reconciliation.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 m3 reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_intake_power`
- Sources: `epa-water-2004`, `doe-desalination`, `doe-alternative-water`

##### Elementary flows

###### River-water withdrawal (`river_resource`)

Only direct river abstraction; identify basin and intake meter.

- Selected flow: river water `805a7346-1664-4483-afe3-4b224be5e361`
- Flow property / unit: Volume / m3
- Amount rule: Collect the attributable reporting-period quantity under cp_river_resource; divide by D after stock, transfer and allocation reconciliation.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 m3 reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_river_resource`
- Sources: `epa-water-2004`, `doe-desalination`, `doe-alternative-water`

###### Groundwater withdrawal (`groundwater_resource`)

Only direct groundwater abstraction; record aquifer and pumping.

- Selected flow: ground water `4f462198-40cd-4184-8733-86648a20dc3f`
- Flow property / unit: Volume / m3
- Amount rule: Collect the attributable reporting-period quantity under cp_groundwater_resource; divide by D after stock, transfer and allocation reconciliation.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 m3 reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_groundwater_resource`
- Sources: `epa-water-2004`, `doe-desalination`, `doe-alternative-water`

###### Seawater abstraction for desalination (`seawater_resource`)

Only actual seawater intake; distinguish from marketed raw seawater.

- Selected flow: Seawater abstraction for desalination
- Flow property / unit: Volume / m3
- Amount rule: Collect the attributable reporting-period quantity under cp_seawater_resource; divide by D after stock, transfer and allocation reconciliation.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 m3 reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_seawater_resource`
- Sources: `epa-water-2004`, `doe-desalination`, `doe-alternative-water`

### Process: Clarification, filtration and disinfection (`conventional`)

#### Inputs

##### Product flows

###### Aluminium-sulfate coagulant (`aluminium_sulfate`)

Only an actual alum coagulation route; record active fraction and solution mass separately.

- Selected flow: Aluminium-sulfate coagulant
- Flow property / unit: Mass / kg
- Amount rule: Collect the attributable reporting-period quantity under cp_aluminium_sulfate; divide by D after stock, transfer and allocation reconciliation.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 m3 reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_aluminium_sulfate`
- Sources: `epa-water-2004`, `doe-desalination`, `doe-alternative-water`

###### Sodium-hypochlorite disinfectant (`sodium_hypochlorite`)

Only the actual hypochlorite route; other disinfectants and UV electricity require separate cards.

- Selected flow: Sodium-hypochlorite disinfectant
- Flow property / unit: Mass / kg
- Amount rule: Collect the attributable reporting-period quantity under cp_sodium_hypochlorite; divide by D after stock, transfer and allocation reconciliation.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 m3 reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_sodium_hypochlorite`
- Sources: `epa-water-2004`, `doe-desalination`, `doe-alternative-water`

###### Treatment electricity (`treatment_power`)

This purchased electricity exchange requires independently confirmed actual supplier, consumption or production interface, geography, voltage, generation attributes and energy property/unit; its UUID remains unresolved until a compatible direct-read identity is confirmed. A waste-incineration generation flow must not represent arbitrary site power.

Mixing, filtration, backwash and actual disinfection equipment.

- Selected flow: Electricity
- Flow property / unit: Net calorific value / MJ
- Amount rule: Collect the attributable reporting-period quantity under cp_treatment_power; divide by D after stock, transfer and allocation reconciliation.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 m3 reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_treatment_power`
- Sources: `epa-water-2004`, `doe-desalination`, `doe-alternative-water`

#### Outputs

##### Waste flows

###### Water-treatment sludge (`treatment_sludge`)

Transferred wet sludge with dry-solids fraction, contaminants and treatment fate.

- Selected flow: Water-treatment sludge
- Flow property / unit: Mass / kg
- Amount rule: Collect the attributable reporting-period quantity under cp_treatment_sludge; divide by D after stock, transfer and allocation reconciliation.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 m3 reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_treatment_sludge`
- Sources: `epa-water-2004`, `doe-desalination`, `doe-alternative-water`

### Process: Membrane desalination (`membrane`)

#### Inputs

##### Product flows

###### Membrane-system electricity (`membrane_power`)

This purchased electricity exchange requires independently confirmed actual supplier, consumption or production interface, geography, voltage, generation attributes and energy property/unit; its UUID remains unresolved until a compatible direct-read identity is confirmed. A waste-incineration generation flow must not represent arbitrary site power.

Actual high-pressure, circulation and recovery auxiliaries; net recovered energy is reconciled, not credited twice.

- Selected flow: Electricity
- Flow property / unit: Net calorific value / MJ
- Amount rule: Collect the attributable reporting-period quantity under cp_membrane_power; divide by D after stock, transfer and allocation reconciliation.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 m3 reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_membrane_power`
- Sources: `epa-water-2004`, `doe-desalination`, `doe-alternative-water`

###### Replacement polyamide RO membrane (`polyamide_membrane`)

Only actual polyamide RO modules; record service replacement fraction and disposal once.

- Selected flow: Replacement polyamide RO membrane
- Flow property / unit: Mass / kg
- Amount rule: Collect the attributable reporting-period quantity under cp_polyamide_membrane; divide by D after stock, transfer and allocation reconciliation.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 m3 reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_polyamide_membrane`
- Sources: `epa-water-2004`, `doe-desalination`, `doe-alternative-water`

#### Outputs

##### Waste flows

###### RO concentrate transferred for management (`membrane_concentrate`)

Only treatment/management transfers; direct receiving-water releases need species and compartment rows.

- Selected flow: RO concentrate transferred for management
- Flow property / unit: Volume / m3
- Amount rule: Collect the attributable reporting-period quantity under cp_membrane_concentrate; divide by D after stock, transfer and allocation reconciliation.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 m3 reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_membrane_concentrate`
- Sources: `epa-water-2004`, `doe-desalination`, `doe-alternative-water`

### Process: Thermal desalination (`thermal`)

#### Inputs

##### Product flows

###### Imported desalination heat (`desalination_heat`)

Actual imported thermal energy; on-site heat generation uses its own fuel/combustion inventory.

- Selected flow: Imported desalination heat
- Flow property / unit: Energy / MJ
- Amount rule: Collect the attributable reporting-period quantity under cp_desalination_heat; divide by D after stock, transfer and allocation reconciliation.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 m3 reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_desalination_heat`
- Sources: `epa-water-2004`, `doe-desalination`, `doe-alternative-water`

###### Thermal-desalination electricity (`thermal_power`)

This purchased electricity exchange requires independently confirmed actual supplier, consumption or production interface, geography, voltage, generation attributes and energy property/unit; its UUID remains unresolved until a compatible direct-read identity is confirmed. A waste-incineration generation flow must not represent arbitrary site power.

Actual evaporation, circulation and distillate pumps.

- Selected flow: Electricity
- Flow property / unit: Net calorific value / MJ
- Amount rule: Collect the attributable reporting-period quantity under cp_thermal_power; divide by D after stock, transfer and allocation reconciliation.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 m3 reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_thermal_power`
- Sources: `epa-water-2004`, `doe-desalination`, `doe-alternative-water`

#### Outputs

##### Waste flows

###### Thermal-desalination brine transferred for management (`thermal_brine`)

Record temperature, salinity and management fate; species-resolved direct discharge separately.

- Selected flow: Thermal-desalination brine transferred for management
- Flow property / unit: Volume / m3
- Amount rule: Collect the attributable reporting-period quantity under cp_thermal_brine; divide by D after stock, transfer and allocation reconciliation.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 m3 reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_thermal_brine`
- Sources: `epa-water-2004`, `doe-desalination`, `doe-alternative-water`

### Process: Used-water reclamation (`reuse`)

#### Inputs

##### Product flows

###### Reclamation electricity (`reuse_power`)

This purchased electricity exchange requires independently confirmed actual supplier, consumption or production interface, geography, voltage, generation attributes and energy property/unit; its UUID remains unresolved until a compatible direct-read identity is confirmed. A waste-incineration generation flow must not represent arbitrary site power.

Actual reclamation process; disaggregate aeration, pumping and polishing and avoid duplicate conventional-stage meters.

- Selected flow: Electricity
- Flow property / unit: Net calorific value / MJ
- Amount rule: Collect the attributable reporting-period quantity under cp_reuse_power; divide by D after stock, transfer and allocation reconciliation.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 m3 reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_reuse_power`
- Sources: `epa-water-2004`, `doe-desalination`, `doe-alternative-water`

##### Waste flows

###### Used-water feed unsuitable before reclamation (`used_water_feed`)

Only actual waste-water feed; already suitable supplied reclaimed water is a product input with a provider.

- Selected flow: Used-water feed unsuitable before reclamation
- Flow property / unit: Volume / m3
- Amount rule: Collect the attributable reporting-period quantity under cp_used_water_feed; divide by D after stock, transfer and allocation reconciliation.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 m3 reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_used_water_feed`
- Sources: `epa-water-2004`, `doe-desalination`, `doe-alternative-water`

#### Outputs

##### Waste flows

###### Sludge from used-water reclamation (`reclamation_sludge`)

Only actual reclaimed-water processing solids; distinguish upstream wastewater-treatment sludge and assign each treatment burden once.

- Selected flow: Sludge from used-water reclamation
- Flow property / unit: Mass / kg
- Amount rule: Collect the attributable reporting-period quantity under cp_reclamation_sludge; divide by D after stock, transfer and allocation reconciliation.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 m3 reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_reclamation_sludge`
- Sources: `epa-water-2004`, `doe-desalination`, `doe-alternative-water`

### Process: Supply metering and declared distribution (`supply`)

#### Inputs

##### Product flows

###### Supply electricity (`supply_power`)

This purchased electricity exchange requires independently confirmed actual supplier, consumption or production interface, geography, voltage, generation attributes and energy property/unit; its UUID remains unresolved until a compatible direct-read identity is confirmed. A waste-incineration generation flow must not represent arbitrary site power.

Include distribution pumping only when the selected reference gate extends through the network.

- Selected flow: Electricity
- Flow property / unit: Net calorific value / MJ
- Amount rule: Collect the attributable reporting-period quantity under cp_supply_power; divide by D after stock, transfer and allocation reconciliation.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 m3 reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_supply_power`
- Sources: `epa-water-2004`, `doe-desalination`, `doe-alternative-water`

#### Outputs

##### Product flows

###### Bulk water suitable for the declared further use (`final_product`)

One quality specification and gate; exclude unusable residuals and separately declared seawater products.

- Selected flow: Bulk water suitable for the declared further use
- Flow property / unit: Volume / m3
- Amount rule: 1 m3
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 m3 reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_output`
- Sources: `epa-water-2004`, `doe-desalination`, `doe-alternative-water`

## 7. Allocation and Co-product Handling

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| allocation_hierarchy | joint production | Prefer process subdivision or defensible system expansion; otherwise use demonstrated physical causality. Use economic allocation only with consistent period, price, currency and sensitivity when physical causality is unavailable. Retain the unallocated inventory. | `ef-allocation-2021` |
| allocation_product | reference and co-products | Separate raw-water abstraction, treatment, desalination, reuse and distribution meters. For co-produced heat, power or salt, retain unallocated inventories and demonstrated physical relationships. Reclaimed water is not automatically burden-free and avoided freshwater is not an automatic credit; declare the wastewater-treatment service and recycling allocation consistently. |  |
| allocation_waste | waste and recycling | Classify each output by physical state and actual fate. A sale does not automatically make a residue a co-product; internal recycling receives no avoided-product credit. Apply treatment burdens once. |  |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cp_river_resource | intake | `river_resource` | measurement_record | period; site; amount; original unit; uncertainty; stock changes; route condition; allocation; D; product qualifiers | Integrate the calibrated source/input meter over matched operating intervals; record basin or provider, source salinity and quality, temperature, opening/closing storage, bypass and recycle. Record return-water quantity and destination separately. Do not infer intake from product volume or assume intake equals consumption. | m3 | Each meter interval or shipment; monthly reconciliation | Complete year or justified representative production campaign | One metered plant or distribution gate at measured water temperature | per 1 m3 reference flow | Calibration; original records; assay; balance residuals; uncertainty |
| cp_groundwater_resource | intake | `groundwater_resource` | measurement_record | period; site; amount; original unit; uncertainty; stock changes; route condition; allocation; D; product qualifiers | Integrate the calibrated source/input meter over matched operating intervals; record basin or provider, source salinity and quality, temperature, opening/closing storage, bypass and recycle. Record return-water quantity and destination separately. Do not infer intake from product volume or assume intake equals consumption. | m3 | Each meter interval or shipment; monthly reconciliation | Complete year or justified representative production campaign | One metered plant or distribution gate at measured water temperature | per 1 m3 reference flow | Calibration; original records; assay; balance residuals; uncertainty |
| cp_seawater_resource | intake | `seawater_resource` | measurement_record | period; site; amount; original unit; uncertainty; stock changes; route condition; allocation; D; product qualifiers | Integrate the calibrated source/input meter over matched operating intervals; record basin or provider, source salinity and quality, temperature, opening/closing storage, bypass and recycle. Record return-water quantity and destination separately. Do not infer intake from product volume or assume intake equals consumption. | m3 | Each meter interval or shipment; monthly reconciliation | Complete year or justified representative production campaign | One metered plant or distribution gate at measured water temperature | per 1 m3 reference flow | Calibration; original records; assay; balance residuals; uncertainty |
| cp_purchased_raw_water | intake | `purchased_raw_water` | measurement_record | period; site; amount; original unit; uncertainty; stock changes; route condition; allocation; D; product qualifiers | Integrate the calibrated source/input meter over matched operating intervals; record basin or provider, source salinity and quality, temperature, opening/closing storage, bypass and recycle. Record return-water quantity and destination separately. Do not infer intake from product volume or assume intake equals consumption. | m3 | Each meter interval or shipment; monthly reconciliation | Complete year or justified representative production campaign | One metered plant or distribution gate at measured water temperature | per 1 m3 reference flow | Calibration; original records; assay; balance residuals; uncertainty |
| cp_intake_power | intake | `intake_power` | measurement_record | period; site; amount; original unit; uncertainty; stock changes; route condition; allocation; D; product qualifiers | Calibrated weighing, metering or traceable transfer records; reconcile period, opening/closing stock, actual grade and boundary. | MJ | Each meter interval or shipment; monthly reconciliation | Complete year or justified representative production campaign | One metered plant or distribution gate at measured water temperature | per 1 m3 reference flow | Calibration; original records; assay; balance residuals; uncertainty |
| cp_aluminium_sulfate | conventional | `aluminium_sulfate` | measurement_record | period; site; amount; original unit; uncertainty; stock changes; route condition; allocation; D; product qualifiers | Reconcile weighed deliveries, tank inventory changes and actual dosing logs; retain solution density and measured active concentration. Normalize active chemical mass and disclose the carrier water without double counting. | kg | Each meter interval or shipment; monthly reconciliation | Complete year or justified representative production campaign | One metered plant or distribution gate at measured water temperature | per 1 m3 reference flow | Calibration; original records; assay; balance residuals; uncertainty |
| cp_sodium_hypochlorite | conventional | `sodium_hypochlorite` | measurement_record | period; site; amount; original unit; uncertainty; stock changes; route condition; allocation; D; product qualifiers | Reconcile weighed deliveries, tank inventory changes and actual dosing logs; retain solution density and measured active concentration. Normalize active chemical mass and disclose the carrier water without double counting. | kg | Each meter interval or shipment; monthly reconciliation | Complete year or justified representative production campaign | One metered plant or distribution gate at measured water temperature | per 1 m3 reference flow | Calibration; original records; assay; balance residuals; uncertainty |
| cp_treatment_power | conventional | `treatment_power` | measurement_record | period; site; amount; original unit; uncertainty; stock changes; route condition; allocation; D; product qualifiers | Calibrated weighing, metering or traceable transfer records; reconcile period, opening/closing stock, actual grade and boundary. | MJ | Each meter interval or shipment; monthly reconciliation | Complete year or justified representative production campaign | One metered plant or distribution gate at measured water temperature | per 1 m3 reference flow | Calibration; original records; assay; balance residuals; uncertainty |
| cp_treatment_sludge | conventional | `treatment_sludge` | measurement_record | period; site; amount; original unit; uncertainty; stock changes; route condition; allocation; D; product qualifiers | Measure transferred residue by calibrated volume or weight records matched to salinity, wet/dry-solids assay, temperature and final management fate. Separate returned water and direct receiving-water species; retain transport and treatment provider information. | kg | Each meter interval or shipment; monthly reconciliation | Complete year or justified representative production campaign | One metered plant or distribution gate at measured water temperature | per 1 m3 reference flow | Calibration; original records; assay; balance residuals; uncertainty |
| cp_membrane_power | membrane | `membrane_power` | measurement_record | period; site; amount; original unit; uncertainty; stock changes; route condition; allocation; D; product qualifiers | Calibrated weighing, metering or traceable transfer records; reconcile period, opening/closing stock, actual grade and boundary. | MJ | Each meter interval or shipment; monthly reconciliation | Complete year or justified representative production campaign | One metered plant or distribution gate at measured water temperature | per 1 m3 reference flow | Calibration; original records; assay; balance residuals; uncertainty |
| cp_polyamide_membrane | membrane | `polyamide_membrane` | measurement_record | period; site; amount; original unit; uncertainty; stock changes; route condition; allocation; D; product qualifiers | Calibrated weighing, metering or traceable transfer records; reconcile period, opening/closing stock, actual grade and boundary. | kg | Each meter interval or shipment; monthly reconciliation | Complete year or justified representative production campaign | One metered plant or distribution gate at measured water temperature | per 1 m3 reference flow | Calibration; original records; assay; balance residuals; uncertainty |
| cp_membrane_concentrate | membrane | `membrane_concentrate` | measurement_record | period; site; amount; original unit; uncertainty; stock changes; route condition; allocation; D; product qualifiers | Measure transferred residue by calibrated volume or weight records matched to salinity, wet/dry-solids assay, temperature and final management fate. Separate returned water and direct receiving-water species; retain transport and treatment provider information. | m3 | Each meter interval or shipment; monthly reconciliation | Complete year or justified representative production campaign | One metered plant or distribution gate at measured water temperature | per 1 m3 reference flow | Calibration; original records; assay; balance residuals; uncertainty |
| cp_desalination_heat | thermal | `desalination_heat` | measurement_record | period; site; amount; original unit; uncertainty; stock changes; route condition; allocation; D; product qualifiers | Calibrated weighing, metering or traceable transfer records; reconcile period, opening/closing stock, actual grade and boundary. | MJ | Each meter interval or shipment; monthly reconciliation | Complete year or justified representative production campaign | One metered plant or distribution gate at measured water temperature | per 1 m3 reference flow | Calibration; original records; assay; balance residuals; uncertainty |
| cp_thermal_power | thermal | `thermal_power` | measurement_record | period; site; amount; original unit; uncertainty; stock changes; route condition; allocation; D; product qualifiers | Calibrated weighing, metering or traceable transfer records; reconcile period, opening/closing stock, actual grade and boundary. | MJ | Each meter interval or shipment; monthly reconciliation | Complete year or justified representative production campaign | One metered plant or distribution gate at measured water temperature | per 1 m3 reference flow | Calibration; original records; assay; balance residuals; uncertainty |
| cp_thermal_brine | thermal | `thermal_brine` | measurement_record | period; site; amount; original unit; uncertainty; stock changes; route condition; allocation; D; product qualifiers | Measure transferred residue by calibrated volume or weight records matched to salinity, wet/dry-solids assay, temperature and final management fate. Separate returned water and direct receiving-water species; retain transport and treatment provider information. | m3 | Each meter interval or shipment; monthly reconciliation | Complete year or justified representative production campaign | One metered plant or distribution gate at measured water temperature | per 1 m3 reference flow | Calibration; original records; assay; balance residuals; uncertainty |
| cp_used_water_feed | reuse | `used_water_feed` | measurement_record | period; site; amount; original unit; uncertainty; stock changes; route condition; allocation; D; product qualifiers | Integrate the calibrated source/input meter over matched operating intervals; record basin or provider, source salinity and quality, temperature, opening/closing storage, bypass and recycle. Record return-water quantity and destination separately. Do not infer intake from product volume or assume intake equals consumption. | m3 | Each meter interval or shipment; monthly reconciliation | Complete year or justified representative production campaign | One metered plant or distribution gate at measured water temperature | per 1 m3 reference flow | Calibration; original records; assay; balance residuals; uncertainty |
| cp_reuse_power | reuse | `reuse_power` | measurement_record | period; site; amount; original unit; uncertainty; stock changes; route condition; allocation; D; product qualifiers | Calibrated weighing, metering or traceable transfer records; reconcile period, opening/closing stock, actual grade and boundary. | MJ | Each meter interval or shipment; monthly reconciliation | Complete year or justified representative production campaign | One metered plant or distribution gate at measured water temperature | per 1 m3 reference flow | Calibration; original records; assay; balance residuals; uncertainty |
| cp_supply_power | supply | `supply_power` | measurement_record | period; site; amount; original unit; uncertainty; stock changes; route condition; allocation; D; product qualifiers | Calibrated weighing, metering or traceable transfer records; reconcile period, opening/closing stock, actual grade and boundary. | MJ | Each meter interval or shipment; monthly reconciliation | Complete year or justified representative production campaign | One metered plant or distribution gate at measured water temperature | per 1 m3 reference flow | Calibration; original records; assay; balance residuals; uncertainty |
| cp_output | supply | `final_product` | measurement_record | period; site; amount; original unit; uncertainty; stock changes; route condition; allocation; D; product qualifiers | Record calibrated outlet volumetric meter readings and water temperature at the chosen plant/network gate, subtract nonconforming and rejected output, reconcile storage and transfers, and independently retain positive net accepted volume D in m3. Match water-quality sampling to the reporting period and intended-use specification. | m3 | Each meter interval or shipment; monthly reconciliation | Complete year or justified representative production campaign | One metered plant or distribution gate at measured water temperature | per 1 m3 reference flow | Calibration; original records; assay; balance residuals; uncertainty |
| cp_reclamation_sludge | reuse | `reclamation_sludge` | measurement_record | period; site; amount; original unit; uncertainty; stock changes; route condition; allocation; D; product qualifiers | Calibrated weighing, metering or traceable transfer records; reconcile period, opening/closing stock, actual grade and boundary. | kg | Each meter interval or shipment; monthly reconciliation | Complete year or justified representative production campaign | One metered plant or distribution gate at measured water temperature | per 1 m3 reference flow | Calibration; original records; assay; balance residuals; uncertainty |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| normalization | all cards | Exchange = attributable period quantity / D. Reconcile inventories and cancel internal transfers before aggregation. | cp_output; row-specific cp records | per 1 m3 reference flow |  |
| physical_balance | production | Close source-water, product, concentrate, sludge water, backwash, reuse, evaporation, flushing, network losses and stock balances. D is accepted net m3 at the declared gate; record meter temperature. Convert chemical solution and wet sludge masses with measured concentration and moisture. Abstraction is not equal to consumption: disclose receiving basin and returned quantity/quality. Do not convert m3 to kg using an undocumented universal density. | Matched mass, volume, composition and stock measurements | Balance residual and uncertainty |  |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| representativeness | dataset | Use matching production and exchange periods, actual technology, geography and supplier state. Record startup, shutdown, seasonal variation and substitutions. | collection records |
| identity_and_ranges | all cards | Unresolved identities and missing independent range evidence remain explicit. Do not replace measurement by a guessed industry range or by missing-as-zero. | manifest review metadata |

## 9. Validation Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| validate_reference | final_product | Verify 1 m3, positive D, product state, property/unit and every required qualifier. Each dataset fixes one product and route. |  |
| validate_balance | site | Close source-water, product, concentrate, sludge water, backwash, reuse, evaporation, flushing, network losses and stock balances. D is accepted net m3 at the declared gate; record meter temperature. Convert chemical solution and wet sludge masses with measured concentration and moisture. Abstraction is not equal to consumption: disclose receiving basin and returned quantity/quality. Do not convert m3 to kg using an undocumented universal density. |  |
| validate_coverage | handoff | Verify each applicable exchange, its provider or environmental compartment and final waste fate; identify skipped checks, unresolved identities, missing measurements and upstream gaps. Errors or unassessed mandatory coverage cannot be labelled complete. |  |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | foreground_dataset |
| downstream_use | secondary_dataset; background_dataset |
| allowed_use | Supply fit-for-declared-use bulk water, without claiming universal potable/non-potable equivalence |
| excluded_use | Marketed seawater; hot-water heat supply; distilled-water chemicals; bottled/carbonated beverages; unusable wastewater |
| required_metadata | site, basin and year; source and salinity; untreated/treated/reclaimed state; intended further use and quality evidence; treatment train; meter temperature; plant/network gate; losses and stock change; residual fate; allocation; energy supply |
| required_quality_disclosure | Identity and measurement gaps; boundary coverage; uncertainty; allocation; temporal and geographical representativeness |
| update_trigger | Changed product, route, yield, supply, waste fate, site or representative period |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| epa-water-2004 | official_guidance | US EPA, Drinking Water Treatment, EPA 816-F-04-034, June 2004, PDF pp.2–3. https://archive.epa.gov/water/archive/web/pdf/2009_08_28_sdwa_fs_30ann_treatment_web.pdf | Water-source differences, flocculation/sedimentation, filtration and disinfection; process description only, not current compliance guidance. |
| doe-desalination | official_guidance | US DOE, Desalination Basics, web snapshot 1 October 2026, How Does Desalination Work? https://www.energy.gov/cmei/ito/desalination-basics | Membrane and thermal route distinction, permeate and saline concentrate; no performance defaults. |
| doe-alternative-water | official_guidance | US DOE, Best Management Practice 14: Alternative Water Sources, web snapshot 1 October 2026. https://www.energy.gov/cmei/femp/best-management-practice-14-alternative-water-sources | Reclaimed and alternative water suitability for declared further use. |
| cpc3-notes-2025 | official_guidance | UNSD, CPC Version 3.0 Explanatory Notes, 30 June 2025. https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Exp_Notes_30Jun2025.pdf | Classification scope only; no process quantities. |
| ef-allocation-2021 | official_guidance | Commission Recommendation (EU) 2021/2279, Annex I section 4.5, consolidated 30 December 2021. https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX:02021H2279-20211230 | Multifunctionality hierarchy; not a claim of complete PEF conformity. |
