---
pcr_id: pcr.metal-products-machinery-and-equipment.electrical-machinery-and-apparatus.electrical-transformers
language: en-US
status: candidate
content_maturity: authored_methodology
translation_status: canonical
sync_with: pcr.zh-CN.md
---

# Electrical transformers

## 1. Scope and Applicability

This PCR applies to the manufacture of complete electrical transformers, including liquid-immersed, dry-type, conventional electrical-steel-core, and amorphous-core designs. It provides a common factory-gate data-production rule across power, distribution, instrument, isolation, control, welding, testing, and other transformer applications when the product remains an electrical transformer.

The foreground boundary begins with purchased materials, purchased transformer subassemblies, water, fuels, gases, and electricity at the manufacturing site and ends with one finished, factory-tested transformer ready to leave the factory. Static converters, ballasts, stand-alone inductors, stand-alone transformer parts, installation, use-phase electricity losses, maintenance, refurbishment, and end-of-life treatment are outside this foreground dataset. A study may model those stages downstream, but it must not merge them into the factory manufacturing inventory.

The product-specific bill of materials and route determine which conditional rows apply. A foreground data package must add any further concrete atomic exchange that crosses the actual site boundary; this PCR's listed rows are the minimum common set and may not be replaced by umbrella labels.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.metal-products-machinery-and-equipment.electrical-machinery-and-apparatus.electrical-transformers |
| classification_refs | CPC 3.0: 46121 Electrical transformers |
| covered_products | Complete electrical transformers that transform voltage and current by electromagnetic induction, including liquid-immersed and dry-type products and application-specific transformer designs |
| excluded_products | Static converters, ballasts, stand-alone inductors, stand-alone transformer parts, substations and construction works, and contract manufacturing services without ownership of the finished transformer |
| representative_product | One complete factory-tested electrical transformer configured to the declared rated power, voltage ratio, frequency, phase count, insulation and cooling system, and application |
| production_route | Purchased material and subassembly receipt; core and winding manufacture; insulation and enclosure or tank assembly; route-specific drying, casting, liquid filling, cleaning and finishing; final assembly and factory testing |
| market_state | Finished, factory-tested, unpackaged transformer at the manufacturer's gate before outbound transport, installation, use, or end-of-life |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Transform an alternating-voltage and current system into another declared alternating-voltage and current system by electromagnetic induction for transmission, distribution, supply, measurement, control, isolation, testing, welding, or another declared transformer application |
| How much | Provide the declared rated apparent power in kVA under the declared operating and loading profile |
| How well | Meet the declared voltage ratio, frequency, phase count, insulation and cooling technology, no-load loss, load loss, impedance, temperature-rise, and applicable performance or conformity requirements |
| How long or cycle | Operate for the declared reference service life and declared lifetime operating hours or duty cycles; the manufacturing dataset itself ends at the factory gate |
| reference_flow_link | One complete factory-tested transformer required to provide the declared function |

| Field | Value |
| --- | --- |
| Reference amount | 1 Item(s) |
| Reference product flow | Transformer `734249ea-34e6-471b-a05a-f5b26b818167` |
| Reference flow property | Number of items `01846770-4cfe-4a25-8ad9-919d8d378345` |
| Reference unit group | Units of items `5beb6eed-33a9-47b8-9ede-1dfe8f679159` |
| Reference unit | Item(s) |
| Required qualifiers | transformer application; rated apparent power; primary and secondary rated voltages; frequency; phase count; winding conductor metal; magnetic-core technology and grade; liquid-immersed or dry-type insulation system; cooling method; no-load and load losses and their test conditions; impedance; total product mass; factory location and production period; reference service life; lifetime operating and loading profile; included accessories and unpackaged factory-gate state |

When constructing a foreground data package, every required qualifier must be declared in dataset metadata, process notes, the reference flow comment, the product description, or an equivalent field. The Tiangong reference product supplies category identity only; it does not encode product rating, technology, geography, performance, or service life.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| `reference_item_count` | Finished transformer reference flow | Number of items `01846770-4cfe-4a25-8ad9-919d8d378345` | Item(s) | Record exactly one accepted, factory-tested transformer as the quantitative reference; report its measured total mass separately as a required qualifier. |
| `material_mass_balance` | Material inputs and solid or liquid wastes | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Weigh or derive mass from traceable receipts and product-specific issue and return records; reconcile input material with incorporated mass, recoverable scrap, other documented loss, and stock change without forcing unlike materials into one balance. |
| `electricity_energy_basis` | Purchased electricity | Net calorific value `93a60a56-a3c8-11da-a746-0800200b9a66` | MJ | Preserve metered electrical energy and convert kWh to MJ only by multiplying by 3.6; exclude use-phase transformer losses and state the meter boundary and loss treatment. |
| `gas_volume_basis` | Natural gas and industrial oxygen | Volume `93a60a56-a3c8-22da-a746-0800200c9a66` | m3 | Record delivered or metered volume at declared reference temperature and pressure; do not combine the two gases or convert mass and volume without a documented composition and conversion basis. |
| `factory_test_separation` | Factory acceptance and routine testing | Measured energy and electrical test results | MJ; W; kVA; V; Hz | Record test-bay electricity in manufacturing electricity, while no-load and load-loss results remain product-performance metadata and must not be added as manufacturing energy. |

## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Purchased materials, purchased transformer subassemblies, water, fuels, gases, and electricity as received at the declared manufacturing site |
| starting_condition_role | Upstream production is represented by supplier or background datasets; the foreground starts when each input crosses the manufacturing-site boundary |
| product_classification_scope | Complete electrical transformers; not static converters, ballasts, stand-alone inductors, stand-alone parts, substations, or contract manufacturing services |
| recursive_input_rule | A purchased complete transformer entering the factory is recorded as an upstream transformer product only when it is physically incorporated or transformed; it must not be recursively remodelled inside this manufacturing process, and its supplier dataset and treatment must be disclosed |
| upstream_dataset_requirement | Use geographically, technologically, temporally, and product-state-representative supplier or background datasets for every purchased input, with explicit treatment of recycled content and allocation |
| disclosure | Declare site, production period, transformer design and rating, bill-of-materials coverage, core and winding technologies, insulation and cooling system, included accessories, factory test scope, meter boundaries, stock changes, scrap destinations, direct emissions, and all exclusions |

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| `boundary_factory_gate` | foreground manufacturing | Include material preparation, core and winding manufacture, insulation and structural assembly, applicable drying or casting or liquid filling, cleaning and finishing, final assembly, and factory testing through acceptance of the finished transformer at the factory gate. | `ec-transformer-impact-assessment-2014` |
| `boundary_variant_disclosure` | product and route selection | Distinguish liquid-immersed and dry-type insulation systems and conventional electrical-steel and amorphous-core routes; include each conditional atomic exchange only when the declared product and site records demonstrate that route. | `eu-power-transformers-regulation-548-2014`, `ec-transformer-impact-assessment-2014` |
| `boundary_downstream_exclusion` | downstream lifecycle stages | Exclude outbound transport, installation, use-phase electricity losses, maintenance, refurbishment, and end-of-life from this factory-gate foreground inventory; model them as separate downstream processes when the study goal requires them. | `ec-transformer-impact-assessment-2014` |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| `transformer_manufacturing` | Electrical-transformer manufacturing and factory testing | required | Always included for a factory-gate transformer dataset | Foreground production | 1 accepted factory-tested transformer |
| `transformer_use` | Transformer operation | excluded_by_default | Model downstream only when the study goal extends beyond the factory gate | Downstream use | Declared operating and loading profile |
| `transformer_end_of_life` | Transformer decommissioning and treatment | excluded_by_default | Model downstream only when the study goal extends beyond the factory gate | Downstream end-of-life | Declared treatment scenario |

### Process: Electrical-transformer manufacturing and factory testing (`transformer_manufacturing`)

#### Inputs

##### Product flows

###### Grain-oriented electrical steel for a conventional magnetic core (`grain_oriented_electrical_steel`)

Record one specific grain-oriented electrical-steel sheet or strip input used in the manufactured core. This row is conditional on a conventional grain-oriented electrical-steel core and is omitted for an amorphous-core design.

- Selected flow: Grain-oriented electrical steel sheet
- Flow property / unit: Mass / kg
- Amount rule: Product-specific issued mass less traceable unused returns, normalized to one accepted transformer
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 accepted factory-tested transformer
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material_balance`
- Sources:

###### Amorphous magnetic-core strip (`amorphous_alloy_strip`)

Record amorphous alloy strip only for an amorphous-core design; do not also record grain-oriented electrical steel for the same core unless both are physically incorporated and separately documented.

- Selected flow: Amorphous alloy strip `db4d6a66-a479-428f-b005-f5efbee3106d`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; unit group `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Product-specific issued mass less traceable unused returns, normalized to one accepted transformer
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 accepted factory-tested transformer
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material_balance`
- Sources:

###### Copper winding conductor (`copper_wire`)

Record copper wire when copper conductor is incorporated in transformer windings. Do not use this row for aluminum conductor or for mixed conductor stock.

- Selected flow: copper wire `da2d966d-fe62-44dc-ba0f-b1cd7c7cf33e`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; unit group `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Product-specific issued copper-wire mass less traceable unused returns, normalized to one accepted transformer
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 accepted factory-tested transformer
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material_balance`
- Sources:

###### Aluminum winding conductor (`aluminum_wire`)

Record aluminum wire only when aluminum conductor is incorporated in transformer windings. Do not substitute unwrought aluminum or a conductor of unspecified metal.

- Selected flow: Aluminum wire `89db8507-09bd-45f8-ba96-4e459058412c`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; unit group `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Product-specific issued aluminum-wire mass less traceable unused returns, normalized to one accepted transformer
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 accepted factory-tested transformer
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material_balance`
- Sources:

###### Epoxy resin for a cast-resin insulation system (`epoxy_resin`)

Record formulated epoxy resin only when it is consumed in a cast-resin or resin-encapsulated transformer insulation system. Other distinct resin, hardener, filler, or solvent inputs must be added as separate atomic rows.

- Selected flow: Epoxy resin
- Flow property / unit: Mass / kg
- Amount rule: Product-specific net resin mass issued to casting and curing, normalized to one accepted transformer
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 accepted factory-tested transformer
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material_balance`
- Sources:

###### Electrical insulation paper (`electrical_insulation_paper`)

Record electrical insulation paper when incorporated between turns, layers, windings, or core-and-coil components. Distinct pressboard or other insulation products must be added separately when used.

- Selected flow: Electrical insulation paper
- Flow property / unit: Mass / kg
- Amount rule: Product-specific issued insulation-paper mass less traceable unused returns, normalized to one accepted transformer
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 accepted factory-tested transformer
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material_balance`
- Sources:

###### Transformer insulating oil (`transformer_insulating_oil`)

Record transformer insulating oil only for a liquid-filled design and include both the oil retained in the accepted product and documented manufacturing losses crossing the site boundary.

- Selected flow: Transformer insulating oil `252efad6-76d5-55f4-a338-0ed8d03cf335`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; unit group `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Product-specific delivered or issued oil mass less traceable unused return and stock change, normalized to one accepted transformer
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 accepted factory-tested transformer
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material_balance`
- Sources:

###### Purchased transformer structural components and casing (`transformer_structural_components`)

Record the purchased transformer-specific structural subassembly when it crosses the foreground boundary as one supplied product. If the site fabricates individual tank or enclosure materials, replace this subassembly row with separate concrete input rows and avoid double counting.

- Selected flow: Transformer structural components and casing `d4d9d3f9-9a57-4ca3-953c-f9bad98d5bc1`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; unit group `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Product-specific received subassembly mass incorporated in one accepted transformer
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 accepted factory-tested transformer
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material_balance`
- Sources:

###### Factory electricity (`electricity`)

Record electricity delivered to the declared manufacturing and factory-test meter boundary. Exclude electricity attributable to downstream transformer operation.

- Selected flow: Electricity `890a70b7-b677-4e2a-8a1b-7d017e0a10ae`
- Flow property / unit: Net calorific value `93a60a56-a3c8-11da-a746-0800200b9a66` / MJ; unit group `93a60a57-a3c8-11da-a746-0800200c9a66`
- Amount rule: Metered manufacturing and factory-test electricity allocated by traceable submeter or documented causal allocation, normalized to one accepted transformer
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 accepted factory-tested transformer
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_utility_records`
- Sources:

###### Gaseous natural gas for on-site thermal operations (`natural_gas`)

Record gaseous natural gas only when it is burned or otherwise consumed on site for drying, curing, heating, or another declared manufacturing operation. Do not include upstream gas combustion embedded in purchased electricity or materials.

- Selected flow: natural gas in the gaseous state `4f19ca0e-7b3b-11dd-ad8b-0800200c9a66`
- Flow property / unit: Volume `93a60a56-a3c8-22da-a746-0800200c9a66` / m3; unit group `93a60a57-a3c8-12da-a746-0800200c9a66`
- Amount rule: Metered or invoiced site consumption for included manufacturing operations, normalized to one accepted transformer and reported at declared reference conditions
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 accepted factory-tested transformer
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_utility_records`
- Sources:

###### Industrial oxygen for on-site oxy-fuel cutting (`industrial_oxygen`)

Record industrial oxygen only when oxy-fuel cutting or another identified manufacturing operation consumes purchased oxygen within the site boundary.

- Selected flow: Industrial oxygen `bd4b0f96-2090-4806-a648-335ab20ff401`
- Flow property / unit: Volume `93a60a56-a3c8-22da-a746-0800200c9a66` / m3; unit group `93a60a57-a3c8-12da-a746-0800200c9a66`
- Amount rule: Metered or cylinder-delivery oxygen volume consumed by included operations, normalized to one accepted transformer at declared reference conditions
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 accepted factory-tested transformer
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_utility_records`
- Sources:

###### Process water for cleaning or testing (`process_water`)

Record process water only when water crosses the site boundary for transformer-part cleaning, leak testing, or another identified manufacturing operation. Cooling water must be represented by a distinct row if it crosses the boundary.

- Selected flow: Process Water `94a04f7e-2d5c-41f0-b182-d54a3b373a02`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; unit group `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Metered or batch-record process-water mass consumed by included operations, normalized to one accepted transformer
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 accepted factory-tested transformer
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_water_chemical_records`
- Sources:

###### Sodium hydroxide for alkaline cleaning (`sodium_hydroxide`)

Record sodium hydroxide only when an alkaline cleaning bath consumes it within the foreground boundary. Report dry NaOH-equivalent mass and separately disclose supplied solution concentration.

- Selected flow: Sodium hydroxide `e0abcced-0611-4c24-9290-5a2c5a0c4169`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; unit group `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Dry NaOH-equivalent mass from product mass multiplied by documented concentration, normalized to one accepted transformer
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 accepted factory-tested transformer
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_water_chemical_records`
- Sources:

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Accepted finished transformer (`transformer_product`)

Record the accepted reference product after factory tests and any rework required for acceptance. Rejected units are not counted as reference output.

- Selected flow: Transformer `734249ea-34e6-471b-a05a-f5b26b818167`
- Flow property / unit: Number of items `01846770-4cfe-4a25-8ad9-919d8d378345` / Item(s); unit group `5beb6eed-33a9-47b8-9ede-1dfe8f679159`
- Amount rule: One accepted factory-tested transformer
- Value mode: Fixed value (`fixed_value`)
- Specificity: Generic (`generic`)
- Normalization basis: 1 accepted factory-tested transformer
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_product_acceptance`
- Sources:

##### Waste flows

###### Post-industrial steel scrap (`post_industrial_steel_scrap`)

Record ferrous offcuts and rejected steel parts leaving the site as post-industrial steel scrap. Do not combine copper, aluminum, oil, or mixed hazardous residues in this row.

- Selected flow: Post-industrial steel scrap `c143745d-be4f-4d8f-b403-2dcbfe685349`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; unit group `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Weighed shipment mass plus documented stock change attributable to the accepted transformer
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 accepted factory-tested transformer
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste_records`
- Sources:

###### Copper winding scrap (`copper_scrap`)

Record copper offcuts and rejected copper winding material leaving the site as copper scrap. Keep contaminated or mixed metal waste separate.

- Selected flow: Copper Scrap `4fbbb5f1-560a-4052-ba0c-652c5dfc282e`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; unit group `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Weighed shipment mass plus documented stock change attributable to the accepted transformer
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 accepted factory-tested transformer
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste_records`
- Sources:

###### Aluminum winding scrap (`aluminum_scrap`)

Record aluminum offcuts and rejected aluminum winding material only when the aluminum-conductor route applies. Keep contaminated or mixed metal waste separate.

- Selected flow: Aluminium Scrap `96c5f842-ea53-419b-b1cd-c02c479efb45`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; unit group `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Weighed shipment mass plus documented stock change attributable to the accepted transformer
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 accepted factory-tested transformer
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste_records`
- Sources:

###### Waste transformer insulating oil (`waste_transformer_insulating_oil`)

Record off-spec, spilled, drained, or otherwise discarded mineral transformer insulating oil that leaves the site for treatment. Do not use generic lubricating-oil identities or combine aqueous cleaning waste with this row.

- Selected flow: Waste transformer insulating oil
- Flow property / unit: Mass / kg
- Amount rule: Weighed or volume-to-mass-converted shipment quantity attributable to the accepted liquid-filled transformer, with density and reference conditions documented
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 accepted factory-tested transformer
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste_records`
- Sources:

##### Elementary flows

###### Direct fossil carbon dioxide from on-site natural-gas combustion (`fossil_carbon_dioxide`)

Record only direct fossil carbon dioxide crossing from the foreground site to air when on-site natural-gas combustion occurs. Upstream emissions from purchased electricity, fuels, or materials remain in their upstream datasets.

- Selected flow: carbon dioxide (fossil) `08a91e70-3ddc-11dd-923d-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; unit group `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Directly measured site emission attributable to included natural-gas combustion and normalized to one accepted transformer; if calculated instead, add a reviewed calculation rule and factor source before use
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 accepted factory-tested transformer
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_direct_emissions`
- Sources:

## 7. Allocation and Co-product Handling

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| `allocation_subdivision_first` | shared manufacturing operations | Avoid allocation by product-specific bills of materials, batch records, test records, and submetered utilities; subdivide production cells or time periods whenever the records permit. |  |
| `allocation_causal_shared_inputs` | residual shared utilities and consumables | When subdivision is not possible, use a documented causal driver such as machine time, oven occupancy, test duration, or measured throughput that reflects consumption; disclose the driver and test sensitivity to a reasonable alternative. |  |
| `allocation_scrap_no_credit` | scrap and waste outputs | Report scrap and waste as physical outputs at the factory gate. Do not subtract avoided virgin-material burdens or recycling credits from the foreground manufacturing inventory; downstream models may apply a separately disclosed end-of-life allocation convention. |  |
| `allocation_rework_and_rejects` | rework and rejected units | Attribute rework inputs and the material and energy burden of rejected units to accepted output using the same production-period records; do not count a rejected transformer as reference output. |  |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_material_balance` | `transformer_manufacturing` | material and purchased-subassembly inputs | purchase, warehouse issue, return, stock and bill-of-material records | material identity; supplier; lot; received mass; issued mass; unused return; opening and closing stock; product serial or batch; route applicability | Reconcile purchasing and stores records to the product-specific bill of materials and production order | kg | Each receipt and production order | Representative continuous production period, normally at least 12 months unless justified | All included manufacturing buildings and stores at the declared site | Net input equals receipts plus opening stock minus returns, closing stock and documented transfers; normalize to accepted units | Calibrated scale records; invoices; material certificates; stock reconciliation; bill-of-material revision |
| `cp_utility_records` | `transformer_manufacturing` | electricity, natural gas and industrial oxygen inputs | meter, invoice and cylinder-delivery records | meter id; opening and closing readings; energy or gas quantity; reference conditions; delivery quantity; process area; production period; allocation driver | Prefer process or production-area submeters; reconcile to site invoices and delivery records | MJ for electricity; m3 for gases | Meter interval or each delivery, aggregated monthly | Same production period as accepted product output | All included production and factory-test meters | Subtract excluded loads, apply documented causal allocation, and divide by accepted transformer count | Meter calibration; invoice reconciliation; meter map; excluded-load log |
| `cp_water_chemical_records` | `transformer_manufacturing` | process water and sodium hydroxide inputs | water-meter, batch make-up and chemical issue records | water volume or mass; chemical product mass; NaOH concentration; bath make-up; bath disposal; production order; density conversion | Read meters and cleaning-bath records; calculate dry NaOH-equivalent from supplied product mass and concentration | kg | Each batch or meter interval, aggregated monthly | Same production period as accepted product output | Included cleaning and testing operations | Sum net input, document reuse and stock change, and normalize to accepted transformer count | Meter calibration; concentration certificate; batch sheet; stock reconciliation |
| `cp_product_acceptance` | `transformer_manufacturing` | accepted transformer output | production order and factory acceptance test record | serial number; product model; acceptance status; rated power; voltages; frequency; phases; losses; impedance; insulation and cooling system; total mass; accessories | Count only units with completed acceptance records and link each unit to its product configuration | Item(s) and kg | Each unit | Same production period as inventory records | Declared factory and test bay | Count accepted units and retain product-level qualifiers; normalize inventory to one accepted unit | Signed acceptance record; calibrated test equipment; weigh record; configuration release |
| `cp_waste_records` | `transformer_manufacturing` | steel, copper, aluminum and waste insulating-oil outputs | waste container, scale, shipment, stock and treatment records | waste identity; source operation; container; gross and tare mass; stock change; shipment date; destination; treatment route | Weigh each shipment or container and reconcile opening and closing waste stock | kg | Each container or shipment, aggregated monthly | Same production period as accepted product output | All included production and waste-storage areas | Net waste equals shipments plus closing stock minus opening stock and documented incoming transfers; allocate by source records and normalize to accepted units | Scale calibration; waste manifest; carrier receipt; stock reconciliation; photographs or contamination classification |
| `cp_direct_emissions` | `transformer_manufacturing` | direct fossil carbon dioxide output | stack or exhaust measurement record | source id; fuel-consuming operation; concentration; flow rate; sampling duration; operating hours; fossil attribution; production period | Use calibrated direct measurement covering included on-site combustion; calculated values require a separately reviewed rule and factor source | kg | Each test or continuous interval according to monitoring system | Representative operating period aligned with production | Every included combustion source | Integrate measured mass over operating time, apply documented production allocation, and normalize to accepted units | Calibration; sampling report; operating log; source inventory; fossil-origin evidence |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_normalize_per_transformer` | all foreground exchanges | Normalized amount equals the net exchange assigned to the product configuration divided by the count of accepted transformers represented by the records. | net exchange; accepted transformer count | exchange per 1 accepted transformer |  |
| `calc_electricity_conversion` | electricity reported in kWh | Electrical energy in MJ equals metered kWh multiplied by 3.6; retain the original meter value and conversion. | metered kWh | electricity MJ |  |
| `calc_naoh_dry_equivalent` | sodium hydroxide solution | Dry NaOH-equivalent mass equals supplied solution mass multiplied by the supplier-certified NaOH mass fraction. | solution mass; certified NaOH mass fraction | kg dry NaOH equivalent |  |
| `calc_inventory_reconciliation` | each material family | Net material input must reconcile to incorporated product mass plus same-material waste, documented other loss, and stock change; investigate and disclose any residual rather than assigning it to an umbrella flow. | net input; incorporated mass; waste mass; other loss; stock change | material-specific reconciliation residual |  |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_product_identity` | reference product | Link every accepted item to a serial number or production order and retain all required reference-flow qualifiers. | Product configuration, nameplate data, acceptance record and bill-of-material revision |
| `dq_temporal_alignment` | all foreground records | Use one representative production period across inputs, outputs and accepted units; disclose shutdowns, commissioning, unusual rework and any shorter-than-12-month period. | Dated meter, purchasing, stock, production, test and waste records |
| `dq_completeness` | site boundary | Reconcile purchasing, utility, output and waste totals; disclose missing meters, estimates, excluded buildings and every actual atomic flow added beyond the minimum rows. | Site flow map, reconciliation worksheet and signed completeness review |
| `dq_variant_consistency` | conditional routes | Apply mutually exclusive or combined core, conductor and insulation rows according to the actual bill of materials; do not infer route from the category name. | Bill of materials, drawings, material certificates and production traveller |
| `dq_source_representativeness` | upstream datasets | Select upstream datasets matching material grade, product state, supplier technology, geography and period where possible; disclose proxies and sensitivity. | Supplier declarations, dataset metadata and proxy log |
| `dq_performance_metadata` | downstream interpretation | Retain rated power, voltage ratio, frequency, phase count, no-load and load losses, test conditions, impedance, cooling and insulation system, reference service life and loading profile because factory-gate mass alone does not describe transformer function. | Nameplate, type or routine test report, technical specification and declared use scenario |

## 9. Validation Rules

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| `validation_reference_flow` | reference product | Fail validation unless the output is exactly one accepted Transformer item with the listed product, property and unit-group UUIDs and every required qualifier is populated. | `eu-power-transformers-regulation-548-2014` |
| `validation_inventory_identity` | inventory rows | Fail validation when a selected flow combines multiple materials, utilities, wastes, or emissions, when an unresolved row is assigned a proxy UUID, or when a conditional row lacks route applicability. |  |
| `validation_mass_reconciliation` | material families | Require a documented material-specific reconciliation and investigate non-zero residuals; do not balance one material with another or silently assign a residual to other waste. |  |
| `validation_boundary_separation` | manufacturing energy and emissions | Fail validation if use-phase transformer losses or upstream emissions from purchased electricity, fuels, or materials are counted as direct factory exchanges. | `ec-transformer-impact-assessment-2014` |
| `validation_bilingual_identity` | localized flow displays | Require identical row ids, UUIDs and controlled values across languages and require the exact Tiangong Chinese baseName for every UUID-bearing flow. |  |
| `validation_unresolved_evidence` | publication readiness | Treat the four unresolved flow UUIDs and every unresolved external range-evidence need as review blockers for publication, while retaining foreground collection requirements for candidate use. |  |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | Product-specific factory-gate foreground manufacturing dataset for one accepted electrical transformer |
| downstream_use | secondary_dataset; background_dataset |
| allowed_use | Supplier-specific or representative transformer manufacturing in product systems when the declared design, rating, technology, geography, period and factory-gate boundary match; linkage to separately modelled transport, installation, use, maintenance and end-of-life stages |
| excluded_use | Direct comparison of transformer efficiency, lifetime performance or whole-life impacts without compatible rated power, voltage, loss, loading, service-life and downstream scenarios; representation of static converters, inductors, parts, substations or contract manufacturing services |
| required_metadata | Canonical PCR id; product and UUID identity; all required reference-flow qualifiers; site and production period; bill-of-material revision; route applicability; collection protocols; allocation drivers; accepted-unit count; total mass; upstream dataset choices; exclusions and unresolved evidence |
| required_quality_disclosure | Temporal and site coverage; meter and scale calibration; record completeness; material reconciliation residuals; data gaps and estimates; proxy upstream datasets; conditional rows; stock changes; scrap destinations; direct-emission measurement coverage; uncertainty and review status |
| update_trigger | Change in transformer design, rated power family, core or conductor technology, insulation or cooling system, factory or production line, bill of materials, energy supply, cleaning or finishing route, allocation driver, upstream dataset, applicable performance specification, or evidence that materially changes the normalized inventory |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `un-cpc-3-0-structure-2025` | Dataset (`dataset`) | United Nations Statistics Division, CPC Version 3.0 Structure, 30 June 2025, https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Structure_30Jun2025.csv, retrieved 2026-09-04 | Official CPC 46121 product classification identity and exclusions of neighbouring CPC products |
| `eu-power-transformers-regulation-548-2014` | Standard (`standard`) | Commission Regulation (EU) No 548/2014 of 21 May 2014 with regard to small, medium and large power transformers, https://eur-lex.europa.eu/legal-content/EN/TXT/PDF/?uri=CELEX%3A32014R0548, retrieved 2026-09-04 | Power-transformer definition; rated power, voltage, frequency, liquid-immersed and dry-type qualifiers; performance disclosure context |
| `ec-transformer-impact-assessment-2014` | Official guidance (`official_guidance`) | European Commission, Commission Staff Working Document Impact Assessment accompanying power-transformer ecodesign requirements, SWD(2014) 162, https://ec.europa.eu/smart-regulation/impact/ia_carried_out/docs/ia_2014/swd_2014_0162_en.pdf, retrieved 2026-09-04 | Transformer variant and lifecycle context; magnetic steel, copper or aluminum, resin and oil relevance; factory loss testing and downstream-stage separation |
| `gbt-1094-1-2013` | Standard (`standard`) | State Administration for Market Regulation and Standardization Administration of China, GB/T 1094.1-2013 Power transformers—Part 1: General, https://openstd.samr.gov.cn/bzgk/std/newGbInfo?hcno=C3539A02733314553221D30BB7A2A0DF, retrieved 2026-09-04 | Professional Chinese product title 电力变压器 and terminology alignment |
