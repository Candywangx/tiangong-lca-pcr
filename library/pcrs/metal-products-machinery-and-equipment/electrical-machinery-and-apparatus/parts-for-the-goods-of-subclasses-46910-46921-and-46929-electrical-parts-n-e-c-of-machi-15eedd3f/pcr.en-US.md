---
pcr_id: pcr.metal-products-machinery-and-equipment.electrical-machinery-and-apparatus.parts-for-the-goods-of-subclasses-46910-46921-and-46929-electrical-parts-n-e-c-of-machi-15eedd3f
language: en-US
status: candidate
sync_with: pcr.zh-CN.md
---

# Parts for the goods of subclasses 46910, 46921 and 46929; electrical parts n.e.c. of machinery or apparatus

## 1. Scope and Applicability

This PCR applies to separately supplied parts of the electrical ignition, starting, generating, lighting, signalling, alarm, and related apparatus identified by CPC subclasses 46910, 46921, and 46929, together with electrical parts of machinery or apparatus not elsewhere classified under a more specific product category. It provides cradle-to-factory-gate rules for a declared part family and production route.

The PCR covers product-specific material acquisition, component fabrication or molding performed by the reporting facility, cleaning and surface finishing when used, assembly, outgoing testing, and saleable packaging when it crosses the factory-gate boundary. A foreground data package shall identify the particular part and shall not represent the entire CPC category as a homogeneous design.

Complete apparatus; non-electrical mechanical parts; electronic components classified separately; and parts assigned to more specific categories for motors, generators, transformers, converters, inductors, distribution or control apparatus, batteries, lamps, or other named equipment are excluded. Distribution, installation, host-equipment use, maintenance, and end-of-life are outside the default boundary.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.metal-products-machinery-and-equipment.electrical-machinery-and-apparatus.parts-for-the-goods-of-subclasses-46910-46921-and-46929-electrical-parts-n-e-c-of-machi-15eedd3f |
| classification_refs | CPC 3.0: 46960 (exact classification context) |
| covered_products | Separately supplied parts of goods in CPC 46910, 46921, and 46929; other electrical parts n.e.c. of machinery or apparatus |
| excluded_products | Complete apparatus; non-electrical mechanical parts; electronic components and electrical parts assigned to another specific CPC subclass |
| representative_product | A saleable, specification-conforming electrical part supplied for incorporation into declared ignition, starting, signalling, alarm, or other machinery/apparatus applications |
| production_route | Product-specific combination of metal forming or machining, polymer molding, cleaning or finishing, assembly, curing, inspection, electrical or functional test, and packaging; every applied route step is declared |
| market_state | Separately supplied finished part at the manufacturing factory gate, including only packaging declared to cross that boundary |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Provision of a separately supplied CPC 46960 electrical machinery or apparatus part |
| How much | 1 kg of saleable part output at the manufacturing factory gate |
| How well | Conforming to the declared drawing, material specification, electrical rating, insulation or protection class where applicable, and outgoing acceptance test |
| How long or cycle | One factory-gate delivery of the finished part; service life in the host apparatus is not represented |
| reference_flow_link | The measured mass of accepted saleable output represented by `reference_product` |

| Field | Value |
| --- | --- |
| Reference amount | 1 kg |
| Reference product flow | Separately supplied CPC 46960 electrical machinery or apparatus part (Tiangong UUID unresolved) |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | part family and host-apparatus application; drawing or model identifier; principal materials and bill of materials; mass per item; electrical rating and insulation or ingress-protection class where applicable; fabrication, surface-treatment, assembly, and test routes; acceptance criteria and reject treatment; recycled-content claims and supplier geography; manufacturing geography and reference period; packaging state |

When constructing a foreground data package, the items listed in `Required qualifiers` must be declared in dataset metadata, process notes, reference flow comment, product description, or an equivalent data package field. Missing required qualifiers make the reference flow definition incomplete for that data package.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| `reference_mass` | Reference product and all mass-normalized rows | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Weigh accepted saleable output net of transport packaging excluded from the declared market state; normalize every inventory amount to exactly 1 kg of this accepted output. |
| `item_to_mass` | Item-count production and packaging records | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Convert counts to mass only with a contemporaneous measured mean net mass and retained sample size, lot, and measurement record. |
| `electricity_energy` | Purchased electricity | Net calorific value `93a60a56-a3c8-11da-a746-0800200b9a66` | MJ | Preserve the metered energy unit and disclose every conversion factor; keep fabrication and assembly/test meters separate where records permit. |
| `gas_volume` | Gaseous natural gas | Volume `93a60a56-a3c8-22da-a746-0800200c9a66` | m3 | State meter reference conditions, billing period, and allocation to the declared route before normalizing gas volume. |
| `water_mass` | Process water and wastewater | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Prefer direct mass measurement; when volume is converted to mass, record temperature, density assumption, and source reading. |

## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Purchased metals, polymers, resins, chemicals, energy, water, components, and packaging at the reporting facility gate, each with supplier, grade, recycled content, geography, and delivered state where applicable |
| starting_condition_role | Cradle-to-gate background inputs entering product-specific foreground fabrication, finishing, assembly, testing, and packaging |
| product_classification_scope | One declared CPC 46960 part family and market state; complete apparatus and more specifically classified parts are excluded |
| recursive_input_rule | A purchased input that is itself a CPC 46960 part is recorded once as an upstream product input with its supplier dataset; do not recursively reproduce its manufacturing inventory inside the receiving foreground process |
| upstream_dataset_requirement | Use geographically and technologically representative upstream datasets for every purchased material, component, energy carrier, water, chemical, and packaging input; disclose proxies and unresolved identities |
| disclosure | Declare part design, bill of materials, applied processes, facility geography, reference period, yield and rejects, internal recycling, packaging boundary, allocation, exclusions, and all departures from this PCR |

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `sb_cradle_to_gate` | Product system boundary | Include product-specific upstream inputs and all applied on-site fabrication, finishing, assembly, testing, and saleable-packaging operations through the factory gate; exclude distribution, installation, use, and end-of-life unless a study explicitly extends the boundary. | `ec-product-environmental-footprint-method-2021` |
| `sb_product_specific_records` | Foreground data | Use the product-specific bill of materials and company-specific manufacturing activity data; facility totals may be used only after a documented causal allocation to the declared part family. | `ec-product-environmental-footprint-method-2021` |
| `sb_conditional_routes` | Conditional processes and flows | Include each conditional route and its atomic exchanges when it occurred for the declared product; mark it not applicable only with production-route evidence. | `ifc-metal-plastic-rubber-ehs-2007` |
| `sb_completeness` | Exclusions and cut-offs | Identify all material, energy, water, waste, and direct-emission exchanges; justify and quantify the potential significance of any exclusion rather than omitting a flow because its UUID or range is unresolved. | `ec-product-environmental-footprint-method-2021` |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| `component_fabrication_and_finishing` | Component fabrication and finishing | conditional | Include when the reporting facility forms, machines, molds, bonds, cleans, heat-treats, or surface-finishes material for the declared part. | Foreground material conversion and finishing | Measured accepted and rejected mass attributable to the declared part family |
| `part_assembly_and_testing` | Part assembly and outgoing testing | required | Always include final assembly or, for a one-piece part, final inspection and acceptance testing. | Foreground completion and quality acceptance | Measured accepted saleable output and test activity |
| `saleable_packaging` | Saleable factory-gate packaging | conditional | Include when corrugated board boxes cross the factory gate with the reference product and are not returnable assets excluded from the declared market state. | Foreground packaging | Packaging mass issued to accepted product |

### Process: Component fabrication and finishing (`component_fabrication_and_finishing`)

#### Inputs

##### Product flows

###### Copper conductor feedstock (`copper_wire`)

Record copper wire only when it is physically incorporated or processed in the declared part route.

- Selected flow: copper wire `da2d966d-fe62-44dc-ba0f-b1cd7c7cf33e`
- Flow property / unit: Mass / kg
- Amount rule: measured net copper-wire withdrawal attributable to accepted output and associated rejects
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg accepted reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material_and_packaging_records`
- Sources: `ec-product-environmental-footprint-method-2021`

###### Low-carbon steel sheet (`low_carbon_steel_sheet`)

Record the declared low-carbon steel sheet grade when it is stamped, formed, or machined for the part; do not substitute an alloy, stainless, coated-corrugated, plate, or rod UUID.

- Selected flow: Low-carbon steel sheet (Tiangong UUID unresolved)
- Flow property / unit: Mass / kg
- Amount rule: measured net low-carbon steel-sheet withdrawal attributable to accepted output and associated rejects
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg accepted reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material_and_packaging_records`
- Sources: `ec-product-environmental-footprint-method-2021`

###### Polypropylene molding feedstock (`polypropylene_granulate`)

Record polypropylene granulate only for routes that mold or otherwise incorporate PP; declare grade, additives, and recycled content.

- Selected flow: polypropylene granulate (PP) `4f19f11d-7b3b-11dd-ad8b-0800200c9a66`
- Flow property / unit: Mass / kg
- Amount rule: measured PP granulate withdrawal attributable to accepted output and associated rejects
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg accepted reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material_and_packaging_records`
- Sources: `ec-product-environmental-footprint-method-2021`

###### Epoxy bonding or encapsulation resin (`epoxy_resin`)

Record epoxy resin only when the declared assembly, coating, potting, or encapsulation route consumes it; separately disclose curing agent and solvent exchanges as additional atomic rows when used.

- Selected flow: Epoxy resin `e2bab6ae-d42f-4fca-bab5-ae9c6692f105`
- Flow property / unit: Mass / kg
- Amount rule: measured mixed or issued epoxy-resin mass attributable to accepted output and rejects, excluding separately recorded curing agents or solvents
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg accepted reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material_and_packaging_records`
- Sources: `ec-product-environmental-footprint-method-2021`

###### Fabrication electricity (`fabrication_electricity`)

Record purchased electricity metered or causally allocated to forming, machining, molding, cleaning, finishing, curing, and associated controls.

- Selected flow: Electricity `890a70b7-b677-4e2a-8a1b-7d017e0a10ae`
- Flow property / unit: Net calorific value / MJ
- Amount rule: metered fabrication and finishing electricity attributable to the declared part route
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg accepted reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_energy_records`
- Sources: `ec-product-environmental-footprint-method-2021`

###### Process water (`process_water`)

Record supplied process water only when it crosses the boundary for cleaning, rinsing, cooling, or bath make-up; do not combine it with wastewater.

- Selected flow: Process Water `94a04f7e-2d5c-41f0-b182-d54a3b373a02`
- Flow property / unit: Mass / kg
- Amount rule: measured process-water input attributable to the declared part route
- Value mode: Foreground record (`foreground_record`)
- Specificity: Route-specific (`route_specific`)
- Normalization basis: per 1 kg accepted reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_water_and_chemical_records`
- Sources: `ifc-metal-plastic-rubber-ehs-2007`

###### Sodium hydroxide cleaning chemical (`sodium_hydroxide`)

Record sodium hydroxide only when an alkaline cleaning, etching, or finishing bath consumes it; state supplied concentration and convert solution mass to NaOH product mass consistently.

- Selected flow: Sodium hydroxide `e0abcced-0611-4c24-9290-5a2c5a0c4169`
- Flow property / unit: Mass / kg
- Amount rule: measured purchased sodium hydroxide product mass consumed by the declared route
- Value mode: Foreground record (`foreground_record`)
- Specificity: Route-specific (`route_specific`)
- Normalization basis: per 1 kg accepted reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_water_and_chemical_records`
- Sources: `ifc-metal-plastic-rubber-ehs-2007`

###### Natural gas for process heat (`natural_gas`)

Record gaseous natural gas only when it is combusted on site for ovens, curing, drying, or heat treatment attributable to the declared route.

- Selected flow: natural gas in the gaseous state `4f19ca0e-7b3b-11dd-ad8b-0800200c9a66`
- Flow property / unit: Volume / m3
- Amount rule: metered natural-gas volume combusted for the declared route at documented reference conditions
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg accepted reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_fuel_records`
- Sources: `ipcc-stationary-combustion-2006`

#### Outputs

##### Waste flows

###### Post-industrial steel fabrication scrap (`post_industrial_steel_scrap`)

Record segregated post-industrial steel offcuts and rejected steel pieces leaving the process; internal closed-loop return before crossing the boundary is tracked separately and is not double-counted.

- Selected flow: Post-industrial steel scrap `c143745d-be4f-4d8f-b403-2dcbfe685349`
- Flow property / unit: Mass / kg
- Amount rule: measured steel scrap crossing the foreground boundary
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg accepted reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste_records`
- Sources: `ifc-metal-plastic-rubber-ehs-2007`

###### Copper fabrication scrap (`copper_scrap`)

Record segregated copper offcuts, wire ends, and rejected copper pieces leaving the process; declare contamination and treatment route.

- Selected flow: Copper Scrap `4fbbb5f1-560a-4052-ba0c-652c5dfc282e`
- Flow property / unit: Mass / kg
- Amount rule: measured copper scrap crossing the foreground boundary
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg accepted reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste_records`
- Sources: `ifc-metal-plastic-rubber-ehs-2007`

###### Polypropylene molding waste (`polypropylene_waste`)

Record PP sprues, purge, flash, and rejected molded PP that leave the process; internal regrind returned to molding is tracked in the material balance and not counted as an external waste output.

- Selected flow: Polypropylene Wastes `88215d1b-e6b6-4ec7-af7f-83375e80637b`
- Flow property / unit: Mass / kg
- Amount rule: measured polypropylene waste crossing the foreground boundary
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg accepted reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste_records`
- Sources: `ifc-metal-plastic-rubber-ehs-2007`

###### Metal-fabrication and finishing wastewater (`metal_finishing_wastewater`)

Record wastewater from the declared cleaning, rinsing, cutting-fluid, blasting, deburring, or surface-finishing route as one route-specific aqueous waste stream; disclose treatment state and key contaminants.

- Selected flow: Metal-fabrication and finishing wastewater (Tiangong UUID unresolved)
- Flow property / unit: Mass / kg
- Amount rule: measured wastewater mass leaving the declared foreground route before external treatment
- Value mode: Foreground record (`foreground_record`)
- Specificity: Route-specific (`route_specific`)
- Normalization basis: per 1 kg accepted reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_wastewater_records`
- Sources: `ifc-metal-plastic-rubber-ehs-2007`

##### Elementary flows

###### Direct fossil carbon dioxide from natural-gas combustion (`fossil_carbon_dioxide`)

Record only direct on-site fossil CO2 from natural gas assigned to the declared process heat; upstream electricity and fuel-supply emissions remain in background datasets.

- Selected flow: carbon dioxide (fossil) `08a91e70-3ddc-11dd-923d-0050c2490048`
- Flow property / unit: Mass / kg
- Amount rule: calculated from recorded natural-gas consumption and the documented geography-, fuel-, and technology-applicable emission factor
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg accepted reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_fuel_records`
- Sources: `ipcc-stationary-combustion-2006`

### Process: Part assembly and outgoing testing (`part_assembly_and_testing`)

#### Inputs

##### Product flows

###### Assembly and test electricity (`assembly_test_electricity`)

Record purchased electricity for assembly equipment, curing not already metered under fabrication, inspection, and electrical or functional testing.

- Selected flow: Electricity `890a70b7-b677-4e2a-8a1b-7d017e0a10ae`
- Flow property / unit: Net calorific value / MJ
- Amount rule: metered assembly and outgoing-test electricity attributable to accepted output and rejects
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg accepted reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_energy_records`
- Sources: `ec-product-environmental-footprint-method-2021`

#### Outputs

##### Product flows

###### Accepted reference product (`reference_product`)

Record only parts that meet the declared drawing, electrical or functional requirements, and outgoing acceptance criteria. Rejected parts are assigned to their constituent waste rows or an additional atomic waste row.

- Selected flow: Separately supplied CPC 46960 electrical machinery or apparatus part (Tiangong UUID unresolved)
- Flow property / unit: Mass / kg
- Amount rule: exactly 1 kg of measured accepted saleable output
- Value mode: Fixed value (`fixed_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: 1 kg accepted reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Method formula (`method_formula`)
- Sources: `ec-product-environmental-footprint-method-2021`

### Process: Saleable factory-gate packaging (`saleable_packaging`)

#### Inputs

##### Product flows

###### Corrugated board boxes (`corrugated_board_boxes`)

Record corrugated board boxes only when they leave the factory with the reference product; exclude returnable boxes retained as facility assets and add separate atomic rows for other packaging components.

- Selected flow: corrugated board boxes `4f197bec-7b3b-11dd-ad8b-0800200c9a66`
- Flow property / unit: Mass / kg
- Amount rule: measured corrugated-box mass issued to accepted saleable output
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg accepted reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material_and_packaging_records`
- Sources: `ec-product-environmental-footprint-method-2021`

## 7. Allocation and Co-product Handling

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `allocation_subdivide_first` | Shared processes and equipment | Avoid allocation by subdividing production steps and using product-specific meters, issue records, machine time, test cycles, and waste records wherever technically feasible. | `ec-product-environmental-footprint-method-2021` |
| `allocation_physical_relation` | Residual shared burdens | When subdivision is infeasible, allocate by a documented physical causal relation such as machine time, energy demand, processed mass, or test duration; use simple mass share only when it reasonably represents the burden driver. | `ec-product-environmental-footprint-method-2021` |
| `allocation_scrap_boundary` | Scrap and internal recycling | Report scrap crossing the foreground boundary with its actual treatment route. Track internal regrind or remelt loops in the mass balance and do not claim an avoided burden unless a separately declared downstream method requires and documents it. | `ec-product-environmental-footprint-method-2021` |
| `allocation_rejects` | Rejected parts | Assign material, energy, water, and treatment burdens of rejected production to the accepted reference product unless the rejected material becomes a documented co-product with a separately justified function and allocation method. | `ec-product-environmental-footprint-method-2021` |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_material_and_packaging_records` | `component_fabrication_and_finishing`; `saleable_packaging` | Copper wire, steel sheet, PP granulate, epoxy resin, and corrugated boxes | Purchase, warehouse issue, return, and stock records | material identity; grade; supplier; lot; opening stock; receipts; issues; returns; closing stock; recycled content | Reconcile product-specific warehouse issues and stock movement to the declared route | kg | Per lot, aggregated monthly | At least 12 representative months or the full production campaign | All reporting-facility lines producing the declared part | Net consumption = opening stock + receipts - closing stock - documented returns; normalize by accepted output | Purchase documents, batch tickets, stock reconciliation, and bill of materials |
| `cp_energy_records` | `component_fabrication_and_finishing`; `part_assembly_and_testing` | Purchased electricity | Submeter, utility meter, and machine record | meter id; opening and closing readings; unit; line; operating hours; part-family output | Prefer submeters; otherwise allocate by a validated causal driver | Metered energy unit | Continuous or each shift, aggregated monthly | Same period as output records | All applicable fabrication, assembly, and test equipment | Subtract documented non-production loads and normalize attributed energy by accepted output | Meter calibration, utility invoice reconciliation, and allocation worksheet |
| `cp_water_and_chemical_records` | `component_fabrication_and_finishing` | Process water and sodium hydroxide | Meter, batch-make-up, purchase, and concentration records | water reading; chemical product mass; concentration; bath id; make-up; discard; route | Meter water and reconcile chemical issues to bath logs | kg; concentration fraction | Per batch or shift, aggregated monthly | Same period as output records | Each applicable cleaning or finishing line | Attribute only route-specific consumption, convert solution/product basis explicitly, and normalize by accepted output | Calibrated meters, bath logs, safety data sheet, purchase record, and reconciliation |
| `cp_fuel_records` | `component_fabrication_and_finishing` | Natural gas and direct fossil CO2 | Fuel meter, invoice, oven log, and emission-factor record | gas volume; reference conditions; net calorific value; equipment; operating time; factor; factor geography and year | Reconcile meters to invoices and assign by measured equipment use | m3; kg CO2 | Continuous or each billing period | Same period as output records | Applicable on-site ovens, dryers, and heat-treatment equipment | Attribute fuel to the route; calculate CO2 under `cr_stationary_combustion_co2`; normalize both by accepted output | Meter/invoice reconciliation and documented factor provenance |
| `cp_waste_records` | `component_fabrication_and_finishing` | Steel scrap, copper scrap, and polypropylene waste | Container weight, transfer, and treatment records | waste identity; tare; gross; net mass; contamination; internal return; destination; treatment | Weigh each segregated stream and reconcile transfers | kg | Each shipment or batch, aggregated monthly | Same period as output records | All route-attributable waste collection points | Count only waste crossing the boundary; normalize by accepted output | Calibrated scale tickets, transfer notes, and internal-reuse ledger |
| `cp_wastewater_records` | `component_fabrication_and_finishing` | Metal-fabrication and finishing wastewater | Flowmeter, tank, batch discharge, and analysis records | volume or mass; density; route; treatment state; discharge time; key contaminants | Meter continuous discharge or measure each batch; retain representative analysis | kg | Continuous or each discharge, aggregated monthly | Same period as output records | Each applicable cleaning and finishing line | Convert volume with documented density where needed and normalize pre-external-treatment mass by accepted output | Meter calibration, discharge log, laboratory report, and treatment record |
| `cp_saleable_output_records` | `part_assembly_and_testing` | Accepted reference product and rejects | Production, scale, inspection, and test records | model; lot; produced count; accepted count; rejected count; net mass; test result; disposition | Weigh accepted output and reconcile with inspection and test disposition | kg | Each lot, aggregated monthly | Same period as all input records | All reporting-facility lines producing the declared part | Sum accepted net mass only; reconcile rejects to waste or rework records | Scale calibration, production order, inspection report, and test record |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `cr_normalize_reference` | Every inventory row | Normalized amount = route-attributed row amount / accepted reference-product mass. | Row amount; accepted mass from `cp_saleable_output_records` | Amount per 1 kg accepted reference product | `ec-product-environmental-footprint-method-2021` |
| `cr_net_material_use` | Material and packaging inputs | Net use = opening stock + receipts - closing stock - documented returns; reconcile the result to product, waste, emissions, and stock change. | Stock and issue fields from `cp_material_and_packaging_records` | Net input mass | `ec-product-environmental-footprint-method-2021` |
| `cr_stationary_combustion_co2` | `fossil_carbon_dioxide` | Direct CO2 = attributed fuel consumption × compatible documented CO2 emission factor; convert volume to energy only with recorded net calorific value and reference conditions. | Natural-gas consumption; net calorific value if needed; applicable CO2 factor | kg fossil CO2 | `ipcc-stationary-combustion-2006` |
| `cr_mass_balance` | Fabrication and assembly | For each principal material, reconcile input = accepted product content + external waste + documented emissions + closing work-in-process - opening work-in-process; investigate unexplained imbalance. | Material records; accepted output; scrap; emissions; work-in-process | Material-specific balance and unexplained difference | `ec-product-environmental-footprint-method-2021` |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_product_identity` | Reference product | Identify one part family, model or drawing, host-apparatus application, material specification, rating, test criteria, route, and market state. | Drawing, bill of materials, specification, inspection record, and dataset metadata |
| `dq_primary_data` | Foreground manufacturing | Use product- or route-specific primary data for the bill of materials and manufacturing activity; document every allocation from shared facility totals. | Meters, issue records, production orders, allocation worksheet, and responsible-person approval |
| `dq_temporal_alignment` | All foreground rows | Use the same representative period for inputs, outputs, wastes, and accepted production, normally at least 12 months or the full campaign; explain shutdowns and abnormal batches. | Period reconciliation and production calendar |
| `dq_completeness` | Inventory | Reconcile the full bill of materials and add one atomic row for every other actual material, component, chemical, packaging item, waste, or direct elementary flow not represented by the common rows above. | Bill-of-material crosswalk, flow ledger, mass balance, and documented exclusions |
| `dq_representativeness` | Upstream datasets and factors | Record technological, geographical, and time representativeness and disclose every proxy, unresolved UUID, factor source, and treatment-state assumption. | Dataset metadata, source record, proxy rationale, and data-quality assessment |

## 9. Validation Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `validation_reference_identity` | Reference flow | Fail validation if the part family, model or drawing, host application, specification, rating where applicable, route, market state, accepted output mass, or packaging state is missing. | `un-cpc-3-structure-2025`; `un-cpc-3-explanatory-notes-2025` |
| `validation_inventory_completeness` | Bill of materials and process inventory | Confirm that every actual bill-of-material, energy, water, chemical, packaging, waste, and direct-emission exchange has one atomic row and that exclusions are justified. | `ec-product-environmental-footprint-method-2021` |
| `validation_route_conditions` | Conditional processes and flows | Confirm each conditional row is either supported by production evidence or explicitly not applicable; do not silently omit finishing, combustion, wastewater, scrap, or packaging. | `ifc-metal-plastic-rubber-ehs-2007` |
| `validation_balances` | Material and activity data | Reconcile accepted output, rejects, work-in-process, principal materials, fuel, and shared-meter allocations for the same period; investigate material unexplained differences and invoice/meter gaps. | `ec-product-environmental-footprint-method-2021` |
| `validation_combustion` | Natural gas and direct fossil CO2 | When natural gas is combusted, require a compatible emission factor, net calorific value or direct mass/volume basis, equipment assignment, and matching direct fossil-CO2 row. | `ipcc-stationary-combustion-2006` |
| `validation_uuid_integrity` | Tiangong identities | Use only directly audited state-100 exact UUIDs; keep `reference_product`, `low_carbon_steel_sheet`, and `metal_finishing_wastewater` unresolved until exact classification-, state-, property-, unit-, and bilingual-consistent records exist. |  |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | Product- and route-specific cradle-to-factory-gate inventory dataset for one separately supplied CPC 46960 electrical part |
| downstream_use | `secondary_dataset`; `background_dataset` |
| allowed_use | Modelling a declared part as an input to a host apparatus or comparing production scenarios for the same functionally and technically equivalent part under aligned boundaries |
| excluded_use | Representing complete apparatus; inferring distribution, use, service life, maintenance, or end-of-life; comparing unlike part families or electrical functions without a separately justified functional equivalence |
| required_metadata | Canonical PCR id and version when published; part family and drawing/model; host application; mass per item; material specification and bill of materials; ratings and test criteria; route; facility and supplier geography; reference period; accepted yield and rejects; allocation; upstream datasets; packaging state; unresolved identities and proxies |
| required_quality_disclosure | Primary-data share; meter and scale coverage; temporal, technological, and geographical representativeness; mass-balance result; allocation drivers; missing flows; data gaps; uncertainty; factor provenance; internal recycling and external waste treatment |
| update_trigger | Change in part design, bill of materials, supplier or recycled content, production or finishing route, test regime, facility energy or water system, allocation driver, packaging, factor, upstream dataset, or a material data-quality gap |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `un-cpc-3-structure-2025` | `official_guidance` | United Nations Statistics Division, CPC Version 3.0 Structure, 30 June 2025, https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Structure_30Jun2025.csv (retrieved 2026-09-05) | Official CPC 46960 identity and referenced subclass titles |
| `un-cpc-3-explanatory-notes-2025` | `official_guidance` | United Nations Statistics Division, CPC Version 3.0 Explanatory Notes, 30 June 2025, subclass 46960, https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Exp_Notes_30Jun2025.pdf (retrieved 2026-09-05) | Product-boundary identity and classification interpretation |
| `ifc-metal-plastic-rubber-ehs-2007` | `official_guidance` | World Bank Group / IFC, Environmental, Health, and Safety Guidelines for Metal, Plastic, and Rubber Products Manufacturing, 30 April 2007, https://www.ifc.org/content/dam/ifc/doc/2000/2007-metal-plastic-rubber-products-ehs-guidelines-en.pdf (retrieved 2026-09-05) | Material-processing scope; forming, cleaning, finishing, wastewater, scrap, and direct-emission process decomposition |
| `ec-product-environmental-footprint-method-2021` | `official_guidance` | European Commission Recommendation (EU) 2021/2279, Annex I, Product Environmental Footprint Method, https://environment.ec.europa.eu/system/files/2021-12/Annexes%201%20to%202.pdf (retrieved 2026-09-05) | Declared unit, product-specific bill of materials, company-specific activity data, boundary completeness, subdivision, allocation, primary-data collection, and data quality |
| `ipcc-stationary-combustion-2006` | `method_factor` | IPCC, 2006 Guidelines for National Greenhouse Gas Inventories, Volume 2, Chapter 2: Stationary Combustion, https://www.ipcc-nggip.iges.or.jp/public/2006gl/pdf/2_Volume2/V2_2_Ch2_Stationary_Combustion.pdf (retrieved 2026-09-05) | Direct stationary-combustion CO2 calculation from fuel consumption and compatible emission factors |
