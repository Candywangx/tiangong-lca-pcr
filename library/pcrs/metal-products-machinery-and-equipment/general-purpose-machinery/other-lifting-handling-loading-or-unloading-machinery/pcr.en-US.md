---
schema_version: 1
pcr_id: pcr.metal-products-machinery-and-equipment.general-purpose-machinery.other-lifting-handling-loading-or-unloading-machinery
language: en-US
status: candidate
content_maturity: authored_methodology
translation_status: canonical
sync_with: pcr.zh-CN.md
---

# Other lifting, handling, loading or unloading machinery

## 1. Scope and Applicability

This PCR governs factory-gate foreground data packages for complete non-robot lifting, handling, loading or unloading machinery that is classified in CPC Version 3.0 subclass 43562. The official CPC explanatory note links the subclass to HS 2022 headings or subheadings 8428.10, .20, .31, .32, .33, .39, .40, .60 and .90. The dataset owner shall apply the official classification rules and document why the declared product belongs to the residual subclass.

The PCR covers product-specific bill-of-material attribution, in-house material preparation and fabrication, surface finishing, final assembly and testing, packaging, and release at the factory gate. Purchased materials, components, fuels, electricity, and water enter as product flows with supplier datasets appropriate to their delivery boundary. Distribution after the factory gate, installation, operation, maintenance, replacement, decommissioning, and end of life are excluded from this foreground manufacturing package and require explicit downstream scenarios.

Industrial robots, pulley tackle and hoists, winches, capstans, jacks, derricks, cranes, crane-fitted vehicles, fork-lift and other works trucks, lifts, skip hoists, escalators, moving walkways, continuous-action elevators and conveyors, separately supplied parts, and separately supplied buckets, shovels, grabs or grips are outside this PCR whenever the official classification assigns them to another subclass. Product safety or regulatory conformity is not established by this PCR.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.metal-products-machinery-and-equipment.general-purpose-machinery.other-lifting-handling-loading-or-unloading-machinery |
| classification_refs | CPC:3.0:43562 — Other lifting, handling, loading or unloading machinery; official explanatory-note HS scope 8428.10, .20, .31, .32, .33, .39, .40, .60 and .90 |
| covered_products | Complete lifting, handling, loading or unloading machinery assigned to CPC 43562 after applying official residual-category rules |
| excluded_products | Industrial robots; machinery assigned to CPC 43510, 43520, 43530, 43540 or 43550; separately supplied parts under CPC 43570; separately supplied buckets, shovels, grabs and grips under CPC 43580; installation, repair and handling services |
| representative_product | A complete factory-tested machine in its released factory-gate configuration, normalized to 1,000 kg net finished-machine mass |
| production_route | Product-specific purchased bill of materials; conditional in-house cutting, forming, welding and machining; conditional wet or powder coating; required assembly and functional testing; packaging and factory-gate release |
| market_state | New, complete, factory-tested machinery at the manufacturer's gate; packaging status and included accessories declared |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Factory-gate provision of complete CPC 43562 machinery with its declared lifting, handling, loading or unloading function |
| How much | 1,000 kg net mass of finished machinery |
| How well | Conforms to the declared model specification, rated load or throughput, lift or travel parameters, duty class, drive and control architecture, test acceptance criteria, and included accessories |
| How long or cycle | One accepted factory-gate production output; use-stage service life and operating cycles are not represented and must be declared in a downstream use scenario |
| reference_flow_link | `reference_product_output` |

| Field | Value |
| --- | --- |
| Reference amount | 1,000 kg |
| Reference product flow | Other lifting, handling, loading or unloading machinery |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | product designation and model; documented CPC 43562 classification rationale; net finished-machine mass; rated load or throughput; lift height, travel or handling envelope as applicable; duty class or declared operating cycle; drive type and energy carrier; control architecture; principal load-bearing material grades; factory configuration; included accessories; packaging status; manufacturing geography and reference period; purchased-input delivery boundaries; allocation method; excluded downstream stages |

When constructing a foreground data package, the items listed in `Required qualifiers` must be declared in dataset metadata, process notes, reference flow comment, product description, or an equivalent data package field. Missing required qualifiers make the reference flow definition incomplete for that data package.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| `reference_mass` | reference product and mass-normalized inventory | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Determine net finished-machine mass from a calibrated scale, verified shipping record net of separately reported packaging, or a reconciled product-specific bill of materials. Normalize attributable amounts to exactly 1,000 kg net finished machinery. |
| `electricity_energy` | purchased electricity | Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` | MJ | Preserve metered electricity by process. When records are in kWh, convert using the exact identity 1 kWh = 3.6 MJ and retain the original reading and conversion. |
| `gas_volume` | gaseous natural gas | Volume `93a60a56-a3c8-22da-a746-0800200c9a66` | m3 | Report gas volume at declared reference temperature and pressure. If an energy or emission calculation is performed, retain the meter volume, reference conditions, net calorific value, carbon factor, fossil fraction and oxidation factor used. |
| `water_mass` | process water and wastewater | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Use measured mass or convert a metered volume using a documented density and reference conditions; do not equate input water and wastewater without accounting for retained water, evaporation and other outlets. |
| `packaging_mass` | EURO wooden pallet and corrugated cardboard | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Record only packaging released with the reference product. State whether pallets are new, reused, returned or excluded, and do not divide reusable packaging without a documented use count. |

## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Purchased materials, components, fuels, electricity and water at the boundary declared by each supplier dataset, ready for the manufacturer's receiving and production processes |
| starting_condition_role | Explicit boundary anchor separating upstream supplier systems from the manufacturer's foreground operations |
| product_classification_scope | Complete machinery assigned to CPC 3.0 subclass 43562; not industrial robots or products, parts or services assigned to a more specific category |
| recursive_input_rule | A purchased complete CPC 43562 machine incorporated into another machine remains a separate input with its own upstream dataset; do not merge it into the reference output or recursively apply this foreground inventory to itself |
| upstream_dataset_requirement | Every purchased atomic material, component, energy carrier, water input and packaging article requires a geographically, technologically and temporally appropriate upstream dataset whose delivery boundary is stated |
| disclosure | Declare factory sites, reference period, product model or product-family composition, BOM coverage, make-or-buy boundary, included production routes, packaging status, allocation, data gaps, proxies, and all excluded downstream stages |

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `boundary_product_specific` | bill of materials and manufacturing activity | Use a product-specific bill of materials and product-attributable company records. Include every known material and energy input, waste and direct emission within the declared foreground boundary as a separate atomic exchange. | `eu-pef-method-2021` |
| `boundary_factory_gate` | foreground process coverage | Include receiving and attribution, applicable in-house fabrication and surface finishing, final assembly and testing, packaging, and release through the manufacturer's factory gate. | `eu-pef-method-2021` |
| `boundary_supplier_link` | purchased inputs | Link each purchased input to an upstream dataset at its declared delivery boundary. Avoid double counting supplier production or transport already included in that dataset. | `eu-pef-method-2021` |
| `boundary_downstream_exclusion` | post-factory-gate stages | Exclude distribution after release, installation, operation, maintenance, replacements, decommissioning and end of life from this foreground package; add them only in an explicitly scoped downstream lifecycle model. |  |
| `boundary_no_cutoff_by_list` | inventory completeness | This pattern list is a minimum. Expand the instantiated dataset with one atomic row for every additional product-specific BOM item, process consumable, waste and direct elementary emission; do not treat absence from this generic list as a cut-off rule. | `eu-pef-method-2021` |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| `material_preparation` | Material receipt and preparation | `required` | Always include product-specific BOM receipt, inspection and attribution; individual preparation operations are included when performed in-house | Foreground BOM control and material preparation | Attributable purchased input per 1,000 kg accepted net finished machinery |
| `fabrication` | Structural fabrication and machining | `conditional` | Include when cutting, forming, welding, machining or aqueous fabrication support is performed within the reporting organization | Foreground conversion of structural materials | Attributable process activity per 1,000 kg accepted net finished machinery |
| `surface_finishing` | Surface preparation and coating | `conditional` | Include each wet-coating or powder-coating route actually performed in-house; omit only with documented purchased-finished or uncoated configuration | Foreground corrosion protection and finish | Attributable process activity per 1,000 kg accepted net finished machinery |
| `assembly_testing` | Final assembly and functional testing | `required` | Always include assembly and acceptance testing; diesel testing applies only to diesel-fuelled or diesel-tested configurations | Foreground assembly and acceptance | Attributable process activity per 1,000 kg accepted net finished machinery |
| `release_dispatch` | Packaging, release and dispatch gate | `required` | Always include product release; include each packaging article only when it leaves the factory with the product | Foreground packaging and reference-product release | 1,000 kg net accepted finished machinery |

### Process: Material receipt and preparation (`material_preparation`)

#### Inputs

##### Product flows

###### Carbon-steel plate for load-bearing fabrication (`carbon_steel_plate`)

Record delivered carbon-steel plate only when it is an actual product-specific BOM line crossing the foreground boundary. Grade, thickness, surface condition, recycled-content claim and supplier delivery boundary remain required qualifiers.

- Selected flow: Carbon steel plate
- Flow property / unit: Mass / kg
- Amount rule: Net accepted mass attributable to the reference product from purchase, receipt and inventory-change records
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1,000 kg accepted net finished machinery
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_bom_receipts`
- Sources: `eu-pef-method-2021`

##### Waste flows

##### Elementary flows

### Process: Structural fabrication and machining (`fabrication`)

#### Inputs

##### Product flows

###### Purchased electricity for fabrication (`fabrication_electricity`)

Record metered electricity attributable to cutting, forming, welding, machining and local extraction when these operations are in scope.

- Selected flow: Electricity `67b723a9-6f63-4802-adca-b52ce7967d47`
- Flow property / unit: Net calorific value / MJ
- Amount rule: Submetered consumption or documented allocation of facility electricity to fabrication orders
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg accepted net finished machinery
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_fabrication_records`
- Sources: `eu-pef-method-2021`

###### Industrial oxygen for thermal cutting (`cutting_oxygen`)

Record industrial oxygen only when oxygen-assisted thermal cutting or another documented fabrication operation consumes it.

- Selected flow: Industrial oxygen `bd4b0f96-2090-4806-a648-335ab20ff401`
- Flow property / unit: Volume / m3
- Amount rule: Supplier-meter or cylinder-balance volume attributable to in-scope production orders at declared reference conditions
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1,000 kg accepted net finished machinery
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_fabrication_records`
- Sources: `eu-pef-method-2021`

###### Process water for fabrication (`fabrication_process_water`)

Record process water used in machining, cleaning or other fabrication operations only when it crosses the process boundary.

- Selected flow: Process Water `94a04f7e-2d5c-41f0-b182-d54a3b373a02`
- Flow property / unit: Mass / kg
- Amount rule: Metered or tank-balance water attributable to in-scope fabrication orders
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg accepted net finished machinery
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_fabrication_records`
- Sources: `eu-pef-method-2021`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

##### Waste flows

###### Post-industrial steel scrap from fabrication (`post_industrial_steel_scrap`)

Record segregated ferrous offcuts, chips and rejected steel leaving fabrication as post-industrial waste. Treatment route and any sale as a secondary material are disclosed separately from flow identity.

- Selected flow: Post-industrial steel scrap `c143745d-be4f-4d8f-b403-2dcbfe685349`
- Flow property / unit: Mass / kg
- Amount rule: Weighed outgoing scrap plus verified inventory change attributable to in-scope production orders
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg accepted net finished machinery
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_fabrication_records`
- Sources: `eu-pef-method-2021`

##### Elementary flows

### Process: Surface preparation and coating (`surface_finishing`)

#### Inputs

##### Product flows

###### Industrial maintenance coating for the wet-coating route (`industrial_maintenance_coating`)

Record this atomic coating only when a wet industrial-maintenance coating is applied. Formulation, solids content, mixing losses, supplier and application method remain foreground qualifiers.

- Selected flow: Industrial Maintenance Coatings `46c99c8a-0ae9-4be8-972f-a2b9ab3baaf5`
- Flow property / unit: Mass / kg
- Amount rule: Issued coating mass minus sealed return and verified inventory change attributable to the reference product
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1,000 kg accepted net finished machinery
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_coating_records`
- Sources: `eu-pef-method-2021`

###### Powder coating for the powder-coating route (`powder_coating`)

Record powder coating only when the product uses that route. Powder recovery and recirculation remain inside the process; only net fresh input crosses the boundary.

- Selected flow: Powder Coating `0c581697-0eed-4b86-a070-b94966eb7344`
- Flow property / unit: Mass / kg
- Amount rule: Fresh powder issued minus sealed return and verified inventory change attributable to the reference product
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1,000 kg accepted net finished machinery
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_coating_records`
- Sources: `eu-pef-method-2021`

###### Purchased electricity for surface finishing (`coating_electricity`)

Record metered electricity for preparation, ventilation, pumping, application, curing and pollution control attributable to the in-scope coating route.

- Selected flow: Electricity `67b723a9-6f63-4802-adca-b52ce7967d47`
- Flow property / unit: Net calorific value / MJ
- Amount rule: Submetered consumption or documented allocation to surface-finishing orders
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg accepted net finished machinery
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_coating_records`
- Sources: `eu-pef-method-2021`

###### Gaseous natural gas for coating ovens (`coating_natural_gas`)

Record gaseous natural gas only when directly consumed for drying, curing or thermal surface-treatment equipment.

- Selected flow: natural gas in the gaseous state `4f19ca0e-7b3b-11dd-ad8b-0800200c9a66`
- Flow property / unit: Volume / m3
- Amount rule: Metered volume attributable to surface finishing at declared reference conditions
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1,000 kg accepted net finished machinery
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_coating_records`
- Sources: `eu-pef-method-2021`

###### Process water for surface preparation (`coating_process_water`)

Record process water used for washing, rinsing or aqueous surface preparation when that route is present.

- Selected flow: Process Water `94a04f7e-2d5c-41f0-b182-d54a3b373a02`
- Flow property / unit: Mass / kg
- Amount rule: Metered or tank-balance water attributable to surface preparation
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg accepted net finished machinery
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_coating_records`
- Sources: `eu-pef-method-2021`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

##### Waste flows

###### Wastewater from surface preparation (`coating_wastewater`)

Record wastewater leaving aqueous preparation or coating support as a single wastewater waste flow. Declare composition, on-site pretreatment, recipient system and destination.

- Selected flow: Wastewater `d2d44ce1-c0f4-461d-9413-f4b33e0d200f`
- Flow property / unit: Mass / kg
- Amount rule: Measured discharge mass or metered volume converted using documented density, attributable to surface finishing
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg accepted net finished machinery
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_coating_records`
- Sources: `eu-pef-method-2021`

##### Elementary flows

###### Non-methane volatile organic compounds released to air (`coating_nmvoc`)

Record direct NMVOC released after capture and treatment from the wet-coating route. Do not use this row for methane or for solvent retained in product or transferred as waste.

- Selected flow: non-methane volatile organic compounds `08a91e70-3ddc-11dd-a302-0050c2490048`
- Flow property / unit: Mass / kg
- Amount rule: Measured released NMVOC mass attributable to the wet-coating route, with monitoring basis and treatment operating state retained
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg accepted net finished machinery
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_coating_records`
- Sources: `eu-pef-method-2021`

###### Fossil carbon dioxide from coating heat (`coating_fossil_co2`)

Record only direct fossil carbon dioxide from on-site natural-gas combustion for the coating route. Upstream fuel-supply emissions remain in the natural-gas supplier dataset.

- Selected flow: carbon dioxide (fossil) `08a91e70-3ddc-11dd-923d-0050c2490048`
- Flow property / unit: Mass / kg
- Amount rule: Direct measured emission or value calculated by `calc_direct_fossil_co2` from collected fuel and site factor records
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg accepted net finished machinery
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_coating_records`
- Sources: `eu-pef-method-2021`

### Process: Final assembly and functional testing (`assembly_testing`)

#### Inputs

##### Product flows

###### Purchased electricity for assembly and testing (`assembly_electricity`)

Record electricity for mechanical, electrical and hydraulic assembly, controls configuration, functional testing and acceptance checks.

- Selected flow: Electricity `67b723a9-6f63-4802-adca-b52ce7967d47`
- Flow property / unit: Net calorific value / MJ
- Amount rule: Submetered consumption or documented allocation to assembly and accepted test orders
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg accepted net finished machinery
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_assembly_test_records`
- Sources: `eu-pef-method-2021`

###### Diesel fuel consumed in functional testing (`test_diesel`)

Record diesel fuel only for machines or test rigs that combust diesel during in-scope acceptance testing. Grade and biogenic fraction remain foreground qualifiers.

- Selected flow: Diesel fuel `9d258d75-6792-4f1c-9856-81602ed8f816`
- Flow property / unit: Mass / kg
- Amount rule: Tank, issue or calibrated test-bench fuel balance attributable to accepted product tests
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1,000 kg accepted net finished machinery
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_assembly_test_records`
- Sources: `eu-pef-method-2021`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

##### Waste flows

##### Elementary flows

###### Fossil carbon dioxide from diesel testing (`test_fossil_co2`)

Record only direct fossil carbon dioxide from in-scope diesel combustion. Upstream diesel-supply emissions remain in the diesel supplier dataset.

- Selected flow: carbon dioxide (fossil) `08a91e70-3ddc-11dd-923d-0050c2490048`
- Flow property / unit: Mass / kg
- Amount rule: Direct measured emission or value calculated by `calc_direct_fossil_co2` from collected diesel and site factor records
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1,000 kg accepted net finished machinery
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_assembly_test_records`
- Sources: `eu-pef-method-2021`

### Process: Packaging, release and dispatch gate (`release_dispatch`)

#### Inputs

##### Product flows

###### EURO wooden pallet released with the machine (`euro_wooden_pallet`)

Record EURO wooden pallets only when they leave the factory with the reference product. Other pallet designs require their own atomic flow row.

- Selected flow: Wooden pallet (EURO) `96b2b9ac-cfb6-46bf-8ad1-c056e338950a`
- Flow property / unit: Mass / kg
- Amount rule: Net pallet mass released with accepted reference products, adjusted only by a documented reuse or return rule
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1,000 kg accepted net finished machinery
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_release_records`
- Sources: `eu-pef-method-2021`

###### Corrugated cardboard released with the machine (`corrugated_cardboard`)

Record corrugated cardboard used for protectors, cartons or separators only when it leaves the factory with the reference product.

- Selected flow: Corrugated cardboard `8bde297e-98df-463f-bcb4-0db52bf6e0b5`
- Flow property / unit: Mass / kg
- Amount rule: Issued corrugated-cardboard mass minus unused return and inventory change attributable to released products
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1,000 kg accepted net finished machinery
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_release_records`
- Sources: `eu-pef-method-2021`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Accepted factory-gate machinery (`reference_product_output`)

Record the net mass of complete, accepted CPC 43562 machinery released at the factory gate. Packaging mass is excluded from net machine mass and recorded in its own input rows when released with the product.

- Selected flow: Other lifting, handling, loading or unloading machinery
- Flow property / unit: Mass / kg
- Amount rule: Accepted net finished-machine mass used as the normalization denominator
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: exactly 1,000 kg accepted net finished machinery
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_release_records`
- Sources: `un-cpc-3-0-structure-2025`; `un-cpc-3-0-explanatory-notes-2025`; `eu-pef-method-2021`

##### Waste flows

##### Elementary flows

## 7. Allocation and Co-product Handling

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `allocation_avoid` | multi-product facilities and shared processes | First avoid allocation by product-specific BOMs, production orders, submetering, separate waste weighing, or subdivision of unit processes. | `eu-pef-method-2021` |
| `allocation_physical` | shared burdens that cannot be subdivided | Allocate using a documented causal physical driver such as measured machine hours, process time, mass processed or metered energy. Demonstrate why the driver represents the shared input or emission. | `eu-pef-method-2021` |
| `allocation_other_relationship` | residual multifunctional burdens | Use another relationship, including economic value, only after documenting why subdivision, system expansion and a relevant physical relationship are not feasible. Record prices, reference period, calculation and sensitivity. | `eu-pef-method-2021` |
| `allocation_scrap` | steel scrap and other recoverable outputs | Report the gross waste flow and treatment destination. Do not subtract avoided primary production within the foreground process; any recycling credit or substitution belongs to an explicitly declared downstream modelling convention. | `eu-pef-method-2021` |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_bom_receipts` | `material_preparation` | product-specific material and component inputs | purchase order, BOM, receipt and inventory record | item_id; material_or_component_name; grade_or_specification; supplier; delivery_boundary; received_mass_kg; rejected_mass_kg; opening_stock_kg; closing_stock_kg; production_order | Reconcile engineering BOM with procurement, receiving and stock records; weigh material where records do not provide verified mass | kg | each receipt and production order | representative continuous 12-month period or complete declared campaign | every factory contributing to the declared product | Sum accepted attributable input and inventory change by atomic flow; normalize with `calc_reference_normalization` | approved BOM revision; supplier document; calibrated scale record; stock reconciliation; exception log |
| `cp_fabrication_records` | `fabrication` | fabrication electricity, oxygen, process water and steel scrap | submeter, cylinder or bulk-gas record, water meter, production order and scrap ticket | order_id; operation; electricity_kWh; oxygen_m3; oxygen_reference_conditions; water_kg_or_m3; water_density; scrap_kg; meter_period; allocation_driver | Read submeters where available; otherwise reconcile facility meter and documented physical allocation driver; weigh outgoing steel scrap | MJ; m3; kg | each production order with at least monthly meter reconciliation | same reference period as product output | every in-scope fabrication site and outsourced operation whose burden is not in a supplier dataset | Attribute by order or approved allocation driver; convert electricity and water under section 4; normalize with `calc_reference_normalization` | calibration records; bills; meter logs; scrap weigh tickets; order routing; allocation worksheet |
| `cp_coating_records` | `surface_finishing` | coating materials, energy, water, wastewater and direct air emissions | batch issue, meter, wastewater record and emission monitoring record | order_id; coating_route; wet_coating_kg; powder_coating_kg; returned_material_kg; electricity_kWh; natural_gas_m3; gas_reference_conditions; water_kg_or_m3; wastewater_kg_or_m3; nmvoc_kg; fossil_co2_kg; emission_method; treatment_state | Reconcile batch issues and returns; read process meters; measure wastewater; use direct emission monitoring or documented site calculation inputs | kg; MJ; m3 | each coating batch with at least monthly meter and emission reconciliation | same reference period as product output and representative of treatment operation | every in-scope preparation, coating, curing and pollution-control line | Keep wet and powder routes separate; attribute by order, area or documented process driver; normalize with `calc_reference_normalization` | batch sheets; safety or formulation record; meter calibration; discharge record; monitoring report; treatment operating log |
| `cp_assembly_test_records` | `assembly_testing` | assembly electricity, test diesel and direct fossil CO2 | production order, submeter, fuel issue and test record | order_id; model; accepted_status; electricity_kWh; diesel_kg; diesel_fossil_fraction; test_hours; measured_co2_kg; emission_factor; factor_unit; oxidation_factor | Read test-bench and area meters; reconcile fuel issue and return; retain direct monitoring or site-specific factor evidence | kg; MJ | each assembly and acceptance-test order | same reference period as product output | every in-scope assembly and test site | Include accepted and rejected test activity attributable to released products; normalize with `calc_reference_normalization` | accepted test certificate; meter calibration; fuel log; factor source; rejection and rework record |
| `cp_release_records` | `release_dispatch` | released packaging and net reference-product output | packing list, scale record and release record | order_id; product_model; cpc_rationale; accepted_units; net_machine_mass_kg; pallet_type; pallet_mass_kg; pallet_reuse_status; corrugated_cardboard_kg; packaging_status; release_date | Weigh or reconcile verified shipping and BOM mass; distinguish net machine mass from packaging and reusable transport fixtures | kg | each released order | same reference period as manufacturing records | every dispatch gate in the declared dataset | Sum accepted net machine mass and attributable packaging by atomic flow; normalize with `calc_reference_normalization` | calibrated scale certificate; packing list; acceptance release; product specification; classification review |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_reference_normalization` | every attributable inventory row | normalized amount = attributable amount × 1,000 / accepted net finished-machine mass; use consistent kg mass and the same product population in numerator and denominator | attributable row amount; accepted net finished-machine mass in kg | row amount per 1,000 kg reference product | `eu-pef-method-2021` |
| `calc_electricity_conversion` | electricity records in kWh | electricity_MJ = electricity_kWh × 3.6; retain the original meter unit and value | electricity_kWh | electricity_MJ |  |
| `calc_direct_fossil_co2` | direct natural-gas or diesel combustion | Use direct measured fossil CO2 where available; otherwise multiply collected fuel quantity by the documented site factor, fossil fraction and oxidation factor with unit-consistent conversions. Do not include upstream fuel-supply emissions in this direct row. | fuel quantity; reference conditions or density; emission factor and unit; fossil fraction; oxidation factor | kg fossil CO2 | `eu-pef-method-2021` |
| `calc_mass_reconciliation` | each product population | Reconcile purchased and opening-stock mass against closing stock, accepted product, waste, measured emissions and documented inventory changes. Investigate and disclose unexplained imbalance; do not force balance by assigning it to an umbrella flow. | atomic input masses; stock changes; product mass; atomic waste and emission masses | mass-balance check and discrepancy disclosure | `eu-pef-method-2021` |
| `calc_shared_process_allocation` | shared manufacturing records | Apply the ordered allocation rules in section 7 and retain the unallocated total, driver, denominator, allocated result and rationale | shared total; product-attributable driver; total driver; selected hierarchy step | allocated product amount | `eu-pef-method-2021` |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_identity` | product and every inventory row | Confirm product classification, model, state, flow type, property and unit. Expand every product-specific BOM or waste item as one atomic flow and preserve unresolved UUIDs rather than using a proxy. | classification review; approved BOM; UUID direct-read audit; unresolved-flow register |
| `dq_technology` | manufacturing routes | Records shall represent the declared cutting, joining, coating, assembly and test technologies; separate wet and powder coating and other materially different routes. | routing, batch and equipment records; technology coverage statement |
| `dq_geography` | sites and supplier links | Identify every factory and the geography and delivery boundary of material, energy, water and waste-treatment datasets. | site list; supplier dataset metadata; dispatch and waste-transfer records |
| `dq_time` | foreground reference period | Use a continuous representative 12-month period or a complete declared campaign; align numerator and product-output denominator and explain shutdowns, ramp-up, abnormal rework or missing periods. | dated meters, orders, invoices, stock records and coverage calculation |
| `dq_precision` | measured and calculated amounts | Retain calibration, meter resolution, conversion factors, allocation drivers and uncertainty or data-gap notes for significant rows. | calibration certificates; calculation workbook; factor source; uncertainty statement |
| `dq_completeness` | process and exchange coverage | Reconcile BOM, energy, water, waste and direct-emission records. Report coverage and unresolved items; do not use this generic pattern list as permission to omit product-specific exchanges. | completeness matrix; mass and energy reconciliation; exception register |

## 9. Validation Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `validate_identity_scope` | reference product | Confirm the product is complete CPC 43562 machinery and not an industrial robot, a product assigned to another specific lifting-equipment subclass, a separately supplied part, or a service. | `un-cpc-3-0-structure-2025`; `un-cpc-3-0-explanatory-notes-2025` |
| `validate_reference_qualifiers` | reference flow | Reject a data package that omits model, CPC rationale, net mass, rated function, operating or duty qualifier, drive, principal materials, factory configuration, packaging status, geography, period, boundary or allocation disclosure. | `un-cpc-3-0-explanatory-notes-2025` |
| `validate_reference_mass` | normalization | Confirm accepted net finished-machine mass equals the reference denominator and excludes separately reported packaging; all normalized rows use the same accepted product population. | `eu-pef-method-2021` |
| `validate_atomic_inventory` | all exchanges | Reject plural collections, combined carriers, unexpanded BOM categories, combined waste streams, or one row containing more than one physical, chemical, waste or elementary exchange. | `eu-pef-method-2021` |
| `validate_route_conditions` | conditional processes and rows | Require evidence for every included route and a documented not-applicable determination for omitted fabrication, wet coating, powder coating, natural-gas curing, aqueous preparation, diesel testing and packaging rows. | `eu-pef-method-2021` |
| `validate_combustion_consistency` | on-site fuel use | When natural gas or diesel is combusted in scope, require a corresponding direct fossil-CO2 record or a justified measured-zero result; keep upstream supplier emissions out of the direct row. | `eu-pef-method-2021` |
| `validate_allocation` | shared and multifunctional processes | Confirm the section 7 hierarchy, driver, denominator and sensitivity are documented and that recoverable scrap is reported gross without an undeclared avoided-burden credit. | `eu-pef-method-2021` |
| `validate_data_quality` | dataset readiness | Confirm technological, geographical and time representativeness, precision, completeness, source metadata, calibration evidence, data gaps and proxies are disclosed. | `eu-pef-method-2021` |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | Product-specific foreground manufacturing data package for complete CPC 43562 machinery at the factory gate |
| downstream_use | `secondary_dataset`; `background_dataset` |
| allowed_use | Link as the manufacturing-stage dataset in a documented lifecycle model whose product identity, reference mass, geography, technology, period and boundary match the qualifiers |
| excluded_use | Unqualified comparison between different machinery functions or duty classes; product-safety or conformity claim; use-stage performance claim; installation, maintenance or end-of-life result without separate scenarios |
| required_metadata | canonical PCR id; product model; CPC and HS classification rationale; reference mass; rated load or throughput; lift, travel or handling envelope; duty class or cycle; drive and controls; principal material grades; included accessories; packaging status; factory sites; reference period; supplier boundaries; allocation; route inclusion; data gaps and proxies |
| required_quality_disclosure | BOM and process coverage; accepted and rejected production population; meter and calibration coverage; technological, geographical and temporal representativeness; precision; mass reconciliation; allocation sensitivity; unresolved UUIDs and range evidence needs |
| update_trigger | Material change to product design, BOM, supplier delivery boundary, factory or route, coating system, energy mix, fuel, test procedure, packaging, allocation method, reference period, classification scope or newly confirmed Tiangong UUID |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `un-cpc-3-0-structure-2025` | `official_guidance` | United Nations Statistics Division, CPC Version 3.0 Structure, 30 June 2025, https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Structure_30Jun2025.csv | Official CPC 43562 identity and its residual position after CPC 43561 Industrial robots |
| `un-cpc-3-0-explanatory-notes-2025` | `official_guidance` | United Nations Statistics Division, CPC Version 3.0 Explanatory Notes, 30 June 2025, https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Exp_Notes_30Jun2025.pdf | Official CPC 43562 title and HS 2022 headings or subheadings 8428.10, .20, .31, .32, .33, .39, .40, .60 and .90 |
| `un-cpc-1-1-chinese-2002` | `official_guidance` | United Nations, Central Product Classification Version 1.1, Chinese edition, Series M No. 77/Ver.1.1, https://unstats.un.org/unsd/publication/SeriesM/M_77ver1_1c.pdf | Established Chinese terminology for “其他起重、装卸、装载、或卸载机械”; punctuation modernized without changing meaning |
| `eu-pef-method-2021` | `official_guidance` | Commission Recommendation (EU) 2021/2279 of 15 December 2021, Annex I, Product Environmental Footprint Method, consolidated English text, https://eur-lex.europa.eu/legal-content/EN/TXT/PDF/?uri=CELEX%3A02021H2279-20211230 | Product-specific BOM and company-specific manufacturing data; inventory completeness; foreground record sources; allocation hierarchy; technological, geographical and time representativeness and precision |
