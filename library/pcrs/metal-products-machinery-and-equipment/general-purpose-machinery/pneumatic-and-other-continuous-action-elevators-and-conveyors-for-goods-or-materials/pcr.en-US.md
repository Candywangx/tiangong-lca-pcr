---
pcr_id: pcr.metal-products-machinery-and-equipment.general-purpose-machinery.pneumatic-and-other-continuous-action-elevators-and-conveyors-for-goods-or-materials
language: en-US
status: candidate
content_maturity: authored_methodology
translation_status: canonical
sync_with: pcr.zh-CN.md
---

# Pneumatic and other continuous action elevators and conveyors, for goods or materials

## 1. Scope and Applicability

This PCR applies to cradle-to-gate manufacture of complete general-purpose pneumatic and other continuous-action elevators and conveyors that move bulk materials or unit loads. It covers material preparation, fabrication, route-specific surface finishing, assembly and controls integration, factory acceptance testing, and supplied packing through the manufacturer's factory gate.

The category includes pneumatic conveying systems and continuously operating belt, chain, screw, apron, vibrating, bucket-elevator, overhead, or functionally comparable conveying equipment when sold as complete equipment. Purchased motors, gearboxes, belts, controls, housings, piping, and structural members are inputs to the equipment system, not alternative reference products.

This PCR excludes passenger lifts, escalators and moving walkways; intermittent cranes, hoists, forklifts, and industrial robots; pumps and liquid elevators; conveyor belting sold separately; underground-use conveying equipment designed as a distinct special-purpose product; installation at the customer site; distribution after the factory gate; operation, maintenance, replacement parts, and end-of-life. A study that adds any excluded stage shall report it as a separate module and shall not merge it into the cradle-to-gate result.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.metal-products-machinery-and-equipment.general-purpose-machinery.pneumatic-and-other-continuous-action-elevators-and-conveyors-for-goods-or-materials |
| classification_refs | CPC 3.0: 43550, exact |
| covered_products | Complete general-purpose pneumatic conveying systems and continuous-action belt, chain, screw, apron, vibrating, bucket-elevator, overhead, or comparable conveyors for bulk materials or unit loads |
| excluded_products | Passenger lifts, escalators, moving walkways, intermittent lifting or handling machinery, pumps and liquid elevators, separately sold components, and underground-use special-purpose conveyors |
| representative_product | A complete powered conveyor system supplied with its structural frame, conveying mechanism, drives, guards, controls, and declared factory-supplied accessories |
| production_route | Purchased material and component receipt; cutting and fabrication; conditional surface finishing; mechanical and electrical assembly; factory acceptance testing; conditional packing |
| market_state | Complete new equipment at the manufacturer's factory gate, ready for shipment and identified by model and configuration |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Provision of new complete equipment that continuously conveys the declared goods or material between declared inlet and discharge points |
| How much | 1,000 kg of finished, saleable equipment at the manufacturer's factory gate |
| How well | The declared equipment configuration meets its specified conveying capacity, conveying route, lift or horizontal distance, material or unit-load characteristics, power supply, controls, and applicable factory acceptance criteria |
| How long or cycle | One factory-gate equipment product; design service life and duty class are declared but do not change the cradle-to-gate mass normalization |
| reference_flow_link | The functional unit is realized by 1,000 kg of the reference product flow |

| Field | Value |
| --- | --- |
| Reference amount | 1,000 kg |
| Reference product flow | Pneumatic and other continuous action elevators and conveyors, for goods or materials `f7693db3-d2af-46be-88aa-8d3a4a4aa276` |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | conveyor technology; handled material or unit-load type and relevant properties; rated capacity; conveying length; lift height or route profile; duty class and operating mode; drive and power supply; control scope; equipment mass; included accessories and guards; surface-protection system; factory acceptance criteria; design service life; factory location and reporting period |

When constructing a foreground data package, the items listed in `Required qualifiers` must be declared in dataset metadata, process notes, reference flow comment, product description, or an equivalent data package field. Missing required qualifiers make the reference flow definition incomplete for that data package.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| `mu_reference_mass` | Reference product and all mass-normalized inventory rows | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Determine finished equipment mass for the declared saleable configuration, including factory-supplied guards, controls, accessories, lubricants, and packing only where the packing remains with the delivered product; normalize all rows to 1,000 kg of unpacked equipment and report packing separately. |
| `mu_energy_conversion` | Electricity rows | Net calorific value `93a60a56-a3c8-11da-a746-0800200b9a66` | MJ | Preserve metered electricity in its source unit and convert kWh to MJ using 1 kWh = 3.6 MJ; do not combine electricity with fuel or compressed-air consumption. |
| `mu_gas_reference_conditions` | Natural gas, industrial oxygen, and compressed air rows | Volume `93a60a56-a3c8-22da-a746-0800200c9a66` | m3 | Report volume at the supplier or meter reference temperature and pressure, disclose those conditions, and convert only with documented composition, density, temperature, and pressure data. |
| `mu_bom_mass` | Purchased materials and components | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Use received mass assigned to the declared model or a documented bill-of-materials mass; reconcile reusable or returned items separately and avoid assigning a catalogue mass without configuration evidence. |

## 5. System Boundary

The foreground boundary starts when purchased materials, components, fuels, utilities, and packing materials cross the reporting manufacturing site's gate. It ends when the complete tested product and its separately reported supplied packing leave the factory gate. Upstream production is represented by supplier-specific or otherwise representative upstream datasets linked to each product input.

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Purchased materials and components at the manufacturing-site gate, with supplier, grade or model, product state, mass, and upstream dataset identity recorded |
| starting_condition_role | Foreground receipt boundary for cradle-to-gate equipment manufacture |
| product_classification_scope | Complete general-purpose pneumatic and other continuous-action elevators and conveyors for bulk materials or unit loads |
| recursive_input_rule | If a purchased input is itself complete equipment within this PCR boundary, record it once as a product input with a separate upstream dataset and do not recursively apply this PCR inside the same foreground process |
| upstream_dataset_requirement | Each purchased product, fuel, electricity supply, and packing material shall link to a geographically and technologically representative upstream dataset; proxies shall be identified and justified |
| disclosure | Declare factory location, reporting period, model and configuration, make-versus-buy boundary, included accessories, equipment mass, technology route, surface treatment, test scope, packing scope, cut-offs, proxy datasets, and excluded life-cycle stages |

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `sb_cradle_to_gate` | foreground_system | Include all on-site material preparation, fabrication, finishing, assembly, testing, rework, and packing attributable to saleable equipment through the factory gate; separately identify outsourced operations and link their upstream datasets. |  |
| `sb_route_condition` | conditional_processes | Include only route-specific processes and exchanges that occurred for the declared equipment configuration; mark a conditional row not applicable only with production records showing the route was absent. |  |
| `sb_safety_test_boundary` | factory_acceptance_testing | Include energy and test media used for factory functional and safety tests and retain the risk assessment, acceptance procedure, and results for the declared product. | eu-machinery-regulation-2023-1230 |
| `sb_cutoff` | all_foreground_exchanges | Do not omit a listed exchange. Other exchanges may be excluded only when the data package reports their identity, estimated mass or energy relevance, environmental relevance, and reason for exclusion; hazardous and legally controlled releases shall not be cut off solely by mass. | eu-machinery-regulation-2023-1230 |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| `material_fabrication` | Material preparation and fabrication | `required` | Always included for the declared manufactured equipment | Foreground manufacture of frames, housings, chutes, piping, supports, and other fabricated members | 1,000 kg finished equipment |
| `surface_finishing` | Surface preparation and finishing | `conditional` | Included when coating, washing, curing, plating, or another surface-protection operation is performed by the reporting site or an attributable subcontractor | Foreground or linked outsourced surface protection | 1,000 kg finished equipment |
| `assembly_controls` | Mechanical assembly and controls integration | `required` | Always included; individual drive and conveying components apply only when present in the saleable configuration | Foreground assembly of the complete equipment system | 1,000 kg finished equipment |
| `testing_packing` | Factory acceptance testing and packing | `required` | Always include factory acceptance testing; include each packing input only when supplied with the product | Foreground test, release, and preparation for shipment | 1,000 kg finished equipment |

### Process: Material preparation and fabrication (`material_fabrication`)

#### Inputs

##### Product flows

###### Carbon-steel plate input (`carbon_steel_plate`)

Carbon-steel plate crosses the site boundary for frames, housings, chutes, supports, or other fabricated members. Record the grade-specific received or bill-of-materials mass; the exact Tiangong flow UUID remains unresolved.

- Selected flow: Carbon steel plate
- Flow property / unit: Mass / kg
- Amount rule: Measured received mass assigned to the declared equipment configuration, adjusted for documented opening and closing stock
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1,000 kg finished equipment
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_fabrication_materials`
- Sources:

###### Fabrication electricity (`fabrication_electricity`)

Electricity powers cutting, forming, welding, machining, extraction, and supporting fabrication operations within the reporting boundary.

- Selected flow: Electricity `67b723a9-6f63-4802-adca-b52ce7967d47`
- Flow property / unit: Net calorific value / MJ
- Amount rule: Metered electricity attributable to fabrication, converted from kWh where necessary
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg finished equipment
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_fabrication_energy`
- Sources:

###### Industrial oxygen for cutting (`cutting_oxygen`)

Industrial oxygen crosses the boundary when oxy-fuel cutting or another documented fabrication operation consumes it. Mark the row not applicable only when the declared fabrication route uses no oxygen.

- Selected flow: Industrial oxygen `bd4b0f96-2090-4806-a648-335ab20ff401`
- Flow property / unit: Volume / m3
- Amount rule: Supplier delivery or flow-meter volume attributable to applicable fabrication operations at declared reference conditions
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1,000 kg finished equipment
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_fabrication_materials`
- Sources:

###### Fabrication process water (`fabrication_process_water`)

Process water crosses the boundary when water-based cutting, cleaning, leak testing, or another fabrication operation consumes it. Do not use this row for once-through cooling water with a separately metered return.

- Selected flow: Process Water `94a04f7e-2d5c-41f0-b182-d54a3b373a02`
- Flow property / unit: Mass / kg
- Amount rule: Metered or invoiced process-water mass attributable to fabrication, using a documented density conversion when the source record is volumetric
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1,000 kg finished equipment
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_fabrication_materials`
- Sources:

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

##### Waste flows

###### Ferrous fabrication scrap (`steel_scrap`)

Steel scrap leaves fabrication for internal recovery, external recycling, or treatment. Record the measured outgoing mass and destination without crediting avoided primary steel in the foreground process.

- Selected flow: Steel scrap `8658611f-0588-4eb7-9490-46bcd02b3c2f`
- Flow property / unit: Mass / kg
- Amount rule: Weighed or documented ferrous scrap leaving the fabrication process, net of internally reused offcuts
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg finished equipment
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_fabrication_scrap`
- Sources:

##### Elementary flows

### Process: Surface preparation and finishing (`surface_finishing`)

#### Inputs

##### Product flows

###### Powder-coating input (`powder_coating`)

Powder coating crosses the boundary when it is applied to the declared equipment. Record formulation, supplier, colour, reclaimed overspray treatment, and applied-route applicability.

- Selected flow: Powder Coating `0c581697-0eed-4b86-a070-b94966eb7344`
- Flow property / unit: Mass / kg
- Amount rule: Issued powder mass less documented returned reusable powder, assigned to the declared equipment configuration
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1,000 kg finished equipment
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_finishing_inputs`
- Sources:

###### Surface-finishing electricity (`finishing_electricity`)

Electricity powers pretreatment, extraction, coating application, curing auxiliaries, and other included finishing operations.

- Selected flow: Electricity `67b723a9-6f63-4802-adca-b52ce7967d47`
- Flow property / unit: Net calorific value / MJ
- Amount rule: Metered electricity attributable to included surface-finishing operations
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg finished equipment
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_finishing_energy`
- Sources:

###### Natural gas for curing (`curing_natural_gas`)

Gaseous natural gas crosses the boundary when an on-site curing or drying oven burns it. Record fuel composition, supplier, reference conditions, and metered volume; mark not applicable for non-gas routes.

- Selected flow: natural gas in the gaseous state `4f19ca0e-7b3b-11dd-ad8b-0800200c9a66`
- Flow property / unit: Volume / m3
- Amount rule: Metered natural-gas volume attributable to included curing or drying operations at declared reference conditions
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1,000 kg finished equipment
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_curing_gas`
- Sources:

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

##### Waste flows

##### Elementary flows

###### Direct fossil carbon dioxide from curing (`curing_fossil_co2`)

Direct fossil carbon dioxide crosses the elementary boundary when gaseous natural gas is burned on site for curing or drying. Do not include upstream electricity or fuel-supply emissions in this row.

- Selected flow: carbon dioxide (fossil) `08a91e70-3ddc-11dd-923d-0050c2490048`
- Flow property / unit: Mass / kg
- Amount rule: Calculated from metered natural gas and documented fuel carbon composition using complete carbon-to-carbon-dioxide mass balance, adjusted for measured unburned carbon where applicable
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1,000 kg finished equipment
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_curing_gas`
- Sources:

### Process: Mechanical assembly and controls integration (`assembly_controls`)

#### Inputs

##### Product flows

###### Installed electric motor (`electric_motor`)

The electric motor crosses the assembly boundary when it is supplied as part of the saleable equipment. Record manufacturer, model, rated output, efficiency class, motor type, and installed mass.

- Selected flow: Electric motor `014f80a3-c257-425b-9b75-3e5a18573695`
- Flow property / unit: Mass / kg
- Amount rule: Bill-of-materials or weighed installed motor mass in the declared equipment configuration
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1,000 kg finished equipment
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_assembly_bom`
- Sources:

###### Installed industrial gearbox (`industrial_gearbox`)

An industrial gearbox crosses the assembly boundary when the mechanical conveying route includes a gearbox. Record gearbox model, ratio, rated torque, lubricant inclusion, and installed mass; the exact Tiangong flow UUID remains unresolved.

- Selected flow: Industrial gearbox
- Flow property / unit: Mass / kg
- Amount rule: Bill-of-materials or weighed installed gearbox mass in the declared equipment configuration
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1,000 kg finished equipment
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_assembly_bom`
- Sources:

###### Installed rubber conveyor belt (`rubber_conveyor_belt`)

Vulcanized-rubber conveyor belting crosses the assembly boundary only for belt-based configurations. Record carcass, cover compound, width, length, thickness, supplier, and installed mass.

- Selected flow: Conveyor or transmission belts or belting, of vulcanized rubber `1e587e97-03a2-4c50-8226-f8446a1dd1d9`
- Flow property / unit: Mass / kg
- Amount rule: Bill-of-materials or weighed installed conveyor-belt mass in the declared belt-conveyor configuration
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1,000 kg finished equipment
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_assembly_bom`
- Sources:

###### Assembly electricity (`assembly_electricity`)

Electricity powers mechanical assembly, electrical integration, fastening, local lifting, and assembly-area tools attributable to the declared equipment.

- Selected flow: Electricity `67b723a9-6f63-4802-adca-b52ce7967d47`
- Flow property / unit: Net calorific value / MJ
- Amount rule: Metered or allocated assembly electricity supported by equipment hours or production records
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg finished equipment
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_assembly_energy`
- Sources:

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

##### Waste flows

##### Elementary flows

### Process: Factory acceptance testing and packing (`testing_packing`)

#### Inputs

##### Product flows

###### Compressed air for testing (`test_compressed_air`)

Compressed air crosses the test boundary when pneumatic conveying performance, actuation, leakage, or cleaning is tested. Record pressure, air quality, reference conditions, test duration, and metered volume.

- Selected flow: Compressed air `46e2b1e4-5a4e-4579-b6a2-65b03f9ce825`
- Flow property / unit: Volume / m3
- Amount rule: Metered compressed-air volume attributable to the declared equipment's factory tests at declared reference conditions
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1,000 kg finished equipment
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_test_media`
- Sources:

###### Factory-test electricity (`testing_electricity`)

Electricity powers unloaded and loaded functional tests, control verification, safety-function tests, and documented re-tests before release.

- Selected flow: Electricity `67b723a9-6f63-4802-adca-b52ce7967d47`
- Flow property / unit: Net calorific value / MJ
- Amount rule: Metered electricity for factory acceptance tests and attributable re-tests
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1,000 kg finished equipment
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_test_energy`
- Sources:

###### Supplied wooden packing crate (`wooden_packing_crate`)

A wooden packing case or crate crosses the boundary only when it is supplied with the equipment. Record wood product type, treatment, reusable-return status, and supplied mass.

- Selected flow: Packing cases, boxes, crates, drums and similar packings, of wood, cable-drums of wood `39feb4f9-43da-4106-aa3c-f52afb654078`
- Flow property / unit: Mass / kg
- Amount rule: Weighed or supplier-documented mass of wooden packing cases or crates supplied with the declared equipment
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1,000 kg finished equipment
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packing_materials`
- Sources:

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Finished conveyor equipment (`reference_product`)

The complete tested and released equipment is the reference product. Record unpacked saleable mass; supplied packing remains a separate input row.

- Selected flow: Pneumatic and other continuous action elevators and conveyors, for goods or materials `f7693db3-d2af-46be-88aa-8d3a4a4aa276`
- Flow property / unit: Mass / kg
- Amount rule: 1,000 kg unpacked finished equipment after normalization from the measured saleable configuration mass
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: 1,000 kg reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_product_mass`
- Sources:

##### Waste flows

##### Elementary flows

## 7. Allocation and Co-product Handling

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `al_subdivide` | multi_product_manufacturing | Prefer direct metering, work-order records, and process subdivision to assign materials, energy, test media, scrap, and outsourced operations to the declared equipment configuration. |  |
| `al_physical` | residual_shared_inputs | When subdivision is not feasible, allocate shared material-processing and energy inputs using a documented physical driver such as machine time, processed mass, weld length, coating area, or test duration that causally represents consumption. |  |
| `al_economic_last_resort` | residual_shared_overheads | Use economic allocation only when no defensible physical driver exists; disclose the value basis, currency year, product mix, sensitivity result, and fraction assigned to the reference product. |  |
| `al_scrap` | ferrous_scrap_and_recycling | Report scrap at the point it leaves the foreground process with its measured mass and destination. Do not subtract an avoided-primary-material credit from the foreground inventory; any recycling benefit belongs to a separately declared downstream modelling convention. |  |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_fabrication_materials` | `material_fabrication` | carbon-steel plate, industrial oxygen, and process water inputs | Goods receipts, issue records, flow meters, and stock records | flow identity; grade or purity; supplier; quantity; unit; reference conditions for gases; opening stock; closing stock; work order | Reconcile receipts plus opening stock minus closing stock and documented transfers to the declared work order | kg or m3 as required by the row | Per receipt or meter interval, aggregated per work order | Representative production period covering the declared model | All fabrication areas and attributable subcontractors | Sum attributable quantities, convert under section 4, then normalize to 1,000 kg finished equipment | Supplier documents, calibrated meter records, stock reconciliation, and work-order traceability |
| `cp_fabrication_energy` | `material_fabrication` | fabrication electricity | Submeter or facility electricity records and machine-hour allocation | meter start; meter end; kWh; machine; work order; operating hours; allocation driver | Prefer dedicated metering; otherwise allocate documented area or machine consumption using operating hours | kWh retained and converted to MJ | Meter interval not longer than one month | At least one representative continuous production year or the full campaign | Reporting site's fabrication operations | Subtract excluded loads, assign by causal driver, convert to MJ, and normalize to 1,000 kg finished equipment | Meter calibration, invoice reconciliation, and allocation worksheet |
| `cp_fabrication_scrap` | `material_fabrication` | ferrous fabrication scrap | Scales, scrap tickets, and internal reuse records | scrap identity; mass; date; work order; destination; internally reused offcuts | Weigh outgoing scrap and subtract documented internal reuse without avoided-production credit | kg | Per shipment or production lot | Same period as material inputs | All fabrication scrap collection points | Sum attributable outgoing ferrous scrap and normalize to 1,000 kg finished equipment | Calibrated scale record, recycler ticket, and mass-balance reconciliation |
| `cp_finishing_inputs` | `surface_finishing` | powder-coating input | Stores issue and return records | product identity; formulation; issued mass; returned reusable mass; work order; date | Net issued mass assigned to the declared work order | kg | Per batch or work order | Full finishing campaign for the declared model | On-site and attributable outsourced finishing | Issued mass minus documented reusable return, normalized to 1,000 kg finished equipment | Supplier specification, batch record, and stock reconciliation |
| `cp_finishing_energy` | `surface_finishing` | finishing electricity | Submeter and equipment-run records | kWh; line; work order; operating time; standby time | Dedicated meter or causal allocation by line operating time | kWh retained and converted to MJ | Per meter interval or batch | Full finishing campaign for the declared model | Included on-site finishing line | Subtract unrelated loads, convert to MJ, and normalize to 1,000 kg finished equipment | Meter calibration and batch-to-work-order traceability |
| `cp_curing_gas` | `surface_finishing` | curing natural gas and direct fossil carbon dioxide | Gas meter, supplier composition, and oven run records | m3; reference temperature; reference pressure; fuel composition; fossil carbon fraction; work order; operating time | Meter fuel attributable to curing and retain supplier composition needed for carbon balance | m3 for gas and kg for calculated carbon dioxide | Per meter interval or batch | Full applicable curing campaign | Included on-site gas-fired curing equipment | Normalize metered gas; calculate fossil carbon dioxide by carbon balance; normalize both to 1,000 kg finished equipment | Meter calibration, supplier fuel certificate, run log, and calculation worksheet |
| `cp_assembly_bom` | `assembly_controls` | installed motor, gearbox, and conveyor belt | Released bill of materials, supplier records, and as-built configuration | component identity; model; specification; quantity; unit mass; installed mass; serial or lot; work order | Reconcile released bill of materials to as-built records and weigh when catalogue mass is configuration-dependent | kg | Per equipment configuration | All declared equipment units in the reporting sample | Reporting site and attributable preassembly | Sum installed mass by atomic component flow and normalize to 1,000 kg finished equipment | Approved bill of materials, as-built release, and supplier specification |
| `cp_assembly_energy` | `assembly_controls` | assembly electricity | Submeter and tool or work-centre records | kWh; work centre; work order; operating hours; allocation driver | Dedicated meter or causal allocation by work-centre operating hours | kWh retained and converted to MJ | Meter interval not longer than one month | Representative production period | All included assembly and controls-integration areas | Assign attributable electricity, convert to MJ, and normalize to 1,000 kg finished equipment | Meter calibration, invoice reconciliation, and work-centre log |
| `cp_test_media` | `testing_packing` | compressed air for testing | Flow meter and test record | m3; pressure; temperature; air quality; test id; equipment id; duration | Meter test air at the point of use and document reference-condition conversion | m3 | Per test | All acceptance tests and attributable re-tests in the reporting sample | Factory acceptance test area | Sum attributable volume at declared conditions and normalize to 1,000 kg finished equipment | Meter calibration and signed test record |
| `cp_test_energy` | `testing_packing` | factory-test electricity | Test-bay submeter and test record | kWh; test id; equipment id; operating mode; duration; re-test reason | Read dedicated test-bay meter for each test or allocate by documented test duration and power | kWh retained and converted to MJ | Per test | All acceptance tests and attributable re-tests in the reporting sample | Factory acceptance test area | Sum attributable electricity, convert to MJ, and normalize to 1,000 kg finished equipment | Meter calibration and signed acceptance record |
| `cp_packing_materials` | `testing_packing` | wooden packing crate | Packing list, supplier record, and scale | packing identity; material; treatment; reuse status; mass; equipment id | Weigh supplied packing or use supplier mass verified against packing configuration | kg | Per packed equipment unit | All supplied packing in the reporting sample | Final packing area and supplier-packed modules | Sum supplied crate mass and normalize to 1,000 kg finished equipment | Packing list, supplier specification, and scale record |
| `cp_product_mass` | `testing_packing` | finished reference product | Final scale, shipping record, and released configuration | equipment id; model; configuration; unpacked mass; packing mass; release status; date | Weigh released equipment without supplied packing or reconcile verified component masses when direct weighing is impracticable | kg | Per saleable equipment unit | All declared units or a justified representative sample | Final release point at the reporting factory | Sum unpacked saleable mass and normalize all inventory to exactly 1,000 kg reference product | Calibrated scale certificate, release record, and packing-mass reconciliation |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_normalize_mass` | all_inventory_rows | normalized amount = attributable period or work-order amount / unpacked saleable equipment mass × 1,000 kg | attributable row amount; unpacked saleable equipment mass | amount per 1,000 kg reference product |  |
| `calc_electricity_mj` | electricity_rows | electricity MJ = metered kWh × 3.6 MJ/kWh | metered electricity in kWh | electricity in MJ |  |
| `calc_gas_conditions` | volumetric_gas_rows | Convert volume only when source and target temperature, pressure, and compressibility treatment are documented; otherwise retain and disclose meter reference conditions | metered volume; temperature; pressure; gas identity; conversion method | m3 at declared conditions |  |
| `calc_fossil_co2` | `curing_fossil_co2` | direct fossil CO2 mass = combusted fossil carbon mass × 44/12, adjusted for measured fossil carbon leaving unoxidized | metered natural gas; gas composition; fossil carbon fraction; measured unburned carbon where applicable | kg fossil CO2 per 1,000 kg finished equipment |  |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_identity` | reference product and purchased components | Retain model, configuration, supplier, grade or specification, product state, UUID where resolved, and the exact bill-of-materials or receipt link; document unresolved UUIDs without substituting a proxy. | Released configuration, supplier document, bill of materials, and UUID audit |
| `dq_temporal` | all foreground records | Use a representative continuous 12-month period when production is continuous, or the complete declared campaign for project manufacture; disclose shutdowns, atypical rework, and sample coverage. | Meter intervals, work orders, production calendar, and coverage calculation |
| `dq_mass_balance` | materials, scrap, packing, and reference product | Reconcile input material mass to product, outgoing scrap, returned stock, documented inventory change, and other identified outputs at the finest practical work-order or period level. | Signed mass-balance worksheet and stock reconciliation |
| `dq_metering` | electricity, gases, water, and test media | Retain meter identity, calibration status, reading interval, allocation basis, unit conversion, and reference conditions where volumetric. | Calibration certificate, raw meter readings, invoices, and conversion worksheet |
| `dq_performance` | factory acceptance testing | Retain declared capacity, route, lift or distance, load or conveyed material, power and control settings, acceptance limits, safety-function checks, deviations, and signed results; for applicable idler belt conveyors, document the capacity and power calculation method. | Signed test procedure and report; ISO 5048:1989 where applicable; ISO 12100:2010 and applicable legal conformity documentation |
| `dq_completeness` | all foreground exchanges | Check purchase, waste, environmental, maintenance, and incident records for additional atomic exchanges; quantify or explicitly justify every exclusion and do not use a generic utility, waste, or emission collection label as an inventory row. | Completeness checklist, record reconciliation, and exclusion log |

## 9. Validation Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `vr_reference` | reference_flow | Confirm the reference product UUID, mass property, mass unit group, exact 1,000 kg normalization, and all required qualifiers; reject packed mass substituted for unpacked equipment mass. | un-cpc-3-0-structure-2025 |
| `vr_inventory` | process_inventory | Confirm every row is one atomic exchange, each UUID-bearing row matches the declared flow type, property, unit group, and official Chinese name, and every unresolved row appears in manifest review metadata. |  |
| `vr_mass_balance` | material_fabrication_and_packing | Confirm carbon-steel plate, steel scrap, returned stock, installed mass, supplied packing, and reference product are reconciled without an unreported recycling credit. |  |
| `vr_energy_separation` | energy_and_test_media | Confirm electricity, natural gas, and compressed air are separately metered or causally allocated, use their declared properties and units, and are not combined into one utility row. |  |
| `vr_route` | conditional_rows | Confirm each conditional exchange is supported by the declared technology route and production records; do not apply belt, gas-curing, oxygen-cutting, compressed-air, or wooden-crate rows to an absent route. |  |
| `vr_performance_safety` | factory_acceptance_testing | Confirm functional and safety acceptance evidence covers the declared configuration, reasonably foreseeable use, control and stopping functions, safe blockage handling, and declared conveying performance; document deviations and re-tests. | eu-machinery-regulation-2023-1230 |
| `vr_disclosure` | published_dataset | Confirm required metadata, temporal and site coverage, allocation drivers, upstream dataset links, proxies, cut-offs, outsourced operations, noise and hazardous-substance emission information where applicable, and excluded stages are disclosed. | eu-machinery-regulation-2023-1230 |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | `secondary_dataset`; may serve as `background_dataset` after methodology review and publication |
| downstream_use | Foreground process and lifecycle-model projections for cradle-to-gate manufacture of the declared complete conveying equipment configuration |
| allowed_use | Comparison or modelling of equipment configurations with equivalent reference mass, factory-gate boundary, functional qualifiers, technology route, geography, time period, data quality, and allocation basis |
| excluded_use | Direct comparison of conveying service efficiency without matched capacity, route, duty cycle, service life, use-phase energy, maintenance, and end-of-life; passenger lifting, intermittent lifting machinery, pumps, separately sold parts, or underground-only equipment |
| required_metadata | PCR id and version; equipment model and configuration; conveyor technology; handled material or unit-load specification; rated capacity; conveying length and lift or route profile; duty class; drive, power and controls; included accessories; unpacked mass; surface finish; test scope; design service life; factory geography; reporting period; make-versus-buy boundary; packing; allocation; cut-offs; upstream datasets; unresolved UUIDs |
| required_quality_disclosure | Primary-data share; meter and scale calibration; temporal and site coverage; sampling; mass-balance closure; causal allocation drivers; supplier-data age; proxy datasets; test conditions and results; rework; exclusions; uncertainty and unresolved evidence needs |
| update_trigger | Material change in equipment boundary, dominant material or component design, drive or conveying technology, factory route, energy supply, surface treatment, test protocol, packing, geography, allocation method, upstream dataset, or evidence that changes a material inventory result |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `un-cpc-3-0-structure-2025` | `official_guidance` | United Nations Statistics Division, CPC Version 3.0 Structure, 30 June 2025, https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Structure_30Jun2025.csv (retrieved 2026-06-23; SHA-256 `5cd2c1c4890dd6be16af48e9bb940fed48efff9865f39ff15edaa921da25fb7c`) | CPC 43550 classification identity and separation from adjacent lifting, other handling, and parts categories |
| `eu-machinery-regulation-2023-1230` | `official_guidance` | Regulation (EU) 2023/1230 of the European Parliament and of the Council on machinery, https://eur-lex.europa.eu/eli/reg/2023/1230/oj (accessed 2026-09-05) | Safety integration, functional testing, technical instructions, blockage handling, control safety, and applicable noise and hazardous-substance emission disclosure |
