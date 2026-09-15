---
pcr_id: pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.meat-fish-fruits-vegetables-oils-and-fats.other-shelled-nuts
language: en-US
status: candidate
content_maturity: authored_methodology
translation_status: canonical
sync_with: pcr.zh-CN.md
---

# Other shelled nuts

## 1. Scope and Applicability

This PCR supports production of product-specific foreground data packages for shelled nuts within CPC 3.0 subclass 21429, whether fresh or dried, from receipt of declared nut material through the dispatch of the shelled product. It is intended for identified species, product states, lots, sites, and processing routes; it does not authorize a generic average to be applied across the entire heterogeneous subclass.

The Tiangong product flow named Almond, UUID `05bb565f-a834-4543-8d65-dd4029d5deea`, is the only resolved product-flow identity supplied for this PCR. Its supplied CPC 3.0:21429 classification has been precisely verified and is accepted as correct for this task, but that classification does not make the UUID category-wide. It is a narrow representative that may be used only when the foreground product is actually the almond representative and the intended product boundary has been confirmed. It must not be selected automatically for coconut, Brazil nut, chestnut, pistachio, macadamia, betel nut, ginkgo nut, pecan, water chestnut, kola nut, pine nut, or any other non-almond product. For those products, replace it with a product-specific Tiangong product flow; if none is verified, stop automated identity selection and send the dataset to manual review.

UNSD defines the subclass. Codex CXC 6-1972 supports the process and hygiene abstraction only for tree nuts within its scope; it does not establish requirements for non-tree-nut members of CPC 21429. UNECE DDP-06 applies only to the whole sweet almond kernels described by that standard and must not be extrapolated to other nuts, excluded almond forms, or other processing states. Commission Recommendation (EU) 2021/2279 supplies general Environmental Footprint method principles; this PCR is not by itself a complete PEF study or an endorsed EU PEFCR.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.meat-fish-fruits-vegetables-oils-and-fats.other-shelled-nuts |
| classification_refs | CPC 3.0: 21429, Other shelled nuts |
| covered_products | Product-specific shelled nuts, fresh or dried, within CPC 3.0 subclass 21429; UNSD examples include coconuts, Brazil nuts, cashew nuts, chestnuts, pistachios, macadamia nuts, betel nuts, ginkgo nuts, pecan nuts, water chestnuts, kola nuts, and pine nuts (Pinus pinea). |
| excluded_products | Nuts in shell; groundnuts and separately classified products unless CPC 21429 applicability is explicitly confirmed; mixtures; products roasted, salted, sugared, flavoured, or otherwise prepared outside the fresh-or-dried shelled state; nut ingredients in composite foods; unverified use of the Almond flow for another nut. |
| representative_product | Narrow database representative: Almond `05bb565f-a834-4543-8d65-dd4029d5deea`. This reference does not expand the product category to all almonds and does not represent non-almond products. |
| production_route | Declared receipt state followed by applicable shelling or separation, cleaning or conditioning, defect removal and grading, optional product-specific food-safety treatment, packing, and controlled on-site storage. |
| market_state | Net shelled nut product at facility dispatch, fresh or dried as declared, with species, form, moisture basis, grade or specification, treatment state, origin, and lot identity disclosed. |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | A declared, product-specific shelled nut meeting the stated market specification at facility dispatch. |
| How much | 1 kg net mass of shelled product, excluding packaging and non-product foreign matter. |
| How well | Species, form, moisture basis, quality or grade, treatment state, origin, and lot are declared; product-specific legal or commercial requirements are met. |
| How long or cycle | One declared production lot at dispatch; no consumer use duration is represented. |
| reference_flow_link | reference_shelled_nut_product |

| Field | Value |
| --- | --- |
| Reference amount | 1 kg |
| Reference product flow | Almond `05bb565f-a834-4543-8d65-dd4029d5deea` |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | common and scientific product name; confirmation that the Almond UUID is applicable or replacement product-flow UUID and review decision; whole kernel or pieces; fresh or dried state; raw, blanched, pasteurized, or other declared treatment; moisture content and wet or dry measurement basis; quality grade or buyer specification; country and region of origin; crop year or lot; facility and route; packaging state |

When constructing a foreground data package, the items listed in `Required qualifiers` must be declared in dataset metadata, process notes, reference flow comment, product description, or an equivalent data package field. Missing required qualifiers make the reference flow definition incomplete for that data package. The Almond UUID must never be retained merely because no product-specific alternative is available.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| `reference_net_mass` | reference shelled nut product | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Determine net product mass after subtracting tare and packaging. State whether the mass is as-received or adjusted to a declared moisture basis; do not apply an undeclared dry-matter conversion. |
| `lot_mass_consistency` | each foreground process | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Record input, product, co-product, reject, and waste masses on the same lot and moisture basis, or document each conversion used to align the bases. |
| `resource_normalization` | water, energy, and packaging records | recorded physical property | recorded native unit and normalized unit | Preserve native meter, invoice, or issue-record units and document conversion factors before normalizing resource use to 1 kg reference product. |
| `almond_ddp06_applicability` | product claiming UNECE DDP-06 conformity | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` and measured moisture fraction | kg and percent by mass | Apply the DDP-06 moisture and commercial-quality rules only to sweet whole almond kernels within the standard's stated scope. Do not apply its 6.5% moisture ceiling to non-almond nuts or excluded almond forms and treatments. `unece-ddp-06-almond-kernels-2024` |

## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Nut material received at the first foreground-controlled operation, identified by species, origin, crop year or lot, in-shell or shelled state, moisture basis, prior treatment, and supplier. |
| starting_condition_role | Foreground gate input. Include shelling when in-shell material is received; treat already-shelled material as a same-category recursive input rather than recreating its upstream production. |
| product_classification_scope | Output product must be confirmed within CPC 3.0 subclass 21429. The Almond UUID is an almond-only representative and is not a scope-equivalent identity for the subclass. |
| recursive_input_rule | Record purchased or transferred shelled nuts of the same category as a technosphere input with an upstream dataset. Do not re-run the generic shelling route or silently substitute the Almond UUID. |
| upstream_dataset_requirement | Link product-specific upstream datasets for received nut material, electricity, fuels, water supply, packaging materials, transport, and treatment services needed by the study boundary. Unresolved product identity requires manual review. |
| disclosure | Declare species, product-flow decision, origin, lot or crop year, receipt state, processing and treatment route, mass and moisture bases, yield, reject and co-product disposition, packaging, storage conditions, geography, technology, time period, and all foreground exclusions. |

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `sb_foreground_gate` | foreground production | Include lot receipt and identity control, applicable shelling and separation, cleaning or conditioning, sorting and grading, optional product-specific safety treatment, packing, and controlled on-site storage through dispatch. An omitted listed operation must be marked not applicable with the product and route reason. | `codex-cxc-6-1972-tree-nuts`; `eu-recommendation-2021-2279-pef` |
| `sb_upstream_links` | cradle-to-gate projection | Keep agricultural production, supplier processing, purchased energy and materials, and inbound transport outside the foreground gate only when their product-specific upstream datasets are linked and the exclusion from direct foreground collection is disclosed. | `eu-recommendation-2021-2279-pef` |
| `sb_downstream_limit` | dataset use | Distribution beyond facility dispatch, retail, consumer preparation or consumption, and end-of-life are outside this foreground dataset. A full life-cycle study must add and justify the applicable downstream stages and may not present this gate-to-gate dataset alone as a complete PEF study. | `eu-recommendation-2021-2279-pef` |
| `sb_standard_scope` | product-specific standard use | Use CXC 6-1972 process and hygiene provisions only for tree nuts covered by its scope. Use DDP-06 only for qualifying sweet whole almond kernels. For non-tree nuts and other product forms, apply verified product-specific legal or technical rules or require manual review. | `codex-cxc-6-1972-tree-nuts`; `unece-ddp-06-almond-kernels-2024`; `unsd-cpc-3-0-explanatory-notes-2025` |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| `lot_receipt` | Lot receipt and identity control | required | Always; the starting state and product identity must be declared. | Establish the foreground gate, accepted input, and rejected material. | mass of accepted nut material |
| `shelling_separation` | Shelling and kernel separation | conditional | Include when the received material is in shell or requires hull or shell removal at the reporting facility. | Separate edible kernels from shells, hulls, fines, and rejects. | mass of shelled kernel intermediate |
| `kernel_conditioning_grading` | Kernel cleaning, conditioning, and grading | required | Always include inspection and grading; include washing, drying, blanching, pasteurization, or other operations only when performed and still within the declared product category. | Produce the declared shelled-nut specification. | mass of graded shelled nuts |
| `packing_storage` | Packing and controlled on-site storage | required | Always include packing; include storage loads for the actual period under foreground control. | Deliver the reference product at facility dispatch. | 1 kg net reference product |

### Process: Lot receipt and identity control (`lot_receipt`)

#### Inputs

##### Product flows

###### Received nut material (`received_nut_material`)

Record the lot entering foreground control. The selected flow must describe the actual species and in-shell or shelled state; the Almond UUID is not used for non-almond inputs.

- Selected flow: Product-specific received nut material; UUID required when a verified Tiangong flow exists
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: measured net mass accepted at receipt, with moisture basis recorded
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per lot and per 1 kg reference product after calculation
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_lot_identity_mass`
- Sources: `unsd-cpc-3-0-explanatory-notes-2025`; `codex-cxc-6-1972-tree-nuts`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Accepted nut material (`accepted_nut_material`)

Record the mass released to processing after identity and acceptance checks.

- Selected flow: Product-specific accepted nut material
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: measured accepted mass from the same receipt lot
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per lot and per 1 kg reference product after calculation
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_lot_identity_mass`
- Sources: `codex-cxc-6-1972-tree-nuts`

##### Waste flows

###### Receipt rejects (`receipt_rejects`)

Record rejected, contaminated, infested, mould-affected, foreign, or otherwise unfit material and its actual destination.

- Selected flow: Product-specific rejected nut material
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: measured reject mass by disposition category
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per lot and per 1 kg reference product after calculation
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_mass_outputs_disposition`
- Sources: `codex-cxc-6-1972-tree-nuts`

##### Elementary flows

### Process: Shelling and kernel separation (`shelling_separation`)

#### Inputs

##### Product flows

###### Accepted in-shell nuts (`accepted_inshell_nuts`)

Record only when shelling is performed in the foreground facility.

- Selected flow: Product-specific accepted in-shell nut
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: measured mass charged to shelling
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per shelling batch and per 1 kg reference product after calculation
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_lot_identity_mass`
- Sources: `codex-cxc-6-1972-tree-nuts`

###### Shelling energy (`shelling_energy`)

Record metered or allocated electricity and fuel used by shelling, separation, aspiration, and conveying equipment.

- Selected flow: Product-specific purchased electricity and fuel flows
- Flow property / unit: Energy / native meter or invoice unit and kWh or MJ after documented conversion
- Amount rule: measured use or documented equipment-level allocation for the shelling batch
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per kg shelled kernel intermediate
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_resources_operations`
- Sources: `eu-recommendation-2021-2279-pef`

###### Shelling water (`shelling_water`)

Record water only when washing, wet shelling, or cleaning crosses the process boundary.

- Selected flow: Product-specific water supply flow
- Flow property / unit: recorded mass or volume / kg or m3
- Amount rule: measured water supplied to the shelling batch; mark not applicable for dry routes
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per kg shelled kernel intermediate
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_resources_operations`
- Sources: `codex-cxc-6-1972-tree-nuts`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Shelled kernel intermediate (`shelled_kernel_intermediate`)

Record the edible kernel mass leaving shelling before final grading.

- Selected flow: Product-specific shelled kernel intermediate
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: measured kernel mass on the declared moisture basis
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per shelling batch
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_mass_outputs_disposition`
- Sources: `codex-cxc-6-1972-tree-nuts`

###### Marketed shells, hulls, or downgraded material (`shell_hull_coproduct`)

Record this row only when the material has a documented customer or internal productive use and is treated as a co-product rather than waste.

- Selected flow: Product-specific shell, hull, or downgraded-material co-product
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: measured mass transferred as co-product by documented destination
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per shelling batch and per 1 kg reference product after allocation
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_mass_outputs_disposition`
- Sources: `eu-recommendation-2021-2279-pef`

##### Waste flows

###### Shells, hulls, fines, and rejects sent to treatment (`shell_hull_waste`)

Record only material managed as waste; do not duplicate mass already reported as a co-product.

- Selected flow: Product-specific shell, hull, fines, and reject waste
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: measured waste mass by treatment or disposal destination
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per shelling batch and per 1 kg reference product after calculation
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_mass_outputs_disposition`
- Sources: `eu-recommendation-2021-2279-pef`

###### Shelling wastewater (`shelling_wastewater`)

Record wastewater when wet operations are used, including the destination and treatment route.

- Selected flow: Product-specific wastewater to treatment
- Flow property / unit: recorded mass or volume / kg or m3
- Amount rule: measured discharge or calculated water balance for the shelling batch
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per kg shelled kernel intermediate
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_resources_operations`
- Sources: `codex-cxc-6-1972-tree-nuts`

##### Elementary flows

### Process: Kernel cleaning, conditioning, and grading (`kernel_conditioning_grading`)

#### Inputs

##### Product flows

###### Kernel material for conditioning and grading (`kernel_input`)

Record the product-specific lot entering cleaning, inspection, conditioning, and grading.

- Selected flow: Product-specific shelled kernel intermediate
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: measured kernel mass entering the process
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per conditioning and grading batch
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_lot_identity_mass`
- Sources: `codex-cxc-6-1972-tree-nuts`

###### Conditioning and grading energy (`conditioning_grading_energy`)

Record electricity and fuel for cleaning, conveying, drying, aspiration, optical or manual sorting, grading, and any declared food-safety treatment.

- Selected flow: Product-specific purchased electricity and fuel flows
- Flow property / unit: Energy / native meter or invoice unit and kWh or MJ after documented conversion
- Amount rule: measured use or documented equipment-level allocation for the batch
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per kg graded shelled nuts
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_resources_operations`
- Sources: `codex-cxc-6-1972-tree-nuts`; `eu-recommendation-2021-2279-pef`

###### Conditioning water and process aids (`conditioning_water_aids`)

Record water and process aids when used for washing, blanching, sanitation, or another declared operation; identify each material separately in the produced dataset.

- Selected flow: Product-specific water and process-aid flows
- Flow property / unit: applicable recorded property / native purchase or meter unit
- Amount rule: measured issued or metered quantity by material and batch; mark not applicable for dry routes
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per kg graded shelled nuts
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_resources_operations`
- Sources: `codex-cxc-6-1972-tree-nuts`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Graded shelled nuts (`graded_shelled_nuts`)

Record the product mass meeting the declared species-specific and buyer or regulatory specification.

- Selected flow: Product-specific graded shelled nut; use Almond `05bb565f-a834-4543-8d65-dd4029d5deea` only for the confirmed almond representative
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: measured compliant product mass at the declared moisture basis
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per conditioning and grading batch
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_quality_and_product_release`
- Sources: `unsd-cpc-3-0-explanatory-notes-2025`; `unece-ddp-06-almond-kernels-2024`

##### Waste flows

###### Conditioning and grading rejects (`conditioning_grading_rejects`)

Record foreign matter, defective kernels, dust collections, and other removed material separately by destination; reclassify saleable downgraded product as a co-product and apply section 7.

- Selected flow: Product-specific conditioning and grading reject
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: measured mass by reject type and destination
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per conditioning and grading batch and per 1 kg reference product after calculation
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_mass_outputs_disposition`
- Sources: `codex-cxc-6-1972-tree-nuts`

###### Conditioning wastewater (`conditioning_wastewater`)

Record wastewater from washing, blanching, or sanitation when it crosses the foreground boundary.

- Selected flow: Product-specific wastewater to treatment
- Flow property / unit: recorded mass or volume / kg or m3
- Amount rule: measured discharge or calculated water balance by batch
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per kg graded shelled nuts
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_resources_operations`
- Sources: `codex-cxc-6-1972-tree-nuts`

##### Elementary flows

###### Direct dust, combustion, or refrigerant emissions (`conditioning_direct_emissions`)

Record direct elementary flows only when emitted from foreground equipment; select verified elementary-flow UUIDs during dataset construction.

- Selected flow: Product- and technology-specific direct elementary flows; UUID required before publication of the dataset
- Flow property / unit: applicable flow property / measured or calculated unit
- Amount rule: measured emissions or calculation from collected fuel, refrigerant, or abatement records using a cited factor
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per kg graded shelled nuts
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_resources_operations`
- Sources: `eu-recommendation-2021-2279-pef`

### Process: Packing and controlled on-site storage (`packing_storage`)

#### Inputs

##### Product flows

###### Graded shelled nuts for packing (`product_for_packing`)

Record the released product lot transferred to packing.

- Selected flow: Product-specific graded shelled nut; use Almond `05bb565f-a834-4543-8d65-dd4029d5deea` only for the confirmed almond representative
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: measured product mass entering packing
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per packing lot
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_quality_and_product_release`
- Sources: `unsd-cpc-3-0-explanatory-notes-2025`

###### Primary and secondary packaging (`packaging_materials`)

Record each packaging material, component, and reusable transport item separately with actual issue or purchase quantities.

- Selected flow: Product-specific packaging material flows
- Flow property / unit: applicable mass or item property / kg or count with measured item mass
- Amount rule: measured material issued to the lot minus documented reusable or returned quantities
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packing_storage`
- Sources: `eu-recommendation-2021-2279-pef`

###### Packing and storage energy (`packing_storage_energy`)

Record packing-line energy and energy for the actual controlled storage period, including documented allocation of shared meters.

- Selected flow: Product-specific purchased electricity and fuel flows
- Flow property / unit: Energy / native meter or invoice unit and kWh or MJ after documented conversion
- Amount rule: measured use or documented allocation over the lot's packing and storage period
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net reference product
- Basis kind: Storage duration (`storage_duration`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packing_storage`
- Sources: `codex-cxc-6-1972-tree-nuts`; `eu-recommendation-2021-2279-pef`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Reference shelled nut product (`reference_shelled_nut_product`)

This is the quantitative reference. The Almond UUID is valid only for the confirmed almond representative; every non-almond product requires a verified product-specific flow or manual review.

- Selected flow: Almond `05bb565f-a834-4543-8d65-dd4029d5deea` for the almond representative only; otherwise verified product-specific flow
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: 1 kg net dispatched product after tare subtraction, normalized from foreground release records
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: 1 kg net reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_packing_storage`
- Sources: `unsd-cpc-3-0-explanatory-notes-2025`

##### Waste flows

###### Packaging losses and damaged product (`packing_losses`)

Record packaging offcuts, damaged containers, spilled product, and product downgraded or discarded during packing and storage by material and destination.

- Selected flow: Product-specific packaging and product waste flows
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: measured loss mass by material and destination
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packing_storage`
- Sources: `eu-recommendation-2021-2279-pef`

##### Elementary flows

###### Direct storage refrigerant leakage (`storage_refrigerant_leakage`)

Record only when refrigerated storage equipment under foreground control leaks refrigerant during the reporting period.

- Selected flow: Refrigerant-specific elementary flow; UUID required before publication of the dataset
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: calculated lot share from measured recharge and recovery records, excluding documented transfers
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg net reference product and actual storage duration
- Basis kind: Storage duration (`storage_duration`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_packing_storage`
- Sources: `eu-recommendation-2021-2279-pef`

## 7. Allocation and Co-product Handling

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `alloc_avoid` | all multifunctional foreground processes | First avoid allocation by collecting subdivided process data or, when consistent with the study goal, by system expansion. Keep directly attributable inputs and emissions with the product or function that causes them. | `eu-recommendation-2021-2279-pef` |
| `alloc_physical` | unavoidable allocation among kernels, shells, hulls, downgraded products, or services | When subdivision or system expansion is not possible, use a documented, quantifiable physical relationship relevant to the functions delivered. Mass allocation is not automatic; justify why mass reflects the underlying relationship and use aligned moisture bases. | `eu-recommendation-2021-2279-pef` |
| `alloc_economic` | multifunctionality with no defensible physical relationship | If economic allocation is used, document product status, market, price source, averaging period, currency, and calculation; apply the method consistently and disclose a sensitivity check. Do not assign zero burden solely because an output has low value. | `eu-recommendation-2021-2279-pef` |
| `alloc_disposition` | shells, hulls, rejects, fines, and downgraded product | Classify each output once as reference product, co-product, or waste from documented disposition. Do not duplicate it between product and waste rows. Waste treatment burdens remain linked to the process unless the chosen reviewed method states otherwise. | `eu-recommendation-2021-2279-pef` |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_lot_identity_mass` | `lot_receipt`; `shelling_separation`; `kernel_conditioning_grading` | received, accepted, and transferred nut material | receiving ticket, scale record, lot genealogy record | lot_id; supplier; common_name; scientific_name; origin; crop_year; receipt_state; treatment_state; gross_mass; tare_mass; net_mass; moisture_value; moisture_method; product_flow_uuid_decision | calibrated scales plus identity and traceability review | kg; percent moisture | every lot and transfer | declared reporting period | each reporting facility and line | retain lot-level records; aggregate only after reconciling transfers and moisture bases | calibration record; signed receiving record; supplier specification; flow-identity review decision |
| `cp_mass_outputs_disposition` | `lot_receipt`; `shelling_separation`; `kernel_conditioning_grading` | products, co-products, rejects, shells, hulls, fines, and wastewater | scale ticket, bin count with item mass, waste manifest, transfer record | lot_id; output_type; mass_or_volume; moisture_basis; destination; product_or_waste_status; customer_or_treatment | weigh each stream or use documented container count conversion; meter wastewater when applicable | kg; m3 | every batch or removal event | same period as product output | each reporting facility and process | sum by process, output status, and destination; prevent duplicate product/waste classification | scale calibration; destination receipt; waste manifest; conversion record |
| `cp_resources_operations` | `shelling_separation`; `kernel_conditioning_grading` | electricity, fuel, water, process aids, wastewater, and direct emissions | meter, invoice, fuel issue, chemical issue, maintenance and abatement log | timestamp; meter_id; opening_reading; closing_reading; fuel_or_material; quantity; unit; process; allocation_driver; production_lot; emission_factor_source | direct submetering preferred; otherwise documented allocation from shared records | native unit; kWh; MJ; kg; m3 | each batch or at the shortest available meter interval | same period as covered production | each reporting facility and relevant equipment | subtract documented non-production use; allocate shared records using the declared driver; normalize after lot mass reconciliation | meter calibration; invoices; issue logs; factor reference; allocation worksheet |
| `cp_quality_and_product_release` | `kernel_conditioning_grading`; `packing_storage` | graded and released shelled product | laboratory result, inspection sheet, release certificate | lot_id; common_name; scientific_name; form; treatment_state; moisture_value; moisture_method; defects; grade_or_specification; origin; crop_year; release_mass; standard_claim | product-specific sampling and recognized test or inspection method | kg; percent; declared defect unit | every released lot | same period as production | each product and facility | no cross-species averaging; retain result with the released lot | laboratory accreditation or method; inspector record; applicable standard and scope decision |
| `cp_packing_storage` | `packing_storage` | packaging, packed product, storage energy, losses, and refrigerant | packaging issue, packing line record, warehouse log, meter, refrigerant service record | lot_id; package_component; material; issued_quantity; returned_quantity; packed_gross_mass; tare_mass; storage_start; storage_end; storage_condition; energy; refrigerant_recharge; refrigerant_recovery; loss_destination | measured issue and mass records linked to warehouse and maintenance logs | kg; count; kWh; MJ; day | every packing lot and storage period | same period as dispatch output | each reporting facility and storage system | calculate net dispatched mass; aggregate storage loads over actual lot residence time; reconcile refrigerant recharge and recovery | package specification; scale and meter calibration; warehouse log; service invoice |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_net_reference_mass` | packed dispatch product | net product mass = packed gross mass - tare and excluded packaging mass; normalize all inventory quantities by net dispatched mass | packed gross mass; tare mass; packaging mass; released lot identity | kg net reference product and normalized inventory per kg | `eu-recommendation-2021-2279-pef` |
| `calc_process_yield` | receipt, shelling, conditioning, and grading | yield = aligned-basis product output mass / aligned-basis accepted input mass; report species, route, and moisture basis with the result | accepted input mass; product output mass; moisture values and conversions | product-specific process yield |  |
| `calc_mass_balance` | each foreground process and full foreground route | mass-balance difference = aligned-basis input mass - sum of product, co-product, waste, measured emission, and documented inventory-change masses; investigate and disclose the difference without applying an invented tolerance | all input and output masses; inventory change; moisture conversions | reconciled mass balance and disclosed residual |  |
| `calc_resource_intensity` | energy, water, process aids, and packaging | resource intensity = reconciled resource quantity / applicable process output or net reference product mass, using documented unit conversion | meter, invoice, issue, and output records | resource use per declared basis | `eu-recommendation-2021-2279-pef` |
| `calc_allocation_factors` | multifunctional process | apply `alloc_avoid`, then `alloc_physical`, then `alloc_economic`; factors for included co-products must sum to the complete allocated share and be retained with source data | subdivision evidence; physical driver; or price and market records | documented allocation factors and allocated inventory | `eu-recommendation-2021-2279-pef` |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_product_identity` | every foreground data package | Resolve the actual product identity and CPC 21429 applicability. Retain the Almond UUID only for the confirmed almond representative; otherwise store a verified product-specific UUID or a manual-review decision before publication. | lot identity; product description; Tiangong flow decision; `unsd-cpc-3-0-explanatory-notes-2025` |
| `dq_traceability` | all product and material flows | Maintain lot genealogy from receipt through dispatch, including origin, crop year or lot, receipt state, treatment state, moisture basis, specification, and disposition of removed material. | receiving, transfer, inspection, and dispatch records |
| `dq_completeness` | all foreground processes | Cover all listed applicable processes and reconcile major material, water, energy, packaging, waste, co-product, wastewater, and direct-emission records. Mark non-applicable rows with a route-specific reason. | process map; meter and mass-balance reconciliation; exclusion log |
| `dq_representativeness` | activity data and linked datasets | Assess and disclose technological, geographical, time representativeness, and precision for the actual species, facility, technology, and reporting period; do not average different nut products without a documented representativeness and weighting decision. | foreground records and DQR disclosure; `eu-recommendation-2021-2279-pef` |
| `dq_standard_scope` | standard or specification claims | Verify botanical species, product form, treatment, and market claim before applying a commodity standard. DDP-06 data may constrain only qualifying sweet whole almond kernels; CXC 6-1972 process rules may support only tree nuts within its scope. | applicability checklist; laboratory or inspection record; `unece-ddp-06-almond-kernels-2024`; `codex-cxc-6-1972-tree-nuts` |
| `dq_range_evidence` | important inventory flows | Foreground values are mandatory. No category-wide numerical default or QA range is supplied because reviewed cross-product evidence is unavailable; replace this evidence gap with product- and route-specific reviewed ranges before moving the PCR to active methodology. | source review record and product-specific evidence added during methodology review |

## 9. Validation Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `val_identity_scope` | product identity | Fail automated validation if CPC 21429 applicability, species, and product state are missing, or if the Almond UUID is used for a non-almond product. A missing verified product-specific flow for another nut requires manual review. | `unsd-cpc-3-0-explanatory-notes-2025` |
| `val_reference_flow` | reference product | Confirm exactly 1 kg net product on the declared moisture basis, Mass UUID `93a60a56-a3c8-11da-a746-0800200b9a66`, unit-group UUID `93a60a57-a4c8-11da-a746-0800200c9a66`, and unit kg; packaging mass must be excluded. | `eu-recommendation-2021-2279-pef` |
| `val_process_coverage` | foreground boundary | Confirm all four process-map entries are addressed, `shelling_separation` is included for in-shell receipt, and every omitted conditional operation has a documented product- and route-specific reason. | `codex-cxc-6-1972-tree-nuts`; `eu-recommendation-2021-2279-pef` |
| `val_mass_balance` | each process and full route | Confirm aligned moisture and unit bases, reconcile product, co-product, waste, wastewater, emissions, and inventory change, and report every unexplained residual; this PCR supplies no invented acceptance tolerance. |  |
| `val_allocation` | multifunctional processes | Confirm allocation was avoided where possible; otherwise verify the selected physical or economic relationship, input records, factor calculation, completeness, consistent application, and disclosure. | `eu-recommendation-2021-2279-pef` |
| `val_almond_ddp06` | claimed DDP-06 almond product | When and only when DDP-06 conformity is claimed, confirm the product is a qualifying sweet whole almond kernel, excluded forms and treatments are absent, moisture does not exceed 6.5% by mass using the applicable method, and required quality, presentation, and marking evidence is retained. | `unece-ddp-06-almond-kernels-2024` |
| `val_data_quality` | dataset release | Confirm lot traceability, measurement evidence, calibration, temporal coverage, site and technology coverage, linked upstream datasets, exclusions, and representativeness disclosure. An unresolved product-flow identity or missing major foreground record makes validation inconclusive. | `eu-recommendation-2021-2279-pef` |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | Product- and route-specific foreground production data package for a declared CPC 21429 shelled nut at facility dispatch. |
| downstream_use | `secondary_dataset`; `background_dataset` after review, product-flow resolution, completion of upstream links, and quality disclosure. |
| allowed_use | Product-specific process or cradle-to-gate modelling for the declared species, origin, product state, facility, technology, period, and packaging; aggregation only where representativeness and weighting are documented. |
| excluded_use | Automatic representation of the full CPC 21429 subclass by the Almond UUID; substitution among nut species without review; use for in-shell, roasted, salted, sugared, flavoured, composite, or otherwise out-of-scope products; comparative claims or claims of PEF conformity without the additional applicable rules, life-cycle stages, verification, and harmonized scenarios. |
| required_metadata | PCR id; CPC coordinate and scope decision; product common and scientific names; selected product-flow UUID and representative limitation; origin; crop year or lot; facility; technology; receipt and market states; form; treatment; moisture value, method, and basis; grade or specification; time period; geography; process coverage; yield; allocation; packaging; storage; linked upstream datasets. |
| required_quality_disclosure | Data sources and collection coverage; calibration and test methods; mass-balance residuals; missing important-flow ranges; product-flow review status; technological, geographical, time representativeness, and precision; exclusions; allocation method and sensitivity; commodity-standard applicability. |
| update_trigger | Change of species or product identity, route, facility, technology, product state, moisture or grade basis, treatment, packaging, storage system, allocation relationship, reporting period, legal or commercial specification, Tiangong product-flow resolution, or material source evidence. |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `unsd-cpc-3-0-explanatory-notes-2025` | official_guidance | United Nations Statistics Division, Central Product Classification (CPC) Version 3.0 Explanatory Notes, subclass 21429, 30 June 2025. https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Exp_Notes_30Jun2025.pdf (retrieved 2026-08-11) | Official product-category scope and examples; not process or amount evidence. |
| `codex-cxc-6-1972-tree-nuts` | standard | Codex Alimentarius, CXC 6-1972, Code of Hygienic Practice for Tree Nuts. https://workspace.fao.org/sites/codex/Standards/CXC%206-1972/CXC_006e.pdf (retrieved 2026-08-11) | Tree-nut-only process decomposition, receipt controls, shelling, drying, defect separation, packing, storage, and hygiene requirements; not extended to non-tree nuts. |
| `unece-ddp-06-almond-kernels-2024` | standard | UNECE Standard DDP-06 concerning the marketing and commercial quality control of almond kernels, 2024. https://unece.org/sites/default/files/2025-02/DDP-06_Almond_kernels_2024_e.pdf (retrieved 2026-08-11) | Narrow Almond representative qualifiers, moisture, quality, presentation, and marking only for the standard's stated product scope. |
| `eu-recommendation-2021-2279-pef` | official_guidance | Commission Recommendation (EU) 2021/2279 of 15 December 2021, Annex I, Product Environmental Footprint Method. https://eur-lex.europa.eu/eli/reco/2021/2279/oj/eng (retrieved 2026-08-11) | Functional or declared unit, reference flow, supply-chain boundary disclosure, multifunctionality hierarchy, company-specific data, and data-quality dimensions; not nut process evidence. |
