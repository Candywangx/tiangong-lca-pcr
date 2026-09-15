---
pcr_id: pcr.metal-products-machinery-and-equipment.radio-television-and-communication-equipment-and-apparatus.network-software-packaged
language: en-US
status: candidate
sync_with: pcr.zh-CN.md
---

# Network software, packaged

## 1. Scope and Applicability

This PCR covers published, standardized network systems software supplied as a market-ready packaged product. The software controls, monitors, manages, secures, or coordinates operating systems, networks, network services, storage, databases, middleware, and networked applications from a central or integrated network location. Covered examples include network-management software, server software, security and encryption software, and middleware when sold as packaged systems software.

The core dataset is cradle-to-publisher-dispatch-gate. It includes software design and development attributable to the declared release, build and release pipelines, testing, security scanning, release mastering, loading onto the declared physical carrier, and assembly of the declared sale package. It excludes bespoke software-development services, operating systems, database-management software, programming tools, end-user application software, electronic download services, hosted access or software-as-a-service, customer deployment and operation, maintenance after dispatch, and end-of-life. A study extending beyond the dispatch gate shall model those modules separately and shall not relabel them as the packaged product.

The official CPC inclusion note establishes the network-software function. CPC 3.0 classifies electronic system-software downloads separately, so the carrier and packaging route of this packaged product shall be declared. The PCR does not presume that every physical package uses an optical disc, paper box, printed insert, or polypropylene case; the corresponding atomic rows apply only when that named component is present.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.metal-products-machinery-and-equipment.radio-television-and-communication-equipment-and-apparatus.network-software-packaged |
| classification_refs | CPC 3.0: 47812, Network software, packaged |
| covered_products | Published network-management, server, security, encryption, and middleware software supplied as standardized packaged systems software |
| excluded_products | Custom software-development services; operating systems; database-management software; development tools and programming languages; application software; electronic software downloads; hosted access and software-as-a-service |
| representative_product | A released network-management or security software edition supplied on a declared physical carrier in its market-ready sale package |
| production_route | Release-specific design, development, build, testing, security scanning, mastering, physical-carrier loading, and package assembly |
| market_state | Finished, published, versioned physical software package at the publisher's dispatch gate |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Delivery of a finished packaged network-software product that performs the declared network-control, monitoring, management, security, middleware, or communication function |
| How much | 1 kg gross mass of the market-ready software package |
| How well | The edition, version, supported platform, declared network function, interoperability scope, security function, physical carrier, included documentation, and package configuration are specified |
| How long or cycle | One declared release edition at dispatch; the licence and support term shall be disclosed, while customer operation after dispatch is outside the core reference flow |
| reference_flow_link | `packaged_network_software` |

| Field | Value |
| --- | --- |
| Reference amount | 1 kg |
| Reference product flow | Network software, packaged `3e8b6cb5-99b4-4ba2-a970-f1e9052f9ad7` |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | software edition and version; publisher; release date; declared network function; supported operating environments; licence and support term; physical carrier; package components; gross-mass convention; development and build geography; carrier-loading and packaging geography; dispatch gate; temporal coverage |

When constructing a foreground data package, every item in `Required qualifiers` shall be declared in dataset metadata, process notes, the reference-flow comment, the product description, or an equivalent field. Missing required qualifiers make the reference flow incomplete for that data package.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| `packaged_product_mass` | Reference product and every physical carrier or packaging component | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Measure gross sale-package mass at the dispatch gate. Include the recorded carrier, case, printed insert, paper box, and every other component physically included in the sale unit; exclude pallet, shipping container, and tertiary transport packaging unless sold as part of that unit. |
| `electricity_conversion` | Electricity used by development, build, testing, scanning, carrier loading, and package assembly | Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` | MJ | Collect electricity in kWh from meters or provider records, include attributable data-centre overhead, then convert by `MJ = kWh × 3.6`. Retain the original kWh record and allocation key. The energy-measurement boundary follows `gsf-sci-1-1-0`. |
| `package_component_mass_balance` | Finished package and its installed physical components | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | On the same batch and moisture convention, compare finished gross mass with the sum of all installed carrier and package-component masses. Investigate and disclose any residual rather than hiding it in an unspecified packaging row. |

## 5. System Boundary

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `boundary_release_activities` | Core foreground production | Include release-attributable requirements and design work, coding, build pipelines, testing, security scanning, release mastering, physical-carrier loading, and sale-package assembly through the publisher's dispatch gate. | `un-cpc-3-0-47812`; `gsf-sci-1-1-0` |
| `boundary_supporting_infrastructure` | Development and release infrastructure | Include electricity and allocated upstream hardware burdens for significantly contributing compute, storage, memory, networking, monitoring, logging, idle reserved capacity, redundancy, failover, build, scanning, and testing infrastructure. Include data-centre overhead when applicable. | `gsf-sci-1-1-0` |
| `boundary_separate_modules` | Activities after dispatch | Exclude electronic download services, hosted access, customer deployment, operation, maintenance, and end-of-life from the core packaged-product dataset. When a study includes them, model them as disclosed separate modules with a consistent use functional unit and system boundary. | `un-cpc-3-0-84341`; `gsf-sci-1-1-0` |
| `boundary_atomic_components` | Physical carrier and packaging | Record every carrier and package component that crosses the foreground boundary as its own concrete product flow. Do not use an unspecified packaging-material or carrier umbrella row. |  |

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Approved requirements, source code, third-party components, and build configuration entering the declared release cycle; all inherited assets and their attribution treatment are disclosed |
| starting_condition_role | Release-specific foreground starting state |
| product_classification_scope | Published packaged network systems software whose principal function matches the CPC 47812 inclusion note |
| recursive_input_rule | If another packaged network-software product is used as an input, record it once as an atomic product input with its upstream dataset; do not recursively reopen its software-development inventory inside the same foreground process |
| upstream_dataset_requirement | Use geographically and temporally representative upstream datasets for electricity, recorded carrier, paper box, printed insert, case, other declared atomic package components, and allocated information-technology hardware burdens |
| disclosure | Declare release boundaries, inherited-versus-new code treatment, contributing infrastructure, allocation keys, carrier and package configuration, excluded download or hosted-service routes, publisher and supplier geographies, reference period, dispatch gate, and data gaps |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| `packaged_network_software_production` | Packaged network-software development, release, carrier loading, and package assembly | required | Include for every packaged network-software dataset; component cards apply only when the named physical component is present in the declared sale package | Foreground production | 1 kg packaged network software at the publisher's dispatch gate |

### Process: Packaged network-software development, release, carrier loading, and package assembly (`packaged_network_software_production`)

#### Inputs

##### Product flows

###### Development, build, test, and release electricity (`electricity_development_release`)

Electricity consumed by owned or provisioned hardware for release-attributable design, coding, builds, tests, security scanning, monitoring, storage, and release mastering crosses the foreground boundary. Include allocated data-centre overhead and reserved capacity that significantly contributes to the release.

- Selected flow: Electricity `67b723a9-6f63-4802-adca-b52ce7967d47`
- Flow property / unit: Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- Amount rule: calculate release-attributable electricity from metered or provider-recorded kWh and documented resource-time allocation, then convert to MJ
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg packaged network software output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_development_release_electricity`
- Sources: `gsf-sci-1-1-0`

###### Carrier loading and package assembly electricity (`electricity_carrier_packaging`)

Electricity used to load or duplicate the release onto its carrier and to assemble the physical sale package is recorded separately from software-development electricity.

- Selected flow: Electricity `67b723a9-6f63-4802-adca-b52ce7967d47`
- Flow property / unit: Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- Amount rule: calculate batch-attributable electricity from metered or provider records and the documented package-batch allocation key, then convert to MJ
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg packaged network software output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_carrier_packaging_electricity`
- Sources: `gsf-sci-1-1-0`

###### Recorded optical carrier (`recorded_optical_disc`)

Include this row only when the declared package contains a recorded optical disc. No exact public state-100 TianGong flow was confirmed for a recorded optical carrier containing packaged network software; retain the concrete identity and unresolved status.

- Selected flow: Recorded optical disc for network software
- Flow property / unit: Mass / kg
- Amount rule: measure or obtain from supplier records the net mass of recorded optical discs installed in the declared package batch
- Value mode: Foreground record (`foreground_record`)
- Specificity: Route-specific (`route_specific`)
- Normalization basis: per 1 kg packaged network software output; zero only when the declared carrier route is not optical disc
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_physical_package_components`
- Sources:

###### Paper box (`paper_box`)

Include this row only when the declared sale package contains a paper or paperboard box. Board grade, recycled content, printing, dimensions, and supplier shall be retained as qualifiers.

- Selected flow: Paper box `12d5d744-7725-4dbc-b102-43c80547f777`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: measure or obtain from supplier records the net mass of paper boxes installed in the declared package batch
- Value mode: Foreground record (`foreground_record`)
- Specificity: Route-specific (`route_specific`)
- Normalization basis: per 1 kg packaged network software output; zero only when no paper box is present
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_physical_package_components`
- Sources:

###### Printed paper instruction insert (`paper_insert`)

Include this row only when printed instructions, licence information, or other paper inserts are physically supplied in the package. Paper grade, printing, dimensions, page count, and supplier shall be retained as qualifiers.

- Selected flow: Packaging, paper insert `b4681b7b-ff95-4df8-804a-fff06aa3c3aa`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: measure or obtain from supplier records the net mass of printed paper inserts installed in the declared package batch
- Value mode: Foreground record (`foreground_record`)
- Specificity: Route-specific (`route_specific`)
- Normalization basis: per 1 kg packaged network software output; zero only when no printed paper insert is present
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_physical_package_components`
- Sources:

###### Polypropylene disc case (`polypropylene_disc_case`)

Include this row only when the declared package uses a finished polypropylene case. No exact public state-100 TianGong flow was confirmed for that finished article; polypropylene resin, textile, diaphragm, granules, and chips are not substitutes.

- Selected flow: Polypropylene disc case
- Flow property / unit: Mass / kg
- Amount rule: measure or obtain from supplier records the net mass of finished polypropylene cases installed in the declared package batch
- Value mode: Foreground record (`foreground_record`)
- Specificity: Route-specific (`route_specific`)
- Normalization basis: per 1 kg packaged network software output; zero only when no polypropylene case is present
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_physical_package_components`
- Sources:

##### Waste flows

No default waste flow is prescribed. Add every actual carrier reject, print reject, packaging offcut, or other waste as a separate atomic waste row in the foreground data package.

##### Elementary flows

No default direct elementary input is prescribed. Add any actual direct resource withdrawal as a separate elementary flow; upstream resource use belongs in the selected product-input datasets.

#### Outputs

##### Product flows

###### Finished packaged network software (`packaged_network_software`)

This is the market-ready published network-software package at the publisher's dispatch gate. Its gross mass and package composition shall use the same batch and weighing convention as the installed component records.

- Selected flow: Network software, packaged `3e8b6cb5-99b4-4ba2-a970-f1e9052f9ad7`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: exactly 1 kg reference output, established from measured batch gross mass and normalization
- Value mode: Fixed value (`fixed_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: 1 kg packaged network software at the publisher's dispatch gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Identity reference (`identity_reference`)
- Collection protocol: `cp_finished_package_mass`
- Sources: `un-cpc-3-0-47812`

##### Waste flows

No default waste output is prescribed. Foreground reject and offcut records shall be added as concrete waste flows when present.

##### Elementary flows

No default direct elementary emission is prescribed. Add actual on-site emissions as separate substance- and compartment-specific elementary rows; do not duplicate emissions already represented upstream in electricity or purchased-material datasets.

## 7. Allocation and Co-product Handling

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `allocation_avoid_by_measurement` | Release-attributable foreground activities | Prefer job-, project-, repository-, test-run-, meter-, and package-batch-specific records so that burdens are directly assigned and allocation is avoided. | `gsf-sci-1-1-0` |
| `allocation_shared_digital_infrastructure` | Shared development, build, test, storage, monitoring, and scanning infrastructure | Allocate measured electricity by a documented resource-time key that represents the release's reserved compute, storage, memory, or equivalent capacity. The numerator and denominator shall cover the same time, infrastructure, and activity boundary. | `gsf-sci-1-1-0` |
| `allocation_hardware_embodied_burden` | Shared information-technology hardware | When hardware embodied burdens are included, allocate `M = TE × (TiR/EL) × (RR/ToR)`, using documented hardware life, time reserved, resources reserved, and total resources. Do not use market-based offsets to reduce the allocated burden. | `gsf-sci-1-1-0` |
| `allocation_joint_release_and_package` | Joint builds, editions, language variants, or package batches | Subdivide development and packaging activities where records permit. If inseparable, allocate digital activity by measured resource-time and physical packaging activity by measured package-batch mass or units; disclose why each key represents causality and run a sensitivity check for any material alternative. |  |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_development_release_electricity` | `packaged_network_software_production` | Development, build, test, scanning, storage, monitoring, and mastering electricity | Meter, provider, scheduler, and telemetry records | release_id; job_id; infrastructure_id; geography; start_time; end_time; metered_kWh; provider_kWh; reserved_compute; reserved_memory; reserved_storage; allocation_numerator; allocation_denominator; PUE_or_overhead_method | Prefer real-world meter or provider data at the finest available component and time resolution; reconcile telemetry with billed or metered totals and document modelled gaps | kWh | Per job or measurement interval, aggregated per release | Full declared release cycle; annual data are the lowest temporal granularity when finer records are unavailable | All owned, colocated, cloud, and contracted infrastructure significantly contributing to the release | Allocate energy using the documented same-boundary resource-time ratio, sum by release, include facility overhead, and convert to MJ | Meter identifiers; provider exports; job logs; telemetry retention; allocation workbook; geography and factor provenance; completeness reconciliation |
| `cp_carrier_packaging_electricity` | `packaged_network_software_production` | Carrier loading and package assembly electricity | Meter, machine, batch, and invoice records | batch_id; facility; meter_id; start_time; end_time; meter_start; meter_end; purchased_kWh; packages_produced; gross_batch_mass_kg; rejects; allocation_key | Read dedicated meters where available; otherwise reconcile equipment or facility records to the declared package batch | kWh | Per production batch or meter interval | All carrier-loading and package-assembly runs contributing to the reference-period output | Every facility loading carriers or assembling the sale package | Subtract documented non-production loads, allocate shared energy by measured batch mass or units, sum kWh, normalize to output kg, and convert to MJ | Meter calibration; invoices; machine logs; batch records; reconciliation to facility totals |
| `cp_physical_package_components` | `packaged_network_software_production` | Recorded carrier and each installed package component | Supplier specification, purchase, batch issue, count, and weighing records | component_row_id; supplier; part_number; batch_id; material; finished_article_state; unit_mass_kg; count_installed; total_mass_kg; recycled_content; printing_or_coating; rejects; carrier_type | Weigh representative finished components or use verified supplier mass, then reconcile issued, installed, and rejected quantities by named atomic component | kg | Per supplier lot and package batch | All component lots installed in reference-period output | All declared carrier and packaging suppliers and assembly sites | Sum installed mass by row_id and batch, exclude rejects from installed input, normalize to 1 kg finished package | Calibrated-scale record; supplier specification; purchase record; lot trace; component photograph or bill of materials; reconciliation |
| `cp_finished_package_mass` | `packaged_network_software_production` | Finished packaged network software | Batch production, count, and gross-mass records | release_id; edition; version; batch_id; package_configuration; sample_count; sample_gross_mass_kg; total_packages; total_gross_mass_kg; dispatch_gate; weighing_date | Weigh the complete sale package with all included components using a calibrated scale and reconcile sample and batch totals | kg | Per package configuration and batch | Every batch in the reference period | Every publisher or contract-packaging dispatch site | Sum batch gross mass, reconcile with installed components, and normalize all inventory rows to exactly 1 kg output | Calibration record; batch release record; package bill of materials; sample plan; signed mass-balance reconciliation |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_electricity_mj` | Both electricity rows | `electricity_MJ = allocated_kWh × 3.6` | Allocated kWh from the applicable electricity protocol | MJ electricity per 1 kg output | `gsf-sci-1-1-0` |
| `calc_shared_energy_allocation` | Shared digital or packaging infrastructure | `allocated_kWh = boundary-consistent total_kWh × allocation_numerator / allocation_denominator`; both shares shall use the same time interval, infrastructure and activity scope | Metered or provider kWh; resource-time or batch allocation numerator and denominator | Release- or batch-attributable kWh | `gsf-sci-1-1-0` |
| `calc_hardware_embodied_share` | Hardware background contribution when included | `M = TE × (TiR/EL) × (RR/ToR)`; retain each input, unit, hardware identity and assumption | Total hardware life-cycle emissions; time reserved; expected life; resources reserved; total resources | Allocated hardware embodied burden for the declared release boundary | `gsf-sci-1-1-0` |
| `calc_package_mass_balance` | Physical package composition | `residual_kg = finished_gross_mass_kg - sum(installed_component_mass_kg)`; identify missing atomic components or measurement differences before acceptance | Finished gross mass and all installed carrier/package component masses for the same batch | Disclosed package mass-balance residual |  |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_product_identity` | Reference product | Retain edition, version, publisher, release date, network function, platform, carrier, package configuration, licence/support term, CPC reference, dispatch gate, and exact TianGong flow UUID. | Release record; product specification; package bill of materials; CPC inclusion note; TianGong state-100 identity |
| `dq_temporal_coverage` | All foreground records | Cover the complete declared release and all physical-package batches in the reference period. Prefer component-level and time-resolved records; if unavailable, disclose modelled gaps and use no coarser than annual digital-infrastructure data. | Job and telemetry coverage report; meters; provider exports; batch ledger; gap log; `gsf-sci-1-1-0` |
| `dq_geography_and_technology` | Electricity, hardware, carrier, and packaging inputs | Identify every contributing facility, cloud region, grid region, hardware class, carrier technology, packaging supplier, and package-assembly technology; select upstream datasets accordingly. | Provider and supplier records; facility list; infrastructure inventory; dataset-selection log |
| `dq_completeness` | Process inventory | Reconcile metered or billed electricity, jobs, package batches, component issues, installed masses, rejects, and finished gross mass. Add missing actual exchanges as separately named atomic rows. | Energy reconciliation; bill of materials; mass balance; waste records; completeness checklist |
| `dq_uncertainty_and_models` | Modelled data and allocations | Disclose measurement gaps, models, allocation keys, temporal and geographic proxies, hardware-life assumptions, excluded infrastructure, and sensitivity results. Never present a modelled estimate as a measured record. | Model file; assumption register; allocation workbook; sensitivity results |

## 9. Validation Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `validate_identity_and_qualifiers` | Reference flow | Confirm that the product is published packaged network systems software matching CPC 47812, that the reference and output UUIDs are identical, and that every required qualifier is present. | `un-cpc-3-0-47812` |
| `validate_scope_exclusions` | System boundary | Confirm that download, hosted-access, deployment, operation, maintenance, and end-of-life modules are not silently mixed into the core packaged-product dataset, and that any separately included module uses a disclosed consistent functional unit. | `un-cpc-3-0-84341`; `gsf-sci-1-1-0` |
| `validate_electricity_coverage` | Electricity rows | Reconcile development/release and carrier/packaging electricity to meters or provider totals, confirm supporting infrastructure and data-centre overhead coverage, verify allocation boundaries, and recalculate kWh-to-MJ conversion. | `gsf-sci-1-1-0` |
| `validate_atomic_package_rows` | Physical carrier and package components | Confirm that each present component is one named finished article, that absent conditional components are documented, that unresolved UUIDs remain blank, and that no unspecified packaging or carrier umbrella flow is used. |  |
| `validate_package_mass_balance` | Finished package | Recalculate output normalization and the component mass-balance residual using the same batch and weighing convention; investigate and disclose any residual before acceptance. |  |
| `validate_allocation_reproducibility` | Shared infrastructure and joint production | Reperform each allocation from retained numerator, denominator, period, infrastructure scope, and package-batch records; confirm that time/resource shares are used for hardware embodied burden. | `gsf-sci-1-1-0` |
| `validate_bilingual_uuid_identity` | English and Chinese renderings | Confirm identical row ids and UUIDs and the exact TianGong Chinese baseName for every UUID-bearing selected flow. |  |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | Release- and package-specific foreground product dataset for published packaged network software |
| downstream_use | `secondary_dataset`; `background_dataset` |
| allowed_use | Cradle-to-publisher-dispatch-gate modelling of the declared physical packaged network-software product; downstream studies may attach separately modelled distribution, deployment, operation, maintenance, or end-of-life modules |
| excluded_use | Generic representation of software downloads, hosted access, software-as-a-service, custom software development, operating systems, database software, application software, or an undisclosed mixture of physical and electronic delivery routes |
| required_metadata | PCR id; CPC reference; software edition and version; network function; supported platforms; publisher; release and reference dates; licence/support term; physical carrier; package bill of materials; development/build and packaging geographies; dispatch gate; allocation keys; upstream dataset identifiers; unresolved UUIDs; data gaps |
| required_quality_disclosure | Meter and provider coverage; telemetry granularity; modelled gaps; annual-data fallback if used; data-centre overhead; hardware time/resource allocation; component supplier and mass evidence; mass-balance residual; temporal, geographic, and technological representativeness; sensitivity results |
| update_trigger | Reassess the dataset when the software architecture, release pipeline, security or test scope, carrier, package configuration, publisher or supplier geography, contributing infrastructure, allocation method, reference period, or material data gap changes |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `un-cpc-3-0-47812` | `official_guidance` | United Nations Statistics Division, CPC Version 3.0 classification detail, code 47812, “Network software, packaged”, https://unstats.un.org/unsd/classifications/Econ/Structure/Detail/EN/2100/47812 (retrieved 2026-09-11) | Product identity, hierarchy, covered network-software functions, and exclusions by contrast with adjacent product classes |
| `un-cpc-3-0-84341` | `official_guidance` | United Nations Statistics Division, CPC Version 3.0 classification detail, code 84341, “System software downloads”, https://unstats.un.org/unsd/classifications/Econ/Structure/Detail/EN/2100/84341 (retrieved 2026-09-11) | Distinguishing electronic system-software download files from the packaged-product boundary |
| `gsf-sci-1-1-0` | `standard` | Green Software Foundation, Software Carbon Intensity (SCI) Specification, version 1.1.0, https://sci.greensoftware.foundation/ (retrieved 2026-09-11) | Software boundary, functional-unit consistency, electricity measurement, supporting infrastructure, real-world versus modelled quantification, data granularity, and hardware time/resource allocation |
| `cifa-lca-database-guideline-appendix` | `official_guidance` | 碳足迹产业技术创新联盟，《LCA/碳足迹数据库构建导则——第六章附录》, CPC code table, https://www.carbonfootprint.network/docs/cifa-guidelines/lca-database-guideline/chapter-6-appendix (retrieved 2026-09-11) | Professional Chinese product label “套装网络软件” for CPC 47812 |
