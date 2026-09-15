---
pcr_id: pcr.metal-products-machinery-and-equipment.general-purpose-machinery.steam-turbines-and-other-vapour-turbines
language: en-US
status: candidate
content_maturity: authored_methodology
translation_status: canonical
sync_with: pcr.zh-CN.md
---

# Steam turbines and other vapour turbines

## 1. Scope and Applicability

This PCR applies to cradle-to-gate foreground data packages for complete steam turbines and other vapour turbines manufactured and ready for dispatch from the reporting manufacturer's gate. It covers industrial, utility, condensing, back-pressure, generator-drive, and mechanical-drive turbines when the declared reference product is a turbine in CPC 43141.

The declared supply scope controls what crosses the product boundary. A bare turbine, a turbine on a base frame, and a packaged turbine-generator set are not interchangeable. Include gears, generators, condensers, lubrication systems, controls, piping, instrumentation, and other auxiliaries only when they are transferred with the declared reference product. Exclude separately supplied turbine parts, steam or vapour-generating boilers, hydraulic turbines, gas turbines, installation and commissioning at the customer site, operation, maintenance, refurbishment, and end-of-life.

The product category needs a canonical methodology because turbine mass, alloy selection, steam conditions, drive duty, modular configuration, and package scope materially change the bill of materials and factory activities. Product-specific foreground records are therefore required; a CPC leaf or a generic turbine average is not a sufficient inventory.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.metal-products-machinery-and-equipment.general-purpose-machinery.steam-turbines-and-other-vapour-turbines |
| classification_refs | CPC 3.0: 43141, Steam turbines and other vapour turbines (`un-cpc-3-0-2025`) |
| covered_products | Complete steam turbines and other vapour turbines supplied as bare turbines, turbine modules, or declared turbine packages for generator drive or mechanical drive |
| excluded_products | Separately supplied parts; boilers and steam generators; hydraulic turbines and water wheels; gas turbines; generators, gears, condensers, controls, and auxiliaries not transferred with the declared turbine |
| representative_product | A shipment-ready steam turbine with declared rotor, casing, blading, valve, bearing, base-frame, auxiliary, and package scope |
| production_route | Product-specific engineering and procurement; component forming or procurement; machining and heat treatment; conditional joining and surface treatment; assembly; balancing and factory testing; preservation and dispatch preparation |
| market_state | New, complete, accepted turbine or declared turbine package at the manufacturer's dispatch gate; net turbine mass and included equipment are declared |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | A shipment-ready steam or other vapour turbine that converts thermal energy in steam or another declared vapour into mechanical shaft power |
| How much | 1,000 kg net mass of the declared complete turbine or turbine package at the manufacturer's dispatch gate |
| How well | Meeting the declared rated shaft or generator output, inlet and exhaust steam conditions, rotational speed and frequency where applicable, drive duty, acceptance criteria, and included package scope |
| How long or cycle | The declared design life and duty profile are reported as product metadata; this manufacturing reference flow does not divide factory burdens by lifetime operation |
| reference_flow_link | One output row `steam_turbine_product` from `p_assembly_testing` equals the 1,000 kg reference amount |

| Field | Value |
| --- | --- |
| Reference amount | 1,000 kg net shipment-ready turbine mass |
| Reference product flow | Steam turbines and other vapour turbines `d073d1e4-584a-4467-878f-0845a4f0c868` |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | turbine type and model; bare turbine or package scope; generator-drive or mechanical-drive duty; rated output; inlet pressure and temperature; exhaust or back-pressure condition; reheat and extraction configuration; rotational speed; grid frequency if applicable; net product mass; included modules and auxiliaries; manufacturing site and geography; reporting period; acceptance-test state |

When constructing a foreground data package, every required qualifier must be declared in dataset metadata, process notes, the reference-flow comment, the product description, or an equivalent field. Missing qualifiers make the reference flow definition incomplete.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| `reference_net_mass` | Reference product and normalization denominator | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Weigh or calculate the accepted net mass of the declared turbine scope. Exclude transport packaging and fixtures from the denominator, but retain them as inventory inputs when transferred or consumed for dispatch. |
| `material_mass_basis` | Purchased metals, consumables, product, and wastes | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Record dry or as-supplied mass consistently, disclose retained fluid and coating mass, and normalize each amount to 1,000 kg net reference product. |
| `electricity_energy_basis` | Purchased electricity | Net calorific value `93a60a56-a3c8-11da-a746-0800200b9a66` | MJ | Preserve metered electricity before allocation; convert kWh to MJ using the exact identity 1 kWh = 3.6 MJ and disclose voltage, grid mix, geography, and delivery losses. |
| `gas_volume_basis` | Natural gas, industrial oxygen, and unresolved industrial argon | Volume `93a60a56-a3c8-22da-a746-0800200c9a66` | m3 | Report metered gas volume at declared temperature, pressure, and moisture reference conditions; do not combine different gases or convert to mass without a documented composition and density basis. |
| `mass_balance_check` | Material fabrication and final assembly | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Reconcile accepted product mass, retained consumables, returned material, measured process scrap, and other separately recorded outputs on one consistent product-order basis. |

## 5. System Boundary

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `boundary_cradle_to_gate` | Product system | Include upstream production of all purchased materials and energy plus foreground activities under the reporting manufacturer's control through acceptance and dispatch preparation at the factory gate. Document and justify any exclusion. | `ec-pef-recommendation-2021-annexes` |
| `boundary_declared_package` | Product scope | Model only the turbine, modules, base frame, fluids, controls, generator, gear, condenser, piping, instrumentation, and auxiliaries actually included in the commercial supply scope; disclose every included and excluded package element. | `siemens-energy-industrial-steam-turbines-2021`; `ge-steam-power-product-catalog-2020` |
| `boundary_component_supply` | Purchased or internally produced components | For purchased forgings, casings, blades, valves, bearings, and modules, connect supplier cradle-to-gate datasets at the receiving gate. For in-house manufacture, collect the actual forming, heat-treatment, machining, joining, and finishing exchanges without double counting supplier processing. | `ge-steam-power-product-catalog-2020`; `ec-pef-recommendation-2021-annexes` |
| `boundary_post_gate` | Downstream stages | Exclude outbound transport after the dispatch gate, site installation and commissioning, steam generation, turbine operation, maintenance, refurbishment, and end-of-life from this manufacturing dataset. Report them only in a separate downstream lifecycle model. | `ec-pef-recommendation-2021-annexes` |

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Purchased materials and components are received at the reporting manufacturer's gate in their actual delivered product state; upstream extraction, material production, forming, and supplier processing remain connected through supplier or representative upstream datasets |
| starting_condition_role | Separates product-specific foreground manufacture from upstream material and component production while retaining cradle-to-gate completeness |
| product_classification_scope | Complete steam turbines and other vapour turbines matching the semantic product boundary and CPC 43141 context |
| recursive_input_rule | A purchased complete turbine in the same category is not absorbed into the foreground output. Record it as a separate product input with its own upstream dataset, mass, configuration, and reason for use, then exclude its manufacture from the reporting site inventory to avoid recursion and double counting. |
| upstream_dataset_requirement | Every purchased material, component, fuel, electricity supply, gas, process chemical, and packaging item requires a geographically and technologically representative upstream dataset or an explicit documented data gap. |
| disclosure | Declare manufacturing site, reporting period, turbine model and duty, alloy and component supply states, in-house versus supplier operations, bare-versus-package scope, accepted net mass, allocation, exclusions, data gaps, and downstream stages omitted. |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| `p_material_fabrication` | Turbine component fabrication and finishing | required | Always include manufacturer-controlled component production, machining, finishing, and the receipt of purchased components; individual conditional exchanges apply only when the named route is used. | Foreground material conversion and component preparation | Per product order, normalized to 1,000 kg accepted net turbine mass |
| `p_assembly_testing` | Turbine assembly, balancing, filling, and factory acceptance testing | required | Always include final manufacturer-controlled assembly and acceptance activities. | Foreground assembly and acceptance | Per accepted turbine or declared package, normalized to 1,000 kg net mass |
| `p_preservation_dispatch` | Preservation coating and dispatch preparation | required | Include actual preservation and load-board inputs consumed or transferred before the dispatch gate; rows may be zero only when the named exchange is demonstrably absent. | Foreground dispatch preparation | Per accepted turbine shipment, normalized to 1,000 kg net mass |

### Process: Turbine component fabrication and finishing (`p_material_fabrication`)

#### Inputs

##### Product flows

###### Delivered low-alloy steel forging (`low_alloy_steel_forging`)

Record the measured mass of delivered low-alloy steel forgings consumed for rotors, blades, shafts, or other turbine components. Grade, forging state, heat treatment, component role, supplier, and included upstream processing must be declared.

- Selected flow: Low-alloy steel forging
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: measured net mass issued to the product order, adjusted for documented returns
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1,000 kg accepted net turbine mass
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_bom_materials`
- Sources: `ge-steam-power-product-catalog-2020`

###### Titanium billet for turbine blading (`titanium_billet`)

Record titanium billet only when the declared turbine includes titanium blades or another billet-derived titanium component manufactured within the product system. Do not substitute plate, tube, or profile identity.

- Selected flow: Titanium billet
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: measured titanium billet issued to the product order; zero only when no billet-derived titanium component is in scope
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1,000 kg accepted net turbine mass
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_bom_materials`
- Sources: `ge-steam-power-product-catalog-2020`

###### Fabrication electricity (`fabrication_electricity`)

Record purchased electricity for manufacturer-controlled machining, heat treatment, joining, cleaning, balancing preparation, and shop services assigned to component fabrication.

- Selected flow: Electricity `67b723a9-6f63-4802-adca-b52ce7967d47`
- Flow property / unit: Net calorific value `93a60a56-a3c8-11da-a746-0800200b9a66` / MJ `93a60a57-a3c8-11da-a746-0800200c9a66`
- Amount rule: separately metered use or allocated measured shop electricity for the product order
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg accepted net turbine mass
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_utility_meters`
- Sources: `ec-pef-recommendation-2021-annexes`

###### Natural gas for direct-fired heat treatment (`heat_treatment_natural_gas`)

Record gaseous natural gas only when it is burned within the foreground boundary for heat treatment or other component fabrication. Supplier, composition, metering reference conditions, combustion technology, and allocation must be declared.

- Selected flow: natural gas in the gaseous state `4f19ca0e-7b3b-11dd-ad8b-0800200c9a66`
- Flow property / unit: Volume `93a60a56-a3c8-22da-a746-0800200c9a66` / m3 `93a60a57-a3c8-12da-a746-0800200c9a66`
- Amount rule: metered or invoiced volume assigned to the product order; zero when no foreground natural-gas combustion occurs
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1,000 kg accepted net turbine mass
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_utility_meters`
- Sources:

###### Fabrication process water (`fabrication_process_water`)

Record process water crossing the foreground boundary for machining, cooling, aqueous cleaning, or surface preparation. Water source, quality, density conversion, recirculation boundary, and discharge route must be declared.

- Selected flow: Process Water `94a04f7e-2d5c-41f0-b182-d54a3b373a02`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: measured make-up water assigned to the product order, excluding internally recirculated volume
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg accepted net turbine mass
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_utility_meters`
- Sources:

###### Cutting fluid (`cutting_fluid`)

Record cutting fluid make-up consumed in machining turbine components. Formulation, water content, concentration, recycled-loop boundary, and supplier must be declared.

- Selected flow: Cutting Fluid `576d250f-4f36-4385-939d-0f03b8f95a10`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: measured make-up mass issued to machining for the product order
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg accepted net turbine mass
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_bom_materials`
- Sources:

###### Flux-cored welding wire (`flux_cored_wire`)

Record flux-cored welding wire only when flux-cored arc welding is used on the declared turbine or package. Wire grade, deposited-metal specification, return, and unused remainder must be documented.

- Selected flow: Flux Cored Wire `1b74a576-06e0-4764-97ce-11a73f8a4752`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: measured wire consumed by the product order; zero when flux-cored wire is not used
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1,000 kg accepted net turbine mass
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_bom_materials`
- Sources: `ge-steam-power-product-catalog-2020`

###### Industrial argon shielding gas (`industrial_argon`)

Record industrial argon only when it is supplied for welding or another inert-gas fabrication operation. Purity, blend composition, supply state, metering reference conditions, and loss boundary must be declared.

- Selected flow: Industrial argon
- Flow property / unit: Volume `93a60a56-a3c8-22da-a746-0800200c9a66` / m3 `93a60a57-a3c8-12da-a746-0800200c9a66`
- Amount rule: metered or supplier-recorded argon volume assigned to the product order; zero when argon is not used
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1,000 kg accepted net turbine mass
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_bom_materials`
- Sources:

###### Industrial oxygen for thermal cutting (`industrial_oxygen`)

Record industrial oxygen only when it is supplied for oxy-fuel cutting or another foreground fabrication operation. Purity, pressure, reference conditions, supplier, and operation must be declared.

- Selected flow: Industrial oxygen `bd4b0f96-2090-4806-a648-335ab20ff401`
- Flow property / unit: Volume `93a60a56-a3c8-22da-a746-0800200c9a66` / m3 `93a60a57-a3c8-12da-a746-0800200c9a66`
- Amount rule: metered or supplier-recorded oxygen volume assigned to the product order; zero when oxygen is not used
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1,000 kg accepted net turbine mass
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_bom_materials`
- Sources:

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

##### Waste flows

###### Post-industrial steel scrap (`postindustrial_steel_scrap`)

Record segregated steel offcuts, chips, swarf, and rejected steel pieces leaving the foreground as post-industrial scrap. Report alloy family, contamination, wet or dry basis, recovery destination, and any cutting-fluid content separately.

- Selected flow: Post-industrial steel scrap `c143745d-be4f-4d8f-b403-2dcbfe685349`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: weighed net mass transferred off site or into a separately modelled recovery process
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg accepted net turbine mass
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste_records`
- Sources:

###### Waste cutting oil (`waste_cutting_oil`)

Record oil-based waste cutting fluid only when it is separately removed from the machining system. Do not combine it with aqueous coolant, metal chips, or wastewater.

- Selected flow: Waste cutting oil `80d926e3-0f76-4a19-9b1e-ffec9deb1216`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: weighed waste cutting oil transferred for treatment; zero when no oil-based cutting-fluid waste is generated
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg accepted net turbine mass
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste_records`
- Sources:

###### Metal-finishing wastewater (`metal_finishing_wastewater`)

Record the aqueous wastewater stream generated by component cleaning or surface treatment only when it leaves the recirculation system for treatment or discharge. Declare composition, treatment state, solids separation, mass basis, and receiving boundary.

- Selected flow: Metal-finishing wastewater
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: measured wastewater mass leaving the foreground water loop; zero when no such stream leaves the boundary
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg accepted net turbine mass
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste_records`
- Sources:

##### Elementary flows

###### Fossil carbon dioxide from foreground natural-gas combustion (`heat_treatment_fossil_co2`)

Record only direct fossil carbon dioxide released by natural-gas combustion inside the foreground fabrication boundary. Upstream fuel-supply emissions and purchased-electricity emissions remain in their upstream datasets.

- Selected flow: carbon dioxide (fossil) `08a91e70-3ddc-11dd-923d-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: measured stack inventory or calculated fossil CO2 from assigned fuel volume, supplier composition or carbon content, and a documented oxidation basis; zero when no foreground fossil-fuel combustion occurs
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1,000 kg accepted net turbine mass
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_direct_emissions`
- Sources:

### Process: Turbine assembly, balancing, filling, and factory acceptance testing (`p_assembly_testing`)

#### Inputs

##### Product flows

###### Assembly and factory-test electricity (`assembly_test_electricity`)

Record purchased electricity for assembly, rotor handling, balancing, pumps, test stands, controls, and acceptance activities within the declared factory boundary.

- Selected flow: Electricity `67b723a9-6f63-4802-adca-b52ce7967d47`
- Flow property / unit: Net calorific value `93a60a56-a3c8-11da-a746-0800200b9a66` / MJ `93a60a57-a3c8-11da-a746-0800200c9a66`
- Amount rule: separately metered use or allocated measured assembly-and-test electricity for the product order
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg accepted net turbine mass
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_utility_meters`
- Sources: `ec-pef-recommendation-2021-annexes`

###### Turbine lubricating-oil fill (`turbine_lubricating_oil`)

Record lubricating oil that is consumed in testing or retained in the transferred turbine or included oil system. Declare mineral or synthetic base, grade, viscosity, quantity recovered after testing, retained fill, and package scope.

- Selected flow: lubricating oil `aec6f1a5-7b09-4704-870d-434d3ada0edd`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: measured make-up plus retained final fill attributable to the product order, net of recovered reusable oil
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1,000 kg accepted net turbine mass
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_bom_materials`
- Sources: `siemens-energy-industrial-steam-turbines-2021`; `ge-steam-power-product-catalog-2020`

###### Factory-test process water (`test_process_water`)

Record process water crossing the boundary for hydrostatic tests, flushing, or cleaning. Exclude recirculated water until make-up enters or a wastewater stream leaves the foreground.

- Selected flow: Process Water `94a04f7e-2d5c-41f0-b182-d54a3b373a02`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: measured make-up water assigned to testing and acceptance for the product order
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg accepted net turbine mass
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_utility_meters`
- Sources:

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Accepted steam or other vapour turbine (`steam_turbine_product`)

Record the accepted shipment-ready turbine or declared package after assembly and factory acceptance. The output name and UUID identify the whole product, not separately supplied parts or downstream electricity generation.

- Selected flow: Steam turbines and other vapour turbines `d073d1e4-584a-4467-878f-0845a4f0c868`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: exactly 1,000 kg accepted net reference product after normalization
- Value mode: Fixed value (`fixed_value`)
- Specificity: Generic (`generic`)
- Normalization basis: 1,000 kg accepted net turbine or declared package mass
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Identity reference (`identity_reference`)
- Sources: `un-cpc-3-0-2025`; `siemens-energy-industrial-steam-turbines-2021`

##### Waste flows

##### Elementary flows

### Process: Preservation coating and dispatch preparation (`p_preservation_dispatch`)

#### Inputs

##### Product flows

###### Two-component epoxy zinc-rich primer (`epoxy_zinc_primer`)

Record this primer only when the actual preservation system uses a two-component epoxy zinc-rich coating before dispatch. Keep other coating formulations as separately identified foreground flows rather than substituting a generic primer UUID.

- Selected flow: Two-component epoxy zinc-rich primer
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: measured mixed coating mass consumed for the declared product, net of separately recorded waste; zero when this formulation is not used
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1,000 kg accepted net turbine mass
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_bom_materials`
- Sources:

###### Wooden pallet or load board (`wooden_pallet`)

Record wooden pallets, skids, or load boards consumed or transferred with the dispatch unit. Declare wood species or product description, treatment, moisture basis, reuse status, and whether the item crosses the dispatch gate.

- Selected flow: Pallets, box pallets and other load boards, of wood, pallet collars of wood `4b49871e-95be-4e0c-9223-9902f9eaa763`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: measured mass consumed or transferred with the product order; zero when no wooden load board crosses the boundary
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1,000 kg accepted net turbine mass
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_bom_materials`
- Sources:

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

##### Waste flows

##### Elementary flows

## 7. Allocation and Co-product Handling

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `allocation_subdivide_first` | Shared manufacturing operations | Avoid allocation by separately metering or otherwise subdividing product-order material issues, machine time, energy, tests, waste, and direct emissions whenever technically feasible. | `ec-pef-recommendation-2021-annexes` |
| `allocation_physical_relationship` | Residual shared burdens | When subdivision is infeasible, use a documented causal physical relationship such as measured machine-hours, test-stand hours, processed mass, furnace loading, or occupied production time that represents the burden driver. Do not allocate all burdens only by final product mass when mass is not causal. | `ec-pef-recommendation-2021-annexes` |
| `allocation_other_relationship` | No defensible physical relationship | Use another relationship, including economic allocation, only after documenting why subdivision and a causal physical relationship are infeasible. Report the factor, data period, affected flows, and sensitivity. | `ec-pef-recommendation-2021-annexes` |
| `allocation_scrap_and_waste` | Steel scrap, waste cutting oil, and wastewater | Report waste treatment and any recovery modelling separately. Do not assign avoided virgin-material credits inside the foreground inventory unless the downstream lifecycle model declares and consistently applies a reviewed recycling method. | `ec-pef-recommendation-2021-annexes` |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_bom_materials` | `p_material_fabrication`; `p_assembly_testing`; `p_preservation_dispatch` | Product-specific material, gas, fluid, coating, and dispatch inputs | Approved bill of materials, purchase and issue records, return records, cylinder records, coating mix sheets, and final-fill sheets | product order; item identity; grade or formulation; supplier; delivered state; gross issue; return; retained amount; unit; included package element; date | Reconcile approved BOM with stores, supplier, production, coating, gas-cylinder, and fill records | kg or m3 at declared conditions | Per product order, reconciled at acceptance | Entire manufacture of each accepted product order; aggregate only orders within the declared reporting period | All reporting-site operations and declared supplier component gates | Net consumption equals issue plus direct receipt minus documented return and reusable recovery; normalize by accepted net product mass | Signed BOM revision, traceable material certificates, calibrated scales, supplier invoices, issue/return records, cylinder tickets, and acceptance configuration |
| `cp_utility_meters` | `p_material_fabrication`; `p_assembly_testing` | Electricity, natural gas, and process water | Meter readings, invoices, equipment logs, production hours, and allocation-driver records | meter id; opening and closing reading; unit; time; product order; machine or furnace; load; runtime; reference conditions; allocation driver | Prefer submetering; otherwise reconcile site meter totals and assign only with the allocation hierarchy | kWh, MJ, m3, or kg | Continuous or batch readings with at least monthly reconciliation | Complete product-order manufacturing window and a representative reporting period | Reporting site and identified shop, furnace, test stand, or water loop | Convert units after retaining raw readings; assign by subdivision or documented causal driver; normalize by accepted net mass | Meter calibration, invoices, total-versus-submeter reconciliation, downtime and occupancy logs, and stated grid and gas conditions |
| `cp_waste_records` | `p_material_fabrication` | Post-industrial steel scrap, waste cutting oil, and metal-finishing wastewater | Weighbridge tickets, container weights, manifests, wastewater meters, laboratory records, and treatment receipts | product order or campaign; waste identity; gross and tare mass; water or oil content; contamination; treatment state; destination; date; allocation driver | Weigh each transfer or measure wastewater leaving the recirculation loop and reconcile to site waste totals | kg | Per transfer with monthly and product-order reconciliation | Complete manufacturing window for included product orders | Reporting site through the waste handover or declared treatment boundary | Subtract tare; avoid double counting liquid retained on scrap; allocate shared transfers using documented generation drivers | Calibrated scale or meter, transfer manifest, laboratory result where composition matters, and treatment acceptance receipt |
| `cp_direct_emissions` | `p_material_fabrication` | Direct fossil carbon dioxide | Stack measurement or fuel records with supplier composition, carbon content, oxidation basis, and furnace assignment | measured CO2 or fuel volume; reference conditions; carbon factor; oxidation factor; operating time; furnace load; product order; biogenic fraction | Prefer verified direct monitoring; otherwise calculate from collected fuel and documented supplier or site factor | kg CO2 or m3 fuel | Per run or reporting period with product-order assignment | Complete period of foreground combustion for included orders | Reporting-site combustion only | Exclude upstream fuel and electricity emissions; assign direct fossil CO2 consistently with the same fuel allocation | Instrument calibration or supplier fuel certificate, factor provenance, calculation sheet, and reconciliation to reported fuel use |
| `cp_product_acceptance` | `p_assembly_testing` | Accepted turbine output and reference denominator | Final mass statement, configuration baseline, acceptance certificate, and dispatch release | product order; model; serial number; net mass; package inclusions; rated output; steam conditions; speed; frequency; test status; acceptance date | Use approved engineering mass roll-up or calibrated weighing and reconcile to the accepted configuration | kg | Per accepted turbine or package | Each product order in the declared reporting period | Reporting manufacturer and dispatch gate | Sum only accepted products of matching declared scope; normalize all exchanges to 1,000 kg net mass | Approved as-built configuration, mass statement, signed acceptance evidence, and dispatch release |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_reference_normalization` | Every inventory row | normalized amount = product-order exchange / accepted net product mass × 1,000 kg | Net exchange amount from the applicable protocol; accepted net product mass from `cp_product_acceptance` | Exchange per 1,000 kg reference product | `ec-pef-recommendation-2021-annexes` |
| `calc_electricity_conversion` | `fabrication_electricity`; `assembly_test_electricity` | electricity MJ = metered kWh × 3.6 MJ/kWh | Metered kWh and allocation result from `cp_utility_meters` | MJ electricity before reference normalization |  |
| `calc_net_material_consumption` | BOM-controlled inputs | net consumed = direct receipt + stores issue - returned unused material - separately documented reusable recovery | BOM, receipt, issue, return, and recovery records from `cp_bom_materials` | kg or m3 net input by atomic flow | `ec-pef-recommendation-2021-annexes` |
| `calc_direct_fossil_co2` | `heat_treatment_fossil_co2` | Use verified direct CO2 measurement; otherwise multiply assigned fuel quantity by a documented supplier- or site-specific fossil-carbon factor and oxidation basis, preserving reference-condition conversions and biogenic fraction | Assigned natural gas; composition or carbon content; oxidation basis; monitoring record | kg direct fossil CO2 |  |
| `calc_shared_operation_assignment` | Shared utilities and waste | Apply subdivision first; if infeasible, multiply the reconciled shared total by the documented causal physical allocation factor for the product order | Reconciled shop total; product-order and total driver quantities | Assigned exchange before reference normalization | `ec-pef-recommendation-2021-annexes` |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_product_identity` | Reference product | The as-built model, drive duty, steam conditions, accepted state, net mass, and included package elements must match the reference flow and commercial supply boundary. | Configuration baseline, mass statement, acceptance certificate, and dispatch release |
| `dq_bom_completeness` | Material and component inputs | Reconcile the product-specific BOM to procurement, issue, return, and as-built records; identify every environmentally relevant material and energy flow and document exclusions. | Approved BOM revision, material certificates, reconciliation record, and exclusion register (`ec-pef-recommendation-2021-annexes`) |
| `dq_temporal_coverage` | All foreground data | Cover the complete manufacture of each included product order. Shared site data must span a representative period that captures the orders and operating modes used in allocation. | Dated records, production calendar, meter coverage, and gap log |
| `dq_measurement` | Meters, scales, gas and waste records | Use calibrated or financially reconciled measurements; retain raw units and reference conditions before conversion. | Calibration certificates, invoices, weighbridge tickets, meter reconciliation, and conversion sheet |
| `dq_representativeness` | Upstream datasets | Match material grade and product state, supplier geography, production technology, energy market, and temporal period; disclose proxies and unresolved identities. | Supplier information, dataset metadata, representativeness assessment, and data-gap register |
| `dq_mass_balance` | Fabrication and assembly | Explain material-balance differences between input, accepted product, retained fluids or coatings, returns, scrap, other wastes, and work in progress. | Product-order mass-balance worksheet and signed review |
| `dq_no_double_counting` | Supplier and foreground processing | Purchased-component datasets and in-house operations must not both include the same forming, heat-treatment, machining, joining, coating, testing, or packaging step. | Process responsibility matrix and supplier dataset boundary statement |

## 9. Validation Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `validate_identity_and_scope` | Reference product | Fail validation when the product is not a complete steam or other vapour turbine, the accepted net mass is absent, or bare-versus-package inclusions and exclusions are not declared. | `un-cpc-3-0-2025`; `siemens-energy-industrial-steam-turbines-2021` |
| `validate_reference_amount` | Reference flow | Require one `steam_turbine_product` output and exactly 1,000 kg after normalization; packaging mass must not enter the net-product denominator. |  |
| `validate_atomic_inventory` | Inventory rows | Require every exchange to have one direction, one flow type, one concrete flow identity, one amount-production mode, one basis, and one protocol when collected or calculated from collection. Reject combined utilities, fuels, gases, coatings, materials, wastes, or emissions. | `ec-pef-recommendation-2021-annexes` |
| `validate_conditional_routes` | Conditional inputs and outputs | A zero value is valid only when the dataset documents that the named route or exchange is absent. Otherwise require the measured value and route qualifier. |  |
| `validate_uuid_semantics` | Tiangong references | Require each adopted UUID to retain its audited flow type, classification, property, unit group, and official Chinese baseName; unresolved rows must remain UUID-empty and declared in manifest review metadata. |  |
| `validate_mass_and_energy` | Foreground calculations | Require unit conversions, shared-operation allocation, product normalization, gas reference conditions, and mass-balance reconciliation to be reproducible from retained raw records. | `ec-pef-recommendation-2021-annexes` |
| `validate_boundary_completeness` | Cradle-to-gate result | Require upstream datasets or explicit data gaps for purchased materials, components, energy, process chemicals, and packaging, and require foreground waste and direct emissions to be identified without double counting supplier operations. | `ec-pef-recommendation-2021-annexes`; `ge-steam-power-product-catalog-2020` |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | Product-specific cradle-to-gate foreground manufacturing dataset for an accepted steam or other vapour turbine |
| downstream_use | `secondary_dataset`; `background_dataset` for a matching turbine configuration and supply scope; foreground input to a separately modelled power-plant, industrial-drive, installation, use, maintenance, or end-of-life lifecycle model |
| allowed_use | Comparison or modelling only when turbine duty, rated output, steam conditions, mass, bare-versus-package scope, manufacturing geography and technology, reporting period, allocation, and upstream dataset representativeness are compatible and disclosed |
| excluded_use | Not an electricity-generation dataset; not a steam-generation dataset; not a hydraulic, gas, or wind turbine dataset; not a separately supplied parts dataset; not a use-stage efficiency or lifetime default; not representative of an undeclared turbine package |
| required_metadata | PCR id and version state; product model and serial or study identifier; turbine and drive type; rated output; steam inlet, exhaust, reheat, and extraction conditions; speed and frequency; design-life metadata; accepted net mass; included and excluded package elements; manufacturing site and geography; reporting period; component supply states; allocation; cut-offs; data gaps; source and background dataset versions |
| required_quality_disclosure | Foreground versus supplier data share; BOM and mass-balance completeness; meter and scale quality; temporal, geographical, and technological representativeness; allocation drivers; unresolved UUIDs; missing empirical ranges; exclusions; proxies; uncertainty and sensitivity |
| update_trigger | Material change to turbine design or package scope, alloy or component supply state, manufacturing route, site or energy supply, allocation, upstream datasets, Tiangong UUID identity, acceptance basis, or evidence used by this PCR |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `un-cpc-3-0-2025` | Official guidance (`official_guidance`) | United Nations Statistics Division, CPC Version 3.0 Structure, row 43141, 2025. https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Structure_30Jun2025.csv (retrieved 2026-09-05; SHA-256 `5cd2c1c4890dd6be16af48e9bb940fed48efff9865f39ff15edaa921da25fb7c`) | Official classification identity; separation of complete turbines from parts in row 43153 |
| `siemens-energy-industrial-steam-turbines-2021` | Handbook (`handbook`) | Siemens Energy, *Industrial steam turbines from 2 to 250 MW*, 2021. https://assets.siemens-energy.com/dam/79160ff2-731e-4ffe-9ab2-b0360117cdde/SE-Brochure-Industrial-Steam-Turbines-2021-pdf_Original%20file.pdf (retrieved 2026-09-05) | Generator-drive and mechanical-drive scope; bare and package configurations; modular assemblies; oil systems; casing and auxiliary qualifiers |
| `ge-steam-power-product-catalog-2020` | Handbook (`handbook`) | GE Steam Power, *GE Steam Power product catalog*, 2020. https://www.gevernova.com/content/dam/gepower-steam/global/en_US/documents/Steam-Product-Catalog.pdf (retrieved 2026-09-05) | Forged rotor and blade production; steel and conditional titanium materials; welded and cast structures; preassembled units; package auxiliaries |
| `ec-pef-recommendation-2021-annexes` | Official guidance (`official_guidance`) | European Commission, *Commission Recommendation (EU) 2021/2279 on the use of the Environmental Footprint methods, Annexes 1 to 2*, 2021. https://environment.ec.europa.eu/document/download/680503dc-5a19-4f6a-bb92-84d9bfc8f312_en?filename=Annexes+1+to+2.pdf (retrieved 2026-09-05) | Product-specific BOM and manufacturing data; completeness and documented exclusions; site-specific data; boundary definition; subdivision-first allocation and data-quality rules |
