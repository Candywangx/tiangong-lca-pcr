---
schema_version: 1
pcr_id: pcr.metal-products-machinery-and-equipment.general-purpose-machinery.filtering-or-purifying-machinery-and-apparatus-for-liquids-or-gases-except-oil-filters-576ef38e
language: en-US
status: candidate
content_maturity: authored_methodology
translation_status: canonical
sync_with: pcr.zh-CN.md
---

# Filtering or purifying machinery and apparatus, for liquids or gases, except oil filters, petrol filters and air intake filters for internal combustion engines

## 1. Scope and Applicability

This PCR applies to complete machinery and apparatus whose principal function is filtering or purifying a liquid or gas and that is supplied as a finished factory-gate product. It covers pressure, vacuum, adsorption, membrane, electrostatic, catalytic, and other filtering or purification principles only when the foreground data package identifies the actual product configuration and records its product-specific bill of materials and manufacturing activities.

The PCR excludes oil filters, petrol filters, and air-intake filters for internal combustion engines. It also excludes standalone filter media and replacement elements sold as parts, centrifuges, pumps, compressors, ventilation fans, treatment chemicals, and sewage or waste-treatment services when those items are not themselves the finished filtering or purifying apparatus. The use stage, replacement consumables during use, maintenance, distribution after the factory gate, and end-of-life are outside this factory-gate production profile unless a study explicitly extends the boundary and reports those stages separately.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | `pcr.metal-products-machinery-and-equipment.general-purpose-machinery.filtering-or-purifying-machinery-and-apparatus-for-liquids-or-gases-except-oil-filters-576ef38e` |
| classification_refs | CPC 3.0: 43914 (exact classification context; mapping acceptance is governed separately) |
| covered_products | Complete liquid or gas filtering or purifying machinery and apparatus supplied for industrial, commercial, institutional, or household applications |
| excluded_products | Internal-combustion-engine oil, petrol, and air-intake filters; filter parts and replacement elements sold separately; centrifuges; pumps; compressors; fans; treatment chemicals; filtration or sewage services |
| representative_product | A complete skid-mounted cartridge-filtration apparatus with housing, purchased replaceable cartridge, sealing components, supports, instruments, and product-specific packaging |
| production_route | Product-specific purchased-material and component supply; conditional in-house metal fabrication, joining, cleaning, and finishing; required assembly, acceptance testing, and packaging |
| market_state | Complete, accepted, and packaged apparatus at the manufacturer's factory gate, identified by model and configuration |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Provide the declared liquid- or gas-filtering or purification function of one complete apparatus |
| How much | One finished apparatus |
| How well | Meets the declared filtration or purification performance, design flow, pressure or vacuum rating, and product acceptance criteria |
| How long or cycle | One factory-gate product unit; service life and use-stage consumables are disclosed qualifiers but are not credited in this production reference flow |
| reference_flow_link | `assembly_finished_apparatus` |

| Field | Value |
| --- | --- |
| Reference amount | 1 Item(s) |
| Reference product flow | Filtering or purifying machinery and apparatus for liquids or gases |
| Reference flow property | Number of items `01846770-4cfe-4a25-8ad9-919d8d378345` |
| Reference unit group | Units of items `5beb6eed-33a9-47b8-9ede-1dfe8f679159` |
| Reference unit | Item(s) |
| Required qualifiers | manufacturer and model; liquid or gas service; filtration or purification principle; rated flow; design pressure or vacuum; filtration grade or removal performance; housing material and mass; filter-media or element type and mass; installed auxiliary equipment; dry shipping mass; packaging configuration; manufacturing site and geography; acceptance-test method; reference year; declared factory-gate boundary; intended service life |

When constructing a foreground data package, every required qualifier must be declared in dataset metadata, process notes, the reference-flow comment, the product description, or an equivalent data-package field. Missing required qualifiers make the reference-flow definition incomplete.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| `reference_item_count` | reference product | Number of items `01846770-4cfe-4a25-8ad9-919d8d378345` | Item(s) | Count only complete apparatus that passed the declared acceptance criteria. Normalize all inventory amounts to one accepted apparatus; do not count loose parts or rejected units. |
| `mass_measurement` | material, component, packaging, waste, and particulate rows | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Use net mass crossing the foreground boundary. Reconcile purchase, issue, return, stock-change, product, scrap, and waste records over the reporting period. |
| `electricity_conversion` | purchased electricity | Net calorific value `93a60a56-a3c8-11da-a746-0800200b9a66` | MJ | Preserve the metered electricity basis and convert kWh to MJ using exactly 3.6 MJ per kWh when the selected TianGong flow is reported in MJ. Do not add upstream generation emissions as foreground elementary flows. |
| `water_mass_conversion` | process water and wastewater | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Prefer a mass meter. When a volume record is converted, retain the measured or supplier-supported density, temperature, and conversion calculation; do not assume a density without documenting it. |

## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Purchased raw materials, fabricated parts, filter elements, sealing components, packaging, electricity, water, and process chemicals as received at the manufacturing site |
| starting_condition_role | Foreground production starts where purchased inputs cross the manufacturing-site boundary; their production and delivery are represented by linked upstream datasets |
| product_classification_scope | Complete filtering or purifying machinery and apparatus for liquids or gases; separately sold parts and the specified internal-combustion-engine filters remain outside the product identity |
| recursive_input_rule | If another complete apparatus in this same category is purchased as an input, record it as a separate upstream product dataset and disclose its role; do not recursively absorb its production into this foreground inventory |
| upstream_dataset_requirement | Link geographically and technologically representative datasets for every purchased material, component, energy carrier, water input, packaging input, inbound delivery where in scope, and waste-treatment service |
| disclosure | Declare the manufacturing site, reporting period, product model and configuration, purchased-versus-in-house operations, allocation basis, cut-offs, missing records, and any study-boundary extension |

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `boundary_factory_gate` | foreground_system_boundary | Include product-specific material and component receipt, all in-house fabrication and finishing that occurs, assembly, acceptance testing, rework attributable to accepted production, and product-specific packaging up to the factory gate. | `eu-pef-2021-2279` |
| `boundary_product_specific_bom` | bill_of_materials | Use the bill of materials for the declared model and configuration. Do not substitute a plant-wide generic material mix when product-specific issue, purchase, engineering, or mass records are available. | `eu-pef-2021-2279` |
| `boundary_direct_exchanges` | direct_foreground_exchanges | Record each directly measured material, energy, waste, wastewater, and elementary-emission exchange as one atomic flow with its actual compartment or treatment destination. | `eu-pef-2021-2279` |
| `boundary_excluded_stages` | excluded_life_cycle_stages | Keep use, maintenance, replacement consumables during use, distribution after the factory gate, and end-of-life outside this production dataset unless the goal and scope explicitly extend the boundary and report those stages separately. |  |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| `fabrication_finishing` | In-house fabrication and finishing | `conditional` | Include when housing, frame, piping, or other apparatus parts are cut, formed, machined, welded, cleaned, or finished at the reporting site; omit only when all such parts arrive finished and disclose the supplier boundary | foreground component manufacture and finishing | Net inputs, wastes, and direct emissions attributable to parts installed in accepted apparatus |
| `assembly_testing_packaging` | Assembly, acceptance testing, and packaging | `required` | Always include for a complete factory-gate apparatus | foreground final manufacture | One accepted and packaged apparatus |

### Process: In-house fabrication and finishing (`fabrication_finishing`)

#### Inputs

##### Product flows

###### 316 stainless-steel sheet for housings and wetted parts (`fabrication_stainless_steel_sheet`)

Record the net mass of 316 stainless-steel sheet issued to parts installed in accepted apparatus when this material and in-house route apply. The grade and product form must remain explicit because no exact TianGong flow UUID was confirmed.

- Selected flow: 316 stainless-steel sheet
- Flow property / unit: Mass / kg
- Amount rule: measured issue mass minus documented returns, normalized to accepted apparatus
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 accepted apparatus
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_fabrication_bom`
- Sources: `eu-pef-2021-2279`

###### Cold-rolled non-alloy carbon-steel sheet for frames (`fabrication_carbon_steel_sheet`)

Record the net mass of cold-rolled non-alloy carbon-steel sheet issued to installed frame or support parts when the declared product uses it. Keep coated or stainless grades in distinct foreground rows.

- Selected flow: Cold-rolled non-alloy carbon-steel sheet
- Flow property / unit: Mass / kg
- Amount rule: measured issue mass minus documented returns, normalized to accepted apparatus
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 accepted apparatus
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_fabrication_bom`
- Sources: `eu-pef-2021-2279`

###### Purchased electricity for fabrication and finishing (`fabrication_electricity`)

Record electricity metered for included cutting, forming, machining, welding, cleaning, and finishing operations. Allocate shared meters only under section 7.

- Selected flow: Electricity `890a70b7-b677-4e2a-8a1b-7d017e0a10ae`
- Flow property / unit: Net calorific value / MJ
- Amount rule: metered electricity attributable to included fabrication and finishing
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 accepted apparatus
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_fabrication_utilities`
- Sources: `eu-pef-2021-2279`

###### Process water for cutting, cleaning, or rinsing (`fabrication_process_water`)

Record only process water that crosses the site boundary for included fabrication or finishing operations. Cooling water in a closed loop is recorded only for net make-up crossing the boundary.

- Selected flow: Process Water `94a04f7e-2d5c-41f0-b182-d54a3b373a02`
- Flow property / unit: Mass / kg
- Amount rule: metered net process-water input to included fabrication and finishing
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 accepted apparatus
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_fabrication_utilities`
- Sources: `eu-pef-2021-2279`

###### Flux-cored wire for applicable welding (`fabrication_flux_cored_wire`)

Record this row only when flux-cored welding is used on parts installed in the accepted apparatus. Other filler metals require their own concrete foreground flow rows.

- Selected flow: Flux Cored Wire `1b74a576-06e0-4764-97ce-11a73f8a4752`
- Flow property / unit: Mass / kg
- Amount rule: measured wire issue less documented unused return
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 accepted apparatus using flux-cored welding
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_fabrication_bom`
- Sources:

###### Sodium hydroxide used in applicable aqueous cleaning (`fabrication_sodium_hydroxide`)

Record sodium hydroxide as active chemical mass when an alkaline cleaning bath is used for included parts. Retain solution concentration, make-up basis, and bath-life allocation in the foreground record.

- Selected flow: Sodium hydroxide `e0abcced-0611-4c24-9290-5a2c5a0c4169`
- Flow property / unit: Mass / kg
- Amount rule: purchased or issued sodium-hydroxide active mass attributable to included cleaning
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 accepted apparatus using alkaline cleaning
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_fabrication_bom`
- Sources:

##### Waste flows

#### Outputs

##### Product flows

##### Waste flows

###### Foreground-generated stainless-steel scrap (`fabrication_stainless_steel_scrap`)

Record segregated stainless-steel offcuts and machining scrap leaving the process. Keep alloy grade and recipient treatment route in the waste record because no exact foreground-generated stainless-steel-scrap UUID was confirmed.

- Selected flow: Foreground-generated 316 stainless-steel scrap
- Flow property / unit: Mass / kg
- Amount rule: measured mass transferred from included fabrication to a documented recipient
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 accepted apparatus
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_fabrication_wastes`
- Sources:

###### Ferrous steel scrap (`fabrication_steel_scrap`)

Record carbon-steel offcuts and machining scrap leaving the process as a separate ferrous waste exchange. Do not combine stainless-steel scrap into this row.

- Selected flow: Steel scrap `b973529f-a945-4cb9-9600-ecbcc745a4c6`
- Flow property / unit: Mass / kg
- Amount rule: measured mass transferred from included fabrication to a documented recipient
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 accepted apparatus
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_fabrication_wastes`
- Sources:

###### Waste cutting oil (`fabrication_waste_cutting_oil`)

Record spent cutting oil removed from included machining and transferred as waste. Water-based machining fluid or a different waste state requires a distinct foreground row.

- Selected flow: Waste cutting oil `80d926e3-0f76-4a19-9b1e-ffec9deb1216`
- Flow property / unit: Mass / kg
- Amount rule: measured waste cutting-oil mass transferred off process
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 accepted apparatus with oil-based machining
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_fabrication_wastes`
- Sources:

###### Metal-finishing wastewater (`fabrication_finishing_wastewater`)

Record the measured wastewater leaving aqueous metal cleaning or finishing before external treatment. Retain composition, hazardous classification, and destination; no exact TianGong waste-flow UUID was confirmed.

- Selected flow: Metal-finishing wastewater before external treatment
- Flow property / unit: Mass / kg
- Amount rule: measured net wastewater mass transferred from included metal finishing
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 accepted apparatus using aqueous metal finishing
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_fabrication_wastes`
- Sources:

##### Elementary flows

###### PM10 discharged to urban air through a high stack (`fabrication_pm10_high_stack`)

Use this exact compartment-specific row only when monitored fabrication particulate is discharged to urban air through a documented high stack. A different particle size or receiving compartment requires a distinct elementary flow.

- Selected flow: particles (PM10) `9fbb5096-ed5b-11e6-bc64-92361f002671`
- Flow property / unit: Mass / kg
- Amount rule: measured or test-derived PM10 mass at the documented high-stack release point
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 accepted apparatus produced during the monitored period
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_fabrication_air_emissions`
- Sources:

### Process: Assembly, acceptance testing, and packaging (`assembly_testing_packaging`)

#### Inputs

##### Product flows

###### Purchased replaceable filter cartridge (`assembly_filter_cartridge`)

Record the net mass of the purchased replaceable cartridge installed in the representative apparatus. Declare medium, support, end-cap, and sealing construction; no exact mass- or item-based TianGong cartridge UUID was confirmed.

- Selected flow: Replaceable cartridge filter element
- Flow property / unit: Mass / kg
- Amount rule: installed dry cartridge mass from product-specific bill of materials or verified weighing
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 accepted apparatus
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_assembly_bom`
- Sources: `eu-pef-2021-2279`

###### Styrene-butadiene-rubber sealing cover (`assembly_sbr_sealing_cover`)

Record this component only when the accepted apparatus contains the specified styrene-butadiene-rubber sealing cover. Other elastomers or sealing-part forms require distinct concrete rows.

- Selected flow: Sealing cover ; Styrene-butadiene rubber `64baff6f-1ce6-4567-83c0-2e8653ce6df5`
- Flow property / unit: Mass / kg
- Amount rule: installed sealing-cover mass from product-specific bill of materials or verified weighing
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 accepted apparatus using this sealing cover
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_assembly_bom`
- Sources: `eu-pef-2021-2279`

###### Purchased electricity for assembly, testing, and packaging (`assembly_electricity`)

Record electricity metered for assembly tools, controls configuration, acceptance testing, drying after testing, and packaging operations within this process.

- Selected flow: Electricity `890a70b7-b677-4e2a-8a1b-7d017e0a10ae`
- Flow property / unit: Net calorific value / MJ
- Amount rule: metered electricity attributable to assembly, testing, and packaging
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 accepted apparatus
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_assembly_utilities`
- Sources: `eu-pef-2021-2279`

###### Process water for hydrostatic or leak testing (`assembly_process_water`)

Record fresh process water entering hydrostatic or leak testing. Reused test water is not re-entered on each cycle; record only make-up water that crosses the process boundary.

- Selected flow: Process Water `94a04f7e-2d5c-41f0-b182-d54a3b373a02`
- Flow property / unit: Mass / kg
- Amount rule: metered fresh and make-up water entering accepted-product testing
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 accepted apparatus receiving water-based testing
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_assembly_utilities`
- Sources:

###### Corrugated board boxes (`assembly_corrugated_boxes`)

Record the mass of corrugated board boxes delivered with the accepted apparatus. Other paperboard, wood, plastic, or metal packaging remains in separate atomic rows.

- Selected flow: corrugated board boxes `4f197bec-7b3b-11dd-ad8b-0800200c9a66`
- Flow property / unit: Mass / kg
- Amount rule: packaging specification mass verified by issue records or weighing
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 accepted packaged apparatus
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_assembly_bom`
- Sources: `eu-pef-2021-2279`

###### Euro wooden pallet (`assembly_wooden_pallet_euro`)

Record this row only when a Euro wooden pallet is delivered with the apparatus. A reusable pool pallet is recorded only for the consumed or allocated service under the declared packaging scenario.

- Selected flow: Wooden pallet (EURO) `96b2b9ac-cfb6-46bf-8ad1-c056e338950a`
- Flow property / unit: Mass / kg
- Amount rule: delivered Euro-pallet mass allocated to the accepted apparatus
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 accepted apparatus using a Euro pallet
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_assembly_bom`
- Sources: `eu-pef-2021-2279`

###### Low-density polyethylene foil (`assembly_ldpe_foil`)

Record the mass of non-cellular PE-LD foil delivered as protective wrap. Do not combine foam, strapping, or other polymers into this row.

- Selected flow: Low-density polyethylene foil (PE-LD) `2cecd3a7-d90e-44b4-aec5-1d9dfb907477`
- Flow property / unit: Mass / kg
- Amount rule: product-specific packaging specification mass verified by issue records or weighing
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 accepted packaged apparatus
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_assembly_bom`
- Sources: `eu-pef-2021-2279`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Accepted complete filtering or purifying apparatus (`assembly_finished_apparatus`)

This is the PCR reference product output. Count one apparatus only after it meets the declared acceptance criteria and includes the configuration and packaging represented by the foreground inventory; the category-wide TianGong product UUID remains unresolved.

- Selected flow: Filtering or purifying machinery and apparatus for liquids or gases
- Flow property / unit: Number of items / Item(s)
- Amount rule: exactly 1 accepted and packaged apparatus
- Value mode: Fixed value (`fixed_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: PCR reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Identity reference (`identity_reference`)
- Sources: `un-cpc-3-0-structure-2025`

##### Waste flows

###### Wastewater from water-based acceptance testing (`assembly_test_wastewater`)

Record wastewater leaving hydrostatic or leak testing for sewerage or external treatment. Recovered water retained inside the process is not an output.

- Selected flow: Wastewater `d2d44ce1-c0f4-461d-9413-f4b33e0d200f`
- Flow property / unit: Mass / kg
- Amount rule: measured wastewater mass leaving the test-water loop
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 accepted apparatus receiving water-based testing
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_assembly_wastewater`
- Sources:

##### Elementary flows

## 7. Allocation and Co-product Handling

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `allocation_avoid_by_subdivision` | shared_manufacturing_processes | First subdivide meters, issue records, work orders, waste records, and emission records so the declared apparatus receives product-specific foreground activity data wherever practicable. | `eu-pef-2021-2279` |
| `allocation_physical_driver` | residual_shared_activity | When subdivision is not practicable, allocate a shared activity with a documented causal physical driver such as machine time, measured electricity, processed mass, bath loading, test duration, or packaged mass. Use one driver consistently within the reporting period. |  |
| `allocation_rejects_rework` | rejects_and_rework | Assign material, energy, waste, and emission burdens from normal rejects and rework to accepted apparatus produced in the same reporting period; separately disclose abnormal events. |  |
| `allocation_scrap_output` | recyclable_scrap | Record scrap leaving the foreground as a waste output at measured mass. Do not subtract an unreported recycling credit from the manufacturing inventory; disclose any downstream recycling model separately. |  |
| `allocation_economic_last_resort` | multifunctional_processes | Use economic allocation only when subdivision and a defensible causal physical relationship are unavailable; disclose prices, period, currency, sensitivity, and the affected inventory share. |  |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_fabrication_bom` | `fabrication_finishing` | product-specific material and process-chemical inputs | engineering bill of materials, purchase and issue records, returns, stock change | product model; material identity and grade; supplier; issued mass; returned mass; opening and closing stock; accepted quantity | reconcile engineering BoM with stores and production-order records | kg | each production order; aggregate monthly | representative reporting period or the full campaign for batch production | all sites performing included fabrication | net issued mass attributable to accepted units divided by accepted unit count | approved BoM revision; invoices; calibrated scale or supplier mass; issue and return records; reconciliation sign-off |
| `cp_fabrication_utilities` | `fabrication_finishing` | electricity and process-water inputs | submeter, utility meter, or logged equipment meter | meter id; opening and closing readings; unit; operating period; included equipment; accepted quantity | read calibrated meters and reconcile with site totals | native meter unit and converted MJ or kg | each shift or batch; aggregate monthly | representative reporting period or full campaign | meters covering included fabrication and finishing | net use after documented internal recovery divided by accepted unit count under section 7 | calibration record; meter photographs or exports; site-utility reconciliation; conversion worksheet |
| `cp_fabrication_wastes` | `fabrication_finishing` | segregated scrap, waste cutting oil, and wastewater outputs | scale tickets, waste transfer notes, tank or flow meters | waste identity; grade or composition; mass or volume; density if converted; date; recipient; treatment destination; accepted quantity | weigh or meter each transfer and reconcile storage change | kg | each transfer; aggregate monthly | same period as production inventory | all included fabrication and finishing lines | transferred quantity adjusted for storage change and allocated under section 7 | scale calibration; transfer note; waste classification; recipient receipt; storage reconciliation |
| `cp_fabrication_air_emissions` | `fabrication_finishing` | PM10 high-stack emission | continuous monitor or representative stack test with operating records | stack id and compartment; particle-size definition; concentration; flow rate; test duration; operating load; accepted quantity | calculate released mass only for the documented urban high-stack compartment | kg | continuous aggregation or each valid test campaign | representative operating states in the reporting period | each included emission point | measured concentration multiplied by dry-gas flow and duration, then allocated to accepted units | accredited test report or monitor QA; calibration; flow and moisture correction; operating log |
| `cp_assembly_bom` | `assembly_testing_packaging` | installed filter and sealing components plus delivered packaging | product-specific BoM, packaging specification, issue records, weighing | model and configuration; component identity; material; quantity; unit mass; issued mass; returns; packaging scenario | reconcile released BoM and packaging specification with stores records and sample weighing | kg | each model revision and production order; aggregate monthly | representative reporting period or full campaign | all assembly and packaging sites | net installed or delivered mass divided by accepted unit count | released drawings and BoM; supplier declarations; issue records; calibrated sample weighing |
| `cp_assembly_utilities` | `assembly_testing_packaging` | electricity and fresh test-water inputs | assembly and test meters, test logs | meter id; readings; unit; test method; water make-up; recirculation; accepted quantity | meter included assembly, test, drying, and packaging operations | native meter unit and converted MJ or kg | each test batch; aggregate monthly | representative reporting period or full campaign | all included assembly and test stations | net use divided by accepted unit count under section 7 | calibration; test log; meter export; site-total reconciliation; conversion worksheet |
| `cp_assembly_output` | `assembly_testing_packaging` | accepted complete apparatus | serial-number register and acceptance record | model; serial number; configuration; test result; completion date; packaging status; dry shipping mass | count only accepted and packaged units matching the declared configuration | Item(s) | each completed unit | same period as input and waste data | all final assembly sites | accepted count is the denominator for reference-flow normalization | signed acceptance record; serial register; packaging release; rejected-unit log |
| `cp_assembly_wastewater` | `assembly_testing_packaging` | wastewater from water-based acceptance testing | test-loop meter, tank record, or waste transfer record | water input; recovered volume; wastewater quantity; density; discharge date; destination; test count | meter wastewater leaving the recirculation loop and reconcile input, recovery, and storage | kg | each discharge; aggregate monthly | same period as water input and accepted production | all water-based test stations | net wastewater leaving the process divided by accepted unit count | calibrated meter or tank; discharge record; water balance; treatment or sewer receipt |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_reference_normalization` | every foreground inventory row | normalized amount = period quantity attributable to the declared product divided by accepted complete apparatus in the same period | reconciled period quantity; allocation result where needed; accepted unit count from `cp_assembly_output` | amount per 1 accepted apparatus | `eu-pef-2021-2279` |
| `calc_electricity_kwh_to_mj` | electricity rows | electricity in MJ = metered electricity in kWh multiplied by 3.6 MJ/kWh | calibrated meter reading in kWh | electricity in MJ |  |
| `calc_water_volume_to_mass` | water and wastewater rows | mass = measured volume multiplied by documented density at the recorded conditions | measured volume; density; temperature or supplier reference conditions | water or wastewater mass in kg |  |
| `calc_pm10_release` | `fabrication_pm10_high_stack` | released PM10 mass = corrected concentration multiplied by corrected dry-gas flow and operating duration for the documented stack, then normalized under `calc_reference_normalization` | concentration; gas flow; moisture and reference-condition corrections; duration; accepted units | PM10 mass per accepted apparatus |  |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_product_identity` | reference product and BoM | The model, configuration, function, rated performance, product mass, and BoM revision must identify one consistent product population. | serial register, approved product specification, released BoM, acceptance record, dry shipping mass reconciliation |
| `dq_technological_representativeness` | foreground processes | Records must represent the actual purchased-versus-in-house route, fabrication and finishing technologies, test method, recovery loops, and packaging scenario. | process map, routing, work instructions, equipment list, test protocol, packaging specification |
| `dq_geographical_representativeness` | foreground and upstream links | Declare every manufacturing site and select upstream datasets matching supplier or market geography; document every geographic proxy. | site list, supplier addresses, procurement records, upstream dataset metadata, proxy justification |
| `dq_temporal_representativeness` | all inventory rows | Use a representative reporting period or the complete declared campaign; align numerator and accepted-unit denominator and disclose abnormal shutdowns or product changes. | dated records, reporting-period reconciliation, production logs, abnormal-event review |
| `dq_completeness` | all exchanges | Reconcile the product-specific BoM and manufacturing records and disclose omitted flows, cut-offs, data gaps, and the share of inventory affected. | signed mass and utility reconciliation, waste reconciliation, missing-data register, cut-off statement |
| `dq_precision` | measured and allocated data | Retain meter resolution, calibration, sampling design, allocation drivers, and calculation worksheets; report uncertainty or sensitivity for material shared allocations. | calibration certificates, sampling plan, raw exports, allocation workbook, sensitivity results |

## 9. Validation Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `validation_identity` | reference_product | Confirm that CPC scope, finished-apparatus state, model, configuration, performance qualifiers, acceptance status, reference amount, and output row describe the same product. Reject a dataset that substitutes a filter part, service, or excluded internal-combustion-engine filter. | `un-cpc-3-0-structure-2025` |
| `validation_bom` | bill_of_materials | Confirm that material, installed-component, and packaging rows reconcile to the released product-specific BoM and dry shipping mass after documented fabrication losses and excluded reusable fixtures. | `eu-pef-2021-2279` |
| `validation_period` | temporal_consistency | Confirm that inputs, outputs, wastes, emissions, allocation drivers, and accepted-unit counts use the same site and reporting period. |  |
| `validation_atomic_flows` | inventory_rows | Confirm that every inventory row represents one physical, chemical, waste, or energy exchange; split any combined material, utility, fuel, packaging, waste, wastewater-plus-residue, or emission collection before publication. |  |
| `validation_uuid_semantics` | tiangong_references | Confirm every UUID by public state-100 identity, bilingual base name, flow type, classification, property, unit group, product state, geography, technology, and generalComment. Keep unresolved rows UUID-empty. |  |
| `validation_mass_water_energy` | quantitative_reconciliation | Confirm product and packaging mass reconciliation, process-water and wastewater balance, electricity meter reconciliation, unit conversions, scrap destinations, and direct-emission compartment before accepting the dataset. | `eu-pef-2021-2279` |
| `validation_ranges` | external_ranges | Reject an externally inferred empirical range unless at least two mutually independent original sources have compatible system boundary, functional unit, and product state and the synthesis explains geographic and technological differences. |  |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | Product-specific factory-gate `secondary_dataset` or `background_dataset` for one declared apparatus model and configuration |
| downstream_use | Link as the production dataset for the declared apparatus in process or lifecycle-model studies that preserve the required qualifiers and factory-gate boundary |
| allowed_use | Product-system modelling, procurement comparison, design improvement, and inventory compilation when geography, technology, period, performance, and configuration are representative |
| excluded_use | Unqualified category-average claims; substitution for filter parts or excluded internal-combustion-engine filters; use-stage performance claims; comparative assertions across unlike functions, capacities, service lives, or system boundaries |
| required_metadata | PCR id and version; manufacturer and model; configuration and BoM revision; function and rated performance; filtration principle and media; design flow and pressure or vacuum; production sites; reference period; dry shipping mass; packaging; system boundary; allocation; cut-offs; upstream dataset versions; unresolved-flow treatment |
| required_quality_disclosure | Technological, geographical, and temporal representativeness; completeness and precision; measurement and calibration evidence; allocation shares; data gaps and proxies; mass, water, wastewater, and electricity reconciliation; acceptance-test coverage |
| update_trigger | New model or material configuration; changed filtration principle, rated performance, housing or media; material change in dry shipping mass; changed manufacturing site or major process route; changed packaging; changed allocation driver; reporting data no longer temporally representative; material correction to a UUID or boundary |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `un-cpc-3-0-structure-2025` | `dataset` | United Nations Statistics Division, Central Product Classification Version 3.0 structure, 30 June 2025, https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Structure_30Jun2025.csv (retrieved 2026-09-05; SHA-256 `5cd2c1c4890dd6be16af48e9bb940fed48efff9865f39ff15edaa921da25fb7c`) | Current English classification identity and explicit internal-combustion-engine filter exclusions |
| `un-cpc-3-0-explanatory-notes-2025` | `official_guidance` | United Nations Statistics Division, Central Product Classification Version 3.0 explanatory notes, 30 June 2025, https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Exp_Notes_30Jun2025.pdf (retrieved 2026-09-05) | Original-page verification of the current CPC 43914 title and neighbouring exclusion class |
| `un-cpc-1-1-zh-2007` | `official_guidance` | United Nations, Central Product Classification Version 1.1, Chinese publication, https://digitallibrary.un.org/record/536544/files/M_77ver1_1c.pdf (retrieved 2026-09-05) | Professional Chinese rendering of the unchanged CPC 43914 product boundary |
| `eu-pef-2021-2279` | `official_guidance` | European Commission Recommendation (EU) 2021/2279 on the use of the Environmental Footprint methods, consolidated English text, https://eur-lex.europa.eu/legal-content/EN/TXT/PDF/?uri=CELEX:02021H2279-20211230 (retrieved 2026-09-05) | Product-specific bill of materials, company-specific manufacturing data, completeness, transparency, and data-quality requirements |
