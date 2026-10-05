---
pcr_id: pcr.metal-products-machinery-and-equipment.transport-equipment.engine-fitted-road-vehicle-chassis
language: en-US
status: candidate
sync_with: pcr.zh-CN.md
---

# Manufacture of diesel engine-fitted bodyless ladder-frame road-bus chassis

## 1. Scope and Applicability

Manufacture of new diesel engine-fitted, cabless and bodyless rolling chassis for road buses using a separate conventional steel ladder frame, accepted as complete chassis assemblies before coachwork. This narrower CPC49121 boundary addresses engine placement, driveline/running-gear supply completeness, bolted frame integration and measured net chassis delivery. It excludes complete buses/lorries, cabs/coachwork, unitary passenger-car platforms, body-integral structures, battery-electric/hybrid/gas or spark-ignition propulsion, non-road machines, trailers, loose frames/engines, incomplete kits and refurbishment. Existing material motor-vehicle body PCR explicitly excludes engine-fitted chassis; its coachwork manufacturing rules do not replace this rolling-chassis integration methodology. Front/rear engine position, gearbox, suspension and brake design must be declared for one configuration, not averaged by default. Mercedes February2022 and Volvo footer2019-11-26 are historical model-specific architecture/delivery examples, not current regulatory proof or factory recipes. Downstream bodybuilding, road transport services, passengers/payload, use fuel, maintenance, lifetime and end of life are outside.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.metal-products-machinery-and-equipment.transport-equipment.engine-fitted-road-vehicle-chassis |
| classification_refs | CPC 3.0 49121; narrower candidate; no accepted mapping asserted |
| covered_products | New complete diesel bodyless steel ladder-frame road-bus chassis assemblies |
| excluded_products | Complete vehicles/coachwork; unitary/body-integral platforms; other propulsion/non-road/trailer routes; loose parts/kits; use/services |
| representative_product | One accepted bolted ladder-frame chassis with diesel engine, declared transmission, axles, air suspension, pneumatic drum brakes, wheels, hydraulic steering and actual supplied electrics/fluids |
| production_route | Receipt/make-or-buy control; conditional stock fabrication/finishing; frame receipt or assembly; powertrain/running-gear/electrical integration; actual fills/checks/acceptance; dispatch protection |
| market_state | Accepted net complete chassis at its declared factory gate, awaiting coachwork; not a roadworthiness assertion |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Manufacture one declared complete diesel engine-fitted bodyless bus chassis configuration |
| How much | 1 kg accepted net complete machine; one accepted complete machine is represented by physically measured M kg |
| How well | Meet actual OEM drawing/BOM and inspection plan for frame joints/alignment, engine/transmission/axle mountings, steering/brake connections, electrical checks and actual leak/function tests. Retain actual criteria/results; no universal bolt torque, pressure, tolerance or test duration |
| How long or cycle | One chassis manufacturing delivery; no passenger-km, road-mile or lifetime/cycle unit |
| reference_flow_link | `finished_chassis` |

| Field | Value |
| --- | --- |
| Reference amount | 1 |
| Reference product flow | Chassis fitted with engines, for motor vehicles `78532304-4355-400e-8bab-e2f6858050db` |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | Model/serial/drawing/BOM revision; ladder-frame material/joints; bodyless/cabless completeness; actual engine position and diesel specification; transmission/driveline/axles; suspension/brake/wheel/steering designs; electrical/exhaust/cooling scope and bought inclusions; fluid formulations/actual fills/residual fuel; accepted geometry versus transport configuration; measured positive M with scale/tare and acceptance; temporary seat/control/fixture/loose-spare/packaging exclusions; site/period/count/gates and actual checks/results |

Declare all qualifiers in dataset metadata or equivalent process/flow notes. One complete machine in this PCR means one complete accepted engine-fitted chassis assembly, although the road vehicle remains incomplete until coachwork. A shipping kit, bare frame or catalogue gross rating is not this reference.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| `reference_mass` | reference product | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | M = accepted net mass of one complete machine of the same configuration in kg; collect using cp_mass. |
| `delivery_configuration` | complete chassis | Mass | kg | Include actual OEM-accepted installed chassis systems and retained working fluids/fuel; include a permanently supplied/stowed wheel only if in the declared accepted chassis configuration. Exclude coachwork/cab, people, test loads, temporary transport driver seat/control fixtures, loose tools/spares and packaging. Record actual delivery scope. Catalogue running-order weight may include full fuel, spare wheel and tools, and cannot supply this M. If shipping shortens/dismantles the chassis, retain accepted complete-configuration weighing and traceable separate parts; do not substitute shipping weight or invented part mass. |
| `electrical_energy` | electricity_fabrication; electricity_finishing; electricity_frame; electricity_integration; electricity_acceptance | Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` | MJ | Retain metered kWh and convert1 kWh =3.6 MJ. Rated engine power or installed equipment ratings do not establish factory electricity. |
| `component_count` | bus_tyre | Number of items `01846770-4cfe-4a25-8ad9-919d8d378345` | Item(s) | Retain public Number of items and actual installed count of each single tyre design. Actual lot-specific measured kg/item times installed count reconciles physical BOM mass only; it does not replace the exchange property. No default wheel count or catalogue tyre weight. |
| `hydraulic_volume` | hydraulic_oil | Volume `93a60a56-a3c8-22da-a746-0800200c9a66` | m3 | Retain metered net formulated-fluid volume; convert1 L =0.001 m3. For physical retained mass within M only, use measured density at recorded temperature and m = rho times V. No default density or nominal reservoir fill. |
| `water_resource_volume` | groundwater | Volume `93a60a56-a3c8-22da-a746-0800200c9a66` | m3 | Meter qualifying renewable freshwater groundwater with aquifer/site/country evidence; it is not tap water or wastewater. |
| `material_mass` | other inputs/wastes/emissions | Mass | kg | Weigh each specified component/formulation/waste or measure each emitted species. Volume-to-mass conversion needs actual density and temperature/pressure evidence. NO, NO2 and N2O cannot be interchanged; constituent mass inside a purchased mixture is not another receipt. |

## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Specified purchased rails/frame, diesel propulsion engine and rolling-chassis components plus actual local stock/consumables received at chassis factory |
| starting_condition_role | Foreground receipt gate; upstream manufacture and incoming transport separately linked |
| product_classification_scope | Cabless/bodyless diesel steel ladder-frame bus-chassis subset of CPC49121 |
| recursive_input_rule | Purchased complete frame/engine/axle replaces included parts and supplier/local operations. Local WIP transfers do not create external receipts |
| upstream_dataset_requirement | Match frame finish/geometry, road-propulsion engine duty, axle geography and brake scope, component state/property, oil/fuel formulation, electricity source and actual waste receiver |
| disclosure | Foreground configured chassis manufacture only; disclose local/bought/outsourced operations and missing upstream/transport/receiver links. No complete cradle-to-gate assertion |

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| `boundary_frame` | fabrication; finishing; frame | Frame receipt or actual bolted assembly is required, not mandatory local raw-steel manufacture. Include local cutting/forming/drilling and finishing only when performed; purchased formed/coated rails or complete frame exclude their local stock and upstream operations. Mercedes p.2 supports one bolted ladder-frame example, not mandatory welding, LNE500, a fastener specification or powder coating. Expand actual nuts/washers/brackets, wet paint/solvents, machining fluid, blasting, heat/oven fuels or outsourcing as separate atomic cards before coverage claims. | mercedes-of1721-chassis-2022 |
| `boundary_integration` | integration | Required receipt/BOM verification and installation of actual engine/gearbox/driveline, axles/suspension/wheels, steering/brake circuits and supplied cooling/exhaust/electrics, connections, fills and adjustment. One supplier gate per assembly prevents duplicate compressor/starter/alternator, brakes, oil and wiring. The representative drum/air-bellows route is not universal: an actual disc brake, leaf suspension, different tank/rim or engine-placement route must expand and qualify its own cards. No coachwork or cab is installed within this scope. | mercedes-of1721-chassis-2022; volvo-b8r-chassis-2019 |
| `boundary_acceptance` | acceptance | Chassis acceptance is required. Include physical leak/brake/steering/drivetrain/electrical tests and engine runs only under actual OEM work records, with real criteria/results, duration, loads, fills/returns and monitored releases. No road-test distance, regulatory emission limit, wheel count or fuel-consumption rate is assumed. Reusable support rigs, temporary driver controls and test loads are factory fixtures; actual attributable replacement/service burden is separately evidenced. Downstream bodybuilder wheelbase extension and customer use are outside. |  |
| `boundary_emissions` | finishing; acceptance | Record only actual direct releases of individual species after controls. Separate groundwater resource from supplied water and contained wastewater, emitted particulate from collected dust, test-consumed from retained fuel and fossil from biogenic carbon. Actual other air submedia, measured particle fractions or water/soil species require matching cards. An absent card is not evidence of zero release. |  |

## 6. Process Inventory Structure

### Process Map

| process_id | Process name | Inclusion | Inclusion condition | Role | Quantitative reference |
| --- | --- | --- | --- | --- | --- |
| `fabrication` | Local rail and crossmember fabrication | conditional | Only actual cutting, forming and drilling from stock | Foreground stage; internal WIP | per 1 kg reference flow; collected per one accepted finished machine |
| `finishing` | Local steel surface finishing | conditional | Only actual local preparation and declared powder-coating route | Foreground stage; internal WIP | per 1 kg reference flow; collected per one accepted finished machine |
| `frame` | Frame receipt or bolted assembly | required | Receive a complete frame or assemble actual longitudinal rails/crossmembers | Foreground stage; internal WIP | per 1 kg reference flow; collected per one accepted finished machine |
| `integration` | Powertrain and rolling-chassis integration | required | Integrate the declared complete engine-fitted bodyless chassis | Foreground stage; internal WIP | per 1 kg reference flow; collected per one accepted finished machine |
| `acceptance` | Factory checks and chassis acceptance | required | Actual OEM checks; physical engine/brake/drivetrain tests only as performed | Foreground stage; internal WIP | per 1 kg reference flow; collected per one accepted finished machine |
| `packout` | Dispatch protection | conditional | Only actual supplied protection | Foreground stage; internal WIP | per 1 kg reference flow; collected per one accepted finished machine |

### Process: Local rail and crossmember fabrication (`fabrication`)

#### Inputs

##### Product flows

###### Certified hot-rolled HSLA steel plate (`hsla_plate`)

Only the actual certificate-declared single grade, thickness and delivery state entering local rail/crossmember fabrication. Weigh net issues and returns. Mercedes LNE500 is a historical model example, not a universal grade. Bought finished rails or frame replace this stock and local operations.

- Selected flow: Certified hot-rolled HSLA steel plate
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

Meter attributable stage electricity, including actual rework and idle. Public identity is user-side grid-average AC below1kV; different voltage or self-generation requires a matching separate card. Bought operations are not repeated as local electricity.

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

Only actual segregated exports of one certified alloy in the declared clean state. Weigh receiver-bound mass and record oil/water contamination. Internal reuse is not exported waste; oil-contaminated chips need another card. No automatic avoided-steel credit.

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

###### Clean HSLA steel drilling chips (`steel_chip`)

Only actual segregated exports of one certified alloy in the declared clean state. Weigh receiver-bound mass and record oil/water contamination. Internal reuse is not exported waste; oil-contaminated chips need another card. No automatic avoided-steel credit.

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

### Process: Local steel surface finishing (`finishing`)

#### Inputs

##### Product flows

###### Low-voltage grid electricity (`electricity_finishing`)

Meter attributable stage electricity, including actual rework and idle. Public identity is user-side grid-average AC below1kV; different voltage or self-generation requires a matching separate card. Bought operations are not repeated as local electricity.

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

Only if actual local finishing uses this single supplier-certified polyester powder. Weigh net fresh issues, returns/recovery and cured coating; purchased coated rails/frame exclude local coating. Public Mass powder identity is narrowed to this formulation; it is not a coating service. Other actual finishes require their own formulation cards.

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

One actual disc design for local rail-edge deburring or finishing. Weigh attributable replacements and stock balance, retaining grain, binder and dimensions; no whole disc per chassis assumption.

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

Only actual drinking-quality tap-water make-up for aqueous cleaning. Weigh or meter with measured temperature/density. Internal circulation and water already contained in purchased mixtures are not additional receipts.

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

Only actual factory-well abstraction verified as renewable freshwater for the aquifer/site/country. Meter m3 and expand pumping/treatment. The same water cannot also be purchased tap water.

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

Only an actual separately collected export of this one specified waste. Weigh wet or dry mass on a declared basis, record oil/water/solids composition and receiver treatment. Recovered powder/water is internal reuse; no direct water discharge is inferred.

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

###### Captured dry HSLA-steel deburring dust (`captured_dust`)

Only an actual separately collected export of this one specified waste. Weigh wet or dry mass on a declared basis, record oil/water/solids composition and receiver treatment. Recovered powder/water is internal reuse; no direct water discharge is inferred.

- Selected flow: Captured dry HSLA-steel deburring dust
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

Only an actual separately collected export of this one specified waste. Weigh wet or dry mass on a declared basis, record oil/water/solids composition and receiver treatment. Recovered powder/water is internal reuse; no direct water discharge is inferred.

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

Only an actual separately collected export of this one specified waste. Weigh wet or dry mass on a declared basis, record oil/water/solids composition and receiver treatment. Recovered powder/water is internal reuse; no direct water discharge is inferred.

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

Only actual measured post-control particulate release from local steel finishing, with unspecified size and immediate air submedium unspecified. Pair concentration and exhaust volume on identical conditions. Captured dust is separate waste; specific measured size or submedium requires a different identity.

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

### Process: Frame receipt or bolted assembly (`frame`)

#### Inputs

##### Product flows

###### Low-voltage grid electricity (`electricity_frame`)

Meter attributable stage electricity, including actual rework and idle. Public identity is user-side grid-average AC below1kV; different voltage or self-generation requires a matching separate card. Bought operations are not repeated as local electricity.

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

###### Finished bolted steel bus ladder-frame assembly (`frame_assembly`)

One actual purchased design, measured at receipt and installation. A bought complete frame excludes its separately bought rails/crossmembers and local fabrication/assembly; a local bolted frame uses actual rails/crossmembers, fasteners and fixture electricity. Record coating, drilling, joining and supplier completeness; other sizes/designs have separate cards.

- Selected flow: Finished bolted steel bus ladder-frame assembly
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_parts.
- Value mode: calculated_value
- Specificity: product_specific
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: reference_flow
- Evidence kind: calculated_from_collection
- Collection protocol: `cp_parts`
- Sources: mercedes-of1721-chassis-2022

###### Finished formed steel bus-frame longitudinal rail (`rail`)

One actual purchased design, measured at receipt and installation. A bought complete frame excludes its separately bought rails/crossmembers and local fabrication/assembly; a local bolted frame uses actual rails/crossmembers, fasteners and fixture electricity. Record coating, drilling, joining and supplier completeness; other sizes/designs have separate cards.

- Selected flow: Finished formed steel bus-frame longitudinal rail
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_parts.
- Value mode: calculated_value
- Specificity: product_specific
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: reference_flow
- Evidence kind: calculated_from_collection
- Collection protocol: `cp_parts`
- Sources: mercedes-of1721-chassis-2022

###### Finished steel bus-frame crossmember (`crossmember`)

One actual purchased design, measured at receipt and installation. A bought complete frame excludes its separately bought rails/crossmembers and local fabrication/assembly; a local bolted frame uses actual rails/crossmembers, fasteners and fixture electricity. Record coating, drilling, joining and supplier completeness; other sizes/designs have separate cards.

- Selected flow: Finished steel bus-frame crossmember
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_parts.
- Value mode: calculated_value
- Specificity: product_specific
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: reference_flow
- Evidence kind: calculated_from_collection
- Collection protocol: `cp_parts`
- Sources: mercedes-of1721-chassis-2022

###### Finished hexagonal-head steel frame bolt (`frame_bolt`)

One actual separately supplied bolt design/grade/coating/dimension for bolted frame joints. Weigh installed mass and net issues; purchased complete frame inclusions are excluded. Nuts and washers are distinct physical exchanges. No universal fastener grade/count or torque follows from an OEM brochure.

- Selected flow: Steel fasteners `cad280ce-7850-46a1-9060-4f8b68bf5532`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_parts.
- Value mode: calculated_value
- Specificity: product_specific
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: reference_flow
- Evidence kind: calculated_from_collection
- Collection protocol: `cp_parts`
- Sources: mercedes-of1721-chassis-2022

###### Finished steel hexagonal frame nut (`frame_nut`)

One actual separately supplied nut design matching the recorded frame joint. Weigh installed net mass; separate washers, bolts and bought-frame inclusions. No preset count or mass.

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

#### Outputs

### Process: Powertrain and rolling-chassis integration (`integration`)

#### Inputs

##### Product flows

###### Low-voltage grid electricity (`electricity_integration`)

Meter attributable stage electricity, including actual rework and idle. Public identity is user-side grid-average AC below1kV; different voltage or self-generation requires a matching separate card. Bought operations are not repeated as local electricity.

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

###### Finished diesel propulsion engine for a road bus (`road_engine`)

One actual separately supplied compression-ignition piston engine for road-vehicle propulsion, matching CPC43123 public Mass identity. Weigh delivered net engine and record included fuel-injection, starter/alternator/compressor and fluids. Do not use CPC43110 non-motor-vehicle engines, or assume local casting/machining of purchased engine internals.

- Selected flow: Compression-ignition internal combustion piston engines, of a kind used for the propulsion of vehicles other than railway or tramway rolling stock `2bc283a7-36f3-40f7-9e15-54851b888d33`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_parts.
- Value mode: calculated_value
- Specificity: product_specific
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: reference_flow
- Evidence kind: calculated_from_collection
- Collection protocol: `cp_parts`
- Sources: mercedes-of1721-chassis-2022; volvo-b8r-chassis-2019

###### Finished automatic road-bus gearbox assembly (`gearbox`)

Only one actual separately purchased design in the declared chassis BOM. Weigh installed net mass and retain material/design, interfaces and supplier inclusions. Exclude parts already within a purchased engine/axle/frame. Initial cards must expand other actual components and alternative designs; a local equivalent replaces the receipt with actual stock and operations.

- Selected flow: Finished automatic road-bus gearbox assembly
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_parts.
- Value mode: calculated_value
- Specificity: product_specific
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: reference_flow
- Evidence kind: calculated_from_collection
- Collection protocol: `cp_parts`
- Sources: mercedes-of1721-chassis-2022; volvo-b8r-chassis-2019

###### Finished steel road-bus propeller-shaft assembly (`propshaft`)

Only one actual separately purchased design in the declared chassis BOM. Weigh installed net mass and retain material/design, interfaces and supplier inclusions. Exclude parts already within a purchased engine/axle/frame. Initial cards must expand other actual components and alternative designs; a local equivalent replaces the receipt with actual stock and operations.

- Selected flow: Finished steel road-bus propeller-shaft assembly
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_parts.
- Value mode: calculated_value
- Specificity: product_specific
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: reference_flow
- Evidence kind: calculated_from_collection
- Collection protocol: `cp_parts`
- Sources:

###### Finished rubber bus-suspension air bellows (`air_bellows`)

Only one actual separately purchased design in the declared chassis BOM. Weigh installed net mass and retain material/design, interfaces and supplier inclusions. Exclude parts already within a purchased engine/axle/frame. Initial cards must expand other actual components and alternative designs; a local equivalent replaces the receipt with actual stock and operations.

- Selected flow: Finished rubber bus-suspension air bellows
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_parts.
- Value mode: calculated_value
- Specificity: product_specific
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: reference_flow
- Evidence kind: calculated_from_collection
- Collection protocol: `cp_parts`
- Sources: mercedes-of1721-chassis-2022; volvo-b8r-chassis-2019

###### Finished hydraulic bus-suspension damper (`damper`)

Only one actual separately purchased design in the declared chassis BOM. Weigh installed net mass and retain material/design, interfaces and supplier inclusions. Exclude parts already within a purchased engine/axle/frame. Initial cards must expand other actual components and alternative designs; a local equivalent replaces the receipt with actual stock and operations.

- Selected flow: Finished hydraulic bus-suspension damper
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_parts.
- Value mode: calculated_value
- Specificity: product_specific
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: reference_flow
- Evidence kind: calculated_from_collection
- Collection protocol: `cp_parts`
- Sources: mercedes-of1721-chassis-2022; volvo-b8r-chassis-2019

###### Finished steel road-bus wheel rim (`wheel_rim`)

Only one actual separately purchased design in the declared chassis BOM. Weigh installed net mass and retain material/design, interfaces and supplier inclusions. Exclude parts already within a purchased engine/axle/frame. Initial cards must expand other actual components and alternative designs; a local equivalent replaces the receipt with actual stock and operations.

- Selected flow: Finished steel road-bus wheel rim
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_parts.
- Value mode: calculated_value
- Specificity: product_specific
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: reference_flow
- Evidence kind: calculated_from_collection
- Collection protocol: `cp_parts`
- Sources: mercedes-of1721-chassis-2022; volvo-b8r-chassis-2019

###### Finished hydraulic road-bus steering gear (`steering_gear`)

Only one actual separately purchased design in the declared chassis BOM. Weigh installed net mass and retain material/design, interfaces and supplier inclusions. Exclude parts already within a purchased engine/axle/frame. Initial cards must expand other actual components and alternative designs; a local equivalent replaces the receipt with actual stock and operations.

- Selected flow: Finished hydraulic road-bus steering gear
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_parts.
- Value mode: calculated_value
- Specificity: product_specific
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: reference_flow
- Evidence kind: calculated_from_collection
- Collection protocol: `cp_parts`
- Sources: mercedes-of1721-chassis-2022; volvo-b8r-chassis-2019

###### Finished cast-iron road-bus brake drum (`brake_drum`)

Only one actual separately purchased design in the declared chassis BOM. Weigh installed net mass and retain material/design, interfaces and supplier inclusions. Exclude parts already within a purchased engine/axle/frame. Initial cards must expand other actual components and alternative designs; a local equivalent replaces the receipt with actual stock and operations.

- Selected flow: Finished cast-iron road-bus brake drum
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_parts.
- Value mode: calculated_value
- Specificity: product_specific
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: reference_flow
- Evidence kind: calculated_from_collection
- Collection protocol: `cp_parts`
- Sources: mercedes-of1721-chassis-2022

###### Finished pneumatic spring parking-brake chamber (`spring_brake_chamber`)

Only one actual separately purchased design in the declared chassis BOM. Weigh installed net mass and retain material/design, interfaces and supplier inclusions. Exclude parts already within a purchased engine/axle/frame. Initial cards must expand other actual components and alternative designs; a local equivalent replaces the receipt with actual stock and operations.

- Selected flow: Finished pneumatic spring parking-brake chamber
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_parts.
- Value mode: calculated_value
- Specificity: product_specific
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: reference_flow
- Evidence kind: calculated_from_collection
- Collection protocol: `cp_parts`
- Sources: mercedes-of1721-chassis-2022

###### Finished pneumatic service-brake control valve (`brake_valve`)

Only one actual separately purchased design in the declared chassis BOM. Weigh installed net mass and retain material/design, interfaces and supplier inclusions. Exclude parts already within a purchased engine/axle/frame. Initial cards must expand other actual components and alternative designs; a local equivalent replaces the receipt with actual stock and operations.

- Selected flow: Finished pneumatic service-brake control valve
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_parts.
- Value mode: calculated_value
- Specificity: product_specific
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: reference_flow
- Evidence kind: calculated_from_collection
- Collection protocol: `cp_parts`
- Sources:

###### Finished steel road-bus air-brake pipe (`brake_pipe`)

Only one actual separately purchased design in the declared chassis BOM. Weigh installed net mass and retain material/design, interfaces and supplier inclusions. Exclude parts already within a purchased engine/axle/frame. Initial cards must expand other actual components and alternative designs; a local equivalent replaces the receipt with actual stock and operations.

- Selected flow: Finished steel road-bus air-brake pipe
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_parts.
- Value mode: calculated_value
- Specificity: product_specific
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: reference_flow
- Evidence kind: calculated_from_collection
- Collection protocol: `cp_parts`
- Sources:

###### Finished steel road-bus diesel-fuel tank (`fuel_tank`)

Only one actual separately purchased design in the declared chassis BOM. Weigh installed net mass and retain material/design, interfaces and supplier inclusions. Exclude parts already within a purchased engine/axle/frame. Initial cards must expand other actual components and alternative designs; a local equivalent replaces the receipt with actual stock and operations.

- Selected flow: Finished steel road-bus diesel-fuel tank
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_parts.
- Value mode: calculated_value
- Specificity: product_specific
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: reference_flow
- Evidence kind: calculated_from_collection
- Collection protocol: `cp_parts`
- Sources:

###### Finished aluminium road-bus engine radiator (`radiator`)

Only one actual separately purchased design in the declared chassis BOM. Weigh installed net mass and retain material/design, interfaces and supplier inclusions. Exclude parts already within a purchased engine/axle/frame. Initial cards must expand other actual components and alternative designs; a local equivalent replaces the receipt with actual stock and operations.

- Selected flow: Finished aluminium road-bus engine radiator
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_parts.
- Value mode: calculated_value
- Specificity: product_specific
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: reference_flow
- Evidence kind: calculated_from_collection
- Collection protocol: `cp_parts`
- Sources: volvo-b8r-chassis-2019

###### Finished diesel SCR exhaust-treatment assembly (`aftertreatment`)

Only one actual separately purchased design in the declared chassis BOM. Weigh installed net mass and retain material/design, interfaces and supplier inclusions. Exclude parts already within a purchased engine/axle/frame. Initial cards must expand other actual components and alternative designs; a local equivalent replaces the receipt with actual stock and operations.

- Selected flow: Finished diesel SCR exhaust-treatment assembly
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_parts.
- Value mode: calculated_value
- Specificity: product_specific
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: reference_flow
- Evidence kind: calculated_from_collection
- Collection protocol: `cp_parts`
- Sources: volvo-b8r-chassis-2019

###### Finished steering front-axle assembly supplied from CN (`front_axle`)

One actual separately supplied CN axle design, narrowing the public purchased motor-vehicle axle identity. Weigh installed net mass and record hubs, differential where present, brake completeness and supplier gate. Included brake drums/parts are not repeated; other geographies require another identity. Trailer running-gear axles are excluded.

- Selected flow: Axle assembly `b5183f5e-96ba-4fae-a49f-20c222b9a6ee`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_parts.
- Value mode: calculated_value
- Specificity: product_specific
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: reference_flow
- Evidence kind: calculated_from_collection
- Collection protocol: `cp_parts`
- Sources: mercedes-of1721-chassis-2022; volvo-b8r-chassis-2019

###### Finished rear drive-axle assembly supplied from CN (`rear_axle`)

One actual separately supplied CN axle design, narrowing the public purchased motor-vehicle axle identity. Weigh installed net mass and record hubs, differential where present, brake completeness and supplier gate. Included brake drums/parts are not repeated; other geographies require another identity. Trailer running-gear axles are excluded.

- Selected flow: Axle assembly `b5183f5e-96ba-4fae-a49f-20c222b9a6ee`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_parts.
- Value mode: calculated_value
- Specificity: product_specific
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: reference_flow
- Evidence kind: calculated_from_collection
- Collection protocol: `cp_parts`
- Sources: mercedes-of1721-chassis-2022; volvo-b8r-chassis-2019

###### One new pneumatic rubber road-bus tyre design (`bus_tyre`)

Count actual installed new bus tyres of one design and returns, preserving public Number of items. Obtain actual lot-specific net kg/item by calibrated weighing for physical BOM/M reconciliation only. No universal wheel count, tyre mass or retread substitution. Included supplier wheels/tyres are excluded.

- Selected flow: Tire `11c2e97a-624f-41de-957d-543cddb777ef`
- Flow property / unit: Number of items `01846770-4cfe-4a25-8ad9-919d8d378345` / Item(s)
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_count.
- Value mode: calculated_value
- Specificity: product_specific
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: reference_flow
- Evidence kind: calculated_from_collection
- Collection protocol: `cp_count`
- Sources: mercedes-of1721-chassis-2022; volvo-b8r-chassis-2019

###### Finished engine-driven brake-air compressor (`air_compressor`)

One actual separately bought air compressor for the pneumatic brake system, narrowing the broader finished air-compressor category. Weigh installed mass; do not duplicate an engine-included compressor. Refrigeration compressors, site compressed-air supply and locally produced test air are different exchanges.

- Selected flow: Air or vacuum pumps, air or other gas compressors `7c9988b6-d0cf-4a08-801a-097d31f374d7`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_parts.
- Value mode: calculated_value
- Specificity: product_specific
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: reference_flow
- Evidence kind: calculated_from_collection
- Collection protocol: `cp_parts`
- Sources:

###### Finished steel-reinforced vulcanised-rubber steering hose (`hydraulic_hose`)

One actual hydraulic steering hose design, narrowed from the rubber hydraulic-hose identity. Weigh net installed hose; separately supplied end fittings require separate cards. Exclude engine/steering-assembly inclusions; no assumed hose length or pressure.

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

###### Formed low-voltage chassis copper wiring harness before final electrical check (`wiring_harness`)

One actual bought bundled/taped/sleeved formed harness at the public intermediate gate, then installed and electrically checked in chassis integration/acceptance. Weigh received and installed mass and record connector/sleeve completeness; do not adopt the public comment assumed1:1 transfer as a quantity factor. Raw insulated wire and already included engine harness are not additional inputs.

- Selected flow: Formed wiring harness `795e6116-d121-486f-aa8f-fa78448351f0`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_parts.
- Value mode: calculated_value
- Specificity: product_specific
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: reference_flow
- Evidence kind: calculated_from_collection
- Collection protocol: `cp_parts`
- Sources:

###### Finished engine-belt-driven road-bus alternator (`alternator`)

One actual separately supplied starting/generating component of the stated design, narrowing the public internal-combustion-engine electrical-equipment category. Weigh installed net mass and record electrical rating and supplier inclusion. Exclude an engine-included unit; a wind generator or pooled lighting/starting kit is not this atomic component.

- Selected flow: Electrical ignition or starting equipment of a kind used for internal combustion engines, generators and cut-outs of a kind used in conjunction with internal combustion engines, electrical lighting or signalling equipment (except filament or discharge lamps), windscreen wipers, defrosters and demisters, of a kind used for cycles or motor vehicles `46a4d7e0-db60-4f6d-a637-28140132c05d`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_parts.
- Value mode: calculated_value
- Specificity: product_specific
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: reference_flow
- Evidence kind: calculated_from_collection
- Collection protocol: `cp_parts`
- Sources:

###### Finished road-bus electric starter motor (`starter`)

One actual separately supplied starting/generating component of the stated design, narrowing the public internal-combustion-engine electrical-equipment category. Weigh installed net mass and record electrical rating and supplier inclusion. Exclude an engine-included unit; a wind generator or pooled lighting/starting kit is not this atomic component.

- Selected flow: Electrical ignition or starting equipment of a kind used for internal combustion engines, generators and cut-outs of a kind used in conjunction with internal combustion engines, electrical lighting or signalling equipment (except filament or discharge lamps), windscreen wipers, defrosters and demisters, of a kind used for cycles or motor vehicles `46a4d7e0-db60-4f6d-a637-28140132c05d`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_parts.
- Value mode: calculated_value
- Specificity: product_specific
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: reference_flow
- Evidence kind: calculated_from_collection
- Collection protocol: `cp_parts`
- Sources:

###### Finished charged lead-acid starter battery (`starter_battery`)

One actual separately installed starter-battery design. Weigh net battery including casing and contained electrolyte; record charge/chemistry/capacity and supplier gate. Expand separate consumer batteries if actually delivered. Local charging uses separately metered electricity; no universal battery count or life.

- Selected flow: Finished charged lead-acid starter battery
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_parts.
- Value mode: calculated_value
- Specificity: product_specific
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: reference_flow
- Evidence kind: calculated_from_collection
- Collection protocol: `cp_parts`
- Sources: mercedes-of1721-chassis-2022; volvo-b8r-chassis-2019

###### One formulated mineral-oil steering hydraulic fluid (`hydraulic_oil`)

Only the actual certified single mineral-based hydraulic formulation with at least70% petroleum oil. Retain public Volume m3; meter net fresh fills, returns and recovery, recording actual retained delivery volume. Measured density/temperature may reconcile its kg within M, without replacing the exchange property or assuming reservoir capacity equals fill.

- Selected flow: Hydraulic Fluid `30691a38-a947-4b41-991e-194f6c9aa88f`
- Flow property / unit: Volume `93a60a56-a3c8-22da-a746-0800200c9a66` / m3
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_oil_volume.
- Value mode: calculated_value
- Specificity: product_specific
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: reference_flow
- Evidence kind: calculated_from_collection
- Collection protocol: `cp_oil_volume`
- Sources:

###### One formulated mineral engine lubricating oil (`engine_oil`)

Only if this exact certified single formulation is actually freshly supplied for the declared installed engine/gearbox/chassis system. Weigh net fill/top-up and returns; record actual concentration and retained mass. Exclude supplier-prefilled fluids and recovered test fluid; never repeat purchased mixture constituents or prescribe this formulation/fill for all models.

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

###### One formulated mineral automatic-transmission fluid (`gearbox_oil`)

Only if this exact certified single formulation is actually freshly supplied for the declared installed engine/gearbox/chassis system. Weigh net fill/top-up and returns; record actual concentration and retained mass. Exclude supplier-prefilled fluids and recovered test fluid; never repeat purchased mixture constituents or prescribe this formulation/fill for all models.

- Selected flow: One formulated mineral automatic-transmission fluid
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_material.
- Value mode: calculated_value
- Specificity: product_specific
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: reference_flow
- Evidence kind: calculated_from_collection
- Collection protocol: `cp_material`
- Sources:

###### One 50%-by-mass ethylene-glycol aqueous engine coolant (`coolant`)

Only if this exact certified single formulation is actually freshly supplied for the declared installed engine/gearbox/chassis system. Weigh net fill/top-up and returns; record actual concentration and retained mass. Exclude supplier-prefilled fluids and recovered test fluid; never repeat purchased mixture constituents or prescribe this formulation/fill for all models.

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

###### One mineral-oil lithium-soap chassis grease (`grease`)

Only if this exact certified single formulation is actually freshly supplied for the declared installed engine/gearbox/chassis system. Weigh net fill/top-up and returns; record actual concentration and retained mass. Exclude supplier-prefilled fluids and recovered test fluid; never repeat purchased mixture constituents or prescribe this formulation/fill for all models.

- Selected flow: One mineral-oil lithium-soap chassis grease
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_material.
- Value mode: calculated_value
- Specificity: product_specific
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: reference_flow
- Evidence kind: calculated_from_collection
- Collection protocol: `cp_material`
- Sources:

###### One 32.5%-by-mass aqueous diesel-exhaust urea solution (`urea_solution`)

Only if this exact certified single formulation is actually freshly supplied for the declared installed engine/gearbox/chassis system. Weigh net fill/top-up and returns; record actual concentration and retained mass. Exclude supplier-prefilled fluids and recovered test fluid; never repeat purchased mixture constituents or prescribe this formulation/fill for all models.

- Selected flow: One 32.5%-by-mass aqueous diesel-exhaust urea solution
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

### Process: Factory checks and chassis acceptance (`acceptance`)

#### Inputs

##### Product flows

###### Low-voltage grid electricity (`electricity_acceptance`)

Meter attributable stage electricity, including actual rework and idle. Public identity is user-side grid-average AC below1kV; different voltage or self-generation requires a matching separate card. Bought operations are not repeated as local electricity.

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

###### One petroleum diesel grade consumed in factory engine tests (`test_diesel`)

Only this actual certified fossil petroleum grade, narrowing the unspecified public gas-oil identity. Reconcile weighed or density-corrected fills, returns, test consumption and final residual separately. Retained fuel kg is included in M and not emitted at this factory gate. HVO/biodiesel options in manufacturer literature do not prove fossil carbon; alternative fuel requires its own composition/identity.

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

###### One petroleum diesel grade retained in accepted chassis delivery (`delivery_diesel`)

Only this actual certified fossil petroleum grade, narrowing the unspecified public gas-oil identity. Reconcile weighed or density-corrected fills, returns, test consumption and final residual separately. Retained fuel kg is included in M and not emitted at this factory gate. HVO/biodiesel options in manufacturer literature do not prove fossil carbon; alternative fuel requires its own composition/identity.

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

#### Outputs

##### Product flows

###### Accepted complete diesel engine-fitted bodyless road-bus chassis (`finished_chassis`)

The configured complete cabless/bodyless steel ladder-frame rolling chassis, including installed propulsion engine, driveline, axles, suspension, brakes, steering, wheels, declared electrics and actually retained fluids/fuel. It is an incomplete road vehicle awaiting coachwork, but a complete accepted chassis assembly for this reference. Output1kg of measured accepted net M; neither gross ratings nor catalogue running-order weight supply M.

- Selected flow: Chassis fitted with engines, for motor vehicles `78532304-4355-400e-8bab-e2f6858050db`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: 1 kg
- Value mode: fixed_value
- Specificity: product_specific
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: reference_flow
- Evidence kind: collected_record
- Collection protocol: `cp_mass`
- Sources: mercedes-of1721-chassis-2022; volvo-b8r-chassis-2019

##### Waste flows

###### Contained used mineral steering hydraulic oil (`spent_hydraulic_oil`)

Only actual separately exported used and contaminated petroleum-based steering oil. Weigh receiver-bound mass and record composition/water content and actual treatment gate. Recovered test oil is internal reuse; fresh/drained unused oil is not automatically this used-oil identity.

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

###### Fossil carbon dioxide from actual factory engine testing (`air_co2`)

Only actual measured post-control release of this single species to immediate air, submedium unspecified. Integrate matched concentration/exhaust volume over actual attributable tests; verify fossil carbon for CO2/CO and separate NO/NO2 speciation. NOx as NO2 equivalent, N2O, long-term air or regulatory limits cannot supply this exchange. No test combustion/emission is mandatory.

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

###### Fossil carbon monoxide from actual factory engine testing (`air_co`)

Only actual measured post-control release of this single species to immediate air, submedium unspecified. Integrate matched concentration/exhaust volume over actual attributable tests; verify fossil carbon for CO2/CO and separate NO/NO2 speciation. NOx as NO2 equivalent, N2O, long-term air or regulatory limits cannot supply this exchange. No test combustion/emission is mandatory.

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

###### Nitrogen monoxide from actual factory engine testing (`air_no`)

Only actual measured post-control release of this single species to immediate air, submedium unspecified. Integrate matched concentration/exhaust volume over actual attributable tests; verify fossil carbon for CO2/CO and separate NO/NO2 speciation. NOx as NO2 equivalent, N2O, long-term air or regulatory limits cannot supply this exchange. No test combustion/emission is mandatory.

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

###### Nitrogen dioxide from actual factory engine testing (`air_no2`)

Only actual measured post-control release of this single species to immediate air, submedium unspecified. Integrate matched concentration/exhaust volume over actual attributable tests; verify fossil carbon for CO2/CO and separate NO/NO2 speciation. NOx as NO2 equivalent, N2O, long-term air or regulatory limits cannot supply this exchange. No test combustion/emission is mandatory.

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

###### C-flute corrugated cardboard protection with fibre at least80% (`cardboard`)

Only actual C-flute single-design supplied protection matching the public recycled-containing multi-layer fibreboard identity. Weigh net protection separately; it is excluded from chassis M.

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

###### Non-cellular non-adhesive unreinforced LDPE protection film (`film`)

Only actual single LDPE film supplied for dispatch protection, matching public non-laminated/non-supported state. Weigh net film separately and exclude it from M; reusable transport fixtures are not fresh film.

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
| `allocation_causal` | shared_operations | Separate configurations and orders by direct measurement first. Reconcile shared rail/finish/frame/integration/test electricity and consumables using measured causal material throughput, actual stage time/load and served orders, including idle/rework/reject burden. Unequal chassis are not allocated equally by count by default. Record driver justification, uncertainty and sensitivity from actual foreground records; no universal mass/time factor. |  |
| `allocation_receipts` | assemblies | Purchased/customer-furnished frame, engine, gearbox and axle carry actual upstream inventory burdens and gates; they are not zero-burden receipts. Their included components/fluids replace independent inputs and local manufacture. Actual reusable test fixtures/air supply/recovered fluid require causal service/replacement records, not whole-item consumption each chassis. |  |
| `allocation_balance` | batch_and_exports | Reconcile receipts, retained installed net mass, WIP, returns/recovery and each exported waste for the same configuration/period. Use actual measured tyre kg/item and fluid density only for physical mass checks; count/Volume properties remain. Separate consumed test fuel and delivery residual. Allocate rejects/rework to accepted units. No automatic avoided-material/disposal credit; real multi-output manufacture needs explicit functions and evidence-based allocation. |  |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cp_mass | acceptance | reference_product | calibrated net weighing | model; configuration; serial number; accepted net mass M; scale/tare; installed systems; retained fluids/fuel; accepted geometry; acceptance; temporary/packaging exclusions | Weigh the accepted complete machine on a calibrated scale, excluding transport packaging; reconcile the same configuration and acceptance record. | kg | each complete accepted configuration | same declared production period; disclose gaps | declared engine-fitted chassis factory | accepted net mass per machine | scale calibration; net weigh ticket; complete-chassis acceptance |
| cp_configuration | frame; integration; acceptance | configuration | BOM/interface/acceptance ledger | model/serial/drawing revision; ladder frame/joints; engine position/specification; gearbox/axles; suspension/brake/wheel/steering; cooling/exhaust/electrics; supplier scope; shipping versus accepted state; site/period; criteria/results | Crosswalk every actual BOM item and operation to an atomic exchange or justified exclusion; verify frame make-or-buy and bought internals. Record one actual configuration and acceptance geometry, excluded temporary seat/controls and retained fluids. Catalogue running-order/gross/axle values cannot supply M. | kg | each build revision/acceptance | same declared production period; disclose gaps | declared engine-fitted chassis factory | one traceable complete configuration | signed BOM/drawing; supplier scope; checks/test results |
| cp_material | fabrication; finishing; integration; packout | single stock/consumable | net issues and weighing | single grade/design/formulation; state; kg; issues/returns/recovery; measured density/conditions if converted; served orders; accepted count | Weigh each actual specified plate, powder, disc, water, engine/gearbox oil, coolant, grease, exhaust solution and protection separately. Reconcile net fresh make-up, returns and remaining stock. Supplier-prefilled fluids and purchased mixture constituents are not repeated; no universal density, concentration or dose. | kg | each issue/return and batch | same declared production period; disclose gaps | declared engine-fitted chassis factory | attributable net mass / accepted machines of the same configuration | scale; SDS/certificate; inventory/served-order ledger |
| cp_parts | frame; integration | single installed component | component weighing and completeness | part/design; received/installed kg; actual count; included internals/fluids; country/supply gate; make-or-buy; accepted count | Weigh each net specified frame/rail/crossmember/bolt/nut, engine/gearbox/shaft, axle/suspension/brake/steering/wheel rim, tank/cooling/exhaust/electrical component or use actual verified lot-specific mass/count records. Exclude supplier-included internals and expand actual missing mounts, hubs, brackets, reservoirs, filters, pipe fittings, brake linings, sensors and wiring cards before completeness claims. | kg | each supply lot/build batch | same declared production period; disclose gaps | declared engine-fitted chassis factory | attributable installed mass / accepted machines of the same configuration | scale; component design/certificate; supplier inclusion and BOM |
| cp_count | integration | bus_tyre | design-specific item count | single tyre design; installed count; receipts/returns; bought inclusions; measured lot-specific kg/item; accepted count | Count actual installed tyres of each selected design, preserving public Number of items. Obtain actual lot-specific net kg/item through calibrated weighing for physical BOM mass reconciliation only; no universal wheel count or part weight. | Item(s) | each supply lot/build batch | same declared production period; disclose gaps | declared engine-fitted chassis factory | attributable installed item count / accepted machines of the same configuration | BOM/count ledger; calibrated part weighing |
| cp_oil_volume | integration | hydraulic_oil | net formulated-fluid volume | formulation/oil fraction; metered L or m3; fills/returns/recovery; retained fill; actual density/temperature for physical mass; accepted count | Meter actual net mineral steering-fluid supply and retain public Volume; convert1 L =0.001 m3. Reconcile fill/return/recovery/retained amounts. Measure density at stated temperature to check physical kg within M, without replacing Volume or assuming reservoir capacity. | m3 | each metered fill/return and batch | same declared production period; disclose gaps | declared engine-fitted chassis factory | attributable net fluid volume / accepted machines of the same configuration | meter calibration; composition; density/temperature and fill balance |
| cp_energy | fabrication; finishing; frame; integration; acceptance | electricity | meter and causal allocation | stage; voltage/source; kWh; interval; actual load/time; idle/rework; shared total; accepted count | Meter actual stage energy; convert1 kWh =3.6 MJ and reconcile actual causal loads/times and shared measured totals. Engine rated power, bus duty or installed motor rating cannot prove factory consumption. | MJ | each metered interval/batch | same declared production period; disclose gaps | declared engine-fitted chassis factory | attributable electrical energy / accepted machines of the same configuration | meter calibration; bill; causal-load ledger |
| cp_fuel | acceptance | test_diesel; delivery_diesel | separate consumed/retained fuel ledger | single petroleum grade; fossil/biogenic certificate; fills/returns; consumed kg; retained kg; supplied engine fuel; density/temperature if volume; actual test interval; accepted count | Weigh or meter with actual density/temperature fills, supplier fuel, returns and final residual; determine consumed test fuel from measured balance. Retain delivery residual separately, include its kg in M and exclude supplier-prefilled duplicates. No rated-power times hours fuel estimate without measured relation. | kg | each actual engine test/final fill | same declared production period; disclose gaps | declared engine-fitted chassis factory | separate attributable consumed and retained kg / accepted machines of the same configuration | fuel meter/scale; composition/balance; test/acceptance record |
| cp_waste | fabrication; finishing; acceptance | single exported waste | segregated export weighing | single waste; alloy/formulation; wet/dry; oil/water/metal content; exported kg; recovery; receiver; accepted count | Weigh each actual offcut, clean chip, spent disc, captured dust, powder overspray, contained cleaning solution and used steering oil separately. Record composition and receiver treatment. Internal recovered fluid is not export; actual direct water release requires separate species/medium cards. | kg | each export and batch | same declared production period; disclose gaps | declared engine-fitted chassis factory | attributable exported waste mass / accepted machines of the same configuration | scale; composition; receiver/treatment receipt |
| cp_emission | finishing; acceptance | single air species | species-specific post-control monitoring | species; fossil/biogenic origin; medium/submedium; size; measured concentration/exhaust volume/time; identical reference conditions; controls/background; actual interval; accepted count | Measure actual post-control species concentration and exhaust volume on identical sampling/temperature/pressure/moisture conditions; integrate over actual attributable intervals, correct background and record uncertainty. Verify immediate unspecified air and unspecified size where selected. Measure NO and NO2 separately; NOx as NO2 equivalent is insufficient without speciation. CO2/CO need verified fossil carbon; no limit-based or mandatory emission quantity. | kg | representative actual emitting intervals | same declared production period; disclose gaps | declared engine-fitted chassis factory | attributable measured species mass / accepted machines of the same configuration | monitoring; sampler/flow calibration; carbon/speciation/medium evidence |
| cp_water_resource | finishing | groundwater | well meter and aquifer record | site/country; renewable freshwater aquifer; m3; interval; pumping/treatment; reuse; accepted count | Meter actual qualifying factory-well abstraction, expand pumping/treatment and exclude internal circulation. Evidence aquifer freshwater/renewability; no duplicate tap-water receipt. | m3 | each metered interval/batch | same declared production period; disclose gaps | declared engine-fitted chassis factory | attributable abstracted volume / accepted machines of the same configuration | meter; aquifer/site evidence; water balance |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `normalize_mass` | all inventory rows | q_ref = q_item / M; q_item = exchange amount per one accepted finished machine; q_ref = exchange amount per 1 kg reference flow. | q_item; M; cp_mass | q_ref |  |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `quality_configuration` | all inventory rows | Use identical model/configuration/period/count for physically measured positive M and every numerator. Reconcile frame/engine/axle supplier completeness, actual retained fluids/fuel, tyre counts/physical mass, steering fluid Volume/density and accepted versus shipping geometry. A catalogue net/running-order/gross rating does not meet cp_mass. | cp_configuration; cp_mass; cp_parts; cp_count; cp_oil_volume; cp_fuel |
| `quality_coverage` | inventory_and_links | Disclose unresolved identities, actual missing BOM/route cards, measurements, upstream/transport/receiver links and uncertainty. Initial component examples are not a complete bill of materials. Determine local/bought steel/finish, brake/suspension/engine variants and test operations from factory evidence. No universal grade/yield/part mass, fluid fill/density, wheel count, test duration, emission, life or allocation factor. | cp_configuration; cp_material; cp_energy; cp_waste; cp_emission; cp_water_resource |
| `quality_sources` | architecture_evidence | Mercedes OF1721L/59 physical pp.1–2, printed February2022 on p.2, and Volvo B8R4x2 Euro6 pp.1–4 with2019-11-26 footer on pp.3–4, are historical model-specific evidence only. Mercedes p.2 gives bolted frame, air suspension, drum brakes and running-order weight inclusions; Volvo contrasts shipping geometry, engine/brake/electrical/fuel options. They do not prove universal ladder-frame construction, current conformity, actual net M, factory quantities or service life. No catalogue mass/rating/capacity adopted. | mercedes-of1721-chassis-2022; volvo-b8r-chassis-2019 |

## 9. Validation Rules

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| `validation_reference` | reference_flow | Require one complete configured bodyless/cabless diesel ladder-frame road-bus chassis, positive physically measured M kg and cp_mass record. Reference output is1kg; use normalize_mass for kg/MJ/m3/Item(s) numerators with unchanged public properties. A complete chassis is not a complete road vehicle; retain actual delivery exclusions and acceptance geometry. |  |
| `validation_bom` | inventory | Reconcile actual rails/crossmembers/joints, engine/gearbox/driveline, axles/suspension/wheels, brake/steering, fuel/cooling/exhaust/electrics and fluids with drawings/BOM and supplier gates. Distinguish frame receipt versus local assembly, drum versus disc, actual engine placement, received versus locally filled fluid and consumed versus residual diesel. Expand all actual missing cards/routes before completeness claims. |  |
| `validation_identity` | all inventory rows | Verify public type, material/formulation/design, original reference property/unit group, route/state/completeness/geography and official bilingual names. Road engine is not a non-propulsion engine; trailer rim/axle is not an established bus component. NO is not NO2/N2O; fossil carbon is not biogenic, immediate unspecified air not long-term or soil. Groundwater is a resource, tap water a product, contained water/oil a waste, and emitted dust not captured dust. |  |
| `validation_claims` | dataset_claims | No complete cradle-to-gate claim without actual route and linked upstream/transport/receiver coverage. Manufacturing mass does not establish equal carrying function, roadworthiness, downstream body fit, lifetime or methodology approval. Independent scientific review remains pending. |  |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | Configured foreground engine-fitted bodyless bus-chassis manufacture; heading does not assert publication |
| downstream_use | secondary_dataset; background_dataset |
| allowed_use | Same complete chassis configuration manufacture scaled with measured M, with separately declared upstream/transport/treatment links |
| excluded_use | Complete vehicles/coachwork, road passenger/goods services, use/maintenance/lifetime/end of life, other chassis/propulsion routes and methodology approval |
| required_metadata | All reference qualifiers; drawings/BOM/serial; frame material/joints/make-or-buy; engine location/duty; driveline/brake/suspension/steering/wheel/electrical/cooling/exhaust design and supplier inclusions; actual formulated fills/residual fuel; calibrated M/tare/delivery exclusions/accepted geometry; actual checks/results; site/period/count; supplier/receiver gates and causal allocation |
| required_quality_disclosure | Unresolved identities/BOM/routes/measurements/links; actual count/Volume/physical-mass reconciliation; rejects/rework/recovery; allocation/uncertainty and historical evidence limits |
| update_trigger | Frame/engine/gearbox/axle/brake/suspension/steering/electrical design, supplier completeness, accepted/shipping configuration, fluid/finish formulation, actual manufacture/test plan, site/period or allocation change |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| mercedes-of1721-chassis-2022 | handbook | Mercedes-Benz, OF1721L/59 technical sheet, Spanish, physical pp.1–2 (unnumbered); p.2 printed Fecha de impresión: Febrero 2022. https://www.mercedes-benz-bus.com/content/dam/mb/ar/es/models/interurbanos/of1721/OF%201721%20L%2059.pdf | Historical bodyless front-engine chassis and gearbox/axle architecture p.1; bolted ladder frame, air suspension, steering gear, drum/pneumatic brakes, wheels/electrics and empty running-order mass footnote p.2. Footnote includes full fuel, spare wheel, fire extinguisher/toolbox and excludes driver; catalogue mass is not our net M. No mandatory steel grade, local welding/finish, quantities, current conformity or life. |
| volvo-b8r-chassis-2019 | handbook | Volvo Buses, B8R4x2 Euro6 data sheet, printed/physical pp.1–4; footer BED 380858 2019-11-26 on pp.3–4 (URL filename2020 is not the printed edition). https://www.volvobuses.com/content/dam/volvo-buses/markets/master/coaches/chassis/volvo-b8r/specifications/Data-sheet-B8R-4-2-Euro-6-EN-2020.pdf | Historical bodyless rear-engine example and transport-versus-approved wheelbase p.1; actual engine/gearbox/suspension/fuel options p.2; disc brakes, steering/cooling/exhaust and spare-wheel/rim options p.3; separate starting/consumer electrical circuits p.4. Used to require actual configuration and avoid universal drum brakes, engine placement, fossil fuel or battery count; does not prove every B8R is a bolted ladder frame. No rated loads/tank sizes/catalogue masses, conversion factor, test recipe, current emission conformity or life adopted. |
