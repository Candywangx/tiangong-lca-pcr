---
pcr_id: pcr.metal-products-machinery-and-equipment.general-purpose-machinery.weighing-machinery-excluding-balances-of-a-sensitivity-of-5-cg-or-better
language: en-US
status: candidate
sync_with: pcr.zh-CN.md
---

# Weighing machinery (excluding balances of a sensitivity of 5 cg or better)

## 1. Scope and Applicability

This PCR governs cradle-to-factory-gate foreground data packages for complete manual, non-automatic, and automatic machinery whose principal function is to determine mass by weighing. It covers shop, platform, bench, floor, vehicle, conveyor, catchweighing, checkweighing, price-labelling, filling, totalising, and comparable weighing machines when supplied as complete equipment.

Balances with a sensitivity of 5 cg or better, standalone weights and parts, laboratory precision-balance subassemblies, installation at the customer site, distribution, use-phase electricity, calibration after placement in service, maintenance, and end-of-life are excluded. A study that includes an excluded life-cycle stage shall model it as a separately declared process rather than silently adding it to this factory-gate rule.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.metal-products-machinery-and-equipment.general-purpose-machinery.weighing-machinery-excluding-balances-of-a-sensitivity-of-5-cg-or-better |
| classification_refs | CPC 3.0: 43922, exact classification context |
| covered_products | Complete weighing machines below the excluded precision-balance boundary, including non-automatic and automatic instruments |
| excluded_products | Balances with a sensitivity of 5 cg or better; standalone weighing-machine weights; parts and subassemblies sold separately; non-weighing measuring instruments |
| representative_product | A complete factory-tested weighing machine with load receptor, load-transmission and indicating elements; electronic control is included when fitted |
| production_route | Purchased material and component receipt; in-house metal fabrication when performed; conditional alkaline parts cleaning; final assembly; calibration and functional testing; factory packaging |
| market_state | Complete, calibrated or factory-tested equipment, packaged and ready for dispatch at the manufacturer's factory gate |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Complete weighing machinery that determines the mass of a load under declared operating conditions |
| How much | 1 kg net mass of complete weighing machinery |
| How well | Declared automatic or non-automatic mode, rated minimum and maximum capacity, scale or verification interval, accuracy class where applicable, load-receptor configuration, electrical supply, and intended product or application |
| How long or cycle | Production through the packaged factory-gate state; service life and number of weighing cycles are declared metadata but are outside the inventory boundary |
| reference_flow_link | The output row `weighing_machine_output`, normalized to 1 kg net product mass |

| Field | Value |
| --- | --- |
| Reference amount | 1 kg |
| Reference product flow | Weighing machinery (excluding balances of a sensitivity of 5 cg or better); Tiangong UUID unresolved |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | instrument automation mode; rated minimum and maximum capacity; scale interval or verification scale interval; accuracy class when applicable; load-receptor type; mechanical, electromechanical, or electronic architecture; electrical supply; intended weighed product or application; net product mass; included accessories; factory geography; production year |

When constructing a foreground data package, the items listed in `Required qualifiers` must be declared in dataset metadata, process notes, reference flow comment, product description, or an equivalent data package field. Missing required qualifiers make the reference flow definition incomplete for that data package.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| `reference_product_mass` | reference product and normalization denominator | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Determine net mass of the complete machine after factory testing and before external transport packaging. Exclude pallets and shipping boxes from the reference-product mass and record them as separate inputs. |
| `electricity_energy` | purchased electricity rows | Net calorific value `93a60a56-a3c8-11da-a746-0800200b9a66` | MJ | Preserve meter readings and conversion records. Convert kWh to MJ using 1 kWh = 3.6 MJ and do not mix site generation with purchased electricity without separate disclosure. |
| `gas_volume_conditions` | natural gas and industrial oxygen | Volume `93a60a56-a3c8-22da-a746-0800200c9a66` | m3 | Report metered volume at the supplier or meter reference temperature and pressure and disclose those conditions; do not combine gases into one utility row. |
| `mass_input_output_consistency` | materials, components, packaging, scrap, and waste alkaline liquor | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Use as-received mass for purchased inputs and measured dispatched mass for outputs. Reconcile inventory and stock changes over the same reporting period before normalization. |

## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Purchased metals, components, process chemicals, packaging, fuels, gases, electricity, and water at the manufacturing-site gate |
| starting_condition_role | Cradle-to-gate inputs with upstream production and delivery represented by linked datasets |
| product_classification_scope | Complete weighing machinery within the semantic boundary stated in Sections 1 and 2, independent of any one sales model or rated capacity |
| recursive_input_rule | A purchased complete weighing machine incorporated into another machine is recorded once as a product input with a separate upstream dataset and is not recursively expanded under this PCR |
| upstream_dataset_requirement | Each purchased product or energy input requires a geographically and technologically representative upstream dataset; supplier-specific datasets are preferred when verified |
| disclosure | Declare make-or-buy boundary, included fabrication and cleaning steps, allocation of shared facilities, outsourced processes, packaging configuration, factory geography, reporting period, and any excluded material or emission |

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `boundary_factory_gate` | all foreground processes | Include receipts and stock changes for inputs, in-house fabrication, conditional parts cleaning, assembly, calibration and functional testing, and packaging through the packaged factory-gate output. | `un-cpc-3-0-structure-2025` |
| `boundary_outsourced_operations` | outsourced fabrication, finishing, or component assembly | Represent an outsourced operation through the purchased component or treatment-service dataset and prevent double counting of the same material, energy, waste, or emission in the foreground site. |  |
| `boundary_instrument_architecture` | automatic and non-automatic instruments | Declare the instrument architecture and operating-condition qualifiers so product variants are compared only when their measurement function and rated conditions are compatible. | `oiml-r76-1-2006`; `oiml-r51-1-2006`; `eu-directive-2014-32` |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| `component_fabrication` | Metal component fabrication | conditional | Include when load receptors, frames, enclosures, levers, brackets, or other structural metal components are fabricated at the reporting site; otherwise disclose the make-or-buy boundary and record each purchased finished component in the completed data package | foreground production | kg conforming fabricated components transferred to assembly |
| `alkaline_parts_cleaning` | Aqueous alkaline parts cleaning | conditional | Include only when an aqueous sodium-hydroxide cleaning bath is operated within the foreground boundary | foreground conditioning | kg cleaned metal parts transferred to assembly |
| `assembly_calibration_packaging` | Final assembly, calibration, functional testing, and packaging | required | Always include for a complete factory-gate product | foreground production and release | kg conforming packaged weighing machinery released at the factory gate |

### Process: Metal component fabrication (`component_fabrication`)

#### Inputs

##### Product flows

###### Carbon steel sheet supplied for fabricated structures (`steel_sheet_input`)

Record carbon steel sheet crossing the site boundary for in-house manufacture. Keep grade, coating state, thickness, recycled-content claim, supplier, and geography in the foreground record.

- Selected flow: Carbon steel sheet; Tiangong UUID unresolved
- Flow property / unit: Mass / kg
- Amount rule: Measured receipts plus opening stock minus closing stock and documented returns for the reporting period
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg complete weighing machinery output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_material_mass_balance`

###### Purchased electricity for fabrication (`electricity_fabrication`)

Record electrical energy consumed by cutting, forming, machining, welding, ventilation, and directly attributable fabrication auxiliaries.

- Selected flow: Electricity `890a70b7-b677-4e2a-8a1b-7d017e0a10ae`
- Flow property / unit: Net calorific value / MJ
- Amount rule: Metered fabrication electricity allocated to conforming component output
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg complete weighing machinery output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_energy_and_gas_meters`

###### Natural gas for on-site thermal fabrication (`natural_gas_fabrication`)

Record gaseous natural gas only when it is combusted within the foreground boundary for fabrication heat; otherwise mark this row not applicable.

- Selected flow: natural gas in the gaseous state `4f19ca0e-7b3b-11dd-ad8b-0800200c9a66`
- Flow property / unit: Volume / m3
- Amount rule: Metered natural-gas volume attributable to fabrication, with meter reference conditions declared
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg complete weighing machinery output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_energy_and_gas_meters`

###### Industrial oxygen for oxygen-fuel cutting (`industrial_oxygen_fabrication`)

Record industrial oxygen only for oxygen-fuel cutting performed within the foreground boundary.

- Selected flow: Industrial oxygen `bd4b0f96-2090-4806-a648-335ab20ff401`
- Flow property / unit: Volume / m3
- Amount rule: Supplier delivery or meter volume assigned to oxygen-fuel cutting, with purity and reference conditions declared
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg complete weighing machinery output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_energy_and_gas_meters`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

##### Waste flows

###### Scrap steel separated from fabrication (`scrap_steel_output`)

Record ferrous offcuts and rejected fabricated steel components leaving fabrication for recovery or treatment. Keep grade, contamination, destination, and whether the recipient pays for the scrap.

- Selected flow: Scrap steel `c3fc5605-baa3-4b25-9934-ecf7fcbc72da`
- Flow property / unit: Mass / kg
- Amount rule: Measured dispatch mass plus closing scrap accumulation minus opening scrap accumulation
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg complete weighing machinery output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_material_mass_balance`

##### Elementary flows

###### Fossil carbon dioxide from on-site natural-gas combustion (`carbon_dioxide_fossil_output`)

Record only direct fossil carbon dioxide released by natural gas combusted in the foreground process. Do not add upstream electricity or fuel-supply emissions here.

- Selected flow: carbon dioxide (fossil) `08a91e70-3ddc-11dd-923d-0050c2490048`
- Flow property / unit: Mass / kg
- Amount rule: Calculate from metered natural-gas use and an applicable reviewed fuel carbon or emission factor; retain factor source, oxidation assumption, and calculation record
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg complete weighing machinery output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_direct_combustion_emissions`

### Process: Aqueous alkaline parts cleaning (`alkaline_parts_cleaning`)

#### Inputs

##### Product flows

###### Process water supplied to the alkaline cleaning bath (`process_water_cleaning`)

Record water charged to and added to the cleaning bath when this process is operated on site. Declare water source, quality, and any density conversion.

- Selected flow: Process Water `94a04f7e-2d5c-41f0-b182-d54a3b373a02`
- Flow property / unit: Mass / kg
- Amount rule: Metered or batch-recorded water charged to and added to the cleaning system
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg complete weighing machinery output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_alkaline_cleaning_batches`

###### Sodium hydroxide supplied to the cleaning bath (`sodium_hydroxide_cleaning`)

Record sodium hydroxide crossing the foreground boundary for bath preparation or replenishment. Declare product concentration and supply state.

- Selected flow: Sodium hydroxide `e0abcced-0611-4c24-9290-5a2c5a0c4169`
- Flow property / unit: Mass / kg
- Amount rule: As-supplied solution or solid mass charged, retaining concentration when dry-active-mass calculations are used
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg complete weighing machinery output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_alkaline_cleaning_batches`

###### Purchased electricity for alkaline cleaning (`electricity_cleaning`)

Record electricity used by bath heating, pumps, extraction, and directly attributable cleaning equipment.

- Selected flow: Electricity `890a70b7-b677-4e2a-8a1b-7d017e0a10ae`
- Flow property / unit: Net calorific value / MJ
- Amount rule: Submetered energy or documented equipment power multiplied by logged operating time
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg complete weighing machinery output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_alkaline_cleaning_batches`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

##### Waste flows

###### Spent alkaline cleaning bath sent to treatment (`waste_alkaline_liquor_output`)

Record spent bath liquor removed from the cleaning system for treatment. Declare composition, metal loading, hazard classification, destination, and retained water.

- Selected flow: Waste Alkaline Liquor `ce738ef0-a711-4650-a38b-34479efd7559`
- Flow property / unit: Mass / kg
- Amount rule: Measured dispatched mass plus closing stored mass minus opening stored mass for the reporting period
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg complete weighing machinery output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_alkaline_cleaning_batches`

##### Elementary flows

### Process: Final assembly, calibration, functional testing, and packaging (`assembly_calibration_packaging`)

#### Inputs

##### Product flows

###### Populated electronic control assembly (`electronic_control_assembly_input`)

Record the populated controller assembly only for electronic weighing machines. Mechanical machines without one mark this row not applicable; do not substitute an unpopulated printed wire board.

- Selected flow: Populated electronic control assembly for weighing machinery; Tiangong UUID unresolved
- Flow property / unit: Mass / kg
- Amount rule: Measured or supplier-declared mass of conforming assemblies consumed, adjusted for inventory change and returns
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg complete weighing machinery output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_assembly_and_packaging_records`

###### Purchased electricity for assembly, calibration, and testing (`electricity_assembly`)

Record electricity consumed by assembly tools, instrument energisation, calibration benches, functional testing, and directly attributable packaging equipment.

- Selected flow: Electricity `890a70b7-b677-4e2a-8a1b-7d017e0a10ae`
- Flow property / unit: Net calorific value / MJ
- Amount rule: Submetered energy or documented equipment power multiplied by logged operating time and allocated to conforming output
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg complete weighing machinery output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_assembly_and_packaging_records`

###### Corrugated-board boxes for factory packaging (`corrugated_board_boxes_input`)

Record corrugated-board boxes supplied for the dispatched product. Other packaging components require their own atomic rows in the completed foreground data package.

- Selected flow: corrugated board boxes `4f197bec-7b3b-11dd-ad8b-0800200c9a66`
- Flow property / unit: Mass / kg
- Amount rule: Measured or supplier-declared box mass consumed for conforming dispatched machines, adjusted for packaging inventory change
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg complete weighing machinery output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_assembly_and_packaging_records`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Complete factory-gate weighing machine (`weighing_machine_output`)

Record only conforming complete weighing machinery that has passed the declared factory calibration or functional test and is released for dispatch. The product UUID remains unresolved; mass property and unit group are confirmed.

- Selected flow: Weighing machinery (excluding balances of a sensitivity of 5 cg or better); Tiangong UUID unresolved
- Flow property / unit: Mass / kg
- Amount rule: 1 kg net complete-machine mass as the reference output; retain actual total conforming output mass used as the normalization denominator
- Value mode: Fixed value (`fixed_value`)
- Specificity: Generic (`generic`)
- Normalization basis: 1 kg complete weighing machinery output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_assembly_and_packaging_records`

##### Waste flows

##### Elementary flows

## 7. Allocation and Co-product Handling

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `allocation_avoid` | shared foreground operations | Prefer subdivision, dedicated meters, batch records, and direct assignment of material, energy, waste, and emissions before applying allocation. |  |
| `allocation_physical` | unavoidable shared fabrication, cleaning, assembly, calibration, or packaging burdens | Use the physical driver causing the burden: machine time for equipment electricity, metered volume for gases, bath throughput for cleaning, and measured mass for material handling. Document the driver and test the effect of material alternatives. |  |
| `allocation_scrap` | scrap steel and waste alkaline liquor | Report each waste output where it leaves the foreground process. Do not subtract an avoided primary-material credit inside the foreground inventory; model downstream recovery consistently with the study goal. |  |
| `allocation_no_sales_default` | complete weighing machinery variants | Do not use revenue as the default allocator across models with different capacity, architecture, or accuracy. If physical allocation is infeasible, disclose the economic period and provide sensitivity results. |  |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_material_mass_balance` | `component_fabrication` | steel input and scrap output | purchase, stock, production, and waste-dispatch records | material identity; grade; opening stock; receipts; returns; closing stock; conforming transfer mass; scrap opening stock; scrap dispatch; scrap closing stock | reconcile signed inventory records to calibrated scales and fabrication batches | kg | each receipt and dispatch; monthly reconciliation | at least 12 consecutive representative months or the full production campaign | all site operations producing covered metal components | calculate net consumption and scrap generation for the same period; allocate only after reconciliation | scale calibration; purchase and dispatch documents; stock count; batch genealogy |
| `cp_energy_and_gas_meters` | `component_fabrication` | fabrication electricity, natural gas, and industrial oxygen | utility meter, submeter, cylinder, bulk delivery, and operating records | opening and closing readings; deliveries; meter factor; reference conditions; purity; equipment; operating time; downtime; allocated output | use calibrated submeters where available; otherwise reconcile site totals and documented equipment drivers | MJ for electricity; m3 for gases | continuous or per batch; monthly reconciliation | at least 12 consecutive representative months or the full production campaign | fabrication equipment and directly attributable auxiliaries | subtract unrelated and idle loads, apply documented physical allocation, then normalize | meter calibration; invoices; delivery tickets; operating logs; allocation worksheet |
| `cp_direct_combustion_emissions` | `component_fabrication` | fossil carbon dioxide | fuel meter and reviewed factor calculation record | fuel volume; reference conditions; gas composition or factor; factor unit; oxidation assumption; factor source; calculated emission | calculate from reconciled foreground fuel use using an applicable reviewed factor | kg | each reporting period | same period as fuel inventory | foreground combustion equipment only | sum source-specific emissions and divide by conforming output mass | fuel reconciliation; factor source; calculation review |
| `cp_alkaline_cleaning_batches` | `alkaline_parts_cleaning` | water, sodium hydroxide, electricity, and waste alkaline liquor | bath make-up, replenishment, meter, maintenance, and waste-transfer records | batch id; water charge; sodium hydroxide mass and concentration; electricity; parts throughput; bath life; removed liquor mass; composition; destination | reconcile batch sheets, chemical issues, submeters, stored waste, and transfer documents | kg for materials and waste; MJ for electricity | each bath make-up, replenishment, and discharge | all batches in the representative period | cleaning equipment treating covered components | aggregate covered batches; allocate by cleaned-parts mass only when direct assignment is unavailable | batch sheets; meter checks; chemical certificates; waste manifest; mass-balance review |
| `cp_assembly_and_packaging_records` | `assembly_calibration_packaging` | electronic control assembly, electricity, corrugated boxes, and conforming output | bill of materials, stock, submeter, test, packaging, and release records | model; serial or batch id; controller mass and quantity; box mass and quantity; electricity; test duration; rejects; rework; net output mass | reconcile issued components and packaging with release records and submetered or engineering energy records | kg and MJ | per batch or production order; monthly reconciliation | at least 12 consecutive representative months or the full production campaign | covered final assembly, factory calibration, testing, and packaging | include rework burden; exclude nonconforming output from denominator; normalize by released net product mass | approved bill of materials; supplier declarations; meter records; calibration and test result; release record |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_period_normalization` | every collected inventory row except the fixed reference output | normalized amount = reconciled quantity attributable to covered conforming products / net mass of covered conforming products released in the same period | reconciled row quantity; allocated share when needed; released net product mass | row amount per 1 kg reference flow |  |
| `calc_electricity_conversion` | electricity rows recorded in kWh | electricity in MJ = measured electricity in kWh × 3.6 | electricity meter reading in kWh | electricity in MJ |  |
| `calc_stock_balance` | purchased materials, components, chemicals, and packaging | consumption = opening stock + receipts - returns - closing stock, adjusted for documented transfers and count corrections | signed stock and receipt fields | consumed mass in kg |  |
| `calc_direct_fossil_co2` | `carbon_dioxide_fossil_output` | fossil CO2 = reconciled natural-gas quantity × applicable reviewed carbon or emission factor × declared oxidation adjustment where the factor does not already include oxidation | natural-gas record; factor; factor units; oxidation treatment | kg fossil CO2 per reporting period and per reference flow |  |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_product_identity` | reference product | Preserve model or family, architecture, automatic or non-automatic mode, rated capacity range, interval or verification interval, accuracy class where applicable, intended application, net mass, and accessories. | product specification; bill of materials; type or conformity documentation; release record |
| `dq_temporal_representativeness` | all foreground rows | Use one common representative period of at least 12 consecutive months unless the full campaign is shorter; explain shutdowns, abnormal batches, missing data, and substitutions. | dated meter, stock, production, and waste records |
| `dq_mass_completeness` | material, component, packaging, product, and waste rows | Reconcile opening stock, receipts, returns, transfers, conforming output, nonconforming output, waste, and closing stock; investigate imbalances before release. | signed mass-balance worksheet and source documents |
| `dq_route_completeness` | conditional processes and rows | Mark each conditional process or row applicable or not applicable and retain evidence; do not silently omit outsourced finishing, additional packaging, another fuel, another chemical, another waste stream, or a direct emission. | route declaration; process map; supplier and site records |
| `dq_meter_quality` | electricity and gas rows | Record meter identity, reading dates, calibration or verification status, reference conditions for volume, estimation method, and uncertainty or limitation. | meter certificate; invoice; reading log; estimation review |

## 9. Validation Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `validate_identity_and_exclusion` | reference product | Confirm that the output is a complete weighing machine within CPC 43922 and is not a balance with sensitivity of 5 cg or better, a standalone weight, or a separately sold part. | `un-cpc-3-0-structure-2025` |
| `validate_metrological_qualifiers` | reference product metadata | Require automation mode, minimum and maximum capacity, scale or verification interval, accuracy class when applicable, load-receptor type, electrical supply, and intended product or application; flag comparisons with incompatible functions or operating conditions. | `oiml-r76-1-2006`; `oiml-r51-1-2006`; `eu-directive-2014-32` |
| `validate_reference_mass` | normalization | Confirm that the denominator is released net machine mass and transport packaging is recorded separately; require output amount exactly 1 kg after normalization. |  |
| `validate_inventory_accounting` | foreground inventory | Verify same-period stock reconciliation, mass balance, utility reconciliation, included rework, excluded nonconforming output from the denominator, and an explicit applicability decision for every conditional row. |  |
| `validate_no_double_counting` | outsourced and in-house operations | Confirm that purchased components or treatment services and foreground operations do not represent the same material, energy, waste, or emission twice. |  |
| `validate_direct_emissions` | `carbon_dioxide_fossil_output` | Require a direct-combustion source, reconciled fuel quantity, reviewed factor identity and units, and oxidation treatment; reject upstream emissions entered as direct elementary flows. |  |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | foreground product manufacturing dataset |
| downstream_use | `secondary_dataset`; `background_dataset` |
| allowed_use | Cradle-to-gate modelling of a declared weighing-machine model or coherent family with compatible function, architecture, capacity, accuracy, factory geography, technology, and production period |
| excluded_use | Precision balances at or beyond the excluded sensitivity; separately sold parts or weights; use-phase or end-of-life claims; incompatible weighing functions or rated conditions; unrepresented sites or families |
| required_metadata | PCR id and version; model or family; automation mode; metrological qualifiers; net product mass; accessories; make-or-buy boundary; process applicability; factory geography; technology; period; allocation drivers; upstream datasets; packaging |
| required_quality_disclosure | foreground and estimated shares; meter and stock coverage; mass-balance result; missing flows; UUID gaps; factor limitations; representativeness; allocation sensitivity; excluded or outsourced operations |
| update_trigger | material change in architecture, rated function, bill of materials, supplier route, factory process, energy mix, cleaning route, packaging, allocation method, regulation, metrological specification, or representative data period |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `un-cpc-3-0-structure-2025` | official_guidance | United Nations Statistics Division, CPC Ver. 3.0 Structure, 30 June 2025, https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Structure_30Jun2025.csv (retrieved 2026-09-06) | Exact CPC 43922 category identity and exclusion wording |
| `oiml-r76-1-2006` | standard | OIML R 76-1:2006, Non-automatic weighing instruments, https://www.oiml.org/en/files/pdf_r/r076-1-e06.pdf (retrieved 2026-09-06) | Non-automatic instrument scope, mass units, capacity, interval, accuracy, and test-condition qualifiers |
| `oiml-r51-1-2006` | standard | OIML R 51-1:2006, Automatic catchweighing instruments, https://www.oiml.org/en/files/pdf_r/r051-1-e06.pdf (retrieved 2026-09-06) | Automatic catchweigher scope, application categories, accuracy, and performance qualifiers |
| `eu-directive-2014-32` | official_guidance | Directive 2014/32/EU, Annex VIII (MI-006), http://data.europa.eu/eli/dir/2014/32/oj (retrieved 2026-09-06) | Automatic weighing-instrument definitions and rated capacity, supply, mechanical, climatic, and product-characteristic qualifiers |
