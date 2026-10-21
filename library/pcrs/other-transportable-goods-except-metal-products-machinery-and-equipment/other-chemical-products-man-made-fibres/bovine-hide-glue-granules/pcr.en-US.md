---
pcr_id: pcr.other-transportable-goods-except-metal-products-machinery-and-equipment.other-chemical-products-man-made-fibres.bovine-hide-glue-granules
language: en-US
sync_with: pcr.zh-CN.md
status: candidate
content_maturity: authored_methodology
translation_status: canonical
---

# Bovine hide glue granules from the lime and hot-water extraction route

## 1. Scope and Applicability

This method covers actual manufacture of dry technical bovine hide-glue granules from untanned hide stock; the full 35420 classification label does not expand it to every glue or protein product. The existing casein method ends at casein and excludes later derivatives; downstream glue-using products are also different categories. This animal-collagen extraction route is neither plant protein manufacture nor finished-product repacking. Use one route and delivery form, with actual foreground records from normal enterprise operation.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.other-transportable-goods-except-metal-products-machinery-and-equipment.other-chemical-products-man-made-fibres.bovine-hide-glue-granules |
| classification_refs | CPC 3.0 35420, restricted bovine hide-glue subset; no accepted mapping is asserted |
| covered_products | Unformulated dry granulated technical hide glue made from untanned bovine hide stock by lime conditioning, sulfuric-acid washing, hot-water extraction, filtration, concentration and drying |
| excluded_products | Bone, fish, porcine or equine glue; chrome-tanned stock; edible/pharmaceutical gelatin; peptones; casein and caseinates; plant/synthetic adhesives; gelatin-scrap compounding; liquid ready-to-use glue; purchased finished-glue repacking |
| representative_product | Dry bovine hide-glue granules supplied as a technical collagen adhesive |
| production_route | One untanned bovine hide route only: receipt, washing and size preparation, lime treatment, removal of lime with water and sulfuric acid, hot-water extraction, liquor filtration, evaporation, drying, granulation, packing, storage and gate handover |
| market_state | Net as-supplied dry granules containing measured residual moisture; no automatic dry-protein or anhydrous correction |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Dry technical bovine hide-glue granules actually net delivered at the factory gate |
| How much | 1 kg net whole supplied product, excluding packaging and retaining measured residual moisture |
| How well | Accepted to declared customer technical-adhesive specification; declare measured moisture, protein basis, gel strength, viscosity and test conditions |
| How long or cycle | Actual net accepted handover for one declared period and delivery cohort; no service lifetime applies |
| reference_flow_link | rf_delivered_glue |

| Field | Value |
| --- | --- |
| Reference amount | 1 |
| Reference product flow | Hide Glue `7b2fe9b1-13be-4c47-a6c9-21b899c724ad` |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | bovine origin and untanned hide-stock provenance; lime and sulfuric-acid washing route with actual solution assays; dry granulated technical adhesive grade (not edible or pharmaceutical grade); lot moisture and dry-matter test method; protein content with analytical basis and any conversion factor; gel strength and viscosity with test conditions and customer specification; net product mass excluding every packaging component; actual net factory-gate delivery rather than newly released production; site and geography and reporting period and delivery-cohort identifiers; opening and closing WIP and finished-stock masses and carried burdens; return and rework and failed-run and zero-output reconciliation; utility supply and wastewater destination and residue sale evidence; packaging composition and included warehouse and loading boundary |

Every qualifier must be declared in the data package. The native record is a broad industrial animal-hide glue identity; its complete name components are Hide Glue, animal glue/industrial production, and production mix/at plant, with no CAS or supply geography declared. Its comment that hide glue is mostly made from horse hides is not a horse-only specification; disclose it and establish bovine applicability with actual hide-supply evidence. It provides no bovine supplier, moisture, grade or background burden.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| `reference_net_mass` | reference product | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Use actual net delivered kg of whole supplied granules, excluding packaging but retaining residual moisture. Declare dry solids, protein and whole product separately; neither wet liquor nor newly released output is delivery quantity. |
| `wet_dry_species` | material and water ledgers | Mass | kg | Under calc_water_species retain complete commercial wet formulations and constituent carrier-water subledgers; separate physical water from reaction formation/consumption. Do not infer unknown species from COD or a total residual. |
| `single_normalisation` | all inventory rows | Mass | kg | Collection is unnormalized; reconcile raw period numerators and carried stock burdens under calc_delivery_cohort, then normalize exactly once under calc_gate_once using positive delivered Q from the same cohort. |

## 5. System Boundary

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| `boundary_route` | scoped foreground | Include actual hide preparation, lime treatment, acid/water washing, repeated extraction, filtration, evaporation, drying, finishing and quality testing. Receipt of finished glue followed by packing does not implement this manufacturing route. | `seljel-technical-catalogue`; `epa-hide-glue-1977`; `epa-animal-glue-1975` |
| `boundary_gate` | scoped foreground | The reference gate is actual accepted net handover to the customer or carrier at the factory. Include attributable packing, factory storage, internal handling and loading through that gate; exclude subsequent external distribution and use. Report production releases and actual deliveries separately. | `seljel-technical-catalogue`; `epa-hide-glue-1977`; `epa-animal-glue-1975` |
| `boundary_upstream` | scoped foreground | Purchased untreated bovine hide stock is a complete wet commercial input. Link its actual slaughter/hide-processing supply chain, preservation, transport, supplier allocation and incoming state. A by-product description does not establish zero upstream burden. This foreground does not recreate slaughter, tanning or milk production. | `seljel-technical-catalogue`; `epa-hide-glue-1977`; `epa-animal-glue-1975` |
| `boundary_utilities` | scoped foreground | The representative foreground purchases steam and electricity; steam generation remains upstream, while condensate return and direct-injection water are traced at the actual interface. A site with an on-site boiler must extend the model with its individually identified fuel, water, treatment and emissions rather than delete them. Include cleaning and waste handling actually used. | `seljel-technical-catalogue`; `epa-hide-glue-1977`; `epa-animal-glue-1975` |
| `boundary_waste` | scoped foreground | The representative model exports separately characterised raw wastewater and wet residues to documented off-site management. Internal transfers to an on-site treatment plant require its explicit foreground expansion, each actual reagent and utility, measured treated discharge and sludge; do not label raw effluent as treated water. | `seljel-technical-catalogue`; `epa-hide-glue-1977`; `epa-animal-glue-1975` |

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Untanned bovine hide stock at receipt, with actual moisture, preservation salts and pre-treatment declared; no chrome stock or bone input |
| starting_condition_role | Complete upstream commercial hide-stock input to actual glue manufacture |
| product_classification_scope | Restricted technical bovine hide-glue subset of CPC3 35420 |
| recursive_input_rule | External same-category glue input retains upstream burdens and distinct lot identity; such repacking-only operation is excluded here. Internal glue recycling is a paired transfer; remove it on consolidation without deleting reprocessing energy or losses. |
| upstream_dataset_requirement | Trace actual hide supplier, animal origin, geography, time, preservation and upstream allocation; verify each utility, chemical and transport provider independently |
| disclosure | Disclose factory and time coverage, moisture/protein bases, net-delivery gate, stock burdens, waste destinations, co-product sale proof, included warehouse/loading, utility boundary and every unmeasured data requirement |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| `hide_preparation` | Hide preparation, liming and acid washing | required |  | Convert received untreated hide to washed extraction stock | per 1 kg reference flow |
| `hot_extraction` | Hot-water extraction and liquor separation | required |  | Extract successive glue-liquor fractions and separate spent hide | per 1 kg reference flow |
| `drying_finishing` | Filtration, evaporation, drying and granulation | required |  | Recover dry granules from glue liquor with measured water removal | per 1 kg reference flow |
| `packing_delivery` | Packing, warehouse, handling and actual gate delivery | required |  | Preserve stock burdens and deliver uniquely accepted net product | per 1 kg reference flow |

The cards below identify individual exchanges of the representative route. All amounts come from the actual enterprise, not assumed recipes or operating parameters. Extend the inventory with each actual conditional device input, reagent, consumable, emitted species and treatment; non-applicability requires evidence of absence. Complete raw physical and stock ledgers precede normalized reporting; eliminate every paired internal transfer.

### Process: Hide preparation, liming and acid washing (`hide_preparation`)

#### Inputs

##### Product flows

###### Untanned bovine feed (`bovine_hide_stock`)

Measure whole as-received wet hide stock; moisture, collagen/protein, fat and salt are constituent subledgers, not additional purchased inputs. Record supplier burden and provenance.

- Selected flow: Untanned bovine hide stock
- Flow property / unit: Mass / kg
- Amount rule: A_row / Q; one reporting operation after raw conversion and the stock-burden reconciliation in section 8.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_prepare`
- Sources: `seljel-technical-catalogue`; `epa-hide-glue-1977`; `epa-animal-glue-1975`

###### Purchased lime milk (`lime_slurry`)

Record the whole delivered slurry and measured Ca(OH)2 mass fraction; carrier water is already in this purchased mass. If actually prepared on site, replace this input with separately purchased lime and water and measured mixing burdens, never both descriptions.

- Selected flow: Calcium hydroxide aqueous slurry
- Flow property / unit: Mass / kg
- Amount rule: A_row / Q; one reporting operation after raw conversion and the stock-burden reconciliation in section 8.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_prepare`
- Sources: `seljel-technical-catalogue`; `epa-hide-glue-1977`; `epa-animal-glue-1975`

###### Acid wash supply (`sulfuric_acid_solution`)

Use actual whole purchased solution mass and assay; active acid and carrier water are constituents, not duplicate procurement. Dilution water added after receipt is separate. Reject a different acid route for this data package.

- Selected flow: Sulfuric acid aqueous solution
- Flow property / unit: Mass / kg
- Amount rule: A_row / Q; one reporting operation after raw conversion and the stock-burden reconciliation in section 8.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_prepare`
- Sources: `seljel-technical-catalogue`; `epa-hide-glue-1977`; `epa-animal-glue-1975`

###### Washing and make-up water (`preparation_water`)

Collect actual fresh water crossing this process boundary, including washing, dilution and cleaning. Keep internal recirculation separate; do not add slurry/acid carrier water again.

- Selected flow: Process water
- Flow property / unit: Mass / kg
- Amount rule: A_row / Q; one reporting operation after raw conversion and the stock-burden reconciliation in section 8.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_prepare`
- Sources: `seljel-technical-catalogue`; `epa-hide-glue-1977`; `epa-animal-glue-1975`

###### Preparation power (`preparation_electricity`)

Meter washing drums, mills, pumps and attributable cleaning and idle/failed-run loads; use actual submeter or supported site allocation.

- Selected flow: Electricity
- Flow property / unit: Energy / kWh
- Amount rule: A_row / Q; one reporting operation after raw conversion and the stock-burden reconciliation in section 8.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_prepare`
- Sources: `seljel-technical-catalogue`; `epa-hide-glue-1977`; `epa-animal-glue-1975`

###### Inbound carriage (`inbound_road_freight`)

Collect actual inbound commercial loads, distance, payload, return-leg convention and provider. Do not also count vehicle diesel inside this purchased service.

- Selected flow: Road freight transport service
- Flow property / unit: Transport performance / t*km
- Amount rule: A_row / Q; one reporting operation after raw conversion and the stock-burden reconciliation in section 8.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_prepare`
- Sources: `seljel-technical-catalogue`; `epa-hide-glue-1977`; `epa-animal-glue-1975`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Internal prepared stock transfer (`prepared_hide_out`)

Paired wet-mass internal transfer to hot_extraction; carry solids, water and accumulated burdens, and eliminate only this paired exchange on consolidation.

- Selected flow: Washed limed and acid-treated bovine hide stock
- Flow property / unit: Mass / kg
- Amount rule: A_row / Q; one reporting operation after raw conversion and the stock-burden reconciliation in section 8.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_prepare`
- Sources: `seljel-technical-catalogue`; `epa-hide-glue-1977`; `epa-animal-glue-1975`

##### Waste flows

###### Raw wash effluent (`preparation_wastewater`)

Measure actual discharged wet effluent, dissolved salts, suspended solids, C/N/Ca/S and destination; do not declare treated status or infer solids from COD.

- Selected flow: Raw lime and acid hide-washing wastewater
- Flow property / unit: Mass / kg
- Amount rule: A_row / Q; one reporting operation after raw conversion and the stock-burden reconciliation in section 8.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_water`
- Sources: `seljel-technical-catalogue`; `epa-hide-glue-1977`; `epa-animal-glue-1975`

###### Separated liming solids (`spent_lime_solids`)

Separate any physically removed solids from wastewater; record wet mass, solids, entrained water and actual disposal. Do not count the same suspended material twice.

- Selected flow: Wet spent liming solids
- Flow property / unit: Mass / kg
- Amount rule: A_row / Q; one reporting operation after raw conversion and the stock-burden reconciliation in section 8.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_water`
- Sources: `seljel-technical-catalogue`; `epa-hide-glue-1977`; `epa-animal-glue-1975`

##### Elementary flows

### Process: Hot-water extraction and liquor separation (`hot_extraction`)

#### Inputs

##### Product flows

###### Internal prepared stock receipt (`prepared_hide_in`)

Match prepared_hide_out by lot, wet mass, solids and burdens; internal recycled stock is not a second upstream purchase.

- Selected flow: Washed limed and acid-treated bovine hide stock
- Flow property / unit: Mass / kg
- Amount rule: A_row / Q; one reporting operation after raw conversion and the stock-burden reconciliation in section 8.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_extract`
- Sources: `seljel-technical-catalogue`; `epa-hide-glue-1977`; `epa-animal-glue-1975`

###### Extraction water (`extraction_water`)

Record fresh extraction and cleaning water; account for water already in wet stock and any actual injected steam separately.

- Selected flow: Process water
- Flow property / unit: Mass / kg
- Amount rule: A_row / Q; one reporting operation after raw conversion and the stock-burden reconciliation in section 8.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_extract`
- Sources: `seljel-technical-catalogue`; `epa-hide-glue-1977`; `epa-animal-glue-1975`

###### Purchased extraction steam (`extraction_steam`)

Use metered heat delivered and pressure/temperature/enthalpy evidence. Also record physical steam and condensate masses in the water ledger. Distinguish indirect heating from any measured direct injection without double counting heat.

- Selected flow: Steam
- Flow property / unit: Energy / MJ
- Amount rule: A_row / Q; one reporting operation after raw conversion and the stock-burden reconciliation in section 8.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_extract`
- Sources: `seljel-technical-catalogue`; `epa-hide-glue-1977`; `epa-animal-glue-1975`

###### Extraction power (`extraction_electricity`)

Meter extraction circulation, transfer pumps and attributable cleaning/idle loads for every grade and failed run.

- Selected flow: Electricity
- Flow property / unit: Energy / kWh
- Amount rule: A_row / Q; one reporting operation after raw conversion and the stock-burden reconciliation in section 8.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_extract`
- Sources: `seljel-technical-catalogue`; `epa-hide-glue-1977`; `epa-animal-glue-1975`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Internal liquor transfer (`glue_liquor_out`)

Record each actual extraction fraction as wet liquor with measured solids/protein, water and carried burdens; it is not the dry terminal product.

- Selected flow: Aqueous bovine hide-glue extract
- Flow property / unit: Mass / kg
- Amount rule: A_row / Q; one reporting operation after raw conversion and the stock-burden reconciliation in section 8.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_extract`
- Sources: `seljel-technical-catalogue`; `epa-hide-glue-1977`; `epa-animal-glue-1975`

##### Waste flows

###### Spent hide tankage (`extracted_hide_tankage`)

Measure wet residue and moisture separately from liquor and effluent. Waste is the default; a demonstrated co-product must be represented as a separate qualified Product output with its real sale gate and allocation, never renamed to hide grade or dry glue.

- Selected flow: Wet extracted bovine hide residue
- Flow property / unit: Mass / kg
- Amount rule: A_row / Q; one reporting operation after raw conversion and the stock-burden reconciliation in section 8.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_water`
- Sources: `seljel-technical-catalogue`; `epa-hide-glue-1977`; `epa-animal-glue-1975`

###### Separated grease (`recovered_grease`)

Include only when grease is physically recovered; retain water/impurity assays. Default waste management applies unless actual accepted sale evidence justifies a separate Product output and reviewed allocation.

- Selected flow: Recovered bovine hide grease
- Flow property / unit: Mass / kg
- Amount rule: A_row / Q; one reporting operation after raw conversion and the stock-burden reconciliation in section 8.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_water`
- Sources: `seljel-technical-catalogue`; `epa-hide-glue-1977`; `epa-animal-glue-1975`

###### Cook-house effluent (`extraction_wastewater`)

Record actual cooker drains, cleaning losses and separate condensate destinations; subtract no hypothetical saleable protein.

- Selected flow: Raw hide-extraction wastewater
- Flow property / unit: Mass / kg
- Amount rule: A_row / Q; one reporting operation after raw conversion and the stock-burden reconciliation in section 8.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_water`
- Sources: `seljel-technical-catalogue`; `epa-hide-glue-1977`; `epa-animal-glue-1975`

##### Elementary flows

### Process: Filtration, evaporation, drying and granulation (`drying_finishing`)

#### Inputs

##### Product flows

###### Internal liquor receipt (`glue_liquor_in`)

Match glue_liquor_out, including water and grade-specific carried burdens; record actual filtration and concentration losses.

- Selected flow: Aqueous bovine hide-glue extract
- Flow property / unit: Mass / kg
- Amount rule: A_row / Q; one reporting operation after raw conversion and the stock-burden reconciliation in section 8.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_dry`
- Sources: `seljel-technical-catalogue`; `epa-hide-glue-1977`; `epa-animal-glue-1975`

###### Purchased concentration and drying steam (`drying_steam`)

Meter supplied heat to evaporation and drying; retain steam/condensate mass and enthalpy bases, not a default energy per kg of removed water.

- Selected flow: Steam
- Flow property / unit: Energy / MJ
- Amount rule: A_row / Q; one reporting operation after raw conversion and the stock-burden reconciliation in section 8.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_dry`
- Sources: `seljel-technical-catalogue`; `epa-hide-glue-1977`; `epa-animal-glue-1975`

###### Filtration and finishing power (`finishing_electricity`)

Include pumps, filtration, vacuum, fans, chilling when used, granulation, recovery, cleaning and zero-output consumption. Identify any actual refrigerant leak separately.

- Selected flow: Electricity
- Flow property / unit: Energy / kWh
- Amount rule: A_row / Q; one reporting operation after raw conversion and the stock-burden reconciliation in section 8.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_dry`
- Sources: `seljel-technical-catalogue`; `epa-hide-glue-1977`; `epa-animal-glue-1975`

###### Cooling and cleaning water make-up (`drying_makeup_water`)

Meter actual external make-up only; distinguish recycled cooling water, cleaning water and process condensate.

- Selected flow: Process water
- Flow property / unit: Mass / kg
- Amount rule: A_row / Q; one reporting operation after raw conversion and the stock-burden reconciliation in section 8.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_dry`
- Sources: `seljel-technical-catalogue`; `epa-hide-glue-1977`; `epa-animal-glue-1975`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Internal dry granules transfer (`granules_internal_out`)

Use this verified broad identity for actual technical bovine granules. Its native comment says hides/skins, mostly horse hides; that is a general predominance claim, not a horse-only specification. No CAS or geography is declared, and no supplier equivalence is inferred. Transfer lot moisture, solids, quality and burdens to packing_delivery; new release is not delivery Q.

- Selected flow: Hide Glue `7b2fe9b1-13be-4c47-a6c9-21b899c724ad`
- Flow property / unit: Mass / kg
- Amount rule: A_row / Q; one reporting operation after raw conversion and the stock-burden reconciliation in section 8.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_dry`
- Sources: `seljel-technical-catalogue`; `epa-hide-glue-1977`; `epa-animal-glue-1975`

##### Waste flows

###### Filter residue (`filter_residue`)

Measure separately removed wet filter residue and composition; include actual filter-media consumption as an additional individually specified input if used.

- Selected flow: Wet bovine glue filtration residue
- Flow property / unit: Mass / kg
- Amount rule: A_row / Q; one reporting operation after raw conversion and the stock-burden reconciliation in section 8.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_water`
- Sources: `seljel-technical-catalogue`; `epa-hide-glue-1977`; `epa-animal-glue-1975`

###### Exported process condensate (`condensate_out`)

Measure liquid condensed from product water and its actual organic carryover and destination. Keep purchased-steam utility condensate separate in the water subledger and model its actual external return if present.

- Selected flow: Hide-glue evaporation condensate
- Flow property / unit: Mass / kg
- Amount rule: A_row / Q; one reporting operation after raw conversion and the stock-burden reconciliation in section 8.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_water`
- Sources: `seljel-technical-catalogue`; `epa-hide-glue-1977`; `epa-animal-glue-1975`

##### Elementary flows

###### Uncondensed product water (`water_vapour`)

Determine actual uncondensed water release from independently measured evaporation/condensation and air moisture balances; it excludes already counted condensate and is not an assumed reaction-water residual.

- Selected flow: Water vapour to air
- Flow property / unit: Mass / kg
- Amount rule: A_row / Q; one reporting operation after raw conversion and the stock-burden reconciliation in section 8.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_water`
- Sources: `seljel-technical-catalogue`; `epa-hide-glue-1977`; `epa-animal-glue-1975`

###### Unrecovered glue dust (`glue_dust`)

Include actual measured or supported exhaust release after control; captured reusable fines are internal paired recycle and captured discarded fines require a separate waste row. No default zero emission follows from installing a filter.

- Selected flow: Bovine hide-glue particulate to air
- Flow property / unit: Mass / kg
- Amount rule: A_row / Q; one reporting operation after raw conversion and the stock-burden reconciliation in section 8.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_water`
- Sources: `seljel-technical-catalogue`; `epa-hide-glue-1977`; `epa-animal-glue-1975`

### Process: Packing, warehouse, handling and actual gate delivery (`packing_delivery`)

#### Inputs

##### Product flows

###### Internal dry granules receipt (`granules_internal_in`)

Match granules_internal_out with carried burdens and actual moisture. Opening finished stock is separately retained with historical burdens, not treated as new production.

- Selected flow: Hide Glue `7b2fe9b1-13be-4c47-a6c9-21b899c724ad`
- Flow property / unit: Mass / kg
- Amount rule: A_row / Q; one reporting operation after raw conversion and the stock-burden reconciliation in section 8.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_gate`
- Sources: `seljel-technical-catalogue`; `epa-hide-glue-1977`; `epa-animal-glue-1975`

###### Outer paper sack (`kraft_bag`)

Weigh actual outer sacks with supplier composition and loss records; count the sack separately from a polymer liner.

- Selected flow: Kraft paper sack
- Flow property / unit: Mass / kg
- Amount rule: A_row / Q; one reporting operation after raw conversion and the stock-burden reconciliation in section 8.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_gate`
- Sources: `seljel-technical-catalogue`; `epa-hide-glue-1977`; `epa-animal-glue-1975`

###### Polyethylene inner liner (`pe_liner`)

Include only the actually supplied liner; verify polymer and supplied mass. An absent liner must be demonstrated, not silently assumed.

- Selected flow: Polyethylene bag liner
- Flow property / unit: Mass / kg
- Amount rule: A_row / Q; one reporting operation after raw conversion and the stock-burden reconciliation in section 8.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_gate`
- Sources: `seljel-technical-catalogue`; `epa-hide-glue-1977`; `epa-animal-glue-1975`

###### Packing and warehouse electricity (`packing_electricity`)

Include weighing, packing, lighting, warehouse handling, return inspection and loading electricity actually attributable to delivery cohorts, using storage duration and location records where relevant.

- Selected flow: Electricity
- Flow property / unit: Energy / kWh
- Amount rule: A_row / Q; one reporting operation after raw conversion and the stock-burden reconciliation in section 8.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_gate`
- Sources: `seljel-technical-catalogue`; `epa-hide-glue-1977`; `epa-animal-glue-1975`

###### On-site diesel handling (`handling_diesel`)

Include when an actual diesel handling vehicle is within the gate boundary; meter consumption, fuel assay and duty. Add each actual combustion species as a separate elementary row using site evidence. Electric-only sites retain proof of non-use rather than a fabricated diesel input.

- Selected flow: Diesel fuel
- Flow property / unit: Mass / kg
- Amount rule: A_row / Q; one reporting operation after raw conversion and the stock-burden reconciliation in section 8.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_gate`
- Sources: `seljel-technical-catalogue`; `epa-hide-glue-1977`; `epa-animal-glue-1975`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Net accepted gate delivery (`rf_delivered_glue`)

Only this row is the terminal reference. Q is unique actual net accepted handover of the scoped granules, excluding packaging and corrected for returns in the original cohort. Report measured residual moisture and protein separately; no purity, dry-solids or protein factor changes the supplied product mass.

- Selected flow: Hide Glue `7b2fe9b1-13be-4c47-a6c9-21b899c724ad`
- Flow property / unit: Mass / kg
- Amount rule: 1 kg
- Value mode: `fixed_value`
- Specificity: `product_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `method_formula`
- Collection protocol: `cp_gate`
- Sources: `seljel-technical-catalogue`; `epa-hide-glue-1977`; `epa-animal-glue-1975`

##### Waste flows

###### Irrecoverable rejected product (`discarded_glue`)

Measure actual destroyed rejected or returned granules with retained historic and rework burdens; goods retained for future rework remain stock, not waste and not Q.

- Selected flow: Rejected bovine hide-glue granules
- Flow property / unit: Mass / kg
- Amount rule: A_row / Q; one reporting operation after raw conversion and the stock-burden reconciliation in section 8.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_gate`
- Sources: `seljel-technical-catalogue`; `epa-hide-glue-1977`; `epa-animal-glue-1975`

###### Discarded paper sack (`paper_sack_waste`)

Record actual packing rejects and damaged sacks separately with disposal/recycling destination; sale packaging supplied with product is not foreground waste.

- Selected flow: Waste kraft paper sack
- Flow property / unit: Mass / kg
- Amount rule: A_row / Q; one reporting operation after raw conversion and the stock-burden reconciliation in section 8.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_gate`
- Sources: `seljel-technical-catalogue`; `epa-hide-glue-1977`; `epa-animal-glue-1975`

###### Discarded polyethylene liner (`pe_liner_waste`)

Measure actual discarded liners and destination, excluding liners leaving as product packaging.

- Selected flow: Waste polyethylene bag liner
- Flow property / unit: Mass / kg
- Amount rule: A_row / Q; one reporting operation after raw conversion and the stock-burden reconciliation in section 8.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_gate`
- Sources: `seljel-technical-catalogue`; `epa-hide-glue-1977`; `epa-animal-glue-1975`

##### Elementary flows

## 7. Allocation and Co-product Handling

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| `allocation_separation` | scoped foreground | Trace individual extraction runs and glue grades. Assign separable materials, energy, packaging, storage and treatment directly using actual meters and batch records before allocating shared operations. Do not assign all burdens to the first extraction or count later extracts as burden-free. | `seljel-technical-catalogue`; `epa-hide-glue-1977`; `epa-animal-glue-1975` |
| `allocation_sale_gate` | scoped foreground | Wet extracted hide tankage, grease and filter solids are physically distinct streams. Treat each as waste unless its actual sale specification, legal destination, accepted net quantity, transfer record and market evidence demonstrate a co-product at the stated gate. Historic recovery examples establish a possibility, not this site's sale. Never substitute dry residue mass for measured wet dispatch. | `seljel-technical-catalogue`; `epa-hide-glue-1977`; `epa-animal-glue-1975` |
| `allocation_shared` | scoped foreground | For remaining joint burdens, document the actual causal relationship and measured physical driver. If no defensible physical relationship exists, declare an explicitly reviewed site-specific allocation with contemporaneous quantities and prices at a common gate and sensitivity analysis; keep the unallocated ledger. No borrowed dairy/IDF, livestock or organisation economic coefficient, automatic avoided-product credit, or negative upstream-hide burden is allowed. | `seljel-technical-catalogue`; `epa-hide-glue-1977`; `epa-animal-glue-1975` |
| asset_manufacture_conservation | existing capital/reusable manufacture attribution | Within the applicable allocation decision context, original manufacture burden attributed across uses of actual capital equipment or reusable articles already included in foreground production, packaging or observed services uses one persistent same-asset ledger across all crops, products, cohorts, manufacturing/postrelease services, owners and observation periods. D is its supported whole installed service: all realized historical service plus supported remaining service in the same units as actual beneficiary use u; D must be finite and positive. Period capacity, remaining-only capacity, the physical asset/article mass alone, or current-period product Q alone is not D; supported whole-service throughput in mass units may be used when it demonstrates the causal service and matches u. This does not amortize the manufactured reference product over downstream life or change its declared reference gate/Q. The fractions u/D and all previously assigned manufacture shares together must never exceed 1. Changes of window, custody, provider or repair never restart the original manufacture balance. Replacements have distinct identities and only their real new manufacture vectors; actual repair and treatment increments remain separately accounted. Revised capacity evidence requires transparent reconciliation of prior shares and sensitivity, not a fresh ledger. Keep full physical mass and stock movements independent of burden shares. Unknown D, prior shares or beneficiary coverage requires review and no final manufacture-attributed amount; no assumed lifetime, utilization, zero or arbitrary division is permitted. For each existing collection protocol that attributes manufacture of included production, packaging or observed-service assets across uses in this route (excluding amortization of the manufactured reference product itself), additionally retain a durable asset identity, its measured full physical mass and acquisition/installation/retirement stock history, original manufacture burden vector, all historical and current beneficiaries, matched-unit service readings, the evidenced whole installed-service denominator D, supported remaining-service basis and uncertainty, prior assigned shares and remaining original manufacture balance. Carry the ledger across reporting windows and custody/provider changes. Collect actual repair, replacement, recovery and treatment separately; these records do not normalize physical movements or create an additional asset purchase. These are added fields and conservation obligations for the existing applicable protocols, not a new assumed capital inventory. |  |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

For each existing collection protocol that attributes manufacture of included production, packaging or observed-service assets across uses in this route (excluding amortization of the manufactured reference product itself), additionally retain a durable asset identity, its measured full physical mass and acquisition/installation/retirement stock history, original manufacture burden vector, all historical and current beneficiaries, matched-unit service readings, the evidenced whole installed-service denominator D, supported remaining-service basis and uncertainty, prior assigned shares and remaining original manufacture balance. Carry the ledger across reporting windows and custody/provider changes. Collect actual repair, replacement, recovery and treatment separately; these records do not normalize physical movements or create an additional asset purchase. These are added fields and conservation obligations for the existing applicable protocols, not a new assumed capital inventory.

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_prepare` | hide_preparation | Receipt, liming, acid washing and inbound supply | foreground_records | site; period; lot; owner; whole wet hide mass; provenance; moisture; protein; salt; supplier burden; whole slurry mass and assay; whole acid solution mass and assay; fresh water; meter readings; freight payload and km; failed runs; WIP opening/closing mass and carried burdens | Owner: production and procurement data steward. Collect unnormalized weigh tickets, assays, stock movements, meter differences and supplier records for the complete matched period. Do not divide by Q during collection; quantify dilution and internal preparation separately from procurement. | kg; kWh; t*km | each batch and event; period close | same complete actual reporting period including failures and zero-output | declared single site and matched route/product cohort | per 1 kg reference flow | calibration; signed batches; supplier CoA; route/provenance; freight records; stock burden reconciliation |
| `cp_extract` | hot_extraction | Extraction fractions and utilities | foreground_records | site; period; lot; owner; paired hide transfer; wet liquor per extraction; solids/protein assay; fresh water; integrated steam heat and mass; condensate; electricity; failed/zero-output runs; rework; opening/closing WIP and carried burdens | Owner: extraction supervisor and utility metering steward. Retain every extraction and actual raw utility numerator, including unsuccessful runs; link batch fractions and opening/closing WIP burdens without any A/Q operation. Measure steam state and determine direct-injection versus indirect heating. | kg; MJ; kWh | each batch and event; period close | same complete actual reporting period including failures and zero-output | declared single site and matched route/product cohort | per 1 kg reference flow | paired batch transfers; solids assays; steam/condensate and enthalpy records; calibrated meters; grade records |
| `cp_dry` | drying_finishing | Liquor finishing, water removal and granule release | foreground_records | site; period; lot; owner; liquor wet mass and dry matter; granule wet mass and moisture; protein basis; gel strength/viscosity and methods; electricity; heat; steam/condensate mass; cooling/cleaning make-up; recycle fines; failed runs; opening/closing WIP and carried burdens; new-release event id | Owner: finishing supervisor and quality laboratory. Record complete unnormalized batch and meter records including failed drying, captured fines and cleaning. Determine actual product quality and residual water; link every internal release to packing stock. A release is neither delivery Q nor an extra closing-stock output. | kg; MJ; kWh; declared assay units | each batch and event; period close | same complete actual reporting period including failures and zero-output | declared single site and matched route/product cohort | per 1 kg reference flow | calibration; laboratory methods; unique release ids; fraction balances; recycle and stock logs |
| `cp_gate` | packing_delivery | Actual net deliveries, stocks, returns and packing | foreground_records | site; period; delivery cohort; owner; unique handover id; accepted net product kg; packaging tare and composition; lot moisture; opening/closing FG mass and carried burdens; new releases; transfers; returns and original handover links; rework and failed runs; paper and liner inputs/losses; warehouse duration/location; electricity; diesel; loading records | Owner: warehouse and dispatch steward with quality acceptance owner. Collect raw event quantities, unnormalized burdens and complete WIP/FG carried burdens; derive positive unique net accepted delivery Q only from actual handovers corrected in the original return cohort. Retain undelivered stock and its burdens; production release is not assumed equal to Q. Reinspection/reacceptance cannot mint a second product. | kg; kWh; recorded storage hours | each batch and event; period close | same complete actual reporting period including failures and zero-output | declared single site and matched route/product cohort | per 1 kg reference flow | signed carrier/customer acceptance; calibrated net weights; lot tracking; packaging bills; stock and burden reconciliation; return links; meters |
| `cp_water` | drying_finishing | Physical water, species, effluent and residue records | foreground_records | site; period; lot; owner; fresh/carrier/feed water; steam and condensate; hydrolysis evidence; acid/base assays; actual neutralisation extent; dissolved ions and hydrate state; wet outlet masses; solids/moisture/protein; C/N/Ca/S; gas/air humidity; integrated volume; measured density/state; treatment destination; sale or disposal evidence; opening/closing water/species stock | Owner: environmental laboratory and process chemist, hosted by drying_finishing and covering hide_preparation, hot_extraction and drying_finishing. Retain unnormalized measured mass/volume, composition and actual reaction evidence independently. Obtain reaction extent from assayed reagents/species and validated chemistry, not a mass residual or COD. Separate liquid effluent, residue, condensate and vapour; prove any sale and actual treatment. Keep full stock water/species and carried burdens. | kg; m3; declared assay units | each batch and event; period close | same complete actual reporting period including failures and zero-output | declared single site and matched route/product cohort | per 1 kg reference flow | calibrated flow/weight records; independently supported density; laboratory speciation; validated mechanism/extent; outlet samples; manifests and actual sale proof |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_raw_units` | all inventory rows | Convert raw records before aggregation: rate times actual duration gives an integrated amount; an already integrated liquid/gas volume receives no further time multiplier. Convert volume to mass using independently supported density at the recorded temperature/composition; no native secondary property coefficient is assumed to be density. Preserve electricity kWh and steam MJ separately. | raw_measurement; duration_if_rate; density_if_volume; cp_prepare; cp_extract; cp_dry; cp_gate; cp_water | raw_period_exchange | `seljel-technical-catalogue`; `epa-hide-glue-1977`; `epa-animal-glue-1975` |
| `calc_delivery_cohort` | all inventory rows | For each raw exchange/burden component, reconcile opening WIP and finished-stock burdens plus complete actual period additions, less closing WIP and finished-stock burdens and burdens assigned with evidence to other product/cohorts. This yields A_row attributable to the declared delivered cohort, after documented joint-product allocation. Include its failed/zero-output, return, rework, warehouse, packing and loading loads; do not remove genuine incurred losses. Pair and eliminate internal transfers once without deleting their external burdens. Keep a separate raw physical ledger, stock ledger and burden bridge; do not subtract a stock mass from electricity. | raw_period_exchange; opening_WIP_burdens; closing_WIP_burdens; opening_FG_burdens; closing_FG_burdens; other_cohort_burdens; cp_prepare; cp_extract; cp_dry; cp_gate; cp_water | A_row | `seljel-technical-catalogue`; `epa-hide-glue-1977`; `epa-animal-glue-1975` |
| `calc_gate_once` | all inventory rows | Report each non-reference exchange as A_row / Q for per 1 kg reference flow; Q is the positive unique actual net accepted factory-gate delivery kg of this product/route/state/cohort excluding packaging and corrected for returns against original handovers. The reference output is 1 kg. Perform this division exactly once after raw conversions and stock/burden reconciliation; the card expression and protocol aggregation instruction describe this same reporting operation, not successive divisions. No per-kg result exists for Q=0; retain its burdens for explicit attribution or carryover. | A_row; Q; cp_gate | exchange_per_kg_delivered | `seljel-technical-catalogue`; `epa-hide-glue-1977`; `epa-animal-glue-1975` |
| `calc_water_species` | all inventory rows | For each stock/stream, distinguish whole wet mass, measured water, dry solids and measured protein; dry matter equals wet mass times one minus measured water fraction, not protein mass. Establish total mass and element conservation independently. In the actual lime/sulfuric-acid step, distinguish acid-base water formation from collagen-hydrolysis water consumption and physical evaporation. Quantify the former from independently verified actual neutralisation extent; determine hydrolysis contribution from independent validated reaction/analytical evidence, never a closure residual. Record dissolved calcium/sulfate and actual hydration state without assuming all sulfate precipitates as gypsum. Reconcile water entering with hide, solutions, fresh water and direct steam, reaction formation/consumption, water leaving in glue, effluent, residue, vapour, condensate and opening/closing stocks. Do not fit two unknowns with one balance. | raw_period_exchange; actual_reaction_extent; speciation_evidence; moisture_assays; opening_closing_stock; cp_water | independent_mass_element_water_ledgers | `seljel-technical-catalogue`; `epa-hide-glue-1977`; `epa-animal-glue-1975` |
| asset_manufacture_share | existing capital/reusable manufacture attribution | For each included original asset manufacture vector B, f_current = u_current / D only after the persistent ledger verifies the supported whole installed-service denominator, all beneficiaries and prior assigned shares. Attribute f_current * B once to the actual beneficiary before the existing single reference normalization. Check prior_shares + all current/new beneficiary shares <= 1; carry the remaining original balance. Capacity revisions reconcile the historical ledger. Full physical asset/packaging mass and actual gross stocks/returns never receive f_current. Unknown D or history leaves the final attributed result unavailable, without suppressing actual repair/replacement/service burdens. | asset_id; original_B; u_current; D; historical_beneficiaries; prior_shares; capacity_evidence | conserved attributed manufacture vector |  |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `quality_identity` | reference and feed identity | Use native broad Hide Glue only with the qualified bovine technical route and full limitations; native geography/CAS are unspecified, not inferred. Prove supplier route and grade independently. | actual supplier, production, laboratory, warehouse and delivery records; applicable primary sources |
| `quality_period` | every collection protocol | Use one complete actual reporting period and site per disclosed scope. Preserve normal operations, maintenance, cleaning, failures and zero-output work; reconcile any exclusions to their actual receiving cohort. | actual supplier, production, laboratory, warehouse and delivery records; applicable primary sources |
| `quality_representativeness` | external evidence and enterprise package | SelJel is a manufacturer-specific bovine technical example, not an industry yield or universal moisture factor; EPA reports describe historic US processes, with the 1975 report marked draft. No numerical yield, duration, dose, emission or allocation factor is transferred. Actual enterprise data, quality specifications, utility configuration, wastewater and supplier matching remain required. | actual supplier, production, laboratory, warehouse and delivery records; applicable primary sources |
| `quality_completeness` | inventory extensions | Identify each actual cleaning reagent, filter consumable, preservative, pallet, refrigerant, combustion species and treatment operation separately when present; document genuine absence. These site data requirements cannot be replaced by an omnibus flow or silent zero. | actual supplier, production, laboratory, warehouse and delivery records; applicable primary sources |

## 9. Validation Rules

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| `validate_scope` | scoped foreground | Verify bovine untanned hide provenance, actual lime/sulfuric-acid route and granulated technical product specification; reject true native grade, route, medium or material contradictions. | `seljel-technical-catalogue`; `epa-hide-glue-1977`; `epa-animal-glue-1975` |
| `validate_gate` | scoped foreground | Require positive Q from unique net accepted delivery events, linked to lots and gate records. Newly released production, internal granule transfers and finished-stock increases are not additional deliveries. Returns and repeat acceptance create no second output; correct the original delivery cohort and carry its burdens. | `seljel-technical-catalogue`; `epa-hide-glue-1977`; `epa-animal-glue-1975` |
| `validate_inventory` | scoped foreground | Retain all matched-period raw inputs and burdens, including failed and zero-output runs, rework, returns, opening/closing WIP and finished-stock carryover. Reconcile cohort attribution and stock transfers before one normalization. Q=0 does not permit discarding the numerator or publishing a finite per-kg inventory. | `seljel-technical-catalogue`; `epa-hide-glue-1977`; `epa-animal-glue-1975` |
| `validate_balance` | scoped foreground | Close total physical mass and C/N/Ca/S balances separately from the water/species ledger. Reconcile assayed commercial solutions, feed water, steam, evaporation, wastewater, wet residues and stocks. COD/BOD are analytical indicators, not a conversion to gelatin or an unknown balancing species. Do not fit reaction water and another unknown outlet from one residual. | `seljel-technical-catalogue`; `epa-hide-glue-1977`; `epa-animal-glue-1975` |
| `validate_evidence` | scoped foreground | Require actual supplier/background compatibility, native identity limitations, calibration, assay, source evidence and complete bilingual fields. Unsupported species, sale status or allocation is an explicit data-package gap rather than an inferred number. | `seljel-technical-catalogue`; `epa-hide-glue-1977`; `epa-animal-glue-1975` |
| validate_asset_manufacture_conservation | existing capital/reusable manufacture attribution | For every included capital/reusable manufacture attribution verify same-asset continuity, whole installed service in matched units, all historical/current beneficiaries, prior assigned manufacture shares and cumulative share <= 1. Reject a reset by period, cohort, provider, owner or repair. Check distinct real replacement and incremental repair/treatment vectors separately and preserve gross physical mass. A missing denominator, unexplained previous allocation or incomplete beneficiary ledger requires explicit review and an unavailable final attributed amount; structural inspection cannot claim empirical completeness. |  |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | secondary_dataset; background_dataset |
| downstream_use | Technical collagen-adhesive input to downstream manufacturing with compatible supplier, route, grade, state, geography and time |
| allowed_use | Qualified bovine dry-granule production and actual net factory-gate supply after evidence and scientific review |
| excluded_use | No automatic applicability to other animals, edible/pharma gelatin, protein hydrolysates, caseinates, compounded liquid glue or recycled pharmaceutical gelatin; no clinical or culture-use instruction |
| required_metadata | All required qualifiers, native identity limitations, source/protocol ids, raw-period and stock burden bridge, measured product quality and actual supplier/background datasets |
| required_quality_disclosure | Unmeasured site/provider fields, calibration/assay quality, mass/species balance uncertainty, residue classification and any reviewed allocation; identity compatibility is not scientific approval |
| update_trigger | Changes to feed species/treatment, acid, supplier, recipe, drying, utility boundary, reference gate, quality, waste treatment, sale status, allocation or evidence |

## 11. Data Sources

| source_id | type | reference | used_for |
| --- | --- | --- | --- |
| `seljel-technical-catalogue` | handbook | SelJel product catalogue, Technical Gelatine, PDF page 12, printed pp.22-23; https://seljel.com/katalog.pdf | Primary manufacturer support for bovine hide route, lime treatment, acid/water washing, extraction/evaporation/drying and granular technical form. Reported 10-12% moisture is that product example only, not a conversion factor or universal grade. Catalogue is undated (PDF metadata created2021); no site yield, utility, acid identity or allocation is established. |
| `epa-hide-glue-1977` | official_guidance | US EPA, Potential Environmental Impact of Compounding and Fabricating Industries: A Preliminary Assessment, EPA-600/2-77-160, August1977, pp.55-56 and Figure26; https://nepis.epa.gov/Exe/ZyPURL.cgi?Dockey=9100PHTX.TXT | Historic primary industrial report supporting hide-glue manufacture through cleaning, hot-water extraction, filtration, evaporation and drying with separate water and solids outlets. Official HTML/TXT rendering; not a current plant recipe, performance factor or acquired publisher PDF. Bone/casein/fish and other adhesive branches are excluded. |
| `epa-animal-glue-1975` | literature | US EPA, Development Document for Effluent Limitations Guidelines and Standards of Performance, Miscellaneous Chemicals Industry, prepared by Roy F. Weston under contract 68-01-2932, February1975 DRAFT, animal-glue sections IV-102 and IV-105 to IV-107; https://nepis.epa.gov/Exe/ZyPURL.cgi?Dockey=2000UTT8.TXT | Historic contractor draft (not Agency-reviewed and not an official EPA publication) primary industrial evidence for lime-conditioned hide, dilute sulfuric-acid removal of residual lime, hot-water extraction and effluent origins; tankage/grease recovery is a possible outlet requiring actual sale proof. Not legal advice, current regulatory limits or transferable dosage, yield, wastewater loading or allocation. Preserve separation from fleshings, chrome splits and bone routes. |
