---
pcr_id: pcr.metal-products-machinery-and-equipment.fabricated-metal-products-except-machinery-and-equipment.metal-goods-n-e-c
language: en-US
status: candidate
sync_with: pcr.zh-CN.md
---

# Metal goods n.e.c.

## 1. Scope and Applicability

This PCR applies to saleable fabricated metal goods that fall within the residual CPC 42999 boundary and are not more specifically classified elsewhere. Covered examples include iron or steel anchors and grapnels, grinding balls, copper-wire cloth or expanded metal, copper springs, fabricated zinc building components, base-metal brackets and hat-racks, automatic door closers, flexible base-metal tubing, base-metal sign-plates, bells and gongs, minimally worked cast, forged or stamped iron, steel or copper articles, and other articles of nickel, aluminium, lead, zinc or tin.

The PCR covers foreground operations from receipt of declared metal feedstock and auxiliaries through applicable forming, fabrication, cleaning, surface treatment, coating, finishing and release of the finished good at the factory gate. Upstream production of purchased metals, electricity, fuels, water and chemicals is represented by supplier-specific or geographically appropriate upstream datasets.

Products assigned to a more specific CPC subclass, machinery, electrical equipment, structural metal products with their own PCR, domestic metal products, hand tools, containers, fasteners, wire ropes, steel wire cloth, welding consumables, locks, safes, office articles, ornaments, sewing articles and ships' propellers are excluded. Installation, use, maintenance and end-of-life are outside the default boundary. Because CPC 42999 is heterogeneous, comparisons are valid only for the same declared product subtype, material specification, performance, finish, service condition and factory-gate boundary.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.metal-products-machinery-and-equipment.fabricated-metal-products-except-machinery-and-equipment.metal-goods-n-e-c |
| classification_refs | CPC 3.0: 42999, Metal goods n.e.c. |
| covered_products | Residual fabricated metal goods included by CPC 42999 and not assigned to a more specific product subclass |
| excluded_products | More specifically classified fabricated metal goods; machinery and electrical equipment; structural metal products with a dedicated identity; installation, use, maintenance and end-of-life services |
| representative_product | A finished, saleable fabricated metal good meeting its declared drawing, material, dimensional, mechanical, surface-finish and performance specification |
| production_route | Product-specific combination of cutting or blank preparation, forming or casting/forging, machining, joining, heat treatment, aqueous surface treatment, organic coating and finishing |
| market_state | Finished good at the manufacturing factory gate, with packaging excluded unless separately declared |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | A finished fabricated metal good within the declared residual product subtype |
| How much | 1 kg net mass of conforming finished product |
| How well | Meets the declared drawing, alloy or grade, dimensions and tolerances, mechanical performance, surface treatment, coating and acceptance specification |
| How long or cycle | One manufacturing output at the factory gate; no use-duration equivalence is asserted |
| reference_flow_link | reference_metal_good |

| Field | Value |
| --- | --- |
| Reference amount | 1 kg |
| Reference product flow | Finished metal good n.e.c. |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | product subtype; material and alloy or grade; supplied feedstock form; finished dimensions and net mass; manufacturing route; heat treatment; surface-treatment and coating specification; recycled-content claim and chain-of-custody basis when reported; production site and geography; reference period; packaging inclusion; factory-gate condition |

When constructing a foreground data package, the items listed in `Required qualifiers` must be declared in dataset metadata, process notes, reference flow comment, product description, or an equivalent data package field. Missing required qualifiers make the reference flow definition incomplete for that data package.

No exact public state-100 Tiangong product flow was confirmed for the finished residual category. The human-readable reference identity is retained and its UUID remains unresolved; generic metal, feedstock, subassembly and unspecified-parts candidates must not be substituted.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| `reference_net_mass` | reference product | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Measure accepted finished-product net mass after all included finishing; exclude pallets, returnable transport items and separately reported packaging. |
| `material_mass_basis` | metal, chemical, coating, scrap and waste rows | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Record as-received mass and separately retain composition, concentration, moisture or solids fraction needed to interpret the exchange. |
| `electricity_energy_basis` | electricity rows | Net calorific value `93a60a56-a3c8-11da-a746-0800200b9a66` | MJ | Preserve metered electrical energy; convert kWh to MJ using the exact identity 1 kWh = 3.6 MJ and disclose meter coverage and any allocation. |
| `gas_volume_basis` | natural gas and oxygen rows | Volume `93a60a56-a3c8-22da-a746-0800200c9a66` | m3 | Report metered volume at declared reference temperature and pressure; do not combine gases or convert volume without the stated reference conditions and conversion basis. |
| `water_mass_basis` | process-water row | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Use metered mass or convert measured volume with a documented density and temperature; distinguish make-up water from recirculated internal water. |
| `mass_balance_check` | forming and fabrication process | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Reconcile each declared metal input with conforming product, separately recorded scrap, retained work in progress and measured inventory change over the same period. |

## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Purchased metal feedstock and auxiliaries received at the manufacturing site with supplier, material grade, supplied form, recycled-content basis and incoming mass declared |
| starting_condition_role | Foreground factory-gate input condition; upstream production remains represented by linked datasets |
| product_classification_scope | Only the declared residual CPC 42999 product subtype; a more specific product identity takes precedence |
| recursive_input_rule | When a purchased component is itself a CPC 42999 metal good, record it as one upstream product input with its supplier dataset and do not recursively remodel its production inside the receiving foreground process |
| upstream_dataset_requirement | Use supplier-specific datasets where available; otherwise use technologically and geographically representative datasets for every purchased metal, energy carrier, water and chemical input |
| disclosure | Declare product subtype, alloy or grade, feedstock form, route steps, treatment and coating, site, reference period, upstream dataset choices, cut-offs, packaging treatment and any same-category purchased component |

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| `boundary_factory_gate` | foreground manufacturing | Include all on-site forming, fabrication, joining, heat treatment, cleaning, surface treatment, coating, finishing, rework, internal material handling, direct emissions and wastes needed to release conforming product at the factory gate. | `eu-jrc-sf-bref-2024`; `eu-jrc-stm-bref-2006`; `eu-jrc-sts-bref-2020` |
| `boundary_route_disclosure` | heterogeneous product routes | Include a conditional process only when it occurs for the declared product and report it as not applicable only with drawing, routing or production-record evidence. | `un-cpc-3-0-explanatory-notes-2025` |
| `boundary_upstream_inputs` | purchased inputs | Link every purchased metal, electricity, fuel, water and chemical input to a supplier-specific or representative upstream dataset; do not embed upstream emissions in the foreground rows. |  |
| `boundary_exclusions` | post-gate stages | Exclude installation, distribution after the factory gate, use, maintenance and end-of-life unless the study explicitly extends the boundary and reports those stages separately. |  |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| `forming_and_fabrication` | Forming and fabrication | `required` | Always; record only the material-specific input rows that occur for the declared product route | Foreground conversion of incoming metal feedstock into the finished or pre-finished good | 1 kg conforming finished product |
| `aqueous_surface_treatment` | Aqueous surface treatment | `conditional` | Include when the routing contains aqueous cleaning, pickling, electroplating, anodising or another electrolytic or chemical water-based treatment | Foreground cleaning and inorganic surface modification | Treated product mass and treated surface area |
| `organic_coating` | Solvent-based organic coating | `conditional` | Include when a solvent-based paint or coating is applied, dried or cured on site | Foreground coating, curing and emission control | Coated product mass and coated surface area |

### Process: Forming and fabrication (`forming_and_fabrication`)

#### Inputs

##### Product flows

###### Carbon-steel feedstock (`carbon_steel_input`)

Record carbon steel only for a declared iron or steel route; grade and supplied form must match incoming records.

- Selected flow: Carbon Steel `b3b18433-8fd1-4298-98f5-8af11eb64762`
- Flow property / unit: Mass / kg
- Amount rule: Measured as-received carbon-steel mass issued to the product routing
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg conforming finished product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material_inputs`
- Sources: `un-cpc-3-0-explanatory-notes-2025`

###### Copper-wire feedstock (`copper_wire_input`)

Record copper wire only for copper-wire cloth, netting, expanded-metal, spring or other declared copper-wire routes.

- Selected flow: copper wire `da2d966d-fe62-44dc-ba0f-b1cd7c7cf33e`
- Flow property / unit: Mass / kg
- Amount rule: Measured as-received copper-wire mass issued to the product routing
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg conforming finished product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material_inputs`
- Sources: `un-cpc-3-0-explanatory-notes-2025`

###### Aluminium-sheet feedstock (`aluminium_sheet_input`)

Record aluminium sheet only when it is the declared incoming form for an aluminium product route.

- Selected flow: aluminium sheet `4f197be4-7b3b-11dd-ad8b-0800200c9a66`
- Flow property / unit: Mass / kg
- Amount rule: Measured as-received aluminium-sheet mass issued to the product routing
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg conforming finished product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material_inputs`
- Sources: `un-cpc-3-0-explanatory-notes-2025`

###### Zinc-sheet feedstock (`zinc_sheet_input`)

Record zinc sheet only for fabricated zinc building components or another route whose incoming record explicitly identifies sheet.

- Selected flow: Zinc sheet
- Flow property / unit: Mass / kg
- Amount rule: Measured as-received zinc-sheet mass issued to the product routing
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg conforming finished product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material_inputs`
- Sources: `un-cpc-3-0-explanatory-notes-2025`

###### Nickel-sheet feedstock (`nickel_sheet_input`)

Record the nickel sheet form only for a declared nickel-product route; retain alloy and thickness.

- Selected flow: Plates, sheet, strip and foil, of nickel `ffa8544a-b9fb-44e1-abb5-14032f03ecf7`
- Flow property / unit: Mass / kg
- Amount rule: Measured as-received nickel-sheet mass issued to the product routing
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg conforming finished product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material_inputs`
- Sources: `un-cpc-3-0-explanatory-notes-2025`

###### Lead-sheet feedstock (`lead_sheet_input`)

Record lead sheet only when the declared product route and incoming material certificate establish that supplied form.

- Selected flow: Lead sheet
- Flow property / unit: Mass / kg
- Amount rule: Measured as-received lead-sheet mass issued to the product routing
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg conforming finished product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material_inputs`
- Sources: `un-cpc-3-0-explanatory-notes-2025`

###### Tin-sheet feedstock (`tin_sheet_input`)

Record tin sheet only when the declared product route and incoming material certificate establish that supplied form.

- Selected flow: Tin sheet
- Flow property / unit: Mass / kg
- Amount rule: Measured as-received tin-sheet mass issued to the product routing
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg conforming finished product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material_inputs`
- Sources: `un-cpc-3-0-explanatory-notes-2025`

###### Forming and fabrication electricity (`forming_electricity`)

Record metered electricity for cutting, forming, machining, joining, handling, extraction and other included fabrication equipment.

- Selected flow: Electricity `890a70b7-b677-4e2a-8a1b-7d017e0a10ae`
- Flow property / unit: Net calorific value / MJ
- Amount rule: Metered electricity allocated to the declared product routing
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg conforming finished product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_energy_inputs`
- Sources: `eu-jrc-sf-bref-2024`

###### Natural gas for direct heating (`forming_natural_gas`)

Record natural gas only when it is burned on site for stock heating, heat treatment or other included forming operations.

- Selected flow: natural gas in the gaseous state `4f19ca0e-7b3b-11dd-ad8b-0800200c9a66`
- Flow property / unit: Volume / m3
- Amount rule: Metered natural-gas volume allocated to the declared product routing at stated reference conditions
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg conforming finished product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_gas_inputs`
- Sources: `eu-jrc-sf-bref-2024`

###### Industrial oxygen for oxy-fuel operations (`forming_oxygen`)

Record oxygen only when oxy-fuel cutting, heating or another oxygen-assisted operation is in the declared routing.

- Selected flow: Industrial oxygen `bd4b0f96-2090-4806-a648-335ab20ff401`
- Flow property / unit: Volume / m3
- Amount rule: Metered oxygen volume allocated to the declared product routing at stated reference conditions
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg conforming finished product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_gas_inputs`
- Sources: `eu-jrc-sf-bref-2024`

##### Waste flows

No waste input is prescribed for the baseline route. A site using externally sourced scrap as feedstock must add that specific purchased or waste input as a separate exchange with its actual identity and treatment boundary.

##### Elementary flows

No elementary input is prescribed for the baseline route.

#### Outputs

##### Product flows

###### Conforming finished metal good (`reference_metal_good`)

Record the accepted finished output after all processes included in the declared route.

- Selected flow: Finished metal good n.e.c.
- Flow property / unit: Mass / kg
- Amount rule: Fixed reference output of 1 kg conforming finished product
- Value mode: Fixed value (`fixed_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: 1 kg reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_product_output`
- Sources: `un-cpc-3-0-explanatory-notes-2025`

##### Waste flows

###### Steel scrap sent for recycling (`steel_scrap_for_recycling`)

Record segregated steel offcuts, turnings or rejected steel parts only for the declared steel route and only when they leave for recycling.

- Selected flow: Steel scrap, for recycling `6b1343f5-929b-4a1b-8459-f741ed19ebd2`
- Flow property / unit: Mass / kg
- Amount rule: Weighed segregated steel scrap leaving the foreground boundary for recycling
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg conforming finished product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_scrap_output`
- Sources: `eu-jrc-sf-bref-2024`

##### Elementary flows

###### Fossil carbon dioxide from forming heat (`forming_fossil_co2`)

Record only direct fossil carbon dioxide released from natural gas burned inside this process; exclude upstream fuel-supply emissions.

- Selected flow: carbon dioxide (fossil) `08a91e70-3ddc-11dd-923d-0050c2490048`
- Flow property / unit: Mass / kg
- Amount rule: Facility-reported direct fossil CO2 allocated to forming and fabrication over the same reference period
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg conforming finished product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_air_emissions`
- Sources: `eu-jrc-sf-bref-2024`

### Process: Aqueous surface treatment (`aqueous_surface_treatment`)

#### Inputs

##### Product flows

###### Process water for aqueous treatment (`surface_treatment_water`)

Record fresh make-up and rinse water crossing the site boundary; exclude internally recirculated water.

- Selected flow: Process Water `94a04f7e-2d5c-41f0-b182-d54a3b373a02`
- Flow property / unit: Mass / kg
- Amount rule: Metered process-water input to included aqueous treatment lines
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg conforming finished product, with treated surface area retained
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_aqueous_inputs`
- Sources: `eu-jrc-stm-bref-2006`

###### Sodium hydroxide for alkaline treatment (`surface_treatment_sodium_hydroxide`)

Record sodium hydroxide only when used in an included alkaline cleaning, etching, stripping or pH-control step; retain supplied concentration.

- Selected flow: Sodium hydroxide `e0abcced-0611-4c24-9290-5a2c5a0c4169`
- Flow property / unit: Mass / kg
- Amount rule: As-received sodium-hydroxide mass from purchasing and batch-addition records
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg conforming finished product, with solution concentration retained
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_aqueous_inputs`
- Sources: `eu-jrc-stm-bref-2006`

###### Aqueous-treatment electricity (`surface_treatment_electricity`)

Record electricity for electrochemical reactions, pumps, extraction, heating and drying that is metered to the included treatment line.

- Selected flow: Electricity `890a70b7-b677-4e2a-8a1b-7d017e0a10ae`
- Flow property / unit: Net calorific value / MJ
- Amount rule: Metered electricity allocated to the included aqueous treatment line
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg conforming finished product, with treated surface area retained
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_energy_inputs`
- Sources: `eu-jrc-stm-bref-2006`

##### Waste flows

No waste input is prescribed for this process.

##### Elementary flows

No elementary input is prescribed for this process.

#### Outputs

##### Product flows

No separately marketable product output is prescribed; treated work remains within the foreground route and is reconciled in finished-product mass.

##### Waste flows

###### Spent alkaline treatment liquor (`spent_alkaline_liquor`)

Record spent alkaline bath solution when it leaves the foreground line for on-site or off-site treatment; retain composition and destination.

- Selected flow: Waste Alkaline Liquor `ca310225-50c8-4d41-8353-4338b41e19a1`
- Flow property / unit: Mass / kg
- Amount rule: Weighed or volume-and-density-calculated spent bath transferred to treatment
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg conforming finished product, with bath composition retained
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_aqueous_wastes`
- Sources: `eu-jrc-stm-bref-2006`

###### Metal-bearing surface-treatment wastewater (`metal_bearing_wastewater`)

Record wastewater leaving the treatment line or site boundary after declaring metal species, concentration basis, treatment state and destination.

- Selected flow: Metal-bearing surface-treatment wastewater
- Flow property / unit: Mass / kg
- Amount rule: Metered discharge mass, or measured volume converted with documented density, allocated to the included treatment route
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg conforming finished product, with treated surface area retained
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_aqueous_wastes`
- Sources: `eu-jrc-stm-bref-2006`

##### Elementary flows

No generic elementary water emission is prescribed. When treated water is released to the environment, add each measured emitted substance as its own elementary-flow exchange rather than substituting the wastewater waste flow.

### Process: Solvent-based organic coating (`organic_coating`)

#### Inputs

##### Product flows

###### Solvent-based paint (`solvent_based_paint`)

Record the as-received formulated solvent-based paint applied to the declared metal good; retain solids and volatile fractions.

- Selected flow: Paint (Solvent-based) `d8cbeec3-56d9-4b41-a5f6-6a754958182c`
- Flow property / unit: Mass / kg
- Amount rule: As-received paint mass issued to the included coating line
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg conforming finished product, with coated surface area retained
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_coating_materials`
- Sources: `eu-jrc-sts-bref-2020`

###### Coating-line electricity (`coating_electricity`)

Record electricity for application, ventilation, abatement, handling and curing equipment assigned to the coating line.

- Selected flow: Electricity `890a70b7-b677-4e2a-8a1b-7d017e0a10ae`
- Flow property / unit: Net calorific value / MJ
- Amount rule: Metered electricity allocated to the included solvent-based coating line
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg conforming finished product, with coated surface area retained
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_energy_inputs`
- Sources: `eu-jrc-sts-bref-2020`

###### Natural gas for coating cure (`coating_natural_gas`)

Record natural gas only when burned on site for drying or curing the solvent-based coating.

- Selected flow: natural gas in the gaseous state `4f19ca0e-7b3b-11dd-ad8b-0800200c9a66`
- Flow property / unit: Volume / m3
- Amount rule: Metered natural-gas volume allocated to coating drying or curing at stated reference conditions
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg conforming finished product, with coated surface area retained
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_gas_inputs`
- Sources: `eu-jrc-sts-bref-2020`

##### Waste flows

No waste input is prescribed for this process.

##### Elementary flows

No elementary input is prescribed for this process.

#### Outputs

##### Product flows

No separately marketable product output is prescribed; cured coated work remains within the foreground route and is reconciled in finished-product mass.

##### Waste flows

###### Waste paint residue (`waste_paint`)

Record unused mixed paint, overspray capture residue and paint cleanup residue that leave as one declared waste-paint stream; do not include emitted solvent mass.

- Selected flow: Waste paint `877e5a04-76c8-4c5b-ac4c-062f5beeb2bd`
- Flow property / unit: Mass / kg
- Amount rule: Weighed waste paint transferred to the declared treatment destination
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg conforming finished product, with waste composition retained
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_coating_wastes`
- Sources: `eu-jrc-sts-bref-2020`

##### Elementary flows

###### Non-methane volatile organic compounds to air (`coating_nmvoc`)

Record direct non-methane VOC released to air from coating, flash-off, drying, curing and solvent cleaning after capture and abatement; exclude upstream emissions.

- Selected flow: non-methane volatile organic compounds `08a91e70-3ddc-11dd-a302-0050c2490048`
- Flow property / unit: Mass / kg
- Amount rule: Measured stack and fugitive NMVOC or facility-approved coating mass balance over the same production period
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg conforming finished product, with coated surface area retained
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_air_emissions`
- Sources: `eu-jrc-sts-bref-2020`

###### Fossil carbon dioxide from coating cure (`coating_fossil_co2`)

Record only direct fossil carbon dioxide released from natural gas burned for drying or curing; exclude upstream fuel-supply emissions.

- Selected flow: carbon dioxide (fossil) `08a91e70-3ddc-11dd-923d-0050c2490048`
- Flow property / unit: Mass / kg
- Amount rule: Facility-reported direct fossil CO2 allocated to coating drying or curing over the same reference period
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg conforming finished product, with coated surface area retained
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_air_emissions`
- Sources: `eu-jrc-sts-bref-2020`

## 7. Allocation and Co-product Handling

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| `allocation_subdivide_first` | shared fabrication, treatment and coating operations | Avoid allocation by separately metering or engineering the product-specific routing, machine time, treatment area, batch load and material issue wherever feasible. |  |
| `allocation_physical_fallback` | unavoidable shared utilities and common operations | When subdivision is not feasible, allocate electricity, fuel, water and common consumables using the closest causal physical driver, such as machine time, batch time, treated surface area or product mass; disclose the driver and sensitivity. |  |
| `allocation_scrap_no_avoided_burden` | recoverable metal scrap | Report scrap mass and destination as a separate output. Do not credit avoided primary metal production inside the foreground inventory unless the downstream study applies and discloses a separate recycling method consistently. |  |
| `allocation_no_hidden_netting` | rework, internal recycle and wastes | Keep internal recycle loops and rework visible in gross input and energy records; do not net waste, recovered material or direct emissions against the reference product. |  |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_material_inputs` | `forming_and_fabrication` | metal feedstock | receiving, inventory-issue and material-certificate records | material identity; alloy or grade; supplied form; supplier; lot; gross issued mass; returns; opening and closing inventory | Reconcile purchasing, stores and production issue records by product routing | kg | Each receipt and issue; aggregate monthly | At least 12 representative months or the full campaign for campaign production | Every included production site and declared product route | Net issued mass = issues minus documented returns, normalized to accepted output | Material certificates, calibrated scale records and stock reconciliation |
| `cp_energy_inputs` | all applicable processes | electricity | submeter and production records | meter id; opening and closing readings; process coverage; downtime; product quantity; allocation driver | Read dedicated meters where available and reconcile with site electricity balance | kWh and MJ | Continuous or each batch; aggregate monthly | Same period as product output | Every included site and line | Convert kWh to MJ and allocate only shared meters with the declared causal driver | Meter calibration, utility invoice reconciliation and allocation check |
| `cp_gas_inputs` | `forming_and_fabrication`; `organic_coating` | natural gas and oxygen | flowmeter, cylinder, tank and batch records | gas identity; meter or container id; volume; reference temperature; reference pressure; process; batch; product quantity | Read process meters or reconcile container deliveries and inventory change | m3 | Each batch or continuous; aggregate monthly | Same period as product output | Every included combustion or oxygen-assisted operation | Allocate by measured process use; shared use requires time or heat-duty driver | Meter calibration, supplier statement and reference-condition record |
| `cp_product_output` | `forming_and_fabrication` | conforming finished product | production and quality-release records | product subtype; drawing; grade; finish; accepted mass; rejected mass; batch; release status | Weigh or calculate from verified unit mass and accepted count | kg | Each batch | Same period as all inputs and outputs | Every included site and product subtype | Sum accepted released mass only | Calibrated scale, unit-mass validation and quality release |
| `cp_scrap_output` | `forming_and_fabrication` | steel scrap | scrap-bin, weighbridge and recycler records | material family; mass; contamination; destination; recovery route; batch or period | Weigh segregated scrap at transfer and reconcile with recycler ticket | kg | Each transfer; aggregate monthly | Same period as product output | Every included steel route | Sum outgoing segregated steel scrap and exclude internal recirculation | Weighbridge ticket, recycler receipt and material balance |
| `cp_aqueous_inputs` | `aqueous_surface_treatment` | water and sodium hydroxide | water meter, purchase, bath make-up and laboratory records | water mass or volume; density; sodium-hydroxide mass; concentration; bath id; treated mass; treated area | Meter water and reconcile chemical additions with purchasing and bath logs | kg and m2 | Each batch or daily; aggregate monthly | Same period as treated output | Every included aqueous-treatment line | Sum external make-up only and normalize to finished mass while retaining treated area | Meter calibration, purchase records, bath log and concentration test |
| `cp_aqueous_wastes` | `aqueous_surface_treatment` | spent liquor and metal-bearing wastewater | tank, discharge, manifest and laboratory records | stream identity; mass or volume; density; metal species; concentration; pH; treatment state; destination | Meter transfers or discharges and sample by the site monitoring plan | kg, m3 and concentration units | Each transfer or monitoring interval; aggregate monthly | Same period as treated output | Every included aqueous-treatment line and discharge point | Keep spent bath and wastewater separate; convert volume only with documented density | Waste manifest, meter calibration, chain-of-custody sample and laboratory result |
| `cp_coating_materials` | `organic_coating` | solvent-based paint | purchase, issue, return and formulation records | product name; batch; issued mass; returned mass; solids; volatile fraction; coated mass; coated area | Reconcile stores issue and return records with coating batches | kg and m2 | Each batch; aggregate monthly | Same period as coated output | Every included coating line | Net paint input = issued minus documented uncontaminated return | Supplier technical data, scale calibration and batch reconciliation |
| `cp_coating_wastes` | `organic_coating` | waste paint | waste-container and manifest records | waste identity; mass; composition; hazardous status; destination; batch or period | Weigh sealed waste containers at transfer | kg | Each transfer; aggregate monthly | Same period as coated output | Every included coating line | Sum waste paint separately from emitted solvent and reusable returned paint | Scale record, waste manifest and treatment receipt |
| `cp_air_emissions` | `forming_and_fabrication`; `organic_coating` | direct fossil CO2 and NMVOC | stack tests, continuous monitoring, approved emission reports and coating mass balance | pollutant; source; measured concentration and flow or approved mass-balance fields; capture; abatement; operating hours; product quantity | Use regulatory or quality-assured site method and reconcile source coverage | kg | Per monitoring plan; aggregate to production period | Same period as related fuel or coating use and product output | Every included emission point plus documented fugitive sources | Sum direct on-site releases only and allocate shared sources with declared driver | Method, calibration, laboratory accreditation, mass-balance closure and emission report |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_reference_normalization` | every inventory row | Normalized amount = exchange amount attributable to the product route divided by conforming finished-product mass for the same period | attributable exchange amount; accepted output mass | exchange per 1 kg reference product |  |
| `calc_material_balance` | each declared metal route | Closure = metal inputs minus conforming output minus separately recorded scrap minus inventory increase; investigate sign and magnitude before release | net issued metal; accepted output; scrap; work-in-progress change | metal-balance closure and explanation |  |
| `calc_volume_to_mass` | water and liquid wastes when only volume is measured | Mass = measured volume multiplied by documented density at the stated temperature; do not assume density when composition makes it material | volume; density; temperature; composition | kg exchange |  |
| `calc_kwh_to_mj` | electricity | Electrical energy in MJ = metered kWh multiplied by 3.6 | metered kWh | MJ electricity |  |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_identity` | product and material identity | Retain product subtype, drawing or specification, alloy or grade, supplied form, treatment and coating for every represented route. | Released drawing, bill of materials, material certificate and route card |
| `dq_temporal` | all foreground exchanges | Use the same representative production period for inputs, outputs, wastes and emissions; justify periods shorter than 12 months or campaign coverage. | Period reconciliation and representativeness note |
| `dq_completeness` | process and meter coverage | Demonstrate that every included site, line, conditional process and material family is represented, and explain exclusions and data gaps. | Process-flow diagram, meter map, waste map and completeness check |
| `dq_measurement` | measured quantities | Use calibrated instruments or reconciled commercial records and retain conversions, reference conditions, detection limits and allocation drivers. | Calibration, invoice reconciliation, laboratory QA and calculation record |
| `dq_mass_balance` | metal routes | Resolve material-balance gaps before dataset release; do not hide rework, work in progress or internal recycle by netting. | Signed balance and variance investigation |
| `dq_upstream` | linked datasets | Match upstream metal form, alloy or grade, production technology, recycled-content basis, geography and electricity or fuel supply as closely as available; disclose proxies. | Supplier dataset, selection rationale and proxy disclosure |

## 9. Validation Rules

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| `validate_identity_and_reference` | reference flow | Fail if product subtype, material or grade, supplied form, route, finish, net finished mass, site, period or factory-gate condition is missing, or if a generic Tiangong product UUID is substituted for the unresolved reference product. | `un-cpc-3-0-explanatory-notes-2025` |
| `validate_route_coverage` | process map | Fail if an operation shown in route cards or production records is omitted without evidence, or if a conditional process is included without its process-specific rows. | `eu-jrc-sf-bref-2024`; `eu-jrc-stm-bref-2006`; `eu-jrc-sts-bref-2020` |
| `validate_atomic_exchanges` | inventory | Fail if multiple metals, fuels, chemicals, wastes or emissions are combined into one selected flow, or if wastewater is substituted for its emitted elementary substances. |  |
| `validate_uuid_semantics` | UUID-bearing rows | Fail if public state, English or Chinese base name, flow type, classification, property or unit group differs from the selected exchange; unresolved rows must remain UUID-empty. |  |
| `validate_period_and_balance` | normalized amounts | Fail if exchange periods do not match accepted output, electricity conversion differs from 3.6 MJ/kWh, gas reference conditions are absent, or metal-balance variance lacks investigation. |  |
| `validate_no_range_substitution` | important flows | Fail if a provisional or external range is used as the foreground result. This candidate PCR has no adopted external ranges; use collected values and retain the manifest evidence needs for later review. |  |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | Foreground factory-gate production dataset for one declared CPC 42999 product subtype and route |
| downstream_use | `secondary_dataset`; `background_dataset` after methodology review and linkage of representative upstream datasets |
| allowed_use | Product-footprint and lifecycle models requiring a mass-normalized factory-gate dataset for the same product subtype, material, performance, finish, route, geography and period |
| excluded_use | Cross-subtype comparison; functional equivalence across unlike metal goods; substitution for a more specific PCR; use-phase or end-of-life claims; generic global average without representativeness review |
| required_metadata | canonical PCR id; product subtype; drawing/specification; alloy or grade; supplied form; net mass; process route; treatment and coating; site and geography; reference period; upstream datasets; allocation; cut-offs; packaging treatment; unresolved identities |
| required_quality_disclosure | measured versus allocated shares; meter and scale coverage; material-balance closure; treated/coated surface area; gas reference conditions; chemical concentrations; waste destinations; emission method; data gaps; proxies and uncertainty |
| update_trigger | Change in product subtype, material or grade, supplied form, mass, route, treatment/coating, site, supplier technology, energy supply, allocation method, emission control, reference period or resolution of an unresolved Tiangong UUID |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `un-cpc-3-0-explanatory-notes-2025` | official_guidance | United Nations Statistics Division, CPC Ver. 3.0 Explanatory Notes, updated 30 June 2025, https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Exp_Notes_30Jun2025.pdf (retrieved 2026-09-05) | Official residual product boundary, included product examples and exclusions by classification precedence |
| `un-cpc-1-1-chinese-2008` | official_guidance | United Nations Statistics Division, 产品总分类版本1.1, https://unstats.un.org/unsd/publication/SeriesM/M_77ver1_1c.pdf (retrieved 2026-09-05) | Professional Chinese terminology check for the product category title and included examples |
| `eu-jrc-sf-bref-2024` | official_guidance | European Commission Joint Research Centre, Best Available Techniques Reference Document for the Smitheries and Foundries Industry, 2024, https://bureau-industrial-transformation.jrc.ec.europa.eu/sites/default/files/2024-12/SF_BREF_2024-bref.pdf (retrieved 2026-09-05) | Conditional heating, forging, machining, cooling, finishing, heat-treatment and foundry process decomposition |
| `eu-jrc-stm-bref-2006` | official_guidance | European Commission, Reference Document on Best Available Techniques for the Surface Treatment of Metals and Plastics, August 2006, https://bureau-industrial-transformation.jrc.ec.europa.eu/sites/default/files/2019-11/stm_bref_0806.pdf (retrieved 2026-09-05) | Aqueous surface-treatment boundary and water, energy, chemicals, wastewater, spent solution and emission collection needs |
| `eu-jrc-sts-bref-2020` | official_guidance | European Commission Joint Research Centre, Surface Treatment Using Organic Solvents including Wood and Wood Products Preservation with Chemicals, adopted December 2020, https://bureau-industrial-transformation.jrc.ec.europa.eu/reference/surface-treatment-using-organic-solvents-including-wood-and-wood-products-preservation (retrieved 2026-09-05) | Conditional solvent-based painting, coating, degreasing, curing, waste and direct-air-emission inventory needs |
