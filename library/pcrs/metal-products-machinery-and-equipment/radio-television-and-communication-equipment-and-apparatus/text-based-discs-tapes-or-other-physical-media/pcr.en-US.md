---
pcr_id: pcr.metal-products-machinery-and-equipment.radio-television-and-communication-equipment-and-apparatus.text-based-discs-tapes-or-other-physical-media
language: en-US
status: candidate
content_maturity: authored_methodology
translation_status: canonical
sync_with: pcr.zh-CN.md
---

# Text-based discs, tapes or other physical media

## 1. Scope and Applicability

This PCR covers recorded physical media whose defining content is non-audio text material, including text drawn from periodicals, textbooks, reference works, directories, mailing lists, databases, and similar compilations. Covered carrier examples include CD-ROM, diskette, microfilm, and microfiche. It excludes musical recordings, audiobooks and other audio products, films and other video content, blank media, packaged software, online-only publications or databases, and fee-or-contract reproduction services. The category boundary follows `un-cpc-3-0-explanatory-notes-2025`.

The detailed inventory pattern below is verified for mass-replicated optical discs at the factory gate. It shall not be used as a proxy for magnetic tape, diskette, microfilm, microfiche, or another carrier technology; those routes require their own disclosed, atomic foreground inventories before review. Distribution, use, end-of-life, and sale packaging are outside the default boundary.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.metal-products-machinery-and-equipment.radio-television-and-communication-equipment-and-apparatus.text-based-discs-tapes-or-other-physical-media |
| classification_refs | CPC 3.0: 47692, exact classification context |
| covered_products | Recorded physical media whose defining content is non-audio text material, including CD-ROM, diskette, microfilm, microfiche, directories, mailing lists, databases, and text compilations |
| excluded_products | Musical audio media; audiobooks; non-musical audio media; films and video media; blank media; packaged software; online-only content; reproduction services |
| representative_product | Conforming recorded and labelled text-based optical disc, without sale packaging |
| production_route | Content mastering, polycarbonate injection moulding with stamper, metallic reflective-layer deposition, protective acrylic varnishing, label printing, inspection, and factory-gate release |
| market_state | Finished recorded physical medium at the manufacturing site gate; carrier technology, format, capacity, text-content type, recording method, label system, product mass, and packaging exclusion declared |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Provision of a finished recorded physical medium whose defining content is non-audio text material |
| How much | 1 kg of conforming product at the manufacturing site gate |
| How well | Readable in the declared carrier format, content master and label verified, and accepted under the producer's documented inspection criteria |
| How long or cycle | One manufacturing lot released at the factory gate; no use-life claim is implied |
| reference_flow_link | The functional unit is realized by the single reference product flow below |

| Field | Value |
| --- | --- |
| Reference amount | 1 kg |
| Reference product flow | Text-based discs, tapes or other physical media `744fd6c5-67cd-43f5-b5f4-6bc44a73dd93` |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | carrier technology and format; recording or replication technology; text-content type; nominal capacity or image count as applicable; product mass; label and coating system; recycled-content claim; manufacturing geography; manufacturing period; sale packaging excluded or separately modelled; inspection acceptance basis |

When constructing a foreground data package, the items listed in `Required qualifiers` must be declared in dataset metadata, process notes, reference flow comment, product description, or an equivalent data package field. Missing required qualifiers make the reference flow definition incomplete for that data package.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| `reference_product_mass` | Reference product and all mass-normalized inventory rows | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Measure net product mass after inspection and before sale packaging. Normalize the accepted lot and every inventory amount to exactly 1 kg of conforming reference product. |
| `energy_unit_conversion` | Purchased electricity | Net calorific value `93a60a56-a3c8-11da-a746-0800200b9a66` | MJ | Preserve metered electricity in its source unit and convert kWh to MJ using 1 kWh = 3.6 MJ; do not apply a fuel heating-value conversion. |
| `water_mass_conversion` | Process water | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Prefer direct mass records. If water is metered by volume, record measured volume, temperature or adopted density, and the conversion calculation; do not silently assume a density. |

## 5. System Boundary

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `boundary_factory_gate` | Representative replicated optical-disc route | Include content-master preparation performed by the reporting facility, injection moulding and stamping, reflective-layer deposition, protective varnishing and curing, label printing, inspection, internal handling, purchased electricity, process water, and exported manufacturing scrap through factory-gate release. Exclude distribution, use, end-of-life, and sale packaging unless a declared study extension models them separately. | `us-epa-life-cycle-cd-dvd` |
| `boundary_non_optical_routes` | Magnetic, diskette, microform, or other non-optical carrier routes | Do not substitute the optical-disc inventory pattern. Disclose the carrier route and add one atomic exchange per actual material, energy, water, waste, and direct-emission flow supported by foreground records and route-specific evidence. | `un-cpc-3-0-explanatory-notes-2025` |
| `boundary_capital_goods` | Capital equipment and infrastructure | Exclude moulding machines, metallizers, printing equipment, buildings, and durable stampers from the default foreground boundary; disclose and separately include them only when the study goal requires capital goods or their contribution is material. |  |

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Purchased materials, electricity, and water cross the manufacturing-site gate in the supplier state documented by invoices, delivery records, specifications, and meter boundaries |
| starting_condition_role | Foreground production starts at receipt of inputs; upstream production remains represented by linked supplier or background datasets |
| product_classification_scope | Recorded physical media whose defining content is non-audio text material; carrier technology does not change the content-based product identity |
| recursive_input_rule | If a recorded text-media product in this same category is consumed as an input, record it once as a product input with its own upstream dataset and do not recursively reproduce its manufacturing inventory inside the consuming process |
| upstream_dataset_requirement | Every purchased product input and energy input requires a geographically and technologically representative upstream dataset, or a disclosed proxy with justification |
| disclosure | Declare supplier state, recycled content, carrier format, content-master ownership, site geography, temporal coverage, packaging treatment, excluded capital goods, and every proxy or data gap |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| optical_disc_replication | Optical-disc replication and finishing | required | Applies only to the representative mass-replicated optical-disc route | Foreground production | 1 kg conforming recorded and labelled text-based optical disc output before sale packaging |
| sale_packaging | Sale packaging assembly | excluded_by_default | Include only in a declared extended boundary and add each actual packaging component as its own atomic flow | Conditional packaging extension | Per 1 kg packaged reference product |

### Process: Optical-disc replication and finishing (`optical_disc_replication`)

#### Inputs

##### Product flows

###### Optical-grade polycarbonate substrate resin (`polycarbonate_granulate`)

Polycarbonate granulate enters injection moulding to form the recorded optical-disc substrate.

- Selected flow: Polycarbonate granulate `f4ad7c9a-3141-4c38-b932-45b7e67e05c6`
- Flow property / unit: Mass / kg
- Amount rule: Measured net polycarbonate granulate issued to the lot, less documented unopened returns to stock
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: Per 1 kg conforming recorded text-based optical disc output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material_issues`
- Sources: `us-epa-life-cycle-cd-dvd`

###### Aluminium sputtering-target material (`aluminium_sputtering_material`)

Metallic aluminium consumed from the sputtering target creates the reflective layer. No exact Tiangong flow UUID is confirmed; do not substitute primary-aluminium bar or volume-based semi-finished aluminium candidates.

- Selected flow: Aluminium sputtering-target material
- Flow property / unit: Mass / kg
- Amount rule: Measured target mass consumption assigned to the lot, including documented target change and reclaim accounting
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: Per 1 kg conforming recorded text-based optical disc output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_material_issues`
- Sources: `us-epa-life-cycle-cd-dvd`

###### Protective acrylic varnish (`acrylic_varnish`)

Protective acrylic varnish crosses the process boundary for coating the reflective layer and curing it against damage.

- Selected flow: Acrylic varnish `56a0ef1c-80ef-4e0c-b690-c8aefb4c7e8e`
- Flow property / unit: Mass / kg
- Amount rule: Measured varnish issued to the lot, corrected for documented returned material
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: Per 1 kg conforming recorded text-based optical disc output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material_issues`
- Sources: `us-epa-life-cycle-cd-dvd`

###### Label printing ink (`printing_ink`)

Printing ink crosses the process boundary when the product label is printed on the finished disc.

- Selected flow: Ink `7627af63-d2c2-4245-906f-023847c7739f`
- Flow property / unit: Mass / kg
- Amount rule: Measured total printing ink issued to the lot, net of documented returned ink
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: Per 1 kg conforming recorded text-based optical disc output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material_issues`
- Sources: `us-epa-life-cycle-cd-dvd`

###### Purchased electricity (`electricity`)

Purchased electricity supplies content mastering performed on site, moulding, sputtering, curing, printing, inspection, and allocated auxiliary equipment.

- Selected flow: Electricity `67b723a9-6f63-4802-adca-b52ce7967d47`
- Flow property / unit: Net calorific value / MJ
- Amount rule: Metered purchased electricity assigned to the lot after subtracting separately metered excluded operations
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: Per 1 kg conforming recorded text-based optical disc output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_electricity_meter`
- Sources: `us-epa-life-cycle-cd-dvd`

###### Process water (`process_water`)

Process water is recorded only when it crosses the foreground boundary for manufacturing or equipment-support operations allocated to the lot.

- Selected flow: Process Water `94a04f7e-2d5c-41f0-b182-d54a3b373a02`
- Flow property / unit: Mass / kg
- Amount rule: Metered or invoiced process-water input assigned to included operations and converted to mass under `water_mass_conversion`
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: Per 1 kg conforming recorded text-based optical disc output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_process_water_meter`
- Sources: `us-epa-life-cycle-cd-dvd`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Conforming recorded text-media product (`text_media_product`)

The accepted product output realizes the reference flow after content, readability, label, and mass checks.

- Selected flow: Text-based discs, tapes or other physical media `744fd6c5-67cd-43f5-b5f4-6bc44a73dd93`
- Flow property / unit: Mass / kg
- Amount rule: Exactly 1 kg after normalizing measured conforming lot output
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: 1 kg reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_conforming_output`
- Sources: `un-cpc-3-0-explanatory-notes-2025`

##### Waste flows

###### Polycarbonate manufacturing scrap (`polycarbonate_manufacturing_scrap`)

Rejected substrates, edge or start-up scrap, and other polycarbonate disc-moulding scrap leaving the included process are recorded as one polymer-specific waste exchange. Internally reprocessed material does not cross the process boundary and is reported separately as an internal loop.

- Selected flow: Polycarbonate manufacturing scrap
- Flow property / unit: Mass / kg
- Amount rule: Measured polycarbonate scrap leaving the process, excluding documented internal regrind returned within the same process boundary
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: Per 1 kg conforming recorded text-based optical disc output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_scrap_mass`
- Sources: `us-epa-life-cycle-cd-dvd`

##### Elementary flows

## 7. Allocation and Co-product Handling

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `allocation_subdivision_first` | Shared lines and auxiliary systems | Subdivide or meter the text-media lot directly wherever feasible. For a shared meter that cannot be subdivided, allocate by a documented causal driver such as machine operating time or measured throughput; mass allocation may be used only when the causal relationship is demonstrated. |  |
| `allocation_internal_regrind` | Polycarbonate regrind returned within the same process boundary | Treat internal regrind as an internal loop: do not report it as an exported waste or a second product. Record losses and additional energy once in the processes where they occur. |  |
| `allocation_exported_scrap` | Polycarbonate scrap crossing the foreground boundary | Report exported scrap as a waste flow. Do not credit avoided virgin material inside this foreground process unless a separately declared downstream recycling model applies a consistent substitution method. |  |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_material_issues` | `optical_disc_replication` | Polycarbonate, aluminium target, varnish, and ink inputs | Inventory issue and return records | material identity; lot id; opening stock; issued amount; returned amount; closing stock; target change or reclaim record | Reconcile warehouse issues, line-side stock, returns, and supplier specifications | kg | Each production lot; monthly reconciliation | Same period as reported output | All included lines at the reporting site | Net consumption = opening stock + receipts - closing stock - documented returns; assign shared target consumption by measured lot throughput or operating time | Calibrated scales, stock reconciliation, supplier specification, and exception log |
| `cp_electricity_meter` | `optical_disc_replication` | Purchased electricity input | Meter and operating log | meter id; opening and closing readings; source unit; included equipment; operating hours; excluded load | Read dedicated meters; otherwise reconcile submeter and equipment logs to the site invoice | kWh or MJ | Per lot or shift; monthly invoice reconciliation | At least one representative production period | All included production and auxiliary equipment | Subtract excluded metered loads, allocate residual shared load by documented operating time, convert kWh to MJ, and divide by conforming output mass | Meter calibration, invoice reconciliation, coverage map, and allocation worksheet |
| `cp_process_water_meter` | `optical_disc_replication` | Process-water input | Meter, invoice, and conversion record | meter id; volume or mass; temperature; density source; included operation; discharge linkage | Read dedicated water meter or reconcile included share to invoice; retain conversion inputs | kg or m3 | Per lot or monthly, matching output period | Same period as reported output | Included manufacturing and equipment-support operations | Convert measured volume to mass with documented density and divide included water mass by conforming output mass | Meter calibration, invoice reconciliation, density record, and boundary map |
| `cp_conforming_output` | `optical_disc_replication` | Conforming reference product output | Production and inspection record | lot id; carrier format; gross produced mass; rejected mass; conforming mass; content-master check; readability result; label result | Weigh accepted output and reconcile to inspection and reject logs | kg | Each production lot | Same period as all input and waste records | All included lines at the reporting site | Sum conforming output only and normalize the inventory to exactly 1 kg | Scale calibration, inspection record, reject log, and lot reconciliation |
| `cp_scrap_mass` | `optical_disc_replication` | Polycarbonate scrap output | Waste and internal-loop record | lot id; scrap polymer identity; gross scrap mass; internal regrind mass; exported scrap mass; destination | Segregate and weigh polycarbonate scrap; reconcile internal regrind and off-site dispatch | kg | Each lot or waste dispatch; monthly reconciliation | Same period as reported output | All included moulding and inspection points | Report only scrap crossing the process boundary; reconcile exported scrap plus internal regrind to total measured scrap | Scale calibration, polymer segregation record, regrind log, and waste transfer record |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_reference_normalization` | All inventory rows | Normalized amount = included exchange amount / conforming product mass | Exchange record; conforming output mass from `cp_conforming_output` | Exchange per 1 kg reference product |  |
| `calc_electricity_conversion` | `electricity` | Electricity (MJ) = electricity (kWh) × 3.6 | Metered kWh | MJ of purchased electricity |  |
| `calc_material_net_use` | Material input rows | Net material use = opening stock + receipts - closing stock - documented returns | Stock and issue records | kg material consumed by the lot |  |
| `calc_scrap_boundary` | `polycarbonate_manufacturing_scrap` | Exported scrap = total segregated polycarbonate scrap - verified internal regrind returned within the same process boundary | Scrap scale record; regrind log | kg waste crossing the process boundary |  |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_identity` | Reference product and material rows | Retain carrier format, content type, material grade or formulation, supplier state, and the exact UUID decision where available; do not merge non-optical carrier routes with the optical-disc inventory. | Product specification, supplier specification, content-master record, and UUID audit |
| `dq_temporal` | Foreground inventory | Inputs, outputs, and wastes shall cover the same production period and capture start-up, changeover, rejects, and shutdown effects when they occur. | Dated meter, stock, production, inspection, and waste records |
| `dq_completeness` | Optical-disc replication | Reconcile material issues, conforming output, rejects, internal regrind, exported scrap, electricity, and water for all included lines; disclose any unmetered or excluded operation. | Lot mass balance, utility reconciliation, and boundary checklist |
| `dq_representativeness` | Published dataset | Declare site geography, technology, carrier format, capacity, recording method, label system, supplier state, recycled content, and reference period. | Dataset metadata and primary records |

## 9. Validation Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `validate_reference_identity` | Reference flow | Confirm the output is non-audio text material on a physical carrier, not audio, video, blank media, packaged software, online-only content, or a reproduction service; require all reference-flow qualifiers. | `un-cpc-3-0-explanatory-notes-2025` |
| `validate_inventory_balance` | Process inventory | Require exactly eight declared representative-route rows, with each selected flow atomic; flag any missing UUID only when it is absent from the manifest unresolved register, and confirm total rows equal UUID-matched plus unresolved rows. |  |
| `validate_mass_normalization` | Foreground calculations | Confirm measured conforming output is positive, every amount covers the same period, and every reported exchange is normalized to exactly 1 kg reference product. |  |
| `validate_route_applicability` | Carrier technology | Reject use of the optical-disc inventory pattern as a proxy for tape, diskette, microfilm, microfiche, or another carrier technology lacking a separately verified atomic inventory. | `un-cpc-3-0-explanatory-notes-2025` |
| `validate_packaging_boundary` | Sale packaging | Confirm sale packaging is excluded from the reference product and inventory; if an extended study includes it, require each packaging component to be a separate atomic flow outside this default eight-row pattern. | `us-epa-life-cycle-cd-dvd` |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | Foreground production dataset for the representative mass-replicated optical-disc route |
| downstream_use | Secondary dataset and background dataset for products consuming recorded text-based optical media |
| allowed_use | Factory-gate modelling of recorded, labelled, unpackaged text-based optical discs when the declared carrier, process, geography, period, and material states are representative |
| excluded_use | Magnetic tape, diskette, microfilm, microfiche, other non-optical carriers, blank media, packaged software, online content, distribution, use, end-of-life, or packaged-product claims without separate route-specific modelling |
| required_metadata | Canonical PCR id; carrier technology and format; content type; recording and label technology; capacity; product mass; site geography; reference period; supplier and recycled-content states; packaging boundary; allocation drivers; unresolved UUIDs; proxies |
| required_quality_disclosure | Meter and stock coverage; output and reject reconciliation; internal regrind treatment; utility allocation; data gaps; proxy datasets; uncertainty; excluded operations; inspection criteria |
| update_trigger | Change in carrier technology, substrate, reflective layer, coating or ink system, content-replication process, site or grid, packaging boundary, allocation method, or evidence that materially changes the inventory |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `un-cpc-3-0-explanatory-notes-2025` | official_guidance | United Nations Statistics Division, *CPC Ver. 3.0 Explanatory Notes*, updated 30 June 2025, https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Exp_Notes_30Jun2025.pdf | Official CPC 47692 boundary: non-audio text material on physical media, including CD-ROM, diskette, microfilm, microfiche, directories, mailing lists, databases, and similar compilations |
| `us-epa-life-cycle-cd-dvd` | official_guidance | U.S. Environmental Protection Agency, *Life Cycle of a CD or DVD*, https://nepis.epa.gov/Exe/ZyPURL.cgi?Dockey=P1001UU0.TXT | Optical-disc materials and process decomposition: polycarbonate injection moulding and stamping, aluminium sputtering, acrylic protective lacquer, label printing, and optional plastic or cardboard packaging |
