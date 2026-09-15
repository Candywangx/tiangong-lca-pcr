---
pcr_id: pcr.metal-products-machinery-and-equipment.radio-television-and-communication-equipment-and-apparatus.parts-for-the-goods-of-subclasses-47321-47323-and-47330
language: en-US
status: candidate
sync_with: pcr.zh-CN.md
---

# Parts for the goods of subclasses 47321, 47323 and 47330

## 1. Scope and Applicability

This PCR addresses manufacture of dedicated parts for sound recording/reproduction equipment, video recording/reproduction equipment, and microphones and their stands, loudspeakers, headphones or audio amplifiers. The distinguishing boundary is an identifiable part supplied for incorporation into that equipment, with its own part number, drawing revision and acceptance specification. It is not a PCR for complete equipment or for general-purpose electronic components merely because their customer makes audio equipment. The official classification establishes the parent equipment families [un-cpc-3-0-structure-2025; un-cpc-3-0-notes-2025].

The representative route is manufacture of a bobbinless, epoxy-bound copper loudspeaker voice coil: winding purchased insulated wire, applying a formulated adhesive, curing, removing reusable tooling, testing and packing. The technical publication demonstrates this type of route; it does not establish industry prevalence, an environmental benchmark, an obligatory design [us20170223463a1-voice-coil].

Recorder mechanisms, amplifier-specific populated boards, retained-former coils and moulded acoustic parts require their own drawing-based bill of materials, process conditions and atomic exchanges before a foreground dataset is usable. Apply the common collection, boundary and allocation rules here, then instantiate only the operations actually performed. Do not transfer the representative coil's bill of materials or quantities to another part type. This is a category methodology with one worked process structure, not a claim that every part uses coil winding.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.metal-products-machinery-and-equipment.radio-television-and-communication-equipment-and-apparatus.parts-for-the-goods-of-subclasses-47321-47323-and-47330 |
| classification_refs | CPC 3.0: 47402; classification identity only; acceptance is maintained separately |
| covered_products | Dedicated manufactured parts for sound/video recording or reproducing apparatus and electroacoustic equipment, identifiable by intended parent equipment and part drawing |
| excluded_products | Complete recorders, loudspeakers, microphones, microphone stands and amplifiers; general-purpose bare printed circuits, integrated circuits, resistors, capacitors, wire and magnets sold as those products; radio/television reception and telecommunications parts outside this parent-equipment scope; recorded media; repair services |
| representative_product | Bobbinless epoxy-bound copper loudspeaker voice coil, cured, tested, with integral winding ends and without diaphragm or magnet assembly |
| production_route | Insulated-wire winding and epoxy adhesive application; electrical curing and demoulding; electrical/dimensional inspection and packing |
| market_state | New accepted part at the part manufacturer's dispatch gate; primary and shipping packaging reported separately from net part mass |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Accepted bobbinless epoxy-bound copper loudspeaker voice coil for incorporation into a specified loudspeaker |
| How much | 1 kg net accepted coils of one part number and revision; report corresponding piece count |
| How well | Conforms to the declared drawing, winding resistance at its specified test temperature, insulation and dimensional acceptance criteria; criteria and measured results are foreground records |
| How long or cycle | One manufacturing and acceptance cycle; no final loudspeaker operating life is assigned to this intermediate product |
| reference_flow_link | `accepted_voice_coil` |

| Field | Value |
| --- | --- |
| Reference amount | 1 |
| Reference product flow | Bobbinless epoxy-bound copper loudspeaker voice coil |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | part number; drawing revision; intended parent equipment; conductor composition and insulation; wire diameter and turns; coil geometry; adhesive formulation and supplied state; curing route; bobbinless construction; net part mass and piece count; resistance test temperature and acceptance criteria; insulation test method; reject/rework treatment; packaging configuration; production site and country; record period; purchased-versus-made stages; upstream dataset boundary |

Declare every required qualifier in the data package. The reference quantity is a normalization convention, not a measured yield or an empirical range. A different part requires a different concrete reference exchange and its own performance qualifiers; a generic “equipment parts” exchange cannot replace it.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| `net_reference_mass` | accepted output | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Weigh accepted dry cured parts without packaging, temporary sleeves or rejected units. Record calibrated balance resolution and tare. |
| `piece_mass_conversion` | piece-based production and packing | Mass | kg | Convert counts using measured mean mass for the same part revision and lot. Do not use a universal coil or box mass. Retain sample count and variation. |
| `energy_conversion` | electricity | Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` | MJ | Preserve meter kWh and normalize with 1 kWh = 3.6 MJ. Do not treat electrical energy as fuel mass or add grid emissions as direct site emissions. |
| `wire_and_adhesive_basis` | winding inputs | Mass | kg | Wire quantity includes its supplied insulation. Adhesive quantity is total supplied formulation; record solids and any volatile constituents separately. Do not duplicate resin or insulation already included in purchased inputs. |
| `batch_matching` | all inventory rows | Mass or energy as specified on the row | kg or MJ | Use a common closed production period, account for work in progress and rework, and divide allocated exchange totals by accepted net mass M. Require M greater than zero. |

## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Purchased insulated winding wire and formulated epoxy adhesive received at the part factory; reusable winding sleeves are tooling, not retained product in the representative route |
| starting_condition_role | Foreground entry condition for intermediate-part manufacture |
| product_classification_scope | Dedicated audio/video and electroacoustic equipment parts; related general components retain their own identity |
| recursive_input_rule | Record a purchased voice coil or other same-category intermediate at its actual incoming state with supplier identity and upstream dataset. Include only subsequent in-house operations; never expand the same input recursively or count its embodied production twice. |
| upstream_dataset_requirement | Link purchased materials, electricity, packaging, transport and exported-waste treatment to boundary-compatible upstream/downstream support datasets; disclose geography, technology, time and allocation. A gate-to-gate foreground package alone is not a cradle-to-gate result. |
| disclosure | Declare made/bought stages, internal transfer links, subcontract operations, transport legs, waste destinations, tooling lifetime, utilities, exclusions and intended downstream application. |

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| `boundary_part_gate` | system model | Provide a clearly identified intermediate-part production inventory. A cradle-to-gate result includes upstream supply and production-waste treatment and excludes final-equipment use and end of life; justify this partial boundary. | `wri-wbcsd-product-standard-2011` |
| `boundary_processes` | representative foreground | Include wire winding, adhesive application, actual curing energy, demoulding, inspection, failed tests, rework and packing. Diaphragm attachment and magnet assembly belong to downstream loudspeaker production in this reference state. | `us20170223463a1-voice-coil` |
| `boundary_conditional_exchanges` | route instantiation | Verify all routes against the actual bill of materials, safety data sheets and site records. Add each used solvent, its species-specific release, cleaning agent, fuel, water stream, tooling replacement and subcontract service as a separate exchange; do not assume zero because it is absent from the representative cards. The representative recipe is supplied solvent-free and electrically cured; substantiate that condition. | |
| `boundary_tooling` | reusable sleeves and equipment | Record tooling material, replacement count, reuse life and output served. Include attributable replacement burdens or document and justify exclusion. Do not count a removable sleeve as retained coil mass. | `us20170223463a1-voice-coil` |
| `boundary_support` | logistics and waste treatment | Collect received mass, distance, transport mode, load allocation and waste transfer destination. Attach transport and treatment datasets at their actual boundaries, without duplicating services already included in supplier datasets. | |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| `winding` | Winding and adhesive application | conditional | Representative bobbinless coil is wound in the foreground | foreground production | wound uncured coil mass |
| `curing` | Electrical curing and demoulding | conditional | Representative wound coils are cured in the foreground | foreground conditioning | cured untested coil mass |
| `release` | Inspection and packing | required | All manufactured parts undergo declared acceptance; detailed cards below instantiate the voice-coil route | foreground release | 1 kg accepted net coils |

Internal transfer pairs are conservation links and must cancel when processes are aggregated. Waste cards are conditional on the specific stream arising. Packed output mass always means net coil mass; packaging burdens remain on their own input rows. Additional part routes require validated process-map and atomic-inventory instantiation before dataset use.

### Process: Winding and adhesive application (`winding`)

#### Inputs

##### Product flows

###### Insulated copper winding wire (`winding_wire`)

Inclusion condition (inclusion_condition): When winding the representative coil. This condition determines only whether this concrete exchange is present.

- Selected flow: Insulated copper winding wire
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; unit group `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Actual supplied wire consumed, including coating and winding ends; Q_wire/M
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net accepted coil output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_material`
- Sources: `us20170223463a1-voice-coil`

###### Formulated heat-curing epoxy adhesive (`epoxy_adhesive`)

Inclusion condition (inclusion_condition): When separately supplied adhesive is applied; do not duplicate pre-coated bonding layers. This condition determines only whether this concrete exchange is present.

- Selected flow: Formulated heat-curing epoxy adhesive
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; unit group `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Weighed complete supplied adhesive formulation consumed; Q_adhesive/M; solvent-free condition must be demonstrated
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net accepted coil output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_material`
- Sources: `us20170223463a1-voice-coil`

###### Electricity (`winding_electricity`)

Inclusion condition (inclusion_condition): When winding and adhesive application use electricity. This condition determines only whether this concrete exchange is present.

- Selected flow: Electricity `890a70b7-b677-4e2a-8a1b-7d017e0a10ae`
- Flow property / unit: Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ; unit group `93a60a57-a3c8-11da-a746-0800200c9a66`
- Amount rule: Allocated winding and adhesive application meter total in MJ divided by M
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net accepted coil output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_energy_winding`
- Sources:

#### Outputs

##### Product flows

###### Wound uncured epoxy-coated copper voice coil (`uncured_coil_out`)

Inclusion condition (inclusion_condition): When transferring wound coils to curing. This condition determines only whether this concrete exchange is present.

- Selected flow: Wound uncured epoxy-coated copper voice coil
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; unit group `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Weighed outgoing uncured coils divided by M; paired with uncured_coil_in
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net accepted coil output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_transfer_winding`
- Sources: `us20170223463a1-voice-coil`

##### Waste flows

###### Insulated copper winding wire offcuts (`winding_wire_scrap`)

Inclusion condition (inclusion_condition): When wire cutting generates exported offcuts. This condition determines only whether this concrete exchange is present.

- Selected flow: Insulated copper winding wire offcuts
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; unit group `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Weighed exported wire offcuts including insulation divided by M; identify recovery destination
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net accepted coil output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_waste_winding`
- Sources:

###### Uncured epoxy adhesive waste (`uncured_adhesive_waste`)

Inclusion condition (inclusion_condition): When adhesive is discarded before cure. This condition determines only whether this concrete exchange is present.

- Selected flow: Uncured epoxy adhesive waste
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; unit group `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Weighed unused adhesive discarded divided by M; retain uncured state and hazard assessment
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net accepted coil output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_waste_winding`
- Sources:

### Process: Electrical curing and demoulding (`curing`)

#### Inputs

##### Product flows

###### Wound uncured epoxy-coated copper voice coil (`uncured_coil_in`)

Inclusion condition (inclusion_condition): When receiving the wound uncured coil. This condition determines only whether this concrete exchange is present.

- Selected flow: Wound uncured epoxy-coated copper voice coil
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; unit group `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Incoming transfer mass divided by M; same batch and state as uncured_coil_out
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net accepted coil output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_transfer_curing`
- Sources: `us20170223463a1-voice-coil`

###### Electricity (`curing_electricity`)

Inclusion condition (inclusion_condition): When electrical curing is used. This condition determines only whether this concrete exchange is present.

- Selected flow: Electricity `890a70b7-b677-4e2a-8a1b-7d017e0a10ae`
- Flow property / unit: Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ; unit group `93a60a57-a3c8-11da-a746-0800200c9a66`
- Amount rule: Metered electrical curing, ventilation and attributable vacuum energy converted to MJ and divided by M
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net accepted coil output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_energy_curing`
- Sources:

#### Outputs

##### Product flows

###### Cured untested bobbinless copper voice coil (`cured_coil_out`)

Inclusion condition (inclusion_condition): When transferring demoulded coils for inspection. This condition determines only whether this concrete exchange is present.

- Selected flow: Cured untested bobbinless copper voice coil
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; unit group `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Net demoulded outgoing coil mass divided by M; excludes reusable sleeves; paired with cured_coil_in
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net accepted coil output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_transfer_curing`
- Sources: `us20170223463a1-voice-coil`

##### Waste flows

###### Cured epoxy resin flash waste (`cured_epoxy_flash`)

Inclusion condition (inclusion_condition): When demoulding or trimming generates cured resin flash. This condition determines only whether this concrete exchange is present.

- Selected flow: Cured epoxy resin flash waste
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; unit group `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Segregated cured flash discarded divided by M; exclude adhesive retained in product
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net accepted coil output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_waste_curing`
- Sources:

### Process: Inspection and packing (`release`)

#### Inputs

##### Product flows

###### Cured untested bobbinless copper voice coil (`cured_coil_in`)

Inclusion condition (inclusion_condition): When the representative cured coil is received. This condition determines only whether this concrete exchange is present.

- Selected flow: Cured untested bobbinless copper voice coil
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; unit group `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Incoming net coil mass divided by M; paired with cured_coil_out
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net accepted coil output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_transfer_release`
- Sources: `us20170223463a1-voice-coil`

###### Electricity (`release_electricity`)

Inclusion condition (inclusion_condition): When inspection or packing uses electricity. This condition determines only whether this concrete exchange is present.

- Selected flow: Electricity `890a70b7-b677-4e2a-8a1b-7d017e0a10ae`
- Flow property / unit: Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ; unit group `93a60a57-a3c8-11da-a746-0800200c9a66`
- Amount rule: Metered inspection and packing electricity converted to MJ and divided by M
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net accepted coil output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_energy_release`
- Sources:

###### Corrugated cardboard box (`corrugated_box`)

Inclusion condition (inclusion_condition): When corrugated shipping boxes are used. This condition determines only whether this concrete exchange is present.

- Selected flow: corrugated board boxes `4f197bec-7b3b-11dd-ad8b-0800200c9a66`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; unit group `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Actual corrugated boxes consumed including discarded boxes divided by M; measured unit masses
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net accepted coil output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_pack`
- Sources:

###### Low-density polyethylene packaging bag (`polyethylene_bag`)

Inclusion condition (inclusion_condition): When LDPE bags are used. This condition determines only whether this concrete exchange is present.

- Selected flow: Low-density polyethylene packaging bag
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; unit group `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Actual LDPE bag consumption including discarded bags divided by M; verify polymer and density grade
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net accepted coil output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_pack`
- Sources:

#### Outputs

##### Product flows

###### Bobbinless epoxy-bound copper loudspeaker voice coil (`accepted_voice_coil`)

Inclusion condition (inclusion_condition): Representative finished part at declared dispatch gate. This condition determines only whether this concrete exchange is present.

- Selected flow: Bobbinless epoxy-bound copper loudspeaker voice coil
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; unit group `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Accepted net coil mass M/M = 1 kg; retain measured M and matching accepted count; exclude packaging
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net accepted coil output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_release`
- Sources: `us20170223463a1-voice-coil`

##### Waste flows

###### Rejected cured epoxy-bound copper voice coil (`rejected_voice_coil`)

Inclusion condition (inclusion_condition): When a cured coil is finally rejected and exported as waste. This condition determines only whether this concrete exchange is present.

- Selected flow: Rejected cured epoxy-bound copper voice coil
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; unit group `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Weighed rejected coil mass leaving for waste treatment divided by M; internal rework tracked separately
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net accepted coil output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_waste_release`
- Sources:

###### Waste corrugated cardboard box (`corrugated_box_waste`)

Inclusion condition (inclusion_condition): When boxes are damaged or discarded at the factory. This condition determines only whether this concrete exchange is present.

- Selected flow: Waste corrugated cardboard box
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; unit group `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Weighed discarded corrugated boxes divided by M; exclude packaging dispatched with accepted coils
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net accepted coil output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_waste_release`
- Sources:

###### Waste low-density polyethylene packaging bag (`polyethylene_bag_waste`)

Inclusion condition (inclusion_condition): When LDPE bags are damaged or discarded at the factory. This condition determines only whether this concrete exchange is present.

- Selected flow: Waste low-density polyethylene packaging bag
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; unit group `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Weighed discarded LDPE bags divided by M; keep polymer and contamination state
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net accepted coil output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_waste_release`
- Sources:

## 7. Allocation and Co-product Handling

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| `allocation_subdivision` | shared operations | Prefer separately measured operations. Where separation is infeasible, use a demonstrated physical driver; disclose a justified alternative when no physical relationship can be established. | `wri-wbcsd-product-standard-2011` |
| `allocation_factory` | winding, curing and testing | Allocate shared electricity from measured equipment time and load, or occupied cure capacity validated against the meter. Do not allocate different part designs solely by revenue or net mass without explaining the causal relationship. Fractions must sum to one over products served. | |
| `allocation_rework` | rejected and reworked coils | Burdens of failed units and all repeated operations remain in the producing cohort and are normalized to accepted output. Internal rework is not a negative input or a saleable co-product. | |
| `allocation_scrap` | wire scrap and exported waste | Disclose whether each output is waste or a saleable co-product and justify any allocation. Record recycling treatment and allocation consistently, with no automatic avoided-primary-copper credit deducted from manufacturing. | `wri-wbcsd-product-standard-2011` |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_material` | winding | wire and adhesive | weighing and stock ledger | lot; part_revision; supplied_composition; gross_issue; return; opening_stock; closing_stock; tare | Calibrated weighing reconciled to stores and supplier specification | kg | Each batch and inventory close | All batches in declared representative production period | Named factory winding line | Sum actual consumption after stock and return adjustment, then apply `calc_normalize` | Calibration; invoices; SDS; batch records; stock reconciliation |
| `cp_transfer_winding` | winding | internal coils | transfer register | source_batch; destination_batch; part_revision; input_mass; output_mass; opening_WIP; closing_WIP; rework_mass | Weigh paired transfers and reconcile production records | kg | Every transfer | Same period as accepted output with WIP reconciliation | Linked stations at the declared site | Pair identical transfers once on each side; cancel on aggregation | Traceable transfer tickets; batch closure |
| `cp_transfer_curing` | curing | internal coils | transfer register | source_batch; destination_batch; part_revision; input_mass; output_mass; opening_WIP; closing_WIP; rework_mass | Weigh paired transfers and reconcile production records | kg | Every transfer | Same period as accepted output with WIP reconciliation | Linked stations at the declared site | Pair identical transfers once on each side; cancel on aggregation | Traceable transfer tickets; batch closure |
| `cp_transfer_release` | release | internal coils | transfer register | source_batch; destination_batch; part_revision; input_mass; output_mass; opening_WIP; closing_WIP; rework_mass | Weigh paired transfers and reconcile production records | kg | Every transfer | Same period as accepted output with WIP reconciliation | Linked stations at the declared site | Pair identical transfers once on each side; cancel on aggregation | Traceable transfer tickets; batch closure |
| `cp_energy_winding` | winding | electrical energy | meter log | meter_id; start_kWh; end_kWh; equipment; time; load; part_batch; shared_fraction | Submeter actual runs including standby attributable to production, vacuum and heating where used | kWh; MJ after conversion | Each run or metered production period | Include ordinary production, start-up, failed runs and rework | Declared equipment and shared supply | Meter differences times justified allocation fractions, convert and normalize | Meter calibration; schedule; reconciliation to site bill |
| `cp_energy_curing` | curing | electrical energy | meter log | meter_id; start_kWh; end_kWh; equipment; time; load; part_batch; shared_fraction | Submeter actual runs including standby attributable to production, vacuum and heating where used | kWh; MJ after conversion | Each run or metered production period | Include ordinary production, start-up, failed runs and rework | Declared equipment and shared supply | Meter differences times justified allocation fractions, convert and normalize | Meter calibration; schedule; reconciliation to site bill |
| `cp_energy_release` | release | electrical energy | meter log | meter_id; start_kWh; end_kWh; equipment; time; load; part_batch; shared_fraction | Submeter actual runs including standby attributable to production, vacuum and heating where used | kWh; MJ after conversion | Each run or metered production period | Include ordinary production, start-up, failed runs and rework | Declared equipment and shared supply | Meter differences times justified allocation fractions, convert and normalize | Meter calibration; schedule; reconciliation to site bill |
| `cp_waste_winding` | winding | each named waste | waste weighing and transfer | waste_identity; cure_state; contamination; gross_mass; tare; batch; destination; treatment; recovered_quantity | Segregated weighing and licensed-recipient or equivalent destination record | kg | Each batch or waste removal | Same production cohort, adjusted for stored waste | Named generation station and waste store | Sum each actual stream independently; exclude internal reuse from exported waste | Weigh tickets; manifests; hazard assessment; treatment records |
| `cp_waste_curing` | curing | each named waste | waste weighing and transfer | waste_identity; cure_state; contamination; gross_mass; tare; batch; destination; treatment; recovered_quantity | Segregated weighing and licensed-recipient or equivalent destination record | kg | Each batch or waste removal | Same production cohort, adjusted for stored waste | Named generation station and waste store | Sum each actual stream independently; exclude internal reuse from exported waste | Weigh tickets; manifests; hazard assessment; treatment records |
| `cp_waste_release` | release | each named waste | waste weighing and transfer | waste_identity; cure_state; contamination; gross_mass; tare; batch; destination; treatment; recovered_quantity | Segregated weighing and licensed-recipient or equivalent destination record | kg | Each batch or waste removal | Same production cohort, adjusted for stored waste | Named generation station and waste store | Sum each actual stream independently; exclude internal reuse from exported waste | Weigh tickets; manifests; hazard assessment; treatment records |
| `cp_release` | release | accepted voice coil | quality and output register | part_revision; tested_count; accepted_count; reject_count; net_mass; resistance; test_temperature; insulation_result; dimensions; criteria; rework | Calibrated balance and product-specific electrical/dimensional acceptance tests | kg; piece; ohm; degC; drawing units | Every production batch; acceptance sampling plan declared | All accepted lots for the same period | Declared release station | Accepted net mass M is denominator; reconcile tested, accepted, rejected and reworked counts | Signed release record; test method; instrument calibration; sampling plan |
| `cp_pack` | release | corrugated boxes and polyethylene bags | pack consumption register | material; grade; thickness; box_or_bag_count; measured_unit_mass; returns; rejects; reuse_cycles | Weigh each packaging component separately and reconcile purchase and packing records | kg; piece | Each packing batch and stock close | Same period as accepted output | Declared packing station | Gross actual consumption less returns; retained and discarded packaging reconcile independently | Packaging specification; sampling weights; invoices; stock closure |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_normalize` | external exchanges | q_i = Q_i / M, where Q_i is the measured cohort exchange after stock correction and any justified shared-process allocation; M is accepted net product mass | collected Q_i; M; allocation fraction | kg/kg or MJ/kg accepted part | |
| `calc_energy` | metered electricity | Q_MJ = (end_kWh - start_kWh) × 3.6 × allocated_fraction; normalize by M | meters; allocation records; M | MJ per kg accepted part | |
| `calc_transfer` | internal links | Outgoing transfer equals matching incoming transfer after explicitly recorded WIP changes; cancel both in plant aggregation | transfer tickets; WIP masses | reconciled internal mass | |
| `calc_yield_balance` | coil manufacture | Input material mass plus opening WIP equals accepted coils plus exported process wastes plus identified releases plus closing WIP. Internal transfers and internal rework are not additional plant inputs. Investigate differences using documented measurement uncertainty. | wire; adhesive; coil output; wastes; WIP; identified releases | batch mass balance and measured yield | |
| `calc_pack_balance` | each packaging material | Consumption equals retained shipped packaging plus recorded discarded packaging, adjusted for stock and reuse | counts; measured masses; waste weights | packaging reconciliation | |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_identity` | all parts | Preserve one part number and revision per reference dataset; distinguish a coil from a complete transducer and a bare circuit from an assembled equipment-specific board. | Drawing; BOM; parent-equipment declaration; official classification |
| `dq_completeness` | actual route | Walk the actual process and compare material balances, SDS, maintenance and utility records. Add any missing concrete exchange; document applicability of every conditional card. | Signed route checklist; logs; mass balance |
| `dq_representativeness` | measurement period | Declare start/end dates, production volume, geography and technology; cover the operating modes that materially affect this part. Explain downtime, seasonal effects and omitted batches. | Production records; period selection justification |
| `dq_uncertainty` | all quantities | Retain uncertainty, missing records, allocation sensitivity and supplier data quality. Do not replace missing observations with patent examples or an unverified “typical” range. | Calibration records; uncertainty assessment; data-gap register |
| `dq_sources` | supporting datasets | Verify delivered state and upstream boundary; retain data-source version in the foreground package, while PCR flow UUIDs remain version-free. | Supplier declarations; dataset documentation |

## 9. Validation Rules

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| `validate_reference` | reference product | Require all declared qualifiers, M greater than zero, accepted product status, net mass and count reconciliation. An uninstantiated generic part description is incomplete. | |
| `validate_atomic` | every exchange | Require one physical or chemical exchange, correct product/waste/elementary type, compatible property and unit, and either verified flow identity or an explicit unresolved identity. A missing UUID never means a zero quantity. | |
| `validate_conservation` | production and packing | Check `calc_transfer`, `calc_yield_balance` and `calc_pack_balance`. Set acceptance tolerance from measurement uncertainty and report deviations; this PCR supplies no invented universal tolerance. | |
| `validate_energy` | three processes | Reconcile separate meters and allocation fractions; exclude duplicate electrical totals and upstream generation emissions from direct site releases. | |
| `validate_route` | applicability | Substantiate solvent-free adhesive, electrical curing, removable tooling and the unmounted coil gate for the representative route. Other routes require their own atomic exchanges, direct releases and finished-part reference before use. | `us20170223463a1-voice-coil` |
| `validate_boundary` | downstream results | Clearly distinguish gate-to-gate data from a completed cradle-to-gate model. Do not present this part dataset as a complete loudspeaker lifecycle or use it for unqualified comparison of different equipment functions. | `wri-wbcsd-product-standard-2011` |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | secondary_dataset; background_dataset only after declared representativeness and review |
| downstream_use | Input to assembly of the specified audio/video or electroacoustic equipment; process and lifecyclemodel projections of the collected foreground package |
| allowed_use | Matching part revision and supply condition, or an explicitly justified technologically compatible part with disclosed adjustments |
| excluded_use | Automatic substitution for complete equipment, copper wire, generic boards, other part functions, final acoustic service or product use/end of life |
| required_metadata | Part identity and revision; declared unit and count conversion; intended equipment; site, geography and dates; made/bought stages; process map; allocation; suppliers; logistics; waste treatment; supporting datasets |
| required_quality_disclosure | Coverage, uncertainty, data gaps, unresolved identities, missing range evidence, primary/secondary data contributions, measurement basis and exclusions |
| update_trigger | Drawing, conductor, insulation, adhesive, cure route, factory, power supply, yield, supplier boundary or packaging change; new records that invalidate representativeness |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `un-cpc-3-0-structure-2025` | official_guidance | UNSD, CPC Ver. 3.0 Structure, 30 June 2025. https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Structure_30Jun2025.csv ; retrieved 2026-09-09; independence_key: unsd-cpc-3-0-2025 | Original rows 47402, 47321, 47323, 47330 and separate component categories; classification and translation scope |
| `un-cpc-3-0-notes-2025` | official_guidance | UNSD, CPC Ver. 3.0 Explanatory Notes, 30 June 2025, printed pp. 255–259. https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Exp_Notes_30Jun2025.pdf ; retrieved 2026-09-09; independence_key: unsd-cpc-3-0-2025 | Original parent-equipment and parts entries; same underlying classification as the CSV, not independent quantitative evidence |
| `us20170223463a1-voice-coil` | literature | US20170223463A1, Voice coil having epoxy-bound winding layers, publication 3 August 2017; description of Figs. 4A and 9, operations 902–908. https://patents.google.com/patent/US20170223463A1/en ; original PDF https://patentimages.storage.googleapis.com/10/88/c4/0487e5cb54c040/US20170223463A1.pdf ; retrieved 2026-09-09; independence_key: us20170223463a1-patent-family | Original technical description: insulated conductor, epoxy application, winding, curing, removable sleeves and subsequent diaphragm attachment; representative decomposition only, no quantitative range or mandated design |
| `wri-wbcsd-product-standard-2011` | standard | WRI/WBCSD, Product Life Cycle Accounting and Reporting Standard, 2011, chapters 7–9 and 13. https://ghgprotocol.org/sites/default/files/ghgp/standards/Product-Life-Cycle-Accounting-Reporting-Standard_041613.pdf ; retrieved 2026-09-09; independence_key: wri-wbcsd-product-standard-2011 | Original provisions on partial intermediate-product boundaries, allocation and transparent reporting; these principles support this PCR's declared collection rules, not a claim of complete GHG-standard conformity or a full LCIA method |
