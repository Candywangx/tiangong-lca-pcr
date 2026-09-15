---
pcr_id: pcr.metal-products-machinery-and-equipment.fabricated-metal-products-except-machinery-and-equipment.containers-for-compressed-or-liquefied-gas-of-iron-steel-or-aluminium
language: en-US
status: candidate
sync_with: pcr.zh-CN.md
---

# Containers for compressed or liquefied gas, of iron, steel or aluminium

## 1. Scope and Applicability

This PCR applies to the cradle-to-gate production of empty iron, steel, or aluminium pressure containers made to contain compressed, liquefied, or dissolved gas. Covered products include refillable or non-refillable cylinders, tubes, pressure drums, and comparable metal pressure receptacles when their principal pressure-retaining body is iron, steel, or aluminium.

The foreground boundary starts with accepted metal stock and other purchased inputs at the manufacturing site and ends with a conforming, empty container released at the factory gate. It covers shell forming, route-specific joining, required heat treatment, machining and opening preparation, cleaning and surface finishing, pressure and mechanical testing performed by the manufacturer, rejection, and final release. Gas production and filling, valve manufacture when the valve is supplied as a separate product, distribution, use, periodic inspection or requalification, repair, and end-of-life are outside this PCR.

Composite pressure vessels whose load-bearing structure is not principally iron, steel, or aluminium, aerosol dispensers, small gas cartridges, and stationary reservoirs or tanks not intended for compressed or liquefied gas are excluded. A dataset must declare the vessel family, refillability, material and alloy, manufacturing route, water capacity, service pressure, test pressure, applicable design/manufacturing standard, included accessories, surface finish, geography, and reporting period.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.metal-products-machinery-and-equipment.fabricated-metal-products-except-machinery-and-equipment.containers-for-compressed-or-liquefied-gas-of-iron-steel-or-aluminium |
| classification_refs | CPC 3.0: 42220 (exact classification context) |
| covered_products | Empty iron, steel, or aluminium pressure receptacles for compressed, liquefied, or dissolved gas, including cylinders, tubes, pressure drums, and comparable metal containers |
| excluded_products | Filled gas packages; composite vessels not principally load-bearing metal; aerosol dispensers; gas cartridges; stationary non-gas tanks; separately supplied valves; use, requalification, repair, and end-of-life services |
| representative_product | Empty refillable steel or aluminium gas cylinder that has passed the declared manufacturing conformity tests |
| production_route | Seamless steel from billet or tube; welded steel from plate; seamless aluminium from alloy billet; route-specific heat treatment, finishing, testing, and release |
| market_state | Empty, finished, inspected, pressure-tested, marked where required, and ready for dispatch at the manufacturing gate |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Provide an empty metal pressure receptacle capable of containing the declared compressed, liquefied, or dissolved gas under the declared service conditions |
| How much | 1 kg of accepted empty container product at the manufacturing gate |
| How well | Conforming to the declared material, water capacity, service pressure, test pressure, manufacturing route, inspection plan, and applicable design/manufacturing standard |
| How long or cycle | One factory-gate production output; service life and refill cycles must be declared for downstream use but are not modelled in this cradle-to-gate reference flow |
| reference_flow_link | 1 kg net mass of conforming empty container output, excluding separately supplied gas and accessories unless explicitly included |

| Field | Value |
| --- | --- |
| Reference amount | 1 kg |
| Reference product flow | Empty iron, steel, or aluminium container for compressed or liquefied gas |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | vessel family; refillability; pressure-shell material and alloy; input stock form; seamless or welded route; water capacity; service pressure; test pressure; gas-service compatibility; design/manufacturing standard; inspection and test plan; included accessories; surface finish; net empty mass; production geography; reporting period |

When constructing a foreground data package, every item in `Required qualifiers` must be declared in dataset metadata, process notes, the reference flow comment, the product description, or an equivalent field. Missing qualifiers make the reference flow incomplete.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| `reference_mass` | Reference product and mass-based material, waste, and emission rows | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Use calibrated net mass. Exclude contained gas, test water, removable transport packaging, and separately supplied accessories unless the declared product system explicitly includes them. |
| `energy_conversion` | Electricity and fuels | Net calorific value for energy reporting | MJ | Preserve measured purchase units and conversion factors. Report electricity in MJ using 1 kWh = 3.6 MJ; use supplier- or laboratory-specific net calorific value for fuels and disclose it. |
| `gas_volume_conditions` | Natural gas and industrial oxygen | Volume `93a60a56-a3c8-22da-a746-0800200c9a66` | m3 | Declare temperature, absolute pressure, gas composition, and compressibility convention for every volume record; convert all records to one declared reference condition before aggregation. |
| `water_mass_conversion` | Process and test water | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Prefer mass metering; when volume is measured, apply a documented density at the measured temperature and retain the raw volume and conversion record. Count net make-up only when water is recirculated. |
| `piece_to_mass` | Containers recorded by count | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Convert accepted pieces to net empty product mass using calibrated unit or batch weighing; retain piece count, tare definition, sample coverage, and variability. |

## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Accepted iron, steel, or aluminium stock and other purchased inputs at the manufacturing-site receiving gate |
| starting_condition_role | Foreground manufacturing starts after upstream production and delivery of purchased materials and energy carriers |
| product_classification_scope | Empty metal containers whose defining function is containment of compressed, liquefied, or dissolved gas |
| recursive_input_rule | If an already manufactured in-scope gas container is consumed as an input, record it as a purchased product with a separate upstream dataset; do not recursively reproduce its manufacturing inventory inside this foreground process |
| upstream_dataset_requirement | Link every purchased product, energy, and waste-treatment service to a geographically and technologically representative upstream dataset; disclose substitutions and data gaps |
| disclosure | Declare included operations, route, material/alloy, input stock form, testing standard, rejected product treatment, surface-finishing route, included accessories, cut-offs, allocation, geography, and time period |

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `sb_factory_gate` | foreground manufacturing | Include all site operations from accepted stock through a conforming empty container at the factory gate, including forming, applicable joining and heat treatment, machining, cleaning/finishing, pressure testing, inspection, rejects, and directly attributable utilities, wastes, and emissions. | `us-dot-49-cfr-178-37`; `us-dot-49-cfr-178-46`; `us-dot-49-cfr-178-50` |
| `sb_upstream_links` | purchased inputs and services | Keep purchased-input production and external waste treatment outside the foreground gate but connect each crossing flow to an appropriate upstream or treatment dataset. | `ec-pef-method-2021` |
| `sb_exclusions` | downstream stages | Exclude gas filling, distribution, use, periodic inspection/requalification, repair, and end-of-life unless a broader study explicitly adds them as separate downstream processes. | `un-cpc-3-0-structure-2025` |
| `sb_cutoff_disclosure` | completeness | Do not apply an automatic mass, energy, or environmental-significance cut-off. Quantify and justify every excluded crossing flow and disclose the cumulative omission. | `ec-pef-method-2021` |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| `material_preparation_and_shell_forming` | Material preparation and pressure-shell forming | required |  | Foreground shell production | Accepted formed shell mass and route-specific metal balance |
| `pressure_shell_joining` | Pressure-shell seam and attachment joining | conditional | Include when the declared design uses a welded or brazed pressure shell or flux-cored welding for a qualifying joint | Foreground joining | Joined shell mass and qualified joint records |
| `heat_treatment` | Route-specific heat treatment | conditional | Include whenever the declared alloy, forming route, or manufacturing standard requires normalizing, quenching, tempering, solution treatment, ageing, stress relief, or another thermal cycle | Foreground material conditioning | Heat-treated shell mass and recorded furnace cycle |
| `machining_cleaning_and_finishing` | Machining, cleaning, and surface finishing | required |  | Foreground finishing | Finished shell surface and accepted pre-test container mass |
| `inspection_pressure_test_and_release` | Inspection, pressure test, marking, and release | required |  | Foreground conformity and product release | Net mass of conforming empty containers released |

### Process: Material preparation and pressure-shell forming (`material_preparation_and_shell_forming`)

#### Inputs

##### Product flows

###### Non-alloy steel billet feedstock (`steel_billet`)

Record purchased billet only for a qualified seamless-steel route using this stock form. Preserve grade, heat number, supplier, delivery state, and assigned batch.

- Selected flow: Billet `7de70586-42d8-40bb-a687-e0e0c05722e4`
- Flow property / unit: Mass / kg
- Amount rule: Measured accepted billet mass issued to the declared production batch
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg conforming empty container output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material_balance`
- Sources:

###### Seamless steel tube feedstock (`seamless_steel_tube`)

Record circular seamless steel tube only where the cylinder route starts from qualified tube stock. The Tiangong UUID remains unresolved because the audited candidates were pipeline, non-circular, seamed, or different-metal products.

- Selected flow: Circular seamless steel tube for pressure-cylinder manufacture
- Flow property / unit: Mass / kg
- Amount rule: Measured accepted seamless tube mass issued to the declared production batch
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg conforming empty container output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material_balance`
- Sources:

###### Steel plate feedstock (`steel_plate`)

Record pressure-shell plate only for the declared welded-steel route. Preserve grade, thickness, heat number, supplier, and batch assignment.

- Selected flow: Steel Plate `421db3a5-394d-410b-8ebf-af23a37fc878`
- Flow property / unit: Mass / kg
- Amount rule: Measured accepted steel plate mass issued to the declared welded-container batch
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg conforming empty container output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material_balance`
- Sources:

###### Aluminium-alloy billet feedstock (`aluminium_alloy_billet`)

Record traceable aluminium-alloy billet only for a qualified seamless-aluminium route. Alloy, cast, heat-treatment batch, supplier, and delivery state are mandatory foreground qualifiers; the mass-based Tiangong UUID is unresolved.

- Selected flow: Aluminium-alloy billet for seamless gas-cylinder manufacture
- Flow property / unit: Mass / kg
- Amount rule: Measured accepted aluminium-alloy billet mass issued to the declared production batch
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg conforming empty container output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material_balance`
- Sources:

###### Forming electricity (`forming_electricity`)

Record metered electricity assigned to cutting, heating, extrusion, drawing, spinning, pressing, and other shell-forming equipment without including heat-treatment or downstream finishing electricity.

- Selected flow: Electricity `890a70b7-b677-4e2a-8a1b-7d017e0a10ae`
- Flow property / unit: Net calorific value / MJ
- Amount rule: Metered or reconciled electricity attributable to material preparation and shell forming
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg accepted formed shell output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_energy_and_fuel`
- Sources:

###### Oxygen for oxy-fuel preparation (`cutting_oxygen`)

Record oxygen only when oxy-fuel cutting, heating, or edge preparation is actually used in this process. Keep it separate from air and shielding gas.

- Selected flow: Industrial oxygen `bd4b0f96-2090-4806-a648-335ab20ff401`
- Flow property / unit: Volume / m3
- Amount rule: Metered or cylinder-balance oxygen attributable to the declared preparation route
- Value mode: Foreground record (`foreground_record`)
- Specificity: Route-specific (`route_specific`)
- Normalization basis: per 1 kg accepted formed shell output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_energy_and_fuel`
- Sources:

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

##### Waste flows

###### Post-industrial steel forming scrap (`forming_steel_scrap`)

Record segregated steel offcuts, chips, and rejected formed steel shell material leaving the process. Do not include accepted product mass or scrap internally remelted without crossing the process boundary.

- Selected flow: Post-industrial steel scrap `c143745d-be4f-4d8f-b403-2dcbfe685349`
- Flow property / unit: Mass / kg
- Amount rule: Weighed steel scrap leaving shell forming, reconciled to the steel material balance
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg accepted formed steel shell output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material_balance`
- Sources:

###### Aluminium forming scrap (`forming_aluminium_scrap`)

Record segregated aluminium offcuts, chips, and rejected formed aluminium shell material leaving the process. Preserve alloy and contamination status.

- Selected flow: Aluminium Scrap `96c5f842-ea53-419b-b1cd-c02c479efb45`
- Flow property / unit: Mass / kg
- Amount rule: Weighed aluminium scrap leaving shell forming, reconciled to the aluminium material balance
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg accepted formed aluminium shell output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material_balance`
- Sources:

##### Elementary flows

### Process: Pressure-shell seam and attachment joining (`pressure_shell_joining`)

#### Inputs

##### Product flows

###### Flux-cored welding wire (`flux_cored_wire`)

Record flux-cored wire only for a qualified welding procedure that uses it. Preserve consumable grade, batch, deposited-metal compatibility, and joint assignment.

- Selected flow: Flux Cored Wire `1b74a576-06e0-4764-97ce-11a73f8a4752`
- Flow property / unit: Mass / kg
- Amount rule: Issued mass minus verified return of unused wire for qualifying pressure-shell and attachment joints
- Value mode: Foreground record (`foreground_record`)
- Specificity: Route-specific (`route_specific`)
- Normalization basis: per 1 kg accepted joined shell output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_welding_consumables`
- Sources:

###### Joining electricity (`joining_electricity`)

Record electricity metered or allocated to qualified welding and brazing equipment for the declared container route.

- Selected flow: Electricity `890a70b7-b677-4e2a-8a1b-7d017e0a10ae`
- Flow property / unit: Net calorific value / MJ
- Amount rule: Metered or reconciled electricity attributable to pressure-shell and attachment joining
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg accepted joined shell output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_energy_and_fuel`
- Sources:

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

##### Waste flows

##### Elementary flows

### Process: Route-specific heat treatment (`heat_treatment`)

#### Inputs

##### Product flows

###### Natural gas for furnace firing (`heat_treatment_natural_gas`)

Record gaseous natural gas only for heat-treatment equipment that actually consumes it. Declare gas composition, reference conditions, net calorific value, and furnace assignment.

- Selected flow: natural gas in the gaseous state `4f19ca0e-7b3b-11dd-ad8b-0800200c9a66`
- Flow property / unit: Volume / m3
- Amount rule: Metered or supplier-reconciled natural gas consumed by qualifying heat-treatment cycles
- Value mode: Foreground record (`foreground_record`)
- Specificity: Route-specific (`route_specific`)
- Normalization basis: per 1 kg accepted heat-treated shell output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_energy_and_fuel`
- Sources:

###### Diesel for furnace firing (`heat_treatment_diesel`)

Record diesel only where it is the actual heat-treatment fuel. Keep it separate from mobile-equipment diesel and declare grade, biogenic fraction, and net calorific value.

- Selected flow: Diesel fuel `9d258d75-6792-4f1c-9856-81602ed8f816`
- Flow property / unit: Mass / kg
- Amount rule: Tank-balance or invoice-reconciled diesel consumed by qualifying heat-treatment cycles
- Value mode: Foreground record (`foreground_record`)
- Specificity: Route-specific (`route_specific`)
- Normalization basis: per 1 kg accepted heat-treated shell output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_energy_and_fuel`
- Sources:

###### Heat-treatment electricity (`heat_treatment_electricity`)

Record electricity used by resistance, induction, controls, pumps, and fans assigned to the declared heat-treatment cycle. Do not double count electricity already represented through purchased heat.

- Selected flow: Electricity `890a70b7-b677-4e2a-8a1b-7d017e0a10ae`
- Flow property / unit: Net calorific value / MJ
- Amount rule: Metered or reconciled electricity attributable to qualifying heat-treatment cycles
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg accepted heat-treated shell output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_energy_and_fuel`
- Sources:

###### Quench-water make-up (`quench_water`)

Record only fresh process-water make-up crossing the heat-treatment boundary. Recirculated water is not counted again.

- Selected flow: Process Water `94a04f7e-2d5c-41f0-b182-d54a3b373a02`
- Flow property / unit: Mass / kg
- Amount rule: Metered make-up water assigned to qualifying quench operations, net of returned or recirculated water
- Value mode: Foreground record (`foreground_record`)
- Specificity: Route-specific (`route_specific`)
- Normalization basis: per 1 kg accepted heat-treated shell output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_water_balance`
- Sources:

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

##### Waste flows

##### Elementary flows

###### Direct fossil carbon dioxide (`heat_treatment_co2`)

Record direct fossil carbon dioxide released from on-site combustion of natural gas or diesel assigned to heat treatment. Exclude upstream electricity emissions and avoid duplicating stack measurements with fuel-balance calculations.

- Selected flow: carbon dioxide (fossil) `08a91e70-3ddc-11dd-923d-0050c2490048`
- Flow property / unit: Mass / kg
- Amount rule: Calculate from collected fuel consumption and verified fossil carbon content, or use validated stack measurement, with one method selected for the reporting period
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg accepted heat-treated shell output
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_direct_emissions`
- Sources:

### Process: Machining, cleaning, and surface finishing (`machining_cleaning_and_finishing`)

#### Inputs

##### Product flows

###### Sodium hydroxide for aqueous cleaning (`cleaning_sodium_hydroxide`)

Record sodium hydroxide only when it crosses the foreground boundary as the declared cleaning or pretreatment chemical. Preserve solution concentration and supplier state.

- Selected flow: Sodium hydroxide `e0abcced-0611-4c24-9290-5a2c5a0c4169`
- Flow property / unit: Mass / kg
- Amount rule: Active sodium hydroxide mass calculated from issued solution mass and measured concentration
- Value mode: Calculated value (`calculated_value`)
- Specificity: Route-specific (`route_specific`)
- Normalization basis: per 1 kg accepted finished container before pressure testing
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_surface_chemicals`
- Sources:

###### Cleaning-water input (`cleaning_water`)

Record process water used for washing, rinsing, and aqueous surface preparation. Count net make-up and keep it separate from pressure-test water.

- Selected flow: Process Water `94a04f7e-2d5c-41f0-b182-d54a3b373a02`
- Flow property / unit: Mass / kg
- Amount rule: Metered net cleaning and rinse-water make-up assigned to the declared finishing route
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg accepted finished container before pressure testing
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_water_balance`
- Sources:

###### Powder coating input (`powder_coating`)

Record powder coating only when this finish is applied. Preserve resin chemistry, colour, batch, cured-film specification, and recovered-powder practice.

- Selected flow: Powder Coating `0c581697-0eed-4b86-a070-b94966eb7344`
- Flow property / unit: Mass / kg
- Amount rule: Issued coating mass minus verified reusable powder returned to stock
- Value mode: Foreground record (`foreground_record`)
- Specificity: Route-specific (`route_specific`)
- Normalization basis: per 1 kg accepted powder-coated container before pressure testing
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_surface_chemicals`
- Sources:

###### Finishing electricity (`finishing_electricity`)

Record electricity assigned to machining, washing, drying, coating application, coating recovery, and curing within this process.

- Selected flow: Electricity `890a70b7-b677-4e2a-8a1b-7d017e0a10ae`
- Flow property / unit: Net calorific value / MJ
- Amount rule: Metered or reconciled electricity attributable to machining, cleaning, and finishing
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg accepted finished container before pressure testing
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_energy_and_fuel`
- Sources:

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

##### Waste flows

###### Cleaning wastewater (`cleaning_wastewater`)

Record wastewater leaving aqueous cleaning and rinsing before off-site or on-site treatment. Preserve pH, principal contaminants, treatment state, and destination.

- Selected flow: Wastewater from cleaning `f0402393-e82c-47e8-9cd8-a486c97f3e89`
- Flow property / unit: Mass / kg
- Amount rule: Metered or mass-balanced cleaning wastewater crossing the process boundary
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg accepted finished container before pressure testing
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_water_balance`
- Sources:

###### Unrecovered powder-coating residue (`powder_coating_waste`)

Record only spent powder and unrecovered overspray leaving the process as waste. Do not count powder internally recovered and returned to the application system.

- Selected flow: Powder coating waste `9aa53a82-5462-400e-9096-efab7718201f`
- Flow property / unit: Mass / kg
- Amount rule: Weighed powder-coating waste dispatched from the finishing process
- Value mode: Foreground record (`foreground_record`)
- Specificity: Route-specific (`route_specific`)
- Normalization basis: per 1 kg accepted powder-coated container before pressure testing
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_surface_chemicals`
- Sources:

##### Elementary flows

### Process: Inspection, pressure test, marking, and release (`inspection_pressure_test_and_release`)

#### Inputs

##### Product flows

###### Hydrostatic pressure-test water (`pressure_test_water`)

Record fresh process-water make-up for hydrostatic testing. Reused test water remains inside the process and is not counted again.

- Selected flow: Process Water `94a04f7e-2d5c-41f0-b182-d54a3b373a02`
- Flow property / unit: Mass / kg
- Amount rule: Metered fresh test-water make-up net of recovered water during the reporting period
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg conforming empty container output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_water_balance`
- Sources:

###### Testing and release electricity (`test_electricity`)

Record electricity for pressure pumps, test controls, drying, marking, handling, and final inspection assigned to released containers.

- Selected flow: Electricity `890a70b7-b677-4e2a-8a1b-7d017e0a10ae`
- Flow property / unit: Net calorific value / MJ
- Amount rule: Metered or reconciled electricity attributable to inspection, pressure testing, drying, marking, and release
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg conforming empty container output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_energy_and_fuel`
- Sources:

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Conforming empty metal gas container (`reference_product`)

This is the accepted empty pressure container released at the manufacturing gate. The Tiangong product-flow UUID is unresolved; the row remains mass-based and fully qualified by the declared product specification.

- Selected flow: Empty iron, steel, or aluminium container for compressed or liquefied gas
- Flow property / unit: Mass / kg
- Amount rule: Calibrated net empty mass of containers that passed all required inspections and tests
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: 1 kg conforming empty container output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_final_product_and_tests`
- Sources:

##### Waste flows

###### Rejected steel container scrap (`rejected_steel_container`)

Record the net mass of rejected steel containers or destructive steel test specimens leaving the process as scrap. Prevent duplication with forming scrap.

- Selected flow: Post-industrial steel scrap `c143745d-be4f-4d8f-b403-2dcbfe685349`
- Flow property / unit: Mass / kg
- Amount rule: Weighed rejected steel container and destructive-test scrap dispatched from final inspection
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg conforming empty steel container output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_final_product_and_tests`
- Sources:

###### Rejected aluminium container scrap (`rejected_aluminium_container`)

Record the net mass of rejected aluminium containers or destructive aluminium test specimens leaving the process as scrap. Prevent duplication with forming scrap.

- Selected flow: Aluminium Scrap `96c5f842-ea53-419b-b1cd-c02c479efb45`
- Flow property / unit: Mass / kg
- Amount rule: Weighed rejected aluminium container and destructive-test scrap dispatched from final inspection
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg conforming empty aluminium container output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_final_product_and_tests`
- Sources:

##### Elementary flows

## 7. Allocation and Co-product Handling

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `al_subdivision_first` | shared manufacturing operations | Avoid allocation by sub-metering, batch assignment, equipment time, furnace charge, surface area, joint length, test count, or another causal physical record before applying an allocation factor. | `ec-pef-method-2021` |
| `al_shared_utilities` | utilities serving multiple products | Allocate only the residual shared quantity using a documented causal driver. Mass may be used only when it represents resource demand; otherwise use machine time, thermal load, surface area, or another justified driver and disclose a sensitivity check. | `ec-pef-method-2021` |
| `al_scrap` | metal scrap outputs | Report steel and aluminium scrap as waste outputs at the point they leave the foreground process. Do not subtract an avoided-primary-metal credit from the foreground inventory; any recycling substitution belongs to an explicitly declared downstream method. | `ec-pef-method-2021` |
| `al_rework` | internal rework | Keep rework that does not cross the process boundary inside the batch balance and assign its incremental energy and material use to the resulting accepted output. Record material leaving the system as waste only once. |  |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_material_balance` | material_preparation_and_shell_forming | Each metal stock input and each segregated metal scrap output | Batch issue, weighment, return, scrap, and inventory record | row_id; material/alloy; heat/cast; supplier; opening stock; receipts; issued mass; returned mass; accepted work-in-process; scrap mass; batch; unit | Reconcile calibrated scales, stock ledger, production issue, and scrap dispatch records for each material and row_id | kg | Each batch with monthly closure | Complete reporting period | All in-scope forming operations | Sum only records assigned to the row and batch; prevent duplicate scrap assignment; normalize by accepted output | Scale calibration; material certificate; heat/cast traceability; stock reconciliation; scrap ticket |
| `cp_welding_consumables` | pressure_shell_joining | Flux-cored welding wire | Consumable issue and return record | row_id; consumable grade; batch; opening stock; receipts; issued mass; returned mass; joint/work order; accepted output | Reconcile stores and work-order records for each qualified welding procedure | kg | Each batch with monthly closure | Complete reporting period | In-scope joined pressure shells and attachments | Net consumption equals issue minus verified unused return; normalize by accepted joined-shell mass | Consumable certificate; qualified procedure; stores reconciliation; work order |
| `cp_energy_and_fuel` | material_preparation_and_shell_forming; pressure_shell_joining; heat_treatment; machining_cleaning_and_finishing; inspection_pressure_test_and_release | One electricity, natural-gas, diesel, or oxygen row | Meter, invoice, tank, or cylinder record | row_id; meter/source id; opening/closing reading or stock; receipts; returns; reference conditions; calorific value; equipment/process; batch; allocation driver | Read calibrated meters or reconcile supplier and stock records separately for each carrier and row_id | MJ; kWh; kg; m3 | Each batch or monthly, with reporting-period closure | Complete reporting period | All directly controlled in-scope equipment | Apply declared unit conversion and causal allocation; never combine carriers; normalize to process or reference output | Calibration; invoice; tank/cylinder ledger; fuel specification; allocation worksheet |
| `cp_water_balance` | heat_treatment; machining_cleaning_and_finishing; inspection_pressure_test_and_release | One process-water input or cleaning-wastewater output | Meter and recirculation balance | row_id; meter id; opening/closing reading; make-up; recirculated; discharged; transferred; temperature; density; process; batch | Reconcile inlet, reuse, inventory, and discharge meters; sample composition where wastewater crosses the boundary | kg; m3 | Each batch or monthly, with reporting-period closure | Complete reporting period | In-scope quench, cleaning, rinsing, and hydrostatic-test systems | Count only net make-up as input and boundary-crossing wastewater as output; convert volume to mass with documented density | Meter calibration; water balance; density record; wastewater analysis; discharge or transfer record |
| `cp_surface_chemicals` | machining_cleaning_and_finishing | Sodium hydroxide, powder coating, and powder-coating waste as separate rows | Chemical issue, concentration, recovery, return, and waste record | row_id; chemical/product; concentration; batch; opening stock; receipts; issued; recovered; returned; closing stock; waste mass; destination | Reconcile each named chemical independently using calibrated mass records and measured concentration | kg | Each batch with monthly closure | Complete reporting period | Declared cleaning and coating route | Calculate active sodium hydroxide separately; exclude reusable recovered powder from net input and waste; normalize by accepted finished output | Supplier specification; concentration test; scale calibration; stock balance; waste ticket |
| `cp_direct_emissions` | heat_treatment | Fossil carbon dioxide from on-site fuel combustion | Fuel-carbon balance or validated stack measurement | row_id; fuel quantity; fuel carbon content; biogenic fraction; oxidation basis; stack result; monitoring period; assigned furnace output | Use one declared method per emission and period; reconcile calculated and measured values when both exist without double counting | kg | Each furnace batch with annual/reporting-period closure | Complete reporting period | In-scope fuel-fired heat-treatment equipment | Apply `cr_fossil_co2`; allocate only assigned fuel or measured stack mass; normalize by accepted heat-treated output | Fuel analysis or supplier specification; calibrated meter; stack QA record; reconciliation worksheet |
| `cp_final_product_and_tests` | inspection_pressure_test_and_release | Accepted product and rejected steel or aluminium container rows | Test, inspection, weighment, marking, and rejection record | row_id; serial/lot; material; route; empty mass; water capacity; service pressure; test pressure; test method; result; rejection reason; scrap mass; release date | Link calibrated weighing and required inspection/test records to each serial number or production lot | kg; item; pressure unit as declared | Each item or prescribed lot | Complete reporting period | All in-scope containers released or rejected | Sum accepted net empty mass for the denominator; assign rejected material once by material; normalize all rows to accepted mass | Scale and pressure-gauge calibration; test certificate; material traceability; release authorization; rejection disposition |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `cr_reference_normalization` | every inventory row | Normalized amount = reporting-period row quantity / reporting-period net mass of conforming empty containers released within the same product system. | Row quantity; accepted reference-product mass; product and period assignment | Quantity per 1 kg reference product |  |
| `cr_active_sodium_hydroxide` | cleaning_sodium_hydroxide | Active sodium hydroxide mass = solution mass × measured mass fraction of sodium hydroxide; keep carrier water in the water balance when material. | Issued solution mass; measured concentration | kg active sodium hydroxide |  |
| `cr_fossil_co2` | heat_treatment_co2 | Fossil CO2 mass = fossil fuel mass × fossil carbon mass fraction × oxidation fraction × 44/12, or the equivalent calculation from standardized gas volume; do not add a stack result representing the same emission. | Fuel quantity; reference conditions or density; fossil carbon content; oxidation fraction | kg fossil carbon dioxide |  |
| `cr_metal_balance` | steel and aluminium material rows | For each material and batch, input mass = accepted work-in-process mass + returned reusable stock + reported scrap/waste + documented inventory change; investigate and disclose residual imbalance. | Material issue; return; accepted output; scrap; inventory change | Material-specific reconciliation and normalized flows |  |
| `cr_recovered_powder` | powder_coating; powder_coating_waste | Net powder input = issued powder − unused return; waste output = collected residue dispatched as waste; powder recovered and reused within the process is neither a new input nor a waste crossing. | Issue; unused return; recovered reuse; waste dispatch | kg powder input and kg powder-coating waste |  |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_product_identity` | reference product | Maintain serial- or lot-level linkage among material/alloy, manufacturing route, water capacity, service pressure, test pressure, applicable standard, included accessories, empty mass, and release status. | Product specification; drawing; material certificate; test and release record |
| `dq_primary_data` | foreground processes | Use complete site-specific records for directly controlled material, energy, water, waste, test, and emission flows over one representative reporting period; explain missing records and substitutions. | Meter and stock reconciliation; invoices; production ledger; data-gap log |
| `dq_temporal` | all rows | Align numerator and accepted-output denominator to the same reporting period and exclude abnormal shutdown, commissioning, or trial production unless separately disclosed. | Production calendar; meter dates; batch mapping; exception log |
| `dq_measurement` | measured quantities | Use calibrated devices suitable for the quantity and retain raw readings, units, conversion factors, reference conditions, and correction records. | Calibration certificates; raw readings; conversion worksheet; QA approval |
| `dq_completeness` | all boundary crossings | Reconcile material, water, fuel, and product balances; document each exclusion and its cumulative significance rather than relying on an automatic cut-off. | Balance worksheets; exclusion register; completeness review |
| `dq_upstream_matching` | linked datasets | Match upstream datasets to material grade/state, energy carrier, geography, technology, and reference unit; disclose proxies and unresolved identities. | Supplier specification; dataset metadata; proxy justification |

## 9. Validation Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `vr_identity_complete` | reference product | Reject a data package that omits vessel family, refillability, shell material/alloy, stock form, seamless/welded route, water capacity, service pressure, test pressure, applicable standard, included accessories, surface finish, geography, reporting period, or net empty mass. | `un-cpc-3-0-structure-2025`; `us-dot-49-cfr-178-37`; `us-dot-49-cfr-178-46`; `us-dot-49-cfr-178-50` |
| `vr_route_consistency` | process inventory | Require each reported flow and process to match the declared route. A conditional row may be absent only when its operation or material is demonstrably not applicable; zero must not substitute for missing data. | `us-dot-49-cfr-178-37`; `us-dot-49-cfr-178-46`; `us-dot-49-cfr-178-50` |
| `vr_test_traceability` | inspection and release | Require traceable inspection and pressure/mechanical-test evidence at the frequency prescribed by the declared standard, and exclude failed containers from accepted output. | `us-dot-49-cfr-178-37`; `us-dot-49-cfr-178-46`; `us-dot-49-cfr-178-50` |
| `vr_mass_balance` | metals and finished product | Require separate steel and aluminium balances to close within the site's documented measurement uncertainty; investigate residuals and prevent double counting of forming scrap, destructive-test specimens, and rejected containers. |  |
| `vr_energy_no_double_count` | electricity and fuels | Reconcile process-level energy with facility totals and reject overlap among forming, joining, heat treatment, finishing, testing, purchased heat, and upstream electricity emissions. |  |
| `vr_emission_no_double_count` | direct fossil carbon dioxide | Accept either a validated fuel-carbon calculation or a representative stack result for the same source and period; if both exist, use one and retain the other as a reconciliation check. |  |
| `vr_cutoff_and_allocation` | completeness and shared operations | Require disclosed exclusions, allocation drivers, residual shared quantities, and sensitivity where the allocation choice can materially affect results. | `ec-pef-method-2021` |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | Cradle-to-gate foreground production dataset for empty iron, steel, or aluminium compressed- or liquefied-gas containers |
| downstream_use | secondary_dataset; background_dataset |
| allowed_use | Product LCAs, supply-chain models, procurement comparisons, and lifecycle models that match the declared vessel design, material, route, service conditions, geography, included accessories, and factory-gate boundary |
| excluded_use | Filled-gas packaging without a separate gas/filling model; composite vessels outside the scope; use-stage safety or lifetime claims; periodic requalification; repair; end-of-life; or comparison of containers with materially different pressure service without functional adjustment |
| required_metadata | canonical PCR id; CPC context; vessel family; refillability; material/alloy; stock form; route; water capacity; service pressure; test pressure; standard; inspection plan; accessories; finish; empty mass; geography; reporting period; allocation; cut-offs; source and dataset versions |
| required_quality_disclosure | Primary-data coverage; meter and scale calibration; material and test traceability; material/water/energy reconciliations; rejected-product handling; direct-emission method; allocation drivers; exclusions; proxies; unresolved UUIDs; uncertainty and representativeness |
| update_trigger | Change in alloy or stock form, forming/joining/heat-treatment route, vessel design or pressure class, testing standard, finish, included accessories, site energy or water system, allocation, geography, or representative reporting period |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `un-cpc-3-0-structure-2025` | Official guidance (`official_guidance`) | United Nations Statistics Division, CPC Version 3.0 Structure, 30 June 2025, https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Structure_30Jun2025.csv (retrieved 2026-06-23; SHA-256 `5cd2c1c4890dd6be16af48e9bb940fed48efff9865f39ff15edaa921da25fb7c`) | Product classification identity and separation from non-pressure tanks |
| `us-dot-49-cfr-178-37` | Standard (`standard`) | U.S. Department of Transportation, 49 CFR 178.37, Specification 3AA and 3AAX seamless steel cylinders, https://www.ecfr.gov/current/title-49/subtitle-B/chapter-I/subchapter-C/part-178/subpart-C/section-178.37 (accessed 2026-09-05) | Seamless-steel scope, material traceability, manufacture, heat treatment, inspection, pressure testing, and rejection records |
| `us-dot-49-cfr-178-46` | Standard (`standard`) | U.S. Department of Transportation, 49 CFR 178.46, Specification 3AL seamless aluminium cylinders, https://www.ecfr.gov/current/title-49/subtitle-B/chapter-I/subchapter-C/part-178/subpart-C/section-178.46 (accessed 2026-09-05) | Seamless-aluminium scope, traceable stock, backward extrusion, solution heat treatment and ageing, pressure testing, and mechanical testing |
| `us-dot-49-cfr-178-50` | Standard (`standard`) | U.S. Department of Transportation, 49 CFR 178.50, Specification 4B welded or brazed steel cylinders, https://www.ecfr.gov/current/title-49/subtitle-B/chapter-I/subchapter-C/part-178/subpart-C/section-178.50 (accessed 2026-09-05) | Welded-steel scope, joining, material traceability, pressure testing, and mechanical testing |
| `ec-pef-method-2021` | Official guidance (`official_guidance`) | European Commission, Commission Recommendation (EU) 2021/2279 on the use of the Environmental Footprint methods, https://eur-lex.europa.eu/legal-content/EN/ALL/?uri=CELEX:32021H2279 (accessed 2026-09-05) | Functional-unit framing, system-boundary and cut-off disclosure, foreground data quality, and allocation hierarchy |
