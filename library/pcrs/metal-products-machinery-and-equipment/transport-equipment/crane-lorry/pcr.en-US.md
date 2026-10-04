---
pcr_id: pcr.metal-products-machinery-and-equipment.transport-equipment.crane-lorry
language: en-US
status: candidate
sync_with: pcr.zh-CN.md
---

# Manufacture of complete diesel telescopic crane lorries

## 1. Scope and Applicability

Manufacture of new complete dedicated diesel road-going truck cranes with hydraulic telescopic steel booms, carrier and upper crane delivered as one configured vehicle. This narrower CPC49115 boundary excludes goods lorries carrying knuckle-boom loader cranes, standalone lifting systems, non-road works cranes, all-terrain/rough-terrain/crawler and pick-and-carry cranes, electric/hybrid traction routes, refurbishment and separately sold components. Existing material crane/hoist PCRs cover lifting equipment and explicitly exclude complete crane lorries; this record owns vehicle integration and complete-vehicle mass, not a second standalone crane PCR. Actual carrier-PTO and separate non-propulsion upper diesel-engine variants are distinguished; do not combine them by default. Road travel, lifting services, customer working hours/load cycles, maintenance, lifetime and end of life are outside. Grove2020 and Liebherr document code04-2023 establish historical model-specific architecture/configuration examples only. No current regulatory conformity, standard payload, duty, fuel use, factory quantities, machine mass or lifetime is inferred.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.metal-products-machinery-and-equipment.transport-equipment.crane-lorry |
| classification_refs | CPC 3.0 49115; narrower candidate scope; no accepted mapping asserted |
| covered_products | New complete diesel telescopic dedicated road truck cranes |
| excluded_products | Cargo loader-crane lorries; standalone cranes/components; non-road/all-terrain/rough-terrain/crawler cranes; other traction routes; use/service |
| representative_product | One engine-fitted road carrier integrated with the declared telescopic upper crane, outriggers, hoist/rope/hook, controls and actual counterweight configuration |
| production_route | Receipt and make-or-buy control; conditional steel fabrication/finishing; upper/crane-carrier integration and actual fills; factory checks/tests/acceptance; dispatch protection |
| market_state | Accepted complete net delivered vehicle at declared factory gate |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Manufacture one declared complete diesel telescopic road-crane configuration |
| How much | 1 kg accepted net complete machine; one accepted complete machine is represented by physically measured M kg |
| How well | Meet the actual OEM drawing/BOM and inspection plan for structural assembly, hydraulics, telescope/luff/slew/hoist functions, limiter/interlocks, carrier brakes/steering and declared load checks as applicable. Retain actual criteria and results; no universal test load, overload ratio, tolerance or acceptance threshold |
| How long or cycle | One manufacturing delivery; no road-mile or lifting-cycle/lifetime unit |
| reference_flow_link | `finished_machine` |

| Field | Value |
| --- | --- |
| Reference amount | 1 |
| Reference product flow | Crane lorries `3d73143c-e111-4f03-905c-82f7dcad0a1f` |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | Model/serial/drawing/BOM revision; road carrier chassis completeness and diesel drive; PTO/separate upper engine; boom/telescope, outrigger, slew/hoist/rope/hook, cab/control/limiter design; installed/stowed counterweights and included jib; bought internals/make-or-buy; actual fluid formulations/fills/residual fuel; physically measured positive M and scale/acceptance record; actual test criteria/results; site/period/start/end gates; people/test-load/loose-spare/transport-protection exclusions |

Declare all qualifiers in dataset metadata or equivalent process/flow notes. One complete machine is the identified carrier plus integrated upper crane; rated lift capacity, road gross/axle limits and a detached lifting body are not this net reference.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| `reference_mass` | reference product | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | M = accepted net mass of one complete machine of the same configuration in kg; collect using cp_mass. |
| `delivery_configuration` | complete-machine delivery | Mass | kg | Include actual installed/stowed and OEM-accepted delivered crane parts, working fluids and measured residual fuel. Exclude people, test weights, external loading rigs, transport protection and loose optional ballast/spares not in the accepted vehicle. Record separate-package exclusions and actual completeness. If dispatch dismantles an included part, preserve the accepted complete-vehicle weighing plus traceable parts without substituting shipping weights or invented nominal masses. |
| `electrical_energy` | electricity_fabrication; electricity_finishing; electricity_integration; electricity_acceptance | Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` | MJ | Retain metered electrical kWh and convert1 kWh =3.6 MJ. Record source/voltage and actual stage load/time; rated installed power does not prove factory consumption. |
| `component_count` | truck_tyre; upper_diesel_engine | Number of items `01846770-4cfe-4a25-8ad9-919d8d378345` | Item(s) | Retain public Number of items and actual installed count of each single design. Reconcile its physical BOM mass using actual lot-specific measured kg/item and installed count; this check does not alter the exchange property. Exclude items inside bought chassis/boom/engine assemblies. |
| `hydraulic_volume` | hydraulic_oil | Volume `93a60a56-a3c8-22da-a746-0800200c9a66` | m3 | Retain public Volume and metered net hydraulic-fluid receipts/fills/returns. Convert1 L =0.001 m3. For delivered physical mass reconciliation only, use measured density at recorded temperature and m = rho times V; no default density or tank capacity. |
| `water_resource_volume` | groundwater | Volume `93a60a56-a3c8-22da-a746-0800200c9a66` | m3 | Meter actual renewable freshwater groundwater with aquifer/site evidence. It is not purchased tap water or exported wastewater. |
| `material_mass` | other stock/components/fluids/wastes/emissions | Mass | kg | Weigh each defined substance/component/waste or measure one emitted species. Volume-to-mass conversion requires actual density and temperature/pressure evidence; mixtures are not repeated constituent receipts. NO, NO2 and N2O cannot be interchanged. |

## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Specified engine-fitted carrier chassis, finished crane components, local stock and consumables received at integrating factory |
| starting_condition_role | Foreground receipts; supplier manufacturing and incoming transport separately linked |
| product_classification_scope | Dedicated diesel telescopic road-crane subset of CPC49115 |
| recursive_input_rule | Bought carrier/boom/winch assemblies replace included parts, raw stock and supplier/local operations; local WIP transfers are not new external receipts |
| upstream_dataset_requirement | Match actual chassis completeness, propulsion versus upper-engine role, steel state/design, oil composition/volume basis, component count, electricity voltage/geography and waste receiver gate |
| disclosure | Foreground complete-vehicle manufacturing module only. Declare make-or-buy/outsourcing and missing upstream/transport/receiver links; do not claim complete cradle-to-gate coverage |

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| `boundary_fabrication` | fabrication; finishing | Include only actual local cutting/forming/machining and welding of steel structures, inspection and declared finishing. Bought finished boom/frame/outrigger excludes its local stock and fabrication; initial cards require expansion for actual machining fluids, fittings, sheaves, slewing drive, wiring, carrier parts or outsourced services. Powder coating is one conditional example; actual wet paint/solvent, blasting, refrigerant circuits, hydraulic flushing media, heat treatment and other utility routes must be separately expanded when present. No necessary process is inferred solely from brochure architecture. | grove-tms800e-2020; liebherr-ltf1060-2023 |
| `boundary_integration` | integration | Include receipt inspection, supplier/chassis mounting interface checks, actual upper/frame/boom/slew/outrigger/hoist/control installation and adjustments, hydraulic connection/fill, brakes/steering and complete-machine integration. Record one actual supply boundary for every item; self-made carrier or missing intermediate frame, telescope cylinders, counterweight mount, cable harness or limiter sensor requires actual atomic expansion, not a generic materials row. | liebherr-ltf1060-2023 |
| `boundary_tests` | acceptance | Acceptance is required; physical load/road/hydraulic tests and engine runs are included only as actually performed under the OEM plan. Record loads, radii, configurations, duration, test fuel/energy/fluids, emissions if monitored and reusable test fixtures. Test weights are factory equipment, not consumed crane mass; replacements attributable across served orders use measured records. No mandated overload percentage, cycle count or emission is invented. Customer travel/lifting after gate is outside. |  |
| `boundary_emissions` | finishing; acceptance | Monitor only actual direct releases. Separate post-control air species from collected waste and purchased fluids, and groundwater resources from contained wastewater. Fossil CO2/CO require verified fuel carbon; NO/NO2 require measured speciation. Other monitored species/air submedia or direct water/soil discharges require separate matching atomic cards and evidence. No zero-emission claim follows from an absent card. |  |

## 6. Process Inventory Structure

### Process Map

| process_id | Process name | Inclusion | Inclusion condition | Role | Quantitative reference |
| --- | --- | --- | --- | --- | --- |
| `fabrication` | Declared local steel-structure fabrication | conditional | Actual local cutting, forming, machining and qualified welding | Foreground stage; WIP remains internal | per 1 kg reference flow; collected per one accepted finished machine |
| `finishing` | Declared local surface finishing | conditional | Actual cleaning, grinding and declared powder-coating route | Foreground stage; WIP remains internal | per 1 kg reference flow; collected per one accepted finished machine |
| `integration` | Carrier and upper-crane integration | required | One complete declared road-crane configuration | Foreground stage; WIP remains internal | per 1 kg reference flow; collected per one accepted finished machine |
| `acceptance` | Factory checks and complete-vehicle acceptance | required | Actual OEM inspection/test plan; physical load/road tests only as performed | Foreground stage; WIP remains internal | per 1 kg reference flow; collected per one accepted finished machine |
| `packout` | Dispatch protection | conditional | Only actual supplied protection | Foreground stage; WIP remains internal | per 1 kg reference flow; collected per one accepted finished machine |

### Process: Declared local steel-structure fabrication (`fabrication`)

#### Inputs

##### Product flows

###### Certified hot-rolled high-strength low-alloy steel plate (`hsla_plate`)

Only the actual certificate-declared single grade, thickness and delivery state used in a local frame/boom/outrigger route. Weigh net issues and returns. Do not prescribe Q345/Q355, a thickness or steel yield from a brochure. Bought finished structures replace their stock and local fabrication.

- Selected flow: Certified hot-rolled high-strength low-alloy steel plate
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_material.
- Value mode: calculated_value
- Specificity: product_specific
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: reference_flow
- Evidence kind: calculated_from_collection
- Collection protocol: `cp_material`
- Sources: grove-tms800e-2020; liebherr-ltf1060-2023

###### Solid ER70S-6 steel welding wire (`welding_wire`)

Only if the actual qualified welding procedure specifies this single solid wire. Weigh net wire consumption with spool returns and deposits/spatter reconciliation. Other alloys, flux-cored wire and procedures need their own card; no universal wire-to-plate factor.

- Selected flow: Solid ER70S-6 steel welding wire
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_material.
- Value mode: calculated_value
- Specificity: product_specific
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: reference_flow
- Evidence kind: calculated_from_collection
- Collection protocol: `cp_material`
- Sources:

###### Pure gaseous carbon-dioxide welding shielding gas (`shielding_co2`)

Only actual pure CO2 shielding under the recorded welding procedure. Weigh net cylinder contents consumed or use metered gas with evidenced density and reference conditions. An argon/CO2 mixture is a different formulation. No fixed gas dose.

- Selected flow: Pure gaseous carbon-dioxide welding shielding gas
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_material.
- Value mode: calculated_value
- Specificity: product_specific
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: reference_flow
- Evidence kind: calculated_from_collection
- Collection protocol: `cp_material`
- Sources:

###### Low-voltage grid electricity (`electricity_fabrication`)

Meter actual stage electricity including attributable rework/idle. Public identity is user-side grid-average AC below 1 kV; other voltage or self-generation requires a separate matching exchange. Bought operations are not also local energy.

- Selected flow: Alternating current `50657322-939c-4829-a87b-47c093bfa6a7`
- Flow property / unit: Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_energy.
- Value mode: calculated_value
- Specificity: product_specific
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: reference_flow
- Evidence kind: calculated_from_collection
- Collection protocol: `cp_energy`
- Sources:

#### Outputs

##### Waste flows

###### Untreated clean HSLA steel offcut (`steel_offcut`)

Only actual segregated export of this single certified alloy and clean state. Weigh receiver-bound mass and record oil/water contamination and separation. Internal reuse is not an exported waste; no automatic avoided-steel credit. Oil-contaminated chips need another card.

- Selected flow: Post-industrial steel scrap `c143745d-be4f-4d8f-b403-2dcbfe685349`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_waste.
- Value mode: calculated_value
- Specificity: product_specific
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: reference_flow
- Evidence kind: calculated_from_collection
- Collection protocol: `cp_waste`
- Sources:

###### Clean HSLA steel machining chips (`steel_chip`)

Only actual segregated export of this single certified alloy and clean state. Weigh receiver-bound mass and record oil/water contamination and separation. Internal reuse is not an exported waste; no automatic avoided-steel credit. Oil-contaminated chips need another card.

- Selected flow: Steel scrap, machining chips `7f46756b-6f66-46a7-bbcb-c04727d9d19e`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_waste.
- Value mode: calculated_value
- Specificity: product_specific
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: reference_flow
- Evidence kind: calculated_from_collection
- Collection protocol: `cp_waste`
- Sources:

###### Separated HSLA-steel welding spatter (`weld_spatter`)

Only actual collected spatter from this specified welding route. Weigh exported metal and record alloy/oxide and oil contamination; uncollected airborne matter belongs to emission monitoring.

- Selected flow: Separated HSLA-steel welding spatter
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_waste.
- Value mode: calculated_value
- Specificity: product_specific
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: reference_flow
- Evidence kind: calculated_from_collection
- Collection protocol: `cp_waste`
- Sources:

### Process: Declared local surface finishing (`finishing`)

#### Inputs

##### Product flows

###### Low-voltage grid electricity (`electricity_finishing`)

Meter actual stage electricity including attributable rework/idle. Public identity is user-side grid-average AC below 1 kV; other voltage or self-generation requires a separate matching exchange. Bought operations are not also local energy.

- Selected flow: Alternating current `50657322-939c-4829-a87b-47c093bfa6a7`
- Flow property / unit: Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_energy.
- Value mode: calculated_value
- Specificity: product_specific
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: reference_flow
- Evidence kind: calculated_from_collection
- Collection protocol: `cp_energy`
- Sources:

###### One polyester powder-coating formulation (`polyester_powder`)

Only an actual single supplier-certified polyester powder formulation applied locally. Weigh net fresh powder and returned/recovered powder; record cured coating, rejects and capture. The public powder-coating Mass identity is narrowed; its description of finishing does not establish a treatment service or consumption quantity. Bought coated structures replace local coating.

- Selected flow: Powder Coating `6e3010f9-fbd3-48f6-95fc-c1b38d2800d2`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_material.
- Value mode: calculated_value
- Specificity: product_specific
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: reference_flow
- Evidence kind: calculated_from_collection
- Collection protocol: `cp_material`
- Sources:

###### Resin-bonded aluminium-oxide abrasive disc (`abrasive_disc`)

Only one actual disc design used for local steel grinding. Weigh attributable replacements and remaining stock; record grain, binder and dimensions. Do not consume a whole reusable disc per vehicle by assumption.

- Selected flow: Resin-bonded aluminium-oxide abrasive disc
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_material.
- Value mode: calculated_value
- Specificity: product_specific
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: reference_flow
- Evidence kind: calculated_from_collection
- Collection protocol: `cp_material`
- Sources:

###### Supplied drinking-quality cleaning water (`water_finishing`)

Only actual drinking-quality tap water make-up for an aqueous cleaning route. Weigh water or convert meter volume using actual temperature/density. Dilution constituents of purchased mixtures and internal circulation are not additional purchases.

- Selected flow: Tap water `d1e0e36c-07f0-4a75-bdcb-efb5d9e2ac36`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_material.
- Value mode: calculated_value
- Specificity: product_specific
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: reference_flow
- Evidence kind: calculated_from_collection
- Collection protocol: `cp_material`
- Sources:

##### Elementary flows

###### Abstracted renewable freshwater groundwater (`groundwater`)

Only actual factory-well abstraction confirmed as renewable freshwater for this aquifer/site/country. Meter m3 and expand pumping/treatment. The same water is not also a tap-water input.

- Selected flow: ground water `4f462198-40cd-4184-8733-86648a20dc3f`
- Flow property / unit: Volume `93a60a56-a3c8-22da-a746-0800200c9a66` / m3
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_water_resource.
- Value mode: calculated_value
- Specificity: product_specific
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: reference_flow
- Evidence kind: calculated_from_collection
- Collection protocol: `cp_water_resource`
- Sources:

#### Outputs

##### Waste flows

###### Spent resin-bonded aluminium-oxide abrasive disc (`spent_disc`)

Only the actual separately collected export of this one specified waste. Weigh receiver-bound mass and record solids/oil/water content, wet/dry basis and receiver treatment. Recovered powder/water is internal reuse, not export. No direct water discharge is inferred.

- Selected flow: Waste polishing media `cdb1838e-d3ec-41e1-87ee-627b9ce95e88`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_waste.
- Value mode: calculated_value
- Specificity: product_specific
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: reference_flow
- Evidence kind: calculated_from_collection
- Collection protocol: `cp_waste`
- Sources:

###### Captured dry HSLA-steel grinding dust (`captured_dust`)

Only the actual separately collected export of this one specified waste. Weigh receiver-bound mass and record solids/oil/water content, wet/dry basis and receiver treatment. Recovered powder/water is internal reuse, not export. No direct water discharge is inferred.

- Selected flow: Captured dry HSLA-steel grinding dust
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_waste.
- Value mode: calculated_value
- Specificity: product_specific
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: reference_flow
- Evidence kind: calculated_from_collection
- Collection protocol: `cp_waste`
- Sources:

###### Collected waste polyester powder overspray (`powder_waste`)

Only the actual separately collected export of this one specified waste. Weigh receiver-bound mass and record solids/oil/water content, wet/dry basis and receiver treatment. Recovered powder/water is internal reuse, not export. No direct water discharge is inferred.

- Selected flow: Collected waste polyester powder overspray
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_waste.
- Value mode: calculated_value
- Specificity: product_specific
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: reference_flow
- Evidence kind: calculated_from_collection
- Collection protocol: `cp_waste`
- Sources:

###### Contained spent aqueous steel-cleaning solution (`cleaning_water`)

Only the actual separately collected export of this one specified waste. Weigh receiver-bound mass and record solids/oil/water content, wet/dry basis and receiver treatment. Recovered powder/water is internal reuse, not export. No direct water discharge is inferred.

- Selected flow: Contained spent aqueous steel-cleaning solution
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_waste.
- Value mode: calculated_value
- Specificity: product_specific
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: reference_flow
- Evidence kind: calculated_from_collection
- Collection protocol: `cp_waste`
- Sources:

##### Elementary flows

###### Air particulate, particle size unspecified (`air_dust`)

Only measured actual post-control release from the recorded steel-finishing operation, with unspecified particle size and unspecified immediate air submedium. Pair concentration and exhaust volume on one sampling basis. Captured dust is a waste; a measured specific size/submedium requires another identity.

- Selected flow: Particulate matter, particle size unspecified `0ce3dedb-caca-407b-a856-a90470eb8ec0`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_emission.
- Value mode: calculated_value
- Specificity: product_specific
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: reference_flow
- Evidence kind: calculated_from_collection
- Collection protocol: `cp_emission`
- Sources:

### Process: Carrier and upper-crane integration (`integration`)

#### Inputs

##### Product flows

###### Low-voltage grid electricity (`electricity_integration`)

Meter actual stage electricity including attributable rework/idle. Public identity is user-side grid-average AC below 1 kV; other voltage or self-generation requires a separate matching exchange. Bought operations are not also local energy.

- Selected flow: Alternating current `50657322-939c-4829-a87b-47c093bfa6a7`
- Flow property / unit: Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_energy.
- Value mode: calculated_value
- Specificity: product_specific
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: reference_flow
- Evidence kind: calculated_from_collection
- Collection protocol: `cp_energy`
- Sources:

###### Supplied engine-fitted road-crane carrier chassis (`engine_fitted_chassis`)

Actual supplied chassis fitted with the carrier diesel engine, within the public intermediate chassis identity. Weigh delivered net chassis; document cab, driveline, axles, brakes, wheels, battery and prefilled fluids actually included. Do not add included components again. A supplied customer chassis has a real inventory burden, not a zero-cost/zero-impact input.

- Selected flow: Truck chassis `5e1faed0-6422-427c-a311-4e6e13d5f580`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_parts.
- Value mode: calculated_value
- Specificity: product_specific
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: reference_flow
- Evidence kind: calculated_from_collection
- Collection protocol: `cp_parts`
- Sources: liebherr-ltf1060-2023

###### Finished steel telescopic crane boom assembly (`boom_assembly`)

Only one actual separately purchased design recorded in the complete-vehicle BOM. Weigh installed net component mass and record supplier completeness, interfaces and acceptance. Exclude anything included within a purchased chassis, boom or hydraulic assembly. For a locally fabricated equivalent replace receipt with actual stock, consumables and fabrication; missing internal parts must be expanded before full coverage.

- Selected flow: Finished steel telescopic crane boom assembly
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_parts.
- Value mode: calculated_value
- Specificity: product_specific
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: reference_flow
- Evidence kind: calculated_from_collection
- Collection protocol: `cp_parts`
- Sources: grove-tms800e-2020; liebherr-ltf1060-2023

###### Finished steel telescopic outrigger beam (`outrigger_beam`)

Only one actual separately purchased design recorded in the complete-vehicle BOM. Weigh installed net component mass and record supplier completeness, interfaces and acceptance. Exclude anything included within a purchased chassis, boom or hydraulic assembly. For a locally fabricated equivalent replace receipt with actual stock, consumables and fabrication; missing internal parts must be expanded before full coverage.

- Selected flow: Finished steel telescopic outrigger beam
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_parts.
- Value mode: calculated_value
- Specificity: product_specific
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: reference_flow
- Evidence kind: calculated_from_collection
- Collection protocol: `cp_parts`
- Sources: grove-tms800e-2020; liebherr-ltf1060-2023

###### Finished steel crane slew-ring bearing (`slew_bearing`)

Only one actual separately purchased design recorded in the complete-vehicle BOM. Weigh installed net component mass and record supplier completeness, interfaces and acceptance. Exclude anything included within a purchased chassis, boom or hydraulic assembly. For a locally fabricated equivalent replace receipt with actual stock, consumables and fabrication; missing internal parts must be expanded before full coverage.

- Selected flow: Finished steel crane slew-ring bearing
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_parts.
- Value mode: calculated_value
- Specificity: product_specific
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: reference_flow
- Evidence kind: calculated_from_collection
- Collection protocol: `cp_parts`
- Sources: liebherr-ltf1060-2023

###### Finished steel main-hoist hook block (`hook_block`)

Only one actual separately purchased design recorded in the complete-vehicle BOM. Weigh installed net component mass and record supplier completeness, interfaces and acceptance. Exclude anything included within a purchased chassis, boom or hydraulic assembly. For a locally fabricated equivalent replace receipt with actual stock, consumables and fabrication; missing internal parts must be expanded before full coverage.

- Selected flow: Finished steel main-hoist hook block
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_parts.
- Value mode: calculated_value
- Specificity: product_specific
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: reference_flow
- Evidence kind: calculated_from_collection
- Collection protocol: `cp_parts`
- Sources:

###### Finished steel main-hoist wire rope (`steel_rope`)

Only one actual separately purchased design recorded in the complete-vehicle BOM. Weigh installed net component mass and record supplier completeness, interfaces and acceptance. Exclude anything included within a purchased chassis, boom or hydraulic assembly. For a locally fabricated equivalent replace receipt with actual stock, consumables and fabrication; missing internal parts must be expanded before full coverage.

- Selected flow: Finished steel main-hoist wire rope
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_parts.
- Value mode: calculated_value
- Specificity: product_specific
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: reference_flow
- Evidence kind: calculated_from_collection
- Collection protocol: `cp_parts`
- Sources:

###### Finished cast-iron crane counterweight block (`counterweight`)

Only one actual separately purchased design recorded in the complete-vehicle BOM. Weigh installed net component mass and record supplier completeness, interfaces and acceptance. Exclude anything included within a purchased chassis, boom or hydraulic assembly. For a locally fabricated equivalent replace receipt with actual stock, consumables and fabrication; missing internal parts must be expanded before full coverage.

- Selected flow: Finished cast-iron crane counterweight block
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_parts.
- Value mode: calculated_value
- Specificity: product_specific
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: reference_flow
- Evidence kind: calculated_from_collection
- Collection protocol: `cp_parts`
- Sources: grove-tms800e-2020; liebherr-ltf1060-2023

###### Finished glazed steel crane-operator cab (`operator_cab`)

Only one actual separately purchased design recorded in the complete-vehicle BOM. Weigh installed net component mass and record supplier completeness, interfaces and acceptance. Exclude anything included within a purchased chassis, boom or hydraulic assembly. For a locally fabricated equivalent replace receipt with actual stock, consumables and fabrication; missing internal parts must be expanded before full coverage.

- Selected flow: Finished glazed steel crane-operator cab
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_parts.
- Value mode: calculated_value
- Specificity: product_specific
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: reference_flow
- Evidence kind: calculated_from_collection
- Collection protocol: `cp_parts`
- Sources: grove-tms800e-2020; liebherr-ltf1060-2023

###### Finished crane load-moment limiter control panel (`moment_limiter`)

Only one actual separately purchased design recorded in the complete-vehicle BOM. Weigh installed net component mass and record supplier completeness, interfaces and acceptance. Exclude anything included within a purchased chassis, boom or hydraulic assembly. For a locally fabricated equivalent replace receipt with actual stock, consumables and fabrication; missing internal parts must be expanded before full coverage.

- Selected flow: Finished crane load-moment limiter control panel
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_parts.
- Value mode: calculated_value
- Specificity: product_specific
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: reference_flow
- Evidence kind: calculated_from_collection
- Collection protocol: `cp_parts`
- Sources: liebherr-ltf1060-2023

###### Finished steel hydraulic directional-control valve (`direction_valve`)

Only one actual separately purchased design recorded in the complete-vehicle BOM. Weigh installed net component mass and record supplier completeness, interfaces and acceptance. Exclude anything included within a purchased chassis, boom or hydraulic assembly. For a locally fabricated equivalent replace receipt with actual stock, consumables and fabrication; missing internal parts must be expanded before full coverage.

- Selected flow: Finished steel hydraulic directional-control valve
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_parts.
- Value mode: calculated_value
- Specificity: product_specific
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: reference_flow
- Evidence kind: calculated_from_collection
- Collection protocol: `cp_parts`
- Sources:

###### Finished double-acting hydraulic boom-luff cylinder (`luff_cylinder`)

Only one actual separately received design/specification, narrowing the broader public component category. Weigh installed mass and record grade, coating, dimensions and included internals. Hydraulic hose is the specified hose itself; separately supplied end fittings are separate cards. Winch includes only supplier-declared motor, gearing and brake. Boom/chassis inclusions are not counted twice; other cylinder/pump/fastener designs require separate cards.

- Selected flow: Linear acting (cylinders) hydraulic and pneumatic power engines and motors `aea61250-788d-4a2b-9c63-ff24b8113469`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_parts.
- Value mode: calculated_value
- Specificity: product_specific
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: reference_flow
- Evidence kind: calculated_from_collection
- Collection protocol: `cp_parts`
- Sources: grove-tms800e-2020; liebherr-ltf1060-2023

###### Finished axial-piston hydraulic pump (`piston_pump`)

Only one actual separately received design/specification, narrowing the broader public component category. Weigh installed mass and record grade, coating, dimensions and included internals. Hydraulic hose is the specified hose itself; separately supplied end fittings are separate cards. Winch includes only supplier-declared motor, gearing and brake. Boom/chassis inclusions are not counted twice; other cylinder/pump/fastener designs require separate cards.

- Selected flow: Pump `bbd91be4-dc00-44c2-8bc1-f67ee79174a7`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_parts.
- Value mode: calculated_value
- Specificity: product_specific
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: reference_flow
- Evidence kind: calculated_from_collection
- Collection protocol: `cp_parts`
- Sources:

###### Finished hydraulic main-hoist winch (`main_winch`)

Only one actual separately received design/specification, narrowing the broader public component category. Weigh installed mass and record grade, coating, dimensions and included internals. Hydraulic hose is the specified hose itself; separately supplied end fittings are separate cards. Winch includes only supplier-declared motor, gearing and brake. Boom/chassis inclusions are not counted twice; other cylinder/pump/fastener designs require separate cards.

- Selected flow: Pulley tackle and hoists other than skip hoists, winches and capstans, jacks `7984041f-134f-4b73-89b9-30d9be48684f`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_parts.
- Value mode: calculated_value
- Specificity: product_specific
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: reference_flow
- Evidence kind: calculated_from_collection
- Collection protocol: `cp_parts`
- Sources: grove-tms800e-2020; liebherr-ltf1060-2023

###### Finished steel-reinforced vulcanised-rubber hydraulic hose (`hydraulic_hose`)

Only one actual separately received design/specification, narrowing the broader public component category. Weigh installed mass and record grade, coating, dimensions and included internals. Hydraulic hose is the specified hose itself; separately supplied end fittings are separate cards. Winch includes only supplier-declared motor, gearing and brake. Boom/chassis inclusions are not counted twice; other cylinder/pump/fastener designs require separate cards.

- Selected flow: Hydraulic hose `e2fc1719-69dc-4281-8eae-383af8d9a405`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_parts.
- Value mode: calculated_value
- Specificity: product_specific
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: reference_flow
- Evidence kind: calculated_from_collection
- Collection protocol: `cp_parts`
- Sources:

###### Finished hexagonal-head steel bolt (`steel_bolt`)

Only one actual separately received design/specification, narrowing the broader public component category. Weigh installed mass and record grade, coating, dimensions and included internals. Hydraulic hose is the specified hose itself; separately supplied end fittings are separate cards. Winch includes only supplier-declared motor, gearing and brake. Boom/chassis inclusions are not counted twice; other cylinder/pump/fastener designs require separate cards.

- Selected flow: Steel fasteners `cad280ce-7850-46a1-9060-4f8b68bf5532`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_parts.
- Value mode: calculated_value
- Specificity: product_specific
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: reference_flow
- Evidence kind: calculated_from_collection
- Collection protocol: `cp_parts`
- Sources:

###### Finished rear drive-axle assembly supplied from CN (`drive_axle`)

Only an actual separately supplied CN rear drive-axle design matching this public geography, excluding an axle included in the engine-fitted chassis. Weigh installed net mass and retain actual differential/brake completeness. A front axle, another geography or stock shaft requires another matching card.

- Selected flow: Axle assembly `b5183f5e-96ba-4fae-a49f-20c222b9a6ee`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_parts.
- Value mode: calculated_value
- Specificity: product_specific
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: reference_flow
- Evidence kind: calculated_from_collection
- Collection protocol: `cp_parts`
- Sources:

###### One new pneumatic rubber truck tyre design (`truck_tyre`)

Only actual separate new truck tyres of one design outside the purchased chassis. Retain public Number of items; count installed tyres and returns without prescribing a wheel count. Use actual lot-specific measured kg/item only to reconcile the complete-machine mass/BOM, not to replace the public property with Mass.

- Selected flow: Tire `11c2e97a-624f-41de-957d-543cddb777ef`
- Flow property / unit: Number of items `01846770-4cfe-4a25-8ad9-919d8d378345` / Item(s)
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_count.
- Value mode: calculated_value
- Specificity: product_specific
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: reference_flow
- Evidence kind: calculated_from_collection
- Collection protocol: `cp_count`
- Sources:

###### Finished non-propulsion diesel engine for upper-crane hydraulic drive (`upper_diesel_engine`)

Only if the declared two-engine design actually uses this separately supplied non-propulsion upper engine. Public Number of items and non-motor-vehicle engine classification are retained. Record actual installed count and measured net kg/item for mass reconciliation. The carrier propulsion engine cannot use this identity and is normally already in the received chassis; a carrier-PTO route excludes this extra upper engine.

- Selected flow: Diesel engine `d3ac8612-80b9-4283-9439-62aa4986fce2`
- Flow property / unit: Number of items `01846770-4cfe-4a25-8ad9-919d8d378345` / Item(s)
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_count.
- Value mode: calculated_value
- Specificity: product_specific
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: reference_flow
- Evidence kind: calculated_from_collection
- Collection protocol: `cp_count`
- Sources: liebherr-ltf1060-2023

###### Finished charged lead-acid starter battery (`starter_battery`)

Only one actual separately installed starter-battery design outside supplier chassis/engine inclusions. Weigh net battery including its contained electrolyte and casing; record charge, capacity, chemistry and supplier gate. Electricity used for local charging is a separate actual exchange, not another battery.

- Selected flow: Finished charged lead-acid starter battery
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_parts.
- Value mode: calculated_value
- Specificity: product_specific
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: reference_flow
- Evidence kind: calculated_from_collection
- Collection protocol: `cp_parts`
- Sources:

###### One formulated mineral-oil hydraulic fluid (`hydraulic_oil`)

Only the actual supplier-certified mineral-base hydraulic formulation with at least70% petroleum oil, narrowing the public lubricant category. Retain public Volume m3. Meter net fresh fill/top-up, returns and factory recovery; retained delivery oil is included in measured M. Actual density/temperature may reconcile its physical mass, but does not replace Volume with Mass. No nominal tank-capacity fill assumption.

- Selected flow: Hydraulic Fluid `30691a38-a947-4b41-991e-194f6c9aa88f`
- Flow property / unit: Volume `93a60a56-a3c8-22da-a746-0800200c9a66` / m3
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_oil_volume.
- Value mode: calculated_value
- Specificity: product_specific
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: reference_flow
- Evidence kind: calculated_from_collection
- Collection protocol: `cp_oil_volume`
- Sources: grove-tms800e-2020

###### One formulated mineral engine lubricating oil (`engine_oil`)

Only if the actual OEM delivery specification uses this single formulation/concentration and it is not already supplied inside the chassis/engine. Weigh net fills/top-ups, returns and recovered fluids. Retained delivery mass enters M; no universal dose or density. Other actual formulations require separate cards.

- Selected flow: One formulated mineral engine lubricating oil
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_material.
- Value mode: calculated_value
- Specificity: product_specific
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: reference_flow
- Evidence kind: calculated_from_collection
- Collection protocol: `cp_material`
- Sources:

###### One formulated mineral transmission lubricating oil (`transmission_oil`)

Only if the actual OEM delivery specification uses this single formulation/concentration and it is not already supplied inside the chassis/engine. Weigh net fills/top-ups, returns and recovered fluids. Retained delivery mass enters M; no universal dose or density. Other actual formulations require separate cards.

- Selected flow: One formulated mineral transmission lubricating oil
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_material.
- Value mode: calculated_value
- Specificity: product_specific
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: reference_flow
- Evidence kind: calculated_from_collection
- Collection protocol: `cp_material`
- Sources:

###### One mineral-oil lithium-soap lubricating grease (`grease`)

Only if the actual OEM delivery specification uses this single formulation/concentration and it is not already supplied inside the chassis/engine. Weigh net fills/top-ups, returns and recovered fluids. Retained delivery mass enters M; no universal dose or density. Other actual formulations require separate cards.

- Selected flow: One mineral-oil lithium-soap lubricating grease
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_material.
- Value mode: calculated_value
- Specificity: product_specific
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: reference_flow
- Evidence kind: calculated_from_collection
- Collection protocol: `cp_material`
- Sources:

###### One 50%-by-mass ethylene-glycol aqueous engine coolant (`engine_coolant`)

Only if the actual OEM delivery specification uses this single formulation/concentration and it is not already supplied inside the chassis/engine. Weigh net fills/top-ups, returns and recovered fluids. Retained delivery mass enters M; no universal dose or density. Other actual formulations require separate cards.

- Selected flow: One 50%-by-mass ethylene-glycol aqueous engine coolant
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_material.
- Value mode: calculated_value
- Specificity: product_specific
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: reference_flow
- Evidence kind: calculated_from_collection
- Collection protocol: `cp_material`
- Sources:

#### Outputs

### Process: Factory checks and complete-vehicle acceptance (`acceptance`)

#### Inputs

##### Product flows

###### Low-voltage grid electricity (`electricity_acceptance`)

Meter actual stage electricity including attributable rework/idle. Public identity is user-side grid-average AC below 1 kV; other voltage or self-generation requires a separate matching exchange. Bought operations are not also local energy.

- Selected flow: Alternating current `50657322-939c-4829-a87b-47c093bfa6a7`
- Flow property / unit: Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_energy.
- Value mode: calculated_value
- Specificity: product_specific
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: reference_flow
- Evidence kind: calculated_from_collection
- Collection protocol: `cp_energy`
- Sources:

###### Certified fossil diesel consumed in factory tests (`test_diesel`)

Only actual single supplier-certified petroleum diesel with verified zero biogenic fraction and grade matching the engine. Weigh consumed fuel or convert actual meter volumes with measured density/temperature; reconcile fill, residual delivery fuel and returns. This consumption is separate from retained delivery fuel. No rated-power or brochure fuel factor.

- Selected flow: Diesel fuel `9d258d75-6792-4f1c-9856-81602ed8f816`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_fuel.
- Value mode: calculated_value
- Specificity: product_specific
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: reference_flow
- Evidence kind: calculated_from_collection
- Collection protocol: `cp_fuel`
- Sources:

###### Certified fossil diesel retained at delivery (`delivery_diesel`)

Only actual final residual petroleum diesel of the same declared single grade after testing. Measure retained quantity and include its mass in M; do not also classify it as consumed test fuel or add a nominal full tank. Fuel contained in received chassis is reconciled rather than a second purchase.

- Selected flow: Diesel fuel `9d258d75-6792-4f1c-9856-81602ed8f816`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_fuel.
- Value mode: calculated_value
- Specificity: product_specific
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: reference_flow
- Evidence kind: calculated_from_collection
- Collection protocol: `cp_fuel`
- Sources:

###### One 32.5%-by-mass aqueous urea exhaust fluid (`diesel_exhaust_solution`)

Only an actual SCR-equipped engine requiring this exact delivered formulation. Weigh actual factory consumption and retained delivery fill separately in the ledger, including fluid already supplied. Do not infer SCR or dose from an old engine option; other concentrations need a separate card.

- Selected flow: One 32.5%-by-mass aqueous urea exhaust fluid
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_material.
- Value mode: calculated_value
- Specificity: product_specific
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: reference_flow
- Evidence kind: calculated_from_collection
- Collection protocol: `cp_material`
- Sources: grove-tms800e-2020

#### Outputs

##### Product flows

###### Crane lorries (`finished_machine`)

Reference output: one complete accepted dedicated road diesel telescopic crane configuration, carrier and upper crane together. Weigh net delivered vehicle with declared installed/stowed counterweights, included hook/jib and retained working fluids/residual fuel. Exclude transport protection, people, test loads, uninstalled optional ballast and separate spare packages. Manufacturer acceptance records establish actual completeness; no load-chart or road gross-weight number replaces M.

- Selected flow: Crane lorries `3d73143c-e111-4f03-905c-82f7dcad0a1f`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: 1 kg
- Value mode: fixed_value
- Specificity: product_specific
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: reference_flow
- Evidence kind: collected_record
- Collection protocol: `cp_mass`
- Sources: grove-tms800e-2020; liebherr-ltf1060-2023

##### Waste flows

###### Contained spent mineral hydraulic oil (`spent_hydraulic_oil`)

Only actual separate exported mineral hydraulic oil from factory flushing/testing, with measured oil/water/metal content and receiver route. Weigh contained export; recovered reusable oil is internal circulation. Public used-lubricant identity is narrowed only where its waste collection scope fits this oil.

- Selected flow: Used lubricating oil `55d93375-7f04-4166-b2a2-88ce929051a5`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_waste.
- Value mode: calculated_value
- Specificity: product_specific
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: reference_flow
- Evidence kind: calculated_from_collection
- Collection protocol: `cp_waste`
- Sources:

##### Elementary flows

###### Fossil carbon dioxide to immediate unspecified air (`test_co2`)

Only actual measured species-specific post-control engine-test release under the declared air submedium. Pair concentration and exhaust flow/time on identical conditions and correct background. NO and NO2 are individual substances: do not split aggregate NOx or NO2-equivalent mass without measured speciation. Fossil carbon must be verified. No generic regulatory limit, engine standard or unavoidable-emission factor is a quantity.

- Selected flow: carbon dioxide (fossil) `08a91e70-3ddc-11dd-923d-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_emission.
- Value mode: calculated_value
- Specificity: product_specific
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: reference_flow
- Evidence kind: calculated_from_collection
- Collection protocol: `cp_emission`
- Sources:

###### Fossil carbon monoxide to immediate unspecified air (`test_co`)

Only actual measured species-specific post-control engine-test release under the declared air submedium. Pair concentration and exhaust flow/time on identical conditions and correct background. NO and NO2 are individual substances: do not split aggregate NOx or NO2-equivalent mass without measured speciation. Fossil carbon must be verified. No generic regulatory limit, engine standard or unavoidable-emission factor is a quantity.

- Selected flow: carbon monoxide (fossil) `08a91e70-3ddc-11dd-924e-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_emission.
- Value mode: calculated_value
- Specificity: product_specific
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: reference_flow
- Evidence kind: calculated_from_collection
- Collection protocol: `cp_emission`
- Sources:

###### Nitrogen monoxide to immediate unspecified air (`test_no`)

Only actual measured species-specific post-control engine-test release under the declared air submedium. Pair concentration and exhaust flow/time on identical conditions and correct background. NO and NO2 are individual substances: do not split aggregate NOx or NO2-equivalent mass without measured speciation. Fossil carbon must be verified. No generic regulatory limit, engine standard or unavoidable-emission factor is a quantity.

- Selected flow: nitrogen monoxide `08a91e70-3ddc-11dd-96ee-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_emission.
- Value mode: calculated_value
- Specificity: product_specific
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: reference_flow
- Evidence kind: calculated_from_collection
- Collection protocol: `cp_emission`
- Sources:

###### Nitrogen dioxide to immediate unspecified air (`test_no2`)

Only actual measured species-specific post-control engine-test release under the declared air submedium. Pair concentration and exhaust flow/time on identical conditions and correct background. NO and NO2 are individual substances: do not split aggregate NOx or NO2-equivalent mass without measured speciation. Fossil carbon must be verified. No generic regulatory limit, engine standard or unavoidable-emission factor is a quantity.

- Selected flow: nitrogen dioxide `08a91e70-3ddc-11dd-96e5-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_emission.
- Value mode: calculated_value
- Specificity: product_specific
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: reference_flow
- Evidence kind: calculated_from_collection
- Collection protocol: `cp_emission`
- Sources:

### Process: Dispatch protection (`packout`)

#### Inputs

##### Product flows

###### C-flute corrugated fibreboard dispatch protection (`cardboard`)

Only actual separate protection of this one specification, excluded from M. Weigh net attributed issues. Cardboard requires C-flute with at least80% fibre; LDPE foil is non-adhesive and unreinforced. Do not invent a whole-vehicle packaging quantity or single-use assumption.

- Selected flow: Corrugated cardboard `8bde297e-98df-463f-bcb4-0db52bf6e0b5`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_material.
- Value mode: calculated_value
- Specificity: product_specific
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: reference_flow
- Evidence kind: calculated_from_collection
- Collection protocol: `cp_material`
- Sources:

###### Non-cellular LDPE protective foil (`ldpe_film`)

Only actual separate protection of this one specification, excluded from M. Weigh net attributed issues. Cardboard requires C-flute with at least80% fibre; LDPE foil is non-adhesive and unreinforced. Do not invent a whole-vehicle packaging quantity or single-use assumption.

- Selected flow: Low-density polyethylene foil (PE-LD) `2cecd3a7-d90e-44b4-aec5-1d9dfb907477`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_material.
- Value mode: calculated_value
- Specificity: product_specific
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: reference_flow
- Evidence kind: calculated_from_collection
- Collection protocol: `cp_material`
- Sources:

#### Outputs

## 7. Allocation and Co-product Handling

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| `allocation_causal` | shared_operations | Separate configurations/orders by direct measurement first. Reconcile shared fabrication/finishing/integration/testing electricity, gases, fluid issues and actual test equipment replacement with measured causal stage time/load/material use and served orders; include idle/rework/reject burden. Unequal cranes are not allocated equally per vehicle by default. Record driver rationale, uncertainty and sensitivity; use actual foreground evidence rather than a universal mass/time allocation factor. |  |
| `allocation_receipts` | chassis_and_assemblies | Purchased or customer-furnished chassis/components carry their actual supplier inventory burden and gate. Do not duplicate component manufacture, material receipts or included fuel/fluids inside supplied assemblies. Internal WIP, drained reusable test oil and reusable weights/fixtures are not fresh whole-item consumption on every order. Document actual replacement and service intervals. |  |
| `allocation_balance` | manufacturing_batch | Reconcile receipts, net installed/retained delivered mass, WIP, returns, recovered flows and each exported waste for the same period/configuration; count test-consumed versus delivery-retained fuel separately. Reconcile counts and volumes with physical mass only using measured part masses/densities. Assign rejects/rework to accepted machines. Scrap exits the receiver gate without automatic avoided-primary-material or disposal credit. A real multi-output manufacturing operation requires explicit functions and evidence-based allocation. |  |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cp_mass | acceptance | reference_product | calibrated net weighing | model; configuration; serial number; accepted net mass M; scale/tare; installed/stowed parts; working fluids/residual fuel; acceptance; excluded protection | Weigh the accepted complete machine on a calibrated scale, excluding transport packaging; reconcile the same configuration and acceptance record. | kg | each complete accepted configuration | same declared production period; disclose gaps | declared crane-lorry integrating factory | accepted net mass per machine | scale calibration; net weigh ticket; complete-vehicle acceptance |
| cp_configuration | integration; acceptance | configuration | BOM/interface/acceptance ledger | model/serial/drawing revision; carrier and upper engine roles; actual PTO; boom/outrigger/slew/hoist/control; ballast/jib; supply completeness; site/period; test criteria/results | Crosswalk every actual BOM item and factory operation to an atomic exchange or justified exclusion. Verify supplied internals, carrier/upper integration, actual test load/radius/configuration and delivered fluid/counterweight state. Catalogue operating weights and regulatory ratings cannot supply M or a test recipe. | kg | each build revision/acceptance | same declared production period; disclose gaps | declared crane-lorry integrating factory | one traceable complete configuration | signed drawing/BOM; supplier scope; actual checks/test results |
| cp_material | fabrication; finishing; integration; acceptance; packout | single stock/consumable | net issues and weighing | single grade/design/formulation; state; net kg; issues/returns; recovery; density/temperature/pressure if converted; served orders; accepted count | Weigh each specified stock, wire, gas, powder, disc, water, formulated oil/coolant/grease, exhaust fluid and protection separately. Reconcile net fresh make-up and remaining/returned material. Fluid already inside chassis/engine and constituents of purchased solutions are not repeated receipts; no universal density, concentration or dose. | kg | each issue/return and batch | same declared production period; disclose gaps | declared crane-lorry integrating factory | attributable net mass / accepted machines of the same configuration | scale; SDS/certificates; net inventory/served-order ledger |
| cp_parts | integration | single installed component | component weighing and completeness | part/design; delivered/installed kg; actual count; included internals/fluids; supplier country; received/local route; accepted count | Weigh each net supplied chassis/boom/outrigger/bearing/hoist/cab/control/bolt/hose/cylinder/pump/axle/battery design or use actual verified lot-specific mass/count records. Record inclusion boundaries; supplied assemblies replace included parts and local manufacture. Expand actual missing fittings, wire harness, sensors and other BOM items before claiming completeness. | kg | each supply lot/build batch | same declared production period; disclose gaps | declared crane-lorry integrating factory | attributable installed mass / accepted machines of the same configuration | scale; supplier boundary; part design/certificate and BOM |
| cp_count | integration | truck_tyre; upper_diesel_engine | design-specific item count | single design; installed count; receipts/returns; supplier included items; lot-specific measured kg/item; upper-engine non-propulsion duty; accepted count | Count actual installed items for each selected single design and preserve public Number of items. Obtain actual lot-specific net part kg/item by calibrated weighing for physical BOM reconciliation only. Carrier-engine or tyre inclusions in a purchased chassis are excluded; no universal wheel count or engine weight. | Item(s) | each supply lot/build batch | same declared production period; disclose gaps | declared crane-lorry integrating factory | attributable installed item count / accepted machines of the same configuration | BOM count; receipt/return ledger; calibrated part weighing |
| cp_oil_volume | integration | hydraulic_oil | net formulated-fluid volume | supplier formulation/oil fraction; metered L or m3; fresh fill/top-up; returns/recovery; retained fill; actual density/temperature for mass check; accepted count | Meter actual net supplied mineral hydraulic-fluid volume; convert1 L =0.001 m3 and preserve public Volume. Reconcile received/fill/return/recovery/retained amounts. Measure density at stated temperature only to check retained kg within M; nominal reservoir capacity is not fill consumption. | m3 | each metered fill/return and batch | same declared production period; disclose gaps | declared crane-lorry integrating factory | attributable net fluid volume / accepted machines of the same configuration | meter calibration; composition; actual density/temperature and fill balance |
| cp_energy | fabrication; finishing; integration; acceptance | electricity | meter and causal allocation | stage; voltage/source; kWh; interval; actual load/time; idle/rework; shared totals; accepted count | Meter actual stage energy, convert1 kWh =3.6 MJ and reconcile shared measured totals with actual causal time/load and rework. Rated installed power, brochure lifting duty or engine power cannot establish factory electricity. | MJ | each actual metered interval/batch | same declared production period; disclose gaps | declared crane-lorry integrating factory | attributable electrical energy / accepted machines of the same configuration | meter calibration; bill; causal-load ledger |
| cp_fuel | acceptance | test_diesel; delivery_diesel | separate consumed and retained fuel ledger | single petroleum grade; fossil/biogenic certificate; fills/returns; test-consumed kg; residual kg; received chassis fuel; measured density/temperature if volume; actual engine test interval; accepted count | Weigh or meter with actual density/temperature all fills, supplied residual, final retained fuel and returns. Determine consumed test fuel from reconciled measured fuel balance. Record delivery residual separately, include its kg in M and prevent double-counting fuel within received chassis. No engine-rated-power times hours calculation without measured fuel relation. | kg | each actual engine test/final fill | same declared production period; disclose gaps | declared crane-lorry integrating factory | separate attributable consumed and retained kg / accepted machines of the same configuration | fuel meter/scale; composition and balance; test/acceptance record |
| cp_waste | fabrication; finishing; acceptance | single exported waste | segregated export weighing | single waste; alloy/formulation; wet/dry; oil/water/metal content; exported kg; recovery; receiver/treatment; accepted count | Weigh each actual offcut, clean chip, weld spatter, spent disc, captured dust, powder overspray, contained cleaning solution and spent hydraulic oil separately. Record composition and receiver gate. Internal recovered fluids/powder are not exports, air dust is not captured waste and direct water discharge requires separate species/medium cards. | kg | each export and reconciled batch | same declared production period; disclose gaps | declared crane-lorry integrating factory | attributable exported waste mass / accepted machines of the same configuration | scale; composition; receiver/treatment receipt |
| cp_emission | finishing; acceptance | single air species | species-specific post-control monitoring | species; fossil/biogenic origin; medium/submedium; particle size; measured concentration/exhaust volume/time; same reference conditions; controls/background; actual engine/finishing interval; accepted count | Measure actual post-control species concentration and exhaust volume on identical sampling/temperature/pressure/moisture conditions; integrate over the actual attributable interval, correct background and record uncertainty. Verify immediate unspecified air and unspecified size where selected. Measure NO and NO2 separately; NOx as NO2 equivalent cannot supply either species without speciation. Verify fossil carbon for CO2/CO. No mandatory emission or standards-based emission quantity. | kg | representative actual emitting intervals | same declared production period; disclose gaps | declared crane-lorry integrating factory | attributable measured species mass / accepted machines of the same configuration | monitoring; sampler/flow calibration; carbon/speciation/medium evidence |
| cp_water_resource | finishing | groundwater | well meter and aquifer record | site/country; renewable freshwater aquifer; metered m3; interval; pumping/treatment; reuse; accepted count | Meter actual qualifying factory-well abstraction and expand pumping/treatment; exclude internal circulation. Record aquifer renewability/freshwater evidence; the same source cannot also be a tap-water purchase. | m3 | each metered interval/batch | same declared production period; disclose gaps | declared crane-lorry integrating factory | attributable abstracted volume / accepted machines of the same configuration | meter; aquifer/site evidence; water balance |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `normalize_mass` | all inventory rows | q_ref = q_item / M; q_item = exchange amount per one accepted finished machine; q_ref = exchange amount per 1 kg reference flow. | q_item; M; cp_mass | q_ref |  |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `quality_configuration` | all inventory rows | Use the identical model/configuration, production period and accepted count for physically measured positive M and every numerator. Reconcile chassis/upper supply completeness, installed/stowed ballast/jib, retained fluids/fuel and actual measured part mass/count/volume conversions. Catalogue road/operating/axle weights do not meet the net weighing rule. | cp_configuration; cp_mass; cp_parts; cp_count; cp_oil_volume; cp_fuel |
| `quality_coverage` | inventory_and_links | Disclose missing actual BOM/route cards, UUIDs, measurements, supplier/transport/receiver links and uncertainty. Establish local/bought structure alternatives, actual powder/other finish and actual engine/load testing from site records. No universal steel grade, yield, component weight, fluid density/fill, wheel count, test load/duration, emission, life or allocation factor. | cp_configuration; cp_material; cp_energy; cp_waste; cp_emission; cp_water_resource |
| `quality_sources` | architecture_evidence | Grove TMS800E copyright2020, pp.4–5 and physical p.64 footer, and Liebherr LTF1060-4.1 code lwe-td-199-06-defisr04-2023, pp.8,11,25 and physical p.32 footer, are historical model-specific configuration evidence. They do not prove actual factory stocks, supplier BOM completeness, current engine/regulatory options, net M or life. Numeric load charts, axle limits, tank capacities and catalogue masses are not adopted quantities. | grove-tms800e-2020; liebherr-ltf1060-2023 |

## 9. Validation Rules

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| `validation_reference` | reference_flow | Require one complete road diesel telescopic crane configuration, carrier and upper together, positive physically measured M kg and cp_mass weighing/acceptance record. Reference output is1kg; normalize kg, MJ, m3 and Item(s) numerators by normalize_mass while preserving each public reference property. Keep retained fluids/fuel and delivery exclusions traceable. |  |
| `validation_bom` | inventory | Reconcile the actual carrier, intermediate/upper frames, boom/telescope, outriggers, slew/hoist/rope/hook, ballast/jib, cab/control/sensors, hydraulics and delivered fluids against BOM and supplier boundaries. Distinguish PTO versus separate upper engine, local fabrication versus receipts, consumed test fuel versus retained fuel and actual counts/volumes versus physical mass checks. Expand missing actual items/routes before complete coverage claims. |  |
| `validation_identity` | all inventory rows | Verify public type, chemical/formulation/design, route/completeness/geography, original reference property and unit group, and official localized names. Upper non-propulsion engine is not a carrier engine; individual steel wire is not rope. NO is not NO2/N2O/NOx equivalent; immediate air is not long-term air/soil. Groundwater is a resource, supplied tap water a product, contained spent oil/water a waste and emitted dust not captured dust. |  |
| `validation_claims` | dataset_claims | No complete cradle-to-gate claim without actual route and linked upstream/transport/receiver coverage. Manufacturing mass does not establish equal lift duty, road payload, lifetime, service performance, regulatory conformity or methodology approval. Scientific review remains pending. |  |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | Configured foreground complete diesel telescopic crane-lorry manufacture; heading does not assert publication |
| downstream_use | secondary_dataset; background_dataset |
| allowed_use | Same complete vehicle configuration manufacture scaled with measured M; upstream/transport/treatment separately declared |
| excluded_use | Road travel/lifting services, customer operation/maintenance/lifetime/end of life, standalone cranes/components, other vehicle/traction routes and methodology approval |
| required_metadata | All reference qualifiers; model/serial/drawing/BOM; carrier/upper supply gates and engine/PTO roles; installed/stowed counterweight/jib/hoist completeness; fluid formulations/actual fills/residual fuel; measured M and delivery exclusions; actual manufacturing/finish/test routes/criteria/results; material certificates; site/period/count; supplier/receiver links and causal allocation |
| required_quality_disclosure | Unresolved identities/measurements/BOM/routes/links; actual count/volume/mass reconciliation; rejects/rework/recovery; allocation and uncertainty; historical manufacturer evidence limits |
| update_trigger | Vehicle/boom/ballast/engine/PTO/BOM design, supplier completeness, local/bought route, finish/fluid formulation, test/acceptance/delivery state, site/period or allocation change |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| grove-tms800e-2020 | handbook | Grove/Manitowoc, TMS800E Product Guide, pp.4–5 specifications; physical p.64 unnumbered footer: copyright2020, FormNo.TMS800E, PartNo.05-013-2M-0120. https://www.manitowoc.com/sites/default/files/media/divers/file/2020-04/TMS800E-ProductGuide-Combo.pdf | Historical telescopic upper, hydraulic/hoist/luff/cab and HSLA carrier/outrigger architecture; model-specific counterweight and regional engine/DEF options. No factory route necessity, steel grade/thickness, component counts/masses, fluid fills, fuel/emission factor, load-chart value, regulatory acceptance or life adopted. |
| liebherr-ltf1060-2023 | handbook | Liebherr, LTF1060-4.1 technical data, printed/physical pp.8,11,25; physical p.32 unnumbered footer code lwe-td-199-06-defisr04-2023. https://assets-cdn.liebherr.com/versions/201c3870-84a1-4347-b89d-a20060a9c08f/original/ | Historical standard/customer-supplied truck chassis, separate upper diesel-drive, welded steel frame, telescope/outrigger/slew/hoist/safety-control architecture and travel ballast configuration distinctions. Document code identifies04-2023 edition context; URL/metadata is not a claimed publication date. No universal supplied chassis, two-engine requirement, capacities/weights, test load/ratio, current conformity or factory consumption adopted. |
