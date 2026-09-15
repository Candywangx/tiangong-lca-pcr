---
pcr_id: pcr.metal-products-machinery-and-equipment.general-purpose-machinery.machinery-for-cleaning-or-drying-bottles-or-other-containers-machinery-for-filling-clos-026d3f73
language: en-US
status: candidate
sync_with: pcr.zh-CN.md
---

# Machinery for cleaning or drying bottles or other containers; machinery for filling, closing, sealing, capsuling or labelling bottles, cans, boxes, bags or other containers; machinery for aerating beverages; other packing or wrapping machinery

## 1. Scope and Applicability

This PCR applies to cradle-to-gate production of complete industrial machines and integrated machine modules whose principal function is cleaning or drying containers; filling, closing, sealing, capsuling or labelling containers; aerating beverages; or packing or wrapping products. It covers configured machinery delivered after factory acceptance, including installed controls, drives, guards and accessories declared as part of the saleable machine.

It excludes loose replacement parts sold separately, dishwashing machines, weighing machinery, spraying machinery, production of the filled or packed goods, production of packaging consumed by the machine during use, installation at the customer site, operation, maintenance and end-of-life. A study may extend those stages, but shall report them separately from this cradle-to-gate result. Because configurations differ materially, comparisons require the same function, capacity, container/product compatibility, hygiene class, included accessories, design life and boundary.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.metal-products-machinery-and-equipment.general-purpose-machinery.machinery-for-cleaning-or-drying-bottles-or-other-containers-machinery-for-filling-clos-026d3f73 |
| classification_refs | CPC 3.0: 43921 (exact mapping context) |
| covered_products | Complete container-cleaning or drying machines; filling, closing, sealing, capsuling or labelling machines; beverage-aerating machines; other packing or wrapping machines; integrated modules sold as a functional machine |
| excluded_products | Separately sold parts; dishwashing, weighing or spraying machinery; packaging materials; packed goods; site installation services |
| representative_product | A factory-accepted, electrically driven packaging or filling machine with its declared frame, guards, drives, controls and shipped accessories |
| production_route | Procurement of product-specific materials and components; in-house fabrication or preparation where performed; final assembly; factory acceptance testing; shipment preparation |
| market_state | Complete configured machine at manufacturer gate, packed for dispatch where dispatch packaging is included |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Provide one complete configured machine capable of the declared cleaning, drying, filling, closing, sealing, capsuling, labelling, beverage-aerating, packing or wrapping function |
| How much | 1,000 kg net mass of the factory-accepted machine |
| How well | Meets the declared factory-acceptance criteria, throughput, container and product compatibility, hygiene/safety class and control specification |
| How long or cycle | Delivered condition at the manufacturer gate; design service life is declared but is not used to scale the cradle-to-gate reference flow |
| reference_flow_link | 1,000 kg of the configured, accepted machine described by the required qualifiers |

| Field | Value |
| --- | --- |
| Reference amount | 1,000 kg |
| Reference product flow | Machinery for cleaning or drying bottles or other containers, machinery for filling, closing, sealing, capsuling or labelling bottles, cans, boxes, bags or other containers, machinery for aerating beverages, other packing or wrapping machinery `ac3c39d8-9b77-4499-8188-02678f654b93` |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | machine function; manufacturer and model/configuration; net machine mass; nominal throughput and acceptance criterion; container format and material; handled product class; product-contact material grade where applicable; installed drives and control architecture; rated electricity and auxiliary requirements; hygiene or aseptic class where applicable; design service life; manufacture site and reference year; included accessories, spare parts and dispatch packaging; factory-acceptance protocol and result |

When constructing a foreground data package, every required qualifier shall be declared in dataset metadata, process notes, the reference-flow comment, product description or an equivalent field. Missing qualifiers make the reference flow incomplete.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| `measurement_01` | reference product and mass-based inventory | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Use net accepted-machine mass, excluding dispatch packaging, as the reference amount; report dispatch packaging in its own rows. |
| `measurement_02` | normalization | Mass | kg/1,000 kg machine | Divide each attributable cradle-to-gate exchange by accepted-machine net mass and multiply by 1,000; retain unrounded source records. |
| `measurement_03` | electricity | Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` | MJ | Preserve metered kWh in foreground records and convert with 1 kWh = 3.6 MJ; disclose grid geography, voltage and losses. |
| `measurement_04` | gases measured by volume | Volume `93a60a56-a3c8-22da-a746-0800200c9a66` | m3 | State temperature and pressure reference conditions; do not combine oxygen, carbon dioxide or natural gas volumes. |
| `measurement_05` | reused packaging | Mass | kg | Record only the attributable mass per dispatch after applying the documented reuse count; do not count the full pallet mass on every reuse. |

## 5. System Boundary

Include upstream production of purchased materials and components, their inbound transport when present in the foreground study, in-house fabrication/preparation, assembly, quality assurance, factory acceptance testing, treatment of manufacturing wastes and dispatch packaging up to the manufacturer gate. Use supplier-specific upstream datasets where available and do not double-count material embedded in a purchased component.

| rule_id | Applies to | rule | source_ids |
| --- | --- | --- | --- |
| `boundary_01` | cradle-to-gate machine production | Include environmentally relevant material and energy inputs, products, wastes and direct emissions from purchased-input production through accepted-machine dispatch preparation. | `eu-pef-method-2021`; `ecolean-filling-machines-epd-2021` |
| `boundary_02` | configurable machinery | Model one declared configuration; include only atomic rows that apply and explain every omitted representative row. | `ecolean-filling-machines-epd-2021` |
| `boundary_03` | purchased assemblies | Use the purchased assembly dataset as the upstream input and exclude its embedded material rows from the foreground bill of materials unless the assembly dataset explicitly excludes them. | `eu-pef-method-2021` |
| `boundary_04` | excluded life-cycle stages | Keep distribution beyond the manufacturer gate, installation, use consumables, maintenance and end-of-life outside this result unless separately modelled and reported. | `ecolean-filling-machines-epd-2021` |

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Purchased materials and completed components are received with upstream production datasets; the foreground factory records the actual bill of materials and component procurement without double counting embedded materials. |
| starting_condition_role | Cradle-to-gate upstream input boundary for a configured machine |
| product_classification_scope | Complete machinery performing one or more functions within the CPC 43921 semantic boundary; separately sold parts are outside scope. |
| recursive_input_rule | If a same-category machine is purchased as an integrated module, record it once as a purchased product input with its upstream dataset and do not recursively decompose it again in the receiving foreground process. |
| upstream_dataset_requirement | Upstream datasets shall match material grade or component type, production technology, recycled content, supplier geography and reference year as closely as available; proxies require disclosure. |
| disclosure | Declare configuration, net mass, material/component boundary, in-house versus supplier operations, site/year, energy geography, testing media, packaging reuse, waste destinations and excluded stages. |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| `component_fabrication` | Material and component procurement and fabrication | required | Always; include in-house fabrication exchanges only when performed and purchased-component datasets otherwise | foreground production and upstream-input interface | accepted machine bill of materials per 1,000 kg net machine |
| `final_assembly` | Final machine assembly | required | Always | foreground assembly | 1,000 kg accepted machine |
| `factory_testing` | Quality assurance and factory acceptance testing | required | Always; individual test media apply only when used | foreground quality assurance | accepted test protocol per 1,000 kg machine |
| `dispatch_packaging` | Dispatch preparation and packaging | conditional | Include when packaging is supplied with the machine at the manufacturer gate | foreground dispatch preparation | packaging attributable to 1,000 kg machine |

### Process: Material and component procurement and fabrication (`component_fabrication`)

#### Inputs

##### Product flows

###### Stainless-steel sheet for frame, enclosure and product-contact fabrication (`stainless_steel_sheet`)

Record purchased stainless-steel sheet incorporated into the declared machine or processed into its parts.

- Selected flow: Stainless-steel sheet
- Flow property / unit: Mass / kg
- Amount rule: purchasing mass minus documented unused returns, normalized to accepted output
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1,000 kg net accepted machine
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_bom_mass`
- Sources: `ecolean-filling-machines-epd-2021`

###### Aluminium sheet for structural or guarding parts (`aluminium_sheet`)

Record aluminium sheet incorporated into the machine; grade and recycled content remain foreground qualifiers.

- Selected flow: aluminium sheet `4f197be4-7b3b-11dd-ad8b-0800200c9a66`
- Flow property / unit: Mass / kg
- Amount rule: net incorporated and attributable purchased mass
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1,000 kg net accepted machine
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_bom_mass`
- Sources: `ecolean-filling-machines-epd-2021`

###### Copper wire installed in electrical systems (`copper_wire`)

Record bare copper-wire mass; insulation is recorded separately when materiality requires it.

- Selected flow: copper wire `da2d966d-fe62-44dc-ba0f-b1cd7c7cf33e`
- Flow property / unit: Mass / kg
- Amount rule: installed copper-wire mass from bill of materials
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1,000 kg net accepted machine
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_bom_mass`
- Sources: `ecolean-filling-machines-epd-2021`

###### Plate-glass safety guard panels (`plate_glass`)

Record plate glass installed as guards or viewing panels when present; declare treatment and thickness.

- Selected flow: plate glass `491a7940-d102-4981-a2b8-81bf183987df`
- Flow property / unit: Mass / kg
- Amount rule: installed guard-panel glass mass
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1,000 kg net accepted machine
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_bom_mass`
- Sources: `ecolean-filling-machines-epd-2021`

###### Polypropylene resin incorporated into machined or moulded parts (`polypropylene_resin`)

Record polypropylene resin only where parts are made in-house; purchased finished plastic parts remain component inputs.

- Selected flow: Polypropylene resin
- Flow property / unit: Mass / kg
- Amount rule: resin issued to attributable parts minus separately recorded scrap
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1,000 kg net accepted machine
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_bom_mass`
- Sources: `ecolean-filling-machines-epd-2021`

###### Electric motors installed in drives (`electric_motor`)

Record completed purchased motors once and do not also record their embedded materials.

- Selected flow: Electric motor `014f80a3-c257-425b-9b75-3e5a18573695`
- Flow property / unit: Mass / kg
- Amount rule: total installed motor mass from the configuration bill of materials
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1,000 kg net accepted machine
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_bom_mass`
- Sources: `ecolean-filling-machines-epd-2021`

###### Electricity used for in-house fabrication (`fabrication_electricity`)

Record metered or allocated electricity for cutting, forming, machining and welding performed by the reporting factory.

- Selected flow: Electricity `890a70b7-b677-4e2a-8a1b-7d017e0a10ae`
- Flow property / unit: Net calorific value / MJ
- Amount rule: attributable metered electricity converted from kWh
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg net accepted machine
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_energy_meter`
- Sources: `eu-pef-method-2021`

###### Industrial oxygen for thermal cutting (`industrial_oxygen`)

Record oxygen only when thermal cutting is performed within the foreground boundary.

- Selected flow: Industrial oxygen `bd4b0f96-2090-4806-a648-335ab20ff401`
- Flow property / unit: Volume / m3
- Amount rule: metered or purchase-reconciled oxygen at declared reference conditions
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1,000 kg net accepted machine
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_process_gases`
- Sources:

###### Carbon dioxide shielding gas for welding (`carbon_dioxide_shielding_gas`)

Record carbon dioxide product consumed as welding shielding gas when that welding route is used.

- Selected flow: Carbon dioxide `27f41c1c-535e-4d2a-bce9-2c7f4de11549`
- Flow property / unit: Mass / kg
- Amount rule: cylinder or bulk-supply consumption allocated to the machine
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1,000 kg net accepted machine
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_process_gases`
- Sources:

###### Process water for aqueous parts cleaning (`fabrication_process_water`)

Record water only when parts cross an aqueous-cleaning step before assembly.

- Selected flow: Process Water `94a04f7e-2d5c-41f0-b182-d54a3b373a02`
- Flow property / unit: Mass / kg
- Amount rule: metered make-up and single-pass water attributable to cleaned parts
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1,000 kg net accepted machine
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_water_chemicals`
- Sources:

###### Sodium hydroxide for alkaline parts cleaning (`sodium_hydroxide`)

Record active sodium-hydroxide mass when alkaline cleaning is used; declare solution concentration.

- Selected flow: Sodium hydroxide `e0abcced-0611-4c24-9290-5a2c5a0c4169`
- Flow property / unit: Mass / kg
- Amount rule: purchased solution mass multiplied by measured or supplier-declared NaOH fraction
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: kg active NaOH per 1,000 kg net accepted machine
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_water_chemicals`
- Sources:

###### Natural gas for process heat (`natural_gas_process_heat`)

Record gaseous natural gas only when directly consumed for attributable drying, curing or other process heat.

- Selected flow: natural gas in the gaseous state `4f19ca0e-7b3b-11dd-ad8b-0800200c9a66`
- Flow property / unit: Volume / m3
- Amount rule: attributable metered gas at declared reference conditions
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1,000 kg net accepted machine
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_fuel_meter`
- Sources:

#### Outputs

##### Waste flows

###### Post-industrial steel scrap from fabrication (`steel_scrap`)

Record segregated ferrous offcuts and rejects leaving fabrication as waste, before any recycling credit.

- Selected flow: Post-industrial steel scrap `c143745d-be4f-4d8f-b403-2dcbfe685349`
- Flow property / unit: Mass / kg
- Amount rule: weighed dispatched scrap allocated to the machine
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg net accepted machine
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste_records`
- Sources:

###### Wastewater from aqueous parts cleaning (`parts_cleaning_wastewater`)

Record the aqueous waste stream sent to on-site or off-site treatment; disclose composition and destination.

- Selected flow: Wastewater `d2d44ce1-c0f4-461d-9413-f4b33e0d200f`
- Flow property / unit: Mass / kg
- Amount rule: metered or mass-balanced wastewater leaving the cleaning process
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1,000 kg net accepted machine
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste_records`
- Sources:

##### Elementary flows

###### Direct fossil carbon dioxide from process natural-gas combustion (`fossil_carbon_dioxide`)

Record direct stack carbon dioxide only for natural gas combusted inside the foreground boundary; upstream emissions stay in the fuel dataset.

- Selected flow: carbon dioxide (fossil) `08a91e70-3ddc-11dd-923d-0050c2490048`
- Flow property / unit: Mass / kg
- Amount rule: measured direct stack emission or facility-verified fuel-carbon calculation allocated to the machine
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg net accepted machine
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_direct_emissions`
- Sources:

### Process: Final machine assembly (`final_assembly`)

#### Inputs

##### Product flows

###### Electricity used for final assembly (`assembly_electricity`)

Record electricity for assembly tools, lifting, controls integration and assembly-area services attributable to the machine.

- Selected flow: Electricity `890a70b7-b677-4e2a-8a1b-7d017e0a10ae`
- Flow property / unit: Net calorific value / MJ
- Amount rule: submetered electricity or documented physical allocation from the assembly area
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg net accepted machine
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_energy_meter`
- Sources: `ecolean-filling-machines-epd-2021`

### Process: Quality assurance and factory acceptance testing (`factory_testing`)

#### Inputs

##### Product flows

###### Electricity used during factory testing (`testing_electricity`)

Record electricity consumed by complete factory-acceptance and safety test cycles, including attributable test auxiliaries.

- Selected flow: Electricity `890a70b7-b677-4e2a-8a1b-7d017e0a10ae`
- Flow property / unit: Net calorific value / MJ
- Amount rule: metered energy for the declared test protocol
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1,000 kg net accepted machine
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_test_records`
- Sources: `ecolean-filling-machines-epd-2021`

###### Process water used as a factory-test medium (`testing_process_water`)

Record water when the acceptance protocol runs a wet container-cleaning, filling or leak-test cycle.

- Selected flow: Process Water `94a04f7e-2d5c-41f0-b182-d54a3b373a02`
- Flow property / unit: Mass / kg
- Amount rule: metered test-water input, net of documented closed-loop carryover
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1,000 kg net accepted machine
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_test_records`
- Sources: `ecolean-filling-machines-epd-2021`

###### Carbon dioxide used to test beverage-aerating equipment (`testing_carbon_dioxide`)

Record carbon dioxide product only when the declared machine includes beverage aeration and the acceptance test consumes it.

- Selected flow: Carbon dioxide `27f41c1c-535e-4d2a-bce9-2c7f4de11549`
- Flow property / unit: Mass / kg
- Amount rule: cylinder or bulk-supply mass consumed by the test protocol
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1,000 kg net accepted machine
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_test_records`
- Sources:

### Process: Dispatch preparation and packaging (`dispatch_packaging`)

#### Inputs

##### Product flows

###### Wooden pallet or load board supplied for dispatch (`wooden_pallet`)

Record the attributable wooden-pallet mass when a pallet or load board is supplied with the machine.

- Selected flow: Pallets, box pallets and other load boards, of wood, pallet collars of wood `4b49871e-95be-4e0c-9223-9902f9eaa763`
- Flow property / unit: Mass / kg
- Amount rule: supplied pallet mass divided by documented reuse count where reused
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1,000 kg net accepted machine
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_packaging_records`
- Sources:

###### Corrugated-board boxes supplied for accessories (`corrugated_board_boxes`)

Record corrugated boxes used for controls, change parts, tools or accessories shipped with the machine.

- Selected flow: corrugated board boxes `4f197bec-7b3b-11dd-ad8b-0800200c9a66`
- Flow property / unit: Mass / kg
- Amount rule: weighed or supplier-specified corrugated-box mass per dispatch
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1,000 kg net accepted machine
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_records`
- Sources:

#### Outputs

##### Product flows

###### Factory-accepted configured machinery (`reference_machine`)

The reference product crosses the manufacturer gate after the declared acceptance protocol.

- Selected flow: Machinery for cleaning or drying bottles or other containers, machinery for filling, closing, sealing, capsuling or labelling bottles, cans, boxes, bags or other containers, machinery for aerating beverages, other packing or wrapping machinery `ac3c39d8-9b77-4499-8188-02678f654b93`
- Flow property / unit: Mass / kg
- Amount rule: 1,000 kg net accepted-machine mass
- Value mode: Fixed value (`fixed_value`)
- Specificity: Generic (`generic`)
- Normalization basis: 1,000 kg reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Identity reference (`identity_reference`)
- Sources: `un-cpc-3-0-structure-2025`

## 7. Allocation and Co-product Handling

| rule_id | Applies to | rule | source_ids |
| --- | --- | --- | --- |
| `allocation_01` | shared factory processes | First subdivide meters, work orders and waste records so only exchanges directly attributable to the declared machine are included. | `eu-pef-method-2021` |
| `allocation_02` | residual shared utilities | Where subdivision is not feasible, allocate using a causal physical driver such as machine-hours, welding time, test duration, metered load or processed mass; document the driver. | `eu-pef-method-2021` |
| `allocation_03` | remaining multifunctionality | Use economic allocation only when subdivision, system expansion and a defensible physical relationship are not feasible; disclose values and sensitivity. | `eu-pef-method-2021` |
| `allocation_04` | fabrication scrap | Report scrap mass and treatment route separately. Do not subtract an avoided virgin-material burden inside the cradle-to-gate inventory unless the selected overarching LCA method explicitly requires and documents that treatment. | `eu-pef-method-2021` |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_bom_mass` | `component_fabrication` | materials and installed components | approved bill of materials, purchase and issue records | item id; material/component description; grade; supplier; purchased mass; installed mass; scrap/return mass; assembly boundary | reconcile released configuration BOM with purchasing and stores records | kg | each configuration | production lot and reference year | reporting factory and named suppliers | sum attributable net inputs; prevent double counting between purchased assemblies and embedded materials | approved BOM revision; certificates; weigh tickets; purchase records |
| `cp_energy_meter` | `component_fabrication`; `final_assembly` | fabrication and assembly electricity | meter and work-order logs | meter start/end; kWh; area/process; work order; operating time; allocation driver | submeter preferred; otherwise physically allocate verified area meter | kWh | each work order or monthly | representative annual period including the lot | reporting factory | sum attributable kWh then convert to MJ and normalize | calibrated-meter record; reconciliation to utility invoice |
| `cp_process_gases` | `component_fabrication` | oxygen and shielding gas | flowmeter, cylinder or bulk-tank records | gas identity; purity; opening/closing mass or volume; reference conditions; work order | reconcile metering and inventory change to fabrication work orders | kg or m3 | each cylinder/batch | production lot | reporting factory | allocate by measured use or documented cutting/welding time | supplier certificate; scale/flowmeter calibration; stock reconciliation |
| `cp_water_chemicals` | `component_fabrication` | cleaning water and sodium hydroxide | batch sheets, meters and chemical issue records | water input; solution mass; NaOH fraction; bath carryover; lot; work order | meter water and reconcile chemical issues; calculate active NaOH | kg | each bath or batch | production lot | reporting factory | sum attributable water; solution mass × NaOH fraction | meter calibration; SDS/specification; bath record |
| `cp_fuel_meter` | `component_fabrication` | process natural gas | gas meter and burner work-order log | volume; temperature/pressure basis; burner/process; operating time; allocation driver | submeter or physically allocate verified process meter | m3 | each batch or monthly | representative annual period | reporting factory | sum attributable reference-condition volume | meter calibration; invoice reconciliation |
| `cp_waste_records` | `component_fabrication` | steel scrap and wastewater | weigh tickets, wastewater meters and transfer records | waste identity; mass/volume; source process; date; treatment destination; recovery status | reconcile internal collection and external transfer documents | kg | each transfer | production lot and reference year | reporting factory | sum attributable outputs without avoided-burden credit | weigh ticket; manifest; treatment receipt |
| `cp_direct_emissions` | `component_fabrication` | direct fossil carbon dioxide | stack test, continuous meter or verified facility inventory | emission mass; measurement/calculation method; fuel record link; time; allocation driver | direct measurement preferred; verified calculation retained when used | kg | each test or reporting period | representative annual period | foreground combustion sources | allocate only direct foreground emissions | calibration/test report or verified calculation file |
| `cp_test_records` | `factory_testing` | electricity, water and carbon dioxide test media | factory-acceptance test log and meters | protocol id; serial/configuration; test duration; kWh; water mass; CO2 mass; pass/rework result | meter complete test cycles and link them to accepted serial numbers | MJ, kg | each accepted machine | production lot | reporting test bay | include initial and repeated tests attributable to accepted output | signed acceptance report; meter records |
| `cp_packaging_records` | `dispatch_packaging` | dispatch packaging | packing list, packaging specification and weights | packaging item; material; unit mass; quantity; reuse count; destination | reconcile packing list with weighed or supplier-specified mass | kg | each dispatch | production lot | manufacturer gate | sum supplied packaging; divide reusable item mass by verified uses | packing list; weight evidence; reuse log |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calculation_01` | all variable inventory rows | normalized amount = attributable amount / net accepted-machine mass × 1,000 | attributable exchange; net accepted-machine kg | exchange per 1,000 kg machine | `eu-pef-method-2021` |
| `calculation_02` | electricity rows | MJ = metered kWh × 3.6 | metered kWh | MJ electricity | `eu-pef-method-2021` |
| `calculation_03` | sodium hydroxide | active NaOH kg = solution kg × measured or supplier-declared mass fraction | solution mass; NaOH fraction | kg active NaOH |  |
| `calculation_04` | reusable wooden pallet | attributable pallet kg = pallet kg / verified number of uses | pallet mass; reuse count | kg pallet per dispatch |  |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `quality_01` | product identity | Configuration and required qualifiers shall match the accepted serial number and reference product. | signed BOM release and factory-acceptance record |
| `quality_02` | completeness | Reconcile BOM mass to net machine mass and explain excluded, confidential or embedded component masses. | mass-balance worksheet and BOM reconciliation |
| `quality_03` | temporal representativeness | Foreground energy, water, fuel and waste records shall cover the production lot or a representative twelve-month period that includes it. | dated records and representativeness statement |
| `quality_04` | geography and technology | Disclose supplier and energy geography, material grades, recycled content, fabrication route, test protocol and waste destination. | supplier declarations and process metadata |
| `quality_05` | uncertainty | Report measurement, allocation and proxy uncertainty; flag all source-free category range gaps rather than treating a single EPD case as a range. | uncertainty record and unresolved-evidence review |

## 9. Validation Rules

| rule_id | Applies to | rule | source_ids |
| --- | --- | --- | --- |
| `validation_01` | reference flow | Confirm reference output is exactly 1,000 kg net accepted machine and all required qualifiers are populated. | `eu-pef-method-2021` |
| `validation_02` | inventory identity | Confirm every row is one atomic exchange and every UUID-bearing English/Chinese name, flow type, property and unit matches its public state-100 audit. |  |
| `validation_03` | BOM boundary | Confirm purchased assemblies are not double-counted with their embedded raw materials. | `eu-pef-method-2021` |
| `validation_04` | process completeness | Confirm procurement/fabrication, final assembly and factory testing are represented; justify non-applicable conditional rows and dispatch packaging. | `ecolean-filling-machines-epd-2021` |
| `validation_05` | mass balance | Reconcile net machine mass, incorporated materials/components, fabrication losses and excluded confidential mass within the stated uncertainty. |  |
| `validation_06` | energy and gases | Confirm electricity conversion, gas reference conditions, grid geography and separation of oxygen, carbon dioxide and natural gas. |  |
| `validation_07` | waste and emissions | Confirm steel scrap, cleaning wastewater and direct fossil carbon dioxide are reported only when generated, with destinations and no double-counted upstream emissions. |  |
| `validation_08` | allocation | Confirm subdivision was attempted first and every remaining allocation driver is causal, documented and sensitivity-tested when material. | `eu-pef-method-2021` |
| `validation_09` | evidence gaps | Confirm no empirical range was inferred from one product case and all unresolved UUID/range needs remain disclosed. |  |
| `validation_10` | bilingual alignment | Confirm English and Chinese files have identical process ids, row ids, rule ids, controlled tokens, UUIDs and source ids. |  |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | Product-specific cradle-to-gate machine production dataset |
| downstream_use | May be used as a `secondary_dataset` or `background_dataset` for capital-equipment or machinery-production modelling when configuration and boundary match |
| allowed_use | Modelling production of the declared configured machinery; scenario analysis with disclosed supplier, energy, allocation and packaging assumptions |
| excluded_use | Direct comparison of unlike functions/configurations; representing separately sold parts; substituting for machine use, maintenance or end-of-life; using one filling-machine case as a universal category benchmark |
| required_metadata | PCR id/version; machine function/model/configuration; serial or configuration reference; net mass; capacity and acceptance criteria; container/product compatibility; design life; included accessories; site/year; BOM boundary; suppliers/geographies; energy mix; allocation; testing media; dispatch packaging; waste destinations; unresolved/proxy disclosures |
| required_quality_disclosure | Foreground coverage; BOM reconciliation; measurement and allocation methods; temporal/geographic/technological representativeness; data gaps; uncertainty; share of supplier-specific data; verification status |
| update_trigger | Material change to design/BOM, mass, drive/control system, manufacturing route/site, supplier geography, energy mix, test protocol, packaging, allocation method, waste treatment or a change exceeding the study's significance threshold |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `un-cpc-3-0-structure-2025` | `official_guidance` | United Nations Statistics Division, CPC Version 3.0 Structure, 30 June 2025, https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Structure_30Jun2025.csv (retrieved 2026-09-06) | Official classification identity and broad product scope |
| `ecolean-filling-machines-epd-2021` | `dataset` | EPD International, EPD-IES-0001057:002 (S-P-01057), Ecolean Filling Machines EL1+ and EL2+, version date 2021-09-30, https://www.environdec.com/library/epd1057 (retrieved 2026-09-06) | Representative filling-machine composition; component procurement, assembly, quality assurance and testing decomposition; scope distinctions; not used as an empirical category range |
| `eu-pef-method-2021` | `official_guidance` | European Commission, Recommendation (EU) 2021/2279, Annexes 1-2: Product Environmental Footprint Method, 16 December 2021, https://environment.ec.europa.eu/system/files/2021-12/Annexes%201%20to%202.pdf (retrieved 2026-09-06) | Functional unit, reference flow, system boundary, company-specific data, allocation and quality rules |
