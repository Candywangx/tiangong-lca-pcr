---
pcr_id: pcr.metal-products-machinery-and-equipment.radio-television-and-communication-equipment-and-apparatus.operating-systems-packaged
language: en-US
status: candidate
sync_with: pcr.zh-CN.md
---

# Operating systems, packaged

## 1. Scope and Applicability

This PCR covers published, ready-made low-level software supplied as a physical packaged product and intended to interface with peripheral hardware, schedule tasks, allocate storage, and provide the default user interface when no application is running. Client and network operating systems are included. The model represents release qualification, replication onto the declared physical carrier, retail-package assembly, and the packaged product at the publisher gate.

Downloaded system-software files, software executed online, custom software development, software originals and ownership rights, network-management software, database-management software, development tools, application software, computing hardware, retail and wholesale services, downstream distribution, installation, use, maintenance, and end-of-life are excluded. A study that adds downstream stages shall report them separately and shall not label the result as the publisher-gate profile defined here.

The representative route is an operating-system release replicated onto an optical disc or USB flash drive and assembled with a paper retail box. The actual carrier, package components, operating-system edition, supported architecture, licence and release state shall be declared. Additional physical components used by a real package shall be added as separate atomic exchanges; absent conditional rows shall be marked not applicable with evidence.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.metal-products-machinery-and-equipment.radio-television-and-communication-equipment-and-apparatus.operating-systems-packaged |
| classification_refs | CPC 3.0: 47811, Operating systems, packaged |
| covered_products | Published ready-made client and network operating systems supplied as a physical packaged product |
| excluded_products | System-software downloads; online software; custom software development; software originals; network-management, database, development-tool and application software; hardware; trade services |
| representative_product | A release-qualified operating system on a declared physical carrier in a paper retail box |
| production_route | Release qualification and mastering; physical-carrier replication; retail-package assembly; publisher-gate release |
| market_state | Market-ready physical package with declared carrier, packaging, edition, architecture, licence and release state |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Provide an installable published operating system that manages computer resources and supplies the declared client or network operating-system functions |
| How much | 1 kg of market-ready packaged operating-system product at the publisher gate |
| How well | Release-qualified for the declared hardware architecture and client or network role, with package integrity and installation readiness documented |
| How long or cycle | One declared release/edition and its declared licence and support term; the cradle-to-gate result does not model use over that term |
| reference_flow_link | Fulfilled by 1 kg of the selected packaged operating-system product flow |

| Field | Value |
| --- | --- |
| Reference amount | 1 kg |
| Reference product flow | Operating systems, packaged `6539b574-fb79-4d47-9618-06c83a56cdbf` |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | publisher and production geography; release, edition and version; client or network role; supported processor architecture; licence type and term; support term; language or locale; carrier type and capacity; package component materials and masses; replication and packaging technology; production period; publisher-gate boundary |

When constructing a foreground data package, the items listed in `Required qualifiers` must be declared in dataset metadata, process notes, reference flow comment, product description, or an equivalent data package field. Missing required qualifiers make the reference flow definition incomplete for that data package.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| `reference_mass` | Reference product and physical carrier/package components | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Measure dry net mass at the publisher gate. Exclude secondary shipping and distribution packaging from the reference product, and disclose whether labels, manuals or activation cards are included. |
| `electricity_energy` | Purchased electricity | Net calorific value `93a60a56-a3c8-11da-a746-0800200b9a66` | MJ | Preserve metered electricity by production period and convert kWh to MJ using 1 kWh = 3.6 MJ before normalization. Do not add upstream grid emissions as foreground elementary flows. |
| `component_mass_balance` | Accepted carrier and retail-package components | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Sum the dry mass of every accepted carrier and package component incorporated into saleable output. Reconcile that sum with finished net product mass and explain labels, coatings, inks, adhesives or other differences. |

## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Release-qualified operating-system master, attributable publisher/replicator electricity records, and purchased physical carrier and package components entering the foreground publication-and-packaging process |
| starting_condition_role | Foreground publisher-gate starting condition with upstream carrier, packaging and electricity burdens supplied by linked secondary datasets |
| product_classification_scope | Published ready-made operating systems in the semantic boundary of CPC 3.0 subclass 47811; classification is supporting context, not canonical identity |
| recursive_input_rule | A packaged operating-system input reused or bundled into another package is recorded once as a product input with its own upstream dataset; do not reopen its carrier and packaging inventory inside the receiving foreground process |
| upstream_dataset_requirement | Link geographically and technologically representative upstream datasets for electricity, each accepted carrier, and each paper box; document proxy use and exclude downloadable-file candidates from the packaged-product identity |
| disclosure | Declare release identity, carrier and package bill of materials, production sites and period, electricity allocation, contract-manufacturing boundary, rejected production treatment, and all exclusions |

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `boundary_publisher_gate` | publication_packaging | Include release qualification and mastering activities attributable to the released package, carrier replication, package assembly, accepted physical carrier and paper-box inputs, process electricity, saleable packaged output, and any additional actual material or waste exchanges. Stop at transfer of the market-ready package at the publisher gate. | `un-cpc-3-0-47811-detail`; `weber-2010-music-delivery` |
| `boundary_download_exclusion` | product_scope | Exclude electronic files supplied by download; they belong to the separately defined system-software-download boundary rather than this physical packaged-product PCR. | `un-cpc-3-0-84341-detail` |
| `boundary_upstream_links` | upstream_inputs | Represent production of electricity, carriers and paper boxes through linked upstream datasets. Do not duplicate their upstream emissions as direct foreground emissions. | `iso-14044-2006` |
| `boundary_component_completeness` | package_configuration | Add every actual carrier, case, box, insert, label, activation card, ink, coating, adhesive and rejected material as its own atomic exchange when it crosses the foreground boundary; the named rows below are a minimum common inventory, not a cut-off permission. |  |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| `publication_packaging` | Operating-system release, physical replication and retail packaging | `required` | Always required for the physical packaged-product boundary; route-specific carrier rows apply only when present | Foreground production | 1 kg market-ready packaged operating-system output at publisher gate |

### Process: Operating-system release, physical replication and retail packaging (`publication_packaging`)

#### Inputs

##### Product flows

###### Attributable purchased electricity (`electricity`)

Purchased electrical energy used for release qualification, mastering, carrier replication and package assembly is recorded without adding upstream grid emissions as direct foreground emissions.

- Selected flow: Electricity `67b723a9-6f63-4802-adca-b52ce7967d47`
- Flow property / unit: Net calorific value / MJ
- Amount rule: metered or invoice-reconciled purchased electricity attributable to saleable packaged output
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg market-ready packaged operating-system output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_electricity`
- Sources:

###### Recorded optical disc containing the operating-system release (`recorded_optical_disc`)

Record accepted recorded optical discs incorporated into the package when the declared carrier route uses optical media. The Tiangong flow UUID remains unresolved because no exact operating-system-media candidate was confirmed.

- Selected flow: Recorded optical disc containing operating-system software
- Flow property / unit: Mass / kg
- Amount rule: measured dry mass of accepted recorded optical discs incorporated into saleable packages
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg market-ready packaged operating-system output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_component_mass`
- Sources: `weber-2010-music-delivery`

###### USB flash drive containing the operating-system release (`operating_system_usb_drive`)

Record accepted USB flash drives incorporated into the package when the declared carrier route uses USB flash memory. The Tiangong flow UUID remains unresolved because no exact operating-system USB carrier candidate was confirmed.

- Selected flow: USB flash drive containing operating-system software
- Flow property / unit: Mass / kg
- Amount rule: measured dry mass of accepted operating-system USB flash drives incorporated into saleable packages
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg market-ready packaged operating-system output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_component_mass`
- Sources:

###### Paper retail box (`paper_box`)

Record each paper or paperboard retail box incorporated into the packaged product. Printing, board grade, recycled content, coatings and folding construction remain foreground qualifiers.

- Selected flow: Paper box `12d5d744-7725-4dbc-b102-43c80547f777`
- Flow property / unit: Mass / kg
- Amount rule: measured dry mass of accepted paper boxes incorporated into saleable packages
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg market-ready packaged operating-system output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_component_mass`
- Sources: `weber-2010-music-delivery`

##### Waste flows

No generic waste row is permitted. Add each actual rejected carrier, paper-box scrap, printed-paper scrap, plastic scrap or other waste stream as a separate atomic waste exchange with its measured treatment route.

##### Elementary flows

No generic direct-emission row is permitted. Record only measured direct elementary releases from the foreground sites; retain upstream electricity, carrier and packaging emissions in their linked upstream datasets.

#### Outputs

##### Product flows

###### Market-ready packaged operating system (`packaged_operating_system`)

The saleable reference output includes the declared physical carrier and retail-package components at the publisher gate.

- Selected flow: Operating systems, packaged `6539b574-fb79-4d47-9618-06c83a56cdbf`
- Flow property / unit: Mass / kg
- Amount rule: fixed reference output of 1 kg
- Value mode: Fixed value (`fixed_value`)
- Specificity: Generic (`generic`)
- Normalization basis: 1 kg market-ready packaged operating-system output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Identity reference (`identity_reference`)
- Sources: `un-cpc-3-0-structure-2025`; `un-cpc-3-0-47811-detail`

##### Waste flows

No waste output is expected as the declared reference product. Rejected product shall be recorded as a distinct waste flow, not netted from the saleable output.

##### Elementary flows

No elementary output is part of the reference product.

## 7. Allocation and Co-product Handling

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `allocation_subdivide_first` | shared_release_replication_packaging | Subdivide processes and use product-, batch- or line-specific meters and bills of materials before allocation. | `iso-14044-2006` |
| `allocation_causal_shared_energy` | electricity | When direct metering is unavailable, allocate shared electricity by documented causal drivers such as measured equipment run time multiplied by rated or metered load; do not allocate unrelated office, hosted-service or development electricity to the packaged release. |  |
| `allocation_shared_materials` | carrier_and_packaging_inputs | Allocate shared carrier and packaging receipts by accepted mass incorporated into each saleable product. Record rejects separately and do not hide them in a net material factor. |  |
| `allocation_disclosure` | all_allocated_exchanges | Report the allocated fraction, driver, period, products sharing the process and a sensitivity check for every material allocated exchange. | `iso-14044-2006` |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_electricity` | `publication_packaging` | electricity | Meter intervals and reconciled invoices | site; meter; timestamp; opening and closing readings or interval kWh; production line; equipment run time and load if allocated; saleable output mass; allocation fraction | Read dedicated meters where available; otherwise reconcile invoices to the declared causal allocation | kWh and kg output | Each production lot or monthly, whichever is more detailed | Same representative production period as output, normally at least 12 months or all lots for a shorter release campaign | Every publisher, replicator and packaging site inside the foreground boundary | Sum attributable kWh, convert to MJ and divide by saleable kg; keep each site's grid geography distinct | Meter calibration or invoice; reconciliation; allocation worksheet; production log; anomaly review |
| `cp_component_mass` | `publication_packaging` | accepted physical carrier or paper box | Purchase receipt, bill of materials, lot count and scale record | supplier; site; lot; component identity; material; carrier capacity; accepted count; sampled or total dry mass; rejected mass; saleable output mass | Weigh the accepted component lot or verify supplier mass with representative calibrated samples and lot counts | kg | Each incoming and production lot | Same lots as the packaged output | Every carrier-replication and packaging site in scope | Sum accepted mass separately by exact component and divide by saleable kg; keep optical-disc and USB routes separate | Supplier specification; calibrated scale record; bill of materials; acceptance and reject log |
| `cp_output_mass` | `publication_packaging` | packaged operating-system output | Finished-goods and scale records | release; edition; architecture; licence; carrier type; package bill of materials; accepted units; dry net mass; production date; site | Weigh finished accepted packages without secondary shipping packaging and reconcile to inventory | kg | Each lot | Entire representative release campaign or reporting year | All foreground sites releasing saleable packages | Sum accepted dry net mass; normalize all exchanges to 1 kg | Calibrated scale; release acceptance record; package bill of materials; mass-balance reconciliation |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_electricity_mj` | `electricity` | attributable electricity intensity = metered or allocated kWh × 3.6 / saleable output kg | attributable kWh; saleable packaged-output kg; allocation fraction | MJ per kg reference output |  |
| `calc_component_intensity` | `recorded_optical_disc`; `operating_system_usb_drive`; `paper_box` | component intensity = accepted dry component mass / saleable packaged-output mass | accepted component kg by exact identity and route; saleable packaged-output kg | kg component per kg reference output |  |
| `calc_package_mass_balance` | `publication_packaging` | Compare finished net output mass with the sum of accepted carrier, box and every other included component; document the cause and measurement uncertainty of any difference | finished net output kg; accepted component kg | mass-balance reconciliation |  |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_product_identity` | reference product | Verify that the output is a published operating system within the functional boundary and not a download, online service, custom development, application or other systems-software category. | Release manifest, product specification, CPC boundary review and sales configuration |
| `dq_route_completeness` | process inventory | Declare the exact carrier and packaging configuration and add every material and waste crossing the foreground boundary as an atomic row; do not substitute an umbrella packaging or waste label. | Bill of materials, process walk-through, purchase and waste records |
| `dq_temporal_alignment` | all foreground records | Electricity, component and output records shall cover the same release campaign or reporting period; disclose shorter campaigns and excluded lots. | Timestamped meter, invoice, lot and output records |
| `dq_mass_balance` | physical components and output | Reconcile accepted component mass, finished output mass and measured rejects for each route; investigate unexplained differences. | `calc_package_mass_balance` worksheet and scale records |
| `dq_uuid_status` | unresolved carrier rows | Keep unresolved Tiangong UUIDs empty and do not promote a classification, product-state, property or unit proxy. Re-run receipt-backed discovery before methodology review or publication. | Finalized UUID-search receipts and direct-read decisions |
| `dq_review_scope` | completed data package | Report goal and scope, inventory methods, limitations, allocations, checks and reviewer identity appropriate to the intended downstream use. | Study report and review record consistent with ISO 14044 scope |

## 9. Validation Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `validate_reference_flow` | reference product | Require exactly 1 kg of Operating systems, packaged `6539b574-fb79-4d47-9618-06c83a56cdbf` and all required qualifiers. | `un-cpc-3-0-47811-detail` |
| `validate_boundary` | product scope and process map | Fail if the reference product is a downloadable electronic file, online software, custom development result, application software, or if the model claims publisher-gate scope while omitting an in-scope release, replication or packaging activity. | `un-cpc-3-0-47811-detail`; `un-cpc-3-0-84341-detail` |
| `validate_units` | inventory amounts | Require reference and component masses in kg and electricity in MJ; verify every kWh-to-MJ conversion uses 3.6 and is normalized to saleable kg. |  |
| `validate_atomic_inventory` | all exchanges | Fail any combined carrier, packaging-material, utility, waste or emission selector. Require each actual physical component, waste and direct elementary release to have its own row, direction, type, property, unit and route condition. |  |
| `validate_conditional_carriers` | `recorded_optical_disc`; `operating_system_usb_drive` | Require at least one declared physical carrier for each packaged configuration. A conditional carrier marked not applicable shall be supported by the package bill of materials. |  |
| `validate_allocation` | allocated exchanges | Require the allocation driver, fraction, shared products, period and sensitivity disclosure; fail unexplained allocation or netting of rejects. | `iso-14044-2006` |
| `validate_reconciliation` | physical package | Require output/component/reject mass reconciliation and electricity-to-output reconciliation for the declared period. |  |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | `secondary_dataset`; `background_dataset` |
| downstream_use | Cradle-to-publisher-gate modelling of physical packaged operating systems and upstream supply-chain studies that need a mass-normalized packaged-software input |
| allowed_use | Use for a release and package configuration matching the declared operating-system role, architecture, licence, carrier, package bill of materials, geography, technology and production period |
| excluded_use | System-software downloads, online software, software-as-a-service, custom software, application software, unbundled computing hardware, or downstream installation/use/end-of-life without separately modelled stages |
| required_metadata | Canonical PCR id; CPC reference; release/edition/version; client or network role; supported architecture; licence/support term; carrier configuration and capacity; package bill of materials; sites; geography; technology; production period; reference flow UUID; unresolved UUID status; allocation methods |
| required_quality_disclosure | Data coverage and representativeness; meter/invoice and scale evidence; mass and electricity reconciliations; upstream dataset identities and proxies; conditional rows; exclusions; allocations and sensitivity; limitations; reviewer and review date |
| update_trigger | New carrier or package configuration; material bill-of-materials change; release or architecture change affecting production; site/grid/technology change; allocation change; exact Tiangong carrier UUID availability; newer product-boundary evidence; or a material data-quality finding |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `un-cpc-3-0-structure-2025` | `official_guidance` | United Nations Statistics Division, Central Product Classification Version 3.0 Structure, 30 June 2025, https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Structure_30Jun2025.csv | Official CPC 47811 title and hierarchy |
| `un-cpc-3-0-47811-detail` | `official_guidance` | United Nations Statistics Division, CPC Version 3.0 classification detail for 47811, https://unstats.un.org/unsd/classifications/Econ/Structure/Detail/EN/2100/47811 | Operating-system functional boundary and client/network inclusion |
| `un-cpc-3-0-84341-detail` | `official_guidance` | United Nations Statistics Division, CPC Version 3.0 classification detail for 84341, https://unstats.un.org/unsd/classifications/Econ/Structure/Detail/EN/2100/84341 | Separate download-product boundary and download exclusion |
| `iso-14044-2006` | `standard` | ISO 14044:2006, Environmental management — Life cycle assessment — Requirements and guidelines, Edition 1, confirmed 2022, https://committee.iso.org/standard/38498.html | High-level LCA goal/scope, inventory, reporting, limitations and review framework |
| `weber-2010-music-delivery` | `literature` | Weber, Koomey and Matthews, The Energy and Climate Change Implications of Different Music Delivery Methods, Journal of Industrial Ecology 14(5), 2010, DOI 10.1111/j.1530-9290.2010.00269.x; verified full-text copy: https://fepropaz.com/wp-content/uploads/2019/10/weber2010.pdf | Process-decomposition evidence that physical optical-media production and packaging are distinct; no amount range adopted |
