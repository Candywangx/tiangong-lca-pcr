---
pcr_id: pcr.metal-products-machinery-and-equipment.special-purpose-machinery.pedestrian-controlled-agricultural-tractor
language: en-US
status: candidate
sync_with: pcr.zh-CN.md
---

# Pedestrian-controlled agricultural tractor

## 1. Scope and Applicability

This candidate PCR covers factory manufacture of new complete pedestrian-controlled agricultural traction power units, exemplified by two-wheel tractors operated through handlebars while the operator walks. The delivered unit includes its engine, transmission, drive wheels, controls, installed guards and declared first fills. Detachable rotary tillers, ploughs, mower decks, cutter bars, trailers and other implements are excluded from this reference even when marketed as a combined package; declare and model them separately. Exclude ride-on tractors, industrial platform tractors, self-propelled mowing machines defined by their cutting function, standalone engines or parts, remanufacture, farm operation, crop yield, maintenance and end of life. BCS PowerSafe and the historical Action document establish design alternatives, not industry manufacturing quantities. The representative route buys finished powertrain assemblies, fabricates and finishes structures where actually performed, assembles and adjusts the unit, and records factory acceptance. Scientific methodology review remains pending.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.metal-products-machinery-and-equipment.special-purpose-machinery.pedestrian-controlled-agricultural-tractor |
| classification_refs | CPC 3.0 44141; candidate narrower scope; no accepted mapping asserted |
| covered_products | New complete pedestrian-controlled agricultural tractor power units |
| excluded_products | Ride-on and track-laying tractors; industrial platform tractors; detachable implements; mower outputs; standalone parts |
| representative_product | One declared mechanical-transmission two-wheel tractor configuration, with a specified gasoline engine; diesel and other transmissions require their actual separate configuration records |
| production_route | Specified assembly procurement; actual structural fabrication and finishing; engine/drivetrain/controls fitting; adjustment and acceptance |
| market_state | Accepted complete traction unit at factory gate, detachable implements excluded |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Manufacture one specified pedestrian-controlled agricultural traction power unit; no field-service amount is supplied |
| How much | 1 kg share of accepted net complete unit; actual machine scaling uses measured M |
| How well | Pass the declared configuration-specific factory acceptance for propulsion, direction/PTO controls, handlebar adjustment, clutch, braking and installed protective/safety devices; functions only where fitted |
| How long or cycle | One manufacturing delivery; no assumed operating life, hectares or crop yield |
| reference_flow_link | `finished_machine` |

| Field | Value |
| --- | --- |
| Reference amount | 1 |
| Reference product flow | Pedestrian controlled tractors `67fe15ac-d2bb-440b-a498-321e3b4c7b7c` |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | model; agricultural traction function; pedestrian operator mode; engine type/model/fuel/starter; transmission and reverser; differential; clutch; axle and wheel construction; tyre size; handlebar/controls; PTO and coupling; brakes; guards and safety controls; installed options; supplier assembly completeness; fluid and residual fuel inclusion; excluded implements; measured net M; site; period; gate; packaging |

Declare all qualifiers. Weigh the accepted configured power unit, excluding removable implements, loose spares and packaging. Catalogue weights including a tiller cannot substitute for M. Equal mass does not establish equal agricultural service; no engine power or catalogue weight is used as a mass factor.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| `reference_mass` | reference product | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | M = accepted net mass of one complete machine of the same configuration in kg; collect using cp_mass. |
| `electricity_energy` | electricity_fabrication; electricity_finishing; electricity_assembly; electricity_factory_test | Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` | MJ | Retain metered kWh and convert with the exact identity 1 kWh = 3.6 MJ; energy remains energy. Selected supply is grid-average AC below1kV. |
| `liquid_mass` | tap_water; engine_oil; gear_oil; test_gasoline; test_diesel | Mass | kg | Weigh liquids or retain volume, measured/supplier-confirmed density, temperature and the explicit mass conversion in cp_material/cp_fuel. No generic density or calorific value is assumed. |

## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Specified stock and complete purchased components delivered to the tractor factory |
| starting_condition_role | Foreground-module inputs; supplier manufacture and incoming transport are separate linked activities |
| product_classification_scope | Pedestrian-controlled agricultural traction unit within CPC44141; not an implement package or mowing service |
| recursive_input_rule | A purchased complete tractor is an input with its supplier gate, not a reason to recursively duplicate this foreground. Reuse/remanufacture is another route. |
| upstream_dataset_requirement | Match material grades, assembly completeness, fluid inclusion, supply route, voltage and geography; disclose absent upstream, transport and treatment links |
| disclosure | Declare gates, actual work orders, outsourced operations, overhead allocation and packaging. This foreground module is not a complete cradle-to-gate inventory without demonstrated compatible upstream and treatment/transport coverage. |

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| `boundary_operations` | factory_gate | Include receipt checks, all performed stock cutting/forming/drilling/welding/machining, applicable finishing, assembly, adjustments, acceptance, attributable rework and dispatch protection. Hydraulics, heat treatment and foundry operations are included only if actually performed; no on-site casting is presumed from a purchased housing. |  |
| `boundary_completeness` | actual_configuration | Crosswalk every actual BOM and operation to one atomic exchange or documented exclusion. Add actual housing blanks, gears, shafts, brakes, belts, seals, grips, nuts, washers, hoses, clutch oil, cutting-fluid formulation, shielding gas, treatment residues and measured emissions separately. These starting cards are not a universal complete BOM. Hydrostatic or belt transmissions require their actual components and operations. |  |
| `boundary_test` | factory_test | Factory powered-run fuel and measured releases are inside the gate; later farm fuel and crop production are outside. Supplier engine tests remain upstream unless repeated at this factory. Record test-fuel consumption separately from any fuel retained for delivery. |  |
| `boundary_implements` | reference_product | The traction unit is separate from detachable implements. Do not normalize a bundled tiller/mower by the power-unit M or use a mower PCR for this tractor. Reconcile combined sale mass to separately measured products and packaging. | `bcs-powersafe`; `bcs-action-historical` |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| `fabrication` | Structural fabrication and machining | conditional | Site cutting, forming, drilling, machining or welding for the configuration | Foreground manufacturing stage; internal WIP transfers remain in the factory module | per 1 kg reference flow; collected per one accepted finished machine |
| `finishing` | Surface preparation and finishing | conditional | Site surface preparation or coating | Foreground manufacturing stage; internal WIP transfers remain in the factory module | per 1 kg reference flow; collected per one accepted finished machine |
| `assembly` | Configured power-unit assembly | required | Every accepted complete tractor | Foreground manufacturing stage; internal WIP transfers remain in the factory module | per 1 kg reference flow; collected per one accepted finished machine |
| `factory_test` | Factory adjustment and acceptance | required | Every finished tractor; powered run only if the actual acceptance plan requires it | Foreground manufacturing stage; internal WIP transfers remain in the factory module | per 1 kg reference flow; collected per one accepted finished machine |
| `packout` | Dispatch protection | conditional | Packaging applied at the factory gate | Foreground manufacturing stage; internal WIP transfers remain in the factory module | per 1 kg reference flow; collected per one accepted finished machine |

| Operation | Stage | Required site record and route condition |
| --- | --- | --- |
| Receipt and make-or-buy resolution | fabrication; assembly | Record component completeness and stock state against BOM, segregating incoming transport and receipt losses |
| Cutting and forming | fabrication | If site-performed, record cut plan, stock issues, bending/tool settings, metered energy, offcuts and rejects |
| Drilling and machining | fabrication | If site-performed, trace housing/shaft/structural blanks, machine hours, tool energy, chips and each cutting-fluid recipe; purchased finished gears do not imply site heat treatment |
| Welding and grinding | fabrication | If site-performed, record weld method, individual wire/gas, electricity, collected dust, monitored releases and rework |
| Cleaning, coating and curing | finishing | If site-performed, distinguish dry preparation and wet baths; retain bath recipe/renewal, water supply, powder recovery, cure energy and waste destination. Other finish/heat source expands rows |
| Engine and transmission installation | assembly | Record actual engine mount, clutch and drivetrain interfaces, fastener torque, lubrication and purchased assembly inclusion |
| Handlebars, controls, wheels and guards | assembly | Record cable adjustment, reverser/PTO linkage, handlebar lock, wheel alignment, braking and safety controls where fitted; no universal component design prescribed |
| Acceptance and rework | factory_test | Retain the actual acceptance checklist, test duration/load, rig energy, powered-run fuel, measured releases and failures/retest; weigh M after acceptance with fluid and residual-fuel state declared |
| Packout | packout | Record each dispatch-protection material and loss outside machine M; factory fixtures are not supplied product |

### Process: Structural fabrication and machining (`fabrication`)

#### Inputs

##### Product flows

###### Hot-rolled non-alloy steel sheet (`steel_sheet`)

Only for site-cut or formed brackets and guards. Record one grade, thickness, issued mass and returns; exclude steel inside bought assemblies.

- Selected flow: Hot-rolled non-alloy steel sheet
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_material.
- Value mode: calculated_value
- Specificity: product_specific
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: reference_flow
- Evidence kind: calculated_from_collection
- Collection protocol: `cp_material`
- Sources:

###### Welded circular steel tube (`round_steel_tube`)

Conditional on site manufacture of tubular handlebars. Weigh one declared grade and diameter before cutting, net of returns; finished purchased handlebars replace this route.

- Selected flow: Welded circular steel tube
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_material.
- Value mode: calculated_value
- Specificity: product_specific
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: reference_flow
- Evidence kind: calculated_from_collection
- Collection protocol: `cp_material`
- Sources:

###### Solid steel arc-welding wire (`welding_wire`)

Only for the actual solid-wire weld route; record grade and net issued wire mass including rework. Shielding gas of the actual recipe requires its own row.

- Selected flow: Solid steel arc-welding wire
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

Meter the electricity of this stage and its attributable rework, separating other stage meters. This selected identity is grid-average alternating current delivered to a user below 1 kV; other voltage, self-generation or contracted source requires a distinct matching identity.

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

###### Untreated steel offcuts (`steel_scrap`)

Weigh segregated unprocessed steel offcuts and clean machining chips exported from actual fabrication. Oily chips need a separate waste row; internal transfers and reused offcuts are not exported waste.

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

###### Collected dry steel grinding dust (`grinding_dust`)

Only for weighed collected dry grinding dust transferred to a receiver; disclose metal composition and contamination. This is distinct from an airborne release.

- Selected flow: Collected dry steel grinding dust
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

###### Airborne particulate (`fabrication_particulate`)

Only if monitoring establishes an actual particulate release to air with unspecified particle size and air subcompartment. Retain outlet concentration, exhaust volume, control equipment and interval; no welding factor or mandatory release is assumed.

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

### Process: Surface preparation and finishing (`finishing`)

#### Inputs

##### Product flows

###### Low-voltage grid electricity (`electricity_finishing`)

Meter the electricity of this stage and its attributable rework, separating other stage meters. This selected identity is grid-average alternating current delivered to a user below 1 kV; other voltage, self-generation or contracted source requires a distinct matching identity.

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

###### Dry powder paint (`powder_paint`)

Only if the factory applies purchased dry powder coating. Record one resin formulation and net issued mass after recovered powder returned to stock; liquid paint is a separate formulation and route.

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

###### Tap water (`tap_water`)

Only for wet cleaning with supplied drinking-quality tap water. Measure kg; a volume meter requires retained density evidence and conversion to mass. Raw abstraction, deionised water and wastewater are different identities.

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

###### Anhydrous sodium carbonate cleaning reagent (`sodium_carbonate`)

Only if the cleaning recipe purchases this reagent separately. Record purity, dry issued mass and bath replacement; water remains separate. Different chemicals and hydrated forms require individual rows.

- Selected flow: Anhydrous sodium carbonate cleaning reagent
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

##### Waste flows

###### Solid waste powder-paint overspray (`powder_waste`)

Weigh unrecovered solid overspray exported after internal recovery and declare formulation and treatment destination. No universal overspray rate is set.

- Selected flow: Solid waste powder-paint overspray
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_waste.
- Value mode: calculated_value
- Specificity: product_specific
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: reference_flow
- Evidence kind: calculated_from_collection
- Collection protocol: `cp_waste`
- Sources:

###### Untreated aqueous sodium-carbonate metal-cleaning wastewater (`cleaning_wastewater`)

Only for this bath exported to external treatment. Record mass, pH, carbonate and measured contamination; internal reuse is not an export. On-site treatment needs its own inventory and separate measured environmental releases.

- Selected flow: Untreated aqueous sodium-carbonate metal-cleaning wastewater
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_waste.
- Value mode: calculated_value
- Specificity: product_specific
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: reference_flow
- Evidence kind: calculated_from_collection
- Collection protocol: `cp_waste`
- Sources:

### Process: Configured power-unit assembly (`assembly`)

#### Inputs

##### Product flows

###### Low-voltage grid electricity (`electricity_assembly`)

Meter the electricity of this stage and its attributable rework, separating other stage meters. This selected identity is grid-average alternating current delivered to a user below 1 kV; other voltage, self-generation or contracted source requires a distinct matching identity.

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

###### Finished single-cylinder gasoline engine (`petrol_engine`)

Only in the gasoline configuration. Weigh one specified purchased complete engine and record starter, filter, tank, guarding and factory-fill completeness. Do not count its internal metals or upstream engine manufacture again.

- Selected flow: Finished single-cylinder gasoline engine
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_parts.
- Value mode: calculated_value
- Specificity: product_specific
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: reference_flow
- Evidence kind: calculated_from_collection
- Collection protocol: `cp_parts`
- Sources:

###### Finished single-cylinder diesel engine (`diesel_engine`)

Only in the diesel configuration. Weigh the specified purchased complete engine and record electric/recoil starter inclusion, air filter, delivered oil and fuel condition. It is not combined with the gasoline engine input for the same machine.

- Selected flow: Finished single-cylinder diesel engine
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_parts.
- Value mode: calculated_value
- Specificity: product_specific
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: reference_flow
- Evidence kind: calculated_from_collection
- Collection protocol: `cp_parts`
- Sources:

###### Complete mechanical two-wheel-tractor transmission assembly (`transmission`)

Representative mechanical route: weigh one specified complete gearbox with declared differential, reversing mechanism and axle inclusion. Bearings, brakes, clutch and oil included by its supplier are excluded from separate component rows. Site gear/housing manufacture instead expands actual blanks, machining, heat treatment and lubricant rows.

- Selected flow: Complete mechanical two-wheel-tractor transmission assembly
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_parts.
- Value mode: calculated_value
- Specificity: product_specific
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: reference_flow
- Evidence kind: calculated_from_collection
- Collection protocol: `cp_parts`
- Sources:

###### Finished dry friction clutch (`dry_clutch`)

Only for a specified separately supplied dry-clutch configuration. Record design, friction lining composition and mass; exclude this row if included in transmission or if a wet clutch is fitted. BCS Action is a historical route example.

- Selected flow: Finished dry friction clutch
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_parts.
- Value mode: calculated_value
- Specificity: product_specific
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: reference_flow
- Evidence kind: calculated_from_collection
- Collection protocol: `cp_parts`
- Sources:

###### Finished multi-disc oil-bath hydraulic clutch (`wet_clutch`)

Only for a specified separately purchased oil-bath hydraulic clutch, as illustrated by PowerSafe. Record complete mass and included oil/pump; separately added oil requires its own row. Do not also count a dry clutch for this configuration.

- Selected flow: Finished multi-disc oil-bath hydraulic clutch
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_parts.
- Value mode: calculated_value
- Specificity: product_specific
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: reference_flow
- Evidence kind: calculated_from_collection
- Collection protocol: `cp_parts`
- Sources:

###### Finished steel handlebar assembly (`handlebar`)

Only if purchased finished; record reversibility, adjustment mechanism, grips and included controls and weigh the complete assembly. An in-house tube fabrication route replaces this purchased input.

- Selected flow: Finished steel handlebar assembly
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_parts.
- Value mode: calculated_value
- Specificity: product_specific
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: reference_flow
- Evidence kind: calculated_from_collection
- Collection protocol: `cp_parts`
- Sources:

###### Finished mechanical throttle-control cable (`throttle_cable`)

Weigh one specified separately supplied cable including its sheath and end fittings. Exclude cables already inside the handlebar/engine assembly; other control cables need separate rows.

- Selected flow: Finished mechanical throttle-control cable
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_parts.
- Value mode: calculated_value
- Specificity: product_specific
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: reference_flow
- Evidence kind: calculated_from_collection
- Collection protocol: `cp_parts`
- Sources:

###### New pneumatic rubber agricultural traction tyre (`agricultural_tyre`)

Only for a separately supplied tyre of one declared size and ply rating. Weigh installed tyres; a complete bought wheel replaces tyre and rim rows. Steel cage wheels require a distinct exchange.

- Selected flow: New pneumatic rubber agricultural traction tyre
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_parts.
- Value mode: calculated_value
- Specificity: product_specific
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: reference_flow
- Evidence kind: calculated_from_collection
- Collection protocol: `cp_parts`
- Sources:

###### Finished steel agricultural traction-wheel rim (`steel_rim`)

Only for separately supplied rims installed on the tractor. Record one rim design, diameter, hub interface and mass; tyre and complete wheel must not be double counted.

- Selected flow: Finished steel agricultural traction-wheel rim
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_parts.
- Value mode: calculated_value
- Specificity: product_specific
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: reference_flow
- Evidence kind: calculated_from_collection
- Collection protocol: `cp_parts`
- Sources:

###### Finished ball bearing (`ball_bearing`)

Weigh one specified separately purchased ball-bearing design. This card restricts the broader official bearing identity to that concrete design; bearings inside purchased engine/transmission are excluded.

- Selected flow: Ball or roller bearings `9b10184f-db9d-4cc7-94b5-02ab19ca370d`
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

Weigh one declared grade, coating and dimension of installed bolt. Nuts and washers supplied separately need individual rows, not an aggregate fastener mass.

- Selected flow: Finished hexagonal-head steel bolt
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_parts.
- Value mode: calculated_value
- Specificity: product_specific
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: reference_flow
- Evidence kind: calculated_from_collection
- Collection protocol: `cp_parts`
- Sources:

###### Mineral-base engine lubricating oil (`engine_oil`)

Only for separate factory first-fill or top-up of this declared formulation. Record viscosity, additive recipe, issued and returned mass and delivered fill. Do not add an assumed fill to a supplier-prefilled engine or future maintenance.

- Selected flow: Mineral-base engine lubricating oil
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_material.
- Value mode: calculated_value
- Specificity: product_specific
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: reference_flow
- Evidence kind: calculated_from_collection
- Collection protocol: `cp_material`
- Sources:

###### Mineral-base gear lubricating oil (`gear_oil`)

Only for measured separate first-fill of the declared gearbox oil formulation. Record viscosity, compatibility, net mass and supplier-prefill; wet-clutch oil of another recipe is a separate row.

- Selected flow: Mineral-base gear lubricating oil
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_material.
- Value mode: calculated_value
- Specificity: product_specific
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: reference_flow
- Evidence kind: calculated_from_collection
- Collection protocol: `cp_material`
- Sources:

###### Complete lead-acid starting battery (`starter_battery`)

Only when an electric-start configuration includes this separately purchased filled battery. Record voltage, capacity, chemistry, electrolyte completeness and measured mass; recoil-start machines exclude it.

- Selected flow: Complete lead-acid starting battery
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

##### Product flows

###### Complete pedestrian-controlled agricultural tractor (`finished_machine`)

1 kg of the accepted net complete traction power unit, with engine, transmission, drive wheels, handlebar controls and installed guards. This output excludes detachable implements, loose spares and transport packaging. Acceptance operations are included through factory_test.

- Selected flow: Pedestrian controlled tractors `67fe15ac-d2bb-440b-a498-321e3b4c7b7c`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: 1 kg
- Value mode: fixed_value
- Specificity: product_specific
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: reference_flow
- Evidence kind: collected_record
- Collection protocol: `cp_mass`
- Sources:

### Process: Factory adjustment and acceptance (`factory_test`)

#### Inputs

##### Product flows

###### Low-voltage grid electricity (`electricity_factory_test`)

Meter the electricity of this stage and its attributable rework, separating other stage meters. This selected identity is grid-average alternating current delivered to a user below 1 kV; other voltage, self-generation or contracted source requires a distinct matching identity.

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

###### Gasoline (`test_gasoline`)

Only for the corresponding engine configuration when the factory performs a powered acceptance run. Record actual test fuel consumed, issued mass, residual fuel and returns; source attribution and grade are supplier records, not properties inferred from this generic identity. Retained dispatch fuel must be a separate row if supplied, with its net-mass inclusion stated.

- Selected flow: Gasoline `e6677cd5-b574-4e00-a3bd-c373ac796135`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_fuel.
- Value mode: calculated_value
- Specificity: product_specific
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: reference_flow
- Evidence kind: calculated_from_collection
- Collection protocol: `cp_fuel`
- Sources:

###### Diesel fuel (`test_diesel`)

Only for the corresponding engine configuration when the factory performs a powered acceptance run. Record actual test fuel consumed, issued mass, residual fuel and returns; source attribution and grade are supplier records, not properties inferred from this generic identity. Retained dispatch fuel must be a separate row if supplied, with its net-mass inclusion stated.

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

##### Waste flows

###### Spent mineral-base engine lubricating oil (`spent_engine_oil`)

Only when a documented factory test drains this oil to an external waste receiver. Weigh the segregated spent oil and disclose water/metal contamination and treatment gate. No oil change is assumed for every machine.

- Selected flow: Spent mineral-base engine lubricating oil
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

###### Fossil carbon dioxide to air (`test_co2`)

Only if actual acceptance-run measurement establishes this individual substance released to air, unspecified subcompartment; fossil carbon rows require documented fossil attribution. Record outlet concentration and exhaust flow over the same run and constituent-specific mass. Do not convert pooled NOx into NO or NO2 without measured speciation, use N2O for NO, apply a guessed factor, or treat unknown emissions as zero. The particulate row is only for unspecified particle size.

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

###### Fossil carbon monoxide to air (`test_co`)

Only if actual acceptance-run measurement establishes this individual substance released to air, unspecified subcompartment; fossil carbon rows require documented fossil attribution. Record outlet concentration and exhaust flow over the same run and constituent-specific mass. Do not convert pooled NOx into NO or NO2 without measured speciation, use N2O for NO, apply a guessed factor, or treat unknown emissions as zero. The particulate row is only for unspecified particle size.

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

###### Nitrogen monoxide to air (`test_no`)

Only if actual acceptance-run measurement establishes this individual substance released to air, unspecified subcompartment; fossil carbon rows require documented fossil attribution. Record outlet concentration and exhaust flow over the same run and constituent-specific mass. Do not convert pooled NOx into NO or NO2 without measured speciation, use N2O for NO, apply a guessed factor, or treat unknown emissions as zero. The particulate row is only for unspecified particle size.

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

###### Nitrogen dioxide to air (`test_no2`)

Only if actual acceptance-run measurement establishes this individual substance released to air, unspecified subcompartment; fossil carbon rows require documented fossil attribution. Record outlet concentration and exhaust flow over the same run and constituent-specific mass. Do not convert pooled NOx into NO or NO2 without measured speciation, use N2O for NO, apply a guessed factor, or treat unknown emissions as zero. The particulate row is only for unspecified particle size.

- Selected flow: Nitrogen dioxide to air
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_emission.
- Value mode: calculated_value
- Specificity: product_specific
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: reference_flow
- Evidence kind: calculated_from_collection
- Collection protocol: `cp_emission`
- Sources:

###### Particulate matter to air (`test_particulate`)

Only if actual acceptance-run measurement establishes this individual substance released to air, unspecified subcompartment; fossil carbon rows require documented fossil attribution. Record outlet concentration and exhaust flow over the same run and constituent-specific mass. Do not convert pooled NOx into NO or NO2 without measured speciation, use N2O for NO, apply a guessed factor, or treat unknown emissions as zero. The particulate row is only for unspecified particle size.

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

### Process: Dispatch protection (`packout`)

#### Inputs

##### Product flows

###### Corrugated cardboard (`cardboard`)

Only for C-flute corrugated cardboard with recycled fibre and fibre content at least80%. Weigh net dispatch-protection material; exclude it from machine M. Other packaging grades need matching rows.

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

###### Low-density polyethylene protective foil (`ldpe_film`)

Only for separately issued non-cellular, non-adhesive, unreinforced LDPE protective foil. Weigh actual material and retain grade and source attribution; neither fossil origin nor recycled fraction is assumed from the identity. Exclude it from M.

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

## 7. Allocation and Co-product Handling

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| `allocation_direct` | shared_operations | First subdivide by work order, stage and configuration. Assign actual stock issues, purchased components, test fuel and measured releases to their own model before allocating shared services. |  |
| `allocation_physical` | shared_energy_and_support | Use measured driver relationships: machine electricity profiles times actual machine hours, curing-load energy, test-bench metering and test time, or weighed stock throughput where causal. Collect driver totals and reconcile allocated sums to meters; do not allocate different engine/clutch configurations equally by count or by catalogue mass. If no physical relationship is established, disclose unresolved allocation and sensitivity; no universal economic split is imposed. |  |
| `allocation_rejects` | waste_rework | Include attributable failed tests, rework and rejects in the accepted output denominator for the same configuration and period. Exports of scrap and spent oil are explicit waste at the receiver gate; no automatic avoided-production credit. Record actual receiver route and any co-product decision separately with evidence. |  |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cp_mass | assembly | finished_machine | calibrated weighing and acceptance | model; configuration; serial number; accepted net mass M; fluid state; excluded implements and packaging | Weigh the accepted complete machine on a calibrated scale, excluding transport packaging; reconcile the same configuration and acceptance record. | kg | each unit or justified configuration-specific representative sample | same declared production period; gaps disclosed | declared manufacturing site only | accepted net mass per machine | calibration; build list; acceptance; sample coverage |
| cp_configuration | all processes | actual route | BOM and work-order review | model; BOM revision; supplier part completeness; operation ledger; reject/rework; accepted count; outsourced gates | Crosswalk every actual part and operation to inventory or justified exclusion. Distinguish purchased complete assemblies from site manufacture and document engine/clutch/wheel alternatives separately. | record | each configuration change and production batch | same declared production period; gaps disclosed | declared manufacturing site only | one coherent configuration record | signed BOM; routing; purchase specifications; gate evidence |
| cp_material | fabrication; finishing; assembly; packout | stock; formulation; liquid; packaging | stock ledger and weighing | individual material; grade/formulation; issue; return; stock change; liquid volume/density/temperature; accepted count | Weigh each net material issue, reconcile inventory changes, recovered material and WIP; retain batch density if volume is converted to mass. Record lubricant first fills separately from supplier-prefilled components. | kg | each issue and batch reconciliation | same declared production period; gaps disclosed | declared manufacturing site only | attributable net material mass / accepted machines of the same configuration | scales; issue ledger; SDS; supplier density; recipe |
| cp_parts | assembly | purchased component | component receipt and build record | individual part number; supplier; design; count; measured mass; included fluids/subparts; installed count; accepted count | Use actual delivered component mass or lot-specific verified count-to-mass records; disclose uncertainty and avoid duplicating included components. No generic per-engine or per-wheel mass. | kg | each supplier lot and batch | same declared production period; gaps disclosed | declared manufacturing site only | attributable installed component mass / accepted machines of the same configuration | calibrated scale; lot mass; supplier completeness; build list |
| cp_energy | fabrication; finishing; assembly; factory_test | electricity | meter and driver ledger | stage; supply voltage/source; meter kWh; interval; driver; shared total; accepted count | Meter stages and distinguish test rig from engine fuel. Convert kWh to MJ with1kWh=3.6MJ. Retain measured allocation driver, idle/rework inclusion and reconcile totals. | MJ | each meter interval and batch | same declared production period; gaps disclosed | declared manufacturing site only | attributable electrical energy / accepted machines of the same configuration | meter calibration; bills; driver logs |
| cp_fuel | factory_test | individual test fuel | fuel balance and test record | engine configuration; fuel grade; fossil/biogenic attribution; issued mass; returned/residual mass; test duration/load; accepted count | Weigh actual fuel consumed by each corresponding acceptance test. Retain initial/final tank content and returns; convert volume only using evidenced density and temperature. Separate delivered residual fuel and supplier test fuel. | kg | each powered run and fuel balance | same declared production period; gaps disclosed | declared manufacturing site only | attributable test fuel mass / accepted machines of the same configuration | scale; test logs; supplier grade and source; density |
| cp_waste | fabrication; finishing; factory_test | individual waste | weighbridge or container balance | individual waste; composition; contamination; mass; internal recovery; receiver; treatment gate; accepted count | Weigh segregated actual exports, reconcile recovery and stock changes, retain receiver records and avoid mixing captured dust with air releases or wastewater with tap water. | kg | each shipment and batch | same declared production period; gaps disclosed | declared manufacturing site only | attributable exported waste mass / accepted machines of the same configuration | scale; receiver receipt; composition; waste classification |
| cp_emission | fabrication; factory_test | individual air substance | outlet monitoring and calculation | individual substance; concentration/unit; gas volume/flow; time; temperature/pressure; moisture basis; controls; particle fraction; medium; carbon origin; accepted count | Determine individual substance mass from same-interval post-control concentration and measured exhaust volume, retaining unit conversion, moisture/temperature basis and sampling coverage. Species-specific measurement is required for NO and NO2; no universal emission factor or zero for missing monitoring. | kg | representative actual operating intervals | same declared production period; gaps disclosed | declared manufacturing site only | attributable measured substance mass / accepted machines of the same configuration | sampling report; calibration; speciation; origin evidence; unit calculation |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `normalize_mass` | all inventory rows | q_ref = q_item / M; q_item = exchange amount per one accepted finished machine; q_ref = exchange amount per 1 kg reference flow. | q_item; M; cp_mass | q_ref |  |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `quality_configuration` | all inventory rows | Use the same accepted engine/clutch/wheel configuration and period for M, quantities and denominator; reconcile assembly mass, fluids, stock/WIP changes, waste and returns without invented balancing emissions. | cp_mass; cp_configuration; cp_material; cp_parts; cp_waste |
| `quality_coverage` | all inventory rows | Reconcile every actual BOM and operation. Disclose missing UUIDs, supplier links, allocation drivers, measurements and sampling gaps; no generic cutoff percentage, machine weight or lifetime. | cp_configuration; cp_energy; cp_fuel; cp_emission |
| `quality_evidence` | configuration_examples | PowerSafe and historical Action sources are manufacturer design examples from the same manufacturer, not independent quantitative factory samples. Action is used only to show a historically documented dry-clutch design; neither source supplies present industry amounts or generic test fuel/emissions. | bcs-powersafe; bcs-action-historical |

## 9. Validation Rules

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| `validation_reference` | reference_flow | Require positive measured M, exact configured power-unit boundary, complete acceptance record and1kg finished_machine. Each non-reference row applies normalize_mass in its native numerator unit. |  |
| `validation_completeness` | inventory | Verify actual engine, drivetrain, clutch, controls, wheels, guards and fluid completeness; distinguish bought assemblies from site manufacture and implements from the tractor. Reconcile energy, fuel, rejects and rework; gaps are incomplete coverage, not verified zeros. |  |
| `validation_identity` | all inventory rows | Verify each UUID against public substance, route, product/waste/elementary type, actual reference property and unit; check fossil attribution and environmental medium. NO, NO2, N2O and pooled NOx are distinct. Keep exact official Chinese baseNames and bilingual row/rule/UUID parity. |  |
| `validation_claims` | dataset_claims | Reject full cradle-to-gate or fully resolved dataset claims until upstream/transport/treatment coverage and identity gaps are addressed. Do not infer scientific approval or agricultural-service equivalence from this manufacturing reference. |  |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | Configured foreground agricultural power-unit manufacturing module; this profile heading does not assert PCR publication |
| downstream_use | secondary_dataset; background_dataset |
| allowed_use | Manufacturing inventory of the same configured tractor, scaled by measured M with declared upstream links |
| excluded_use | Farm work, crop yield, lifetime, service comparison, tractor-with-implement bundle by power-unit mass, or scientific approval |
| required_metadata | All required qualifiers; model/BOM; site/period/gates; make-or-buy; fluids and residual fuel; excluded implements; measurement/allocation protocols; supplier and waste links |
| required_quality_disclosure | Weighing/measurement uncertainty; configuration sampling; unresolved UUIDs and allocation; missing upstream/treatment links; emission monitoring/speciation gaps; rework and rejects |
| update_trigger | Engine, starter, clutch, transmission, wheel, fluid or implement-boundary changes; site route, supplier, energy source or allocation-driver change |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| bcs-powersafe | handbook | BCS, Two-wheel tractors range, 740 PowerSafe, PDF physical p.9, printed pp.16–17; edition unspecified (PDF creation metadata2025-10-16). https://bcsagri.com/wp-content/uploads/2022/04/BCS-Gamma-Motocoltivatori_EN.pdf | Mechanical transmission/hydraulic-clutch and separate gasoline/diesel/starter configuration examples. No catalogue mass, lifetime, capability or inventory factor adopted. |
| bcs-action-historical | handbook | BCS, Two-wheel tractors Action, Technical features, PDF physical p.14, printed pp.26–27; historical document (PDF creation metadata2022-11-29; edition unspecified). https://bcsagri.com/wp-content/uploads/2022/10/BCS-MC-ACTION_EN.pdf | Historical dry-clutch, mechanical transmission, handlebar, wheel and attachment design alternatives only. Not evidence of current product availability, universal manufacturing requirements or quantitative factory data. |
