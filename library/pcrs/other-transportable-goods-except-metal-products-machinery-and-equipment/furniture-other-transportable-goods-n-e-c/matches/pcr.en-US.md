---
pcr_id: pcr.other-transportable-goods-except-metal-products-machinery-and-equipment.furniture-other-transportable-goods-n-e-c.matches
language: en-US
status: candidate
content_maturity: authored_methodology
translation_status: canonical
sync_with: pcr.en-US.md
---

# Original closed household safety-match retail boxes: environmental accounting to manufacturer first release

## 1. Scope and Applicability

This method covers the environmental inventory of an ordinary household safety-match retail box, factory-filled, closed and unchanged, at the original manufacturer’s first finished-product release. Hushållsask is the representative product category, not an established current SKU or measured lot. The functional inner/outer retail box and all supplied contents are one indivisible declared product. Closed does not mean airtight, tamper-evident or individually sealed. Any individual seal requires original SKU/lot evidence; multipack wrapping cannot supply it. Inspect only external identification, intact-product weighing and environmental records. [smi-solstickan-family-2006; solstickan-household-receipts; smi-packaging-count-faq]

Internal product production and contracted manufacturing remain opaque provider processes. The study must obtain compatible, independently reviewable aggregate environmental coverage without reconstructing recipes, internal materials, ignition chemistry, operating parameters, manufacture or use. Missing provider coverage is a blocking data gap, never zero burden. A purchased already-released box, resale, stock transfer, new outer carton or second packing service does not create product production. Consumer use and end of life are outside the first-release dataset; on-site pre-release losses and actual separate post-release handling remain accounted for. [ilcd-allocation-2010]

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.other-transportable-goods-except-metal-products-machinery-and-equipment.furniture-other-transportable-goods-n-e-c.matches |
| classification_refs | CPC 3.0 38998 Matches, accepted narrower scope for the complete household retail box under docs/adr/2026-11-22-accept-cpc-38998-original-filled-household-safety-match-box.md. HS 2022 3605 supplies the classification context. |
| covered_products | Original closed household safety-match retail box, including its functional factory box, with documented original-manufacturer first release. |
| excluded_products | Loose or opened matches; pocket/long/candle/premium-cylinder or promotional variants; matchbooks; empty boxes; separately supplied contents; already-released purchased goods as new production; lighters and their parts (38994/38995), demonstration models (38996), jewellery (38997), candles and other ignition articles (38999), and waste (section 39). Neighbour titles do not make every listed exclusion a separately adjudicated mapping. |
| representative_product | Solstickan Hushållsask household box category; actual SKU, presentation, date, lot and first release must be collected. |
| production_route | Opaque original manufacture, including contracted supply where actually documented, to one manufacturer first-release event; closed-product environmental accounting only. |
| market_state | Factory-filled, complete, closed, original unchanged retail box; individual seal not assumed; outer logistics packaging separate. |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Declared manufacturing-stage supply of complete original household retail boxes, not an ignition-performance functional unit. |
| How much | 1 kg of complete closed retail boxes at first release, including contents and functional inner/outer retail box; excluding multipack film, shipping carton and pallet. |
| How well | Documented unchanged SKU/lot and manufacturer release acceptance; no performance equivalence, test procedure or new certification inferred. |
| How long or cycle | One original first-release event per physical box; no service lifetime or reuse of the retail product is assumed. |
| reference_flow_link | reference_product_closed_box |

| Field | Value |
| --- | --- |
| Reference amount | 1 |
| Reference product flow | Factory-filled closed household safety-match retail box |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | manufacturer and physical site perimeter; SKU and Hushållsask presentation; date/lot; original closed condition; individual-seal evidence or unverified status; complete-retail mass method; Q first-release count and W mass; separate multipack/carton/pallet BOM; original/contracted production provider coverage; prior-release and transfer genealogy; cohort attribution and reporting period. |

Declare all required qualifiers in dataset metadata or equivalent package fields. Product flow UUID is not supplied by the property/unit support chain.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| complete_retail_mass | reference product | Mass | kg | Use cp_release_mass to measure W, the complete intact retail-product mass of Q uniquely first-released boxes from the same declared lot scope. Never open a box to establish its contents. Separate transport-packaging tare using independently traceable packaging records; unresolved tare prevents conversion. |
| count_bridge | box-count observations | Mass | kg | Box count Q is a companion observation, not the denominator. W is the sum of actual eligible cohort masses; W/Q is descriptive only for that scope. Never replace actual contents tally by marked count or derive W from a catalogue box count. No default per-box mass or count is supplied. |
| energy_meter | electricity | Energy `f6811440-ee37-11de-8a39-0800200c9a66` | MJ | Keep meter kWh separate from the selected supplier flow’s native property. The verified Energy property points to Units of energy `93a60a57-a3c8-11da-a746-0800200c9a66`; 1 kWh = 3.6 MJ. This is a unit conversion only, not evidence that the unresolved supplier flow uses net calorific value. |
| no_default_amount | all inventory rows | Row-specific measured property | as declared | Use the cohort-attributed amount per 1 kg reference flow. Keep gross physical ledgers, residual embodied environmental burden and new purchases/services as separate linked quantities; unknown is not zero and a physical return is not a new purchase. |
| later_service_basis | released_custody and actual post-release packaging services | Mass | kg | Current W may be zero. Preserve all period raw service, utility and packaging quantities by original release cohort. Normalize a separately declared later-stage intensity only using independently verified positive W_original, the complete-retail mass first released for that original cohort, not current W or a fabricated replacement. Unknown original mass leaves intensity unresolved. |
| transport_units | road_freight_pre; road_freight_post | Goods transport (mass*distance) `838aaa20-0117-11db-92e3-0800200c9a66` | t*km | The verified property points to Units of mass*length `838aaa21-0117-11db-92e3-0800200c9a66`, with t*km as reference; 1 kg*km = 0.001 t*km. This supports dimensional conversion only. Actual carrier flow, vehicle/load, route boundary, allocation and empty-running convention remain independently unresolved until documented. |

## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Original manufacturing cohort with no previous finished-product release, or a documented contracted original-provider transfer still before that release; internal production remains opaque. |
| starting_condition_role | First-release environmental accounting gate; upstream burden retained through compatible opaque provider inventory, not shifted to downstream repacking. |
| product_classification_scope | CPC 3.0 38998, narrower household-box state and gate; official leaf and HS correspondence are not manufacturing evidence. |
| recursive_input_rule | A same-category external input keeps its actual origin, release status and included environmental coverage. Already-released purchases/returns enter the post-release ledger with inherited burden; they never create Q. Opaque original manufacturing supply before release includes completed upstream coverage once. |
| upstream_dataset_requirement | Identify and pin the actual provider dataset, reference quantity, date, geography, site, technology and covered stages; reconcile original production, functional retail box, rejects, transport, utilities and provider exclusions without disclosing internal manufacture. An undifferentiated corporate footprint is insufficient. |
| disclosure | Disclose physical perimeter, original and contracted manufacturer responsibilities, title/custody, transfer and first-release evidence, reporting period, both stock ledgers, provider coverage, ordinary packaging pools and all unresolved quantities/identities. Off-site ownership is not on-site stock. |

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| b_original_gate | factory_release | Q counts only the first eligible finished-release event of this original manufacturer’s cohort. Verify actual original manufacture and contracted-provider handover. Already-released purchased goods plus secondary boxing, relabelling or resale are outside production qualification. | smi-environment-2021 |
| b_opaque_coverage | factory_release | Keep provider production and internal product inputs opaque. Obtain verified aggregate LCI coverage and reconcile overlaps/exclusions; do not substitute an unsupported product factor or environmental zero. Check physical ordinary-packaging movements and actual metered utility use regardless of provider coverage. Add separate environmental burdens only for the attributable shares outside the verified provider boundary. | ilcd-allocation-2010 |
| b_two_ledgers | factory_release; released_custody | Keep adjacent pre-release and released-product physical ledgers in the same count/mass perimeter. The identical Q/W transfer leaves the first and enters the second and cancels in consolidation. Opening released stock, external already-released receipts, genuine returns and later dispatches do not create Q. Retained samples still on site and registration changes are not fictitious movements. | ilcd-allocation-2010 |
| b_pack_pool | carton; film; pallet | For each actually present packaging article keep opening/closing stock, purchases, first non-purchase external receipts (with goods, borrowed or freely transferred, whether supplier coverage is known or not), and genuine returns traced to the same article previously dispatched from this site. These receipt classes are mutually exclusive. Outward transfers, dispatch and waste are gross; internal reuse cancels. An off-site owned article is an outward movement, not simultaneous in-perimeter stock. | ilcd-allocation-2010 |
| b_embodied_burden | all cohorts and article pools | For each original article, cohort and exchange close: opening carried burden + remaining previously incurred burden brought in externally + genuinely new burden = current attribution + closing carried burden + mutually exclusive external/other attribution. Retain inherited finished-product and packaging burden on true returns and first external receipts; never recharge the same manufacture, purchase, freight or service. Unknown supplier coverage remains a gap. | ilcd-allocation-2010 |
| b_nonoperational | all processes | The gate is documentary and environmental. Do not open products or supply recipes, internal constituents, ignition materials, parameters, manufacture, testing or use steps. External reject/disposal cards represent only intact identified articles with documented authorised receiver; other actual damage/loss follows b_actual_anomalies. No disposal method is prescribed. | smi-solstickan-family-2006 |
| b_zero_release_period | released_custody; all article pools | A period with current W = 0 may still have real service electricity, freight, storage or added exterior packaging for previously released boxes. Preserve raw amounts by period, article and original release cohort, including physical stocks/movements and remaining/new burdens. Do not divide by current zero W, discard them, create Q or roll them into new manufacture. A later-stage cohort service intensity is available only when a positive measured W_original for that original release cohort is independently verified; otherwise keep raw records and an unresolved intensity. | ilcd-allocation-2010 |
| b_return_once | all original articles and cohorts | Match each re-entry to its prior outward burden entry. Restore the verified remaining share exactly once: either reverse the matching outward attribution or record its return carry-in, never both. If a transferred share has already been netted/reversed, do not add it again. Previously fully attributed shares are not new procurement or manufacture. | ilcd-allocation-2010 |
| b_actual_anomalies | pre-release, released and packaging ledgers | Documented breakage or loss that does not satisfy intact-article external handover is not D and is not an inferred emission. Keep its evidence in a separate anomaly/reclassification account, with original article, quantity/unit, location, status and burden responsibility; an on-site reclassification is paired within the perimeter. Report an unresolved residual when quantity, destination or remaining burden is not established. Never silently erase stock, force a balance, invent a waste identity or prescribe handling steps. | ilcd-allocation-2010 |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| factory_release | Opaque original manufacture and first-release environmental accounting | required | Original manufacturer cohort; environmental provider coverage and documentary gate only | One original product output; conditional external packaging/utility increments | 1 kg complete retail product first released |
| released_custody | Released-stock reconciliation | conditional | Actual released stock, external receipt, genuine return, later dispatch or disposal exists | Supplementary physical/history ledger; no new production reference | same 1 kg reference flow; old cohorts separate |

Conditional cards below are an evidence checklist, not a declaration that those exchanges occur. Sources support the accounting rule, never the occurrence or amount. Only independently evidenced uncovered increments enter additive environmental inventory. Gross product/packaging stock movements are supplementary non-additive physical entries; do not feed them into a solver as duplicate production, purchase or co-product credits. Opaque provider inventory remains a linked aggregate process, not a fabricated service/product exchange. All packaging and burden records carry a pre/post-release stage tag. The factory_release packaging cards reconcile physical pools, but any actual post-release packaging, freight, storage or service increment belongs to a separate later-stage inventory and cannot be added to the first-release manufacturing result. Other actual utility/material services require separately specified atomic cards before adoption. [ilcd-allocation-2010]

### Process: Original first-release accounting (`factory_release`)

#### Inputs

##### Product flows

###### Unreleased original closed household safety-match retail box (`pre_external_box_in`)

Only a real external contracted original-manufacturer delivery before the first finished release, or a traced return of the same previously transferred unreleased article. Record these mutually exclusive subtypes, custody, full mass and provider coverage; no already-released purchased product enters this row. Internal manufacturing is not a fictitious purchase.

- Selected flow: Unreleased original closed household safety-match retail box
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Preserve raw amounts from cp_pre_ledger. First-release cohort intensity uses the once-attributed amount divided by verified positive W only; if W is zero or unavailable keep raw records and no manufactured intensity. Gross physical movement and embodied/new environmental shares stay separate.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_pre_ledger`
- Sources: `ilcd-allocation-2010`

###### Purchased electricity (`electricity`)

Only separately metered production-environment electricity attributable to the cohort and outside the opaque provider coverage. Record voltage, geography, time and supplier native property independently; no assumed grid, fuel, boiler or process is introduced.

- Selected flow: Purchased electricity
- Flow property / unit: Energy `f6811440-ee37-11de-8a39-0800200c9a66` / MJ
- Amount rule: Preserve raw amounts from cp_electricity. First-release cohort intensity uses the once-attributed amount divided by verified positive W only; if W is zero or unavailable keep raw records and no manufactured intensity. Gross physical movement and embodied/new environmental shares stay separate.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_electricity`
- Sources: `ilcd-allocation-2010`

###### Corrugated shipping carton (`carton_in`)

Conditional on the actual article and verified material/form. Gross receipt partitions are purchase, first non-purchase external receipt and genuine same-article return; all are recorded regardless of supplier coverage. Environmental procurement/service burden is a separately linked nonduplicated quantity; a return does not reset history.

- Selected flow: Corrugated shipping carton
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Preserve raw amounts from cp_pack_pool. First-release cohort intensity uses the once-attributed amount divided by verified positive W only; if W is zero or unavailable keep raw records and no manufactured intensity. Gross physical movement and embodied/new environmental shares stay separate. Actual post-release packaging uses only verified positive W_original for separate later-stage intensity; otherwise that intensity is unresolved.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_pack_pool`
- Sources: `ilcd-allocation-2010`

###### Polyethylene multipack wrapping film (`film_in`)

Conditional on the actual article and verified material/form. Gross receipt partitions are purchase, first non-purchase external receipt and genuine same-article return; all are recorded regardless of supplier coverage. Environmental procurement/service burden is a separately linked nonduplicated quantity; a return does not reset history.

- Selected flow: Polyethylene multipack wrapping film
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Preserve raw amounts from cp_pack_pool. First-release cohort intensity uses the once-attributed amount divided by verified positive W only; if W is zero or unavailable keep raw records and no manufactured intensity. Gross physical movement and embodied/new environmental shares stay separate. Actual post-release packaging uses only verified positive W_original for separate later-stage intensity; otherwise that intensity is unresolved.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_pack_pool`
- Sources: `ilcd-allocation-2010`

###### Reusable solid-wood pallet (`pallet_in`)

Conditional on the actual article and verified material/form. Gross receipt partitions are purchase, first non-purchase external receipt and genuine same-article return; all are recorded regardless of supplier coverage. Environmental procurement/service burden is a separately linked nonduplicated quantity; a return does not reset history.

- Selected flow: Reusable solid-wood pallet
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Preserve raw amounts from cp_pack_pool. First-release cohort intensity uses the once-attributed amount divided by verified positive W only; if W is zero or unavailable keep raw records and no manufactured intensity. Gross physical movement and embodied/new environmental shares stay separate. Actual post-release packaging uses only verified positive W_original for separate later-stage intensity; otherwise that intensity is unresolved.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_pack_pool`
- Sources: `ilcd-allocation-2010`

###### Road freight transport service (`road_freight_pre`)

Only actual documented road freight before original first release for intact product or ordinary exterior packaging, with actual supplier, vehicle/load specification and independently evidenced transport activity. Exclude already included supplier legs. Other modes require their own atomic cards, not an assumed road proxy. Post-release service belongs only to the separate later-stage inventory.

Reference unit group: Units of mass*length `838aaa21-0117-11db-92e3-0800200c9a66`; reference t*km, with 1 kg*km = 0.001 t*km. This verified support does not select an actual transport-service flow.

- Selected flow: Road freight transport service
- Flow property / unit: Goods transport (mass*distance) `838aaa20-0117-11db-92e3-0800200c9a66` / t*km
- Amount rule: Preserve raw amounts from cp_transport. First-release cohort intensity uses the once-attributed amount divided by verified positive W only; if W is zero or unavailable keep raw records and no manufactured intensity. Gross physical movement and embodied/new environmental shares stay separate.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_transport`
- Sources: `ilcd-allocation-2010`

#### Outputs

##### Product flows

###### Factory-filled closed household safety-match retail box (`reference_product_closed_box`)

The sole reference product; measured complete factory retail article at its unique first release. The first-release movement enters released stock unchanged; it is not an additional sale or a second product credit.

- Selected flow: Factory-filled closed household safety-match retail box
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: 1 kg
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_release_mass`
- Sources: `smi-environment-2021`

###### Unreleased original closed household safety-match retail box (`pre_external_box_out`)

Only an actual documented pre-release return to the original provider or external transfer; classify subtype exclusively. Remove the article and its remaining burden from this perimeter; later genuine return is traced, not a new manufacture.

- Selected flow: Unreleased original closed household safety-match retail box
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Preserve raw amounts from cp_pre_ledger. First-release cohort intensity uses the once-attributed amount divided by verified positive W only; if W is zero or unavailable keep raw records and no manufactured intensity. Gross physical movement and embodied/new environmental shares stay separate.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_pre_ledger`
- Sources: `ilcd-allocation-2010`

###### Corrugated shipping carton (`carton_out`)

Only actual gross outward dispatch/return/transfer, with mutually exclusive movement type and article genealogy. Supplemental physical accounting, not co-product revenue or a second upstream charge. Reuse remaining inside this perimeter is not an external flow.

- Selected flow: Corrugated shipping carton
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Preserve raw amounts from cp_pack_pool. First-release cohort intensity uses the once-attributed amount divided by verified positive W only; if W is zero or unavailable keep raw records and no manufactured intensity. Gross physical movement and embodied/new environmental shares stay separate. Actual post-release packaging uses only verified positive W_original for separate later-stage intensity; otherwise that intensity is unresolved.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_pack_pool`
- Sources: `ilcd-allocation-2010`

###### Polyethylene multipack wrapping film (`film_out`)

Only actual gross outward dispatch/return/transfer, with mutually exclusive movement type and article genealogy. Supplemental physical accounting, not co-product revenue or a second upstream charge. Reuse remaining inside this perimeter is not an external flow.

- Selected flow: Polyethylene multipack wrapping film
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Preserve raw amounts from cp_pack_pool. First-release cohort intensity uses the once-attributed amount divided by verified positive W only; if W is zero or unavailable keep raw records and no manufactured intensity. Gross physical movement and embodied/new environmental shares stay separate. Actual post-release packaging uses only verified positive W_original for separate later-stage intensity; otherwise that intensity is unresolved.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_pack_pool`
- Sources: `ilcd-allocation-2010`

###### Reusable solid-wood pallet (`pallet_out`)

Only actual gross outward dispatch/return/transfer, with mutually exclusive movement type and article genealogy. Supplemental physical accounting, not co-product revenue or a second upstream charge. Reuse remaining inside this perimeter is not an external flow.

- Selected flow: Reusable solid-wood pallet
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Preserve raw amounts from cp_pack_pool. First-release cohort intensity uses the once-attributed amount divided by verified positive W only; if W is zero or unavailable keep raw records and no manufactured intensity. Gross physical movement and embodied/new environmental shares stay separate. Actual post-release packaging uses only verified positive W_original for separate later-stage intensity; otherwise that intensity is unresolved.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_pack_pool`
- Sources: `ilcd-allocation-2010`

##### Waste flows

###### Rejected intact household safety-match retail box (`pre_box_reject`)

Only intact articles actually removed for documented authorised waste handover before first release. Never create Q; record whole-article mass and actual receiver without opening it or multiplying constituent wastes. A held sample or merely blocked stock is not this outlet.

- Selected flow: Rejected intact household safety-match retail box
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Preserve raw amounts from cp_pre_ledger. First-release cohort intensity uses the once-attributed amount divided by verified positive W only; if W is zero or unavailable keep raw records and no manufactured intensity. Gross physical movement and embodied/new environmental shares stay separate.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_pre_ledger`
- Sources: `ilcd-allocation-2010`

###### Discarded corrugated shipping carton (`carton_waste`)

Only actual external waste handover of this article, preserving mass/condition and receiver. Do not infer a recycling route, avoided production credit, reuse lifetime or discard percentage. Physical retirement and environmental burden retirement are linked once.

- Selected flow: Discarded corrugated shipping carton
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Preserve raw amounts from cp_pack_pool. First-release cohort intensity uses the once-attributed amount divided by verified positive W only; if W is zero or unavailable keep raw records and no manufactured intensity. Gross physical movement and embodied/new environmental shares stay separate. Actual post-release packaging uses only verified positive W_original for separate later-stage intensity; otherwise that intensity is unresolved.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_pack_pool`
- Sources: `ilcd-allocation-2010`

###### Discarded polyethylene multipack wrapping film (`film_waste`)

Only actual external waste handover of this article, preserving mass/condition and receiver. Do not infer a recycling route, avoided production credit, reuse lifetime or discard percentage. Physical retirement and environmental burden retirement are linked once.

- Selected flow: Discarded polyethylene multipack wrapping film
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Preserve raw amounts from cp_pack_pool. First-release cohort intensity uses the once-attributed amount divided by verified positive W only; if W is zero or unavailable keep raw records and no manufactured intensity. Gross physical movement and embodied/new environmental shares stay separate. Actual post-release packaging uses only verified positive W_original for separate later-stage intensity; otherwise that intensity is unresolved.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_pack_pool`
- Sources: `ilcd-allocation-2010`

###### Discarded reusable solid-wood pallet (`pallet_waste`)

Only actual external waste handover of this article, preserving mass/condition and receiver. Do not infer a recycling route, avoided production credit, reuse lifetime or discard percentage. Physical retirement and environmental burden retirement are linked once.

- Selected flow: Discarded reusable solid-wood pallet
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Preserve raw amounts from cp_pack_pool. First-release cohort intensity uses the once-attributed amount divided by verified positive W only; if W is zero or unavailable keep raw records and no manufactured intensity. Gross physical movement and embodied/new environmental shares stay separate. Actual post-release packaging uses only verified positive W_original for separate later-stage intensity; otherwise that intensity is unresolved.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_pack_pool`
- Sources: `ilcd-allocation-2010`

### Process: Released-stock reconciliation (`released_custody`)

#### Inputs

##### Product flows

###### Purchased electricity (`post_release_electricity`)

Only actually metered or otherwise defensibly measured electricity for the separately declared post-release inventory service, including a period with no new first release. Keep the raw kWh/MJ by period and original cohort, separate from original production and from supplier-included electricity. Verify allocation, actual supplier and native property; normalize a separate service inventory only with that cohort’s verified positive W_original, otherwise retain raw amount and unresolved intensity.

- Selected flow: Purchased electricity
- Flow property / unit: Energy `f6811440-ee37-11de-8a39-0800200c9a66` / MJ
- Amount rule: Preserve period raw amount from cp_post_electricity; separate later-stage amount / verified positive W_original only; if unavailable, intensity remains unresolved without dividing by current W.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_post_electricity`
- Sources: `ilcd-allocation-2010`

###### Factory-filled closed household safety-match retail box (`released_external_first_in`)

First external receipt of an article already released elsewhere: purchase, loan or free transfer are exclusive subtypes. It is not a return from this site or new Q; bring in its remaining historical burden and actual new transport/service once.

- Selected flow: Factory-filled closed household safety-match retail box
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Preserve period raw amount from cp_post_ledger; separate later-stage amount / verified positive W_original only; if unavailable, intensity remains unresolved without dividing by current W.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_post_ledger`
- Sources: `ilcd-allocation-2010`

###### Factory-filled closed household safety-match retail box (`released_true_return`)

Only the same identifiable article traced to a prior outward dispatch from this perimeter. Carry its remaining original burden; it remains released and cannot create Q again. Untraceable origin is unresolved, not automatically a true return.

- Selected flow: Factory-filled closed household safety-match retail box
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Preserve period raw amount from cp_post_ledger; separate later-stage amount / verified positive W_original only; if unavailable, intensity remains unresolved without dividing by current W.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_post_ledger`
- Sources: `ilcd-allocation-2010`

###### Road freight transport service (`road_freight_post`)

Only actual documented road freight after original first release, including a period with current W = 0 for intact product or ordinary exterior packaging, with actual supplier, vehicle/load specification and independently evidenced transport activity. Exclude already included supplier legs. Other modes require their own atomic cards, not an assumed road proxy. Post-release service belongs only to the separate later-stage inventory.

Reference unit group: Units of mass*length `838aaa21-0117-11db-92e3-0800200c9a66`; reference t*km, with 1 kg*km = 0.001 t*km. This verified support does not select an actual transport-service flow.

- Selected flow: Road freight transport service
- Flow property / unit: Goods transport (mass*distance) `838aaa20-0117-11db-92e3-0800200c9a66` / t*km
- Amount rule: Preserve period raw amount from cp_transport; separate later-stage amount / verified positive W_original only; if unavailable, intensity remains unresolved without dividing by current W.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_transport`
- Sources: `ilcd-allocation-2010`

#### Outputs

##### Product flows

###### Factory-filled closed household safety-match retail box (`released_dispatch`)

Actual later shipment, supplier return or external transfer, with mutually exclusive subtype and original release genealogy. Record gross complete product mass and inherited/new burdens separately. No second production output credit.

- Selected flow: Factory-filled closed household safety-match retail box
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Preserve period raw amount from cp_post_ledger; separate later-stage amount / verified positive W_original only; if unavailable, intensity remains unresolved without dividing by current W.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_post_ledger`
- Sources: `ilcd-allocation-2010`

##### Waste flows

###### Discarded intact household safety-match retail box (`released_box_disposal`)

Only an actual authorised external waste handover of an already-released intact box. Preserve inherited production burden and separately evidenced incremental handling once. Do not open it or prescribe treatment; retained damaged stock is not yet an outward waste flow.

- Selected flow: Discarded intact household safety-match retail box
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Preserve period raw amount from cp_post_ledger; separate later-stage amount / verified positive W_original only; if unavailable, intensity remains unresolved without dividing by current W.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_post_ledger`
- Sources: `ilcd-allocation-2010`

## 7. Allocation and Co-product Handling

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| a_direct | all processes | Use direct cohort measurement and provider subdivision first. Distinguish original manufacturing from post-release storage/handling. Attribute dedicated inputs/losses to their actual cohort; do not shift unrelated products or old stock into W. | ilcd-allocation-2010 |
| a_residual | shared environmental burdens | For genuinely inseparable residuals use documented determining physical causality; justify meter/time/mass drivers with actual records. Where no such relationship is established, require independent review of same-gate, same-condition economic values and sensitivity before adoption. No universal mass split, donation-receipt driver, blanket proxy or unreviewed factor. | ilcd-allocation-2010 |
| a_article_history | product and packaging cohorts | Use the burden carry-forward identity b_embodied_burden independently for each article/cohort/exchange. Returnable articles retain remaining documented shares; newly borne freight/service is charged once even if the article was borrowed or received free. Obtain supplier coverage or retain the gap. Physical inward mass is not automatically new procurement burden. | ilcd-allocation-2010 |
| a_no_credit | all outputs | The functional retail box is part of the reference product, not a co-product. Supplemental first-release transfers and outward packaging/product ledger movements have no second product credit. Waste treatment remains with its actual provider; no avoided virgin production or recycling credit is assumed. | ilcd-allocation-2010 |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cp_release_mass | factory_release | reference_product_closed_box | release register and intact weighing | SKU; form; lot; site; period; unique first-release event; Q; individual intact-box mass or direct whole-cohort mass; external transport tare; W; scale calibration; original-condition evidence; individual-seal evidence/status; sample stock status | Reconcile external SKU/lot labels and original manufacturer release records; weigh closed unchanged retail articles on a calibrated scale or use traceable intact-product mass records. No opening or operational testing. If outside packaging cannot be separated by verified records, leave W unresolved. | kg; box | each actual first-release lot | same period and original-manufacturer cohort | declared original manufacturing/first-release perimeter | per 1 kg reference flow | Original release register; scale certificate; intact-product mass records; packaging tare evidence; no duplicated event |
| cp_provider | factory_release | opaque original manufacture | provider environmental coverage | provider ID/version/hash; SKU/lot/site/date; reference basis; first-release responsibility; original/contracted handover; included stages/exchanges; excluded burdens; transport and packaging coverage; review identity | Read only the provider environmental inventory and external handover/release evidence; reconcile total coverage and overlaps without internal manufacture disclosure. Corporate averages or a closed-box purchase invoice alone cannot establish original production coverage. | provider reference basis | each provider version and cohort | matched environmental period | actual original/contracted manufacturer | per 1 kg reference flow | Fixed provider evidence; independent methodological review; coverage matrix |
| cp_pre_ledger | factory_release | pre_external_box_in; pre_external_box_out; pre_box_reject | pre-release physical ledger | opening/closing unreleased intact stock; internal original complete cohort additions F; first contracted external delivery I; genuine unreleased return R; mutually exclusive provider-return/external-transfer T; authorised intact reject D; Q/W; custody; event ID; sample location; cohort/remaining burden | Reconcile actual documentary movements, closed-article mass and counts. Match a return to the same previous external transfer; keep subcontractor release responsibility explicit. No hypothetical onsite manufacturing steps are collected. | kg; box | every actual movement and period close | common start/end cut-off | same pre-release physical perimeter | per 1 kg reference flow | Movement documents; pre-release status; same-article genealogy; intact authorised handover |
| cp_post_ledger | released_custody | released_external_first_in; released_true_return; released_dispatch; released_box_disposal | released-product physical ledger | opening/closing released stock; Q/W transferred from pre-ledger; first outside released receipt J and purchase/loan/free subtype; same-article true return R; actual outward dispatch/return/transfer S subtype; authorised disposal D; prior release event; old/current cohort; remaining/new burden | Reconcile closed-product count/mass and actual external handovers; disjoint receipt and exit classes. Preserve original first release on returns. Changes in registry state and still-on-site samples are not physical inward/outward flows. | kg; box | every actual movement and period close | same period as pre-release ledger | same released-stock perimeter with adjacent Q/W gate | per 1 kg reference flow | Original release and dispatch/return records; cohort burden carry-forward |
| cp_pack_pool | factory_release | carton_in; carton_out; carton_waste; film_in; film_out; film_waste; pallet_in; pallet_out; pallet_waste | one ledger per physical article type | pre/post-release stage; material/form; article/cohort ID; opening/closing count and mass; purchase P; first non-purchase N with inbound/loan/free subtype even when supplier coverage unknown; genuine same-article return R; outward S; waste D; actual freight/service; owner/custody/location; provider coverage; remaining burden and prior allocations | Use actual packaging BOM, incoming/outgoing documents, calibrated mass records and pool genealogy. Verify PE for the film card; do not assume film from a photograph or treat it as a single-box seal. Register each additional actual material as a separate atomic row before adoption. No default turns or service life. | kg; article | each receipt/issue and stock close | common site period | declared physical pool, not global ownership | per 1 kg reference flow | BOM; purchase and non-purchase receipts; same-article return link; provider/freight coverage; stock and burden reconciliation |
| cp_electricity | factory_release | electricity | meter and supplier environmental record | meter ID; start/end kWh; period; voltage; grid/geography; supplier identity and native property; provider inclusion/exclusion; measured attribution driver; uncertainty | Read environmental meter records, not operating settings. Reconcile billed and metered supply and allocate only the separately attributable uncovered increment. Retain kWh observation and MJ conversion separately; verify native supplier property before binding a flow UUID. | kWh; MJ | each meter interval and reporting period | matched production-environment interval | actual meter and original manufacturing perimeter | per 1 kg reference flow | Meter calibration; bills; provider overlap matrix; attribution review |
| cp_transport | factory_release; released_custody | road_freight_pre; road_freight_post | actual road freight activity | shipment/leg ID; pre/post-release stage; actual carrier and vehicle/load specification; original product or packaging article/cohort; measured transported tonnes; actual loaded distance; documented empty return if borne; supplier coverage; freight invoice/service responsibility; native transport property/unit | Use actual shipment mass and leg distance with carrier evidence; calculate tonne-kilometres only for that convention. Reconcile included supplier transport and actual separately borne services once; cost alone is not transport activity. Do not assume a vehicle, load factor, distance or empty return. | t*km | each actual shipment leg | same declared stage/period/cohort | actual supplier and physical handover | per 1 kg reference flow | Carrier documents; masses/distances; stage and provider-coverage review |
| cp_post_electricity | released_custody | post_release_electricity | post-release meter record | reporting period; current W including zero; meter/start/end kWh; measured service attribution; original release cohort; verified W_original or gap; supplier/native property; prior supplier coverage; raw MJ/kWh; carried and new burden | Read actual nonoperational service meter and supplier records; keep raw period quantities for old stock even without current manufacture. Only when a positive original cohort release mass is verified may a separate service intensity be expressed on the same 1 kg original reference basis; otherwise leave intensity unresolved. Do not divide by zero current W or attach it to new production. | kWh; MJ | actual service interval | period and original cohort tagged independently | actual post-release stock-service perimeter | per 1 kg reference flow | Meter evidence; service attribution; original positive cohort mass; raw and normalized records kept distinct |
| cp_anomaly | factory_release; released_custody | pre_box_reject; released_box_disposal; packaging pools | anomaly and reclassification register | actual event ID/date; original article/cohort; prior release/status; observed damaged/lost count/mass and uncertainty; actual location/custody; intact-handover test; source and receiving stock class; matched reclassification; residual; original remaining burden and reviewer decision | Use only actual stocktake, movement and documentary evidence; no handling, opening or treatment procedure. Distinguish intact external D from damaged on-site stock, documented loss, paired internal reclassification and unresolved discrepancy. Report known quantity without assigning an unverified waste identity, emission or zero burden. Do not fabricate an exception to close an equation. | kg; box; article | each actual anomaly and period close | actual event and stock period | same physical product or packaging perimeter | per 1 kg reference flow | Stocktake/incident evidence; paired accounts; remaining burden; unresolved residual review |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| release_mass | reference_product_closed_box | W = sum of eligible intact first-release cohort masses in kg; Q = count of their unique first-release boxes. W > 0 is required to construct a new first-release manufacturing intensity; W = 0 does not remove the duty to keep actual stocks and later-service raw records. Separate independently verified transport tare. No actual W or Q is prescribed. | cp_release_mass | W; Q | smi-environment-2021 |
| normalize_cohort | factory_release pre-release inventory rows | y_i = a_i / W, where a_i is the actual exchange amount attributed once to this original first-release cohort and W is its measured complete-retail mass. Keep other cohorts and supplementary gross movements separate; this division applies only to first-release manufacturing with positive W, never to post-release service in a zero-release period. A missing a_i or W is unresolved, not zero. | a_i; W; cp_provider | y_i per 1 kg reference flow | ilcd-allocation-2010 |
| pre_balance | factory_release | U0 + F + I + R = W + T + D + U1, in kg, with the same separately reconciled box-count identity using Q. U0/U1 are pre-release stock; F opaque internal original complete-article additions; I first external contracted unreleased delivery; R genuine unreleased return; T exclusive provider-return/transfer; D actual intact disposal. Track stock changes or documented mass discrepancies explicitly, not as manufactured Q. | cp_pre_ledger; cp_release_mass | pre-release ledger residual | ilcd-allocation-2010 |
| post_balance | released_custody | L0 + W + J + R = S + D + L1, in kg, with a separate identical count ledger. L0/L1 are released stock; J first external receipt of already-released goods; R genuine prior-site-dispatch return; S exclusive later shipment/provider-return/transfer; D actual intact disposal. W and Q are the same cross-ledger transfer and cancel on consolidation; no J, R, L0 or S creates Q. | cp_post_ledger; cp_release_mass | released ledger residual | ilcd-allocation-2010 |
| pack_balance | carton_in; film_in; pallet_in | K0 + P + N + R = S + D + K1, separately by packaging article, count and kg. P purchase, N first non-purchase external receipt and R true same-article return are exclusive; actual outward S and waste D are exclusive. Supplier coverage never controls physical inclusion. Internal reuse cancels and off-site owned articles are excluded from K1. | cp_pack_pool | article stock residual | ilcd-allocation-2010 |
| burden_balance | all cohorts and article pools | H0 + H_in_remaining + H_new = H_current + H1 + H_external_other. Each term is an environmental inventory vector with identical method and units. H_external_other consists of mutually exclusive destinations/other cohorts. Match every burden to original article/cohort/exchange and coverage; do not add prior fully attributed shares or duplicate purchase/freight/service. Missing origin shares block completeness. | cp_provider; cp_pre_ledger; cp_post_ledger; cp_pack_pool | burden residual by exchange | ilcd-allocation-2010 |
| electricity_units | electricity; post_release_electricity | E_MJ = 3.6 × E_kWh for the verified Energy/Units of energy support chain only; actual cohort allocation and provider-native property must be verified independently. | cp_electricity; cp_post_electricity | MJ; original kWh retained | ilcd-allocation-2010 |
| freight_activity | road_freight_pre; road_freight_post | A_tkm = sum of actual transported mass in tonnes × actual loaded distance in km by shipment leg; identify any separately borne empty-leg service from its actual provider convention without inventing a loaded tonne-kilometre. Keep pre/post-release assignments disjoint: before-release activity uses verified positive W; later service uses verified positive W_original only, and otherwise stays as raw period activity with unresolved intensity. | cp_transport; W; W_original | t*km per 1 kg reference flow | ilcd-allocation-2010 |
| later_service_intensity | released_custody; actual post-release packaging | Keep raw a_period,original for every actual period/cohort service even when current W = 0. Only if W_original > 0 is independently verified may z_service = a_period,original / W_original be expressed for the separate later stage. Otherwise z_service is unresolved. No new Q, manufacturing reference or current-zero division; retain original and new burden portions once. | cp_post_electricity; cp_post_ledger; cp_pack_pool; cp_transport; W_original | raw period amount; later service intensity or unresolved | ilcd-allocation-2010 |
| actual_anomaly_reconciliation | pre_balance; post_balance; pack_balance | The displayed movement equalities describe ordinary intact-article movements. Where an actual separately evidenced anomaly/reclassification exists, reconcile the signed documented account alongside those identities, paired to its actual stock class and burden account; do not relabel it D. A quantity/destination/burden not established remains an explicit unclosed residual. Retained damaged stock still exists in the perimeter; loss does not establish an emission or disposal process. | cp_anomaly; cp_pre_ledger; cp_post_ledger; cp_pack_pool | documented anomaly/reclassification and residual | ilcd-allocation-2010 |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| dq_original | factory_release | Original household-box identity, actual manufacturer and first release must be established separately from publicity or product-family evidence. | SKU/lot; external label; original release and contract/handover records |
| dq_complete | all processes | Preserve actual uncertainty, coverage/exclusion decisions and stock/burden residuals; do not force balances with invented zeroes, losses or coefficients. Different physical and environmental units never share a false mass balance. | Closed-article weights; complete movement and provider-coverage ledgers; unresolved values |
| dq_native | all applicable rows | Only select a native UUID after exact type/state/property/unit and supplier compatibility review. Historical support XML does not establish current data availability; actual selected-flow Chinese names must follow the same verified record. | Fixed direct-read identity and support chain; actual supplier/receiver specification |

## 9. Validation Rules

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| v_scope | reference_product_closed_box | Verify actual original household-box SKU, unchanged closed state, manufacturer, date/lot and first-release evidence. Independent product-category evidence is not a measured lot or permission to treat a multipack as an individually sealed box. | smi-solstickan-family-2006; solstickan-household-receipts |
| v_quantity | all inventory rows | For a new manufacturing intensity require positive W, Q, intact mass/tare evidence and the same denominator in every row and language. Raw zero-release periods and separate later services follow later_service_basis without inventing current manufacture. Do not use marked contents count, company average footprint or shipping-case count as a lot measurement. Unresolved conversion prevents a qualified dataset. | smi-packaging-count-faq; smi-environment-2021 |
| v_coverage | factory_release | Verify compatible opaque original-provider environmental coverage and no double counting with external utility/packaging additions. Missing original manufacturing burden, supplier handover or first release blocks qualification even when the box is physically documented. | ilcd-allocation-2010 |
| v_ledgers | factory_release; released_custody | Close both physical ledgers with matching Q/W gate; account for actual pre-release returns/transfers, first outside already-released receipts, genuine returns and disposals with exclusive subtypes and matching cards/protocols. Retained samples and status-only changes do not create physical flows. | ilcd-allocation-2010 |
| v_pool_history | all article/cohort pools | Close physical and historical environmental-burden identities independently; record every actual purchase, first non-purchase receipt and traceable true return. Count actual procurement, freight and service once even when supplier coverage is missing. Off-site ownership cannot be both issued and inside stock. Unknown remaining shares are pending review. | ilcd-allocation-2010 |
| v_atomic_identity | all inventory rows | Each applicable row is one atomic exchange. Confirm native flow type, state, supplier route, property/unit and Chinese baseName before adopting any UUID. Fixed historical support rows establish Mass/kg, Energy/MJ/kWh and Goods transport/t*km/kg*km only, not present product identity, native net calorific value or current platform observation. | ilcd-allocation-2010 |
| v_no_defaults | all processes | Do not invent actual amounts, UUIDs, quantitative ranges, site conclusions or applicability. A conditional absent flow needs evidence; an unknown flow remains unresolved. Add other actually identified ordinary packaging/utility exchanges as separate bilingual atomic cards before completion; do not silently omit them or expand into internal manufacturing. | ilcd-allocation-2010 |
| v_zero_release_service | released_custody; all article pools | For a current-zero-release period retain actual raw service electricity, freight, packaging and stock records with period/original-cohort tags; do not normalize by W = 0 or erase them. Accept later-stage intensity only with independently verified positive W_original and separate attribution. Return burden already netted against an outward entry cannot be added a second time. | ilcd-allocation-2010 |
| v_anomaly | all physical and burden ledgers | Any actual damage/loss outside intact D must have an evidenced anomaly/reclassification or explicit unclosed residual, never silent stock disappearance or inferred waste/emission. Keep the original remaining burden responsibility until evidenced attribution; no handling steps follow from this record. | ilcd-allocation-2010 |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | secondary_dataset; background_dataset only after independent source and study qualification |
| downstream_use | Original manufacturer first-release supply of the same complete household box; later logistics modelled separately with inherited burden |
| allowed_use | Matched closed-product environmental accounting at the verified original production gate and actual SKU/lot/site/period |
| excluded_use | Instructions for making, opening, testing or using matches; full-leaf coverage; performance equivalence; individual seal claims; repacking purchased released goods as new production; current lot/certification claims from historic photos, donation totals or corporate averages |
| required_metadata | All required qualifiers; W/Q; two physical ledgers; each actual packaging pool; original and contracted provider pins/coverage; actual native exchanges and units; burden carry-forward and allocation; study method/geography/time |
| required_quality_disclosure | Provider/identity gaps, unsupported lot continuity, scale/tare/count uncertainty, stock/burden residuals, conditional absence evidence and independent methodological/translation review state |
| update_trigger | Change in SKU/form, original manufacturer, first-release gate, physical perimeter, packaging material/pool, provider coverage/native identity, allocation basis or evidence |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| unsd-cpc3-2025 | official_guidance | UNSD, CPC Version 3.0, explanatory notes, 30 June 2025, PDF p.198. https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Exp_Notes_30Jun2025.pdf | Frozen classification: 38998 Matches and adjacent subclasses; classification only, no production or quantitative evidence. |
| unsd-cpc3-2026 | official_guidance | UNSD, CPC Version 3 explanatory notes, 23 October 2026, CPC3!A1856:D1856. https://unsdsna.azure-api.net/files/pages/cpc/CPC_Ver3_Exp_Notes_2026-10-23_for_Website.xlsx | Confirms 38998 and HS 2022 heading 3605; adjacent rows 1853–1857 bound exclusions. Does not change the frozen June classification denominator. |
| smi-solstickan-family-2006 | literature | Swedish Match, Inside 3/2006, Swedish edition, p.8, labelled Solstickan product-family photograph. https://www.swedishmatch.com/globalassets/documents/inside-magazine/2006_inside3_sv.pdf#page=8 | Historical manufacturer evidence distinguishes Hushållsask from Bruksask, longer presentations and other articles. Photograph only: no present SKU/lot continuity, mass, item tally, individual seal or environmental input follows. |
| solstickan-household-receipts | literature | Stiftelsen Solstickan, Ören blir miljoner, Hushållsask line. https://www.stiftelsensolstickan.se/om-stiftelsen/oren-blir-miljoner | Independent beneficiary identifies the commercial household box separately from other presentations and articles; monetary receipts are not environmental exchanges or factory first-release counts. |
| smi-packaging-count-faq | literature | Swedish Match Industries, FAQ, packaging-material and stated-quantity questions only. https://www.st-ab.se/about-us/faq | Producer identifies recycled paperboard for inner/outer boxes and acknowledges count variation. Neither statement supplies a lot BOM, packaging mass or actual contents tally; other FAQ subjects are outside this method. |
| smi-environment-2021 | literature | Swedish Match, Sustainability reporting 2021, printed p.57 (PDF p.24), production-unit footnote and environmental tables. https://www.swedishmatch.com/globalassets/documents/sustainability/sustainability-reporting-archive/2021_sustainability_swedish-match-annual-report_en.pdf | Supports a match-box production accounting unit only. Product-family and cross-segment aggregates cannot populate the particular household-box LCI or its incremental footprint. |
| ilcd-allocation-2010 | official_guidance | European Commission JRC, ILCD Handbook, General guide—Detailed guidance, first edition March 2010, §§7.9.2–7.9.3, printed pp.255–265 (PDF pp.275–285). https://eplca.jrc.ec.europa.eu/uploads/ILCD-Handbook-General-guide-for-LCA-DETAILED-GUIDANCE-12March2010-ISBN-fin-v1.0-EN.pdf | Conditional allocation-required attributional accounting: subdivision, physical causality and residual same-gate economic values. Not a matchbox measurement, universal coefficient or claim of full ILCD/PEF conformity. |
