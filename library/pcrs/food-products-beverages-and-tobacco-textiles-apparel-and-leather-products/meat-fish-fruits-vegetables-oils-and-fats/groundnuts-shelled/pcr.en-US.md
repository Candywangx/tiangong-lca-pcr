---
pcr_id: pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.meat-fish-fruits-vegetables-oils-and-fats.groundnuts-shelled
language: en-US
status: candidate
content_maturity: authored_methodology
translation_status: canonical
sync_with: pcr.zh-CN.md
---

# Groundnuts, shelled

## 1. Scope and Applicability

This PCR covers shelled groundnuts (peanut kernels) represented by the exact generic CPC 3.0 product category 21421, after commercial shelling and associated cleaning, sizing, sorting, lot-control, and gate preparation. It supports raw or dried kernels sold in bulk or packages and does not itself assert a food grade, moisture class, kernel size, aflatoxin result, intended use, or packaging format.

The PCR excludes groundnuts in shell, seed for planting, roasted or otherwise cooked peanuts, peanut oil, flour, meal, paste, butter, confectionery, and downstream transport, retail, use, or end-of-life. A dataset may claim conformity with Codex CXS 200-1995 only where the declared intended use and product state fall within that standard and its applicable quality requirements are demonstrated. The exact generic Tiangong product flow is retained for every route; route and quality differences are expressed only through required qualifiers.

The foreground boundary begins with accepted in-shell groundnuts at the shelling-facility receiving gate and ends with the net mass of shelled groundnuts ready to leave the facility gate. A producer starting from already shelled kernels shall declare that starting condition and exclude shelling burdens only with an upstream dataset that preserves the omitted shelling route and product state.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.meat-fish-fruits-vegetables-oils-and-fats.groundnuts-shelled |
| classification_refs | CPC 3.0: 21421, Groundnuts, shelled |
| covered_products | Raw or dried kernels of Arachis hypogaea L. after removal of the pod, whether whole, split, broken, sized, graded, bulk, or packaged, provided the product remains shelled groundnuts rather than a further manufactured peanut product. |
| excluded_products | Groundnuts in shell; seed for planting; roasted or otherwise cooked peanuts; peanut oil, flour, meal, paste, butter, confectionery, and mixed or formulated foods. |
| representative_product | Generic shelled groundnuts at the shelling-facility gate, with actual lot moisture, grade, aflatoxin-control status, net-mass basis, and packaging state declared. |
| production_route | Receipt and pre-cleaning of in-shell groundnuts; mechanical or manual shelling and size grading; sorting, sampling/testing and lot disposition; net weighing, optional packaging, and dispatch preparation. Alternative shell and rejected-material dispositions are mutually exclusive. |
| market_state | Bulk or packaged shelled kernels at facility gate; raw or dried state, intended use, moisture basis, grade, and packaging are qualifiers rather than separate reference flows. |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Shelled groundnuts supplied at the shelling-facility gate for the declared intended use. |
| How much | 1 kg net mass of shelled groundnuts. |
| How well | At the declared shelling route, raw/dried state, moisture content and basis, grade or kernel-size class, rejected-material rule, aflatoxin-control status and limit basis, and packaging state. |
| How long or cycle | One declared production lot at facility-gate handover; storage duration included before handover is reported. |
| reference_flow_link | The functional unit is realized by exactly 1 kg of the generic Tiangong product flow `66ce8a77-8fe1-4513-910c-741aebeec043`, normalized on net mass as received unless a separately reported dry-matter result is required. |

| Field | Value |
| --- | --- |
| Reference amount | 1 kg net mass |
| Reference product flow | Groundnuts, shelled `66ce8a77-8fe1-4513-910c-741aebeec043` |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | shelling route and starting condition; raw or dried state; moisture content, measurement basis and method; grade or kernel-size class; intended use and applicable product specification; rejected-material definition, mass and disposition; aflatoxin sampling, test method, result, limit basis and lot decision; net-mass weighing basis; packaging type, material, tare and bulk/packaged state; included gate storage duration |

When constructing a foreground data package, every item in `Required qualifiers` shall be declared in dataset metadata, process notes, the reference-flow comment, the product description, or an equivalent field. A missing qualifier makes the reference-flow definition incomplete for that package.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| `reference_net_mass` | Final shelled groundnuts | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Determine net mass as calibrated gross mass minus packaging or container tare. Normalize all inventory results to 1 kg net shelled-groundnut output at the declared moisture basis. |
| `moisture_as_received` | In-shell input, intermediate kernels, and final shelled groundnuts | Mass fraction and Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | % and kg | Record moisture content, sampling time, test method, and whether mass is as received or moisture-corrected. Do not mix wet-basis and dry-matter masses. |
| `codex_kernel_moisture` | Lots claiming the CXS 200-1995 intended-use scope | Mass fraction | % | For peanut kernels intended for processing for direct human consumption under CXS 200-1995, verify the specified maximum moisture content of 9.0%; a stricter destination requirement remains controlling and shall be disclosed. |
| `internal_mass_consistency` | Each lot and process | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Use one consistent as-received basis for input kernels, accepted kernels, shells, rejects, dust or fines, samples, inventory change, and final net output; report any separately calculated dry-matter balance. |
| `aflatoxin_result_basis` | Aflatoxin-control records | Concentration and lot decision | declared test unit | Record the sampled lot, sampling plan, analytical method, result, reporting limit, applicable legal or contractual limit, intended use, and accept/reject/divert decision. Never infer a concentration from a visual sort result. |
| `packaging_tare_separation` | Packaged output | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Exclude packaging tare from the 1 kg reference amount and inventory packaging material separately by type and mass. |

## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Accepted in-shell groundnuts at the shelling-facility receiving gate; an already-shelled starting input is allowed only when explicitly declared as an alternative route. |
| starting_condition_role | Foreground entry condition for a gate-to-gate shelling dataset; cultivation, harvest, curing, and delivery burdens are represented through upstream datasets or separately linked transport. |
| product_classification_scope | Exact generic shelled-groundnut product category; quality, intended-use, moisture, grade, aflatoxin-control and packaging differences remain qualifiers. |
| recursive_input_rule | If shelled groundnuts enter for re-cleaning, regrading, or repacking, record them once as a same-category input with a separate upstream dataset and do not recreate their earlier shelling operations inside this foreground package. |
| upstream_dataset_requirement | Link representative upstream datasets for in-shell groundnuts, electricity, packaging, transport not already included by suppliers, and treatment of exported wastes or residues. Preserve geography, technology, moisture, and temporal applicability. |
| disclosure | Declare starting product state, supplier-gate versus delivered-gate convention, shelling technology, moisture and grade, lot-control route, all excluded operations, storage duration, and whether packaging and outbound loading are included. |

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `boundary_gate_to_gate` | Foreground shelling operations | Include receiving and pre-cleaning, shelling and size grading, aflatoxin-control sorting/testing and lot disposition, internal movement, net weighing, included storage, optional packaging, direct energy, direct emissions, wastes, residues, samples, and inventory changes up to facility-gate handover. | `eu-pef-2021-2279`; `codex-cxc-22-1979`; `codex-cxc-55-2004-2025` |
| `boundary_upstream_links` | Product and energy inputs | Keep cultivation, harvest, curing, external inbound transport, electricity generation, packaging manufacture, and external treatment outside the foreground process only when linked through representative upstream or downstream datasets; disclose every cut-off and justify its environmental insignificance. | `eu-pef-2021-2279` |
| `boundary_route_preservation` | Alternative starting conditions | Do not model in-shell receipt and already-shelled receipt as simultaneous inputs. Select one route for each lot and preserve the omitted shelling history through its upstream dataset and route qualifier. | `unsd-cpc-3-0-2025`; `eu-pef-2021-2279` |
| `boundary_controlled_material` | Rejected kernels, shells, dust, samples, and packaging rejects | Include the measured mass and documented disposition of every controlled material stream. A stream recorded as a saleable co-product shall not also be recorded as waste, and a rejected food lot shall not be credited as feed or product without evidence that the selected disposition is lawful and meets its acceptance specification. | `codex-cxc-22-1979`; `codex-cxc-55-2004-2025`; `eu-pef-2021-2279` |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| `receiving_and_precleaning` | Receiving and pre-cleaning | `required` | Always included for the in-shell route; for an already-shelled route record the alternative starting condition and only the applicable receiving/cleaning operations. | Establish lot identity, incoming net mass and quality state; remove loose foreign matter before shelling. | Per kg of pre-cleaned material transferred. |
| `shelling_and_size_grading` | Shelling and size grading | `required` | Included for the in-shell route; represented by the upstream shelled-input dataset for an already-shelled route. | Remove pods, separate kernels and shells, remove foreign matter, and size-grade kernels. | Per kg of unsorted shelled kernels produced. |
| `aflatoxin_control_and_lot_disposition` | Aflatoxin control and lot disposition | `required` | Always included; the sampling, analysis, sorting technology, and decision rule are lot-specific. | Inspect/sort kernels, sample and test as required, establish grade and aflatoxin-control decision, and segregate rejected material. | Per kg of accepted graded kernels transferred. |
| `net_mass_packaging_and_dispatch` | Net mass, packaging, and dispatch preparation | `required` | Always includes net weighing and gate handover; packaging inputs are included only for packaged output and gate storage only for the declared duration. | Establish final net output, package or prepare bulk product, record storage and transfer at facility gate. | Per 1 kg net shelled-groundnut output. |

### Process: Receiving and pre-cleaning (`receiving_and_precleaning`)

#### Inputs

##### Product flows

###### In-shell groundnuts received (`in_shell_groundnuts_received`)

This is the lot-specific incoming groundnut mass crossing the receiving gate. Record supplier lot, origin, delivery convention, gross, tare, net mass, moisture, grade observations, and acceptance decision. The provisional range is for initial screening only when no representative lot mass balance exists; it is temporary and shall be replaced when representative batch records or reviewed transferable evidence become available.

- Selected flow: Groundnuts, in shell
- Flow property / unit: Mass / kg
- Amount rule: measured accepted net mass entering the foreground boundary
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg final net shelled-groundnut output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_incoming_lot_records`
- Range: Temporary in-shell input screening estimate
  - Range role: Default estimate (`default_estimate`)
  - Lower: 1
  - Upper: 10
  - Unit: kg
  - Basis: per 1 kg final net shelled-groundnut output; use only until representative lot records or reviewed evidence replace it
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Receiving and pre-cleaning electricity (`precleaning_electricity`)

Record metered electricity or calculate it from equipment power and operating time assigned to the lot. The broad range is a temporary screening estimate for an unmetered candidate dataset and shall be replaced by representative metering or reviewed equipment evidence.

- Selected flow: Electricity, supplied to facility
- Flow property / unit: Energy / kWh
- Amount rule: metered use or calculated equipment electricity allocated to the lot
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg final net shelled-groundnut output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_energy_records`
- Range: Temporary pre-cleaning electricity screening estimate
  - Range role: Default estimate (`default_estimate`)
  - Lower: 0
  - Upper: 100
  - Unit: kWh
  - Basis: per 1 kg final net shelled-groundnut output; use only until representative metering or reviewed equipment evidence replaces it
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

#### Outputs

##### Product flows

###### Pre-cleaned in-shell groundnuts (`precleaned_in_shell_groundnuts`)

Record the intermediate mass transferred to shelling on the same moisture basis as the incoming lot. The provisional range is a temporary mass-balance screen and shall be replaced by representative batch records.

- Selected flow: Pre-cleaned groundnuts, in shell
- Flow property / unit: Mass / kg
- Amount rule: measured transfer mass after pre-cleaning
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg final net shelled-groundnut output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_intermediate_and_residue_mass`
- Range: Temporary pre-cleaned transfer screening estimate
  - Range role: Default estimate (`default_estimate`)
  - Lower: 1
  - Upper: 10
  - Unit: kg
  - Basis: per 1 kg final net shelled-groundnut output; use only until representative batch mass records replace it
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

###### Pre-cleaning foreign matter and loose rejects (`precleaning_rejects`)

Measure removed stones, soil, loose shells, damaged kernels, blows, and other foreign matter by lot and preserve their classification and disposition. The range is a deliberately broad temporary screen, not a typical yield, and shall be replaced by representative batch records or reviewed evidence.

- Selected flow: Pre-cleaning rejects
- Flow property / unit: Mass / kg
- Amount rule: measured mass by reject class and disposition
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg final net shelled-groundnut output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_intermediate_and_residue_mass`
- Range: Temporary pre-cleaning reject screening estimate
  - Range role: Default estimate (`default_estimate`)
  - Lower: 0
  - Upper: 10
  - Unit: kg
  - Basis: per 1 kg final net shelled-groundnut output; use only until representative batch reject records or reviewed evidence replace it
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Elementary flows

###### Pre-cleaning dust released to air (`precleaning_dust_to_air`)

Record measured dust or a documented engineering estimate net of captured dust recorded as waste. The range is temporary, applies only to initial screening without representative monitoring, and shall be replaced by site monitoring or reviewed equipment-specific evidence.

- Selected flow: Particulate matter, unspecified, to air
- Flow property / unit: Mass / kg
- Amount rule: measured or calculated uncaptured dust released to air
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg final net shelled-groundnut output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_dust_records`
- Range: Temporary pre-cleaning dust screening estimate
  - Range role: Default estimate (`default_estimate`)
  - Lower: 0
  - Upper: 1
  - Unit: kg
  - Basis: per 1 kg final net shelled-groundnut output; use only until representative monitoring or reviewed equipment evidence replaces it
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

### Process: Shelling and size grading (`shelling_and_size_grading`)

#### Inputs

##### Product flows

###### Pre-cleaned in-shell groundnuts transferred (`precleaned_in_shell_input`)

Record the mass received from pre-cleaning without duplicating the upstream supply. The temporary range supports only an initial mass-balance screen and shall be replaced by representative batch transfer records.

- Selected flow: Pre-cleaned groundnuts, in shell
- Flow property / unit: Mass / kg
- Amount rule: measured transfer mass into shelling
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg final net shelled-groundnut output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_intermediate_and_residue_mass`
- Range: Temporary shelling input screening estimate
  - Range role: Default estimate (`default_estimate`)
  - Lower: 1
  - Upper: 10
  - Unit: kg
  - Basis: per 1 kg final net shelled-groundnut output; use only until representative batch transfer records replace it
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Shelling and grading electricity (`shelling_electricity`)

Record metered electricity or calculate equipment use from recorded power and operating time. The range is a broad temporary screening estimate and shall be replaced by representative metering or reviewed equipment evidence.

- Selected flow: Electricity, supplied to facility
- Flow property / unit: Energy / kWh
- Amount rule: metered use or calculated equipment electricity allocated to the lot
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg final net shelled-groundnut output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_energy_records`
- Range: Temporary shelling electricity screening estimate
  - Range role: Default estimate (`default_estimate`)
  - Lower: 0
  - Upper: 100
  - Unit: kWh
  - Basis: per 1 kg final net shelled-groundnut output; use only until representative metering or reviewed equipment evidence replaces it
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Unsorted shelled kernels transferred (`unsorted_shelled_kernels`)

Record kernels leaving shelling before final quality disposition, including their moisture and size-grade state. The temporary range is for screening only and shall be replaced by representative batch transfer records.

- Selected flow: Shelled groundnut kernels, unsorted intermediate
- Flow property / unit: Mass / kg
- Amount rule: measured kernel mass transferred to control and disposition
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg final net shelled-groundnut output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_intermediate_and_residue_mass`
- Range: Temporary unsorted-kernel transfer screening estimate
  - Range role: Default estimate (`default_estimate`)
  - Lower: 1
  - Upper: 10
  - Unit: kg
  - Basis: per 1 kg final net shelled-groundnut output; use only until representative batch transfer records replace it
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Shells sent to documented beneficial use (`shells_as_coproduct`)

Record shells here only when they leave the process as a lawful, specified product or co-product with a documented recipient and use. This route is mutually exclusive with `shells_as_waste` for each measured portion. The temporary range is not a typical yield and shall be replaced by representative batch records or reviewed transferable evidence.

- Selected flow: Groundnut shells, recovered
- Flow property / unit: Mass / kg
- Amount rule: measured dry or as-received shell mass sold or transferred for documented beneficial use
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg final net shelled-groundnut output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_shell_and_reject_disposition`
- Range: Temporary recovered-shell screening estimate
  - Range role: Default estimate (`default_estimate`)
  - Lower: 0
  - Upper: 10
  - Unit: kg
  - Basis: per 1 kg final net shelled-groundnut output; use only until representative batch shell records or reviewed evidence replace it
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

###### Shells sent to waste treatment or disposal (`shells_as_waste`)

Record only shell portions not recorded as `shells_as_coproduct`, with destination and treatment route. The temporary broad screen shall be replaced by representative batch records or reviewed transferable evidence.

- Selected flow: Groundnut shells, discarded
- Flow property / unit: Mass / kg
- Amount rule: measured shell mass by waste destination
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg final net shelled-groundnut output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_shell_and_reject_disposition`
- Range: Temporary discarded-shell screening estimate
  - Range role: Default estimate (`default_estimate`)
  - Lower: 0
  - Upper: 10
  - Unit: kg
  - Basis: per 1 kg final net shelled-groundnut output; use only until representative batch shell records or reviewed evidence replace it
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Shelling fines and damaged material (`shelling_fines_and_damage`)

Record broken matter, fines and damaged material removed during shelling and grading separately from clean recovered shells. The temporary range applies only to screening and shall be replaced by representative batch records.

- Selected flow: Shelling fines and damaged groundnut material
- Flow property / unit: Mass / kg
- Amount rule: measured mass by material class and disposition
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg final net shelled-groundnut output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_shell_and_reject_disposition`
- Range: Temporary shelling-residue screening estimate
  - Range role: Default estimate (`default_estimate`)
  - Lower: 0
  - Upper: 10
  - Unit: kg
  - Basis: per 1 kg final net shelled-groundnut output; use only until representative batch residue records replace it
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Elementary flows

###### Shelling and grading dust released to air (`shelling_dust_to_air`)

Record measured dust or a documented engineering estimate net of captured material. The temporary range is for initial screening without representative monitoring and shall be replaced by site monitoring or reviewed equipment-specific evidence.

- Selected flow: Particulate matter, unspecified, to air
- Flow property / unit: Mass / kg
- Amount rule: measured or calculated uncaptured dust released to air
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg final net shelled-groundnut output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_dust_records`
- Range: Temporary shelling dust screening estimate
  - Range role: Default estimate (`default_estimate`)
  - Lower: 0
  - Upper: 1
  - Unit: kg
  - Basis: per 1 kg final net shelled-groundnut output; use only until representative monitoring or reviewed equipment evidence replaces it
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

### Process: Aflatoxin control and lot disposition (`aflatoxin_control_and_lot_disposition`)

#### Inputs

##### Product flows

###### Unsorted shelled kernels received for control (`unsorted_kernels_input`)

Record the lot mass and identity entering inspection, sorting, sampling/testing and disposition. The temporary range is a screening aid and shall be replaced by representative lot records.

- Selected flow: Shelled groundnut kernels, unsorted intermediate
- Flow property / unit: Mass / kg
- Amount rule: measured mass entering the control step
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg final net shelled-groundnut output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_aflatoxin_grade_and_lot_decision`
- Range: Temporary control-step input screening estimate
  - Range role: Default estimate (`default_estimate`)
  - Lower: 1
  - Upper: 10
  - Unit: kg
  - Basis: per 1 kg final net shelled-groundnut output; use only until representative lot records replace it
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Sorting and control electricity (`control_electricity`)

Record metered or equipment-time electricity for sorting, aspiration and control equipment. The temporary range shall be replaced by representative metering or reviewed equipment evidence.

- Selected flow: Electricity, supplied to facility
- Flow property / unit: Energy / kWh
- Amount rule: metered use or calculated equipment electricity allocated to the lot
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg final net shelled-groundnut output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_energy_records`
- Range: Temporary control electricity screening estimate
  - Range role: Default estimate (`default_estimate`)
  - Lower: 0
  - Upper: 100
  - Unit: kWh
  - Basis: per 1 kg final net shelled-groundnut output; use only until representative metering or reviewed equipment evidence replaces it
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Accepted graded kernels (`accepted_graded_kernels`)

Record the mass, moisture, grade and linked aflatoxin-control decision of kernels accepted for the declared intended use. The temporary range is for initial screening only and shall be replaced by representative batch records.

- Selected flow: Shelled groundnut kernels, accepted graded intermediate
- Flow property / unit: Mass / kg
- Amount rule: measured mass accepted for the declared intended use
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg final net shelled-groundnut output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_aflatoxin_grade_and_lot_decision`
- Range: Temporary accepted-kernel screening estimate
  - Range role: Default estimate (`default_estimate`)
  - Lower: 1
  - Upper: 10
  - Unit: kg
  - Basis: per 1 kg final net shelled-groundnut output; use only until representative batch records replace it
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Rejected material diverted as a lawful specified product (`rejected_material_as_product`)

Record a rejected portion here only when evidence demonstrates that it satisfies the legal and contractual specification for a declared non-food or other destination. It is mutually exclusive with `rejected_material_as_waste` for each portion and shall never be assumed to be feed merely because it is rejected from food use. The broad range is temporary and shall be replaced by representative disposition records or reviewed evidence.

- Selected flow: Groundnut material diverted to specified non-food use
- Flow property / unit: Mass / kg
- Amount rule: measured mass with specification, analytical release, recipient and intended use documented
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg final net shelled-groundnut output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_shell_and_reject_disposition`
- Range: Temporary lawful-diversion screening estimate
  - Range role: Default estimate (`default_estimate`)
  - Lower: 0
  - Upper: 10
  - Unit: kg
  - Basis: per 1 kg final net shelled-groundnut output; use only until representative disposition records or reviewed evidence replace it
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

###### Rejected kernels and controlled material (`rejected_material_as_waste`)

Record visually rejected, analytically non-conforming, contaminated, off-grade, sampled, or otherwise non-product material by reason and treatment route, excluding portions recorded under `rejected_material_as_product`. The broad range is temporary and shall be replaced by representative disposition records or reviewed evidence.

- Selected flow: Rejected groundnut kernels and controlled material
- Flow property / unit: Mass / kg
- Amount rule: measured mass by rejection reason and documented treatment or disposal destination
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg final net shelled-groundnut output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_shell_and_reject_disposition`
- Range: Temporary rejected-material screening estimate
  - Range role: Default estimate (`default_estimate`)
  - Lower: 0
  - Upper: 10
  - Unit: kg
  - Basis: per 1 kg final net shelled-groundnut output; use only until representative disposition records or reviewed evidence replace it
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Elementary flows

### Process: Net mass, packaging, and dispatch preparation (`net_mass_packaging_and_dispatch`)

#### Inputs

##### Product flows

###### Accepted graded kernels transferred to gate preparation (`accepted_kernels_for_dispatch`)

Record the mass transferred into final weighing and gate preparation, linked to the accepted lot-control record. The temporary range is for screening only and shall be replaced by representative batch records.

- Selected flow: Shelled groundnut kernels, accepted graded intermediate
- Flow property / unit: Mass / kg
- Amount rule: measured transfer mass before final net weighing
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg final net shelled-groundnut output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_final_net_mass_and_packaging`
- Range: Temporary final-transfer screening estimate
  - Range role: Default estimate (`default_estimate`)
  - Lower: 1
  - Upper: 10
  - Unit: kg
  - Basis: per 1 kg final net shelled-groundnut output; use only until representative batch records replace it
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Primary, secondary, and tertiary packaging materials (`packaging_materials`)

Record each packaging material by type, mass, recycled-content claim if relevant, and packaging level; use zero only for a declared unpackaged bulk route. The broad range is a temporary screening estimate and shall be replaced by packaging bills of materials, tare records, or reviewed evidence.

- Selected flow: Packaging materials, by material and level
- Flow property / unit: Mass / kg
- Amount rule: measured packaging mass or bill-of-material quantity assigned to the output lot
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg final net shelled-groundnut output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_final_net_mass_and_packaging`
- Range: Temporary packaging screening estimate
  - Range role: Default estimate (`default_estimate`)
  - Lower: 0
  - Upper: 10
  - Unit: kg
  - Basis: per 1 kg final net shelled-groundnut output; use only until packaging bills of materials, tare records, or reviewed evidence replace it
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Packaging, storage, and dispatch electricity (`dispatch_electricity`)

Record metered or calculated electricity for included packaging, gate storage and dispatch preparation. The broad range is temporary and shall be replaced by representative metering or reviewed equipment evidence.

- Selected flow: Electricity, supplied to facility
- Flow property / unit: Energy / kWh
- Amount rule: metered use or calculated equipment electricity allocated to the lot and declared storage duration
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg final net shelled-groundnut output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_energy_records`
- Range: Temporary dispatch electricity screening estimate
  - Range role: Default estimate (`default_estimate`)
  - Lower: 0
  - Upper: 100
  - Unit: kWh
  - Basis: per 1 kg final net shelled-groundnut output; use only until representative metering or reviewed equipment evidence replaces it
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Groundnuts, shelled at facility gate (`groundnuts_shelled_reference_output`)

This is the generic bulk or packaged shelled-groundnut output after final lot decision and net weighing. Its qualifiers preserve product state without changing the selected Tiangong flow identity.

- Selected flow: Groundnuts, shelled `66ce8a77-8fe1-4513-910c-741aebeec043`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: exactly 1 kg net mass after normalization by `calc_reference_normalization`
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: 1 kg net shelled-groundnut output at the declared moisture and packaging state
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_final_net_mass_and_packaging`

##### Waste flows

###### Packaging rejects and product spill (`packaging_rejects_and_spill`)

Record packaging scrap and product spill separately by material and destination. The broad range is a temporary screening estimate and shall be replaced by representative batch records or reviewed evidence.

- Selected flow: Packaging rejects and groundnut spill
- Flow property / unit: Mass / kg
- Amount rule: measured mass by material class and disposition
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg final net shelled-groundnut output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_final_net_mass_and_packaging`
- Range: Temporary packaging-reject screening estimate
  - Range role: Default estimate (`default_estimate`)
  - Lower: 0
  - Upper: 10
  - Unit: kg
  - Basis: per 1 kg final net shelled-groundnut output; use only until representative batch records or reviewed evidence replace it
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Elementary flows

## 7. Allocation and Co-product Handling

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `allocation_avoid_first` | Multi-output foreground operations | Avoid allocation by subdividing separately measured operations or by expanding the system only where the substituted function and dataset are explicitly justified. Do not create an avoided-product credit solely from a waste-disposal claim. | `eu-pef-2021-2279` |
| `allocation_shell_route` | Groundnut shells | Treat shells as waste when they have no documented product function and model their treatment without co-product allocation. When shells are sold or transferred as a specified co-product, record only that measured portion as product and apply the PEF hierarchy to any shared burdens. | `eu-pef-2021-2279` |
| `allocation_shared_burdens` | Shared burdens remaining after subdivision | Use a physical relationship only where it reflects the underlying causal relationship between inputs, outputs and functions; otherwise use economic allocation with contemporaneous, geographically and temporally representative prices. Report the method, factors, price basis and sensitivity. | `eu-pef-2021-2279` |
| `allocation_rejected_material` | Rejected kernels and controlled material | Assign no co-product credit to material rejected for the declared use unless a lawful alternative specification, analytical release where required, recipient and function are documented. Product diversion and waste treatment are mutually exclusive for each measured portion. | `codex-cxc-22-1979`; `codex-cxc-55-2004-2025`; `eu-pef-2021-2279` |
| `allocation_mass_balance` | All lot outputs | Preserve the unallocated physical mass balance separately from burden allocation: input mass equals accepted kernels plus shells, rejected material, dust/fines, samples, inventory change and measured losses on one moisture basis. Allocation shall not alter these physical quantities. | `eu-pef-2021-2279` |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_incoming_lot_records` | `receiving_and_precleaning` | incoming in-shell groundnuts | weighbridge, receiving, supplier, moisture and inspection records | lot_id; supplier_id; origin; delivery_basis; gross_mass; tare_mass; net_mass; moisture_value; moisture_basis; method; grade_observation; acceptance_decision; timestamp | Calibrated gross-minus-tare weighing linked to lot identity, with representative moisture sampling and receiving inspection. | kg; % | Each incoming lot | Entire declared production period | All supplying lots entering the represented facility or sampled population | Sum accepted net mass by lot; keep rejected lots separate; do not combine different moisture bases without correction. | Calibration record; sampling record; supplier document; signed receiving decision. |
| `cp_intermediate_and_residue_mass` | `receiving_and_precleaning; shelling_and_size_grading` | intermediate transfers and pre-cleaning residues | batch scale, hopper, inventory and reject logs | lot_id; process_id; material_class; gross_mass; tare_mass; net_mass; moisture_value; destination; timestamp | Weigh transfers and separated material, or reconcile calibrated batch scales and inventory changes. | kg; % | Each lot or production run | Entire declared production period | All represented lines and shifts | Sum by lot, process and material class on a consistent moisture basis; retain inventory change. | Scale calibration; batch log; inventory reconciliation; disposition record. |
| `cp_energy_records` | `receiving_and_precleaning; shelling_and_size_grading; aflatoxin_control_and_lot_disposition; net_mass_packaging_and_dispatch` | electricity by operation | meter, submeter, equipment power and operating-time records | meter_id; start_reading; end_reading; equipment_id; rated_or_measured_power; operating_time; lot_id; allocation_driver | Prefer calibrated submeters; otherwise calculate power multiplied by recorded operating time and reconcile to the facility meter. | kWh | Each lot/run or meter interval | Representative period covering declared operating variability | All included equipment and represented shifts | Subtract excluded loads; assign shared use by recorded operating time or another causal driver; normalize to accepted net output. | Meter calibration; utility reconciliation; equipment log; allocation worksheet. |
| `cp_shell_and_reject_disposition` | `shelling_and_size_grading; aflatoxin_control_and_lot_disposition` | shells, rejects and controlled material | batch scale, sort log, test release, sales/transfer and waste records | lot_id; material_class; rejection_reason; gross_mass; tare_mass; net_mass; moisture_basis; analytical_release; recipient; intended_use; product_or_waste_route; treatment_destination; timestamp | Weigh each segregated stream and link it to its mutually exclusive product-diversion or waste-disposition evidence. | kg | Each lot and shipment | Entire declared production period | All shell, reject, sample and controlled-material destinations | Sum by lot, class and route; prohibit the same portion from appearing in both product and waste totals. | Scale calibration; laboratory result; legal/contract specification; transfer note; waste manifest. |
| `cp_aflatoxin_grade_and_lot_decision` | `aflatoxin_control_and_lot_disposition` | kernel grade and aflatoxin-control decision | sampling, laboratory, sorter and release/rejection records | lot_id; intended_use; grade_or_size_class; sampling_plan; sample_mass; laboratory_id; analytical_method; result; unit; reporting_limit; applicable_limit; limit_source; sort_passes; accepted_mass; rejected_mass; decision; timestamp | Apply the declared representative sampling plan and validated analytical method; link results and visual/electronic sorting records to the exact lot and disposition. | declared concentration unit; kg | Each controlled lot and each retest | Entire declared production period | Every lot represented as accepted output | No averaging across independently accepted/rejected lots to conceal a non-conforming result; aggregate masses only after lot disposition. | Chain of custody; accredited or otherwise qualified laboratory record; method identifier; sorter log; signed lot release. |
| `cp_dust_records` | `receiving_and_precleaning; shelling_and_size_grading` | captured and uncaptured particulate material | stack/area monitoring, collector mass, maintenance and operating records | process_id; lot_id; monitoring_method; concentration_or_mass; air_volume; captured_dust_mass; operating_time; control_efficiency_basis | Measure direct releases where feasible; otherwise calculate from monitored air volume and concentration or a documented equipment model, subtracting captured material recorded as waste. | kg; supporting concentration and air-volume units | Representative monitoring event and each production aggregation interval | Representative period for equipment and control condition | All included dust-generating and control equipment | Calculate released mass by process and period; prevent double counting captured dust and air emissions; normalize to accepted output. | Monitoring report; calibration; collector log; maintenance record; calculation worksheet. |
| `cp_final_net_mass_and_packaging` | `net_mass_packaging_and_dispatch` | final output, packaging and gate storage | packing line, scale, bill of materials, warehouse and dispatch records | lot_id; output_gross_mass; tare_mass; net_mass; moisture_value; grade; package_type; packaging_material; packaging_mass; bulk_or_packaged; storage_start; storage_end; dispatch_time | Calibrated gross-minus-tare weighing; reconcile package counts and material specifications to packaging consumption and warehouse movement. | kg; hour or day | Each packed or bulk lot and dispatch | Entire declared production period | All final output and packaging configurations in the represented dataset | Sum final net mass by qualified lot; aggregate packaging by material and level; calculate included storage duration; normalize to 1 kg net output. | Scale calibration; packing specification; bill of materials; warehouse record; dispatch document. |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_net_mass` | Incoming, intermediate and final weighed material | net_mass_kg = gross_mass_kg - tare_mass_kg; packaging tare is never part of the final product mass. | gross_mass; tare_mass | net_mass_kg | `codex-cxs-200-1995` |
| `calc_reference_normalization` | All inventory rows | normalized_amount = attributable_period_or_lot_amount / accepted_final_net_mass_kg. The denominator contains only output released for the declared intended use and moisture basis. | attributable flow amount; accepted final net mass | amount per 1 kg net shelled-groundnut output | `eu-pef-2021-2279` |
| `calc_moisture_consistency` | Physical mass balance | Compare masses on the same as-received basis; when dry-matter comparison is needed, dry_mass = as_received_mass × (1 - moisture_fraction), using matched representative samples. | as-received mass; moisture fraction; sampling time | disclosed dry-matter comparison | `codex-cxs-200-1995`; `codex-cxc-22-1979` |
| `calc_lot_mass_balance` | Each process and complete foreground route | input_mass = accepted_output + product_coproducts + waste_and_rejects + direct_particulate_mass + samples + closing_inventory - opening_inventory + unexplained_difference. Report the unexplained difference and investigate material deviations. | lot inputs; outputs; shells; rejects; dust/fines; samples; inventories | process and route mass-balance result | `eu-pef-2021-2279` |
| `calc_energy_assignment` | Shared electricity | Assign metered use directly where possible; otherwise use recorded equipment operating time, measured power or another documented causal driver and reconcile assigned totals to the facility meter. | meter readings; power; operating time; production records | kWh assigned to lot and process | `eu-pef-2021-2279` |
| `calc_mutually_exclusive_routes` | Shells and rejected material | For each material portion, product_route_mass × waste_route_mass shall not represent the same physical portion; route totals shall reconcile to the segregated measured mass and carry destination evidence. | segregated mass; route flag; transfer or waste record | product and waste route masses without overlap | `codex-cxc-22-1979`; `codex-cxc-55-2004-2025` |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dqr_identity_and_qualifiers` | Final output | Preserve the exact generic Tiangong flow UUID and declare shelling route, starting condition, raw/dried state, moisture and basis, grade, intended use/specification, aflatoxin-control record, rejected-material disposition, net-mass basis, packaging, and included storage duration. | Product specification; lot record; reference-flow metadata; dispatch document. |
| `dqr_lot_traceability` | All mass and control records | Maintain a traceable link from incoming lot through intermediates, shell and reject partitions, sampling/testing, final net mass and destination records. | Lot genealogy; timestamps; chain of custody; reconciliation worksheet. |
| `dqr_temporal_and_technological_representativeness` | Foreground data | Cover the declared representative production period and relevant seasonal, supplier, grade, moisture, equipment, shift and packaging variability; disclose exclusions and unusual operating conditions. | Sampling plan; production calendar; equipment list; coverage statement. |
| `dqr_measurement_quality` | Mass, moisture, energy and analytical results | Use calibrated or verified instruments and retain units, method identifiers, calibration status, sampling procedures, detection/reporting limits where relevant, and raw-to-aggregated calculations. | Calibration certificates; laboratory report; meter records; calculation files. |
| `dqr_aflatoxin_control` | Each accepted lot | Retain the applicable limit source, intended-use basis, sampling plan, analytical method, result, reporting limit and signed lot decision; visual sorting alone shall not be represented as a quantitative aflatoxin result. | Laboratory result; sampling record; applicable regulation or contract; lot release. |
| `dqr_completeness_and_cutoffs` | Foreground inventory | Include all material and energy inputs, direct emissions, product outputs, wastes, shells, rejects, samples and inventory changes that cross the declared boundary; disclose and justify every cut-off. | Completeness checklist; mass and energy reconciliation; cut-off register. |
| `dqr_reasoned_estimate_replacement` | Every `reasoned_estimate` range | Treat the range as temporary screening guidance only when foreground records and reliable transferable quantitative evidence are unavailable. Disclose its use and replace it as soon as representative batch/period records, audited supplier evidence, equipment measurements, or reviewed external evidence become available; do not present it as a typical or allowed range. | Estimate register; applicability statement; replacement action and trigger record. |
| `dqr_source_representativeness` | Linked upstream and downstream datasets | Document geography, time, technology, product state, moisture basis and allocation compatibility; replace a material proxy when a more representative dataset becomes available. | Dataset metadata; applicability assessment; proxy replacement log. |

## 9. Validation Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `validate_reference_identity` | Reference flow | Require product flow UUID `66ce8a77-8fe1-4513-910c-741aebeec043`, Mass UUID `93a60a56-a3c8-11da-a746-0800200b9a66`, Units of mass UUID `93a60a57-a4c8-11da-a746-0800200c9a66`, and unit kg; reject a substitute or more specific flow as the PCR reference identity. | `unsd-cpc-3-0-2025` |
| `validate_required_qualifiers` | Final dataset | Fail conformance if shelling route/starting condition, raw or dried state, moisture and basis, grade, intended use/specification, rejected-material rule, aflatoxin-control details, net-mass basis, packaging state, or included storage duration is missing. | `codex-cxs-200-1995`; `codex-cxc-22-1979`; `codex-cxc-55-2004-2025` |
| `validate_route_exclusivity` | Alternative inputs and material dispositions | Verify one starting route per lot and verify that each measured shell or rejected-material portion appears in exactly one product-diversion or waste route. Fail on simultaneous duplicate routes or unsupported beneficial-use credit. | `codex-cxc-22-1979`; `codex-cxc-55-2004-2025`; `eu-pef-2021-2279` |
| `validate_net_mass_and_moisture` | Reference amount and physical balance | Verify calibrated gross-minus-tare net mass, consistent moisture basis, and 1 kg normalization. If CXS 200-1995 applicability is claimed, verify kernel moisture does not exceed 9.0% and disclose any stricter destination limit. | `codex-cxs-200-1995` |
| `validate_aflatoxin_control` | Accepted and rejected lots | Verify traceable sampling plan, analytical method, result, unit, reporting limit, applicable limit and intended-use basis, and lot decision. Fail if a visual observation is used as a numeric result or if a non-conforming lot is accepted for an unsupported destination. | `codex-cxc-22-1979`; `codex-cxc-55-2004-2025` |
| `validate_mass_balance` | Each process and complete route | Recalculate the as-received and, where reported, dry-matter balances. Require shells, rejects, dust/fines, samples and inventory changes to be represented and require material unexplained differences to be investigated and disclosed. | `eu-pef-2021-2279` |
| `validate_allocation_and_cutoff` | Multi-output modelling and exclusions | Verify the PEF allocation hierarchy, allocation factors and price/physical basis, and confirm that every cut-off is explicit and justified. Physical quantities shall remain unchanged by burden allocation. | `eu-pef-2021-2279` |
| `validate_packaging` | Bulk and packaged routes | Verify the bulk/packaged qualifier, packaging type and material, packaging mass, and tare exclusion. A packaged route with missing packaging inventory or an unpackaged route with unexplained packaging shall fail. | `codex-cxs-200-1995`; `eu-pef-2021-2279` |
| `validate_reasoned_estimates` | Provisional quantitative ranges | Verify that every `reasoned_estimate` is identified as temporary screening guidance, used only under its stated no-data condition, excluded from claims of typical or allowed performance, and linked to a replacement trigger. |  |
| `validate_data_quality` | Dataset publication profile | Verify lot traceability, temporal and technological coverage, calibration and analytical evidence, upstream dataset representativeness, completeness, and disclosed limitations before the package is used as a secondary or background dataset. | `eu-pef-2021-2279` |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | Foreground production package for shelling, control and gate preparation of generic shelled groundnuts, with a downstream process/lifecyclemodel projection. |
| downstream_use | `secondary_dataset`; `background_dataset` after review, representative upstream linking, and documented allocation. |
| allowed_use | Product-footprint or life-cycle models needing a qualified facility-gate shelled-groundnut input whose route, moisture, grade, aflatoxin-control status, rejected-material disposition, net mass and packaging are compatible. |
| excluded_use | Unqualified substitution for groundnuts in shell, planting seed, roasted/cooked peanuts, peanut oil or other manufactured peanut products; comparative assertions without equivalent function, boundary, quality and data representativeness; food-safety certification. |
| required_metadata | Geography; facility and technology scope; period; shelling route and starting condition; incoming origin/delivery basis; raw/dried state; moisture values and basis; grade; intended use/specification; aflatoxin sampling/method/result/limit/decision; net-mass method; shell/reject routes; packaging bill; storage duration; allocation; cut-offs; linked dataset versions. |
| required_quality_disclosure | Coverage and sampling; calibration and laboratory competence; lot genealogy; mass/energy reconciliation; reasoned estimates and replacement status; proxies; uncertainty; rejected lots; unusual conditions; limitations. |
| update_trigger | Change in product-flow identity, CPC scope, shelling or sorting technology, representative moisture/grade mix, aflatoxin rule or sampling method, intended-use limits, shell/reject disposition, packaging configuration, energy mix, allocation basis, facility coverage, or availability of evidence that replaces a reasoned estimate or material proxy. |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `unsd-cpc-3-0-2025` | `official_guidance` | United Nations Statistics Division, Central Product Classification (CPC) Version 3.0, Explanatory Notes, 30 June 2025, subclass 21421 “Groundnuts, shelled”. https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Exp_Notes_30Jun2025.pdf (retrieved 2026-08-11). | Generic product-category identity and separation from in-shell groundnuts and further manufactured products. |
| `codex-cxs-200-1995` | `standard` | Codex Alimentarius, CXS 200-1995, Standard for Peanuts. https://www.fao.org/input/download/standards/63/CXS_200e.pdf (retrieved 2026-08-11). | Product definition for its intended-use scope, kernel moisture requirement, quality/foreign-matter controls, packaging and lot information. |
| `codex-cxc-22-1979` | `standard` | Codex Alimentarius, CXC 22-1979, Code of Hygienic Practice for Groundnuts (Peanuts). https://workspace.fao.org/sites/codex/Standards/CXC%2022-1979/CXC_022e.pdf (retrieved 2026-08-11). | Commercial shelling process decomposition, pre-cleaning, shelling/sizing, sorting, moisture-safe handling, lot acceptance/rejection, storage and traceability. |
| `codex-cxc-55-2004-2025` | `standard` | Codex Alimentarius, CXC 55-2004, Code of Practice for the Prevention and Reduction of Aflatoxin Contamination in Peanuts, revised 2025. https://workspace.fao.org/sites/codex/Standards/CXC%2055-2004/CXC_055e.pdf (retrieved 2026-08-11). | Aflatoxin-control stages, sampling/testing and lot-control evidence, segregation and disposition safeguards. |
| `eu-pef-2021-2279` | `official_guidance` | European Commission, Commission Recommendation (EU) 2021/2279 of 15 December 2021, Annex I Product Environmental Footprint Method. ELI: http://data.europa.eu/eli/reco/2021/2279/oj (retrieved 2026-08-11). | Functional unit and reference flow, life-cycle inventory boundary, allocation hierarchy, cut-off disclosure, data collection, data quality, representativeness and verification principles. |
