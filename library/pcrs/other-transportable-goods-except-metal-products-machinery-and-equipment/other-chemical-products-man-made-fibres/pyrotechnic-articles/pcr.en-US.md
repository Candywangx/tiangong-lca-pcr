---
pcr_id: pcr.other-transportable-goods-except-metal-products-machinery-and-equipment.other-chemical-products-man-made-fibres.pyrotechnic-articles
language: en-US
status: candidate
sync_with: pcr.zh-CN.md
---

# Sealed civilian hand-held maritime distress signals: first French market placement accounting

## 1. Scope and Applicability

This method covers non-operational environmental accounting for a documented cohort of complete, sealed civilian hand-held maritime distress signals first placed on the French national market for paid or free onward supply. Earlier factory release abroad is compatible. The foreground is the first-national-placement accounting gate, evidenced through existing anonymized environmental and administrative records. It creates no manufacturing workstation, factory-release requirement or purchaser specification.

PYReO's 2022 and 2024 market tables separately report hand-held articles, using category-average weights to estimate national mass. The covered population expanded from recreational to professional maritime users in 2022. These facts establish neither a participant's actual article/pack mass nor an inventory factor, collection probability or product performance. Use actual cohort records instead of these averages (`pyreo-market-2022`, `pyreo-market-2024`).

The reference is a mass-based declared accounting unit at this gate, not a rescue-service functional unit or full-life-cycle comparison. Finished-product production stays inside a complete supplier environmental black box. Expired-product collection has a different population and function; abolition of the one-for-one rule prevents attributing an old returned article to a new first-market item merely because both appear in one year (`pyreo-committee-2023`, `ademe-pchim`).

Only existing non-sensitive written records are needed. Do not open products, undertake handling trials or request composition, manufacture, performance, activation, operation or use information. Missing evidence prevents a qualified dataset; it is not a hypothetical process or zero burden.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.other-transportable-goods-except-metal-products-machinery-and-equipment.other-chemical-products-man-made-fibres.pyrotechnic-articles |
| classification_refs | CPC 3.0 35460, Pyrotechnic articles. The scoped narrower relation was accepted under docs/adr/2026-11-22-accept-cpc-35460-civilian-maritime-distress-signal-first-french-market-placement.md. Retain the frozen June 2025 coordinate. October 2026 CPC3 row 1569 corroborates the title and HS 2022 heading 3604, without replacing the frozen source. |
| covered_products | Complete sealed civilian hand-held maritime distress-signal articles first placed on the French national market for paid or free onward supply, within one evidenced cohort and responsible-declarant population. Identify professional/recreational scope where relevant. |
| excluded_products | Smoke signals, parachute signals, festive articles, electrical substitutes and other product categories; adjacent 35450 prepared explosives and initiating articles, 35440 preparations and 35470 electronic-use chemicals; components, direct-own-use-only cohorts, resale of already French-placed articles, collection/treatment as the reference function. |
| representative_product | One record-defined sealed hand-held civilian maritime distress signal, unchanged between finished-article receipt and its first French event; no brand, assumed mass or technical specification. |
| production_route | Finished-product supplier environmental black box followed by first French market accounting; actual pack/service increments are separately evidenced without expanding internal production. |
| market_state | Finished and sealed. Prior factory release and prior French placement are distinct fields; an eligible cohort article has no earlier French placement. |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Account for environmental inventory attributable to first French market placement of the specified sealed finished-product cohort. |
| How much | 1 kg net complete sealed articles, excluding separately evidenced external transport packaging. |
| How well | Documentary category, finished/sealed state, first French event, responsible declarant and applicable national issuer/year; no operating or performance claim. |
| How long or cycle | One first French event per article in the original cohort period. Later services retain that original cohort anchor. |
| reference_flow_link | reference_product |

| Field | Value |
| --- | --- |
| Reference amount | 1 |
| Reference product flow | Sealed civilian hand-held maritime distress signal first placed on the French market |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | Anonymous product/cohort identity; national scope and applicable issuer/year; responsible declarant and any sole-brand reseller role; paid/free onward-supply branch; prior French placement; separate factory-release, French-event, filing and actual handoff dates; measured net whole-article mass and pack exclusion; physical custody perimeter covering the actual custodian at the first French event, including an evidenced anonymous entrusted custodian where applicable; supplier environmental-bundle coverage; attribution interval and original-cohort denominator; conditional-exchange applicability and missing coverage. |

All qualifiers must be declared in dataset metadata or an equivalent package field. No exact product UUID is inferred from a component, chemical, waste or another signal category.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| reference_net_mass | reference product | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Use existing traceable net-mass records of the complete sealed article through cp_cohort; exclude separately evidenced external packs, never an undocumented part of the article. No physical handling is undertaken for data collection. |
| cohort_mass_basis | all inventory rows | Mass | kg | Positive original cohort net mass Qc is the denominator. Use measured whole-article or homogeneous measured-lot evidence with a sampling basis for count-to-mass conversion. A national category average is not a local measured value. |
| separate_outer_pack | box_purchased, box_first_nonpurchase, box_true_return, box_outward, discarded_outer_box | Mass | kg | Every actual packaging type requires its own measured mass and physical/burden ledger; no assumed box per article or estimated pack subtraction. |
| accounting_energy | accounting_electricity | Energy `f6811440-ee37-11de-8a39-0800200c9a66` | kWh | Preserve existing metered accounting-electricity kWh. Units of energy `93a60a57-a3c8-11da-a746-0800200c9a66` supports 1 kWh = 3.6 MJ. This is measurement support; qualify the eventual supplier flow's native property separately. A shared energy unit group does not imply net calorific value. |
| zero_current_placement | reference product | Mass | kg | If current first placement is zero, issue no new current-placement intensity and never divide by zero. Preserve already-placed stock and burdens. An independently reported later-service intensity needs its evidenced positive original cohort denominator. |

## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Complete sealed finished articles with documentary prior-French-placement state, inherited environmental burdens and external-pack coverage; prior foreign factory release is permitted. |
| starting_condition_role | Finished-product environmental accounting interface, not a zero-burden starting material or a newly manufactured product. |
| product_classification_scope | Bounded hand-held civilian maritime product within 35460; frozen June 2025 coordinate with classification-only October 2026 corroboration. |
| recursive_input_rule | Link a compatible complete whole-product environmental bundle once; no internal reconstruction and no repeated first-French-placement gate for an already French-placed article. |
| upstream_dataset_requirement | Compatible whole finished-product inventory, reference amount/property/unit, state, temporal relevance and actual pack/service coverage; missing coverage is a qualification gap. |
| disclosure | Declare cohort, national issuer/year, responsible role, anonymous custody perimeter, prior placement, inherited burdens and actual handoffs with supplier/pack/service overlaps. Procurement detail, address, route, equipment and product technical information are unnecessary. |

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| boundary_national_event | first placement | Bind the dated French definition and actual responsible declarant. Distinguish domestic manufacture, first national introduction/import, paid/free onward supply and sole-brand reseller responsibility. Direct own use is outside the selected onward-supply cohort but stays in a separate branch when reconciling a broader statutory population, alongside applicable statutory exclusions. Foreign factory release, filing, sale elsewhere or later dispatch alone is not the French event. | french-producer-definition, ademe-pchim |
| boundary_closed_product | supplied article | Keep the supplied sealed article's complete environmental bundle as a black box. Do not reconstruct manufacture, internal materials, operating conditions or performance. Missing supplier coverage is unknown, not invented inputs/emissions or an impact factor. | ec-pef-method, pyreo-market-2024 |
| boundary_two_stocks | physical article perimeter | Limit this method to a cohort whose evidenced physical perimeter covers the actual custodian at the first French event, including an anonymous entrusted third party if documented. Maintain adjacent pre-French-placement and already-French-placed stock books over that same perimeter. A declarant's legal title alone cannot bring outside goods into these books. Record first-French events outside this perimeter separately in the national-report bridge, not as fictitious local receipt/dispatch or Q in these books. Q leaves the former and enters the latter once, cancelling in their sum. Opening already-placed stock, old returns, resale and subsequent shipments never create Q. Samples still inside remain stock. | french-producer-definition, ademe-pchim |
| boundary_packs_services | conditional interfaces | Include real separately evidenced external packaging and attributable services once, without overlap with supplier coverage. A fee or payment is neither a physical exchange nor an environmental factor. Do not assume boxes, pallets, electricity or transport exist; any other actual interface needs its own supported atomic row before completeness. | ademe-pchim, ec-pef-method |
| boundary_later_events | after first placement | The gate may occur without physical outward movement. Reconcile later stocks and services without another reference output. Expired-product collection/treatment is a separate function, with no one-for-one attribution or automatic credit to newly placed goods. | pyreo-committee-2023, ademe-pchim |

### Mutually Exclusive Movement Condition Cards

Each crossing has one origin/destination type. Article cards link cp_article_ledger and cp_cohort; box cards link cp_outer_box. These are applicability rules, not instructions to create physical movements. Post-gate reconciliation records do not create additional gate LCI outputs. This method's physical cohort includes the actual custodian at the event; if only the declarant's own perimeter is evidenced, outside events stay outside both U/V books and are reported separately. All A_V/R_V/D_V/W_V entries retain their own original cohort, original quantity, prior cumulative burden and exclusive assignment through cp_later_services.

| condition_id | actual condition | ledger consequence | inventory link or exclusion |
| --- | --- | --- | --- |
| article_first_unplaced_in | First external receipt; sealed article has no prior French placement | A_U; record external remaining burden separately from new burden | sealed_article_input, only its actual cohort-attributed share; not automatically Q |
| article_unplaced_true_return | Same unplaced item returns after its own earlier outward crossing; still no French placement | R_U, disjoint from first receipt | sealed_article_input carryback, no new manufacture |
| article_first_french_event | Documented first French event for an eligible pre-placement item | Q leaves U and enters V once, even without physical movement | reference_product once; no invented shipment |
| article_unplaced_out | Actual pre-placement return/transfer without a qualifying French event | X_U with receiving burden assignment | unplaced_article_transfer; no Q or automatic credit |
| article_unplaced_waste_out | Actual whole sealed unplaced-article waste handoff outside | W_U | unplaced_article_waste; held stock is not a handoff |
| article_first_already_placed_in | First external receipt of an article already French-placed elsewhere | A_V; preserve its own earlier cohort assignment | post-gate reconciliation only; no new-cohort sealed_article_input or reference_product |
| article_placed_true_return | Actual return of the same previously French-placed item sent out earlier | R_V | post-gate reconciliation and any evidenced service increment, no new Q |
| article_placed_out | Actual later dispatch, transfer, supplier return or export | D_V with exclusive destination subtype and remaining burden | post-gate reconciliation, not another reference_product |
| article_placed_waste_out | Actual outward waste handoff of an already French-placed article | W_V | distinct end-of-life assignment, not unplaced_article_waste or a new-market credit |
| outside_first_french_event | First French event outside the evidenced physical perimeter | separately record Qoutside; national eligible total = Qinside + Qoutside, with disjoint items | no virtual local receipt/dispatch; Qinside alone enters this method's U/V and denominator |
| retained_or_held | Sample, hold, rejection or registration change while still inside | stays in U1/V1 according to prior French placement | no fictitious crossing; retain state record |
| box_purchased_in | Actual purchased box first received from outside | P | box_purchased; acquisition/use burdens separate |
| box_first_nonpurchase_in | First external receipt without purchase or same-box prior outward link, with goods or separately borrowed/free | F | box_first_nonpurchase regardless of supplier coverage |
| box_same_item_return | Actual same-box return with its original outward link | R | box_true_return; not P or F |
| box_actual_out | Actual outward box with goods, return or other transfer | O with one receiving assignment | box_outward; after-gate movement remains later-service accounting |
| box_actual_waste_out | Actual separately evidenced uncontaminated box waste handoff | W | discarded_outer_box; other waste identity unqualified |
| later_external_electricity | Existing actual later-service electricity record assigned to an old cohort | cp_later_services, Energy/kWh measurement, provider native property independently qualified | external supplemental one-exchange record only, excluded from accounting_electricity and all new-product gate inputs/outputs |
| box_still_inside | Only bookkeeping/title changes; box remains inside | K1 | no outward event; outside title-only stock cannot also enter K1 |

### Non-moving Event Reconciliation Example

This is an algebraic bookkeeping illustration, not a measured case, product weight or factor. One sealed article has an existing measured net mass m. Its actual anonymous entrusted custodian is inside the evidenced physical perimeter; the declarant need not have a local receipt or dispatch. Initially U0 = 1 article (m kg), V0 = 0. The documented first French event occurs without movement: Q = 1 article (m kg), U1 = 0, V1 = 1 article (m kg), and all external crossings are zero. In the next interval it is actually handed off: V0 = 1, D_V = 1, V1 = 0 and Q = 0; the original cohort remains 1 article and m kg. Any real later service is external supplemental inventory divided only by that evidenced original m, without another reference output. If the custodian were outside the evidenced perimeter, the event would instead be Qoutside in the national bridge; it would not enter the declarant's U/V stocks.

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| first_france_gate | Sealed finished-product first French placement accounting | required | Evidenced eligible cohort and positive original Qc; conditional cards require actual exchanges. | Attribute an existing whole-product bundle and actual pack/service increments, with no transformation. | 1 kg reference flow |

Cards define individual interfaces, not observed activities. Raw gross physical movements and cohort-attributed inventory are distinct. Opening stock is inherited stock, not a new external receipt. Later shipments do not duplicate the reference output. Retain the receiving burden assignment of non-reference transfers; no automatic co-product or negative credit.

### Process: First French placement accounting (`first_france_gate`)

#### Inputs

##### Product flows

###### Complete sealed article for this cohort (`sealed_article_input`)

Complete supplied finished articles and evidenced opening carryover support this cohort. Carryover does not trigger another purchase/production burden; qualify the compatible whole-product environmental bundle once.

- Selected flow: Sealed civilian hand-held maritime distress signal
- Flow property / unit: Mass / kg
- Amount rule: Cohort-attributable whole-article mass from the reconciled stocks divided by original cohort net mass, with actual attributable unplaced losses separately disclosed.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_article_ledger`
- Sources: `french-producer-definition`, `ademe-pchim`, `ec-pef-method`

###### Purchased external corrugated box (`box_purchased`)

Conditional on a separately documented actual corrugated outer box purchased and received across the perimeter. Acquisition and later use are separate accounts; physical turns do not repeat manufacture.

- Selected flow: Corrugated cardboard box
- Flow property / unit: Mass / kg
- Amount rule: Cohort-attributable purchased box acquisition mass divided by original cohort net mass; separate physical receipt from burden consumption.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_outer_box`
- Sources: `ademe-pchim`, `ec-pef-method`

###### First non-purchased external box receipt (`box_first_nonpurchase`)

Conditional on first external receipt accompanying incoming goods or by separate borrowing/free transfer, regardless of supplier coverage. Without a proven same-box earlier outward crossing it is not a true return. Missing inherited coverage is not zero burden.

- Selected flow: Corrugated cardboard box
- Flow property / unit: Mass / kg
- Amount rule: Cohort-attributable first non-purchased box receipt mass divided by original cohort net mass; carry the documented remaining prior burden and actual new services only.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_outer_box`
- Sources: `ademe-pchim`, `ec-pef-method`

###### Genuine same-box return (`box_true_return`)

Conditional on a real inward crossing linked to this same physical box's earlier outward crossing from the perimeter. A generic return label or title-only record is insufficient; no fresh box-manufacture burden is created.

- Selected flow: Corrugated cardboard box
- Flow property / unit: Mass / kg
- Amount rule: Cohort-attributable genuinely returned box mass divided by original cohort net mass; conserve its remaining burden and any actual new service once.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_outer_box`
- Sources: `ec-pef-method`

###### Actual accounting electricity (`accounting_electricity`)

Conditional on existing non-operational environmental records showing attributable electricity outside supplier-bundle coverage. Do not create a dedicated workstation, manufacturing operation or assumed consumption for this gate.

- Selected flow: Electricity
- Flow property / unit: Energy / kWh
- Amount rule: Attributable metered accounting-electricity quantity divided by original cohort net mass; qualify the eventual provider's native flow property independently.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_accounting_energy`
- Sources: `ec-pef-method`

##### Waste flows

No assumed waste input. Expired-product receipt belongs to a distinct collection function.

##### Elementary flows

No direct emission or withdrawal is inferred for a sealed accounting gate. Any actual additional exchange needs its own evidenced row; upstream emissions stay inside the supplier bundle.

#### Outputs

##### Product flows

###### Unique first-French-placement reference product (`reference_product`)

The unchanged sealed article crosses the accounting gate once, including when it remains in physical custody. Later dispatch is not a second output of this gate.

- Selected flow: Sealed civilian hand-held maritime distress signal first placed on the French market
- Flow property / unit: Mass / kg
- Amount rule: 1 kg
- Value mode: Fixed value (`fixed_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_cohort`
- Sources: `pyreo-market-2022`, `pyreo-market-2024`, `french-producer-definition`

###### Actual outward transfer before French placement (`unplaced_article_transfer`)

Conditional on a physical return/transfer before any French placement, assigned to its receiving accounting destination. It is not a co-product or automatic production credit. If that event actually qualifies as first French placement, classify it as Q instead.

- Selected flow: Sealed civilian hand-held maritime distress signal not yet French-placed
- Flow property / unit: Mass / kg
- Amount rule: Documented non-overlapping outward unplaced-article mass divided by original cohort net mass, with remaining burden transferred to its actual receiving assignment.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_article_ledger`
- Sources: `french-producer-definition`, `ec-pef-method`

###### Actual outward external box (`box_outward`)

Conditional on an actual outward crossing with goods, return or another transfer. Every crossing has one destination assignment. Internal allocation or title change alone is no crossing; post-gate movements remain later-service records.

- Selected flow: Corrugated cardboard box
- Flow property / unit: Mass / kg
- Amount rule: Cohort-attributable outward box mass divided by original cohort net mass; retain same-box identity, actual destination assignment and remaining burden separately.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_outer_box`
- Sources: `ademe-pchim`, `ec-pef-method`

##### Waste flows

###### Separately documented discarded outer box (`discarded_outer_box`)

Conditional on evidence that this actual corrugated external box is uncontaminated and separately handed off as paper/cardboard waste. No contamination judgement, treatment step or recovery credit is inferred; other waste identities require separate qualification.

- Selected flow: Discarded uncontaminated corrugated cardboard box
- Flow property / unit: Mass / kg
- Amount rule: Cohort-attributable separately recorded waste-box mass divided by original cohort net mass; account for actual independently evidenced recipient-service coverage once.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_outer_box`
- Sources: `ademe-pchim`, `ec-pef-method`

###### Actual whole sealed unplaced article waste handoff (`unplaced_article_waste`)

Conditional on an actual outward waste handoff of a previously unplaced sealed article. A held or reclassified article still inside is stock. A previously French-placed expired return cannot be relabelled as this unplaced loss.

- Selected flow: Whole sealed discarded civilian hand-held maritime distress signal
- Flow property / unit: Mass / kg
- Amount rule: Cohort-attributable unplaced whole-article waste mass actually handed off divided by original cohort net mass; qualify the complete recipient environmental service as a black box without prescribing treatment.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_article_ledger`
- Sources: `ademe-pchim`, `ec-pef-method`

##### Elementary flows

No product release emission, box-recovery credit or expired-product treatment emission is assumed.

## 7. Allocation and Co-product Handling

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| allocation_cohort_first | articles and services | Directly assign to the actual cohort/function, subdividing shared records first. If unavoidable, justify a measurable causal physical relationship. Fees, prices, national ratios or arbitrary equal shares are not automatic environmental factors. A status change, return or transfer is not a co-product. | ec-pef-method, ademe-pchim |
| allocation_inherited_vectors | original items/cohorts/exchanges | Separately conserve remaining already-incurred environmental inventory: opening carryover plus externally brought remaining burden plus genuinely new burden equals current attribution plus closing carryover plus mutually exclusive external/other attribution. Never recharge original manufacture on a return or erase unknown inherited burden. Physical card quantities are not automatic new-manufacture provider multipliers: only Bcurrent contributes to the reference cohort, while BX/Bother retain their separate receiving assignments without negative credits. | ec-pef-method |
| allocation_boxes | actual box pool | Distinguish purchase, first non-purchased external receipt and genuine same-box return. Define one physical perimeter; outside title-only records cannot simultaneously be outward dispatches and inside stocks. Attribute measured burden consumption and real services once; no assumed lifetime, turn count or return rate. | ec-pef-method, ademe-pchim |
| allocation_later_service | already-placed cohorts | Preserve original quantity and cumulative burden. Later services are external supplemental records under cp_later_services, explicitly excluded from the current gate inventory. Their increments do not recreate original article input, reference output or production burdens. Unlinked old or externally already-placed articles keep separate assignments. | pyreo-committee-2023, ec-pef-method |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

Use existing anonymized environmental and administrative written records. Measurement evidence concerns the closed whole article and independently measured ordinary external packaging; it never requires handling, product tests, procurement detail, address, route or equipment data. Anonymous supplier/recipient evidence references can bind compatible environmental bundles without exposing these details.

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cp_cohort | first_france_gate | unique national placement | environmental/administrative event records | anonymous item/lot; finished/sealed state; prior French placement; first French event and basis; declarant role; issuer/year; paid/free onward supply or own use; separate factory, filing and handoff dates; eligible count; measured net mass; external-pack exclusion; Qc | Reconcile documentary eligibility with existing traceable whole-article/lot measurement and independent first-supply/handoff evidence. No new handling or tests. Filing alone is insufficient. | kg | each event and closure | original cohort first-placement period | declared anonymous custody perimeter and responsible-declarant population | per 1 kg reference flow | applicable dated issuer/year; category/eligibility evidence; measured mass provenance; duplicate and declaration reconciliation |
| cp_article_ledger | first_france_gate | receipts, stocks and dispositions | anonymized stock/handoff records | item/cohort; prior French placement; opening/closing count and mass; first external receipt; true-return original outward link; Q; pre-placement transfer; later dispatch; actual waste handoff; held sample; destination assignment; bundle coverage | Join adjacent ledgers using the System Boundary condition cards. Reconcile count and measured kg independently with actual crossings and gate dates. Carry opening stock without another production claim. | kg | each crossing/state event and closure | period plus opening/closing stocks | identical explicit physical perimeter in both books | per 1 kg reference flow | both stock equations; same-item return links; distinct factory/gate/filing/handoff evidence; unexplained differences retained |
| cp_outer_box | first_france_gate | one actual outer-box pool | external-pack environmental records | actual box/type; measured empty-box mass or homogeneous measured-pack lot; opening/closing stock; purchase receipt; first non-purchase receipt with goods or borrowed/free; same-box genuine return; outward/waste handoff; supplier inclusion; remaining burden; consumed share | Reconcile one actual box type over the physical perimeter, distinguishing all external origins regardless of supplier inclusion. Use existing pack measurements. Every other actual pack type needs separate cards/ledger. | kg | each external crossing and closure | cohort interval and actual box carryover | anonymous physical box pool, excluding outside stocks | per 1 kg reference flow | measured pack evidence; disjoint origins; supplier-coverage crosswalk; no repeated acquisition/turn charge; stock and burden closure |
| cp_accounting_energy | first_france_gate | conditional actual electricity | existing environmental meter/allocation records | metered kWh; interval; attributable share; causal allocation; supplier overlap; eventual native flow/property/unit; unresolved coverage | Use existing attributable accounting-electricity totals, checking interval, allocation and supplier coverage. Retain kWh measurement independently of provider flow identity; no dedicated operation/equipment. | kWh | each reported interval and closure | actual declared accounting-service interval | only evidenced services attributable to the cohort | per 1 kg reference flow | metered-total evidence; causal share; no overlap; separately qualified provider native property/unit |
| cp_later_services | first_france_gate | external supplemental records only, excluded from current gate inventory | old-cohort stock/service environmental records | original cohort and first-placement period; original eligible count/net Qc; prior cumulative burden; A_V/R_V/D_V/W_V subtype and original return link; actual later interval; one service exchange per record, including electricity measured in kWh if present; actual native property/unit and compatible environmental provider; exclusive assignment; increment | Retain each old cohort independently. Record actual later electricity as a separate one-exchange supplemental interface, never as a new gate input; other real service exchanges need their own specific supplemental records. Missing positive original Qc permits raw service totals only, not an intensity. | source exchange unit | each actual later service/event | later interval linked to the evidenced original first-placement period | same actual custody perimeter and exclusive original-cohort assignment | per 1 kg reference flow | original positive Qc evidence; prior burden preserved; no repeated article production/reference output; independently qualified service/property/unit; no current-gate overlap |
| cp_burden_ledger | first_france_gate | inherited and new inventory | compatible whole-product/pack/service environmental bundles | original item/cohort/exchange; reference amount/property/unit; opening remainder; externally brought remainder; genuinely new vector; current attribution; closing remainder; exclusive external/other assignment; overlap | Crosswalk every vector component to physical assignments without internal product detail. Missing supplier/carryover/service data stay unknown. Preserve historical source versus current observation distinction. | source exchange unit | every bundle/assignment and closure | original cohort history and selected interval | same physical/cohort assignment crosswalk | per 1 kg reference flow | componentwise conservation; provider compatibility; mass/energy support; one-time burden retirement; explicit missing coverage |

### Calculation Rules

These conservation/attribution equations are method rules, not empirical factors. Check counts and measured mass separately. Keep every numerator and inventory vector on the same original cohort and coverage basis.

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| cohort_reference_mass | reference_product | Qc = sum of traceable net whole-article masses of distinct eligible first-French-placement articles in the original cohort. Counts cross-check the mass; count conversion needs documented homogeneous measured-lot evidence. Separately exclude external packs. Require positive Qc for an intensity. | cp_cohort; cp_article_ledger | original cohort net kg and eligible count | pyreo-market-2022, pyreo-market-2024, ec-pef-method |
| adjacent_article_stocks | article movement condition cards | U0 + A_U + R_U = Q + U1 + X_U + W_U; V0 + Q + A_V + R_V = V1 + D_V + W_V. U is physically held not-yet-French-placed stock, V physically held already-French-placed stock; 0/1 are opening/closing. A_U is first external unplaced receipt, R_U genuine same-item unplaced return, X_U unplaced outward transfer, W_U unplaced actual waste handoff; A_V is first external already-French-placed receipt, R_V genuine same-item placed return, D_V actual subsequent outward dispatch/return/transfer and W_V placed actual waste handoff. Each entry retains its own original cohort, original count/net mass and exclusive receiving assignment. First external receipt and genuine return are disjoint. Only Qinside contributes to Qc; Qoutside is separate in the national bridge. Q cancels in the sum. Held/reclassified articles stay in closing stock. | cp_article_ledger; cp_cohort | closed counts and kg over one physical perimeter | french-producer-definition, ademe-pchim |
| box_physical_stock | box movement condition cards | K0 + P + F + R = K1 + O + W independently for every actual pack type in measured kg and count. P purchased first receipt, F first non-purchased external receipt, R proven same-box return; O/W are exclusive actual outward destinations. Internal use/title change is no crossing. | cp_outer_box | box stock including all non-purchased origins | ec-pef-method, ademe-pchim |
| remaining_burden_balance | all inventory rows | B0 + Bext_remaining + Bnew = Bcurrent + B1 + BX + Bother componentwise in the same exchange unit. B0/B1 are opening/closing remaining burden; Bext_remaining already-incurred external remainder; Bnew only genuinely new burden. Current, external and other attribution are mutually exclusive. A return brings only remaining original burden plus actual new services. Allocate real waste/loss consequences explicitly, never erase them. | cp_burden_ledger; cp_article_ledger; cp_outer_box | conserved inherited/new environmental inventory | ec-pef-method |
| mass_basis_inventory | all inventory rows | Divide each separately attributable exchange numerator by original Qc in kg. Whole-period receipts, fees or physical turns cannot be divided by current placement without stock and burden attribution. Separate transfers, waste and closing stock; no automatic credit. | cp_cohort; cp_burden_ledger | exchange per 1 kg reference flow, separate other assignments | ec-pef-method |
| later_service_increment | old-cohort services | At zero current Q, preserve the old cohort quantity and cumulative burden. If original Qc is evidenced and positive, separately report later-service increment divided by that original Qc. Combining compatible intervals preserves prior cumulative intensity and adds only this increment; never recreate original article input/reference output or upstream burden. Unlinked old stock cannot use a new-cohort denominator. | cp_cohort; cp_article_ledger; cp_later_services; cp_burden_ledger | separate old-cohort service intensity, or unavailable result | pyreo-committee-2023, ec-pef-method |
| statutory_population_bridge | administrative declaration | Reconcile the selected onward-supply cohort to the broader applicable report through disjoint category/year/territory, direct-own-use, applicable-exclusion, correction and timing branches. Identify responsibility shifts to a sole-brand reseller without duplicating first national events. Separately reconcile Qinside from the evidenced custodian perimeter and disjoint Qoutside events. Filing corrections and collection totals create no physical movement or Q. | cp_cohort | declaration bridge, independent from physical stocks | french-producer-definition, ademe-pchim |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| dq_non_operational | all collection | Existing sealed-product environmental/administrative records only; no composition, manufacture, performance, operating, equipment or use information. | anonymized records and coverage statement |
| dq_first_national_event | eligibility | Bind applicable dated issuer/year, responsible declarant and first French event independently of factory release/filing. Missing dated legal/scheme confirmation is a qualification gap. | cp_cohort; independent first-supply and actual-handoff evidence |
| dq_measurement | articles and packs | Match actual closed-whole-article and external-pack mass records to cohort/state. Disclose traceability, measurement basis and uncertainty without physical handling. National averages/catalogue weights/collection totals are not substitutes. | existing measured records and any homogeneous-lot sampling rationale |
| dq_complete_interfaces | stocks and burdens | Close both article books, each actual pack book and each burden component. Additional actual packs/pallets/utilities/losses/services need individual supported rows; no data is not proof of absence. | cp_article_ledger; cp_outer_box; cp_burden_ledger; applicability evidence |
| dq_supplier | environmental bundle | Verify actual product state, extensive property/unit, original-cohort applicability and precise pack/service coverage. Flow identity alone is not environmental inventory or supplier equivalence. | whole-product/pack/service environmental evidence and overlap crosswalk |
| dq_statistics | public statistics | Keep market, collection and treatment populations/years separate, including 2022 expansion and removal of one-for-one attribution. Do not use annual ratios as original-cohort collection probabilities. | inspected PYReO accounting pages; no quantitative defaults adopted |

## 9. Validation Rules

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| validate_reference | reference product | Require positive original-cohort net mass, one unique reference output and all qualifiers. Invent no UUID, mass, factor or activity. Identity support and actual environmental-provider compatibility are separate checks. | ec-pef-method |
| validate_event_states | cohort and stock books | Verify first French event separately from factory release, filing and dispatch. Close both article equations in count/kg with Q cancelling in the sum. Old external receipts/returns/shipments and held samples never create Q. | french-producer-definition, ademe-pchim |
| validate_packs | actual pack interfaces | Check disjoint purchase, first non-purchase receipt and same-item return origins, actual outward/waste events and physical perimeter. Reconcile supplier coverage and remaining burdens once; any actual unrepresented pack type blocks completeness. | ademe-pchim, ec-pef-method |
| validate_burdens | each item/cohort/exchange | Close the componentwise remaining-burden equation with no repeated manufacture, overlapping assignments, unsupported credits or zeroed unknown coverage. Opening goods, external already-placed goods and borrowed/free packaging keep their original assignments. | ec-pef-method |
| validate_zero_and_collection | old cohorts and expired articles | Zero current placement does not erase old quantity/burden. Later-service intensity needs positive original mass and no new product output. Aggregate sold/collected totals cannot establish one-for-one collection, treatment probability or avoided-production credit. | pyreo-market-2022, pyreo-market-2024, pyreo-committee-2023 |
| validate_completeness | data package | Unknown identities, dated issuer/scheme applicability, actual mass, conditional exchanges or supplier/service inventory coverage stay explicit. Projection validity does not grant scientific approval or study qualification; missing evidence prevents a complete product-impact claim. | ademe-pchim, ec-pef-method |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | secondary_dataset only after evidence and independent qualification; bounded first-national-placement environmental inventory, not manufacture/use guidance. |
| downstream_use | background_dataset only for a compatible sealed product, original cohort, national event and disclosed gate/coverage; separately identify later-service increments. |
| allowed_use | Supported environmental accounting at this first French gate, with actual original-cohort/service reconciliation and complete compatible supplier bundles. |
| excluded_use | Full-life-cycle/PEF conformity from this gate alone; rescue-function comparisons; manufacture, composition, activation, operating or use guidance; other product categories; production inferred from resale/filings/dispatch; collection/treatment attribution from aggregate ratios. |
| required_metadata | Anonymous cohort/product; national issuer/year and scope; declarant role; first French and separate other dates; original net kg; prior placement; physical perimeter; exact supplier/pack/service coverage; all qualifiers and exchange identities. |
| required_quality_disclosure | Actual local mass/stock/burden evidence and uncertainty; source/year/category limits; unresolved UUID/provider/coverage; conditional interfaces and exclusions; independent review/scientific/study state; no national average as local measurement. |
| update_trigger | Changed issuer/year or scheme population, first-supply evidence, placement-history correction, product/pack state or supplier coverage, additional actual exchange, later original-cohort services, or resolved identity/measurement evidence. |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| unsd-cpc-june2025 | official_guidance | UNSD CPC 3.0 explanatory notes, 30 June 2025, PDF p.173: https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Exp_Notes_30Jun2025.pdf | Frozen 35460 title and neighbouring 35440/35450/35470 boundaries only; no process/factor evidence. |
| unsd-cpc-october2026 | official_guidance | UNSD explanatory notes, 23 October 2026, CPC3!A1569:D1569: https://unsdsna.azure-api.net/files/pages/cpc/CPC_Ver3_Exp_Notes_2026-10-23_for_Website.xlsx | Classification-only 35460/HS 2022 heading 3604 corroboration, without replacing the frozen coordinate or establishing whole-leaf applicability. |
| pyreo-market-2022 | dataset | PYReO activity report 2022, section 3 p.7 only: https://pyreo.fr/wp-content/uploads/2024/12/PYREO-Rapport-Act-2022_WEB-2.pdf | Separate hand-held category, national counts/estimated mass and 2022 population change; screened accounting page only, no local mass/factor/probability. |
| pyreo-market-2024 | dataset | PYReO activity report 2024, section 3 p.7 only: https://pyreo.fr/wp-content/uploads/2025/10/PYREO-Rapport-Act-2024_WEB.pdf | Explicit category-average national estimation and category/year/population limits; no local article/pack or actual foreground evidence. |
| pyreo-committee-2023 | official_guidance | PYReO stakeholder committee minutes, 13 November 2023, p.2 environmental accounting only: https://pyreo.fr/wp-content/uploads/2025/01/2023.11.13-PV-CPP-PYReO.pdf | Population expansion and abolition of one-for-one attribution; annual estimates are not actual original-cohort collection probabilities. |
| french-producer-definition | official_guidance | France, Decree 2020-1725, 29 December 2020, article 7(3°) amending R543-229(1°), original JORF text, read through its ELI article_7 alias: https://www.legifrance.gouv.fr/jorf/article_jo/JORFARTI000042754164 | Original national producer/declarant definition, corroborated by ADEME; paid/free supply, national introduction/import, own use, sole-brand reseller. Not a cohort ruling; require the applicable dated original and scheme instructions. |
| ademe-pchim | official_guidance | ADEME chemical-products EPR, producer reporting, producers concerned, packaging and accredited-body accounting sections: https://filieres-rep.ademe.fr/en/filieres-REP/filiere-PCHIM | Independent declaration/national-role context; separate placement/collection/treatment data, packaging and fee coverage. Aggregates are not participant-lot evidence; no treatment/operating content adopted. |
| ec-pef-method | official_guidance | European Commission Recommendation (EU) 2021/2279, corrected consolidated Annex I, sections 3.2.2, 4.4.9, 4.5, PDF pp.33,79,87–88: https://eur-lex.europa.eu/legal-content/EN/TXT/PDF/?uri=CELEX:02021H2279-20211230 | Independently inspected boundary/disclosure, actual reusable-pack lifecycle attribution and allocation/subdivision principles. No full PEF conformity or source example weights/reuse rates/credits adopted. |
