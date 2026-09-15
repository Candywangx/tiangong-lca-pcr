---
pcr_id: pcr.metal-products-machinery-and-equipment.radio-television-and-communication-equipment-and-apparatus.other-non-musical-audio-discs-and-tapes
language: en-US
status: candidate
sync_with: pcr.zh-CN.md
---

# Other non-musical audio discs and tapes

## 1. Scope and Applicability

This PCR applies to finished, recorded physical discs and magnetic tapes whose principal payload is non-musical audio and which are supplied at the recording or replication facility gate. Covered content includes spoken-word programmes other than audiobooks, instructional or training audio, lectures, guided audio, announcements, and sound-effect or ambient-sound collections when supplied on a physical disc or tape.

The PCR excludes musical recordings; audiobooks; text-based media; video media; packaged software; blank or unrecorded media sold as the final product; content-creation and original-master production services; playback or recording equipment; and downloadable, streamed, or otherwise non-physical audio. Retail or distribution packaging is outside the reference product; a study that includes it shall add each actual packaging component as a separate foreground flow.

Optical-disc and magnetic-tape routes are alternatives. A data package shall declare one format and include only the route-specific blank medium and reject rows that apply; it shall not construct a format-by-packaging or other Cartesian inventory.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.metal-products-machinery-and-equipment.radio-television-and-communication-equipment-and-apparatus.other-non-musical-audio-discs-and-tapes |
| classification_refs | CPC 3.0: 47699, Other non-musical audio discs and tapes (`un-cpc-3-0-structure-2025`) |
| covered_products | Finished recorded optical discs or magnetic tapes whose principal payload is non-musical audio other than audiobooks |
| excluded_products | Musical audio media; audiobooks; text-based, video, or software media; unrecorded media; digital-only audio; recording or playback equipment; retail and distribution packaging |
| representative_product | A quality-approved recorded physical audio disc or magnetic tape ready to leave the recording or replication facility |
| production_route | Receipt of a verified digital or physical audio master and compatible unrecorded medium; route-specific recording or replication; verification; finishing; release at facility gate |
| market_state | Finished recorded medium, quality approved, before optional retail or distribution packaging |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Provide non-musical recorded audio on a declared physical disc or magnetic-tape format |
| How much | 1 kg net mass of finished recorded media |
| How well | Compatible with the declared playback format and passing the producer's documented content-integrity and playback checks |
| How long or cycle | One factory-gate production output; recorded playing duration and storage capacity are declared qualifiers, not normalization denominators |
| reference_flow_link | `finished_non_musical_audio_media` |

| Field | Value |
| --- | --- |
| Reference amount | 1 kg |
| Reference product flow | Other non-musical audio discs and tapes `c034b78e-2758-4e41-a0dd-6932715d2beb` |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | physical format and format specification; optical-disc or magnetic-tape route; recorded-content category; playing duration; storage capacity where applicable; recording or replication technology; site and geography; production period; net product mass; quality-control acceptance criteria; packaging exclusion or separately modelled packaging statement |

When constructing a foreground data package, the items listed in `Required qualifiers` must be declared in dataset metadata, process notes, reference flow comment, product description, or an equivalent data package field. Missing required qualifiers make the reference flow definition incomplete for that data package.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| `reference_mass` | finished reference product and mass-based material or reject rows | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Determine net mass with calibrated scales after recording, verification, and finishing. Exclude retail and distribution packaging from the reference product mass. |
| `count_to_mass` | item-count production records | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Convert counts to mass only from a measured, format-specific mean net mass for the same production campaign; retain count, sampled mass, sample size, and calculation. |
| `electricity_energy` | purchased electricity | Net calorific value `93a60a56-a3c8-11da-a746-0800200b9a66` | MJ | Record delivered electricity for the included campaign. Preserve metered kWh and convert with 1 kWh = 3.6 MJ when the projected inventory is expressed in MJ. |

## 5. System Boundary

The foreground gate begins with receipt of a verified audio master and compatible unrecorded optical or magnetic medium. It includes recording or replication, content and playback verification, route-specific finishing performed at the facility, and handling of off-spec recorded media up to the point where waste crosses the foreground boundary. Upstream production and delivery of unrecorded media and electricity are represented by linked background datasets.

Content creation and original-master production, capital equipment, employee travel, retail or distribution packaging, outbound distribution, playback, storage during use, and end-of-life after sale are outside this gate unless a study explicitly expands its scope and reports them separately.

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | A verified audio master and format-compatible unrecorded optical medium or unrecorded magnetic medium are available at the recording or replication facility |
| starting_condition_role | Foreground production starts at recording or replication; creation of the recorded programme and production of blank media are upstream conditions |
| product_classification_scope | Finished physical media in the semantic boundary aligned to CPC 3.0 code 47699; sibling audiobook, text, music, video, software, and unrecorded-media categories are excluded |
| recursive_input_rule | A previously recorded CPC 47699 medium reused as a production input shall be recorded as that concrete input with supplier dataset and purpose; it shall not be relabelled as blank media or silently recursed into the reference output |
| upstream_dataset_requirement | Use geography-, technology-, format-, and delivery-compatible datasets for unrecorded media and delivered electricity; disclose any proxy and its materiality |
| disclosure | Declare format, route, master hand-off point, recording or replication technology, included finishing steps, reject treatment hand-off, packaging treatment, geography, site, and production period |

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `boundary_rule_1` | foreground gate | Include all recording or replication, verification, and on-site finishing operations required to turn the declared unrecorded medium into accepted finished media. |  |
| `boundary_rule_2` | upstream supplies | Link each unrecorded-medium and electricity input to a compatible upstream dataset and do not import upstream emissions again as direct foreground exchanges. |  |
| `boundary_rule_3` | alternative formats | Model optical and magnetic routes as alternatives. Include only the blank-medium and reject rows applicable to the declared physical format. |  |
| `boundary_rule_4` | packaging | Exclude retail and distribution packaging from the reference product mass; where the study includes packaging, add each actual packaging component as an atomic foreground flow and state the expanded boundary. |  |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| `recording_finishing` | Recording, verification, and finishing of physical audio media | required | Always included; route-specific rows apply only to the declared optical-disc or magnetic-tape format | Foreground production | 1 kg accepted finished recorded media |

### Process: Recording, verification, and finishing of physical audio media (`recording_finishing`)

#### Inputs

##### Product flows

###### Unrecorded optical medium for the optical-disc route (`unrecorded_optical_media`)

Record the net mass of compatible unrecorded optical media entering the included campaign. This row applies only when the declared finished format is an optical disc.

- Selected flow: Optical media, not recorded `714535e8-24d4-44bf-8496-4837f638fdd4`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: measured campaign input mass of unrecorded optical media
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg accepted finished recorded media for the optical-disc route
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_campaign_mass_balance`

###### Unrecorded magnetic medium for the magnetic-tape route (`unrecorded_magnetic_media`)

Record the net mass of compatible unrecorded magnetic media entering the included campaign. This row applies only when the declared finished format is a magnetic tape.

- Selected flow: Magnetic media, not recorded, except cards with a magnetic stripe `40bcd8b1-541d-4314-9e57-fc1250fd692e`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: measured campaign input mass of unrecorded magnetic media
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg accepted finished recorded media for the magnetic-tape route
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_campaign_mass_balance`

###### Delivered electricity for recording and verification (`recording_electricity`)

Record delivered electricity consumed by recording or replication, verification, finishing, and attributable auxiliary equipment during the included campaign.

- Selected flow: Electricity `890a70b7-b677-4e2a-8a1b-7d017e0a10ae`
- Flow property / unit: Net calorific value `93a60a56-a3c8-11da-a746-0800200b9a66` / MJ
- Amount rule: metered campaign electricity less documented non-production loads, allocated under section 7 when a shared meter cannot be subdivided
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg accepted finished recorded media
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_campaign_electricity`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Accepted finished non-musical audio media (`finished_non_musical_audio_media`)

Record only media that pass the declared content-integrity and playback acceptance checks and meet the product boundary in section 1.

- Selected flow: Other non-musical audio discs and tapes `c034b78e-2758-4e41-a0dd-6932715d2beb`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: exactly 1 kg after campaign normalization
- Value mode: Fixed value (`fixed_value`)
- Specificity: Generic (`generic`)
- Normalization basis: PCR reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_campaign_mass_balance`

##### Waste flows

###### Off-spec recorded optical media (`optical_media_reject`)

Record the mass of recorded optical media rejected by content-integrity, playback, or finishing checks when the optical-disc route is used. Keep the downstream waste treatment as a separate linked process or dataset.

- Selected flow: Off-spec recorded optical media
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: measured or mass-balance-reconciled optical-route reject mass crossing the foreground boundary
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg accepted finished recorded media for the optical-disc route
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_campaign_mass_balance`

###### Off-spec recorded magnetic media (`magnetic_media_reject`)

Record the mass of recorded magnetic media rejected by content-integrity, playback, or finishing checks when the magnetic-tape route is used. Keep the downstream waste treatment as a separate linked process or dataset.

- Selected flow: Off-spec recorded magnetic media
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: measured or mass-balance-reconciled magnetic-route reject mass crossing the foreground boundary
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg accepted finished recorded media for the magnetic-tape route
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_campaign_mass_balance`

##### Elementary flows

## 7. Allocation and Co-product Handling

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `allocation_rule_1` | shared equipment and meters | Avoid allocation by recording route-, line-, campaign-, or time-resolved activity. Subtract documented idle and non-production loads before normalization. |  |
| `allocation_rule_2` | multiple recorded-media products in one campaign | When subdivision is not practicable and products use the same operations, allocate shared burdens by accepted finished-product mass; separately measured route-specific inputs and rejects remain directly assigned. |  |
| `allocation_rule_3` | recovered rejects or saleable secondary outputs | Apply no avoided-burden credit inside the foreground inventory. Report the measured output mass, destination, and any external recycling or substitution scenario separately. |  |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_campaign_mass_balance` | `recording_finishing` | unrecorded medium input, accepted finished product, and route-specific rejects | weighbridge, calibrated scale, production count, and reject log | campaign_id; format; route; input_mass_kg; accepted_count; accepted_sample_mass_kg; accepted_output_mass_kg; optical_reject_mass_kg; magnetic_reject_mass_kg; waste_destination | Weigh batch inputs and rejects; weigh accepted output directly or convert counts using a campaign-specific measured mean mass | kg | each campaign, with every reject batch logged | representative production period covering normal formats and operating conditions | each recording or replication site and line | Sum route-specific masses by campaign; reconcile input, accepted output, retained work in progress, and rejects; normalize to 1 kg accepted output | current calibration record; signed production and reject logs; count-to-mass sample record; documented reconciliation |
| `cp_campaign_electricity` | `recording_finishing` | delivered electricity | revenue meter, submeter, equipment logger, and production schedule | meter_id; reading_start_kWh; reading_end_kWh; logger_kWh; campaign_start; campaign_end; downtime_kWh; non_production_kWh; accepted_output_mass_kg | Prefer campaign submetering; otherwise reconcile meter readings to operating logs and apply the allocation rules | kWh retained and MJ projected | each campaign or continuous logging aggregated by campaign | same production period as the mass balance | each site and included line | Net campaign kWh = end minus start minus documented downtime and non-production use; divide by accepted output kg; multiply by 3.6 for MJ/kg | meter specification or calibration evidence; timestamped readings; production schedule; allocation record |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_normalize_mass` | each mass-based input or reject row | normalized kg/kg = campaign row mass (kg) / accepted finished-product mass (kg) | route-specific input or reject mass; accepted output mass | kg per 1 kg reference product |  |
| `calc_count_to_mass` | accepted output recorded by count | accepted output mass = accepted count × measured campaign-specific mean net mass per item | accepted count; sampled net item masses; sample size | accepted finished-product mass in kg |  |
| `calc_electricity` | `recording_electricity` | normalized MJ/kg = net attributable campaign electricity (kWh) × 3.6 / accepted finished-product mass (kg) | meter readings; documented exclusions; allocation record; accepted output mass | MJ per 1 kg reference product |  |
| `calc_mass_reconciliation` | campaign mass balance | Compare applicable blank-medium input mass with accepted output, route-specific reject output, and documented work-in-progress change; investigate and disclose unexplained imbalance | input mass; accepted output; applicable reject mass; work-in-progress change | reconciled campaign mass statement |  |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_identity` | reference product | Demonstrate that content is non-musical audio, is not an audiobook or excluded sibling product, and is supplied on the declared physical format. | product specification; content classification; format identifier; quality-release record |
| `dq_route` | route-specific inventory | Include exactly one applicable blank-medium row and its matching reject row; justify any zero reject result from complete logs. | bill of materials; route declaration; production and reject logs |
| `dq_measurement` | mass and electricity | Use calibrated or specification-controlled instruments and retain raw readings and conversions. | calibration or meter specification; raw readings; calculation worksheet |
| `dq_temporal` | all foreground rows | Use one consistent production period and disclose shutdowns, rework, abnormal campaigns, and data gaps. | production calendar; campaign log; gap register |
| `dq_completeness` | foreground gate | Reconcile accepted output, applicable blank-medium input, route-specific rejects, and electricity to the declared campaign and facility boundary. | signed completeness checklist; mass reconciliation; meter reconciliation |
| `dq_background` | upstream datasets | Document geography, technology, product state, delivery boundary, age, and proxy limitations for every linked blank-medium and electricity dataset. | dataset metadata and proxy assessment |

## 9. Validation Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `validation_rule_1` | product identity | Reject a data package whose output is music, an audiobook, text-based media, video, software, unrecorded media, or digital-only audio. | `un-cpc-3-0-structure-2025` |
| `validation_rule_2` | reference flow | Require exactly 1 kg net accepted finished-media output after normalization and require all reference-flow qualifiers. |  |
| `validation_rule_3` | route consistency | Require either the optical input and optical reject rows or the magnetic input and magnetic reject rows; reject a mixed route unless the dataset reports separately normalized route shares and inventories. |  |
| `validation_rule_4` | UUID and units | Require state-100 UUID identity for each UUID-bearing row, Mass in kg for mass rows, and delivered electricity in MJ after documented kWh conversion. |  |
| `validation_rule_5` | inventory completeness | Require campaign-aligned accepted output, applicable blank-medium input, electricity, reject accounting, calculation records, and treatment destination disclosure. |  |
| `validation_rule_6` | packaging | Confirm that retail and distribution packaging is excluded from reference product mass or is represented by separate atomic flows under an explicitly expanded boundary. |  |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | Foreground production dataset for recorded non-musical audio media at the recording or replication facility gate |
| downstream_use | `secondary_dataset`; `background_dataset` |
| allowed_use | Format- and route-compatible cradle-to-facility-gate modelling when required qualifiers, upstream datasets, allocation, and data-quality disclosures are available |
| excluded_use | Music, audiobooks, text, video, software, blank media, downloadable or streamed audio, playback service, distribution, use, or end-of-life without additional processes |
| required_metadata | PCR id and version; format; route; content category; playing duration; capacity where applicable; technology; site; geography; production period; net product mass; master hand-off point; finishing scope; packaging treatment; allocation method; reject destinations; background-dataset identities |
| required_quality_disclosure | Instrument status; temporal coverage; campaign representativeness; count-to-mass sampling; meter allocation; mass and electricity reconciliation; data gaps; route applicability; proxy limitations; unresolved waste-flow UUIDs |
| update_trigger | Change in physical format, recording or replication technology, site, electricity supply, master hand-off, finishing scope, packaging boundary, allocation method, reject treatment, or a material shift in measured input, electricity, or reject intensity |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `un-cpc-3-0-structure-2025` | official_guidance | United Nations Statistics Division, CPC Version 3.0 Structure, 30 June 2025, https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Structure_30Jun2025.csv | Official CPC 47699 product-classification identity and separation from CPC 47691 and 47692 sibling categories |
