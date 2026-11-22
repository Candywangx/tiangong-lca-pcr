---
pcr_id: pcr.other-transportable-goods-except-metal-products-machinery-and-equipment.basic-chemicals.fungicides
language: en-US
sync_with: pcr.zh-CN.md
status: candidate
content_maturity: authored_methodology
---

# 70% mancozeb wettable powder: finished-product receipt, packaging and first release

## 1. Scope and Applicability

This is a bounded environmental accounting method for a registered civilian 70% mancozeb wettable-powder finished product. It covers receipt of the already manufactured whole formulation, documented external packaging and the first qualified commercial release at the declared site gate. The supplier's manufacture is a black-box upstream requirement. No formulation recipe, technical-material manufacture, operational parameters, field use or efficacy model is prescribed. The declared unit is 1 kg of net finished product, not 1 kg of active substance or an equivalent disease-control service.

ICAMA PD20091282 identifies the finished product and Sichuan Xianyida holder; it does not identify a measured production batch, supplier handoff or environmental inventory. Two other-holder registrations corroborate a distinct finished-product form without establishing identical facilities or permissions. SAMR metadata distinguishes technical material from wettable powder and records standard replacement history. Apply the study's documented edition and product qualification; metadata supplies no acceptance limits. These sources do not establish international authorization. Health Canada's jurisdiction-specific changes prevent that inference.

The cited Chinese Pesticide Management Regulation, 2022 consolidated text, articles19,21–22, supplies the documentary basis for commissioned processing/packing roles, qualified factory-sale release and product/batch/quantity/quality/date records, and packaging/labels. Verify the study-applicable edition, registration-holder responsibility and actual licensed entrusted site; no contact details or inspection procedure is required here. This is a documentary gate, not evidence that a named lot has passed.

The selected route requires evidence that the received lot has not already undergone the same final commercial release upstream. Already released purchased goods, distribution, resale, relabelling and transfers are not new production under this method. Where the upstream supplier performs final release, locate that event and the reference gate there, or use a separately scoped distribution model. This method alone is not a complete cradle-to-gate or PEF study.

Exclude insecticides (34661), herbicides/anti-sprouting products/growth regulators (34663), disinfectants (34664), hazardous-pesticide preparations classified in 34666, residual products in 34669, technical active material, other concentrations/forms and mixed-active products. Frozen June 2025 UNSD page167 lists these separate subclasses; October 2026 CPC3!A1496:D1496 defines 34662 through HS2022 3808.92. Verify actual product classification rather than a native database label or an everyday use of the word hazardous.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.other-transportable-goods-except-metal-products-machinery-and-equipment.basic-chemicals.fungicides |
| classification_refs | CPC 3.0 34662, accepted narrower registered finished wettable-powder product under docs/adr/2026-11-22-accept-cpc-34662-finished-mancozeb-wettable-powder-at-first-release.md |
| covered_products | Registered civilian 70% mancozeb wettable-powder finished product at its first qualified release |
| excluded_products | Technical active material; other forms/concentrations; mixed actives; neighbouring pesticide subclasses; previously released resale goods |
| representative_product | Whole finished powder identified by PD20091282 header; actual batch and permission independently documented |
| production_route | Externally manufactured whole formulation received before final commercial release; documented packaging and first qualified release; manufacture stays upstream black box |
| market_state | Finished wettable powder in the actual documented pack at first-release site gate; reference mass excludes pack |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Supply one identified qualified finished fungicide product; no use-service equivalence |
| How much | 1 kg net whole finished product |
| How well | Study-specific registered product identity, supplied state and signed qualified release; no inferred efficacy |
| How long or cycle | One first-release event per physical lot; no assumed shelf life or application cycle |
| reference_flow_link | finished_wp |

| Field | Value |
| --- | --- |
| Reference amount | 1 |
| Reference product flow | 70% mancozeb wettable powder |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | registration and holder; actual manufacturer and handoff; product concentration and form; applicable specification edition; batch genealogy and first-release evidence; site and reporting dates; entrusted-site permission and release certificate; net product mass; packaging construction/ownership; stock and burden transfers; supplier provider coverage; utilities and transport interfaces |

Declare every required qualifier in the dataset metadata, product description or equivalent field. Product-flow identity must match the whole registered finished powder and gate. Generic Mancozeb, active-substance mass, an unspecified fungicide and a regional warehouse product are not interchangeable. UUID support for Mass/kg does not establish a product UUID or background provider.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| reference_mass | reference product | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Net whole finished-product mass excludes bag, carton and pallet. The label's 70% identifies a grade, not a conversion of product kg into active kg. |
| matched_basis | all inventory rows | Mass | kg | Use the same positive newly qualified finished-product mass B for attribution; convert each raw numerator to its stated unit before dividing once by B. A packaging count needs measured article mass, not a default pack weight. |
| electricity_meter | electricity | Energy `f6811440-ee37-11de-8a39-0800200c9a66` | kWh | Electrical meter deltas retain their electrical-energy meaning. Units of energy 93a60a57-a3c8-11da-a746-0800200c9a66 has MJ reference and 1 kWh = 3.6 MJ. This support chain does not determine an unselected supplier flow's native property and never implies net calorific value. |

## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Whole finished formulation received from a documented external manufacturer before its first final commercial release; inherited environmental burdens and packaging received with it declared |
| starting_condition_role | Upstream whole-product handoff, not internal active manufacture or a burden-free starting point |
| product_classification_scope | CPC 3.0 34662, narrower registered 70% wettable-powder identity |
| recursive_input_rule | Record the whole received product once with a compatible upstream provider. Never explode its internal composition into duplicate purchases; already final-released same-category goods cannot create new output B. |
| upstream_dataset_requirement | Compatible whole formulation, actual manufacturer, gate, period and geography; disclose included packaging, transport and utilities. Unavailable upstream coverage remains an explicit gap. |
| disclosure | Foreground receipt/packaging/release gate; excluded internal operations and downstream use; actual supplier handoff; failed release and stock burdens; all packaging origins; transport/services and environmental coverage gaps |

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| boundary_identity | received_wp, finished_wp | Bind the product to its registration, physical form, actual manufacturer and first release. A label or designed capacity is neither measured production nor evidence of the site's permission or emissions. | icama-pd20091282; samr-mancozeb-2020; cn-pesticide-regulation-2022 |
| boundary_accounting | release | Include attributable receipt, external packaging, qualification services, holding, returns, cleaning and waste handling. Keep manufacturer burdens upstream and require verified coverage without duplicate utilities or freight. Excluded internal details are not zero environmental burdens. | eu-pef-2021 |
| boundary_pack | primary_bag_in, carton_in, pallet_in | For each article type record purchases P, first non-purchase external receipts N and true returns R traceable to the same article previously dispatched from this site. N includes incoming-load packaging, separate loans and free transfers, whether or not supplier inventories list them. Reconcile every stock and destination. | eu-pef-2021 |
| boundary_extension | release | Conditional carton, pallet, water and waste rows require actual occurrence. Record supported non-applicability; missing evidence is not zero. Add each actual external utility, service, waste or elemental emission as its own identified exchange before claiming completeness. No direct emission factor is supplied. | eu-pef-2021 |
| boundary_exclusions | finished_wp | This gate method excludes field use, efficacy and fate. Chinese product identity cannot imply authorization in another jurisdiction. | hc-mancozeb-2024; unsd-cpc3-2025; unsd-cpc3-2026 |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| release | Finished-product receipt, external packaging and first release | required | Whole formulation before first final release; actual site and supplier handoff evidenced | foreground | finished_wp |

### Process: Finished-product receipt, external packaging and first release (`release`)

The cards below define atomic physical exchanges, not default consumption. Packaging input/output quantities include actual physical movements; their attached environmental burdens are assigned separately by provenance and use. The reference output carries net powder only. Outgoing packaging is not a co-product credit. Stock bridges distinguish production release from dispatch; neither sales nor returned product increases B.

#### Inputs

##### Product flows

###### 70% mancozeb wettable powder before final release (`received_wp`)

Whole supplied formulation received at the actual manufacturer handoff; quantify net product independently of all packaging. No internal composition breakdown.

- Selected flow: 70% mancozeb wettable powder before final release
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Actual attributable converted raw-period physical amount divided once by positive newly first-qualified whole-product net kg, as specified in section 8. Keep packaging physical movements separate from environmental burden assignment.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `process_output`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_product`

###### Previously released 70% mancozeb wettable powder returned to site (`returned_released_wp`)

Conditional actual customer return of the same previously released whole product. Link prior release and remaining burden to the original lot; no new production B. Keep this physical receipt separate from received_wp, which is before final release.

- Selected flow: Previously released 70% mancozeb wettable powder returned to site
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Actual attributable converted raw-period physical amount divided once by positive newly first-qualified whole-product net kg, as specified in section 8.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `process_output`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_product`

###### Purchased electricity (`electricity`)

Metered electricity attributable to this receipt/packaging/release boundary; retain failed-release burdens. Supplier flow and native property are unbound.

- Selected flow: Purchased electricity
- Flow property / unit: Energy `f6811440-ee37-11de-8a39-0800200c9a66` / kWh
- Amount rule: Actual attributable converted raw-period physical amount divided once by positive newly first-qualified whole-product net kg, as specified in section 8. Keep packaging physical movements separate from environmental burden assignment.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `process_output`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_utilities`

###### Complete pesticide powder primary bag (`primary_bag_in`)

Count all P, N and verified R receipts for this specific whole bag article. Actual construction is required; separately acquired liners require separate cards. No reuse of contaminated bags is assumed.

- Selected flow: Complete pesticide powder primary bag
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Actual attributable converted raw-period physical amount divided once by positive newly first-qualified whole-product net kg, as specified in section 8. Keep packaging physical movements separate from environmental burden assignment.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `process_output`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_pack`

###### Corrugated-board carton (`carton_in`)

Conditional on actual use. Record P, N and verified R even when a carton arrives with supplied goods and is absent from supplier inventories.

- Selected flow: Corrugated-board carton
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Actual attributable converted raw-period physical amount divided once by positive newly first-qualified whole-product net kg, as specified in section 8. Keep packaging physical movements separate from environmental burden assignment.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `process_output`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_pack`

###### Wooden pallet (`pallet_in`)

Conditional on an actual wooden-pallet pool. Separately borrowed or freely transferred pallets are N at first receipt, not R without a prior same-site dispatch. No default rotations.

- Selected flow: Wooden pallet
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Actual attributable converted raw-period physical amount divided once by positive newly first-qualified whole-product net kg, as specified in section 8. Keep packaging physical movements separate from environmental burden assignment.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `process_output`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_pack`

###### Purchased tap water (`tap_water`)

Conditional on separately supplied packaging-zone cleaning water. Supplier-contained water is not a second purchase. Require metered mass or measured conversion; no default density.

- Selected flow: Purchased tap water
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Actual attributable converted raw-period physical amount divided once by positive newly first-qualified whole-product net kg, as specified in section 8. Keep packaging physical movements separate from environmental burden assignment.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `process_output`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_utilities`

#### Outputs

##### Product flows

###### 70% mancozeb wettable powder (`finished_wp`)

Unique reference output at first final qualified release. Released net product and later physical dispatch are bridged by finished stock; count the same product only once.

- Selected flow: 70% mancozeb wettable powder
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: 1 kg
- Value mode: `fixed_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_output`

###### 70% mancozeb wettable powder returned to supplier (`returned_wp`)

Conditional whole-product return before final release; identify destination and carried burdens. Returned already released customer product is a separate stock event, never new production.

- Selected flow: 70% mancozeb wettable powder returned to supplier
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Actual attributable converted raw-period physical amount divided once by positive newly first-qualified whole-product net kg, as specified in section 8. Keep packaging physical movements separate from environmental burden assignment.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `process_output`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_product`

###### Complete pesticide powder primary bag (`primary_bag_out`)

Actual outward bag article, attached to outgoing product or otherwise transferred; destination subledgers are mutually exclusive. Excludes bag waste.

- Selected flow: Complete pesticide powder primary bag
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Actual attributable converted raw-period physical amount divided once by positive newly first-qualified whole-product net kg, as specified in section 8. Keep packaging physical movements separate from environmental burden assignment.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `process_output`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_pack`

###### Corrugated-board carton (`carton_out`)

Actual outward cartons including dispatch with goods and return to owner; never also count the same article as discarded.

- Selected flow: Corrugated-board carton
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Actual attributable converted raw-period physical amount divided once by positive newly first-qualified whole-product net kg, as specified in section 8. Keep packaging physical movements separate from environmental burden assignment.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `process_output`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_pack`

###### Wooden pallet (`pallet_out`)

Actual outward pallets by article identity and destination, including loan return; transport legs and service coverage are recorded separately once.

- Selected flow: Wooden pallet
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Actual attributable converted raw-period physical amount divided once by positive newly first-qualified whole-product net kg, as specified in section 8. Keep packaging physical movements separate from environmental burden assignment.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `process_output`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_pack`

##### Waste flows

###### Discarded 70% mancozeb wettable powder (`discarded_wp`)

Measured whole finished product exported as waste, excluding packaging; supplier return and internal stock are not this export. No treatment operation is prescribed.

- Selected flow: Discarded 70% mancozeb wettable powder
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Actual attributable converted raw-period physical amount divided once by positive newly first-qualified whole-product net kg, as specified in section 8. Keep packaging physical movements separate from environmental burden assignment.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `process_output`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_waste`

###### Discarded contaminated pesticide powder bag (`spent_bag`)

One whole waste article. Record empty article and adhering product as composition subledgers without adding duplicate total waste mass.

- Selected flow: Discarded contaminated pesticide powder bag
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Actual attributable converted raw-period physical amount divided once by positive newly first-qualified whole-product net kg, as specified in section 8. Keep packaging physical movements separate from environmental burden assignment.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `process_output`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_waste`

###### Discarded corrugated-board carton (`discarded_carton`)

Actual waste carton; document contamination and destination independently. A free transfer is not automatically waste or avoided virgin production.

- Selected flow: Discarded corrugated-board carton
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Actual attributable converted raw-period physical amount divided once by positive newly first-qualified whole-product net kg, as specified in section 8. Keep packaging physical movements separate from environmental burden assignment.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `process_output`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_waste`

###### Discarded wooden pallet (`discarded_pallet`)

Actual discarded pallet with condition and destination. No speculative recycling or substitution credit.

- Selected flow: Discarded wooden pallet
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Actual attributable converted raw-period physical amount divided once by positive newly first-qualified whole-product net kg, as specified in section 8. Keep packaging physical movements separate from environmental burden assignment.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `process_output`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_waste`

###### Packaging-zone cleaning wastewater (`zone_wastewater`)

Conditional actual exported wastewater, not a direct elementary emission. Retain actual treatment coverage and unresolved constituents.

- Selected flow: Packaging-zone cleaning wastewater
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Actual attributable converted raw-period physical amount divided once by positive newly first-qualified whole-product net kg, as specified in section 8. Keep packaging physical movements separate from environmental burden assignment.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `process_output`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_waste`

## 7. Allocation and Co-product Handling

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| allocation_direct | release | First isolate directly attributable loads; examine subdivision or justified system expansion before allocation. For inseparable shared loads justify a causal measured physical driver; if unavailable, explain the rejection and any other relationship, disclose sensitivity and retain review. No default mass or revenue split. | eu-pef-2021 |
| allocation_once | all inventory rows | A product receipt, stock transfer, true return, reinspection or resale creates no co-product credit and no second production event. Retain unsuccessful release, rework-related environmental services and their losses in the matched reporting pool. |  |
| allocation_pack | primary_bag_in, carton_in, pallet_in | Assign manufacture, procurement, transport, cleaning, repair and pool-service burdens by actual provenance and coverage once. Traceable R carries the same article's remaining burden, not a new article manufacture. First N is not burden-free merely because unpurchased or absent from supplier inventories. Supplier coverage unknown means pending investigation, not zero. No unsupported lifetime/rotation assumption or avoided-production credit. | eu-pef-2021 |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cp_output | release | finished_wp | first-release and stock ledger | QA owner; registration; holder; manufacturer; product form; batch ID; site; period dates; release decision/date; conformity certificate; manufacturer/entrusted-site permission; production date; sales/dispatch date; calibrated gross/tare/net kg; previous release; opening/closing unreleased and released stocks; failed lots; returns; burden transfers | Quality owner reconciles unique first final acceptance with net weighing and lot genealogy across supplier/site. B is newly first-qualified whole-product net kg in the matched pool. Do not substitute shipments, design capacity or sales. Exclude previous final releases, transfers and reinspection from B; retain failures and zero-output periods in the burden pool. Allocate opening carried burdens in and closing carried burdens out once. Do not normalize if B is nonpositive or unresolved | kg | each event and period close | whole matched reporting period | declared release site and actual manufacturer interface | per 1 kg reference flow | signed release; calibration; stock balance; supplier handoff; carried-burden reconciliation |
| cp_product | release | received_wp, returned_released_wp, returned_wp | whole-product custody ledger | procurement owner; manufacturer; supplier lot; registration; net kg; previous release status; custody dates; returns; rejected/discarded kg; provider identity and environmental coverage; freight coverage | Reconcile each external whole-product receipt and supplier return to cp_output genealogy, calibrated mass and matched stock bridge. Keep per-lot, per-exchange external carried-in environmental vectors, their source/destination, acquisition time, remaining unassigned share and one-time entry/settlement keys; opening/closing and outward transferred shares, distinct from newly incurred burdens. Supplier coverage links each exchange to exactly one provenance entry. Preserve all environmental upstream burdens without internal recipe disclosure; coverage gaps block a complete dataset | kg | each handoff | same pool as cp_output | actual supplier and site boundary | per 1 kg reference flow | weigh tickets; delivery and return receipts; compatible upstream provider; nonduplicate coverage matrix |
| cp_pack | release | primary_bag_in, carton_in, pallet_in, primary_bag_out, carton_out, pallet_out | article-type physical and burden ledgers | packaging owner; article identity/type; construction; kg per item; count; opening/closing stock; P; N; R; prior same-site dispatch; ownership; attached-to-load receipts; separately borrowed/free transfers; outward destinations; discard; unresolved loss; supplier coverage; manufacture/freight/service records; cohort per-exchange external carried-in remaining vector; entry/settlement key; historical assigned share; new-burden flag; carried burden | For each type independently weigh or convert count using measured article mass. Record all first external N, including unlisted incoming-load packaging and separate loans/transfers; R requires identity linkage to an earlier site dispatch. Reconcile all incoming/outgoing/stock changes with pack_balance; record each transfer counterparty/pool and its paired outward/inward settlement so only the remaining vector re-enters. Audit supplier coverage independently of receipt origin. Reconcile burden assignment by cohort and actual service use with pack_burden, retaining true returns in their original cohort and verifying only the remaining unassigned share, never assuming all manufacture returns or is zero; missing supplier data remains pending | kg | each movement and period close | same pool as cp_output, with opening cohorts | site pool including borrowed and supplier-owned articles | per 1 kg reference flow | item trace; measured article mass; ownership/handoff; invoices; return receipts; pool stock count; coverage matrix |
| cp_utilities | release | electricity, tap_water | meter and coverage ledger | utility owner; meter ID; start/end; multiplier; unit; dates; site boundary; submeter/shared driver; already integrated flag; supply provider; native property if selected; cleaning-water mass or measured conversion; supplier-service coverage | Read calibrated meter deltas for included receipt, packaging, holding and qualification support. Subdivide measured loads where possible; retain failed/zero-output loads and stock burdens. Reconcile shared driver and provider coverage; a service including electricity cannot be charged again. Retain electrical kWh separately from supplier-native identity | kWh; kg | each meter interval and period close | same pool as cp_output | included site and support services | per 1 kg reference flow | calibrated meters; bills; measured driver; property/unit chain; coverage reconciliation |
| cp_waste | release | discarded_wp, spent_bag, discarded_carton, discarded_pallet, zone_wastewater | individual waste transfer ledger | environment owner; stream identity; net kg; article/component subledger; dates; batch; on-site stock; destination; treatment provider and utility coverage; measured emissions if any; missing coverage | Weigh each actual stream separately and bind it to source stock. Whole waste mass and composition subledgers cannot both be additional outputs. Exclude true returns and internal movements from waste exports. Document actual transport and treatment once; each actual direct emission requires independent identity, medium and measurement, never a fitted mass-balance residual | kg | each event and period close | same pool as cp_output | site waste handling and actual external interface | per 1 kg reference flow | calibrated weigh tickets; transfer manifest; destination and treatment evidence; environmental coverage assessment |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| period_normalize | all inventory rows | q_i = attributable converted raw amount_i / B; B is unique newly first-qualified whole-product net kg from cp_output. finished_wp remains 1 kg. Do not divide an already normalized amount again. Carry opening burdens in and closing burdens out exactly once; retain failed and zero-output loads without assigning them to unrelated output. Unresolved B or burden attribution blocks normalized values. | raw amount_i; B; cp_output; matched stock/burden pool | q_i per 1 kg reference flow |  |
| product_balance | received_wp, returned_released_wp, finished_wp, returned_wp, discarded_wp | On the raw-period custody ledger: opening whole-product mass + external receipts including previously released customer returns = closing whole-product mass + physical product dispatch + supplier returns + waste exports + separately supported losses. First release changes stock status, not mass; bridge finished_wp to dispatch using released stock. Include adhering product in the waste composition ledger once. No unknown emission or internal constituent is inferred from a residual. | custody and stock kg; first-release status; supported waste/loss kg | whole-product reconciliation |  |
| pack_balance | primary_bag_in, carton_in, pallet_in, primary_bag_out, carton_out, pallet_out | For each article type: S_open + P + N + R = S_close + O + W + L, on the same measured mass basis. O is every outward non-waste destination, W actual discard, L independently evidenced loss; internal moves cancel. Investigate any residual rather than invent L. P, first N and true R are mutually exclusive, regardless of supplier coverage. Return lacking prior same-site article trace cannot be R. | type-specific raw kg; item IDs; all stock and movement records | physical article reconciliation |  |
| pack_burden | primary_bag_in, carton_in, pallet_in | For each article cohort and exchange vector: opening carried burden + actual external carried-in remaining burden + verified newly incurred burden = burden attributed to this pool + closing carried burden + burden transferred to another documented pool. External carried-in includes previously incurred, still-unassigned vectors received mid-period with P, first N or R. Record source, timestamp, original cohort, prior assigned share and remaining vector; carried-in and newly incurred entries are mutually exclusive for the same exchange. Use a one-time provenance entry/settlement key across invoice, provider, transport and service records to prevent dual entry. Physical R retains its original cohort; neither all original manufacture nor zero is assumed to return. Supplier-covered vectors link once, not as both carried-in and new burden. Physical R does not add manufacture. Each P and first N needs an independently checked coverage decision. Count actual purchase/transport/service burdens borne by the study once; verify any missing upstream manufacture separately. Unknown supplier coverage remains pending. Verified use/rotation allocation may distribute carried burden but cannot erase physical stock or create assumed reuse. | provenance; per-exchange external remaining vectors; entry/settlement keys; previous assignment; coverage decisions; actual new burdens; measured use; stock transfers | nonduplicate attributable packaging burden | eu-pef-2021 |
| product_burden | received_wp, returned_released_wp, finished_wp, returned_wp, discarded_wp | For each whole-product lot and environmental exchange: opening carried vector + verified external carried-in remaining vector + newly incurred vector = vector assigned to this reporting pool + closing carried vector + vector transferred to another documented pool. Separate incoming supplier coverage from current site additions with one-time source/entry/settlement keys; the same exchange cannot be both carried-in and new. Prior release status controls B, not whether inherited environmental burden exists. Retain actual remaining burdens on supplier returns, product stock and waste without duplicate treatment/provider coverage. Pair every external transfer with the sending pool and its outward/inward settlement; recognize only the remaining vector, including on a genuine return. No unsupported vector or zero-fill. | lot genealogy; actual handoff vectors; opening/closing shares; once-only keys; cp_product; cp_output; cp_waste | whole-product burden reconciliation |  |
| energy_conversion | electricity | E_MJ = 3.6 × E_kWh after reading the meter delta and multiplier once. Keep original kWh; conversion never validates a supplier flow or changes its native reference property. | electrical meter delta; multiplier; verified energy unit chain | compatible metered electrical energy |  |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| dq_identity | received_wp, finished_wp | Same whole product, form, actual handoff and first release in both languages; no active UUID substitution or native-classification override. | registration header; study-specific permission and batch genealogy |
| dq_denominator | all inventory rows | Same positive B and reporting pool for inventory, protocols and calculations; no output invented from capacity or sales; failures, opening/closing stocks and carried burdens retained. | cp_output; cp_product; period_normalize |
| dq_pack | primary_bag_in, carton_in, pallet_in | Reconcile each P/N/R origin and every stock/destination separately from burden coverage; first free receipt is not return or zero burden. | cp_pack; pack_balance; pack_burden |
| dq_complete | release | Actual upstream, transport, external qualification, waste treatment, additional utilities and emissions are assessed. Missing evidence is reported as incomplete, not presumed absent. | provider coverage matrix; cp_utilities; cp_waste |

## 9. Validation Rules

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| validate_reference | finished_wp | Require the unique terminal product output linked by reference_flow_link, 1 kg whole net product, matching first-release identity and compatible support/property chain. An unresolved whole-product UUID does not authorize provider substitution. | icama-pd20091282 |
| validate_release | release | Verify actual manufacturer, entrusted-site permission where applicable, prior release status, supplier handoff, signed first acceptance/certificate and quantity/batch/quality/date stock bridge. Resale, returns or reinspection do not increase B. Missing records prevent a usable production dataset. | cn-pesticide-regulation-2022 |
| validate_pack | primary_bag_in, carton_in, pallet_in | Test each physical balance including first non-purchase receipt regardless of supplier list, same-article return trace, waste/destination split and the independent once-only burden ledger. Missing provider coverage stays explicit. |  |
| validate_coverage | all inventory rows | Verify single normalization, no negative/invented residuals, actual environmental coverage, provider boundaries and EN/ZH agreement. Conditional non-applicability needs evidence. No zero-fill for unidentified emissions, packaging, utilities or upstream manufacture. | eu-pef-2021 |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | secondary_dataset; background_dataset |
| downstream_use | A qualified whole-product supply model only after independently verified upstream and foreground completeness |
| allowed_use | Bounded collection design for received finished formulation, external packaging and first release; eventual procurement modelling only with compatible providers |
| excluded_use | Complete manufacturing or PEF claim from this gate alone; technical material; already released resale as new production; field use, efficacy and fate; cross-jurisdiction authorization |
| required_metadata | Registration/holder; actual manufacturer/handoff; net product and batch first release; site/time; specification edition; packaging origins/pools; raw and burden stocks; utilities; transport and provider coverage |
| required_quality_disclosure | Product and exchange identity gaps; upstream black-box coverage; supplier/packaging uncertainty; conditional applicability; environmental measurements and missing scope; independent review state |
| update_trigger | Changed registered product/form, release responsibility, supplier/gate/provider, packaging/pool, utilities, standards or jurisdictional applicability |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| unsd-cpc3-2025 | official_guidance | UNSD CPC3 explanatory notes, frozen 2025-06-30, PDF p167. https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Exp_Notes_30Jun2025.pdf | Frozen identity and neighbouring subclasses; no production evidence. |
| unsd-cpc3-2026 | official_guidance | UNSD 2026-10-23 explanation workbook, CPC3!A1495:D1500; 34662 at row1496. https://unsdsna.azure-api.net/files/pages/cpc/CPC_Ver3_Exp_Notes_2026-10-23_for_Website.xlsx | HS2022 3808.92 and neighbouring headings; supplements, does not replace frozen coordinate. |
| icama-pd20091282 | official_guidance | ICAMA label PD20091282, header only: Sichuan Xianyida; mancozeb; wettable powder; 70%. https://www.icama.cn/BasicdataSystem/pesticideRegistration/tagview.do?pdno=PD20091282 | Same-holder whole finished-product identity; no recipe, use instructions, measured inventory or facility permission inferred. |
| icama-comparators | official_guidance | ICAMA PD20040011 and PD20082317, header fields only. https://www.icama.cn/BasicdataSystem/pesticideRegistration/tagview.do?pdno=PD20040011 ; https://www.icama.cn/BasicdataSystem/pesticideRegistration/tagview.do?pdno=PD20082317 | Separate holders corroborate finished form; not interchangeable facilities or conditions. |
| samr-mancozeb-2020 | standard | SAMR GB/T39672-2020 metadata, effective 2021-07-01, replaces GB/T20699-2006 technical product and GB/T20700-2006 WP. https://std.samr.gov.cn/gb/search/gbDetailed?id=B691BB778715D126E05397BE0A0AF3B3 | Product distinction and edition history only; no full-standard requirements inferred. |
| hc-mancozeb-2024 | official_guidance | Health Canada, Changes to the registration of mancozeb pesticides, January2024. https://www.canada.ca/en/health-canada/services/publications/product-safety/changes-registration-mancozeb-pesticides.html | Counterevidence to universal authorization; jurisdiction-specific status only, no application instructions adopted. |
| cn-pesticide-regulation-2022 | official_guidance | Ministry of Justice national administrative regulation database, Pesticide Management Regulation, 2022-03-29 consolidated edition, articles19,21–22. https://xzfg.moj.gov.cn/mobile/law/detail?LawID=1565 | Documentary roles for commissioned processing/packing, qualified factory-sale release and batch/quantity/quality/date records, packaging/labels. No proof of actual lot acceptance, site permission or environmental quantities. |
| eu-pef-2021 | official_guidance | Recommendation(EU)2021/2279, corrected 2022-05-23, AnnexI §§3.2.1–3.2.2,4.4.9.1–4.4.9.4,4.5, PDF pp32–34,78–81,87–88. https://eur-lex.europa.eu/legal-content/EN/TXT/PDF/?uri=CELEX:02021H2279-20211230 | Declared/reference quantity, transparent boundary, reuse burden separation and allocation hierarchy. Packaging ledgers operationalize these accounting principles; no borrowed numeric rotations or full PEF conformity claimed. |
