---
pcr_id: pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.meat-fish-fruits-vegetables-oils-and-fats.other-vegetables-and-pulses-frozen
language: en-US
status: candidate
sync_with: pcr.zh-CN.md
---

# Other vegetables and pulses, frozen

## 1. Scope and Applicability

This PCR covers factory-gate foreground data production for plain frozen vegetables and pulses whose route includes receipt, selection, cleaning, product-specific preparation, quick freezing, packaging, and frozen storage before dispatch. Blanching, cutting, cooling, glazing, and individual-quick-freezing or block-freezing are included only when used by the declared product route.

The Tiangong reference flow **Quick-frozen vegetables** is a representative flow for this category, not a claim that all vegetables and pulses share one recipe, yield, energy demand, or storage profile. Each data package shall represent one declared product or a documented production mix and shall identify species/cultivar or pulse type, incoming condition, cut form, blanching treatment, freezing format, additives or glazing, package format, geography, production period, and frozen-storage duration. Product-specific primary records replace all provisional screening ranges.

Excluded are potatoes, fruits, mushrooms when classified elsewhere, canned or dried products, purees and juices, seasoned or sauced preparations, complete meals, retail and distribution after factory dispatch, and consumer thawing or cooking. Agricultural production and inbound transport are upstream linked datasets rather than foreground factory operations.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | `pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.meat-fish-fruits-vegetables-oils-and-fats.other-vegetables-and-pulses-frozen` |
| classification_refs | CPC 3.0 `21319` (mapping context only) |
| covered_products | Plain frozen vegetables and pulses, including single-species products and documented mixes, produced by rapid freezing after declared preparation |
| excluded_products | Potatoes; fruit; products classified elsewhere; canned, dried, pureed, juiced, seasoned, sauced, or meal products; downstream retail and use |
| representative_product | Quick-frozen vegetables; representative category flow only, with the actual vegetable or pulse and route required in each data package |
| production_route | Raw material receipt -> sorting/cleaning/preparation -> conditional blanching/cooling/glazing -> quick freezing -> packaging -> frozen storage -> factory dispatch |
| market_state | Net saleable frozen product at factory gate, normally maintained at -18 °C or colder, with package and production-mix status declared |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Net saleable mass of the declared frozen vegetable or pulse product at the factory gate |
| How much | 1 kg net product, excluding packaging |
| How well | Product has passed the declared preparation and quick-freezing route, meets the declared quality specification, and is at -18 °C or colder at dispatch |
| How long or cycle | One production campaign represented at factory dispatch; frozen-storage duration is declared separately |
| reference_flow_link | The finished output of `quick_freezing_packaging_storage` |

| Field | Value |
| --- | --- |
| Reference amount | 1 kg net frozen product |
| Reference product flow | Quick-frozen vegetables `f73b84ab-647d-43a3-b10a-86911fa6db57` |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | actual vegetable or pulse and cultivar/type; single product or production mix; incoming state; preparation and cut form; blanching time/temperature or no-blanch declaration; freezing technology and IQF/block form; glaze/additive status; net mass and packaging format; site and geography; production period; cold-storage duration and dispatch temperature |

When constructing a foreground data package, all required qualifiers shall be declared in dataset metadata, process notes, the reference-flow comment, or equivalent fields. The representative UUID shall not be used to conceal a mixed or unspecified recipe.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| `reference_mass` | Reference product and mass-balance outputs | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Normalize all results to 1 kg net conforming frozen product; exclude packaging from net product mass. |
| `wet_material_mass` | Raw material, water, rejects, wastewater, and packaging | Mass | kg | Record wet or as-received mass and declare moisture/drained basis when it materially changes interpretation. |
| `energy_carrier_units` | Electricity and thermal energy | Energy | kWh for electricity; MJ for delivered thermal energy | Preserve measured carrier units and conversion factors; do not combine electricity and heat without reporting both source values. |
| `temperature_basis` | Freezing, storage, and dispatch temperature | Temperature | °C | Record sensor location, air or product basis, time stamp, calibration status, and any excursions. |
| `refrigerant_mass` | Refrigerant additions, recovery, stock change, and emissions | Mass | kg by chemical | Keep each refrigerant chemical separate; do not report an unidentified aggregate refrigerant mass. |

## 5. System Boundary

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `boundary_foreground_operations` | Factory foreground | Include receiving, sorting, cleaning, trimming/cutting, conditional blanching and cooling, quick freezing, packaging, and frozen storage through factory dispatch when performed for the declared product. | `codex-cxp-8-1976` |
| `boundary_upstream_links` | Purchased inputs | Link cultivation, inbound transport, water supply, electricity, fuels or steam, packaging, refrigerant manufacture, and waste treatment to geographically and technologically appropriate upstream datasets. | `codex-cxp-8-1976` |
| `boundary_downstream_exclusion` | Factory-gate result | Exclude distribution after dispatch, retail storage, consumer thawing/cooking, and package end-of-life unless the study explicitly expands the boundary and reports them separately. |  |
| `boundary_cold_chain` | Frozen product | Include the actual on-site freezing and frozen-storage energy, refrigerant losses, and temperature-control records; the quick-freezing step ends only after the declared thermal centre reaches the required frozen condition. | `codex-cxp-8-1976`; `eu-directive-89-108-eec` |
| `boundary_recursive_input` | Purchased frozen vegetables or pulses | Record a purchased same-category frozen ingredient as a visible product input and stop recursive foreground expansion; require an upstream dataset with matching product and route qualifiers. |  |

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Raw vegetables or pulses received at the factory gate, with origin, harvest/receipt condition, temperature, and accepted mass declared |
| starting_condition_role | Starting point for foreground factory processing; cultivation and inbound transport remain upstream linked datasets |
| product_classification_scope | Plain frozen vegetables and pulses represented by the semantic PCR scope; CPC 3.0 `21319` is mapping context, not canonical identity |
| recursive_input_rule | Purchased same-category frozen material remains a product input with its own upstream dataset and is not reopened as this foreground route |
| upstream_dataset_requirement | Use product-, geography-, technology-, and time-representative datasets for cultivation, transport, utilities, packaging, refrigerants, and treatment services |
| disclosure | Declare product identity, mix shares, preparation route, blanching status, freezing format, yield, package, storage time, dispatch temperature, exclusions, allocation, and any data gaps |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| `preparation_and_pretreatment` | Receiving, cleaning, preparation, and pretreatment | `required` | Blanching, cooling, glazing, or other pretreatment rows apply only when used by the declared product route. | Foreground preparation of accepted raw material | Per 1,000 kg net frozen product dispatched |
| `quick_freezing_packaging_storage` | Quick freezing, packaging, frozen storage, and dispatch | `required` | All stages are included as operated; storage duration may be zero only for documented direct dispatch. | Foreground finished-product production and cold-chain control | 1,000 kg net frozen product dispatched |

### Process: Receiving, cleaning, preparation, and pretreatment (`preparation_and_pretreatment`)

#### Inputs

##### Product flows

###### Accepted raw vegetables or pulses (`raw_vegetable_pulse_input`)

Record the actual accepted fresh, chilled, soaked, or otherwise declared raw material entering factory preparation, separated by species/type and supplier origin.

- Selected flow: Product-specific raw vegetable or pulse flow; Tiangong UUID unresolved
- Flow property / unit: Mass / kg
- Amount rule: Weighed accepted mass from receiving records
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1,000 kg net frozen product dispatched
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material_mass_balance`
- Range: Provisional raw-material screening range
  - Range role: Default estimate (`default_estimate`)
  - Lower: 1000
  - Upper: 2500
  - Unit: kg
  - Basis: per 1,000 kg net frozen product dispatched; replace with product-specific receiving and yield records
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Preparation and blanching water (`process_water_input`)

Record metered or allocated water used for washing, cooling, blanching, glazing, sanitation attributable to the product, and other direct process uses without double counting recycled water.

- Selected flow: Process water; Tiangong UUID unresolved
- Flow property / unit: Mass / kg
- Amount rule: Metered withdrawal plus purchased water, less documented internal recirculation
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg net frozen product dispatched
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_utility_records`
- Range: Provisional process-water screening range
  - Range role: Default estimate (`default_estimate`)
  - Lower: 0
  - Upper: 15000
  - Unit: kg
  - Basis: per 1,000 kg net frozen product dispatched; broad range reflects dry-cleaned through water-intensive routes
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Preparation electricity (`preparation_electricity_input`)

Record submetered or defensibly allocated electricity for conveying, sorting, washing, cutting, pumps, air handling, and pretreatment equipment.

- Selected flow: Electricity supply matched to site geography and voltage; Tiangong UUID unresolved
- Flow property / unit: Energy / kWh
- Amount rule: Meter reading or equipment power multiplied by verified operating time
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg net frozen product dispatched
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_utility_records`
- Range: Provisional preparation-electricity screening range
  - Range role: Default estimate (`default_estimate`)
  - Lower: 5
  - Upper: 250
  - Unit: kWh
  - Basis: per 1,000 kg net frozen product dispatched
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Conditional thermal energy for blanching (`blanching_thermal_energy_input`)

Record delivered steam, fuel, or heat only when blanching or another thermal pretreatment is used; preserve the carrier identity and upstream supply.

- Selected flow: Declared steam, fuel, or heat carrier; Tiangong UUID unresolved
- Flow property / unit: Energy / MJ
- Amount rule: Metered delivered energy or calculated carrier quantity times documented lower heating value and boiler efficiency
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1,000 kg net frozen product dispatched
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_utility_records`
- Range: Provisional blanching-energy screening range
  - Range role: Default estimate (`default_estimate`)
  - Lower: 0
  - Upper: 4000
  - Unit: MJ
  - Basis: per 1,000 kg net frozen product dispatched; zero is permitted only for a documented non-thermal route
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Prepared product transferred to freezing (`prepared_product_output`)

Calculate the measured prepared product transferred after sorting, cutting, conditional blanching/cooling, and draining; keep internal transfer mass visible for reconciliation.

- Selected flow: Product-specific prepared vegetable or pulse intermediate; Tiangong UUID unresolved
- Flow property / unit: Mass / kg
- Amount rule: Measured transfer mass or accepted input minus measured rejects and accountable mass changes
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1,000 kg net frozen product dispatched
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_material_mass_balance`
- Range: Provisional prepared-product screening range
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 900
  - Upper: 1800
  - Unit: kg
  - Basis: per 1,000 kg net frozen product dispatched; investigate values outside this broad provisional interval
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

###### Sorting and preparation rejects (`preparation_rejects_output`)

Record soil-bearing rejects, inedible fractions, off-spec product, and other removed biomass by destination; do not net them invisibly from raw material.

- Selected flow: Product-specific organic preparation waste; Tiangong UUID unresolved
- Flow property / unit: Mass / kg
- Amount rule: Weighed rejects by type and treatment destination
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1,000 kg net frozen product dispatched
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material_mass_balance`
- Range: Provisional reject screening range
  - Range role: Default estimate (`default_estimate`)
  - Lower: 0
  - Upper: 1200
  - Unit: kg
  - Basis: per 1,000 kg net frozen product dispatched
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Preparation wastewater (`preparation_wastewater_output`)

Record wastewater leaving the foreground boundary after accounting for recirculation, water retained in product, evaporation, and sludge or solids handled separately.

- Selected flow: Wastewater to declared treatment route; Tiangong UUID unresolved
- Flow property / unit: Mass / kg
- Amount rule: Metered discharge or water-balance calculation from collected records
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg net frozen product dispatched
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_water_discharge_records`
- Range: Provisional wastewater screening range
  - Range role: Default estimate (`default_estimate`)
  - Lower: 0
  - Upper: 15000
  - Unit: kg
  - Basis: per 1,000 kg net frozen product dispatched
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Elementary flows

### Process: Quick freezing, packaging, frozen storage, and dispatch (`quick_freezing_packaging_storage`)

#### Inputs

##### Product flows

###### Prepared vegetables or pulses (`prepared_product_input`)

Carry forward the reconciled internal transfer from `prepared_product_output` without adding upstream burdens a second time.

- Selected flow: Product-specific prepared vegetable or pulse intermediate; Tiangong UUID unresolved
- Flow property / unit: Mass / kg
- Amount rule: Equal to the transferred output from `preparation_and_pretreatment`
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1,000 kg net frozen product dispatched
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_material_mass_balance`
- Range: Internal-transfer reconciliation range
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 900
  - Upper: 1800
  - Unit: kg
  - Basis: per 1,000 kg net frozen product dispatched; must equal the preceding process output for the represented batches
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Freezing and cold-storage electricity (`freezing_storage_electricity_input`)

Record electricity for freezing tunnels or plates, conveyors, packaging, cold rooms, defrost, fans, pumps, and attributable auxiliary loads over the declared storage duration.

- Selected flow: Electricity supply matched to site geography and voltage; Tiangong UUID unresolved
- Flow property / unit: Energy / kWh
- Amount rule: Submetered consumption; otherwise allocate metered shared refrigeration by documented tonne-hour, thermal-load, or validated engineering basis
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg net frozen product dispatched and declared storage duration
- Basis kind: Storage duration (`storage_duration`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_freezing_storage_records`
- Range: Provisional freezing-and-storage electricity screening range
  - Range role: Default estimate (`default_estimate`)
  - Lower: 50
  - Upper: 1500
  - Unit: kWh
  - Basis: per 1,000 kg net frozen product dispatched; broad range requires replacement with technology- and duration-specific records
  - Basis kind: Storage duration (`storage_duration`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Packaging materials (`packaging_material_input`)

Record primary, secondary, and attributable tertiary packaging by material and actual supplied mass; do not include packaging in reference product mass.

- Selected flow: Material-specific packaging flows; Tiangong UUID unresolved
- Flow property / unit: Mass / kg
- Amount rule: Purchase or bill-of-material mass reconciled to packed units, including measured losses
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1,000 kg net frozen product dispatched
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_records`
- Range: Provisional packaging-mass screening range
  - Range role: Default estimate (`default_estimate`)
  - Lower: 5
  - Upper: 150
  - Unit: kg
  - Basis: per 1,000 kg net frozen product dispatched
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Facility refrigerant additions (`refrigerant_makeup_input`)

Record chemical-specific refrigerant purchases, additions, recovery, transfers, and opening/closing stocks for equipment serving the represented freezing and storage operations.

- Selected flow: Chemical-specific refrigerant; Tiangong UUID unresolved
- Flow property / unit: Mass / kg
- Amount rule: Collected refrigerant ledger amounts allocated only after facility mass balance
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg net frozen product dispatched
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_refrigerant_ledger`
- Range: Provisional refrigerant-addition screening range
  - Range role: Default estimate (`default_estimate`)
  - Lower: 0
  - Upper: 10
  - Unit: kg
  - Basis: per 1,000 kg net frozen product dispatched; not an emission factor and must be replaced by the chemical-specific ledger
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Net packaged frozen product at dispatch (`reference_frozen_product_output`)

This is the quantitative reference. Record net product mass excluding packaging and confirm the declared product and route qualifiers.

- Selected flow: Quick-frozen vegetables `f73b84ab-647d-43a3-b10a-86911fa6db57`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Fixed normalization output of 1,000 kg net conforming product
- Value mode: Fixed value (`fixed_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: 1,000 kg net frozen product dispatched
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Method formula (`method_formula`)
- Sources: `mass-balance-identity`
- Range: Reference-output identity check
  - Range role: Allowed range (`allowed_range`)
  - Lower: 1000
  - Upper: 1000
  - Unit: kg
  - Basis: normalized net reference output excluding packaging
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Method formula (`method_formula`)
  - Sources: `mass-balance-identity`

##### Waste flows

###### Freezing, packaging, and temperature-abused rejects (`finished_product_rejects_output`)

Record off-spec frozen product, packaging rejects, thawed or temperature-abused product, and their actual treatment destinations separately where material types differ.

- Selected flow: Product- and material-specific waste flows; Tiangong UUID unresolved
- Flow property / unit: Mass / kg
- Amount rule: Weighed rejects and documented disposition by waste route
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg net frozen product dispatched
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material_mass_balance`
- Range: Provisional finished-reject screening range
  - Range role: Default estimate (`default_estimate`)
  - Lower: 0
  - Upper: 200
  - Unit: kg
  - Basis: per 1,000 kg net frozen product dispatched
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Elementary flows

###### Refrigerant emitted to air (`refrigerant_emission_output`)

Calculate chemical-specific emissions from the reconciled facility refrigerant mass balance and allocate only the share serving the represented freezing and storage operations.

- Selected flow: Chemical-specific refrigerant emission to air; Tiangong UUID unresolved
- Flow property / unit: Mass / kg
- Amount rule: Apply `calc_refrigerant_mass_balance` to collected ledger and equipment-stock records
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg net frozen product dispatched
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_refrigerant_ledger`
- Sources: `ipcc-2006-v3-ch7`
- Range: Provisional refrigerant-emission screening range
  - Range role: Default estimate (`default_estimate`)
  - Lower: 0
  - Upper: 10
  - Unit: kg
  - Basis: per 1,000 kg net frozen product dispatched; not an emission factor and replace with facility mass balance
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

## 7. Allocation and Co-product Handling

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `allocation_avoid_by_subdivision` | Separate products, lines, batches, or meters | First use subdivision, separate batch records, and submetering so burdens follow the product that caused them. | `iso-14044-2006` |
| `allocation_internal_transfer` | Prepared-product internal flow | Do not allocate or add upstream burdens to the internal transfer between the two foreground processes; require input and output masses to match. | `mass-balance-identity` |
| `allocation_multiple_saleable_products` | Joint production that cannot be subdivided | Use a documented physical relationship only when it reflects causality; otherwise use economic allocation and report prices, period, shares, and a sensitivity result. | `iso-14044-2006` |
| `allocation_rejects_and_recovery` | Rejects, by-products, recycling, energy recovery, or disposal | Keep quantities and destinations visible; disclose any credit, substitution, cut-off, or burden assignment and do not treat waste as burden-free by default. | `iso-14044-2006` |
| `allocation_shared_refrigeration` | Shared freezer and cold-store utilities | Prefer submetering; otherwise allocate electricity and chemical-specific refrigerant emissions using a documented causal basis such as validated thermal load or tonne-hours, and disclose the sensitivity. | `ipcc-2006-v3-ch7` |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_material_mass_balance` | `preparation_and_pretreatment`; `quick_freezing_packaging_storage` | Incoming material, internal transfer, net product, and rejects | Weighbridge, scale, batch, and disposition records | product/type; supplier; batch; gross/tare/net mass; moisture/drained basis; reject type; destination; timestamp | Calibrated weighing at receipt, transfer, packing, and reject dispatch | kg | Each batch or shift | All represented campaigns, normally 12 consecutive months or a justified full season | All included lines and sites | Sum by product and batch, reconcile inputs, outputs, stock change, moisture gain/loss, and sampling | Scale calibration, batch traceability, stock reconciliation, and exception log |
| `cp_utility_records` | `preparation_and_pretreatment` | Water, electricity, steam, fuel, and heat | Meter, invoice, equipment runtime, and carrier-property records | meter start/end; invoice amount; runtime; power; fuel mass/volume; heating value; efficiency; batch association | Submetering preferred; otherwise documented engineering allocation | kg; kWh; MJ | Meter interval and each production campaign | Same period as production data | All included equipment and utilities | Deduct unrelated loads and normalize to net dispatched product | Meter calibration, invoices, runtime logs, conversion source, and allocation worksheet |
| `cp_water_discharge_records` | `preparation_and_pretreatment` | Wastewater and retained/evaporated water | Discharge meter, treatment log, and water-balance record | withdrawal; discharge; recirculation; product retention; evaporation; sludge; destination | Meter discharge or calculate a documented water balance | kg | Daily or campaign | Same period as production data | All included discharge points | Reconcile withdrawal with discharge, recirculation, retention, evaporation, and removed solids | Meter checks, treatment receipts, sampling records, and balance exception log |
| `cp_freezing_storage_records` | `quick_freezing_packaging_storage` | Freezing energy, storage energy, duration, and temperature | Submeter, freezer log, cold-room log, and calibrated sensor record | kWh; batch; freezer type; product inlet/thermal-centre/air temperature; storage entry/exit; defrost; door events | Continuous or interval logging linked to batches and storage inventory | kWh; °C; hour or day | Continuous temperature; each meter interval | All represented production and storage periods | All included freezing and cold-storage equipment | Separate freezing and storage where possible; allocate shared loads by validated causal basis | Meter and sensor calibration, missing-data log, temperature excursions, and corrective actions |
| `cp_packaging_records` | `quick_freezing_packaging_storage` | Packaging materials and losses | Bill of materials, purchase, line count, and reject records | material; supplier; unit mass; units used; recycled content if claimed; rejects; destination | Reconcile actual material issued to packed units and remaining stock | kg | Each packaging campaign | Same period as production data | All included formats and lines | Sum by material and normalize to net product | Supplier specifications, unit-mass checks, and stock reconciliation |
| `cp_refrigerant_ledger` | `quick_freezing_packaging_storage` | Refrigerant additions, recovery, stocks, equipment charge, and emissions | Chemical-specific purchase, service, recovery, and equipment-register records | chemical; opening/closing inventory; purchases; additions; recovered/transferred mass; equipment charge and change; date; equipment served | Reconcile chemical-specific facility mass balance and document allocation to included equipment | kg by chemical | Every service event and annual reconciliation | Same period as production data with opening and closing stock | All freezing and cold-storage equipment serving represented output | Calculate facility emission before product allocation; prohibit negative emissions without corrected records | Service invoices, cylinder weights, technician log, equipment register, and balance review |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_reference_normalization` | Every inventory quantity | normalized quantity = included-period quantity / net conforming dispatched product mass × 1,000 kg | included quantity; net dispatched product mass | Quantity per 1,000 kg reference product | `mass-balance-identity` |
| `calc_material_reconciliation` | Preparation and finished-product mass | accepted input + water/additions incorporated + opening work-in-process = net product + rejects + wastewater solids + closing work-in-process + measured/estimated moisture change; disclose the unreconciled balance | Weighed inputs, outputs, stocks, retained water, and moisture change | Yield, reject fraction, and balance gap | `mass-balance-identity` |
| `calc_thermal_energy` | Fuel- or steam-based pretreatment | Convert the collected carrier quantity using documented heating value or enthalpy and measured efficiency; retain the original carrier record | Fuel/steam quantity; heating value or enthalpy; efficiency | Delivered thermal energy in MJ | `mass-balance-identity` |
| `calc_refrigerant_mass_balance` | Refrigerant emission to air | Calculate emissions by chemical from purchases/additions and opening/closing material and equipment stocks, subtracting documented recovery and transfers; calculate at facility level before causal allocation to included equipment | Opening/closing stocks; purchases; additions; recoveries; transfers; equipment charge change; allocation driver | kg emitted by refrigerant chemical per reference product | `ipcc-2006-v3-ch7` |
| `calc_shared_cold_load` | Shared freezing or storage systems | Prefer submetering; otherwise allocate measured electricity and calculated refrigerant emissions using validated thermal load or tonne-hours that include product mass, temperature pull-down, and storage duration | Metered utilities; product mass; inlet/outlet temperature; storage tonne-hours; equipment scope | Product-attributable freezing/storage inventory | `mass-balance-identity` |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_product_identity` | Reference product | Declare actual vegetable/pulse, cultivar/type, mix shares, incoming condition, preparation, blanching, freezing format, glazing/additives, package, and geography. | Batch specification, recipe, label, supplier record, and process route |
| `dq_temporal_representativeness` | Foreground inventory | Cover 12 consecutive months or a justified full production season; include start-up, defrost, cleaning, storage, and off-spec events attributable to the product. | Dated meter, batch, production, storage, and exception records |
| `dq_mass_completeness` | Material and water balance | Reconcile all material outputs, stock changes, moisture effects, rejects, and discharge; investigate and disclose any remaining gap rather than forcing closure. | Signed reconciliation worksheet and exception investigation |
| `dq_cold_chain` | Freezing and storage | Retain calibrated temperature records showing the thermal-centre endpoint and storage/dispatch condition, plus all excursions and corrective actions. | Sensor calibration, continuous logs, batch release, and excursion log |
| `dq_energy_completeness` | Utilities | Include direct process, idle-attributable, defrost, fan, pump, cold-room, and auxiliary loads; document excluded unrelated loads and allocation. | Meter map, invoices, runtime logs, and allocation worksheet |
| `dq_refrigerant_completeness` | Refrigeration | Report chemical-specific mass balance and equipment scope; do not infer zero leakage solely from a missing service record. | Service ledger, cylinder weights, equipment register, recovery records, and mass-balance review |
| `dq_provisional_ranges` | All reasoned estimates | Treat every `reasoned_estimate` range as a replaceable screening value, never as a product recipe or publication-critical allowed value. | Product-specific source, reviewed foreground dataset, or documented reviewer acceptance before publication |

## 9. Validation Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `validation_reference_identity` | Reference flow | Confirm the product-flow, Mass property, mass unit group, kg unit, and exactly 1 kg net reference amount; packaging mass shall be separate. | `mass-balance-identity` |
| `validation_scope_qualifiers` | Product identity | Reject an unspecified generic recipe: all required qualifiers and any production-mix shares shall be present and internally consistent. | `codex-cxs-320-2015` |
| `validation_process_coverage` | Foreground boundary | Confirm both required processes and every route-applicable conditional operation, utility, reject, wastewater, package, storage interval, and treatment destination are represented. | `codex-cxp-8-1976` |
| `validation_mass_balance` | Material inventory | Confirm internal transfers match, net output equals the quantitative reference, and material/water balance gaps are disclosed and investigated. | `mass-balance-identity` |
| `validation_temperature` | Frozen condition | Confirm batch-linked freezing endpoint, storage, and dispatch records demonstrate the declared -18 °C-or-colder condition and identify excursions. | `codex-cxp-8-1976`; `eu-directive-89-108-eec`; `eu-regulation-37-2005` |
| `validation_no_double_counting` | Internal and upstream flows | Confirm internal prepared-product transfers carry no duplicate upstream burden and same-category purchased inputs use one matching upstream dataset. | `mass-balance-identity` |
| `validation_refrigerant` | Direct emissions | Confirm chemical-specific facility reconciliation, equipment scope, recovery, stock change, product allocation, and no unsupported zero-emission assumption. | `ipcc-2006-v3-ch7` |
| `validation_provisional_evidence` | Candidate ranges | Confirm reasoned-estimate ranges are labelled provisional and have not replaced foreground records or been presented as universal category parameters. |  |
| `validation_allocation` | Multi-output and shared systems | Confirm subdivision was attempted first and every remaining allocation method, driver, period, share, and sensitivity is disclosed. | `iso-14044-2006` |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | Product- and route-specific foreground factory data package for frozen vegetables or pulses |
| downstream_use | `secondary_dataset`; `background_dataset` after review and publication |
| allowed_use | LCA process or lifecyclemodel construction when product, geography, technology, production period, package, and storage qualifiers match the study |
| excluded_use | A universal recipe for all frozen vegetables/pulses; agricultural production; downstream distribution/retail/use without added datasets; products outside scope; use of provisional ranges as reviewed defaults |
| required_metadata | PCR id and version used; actual product/type; mix shares; supplier/origin; site/geography; production period; incoming state; preparation/blanching/freezing route; glazing/additives; package; storage duration; dispatch temperature; allocation; upstream dataset references |
| required_quality_disclosure | Temporal/site coverage; mass and water balance; meter and sensor coverage; missing data; allocation and sensitivity; refrigerant method; temperature excursions; provisional estimates; exclusions and uncertainty |
| update_trigger | Change in product mix, supplier/origin, yield, pretreatment, freezing technology, package, refrigerant, energy source, cold-store duration, site, regulation, or evidence that materially changes the normalized inventory |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `codex-cxs-320-2015` | Standard (`standard`) | Codex Alimentarius, CXS 320-2015, *Standard for Quick Frozen Vegetables*, official Codex standards list and document link, https://www.fao.org/fao-who-codexalimentarius/codex-texts/list-standards/en/ (accessed 2026-08-11) | Product-category standard identity and product-specific scope cross-check; no quantitative inventory range was taken from the inaccessible proxy text |
| `codex-cxp-8-1976` | Official guidance (`official_guidance`) | Codex Alimentarius, CAC/RCP 8-1976 (rev. 2008), *Code of Practice for the Processing and Handling of Quick Frozen Foods*, https://www.fao.org/input/download/standards/285/CXP_008e.pdf (accessed 2026-08-11) | Process decomposition, quick-freezing endpoint, cold-chain boundary, storage, temperature monitoring, and recordkeeping |
| `eu-directive-89-108-eec` | Standard (`standard`) | Council Directive 89/108/EEC on quick-frozen foodstuffs, CELEX `31989L0108`, https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX:31989L0108 (accessed 2026-08-11) | -18 °C frozen-product condition and cold-chain equipment requirement |
| `eu-regulation-37-2005` | Standard (`standard`) | Commission Regulation (EC) No 37/2005, CELEX `32005R0037`, https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX:32005R0037 (accessed 2026-08-11) | Frequent regular temperature recording, instrument conformity, and record retention for transport/warehousing/storage |
| `ipcc-2006-v3-ch7` | Method factor (`method_factor`) | IPCC, *2006 IPCC Guidelines for National Greenhouse Gas Inventories*, Volume 3, Chapter 7, https://www.ipcc-nggip.iges.or.jp/public/2006gl/pdf/3_Volume3/V3_7_Ch7_ODS_Substitutes.pdf (accessed 2026-08-11) | Chemical-specific refrigeration emissions and mass-balance method |
| `iso-14044-2006` | Standard (`standard`) | ISO 14044:2006, *Environmental management — Life cycle assessment — Requirements and guidelines*, Clause 4.3.4 | Allocation hierarchy, documentation, and sensitivity |
| `mass-balance-identity` | Method factor (`method_factor`) | Conservation-of-mass and metered-inventory identity applied to the declared foreground boundary | Reference normalization, internal transfer, yield, water/material reconciliation, and shared-load calculations |
