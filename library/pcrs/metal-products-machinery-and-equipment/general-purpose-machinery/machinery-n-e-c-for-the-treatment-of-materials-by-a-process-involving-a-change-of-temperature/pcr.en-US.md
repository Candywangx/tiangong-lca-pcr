---
pcr_id: pcr.metal-products-machinery-and-equipment.general-purpose-machinery.machinery-n-e-c-for-the-treatment-of-materials-by-a-process-involving-a-change-of-temperature
language: en-US
status: candidate
sync_with: pcr.zh-CN.md
---

# Machinery n.e.c. for the treatment of materials by a process involving a change of temperature

## 1. Scope and Applicability

This PCR applies to the production of complete non-household machinery, plant, or laboratory equipment whose principal function is to treat material by a temperature-changing operation such as heating, cooking, roasting, sterilising, pasteurising, steaming, drying, evaporating, vaporising, condensing, or cooling, and which is not classified in a more specific machinery category. It supports a foreground manufacturing data package and downstream `process` or `lifecyclemodel` projections.

The category is residual. It excludes industrial or laboratory furnaces and ovens classified separately; non-household refrigerating/freezing equipment and heat pumps; air-conditioning machines; distilling or rectifying plant; heat-exchange units; machinery for liquefying air or gas; non-electric water heaters; domestic appliances; parts supplied separately; and special-purpose thermal machinery classified by the industry or material it processes. A data producer shall document why the declared product remains in this n.e.c. boundary.

The default foreground gate covers purchased materials and components entering the manufacturing site through fabrication, assembly, surface preparation where performed onsite, factory acceptance testing, and release of the complete unpackaged machine at the factory gate. Installation, external transport packaging, distribution, use, maintenance, working-fluid charging performed after the factory gate, and end-of-life are outside this production gate unless the declared study explicitly expands the boundary. Downstream life-cycle models shall add those stages when their goal requires them.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.metal-products-machinery-and-equipment.general-purpose-machinery.machinery-n-e-c-for-the-treatment-of-materials-by-a-process-involving-a-change-of-temperature |
| classification_refs | CPC 3.0: 43932, exact |
| covered_products | Complete non-household machinery whose principal function treats materials by a change of temperature and which is not covered by a more specific machinery category; examples include residual heating, cooking, roasting, sterilising, pasteurising, steaming, drying, evaporating, vaporising, condensing, and cooling equipment. |
| excluded_products | Separately classified furnaces and ovens; refrigerating/freezing equipment and heat pumps; air conditioners; distillation plant; heat exchangers; gas-liquefaction machinery; non-electric water heaters; domestic appliances; separately supplied parts; and industry-specific or material-specific thermal machinery. |
| representative_product | A complete, factory-tested, non-household temperature-change treatment machine released unpackaged at the factory gate. |
| production_route | Purchased metal and functional components; cutting and forming; joining; conditional insulation and aqueous cleaning; assembly; factory acceptance testing; final inspection. |
| market_state | Complete, factory-tested and shipment-ready machine before external transport packaging and installation; declared thermal function, rated capacity, temperature range, energy carrier, controls, and net dry mass are known. |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Provide the declared treatment of a specified material by a specified temperature-changing operation. |
| How much | The declared rated material throughput or batch capacity and operating duty delivered by 1,000 kg net dry mass of complete machinery. |
| How well | Meet the declared inlet and outlet temperatures, temperature control tolerance, throughput or batch capacity, product-quality requirement, energy carrier, and applicable acceptance-test criteria. |
| How long or cycle | The declared reference service life in years and operating hours or cycles; the factory-gate inventory is normalized to the 1,000 kg machinery reference flow and the service profile is mandatory for downstream use-stage comparison. |
| reference_flow_link | 1,000 kg net dry mass of the complete machine required to provide the declared function; item counts are converted using measured net dry mass per accepted machine. |

| Field | Value |
| --- | --- |
| Reference amount | 1,000 kg net dry mass of accepted complete machinery |
| Reference product flow | Machinery n.e.c. for treatment of materials by temperature change (Tiangong UUID unresolved) |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | exact temperature-changing function; treated material; batch or continuous operation; rated throughput or batch capacity; inlet and outlet temperatures; control tolerance; heating or cooling technology; energy carrier; installed working fluid where applicable; net dry mass; factory-gate configuration; reference service life; operating hours or cycles; geography; production year |

When constructing a foreground data package, the items listed in `Required qualifiers` must be declared in dataset metadata, process notes, reference flow comment, product description, or an equivalent data package field. Missing required qualifiers make the reference flow definition incomplete for that data package.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| `measurement_reference_mass` | reference product and mass-normalized inventory | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Use the measured net dry mass of machines that passed final acceptance. Exclude external transport packaging, installation materials, loose service tools, and process material used only for testing. Normalize all foreground exchanges to 1,000 kg accepted machinery. |
| `measurement_item_conversion` | records reported per machine or component | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Convert item counts with model-specific measured mass per item and retain the count, sampled masses, sampling date, and weighted-average calculation. |
| `measurement_electricity` | purchased electricity | Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` | MJ | Preserve metered electricity in its original unit and convert kWh to MJ using 1 kWh = 3.6 MJ; disclose voltage, grid geography, onsite generation, and whether losses are included. |
| `measurement_gas_volume` | gaseous natural gas and industrial oxygen | Volume `93a60a56-a3c8-22da-a746-0800200c9a66` | m3 | Report supplier-metered volume at the documented reference temperature and pressure. Do not combine gases, and do not convert volume to mass without documented composition, density, and reference conditions. |
| `measurement_water_mass` | process water and cleaning wastewater | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Prefer direct mass records. When converting measured volume, retain volume, temperature, density source, and calculation; do not equate water input with wastewater output without measured losses or a documented balance. |

## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Purchased materials, components, utilities, gases, chemicals, and fuels at the manufacturing-site gate, with upstream production and delivery represented by linked datasets. |
| starting_condition_role | The foreground begins when purchased inputs cross the manufacturing-site gate; their upstream burdens remain required background links. |
| product_classification_scope | Complete residual non-household temperature-change treatment machinery within the reviewed semantic boundary, independent of the CPC code used as mapping context. |
| recursive_input_rule | A same-category complete machine purchased for incorporation shall be recorded as a product input with its own upstream dataset and declared mass; do not recursively reproduce its manufacturing inventory inside this foreground process. |
| upstream_dataset_requirement | Link every purchased product, energy carrier, fuel, chemical, and externally treated component to a technologically, geographically, temporally, and product-state representative upstream dataset. |
| disclosure | Declare product subtype, included factory operations, purchased-component share, surface-treatment route, joining route, test programme and fuels, abatement, site geography, reporting period, allocation drivers, omitted stages, and all unresolved identities. |

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `boundary_01` | foreground manufacturing | Include cutting/forming, joining, assembly, onsite cleaning or surface preparation, factory acceptance testing, inspection, and direct wastes and emissions when those operations occur at the reporting site. | `eu-recommendation-2021-2279-pef` |
| `boundary_02` | purchased inputs | Represent upstream production and delivery of every purchased input with linked datasets; a foreground gate shall not turn purchased components or energy into burden-free inputs. | `eu-recommendation-2021-2279-pef` |
| `boundary_03` | excluded downstream stages | Keep installation, distribution, use, maintenance, and end-of-life outside the default factory-gate dataset, but disclose the exclusion and add the stages in downstream models when required by the study goal. | `eu-recommendation-2021-2279-pef` |
| `boundary_04` | residual category identity | Demonstrate that the product's principal function is material treatment by temperature change and that no more specific excluded machinery category applies. | `un-cpc-3-0-structure-2025`; `un-cpc-3-0-explanatory-notes-2025`; `eu-regulation-2025-392` |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| `machinery_manufacture` | Fabrication, assembly, cleaning, factory testing, and final inspection | `required` | Always include; record each conditional exchange only when its operation occurs onsite. | Foreground production of accepted complete machinery | 1,000 kg net dry mass of accepted complete machinery |

### Process: Fabrication, assembly, cleaning, factory testing, and final inspection (`machinery_manufacture`)

#### Inputs

##### Product flows

###### Steel sheet for fabricated casing, frame, vessel, or duct (`steel_sheet`)

Record purchased steel sheet crossing the site gate. Grade, coating, dimensions, supplier, recycled-content claim, and the component receiving the sheet are mandatory foreground qualifiers.

- Selected flow: Steel sheet (Tiangong UUID unresolved)
- Flow property / unit: Mass / kg
- Amount rule: Net purchased steel-sheet mass issued to this product family, less documented returns to stores, allocated and normalized to the accepted reference product
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1,000 kg net dry mass of accepted complete machinery
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material_and_component_records`
- Sources:

###### Rock-wool thermal insulation (`rock_wool`)

Record installed rock wool only for designs that incorporate this insulation; retain density, thickness, facing, thermal grade, and installed component.

- Selected flow: rock wool `4f1a182c-7b3b-11dd-ad8b-0800200c9a66`
- Flow property / unit: Mass / kg
- Amount rule: Measured purchased mass installed in accepted machinery, adjusted for documented returned offcuts
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1,000 kg net dry mass of accepted complete machinery
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material_and_component_records`
- Sources:

###### Electronic control unit (`electronic_control_unit`)

Record the complete purchased electronic control unit when fitted; retain model, rated voltage, enclosure configuration, supplier, and measured unit mass.

- Selected flow: Electronic control unit `ff5a65c8-7726-48b4-b794-6bacd21ab77e`
- Flow property / unit: Mass / kg
- Amount rule: Accepted installed unit count multiplied by verified model-specific mass, including the supplied enclosure represented by the selected flow
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1,000 kg net dry mass of accepted complete machinery
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_material_and_component_records`
- Sources:

###### Purchased electricity (`electricity`)

Record separately metered or defensibly allocated electricity for fabrication, assembly, cleaning, testing, and inspection within the foreground process.

- Selected flow: Electricity `890a70b7-b677-4e2a-8a1b-7d017e0a10ae`
- Flow property / unit: Net calorific value / MJ
- Amount rule: Metered electricity for included operations, less documented exported electricity, allocated by causal meter or equipment-hour records and converted to MJ
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg net dry mass of accepted complete machinery
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_utility_and_consumable_records`
- Sources:

###### Natural gas used in factory acceptance testing (`natural_gas_factory_test`)

Record natural gas only when the accepted product or its thermal system is operated with natural gas during an included factory test. Do not include upstream electricity emissions in this row.

- Selected flow: natural gas in the gaseous state `4f19ca0e-7b3b-11dd-ad8b-0800200c9a66`
- Flow property / unit: Volume / m3
- Amount rule: Supplier-metered or calibrated-test-rig volume attributable to accepted units at documented reference conditions
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1,000 kg net dry mass of accepted complete machinery
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_factory_test_records`
- Sources:

###### Diesel fuel used in factory acceptance testing (`diesel_factory_test`)

Record diesel only when an integrated liquid-fuel system or dedicated test setup consumes diesel during the included factory acceptance test.

- Selected flow: Diesel fuel `9d258d75-6792-4f1c-9856-81602ed8f816`
- Flow property / unit: Mass / kg
- Amount rule: Weighed or supplier-recorded diesel consumed by included tests, corrected for measured fuel returned to storage
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1,000 kg net dry mass of accepted complete machinery
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_factory_test_records`
- Sources:

###### Industrial oxygen for thermal cutting (`industrial_oxygen`)

Record purchased oxygen only when oxygen-assisted cutting occurs onsite for this product. Purity, pressure, reference conditions, and onsite generation shall be declared.

- Selected flow: Industrial oxygen `bd4b0f96-2090-4806-a648-335ab20ff401`
- Flow property / unit: Volume / m3
- Amount rule: Metered or cylinder-inventory oxygen consumed by product-attributable cutting operations
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1,000 kg net dry mass of accepted complete machinery
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_utility_and_consumable_records`
- Sources:

###### Process water (`process_water`)

Record process water entering onsite aqueous cleaning, rinsing, or hydrostatic testing. Water used only in closed-loop circulation is counted as input when make-up water crosses the foreground boundary.

- Selected flow: Process Water `94a04f7e-2d5c-41f0-b182-d54a3b373a02`
- Flow property / unit: Mass / kg
- Amount rule: Metered or batch-recorded make-up water attributable to the accepted reference product
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg net dry mass of accepted complete machinery
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_utility_and_consumable_records`
- Sources:

###### Sodium hydroxide for alkaline cleaning (`sodium_hydroxide`)

Record sodium hydroxide only when it is dosed to an onsite cleaning bath. Report active sodium-hydroxide mass rather than solution mass and retain solution concentration and supplier state.

- Selected flow: Sodium hydroxide `e0abcced-0611-4c24-9290-5a2c5a0c4169`
- Flow property / unit: Mass / kg
- Amount rule: Purchased solution mass multiplied by measured or supplier-certified sodium-hydroxide mass fraction, corrected for returned solution
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1,000 kg net dry mass of accepted complete machinery
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_utility_and_consumable_records`
- Sources:

###### Carbon-dioxide shielding gas (`carbon_dioxide_shielding_gas`)

Record carbon dioxide product consumed as welding shielding gas only when that joining route occurs onsite. Retain grade, pressure, supplier, cylinder balance, and any documented recovered gas.

- Selected flow: Carbon dioxide `27f41c1c-535e-4d2a-bce9-2c7f4de11549`
- Flow property / unit: Mass / kg
- Amount rule: Supplier mass or cylinder mass loss attributable to product-specific welding operations
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1,000 kg net dry mass of accepted complete machinery
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_utility_and_consumable_records`
- Sources:

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Accepted complete temperature-change treatment machinery (`reference_product`)

Record only complete machines that passed final acceptance and conform to the declared residual product boundary. The Tiangong reference-product UUID remains unresolved.

- Selected flow: Machinery n.e.c. for treatment of materials by temperature change (Tiangong UUID unresolved)
- Flow property / unit: Mass / kg
- Amount rule: 1,000 kg measured net dry mass of accepted complete machinery
- Value mode: Fixed value (`fixed_value`)
- Specificity: Generic (`generic`)
- Normalization basis: PCR reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Method formula (`method_formula`)
- Collection protocol:
- Sources: `eu-recommendation-2021-2279-pef`

##### Waste flows

###### Post-industrial steel fabrication scrap (`post_industrial_steel_scrap`)

Record segregated ferrous offcuts, swarf, and rejected fabricated steel pieces leaving the process as post-industrial steel scrap. Exclude reusable returns to stores.

- Selected flow: Post-industrial steel scrap `c143745d-be4f-4d8f-b403-2dcbfe685349`
- Flow property / unit: Mass / kg
- Amount rule: Weighed outbound post-industrial steel scrap attributable to the product, cross-checked against the steel material balance
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg net dry mass of accepted complete machinery
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste_and_emission_records`
- Sources:

###### Wastewater from onsite cleaning (`cleaning_wastewater`)

Record wastewater leaving onsite aqueous cleaning or rinsing before external treatment or sewer handover. Retain pH, major contaminants, treatment status, and destination.

- Selected flow: Wastewater from cleaning `f0402393-e82c-47e8-9cd8-a486c97f3e89`
- Flow property / unit: Mass / kg
- Amount rule: Measured wastewater mass attributable to included cleaning operations, excluding separately recovered bath solution
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1,000 kg net dry mass of accepted complete machinery
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste_and_emission_records`
- Sources:

##### Elementary flows

###### Fossil carbon dioxide to air from factory testing (`carbon_dioxide_fossil_to_air`)

Record direct fossil carbon dioxide released onsite from combustion of test fuels. Exclude upstream electricity and fuel-supply emissions.

- Selected flow: carbon dioxide (fossil) `08a91e70-3ddc-11dd-923d-0050c2490048`
- Flow property / unit: Mass / kg
- Amount rule: Measured direct release or fuel-specific calculated fossil carbon dioxide from included factory tests
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1,000 kg net dry mass of accepted complete machinery
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_waste_and_emission_records`
- Sources:

###### Particulate matter to unspecified air (`particulate_matter_to_air`)

Record direct particulate matter of unspecified particle size released from included cutting, forming, joining, or testing operations after onsite abatement. Do not include captured dust in this elementary flow.

- Selected flow: Particulate matter, particle size unspecified `0ce3dedb-caca-407b-a856-a90470eb8ec0`
- Flow property / unit: Mass / kg
- Amount rule: Site measurement or documented emission calculation for direct uncaptured particulate matter attributable to the product
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg net dry mass of accepted complete machinery
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_waste_and_emission_records`
- Sources:

###### Nitrogen oxides to unspecified air (`nitrogen_oxides_to_air`)

Record aggregated nitrogen oxides released directly from included fuel-fired factory tests when a measurement or documented calculation reports the aggregate in the unspecified-air compartment. The Tiangong UUID remains unresolved; do not substitute nitrous oxide, nitrogen monoxide, or a high-stack compartment.

- Selected flow: Nitrogen oxides to air, unspecified (Tiangong UUID unresolved)
- Flow property / unit: Mass / kg
- Amount rule: Site measurement or documented fuel- and equipment-specific emission calculation for included factory tests
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1,000 kg net dry mass of accepted complete machinery
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_waste_and_emission_records`
- Sources:
## 7. Allocation and Co-product Handling

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `allocation_01` | dedicated product operations | Avoid allocation by using dedicated meters, batch records, work orders, and subdivision of independently measurable operations. | `eu-recommendation-2021-2279-pef` |
| `allocation_02` | shared site utilities and operations | When subdivision is not possible, allocate shared burdens with a documented physical causal driver such as metered energy, cutting time, welding time, test duration, or machine-hours. Use mass only when it reasonably represents causality and disclose a sensitivity check for material shared burdens. | `eu-recommendation-2021-2279-pef` |
| `allocation_03` | scrap and wastewater | Report scrap and wastewater at the foreground boundary without avoided-burden credits. Model treatment, recycling, recovered material, and any substitution consistently in the downstream system and prevent double counting with upstream recycled-content datasets. | `eu-recommendation-2021-2279-pef` |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_material_and_component_records` | `machinery_manufacture` | steel sheet, rock wool, electronic control unit, accepted product | purchase and issue records; bill of materials; unit mass; accepted-unit records | material or component identity; grade/model; supplier; purchased mass; returned mass; installed count; sampled unit mass; accepted product mass | Reconcile procurement, stores issues, engineering bill of materials, and final acceptance weighing by product model. | kg; item(s) as raw count | each production lot; monthly reconciliation | Representative reporting period covering normal production and rework | All sites and outsourced steps included in the declared foreground boundary | Sum net issued mass or verified count-times-mass by model; allocate with work orders; normalize to 1,000 kg accepted product. | supplier documents; calibrated scales; signed work orders; bill-of-material revision; acceptance records |
| `cp_utility_and_consumable_records` | `machinery_manufacture` | electricity, oxygen, water, sodium hydroxide, carbon dioxide shielding gas | meters; invoices; cylinder balances; batch sheets; chemical certificates | opening and closing meter or cylinder readings; purchases; returns; concentration; reference temperature and pressure; equipment hours | Prefer submetering; otherwise reconcile site totals and allocate with causal equipment or work-order drivers. | MJ, m3, kg, concentration fraction | continuous or per batch, reconciled monthly | Same reporting period as accepted production | Each included manufacturing site | Net use equals opening stock plus purchases minus closing stock, returns, and documented exports; apply concentration and unit conversions before normalization. | calibration records; invoices; cylinder tickets; bath analyses; operator logs |
| `cp_factory_test_records` | `machinery_manufacture` | natural gas and diesel test fuel | acceptance-test logs; calibrated meters; tank or cylinder records | product serial number; test type; start/end readings; fuel returned; reference conditions; test duration; pass/fail result | Link each included test to accepted serial numbers and exclude development tests not attributable to saleable production. | m3 natural gas; kg diesel | each test | Same reporting period as accepted production | Every site performing factory acceptance testing | Sum net fuel by accepted product model; separately report failed-test and rework burdens before allocation. | test procedure; meter calibration; signed test report; fuel reconciliation |
| `cp_waste_and_emission_records` | `machinery_manufacture` | steel scrap, cleaning wastewater, direct carbon dioxide, particulate matter, nitrogen oxides | weigh tickets; wastewater meters; manifests; stack or workplace measurements; fuel analyses; emission calculations | waste identity; gross/tare mass; wastewater mass and composition; destination; fuel amount; carbon content; measured concentration; gas flow; operating hours; abatement status | Measure releases and wastes directly where feasible; otherwise use documented site calculations based on collected activity data and applicable factors. | kg | each shipment, discharge, or test; aggregated monthly | Same reporting period as accepted production | All emission points and waste handovers in the declared foreground boundary | Sum measured exchanges by identity; calculate direct emissions from collected records without including upstream supply-chain emissions; normalize to reference flow. | laboratory reports; calibrated instruments; manifests; calculation workbook; reviewer sign-off |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calculation_01` | all foreground exchanges | normalized amount = attributable exchange amount / accepted net dry machinery mass × 1,000 kg | attributable exchange amount; accepted net dry machinery mass | exchange amount per 1,000 kg reference product | `eu-recommendation-2021-2279-pef` |
| `calculation_02` | electricity | electricity (MJ) = metered electricity (kWh) × 3.6 | metered kWh | MJ electricity | |
| `calculation_03` | sodium hydroxide | active sodium hydroxide mass = net solution mass × measured or supplier-certified NaOH mass fraction | solution mass; NaOH mass fraction | kg active sodium hydroxide | |
| `calculation_04` | direct fossil carbon dioxide | Calculate only from collected test-fuel use and a documented supplier, regulatory, or measured fossil-carbon factor; retain factor source, oxidation assumption, and units. | natural-gas volume or diesel mass; fuel composition or carbon factor; oxidation assumption | kg fossil carbon dioxide to air | |
| `calculation_05` | material balance | Reconcile net purchased material with accepted-product incorporation, scrap, returned stock, and measured losses by material identity; investigate rather than silently allocate unexplained imbalance. | net material issued; installed material; scrap; returns; measured losses | material-balance residual and reconciliation status | `eu-recommendation-2021-2279-pef` |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `quality_01` | product identity | Retain drawings, specifications, principal thermal function, treated material, classification rationale, product model, and acceptance status proving the product fits this residual category. | controlled specification; classification review; acceptance certificate |
| `quality_02` | technological representativeness | Record fabrication, joining, insulation, cleaning, control, energy-carrier, and test technologies actually used; do not average incompatible routes without separate activity data and disclosed weighting. | route-specific work orders; process map; production-weight calculation |
| `quality_03` | temporal and geographical representativeness | Use a representative reporting period and identify every production site, electricity geography, supplier geography, and material data vintage; justify gaps and substitutions. | reporting-period reconciliation; site list; upstream dataset metadata |
| `quality_04` | completeness | Account for every inventory card as measured, calculated, zero with evidence, not applicable with a stated route reason, or unresolved; do not use an unreported cutoff for hazardous releases or direct emissions. | signed completeness matrix; meter and purchase reconciliation; unresolved register |
| `quality_05` | measurement and calculation | Retain instrument calibration, source documents, unit conversions, allocation drivers, formulas, emission factors, and independent review of manual calculations. | calibration certificates; invoices; controlled workbook; reviewer sign-off |

## 9. Validation Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `validation_01` | category and reference flow | Confirm the machine is complete, non-household, principally treats material by temperature change, is not in an excluded specific category, and declares every required qualifier before accepting the reference flow. | `un-cpc-3-0-structure-2025`; `un-cpc-3-0-explanatory-notes-2025`; `eu-regulation-2025-392` |
| `validation_02` | process and exchange completeness | Confirm every included site operation and every atomic exchange card has a status, amount basis, evidence kind, and route explanation; reconcile purchases, meters, wastes, and accepted production. | `eu-recommendation-2021-2279-pef` |
| `validation_03` | mass normalization | Confirm accepted net dry product mass is positive and all reported amounts are normalized to exactly 1,000 kg without including transport packaging, loose tools, or test material in reference-product mass. | |
| `validation_04` | conditional test and cleaning routes | Natural gas, diesel, process water, sodium hydroxide, cleaning wastewater, and direct combustion emissions shall be mutually consistent with declared onsite operations and test logs; unsupported zeroes or route substitutions fail validation. | |
| `validation_05` | direct emissions | Confirm fossil carbon dioxide excludes upstream energy emissions, captured dust is not reported as an elementary emission, and NOx species and compartment are not replaced by a non-equivalent UUID. | |
| `validation_06` | UUID identity | Recheck UUID, state, English and Chinese baseName, flow type, classification, property, unit group, product state, geography, technology, and generalComment. Keep `steel_sheet`, `reference_product`, and `nitrogen_oxides_to_air` explicitly unresolved until exact state-100 identities are verified. | |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | `secondary_dataset`; may be used as `background_dataset` only after methodology review and representative upstream links are complete |
| downstream_use | Foreground manufacturing process for temperature-change treatment machinery and a building block for cradle-to-gate or full-life-cycle equipment models |
| allowed_use | Model-specific factory-gate studies with matching product boundary and qualifiers; aggregation across models only with production-weighted activity data; downstream use-stage modelling when rated function, service life, load profile, energy carrier, working fluid, maintenance, and installation are added separately. |
| excluded_use | Direct comparison of products with different thermal functions, treated materials, capacities, temperature ranges, control quality, service lives, or factory-gate configurations; use as a generic furnace, refrigerator, heat pump, air conditioner, heat exchanger, distillation plant, water heater, domestic appliance, or separately supplied part dataset. |
| required_metadata | canonical PCR id; product model and residual-category rationale; function and treated material; capacity and temperature range; technology and energy carrier; net dry mass; factory-gate configuration; service life and duty; site and geography; reporting period; allocation; upstream dataset versions; unresolved identities |
| required_quality_disclosure | primary-data coverage; route and site representativeness; meter and scale calibration; purchased-component share; material and energy reconciliation; test programme; direct-emission method; data gaps; substitutions; uncertainty; reviewer and review date |
| update_trigger | Change in principal function or classification, product design or material composition, manufacturing or test route, energy carrier, site or supplier geography, allocation method, emission controls, upstream data, exact UUID resolution, or evidence that materially changes results. |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `un-cpc-3-0-structure-2025` | `official_guidance` | United Nations Statistics Division, CPC Version 3.0 Structure, 30 June 2025, official CSV: https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Structure_30Jun2025.csv (verified 2026-09-06) | CPC 43932 identity and hierarchy |
| `un-cpc-3-0-explanatory-notes-2025` | `official_guidance` | United Nations Statistics Division, CPC Version 3.0 Explanatory Notes, 30 June 2025: https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Exp_Notes_30Jun2025.pdf (verified 2026-09-06) | Placement of CPC 43932 among general-purpose machinery and separation from adjacent subclasses |
| `eu-regulation-2025-392` | `official_guidance` | Council Regulation (EU) 2025/392, CN 8419 89 entry: https://eur-lex.europa.eu/eli/reg/2025/392/oj/eng (verified 2026-09-06) | Temperature-change treatment examples and exclusions used to operationalize the residual product boundary |
| `eu-recommendation-2021-2279-pef` | `official_guidance` | Commission Recommendation (EU) 2021/2279, Annex I Product Environmental Footprint Method: https://eur-lex.europa.eu/eli/reco/2021/2279/2021-12-30/eng (verified 2026-09-06) | Functional unit and reference flow, system boundary, life-cycle stages, allocation, completeness, and data-quality rules |
