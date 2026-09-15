---
pcr_id: pcr.metal-products-machinery-and-equipment.basic-metals.flat-rolled-products-of-non-alloy-steel-clad-plated-coated-or-otherwise-further-worked
language: en-US
status: candidate
content_maturity: authored_methodology
translation_status: canonical
sync_with: pcr.zh-CN.md
---

# Flat-rolled products of non-alloy steel, clad, plated, coated or otherwise further worked

## 1. Scope and Applicability

This PCR applies to factory-gate production of flat-rolled non-alloy steel whose delivered state is obtained by cladding, metallic plating or coating, organic coating, or another declared further-working operation. It covers sheet, strip, plate, and coil across widths when the substrate remains non-alloy steel and the coating or further-working state is part of the sold product.

The foreground boundary starts with received hot-rolled or cold-rolled non-alloy flat steel and ends with accepted, finished product at the producing site's gate. It includes applicable surface preparation, thermal conditioning, metallic coating, organic coating, metal cladding, mechanical further working, finishing, packaging, on-site wastewater treatment, direct emissions, and generated wastes. Supplier-gate production of steel substrate, coating metals, paints, chemicals, fuels, electricity, water, and packaging is represented by linked upstream datasets.

Stainless-steel or other alloy-steel substrate products, silicon-electrical steel, high-speed steel, uncoated hot-rolled or cold-rolled products sold without further working, fabricated components whose flat-rolled identity is lost, downstream installation and use, and end-of-life are excluded. This PCR does not prescribe a particular product specification or coating system; the foreground data package must identify the actual route and exact retained layers.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.metal-products-machinery-and-equipment.basic-metals.flat-rolled-products-of-non-alloy-steel-clad-plated-coated-or-otherwise-further-worked |
| classification_refs | CPC 3.0: 41231, exact semantic scope; source `un-cpc-3-0-2025` |
| covered_products | Flat-rolled non-alloy steel sold after cladding, metallic plating/coating, organic coating, or another declared further-working operation, including coated sheet, strip, plate, and coil |
| excluded_products | Stainless or other alloy-steel substrate products; silicon-electrical and high-speed steel; flat steel sold only hot-rolled or cold-rolled without further working; fabricated downstream components; downstream use and end-of-life |
| representative_product | Finished flat-rolled non-alloy steel with declared substrate grade, dimensions, coating or cladding system, further-working route, surface treatment, and delivery form |
| production_route | Received flat-steel substrate followed by the applicable combination of preparation, thermal conditioning, metallic coating, organic coating, metal cladding, mechanical further working, finishing, and packaging |
| market_state | Dry finished sheet, strip, plate, or coil at the producing-site gate; retained metallic, organic, passivation, and protective-oil layers are included in product mass; transport packaging is reported separately |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Provision of a specified flat-rolled non-alloy steel product in its declared clad, plated, coated, or otherwise further-worked state at the producing-site gate |
| How much | 1,000 kg of accepted product, including all retained layers and excluding transport packaging |
| How well | Conforming to the declared steel grade, dimensions, coating/cladding material and mass or thickness, sidedness, surface treatment, mechanical condition, and acceptance specification |
| How long or cycle | Not applicable to the factory-gate declared unit; no service life is implied |
| reference_flow_link | `reference_product` |

| Field | Value |
| --- | --- |
| Reference amount | 1,000 kg |
| Reference product flow | Flat-rolled products of non-alloy steel, clad, plated, coated or otherwise further worked (Tiangong UUID unresolved) |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | non-alloy steel grade; incoming substrate state and supplier dataset; sheet/strip/plate/coil form; width and thickness; coating, plating, cladding, or further-working route; every retained layer material; coating mass or thickness per side and sidedness; passivation and protective oil; production site and geography; production period; accepted-product specification; packaging configuration; allocation and recycling approach |

When constructing a foreground data package, the items listed in `Required qualifiers` must be declared in dataset metadata, process notes, reference flow comment, product description, or an equivalent data package field. Missing required qualifiers make the reference flow definition incomplete for that data package.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| `reference_mass` | reference product and steel intermediates | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Determine accepted-product mass on a calibrated scale or from measured dimensions and verified density. Include retained coating, cladding, passivation, paint, and protective-oil layers; exclude transport packaging. Normalize all inventory rows to 1,000 kg accepted product. |
| `coating_mass` | metallic, organic, passivation, and cladding layers | Mass and, when reported, mass per area or thickness | kg retained layer and declared g/m2 or micrometre result | Derive retained-layer mass from reconciled bath or paint use and product measurements. Declare whether the value is total or per side and preserve the measured area, sidedness, density, and test method used for any conversion. |
| `electricity_energy` | alternating-current electricity | Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` | MJ | Preserve metered kWh and convert to MJ using 1 kWh = 3.6 MJ. Declare geography, voltage, supplier/market basis, delivery boundary, and allocation of shared meters. |
| `gas_volume` | gaseous natural gas | Volume `93a60a56-a3c8-22da-a746-0800200c9a66` | m3 | Report metered volume at stated temperature, pressure, and moisture reference conditions. Preserve the supplier calorific value when energy or fossil-carbon calculations use it. |
| `mass_balance` | substrate, retained layers, accepted product, scrap, residues, and stock changes | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Reconcile dry mass over the production period. Explain differences between substrate plus retained additions and accepted product plus rejects, scrap, residues, emissions, and inventory changes. |

## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Received hot-rolled or cold-rolled flat-rolled non-alloy steel before the coating, cladding, plating, or further-working operations represented by this foreground package |
| starting_condition_role | Upstream product input and physical starting condition for the foreground transformation |
| product_classification_scope | Flat-rolled non-alloy steel whose delivered state is clad, plated, coated, or otherwise further worked; classification is supporting context and does not replace declared product attributes |
| recursive_input_rule | If an input already belongs to this same product category, record it as a same-category supplier-gate input, declare its existing layers and starting condition, and do not reproduce the supplier's coating or further-working stage inside the foreground boundary |
| upstream_dataset_requirement | Link geographically and technologically representative supplier-gate datasets for the steel substrate and every purchased material, chemical, fuel, electricity supply, water supply, packaging component, and external treatment service |
| disclosure | Declare included and excluded route steps, on-site versus external treatment, shared utilities, abnormal operations included, cut-offs, allocation choices, recycled-content/end-of-life method, and any mismatch between supplier datasets and the foreground product state |

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `boundary_start_and_end` | foreground_product_system | Start with received flat-rolled non-alloy steel and end with accepted packaged product at the producing-site gate. Include every applicable transformation and on-site ancillary operation between those points. | `worldsteel-lci-methodology-2017` |
| `boundary_route_condition` | conditional_processes | Include each conditional process only when its Process Map inclusion condition is met; record zero only when evidence shows that the route or exchange is absent. | `eu-jrc-fmp-bref-2022` |
| `boundary_energy_and_material_completeness` | all_foreground_processes | Record each energy carrier separately and each materially or environmentally relevant material, chemical, waste stream, and elementary emission as an atomic exchange. Document exclusions and their basis. | `worldsteel-lci-methodology-2017` |
| `boundary_upstream_and_double_counting` | linked_background_datasets | Include upstream supply through linked datasets and check their boundaries so steel production, coating, recycling, or waste treatment is not double counted. | `worldsteel-lci-methodology-2017` |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| `substrate_preparation` | Substrate receipt and surface preparation | `required` | Always include receipt, inspection, and the preparation actually performed; acid pickling and alkaline degreasing rows are route-conditional | Foreground preparation | Per 1,000 kg accepted product |
| `thermal_conditioning` | Thermal conditioning and curing heat | `conditional` | Include when the line anneals, heats, dries, cures, or otherwise thermally conditions the strip | Foreground thermal processing | Per 1,000 kg accepted product through the process |
| `metallic_coating` | Metallic plating or coating | `conditional` | Include when zinc, aluminium, tin, or another metallic layer is applied; this inventory provides atomic rows for zinc, aluminium, and tin only | Foreground metallic coating | Per 1,000 kg accepted metallic-coated product |
| `organic_coating` | Organic coil coating | `conditional` | Include when a retained organic paint layer is applied; use only the exact formulation rows actually consumed | Foreground organic coating | Per 1,000 kg accepted organic-coated product |
| `metal_cladding` | Metal cladding | `conditional` | Include when a discrete stainless-steel or aluminium cladding sheet is bonded to the non-alloy steel substrate | Foreground cladding | Per 1,000 kg accepted clad product |
| `mechanical_further_working` | Mechanical further working | `conditional` | Include when skin passing, tension levelling, corrugating, edge trimming, or another declared mechanical operation changes the sold product | Foreground mechanical processing | Per 1,000 kg accepted further-worked product |
| `finishing_packaging` | Final finishing, inspection, and packaging | `required` | Always include acceptance, product weighing, applied protective oil, and the packaging components actually supplied | Foreground finalisation | 1,000 kg accepted reference product |
| `wastewater_treatment` | On-site process-wastewater treatment | `conditional` | Include when process wastewater is treated within the reporting site; otherwise record the exact external treatment service at the generating process | Foreground ancillary treatment | Per m3 process wastewater treated and normalized to the reference flow |

### Process: Substrate receipt and surface preparation (`substrate_preparation`)

#### Inputs

##### Product flows

###### Flat-rolled non-alloy steel substrate (`substrate_input`)

The actual received hot-rolled or cold-rolled substrate crosses the foreground boundary and is reconciled to accepted product and losses.

- Selected flow: Flat-rolled non-alloy steel substrate, declared hot-rolled or cold-rolled state (Tiangong UUID unresolved)
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; unit group Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Weighed received mass allocated to the represented production and normalized to accepted product
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1,000 kg accepted reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material_mass`
- Sources: `worldsteel-lci-methodology-2017`

###### Preparation electricity (`prep_electricity`)

Record alternating-current electricity consumed by entry handling, cleaning, brushing, rinsing, pumping, drying, and extraction assigned to this process.

- Selected flow: Alternating current `455f0ef5-6118-4f2b-a3f5-1f75e0afe3ca`
- Flow property / unit: Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ; unit group Units of energy `93a60a57-a3c8-11da-a746-0800200c9a66`
- Amount rule: Metered or documented allocated electricity, converted from kWh to MJ
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg accepted reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_energy_metering`
- Sources: `worldsteel-lci-methodology-2017`

###### Hydrochloric acid for pickling (`prep_hydrochloric_acid`)

Include hydrochloric acid only when hot-rolled scale or another declared surface condition is removed by hydrochloric-acid pickling; record purchased solution and concentration.

- Selected flow: Hydrochloric acid, aqueous solution with declared concentration (Tiangong UUID unresolved)
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; unit group Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Net acid-solution issue to the line after inventory correction; zero only when no hydrochloric-acid pickling occurs
- Value mode: Foreground record (`foreground_record`)
- Specificity: Route-specific (`route_specific`)
- Normalization basis: per 1,000 kg accepted reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_process_chemicals`
- Sources: `eu-jrc-fmp-bref-2022`

###### Sodium hydroxide for alkaline degreasing (`prep_sodium_hydroxide`)

Include sodium hydroxide when alkaline degreasing is performed and preserve the purchased solution concentration, supply state, and make-up records as foreground qualifiers.

- Selected flow: Sodium hydroxide `e0abcced-0611-4c24-9290-5a2c5a0c4169`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; unit group Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Net sodium-hydroxide solution issue after inventory correction; zero only when alkaline degreasing is absent
- Value mode: Foreground record (`foreground_record`)
- Specificity: Route-specific (`route_specific`)
- Normalization basis: per 1,000 kg accepted reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_process_chemicals`
- Sources: `eu-jrc-fmp-bref-2022`

###### Process water for preparation (`prep_water`)

Record supplied water used for preparation baths, rinsing, brushing, and scrubbers, net of separately measured closed-loop recirculation. Retain the water source, quality, site supply boundary, and density-conversion conditions as foreground qualifiers.

- Selected flow: Process Water `94a04f7e-2d5c-41f0-b182-d54a3b373a02`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; unit group Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Metered or tank-balance make-up water assigned to substrate preparation, reported as mass or converted from measured volume using documented density at the declared conditions
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg accepted reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_water_effluent`
- Sources: `eu-jrc-fmp-bref-2022`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Prepared substrate (`prepared_substrate`)

Record the dry prepared strip transferred to the next foreground operation as an internal intermediate.

- Selected flow: Prepared flat-rolled non-alloy steel substrate (foreground internal flow; Tiangong UUID unresolved)
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; unit group Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Weighed or mass-balanced dry output transferred from preparation
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1,000 kg accepted reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material_mass`
- Sources: `eu-jrc-fmp-bref-2022`

##### Waste flows

###### Spent hydrochloric-acid pickling liquor (`spent_pickling_liquor`)

Record the removed acidic liquor as one waste stream when hydrochloric-acid pickling is used.

- Selected flow: Spent hydrochloric-acid steel pickling liquor (Tiangong UUID unresolved)
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; unit group Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Weighed or volume-and-density-calculated liquor removed from the bath, net of returned regeneration liquor
- Value mode: Foreground record (`foreground_record`)
- Specificity: Route-specific (`route_specific`)
- Normalization basis: per 1,000 kg accepted reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_residues`
- Sources: `eu-jrc-fmp-bref-2022`

###### Spent alkaline degreasing solution (`spent_degreasing_solution`)

Record removed alkaline degreasing solution separately from rinse wastewater.

- Selected flow: Spent alkaline steel degreasing solution (Tiangong UUID unresolved)
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; unit group Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Weighed or volume-and-density-calculated solution removed from the line
- Value mode: Foreground record (`foreground_record`)
- Specificity: Route-specific (`route_specific`)
- Normalization basis: per 1,000 kg accepted reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_residues`
- Sources: `eu-jrc-fmp-bref-2022`

###### Substrate-preparation wastewater (`prep_wastewater`)

Record the combined aqueous stream from the declared preparation line before on-site or external treatment; do not combine it with unrelated plant effluent.

- Selected flow: Wastewater from flat-steel rinsing and degreasing (Tiangong UUID unresolved)
- Flow property / unit: Volume `93a60a56-a3c8-22da-a746-0800200c9a66` / m3; unit group Units of volume `93a60a57-a3c8-12da-a746-0800200c9a66`
- Amount rule: Metered discharge from substrate preparation to the treatment boundary
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg accepted reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_water_effluent`
- Sources: `eu-jrc-fmp-bref-2022`

##### Elementary flows

###### Hydrochloric acid to air (`prep_hydrochloric_acid_air`)

Include measured or permit-calculated hydrochloric acid released from pickling capture and exhaust when that route operates.

- Selected flow: hydrogen chloride `fe0acd60-3ddc-11dd-aab0-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; unit group Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Stack measurement or documented regulatory mass-flow calculation assigned to represented production
- Value mode: Foreground record (`foreground_record`)
- Specificity: Route-specific (`route_specific`)
- Normalization basis: per 1,000 kg accepted reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_direct_emissions`
- Sources: `eu-jrc-fmp-bref-2022`

### Process: Thermal conditioning and curing heat (`thermal_conditioning`)

#### Inputs

##### Product flows

###### Prepared strip entering thermal conditioning (`thermal_input`)

Record the internal prepared strip entering annealing, heating, drying, or curing.

- Selected flow: Prepared flat-rolled non-alloy steel entering thermal conditioning (foreground internal flow; Tiangong UUID unresolved)
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; unit group Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Weighed or mass-balanced process input
- Value mode: Foreground record (`foreground_record`)
- Specificity: Route-specific (`route_specific`)
- Normalization basis: per 1,000 kg accepted reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material_mass`
- Sources: `eu-jrc-fmp-bref-2022`

###### Thermal-conditioning electricity (`thermal_electricity`)

Record alternating-current electricity used by thermal equipment and associated fans and controls.

- Selected flow: Alternating current `455f0ef5-6118-4f2b-a3f5-1f75e0afe3ca`
- Flow property / unit: Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ; unit group Units of energy `93a60a57-a3c8-11da-a746-0800200c9a66`
- Amount rule: Metered or documented allocated electricity, converted from kWh to MJ
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg accepted reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_energy_metering`
- Sources: `worldsteel-lci-methodology-2017`

###### Natural gas for thermal conditioning (`thermal_natural_gas`)

Record natural gas burned in directly or indirectly fired heating, drying, annealing, or curing equipment.

- Selected flow: natural gas in the gaseous state `4f19ca0e-7b3b-11dd-ad8b-0800200c9a66`
- Flow property / unit: Volume `93a60a56-a3c8-22da-a746-0800200c9a66` / m3; unit group Units of volume `93a60a57-a3c8-12da-a746-0800200c9a66`
- Amount rule: Metered gas corrected to declared reference conditions and allocated to thermal conditioning
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg accepted reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_fuel_metering`
- Sources: `eu-jrc-fmp-bref-2022`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Heat-treated strip (`heat_treated_strip`)

Record the conditioned strip transferred to coating or finishing.

- Selected flow: Heat-treated flat-rolled non-alloy steel strip (foreground internal flow; Tiangong UUID unresolved)
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; unit group Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Weighed or mass-balanced dry output
- Value mode: Foreground record (`foreground_record`)
- Specificity: Route-specific (`route_specific`)
- Normalization basis: per 1,000 kg accepted reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material_mass`
- Sources: `eu-jrc-fmp-bref-2022`

##### Waste flows

##### Elementary flows

###### Fossil carbon dioxide from thermal conditioning (`thermal_fossil_co2`)

Calculate or measure direct fossil carbon dioxide from natural-gas combustion in this process.

- Selected flow: carbon dioxide (fossil) `08a91e70-3ddc-11dd-923d-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; unit group Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Calculate from metered fuel, supplier carbon data, and oxidation assumptions under `calc_fossil_co2`, or use quality-assured stack mass data without double counting
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg accepted reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_fuel_metering`
- Sources:

###### Nitrogen oxides from thermal conditioning (`thermal_nitrogen_oxides`)

Record the regulated nitrogen-oxides mass as nitrogen-dioxide equivalent and disclose this reporting convention.

- Selected flow: Nitrogen oxides emitted to air, reported as nitrogen dioxide (Tiangong UUID unresolved)
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; unit group Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Quality-assured stack mass or permit calculation assigned to represented production
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg accepted reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_direct_emissions`
- Sources: `eu-jrc-fmp-bref-2022`

###### Carbon monoxide from thermal conditioning (`thermal_carbon_monoxide`)

Record carbon monoxide released from combustion equipment when monitored or calculated.

- Selected flow: carbon monoxide (fossil) `08a91e70-3ddc-11dd-924e-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; unit group Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Quality-assured stack mass or permit calculation assigned to represented production
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg accepted reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_direct_emissions`
- Sources: `eu-jrc-fmp-bref-2022`

### Process: Metallic plating or coating (`metallic_coating`)

#### Inputs

##### Product flows

###### Strip entering metallic coating (`metallic_input`)

Record the prepared or heat-treated strip entering the metallic coating step.

- Selected flow: Conditioned flat-rolled non-alloy steel entering metallic coating (foreground internal flow; Tiangong UUID unresolved)
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; unit group Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Weighed or mass-balanced process input
- Value mode: Foreground record (`foreground_record`)
- Specificity: Route-specific (`route_specific`)
- Normalization basis: per 1,000 kg accepted reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material_mass`
- Sources: `eu-jrc-fmp-bref-2022`

###### Coating-grade zinc (`coating_zinc`)

Include zinc only when it is consumed in a zinc-containing metallic layer and declare alloy composition and bath inventory change.

- Selected flow: Zinc, coating grade, declared purity and physical state (Tiangong UUID unresolved)
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; unit group Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Net zinc input from purchases plus opening stock minus closing stock and measured recoverable returns
- Value mode: Foreground record (`foreground_record`)
- Specificity: Route-specific (`route_specific`)
- Normalization basis: per 1,000 kg accepted reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_process_chemicals`
- Sources: `eu-jrc-fmp-bref-2022`

###### Coating-grade aluminium (`coating_aluminium`)

Include aluminium only when it is consumed in an aluminium-containing metallic layer and declare alloy composition.

- Selected flow: Aluminium, coating grade, declared purity and physical state (Tiangong UUID unresolved)
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; unit group Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Net aluminium input from purchases and bath stock change
- Value mode: Foreground record (`foreground_record`)
- Specificity: Route-specific (`route_specific`)
- Normalization basis: per 1,000 kg accepted reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_process_chemicals`
- Sources: `eu-jrc-fmp-bref-2022`

###### Coating-grade tin (`coating_tin`)

Include tin only when a tin layer is applied and preserve plating-bath or molten-bath stock records.

- Selected flow: Tin, coating grade, declared purity and physical state (Tiangong UUID unresolved)
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; unit group Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Net tin input from purchases and bath stock change
- Value mode: Foreground record (`foreground_record`)
- Specificity: Route-specific (`route_specific`)
- Normalization basis: per 1,000 kg accepted reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_process_chemicals`
- Sources: `worldsteel-lci-methodology-2017`

###### Metallic-coating electricity (`metallic_electricity`)

Record electricity for coating drives, pumps, electrical plating, air knives, controls, and assigned extraction.

- Selected flow: Alternating current `455f0ef5-6118-4f2b-a3f5-1f75e0afe3ca`
- Flow property / unit: Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ; unit group Units of energy `93a60a57-a3c8-11da-a746-0800200c9a66`
- Amount rule: Metered or documented allocated electricity, converted from kWh to MJ
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg accepted reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_energy_metering`
- Sources: `worldsteel-lci-methodology-2017`

###### Natural gas for metallic coating (`metallic_natural_gas`)

Record natural gas burned for the coating bath, associated drying, or line heating assigned to this process.

- Selected flow: natural gas in the gaseous state `4f19ca0e-7b3b-11dd-ad8b-0800200c9a66`
- Flow property / unit: Volume `93a60a56-a3c8-22da-a746-0800200c9a66` / m3; unit group Units of volume `93a60a57-a3c8-12da-a746-0800200c9a66`
- Amount rule: Metered gas corrected to declared reference conditions and allocated to metallic coating
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg accepted reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_fuel_metering`
- Sources: `eu-jrc-fmp-bref-2022`

###### Protective-atmosphere nitrogen (`protective_nitrogen`)

Record industrial nitrogen supplied to a protective atmosphere only when consumed by the declared metallic-coating route. Retain purity, supply geography, technology, delivery boundary, and physical state as foreground qualifiers.

- Selected flow: Nitrogen gas `92233c86-8e75-441c-94de-03cc91bc7c10`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; unit group Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Metered or supplier-recorded nitrogen mass, or mass converted from measured gas volume using documented density and declared reference conditions
- Value mode: Foreground record (`foreground_record`)
- Specificity: Route-specific (`route_specific`)
- Normalization basis: per 1,000 kg accepted reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_process_chemicals`
- Sources: `eu-jrc-fmp-bref-2022`

###### Protective-atmosphere hydrogen (`protective_hydrogen`)

Record industrial hydrogen supplied to a protective atmosphere only when consumed by the declared metallic-coating route.

- Selected flow: Industrial hydrogen gas with declared purity and supply state (Tiangong UUID unresolved)
- Flow property / unit: Volume `93a60a56-a3c8-22da-a746-0800200c9a66` / m3; unit group Units of volume `93a60a57-a3c8-12da-a746-0800200c9a66`
- Amount rule: Metered or supplier-recorded hydrogen at declared reference conditions
- Value mode: Foreground record (`foreground_record`)
- Specificity: Route-specific (`route_specific`)
- Normalization basis: per 1,000 kg accepted reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_process_chemicals`
- Sources: `eu-jrc-fmp-bref-2022`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Metallic-coated strip (`metallic_coated_strip`)

Record the strip with its retained metallic layer before later finishing.

- Selected flow: Metallic-coated flat-rolled non-alloy steel strip (foreground internal flow; Tiangong UUID unresolved)
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; unit group Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Weighed or mass-balanced dry output including retained metallic layer
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1,000 kg accepted reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material_mass`
- Sources: `eu-jrc-fmp-bref-2022`

##### Waste flows

###### Zinc ash (`zinc_ash`)

Record oxidised zinc-rich ash removed from the bath surface as a separate waste or recovered co-product.

- Selected flow: Zinc ash from metallic coating bath (Tiangong UUID unresolved)
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; unit group Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Weighed removed lot allocated to represented production; disclose destination and whether waste or co-product treatment is used
- Value mode: Foreground record (`foreground_record`)
- Specificity: Route-specific (`route_specific`)
- Normalization basis: per 1,000 kg accepted reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_residues`
- Sources: `eu-jrc-fmp-bref-2022`

###### Zinc-iron bottom dross (`zinc_bottom_dross`)

Record dense zinc-iron dross removed from the bath separately from zinc ash.

- Selected flow: Zinc-iron bottom dross from metallic coating bath (Tiangong UUID unresolved)
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; unit group Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Weighed removed lot allocated to represented production; disclose destination and whether waste or co-product treatment is used
- Value mode: Foreground record (`foreground_record`)
- Specificity: Route-specific (`route_specific`)
- Normalization basis: per 1,000 kg accepted reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_residues`
- Sources: `eu-jrc-fmp-bref-2022`

##### Elementary flows

###### Fossil carbon dioxide from metallic coating (`metallic_fossil_co2`)

Calculate or measure direct fossil carbon dioxide from natural gas assigned to metallic coating.

- Selected flow: carbon dioxide (fossil) `08a91e70-3ddc-11dd-923d-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; unit group Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Calculate from metered fuel under `calc_fossil_co2`, or use non-duplicative quality-assured stack mass data
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg accepted reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_fuel_metering`
- Sources:

###### Zinc to air from metallic coating (`metallic_zinc_air`)

Record zinc released to air from coating-bath and finishing exhaust when measured or permit-calculated.

- Selected flow: zinc `08a91e70-3ddc-11dd-94e3-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; unit group Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Quality-assured stack mass or permit calculation assigned to represented production
- Value mode: Foreground record (`foreground_record`)
- Specificity: Route-specific (`route_specific`)
- Normalization basis: per 1,000 kg accepted reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_direct_emissions`
- Sources: `eu-jrc-fmp-bref-2022`

### Process: Organic coil coating (`organic_coating`)

#### Inputs

##### Product flows

###### Strip entering organic coating (`organic_input`)

Record the prepared or metallic-coated strip entering the organic coating line.

- Selected flow: Flat-rolled non-alloy steel entering organic coating (foreground internal flow; Tiangong UUID unresolved)
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; unit group Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Weighed or mass-balanced process input
- Value mode: Foreground record (`foreground_record`)
- Specificity: Route-specific (`route_specific`)
- Normalization basis: per 1,000 kg accepted reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material_mass`
- Sources: `worldsteel-lci-methodology-2017`

###### Polyester coil-coating paint (`polyester_coating_paint`)

Use this row only for the exact purchased polyester coil-coating paint; preserve supplier product, solids content, solvent/water content, and safety data.

- Selected flow: Polyester coil-coating paint, exact supplier formulation (Tiangong UUID unresolved)
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; unit group Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Net issued paint after opening/closing inventory and documented return correction; zero when this exact formulation is not used
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1,000 kg accepted reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_process_chemicals`
- Sources: `worldsteel-lci-methodology-2017`

###### Water-borne acrylic coil-coating paint (`acrylic_coating_paint`)

Use this row only for the exact purchased water-borne acrylic coil-coating paint and preserve its supplier formulation.

- Selected flow: Water-borne acrylic coil-coating paint, exact supplier formulation (Tiangong UUID unresolved)
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; unit group Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Net issued paint after opening/closing inventory and documented return correction; zero when this exact formulation is not used
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1,000 kg accepted reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_process_chemicals`
- Sources: `eu-jrc-fmp-bref-2022`

###### Organic-coating electricity (`organic_electricity`)

Record electricity for roll coaters, pumps, fans, controls, and assigned exhaust treatment.

- Selected flow: Alternating current `455f0ef5-6118-4f2b-a3f5-1f75e0afe3ca`
- Flow property / unit: Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ; unit group Units of energy `93a60a57-a3c8-11da-a746-0800200c9a66`
- Amount rule: Metered or documented allocated electricity, converted from kWh to MJ
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg accepted reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_energy_metering`
- Sources: `worldsteel-lci-methodology-2017`

###### Natural gas for organic-coating curing (`organic_natural_gas`)

Record natural gas burned in paint drying or curing assigned to the organic-coating process.

- Selected flow: natural gas in the gaseous state `4f19ca0e-7b3b-11dd-ad8b-0800200c9a66`
- Flow property / unit: Volume `93a60a56-a3c8-22da-a746-0800200c9a66` / m3; unit group Units of volume `93a60a57-a3c8-12da-a746-0800200c9a66`
- Amount rule: Metered gas corrected to declared reference conditions and allocated to curing
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg accepted reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_fuel_metering`
- Sources: `worldsteel-lci-methodology-2017`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Organic-coated strip (`organic_coated_strip`)

Record the dry coated strip including retained organic layers.

- Selected flow: Organic-coated flat-rolled non-alloy steel strip (foreground internal flow; Tiangong UUID unresolved)
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; unit group Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Weighed or mass-balanced dry output including retained organic layers
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1,000 kg accepted reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material_mass`
- Sources: `worldsteel-lci-methodology-2017`

##### Waste flows

###### Spent coil-coating paint (`spent_coating_paint`)

Record removed or discarded paint separately from wastewater and packaging.

- Selected flow: Spent coil-coating paint, exact declared formulation (Tiangong UUID unresolved)
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; unit group Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Weighed discarded paint assigned to represented production
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1,000 kg accepted reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_residues`
- Sources: `eu-jrc-fmp-bref-2022`

##### Elementary flows

###### Fossil carbon dioxide from organic coating (`organic_fossil_co2`)

Calculate or measure direct fossil carbon dioxide from natural gas assigned to paint curing.

- Selected flow: carbon dioxide (fossil) `08a91e70-3ddc-11dd-923d-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; unit group Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Calculate from metered fuel under `calc_fossil_co2`, or use non-duplicative quality-assured stack mass data
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg accepted reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_fuel_metering`
- Sources:

### Process: Metal cladding (`metal_cladding`)

#### Inputs

##### Product flows

###### Substrate entering cladding (`cladding_input`)

Record the non-alloy steel substrate entering the cladding operation.

- Selected flow: Flat-rolled non-alloy steel entering metal cladding (foreground internal flow; Tiangong UUID unresolved)
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; unit group Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Weighed or mass-balanced process input
- Value mode: Foreground record (`foreground_record`)
- Specificity: Route-specific (`route_specific`)
- Normalization basis: per 1,000 kg accepted reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material_mass`
- Sources: `un-cpc-3-0-2025`

###### Stainless-steel cladding sheet (`stainless_cladding_sheet`)

Include the exact stainless grade only when a discrete stainless-steel sheet is retained as the cladding layer.

- Selected flow: Stainless-steel cladding sheet, exact declared grade (Tiangong UUID unresolved)
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; unit group Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Weighed cladding sheet entering the bond, corrected for separately weighed offcuts; zero when absent
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1,000 kg accepted reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material_mass`
- Sources:

###### Aluminium cladding sheet (`aluminium_cladding_sheet`)

Include the exact aluminium alloy only when a discrete aluminium sheet is retained as the cladding layer. Retain the exact alloy, sheet state, supplier geography, and cladding application as foreground qualifiers.

- Selected flow: aluminium sheet `4f197be4-7b3b-11dd-ad8b-0800200c9a66`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; unit group Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Weighed cladding sheet entering the bond, corrected for separately weighed offcuts; zero when absent
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1,000 kg accepted reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material_mass`
- Sources:

###### Cladding electricity (`cladding_electricity`)

Record alternating-current electricity assigned to roll bonding, handling, and cladding-line auxiliaries.

- Selected flow: Alternating current `455f0ef5-6118-4f2b-a3f5-1f75e0afe3ca`
- Flow property / unit: Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ; unit group Units of energy `93a60a57-a3c8-11da-a746-0800200c9a66`
- Amount rule: Metered or documented allocated electricity, converted from kWh to MJ
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg accepted reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_energy_metering`
- Sources: `worldsteel-lci-methodology-2017`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Clad strip (`clad_strip`)

Record the bonded clad product before final finishing.

- Selected flow: Metal-clad flat-rolled non-alloy steel (foreground internal flow; Tiangong UUID unresolved)
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; unit group Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Weighed or mass-balanced output including retained cladding layer
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1,000 kg accepted reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material_mass`
- Sources: `un-cpc-3-0-2025`

##### Waste flows

###### Cladding offcut scrap (`cladding_scrap`)

Record segregated or mixed cladding offcuts with their actual composition.

- Selected flow: Metal-cladding offcut scrap from flat-steel production (Tiangong UUID unresolved)
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; unit group Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Weighed scrap removed from the cladding process
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1,000 kg accepted reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_residues`
- Sources:

##### Elementary flows

### Process: Mechanical further working (`mechanical_further_working`)

#### Inputs

##### Product flows

###### Coated or clad strip entering further working (`further_work_input`)

Record the route-specific internal strip entering the declared mechanical operation.

- Selected flow: Coated or clad flat-rolled non-alloy steel entering mechanical further working (foreground internal flow; Tiangong UUID unresolved)
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; unit group Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Weighed or mass-balanced process input
- Value mode: Foreground record (`foreground_record`)
- Specificity: Route-specific (`route_specific`)
- Normalization basis: per 1,000 kg accepted reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material_mass`
- Sources: `eu-jrc-fmp-bref-2022`

###### Further-working electricity (`further_work_electricity`)

Record alternating-current electricity for skin passing, levelling, corrugating, trimming, or the other declared mechanical operation.

- Selected flow: Alternating current `455f0ef5-6118-4f2b-a3f5-1f75e0afe3ca`
- Flow property / unit: Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ; unit group Units of energy `93a60a57-a3c8-11da-a746-0800200c9a66`
- Amount rule: Metered or documented allocated electricity, converted from kWh to MJ
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg accepted reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_energy_metering`
- Sources: `worldsteel-lci-methodology-2017`

###### Mineral rolling lubricant (`rolling_lubricant`)

Include the exact mineral rolling or forming lubricant when it is issued to the mechanical operation.

- Selected flow: Mineral rolling lubricant, exact supplier grade (Tiangong UUID unresolved)
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; unit group Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Net lubricant issue after inventory and recovery correction; zero when no lubricant is used
- Value mode: Foreground record (`foreground_record`)
- Specificity: Route-specific (`route_specific`)
- Normalization basis: per 1,000 kg accepted reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_process_chemicals`
- Sources:

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Mechanically further-worked strip (`further_worked_strip`)

Record the strip after the declared mechanical operation and before final acceptance.

- Selected flow: Mechanically further-worked flat-rolled non-alloy steel (foreground internal flow; Tiangong UUID unresolved)
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; unit group Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Weighed or mass-balanced output
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1,000 kg accepted reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material_mass`
- Sources: `eu-jrc-fmp-bref-2022`

##### Waste flows

###### Non-alloy steel edge-trim scrap (`steel_trim_scrap`)

Record clean edge trim separately from off-spec product and mixed cladding scrap.

- Selected flow: Non-alloy steel edge-trim scrap from flat-rolled product finishing (Tiangong UUID unresolved)
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; unit group Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Weighed segregated trim scrap removed from the process
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1,000 kg accepted reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_residues`
- Sources: `eu-jrc-fmp-bref-2022`

###### Spent mineral rolling lubricant (`spent_rolling_lubricant`)

Record removed spent lubricant as a separate waste flow. Retain the rolling-process origin, lubricant formulation, contamination, and destination as foreground qualifiers.

- Selected flow: Used lubricating oil `55d93375-7f04-4166-b2a2-88ce929051a5`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; unit group Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Weighed removed lubricant assigned to represented production
- Value mode: Foreground record (`foreground_record`)
- Specificity: Route-specific (`route_specific`)
- Normalization basis: per 1,000 kg accepted reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_residues`
- Sources:

##### Elementary flows

### Process: Final finishing, inspection, and packaging (`finishing_packaging`)

#### Inputs

##### Product flows

###### Transformed strip entering final finishing (`finishing_input`)

Record the actual coated, clad, or otherwise further-worked internal product entering final acceptance.

- Selected flow: Further-worked flat-rolled non-alloy steel before final finishing (foreground internal flow; Tiangong UUID unresolved)
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; unit group Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Weighed or mass-balanced process input
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1,000 kg accepted reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material_mass`
- Sources:

###### Finishing electricity (`finishing_electricity`)

Record alternating-current electricity for final levelling or inspection, weighing, handling, and packaging.

- Selected flow: Alternating current `455f0ef5-6118-4f2b-a3f5-1f75e0afe3ca`
- Flow property / unit: Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ; unit group Units of energy `93a60a57-a3c8-11da-a746-0800200c9a66`
- Amount rule: Metered or documented allocated electricity, converted from kWh to MJ
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg accepted reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_energy_metering`
- Sources: `worldsteel-lci-methodology-2017`

###### Protective mineral oil (`protective_oil`)

Include the exact protective oil when it remains on the delivered product and distinguish it from process lubricant.

- Selected flow: Protective mineral oil for flat steel, exact supplier grade (Tiangong UUID unresolved)
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; unit group Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Net oil issue or coating-mass measurement; zero when the delivered product is unoiled
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1,000 kg accepted reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_process_chemicals`
- Sources: `eu-jrc-fmp-bref-2022`

###### Steel packaging strap (`steel_packaging_strap`)

Record steel strap supplied with coil or sheet-pack packaging separately from product mass. Retain dimensions, coating state, supplier geography, and packaging application as foreground qualifiers.

- Selected flow: Steel baling band `56fe4f71-b594-4b55-8553-c87f2516737d`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; unit group Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Weighed or purchase-count-converted strap applied to shipped product; zero when absent
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1,000 kg accepted reference product, packaging excluded from reference-product mass
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging`
- Sources:

###### Kraft protective-wrapping paper (`kraft_wrapping_paper`)

Record kraft paper supplied with the shipping package separately from product mass.

- Selected flow: Kraft protective-wrapping paper (Tiangong UUID unresolved)
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; unit group Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Weighed or purchase-count-converted paper applied to shipped product; zero when absent
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1,000 kg accepted reference product, packaging excluded from reference-product mass
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging`
- Sources:

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Accepted reference product (`reference_product`)

This is the only reference-product output and includes the non-alloy steel substrate and all retained product layers.

- Selected flow: Flat-rolled products of non-alloy steel, clad, plated, coated or otherwise further worked (Tiangong UUID unresolved)
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; unit group Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Fixed normalization to 1,000 kg accepted product based on quality-released mass
- Value mode: Fixed value (`fixed_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: 1,000 kg accepted reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Method formula (`method_formula`)
- Collection protocol:
- Sources: `worldsteel-lci-methodology-2017`

##### Waste flows

###### Off-spec coated steel scrap (`off_spec_steel_scrap`)

Record rejected finished or semi-finished coated product separately from clean edge trim.

- Selected flow: Off-spec coated non-alloy steel scrap (Tiangong UUID unresolved)
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; unit group Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Weighed rejected product not internally reworked within the represented period
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1,000 kg accepted reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_residues`
- Sources:

##### Elementary flows

### Process: On-site process-wastewater treatment (`wastewater_treatment`)

#### Inputs

##### Product flows

###### Process wastewater entering treatment (`wastewater_input`)

Record the internal process-wastewater stream entering on-site treatment.

- Selected flow: Process wastewater from flat-steel preparation and coating (foreground internal waste flow; Tiangong UUID unresolved)
- Flow property / unit: Volume `93a60a56-a3c8-22da-a746-0800200c9a66` / m3; unit group Units of volume `93a60a57-a3c8-12da-a746-0800200c9a66`
- Amount rule: Metered influent assigned to represented production without duplicating the generating-process waste flow
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg accepted reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_water_effluent`
- Sources: `eu-jrc-fmp-bref-2022`

###### Wastewater-treatment electricity (`wastewater_electricity`)

Record alternating-current electricity for pumping, agitation, dosing, clarification, and dewatering.

- Selected flow: Alternating current `455f0ef5-6118-4f2b-a3f5-1f75e0afe3ca`
- Flow property / unit: Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ; unit group Units of energy `93a60a57-a3c8-11da-a746-0800200c9a66`
- Amount rule: Metered or documented allocated electricity, converted from kWh to MJ
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg accepted reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_energy_metering`
- Sources: `worldsteel-lci-methodology-2017`

###### Sodium hydroxide for wastewater neutralisation (`wastewater_sodium_hydroxide`)

Include sodium hydroxide only when used in on-site neutralisation and preserve the neutralisation solution concentration and supply state as foreground qualifiers.

- Selected flow: Sodium hydroxide `e0abcced-0611-4c24-9290-5a2c5a0c4169`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; unit group Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Net solution issue assigned to represented wastewater treatment
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg accepted reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_process_chemicals`
- Sources: `eu-jrc-fmp-bref-2022`

###### Ferric chloride for precipitation (`wastewater_ferric_chloride`)

Include ferric chloride only when used to precipitate metals or suspended solids and preserve solution concentration.

- Selected flow: Ferric chloride, aqueous solution with declared concentration (Tiangong UUID unresolved)
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; unit group Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Net solution issue assigned to represented wastewater treatment
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg accepted reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_process_chemicals`
- Sources: `eu-jrc-fmp-bref-2022`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

##### Waste flows

###### Treated process wastewater (`treated_process_wastewater`)

Record the treated aqueous effluent at the site discharge or external-treatment boundary.

- Selected flow: Treated wastewater from flat-steel surface treatment (Tiangong UUID unresolved)
- Flow property / unit: Volume `93a60a56-a3c8-22da-a746-0800200c9a66` / m3; unit group Units of volume `93a60a57-a3c8-12da-a746-0800200c9a66`
- Amount rule: Metered treated effluent assigned to represented production; disclose receiving boundary and quality data
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg accepted reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_water_effluent`
- Sources: `eu-jrc-fmp-bref-2022`

###### Dewatered metal-bearing wastewater sludge (`wastewater_sludge`)

Record dewatered treatment sludge separately from spent baths and coating-bath residues.

- Selected flow: Dewatered metal-bearing sludge from flat-steel process-wastewater treatment (Tiangong UUID unresolved)
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; unit group Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Weighed wet sludge with measured dry-solids fraction and destination
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg accepted reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_residues`
- Sources: `eu-jrc-fmp-bref-2022`

##### Elementary flows

## 7. Allocation and Co-product Handling

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `allocation_subdivision_first` | shared_processes_and_utilities | Subdivide processes and use dedicated meters or physically justified engineering allocation before applying allocation. Document the allocation key, period, and affected rows for every shared line or utility. | `worldsteel-lci-methodology-2017` |
| `allocation_mass_for_similar_products` | jointly_produced_flat_steel_products | When subdivision is not feasible and products undergo materially similar operations, allocate shared burdens by accepted dry product mass; use another physical relation only when documented as more representative. | `worldsteel-lci-methodology-2017` |
| `allocation_rework` | internal_rework | Keep internally reworked material inside the foreground system. Do not credit it as an exported co-product and count only net external inputs and outputs after closing stock changes. | `worldsteel-lci-methodology-2017` |
| `allocation_recovered_outputs` | steel_scrap_zinc_ash_dross_and_other_recovered_outputs | Classify an output as a co-product only when it leaves the site with a documented function and destination. Prefer system expansion with the substituted function disclosed; otherwise report the selected allocation method and an uncredited waste-treatment result as a sensitivity case. | `worldsteel-lci-methodology-2017` |
| `allocation_recycling_scope` | recycled_content_and_end_of_life | State the scrap-input and end-of-life recycling method. Do not combine a supplier dataset already carrying recycling credits with a second foreground or downstream credit. | `worldsteel-lci-methodology-2017` |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_material_mass` | all applicable production processes | substrate, intermediate, cladding sheet, and accepted product mass | scale ticket, coil record, production record, or dimensional calculation | timestamp; material or coil id; product grade; route; gross/tare/net mass; dimensions; density if calculated; accepted/rejected status | calibrated weighing preferred; dimensional calculation only with verified dimensions and density | kg | each receipt, transfer, and released lot | representative 12 consecutive months; shorter period justified | all included lines at the reporting site | sum by product-route lot; correct opening/closing work in progress; normalize to accepted mass | calibration records; lot traceability; reconciliation to production ledger |
| `cp_energy_metering` | all applicable processes | alternating-current electricity | meter or invoice submeter record | meter id; timestamp; opening/closing reading; kWh; voltage; supplier/market; shared-meter allocation key | dedicated meter preferred; documented engineering allocation otherwise | kWh retained and MJ reported | continuous or monthly reading | same period as production | all included lines and assigned auxiliaries | subtract opening from closing; allocate shared use; convert at 3.6 MJ/kWh | meter calibration or invoice reconciliation; allocation worksheet |
| `cp_fuel_metering` | thermal_conditioning; metallic_coating; organic_coating | gaseous natural gas | corrected gas meter and supplier quality record | meter id; volume; temperature; pressure; moisture basis; calorific value; carbon content when available; allocation key | corrected meter reading with supplier statement | m3 at declared conditions | continuous or monthly reading | same period as production | all included combustion units | allocate corrected volume to process; retain quality data for emission calculation | meter verification; supplier statement; fuel-to-stack reconciliation |
| `cp_process_chemicals` | substrate_preparation; metallic_coating; organic_coating; mechanical_further_working; finishing_packaging; wastewater_treatment | acids, alkalis, coating metals, gases, paints, oils, and treatment chemicals | purchase, tank, bath, issue, and stock records | exact product; supplier; concentration/purity; batch; opening stock; receipts; returns; closing stock; process destination | material balance by exact purchased product | kg or m3 at declared conditions | each delivery and issue; monthly stock close | same period as production | all included processes at the reporting site | receipts plus opening stock minus closing stock, returns, and unrelated use | invoices; stock counts; bath analysis; supplier technical and safety data |
| `cp_water_effluent` | substrate_preparation; wastewater_treatment | supplied water and process wastewater | water and effluent meter, tank, or permit record | meter id; mass or volume; density and reference conditions when converting; source; recirculated volume; discharge point; pH; temperature; conductivity; relevant pollutant concentrations | dedicated meter preferred; tank balance only when documented | kg for Process Water; m3 for UUID-unresolved wastewater rows; preserve measured volume and density when converting | continuous or batch; at least monthly summary | same period as production | all included water-use and discharge points | net external make-up; do not count internal recirculation as new input; align influent and effluent boundaries | meter checks; laboratory reports; density evidence; water balance |
| `cp_direct_emissions` | substrate_preparation; thermal_conditioning; metallic_coating | direct air emissions | continuous monitor, stack test, or permit mass-flow calculation | stack id; species; concentration; flow; oxygen basis; operating hours; method; detection limit; production assignment | quality-assured monitoring or documented regulatory calculation | kg species | continuous monitor or prescribed test frequency | representative operating conditions in production period | every included emission point | concentration times corrected gas flow and operating time; allocate to represented production | calibration; accredited test report; uncertainty and non-detect treatment |
| `cp_residues` | all applicable processes | spent baths, paint, scrap, ash, dross, oil, sludge, and off-spec product | weighbridge ticket, container log, manifest, and analysis | exact residue; gross/tare/net mass; dry solids if relevant; composition; date; destination; waste/co-product status | weigh each outgoing lot or calibrated container | kg; dry-solids fraction where relevant | each removal | same period as production | all included processes at the reporting site | sum by exact residue; correct storage inventory changes | scale calibration; transfer document; laboratory analysis; receiver confirmation |
| `cp_packaging` | finishing_packaging | supplied steel strap and kraft paper | packaging bill, issue record, or count-to-mass record | component; supplier; unit mass; count or length; issued quantity; product lot | weigh representative units and multiply by issued count/length | kg | each packaging lot or monthly issue | same period as production | packaging supplied with accepted product | sum exact components supplied with accepted product; exclude from reference-product mass | purchase records; unit-mass checks; packaging specification |
| `cp_coating_measurement` | metallic_coating; organic_coating; finishing_packaging | retained coating, cladding, passivation, and oil | product test and line-control record | product id; side; area; coating mass or thickness; method; density; retained layer material; acceptance result | specified gravimetric, XRF, beta-backscatter, wet-chemical, or validated thickness method | g/m2, micrometre, and calculated kg | each product campaign at specification frequency | same period as production | each represented product specification | production-weighted result by exact product specification | calibrated instrument; test method; duplicate samples; acceptance record |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_normalize_reference` | every inventory row | normalized amount = period amount / accepted reference-product mass x 1,000 kg | collected period amount; accepted product mass | amount per 1,000 kg accepted product | `worldsteel-lci-methodology-2017` |
| `calc_electricity_mj` | every electricity row | MJ = metered kWh x 3.6 | metered kWh | electricity in MJ |  |
| `calc_layer_mass` | retained coating or cladding | retained layer mass = measured area x total coating mass per area, with side convention stated; if thickness is used, multiply by verified density | product area; sidedness; coating mass per area or thickness; density | kg retained layer | `eu-jrc-fmp-bref-2022` |
| `calc_fossil_co2` | natural-gas combustion rows | fossil CO2 = fuel quantity x supplier carbon or approved emission factor x oxidation factor x 44/12; do not add this result when the same stack CO2 mass is used | corrected fuel quantity; carbon content or factor; oxidation factor | kg fossil CO2 |  |
| `calc_mass_reconciliation` | whole foreground system | substrate plus retained purchased materials plus opening work in progress = accepted product plus external scrap, wastes, residues, measured releases, closing work in progress, and explained difference | mass records from all processes | mass-balance difference and percentage | `worldsteel-lci-methodology-2017` |
| `calc_shared_utility` | shared electricity, gas, water, and treatment | allocate first by dedicated submeter; otherwise use a documented physical driver such as operating time times rated load, corrected throughput, or treated volume | total meter; driver records | process-assigned amount | `worldsteel-lci-methodology-2017` |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_product_identity` | reference product and substrate | Preserve supplier/production lot linkage, non-alloy steel grade, incoming state, dimensions, all retained layers, coating mass or thickness and sidedness, further-working route, finish, and acceptance specification. | purchase specification; coil card; test certificate; product release record |
| `dq_temporal` | all foreground data | Use a representative 12-month period. A shorter period must cover at least one complete campaign for each represented product route and explain seasonal, maintenance, and product-mix effects. | date-bounded raw records; production calendar; justification |
| `dq_geography_technology` | foreground and linked upstream data | Declare production site, country/region, line technology, furnace/coating type, and supplier geography. Explain non-representative upstream or electricity datasets. | site and supplier metadata; dataset mapping record |
| `dq_completeness` | all processes | Include every applicable Process Map process, every energy carrier, exact purchased material and chemical, exact waste stream, and measured elementary emission. Record exclusions with mass, energy, and environmental relevance justification. | completeness checklist; purchase-to-inventory reconciliation; emissions and waste inventories |
| `dq_measurement` | mass, energy, water, chemicals, emissions, and residues | Retain calibration, detection-limit, concentration/purity, reference-condition, dry-solids, and allocation evidence appropriate to each measurement. | calibration certificates; laboratory reports; supplier statements; allocation worksheets |
| `dq_consistency` | model and reporting | Apply identical normalization, allocation, stock correction, and recycling rules across all represented lines and products; document deviations and uncertainty. | calculation workbook; method statement; sensitivity results |

## 9. Validation Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `validation_reference_flow` | reference_product | Confirm exactly one reference output of 1,000 kg accepted product; verify that retained layers are included and transport packaging is excluded from that mass. | `worldsteel-lci-methodology-2017` |
| `validation_route_completeness` | process_map_and_inventory | Confirm that every actual route step is represented, every conditional process has evidence for inclusion or absence, and no selected flow is a collection label or unresolved selector. | `eu-jrc-fmp-bref-2022` |
| `validation_mass_balance` | whole_foreground_system | Perform substrate, coating-metal, and total mass balances; investigate and disclose material differences rather than forcing closure. | `worldsteel-lci-methodology-2017` |
| `validation_energy_and_emissions` | all_energy_and_combustion_rows | Reconcile electricity and fuel to meters, verify kWh-to-MJ conversion and gas reference conditions, and ensure calculated fossil CO2 is not duplicated by stack data. | `worldsteel-lci-methodology-2017` |
| `validation_coating_identity` | retained_layers | Cross-check supplier formulation and bath composition against measured product coating mass or thickness, sidedness, and acceptance records. | `eu-jrc-fmp-bref-2022` |
| `validation_waste_and_water` | wastes_residues_and_effluent | Reconcile spent baths, wastewater, sludge, zinc ash, dross, scrap, and off-spec product to storage changes and transfer documents; preserve exact destinations. | `eu-jrc-fmp-bref-2022` |
| `validation_allocation_and_double_counting` | shared_burdens_co_products_and_recycling | Verify subdivision and allocation keys, test material recovered-output choices, and ensure upstream or downstream recycling credits and treatment are not counted twice. | `worldsteel-lci-methodology-2017` |
| `validation_source_and_uuid_status` | all_rows_and_rules | Reject unverified UUIDs and proxy identities. Confirm that every UUID-empty row remains listed in manifest unresolved metadata and that non-default rules retain source ids. |  |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | foreground production dataset suitable for publication as a secondary_dataset or background_dataset after review and UUID resolution |
| downstream_use | Cradle-to-gate product footprints, EPD or PEF studies, procurement models, and downstream process or lifecyclemodel construction for the exact declared product route |
| allowed_use | Use only when substrate, steel grade, coating/cladding/further-working route, retained layers, product dimensions and form, site geography, production period, allocation, and recycling approach are compatible with the intended model |
| excluded_use | Do not use as an unqualified average for stainless/alloy/electrical/high-speed steel, uncoated flat steel, fabricated components, use-stage performance, or end-of-life; do not support comparative assertions without a study-specific functional unit and review |
| required_metadata | canonical PCR id; reference-flow qualifiers; site and period; product and substrate specifications; route Process Map; included/excluded operations; upstream dataset list; energy supply; allocation and recycling method; UUID resolution status |
| required_quality_disclosure | foreground versus secondary data shares; meter and scale coverage; mass-balance difference; cut-offs; shared-utility allocation; coating test coverage; data age; uncertainty; abnormal-operation treatment; unresolved flows and range evidence needs |
| update_trigger | Change in substrate or product grade, retained layer or supplier formulation, coating/cladding/further-working route, line technology, site or energy supply, allocation/recycling method, material yield, emission control, wastewater treatment, product specification, or foreground data period |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `un-cpc-3-0-2025` | `dataset` | United Nations Statistics Division, CPC Version 3.0 Structure, row 41231, https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Structure_30Jun2025.csv (retrieved 2026-09-02) | Official product classification identity and semantic scope; not methodology or numeric evidence |
| `eu-jrc-fmp-bref-2022` | `official_guidance` | European Commission Joint Research Centre, Best Available Techniques Reference Document for the Ferrous Metals Processing Industry, EUR 31321 EN, JRC131649, DOI: https://doi.org/10.2760/196475 | Surface preparation, continuous hot-dip coating and post-treatment process decomposition; chemicals, wastewater, waste-gas, residue, coating-control, and monitoring requirements |
| `worldsteel-lci-methodology-2017` | `handbook` | World Steel Association, Life cycle inventory methodology report for steel products, ISBN 978-2-930069-89-0, https://worldsteel.org/wp-content/uploads/Life-cycle-inventory-methodology-report.pdf | Factory-gate declared unit, steel system boundary, energy and material completeness, data collection and validation, co-product treatment, and recycling disclosure |
