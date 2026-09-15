---
pcr_id: pcr.metal-products-machinery-and-equipment.electrical-machinery-and-apparatus.other-electrical-equipment-n-e-c-including-electro-magnets-electro-magnetic-couplings-c-7e8fa7bd
language: en-US
status: candidate
sync_with: pcr.zh-CN.md
---

# Other electrical equipment n.e.c. (including electro-magnets; electro-magnetic couplings; clutches and brakes; electro-magnetic lifting heads; electrical particle accelerators; electrical signal generators and apparatus for electro-plating, electrolysis or electrophoresis)

## 1. Scope and Applicability

This PCR governs cradle-to-gate foreground data packages for finished electrical equipment not elsewhere classified within the semantic boundary below. Covered configurations include electromagnets, electromagnetic couplings, clutches and brakes, electromagnetic lifting heads, electrical particle accelerators, electrical signal generators, and apparatus for electroplating, electrolysis, or electrophoresis. Because these products differ materially in function and construction, every data package shall declare one concrete product model or homogeneous product family, bill-of-material state, manufacturing route, rated function, and factory-gate condition.

Permanent metallic magnets and permanent ceramic or ferrite magnets sold as products are excluded because CPC 3.0 identifies them as sibling subclasses. Also excluded are junction boxes, printed wire boards sold separately, electric motors, generators, transformers, batteries, alarms, lighting equipment, and other products covered by a narrower PCR. Use, maintenance, distribution, installation, and end-of-life are outside this factory-gate rule unless the study explicitly adds those stages under a compatible narrower rule. This broad PCR shall not support comparative assertions between unlike equipment functions or lifetime performances.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.metal-products-machinery-and-equipment.electrical-machinery-and-apparatus.other-electrical-equipment-n-e-c-including-electro-magnets-electro-magnetic-couplings-c-7e8fa7bd |
| classification_refs | CPC 3.0:46939 (exact mapping context) |
| covered_products | Finished electromagnets; electromagnetic couplings, clutches, and brakes; electromagnetic lifting heads; electrical particle accelerators; electrical signal generators; apparatus for electroplating, electrolysis, or electrophoresis; other finished electrical equipment with the same residual-category boundary |
| excluded_products | Permanent metallic magnets; permanent ceramic or ferrite magnets; separately supplied components; junction boxes; separately supplied printed wire boards; products governed by a narrower electrical-equipment PCR; installation, distribution, use, maintenance, and end-of-life services |
| representative_product | One declared finished equipment model or homogeneous product family satisfying a documented electrical or electromechanical specification |
| production_route | Declared combination of purchased-component receipt, optional magnetic-core fabrication and winding, optional electronic assembly, optional aqueous cleaning or surface preparation, and required final assembly and testing |
| market_state | Accepted finished equipment at the factory gate, without transport packaging unless that packaging is inseparable from the supplied product; mass includes all integral parts and excludes separately shipped consumables and installation materials |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Provision of a declared finished electrical-equipment model or homogeneous family at the factory gate |
| How much | 1 kg net mass of accepted finished equipment |
| How well | Conforms to the declared model, rated electrical or electromechanical function, acceptance-test specification, configuration, and supplied state |
| How long or cycle | One production reporting period; no service lifetime or use-cycle performance is asserted by this cradle-to-gate mass functional unit |
| reference_flow_link | `finished_equipment` |

| Field | Value |
| --- | --- |
| Reference amount | 1 |
| Reference product flow | Finished other electrical equipment n.e.c. |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | declared product type and model or homogeneous family; rated function and principal performance specification; bill-of-material revision; integral versus separately supplied parts; net-mass determination method; manufacturing site and geography; production technology and route; reporting period; accepted-product test criteria; factory-gate packaging condition |

When constructing a foreground data package, every required qualifier shall be declared in metadata, process notes, the reference-flow comment, the product description, or an equivalent field. A missing qualifier makes the reference flow incomplete. No exact public state-100 Tiangong product flow represents this configuration-declared cross-family reference product, so the product-flow UUID remains unresolved; narrower product flows shall not be used as proxies.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| `reference_net_mass` | accepted finished equipment | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Determine net accepted-product mass by calibrated weighing or an auditable component mass balance. Exclude reusable fixtures, transport packaging, separately shipped consumables, installation materials, rejects, and scrap. |
| `electricity_energy` | purchased electricity rows | Net calorific value `93a60a56-a3c8-11da-a746-0800200b9a66` | MJ | Preserve metered electrical energy by process. Convert kWh to MJ with 1 kWh = 3.6 MJ and disclose meter coverage, allocation, voltage level, geography, grid mix, and included losses. |
| `mass_input_output` | mass-referenced product and waste rows | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Use as-received mass at each process boundary. Record moisture, coating, insulation, attached-component, and contamination states when they materially affect flow identity or mass balance. |
| `gas_reference_conditions` | industrial oxygen | Volume `93a60a56-a3c8-22da-a746-0800200c9a66` | m3 | Report the supplier or meter reference temperature, pressure, and dryness basis. Do not convert volume to mass without recording the composition and density method. |

## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Purchased materials and components as received at the foreground factory gate, with supplier state, composition, geography, and delivery boundary declared |
| starting_condition_role | The foreground begins when purchased materials, components, electricity, water, and process chemicals cross into processes controlled by the reporting manufacturer |
| product_classification_scope | Finished residual-category electrical equipment represented by one declared configuration; CPC 3.0:46939 is mapping context and does not replace the semantic boundary |
| recursive_input_rule | A purchased input that itself meets this PCR boundary shall be recorded as one separately supplied component with its own upstream dataset and declared function; do not recursively apply the finished-equipment reference product to the same foreground system |
| upstream_dataset_requirement | Each purchased material, component, utility, and chemical shall link to a geographically and technologically representative cradle-to-supply background dataset; unresolved identities remain explicit and shall not be silently proxied |
| disclosure | Declare included sites and processes, outsourced versus on-site steps, cutoff decisions, infrastructure treatment, packaging condition, scrap destination, wastewater transfer point, electricity modelling, and any added distribution, use, or end-of-life stages |

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `boundary_foreground_control` | all foreground processes | Include all declared on-site or directly controlled fabrication, winding, electronic assembly, cleaning or surface preparation, final assembly, testing, rework, accepted output, rejects, wastes, and direct elementary flows occurring before the factory gate. | `eu-jrc-pef-methods-2022` |
| `boundary_known_exchanges` | process inventory | Quantify every known material, energy, water, chemical, product, co-product, waste, and direct emission crossing each included process boundary; absence shall be documented, not represented by an umbrella flow. | `eu-jrc-pef-methods-2022` |
| `boundary_conditional_routes` | conditional processes | Include each conditional process only when it occurs at the reporting site or is controlled by the manufacturer, and disclose outsourced equivalents through the purchased input dataset. | `un-cpc-3-0-2025` |
| `boundary_exclusions` | downstream and capital processes | Exclude distribution, installation, use, maintenance, and end-of-life from this factory-gate data package. Exclude capital equipment by default and disclose any material inclusion required by the study goal. |  |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| `core_fabrication_winding` | Magnetic-core fabrication and winding | conditional | Include when magnetic cores, coils, electromagnets, electromagnetic actuators, couplings, clutches, brakes, or lifting heads are fabricated or wound on-site. | foreground component fabrication | Per 1 kg accepted finished equipment |
| `electronic_assembly` | Printed-wire-board and electronic assembly | conditional | Include when printed wire boards are installed, populated, soldered, reworked, or tested on-site. | foreground electronic assembly | Per 1 kg accepted finished equipment |
| `aqueous_cleaning_surface_prep` | Aqueous cleaning and surface preparation | conditional | Include when water and sodium hydroxide are used on-site to clean, degrease, prepare, or maintain equipment parts or electrochemical apparatus. | foreground cleaning and surface preparation | Per 1 kg accepted finished equipment |
| `final_assembly_test` | Final assembly and acceptance testing | required | Always include the operations that create and accept the supplied finished configuration. | foreground final production | 1 kg accepted finished equipment |

### Process: Magnetic-core fabrication and winding (`core_fabrication_winding`)

#### Inputs

##### Product flows

###### Silicon-electrical steel for a magnetic core (`electrical_steel_input`)

Record flat-rolled silicon-electrical steel when it is cut, laminated, stacked, or otherwise incorporated into an on-site magnetic core.

- Selected flow: Flat-rolled products of silicon-electrical steel `8863bbb7-7bc4-4ff1-ab21-4a01addf2ad4`
- Flow property / unit: Mass / kg
- Amount rule: measured as-received mass issued to the included process
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg accepted finished equipment
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_core_fabrication_batch`

###### Insulated magnet wire (`magnet_wire_input`)

Record the mass of insulated winding wire issued to on-site coil winding. Declare conductor metal, insulation system, thermal class, and wire dimensions.

- Selected flow: Magnet wire `2bf8a4db-b29e-404a-ae6c-402adbb77af4`
- Flow property / unit: Mass / kg
- Amount rule: measured as-received wire mass issued to winding
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg accepted finished equipment
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_core_fabrication_batch`

###### Industrial oxygen for on-site cutting or joining (`industrial_oxygen_input`)

Record industrial oxygen only when it crosses the process boundary for on-site oxy-fuel cutting, brazing, or joining associated with the declared fabrication route.

- Selected flow: Industrial oxygen `bd4b0f96-2090-4806-a648-335ab20ff401`
- Flow property / unit: Volume / m3
- Amount rule: supplier invoice, cylinder balance, or calibrated meter volume attributable to included fabrication
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg accepted finished equipment
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_core_fabrication_batch`

###### Electricity for core fabrication and winding (`core_fabrication_electricity`)

Record metered purchased electricity used for cutting, stamping, winding, joining, curing, local extraction, and directly associated auxiliaries in this process.

- Selected flow: Electricity `890a70b7-b677-4e2a-8a1b-7d017e0a10ae`
- Flow property / unit: Net calorific value / MJ
- Amount rule: process-submetered energy or auditable equipment-load calculation for the reporting period
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg accepted finished equipment
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_core_fabrication_batch`

#### Outputs

##### Waste flows

###### Segregated ferrous fabrication scrap (`steel_scrap_output`)

Record weighed ferrous offcuts, punchings, laminations, and rejected steel pieces leaving the process as waste. Declare alloy and coating contamination and destination.

- Selected flow: Steel scrap `37997e0e-e34b-4ab9-a642-5d86f4333919`
- Flow property / unit: Mass / kg
- Amount rule: measured mass transferred out of the process as ferrous waste
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg accepted finished equipment
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_core_fabrication_batch`

###### Segregated copper winding scrap (`copper_scrap_output`)

Record weighed copper-bearing winding offcuts and rejected wire leaving the process as waste. Declare retained insulation and contamination.

- Selected flow: Copper Scrap `4fbbb5f1-560a-4052-ba0c-652c5dfc282e`
- Flow property / unit: Mass / kg
- Amount rule: measured mass transferred out of the process as copper scrap
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg accepted finished equipment
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_core_fabrication_batch`

### Process: Printed-wire-board and electronic assembly (`electronic_assembly`)

#### Inputs

##### Product flows

###### Printed wire board installed in the product (`printed_wire_board_input`)

Record the mass of printed wire boards issued to the declared equipment. Declare whether the board is bare or populated, layer count, substrate, finish, and included components.

- Selected flow: Printed Wire Board `a8bd954c-59b3-4317-b4de-02a17d6da5ca`
- Flow property / unit: Mass / kg
- Amount rule: measured board mass issued to accepted units plus attributable rejects
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg accepted finished equipment
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_electronic_assembly_batch`

###### Electricity for electronic assembly (`electronic_assembly_electricity`)

Record metered purchased electricity for board installation, soldering, rework, extraction, and directly associated electronic testing.

- Selected flow: Electricity `890a70b7-b677-4e2a-8a1b-7d017e0a10ae`
- Flow property / unit: Net calorific value / MJ
- Amount rule: process-submetered energy or auditable equipment-load calculation for the reporting period
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg accepted finished equipment
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_electronic_assembly_batch`

#### Outputs

##### Waste flows

###### Printed wiring board scrap (`printed_wire_board_scrap`)

Record rejected, damaged, or off-spec printed wiring boards leaving the process as a distinct waste stream. Declare bare or populated state and hazardous constituents.

- Selected flow: Scrap, printed wiring board `fe1d2a9b-bdb0-498a-9b5f-4836ec35f883`
- Flow property / unit: Mass / kg
- Amount rule: measured mass transferred from electronic assembly as printed-board scrap
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg accepted finished equipment
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_electronic_assembly_batch`

### Process: Aqueous cleaning and surface preparation (`aqueous_cleaning_surface_prep`)

#### Inputs

##### Product flows

###### Process water for cleaning (`process_water_input`)

Record water supplied to the included aqueous cleaning, degreasing, rinsing, or electrochemical-apparatus maintenance step.

- Selected flow: Process Water `94a04f7e-2d5c-41f0-b182-d54a3b373a02`
- Flow property / unit: Mass / kg
- Amount rule: calibrated make-up and rinse-water meter readings or tank-balance records
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg accepted finished equipment
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_cleaning_batch`

###### Sodium hydroxide for alkaline cleaning (`sodium_hydroxide_input`)

Record sodium hydroxide only when used in the declared alkaline cleaning or surface-preparation route. Report solution concentration and convert solution mass to contained sodium hydroxide mass.

- Selected flow: Sodium hydroxide `e0abcced-0611-4c24-9290-5a2c5a0c4169`
- Flow property / unit: Mass / kg
- Amount rule: contained sodium hydroxide mass from weighed or invoiced solution mass multiplied by verified concentration
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg accepted finished equipment
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_cleaning_batch`

###### Electricity for aqueous cleaning (`cleaning_electricity`)

Record purchased electricity for bath circulation, heating, extraction, pumping, and directly associated treatment equipment within this process.

- Selected flow: Electricity `890a70b7-b677-4e2a-8a1b-7d017e0a10ae`
- Flow property / unit: Net calorific value / MJ
- Amount rule: process-submetered energy or auditable equipment-load calculation for the reporting period
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg accepted finished equipment
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_cleaning_batch`

#### Outputs

##### Waste flows

###### Metal-bearing cleaning wastewater (`metal_bearing_cleaning_wastewater`)

Record the aqueous waste transferred from cleaning, rinsing, or bath maintenance when it contains metals or metal-bearing solids. Keep this stream separate from sanitary wastewater and declare dissolved and suspended metals, pH, treatment state, and transfer destination.

- Selected flow: Metal-bearing cleaning wastewater
- Flow property / unit: Mass / kg
- Amount rule: measured wastewater mass, or measured volume converted using recorded density, transferred out of the process
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg accepted finished equipment
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_cleaning_batch`

### Process: Final assembly and acceptance testing (`final_assembly_test`)

#### Inputs

##### Product flows

###### Electricity for final assembly and acceptance testing (`final_assembly_test_electricity`)

Record purchased electricity for final mechanical and electrical assembly, functional testing, conditioning, rework, and directly associated auxiliaries.

- Selected flow: Electricity `890a70b7-b677-4e2a-8a1b-7d017e0a10ae`
- Flow property / unit: Net calorific value / MJ
- Amount rule: process-submetered energy or auditable equipment-load calculation for the reporting period
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg accepted finished equipment
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_final_assembly_batch`

#### Outputs

##### Product flows

###### Accepted finished equipment (`finished_equipment`)

Record only accepted equipment conforming to the declared configuration and factory acceptance criteria. Rejects and rework-in-progress shall not enter the reference-product mass.

- Selected flow: Finished other electrical equipment n.e.c.
- Flow property / unit: Mass / kg
- Amount rule: measured net mass of accepted finished equipment released at the factory gate
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: 1 kg accepted finished equipment
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_final_assembly_batch`

## 7. Allocation and Co-product Handling

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `allocation_subdivide_first` | multifunctional foreground operations | Avoid allocation by subdividing independently metered operations and assigning material, energy, waste, and emission records to the declared equipment family. If subdivision is not practicable, assess system expansion before applying allocation. | `eu-jrc-pef-methods-2022` |
| `allocation_physical_then_other` | residual shared burdens | After documented subdivision and system-expansion attempts, allocate remaining shared burdens using a causal physical relationship such as machine time, energy demand, or mass. Use another relationship only when no relevant physical relation exists, and disclose the rationale and sensitivity. | `eu-jrc-pef-methods-2022` |
| `allocation_scrap_outputs` | steel, copper, and printed-board scrap | Report measured scrap as waste crossing the foreground boundary. Do not subtract an avoided burden from the foreground inventory; any recycling credit or burden belongs to an explicitly declared downstream model. |  |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_core_fabrication_batch` | `core_fabrication_winding` | electrical steel, magnet wire, industrial oxygen, electricity, steel scrap, copper scrap | batch issue, meter, cylinder, invoice, and waste-transfer records | product_model; batch_id; accepted_product_mass_kg; electrical_steel_kg; magnet_wire_kg; oxygen_m3; oxygen_reference_conditions; electricity_kwh; steel_scrap_kg; copper_scrap_kg; material_state; destination | reconcile calibrated scales and meters, material issues and returns, and waste transfer tickets to the same production batches | kg; m3; kWh | each batch with monthly reconciliation | at least 12 representative months or the full campaign for campaign production | every included fabrication and winding site | sum attributable records, convert electricity to MJ, and divide by accepted net product mass | calibration records; invoices; issue and return records; batch genealogy; waste transfer tickets |
| `cp_electronic_assembly_batch` | `electronic_assembly` | printed wire board, electricity, printed-board scrap | batch issue, submeter, reject, and waste-transfer records | product_model; batch_id; accepted_product_mass_kg; board_mass_kg; board_state; electricity_kwh; board_scrap_kg; destination | reconcile board issues, returns, rejects, submeter readings, and waste transfers to accepted units | kg; kWh | each batch with monthly reconciliation | at least 12 representative months or the full campaign | every included electronic-assembly site | sum attributable records, convert electricity to MJ, and divide by accepted net product mass | scale and meter calibration; bill of materials; reject logs; waste transfer tickets |
| `cp_cleaning_batch` | `aqueous_cleaning_surface_prep` | process water, sodium hydroxide, electricity, metal-bearing wastewater | meter, tank-balance, chemical issue, analysis, and waste-transfer records | product_model; batch_id; accepted_product_mass_kg; water_kg; sodium_hydroxide_solution_kg; sodium_hydroxide_mass_fraction; electricity_kwh; wastewater_kg_or_m3; density; pH; dissolved_metals; suspended_metals; treatment_state; destination | reconcile calibrated meters and tank balances with chemical issues, laboratory analyses, and wastewater transfer records | kg; kWh; mass fraction | each batch or bath event with monthly reconciliation | at least 12 representative months or the full campaign | every included cleaning and surface-preparation site | calculate contained sodium hydroxide, convert electricity to MJ and wastewater volume to mass only with recorded density, then divide by accepted net product mass | calibrations; supplier concentration certificate; bath logs; laboratory reports; transfer tickets |
| `cp_final_assembly_batch` | `final_assembly_test` | final electricity and accepted finished equipment | submeter, production release, weighing, test, and rework records | product_model; configuration_revision; batch_id; accepted_units; accepted_net_mass_kg; rejected_mass_kg; rework_status; electricity_kwh; test_specification; test_result; packaging_condition | reconcile calibrated product scales and process submeters with release and acceptance-test records | kg; kWh | each released batch with monthly reconciliation | at least 12 representative months or the full campaign | every final-assembly and acceptance-test site | convert electricity to MJ, exclude unresolved rejects and rework-in-progress, and normalize all included process totals to accepted net mass | scale and meter calibration; release records; test reports; configuration-controlled bill of materials |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_reference_normalization` | every inventory row | normalized amount = attributable process amount / accepted finished-equipment net mass | attributable row amount; accepted_product_mass_kg | amount per 1 kg accepted finished equipment |  |
| `calc_electricity_mj` | all electricity rows | electricity_MJ = electricity_kWh × 3.6 | calibrated electricity_kWh | electricity energy in MJ |  |
| `calc_sodium_hydroxide_content` | `sodium_hydroxide_input` | contained_NaOH_kg = solution_mass_kg × verified_NaOH_mass_fraction | sodium_hydroxide_solution_kg; sodium_hydroxide_mass_fraction | kg sodium hydroxide |  |
| `calc_wastewater_mass` | `metal_bearing_cleaning_wastewater` | wastewater_kg = measured_mass_kg, or measured_volume_m3 × recorded_density_kg_per_m3 | wastewater mass or volume; contemporaneous density | kg metal-bearing cleaning wastewater |  |
| `calc_mass_balance_check` | material-bearing processes | input mass = accepted incorporated mass + returned material + segregated wastes + measured emissions + inventory change; investigate unexplained residuals | material issues; returns; accepted bill-of-material mass; wastes; emissions; opening and closing stocks | reconciled process mass-balance residual |  |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_identity_configuration` | reference product and material inputs | Maintain configuration-controlled product identity, bill of materials, material state, accepted-output mass, rated function, and test specification for every represented family. | released drawings; bill of materials; product data sheet; acceptance-test record |
| `dq_foreground_coverage` | all included processes | Collect company-specific records for every known input and output under direct control; document zero or not-applicable route decisions and explain data gaps without merging atomic exchanges. | process map; meter map; purchasing ledger; material balance; waste and emission register; `eu-jrc-pef-methods-2022` |
| `dq_temporal_representativeness` | foreground records | Cover at least 12 representative consecutive months, or the complete campaign when production is campaign-based; disclose shutdowns, commissioning, abnormal batches, and extrapolation. | dated batch, meter, production, and maintenance records |
| `dq_geography_technology` | foreground and background links | Match site geography, process technology, material grade, component state, electricity supply, water source, and waste destination; disclose every mismatch and substitution. | supplier declarations; dataset metadata; site records |
| `dq_measurement_traceability` | measured and calculated rows | Retain meter and scale identifiers, calibration status, raw units, conversion factors, concentration certificates, density records, allocation keys, and calculation version. | calibration certificates; raw extracts; calculation workbook audit trail |
| `dq_completeness_reconciliation` | each reporting period | Reconcile purchased and issued materials, accepted output, inventory changes, returned materials, wastes, and known direct emissions; investigate material residuals and duplicate electricity coverage. | signed reconciliation and exception log |

## 9. Validation Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `validate_reference_identity` | reference flow | Fail validation if the declared equipment type, model or family, rated function, configuration revision, net-mass method, manufacturing route, site, reporting period, test criteria, or factory-gate condition is missing. | `un-cpc-3-0-2025` |
| `validate_route_inventory` | process map and inventory | Require final assembly and acceptance testing. For every conditional route marked applicable, require its detailed atomic input and output records; for every route marked not applicable, require evidence of absence or an outsourced upstream dataset. |  |
| `validate_uuid_semantics` | UUID-bearing rows | Confirm public state code 100, exact English and Chinese baseName, flow type, classification, property, unit group, and reference unit. Reject proxies, lower-ranked duplicate identities, and unverified UUIDs. |  |
| `validate_reference_balance` | accepted product and normalization | Require accepted finished-equipment mass greater than zero, exclude rejects and rework-in-progress, and verify every normalized amount uses the same accepted net-mass denominator. |  |
| `validate_energy_overlap` | electricity rows | Verify submeter boundaries do not overlap between fabrication, electronic assembly, cleaning, and final assembly. Reconcile process totals to the site meter and explain residual shared electricity. |  |
| `validate_material_waste_balance` | material-bearing processes | Check issued material against accepted incorporated mass, returns, wastes, direct emissions, and inventory change. Flag unexplained residuals and inconsistent bare/populated board or insulated-wire states. | `eu-jrc-pef-methods-2022` |
| `validate_unresolved_identities` | UUID-empty rows | Keep `finished_equipment` and `metal_bearing_cleaning_wastewater` UUIDs empty until an exact state-100 identity is directly verified; do not substitute a narrower finished product or generic wastewater. |  |
| `validate_comparison_limits` | downstream use | Reject comparative assertions between unlike equipment functions, rated performances, configurations, or service lives under this mass-based factory-gate rule. |  |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | Configuration-declared cradle-to-gate foreground product dataset |
| downstream_use | secondary_dataset; background_dataset |
| allowed_use | Modelling the factory-gate supply of the declared electrical-equipment model or homogeneous family in a compatible process or lifecycle model; hotspot and improvement assessment within the declared boundary |
| excluded_use | Comparative assertions between unlike equipment functions or lifetimes; generic representation of all CPC 46939 products without a declared configuration; substitution for permanent magnets, components sold separately, use-stage service, installation, or end-of-life |
| required_metadata | canonical PCR id; product type and model or homogeneous family; rated function and principal performance; configuration and bill-of-material revision; net mass and accepted-output basis; site and geography; technology and route applicability; reporting period; background dataset identities; electricity supply; water source; chemical concentration; waste state and destination; allocation decisions; cutoff and infrastructure treatment; factory-gate packaging condition |
| required_quality_disclosure | foreground coverage; temporal, geographical, and technological representativeness; meter and scale calibration; mass and energy reconciliation; data gaps; UUID gaps; background substitutions; outsourced steps; allocation and sensitivity; abnormal production; uncertainty and limitations |
| update_trigger | Change in product function, configuration or bill of materials; manufacturing route, site, or technology; energy supply; cleaning chemistry; supplier or waste destination; allocation; background dataset; reporting period; or any change exceeding the study's materiality threshold |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `un-cpc-3-0-2025` | dataset | United Nations Statistics Division, CPC Version 3.0 Structure, 30 June 2025, official CSV, https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Structure_30Jun2025.csv (retrieved 2026-09-05; verified SHA-256 `sha256:5cd2c1c4890dd6be16af48e9bb940fed48efff9865f39ff15edaa921da25fb7c`) | Official classification identity, included examples, and permanent-magnet sibling exclusions |
| `eu-jrc-pef-methods-2022` | official_guidance | Damiani, M.; Ferrara, N.; Ardente, F. (2022), Understanding Product Environmental Footprint and Organisation Environmental Footprint methods, EUR 31236 EN, JRC129907, doi:10.2760/11564, https://publications.jrc.ec.europa.eu/repository/bitstream/JRC129907/JRC129907_01.pdf (retrieved 2026-09-05) | Functional-unit framing, foreground input/output collection, data quality, process boundary, and allocation hierarchy |
