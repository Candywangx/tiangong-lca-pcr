---
pcr_id: pcr.metal-products-machinery-and-equipment.radio-television-and-communication-equipment-and-apparatus.development-tools-and-programming-languages-software-packaged
language: en-US
status: candidate
sync_with: pcr.zh-CN.md
---

# Development tools and programming languages software, packaged

## 1. Scope and Applicability

This PCR covers published, packaged systems software whose principal function is to assist professional developers in designing, authoring, building, testing, or implementing computer programs and software solutions. Covered products include packaged programming-language implementations, compilers, interpreters, assemblers, integrated development environments, debuggers, build tools, and software development kits when supplied as a defined product release.

The product must be a packaged release with a declared version and entitlement. Download-only system-software files, custom software development services, hosted development environments, operating systems, network software, database-management software, and application software whose principal function serves the end user are excluded. The default foreground boundary covers software development and product release. Physical optical-media and paper-box inputs are included only when they are actually used. Operation is a conditional extension and is included only when the declared study boundary covers installation, execution, maintenance, or a representative benchmark over a stated assessment period.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.metal-products-machinery-and-equipment.radio-television-and-communication-equipment-and-apparatus.development-tools-and-programming-languages-software-packaged |
| classification_refs | CPC 3.0: 47814 (exact classification reference; mapping acceptance is governed separately) |
| covered_products | Published packaged programming-language software and development tools that assist professional software design, authoring, build, test, or implementation |
| excluded_products | Download-only system software; custom development services; hosted development environments; operating systems; network software; database-management software; end-user application software |
| representative_product | One installable packaged release of a development tool or programming-language implementation |
| production_route | Software design and development; build, test, release and package preparation; conditional physical-media recording and paper-box packing; conditional supported operation |
| market_state | Published packaged software with declared version, entitlement, supported platform, development function, carrier and packaging configuration |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Provision of one installable packaged development-tool or programming-language software release that performs the declared professional software-development function |
| How much | One supplied packaged copy or entitlement represented by the measured mass of its finished physical package |
| How well | Meets the declared supported platform, architecture, development capability, installation state and release acceptance criteria |
| How long or cycle | One declared product version and entitlement period; if operation is included, one explicitly stated assessment period and workload |
| reference_flow_link | `packaged_software_output` |

| Field | Value |
| --- | --- |
| Reference amount | Measured mass in kg of one finished packaged copy |
| Reference product flow | Development tools and programming languages software, packaged `0771060f-3f5c-45f4-a914-cec63115361d` |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | software product name and version; tool or programming-language function; entitlement type; supported operating system, architecture and runtime; release acceptance criteria; installation state; physical carrier type; package components; production and supply geography; reporting period; included life-cycle stages; operational workload and assessment period when operation is included |

When constructing a foreground data package, the items listed in `Required qualifiers` must be declared in dataset metadata, process notes, reference flow comment, product description, or an equivalent data package field. Missing required qualifiers make the reference flow definition incomplete for that data package.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| `reference_package_mass` | packaged reference product | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Weigh the complete supplied package configuration represented by one copy. Record the number of copies weighed, tare treatment, scale resolution and mean mass per conforming copy; do not treat licence count alone as mass. |
| `electricity_energy_conversion` | development, release and operational electricity | Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` | MJ | Collect metered or telemetry electricity in kWh and convert to the TianGong reference unit using exactly 1 kWh = 3.6 MJ. Preserve the original kWh record and identify meter coverage, reserved/provisioned resources and conversion. |
| `functional_unit_consistency` | all included software components and stages | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Normalize development and release records to the same released-copy population. When an operational result is reported, use one consistent declared workload and assessment period for every included component and disclose every conversion to the packaged-copy reference. |

## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Approved product requirements, source-code baseline and third-party component lockfile at the start of the release cycle |
| starting_condition_role | Defines the release-specific starting point; prior generic research and previously completed releases are outside the foreground unless their resources are causally assigned to the declared release |
| product_classification_scope | Published packaged development tools and programming-language software; adjacent system software, application software, downloads and software-development services are outside the category |
| recursive_input_rule | A same-category tool used to produce the release is recorded once as an upstream product input dataset at the point it crosses the foreground boundary; its own development chain is not recursively re-expanded inside this foreground package |
| upstream_dataset_requirement | Use geographically and technologically representative upstream datasets for electricity, optical media, paper boxes and any additional actual atomic inputs; do not relabel upstream emissions as direct foreground emissions |
| disclosure | Declare release-cycle dates, repositories and components covered, build/test environments, physical carrier and package bill of materials, allocation basis, excluded infrastructure, geography, and whether operation is included |

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| `boundary_release_cycle` | software development and product release | Include the resources directly attributable to requirements implementation, coding, compilation, testing, build, release acceptance, package preparation and release delivery within the reporting organization. Exclude unrelated organizational overhead, marketing, customer-specific development services and work assigned to other releases. | `un-cpc-3-0-explanatory-notes-2025`; `un-cpc-3-0-system-software-downloads-84341`; `green-software-foundation-sci-1-1-0` |
| `boundary_supporting_infrastructure` | included software-system activities | Include electricity for provisioned or reserved compute, storage, networking, monitoring, logging, scanning, build pipelines and testing when those resources materially support the declared release or operational workload. | `green-software-foundation-sci-1-1-0` |
| `boundary_hardware_materiality` | developer workstations and build or operation servers | Screen embodied hardware using a device- or supplier-specific inventory and the declared time-and-resource allocation. Include each concrete hardware exchange when material to the study goal; otherwise retain and disclose the screening result, evidence, cutoff decision and omitted burden. An optional emissions scalar cannot replace a material physical hardware exchange. | `green-software-foundation-sci-1-1-0` |
| `boundary_physical_package` | carrier and packaging configuration | Include each physical carrier and packaging article actually incorporated into the supplied product as a separate atomic input. The listed optical-media and paper-box rows are conditional examples; any different actual carrier or packaging article must be added as its own concrete foreground exchange. Download-only electronic files belong to the separate download boundary and are excluded. | `un-cpc-3-0-explanatory-notes-2025`; `un-cpc-3-0-system-software-downloads-84341` |
| `boundary_operation_extension` | supported operation | Include operation only when the study declares the installed components, workload, platform, location and assessment period. Include supporting infrastructure that significantly contributes to execution and disclose excluded components. | `green-software-foundation-sci-1-1-0` |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| `software_development` | Software design and development | required | Always included for the declared release cycle | Foreground development | One released-copy population of the declared version |
| `product_release` | Build, test, release and package preparation | required | Always included; physical carrier and paper-box rows apply only when present | Foreground product release | One conforming packaged copy and its measured finished mass |
| `supported_operation` | Supported software operation | conditional | Include only when the declared study boundary covers installation, execution, maintenance or a representative benchmark | Conditional use-stage extension | Declared workload over the declared assessment period, linked to one supplied copy |

### Process: Software design and development (`software_development`)

#### Inputs

##### Product flows

###### Electricity for software development (`development_electricity`)

Electricity consumed by developer workstations and allocated development infrastructure crosses the foreground boundary for the declared release cycle.

- Selected flow: Electricity `890a70b7-b677-4e2a-8a1b-7d017e0a10ae`
- Flow property / unit: Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- Amount rule: Metered or telemetry electricity attributable to design and development, converted from kWh to MJ and normalized to the conforming released-copy population
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per one supplied copy of the declared release
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_development_electricity`
- Sources: `green-software-foundation-sci-1-1-0`

###### Developer workstation computer hardware (`developer_workstation_hardware`)

Record the allocated physical workstation hardware used for release-specific development when the documented embodied-hardware screening finds it material. A disclosed, evidence-backed cutoff may be used only when the screening finds the allocated burden immaterial to the study goal.

- Selected flow: Developer workstation computer
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Allocated workstation mass equals device mass multiplied by the release-specific reserved-time share and reserved-resource share; identify each device and do not replace this exchange with an emissions scalar
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per one supplied copy of the declared release
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Inclusion condition: Include when workstation embodied hardware is material under the documented screening; otherwise document the measured or supplier-supported screen and disclosed cutoff
- Collection protocol: `cp_developer_workstation_hardware`
- Sources: `green-software-foundation-sci-1-1-0`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

##### Waste flows

##### Elementary flows

### Process: Build, test, release and package preparation (`product_release`)

#### Inputs

##### Product flows

###### Electricity for build, test and release (`release_electricity`)

Electricity consumed by reserved or provisioned build, test, scanning, release and in-house media-writing resources is collected without double counting development or operation.

- Selected flow: Electricity `890a70b7-b677-4e2a-8a1b-7d017e0a10ae`
- Flow property / unit: Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- Amount rule: Metered or telemetry electricity attributable to build, test, release acceptance and package preparation, converted from kWh to MJ and normalized to conforming packaged copies
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per one conforming packaged copy
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_release_electricity`
- Sources: `green-software-foundation-sci-1-1-0`

###### Build and test server computer hardware (`build_server_hardware`)

Record the allocated physical server hardware supporting build, test, scanning and release activities when its documented embodied-hardware screening is material. Retain a justified disclosed cutoff when it is screened out.

- Selected flow: Server computer hardware
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Allocated server mass equals device mass multiplied by the release-specific reserved-time share and reserved-resource share; identify each server or homogeneous server group and prevent overlap with operation
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per one conforming packaged copy
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Inclusion condition: Include when build and test server embodied hardware is material under the documented screening; otherwise disclose the screening evidence, cutoff and omitted burden
- Collection protocol: `cp_build_server_hardware`
- Sources: `green-software-foundation-sci-1-1-0`

###### Unrecorded optical media for the optical-carrier route (`optical_media_input`)

Unrecorded optical media is recorded only when the declared packaged product is written to an optical carrier controlled by the reporting organization.

- Selected flow: Optical media, not recorded `714535e8-24d4-44bf-8496-4837f638fdd4`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Net purchased optical-media mass issued to the batch, including attributable recording rejects, divided by conforming packaged copies
- Value mode: Calculated value (`calculated_value`)
- Specificity: Route-specific (`route_specific`)
- Normalization basis: per one conforming packaged copy for the optical-carrier route
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_optical_media`
- Sources:

###### Paper box for the paper-box package route (`paper_box_input`)

The paper box is recorded only when it is an actual component of the supplied package configuration.

- Selected flow: Paper box `12d5d744-7725-4dbc-b102-43c80547f777`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Net purchased paper-box mass issued to the batch, including attributable packing rejects, divided by conforming packaged copies
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per one conforming packaged copy when a paper box is present
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_paper_box`
- Sources:

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Conforming packaged development-tool or programming-language software (`packaged_software_output`)

This is the finished packaged software release after release acceptance and completion of the declared physical package configuration.

- Selected flow: Development tools and programming languages software, packaged `0771060f-3f5c-45f4-a914-cec63115361d`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Measured finished-package mass of one conforming supplied copy; report both the number of copies and the measured mass used for normalization
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: one conforming supplied copy of the declared release
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_reference_product_mass`
- Sources: `un-cpc-3-0-explanatory-notes-2025`

##### Waste flows

###### Rejected optical data-storage media (`rejected_optical_media_waste`)

Record the actual mass of optical media rejected during recording, verification or package preparation as a separate outgoing production-waste exchange. Do not infer this production scrap from an end-of-life scenario.

- Selected flow: Rejected optical data-storage media
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Actual weighed rejected optical-media mass transferred out of the release batch, divided by conforming packaged copies; report zero only when complete batch records demonstrate no rejected media
- Value mode: Calculated value (`calculated_value`)
- Specificity: Route-specific (`route_specific`)
- Normalization basis: per one conforming packaged copy for the optical-carrier route
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Inclusion condition: Applicable whenever the optical-media route is used; record the actual quantity, waste carrier, destination and treatment route
- Collection protocol: `cp_rejected_optical_media_waste`
- Sources:

###### Rejected paper or paperboard boxes (`rejected_paper_box_waste`)

Record the actual rejected paper or paperboard boxes from package preparation as an outgoing production-waste exchange, separate from supplied packaging and downstream end-of-life assumptions.

- Selected flow: Paper and cardboard packaging waste `a318022d-c960-4eb5-a81c-04a9c4dda7e4`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Actual weighed rejected paper-box mass transferred out of the packaging batch, divided by conforming packaged copies; report zero only when complete batch records demonstrate no rejected boxes
- Value mode: Calculated value (`calculated_value`)
- Specificity: Route-specific (`route_specific`)
- Normalization basis: per one conforming packaged copy when a paper or paperboard box is present
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Inclusion condition: Applicable whenever a paper or paperboard box is used; record the actual quantity, material grade, waste carrier, destination and treatment route
- Collection protocol: `cp_rejected_paper_box_waste`
- Sources:

##### Elementary flows

### Process: Supported software operation (`supported_operation`)

#### Inputs

##### Product flows

###### Electricity for declared software operation (`operation_electricity`)

Operational electricity is included only for a declared workload, platform, location and assessment period and includes materially supporting provisioned or reserved infrastructure.

- Selected flow: Electricity `890a70b7-b677-4e2a-8a1b-7d017e0a10ae`
- Flow property / unit: Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- Amount rule: Metered electricity for the declared operational workload and supporting infrastructure, converted from kWh to MJ and linked to one supplied copy without double counting release activities
- Value mode: Calculated value (`calculated_value`)
- Specificity: Scenario-specific (`scenario_specific`)
- Normalization basis: per declared workload over the declared assessment period, linked to one supplied copy
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_operation_electricity`
- Sources: `green-software-foundation-sci-1-1-0`

###### Operation server computer hardware (`operation_server_hardware`)

When the operation extension is included, record the allocated physical server hardware supporting the declared workload if the documented embodied-hardware screening finds it material. A disclosed cutoff requires retained screening evidence.

- Selected flow: Server computer hardware
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Allocated server mass equals device mass multiplied by the assessment-period reserved-time share and workload-specific reserved-resource share; identify each server or homogeneous server group and prevent overlap with build and release
- Value mode: Calculated value (`calculated_value`)
- Specificity: Scenario-specific (`scenario_specific`)
- Normalization basis: per declared workload over the declared assessment period, linked to one supplied copy
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Inclusion condition: Include only with the supported-operation extension and when operation-server embodied hardware is material; otherwise disclose the screening evidence, cutoff and omitted burden
- Collection protocol: `cp_operation_server_hardware`
- Sources: `green-software-foundation-sci-1-1-0`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

##### Waste flows

##### Elementary flows

## 7. Allocation and Co-product Handling

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| `allocation_avoid_subdivide` | release-specific foreground activities | Avoid allocation by separating repositories, build jobs, test runs, package batches and meters that are attributable to the declared release. | `green-software-foundation-sci-1-1-0` |
| `allocation_shared_electricity` | shared compute and facility electricity | Allocate shared measured electricity using the same time interval as the activity record and a documented causal resource share such as reserved processor time, memory, storage or job runtime. Do not allocate idle but provisioned resources away when they were reserved for the release or workload. | `green-software-foundation-sci-1-1-0` |
| `allocation_hardware_embodied` | hardware embodied burden | When hardware embodied burden is included, calculate the release or workload share as total hardware embodied emissions multiplied by time reserved divided by expected life and multiplied by resources reserved divided by total resources. Use device-specific LCA data where available and disclose every factor. | `green-software-foundation-sci-1-1-0` |
| `allocation_multiple_releases` | shared development and release activities | Use measured causal resource consumption for each release. If no defensible causal relation exists, report the shared amount and allocation gap for review rather than selecting revenue, licence price or copy count solely for convenience. | `green-software-foundation-sci-1-1-0` |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_development_electricity` | `software_development` | `development_electricity` | meter, device telemetry and release activity records | meter_id; device_or_resource_id; timestamp_start; timestamp_end; kWh; reserved_resource_share; repository; release_id; geography | Export calibrated meter or provider telemetry and join to release-specific development activity; document any modelled gap | kWh | Per metering interval and release activity | Complete declared release development cycle | All included development sites and provisioned infrastructure | Remove overlap with release and operation meters; allocate shared intervals causally; sum kWh and divide by conforming released copies | Meter calibration or provider methodology; telemetry export; release/activity join; allocation worksheet |
| `cp_developer_workstation_hardware` | `software_development` | `developer_workstation_hardware` | device inventory, procurement and allocation records | device_id; manufacturer; model; configuration; device_mass_kg; commissioning_date; expected_life; release_time_reserved; total_available_time; resources_reserved; total_resources; release_id; supplier_LCA_reference; screening_result; cutoff_decision | Link each workstation to asset records, screen its allocated embodied burden, and calculate release-attributable mass only when material | kg | Per device and declared release cycle | Complete declared release development cycle | Every owned, leased or dedicated workstation materially supporting development | Apply documented time and resource shares to device mass; divide by conforming copies; retain screening evidence for exclusions | Asset register; invoice or specification; scale or manufacturer mass; supplier/device LCA; allocation worksheet; cutoff record |
| `cp_release_electricity` | `product_release` | `release_electricity` | build/test pipeline telemetry, meter and batch records | job_id; stage; timestamp_start; timestamp_end; kWh; reserved_resource_share; release_id; package_batch_id; conforming_copy_count; geography | Export pipeline or facility energy data for compilation, test, scan, release acceptance and package preparation | kWh | Per job, test run or packaging batch | Complete build, test and release cycle for the declared version | All included build, test and package-preparation infrastructure | Deduplicate overlapping meters; sum attributable kWh and divide by conforming copies | Pipeline logs; meter/provider evidence; batch reconciliation; allocation worksheet |
| `cp_build_server_hardware` | `product_release` | `build_server_hardware` | server inventory, procurement, job and allocation records | server_id_or_group; manufacturer; model; configuration; device_count; device_mass_kg; commissioning_date; expected_life; release_time_reserved; total_available_time; resources_reserved; total_resources; release_id; supplier_LCA_reference; screening_result; cutoff_decision | Link physical servers or homogeneous server groups to build and test jobs, screen allocated embodied burden, and calculate release-attributable mass only when material | kg | Per server group and declared release cycle | Complete build, test and release cycle | All owned, leased or dedicated server hardware materially supporting build, test, scan or release | Apply documented time and resource shares to device mass; prevent overlap with operation; divide by conforming copies; retain screening evidence for exclusions | Asset/provider inventory; specification; supplier/device LCA; job logs; allocation worksheet; cutoff record |
| `cp_optical_media` | `product_release` | `optical_media_input` | purchase, issue and reject records | supplier; media_format; composition; capacity; lot_id; purchased_kg; issued_kg; rejected_kg; conforming_copy_count; geography | Reconcile purchased and issued media with recording batch and reject records | kg | Per receipt and recording batch | All batches supplying the declared release | All controlled optical-media recording sites and suppliers | Include attributable recording rejects; divide issued mass by conforming copies; mark not applicable for non-optical routes | Invoice; specification; scale record; batch and reject log |
| `cp_paper_box` | `product_release` | `paper_box_input` | purchase, bill-of-materials and packing batch records | supplier; paper_grade; recycled_content; printing; dimensions; lot_id; purchased_kg; issued_kg; rejected_kg; conforming_copy_count; geography | Reconcile paper-box purchases and bill of materials with packing batches | kg | Per receipt and packing batch | All batches supplying the declared package configuration | All controlled packing sites and suppliers | Include attributable packing rejects; divide issued mass by conforming copies; mark not applicable when no paper box is used | Invoice; supplier specification; bill of materials; scale record; batch and reject log |
| `cp_reference_product_mass` | `product_release` | `packaged_software_output` | release acceptance, count and weighing records | product_name; version; entitlement; carrier; package_components; batch_id; conforming_copy_count; weighed_copy_count; gross_mass_kg; tare_treatment; scale_id; resolution | Weigh representative complete conforming packages after final acceptance using a calibrated scale | kg | Per package configuration and release batch | Every package configuration represented by the dataset | All controlled final-release and packing sites | Calculate mean finished mass per conforming copy; retain count and mass; do not subtract included carrier or packaging | Release acceptance record; package bill of materials; calibrated scale evidence; sampling record |
| `cp_rejected_optical_media_waste` | `product_release` | `rejected_optical_media_waste` | recording-batch reject, weighing and waste-transfer records | batch_id; media_format; composition; rejected_count; rejected_mass_kg; scale_id; waste_carrier_id; transfer_date; treatment_provider; destination; treatment_route; conforming_copy_count | Weigh rejected optical media separately and reconcile it to issued media, conforming carriers, stock change and transfer records | kg | Per recording batch and waste transfer | All optical-media batches supplying the declared release | All controlled recording, sorting and waste-transfer locations | Sum actual outgoing rejected-media mass by treatment route and divide by conforming copies; report zero only from complete batch records | Batch reject log; scale record; stock ledger; waste transfer note; treatment contract or receipt |
| `cp_rejected_paper_box_waste` | `product_release` | `rejected_paper_box_waste` | packaging-batch reject, weighing and waste-transfer records | batch_id; paper_grade; paperboard_composition; rejected_count; rejected_mass_kg; scale_id; waste_carrier_id; transfer_date; treatment_provider; destination; treatment_route; conforming_copy_count | Weigh rejected paper or paperboard boxes separately and reconcile them to issued boxes, conforming packages, stock change and transfer records | kg | Per packaging batch and waste transfer | All paper-box packaging batches supplying the declared release | All controlled packing, sorting and waste-transfer locations | Sum actual outgoing rejected-box mass by treatment route and divide by conforming copies; report zero only from complete batch records | Batch reject log; scale record; stock ledger; waste transfer note; treatment contract or receipt |
| `cp_operation_electricity` | `supported_operation` | `operation_electricity` | device, cloud or data-centre telemetry and workload log | software_version; component; workload; functional_unit_count; timestamp_start; timestamp_end; kWh; reserved_resource_share; platform; location; PUE_if_used | Measure real operation or a controlled benchmark; include materially supporting provisioned infrastructure and document models | kWh | Per workload run or metering interval | Full declared operational assessment period; annual data are the lowest acceptable temporal granularity when finer data are unavailable | Every included execution location and supporting infrastructure component | Sum electricity for consistent workload units; apply causal resource share and PUE only once; link result to the supplied copy | Telemetry export; benchmark script; workload log; provider methodology; allocation worksheet |
| `cp_operation_server_hardware` | `supported_operation` | `operation_server_hardware` | server inventory, workload and allocation records | server_id_or_group; manufacturer; model; configuration; device_count; device_mass_kg; commissioning_date; expected_life; assessment_time_reserved; total_available_time; resources_reserved; total_resources; workload; supplier_LCA_reference; screening_result; cutoff_decision | Link physical servers or homogeneous server groups to the declared workload, screen allocated embodied burden, and calculate workload-attributable mass only when material | kg | Per server group and assessment period | Full declared operational assessment period | All owned, leased or dedicated server hardware materially supporting the declared workload | Apply documented time and workload-resource shares to device mass; prevent overlap with build and release; retain screening evidence for exclusions | Asset/provider inventory; specification; supplier/device LCA; workload logs; allocation worksheet; cutoff record |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_kwh_to_mj` | every electricity row | MJ = kWh × 3.6 | collected kWh | electricity amount in MJ |  |
| `calc_per_copy_normalization` | development, release, optical-media and paper-box amounts | Per-copy amount = attributable release or batch amount ÷ conforming supplied-copy count | attributable amount; conforming-copy count | amount per supplied copy |  |
| `calc_shared_resource_share` | shared electricity | Attributable electricity = interval electricity × documented reserved-resource share; keep provisioned idle resources in the share when reserved for the release or workload | interval kWh; reserved resources; total resources; activity interval | attributable kWh | `green-software-foundation-sci-1-1-0` |
| `calc_hardware_allocated_mass` | developer workstation, build-server and operation-server hardware rows | Allocated hardware mass = device mass × (time reserved ÷ expected life) × (resources reserved ÷ total resources) | device mass; time reserved; expected life; resources reserved; total resources; release-copy or workload denominator | allocated hardware mass per supplied copy or declared workload | `green-software-foundation-sci-1-1-0` |
| `calc_hardware_embodied_share` | optional hardware embodied burden | M = TE × (TiR ÷ EL) × (RR ÷ ToR) | total embodied emissions TE; time reserved TiR; expected life EL; resources reserved RR; total resources ToR | allocated hardware embodied emissions for the declared release or workload | `green-software-foundation-sci-1-1-0` |
| `calc_release_material_balance` | optical-media and paper-box routes | Issued input mass = mass incorporated in conforming packages + rejected waste mass transferred out + closing stock attributable to the batch − opening stock attributable to the batch | issued material mass; conforming output and component mass; rejected waste mass; opening and closing stock | route-specific release-batch mass-balance residual |  |
| `calc_operational_emissions_metric` | optional operational carbon-intensity disclosure | O = E × I, using electricity and a geographically and temporally appropriate location-based electricity carbon-intensity factor; keep the factor identity and units explicit | operational kWh E; location-based carbon intensity I; declared workload count | operational gCO2e per declared workload unit and assessment period | `green-software-foundation-sci-1-1-0` |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_release_traceability` | all foreground records | Every record must identify the product version, release or package batch and the conforming-copy population used for normalization. | Release manifest, source revision, build identifier, batch record and copy-count reconciliation |
| `dq_temporal_granularity` | electricity and operational records | Use the highest practical temporal granularity. For an operational SCI-style calculation, annual data are the lowest acceptable temporal granularity when finer data are unavailable; disclose all modelled gaps. | Timestamped meter/telemetry export and gap log; `green-software-foundation-sci-1-1-0` |
| `dq_boundary_completeness` | software and supporting infrastructure | Retain a component and infrastructure register showing included compute, storage, networking, monitoring, logging, scanning, build, test and operation resources and justify every material exclusion. | Boundary register and architecture/build-pipeline evidence; `green-software-foundation-sci-1-1-0` |
| `dq_physical_package_completeness` | supplied package | Reconcile finished-package mass with the declared carrier and every actual packaging component. Add any unlisted actual component as a separate atomic foreground exchange. | Package bill of materials, supplier specifications, batch records and weighing evidence |
| `dq_release_waste_closure` | optical-media and paper-box production rejects | Reconcile each issued material separately to conforming package components, outgoing production waste and stock change. Identify actual waste quantity and treatment route; accept zero waste only when complete batch records demonstrate zero rejects. | Material ledger; batch and reject logs; scale records; stock reconciliation; waste transfer and treatment evidence |
| `dq_hardware_materiality` | developer workstations and build or operation servers | Retain the device inventory, supplier/device evidence, materiality screen, allocation factors and explicit cutoff decision for every included or excluded hardware class. A material device class must appear as a concrete hardware exchange. | Asset or provider inventory; procurement/specification; supplier/device LCA; allocation worksheet; signed cutoff record |
| `dq_allocation_reproducibility` | shared electricity and hardware | Preserve interval boundaries, reserved and total resources, expected hardware life, source embodied-emission data and formulas so an independent reviewer can reproduce each allocation. | Allocation worksheet and source device or supplier evidence; `green-software-foundation-sci-1-1-0` |
| `dq_no_offset_substitution` | carbon-intensity disclosures | Do not use offsets or market-based claims to reduce measured energy, operational emissions or allocated hardware embodied emissions. | Calculation workbook and factor provenance; `green-software-foundation-sci-1-1-0` |

## 9. Validation Rules

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| `validate_reference_identity` | reference product | Require exactly one reference output using UUID `0771060f-3f5c-45f4-a914-cec63115361d`, mass property UUID `93a60a56-a3c8-11da-a746-0800200b9a66`, mass unit-group UUID `93a60a57-a4c8-11da-a746-0800200c9a66` and kg. Reject download, service or adjacent software identities. | `un-cpc-3-0-explanatory-notes-2025`; `un-cpc-3-0-system-software-downloads-84341` |
| `validate_reference_qualifiers` | foreground data package | Fail completeness when product version, development function, entitlement, supported platform/runtime, release acceptance criteria, carrier, package configuration, geography, reporting period or included stages are missing. Require workload and assessment period when operation is included. | `un-cpc-3-0-explanatory-notes-2025`; `green-software-foundation-sci-1-1-0` |
| `validate_process_and_rows` | process inventory | Require development and product-release processes. Permit operation only with its inclusion condition. Check that every listed row is one atomic exchange, uses the declared direction, property and unit, and is not duplicated across overlapping meters or stages. |  |
| `validate_conditional_package_inputs` | optical media and paper box | Require `optical_media_input` only for an optical-carrier route and `paper_box_input` only when a paper box is present. Require any different actual carrier or packaging article as its own concrete additional exchange. |  |
| `validate_release_waste_closure` | optical-media and paper-box production rejects | For each applicable route, require the corresponding outgoing waste row, actual quantity and treatment route. Recalculate issued input against conforming incorporated mass, rejected waste and stock change. Accept zero only from complete batch records, and reject end-of-life assumptions used as production-scrap evidence. |  |
| `validate_electricity` | electricity rows | Recalculate MJ from retained kWh using 3.6 MJ/kWh; verify meter interval, geography, reserved/provisioned resource treatment, stage assignment, copy or workload normalization and absence of double counting. | `green-software-foundation-sci-1-1-0` |
| `validate_hardware_materiality` | developer workstation, build-server and operation-server hardware | Require a device inventory and documented materiality screen. When material, require the corresponding concrete hardware exchange and verify device mass, expected life, time share and resource share; when excluded, require disclosed screening evidence, cutoff rationale and estimated omitted burden. An optional emissions result alone does not satisfy the exchange requirement. | `green-software-foundation-sci-1-1-0` |
| `validate_allocation` | shared resources and hardware embodied burden | Require a causal allocation worksheet. For hardware embodied burden, verify TE, TiR, EL, RR and ToR and confirm consistent units; report the result as inconclusive when any required factor lacks evidence. | `green-software-foundation-sci-1-1-0` |
| `validate_boundary_disclosure` | published dataset | Require explicit disclosure of the software/component boundary, release cycle, supporting infrastructure, physical package, exclusions, operational extension status, allocation methods and data gaps. | `green-software-foundation-sci-1-1-0` |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | secondary_dataset |
| downstream_use | Foreground data package for process and lifecyclemodel projections of a declared packaged development-tool or programming-language software release |
| allowed_use | Comparison or modelling of products with the same principal development function, version/entitlement basis, physical package state, system boundary, geography, and—when applicable—operational workload and assessment period |
| excluded_use | Download-only software, custom development services, hosted development environments, dissimilar software functions, undisclosed package configurations, or comparisons that mix cradle-to-release and operationally extended boundaries |
| required_metadata | PCR id; product name and version; development function; entitlement; supported platform, architecture and runtime; release-cycle dates; source/build identifiers; release acceptance criteria; carrier and package bill of materials; production and supply geography; conforming-copy count; finished-package mass; release-waste quantities and treatment routes; hardware inventory and materiality decisions; reporting period; included processes and infrastructure; operational workload and period when included |
| required_quality_disclosure | Primary versus modelled data share; meter and telemetry coverage; temporal granularity; package sampling; upstream dataset geography and technology; allocation factors; hardware life and resource share; hardware screening and disclosed cutoffs; production-waste mass-balance closure and treatment evidence; exclusions; data gaps; uncertainty and validation findings |
| update_trigger | New major product version, materially different build/test architecture, carrier or package configuration, entitlement or platform change, operational workload change, supplier or grid-region change, allocation-method change, or data older than the representative release cycle |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `un-cpc-3-0-explanatory-notes-2025` | official_guidance | United Nations Statistics Division, *Central Product Classification (CPC) Version 3.0 Explanatory Notes*, 30 June 2025, page 262. https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Exp_Notes_30Jun2025.pdf | Product boundary, included development-tool function, and distinction from adjacent software categories |
| `un-cpc-3-0-system-software-downloads-84341` | official_guidance | United Nations Statistics Division, *CPC Version 3.0 classification detail: 84341 System software downloads*, retrieved 11 September 2026. https://unstats.un.org/unsd/classifications/Econ/Structure/Detail/EN/2100/84341 | Separate download-only product-state boundary |
| `green-software-foundation-sci-1-1-0` | standard | Green Software Foundation, *Software Carbon Intensity (SCI) Specification*, version 1.1.0. https://sci.greensoftware.foundation/ | Software boundary, functional-unit consistency, electricity measurement, operational calculation, shared-resource and hardware allocation, temporal granularity, and disclosure rules |
| `carbonfootprint-network-cpc-zh-appendix` | handbook | LCA/碳足迹数据库构建导则——第六章附录，产品流分类表，CPC 47814. https://www.carbonfootprint.network/docs/cifa-guidelines/lca-database-guideline/chapter-6-appendix | Professional Chinese terminology for the product title; not used as quantitative or methodology evidence |
