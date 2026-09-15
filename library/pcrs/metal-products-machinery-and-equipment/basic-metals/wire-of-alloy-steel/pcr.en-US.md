---
pcr_id: pcr.metal-products-machinery-and-equipment.basic-metals.wire-of-alloy-steel
language: en-US
status: candidate
content_maturity: authored_methodology
translation_status: canonical
sync_with: pcr.zh-CN.md
---

# Wire of alloy steel

## 1. Scope and Applicability

This PCR applies to foreground production of alloy-steel wire made by reducing alloy-steel wire rod or partly drawn alloy-steel wire through dies. It covers required surface preparation, wire drawing, finishing and dispatch preparation, plus electric- or natural-gas-heated annealing and continuous zinc coating when those operations form part of the declared market state. It supports stainless, silico-manganese and other alloy-steel wire only when alloy grade, diameter, mechanical condition and surface condition are declared. Lead-bath patenting, oil hardening, non-zinc metallic coating, electroplating and organic coating require a reviewed methodology extension before use.

The foreground boundary starts when alloy-steel wire rod or partly drawn alloy-steel wire enters the reporting facility and ends when conforming wire is weighed and ready at the facility dispatch gate. Upstream steelmaking and wire-rod production, inbound and outbound transport, customer fabrication, use, maintenance and end-of-life are outside the foreground boundary and require separate datasets. Wire rope, stranded wire, insulated electrical wire, welding consumables, barbed wire, mesh and finished springs are excluded because they provide different product functions or require additional fabrication.

This candidate PCR does not provide externally inferred default inventory ranges. Important exchanges remain foreground collection requirements, and the unresolved evidence needs are recorded in the manifest until at least two independent, boundary-compatible original sources support a range.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.metal-products-machinery-and-equipment.basic-metals.wire-of-alloy-steel |
| classification_refs | CPC 3.0: 41267, Wire of alloy steel |
| covered_products | Cold-drawn wire of stainless steel, silico-manganese steel or other alloy steel, whether as-drawn, heat-treated, oiled or continuously zinc-coated, when sold as wire |
| excluded_products | Iron or non-alloy steel wire; hot-rolled wire rod sold without drawing; stranded wire and rope; insulated wire; welding wire products formulated as consumables; mesh, fasteners, springs and other fabricated articles |
| representative_product | Alloy-steel wire in coil or on a spool, meeting a declared grade, nominal diameter, mechanical condition and surface condition |
| production_route | Surface preparation followed by dry or wet die drawing; conditional thermal treatment; conditional continuous wire galvanising; finishing, inspection, coiling and dispatch packing |
| market_state | Finished alloy-steel wire at the producing facility dispatch gate, with packaging separately inventoried and excluded from reference-product mass |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Provision of alloy-steel wire meeting the declared chemical grade, dimensional tolerance, mechanical condition and surface specification at the producing facility dispatch gate |
| How much | 1,000 kg net mass of conforming alloy-steel wire |
| How well | Meets the declared purchaser or product specification for alloy grade, nominal diameter and tolerance, tensile or heat-treatment condition, surface or coating condition, and coil or spool form |
| How long or cycle | One production lot accepted at final inspection; no service life is modelled |
| reference_flow_link | The net weighed output in row reference_product_alloy_steel_wire |

| Field | Value |
| --- | --- |
| Reference amount | 1,000 kg |
| Reference product flow | Wire of alloy steel |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | alloy grade and applicable specification; stainless, silico-manganese or other alloy family; nominal diameter and tolerance; tensile or heat-treatment condition; uncoated, oiled or continuously zinc-coated surface state; zinc coating mass where applicable; dry or wet drawing route; facility geography; production period; coil, spool or straight-length form; packaging configuration |

When constructing a foreground data package, every required qualifier must be declared in dataset metadata, process notes, the reference-flow comment, the product description or an equivalent field. Missing qualifiers make the reference flow incomplete. The exact TianGong reference-product UUID remains unresolved and must not be replaced with a generic steel-wire proxy.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| `reference_product_mass` | Reference product and metal mass balance | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Determine net dry product mass on calibrated scales after final inspection; exclude pallets, spools, strapping and film from the reference-product mass and report those materials separately. |
| `metal_mass_balance` | Alloy-steel inputs, internal transfers, saleable wire and metal-bearing wastes | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Reconcile batch opening and closing work-in-process so input metal equals saleable wire plus metal-bearing waste and inventory change, with coating metal tracked separately. |
| `electricity_conversion` | Alternating-current inputs | Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` | MJ | Preserve metered kWh and convert to MJ using 1 kWh = 3.6 MJ; do not substitute a consumption-mix UUID unless its supplier, geography, voltage and delivery boundary match the site. |
| `natural_gas_volume` | Gaseous natural-gas inputs | Volume `93a60a56-a3c8-22da-a746-0800200c9a66` | m3 | Report metered gas volume at the stated reference temperature, pressure and moisture condition; retain the supplier net calorific value used for energy and CO2 calculations. |
| `coating_mass` | Zinc-coated wire | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Determine deposited zinc from measured wire mass and coating test records or a documented coating-area calculation; do not include zinc in the alloy-steel reference mass balance. |

## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Alloy-steel wire rod or partly drawn alloy-steel wire received at the reporting facility, with grade, mass, diameter, surface scale or coating state and upstream dataset identity declared |
| starting_condition_role | Upstream product input to the foreground conversion system |
| product_classification_scope | Alloy-steel wire sold as wire, including stainless, silico-manganese and other alloy grades; excludes non-alloy steel wire and downstream fabricated wire products |
| recursive_input_rule | If partly drawn alloy-steel wire in the same product category enters the facility, record it once as an upstream product input with its own upstream dataset and model only the additional on-site drawing and finishing; do not recursively recreate its prior production inside this foreground system. |
| upstream_dataset_requirement | Use a supplier-, grade-, geography- and technology-representative dataset for wire rod or partly drawn wire; disclose recycled-content and steelmaking-route assumptions. |
| disclosure | Declare starting diameter, final diameter, total section reduction, drawing medium, thermal-treatment route, coating route and mass, facility geography, production period, yield, packaging and every excluded operation. |

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `boundary_gate_to_gate` | Foreground conversion boundary | Include all on-site material and energy inputs, direct emissions, wastes and internal transfers from receipt of the declared wire input through final weighing and dispatch preparation. | `eu-jrc-fmp-bref-2022` |
| `boundary_route_conditionals` | Heat treatment and continuous galvanising | Include thermal treatment or continuous wire galvanising only when performed by the reporting facility for the declared product state; otherwise mark the process and its atomic exchanges not applicable. | `eu-jrc-fmp-bref-2022`; `eu-bat-ferrous-2022-2110` |
| `boundary_upstream_downstream` | Processes outside the foreground facility | Keep steelmaking, wire-rod production, transport, customer fabrication, use and end-of-life outside this foreground system and link them through separate representative datasets when the study scope requires them. | `eu-jrc-fmp-bref-2022` |
| `boundary_actual_chemicals_and_streams` | Process chemicals, waste water and waste gas | Identify and inventory each process chemical and each relevant waste-water or waste-gas stream actually present; do not use aggregated chemical, utility, waste or emission placeholders. | `eu-bat-ferrous-2022-2110` |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| `surface_preparation` | Wire-rod receipt and surface preparation | required | Always include receipt and preparation; acid, water and scale exchanges apply only to the declared mechanical-descaling or hydrochloric-pickling route. | Foreground feed preparation | Mass of prepared wire rod transferred to drawing |
| `wire_drawing` | Dry or wet wire drawing | required | Include the actual dry or wet die-drawing route; lubricant rows are route-conditional. | Foreground section reduction | Mass of drawn wire transferred from drawing |
| `thermal_treatment` | Wire thermal treatment | conditional | Include when electric- or natural-gas-heated annealing is performed after drawing; lead-bath patenting and oil hardening require methodology extension. | Foreground metallurgical conditioning | Mass of heat-treated wire output |
| `continuous_galvanising` | Continuous zinc coating of wire | conditional | Include only when the reporting facility continuously zinc-coats the declared wire; other metallic, electrolytic or organic coatings require methodology extension. | Foreground surface coating | Mass of galvanised wire output |
| `finishing_and_dispatch` | Finishing, inspection, coiling and dispatch packing | required | Include the one applicable incoming wire-state row and every actual finishing and packing exchange. | Foreground final product preparation | Net mass of accepted alloy-steel wire |

### Process: Wire-rod receipt and surface preparation (`surface_preparation`)

#### Inputs

##### Product flows

###### Alloy-steel wire-rod feedstock (`alloy_steel_wire_rod`)

Record the weighed alloy-steel wire rod or partly drawn wire entering the facility, with grade and upstream dataset.

- Selected flow: Alloy-steel wire rod
- Flow property / unit: Mass / kg
- Amount rule: measured batch input mass
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1,000 kg accepted reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_metal_mass_balance`
- Sources: `un-cpc-3-structure-2025`

###### Surface-preparation water (`surface_prep_water`)

Include make-up water entering pickling, rinsing or wet mechanical descaling; exclude internally recycled water from gross input.

- Selected flow: Process Water `94a04f7e-2d5c-41f0-b182-d54a3b373a02`
- Flow property / unit: Mass / kg
- Amount rule: measured make-up-water mass consumed by surface preparation; when only volume is metered, convert with the measured batch density and retain the volume reference conditions
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1,000 kg prepared wire rod
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_surface_preparation`
- Sources: `eu-bat-ferrous-2022-2110`

###### Hydrochloric acid for pickling (`hydrochloric_acid_pickling`)

Include only when hydrochloric-acid pickling is used; record delivered solution mass and concentration.

- Selected flow: Hydrochloric acid solution
- Flow property / unit: Mass / kg
- Amount rule: measured delivered solution consumed, accompanied by mass fraction HCl
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1,000 kg pickled wire rod
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_surface_preparation`
- Sources: `eu-bat-ferrous-2022-2110`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Prepared alloy-steel wire rod (`prepared_alloy_steel_wire_rod`)

Record the measured internal transfer after scale removal and rinsing, before die drawing.

- Selected flow: Prepared alloy-steel wire rod
- Flow property / unit: Mass / kg
- Amount rule: measured internal transfer mass
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per surface-preparation batch
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_metal_mass_balance`
- Sources: `eu-jrc-fmp-bref-2022`

##### Waste flows

###### Iron-oxide scale (`iron_oxide_scale`)

Include scale collected by mechanical descaling or removed from bath cleaning as a separately weighed waste.

- Selected flow: Mill scale `aad763e2-78ab-4fcb-8a3b-8d8525c9e6ca`
- Flow property / unit: Mass / kg
- Amount rule: measured wet or dry waste mass with moisture basis declared
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1,000 kg prepared wire rod
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_surface_preparation`
- Sources: `eu-jrc-fmp-bref-2022`

###### Spent hydrochloric pickling liquor (`spent_hydrochloric_pickling_liquor`)

Include only for hydrochloric pickling and report the waste solution mass, acid concentration, dissolved metals and destination.

- Selected flow: Spent hydrochloric-acid pickling liquor
- Flow property / unit: Mass / kg
- Amount rule: measured waste solution sent to recovery or treatment
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1,000 kg pickled wire rod
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_surface_preparation`
- Sources: `eu-bat-ferrous-2022-2110`

##### Elementary flows

### Process: Dry or wet wire drawing (`wire_drawing`)

#### Inputs

##### Product flows

###### Prepared wire-rod input (`prepared_wire_rod_input`)

Record the internal prepared wire-rod mass entering the drawing machines.

- Selected flow: Prepared alloy-steel wire rod
- Flow property / unit: Mass / kg
- Amount rule: measured internal input mass
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per wire-drawing batch
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_metal_mass_balance`
- Sources: `eu-jrc-fmp-bref-2022`

###### Wire-drawing electricity (`drawing_electricity`)

Record alternating-current electricity metered to drawing machines and directly associated extraction and lubricant circulation.

- Selected flow: Alternating current `455f0ef5-6118-4f2b-a3f5-1f75e0afe3ca`
- Flow property / unit: Net calorific value / MJ
- Amount rule: submetered electricity converted from kWh to MJ
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg drawn wire
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_electricity`
- Sources: `eu-bat-ferrous-2022-2110`

###### Calcium-stearate dry-drawing lubricant (`calcium_stearate_lubricant`)

Include only for dry drawing that consumes calcium-stearate lubricant.

- Selected flow: Calcium stearate
- Flow property / unit: Mass / kg
- Amount rule: measured fresh lubricant charged minus separately recovered unused lubricant
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1,000 kg dry-drawn wire
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_drawing_lubricant`
- Sources: `eu-jrc-fmp-bref-2022`

###### Oil-in-water wire-drawing emulsion (`wire_drawing_emulsion`)

Include only for wet drawing using an oil-in-water emulsion; report concentrate and make-up water consistently.

- Selected flow: Oil-in-water wire-drawing emulsion
- Flow property / unit: Mass / kg
- Amount rule: measured fresh emulsion concentrate and make-up entering the drawing circuit
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1,000 kg wet-drawn wire
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_drawing_lubricant`
- Sources: `eu-bat-ferrous-2022-2110`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Drawn alloy-steel wire (`drawn_alloy_steel_wire`)

Record the internal drawn-wire mass before conditional thermal treatment, coating or finishing.

- Selected flow: Drawn alloy-steel wire
- Flow property / unit: Mass / kg
- Amount rule: measured internal transfer mass
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per wire-drawing batch
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_metal_mass_balance`
- Sources: `eu-jrc-fmp-bref-2022`

##### Waste flows

###### Alloy-steel wire-drawing scrap (`wire_drawing_scrap`)

Record cropped ends, broken wire and other separately collected alloy-steel scrap from drawing.

- Selected flow: Alloy-steel wire-drawing scrap
- Flow property / unit: Mass / kg
- Amount rule: measured scrap mass by batch
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1,000 kg drawn wire
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_metal_mass_balance`
- Sources:

###### Spent wire-drawing emulsion (`spent_wire_drawing_emulsion`)

Include only when wet-drawing emulsion is purged from the circuit; exclude the fraction cleaned and reused internally.

- Selected flow: Spent oil-in-water wire-drawing emulsion
- Flow property / unit: Mass / kg
- Amount rule: measured purge sent to off-site recovery or treatment
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1,000 kg wet-drawn wire
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_drawing_lubricant`
- Sources: `eu-bat-ferrous-2022-2110`

##### Elementary flows

### Process: Wire thermal treatment (`thermal_treatment`)

#### Inputs

##### Product flows

###### Drawn wire entering thermal treatment (`drawn_wire_heat_input`)

Include when the declared product receives an in-scope post-drawing thermal treatment.

- Selected flow: Drawn alloy-steel wire
- Flow property / unit: Mass / kg
- Amount rule: measured internal mass entering the furnace
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per thermal-treatment batch
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_metal_mass_balance`
- Sources: `eu-jrc-fmp-bref-2022`

###### Natural gas for wire heating (`thermal_natural_gas`)

Include only for natural-gas-heated furnaces and declare gas supply geography and reference-volume conditions.

- Selected flow: natural gas in the gaseous state `4f19ca0e-7b3b-11dd-ad8b-0800200c9a66`
- Flow property / unit: Volume / m3
- Amount rule: metered furnace natural-gas consumption
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1,000 kg heat-treated wire
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_thermal_energy`
- Sources: `eu-bat-ferrous-2022-2110`

###### Electricity for wire heating (`thermal_electricity`)

Include only for electric heating and associated treatment equipment.

- Selected flow: Alternating current `455f0ef5-6118-4f2b-a3f5-1f75e0afe3ca`
- Flow property / unit: Net calorific value / MJ
- Amount rule: submetered thermal-treatment electricity converted from kWh to MJ
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1,000 kg heat-treated wire
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_electricity`
- Sources: `eu-bat-ferrous-2022-2110`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Heat-treated alloy-steel wire (`heat_treated_alloy_steel_wire`)

Record the internal mass transferred after the declared thermal treatment and before coating or finishing.

- Selected flow: Heat-treated alloy-steel wire
- Flow property / unit: Mass / kg
- Amount rule: measured internal transfer mass
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per thermal-treatment batch
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_metal_mass_balance`
- Sources: `eu-jrc-fmp-bref-2022`

##### Waste flows

##### Elementary flows

###### Fossil carbon dioxide from wire heating (`thermal_fossil_co2_air`)

Include only for natural-gas combustion; use site measurement or the documented fuel-energy and fossil-carbon calculation.

- Selected flow: carbon dioxide (fossil) `08a91e70-3ddc-11dd-923d-0050c2490048`
- Flow property / unit: Mass / kg
- Amount rule: measured stack mass or calculated fossil CO2 from metered fuel energy and a documented factor
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1,000 kg heat-treated wire
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_combustion_co2`
- Sources: `ipcc-2006-stationary-combustion`

### Process: Continuous zinc coating of wire (`continuous_galvanising`)

#### Inputs

##### Product flows

###### Wire entering continuous galvanising (`wire_for_galvanising`)

Record the one route-qualified drawn or heat-treated internal wire stream entering the coating line.

- Selected flow: Alloy-steel wire for continuous galvanising
- Flow property / unit: Mass / kg
- Amount rule: measured internal input mass
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per galvanising campaign
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_metal_mass_balance`
- Sources: `eu-jrc-fmp-bref-2022`

###### Hydrochloric acid for galvanising-line pickling (`galvanising_hydrochloric_acid`)

Include when hydrochloric pickling is performed on the continuous galvanising line.

- Selected flow: Hydrochloric acid solution
- Flow property / unit: Mass / kg
- Amount rule: measured delivered solution consumed, accompanied by mass fraction HCl
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1,000 kg galvanised wire
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_galvanising_materials`
- Sources: `eu-bat-ferrous-2022-2110`

###### Refined zinc for coating bath (`zinc_metal_input`)

Record zinc added to the continuous coating bath, with purity, supplier and recycled-content information.

- Selected flow: Refined zinc metal
- Flow property / unit: Mass / kg
- Amount rule: measured zinc additions adjusted for opening and closing bath inventory
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1,000 kg galvanised wire
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_galvanising_materials`
- Sources: `eu-jrc-fmp-bref-2022`

###### Zinc-ammonium-chloride flux (`zinc_ammonium_chloride_flux`)

Include only when this declared flux formulation is used before zinc immersion.

- Selected flow: Zinc-ammonium-chloride galvanising flux
- Flow property / unit: Mass / kg
- Amount rule: measured fresh flux consumed, with formulation declared
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1,000 kg galvanised wire
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_galvanising_materials`
- Sources: `eu-jrc-fmp-bref-2022`

###### Natural gas for galvanising-line heating (`galvanising_natural_gas`)

Include only for natural-gas-fired coating-bath or directly associated feedstock heating.

- Selected flow: natural gas in the gaseous state `4f19ca0e-7b3b-11dd-ad8b-0800200c9a66`
- Flow property / unit: Volume / m3
- Amount rule: metered galvanising-line natural-gas consumption
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1,000 kg galvanised wire
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_thermal_energy`
- Sources: `eu-bat-ferrous-2022-2110`

###### Electricity for continuous galvanising (`galvanising_electricity`)

Record electricity metered to the coating line, bath equipment, extraction and finishing equipment.

- Selected flow: Alternating current `455f0ef5-6118-4f2b-a3f5-1f75e0afe3ca`
- Flow property / unit: Net calorific value / MJ
- Amount rule: submetered galvanising electricity converted from kWh to MJ
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg galvanised wire
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_electricity`
- Sources: `eu-bat-ferrous-2022-2110`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Galvanised alloy-steel wire (`galvanised_alloy_steel_wire`)

Record coated wire mass after the zinc bath and before final finishing.

- Selected flow: Continuously zinc-coated alloy-steel wire
- Flow property / unit: Mass / kg
- Amount rule: measured internal transfer mass
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per galvanising campaign
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_metal_mass_balance`
- Sources: `eu-jrc-fmp-bref-2022`

##### Waste flows

###### Spent galvanising pickling liquor (`galvanising_spent_pickling_liquor`)

Include discharged pickling liquor from the coating line, with acid and dissolved-metal composition.

- Selected flow: Spent hydrochloric-acid galvanising pickling liquor
- Flow property / unit: Mass / kg
- Amount rule: measured waste solution sent to recovery or treatment
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1,000 kg galvanised wire
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_galvanising_wastes`
- Sources: `eu-bat-ferrous-2022-2110`

###### Zinc dross (`zinc_dross`)

Record dross removed from the zinc bath separately from saleable coated wire.

- Selected flow: Zinc dross from continuous wire galvanising
- Flow property / unit: Mass / kg
- Amount rule: measured dross mass and zinc content
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1,000 kg galvanised wire
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_galvanising_wastes`
- Sources: `eu-bat-ferrous-2022-2110`

###### Acidic galvanising wastewater (`acidic_galvanising_wastewater`)

Record the discharged acidic wastewater after internal reuse, with treatment destination and composition.

- Selected flow: Acidic wastewater from continuous wire galvanising
- Flow property / unit: Volume / m3
- Amount rule: measured discharge volume after internal recycle
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg galvanised wire
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_galvanising_wastes`
- Sources: `eu-bat-ferrous-2022-2110`

##### Elementary flows

###### Fossil carbon dioxide from galvanising heating (`galvanising_fossil_co2_air`)

Include only for on-site natural-gas combustion serving the continuous galvanising line.

- Selected flow: carbon dioxide (fossil) `08a91e70-3ddc-11dd-923d-0050c2490048`
- Flow property / unit: Mass / kg
- Amount rule: measured stack mass or calculated fossil CO2 from metered fuel energy and a documented factor
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1,000 kg galvanised wire
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_combustion_co2`
- Sources: `ipcc-2006-stationary-combustion`

### Process: Finishing, inspection, coiling and dispatch packing (`finishing_and_dispatch`)

#### Inputs

##### Product flows

###### Unheated uncoated drawn-wire input (`drawn_wire_finishing_input`)

Use only when the finished product is drawn wire without in-scope heat treatment or continuous galvanising.

- Selected flow: Drawn alloy-steel wire
- Flow property / unit: Mass / kg
- Amount rule: measured internal input mass
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per finishing batch
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_metal_mass_balance`
- Sources:

###### Heat-treated uncoated wire input (`heat_treated_wire_finishing_input`)

Use only when thermal treatment is included and continuous galvanising is not included.

- Selected flow: Heat-treated alloy-steel wire
- Flow property / unit: Mass / kg
- Amount rule: measured internal input mass
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per finishing batch
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_metal_mass_balance`
- Sources:

###### Galvanised-wire input (`galvanised_wire_finishing_input`)

Use only when continuous galvanising is included.

- Selected flow: Continuously zinc-coated alloy-steel wire
- Flow property / unit: Mass / kg
- Amount rule: measured internal input mass
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per finishing batch
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_metal_mass_balance`
- Sources:

###### Finishing electricity (`finishing_electricity`)

Record electricity for straightening where applicable, coiling, inspection and packing equipment.

- Selected flow: Alternating current `455f0ef5-6118-4f2b-a3f5-1f75e0afe3ca`
- Flow property / unit: Net calorific value / MJ
- Amount rule: submetered finishing electricity converted from kWh to MJ
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg accepted reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_electricity`
- Sources:

###### Rust-preventive mineral oil (`rust_preventive_mineral_oil`)

Include only when mineral oil is intentionally applied and remains on the sold wire.

- Selected flow: Rust-preventive mineral oil
- Flow property / unit: Mass / kg
- Amount rule: measured fresh oil applied minus captured return
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1,000 kg oiled wire
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_finishing_materials`
- Sources:

###### Steel strapping (`steel_strapping`)

Include the measured steel strapping that leaves the facility with the reference product.

- Selected flow: Steel baling band `56fe4f71-b594-4b55-8553-c87f2516737d`
- Flow property / unit: Mass / kg
- Amount rule: measured strapping mass shipped with the product
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1,000 kg accepted reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging`
- Sources:

###### Wooden pallet (`wood_pallet`)

Include only when a pallet leaves the facility with the product; declare reuse status.

- Selected flow: Pallets, box pallets and other load boards, of wood, pallet collars of wood `4b49871e-95be-4e0c-9223-9902f9eaa763`
- Flow property / unit: Mass / kg
- Amount rule: pallet count multiplied by measured or supplier-declared unit mass
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1,000 kg accepted reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_packaging`
- Sources:

###### Low-density-polyethylene stretch film (`ldpe_stretch_film`)

Include only when LDPE film leaves the facility with the product.

- Selected flow: Low-density polyethylene foil (PE-LD) `2cecd3a7-d90e-44b4-aec5-1d9dfb907477`
- Flow property / unit: Mass / kg
- Amount rule: measured film mass shipped with the product
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1,000 kg accepted reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging`
- Sources:

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Accepted alloy-steel wire (`reference_product_alloy_steel_wire`)

This is the reference product after final inspection and weighing; packaging mass is excluded.

- Selected flow: Wire of alloy steel
- Flow property / unit: Mass / kg
- Amount rule: 1,000 kg net accepted product mass
- Value mode: Fixed value (`fixed_value`)
- Specificity: Generic (`generic`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Method formula (`method_formula`)
- Collection protocol: `cp_final_product`
- Sources: `un-cpc-3-structure-2025`

##### Waste flows

###### Steel-strapping offcuts (`steel_strapping_offcuts`)

Record on-site strapping offcuts separately from strapping shipped with the product.

- Selected flow: Steel packaging-strapping offcuts
- Flow property / unit: Mass / kg
- Amount rule: measured offcut mass
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg accepted reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging`
- Sources:

###### LDPE-film offcuts (`ldpe_film_offcuts`)

Record on-site film offcuts separately from film shipped with the product.

- Selected flow: Low-density-polyethylene film offcuts
- Flow property / unit: Mass / kg
- Amount rule: measured offcut mass
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg accepted reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging`
- Sources:

##### Elementary flows

## 7. Allocation and Co-product Handling

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `allocation_subdivision_first` | Shared equipment and services | First subdivide meters, batch records and process time so only burdens attributable to the declared alloy-steel wire are assigned to it. | `ec-pef-2021-2279` |
| `allocation_physical_relation` | Residual shared burdens | When subdivision is not feasible, allocate using a documented causal physical relation such as machine time, metered energy or processed mass; disclose the rationale, input data and sensitivity. | `ec-pef-2021-2279` |
| `allocation_no_avoided_burden` | Scrap, scale, spent liquor, dross and packaging offcuts | Report wastes and recovered materials at the foreground boundary without avoided-burden credits; any recycling or substitution model belongs to the receiving downstream system and must be reported separately. | `ec-pef-2021-2279` |
| `allocation_mass_reconciliation` | Metal-bearing outputs | Keep physical metal accounting independent from environmental-burden allocation and reconcile alloy-steel input, saleable wire, metal-bearing wastes and inventory change. |  |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_metal_mass_balance` | `surface_preparation`; `wire_drawing`; `thermal_treatment`; `continuous_galvanising`; `finishing_and_dispatch` | Alloy-steel input, internal transfers, product and metal waste | Scale ticket, batch traveller and inventory log | batch id; alloy grade; opening and closing work-in-process; input mass; transfer mass; product mass; scrap mass; moisture basis | Read calibrated scales and reconcile each production lot across process boundaries. | kg | Each lot, reconciled monthly | Representative continuous 12-month period or every campaign for campaign production | All equipment and storage locations inside the foreground facility | Sum accepted flows and inventory changes, then normalize to 1,000 kg accepted product. | Calibration certificates, signed batch records and documented reconciliation |
| `cp_surface_preparation` | `surface_preparation` | Water, acid, scale and spent liquor | Meter, purchase issue, bath log and waste manifest | route; water meter; solution mass; HCl fraction; bath opening and closing inventory; scale mass; spent-liquor mass; moisture; destination | Use process submeters and tank or scale records; subtract internal reuse and inventory change. | m3; kg | Each batch or daily meter reading | Same production period as reference product | Surface-preparation line only | Allocate shared daily totals by processed mass only when no causal submeter exists, and disclose allocation. | Meter checks, supplier certificates, bath analyses and waste manifests |
| `cp_electricity` | `wire_drawing`; `thermal_treatment`; `continuous_galvanising`; `finishing_and_dispatch` | Alternating-current electricity | Revenue meter and process submeter | meter id; voltage; supplier; geography; opening and closing kWh; production mass; downtime | Difference calibrated meter readings; exclude non-production loads unless causally allocated and disclosed. | kWh and MJ | Each shift or batch | Same production period as reference product | Each included process and directly associated control equipment | Convert kWh to MJ and normalize by the applicable process output. | Meter calibration, invoice reconciliation and load-allocation record |
| `cp_drawing_lubricant` | `wire_drawing` | Calcium stearate, fresh emulsion and spent emulsion | Stores issue, tank balance and waste manifest | formulation; fresh charge; returned unused mass; circuit opening and closing inventory; purge mass; recovery destination | Complete dry-lubricant or wet-emulsion material balance for each route. | kg | Each batch, reconciled monthly | Same production period as reference product | Drawing machines and lubricant treatment circuit | Fresh input minus return and inventory increase; report cleaned and internally reused lubricant as an internal loop. | Supplier formulation, tank measurements and recovery records |
| `cp_thermal_energy` | `thermal_treatment`; `continuous_galvanising` | Natural gas | Gas meter and supplier certificate | meter id; volume; temperature; pressure; moisture basis; net calorific value; furnace assignment; production mass | Difference calibrated meter readings and assign only to included furnaces or coating-bath heating. | m3 and MJ | Each shift or campaign | Same production period as reference product | Included thermal equipment only | Normalize reference-condition volume and energy to the applicable process output. | Meter calibration and supplier gas-quality certificate |
| `cp_combustion_co2` | `thermal_treatment`; `continuous_galvanising` | Fossil carbon dioxide | Stack test or fuel-carbon calculation worksheet | fuel energy; carbon or CO2 factor; oxidation factor; stack measurement where used; furnace assignment | Prefer representative measured mass; otherwise calculate from collected fuel activity and documented site-specific or IPCC-consistent factors. | kg CO2 | Each reporting period and after fuel change | Same production period as fuel input | Included natural-gas combustion sources | Sum source-specific CO2 and normalize to the applicable process output without double counting supplier upstream emissions. | Stack report or signed calculation with factor provenance |
| `cp_galvanising_materials` | `continuous_galvanising` | Acid, zinc and flux | Purchase issue, tank balance and coating test | solution mass and concentration; zinc additions; bath inventory; flux formulation and additions; coating mass | Complete chemical and metal balances for the continuous coating line. | kg | Each campaign, reconciled monthly | Same production period as galvanised output | Continuous wire-galvanising line only | Subtract closing inventory increase and internal returns; reconcile deposited zinc and dross. | Supplier certificates, bath analyses and coating test records |
| `cp_galvanising_wastes` | `continuous_galvanising` | Spent liquor, zinc dross and acidic wastewater | Waste manifest, tank record and effluent meter | stream identity; mass or volume; pH; acid; suspended solids; zinc and relevant alloy metals; destination | Measure each stream after internal reuse and before it crosses the facility boundary. | kg; m3 | Each shipment and continuous or daily discharge reading | Same production period as galvanised output | Continuous wire-galvanising line and its treatment equipment | Sum separately by stream and destination; do not aggregate hazardous and non-hazardous streams. | Accredited analyses, meter checks and waste transfer records |
| `cp_finishing_materials` | `finishing_and_dispatch` | Rust-preventive oil | Stores issue and application balance | oil identity; fresh issue; recovered return; opening and closing inventory; product mass | Complete an application-system material balance for oiled products. | kg | Each lot, reconciled monthly | Same production period as oiled output | Finishing line only | Fresh issue minus return and inventory increase, normalized to oiled-wire mass. | Supplier safety data, issue records and tank measurements |
| `cp_packaging` | `finishing_and_dispatch` | Steel strapping, pallet, LDPE film and offcuts | Bill of materials, count record and scale record | material identity; unit mass; units used; shipped mass; offcut mass; pallet reuse status | Weigh representative packaging components and record counts for each shipment configuration. | kg; item | Each shipment configuration | Same production period as reference product | Dispatch packing area | Calculate count-based mass from verified unit mass; separate shipped material from on-site offcuts. | Supplier specifications, scale records and packaging bill of materials |
| `cp_final_product` | `finishing_and_dispatch` | Accepted reference product | Final scale ticket and inspection record | lot id; alloy grade; diameter; tolerance; mechanical condition; surface state; coating mass; net wire mass; packaging tare; disposition | Weigh accepted wire after inspection and deduct verified packaging tare. | kg | Each lot | Same production period as all foreground inputs | Facility dispatch gate | Sum only conforming net wire mass and normalize the inventory to 1,000 kg. | Calibrated scale record, inspection certificate and tare record |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_normalized_exchange` | Every foreground exchange | normalized amount = reporting-period exchange amount / accepted wire mass × 1,000 kg | collected exchange amount; accepted reference-product mass | exchange per 1,000 kg accepted wire |  |
| `calc_electricity_mj` | Electricity rows | electricity MJ = metered kWh × 3.6 | metered kWh | MJ electricity |  |
| `calc_metal_balance` | Alloy-steel mass reconciliation | balance closure = alloy-steel input + opening work-in-process - accepted product - metal-bearing wastes - closing work-in-process | mass records for metal inputs, product, wastes and work-in-process | absolute and percentage closure |  |
| `calc_zinc_deposition` | Continuous galvanising | deposited zinc = coated wire mass - incoming uncoated wire mass after correcting for other measured material changes; cross-check against surface-area and coating-test records | incoming wire mass; coated wire mass; coating test; wire geometry | deposited zinc mass | `eu-jrc-fmp-bref-2022` |
| `calc_fossil_co2` | Natural-gas combustion | fossil CO2 = fuel energy × documented CO2 emission factor; use site-specific carbon content and oxidation data where available and retain the factor basis | normalized fuel energy; CO2 factor; oxidation basis | kg fossil CO2 | `ipcc-2006-stationary-combustion` |
| `calc_packaging_mass` | Counted packaging | packaging mass = verified unit mass × units shipped; subtract separately weighed offcuts from material issued only when both measurements share the same boundary | component count; verified unit mass; offcut mass | kg packaging shipped and kg offcuts |  |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_product_identity` | Reference product and wire inputs | Declare alloy family and grade, governing specification, diameter and tolerance, mechanical or heat-treatment condition, surface or coating condition and product form. | Mill certificate, purchase specification and final inspection certificate |
| `dq_representativeness` | Foreground inventory | Cover a representative continuous 12-month period; for campaign production, cover every campaign in the reporting year and disclose production-weighting. | Production schedule, meter coverage and campaign reconciliation |
| `dq_metering` | Mass, electricity, gas and water | Use calibrated or verified instruments and reconcile process submeters to facility totals; disclose any allocation of shared totals. | Calibration records, invoices and reconciliation worksheets |
| `dq_completeness` | Chemicals, wastes and emissions | Maintain a process-flow, chemical, wastewater and waste-gas inventory; justify each zero or not-applicable atomic exchange by route evidence. | Process flow sheet, chemical register, waste manifests and emissions inventory |
| `dq_upstream_inputs` | Wire rod, electricity, natural gas, zinc and packaging | Select supplier and geography representative upstream datasets and disclose substitutions or proxies. | Supplier records and dataset-selection log |
| `dq_uncertainty` | Important flows without approved external ranges | Report measured variability, missing-data treatment and uncertainty from foreground records; do not present BAT conformance levels as generic empirical defaults. | Batch statistics and uncertainty worksheet |

## 9. Validation Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `validation_reference_mass` | Reference flow | Confirm exactly 1,000 kg net accepted alloy-steel wire and exclude all packaging tare from reference-product mass. |  |
| `validation_identity_qualifiers` | Product identity | Reject a foreground package missing alloy grade, diameter, mechanical condition, surface state, production route, facility geography or production period. | `un-cpc-3-structure-2025`; `china-state-council-tariff-list-2019` |
| `validation_process_alignment` | Process map and inventory | Require surface preparation, drawing and finishing; require thermal-treatment and galvanising rows only when those routes are declared, and reject route exchanges without their matching process. | `eu-jrc-fmp-bref-2022` |
| `validation_atomic_inventory` | All inventory rows | Reject aggregated electricity, fuel, chemical, packaging, waste, wastewater or emission labels; every exchange must identify one physical product, waste or elementary flow. | `eu-bat-ferrous-2022-2110` |
| `validation_metal_balance` | Alloy-steel and zinc balances | Require documented alloy-steel mass-balance closure and, for coated wire, a separate zinc balance; investigate and disclose material discrepancies before publication. |  |
| `validation_energy_identity` | Electricity and gas | Require actual supplier, geography, voltage and delivery boundary for electricity and reference volume, supplier and net calorific value for natural gas; do not accept the UUID alone as representativeness evidence. | `eu-bat-ferrous-2022-2110` |
| `validation_no_unapproved_ranges` | Quantitative checks | Use foreground variability for QA until independently verified compatible range evidence is approved; do not convert single-source BAT levels, limits or case values into empirical default ranges. | `eu-bat-ferrous-2022-2110` |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | Foreground gate-to-gate production dataset for alloy-steel wire |
| downstream_use | secondary_dataset; background_dataset |
| allowed_use | Product and supply-chain LCA when alloy family, grade, diameter, mechanical condition, surface state, drawing and treatment route, geography, period and dispatch boundary match the modelled wire |
| excluded_use | Generic crude-steel or wire-rod production; non-alloy steel wire; fabricated wire products; unqualified global averages; cradle-to-grave claims without linked upstream and downstream datasets |
| required_metadata | Canonical PCR id; product and flow identifiers; alloy specification; diameter; mechanical state; surface and coating state; process routes; facility geography; technology; production period; data-owner role; upstream dataset identities; allocation method; packaging configuration |
| required_quality_disclosure | Temporal, geographical and technological representativeness; meter coverage; metal and zinc balance closure; shared-load allocation; missing data; foreground variability; unresolved UUIDs; source versions; exclusions and deviations |
| update_trigger | Change in alloy family, drawing reduction, drawing medium, furnace or coating technology, principal energy supplier, upstream steel route, packaging configuration, facility boundary, allocation method, or a material change in annual energy, water, chemical, yield, waste or emission intensity |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `un-cpc-3-structure-2025` | Official guidance (`official_guidance`) | United Nations Statistics Division, CPC Version 3.0 Structure, 30 June 2025, https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Structure_30Jun2025.csv | Official CPC 41267 identity and English title |
| `china-state-council-tariff-list-2019` | Official guidance (`official_guidance`) | State Council of the People's Republic of China, official tariff list, https://www.gov.cn/xinwen/2019-05/13/5391208/files/6d352f9e9ae6449ca6ba2c73947b6e35.pdf | Professional Chinese alloy-steel-wire terminology and illustrative stainless, silico-manganese and other alloy-steel wire nomenclature |
| `eu-jrc-fmp-bref-2022` | Official guidance (`official_guidance`) | European Commission Joint Research Centre, Best Available Techniques Reference Document for the Ferrous Metals Processing Industry, adopted December 2022, https://bureau-industrial-transformation.jrc.ec.europa.eu/reference/ferrous-metals-processing-industry | Wire-drawing definition, process decomposition and conditional continuous wire galvanising |
| `eu-bat-ferrous-2022-2110` | Official guidance (`official_guidance`) | Commission Implementing Decision (EU) 2022/2110 of 11 October 2022, CELEX 32022D2110, https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX:32022D2110 | Chemical, water, energy, wastewater and waste-gas inventory rules; lubricant reuse; conditional heating, pickling and coating controls |
| `ec-pef-2021-2279` | Official guidance (`official_guidance`) | Commission Recommendation (EU) 2021/2279 of 15 December 2021 on the use of Environmental Footprint methods, https://eur-lex.europa.eu/eli/reco/2021/2279/2021-12-30/eng | Allocation hierarchy and disclosure |
| `ipcc-2006-stationary-combustion` | Method factor (`method_factor`) | IPCC, 2006 Guidelines for National Greenhouse Gas Inventories, Volume 2, Chapter 2: Stationary Combustion, https://www.ipcc-nggip.iges.or.jp/public/2006gl/pdf/2_Volume2/V2_2_Ch2_Stationary_Combustion.pdf | Fossil CO2 calculation from collected stationary-combustion fuel activity |
