---
pcr_id: pcr.metal-products-machinery-and-equipment.radio-television-and-communication-equipment-and-apparatus.database-management-software-packaged
language: en-US
status: candidate
sync_with: pcr.zh-CN.md
---

# Database management software, packaged

## 1. Scope and Applicability

This PCR covers published collections or suites of database-management software programs that enable storage, modification, and extraction of information from a database, supplied as a finished packaged software product. It covers products ranging from personal-computer DBMS packages to mainframe DBMS packages when the software version, supported platform, licence scope, database functions, and physical delivery configuration are declared.

The foreground production boundary begins with source code, third-party software components, build instructions, and release requirements accepted under the publisher's control. It includes development, compilation or build, testing, security scanning, release preparation, and the allocated electricity and hardware needed for those activities. For a physical distribution unit, it also includes recording the software on the declared optical carrier and assembling the immediate retail package when those components are present.

Operating systems, network software, development tools, application software, custom software-development services, software-download services, on-line software, database-use licensing services, and unmodified upstream hardware or packaging manufacture are outside the category. Downstream distribution beyond the declared gate, installation, operation, maintenance, user hardware, data-centre operation, and end-of-life are outside this production dataset unless a separately declared use or end-of-life module is added. A download-only or on-line service shall not be represented as this mass-based packaged product.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.metal-products-machinery-and-equipment.radio-television-and-communication-equipment-and-apparatus.database-management-software-packaged |
| classification_refs | CPC 3.0 47813, Database management software, packaged |
| covered_products | Published DBMS collections or suites that store, modify, and extract database information and are supplied as finished packaged system software |
| excluded_products | Operating systems; network software; development tools and programming-language software; application software; custom software-development services; software downloads; on-line software; database licensing services without the packaged product |
| representative_product | A released DBMS distribution with a declared version, supported platform, licence scope, database workload capability, and physical delivery configuration |
| production_route | Software development, build, test, scan, release, and immediate retail-package assembly, with mutually exclusive purchased-recorded-carrier or in-house-blank-carrier-recording routes when an optical carrier is included |
| market_state | Finished packaged DBMS at the publisher or packaging gate, measured as accepted gross product mass including the declared immediate carrier and retail package |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Provision of a finished published DBMS collection or suite capable of storing, modifying, and extracting information from a database |
| How much | 1 kg of accepted finished packaged DBMS product at the declared publisher or packaging gate |
| How well | The declared release version passes documented release acceptance tests for the stated database functions, workload, supported platform, and licence scope |
| How long or cycle | One declared release version and its stated support term; post-gate support activity is excluded unless separately modelled |
| reference_flow_link | packaged_dbms_output |

| Field | Value |
| --- | --- |
| Reference amount | 1 kg |
| Reference product flow | Database management software, packaged `3761b338-237c-4781-81f2-ecd23ed93283` |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | DBMS version and edition; supported operating platform; licence and user or processor scope; declared database functions and representative workload; release acceptance criteria; physical carrier type; immediate package composition; geographic and temporal scope; production and packaging gate |

When constructing a foreground data package, the items listed in `Required qualifiers` must be declared in dataset metadata, process notes, reference flow comment, product description, or an equivalent data package field. Missing required qualifiers make the reference flow definition incomplete for that data package.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| `reference_mass_basis` | Reference product and physical package components | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Weigh accepted finished distribution units and all included immediate carrier, case, insert, and retail-box components. Exclude shipping cartons and pallets beyond the declared gate. Normalize all production exchanges by accepted gross product mass to exactly 1 kg. |
| `electricity_energy_conversion` | Metered or telemetry-derived electricity | Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` | MJ | Retain raw electricity records in kWh and convert the allocated total to MJ using 1 kWh = 3.6 MJ. Include electricity for hardware reserved or provisioned for the foreground activities, not only active execution. |
| `hardware_allocation_basis` | Rack servers and desktop workstations | Mass | kg | Record installed hardware mass, expected life, time reserved for the release, resources reserved, and total resources. Calculate allocated hardware mass as installed mass multiplied by time share and resource share, then normalize to 1 kg of accepted output. |

## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Publisher-controlled source code, third-party software components, build instructions, release requirements, and the declared physical packaging bill of materials before foreground development and release activities |
| starting_condition_role | Starting condition for foreground software production and conditional physical package assembly |
| product_classification_scope | Published packaged database-management system software whose essential function is storing, modifying, and extracting database information |
| recursive_input_rule | A purchased or transferred finished product already in this same packaged-DBMS category shall be recorded as an upstream product input with a separate conforming dataset; its production shall not be re-expanded inside the current foreground process |
| upstream_dataset_requirement | Use geographically and temporally representative upstream datasets for electricity, computer hardware, purchased recorded media, blank optical media, paper boxes, printed paper inserts, and polypropylene cases that cross the foreground boundary |
| disclosure | Declare the software components included, release version, accepted output mass, development and build period, infrastructure boundary, hardware allocation parameters, delivery configuration, selected carrier-supply route, package bill of materials, geography, data gaps, and every excluded lifecycle stage |

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `boundary_rule_1` | Foreground software production | Include development, build, test, security scanning, release preparation, allocated electricity, and allocated computer hardware that significantly support the declared release. Include immediate retail-package assembly only when physical components occur in the declared product configuration. Include optical-carrier recording only for the in-house recording route. | green-software-foundation-sci-1-1-0 |
| `boundary_rule_2` | Product-category separation | Model only the finished packaged DBMS product defined by its storage, modification, and extraction functions. Do not relabel download-only software, on-line software, licensing services, another software subclass, or a release-candidate intermediate as the reference product. | un-cpc-3-0-47813-detail |
| `boundary_rule_3` | Downstream stages | Exclude distribution beyond the declared gate, installation, operation, maintenance, user devices, data-centre operation, and end-of-life from this production dataset. If any are added for a study, report them as separate modules with a declared workload-based functional unit and infrastructure boundary. | green-software-foundation-sci-1-1-0 |
| `boundary_rule_4` | Optical-carrier supply | When an optical carrier is included, select exactly one route. The purchased-recorded route records the finished recorded carrier as a product input and treats recording as upstream. The in-house route records blank optical media, foreground recording electricity, every other actual recording consumable, and every actual recording waste; it shall not also record a purchased recorded carrier. |  |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| `software_production_release` | Software development, release, and conditional physical packaging | required | Physical-package rows apply only when the declared finished distribution unit contains the corresponding component; if an optical carrier is present, select exactly one of the purchased-recorded and in-house-recording routes | Foreground production | 1 kg accepted finished packaged DBMS product |

### Process: Software development, release, and conditional physical packaging (`software_production_release`)

#### Inputs

##### Product flows

###### Electricity for software production and release (`electricity_software_production`)

Record purchased electricity for publisher-controlled development, build, test, scanning, release, and immediate packaging activities. Add separately identified foreground carrier-recording electricity to this exchange only when the in-house recording route is selected; exclude carrier-recording electricity from the foreground when a finished recorded carrier is purchased because that recording is upstream. The allocation shall cover hardware reserved or provisioned for the included activities.

- Selected flow: Electricity `67b723a9-6f63-4802-adca-b52ce7967d47`
- Flow property / unit: Net calorific value / MJ
- Amount rule: Sum measured or telemetry-derived kWh within the foreground boundary, including separately identified carrier-recording kWh only for the in-house recording route, allocate shared consumption to the declared release using causal activity records, convert the allocated result to MJ, and divide by accepted output mass
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg accepted finished packaged DBMS product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_electricity_records`
- Sources: `green-software-foundation-sci-1-1-0`

###### Allocated rack server computer (`rack_server_computer`)

Record a rack server computer only when it is reserved for development, build, test, scanning, or release work within the foreground boundary. The Tiangong flow UUID remains unresolved.

- Selected flow: Rack server computer
- Flow property / unit: Mass / kg
- Amount rule: Calculate allocated installed mass from collected hardware mass, reserved time, expected life, reserved resources, and total resources, then normalize to accepted output mass
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg accepted finished packaged DBMS product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_hardware_allocation_records`
- Sources: `green-software-foundation-sci-1-1-0`

###### Allocated desktop workstation computer (`desktop_workstation_computer`)

Record a complete desktop workstation computer only when it is reserved for foreground development, test, or release work. The Tiangong flow UUID remains unresolved.

- Selected flow: Desktop workstation computer
- Flow property / unit: Mass / kg
- Amount rule: Calculate allocated installed mass from collected workstation mass, reserved time, expected life, reserved resources, and total resources, then normalize to accepted output mass
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg accepted finished packaged DBMS product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_hardware_allocation_records`
- Sources: `green-software-foundation-sci-1-1-0`

###### Recorded optical disc (`recorded_optical_disc`)

Record the finished recorded optical carrier only when it is physically included in the accepted distribution unit and the purchased-recorded route is selected. Its purchase includes upstream recording once; do not also include foreground carrier recording or blank optical media. The Tiangong flow UUID remains unresolved.

- Selected flow: Recorded optical disc
- Flow property / unit: Mass / kg
- Amount rule: Divide recorded-disc mass issued to the batch minus only genuinely unused discs returned to usable stock by accepted output mass; include discs consumed and subsequently rejected, and record their waste separately
- Value mode: Foreground record (`foreground_record`)
- Specificity: Route-specific (`route_specific`)
- Normalization basis: per 1 kg accepted finished packaged DBMS product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_physical_package_bom`

###### Blank optical media (`blank_optical_media`)

Record blank unrecorded optical media only when an optical carrier is physically included and the in-house recording route is selected. Include foreground recording electricity, any other actual recording consumable as its own concrete product flow, and every actual recording waste as its own atomic outgoing waste exchange. Do not also record a purchased finished recorded carrier.

- Selected flow: Optical media, not recorded `714535e8-24d4-44bf-8496-4837f638fdd4`
- Flow property / unit: Mass / kg
- Amount rule: Divide blank optical-media mass issued to the recording batch minus only genuinely unused media returned to usable stock by accepted output mass; include media consumed and subsequently rejected, and record their waste separately
- Value mode: Foreground record (`foreground_record`)
- Specificity: Route-specific (`route_specific`)
- Normalization basis: per 1 kg accepted finished packaged DBMS product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_physical_package_bom`

###### Paper box (`paper_box`)

Record the immediate paper retail box only when it is physically included in the accepted distribution unit.

- Selected flow: Paper box `12d5d744-7725-4dbc-b102-43c80547f777`
- Flow property / unit: Mass / kg
- Amount rule: Divide paper-box mass issued to the batch minus only genuinely unused boxes returned to usable stock by accepted output mass; include boxes consumed and subsequently rejected, and record their waste separately
- Value mode: Foreground record (`foreground_record`)
- Specificity: Route-specific (`route_specific`)
- Normalization basis: per 1 kg accepted finished packaged DBMS product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_physical_package_bom`

###### Printed paper insert (`paper_insert`)

Record the printed instruction or licence insert only when it is physically included in the accepted distribution unit.

- Selected flow: Packaging, paper insert `b4681b7b-ff95-4df8-804a-fff06aa3c3aa`
- Flow property / unit: Mass / kg
- Amount rule: Divide printed-paper-insert mass issued to the batch minus only genuinely unused inserts returned to usable stock by accepted output mass; include inserts consumed and subsequently rejected, and record their waste separately
- Value mode: Foreground record (`foreground_record`)
- Specificity: Route-specific (`route_specific`)
- Normalization basis: per 1 kg accepted finished packaged DBMS product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_physical_package_bom`

###### Polypropylene optical-disc case (`polypropylene_disc_case`)

Record a finished polypropylene optical-disc case only when it is physically included in the accepted distribution unit. The Tiangong flow UUID remains unresolved.

- Selected flow: Polypropylene optical-disc case
- Flow property / unit: Mass / kg
- Amount rule: Divide polypropylene-case mass issued to the batch minus only genuinely unused cases returned to usable stock by accepted output mass; include cases consumed and subsequently rejected, and record their waste separately
- Value mode: Foreground record (`foreground_record`)
- Specificity: Route-specific (`route_specific`)
- Normalization basis: per 1 kg accepted finished packaged DBMS product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_physical_package_bom`

##### Waste flows

No waste input is mandatory. Record any externally treated waste entering the foreground process as a separate concrete waste flow.

##### Elementary flows

No direct elementary input is prescribed. Upstream resource extraction belongs to linked upstream datasets.

#### Outputs

##### Product flows

###### Accepted finished packaged database-management software (`packaged_dbms_output`)

This is the reference product after release acceptance and conditional physical-package assembly.

- Selected flow: Database management software, packaged `3761b338-237c-4781-81f2-ecd23ed93283`
- Flow property / unit: Mass / kg
- Amount rule: exactly 1 kg after normalization from measured accepted gross output mass
- Value mode: Fixed value (`fixed_value`)
- Specificity: Generic (`generic`)
- Normalization basis: PCR reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Identity reference (`identity_reference`)
- Sources: `un-cpc-3-0-47813-detail`

##### Waste flows

No generic waste output is prescribed. Whenever rejection, trimming, damage, or setup scrap occurs, record each actual material and waste state as its own atomic outgoing waste exchange with mass, destination, treatment route, and originating batch. Do not combine rejected recorded discs, rejected blank optical media, paper boxes, paper inserts, polypropylene cases, or electronic waste in one row. A documented zero is permitted only when the batch record demonstrates that the corresponding waste did not occur.

##### Elementary flows

No direct elementary output is prescribed. Electricity-related and upstream-material emissions shall remain in the corresponding upstream datasets rather than being duplicated as foreground emissions.

## 7. Allocation and Co-product Handling

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `allocation_rule_1` | Separately metered release activities | Avoid allocation by separating release-specific build jobs, test runs, scanning jobs, carrier-recording batches, packaging batches, and accepted output records whenever possible. | green-software-foundation-sci-1-1-0 |
| `allocation_rule_2` | Shared electricity | Allocate shared metered or telemetry-derived electricity with a causal activity driver measured over the same period, such as job runtime multiplied by reserved compute resources. Disclose the driver and do not use revenue allocation when causal data are available. | green-software-foundation-sci-1-1-0 |
| `allocation_rule_3` | Shared computer hardware | Allocate installed rack-server and workstation mass by time share multiplied by resource share: allocated mass = installed mass × time reserved / expected life × resources reserved / total resources. Use the same component boundary and reference flow across aggregated components. | green-software-foundation-sci-1-1-0 |
| `allocation_rule_4` | Rejected packaging and products | Attribute measured rejected carrier and package materials to the production batch that generated them. A rejected item remains part of consumed product input and shall not be subtracted from that input. Record every actual material waste as a separate atomic outgoing exchange; do not subtract recyclable waste without recording that exchange and the chosen end-of-life allocation convention. |  |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_electricity_records` | `software_production_release` | electricity_software_production | Meter or telemetry records linked to release activities and the selected carrier route | meter_id, component_id, activity_id, activity_type, carrier_route, release_id, start_time, end_time, electricity_kwh, reserved_resource_quantity, accepted_output_kg | Export facility meters, cloud or device telemetry, and build-pipeline logs; reconcile time zones, remove duplicate intervals, and tag carrier-recording intervals separately | kWh and kg | Per job or at the finest available interval, aggregated per release and activity type | Full declared development, build, test, scan, release, and packaging period, plus carrier-recording periods only for the in-house route | All publisher-controlled and contracted foreground sites included in the release | Sum non-overlapping kWh, include tagged carrier-recording kWh only for the in-house route, allocate shared intervals with the declared causal driver, convert to MJ, and divide by accepted output kg | Meter calibration or provider statement, raw export, pipeline-log link, carrier-route record, interval reconciliation, allocation worksheet |
| `cp_hardware_allocation_records` | `software_production_release` | rack_server_computer; desktop_workstation_computer | Hardware asset and reservation records | asset_id, hardware_type, installed_mass_kg, installation_date, expected_retirement_date, release_id, time_reserved, resources_reserved, total_resources | Reconcile asset register, supplier mass specification, scheduler reservation logs, and release records | kg, hours, and consistent resource units | At each asset change and reservation interval, aggregated per release | Full installed life estimate and all reservation intervals for the declared release | Every foreground computing asset with a significant reserved share | Calculate time share and resource share per asset, multiply by installed mass, sum by hardware type, and divide by accepted output kg | Asset-register extract, supplier specification, scheduler log, expected-life basis, allocation worksheet |
| `cp_physical_package_bom` | `software_production_release` | recorded_optical_disc; blank_optical_media; paper_box; paper_insert; polypropylene_disc_case | Carrier-route declaration, bill of materials, receiving, stock, batch issue, waste, and accepted-output mass records | carrier_route, component_id, material_description, supplier, batch_id, received_mass_kg, opening_stock_mass_kg, issued_mass_kg, unused_returned_mass_kg, retained_in_accepted_output_mass_kg, outgoing_waste_flow_id, outgoing_waste_mass_kg, closing_stock_mass_kg, accepted_output_kg | Confirm that purchased-recorded and in-house-recording routes are mutually exclusive, then reconcile purchase and receiving records with stock movements, batch scales, separate atomic waste records, and the approved package bill of materials | kg | Per carrier-recording or packaging batch | All batches supplying the declared release and reporting period | Every foreground or contracted physical-package assembly site | Consumed input mass = issued mass minus genuinely unused mass returned to usable stock; do not subtract rejected mass. Divide consumed input by accepted output kg. Reconcile net input crossing the boundary = retained accepted-output mass + separately recorded outgoing waste mass + closing stock minus opening stock. | Carrier-route approval, calibrated-scale record, approved bill of materials, supplier specification, stock ledger, batch reconciliation, and separately identified waste records |
| `cp_output_mass_acceptance` | `software_production_release` | packaged_dbms_output | Release acceptance and finished-product mass records | release_id, version, edition, platform, licence_scope, acceptance_test_id, delivery_configuration, unit_count, gross_mass_kg, rejected_mass_kg, gate, acceptance_date | Link signed release acceptance to calibrated gross-mass measurements of accepted distribution units | kg | Each accepted release and packaging batch | Entire declared reporting period | All sites producing accepted reference product | Sum accepted gross mass only; use it as the denominator for normalization to 1 kg | Signed acceptance record, test report, scale calibration, batch identifier, package bill of materials |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_electricity_mj` | electricity_software_production | Allocated electricity MJ per kg = sum of allocated electricity kWh × 3.6 / accepted output kg | Non-overlapping kWh intervals, causal allocation driver, accepted output kg | MJ electricity per kg reference product | green-software-foundation-sci-1-1-0 |
| `calc_hardware_mass` | rack_server_computer; desktop_workstation_computer | Allocated hardware kg per kg output = sum of installed mass kg × time reserved / expected life × resources reserved / total resources / accepted output kg | Installed mass, reserved time, expected life, reserved resources, total resources, accepted output kg | Allocated hardware kg per kg reference product | green-software-foundation-sci-1-1-0 |
| `calc_package_component_mass` | recorded_optical_disc; blank_optical_media; paper_box; paper_insert; polypropylene_disc_case | Consumed component kg per kg output = issued mass minus genuinely unused mass returned to usable stock, divided by accepted output kg; rejected material remains in consumed input and is also recorded as its own outgoing waste exchange | Selected carrier route, issued mass, unused returned mass, retained accepted-output mass, separate outgoing waste masses, opening and closing stock, and accepted-output mass | Consumed component kg per kg reference product plus a reconciled material balance |  |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_identity` | Reference product | Preserve the exact DBMS version, edition, supported platform, licence scope, database functions, workload acceptance criteria, delivery configuration, and production gate. | Release manifest, signed acceptance test, licence specification, product description |
| `dq_temporal` | Electricity, hardware, and output records | Use activity and asset records that cover the full declared release-production period; retain the finest available temporal granularity and identify annual data as the minimum-granularity fallback. | Raw telemetry, meter export, asset register, reporting-period reconciliation |
| `dq_completeness` | Foreground boundary | Reconcile all significant build, test, scan, release, recording, and packaging components in the declared software boundary; explain excluded sites, components, and data gaps. | Boundary register, pipeline inventory, package bill of materials, completeness reconciliation |
| `dq_measurement` | Mass and electricity | Use calibrated mass measurements or supplier specifications and traceable meter or provider records; retain conversion and allocation worksheets. | Calibration record, supplier specification, provider statement, calculation workbook |
| `dq_conditional_route` | Physical carrier and package rows | For every conditional component, record either measured use or documented absence for the declared delivery configuration. | Approved bill of materials, product photograph or configuration record, batch issue record |

## 9. Validation Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `validation_rule_1` | Product identity | Fail validation when the reference product is not the accepted finished CPC 47813 DBMS flow, when a release-candidate intermediate is substituted, or when required version, platform, licence, function, workload, delivery, geography, time, or gate qualifiers are missing. | un-cpc-3-0-47813-detail |
| `validation_rule_2` | Inventory completeness | Require exactly one reference output row and require each input to be one concrete electricity, hardware, carrier, or package exchange. Reject umbrella utility, hardware, packaging, waste, or emissions rows. |  |
| `validation_rule_3` | Electricity | Confirm that electricity intervals cover the declared foreground period, reserved or provisioned hardware is included, duplicate intervals are removed, the allocation driver is disclosed, and kWh-to-MJ conversion is correct. | green-software-foundation-sci-1-1-0 |
| `validation_rule_4` | Hardware allocation | Confirm positive expected life and total resources, non-negative reserved time and resources, time share and resource share not greater than one unless explicitly justified, and the stated allocation formula for each asset. | green-software-foundation-sci-1-1-0 |
| `validation_rule_5` | Physical package configuration | Require a measured amount or documented absence for each carrier and package row; do not infer an absent component from a zero or blank record. If an optical carrier is present, require exactly one route: purchased recorded carrier with no foreground recording, or blank optical media with foreground recording electricity, every actual additional consumable, and every actual recording waste. |  |
| `validation_rule_6` | Normalization and sources | Confirm that all amounts use the same accepted-output denominator, the reference output equals exactly 1 kg, source ids resolve, unresolved UUIDs remain blank, and no unsupported empirical range is introduced. |  |
| `validation_rule_7` | Package-material balance | For each carrier and package material, confirm that input consumption includes rejected material, every actual waste is a separate atomic outgoing exchange, and net input equals retained accepted-output mass plus outgoing waste plus closing stock minus opening stock. Fail validation when rejected material disappears through subtraction from product input. |  |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | Foreground production dataset for finished packaged database-management software |
| downstream_use | secondary_dataset; background_dataset |
| allowed_use | Product carbon-footprint and LCA models that need a mass-based packaged-DBMS production input at a declared publisher or packaging gate; comparative use only when function, release, licence, workload, delivery configuration, geography, time, boundary, and data quality are equivalent |
| excluded_use | Download-only or on-line software; licensing service without the packaged product; custom software development; post-gate operation or maintenance; another software subclass; comparisons based only on product mass when functional capability differs |
| required_metadata | Canonical PCR id; product UUID; version and edition; supported platform; licence scope; database functions and workload; support term; carrier and package configuration; accepted output mass; production route; sites; geography; reporting period; boundary; allocation methods; source ids |
| required_quality_disclosure | Meter and telemetry coverage; hardware asset and allocation coverage; package bill-of-material reconciliation; output mass and acceptance evidence; temporal granularity; supplier-data quality; exclusions; unresolved UUIDs; missing range evidence; uncertainty and data gaps |
| update_trigger | New release or edition; material architecture or build-pipeline change; changed hardware allocation; changed physical carrier or package; site or grid change; licence or workload change; improved UUID identity; new independent range evidence; source or method revision |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `un-cpc-3-0-structure-2025` | official_guidance | United Nations Statistics Division, Central Product Classification Version 3.0 Structure, structure dated 30 June 2025, https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Structure_30Jun2025.csv | Official CPC 47813 title and hierarchy within packaged systems software |
| `un-cpc-3-0-47813-detail` | official_guidance | United Nations Statistics Division, CPC Version 3.0 classification detail for code 47813, https://unstats.un.org/unsd/classifications/Econ/Structure/Detail/EN/2100/47813, retrieved 2026-09-11 | Product identity, database-management function, and category separation |
| `green-software-foundation-sci-1-1-0` | standard | Green Software Foundation, Software Carbon Intensity Specification, version 1.1.0, https://sci.greensoftware.foundation/, retrieved 2026-09-11 | Software-boundary disclosure, functional-unit consistency, electricity measurement, infrastructure inclusion, hardware time-share and resource-share allocation, and data granularity |
| `cifa-lca-database-guideline-appendix` | official_guidance | Carbon Footprint Industry Alliance, LCA/碳足迹数据库构建导则——第六章附录, https://www.carbonfootprint.network/docs/cifa-guidelines/lca-database-guideline/chapter-6-appendix, retrieved 2026-09-11 | Professional Chinese classification title for CPC 47813 |
