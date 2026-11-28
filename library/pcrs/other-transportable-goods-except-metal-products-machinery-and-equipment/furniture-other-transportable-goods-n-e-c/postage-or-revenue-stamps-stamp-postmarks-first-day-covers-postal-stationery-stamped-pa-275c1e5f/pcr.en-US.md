---
pcr_id: pcr.other-transportable-goods-except-metal-products-machinery-and-equipment.furniture-other-transportable-goods-n-e-c.postage-or-revenue-stamps-stamp-postmarks-first-day-covers-postal-stationery-stamped-pa-275c1e5f
language: en-US
status: candidate
content_maturity: authored_methodology
translation_status: canonical
sync_with: pcr.zh-CN.md
---

# First release of postal-operator official cancelled paper first-day covers

## 1. Scope and Applicability

This attributional cradle-to-first-release method covers the first formation of an official paper first-day cover from genuine legally procured unused stamps, their integral adhesive, and a purchased finished printed paper envelope, followed by postal-operator authorized first-day cancellation and quality release as a collectible. The released envelope with affixed cancelled stamp is the product, not a mint stamp, an imitation postmark, a postal delivery entitlement or a cancellation-only service. USPS product 894516, Putting a Stamp on the American Experience, is the concrete exemplar: a #6 ¾ envelope bearing a Benjamin Franklin stamp and official black-and-white first-day postmark, issued July 23, 2025 in Washington, DC. The operator describes it as collectible-only and ineligible for mail use. This product specification does not establish a measured factory route. [usps-fdc; canada-product]

Exclude manufacture of unused valid postage/revenue stamps and stamp-impressed paper (32610); ordinary blank stationery; loose used-stamp sorting; first-day cancellation of customer-owned covers as a service; reuse/repackaging of already completed covers; digital colour postmarks; annual sets with boxes; artwork originals (38961); other collectors’ pieces/antiques (38963); restoration, bleaching, stamp removal or artificial cancellation. The complete UNSD notes list 32610 on PDF p152 and 38961–38963 on p197 without further leaf-specific explanatory prose. First-day covers are explicitly named in 38962; this restricted product is a narrower candidate relation, not acceptance of the entire leaf. [unsd-cpc3]

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.other-transportable-goods-except-metal-products-machinery-and-equipment.furniture-other-transportable-goods-n-e-c.postage-or-revenue-stamps-stamp-postmarks-first-day-covers-postal-stationery-stamped-pa-275c1e5f |
| classification_refs | CPC 3.0:38962, accepted narrower association for official cancelled paper first-day covers |
| covered_products | Newly completed genuine postal-operator official paper first-day covers, one declared issue/configuration |
| excluded_products | Unused stamp manufacturing; customer-owned cancellation service; completed-cover repackaging; digital colour and multi-cover gift sets |
| representative_product | USPS 894516; Putting a Stamp on the American Experience; 2025-07-23; Washington DC |
| production_route | Procured finished printed envelope and genuine stamp; affix using integral adhesive; authorized black cancellation; inspection and first release |
| market_state | Complete bare collectible cover; affixed stamp cancelled; not valid for mailing; at first quality-release gate |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Provide completed physical official first-day-cover collectibles of one issue and configuration |
| How much | 1 kg net accepted first-day covers |
| How well | Genuine stamp securely affixed; authorized date/place postmark legible; dry and intact envelope; no false postal-use claim |
| How long or cycle | One first completion and release cycle; no assumed collection lifetime |
| reference_flow_link | reference_product_fdc |

| Field | Value |
| --- | --- |
| Reference amount | 1 |
| Reference product flow | Official cancelled paper first-day cover |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | operator; issue title/date/place; stamp identity/count/adhesive; envelope size/printing; authorized cancellation method and ink; bare product gate; batch identity; net accepted mass Q and accepted count N; component supply states; rejection/rework; packaging gate; upstream providers; service/transport split |

Declare every required qualifier in dataset metadata, process notes or reference-flow comments. Mass support identifies the unit only; it does not verify the product UUID or a postal service function.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| mass_basis | reference product | Mass | kg | Weigh total net accepted bare covers Q for the same closed batch using a calibrated balance; exclude sleeves, boxes and shipping envelopes. Q may be zero in retained failed/open-cohort records; positive Q is required only for a normalized released output. Record accepted count N as an independent reconciliation, not a default mass conversion. |
| same_basis | all inventory rows | row-specific | row-specific | Released dataset exchanges use per 1 kg reference flow; raw records and WIP vectors keep their original units until eligible closure. Collect batch quantities and divide each allocated quantity by the same accepted Q once. Failed covers do not enter Q; their inputs and treatment remain in the batch numerator. |

## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Genuine stamp with integral adhesive and finished printed envelope received before affixing and official cancellation |
| starting_condition_role | foreground_collection_start |
| product_classification_scope | Official first-day cover collectible after cancellation; unused stamp manufacture is upstream input supply |
| recursive_input_rule | A completed first-day cover cannot be a blank input to first formation. Already cancelled covers require a separate reuse model with inherited burdens; do not reset their history. |
| upstream_dataset_requirement | Compatible physical stamp and printed-envelope production providers, including adhesive, printing and purchased supply-state burdens; no face-value proxy or zero-burden assumption |
| disclosure | Declare component ownership, delivery state, cancellation authority, original batch and gate; distinguish first formation, outsourced operation and delivery |

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| b_gate | whole system | Include upstream physical components and their inbound transport, stamp affixing, authorized cancellation, drying if actually performed, inspection, attributable pre-release holding and reject treatment through the first accepted bare-cover gate. Packaging and customer shipment after that gate, retail, collector use and end of life are outside this dataset and require downstream modelling. | usps-fdc |
| b_service | stamp_input | Separate physical stamp supply from any bundled postal entitlement. Cancellation does not cause a mailing journey. Do not infer tonne-kilometres from denomination, fee or retail price. A real intersite movement is counted once from actual route and transported mass. Customer-owned cancellation/return service is excluded; Canada Post describes those separate operations, not this USPS SKU route. | usps-fdc; canada-service |
| b_complete | p_fdc | Record each actual additional chemical, utility, packaging component, waste and elementary emission as its own exchange. No unspecified residual is zero. Verify complete purchased ink formulation and upstream boundary before adding constituent flows. Unmeasured solvent loss, heating, cleaning and packaging waste remain data gaps if present. |  |
| b_supply_once | p_fdc | For every provider and movement declare included operations and delivery point. If a component provider includes delivery to the receiving site, do not add the same freight service again. Add separately purchased road freight only for uncovered actual road legs using road_freight and cp_freight; another actual mode needs its own specific exchange and protocol. Delivery fees and denomination do not prove transport work. | canada-service |
| b_cancel_once | p_fdc | When an authorized contractor cancels operator-owned component assemblies as part of first formation, cancellation_service represents only that purchased operation, not a second finished cover or a customer-owned cancellation-only dataset. Record the provider inclusion ledger under cp_service. Ink, electricity, drying, transport and reject treatment included by that provider are represented once through its service inventory and are not duplicated as foreground purchases. Separately supplied ink or electricity remain direct cards only for the uncovered quantities. Unknown provider inclusion is unresolved, never zero. | canada-service |
| b_cohort | p_fdc | Record original lot and item identity before processing. Keep raw activity quantities, failed cancellation attempts, rework, inherited burdens and their exchange-specific units without normalization while the cohort remains open. For Q = 0 no per-kg result may be emitted; retain the complete failed-lot record and terminal burden vector. A later accepted output of the same traceable cohort inherits its prior failed/rework burdens. An entirely failed lot may enter a predefined documented production campaign only with explicit traceable transfer of its full burden vector and unchanged failure status; never silently discard it or move it to an unrelated successful lot. |  |
| b_wip | p_fdc | At period close carry physical WIP count/mass and its accumulated exchange-specific burden vector forward under the same item/lot lineage. No release from WIP is counted in Q until first acceptance. Every transfer has one matching source out-record and destination in-record with the same transfer ID, physical state and burden vector; transfers inside the consolidated scope cancel, and inherited vectors are not added again as new purchases. Already released stock carries its earlier release history and is never first output again on sale, return or repacking. |  |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| p_fdc | Receipt, affixing, official cancellation and first release | required | First formation of the declared issue | foreground | 1 kg net accepted bare covers |

### Process: First-day cover completion (`p_fdc`)

#### Inputs

##### Product flows

###### Genuine unused paper postage stamp with integral adhesive (`stamp_input`)

Consumed physical stamp mass / Q; reconcile count, rejects and stock. Include supplied adhesive; no separate stamp manufacturing in this process.

- Selected flow: Genuine unused paper postage stamp with integral adhesive
- Flow property / unit: Mass / kg
- Amount rule: Consumed physical stamp mass / Q; reconcile count, rejects and stock. Include supplied adhesive; no separate stamp manufacturing in this process.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: collected_record
- Collection protocol: `cp_components`
- Sources: usps-fdc

###### Finished printed paper envelope (`envelope_input`)

Consumed finished envelope mass / Q; include printed decoration and supplied seams in upstream provider.

- Selected flow: Finished printed paper envelope
- Flow property / unit: Mass / kg
- Amount rule: Consumed finished envelope mass / Q; include printed decoration and supplied seams in upstream provider.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: collected_record
- Collection protocol: `cp_components`
- Sources: usps-fdc

###### Black postal cancellation ink (`cancel_ink`)

Measured consumed complete black ink formulation / Q; record batch, SDS and solids; count retained ink and waste separately without adding constituent purchases already in formulation.

- Selected flow: Black postal cancellation ink
- Flow property / unit: Mass / kg
- Amount rule: Measured consumed complete black ink formulation / Q; record batch, SDS and solids; count retained ink and waste separately without adding constituent purchases already in formulation.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: collected_record
- Collection protocol: `cp_ink`
- Sources: usps-fdc

###### Electricity at completion site (`electricity`)

Measured attributable affixing, cancellation, inspection and holding electricity / Q; not zero solely because cancellation is manual.

- Selected flow: Electricity at completion site
- Flow property / unit: Energy / kWh
- Amount rule: Measured attributable affixing, cancellation, inspection and holding electricity / Q; not zero solely because cancellation is manual.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: collected_record
- Collection protocol: `cp_energy`
- Sources:

###### Mains water (`water`)

Actual measured water supplied for integral-gum activation / Q only if this adhesive route is confirmed; documented absence for pressure-sensitive affixing. Not a cleaning-water allowance.

- Selected flow: Mains water
- Flow property / unit: Mass / kg
- Amount rule: Actual measured water supplied for integral-gum activation / Q only if this adhesive route is confirmed; documented absence for pressure-sensitive affixing. Not a cleaning-water allowance.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: collected_record
- Collection protocol: `cp_water`
- Sources:

###### Separately purchased road freight transport of input components (`road_freight`)

Only actual uncovered road legs: allocated gross payload kg / 1000 × road km / Q; reconcile provider delivery scope and cp_freight. No default road mode for an unknown route.

- Selected flow: Separately purchased road freight transport of input components
- Flow property / unit: Transport work / tkm
- Amount rule: Only actual uncovered road legs: allocated gross payload kg / 1000 × road km / Q; reconcile provider delivery scope and cp_freight. No default road mode for an unknown route.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: collected_record
- Collection protocol: `cp_freight`
- Sources: canada-service

###### Authorized black first-day cancellation service (`cancellation_service`)

Only separately purchased authorized cancellation of operator-owned assemblies: actual attributable serviced cover count / Q. cp_service identifies included ink and electricity; direct cancel_ink and electricity cards retain only quantities outside that provider boundary.

- Selected flow: Authorized black first-day cancellation service
- Flow property / unit: Service count / item
- Amount rule: Only separately purchased authorized cancellation of operator-owned assemblies: actual attributable serviced cover count / Q. cp_service identifies included ink and electricity; direct cancel_ink and electricity cards retain only quantities outside that provider boundary.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: collected_record
- Collection protocol: `cp_service`
- Sources: canada-service

#### Outputs

##### Product flows

###### Official cancelled paper first-day cover (`reference_product_fdc`)

1 kg accepted net covers; measured batch Q / Q.

- Selected flow: Official cancelled paper first-day cover
- Flow property / unit: Mass / kg
- Amount rule: 1 kg
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: collected_record
- Collection protocol: `cp_release`
- Sources: usps-fdc; canada-product

##### Waste flows

###### Discarded silicone-coated paper release liner (`liner_waste`)

Actual separated liner mass / Q when the received stamp format includes it; do not also count it in retained stamp mass. Supplier removal belongs upstream.

- Selected flow: Discarded silicone-coated paper release liner
- Flow property / unit: Mass / kg
- Amount rule: Actual separated liner mass / Q when the received stamp format includes it; do not also count it in retained stamp mass. Supplier removal belongs upstream.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: collected_record
- Collection protocol: `cp_waste`
- Sources:

###### Rejected assembled paper first-day cover (`reject_cover`)

Weighed non-recoverable assembled cover mass / Q; record secure destruction and actual treatment. Reworked covers are not counted as waste again.

- Selected flow: Rejected assembled paper first-day cover
- Flow property / unit: Mass / kg
- Amount rule: Weighed non-recoverable assembled cover mass / Q; record secure destruction and actual treatment. Reworked covers are not counted as waste again.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: collected_record
- Collection protocol: `cp_waste`
- Sources:

###### Spent black postal cancellation ink (`ink_waste`)

Weighed spent ink mass / Q with destination and composition; no automatic recycling credit.

- Selected flow: Spent black postal cancellation ink
- Flow property / unit: Mass / kg
- Amount rule: Weighed spent ink mass / Q with destination and composition; no automatic recycling credit.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: collected_record
- Collection protocol: `cp_waste`
- Sources:

## 7. Allocation and Co-product Handling

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| a_direct | p_fdc | For an attributional study first subdivide production from postal transport, retail and other issue batches; directly assign stamp and envelope purchases and actual cancellation workload. Allocation is only for genuinely shared burdens. Use measured causal machine time or metered consumption with a complete denominator of all users, justify each driver and ensure allocated fractions sum to one. If causal separation is unsupported, leave the shared burden unresolved for study review rather than use face value or collector price by default. | ilcd-allocation |
| a_reject | p_fdc | No co-product or displacement credit for cancellation, invalidated postage or rejects. In-batch rework keeps original inputs and additional work; returned unused stamps retain their physical stock history. |  |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cp_release | p_fdc | release | weighing | issue; batch; Q; N; accepted and rejected count; first release date | Calibrated balance; weigh net dry accepted covers without protective or transport packaging; reconcile first release once | kg | each closed batch | same issue campaign | operator and contracted site | per 1 kg reference flow | calibration; lot records; invoices; approval and reconciliation |
| cp_components | p_fdc | components | stock record | issue; supplier; ownership; stamp count and mass; envelope mass; opening/closing stock; receipts; returns; adhesive and liner state | Weigh representative components with traceable lot sampling and reconcile actual consumption with stock movements; no fabricated per-cover weight | kg | each closed batch | same issue campaign | operator and contracted site | per 1 kg reference flow | calibration; lot records; invoices; approval and reconciliation |
| cp_ink | p_fdc | ink | stock record | ink lot; SDS; opening; purchases; closing; return; retained and waste ink; moisture loss | Weigh actual full formulation consumption; reconcile container tare and stock; investigate water or solvent losses separately | kg | each closed batch | same issue campaign | operator and contracted site | per 1 kg reference flow | calibration; lot records; invoices; approval and reconciliation |
| cp_energy | p_fdc | electricity | meter record | meter; site; batch hours; other users; allocation driver; calibration | Submeter or document causal allocation of measured site electricity; include pre-release handling and holding | kWh | each closed batch | same issue campaign | operator and contracted site | per 1 kg reference flow | calibration; lot records; invoices; approval and reconciliation |
| cp_water | p_fdc | water | meter record | adhesive route; metered activation water; loss; retained water; batch | Measure water only when activation is verified; retain absence evidence otherwise | kg | each closed batch | same issue campaign | operator and contracted site | per 1 kg reference flow | calibration; lot records; invoices; approval and reconciliation |
| cp_waste | p_fdc | waste | weighing record | separate stream; mass; lot; rework; destination; treatment; composition | Weigh each stream separately, reconcile manifests and secure destruction; no fitting unknown emissions as a residual | kg | each closed batch | same issue campaign | operator and contracted site | per 1 kg reference flow | calibration; lot records; invoices; approval and reconciliation |
| cp_freight | p_fdc | road_freight | carrier record | leg ID; supplier; delivery point; included transport; mode; gross kg; km; consignment; other loads; allocation | Verify real road leg and carrier work against component delivery terms; weigh gross load and use actual route distance, not straight-line distance or price; document separately billed versus already included leg | tkm | each consignment | same cohort/campaign | actual dispatch and receipt sites | per 1 kg reference flow | carrier waybill; distance evidence; payload; provider scope ledger |
| cp_service | p_fdc | cancellation_service | contract record | operator; contractor; authorization; cohort/item IDs; serviced/rejected counts; included ink; electricity; drying; freight; waste; separate supplies | Reconcile actual authorized service count and provider inventory boundary; map each included activity to one provider, each excluded actual supply to one foreground card; retain unresolved inclusions | item | each service lot | same cohort/campaign | operator and authorized contractor | per 1 kg reference flow | contract; authorization; acceptance and provider inventory |
| cp_cohort | p_fdc | WIP and failed lots | lineage ledger | original lot; item ID; period; opening/closing WIP count and kg; opening inherited vector; new activities; failed attempts; transfer ID; source/destination; terminal losses; first-release ID; Q | Retain unnormalized raw activities and exchange-specific burden vectors at each cutoff; match transfer pairs and item history before closing a positive-Q cohort or predefined campaign | kg and each exchange unit | each period cutoff and transfer | all periods of the original cohort | all sites in declared consolidated scope | per 1 kg reference flow | immutable raw ledger; matching transfer IDs; stock and release reconciliation |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| batch_normalize | all inventory rows | x_ref = X_alloc / Q; X_alloc is attributable batch exchange quantity in its own unit; Q is accepted net bare-cover mass in kg. Reference output = Q / Q = 1 kg. Divide once, never by N and Q together. | X_alloc; Q; cp_release | x_ref |  |
| component_reconcile | stamp_input; envelope_input; cancel_ink | Consumption = opening stock + receipts - closing stock - unused returns - transfers to other batches. Count internal rework only as extra activity. Retain component-specific mass balance with accepted product, rejects, stock and measured species losses. Whole cover mass does not equal dry paper mass alone. | cp_components; cp_ink; cp_waste; cp_release | batch consumption |  |
| transport | p_fdc | For each actual freight leg tkm = gross transported kg / 1000 × km; allocate shared loads causally and divide attributable tkm by Q. Include incoming packaging in freight mass but exclude it from Q; add each physical packaging waste separately. No shipment inferred from cancelled face value. | carrier records; measured gross mass; Q | tkm per kg | canada-service |
| cohort_balance | all inventory rows | For each exchange separately B_close = B_open + B_new + B_transfer_in - B_transfer_out - B_first_release - B_terminal. Physical WIP counts/mass are reconciled independently; never substitute kg for energy or transport units. Internal transfers cancel on consolidation. Preserve opening/closing physical stocks and burden vectors; do not allocate all period purchases to period shipments. | cp_cohort; cp_release | reconciled physical stock and burden ledger |  |
| zero_and_release | all inventory rows | Emit x_ref only after closing a documented cohort/campaign with total first-release Q > 0. Its numerator includes complete traceable inherited and new attributable burdens, including its failed attempts and predefined campaign terminal losses, with all internal transfer duplicates eliminated. At Q = 0 retain the complete unnormalized record and emit no unit result. Each item contributes net mass to first-release Q once; shipment of previously released stock contributes no new Q. | cp_cohort; cp_release | unit result or retained unnormalized ledger |  |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| dq_identity | p_fdc | Trace legal stamp procurement, issue/date/place, cancellation authority and first physical release. Record photographs and operator records; do not count replacement markings as genuine. | usps-fdc; operator records |
| dq_complete | all inventory rows | Use one closed lot, time and site basis. Missing meters, provider exchanges, ink chemistry/emissions, upstream packaging and holding burdens remain explicit gaps; do not replace unknowns by zeros or invented ranges. | stock reconciliation; uncertainty register |

## 9. Validation Rules

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| v_reference | reference_product_fdc | Require positive measured Q, accepted N, one reference output, matching batch/issue and 1 kg normalization in every row and protocol. Mass property support does not approve an unresolved product UUID. |  |
| v_state | p_fdc | Verify affixed genuine stamp, authorized cancellation date/place, readable dry intact saleable cover, and recorded rejects before first release. Exclude mint stamp production and existing-cover repacking. | usps-fdc; unsd-cpc3 |
| v_boundary | whole system | Reconcile upstream providers and owned/outsource operations without duplicate stamp, envelope, integral adhesive, cancellation service, postage entitlement, transport or packaging. Keep unresolved species and historical stocks explicit. Method checks confer no scientific approval, classification acceptance or publication. | canada-service |
| v_lineage | p_fdc | Audit Q = 0 records, all period WIP vectors, matching transfer pairs, campaign membership, and once-only first-release IDs before normalization. Require each actual freight or cancellation activity to have exactly one provider/direct owner; unresolved inclusions block a complete dataset. |  |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | secondary_dataset; background_dataset |
| downstream_use | Physical official paper first-day cover supply at the same bare first-release gate |
| allowed_use | Same declared issue/configuration after provider and data-quality review |
| excluded_use | Postal delivery, mint stamp manufacture, resale of historical covers, customer cancellation services, complete lifetime footprint or all-38962 coverage |
| required_metadata | All reference qualifiers; operator and sites; batch Q/N; provider boundaries; adhesive/ink supply state; allocation; rejects and rework; transport and packaging gate |
| required_quality_disclosure | Actual collection coverage, identity and chemistry gaps, source limitations, uncertainty and separate scientific/translation review state |
| update_trigger | Issue, operator, envelope, stamp/adhesive, cancellation method/ink, supply state, gate, allocation or provider change |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| unsd-cpc3 | official_guidance | UNSD, CPC Version 3.0 explanatory notes, 30 June 2025, complete PDF pp152,197; https://unstats.un.org/unsd/classifications/Econ/Structure/Detail/EN/2100/38962 | Classification boundary only; unused stamps versus named first-day covers; no quantitative manufacturing evidence. |
| usps-fdc | official_guidance | USPS, Putting a Stamp on the American Experience First Day Cover, product 894516, issue 2025-07-23, product description/details/specifications; https://store.usps.com/store/product/putting-a-stamp-on-the-american-experience-first-day-cover-S_894516 | Actual completed collectible, affixed cancelled stamp, black-and-white authorized marking and mail-use exclusion; no factory measurements or mass defaults. |
| canada-product | official_guidance | Canada Post, Standing orders, Official First Day Covers section; https://www.canadapost-postescanada.ca/cpc/en/support/kb/sending/stamps-packaging/create-a-philatelic-standing-order.page | Independent product-state corroboration; official cover bears stamp cancelled at date/place of issue; not USPS process observations. |
| canada-service | official_guidance | Canada Post, Official First Day Covers, complete support article; https://www.canadapost-postescanada.ca/cpc/en/support/articles/philatelic-products/official-first-day-covers.page | Customer-owned cover affixing/cancellation and actual return mailing distinguished; not a combined USPS/Canada SKU or assumed transport. |
| ilcd-allocation | official_guidance | European Commission JRC, ILCD Handbook General guide for LCA, Detailed guidance, March 2010, §7.9.1–7.9.2 printed p255/PDF275; https://eplca.jrc.ec.europa.eu/uploads/ILCD-Handbook-General-guide-for-LCA-DETAILED-GUIDANCE-12March2010-ISBN-fin-v1.0-EN.pdf | Attributional multifunctionality and subdivision before allocation; no transferred allocation factor or price rule. |
