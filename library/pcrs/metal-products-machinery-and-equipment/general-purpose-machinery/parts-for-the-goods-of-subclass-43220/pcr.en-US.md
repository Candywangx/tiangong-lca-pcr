---
pcr_id: pcr.metal-products-machinery-and-equipment.general-purpose-machinery.parts-for-the-goods-of-subclass-43220
language: en-US
status: candidate
content_maturity: authored_methodology
translation_status: canonical
sync_with: pcr.zh-CN.md
---

# Parts for the goods of subclass 43220

## 1. Scope and Applicability

This PCR applies to parts that are designed, manufactured, and supplied separately for liquid pumps or liquid elevators. Covered examples include pump casings, impellers, diffusers, pump-specific shafts, rotors, pistons, plungers, diaphragms, and other identifiable pump or liquid-elevator parts. A foreground data package must identify the exact part and may include only the material and manufacturing routes actually used.

Complete pumps and liquid elevators, electric motors, generic bearings, generic fasteners, generic seals not identifiable as pump parts, maintenance or repair services, and parts for compressors, valves, hydraulic motors, or internal-combustion engines are excluded. Use phase, distribution after the factory gate, installation, spare-part replacement, and end-of-life are outside this gate-to-gate manufacturing rule unless a study explicitly extends the boundary and reports those additions separately.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.metal-products-machinery-and-equipment.general-purpose-machinery.parts-for-the-goods-of-subclass-43220 |
| classification_refs | CPC 3.0:43252, Parts for the goods of subclass 43220 (exact classification context) |
| covered_products | Identifiable parts supplied separately for liquid pumps or liquid elevators, including pump casings, impellers, diffusers, pump-specific shafts, rotors, pistons, plungers, and diaphragms |
| excluded_products | Complete pumps or liquid elevators; motors; generic bearings, fasteners, and seals; compressor, valve, hydraulic-motor, and engine parts; installation and repair services |
| representative_product | One finished, conforming, separately supplied liquid-pump or liquid-elevator part |
| production_route | Route-specific forming or moulding, machining, heat treatment, aqueous or other surface treatment, assembly, testing, preservation, and packaging; declare only operations actually performed |
| market_state | Finished part at the manufacturing gate, clean and accepted to the declared drawing or specification, before incorporation into a complete pump or liquid elevator |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | A finished, conforming part that performs the declared structural, hydraulic, sealing, motion-transfer, or liquid-lifting function in a liquid pump or liquid elevator |
| How much | 1 kg net mass of conforming reference product |
| How well | Meets the declared drawing, material grade, dimensions and tolerances, surface condition, and acceptance-test requirements |
| How long or cycle | Delivered once at the manufacturing gate; service life is not used to normalize this gate-to-gate manufacturing dataset |
| reference_flow_link | Reference amount and product flow below |

| Field | Value |
| --- | --- |
| Reference amount | 1 kg |
| Reference product flow | Parts for the goods of subclass 43220 |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | part name and function; associated pump or liquid-elevator type; drawing or specification; material and grade; net product mass; forming or moulding route; machining route; heat treatment; surface treatment or coating; acceptance-test state; recycled-content claim and method; factory and geography; reporting period; included packaging |

When constructing a foreground data package, every item in `Required qualifiers` must be declared in metadata, process notes, the reference-flow comment, the product description, or an equivalent field. Missing required qualifiers make the reference flow incomplete.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| `reference_mass` | Reference product and mass-normalized inventory | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Normalize all reported amounts to 1 kg net mass of conforming product, excluding rejected parts and packaging from the denominator. |
| `energy_conversion` | Purchased electricity | Net calorific value | MJ | Preserve the metered energy basis; when the source record is in kWh, convert with 1 kWh = 3.6 MJ and retain the original meter value. |
| `gas_reference_conditions` | Gaseous natural gas | Volume | m3 | Record the supplier or meter reference temperature, pressure, and dry or wet basis; do not combine volumes reported at different conditions without conversion. |
| `water_conversion` | Process water and wastewater | Mass | kg | Prefer measured mass; a volume-to-mass conversion requires a documented density and reference condition for the actual stream. |
| `material_mass_balance` | Product-forming materials and their wastes | Mass | kg | Keep each material family separate and reconcile purchased input, inventory change, returned material, reference product, scrap, sludge, and other losses on the same reporting-period basis. |

## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Purchased material, purchased component, energy, water, chemical, and packaging flows at the receiving boundary of the pump-part manufacturing site |
| starting_condition_role | Gate-to-gate foreground starting condition with required upstream datasets for every purchased input |
| product_classification_scope | Parts identifiable as goods of CPC 43252; classification is context and does not replace the declared part identity |
| recursive_input_rule | If a purchased input is itself a separately supplied pump part within this category, record it once as a purchased product input with its supplier dataset and do not reopen its manufacture inside the receiving process |
| upstream_dataset_requirement | Link each purchased material, component, energy carrier, water, chemical, and included packaging flow to a geographically, technologically, and temporally representative upstream dataset |
| disclosure | Declare the exact part, material route, forming or moulding route, machining, heat treatment, surface treatment, testing, packaging, outsourced operations, exclusions, and any extensions beyond the manufacturing gate |

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `boundary_factory_gate` | Foreground manufacturing | Include operations from receipt of purchased inputs through release of the conforming part at the manufacturing gate, including on-site utilities, rejects, waste handling before transfer, and packaging physically supplied with the part. | `eu-environmental-footprint-2021` |
| `boundary_upstream` | Purchased inputs | Represent upstream production outside the foreground as linked datasets; do not replace purchased-input quantities with upstream emissions inside the foreground inventory. | `eu-environmental-footprint-2021` |
| `boundary_route_disclosure` | Conditional manufacturing routes | Include casting, forging, polymer moulding, heat treatment, aqueous treatment, coating, and packaging only when performed or purchased for the declared part, and disclose each applicable route. | `eu-jrc-sf-bref-2024`, `eu-jrc-stm-bref-2006` |
| `boundary_actual_flows` | Foreground completeness | Add every actual atomic material, chemical, energy, water, waste, and direct elementary flow that crosses the declared boundary even when it is not one of the common rows below. | `eu-environmental-footprint-2021` |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| `pump_part_manufacturing` | Route-specific pump-part manufacturing | `required` | Always; route-specific unit operations are declared and non-applicable rows are omitted | Foreground forming or moulding, machining, treatment, assembly, testing, preservation, and included packaging | 1 kg net mass of conforming reference product |

### Process: Route-specific pump-part manufacturing (`pump_part_manufacturing`)

#### Inputs

##### Product flows

###### Cold-finished carbon-steel stock (`carbon_steel_input`)

Record carbon-steel bar or rod stock only when it is consumed by the declared part route.

- Selected flow: Carbon Steel `b3b18433-8fd1-4298-98f5-8af11eb64762`
- Flow property / unit: Mass / kg
- Amount rule: measured net carbon-steel stock issued to production minus documented unused returns
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg conforming reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material_mass`
- Sources: `eu-jrc-sf-bref-2024`

###### Stainless-steel stock (`stainless_steel_input`)

Record stainless steel only when the declared part contains or is formed from this material.

- Selected flow: Stainless steel `84c2403f-5062-5d68-8276-838384d32b89`
- Flow property / unit: Mass / kg
- Amount rule: measured net stainless-steel stock issued to production minus documented unused returns
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg conforming reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material_mass`
- Sources: `eu-jrc-sf-bref-2024`

###### Unwrought aluminium-alloy charge (`aluminium_alloy_input`)

Record aluminium-alloy charge only for an applicable casting or forming route.

- Selected flow: Aluminium alloy `28b47d6d-68b4-4810-b764-01a1fc1352dc`
- Flow property / unit: Mass / kg
- Amount rule: measured net aluminium-alloy charge consumed after documented returns and internal recirculation
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg conforming reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material_mass`
- Sources: `eu-jrc-sf-bref-2024`

###### Unwrought copper-alloy charge (`copper_alloy_input`)

Record copper or copper-alloy charge only for an applicable casting or forming route.

- Selected flow: Copper and copper alloys `39b46f9b-dec5-4c9a-9b23-9f38911fe7f7`
- Flow property / unit: Mass / kg
- Amount rule: measured net copper-alloy charge consumed after documented returns and internal recirculation
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg conforming reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material_mass`
- Sources: `eu-jrc-sf-bref-2024`

###### Cast-iron material (`cast_iron_input`)

Record cast-iron charge, purchased casting, or stock only when used; the exact product state and grade must be declared.

- Selected flow: Cast iron
- Flow property / unit: Mass / kg
- Amount rule: measured net cast-iron material consumed after documented returns and internal recirculation
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg conforming reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material_mass`
- Sources: `eu-jrc-sf-bref-2024`

###### Polypropylene moulding resin (`polypropylene_input`)

Record polypropylene resin only for a declared polymer-moulded pump-part route.

- Selected flow: Polypropylene resin
- Flow property / unit: Mass / kg
- Amount rule: measured net polypropylene resin issued to moulding after documented returns and clean regrind recirculation
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg conforming reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material_mass`
- Sources:

###### Purchased nitrile-rubber article (`nitrile_rubber_input`)

Record a vulcanized nitrile-rubber article only when it is incorporated into the separately supplied part.

- Selected flow: Nitrile Rubber `ad250520-feb6-401a-9159-1f25c0fd7980`
- Flow property / unit: Mass / kg
- Amount rule: measured mass of conforming nitrile-rubber articles incorporated, including attributable rejects
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg conforming reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material_mass`
- Sources:

###### Purchased electricity (`electricity_input`)

Record electrical energy consumed by included forming, machining, treatment, assembly, testing, and support operations.

- Selected flow: Electricity `890a70b7-b677-4e2a-8a1b-7d017e0a10ae`
- Flow property / unit: Net calorific value / MJ
- Amount rule: metered purchased electricity allocated to the declared product and reporting period, converted from kWh when needed
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg conforming reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_energy_records`
- Sources: `eu-jrc-stm-bref-2006`

###### Gaseous natural gas (`natural_gas_input`)

Record natural gas only when consumed on site for melting, heating, drying, or another included thermal operation.

- Selected flow: natural gas in the gaseous state `4f19ca0e-7b3b-11dd-ad8b-0800200c9a66`
- Flow property / unit: Volume / m3
- Amount rule: metered net natural-gas volume at documented reference conditions allocated to the declared product
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg conforming reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_energy_records`
- Sources: `eu-jrc-sf-bref-2024`, `eu-jrc-stm-bref-2006`

###### Process water (`process_water_input`)

Record process water that enters machining-fluid make-up, aqueous cleaning, surface treatment, rinsing, testing, or another included operation.

- Selected flow: Process Water `94a04f7e-2d5c-41f0-b182-d54a3b373a02`
- Flow property / unit: Mass / kg
- Amount rule: measured net process-water input after separately metered internal recirculation
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg conforming reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_water_chemical_records`
- Sources: `eu-jrc-stm-bref-2006`

###### Sodium hydroxide (`sodium_hydroxide_input`)

Record sodium hydroxide only when consumed in an included alkaline cleaning, treatment, regeneration, or wastewater-treatment step.

- Selected flow: Sodium hydroxide `e0abcced-0611-4c24-9290-5a2c5a0c4169`
- Flow property / unit: Mass / kg
- Amount rule: measured active sodium-hydroxide mass consumed, calculated from solution mass and verified concentration when supplied as solution
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg conforming reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_water_chemical_records`
- Sources: `eu-jrc-stm-bref-2006`

###### Cutting fluid (`cutting_fluid_input`)

Record fresh cutting-fluid make-up consumed by included cutting, boring, drilling, turning, grinding, or honing operations.

- Selected flow: Cutting Fluid `576d250f-4f36-4385-939d-0f03b8f95a10`
- Flow property / unit: Mass / kg
- Amount rule: measured fresh concentrate or straight-oil make-up entering the machining-fluid system; exclude internally recirculated fluid
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg conforming reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_water_chemical_records`
- Sources: `us-niosh-metal-working-fluids-2008`

###### Corrugated-board box (`corrugated_box_input`)

Record corrugated-board boxes only when they are physically supplied with the reference product at the manufacturing gate.

- Selected flow: corrugated board boxes `4f197bec-7b3b-11dd-ad8b-0800200c9a66`
- Flow property / unit: Mass / kg
- Amount rule: measured box mass attributable to the released reference product
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg conforming reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material_mass`
- Sources:

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Conforming pump or liquid-elevator part (`reference_product`)

Record only finished parts accepted to the declared specification; rejected parts are waste or rework and are excluded from the denominator.

- Selected flow: Parts for the goods of subclass 43220
- Flow property / unit: Mass / kg
- Amount rule: measured net mass of conforming parts released at the manufacturing gate
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: 1 kg conforming reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_product_mass`
- Sources: `un-cpc-3-0-structure-2025`

##### Waste flows

###### Steel scrap (`steel_scrap`)

Record segregated steel offcuts, chips, gates, risers, and rejected steel pieces transferred out of the foreground as scrap.

- Selected flow: Steel scrap `b973529f-a945-4cb9-9600-ecbcc745a4c6`
- Flow property / unit: Mass / kg
- Amount rule: measured net steel scrap leaving the foreground after documented internal recirculation
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg conforming reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste_mass`
- Sources: `us-niosh-metal-working-fluids-2008`

###### Stainless-steel scrap (`stainless_steel_scrap`)

Record stainless-steel offcuts, chips, and rejects separately when this stream leaves the foreground.

- Selected flow: Stainless-steel scrap
- Flow property / unit: Mass / kg
- Amount rule: measured net stainless-steel scrap leaving the foreground after documented internal recirculation
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg conforming reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste_mass`
- Sources: `us-niosh-metal-working-fluids-2008`

###### Aluminium scrap (`aluminium_scrap`)

Record aluminium-alloy offcuts, chips, gates, risers, and rejects transferred out of the foreground as scrap.

- Selected flow: Aluminium Scrap `96c5f842-ea53-419b-b1cd-c02c479efb45`
- Flow property / unit: Mass / kg
- Amount rule: measured net aluminium scrap leaving the foreground after documented internal recirculation
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg conforming reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste_mass`
- Sources: `eu-jrc-sf-bref-2024`, `us-niosh-metal-working-fluids-2008`

###### Copper scrap (`copper_scrap`)

Record copper-alloy offcuts, chips, gates, risers, and rejects transferred out of the foreground as scrap.

- Selected flow: Copper Scrap `4fbbb5f1-560a-4052-ba0c-652c5dfc282e`
- Flow property / unit: Mass / kg
- Amount rule: measured net copper scrap leaving the foreground after documented internal recirculation
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg conforming reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste_mass`
- Sources: `eu-jrc-sf-bref-2024`, `us-niosh-metal-working-fluids-2008`

###### Cast-iron scrap (`cast_iron_scrap`)

Record cast-iron gates, risers, chips, and rejects that leave the foreground rather than being internally remelted.

- Selected flow: Cast-iron scrap
- Flow property / unit: Mass / kg
- Amount rule: measured net cast-iron scrap leaving the foreground after documented internal recirculation
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg conforming reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste_mass`
- Sources: `eu-jrc-sf-bref-2024`, `us-niosh-metal-working-fluids-2008`

###### Polypropylene waste (`polypropylene_waste`)

Record contaminated runners, trimmings, and rejected polypropylene pieces that leave the foreground and are not internally reused.

- Selected flow: Polypropylene Wastes `88215d1b-e6b6-4ec7-af7f-83375e80637b`
- Flow property / unit: Mass / kg
- Amount rule: measured net polypropylene waste leaving the foreground after documented clean regrind recirculation
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg conforming reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste_mass`
- Sources:

###### Waste cutting oil (`waste_cutting_oil`)

Record spent straight cutting oil only when the machining route uses an oil-based fluid removed for treatment or disposal.

- Selected flow: Waste cutting oil `80d926e3-0f76-4a19-9b1e-ffec9deb1216`
- Flow property / unit: Mass / kg
- Amount rule: measured mass of spent cutting oil transferred out of the foreground, net of recovered fluid returned to the system
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg conforming reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste_mass`
- Sources: `us-niosh-metal-working-fluids-2008`

###### Spent water-miscible coolant (`spent_coolant`)

Record spent coolant only when a water-miscible machining-fluid route transfers the fluid out for treatment or disposal.

- Selected flow: Spent coolant `62b6a738-fb6a-4570-a95a-9255ec0dcb2b`
- Flow property / unit: Mass / kg
- Amount rule: measured mass of spent coolant transferred out of the foreground, net of recovered fluid returned to the system
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg conforming reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste_mass`
- Sources: `us-niosh-metal-working-fluids-2008`

###### Wastewater (`wastewater`)

Record aqueous effluent transferred to sewerage or treatment from included cleaning, rinsing, hydrostatic testing, surface treatment, or machining-fluid management.

- Selected flow: Wastewater `d2d44ce1-c0f4-461d-9413-f4b33e0d200f`
- Flow property / unit: Mass / kg
- Amount rule: measured net aqueous effluent leaving the foreground after internal reuse, with treatment state and destination declared
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg conforming reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_wastewater_records`
- Sources: `eu-jrc-stm-bref-2006`

###### Metal-bearing surface-treatment sludge (`treatment_sludge`)

Record dewatered metal-bearing sludge only when it is generated by included aqueous surface treatment or on-site effluent treatment.

- Selected flow: Metal-hydroxide surface-treatment sludge
- Flow property / unit: Mass / kg
- Amount rule: measured wet or dry sludge mass transferred out of the foreground, with dry-matter fraction and contained metals declared
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg conforming reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste_mass`
- Sources: `eu-jrc-stm-bref-2006`

##### Elementary flows

###### Direct fossil carbon dioxide to air (`fossil_co2`)

Record only direct fossil carbon dioxide emitted inside the foreground boundary; upstream electricity and purchased-material emissions remain in linked datasets.

- Selected flow: carbon dioxide (fossil) `08a91e70-3ddc-11dd-923d-0050c2490048`
- Flow property / unit: Mass / kg
- Amount rule: site-measured or site-calculated direct fossil carbon dioxide attributable to included on-site fuel combustion and thermal operations
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg conforming reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_direct_emissions`
- Sources:

## 7. Allocation and Co-product Handling

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `allocation_subdivision` | Shared manufacturing | First subdivide by separately metered line, machine, batch, operation, or product family so that allocation is avoided where technically possible. | `eu-environmental-footprint-2021` |
| `allocation_joint_process` | Residual shared inputs and emissions | When subdivision is not possible, use a documented physical driver that reflects causality, such as machine time, treatment area, furnace charge mass, or test duration; mass allocation is permitted only for materially and technologically comparable parts. | `eu-environmental-footprint-2021` |
| `allocation_scrap` | Scrap and recyclable outputs | Record scrap as an output at the foreground gate without an avoided-burden credit inside this dataset; disclose sale, internal recirculation, treatment destination, and any downstream recycling method applied by the study. | `eu-environmental-footprint-2021` |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_material_mass` | `pump_part_manufacturing` | Purchased materials, components, and boxes | ERP issue and return records; weigh tickets; supplier declarations | material identity; grade; product form; gross issue; return; internal recirculation; recycled content; supplier; batch | Reconcile issued and returned quantities to production orders and verify representative masses by calibrated scale | kg | Per batch, aggregated monthly | At least 12 representative months or the full shorter campaign | All lines producing the declared part | Sum net consumed mass and divide by conforming output mass; keep materials separate | Purchase records, batch traceability, scale calibration, reconciliation log |
| `cp_energy_records` | `pump_part_manufacturing` | Electricity and natural gas | Utility meters, submeter logs, and invoices | meter opening and closing; unit; reference conditions; line allocation driver; reporting period | Prefer process submeters; otherwise allocate residual shared use with the disclosed causal driver | MJ; m3 | Monthly or finer | Same period as production output | All included operations and support loads | Subtract exports and excluded loads, convert units, allocate, and divide by conforming output mass | Meter calibration, invoice reconciliation, allocation worksheet |
| `cp_water_chemical_records` | `pump_part_manufacturing` | Process water, sodium hydroxide, and cutting fluid | Meters, tank levels, batch sheets, purchase and inventory records | input mass or volume; concentration; opening stock; purchases; closing stock; returns; internal recirculation | Meter water and reconcile chemical make-up by material balance; retain concentration tests | kg | Per batch or monthly | Same period as production output | All applicable aqueous and machining operations | Calculate net make-up, convert solution to active mass where specified, and divide by conforming output mass | Meter calibration, inventory reconciliation, concentration test |
| `cp_product_mass` | `pump_part_manufacturing` | Conforming reference product | Production release, inspection, and calibrated weighing records | part number; accepted count; individual or batch net mass; reject count; rework; release date | Weigh representative parts or accepted batches and reconcile with final inspection releases | kg | Per batch | Same period as inventory inputs | All conforming parts in the declared dataset | Sum net accepted mass; exclude packaging, rejects, and work in process | Scale calibration, inspection release, production reconciliation |
| `cp_waste_mass` | `pump_part_manufacturing` | Material scrap, spent machining fluid, and treatment sludge | Waste containers, weigh tickets, manifests, and internal return logs | waste identity; origin operation; gross and tare mass; moisture or dry matter; internal recovery; destination | Weigh each segregated stream at transfer and reconcile internally recirculated material separately | kg | Per shipment and monthly | Same period as production output | All included operations | Sum net mass leaving the foreground by stream and divide by conforming output mass | Weigh tickets, manifests, destination records, mass-balance reconciliation |
| `cp_wastewater_records` | `pump_part_manufacturing` | Aqueous effluent | Discharge meter, batch dump, and treatment logs | volume or mass; density; treatment state; destination; sampling result; reporting period | Meter continuous discharge or calculate documented batch dumps; subtract verified internal reuse | kg | Per discharge or monthly | Same period as production output | All included aqueous operations | Convert with documented density where required and divide net discharge by conforming output mass | Meter calibration, batch logs, treatment and discharge records |
| `cp_direct_emissions` | `pump_part_manufacturing` | Direct fossil carbon dioxide | Fuel meters, supplier composition, stack monitoring, and site emissions inventory | fuel amount; carbon content or emission factor; oxidation assumption; monitored CO2; allocation driver | Prefer calibrated direct monitoring; otherwise calculate from site-specific fuel records and retain the calculation basis | kg | Monthly or finer | Same period as production output | On-site combustion and thermal operations only | Exclude upstream emissions, allocate direct totals, and divide by conforming output mass | Meter calibration, supplier certificate, calculation worksheet, monitoring QA |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_reference_normalization` | Every inventory row | normalized amount = reporting-period row amount / reporting-period net conforming product mass | collected row amount; net conforming product mass | amount per 1 kg reference product |  |
| `calc_electricity_mj` | Electricity source records in kWh | electricity MJ = metered kWh × 3.6 | metered electricity in kWh | electricity in MJ |  |
| `calc_active_naoh` | Sodium-hydroxide solution | active NaOH mass = solution mass × measured NaOH mass fraction | solution mass; concentration test | kg active sodium hydroxide |  |
| `calc_material_balance` | Each declared material family | opening stock + purchases - closing stock - documented returns = product content + outbound scrap + contained waste + other declared loss | inventory, purchase, return, product, scrap, sludge, and loss records | reconciled material-family balance |  |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_identity` | Reference product | Retain the part number, function, drawing or specification revision, material grade, route, and acceptance state. | Approved drawing, bill of materials, route card, inspection release |
| `dq_temporal` | All foreground rows | Use the same representative reporting period for inputs, outputs, inventory changes, and allocation drivers. | Dated meter, production, inventory, and waste records |
| `dq_completeness` | All included operations | Reconcile meters, purchases, inventory changes, product, scrap, wastewater, sludge, and direct emissions; document every excluded operation and estimated residual. | Reconciliation and gap log |
| `dq_geography_technology` | Linked upstream datasets | Match supplier geography, material form and grade, electricity mix, gas conditions, water supply, treatment route, and technology as closely as available. | Supplier and dataset metadata comparison |
| `dq_measurement` | Measured and calculated values | Retain calibration status, raw unit, conversion, concentration, density, allocation driver, formula, and responsible reviewer. | Calibration certificates and calculation workbook |

## 9. Validation Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `validate_identity` | Reference product | Fail the data package if the output is a complete pump, a non-pump part, a generic commodity without pump-part identity, or lacks the required part and specification qualifiers. | `un-cpc-3-0-structure-2025` |
| `validate_mass_balance` | Material-family records | Require a documented material balance for every included material family and investigate unexplained imbalance before release. |  |
| `validate_route` | Process boundary | Require every applicable forming, moulding, machining, treatment, testing, outsourced, and packaging operation to be included or explicitly disclosed as outside the foreground with a linked dataset. | `eu-jrc-sf-bref-2024`, `eu-jrc-stm-bref-2006`, `us-niosh-metal-working-fluids-2008` |
| `validate_uuid` | Flow identities | Reject a UUID-bearing row when the directly read name, flow type, classification, property, or unit group conflicts with the selected exchange; unresolved rows remain explicit review items. |  |
| `validate_data_quality` | Dataset release | Require temporal alignment, unit conversions, allocation drivers, upstream representativeness, and completeness reconciliation to be documented. | `eu-environmental-footprint-2021` |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | Foreground manufacturing dataset for a declared separately supplied liquid-pump or liquid-elevator part |
| downstream_use | secondary_dataset; background_dataset |
| allowed_use | Product-specific cradle-to-gate or life-cycle models when the part identity, material, route, geography, technology, and time period are compatible |
| excluded_use | Complete-pump production without additional assembly data; use-phase performance; unrelated machinery parts; comparative claims across unlike functions or specifications without further review |
| required_metadata | PCR id; part name and function; associated equipment type; drawing or specification; material and grade; net mass; manufacturing and outsourced routes; factory and geography; reporting period; allocation; packaging; unresolved identities |
| required_quality_disclosure | Foreground coverage; meter and mass-balance reconciliation; temporal coverage; allocation drivers; upstream dataset matches; estimates; exclusions; wastewater and waste destinations; direct-emission method |
| update_trigger | Change in part design, material or grade, mass by more than the study threshold, forming or machining route, treatment or coating, supplier mix, energy system, site, allocation driver, packaging, or unresolved flow identity |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `un-cpc-3-0-structure-2025` | official_guidance | United Nations Statistics Division, CPC Version 3.0 Structure, 30 June 2025, https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Structure_30Jun2025.csv (retrieved 2026-09-05) | Official CPC 43252 identity and its relationship to subclass 43220 |
| `un-cpc-1-1-chinese-2002` | official_guidance | United Nations Statistics Division, Central Product Classification Version 1.1, Chinese edition, https://unstats.un.org/unsd/publication/SeriesM/M_77ver1_1c.pdf (retrieved 2026-09-05) | Professional Chinese title and terminology verification for unchanged code 43252 and subclass 43220 |
| `eu-jrc-sf-bref-2024` | official_guidance | European Commission Joint Research Centre, Best Available Techniques Reference Document for the Smitheries and Foundries Industry, JRC140209, DOI 10.2760/4805267, 2024, https://publications.jrc.ec.europa.eu/repository/handle/JRC140209 (retrieved 2026-09-05) | Conditional casting or forging route, material, energy, scrap, and direct-emission collection scope |
| `eu-jrc-stm-bref-2006` | official_guidance | European Commission, Reference Document on Best Available Techniques for the Surface Treatment of Metals and Plastics, August 2006, https://bureau-industrial-transformation.jrc.ec.europa.eu/sites/default/files/2019-11/stm_bref_0806.pdf (retrieved 2026-09-05) | Conditional aqueous surface-treatment process, electricity, water, chemicals, wastewater, sludge, and route disclosure |
| `us-niosh-metal-working-fluids-2008` | official_guidance | National Institute for Occupational Safety and Health, Preventing Health Hazards from Metal Working Fluids, 2008, https://www.cdc.gov/niosh/bulletin/2008/metal-working-fluids.html (retrieved 2026-09-05) | Machining operations, cutting-fluid input, chip removal, straight oils, water-miscible fluids, and spent-fluid differentiation |
| `eu-environmental-footprint-2021` | official_guidance | European Commission Recommendation (EU) 2021/2279 on the use of the Environmental Footprint methods, 15 December 2021, https://eur-lex.europa.eu/eli/reco/2021/2279/oj (retrieved 2026-09-05) | Functional unit, reference flow, system boundary, inventory completeness, multifunctionality, data collection, and data quality rules |
