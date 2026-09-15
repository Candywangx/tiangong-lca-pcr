---
pcr_id: pcr.metal-products-machinery-and-equipment.general-purpose-machinery.fans-except-domestic-type-centrifuges-except-cream-separators-and-clothes-dryers
language: en-US
status: candidate
sync_with: pcr.zh-CN.md
---

# Fans, except domestic type; centrifuges, except cream separators and clothes dryers

## 1. Scope and Applicability

This PCR applies to cradle-to-factory-gate foreground production of complete non-domestic fans and centrifuges classified in CPC 3.0 subclass 43931. It covers industrial axial, centrifugal, mixed-flow, cross-flow and jet fans when supplied as complete products, and industrial or laboratory centrifuges used to separate materials by centrifugal force. It covers the declared motor or drive, impeller or rotor, housing or casing, structural frame, guards, controls and other components supplied with the finished equipment.

Domestic-type fans, cream separators, clothes dryers, stand-alone replacement parts, filtering or purifying machinery that is not a centrifuge, site installation, distribution after the factory gate, use-phase electricity and maintenance, and end-of-life treatment are excluded. Bare subassemblies and parts are inputs to this PCR only when incorporated into the complete reference product; they are not themselves reference products.

The product family is heterogeneous. Every foreground data package shall declare whether the product is a fan or centrifuge, its operating principle and model, the supplied drive boundary, material configuration, factory-gate packaging state, manufacturing geography and reference year. Fan-specific performance descriptors and centrifuge-specific operating descriptors shall not be mixed or averaged across product families.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.metal-products-machinery-and-equipment.general-purpose-machinery.fans-except-domestic-type-centrifuges-except-cream-separators-and-clothes-dryers |
| classification_refs | CPC 3.0: 43931 (exact classification context) |
| covered_products | Complete non-domestic fans; complete centrifuges other than cream separators and clothes dryers |
| excluded_products | Domestic-type fans; cream separators; clothes dryers; stand-alone parts; non-centrifugal filters or purifiers; installation, use and end-of-life services |
| representative_product | One declared saleable model of a complete non-domestic fan or centrifuge |
| production_route | Receipt of purchased materials and components; in-house component fabrication and finishing when performed; assembly; acceptance testing; packaging for factory-gate delivery |
| market_state | Finished, accepted, saleable equipment at the factory gate, with the declared accessories, controls, drive and packaging supplied with the model |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Provision of a declared finished non-domestic fan or centrifuge model at the factory gate |
| How much | 1 kg net mass of the saleable equipment; packaging is inventoried separately |
| How well | The declared model and supplied configuration have passed the manufacturer's acceptance criteria; applicable fan performance or centrifuge operating descriptors are disclosed |
| How long or cycle | One production output at the factory gate; service life is outside the cradle-to-gate reference flow and shall be declared separately for downstream use comparisons |
| reference_flow_link | The reference product output row `reference_product` |

| Field | Value |
| --- | --- |
| Reference amount | 1 kg |
| Reference product flow | Fans, except domestic type, centrifuges, except cream separators and clothes dryers `a48b3c52-704f-4843-9325-a30168349fe5` |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | product family (fan or centrifuge); subtype and operating principle; model identifier; net product mass; supplied motor/drive and controls boundary; impeller/rotor and housing/casing materials; wetted-part material for centrifuges; fan input power and declared duty point when applicable; centrifuge maximum speed and separation duty when applicable; acceptance-test basis; accessories; packaging state and mass; manufacturing site geography; reference year |

When constructing a foreground data package, the items listed in `Required qualifiers` must be declared in dataset metadata, process notes, reference flow comment, product description, or an equivalent data package field. Missing required qualifiers make the reference flow definition incomplete for that data package.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| `reference_product_mass` | Reference product and all mass-normalized exchanges | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Use measured net mass of accepted saleable equipment as the denominator. Do not include separately inventoried packaging in net product mass. |
| `electricity_energy` | Purchased electricity | Net calorific value `93a60a56-a3c8-11da-a746-0800200b9a66` | MJ | Preserve metered energy and convert kWh to MJ using 1 kWh = 3.6 MJ; disclose meter boundary, voltage level and allocation method. |
| `gas_volume` | Gaseous natural gas | Volume `93a60a56-a3c8-22da-a746-0800200c9a66` | m3 | Report volume at declared temperature and pressure reference conditions; do not combine gaseous natural gas with other fuels. |
| `mass_balance` | Metal inputs, product and segregated metal scrap | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Reconcile each metal separately across purchased input, product incorporation, returned material, work in progress and segregated scrap before normalization. |

## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Purchased materials, components, packaging and utilities as received at the manufacturing site; their upstream production is represented by linked background datasets |
| starting_condition_role | Entry condition for the foreground factory-gate manufacturing model |
| product_classification_scope | Complete products in CPC 3.0 subclass 43931; classification does not extend to excluded domestic fans, cream separators, clothes dryers or stand-alone parts |
| recursive_input_rule | A purchased complete fan or centrifuge used as a component is recorded once as an upstream product input with its own dataset and is not recursively expanded using this PCR inside the same foreground system |
| upstream_dataset_requirement | Link every purchased material, component, energy carrier, chemical and packaging flow to a geographically, technologically and temporally representative upstream dataset |
| disclosure | Declare in-house versus purchased component boundaries, outsourced processing, site coverage, energy-meter allocation, treatment of shared services, test rejects, packaging state and every excluded life-cycle stage |

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `sb_factory_gate` | Foreground product system | Include receipt-to-factory-gate component fabrication and finishing performed by the reporting site, assembly, acceptance testing, rework attributable to accepted production, packaging, direct emissions and wastes. Exclude distribution, installation, use, maintenance and end of life. | `eu-2021-2279-pef` |
| `sb_complete_configuration` | Product identity | Include the motor, drive, controls, guards and significant aerodynamic or separation components supplied with the declared model; disclose omitted accessories and purchased subassemblies. | `eu-2024-1834-fans`; `alfa-laval-decanter-operating-principles` |
| `sb_outsourced_processes` | Outsourced manufacturing | Record outsourced fabrication, coating, heat treatment or balancing as upstream product or service inputs with the mass sent and returned, and prevent double counting of the same operation on site. | `eu-2021-2279-pef` |
| `sb_inventory_completeness` | All foreground processes | Add every actual material, energy, water, chemical, waste and direct elementary exchange as a separate atomic row in the produced dataset, even when no common PCR row is listed below. | `eu-2021-2279-pef` |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| `component_fabrication_finishing` | Component fabrication and finishing | `conditional` | Include when the reporting site cuts, forms, machines, welds, cleans or coats any supplied component; otherwise disclose the corresponding purchased component or outsourced operation. | Foreground component manufacture and surface finishing | Per 1 kg accepted reference product |
| `assembly_test_packaging` | Assembly, acceptance testing and packaging | `required` | Always include for complete saleable equipment; individual motor, bearing and packaging rows apply only when those items are supplied with the declared model. | Final assembly, factory acceptance, rework attribution and packaging | 1 kg accepted reference product output |

### Process: Component fabrication and finishing (`component_fabrication_finishing`)

#### Inputs

##### Product flows

###### Non-alloy steel sheet or coil (`non_alloy_steel_sheet`)

Record non-alloy flat-rolled steel entering in-house cutting, forming or welding. Grade, dimensions, coating and supplier shall be declared.

- Selected flow: Non-Alloy Steel `ce3ac926-5d6f-4558-9edc-67179d93dde4`
- Flow property / unit: Mass / kg
- Amount rule: Measured received mass minus documented returns, normalized to accepted reference product
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg accepted reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material_component_receipts`
- Sources:

###### Stainless steel sheet (`stainless_steel_sheet`)

Record stainless steel sheet when used for wetted, corrosion-resistant, rotor, casing or guard components. The exact Tiangong UUID remains unresolved; alloy grade and product form shall be retained.

- Selected flow: Stainless steel sheet
- Flow property / unit: Mass / kg
- Amount rule: Measured received mass minus documented returns, normalized to accepted reference product
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg accepted reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material_component_receipts`
- Sources: `alfa-laval-decanter-operating-principles`

###### Primary aluminium alloy sheet (`primary_aluminium_alloy_sheet`)

Record primary aluminium alloy sheet only when it is incorporated into the declared product. Do not use this row for secondary alloy sheet or cast aluminium.

- Selected flow: Primary aluminum alloy sheet `2a9549cc-dc9e-43a7-9379-7a0c0a0e4832`
- Flow property / unit: Mass / kg
- Amount rule: Measured received mass minus documented returns, normalized to accepted reference product
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg accepted reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material_component_receipts`
- Sources:

###### Electricity for fabrication and finishing (`electricity_fabrication`)

Record purchased electrical energy consumed by in-house cutting, forming, machining, welding, cleaning and coating, including allocated shared loads.

- Selected flow: Electricity `890a70b7-b677-4e2a-8a1b-7d017e0a10ae`
- Flow property / unit: Net calorific value / MJ
- Amount rule: Submetered energy or documented allocation from the site meter, normalized to accepted reference product
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg accepted reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_electricity_records`
- Sources:

###### Process water for cleaning (`process_water`)

Record process water supplied to in-house aqueous cleaning or rinsing. Water quality, source and delivery boundary shall be declared.

- Selected flow: Process Water `94a04f7e-2d5c-41f0-b182-d54a3b373a02`
- Flow property / unit: Mass / kg
- Amount rule: Metered or tank-balance water use for applicable cleaning campaigns, normalized to accepted reference product
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg accepted reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_water_cleaning_records`
- Sources:

###### Sodium hydroxide for alkaline cleaning (`sodium_hydroxide`)

Record sodium hydroxide product when used in an alkaline cleaning bath. Report active sodium hydroxide mass and solution concentration separately.

- Selected flow: Sodium hydroxide `e0abcced-0611-4c24-9290-5a2c5a0c4169`
- Flow property / unit: Mass / kg
- Amount rule: Active sodium hydroxide replenishment and make-up mass, normalized to accepted reference product
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg accepted reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_cleaning_chemical_records`
- Sources:

###### Gaseous natural gas for direct process heat (`natural_gas`)

Record gaseous natural gas only when combusted on site for drying, curing or other attributable process heat. Reference conditions and gas composition shall be declared.

- Selected flow: natural gas in the gaseous state `4f19ca0e-7b3b-11dd-ad8b-0800200c9a66`
- Flow property / unit: Volume / m3
- Amount rule: Metered attributable gas volume at declared reference conditions, normalized to accepted reference product
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg accepted reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_natural_gas_records`
- Sources:

###### Industrial oxygen for thermal cutting (`industrial_oxygen`)

Record industrial oxygen when supplied for oxygen-fuel cutting. Purity, pressure, reference conditions and on-site generation boundary shall be declared.

- Selected flow: Industrial oxygen `bd4b0f96-2090-4806-a648-335ab20ff401`
- Flow property / unit: Volume / m3
- Amount rule: Metered or cylinder-stock oxygen use attributable to accepted production, normalized to accepted reference product
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg accepted reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_welding_cutting_gas_records`
- Sources:

###### Carbon dioxide shielding gas (`carbon_dioxide_shielding_gas`)

Record carbon dioxide product used as welding shielding gas. Purity, supply pressure and cylinder or bulk delivery boundary shall be declared.

- Selected flow: Carbon dioxide `27f41c1c-535e-4d2a-bce9-2c7f4de11549`
- Flow property / unit: Mass / kg
- Amount rule: Cylinder-stock or mass-flow carbon dioxide use attributable to accepted production, normalized to accepted reference product
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg accepted reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_welding_cutting_gas_records`
- Sources:

###### Powder coating (`powder_coating`)

Record formulated powder coating incorporated during in-house finishing. Resin chemistry, colour, cure schedule and transfer efficiency shall be declared.

- Selected flow: Powder Coating `0c581697-0eed-4b86-a070-b94966eb7344`
- Flow property / unit: Mass / kg
- Amount rule: Issued coating mass minus documented recoverable return, normalized to accepted reference product
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg accepted reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material_component_receipts`
- Sources:

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

##### Waste flows

###### Segregated steel fabrication scrap (`steel_scrap`)

Record ferrous offcuts, turnings and rejected steel parts leaving the foreground process as one segregated waste flow. Contamination and destination shall be declared.

- Selected flow: Steel scrap `37997e0e-e34b-4ab9-a642-5d86f4333919`
- Flow property / unit: Mass / kg
- Amount rule: Weighed segregated steel scrap leaving the site, net of documented internal return, normalized to accepted reference product
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg accepted reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste_dispatch_records`
- Sources:

###### Segregated aluminium fabrication scrap (`aluminium_scrap`)

Record aluminium offcuts, turnings and rejected aluminium parts leaving the foreground process as one segregated waste flow. Alloy mixing, contamination and destination shall be declared.

- Selected flow: Aluminium Scrap `96c5f842-ea53-419b-b1cd-c02c479efb45`
- Flow property / unit: Mass / kg
- Amount rule: Weighed segregated aluminium scrap leaving the site, net of documented internal return, normalized to accepted reference product
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg accepted reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste_dispatch_records`
- Sources:

###### Wastewater from cleaning (`cleaning_wastewater`)

Record aqueous wastewater discharged from in-house component cleaning and rinsing. Cleaning chemistry, pH, suspended solids, metals, on-site treatment and receiving route shall be declared.

- Selected flow: Wastewater from cleaning `f0402393-e82c-47e8-9cd8-a486c97f3e89`
- Flow property / unit: Mass / kg
- Amount rule: Metered discharge or tank balance for applicable cleaning campaigns, normalized to accepted reference product
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg accepted reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_cleaning_wastewater_records`
- Sources:

##### Elementary flows

###### Direct fossil carbon dioxide from natural-gas combustion (`carbon_dioxide_fossil`)

Record only direct fossil carbon dioxide crossing from on-site natural-gas combustion to air. Upstream electricity and fuel-supply emissions are not included in this elementary row.

- Selected flow: carbon dioxide (fossil) `08a91e70-3ddc-11dd-923d-0050c2490048`
- Flow property / unit: Mass / kg
- Amount rule: Site-reported direct fossil CO2 or metered gas multiplied by the documented site carbon and oxidation factors
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg accepted reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_direct_co2_records`
- Sources:

### Process: Assembly, acceptance testing and packaging (`assembly_test_packaging`)

#### Inputs

##### Product flows

###### Electric motor supplied with the equipment (`electric_motor`)

Record a purchased electric motor when it is supplied as part of the complete fan or centrifuge. Power, efficiency class, voltage, motor type and drive boundary shall be declared.

- Selected flow: Electric motor `014f80a3-c257-425b-9b75-3e5a18573695`
- Flow property / unit: Mass / kg
- Amount rule: Measured motor mass incorporated in accepted products, normalized to accepted reference product
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg accepted reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material_component_receipts`
- Sources: `eu-2024-1834-fans`; `alfa-laval-decanter-operating-principles`

###### Complete ball bearing (`ball_bearing`)

Record purchased complete ball bearings incorporated into the declared product. The exact Tiangong UUID remains unresolved; bearing type, dimensions, material and lubrication state shall be retained.

- Selected flow: Complete ball bearing
- Flow property / unit: Mass / kg
- Amount rule: Measured bearing mass incorporated in accepted products, normalized to accepted reference product
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg accepted reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material_component_receipts`
- Sources: `alfa-laval-decanter-operating-principles`

###### Electricity for assembly and acceptance testing (`electricity_assembly_test`)

Record purchased electrical energy for assembly tools, balancing, run-in, performance or leak testing, and attributable rework. Test duration and load condition shall be declared.

- Selected flow: Electricity `890a70b7-b677-4e2a-8a1b-7d017e0a10ae`
- Flow property / unit: Net calorific value / MJ
- Amount rule: Submetered test and assembly energy or documented allocation from the site meter, normalized to accepted reference product
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg accepted reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_electricity_records`
- Sources: `eu-2024-1834-fans`

###### Corrugated board boxes (`corrugated_board_boxes`)

Record formed corrugated board boxes supplied with the product. Board grade, dimensions, print and recycled content shall be declared.

- Selected flow: corrugated board boxes `4f197bec-7b3b-11dd-ad8b-0800200c9a66`
- Flow property / unit: Mass / kg
- Amount rule: Measured box mass consumed for accepted products, net of returned or reused boxes, normalized to accepted reference product
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg accepted reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_records`
- Sources:

###### Wooden pallet (`wooden_pallet`)

Record a wooden pallet when supplied at the factory gate. Pallet format, wood treatment, moisture and declared reuse cycles shall be stated.

- Selected flow: Pallets, box pallets and other load boards, of wood, pallet collars of wood `4b49871e-95be-4e0c-9223-9902f9eaa763`
- Flow property / unit: Mass / kg
- Amount rule: Pallet mass allocated by documented uses to accepted products, normalized to accepted reference product
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg accepted reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_records`
- Sources:

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Accepted reference product (`reference_product`)

Record the net mass of accepted saleable complete equipment after acceptance testing. Packaging remains in its separate input rows.

- Selected flow: Fans, except domestic type, centrifuges, except cream separators and clothes dryers `a48b3c52-704f-4843-9325-a30168349fe5`
- Flow property / unit: Mass / kg
- Amount rule: 1 kg accepted reference product
- Value mode: Fixed value (`fixed_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: 1 kg accepted reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Identity reference (`identity_reference`)
- Sources: `un-cpc-3-0-2025`

##### Waste flows

##### Elementary flows

## 7. Allocation and Co-product Handling

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `allocation_subdivide_first` | Shared fabrication, assembly, testing and utility systems | Subdivide or submeter product-family and model-specific processes wherever technically feasible before allocation. | `eu-2021-2279-pef` |
| `allocation_physical_causality` | Residual shared loads | Allocate residual shared loads using a documented physical causal driver such as machine time, test time, processed mass or metered energy; do not use revenue unless physical causality is demonstrably unavailable and the sensitivity is disclosed. | `eu-2021-2279-pef` |
| `allocation_scrap` | Metal scrap and other recoverable outputs | Report scrap as a waste output at the factory boundary. Do not credit avoided primary material production inside this foreground inventory; any recycling treatment or substitution credit belongs to a separately declared downstream model. | `eu-2021-2279-pef` |
| `allocation_rejects_rework` | Rejected units and rework | Attribute material and energy for rework and production rejects to accepted output over the declared reporting period; disclose exceptional prototype or catastrophic-failure exclusions. | `eu-2021-2279-pef` |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_material_component_receipts` | `component_fabrication_finishing`; `assembly_test_packaging` | Material, component and coating inputs | Purchase, receiving, issue and BOM records | flow identity; grade/model; received mass; returned mass; issued mass; product model; lot; supplier | Reconcile purchase/receiving records to BOM issue and return records | kg | Per lot or issue | At least one representative continuous 12-month period or full shorter production campaign | All sites producing the declared product | Net attributable input divided by accepted net product mass | Calibrated scales; invoice/BOM reconciliation; supplier specification; variance explanation |
| `cp_electricity_records` | `component_fabrication_finishing`; `assembly_test_packaging` | Purchased electricity | Meter and production records | meter start/end; multiplier; voltage; renewable contract boundary; process/model; operating hours; accepted mass | Read dedicated submeter; otherwise allocate site meter using documented machine or test time | MJ | Monthly and per test campaign where available | Same reporting period as accepted output | All included manufacturing sites | Process-attributable electricity divided by accepted net product mass | Meter calibration; bill reconciliation; allocation worksheet; coverage statement |
| `cp_water_cleaning_records` | `component_fabrication_finishing` | Process water | Meter, tank and campaign records | meter/tank readings; source; quality; campaign; make-up; recirculation; accepted mass | Meter inlet or perform documented tank balance | kg | Per cleaning campaign and monthly | Same reporting period as cleaned components | Every included cleaning line | Net water entering the foreground boundary divided by accepted net product mass | Meter calibration or tank geometry; recirculation boundary; balance check |
| `cp_cleaning_chemical_records` | `component_fabrication_finishing` | Sodium hydroxide | Batch make-up and replenishment records | solution mass; concentration; active NaOH; replenishment; disposal; campaign; accepted mass | Calculate active product mass from verified concentration and batch records | kg | Per bath make-up or replenishment | Full bath cycles intersecting the reporting period | Every included alkaline cleaning line | Active sodium hydroxide input divided by accepted net product mass | Supplier certificate; concentration test; batch log; stock reconciliation |
| `cp_natural_gas_records` | `component_fabrication_finishing` | Gaseous natural gas | Meter and fuel records | meter readings; temperature; pressure; reference conditions; composition; process hours; accepted mass | Read process submeter or allocate site meter by documented burner duty | m3 | Monthly | Same reporting period as accepted output | All included direct-combustion equipment | Attributable standardized gas volume divided by accepted net product mass | Meter calibration; supplier statement; reference-condition conversion; bill reconciliation |
| `cp_welding_cutting_gas_records` | `component_fabrication_finishing` | Oxygen and carbon dioxide | Cylinder, bulk tank and mass-flow records | opening stock; receipts; closing stock; pressure; purity; reference conditions; process/model; accepted mass | Stock balance or calibrated flow measurement for each gas separately | m3 oxygen; kg carbon dioxide | Per cylinder/bulk delivery and monthly | Same reporting period as welded or cut production | All included cutting and welding stations | Net use of each gas divided by accepted net product mass | Delivery tickets; cylinder/tank reconciliation; flow-meter calibration; leak investigation |
| `cp_waste_dispatch_records` | `component_fabrication_finishing` | Segregated metal scrap | Scale tickets and waste transfer records | waste identity; gross/tare/net mass; contamination; destination; internal return; date; product attribution | Weigh each dispatch and reconcile internal metal returns | kg | Per dispatch | Same reporting period as material inputs | All included fabrication lines | Net dispatched segregated scrap divided by accepted net product mass | Calibrated scale ticket; waste carrier record; contamination and destination statement |
| `cp_cleaning_wastewater_records` | `component_fabrication_finishing` | Cleaning wastewater | Discharge meter, tank and treatment records | volume or mass; density if converted; pH; chemistry; suspended solids; metals; treatment; destination; campaign | Meter discharge or perform documented tank balance; retain characterization tests | kg | Per campaign and monthly | Same reporting period as cleaning inputs | All included cleaning and rinsing lines | Net cleaning wastewater crossing the site boundary divided by accepted net product mass | Meter/tank evidence; density basis; laboratory analysis; treatment and receiving-route record |
| `cp_direct_co2_records` | `component_fabrication_finishing` | Direct fossil carbon dioxide | Emission-monitoring or site calculation records | direct CO2; gas activity data; carbon factor; oxidation factor; fossil fraction; method; period; accepted mass | Use site-reported direct measurement or calculate from collected gas data with fully documented factors | kg | Monthly or regulatory reporting interval | Same reporting period as natural-gas input | All included direct-combustion sources | Attributable direct fossil CO2 divided by accepted net product mass | Monitoring/calculation method; factor source; gas reconciliation; uncertainty statement |
| `cp_packaging_records` | `assembly_test_packaging` | Corrugated boxes and wooden pallets | Packaging BOM, issue and reuse records | package identity; mass; issued quantity; returned quantity; reuse cycles; treatment; product model; accepted mass | Weigh representative packaging and reconcile issues, returns and reuse | kg | Per packaging design and monthly issue | Same reporting period as accepted output | Every factory-gate packaging operation | Packaging mass attributable to the declared product divided by accepted net product mass | Scale record; packaging specification; reuse ledger; issue reconciliation |
| `cp_finished_product_mass` | `assembly_test_packaging` | Accepted reference product | Serial, acceptance and shipping records | model; serial/lot; net mass; accessories; motor/drive boundary; acceptance result; packaged mass; date | Weigh accepted configuration or use verified model mass reconciled to serial production | kg | Per model and production lot | Same reporting period as all inputs | All included final-assembly sites | Sum accepted net mass; normalize all exchanges to 1 kg | Calibrated scale; acceptance record; BOM reconciliation; packaging subtraction check |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_reference_normalization` | Every inventory amount | normalized amount = attributable reporting-period amount / accepted net product mass | Protocol-specific attributable amount; `cp_finished_product_mass` accepted net mass | Flow amount per 1 kg reference product | `eu-2021-2279-pef` |
| `calc_electricity_conversion` | Electricity rows | MJ = metered kWh × 3.6; retain original meter unit and conversion record | Metered kWh from `cp_electricity_records` | Electricity in MJ | |
| `calc_active_sodium_hydroxide` | Sodium hydroxide input | active NaOH mass = solution mass × verified mass fraction of NaOH | Solution mass; concentration certificate or test | kg sodium hydroxide product on active-mass basis | |
| `calc_direct_fossil_co2` | Direct fossil carbon dioxide | Use direct monitored mass, or calculated mass = standardized fuel activity × documented carbon factor × oxidation factor × fossil fraction; do not embed an unstated default factor | `cp_natural_gas_records`; factor and method retained by `cp_direct_co2_records` | kg direct fossil CO2 | |
| `calc_metal_balance` | Each metal family | input = accepted-product incorporation + dispatched segregated scrap + documented internal inventory change + other separately identified outputs | Material receipts; BOM incorporation; scrap tickets; work-in-progress and return records | Metal-specific reconciliation and unexplained difference | `eu-2021-2279-pef` |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_identity` | Reference product | Retain model identifier, family, subtype, complete supplied configuration, net mass, performance or operating descriptors and acceptance status. | Product specification, BOM, acceptance record and calibrated mass record |
| `dq_temporal` | All foreground rows | Use one representative continuous 12-month period where production is continuous, or the complete declared campaign where production is shorter; align all denominators and numerators. | Period coverage table and reconciliation to production records |
| `dq_geography_technology` | Foreground and upstream links | Identify every manufacturing site and select upstream datasets matching material grade, energy system, geography and reference year; document proxies without presenting them as exact. | Site list, supplier geography, dataset-selection log and proxy disclosure |
| `dq_completeness` | Process inventory | Demonstrate coverage of all known product, waste and elementary inputs and outputs for included processes, and explain every omitted or non-applicable common row. | BOM and purchase reconciliation, utility balance, waste register, emissions register and completeness checklist |
| `dq_measurement` | Metered and weighed flows | Retain calibration status, allocation method, raw unit, conversion and uncertainty or variance explanation for each significant measurement system. | Calibration certificates, meter/scale records and calculation workpapers |
| `dq_representativeness` | Published dataset | Assess technological, geographical, temporal and precision representativeness and disclose limitations by major flow. | Data-quality assessment following `eu-2021-2279-pef` |

## 9. Validation Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `val_reference_identity` | Reference flow | Fail validation when product family, model, supplied configuration, acceptance status, net mass or another required qualifier is missing, or when the product falls in an excluded category. | `un-cpc-3-0-2025`; `eu-2024-1834-fans`; `alfa-laval-decanter-operating-principles` |
| `val_inventory_atomicity` | Process inventory | Fail validation when a selected flow is a plural collection, mixed utility, combined fuel, mixed packaging label or unspecified waste/emission umbrella rather than one atomic exchange. | `eu-2021-2279-pef` |
| `val_mass_reconciliation` | Metal inputs and outputs | Require a separate metal balance for non-alloy steel, stainless steel and aluminium when applicable; investigate and disclose unexplained differences before publication. | `eu-2021-2279-pef` |
| `val_energy_emission_consistency` | Electricity, natural gas and direct CO2 | Verify meter boundary, unit conversion, reference conditions, fuel attribution and direct-CO2 calculation method; ensure upstream electricity emissions are not duplicated as direct foreground emissions. | `eu-2021-2279-pef` |
| `val_completeness` | Entire foreground data package | Perform process, input/output, temporal, site and source coverage checks; an inconclusive completeness check is not a passing result. | `eu-2021-2279-pef` |
| `val_range_status` | Important flows | Do not apply external empirical ranges until at least two independent, original-text-verified, boundary-compatible sources support a synthesis; retain foreground requirements and unresolved range evidence needs meanwhile. | |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | Cradle-to-factory-gate foreground production dataset for one declared complete non-domestic fan or centrifuge model |
| downstream_use | `secondary_dataset`; `background_dataset` |
| allowed_use | Product carbon-footprint and LCA models requiring model-specific factory-gate manufacture, provided the reference-flow qualifiers, site period, upstream dataset choices and exclusions are preserved |
| excluded_use | Direct comparison of fan and centrifuge models without equivalent function, duty point, service life and use scenario; use-phase claims; installed-system performance; domestic fans; cream separators; clothes dryers; stand-alone parts |
| required_metadata | PCR id; product family and subtype; model; acceptance criteria; net mass; supplied drive, controls and accessories; material configuration; packaging state; site geography; reference year; reporting period; in-house and outsourced process boundary; allocation methods; upstream dataset versions |
| required_quality_disclosure | Data coverage; meter and scale quality; representativeness; proxy use; unresolved UUIDs; range-evidence gaps; metal-balance differences; treatment of rejects, rework, scrap, packaging reuse and outsourced processes |
| update_trigger | Material change to model configuration, mass, motor/drive, principal materials, manufacturing route, site, energy system, packaging, allocation method, upstream datasets, or reporting period; or resolution of UUID/range evidence gaps |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `un-cpc-3-0-2025` | official_guidance | United Nations Statistics Division, CPC Version 3.0 Structure, 30 June 2025, https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Structure_30Jun2025.csv (retrieved 2026-09-05; original CSV hash verified) | CPC 43931 identity and exclusions |
| `eu-2024-1834-fans` | official_guidance | Commission Regulation (EU) 2024/1834 of 3 July 2024, ELI: http://data.europa.eu/eli/reg/2024/1834/oj (original text verified 2026-09-06) | Fan definition, significant supplied components, categories and performance qualifiers |
| `alfa-laval-decanter-operating-principles` | handbook | Alfa Laval, Decanter Centrifuge Operating Principles, document 200000331-4-EN-GB, https://www.alfalaval.com/globalassets/documents/products/separation/centrifugal-separators/decanters/alfa-laval-decanter-centrifuge-operating-principles.pdf (original text verified 2026-09-06) | Decanter centrifuge component, bearing, drive and separation-duty decomposition |
| `eu-2021-2279-pef` | official_guidance | Commission Recommendation (EU) 2021/2279, Annex I Product Environmental Footprint Method, ELI: http://data.europa.eu/eli/reco/2021/2279/oj (original text verified 2026-09-06) | Foreground inventory completeness, allocation hierarchy, data quality, robustness and validation checks |
