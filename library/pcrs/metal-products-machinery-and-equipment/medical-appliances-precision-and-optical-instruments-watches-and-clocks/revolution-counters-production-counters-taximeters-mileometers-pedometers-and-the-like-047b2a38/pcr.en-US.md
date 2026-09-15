---
pcr_id: pcr.metal-products-machinery-and-equipment.medical-appliances-precision-and-optical-instruments-watches-and-clocks.revolution-counters-production-counters-taximeters-mileometers-pedometers-and-the-like-047b2a38
language: en-US
status: candidate
sync_with: pcr.zh-CN.md
---

# Revolution counters, production counters, taximeters, mileometers, pedometers and the like; speed indicators and tachometers, except hydrographic and meteorological instruments; stroboscopes

## 1. Scope and Applicability

This PCR governs foreground manufacturing data packages for instruments that count revolutions or production events, calculate or record distance or steps, indicate speed or rotational speed, or provide stroboscopic observation. It covers mechanical, electromechanical, and electronic products sold as finished instruments, including taximeters, vehicle or equipment speed indicators, tachometers, mileometers/odometers, pedometers, production counters, and stroboscopes.

Hydrographic and meteorological instruments are excluded. Gas, liquid, electricity-supply, or production meters; automatic regulating or controlling instruments; complete vehicles or machines containing an embedded indicator; general-purpose computers whose software can emulate a counter; and standalone upstream components sold independently are also excluded. The foreground boundary is final product manufacturing from purchased materials and components at the production site through assembly, programming where applicable, calibration or functional testing, and packaging at the factory gate. Distribution, use, maintenance, and end of life are outside this foreground manufacturing data package unless a downstream study adds them explicitly.

Dataset producers shall declare instrument type, sensing principle, display technology, power source, housing material, functional specification, conformity regime, accessories, packaging state, manufacturing geography, and reporting period. The inventory below contains common atomic exchanges; every additional material, component, waste, or direct elementary emission crossing the actual boundary shall be added as a separate atomic flow.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.metal-products-machinery-and-equipment.medical-appliances-precision-and-optical-instruments-watches-and-clocks.revolution-counters-production-counters-taximeters-mileometers-pedometers-and-the-like-047b2a38 |
| classification_refs | CPC 3.0: 48264 (`un-cpc-3-0-structure-2025`) |
| covered_products | Finished revolution counters, production counters, taximeters, mileometers/odometers, pedometers, speed indicators, tachometers, and stroboscopes, including mechanical, electromechanical, and electronic variants |
| excluded_products | Hydrographic and meteorological instruments; supply or production meters for gas, liquids, or electricity; automatic control equipment; complete vehicles and machines; general-purpose computing devices; standalone components |
| representative_product | A finished, calibrated or functionally tested counter or indicator instrument with declared architecture and performance specification |
| production_route | Receipt of purchased materials/components; onsite forming or board installation when performed; mechanical/electronic assembly; programming/configuration when performed; calibration and functional testing; final packaging |
| market_state | Finished instrument at factory gate; product mass excludes separately reported packaging and accessories unless the dataset explicitly declares their inclusion |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Provision of the declared counting, distance, speed, rotational-speed, or stroboscopic indication function by a finished instrument |
| How much | 1 kg of finished instrument, excluding separately reported packaging |
| How well | Meets the declared measurement range, resolution, accuracy or indication tolerance, environmental class, interface, and conformity requirements; taximeter datasets additionally declare distance/time and fare functions (`oiml-r21-2007-taximeters`) |
| How long or cycle | At factory-gate release after the declared calibration or functional-test cycle; design service life is metadata for downstream use-stage modelling |
| reference_flow_link | `finished_instrument_output` |

| Field | Value |
| --- | --- |
| Reference amount | 1 kg |
| Reference product flow | Revolution counters, production counters, taximeters, mileometers, pedometers and the like, speed indicators and tachometers, except hydrographic and meteorological instruments, stroboscopes `560acd9e-9e1a-4b2e-b304-5a17f8a4ba3c` |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | instrument type; sensing and indication principle; architecture; measurement range and resolution; accuracy or indication tolerance; power source and rated voltage; housing material; display technology; firmware/configuration; calibration or functional-test procedure and pass criterion; legal-metrology or conformity regime; accessories; packaging inclusion; product mass; manufacturing site/geography; reporting period |

Missing required qualifiers make the reference flow definition incomplete.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| `reference_product_mass` | reference product and mass-normalized exchanges | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Normalize to 1 kg accepted finished instruments. Exclude packaging mass from the denominator and report packaging separately unless another market state is explicitly declared. |
| `batch_to_reference_mass` | batch and annual records | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg/kg reference product | Divide each exchange by conforming finished-product mass from the same boundary and period; do not include rejects in the denominator. |
| `electricity_energy_conversion` | purchased electricity | Net calorific value `93a60a56-a3c8-11da-a746-0800200b9a66` | MJ | Preserve the metered basis and convert kWh to MJ using exactly 3.6 MJ/kWh. Do not combine electricity with fuel, steam, or heat. |
| `component_mass_consistency` | purchased components/materials | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Use net mass entering the process. For piece records, multiply verified count by measured or supplier-declared unit mass and retain evidence. |

## 5. System Boundary

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| `boundary_manufacturing_gate` | foreground manufacturing | Include activities from materials/components entering the site through onsite forming or board installation, assembly, programming/configuration, calibration or functional testing, rework/rejects, and final packaging until factory-gate release. | `eu-pef-method-2021` |
| `boundary_purchased_inputs` | upstream products and energy | Represent each purchased material, component, electricity supply, and packaging item with a compatible upstream dataset; keep upstream production emissions outside the foreground process. | `eu-pef-method-2021` |
| `boundary_waste_and_emissions` | manufacturing wastes and direct releases | Include each manufacturing waste and directly measured elementary release generated inside the boundary. Model waste treatment using the declared destination; do not substitute a treatment-service identity for waste. | `eu-pef-method-2021` |
| `boundary_excluded_stages` | distribution, use, maintenance, and end of life | Exclude post-factory-gate stages; a cradle-to-grave study may add them as separate processes and scenarios. | `eu-pef-method-2021` |

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Purchased components, materials, energy, and packaging are received at the site gate with identity, state, quantity, supplier, and geography recorded. |
| starting_condition_role | Gate-to-gate foreground start; upstream extraction, material/component production, and delivery use linked datasets. |
| product_classification_scope | Finished products within Section 1 and CPC 3.0 code 48264; classification context does not replace product qualifiers. |
| recursive_input_rule | If an input is itself a finished instrument in this category, record it once as a product input with a separate upstream dataset; do not recursively apply this PCR inside the same process. |
| upstream_dataset_requirement | Every purchased input shall link to a technology-, geography-, time-, and state-compatible dataset or be disclosed as a data gap; do not silently use proxies. |
| disclosure | Declare site, period, architecture, onsite/outsourced steps, component and packaging inclusion, product/reject mass, waste destinations, electricity mix/voltage, allocation, exclusions, and data gaps. |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| `instrument_manufacturing` | Instrument assembly, calibration/testing, and packaging | required | Always include; use `not_applicable` for a conditional row only when architecture or route evidence demonstrates absence. | Foreground manufacturing from received inputs to accepted factory-gate product | 1 kg accepted finished instrument output, packaging excluded from denominator |

### Process: Instrument assembly, calibration/testing, and packaging (`instrument_manufacturing`)

#### Inputs

##### Product flows

###### Aluminium alloy used in onsite part forming (`aluminium_alloy_input`)

Record only when the site forms or machines aluminium parts; purchased finished parts require their own exact component flow.

- Selected flow: Aluminium alloy `d2335464-e0fd-574c-b56f-83fdf8c65b0c`
- Flow property / unit: Mass / kg
- Amount rule: measured net aluminium alloy issued less documented returns to stock
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg accepted finished instrument output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material_component_records`
- Sources:

###### Printed wire board installed onsite (`printed_wire_board_input`)

Record the bare printed wire board only when installed or populated onsite; do not use it for purchased populated assemblies or electronic-component collections.

- Selected flow: Printed Wire Board `a8bd954c-59b3-4317-b4de-02a17d6da5ca`
- Flow property / unit: Mass / kg
- Amount rule: measured or count-to-mass converted printed wire board input
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg accepted finished instrument output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material_component_records`
- Sources:

###### LCD display module installed in the product (`lcd_display_module_input`)

Record only for products containing an LCD module; add another display technology as its own atomic flow.

- Selected flow: LCD display module `264605c6-41b8-4baa-82b0-e27e815063a0`
- Flow property / unit: Mass / kg
- Amount rule: measured or count-to-mass converted module input
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg accepted finished instrument output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material_component_records`
- Sources:

###### Purchased electrical energy (`electricity_input`)

Record electricity attributable to onsite forming, assembly, programming, calibration/testing, rework, production environmental control, and packaging.

- Selected flow: Electricity `890a70b7-b677-4e2a-8a1b-7d017e0a10ae`
- Flow property / unit: Net calorific value / MJ
- Amount rule: metered electricity converted to MJ and allocated to the foreground process
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg accepted finished instrument output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_electricity_records`
- Sources:

###### Corrugated board boxes used for shipping (`corrugated_board_boxes_input`)

Record finished corrugated boxes when included at the factory gate; add other packaging components separately.

- Selected flow: corrugated board boxes `4f197bec-7b3b-11dd-ad8b-0800200c9a66`
- Flow property / unit: Mass / kg
- Amount rule: measured or count-to-mass converted box mass issued to accepted products
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg accepted finished instrument output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material_component_records`
- Sources:

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Accepted finished counter, indicator, or stroboscope (`finished_instrument_output`)

Record accepted calibrated or functionally tested product; packaging remains outside the 1 kg denominator.

- Selected flow: Revolution counters, production counters, taximeters, mileometers, pedometers and the like, speed indicators and tachometers, except hydrographic and meteorological instruments, stroboscopes `560acd9e-9e1a-4b2e-b304-5a17f8a4ba3c`
- Flow property / unit: Mass / kg
- Amount rule: exactly 1 kg accepted finished instrument output
- Value mode: Fixed value (`fixed_value`)
- Specificity: Generic (`generic`)
- Normalization basis: 1 kg accepted finished instrument output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Method formula (`method_formula`)
- Sources: `un-cpc-3-0-structure-2025`

##### Waste flows

###### Waste populated printed wiring board (`waste_populated_printed_wiring_board_output`)

Record rejected or irreparable populated boards generated onsite; declare hazardous classification and destination separately.

- Selected flow: Waste populated printed wiring board `eb5ffe4a-49af-450c-9a31-3efdfd343f8a`
- Flow property / unit: Mass / kg
- Amount rule: measured net mass transferred to the declared destination
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg accepted finished instrument output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste_records`
- Sources: `eu-pef-method-2021`

###### Aluminium scrap from onsite forming (`aluminium_scrap_output`)

Record only when onsite forming or machining generates aluminium scrap; disclose alloy, contamination, and destination.

- Selected flow: Aluminium Scrap `96c5f842-ea53-419b-b1cd-c02c479efb45`
- Flow property / unit: Mass / kg
- Amount rule: measured net aluminium scrap leaving the foreground process
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg accepted finished instrument output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste_records`
- Sources: `eu-pef-method-2021`

##### Elementary flows

No direct elementary flow is prescribed for all products. Add every directly measured release from onsite combustion, coating, soldering, cleaning, or other operations as a separate species-and-compartment elementary flow.

## 7. Allocation and Co-product Handling

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| `allocation_subdivide_first` | shared lines, utilities, and waste handling | Avoid allocation by subdivision or direct metering whenever technically feasible. | `eu-pef-method-2021` |
| `allocation_physical_relation` | unavoidable shared burdens | Otherwise allocate by a documented causal physical driver such as machine time, metered energy, processed mass, or tested unit-hours. | `eu-pef-method-2021` |
| `allocation_economic_last_resort` | multi-output operations without a physical relation | Use economic allocation only as a last resort, with consistent prices and disclosed sensitivity. | `eu-pef-method-2021` |
| `allocation_scrap_no_avoided_burden` | manufacturing scrap | Report scrap mass/destination without avoided-production credit inside this foreground package; apply recycling burdens or credits only in the downstream study method. | `eu-pef-method-2021` |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_material_component_records` | `instrument_manufacturing` | each atomic material/component/packaging input | ERP issue/return, invoice, BOM, scale, or count-to-mass record | identity; supplier; grade/model; issued/returned mass; count; unit mass; batch; date | Reconcile issue less return by batch; verify piece-to-mass factors | kg | each batch, monthly aggregation | representative 12 months or complete shorter campaign | every included site | Sum net input by exact flow and divide by accepted output mass | calibrated scale; approved BOM; ERP/invoice reconciliation; unit-mass evidence |
| `cp_electricity_records` | `instrument_manufacturing` | purchased electrical energy | submeter or reconciled facility meter | readings; unit; meter id; voltage; grid mix; allocation driver; output mass; period | Prefer submetering; otherwise allocate contemporaneous meter totals using Section 7 | kWh and MJ | monthly/campaign | same production period | every included site | Convert kWh × 3.6, apply allocation share, divide by accepted output mass | meter calibration/bill; allocation worksheet; grid evidence |
| `cp_finished_product_records` | `instrument_manufacturing` | accepted product and conformity | scale, release record, calibration certificate, test log | model; lot; accepted/reject mass; procedure; result; tolerance; pass/fail; configuration; date | Weigh unpackaged conforming product and link to release evidence | kg | each batch/lot | complete reporting period | every included site | Sum conforming released mass only | scale calibration; signed release; traceable test/conformity record |
| `cp_waste_records` | `instrument_manufacturing` | each atomic waste output | scale ticket, transfer note, stock reconciliation | identity; mass; state; hazard class; destination; treatment; date | Weigh separately at transfer and subtract documented returns | kg | each transfer, monthly aggregation | same production period | every included site | Sum net waste by exact flow and divide by accepted output mass | scale calibration; transfer/contractor receipt; hazard classification |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_mass_normalization` | each mass input/waste | normalized amount = net exchange mass / accepted unpackaged output mass in the same period | net flow mass; accepted output mass | kg/kg reference product | |
| `calc_count_to_mass` | piece-recorded inputs | mass = verified count × measured or supplier unit mass, then apply `calc_mass_normalization` | count; unit mass; output mass | kg/kg reference product | |
| `calc_electricity_normalization` | electricity | normalized electricity = net kWh × 3.6 MJ/kWh × allocation share / accepted output mass | readings; allocation; output mass | MJ/kg reference product | |
| `calc_mass_reconciliation` | completeness | Reconcile accepted product + each waste + work-in-progress change against all material/component inputs; investigate/disclose residual rather than creating an unspecified balancing flow. | atomic inputs; product; wastes; work-in-progress | documented residual | `eu-pef-method-2021` |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_identity_and_architecture` | product/components | Record model, instrument type, architecture, sensing/indication principle, grade/model, and state; add actual BOM exchanges atomically. | BOM, product/supplier specification, Tiangong UUIDs |
| `dq_measurement_traceability` | mass, electricity, calibration, waste | Use calibrated or bill-reconciled instruments and link records to one production period. | certificates, invoices, meter/scale logs, calculations |
| `dq_temporal_and_site_coverage` | reporting period | Cover all included sites for representative 12 months or disclose the complete shorter campaign and limitations. | site list, calendar, reconciliation |
| `dq_completeness` | inventory | Reconcile materials/components, product, rejects, wastes, and work-in-progress; add every missing exchange atomically. | mass balance, BOM/ERP, waste records |
| `dq_functional_conformity` | released product | Retain test/calibration procedure, criteria, results, and conformity status; taximeters retain distance/time and fare-function evidence. | test/calibration/release records; `oiml-r21-2007-taximeters`; `samr-compulsory-verification-catalogue-2020` where applicable |
| `dq_background_compatibility` | purchased input datasets | Check technology, geography, time, and state; disclose proxies/gaps. | dataset metadata; `eu-pef-method-2021` |

## 9. Validation Rules

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| `validation_reference_flow` | reference product | Confirm exactly 1 kg accepted unpackaged product and matching reference UUID/property/unit group plus all qualifiers. | `un-cpc-3-0-structure-2025` |
| `validation_process_coverage` | foreground boundary | Confirm onsite forming/board work, assembly, programming, testing/calibration, rework/rejects, and packaging coverage. | `eu-pef-method-2021` |
| `validation_atomic_inventory` | all exchanges | Confirm each row is one concrete exchange with compatible UUID, property, unit, state, and route condition; reject umbrellas and treatment-service substitutions. | |
| `validation_mass_and_energy` | quantities | Recalculate denominator, count-to-mass factors, electricity conversion, allocations, and residual. | `eu-pef-method-2021` |
| `validation_conditional_rows` | architecture/route | Confirm absent common rows are `not_applicable` with evidence and every additional actual exchange is added atomically. | |
| `validation_conformity_evidence` | performance | Confirm release records demonstrate declared performance and applicable conformity regime. | `oiml-r21-2007-taximeters`; `samr-compulsory-verification-catalogue-2020` |
| `validation_boundary_and_allocation` | exclusions/upstream/shared burdens | Confirm upstream links, post-gate exclusions, waste destinations, allocation drivers, and gaps are disclosed. | `eu-pef-method-2021` |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | Foreground manufacturing dataset for a declared counter, indicator, distance/speed instrument, tachometer, pedometer, taximeter, or stroboscope |
| downstream_use | May be a `secondary_dataset` and used as a `background_dataset` for systems consuming the declared instrument |
| allowed_use | LCA with compatible function, architecture, performance, geography, technology, market state, period, packaging, and upstream datasets |
| excluded_use | Comparative assertions without functional equivalence; excluded instruments/devices; unmodelled use/maintenance/end-of-life claims; silent proxies |
| required_metadata | PCR id/version; product model/type; function/performance; architecture; sensing/display; power source; product/packaging mass; sites/geography; period; onsite/outsourced steps; electricity; component/waste identities and destinations; allocation; sources/upstream versions |
| required_quality_disclosure | Calibration/measurement evidence; BOM/mass-balance completeness; temporal/site coverage; conformity evidence; allocations; proxy/gap register; uncertainty/exclusions; unresolved range-evidence status |
| update_trigger | Material change in architecture, BOM, site, supplier/upstream dataset, route, test procedure, electricity mix, allocation, packaging, waste destination, conformity, or reporting period |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `un-cpc-3-0-structure-2025` | Official guidance (`official_guidance`) | United Nations Statistics Division, CPC Version 3.0 Structure, code 48264, 2025. https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Structure_30Jun2025.csv (retrieved 2026-09-07) | Classification identity and category boundary |
| `eu-pef-method-2021` | Official guidance (`official_guidance`) | European Commission, Commission Recommendation (EU) 2021/2279, Environmental Footprint methods. https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX:02021H2279-20211230 (retrieved 2026-09-07) | Manufacturing boundary, upstream inputs, waste, allocation, collection, quality, validation |
| `oiml-r21-2007-taximeters` | Standard (`standard`) | International Organization of Legal Metrology, OIML R 21:2007, Taximeters. https://www.oiml.org/en/files/pdf_r/r021-e07.pdf/@@download/file/R021-e07.pdf (retrieved 2026-09-07) | Taximeter function, distance/time signal, calibration and testing |
| `samr-compulsory-verification-catalogue-2020` | Official guidance (`official_guidance`) | State Administration for Market Regulation, Catalogue of Measuring Instruments Subject to Compulsory Administration, Announcement No. 42 of 2020. https://www.samr.gov.cn/cms_files/filemanager/samr/www/samrnew/samrgkml/nsjg/jls/202010/W020201027321582061939.pdf (retrieved 2026-09-07) | Chinese terminology and verification/conformity disclosure for vehicle speed instruments and taximeters |
