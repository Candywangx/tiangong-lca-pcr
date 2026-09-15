---
pcr_id: pcr.metal-products-machinery-and-equipment.general-purpose-machinery.linear-acting-cylinders-hydraulic-and-pneumatic-power-engines-and-motors
language: en-US
status: candidate
content_maturity: authored_methodology
translation_status: canonical
sync_with: pcr.zh-CN.md
---

# Linear acting (cylinders) hydraulic and pneumatic power engines and motors

## 1. Scope and Applicability

This PCR covers finished hydraulic and pneumatic cylinders that convert fluid pressure into reciprocating linear force and motion. It covers single-rod, double-rod, single-acting, and double-acting cylinders supplied as products, including cylinders with integral cushioning or sensing provisions when those features are part of the declared product.

The product boundary excludes rotary hydraulic or pneumatic motors, pumps, compressors, valves, complete fluid-power systems, separately supplied cylinder parts, electric linear actuators, installation hardware not supplied with the cylinder, use-phase fluid or compressed-air supply, maintenance, and end-of-life. A foreground data package must state whether it represents a hydraulic or pneumatic cylinder and must not average the two technologies without reporting the production-weighted mix.

The normal reporting boundary is cradle-to-factory-gate: upstream production of purchased materials, blanks, components, utilities, and packaging; on-site component manufacture and finishing when performed; assembly; acceptance or function testing; and packaging through release of the saleable cylinder. ISO cylinder standards confirm that the covered products are linear hydraulic and pneumatic cylinders, while the official CPC record distinguishes them from other fluid-power engines and motors.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.metal-products-machinery-and-equipment.general-purpose-machinery.linear-acting-cylinders-hydraulic-and-pneumatic-power-engines-and-motors |
| classification_refs | CPC 3.0: 43211 (exact context; mapping acceptance is governed separately) |
| covered_products | Finished hydraulic or pneumatic linear cylinders, including single-acting or double-acting and single-rod or double-rod designs |
| excluded_products | Rotary fluid-power motors; pumps; compressors; valves; complete fluid-power systems; separately supplied cylinder parts; electric linear actuators |
| representative_product | One factory-gate finished and acceptance-tested hydraulic or pneumatic linear cylinder |
| production_route | Receipt of formed blanks and purchased parts; machining and applicable finishing; assembly; hydraulic acceptance testing or pneumatic function testing; packaging |
| market_state | Saleable finished cylinder, dry or with declared residual test medium, packaged as supplied at the factory gate |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | A finished hydraulic or pneumatic cylinder providing reciprocating linear force and motion at the declared rated pressure |
| How much | 1 kg of accepted cylinder product at the factory gate |
| How well | Meets the declared bore, stroke, mounting, pressure rating, leakage or function acceptance criteria, material specification, and supplied accessory configuration |
| How long or cycle | Declared design service life or rated duty-cycle basis; if unavailable, disclose that service-life performance is not represented by the mass-based functional unit |
| reference_flow_link | `reference_product_output` |

| Field | Value |
| --- | --- |
| Reference amount | 1 kg |
| Reference product flow | Linear acting (cylinders) hydraulic and pneumatic power engines and motors `aea61250-788d-4a2b-9c63-ff24b8113469` |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | hydraulic or pneumatic medium; single-acting or double-acting; single-rod or double-rod; bore; stroke; rated pressure; mounting and cushioning configuration; sensing provisions; principal barrel, rod, end-cap, piston, and seal materials; net product mass; acceptance-test standard or procedure; residual test medium; production geography and reference year; manufacturing and surface-finishing route; supplied packaging; declared design life or cycle rating |

When constructing a foreground data package, the items listed in `Required qualifiers` must be declared in dataset metadata, process notes, reference flow comment, product description, or an equivalent data package field. Missing required qualifiers make the reference flow definition incomplete for that data package.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| `reference_mass_basis` | reference product and all normalized inventory | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Normalize inventory to 1 kg of accepted, packaged cylinder product. Exclude pallets and returnable transport packaging unless supplied as part of the declared product system. |
| `energy_conversion` | electricity rows | Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` | MJ | Preserve the metered electricity quantity and convert kWh to MJ with 1 kWh = 3.6 MJ; do not add upstream generation emissions as direct foreground emissions. |
| `gas_volume_basis` | industrial oxygen and compressed-air rows | Volume `93a60a56-a3c8-22da-a746-0800200c9a66` | m3 | Report volume at the metering reference pressure and temperature and disclose those conditions; do not mix normal, standard, and actual cubic metres without conversion. |
| `water_mass_basis` | process-water and cleaning-wastewater rows | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Prefer direct mass records; when volume is metered, document water density and reference conditions used for conversion. |
| `test_fluid_volume_basis` | hydraulic test fluid | Volume `93a60a56-a3c8-22da-a746-0800200c9a66` | m3 | Record only net fresh make-up crossing the foreground boundary; separately disclose recirculated test-loop inventory and any fluid shipped in the product. |

## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Formed cylinder-part blanks, purchased finished parts, seals, process chemicals, utilities, and packaging delivered to the reporting manufacturing site |
| starting_condition_role | The first foreground condition; upstream production and delivery of every purchased input remain represented by linked upstream datasets |
| product_classification_scope | Finished hydraulic and pneumatic linear cylinders only; separately supplied parts and non-linear fluid-power engines or motors are outside the product identity |
| recursive_input_rule | A purchased CPC 43211 cylinder used as an input must be recorded as an upstream product input and must not be recursively re-expanded inside this PCR; separately purchased CPC 43251 parts remain parts inputs |
| upstream_dataset_requirement | Link every purchased product and utility input to a geography-, technology-, and product-state-compatible upstream dataset; disclose proxies and any missing upstream dataset |
| disclosure | Declare make-or-buy shares, material and surface-treatment routes, hydraulic or pneumatic product mix, rejected-product treatment, on-site treatment, packaging basis, test-medium recovery, temporal coverage, and cut-offs |

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| `boundary_cradle_to_gate` | foreground and upstream boundary | Include purchased-input production and delivery, on-site component manufacture and applicable finishing, assembly, acceptance or function testing, and packaging through factory-gate release. | `un-cpc-3-0-structure-2025`; `iso-6020-2-2015`; `iso-15552-2018`; `iso-10100-2020` |
| `boundary_make_or_buy` | purchased versus internally produced parts | Record the actual make-or-buy split. Do not count the same finished part both as a purchased input and as the output of on-site machining. | `festo-dnc-standard-cylinders-2017`; `skf-hydraulic-seals-general-technical-information` |
| `boundary_route_specific_exchanges` | machining, cleaning, coating, and testing routes | Add each material, chemical, utility, waste, and direct elementary emission actually crossing the process boundary as its own atomic exchange; a route not used is omitted with documented evidence. | `skf-hydraulic-seals-general-technical-information`; `iso-10100-2020` |
| `boundary_use_and_end_of_life` | downstream stages | Exclude installation, use-phase hydraulic-fluid or compressed-air supply, maintenance, and end-of-life from the default factory-gate dataset; include them only in a separately declared expanded system boundary. |  |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| `component_manufacture` | Component forming, machining, cleaning, and applicable surface finishing | conditional | Include for the production-weighted share made or finished at the reporting site; purchased finished parts are represented as upstream inputs to assembly | foreground component production | per kg accepted cylinder product |
| `assembly_test_packaging` | Assembly, acceptance or function testing, and packaging | required | Always include; apply hydraulic and pneumatic test-medium cards only to the represented product route | foreground final production | 1 kg accepted packaged cylinder product |

### Process: Component forming, machining, cleaning, and applicable surface finishing (`component_manufacture`)

#### Inputs

##### Product flows

###### Formed cylinder-part blanks (`formed_parts_input`)

Record formed major-part blanks entering on-site machining. Alloy, component mix, supplier, and forming route are required foreground qualifiers.

- Selected flow: Formed cylinder major parts, blanks `d49e36f8-d7ec-4e9d-aa51-0705a64c2b39`
- Flow property / unit: Mass / kg
- Amount rule: purchased and internally transferred blank mass consumed, net of documented reusable returns
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per kg accepted cylinder product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_component_materials`
- Sources: `festo-dnc-standard-cylinders-2017`

###### Electricity for component manufacture (`machining_electricity`)

Record metered electricity for forming, machining, honing or burnishing, grinding, polishing, cleaning, and in-scope finishing equipment.

- Selected flow: Electricity `67b723a9-6f63-4802-adca-b52ce7967d47`
- Flow property / unit: Net calorific value / MJ
- Amount rule: metered or defensibly allocated electricity consumed by in-scope component operations
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg accepted cylinder product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_component_utilities`
- Sources: `skf-hydraulic-seals-general-technical-information`

###### Process water for wet machining and cleaning (`machining_process_water`)

Record water supplied to wet machining or cleaning only when it crosses the site process boundary.

- Selected flow: Process Water `94a04f7e-2d5c-41f0-b182-d54a3b373a02`
- Flow property / unit: Mass / kg
- Amount rule: measured fresh process-water input; exclude recirculated internal water
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg accepted cylinder product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_component_utilities`
- Sources:

###### Water-miscible metalworking fluid (`metalworking_fluid`)

Record the formulated water-miscible machining-fluid concentrate or ready-to-use fluid that is consumed by the foreground operation; do not substitute a constituent chemical.

- Selected flow: Water-miscible metalworking fluid
- Flow property / unit: Mass / kg
- Amount rule: purchased make-up fluid consumed, adjusted for opening and closing stock and off-site returns
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per kg accepted cylinder product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_component_materials`
- Sources: `skf-hydraulic-seals-general-technical-information`

###### Sodium hydroxide for alkaline cleaning (`alkaline_cleaning_sodium_hydroxide`)

Record sodium hydroxide only when the declared cleaning or surface-preparation route consumes it.

- Selected flow: Sodium hydroxide `e0abcced-0611-4c24-9290-5a2c5a0c4169`
- Flow property / unit: Mass / kg
- Amount rule: neat-equivalent sodium hydroxide consumed, calculated from solution mass and verified concentration
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per kg accepted cylinder product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_component_chemicals`
- Sources:

###### Industrial oxygen for HVOF coating (`hvof_oxygen`)

Record industrial oxygen only when high-velocity oxygen-fuel coating is performed within the foreground boundary.

- Selected flow: Industrial oxygen `bd4b0f96-2090-4806-a648-335ab20ff401`
- Flow property / unit: Volume / m3
- Amount rule: metered industrial oxygen supplied to in-scope HVOF coating
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per kg accepted cylinder product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_component_utilities`
- Sources: `skf-hydraulic-seals-general-technical-information`

#### Outputs

##### Product flows

###### Machined and finished cylinder parts (`finished_parts_output`)

Record accepted component mass leaving on-site component manufacture for assembly.

- Selected flow: Machined and finished cylinder parts `10c2da25-4cfe-4d11-a8a2-cc05ab9ef994`
- Flow property / unit: Mass / kg
- Amount rule: measured accepted finished-part mass transferred to assembly
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per kg accepted cylinder product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_component_outputs`
- Sources: `festo-dnc-standard-cylinders-2017`; `skf-hydraulic-seals-general-technical-information`

##### Waste flows

###### Steel swarf (`steel_swarf`)

Record steel machining swarf leaving the process for recycling, recovery, or disposal; disclose retained metalworking-fluid contamination.

- Selected flow: Steel swarf `6a16eab5-8097-4e37-8d28-aa1e81b8bb5c`
- Flow property / unit: Mass / kg
- Amount rule: measured wet or dry swarf mass, with moisture and adhering-fluid basis declared
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg accepted cylinder product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_component_outputs`
- Sources:

###### Cleaning wastewater (`cleaning_wastewater`)

Record cleaning wastewater sent to on-site treatment, sewer, or off-site treatment before any allocation of treatment burdens.

- Selected flow: Wastewater from cleaning `f0402393-e82c-47e8-9cd8-a486c97f3e89`
- Flow property / unit: Mass / kg
- Amount rule: measured wastewater leaving cleaning operations; exclude internally recirculated water
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg accepted cylinder product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_component_outputs`
- Sources:

### Process: Assembly, acceptance or function testing, and packaging (`assembly_test_packaging`)

#### Inputs

##### Product flows

###### Machined and finished cylinder parts for assembly (`finished_parts_input`)

Record the total mass of internally transferred and purchased finished cylinder parts entering assembly without double counting.

- Selected flow: Machined and finished cylinder parts `10c2da25-4cfe-4d11-a8a2-cc05ab9ef994`
- Flow property / unit: Mass / kg
- Amount rule: measured finished-part mass entering assembly, reconciled to the make-or-buy split
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per kg accepted cylinder product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_assembly_materials`
- Sources: `festo-dnc-standard-cylinders-2017`

###### Elastomer cylinder seal sets (`elastomer_seal_sets`)

Record finished rod, piston, wiper, and static seal elements supplied for assembly as one mass-measured seal-set exchange; disclose material families and do not use raw nitrile-rubber identity as a proxy.

- Selected flow: Elastomer cylinder seal sets
- Flow property / unit: Mass / kg
- Amount rule: measured seal-set mass installed plus production losses
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per kg accepted cylinder product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_assembly_materials`
- Sources: `festo-dnc-standard-cylinders-2017`

###### Hydraulic fluid for acceptance testing (`hydraulic_test_fluid`)

Record only net fresh hydraulic-fluid make-up for hydraulic-cylinder testing; do not record recirculated loop inventory as a new input.

- Selected flow: Hydraulic Fluid `30691a38-a947-4b41-991e-194f6c9aa88f`
- Flow property / unit: Volume / m3
- Amount rule: opening inventory plus purchases minus closing inventory, off-site returns, and recovered fluid, apportioned to accepted hydraulic cylinders
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per kg accepted hydraulic cylinder product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_acceptance_testing`
- Sources: `iso-10100-2020`

###### Compressed air for pneumatic function testing (`pneumatic_test_air`)

Record compressed air delivered to the test bench for accepted and rejected pneumatic cylinders.

- Selected flow: Compressed air `46e2b1e4-5a4e-4579-b6a2-65b03f9ce825`
- Flow property / unit: Volume / m3
- Amount rule: metered test-air volume at declared reference conditions
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per kg accepted pneumatic cylinder product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_acceptance_testing`
- Sources: `iso-15552-2018`

###### Electricity for assembly, testing, and packaging (`assembly_electricity`)

Record metered electricity consumed by assembly tools, test benches, handling, and packaging equipment.

- Selected flow: Electricity `67b723a9-6f63-4802-adca-b52ce7967d47`
- Flow property / unit: Net calorific value / MJ
- Amount rule: metered or defensibly allocated electricity consumed by the process
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg accepted cylinder product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_assembly_utilities`
- Sources: `iso-10100-2020`

###### Corrugated board box (`corrugated_box`)

Record finished corrugated boxes supplied with the cylinder. Other actual packaging components must be added as separate atomic exchanges.

- Selected flow: corrugated board boxes `4f197bec-7b3b-11dd-ad8b-0800200c9a66`
- Flow property / unit: Mass / kg
- Amount rule: measured corrugated-box mass supplied with accepted product
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per kg accepted cylinder product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging`
- Sources:

#### Outputs

##### Product flows

###### Accepted packaged cylinder product (`reference_product_output`)

This row is the reference product output after acceptance or function testing and packaging.

- Selected flow: Linear acting (cylinders) hydraulic and pneumatic power engines and motors `aea61250-788d-4a2b-9c63-ff24b8113469`
- Flow property / unit: Mass / kg
- Amount rule: fixed reference output of 1 kg accepted packaged cylinder product
- Value mode: Fixed value (`fixed_value`)
- Specificity: Generic (`generic`)
- Normalization basis: 1 kg accepted packaged cylinder product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Method formula (`method_formula`)
- Sources: `un-cpc-3-0-structure-2025`

## 7. Allocation and Co-product Handling

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| `allocation_subdivision_first` | shared production lines and utilities | Prefer subdivision, sub-metering, batch records, machine time, or another causal driver before allocation. Document the driver and the production quantities to which it applies. | `iso-14044-2006` |
| `allocation_recycled_metal` | steel swarf and other recoverable metal | Report waste mass and destination separately. Do not subtract an avoided-primary-metal credit inside the foreground inventory; any recycling credit belongs to the declared downstream modelling method. | `iso-14044-2006` |
| `allocation_rejected_products` | rejected cylinders and reworked parts | Assign the burdens of rejects and rework to accepted output unless a documented physical causal model supports a different treatment; disclose internal recycling loops. | `iso-14044-2006` |
| `allocation_multi_product_site` | residual shared burdens | If subdivision and causal allocation are impracticable, allocate residual shared burdens by production mass for the same reporting period and disclose the sensitivity to an alternative driver such as machine hours. | `iso-14044-2006` |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_component_materials` | `component_manufacture` | formed blanks and metalworking fluid | purchase, stock, and transfer records | item identity; supplier; alloy or formulation; opening stock; receipts; closing stock; returns; transferred mass | reconcile procurement and inventory records to production lots | kg | monthly with annual reconciliation | representative continuous 12-month period | all in-scope component operations | consumption = opening + receipts - closing - returns; normalize by accepted product mass | supplier specification, invoices, calibrated scales, stock reconciliation |
| `cp_component_chemicals` | `component_manufacture` | cleaning and finishing chemicals | batch sheets and concentration records | solution mass or volume; density; active concentration; opening and closing stock; off-site returns | record each concrete chemical separately and calculate neat-equivalent mass | kg | per bath make-up with monthly aggregation | representative continuous 12-month period | every in-scope wet-treatment line | sum neat-equivalent consumption and normalize by accepted product mass | formulation certificate, concentration test, calibrated meter or scale |
| `cp_component_utilities` | `component_manufacture` | electricity, process water, and industrial oxygen | meter and invoice records | meter id; opening and closing reading; reference conditions; shared-load driver; downtime | direct sub-metering preferred; documented machine-hour allocation permitted | MJ, kg, or m3 as applicable | per batch or monthly | representative continuous 12-month period | all in-scope component operations | subtract excluded loads, allocate shared loads by causal driver, normalize by accepted product mass | meter calibration, invoices, allocation worksheet |
| `cp_component_outputs` | `component_manufacture` | finished parts, steel swarf, and cleaning wastewater | transfer, scale, and waste records | output mass; reject mass; swarf mass; contamination basis; wastewater mass; destination | weigh accepted parts and outgoing wastes; document wet or dry basis | kg | per batch with monthly reconciliation | representative continuous 12-month period | all in-scope component operations | aggregate accepted output and each waste separately; normalize by accepted cylinder mass | calibrated scales, transfer tickets, waste manifests, water balance |
| `cp_assembly_materials` | `assembly_test_packaging` | finished parts and seal sets | bills of material, issue, and loss records | component identity; material; quantity; unit mass; issued mass; returned mass; scrap | reconcile lot-level bill of material to actual issue and loss records | kg | per product family and batch | representative continuous 12-month period | all assembly lines in scope | installed plus loss mass, excluding returned reusable stock, normalized by accepted product mass | controlled bill of material, supplier specifications, calibrated scales |
| `cp_acceptance_testing` | `assembly_test_packaging` | hydraulic fluid and compressed air | test-bench logs and utility records | product route; accepted and rejected units; test procedure; fluid purchases and stock; recovered fluid; air meter readings; pressure; temperature | meter test air and reconcile hydraulic-fluid make-up to test batches | m3 | per test batch with monthly reconciliation | representative continuous 12-month period | all hydraulic and pneumatic test benches in scope | include accepted and rejected tests; allocate only by documented batch records; normalize to accepted route-specific product mass | controlled test procedure, meter calibration, stock reconciliation, acceptance records |
| `cp_assembly_utilities` | `assembly_test_packaging` | electricity | meter and production records | meter id; readings; operating hours; accepted product mass; excluded loads | direct sub-metering preferred; documented equipment-hour allocation permitted | MJ | monthly | representative continuous 12-month period | assembly, testing, handling, and packaging equipment | subtract excluded loads and normalize by accepted product mass | meter calibration, invoice reconciliation, allocation worksheet |
| `cp_packaging` | `assembly_test_packaging` | corrugated boxes | packaging issue and product dispatch records | packaging identity; unit mass; issued quantity; returns; accepted shipped mass | weigh representative packaging and reconcile issued quantity to dispatch | kg | per packaging specification with monthly aggregation | representative continuous 12-month period | all supplied factory-gate packaging | net supplied packaging mass normalized by accepted product mass | packaging specification, calibrated scale, issue and dispatch records |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_reference_normalization` | every collected inventory row | normalized amount = reporting-period exchange amount / accepted packaged cylinder mass | exchange amount; accepted packaged product mass | amount per kg reference product | `iso-14044-2006` |
| `calc_solution_active_mass` | `alkaline_cleaning_sodium_hydroxide` | neat NaOH mass = solution mass × verified NaOH mass fraction | solution mass; concentration result | kg NaOH |  |
| `calc_electricity_mj` | electricity rows | MJ = metered kWh × 3.6 | metered kWh | MJ |  |
| `calc_hydraulic_makeup` | `hydraulic_test_fluid` | net fresh make-up = opening inventory + purchases - closing inventory - recovered off-site returns | stock and purchase records | m3 hydraulic fluid | `iso-10100-2020` |
| `calc_make_or_buy_reconciliation` | `finished_parts_input` | total finished-parts input = internal accepted transfer + purchased finished-parts input; exclude any purchased blank already counted in internal output | transfer and purchase records | kg finished parts | `festo-dnc-standard-cylinders-2017` |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_product_identity` | reference product | Report hydraulic or pneumatic route, action type, rod configuration, bore, stroke, rated pressure, materials, mass, acceptance criteria, and supplied accessories. | controlled product specification and accepted bill of material |
| `dq_temporal_representativeness` | all foreground data | Use a continuous 12-month period representative of normal production, or explain shorter coverage, start-up, shutdown, and abnormal batches. | dated meter, production, procurement, and waste records |
| `dq_mass_balance` | component manufacture and assembly | Reconcile material inputs to accepted product, rejects, internal returns, wastes, and inventory change; investigate unexplained imbalance. | signed mass-balance worksheet and stock reconciliation |
| `dq_route_separation` | hydraulic and pneumatic products | Keep route-specific bills of material and test media separate; a combined dataset requires a documented production-weighted mix. | production quantities and route-specific records |
| `dq_measurement` | meters and scales | Use calibrated or verified instruments and retain unit, reference-condition, and allocation metadata. | calibration certificate, meter id, and data-extraction record |
| `dq_completeness` | process inventory | Record every actual atomic material, chemical, utility, packaging component, waste, and direct elementary emission above the declared cut-off; explain exclusions and proxies. | completeness checklist, purchase ledger, waste register, permits, and process walk-through |
| `dq_upstream_compatibility` | linked upstream datasets | Match product state, geography, technology, recycled content, treatment route, and reference period as closely as practicable; disclose mismatch. | dataset-selection log and supplier specification |

## 9. Validation Rules

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| `validation_reference_flow` | reference output | Confirm exactly 1 kg of accepted packaged cylinder output and all required qualifiers are declared. | `un-cpc-3-0-structure-2025` |
| `validation_process_coverage` | process map | Confirm assembly, acceptance or function testing, and packaging are included; confirm component manufacture is included for the actual make share. | `iso-10100-2020`; `skf-hydraulic-seals-general-technical-information` |
| `validation_route_consistency` | route-conditional rows | Hydraulic test fluid may apply only to hydraulic products, compressed air only to pneumatic testing, sodium hydroxide only to alkaline cleaning, and industrial oxygen only to HVOF coating. | `iso-10100-2020`; `iso-15552-2018`; `skf-hydraulic-seals-general-technical-information` |
| `validation_atomic_exchanges` | all inventory | Reject umbrella or combined flow labels; every selected flow must be one physical, chemical, energy, waste, or elementary exchange. |  |
| `validation_make_or_buy` | finished parts | Confirm purchased blanks, internal finished-part output, and purchased finished parts are reconciled without double counting. | `festo-dnc-standard-cylinders-2017` |
| `validation_mass_balance` | material balance | Confirm inputs, accepted output, rejects, internal returns, wastes, and stock change reconcile within the site's documented measurement uncertainty. | `iso-14044-2006` |
| `validation_uuid_and_units` | UUID-bearing rows | Confirm every UUID is public state 100 and the selected property and unit group match the row; unresolved rows remain explicitly identified. |  |
| `validation_range_status` | important flows | Confirm foreground records are collected. Do not apply external empirical ranges until at least two independent, boundary-compatible original sources have been verified. |  |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | Factory-gate foreground production dataset for finished hydraulic or pneumatic linear cylinders |
| downstream_use | secondary_dataset; background_dataset |
| allowed_use | Product-footprint, supply-chain, equipment, and lifecycle models whose product specification, geography, technology, time, and factory-gate boundary match the dataset |
| excluded_use | Direct substitution for rotary motors, pumps, valves, complete fluid-power systems, separately supplied parts, use-phase energy modelling, or an undeclared hydraulic/pneumatic average |
| required_metadata | All Required qualifiers; CPC context; site and geography; reference year; data owner; make-or-buy share; production mix; process routes; allocation; cut-offs; upstream datasets; packaging; acceptance procedure; unresolved UUIDs and proxies |
| required_quality_disclosure | Temporal coverage; meter and scale quality; mass-balance result; production representativeness; route separation; rejected-product treatment; test-medium recovery; upstream dataset mismatch; missing exchanges; uncertainty and range-evidence gaps |
| update_trigger | Material change in product design, mass, bill of material, surface treatment, hydraulic/pneumatic mix, production technology, test procedure, packaging, supplier geography, allocation, or data older than the reporting program's validity period |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `un-cpc-3-0-structure-2025` | dataset | United Nations Statistics Division, CPC Version 3.0 Structure, 30 June 2025. https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Structure_30Jun2025.csv (retrieved 2026-09-05) | Official product classification identity |
| `un-cpc-3-0-explanatory-notes-2025` | official_guidance | United Nations Statistics Division, CPC Version 3.0 Explanatory Notes, 30 June 2025. https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Exp_Notes_30Jun2025.pdf (retrieved 2026-09-05) | Official hierarchy and distinction between finished cylinders and parts |
| `china-mof-2024-tariff-adjustment-annex` | official_guidance | Ministry of Finance of the People's Republic of China, 2024 tariff adjustment annex. https://gss.mof.gov.cn/gzdt/zhengcefabu/202405/P020240531308646828162.pdf (retrieved 2026-09-05) | Professional Chinese terminology for straight-line hydraulic and pneumatic power devices |
| `iso-6020-2-2015` | standard | ISO 6020-2:2015, Hydraulic fluid power — Mounting dimensions for single rod cylinders, 16 MPa (160 bar) series — Part 2: Compact series. https://committee.iso.org/standard/61339.html (retrieved 2026-09-05) | Hydraulic-cylinder applicability and required design qualifiers |
| `iso-15552-2018` | standard | ISO 15552:2018, Pneumatic fluid power — Cylinders with detachable mountings, 1 000 kPa (10 bar) series, bores from 32 mm to 320 mm — Basic, mounting and accessories dimensions. https://committee.iso.org/standard/66921.html (retrieved 2026-09-05) | Pneumatic-cylinder applicability and required design qualifiers |
| `iso-10100-2020` | standard | ISO 10100:2020, Hydraulic fluid power — Cylinders — Acceptance tests. https://committee.iso.org/standard/75271.html (retrieved 2026-09-05) | Inclusion and documentation of hydraulic-cylinder acceptance testing |
| `iso-14044-2006` | standard | ISO 14044:2006, Environmental management — Life cycle assessment — Requirements and guidelines. https://committee.iso.org/standard/38498.html (retrieved 2026-09-05) | LCI calculation, allocation, reporting, and validation framework |
| `festo-dnc-standard-cylinders-2017` | handbook | Festo, Standard cylinders DNC, ISO 15552, technical data, 2017/11. https://ftp.festo.com/Public/PNEUMATIC/SOFTWARE_SERVICE/Documentation/2018/EN/DNC_EN.PDF (retrieved 2026-09-05) | Representative pneumatic-cylinder components and materials |
| `skf-hydraulic-seals-general-technical-information` | handbook | SKF, Hydraulic seals — general technical information. https://cdn.skfmediahub.skf.com/api/public/09d1d840c2d1f94d/pdf_preview_medium/HydraulicSeals_SKF_12393_3_EN_screen_pdf_preview_medium.pdf (retrieved 2026-09-05) | Cylinder-bore honing or burnishing, rod hardening, grinding, hard-chromium plating, polishing, and alternative coating routes |
