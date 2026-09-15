---
pcr_id: pcr.metal-products-machinery-and-equipment.general-purpose-machinery.parts-of-centrifuges-including-centrifugal-dryers-parts-of-filtering-or-purifying-machi-9224f4f0
language: en-US
status: candidate
sync_with: pcr.zh-CN.md
---

# Parts of centrifuges, including centrifugal dryers; parts of filtering or purifying machinery and apparatus for liquids or gases

## 1. Scope and Applicability

This PCR covers factory-gate production of finished, separately supplied parts made specifically for centrifuges (including centrifugal dryers) or for machinery and apparatus that filter or purify liquids or gases. The declared part must be identified by drawing, specification or equivalent technical description.

Complete centrifuges, complete filtering or purifying machines, undedicated fasteners, motors, pumps, instruments and controls are excluded. Installation, use, maintenance and end-of-life are excluded. Metal and polymer parts are covered; joining, surface treatment and packaging exchanges apply only to the actual route.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | `pcr.metal-products-machinery-and-equipment.general-purpose-machinery.parts-of-centrifuges-including-centrifugal-dryers-parts-of-filtering-or-purifying-machi-9224f4f0` |
| classification_refs | CPC 3.0: 43942 |
| covered_products | Finished, separately supplied parts dedicated to centrifuges, centrifugal dryers, or liquid- or gas-filtering or purifying machinery and apparatus. |
| excluded_products | Complete machines; undedicated general-purpose components; installation, use, maintenance and end-of-life services. |
| representative_product | A finished conforming metal or polymer machinery part ready to leave the manufacturing site. |
| production_route | Receipt of material or preform; machining or forming and cleaning; conditional joining and surface treatment; final inspection, testing and packaging. |
| market_state | Finished, clean, inspected part at the factory gate, with any specified coating and shipment packaging. |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Provision of a finished, conforming part dedicated to a centrifuge or liquid- or gas-filtering or purifying machine. |
| How much | 1 kg net mass of finished part, excluding shipment packaging. |
| How well | Conforms to the declared drawing/specification, material grade, dimensions, surface condition and applicable balance, cleanliness, leak or performance criteria. |
| How long or cycle | One production lot delivered at the factory gate; no service-life equivalence is asserted. |
| reference_flow_link | The functional unit is realized by 1 kg of the finished reference product output. |

| Field | Value |
| --- | --- |
| Reference amount | 1 kg |
| Reference product flow | Finished centrifuge or filtering/purifying machinery part |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | part type and intended machine/application; drawing or specification revision; material grade and composition; net finished mass and principal dimensions; applicable pressure, temperature and chemical-compatibility rating; surface treatment or coating; applicable balance, cleanliness, leak or filtration-performance test; manufacturing site and geography; recycled-content claim and accounting method; shipment packaging configuration; production period |

When constructing a foreground data package, every required qualifier must be declared in metadata, process notes, reference-flow comment, product description or an equivalent field.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| `reference_mass` | finished reference product | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Determine net dry mass after final processing, exclude shipment packaging, and normalize exchanges to 1 kg conforming output. |
| `electricity_energy` | purchased electricity | Net calorific value `93a60a56-a3c8-11da-a746-0800200b9a66` | MJ | Record delivered electricity by process; multiply kWh by 3.6 to obtain MJ and disclose shared-meter allocation. |
| `water_mass` | process water | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Prefer mass; if volume is metered, use documented density for measured conditions and retain raw volume. |
| `gas_volume` | natural gas or oxygen | Volume `93a60a56-a3c8-22da-a746-0800200c9a66` | m3 | Declare pressure, temperature and standard/reference-condition conversion for delivered gas volume. |
| `material_and_waste_mass` | material, packaging and waste rows | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Use net mass at the process boundary; state moisture or solution concentration when material. |
| `shared_meter_allocation` | shared meter or invoice | Applicable row property | Applicable row unit | Prefer sub-metering; otherwise use a measured causal driver and disclose the calculation. |

## 5. System Boundary

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `boundary_factory_gate` | foreground_system_boundary | Include receipt of material or preforms, cutting/forming/machining, in-process cleaning, conditional joining and surface treatment, final cleaning/inspection/testing, and shipment packaging through release at the site gate. | `us-epa-fabricated-metal-products-1995`; `ec-jrc-stm-bref-2006` |
| `boundary_upstream_inputs` | purchased_product_inputs | Link each purchased material, chemical, fuel, electricity and packaging exchange to a matching upstream dataset; do not import upstream emissions into direct-emission rows. |  |
| `boundary_conditional_routes` | joining_and_surface_treatment | Include joining, gas use, chemical treatment, rinsing, wastewater and sludge only when performed in scope; support not-applicable declarations with route evidence. | `us-epa-fabricated-metal-products-1995`; `ec-jrc-stm-bref-2006` |
| `boundary_exclusions` | downstream_and_capital_activities | Exclude complete-machine assembly outside the declared part producer, installation, use, maintenance and end-of-life; disclose treatment of capital equipment. |  |
| `boundary_direct_emissions` | foreground_emissions | Report only measured or calculated direct site releases and avoid double counting upstream supply emissions. | `us-epa-fabricated-metal-products-1995`; `ec-jrc-stm-bref-2006` |

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Purchased material, preform or component is received at the part-manufacturing site with mass, grade, supplier and upstream dataset identified. |
| starting_condition_role | Cradle-to-gate foreground entry condition. |
| product_classification_scope | Dedicated parts within CPC 3.0 code 43942; complete machines remain outside the boundary. |
| recursive_input_rule | A purchased input that is itself a dedicated part remains an explicit product input linked to an upstream part dataset; do not recursively reproduce its manufacture. |
| upstream_dataset_requirement | Match material grade/composition, route, product state, geography and period; document substitutions and recycled-content modeling. |
| disclosure | Declare received state, make-versus-buy boundary, included route steps, outsourced steps, site/geography, period and packaging boundary. |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| `part_fabrication` | Material preparation, forming/machining and cleaning | `required` | Always include foreground conversion of received stock or preforms. | Core material conversion. | kg conforming fabricated part |
| `joining_assembly` | Joining and subassembly | `conditional` | Include when in-scope welding or joining is used. | Joins fabricated pieces. | kg joined part |
| `surface_treatment` | Surface treatment, rinsing and drying | `conditional` | Include when in-scope chemical, electrochemical or fuel-heated treatment is used. | Produces specified surface condition. | kg treated part |
| `final_testing_packaging` | Final inspection, testing and packaging | `required` | Always include final acceptance and release; packaging rows apply only when present. | Produces reference product. | 1 kg finished part |

### Process: Material preparation, forming/machining and cleaning (`part_fabrication`)

#### Inputs

##### Product flows

###### Stainless-steel sheet (`stainless_steel_sheet`)

Record this atomic exchange only when it crosses the declared foreground process boundary.

- Selected flow: Stainless-steel sheet
- Flow property / unit: Mass / kg
- Amount rule: Net issued mass by grade, less documented return to stores.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg finished machinery part
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_part_fabrication`
- Sources: `us-epa-fabricated-metal-products-1995`

###### Carbon-steel plate (`carbon_steel_plate`)

Record this atomic exchange only when it crosses the declared foreground process boundary.

- Selected flow: Carbon-steel plate
- Flow property / unit: Mass / kg
- Amount rule: Net issued plate mass by grade, less documented return to stores.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg finished machinery part
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_part_fabrication`
- Sources: `us-epa-fabricated-metal-products-1995`

###### Aluminium sheet (`aluminium_sheet`)

Record this atomic exchange only when it crosses the declared foreground process boundary.

- Selected flow: Aluminium sheet `4f197be4-7b3b-11dd-ad8b-0800200c9a66`
- Flow property / unit: Mass / kg
- Amount rule: Net issued sheet mass by alloy, less documented return to stores.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg finished machinery part
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_part_fabrication`
- Sources: `us-epa-fabricated-metal-products-1995`

###### Polypropylene granulate (`polypropylene_granulate`)

Record this atomic exchange only when it crosses the declared foreground process boundary.

- Selected flow: polypropylene granulate (PP) `4f19f11d-7b3b-11dd-ad8b-0800200c9a66`
- Flow property / unit: Mass / kg
- Amount rule: Dry resin charged, net of documented clean regrind returned within the process.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg finished machinery part
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_part_fabrication`
- Sources:

###### Cutting fluid (`cutting_fluid`)

Record this atomic exchange only when it crosses the declared foreground process boundary.

- Selected flow: Cutting Fluid `576d250f-4f36-4385-939d-0f03b8f95a10`
- Flow property / unit: Mass / kg
- Amount rule: Purchased or tank make-up mass consumed; state concentration for diluted fluid.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg finished machinery part
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_part_fabrication`
- Sources: `us-epa-fabricated-metal-products-1995`

###### Fabrication electricity (`fabrication_electricity`)

Record this atomic exchange only when it crosses the declared foreground process boundary.

- Selected flow: Electricity `67b723a9-6f63-4802-adca-b52ce7967d47`
- Flow property / unit: Net calorific value / MJ
- Amount rule: Sub-metered or causally allocated electricity, converted under `electricity_energy`.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg finished machinery part
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_part_fabrication`
- Sources: `us-epa-fabricated-metal-products-1995`

###### Fabrication process water (`fabrication_process_water`)

Record this atomic exchange only when it crosses the declared foreground process boundary.

- Selected flow: Process Water `94a04f7e-2d5c-41f0-b182-d54a3b373a02`
- Flow property / unit: Mass / kg
- Amount rule: Metered or batch-charge water entering the process, converted under `water_mass`.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg finished machinery part
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_part_fabrication`
- Sources: `us-epa-fabricated-metal-products-1995`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

##### Waste flows

###### Scrap steel (`scrap_steel`)

Record this atomic exchange only when it crosses the declared foreground process boundary.

- Selected flow: Scrap steel `c3fc5605-baa3-4b25-9934-ecf7fcbc72da`
- Flow property / unit: Mass / kg
- Amount rule: Weighed net ferrous scrap transferred to waste management.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg finished machinery part
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_part_fabrication`
- Sources: `us-epa-fabricated-metal-products-1995`

###### Aluminium scrap (`aluminium_scrap`)

Record this atomic exchange only when it crosses the declared foreground process boundary.

- Selected flow: Aluminium Scrap `96c5f842-ea53-419b-b1cd-c02c479efb45`
- Flow property / unit: Mass / kg
- Amount rule: Weighed net aluminium scrap transferred to waste management.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg finished machinery part
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_part_fabrication`
- Sources: `us-epa-fabricated-metal-products-1995`

###### Waste cutting oil (`waste_cutting_oil`)

Record this atomic exchange only when it crosses the declared foreground process boundary.

- Selected flow: Waste cutting oil `80d926e3-0f76-4a19-9b1e-ffec9deb1216`
- Flow property / unit: Mass / kg
- Amount rule: Net spent cutting oil transferred to waste management; disclose water fraction.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg finished machinery part
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_part_fabrication`
- Sources: `us-epa-fabricated-metal-products-1995`

###### Cleaning wastewater (`cleaning_wastewater`)

Record this atomic exchange only when it crosses the declared foreground process boundary.

- Selected flow: Wastewater from cleaning `f0402393-e82c-47e8-9cd8-a486c97f3e89`
- Flow property / unit: Mass / kg
- Amount rule: Metered or tank-derived wastewater crossing to treatment, net of verified recirculation.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg finished machinery part
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_part_fabrication`
- Sources: `us-epa-fabricated-metal-products-1995`

##### Elementary flows

###### Fabrication particulate to air (`fabrication_particulate_air`)

Record this atomic exchange only when it crosses the declared foreground process boundary.

- Selected flow: Particulate matter, particle size unspecified `0ce3dedb-caca-407b-a856-a90470eb8ec0`
- Flow property / unit: Mass / kg
- Amount rule: Measured or calculated direct release after controls; exclude captured dust waste.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg finished machinery part
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_part_fabrication`
- Sources: `us-epa-fabricated-metal-products-1995`

### Process: Joining and subassembly (`joining_assembly`)

#### Inputs

##### Product flows

###### Flux-cored welding wire (`flux_cored_wire`)

Record this atomic exchange only when it crosses the declared foreground process boundary.

- Selected flow: Flux Cored Wire `1b74a576-06e0-4764-97ce-11a73f8a4752`
- Flow property / unit: Mass / kg
- Amount rule: Wire issue or feeder consumption net of documented unused return.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg finished machinery part
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_joining_assembly`
- Sources: `us-epa-fabricated-metal-products-1995`

###### Industrial oxygen (`industrial_oxygen`)

Record this atomic exchange only when it crosses the declared foreground process boundary.

- Selected flow: Industrial oxygen `bd4b0f96-2090-4806-a648-335ab20ff401`
- Flow property / unit: Volume / m3
- Amount rule: Delivered-cylinder or bulk-meter volume at declared reference conditions.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg finished machinery part
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_joining_assembly`
- Sources:

###### Carbon dioxide shielding gas (`carbon_dioxide_shielding_gas`)

Record this atomic exchange only when it crosses the declared foreground process boundary.

- Selected flow: Carbon dioxide `27f41c1c-535e-4d2a-bce9-2c7f4de11549`
- Flow property / unit: Mass / kg
- Amount rule: Supplier delivery or cylinder mass difference allocated to the welded lot.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg finished machinery part
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_joining_assembly`
- Sources:

###### Joining electricity (`joining_electricity`)

Record this atomic exchange only when it crosses the declared foreground process boundary.

- Selected flow: Electricity `67b723a9-6f63-4802-adca-b52ce7967d47`
- Flow property / unit: Net calorific value / MJ
- Amount rule: Sub-metered or causally allocated electricity, converted under `electricity_energy`.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg finished machinery part
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_joining_assembly`
- Sources:

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

##### Waste flows

##### Elementary flows

### Process: Surface treatment, rinsing and drying (`surface_treatment`)

#### Inputs

##### Product flows

###### Sodium hydroxide (`sodium_hydroxide`)

Record this atomic exchange only when it crosses the declared foreground process boundary.

- Selected flow: Sodium hydroxide `e0abcced-0611-4c24-9290-5a2c5a0c4169`
- Flow property / unit: Mass / kg
- Amount rule: Solution mass times declared active fraction, unless modeled as supplied solution.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg finished machinery part
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_surface_treatment`
- Sources: `ec-jrc-stm-bref-2006`

###### Sulfuric acid (`sulfuric_acid`)

Record this atomic exchange only when it crosses the declared foreground process boundary.

- Selected flow: Sulfuric acid `7ee2e3c3-bee7-4520-92b7-3e23afbfcd6f`
- Flow property / unit: Mass / kg
- Amount rule: Solution mass times declared active fraction, unless modeled as supplied solution.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg finished machinery part
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_surface_treatment`
- Sources: `ec-jrc-stm-bref-2006`

###### Surface-treatment process water (`surface_treatment_process_water`)

Record this atomic exchange only when it crosses the declared foreground process boundary.

- Selected flow: Process Water `94a04f7e-2d5c-41f0-b182-d54a3b373a02`
- Flow property / unit: Mass / kg
- Amount rule: Metered make-up and rinse water, net of verified closed-loop recirculation.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg finished machinery part
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_surface_treatment`
- Sources: `ec-jrc-stm-bref-2006`

###### Surface-treatment electricity (`surface_treatment_electricity`)

Record this atomic exchange only when it crosses the declared foreground process boundary.

- Selected flow: Electricity `67b723a9-6f63-4802-adca-b52ce7967d47`
- Flow property / unit: Net calorific value / MJ
- Amount rule: Sub-metered or causally allocated electricity, converted under `electricity_energy`.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg finished machinery part
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_surface_treatment`
- Sources: `ec-jrc-stm-bref-2006`

###### Natural gas (`natural_gas`)

Record this atomic exchange only when it crosses the declared foreground process boundary.

- Selected flow: natural gas in the gaseous state `4f19ca0e-7b3b-11dd-ad8b-0800200c9a66`
- Flow property / unit: Volume / m3
- Amount rule: Metered delivered volume at declared reference conditions for in-scope heating.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg finished machinery part
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_surface_treatment`
- Sources: `ec-jrc-stm-bref-2006`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

##### Waste flows

###### Surface-treatment wastewater (`surface_treatment_wastewater`)

Record this atomic exchange only when it crosses the declared foreground process boundary.

- Selected flow: Surface-treatment wastewater
- Flow property / unit: Mass / kg
- Amount rule: Metered or tank-derived discharge to treatment, net of reuse.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg finished machinery part
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_surface_treatment`
- Sources: `ec-jrc-stm-bref-2006`

###### Metal-bearing treatment sludge (`metal_bearing_treatment_sludge`)

Record this atomic exchange only when it crosses the declared foreground process boundary.

- Selected flow: Metal-bearing surface-treatment sludge
- Flow property / unit: Mass / kg
- Amount rule: Wet mass transferred to waste management; declare dry solids and metal content.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg finished machinery part
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_surface_treatment`
- Sources: `ec-jrc-stm-bref-2006`

##### Elementary flows

###### Fossil carbon dioxide from surface-treatment fuel (`surface_treatment_fossil_co2`)

Record this atomic exchange only when it crosses the declared foreground process boundary.

- Selected flow: carbon dioxide (fossil) `08a91e70-3ddc-11dd-923d-0050c2490048`
- Flow property / unit: Mass / kg
- Amount rule: Metered fuel times disclosed carbon-content/emission and oxidation factors.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg finished machinery part
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_surface_treatment`
- Sources: `ec-jrc-stm-bref-2006`

### Process: Final inspection, testing and packaging (`final_testing_packaging`)

#### Inputs

##### Product flows

###### Final inspection and testing electricity (`final_electricity`)

Record this atomic exchange only when it crosses the declared foreground process boundary.

- Selected flow: Electricity `67b723a9-6f63-4802-adca-b52ce7967d47`
- Flow property / unit: Net calorific value / MJ
- Amount rule: Sub-metered or causally allocated electricity, converted under `electricity_energy`.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg finished machinery part
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_final_testing_packaging`
- Sources:

###### Corrugated board boxes (`corrugated_board_boxes`)

Record this atomic exchange only when it crosses the declared foreground process boundary.

- Selected flow: corrugated board boxes `4f197bec-7b3b-11dd-ad8b-0800200c9a66`
- Flow property / unit: Mass / kg
- Amount rule: Net box mass times boxes used, allocated over conforming shipment mass.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg finished machinery part
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_final_testing_packaging`
- Sources:

###### Polyethylene packaging film (`polyethylene_packaging_film`)

Record this atomic exchange only when it crosses the declared foreground process boundary.

- Selected flow: Polyethylene packaging film
- Flow property / unit: Mass / kg
- Amount rule: Net film consumed for shipped conforming parts.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg finished machinery part
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_final_testing_packaging`
- Sources:

###### Wooden pallet (`wooden_pallet_euro`)

Record this atomic exchange only when it crosses the declared foreground process boundary.

- Selected flow: Wooden pallet (EURO) `96b2b9ac-cfb6-46bf-8ad1-c056e338950a`
- Flow property / unit: Mass / kg
- Amount rule: Pallet mass divided by declared uses and conforming product mass carried.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Scenario-specific (`scenario_specific`)
- Normalization basis: per 1 kg finished machinery part
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_final_testing_packaging`
- Sources:

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Finished machinery part (`finished_machinery_part`)

Record this atomic exchange only when it crosses the declared foreground process boundary.

- Selected flow: Finished centrifuge or filtering/purifying machinery part
- Flow property / unit: Mass / kg
- Amount rule: Fixed at 1 kg net conforming output after rejection and rework, excluding packaging.
- Value mode: Fixed value (`fixed_value`)
- Specificity: Generic (`generic`)
- Normalization basis: per 1 kg finished machinery part
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Method formula (`method_formula`)
- Collection protocol: `cp_final_testing_packaging`
- Sources: `un-cpc-3-0-structure-2025`

##### Waste flows

##### Elementary flows

## 7. Allocation and Co-product Handling

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `allocation_subdivision` | separable_products_and_processes | First subdivide by product line, part family, batch and process step so directly attributable exchanges require no allocation. |  |
| `allocation_physical_driver` | inseparable_shared_operations | If direct metering is infeasible, allocate with a measured causal driver such as machine hours, treatment area, weld length, bath loading or processed mass; disclose sensitivity. |  |
| `allocation_scrap` | recyclable_scrap_and_waste | Record scrap and waste at the foreground boundary without avoided-burden credit; disclose recycling convention downstream. |  |
| `allocation_packaging_reuse` | reusable_pallets | Divide pallet manufacture by documented expected uses, assign losses to the period and test material reuse assumptions. |  |
| `allocation_no_mass_only_default` | heterogeneous_part_families | Do not use finished mass as an unexamined default where processing intensity differs materially; justify it against a causal driver. |  |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_part_fabrication` | `part_fabrication` | listed inputs, wastes and particulate | issue/return, meter, waste and emission records | material/grade, issued/returned mass, meter readings, allocation driver, waste mass, emission method, output mass | Reconcile ERP/store records, meters, waste manifests and control records to lots. | kg; MJ | lot or monthly | 12 representative months or full campaign | all in-scope fabrication equipment | Sum net exchanges and divide by conforming output; prevent recirculation double count. | invoices, issue slips, calibration, waste tickets and reconciliation |
| `cp_joining_assembly` | `joining_assembly` | wire, gases and electricity | feeder, cylinder, bulk-gas and electricity records | wire issue/return, gas quantity/conditions, meter, weld lot, output | Collect by batch or allocate reconciled totals using weld time or length. | kg; m3; MJ | joining lot or monthly | same period as reference product | all in-scope joining cells | Net consumption divided by conforming output for route lots. | feeder, supplier, gas and electricity records |
| `cp_surface_treatment` | `surface_treatment` | chemicals, water, energy, wastewater, sludge and CO2 | bath, meter, discharge and waste records | product mass/concentration, meter readings, discharge, sludge, factor, treated output | Reconcile bath logs and utilities with wastewater/sludge transfers and treated output. | kg; m3; MJ | bath campaign or monthly | same period including bath dumps | in-scope treatment and wastewater equipment | Direct assignment or causal treatment-area/bath-loading driver; calculate active chemical and CO2. | bath analysis, calibration, manifests and factor record |
| `cp_final_testing_packaging` | `final_testing_packaging` | final electricity, packaging and reference output | test, meter, BOM, scale and shipment records | accepted/rejected mass, meter, package mass/count, reuse, test, shipment | Reconcile accepted output to disposition and packaging issued. | kg; MJ | lot or shipment | same period | final test and packing area | Normalize to 1 kg net conforming output; exclude packaging from output mass. | scales, meters, acceptance and shipment records |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_normalize_reference_mass` | all rows | normalized amount = period boundary amount / net conforming finished-part mass | exchange; accepted mass | amount per 1 kg finished part |  |
| `calc_electricity_kwh_to_mj` | electricity rows | MJ = metered kWh × 3.6 | kWh | MJ |  |
| `calc_active_chemical` | sodium hydroxide and sulfuric acid | active mass = solution mass × active mass fraction; retain solution basis if required upstream | solution mass; concentration | kg active chemical or supplied solution | `ec-jrc-stm-bref-2006` |
| `calc_fossil_co2` | `surface_treatment_fossil_co2` | direct fossil CO2 = fuel quantity × disclosed factor × oxidation factor | fuel; factor; oxidation | kg fossil CO2 |  |
| `calc_mass_reconciliation` | fabrication and final output | stock input = conforming output + measured waste + inventory change + investigated residual | stock; output; waste; inventory | residual | `us-epa-fabricated-metal-products-1995` |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_identity` | reference product | Preserve drawing revision, function, material grade, mass, finish and test criteria by part family. | drawing, BOM, material certificate and acceptance record |
| `dq_temporal` | foreground data | Use a common representative period and include bath dumps, maintenance waste and rejects. | dated production, utility, purchase and waste records |
| `dq_measurement` | measured exchanges | Identify meter/scale, calibration, frequency, estimation share and conversions. | calibration, meter log and workbook |
| `dq_completeness` | inventory | Declare each conditional row recorded or not applicable; cover at least 95% by mass of purchased materials and wastes and investigate residuals. | checklist and mass reconciliation |
| `dq_geography_technology` | upstream links | Match geography, technology, material state and recycled content; document proxies without changing UUID identity. | supplier records and dataset-selection log |
| `dq_uncertainty` | allocated/calculated values | Report allocation share, variability and assumptions; test material shared burdens and pallet reuse. | allocation workbook and sensitivity |

## 9. Validation Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `validation_identity` | foreground_dataset_conformance | Confirm the product is a separately supplied dedicated part, not a complete machine or undedicated component. | `un-cpc-3-0-structure-2025` |
| `validation_reference_flow` | foreground_dataset_conformance | Confirm 1 kg net conforming output, packaging excluded, and all required qualifiers. |  |
| `validation_route_completeness` | foreground_dataset_conformance | Each conditional joining, surface-treatment and packaging row is quantified or supported as not applicable. | `us-epa-fabricated-metal-products-1995`; `ec-jrc-stm-bref-2006` |
| `validation_atomic_inventory` | foreground_dataset_conformance | Each card is one exchange with the stated property/unit and no umbrella flow. |  |
| `validation_uuid_and_units` | foreground_dataset_conformance | Populated UUIDs retain audited flow type, official name, property and unit group; unresolved rows are not silently proxied. |  |
| `validation_mass_and_allocation` | foreground_dataset_conformance | Reconcile inputs, outputs, wastes and inventory change and disclose shared allocation. | `us-epa-fabricated-metal-products-1995` |
| `validation_no_double_counting` | foreground_dataset_conformance | Direct particulate and fossil CO2 include only site releases and do not duplicate upstream emissions. |  |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | Product-specific or part-family foreground cradle-to-gate dataset normalized to finished-part mass. |
| downstream_use | `secondary_dataset`; `background_dataset` |
| allowed_use | Modeling where part identity, material, route, geography, period and packaging match the application. |
| excluded_use | Complete-machine representation; use-stage comparison without functional equivalence; unqualified substitution across materials or treatments. |
| required_metadata | PCR id; drawing revision; CPC reference; site/geography; period; net mass; material grade; make/buy and outsourced boundary; surface/test criteria; recycled-content method; packaging; upstream datasets; allocation. |
| required_quality_disclosure | Primary-data share; measurements/estimates; meter allocation; completeness and mass balance; route applicability; unresolved UUIDs; proxies; uncertainty. |
| update_trigger | Material, supplier route, technology, site/grid/fuel, treatment, acceptance, packaging, allocation or period change that materially alters inventory. |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `un-cpc-3-0-structure-2025` | Official guidance (`official_guidance`) | United Nations Statistics Division. *Central Product Classification Version 3.0 Structure*, 30 June 2025. https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Structure_30Jun2025.csv (accessed 2026-09-06). | Exact CPC 43942 title and category identity. |
| `us-epa-fabricated-metal-products-1995` | Official guidance (`official_guidance`) | United States Environmental Protection Agency. *EPA Office of Compliance Sector Notebook Project: Profile of the Fabricated Metal Products Industry*, September 1995. https://archive.epa.gov/compliance/resources/publications/assistance/sectors/web/pdf/fabmetsn.pdf (accessed 2026-09-06). | Fabrication, machining, cleaning and finishing inputs/outputs, including scrap, oils, wastewater and air releases. |
| `ec-jrc-stm-bref-2006` | Official guidance (`official_guidance`) | European Commission, Joint Research Centre. *Reference Document on Best Available Techniques for the Surface Treatment of Metals and Plastics*, August 2006. https://bureau-industrial-transformation.jrc.ec.europa.eu/sites/default/files/2019-11/stm_bref_0806.pdf (accessed 2026-09-06). | Surface-treatment boundary, chemical and energy inputs, rinsing water, wastewater and sludge. |
