---
pcr_id: pcr.metal-products-machinery-and-equipment.basic-metals.bars-and-rods-cold-formed-cold-finished-or-further-worked-of-iron-or-non-alloy-steel
language: en-US
status: candidate
sync_with: pcr.zh-CN.md
---

# Bars and rods, cold-formed, cold-finished or further worked, of iron or non-alloy steel

## 1. Scope and Applicability

This PCR covers the gate-to-gate conversion of hot-rolled iron or non-alloy-steel bars or rods into straight-length bars or rods whose defining state is cold forming, cold finishing, or further working. Covered operations include cold drawing, grinding, peeling, straightening, polishing, sizing, and route-required annealing. The product leaves the foreground site as an uncoated bar or rod with declared steel grade, geometry, surface condition, heat-treatment state, and finishing route.

The boundary starts with a declared hot-rolled or externally pretreated bar-or-rod feed at the converting-site gate and ends with accepted finished product at that site gate. Upstream ironmaking, steelmaking, casting, hot rolling, and production of purchased utilities and materials require separate upstream datasets. Wire, alloy-steel bars or rods, angles, shapes, sections, tubes, hollow profiles, products only hot-worked, and products whose defining transformation is metallic coating are excluded.

The official CPC structure fixes the classification identity, while the European Commission ferrous-metals BREF supports the distinct process boundary: it describes cold drawing of steel bars by drawing, grinding, or peeling hot-rolled bars and identifies annealing as conditionally required after cold working. Site records, not generic external averages, produce the first inventory values.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.metal-products-machinery-and-equipment.basic-metals.bars-and-rods-cold-formed-cold-finished-or-further-worked-of-iron-or-non-alloy-steel |
| classification_refs | CPC 3.0: 41261 (exact classification reference; mapping acceptance is governed separately) |
| covered_products | Uncoated iron or non-alloy-steel bars and rods in straight lengths whose delivered state is cold-drawn, cold-formed, ground, peeled, polished, straightened, sized, or otherwise further worked |
| excluded_products | Wire; coiled wire rod sold without conversion to straight bars or rods; alloy-steel bars or rods; angles, shapes, and sections; tubes and hollow profiles; products only forged, hot-rolled, hot-drawn, or hot-extruded; coated products classified by the coating transformation |
| representative_product | Bright non-alloy-steel bar in straight commercial lengths, produced from hot-rolled bar by cold drawing or peeling/grinding, optionally annealed, and delivered dry and uncoated at the converting-site gate |
| production_route | Declared feed receipt; conditional surface preparation; at least one cold-forming or cold-finishing operation; conditional annealing; final sizing, inspection, and acceptance |
| market_state | Accepted straight-length bar or rod at converting-site gate; steel grade, cross-section, dimensions and tolerance, surface finish, heat-treatment state, coating status, and moisture/oil condition declared |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Cold-formed, cold-finished, or further-worked iron or non-alloy-steel bar or rod meeting the declared dimensional, surface, and mechanical specification |
| How much | 1,000 kg net accepted product |
| How well | Conforming to the declared steel grade, cross-section, dimensional tolerances, surface-finish specification, mechanical-property condition, and acceptance test plan |
| How long or cycle | One production campaign ending at plant-gate acceptance; no use-stage service duration is assigned |
| reference_flow_link | `finished_bar_product` |

| Field | Value |
| --- | --- |
| Reference amount | 1,000 kg net accepted product |
| Reference product flow | Bars and rods, cold-formed, cold-finished or further worked, of iron or non-alloy steel |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | iron or non-alloy-steel grade and specification; carbon and declared alloying-element composition or grade certificate; bar versus rod designation; cross-section shape; nominal dimensions and tolerances; delivered length; cold-forming/cold-finishing/further-working route; area or diameter reduction where applicable; surface-finish class; heat-treatment state; coating status; residual oil or dry delivery state; production site and geography; reference period; rejected-product and internal-recycle treatment |

When constructing a foreground data package, the items listed in `Required qualifiers` must be declared in dataset metadata, process notes, reference flow comment, product description, or an equivalent data package field. Missing required qualifiers make the reference flow definition incomplete for that data package.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| `reference_mass` | accepted reference product | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Use verified net mass after final inspection. Exclude pallets, straps, wrapping, dunnage, and unaccepted material. Normalize all exchanges to 1,000 kg accepted product. |
| `internal_transfer_mass` | bar-or-rod intermediates | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Measure or mass-balance each internal transfer without counting the same intermediate as an external input or output. Preserve steel grade and physical-state continuity. |
| `electricity_energy` | alternating-current inputs | Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` | MJ | Preserve the metered electricity quantity and conversion basis. When source records use kWh, convert by the physical identity 1 kWh = 3.6 MJ and retain both the meter value and converted value. |
| `gas_volume_conditions` | natural gas and protective nitrogen | Volume `93a60a56-a3c8-22da-a746-0800200c9a66` | m3 | Report the reference temperature, reference pressure, dry/wet basis, and meter correction used for every gas volume; do not combine gases. |
| `waste_wet_dry_basis` | spent liquor, rinse-water waste, scale, offcuts, lubricant waste, and captured dust | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | State wet or dry basis and measured moisture or entrained-liquid treatment where relevant; do not infer dry mass without a recorded conversion. |

## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Hot-rolled iron or non-alloy-steel bar or rod, or the same feed after externally performed surface preparation, entering the converting site with mass, grade, geometry, surface condition, and upstream dataset declared |
| starting_condition_role | Purchased or transferred upstream product input to the cold-forming, cold-finishing, or further-working foreground system |
| product_classification_scope | Iron or non-alloy-steel bars and rods whose delivered defining transformation is cold forming, cold finishing, or further working; CPC 3.0 code 41261 is an exact classification reference but does not own PCR identity |
| recursive_input_rule | A purchased input already within this PCR category must be represented by its upstream dataset and must not reopen this PCR recursively; disclose its prior finishing state and count only additional foreground work performed at the reporting site |
| upstream_dataset_requirement | Require separate upstream datasets for steelmaking, casting, hot rolling, externally performed pickling or descaling, purchased electricity, natural gas, nitrogen, hydrochloric acid, water, lubricant, and off-site waste treatment as applicable |
| disclosure | Declare feed origin and state, included and excluded operations, each conditional route decision, internal recycle loops, acid recovery or rinse-water recirculation, annealing atmosphere and fuel, emission-control boundary, waste destination, and whether transport or packaging is outside the dataset |

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `boundary_start_end` | foreground system | Start at receipt of the declared hot-rolled or externally pretreated bar-or-rod feed and end at acceptance of the finished uncoated product at the converting-site gate. | `unstats-cpc-3-0-structure-2025`; `eu-jrc-fmp-bref-2022` |
| `boundary_route_disclosure` | conditional operations | Include only operations actually performed, but declare surface preparation, cold drawing/forming, grinding, peeling, straightening, polishing, annealing, and final sizing as included, not applicable, or externally supplied. | `eu-jrc-fmp-bref-2022` |
| `boundary_upstream_separation` | upstream production | Keep steelmaking, casting, hot rolling, purchased-material production, purchased-energy generation, and off-site treatment in linked upstream datasets rather than recreating them in this foreground inventory. | `eu-jrc-fmp-bref-2022` |
| `boundary_no_unlisted_emissions` | direct releases | Report each measured or calculated direct release as one chemical species and compartment; a generic “emissions to air” row is not acceptable. | `eu-jrc-fmp-bref-2022` |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| `surface_preparation` | Surface preparation and hydrochloric-acid pickling | `conditional` | Include when scale removal or HCl pickling/rinsing occurs inside the reporting site; exclude HCl-specific rows when another declared single-agent or mechanical route is used | foreground conditioning | kg pretreated bar or rod transferred to cold finishing |
| `cold_finishing` | Cold forming and cold finishing | `required` | Include the actual cold drawing, grinding, peeling, straightening, polishing, or sizing operations that establish the product category state | foreground production | kg cold-finished bar or rod transferred onward |
| `intermediate_annealing` | Intermediate annealing | `conditional` | Include when heat treatment is performed after cold work to obtain the declared metallurgical or mechanical state | foreground heat treatment | kg annealed bar or rod transferred to final sizing |
| `final_sizing_inspection` | Final sizing, inspection, and acceptance | `required` | Include final cutting/sizing, inspection, rejected-material accounting, and reference-product acceptance | foreground finishing | 1,000 kg net accepted reference product |

### Process: Surface preparation and hydrochloric-acid pickling (`surface_preparation`)

#### Inputs

##### Product flows

###### Hot-rolled bar or rod feed (`hot_rolled_bar_input`)

Record the hot-rolled iron or non-alloy-steel bar or rod crossing the surface-preparation boundary. Preserve grade, geometry, mass, surface condition, and upstream dataset identity.

- Selected flow: Hot-rolled iron or non-alloy-steel bar or rod
- Flow property / unit: Mass / kg
- Amount rule: measured feed mass entering in-scope surface preparation
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1,000 kg net accepted reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_surface_materials`
- Sources: `unstats-cpc-3-0-structure-2025`; `eu-jrc-fmp-bref-2022`

###### Hydrochloric acid solution (`hydrochloric_acid_input`)

Record only the hydrochloric acid solution crossing the boundary when the declared route uses HCl pickling. State delivered concentration, fresh/recovered status, and acid-regeneration boundary.

- Selected flow: Hydrochloric acid solution
- Flow property / unit: Mass / kg
- Amount rule: measured net fresh and make-up solution mass, with recovered internal acid excluded from external input
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1,000 kg net accepted reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_surface_materials`
- Sources: `eu-jrc-fmp-bref-2022`

###### Rinse water (`rinse_water_input`)

Record process water supplied to the post-pickling rinse. The UUID fixes the process-water identity only; retain the rinse application, source, quality, geography, density-conversion, and delivery-boundary qualifiers, and meter make-up water separately from recirculated internal water.

- Selected flow: Process Water `94a04f7e-2d5c-41f0-b182-d54a3b373a02`
- Flow property / unit: Mass / kg
- Amount rule: measured net make-up rinse-water mass
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg net accepted reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_surface_materials`
- Sources: `eu-jrc-fmp-bref-2022`

###### Pickling-line electricity (`pickling_electricity`)

Record alternating-current electricity consumed by in-scope pumps, drives, ventilation, extraction, rinsing, and surface-preparation equipment.

- Selected flow: Alternating current `455f0ef5-6118-4f2b-a3f5-1f75e0afe3ca`
- Flow property / unit: Net calorific value / MJ
- Amount rule: allocation-free submetered electricity, or documented equipment-meter calculation when a dedicated meter is unavailable
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg net accepted reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_surface_energy`
- Sources: `eu-jrc-fmp-bref-2022`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Pretreated bar or rod intermediate (`pretreated_bar_intermediate`)

Record the descaled bar or rod transferred internally to cold finishing. This internal intermediate is not a marketable reference product unless separately reported outside this PCR result.

- Selected flow: Pretreated iron or non-alloy-steel bar or rod intermediate
- Flow property / unit: Mass / kg
- Amount rule: measured transfer mass after surface preparation and draining
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1,000 kg net accepted reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_surface_outputs`
- Sources: `eu-jrc-fmp-bref-2022`

##### Waste flows

###### Spent hydrochloric-acid pickling liquor (`spent_pickling_liquor`)

Record spent HCl pickling liquor containing dissolved iron when it leaves the foreground process for recovery or treatment. State acid and dissolved-metal concentration and destination.

- Selected flow: Spent hydrochloric-acid pickling liquor containing dissolved iron
- Flow property / unit: Mass / kg
- Amount rule: measured wet mass leaving the foreground process, net of internal recirculation
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg net accepted reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_surface_outputs`
- Sources: `eu-jrc-fmp-bref-2022`

###### Acidic rinse water containing iron chlorides (`acidic_rinse_water`)

Record the specific acidic rinse-water waste stream leaving the surface-preparation system. Keep it separate from spent pickling liquor and unrelated site water.

- Selected flow: Acidic rinse water containing iron chlorides
- Flow property / unit: Mass / kg
- Amount rule: measured wet mass discharged or transferred to treatment, net of recirculation
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg net accepted reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_surface_outputs`
- Sources: `eu-jrc-fmp-bref-2022`

###### Captured iron-oxide scale (`iron_oxide_scale_waste`)

Record captured iron-oxide scale removed mechanically or recovered from surface-preparation equipment. State wet or dry mass basis and recovery destination.

- Selected flow: Captured iron-oxide scale
- Flow property / unit: Mass / kg
- Amount rule: measured captured scale mass leaving the foreground process
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1,000 kg net accepted reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_surface_outputs`
- Sources: `eu-jrc-fmp-bref-2022`

##### Elementary flows

###### Hydrogen chloride emitted to air (`hydrogen_chloride_air`)

Record hydrogen chloride crossing the stack or fugitive-emission boundary after any in-scope capture and abatement. The UUID fixes the substance and unspecified-air compartment; retain stack and fugitive subrecords separately when their monitoring bases differ, and do not combine HCl with other acid gases.

- Selected flow: hydrogen chloride `fe0acd60-3ddc-11dd-aab0-0050c2490048`
- Flow property / unit: Mass / kg
- Amount rule: measured stack and quantified fugitive HCl mass after in-scope abatement
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg net accepted reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_surface_emissions`
- Sources: `eu-jrc-fmp-bref-2022`

### Process: Cold forming and cold finishing (`cold_finishing`)

#### Inputs

##### Product flows

###### Steel bar or rod feed to cold finishing (`steel_bar_feed`)

Record the single hot-rolled or pretreated iron or non-alloy-steel bar-or-rod feed entering cold finishing. An internal transfer from surface preparation must not also be counted as a purchased input.

- Selected flow: Iron or non-alloy-steel bar or rod feed to cold finishing
- Flow property / unit: Mass / kg
- Amount rule: measured mass entering the actual cold-drawing, grinding, peeling, straightening, polishing, or sizing equipment
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1,000 kg net accepted reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_cold_inputs`
- Sources: `eu-jrc-fmp-bref-2022`

###### Cold-finishing electricity (`rolling_electricity`)

Record alternating-current electricity consumed by the declared cold-forming and cold-finishing equipment. Include only equipment inside this process boundary.

- Selected flow: Alternating current `455f0ef5-6118-4f2b-a3f5-1f75e0afe3ca`
- Flow property / unit: Net calorific value / MJ
- Amount rule: submetered electricity or documented equipment-meter calculation for cold drawing, grinding, peeling, straightening, polishing, and sizing
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1,000 kg net accepted reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_cold_inputs`
- Sources: `eu-jrc-fmp-bref-2022`

###### Metalworking lubricant oil (`metalworking_lubricant_input`)

Record the actual single lubricant oil supplied to cold-finishing equipment when used. State product name, viscosity grade, and fresh/recovered status.

- Selected flow: Metalworking lubricant oil
- Flow property / unit: Mass / kg
- Amount rule: measured net fresh and make-up lubricant-oil mass crossing the process boundary
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1,000 kg net accepted reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_cold_inputs`
- Sources: `eu-jrc-fmp-bref-2022`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Cold-finished bar or rod intermediate (`cold_finished_bar_intermediate`)

Record the cold-finished intermediate transferred either to conditional annealing or directly to final sizing and inspection. Preserve grade, geometry, route, and work-hardened state.

- Selected flow: Cold-finished iron or non-alloy-steel bar or rod intermediate
- Flow property / unit: Mass / kg
- Amount rule: measured accepted transfer mass leaving cold finishing
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1,000 kg net accepted reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_cold_outputs`
- Sources: `eu-jrc-fmp-bref-2022`

##### Waste flows

###### Steel offcuts from cold finishing (`steel_offcuts_cold_finishing`)

Record clean iron or non-alloy-steel offcuts generated within cold finishing and leaving the process for internal recycling or external recovery.

- Selected flow: Clean iron or non-alloy-steel offcuts from cold finishing
- Flow property / unit: Mass / kg
- Amount rule: measured mass by destination, excluding material returned internally before the process output is measured
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1,000 kg net accepted reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_cold_outputs`
- Sources: `eu-jrc-fmp-bref-2022`

###### Spent metalworking lubricant oil (`spent_lubricant_oil`)

Record spent lubricant oil removed from the declared equipment and leaving for treatment or recovery. State water and metal-fines content where measured.

- Selected flow: Spent metalworking lubricant oil
- Flow property / unit: Mass / kg
- Amount rule: measured wet mass leaving the process, net of filtered oil returned internally
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1,000 kg net accepted reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_cold_outputs`
- Sources: `eu-jrc-fmp-bref-2022`

###### Captured steel grinding dust (`captured_grinding_dust`)

Record captured iron or non-alloy-steel grinding dust when grinding is performed. Keep captured solid waste separate from any measured particulate release to air.

- Selected flow: Captured iron or non-alloy-steel grinding dust
- Flow property / unit: Mass / kg
- Amount rule: measured captured dry or wet mass leaving dust-control equipment
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1,000 kg net accepted reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_cold_outputs`
- Sources: `eu-jrc-fmp-bref-2022`

##### Elementary flows

### Process: Intermediate annealing (`intermediate_annealing`)

#### Inputs

##### Product flows

###### Cold-finished bar or rod entering annealing (`cold_finished_bar_to_annealing`)

Record the work-hardened cold-finished bar or rod transferred into annealing when heat treatment is required by the declared product condition.

- Selected flow: Cold-finished iron or non-alloy-steel bar or rod intermediate entering annealing
- Flow property / unit: Mass / kg
- Amount rule: measured transfer mass entering the annealing furnace
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1,000 kg net accepted reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_annealing_inputs`
- Sources: `eu-jrc-fmp-bref-2022`

###### Natural gas for annealing (`natural_gas_input`)

Record gaseous natural gas crossing the site boundary for the annealing furnace. Declare supply geography, burner technology, net/gross calorific convention, and reference volume conditions.

- Selected flow: natural gas in the gaseous state `4f19ca0e-7b3b-11dd-ad8b-0800200c9a66`
- Flow property / unit: Volume / m3
- Amount rule: corrected furnace-meter volume allocated only by direct submeter or documented operating-time calculation
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1,000 kg net accepted reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_annealing_inputs`
- Sources: `eu-jrc-fmp-bref-2022`

###### Annealing electricity (`annealing_electricity`)

Record alternating-current electricity consumed by furnace drives, fans, controls, cooling, and other in-scope annealing equipment.

- Selected flow: Alternating current `455f0ef5-6118-4f2b-a3f5-1f75e0afe3ca`
- Flow property / unit: Net calorific value / MJ
- Amount rule: submetered electricity or documented equipment-meter calculation for annealing
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg net accepted reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_annealing_inputs`
- Sources: `eu-jrc-fmp-bref-2022`

###### Protective nitrogen (`protective_nitrogen`)

Record nitrogen gas supplied to the annealing atmosphere when used. Do not substitute oxygen or combine nitrogen with hydrogen or another atmosphere gas.

- Selected flow: Nitrogen gas for protective annealing atmosphere
- Flow property / unit: Volume / m3
- Amount rule: corrected make-up and purge-gas meter volume, excluding internally recirculated atmosphere gas
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1,000 kg net accepted reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_annealing_inputs`
- Sources: `eu-jrc-fmp-bref-2022`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Annealed bar or rod intermediate (`annealed_bar_intermediate`)

Record the annealed iron or non-alloy-steel bar or rod transferred to final sizing and inspection. Preserve furnace cycle, atmosphere, and resulting metallurgical condition.

- Selected flow: Annealed iron or non-alloy-steel bar or rod intermediate
- Flow property / unit: Mass / kg
- Amount rule: measured accepted transfer mass after annealing and cooling
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1,000 kg net accepted reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_annealing_outputs`
- Sources: `eu-jrc-fmp-bref-2022`

##### Waste flows

##### Elementary flows

###### Fossil carbon dioxide emitted to air (`fossil_co2_air`)

Record direct fossil carbon dioxide from in-scope natural-gas combustion after applying the site monitoring or documented fuel-carbon calculation boundary.

- Selected flow: carbon dioxide (fossil) `08a91e70-3ddc-11dd-923d-0050c2490048`
- Flow property / unit: Mass / kg
- Amount rule: measured stack mass or documented site calculation from metered fuel and verified fuel composition
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg net accepted reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_annealing_outputs`
- Sources: `eu-jrc-fmp-bref-2022`

###### Nitrogen oxides emitted to air (`nitrogen_oxides_air`)

Record nitrogen oxides from the annealing combustion source using the declared reporting species, normally NOx as NO2, and the air compartment after in-scope abatement.

- Selected flow: Nitrogen oxides to air, reported as nitrogen dioxide mass equivalent
- Flow property / unit: Mass / kg
- Amount rule: measured stack mass from concentration and corrected dry-gas flow, with oxygen reference and reporting species retained
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg net accepted reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_annealing_outputs`
- Sources: `eu-jrc-fmp-bref-2022`

### Process: Final sizing, inspection, and acceptance (`final_sizing_inspection`)

#### Inputs

##### Product flows

###### Unannealed cold-finished bar or rod entering final operations (`cold_finished_bar_to_final`)

Record this internal transfer only when annealing is not performed and the cold-finished intermediate goes directly to final sizing and inspection.

- Selected flow: Unannealed cold-finished iron or non-alloy-steel bar or rod intermediate
- Flow property / unit: Mass / kg
- Amount rule: measured transfer mass entering final operations when annealing is not applicable
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1,000 kg net accepted reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_final_operations`
- Sources: `eu-jrc-fmp-bref-2022`

###### Annealed bar or rod entering final operations (`annealed_bar_to_final`)

Record this internal transfer only when the product follows the annealing route. Do not record both alternative transfer rows for the same product lot.

- Selected flow: Annealed iron or non-alloy-steel bar or rod intermediate entering final operations
- Flow property / unit: Mass / kg
- Amount rule: measured transfer mass entering final operations after annealing
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1,000 kg net accepted reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_final_operations`
- Sources: `eu-jrc-fmp-bref-2022`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Accepted cold-formed, cold-finished, or further-worked bar or rod (`finished_bar_product`)

This is the reference product. Record only net mass that passes the declared dimensional, surface, mechanical-property, and product-state acceptance requirements.

- Selected flow: Bars and rods, cold-formed, cold-finished or further worked, of iron or non-alloy steel
- Flow property / unit: Mass / kg
- Amount rule: 1,000 kg net accepted reference product by definition, supported by calibrated final mass records
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: 1,000 kg net accepted reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_final_operations`
- Sources: `unstats-cpc-3-0-structure-2025`; `eu-jrc-fmp-bref-2022`

##### Waste flows

###### Steel offcuts from final sizing (`final_steel_offcuts`)

Record clean iron or non-alloy-steel offcuts generated by final cutting or sizing. Keep rejected finished bars separate in site records and disclose whether they are reworked internally.

- Selected flow: Clean iron or non-alloy-steel offcuts from final sizing
- Flow property / unit: Mass / kg
- Amount rule: measured mass leaving final sizing by destination, net of internal rework
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1,000 kg net accepted reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_final_operations`
- Sources: `eu-jrc-fmp-bref-2022`

##### Elementary flows

## 7. Allocation and Co-product Handling

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `allocation_subdivide_first` | shared foreground equipment and meters | Avoid allocation by subdividing production campaigns, equipment time, material issues, and dedicated meters by declared product grade, geometry, and route. |  |
| `allocation_internal_recycle` | internal return of bars, offcuts, scale, acid, water, or lubricant | Do not count an internal recycle loop as both an external output and a new external input. Record only net boundary crossings and disclose the loop and inventory point. |  |
| `allocation_recoverable_material` | offcuts, scale, spent acid, lubricant, and captured dust sent for recovery | Report the measured outgoing flow and treatment or recovery destination. Do not apply an avoided-burden credit inside this foreground dataset; downstream recycling modelling belongs to the linked treatment or lifecycle model. |  |
| `allocation_unavoidable_shared_burden` | residual shared burdens after subdivision | If direct measurement and subdivision are infeasible, allocate the residual shared burden by net accepted product mass for the same campaign, disclose the affected exchanges and fraction, and test sensitivity when the allocation changes a reported result materially. |  |

No co-product is assumed by default. A saleable secondary output must be represented as its own concrete product flow and reviewed before the residual-allocation rule is used; it must not be hidden in an offcut or waste row.

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_surface_materials` | `surface_preparation` | feed, HCl solution, and rinse water | weigh tickets, tank issues, purchase/transfer records, and water meter | lot_id; steel_grade; feed_mass_kg; acid_solution_mass_kg; acid_concentration; recovered_acid_mass_kg; rinse_makeup_water_kg | calibrated scales, tank mass balance, and dedicated water meter | kg | each batch with monthly reconciliation | representative continuous 12-month period or complete declared campaign | all in-scope surface-preparation lines | sum net external inputs and normalize by accepted reference-product mass | calibration records, acid inventory reconciliation, concentration analyses, and meter completeness |
| `cp_surface_energy` | `surface_preparation` | alternating-current input | electricity meter and equipment runtime records | meter_start; meter_end; kWh; equipment_id; production_lot | dedicated submeter preferred; otherwise documented power-by-runtime calculation reconciled to site meter | kWh and MJ | each batch or shift with monthly reconciliation | same period as product output | all in-scope pickling, extraction, pumping, and rinsing equipment | subtract documented non-process loads, convert kWh to MJ, and normalize by accepted product | meter calibration, load boundary diagram, runtime logs, and reconciliation |
| `cp_surface_outputs` | `surface_preparation` | pretreated transfer and specific waste streams | transfer scale, waste manifests, tank drawdown, and solids records | transfer_mass_kg; spent_liquor_mass_kg; acid_content; dissolved_iron; rinse_waste_mass_kg; scale_mass_kg; wet_dry_basis; destination | calibrated scales, tank mass balance, and shipment records | kg | each batch or removal event | same period as product output | complete surface-preparation system through waste handoff | sum by atomic flow and destination; subtract internal recirculation | mass-balance closure, laboratory analyses, moisture records, and manifests |
| `cp_surface_emissions` | `surface_preparation` | hydrogen chloride to air | stack tests, continuous or periodic monitoring, and fugitive assessment | HCl_concentration; gas_flow; run_time; capture_status; abatement_status; method | approved stack method plus documented fugitive quantification | kg HCl | monitoring frequency required by permit, with batch operating hours | same period as product output | all HCl emission points inside the process boundary | concentration × corrected gas flow × operating time plus quantified fugitive mass | test report, detection limits, gas corrections, and control-device operating records |
| `cp_cold_inputs` | `cold_finishing` | steel feed, electricity, and lubricant oil | transfer scale, electricity meter, lubricant issues, and equipment runtime | lot_id; feed_mass_kg; kWh; equipment_id; lubricant_product; lubricant_mass_kg; recovered_lubricant_mass_kg | calibrated scales, dedicated submeters, and material issue records | kg; kWh; MJ | each batch or shift | representative continuous 12-month period or complete declared campaign | all in-scope cold-finishing equipment | sum net boundary inputs by product lot and normalize by accepted product | calibration, route logs, inventory reconciliation, and meter completeness |
| `cp_cold_outputs` | `cold_finishing` | cold-finished transfer and specific solid or liquid wastes | transfer scale, scrap bins, lubricant-removal records, and dust collector records | transfer_mass_kg; offcut_mass_kg; spent_oil_mass_kg; dust_mass_kg; wet_dry_basis; internal_return_mass_kg; destination | calibrated scales and container-specific removal records | kg | each batch or removal event | same period as product output | all cold-finishing lines and collectors | sum each atomic output; subtract documented internal returns; normalize by accepted product | mass-balance closure, manifests, moisture records, and collector maintenance logs |
| `cp_annealing_inputs` | `intermediate_annealing` | bar transfer, natural gas, electricity, and nitrogen | transfer scale, corrected gas meters, electricity meter, and furnace batch log | lot_id; transfer_mass_kg; gas_m3; gas_reference_conditions; kWh; nitrogen_m3; atmosphere_recirculation; furnace_cycle | calibrated scales and dedicated corrected meters | kg; m3; kWh; MJ | each furnace batch with monthly reconciliation | representative continuous 12-month period or complete declared campaign | all in-scope annealing furnaces | sum net make-up inputs and normalize by accepted product | calibration, reference-condition record, fuel invoice reconciliation, and batch traceability |
| `cp_annealing_outputs` | `intermediate_annealing` | annealed transfer and direct combustion emissions | transfer scale, fuel-carbon calculation records, and stack monitoring | annealed_mass_kg; fossil_CO2_kg; NOx_concentration; NOx_reporting_species; gas_flow; oxygen_reference; run_time; abatement_status | calibrated scale, verified fuel-carbon calculation or stack measurement, and approved NOx stack method | kg | each batch for transfer and required monitoring interval for emissions | same period as product output | furnace and all associated in-scope stacks | sum accepted transfer and direct emissions; normalize by accepted reference-product mass | mass balance, calculation workbook, fuel analysis, stack report, detection limits, and control records |
| `cp_final_operations` | `final_sizing_inspection` | alternative internal feed, accepted product, and final offcuts | transfer and final scales, inspection record, scrap bins, and rework log | lot_id; feed_route; input_mass_kg; accepted_mass_kg; offcut_mass_kg; rejected_mass_kg; rework_mass_kg; grade; dimensions; tolerance; surface_class; heat_treatment_state | calibrated scales linked to lot-level inspection and disposition records | kg | each lot | representative continuous 12-month period or complete declared campaign | all final sizing and inspection stations | count one alternative feed route; sum net accepted output and net external offcuts; normalize to 1,000 kg accepted product | calibration, certificate of analysis, dimensional and mechanical test results, rejection/rework traceability, and mass-balance closure |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_reference_normalization` | every external inventory exchange | normalized amount = period exchange amount / period net accepted product mass × 1,000 kg | atomic exchange record; accepted product mass | exchange per 1,000 kg accepted product |  |
| `calc_electricity_conversion` | electricity rows | MJ = metered kWh × 3.6; retain the original kWh value and meter boundary | kWh; meter boundary | MJ alternating current |  |
| `calc_net_external_material` | acid, water, lubricant, nitrogen, wastes, and internal recycle | net boundary amount = gross addition or removal − documented same-process internal return; never subtract an off-site return as an internal loop | gross records; internal return records; destination | net external atomic flow |  |
| `calc_stack_mass` | HCl and NOx emissions | emitted mass = corrected concentration × corrected dry-gas flow × operating time, using consistent units and declared oxygen/reference conditions; add separately quantified fugitive mass only for the same species | concentration; gas flow; time; correction factors; fugitive assessment | kg emitted species | `eu-jrc-fmp-bref-2022` |
| `calc_mass_balance_check` | steel-bearing flows | closure = feed steel mass − accepted product − net steel-bearing waste − inventory change; investigate rather than force any unexplained residual into a waste row | feed, transfers, product, steel-bearing wastes, inventory change | mass-balance residual and closure percentage |  |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_product_identity` | reference product and steel-bearing inputs | Maintain lot-level linkage among grade certificate, feed state, route, cross-section, dimensions, tolerances, surface class, heat-treatment state, coating status, and accepted mass. | certificates, route traveller, inspection record, and lot reconciliation |
| `dq_temporal_representativeness` | all foreground records | Use a continuous representative 12-month period where available; otherwise disclose the complete campaign period, seasonal or utilization limitation, and why it represents the declared product. | dated meter extracts, production calendar, and campaign statement |
| `dq_completeness` | process map and inventory | Reconcile every required process and every applicable conditional process. Report zero only with evidence of non-applicability; do not omit an applicable atomic exchange because its UUID or range is unresolved. | process applicability matrix, mass/energy reconciliation, and unresolved-flow register |
| `dq_meter_quality` | mass, electricity, gas, water, and emission measurements | Retain calibration status, resolution, coverage, estimated-data fraction, and correction method. Estimated segments must be identified and sensitivity-tested if material. | calibration certificates, meter QA records, and estimation log |
| `dq_waste_and_emissions` | wastes and direct releases | Preserve atomic identity, wet/dry basis, concentration where relevant, destination, compartment, reporting species, detection limit, and abatement boundary. | manifests, analyses, stack reports, and treatment contracts |
| `dq_source_boundary` | upstream and off-site datasets | Verify that linked datasets do not duplicate foreground operations and disclose geography, technology, temporal period, and product state mismatches. | dataset mapping and boundary crosswalk |

## 9. Validation Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `validate_reference_identity` | reference flow | Fail validation when the final product is not 1,000 kg net accepted iron or non-alloy-steel bar or rod or when any required qualifier is absent. | `unstats-cpc-3-0-structure-2025`; `prc-mof-tariff-terminology-2026` |
| `validate_process_coverage` | process map | Require `cold_finishing` and `final_sizing_inspection`; require an explicit applicability decision for `surface_preparation` and `intermediate_annealing`, supported by route records. | `eu-jrc-fmp-bref-2022` |
| `validate_atomic_inventory` | inventory rows | Reject combined utilities, combined fuels, combined chemicals, generic wastewater, generic residues, generic emissions, and any row that cannot represent one atomic exchange. |  |
| `validate_uuid_status` | reference and inventory flows | A UUID-bearing row must match the directly read Tiangong base name, flow type, classification, property, and unit group; every UUID-empty row must remain in the manifest unresolved inventory list. |  |
| `validate_electricity_identity` | all electricity rows | Use the adopted alternating-current UUID only with supplier, geography, voltage, technology, and delivery-boundary qualifiers; do not substitute an unverified voltage-specific consumption mix. |  |
| `validate_material_balance` | steel-bearing system | Investigate a non-zero steel mass-balance residual. Do not force unexplained loss into scale, dust, offcuts, or emissions. |  |
| `validate_alternative_transfer` | final-sizing inputs | For one product lot, record either `cold_finished_bar_to_final` or `annealed_bar_to_final`, never both. | `eu-jrc-fmp-bref-2022` |
| `validate_range_evidence` | amount ranges | Do not publish an externally inferred range unless at least two independent original sources have compatible system boundary, functional unit, and product state; unresolved needs remain foreground collection requirements. |  |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | Foreground product-conversion dataset for cold-formed, cold-finished, or further-worked iron or non-alloy-steel bars and rods |
| downstream_use | `secondary_dataset`; `background_dataset` after review of representativeness and upstream links |
| allowed_use | Product carbon-footprint, LCA, supply-chain, and process-improvement studies requiring a declared plant-gate bar-or-rod conversion dataset within the stated product, geography, technology, and time coverage |
| excluded_use | Steelmaking or hot-rolling average; wire, alloy-steel, section, tube, coated-product, use-stage, or end-of-life proxy; generic global dataset without documented representativeness review |
| required_metadata | PCR id and version state; CPC reference; steel grade and certificate basis; bar/rod designation; geometry and tolerances; cold-finishing route; area or diameter reduction where applicable; surface class; annealing state; coating and residual-oil state; site geography; reference period; capacity utilization; feed and upstream dataset identities; route applicability; allocation; internal recycling; waste destinations; emission controls; data-quality and unresolved-identity disclosure |
| required_quality_disclosure | Foreground-record coverage; measured versus estimated fraction; meter and scale calibration; mass-balance closure; conditional-route decisions; missing exact Tiangong UUIDs; absent independent range evidence; upstream geography/technology/time mismatches; uncertainty and sensitivity results |
| update_trigger | Change in steel grade family, feed state, cold-forming or finishing technology, reduction or geometry, annealing furnace or atmosphere, energy supply, acid recovery or water recirculation, emission control, waste destination, allocation, site, or representative period; or resolution of a material UUID or range-evidence gap |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `unstats-cpc-3-0-structure-2025` | `official_guidance` | United Nations Statistics Division, *Central Product Classification Version 3.0 Structure*, code 41261, 2025. https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Structure_30Jun2025.csv (retrieved 2026-09-03) | Official classification identity and separation from adjacent bars, wire, sections, alloy-steel, and tube categories |
| `eu-jrc-fmp-bref-2022` | `official_guidance` | European Commission Joint Research Centre, *Best Available Techniques (BAT) Reference Document for the Ferrous Metals Processing Industry*, 2022, DOI 10.2760/196475. https://bureau-industrial-transformation.jrc.ec.europa.eu/sites/default/files/2022-12/FMP%20BREF_Final%20Version.pdf (retrieved 2026-09-03) | Semantic production boundary; cold drawing, grinding, and peeling of hot-rolled steel bars; conditional annealing; surface preparation, energy, material, waste, water, and direct-emission collection structure |
| `prc-mof-tariff-terminology-2026` | `official_guidance` | Ministry of Finance of the People’s Republic of China, 2026 tariff schedule table, HS 721510/721550/721590 terminology. https://m.mof.gov.cn/zcfb/202604/P020260428407579725260.pdf (retrieved 2026-09-03) | Professional Chinese terminology for iron or non-alloy steel, cold working/cold forming, and bars or rods; product-qualifier alignment |
