---
pcr_id: pcr.metal-products-machinery-and-equipment.radio-television-and-communication-equipment-and-apparatus.other-application-software-packaged
language: en-US
sync_with: pcr.zh-CN.md
status: candidate
---

# Other application software, packaged

## 1. Scope and Applicability

This rule covers the physical, published packaged-product supply of CPC 47829 other application software. The UNSD CPC 3.0 explanatory notes include cross-industry business applications, vertical-market applications, utilities, and application software not elsewhere classified. The representative route is a released software version supplied on a recorded optical disc in a paper retail box. A different physical configuration needs separately identified atomic material rows and a declared bill of materials. Download-only delivery, hosted software services, general productivity/home-use applications, computer games, and operating or network software are outside this product boundary. The declared assessment is cradle-to-gate supply of an accepted physical package; use and end-of-life scenarios require separate modelling. `unsd-cpc-3-2025`

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.metal-products-machinery-and-equipment.radio-television-and-communication-equipment-and-apparatus.other-application-software-packaged |
| classification_refs | CPC 3.0:47829 (classification context, not PCR identity) |
| covered_products | Published cross-industry, vertical-market, utility and other residual application software on physical packaged media |
| excluded_products | CPC 47821 general productivity/home applications; CPC 47822 games; CPC 84342 downloads; hosted services; operating and network software |
| representative_product | Accepted recorded application-software optical disc in a paper retail box |
| production_route | Software design, build and release; procurement of recorded disc and paper box; package assembly and acceptance |
| market_state | Finished, accepted physical retail package at producer gate |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Supply of working, published residual-category application software on physical packaged media |
| How much | 1 kg accepted complete packaged software, with package and licence count reported per kg |
| How well | Declared version, application function, verified readable medium and complete declared retail package |
| How long or cycle | One release at producer gate; expected supported-use period is disclosed, not included in this gate inventory |
| reference_flow_link | `finished_packaged_software` |

| Field | Value |
| --- | --- |
| Reference amount | 1 |
| Reference product flow | Other application software, packaged `48738ce4-0cb1-4fca-8a2e-c77dcf9450e6` |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | application function and target industry; software version and licence/package count per kg; physical medium and package configuration; accepted gate, geography and production period |

The mass basis measures the accepted complete physical package, including its recorded disc and retail box; it is not a claim that software functionality scales with mass. Compare applications only with disclosed function and licence counts.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| `accepted_mass` | reference product and `finished_packaged_software` | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Weigh accepted complete retail packages with a calibrated scale, excluding transport packaging; aggregate only the declared version and configuration. |
| `inventory_basis` | all inventory rows | Mass or energy as declared per row | kg or MJ | Attribute each batch exchange to the declared release and divide by its accepted complete packaged-product mass to express the exchange per 1 kg reference flow; retain the raw batch record. |
| `electricity_unit` | `development_electricity`, `assembly_electricity` | Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` | MJ | Convert metered kWh to MJ with 1 kWh = 3.6 MJ; retain original meter units and allocation. |

## 5. System Boundary

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `gate_boundary` | foreground system | Include release-development activity attributable to the marketed version, procurement of recorded media and paper boxes, physical package assembly, acceptance, and generated rejects through producer gate. Disclose any separately modelled distribution, use or end-of-life scenario. | `itu-l1410-2024` |
| `software_electricity` | development activity | Collect attributable ICT equipment and office electricity for design, build and release; document shared-office allocation and release volume. | `itu-l1410-2024` |

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Accepted published application version, purchased recorded disc and paper box at the declared assembly facility |
| starting_condition_role | Physical package supply after software release and component procurement |
| product_classification_scope | CPC 47829 residual packaged application software; record function and configuration independently of CPC |
| recursive_input_rule | A purchased input that is itself CPC 47829 is represented by its upstream dataset and counted once; disclose recursive dependencies and avoid double counting development work. |
| upstream_dataset_requirement | Include upstream electricity generation, recorded-disc manufacture/recording and paper-box production using traceable supplier or background datasets. |
| disclosure | State gate, release period, package configuration, licence count, supplier coverage, shared-office allocation and any omitted use/end-of-life stage. |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| `software_development` | Software development and release | `required` | All declared physical releases | Foreground release activity and allocated office electricity | per 1 kg accepted finished package |
| `package_assembly` | Physical package assembly and acceptance | `required` | Recorded-disc and paper-box route | Foreground packing, inspection, accepted output and rejects | per 1 kg accepted finished package |

### Process: Software development and release (`software_development`)

#### Inputs

##### Product flows

###### Software development electricity (`development_electricity`)

This electricity is one exchange at the declared foreground boundary; retain its batch evidence and package configuration.

- Selected flow: Electricity `b989a649-ca09-44b8-abab-a069148d0b1e`
- Flow property / unit: Net calorific value / MJ
- Amount rule: Measured project-attributable electricity from development, build and release work.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_development_electricity`
- Sources: `itu-l1410-2024`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

##### Waste flows

##### Elementary flows

### Process: Physical package assembly and acceptance (`package_assembly`)

#### Inputs

##### Product flows

###### Package assembly electricity (`assembly_electricity`)

This electricity is one exchange at the declared foreground boundary; retain its batch evidence and package configuration.

- Selected flow: Electricity `b989a649-ca09-44b8-abab-a069148d0b1e`
- Flow property / unit: Net calorific value / MJ
- Amount rule: Measured electricity for the declared physical packing line.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_assembly_electricity`
- Sources:

###### Recorded software disc (`recorded_disc_input`)

This recorded optical disc with reflective/protective layers is one exchange at the declared foreground boundary; retain its batch evidence and package configuration.

- Selected flow: Recorded optical disc with reflective/protective layers `6ce243c6-bc3c-483d-b91f-5c1da87e6928`
- Flow property / unit: Mass / kg
- Amount rule: Mass of accepted recorded discs delivered to physical package assembly; include upstream recording in the purchased-disc dataset.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_disc_mass`
- Sources:

###### Retail paper box (`paper_box_input`)

This paper box is one exchange at the declared foreground boundary; retain its batch evidence and package configuration.

- Selected flow: Paper box `12d5d744-7725-4dbc-b102-43c80547f777`
- Flow property / unit: Mass / kg
- Amount rule: Mass of paper boxes delivered to the same package configuration.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_box_mass`
- Sources:

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Accepted packaged software (`finished_packaged_software`)

This other application software, packaged is one exchange at the declared foreground boundary; retain its batch evidence and package configuration.

- Selected flow: Other application software, packaged `48738ce4-0cb1-4fca-8a2e-c77dcf9450e6`
- Flow property / unit: Mass / kg
- Amount rule: 1 kg
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_accepted_product_mass`
- Sources:

##### Waste flows

###### Rejected recorded optical disc (`waste_recorded_disc`)

This waste recorded optical disc with reflective/protective layers is one exchange at the declared foreground boundary; retain its batch evidence and package configuration.

- Selected flow: Waste recorded optical disc with reflective/protective layers
- Flow property / unit: Mass / kg
- Amount rule: Measure rejected recorded optical discs when present; report zero only from a documented zero-reject lot.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_disc_reject`
- Sources:

###### Rejected paperboard box (`waste_cardboard_box`)

This packaging waste, cardboard is one exchange at the declared foreground boundary; retain its batch evidence and package configuration.

- Selected flow: Packaging waste, cardboard `72270223-04b1-4986-a546-94e5a0821317`
- Flow property / unit: Mass / kg
- Amount rule: Measure rejected paperboard retail boxes when present; report zero only from a documented zero-reject lot.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_box_reject`
- Sources:

##### Elementary flows

## 7. Allocation and Co-product Handling

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `release_allocation` | shared software design and office activities | First subdivide measured release-specific work. Allocate genuinely shared work to the marketed release using documented staff time, computing use or another causal physical driver; if unavailable use disclosed organizational or economic allocation and test material sensitivity. Divide the release total by accepted physical package mass for the reporting period. | `itu-l1410-2024` |
| `component_allocation` | purchased media and boxes | Use supplier-specific component datasets where possible; allocate shared packaging operations by recorded machine time or accepted batch output mass, and document rejected outputs separately. | `itu-l1410-2024` |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_development_electricity` | `software_development` | development electricity | project meter and allocation log | release id; meter kWh; project share; accepted product mass | Read calibrated meters or invoices and allocate documented development equipment and office use to the released version. | MJ | each release | declared release period | development offices | per 1 kg reference flow | meter records; allocation log |
| `cp_assembly_electricity` | `package_assembly` | assembly electricity | line meter | batch id; meter kWh; accepted product mass | Read packing-line meter or attributable submeter. | MJ | each batch | declared production period | packaging facility | per 1 kg reference flow | meter and batch logs |
| `cp_disc_mass` | `package_assembly` | recorded disc input | supplier delivery and scale | batch id; accepted disc mass; accepted product mass | Weigh or use verified supplier mass records for recorded discs crossing assembly input. | kg | each batch | declared production period | packaging facility | per 1 kg reference flow | scale certificate; supplier record |
| `cp_box_mass` | `package_assembly` | paper box input | bill of materials and scale | batch id; paper box mass; accepted product mass | Weigh the declared paper-box component or reconcile supplier and bill-of-material mass. | kg | each batch | declared production period | packaging facility | per 1 kg reference flow | scale certificate; bill of materials |
| `cp_accepted_product_mass` | `package_assembly` | accepted packaged software | accepted lot weighing | batch id; version; configuration; package count; licence count; accepted net mass | Weigh accepted complete retail packages on a calibrated scale without transport packaging. | kg | each batch | declared production period | packaging facility | per 1 kg reference flow | scale certificate; acceptance log |
| `cp_disc_reject` | `package_assembly` | rejected recorded disc | reject log and scale | batch id; rejected recorded disc mass; accepted product mass | Weigh rejected recorded discs and reconcile issue, return and accepted counts. | kg | each batch | declared production period | packaging facility | per 1 kg reference flow | reject and scale log |
| `cp_box_reject` | `package_assembly` | rejected paperboard box | reject log and scale | batch id; rejected box mass; accepted product mass | Weigh rejected paperboard retail boxes and reconcile issue, return and accepted counts. | kg | each batch | declared production period | packaging facility | per 1 kg reference flow | reject and scale log |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `batch_basis` | all inventory rows | Divide attributable batch exchange by accepted complete packaged-product mass in kg; accepted reference output equals 1 kg by definition. | attributable exchange; accepted complete packaged-product mass; relevant collection protocol | exchange per 1 kg reference flow | `itu-l1410-2024` |
| `electricity_conversion` | electricity inputs | Multiply metered kWh by 3.6 to obtain MJ before normalization. | metered kWh; allocation record | MJ electricity | |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `release_traceability` | development and output | Match version, release period, physical configuration, licences and accepted mass across all records. | release manifest; acceptance and mass logs |
| `mass_reconciliation` | assembly | Reconcile incoming recorded disc and paper-box mass with accepted packages, recorded rejects and stock change; explain residual. | bill of materials; stock and reject logs |
| `source_coverage` | upstream and shared activity | Report supplier dataset coverage, allocation driver, geography, technology, period and omissions. | supplier records; allocation workbook |

## 9. Validation Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `identity_check` | reference output | Confirm CPC 47829 scope, declared version and physical configuration, exact public product UUID, and 1 kg accepted complete package mass. | `unsd-cpc-3-2025` |
| `inventory_check` | all inventory rows | Confirm atomic flow identity, source protocol and per-1-kg basis; unresolved waste-disc UUID blocks automated flow linkage until individually resolved. | |
| `balance_check` | package assembly | Check accepted input, rejects and stock changes against accepted package mass; disclose unexplained difference and shared-activity allocation. | `itu-l1410-2024` |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | Foreground gate dataset for physical packaged application software |
| downstream_use | `secondary_dataset`; `background_dataset` when product scope and configuration match |
| allowed_use | Cradle-to-gate modelling for the declared packaged release and transparent comparisons with equivalent function and licence counts |
| excluded_use | Download-only delivery, hosted software service, or full-life-cycle comparison without added use and disposal scenarios |
| required_metadata | Version; function; geography; reporting period; licence and package count per kg; medium; retail box; facility; allocation driver |
| required_quality_disclosure | Primary-data coverage; supplier datasets; metering and weighing; rejects; shared-office allocation; unresolved flow identities and range evidence gaps |
| update_trigger | Material change in version, package configuration, assembly technology, supplier, geography or shared-activity allocation |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `unsd-cpc-3-2025` | `official_guidance` | UNSD, CPC Ver. 3.0 Explanatory Notes, 30 June 2025, p. 263, subclass 47829; https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Exp_Notes_30Jun2025.pdf | Category inclusion and exclusions |
| `itu-l1410-2024` | `standard` | ITU-T Recommendation L.1410 (11/2024), Annex A and clauses 7.3.3.1–7.3.3.4; https://www.itu.int/rec/dologin_pub.asp?id=T-REC-L.1410-202411-I%21%21PDF-E&lang=s&type=items | Software-development activity, primary data, shared-office allocation and disclosure |
