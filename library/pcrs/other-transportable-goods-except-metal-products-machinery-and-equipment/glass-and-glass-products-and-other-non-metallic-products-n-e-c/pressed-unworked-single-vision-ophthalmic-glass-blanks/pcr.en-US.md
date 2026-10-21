---
pcr_id: pcr.other-transportable-goods-except-metal-products-machinery-and-equipment.glass-and-glass-products-and-other-non-metallic-products-n-e-c.pressed-unworked-single-vision-ophthalmic-glass-blanks
language: en-US
sync_with: pcr.zh-CN.md
status: candidate
content_maturity: authored_methodology
translation_status: canonical
---

# Pressed unworked single-vision ophthalmic glass blanks

## 1. Scope and Applicability

This attributional PCR selects one product boundary: an uncoated nonphotochromic single-vision silicate spectacle-glass pressing blank of the standard crown family whose surfaces remain optically unworked. Cover the complete whole-raw-material-to-first-quality-release route using electric melting/fining/conditioning, gob shearing, hydraulic pressing, cooling and electric annealing. Record each actual supplied recipe component individually; no universal recipe, yield, density, energy, emission, temperature or lifetime defaults apply.

Exclude clock/watch cover glasses, spheres/segments, finished optical lenses, precision reheat moulding, fused segments, silver-halide photochromic activation, coating, chemical/thermal strengthening, ordinary cold-ground sheets and eyewear assembly. Adjacent specification categories, gobs and segments are counterexamples, not one combined method. Technical route synthesis does not establish one SKU or factory; an actual data package must prove its declared route.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.other-transportable-goods-except-metal-products-machinery-and-equipment.glass-and-glass-products-and-other-non-metallic-products-n-e-c.pressed-unworked-single-vision-ophthalmic-glass-blanks |
| classification_refs | CPC 3.0:37194; narrower |
| covered_products | Unworked nonphotochromic single-vision silicate ophthalmic pressings |
| excluded_products | Watch covers; glass spheres; segments; specialised photochromic/high-index routes; finished lenses; ordinary cold-ground sheets |
| representative_product | One drawing-defined annealed single-vision bare ophthalmic blank |
| production_route | Whole batch supplies → electric melt/fine/condition → gob shear → hydraulic press/cool → electric anneal/cool → first-release inspection |
| market_state | Optically unworked mineral glass blank supplied for later lens surfacing |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Unworked pressing stock for subsequent single-vision spectacle-lens manufacture |
| How much | 1 kg net dry bare blank at first quality release |
| How well | Accepted against actual drawing and material/stress/dimension/defect methods; no finished-lens performance warranty |
| How long or cycle | One unique first quality release; later services retain their actual original-cohort observation window |
| reference_flow_link | finished_blank |

| Field | Value |
| --- | --- |
| Reference amount | 1 |
| Reference product flow | Clock or watch glasses and similar glasses, glasses for spectacles, not optically worked, hollow glass spheres and their segments for the manufacture of such glasses `86f99422-b0c1-4f90-8150-aa288e54a03f` |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | single-vision blank drawing and dimensional configuration; silicate formulation and each whole supplied raw material; nonphotochromic and optically unworked surface state; electric melting/fining/conditioning and electric annealing route; press/shear/mould and actual lubrication state; material quality and residual-stress acceptance method; unique first-release cohort and net dry bare-glass kg Q; measured item-mass conversion configuration if count is used; opening/closing raw WIP FG and installed-fluid vectors; source-specific native identity restrictions and provider boundary; actual water phase/species evidence and physical closure; packaging construction and full stock/return routes; original-cohort services and explicitly observed horizon |

All required qualifiers belong in dataset metadata, descriptions, reference comments or equivalent fields. Reference-product and later physical movements using this identity retain these restrictions: Only the not-optically-worked spectacle-glass member of this broad manufactured Product family is selected: one uncoated nonphotochromic single-vision silicate blank after pressing and annealing. Other members in its official basename do not enter this exchange. Native mix is at plant; no CAS, recipe, grade, optical finish, geometry, geography or provider is specified. The Chinese comment refers to making such articles; neither it nor the generic finished-product route proves a polished lens. Actual unworked state and drawing/QC must be documented.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| reference_mass | reference product | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Q is unique first-released dry bare-blank kg; closingFG is already in Q. Count-to-kg requires measured M for the same configuration or whole-lot weighing, never guessed item mass. |
| energy_unit | electricity; service_electricity | Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` | MJ | Convert metered kWh to MJ by3.6 before attribution and the single normalization; electricity has no carrier mass. |
| mass_unit | silica; soda; potash; limestone; boric; alumina; antimony; ceria; nitrate; sulfate; cullet_in; mains_water; diwater; release_agent; hydraulic_oil; machine_oil; platinum_contact; refractory; mould; shear; filter; melter_asset; press_asset; lehr_asset; air_n2; air_o2; air_ar; air_h2o; air_co2; cullet_out; glass_waste; batch_dust; washwater; cool_purge; filter_waste; refractory_waste; mould_waste; shear_waste; platinum_return; exchange_return; co2_process; no_air; no2_air; so2_air; water_air; n2_air; o2_air; ar_air; co2_pass; silica_dust_air; boric_air; b2o3_air; fg_received; fg_dispatch; service_glass_waste; tray_purchase; tray_returned_in; tray_gross_out; tray_return_out; tray_waste; carton_purchase; carton_returned_in; carton_gross_out; carton_return_out; carton_waste; waste_hydraulic_oil; waste_machine_oil; exchange_water_in | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Whole materials and actual individual species use kg with independently measured moisture/phase/density; diagnostic totals do not substitute species. Do not apply this rule to MJ or tkm. |
| transport_unit | freight | Transport mass-distance | tkm | Use actual cargo tonnes and distance km; a mass-referenced truck/transport flow is incompatible. |

## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Receipt of each actual whole mineral/chemical supply and compatible cullet with upstream supply/transport |
| starting_condition_role | foreground_gate |
| product_classification_scope | Only the unworked single-vision spectacle-glass pressing subset of CPC3.0:37194 |
| recursive_input_rule | Same-category bought/returned supplies keep supplier/original-cohort burdens; internal cullet/transfers pair and cancel each vector |
| upstream_dataset_requirement | Upstream supply datasets matching actual form/native restrictions/provider boundary; no whole-provider plus constituent duplication |
| disclosure | Route/drawing/grade/supplier, all modes and stock history, species/water evidence, packaging and observed horizon |

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| boundary_full | all processes | Start at receipt of each actual whole mineral/chemical supply and compatible cullet with upstream supply burdens and actual inbound logistics; include weighing/mixing, electric melt/fining, platinum-contact stirring/conditioning, gob shearing, hydraulic pressing/cooling, electric annealing/cooling, inspection and unique first quality release. Retain actual water/air utilities, abatement, maintenance, all nonproductive conditions, stocks and separate post-release services. Do not replace this manufacture with bought-blank packing. | `jrc-glass-bref-2013`; `corning-ophthalmic-manufacturing`; `corning-ophthalmic-spec-f-2013` |
| boundary_state | all processes | Apply only to the declared uncoated nonphotochromic single-vision silicate pressing blank. Do not require one modern order to prove the general unit operations; technical synthesis is not a same-factory recipe. Actual fuel-fired, reheat-pressed, photochromic-activation, fused-segment, optical-polishing/coating or tempered-lens routes need separate applicability review. If actual ancillary fuel or steam exists, disclose and add each atomic real supply, carrier mass/heat and return, rather than asserting zero or omitting it. | `jrc-glass-bref-2013`; `corning-ophthalmic-manufacturing` |
| boundary_history | manufacture | For every extensive exchange i retain its independent unnormalised inherited burden vector. A_i = B_open_i + C_i - B_close_i after actual unit conversion and attribution; manufacturing B_close includes raw stock, WIP and genuinely unassigned non-WIP stores, never this cohort closingFG already released into Q. Include failed batches, zero-output periods, start/stop, idle, cleanup, rejects and actual rework. No unmeasured history is set to zero. Distinguish gross receipts from a proved already-stock-adjusted material-consumption or issue basis. Correct the same raw-stock change once only; never apply opening/closing raw stock again to already measured consumption. Keep each disjoint raw/WIP and included non-WIP installed/store physical quantity and every inherited exchange vector separately. An explicit purchase/receipt, return, gross dispatch or waste-movement card retains its full converted physical leg; allocation/stock correction affects the separate burden or consumption vector, never that gross movement. | `jrc-ilcd-attributional-2010` |
| boundary_physical | all processes | Close manufacturing, FG/service and combined physical gates independently of burden allocation. For each whole material and each relevant element: opening physical stocks + gross actual external inputs = closing stocks + gross actual external outputs; internal transfers cancel exactly. Keep installed assets/fluids separately with new/repair/retirement events and wear. Do not shrink gross receipts, returns, shipments, wastes or packaging by economic allocation shares. | `jrc-glass-bref-2013`; `jrc-ilcd-attributional-2010` |
| boundary_species | all processes | Whole mass and elemental balances do not prove molecular speciation or reaction-water pathways. Independently determine moisture, free/structural/chemically generated water, evaporation and actual phase. For any unresolved two-unknown water/species system obtain a second independent observation; one closure residual cannot determine both. Separate gross air species, no aggregate air plus children; no conversion of COD/VOC/NOx/total-B/total-C or size bins into invented molecular species. | `jrc-glass-bref-2013` |
| boundary_expand | all inventory rows | This is a finite initial atomic inventory, not an assertion that every site contains only these materials. Compare each actual supply, asset/repair event, maintenance formulation, air/water outlet and packaging against it; add every real missing individual exchange, its native extensive property, protocol and uncertainty before modelling. Unknown actual core product/route/gate or unclosed required physical/species history prevents usable results. An auxiliary UUID/provider gap alone does not change product identity. | `jrc-glass-bref-2013` |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| manufacture | Whole raw materials to bare-blank first release | required | Declared single-vision pressing route | foreground | 1 kg reference flow |
| services | Original-cohort post-release services | conditional | Actually occurring in a stated observed window | supporting | Original Q, no new production |

### Process: Complete pressing-blank manufacture (`manufacture`)

#### Inputs

##### Product flows

###### High-purity quartz sand (`silica`)

Weigh whole supplied washed quartz sand for the actual low-impurity batch. Require consistent washing/purification route and crystalline quartz identity; polymorph collections cannot establish a compatible quartz-grade identity. This concrete atomic flow UUID remains unbound; match actual identity/state before data-package use, never a collection-flow substitute. Quantity linkage: this row x_i is the single calc_reference result from undivided raw `cp_batch` after calc_raw_conversion, calc_history and actual attribution; cards and aggregation never divide again.

- Selected flow: High-purity quartz sand
- Flow property / unit: Mass / kg
- Amount rule: Use this row once-calculated x_i; collect undivided raw quantities using `cp_batch`.
- Value mode: Calculated from collection (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_batch`
- Sources: `jrc-glass-bref-2013`

###### Anhydrous soda ash (`soda`)

Whole supplied Na2CO3 powder, measured free moisture/assay/impurities. A hydrometallurgical-recycling route or fixed95% natural-alkali grade cannot identify an unspecified glass-batch supply. This concrete atomic flow UUID remains unbound; match actual identity/state before data-package use, never a collection-flow substitute. Quantity linkage: this row x_i is the single calc_reference result from undivided raw `cp_batch` after calc_raw_conversion, calc_history and actual attribution; cards and aggregation never divide again.

- Selected flow: Anhydrous soda ash
- Flow property / unit: Mass / kg
- Amount rule: Use this row once-calculated x_i; collect undivided raw quantities using `cp_batch`.
- Value mode: Calculated from collection (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_batch`
- Sources: `jrc-glass-bref-2013`

###### Potassium carbonate batch input (`potash`)

Include only when the actual declared single-vision silicate recipe purchases this input. Weigh the whole supplied substance once; oxide/active assay is a constituent subledger, never an additional purchase. No default recipe proportion. Synthetic solid K2CO3 Product, CAS584-08-7, production mix at factory; native molar-mass descriptor is not a purchased amount or purity. Confirm hydration/assay and producer route; fertilizer potash mixtures are excluded. Native reference property → unit group → reference unit: `93a60a56-a3c8-11da-a746-0800200b9a66` → `93a60a57-a4c8-11da-a746-0800200c9a66` → kg. Quantity linkage: this row x_i is the single calc_reference result from undivided raw `cp_batch` after calc_raw_conversion, calc_history and actual attribution; cards and aggregation never divide again.

- Selected flow: Potassium carbonate `50187d31-fd0a-47c3-9aa2-84402ffb625e`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use this row once-calculated x_i; collect undivided raw quantities using `cp_batch`.
- Value mode: Calculated from collection (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_batch`
- Sources: `jrc-glass-bref-2013`

###### Limestone batch input (`limestone`)

Include only when the actual declared single-vision silicate recipe purchases this input. Weigh the whole supplied substance once; oxide/active assay is a constituent subledger, never an additional purchase. No default recipe proportion. Limestone Product on Mass, with composition, grade, route and provider explicitly unspecified; no invented pure-CaCO3 assay or calcite equivalence. Use the entire actual supplied mineral and its measured impurities. Native reference property → unit group → reference unit: `93a60a56-a3c8-11da-a746-0800200b9a66` → `93a60a57-a4c8-11da-a746-0800200c9a66` → kg. Quantity linkage: this row x_i is the single calc_reference result from undivided raw `cp_batch` after calc_raw_conversion, calc_history and actual attribution; cards and aggregation never divide again.

- Selected flow: Limestone `6cf9f186-6e7e-40b5-800e-6759a429e7a8`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use this row once-calculated x_i; collect undivided raw quantities using `cp_batch`.
- Value mode: Calculated from collection (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_batch`
- Sources: `jrc-glass-bref-2013`

###### Orthoboric acid batch input (`boric`)

Include only when the actual declared single-vision silicate recipe purchases this input. Weigh the whole supplied substance once; oxide/active assay is a constituent subledger, never an additional purchase. No default recipe proportion. Orthoboric-acid crystalline/powder Product from primary production at plant; no native CAS or fixed assay. Do not turn it into borax or B2O3. Retain free moisture and independently evidenced dehydration/reaction-water pathways. Native reference property → unit group → reference unit: `93a60a56-a3c8-11da-a746-0800200b9a66` → `93a60a57-a4c8-11da-a746-0800200c9a66` → kg. Quantity linkage: this row x_i is the single calc_reference result from undivided raw `cp_batch` after calc_raw_conversion, calc_history and actual attribution; cards and aggregation never divide again.

- Selected flow: Boric acid `5afb91cd-b49f-481a-9364-ad3100c47f2a`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use this row once-calculated x_i; collect undivided raw quantities using `cp_batch`.
- Value mode: Calculated from collection (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_batch`
- Sources: `jrc-glass-bref-2013`

###### Alumina batch input (`alumina`)

Include only when the actual declared single-vision silicate recipe purchases this input. Weigh the whole supplied substance once; oxide/active assay is a constituent subledger, never an additional purchase. No default recipe proportion. Bayer-process alumina Product at plant; native synonyms/comment mention corundum and hydrated occurrence but do not authorize buying aluminium hydroxide as alumina. Confirm supplied oxide phase, hydration, assay and route; no density is inferred. Native reference property → unit group → reference unit: `93a60a56-a3c8-11da-a746-0800200b9a66` → `93a60a57-a4c8-11da-a746-0800200c9a66` → kg. Quantity linkage: this row x_i is the single calc_reference result from undivided raw `cp_batch` after calc_raw_conversion, calc_history and actual attribution; cards and aggregation never divide again.

- Selected flow: alumina `7bdf8e03-06f3-4377-bd78-ec92647a53ab`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use this row once-calculated x_i; collect undivided raw quantities using `cp_batch`.
- Value mode: Calculated from collection (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_batch`
- Sources: `jrc-glass-bref-2013`

###### Antimony trioxide fining input (`antimony`)

Include only when the actual declared single-vision silicate recipe purchases this input. Weigh the whole supplied substance once; oxide/active assay is a constituent subledger, never an additional purchase. No default recipe proportion. Solid Sb2O3 Product, CAS1309-64-4, factory mix, no fixed production route or purity. Use only actual separately purchased fining input; not a flame-retardant formulated mixture or measured total-Sb emission. Native reference property → unit group → reference unit: `93a60a56-a3c8-11da-a746-0800200b9a66` → `93a60a57-a4c8-11da-a746-0800200c9a66` → kg. Quantity linkage: this row x_i is the single calc_reference result from undivided raw `cp_batch` after calc_raw_conversion, calc_history and actual attribution; cards and aggregation never divide again.

- Selected flow: Antimony(III) oxide `846c44a9-426c-4f77-ab68-c52c894a4213`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use this row once-calculated x_i; collect undivided raw quantities using `cp_batch`.
- Value mode: Calculated from collection (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_batch`
- Sources: `jrc-glass-bref-2013`

###### Cerium dioxide batch input (`ceria`)

Include only when the actual declared single-vision silicate recipe purchases this input. Weigh the whole supplied substance once; oxide/active assay is a constituent subledger, never an additional purchase. No default recipe proportion. CeO2 Product, CAS1306-38-3, factory mix, no fixed route/assay. This card is a batch additive only when actually present; polishing slurry and post-release optical surfacing are outside this route. Native reference property → unit group → reference unit: `93a60a56-a3c8-11da-a746-0800200b9a66` → `93a60a57-a4c8-11da-a746-0800200c9a66` → kg. Quantity linkage: this row x_i is the single calc_reference result from undivided raw `cp_batch` after calc_raw_conversion, calc_history and actual attribution; cards and aggregation never divide again.

- Selected flow: Cerium oxide `b23ee368-01e2-4fcd-8e8f-e8115ee04555`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use this row once-calculated x_i; collect undivided raw quantities using `cp_batch`.
- Value mode: Calculated from collection (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_batch`
- Sources: `jrc-glass-bref-2013`

###### Sodium nitrate crystals (`nitrate`)

Conditional actual oxidant; do not use an elementary resource/emission UUID for purchased crystalline NaNO3. Record whole supply and real decomposition/speciation rather than a universal reaction yield. This concrete atomic flow UUID remains unbound; match actual identity/state before data-package use, never a collection-flow substitute. Quantity linkage: this row x_i is the single calc_reference result from undivided raw `cp_batch` after calc_raw_conversion, calc_history and actual attribution; cards and aggregation never divide again.

- Selected flow: Sodium nitrate crystals
- Flow property / unit: Mass / kg
- Amount rule: Use this row once-calculated x_i; collect undivided raw quantities using `cp_batch`.
- Value mode: Calculated from collection (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_batch`
- Sources: `jrc-glass-bref-2013`

###### Anhydrous sodium sulfate fining salt (`sulfate`)

Conditional whole purchased fining salt. Require actual grade and crystal-structure compatibility; inconsistent monoclinic/orthorhombic descriptors do not establish it. Do not substitute sulfate-bearing waste. This concrete atomic flow UUID remains unbound; match actual identity/state before data-package use, never a collection-flow substitute. Quantity linkage: this row x_i is the single calc_reference result from undivided raw `cp_batch` after calc_raw_conversion, calc_history and actual attribution; cards and aggregation never divide again.

- Selected flow: Anhydrous sodium sulfate fining salt
- Flow property / unit: Mass / kg
- Amount rule: Use this row once-calculated x_i; collect undivided raw quantities using `cp_batch`.
- Value mode: Calculated from collection (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_batch`
- Sources: `jrc-glass-bref-2013`

###### Composition-matched ophthalmic glass cullet (`cullet_in`)

Actual same-composition internal returns or separately purchased compatible cullet, distinguished in raw records; close internal return_in against return_out by mass and inherited burden vector. Incoming post-release returns keep the original cohort, never virgin zero-burden cullet. This concrete atomic flow UUID remains unbound; match actual identity/state before data-package use, never a collection-flow substitute. Quantity linkage: this row x_i is the single calc_reference result from undivided raw `cp_batch` after calc_raw_conversion, calc_history and actual attribution; cards and aggregation never divide again.

- Selected flow: Composition-matched ophthalmic glass cullet
- Flow property / unit: Mass / kg
- Amount rule: Use this row once-calculated x_i; collect undivided raw quantities using `cp_batch`.
- Value mode: Calculated from collection (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_batch`
- Sources: `jrc-glass-bref-2013`

###### Manufacturing electricity (`electricity`)

Record separate real meters for raw handling, electric melting/fining/stirring/conditioning, shears, hydraulic drives, pressing/cooling, electric annealing, water pumping, compressed-air generation, abatement, start-stop, idle and cleanup. Sum without double-counting submeters/main supply. CN customer-side grid-average alternating-current Product, 1–35kV, consumption mix to user, Net calorific value/MJ. Adopt only for that delivery boundary/voltage/geography; replace identity for other locations, voltage or contractual supply. Do not add transmission/distribution already in the provider. 1kWh=3.6MJ; energy has no carrier mass. Native reference property → unit group → reference unit: `93a60a56-a3c8-11da-a746-0800200c9a66` → `93a60a57-a3c8-11da-a746-0800200c9a66` → MJ. Quantity linkage: this row x_i is the single calc_reference result from undivided raw `cp_energy` after calc_raw_conversion, calc_history and actual attribution; cards and aggregation never divide again.

- Selected flow: Alternating current `3d76981f-964a-4865-b588-0e067a2a1163`
- Flow property / unit: Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- Amount rule: Use this row once-calculated x_i; collect undivided raw quantities using `cp_energy`.
- Value mode: Calculated from collection (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_energy`
- Sources: `jrc-glass-bref-2013`; `corning-ophthalmic-manufacturing`

###### Treated mains water (`mains_water`)

Record actual cooling/cleaning makeup and treatment source. Do not use a Hong-Kong water supply or its screening1000kg/m3 as a universal density. Separate each actual circuit. This concrete atomic flow UUID remains unbound; match actual identity/state before data-package use, never a collection-flow substitute. Quantity linkage: this row x_i is the single calc_reference result from undivided raw `cp_water` after calc_raw_conversion, calc_history and actual attribution; cards and aggregation never divide again.

- Selected flow: Treated mains water
- Flow property / unit: Mass / kg
- Amount rule: Use this row once-calculated x_i; collect undivided raw quantities using `cp_water`.
- Value mode: Calculated from collection (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_water`
- Sources: `jrc-glass-bref-2013`

###### Deionised water supply (`diwater`)

Conditional supplied deionised cooling/cleaning or laboratory water, measured as whole supply; document supplier water-energy boundary. On-site preparation collects its real water, electricity and each resin/reagent rather than a second purchased provider. De-ionised-water Product, Mass; no native CAS, geography, provider or temperature. Match true supply quality and boundary, not mains water or environmental abstraction; density/state require independent measurement. Native reference property → unit group → reference unit: `93a60a56-a3c8-11da-a746-0800200b9a66` → `93a60a57-a4c8-11da-a746-0800200c9a66` → kg. Quantity linkage: this row x_i is the single calc_reference result from undivided raw `cp_water` after calc_raw_conversion, calc_history and actual attribution; cards and aggregation never divide again.

- Selected flow: de-ionised water `4f197bf0-7b3b-11dd-ad8b-0800200c9a66`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use this row once-calculated x_i; collect undivided raw quantities using `cp_water`.
- Value mode: Calculated from collection (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_water`
- Sources: `jrc-glass-bref-2013`

###### Aqueous graphite mould-release suspension (`release_agent`)

Conditional whole supplied graphite-based release formulation. Record carrier water, binder and graphite assays only as subledger. If mixed on site, replace the bought formulation with every actual separately purchased constituent and mixing energy/loss. Native graphitic lubricant uses Volume and is not a mass binding for a missing density. This concrete atomic flow UUID remains unbound; match actual identity/state before data-package use, never a collection-flow substitute. Quantity linkage: this row x_i is the single calc_reference result from undivided raw `cp_aux` after calc_raw_conversion, calc_history and actual attribution; cards and aggregation never divide again.

- Selected flow: Aqueous graphite mould-release suspension
- Flow property / unit: Mass / kg
- Amount rule: Use this row once-calculated x_i; collect undivided raw quantities using `cp_aux`.
- Value mode: Calculated from collection (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_aux`
- Sources: `jrc-glass-bref-2013`

###### Mineral hydraulic oil formulation (`hydraulic_oil`)

Whole supplied actual hydraulic formulation for the press; installed fluid, top-up, removed fluid and leaks reconcile separately. A Volume-referenced hydraulic-fluid supply requires independently measured density before kg conversion; no kg/m3 is guessed. This concrete atomic flow UUID remains unbound; match actual identity/state before data-package use, never a collection-flow substitute. Quantity linkage: this row x_i is the single calc_reference result from undivided raw `cp_aux` after calc_raw_conversion, calc_history and actual attribution; cards and aggregation never divide again.

- Selected flow: Mineral hydraulic oil formulation
- Flow property / unit: Mass / kg
- Amount rule: Use this row once-calculated x_i; collect undivided raw quantities using `cp_aux`.
- Value mode: Calculated from collection (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_aux`
- Sources: `jrc-glass-bref-2013`

###### Mineral lubricating oil formulation (`machine_oil`)

Separate real machine lubricant from hydraulic oil and mould release. Whole purchased formulation once, actual in-use fluid stock and water contamination retained. A PAO synthesis row does not identify mineral oil. This concrete atomic flow UUID remains unbound; match actual identity/state before data-package use, never a collection-flow substitute. Quantity linkage: this row x_i is the single calc_reference result from undivided raw `cp_aux` after calc_raw_conversion, calc_history and actual attribution; cards and aggregation never divide again.

- Selected flow: Mineral lubricating oil formulation
- Flow property / unit: Mass / kg
- Amount rule: Use this row once-calculated x_i; collect undivided raw quantities using `cp_aux`.
- Value mode: Calculated from collection (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_aux`
- Sources: `jrc-glass-bref-2013`

###### Platinum glass-contact component (`platinum_contact`)

Conditional actual new/repaired asset or part: collect physical receipts, installation, opening/closing stocks, wear, retired/returned parts and embodied-burden history separately from current service burden. Do not put a whole new machine per kg, assign a fixed lifetime or scale physical receipts by an economic share. Match actual alloy/component construction; a metal resource is not a finished part. Gross physical receipts/stocks/returns/wastes are never allocation-scaled; card x_i is only the upstream supply burden attributable to separately documented current capital service, expressed through actual history, justified service relationship and native extensive unit. Unknown service basis/history remains unresolved; whole current receipts are not inserted directly into x_i. This concrete atomic flow UUID remains unbound; match actual identity/state before data-package use, never a collection-flow substitute. Quantity linkage: this row x_i is the single calc_reference result from undivided raw `cp_assets` after calc_raw_conversion, calc_history and actual attribution; cards and aggregation never divide again.

- Selected flow: Platinum glass-contact component
- Flow property / unit: Mass / kg
- Amount rule: Use this row once-calculated x_i; collect undivided raw quantities using `cp_assets`.
- Value mode: Calculated from collection (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_assets`
- Sources: `jrc-glass-bref-2013`

###### Alumina-silica furnace refractory brick (`refractory`)

Conditional actual new/repaired asset or part: collect physical receipts, installation, opening/closing stocks, wear, retired/returned parts and embodied-burden history separately from current service burden. Do not put a whole new machine per kg, assign a fixed lifetime or scale physical receipts by an economic share. Match actual alloy/component construction; a metal resource is not a finished part. Gross physical receipts/stocks/returns/wastes are never allocation-scaled; card x_i is only the upstream supply burden attributable to separately documented current capital service, expressed through actual history, justified service relationship and native extensive unit. Unknown service basis/history remains unresolved; whole current receipts are not inserted directly into x_i. This concrete atomic flow UUID remains unbound; match actual identity/state before data-package use, never a collection-flow substitute. Quantity linkage: this row x_i is the single calc_reference result from undivided raw `cp_assets` after calc_raw_conversion, calc_history and actual attribution; cards and aggregation never divide again.

- Selected flow: Alumina-silica furnace refractory brick
- Flow property / unit: Mass / kg
- Amount rule: Use this row once-calculated x_i; collect undivided raw quantities using `cp_assets`.
- Value mode: Calculated from collection (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_assets`
- Sources: `jrc-glass-bref-2013`

###### Steel ophthalmic pressing mould (`mould`)

Conditional actual new/repaired asset or part: collect physical receipts, installation, opening/closing stocks, wear, retired/returned parts and embodied-burden history separately from current service burden. Do not put a whole new machine per kg, assign a fixed lifetime or scale physical receipts by an economic share. Match actual alloy/component construction; a metal resource is not a finished part. Gross physical receipts/stocks/returns/wastes are never allocation-scaled; card x_i is only the upstream supply burden attributable to separately documented current capital service, expressed through actual history, justified service relationship and native extensive unit. Unknown service basis/history remains unresolved; whole current receipts are not inserted directly into x_i. This concrete atomic flow UUID remains unbound; match actual identity/state before data-package use, never a collection-flow substitute. Quantity linkage: this row x_i is the single calc_reference result from undivided raw `cp_assets` after calc_raw_conversion, calc_history and actual attribution; cards and aggregation never divide again.

- Selected flow: Steel ophthalmic pressing mould
- Flow property / unit: Mass / kg
- Amount rule: Use this row once-calculated x_i; collect undivided raw quantities using `cp_assets`.
- Value mode: Calculated from collection (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_assets`
- Sources: `jrc-glass-bref-2013`

###### Steel gob-shear blade (`shear`)

Conditional actual new/repaired asset or part: collect physical receipts, installation, opening/closing stocks, wear, retired/returned parts and embodied-burden history separately from current service burden. Do not put a whole new machine per kg, assign a fixed lifetime or scale physical receipts by an economic share. Match actual alloy/component construction; a metal resource is not a finished part. Gross physical receipts/stocks/returns/wastes are never allocation-scaled; card x_i is only the upstream supply burden attributable to separately documented current capital service, expressed through actual history, justified service relationship and native extensive unit. Unknown service basis/history remains unresolved; whole current receipts are not inserted directly into x_i. This concrete atomic flow UUID remains unbound; match actual identity/state before data-package use, never a collection-flow substitute. Quantity linkage: this row x_i is the single calc_reference result from undivided raw `cp_assets` after calc_raw_conversion, calc_history and actual attribution; cards and aggregation never divide again.

- Selected flow: Steel gob-shear blade
- Flow property / unit: Mass / kg
- Amount rule: Use this row once-calculated x_i; collect undivided raw quantities using `cp_assets`.
- Value mode: Calculated from collection (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_assets`
- Sources: `jrc-glass-bref-2013`

###### Polyester dust-filter bag (`filter`)

Conditional actual new/repaired asset or part: collect physical receipts, installation, opening/closing stocks, wear, retired/returned parts and embodied-burden history separately from current service burden. Do not put a whole new machine per kg, assign a fixed lifetime or scale physical receipts by an economic share. Match actual alloy/component construction; a metal resource is not a finished part. Gross physical receipts/stocks/returns/wastes are never allocation-scaled; card x_i is only the upstream supply burden attributable to separately documented current capital service, expressed through actual history, justified service relationship and native extensive unit. Unknown service basis/history remains unresolved; whole current receipts are not inserted directly into x_i. This concrete atomic flow UUID remains unbound; match actual identity/state before data-package use, never a collection-flow substitute. Quantity linkage: this row x_i is the single calc_reference result from undivided raw `cp_assets` after calc_raw_conversion, calc_history and actual attribution; cards and aggregation never divide again.

- Selected flow: Polyester dust-filter bag
- Flow property / unit: Mass / kg
- Amount rule: Use this row once-calculated x_i; collect undivided raw quantities using `cp_assets`.
- Value mode: Calculated from collection (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_assets`
- Sources: `jrc-glass-bref-2013`

###### Electric glass melter assembly (`melter_asset`)

Conditional actual new/repaired asset or part: collect physical receipts, installation, opening/closing stocks, wear, retired/returned parts and embodied-burden history separately from current service burden. Do not put a whole new machine per kg, assign a fixed lifetime or scale physical receipts by an economic share. Match actual alloy/component construction; a metal resource is not a finished part. Gross physical receipts/stocks/returns/wastes are never allocation-scaled; card x_i is only the upstream supply burden attributable to separately documented current capital service, expressed through actual history, justified service relationship and native extensive unit. Unknown service basis/history remains unresolved; whole current receipts are not inserted directly into x_i. This concrete atomic flow UUID remains unbound; match actual identity/state before data-package use, never a collection-flow substitute. Quantity linkage: this row x_i is the single calc_reference result from undivided raw `cp_assets` after calc_raw_conversion, calc_history and actual attribution; cards and aggregation never divide again.

- Selected flow: Electric glass melter assembly
- Flow property / unit: Mass / kg
- Amount rule: Use this row once-calculated x_i; collect undivided raw quantities using `cp_assets`.
- Value mode: Calculated from collection (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_assets`
- Sources: `jrc-glass-bref-2013`

###### Hydraulic glass press assembly (`press_asset`)

Conditional actual new/repaired asset or part: collect physical receipts, installation, opening/closing stocks, wear, retired/returned parts and embodied-burden history separately from current service burden. Do not put a whole new machine per kg, assign a fixed lifetime or scale physical receipts by an economic share. Match actual alloy/component construction; a metal resource is not a finished part. Gross physical receipts/stocks/returns/wastes are never allocation-scaled; card x_i is only the upstream supply burden attributable to separately documented current capital service, expressed through actual history, justified service relationship and native extensive unit. Unknown service basis/history remains unresolved; whole current receipts are not inserted directly into x_i. This concrete atomic flow UUID remains unbound; match actual identity/state before data-package use, never a collection-flow substitute. Quantity linkage: this row x_i is the single calc_reference result from undivided raw `cp_assets` after calc_raw_conversion, calc_history and actual attribution; cards and aggregation never divide again.

- Selected flow: Hydraulic glass press assembly
- Flow property / unit: Mass / kg
- Amount rule: Use this row once-calculated x_i; collect undivided raw quantities using `cp_assets`.
- Value mode: Calculated from collection (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_assets`
- Sources: `jrc-glass-bref-2013`

###### Electric annealing lehr assembly (`lehr_asset`)

Conditional actual new/repaired asset or part: collect physical receipts, installation, opening/closing stocks, wear, retired/returned parts and embodied-burden history separately from current service burden. Do not put a whole new machine per kg, assign a fixed lifetime or scale physical receipts by an economic share. Match actual alloy/component construction; a metal resource is not a finished part. Gross physical receipts/stocks/returns/wastes are never allocation-scaled; card x_i is only the upstream supply burden attributable to separately documented current capital service, expressed through actual history, justified service relationship and native extensive unit. Unknown service basis/history remains unresolved; whole current receipts are not inserted directly into x_i. This concrete atomic flow UUID remains unbound; match actual identity/state before data-package use, never a collection-flow substitute. Quantity linkage: this row x_i is the single calc_reference result from undivided raw `cp_assets` after calc_raw_conversion, calc_history and actual attribution; cards and aggregation never divide again.

- Selected flow: Electric annealing lehr assembly
- Flow property / unit: Mass / kg
- Amount rule: Use this row once-calculated x_i; collect undivided raw quantities using `cp_assets`.
- Value mode: Calculated from collection (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_assets`
- Sources: `jrc-glass-bref-2013`

###### Road freight service for glass-batch supply (`freight`)

Collect each shipment actual load mass, distance, loading/utilisation and empty-return boundary; tkm is mass-distance, not truck mass. A mass-referenced freight identity is incompatible with tkm. Do not double count freight already in the supplier boundary. This concrete atomic flow UUID remains unbound; match actual identity/state before data-package use, never a collection-flow substitute. Quantity linkage: this row x_i is the single calc_reference result from undivided raw `cp_transport` after calc_raw_conversion, calc_history and actual attribution; cards and aggregation never divide again.

- Selected flow: Road freight service for glass-batch supply
- Flow property / unit: Transport mass-distance / tkm
- Amount rule: Use this row once-calculated x_i; collect undivided raw quantities using `cp_transport`.
- Value mode: Calculated from collection (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_transport`
- Sources: `jrc-ilcd-attributional-2010`

###### External heat-exchange water supplied (`exchange_water_in`)

Conditional real supplier water entering a separate closed exchanger; record whole gross mass and temperature/pressure/enthalpy, linked exchange_return and provider water-energy contract. No default steam or boiler is inferred. This concrete atomic flow UUID remains unbound; match actual identity/state before data-package use, never a collection-flow substitute. Quantity linkage: this row x_i is the single calc_reference result from undivided raw `cp_water` after calc_raw_conversion, calc_history and actual attribution; cards and aggregation never divide again.

- Selected flow: External heat-exchange water supplied
- Flow property / unit: Mass / kg
- Amount rule: Use this row once-calculated x_i; collect undivided raw quantities using `cp_water`.
- Value mode: Calculated from collection (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_water`
- Sources: `jrc-glass-bref-2013`

##### Waste flows

##### Elementary flows

###### Nitrogen in ambient intake (`air_n2`)

Measure the actual ventilation/press-cooling or compressor gross intake by species and physical state. Use each circuit volume only once, measured composition and density for this gas at recorded pressure/temperature/humidity; no aggregate air plus child-species double counting. Add other real trace species individually. Molecular N2 CAS7727-37-9 resource from air. Only actual gross ambient-air N2 intake with independently measured composition; do not add an aggregate air exchange or purchased nitrogen provider a second time. Native reference property → unit group → reference unit: `93a60a56-a3c8-11da-a746-0800200b9a66` → `93a60a57-a4c8-11da-a746-0800200c9a66` → kg. Quantity linkage: this row x_i is the single calc_reference result from undivided raw `cp_air` after calc_raw_conversion, calc_history and actual attribution; cards and aggregation never divide again.

- Selected flow: dinitrogen `08a91e70-3ddc-11dd-96e4-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use this row once-calculated x_i; collect undivided raw quantities using `cp_air`.
- Value mode: Calculated from collection (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_air`
- Sources: `jrc-glass-bref-2013`

###### Oxygen in ambient intake (`air_o2`)

Measure the actual ventilation/press-cooling or compressor gross intake by species and physical state. Use each circuit volume only once, measured composition and density for this gas at recorded pressure/temperature/humidity; no aggregate air plus child-species double counting. Add other real trace species individually. O2 CAS7782-44-7 resource from air; no purchased bottled-oxygen supplier is represented. Keep gross intake, chemically consumed/released oxygen and outlet quantities separate; native isotope/ion synonyms are not adopted. Native reference property → unit group → reference unit: `93a60a56-a3c8-11da-a746-0800200b9a66` → `93a60a57-a4c8-11da-a746-0800200c9a66` → kg. Quantity linkage: this row x_i is the single calc_reference result from undivided raw `cp_air` after calc_raw_conversion, calc_history and actual attribution; cards and aggregation never divide again.

- Selected flow: oxygen `e2fb04b0-6555-11dd-ad8b-0800200c9a66`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use this row once-calculated x_i; collect undivided raw quantities using `cp_air`.
- Value mode: Calculated from collection (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_air`
- Sources: `jrc-glass-bref-2013`

###### Argon in ambient intake (`air_ar`)

Measure the actual ventilation/press-cooling or compressor gross intake by species and physical state. Use each circuit volume only once, measured composition and density for this gas at recorded pressure/temperature/humidity; no aggregate air plus child-species double counting. Add other real trace species individually. This concrete atomic flow UUID remains unbound; match actual identity/state before data-package use, never a collection-flow substitute. Quantity linkage: this row x_i is the single calc_reference result from undivided raw `cp_air` after calc_raw_conversion, calc_history and actual attribution; cards and aggregation never divide again.

- Selected flow: Argon in ambient intake
- Flow property / unit: Mass / kg
- Amount rule: Use this row once-calculated x_i; collect undivided raw quantities using `cp_air`.
- Value mode: Calculated from collection (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_air`
- Sources: `jrc-glass-bref-2013`

###### Water vapour in ambient intake (`air_h2o`)

Measure the actual ventilation/press-cooling or compressor gross intake by species and physical state. Use each circuit volume only once, measured composition and density for this gas at recorded pressure/temperature/humidity; no aggregate air plus child-species double counting. Add other real trace species individually. This concrete atomic flow UUID remains unbound; match actual identity/state before data-package use, never a collection-flow substitute. Quantity linkage: this row x_i is the single calc_reference result from undivided raw `cp_air` after calc_raw_conversion, calc_history and actual attribution; cards and aggregation never divide again.

- Selected flow: Water vapour in ambient intake
- Flow property / unit: Mass / kg
- Amount rule: Use this row once-calculated x_i; collect undivided raw quantities using `cp_air`.
- Value mode: Calculated from collection (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_air`
- Sources: `jrc-glass-bref-2013`

###### Carbon dioxide in ambient intake (`air_co2`)

Measure the actual ventilation/press-cooling or compressor gross intake by species and physical state. Use each circuit volume only once, measured composition and density for this gas at recorded pressure/temperature/humidity; no aggregate air plus child-species double counting. Add other real trace species individually. This concrete atomic flow UUID remains unbound; match actual identity/state before data-package use, never a collection-flow substitute. Quantity linkage: this row x_i is the single calc_reference result from undivided raw `cp_air` after calc_raw_conversion, calc_history and actual attribution; cards and aggregation never divide again.

- Selected flow: Carbon dioxide in ambient intake
- Flow property / unit: Mass / kg
- Amount rule: Use this row once-calculated x_i; collect undivided raw quantities using `cp_air`.
- Value mode: Calculated from collection (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_air`
- Sources: `jrc-glass-bref-2013`

#### Outputs

##### Product flows

###### First-released unworked ophthalmic blank (`finished_blank`)

This unique Product output links the reference object. Q is new unique first-quality-released net dry bare-blank mass after pressing, annealing/cooling and documented drawing/material/stress acceptance; no lens surfacing, polish, coatings, fusion segments or packaging. ClosingFG of this cohort is already in Q and is not another production output. Only the not-optically-worked spectacle-glass member of this broad manufactured Product family is selected: one uncoated nonphotochromic single-vision silicate blank after pressing and annealing. Other members in its official basename do not enter this exchange. Native mix is at plant; no CAS, recipe, grade, optical finish, geometry, geography or provider is specified. The Chinese comment refers to making such articles; neither it nor the generic finished-product route proves a polished lens. Actual unworked state and drawing/QC must be documented. Native reference property → unit group → reference unit: `93a60a56-a3c8-11da-a746-0800200b9a66` → `93a60a57-a4c8-11da-a746-0800200c9a66` → kg.

- Selected flow: Clock or watch glasses and similar glasses, glasses for spectacles, not optically worked, hollow glass spheres and their segments for the manufacture of such glasses `86f99422-b0c1-4f90-8150-aa288e54a03f`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: 1 kg
- Value mode: Fixed value (`fixed_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Method formula (`method_formula`)
- Collection protocol: `cp_release`
- Sources: `corning-ophthalmic-spec-f-2013`; `corning-ophthalmic-manufacturing`

###### Composition-matched ophthalmic glass return cullet (`cullet_out`)

Measure actual rejected gobs/blanks or testing breakage assigned to an internal return circuit; match cullet_in in kg and each inherited exchange. No second product Q, new purchased input or automatic recovered-material credit. This concrete atomic flow UUID remains unbound; match actual identity/state before data-package use, never a collection-flow substitute. Quantity linkage: this row x_i is the single calc_reference result from undivided raw `cp_balance` after calc_raw_conversion, calc_history and actual attribution; cards and aggregation never divide again.

- Selected flow: Composition-matched ophthalmic glass return cullet
- Flow property / unit: Mass / kg
- Amount rule: Use this row once-calculated x_i; collect undivided raw quantities using `cp_balance`.
- Value mode: Calculated from collection (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_balance`
- Sources: `jrc-glass-bref-2013`

###### External heat-exchange water returned to supplier (`exchange_return`)

Only when actual supplier heat-exchange water crosses back as Product; match its separately recorded incoming water, mass, temperature, pressure and enthalpy and the provider water/energy agreement. Do not relabel purge wastewater or invent a steam boiler. A real steam service requires an added atomic steam supply, carrier-water mass, condensate return and heat-MJ subledger without duplicate provider burdens. This concrete atomic flow UUID remains unbound; match actual identity/state before data-package use, never a collection-flow substitute. Quantity linkage: this row x_i is the single calc_reference result from undivided raw `cp_water` after calc_raw_conversion, calc_history and actual attribution; cards and aggregation never divide again.

- Selected flow: External heat-exchange water returned to supplier
- Flow property / unit: Mass / kg
- Amount rule: Use this row once-calculated x_i; collect undivided raw quantities using `cp_water`.
- Value mode: Calculated from collection (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_water`
- Sources: `jrc-glass-bref-2013`

##### Waste flows

###### Rejected ophthalmic glass for external treatment (`glass_waste`)

Retain the whole actual separately routed material with moisture, retained contaminants, composition, physical state, treatment destination and legal/economic state. The name is one physical stream, not its chemical constituent children. Do not add pollutant assay masses on top of the same waste. Actual recovery/disposal requires its own model and no automatic credit. This concrete atomic flow UUID remains unbound; match actual identity/state before data-package use, never a collection-flow substitute. Quantity linkage: this row x_i is the single calc_reference result from undivided raw `cp_balance` after calc_raw_conversion, calc_history and actual attribution; cards and aggregation never divide again.

- Selected flow: Rejected ophthalmic glass for external treatment
- Flow property / unit: Mass / kg
- Amount rule: Use this row once-calculated x_i; collect undivided raw quantities using `cp_balance`.
- Value mode: Calculated from collection (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_balance`
- Sources: `jrc-glass-bref-2013`

###### Collected ophthalmic batch dust (`batch_dust`)

Retain the whole actual separately routed material with moisture, retained contaminants, composition, physical state, treatment destination and legal/economic state. The name is one physical stream, not its chemical constituent children. Do not add pollutant assay masses on top of the same waste. Actual recovery/disposal requires its own model and no automatic credit. This concrete atomic flow UUID remains unbound; match actual identity/state before data-package use, never a collection-flow substitute. Quantity linkage: this row x_i is the single calc_reference result from undivided raw `cp_balance` after calc_raw_conversion, calc_history and actual attribution; cards and aggregation never divide again.

- Selected flow: Collected ophthalmic batch dust
- Flow property / unit: Mass / kg
- Amount rule: Use this row once-calculated x_i; collect undivided raw quantities using `cp_balance`.
- Value mode: Calculated from collection (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_balance`
- Sources: `jrc-glass-bref-2013`

###### Glass-process cleaning wastewater (`washwater`)

Retain the whole actual separately routed material with moisture, retained contaminants, composition, physical state, treatment destination and legal/economic state. The name is one physical stream, not its chemical constituent children. Do not add pollutant assay masses on top of the same waste. Actual recovery/disposal requires its own model and no automatic credit. This concrete atomic flow UUID remains unbound; match actual identity/state before data-package use, never a collection-flow substitute. Quantity linkage: this row x_i is the single calc_reference result from undivided raw `cp_balance` after calc_raw_conversion, calc_history and actual attribution; cards and aggregation never divide again.

- Selected flow: Glass-process cleaning wastewater
- Flow property / unit: Mass / kg
- Amount rule: Use this row once-calculated x_i; collect undivided raw quantities using `cp_balance`.
- Value mode: Calculated from collection (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_balance`
- Sources: `jrc-glass-bref-2013`

###### Cooling-circuit purge water (`cool_purge`)

Retain the whole actual separately routed material with moisture, retained contaminants, composition, physical state, treatment destination and legal/economic state. The name is one physical stream, not its chemical constituent children. Do not add pollutant assay masses on top of the same waste. Actual recovery/disposal requires its own model and no automatic credit. This concrete atomic flow UUID remains unbound; match actual identity/state before data-package use, never a collection-flow substitute. Quantity linkage: this row x_i is the single calc_reference result from undivided raw `cp_balance` after calc_raw_conversion, calc_history and actual attribution; cards and aggregation never divide again.

- Selected flow: Cooling-circuit purge water
- Flow property / unit: Mass / kg
- Amount rule: Use this row once-calculated x_i; collect undivided raw quantities using `cp_balance`.
- Value mode: Calculated from collection (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_balance`
- Sources: `jrc-glass-bref-2013`

###### Spent polyester dust-filter bag (`filter_waste`)

Retain the whole actual separately routed material with moisture, retained contaminants, composition, physical state, treatment destination and legal/economic state. The name is one physical stream, not its chemical constituent children. Do not add pollutant assay masses on top of the same waste. Actual recovery/disposal requires its own model and no automatic credit. This concrete atomic flow UUID remains unbound; match actual identity/state before data-package use, never a collection-flow substitute. Quantity linkage: this row x_i is the single calc_reference result from undivided raw `cp_balance` after calc_raw_conversion, calc_history and actual attribution; cards and aggregation never divide again.

- Selected flow: Spent polyester dust-filter bag
- Flow property / unit: Mass / kg
- Amount rule: Use this row once-calculated x_i; collect undivided raw quantities using `cp_balance`.
- Value mode: Calculated from collection (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_balance`
- Sources: `jrc-glass-bref-2013`

###### Retired alumina-silica refractory brick (`refractory_waste`)

Retain the whole actual separately routed material with moisture, retained contaminants, composition, physical state, treatment destination and legal/economic state. The name is one physical stream, not its chemical constituent children. Do not add pollutant assay masses on top of the same waste. Actual recovery/disposal requires its own model and no automatic credit. This concrete atomic flow UUID remains unbound; match actual identity/state before data-package use, never a collection-flow substitute. Quantity linkage: this row x_i is the single calc_reference result from undivided raw `cp_balance` after calc_raw_conversion, calc_history and actual attribution; cards and aggregation never divide again.

- Selected flow: Retired alumina-silica refractory brick
- Flow property / unit: Mass / kg
- Amount rule: Use this row once-calculated x_i; collect undivided raw quantities using `cp_balance`.
- Value mode: Calculated from collection (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_balance`
- Sources: `jrc-glass-bref-2013`

###### Retired steel ophthalmic mould (`mould_waste`)

Retain the whole actual separately routed material with moisture, retained contaminants, composition, physical state, treatment destination and legal/economic state. The name is one physical stream, not its chemical constituent children. Do not add pollutant assay masses on top of the same waste. Actual recovery/disposal requires its own model and no automatic credit. This concrete atomic flow UUID remains unbound; match actual identity/state before data-package use, never a collection-flow substitute. Quantity linkage: this row x_i is the single calc_reference result from undivided raw `cp_balance` after calc_raw_conversion, calc_history and actual attribution; cards and aggregation never divide again.

- Selected flow: Retired steel ophthalmic mould
- Flow property / unit: Mass / kg
- Amount rule: Use this row once-calculated x_i; collect undivided raw quantities using `cp_balance`.
- Value mode: Calculated from collection (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_balance`
- Sources: `jrc-glass-bref-2013`

###### Retired steel gob-shear blade (`shear_waste`)

Retain the whole actual separately routed material with moisture, retained contaminants, composition, physical state, treatment destination and legal/economic state. The name is one physical stream, not its chemical constituent children. Do not add pollutant assay masses on top of the same waste. Actual recovery/disposal requires its own model and no automatic credit. This concrete atomic flow UUID remains unbound; match actual identity/state before data-package use, never a collection-flow substitute. Quantity linkage: this row x_i is the single calc_reference result from undivided raw `cp_balance` after calc_raw_conversion, calc_history and actual attribution; cards and aggregation never divide again.

- Selected flow: Retired steel gob-shear blade
- Flow property / unit: Mass / kg
- Amount rule: Use this row once-calculated x_i; collect undivided raw quantities using `cp_balance`.
- Value mode: Calculated from collection (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_balance`
- Sources: `jrc-glass-bref-2013`

###### Retired platinum contact part for refining (`platinum_return`)

Retain the whole actual separately routed material with moisture, retained contaminants, composition, physical state, treatment destination and legal/economic state. The name is one physical stream, not its chemical constituent children. Do not add pollutant assay masses on top of the same waste. Actual recovery/disposal requires its own model and no automatic credit. This concrete atomic flow UUID remains unbound; match actual identity/state before data-package use, never a collection-flow substitute. Quantity linkage: this row x_i is the single calc_reference result from undivided raw `cp_balance` after calc_raw_conversion, calc_history and actual attribution; cards and aggregation never divide again.

- Selected flow: Retired platinum contact part for refining
- Flow property / unit: Mass / kg
- Amount rule: Use this row once-calculated x_i; collect undivided raw quantities using `cp_balance`.
- Value mode: Calculated from collection (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_balance`
- Sources: `jrc-glass-bref-2013`

###### Spent mineral hydraulic oil (`waste_hydraulic_oil`)

Whole separately collected actual used-oil stream; retain water/additive contamination, removed-fluid mass and original installed-fluid stock history. Waste Flow of used petroleum/synthetic lubricating oil at generation; treatment unspecified. Use entire measured actual waste with water/additive contamination; no recycling credit, universal composition or automatic waste-oil sale product. Native reference property → unit group → reference unit: `93a60a56-a3c8-11da-a746-0800200b9a66` → `93a60a57-a4c8-11da-a746-0800200c9a66` → kg. Quantity linkage: this row x_i is the single calc_reference result from undivided raw `cp_aux` after calc_raw_conversion, calc_history and actual attribution; cards and aggregation never divide again.

- Selected flow: Used lubricating oil `55d93375-7f04-4166-b2a2-88ce929051a5`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use this row once-calculated x_i; collect undivided raw quantities using `cp_aux`.
- Value mode: Calculated from collection (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_aux`
- Sources: `jrc-glass-bref-2013`

###### Spent mineral machine lubricating oil (`waste_machine_oil`)

Whole separately collected actual used-oil stream; retain water/additive contamination, removed-fluid mass and original installed-fluid stock history. Waste Flow of used petroleum/synthetic lubricating oil at generation; treatment unspecified. Use entire measured actual waste with water/additive contamination; no recycling credit, universal composition or automatic waste-oil sale product. Native reference property → unit group → reference unit: `93a60a56-a3c8-11da-a746-0800200b9a66` → `93a60a57-a4c8-11da-a746-0800200c9a66` → kg. Quantity linkage: this row x_i is the single calc_reference result from undivided raw `cp_aux` after calc_raw_conversion, calc_history and actual attribution; cards and aggregation never divide again.

- Selected flow: Used lubricating oil `55d93375-7f04-4166-b2a2-88ce929051a5`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use this row once-calculated x_i; collect undivided raw quantities using `cp_aux`.
- Value mode: Calculated from collection (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_aux`
- Sources: `jrc-glass-bref-2013`

##### Elementary flows

###### Mineral or fossil carbon dioxide to air (`co2_process`)

Only an actually identified species and phase crossing to the actual compartment is quantified. Include all measured failed/start-stop/idle/cleanup conditions. A total elemental result, NOx/SOx, VOC, COD or total particulate result is a diagnostic subledger, not evidence for this molecular amount. Retain real unmeasured species as unresolved, not zero. CO2 CAS124-38-9 Elementary emission to air unspecified, fossil/mineral carbon origin only. Native noisy isotope/ion synonyms do not authorize radioactive/isotopic CO2. Separate atmospheric pass-through, biogenic sources and truly reacted mineral carbonate using independent carbon evidence; do not copy a furnace factor. Native reference property → unit group → reference unit: `93a60a56-a3c8-11da-a746-0800200b9a66` → `93a60a57-a4c8-11da-a746-0800200c9a66` → kg. Quantity linkage: this row x_i is the single calc_reference result from undivided raw `cp_emissions` after calc_raw_conversion, calc_history and actual attribution; cards and aggregation never divide again.

- Selected flow: carbon dioxide (fossil) `08a91e70-3ddc-11dd-923d-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use this row once-calculated x_i; collect undivided raw quantities using `cp_emissions`.
- Value mode: Calculated from collection (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_emissions`
- Sources: `jrc-glass-bref-2013`

###### Nitrogen monoxide to air (`no_air`)

Only an actually identified species and phase crossing to the actual compartment is quantified. Include all measured failed/start-stop/idle/cleanup conditions. A total elemental result, NOx/SOx, VOC, COD or total particulate result is a diagnostic subledger, not evidence for this molecular amount. Retain real unmeasured species as unresolved, not zero. NO CAS10102-43-9 Elementary air-unspecified emission only. Native synonym noise includes HNO but the adopted species is molecular NO; actual species-resolved measurements required. NOx-as-NO2 is not this mass. Native reference property → unit group → reference unit: `93a60a56-a3c8-11da-a746-0800200b9a66` → `93a60a57-a4c8-11da-a746-0800200c9a66` → kg. Quantity linkage: this row x_i is the single calc_reference result from undivided raw `cp_emissions` after calc_raw_conversion, calc_history and actual attribution; cards and aggregation never divide again.

- Selected flow: nitrogen monoxide `08a91e70-3ddc-11dd-96ee-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use this row once-calculated x_i; collect undivided raw quantities using `cp_emissions`.
- Value mode: Calculated from collection (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_emissions`
- Sources: `jrc-glass-bref-2013`

###### Nitrogen dioxide to air (`no2_air`)

Only an actually identified species and phase crossing to the actual compartment is quantified. Include all measured failed/start-stop/idle/cleanup conditions. A total elemental result, NOx/SOx, VOC, COD or total particulate result is a diagnostic subledger, not evidence for this molecular amount. Retain real unmeasured species as unresolved, not zero. NO2 CAS10102-44-0 Elementary emission to air unspecified; synonyms mention N2O4, which cannot establish its mass. Require phase/species-specific evidence and equilibrium treatment where relevant, never total NOx allocation by assumption. Native reference property → unit group → reference unit: `93a60a56-a3c8-11da-a746-0800200b9a66` → `93a60a57-a4c8-11da-a746-0800200c9a66` → kg. Quantity linkage: this row x_i is the single calc_reference result from undivided raw `cp_emissions` after calc_raw_conversion, calc_history and actual attribution; cards and aggregation never divide again.

- Selected flow: nitrogen dioxide `08a91e70-3ddc-11dd-96e5-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use this row once-calculated x_i; collect undivided raw quantities using `cp_emissions`.
- Value mode: Calculated from collection (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_emissions`
- Sources: `jrc-glass-bref-2013`

###### Sulfur dioxide to air (`so2_air`)

Only an actually identified species and phase crossing to the actual compartment is quantified. Include all measured failed/start-stop/idle/cleanup conditions. A total elemental result, NOx/SOx, VOC, COD or total particulate result is a diagnostic subledger, not evidence for this molecular amount. Retain real unmeasured species as unresolved, not zero. SO2 CAS7446-09-5 Elementary air-unspecified emission only, not total SOx or sulfate dust. Confirm native CAS, actual molecular speciation and location; no default sulfate conversion fraction. Native reference property → unit group → reference unit: `93a60a56-a3c8-11da-a746-0800200b9a66` → `93a60a57-a4c8-11da-a746-0800200c9a66` → kg. Quantity linkage: this row x_i is the single calc_reference result from undivided raw `cp_emissions` after calc_raw_conversion, calc_history and actual attribution; cards and aggregation never divide again.

- Selected flow: sulfur dioxide `fe0acd60-3ddc-11dd-ac48-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use this row once-calculated x_i; collect undivided raw quantities using `cp_emissions`.
- Value mode: Calculated from collection (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_emissions`
- Sources: `jrc-glass-bref-2013`

###### Water vapour to air (`water_air`)

Only an actually identified species and phase crossing to the actual compartment is quantified. Include all measured failed/start-stop/idle/cleanup conditions. A total elemental result, NOx/SOx, VOC, COD or total particulate result is a diagnostic subledger, not evidence for this molecular amount. Retain real unmeasured species as unresolved, not zero. H2O CAS7732-18-5 Elementary water-vapour emission to air unspecified; noisy heavy/tritiated-water synonyms are excluded. Keep evaporation, inlet humidity, actual chemical reaction water and retained structural water distinct; liquid droplets require a separate physical phase. Native reference property → unit group → reference unit: `93a60a56-a3c8-11da-a746-0800200b9a66` → `93a60a57-a4c8-11da-a746-0800200c9a66` → kg. Quantity linkage: this row x_i is the single calc_reference result from undivided raw `cp_emissions` after calc_raw_conversion, calc_history and actual attribution; cards and aggregation never divide again.

- Selected flow: water vapour `fe0acd60-3ddc-11dd-ac04-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use this row once-calculated x_i; collect undivided raw quantities using `cp_emissions`.
- Value mode: Calculated from collection (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_emissions`
- Sources: `jrc-glass-bref-2013`

###### Dinitrogen to air (`n2_air`)

Only an actually identified species and phase crossing to the actual compartment is quantified. Include all measured failed/start-stop/idle/cleanup conditions. A total elemental result, NOx/SOx, VOC, COD or total particulate result is a diagnostic subledger, not evidence for this molecular amount. Retain real unmeasured species as unresolved, not zero. N2 CAS7727-37-9 Elementary emission to air unspecified. Gross pass-through plus genuinely generated N2 must be reconciled by species; not NOx, total nitrogen or a nitrate reaction assumption. Native reference property → unit group → reference unit: `93a60a56-a3c8-11da-a746-0800200b9a66` → `93a60a57-a4c8-11da-a746-0800200c9a66` → kg. Quantity linkage: this row x_i is the single calc_reference result from undivided raw `cp_emissions` after calc_raw_conversion, calc_history and actual attribution; cards and aggregation never divide again.

- Selected flow: dinitrogen `fe0acd60-3ddc-11dd-aad2-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use this row once-calculated x_i; collect undivided raw quantities using `cp_emissions`.
- Value mode: Calculated from collection (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_emissions`
- Sources: `jrc-glass-bref-2013`

###### Oxygen to air (`o2_air`)

Only an actually identified species and phase crossing to the actual compartment is quantified. Include all measured failed/start-stop/idle/cleanup conditions. A total elemental result, NOx/SOx, VOC, COD or total particulate result is a diagnostic subledger, not evidence for this molecular amount. Retain real unmeasured species as unresolved, not zero. This concrete atomic flow UUID remains unbound; match actual identity/state before data-package use, never a collection-flow substitute. Quantity linkage: this row x_i is the single calc_reference result from undivided raw `cp_emissions` after calc_raw_conversion, calc_history and actual attribution; cards and aggregation never divide again.

- Selected flow: Oxygen to air
- Flow property / unit: Mass / kg
- Amount rule: Use this row once-calculated x_i; collect undivided raw quantities using `cp_emissions`.
- Value mode: Calculated from collection (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_emissions`
- Sources: `jrc-glass-bref-2013`

###### Argon to air (`ar_air`)

Only an actually identified species and phase crossing to the actual compartment is quantified. Include all measured failed/start-stop/idle/cleanup conditions. A total elemental result, NOx/SOx, VOC, COD or total particulate result is a diagnostic subledger, not evidence for this molecular amount. Retain real unmeasured species as unresolved, not zero. This concrete atomic flow UUID remains unbound; match actual identity/state before data-package use, never a collection-flow substitute. Quantity linkage: this row x_i is the single calc_reference result from undivided raw `cp_emissions` after calc_raw_conversion, calc_history and actual attribution; cards and aggregation never divide again.

- Selected flow: Argon to air
- Flow property / unit: Mass / kg
- Amount rule: Use this row once-calculated x_i; collect undivided raw quantities using `cp_emissions`.
- Value mode: Calculated from collection (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_emissions`
- Sources: `jrc-glass-bref-2013`

###### Atmospheric carbon dioxide pass-through (`co2_pass`)

Only an actually identified species and phase crossing to the actual compartment is quantified. Include all measured failed/start-stop/idle/cleanup conditions. A total elemental result, NOx/SOx, VOC, COD or total particulate result is a diagnostic subledger, not evidence for this molecular amount. Retain real unmeasured species as unresolved, not zero. This concrete atomic flow UUID remains unbound; match actual identity/state before data-package use, never a collection-flow substitute. Quantity linkage: this row x_i is the single calc_reference result from undivided raw `cp_emissions` after calc_raw_conversion, calc_history and actual attribution; cards and aggregation never divide again.

- Selected flow: Atmospheric carbon dioxide pass-through
- Flow property / unit: Mass / kg
- Amount rule: Use this row once-calculated x_i; collect undivided raw quantities using `cp_emissions`.
- Value mode: Calculated from collection (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_emissions`
- Sources: `jrc-glass-bref-2013`

###### Crystalline quartz dust to air (`silica_dust_air`)

Only an actually identified species and phase crossing to the actual compartment is quantified. Include all measured failed/start-stop/idle/cleanup conditions. A total elemental result, NOx/SOx, VOC, COD or total particulate result is a diagnostic subledger, not evidence for this molecular amount. Retain real unmeasured species as unresolved, not zero. This concrete atomic flow UUID remains unbound; match actual identity/state before data-package use, never a collection-flow substitute. Quantity linkage: this row x_i is the single calc_reference result from undivided raw `cp_emissions` after calc_raw_conversion, calc_history and actual attribution; cards and aggregation never divide again.

- Selected flow: Crystalline quartz dust to air
- Flow property / unit: Mass / kg
- Amount rule: Use this row once-calculated x_i; collect undivided raw quantities using `cp_emissions`.
- Value mode: Calculated from collection (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_emissions`
- Sources: `jrc-glass-bref-2013`

###### Orthoboric acid vapour to air (`boric_air`)

Only an actually identified species and phase crossing to the actual compartment is quantified. Include all measured failed/start-stop/idle/cleanup conditions. A total elemental result, NOx/SOx, VOC, COD or total particulate result is a diagnostic subledger, not evidence for this molecular amount. Retain real unmeasured species as unresolved, not zero. This concrete atomic flow UUID remains unbound; match actual identity/state before data-package use, never a collection-flow substitute. Quantity linkage: this row x_i is the single calc_reference result from undivided raw `cp_emissions` after calc_raw_conversion, calc_history and actual attribution; cards and aggregation never divide again.

- Selected flow: Orthoboric acid vapour to air
- Flow property / unit: Mass / kg
- Amount rule: Use this row once-calculated x_i; collect undivided raw quantities using `cp_emissions`.
- Value mode: Calculated from collection (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_emissions`
- Sources: `jrc-glass-bref-2013`

###### Boron trioxide aerosol to air (`b2o3_air`)

Only an actually identified species and phase crossing to the actual compartment is quantified. Include all measured failed/start-stop/idle/cleanup conditions. A total elemental result, NOx/SOx, VOC, COD or total particulate result is a diagnostic subledger, not evidence for this molecular amount. Retain real unmeasured species as unresolved, not zero. This concrete atomic flow UUID remains unbound; match actual identity/state before data-package use, never a collection-flow substitute. Quantity linkage: this row x_i is the single calc_reference result from undivided raw `cp_emissions` after calc_raw_conversion, calc_history and actual attribution; cards and aggregation never divide again.

- Selected flow: Boron trioxide aerosol to air
- Flow property / unit: Mass / kg
- Amount rule: Use this row once-calculated x_i; collect undivided raw quantities using `cp_emissions`.
- Value mode: Calculated from collection (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_emissions`
- Sources: `jrc-glass-bref-2013`

### Process: Original-cohort services (`services`)

#### Inputs

##### Product flows

###### Original-cohort returned unworked blank (`fg_received`)

External post-release return keeps original release id, dry glass/water/contamination measurements and full burden vector. Never count reinspection, return or redispatch as new Q; retain true incremental rework, electricity, cleaning, losses and packaging separately. Only the not-optically-worked spectacle-glass member of this broad manufactured Product family is selected: one uncoated nonphotochromic single-vision silicate blank after pressing and annealing. Other members in its official basename do not enter this exchange. Native mix is at plant; no CAS, recipe, grade, optical finish, geometry, geography or provider is specified. The Chinese comment refers to making such articles; neither it nor the generic finished-product route proves a polished lens. Actual unworked state and drawing/QC must be documented. Native reference property → unit group → reference unit: `93a60a56-a3c8-11da-a746-0800200b9a66` → `93a60a57-a4c8-11da-a746-0800200c9a66` → kg. Quantity linkage: this row x_i is the single calc_reference result from undivided raw `cp_service` after calc_raw_conversion, calc_history and actual attribution; cards and aggregation never divide again.

- Selected flow: Clock or watch glasses and similar glasses, glasses for spectacles, not optically worked, hollow glass spheres and their segments for the manufacture of such glasses `86f99422-b0c1-4f90-8150-aa288e54a03f`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use this row once-calculated x_i; collect undivided raw quantities using `cp_service`.
- Value mode: Calculated from collection (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_service`
- Sources: `corning-ophthalmic-spec-f-2013`; `jrc-ilcd-attributional-2010`


Any actual post-release work is subject to cp_service and calc_fg permission, post-work tests and actual disposition. Retain every actual addition/removal, moisture/phase transfer and repair-held custody without assuming a failed blank can be restored.
###### Post-release service electricity (`service_electricity`)

Meter actual storage, packaging, handling and reinspection/rework within the stated horizon and original cohort; use the same once-only denominator Q of that cohort. Unobserved future services are not zero or extrapolated lifetime totals. CN customer-side grid-average alternating-current Product, 1–35kV, consumption mix to user, Net calorific value/MJ. Adopt only for that delivery boundary/voltage/geography; replace identity for other locations, voltage or contractual supply. Do not add transmission/distribution already in the provider. 1kWh=3.6MJ; energy has no carrier mass. Native reference property → unit group → reference unit: `93a60a56-a3c8-11da-a746-0800200c9a66` → `93a60a57-a3c8-11da-a746-0800200c9a66` → MJ. Quantity linkage: this row x_i is the single calc_reference result from undivided raw `cp_service_energy` after calc_raw_conversion, calc_history and actual attribution; cards and aggregation never divide again.

- Selected flow: Alternating current `3d76981f-964a-4865-b588-0e067a2a1163`
- Flow property / unit: Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- Amount rule: Use this row once-calculated x_i; collect undivided raw quantities using `cp_service_energy`.
- Value mode: Calculated from collection (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_service_energy`
- Sources: `jrc-ilcd-attributional-2010`

###### Pressed paperboard blank-separation tray purchased supply (`tray_purchase`)

Keep one complete actual article and its actual moisture/state. Apply calc_packaging: all four disjoint opening/closing states, separate purchase, supplier-included physical receipt, external return received, gross physical outward shipment, standalone outward return and waste; actual repair-component/water additions/removals use distinct measured nonoverlapping flow terms. Retained added mass stays in BOTH the actual inflow and complete closing stock. Burden/consumption history is separate from gross directions; supplier-included burden is not bought twice and internal reuse creates no Q or credit. This concrete atomic flow UUID remains unbound; match actual identity/state before data-package use, never a collection-flow substitute. Quantity linkage: this row x_i is the single calc_reference result from undivided raw `cp_packaging` after calc_raw_conversion, calc_history and actual attribution; cards and aggregation never divide again.


- Selected flow: Pressed paperboard blank-separation tray purchased supply
- Flow property / unit: Mass / kg
- Amount rule: Use this row once-calculated x_i; collect undivided raw quantities using `cp_packaging`.
- Value mode: Calculated from collection (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_packaging`
- Sources: `corning-ophthalmic-spec-f-2013`; `corning-ophthalmic-manufacturing`; `jrc-ilcd-attributional-2010`


###### Pressed paperboard blank-separation tray supplier-included arrival (`tray_supplier_included`)

Conditional only on an actual externally supplied article arriving with goods under the supplier boundary, distinct from a separate purchase or received customer return. Preserve one physical receipt and its source owner; included upstream burden is never purchased twice. Keep one complete actual article and its actual moisture/state. Apply calc_packaging: all four disjoint opening/closing states, separate purchase, supplier-included physical receipt, external return received, gross physical outward shipment, standalone outward return and waste; actual repair-component/water additions/removals use distinct measured nonoverlapping flow terms. Retained added mass stays in BOTH the actual inflow and complete closing stock. Burden/consumption history is separate from gross directions; supplier-included burden is not bought twice and internal reuse creates no Q or credit. This concrete atomic flow UUID remains unbound; match actual identity/state before data-package use, never a collection-flow substitute. Quantity linkage: this row x_i is the single calc_reference result from undivided raw `cp_packaging` after calc_raw_conversion, calc_history and actual attribution; cards and aggregation never divide again.


- Selected flow: Pressed paperboard blank-separation tray supplier-included arrival
- Flow property / unit: Mass / kg
- Amount rule: Use this row once-calculated x_i; collect undivided raw quantities using `cp_packaging`.
- Value mode: Calculated from collection (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_packaging`
- Sources: `corning-ophthalmic-spec-f-2013`; `corning-ophthalmic-manufacturing`; `jrc-ilcd-attributional-2010`

###### Pressed paperboard blank-separation tray externally returned supply (`tray_returned_in`)

Keep one complete actual article and its actual moisture/state. Apply calc_packaging: all four disjoint opening/closing states, separate purchase, supplier-included physical receipt, external return received, gross physical outward shipment, standalone outward return and waste; actual repair-component/water additions/removals use distinct measured nonoverlapping flow terms. Retained added mass stays in BOTH the actual inflow and complete closing stock. Burden/consumption history is separate from gross directions; supplier-included burden is not bought twice and internal reuse creates no Q or credit. This concrete atomic flow UUID remains unbound; match actual identity/state before data-package use, never a collection-flow substitute. Quantity linkage: this row x_i is the single calc_reference result from undivided raw `cp_packaging` after calc_raw_conversion, calc_history and actual attribution; cards and aggregation never divide again.


- Selected flow: Pressed paperboard blank-separation tray externally returned supply
- Flow property / unit: Mass / kg
- Amount rule: Use this row once-calculated x_i; collect undivided raw quantities using `cp_packaging`.
- Value mode: Calculated from collection (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_packaging`
- Sources: `corning-ophthalmic-spec-f-2013`; `corning-ophthalmic-manufacturing`; `jrc-ilcd-attributional-2010`

###### Corrugated fibreboard outer carton purchased supply (`carton_purchase`)

Keep one complete actual article and its actual moisture/state. Apply calc_packaging: all four disjoint opening/closing states, separate purchase, supplier-included physical receipt, external return received, gross physical outward shipment, standalone outward return and waste; actual repair-component/water additions/removals use distinct measured nonoverlapping flow terms. Retained added mass stays in BOTH the actual inflow and complete closing stock. Burden/consumption history is separate from gross directions; supplier-included burden is not bought twice and internal reuse creates no Q or credit. This concrete atomic flow UUID remains unbound; match actual identity/state before data-package use, never a collection-flow substitute. Quantity linkage: this row x_i is the single calc_reference result from undivided raw `cp_packaging` after calc_raw_conversion, calc_history and actual attribution; cards and aggregation never divide again.


- Selected flow: Corrugated fibreboard outer carton purchased supply
- Flow property / unit: Mass / kg
- Amount rule: Use this row once-calculated x_i; collect undivided raw quantities using `cp_packaging`.
- Value mode: Calculated from collection (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_packaging`
- Sources: `corning-ophthalmic-spec-f-2013`; `corning-ophthalmic-manufacturing`; `jrc-ilcd-attributional-2010`


###### Corrugated fibreboard outer carton supplier-included arrival (`carton_supplier_included`)

Conditional only on an actual externally supplied article arriving with goods under the supplier boundary, distinct from a separate purchase or received customer return. Preserve one physical receipt and its source owner; included upstream burden is never purchased twice. Keep one complete actual article and its actual moisture/state. Apply calc_packaging: all four disjoint opening/closing states, separate purchase, supplier-included physical receipt, external return received, gross physical outward shipment, standalone outward return and waste; actual repair-component/water additions/removals use distinct measured nonoverlapping flow terms. Retained added mass stays in BOTH the actual inflow and complete closing stock. Burden/consumption history is separate from gross directions; supplier-included burden is not bought twice and internal reuse creates no Q or credit. This concrete atomic flow UUID remains unbound; match actual identity/state before data-package use, never a collection-flow substitute. Quantity linkage: this row x_i is the single calc_reference result from undivided raw `cp_packaging` after calc_raw_conversion, calc_history and actual attribution; cards and aggregation never divide again.


- Selected flow: Corrugated fibreboard outer carton supplier-included arrival
- Flow property / unit: Mass / kg
- Amount rule: Use this row once-calculated x_i; collect undivided raw quantities using `cp_packaging`.
- Value mode: Calculated from collection (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_packaging`
- Sources: `corning-ophthalmic-spec-f-2013`; `corning-ophthalmic-manufacturing`; `jrc-ilcd-attributional-2010`

###### Corrugated fibreboard outer carton externally returned supply (`carton_returned_in`)

Keep one complete actual article and its actual moisture/state. Apply calc_packaging: all four disjoint opening/closing states, separate purchase, supplier-included physical receipt, external return received, gross physical outward shipment, standalone outward return and waste; actual repair-component/water additions/removals use distinct measured nonoverlapping flow terms. Retained added mass stays in BOTH the actual inflow and complete closing stock. Burden/consumption history is separate from gross directions; supplier-included burden is not bought twice and internal reuse creates no Q or credit. This concrete atomic flow UUID remains unbound; match actual identity/state before data-package use, never a collection-flow substitute. Quantity linkage: this row x_i is the single calc_reference result from undivided raw `cp_packaging` after calc_raw_conversion, calc_history and actual attribution; cards and aggregation never divide again.


- Selected flow: Corrugated fibreboard outer carton externally returned supply
- Flow property / unit: Mass / kg
- Amount rule: Use this row once-calculated x_i; collect undivided raw quantities using `cp_packaging`.
- Value mode: Calculated from collection (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_packaging`
- Sources: `corning-ophthalmic-spec-f-2013`; `corning-ophthalmic-manufacturing`; `jrc-ilcd-attributional-2010`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Gross physically dispatched unworked blank (`fg_dispatch`)

Actual gross dispatch of identified historical cohort, separate from manufacture first release and net sales. At combined manufacture/service gate cancel the internal Q transfer; show openingFG+Q+externalreturns = closingFG+grossdispatch+servicewaste+other individually evidenced exits, including water changes independently. Only the not-optically-worked spectacle-glass member of this broad manufactured Product family is selected: one uncoated nonphotochromic single-vision silicate blank after pressing and annealing. Other members in its official basename do not enter this exchange. Native mix is at plant; no CAS, recipe, grade, optical finish, geometry, geography or provider is specified. The Chinese comment refers to making such articles; neither it nor the generic finished-product route proves a polished lens. Actual unworked state and drawing/QC must be documented. Native reference property → unit group → reference unit: `93a60a56-a3c8-11da-a746-0800200b9a66` → `93a60a57-a4c8-11da-a746-0800200c9a66` → kg. Quantity linkage: this row x_i is the single calc_reference result from undivided raw `cp_service` after calc_raw_conversion, calc_history and actual attribution; cards and aggregation never divide again.

- Selected flow: Clock or watch glasses and similar glasses, glasses for spectacles, not optically worked, hollow glass spheres and their segments for the manufacture of such glasses `86f99422-b0c1-4f90-8150-aa288e54a03f`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use this row once-calculated x_i; collect undivided raw quantities using `cp_service`.
- Value mode: Calculated from collection (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_service`
- Sources: `corning-ophthalmic-spec-f-2013`; `jrc-ilcd-attributional-2010`

###### Pressed paperboard blank-separation tray with gross physical dispatch (`tray_gross_out`)

Keep one complete actual article and its actual moisture/state. Apply calc_packaging: all four disjoint opening/closing states, separate purchase, supplier-included physical receipt, external return received, gross physical outward shipment, standalone outward return and waste; actual repair-component/water additions/removals use distinct measured nonoverlapping flow terms. Retained added mass stays in BOTH the actual inflow and complete closing stock. Burden/consumption history is separate from gross directions; supplier-included burden is not bought twice and internal reuse creates no Q or credit. This concrete atomic flow UUID remains unbound; match actual identity/state before data-package use, never a collection-flow substitute. Quantity linkage: this row x_i is the single calc_reference result from undivided raw `cp_packaging` after calc_raw_conversion, calc_history and actual attribution; cards and aggregation never divide again.


- Selected flow: Pressed paperboard blank-separation tray with gross physical dispatch
- Flow property / unit: Mass / kg
- Amount rule: Use this row once-calculated x_i; collect undivided raw quantities using `cp_packaging`.
- Value mode: Calculated from collection (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_packaging`
- Sources: `corning-ophthalmic-spec-f-2013`; `corning-ophthalmic-manufacturing`; `jrc-ilcd-attributional-2010`

###### Pressed paperboard blank-separation tray returned externally (`tray_return_out`)

Keep one complete actual article and its actual moisture/state. Apply calc_packaging: all four disjoint opening/closing states, separate purchase, supplier-included physical receipt, external return received, gross physical outward shipment, standalone outward return and waste; actual repair-component/water additions/removals use distinct measured nonoverlapping flow terms. Retained added mass stays in BOTH the actual inflow and complete closing stock. Burden/consumption history is separate from gross directions; supplier-included burden is not bought twice and internal reuse creates no Q or credit. This concrete atomic flow UUID remains unbound; match actual identity/state before data-package use, never a collection-flow substitute. Quantity linkage: this row x_i is the single calc_reference result from undivided raw `cp_packaging` after calc_raw_conversion, calc_history and actual attribution; cards and aggregation never divide again.


- Selected flow: Pressed paperboard blank-separation tray returned externally
- Flow property / unit: Mass / kg
- Amount rule: Use this row once-calculated x_i; collect undivided raw quantities using `cp_packaging`.
- Value mode: Calculated from collection (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_packaging`
- Sources: `corning-ophthalmic-spec-f-2013`; `corning-ophthalmic-manufacturing`; `jrc-ilcd-attributional-2010`

###### Corrugated fibreboard outer carton with gross physical dispatch (`carton_gross_out`)

Keep one complete actual article and its actual moisture/state. Apply calc_packaging: all four disjoint opening/closing states, separate purchase, supplier-included physical receipt, external return received, gross physical outward shipment, standalone outward return and waste; actual repair-component/water additions/removals use distinct measured nonoverlapping flow terms. Retained added mass stays in BOTH the actual inflow and complete closing stock. Burden/consumption history is separate from gross directions; supplier-included burden is not bought twice and internal reuse creates no Q or credit. This concrete atomic flow UUID remains unbound; match actual identity/state before data-package use, never a collection-flow substitute. Quantity linkage: this row x_i is the single calc_reference result from undivided raw `cp_packaging` after calc_raw_conversion, calc_history and actual attribution; cards and aggregation never divide again.


- Selected flow: Corrugated fibreboard outer carton with gross physical dispatch
- Flow property / unit: Mass / kg
- Amount rule: Use this row once-calculated x_i; collect undivided raw quantities using `cp_packaging`.
- Value mode: Calculated from collection (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_packaging`
- Sources: `corning-ophthalmic-spec-f-2013`; `corning-ophthalmic-manufacturing`; `jrc-ilcd-attributional-2010`

###### Corrugated fibreboard outer carton returned externally (`carton_return_out`)

Keep one complete actual article and its actual moisture/state. Apply calc_packaging: all four disjoint opening/closing states, separate purchase, supplier-included physical receipt, external return received, gross physical outward shipment, standalone outward return and waste; actual repair-component/water additions/removals use distinct measured nonoverlapping flow terms. Retained added mass stays in BOTH the actual inflow and complete closing stock. Burden/consumption history is separate from gross directions; supplier-included burden is not bought twice and internal reuse creates no Q or credit. This concrete atomic flow UUID remains unbound; match actual identity/state before data-package use, never a collection-flow substitute. Quantity linkage: this row x_i is the single calc_reference result from undivided raw `cp_packaging` after calc_raw_conversion, calc_history and actual attribution; cards and aggregation never divide again.


- Selected flow: Corrugated fibreboard outer carton returned externally
- Flow property / unit: Mass / kg
- Amount rule: Use this row once-calculated x_i; collect undivided raw quantities using `cp_packaging`.
- Value mode: Calculated from collection (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_packaging`
- Sources: `corning-ophthalmic-spec-f-2013`; `corning-ophthalmic-manufacturing`; `jrc-ilcd-attributional-2010`

##### Waste flows

###### Post-release broken ophthalmic glass (`service_glass_waste`)

Record actual original-cohort glass broken in storage, repacking, handling, inspection or transport up to the declared service gate. Manufacturing burden remains in original Q; add only measured later services, never produce replacement Q by accounting. This concrete atomic flow UUID remains unbound; match actual identity/state before data-package use, never a collection-flow substitute. Quantity linkage: this row x_i is the single calc_reference result from undivided raw `cp_service` after calc_raw_conversion, calc_history and actual attribution; cards and aggregation never divide again.

- Selected flow: Post-release broken ophthalmic glass
- Flow property / unit: Mass / kg
- Amount rule: Use this row once-calculated x_i; collect undivided raw quantities using `cp_service`.
- Value mode: Calculated from collection (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_service`
- Sources: `corning-ophthalmic-spec-f-2013`; `jrc-ilcd-attributional-2010`

###### Pressed paperboard blank-separation tray discarded at site (`tray_waste`)

Keep one complete actual article and its actual moisture/state. Apply calc_packaging: all four disjoint opening/closing states, separate purchase, supplier-included physical receipt, external return received, gross physical outward shipment, standalone outward return and waste; actual repair-component/water additions/removals use distinct measured nonoverlapping flow terms. Retained added mass stays in BOTH the actual inflow and complete closing stock. Burden/consumption history is separate from gross directions; supplier-included burden is not bought twice and internal reuse creates no Q or credit. This concrete atomic flow UUID remains unbound; match actual identity/state before data-package use, never a collection-flow substitute. Quantity linkage: this row x_i is the single calc_reference result from undivided raw `cp_packaging` after calc_raw_conversion, calc_history and actual attribution; cards and aggregation never divide again.


- Selected flow: Pressed paperboard blank-separation tray discarded at site
- Flow property / unit: Mass / kg
- Amount rule: Use this row once-calculated x_i; collect undivided raw quantities using `cp_packaging`.
- Value mode: Calculated from collection (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_packaging`
- Sources: `corning-ophthalmic-spec-f-2013`; `corning-ophthalmic-manufacturing`; `jrc-ilcd-attributional-2010`

###### Corrugated fibreboard outer carton discarded at site (`carton_waste`)

Keep one complete actual article and its actual moisture/state. Apply calc_packaging: all four disjoint opening/closing states, separate purchase, supplier-included physical receipt, external return received, gross physical outward shipment, standalone outward return and waste; actual repair-component/water additions/removals use distinct measured nonoverlapping flow terms. Retained added mass stays in BOTH the actual inflow and complete closing stock. Burden/consumption history is separate from gross directions; supplier-included burden is not bought twice and internal reuse creates no Q or credit. This concrete atomic flow UUID remains unbound; match actual identity/state before data-package use, never a collection-flow substitute. Quantity linkage: this row x_i is the single calc_reference result from undivided raw `cp_packaging` after calc_raw_conversion, calc_history and actual attribution; cards and aggregation never divide again.


- Selected flow: Corrugated fibreboard outer carton discarded at site
- Flow property / unit: Mass / kg
- Amount rule: Use this row once-calculated x_i; collect undivided raw quantities using `cp_packaging`.
- Value mode: Calculated from collection (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_packaging`
- Sources: `corning-ophthalmic-spec-f-2013`; `corning-ophthalmic-manufacturing`; `jrc-ilcd-attributional-2010`

##### Elementary flows

## 7. Allocation and Co-product Handling

These attributional rules apply only to uncoated nonphotochromic single-vision optically unworked silicate ophthalmic pressings, from whole supplied batch materials through electric melting/fining/conditioning, gob shearing, hydraulic pressing/cooling and electric annealing to unique first quality release, plus actual original-cohort services. Exclude watch covers, spheres, fused segments, photochromic activation, finished optical surfacing/polishing/coating and other heating/forming routes. Consume every rule with this scope and its ancestor conditions.

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| allocation_scope | all processes | Use only the declared attributional inventory context where allocation is appropriate after goal/scope choice. Assign dedicated measurements and use physical/virtual subdivision first; keep exclusively related raw materials, rejection/rework and services with their actual product/cohort. Industrial manufacturing documents are not allocation evidence. | `jrc-ilcd-attributional-2010` |
| allocation_causal | shared process exchanges | For each genuinely shared exchange determine which physical relationship controls that exchange quantity. Use measured heat capacity/enthalpy and thermal history for heating only where causal; processing time/load or another extensive driver must be justified per exchange. A mass share is not automatically valid for all electricity, cooling, assets or pollutants. Retain method, measurements, uncertainty and sum conservation. | `jrc-ilcd-attributional-2010` |
| allocation_residual | remaining shared exchanges | Only a demonstrably remaining common-process burden without a determining physical relationship may use economic allocation: actual quantities and contemporaneous market values of cofunctions in their actual condition at the same process exit/entry gate. Explain the residual, period, quality, packing state, currency and volatility. Never freely choose physical versus economic shares, fixed ratios, avoided-production credits, or automatic cullet/recovery benefits. | `jrc-ilcd-attributional-2010` |
| allocation_service | services | Post-release handling/packaging/storage and actual returns retain original cohort Q and each original inherited burden vector; record only actual incremental service/rework/loss burden in its observed horizon. Do not remove manufacturing burdens of closingFG from original first-release Q, add closingFG as another production output, or create Q by reinspection or dispatch. An independently reported net-delivery study needs gross G/R, original-delivery reversal D_rev, opening/closingFG history and measured new water/loss/rework; this first-release denominator cannot be silently reused. | `jrc-ilcd-attributional-2010` |
| asset_manufacture_conservation | existing capital/reusable manufacture attribution | Within the applicable allocation decision context, original manufacture burden attributed across uses of actual capital equipment or reusable articles already included in foreground production, packaging or observed services uses one persistent same-asset ledger across all crops, products, cohorts, manufacturing/postrelease services, owners and observation periods. D is its supported whole installed service: all realized historical service plus supported remaining service in the same units as actual beneficiary use u; D must be finite and positive. Period capacity, remaining-only capacity, the physical asset/article mass alone, or current-period product Q alone is not D; supported whole-service throughput in mass units may be used when it demonstrates the causal service and matches u. This does not amortize the manufactured reference product over downstream life or change its declared reference gate/Q. The fractions u/D and all previously assigned manufacture shares together must never exceed 1. Changes of window, custody, provider or repair never restart the original manufacture balance. Replacements have distinct identities and only their real new manufacture vectors; actual repair and treatment increments remain separately accounted. Revised capacity evidence requires transparent reconciliation of prior shares and sensitivity, not a fresh ledger. Keep full physical mass and stock movements independent of burden shares. Unknown D, prior shares or beneficiary coverage requires review and no final manufacture-attributed amount; no assumed lifetime, utilization, zero or arbitrary division is permitted. |  |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

For each existing collection protocol that attributes manufacture of included production, packaging or observed-service assets across uses in this route (excluding amortization of the manufactured reference product itself), additionally retain a durable asset identity, its measured full physical mass and acquisition/installation/retirement stock history, original manufacture burden vector, all historical and current beneficiaries, matched-unit service readings, the evidenced whole installed-service denominator D, supported remaining-service basis and uncertainty, prior assigned shares and remaining original manufacture balance. Carry the ledger across reporting windows and custody/provider changes. Collect actual repair, replacement, recovery and treatment separately; these records do not normalize physical movements or create an additional asset purchase. These are added fields and conservation obligations for the existing applicable protocols, not a new assumed capital inventory.

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cp_batch | manufacture | silica; soda; potash; limestone; boric; alumina; antimony; ceria; nitrate; sulfate; cullet_in | Raw measured/history record | lot id; supply article; supplier; form; moisture; assay; impurities; received/issued mass; opening/closing raw; recipe; losses | Use calibrated whole-supply weighing and original goods/recipe records; retain each measured composition without purchasing the constituent children twice. Collection and aggregation sum only undivided raw extensive amounts by actual exchange/cohort. Convert, reconcile history and actually attribute first; only calc_reference produces x_i on the same per1kg reference-flow basis. This aggregation field merely references that result and does not divide Q again. | kg | Each event and period reconciliation | Complete production period/all modes; original-cohort service horizon separately | Each actual line/furnace/circuit/stock/service gate | per 1 kg reference flow | Calibration; raw records; independent composition/phase evidence; history vectors; uncertainty |
| cp_energy | manufacture | electricity | Raw measured/history record | meter id; opening/closing readings; voltage; supply location; process/mode; interval; transformer loss boundary; allocation driver | Read main/submeters without duplicate totals for each actual operating mode, including zero-output periods; record true rate versus accumulated readings. Collection and aggregation sum only undivided raw extensive amounts by actual exchange/cohort. Convert, reconcile history and actually attribute first; only calc_reference produces x_i on the same per1kg reference-flow basis. This aggregation field merely references that result and does not divide Q again. | kWh | Each event and period reconciliation | Complete production period/all modes; original-cohort service horizon separately | Each actual line/furnace/circuit/stock/service gate | per 1 kg reference flow | Calibration; raw records; independent composition/phase evidence; history vectors; uncertainty |
| cp_water | manufacture | mains_water; diwater; exchange_return; exchange_water_in | Raw measured/history record | circuit; source; integrated volume or mass; density sample/state; temperature; pressure; enthalpy; humidity; opening/closing; return; purge; supplier agreement | Measure each actual water circuit and each gross external supply/return/purge, independently sample density and phase. Separate real reaction/free/structural water; provider energy/water overlap is documented. Collection and aggregation sum only undivided raw extensive amounts by actual exchange/cohort. Convert, reconcile history and actually attribute first; only calc_reference produces x_i on the same per1kg reference-flow basis. This aggregation field merely references that result and does not divide Q again. | kg | Each event and period reconciliation | Complete production period/all modes; original-cohort service horizon separately | Each actual line/furnace/circuit/stock/service gate | per 1 kg reference flow | Calibration; raw records; independent composition/phase evidence; history vectors; uncertainty |
| cp_aux | manufacture | release_agent; hydraulic_oil; machine_oil; waste_hydraulic_oil; waste_machine_oil | Raw measured/history record | supplied formulation; batch; whole amount; actual active/carrier assay; fresh/installed/removed fluid; water; leakage; cleanup; destination | Weigh the complete purchased formulation and each real removed stream; assay children are subledgers. Site mixing requires every separately purchased component, energy and losses. Collection and aggregation sum only undivided raw extensive amounts by actual exchange/cohort. Convert, reconcile history and actually attribute first; only calc_reference produces x_i on the same per1kg reference-flow basis. This aggregation field merely references that result and does not divide Q again. | kg | Each event and period reconciliation | Complete production period/all modes; original-cohort service horizon separately | Each actual line/furnace/circuit/stock/service gate | per 1 kg reference flow | Calibration; raw records; independent composition/phase evidence; history vectors; uncertainty |
| cp_assets | manufacture | platinum_contact; refractory; mould; shear; filter; melter_asset; press_asset; lehr_asset | Raw measured/history record | asset/part id; construction/alloy; received mass; repair mass; opening/closing installed/uninstalled; retired/returned mass; wear; service hours/load; inherited vector | Keep a full physical asset/part/fluid register, measured configuration-specific mass and actual new/repair/retirement events. Separately determine current service burden from actual history and causal use; no fixed life or whole-machine-per-kg assumption. Collection and aggregation sum only undivided raw extensive amounts by actual exchange/cohort. Convert, reconcile history and actually attribute first; only calc_reference produces x_i on the same per1kg reference-flow basis. This aggregation field merely references that result and does not divide Q again. | kg | Each event and period reconciliation | Complete production period/all modes; original-cohort service horizon separately | Each actual line/furnace/circuit/stock/service gate | per 1 kg reference flow | Calibration; raw records; independent composition/phase evidence; history vectors; uncertainty |
| cp_air | manufacture | air_n2; air_o2; air_ar; air_h2o; air_co2 | Raw measured/history record | circuit; integrated volume or true rate; interval; pressure; temperature; humidity; measured species fraction; species density; gas source | Measure actual gross air intake by circuit and independently resolve N2/O2/Ar/CO2/H2O plus every actual trace species; distinguish ambient and bought gas supply. Do not use an aggregate exchange plus its constituents. Collection and aggregation sum only undivided raw extensive amounts by actual exchange/cohort. Convert, reconcile history and actually attribute first; only calc_reference produces x_i on the same per1kg reference-flow basis. This aggregation field merely references that result and does not divide Q again. | kg | Each event and period reconciliation | Complete production period/all modes; original-cohort service horizon separately | Each actual line/furnace/circuit/stock/service gate | per 1 kg reference flow | Calibration; raw records; independent composition/phase evidence; history vectors; uncertainty |
| cp_emissions | manufacture | co2_process; no_air; no2_air; so2_air; water_air; n2_air; o2_air; ar_air; co2_pass; silica_dust_air; boric_air; b2o3_air | Raw measured/history record | outlet; medium; phase; sampling interval; concentration; integrated dry/wet gas volume or rate; water; species evidence; elemental result; uncertainty | Sample real outlets including start-stop/idle/cleanup and fugitive emissions; obtain independent molecular/phase evidence. Multiply species concentration by consistent integrated gas volume, or integrate a genuine mass rate once. Keep diagnostic COD/VOC/NOx/total-element and dust-size bins separately. Collection and aggregation sum only undivided raw extensive amounts by actual exchange/cohort. Convert, reconcile history and actually attribute first; only calc_reference produces x_i on the same per1kg reference-flow basis. This aggregation field merely references that result and does not divide Q again. | kg | Each event and period reconciliation | Complete production period/all modes; original-cohort service horizon separately | Each actual line/furnace/circuit/stock/service gate | per 1 kg reference flow | Calibration; raw records; independent composition/phase evidence; history vectors; uncertainty |
| cp_balance | manufacture | cullet_out; glass_waste; batch_dust; washwater; cool_purge; filter_waste; refractory_waste; mould_waste; shear_waste; platinum_return | Raw measured/history record | stream; gross direction; whole mass; moisture; relevant elements; molecular/phase evidence; raw/WIP/cullet stores; inherited vector; reject; cleanup; destination | Weigh every whole physical inlet/outlet and stock by consistent gate; carry prior batch burden vectors through WIP/cullet and cancel exact internal transfers. Separate waste treatment from molecular emissions and from acquired supplier burden. Collection and aggregation sum only undivided raw extensive amounts by actual exchange/cohort. Convert, reconcile history and actually attribute first; only calc_reference produces x_i on the same per1kg reference-flow basis. This aggregation field merely references that result and does not divide Q again. | kg | Each event and period reconciliation | Complete production period/all modes; original-cohort service horizon separately | Each actual line/furnace/circuit/stock/service gate | per 1 kg reference flow | Calibration; raw records; independent composition/phase evidence; history vectors; uncertainty |
| cp_release | manufacture | finished_blank | Raw measured/history record | release id; batch; drawing; glass type; surface state; net dry bare mass; accepted/rejected; stress/material/dimension tests; timestamp; item count; measured M configuration | Calibrated net dry bare-blank weighing with traceable first acceptance; every accepted piece enters Q once. When counts are used measure M for that actual configuration/lot or directly weigh the whole accepted lot; no nominal density or generic item weight. Collection and aggregation sum only undivided raw extensive amounts by actual exchange/cohort. Convert, reconcile history and actually attribute first; only calc_reference produces x_i on the same per1kg reference-flow basis. This aggregation field merely references that result and does not divide Q again. | kg | Each event and period reconciliation | Complete production period/all modes; original-cohort service horizon separately | Each actual line/furnace/circuit/stock/service gate | per 1 kg reference flow | Calibration; raw records; independent composition/phase evidence; history vectors; uncertainty |
| cp_service | services | fg_received; fg_dispatch; service_glass_waste | Raw measured/history record | original release id; original Q; opening/closingFG; internal Q transfer; gross dispatch G; returned lot R; original dispatch id; measured returned dry mass/water/contamination; service waste; actual rework; horizon; inherited vector; D_rev if net delivery is separately studied; permission_record; postwork_test_scope; acceptance_disposition; new_removed_parts_water_species; repair_WIP_or_FG_substate; actual_first_release_state_mass | Retain full original-cohort ledger, trace actual gross dispatch/return and new service/loss/rework at the declared observed horizon. Reinspection/redispatch do not create new Q. Net-delivery alternatives need a separate original reversal bridge and actual returned-state measurements. Collection and aggregation sum only undivided raw extensive amounts by actual exchange/cohort. Convert, reconcile history and actually attribute first; only calc_reference produces x_i on the same per1kg reference-flow basis. This aggregation field merely references that result and does not divide Q again. For each original cohort, opening physical FG + actual first-release internal physical receipt + actual external returned material + every actual added material/water/species = closing physical FG + gross physical dispatch + actual standalone external return + service waste + each actual removed material/water/species/loss. The first-release physical receipt is independently measured at its actual state and linked to dry bare-glass Q; moisture/contamination/retained contents do not become dry Q. Repair-held units are a named FG custody substate OR disjoint repair-WIP opening/closing once. Record original release and original dispatch reversal independently from current returned wet/state mass. Permit only actual manufacturer/specification-authorized compatible work within this unworked-blank boundary, with defined post-work tests and actual acceptance/disposition; broken/failed blanks are reject/waste unless independently eligible. Every actual new/removed component and water phase has an atomic row before completion; no assumed restoration or equal input/return mass. Cancel internal transfer at the combined gate, preserving original manufacture once and all observed incremental services without adding new Q. | kg | Each event and period reconciliation | Complete production period/all modes; original-cohort service horizon separately | Each actual line/furnace/circuit/stock/service gate | per 1 kg reference flow | Calibration; raw records; independent composition/phase evidence; history vectors; uncertainty |
| cp_service_energy | services | service_electricity | Raw measured/history record | original release id; original Q; actual service horizon; operation; meter id; readings; allocation driver | Meter only actual original-cohort service increments, preserve all nonproductive and rework loads and keep the original released denominator; future unobserved service is undisclosed coverage, not zero. Collection and aggregation sum only undivided raw extensive amounts by actual exchange/cohort. Convert, reconcile history and actually attribute first; only calc_reference produces x_i on the same per1kg reference-flow basis. This aggregation field merely references that result and does not divide Q again. | kWh | Each event and period reconciliation | Complete production period/all modes; original-cohort service horizon separately | Each actual line/furnace/circuit/stock/service gate | per 1 kg reference flow | Calibration; raw records; independent composition/phase evidence; history vectors; uncertainty |
| cp_transport | manufacture | freight | Raw measured/history record | shipment id; actual whole cargo tonnes; distance km; mode; payload; empty return; supplier inclusion | Use original transport tickets and distances per actual trip; retain each separate route and provider boundary. Do not buy both an included delivery and another identical freight service. Collection and aggregation sum only undivided raw extensive amounts by actual exchange/cohort. Convert, reconcile history and actually attribute first; only calc_reference produces x_i on the same per1kg reference-flow basis. This aggregation field merely references that result and does not divide Q again. | tkm | Each event and period reconciliation | Complete production period/all modes; original-cohort service horizon separately | Each actual line/furnace/circuit/stock/service gate | per 1 kg reference flow | Calibration; raw records; independent composition/phase evidence; history vectors; uncertainty |
| cp_packaging | services | tray_purchase; tray_supplier_included; tray_returned_in; tray_gross_out; tray_return_out; tray_waste; carton_purchase; carton_supplier_included; carton_returned_in; carton_gross_out; carton_return_out; carton_waste | Raw measured/history record | material/article id; moisture; opening_empty; opening_attached_WIP; opening_attached_FG; opening_reusable; purchased; external_returns_received; closing_empty; closing_attached_WIP; closing_attached_FG; closing_reusable; gross_outbound; external_return_out; waste; internal_reuse; original cohort; supplier_included_receipts; supplier_burden_included; actual_repair_new_component; actual_removed_component; water_phase_in_out; independent_mass_state; flow_term_nonoverlap; complete_stock_moisture | Weigh each actual whole tray and whole carton separately; reconcile every empty/attached/reusable stock and external direction before assignment. Add any actual crate, film, pallet, label or strap as its own full atomic ledger. Internal reuse cancels and physical movements are never allocated away. Collection and aggregation sum only undivided raw extensive amounts by actual exchange/cohort. Convert, reconcile history and actually attribute first; only calc_reference produces x_i on the same per1kg reference-flow basis. This aggregation field merely references that result and does not divide Q again. Keep one complete actual article and its actual moisture/state. Apply calc_packaging: all four disjoint opening/closing states, separate purchase, supplier-included physical receipt, external return received, gross physical outward shipment, standalone outward return and waste; actual repair-component/water additions/removals use distinct measured nonoverlapping flow terms. Retained added mass stays in BOTH the actual inflow and complete closing stock. Burden/consumption history is separate from gross directions; supplier-included burden is not bought twice and internal reuse creates no Q or credit. Add every actual repair component and water phase as specific atomic exchanges before modelling; receipt issue or net consumption is declared and not stock-corrected twice. | kg | Each event and period reconciliation | Complete production period/all modes; original-cohort service horizon separately | Each actual line/furnace/circuit/stock/service gate | per 1 kg reference flow | Calibration; raw records; independent composition/phase evidence; history vectors; uncertainty |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| calc_raw_conversion | all inventory rows | Convert raw extensive quantities to the row numerator unit before attribution: kg from calibrated whole-material weighing; electricity MJ = 3.6 * metered kWh; tkm from actual tonnes and km. For a true rate integrate over time once. For an already integrated gas/liquid volume do not multiply time again; use independently measured density/composition at that substance state. Item counts require measured configuration-specific net mass M or total weighed lot kg; never infer density/item mass from native secondary factors. | raw_i; conversion_i; cp_batch; cp_energy; cp_water; cp_air | C_i | `jrc-glass-bref-2013` |
| calc_history | all inventory rows | A_i = B_open_i + C_i - B_close_i with each vector component preserved and actual attribution applied once. Manufacturing B_close excludes all first-released cohort FG; closing raw/WIP/unassigned stores alone retain not-yet-released burden. Internal cullet/melt/Q transfers cancel without a second supplier burden. Service A_i uses actual increments assigned to original cohort and observed horizon, not another original manufacture. Use the receipt-versus-already-adjusted-consumption distinction in boundary_history: C_i must declare its original basis, and no raw-stock correction is repeated. Physical movement cards keep complete converted gross quantities rather than subtracting stocks or multiplying an economic burden share. Actual performed service increments remain assigned to original Q at the observed horizon even when the serviced FG remains held; only genuinely unconsumed/unassigned charge/service stores carry forward. | B_open_i; C_i; B_close_i; cp_balance; cp_service; cp_assets | A_i | `jrc-ilcd-attributional-2010` |
| calc_reference | all inventory rows | x_i = A_i / Q; A_i is attributable unnormalised exchange amount in this row numerator unit; Q is unique first-released dry bare-blank kg. This is the only normalization. Inventory cards and collection aggregation merely reference x_i and never divide again. If Q = 0 retain all raw loads/history and report no unit result. Finished blank = 1 kg is a declared reference identity, not a second division. | A_i; Q; cp_release | x_i | `jrc-ilcd-attributional-2010` |
| calc_physical | all physical streams | At each manufacturing/FG/combined gate use opening stocks + gross external inputs = closing stocks + gross external outputs, independently for total material, water and relevant elements. Keep assets/installed fluids separate, cancel internal movements, and distinguish real reaction/phase/species routes. No allocation shares scale gross physical amounts and no residual fits two unknowns. | gross_i; stock_open_i; stock_close_i; cp_balance; cp_emissions; cp_water | physical_closure_i | `jrc-glass-bref-2013` |
| calc_packaging | services | For EACH actual tray and carton separately: opening_empty + opening_attached_WIP + opening_attached_FG + opening_reusable + purchases + supplier_included_receipts + external_returns_received + X_in = closing_empty + closing_attached_WIP + closing_attached_FG + closing_reusable + gross_outbound + external_return_out + waste + X_out. X_in/X_out are separately measured actual repair-component or water/material transfers that have NOT already been counted in another incoming/outgoing flow term. Water or material retained in closing stocks stays in the complete closing physical mass AND its actual incoming term; being in stock never cancels that real inflow. Same logic for actual removals. Name every real new/removed component and water phase as its own atomic row before dataset completion, with independent state/mass and no invented repair or exchange. Internal reuse cancels; whole articles and constituent subaccounts are not double purchases. Supplier-included articles have real physical receipt but no second acquisition burden already owned by the supplier. Keep each physical direction unscaled and burden/history attribution separate; no automatic credit or new Q. | cp_packaging; stock_open_i; stock_close_i; gross_i | packaging_closure_i | `jrc-ilcd-attributional-2010` |
| calc_fg | services | For each original cohort, opening physical FG + actual first-release internal physical receipt + actual external returned material + every actual added material/water/species = closing physical FG + gross physical dispatch + actual standalone external return + service waste + each actual removed material/water/species/loss. The first-release physical receipt is independently measured at its actual state and linked to dry bare-glass Q; moisture/contamination/retained contents do not become dry Q. Repair-held units are a named FG custody substate OR disjoint repair-WIP opening/closing once. Record original release and original dispatch reversal independently from current returned wet/state mass. Permit only actual manufacturer/specification-authorized compatible work within this unworked-blank boundary, with defined post-work tests and actual acceptance/disposition; broken/failed blanks are reject/waste unless independently eligible. Every actual new/removed component and water phase has an atomic row before completion; no assumed restoration or equal input/return mass. Cancel internal transfer at the combined gate, preserving original manufacture once and all observed incremental services without adding new Q. | cp_service; cp_release; Q; gross_i | fg_closure_i | `jrc-ilcd-attributional-2010` |
| asset_manufacture_share | existing capital/reusable manufacture attribution | For each included original asset manufacture vector B, f_current = u_current / D only after the persistent ledger verifies the supported whole installed-service denominator, all beneficiaries and prior assigned shares. Attribute f_current * B once to the actual beneficiary before the existing single reference normalization. Check prior_shares + all current/new beneficiary shares <= 1; carry the remaining original balance. Capacity revisions reconcile the historical ledger. Full physical asset/packaging mass and actual gross stocks/returns never receive f_current. Unknown D or history leaves the final attributed result unavailable, without suppressing actual repair/replacement/service burdens. | asset_id; original_B; u_current; D; historical_beneficiaries; prior_shares; capacity_evidence | conserved attributed manufacture vector |  |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| dq_scope | all processes | Actual site scope must demonstrate complete raw-to-unworked-pressing route and first-release terminal with drawing and acceptance records. Do not convert qualitative synthesis into a claimed current factory or guaranteed optical performance. | Drawing; recipe; process logs; first-release QC |
| dq_history | all inventory rows | Retain complete campaign/period modes, calibrated raw records and each inherited stock vector; no missing past burden, failed trial or zero-output load is silently cut off. Report uncertainty, detection limits and unobserved service periods. | Calibration; mode logs; historical ledgers; uncertainty |
| dq_native | all inventory rows | Disclose exact native restrictions in the consuming rule context, real supplier/grade/location/medium compatibility and every unbound atomic identity. A normal auxiliary or future factory quantity gap is distinct from missing core product or method evidence. | Native records; supplier assay; state and property evidence |
| dq_physical | all processes | Use independently observed whole-mass, element, molecular-species and water/phase data; match manufacturing, FG/service and combined gates, packaging and asset/fluid balances. Diagnostic residuals are tests, not invented species measurements. | Mass/element balance; molecular/phase analysis; packaging and asset ledger |

## 9. Validation Rules

These checks concern only uncoated nonphotochromic single-vision optically unworked silicate ophthalmic pressings, complete whole-batch electric melting/fining/conditioning, gob shearing, hydraulic pressing/cooling, electric annealing, first quality release and observed original-cohort services. Watch covers, spheres, fused segments, photochromic activation and optically finished lenses are excluded. This is never whole37194 coverage; engineering checks do not replace scientific, translation or mapping decisions.

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| validate_terminal | reference product | Verify drawing, silicate family, nonphotochromic single-vision state, unworked surfaces, pressing/annealing route and real quality gate; finished lenses, glass spheres/watch covers and generic optics are not substitute endpoints. Missing primary core route/terminal or unresolved true core native identity keeps the draft unusable regardless of engineering checks. | `corning-ophthalmic-spec-f-2013`; `corning-ophthalmic-manufacturing` |
| validate_quantities | all inventory rows | Verify consistent first-release Q and units in both languages, exactly one calc_reference A_i/Q and complete raw conversion/history attribution. All failures, zero output, start-stop, idle, cleanup, rework and stock vectors must remain. Unsupported/unknown relationships are unresolved, not pass; report Q0 without unit inventory. | `jrc-ilcd-attributional-2010` |
| validate_identity | all inventory rows | For adopted UUIDs inspect every native basename, synonyms/comments, CAS, route/form/grade, geography/medium/type and all properties, including the exact reference-property/unit-group chain. Use official Chinese basename. Provider selection still needs actual fit; no support record or classifier alone proves applicability. Leave concrete unbound atoms explicit and do not replace them with a collection label. | `jrc-glass-bref-2013` |
| validate_closure | all processes | Require independent whole-mass/element and actual molecular/phase/water evidence at consistent manufacturing, FG and combined gates. Reconcile each packaging/asset/fluid stock and all gross directions independently of economic shares. Quantified diagnostic totals cannot create unmeasured species; unknown outlet/state or missing inherited history blocks a concrete usable inventory. | `jrc-glass-bref-2013`; `jrc-ilcd-attributional-2010` |
| validate_evidence | all processes | Disclose the complete manufacturer page as publisher-origin web-tool-rendered text, not locally acquired publisher HTML/PDF. Read its raw-batch, forming, standard-annealing, photochromic countercontext and packing sections together with the complete 2013 Corning specification and Glass BREF. They support a bounded qualitative synthesis, not one contemporary all-electric plant order, recipe or numerical default. Failed local acquisition alone is not a core-content gap. Scientific judgement, aligned translation review, mapping acceptance and publication remain separate decisions. | `corning-ophthalmic-spec-f-2013`; `corning-ophthalmic-manufacturing`; `jrc-glass-bref-2013` |
| validate_asset_manufacture_conservation | existing capital/reusable manufacture attribution | For every included capital/reusable manufacture attribution verify same-asset continuity, whole installed service in matched units, all historical/current beneficiaries, prior assigned manufacture shares and cumulative share <= 1. Reject a reset by period, cohort, provider, owner or repair. Check distinct real replacement and incremental repair/treatment vectors separately and preserve gross physical mass. A missing denominator, unexplained previous allocation or incomplete beneficiary ledger requires explicit review and an unavailable final attributed amount; structural inspection cannot claim empirical completeness. |  |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | secondary_dataset; background_dataset |
| downstream_use | Blank purchasing for subsequent single-vision mineral spectacle-lens manufacture |
| allowed_use | Attributional inventory after actual site/route/state/species/history closure and independent methodological judgement |
| excluded_use | Unresolved draft as usable guidance; finished lenses or whole-class coverage; default recipe/performance/life; automatic recycling credits |
| required_metadata | single-vision blank drawing and dimensional configuration; silicate formulation and each whole supplied raw material; nonphotochromic and optically unworked surface state; electric melting/fining/conditioning and electric annealing route; press/shear/mould and actual lubrication state; material quality and residual-stress acceptance method; unique first-release cohort and net dry bare-glass kg Q; measured item-mass conversion configuration if count is used; opening/closing raw WIP FG and installed-fluid vectors; source-specific native identity restrictions and provider boundary; actual water phase/species evidence and physical closure; packaging construction and full stock/return routes; original-cohort services and explicitly observed horizon |
| required_quality_disclosure | Source/route applicability limits; native/provider restrictions; unknowns; history vectors; allocation; species/water evidence; observed service horizon; uncertainty |
| update_trigger | Changed product/surface/recipe, supply form, melt/press/anneal/QC gate, provider/native restrictions, stock/return/service or primary evidence |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| jrc-glass-bref-2013 | official_guidance | https://bureau-industrial-transformation.jrc.ec.europa.eu/sites/default/files/2019-11/GLS_Adopted_03_2012_0.pdf | 2013 Glass BREF: qualitative raw-material, melting, auxiliary and emission completeness; optical special-glass context and counterexamples. No numerical recipe, yield, energy, emissions or asset life is adopted. |
| corning-ophthalmic-spec-f-2013 | handbook | https://www.corning.com/media/worldwide/csm/documents/Ophthalmic_Products_Specifications_(85_NQ_01).pdf | Corning 85 NQ 01 edition F October 2013: real standard ophthalmic pressings, acceptance descriptors and distinction from segments, high-index/photochromic products and gobs. Product drawings override the example specification; no tolerances are copied as universal defaults. |
| corning-ophthalmic-manufacturing | handbook | https://www.corning.com/cala/en/products/advanced-optics/product-materials/specialty-glass-and-glass-ceramics/ophthalmic-glass/corning-manufacturing-techniques.html | Complete publisher-origin web-tool-rendered technical page: raw batch, melting/fining/conditioning, gob shearing, pressing, standard annealing versus photochromic activation, and packing support qualitative route synthesis. Local publisher HTML acquisition failed and is not claimed; this source does not establish one current factory, recipe or electricity-only order. |
| jrc-ilcd-attributional-2010 | official_guidance | https://eplca.jrc.ec.europa.eu/uploads/ILCD-Handbook-General-guide-for-LCA-DETAILED-GUIDANCE-12March2010-ISBN-fin-v1.0-EN.pdf | 2010 detailed guidance sections 7.9.2–7.9.3: attributional subdivision, exchange-specific determining physical causality and residual process-gate market value, only where allocation is justified. No consequential credit or default physical/economic split. |
