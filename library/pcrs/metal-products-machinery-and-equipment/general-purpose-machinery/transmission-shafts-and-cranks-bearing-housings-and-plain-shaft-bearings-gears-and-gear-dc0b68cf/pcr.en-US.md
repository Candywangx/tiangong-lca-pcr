---
pcr_id: pcr.metal-products-machinery-and-equipment.general-purpose-machinery.transmission-shafts-and-cranks-bearing-housings-and-plain-shaft-bearings-gears-and-gear-dc0b68cf
language: en-US
status: candidate
content_maturity: authored_methodology
translation_status: canonical
sync_with: pcr.zh-CN.md
---

# Transmission shafts and cranks; bearing housings and plain shaft bearings; gears and gearing; ball or roller screws, gear boxes and other speed changers; flywheels and pulleys; clutches and shaft couplings; articulated link chain

## 1. Scope and Applicability

This PCR covers cradle-to-factory-gate manufacture of new mechanical power-transmission and motion-conversion products in the declared category. It covers transmission shafts and cranks, bearing housings and plain shaft bearings, gears and gearing, ball or roller screws, gearboxes and other speed changers, flywheels and pulleys, clutches and shaft couplings, and articulated-link chain. The shared methodology addresses purchased metal stock or castings, primary shaping, machining or tooth generation, heat treatment, surface treatment, assembly, testing, and release where those operations occur.

Ball or roller bearings, non-articulated chain, contract manufacturing services, repair or remanufacture, upstream production of purchased materials, packaging, distribution, use, maintenance, and end-of-life are outside this PCR. A foreground data package shall declare its actual product family, material grade, geometry, manufacturing route, factory-gate state, and whether each conditional process applies. The representative product used to make the reference flow concrete is an assembled steel single-stage helical industrial gearbox; other covered products use the same mass-normalized rules only with their own clearly declared product identity and route.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.metal-products-machinery-and-equipment.general-purpose-machinery.transmission-shafts-and-cranks-bearing-housings-and-plain-shaft-bearings-gears-and-gear-dc0b68cf |
| classification_refs | CPC 3.0: 43320 (`exact`) |
| covered_products | New finished transmission shafts, cranks, bearing housings, plain shaft bearings, gears, gearing, ball or roller screws, gearboxes, speed changers, flywheels, pulleys, clutches, shaft couplings, and articulated-link chain |
| excluded_products | Ball or roller bearings; non-articulated chain; manufacturing services; repair and remanufacture; packaging; distribution; use; maintenance; end-of-life |
| representative_product | Assembled steel single-stage helical industrial gearbox |
| production_route | Declared combination of stock or casting receipt, primary shaping, machining or tooth generation, heat treatment, surface treatment, assembly, testing, and release |
| market_state | New, finished, unpackaged product at the manufacturing-site gate |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | A finished mechanical product that transmits or converts torque and motion within the declared product family |
| How much | 1 kg net mass of the declared finished product |
| How well | Meets the declared drawing and acceptance specification, including product family, material grade, rated torque or load, speed ratio where relevant, efficiency or backlash where relevant, and surface condition |
| How long or cycle | Factory-gate product provision only; service life and use cycles are not claimed |
| reference_flow_link | `reference_product` |

| Field | Value |
| --- | --- |
| Reference amount | 1 kg net finished product |
| Reference product flow | Assembled steel single-stage helical industrial gearbox |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | actual product family and model; material grades; net product mass; principal dimensions; rated torque or load; input and output speed or ratio where relevant; efficiency or backlash specification where relevant; heat-treatment state; surface treatment; included accessories; manufacturing site and geography; reporting period; factory-gate condition |

When constructing a foreground data package, every item in `Required qualifiers` shall be declared in dataset metadata, process notes, the reference-flow comment, the product description, or an equivalent field. The unresolved product-flow UUID shall not be replaced by the narrower wind-turbine-gearbox candidate.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| `reference_mass` | Reference product | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Determine net dry product mass at factory-gate condition after removal of temporary handling aids and before packaging; state whether permanent lubricant and permanently fitted accessories are included. |
| `item_to_mass` | Production records reported by item | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Convert item counts using measured mass per item or a documented homogeneous-lot average; do not apply one average across different models, sizes, or material grades. |
| `electricity_energy` | Purchased electricity | Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` | MJ | Record delivered electricity as energy; when source records use kWh, multiply by exactly 3.6 MJ/kWh and retain the original meter unit and conversion. |
| `gas_volume` | Gaseous natural gas | Volume `93a60a56-a3c8-22da-a746-0800200c9a66` | m3 | Preserve metered volume and disclose the reference temperature, pressure, and whether the meter reports standard or actual cubic metres. |

## 5. System Boundary

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `boundary_1` | foreground_operations | Include onsite receipt and handling, route-applicable shaping, machining or tooth generation, heat treatment, surface preparation or treatment, assembly, testing, internal material handling, onsite wastewater treatment, and release through the factory gate. | `us-epa-metal-products-machinery-2003` |
| `boundary_2` | purchased_inputs | Record every purchased material, chemical, fuel, electricity, water, and externally produced component at the point it crosses the manufacturing-site boundary; model its upstream production with a separate geographically and technologically representative dataset. | `us-epa-metal-products-machinery-2003` |
| `boundary_3` | exclusions | Exclude capital goods, building construction, employee travel, packaging, distribution, use, maintenance, and end-of-life unless the declared study scope explicitly adds them and reports them separately. |  |
| `boundary_4` | direct_emissions | Report only direct onsite emissions in foreground elementary-flow rows; do not duplicate upstream emissions already represented in purchased electricity, fuel, material, or treatment datasets. |  |

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Purchased metal stock, castings, chemicals, fuels, electricity, water, and externally produced components at the manufacturing-site receiving point |
| starting_condition_role | Cradle-to-gate foreground manufacturing entry condition |
| product_classification_scope | Finished products semantically within CPC 3.0 class 43320; classification is mapping context and does not replace product identity |
| recursive_input_rule | A purchased input already within this product category is recorded once as an atomic product input with its own upstream dataset; do not recursively reproduce its manufacture inside the receiving process. |
| upstream_dataset_requirement | Use supplier-specific data when available; otherwise use a geographically, technologically, temporally, and materially representative upstream dataset and disclose substitutions. |
| disclosure | Declare purchased-versus-in-house boundaries, material grades, net-to-gross mass treatment, route-applicable processes, shared-resource allocation, scrap destination, wastewater destination, direct-emission method, exclusions, and upstream proxies. |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| `material_receipt_and_primary_shaping` | Material receipt and primary shaping | required | All packages include receipt; forging, casting, cutting, drawing, or forming operations are represented only when performed onsite. | Foreground material preparation and near-net shaping | Per 1 kg net finished reference product |
| `machining_and_tooth_generation` | Machining and tooth generation | conditional | Include when turning, milling, drilling, broaching, grinding, honing, lapping, thread or tooth generation, or related subtractive processing is performed onsite. | Foreground dimensional and surface generation | Per 1 kg net finished reference product |
| `heat_treatment` | Heat treatment | conditional | Include when annealing, normalizing, carburizing, nitriding, hardening, tempering, induction treatment, or oil quenching is performed onsite. | Foreground metallurgical-property control | Per 1 kg net finished reference product |
| `surface_treatment` | Surface treatment and cleaning | conditional | Include when aqueous cleaning, alkaline cleaning, conversion coating, plating, painting, or related rinsing is performed onsite. | Foreground cleaning, corrosion protection, and finishing | Per 1 kg net finished reference product |
| `assembly_testing_and_release` | Assembly, testing, and release | required | Include final assembly or joining as applicable, acceptance testing, final inspection, and factory-gate release. | Foreground final product release | Exactly 1 kg net finished reference product |

### Process: Material receipt and primary shaping (`material_receipt_and_primary_shaping`)

#### Inputs

##### Product flows

###### Alloy steel bar stock (`alloy_steel_bar`)

Record alloy steel bar crossing the site boundary for shaft, crank, gear, screw, coupling, or related component manufacture. Record zero only when the declared route uses no such stock.

- Selected flow: Bars and rods of alloy steel, not further worked than forged, hot-rolled, hot-drawn or extruded (except bars or rods of high-speed steel or silico-manganese steel) `c11c7e9a-d020-4b89-a50c-4a82c0f76943`
- Flow property / unit: Mass / kg
- Amount rule: Measured received mass less documented returns to supplier, normalized to conforming product output
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: Per 1 kg net finished reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_forming_records`
- Sources: `us-epa-metal-products-machinery-2003`

###### Grey cast iron housing casting (`grey_cast_iron_housing_casting`)

Record purchased grey cast iron housing castings that cross the site boundary. Keep this row separate from pig iron, steel billet, and other generic castings.

- Selected flow: Grey cast iron housing casting
- Flow property / unit: Mass / kg
- Amount rule: Measured received mass less documented returns to supplier, normalized to conforming product output
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: Per 1 kg net finished reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_forming_records`
- Sources: `us-epa-metal-products-machinery-2003`

###### Unwrought aluminium alloy (`aluminium_alloy`)

Record unwrought aluminium alloy charged to onsite casting for aluminium housings or pulleys. Record zero when casting this alloy is outside the declared route.

- Selected flow: Aluminium alloy `28b47d6d-68b4-4810-b764-01a1fc1352dc`
- Flow property / unit: Mass / kg
- Amount rule: Measured charged mass net of documented supplier returns, normalized to conforming product output
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: Per 1 kg net finished reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_forming_records`
- Sources: `us-epa-metal-products-machinery-2003`

###### Low-alloy steel wire (`low_alloy_steel_wire`)

Record low-alloy steel wire used for onsite forming and joining of articulated-link chain. Record zero for non-chain products and chain routes using a different declared wire identity.

- Selected flow: Wire drawing, steel `461d98b3-a825-41bb-9b16-056331873326`
- Flow property / unit: Mass / kg
- Amount rule: Measured received mass less documented returns to supplier, normalized to conforming product output
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: Per 1 kg net finished reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_forming_records`
- Sources: `us-epa-metal-products-machinery-2003`

###### Forming electricity (`forming_electricity`)

Record purchased electricity consumed by cutting, forging, casting, drawing, bending, forming, dust collection, and directly associated equipment in this process.

- Selected flow: Electricity `890a70b7-b677-4e2a-8a1b-7d017e0a10ae`
- Flow property / unit: Net calorific value / MJ
- Amount rule: Submetered energy, or documented equipment-level allocation from the site meter when a dedicated submeter is unavailable
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: Per 1 kg net finished reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_forming_records`
- Sources: `us-epa-metal-products-machinery-2003`

###### Forming natural gas (`forming_natural_gas`)

Record gaseous natural gas burned onsite in route-applicable forging or casting furnaces; exclude upstream gas supply emissions from direct foreground emissions.

- Selected flow: natural gas in the gaseous state `4f19ca0e-7b3b-11dd-ad8b-0800200c9a66`
- Flow property / unit: Volume / m3
- Amount rule: Metered standard or actual volume allocated to this process, with reference conditions disclosed
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: Per 1 kg net finished reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_forming_records`
- Sources: `us-epa-metal-products-machinery-2003`

#### Outputs

##### Waste flows

###### Segregated post-industrial steel scrap (`forming_steel_scrap`)

Record clean ferrous offcuts, flash, crop ends, and rejected steel pieces leaving the process as a segregated waste flow.

- Selected flow: Post-industrial steel scrap `c143745d-be4f-4d8f-b403-2dcbfe685349`
- Flow property / unit: Mass / kg
- Amount rule: Weighed dispatched mass plus verified internal scrap inventory change; do not net recycling credit into the foreground amount
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: Per 1 kg net finished reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_forming_records`
- Sources: `us-epa-metal-products-machinery-2003`

##### Elementary flows

###### Direct fossil carbon dioxide from forming furnaces (`forming_fossil_co2`)

Record fossil carbon dioxide emitted onsite from natural-gas combustion in forming furnaces. Do not include upstream fuel or electricity emissions.

- Selected flow: carbon dioxide (fossil) `08a91e70-3ddc-11dd-923d-0050c2490048`
- Flow property / unit: Mass / kg
- Amount rule: Calculated from collected fuel carbon and oxidation records under `calc_direct_fossil_co2`, or measured stack mass when a verified direct measurement is available
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: Per 1 kg net finished reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_forming_records`
- Sources:

### Process: Machining and tooth generation (`machining_and_tooth_generation`)

#### Inputs

##### Product flows

###### Machining electricity (`machining_electricity`)

Record electricity used by machine tools, coolant circulation, chip handling, local extraction, and in-process inspection for the declared machining route.

- Selected flow: Electricity `890a70b7-b677-4e2a-8a1b-7d017e0a10ae`
- Flow property / unit: Net calorific value / MJ
- Amount rule: Submetered energy, or documented machine-time allocation from a site meter
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: Per 1 kg net finished reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_machining_records`
- Sources: `us-epa-metal-products-machinery-2003`

###### Machining process water (`machining_process_water`)

Record process water supplied for coolant preparation, wet grinding, or in-process washing when it crosses this process boundary.

- Selected flow: Process Water `94a04f7e-2d5c-41f0-b182-d54a3b373a02`
- Flow property / unit: Mass / kg
- Amount rule: Metered or batch-recipe mass of water supplied to the process, net of separately metered internal reuse
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: Per 1 kg net finished reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_machining_records`
- Sources: `us-epa-metal-products-machinery-2003`

###### Cutting fluid (`cutting_fluid`)

Record new cutting fluid concentrate or neat cutting fluid added to the machining system; recycled fluid circulating within the process is not counted again.

- Selected flow: Cutting Fluid `576d250f-4f36-4385-939d-0f03b8f95a10`
- Flow property / unit: Mass / kg
- Amount rule: Purchased additions plus opening inventory minus closing inventory and documented transfers out
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: Per 1 kg net finished reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_machining_records`
- Sources: `us-epa-metal-products-machinery-2003`

#### Outputs

##### Waste flows

###### Steel machining chips (`steel_chips`)

Record segregated steel chips removed by machining and leaving the process, including retained cutting-fluid mass only when the waste scale cannot separate it and the limitation is disclosed.

- Selected flow: Steel chips `bcb2604e-4735-4b7d-88ab-03de8ff5930b`
- Flow property / unit: Mass / kg
- Amount rule: Weighed dispatched mass plus verified inventory change, with attached-fluid treatment documented
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: Per 1 kg net finished reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_machining_records`
- Sources: `us-epa-metal-products-machinery-2003`

###### Waste cutting oil (`waste_cutting_oil`)

Record spent oil-based cutting fluid removed from service and transferred for treatment, recovery, or disposal. Do not combine it with aqueous wastewater.

- Selected flow: Waste cutting oil `80d926e3-0f76-4a19-9b1e-ffec9deb1216`
- Flow property / unit: Mass / kg
- Amount rule: Weighed or volume-to-mass converted transfer quantity, with density and destination documented
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: Per 1 kg net finished reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_machining_records`
- Sources: `us-epa-metal-products-machinery-2003`

### Process: Heat treatment (`heat_treatment`)

#### Inputs

##### Product flows

###### Heat-treatment electricity (`heat_treatment_electricity`)

Record purchased electricity used by electric furnaces, induction equipment, controls, quench circulation, and associated extraction in the declared heat-treatment route.

- Selected flow: Electricity `890a70b7-b677-4e2a-8a1b-7d017e0a10ae`
- Flow property / unit: Net calorific value / MJ
- Amount rule: Submetered energy or documented furnace-load allocation based on batch occupancy and cycle records
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: Per 1 kg net finished reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_heat_treatment_records`
- Sources: `us-epa-metal-products-machinery-2003`

###### Heat-treatment natural gas (`heat_treatment_natural_gas`)

Record gaseous natural gas burned onsite by heat-treatment furnaces. Record zero for a fully electric declared route.

- Selected flow: natural gas in the gaseous state `4f19ca0e-7b3b-11dd-ad8b-0800200c9a66`
- Flow property / unit: Volume / m3
- Amount rule: Metered volume allocated by furnace batch, with reference conditions and allocation basis disclosed
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: Per 1 kg net finished reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_heat_treatment_records`
- Sources: `us-epa-metal-products-machinery-2003`

###### Quenching oil (`quenching_oil`)

Record new quenching oil added to an onsite oil-quench system. Record zero for air, water, polymer, salt-bath, or other declared quench media.

- Selected flow: Quenching Oil `02f62137-e204-46e6-8e72-e88b450fbdc4`
- Flow property / unit: Mass / kg
- Amount rule: Purchased additions plus opening inventory minus closing inventory and documented transfers out
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: Per 1 kg net finished reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_heat_treatment_records`
- Sources: `us-epa-metal-products-machinery-2003`

#### Outputs

##### Waste flows

###### Spent quench oil (`spent_quench_oil`)

Record quench oil removed from service and transferred for treatment, recovery, or disposal.

- Selected flow: spent quench oil `0f997fd8-26b1-432f-a8b8-e2703616b018`
- Flow property / unit: Mass / kg
- Amount rule: Weighed or volume-to-mass converted transfer quantity, with density and destination documented
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: Per 1 kg net finished reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_heat_treatment_records`
- Sources: `us-epa-metal-products-machinery-2003`

##### Elementary flows

###### Direct fossil carbon dioxide from heat treatment (`heat_treatment_fossil_co2`)

Record fossil carbon dioxide emitted onsite from natural-gas combustion in heat-treatment furnaces. Do not include upstream fuel or electricity emissions.

- Selected flow: carbon dioxide (fossil) `08a91e70-3ddc-11dd-923d-0050c2490048`
- Flow property / unit: Mass / kg
- Amount rule: Calculated from collected fuel carbon and oxidation records under `calc_direct_fossil_co2`, or measured stack mass when a verified direct measurement is available
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: Per 1 kg net finished reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_heat_treatment_records`
- Sources:

### Process: Surface treatment and cleaning (`surface_treatment`)

#### Inputs

##### Product flows

###### Surface-treatment electricity (`surface_electricity`)

Record electricity used by cleaning, bath heating, pumping, extraction, rectification, drying, and directly associated wastewater treatment for the declared surface route.

- Selected flow: Electricity `890a70b7-b677-4e2a-8a1b-7d017e0a10ae`
- Flow property / unit: Net calorific value / MJ
- Amount rule: Submetered energy or documented line-time allocation from a site meter
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: Per 1 kg net finished reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_surface_records`
- Sources: `us-epa-metal-products-machinery-2003`

###### Surface-treatment process water (`surface_process_water`)

Record process water supplied to aqueous cleaning, bath makeup, rinsing, and onsite treatment for this route, net of internal reuse that does not cross the process boundary.

- Selected flow: Process Water `94a04f7e-2d5c-41f0-b182-d54a3b373a02`
- Flow property / unit: Mass / kg
- Amount rule: Metered incoming mass or volume converted with documented density and reference conditions
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: Per 1 kg net finished reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_surface_records`
- Sources: `us-epa-metal-products-machinery-2003`

###### Sodium hydroxide cleaner (`sodium_hydroxide`)

Record sodium hydroxide contained in purchased alkaline cleaner or added directly to an onsite cleaning bath. Report active sodium hydroxide mass rather than total solution mass.

- Selected flow: Sodium hydroxide `e0abcced-0611-4c24-9290-5a2c5a0c4169`
- Flow property / unit: Mass / kg
- Amount rule: Purchased solution mass multiplied by supplier concentration, plus direct solid additions, adjusted for inventory change
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: Per 1 kg net finished reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_surface_records`
- Sources: `us-epa-metal-products-machinery-2003`

#### Outputs

##### Waste flows

###### Metal-finishing wastewater (`metal_finishing_wastewater`)

Record the aqueous wastewater stream leaving surface cleaning or treatment for onsite or offsite treatment. Do not combine it with spent oils or sludge.

- Selected flow: Metal-finishing wastewater
- Flow property / unit: Mass / kg
- Amount rule: Metered discharge mass or volume converted with documented density, before any boundary-crossing treatment transfer
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: Per 1 kg net finished reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_surface_records`
- Sources: `us-epa-metal-products-machinery-2003`

###### Metal-bearing surface-treatment sludge (`metal_bearing_sludge`)

Record dewatered metal-bearing sludge removed from treatment of surface-process wastewater. Keep oil sludge and paint waste in separate rows if those streams occur.

- Selected flow: Metal-bearing surface-treatment sludge
- Flow property / unit: Mass / kg
- Amount rule: Weighed wet mass with dry-solids fraction and destination retained in the foreground record
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: Per 1 kg net finished reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_surface_records`
- Sources: `us-epa-metal-products-machinery-2003`

### Process: Assembly, testing, and release (`assembly_testing_and_release`)

#### Inputs

##### Product flows

###### Assembly and testing electricity (`assembly_electricity`)

Record electricity used by assembly tools, joining equipment, test stands, final inspection, and directly associated handling.

- Selected flow: Electricity `890a70b7-b677-4e2a-8a1b-7d017e0a10ae`
- Flow property / unit: Net calorific value / MJ
- Amount rule: Submetered energy or documented equipment-time allocation from a site meter
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: Per 1 kg net finished reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_assembly_records`
- Sources: `us-epa-metal-products-machinery-2003`

###### Permanent lubricating grease (`lubricating_grease`)

Record lubricating grease that remains in the finished representative product at the factory gate. Do not combine grease with process cutting or quenching oils.

- Selected flow: Lubricating grease
- Flow property / unit: Mass / kg
- Amount rule: Measured fill mass or filled-container mass balance for conforming released product
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: Per 1 kg net finished reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_assembly_records`
- Sources:

#### Outputs

##### Product flows

###### Reference product (`reference_product`)

This output is the concrete representative used by the PCR reference flow. The product-flow UUID remains unresolved because the available wind-turbine-gearbox identity is not an exact semantic match.

- Selected flow: Assembled steel single-stage helical industrial gearbox
- Flow property / unit: Mass / kg
- Amount rule: Exactly 1 kg net finished product at factory-gate condition
- Value mode: Fixed value (`fixed_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: Per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_assembly_records`
- Sources:

## 7. Allocation and Co-product Handling

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `allocation_1` | product_and_process_assignment | Avoid allocation by separately metering and recording product-specific material, machine, furnace, line, and test activity wherever practicable. |  |
| `allocation_2` | shared_resources | When direct measurement is unavailable, allocate a shared resource only with a documented causal engineering parameter such as machine time, furnace occupancy and cycle, treated surface area, or test-stand time; mass allocation may be used only when the products use materially comparable operations. |  |
| `allocation_3` | metal_scrap | Report gross metal inputs and outgoing scrap without subtracting a recycling credit inside the foreground process; disclose scrap destination and apply any substitution or recycled-content convention only once in the downstream LCA method. |  |
| `allocation_4` | nonconforming_product | Assign rework and reject burdens to the production lot that generated them; record recovered material as an explicit waste or product output and document inventory changes. |  |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_forming_records` | `material_receipt_and_primary_shaping` | Purchased metals, electricity, natural gas, scrap, and direct combustion emission | Scale tickets, receiving and inventory records, utility meters, furnace logs, waste manifests | product code; material grade; opening and closing inventory; received and returned mass; electricity; gas volume and reference conditions; conforming output; scrap mass; fossil carbon data | Reconcile calibrated scales, invoices, submeters, furnace batches, and waste transfers by product route | kg; MJ; m3 | Per receipt, batch, meter interval, and waste transfer; aggregate monthly | At least 12 consecutive representative months or the full campaign for campaign production | All onsite shaping equipment and directly associated controls and extraction | Sum boundary-crossing quantities, adjust inventory change, allocate shared activity causally, then divide by conforming net output mass | Calibration records, invoices, batch logs, allocation worksheet, waste manifests, and anomaly review |
| `cp_machining_records` | `machining_and_tooth_generation` | Electricity, water, cutting fluid, chips, and waste cutting oil | Submeters, machine logs, purchase and inventory records, water meters, waste manifests | machine id; product code; run time; electricity; water; fluid additions; opening and closing fluid inventory; chip mass; waste-oil mass; conforming output | Reconcile machine and fluid-system records with boundary meters and dispatched wastes | kg; MJ | Per batch and meter interval; aggregate monthly | At least 12 consecutive representative months or the full campaign | All onsite machining and tooth-generation equipment in scope | Sum and inventory-adjust each atomic flow, allocate by documented machine activity, divide by conforming net output mass | Meter calibration, purchase records, production logs, waste tickets, and reconciliation worksheet |
| `cp_heat_treatment_records` | `heat_treatment` | Electricity, natural gas, quenching oil, spent oil, and direct combustion emission | Furnace meters and batch logs, oil inventory, waste manifests, fuel carbon information | furnace id; cycle; batch load; electricity; gas volume and reference conditions; oil additions; oil inventory; spent oil; conforming output; fossil carbon data | Reconcile each furnace campaign and allocate shared cycles by occupied furnace capacity and cycle | kg; MJ; m3 | Per furnace batch and waste transfer; aggregate monthly | At least 12 consecutive representative months or the full campaign | All onsite heat-treatment equipment in scope | Sum energy and oil balances, calculate direct fossil CO2 where used, divide by conforming net output mass | Meter calibration, furnace logs, supplier data, waste tickets, and batch reconciliation |
| `cp_surface_records` | `surface_treatment` | Electricity, water, sodium hydroxide, wastewater, and sludge | Line meters, bath make-up logs, chemical invoices, concentration certificates, discharge meters, sludge tickets | line id; product code; treated mass or area; electricity; water; cleaner solution mass; NaOH fraction; bath inventory; wastewater; sludge wet mass; dry solids; conforming output | Reconcile bath additions, rinses, treatment outputs, and production line records | kg; MJ | Per bath addition, batch, meter interval, and waste transfer; aggregate monthly | At least 12 consecutive representative months or the full campaign | All onsite surface-treatment and directly associated wastewater-treatment equipment | Calculate active NaOH, adjust inventories, allocate shared line activity causally, divide by conforming net output mass | Meter calibration, chemical certificates, bath logs, discharge records, laboratory results, and waste manifests |
| `cp_assembly_records` | `assembly_testing_and_release` | Electricity, permanent grease, and released product | Submeters, tool or test-stand logs, grease issue or fill records, calibrated product scales | product model; serial or lot; electricity; test time; grease issued and returned; filled mass; net product mass; released quantity | Reconcile released product, grease mass balance, and equipment activity for conforming units | kg; MJ | Per lot and meter interval; aggregate monthly | At least 12 consecutive representative months or the full campaign | All onsite assembly, test, inspection, and release equipment in scope | Sum each input, allocate shared activity causally, divide by released net product mass | Scale and meter calibration, test records, bill of materials, grease fill records, and release certificate |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_normalize_mass` | All inventory rows | Normalized amount = inventory-adjusted amount assigned to conforming product / conforming net finished-product mass | Boundary-crossing amount; opening and closing inventory; returns or transfers; causal allocation; conforming net product mass | Amount per 1 kg reference product |  |
| `calc_active_naoh` | `sodium_hydroxide` | Active NaOH mass = cleaner solution mass × supplier or measured NaOH mass fraction + direct solid NaOH additions, adjusted for opening and closing inventory | Solution mass; NaOH fraction; solid additions; inventory change | kg sodium hydroxide per 1 kg reference product |  |
| `calc_direct_fossil_co2` | `forming_fossil_co2`; `heat_treatment_fossil_co2` | Fossil CO2 mass = oxidized fossil carbon mass × 44 / 12; use a verified site- or supplier-specific carbon and oxidation record and keep forming and heat-treatment fuel separate | Allocated fuel amount; fossil carbon content; oxidation fraction | kg direct fossil CO2 per 1 kg reference product |  |
| `calc_mass_balance` | Metal-bearing processes | Reconcile opening inventory + metal inputs with closing inventory + conforming product + metal outputs and documented losses; investigate rather than force-balance unexplained differences | Metal receipts; inventory; product mass; scrap and chip mass; documented transfers | Process mass-balance discrepancy and explanation |  |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_identity` | Reference product and material inputs | Retain product model, drawing or specification, material grade, product family, heat-treatment state, surface treatment, and factory-gate state for each represented lot. | Released-product certificate, bill of materials, drawings, material certificates, and lot traceability |
| `dq_measurement` | Scales, meters, and analytical values | Use calibrated or legally controlled devices; retain unit, calibration status, measurement boundary, reference conditions, and conversion factors. | Calibration certificates, meter register, laboratory method, and conversion worksheet |
| `dq_temporal` | Foreground activity | Cover at least 12 consecutive representative months or the complete campaign; disclose shutdowns, start-ups, abnormal batches, and substitutions. | Dated production, purchasing, meter, inventory, and waste records |
| `dq_completeness` | Inventory | Reconcile each process against purchase, meter, production, inventory, and waste-control totals and explain exclusions or values recorded as zero. | Reconciliation workbook, variance review, and responsible-person approval |
| `dq_allocation` | Shared operations | Document why the selected causal parameter represents resource use and retain both total shared activity and allocated product activity. | Meter totals, machine or furnace logs, allocation worksheet, and sensitivity check |
| `dq_waste` | Scrap, chips, oils, wastewater, and sludge | Retain physical state, contamination or dry-solids information where relevant, measurement basis, destination, and whether treatment occurs onsite or offsite. | Waste manifest, scale ticket, laboratory result, discharge record, and contractor receipt |

## 9. Validation Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `validation_1` | reference_flow | Confirm that inventory is normalized to exactly 1 kg net finished product and that the declared product and required qualifiers are complete. |  |
| `validation_2` | inventory_identity | Confirm every inventory card contains one atomic exchange and either a verified Tiangong UUID or the same explicit unresolved row id recorded in the manifest. |  |
| `validation_3` | process_route | Confirm that every included process matches the declared manufacturing route and that each conditional process and route-specific row recorded as zero is demonstrably absent. | `us-epa-metal-products-machinery-2003` |
| `validation_4` | metal_mass_balance | Reconcile metal input, inventory change, finished product, scrap, chips, and documented losses for each applicable metal-bearing process; investigate material discrepancies before release. |  |
| `validation_5` | energy_and_emissions | Reconcile process electricity and fuel with site meter totals and ensure direct fossil CO2 excludes upstream electricity and fuel-supply emissions. |  |
| `validation_6` | wastewater_and_sludge | Reconcile surface-process water with reuse, wastewater, evaporation where measured, product carryover, and sludge moisture; disclose any unmeasured term. | `us-epa-metal-products-machinery-2003` |
| `validation_7` | evidence_and_ranges | Reject externally inferred ranges unless at least two mutually independent original sources have compatible boundary, functional unit, and product state; unresolved range needs remain foreground collection requirements rather than invented values. |  |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | Product-specific cradle-to-factory-gate foreground production dataset |
| downstream_use | `secondary_dataset`; `background_dataset` when the declared product and route are representative for the consuming model |
| allowed_use | LCA of products and systems consuming the declared transmission or power-drive product; manufacturing improvement; supplier and route comparison after functional and boundary alignment |
| excluded_use | Comparison of different product families without rated-function and service-life alignment; use-phase claims; repair or remanufacture claims; generic regional market modelling without representativeness review |
| required_metadata | PCR id and version; product model and family; material grades; net mass; rated load or torque; speed ratio where relevant; efficiency or backlash where relevant; route; site and geography; reporting period; allocation; scrap and waste destinations; upstream dataset references; unresolved identities |
| required_quality_disclosure | Temporal and site coverage; measurement and calibration status; data completeness; allocation and mass-balance results; route exclusions; proxy datasets; direct-emission method; wastewater and sludge basis; unresolved UUID and range evidence needs |
| update_trigger | Material change in product design, bill of materials, route, heat or surface treatment, site energy supply, allocation, waste destination, data older than the applicable representativeness period, or resolution of a recorded identity or evidence gap |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `un-cpc-3-0-structure-2025` | official_guidance | United Nations Statistics Division, CPC Version 3.0 Structure, 30 June 2025, https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Structure_30Jun2025.csv (retrieved 2026-09-05) | Official classification identity and category boundary seed |
| `us-epa-metal-products-machinery-2003` | official_guidance | U.S. Environmental Protection Agency, Development Document for the Final Effluent Limitations Guidelines and Standards for the Metal Products and Machinery Point Source Category, 2003, https://www.epa.gov/sites/default/files/2015-11/documents/mp-m_dd_2003.pdf (retrieved 2026-09-05) | Process decomposition, operation sequencing, machining, heat treatment, cleaning, surface finishing, assembly, and associated wastewater evidence |
