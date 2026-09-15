---
pcr_id: pcr.metal-products-machinery-and-equipment.special-purpose-machinery.straw-or-fodder-balers-including-pickup-balers
language: en-US
sync_with: pcr.zh-CN.md
status: candidate
---

# Straw or fodder balers, including pickup balers

## 1. Scope and Applicability

This PCR supports a foreground data package for manufacturing one complete straw or fodder baler, including a pickup baler, accepted at the manufacturing-facility gate. It covers declared-configuration component fabrication, purchased components, welding, conditional surface preparation and coating, final assembly, acceptance testing, and associated measured wastes and direct emissions.

It excludes agricultural baling service, crop or fodder production, field-use fuel, maintenance, spare parts, distribution beyond the gate, use, and end-of-life. A pickup device is included only when installed in the declared finished-baler configuration. Bale wrappers, bale loaders, and unfinished baler subassemblies are excluded.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.metal-products-machinery-and-equipment.special-purpose-machinery.straw-or-fodder-balers-including-pickup-balers |
| classification_refs | CPC 3.0 44125, Straw or fodder balers, including pickup balers |
| covered_products | Complete straw balers, fodder balers, and pickup balers manufactured as one finished machine |
| excluded_products | Baling service; baled straw or fodder; separate wrappers or loaders; spare parts; unfinished subassemblies |
| representative_product | One complete configured baler, including its pickup mechanism when fitted |
| production_route | Fabricated metal components, purchased components, welding, conditional coating, final assembly, and factory-gate acceptance |
| market_state | New, accepted finished machine at the facility gate; configuration, net mass, pickup fitment, and delivery state declared |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Manufacture and acceptance of one complete straw or fodder baler, including pickup equipment when fitted |
| How much | One finished baler |
| How well | The declared configuration passes documented manufacturer acceptance checks; net mass and pickup status are declared |
| How long or cycle | One manufacturing cycle ending at factory-gate acceptance; operating life and field use are outside this PCR |
| reference_flow_link | `finished_baler` |

| Field | Value |
| --- | --- |
| Reference amount | 1 |
| Reference product flow | Finished straw or fodder baler (UUID unresolved) |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | manufacturer and facility; model/configuration; baler type; pickup fitted or not; net accepted mass; bill of materials; coating route; acceptance-test boundary; geography; production period |

Missing required qualifiers make the reference flow incomplete.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| `reference_mass` | reference product | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Record accepted net mass of the complete baler and normalize foreground exchanges to that exact accepted unit. |
| `electricity_energy` | purchased electricity | Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` | MJ | Preserve metered electricity's original energy unit and document conversion to MJ before normalization. |
| `gas_volume_condition` | natural gas for curing | Volume `93a60a56-a3c8-22da-a746-0800200c9a66` | m3 | Declare meter basis or reference conditions; do not convert gas volume without a documented factor. |

## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Purchased materials, components, energy, gases, water, and coating products cross the facility boundary. |
| starting_condition_role | Foreground manufacturing begins at receipt or generation; upstream extraction and production are linked datasets. |
| product_classification_scope | Complete new machines within CPC 3.0 44125 only; a subassembly is not a reference-product substitute. |
| recursive_input_rule | Record an actual same-category supplied input with its configuration and require a distinct upstream dataset; do not recursively substitute this PCR reference flow. |
| upstream_dataset_requirement | Link upstream data for each purchased product, electricity, natural gas, carbon dioxide, water, and waste route; disclose geography, technology, and supplier state. |
| disclosure | Declare exclusions, conditional routes, subcontracted operations, allocation choices, direct-emission control boundary, and omitted records. |

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `boundary_foreground_gate` | foreground manufacturing boundary | Include facility-gate inputs, final product, manufacturing waste, and measured direct emissions; identify upstream datasets rather than silently absorbing their burdens. | `iso-14044-2006` |
| `boundary_conditional_coating` | surface preparation and coating | Include pretreatment, application, flash-off, curing, and direct emissions only when the declared route uses them; retain coating chemistry and emission-control boundary. | `epa-metal-parts-surface-coating-tsd-2001` |
| `boundary_welding_emissions` | electric arc welding | When electric arc welding occurs, collect consumables and direct particulate or gaseous emissions at the declared exhaust boundary; do not apply a generic factor without route qualifiers. | `epa-ap42-electric-arc-welding-1995` |
| `boundary_representative_bom` | complete-baler configuration | Use one manufacturer-controlled model, serial-number range, and tying/braking/precutter configuration as the reporting configuration. The John Deere 568/578 manual establishes pickup, bale-chamber roll and bearing, power-train, hydraulic, wheel-hub, tying, lubrication, and electrical-control systems as a bounded representative component architecture; replace its illustrative architecture with the reporting manufacturer's controlled BOM and do not combine alternatives. | `john-deere-tm3300-2010` |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| `component_fabrication` | Component fabrication and welding | required | — | Fabricate and join structural components and combine purchased machine components | per accepted finished baler |
| `surface_finish` | Surface preparation and coating | conditional | Include only when the declared configuration is coated at the reporting facility. | Prepare, coat, cure, and manage coating emissions | per coated accepted finished baler |
| `final_assembly_acceptance` | Final assembly and acceptance | required | — | Assemble the complete machine and establish the accepted factory-gate output | one finished baler |

### Process: Component fabrication and welding (`component_fabrication`)

#### Inputs

##### Product flows

###### Carbon steel plate used in baler components (`steel_plate`)

Record received steel plate that is cut or formed into components; record grade, thickness, coating state, and supplier route separately from sections.

- Selected flow: Carbon steel plate (UUID unresolved)
- Flow property / unit: Mass / kg
- Amount rule: Weigh accepted plate issued to the manufacturing order less documented returns.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per one accepted finished baler
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material_issue`
- Sources:

###### Carbon steel structural sections used in the baler frame (`steel_structural_sections`)

Record received structural sections used in the frame; do not aggregate with plate because geometry and supply state may differ.

- Selected flow: Carbon steel structural sections (UUID unresolved)
- Flow property / unit: Mass / kg
- Amount rule: Weigh or obtain traceable material-issue records for installed sections.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per one accepted finished baler
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material_issue`
- Sources:

###### Purchased hydraulic cylinder installed in the baler (`hydraulic_cylinder`)

Record each received hydraulic cylinder installed in the declared configuration, retaining supplier and component specification.

- Selected flow: Hydraulic cylinder (UUID unresolved)
- Flow property / unit: Number / item
- Amount rule: Count cylinders installed in the accepted unit and retain supplier component records.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per one accepted finished baler
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_component_installation`
- Sources:

###### Purchased electrical energy for fabrication and welding (`fabrication_electricity`)

Record electricity attributed to fabrication and welding separately from coating electricity where meters or the documented allocation permit.

- Selected flow: Electricity `890a70b7-b677-4e2a-8a1b-7d017e0a10ae`
- Flow property / unit: Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- Amount rule: Metered fabrication and welding electricity allocated to the manufacturing order.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per one accepted finished baler
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_energy_records`
- Sources:

###### Steel welding wire (`welding_wire`)

Record consumable welding wire issued to the declared welding operations, retaining alloy and flux state.

- Selected flow: Steel welding wire (UUID unresolved)
- Flow property / unit: Mass / kg
- Amount rule: Weigh wire issued less documented returns by manufacturing order and welding route.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per one accepted finished baler
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_welding_records`
- Sources: `epa-ap42-electric-arc-welding-1995`

###### Carbon dioxide used as welding shielding gas (`welding_carbon_dioxide`)

Record only when the declared gas-metal-arc welding route uses supplied carbon dioxide shielding gas; retain gas composition and cylinder or bulk-meter basis.

- Selected flow: Carbon dioxide `27f41c1c-535e-4d2a-bce9-2c7f4de11549`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Metered or cylinder-accounted shielding gas used for the manufacturing order.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per one accepted finished baler
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_welding_records`
- Sources: `epa-ap42-electric-arc-welding-1995`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

##### Waste flows

###### Segregated steel fabrication scrap (`steel_scrap`)

Record metal offcuts and rejected components sent out of the foreground process, retaining alloy, contamination state, and receiving route.

- Selected flow: Post-industrial steel scrap `c143745d-be4f-4d8f-b403-2dcbfe685349`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Weigh scrap dispatched from the manufacturing order by receiving route.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per one accepted finished baler
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste_and_emissions`
- Sources:

##### Elementary flows

###### Particulate matter, PM10, from electric arc welding (`welding_pm10`)

Record only when electric arc welding occurs and the declared exhaust boundary releases a measured direct particulate emission.

- Selected flow: Particulate matter, PM10, from electric arc welding (UUID unresolved)
- Flow property / unit: Mass / kg
- Amount rule: Measured or mass-balanced direct particulate release after declared welding-exhaust controls.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per one accepted finished baler
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste_and_emissions`
- Sources: `epa-ap42-electric-arc-welding-1995`

### Process: Surface preparation and coating (`surface_finish`)

#### Inputs

##### Product flows

###### Process water for surface preparation (`coating_process_water`)

Record only when process water crosses the facility boundary for the declared surface-preparation route; declare water quality, source, and metering basis.

- Selected flow: Process Water `94a04f7e-2d5c-41f0-b182-d54a3b373a02`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Metered water used in the declared surface-preparation operation.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per one coated accepted finished baler
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_coating_records`
- Sources: `epa-metal-parts-surface-coating-tsd-2001`

###### Powder coating formulation (`powder_coating`)

Record the specific powder coating applied to the baler, retaining chemistry, solids content, application efficiency, and recovered-powder disposition.

- Selected flow: Powder Coating `0c581697-0eed-4b86-a070-b94966eb7344`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Weigh virgin coating issued less recovered coating returned to the documented reuse or waste route.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per one coated accepted finished baler
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_coating_records`
- Sources: `epa-metal-parts-surface-coating-tsd-2001`

###### Purchased electrical energy for coating (`coating_electricity`)

Record coating-equipment electricity separately where metering permits; otherwise retain the documented allocation to coated manufacturing orders.

- Selected flow: Electricity `890a70b7-b677-4e2a-8a1b-7d017e0a10ae`
- Flow property / unit: Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- Amount rule: Metered coating electricity allocated to coated manufacturing orders.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per one coated accepted finished baler
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_energy_records`
- Sources:

###### Natural gas for coating curing (`coating_natural_gas`)

Record only when the declared coating route uses gaseous natural gas for curing; declare meter reference conditions and curing equipment.

- Selected flow: natural gas in the gaseous state `4f19ca0e-7b3b-11dd-ad8b-0800200c9a66`
- Flow property / unit: Volume `93a60a56-a3c8-22da-a746-0800200c9a66` / m3
- Amount rule: Metered gaseous natural gas used by declared coating-curing equipment.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per one coated accepted finished baler
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_energy_records`
- Sources: `epa-metal-parts-surface-coating-tsd-2001`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

##### Waste flows

###### Aqueous surface-preparation wastewater (`coating_wastewater`)

Record only when the declared aqueous pretreatment route discharges or dispatches a physically distinct wastewater stream; retain the treatment destination and measured mass.

- Selected flow: Wastewater from cleaning `f0402393-e82c-47e8-9cd8-a486c97f3e89`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Measure wastewater leaving the foreground pretreatment operation, net of documented internal recirculation, by route and reporting period.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per one coated accepted finished baler
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_coating_outputs`
- Sources: `epa-metal-parts-surface-coating-tsd-2001`

###### Waste powder-coating overspray (`powder_overspray_waste`)

Record only when powder overspray is not returned to the same coating batch and instead leaves as a separately managed waste.

- Selected flow: Powder coating waste `9aa53a82-5462-400e-9096-efab7718201f`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Weigh unrecovered powder dispatched to the declared receiving route; exclude recovered powder returned to use.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per one coated accepted finished baler
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_coating_outputs`
- Sources: `epa-metal-parts-surface-coating-tsd-2001`

##### Elementary flows

###### Fossil carbon dioxide from on-site natural-gas curing (`coating_fossil_co2`)

Record only when natural gas is combusted at the reporting facility for coating cure. This is the direct combustion release and excludes upstream gas-supply and electricity emissions.

- Selected flow: carbon dioxide (fossil) `08a91e70-3ddc-11dd-923d-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Measure the controlled-stack release or calculate it from metered gas at declared reference conditions, supplier gas composition or measured fossil-carbon content, documented oxidation, and the carbon-to-carbon-dioxide molecular-mass ratio; do not use an undocumented default factor.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per one coated accepted finished baler
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_combustion_emissions`
- Sources: `epa-metal-parts-surface-coating-tsd-2001`

###### Non-methane volatile organic compounds from coating (`coating_nmvoc`)

Record only where the declared pretreatment or coating route uses organic solvents and releases measured non-methane volatile organic compounds after controls.

- Selected flow: non-methane volatile organic compounds `08a91e70-3ddc-11dd-a302-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Measure stack or fugitive release at the declared emission-control boundary and retain solvent composition.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per one coated accepted finished baler
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste_and_emissions`
- Sources: `epa-metal-parts-surface-coating-tsd-2001`

### Process: Final assembly and acceptance (`final_assembly_acceptance`)

#### Inputs

##### Product flows

The following component exchanges define a bounded round-pickup-baler architecture evidenced by the John Deere 568/578 technical manual. Instantiate one exact reporting configuration from the manufacturer's controlled BOM. Record only installed purchased components, keep fabricated parts under `component_fabrication`, and do not combine serial-number, braking, precutter, net-tying, or twine-tying alternatives.

###### Purchased pickup mechanism (`pickup_assembly`)

Record the complete purchased pickup mechanism only when the selected BOM treats it as one received component.

- Selected flow: Pickup mechanism for a baler (UUID unresolved)
- Flow property / unit: Number / item
- Amount rule: Count complete purchased pickup mechanisms installed in accepted units; if the pickup is fabricated on site, record its atomic material and component inputs instead and set this row not applicable.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per one accepted finished baler
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_component_installation`
- Sources: `john-deere-tm3300-2010`

###### Purchased bale-chamber roll (`bale_chamber_roll`)

Record each purchased roll that forms or supports the bale chamber in the selected configuration.

- Selected flow: Bale-chamber roll (UUID unresolved)
- Flow property / unit: Number / item
- Amount rule: Count purchased bale-chamber rolls installed in the controlled configuration; on-site-fabricated rolls are represented by their atomic fabrication inputs instead.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per one accepted finished baler
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_component_installation`
- Sources: `john-deere-tm3300-2010`

###### Purchased power-take-off driveline (`pto_driveline`)

Record the purchased tractor power-take-off driveline installed between the hitch interface and baler power train.

- Selected flow: Power-take-off driveline for a baler (UUID unresolved)
- Flow property / unit: Number / item
- Amount rule: Count the purchased driveline installed in the accepted configuration and retain part number, clutch type, and supplier.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per one accepted finished baler
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_component_installation`
- Sources: `john-deere-tm3300-2010`

###### Purchased gear case (`gear_case`)

Record each purchased gear case installed in the selected drive and precutter configuration.

- Selected flow: Baler gear case (UUID unresolved)
- Flow property / unit: Number / item
- Amount rule: Count purchased gear cases installed in the selected configuration; distinguish the configured precutter state and supplier part number.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per one accepted finished baler
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_component_installation`
- Sources: `john-deere-tm3300-2010`

###### Purchased drive chain (`drive_chain`)

Record purchased steel drive chain installed as a distinct transmission component.

- Selected flow: Steel drive chain (UUID unresolved)
- Flow property / unit: Mass / kg
- Amount rule: Record the net received mass of installed purchased drive chains by part number and chain specification.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per one accepted finished baler
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_component_installation`
- Sources: `john-deere-tm3300-2010`

###### Purchased rolling-element bearing (`rolling_element_bearing`)

Record purchased rolling-element bearings installed on bale-chamber rolls and other declared shafts.

- Selected flow: Rolling-element bearing for bale-chamber rolls (UUID unresolved)
- Flow property / unit: Number / item
- Amount rule: Count installed purchased bearings from the configuration-controlled BOM and retain bearing type, size, and supplier part number.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per one accepted finished baler
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_component_installation`
- Sources: `john-deere-tm3300-2010`

###### Purchased wheel and tire assembly (`wheel_tire_assembly`)

Record each purchased wheel-and-tire assembly supporting the accepted baler.

- Selected flow: Baler wheel and tire assembly (UUID unresolved)
- Flow property / unit: Number / item
- Amount rule: Count installed purchased wheel-and-tire assemblies and retain wheel, tire, hub, and brake configuration identifiers.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per one accepted finished baler
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_component_installation`
- Sources: `john-deere-tm3300-2010`

###### Purchased electronic tying controller (`electronic_controller`)

Record the purchased electronic control unit that performs tying-control functions in the selected configuration.

- Selected flow: Electronic controller for baler tying functions (UUID unresolved)
- Flow property / unit: Number / item
- Amount rule: Count installed purchased controllers for the selected manual or electronic tying-control configuration; do not aggregate monitors, wiring, sensors, or actuators into this row.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per one accepted finished baler
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_component_installation`
- Sources: `john-deere-tm3300-2010`

###### Purchased net-tying mechanism (`net_tying_mechanism`)

Record the purchased net-tying mechanism in the bounded representative configuration. A reporting configuration that instead uses twine tying must replace this row with its atomic twine-mechanism BOM exchanges and must not retain both alternatives.

- Selected flow: Net-tying mechanism for a baler (UUID unresolved)
- Flow property / unit: Number / item
- Amount rule: Count the installed net-tying mechanism from the selected controlled configuration and retain its supplier part number.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per one accepted finished baler
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_component_installation`
- Sources: `john-deere-tm3300-2010`

###### Factory-fill drive-chain lubricant (`factory_fill_lubricant`)

Record drive-chain lubricant added at the factory and remaining within the accepted product or foreground equipment boundary.

- Selected flow: Drive-chain lubricating oil (UUID unresolved)
- Flow property / unit: Mass / kg
- Amount rule: Weigh lubricant added before factory-gate acceptance less documented recovery; include only factory fill and exclude field-use maintenance lubricant.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per one accepted finished baler
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_component_installation`
- Sources: `john-deere-tm3300-2010`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Complete accepted straw or fodder baler (`finished_baler`)

Record the complete machine at factory-gate acceptance. Do not substitute an assembled or coated subassembly for this reference-product state.

- Selected flow: Finished straw or fodder baler (UUID unresolved)
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: One accepted finished baler with declared net mass and configuration.
- Value mode: Fixed value (`fixed_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: one accepted finished baler
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Identity reference (`identity_reference`)
- Collection protocol:
- Sources: `un-cpc-3-0-structure-2025`

##### Waste flows

##### Elementary flows

## 7. Allocation and Co-product Handling

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `allocation_subdivide_first` | shared manufacturing operations | Avoid allocation by subdividing meters, material issues, and waste records to the manufacturing order whenever feasible. | `iso-14044-2006` |
| `allocation_causal_basis` | residual shared operations | When subdivision is not feasible, allocate a shared record using a documented causal physical driver consistent across the reporting period; disclose the driver and calculation. | `iso-14044-2006` |
| `allocation_scrap_route` | steel scrap | Record segregated steel scrap to its declared receiving treatment route; do not credit recovery unless downstream modelling and receiving route are disclosed. | `iso-14044-2006` |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_material_issue` | component_fabrication | steel plate and structural sections | material issue and return records | order id; material grade; specification; mass issued; mass returned; supplier route | calibrated scale and traceable inventory record | kg | each order | reported production period | reporting facility | net issued mass / accepted balers of the declared configuration | reconciled issue, return, and stock records |
| `cp_component_installation` | component_fabrication_and_final_assembly_acceptance | declared purchased components and factory-fill lubricant | controlled BOM, receipt, installation, and fill records | manufacturer; model; serial range; configuration option; order id; component number; supplier; quantity or mass installed; rejected or returned quantity | configuration-controlled BOM reconciled to traceable assembly and issue records | item or kg | each order | reported production period | reporting facility | installed quantity or net fill / accepted balers of the exact configuration | signed BOM revision, part traceability, issue/return record, and acceptance record |
| `cp_energy_records` | component_fabrication | electricity and natural gas | meter record and allocation worksheet | meter id; reading; energy unit; gas conditions; operating time; order allocation driver | calibrated meter and allocation worksheet | MJ or m3 | each interval | reported production period | reporting facility | attributable meter total / accepted balers | meter calibration and utility reconciliation |
| `cp_welding_records` | component_fabrication | welding wire and shielding gas | consumable issue record | welding route; wire specification; gas composition; issued; returned; order id | traceable consumable record | kg | each order | reported production period | reporting facility | net consumable / accepted balers | lot and work-order reconciliation |
| `cp_coating_records` | surface_finish | water and powder coating | coating-batch and meter record | route; water quality; coating chemistry; issued mass; recovered mass; meter reading; order id | batch record, scale, and meter | kg | each coating batch | reported production period | reporting facility | net input / coated accepted balers | batch reconciliation and coating-process record |
| `cp_coating_outputs` | surface_finish | pretreatment wastewater and waste powder overspray | flow-meter, scale, mass-balance, and dispatch records | coating route; water input; recirculated water; discharged or dispatched wastewater; powder issued; powder recovered to use; waste powder; receiving route; order allocation | calibrated meter and scale reconciled to batch and dispatch records | kg | each batch or dispatch | reported production period | reporting facility | measured output / coated accepted balers with documented allocation | batch balance, internal-recirculation record, and receiving record |
| `cp_combustion_emissions` | surface_finish | fossil carbon dioxide from curing-gas combustion | stack measurement or metered-gas carbon calculation | gas meter reading and reference conditions; supplier composition or measured fossil-carbon content; oxidation basis; control boundary; accepted coated units | documented stack measurement or carbon mass balance | kg | each campaign or reporting interval | reported production period | reporting facility | direct fossil CO2 / coated accepted balers with matching gas-use allocation | measurement report or calculation worksheet reconciled to the gas meter |
| `cp_waste_and_emissions` | component_fabrication and surface_finish | steel scrap, welding PM10, and coating NMVOC | dispatch record or emission measurement | stream identity; mass; control device; sampling method; receiving route; allocation | scale, dispatch record, or documented emission test | kg | dispatch or campaign | reported period and test date | reporting facility | recorded quantity / accepted balers with documented allocation | receiving record, control log, and test report |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_net_material_issue` | steel, welding wire, and powder coating | Net issue = issued mass − documented returned or recovered mass; divide by accepted balers of the declared configuration. | issue, return, recovery, acceptance records | normalized material input | |
| `calc_metered_energy` | electricity and natural gas | Attribute metered consumption with a documented causal driver when no dedicated meter exists; divide by accepted balers. | meter readings, gas conditions, operating time, allocation driver, acceptance records | normalized energy or gas input | `iso-14044-2006` |
| `calc_direct_release` | direct particulate and NMVOC | Normalize measured or mass-balanced release after the declared control boundary to accepted balers for the matching period and route. | emission measurement or mass balance, control boundary, acceptance records | normalized elementary emission | `epa-ap42-electric-arc-welding-1995`; `epa-metal-parts-surface-coating-tsd-2001` |
| `calc_controlled_bom` | purchased components and factory-fill lubricant | Select exactly one model, serial-number range, and route configuration; include each applicable atomic BOM line once, replace on-site-fabricated component rows with their material exchanges, subtract documented returns, and divide by accepted units of the same configuration. | signed BOM revision, part receipts, installation or fill records, returns, accepted units | normalized configured component or consumable input | `john-deere-tm3300-2010` |
| `calc_coating_residuals` | wastewater and powder overspray | For each declared coating batch, report measured wastewater leaving the foreground boundary net of internal recirculation and measured powder waste dispatched net of powder returned to the same process; do not infer either output as an unverified difference. | water and powder batch inputs, recirculation/recovery records, output measurements, dispatch records, accepted coated units | normalized wastewater and powder-waste outputs | `epa-metal-parts-surface-coating-tsd-2001` |
| `calc_natural_gas_co2` | direct fossil CO2 from curing | Use a direct measurement or calculate fossil CO2 = metered gas volume at stated conditions × documented fossil-carbon mass per gas volume × documented oxidation fraction × 44/12; normalize to coated accepted units sharing the gas allocation. No undocumented default composition or oxidation factor is permitted. | gas volume and conditions, supplier composition or measured fossil-carbon content, oxidation evidence, accepted coated units | normalized direct fossil CO2 emission | |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_configuration` | reference product and components | Retain configuration, baler type, pickup fitment, net mass, and component specifications; do not combine different configurations without disclosure. | acceptance record and controlled bill of materials |
| `dq_bom_instantiation` | complete-baler component inputs | Reconcile the accepted unit to one signed BOM revision and one serial/configuration record. Explain each difference from the representative 568/578 architecture and demonstrate that pickup, bale chamber, transmission, hydraulic, bearings, wheels/brakes, tying, controls, and factory-fill consumables are included, manufactured on site through other rows, or explicitly not applicable. | BOM reconciliation and configuration deviation log |
| `dq_temporal` | all foreground records | Use one declared reporting period and retain dates for records and emission measurements. | dated primary records |
| `dq_boundary` | conditional welding and coating | State whether welding, pretreatment, coating, flash-off, curing, and controls occur at the reporting facility. | process map, work instructions, and control log |
| `dq_completeness` | all inventory rows | Disclose missing flows, UUID gaps, omitted routes, allocation drivers, and upstream datasets. | data-package completeness statement |

## 9. Validation Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `validation_reference_identity` | reference product | Confirm that the output is one complete accepted baler, not an agricultural straw flow or unfinished baler subassembly. | `un-cpc-3-0-structure-2025` |
| `validation_mass_and_configuration` | reference flow | Check net accepted mass, baler type, pickup status, facility, and production period before normalization. | |
| `validation_route_conditions` | conditional rows | Include coating and welding rows only when their route applies; verify associated meter, material, waste, and emission records. | `epa-ap42-electric-arc-welding-1995`; `epa-metal-parts-surface-coating-tsd-2001` |
| `validation_bom_closure` | final assembly inputs | Verify one controlled model/serial/configuration and reconcile every installed purchased component and factory-fill consumable to the accepted unit; fail if an alternative configuration is mixed into the same inventory. | `john-deere-tm3300-2010` |
| `validation_coating_output_closure` | surface preparation and coating | When aqueous pretreatment, powder coating, or natural-gas curing applies, require the corresponding measured wastewater, measured waste-powder, and direct fossil-CO2 row or a documented zero/not-applicable determination supported by the actual route. | `epa-metal-parts-surface-coating-tsd-2001` |
| `validation_uuid_resolution` | unresolved flow rows | Do not use proxies for unresolved UUIDs; resolve only after exact flow identity, product state, property, and unit are confirmed. | |
| `validation_balance` | material and waste records | Reconcile material issues, returns, finished output, and scrap dispatch; investigate unexplained differences. | |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | foreground data package projected as a secondary_dataset or background_dataset |
| downstream_use | Manufacturing-stage process and lifecyclemodel projections for the declared baler configuration |
| allowed_use | Cradle-to-gate or manufacturing-stage studies retaining configuration, facility, period, upstream datasets, and exclusions |
| excluded_use | Baling service, crop production, field-use performance, or comparison of different configurations without additional foreground data |
| required_metadata | manufacturer; facility; geography; period; baler type; pickup status; net mass; component specifications; coating and welding route; energy basis; upstream datasets; allocation; emission-control boundary |
| required_quality_disclosure | record coverage, missing UUIDs, unresolved range evidence, allocation drivers, measurement basis, conditional-route applicability, and quality exceptions |
| update_trigger | Change in configuration, material specification, pickup design, supplier route, welding or coating technology, energy source, emission control, facility, or measurement method |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `un-cpc-3-0-structure-2025` | official_guidance | United Nations Statistics Division, CPC Version 3.0 structure CSV, row 44125, https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Structure_30Jun2025.csv | Product classification identity and scope |
| `epa-ap42-electric-arc-welding-1995` | official_guidance | U.S. EPA, AP-42 Chapter 12.19, Electric Arc Welding, January 1995, https://www.epa.gov/sites/production/files/2020-11/documents/c12s19.pdf | Welding process, consumable, emission, and qualifier collection rules |
| `epa-metal-parts-surface-coating-tsd-2001` | official_guidance | U.S. EPA, National Emission Standards for Hazardous Air Pollutants for Miscellaneous Metal Parts and Products Surface Coating Operations: Technical Support Document, https://nepis.epa.gov/Exe/ZyPDF.cgi?Dockey=P1006FDO.PDF | Conditional agricultural-machinery coating boundary and potential emission points |
| `iso-14044-2006` | standard | ISO 14044:2006 Environmental management — Life cycle assessment — Requirements and guidelines, confirmed 2022, https://committee.iso.org/standard/38498.html | LCA scope, inventory, reporting, and allocation-rule basis |
| `john-deere-tm3300-2010` | official_guidance | Deere & Company, 568 and 578 Round Balers Technical Manual, TM3300 (31MAR10), official preview, https://techpubs.deere.com/api/preview/get/TM3300 | Bounded representative pickup-baler component architecture, configuration alternatives, and controlled-BOM instantiation requirements |
