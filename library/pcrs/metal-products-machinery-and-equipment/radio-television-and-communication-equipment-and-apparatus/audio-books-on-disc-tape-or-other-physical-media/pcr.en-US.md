---
pcr_id: pcr.metal-products-machinery-and-equipment.radio-television-and-communication-equipment-and-apparatus.audio-books-on-disc-tape-or-other-physical-media
language: en-US
status: candidate
sync_with: pcr.zh-CN.md
---

# Audio books on disc, tape or other physical media

## 1. Scope and Applicability

This PCR supports foreground data collection for complete prerecorded audiobook title sets on physical carriers. The product is the recorded copy supplied, including its declared retail enclosure and inserts. A set may contain several numbered carriers belonging to one edition. Digital downloads, streaming, text-only electronic books, musical recordings, other spoken recordings without a book identity, blank media sold as such, and playback equipment are outside the product boundary. The classification distinction follows `un-cpc-3-0-structure-2025`; carrier and master distinctions follow `loc-marc-sound-recording`.

The default foreground module starts with a supplied audio master and manufactured blank carriers, or with purchased prerecorded audiobook sets awaiting final assembly. It covers copying or file loading, verification, set assembly and release. The module is a gate-to-gate production inventory. A cradle-to-gate model must attach documented upstream supply datasets; this PCR does not declare a complete product carbon footprint or a listening-service comparison. The modular boundary is an author-defined collection design implemented by `cp_boundary`, not a claim that a general carbon-accounting standard prescribes this exact boundary.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.metal-products-machinery-and-equipment.radio-television-and-communication-equipment-and-apparatus.audio-books-on-disc-tape-or-other-physical-media |
| classification_refs | CPC 3.0: 47691; classification context, subject to separate mapping acceptance |
| covered_products | Recorded audiobook title sets on optical disc, magnetic tape or solid-state physical media; abridged and unabridged editions separately identified |
| excluded_products | Downloads; streaming; text-only media; music recordings; non-book spoken recordings; blank-media products; players; reproduction services without ownership of the recorded product |
| representative_product | One complete audiobook edition recorded onto its declared number of optical discs and supplied with its measured retail enclosure and insert |
| production_route | Duplication onto purchased CD-R; magnetic cassette duplication; file loading onto a purchased flash cartridge; assembly of purchased prerecorded audiobook sets, including replicated-disc supply |
| market_state | Verified recorded copy at producer dispatch, with edition identity, carrier count and packaging composition declared |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Supply prerecorded spoken-book content as complete physical title sets |
| How much | 1 kg of released title sets, including declared retail enclosures and inserts; equivalent set count is 1 / m_set, where m_set is measured kg per complete set |
| How well | Correct edition, language, abridgement status, chapter sequence and declared playback compatibility; all required carriers present and accepted under the documented verification plan |
| How long or cycle | One production release event; declare D hours of recorded content at normal playback speed; D is not service life or the number of listening cycles |
| reference_flow_link | `audiobook_output`; apply `normalize_release` and retain complete-set counts |

| Field | Value |
| --- | --- |
| Reference amount | 1 |
| Reference product flow | Audio books on disc, tape or other physical media `866db10b-a6d4-4204-93b9-efd59499e22b` |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | Title and edition identifier; language; abridgement status; recorded duration D; carrier format and count per set; recording or loading route; playback compatibility; net carrier mass; retail packaging composition and mass; complete-set mass m_set; released set count; site and geography; reporting period; supplied-master boundary; upstream links; purchased prerecorded input state; reject and rework accounting |

Declare every qualifier in the foreground data package. Mass normalization does not make editions or carrier technologies functionally interchangeable. Collection protocols `cp_release` and `cp_boundary` define the reference evidence; `loc-marc-sound-recording` and `loc-nls-equipment` support recording-format distinctions.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| complete_set_mass | Reference and purchased recorded sets | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Weigh complete sets of each edition and pack configuration. Retain separate carrier and packaging masses. Never normalize to an individual disc when the book requires a multi-disc set. |
| duration_basis | Recording metadata | Duration | h | Record total sequential content at normal speed; do not multiply duration by audio channels or use compressed file size as playback duration. |
| electricity_conversion | Electricity | Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` | MJ | Preserve electricity as an energy exchange; 1 kWh = 3.6 MJ by unit definition. Preserve raw meter units and conversion, without treating electricity as combustion fuel. |
| stock_correction | Material and waste records | Mass | kg | Convert component counts using measured lot-specific mass. Correct receipts and issues for opening and closing stocks, returns and rework; use the same reporting window as accepted output. |

## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Delivered manufactured blank carriers and finished packaging components with a supplied audio master; alternatively delivered prerecorded audiobook sets for final assembly. Record exactly which operations each supplier has completed. |
| starting_condition_role | Foreground collection cut, not an assertion that upstream manufacture or audio production has no burden |
| product_classification_scope | Recorded physical audiobook products; blank media and remote content retain distinct identities |
| recursive_input_rule | Record purchased prerecorded audiobook sets as `purchased_audiobook`, with supplier, format, packaging state and quantity. Link to the supplier-stage dataset and stop local recursion; never link the input to this same process output. |
| upstream_dataset_requirement | For a cradle-to-gate result, link carrier manufacture, supplier replication where used, packaging manufacture and printing, audio-master production, purchased electricity and inbound transport. Document geography, technology, year, allocation and overlap for every link. |
| disclosure | Report gate-to-gate results separately from linked upstream results. Disclose missing suppliers, master-production exclusions, capital-equipment treatment, distribution, listening use, reuse and end-of-life exclusions. |

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| boundary_start | Foreground module | Apply the starting-condition records in `cp_boundary`. Include on-site copying, file loading, verification, assembly, attributable support energy and rejects. A purchased replicated disc includes supplier manufacture; a CD-R input requires local writing and must not substitute for replication. | `nist-cd-dvd-care-2003`; `loc-marc-sound-recording` |
| boundary_master | Audio master | Treat a supplied master file as information defining the copy job, not as a fictitious mass exchange. Record its provenance and production boundary in `cp_boundary`. Any separately modelled recording and editing energy must be assigned to copies without duplicate upstream counting. | `loc-marc-sound-recording` |
| boundary_expansion | Site completeness | Compare the process walk-through with the bill of materials, meters and waste records. Where the site also moulds discs, coats tape, prints, cleans with solvents or uses fuel, expand the foreground package with separately identified atomic exchanges and supporting protocols, or attach a supplier module at the declared cut. No absent row implies zero impact. | |
| boundary_linking | Downstream model | Keep this partial inventory distinguishable from a complete life-cycle study. Include all inputs and attributable operations inside the declared cut; document exclusions and additional upstream modules before claiming broader coverage. | `ghg-product-standard-2011` |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| physical_release | Copying, verification and complete-set assembly | required | Every physical audiobook release; individual carrier inputs are conditional on the actual route | foreground production | 1 kg released complete title sets |

### Process: Copying, verification and complete-set assembly (`physical_release`)

The combined process boundary avoids invented internal material transfers between copying and packing. Separate activity logs still identify each operation. All conditional exchanges retain their own `inclusion_condition`; only demonstrated absence permits exclusion. Manufactured carrier inputs retain their composite identity: do not add their embedded resin or metal again. Sources for route distinctions are `nist-cd-dvd-care-2003`, `loc-marc-sound-recording` and `loc-nls-equipment`.

#### Inputs

##### Product flows

###### Unrecorded CD-R (`blank_cd`)

`inclusion_condition`: Include when the job writes the audiobook onto purchased unrecorded CD-R discs. Record manufactured disc mass including its recording and protective layers; supplier production belongs in the upstream link.

- Selected flow: Unrecorded CD-R
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; unit group: Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Collect this exchange under cp_material, apply stock or allocation corrections, then divide by accepted released mass Q using normalize_release.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg released complete audiobook sets, including declared retail packaging
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_material`
- Sources: `nist-cd-dvd-care-2003`

###### Blank magnetic audio cassette (`blank_cassette`)

`inclusion_condition`: Include when the job duplicates audio onto purchased assembled blank cassettes. Weigh the complete cassette with tape and integral housing; record playing length and tape formulation as supplier qualifiers.

- Selected flow: Blank magnetic audio cassette
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; unit group: Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Collect this exchange under cp_material, apply stock or allocation corrections, then divide by accepted released mass Q using normalize_release.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg released complete audiobook sets, including declared retail packaging
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_material`
- Sources: `loc-marc-sound-recording`

###### Blank USB flash-memory cartridge (`blank_flash`)

`inclusion_condition`: Include when the job loads audio files onto purchased blank USB flash-memory cartridges. Record the complete manufactured cartridge mass and capacity; semiconductor manufacture is upstream, and the cartridge is not a playback device.

- Selected flow: Blank USB flash-memory cartridge
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; unit group: Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Collect this exchange under cp_material, apply stock or allocation corrections, then divide by accepted released mass Q using normalize_release.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg released complete audiobook sets, including declared retail packaging
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_material`
- Sources: `loc-nls-equipment`

###### Audio books on disc, tape or other physical media (`purchased_audiobook`)

`inclusion_condition`: Include when prerecorded audiobook copies are purchased for final assembly or packing. Declare the supplier-stage state and included packaging. Count neither its existing enclosure nor its already completed recording operations a second time.

- Selected flow: Audio books on disc, tape or other physical media `866db10b-a6d4-4204-93b9-efd59499e22b`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; unit group: Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Collect this exchange under cp_material, apply stock or allocation corrections, then divide by accepted released mass Q using normalize_release.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg released complete audiobook sets, including declared retail packaging
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_material`
- Sources: `un-cpc-3-0-structure-2025`

###### Polystyrene compact-disc jewel case (`case`)

`inclusion_condition`: Include when a separately purchased polystyrene jewel case is fitted to the released set. Measure the finished case with its integral tray, not resin feedstock. Exclude enclosures already included in purchased recorded-copy mass.

- Selected flow: Polystyrene compact-disc jewel case
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; unit group: Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Collect this exchange under cp_material, apply stock or allocation corrections, then divide by accepted released mass Q using normalize_release.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg released complete audiobook sets, including declared retail packaging
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_material`

###### Paperboard compact-disc sleeve (`sleeve`)

`inclusion_condition`: Include when a separately supplied paperboard sleeve is used for the declared set configuration. Record finished sleeve mass and printing state. Do not add its embedded paperboard or ink again.

- Selected flow: Paperboard compact-disc sleeve
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; unit group: Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Collect this exchange under cp_material, apply stock or allocation corrections, then divide by accepted released mass Q using normalize_release.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg released complete audiobook sets, including declared retail packaging
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_material`

###### Packaging, paper insert (`booklet`)

`inclusion_condition`: Include when a separately purchased printed paper instruction insert accompanies the set. Measure the finished printed insert. Printing is upstream unless explicitly included within an expanded foreground boundary.

- Selected flow: Packaging, paper insert `b4681b7b-ff95-4df8-804a-fff06aa3c3aa`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; unit group: Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Collect this exchange under cp_material, apply stock or allocation corrections, then divide by accepted released mass Q using normalize_release.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg released complete audiobook sets, including declared retail packaging
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_material`

###### Electricity (`electricity`)

`inclusion_condition`: Include all purchased electricity attributable to the declared copying, verification and assembly module. Use job and support-load records; supplier grid generation is represented only by the electricity supply dataset.

- Selected flow: Electricity `890a70b7-b677-4e2a-8a1b-7d017e0a10ae`
- Flow property / unit: Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ; unit group: Units of energy `93a60a57-a3c8-11da-a746-0800200c9a66`
- Amount rule: Collect this exchange under cp_energy, apply stock or allocation corrections, then divide by accepted released mass Q using normalize_release.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg released complete audiobook sets, including declared retail packaging
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_energy`

##### Waste flows

No exchange of this type is defined for the default starting state; verify additional site exchanges under boundary_expansion.

##### Elementary flows

No exchange of this type is defined for the default starting state; verify additional site exchanges under boundary_expansion.

#### Outputs

##### Product flows

###### Audio books on disc, tape or other physical media (`audiobook_output`)

`inclusion_condition`: Include the accepted complete title sets released during the reporting period. Q includes the declared retail enclosure and insert mass. Rejects and incomplete sets are excluded from accepted Q; normalization to one kilogram is an identity, not an empirical yield.

- Selected flow: Audio books on disc, tape or other physical media `866db10b-a6d4-4204-93b9-efd59499e22b`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; unit group: Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Collect accepted released mass Q under cp_release; normalize_release gives Q / Q = 1 kg.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg released complete audiobook sets, including declared retail packaging
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_release`
- Sources: `un-cpc-3-0-structure-2025`

##### Waste flows

###### Waste recorded optical compact disc (`waste_disc`)

`inclusion_condition`: Include recorded optical discs discarded after failed copying, verification or handling and leaving the boundary. Weigh the composite disc separately from its case. Keep internally retried discs out of transferred waste until actually discarded.

- Selected flow: Waste recorded optical compact disc
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; unit group: Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Collect this exchange under cp_waste, apply stock or allocation corrections, then divide by accepted released mass Q using normalize_release.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg released complete audiobook sets, including declared retail packaging
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_waste`
- Sources: `nist-cd-dvd-care-2003`

###### Waste magnetic audio cassette (`waste_cassette`)

`inclusion_condition`: Include complete audio cassettes rejected and transferred as waste. Measure cassette and tape together as one composite waste object; do not substitute a generic plastic-waste identity.

- Selected flow: Waste magnetic audio cassette
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; unit group: Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Collect this exchange under cp_waste, apply stock or allocation corrections, then divide by accepted released mass Q using normalize_release.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg released complete audiobook sets, including declared retail packaging
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_waste`
- Sources: `loc-marc-sound-recording`

###### Waste USB flash-memory cartridge (`waste_flash`)

`inclusion_condition`: Include failed flash-memory cartridges permanently discarded and transferred to treatment. Separate waste treatment transfers from supplier returns for repair and from reusable cartridges retained on site.

- Selected flow: Waste USB flash-memory cartridge
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; unit group: Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Collect this exchange under cp_waste, apply stock or allocation corrections, then divide by accepted released mass Q using normalize_release.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg released complete audiobook sets, including declared retail packaging
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_waste`
- Sources: `loc-nls-equipment`

###### Packaging waste, paper (`waste_paper`)

`inclusion_condition`: Include discarded printed paper inserts leaving the module as a segregated paper waste stream. Measure by transfer lot and retain contamination and destination information.

- Selected flow: Packaging waste, paper `6b6f1025-cb6a-4c9d-9947-7726c4307a76`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; unit group: Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Collect this exchange under cp_waste, apply stock or allocation corrections, then divide by accepted released mass Q using normalize_release.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg released complete audiobook sets, including declared retail packaging
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_waste`

###### Packaging waste, cardboard (`waste_board`)

`inclusion_condition`: Include damaged or surplus paperboard sleeves discarded and leaving the module. Keep paperboard waste separate from printed-paper inserts and account for waste-storage changes.

- Selected flow: Packaging waste, cardboard `72270223-04b1-4986-a546-94e5a0821317`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; unit group: Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Collect this exchange under cp_waste, apply stock or allocation corrections, then divide by accepted released mass Q using normalize_release.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg released complete audiobook sets, including declared retail packaging
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_waste`

##### Elementary flows

No exchange of this type is defined for the default starting state; verify additional site exchanges under boundary_expansion.

## 7. Allocation and Co-product Handling

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| allocation_subdivide | Shared operations | Use direct job metering and separate purchase records first. If allocation remains necessary, justify a physical causal driver; disclose any alternative allocation basis. | `ghg-product-standard-2011` |
| allocation_copy_jobs | Copying and assembly | Under `cp_energy`, assign measured energy by logged occupied machine time, with setup and idle energy assigned to the jobs that caused them. Use copy count only for demonstrably equal carrier and cycle requirements; audio duration alone is not a universal manufacturing driver. | |
| allocation_master | Shared master-production module | Under `cp_boundary`, disclose how upstream title preparation is assigned across physical and digital releases and over the production population. Retain observed and forecast copy counts separately, test sensitivity to forecasts and prevent double charging through a supplied recorded-copy dataset. | |
| allocation_rejects | Rejects and recycling | Charge failed copying and destroyed sets to accepted output. Track rework without counting it as new production. Keep recycling assumptions consistent with linked datasets; do not give the foreground module an unsupported avoided-virgin-material credit. | `ghg-product-standard-2011` |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cp_boundary | physical_release | Supply boundary and route | Supplier and job record | Supplier; master identifier; edition; input state; completed operations; upstream dataset; geography; year; transport mass and distance; shared master allocation | Trace purchase orders to job instructions and supplier declarations; walk through the site | kg; km; dataset identifier | Each supplier and route change | Same production window as output | Declared site and suppliers | Build an operation-to-module register; count each operation once | Supplier evidence, boundary diagram and documented gaps |
| cp_material | physical_release | Each carrier and packaging component | Stock and weighing record | Row id; lot; component specification; opening stock; receipts; closing stock; returns; issued count; sampled unit mass | Reconcile stores ledger with scales and job bills of materials | kg; item | Each lot and stock close | Complete representative reporting period including setup and failures | Production and packing stores | Net use per row divided by accepted output mass; no average across incompatible editions | Scale checks, supplier specifications, stock reconciliation |
| cp_energy | physical_release | Electricity | Meter and job log | Meter id; start/end reading; unit; job id; run time; setup; idle; support load; allocation driver | Submeter production and packing; reconcile allocated energy against the site bill | kWh; MJ; h | Each campaign, with reporting-period reconciliation | Same reporting period as accepted output | Copying, verification, packing and attributable support | Sum job-assigned energy; convert units; divide by released mass | Meter calibration, bill reconciliation and driver justification |
| cp_release | physical_release | Accepted audiobook sets | Production and quality record | Title; edition; language; abridgement; duration; format; carriers per set; accepted set count; rejected count; net carrier mass; enclosure mass; insert mass; gross set mass; verification result | Weigh complete sets; compare title and track sequence to the authorized master; record playback and file-integrity checks suitable for the format | kg; set; h | Each edition and lot; verification per documented lot plan | Same reporting period as inputs | Final verification and dispatch | Q = sum of accepted set counts times measured set mass for the declared configuration | Weighing sheets, content manifest, test plan and release authorization |
| cp_waste | physical_release | Each rejected carrier and paper waste stream | Waste transfer and rework record | Row id; origin; mass; contamination; rework count; stock change; destination; treatment route | Weigh segregated disc, cassette, flash, printed-paper and paperboard waste separately; reconcile with transfer records | kg; item | Each lot and removal | Same window as production; correct temporary storage | Production, packing and waste storage | Waste leaving the boundary divided by Q; keep internal rework separate | Scale checks, waste receipts and component balance |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| normalize_release | All inventory rows | For each row i, a_i = corrected and allocated A_i / Q; Q is accepted released mass and must be positive. Output is Q / Q = 1 kg by definition. | `cp_material`; `cp_energy`; `cp_release`; `cp_waste` | Exchange per reference flow | |
| set_conversion | Declared output | m_set = carrier mass per set + included enclosure and insert mass per set; equivalent sets per kg = 1 / m_set. Retain measured batch variation rather than rounding to whole sets. | `cp_release` | Auditable set-to-mass conversion | |
| stock_use | Input quantities | Net consumed mass = opening stock + receipts - closing stock - returned unused mass. Reconcile independently with job issues and internal returns. | `cp_material` | Row-specific gross consumed mass | |
| material_balance | All physical inputs and outputs | Reconcile consumed carrier and packaging mass with released set mass, removed waste and work-in-progress change. Investigate differences using scale uncertainty and documented omissions; no universal tolerance is prescribed. | `cp_material`; `cp_release`; `cp_waste` | Component mass reconciliation | |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| quality_identity | Title set | Do not pool editions, abridgements or media formats without quantities and an explicit weighted population. | `cp_release` title manifest and weighing records |
| quality_coverage | Foreground | Use measured or documented primary activity data for controlled operations; state temporal, geographical and technological representativeness. | `cp_boundary`; `cp_energy`; `ghg-product-standard-2011` |
| quality_missing | Missing quantities | Missing, zero and not applicable are distinct states. Resolve missing major quantities before using the package as a complete inventory. | Completeness review against `cp_material` and `cp_waste` |
| quality_ranges | Screening | Collect foreground quantities even when external benchmarks are unavailable. Do not transfer a disc-manufacturing case value to tape or flash media, or treat storage recommendations as yield ranges. | Lot records; `nist-cd-dvd-care-2003` for the distinct purpose of storage guidance |

The NLS-specific specification illustrates multi-cartridge identification, packaging and quality checks; its detailed label dimensions and typography are not imposed on every product by this PCR (`loc-nls-labeling-packaging-2014`).

## 9. Validation Rules

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| validate_reference | Reference output | Require all reference qualifiers, Q greater than zero, the same declared gross retail-set mass basis for normalization and a complete carrier sequence. Test `set_conversion` against weighing records. | |
| validate_routes | Inputs and boundary | Require route-specific inclusion evidence. Purchased recorded copies and local blank-media copying must not describe the same copy twice. Reject a supplier link that creates a self-loop. | |
| validate_energy | Electricity | Reconcile meter totals and allocations, preserve MJ or documented kWh conversion, and exclude upstream grid emissions from direct site-emission rows. | |
| validate_inventory | Exchanges | Require atomic identities, correct direction, flow type and unit. Keep any unconfirmed UUID empty. Reconcile every material input and waste stream with records; omitted additional site exchanges make coverage incomplete. | |
| validate_quality | Product release | Require the edition manifest, duration and declared format-compatible playback or integrity checks. A mass total alone cannot establish a complete, usable audiobook set. | `loc-marc-sound-recording`; `loc-nls-equipment` |
| validate_use_claim | Dataset claims | Label the foreground boundary and upstream-link completeness. Do not present gate-to-gate data as a complete life-cycle result or compare reading or listening services using product mass alone. | `ghg-product-standard-2011` |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | secondary_dataset |
| downstream_use | background_dataset for the declared physical audiobook production module after data review |
| allowed_use | Modelling the specified edition or disclosed production mix at its declared carrier format, supplier cut, site and reporting period |
| excluded_use | Standalone full product carbon footprint; download or streaming inventory; player manufacture; listening-service comparisons; another carrier route without requalification |
| required_metadata | Reference qualifiers; collection window; title-set count and mass conversion; process boundary; supplier and electricity links; route conditions; allocation methods; measured quantities and calculation lineage |
| required_quality_disclosure | Missing upstream data; unresolved flow identities; completeness; representativeness; measurement uncertainty; rework; rejects; master-production treatment and absent external benchmarks |
| update_trigger | New carrier or packaging design; changed supplier, recording route, edition or electricity supply; changed yield or allocation basis; new measured data or verified flow identity |

## 11. Data Sources

| source_id | type | reference | used_for |
| --- | --- | --- | --- |
| `un-cpc-3-0-structure-2025` | `official_guidance` | [United Nations CPC 3.0 structure, 30 June 2025](https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Structure_30Jun2025.csv); accessed 2026-09-09; independence_key: `un-cpc-3.0-structure-30jun2025` | Product identity and exclusions; not quantitative inventory evidence |
| `nist-cd-dvd-care-2003` | `official_guidance` | [Care and Handling of CDs and DVDs: A Guide for Librarians and Archivists, Fred R. Byers, 2003](https://nvlpubs.nist.gov/nistpubs/legacy/sp/NISTspecialpublication500-252.pdf); accessed 2026-09-09; independence_key: `nist-sp-500-252-2003` | Carrier-state and material-boundary distinctions, sections 3.1–3.4 |
| `loc-marc-sound-recording` | `official_guidance` | [MARC 21 Bibliographic Format: 007 Sound Recording](https://www.loc.gov/marc/bibliographic/bd007s.html); accessed 2026-09-09; independence_key: `loc-marc21-bibliographic-007-sound-recording` | Format, physical-carrier and master distinctions, fields 01 and 09 |
| `ghg-product-standard-2011` | `standard` | [WRI/WBCSD Product Life Cycle Accounting and Reporting Standard, 2011](https://ghgprotocol.org/sites/default/files/standards/Product-Life-Cycle-Accounting-Reporting-Standard_041613.pdf); accessed 2026-09-09; independence_key: `wri-wbcsd-product-standard-2011` | General boundary-disclosure, primary-data and allocation principles; chapters 6–9 |
| `loc-nls-equipment` | `official_guidance` | [Library of Congress: Equipment for NLS Materials](https://www.loc.gov/nls/services-and-resources/equipment-for-nls-materials/); accessed 2026-09-09; independence_key: `loc-nls-equipment-for-nls-materials` | Flash-cartridge route and playback-compatibility qualifiers; no device numerical defaults adopted |
| `loc-nls-labeling-packaging-2014` | `standard` | [NLS Specification 420:2014: Labeling and Packaging of Books on Digital Talking Book Cartridges, version 1.3](https://www.loc.gov/nls/wp-content/uploads/2019/09/420-2014final.pdf); accessed 2026-09-09; independence_key: `loc-nls-specification-420-2014-v1.3` | NLS-specific example of complete-copy identification and packaging inspection, sections 1, 3 and 4 |
