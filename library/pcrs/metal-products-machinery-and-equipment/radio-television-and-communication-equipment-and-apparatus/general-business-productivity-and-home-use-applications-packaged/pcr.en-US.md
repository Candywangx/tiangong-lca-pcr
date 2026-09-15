---
pcr_id: pcr.metal-products-machinery-and-equipment.radio-television-and-communication-equipment-and-apparatus.general-business-productivity-and-home-use-applications-packaged
language: en-US
status: candidate
sync_with: pcr.zh-CN.md
---

# General business productivity and home use applications, packaged

## 1. Scope and Applicability

This PCR applies to published, standardized application software supplied as a physical packaged product for general business productivity or home entertainment, reference, or education. Covered examples include office suites and their word-processing, spreadsheet, and simple-database functions; graphics and project-management applications; computer-based training; and home reference or education applications.

The PCR excludes operating systems, network software, database-management platforms, development tools and programming languages, computer games, and other application-software subclasses. It also excludes custom software development, software-as-a-service, cloud-hosted application services, and application-software downloads. CPC 3.0 places downloadable application files that are stored locally for later execution or installation in the separate subclass 84342. A data producer shall not use this PCR merely because software is commercially licensed; the declared product must be the physical packaged-product supply covered here.

The default foreground boundary is release development, build, testing, mastering, physical-media assembly, and retail packaging through the packaged product at the producer gate. Distribution, customer-device operation, maintenance after release, and end-of-life treatment are outside the default boundary and require separately declared modules if included in a study.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.metal-products-machinery-and-equipment.radio-television-and-communication-equipment-and-apparatus.general-business-productivity-and-home-use-applications-packaged |
| classification_refs | CPC 3.0: 47821 (exact classification context; no accepted mapping is asserted here) |
| covered_products | Published physical packaged application software for general business productivity and home entertainment, reference, or education, including office suites, word processors, spreadsheets, simple databases, graphics applications, project-management software, computer-based training, and home reference or education software |
| excluded_products | Application-software downloads; computer games; operating systems; network software; database-management software; development tools and programming languages; other application software; custom development; SaaS and hosted application services |
| representative_product | A released general business productivity application recorded on optical disc with its retail paper box and paper instruction insert |
| production_route | Requirements and release development → build, test, and mastering → recorded-media receipt → physical assembly and retail packaging → packaged product at producer gate |
| market_state | Finished, published, version-identified physical packaged software ready for sale or distribution; download-only products are excluded |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Supply a published physical packaged application that provides the declared general business productivity or home entertainment, reference, or education function |
| How much | 1 kg of finished packaged application software at the producer gate |
| How well | The declared release is installable from the stated physical medium and provides the declared application function, version, supported platform, language, and licence scope |
| How long or cycle | One completed release-and-packaging production period; the reporting period and release lifetime used to allocate development burdens shall be declared |
| reference_flow_link | `packaged_application_output` |

| Field | Value |
| --- | --- |
| Reference amount | 1 kg |
| Reference product flow | General business productivity and home use applications, packaged `5a4c8133-eca9-4b40-8196-822a97bcd716` |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | application function; product name and version; release identifier; supported operating system and hardware architecture; interface language; licence scope; physical medium type and count; retail packaging components; geography; reporting period; producer-gate boundary; allocation denominator |

When constructing a foreground data package, every required qualifier shall be stated in dataset metadata, process notes, the reference-flow comment, the product description, or an equivalent data-package field. Missing required qualifiers make the reference flow incomplete.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| `reference_product_mass` | Finished packaged application software and mass-based material or waste rows | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Weigh or calculate net mass at the stated moisture and packaging condition. The 1 kg reference amount includes the recorded medium, retail box, and included paper insert, but excludes transport packaging outside the declared retail product. |
| `electricity_energy_conversion` | Development/build/test and packaging electricity | Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` | MJ | Collect meter or supplier records in kWh and convert to the TianGong reference unit using 1 kWh = 3.6 MJ. Keep geography, voltage, grid mix, renewable claims, and loss boundary as separate qualifiers; do not convert electricity to mass. |
| `release_allocation_denominator` | Release-level development, build, test, and mastering records | Mass | kg packaged product | Normalize release-level records by the verified mass of conforming physical packaged units produced for the same release and reporting period. Exclude download-only units and SaaS subscriptions from the denominator. |

## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Project or release initiation with software requirements, pre-existing source components, third-party dependencies, and the intended physical packaged-product configuration identified |
| starting_condition_role | Starting inventory condition for release development and for tracing purchased components that enter the physical packaged product |
| product_classification_scope | Published general business productivity and home-use application software supplied as a physical packaged product; download-only application files belong to a separate CPC subclass and are outside this PCR |
| recursive_input_rule | A purchased component already classified as the same packaged application category shall be recorded once as an upstream product input with a conforming upstream dataset; do not recursively reconstruct its development and packaging inside the receiving process |
| upstream_dataset_requirement | Electricity, recorded optical disc, paper box, paper insert, and any added medium or packaging component require geography-, technology-, and product-state-appropriate upstream datasets |
| disclosure | Declare included software components, release/build/test infrastructure, physical medium, packaging configuration, producer-gate geography, reporting period, allocation denominator, exclusions, and the asset-by-asset supporting-hardware assessment with inclusion or cut-off decisions |

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `boundary_physical_packaged_product` | Product eligibility | Include only published physical packaged application software within the covered functions; exclude download-only application files and hosted or custom software services. | `un-cpc-3-0-47821`; `un-cpc-3-0-84342` |
| `boundary_release_production` | Required foreground processes | Include release development, build, testing, mastering, and physical assembly and retail packaging through the packaged product at the producer gate. | `gsf-sci-1-1`; `un-cpc-3-0-47821` |
| `boundary_supporting_infrastructure` | Material supporting infrastructure | Include measured electricity for development/build/test and packaging. Screen each actual developer workstation, build/test server, storage device, and network device supporting the release using a documented asset-specific materiality assessment. Add every material asset as its own concrete product exchange linked to an appropriate hardware dataset and allocate it by disclosed time and resource shares. Exclude an asset only under a disclosed quantitative cut-off calculation retained with the dataset; absence of a claim or missing data is not a zero. Preserve the device type, model or configuration, asset identifier, geography, lifetime basis, and allocation variables, and never aggregate different devices into an umbrella hardware row. | `gsf-sci-1-1` |
| `boundary_background_emissions` | Purchased electricity and materials | Use upstream datasets for emissions embodied in purchased electricity and materials; do not duplicate those emissions as direct elementary outputs unless the foreground process directly releases them. |  |
| `boundary_optional_modules` | Distribution, operation, maintenance, and end of life | Keep these outside the default producer-gate dataset. When a study adds one, report it as a separate module with its own functional basis, scenario, inventory, and exclusions. | `gsf-sci-1-1` |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| `software_development_release` | Software development, build, testing, and release mastering | required | Always included for the represented release | Foreground creation of the released application and verified master | Release-level records normalized to kg of conforming packaged product produced in the reporting period |
| `physical_media_packaging` | Physical-media assembly and retail packaging | required | Always included; the actual physical medium and packaging configuration shall be declared | Foreground assembly and packaging to producer-gate product | 1 kg finished packaged application software |

### Process: Software development, build, testing, and release mastering (`software_development_release`)

#### Inputs

##### Product flows

###### Electricity for development, build, testing, and mastering (`development_electricity_input`)

Electricity consumed by developer workstations and metered or allocated build, test, integration, and mastering infrastructure crosses the foreground boundary. Supplier or meter kWh are converted to MJ and allocated to the represented physical release.

- Selected flow: Electricity `890a70b7-b677-4e2a-8a1b-7d017e0a10ae`
- Flow property / unit: Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- Amount rule: Sum measured or supplier-recorded kWh for included release activities, convert by 3.6 MJ/kWh, allocate to the release, and divide by conforming packaged-product mass
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg finished packaged application software
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_development_electricity`
- Sources: `gsf-sci-1-1`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

##### Waste flows

##### Elementary flows

### Process: Physical-media assembly and retail packaging (`physical_media_packaging`)

#### Inputs

##### Product flows

###### Electricity for physical assembly and packaging (`packaging_electricity_input`)

Electricity used by disc handling, verification, labelling, assembly, and retail packaging equipment is recorded separately from release-development electricity.

- Selected flow: Electricity `890a70b7-b677-4e2a-8a1b-7d017e0a10ae`
- Flow property / unit: Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- Amount rule: Sum metered or allocated packaging-line kWh, convert by 3.6 MJ/kWh, and normalize by conforming packaged-product mass
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg finished packaged application software
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_packaging_electricity`
- Sources: `gsf-sci-1-1`

###### Recorded optical-disc medium (`recorded_optical_disc_input`)

Include the mass of finished recorded optical discs consumed by the declared optical-disc packaging route, calculated as issued mass minus genuinely unused returned mass. This includes discs retained in conforming products and discs consumed as rejects or scrap. Another tangible medium requires its own atomic row and identity audit.

- Selected flow: Recorded optical disc containing the declared CPC 47821 application software
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Measured issued disc mass minus genuinely unused returned disc mass, including both mass retained in conforming packages and consumed rejects reported separately as waste
- Value mode: Foreground record (`foreground_record`)
- Specificity: Route-specific (`route_specific`)
- Normalization basis: per 1 kg finished packaged application software
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_recorded_disc_mass`
- Sources:

###### Retail paper box (`paper_box_input`)

Include retail paper boxes consumed in packaging, calculated as issued mass minus genuinely unused returned mass. The input includes boxes retained in conforming products and consumed rejects or scrap. Corrugated transport cases outside the retail product are excluded from this row.

- Selected flow: Paper box `12d5d744-7725-4dbc-b102-43c80547f777`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Measured issued paper-box mass minus genuinely unused returned mass, including both mass retained in conforming packages and consumed box rejects reported separately as waste
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg finished packaged application software
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_paper_box_mass`
- Sources:

###### Paper instruction insert (`paper_insert_input`)

Include paper instruction inserts consumed in packaging, calculated as issued mass minus genuinely unused returned mass. The input includes inserts retained in conforming products and consumed rejects or scrap. Paper labels and transport documents are not included in this row.

- Selected flow: Packaging, paper insert `b4681b7b-ff95-4df8-804a-fff06aa3c3aa`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Measured issued paper-insert mass minus genuinely unused returned mass, including both mass retained in conforming packages and consumed insert rejects reported separately as waste
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg finished packaged application software
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_paper_insert_mass`
- Sources:

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Finished physical packaged application software (`packaged_application_output`)

This is the conforming producer-gate reference product, including the recorded medium, retail paper box, and paper instruction insert in the declared configuration.

- Selected flow: General business productivity and home use applications, packaged `5a4c8133-eca9-4b40-8196-822a97bcd716`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Fixed reference output of 1 kg after normalization from measured conforming packaged-product mass
- Value mode: Fixed value (`fixed_value`)
- Specificity: Generic (`generic`)
- Normalization basis: 1 kg finished packaged application software at producer gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Identity reference (`identity_reference`)
- Sources: `un-cpc-3-0-47821`

##### Waste flows

###### Rejected recorded optical discs (`waste_recorded_optical_disc_output`)

Record coated recorded discs rejected during verification or packaging as one mass-based waste stream before treatment. The Tiangong waste-flow UUID remains unresolved; do not substitute a generic plastic waste or treatment service.

- Selected flow: Waste recorded optical disc
- Flow property / unit: Mass / kg
- Amount rule: Measured mass of rejected recorded optical discs leaving the foreground process, excluding conforming discs and paperboard waste
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg finished packaged application software
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_optical_disc_waste`
- Sources:

###### Paperboard packaging waste (`paperboard_packaging_waste_output`)

Record paperboard box blanks, damaged boxes, and other cardboard packaging scrap leaving the packaging process before treatment. Paper instruction-insert scrap is recorded in the separate row below.

- Selected flow: Packaging waste, cardboard `72270223-04b1-4986-a546-94e5a0821317`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Measured mass of cardboard retail-packaging scrap leaving the foreground process
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg finished packaged application software
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_paperboard_waste`
- Sources:

###### Paper instruction-insert waste (`paper_insert_waste_output`)

Record misprinted, damaged, or otherwise rejected paper instruction inserts leaving the packaging process before treatment, separately from paperboard box waste.

- Selected flow: Packaging waste, paper `6b6f1025-cb6a-4c9d-9947-7726c4307a76`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Measured mass of paper instruction-insert scrap leaving the foreground process
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg finished packaged application software
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_paper_insert_waste`
- Sources:

##### Elementary flows

## 7. Allocation and Co-product Handling

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `allocation_subdivide_release` | Release-specific development, build, test, mastering, and packaging | Prefer direct metering and release-specific job, build, and equipment records. Subdivide shared infrastructure by release and activity before applying allocation. | `gsf-sci-1-1` |
| `allocation_shared_compute` | Shared development or build infrastructure | When subdivision is impracticable, allocate electricity by measured or scheduler-recorded resource time for the represented release; disclose the resource metric, idle-capacity treatment, reporting period, and excluded workloads. | `gsf-sci-1-1` |
| `allocation_hardware_embodied` | Each material supporting-hardware asset | For each actual device retained by the materiality assessment, allocate its asset-specific hardware dataset by time share and resource share using `TE × (TiR / EL) × (RR / ToR)`, then normalize by conforming packaged-product mass. Disclose every term, data source, device identity, and any justified cut-off; do not combine unlike assets into one exchange. | `gsf-sci-1-1` |
| `allocation_mass_normalization` | Release-level burden and multiple physical packaged units | Divide the represented release burden by the total verified kg of conforming physical CPC 47821 packaged product produced in the same allocation period. Download-only units, SaaS subscriptions, and products outside this PCR shall not enter the denominator. | `un-cpc-3-0-47821`; `un-cpc-3-0-84342` |
| `allocation_waste_no_credit` | Recorded-disc, paperboard-box, and paper-insert waste | Report consumed material inputs and each outgoing waste separately. Do not assign recycling or avoided-burden credits inside the producer-gate process; model any treatment or credit in a separately declared downstream module. |  |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_development_electricity` | `software_development_release` | Electricity for included release activities | Meter, utility, cloud-hosting, build-runner, and scheduler records | meter_kWh; supplier_kWh; workload_id; release_id; timestamp; geography; voltage; allocation_resource_time; idle_capacity_rule | Reconcile facility or supplier electricity with release-specific resource-time records and documented exclusions | kWh and resource-time unit | At least monthly and per release/build campaign where available | Full declared reporting period; annual data are the lowest acceptable fallback when finer data are unavailable | All developer facilities and hosted resources included in the release boundary | Convert kWh to MJ, allocate shared electricity to the release, sum, then divide by conforming packaged-product kg | Meter calibration or supplier invoice; workload logs; reconciliation; documented coverage and gaps |
| `cp_packaging_electricity` | `physical_media_packaging` | Electricity for assembly and packaging | Packaging-line meter and production records | meter_start_kWh; meter_end_kWh; packaged_product_kg; downtime_kWh; line_id; timestamp | Read dedicated meter or allocate a reconciled facility meter by measured line operating time | kWh | Per production run, aggregated monthly | All runs producing the represented release | Every packaging site in scope | Subtract documented out-of-scope loads, convert kWh to MJ, and divide by conforming packaged-product kg | Meter calibration; run log; facility reconciliation; downtime treatment |
| `cp_recorded_disc_mass` | `physical_media_packaging` | Recorded optical-disc input | Receiving, issue, return, bill-of-material, scale, reject, and stock records | lot_id; issued_disc_count; unit_mass_kg; issued_mass_kg; unused_returned_mass_kg; rejected_mass_kg; stock_adjustment_mass_kg; release_id | Weigh representative discs and reconcile issued mass with genuine unused returns, retained product, rejects, and stock movements | kg | Per received lot and production run | All lots consumed for the represented release | Every packaging site and supplier lot in scope | Calculate consumed disc mass as issued mass minus genuinely unused returned mass; include consumed rejects, then divide by conforming packaged-product kg | Calibrated scale; supplier specification; lot reconciliation; return record; reject log; stock ledger |
| `cp_paper_box_mass` | `physical_media_packaging` | Retail paper-box input | Bill of materials, supplier, issue, return, scale, reject, and stock records | box_lot_id; box_count; unit_mass_kg; issued_mass_kg; unused_returned_mass_kg; rejected_mass_kg; stock_adjustment_mass_kg | Weigh representative boxes and reconcile issued mass with genuine unused returns, retained product, scrap, and stock movements | kg | Per packaging-material lot and production run | All boxes consumed for the represented release | Every packaging site and box supplier in scope | Calculate consumed box mass as issued mass minus genuinely unused returned mass; include consumed rejects, then divide by conforming packaged-product kg | Calibrated scale; supplier specification; issue/return records; material reconciliation; stock ledger |
| `cp_paper_insert_mass` | `physical_media_packaging` | Paper instruction-insert input | Bill of materials, print-order, issue, return, scale, reject, and stock records | insert_lot_id; insert_count; unit_mass_kg; issued_mass_kg; unused_returned_mass_kg; rejected_mass_kg; stock_adjustment_mass_kg | Weigh representative inserts and reconcile issued mass with genuine unused returns, retained product, scrap, and stock movements | kg | Per print lot and production run | All inserts consumed for the represented release | Every packaging site and print supplier in scope | Calculate consumed insert mass as issued mass minus genuinely unused returned mass; include consumed rejects, then divide by conforming packaged-product kg | Calibrated scale; printer specification; issue/return records; material reconciliation; stock ledger |
| `cp_product_mass` | `physical_media_packaging` | Conforming packaged-product output | Finished-goods count and scale records | release_id; product_variant; package_count; sample_unit_mass_kg; total_output_mass_kg; rejected_package_mass_kg | Weigh statistically documented samples or the complete lot and reconcile with finished-goods count | kg | Per production run and release | Full reporting period | Every packaging site in scope | Sum conforming output mass only; use this mass as the normalization denominator | Calibrated scale; sampling plan; finished-goods reconciliation |
| `cp_optical_disc_waste` | `physical_media_packaging` | Rejected recorded optical-disc waste | Segregated waste container and reject records | container_id; gross_mass_kg; tare_mass_kg; release_id; rejection_reason; destination | Weigh segregated rejected recorded discs before off-site treatment | kg | Per container and production run | Full reporting period | Every packaging site in scope | Sum net rejected-disc mass and divide by conforming packaged-product kg | Calibrated scale; reject log; waste transfer record; contamination check |
| `cp_paperboard_waste` | `physical_media_packaging` | Paperboard packaging waste | Segregated waste container and material-reconciliation records | container_id; gross_mass_kg; tare_mass_kg; release_id; destination; contamination_note | Weigh segregated cardboard retail-packaging scrap before treatment | kg | Per container and production run | Full reporting period | Every packaging site in scope | Sum net cardboard packaging-waste mass and divide by conforming packaged-product kg | Calibrated scale; material balance; waste transfer record; contamination check |
| `cp_paper_insert_waste` | `physical_media_packaging` | Paper instruction-insert waste | Segregated waste container, reject, and material-reconciliation records | container_id; gross_mass_kg; tare_mass_kg; release_id; rejection_reason; destination; contamination_note | Weigh segregated paper instruction-insert scrap before treatment | kg | Per container and production run | Full reporting period | Every packaging site in scope | Sum net paper insert-waste mass and divide by conforming packaged-product kg | Calibrated scale; print/reject log; material balance; waste transfer record; contamination check |
| `cp_hardware_materiality_assessment` | `software_development_release` | Supporting-hardware boundary assessment | Asset register, configuration, hardware LCA, utilization, and cut-off worksheet | asset_id; device_type; model_or_configuration; geography; hardware_dataset_id; TE; TiR; EL; RR; ToR; allocated_burden; cutoff_threshold; inclusion_decision; exclusion_justification | Screen every actual supporting device separately; retain the calculation and add each material device as its own product exchange | Hardware-dataset unit and allocation variables | Per release and whenever assets or utilization change | Full release allocation period | All developer, build, test, storage, and network assets in scope | Evaluate asset-specific allocated burden against the disclosed cut-off; retain material devices and documented exclusions without aggregation | Asset register; procurement/configuration record; hardware LCA source; scheduler/utilization log; signed cut-off worksheet |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_electricity_mj` | Both electricity rows | `electricity_MJ = collected_kWh × 3.6` | Reconciled included kWh | MJ before product normalization | `gsf-sci-1-1` |
| `calc_shared_release_electricity` | Shared developer/build infrastructure | `release_kWh = total_in_scope_kWh × represented_release_resource_time / total_in_scope_resource_time`; apply the same reporting period and idle-capacity rule to numerator and denominator | Reconciled electricity; workload resource time; release identity | kWh assigned to represented release | `gsf-sci-1-1` |
| `calc_hardware_embodied_share` | Each assessed supporting-hardware asset | `allocated_hardware_burden_asset = TE_asset × (TiR_asset / EL_asset) × (RR_asset / ToR_asset)`; all variables shall use the same identified device and time basis. Add each material asset as a separate concrete exchange; retain the quantitative cut-off calculation for every excluded asset. | Asset-specific hardware LCA burden; time reserved; expected life; resources reserved; total resources; disclosed cut-off | Allocated asset burden and inclusion decision for the represented release | `gsf-sci-1-1` |
| `calc_reference_normalization` | All release and packaging rows | `normalized_amount = included_amount / conforming_packaged_product_kg` | Included row amount; verified conforming output mass | Amount per 1 kg reference product |  |
| `calc_packaging_mass_balance` | Physical-media assembly and packaging | For each material, calculate `consumed_input = issued_mass - genuine_unused_returns` and reconcile it to mass retained in conforming product, its separately measured outgoing waste, and documented stock or measurement adjustments. Reconcile recorded discs, paper boxes, and paper inserts separately; investigate every unexplained residual before approval. | Issued inputs; genuine unused returns; conforming-product component masses; recorded disc, paperboard, and paper-insert wastes; documented stock adjustments | Material-specific packaging mass-balance reconciliation |  |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_product_identity` | Reference product | Retain product name, version, release identifier, declared application function, supported platform, licence scope, physical medium, packaging bill, and evidence that the product is not download-only. | Release record; product specification; package bill of materials; CPC eligibility review |
| `dq_temporal_alignment` | Development and packaging records | Use one disclosed allocation period. Align electricity, workload, material, waste, and output records to that period; explain cut-offs, release overlap, and late corrections. | Dated meters, invoices, workload logs, production runs, and reconciliation record |
| `dq_meter_and_mass_quality` | Electricity, material, product, and waste quantities | Retain calibration status, sampling method, unit conversion, missing-data treatment, and source-record lineage for each value. | Calibration certificate; sampling plan; conversion worksheet; exception log |
| `dq_supplier_specificity` | Electricity, recorded disc, paper box, and paper insert | Select upstream datasets matching geography, voltage or technology, material state, and supplier route as closely as available; disclose proxies. | Supplier specifications; dataset-selection record; proxy justification |
| `dq_hardware_boundary` | Supporting infrastructure | Retain an asset-by-asset screen for workstations, servers, storage, and network devices. Include each material asset as a distinct exchange; document every exclusion with a quantitative cut-off calculation. | Asset register; hardware LCA source; allocation worksheet; cut-off register; dataset exchange list |
| `dq_completeness` | Foreground package | Reconcile both required processes and all nine prescribed inventory rows, plus every material hardware exchange identified by the asset screen. A zero shall mean measured absence; missing and not-applicable shall remain distinct. | Completeness matrix; process-owner sign-off; mass, electricity, and hardware reconciliation |
| `dq_range_status` | Important inventory rows | Treat this candidate PCR as foreground-record driven. Do not present uncited single cases as typical ranges; retain the unresolved range-evidence needs until two independent, boundary-compatible original sources or reviewed multi-period foreground evidence are available. | Manifest unresolved range-evidence list; evidence review record |

## 9. Validation Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `validate_identity_and_route` | Product eligibility | Fail if the declared product is download-only, hosted/SaaS, custom-developed, a computer game, system software, or another excluded software subclass; verify the physical packaged-product configuration and covered function. | `un-cpc-3-0-47821`; `un-cpc-3-0-84342` |
| `validate_reference_flow` | Reference flow | Require exactly 1 kg after normalization, the confirmed product-flow UUID, Mass property, kg unit, and every required qualifier. |  |
| `validate_inventory_completeness` | Process inventory | Require both process sections and all nine prescribed row ids; require a value, measured zero, or explicit not-applicable state for each route-applicable row. Every material device from the hardware assessment shall appear as its own additional exchange. |  |
| `validate_atomic_flows` | Inventory identity | Reject umbrella utility, packaging, hardware, waste, or emissions labels. Each row shall represent one exchange; `recorded_optical_disc_input` and `waste_recorded_optical_disc_output` remain UUID-empty until exact state-code 100 identities are confirmed. |  |
| `validate_electricity_conversion` | Electricity rows | Recalculate kWh-to-MJ conversion and release/output normalization; require one grid geography and delivery boundary for each electricity dataset used. | `gsf-sci-1-1` |
| `validate_mass_balance` | Physical-media assembly and packaging | Check separately for discs, boxes, and inserts that issued mass minus genuine unused returns equals retained conforming-product component mass plus measured outgoing material waste and documented stock or measurement adjustments within disclosed uncertainty. Consumed rejects must remain in inputs; unexplained residuals are findings. |  |
| `validate_hardware_boundary` | Supporting infrastructure | Require the asset-by-asset materiality screen. Fail when a material asset is omitted, unlike devices are combined in one row, an exclusion lacks its quantitative cut-off calculation, or missing data are treated as zero. | `gsf-sci-1-1` |
| `validate_allocation` | Shared infrastructure and release burden | Recalculate allocation denominators; exclude download-only units and other products; require consistent period, resource metric, and idle-capacity rule. | `gsf-sci-1-1`; `un-cpc-3-0-84342` |
| `validate_no_duplicate_background_emissions` | Purchased electricity and materials | Reject direct elementary emissions copied from upstream electricity or material datasets unless they are independently measured direct foreground releases. |  |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | Foreground physical packaged-application production dataset normalized to 1 kg producer-gate product |
| downstream_use | `secondary_dataset`; `background_dataset` after methodology and translation review and resolution or explicit acceptance of open evidence needs |
| allowed_use | Producer-gate LCA of physical packaged general business productivity and covered home-use applications; comparison only between datasets with equivalent function, version scope, physical medium, packaging configuration, boundary, allocation period, and geography |
| excluded_use | Download-only software, SaaS or cloud service, custom development, computer games, system/network/database/development-tool software, use-phase claims without a separate module, and comparisons based only on kg when application function or quality differs |
| required_metadata | Product and release identifiers; covered function; supported platform; licence scope; medium and packaging configuration; geography; reporting period; included infrastructure; asset-by-asset hardware screen; output mass; allocation method and denominator; electricity datasets; supplier material datasets; exclusions and cut-off calculations; proxies; unresolved UUID and range-evidence status |
| required_quality_disclosure | Primary-data share; meter and scale coverage; temporal and site coverage; release allocation method; hardware asset identities, included exchanges, and quantitative cut-offs; material-specific mass-balance residuals; missing-data and proxy treatment; whether optional modules were excluded |
| update_trigger | New major release or materially changed function; changed medium or packaging; changed build/test or packaging technology; changed site, grid, supplier, or allocation method; evidence resolving the open optical-disc-waste UUID or quantitative ranges; or a CPC boundary revision |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `un-cpc-3-0-structure-2025` | official_guidance | United Nations Statistics Division, Central Product Classification (CPC) Version 3.0 Structure, 30 June 2025, row 47821. https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Structure_30Jun2025.csv | Official classification identity and title |
| `un-cpc-3-0-47821` | official_guidance | United Nations Statistics Division, CPC Version 3.0 classification detail, code 47821. https://unstats.un.org/unsd/classifications/Econ/Structure/Detail/EN/2100/47821 (retrieved 2026-09-11) | Included application functions, published-software product boundary, and classification hierarchy |
| `un-cpc-3-0-84342` | official_guidance | United Nations Statistics Division, CPC Version 3.0 classification detail, code 84342. https://unstats.un.org/unsd/classifications/Econ/Structure/Detail/EN/2100/84342 (retrieved 2026-09-11) | Counter-boundary showing application-software downloads as a separate subclass |
| `gsf-sci-1-1` | standard | Green Software Foundation, Software Carbon Intensity (SCI) Specification, version 1.1.0. https://sci.greensoftware.foundation/ | Software-system boundary, electricity measurement, functional scaling, shared-resource and hardware embodied-burden allocation, reporting, and data granularity |
