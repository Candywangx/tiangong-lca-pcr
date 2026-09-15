---
pcr_id: pcr.metal-products-machinery-and-equipment.medical-appliances-precision-and-optical-instruments-watches-and-clocks.microscopes-except-optical-microscopes-and-diffraction-apparatus
language: en-US
status: candidate
content_maturity: authored_methodology
translation_status: canonical
sync_with: pcr.zh-CN.md
---

# Microscopes (except optical microscopes) and diffraction apparatus

## 1. Scope and Applicability

This PCR covers complete non-optical microscopes and diffraction apparatus manufactured as functional instruments, including transmission and scanning electron microscopes and laboratory X-ray diffraction or scattering apparatus. It applies to factory-gate foreground data packages for one declared model and configuration.

Compound optical microscopes, sample-preparation equipment, stand-alone analytical instruments outside this product boundary, spare parts and accessories supplied separately, installation at the customer site, distribution, use, maintenance, refurbishment, and end-of-life treatment are excluded. A study may add downstream stages, but it must report them separately from this cradle-to-gate result.

Electron-microscope and diffraction-apparatus architectures differ materially. Route-specific component rows are conditional and must not be combined into a hypothetical average instrument.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.metal-products-machinery-and-equipment.medical-appliances-precision-and-optical-instruments-watches-and-clocks.microscopes-except-optical-microscopes-and-diffraction-apparatus |
| classification_refs | CPC 3.0: 48261, exact classification context |
| covered_products | Complete non-optical microscopes, including electron microscopes; complete diffraction apparatus, including laboratory X-ray diffraction and scattering systems |
| excluded_products | Compound optical microscopes; separately supplied parts and accessories; sample-preparation equipment; instruments outside CPC 48261 |
| representative_product | One complete configured electron microscope or one complete configured laboratory X-ray diffraction apparatus |
| production_route | Receipt of purchased components and subassemblies; route-specific integration; conditional precision cleaning; final assembly; factory acceptance testing and calibration; dispatch packaging |
| market_state | New, complete, factory-tested apparatus ready for dispatch at the manufacturing-site gate |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Provide the declared microscopy or diffraction measurement function for the specified instrument family and configuration |
| How much | One complete apparatus |
| How well | Meets the manufacturer's declared resolution, measurement range, detector configuration, safety features, and documented factory acceptance criteria |
| How long or cycle | One new apparatus at factory gate; service life and use-stage duty cycle are disclosed only if downstream stages are added |
| reference_flow_link | The reference amount is the measured net mass of the one declared apparatus, excluding dispatch packaging and separately supplied spares |

| Field | Value |
| --- | --- |
| Reference amount | Measured net mass in kg of one complete declared apparatus |
| Reference product flow | Microscopes (except optical microscopes) and diffraction apparatus `dd0f6b31-a7ef-48f9-b3aa-b4bfe44ec36d` |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | instrument family; model and configuration; net product mass; electron or X-ray source type; accelerating voltage or generator power as applicable; detector type and count; vacuum and cooling configuration; declared performance and factory acceptance criteria; manufacturing site and production period; dispatch packaging configuration |

When constructing a foreground data package, the items listed in `Required qualifiers` must be declared in dataset metadata, process notes, reference flow comment, product description, or an equivalent data package field. Missing required qualifiers make the reference flow definition incomplete for that data package.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| `mu_reference_mass` | Reference product and `reference_product_output` | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Weigh or derive from a verified as-built bill of materials the net mass of the complete accepted apparatus; exclude pallet, protective foam, shipping crate, and separately supplied spares. |
| `mu_component_mass` | Component, subassembly, and packaging inputs | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Record installed or dispatched mass by stable part number and configuration; do not substitute purchase value or item count without a documented mass conversion. |
| `mu_electricity_energy` | `integration_electricity` and `acceptance_test_electricity` | Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` | MJ | Preserve meter readings in kWh and convert to MJ with 1 kWh = 3.6 MJ; identify the meter, allocation window, and excluded non-production loads. |
| `mu_water_mass` | `precision_cleaning_water` and `precision_cleaning_wastewater` | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Prefer direct mass records; when volume is metered, record temperature or the declared density factor used to convert volume to mass. |

## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Purchased materials, components, subassemblies, packaging, and facility utilities are received at the manufacturing site with upstream datasets attached |
| starting_condition_role | Cradle-to-gate foreground starting condition for instrument integration and factory release |
| product_classification_scope | Complete CPC 48261 apparatus only; separately supplied parts/accessories and optical microscopes remain outside this PCR |
| recursive_input_rule | A purchased complete CPC 48261 apparatus incorporated into another delivered configuration is recorded once as an upstream product input and is not recursively decomposed with this PCR |
| upstream_dataset_requirement | Every purchased component, subassembly, material, packaging item, and utility crossing the boundary requires a representative upstream dataset or an explicit data gap |
| disclosure | Declare the instrument family, configuration, make-versus-buy boundary, included factory operations, allocation method, packaging, geography, production period, and any downstream stage added beyond factory gate |

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `sb_factory_gate` | All foreground datasets | Include received components and their upstream supply, on-site integration, conditional precision cleaning, final assembly, acceptance testing/calibration, and dispatch packaging through release at the manufacturing-site gate. | `un-cpc-3-0-structure-2025` |
| `sb_route_configuration` | Route-specific modelling | Model one declared electron-microscope or diffraction-apparatus configuration. Include only the source, detector, vacuum, cooling, and control components actually installed; do not average mutually exclusive routes. | `thermo-fisher-talos-l120c-g2-2022`; `bruker-d8-advance-family` |
| `sb_downstream_exclusion` | Distribution, installation, use, service, and end-of-life | Exclude downstream stages from the core result. If added, report them separately and declare duty cycle, service life, installation utilities, maintenance, and end-of-life scenario. | `thermo-fisher-electron-microscope-sustainable-design` |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| `component_integration` | Component and subassembly integration | `required` | Always; route-specific rows apply only to the declared configuration | Foreground production | Per one accepted apparatus |
| `precision_cleaning` | Precision cleaning before final closure | `conditional` | Include when parts or assemblies are cleaned on-site and water crosses the foreground boundary | Foreground conditioning | Per one accepted apparatus |
| `final_acceptance_packaging` | Final assembly, acceptance testing, calibration, and dispatch packaging | `required` | Always; packaging rows apply only when dispatched with the product | Foreground production and release | Net kg of one accepted apparatus |

### Process: Component and subassembly integration (`component_integration`)

#### Inputs

##### Product flows

###### Electron-optical column assembly (`electron_optical_column`)

Record the installed electron-optical column only for an electron-microscope configuration. The source type, accelerating-voltage range, lens configuration, and installed mass must be traceable to the as-built record.

- Selected flow: Electron-optical column assembly
- Flow property / unit: Mass / kg
- Amount rule: measured installed mass when the electron-microscope route applies; otherwise document not applicable
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per one accepted apparatus
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_component_bom`
- Sources: `thermo-fisher-talos-l120c-g2-2022`

###### X-ray source assembly (`xray_source_assembly`)

Record the installed X-ray tube and generator source assembly only for a diffraction-apparatus configuration. Keep source target/material, focus, generator power, cooling arrangement, and installed mass with the configuration record.

- Selected flow: X-ray diffraction source assembly
- Flow property / unit: Mass / kg
- Amount rule: measured installed mass when the diffraction-apparatus route applies; otherwise document not applicable
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per one accepted apparatus
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_component_bom`
- Sources: `bruker-d8-advance-family`

###### Vacuum pump (`vacuum_pump`)

Record the installed vacuum pump when the declared configuration uses it. Disclose pump technology and whether it is already included within another purchased subassembly to prevent double counting.

- Selected flow: Vacuum pump
- Flow property / unit: Mass / kg
- Amount rule: measured installed mass when a vacuum pump is within the declared make-versus-buy boundary
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per one accepted apparatus
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_component_bom`
- Sources: `thermo-fisher-talos-l120c-g2-2022`

###### Radiation detector module (`detector_module`)

Record installed detector modules by actual configuration, aggregating only multiple units with this same Tiangong identity. Detector technology and count remain required qualifiers.

- Selected flow: Radiation detector module `57ac0224-60f1-4a27-a61e-96f632f61703`
- Flow property / unit: Mass / kg
- Amount rule: total measured mass of installed detector modules with this identity
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per one accepted apparatus
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_component_bom`
- Sources: `thermo-fisher-talos-l120c-g2-2022`; `bruker-d8-advance-family`

###### Control workstation (`control_workstation`)

Record the configured computer workstation dispatched as part of the apparatus. Exclude general office computers not supplied with the product.

- Selected flow: Instrument control workstation
- Flow property / unit: Mass / kg
- Amount rule: measured dispatched mass of the configured control workstation
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per one accepted apparatus
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_component_bom`
- Sources: `thermo-fisher-talos-l120c-g2-2022`; `bruker-d8-advance-family`

###### Fabricated steel instrument enclosure (`steel_enclosure`)

Record the installed safety and stability enclosure as one fabricated steel product input. If another material dominates, add the actual material-specific enclosure as a separate dataset exchange and do not relabel this row.

- Selected flow: Fabricated steel instrument enclosure
- Flow property / unit: Mass / kg
- Amount rule: measured installed mass of the fabricated steel enclosure
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per one accepted apparatus
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_component_bom`
- Sources: `thermo-fisher-talos-l120c-g2-2022`; `bruker-d8-advance-family`

###### Integration electricity (`integration_electricity`)

Record electrical energy consumed by component integration and final mechanical/electrical assembly before acceptance testing. Exclude acceptance-test electricity recorded separately.

- Selected flow: Electricity `890a70b7-b677-4e2a-8a1b-7d017e0a10ae`
- Flow property / unit: Net calorific value / MJ
- Amount rule: work-order electricity meter reading converted from kWh to MJ
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per one accepted apparatus
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_factory_electricity`
- Sources:

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

##### Waste flows

##### Elementary flows

### Process: Precision cleaning before final closure (`precision_cleaning`)

#### Inputs

##### Product flows

###### Precision-cleaning process water (`precision_cleaning_water`)

Record process water supplied to aqueous precision cleaning when that operation occurs on-site. Upstream supplier water and customer-site cooling water are outside this row.

- Selected flow: Process Water `94a04f7e-2d5c-41f0-b182-d54a3b373a02`
- Flow property / unit: Mass / kg
- Amount rule: measured process-water mass supplied to in-scope precision cleaning
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per one accepted apparatus
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_precision_cleaning`
- Sources:

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

##### Waste flows

###### Precision-cleaning wastewater (`precision_cleaning_wastewater`)

Record non-hazardous wastewater discharged from in-scope aqueous cleaning. If testing shows it is hazardous, replace this row with the exact classified waste flow.

- Selected flow: Non-hazardous instrument-cleaning wastewater
- Flow property / unit: Mass / kg
- Amount rule: measured discharged mass from the in-scope precision-cleaning operation
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per one accepted apparatus
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_precision_cleaning`
- Sources:

##### Elementary flows

### Process: Final assembly, acceptance testing, calibration, and dispatch packaging (`final_acceptance_packaging`)

#### Inputs

##### Product flows

###### Acceptance-test electricity (`acceptance_test_electricity`)

Record electrical energy used to evacuate, energize, stabilize, calibrate, and perform factory acceptance tests. Exclude electricity already assigned to integration.

- Selected flow: Electricity `890a70b7-b677-4e2a-8a1b-7d017e0a10ae`
- Flow property / unit: Net calorific value / MJ
- Amount rule: acceptance-test meter reading converted from kWh to MJ
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per one accepted apparatus
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_factory_electricity`
- Sources: `bruker-d8-advance-family`

###### EURO wooden pallet (`wooden_pallet`)

Record the EURO-format wooden pallet only when it is dispatched with the product. Apply a reuse count only for a controlled reusable-pallet pool.

- Selected flow: Wooden pallet (EURO) `96b2b9ac-cfb6-46bf-8ad1-c056e338950a`
- Flow property / unit: Mass / kg
- Amount rule: measured pallet mass divided by documented reuse count; otherwise full pallet mass
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per one dispatched apparatus
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_dispatch_packaging`
- Sources:

###### Polyethylene protective foam (`polyethylene_foam`)

Record polyethylene foam remaining with the dispatched apparatus as one packaging input. Add other protective materials as separate material-specific exchanges.

- Selected flow: Polyethylene foam protective packaging
- Flow property / unit: Mass / kg
- Amount rule: measured dispatched mass of polyethylene protective foam
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per one dispatched apparatus
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_dispatch_packaging`
- Sources:

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Accepted reference apparatus (`reference_product_output`)

Record only apparatus that pass the declared factory acceptance test. The quantity is the verified net product mass of one complete configured apparatus.

- Selected flow: Microscopes (except optical microscopes) and diffraction apparatus `dd0f6b31-a7ef-48f9-b3aa-b4bfe44ec36d`
- Flow property / unit: Mass / kg
- Amount rule: verified net mass of one accepted apparatus, excluding dispatch packaging and separately supplied spares
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: one complete accepted apparatus
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_product_mass_acceptance`
- Sources: `un-cpc-3-0-structure-2025`; `thermo-fisher-talos-l120c-g2-2022`; `bruker-d8-advance-family`

##### Waste flows

##### Elementary flows

## 7. Allocation and Co-product Handling

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `alloc_subdivision` | Work-order-specific component, cleaning, assembly, testing, and packaging records | Prefer subdivision and direct work-order measurement. Assign materials and utilities to the serial-numbered apparatus or homogeneous batch that consumed them. |  |
| `alloc_shared_utility` | Shared factory utilities and services | When direct measurement is unavailable, use a documented causal driver such as equipment operating time, metered sub-area load, or process time. Use floor area only for genuinely space-driven loads. |  |
| `alloc_rework` | Rework and failed acceptance tests | Assign rework materials, utilities, and treatment outputs to accepted apparatus from the same batch; do not create an avoided-product credit for an internal reject. |  |
| `alloc_recycling` | Recycled material or reusable packaging | Report recycled-content and recycling assumptions separately. Do not subtract an unverified recycling credit; divide reusable packaging only by a documented reuse count. |  |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_component_bom` | `component_integration` | Installed component and subassembly mass | As-built BOM and supplier mass record | serial/model; configuration; part_number; flow_role; quantity; unit_mass_kg; installed_mass_kg; supplier; upstream_dataset_id | Reconcile the released as-built BOM to supplier specifications or verified weighing | kg | Each accepted apparatus or homogeneous configuration batch | Same production period as the dataset | All manufacturing sites in scope | Sum quantity × verified unit mass by `row_id`; exclude parts included within another purchased subassembly | Released BOM revision, configuration record, supplier specification or calibrated scale record, reconciliation sign-off |
| `cp_factory_electricity` | `component_integration`; `final_acceptance_packaging` | Integration and acceptance-test electricity | Submeter or work-order energy log | meter_id; opening_kWh; closing_kWh; timestamps; process_state; apparatus_serial; shared_load_driver; excluded_loads | Read dedicated meters or allocate a validated submeter total using a causal driver | kWh | Each work order or test campaign | Representative consecutive production period, normally at least 12 months for annual datasets | Each manufacturing site | Net kWh by process and accepted apparatus, then convert to MJ; keep the two electricity rows separate | Meter calibration, interval data, work-order timestamps, allocation worksheet, completeness reconciliation |
| `cp_precision_cleaning` | `precision_cleaning` | Process water and wastewater | Water meter, batch record, and discharge record | operation_id; apparatus_serial; water_mass_kg_or_volume; temperature; density_factor; wastewater_mass_kg_or_volume; retained_water_kg; evaporation_kg; waste_classification | Meter input and discharge separately or document a closed mass-balance calculation | kg | Each cleaning batch | Same production period as the dataset | Each site performing aqueous precision cleaning | Allocate batch totals by recorded batch membership; convert volume to mass with documented density | Meter calibration, batch traveler, discharge classification, mass-balance reconciliation |
| `cp_dispatch_packaging` | `final_acceptance_packaging` | Dispatched pallet and protective foam | Packaging BOM and packing record | apparatus_serial; packaging_part_number; material; quantity; unit_mass_kg; dispatched_mass_kg; reuse_count | Weigh or use verified supplier unit masses and reconcile to the packing list | kg | Each dispatched configuration or homogeneous packaging design | Current packaging design during the dataset period | Each dispatch site | Sum dispatched mass by material-specific row; divide pallet mass only by documented reuse count | Released packaging drawing/BOM, supplier mass specification, packing record, reuse-pool log |
| `cp_product_mass_acceptance` | `final_acceptance_packaging` | Reference product output and acceptance status | Final weighing/BOM record and factory acceptance report | apparatus_serial; model; configuration; gross_mass_kg; packaging_mass_kg; spare_mass_kg; net_product_mass_kg; acceptance_test_id; acceptance_result | Verify net apparatus mass and link it to a passed acceptance-test record | kg | Every accepted apparatus or verified homogeneous model configuration | Same production period as the dataset | Each manufacturing site | Net mass = gross mass - dispatch packaging - separately supplied spares; include only accepted units | Calibrated scale or reconciled as-built BOM, signed acceptance report, serial-number traceability |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_component_mass` | Component and subassembly rows | installed_mass_kg = quantity × verified unit_mass_kg; sum only identical flow identities and disclose nested components | `cp_component_bom` records | kg per accepted apparatus by `row_id` |  |
| `calc_electricity_mj` | `integration_electricity`; `acceptance_test_electricity` | electricity_MJ = net_kWh × 3.6 | `cp_factory_electricity` net kWh | MJ per accepted apparatus |  |
| `calc_cleaning_balance` | `precision_cleaning_water`; `precision_cleaning_wastewater` | water_input_kg = wastewater_output_kg + retained_water_kg + evaporation_kg + measured_other_outputs; investigate and disclose residual | `cp_precision_cleaning` records | Reconciled kg per accepted apparatus |  |
| `calc_packaging_mass` | `wooden_pallet`; `polyethylene_foam` | packaging_mass_kg = quantity × unit_mass_kg; divide reusable pallet mass only by documented completed uses | `cp_dispatch_packaging` records | kg per dispatched apparatus |  |
| `calc_reference_product_mass` | `reference_product_output` | net_product_mass_kg = gross_mass_kg - dispatch_packaging_mass_kg - separately_supplied_spares_mass_kg | `cp_product_mass_acceptance` records | kg of accepted apparatus |  |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_identity` | Reference product and route-specific rows | Product family, model, serial/configuration, source, detector, vacuum/cooling configuration, and acceptance criteria must be unambiguous and mutually consistent. | Released configuration and factory acceptance report |
| `dq_bom_completeness` | Purchased components and packaging | Reconcile as-built and packaging BOMs to the reference product; disclose mass lacking upstream datasets and prevent double counting of nested subassemblies. | BOM reconciliation and upstream dataset crosswalk |
| `dq_metering` | Electricity and water | Use calibrated meters or documented allocation from calibrated totals; retain raw readings, timestamps, and conversion factors. | Calibration records and signed allocation worksheet |
| `dq_temporal` | All foreground records | Use records from the declared period and identify design, supplier, process, or packaging changes that make older records non-representative. | Coverage table and change-control log |
| `dq_conditional_routes` | Conditional component, cleaning, and packaging rows | State whether every conditional row applies. A zero quantity without an applicability decision is incomplete. | Configuration record, process traveler, and packing record |
| `dq_source_traceability` | External source use | Preserve stable source ids and show which identity, architecture, boundary, or quality decision each source supports; do not treat examples as ranges. | Source cross-reference review |

## 9. Validation Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `val_reference_identity` | Reference flow | Confirm the Tiangong reference product UUID, Mass property, kg unit, CPC 48261 identity, and net mass of exactly one accepted apparatus. | `un-cpc-3-0-structure-2025` |
| `val_bilingual_qualifiers` | Product metadata | Confirm all required qualifiers are populated and consistent with the declared electron-microscope or diffraction-apparatus route. | `thermo-fisher-talos-l120c-g2-2022`; `bruker-d8-advance-family` |
| `val_inventory_atomicity` | Process inventory | Confirm each exchange is one concrete product, waste, or energy flow; reject combined utilities, component collections, packaging collections, and generic waste groupings. |  |
| `val_route_exclusivity` | `electron_optical_column`; `xray_source_assembly` | Do not assign mutually exclusive route components together unless the delivered apparatus demonstrably contains both functions and the product description explains them. |  |
| `val_electricity_separation` | Electricity rows | Confirm non-overlapping meter intervals or an auditable split of one total and conversion from kWh to MJ. |  |
| `val_cleaning_balance` | Conditional precision cleaning | Reconcile water input to wastewater, retained water, evaporation, and other measured outputs; classify hazardous wastewater with a different exact flow. |  |
| `val_mass_and_packaging` | Reference product and packaging | Confirm reference product mass excludes pallet, foam, and separately supplied spares, while all dispatched packaging is reported as separate atomic exchanges. |  |
| `val_unresolved_uuid` | UUID-empty rows | Keep UUID empty and manifest unresolved record present until a public state-100 candidate passes semantic, classification, state, property, and unit review. |  |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | `secondary_dataset` or `background_dataset` derived from verified foreground manufacturing records |
| downstream_use | Cradle-to-gate modelling for a declared non-optical microscope or diffraction apparatus; link separately modelled downstream stages when needed |
| allowed_use | Comparisons and supply-chain models with compatible family, configuration, performance, geography, period, boundary, and data quality |
| excluded_use | Optical microscopes; separately supplied parts; an average of mutually exclusive routes; use-stage or cradle-to-grave claims without downstream inventories |
| required_metadata | PCR id/version; product UUID; family/model/configuration; net mass; source and detector configuration; vacuum/cooling configuration; acceptance criteria; sites; period; allocation; packaging; geography; upstream dataset versions; data gaps |
| required_quality_disclosure | BOM and packaging coverage; metering coverage; conditional-row applicability; allocation shares; water balance; acceptance-test evidence; source crosswalk; unresolved UUIDs and range needs |
| update_trigger | Product redesign; new route; material or detector/source change; supplier/site change; altered test cycle; packaging redesign; changed energy/water mix; improved UUID/range evidence; elapsed representativeness period |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `un-cpc-3-0-structure-2025` | Official guidance (`official_guidance`) | United Nations Statistics Division, CPC Version 3.0 Structure, 30 June 2025, https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Structure_30Jun2025.csv | CPC 48261 identity and separation from optical microscopes and separately classified parts/accessories |
| `china-mof-2021-tariff-annex` | Official guidance (`official_guidance`) | State Council Tariff Commission / Ministry of Finance of China, 2021 Tariff Adjustment Plan Annex 1, https://gss.mof.gov.cn/gzdt/zhengcefabu/202012/P020201223606577665704.pdf | Professional Chinese terminology and complete-product versus parts distinction for tariff items 90121000/90129000 |
| `thermo-fisher-talos-l120c-g2-2022` | Handbook (`handbook`) | Thermo Fisher Scientific, Talos L120C G2 (S)TEM brochure, BR0157-EN-11-2022, https://documents.thermofisher.com/TFS-Assets/MSD/brochures/talos-120c-g2-stem-br0157.pdf | Electron-microscope architecture, electron source, accelerator, vacuum pump, detectors, enclosure, configuration, and performance qualifiers |
| `thermo-fisher-electron-microscope-sustainable-design` | Handbook (`handbook`) | Thermo Fisher Scientific, Electron Microscopes - Sustainable Design, https://www.thermofisher.com/us/en/home/electron-microscopy/manufacturing-sustainability/product-sustainability.html | Lifecycle-stage disclosure and separation of manufacturing, shipping, operation, take-back, and end-of-life considerations |
| `bruker-d8-advance-family` | Handbook (`handbook`) | Bruker, D8 ADVANCE Family product page, https://www.bruker.com/en/products-and-solutions/diffractometers-and-x-ray-microscopes/x-ray-diffractometers/d8-advance-family.html | Diffraction-apparatus architecture, enclosure, X-ray tube, optics, sample stage, detector, cooling configuration, and factory performance verification |
