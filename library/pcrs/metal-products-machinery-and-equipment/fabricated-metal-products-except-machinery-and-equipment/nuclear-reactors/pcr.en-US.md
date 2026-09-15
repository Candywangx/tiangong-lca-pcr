---
pcr_id: pcr.metal-products-machinery-and-equipment.fabricated-metal-products-except-machinery-and-equipment.nuclear-reactors
language: en-US
status: candidate
sync_with: pcr.zh-CN.md
---

# Nuclear reactors

## 1. Scope and Applicability

This PCR governs foreground data packages for manufacturing a complete, unloaded nuclear reactor as fabricated equipment. It covers the reactor pressure boundary, reactor internals and core-support structures, installed reactivity-control drive equipment, final assembly, cleaning, inspection, factory acceptance testing, and handover at the declared manufacturer gate. The declared product configuration shall state the reactor technology, thermal power/design rating, pressure-boundary extent, included control and instrumentation equipment, nuclear quality class, design life, assembly location, and delivery condition.

The PCR excludes nuclear fuel and fuel elements, separately supplied reactor parts that are not incorporated in the reference product, steam generators and other boiler equipment supplied as separate products, turbines and generators, buildings and civil works, site installation outside the manufacturer's declared gate, commissioning with nuclear fuel, operation and electricity generation, maintenance, spent-fuel management, and decommissioning. It is applicable to water-cooled and other reactor technologies only when the product configuration and route-specific exchanges are declared; a data producer shall not substitute an entire nuclear power plant for the manufactured reactor.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.metal-products-machinery-and-equipment.fabricated-metal-products-except-machinery-and-equipment.nuclear-reactors |
| classification_refs | CPC 3.0: 42310, Nuclear reactors |
| covered_products | Complete unloaded nuclear reactors handed over as fabricated equipment, including the declared pressure boundary, reactor internals/core supports, and installed reactivity-control drive equipment |
| excluded_products | Nuclear fuel and fuel elements; separately supplied reactor parts; separately supplied steam generators, boilers, turbines or generators; complete power-plant construction; civil works; operation, maintenance, spent-fuel management and decommissioning |
| representative_product | One complete unloaded nuclear reactor accepted against its manufacturing configuration and factory-acceptance documentation |
| production_route | Qualified material receipt; pressure-boundary forming, machining, welding and heat treatment; reactor-internals fabrication and cleaning; final assembly, inspection and factory acceptance testing |
| market_state | Accepted complete equipment at the declared manufacturer gate, unloaded, unirradiated and before site operation |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Provide a complete unloaded nuclear reactor that meets the declared design, pressure-boundary, reactivity-control and manufacturing acceptance requirements |
| How much | One accepted reactor item |
| How well | Conforming to the declared technology, design rating, nuclear quality class, pressure-boundary extent, product configuration and acceptance-test plan |
| How long or cycle | The declared design life of the reactor; manufacturing burdens are assigned once at manufacturer-gate handover |
| reference_flow_link | The reference flow is the accepted complete reactor output `final_nuclear_reactor_output` |

| Field | Value |
| --- | --- |
| Reference amount | 1 Item(s) |
| Reference product flow | Nuclear reactor (UUID unresolved) |
| Reference flow property | Number of items `01846770-4cfe-4a25-8ad9-919d8d378345` |
| Reference unit group | Units of items `5beb6eed-33a9-47b8-9ede-1dfe8f679159` |
| Reference unit | Item(s) |
| Required qualifiers | reactor technology; thermal power or design rating; pressure-boundary extent; included reactor internals and control-drive equipment; nuclear quality class and governing manufacturing code; design life; manufacturer and production geography; assembly location; manufacturer-gate definition; delivery condition; gross accepted product mass; fuel-free and unirradiated state |

When constructing a foreground data package, the items listed in `Required qualifiers` must be declared in dataset metadata, process notes, reference flow comment, product description, or an equivalent data package field. Missing required qualifiers make the reference flow definition incomplete for that data package.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| `mu_reference_item` | Reference product and accepted output | Number of items `01846770-4cfe-4a25-8ad9-919d8d378345` | Item(s) | Count only complete unloaded reactors accepted under the declared product configuration. Report gross accepted product mass separately as a required qualifier; do not convert a power plant, reactor part or fuel element into an item of reference product. |
| `mu_mass` | Solid materials, liquid water, liquid wastes, scrap and direct carbon dioxide | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Use calibrated mass records or a documented density conversion. State the density, temperature and composition when converting process water or wastewater volume to mass, and prevent double counting of internal intermediate transfers. |
| `mu_gas_volume` | Natural gas and industrial oxygen | Volume `93a60a56-a3c8-22da-a746-0800200c9a66` | m3 | Record metered volume and declare pressure, temperature and reference conditions. Convert supplier or meter units to the declared m3 basis without combining the two gases. |
| `mu_electricity_energy` | Purchased electricity | Net calorific value `93a60a56-a3c8-11da-a746-0800200b9a66` | MJ | Preserve metered electrical energy by process. Convert kWh to MJ using 3.6 MJ per kWh; do not add upstream grid emissions as foreground elementary exchanges. |
| `mu_component_count` | Control-rod drive mechanisms | Number of items `01846770-4cfe-4a25-8ad9-919d8d378345` | Item(s) | Count accepted installed mechanisms and identify the design-specific mechanism type. If mass is also available, retain it as supporting foreground data rather than replacing the item count. |

## 5. System Boundary

The foreground boundary begins when traceable purchased materials, qualified parts and internal intermediates enter the manufacturing organization and ends when one complete unloaded reactor passes the declared manufacturing acceptance gate. Upstream production of purchased products is linked through background datasets; the foreground contains only exchanges under the manufacturer's operational control.

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Traceable purchased steel plate, stainless-steel stock, design-specific alloys, qualified welding consumables, control-drive equipment and utilities received at the first included manufacturing site |
| starting_condition_role | Upstream-data handoff to reactor manufacturing foreground |
| product_classification_scope | Complete nuclear reactor equipment; excludes fuel, separately supplied reactor parts, separate steam-generating equipment and complete power-plant construction |
| recursive_input_rule | When a partly assembled reactor crosses between included sites, record one internal intermediate flow with identical identity and amount at both process boundaries; do not apply this PCR recursively or add upstream burdens a second time |
| upstream_dataset_requirement | Each purchased material, component, fuel, chemical, water and electricity input shall link to a geographically and technologically representative upstream dataset, with supplier-specific data preferred where nuclear-grade production materially differs |
| disclosure | Declare included sites, ownership/control boundary, assembly location, manufacturer-gate handover point, reactor technology and configuration, treatment of separately supplied components, excluded site work, and any data gap or proxy |

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `sb_manufacturing_gate` | Foreground manufacturing | Include material receipt, forming, machining, welding, heat treatment, cleaning, nondestructive examination, dimensional inspection, assembly, pressure/seal/electrical/functional testing and manufacturer-gate handover when performed for the reference product. | `iaea-np-t-3-21-2016`; `us-nrc-ap1000-ser-ch4` |
| `sb_product_exclusions` | Product boundary | Exclude fuel elements, separately supplied reactor parts, separate boilers or steam generators, complete power-plant construction, civil works, fueled commissioning, operation and end-of-life unless the study explicitly adds them as separate product systems. | `un-cpc-3-0-2025`; `iaea-ssg-56-2020` |
| `sb_upstream_linkage` | Purchased inputs | Include purchased-input quantities in the foreground and link their production burdens through upstream datasets; do not reproduce upstream processes as direct foreground elementary emissions. |  |
| `sb_direct_emissions` | Foreground elementary flows | Report only emissions released by included manufacturing equipment. Upstream electricity and material-production emissions remain in linked upstream datasets. |  |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| `pressure_boundary_fabrication` | Reactor pressure-boundary fabrication | `required` | Always included for a complete reactor; adapt the component list to the declared reactor technology | Foreground forming, machining, welding, heat treatment, cleaning and inspection | Per accepted pressure-boundary assembly incorporated in one reference reactor |
| `reactor_internals_fabrication` | Reactor internals and core-support fabrication | `required` | Always included; material and cleaning rows apply only where used by the declared design and route | Foreground fabrication, welding, cleaning and inspection of reactor internals and core supports | Per accepted internals assembly incorporated in one reference reactor |
| `final_assembly_and_testing` | Final reactor assembly and factory acceptance testing | `required` | Always included; test-fuel rows apply only when on-site combustion occurs | Foreground assembly, dimensional verification, cleanliness inspection, pressure/seal/electrical/functional tests and handover | One accepted unloaded nuclear reactor |

### Process: Reactor pressure-boundary fabrication (`pressure_boundary_fabrication`)

#### Inputs

##### Product flows

###### Alloy-steel plate for pressure-boundary components (`pressure_steel_plate`)

Record accepted steel plate entering shell, head and other pressure-retaining component fabrication. Nuclear grade, heat number, dimensions and supplier route are foreground qualifiers.

- Selected flow: Steel Plate `421db3a5-394d-410b-8ebf-af23a37fc878`
- Flow property / unit: Mass / kg
- Amount rule: Net received mass assigned to the reactor manufacturing order, adjusted for documented stock change
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: Per one accepted complete reactor
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material_receipts`
- Sources: `us-nrc-reactor-vessel-integrity`

###### Flux-cored welding wire (`pressure_flux_cored_wire`)

Record qualified flux-cored welding wire only when this consumable is used on pressure-boundary fabrication or repair; other welding processes require their own concrete foreground flows.

- Selected flow: Flux Cored Wire `1b74a576-06e0-4764-97ce-11a73f8a4752`
- Flow property / unit: Mass / kg
- Amount rule: Issued mass minus documented returned unused wire for the manufacturing order
- Value mode: Foreground record (`foreground_record`)
- Specificity: Route-specific (`route_specific`)
- Normalization basis: Per one accepted complete reactor
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_welding_consumables`
- Sources: `iaea-np-t-3-21-2016`

###### Purchased electricity (`pressure_electricity`)

Record metered electricity consumed by cutting, forming, machining, welding, heat-treatment auxiliaries, inspection and supporting equipment in this process.

- Selected flow: Electricity `67b723a9-6f63-4802-adca-b52ce7967d47`
- Flow property / unit: Net calorific value / MJ
- Amount rule: Process-meter reading or allocated facility-meter consumption for the manufacturing order
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: Per one accepted complete reactor
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_process_energy`

###### Gaseous natural gas for heat treatment (`pressure_natural_gas`)

Record gaseous natural gas only when directly combusted in included furnaces or thermal equipment for the pressure-boundary route.

- Selected flow: natural gas in the gaseous state `4f19ca0e-7b3b-11dd-ad8b-0800200c9a66`
- Flow property / unit: Volume / m3
- Amount rule: Metered natural-gas volume assigned to included pressure-boundary operations
- Value mode: Foreground record (`foreground_record`)
- Specificity: Route-specific (`route_specific`)
- Normalization basis: Per one accepted complete reactor
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_process_energy`

###### Industrial oxygen for oxy-fuel operations (`pressure_industrial_oxygen`)

Record industrial oxygen only when supplied for oxy-fuel cutting, heating or another included fabrication operation.

- Selected flow: Industrial oxygen `bd4b0f96-2090-4806-a648-335ab20ff401`
- Flow property / unit: Volume / m3
- Amount rule: Supplier or cylinder inventory records assigned to included pressure-boundary operations
- Value mode: Foreground record (`foreground_record`)
- Specificity: Route-specific (`route_specific`)
- Normalization basis: Per one accepted complete reactor
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_fabrication_gases`

###### Process water for fabrication and cleaning (`pressure_process_water`)

Record process water crossing the boundary for machining, cleaning, flushing or hydrostatic operations within pressure-boundary fabrication.

- Selected flow: Process Water `94a04f7e-2d5c-41f0-b182-d54a3b373a02`
- Flow property / unit: Mass / kg
- Amount rule: Metered or supplier-recorded water input assigned to this process, net of documented recirculation within the same boundary
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: Per one accepted complete reactor
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_process_water`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Accepted reactor pressure-boundary assembly (`pressure_boundary_assembly_output`)

Record the accepted pressure-boundary assembly as an internal intermediate transferred to final assembly. Its output quantity and the corresponding final-assembly input shall be identical.

- Selected flow: Reactor pressure-boundary assembly (UUID unresolved)
- Flow property / unit: Mass / kg
- Amount rule: Measured accepted assembly mass at internal transfer
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: Per one accepted complete reactor
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_internal_intermediates`
- Sources: `iaea-ssg-56-2020`

##### Waste flows

###### Post-industrial steel scrap (`pressure_steel_scrap`)

Record segregated ferrous offcuts, turnings and rejected steel arising from this process. Contaminated or mixed waste requires a separate concrete waste flow.

- Selected flow: Post-industrial steel scrap `c143745d-be4f-4d8f-b403-2dcbfe685349`
- Flow property / unit: Mass / kg
- Amount rule: Weighed scrap leaving the process boundary, net of documented internal remelting or reuse
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: Per one accepted complete reactor
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_solid_wastes`

##### Elementary flows

###### Fossil carbon dioxide from natural-gas combustion (`pressure_fossil_co2`)

Calculate direct fossil carbon dioxide released by the included natural-gas combustion only. Do not include upstream gas-supply or purchased-electricity emissions.

- Selected flow: carbon dioxide (fossil) `08a91e70-3ddc-11dd-923d-0050c2490048`
- Flow property / unit: Mass / kg
- Amount rule: Direct fossil CO2 calculated from the recorded natural-gas quantity and a documented site- or supplier-specific carbon/emission factor
- Value mode: Calculated value (`calculated_value`)
- Specificity: Route-specific (`route_specific`)
- Normalization basis: Per one accepted complete reactor
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_process_energy`

### Process: Reactor internals and core-support fabrication (`reactor_internals_fabrication`)

#### Inputs

##### Product flows

###### Austenitic stainless-steel stock (`internals_austenitic_stainless_steel`)

Record the accepted austenitic stainless-steel plate, forging or bar mass incorporated in reactor internals and core supports; declare each grade and product form in the foreground bill of materials.

- Selected flow: Austenitic stainless steel (UUID unresolved)
- Flow property / unit: Mass / kg
- Amount rule: Net received mass assigned to internals fabrication, adjusted for documented stock change
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: Per one accepted complete reactor
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material_receipts`
- Sources: `us-nrc-ap1000-ser-ch4`

###### Nickel-based alloy stock (`internals_nickel_based_alloy`)

Record nickel-based alloy stock only when required by the declared reactor-internals design. The foreground record shall identify alloy grade, product form, cobalt restriction and installed component.

- Selected flow: Nickel-based alloy stock (UUID unresolved)
- Flow property / unit: Mass / kg
- Amount rule: Net received alloy mass assigned to internals fabrication, adjusted for documented stock change
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: Per one accepted complete reactor
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material_receipts`
- Sources: `us-nrc-ap1000-ser-ch4`

###### Flux-cored welding wire (`internals_flux_cored_wire`)

Record qualified flux-cored welding wire only when used for the declared internals fabrication route.

- Selected flow: Flux Cored Wire `1b74a576-06e0-4764-97ce-11a73f8a4752`
- Flow property / unit: Mass / kg
- Amount rule: Issued mass minus documented returned unused wire for the manufacturing order
- Value mode: Foreground record (`foreground_record`)
- Specificity: Route-specific (`route_specific`)
- Normalization basis: Per one accepted complete reactor
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_welding_consumables`
- Sources: `iaea-np-t-3-21-2016`

###### Purchased electricity (`internals_electricity`)

Record metered electricity consumed by internals forming, machining, welding, heat treatment, cleaning, inspection and supporting equipment.

- Selected flow: Electricity `67b723a9-6f63-4802-adca-b52ce7967d47`
- Flow property / unit: Net calorific value / MJ
- Amount rule: Process-meter reading or allocated facility-meter consumption for the manufacturing order
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: Per one accepted complete reactor
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_process_energy`

###### Sodium hydroxide for alkaline cleaning (`internals_sodium_hydroxide`)

Record sodium hydroxide only when it crosses the foreground boundary as a product input to an alkaline cleaning bath used on reactor internals.

- Selected flow: Sodium hydroxide `e0abcced-0611-4c24-9290-5a2c5a0c4169`
- Flow property / unit: Mass / kg
- Amount rule: Pure sodium-hydroxide mass in delivered solution charged to included cleaning operations
- Value mode: Calculated value (`calculated_value`)
- Specificity: Route-specific (`route_specific`)
- Normalization basis: Per one accepted complete reactor
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_cleaning_chemicals`
- Sources: `us-nrc-ap1000-ser-ch4`

###### Process water for internals cleaning (`internals_process_water`)

Record process water used for included cleaning, rinsing and flushing of reactor internals.

- Selected flow: Process Water `94a04f7e-2d5c-41f0-b182-d54a3b373a02`
- Flow property / unit: Mass / kg
- Amount rule: Metered or supplier-recorded water input, net of documented recirculation within the same boundary
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: Per one accepted complete reactor
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_process_water`
- Sources: `us-nrc-ap1000-ser-ch4`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Accepted reactor-internals assembly (`reactor_internals_assembly_output`)

Record the accepted reactor-internals and core-support assembly as an internal intermediate transferred to final assembly. The output and linked input amounts shall be identical.

- Selected flow: Reactor-internals assembly (UUID unresolved)
- Flow property / unit: Mass / kg
- Amount rule: Measured accepted assembly mass at internal transfer
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: Per one accepted complete reactor
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_internal_intermediates`
- Sources: `us-nrc-ap1000-ser-ch4`

##### Waste flows

###### Post-industrial steel scrap (`internals_steel_scrap`)

Record segregated ferrous offcuts, turnings and rejected steel arising from internals fabrication.

- Selected flow: Post-industrial steel scrap `c143745d-be4f-4d8f-b403-2dcbfe685349`
- Flow property / unit: Mass / kg
- Amount rule: Weighed scrap leaving this process, net of documented internal reuse
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: Per one accepted complete reactor
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_solid_wastes`

###### Waste alkaline liquor (`internals_waste_alkaline_liquor`)

Record spent alkaline cleaning solution only when alkaline cleaning occurs and the liquor leaves this process for treatment. Declare composition, pH, metal contamination and treatment destination.

- Selected flow: Waste Alkaline Liquor `ce738ef0-a711-4650-a38b-34479efd7559`
- Flow property / unit: Mass / kg
- Amount rule: Weighed or volume-and-density-converted mass of spent alkaline liquor transferred to treatment
- Value mode: Foreground record (`foreground_record`)
- Specificity: Route-specific (`route_specific`)
- Normalization basis: Per one accepted complete reactor
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_liquid_wastes`
- Sources: `us-nrc-ap1000-ser-ch4`

##### Elementary flows

### Process: Final reactor assembly and factory acceptance testing (`final_assembly_and_testing`)

#### Inputs

##### Product flows

###### Reactor pressure-boundary assembly (`final_pressure_boundary_assembly_input`)

Record the internal pressure-boundary assembly received from `pressure_boundary_fabrication`; the identity and mass shall match `pressure_boundary_assembly_output`.

- Selected flow: Reactor pressure-boundary assembly (UUID unresolved)
- Flow property / unit: Mass / kg
- Amount rule: Measured internal-transfer mass matching the upstream output
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: Per one accepted complete reactor
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_internal_intermediates`
- Sources: `iaea-ssg-56-2020`

###### Reactor-internals assembly (`final_reactor_internals_assembly_input`)

Record the internal reactor-internals assembly received from `reactor_internals_fabrication`; the identity and mass shall match `reactor_internals_assembly_output`.

- Selected flow: Reactor-internals assembly (UUID unresolved)
- Flow property / unit: Mass / kg
- Amount rule: Measured internal-transfer mass matching the upstream output
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: Per one accepted complete reactor
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_internal_intermediates`
- Sources: `us-nrc-ap1000-ser-ch4`

###### Control-rod drive mechanism (`final_control_rod_drive_mechanism`)

Record accepted control-rod drive mechanisms installed in the reference reactor. State the design-specific mechanism type and prevent double counting when supplied within another accepted assembly.

- Selected flow: Control-rod drive mechanism (UUID unresolved)
- Flow property / unit: Number of items / Item(s)
- Amount rule: Accepted installed mechanism count from the as-built product configuration
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: Per one accepted complete reactor
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_component_acceptance`
- Sources: `iaea-ssg-56-2020`

###### Purchased electricity (`final_electricity`)

Record metered electricity used for final assembly, cleanliness control, pressure/seal/electrical/functional tests and supporting equipment.

- Selected flow: Electricity `67b723a9-6f63-4802-adca-b52ce7967d47`
- Flow property / unit: Net calorific value / MJ
- Amount rule: Process-meter reading or allocated facility-meter consumption for the manufacturing order
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: Per one accepted complete reactor
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_process_energy`
- Sources: `iaea-np-t-3-21-2016`

###### Process water for hydrostatic and cleanliness testing (`final_process_water`)

Record process water introduced for pressure, leak, flushing or cleanliness testing within the manufacturer boundary.

- Selected flow: Process Water `94a04f7e-2d5c-41f0-b182-d54a3b373a02`
- Flow property / unit: Mass / kg
- Amount rule: Metered or supplier-recorded test-water input, net of documented recirculation within the same test loop
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: Per one accepted complete reactor
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_process_water`
- Sources: `iaea-np-t-3-21-2016`

###### Diesel fuel for on-site test equipment (`final_diesel_fuel`)

Record diesel fuel only when directly consumed by included temporary generators, pumps or other factory-test equipment.

- Selected flow: Diesel fuel `9d258d75-6792-4f1c-9856-81602ed8f816`
- Flow property / unit: Mass / kg
- Amount rule: Fuel issue, tank-level or purchase records assigned to included factory tests
- Value mode: Foreground record (`foreground_record`)
- Specificity: Route-specific (`route_specific`)
- Normalization basis: Per one accepted complete reactor
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_test_fuel`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Accepted complete unloaded nuclear reactor (`final_nuclear_reactor_output`)

Record one complete reactor only after the declared product configuration and manufacturing acceptance plan are satisfied. The product flow UUID remains unresolved; do not substitute a fuel rod or complete power plant.

- Selected flow: Nuclear reactor (UUID unresolved)
- Flow property / unit: Number of items / Item(s)
- Amount rule: 1 accepted complete unloaded reactor
- Value mode: Fixed value (`fixed_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: One reference reactor
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Method formula (`method_formula`)
- Sources: `un-cpc-3-0-2025`; `iaea-ssg-56-2020`

##### Waste flows

###### Hydrostatic-test wastewater (`final_test_wastewater`)

Record water leaving included pressure, flushing or cleanliness tests as wastewater when it is not internally recirculated. Declare composition, treatment destination and discharge route.

- Selected flow: Wastewater `d2d44ce1-c0f4-461d-9413-f4b33e0d200f`
- Flow property / unit: Mass / kg
- Amount rule: Weighed or volume-and-density-converted wastewater mass transferred out of the test boundary
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: Per one accepted complete reactor
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_liquid_wastes`
- Sources: `iaea-np-t-3-21-2016`

##### Elementary flows

###### Fossil carbon dioxide from test-diesel combustion (`final_fossil_co2`)

Calculate direct fossil carbon dioxide released by included test-equipment diesel combustion only. Do not include upstream diesel-supply emissions.

- Selected flow: carbon dioxide (fossil) `08a91e70-3ddc-11dd-923d-0050c2490048`
- Flow property / unit: Mass / kg
- Amount rule: Direct fossil CO2 calculated from recorded diesel mass and a documented site- or supplier-specific carbon/emission factor
- Value mode: Calculated value (`calculated_value`)
- Specificity: Route-specific (`route_specific`)
- Normalization basis: Per one accepted complete reactor
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_test_fuel`

## 7. Allocation and Co-product Handling

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `al_subdivision` | Manufacturing orders and sites | Prefer process subdivision and order-specific measurement so burdens follow the reactor and process that caused them. |  |
| `al_shared_utilities` | Shared electricity, gas, water and facility services | Use submetered consumption where available. Otherwise allocate by a documented causal driver such as machine-hours, furnace-hours, test-hours or occupied production time; do not allocate by reactor price when a physical driver is available. |  |
| `al_scrap` | Post-industrial steel scrap and recoverable alloy scrap | Record scrap mass and destination before applying the study's recycling convention. Do not add an avoided-primary-production credit inside the foreground unless the chosen LCA method requires it; disclose any cut-off, substitution or end-of-life approach. |  |
| `al_rework` | Rework, rejects and repair | Assign rework energy, consumables and rejected material to the order and process that caused them. Sale proceeds from scrap do not make reactor manufacturing a multifunctional process. |  |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_material_receipts` | `pressure_boundary_fabrication`; `reactor_internals_fabrication` | Steel plate, stainless-steel stock and design-specific alloy inputs | Purchase receipt, bill of materials and material certificate | material identity; grade; product form; heat or lot; received mass; returns; stock change; order id; supplier; site | Reconcile accepted receipts and issued material to the as-built bill of materials | kg | Each receipt and manufacturing order | Complete production period for the reference reactor | Every included fabrication site and supplier-controlled stock point | Sum net mass assigned to the order; preserve grade and form as separate foreground attributes | Material certificates; calibrated scales; receipt/issue reconciliation; supplier approval records |
| `cp_welding_consumables` | `pressure_boundary_fabrication`; `reactor_internals_fabrication` | Flux-cored welding wire | Consumable issue and return records | wire identity; batch; qualification; issued mass; returned mass; order id; process | Subtract returned unused wire from issued mass | kg | Each issue/return | Complete fabrication period | Every included welding location | Sum net consumed mass by process and order | Welding-material batch record; qualified procedure; issue/return log |
| `cp_process_energy` | All processes | Purchased electricity and natural gas | Meter, fuel invoice and equipment operating log | meter id; opening/closing reading; unit; reference conditions for gas; process; order id; allocation driver | Read process meters; where shared, reconcile facility totals and apply the declared causal allocation driver | MJ for electricity; m3 for gas | Continuous meter with monthly reconciliation or each batch | Complete production and test period | Every included site | Sum direct readings; allocate only the residual shared total; document conversion and loss treatment | Calibrated meter record; invoice reconciliation; operating-hour log |
| `cp_fabrication_gases` | `pressure_boundary_fabrication` | Industrial oxygen | Cylinder, bulk-tank or supplier record | gas identity; purity; supplied quantity; returns; pressure; temperature; process; order id | Reconcile delivered and returned quantity, then normalize to declared reference conditions | m3 | Each delivery and order | Complete fabrication period | Included oxy-fuel operations | Sum normalized volume assigned to included operations | Supplier certificate; cylinder/bulk inventory; conversion record |
| `cp_process_water` | All processes | Process-water inputs | Water meter, batch sheet or supplier record | source; quality; meter reading or volume; density; temperature; recirculated quantity; process; order id | Measure input and subtract only documented same-boundary recirculation | kg | Each batch or continuous meter with monthly reconciliation | Complete production and test period | Every included water use point | Sum net boundary-crossing water mass by process | Calibrated meter; water-quality record; density conversion; reconciliation |
| `cp_internal_intermediates` | All processes | Pressure-boundary and reactor-internals assemblies | Internal transfer and acceptance record | intermediate identity; configuration revision; acceptance status; mass; sending process; receiving process; order id | Match sending and receiving records one-to-one | kg | Each transfer | Complete assembly period | All included sending and receiving sites | Use identical quantity on linked output and input; exclude transfer transport unless it crosses the declared foreground boundary | Accepted transfer record; calibrated scale; configuration control; discrepancy log |
| `cp_solid_wastes` | `pressure_boundary_fabrication`; `reactor_internals_fabrication` | Post-industrial steel scrap | Waste scale ticket and recycler manifest | waste identity; alloy/contamination class; gross/tare/net mass; internal reuse; destination; order id; process | Weigh outbound scrap and reconcile internal return or reuse | kg | Each shipment or collection container | Complete fabrication period | Every included fabrication site | Sum net scrap leaving the process by identity and destination | Calibrated scale; waste manifest; recycler receipt; mass-balance reconciliation |
| `cp_cleaning_chemicals` | `reactor_internals_fabrication` | Sodium hydroxide | Batch sheet and chemical receipt | product mass; concentration; solution density; bath charge; replenishment; recovery; order id | Calculate pure sodium-hydroxide mass from delivered solution mass and verified concentration | kg NaOH | Each bath charge | Complete cleaning period | Included alkaline-cleaning operations | Sum pure NaOH charged minus separately documented recovered product | Supplier certificate; concentration analysis; batch sheet; calculation record |
| `cp_liquid_wastes` | `reactor_internals_fabrication`; `final_assembly_and_testing` | Waste alkaline liquor and test wastewater | Tank meter, transfer note and treatment manifest | waste identity; volume or mass; density; composition; pH; metal content; destination; order id; process | Measure mass directly or convert volume using documented density | kg | Each discharge or transfer | Complete cleaning and test period | Every included liquid-waste outlet | Sum by concrete waste identity, process and destination | Calibrated tank/scale; sample analysis; manifest; water balance |
| `cp_component_acceptance` | `final_assembly_and_testing` | Control-rod drive mechanisms | As-built configuration and acceptance record | mechanism identity; type; serial number; accepted count; installed location; duplicate-supply check; order id | Count accepted installed mechanisms and reconcile to the as-built configuration | Item(s) | Each installation and final acceptance | Complete assembly period | Final assembly site and supplier-controlled installation points | Sum accepted installed items; exclude rejected, spare and separately supplied units | Configuration record; serial-number list; acceptance certificate; inspection record |
| `cp_test_fuel` | `final_assembly_and_testing` | Diesel fuel and its direct fossil CO2 | Fuel issue, tank record and equipment test log | fuel identity; mass or volume; density; biogenic fraction; issue/return; equipment; test id; emission factor and provenance | Reconcile net fuel consumed, convert volume to mass if needed, and calculate direct fossil CO2 from the documented factor | kg | Each test campaign | Complete factory-test period | Included test equipment under manufacturer control | Sum net fossil diesel mass and associated calculated direct fossil CO2 | Calibrated tank/scale; purchase/issue record; test log; factor certificate and calculation |
| `cp_product_acceptance` | `final_assembly_and_testing` | Complete unloaded nuclear reactor | Manufacturing acceptance and handover dossier | product configuration; reactor technology; design rating; nuclear quality class; pressure-boundary extent; included assemblies; acceptance status; gross mass; serial id; handover date; gate | Count only reactors with a complete accepted dossier and declared fuel-free unirradiated state | Item(s) | Each final acceptance | Entire manufacturing order | Declared manufacturer gate | One accepted dossier equals one reference item | Approved configuration; material traceability; NDT, heat-treatment, pressure/seal/electrical/functional-test, cleanliness and final-dimension records |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_order_normalization` | All inventory rows | Normalized amount = net quantity assigned to the manufacturing order divided by the number of accepted complete reactors in that order. For this PCR the denominator is normally one; disclose any multi-unit batch allocation. | Net order quantity; accepted reactor count; allocation record | Inventory amount per one accepted complete reactor |  |
| `calc_electricity_conversion` | Electricity rows | Electricity (MJ) = metered electricity (kWh) × 3.6 MJ/kWh. Preserve the original meter unit and conversion record. | Metered kWh | Electricity in MJ |  |
| `calc_solution_active_mass` | `internals_sodium_hydroxide` | Pure NaOH mass = delivered solution mass × verified mass fraction, adjusted for separately documented returned or recovered product. | Solution mass; verified concentration; returned/recovered amount | kg sodium hydroxide |  |
| `calc_direct_fossil_co2` | `pressure_fossil_co2`; `final_fossil_co2` | Direct fossil CO2 = recorded fossil-fuel quantity × documented site- or supplier-specific emission/carbon factor, with unit and oxidation-basis conversion shown. The factor shall not include upstream supply-chain emissions. | Natural-gas or diesel record; factor; fossil fraction; conversion basis | kg direct fossil carbon dioxide |  |
| `calc_internal_transfer_check` | Internal intermediate rows | The amount and identity of each upstream intermediate output shall equal its final-assembly input after unit conversion; investigate every difference rather than allocating it silently. | Sending record; receiving record; unit conversion | Reconciled internal transfer amount |  |
| `calc_manufacturing_mass_balance` | Each fabrication process and final assembly | Reconcile traceable material inputs with accepted outputs, measured scrap/waste, direct mass emissions and documented stock change. Report excluded minor materials and unresolved imbalance; do not infer missing emissions from imbalance alone. | Material receipts; intermediate and product mass; waste records; stock change; direct emissions | Process mass-balance reconciliation | `iaea-np-t-3-21-2016` |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_product_identity` | Reference product | Configuration, technology, design rating, pressure-boundary extent, included equipment, acceptance gate, gross mass and unloaded/unirradiated state shall be explicit. | Approved product configuration and handover dossier |
| `dq_material_traceability` | Nuclear-grade materials and welding consumables | Preserve supplier, grade, heat/lot, product form, quantity, certificate, substitution and order linkage. | Material certificates, supplier approval and issue records |
| `dq_process_records` | Fabrication and assembly | Retain welding procedure and consumable batch, heat-treatment, NDT, repair, pressure/seal/electrical/functional-test, calibration, cleanliness and final-dimension records applicable to the delivered configuration. | Manufacturing quality dossier; `iaea-np-t-3-21-2016` |
| `dq_temporal_coverage` | All foreground rows | Cover the complete manufacturing order from first included receipt through final acceptance, including rework and rejected batches. | Order dates, production logs and completeness reconciliation |
| `dq_site_coverage` | Multi-site manufacture | Include every site under the declared manufacturer boundary and disclose transfers that cross it. | Site list, transfer records and boundary statement |
| `dq_metering` | Energy, gases and water | Use calibrated direct meters where available; disclose allocation drivers, conversion conditions and reconciliation gaps for shared meters. | Calibration certificates, invoices and reconciliation |
| `dq_waste_destination` | Scrap, alkaline liquor and wastewater | Record concrete waste identity, contamination/composition, mass, destination and treatment route; do not combine distinct waste streams. | Scale tickets, analyses and manifests |
| `dq_uuid_resolution` | UUID-empty flows | Preserve the concrete flow name and unresolved reason; do not substitute a nearby fuel, plant, raw-material or component UUID. | Finalized search receipts and manifest unresolved metadata |
| `dq_uncertainty` | All modelled or allocated values | Disclose measurement uncertainty, allocation share and data gap; no external empirical amount range is asserted by this candidate PCR. | Meter/scale accuracy, calculation record and data-quality statement |

## 9. Validation Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `val_reference_identity` | Reference flow | Confirm that the output is one complete unloaded nuclear reactor, not a fuel element, separate part, complete power plant or boiler product, and that all required qualifiers are present. | `un-cpc-3-0-2025`; `iaea-ssg-56-2020` |
| `val_process_coverage` | Foreground boundary | Verify that pressure-boundary fabrication, internals fabrication, final assembly and applicable factory tests are represented, with all included sites and rework covered. | `iaea-np-t-3-21-2016`; `us-nrc-ap1000-ser-ch4` |
| `val_atomic_flows` | Inventory | Confirm that every inventory card contains one concrete exchange and that gases, fuels, electricity, water, chemicals, wastes and direct emissions are not combined. |  |
| `val_internal_transfers` | Internal intermediates | Confirm one-to-one identity and quantity matching for pressure-boundary and internals assembly outputs and inputs, and no double counting of upstream burdens. |  |
| `val_energy_and_emissions` | Energy and direct emissions | Reconcile purchased energy to meters or allocation records; direct fossil CO2 shall equal foreground natural-gas or diesel use times the documented factor, while upstream electricity and fuel emissions remain in linked datasets. |  |
| `val_material_and_waste_balance` | Fabrication processes | Reconcile material inputs, accepted intermediate/product mass, measured scrap/waste, stock change and reported direct mass emissions; investigate and disclose unresolved imbalance. | `iaea-np-t-3-21-2016` |
| `val_quality_dossier` | Published dataset | Verify availability of material, welding, heat-treatment, NDT, pressure/seal/electrical/functional-test, calibration, cleanliness and final-dimension evidence applicable to the delivered configuration. | `iaea-np-t-3-21-2016` |
| `val_unresolved_evidence` | Candidate limitations | Keep the reference product and other UUID-empty rows unresolved until an exact public state-100 identity is audited; do not treat absent two-source ranges as external benchmarks. |  |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | Foreground manufacturing dataset suitable for publication as a `secondary_dataset` or `background_dataset` after review and resolution/disclosure of identified gaps |
| downstream_use | Product-system modelling of complete unloaded nuclear-reactor manufacture and handover at the declared manufacturer gate |
| allowed_use | Comparison or aggregation only among datasets with compatible reactor configuration, design rating, included equipment, nuclear quality class, manufacturer-gate boundary, geography and allocation/recycling conventions |
| excluded_use | Electricity-generation impacts per kWh; complete nuclear-power-plant construction; fuel-cycle, site installation, operation, maintenance, spent-fuel or decommissioning results; representation of a separate reactor part or fuel element |
| required_metadata | Canonical PCR id; reactor technology; thermal power/design rating; product configuration; pressure-boundary extent; included equipment; governing manufacturing code and nuclear quality class; design life; gross accepted mass; manufacturer geography; included sites; assembly location; handover gate; production period; allocation and recycling methods; upstream dataset choices; unresolved UUIDs and evidence needs |
| required_quality_disclosure | Foreground coverage and completeness; material traceability; meter and scale calibration; allocation shares; rework and reject coverage; internal-transfer reconciliation; mass balance; waste destinations; direct-emission factors; data gaps, uncertainty and any proxy |
| update_trigger | Change in reactor technology or configuration, design rating, pressure-boundary extent, material grades, manufacturing route/site, energy source, cleaning/testing route, allocation or recycling method, supplier data, exact Tiangong UUID resolution, or availability of two independent boundary-compatible range sources |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `un-cpc-3-0-2025` | `dataset` | United Nations Statistics Division, CPC Version 3.0 Structure, 30 June 2025, https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Structure_30Jun2025.csv (retrieved 2026-09-05) | Official CPC 42310 product identity and distinction from separately classified reactor parts and steam-generating boilers |
| `us-nrc-reactor-vessel-integrity` | `official_guidance` | U.S. Nuclear Regulatory Commission, Reactor Vessel Integrity, https://www.nrc.gov/reactors/operating/ops-experience/reactor-vessel-integrity (retrieved 2026-09-05) | Reactor pressure-vessel construction from thick steel plate or ring forgings, welded shell courses and heads |
| `iaea-np-t-3-21-2016` | `official_guidance` | International Atomic Energy Agency, Procurement Engineering and Supply Chain Guidelines in Support of Operation and Maintenance of Nuclear Facilities, IAEA Nuclear Energy Series No. NP-T-3.21, Vienna, 2016, https://www-pub.iaea.org/MTCD/Publications/PDF/Pub1725_web.pdf (retrieved 2026-09-05) | Manufacturing and procurement records for material certificates, welding, heat treatment, NDT, pressure/seal/electrical/functional tests, calibration, cleanliness and final dimensions |
| `us-nrc-ap1000-ser-ch4` | `official_guidance` | U.S. Nuclear Regulatory Commission, Safety Evaluation Report Related to Certification of the AP1000 Standard Design, NUREG-1793, Chapter 4, Reactor, https://www.nrc.gov/reading-rm/doc-collections/nuregs/staff/sr1793/initial/chapter4.pdf (retrieved 2026-09-05) | Reactor-internals material families and process decomposition for material selection, heat treatment, welding, NDE, fabrication, contamination protection and cleaning |
| `iaea-ssg-56-2020` | `standard` | International Atomic Energy Agency, Design of the Reactor Coolant System and Associated Systems for Nuclear Power Plants, IAEA Safety Standards Series No. SSG-56, Vienna, 2020, https://www-pub.iaea.org/MTCD/Publications/PDF/PUB1878_web.pdf (retrieved 2026-09-05) | Reactor coolant system extent, pressure-boundary scope, control functions, component manufacture and test-related boundary qualifiers |
