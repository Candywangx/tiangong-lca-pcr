---
pcr_id: pcr.metal-products-machinery-and-equipment.fabricated-metal-products-except-machinery-and-equipment.cloth-grill-netting-and-fencing-of-iron-or-steel-wire-expanded-metal-of-iron-or-steel
language: en-US
status: candidate
sync_with: pcr.zh-CN.md
---

# Cloth, grill, netting and fencing, of iron or steel wire; expanded metal of iron or steel

## 1. Scope and Applicability

This PCR applies to factory-gate production of iron- or steel-wire cloth, welded or woven grill and netting, non-barbed wire fencing, and expanded iron or steel sheet or plate. It covers raised or flattened expanded metal and products supplied as sheets, panels, or rolls. The declared product may be carbon, alloy, or stainless steel and may be uncoated or metallically coated, provided these qualifiers are disclosed.

The foreground boundary begins with the steel feedstock crossing the manufacturing-site boundary and ends with conforming product and separately identified waste and direct elementary flows leaving that boundary. It includes, when performed at the site, wire drawing, mechanical or acid surface preparation, weaving, knotting, electrical-resistance welding, slitting and stretching, flattening or calendering, cutting, coiling, heat treatment, galvanising, and finishing.

This PCR excludes copper, aluminium, plastics, textile netting, barbed wire, insulated electrical wire, installation or fencing services, use, maintenance, and end-of-life. Upstream production of purchased steel, zinc, chemicals, electricity, water, and fuel is represented by upstream datasets and is not recreated in the foreground inventory. Detachable transport packaging is outside the reference product mass and is modelled separately when included in the declared dataset boundary.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.metal-products-machinery-and-equipment.fabricated-metal-products-except-machinery-and-equipment.cloth-grill-netting-and-fencing-of-iron-or-steel-wire-expanded-metal-of-iron-or-steel |
| classification_refs | CPC 3.0: 42943 (exact classification context; mapping acceptance is governed separately) |
| covered_products | Iron- or steel-wire cloth; welded or woven grill and netting; non-barbed wire fencing; raised or flattened expanded iron or steel sheet or plate |
| excluded_products | Barbed wire; copper or aluminium wire mesh; plastic or textile netting; insulated electrical wire; installation services; fabricated assemblies whose principal function is outside this product boundary |
| representative_product | Factory-gate steel wire mesh or expanded steel metal supplied as a declared sheet, panel, or roll |
| production_route | Wire route: purchased wire rod or steel wire, with route-specific drawing, weaving, knotting or resistance welding; expanded-metal route: flat steel sheet or coil, slit and stretched, optionally flattened; either route may include cutting, coiling, heat treatment, galvanising, and finishing |
| market_state | Conforming dry product at the factory gate, uncoated or with the declared coating, supplied as sheet, panel, or roll; detachable packaging excluded from net product mass |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Supply iron- or steel-wire mesh, grill, netting, non-barbed fencing, or expanded iron or steel metal for the declared screening, separation, guarding, reinforcement, or fencing function |
| How much | 1 kg net mass of conforming factory-gate product |
| How well | Meets the declared product family, steel grade, construction, aperture or mesh geometry, wire diameter or strand dimensions, surface finish or coating, dimensional tolerance, and applicable customer specification |
| How long or cycle | One factory-gate delivery; service life and use cycles are outside this cradle-to-gate reference |
| reference_flow_link | The reference amount is 1 kg of the `reference_product_output` flow after normalising the production campaign to net conforming output |

| Field | Value |
| --- | --- |
| Reference amount | 1 kg |
| Reference product flow | Wire Mesh `f225c346-5bf4-489e-9342-9e1dcedca6ae` |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | product family (`wire_cloth`, `welded_grill_or_netting`, `woven_or_knotted_netting_or_fencing`, or `expanded_metal`); iron or steel grade and alloy family; wire diameter or sheet thickness; aperture, mesh or strand geometry; welded, woven, knotted, raised or flattened construction; coating material and coating state; sheet, panel or roll delivery form; net product mass; production route and starting feedstock state; manufacturing site and geography; reference period; recycled-content claim basis; included finishing operations |

When constructing a foreground data package, the items listed in `Required qualifiers` must be declared in dataset metadata, process notes, reference flow comment, product description, or an equivalent data package field. Missing required qualifiers make the reference flow definition incomplete for that data package.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| `reference_mass` | reference product and mass-based inventory rows | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Use net dry mass of conforming product. Exclude detachable packaging, pallets, carriers, and unrecovered process scrap. Report moisture or retained process liquid if material to the delivered state. |
| `area_to_mass` | production or sales records reported by area | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Convert m2 to kg only with measured lot- or product-specific mass per area that matches alloy, wire or strand dimensions, aperture, and coating. Do not use a category-wide default conversion. |
| `electricity_energy` | purchased electricity | Net calorific value `93a60a56-a3c8-11da-a746-0800200b9a66` | MJ | Preserve metered electricity by delivery point and convert kWh to MJ using 1 kWh = 3.6 MJ; disclose voltage level, grid geography, and whether transformation or site-distribution losses are included. |
| `gas_volume` | gaseous natural gas | Volume `93a60a56-a3c8-22da-a746-0800200c9a66` | m3 | Record metered gas volume at the stated temperature and pressure reference conditions. Convert to energy only with a measured or supplier-specific calorific value for the same period. |
| `solution_mass` | Hydrochloric acid (30%) and other supplied solutions | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Record mass of the supplied solution and its concentration. Do not report active-acid mass as though it were supplied-product mass. |

## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Steel feedstock received at the foreground site as hot-rolled wire rod, drawn steel wire, or unexpanded flat steel sheet or coil; the selected state and any pre-existing coating must be declared |
| starting_condition_role | Upstream product input to the route-specific forming and finishing process |
| product_classification_scope | Factory-gate products semantically within iron- or steel-wire cloth, grill, netting, non-barbed fencing, or expanded iron or steel metal; CPC 3.0 code 42943 is classification context, not canonical identity ownership |
| recursive_input_rule | A purchased input already within this PCR product category, such as preformed mesh sent for coating, remains a product input with its own upstream dataset; do not recreate its production or count it as fresh steel feedstock |
| upstream_dataset_requirement | Link each purchased steel form, zinc, chemical, electricity, water, fuel, and same-category intermediate to a geography-, technology-, grade-, and delivery-state-appropriate upstream dataset |
| disclosure | Declare product family, starting feedstock state, integrated versus purchased wire drawing, mesh-forming technology, expanded-metal geometry, surface-preparation route, coating route, finishing operations, scrap recovery boundary, wastewater or bath treatment boundary, packaging inclusion, site, geography, and reference period |

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `boundary_site_gate` | all foreground datasets | Include all route-specific unit operations performed from receipt of the declared steel feedstock through net conforming product at the factory gate, including associated site utilities, chemicals, wastes, and direct emissions. | usitc-standard-steel-welded-wire-mesh-2021; eu-jrc-ferrous-metals-processing-2022; ppg-expanded-metal-process-2018 |
| `boundary_upstream_inputs` | purchased materials and energy | Represent production and delivery of purchased inputs through upstream datasets; do not duplicate those upstream processes in the foreground inventory. |  |
| `boundary_actual_exchanges` | unlisted site exchanges | Add every material site exchange not explicitly represented below as its own chemically or physically specific product, waste, or elementary flow; do not substitute a utility, chemical, waste, or emissions umbrella. |  |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| `route_specific_fabrication` | Route-specific forming, mesh making, finishing, and packing | required | Select and disclose one covered product family and record only the route operations actually performed at the foreground site | foreground production | Net kg of conforming factory-gate product |

### Process: Route-specific forming, mesh making, finishing, and packing (`route_specific_fabrication`)

The process aggregates the connected site operations to avoid inventing UUID-bearing internal intermediates. The dataset must retain submeter, batch, and operating-record detail sufficient to distinguish wire drawing, welding or weaving, slit-and-stretch forming, flattening, heat treatment, galvanising, and finishing.

#### Inputs

##### Product flows

###### Hot-rolled low-carbon steel wire rod (`steel_wire_rod_input`)

Record this input only when wire drawing occurs within the foreground site. The UUID remains unresolved because no state-100 candidate passed the bilingual identity audit.

- Selected flow: Hot-rolled low-carbon steel wire rod
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Measured received mass issued to the covered production campaign, net of stock change and material returned to stores
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming reference product output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material_receipts`
- Sources: usitc-standard-steel-welded-wire-mesh-2021; eu-jrc-ferrous-metals-processing-2022

###### Purchased drawn steel wire (`steel_wire_input`)

Record purchased wire that crosses the site boundary for weaving, knotting, welding, or fencing. Do not use this row for wire rod drawn on site.

- Selected flow: Steel Wire `62bb3717-f62c-43e0-baca-46a1e6f847c4`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Measured received mass issued to the covered production campaign, net of stock change and returns
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming reference product output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material_receipts`
- Sources: usitc-standard-steel-welded-wire-mesh-2021

###### Unexpanded flat steel sheet or coil (`steel_sheet_input`)

Record the flat steel feedstock only for the expanded-metal route. The UUID remains unresolved because the public sheet candidates had conflicting bilingual material or form identities.

- Selected flow: Unexpanded flat steel sheet or coil
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Measured received mass issued to slit-and-stretch production, net of stock change and returns
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming reference product output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material_receipts`
- Sources: ppg-expanded-metal-process-2018

###### Purchased electricity (`electricity_input`)

Record electricity crossing the site meter for drawing, welding, weaving, expanding, flattening, cutting, coiling, pumping, ventilation, and finishing that are within the declared foreground boundary.

- Selected flow: Electricity `890a70b7-b677-4e2a-8a1b-7d017e0a10ae`
- Flow property / unit: Net calorific value `93a60a56-a3c8-11da-a746-0800200b9a66` / MJ
- Amount rule: Metered electricity allocated from submetered operations or a documented campaign allocation and converted to MJ
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming reference product output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_energy_meters`
- Sources: usitc-standard-steel-welded-wire-mesh-2021; ppg-expanded-metal-process-2018

###### Wire-drawing lubricating oil (`lubricating_oil_input`)

Record fresh lubricating oil crossing the boundary only when oil-based drawing lubrication is used on site. Declare formulation and account separately for recovered oil if it leaves the boundary.

- Selected flow: lubricating oil `aec6f1a5-7b09-4704-870d-434d3ada0edd`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Purchased mass plus opening stock minus closing stock and separately documented recovered oil returned to use
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg net conforming reference product output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material_receipts`
- Sources: eu-jrc-ferrous-metals-processing-2022

###### Hydrochloric acid supplied at 30% (`hydrochloric_acid_30_input`)

Record this acid product only when a 30% hydrochloric-acid supply crosses the boundary for on-site pickling. Other acid chemistries or supply concentrations must be separate product-flow rows.

- Selected flow: Hydrochloric acid (30%) `56414d25-a353-4d67-b362-87212ce6011d`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg supplied solution
- Amount rule: Purchased solution mass plus opening stock minus closing stock and off-site returns
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg net conforming reference product output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material_receipts`
- Sources: eu-jrc-ferrous-metals-processing-2022

###### Zinc metal for galvanising (`zinc_metal_input`)

Record zinc metal only when hot-dip galvanising occurs within the foreground boundary. Declare the zinc grade and separate any other alloy additions into their own rows.

- Selected flow: Special High Grade zinc metal `2d8ff1bd-e128-4c74-a99d-b8734c99bbd2`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Zinc purchases plus opening bath inventory minus closing bath inventory, off-site returns, and separately measured recoverable zinc-bearing outputs
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg net conforming reference product output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material_receipts`
- Sources: eu-jrc-ferrous-metals-processing-2022

###### Process water (`process_water_input`)

Record process water crossing the site boundary when used for aqueous cleaning, rinsing, bath make-up, or direct process cooling. Exclude non-process sanitary water and avoid counting recirculated water repeatedly.

- Selected flow: Process Water `94a04f7e-2d5c-41f0-b182-d54a3b373a02`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Metered or tank-balanced make-up water crossing the foreground boundary, excluding internal recirculation
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming reference product output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_water_meter`
- Sources: eu-jrc-ferrous-metals-processing-2022

###### Gaseous natural gas (`natural_gas_input`)

Record natural gas only for on-site fired heating, drying, heat treatment, or galvanising-bath heating included in the foreground boundary.

- Selected flow: natural gas in the gaseous state `4f19ca0e-7b3b-11dd-ad8b-0800200c9a66`
- Flow property / unit: Volume `93a60a56-a3c8-22da-a746-0800200c9a66` / m3
- Amount rule: Metered volume at declared reference conditions, assigned by submeter or documented campaign allocation
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming reference product output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_energy_meters`
- Sources: eu-jrc-ferrous-metals-processing-2022

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Conforming wire mesh or expanded metal (`reference_product_output`)

Record net conforming product after route-specific forming and all included finishing. Use the selected Tiangong Chinese and English baseNames only as database display identities; preserve the fuller declared product qualifiers.

- Selected flow: Wire Mesh `f225c346-5bf4-489e-9342-9e1dcedca6ae`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Net measured conforming output, normalised to exactly 1 kg reference product
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: 1 kg net conforming reference product output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_output_and_waste_mass`
- Sources: un-cpc-3-0-structure-2025

##### Waste flows

###### Post-industrial steel scrap (`steel_scrap_output`)

Record steel offcuts, trimmings, rejected pieces, and other segregated post-industrial steel scrap leaving the foreground boundary. Do not include internally remelted or immediately reworked material as an external output.

- Selected flow: Post-industrial steel scrap `c143745d-be4f-4d8f-b403-2dcbfe685349`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Weighed mass leaving the site, adjusted for documented stock change and excluding material internally reworked into conforming product
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming reference product output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_output_and_waste_mass`
- Sources: usitc-standard-steel-welded-wire-mesh-2021; ppg-expanded-metal-process-2018

###### Spent hydrochloric-acid steel-pickling liquor (`spent_pickling_liquor_output`)

Record this specific waste only when hydrochloric-acid pickling is performed and spent bath liquor crosses the foreground boundary. Keep rinse-water effluent and other acids in separate rows.

- Selected flow: Spent hydrochloric-acid steel-pickling liquor
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Weighed or metered spent bath liquor transferred off site or to a separately modelled treatment process, net of regenerated liquor returned to the bath
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg net conforming reference product output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_output_and_waste_mass`
- Sources: eu-jrc-ferrous-metals-processing-2022

###### Zinc dross from galvanising bath (`zinc_dross_output`)

Record zinc dross only when it is separately removed from an on-site galvanising bath and leaves the foreground boundary. Do not combine it with ash, scrap steel, sludge, or wastewater.

- Selected flow: Zinc dross from galvanising bath
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Weighed segregated zinc dross leaving the bath and crossing the site or treatment boundary
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg net conforming reference product output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_output_and_waste_mass`
- Sources: eu-jrc-ferrous-metals-processing-2022

##### Elementary flows

###### Direct fossil carbon dioxide (`fossil_co2_output`)

Record direct fossil carbon dioxide crossing to air only from on-site combustion units within the foreground boundary. Do not include upstream grid-electricity or purchased-fuel production emissions.

- Selected flow: carbon dioxide (fossil) `08a91e70-3ddc-11dd-923d-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Facility stack or emissions-system record assigned to the included combustion units and production campaign
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming reference product output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_direct_emissions`
- Sources: eu-jrc-ferrous-metals-processing-2022

## 7. Allocation and Co-product Handling

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `allocation_subdivide_routes` | mixed product families or materially different routes | Prefer separate meters, batch records, and process subdivision for wire-mesh and expanded-metal routes and for coated versus uncoated production. Do not allocate one undifferentiated plant total when route-resolved records exist. |  |
| `allocation_shared_operations` | shared electricity, gas, water, and finishing operations | Allocate a shared operation using a documented physical driver causally related to consumption, such as machine time, metered energy, bath throughput, or processed mass. Report the driver and allocation factor; use economic allocation only when no defensible physical relationship exists and disclose a sensitivity check. |  |
| `allocation_scrap` | post-industrial steel scrap and zinc-bearing outputs | Record separately measured waste outputs without avoided-burden credit in the foreground inventory. If a study applies recycling, substitution, or co-product treatment downstream, report that modelling choice, boundary, factor, and sensitivity outside the measured foreground exchange. |  |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_material_receipts` | `route_specific_fabrication` | `steel_wire_rod_input`; `steel_wire_input`; `steel_sheet_input`; `lubricating_oil_input`; `hydrochloric_acid_30_input`; `zinc_metal_input` | purchase, weighbridge, stores, bath-inventory, and issue records | material identity; alloy/grade; form; coating state; solution concentration; supplier; received mass; opening stock; closing stock; returns; campaign id | Reconcile receipts and stores or bath inventory to material issued to each declared campaign | kg | each receipt and campaign; aggregate monthly or by production campaign | At least 12 consecutive representative months, or the full shorter campaign with justification | All foreground lines and stores serving the declared product | Sum receipts + opening stock - closing stock - off-site returns; assign only material issued to the declared campaign | Calibrated scale records; invoices; batch certificates; stock reconciliation; concentration certificate; exception log |
| `cp_energy_meters` | `route_specific_fabrication` | `electricity_input`; `natural_gas_input` | utility invoices, main meters, submeters, and operating-hour records | meter id; opening reading; closing reading; unit; reference conditions for gas; production line; operating hours; campaign id | Prefer route and line submeters; otherwise allocate a reconciled main-meter balance using documented causal operating data | kWh, MJ, or m3 | continuous or shift readings; reconcile monthly | Same period as production output, normally at least 12 representative months | All included site operations and documented auxiliary loads | Net imports minus separately metered exports; convert kWh to MJ; allocate shared consumption by the disclosed driver | Meter calibration; invoice reconciliation; submeter coverage; downtime and missing-data log |
| `cp_water_meter` | `route_specific_fabrication` | `process_water_input` | water meters, tank levels, make-up logs, and production records | source; meter id; opening and closing readings; tank stock change; recirculation; discharge; campaign id | Measure fresh process-water make-up crossing the boundary and reconcile tank stock changes | kg or m3 with measured density | daily or per batch; reconcile monthly | Same period as production output | Cleaning, rinsing, bath make-up, and direct process cooling included in the route | Fresh input + opening stock - closing stock - documented off-site return; do not count internal recirculation repeatedly | Meter calibration; tank reconciliation; water-source and quality record; density record when converting volume |
| `cp_output_and_waste_mass` | `route_specific_fabrication` | `reference_product_output`; `steel_scrap_output`; `spent_pickling_liquor_output`; `zinc_dross_output` | finished-goods scales, batch records, waste manifests, tank transfers, and recovery records | product family; grade; geometry; coating; conforming mass; reject mass; scrap mass; liquor mass; dross mass; stock change; destination; campaign id | Weigh conforming output and each segregated waste; meter tank transfers where weighing is impracticable | kg | each batch or shipment; reconcile monthly | Same period as material and energy inputs | All included lines, finishing areas, and waste storage serving the declared product | Sum net conforming product and each named output separately; subtract documented returns and internal rework; normalise inventory to 1 kg conforming output | Calibrated scales or meters; inspection release; waste manifest; stock reconciliation; internal-rework log |
| `cp_direct_emissions` | `route_specific_fabrication` | `fossil_co2_output` | continuous-emissions, stack-test, or facility emissions records | source id; fuel source; measurement method; concentration or mass rate; flow rate; operating time; campaign id | Use direct monitored or documented facility emissions records for included on-site combustion sources | kg | continuous, test campaign, or reporting period matching production | Same period as fuel and product output | Included on-site combustion units only | Sum source-specific direct fossil CO2 and assign by measured unit throughput or documented causal driver | Instrument calibration; stack-test report; source-to-fuel reconciliation; missing-data treatment |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_reference_normalisation` | every inventory row | Normalised amount = campaign exchange amount / campaign net conforming product mass | exchange amount; net conforming product mass from `cp_output_and_waste_mass` | exchange per 1 kg reference product |  |
| `calc_area_conversion` | output or sales records measured by area | Product mass = measured product area × lot-specific measured mass per area; the mass-per-area test specimen must match alloy, wire or strand dimensions, aperture, construction, and coating | area; matched mass-per-area measurement | kg conforming product |  |
| `calc_campaign_mass_reconciliation` | steel and zinc-bearing material balance | Reconcile inputs, conforming output, stock changes, internal rework, steel scrap, zinc-bearing wastes, and other separately named outputs; investigate rather than force-close unexplained imbalance | material receipts; output weights; waste weights; stock and rework records | disclosed campaign mass-balance residual |  |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_product_identity` | reference product | Preserve the declared product family, alloy, geometry, construction, finish, coating, delivery form, and applicable specification for every aggregated batch. | Product specification, inspection release, batch traveller, and finished-goods record |
| `dq_temporal_alignment` | all foreground exchanges | Use the same representative period for inputs, outputs, wastes, and direct emissions; disclose shutdowns, atypical campaigns, and any shorter-than-12-month period. | Meter periods, production calendar, campaign reconciliation, and exception log |
| `dq_completeness` | site inventory | Reconcile major steel inputs and outputs and document every omitted, estimated, or unmetered exchange. Add actual route-specific chemicals, coatings, wastes, and emissions as separate atomic rows. | Mass-balance residual, utility reconciliation, waste register, and completeness checklist |
| `dq_upstream_match` | purchased product and energy inputs | Select upstream datasets that match material grade or chemical concentration, production geography, delivery state, electricity voltage and grid, gas reference conditions, and transport boundary. | Supplier certificate, invoice, upstream dataset metadata, and matching record |
| `dq_uuid_review` | Tiangong-linked flows | Confirm public state code 100, English and Chinese baseNames, flow type, classification, property, unit group, and product state before publication; keep unresolved rows blank rather than substituting proxies. | Direct-read identity audit and unresolved review metadata |

## 9. Validation Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `validation_reference_flow` | reference product | Verify that the reported reference output is exactly 1 kg net conforming product and that all required qualifiers are present. | un-cpc-3-0-structure-2025 |
| `validation_route_consistency` | process route and conditional rows | Verify that wire rod, purchased wire, flat steel sheet, drawing lubricant, pickling acid, zinc, process water, natural gas, spent liquor, zinc dross, and direct CO2 are included only when the declared route and site operations make them applicable; zero or omission requires evidence of non-applicability. | usitc-standard-steel-welded-wire-mesh-2021; eu-jrc-ferrous-metals-processing-2022; ppg-expanded-metal-process-2018 |
| `validation_mass_balance` | material inputs and outputs | Verify campaign-level reconciliation of steel and zinc-bearing inputs, conforming product, stock change, internal rework, scrap, dross, liquor, and separately named outputs; investigate and disclose residuals. |  |
| `validation_boundary` | foreground and upstream datasets | Verify that every site operation and direct exchange is included once, purchased-input production is linked upstream rather than duplicated, and same-category intermediates follow the recursive-input rule. |  |
| `validation_atomic_flows` | inventory completeness | Reject combined utilities, fuels, chemicals, wastes, emissions, or packaging collections; each actual exchange must be one specific flow with its own property, unit, amount rule, and route condition. |  |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | Foreground production dataset that may be published as a `secondary_dataset` or `background_dataset` after review |
| downstream_use | Cradle-to-gate process datasets and lifecycle models for declared steel wire mesh, netting, fencing, grill, or expanded-metal products |
| allowed_use | Products and routes within this PCR when required qualifiers, boundary, temporal coverage, technology, and geography are materially representative |
| excluded_use | Barbed wire; non-steel mesh; installation services; use or end-of-life; products with undisclosed alloy, geometry, coating, route, or reference mass; substitution across wire-mesh and expanded-metal routes without representativeness review |
| required_metadata | PCR id; product family; alloy and grade; recycled-content basis; geometry and construction; coating and finish; delivery form; route; starting feedstock state; included operations; site and geography; reference period; allocation method; upstream dataset choices; unresolved or estimated exchanges |
| required_quality_disclosure | Meter and scale coverage; material-balance residual; submeter allocation; temporal completeness; product-weighting across batches; missing-data treatment; waste and emissions coverage; UUID audit status; deviations from this PCR |
| update_trigger | Change in product family, alloy, geometry, forming or joining technology, coating route, starting feedstock, recycled-content claim, site energy or water system, allocation driver, waste treatment, geography, or data older than the declared representativeness period |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `un-cpc-3-0-structure-2025` | `official_guidance` | United Nations Statistics Division. CPC Version 3.0 structure, 30 June 2025. https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Structure_30Jun2025.csv (retrieved 2026-09-05; cached bytes SHA-256 `5cd2c1c4890dd6be16af48e9bb940fed48efff9865f39ff15edaa921da25fb7c`) | Exact CPC 42943 classification identity and included material/product wording |
| `china-customs-hs-7314-zh-2022` | `official_guidance` | General Administration of Customs of the People's Republic of China, Announcement No. 32 of 2022, HS heading 7314 terminology, reproduced by the Hong Kong Trade and Industry Department. https://www.tid.gov.hk/en/tradecircular/files/2022/ci2022308a.pdf (retrieved 2026-09-05; downloaded bytes SHA-256 `e0a578406620d8a3a38027a915627b1140629f8d104a2a6ac1fdf3481970f1e5`) | Professional Chinese terminology for steel-wire cloth, netting, fencing, grill, and expanded metal |
| `usitc-standard-steel-welded-wire-mesh-2021` | `official_guidance` | U.S. International Trade Commission. *Standard Steel Welded Wire Mesh from Mexico*, Publication 5175, April 2021. https://www.usitc.gov/sites/default/files/publications/701_731/pub5175.pdf (retrieved 2026-09-05) | Wire-rod drawing or rolling, resistance welding, cutting, coiling, product identity, and wire-route process decomposition |
| `eu-jrc-ferrous-metals-processing-2022` | `official_guidance` | European Commission Joint Research Centre. *Best Available Techniques (BAT) Reference Document for the Ferrous Metals Processing Industry*, JRC131649, 2022, DOI 10.2760/196475. https://bureau-industrial-transformation.jrc.ec.europa.eu/reference/ferrous-metals-processing-industry (retrieved 2026-09-05) | Wire drawing, pretreatment, pickling, galvanising, heat treatment, finishing, and conditional foreground operations |
| `ppg-expanded-metal-process-2018` | `extension_guidance` | PPG Aerospace/Dexmet. *Slit and Stretch: How Expanded Metals Are Made*, 1 June 2018. https://www.ppg.com/en-US/aerospace/support/articles/slit-and-stretch-how-expanded-metals-are-made (retrieved 2026-09-05) | Expanded-metal sheet input, slit-and-stretch forming, calendering or flattening, cutting, and optional secondary finishing |
