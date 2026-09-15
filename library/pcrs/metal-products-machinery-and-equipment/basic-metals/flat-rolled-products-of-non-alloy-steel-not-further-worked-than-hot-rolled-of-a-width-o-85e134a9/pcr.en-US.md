---
pcr_id: pcr.metal-products-machinery-and-equipment.basic-metals.flat-rolled-products-of-non-alloy-steel-not-further-worked-than-hot-rolled-of-a-width-o-85e134a9
language: en-US
status: candidate
content_maturity: authored_methodology
translation_status: canonical
sync_with: pcr.zh-CN.md
---

# Flat-rolled products of non-alloy steel, not further worked than hot-rolled, of a width of less than 600 mm

## 1. Scope and Applicability

This PCR covers non-alloy-steel flat-rolled products whose finished width is less than 600 mm and whose metallurgical state is not further worked than hot-rolled. It covers narrow hot-rolled strip supplied in coils and hot-rolled flat products supplied in cut lengths. The production route may roll semi-finished steel directly to the declared width or may finish a wider hot-rolled non-alloy-steel product by trimming, slitting, or cutting without cold reduction or a change in metallurgical state. The foreground data package shall declare which route and which included unit processes produced the reference product.

Cold-rolled products; clad, plated, coated, pickled-and-oiled, polished, or otherwise surface-treated products; alloy and stainless steels; electrical steels; long products; tubes; and products with a finished width of 600 mm or more are excluded. Packaging, outbound transport beyond the mill gate, fabrication into a downstream article, use, and end of life are outside this PCR unless a study explicitly adds and reports them as separate downstream modules.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.metal-products-machinery-and-equipment.basic-metals.flat-rolled-products-of-non-alloy-steel-not-further-worked-than-hot-rolled-of-a-width-o-85e134a9 |
| classification_refs | CPC 3.0: 41212, exact product-classification context (`un-cpc-3-0-structure-2025`) |
| covered_products | Non-alloy-steel flat-rolled strip, coil, sheet, or cut length; finished width < 600 mm; not further worked than hot-rolled |
| excluded_products | Width >= 600 mm; alloy, stainless, or electrical steel; cold-reduced, clad, plated, coated, pickled-and-oiled, polished, or otherwise further-worked product; long product or tube |
| representative_product | Narrow hot-rolled non-alloy-steel strip coil at the producing or finishing mill gate |
| production_route | Declared direct hot-rolling route from semi-finished steel, or declared trimming/slitting/cutting route from a wider hot-rolled non-alloy-steel input without cold reduction or surface treatment |
| market_state | As-shipped dry coil, strip, sheet, or cut length; uncoated and without packaging mass in the reference amount |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Conforming flat-rolled non-alloy-steel product, finished width < 600 mm, not further worked than hot-rolled |
| How much | 1,000 kg net conforming product, excluding packaging |
| How well | Declared steel grade, thickness, width, dimensional tolerance, edge condition, surface condition, and coil or cut-length form; no cold reduction, cladding, plating, coating, pickling-and-oiling, polishing, or other excluded further work |
| How long or cycle | No use cycle; production represented over a declared representative accounting period |
| reference_flow_link | `reference_product_narrow_hot_rolled_non_alloy_steel` |

| Field | Value |
| --- | --- |
| Reference amount | 1,000 kg |
| Reference product flow | Flat-rolled products of non-alloy steel, not further worked than hot-rolled, of a width of less than 600 mm `9705bbad-51bd-4ee8-af46-21324f57c577` |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | non-alloy steel grade; finished width and thickness; dimensional tolerance; coil, strip, sheet, or cut-length form; edge and surface condition; direct-rolling or wider-strip finishing route; reheating furnace and rolling-mill configuration when applicable; fuel mix; electricity supplier or grid geography; water-circuit boundary; site and geography; production period; allocation method; treatment of internally recycled and exported scale and scrap |

When constructing a foreground data package, every required qualifier shall be declared in dataset metadata, process notes, the reference-flow comment, the product description, or an equivalent data-package field. Missing required qualifiers make the reference-flow definition incomplete.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| `reference_product_mass` | Reference product and all steel feedstock, scale, and scrap rows | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Report dry as-shipped product mass, exclude packaging, and normalize all period totals to 1,000 kg of conforming reference product. |
| `fuel_volume_conditions` | Gaseous natural-gas input | Volume `93a60a56-a3c8-22da-a746-0800200c9a66` | m3 | Report the metered gas volume with temperature, pressure, and meter reference conditions; do not combine volumes measured at different reference conditions without documented conversion. |
| `electricity_energy_basis` | Alternating-current electricity inputs | Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` | MJ | Preserve metered electrical energy by process stage where submetering exists; document any conversion to MJ and the supplier-specific, regional, or national electricity dataset used upstream. |
| `makeup_water_mass_balance` | Descaling and cooling makeup-water rows | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Record only net boundary-crossing process-water mass. Convert a calibrated volume-meter record to mass only with a documented period-specific density; internal recirculating-loop flow shall not be counted repeatedly as fresh input. |
| `wastewater_volume_balance` | Treated-wastewater row | Volume `93a60a56-a3c8-22da-a746-0800200c9a66` | m3 | Record only net treated discharge crossing the boundary; internal recirculating-loop flow shall not be counted repeatedly as discharge. |

## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Either semi-finished non-alloy steel ready for reheating and hot rolling, or a wider hot-rolled non-alloy-steel flat product ready only for trimming, slitting, or cutting; the selected condition and upstream dataset are declared |
| starting_condition_role | Purchased or transferred technosphere input at the first foreground unit process |
| product_classification_scope | Finished non-alloy-steel flat-rolled product with width < 600 mm and no further work beyond hot rolling and permitted dimensional finishing |
| recursive_input_rule | Do not absorb an upstream hot-rolled steel input into the output reference flow. Record it as a separate technosphere input with its own upstream dataset and width/product-state qualifiers. |
| upstream_dataset_requirement | Link every semi-finished or wider hot-rolled steel input, fuel, electricity, and water supply to a geographically and technologically representative upstream dataset; prevent double counting of any upstream hot-rolling stage. |
| disclosure | Declare the starting condition, direct-rolling or wider-strip finishing route, included stages, hot-charge practice, furnace and mill type, finishing operations, internal recycling, waste-water treatment, site, geography, period, and all exclusions. |

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `boundary_stage_inclusion` | foreground_gate_to_gate_boundary | Include every on-site stage used to transform the declared starting steel condition into conforming product: handling and conditioning, reheating where applicable, descaling, roughing and finish rolling, controlled cooling, coiling, and dimensional finishing; include associated water treatment and ancillary energy in the stages that use them. | `ec-jrc-fmp-bref-2022`; `worldsteel-lci-methodology-2017` |
| `boundary_exchange_completeness` | foreground_gate_to_gate_boundary | Record all boundary-crossing materials, fuels, electricity, net water, measured or calculated emissions, wastes, and recovery outputs for included stages; do not replace atomic exchanges with a combined utility, fuel, waste, or emission row. | `worldsteel-lci-methodology-2017` |
| `boundary_route_exclusivity` | route_selection | Include reheating and hot-rolling stages only when performed by the foreground site. For a slitting/cutting-only route, link the wider hot-rolled input to an upstream dataset and exclude its already-modelled hot-rolling burdens from the foreground conversion stage. | `ec-jrc-fmp-bref-2022`; `worldsteel-lci-methodology-2017` |
| `boundary_excluded_operations` | downstream_and_further_work | Exclude cold reduction, pickling-and-oiling, cladding, plating, coating, polishing, downstream fabrication, packaging, outbound transport, use, and end of life from the reference boundary unless separately added and reported outside this reference result. | `un-cpc-3-0-structure-2025`; `ec-jrc-fmp-bref-2022` |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| `reheating_and_conditioning` | Feedstock handling, conditioning, and reheating | conditional | Include when the foreground site hot-rolls semi-finished steel; omit for a slitting/cutting-only converter that receives a fully hot-rolled wider input. | Prepare and heat feedstock to rolling condition. | Mass of semi-finished steel charged and transferred to rolling. |
| `hot_rolling_and_descaling` | Descaling and hot rolling | conditional | Include when the foreground site performs hot rolling; omit when that stage is represented entirely by the upstream wider-strip dataset. | Remove scale and reduce steel to the required hot-rolled dimensions and properties. | Mass of hot-rolled strip leaving the finishing train. |
| `cooling_and_finishing` | Controlled cooling, coiling, and dimensional finishing | required | Always include; record only the cooling, coiling, trimming, slitting, and cutting operations actually performed. | Produce and release the conforming reference product at the mill gate. | 1,000 kg net conforming reference product. |

### Process: Feedstock handling, conditioning, and reheating (`reheating_and_conditioning`)

#### Inputs

##### Product flows

###### Semi-finished non-alloy-steel feedstock (`semi_finished_non_alloy_steel_feedstock`)

Record the mass of slab or other declared semi-finished non-alloy steel entering the foreground hot-rolling route. The steelmaking and casting burdens belong to the linked upstream dataset.

- Selected flow: Continuously cast steel slab for flat rolling `fa93b446-0340-4d7b-9f4d-e3f78789ea94`
- Flow property / unit: Mass / kg
- Amount rule: Weighed net mass charged to reheating, reconciled for stock change and normalized to 1,000 kg conforming reference product
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1,000 kg conforming reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_reheating_inputs`
- Sources: `ec-jrc-fmp-bref-2022`; `worldsteel-lci-methodology-2017`

###### Natural gas for reheating (`reheating_natural_gas`)

Record metered gaseous natural gas consumed by included reheating or equalisation furnaces. Disclose supply geography and gas-volume reference conditions.

- Selected flow: natural gas in the gaseous state `4f19ca0e-7b3b-11dd-ad8b-0800200c9a66`
- Flow property / unit: Volume / m3
- Amount rule: Metered furnace natural-gas volume attributable to the accounting period and normalized to 1,000 kg conforming reference product
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1,000 kg conforming reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_reheating_inputs`
- Sources: `ec-jrc-fmp-bref-2022`

###### Alternating-current electricity for reheating (`reheating_electricity`)

Record metered alternating-current electricity used by feedstock handling, furnace auxiliaries, and conditioning equipment assigned to this process.

- Selected flow: alternating current `4d0361a3-56cc-45f9-aa42-bb9103285bf9`
- Flow property / unit: Net calorific value / MJ
- Amount rule: Submetered electricity, or a documented engineering allocation of a shared meter, normalized to 1,000 kg conforming reference product
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg conforming reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_reheating_inputs`
- Sources: `worldsteel-lci-methodology-2017`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

##### Waste flows

###### Furnace scale removed from reheated steel (`reheating_furnace_scale`)

Record the measured mass of scale collected from reheating and primary conditioning as an output of this process. State whether the net output is internally recycled, externally recovered, or disposed.

- Selected flow: Mill scale `aad763e2-78ab-4fcb-8a3b-8d8525c9e6ca`
- Flow property / unit: Mass / kg
- Amount rule: Measured net scale output after moisture correction and internal return, normalized to 1,000 kg conforming reference product
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1,000 kg conforming reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_reheating_outputs`
- Sources: `ec-jrc-fmp-bref-2022`; `worldsteel-lci-methodology-2017`

##### Elementary flows

###### Fossil carbon dioxide from reheating (`reheating_fossil_carbon_dioxide_to_air`)

Record direct fossil carbon dioxide emitted by included reheating furnaces, using stack measurements or a documented fuel-carbon calculation without adding upstream fuel-supply emissions.

- Selected flow: carbon dioxide (fossil) `08a91e70-3ddc-11dd-923d-0050c2490048`
- Flow property / unit: Mass / kg
- Amount rule: Measured or verified calculated direct fossil CO2 emitted to air, normalized to 1,000 kg conforming reference product
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1,000 kg conforming reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_reheating_outputs`
- Sources: `worldsteel-lci-methodology-2017`

###### Nitrogen oxides from reheating (`reheating_nitrogen_oxides_to_air`)

Record direct stack nitrogen oxides from reheating as the facility reports them, retaining the reporting convention and converting to mass as NO2 only when that convention is documented.

- Selected flow: Nitrogen oxides to air, reported as NO2
- Flow property / unit: Mass / kg
- Amount rule: Stack-monitoring or test result multiplied by dry-gas flow and operating time, normalized to 1,000 kg conforming reference product
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1,000 kg conforming reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_reheating_outputs`
- Sources: `ec-jrc-fmp-bref-2022`; `worldsteel-lci-methodology-2017`

###### Sulfur dioxide from reheating (`reheating_sulfur_dioxide_to_air`)

Record direct sulfur dioxide from reheating when measured or calculated from the actual furnace fuel sulfur balance; do not substitute a generic fuel-mix value.

- Selected flow: Sulfur dioxide to air
- Flow property / unit: Mass / kg
- Amount rule: Measured or verified calculated direct SO2 emitted to air, normalized to 1,000 kg conforming reference product
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1,000 kg conforming reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_reheating_outputs`
- Sources: `ec-jrc-fmp-bref-2022`; `worldsteel-lci-methodology-2017`

### Process: Descaling and hot rolling (`hot_rolling_and_descaling`)

#### Inputs

##### Product flows

###### Alternating-current electricity for hot rolling (`hot_rolling_electricity`)

Record metered alternating-current electricity used by descaling pumps, roughing and finishing stands, drives, roller tables, and process controls assigned to this process.

- Selected flow: alternating current `4d0361a3-56cc-45f9-aa42-bb9103285bf9`
- Flow property / unit: Net calorific value / MJ
- Amount rule: Submetered electricity, or a documented engineering allocation of a shared meter, normalized to 1,000 kg conforming reference product
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1,000 kg conforming reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_hot_rolling_inputs`
- Sources: `ec-jrc-fmp-bref-2022`; `worldsteel-lci-methodology-2017`

###### Makeup water for high-pressure descaling (`descaling_makeup_water`)

Record only net fresh or externally supplied makeup water entering the descaling circuit. Internal recirculating water is not counted again as a boundary input.

- Selected flow: Process Water `94a04f7e-2d5c-41f0-b182-d54a3b373a02`
- Flow property / unit: Mass / kg
- Amount rule: Weighed net external makeup-water mass, or calibrated volume converted with documented period-specific density, entering the descaling circuit and normalized to 1,000 kg conforming reference product
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1,000 kg conforming reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_hot_rolling_inputs`
- Sources: `ec-jrc-fmp-bref-2022`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

##### Waste flows

###### Rolling-mill scale (`rolling_mill_scale`)

Record scale separated from descaling sprays, scale pits, and process-water treatment as one net waste or recovery output of this process. Moisture and oil content shall be reported with the measured mass.

- Selected flow: Mill scale `763bdad1-b443-428a-89b6-371a6807fc6c`
- Flow property / unit: Mass / kg
- Amount rule: Measured net scale output after moisture correction and internal return, normalized to 1,000 kg conforming reference product
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1,000 kg conforming reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_hot_rolling_outputs`
- Sources: `ec-jrc-fmp-bref-2022`; `worldsteel-lci-methodology-2017`

###### Hot-rolling steel scrap (`hot_rolling_steel_scrap`)

Record the net mass of cropped ends, cobbles, and other steel offcuts leaving this process as one chemically consistent non-alloy-steel scrap stream. Internal returns are balanced separately and not credited twice.

- Selected flow: Post-industrial steel scrap `c143745d-be4f-4d8f-b403-2dcbfe685349`
- Flow property / unit: Mass / kg
- Amount rule: Weighed net scrap output after internal return, normalized to 1,000 kg conforming reference product
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1,000 kg conforming reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_hot_rolling_outputs`
- Sources: `ec-jrc-fmp-bref-2022`; `worldsteel-lci-methodology-2017`

##### Elementary flows

###### Particulate matter from hot rolling (`hot_rolling_particulate_to_air`)

Record direct particulate matter released from descaling, roughing, rolling, and finishing using the facility's declared particle metric and capture boundary.

- Selected flow: Particulate matter, particle size unspecified `0ce3dedb-caca-407b-a856-a90470eb8ec0`
- Flow property / unit: Mass / kg
- Amount rule: Measured captured-stack plus quantified fugitive particulate mass, normalized to 1,000 kg conforming reference product
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1,000 kg conforming reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_hot_rolling_outputs`
- Sources: `ec-jrc-fmp-bref-2022`; `worldsteel-lci-methodology-2017`

### Process: Controlled cooling, coiling, and dimensional finishing (`cooling_and_finishing`)

#### Inputs

##### Product flows

###### Wider hot-rolled non-alloy-steel feedstock (`wider_hot_rolled_non_alloy_steel_feedstock`)

For a trimming, slitting, or cutting-only route, record the mass of fully hot-rolled wider non-alloy-steel flat product entering this process. Do not use this row for the direct narrow hot-rolling route.

- Selected flow: Non-Alloy Steel `ce3ac926-5d6f-4558-9edc-67179d93dde4`
- Flow property / unit: Mass / kg
- Amount rule: Weighed input mass, reconciled for stock change and normalized to 1,000 kg conforming reference product
- Value mode: Foreground record (`foreground_record`)
- Specificity: Route-specific (`route_specific`)
- Normalization basis: per 1,000 kg conforming reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_finishing_inputs`
- Sources: `ec-jrc-fmp-bref-2022`; `worldsteel-lci-methodology-2017`

###### Alternating-current electricity for cooling and finishing (`finishing_electricity`)

Record metered alternating-current electricity for cooling pumps, run-out tables, coilers, shears, slitters, and cut-to-length equipment actually used for the declared product route.

- Selected flow: alternating current `4d0361a3-56cc-45f9-aa42-bb9103285bf9`
- Flow property / unit: Net calorific value / MJ
- Amount rule: Submetered electricity, or a documented engineering allocation of a shared meter, normalized to 1,000 kg conforming reference product
- Value mode: Foreground record (`foreground_record`)
- Specificity: Route-specific (`route_specific`)
- Normalization basis: per 1,000 kg conforming reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_finishing_inputs`
- Sources: `ec-jrc-fmp-bref-2022`; `worldsteel-lci-methodology-2017`

###### Makeup water for controlled cooling (`cooling_makeup_water`)

When controlled strip cooling is performed in the foreground route, record only net externally supplied makeup water entering the cooling circuit. Omit the row when no water-cooled hot strip is handled.

- Selected flow: Process Water `94a04f7e-2d5c-41f0-b182-d54a3b373a02`
- Flow property / unit: Mass / kg
- Amount rule: Weighed cooling-circuit makeup-water mass, or calibrated volume converted with documented period-specific density, less documented transfers to other site systems and normalized to 1,000 kg conforming reference product
- Value mode: Foreground record (`foreground_record`)
- Specificity: Route-specific (`route_specific`)
- Normalization basis: per 1,000 kg conforming reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_finishing_inputs`
- Sources: `ec-jrc-fmp-bref-2022`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Conforming narrow hot-rolled non-alloy-steel product (`reference_product_narrow_hot_rolled_non_alloy_steel`)

This is the sole reference-product output. Report only product meeting the declared grade, dimensions, hot-rolled state, and finished width below 600 mm.

- Selected flow: Flat-rolled products of non-alloy steel, not further worked than hot-rolled, of a width of less than 600 mm `9705bbad-51bd-4ee8-af46-21324f57c577`
- Flow property / unit: Mass / kg
- Amount rule: 1,000 kg net conforming reference product by definition
- Value mode: Fixed value (`fixed_value`)
- Specificity: Generic (`generic`)
- Normalization basis: 1,000 kg reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Method formula (`method_formula`)
- Sources: `un-cpc-3-0-structure-2025`; `worldsteel-lci-methodology-2017`

##### Waste flows

###### Finishing steel scrap (`finishing_steel_scrap`)

Record the net mass of edge trim and offcuts generated by coiling, trimming, slitting, or cutting. Internal returns are balanced separately and not credited twice.

- Selected flow: Post-industrial steel scrap `c143745d-be4f-4d8f-b403-2dcbfe685349`
- Flow property / unit: Mass / kg
- Amount rule: Weighed net finishing scrap after internal return, normalized to 1,000 kg conforming reference product
- Value mode: Foreground record (`foreground_record`)
- Specificity: Route-specific (`route_specific`)
- Normalization basis: per 1,000 kg conforming reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_finishing_outputs`
- Sources: `ec-jrc-fmp-bref-2022`; `worldsteel-lci-methodology-2017`

###### Treated rolling-mill wastewater (`treated_rolling_mill_wastewater`)

Record the net treated process-water discharge attributable to the included hot-rolling and finishing stages after internal recirculation. Do not combine this discharge with scale or sludge outputs.

- Selected flow: Treated rolling-mill wastewater
- Flow property / unit: Volume / m3
- Amount rule: Metered net treated discharge assigned to the included stages and normalized to 1,000 kg conforming reference product
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg conforming reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_finishing_outputs`
- Sources: `ec-jrc-fmp-bref-2022`; `worldsteel-lci-methodology-2017`

##### Elementary flows

## 7. Allocation and Co-product Handling

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `allocation_subdivision_first` | shared_foreground_processes | Avoid allocation by submetering and subdividing reheating, rolling, cooling, finishing, water treatment, and ancillary services wherever their exchanges can be assigned directly. | `worldsteel-lci-methodology-2017` |
| `allocation_shared_steel_products` | multiple_conforming_steel_products | After subdivision, allocate remaining shared foreground exchanges among conforming hot-rolled steel products by net product mass over the same accounting period; disclose products, masses, and the calculation. | `worldsteel-lci-methodology-2017` |
| `allocation_internal_recycling` | internal_scale_and_scrap | Model scale and steel scrap returned within the declared system as internal exchanges and report only the net boundary output; do not assign an avoided-product credit to an internal loop. | `worldsteel-lci-methodology-2017` |
| `allocation_exported_recovery` | exported_scale_scrap_or_other_coproduct | For a net exported recovery material with a demonstrated market use, prefer system expansion based on a documented functionally equivalent substituted product and report sensitivity when material; otherwise report the output and treatment without an unverified substitution credit. | `worldsteel-lci-methodology-2017` |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_reheating_inputs` | `reheating_and_conditioning` | Semi-finished steel, furnace natural gas, and reheating electricity | Weighbridge, production, gas-meter, and electricity-meter records | charged steel mass; beginning and ending stock; natural-gas volume and reference conditions; electricity; furnace and campaign identifiers | Reconcile calibrated meters and production records to the included furnace campaigns. | kg; m3; MJ | Batch or shift capture with monthly reconciliation | One representative continuous 12-month period; justify shorter or abnormal periods | All foreground reheating and conditioning equipment serving the declared product | Sum attributable records, apply documented shared-meter allocation, then divide by conforming reference-product mass and multiply by 1,000 kg. | Calibration certificates; stock reconciliation; meter extracts; production ledger; allocation worksheet |
| `cp_reheating_outputs` | `reheating_and_conditioning` | Furnace scale and direct combustion emissions | Scale weigh tickets, stack-monitoring records, fuel composition, and operating logs | wet and dry scale mass; moisture; internal return; CO2; NOx convention; SO2; stack concentration; dry-gas flow; operating time; fuel carbon and sulfur | Use calibrated weighing and stack data; calculations shall retain formula, factors, and measurement basis. | kg; kg/Nm3; Nm3; h | Batch or continuous capture with monthly reconciliation | Same period as product output | All included reheating emission points and scale collection | Calculate attributable period mass, subtract internal returns where relevant, normalize to 1,000 kg conforming product. | Laboratory results; monitor QA/QC; fuel certificates; weigh tickets; calculation workbook |
| `cp_hot_rolling_inputs` | `hot_rolling_and_descaling` | Rolling electricity and descaling makeup water | Electricity and water meter records | electricity; fresh makeup-water mass or volume and density; transfers; mill campaign and product identifiers | Use stage submeters; where unavailable, document engineering allocation from a shared calibrated meter; convert water volume to mass only with documented period-specific density. | MJ; kg; m3; kg/m3 | Shift or daily capture with monthly reconciliation | Same period as product output | Roughing, finishing-train, descaling-pump, and roller-table equipment in scope | Sum net attributable inputs and normalize to 1,000 kg conforming product. | Meter calibration; density record; trend records; allocation worksheet; production ledger |
| `cp_hot_rolling_outputs` | `hot_rolling_and_descaling` | Rolling scale, hot-rolling steel scrap, and particulate matter | Weigh tickets, scale-pit records, scrap ledger, stack tests, and fugitive-emission assessment | scale mass, moisture and oil; scrap mass and internal return; particulate metric, captured mass, fugitive estimate, gas flow and time | Reconcile physical outputs with production and water-treatment records; document capture boundary. | kg | Batch or campaign capture with monthly reconciliation | Same period as product output | All included rolling stands, descalers, scale pits, and emission points | Calculate net boundary output by material, normalize to 1,000 kg conforming product, and keep recovery fate separate from quantity. | Weigh tickets; laboratory moisture/oil tests; monitor reports; scrap-return ledger |
| `cp_finishing_inputs` | `cooling_and_finishing` | Wider hot-rolled feedstock, finishing electricity, and cooling makeup water | Weighbridge, coil-tracking, electricity-meter, and water-meter records | wider input mass and dimensions; beginning and ending stock; electricity; makeup-water mass or volume and density; route and equipment identifiers | Link coil or batch identity through finishing; use calibrated meters and route-specific allocation; convert water volume to mass only with documented period-specific density. | kg; MJ; m3; kg/m3 | Coil, batch, or shift capture with monthly reconciliation | Same period as product output | Cooling, coiling, trimming, slitting, and cutting equipment actually used | Sum route-attributable records and normalize to 1,000 kg conforming product. | Coil genealogy; dimensional inspection; calibration and density records; meter extracts |
| `cp_finishing_outputs` | `cooling_and_finishing` | Conforming product, finishing scrap, and treated wastewater | Product weigh tickets, quality release, scrap ledger, and discharge meter | product mass, grade, dimensions and disposition; scrap mass and internal return; treated discharge and assignment basis | Reconcile released product, nonconforming product, stock change, scrap, and net water discharge. | kg; m3 | Coil or batch capture with monthly reconciliation | Same period as product output | Final product release, finishing scrap collection, and attributable wastewater treatment | Sum conforming product and net outputs; normalize all non-reference outputs to 1,000 kg conforming product. | Certified scales; inspection release; scrap tickets; discharge-meter records; reconciliation report |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `normalize_period_exchange` | Every variable inventory row | Normalized amount = attributable period exchange / net conforming reference-product mass × 1,000 kg. Use one consistent accounting period and retain unrounded source totals. | attributable period exchange; net conforming reference-product mass | Exchange per 1,000 kg reference product | `worldsteel-lci-methodology-2017` |
| `reconcile_steel_mass` | Steel feedstock, reference product, scale, and scrap | Opening steel stock + steel inputs = closing steel stock + conforming product + nonconforming product + internally returned steel + net scale and scrap outputs + documented residual difference. Explain any material residual. | stock records; feedstock mass; product mass; scale; scrap; internal return | Steel mass-balance reconciliation | `worldsteel-lci-methodology-2017` |
| `calculate_stack_emission_mass` | Reheating CO2, nitrogen oxides, sulfur dioxide, and rolling particulate | Use direct mass monitoring where available; otherwise multiply concentration by compatible dry-gas volume or calculate from verified fuel composition and oxidation data. Preserve wet/dry basis, oxygen correction, reporting species, and time coverage. | concentration; gas flow; operating time; fuel composition; correction basis | Direct emission mass by atomic reported exchange | `ec-jrc-fmp-bref-2022`; `worldsteel-lci-methodology-2017` |
| `calculate_net_water_boundary` | Descaling water, cooling water, and treated wastewater | Net water input and discharge shall exclude internal recirculation and separately identify transfers, evaporation, entrainment with scale/sludge, and meter imbalance. | intake meters; discharge meters; transfers; evaporation estimate; entrainment records | Net boundary-crossing water volumes | `ec-jrc-fmp-bref-2022`; `worldsteel-lci-methodology-2017` |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_product_identity` | Reference product and steel inputs | Retain grade, finished width and thickness, hot-rolled state, form, edge/surface condition, route, and coil or batch genealogy; demonstrate finished width < 600 mm and absence of excluded further work. | Classification and inspection records; `un-cpc-3-0-structure-2025` |
| `dq_temporal_representativeness` | All foreground records | Use one representative continuous 12-month period where practicable and document shutdowns, abnormal operation, maintenance, and any shorter-period justification. | Period coverage report; production ledger; `worldsteel-lci-methodology-2017` |
| `dq_geography_technology` | Foreground and upstream datasets | Identify site geography, furnace and mill technology, direct-hot-charge practice, finishing route, fuel supply, electricity supplier or grid, and water-treatment configuration; justify upstream representativeness. | Site description; supplier records; dataset metadata; `worldsteel-lci-methodology-2017` |
| `dq_meter_and_calculation_traceability` | Measured and calculated exchanges | Preserve raw meter extracts, calibration status, formulas, allocation worksheets, conversions, reporting conventions, and unrounded values sufficient for independent reproduction. | Calibration certificates; calculation workbook; QA/QC records |
| `dq_completeness` | Process inventory | Account for all known material, energy, water, emission, waste, and recovery exchanges by included stage; document every excluded flow against the study cut-off policy without using cut-off to omit all energy. | Completeness checklist and reconciliation; `worldsteel-lci-methodology-2017` |

## 9. Validation Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `validate_product_boundary` | reference_product | Confirm non-alloy steel, hot-rolled state, finished width < 600 mm, declared form and dimensions, and absence of excluded cold reduction or surface treatment. | `un-cpc-3-0-structure-2025`; `ec-jrc-fmp-bref-2022` |
| `validate_reference_amount` | reference_flow | Confirm exactly 1,000 kg net conforming product after normalization, excluding packaging, nonconforming material, and internally returned scrap. | `worldsteel-lci-methodology-2017` |
| `validate_route_and_upstream_link` | route_selection | Confirm that every performed stage is included once, every omitted upstream hot-rolling stage is represented by a linked input dataset, and no hot-rolling burden is double counted. | `ec-jrc-fmp-bref-2022`; `worldsteel-lci-methodology-2017` |
| `validate_mass_and_water_balances` | foreground_inventory | Reconcile steel mass and net water boundaries for the common accounting period; investigate and disclose residuals before release. | `worldsteel-lci-methodology-2017` |
| `validate_uuid_and_atomicity` | inventory_identity | Confirm every selected flow is one atomic exchange; directly re-read every adopted TianGong UUID at public state 100 and verify name, flow type, classification, property, unit group, state, geography, technology, and comment. Keep unresolved rows UUID-empty. |  |
| `validate_allocation_and_recovery` | shared_burdens_and_recovery_outputs | Confirm subdivision was attempted first, internal returns are not double credited, mass allocation uses contemporaneous net product outputs, and every system-expansion credit has documented functional equivalence and sensitivity where material. | `worldsteel-lci-methodology-2017` |
| `validate_bilingual_alignment` | bilingual_pcr_implementation | Confirm English and Chinese implementations have the same process, row, rule, source, UUID, controlled-token, and reference-flow identities. |  |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | `secondary_dataset` or `background_dataset` after methodology review, foreground verification, and publication approval |
| downstream_use | Cradle-to-gate or wider life-cycle models requiring a separately identified gate-to-gate narrow hot-rolled non-alloy-steel production dataset |
| allowed_use | Product systems matching the declared width class, steel grade family, hot-rolled state, route, geography, technology, accounting period, allocation, and upstream-dataset boundary |
| excluded_use | Cold-rolled, coated, clad, plated, pickled-and-oiled, alloy, stainless, electrical-steel, long-product, tube, or width >= 600 mm datasets; comparative assertions without a study-specific functional unit and review |
| required_metadata | PCR id; product identity and dimensions; route and starting condition; included processes; site and geography; period; furnace and mill technology; fuel and electricity supply; water boundary; allocation; internal recycling and export fates; source and dataset versions; unresolved UUID status |
| required_quality_disclosure | Primary-data share; temporal, geographic, and technological representativeness; meter/calibration status; calculation and allocation methods; mass- and water-balance residuals; cut-offs; uncertainty; missing data; review status |
| update_trigger | Change in product classification or state, route, furnace or mill technology, fuel or electricity supply, water treatment, allocation or recovery method, major input/output pattern, source evidence, TianGong UUID identity, or representative production period |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `un-cpc-3-0-structure-2025` | `official_guidance` | United Nations Statistics Division, CPC Ver. 3.0 Structure, 30 June 2025, code 41212. https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Structure_30Jun2025.csv (retrieved 2026-09-03) | Official product-classification identity, non-alloy steel, hot-rolled state, and width threshold |
| `ec-jrc-fmp-bref-2022` | `official_guidance` | Aries, E. et al., Best Available Techniques (BAT) Reference Document for the Ferrous Metals Processing Industry, European Commission Joint Research Centre, EUR 31321 EN, JRC131649, 2022, doi:10.2760/196475. https://bureau-industrial-transformation.jrc.ec.europa.eu/sites/default/files/2022-12/FMP%20BREF_Final%20Version.pdf (retrieved 2026-09-03) | Narrow-strip definition; hot-rolling sequence; reheating fuels and emissions; descaling; rolling, cooling, coiling, and finishing; water circuits; scale and waste outputs |
| `worldsteel-lci-methodology-2017` | `handbook` | World Steel Association, Life cycle inventory methodology report for steel products, 2017, ISBN 978-2-930069-89-0. https://worldsteel.org/wp-content/uploads/Life-cycle-inventory-methodology-report.pdf (retrieved 2026-09-03) | Declared unit; gate-to-gate boundary; primary data, energy and emission completeness, quality, mass-balance validation, recovery and co-product handling |
