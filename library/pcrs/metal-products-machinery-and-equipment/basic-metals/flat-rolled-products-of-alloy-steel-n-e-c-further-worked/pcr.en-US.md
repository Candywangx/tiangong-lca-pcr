---
pcr_id: pcr.metal-products-machinery-and-equipment.basic-metals.flat-rolled-products-of-alloy-steel-n-e-c-further-worked
language: en-US
status: candidate
sync_with: pcr.zh-CN.md
---

# Flat-rolled products of alloy steel, n.e.c., further worked

## 1. Scope and Applicability

This PCR covers gate-to-gate production of flat-rolled alloy-steel products not elsewhere classified that undergo at least one operation beyond the declared hot-rolled or cold-rolled input state. The data package shall identify alloy family, incoming state, dimensions, further-working route, surface and coating state, and delivery form. Typical in-scope operations are pickling, cold reduction, annealing or other heat treatment, temper or skin-pass rolling, route-specific metallic coating, slitting, shearing, straightening, inspection, oiling, marking, and packing.

The scope excludes upstream crude-steel production and casting, non-alloy steel, stainless steel, silicon-electrical steel, products whose final state is only hot-rolled or only cold-rolled, fabrication into parts, use, and end-of-life. Zinc coating is included only when it forms part of the declared CPC 41239 route; another coating chemistry requires distinct atomic rows before use.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.metal-products-machinery-and-equipment.basic-metals.flat-rolled-products-of-alloy-steel-n-e-c-further-worked |
| classification_refs | CPC 3.0: 41239, exact product-classification context |
| covered_products | Flat-rolled alloy-steel coil, strip, or sheet, n.e.c., with one or more declared further-working operations beyond the incoming hot-rolled or cold-rolled state |
| excluded_products | Non-alloy steel; stainless steel; silicon-electrical steel; products only hot-rolled or only cold-rolled; fabricated parts; pipe, bar, rod, section, and wire products |
| representative_product | Finished alloy-steel coil or sheet from a qualified flat-rolled alloy-steel input and a declared further-working route |
| production_route | Gate-to-gate further working; route steps are explicitly selected from the process map |
| market_state | Dry finished coil, strip, or sheet at the factory gate, with dimensions, surface, coating, oiling, and packaging declared |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Provision of further-worked flat-rolled alloy steel, n.e.c., in the declared market state |
| How much | 1,000 kg net saleable product |
| How well | Conforming to the declared alloy grade, dimensions, mechanical properties, surface finish, coating status, and applicable product specification |
| How long or cycle | One production campaign represented at the factory gate; no use duration is assigned |
| reference_flow_link | `finished_alloy_steel_product` |

| Field | Value |
| --- | --- |
| Reference amount | 1,000 kg net saleable product |
| Reference product flow | Flat-rolled products of alloy steel, n.e.c., further worked |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | alloy designation and standard; incoming hot-rolled or cold-rolled state; incoming and final thickness and width; coil, strip, or sheet form; process sequence; annealing technology and atmosphere when used; coating metal and mass when used; surface finish; oiling state; net saleable mass; site; geography; production period |

Required qualifiers shall be declared in dataset metadata, process notes, the reference-flow comment, or an equivalent data-package field.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| `reference_product_mass` | Reference product and solid material balances | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Normalize net saleable product and material exchanges to 1,000 kg; exclude removable transport packaging from product mass. |
| `electricity_energy_conversion` | Alternating-current electricity rows | Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` | MJ | Preserve the meter reading and conversion basis; convert kWh using 3.6 MJ per kWh. |
| `gas_volume_conditions` | Gaseous natural-gas rows | Volume `93a60a56-a3c8-22da-a746-0800200c9a66` | m3 | Declare reference temperature, pressure, and dry/wet basis and retain the supplier energy conversion. |
| `coating_mass_separation` | Metallic coating | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Record coating metal separately from steel substrate and declare final coating mass or mass per coated area. |

## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Qualified flat-rolled alloy-steel input, including alloy grade, hot-rolled or cold-rolled state, dimensions, scale or surface condition, and existing coating |
| starting_condition_role | Purchased or transferred product input represented by a separate upstream dataset |
| product_classification_scope | Flat-rolled alloy-steel products n.e.c. undergoing further working consistent with CPC 3.0 code 41239 |
| recursive_input_rule | Record a same-category input once at its declared incoming state and do not recursively expand this PCR |
| upstream_dataset_requirement | Match alloy grade, production route, geography, recycled-content basis, and incoming state; disclose any proxy |
| disclosure | Included and omitted steps, internal recirculation, acid recovery, water-loop configuration, coating route, scrap destination, packaging, and shared-facility cut-offs |

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `boundary_start_at_qualified_flat_product` | Foreground boundary | Start at receipt of the qualified flat-product input and include declared further-working operations through net saleable factory-gate product. | `unsd-cpc-3-0-structure-2025`; `eu-jrc-fmp-bref-2022` |
| `boundary_route_conditioning` | Process selection | Include each conditional process only when site records show it occurs; do not average absent route steps into the product. | `eu-jrc-fmp-bref-2022` |
| `boundary_support_operations` | Supporting operations | Include attributable roll preparation, bath maintenance, fume control, on-site effluent treatment, handling, inspection, and packing. | `eu-jrc-fmp-bref-2022` |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| `feedstock_receiving_preparation` | Feedstock receiving and preparation | `required` | Always; establishes incoming state and campaign mass balance | Foreground input control and preparation | kg qualified input and prepared output |
| `pickling_rinsing` | Pickling, rinsing, and drying | `conditional` | Include when oxide scale or surface condition is removed chemically | Foreground surface preparation | kg pickled output and m2 treated surface |
| `cold_reduction` | Cold reduction | `conditional` | Include when thickness or mechanical properties are changed by cold rolling | Foreground forming | kg cold-rolled output |
| `annealing_heat_treatment` | Annealing or heat treatment | `conditional` | Include when the declared route uses batch or continuous heat treatment | Foreground thermal treatment | kg annealed output |
| `temper_skin_pass` | Temper or skin-pass rolling | `conditional` | Include when a light rolling pass sets final properties, flatness, or surface finish | Foreground final rolling | kg tempered output |
| `metallic_coating` | Zinc metallic coating | `conditional` | Include only for a declared zinc-coated CPC 41239 product | Foreground surface coating | kg coated output and m2 coated area |
| `finishing_packaging` | Finishing and packaging | `required` | Always; record the actual finishing and packaging configuration | Foreground final conditioning | 1,000 kg net saleable product |
| `wastewater_treatment` | On-site cold-processing wastewater treatment | `conditional` | Include when process wastewater is treated inside the foreground boundary | Foreground pollution control | m3 treatment feed |

### Process: Feedstock receiving and preparation (`feedstock_receiving_preparation`)

#### Inputs

##### Product flows

###### Hot-rolled alloy-steel flat-product feedstock (`hot_rolled_alloy_steel_feedstock`)

This atomic exchange crosses the declared process boundary when its route condition applies; its quantity is obtained as specified below.

- Selected flow: Hot-rolled alloy-steel flat product
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Measured net incoming mass attributable to the campaign; include only when the declared input state is hot-rolled
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1,000 kg net saleable reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_feedstock_mass_balance`
- Sources: `unsd-cpc-3-0-structure-2025`

###### Cold-rolled alloy-steel flat-product feedstock (`cold_rolled_alloy_steel_feedstock`)

This atomic exchange crosses the declared process boundary when its route condition applies; its quantity is obtained as specified below.

- Selected flow: Cold-rolled alloy-steel flat product
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Measured net incoming mass attributable to the campaign; include only when the declared input state is cold-rolled
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1,000 kg net saleable reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_feedstock_mass_balance`
- Sources: `unsd-cpc-3-0-structure-2025`

###### Receiving and preparation electricity (`receiving_electricity`)

This atomic exchange crosses the declared process boundary when its route condition applies; its quantity is obtained as specified below.

- Selected flow: Alternating current
- Flow property / unit: Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- Amount rule: Metered or equipment-runtime-allocated electricity converted to MJ
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg net saleable reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_stage_energy`
- Sources:

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Prepared alloy-steel intermediate (`prepared_alloy_steel_intermediate`)

This atomic exchange crosses the declared process boundary when its route condition applies; its quantity is obtained as specified below.

- Selected flow: Prepared alloy-steel flat-product intermediate
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Measured transfer mass to the first declared further-working operation
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1,000 kg net saleable reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_feedstock_mass_balance`
- Sources:

##### Waste flows

##### Elementary flows

### Process: Pickling, rinsing, and drying (`pickling_rinsing`)

#### Inputs

##### Product flows

###### Pickling-stage alloy-steel feed (`pickling_feedstock_intermediate`)

This atomic exchange crosses the declared process boundary when its route condition applies; its quantity is obtained as specified below.

- Selected flow: Alloy-steel flat-product intermediate entering pickling
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Measured line-entry mass
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1,000 kg net saleable reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_pickling_records`
- Sources: `eu-jrc-fmp-bref-2022`

###### Hydrochloric acid pickling agent (`hydrochloric_acid`)

This atomic exchange crosses the declared process boundary when its route condition applies; its quantity is obtained as specified below.

- Selected flow: Hydrochloric acid solution
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: As-supplied consumption from stock balance; include only when used and declare concentration
- Value mode: Foreground record (`foreground_record`)
- Specificity: Route-specific (`route_specific`)
- Normalization basis: per 1,000 kg net saleable reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_pickling_records`
- Sources: `eu-jrc-fmp-bref-2022`

###### Demineralized rinse water (`demineralized_rinse_water`)

This atomic exchange crosses the declared process boundary when its route condition applies; its quantity is obtained as specified below.

- Selected flow: Demineralized water `9385842f-1815-4f19-a6b9-3dbb7ccbbffc`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Metered fresh make-up volume excluding internal recirculation, converted to mass using measured or documented density at declared reference conditions
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg net saleable reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_pickling_records`
- Sources: `eu-jrc-fmp-bref-2022`

###### Pickling electricity (`pickling_electricity`)

This atomic exchange crosses the declared process boundary when its route condition applies; its quantity is obtained as specified below.

- Selected flow: Alternating current
- Flow property / unit: Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- Amount rule: Submetered electricity or documented equipment allocation converted to MJ
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg net saleable reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_stage_energy`
- Sources: `eu-jrc-fmp-bref-2022`

###### Pickling natural gas (`pickling_natural_gas`)

This atomic exchange crosses the declared process boundary when its route condition applies; its quantity is obtained as specified below.

- Selected flow: natural gas in the gaseous state `4f19ca0e-7b3b-11dd-ad8b-0800200c9a66`
- Flow property / unit: Volume `93a60a56-a3c8-22da-a746-0800200c9a66` / m3
- Amount rule: Metered gas for bath heating, drying, or attributable acid recovery at declared reference conditions
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1,000 kg net saleable reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_stage_fuel_and_emissions`
- Sources: `eu-jrc-fmp-bref-2022`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Pickled alloy-steel intermediate (`pickled_alloy_steel_intermediate`)

This atomic exchange crosses the declared process boundary when its route condition applies; its quantity is obtained as specified below.

- Selected flow: Pickled alloy-steel flat-product intermediate
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Measured rinsed and dried transfer mass
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1,000 kg net saleable reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_pickling_records`
- Sources: `eu-jrc-fmp-bref-2022`

##### Waste flows

###### Acidic pickling effluent (`acidic_pickling_effluent`)

This atomic exchange crosses the declared process boundary when its route condition applies; its quantity is obtained as specified below.

- Selected flow: Acidic alloy-steel pickling effluent
- Flow property / unit: Volume / m3
- Amount rule: Net treatment-feed volume after internal recirculation
- Value mode: Foreground record (`foreground_record`)
- Specificity: Route-specific (`route_specific`)
- Normalization basis: per 1,000 kg net saleable reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_pickling_records`
- Sources: `eu-jrc-fmp-bref-2022`

##### Elementary flows

###### Fossil carbon dioxide from pickling heat (`pickling_fossil_co2`)

This atomic exchange crosses the declared process boundary when its route condition applies; its quantity is obtained as specified below.

- Selected flow: carbon dioxide (fossil) `08a91e70-3ddc-11dd-923d-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Calculated from pickling natural gas and documented site or supplier carbon factor
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg net saleable reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_stage_fuel_and_emissions`
- Sources:

### Process: Cold reduction (`cold_reduction`)

#### Inputs

##### Product flows

###### Cold-rolling feedstock (`cold_rolling_feedstock`)

This atomic exchange crosses the declared process boundary when its route condition applies; its quantity is obtained as specified below.

- Selected flow: Pickled alloy-steel flat product entering cold reduction
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Measured mill-entry mass
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1,000 kg net saleable reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_cold_rolling_records`
- Sources: `eu-jrc-fmp-bref-2022`

###### Rolling oil (`rolling_oil`)

This atomic exchange crosses the declared process boundary when its route condition applies; its quantity is obtained as specified below.

- Selected flow: Cold-rolling lubricant oil
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Fresh rolling-oil make-up from stock balance, excluding recirculated oil
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1,000 kg net saleable reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_cold_rolling_records`
- Sources: `eu-jrc-fmp-bref-2022`

###### Cold-rolling electricity (`cold_rolling_electricity`)

This atomic exchange crosses the declared process boundary when its route condition applies; its quantity is obtained as specified below.

- Selected flow: Alternating current
- Flow property / unit: Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- Amount rule: Submetered electricity or documented equipment allocation converted to MJ
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg net saleable reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_stage_energy`
- Sources: `eu-jrc-fmp-bref-2022`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Cold-rolled alloy-steel intermediate (`cold_rolled_alloy_steel_intermediate`)

This atomic exchange crosses the declared process boundary when its route condition applies; its quantity is obtained as specified below.

- Selected flow: Cold-rolled alloy-steel flat-product intermediate
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Measured mill-exit mass at declared gauge
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1,000 kg net saleable reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_cold_rolling_records`
- Sources: `eu-jrc-fmp-bref-2022`

##### Waste flows

###### Cold-rolling alloy-steel scrap (`cold_rolling_steel_scrap`)

This atomic exchange crosses the declared process boundary when its route condition applies; its quantity is obtained as specified below.

- Selected flow: Alloy-steel scrap from cold rolling
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Weighed clean edge trim and rejected alloy-steel output with destination declared
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1,000 kg net saleable reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_cold_rolling_records`
- Sources: `worldsteel-lci-methodology-2017`

##### Elementary flows

### Process: Annealing or heat treatment (`annealing_heat_treatment`)

#### Inputs

##### Product flows

###### Annealing feedstock (`annealing_feedstock`)

This atomic exchange crosses the declared process boundary when its route condition applies; its quantity is obtained as specified below.

- Selected flow: Alloy-steel flat-product intermediate entering annealing
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Measured furnace-entry mass
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1,000 kg net saleable reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_annealing_records`
- Sources: `eu-jrc-fmp-bref-2022`

###### Protective nitrogen (`protective_nitrogen`)

This atomic exchange crosses the declared process boundary when its route condition applies; its quantity is obtained as specified below.

- Selected flow: Nitrogen gas for protective annealing atmosphere
- Flow property / unit: Volume / m3
- Amount rule: Metered or supplier-recorded volume at declared reference conditions; include only when used
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1,000 kg net saleable reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_annealing_records`
- Sources: `eu-jrc-fmp-bref-2022`

###### Annealing electricity (`annealing_electricity`)

This atomic exchange crosses the declared process boundary when its route condition applies; its quantity is obtained as specified below.

- Selected flow: Alternating current
- Flow property / unit: Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- Amount rule: Submetered electricity for heating and auxiliaries or documented equipment allocation converted to MJ
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1,000 kg net saleable reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_stage_energy`
- Sources: `eu-jrc-fmp-bref-2022`

###### Annealing natural gas (`annealing_natural_gas`)

This atomic exchange crosses the declared process boundary when its route condition applies; its quantity is obtained as specified below.

- Selected flow: natural gas in the gaseous state `4f19ca0e-7b3b-11dd-ad8b-0800200c9a66`
- Flow property / unit: Volume `93a60a56-a3c8-22da-a746-0800200c9a66` / m3
- Amount rule: Metered furnace gas at declared reference conditions; include only for gas-fired heat treatment
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1,000 kg net saleable reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_stage_fuel_and_emissions`
- Sources: `eu-jrc-fmp-bref-2022`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Annealed alloy-steel intermediate (`annealed_alloy_steel_intermediate`)

This atomic exchange crosses the declared process boundary when its route condition applies; its quantity is obtained as specified below.

- Selected flow: Annealed alloy-steel flat-product intermediate
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Measured furnace-exit mass with achieved properties and surface state declared
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1,000 kg net saleable reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_annealing_records`
- Sources: `worldsteel-finished-cold-rolled-coil-2026`

##### Waste flows

##### Elementary flows

###### Fossil carbon dioxide from annealing (`annealing_fossil_co2`)

This atomic exchange crosses the declared process boundary when its route condition applies; its quantity is obtained as specified below.

- Selected flow: carbon dioxide (fossil) `08a91e70-3ddc-11dd-923d-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Calculated from annealing natural gas and documented site or supplier carbon factor
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg net saleable reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_stage_fuel_and_emissions`
- Sources:

### Process: Temper or skin-pass rolling (`temper_skin_pass`)

#### Inputs

##### Product flows

###### Temper-rolling feedstock (`temper_feedstock`)

This atomic exchange crosses the declared process boundary when its route condition applies; its quantity is obtained as specified below.

- Selected flow: Alloy-steel flat-product intermediate entering temper rolling
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Measured temper-mill entry mass
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1,000 kg net saleable reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_temper_finishing_records`
- Sources: `eu-jrc-fmp-bref-2022`

###### Temper-rolling electricity (`temper_electricity`)

This atomic exchange crosses the declared process boundary when its route condition applies; its quantity is obtained as specified below.

- Selected flow: Alternating current
- Flow property / unit: Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- Amount rule: Submetered electricity or documented equipment allocation converted to MJ
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg net saleable reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_stage_energy`
- Sources: `eu-jrc-fmp-bref-2022`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Tempered alloy-steel intermediate (`tempered_alloy_steel_intermediate`)

This atomic exchange crosses the declared process boundary when its route condition applies; its quantity is obtained as specified below.

- Selected flow: Tempered alloy-steel flat-product intermediate
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Measured temper-mill exit mass with achieved surface and property qualifiers
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1,000 kg net saleable reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_temper_finishing_records`
- Sources: `eu-jrc-fmp-bref-2022`

##### Waste flows

##### Elementary flows

### Process: Zinc metallic coating (`metallic_coating`)

#### Inputs

##### Product flows

###### Metallic-coating feedstock (`coating_feedstock`)

This atomic exchange crosses the declared process boundary when its route condition applies; its quantity is obtained as specified below.

- Selected flow: Alloy-steel flat-product intermediate entering zinc coating
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Measured coating-line entry mass
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1,000 kg net saleable reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_coating_records`
- Sources: `eu-jrc-fmp-bref-2022`

###### Zinc coating metal (`coating_zinc`)

This atomic exchange crosses the declared process boundary when its route condition applies; its quantity is obtained as specified below.

- Selected flow: Zinc metal for strip coating
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Net zinc input from stock balance; declare grade and add separate atomic rows for any alloy additions
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1,000 kg net saleable reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_coating_records`
- Sources: `eu-jrc-fmp-bref-2022`

###### Coating-line electricity (`coating_electricity`)

This atomic exchange crosses the declared process boundary when its route condition applies; its quantity is obtained as specified below.

- Selected flow: Alternating current
- Flow property / unit: Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- Amount rule: Submetered electricity or documented equipment allocation converted to MJ
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg net saleable reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_stage_energy`
- Sources: `eu-jrc-fmp-bref-2022`

###### Coating-line natural gas (`coating_natural_gas`)

This atomic exchange crosses the declared process boundary when its route condition applies; its quantity is obtained as specified below.

- Selected flow: natural gas in the gaseous state `4f19ca0e-7b3b-11dd-ad8b-0800200c9a66`
- Flow property / unit: Volume `93a60a56-a3c8-22da-a746-0800200c9a66` / m3
- Amount rule: Metered gas for directly associated cleaning, heat treatment, or bath support
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1,000 kg net saleable reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_stage_fuel_and_emissions`
- Sources: `eu-jrc-fmp-bref-2022`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Zinc-coated alloy-steel intermediate (`coated_alloy_steel_intermediate`)

This atomic exchange crosses the declared process boundary when its route condition applies; its quantity is obtained as specified below.

- Selected flow: Zinc-coated alloy-steel flat-product intermediate
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Measured coating-line exit mass with coating mass and coated area declared
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1,000 kg net saleable reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_coating_records`
- Sources: `eu-jrc-fmp-bref-2022`

##### Waste flows

##### Elementary flows

###### Fossil carbon dioxide from coating-line heat (`coating_fossil_co2`)

This atomic exchange crosses the declared process boundary when its route condition applies; its quantity is obtained as specified below.

- Selected flow: carbon dioxide (fossil) `08a91e70-3ddc-11dd-923d-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Calculated from coating-line natural gas and documented site or supplier carbon factor
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg net saleable reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_stage_fuel_and_emissions`
- Sources:

### Process: Finishing and packaging (`finishing_packaging`)

#### Inputs

##### Product flows

###### Finishing-stage alloy-steel feed (`finishing_feedstock`)

This atomic exchange crosses the declared process boundary when its route condition applies; its quantity is obtained as specified below.

- Selected flow: Further-worked alloy-steel flat-product intermediate entering finishing
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Measured finishing-line entry mass
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1,000 kg net saleable reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_temper_finishing_records`
- Sources: `eu-jrc-fmp-bref-2022`

###### Anticorrosion oil (`anticorrosion_oil`)

This atomic exchange crosses the declared process boundary when its route condition applies; its quantity is obtained as specified below.

- Selected flow: Anticorrosion oil for finished alloy-steel strip
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: As-supplied stock-balance consumption; include only when intentionally applied
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1,000 kg net saleable reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_temper_finishing_records`
- Sources: `eu-jrc-fmp-bref-2022`

###### Steel strapping (`steel_strapping`)

This atomic exchange crosses the declared process boundary when its route condition applies; its quantity is obtained as specified below.

- Selected flow: Steel packaging strap
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Mass delivered with product, excluding reusable plant-internal bands
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1,000 kg net saleable reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_records`
- Sources: `eu-jrc-fmp-bref-2022`

###### Finishing and packaging electricity (`finishing_electricity`)

This atomic exchange crosses the declared process boundary when its route condition applies; its quantity is obtained as specified below.

- Selected flow: Alternating current
- Flow property / unit: Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- Amount rule: Submetered electricity or documented equipment allocation converted to MJ
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg net saleable reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_stage_energy`
- Sources: `eu-jrc-fmp-bref-2022`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Finished further-worked alloy-steel product (`finished_alloy_steel_product`)

This atomic exchange crosses the declared process boundary when its route condition applies; its quantity is obtained as specified below.

- Selected flow: Flat-rolled products of alloy steel, n.e.c., further worked
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Measured net saleable output normalized to 1,000 kg, excluding removable transport packaging
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1,000 kg net saleable reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_feedstock_mass_balance`
- Sources: `worldsteel-finished-cold-rolled-coil-2026`

##### Waste flows

##### Elementary flows

### Process: On-site cold-processing wastewater treatment (`wastewater_treatment`)

#### Inputs

##### Product flows

###### Sodium hydroxide neutralizing agent (`sodium_hydroxide`)

This atomic exchange crosses the declared process boundary when its route condition applies; its quantity is obtained as specified below.

- Selected flow: Sodium hydroxide solution
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: As-supplied stock-balance consumption with concentration declared; include only when used
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg net saleable reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_wastewater_treatment_records`
- Sources: `eu-jrc-fmp-bref-2022`

###### Wastewater-treatment electricity (`wastewater_treatment_electricity`)

This atomic exchange crosses the declared process boundary when its route condition applies; its quantity is obtained as specified below.

- Selected flow: Alternating current
- Flow property / unit: Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- Amount rule: Submetered electricity or documented equipment allocation converted to MJ
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg net saleable reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_stage_energy`
- Sources: `eu-jrc-fmp-bref-2022`

##### Waste flows

###### Cold-processing wastewater treatment feed (`wastewater_treatment_feed`)

This atomic exchange crosses the declared process boundary when its route condition applies; its quantity is obtained as specified below.

- Selected flow: Cold-processing wastewater treatment feed from alloy-steel finishing
- Flow property / unit: Volume / m3
- Amount rule: Metered net treatment-feed volume after internal recirculation
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg net saleable reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_wastewater_treatment_records`
- Sources: `eu-jrc-fmp-bref-2022`

##### Elementary flows

#### Outputs

##### Product flows

##### Waste flows

###### Dewatered metal-hydroxide sludge (`metal_hydroxide_sludge`)

This atomic exchange crosses the declared process boundary when its route condition applies; its quantity is obtained as specified below.

- Selected flow: Dewatered metal-hydroxide sludge from cold-processing wastewater
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Weighed wet mass with dry-solids fraction, metal content, and destination declared
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg net saleable reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_wastewater_treatment_records`
- Sources: `eu-jrc-fmp-bref-2022`

##### Elementary flows

## 7. Allocation and Co-product Handling

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `allocation_avoid_by_subdivision` | Multi-product lines and shared utilities | Prefer campaign, meter, runtime, mass-throughput, coated-area, or treated-volume subdivision before allocation; document every shared-service driver. | `worldsteel-lci-methodology-2017` |
| `allocation_internal_scrap` | Scrap returned inside the represented site | Record scrap mass and destination, but do not count it as external scrap input or grant an avoided-product credit in the foreground inventory. | `worldsteel-lci-methodology-2017` |
| `allocation_exported_residues` | Scrap, scale, recovered acid, or sludge leaving the boundary | Record each physical output without a foreground avoided-burden credit; report any downstream system expansion or recycling method separately. | `worldsteel-lci-methodology-2017` |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_feedstock_mass_balance` | `feedstock_receiving_preparation`; `finishing_packaging` | Feedstock, intermediate, product mass | Scale and coil-genealogy records | coil id; alloy; state; gross; tare; scrap; saleable mass; time | Reconcile calibrated scales to genealogy | kg | Each coil and campaign | Representative 12 months or full shorter campaign | Included lines | Sum and normalize by net saleable output | Calibration and stock reconciliation |
| `cp_stage_energy` | All stages | Electricity | Submeters and reconciled main meter | meter; readings; runtime; load; driver; supplier; voltage | Prefer submetering; otherwise documented equipment allocation | kWh, MJ | Monthly and campaign | Same production period | Included equipment | Convert to MJ and normalize by saleable output | Calibration, invoices, allocation worksheet |
| `cp_stage_fuel_and_emissions` | `pickling_rinsing`; `annealing_heat_treatment`; `metallic_coating` | Natural gas and direct CO2 | Fuel meters, invoices, factors | volume; conditions; calorific value; carbon factor; oxidation factor; attribution | Reconcile meters and calculate CO2 from documented factor | m3, MJ, kg | Monthly and campaign | Same production period | Each combustion unit | Attribute by stage and normalize | Calibration, supplier statement, formula check |
| `cp_pickling_records` | `pickling_rinsing` | Steel, acid, water, effluent | Line, tank, meter, waste records | input/output mass; acid and concentration; stock; recovery; water; effluent | Reconcile line and inventories | kg, m3, m2 | Campaign and monthly | Same production period | Pickling and recovery | Net make-up and outputs only | Calibration, analysis, manifests |
| `cp_cold_rolling_records` | `cold_reduction` | Steel, oil, scrap | Mill, stock, waste records | input/output mass; gauge; oil stock; scrap; destination | Reconcile genealogy and inventories | kg | Campaign and monthly | Same production period | Rolling and support equipment | Net make-up and outputs | Calibration and manifests |
| `cp_annealing_records` | `annealing_heat_treatment` | Steel and nitrogen | Furnace and gas records | coil mass; furnace; cycle; temperature; nitrogen; purity; conditions | Link furnace batches to genealogy | kg, m3 | Batch or campaign | Same production period | Included furnaces | Sum route-specific records | Log completeness and calibration |
| `cp_temper_finishing_records` | `temper_skin_pass`; `finishing_packaging` | Steel, oil, losses | Line, stock, inspection records | mass; oil; trim; rejects; rework; surface state | Reconcile genealogy and stock | kg | Campaign and monthly | Same production period | Temper and finishing | Count rework once and normalize | Calibration and dispositions |
| `cp_coating_records` | `metallic_coating` | Substrate, zinc, coated product | Line, metal, coating-test records | substrate/output; zinc stock; area; coating mass | Reconcile metal inventory and measured coating | kg, m2 | Campaign and monthly | Same production period | Zinc coating line | Close zinc and substrate balances | Calibration and coating test |
| `cp_packaging_records` | `finishing_packaging` | Delivered steel strap | Bill of materials and issue records | material; mass per item; count; return status | Weigh items and reconcile to shipments | kg, item | Configuration and campaign | Same production period | Delivered packaging | Convert counts to mass | Weighing and bill of materials |
| `cp_wastewater_treatment_records` | `wastewater_treatment` | Feed, NaOH, sludge | Flow, chemical, lab, waste records | feed; pH; reagent concentration; stock; sludge wet/dry mass; metals; destination | Reconcile flow, chemistry, and sludge | m3, kg | Daily or batch and monthly | Same production period | On-site treatment | Allocate by flow and pollutant load | Calibration, lab QA/QC, manifests |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_normalize_to_reference_mass` | All rows | normalized amount = campaign amount / campaign net saleable mass × 1,000 kg | Campaign exchange; saleable mass | Exchange per reference flow | |
| `calc_electricity_to_mj` | Electricity | MJ = metered kWh × 3.6 | kWh | MJ | |
| `calc_direct_fossil_co2` | Direct fossil CO2 | CO2 = stage fuel quantity × documented carbon factor × oxidation factor | Fuel, conditions, factors | kg fossil CO2 | |
| `calc_mass_balance_check` | Material stages | unexplained difference = inputs − measured product and waste outputs; investigate rather than allocate | Inputs, outputs, stock change | Difference | |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_product_identity` | Product and intermediates | Preserve genealogy from incoming alloy and state through final dimensions, properties, surface, coating, and packaging. | Specification, mill certificate, route sheet |
| `dq_temporal_alignment` | All records | Use one representative period and explain shutdowns, trials, abnormal campaigns, and substitutions. | Period reconciliation and exception log |
| `dq_meter_scale_control` | Measured exchanges | Retain calibration or verification evidence for scales, utility and flow meters, and laboratory methods. | Calibration and QA/QC records |
| `dq_route_completeness` | Conditional processes | Justify each inclusion/exclusion and prevent double counting across coupled lines. | Route decision and cross-process reconciliation |
| `dq_supplier_representativeness` | Purchased inputs | Match grade, state, geography, technology, and period; disclose proxies. | Supplier declaration and dataset selection |

## 9. Validation Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `validate_identity_and_reference_flow` | Product dataset | Confirm PCR id, CPC context, required qualifiers, and exactly 1,000 kg net saleable reference product. | `unsd-cpc-3-0-structure-2025`; `worldsteel-finished-cold-rolled-coil-2026` |
| `validate_route_and_atomic_inventory` | Process map and inventory | Confirm every included process occurred, every absent conditional step is documented, and every row is one atomic exchange. | `eu-jrc-fmp-bref-2022` |
| `validate_mass_internal_transfers` | Material balances | Reconcile feedstock, intermediates, saleable product, scrap, zinc, sludge, and stock changes; flag every unexplained difference. | `eu-jrc-fmp-bref-2022` |
| `validate_energy_direct_co2` | Electricity, gas, and CO2 | Reconcile meters and invoices, verify conversions and gas conditions, and calculate direct fossil CO2 once. | |
| `validate_recycling_allocation` | Scrap and exported outputs | Confirm internal scrap is not external input, exported outputs receive no foreground credit, and downstream recycling is separately declared. | `worldsteel-lci-methodology-2017` |
| `validate_unresolved_evidence` | Candidate use | Treat blank UUIDs and missing independent ranges as review needs; do not use proxies or invented intervals. | |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | Foreground production dataset for further working of a declared flat-rolled alloy-steel input |
| downstream_use | `secondary_dataset`; `background_dataset` after review and resolution of evidence gaps |
| allowed_use | LCA, carbon-footprint, EPD, supply-chain, and improvement studies matching alloy, incoming state, route, geography, period, and market state |
| excluded_use | Upstream steelmaking; excluded steel categories; fabrication; use; end-of-life; undisclosed generic substitution |
| required_metadata | PCR and CPC context; alloy; supplier and incoming state; process sequence; site; period; dimensions; surface/coating; energy; water and acid systems; scrap; packaging; allocation and recycling method |
| required_quality_disclosure | Coverage, meter quality, supplier representativeness, route exclusions, shared-service allocation, mass-balance gaps, proxies, unresolved UUIDs, and unresolved ranges |
| update_trigger | Change in alloy, incoming state, route, furnace/coating technology, energy, acid/water system, specification, packaging, site, or period |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `unsd-cpc-3-0-structure-2025` | Official guidance (`official_guidance`) | United Nations Statistics Division, *CPC Version 3.0 Structure*, 30 June 2025. https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Structure_30Jun2025.csv (retrieved 2026-09-03) | CPC 41239 identity |
| `eu-jrc-fmp-bref-2022` | Official guidance (`official_guidance`) | European Commission Joint Research Centre, *Best Available Techniques Reference Document for the Ferrous Metals Processing Industry*, 2022. https://bureau-industrial-transformation.jrc.ec.europa.eu/sites/default/files/2022-12/FMP%20BREF_Final%20Version.pdf (retrieved 2026-09-03) | Boundary, processes, exchanges, water, and waste treatment |
| `worldsteel-lci-methodology-2017` | Method factor (`method_factor`) | World Steel Association, *Life Cycle Inventory Methodology Report*, 2017. https://worldsteel.org/media/publications/lci-report-2017-pdf/?do_download_id=7f96813a-3756-4842-8dbc-38ce201f2914 (retrieved 2026-09-03) | Process chain, allocation, scrap, recycling |
| `worldsteel-finished-cold-rolled-coil-2026` | Dataset (`dataset`) | World Steel Association, *Global Finished Cold Rolled Coil - Construction*, April 2026. https://worldsteel.org/wider-sustainability/life-cycle-thinking/lca-eco-profiles-2026-release/global-finished-cold-rolled-coil-construction/ (retrieved 2026-09-03) | Declared unit and representative finished product state |
