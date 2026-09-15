---
pcr_id: pcr.metal-products-machinery-and-equipment.general-purpose-machinery.industrial-robots
language: en-US
status: candidate
sync_with: pcr.zh-CN.md
---

# Industrial robots

## 1. Scope and Applicability

This PCR supports production of a foreground, factory-gate dataset for an industrial robot. The covered product is
an automatically controlled, reprogrammable, multipurpose manipulator programmable in at least three axes and
intended for industrial automation. Covered mechanical structures include articulated, Cartesian or gantry,
cylindrical, spherical, parallel or delta, and SCARA robots. Collaborative industrial robots are included when they
meet the same product definition.

The declared product may include its dedicated controller, control stick or teach pendant, cables, and shipped
accessories only when these are part of the manufacturer's sales unit and mass record. A customer end-effector,
workpiece, mobile platform, guards, fixtures, conveyors, application-specific process equipment, and the integrated
robot application are excluded unless physically integral to the sold robot and explicitly included in the product
identity and net mass. Service robots, medical robots, teleoperated manipulators, autonomous mobile platforms without
a qualifying manipulator, dedicated non-multipurpose handling equipment, spare parts sold separately, and complete
automation cells are outside the category.

The core dataset begins with processed materials and finished components received by the robot factory and ends with
the finished robot and its declared packaging leaving the factory. Supplier production is linked as upstream
background data. Distribution, installation, use, maintenance, and end-of-life are downstream stages and are not part
of this foreground record. This factory-gate record may be linked into a broader life-cycle study, but it is not by
itself a full product carbon-footprint result.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | `pcr.metal-products-machinery-and-equipment.general-purpose-machinery.industrial-robots` |
| classification_refs | CPC 3.0: 43561, Industrial robots (exact semantic reference; classification mapping remains separately governed) |
| covered_products | Automatically controlled, reprogrammable multipurpose industrial manipulators with at least three programmable axes, whether fixed in place or fixed to a mobile platform; collaborative industrial robots meeting this definition |
| excluded_products | Service and medical robots; robotic devices that do not meet the robot definition; mobile platforms without a qualifying manipulator; customer end-effectors; integrated application cells; dedicated non-multipurpose handling equipment; separately sold parts |
| representative_product | One finished industrial robot sales unit at the manufacturer's factory gate |
| production_route | Receipt of processed materials and finished components; in-house part fabrication when applicable; assembly; software loading needed for factory test; functional and safety testing; finishing or cleaning when applicable; packaging |
| market_state | New, factory-tested industrial robot in the declared sales configuration, before distribution and customer integration |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Provide reprogrammable manipulation or positioning capability for the declared industrial automation task |
| How much | One finished industrial robot sales unit delivered at the factory gate |
| How well | Meet the declared robot type, payload, reach, number of axes, positioning accuracy or repeatability, motion speed, controller configuration, and applicable functional-safety specifications |
| How long or cycle | One delivered robot; declare the design or reference service life for downstream comparability, while excluding use and maintenance from this factory-gate dataset |
| reference_flow_link | The functional-unit robot is linked to the measured net mass of that same finished sales unit; packaging mass is reported separately and is not part of the reference-product mass |

| Field | Value |
| --- | --- |
| Reference amount | Measured net mass in kg of one finished industrial robot sales unit |
| Reference product flow | Industrial robots `f3a1c3db-6e8f-4406-b490-2d174edfc7a8` |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | model and sales configuration; kinematic type; intended industrial-automation application; number of programmable axes; rated payload; reach; positioning accuracy or repeatability; rated or tested speed; fixed or mobile mounting; controller and teach-pendant inclusion; end-effector exclusion or inclusion; shipped accessories; net robot mass; packaging mass; factory geography; production technology and reporting period; design or reference service life |

When constructing a foreground data package, the items listed in `Required qualifiers` must be declared in dataset
metadata, process notes, reference flow comment, product description, or an equivalent data package field. Missing
required qualifiers make the reference flow definition incomplete for that data package.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| `reference_robot_mass` | Reference product | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Weigh or derive from controlled product specifications the net mass of the exact finished sales configuration. Exclude packaging and customer-supplied end-effectors. One functional-unit robot corresponds to this measured kg amount. |
| `material_mass` | Material, component, packaging, scrap, and wastewater rows measured by mass | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Preserve measured mass. If item counts are converted to mass, retain item count, measured or supplier mass per item, and calculation. Do not substitute gross shipped mass for net robot mass. |
| `electrical_energy` | Purchased electricity | Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` | MJ | Preserve the electricity meter basis and convert kWh to MJ with 1 kWh = 3.6 MJ. Record voltage level, grid geography, losses boundary, and whether shared utilities were allocated. |
| `gas_volume` | Gaseous natural gas and industrial oxygen | Volume `93a60a56-a3c8-22da-a746-0800200c9a66` | m3 | Report volume at disclosed reference temperature and pressure. If supplier records use energy or mass, retain the original value and documented conversion, composition, and reference conditions. |
| `one_robot_consistency` | Functional unit and reference flow | Mass and item identity | one robot and kg | The item count must be exactly one robot and the reference mass must describe the same model, controller scope, accessories, and factory-gate state. |

## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Processed materials and finished robot components accepted at the reporting factory gate, with supplier, geography, product state, quantity, and upstream dataset link recorded |
| starting_condition_role | Purchased material or component input to foreground robot manufacturing |
| product_classification_scope | Multipurpose industrial robots meeting the semantic definition in section 1; classification references do not independently expand the product boundary |
| recursive_input_rule | If a purchased input is itself a complete industrial robot, record it as a same-category upstream product with its own dataset and do not recreate its manufacturing inventory inside this foreground process; robot parts and controllers remain their own concrete component flows |
| upstream_dataset_requirement | Link every purchased material, component, fuel, electricity supply, water supply, and waste-treatment service to a geographically and technologically appropriate upstream dataset; disclose any proxy |
| disclosure | Declare in-house fabrication and finishing operations, purchased-versus-made components, controller and accessory scope, packaging scope, excluded application equipment, factory geography, technology, reporting period, and all cut-offs |

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `boundary_factory_gate` | Foreground product system | Include all on-site fabrication, assembly, software loading required for factory testing, functional and safety testing, cleaning or finishing when used, internal handling, packaging, direct emissions, wastewater, and solid waste from receipt of inputs through factory-gate release. | `t-cesa-1450-2025-robot-carbon-footprint` |
| `boundary_upstream_links` | Purchased inputs | Represent production and transport of received materials, components, accessories, packaging, energy, and treatment services with upstream datasets; do not duplicate those burdens as direct foreground emissions. | `t-cesa-1450-2025-robot-carbon-footprint` |
| `boundary_product_scope` | Robot versus application system | The manipulator is the category-defining object. Include a dedicated controller or teach device only when part of the declared sales unit; exclude the customer end-effector, workpiece, mobile platform, safeguards, cell equipment, and integration unless integral and explicitly declared. | `ifr-world-robotics-2025-sources-methods`; `schneider-lexium-cobot-pep-2023` |
| `boundary_downstream` | Distribution, installation, use, maintenance, and end-of-life | Exclude downstream stages from the core foreground record and disclose this partial boundary. Link this dataset into separately modelled downstream scenarios when a life-cycle result is required. | `t-cesa-1450-2025-robot-carbon-footprint`; `schneider-lexium-cobot-pep-2023` |
| `boundary_software` | Software and firmware | Include electricity and material exchanges for software loading and factory testing when attributable. Exclude software-development activity unless the study deliberately expands the boundary and reports it separately. | `t-cesa-1450-2025-robot-carbon-footprint` |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| `robot_manufacturing` | Industrial robot factory manufacturing | required | Always include for a factory-gate industrial robot dataset; individual fabrication, utility, chemical, fuel, and waste rows apply only when the corresponding route occurs at the reporting factory | Foreground fabrication, assembly, testing, finishing or cleaning, and packaging | Measured net kg of one finished industrial robot sales unit |

### Process: Industrial robot factory manufacturing (`robot_manufacturing`)

#### Inputs

##### Product flows

###### Aluminium alloy for robot structures (`aluminium_alloy`)

Record the concrete aluminium alloy entering in-house fabrication or final assembly, with alloy designation and
product form. Do not also count the aluminium contained in a purchased finished component.

- Selected flow: Aluminium alloy
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Inclusion condition: Include when aluminium alloy crosses the reporting factory boundary as material rather than solely inside a purchased component.
- Amount rule: Net issued mass minus documented returns to stock, normalized to the reference robot
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per measured net kg of one finished industrial robot
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_bom_materials_components`
- Sources: `schneider-lexium-cobot-pep-2023`

###### Stainless steel for robot structures and fasteners (`stainless_steel`)

Record the declared stainless-steel grade and product form entering the factory. Exclude stainless steel already
embedded in separately inventoried purchased components.

- Selected flow: Stainless steel
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Inclusion condition: Include when stainless steel crosses the reporting factory boundary as material.
- Amount rule: Net issued mass minus documented returns to stock, normalized to the reference robot
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per measured net kg of one finished industrial robot
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_bom_materials_components`
- Sources: `schneider-lexium-cobot-pep-2023`

###### Copper for conductors and windings (`copper`)

Record copper metal entering in-house conductor, winding, or busbar fabrication. Do not double count copper embedded
in purchased motors, cables, drives, or printed circuit boards.

- Selected flow: Copper
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Inclusion condition: Include when copper crosses the reporting factory boundary as metal.
- Amount rule: Net issued mass minus documented returns to stock, normalized to the reference robot
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per measured net kg of one finished industrial robot
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_bom_materials_components`
- Sources: `schneider-lexium-cobot-pep-2023`

###### Polycarbonate for covers or housings (`polycarbonate`)

Record polycarbonate resin or purchased polycarbonate part mass according to the actual procurement state; do not
mix those states in one dataset without separate upstream identities.

- Selected flow: Polycarbonate
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Inclusion condition: Include when polycarbonate is present in the declared product and crosses the factory boundary in the stated procurement form.
- Amount rule: BOM and issue-record mass normalized to the reference robot
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per measured net kg of one finished industrial robot
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_bom_materials_components`
- Sources: `schneider-lexium-cobot-pep-2023`

###### Printed circuit board for robot control (`printed_circuit_board`)

Record the populated printed circuit board entering the factory for the robot or included controller. Declare board
type and whether its mass is included in a separately inventoried controller.

- Selected flow: Populated printed circuit board
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Inclusion condition: Include when a populated printed circuit board is purchased separately and included in the declared sales unit.
- Amount rule: BOM item count multiplied by measured or supplier mass per board
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per measured net kg of one finished industrial robot
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_bom_materials_components`
- Sources: `t-cesa-1450-2025-robot-carbon-footprint`; `schneider-lexium-cobot-pep-2023`

###### Electric servo motor for robot axes (`electric_servo_motor`)

Record the concrete electric servo motor delivered for a robot axis, with rated power or torque and mass. Do not
separately add its embedded copper or steel unless the motor is manufactured inside the foreground boundary.

- Selected flow: Electric servo motor
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Inclusion condition: Include when electric servo motors cross the reporting factory boundary as purchased components.
- Amount rule: BOM item count multiplied by measured or supplier mass per motor
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per measured net kg of one finished industrial robot
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_bom_materials_components`
- Sources: `t-cesa-1450-2025-robot-carbon-footprint`

###### Gear reducer for robot joints (`gear_reducer`)

Record the concrete joint gear reducer as purchased, including reducer type and component mass.

- Selected flow: Gear reducer
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Inclusion condition: Include when gear reducers cross the reporting factory boundary as purchased components.
- Amount rule: BOM item count multiplied by measured or supplier mass per reducer
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per measured net kg of one finished industrial robot
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_bom_materials_components`
- Sources: `t-cesa-1450-2025-robot-carbon-footprint`

###### Electrical cable for the declared robot sales unit (`electrical_cable`)

Record the mass of power, signal, and communication cable supplied with the robot, excluding external cell wiring.

- Selected flow: Electrical cable
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Inclusion condition: Include only cable supplied in the declared sales unit.
- Amount rule: BOM or kitting-record mass normalized to the reference robot
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per measured net kg of one finished industrial robot
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_bom_materials_components`
- Sources: `t-cesa-1450-2025-robot-carbon-footprint`

###### Purchased electricity for manufacturing and testing (`electricity`)

Record electricity attributable to fabrication, assembly, software loading, functional and safety testing, cleaning,
and packaging. Upstream grid emissions are represented by the linked electricity dataset, not as direct emissions.

- Selected flow: Electricity `890a70b7-b677-4e2a-8a1b-7d017e0a10ae`
- Flow property / unit: Net calorific value `93a60a56-a3c8-11da-a746-0800200b9a66` / MJ
- Inclusion condition: Always include measured or allocation-supported purchased electricity.
- Amount rule: Submetered consumption or justified shared-meter allocation for the reporting period
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per measured net kg of one finished industrial robot
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_energy_fuels`
- Sources: `t-cesa-1450-2025-robot-carbon-footprint`

###### Process water for on-site wet operations (`process_water`)

Record process water used in machining, cleaning, surface treatment, testing, or cooling when it crosses the
foreground boundary. Declare source, quality, delivery boundary, and any density conversion.

- Selected flow: Process Water `94a04f7e-2d5c-41f0-b182-d54a3b373a02`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Inclusion condition: Include when a wet operation consumes process water at the reporting factory.
- Amount rule: Metered or tank-balance water supplied to included processes
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per measured net kg of one finished industrial robot
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_water_chemicals`
- Sources: `t-cesa-1450-2025-robot-carbon-footprint`

###### Natural gas for on-site thermal operations (`natural_gas`)

Record natural gas consumed by attributable ovens, space-independent process heating, or other included thermal
operations. Do not include gas absent from the declared manufacturing route.

- Selected flow: natural gas in the gaseous state `4f19ca0e-7b3b-11dd-ad8b-0800200c9a66`
- Flow property / unit: Volume `93a60a56-a3c8-22da-a746-0800200c9a66` / m3
- Inclusion condition: Include only when natural gas is consumed by an included on-site operation.
- Amount rule: Supplier-meter or dedicated submeter volume at disclosed reference conditions
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per measured net kg of one finished industrial robot
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_energy_fuels`
- Sources: `t-cesa-1450-2025-robot-carbon-footprint`

###### Diesel fuel for attributable on-site equipment (`diesel_fuel`)

Record diesel issued to included on-site handling or backup equipment only when consumption is separately
attributable to robot manufacturing; exclude employee travel and non-attributable general site use.

- Selected flow: Diesel fuel `9d258d75-6792-4f1c-9856-81602ed8f816`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Inclusion condition: Include only when diesel equipment serves an included foreground operation and use is attributable.
- Amount rule: Fuel issue, tank-balance, or equipment-meter record
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per measured net kg of one finished industrial robot
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_energy_fuels`
- Sources: `t-cesa-1450-2025-robot-carbon-footprint`

###### Sodium hydroxide for metal pretreatment (`sodium_hydroxide`)

Record sodium hydroxide in the supplied state when used for in-house metal cleaning or pretreatment. Declare
solution concentration and convert solution records to both solution mass and contained chemical mass.

- Selected flow: Sodium hydroxide `e0abcced-0611-4c24-9290-5a2c5a0c4169`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Inclusion condition: Include only when a sodium-hydroxide pretreatment bath is inside the foreground boundary.
- Amount rule: Purchasing and bath make-up records adjusted for stock change and concentration
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per measured net kg of one finished industrial robot
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_water_chemicals`
- Sources:

###### Industrial oxygen for on-site cutting or welding (`industrial_oxygen`)

Record supplied oxygen used in included cutting or welding operations, with purity, pressure, supply mode, and
reference conditions.

- Selected flow: Industrial oxygen `bd4b0f96-2090-4806-a648-335ab20ff401`
- Flow property / unit: Volume `93a60a56-a3c8-22da-a746-0800200c9a66` / m3
- Inclusion condition: Include only when oxygen-consuming cutting or welding occurs inside the foreground boundary.
- Amount rule: Cylinder stock balance or bulk-gas meter at disclosed reference conditions
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per measured net kg of one finished industrial robot
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_water_chemicals`
- Sources:

###### Corrugated cardboard shipping package (`corrugated_cardboard`)

Record the corrugated cardboard physically supplied with one robot. Do not combine paperboard, wood, foam, or other
packaging materials in this row.

- Selected flow: Corrugated cardboard
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Inclusion condition: Include when corrugated cardboard is part of the declared factory-gate package.
- Amount rule: Weighed packaging mass or packaging specification for the exact sales configuration
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per measured net kg of one finished industrial robot
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging`
- Sources: `schneider-lexium-cobot-pep-2023`

###### Polyethylene packaging film (`polyethylene_film`)

Record only the polyethylene film supplied with the declared robot package. Other plastic packaging requires a
separate concrete flow row in the foreground data package.

- Selected flow: Polyethylene film
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Inclusion condition: Include when polyethylene film is part of the declared factory-gate package.
- Amount rule: Weighed film mass or packaging specification for the exact sales configuration
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per measured net kg of one finished industrial robot
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging`
- Sources: `schneider-lexium-cobot-pep-2023`

##### Waste flows

No waste input is prescribed for the default manufacturing route. Record a concrete secondary material as a product
input, not as an unspecified waste input, when it has a verified product status.

##### Elementary flows

No elementary input is prescribed. Resource extraction belongs to linked upstream material and energy datasets.

#### Outputs

##### Product flows

###### Finished industrial robot reference product (`industrial_robot`)

Record the measured net mass of the exact factory-tested sales configuration. Packaging is excluded from this mass
and reported in its material rows.

- Selected flow: Industrial robots `f3a1c3db-6e8f-4406-b490-2d174edfc7a8`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Inclusion condition: Always include exactly one finished reference robot.
- Amount rule: Measured net product mass for one finished robot
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: one finished industrial robot sales unit
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_reference_product`
- Sources: `un-cpc-3-0-structure-2025`; `ifr-world-robotics-2025-sources-methods`; `t-cesa-1450-2025-robot-carbon-footprint`

##### Waste flows

###### Segregated steel scrap from in-house fabrication (`steel_scrap`)

Record steel scrap transferred to internal or external treatment when steel fabrication occurs on site. Do not mix
it with aluminium, copper, electronic, or municipal waste.

- Selected flow: Steel scrap
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Inclusion condition: Include when in-house steel fabrication generates a separately managed steel-scrap stream.
- Amount rule: Scale-ticket or container mass balance for the reporting period
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per measured net kg of one finished industrial robot
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste_outputs`
- Sources: `t-cesa-1450-2025-robot-carbon-footprint`

###### Segregated aluminium scrap from in-house fabrication (`aluminium_scrap`)

Record aluminium scrap transferred to treatment when aluminium fabrication occurs on site. Keep alloy-contaminated
or mixed-metal waste separate when it follows a different treatment route.

- Selected flow: Aluminium scrap
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Inclusion condition: Include when in-house aluminium fabrication generates a separately managed aluminium-scrap stream.
- Amount rule: Scale-ticket or container mass balance for the reporting period
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per measured net kg of one finished industrial robot
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste_outputs`
- Sources: `t-cesa-1450-2025-robot-carbon-footprint`

###### Industrial wastewater from included wet operations (`industrial_wastewater`)

Record wastewater transferred to on-site or external treatment, with the generating operation and treatment
destination. Do not combine it with stormwater or sanitary wastewater.

- Selected flow: Industrial wastewater
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Inclusion condition: Include when an included wet operation produces industrial wastewater.
- Amount rule: Discharge meter, tank transfer, or documented water balance
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per measured net kg of one finished industrial robot
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste_outputs`
- Sources: `t-cesa-1450-2025-robot-carbon-footprint`

##### Elementary flows

###### Direct fossil carbon dioxide from on-site fuel combustion (`fossil_carbon_dioxide`)

Record fossil CO2 released directly at the factory from the natural gas or diesel rows. Exclude upstream fuel-supply
emissions and all emissions embodied in purchased electricity.

- Selected flow: carbon dioxide (fossil) `08a91e70-3ddc-11dd-923d-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Inclusion condition: Include when fossil fuel in an included operation is combusted on site.
- Amount rule: Direct measurement or calculation from collected fuel quantity, composition, and disclosed carbon-balance factor using `calc_fossil_co2`
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per measured net kg of one finished industrial robot
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_energy_fuels`
- Sources: `t-cesa-1450-2025-robot-carbon-footprint`

## 7. Allocation and Co-product Handling

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `allocation_avoid` | Multi-product robot manufacturing and shared operations | Avoid allocation by subdividing processes, using model-specific BOM and routing records, and separately metering utilities wherever practicable. | `t-cesa-1450-2025-robot-carbon-footprint` |
| `allocation_physical` | Unavoidable shared material, energy, or production-line burdens | Use a documented physical relationship that reflects causation. Product quantity, net product mass, machine time, or measured process time may be used when appropriate; disclose numerator, denominator, and period. | `t-cesa-1450-2025-robot-carbon-footprint` |
| `allocation_common_utilities` | Common utilities without submetering | Allocate only the share serving included robot manufacturing. Prefer measured operating time or equipment demand; if unavailable, use the reporting period's finished-robot output quantity or mass and justify why it represents utility use. | `t-cesa-1450-2025-robot-carbon-footprint` |
| `allocation_waste_treatment` | Shared wastewater and solid-waste treatment | Prefer direct measurement by process or waste stream. If treatment cannot be separated, allocate by the finished-product output of the generating process and disclose the method. | `t-cesa-1450-2025-robot-carbon-footprint` |
| `allocation_economic_fallback` | Cases without a defensible physical relation | Economic allocation is a last resort. Record price basis, currency, reference period, co-products, sensitivity, and reason physical allocation failed. Do not credit recycling or avoided burden inside the factory-gate inventory without an explicit downstream method. | `t-cesa-1450-2025-robot-carbon-footprint` |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_reference_product` | `robot_manufacturing` | reference product identity and mass | product specification, final inspection record, calibrated scale record | model; serial or lot; configuration; controller and accessory scope; end-effector scope; axes; payload; reach; accuracy or repeatability; speed; net mass; packaging mass; release count | Link released units to controlled specifications and weigh a representative complete sales unit without packaging | robot; kg | each model or material configuration change, with reporting-period release count | Same reporting period as inputs | Reporting factory and declared product line | Reconcile released unit count and net product mass to production records; normalize inventory to the exact reference robot | Calibration certificate; approved specification; final inspection and release record |
| `cp_bom_materials_components` | `robot_manufacturing` | material and purchased component inputs | approved BOM, ERP issue and return records, supplier specifications | item id; material or component name; grade or model; procurement state; supplier; quantity; unit; mass per item; stock change; returned quantity; included product models | Reconcile approved BOM to actual issue, return, and inventory records; prevent double counting embedded materials and purchased components | kg; item | batch or monthly, aggregated for the reporting period | At least one representative production year when available | Reporting factory and included product line | Net input = opening stock + receipts - closing stock - documented returns or diversions; allocate shared model inputs under section 7 | BOM revision; ERP extract; supplier mass specification; stock reconciliation |
| `cp_energy_fuels` | `robot_manufacturing` | purchased electricity, natural gas, diesel, and direct fuel-combustion CO2 | utility invoice, submeter, fuel issue, tank balance, gas-quality record | meter id; opening and closing reading; purchased quantity; unit; voltage; gas temperature and pressure; fuel composition; equipment; operating time; calibration; allocation driver | Prefer dedicated meters; otherwise reconcile invoices and equipment operating records to an explicit allocation | MJ; m3; kg | continuous or monthly | Same reporting period as product output | Included factory operations only | Sum net consumption, convert units under section 4, allocate shared consumption under section 7, and calculate direct CO2 under `calc_fossil_co2` | Invoice; meter calibration; fuel certificate; tank reconciliation; equipment log |
| `cp_water_chemicals` | `robot_manufacturing` | process water, sodium hydroxide, and industrial oxygen | water meter, tank or cylinder balance, purchasing and bath records | material identity; concentration or purity; quantity; unit; opening and closing stock; make-up; discarded bath; temperature and pressure for gases; process served | Meter or reconcile stock and purchase records for each concrete material | kg; m3 | batch or monthly | Same reporting period as product output | Included wet, thermal, cutting, or welding operations | Net consumption = receipts + opening stock - closing stock - documented return; report chemical solution and contained substance consistently | Meter calibration; certificate of analysis; purchase record; bath or cylinder log |
| `cp_packaging` | `robot_manufacturing` | corrugated cardboard and polyethylene film | packaging specification, kitting record, scale record | product model; packaging component; material identity; item count; mass per item; reused fraction; returnable status | Weigh each packaging component for the exact sales configuration and reconcile to packaging issue records | kg; item | each packaging design change, checked during reporting period | Current packaging specification and reporting period | Packaging applied at the reporting factory | Sum each material separately; exclude returnable packaging that does not leave with the product and disclose its handling | Approved packaging drawing; scale calibration; issue record |
| `cp_waste_outputs` | `robot_manufacturing` | steel scrap, aluminium scrap, and industrial wastewater | scale ticket, container log, discharge meter, treatment manifest | waste identity; generating operation; quantity; unit; storage change; destination; treatment route; transporter; date | Weigh or meter each segregated waste stream and reconcile internal accumulation to transfers | kg | each transfer, aggregated monthly | Same reporting period as product output | Waste generated by included operations | Generation = transferred quantity + closing storage - opening storage; keep materials and treatment routes separate | Scale or meter calibration; waste manifest; treatment receipt; water balance |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_reference_normalization` | Every inventory row | Divide the reporting-period exchange by total measured net kg of conforming finished industrial robots; retain the one-robot model-specific mass so a user can reconstruct exchange per robot. | reporting-period exchange; released robot count by model; net mass by model; allocation driver | exchange per kg reference flow and exchange per declared robot | `t-cesa-1450-2025-robot-carbon-footprint` |
| `calc_component_mass` | Item-counted components | Component mass = accepted item count × measured or supplier-controlled mass per item; subtract returned or rejected components not incorporated in the reference product and record their destination separately. | item count; mass per item; returns and rejects | kg component input | `t-cesa-1450-2025-robot-carbon-footprint` |
| `calc_electricity_mj` | Purchased electricity | Electricity in MJ = metered kWh × 3.6. Preserve the original kWh and do not add grid-generation emissions as foreground elementary flows. | metered kWh; voltage and grid qualifiers | MJ purchased electricity | `t-cesa-1450-2025-robot-carbon-footprint` |
| `calc_solution_mass` | Sodium-hydroxide solution | Contained NaOH mass = net solution mass × measured mass fraction. Preserve solution mass, concentration, and contained NaOH mass. | net solution mass; concentration | kg sodium hydroxide |  |
| `calc_fossil_co2` | On-site fossil fuel combustion | Calculate fossil CO2 from collected fuel quantity, carbon content or a disclosed fuel-specific factor, oxidation treatment, and unit conversions. Do not calculate upstream fuel or purchased-electricity emissions in this row. | natural-gas or diesel quantity; composition or factor; oxidation basis | kg direct fossil CO2 | `t-cesa-1450-2025-robot-carbon-footprint` |
| `calc_mass_reconciliation` | Product, material, component, packaging, and solid-waste records | Reconcile net mass inputs to product, packaging, stored work in progress, waste, and documented mass-changing operations. Investigate unexplained imbalance rather than forcing it to zero. | input masses; product mass; packaging mass; waste mass; stock changes | disclosed mass-balance check |  |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_identity` | Reference product | Product model, sales configuration, controller and accessory scope, end-effector scope, technical qualifiers, net mass, factory, and reporting period must identify one reproducible robot configuration. | Approved specification, BOM revision, final inspection, calibrated mass record |
| `dq_primary_data` | Foreground materials, energy, water, fuels, waste, and direct emissions | Use site records for included factory operations. Prefer at least one recent representative production year; shorter campaigns must disclose coverage and seasonality or ramp-up limitations. | ERP extract, invoices, meters, issue logs, manifests, production records |
| `dq_completeness` | All included operations | Check for missing assembly, testing, packaging, in-house fabrication, finishing, internal handling, energy, direct emissions, wastewater, and solid-waste exchanges. Disclose every exclusion and evaluate its significance. | Process walk-through, flow diagram, purchase ledger reconciliation, mass and energy checks |
| `dq_upstream_match` | Linked background datasets | Match geography, technology, material grade or component state, electricity voltage and grid, fuel specification, water supply, and waste treatment. Disclose proxies and substituted geographies. | Dataset metadata and documented mapping table |
| `dq_consistency` | Bilingual and machine projections | Use the same row ids, process ids, UUIDs, controlled values, and rule ids in both languages; regenerate the structured projection from canonical English. | Bilingual review and deterministic structured sync |
| `dq_uncertainty` | Missing ranges and allocated data | Do not invent external ranges. Flag missing range evidence, quantify allocation sensitivity when material, and replace unresolved UUIDs or ranges before publication review when evidence becomes available. | Review metadata, sensitivity record, source review |

## 9. Validation Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `validation_identity` | Dataset identity | Fail the dataset if it does not describe an automatically controlled, reprogrammable multipurpose manipulator with at least three programmable axes for industrial automation, or if the canonical PCR id and product-flow identity disagree. | `ifr-world-robotics-2025-sources-methods`; `t-cesa-1450-2025-robot-carbon-footprint` |
| `validation_reference_flow` | Functional unit and reference flow | Require exactly one robot and its measured net mass in kg for the same configuration. Packaging must be separate; controller, teach device, accessories, end-effector, and mobile-platform scope must be explicit. | `t-cesa-1450-2025-robot-carbon-footprint` |
| `validation_boundary` | Factory-gate scope | Require the declared starting condition, included factory operations, upstream dataset links, downstream exclusions, factory geography, reporting period, and cut-offs. Reject double counting of upstream electricity or fuel emissions as direct foreground emissions. | `t-cesa-1450-2025-robot-carbon-footprint` |
| `validation_inventory_atomicity` | Inventory exchanges | Each row must describe one concrete material, component, energy, fuel, chemical, waste, or elementary emission. Conditional rows must state applicability; absent exchanges use `not_applicable` only with route evidence. |  |
| `validation_mass_energy` | Quantitative inventory | Reconcile product count and mass to production records, purchased electricity to meter or invoice totals, fuels to stock or meter records, and material inputs to product, packaging, stock change, and segregated waste. Investigate unexplained differences. | `t-cesa-1450-2025-robot-carbon-footprint` |
| `validation_allocation` | Shared operations | Require subdivision or submetering where feasible. Every remaining allocation must disclose driver, numerator, denominator, period, co-products, and physical or economic rationale. | `t-cesa-1450-2025-robot-carbon-footprint` |
| `validation_evidence` | UUIDs, sources, and ranges | UUID-bearing flows must retain verified identity, property, and unit support. UUID-empty rows remain unresolved. External empirical ranges require at least two independent, original-text-verified, boundary-compatible sources; otherwise retain foreground collection and the unresolved range need. |  |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | `secondary_dataset` after independent review of site-specific foreground records; may serve as `background_dataset` only for users whose robot configuration, geography, technology, and factory-gate boundary are compatible |
| downstream_use | Link the factory-gate industrial-robot dataset into installation, operation, maintenance, remanufacturing, and end-of-life scenarios or into capital-equipment models |
| allowed_use | Model-specific factory-gate comparisons and supply-chain inventories when functional qualifiers, reference mass, included controller and accessories, geography, technology, allocation, and data period are compatible |
| excluded_use | A complete robot-application or automation-cell dataset; a use-phase energy model; a standalone full-life-cycle product carbon footprint; comparison of robots with different payload, reach, accuracy, speed, service life, or included equipment without functional adjustment |
| required_metadata | Canonical PCR id; product-flow UUID; model and sales configuration; technical qualifiers; net robot mass; packaging mass; included and excluded equipment; factory geography; technology; reporting period; process coverage; allocation; source and background-dataset mapping; unresolved items |
| required_quality_disclosure | Primary-data share and period; meter and scale quality; BOM version; product mix; allocation shares; cut-offs; data gaps; proxy datasets; mass and energy reconciliation; uncertainty and sensitivity; independent review status |
| update_trigger | Product or controller redesign; material or packaging change; factory or supplier-route change; major process or grid change; new allocation basis; reporting data older than the program's representativeness threshold; resolution of a material UUID or range evidence need |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `un-cpc-3-0-structure-2025` | `official_guidance` | United Nations Statistics Division, CPC Ver. 3.0 Structure, subclass 43561, Industrial robots. Official CSV: https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Structure_30Jun2025.csv (retrieved 2026-09-05; cached original SHA-256 `sha256:5cd2c1c4890dd6be16af48e9bb940fed48efff9865f39ff15edaa921da25fb7c`) | Product classification identity only |
| `ifr-world-robotics-2025-sources-methods` | `official_guidance` | International Federation of Robotics, World Robotics 2025 — Industrial Robots, Introduction: Sources and Methods, sections 1.7–1.9. https://ifr.org/img/worldrobotics/Sources___Methods_WR_2025_Industrial_Robots.pdf (retrieved 2026-09-05) | Industrial-robot definition, kinematic coverage, end-effector and mobile-platform distinctions, and category exclusions |
| `t-cesa-1450-2025-robot-carbon-footprint` | `standard` | T/CESA 1450—2025, 温室气体 产品碳足迹量化方法与要求 机器人. Official MIIT-hosted text: https://wap.miit.gov.cn/cms_files/filemanager/1226211233/attach/20261/151e4eb4b80245a7abf91fab5413ceda.pdf (retrieved 2026-09-05) | Chinese terminology; one-robot functional basis; production boundary; component, energy, waste, collection, allocation, and quality rules. This PCR uses the production-stage guidance and does not claim that its partial boundary is a complete T/CESA carbon footprint. |
| `schneider-lexium-cobot-pep-2023` | `dataset` | Schneider Electric, Product Environmental Profile — Lexium Cobot Standard Robot, ENVPEP2209025_V1, 05/2023. https://download.se.com/files?p_Doc_Ref=ENVPEP2209025EN&p_File_Name=ENVPEP2209025_V1.pdf&p_enDocType=Environmental%2BDisclosure (retrieved 2026-09-05) | Verified representative material and component composition, arm/end-effector boundary, packaging material examples, and manufacturing-versus-downstream stage separation; no empirical PCR range is inferred from this single product. |
