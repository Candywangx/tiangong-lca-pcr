---
pcr_id: pcr.metal-products-machinery-and-equipment.basic-metals.tubes-pipes-and-tube-or-pipe-fittings-of-aluminium
language: en-US
status: candidate
sync_with: pcr.zh-CN.md
---

# Tubes, pipes and tube or pipe fittings, of aluminium

## 1. Scope and Applicability

This PCR applies to foreground production of aluminium or aluminium-alloy tubes, pipes, and tube or pipe fittings delivered at the producing factory gate. It covers mill-finished, drawn, welded, machined, formed, joined, heat-treated, and surface-treated products when those operations occur within the declared foreground boundary.

The foreground data package shall declare the product form, alloy designation and recycled-content basis, temper, dimensions and tolerances, manufacturing route, surface condition, production geography, technology, and factory-gate condition. Installation, use, maintenance, off-site distribution after the producing factory gate, and end-of-life treatment are excluded. Upstream production of purchased billet, strip, chemicals, fuels, electricity, and water is represented by supplier-specific or geographically and technologically representative datasets rather than recreated inside this PCR.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.metal-products-machinery-and-equipment.basic-metals.tubes-pipes-and-tube-or-pipe-fittings-of-aluminium |
| classification_refs | CPC 3.0: 41536, exact |
| covered_products | Aluminium or aluminium-alloy tubes and pipes; aluminium tube or pipe fittings; mill-finished or further drawn, welded, cut, bent, machined, joined, heat-treated, or surface-treated forms when sold as the declared product |
| excluded_products | Copper, nickel, iron, steel, plastics, or rubber tubes and fittings; aluminium structural assemblies whose identity is no longer a tube, pipe, or fitting; installation and use services |
| representative_product | Factory-gate aluminium tube, pipe, or tube/pipe fitting conforming to the declared alloy, temper, geometry, tolerance, and surface condition |
| production_route | Declare one actual route: billet extrusion, extrusion followed by drawing, rolled-strip forming and longitudinal welding, or fitting fabrication from aluminium semi-finished feedstock; declare all subsequent cutting, forming, machining, joining, heat treatment, and surface treatment |
| market_state | Accepted saleable product at the producing factory gate, net of removable process scrap and rejected product |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Provide the declared geometry and connection function of an aluminium tube, pipe, or tube/pipe fitting |
| How much | 1,000 kg of accepted saleable product |
| How well | Meets the declared alloy, temper, dimensions, wall thickness, tolerances, mechanical properties, joining features, and surface condition |
| How long or cycle | One production lot represented by the dataset; no use-life service is included |
| reference_flow_link | Net accepted product mass at the producing factory gate |

| Field | Value |
| --- | --- |
| Reference amount | 1,000 kg |
| Reference product flow | Tubes, pipes and tube or pipe fittings, of aluminium `ecc836aa-a727-46bb-ad13-4dd96e1c6f56` |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | product form; alloy designation; primary/recycled aluminium content basis; temper; outside and inside dimensions or nominal size; wall thickness; fitting type and connection geometry where applicable; tolerance/specification; surface condition; manufacturing route; production geography; technology; factory-gate condition; reference period |

When constructing a foreground data package, the items listed in `Required qualifiers` must be declared in dataset metadata, process notes, reference flow comment, product description, or an equivalent data package field. Missing required qualifiers make the reference flow definition incomplete for that data package.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| `reference_product_mass` | accepted reference product and all aluminium material balance rows | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Use net mass after removal of packaging, transferable racks, process scrap, and rejected product; scale the accepted output to exactly 1,000 kg. |
| `gas_volume_basis` | natural gas | Volume `93a60a56-a3c8-22da-a746-0800200c9a66` | m3 | Report metered gas volume at the supplier or meter reference temperature and pressure; disclose those reference conditions and do not combine gas volume with energy without a documented conversion. |
| `electricity_energy_basis` | electricity | Net calorific value `93a60a56-a3c8-11da-a746-0800200b9a66` | MJ | Preserve metered electricity before conversion; when converting kWh to MJ, use 1 kWh = 3.6 MJ and disclose whether transformer and on-site distribution losses are included. |
| `solution_active_mass` | sodium hydroxide and sulfuric acid solutions | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Record delivered solution mass and concentration separately; report both as-received solution mass and calculated active-substance mass without substituting one for the other. |

## 5. System Boundary

The foreground boundary begins with receipt of the declared aluminium feedstock and all purchased energy, water, lubricants, and surface-treatment chemicals. It includes route-specific billet or strip preparation; extrusion or strip forming and welding; drawing, straightening, cutting, bending, machining, joining, heat treatment, cleaning, anodizing, other declared surface treatment, inspection, internal scrap handling, wastewater treatment, and direct releases when these occur at the producing site. It ends with accepted product at the producing factory gate.

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Purchased aluminium extrusion billet, aluminium strip, or another disclosed aluminium semi-finished feedstock arrives at the producing site with alloy, recycled-content basis, mass, supplier, and delivery state identified |
| starting_condition_role | foreground_gate_input |
| product_classification_scope | Aluminium tubes, pipes, and tube or pipe fittings represented by CPC 3.0 code 41536; classification is contextual and does not replace the semantic product qualifiers |
| recursive_input_rule | If an aluminium tube, pipe, or fitting from the same category is purchased for further fabrication, record it once as a product input with its upstream dataset and do not recursively reproduce its manufacture inside the same process |
| upstream_dataset_requirement | Use supplier-specific upstream datasets where available; otherwise use geographically, technologically, alloy-, product-state-, and recycled-content-representative datasets and disclose substitutions |
| disclosure | Declare starting feedstock form, supplier or data-source basis, alloy, primary/recycled content, route, all included finishing steps, internal scrap loop, direct emission compartments, and excluded off-site operations |

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `boundary_factory_gate` | all foreground packages | Include all on-site operations from receipt of aluminium feedstock through accepted product at the producing factory gate; exclude downstream distribution, installation, use, and end of life. | `usitc-aluminium-extrusions-2022`; `european-aluminium-profile-report-2015` |
| `boundary_route_disclosure` | forming route | Identify whether the product follows billet extrusion, post-extrusion drawing, rolled-strip forming and longitudinal welding, or fitting fabrication, and include only exchanges that actually cross that route boundary. | `usitc-aluminium-extrusions-2022`; `european-aluminium-automotive-manual-2002` |
| `boundary_surface_treatment` | surface treatment | Include caustic cleaning and sulfuric-acid anodizing exchanges only when those operations occur within the producing site; otherwise identify the mill-finished state or the upstream/downstream finishing dataset used. | `usitc-aluminium-extrusions-2022` |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| `aluminium_tube_pipe_fitting_manufacturing` | Aluminium tube, pipe, and fitting manufacturing | required | Always; individual exchange cards apply only when their stated route or operation occurs | Aggregated foreground manufacturing from identified aluminium feedstock through forming, optional drawing/welding/fabrication/heat treatment/surface treatment, inspection, and accepted factory-gate output | 1,000 kg accepted aluminium tube, pipe, or fitting output |

### Process: Aluminium tube, pipe, and fitting manufacturing (`aluminium_tube_pipe_fitting_manufacturing`)

#### Inputs

##### Product flows

###### Aluminium extrusion billet (`in_aluminium_extrusion_billet`)

Record the mass of aluminium extrusion billet when the declared product route begins with billet extrusion. Do not use this row for rolled-strip welded tube or for a purchased same-category tube subsequently fabricated into a fitting.

- Selected flow: Aluminium extrusion billet
- Flow property / unit: Mass / kg
- Amount rule: Measured net billet mass charged to production, less any billet returned unused, allocated to accepted output
- Value mode: Foreground record (`foreground_record`)
- Specificity: Route-specific (`route_specific`)
- Normalization basis: per 1,000 kg accepted reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material_mass_balance`
- Sources: `usitc-aluminium-extrusions-2022`; `european-aluminium-profile-report-2015`

###### Aluminium strip for welded tube (`in_aluminium_strip`)

Record this input only for a route that forms aluminium strip into a tube and longitudinally welds the strip edges.

- Selected flow: Aluminum strip `2eac52b0-66e2-4fe0-9329-655d6ee0a1c2`
- Flow property / unit: Mass / kg
- Amount rule: Measured net aluminium strip mass issued to the welded-tube line, less unused returns, allocated to accepted output
- Value mode: Foreground record (`foreground_record`)
- Specificity: Route-specific (`route_specific`)
- Normalization basis: per 1,000 kg accepted reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material_mass_balance`
- Sources: `european-aluminium-automotive-manual-2002`

###### Electricity (`in_electricity`)

Record metered purchased electricity used by included forming, welding, drawing, machining, heat-treatment, surface-treatment, abatement, water-treatment, and auxiliary operations.

- Selected flow: Electricity `890a70b7-b677-4e2a-8a1b-7d017e0a10ae`
- Flow property / unit: Net calorific value / MJ
- Amount rule: Metered electricity for included operations, allocated to accepted output and converted under `electricity_energy_basis`
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg accepted reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_energy_records`
- Sources: `european-aluminium-profile-report-2015`

###### Gaseous natural gas (`in_natural_gas`)

Record this input when natural gas is burned on site for billet heating, aging, heat treatment, drying, or another included thermal operation.

- Selected flow: natural gas in the gaseous state `4f19ca0e-7b3b-11dd-ad8b-0800200c9a66`
- Flow property / unit: Volume / m3
- Amount rule: Metered natural-gas volume for included operations at disclosed reference conditions, allocated to accepted output
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg accepted reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_energy_records`
- Sources: `european-aluminium-profile-report-2015`

###### Process water (`in_process_water`)

Record process water crossing the site boundary for quenching, cooling makeup, cleaning, rinsing, surface treatment, or wastewater-treatment preparation. Do not combine recirculated internal water with boundary input.

- Selected flow: Process Water `94a04f7e-2d5c-41f0-b182-d54a3b373a02`
- Flow property / unit: Mass / kg
- Amount rule: Metered or invoiced process-water mass entering the boundary, using measured density when converted from volume
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg accepted reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_water_records`
- Sources: `european-aluminium-profile-report-2015`

###### Lubricating oil (`in_lubricating_oil`)

Record lubricating oil consumed by drawing, forming, cutting, machining, and other included equipment. Hydraulic oil retained in equipment is excluded unless make-up or replacement crosses the boundary during the reference period.

- Selected flow: lubricating oil `aec6f1a5-7b09-4704-870d-434d3ada0edd`
- Flow property / unit: Mass / kg
- Amount rule: Purchased plus opening stock minus closing stock and recoverable unused oil, allocated to accepted output
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg accepted reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_consumable_stock_records`
- Sources: `usitc-aluminium-extrusions-2022`

###### Sodium hydroxide (`in_sodium_hydroxide`)

Record sodium hydroxide only when an included alkaline cleaning or etching bath consumes it; declare delivered solution concentration and active mass.

- Selected flow: Sodium hydroxide `e0abcced-0611-4c24-9290-5a2c5a0c4169`
- Flow property / unit: Mass / kg
- Amount rule: As-received solution mass and active sodium-hydroxide mass consumed by included baths, allocated to accepted output
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1,000 kg accepted reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_surface_chemical_records`
- Sources: `usitc-aluminium-extrusions-2022`

###### Sulfuric acid (`in_sulfuric_acid`)

Record sulfuric acid only when an included sulfuric-acid anodizing bath consumes it; declare delivered solution concentration and active mass.

- Selected flow: Sulfuric acid `7ee2e3c3-bee7-4520-92b7-3e23afbfcd6f`
- Flow property / unit: Mass / kg
- Amount rule: As-received solution mass and active sulfuric-acid mass consumed by included anodizing baths, allocated to accepted output
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1,000 kg accepted reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_surface_chemical_records`
- Sources: `usitc-aluminium-extrusions-2022`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Accepted aluminium tube, pipe, or fitting (`out_reference_product`)

This is the reference product after inspection and rejection handling. The declared product qualifiers determine which member of the category the dataset represents.

- Selected flow: Tubes, pipes and tube or pipe fittings, of aluminium `ecc836aa-a727-46bb-ad13-4dd96e1c6f56`
- Flow property / unit: Mass / kg
- Amount rule: Net accepted product mass scaled to 1,000 kg
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: 1,000 kg accepted reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_material_mass_balance`
- Sources: `src_unsd_cpc_3_0_2025`

###### Segregated aluminium process scrap for recycling (`out_aluminium_process_scrap`)

Record clean billet ends, extrusion discard, saw chips, trim, weld-bead scarfing, machining chips, and rejected aluminium only after they are weighed as one chemically compatible segregated aluminium scrap stream sent to recycling. Separately record materially different or contaminated streams in the foreground package.

- Selected flow: Segregated aluminium process scrap for recycling
- Flow property / unit: Mass / kg
- Amount rule: Measured net mass of segregated aluminium process scrap leaving the foreground boundary for recycling
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg accepted reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material_mass_balance`
- Sources: `european-aluminium-profile-report-2015`

##### Waste flows

###### Used lubricating oil (`out_used_lubricating_oil`)

Record used lubricating oil transferred to a waste manager when lubricant replacement or oil-bearing maintenance occurs within the reference period.

- Selected flow: Used lubricating oil `55d93375-7f04-4166-b2a2-88ce929051a5`
- Flow property / unit: Mass / kg
- Amount rule: Measured mass on waste transfer records, net of separately recovered usable oil
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg accepted reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste_transfer_records`
- Sources: `usitc-aluminium-extrusions-2022`

###### Aluminium-hydroxide surface-treatment sludge (`out_aluminium_hydroxide_sludge`)

Record this chemically specific sludge only when included caustic cleaning, etching, anodizing, rinsing, or wastewater neutralization produces an aluminium-hydroxide-rich sludge sent off site.

- Selected flow: Aluminium-hydroxide surface-treatment sludge
- Flow property / unit: Mass / kg
- Amount rule: Measured wet sludge mass and separately measured or laboratory-determined dry-solids fraction on waste transfer records
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1,000 kg accepted reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste_transfer_records`
- Sources: `usitc-aluminium-extrusions-2022`

##### Elementary flows

###### Fossil carbon dioxide from on-site fuel combustion (`out_fossil_carbon_dioxide`)

Record only direct fossil carbon dioxide crossing the site-to-air boundary from on-site combustion; exclude upstream electricity emissions and biogenic carbon dioxide.

- Selected flow: carbon dioxide (fossil) `08a91e70-3ddc-11dd-923d-0050c2490048`
- Flow property / unit: Mass / kg
- Amount rule: Site stack measurement allocated to included operations and accepted output
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg accepted reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_direct_air_emissions`
- Sources: `european-aluminium-profile-report-2015`

###### Nitrogen oxides from on-site combustion (`out_nitrogen_oxides`)

Record direct nitrogen oxides only when the monitored release is assigned to non-urban air or a high stack. Do not use this row for indoor or urban-ground-level compartments.

- Selected flow: Nitrogen oxides `191b44d4-90c9-465a-8802-93a651b4fd52`
- Flow property / unit: Mass / kg
- Amount rule: Site stack measurement for included combustion sources, allocated to accepted output
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg accepted reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_direct_air_emissions`
- Sources: `european-aluminium-profile-report-2015`

###### Aluminium released to air, unspecified (`out_aluminium_to_air`)

Record measured aluminium mass crossing the site-to-air boundary from cutting, machining, grinding, polishing, or other included operations after abatement. Use this row only when the receiving air compartment is unspecified.

- Selected flow: aluminium `fe0acd60-3ddc-11dd-a72e-0050c2490048`
- Flow property / unit: Mass / kg
- Amount rule: Measured aluminium mass in direct air releases after on-site abatement, allocated to accepted output
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg accepted reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_direct_air_emissions`
- Sources: `usitc-aluminium-extrusions-2022`

###### Aluminium released to fresh water (`out_aluminium_to_fresh_water`)

Record measured aluminium mass crossing the site boundary in a direct freshwater discharge after on-site treatment. Exclude sewer transfers and sea-water or unspecified-water releases from this row.

- Selected flow: aluminium `fe0acd60-3ddc-11dd-a732-0050c2490048`
- Flow property / unit: Mass / kg
- Amount rule: Measured aluminium mass in direct treated freshwater discharge, allocated to accepted output
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg accepted reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_direct_water_emissions`
- Sources: `usitc-aluminium-extrusions-2022`

## 7. Allocation and Co-product Handling

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `allocation_subdivision_first` | route, line, and finishing operations | Prefer process subdivision and direct metering. Allocate shared electricity, fuel, water, consumables, wastes, and releases to the declared product using documented causal measures such as machine time, metered energy, bath loading, treated surface area, or accepted mass. |  |
| `allocation_scrap_output` | aluminium process scrap | Record segregated aluminium scrap as an explicit output and report its destination. Do not silently subtract scrap from billet or strip input, and do not add avoided-primary-aluminium credit inside the foreground gate-to-gate inventory. | `european-aluminium-profile-report-2015` |
| `allocation_residual_choice` | unavoidable multi-product operation | If subdivision and causal allocation are not feasible, use accepted product mass for physically similar outputs; disclose the allocation factor, affected exchanges, co-products, and sensitivity. Use economic allocation only when physical relations are demonstrably unsuitable. |  |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_material_mass_balance` | `aluminium_tube_pipe_fitting_manufacturing` | aluminium feedstock, accepted product, and segregated aluminium scrap | calibrated scales, production orders, inventory movements, and scrap dispatch records | opening stock; receipts; returns; charged mass; accepted mass; rejected mass; segregated scrap mass; closing stock; alloy; lot; route | reconcile lot or campaign weights to inventory movements and scale tickets | kg | each lot or campaign; reconcile monthly | at least 12 representative months or the full shorter production period | all included lines at the producing site | sum by compatible alloy and route, apply documented allocation, then normalize to 1,000 kg accepted product | scale calibration, lot reconciliation, inventory variance, and scrap transfer tickets |
| `cp_energy_records` | `aluminium_tube_pipe_fitting_manufacturing` | purchased electricity and natural gas | submeter, main meter, utility invoice, and operating log | meter start/end; invoice quantity; reference conditions; equipment/line; operating hours; downtime; allocation driver | prefer process submetering; reconcile submeters to site invoices | MJ electricity; m3 natural gas | continuous or each shift; reconcile monthly | same period as product output | all included forming, thermal, finishing, abatement, and auxiliary operations | subtract excluded loads, allocate shared loads causally, convert units under section 4, normalize to reference output | meter calibration, invoice reconciliation, and load-allocation record |
| `cp_water_records` | `aluminium_tube_pipe_fitting_manufacturing` | process water input | water meter, invoice, tank-level, and make-up log | source; meter start/end; make-up; blowdown; density; reuse/recirculation; operation served | meter boundary make-up by source and exclude internal recirculation | kg | continuous or daily; reconcile monthly | same period as product output | producing site and included water systems | sum boundary inputs by source, allocate by metered use or causal driver, normalize to reference output | meter calibration, water balance, invoice, and reuse-loop reconciliation |
| `cp_consumable_stock_records` | `aluminium_tube_pipe_fitting_manufacturing` | lubricating oil | purchase, issue, return, and stock records | opening stock; purchases; issued mass; recoverable return; closing stock; oil grade; operation | stock-balance calculation cross-checked to issue tickets | kg | each issue; reconcile monthly | same period as product output | included forming and machining equipment | opening plus purchases minus recoverable returns and closing stock, then allocate and normalize | stock count, purchase invoice, issue ticket, and variance investigation |
| `cp_surface_chemical_records` | `aluminium_tube_pipe_fitting_manufacturing` | sodium hydroxide and sulfuric acid | bath make-up log, dosing meter, purchase record, and concentration test | chemical identity; solution mass; concentration; bath addition; bath discard; product lot; treated surface or mass | reconcile dosing and inventory; calculate active mass from measured concentration | kg solution and kg active substance | each addition; reconcile by batch and monthly | same period as included surface treatment | all included cleaning, etching, and anodizing baths | calculate active mass separately for each chemical, allocate by bath loading or treated mass, normalize to reference output | concentration test, dosing calibration, batch log, SDS, and stock reconciliation |
| `cp_waste_transfer_records` | `aluminium_tube_pipe_fitting_manufacturing` | used lubricating oil and aluminium-hydroxide sludge | container scale, waste manifest, laboratory report, and transfer record | waste identity; gross/tare/net mass; destination; treatment route; dry-solids fraction; hazardous status; date | use net transfer mass and keep each chemically distinct waste separate | kg | each shipment; reconcile monthly | same period as product output | all included on-site waste collection points | sum by exact waste identity, allocate shared batches by causal production measure, normalize to reference output | signed manifest, scale calibration, laboratory result, and contractor acceptance |
| `cp_direct_air_emissions` | `aluminium_tube_pipe_fitting_manufacturing` | fossil carbon dioxide, nitrogen oxides, and aluminium to air | continuous monitor, stack test, or validated site mass balance | pollutant; concentration; gas flow; duration; stack; compartment; operating state; abatement; uncertainty | use measured direct releases and exclude upstream electricity and supplier emissions | kg | continuous monitoring or each compliant test campaign | representative operating period aligned to production | all included direct site emission points | integrate pollutant mass, allocate by source operation, normalize to reference output | monitor calibration, test report, operating log, and abatement record |
| `cp_direct_water_emissions` | `aluminium_tube_pipe_fitting_manufacturing` | aluminium to fresh water | discharge-flow meter and accredited effluent analysis | aluminium concentration; flow; date/time; receiving compartment; treatment status; detection limit; uncertainty | multiply measured concentration by matched discharge flow only for direct freshwater release | kg | each discharge composite or permit-monitoring interval | representative period aligned to production | included direct freshwater outfalls | sum measured aluminium mass, allocate to included production, normalize to reference output | laboratory accreditation, chain of custody, flow-meter calibration, and outfall identity |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_reference_normalization` | all inventory rows | normalized amount = period amount × 1,000 kg / net accepted reference-product mass in the same period | period exchange amount; net accepted output mass | exchange amount per 1,000 kg reference product |  |
| `calc_active_chemical_mass` | sodium hydroxide and sulfuric acid | active-substance mass = as-received solution mass × measured mass fraction | solution mass; laboratory or supplier concentration | kg active substance and kg as-received solution |  |
| `calc_material_reconciliation` | aluminium mass balance | unresolved balance = aluminium feedstock mass − accepted product mass − segregated aluminium scrap mass − measured aluminium waste/release mass − closing work-in-process change | aluminium inputs, product, scrap, wastes/releases, and work-in-process change | reconciled aluminium mass-balance variance |  |
| `calc_direct_discharge_mass` | aluminium to fresh water | discharge mass = matched aluminium concentration × discharge volume, with unit conversion and non-detect treatment disclosed | concentration result; matched flow; detection-limit rule | kg aluminium released to fresh water |  |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_product_identity` | reference product | Link every reported lot to product form, alloy, temper, geometry, tolerance/specification, surface condition, route, and acceptance record. | production order, certificate of analysis/conformity, drawing or specification, and inspection release |
| `dq_temporal_representativeness` | all foreground records | Use a continuous period that captures normal route and finishing variability; justify shutdowns, start-ups, campaigns, or a period shorter than 12 months. | dated meter, production, inventory, laboratory, and waste records |
| `dq_completeness` | inventory boundary | Reconcile material, energy, water, chemical, waste, and emission records to the same product output and explain missing meters, estimates, exclusions, and data gaps. | signed reconciliation and data-gap log |
| `dq_route_specificity` | conditional exchanges | Mark every billet, strip, fuel, chemical, waste, and emission card as applicable or not applicable based on the declared manufacturing route; zero is not a substitute for an applicability decision. | process flow diagram, equipment list, operating logs, and route declaration |
| `dq_uncertainty` | measured and calculated values | Retain calibration status, sampling design, detection limits, allocation uncertainty, and conversion inputs sufficient to reproduce each normalized result. | calibration certificates, laboratory reports, calculation workbook, and reviewer trace |

## 9. Validation Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `validation_identity` | reference product | Confirm that the output is an aluminium tube, pipe, or tube/pipe fitting and that every required qualifier in section 3 is present and consistent with production and inspection records. | `src_unsd_cpc_3_0_2025` |
| `validation_inventory_accounting` | inventory rows | Require every applicable row to carry one atomic flow, property, unit, amount rule, evidence kind, collection protocol, and normalization basis; require documented not-applicable decisions for route-conditional rows. |  |
| `validation_mass_balance` | aluminium inputs and outputs | Investigate the reconciled aluminium balance whenever input cannot be explained by accepted product, segregated scrap, measured aluminium wastes/releases, and work-in-process change; disclose the final variance and treatment. | `european-aluminium-profile-report-2015` |
| `validation_energy_water` | electricity, natural gas, and process water | Reconcile process records to site invoices or main meters, check conversion and reference conditions, and prevent double counting of internal recirculation or upstream emissions. |  |
| `validation_compartments` | direct releases | Confirm that fossil carbon dioxide excludes electricity-chain emissions, nitrogen oxides use the non-urban/high-stack compartment, aluminium-to-air uses unspecified air, and aluminium-to-water uses direct fresh water; use different flow identities when compartments differ. |  |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | foreground manufacturing dataset suitable, after review, for publication as a `secondary_dataset` or `background_dataset` |
| downstream_use | product carbon footprint, life-cycle inventory, process dataset, and lifecyclemodel studies requiring factory-gate aluminium tube, pipe, or fitting production |
| allowed_use | Use when product form, alloy, temper, dimensions, surface condition, route, geography, technology, recycled-content basis, time period, and boundary are representative or explicitly adjusted |
| excluded_use | Do not use as a generic primary-aluminium dataset, as a use-phase or installation model, for non-aluminium tubes/fittings, or for a route/finish whose conditional exchanges are unrepresented |
| required_metadata | PCR id and version; product qualifiers; reference flow UUID; site and geography; reference period; route and equipment; surface treatment; primary/recycled-content basis; upstream dataset choices; allocation; completeness; uncertainty; verification status |
| required_quality_disclosure | Foreground coverage; meter and scale calibration; material-balance variance; allocation shares; missing data and estimates; direct-release measurement method; waste destinations; representativeness and limitations |
| update_trigger | Material change in alloy/feedstock or recycled content, forming or welding route, heat treatment, surface treatment, energy or water system, abatement, allocation, site geography, supplier datasets, or production technology; otherwise review at the organization’s documented dataset-review interval |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `src_unsd_cpc_3_0_2025` | official_guidance | United Nations Statistics Division, CPC Version 3.0 structure, 30 June 2025, code 41536. https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Structure_30Jun2025.csv (retrieved 2026-09-04) | Official product classification identity and scope anchor |
| `usitc-aluminium-extrusions-2022` | official_guidance | U.S. International Trade Commission, *Aluminum Extrusions from China*, Publication 5375, October 2022. https://www.usitc.gov/publications/701_731/pub5375.pdf (retrieved 2026-09-04) | Billet extrusion, drawn tubing, cooling, stretching, cutting, aging, anodizing, chemical pretreatment, and fabrication process decomposition |
| `european-aluminium-profile-report-2015` | dataset | European Aluminium, *Environmental Profile Report for the European Aluminium Industry*, data year 2015. https://european-aluminium.eu/wp-content/uploads/2022/10/environmental-profile-report-for-the-european-aluminium-industry.pdf (retrieved 2026-09-04) | Extrusion boundary, billet input, energy/water input categories, direct output categories, and separate process-scrap recycling flow |
| `european-aluminium-automotive-manual-2002` | handbook | European Aluminium Association, *The Aluminium Automotive Manual: Special Materials Production*, version 2002, section 6.2.2. https://european-aluminium.eu/wp-content/uploads/2022/11/aam-materials-6-special-materials-production.pdf (retrieved 2026-09-04) | Rolled-strip input and HF-welded aluminium tube sequence: slitting, edge preparation, roll forming, resistance welding, bead removal, cooling, sizing, cutting, and transfer |
