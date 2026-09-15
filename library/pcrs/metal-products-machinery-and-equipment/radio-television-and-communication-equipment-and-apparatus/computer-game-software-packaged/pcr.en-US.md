---
pcr_id: pcr.metal-products-machinery-and-equipment.radio-television-and-communication-equipment-and-apparatus.computer-game-software-packaged
language: en-US
status: candidate
sync_with: pcr.zh-CN.md
---

# Computer game software, packaged

## 1. Scope and Applicability

This PCR covers published computer game software supplied on magnetic or optical physical media as a complete saleable packaged product. The foreground boundary begins with accepted software source/build inputs and purchased unrecorded media and unit-packaging components, includes the electricity attributable to development/build work, physical-media replication, inspection and unit packaging, and ends with the packaged product at the publisher's distribution gate.

The product identity follows CPC 3.0 code 47822. Computer game cartridges designed for a specific console, software delivered only by download, and online game services are outside this PCR. Downstream distribution, gameplay electricity and hardware, maintenance, account services and end-of-life are excluded from the default cradle-to-gate dataset and require a separately declared boundary expansion.

The declared media route must be optical or magnetic. Only components and reject streams that actually occur in the modeled product and batch are included.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.metal-products-machinery-and-equipment.radio-television-and-communication-equipment-and-apparatus.computer-game-software-packaged |
| classification_refs | CPC 3.0: 47822, Computer game software, packaged |
| covered_products | Published computer game software presented on magnetic or optical physical media and sold as a packaged product |
| excluded_products | Console-specific game cartridges; computer game software downloads; online games; system software; non-game application software |
| representative_product | A complete saleable packaged copy containing recorded optical or magnetic media and the unit packaging declared by the producer |
| production_route | Software development/build followed by optical-media or magnetic-media replication, inspection and unit packaging |
| market_state | Finished, recorded, packaged software product at the publisher distribution gate |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Complete saleable packaged computer game software on the declared optical or magnetic physical-media route |
| How much | 1 kg of finished packaged product, including recorded medium and all unit packaging supplied with the product |
| How well | Playable or installable for the declared platform and media format; passes the producer's release, readability and packaging acceptance criteria |
| How long or cycle | One completed production batch at the publisher distribution gate; no gameplay or service lifetime is represented |
| reference_flow_link | `reference_product` |

| Field | Value |
| --- | --- |
| Reference amount | 1 |
| Reference product flow | Computer game software, packaged `b4e24ad6-6c52-4158-b19f-a30bdf4da53a` |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | software title or release family; declared platform; optical or magnetic media route; media format; included unit-packaging components; production geography; production period; publisher distribution-gate boundary |

When constructing a foreground data package, the items listed in `Required qualifiers` must be declared in dataset metadata, process notes, reference flow comment, product description, or an equivalent data package field. Missing required qualifiers make the reference flow definition incomplete for that data package.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| `reference_product_mass` | finished packaged reference product | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Measure accepted finished units with their recorded medium and all unit packaging; exclude shipping cartons, pallets and downstream distribution packaging unless the declared boundary is expanded. |
| `electricity_energy` | development/build and replication/packaging electricity | Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` | MJ | Retain meter or invoice readings in their original unit and convert kWh to MJ using MJ = kWh × 3.6; record only electricity attributable to the declared production period and foreground activities. |
| `component_mass` | unrecorded media and packaging inputs | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Use one consistent as-received mass basis for input, reject and accepted-output records; document tare removal and moisture assumptions where relevant. |
| `count_to_mass` | records available only by item count | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Convert counts using a batch-representative measured average mass per item; preserve sample size, sampling date and calculation. |

## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Accepted software source/build inputs plus purchased unrecorded physical media and unit-packaging components received for the declared production batch |
| starting_condition_role | Foreground starting condition; upstream burdens of purchased electricity, media and packaging remain linked through supplier datasets |
| product_classification_scope | Packaged computer game software on magnetic or optical media under CPC 3.0 code 47822 |
| recursive_input_rule | A purchased packaged game-software input used in production remains a separately recorded product input and links to an upstream dataset; its production is not recursively recreated inside this foreground system |
| upstream_dataset_requirement | Link every purchased electricity, medium, packaging component and material development/build hardware exchange to a geographically and technologically representative upstream dataset and disclose any proxy |
| disclosure | Declare software release, platform, physical-media route, included package configuration, production geography and period, allocation basis, development-hardware materiality assessment, cut-offs and any boundary expansion |

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `boundary_product_identity` | product selection | Include only a packaged computer game product presented on magnetic or optical physical media; exclude cartridges, downloads and online game services. | `un-cpc-3-0-explanatory-notes-2025` |
| `boundary_foreground_gate` | foreground system | Include development/build work attributable to the release, physical-media replication, inspection, rejects and unit packaging through the publisher distribution gate. |  |
| `boundary_software_infrastructure` | supporting compute and infrastructure | Include electricity and other exchanges only for supporting resources actually used by the declared software-production work and allocate shared resources transparently. | `green-software-foundation-sci-1-1-0` |
| `boundary_development_hardware` | development/build hardware | Assess all servers, desktop workstations, portable computers, storage and network devices, and test consoles or other test devices used to produce the release. For every material device, add one separate atomic product input using the actual device identity and an upstream hardware LCA dataset; disclose and justify every exclusion against the declared materiality cut-off. | `green-software-foundation-sci-1-1-0` |
| `boundary_downstream_exclusions` | downstream stages | Exclude downstream distribution, gameplay, maintenance, online services and end-of-life unless a boundary expansion is explicitly modeled and separately reported. |  |
| `boundary_recursive_input` | same-category purchased inputs | Keep any purchased packaged game-software input visible as an upstream-linked product exchange; do not recurse into another foreground copy of this PCR. |  |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| `software_development_build` | Software development and release build | required | Always include electricity attributable to development, compilation, integration, testing and release-build work, complete the development-hardware materiality assessment, and add separate atomic hardware product exchanges for every material device used for the declared release. | foreground production | Allocated to the accepted packaged-product mass of the declared batch |
| `media_replication_packaging` | Physical-media replication and unit packaging | required | Always include the selected optical or magnetic route, inspection, rejected media, accepted product and the unit-packaging components actually used. | foreground production | 1 kg accepted packaged product |
| `downstream_distribution` | Downstream distribution | excluded_by_default | Include only in a separately declared boundary expansion. | downstream optional | Declared expanded reference flow |
| `gameplay_and_maintenance` | Gameplay, hardware use and maintenance | excluded_by_default | Include only in a separately declared use-stage study with a service functional unit. | downstream optional | Declared expanded functional unit |
| `end_of_life` | Product end-of-life | excluded_by_default | Include only in a separately declared end-of-life expansion with destination-specific flows. | downstream optional | Declared expanded reference flow |

### Process: Software development and release build (`software_development_build`)

#### Inputs

##### Product flows

###### Development and release-build electricity (`development_electricity`)

Purchased electricity crosses the foreground boundary for development workstations, build servers, test equipment and supporting infrastructure attributable to the declared software release.

- Selected flow: Electricity `890a70b7-b677-4e2a-8a1b-7d017e0a10ae`
- Flow property / unit: Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ `93a60a57-a3c8-11da-a746-0800200c9a66`
- Amount rule: Metered or invoiced electricity attributable to the declared activities and period, allocated to the accepted packaged-product mass
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg accepted packaged product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_development_electricity`
- Sources: `green-software-foundation-sci-1-1-0`

**Development hardware materiality and dataset-added atomic exchanges.** Complete protocol
`cp_development_hardware_materiality` for every site, cloud allocation and test environment within the declared
release boundary. For each material server, desktop workstation, portable computer, storage device, network device,
test console or other test device, add a separate product-input exchange using the actual Tiangong device identity,
its own flow property and supplier-dataset reference unit. Allocate each device exchange by its documented time share
and reserved-resource share. Do not combine different devices under a selected flow such as “development hardware.”
If a device is excluded, retain its identity, screening result, declared cut-off, quantitative basis and approval.

##### Waste flows

None required by this PCR. Record any specific waste that actually crosses the process boundary as a separate atomic exchange.

##### Elementary flows

None prescribed. Direct elementary exchanges must be measured and added as individual flows when they occur; upstream electricity emissions remain in the linked electricity dataset.

#### Outputs

##### Product flows

No separately exchanged product output is prescribed. The release build is an internal result transferred to `media_replication_packaging`; its shared burdens are allocated to the final packaged reference product.

##### Waste flows

None prescribed.

##### Elementary flows

None prescribed.

### Process: Physical-media replication and unit packaging (`media_replication_packaging`)

#### Inputs

##### Product flows

###### Replication and packaging electricity (`replication_packaging_electricity`)

Electricity used by recording, replication, inspection and unit-packaging equipment crosses the foreground boundary.

- Selected flow: Electricity `890a70b7-b677-4e2a-8a1b-7d017e0a10ae`
- Flow property / unit: Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ `93a60a57-a3c8-11da-a746-0800200c9a66`
- Amount rule: Metered batch electricity less documented non-production loads
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg accepted packaged product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_replication_electricity`
- Sources:

###### Unrecorded optical medium (`unrecorded_optical_media`)

Include this input only for an optical-media product route. It is the unrecorded physical medium received for replication.

- Selected flow: Optical media, not recorded `714535e8-24d4-44bf-8496-4837f638fdd4`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: As-received optical-medium mass issued to the batch
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg accepted packaged product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_media_mass`
- Sources:

###### Unrecorded magnetic medium (`unrecorded_magnetic_media`)

Include this input only for a magnetic-media product route. It excludes magnetic-stripe cards.

- Selected flow: Magnetic media, not recorded, except cards with a magnetic stripe `40bcd8b1-541d-4314-9e57-fc1250fd692e`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: As-received magnetic-medium mass issued to the batch
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg accepted packaged product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_media_mass`
- Sources:

###### Rigid polypropylene media case (`rigid_polypropylene_media_case`)

Include this input only when the saleable unit contains a rigid polypropylene media case. The exact Tiangong UUID remains unresolved.

- Selected flow: Rigid polypropylene media case
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Net mass of accepted and rejected cases issued to the batch
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg accepted packaged product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_case_mass`
- Sources:

###### Paper box (`paper_box`)

Include this input only when a paper box forms part of the saleable unit.

- Selected flow: Paper box `12d5d744-7725-4dbc-b102-43c80547f777`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Paper-box mass issued to the batch
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg accepted packaged product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_paper_box_mass`
- Sources:

###### Packaging paper insert (`packaging_paper_insert`)

Include this input only when a paper manual, leaflet or printed insert is supplied inside the saleable package.

- Selected flow: Packaging, paper insert `b4681b7b-ff95-4df8-804a-fff06aa3c3aa`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Paper-insert mass issued to the batch
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg accepted packaged product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_paper_insert_mass`
- Sources:

##### Waste flows

No waste input is prescribed.

##### Elementary flows

None prescribed. Direct elementary exchanges must be recorded individually if they occur.

#### Outputs

##### Product flows

###### Accepted packaged computer game software (`reference_product`)

The accepted output is the complete recorded medium and all unit packaging supplied as the saleable product at the publisher distribution gate.

- Selected flow: Computer game software, packaged `b4e24ad6-6c52-4158-b19f-a30bdf4da53a`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: exactly 1 kg of accepted finished packaged product
- Value mode: Fixed value (`fixed_value`)
- Specificity: Generic (`generic`)
- Normalization basis: reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Identity reference (`identity_reference`)
- Collection protocol:
- Sources: `un-cpc-3-0-structure-2025`; `un-cpc-3-0-explanatory-notes-2025`

##### Waste flows

###### Rejected optical medium (`rejected_optical_media`)

Include only for an optical-media route when rejected recorded or unrecorded optical media leave the foreground process as waste. The exact Tiangong UUID remains unresolved.

- Selected flow: Rejected optical media
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Measured net mass transferred to the documented waste destination
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg accepted packaged product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_reject_mass`
- Sources:

###### Rejected magnetic medium (`rejected_magnetic_media`)

Include only for a magnetic-media route when rejected recorded or unrecorded magnetic media leave the foreground process as waste. The exact Tiangong UUID remains unresolved.

- Selected flow: Rejected magnetic media
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Measured net mass transferred to the documented waste destination
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg accepted packaged product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_reject_mass`
- Sources:

###### Polypropylene case waste (`polypropylene_case_waste`)

Include only when rejected or damaged polypropylene cases leave the foreground process as waste.

- Selected flow: Polypropylene Wastes `88215d1b-e6b6-4ec7-af7f-83375e80637b`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Measured net waste mass transferred to the documented destination
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg accepted packaged product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_reject_mass`
- Sources:

###### Paper packaging waste (`paper_packaging_waste`)

Include when rejected paper boxes, inserts or other paper unit-packaging components leave the foreground process as waste.

- Selected flow: Paper and cardboard packaging waste `a318022d-c960-4eb5-a81c-04a9c4dda7e4`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Measured net waste mass transferred to the documented destination
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg accepted packaged product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_reject_mass`
- Sources:

##### Elementary flows

None prescribed. Add separately measured direct elementary releases only as species-specific flows.

## 7. Allocation and Co-product Handling

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `allocation_avoid` | all foreground processes | Prefer subdivision and direct metering by software release, production line and batch before applying allocation. |  |
| `allocation_development` | shared development/build electricity | Allocate measured supporting-resource electricity by documented CPU time, workstation hours or another causal activity measure attributable to the declared release; if no causal measure exists, use a disclosed time-based share and justify it. | `green-software-foundation-sci-1-1-0` |
| `allocation_development_hardware` | material development/build hardware | For each separately identified device, allocate the linked hardware inventory by both the fraction of expected device life reserved for the release and the fraction of device resources reserved for the release. Preserve actual device identity and do not allocate downstream gameplay hardware unless it was also used to produce or test the release. | `green-software-foundation-sci-1-1-0` |
| `allocation_replication` | shared replication and packaging operations | Allocate shared batch electricity and materials by accepted packaged-product mass when products use the same equipment; use a documented causal machine-time basis when routes materially differ. |  |
| `allocation_recycling` | waste and recycling outputs | Apply cut-off at the point the waste leaves the foreground boundary unless an avoided-burden expansion is explicitly declared; do not credit potential recycling in the default dataset. |  |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_development_electricity` | `software_development_build` | `development_electricity` | meter, utility invoice and workload-allocation record | meter period; kWh; site; equipment scope; release identifier; CPU time or workstation hours; allocation share | Reconcile meter or invoice totals to the declared period, subtract excluded loads, then apply the documented release-specific allocation driver. | kWh raw; MJ reported | monthly and at release close | full declared development/build period | all included development and build sites | sum attributable kWh by site and period before conversion and reference-flow normalization | meter export or invoice; equipment scope; allocation worksheet; reconciliation sign-off |
| `cp_development_hardware_materiality` | `software_development_build` | dataset-added atomic development-hardware product inputs | device register, materiality screen, upstream LCA link and allocation record | actual device type; manufacturer and model or provider resource identity; function; site or cloud region; Tiangong product-flow UUID when exact; upstream dataset; supplier reference unit; total device inventory amount; commissioning and retirement dates or expected life; time reserved for release; resources reserved; total resources; screening result; cut-off; justification | Screen every device used for development, build, storage, networking and testing. Add one atomic product exchange for each material device and apply the documented time-share and resource-share allocation; retain a quantitative justification and approval for every cut-off. | each device's supplier-dataset reference unit; allocated fraction dimensionless | at release close and whenever the hardware estate or allocation changes | full declared development/build period | every included site, cloud allocation and test environment | preserve device-level records; aggregate only after separate identity, upstream link and allocation have been calculated | device or provider inventory; procurement/configuration record; upstream LCA metadata; expected-life evidence; reservation logs; materiality worksheet; cut-off approval |
| `cp_replication_electricity` | `media_replication_packaging` | `replication_packaging_electricity` | meter and production-batch record | opening and closing reading; kWh; batch id; operating time; excluded loads; accepted mass | Reconcile interval electricity to production records and deduct documented non-production loads. | kWh raw; MJ reported | each batch or metered campaign | representative production period | each replication and packaging site | sum batch-attributable kWh, then normalize by accepted packaged-product mass | meter record; batch log; downtime and exclusion record |
| `cp_media_mass` | `media_replication_packaging` | `unrecorded_optical_media; unrecorded_magnetic_media` | issue, return and scale record | route; supplier item; lot; issued count; returned count; average item mass; issued mass; rejected mass | Reconcile stores issues and returns to scale measurements; include exactly one declared media route. | kg | each batch | representative production period | each replication site | issued mass minus documented returns; retain rejects separately | calibrated-scale record; stock reconciliation; route declaration |
| `cp_case_mass` | `media_replication_packaging` | `rigid_polypropylene_media_case` | issue and scale record | case specification; issued count; returned count; average case mass; rejected count | Measure a representative sample and reconcile item counts to issued mass. | kg | each packaging batch where applicable | representative production period | each packaging site | net issued count × measured average mass; retain rejected-case waste separately | sample record; scale calibration; stock reconciliation |
| `cp_paper_box_mass` | `media_replication_packaging` | `paper_box` | issue and scale record | box specification; issued count; returned count; average box mass; rejected count | Measure a representative sample and reconcile item counts to issued mass. | kg | each packaging batch where applicable | representative production period | each packaging site | net issued count × measured average mass; retain paper rejects separately | sample record; scale calibration; stock reconciliation |
| `cp_paper_insert_mass` | `media_replication_packaging` | `packaging_paper_insert` | issue and scale record | insert specification; page count; issued count; returned count; average insert mass | Measure the complete insert supplied per package and reconcile counts. | kg | each packaging batch where applicable | representative production period | each packaging site | net issued count × measured average insert mass; retain paper rejects separately | sample record; scale calibration; stock reconciliation |
| `cp_reject_mass` | `media_replication_packaging` | `rejected_optical_media; rejected_magnetic_media; polypropylene_case_waste; paper_packaging_waste` | scale, reject and waste-transfer record | material identity; route; batch id; gross mass; tare; net mass; destination; transfer date | Segregate by atomic material, remove tare and reconcile reject logs to waste transfer records. | kg | each batch and transfer | representative production period | each replication and packaging site | sum net mass by row_id and destination; never merge material identities | calibrated-scale record; reject log; waste-transfer document |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_kwh_to_mj` | both electricity rows | MJ = measured kWh × 3.6 | attributable electricity in kWh | electricity in MJ |  |
| `calc_development_allocation` | `development_electricity` | Attributable electricity = included supporting-resource electricity × documented release activity share | reconciled electricity; CPU time, workstation hours or justified time share | release-attributable kWh | `green-software-foundation-sci-1-1-0` |
| `calc_development_hardware_share` | each dataset-added atomic development-hardware product input | Allocated device input = device inventory reference amount × (time reserved for the release ÷ expected device life) × (resources reserved for the release ÷ total device resources). Use consistent time units and preserve the unrounded factors. | actual device identity and upstream reference amount; time reserved; expected life; resources reserved; total resources | device-specific product-input amount allocated to the release in the upstream dataset reference unit | `green-software-foundation-sci-1-1-0` |
| `calc_batch_normalization` | every foreground-record inventory row | Normalized amount = batch-attributable amount ÷ accepted packaged-product mass in kg | attributable amount; accepted product mass | amount per 1 kg reference product |  |
| `calc_media_balance` | selected media route | Reconcile issued media mass = returned unused mass + recorded media in accepted output + rejected-media mass, adjusted only for documented measurement differences. | issued, returned, accepted-product component and reject masses | route-specific mass-balance residual |  |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_temporal` | all foreground records | Records shall cover a representative production period and identify the software release and batches represented. | dated meters, invoices, batch logs and release identifiers |
| `dq_geography_technology` | electricity, media and packaging inputs | Supplier datasets shall match production geography, grid, medium technology and packaging specification where available; disclose every proxy. | supplier dataset metadata and proxy justification |
| `dq_completeness` | process inventory | Reconcile the selected media route, all unit-packaging components and segregated rejects; document absent conditional rows as not applicable. | route declaration, bill of materials, stock reconciliation and reject log |
| `dq_measurement` | count-to-mass conversions | Preserve calibrated-scale evidence, sampling date, sample size, average and variability for every count-to-mass conversion. | scale calibration and sampling worksheet |
| `dq_traceability` | calculations and allocation | Preserve raw values, exclusions, formulas, allocation drivers, conversion factors and sign-off so reported values can be reproduced. | calculation workbook and approval record |
| `dq_development_hardware` | development/build hardware | The materiality assessment shall cover the complete device register and record actual device identity, function, upstream LCA link, expected life, release-reserved time, reserved and total resources, allocation result and the quantitative basis for every cut-off. | device register; procurement or provider configuration; upstream dataset metadata; reservation logs; materiality and allocation worksheet; cut-off approval |

## 9. Validation Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `validate_identity_boundary` | product and boundary | Confirm CPC 47822 packaged game software on magnetic or optical media and reject cartridges, downloads, online games and non-game software. | `un-cpc-3-0-structure-2025`; `un-cpc-3-0-explanatory-notes-2025` |
| `validate_reference_mass` | reference flow | Confirm the accepted output is exactly 1 kg and contains the recorded medium plus all declared unit packaging, with shipping packaging excluded. |  |
| `validate_route_exclusivity` | media inputs and rejects | Confirm exactly one optical or magnetic media route is declared and only route-applicable media rows are included. |  |
| `validate_atomic_flows` | inventory | Confirm every included exchange is one atomic flow and conditional components are marked not applicable when absent. |  |
| `validate_energy_allocation` | electricity | Reconcile raw energy records, the 3.6 MJ/kWh conversion, excluded loads and the documented development and batch allocation drivers. | `green-software-foundation-sci-1-1-0` |
| `validate_development_hardware` | development/build hardware | Confirm the materiality assessment covers every development, build, storage, network and test device in the declared release boundary. Each material device shall appear as a separate atomic product exchange with actual identity, upstream LCA link, expected life, time share and resource share; each excluded device shall have a quantitative cut-off basis and approval. | `green-software-foundation-sci-1-1-0` |
| `validate_mass_balance` | media and packaging | Reconcile input, return, accepted-product component and reject masses for the selected route; investigate and disclose residuals. |  |
| `validate_unresolved_uuid` | UUID-empty rows | Confirm unresolved UUID rows remain specifically named and review metadata records the no-exact-candidate findings; do not substitute a proxy UUID. |  |
| `validate_source_traceability` | source-backed rules | Confirm every source id resolves to section 11 and that original-text location and applicability were reviewed. |  |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | Foreground cradle-to-publisher-gate dataset for packaged computer game software |
| downstream_use | Input to product carbon footprints, comparative LCA with equivalent declared media/package configurations, and lifecycle models that add explicit distribution, use and end-of-life stages |
| allowed_use | Declared optical or magnetic physical-media route with matching platform, package configuration, geography, period and allocation metadata |
| excluded_use | Downloads, online games, console cartridges, software-as-a-service, or claims about gameplay/service performance without a separately modeled use-stage functional unit |
| required_metadata | software release; platform; media route and format; package bill of materials; production sites and period; accepted mass; allocation methods; development-hardware device register and materiality assessment; upstream dataset links; cut-offs; unresolved UUIDs |
| required_quality_disclosure | measurement coverage; count-to-mass sampling; electricity allocation; device-level hardware time/resource allocation; route and mass-balance residuals; supplier proxies; excluded loads; conditional rows; data gaps |
| update_trigger | Change of software release build scope, platform, physical-media format, package configuration, replication technology, production geography, allocation basis or material supplier dataset |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `un-cpc-3-0-structure-2025` | official_guidance | United Nations Statistics Division, CPC Version 3.0 Structure, 30 June 2025, https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Structure_30Jun2025.csv | Official CPC 47822 code and English product title |
| `un-cpc-3-0-explanatory-notes-2025` | official_guidance | United Nations Statistics Division, CPC Version 3.0 Explanatory Notes, 30 June 2025, https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Exp_Notes_30Jun2025.pdf | Physical-media packaged-game boundary and explicit exclusions |
| `green-software-foundation-sci-1-1-0` | standard | Green Software Foundation, Software Carbon Intensity Specification, version 1.1.0, https://sci.greensoftware.foundation/ | Software boundary, supporting-resource energy attribution, development-hardware time/resource allocation, functional-unit consistency and calculation traceability |
| `cifa-lca-database-guideline-cpc-appendix` | official_guidance | China International Freight Forwarders Association, LCA/碳足迹数据库构建导则——第六章附录, https://www.carbonfootprint.network/docs/cifa-guidelines/lca-database-guideline/chapter-6-appendix | CPC 2.1 classification-table row 47822, used only to verify the professional Chinese product-title terminology; CPC 3.0 sources govern product identity and boundary |
