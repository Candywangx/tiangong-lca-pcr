---
pcr_id: pcr.other-transportable-goods-except-metal-products-machinery-and-equipment.wastes-or-scraps.used-pneumatic-tyres-of-rubber
language: en-US
sync_with: pcr.zh-CN.md
status: candidate
content_maturity: authored_methodology
---

# Retreadable used commercial truck tyre casings at first on-site purchase acceptance

## 1. Scope and Applicability

This attributional method covers physical dry inspection, weighing and grading of previously used whole, rim-free commercial truck pneumatic rubber tyre casings (not yet retreaded in the current supply cycle; record prior retread history) at the seller location, ending at the first documented acceptance, payment and ownership handoff as retreadable casings. Include actual source handling, inspector travel, inspection equipment and unsuccessful inspection effort. The product is an unretreaded casing, not a new tyre or a finished retread. It is a preparation/qualification supply activity, not manufacture of a new casing. Re-sale, internal transfer, reinspection or acceptance at a later retreader does not create new production. Sources support a bounded technical synthesis, not one observed factory or lot.


Restrict the physical route to loose unwrapped casings and dry inspection, with no pallet/packaging pool, washing, intentional cutting, buffing, repair, tread application or curing. Verify these absences from actual records before use; packaging, chemicals or other actual exchanges require separately named cards and scope review, never a zero assumption. Exclude roadworthy second-hand tyre retail, passenger/aircraft/OTR tyres, new tyres (36111–36113), finished retreads (36120), separate treads/camel-back (36115), rims/tubes/flaps and definitively unusable tyres/material-recovery scrap (39250 context). Whole shape alone proves neither retreadability nor 39260 applicability.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.other-transportable-goods-except-metal-products-machinery-and-equipment.wastes-or-scraps.used-pneumatic-tyres-of-rubber |
| classification_refs | CPC 3.0 39260; narrower |
| covered_products | Previously used whole commercial truck pneumatic rubber casings individually accepted for retreading |
| excluded_products | New and finished retread tyres; definitively unusable scrap; roadworthy tyre retail; separated rubber or tread |
| representative_product | One traceable size/grade cohort of unmounted unretreaded truck casings |
| production_route | Owner presentation → custody/paired weighing → dry individual inspection and grading → first on-site purchase acceptance/payment/title transfer |
| market_state | Retreadable casing at seller handoff, before retreader transport or processing; actual legal/economic state disclosed |


## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Supply qualified used truck casings for subsequent retreading |
| How much | 1 kg net casing mass first accepted |
| How well | Individual tread/sidewall/bead/internal-condition inspection and documented purchaser retreadability specification; no universal numeric threshold or guaranteed later retreader pass |
| How long or cycle | One unique first commercial acceptance; no distance or second-life claim |
| reference_flow_link | released_whole_tyres |

| Field | Value |
| --- | --- |
| Reference amount | 1 |
| Reference product flow | Retreadable used commercial truck pneumatic rubber tyre casing |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | Actual prior use, previous retread history and holder; commercial truck class, size, construction, condition and inspection specification/results; whole rim/tube/flap-free unretreaded state; net mass, free-water/soil/packaging exclusion; legal/economic state and inherited burden; source and inspector; acceptance/payment/title/custody timestamps; first-release lot Q; rejected and non-purchased lots; WIP/FG stocks and return links; geography/period; actual equipment/electricity supplier; outsourced inspection/travel coverage; loose unwrapped route evidence; allocation keys |


Declare every qualifier in dataset metadata or equivalent fields. The single reference Product UUID remains unresolved; verify a compatible native Product before final dataset use. Mass/kg support is not a casing identity, grade, density or default mass per tyre.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| net_reference | reference product | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Use paired calibrated gross/tare weights and separately measured free water, soil and external articles. Q is unique first-accepted net casing kg; counts require measured lot mass, never generic tyre weight. |
| electric_conversion | site_electricity | Energy `f6811440-ee37-11de-8a39-0800200c9a66` | MJ | Metered kWh × 3.6 = MJ. Energy points to Units of energy 93a60a57-a3c8-11da-a746-0800200c9a66 (MJ=1; kWh=3.6). This is metering support only: verify actual supplier native property and coefficient independently; same unit group does not imply Net calorific value. |
| raw_conversion | all inventory rows | row numerator | original unit | Keep raw units; convert each numerator before attribution and divide by Q once only. Crew vehicle-km is not goods t*km; a bundled service must not also add the same provider electricity/travel. |


## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Actual used truck casings presented by the lawful holder for dry inspection at source, with custody and inherited history disclosed |
| starting_condition_role | Foreground preparation/qualification origin; not manufacture and not automatic zero inherited burden |
| product_classification_scope | 39260 narrower retreadable casing subset; no claim to whole-leaf coverage |
| recursive_input_rule | Trace any previously released casing to its original cohort; link upstream burden once, add only actual incremental services, never create Q from resale |
| upstream_dataset_requirement | Actual casing history/burden convention, compatible inspection and crew-visit providers, actual electricity supplier when used; no automatic credit |
| disclosure | Sites/period, custody versus ownership, inspection outcomes, rejected lots, provider overlaps, loose route, stock vectors, pending identities and downstream exclusions |


| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| boundary_complete | whole_supply | Include all source preparation/weighing/inspection effort and crew travel through first on-site acceptance. Provider-performed operations remain included by one owned service inventory; contract/payment alone is not proof of physical inspection or coverage. Record both custody and title events. | `cash-casing-terms`; `cash-casing-faq` |
| boundary_gate | released_whole_tyres | Freeze first acceptance Q at documented inspection plus purchase/title handoff. Subsequent loading, storage, transport to retreader, independent retreader inspection and returns belong to linked post-release service ledgers, not another Q. Buffer/rework before acceptance remains pre-release. | `cash-casing-terms`; `jrc-ilcd-attributional-2010` |
| boundary_route | whole_supply | Verify no packaging/pallet pool or material transformation in this loose dry route. Any actual packaging requires separate purchase, first non-purchase external receipt (including incoming-load/loan/free-transfer), true same-item return, stock and outlet ledgers and one-time burden attribution before scope acceptance. Scrap/disposal and finished retreading are separate functions. | `cash-casing-terms`; `wco-hs2022-rubber` |


## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| whole_supply | Source dry casing qualification | required | Declared first-purchase casing route | foreground | released_whole_tyres |


### Process: Source dry casing qualification (`whole_supply`)

#### Inputs

##### Product flows

###### Used commercial truck pneumatic rubber casing awaiting grading (`offered_casing`)

Record only real physical custody receipts before grading, separately from owner presentations never taken into custody. Trace actual prior use, unmounted whole state, source burden and legal/economic status. The archived Waste Tire record is typed Product flow, but its waste/pyrolysis description does not qualify a retreadable casing. Retained rubber/steel/textile are constituent subaccounts, not purchases.


- Selected flow: Used commercial truck pneumatic rubber casing awaiting grading

- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg

- Amount rule: Use the single section 8 normalization of this row raw numerator from cp_mass.

- Value mode: `foreground_record`

- Specificity: `site_specific`

- Normalization basis: per reference flow

- Basis kind: `process_output`

- Evidence kind: `collected_record`

- Collection protocol: `cp_mass`

- Sources: `cash-casing-terms`; `cash-casing-faq`; `jrc-ilcd-attributional-2010`



###### Purchased electricity for casing inspection (`site_electricity`)

Conditional actual meter load including weighing, inspection, idle and cleanup. The flow UUID and native supplier property remain unverified; Energy/MJ records measured demand, not a selected background process or voltage/mix. Manual activity does not imply zero site load.


- Selected flow: Purchased electricity for casing inspection

- Flow property / unit: Energy `f6811440-ee37-11de-8a39-0800200c9a66` / MJ

- Amount rule: Use the single section 8 normalization of this row raw numerator from cp_energy.

- Value mode: `foreground_record`

- Specificity: `site_specific`

- Normalization basis: per reference flow

- Basis kind: `process_output`

- Evidence kind: `collected_record`

- Collection protocol: `cp_energy`

- Sources: `cash-casing-terms`; `cash-casing-faq`; `jrc-ilcd-attributional-2010`



###### Outsourced dry truck-casing inspection service (`inspection_service`)

Conditional actual external inspector service, with lot, specification, measured activity and included resources disclosed. For provider-owned work use its inventory once; do not duplicate included local electricity or travel. In-house work has no fictitious purchased service.


- Selected flow: Outsourced dry truck-casing inspection service

- Flow property / unit: Inspection service / inspection event

- Amount rule: Use the single section 8 normalization of this row raw numerator from cp_services.

- Value mode: `foreground_record`

- Specificity: `site_specific`

- Normalization basis: per reference flow

- Basis kind: `process_output`

- Evidence kind: `collected_record`

- Collection protocol: `cp_services`

- Sources: `cash-casing-terms`; `cash-casing-faq`; `jrc-ilcd-attributional-2010`



###### Road inspection-crew vehicle visit service (`crew_visit`)

Conditional separate crew visit: actual route including unsuccessful visits and return legs, vehicle class and passengers. This is not goods freight and no payload t*km may be invented. If bundled in inspection_service, retain activity evidence but exclude the duplicate exchange burden.


- Selected flow: Road inspection-crew vehicle visit service

- Flow property / unit: Vehicle travel / vehicle*km

- Amount rule: Use the single section 8 normalization of this row raw numerator from cp_services.

- Value mode: `foreground_record`

- Specificity: `site_specific`

- Normalization basis: per reference flow

- Basis kind: `process_output`

- Evidence kind: `collected_record`

- Collection protocol: `cp_services`

- Sources: `cash-casing-terms`; `cash-casing-faq`; `jrc-ilcd-attributional-2010`



#### Outputs

##### Product flows

###### Retreadable used commercial truck pneumatic rubber tyre casing (`released_whole_tyres`)

The sole reference Product row: unretreaded commercial truck casing, inspected and purchased as retreadable at the source gate. Record acceptance/payment/title and actual custody. No verified Product UUID; do not substitute waste, finished retread or new tyre identity. Later retreader suitability and safety need independent testing. Closing accepted stock is already part of Q.


- Selected flow: Retreadable used commercial truck pneumatic rubber tyre casing

- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg

- Amount rule: 1 kg

- Value mode: `foreground_record`

- Specificity: `site_specific`

- Normalization basis: per reference flow

- Basis kind: `process_output`

- Evidence kind: `collected_record`

- Collection protocol: `cp_mass`

- Sources: `cash-casing-terms`; `cash-casing-faq`; `jrc-ilcd-attributional-2010`



###### Reusable used commercial truck casing returned without purchase (`returned_casing`)

Only actual custody return of a still-reusable casing rejected for commercial/size reasons. Record original intake and reason; a presentation left at the owner location without custody transfer is not a material exchange. True return is not new production or negative purchase.


- Selected flow: Reusable used commercial truck casing returned without purchase

- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg

- Amount rule: Use the single section 8 normalization of this row raw numerator from cp_mass.

- Value mode: `foreground_record`

- Specificity: `site_specific`

- Normalization basis: per reference flow

- Basis kind: `process_output`

- Evidence kind: `collected_record`

- Collection protocol: `cp_mass`

- Sources: `cash-casing-terms`; `cash-casing-faq`; `jrc-ilcd-attributional-2010`



##### Waste flows

###### Whole non-retreadable scrap truck tyre casing (`scrap_casing`)

Only physically transferred definitively unusable tyre scrap from actual custody, with inspected rejection and lawful receiver records. Disposal left with the owner is not our waste transfer. Separate purchased disposal function and its provider/transport burdens; negative disposal price is not a product credit. No verified Waste UUID is claimed.


- Selected flow: Whole non-retreadable scrap truck tyre casing

- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg

- Amount rule: Use the single section 8 normalization of this row raw numerator from cp_mass.

- Value mode: `foreground_record`

- Specificity: `site_specific`

- Normalization basis: per reference flow

- Basis kind: `process_output`

- Evidence kind: `collected_record`

- Collection protocol: `cp_mass`

- Sources: `cash-casing-terms`; `cash-casing-faq`; `jrc-ilcd-attributional-2010`



No planned elementary emission is inferred from dry visual inspection. Any actual release requires a separate named chemical species, compartment, measurement method and provider ownership; pollutants already inside a provider inventory are not added again. Unknown actual releases remain a completeness hold.

## 7. Allocation and Co-product Handling

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| allocation_scope | whole_supply | Document actual source-tyre history, prior use and economic/legal state and the study-specific inherited-burden/reuse convention. A low price, waste label or title transfer does not establish a zero burden or avoided new-tyre/rubber/landfill credit. | `jrc-ilcd-attributional-2010` |
| allocation_subdivision | whole_supply | First exclusively attribute and subdivide inspection, rejects, disposal and post-release services. Retain failed visits, zero-output periods and causal rework. Services performed for other functions and owner-retained rejects have explicit activity owners; do not erase common inspection effort. | `jrc-ilcd-attributional-2010` |
| allocation_physical | whole_supply | For each remaining shared exchange demonstrate its determining physical cause. Measured inspection time may support equipment allocation; crew route and visit purpose govern travel. Do not use casing mass, count or price as a universal key. Retain supplier inclusions and reconcile all shares. | `jrc-ilcd-attributional-2010` |
| allocation_residual | whole_supply | Only if subdivision and determining physical causality cannot resolve genuine joint burdens use documented contemporaneous same-gate actual-condition market values for residual economic allocation. Remove later transport/retreading margins and distinguish disposal fees from positive product values. Missing coherent values remain unresolved. | `jrc-ilcd-attributional-2010` |


## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

Collect raw, unnormalized records including all failed and idle intervals. Aggregation basis labels do not perform division. For each exchange convert and attribute its raw numerator first; only single_intensity performs one Q division. No literature default quantity is prescribed.

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cp_mass | whole_supply | Custody/quality/mass | Weigh and acceptance ledger | lot/item; prior use; owner; size; gross/tare; free water/soil/articles; net kg; count; custody time; tread/sidewall/bead/internal results; inspector; decision/spec; payment/title; first release; rejects; returns; opening/closing WIP/FG and burden vectors | Calibrated paired weighing; independent contaminant weights; signed individual inspection and commercial/custody reconciliation; no assumed kg/tyre | kg; item | each custody and decision | full cohort including failed lots and carryover | actual seller and inspection sites | per reference flow | Calibration; paired tickets; source history; specifications; signatures; payment/title receipts; full stock balance |
| cp_energy | whole_supply | site_electricity | Meter/provider records | meter start/end; kWh; time; site; voltage; supplier; stage; idle; cleanup; losses; provider inclusions; allocation key | Read calibrated meter difference and reconcile billed/site load; identify the actual native supplier property separately | kWh; MJ | each interval | full same cohort period | actual inspection site/provider | per reference flow | Meter calibration and primary supply records; overlap reconciliation |
| cp_services | whole_supply | Inspection and crew travel | Provider/activity logs | provider; actual lot; inspection event; equipment/time; service inventory boundary; origin/destination; vehicle; distance; unsuccessful visits; return legs; other functions; payment; inclusions | Match supplier primary inventory to signed physical service and route records; unbundle only verified inclusions | inspection event; vehicle*km | each visit and service | all matched successes/failures and returns | actual source and providers | per reference flow | Signed inspection records; provider inventories; route logs; justified allocation and no-overlap proof |


### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| acceptance_q | released_whole_tyres | Q = sum of unique first-accepted net casing kg with matched inspection/payment/title evidence. A later resale, transfer, reinspection or return adds no Q. Closing accepted FG is already in Q; opening accepted FG belongs to its historical cohort. | cp_mass | Q | `jrc-ilcd-attributional-2010`; `cash-casing-terms` |
| raw_attribution | all inventory rows | Convert raw records to row units, then assign exclusive and justified shared burdens. A_j = attributed current raw load + opening WIP inherited burden vector - closing WIP inherited burden vector. Reconcile rejects/rework and supplied casing history separately; stocks carry every exchange burden, not just casing kg. No Q division here. | cp_mass; cp_energy; cp_services | A_j | `jrc-ilcd-attributional-2010`; `cash-casing-terms` |
| single_intensity | all inventory rows | I_j = A_j / Q for Q > 0, once only, in the row numerator unit per 1 kg reference flow. Cards and aggregation consume this same result. Q=0 retains all burdens and provides no unit intensity; the reference output is 1 kg. | A_j; Q | I_j | `jrc-ilcd-attributional-2010`; `cash-casing-terms` |
| physical_balance | whole_supply | For one custody control surface: opening physical stocks + actual external receipts = closing stocks + actual external departures + separately measured losses. Unreceived presentations are neither receipt nor departure. First acceptance transfers pre-release stock to FG internally; it is not an extra external departure. Contaminants and constituents are separate non-additive subaccounts. No invented residual output. | cp_mass | physical balance | `jrc-ilcd-attributional-2010`; `cash-casing-terms` |
| post_release_service | whole_supply | Keep original cohort Qc fixed; link later storage/loading/transport/returns and opening/closing FG service-burden vectors. Assign actual incremental service to that cohort. A delivered-casing dataset needs its own actual shipment/stock reconciliation. Combine linked raw burdens and cancel internal handoffs; never divide an existing I_j by Q or serviced mass again. | cp_mass; cp_services; cp_energy | cohort service ledger | `jrc-ilcd-attributional-2010`; `cash-casing-terms` |


### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| dq_identity | all inventory rows | Verify native flow type, bilingual name, physical state, geography, property/reference coefficient and exact unit support. A name or unit-group match is insufficient. Missing product UUID prevents final identity qualification. | Direct native records and actual lot/provider compatibility |
| dq_grade | released_whole_tyres | Keep individual retreadability observations and acceptance specification; no universal tread-depth, age, mass, composition or life default. Commercial purchase does not prove future retreader pass or road safety. General waste-only web wording is not lot-specific grading evidence. | Signed inspection, actual purchase/custody and local legal documentation |
| dq_complete | whole_supply | Distinguish missing data from verified absence; include failed/idle effort, carryovers and all actual physical flows. Resolve material losses or add separately named exchanges before claiming complete LCI. | Full-period balances, provider reconciliation and uncertainty register |


## 9. Validation Rules

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| validate_reference | released_whole_tyres | Require all qualifiers, one first-acceptance link, actual retreadable grade, payment/title/custody evidence and compatible native Product identity. Do not use definite scrap or a finished retread as the reference. | `cash-casing-terms`; `cash-casing-faq`; `wco-hs2022-rubber` |
| validate_balance | whole_supply | Reconcile raw mass/custody, WIP/FG burden vectors, actual suppliers, failed visits, rejected lots and all returns. No duplicate Q, provider load, packaging or constituent burden. Missing data prohibit a complete unit result. | `jrc-ilcd-attributional-2010`; `cash-casing-terms` |
| validate_normalization | all inventory rows | Check raw conversion and attribution before one A_j/Q division. Schema/projection and finite measurement checks do not establish physical balance, source applicability, native supplier compatibility, scientific/safety approval or translation review. | `jrc-ilcd-attributional-2010` |


## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | secondary_dataset; background_dataset |
| downstream_use | Qualified incoming retreadable casing at source purchase gate, with later delivery/retreading modelled separately |
| allowed_use | Only matching truck casing grade, dry loose route, source acceptance gate, source burden convention and independently reviewed completed dataset |
| excluded_use | Finished retread manufacture; tyre driving life/safety claim; material-recovery scrap; automatic reuse credit; repeated resale as production; whole CPC leaf coverage |
| required_metadata | Section 3 qualifiers, raw protocols, cohort/Q and custody links, providers, allocation keys and unresolved identities |
| required_quality_disclosure | Missing versus verified zero; inherited burden and stocks; pending native identities; source limits; actual legal/quality evidence and uncertainty |
| update_trigger | Changed tyre grade/specification, route/gate, actual packaging, source legal/economic state, provider identity or material evidence |


## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| unsd-cpc3-2025 | official_guidance | UNSD, CPC Version 3.0 structure and complete explanatory notes, 30 June 2025, PDF p.202 (39250/39260); current registry https://unstats.un.org/unsd/classifications/Econ/Structure/Detail/EN/2100/39260 | Current category and adjacent scrap heading; notes provide titles only, not an explicit retreadability threshold. Narrower casing scope is methodological interpretation, not quoted CPC text. |
| wco-hs2022-rubber | official_guidance | World Customs Organization, HS Nomenclature 2022, Chapter 40 note 6 and headings 40.04/40.12 (4012.20). https://www.wcoomd.org/-/media/wco/public/global/pdf/topics/nomenclature/instruments-and-tools/hs-nomenclature-2022/2022/0740_2022e.pdf?la=en | Independent boundary counterevidence: definitely unusable rubber articles are scrap even without cutting. HS2022 is distinct from CPC3; no automatic cross-edition mapping. |
| cash-casing-terms | extension_guidance | Cash’s Tire Recycling, Terms of Service §§4.4, 5.1–5.6, 6 and 7. https://cashstirerecycling.com/terms | First-party on-site inspection, purchase/payment/title handoff and rejected-casing alternatives. Separate commercial acceptance from later transport/retreading. Texas practice and general waste wording are not local legal authorization, a measured inventory or universal quality specification. |
| cash-casing-faq | extension_guidance | Cash’s Tire Recycling, FAQ, Used Commercial Tires & Casings. https://cashstirerecycling.com/faq | Actual commercial truck retreadable-casing market and visual/structural inspection dimensions. Same operator as terms, not an independent second source; sizes are examples, not default mass or guaranteed stock. |
| jrc-ilcd-attributional-2010 | official_guidance | European Commission JRC, ILCD Handbook: General guide for Life Cycle Assessment — Detailed guidance, first edition March 2010, §§7.9.2–7.9.3, printed pp.255–272. https://eplca.jrc.ec.europa.eu/uploads/ILCD-Handbook-General-guide-for-LCA-DETAILED-GUIDANCE-12March2010-ISBN-fin-v1.0-EN.pdf | Conditional attributional subdivision, determining physical causality and residual same-gate actual-condition market values. Ledger/formula implementation is this PCR synthesis; no automatic tyre cut-off, credit, numeric default or full ILCD conformance. |
