---
pcr_id: pcr.metal-products-machinery-and-equipment.basic-metals.flat-rolled-products-of-alloy-steel-except-of-silicon-electrical-steel-not-further-work-ebfccee5
language: en-US
status: candidate
sync_with: pcr.zh-CN.md
---

# Flat-rolled products of alloy steel (except of silicon-electrical steel), not further worked than hot-rolled, of a width of 600 mm or more

## 1. Scope and Applicability

This PCR covers the gate-to-gate conversion of documented alloy-steel slab into saleable flat-rolled alloy-steel product at least 600 mm wide in its as-hot-rolled condition. The foreground hot-rolling line includes feedstock conditioning when performed, reheating, hydraulic descaling, roughing and finishing rolling, controlled cooling, coiling or plate/sheet separation, trimming, directly associated water and waste-gas management, and packaging that crosses the mill gate. Primary rolling or casting needed to convert another alloy-steel primary form into slab remains in the upstream dataset. The completed product dataset shall link a compatible upstream slab dataset so that cradle-to-gate use does not omit steelmaking and casting.

The category includes stainless and high-speed alloy-steel grades when they satisfy the width and processing-state boundary; the alloy family and designation are mandatory qualifiers. It excludes silicon-electrical steel, products less than 600 mm wide, cold-rolled products, and products further worked by pickling, coating, plating, cladding, polishing, profiling, or downstream fabrication. Product use and end-of-life are outside this foreground boundary.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.metal-products-machinery-and-equipment.basic-metals.flat-rolled-products-of-alloy-steel-except-of-silicon-electrical-steel-not-further-work-ebfccee5 |
| classification_refs | CPC 3.0: 41213 (exact) |
| covered_products | Alloy-steel coil, strip, sheet, and plate at least 600 mm wide, including stainless and high-speed grades, supplied in the as-hot-rolled state and not further worked |
| excluded_products | Silicon-electrical steel; width below 600 mm; non-alloy steel; cold-rolled, pickled, coated, plated, clad, polished, profiled, or otherwise further-worked product; fabricated downstream articles |
| representative_product | Saleable hot-rolled wide alloy-steel coil or plate at the steelworks gate |
| production_route | Hot rolling of documented alloy-steel slab by reheating, descaling, roughing/finishing rolling, cooling, and coiling or cutting; feedstock steelmaking, casting, and any primary rolling route remain upstream-dataset qualifiers |
| market_state | As-hot-rolled, uncoated and otherwise not further worked; coil, plate, or sheet form declared with alloy designation, dimensions, and surface condition |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Supply of as-hot-rolled wide alloy-steel flat product at the steelworks gate |
| How much | 1,000 kg net saleable product |
| How well | Conforms to the declared alloy designation and order specification; width is at least 600 mm; no processing beyond hot rolling is included |
| How long or cycle | One production campaign or lot ending at factory-gate release; no service life is assigned |
| reference_flow_link | `reference_product_hot_rolled_wide_alloy_steel` |

| Field | Value |
| --- | --- |
| Reference amount | 1,000 kg |
| Reference product flow | Flat-rolled alloy-steel product, width 600 mm or more, as-hot-rolled |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | alloy family and grade/designation; chemical composition or governing product specification; coil, plate, or sheet form; width and thickness; surface condition; declared absence of further working; slab origin, steelmaking, casting, and any primary rolling route; rolling-mill technology; furnace-fuel identity; production geography; production period; recycled-content accounting; packaging inclusion; factory-gate boundary |

When constructing a foreground data package, every item in `Required qualifiers` shall be declared in dataset metadata, process notes, reference-flow comments, the product description, or an equivalent field. Missing qualifiers make the reference flow incomplete.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| `reference_product_mass` | reference product and mass-bearing inputs/outputs | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Use dry or as-received mass consistently as declared; normalize all inventory values to 1,000 kg net saleable product after excluding off-spec output not released as product. |
| `electricity_energy` | alternating-current electricity | Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` | MJ | Preserve meter readings in kWh and convert to MJ with the exact identity 1 kWh = 3.6 MJ; identify provider, geography, voltage, delivery boundary, and included line losses. |
| `metered_gas_volume` | natural gas, process gases, and industrial oxygen | Volume `93a60a56-a3c8-22da-a746-0800200c9a66` | m3 | Normalize metered gas volumes to the declared temperature, pressure, moisture basis, and standard used by the supplier or site; do not mix actual and standard cubic metres. |
| `water_volume` | supplied process water and wastewater | Volume `93a60a56-a3c8-22da-a746-0800200c9a66` | m3 | Report water crossing the foreground boundary by source or destination; disclose whether recycled water is internal and avoid counting internal recirculation as both an input and output. |

## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Documented alloy-steel slab accepted at the hot-rolling-line boundary, with measured mass, alloy identity, dimensions, temperature/hot-charge state, production route, upstream dataset, and transport handoff |
| starting_condition_role | The foreground starts at rolling feedstock so one hot-rolling rule can cover materially different alloy families and upstream BF-BOF, EAF, remelting, or specialty refining routes without silently averaging them |
| product_classification_scope | CPC 3.0 subclass 41213: alloy-steel flat products except silicon-electrical steel, at least 600 mm wide, and not further worked than hot-rolled |
| recursive_input_rule | If a same-category hot-rolled product is used as feedstock, record it once as an upstream product input with its own dataset and do not recursively reapply this PCR inside the same foreground process |
| upstream_dataset_requirement | Link the slab to a geographically, temporally, technologically, and alloy-compatible upstream dataset covering raw-material production, steelmaking, secondary metallurgy, casting, and any primary rolling before slab receipt; disclose any proxy |
| disclosure | Declare product form, alloy grade, width, thickness, surface state, furnace fuel, hot/cold charge, mill configuration, water-treatment boundary, internal recycling treatment, packaging, geography, year, allocation method, and every excluded operation |

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `boundary_hot_rolling_line` | foreground process | Include reheating, descaling, roughing and finishing rolling, cooling, finishing, directly associated abatement, internal transport, and on-site water handling insofar as each operation serves the declared product. | `eu-ferrous-metals-bat-2022`; `worldsteel-lci-methodology-2017` |
| `boundary_upstream_feedstock` | alloy-steel slab | Keep steelmaking, casting, and any primary rolling before slab receipt outside the hot-rolling foreground only when a compatible upstream dataset is linked; otherwise the completed dataset is gate-to-gate and shall not be represented as cradle-to-gate. | `worldsteel-lci-methodology-2017` |
| `boundary_actual_operations` | product state | Include only operations actually performed before factory-gate release and exclude pickling, cold rolling, coating, plating, cladding, profiling, downstream fabrication, use, and end-of-life. | `un-cpc-v3-structure-2025`; `eu-ferrous-metals-bat-2022` |
| `boundary_cutoff` | foreground exchanges | Record every energy input and all material, waste, co-product, and elementary exchanges required to reproduce mass, water, energy, and carbon balances; justify any excluded exchange and retain the screening record. | `worldsteel-lci-methodology-2017` |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| `hot_rolling_line` | Alloy-steel hot-rolling line | `required` | Always included; individual fuel, oxygen, lubricant, packaging, residue, and wastewater rows are conditional on actual operation | Foreground conversion from documented alloy-steel slab through conditioning, reheating, descaling, rolling, cooling, finishing, abatement, and dispatch | All exchanges normalized to 1,000 kg net saleable reference product |

### Process: Alloy-steel hot-rolling line (`hot_rolling_line`)

#### Inputs

##### Product flows

###### Alloy-steel rolling feedstock (`input_alloy_steel_slab`)

Record the measured mass, grade, dimensions, and hot-charge state of the specific alloy-steel slab entering the line.

- Selected flow: Alloy-steel slab for hot rolling
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: measured gross feedstock mass accepted by the rolling line
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1,000 kg net saleable reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_mass_and_yield_records`
- Sources: `un-cpc-v3-structure-2025`; `worldsteel-lci-methodology-2017`

###### Alternating-current electricity delivered to the line (`input_alternating_current_electricity`)

Record metered alternating-current electricity used by the rolling line and its directly associated abatement.

- Selected flow: Alternating-current electricity delivered to the hot-rolling-line meter
- Flow property / unit: Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- Amount rule: metered electricity consumption, converted from kWh when necessary
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg net saleable reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_energy_and_gas_records`
- Sources: `eu-ferrous-metals-bat-2022`; `worldsteel-lci-methodology-2017`

###### Natural gas for direct-fired reheating (`input_natural_gas`)

Include only natural gas actually consumed in direct-fired heating or a directly associated combustion unit.

- Selected flow: natural gas in the gaseous state `4f19ca0e-7b3b-11dd-ad8b-0800200c9a66`
- Flow property / unit: Volume `93a60a56-a3c8-22da-a746-0800200c9a66` / m3
- Amount rule: supplier- or meter-recorded natural-gas volume at disclosed reference conditions
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg net saleable reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_energy_and_gas_records`
- Sources: `eu-ferrous-metals-bat-2022`; `worldsteel-lci-methodology-2017`

###### Coke-oven gas for direct-fired reheating (`input_coke_oven_gas`)

Include only coke-oven gas that crosses the declared rolling-line energy boundary.

- Selected flow: Coal gas `c7d45c5f-9cab-4706-bde4-38a6ce2914da`
- Flow property / unit: Volume `93a60a56-a3c8-22da-a746-0800200c9a66` / m3
- Amount rule: metered coke-oven-gas volume at disclosed reference conditions
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg net saleable reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_energy_and_gas_records`
- Sources: `eu-ferrous-metals-bat-2022`; `worldsteel-lci-methodology-2017`

###### Blast-furnace gas for direct-fired reheating (`input_blast_furnace_gas`)

Include only blast-furnace gas that crosses the declared rolling-line energy boundary.

- Selected flow: blast furnace gas `50bd1eb9-efc2-4e40-928d-5114f74d4fb5`
- Flow property / unit: Volume `93a60a56-a3c8-22da-a746-0800200c9a66` / m3
- Amount rule: metered blast-furnace-gas volume at disclosed reference conditions
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg net saleable reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_energy_and_gas_records`
- Sources: `eu-ferrous-metals-bat-2022`; `worldsteel-lci-methodology-2017`

###### Basic-oxygen-furnace gas for direct-fired reheating (`input_basic_oxygen_furnace_gas`)

Include only basic-oxygen-furnace gas that crosses the declared rolling-line energy boundary.

- Selected flow: Basic-oxygen-furnace gas
- Flow property / unit: Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- Amount rule: metered volume multiplied by the campaign-specific net calorific value
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg net saleable reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_energy_and_gas_records`
- Sources: `eu-ferrous-metals-bat-2022`; `worldsteel-lci-methodology-2017`

###### Industrial oxygen for oxygen-enriched or oxy-fuel firing (`input_industrial_oxygen`)

Include only industrial oxygen crossing the boundary for actual oxygen-enriched or oxy-fuel combustion.

- Selected flow: Industrial oxygen `bd4b0f96-2090-4806-a648-335ab20ff401`
- Flow property / unit: Volume `93a60a56-a3c8-22da-a746-0800200c9a66` / m3
- Amount rule: metered oxygen volume at disclosed purity, pressure, and reference conditions
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1,000 kg net saleable reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_energy_and_gas_records`
- Sources: `eu-ferrous-metals-bat-2022`

###### Supplied process water (`input_process_water`)

Record one identified external water source; instantiate separate concrete flows in the data package when multiple sources cross the boundary.

- Selected flow: Process water supplied to the hot-rolling line
- Flow property / unit: Volume `93a60a56-a3c8-22da-a746-0800200c9a66` / m3
- Amount rule: metered external water supplied to descaling, cooling, dust suppression, and associated treatment, excluding internal recirculation
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg net saleable reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_water_records`
- Sources: `eu-ferrous-metals-bat-2022`

###### Hot-rolling lubricant oil (`input_hot_rolling_lubricant_oil`)

Include only lubricant oil consumed by the declared hot-rolling operation and crossing the foreground boundary.

- Selected flow: Hot rolling oil `b6d54639-2da8-49b3-89d2-e14324bb14c8`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: purchased mass adjusted for stock change and documented recovery
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg net saleable reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_consumable_and_packaging_records`
- Sources: `eu-ferrous-metals-bat-2022`

###### Steel strapping (`input_steel_strapping`)

Include only steel strap leaving the factory gate with the declared product.

- Selected flow: Steel baling band `56fe4f71-b594-4b55-8553-c87f2516737d`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: issued strap mass less returned unused strap, allocated to dispatched reference product
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1,000 kg net saleable reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_consumable_and_packaging_records`
- Sources: `worldsteel-lci-methodology-2017`

##### Waste flows

No waste input is prescribed. Record any actual waste input as one separately identified flow with measured quantity, composition, origin, and treatment role.

##### Elementary flows

No elementary input is prescribed. Record site-specific elementary inputs separately when they cross the technosphere-environment boundary.

#### Outputs

##### Product flows

###### Reference hot-rolled wide alloy-steel product (`reference_product_hot_rolled_wide_alloy_steel`)

This is the net saleable as-hot-rolled alloy-steel product released at the factory gate and linked to the declared reference flow.

- Selected flow: Flat-rolled alloy-steel product, width 600 mm or more, as-hot-rolled
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: fixed reference output after saleable-product verification
- Value mode: Fixed value (`fixed_value`)
- Specificity: Generic (`generic`)
- Normalization basis: 1,000 kg net saleable reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Method formula (`method_formula`)
- Sources: `un-cpc-v3-structure-2025`; `un-cpc-v3-explanatory-notes-2025`; `worldsteel-lci-methodology-2017`

##### Waste flows

###### Crop and trimming alloy-steel scrap (`output_crop_trim_alloy_steel_scrap`)

Record alloy-steel crop ends and trimming scrap leaving the rolling-line boundary; internal return shall be tracked gross but netted only once at the declared boundary.

- Selected flow: Crop and trimming alloy-steel scrap
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: measured dispatched scrap plus verified stock increase, less documented return to the same foreground boundary
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1,000 kg net saleable reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_mass_and_yield_records`
- Sources: `eu-ferrous-metals-bat-2022`; `worldsteel-lci-methodology-2017`

###### Hot-rolling mill scale (`output_mill_scale`)

Record the mass of mill scale separated from descaling and water-treatment systems, with recovery or disposal destination declared.

- Selected flow: Mill scale `aad763e2-78ab-4fcb-8a3b-8d8525c9e6ca`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: measured dispatched mass plus verified stock change, reported separately by recovery or disposal fate
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg net saleable reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_residue_and_wastewater_records`
- Sources: `eu-ferrous-metals-bat-2022`; `worldsteel-lci-methodology-2017`

###### Oily process-water-treatment sludge (`output_oily_water_treatment_sludge`)

Include this row when oil-bearing sludge is removed from rolling-water treatment and leaves the declared boundary.

- Selected flow: Oily sludge from hot-rolling process-water treatment
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: measured wet mass with moisture content and destination disclosed
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg net saleable reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_residue_and_wastewater_records`
- Sources: `eu-ferrous-metals-bat-2022`

###### Hot-rolling wastewater sent off site (`output_hot_rolling_wastewater`)

Include only wastewater that crosses the site boundary for external treatment; record on-site recycled water internally without duplicating it as an external output.

- Selected flow: Hot-rolling wastewater sent off site for treatment
- Flow property / unit: Volume `93a60a56-a3c8-22da-a746-0800200c9a66` / m3
- Amount rule: metered wastewater volume at the off-site treatment handoff
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg net saleable reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_residue_and_wastewater_records`
- Sources: `eu-ferrous-metals-bat-2022`

##### Elementary flows

###### Direct fossil carbon dioxide to air (`output_fossil_carbon_dioxide_to_air`)

Record direct fossil carbon dioxide from rolling-line fuel combustion, excluding upstream fuel-production emissions.

- Selected flow: carbon dioxide (fossil) `08a91e70-3ddc-11dd-923d-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: directly measured mass where available, otherwise calculated from collected fuel quantity, fuel carbon content, and documented oxidation assumptions
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg net saleable reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_direct_air_emission_records`
- Sources: `eu-ferrous-metals-bat-2022`; `worldsteel-lci-methodology-2017`

###### Particulate matter emitted to air (`output_particulate_matter_to_air`)

Record particulate matter crossing to air from conditioning, descaling, roughing, finishing, and associated extraction or abatement using the declared measurement fraction and compartment.

- Selected flow: Particulate matter, particle size unspecified `0ce3dedb-caca-407b-a856-a90470eb8ec0`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: stack and fugitive emission mass calculated from measured concentration and gas flow, with particulate fraction stated
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg net saleable reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_direct_air_emission_records`
- Sources: `eu-ferrous-metals-bat-2022`

## 7. Allocation and Co-product Handling

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `allocation_subdivision_first` | campaigns, grades, and product forms | Use campaign-, line-, or grade-specific meters and mass records to subdivide the process before allocation; do not average stainless, high-speed, and other alloy families when separate records exist. | `worldsteel-lci-methodology-2017` |
| `allocation_common_burdens` | inseparable common rolling-line inputs | When subdivision is not possible, allocate common burdens by net saleable output mass among co-produced hot-rolled products and disclose the included grades, output masses, and sensitivity to the allocation choice. | `worldsteel-lci-methodology-2017` |
| `allocation_internal_recycling` | internal water, scale, and metallic scrap loops | Record gross internal recovery for mass-balance evidence but count only net exchanges crossing the declared foreground boundary; do not assign both an avoided burden and an input burden to the same internal loop. | `worldsteel-lci-methodology-2017` |
| `allocation_exported_materials` | scrap, mill scale, and other exported material | Declare whether each exported material is waste or a marketable co-product, its destination and treatment; apply substitution or another allocation only under the governing study method with documented functional equivalence and sensitivity analysis. | `worldsteel-lci-methodology-2017` |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_mass_and_yield_records` | `hot_rolling_line` | feedstock, saleable output, crop scrap, scale | weighbridge, slab-tracking, production, and inventory records | timestamp; campaign; grade; slab mass; saleable product mass; scrap/scale mass; stock changes; hot-charge state | calibrated scales and reconciled production records | kg | each batch with monthly reconciliation | representative 12-month period | all lines and finishing stations serving the declared product | sum net boundary-crossing mass by grade and normalize to saleable output | calibration records; mass-balance reconciliation; exception log |
| `cp_energy_and_gas_records` | `hot_rolling_line` | electricity, natural gas, process gases, oxygen | meter, invoice, gas analysis, and energy-balance records | meter id; opening/closing readings; kWh; gas volume; temperature; pressure; moisture basis; NCV; oxygen purity; allocation key | calibrated meters reconciled to invoices and campaign logs | kWh; MJ; m3 | continuous or per batch with monthly reconciliation | representative 12-month period | rolling line and directly associated abatement/utilities | subtract exports and unrelated users, convert units, allocate only inseparable shared use, normalize to saleable output | meter calibration; supplier statement; energy balance; allocation record |
| `cp_water_records` | `hot_rolling_line` | supplied process water | water-meter and water-balance records | source; meter readings; make-up volume; recirculated volume; discharge volume; allocation key | source-specific meters and annual water balance | m3 | continuous or daily with monthly reconciliation | representative 12-month period | descaling, cooling, dust suppression, and associated treatment | count only external supply at the boundary and normalize to saleable output | meter calibration; water balance; source and discharge permits |
| `cp_consumable_and_packaging_records` | `hot_rolling_line` | lubricant oil and steel strap | purchase, issue, return, recovery, and stock records | material identity; grade; issued mass; returned mass; recovered mass; opening/closing stock; product assignment | inventory reconciliation linked to campaign and dispatch records | kg | each issue with monthly reconciliation | representative 12-month period | rolling stands and dispatch packaging | purchases plus stock decrease minus returns/recovery, assigned to declared product | invoices; inventory reconciliation; packaging specification |
| `cp_residue_and_wastewater_records` | `hot_rolling_line` | mill scale, oily sludge, off-site wastewater | scales, manifests, laboratory, tank-level, and flow-meter records | residue identity; wet mass; moisture; wastewater volume; oil content; destination; recovery/disposal code; stock change | measured dispatch and reconciled treatment records | kg; m3 | each dispatch or continuous meter with monthly reconciliation | representative 12-month period | rolling line and directly associated water treatment | sum each separately identified net output by destination and normalize to saleable output | waste manifests; laboratory reports; meter calibration; stock reconciliation |
| `cp_direct_air_emission_records` | `hot_rolling_line` | fossil carbon dioxide and particulate matter | continuous monitoring, stack tests, fuel records, and carbon-balance records | source id; operating hours; concentration; gas flow; particulate fraction; fuel amount; carbon content; oxidation factor; biogenic/fossil split | direct measurement where available, otherwise documented calculation from collected activity data | kg | continuous or campaign-specific; stack tests at permit frequency | representative 12-month period including normal and abnormal operation | all relevant line and abatement emission points | integrate measured emissions or calculate by source, subtract unrelated processes, normalize to saleable output | monitor calibration; accredited test report; fuel certificate; calculation workbook |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_reference_normalization` | every inventory row | normalized amount = net row amount × 1,000 / net saleable reference-product mass | boundary-crossing row amount; net saleable product mass | row amount per 1,000 kg reference product |  |
| `calc_electricity_conversion` | electricity | electricity (MJ) = meter electricity (kWh) × 3.6 | metered kWh | delivered electricity in MJ |  |
| `calc_process_gas_energy` | coke-oven, blast-furnace, and BOF gas | gas energy (MJ) = reference-condition gas volume (m3) × campaign-specific NCV (MJ/m3) | normalized gas volume; measured or supplier NCV | gas energy in MJ | `eu-ferrous-metals-bat-2022` |
| `calc_direct_fossil_co2` | direct fuel combustion | Prefer direct measured fossil CO2; otherwise sum fuel quantity × fuel carbon content × oxidation factor × 44/12, keeping fossil and biogenic carbon separate | fuel records; carbon content; oxidation factor; measured CO2 where available | kg fossil CO2 to air | `worldsteel-lci-methodology-2017` |
| `calc_mass_balance` | alloy-steel mass outputs | reconcile slab input with saleable product, metallic scrap, mill scale, sludge solids, and documented stock change; investigate the residual rather than forcing closure | all measured mass inputs/outputs and stock changes | documented mass-balance residual | `worldsteel-lci-methodology-2017` |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_product_identity` | reference product and feedstock | Preserve grade/designation, chemistry or governing specification, form, dimensions, surface state, and lot/campaign linkage from slab receipt through dispatch. | material certificates; order specification; slab and coil/plate tracking records |
| `dq_temporal_coverage` | all foreground records | Use a representative consecutive 12-month period where practicable; justify shorter periods, shutdown treatment, abnormal operation, and any record older than five years. | coverage summary; production calendar; deviation log; `worldsteel-lci-methodology-2017` |
| `dq_meter_and_mass_balance` | energy, gas, water, and material balances | Document meter boundaries, calibrations, missing-data treatment, allocation keys, stock changes, and reconciliation residuals. | calibration certificates; balance sheets; reconciliation and exception logs |
| `dq_geography_technology` | upstream and foreground datasets | Match geography, furnace/mill technology, alloy family, hot-charge practice, fuel mix, and water-treatment configuration; identify and justify every proxy. | dataset metadata; process diagram; supplier declarations |
| `dq_completeness` | inventory | Screen every line input/output and environmental release; retain reasons for exclusions and show that internal recycling is not double counted. | signed flow screening; mass/water/energy/carbon balances; waste and emission registers |

## 9. Validation Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `validation_identity` | reference product | Reject a dataset unless alloy designation, non-silicon-electrical identity, width of at least 600 mm, as-hot-rolled state, and absence of further working are demonstrated. | `un-cpc-v3-structure-2025` |
| `validation_reference_mass` | reference flow | Confirm that net saleable output equals exactly 1,000 kg after normalization and that every inventory row uses the same denominator. |  |
| `validation_upstream_link` | slab input | Report the dataset as gate-to-gate unless a compatible upstream steelmaking, casting, and any pre-slab primary-rolling dataset is linked without overlap or omission. | `worldsteel-lci-methodology-2017` |
| `validation_energy_water` | energy, gas, oxygen, and water | Reconcile meters to the declared rolling-line boundary, state gas reference conditions and water source/destination, and explain material residuals or shared-service allocations. | `eu-ferrous-metals-bat-2022`; `worldsteel-lci-methodology-2017` |
| `validation_residues_emissions` | waste and elementary outputs | Verify separate identities, quantities, and fates for scrap, scale, sludge, wastewater, fossil CO2, and particulate matter; do not substitute a combined residue or emissions row. | `eu-ferrous-metals-bat-2022`; `worldsteel-lci-methodology-2017` |
| `validation_allocation` | multi-product campaigns and exported materials | Confirm subdivision was attempted first and every remaining allocation, substitution, destination, and sensitivity is documented without double counting internal loops. | `worldsteel-lci-methodology-2017` |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | Foreground hot-rolling production dataset; may be combined with a compatible upstream alloy-steel slab dataset for cradle-to-gate publication |
| downstream_use | `secondary_dataset`; `background_dataset` after independent review of representativeness, allocation, and upstream linkage |
| allowed_use | Product-footprint and lifecycle-model studies requiring an explicitly graded, at-least-600-mm-wide, as-hot-rolled alloy-steel input within the represented geography, technology, and period |
| excluded_use | Silicon-electrical steel; width below 600 mm; cold-rolled, pickled, coated, plated, clad, polished, profiled, or fabricated products; unsupported geography or alloy-family proxies; public comparative assertions without study-specific review |
| required_metadata | PCR id and version; product grade/designation and chemistry/specification; form and dimensions; surface and further-working state; upstream slab dataset; steelmaking, casting, and any primary-rolling route; mill and furnace technology; fuel identity; geography; period; allocation; water-treatment boundary; packaging; UUID gaps and proxies |
| required_quality_disclosure | Primary-data share and period; calibration and reconciliation evidence; mass/water/energy/carbon residuals; missing-data treatment; allocation sensitivity; data age; upstream compatibility; excluded operations; unresolved flow identities and range evidence |
| update_trigger | Change in alloy family, product form, feedstock route, mill configuration, furnace fuel, hot-charge practice, water treatment, allocation method, geography, representative year, product specification, or resolution of a material UUID/evidence gap |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `un-cpc-v3-structure-2025` | `official_guidance` | United Nations Statistics Division, Central Product Classification Version 3.0 structure (30 June 2025). https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Structure_30Jun2025.csv (retrieved 2026-09-03) | Official subclass title and product identity: alloy-steel flat product, width threshold, as-hot-rolled state, and silicon-electrical-steel exclusion |
| `un-cpc-v3-explanatory-notes-2025` | `official_guidance` | United Nations Statistics Division, Central Product Classification Version 3.0 explanatory notes (30 June 2025). https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Exp_Notes_30Jun2025.pdf (retrieved 2026-09-03) | Original explanatory note confirming that hot-rolled high-speed-steel flat products with width of 600 mm or more are classified in subclass 41213 |
| `eu-ferrous-metals-bat-2022` | `standard` | Commission Implementing Decision (EU) 2022/2110 of 11 October 2022 establishing BAT conclusions for the ferrous metals processing industry. https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX:32022D2110 (retrieved 2026-09-03) | Hot-rolling process decomposition; energy, water, residues, emissions, monitoring, and directly associated treatment requirements; BAT performance levels are not used as empirical inventory ranges |
| `worldsteel-lci-methodology-2017` | `method_factor` | World Steel Association, Life Cycle Inventory Methodology Report, 2017. https://worldsteel.org/wp-content/uploads/Life-cycle-inventory-methodology-report.pdf (retrieved 2026-09-03) | Factory-gate declared unit, system-boundary framing, primary-data quality, internal recovery and co-product accounting; its stated stainless-steel exclusion limits direct applicability to stainless grades, for which foreground rules and a compatible upstream method must be documented separately |
