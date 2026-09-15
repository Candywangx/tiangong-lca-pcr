---
pcr_id: pcr.metal-products-machinery-and-equipment.general-purpose-machinery.other-hydraulic-and-pneumatic-power-engines-and-motors
language: en-US
status: candidate
sync_with: pcr.zh-CN.md
---

# Other hydraulic and pneumatic power engines and motors

## 1. Scope and Applicability

This PCR governs foreground data packages for assembly and factory acceptance testing of complete non-linear-acting hydraulic or pneumatic power engines and motors, including continuous-rotation motors and limited-rotation actuators. The reporting organization shall declare the working medium, operating principle, rated performance, service-life basis, bill of materials, and test route. The foreground begins with inspected product-specific components or subassemblies at the assembly-site gate and ends with one accepted, market-ready, unpackaged motor at the factory gate. Purchased components and energy carriers require separate upstream datasets.

Excluded are linear-acting cylinders in CPC 43211, hydraulic turbines and water wheels, pumps, compressors, valves, electric motors, internal-combustion engines, incomplete parts, distribution, use, maintenance, and end-of-life. The CPC source establishes the residual classification boundary; manufacturer technical information supports representative hydraulic and pneumatic functions and component architecture. [Sources: `un-cpc-3-0-structure-2025`, `danfoss-orbital-motors-2021`, `festo-drrd-1395606-2026`]

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | `pcr.metal-products-machinery-and-equipment.general-purpose-machinery.other-hydraulic-and-pneumatic-power-engines-and-motors` |
| classification_refs | CPC 3.0: 43219, exact classification context |
| covered_products | Complete non-linear-acting hydraulic and pneumatic power engines and motors, including continuous-rotation motors and limited-rotation fluid-power actuators |
| excluded_products | Linear hydraulic or pneumatic cylinders; hydraulic turbines and water wheels; pumps, compressors, valves, electric motors, internal-combustion engines; incomplete parts; separately sold manufacturing services |
| representative_product | A configuration-declared, accepted non-linear rotary hydraulic or pneumatic motor or actuator |
| production_route | Assembly and factory acceptance testing from inspected product-specific components; hydraulic-fluid and compressed-air test cards apply only to their respective routes |
| market_state | Complete, accepted, market-ready, unpackaged motor at the factory gate |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Controlled rotary mechanical output from pressurized hydraulic liquid or compressed gas by a complete non-linear-acting motor or actuator |
| How much | One accepted unit with declared rated torque, speed and power, or declared angular travel and torque for a limited-rotation actuator |
| How well | Meets declared pressure, displacement or angular travel, torque, speed, power, efficiency or leakage, cleanliness, and acceptance criteria |
| How long or cycle | Declared design service life in operating hours or cycles under the declared duty class and maintenance assumptions |
| reference_flow_link | One accepted market-ready output from `motor_assembly_and_test` |

| Field | Value |
| --- | --- |
| Reference amount | 1 Item(s) |
| Reference product flow | Other hydraulic or pneumatic power motor, non-linear acting |
| Reference flow property | Number of items `01846770-4cfe-4a25-8ad9-919d8d378345` |
| Reference unit group | Units of items `5beb6eed-33a9-47b8-9ede-1dfe8f679159` |
| Reference unit | Item(s) |
| Required qualifiers | working medium; motor or actuator principle; fixed or variable displacement; rated pressure or pressure differential; displacement or angular travel; rated torque; rated speed; rated mechanical output; efficiency and leakage basis; duty class; design life or rated cycles; finished mass and materials; surface treatment; included brake, sensor, or valve functions; test procedure; geography; technology; unpackaged factory-gate state |

The finished reference-product UUID is unresolved. Retain the exact product description and qualifiers; do not substitute a shaft, rotor, wind-turbine component, gas, sensor, or generic part candidate.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| `accepted_unit_count` | reference product | Number of items `01846770-4cfe-4a25-8ad9-919d8d378345` | Item(s) | Count only complete units passing final acceptance; normalize all exchanges to one accepted unit and disclose rejected or reworked units. |
| `component_mass` | housing, shaft, rotor, seals, bearings | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Use actual issued or BOM mass net of returned unused components and keep unlike components separate. |
| `electricity_energy` | assembly and test electricity | Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` | MJ | Use allocated site-metered electricity; convert kWh using exactly 3.6 MJ/kWh and record the conversion. |
| `hydraulic_fluid_mass` | hydraulic test fluid and spent fluid | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Measure issue, return, retention, spill, and dispatch mass by grade; volume conversion uses density at the recorded temperature. |
| `compressed_air_volume` | pneumatic test air | Volume `93a60a56-a3c8-22da-a746-0800200c9a66` | m3 | Declare pressure, temperature, humidity or base conditions and use one consistent reference condition. |

## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Inspected product-specific housings, shafts, rotors, seals, bearings, and other subassemblies received at the assembly site |
| starting_condition_role | Foreground gate-to-gate starting condition; purchased-component production remains an upstream dataset requirement |
| product_classification_scope | Complete configuration-declared CPC 43219 non-linear hydraulic and pneumatic power engines and motors |
| recursive_input_rule | Record a purchased same-category subassembly as a distinct product input and link its upstream dataset; do not absorb it into the reference product or recursively reapply this PCR within the same process. |
| upstream_dataset_requirement | Link production datasets for purchased components, electricity, hydraulic fluid, and compressed air, preserving geography, technology, state, and delivery qualifiers. |
| disclosure | Declare in-house operations, product route, meter coverage, rejected and reworked units, retained fill, recirculation, excluded packaging, and cut-offs. |

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `boundary_factory_gate` | all datasets | Include directly controlled assembly, finishing or adjustment, leak and function testing, attributable rework, and final acceptance through the unpackaged factory gate. | `eu-pef-2021-2279` |
| `boundary_upstream_links` | purchased inputs | Keep each purchased component, electricity, hydraulic fluid, and compressed air as a visible atomic input linked to a compatible upstream dataset. | `eu-pef-2021-2279` |
| `boundary_route_test` | test media | Include hydraulic fluid only for hydraulic products and compressed air only for pneumatic products; declare the non-applicable route and never combine the flows. | `danfoss-orbital-motors-2021`, `festo-drrd-1395606-2026` |
| `boundary_exclusions` | downstream stages | Exclude packaging, distribution, installation, use, maintenance, replacement, and end-of-life unless the study explicitly expands and discloses its boundary. | `eu-pef-2021-2279` |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| `motor_assembly_and_test` | Motor assembly and factory acceptance testing | `required` | Applies to every covered finished motor; activate route-specific test-medium cards according to the declared hydraulic or pneumatic configuration. | foreground production | 1 accepted unpackaged motor |

### Process: Motor assembly and factory acceptance testing (`motor_assembly_and_test`)

#### Inputs

##### Product flows

###### Machined steel motor housing (`steel_motor_housing`)

Record a machined steel housing when the declared BOM uses steel.

- Selected flow: Machined steel fluid-power motor housing
- Flow property / unit: Mass / kg
- Amount rule: issued or BOM mass attributable to accepted units, net of unused returns
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 accepted motor
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_component_bom`
- Sources: `danfoss-orbital-motors-2021`

###### Machined aluminium-alloy motor housing (`aluminium_motor_housing`)

Record a machined aluminium-alloy housing only when the declared BOM uses aluminium.

- Selected flow: Machined aluminium-alloy fluid-power motor housing
- Flow property / unit: Mass / kg
- Amount rule: issued or BOM mass attributable to accepted units, net of unused returns
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 accepted motor
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_component_bom`
- Sources: `festo-drrd-1395606-2026`

###### Hardened steel motor drive shaft (`motor_drive_shaft`)

Record the finished drive-shaft mass issued to assembly.

- Selected flow: Hardened steel fluid-power motor drive shaft
- Flow property / unit: Mass / kg
- Amount rule: issued or BOM mass attributable to accepted units
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 accepted motor
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_component_bom`
- Sources: `danfoss-orbital-motors-2021`, `festo-drrd-1395606-2026`

###### Fluid-power motor rotor (`motor_rotor`)

Record the configuration-specific rotor or rotating gear set and declare its metallurgy and principle.

- Selected flow: Fluid-power motor rotor
- Flow property / unit: Mass / kg
- Amount rule: issued or BOM mass attributable to accepted units
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 accepted motor
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_component_bom`
- Sources: `danfoss-orbital-motors-2021`

###### Elastomer seal set (`elastomer_seal_set`)

Record the installed seal-set mass and declare elastomer family and included parts.

- Selected flow: Elastomer seal set for a fluid-power motor
- Flow property / unit: Mass / kg
- Amount rule: issued or BOM mass attributable to accepted units
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 accepted motor
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_component_bom`
- Sources: `festo-drrd-1395606-2026`

###### Rolling-bearing set (`rolling_bearing_set`)

Record the bearing-set mass installed in the declared configuration.

- Selected flow: Rolling-bearing set for a fluid-power motor
- Flow property / unit: Mass / kg
- Amount rule: issued or BOM mass attributable to accepted units
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 accepted motor
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_component_bom`
- Sources: `danfoss-orbital-motors-2021`

###### Assembly and test electricity (`electricity`)

Record purchased electricity for assembly equipment, test rigs, and attributable auxiliaries.

- Selected flow: Electricity `67b723a9-6f63-4802-adca-b52ce7967d47`
- Flow property / unit: Net calorific value / MJ
- Amount rule: allocate site-metered electricity and normalize using `calc_normalize_per_accepted_unit`
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 accepted motor
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_energy_meter`
- Sources: `eu-pef-2021-2279`

###### Hydraulic test fluid (`hydraulic_test_fluid`)

For hydraulic products, record net test-fluid input after reusable returns and recirculation; declare grade and retained fill.

- Selected flow: Hydraulic Fluid `eafff56c-3487-4345-9f24-00429f61c556`
- Flow property / unit: Mass / kg
- Amount rule: issued mass minus returned reusable mass, normalized to accepted hydraulic motors
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 accepted hydraulic motor
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_hydraulic_test_fluid`
- Sources: `danfoss-orbital-motors-2021`

###### Compressed air for pneumatic testing (`compressed_test_air`)

For pneumatic products, record air delivered to leak and function testing at declared reference conditions.

- Selected flow: Compressed air `46e2b1e4-5a4e-4579-b6a2-65b03f9ce825`
- Flow property / unit: Volume / m3
- Amount rule: metered test-rig volume normalized to accepted pneumatic motors at declared reference conditions
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 accepted pneumatic motor
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_compressed_air_meter`
- Sources: `festo-drrd-1395606-2026`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Accepted non-linear hydraulic or pneumatic motor (`reference_product`)

Record exactly one complete, accepted, market-ready, unpackaged motor.

- Selected flow: Other hydraulic or pneumatic power motor, non-linear acting
- Flow property / unit: Number of items / Item(s)
- Amount rule: 1 accepted unit
- Value mode: Fixed value (`fixed_value`)
- Specificity: Generic (`generic`)
- Normalization basis: one accepted motor
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Method formula (`method_formula`)
- Collection protocol: `cp_accepted_units`
- Sources: `un-cpc-3-0-structure-2025`, `danfoss-orbital-motors-2021`, `festo-drrd-1395606-2026`

##### Waste flows

###### Spent hydraulic motor test fluid (`spent_hydraulic_test_fluid`)

For hydraulic products, record test fluid dispatched for treatment, separate from reusable or retained fluid.

- Selected flow: Spent hydraulic motor test fluid
- Flow property / unit: Mass / kg
- Amount rule: measured dispatch mass or reconciled issue-return-retention balance per accepted hydraulic motor
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 accepted hydraulic motor
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_spent_hydraulic_fluid`
- Sources: `danfoss-orbital-motors-2021`

##### Elementary flows

No direct elementary exchange is prescribed. Report each measured site spill, vent, or other exchange as a species- and compartment-specific row; do not assign upstream electricity emissions to this process.

## 7. Allocation and Co-product Handling

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `allocation_avoid` | separable products, lines, and test routes | Avoid allocation by subdividing routes, product families, batches, meters, and test rigs whenever records permit. | `eu-pef-2021-2279` |
| `allocation_shared_energy` | shared assembly and test electricity | If subdivision or direct metering is impossible, allocate with a documented physical driver such as measured machine energy, test-rig time, or accepted throughput and justify the driver. | `eu-pef-2021-2279` |
| `allocation_rework` | rejected and reworked units | Attribute traceable rework to the accepted configuration; allocate untraceable shared rework with the originating operation's physical driver and disclose rejection rates. | `eu-pef-2021-2279` |
| `allocation_waste_credit` | spent fluid and component scrap | Record waste and treatment links without avoided-production credit inside this factory-gate package; use substitution or system expansion only in an explicitly expanded study. | `eu-pef-2021-2279` |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_component_bom` | `motor_assembly_and_test` | housing, shaft, rotor, seal, bearing inputs | approved BOM and issue-return records | configuration; component; material; issued count; unit mass; returned count; accepted units | reconcile BOM with stores issues and returns; verify unit mass | kg | each configuration and lot | production representative period | assembly site | sum net mass by atomic row and divide by accepted units | BOM revision; ledger; weighing or supplier record |
| `cp_energy_meter` | `motor_assembly_and_test` | electricity | calibrated meter log | meter id; start; end; multiplier; coverage; allocation driver; accepted units | calculate consumption, exclude uncovered loads, document allocation | kWh or MJ | continuous or campaign | at least one representative year or disclosed shorter campaign | assembly and test site | convert to MJ and divide allocated energy by accepted units | calibration; meter export; schedule; worksheet |
| `cp_hydraulic_test_fluid` | `motor_assembly_and_test` | hydraulic test-fluid input | issue, return, and retained-fill records | grade; issue mass; reusable return; retained mass; temperature; density | reconcile net fluid crossing the boundary | kg | hydraulic campaign | hydraulic representative period | hydraulic test rig and store | net issue divided by accepted hydraulic motors | ledger; scale; density certificate; test log |
| `cp_compressed_air_meter` | `motor_assembly_and_test` | compressed test air | test-rig flowmeter log | volume; pressure; temperature; humidity or base condition; accepted units | integrate delivered volume and normalize to one condition | m3 | pneumatic campaign | pneumatic representative period | pneumatic test rig | normalized volume divided by accepted pneumatic motors | calibration; test log; calculation |
| `cp_accepted_units` | `motor_assembly_and_test` | reference product | acceptance record | serial or lot; configuration; result; rework; time | count only complete passing units | Item(s) | each unit or lot | same period as inputs | assembly site | accepted count is the denominator | signed acceptance and rework logs |
| `cp_spent_hydraulic_fluid` | `motor_assembly_and_test` | spent hydraulic fluid | waste consignment and mass balance | waste mass; grade; issue; return; retention; spill; consignment | weigh dispatch or reconcile balance and investigate loss | kg | dispatch and campaign | hydraulic representative period | test rig and waste store | waste mass divided by accepted hydraulic motors | consignment; scale; signed balance |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_normalize_per_accepted_unit` | every row | normalized amount = attributable foreground amount / accepted motor count | attributable amount; accepted count | amount per accepted motor | `eu-pef-2021-2279` |
| `calc_electricity_conversion` | electricity | electricity MJ = metered kWh × 3.6 MJ/kWh | metered kWh | electricity MJ |  |
| `calc_component_net_issue` | component inputs | mass = issued count × unit mass − returned count × unit mass | counts; unit mass | net component kg |  |
| `calc_hydraulic_fluid_balance` | hydraulic input and waste | net fluid = issue − reusable return; reconcile with retained fill, waste, spill, and stock change | issue; return; retention; waste; spill; stock | input and waste kg per motor |  |
| `calc_compressed_air_reference` | compressed air | convert measured volume to one declared pressure, temperature, and humidity basis; never mix incompatible conditions | volume; pressure; temperature; humidity | m3 at reference conditions per motor | `festo-drrd-1395606-2026` |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_completeness` | all foreground rows | Reconcile the full period, including rejected and reworked units, and explain every omission. | period reconciliation and cut-off register |
| `dq_technology` | product and route | Match principle, medium, pressure, displacement or angle, torque, speed, duty, and test technology. | product specification and test plan |
| `dq_geography` | site and upstream links | State the site, match supplier geography where possible, and document proxies. | site and supplier records; selection log |
| `dq_time` | all activity data | Use one representative period and disclose abnormal operations and mix changes. | meter logs; production ledger; statement |
| `dq_precision` | meters and mass records | Retain calibration, resolution, conversions, and data-limit notes. | certificates; raw exports; workbook |
| `dq_consistency` | normalization and allocation | Use one accepted-unit denominator, one air reference condition, and one allocation method. | calculation audit and review |

## 9. Validation Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `validate_identity` | product category | The product shall be a complete CPC 43219 non-linear hydraulic or pneumatic motor or actuator, not a CPC 43211 linear cylinder or excluded product. | `un-cpc-3-0-structure-2025` |
| `validate_reference` | reference flow | Output shall equal exactly 1 accepted Item(s), with all required product, performance, life, geography, technology, and state qualifiers. | `danfoss-orbital-motors-2021`, `festo-drrd-1395606-2026` |
| `validate_atomic_inventory` | inventory | Every exchange shall be atomic; hydraulic fluid and compressed air remain separate, and UUID-empty rows remain explicitly unresolved. |  |
| `validate_route` | test media | A hydraulic dataset includes or justifies zero hydraulic fluid and marks compressed air non-applicable; a pneumatic dataset does the converse unless both are separately metered. | `danfoss-orbital-motors-2021`, `festo-drrd-1395606-2026` |
| `validate_balance` | units, components, fluid | Reconcile accepted counts, component net issues, and hydraulic-fluid issue-return-retention-waste balance or document investigated residuals. |  |
| `validate_energy` | electricity | Meter coverage, conversion, allocation, and accepted-unit normalization shall be reproducible. |  |
| `validate_boundary_allocation` | boundary and allocation | Disclose the starting condition, upstream links, exclusions, allocation hierarchy, and system expansion consistently. | `eu-pef-2021-2279` |
| `validate_bilingual_alignment` | bilingual use | English and Chinese process ids, row ids, UUIDs, ordered rule ids, functional unit, rows, and source ids shall align. |  |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | Configuration-specific foreground dataset for assembly and factory acceptance testing of one complete CPC 43219 motor |
| downstream_use | TianGong flow, process, lifecyclemodel, and foreground package projections for product footprint or LCA |
| allowed_use | Factory-gate comparison only when function, performance, life, boundary, route, geography, technology, and allocation are compatible |
| excluded_use | Direct comparison with linear cylinders, turbines, pumps, compressors, valves, electric motors, incomplete parts, or incompatible boundaries |
| required_metadata | PCR id; CPC context; manufacturer and model; medium; principle; pressure; displacement or angle; torque; speed; power; efficiency or leakage; duty and life; mass and materials; surface treatment; included functions; site; period; test route; meter coverage; allocation; cut-offs; state |
| required_quality_disclosure | completeness; rejection and rework; BOM reconciliation; calibration and coverage; air conditions; fluid recirculation and retention; allocation driver; upstream proxies; unresolved UUIDs; absent external ranges |
| update_trigger | Change in principle, materials, performance class, test route, site, supplier geography, meter boundary, allocation, acceptance criteria, or period |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `un-cpc-3-0-structure-2025` | Official guidance (`official_guidance`) | United Nations Statistics Division, *CPC Version 3.0 Structure*, 30 June 2025, https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Structure_30Jun2025.csv | Subclass 43219 identity and distinction from linear-acting subclass 43211 |
| `danfoss-orbital-motors-2021` | Handbook (`handbook`) | Danfoss, *Technical Information: General, Orbital Motors*, BC152886483554en-000401, 2021, https://assets.danfoss.com/documents/latest/195953/BC152886483554en-000401.pdf | Hydraulic energy conversion, orbital-motor architecture, components, and performance qualifiers |
| `festo-drrd-1395606-2026` | Handbook (`handbook`) | Festo, *Rotary actuator DRRD-20-180-FH-PA data sheet*, part 1395606, generated 4 September 2026, https://ftp.festo.com/public/PNEUMATIC/SOFTWARE_SERVICE/DataSheet/EN_US/1395606.pdf | Pneumatic rotary-actuator identity, compressed-air medium, rack-and-pinion principle, fields, and materials |
| `eu-pef-2021-2279` | Official guidance (`official_guidance`) | European Commission, *Commission Recommendation (EU) 2021/2279, Annex I Product Environmental Footprint Method*, consolidated 30 December 2021, https://eur-lex.europa.eu/legal-content/EN/TXT/PDF/?uri=CELEX%3A02021H2279-20211230 | Functional unit, reference flow, boundary, allocation hierarchy, and data-quality dimensions |
